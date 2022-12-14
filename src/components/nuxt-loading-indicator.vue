<script>
import { computed, defineComponent, h, onBeforeUnmount, ref } from 'vue'
import { useNuxtApp } from '#app'

export default defineComponent({
  name: 'NuxtLoadingIndicator',
  props: {
    throttle: {
      type: Number,
      default: 200
    },
    duration: {
      type: Number,
      default: 2000
    },
    height: {
      type: Number,
      default: 3
    },
    color: {
      type: String,
      default: 'repeating-linear-gradient(to right,#00dc82 0%,#34cdfe 50%,#0047e1 100%)'
    }
  },
  setup(props) {
    const indicator = useLoadingIndicator({
      duration: props.duration,
      throttle: props.throttle
    })

    // Hook to app lifecycle
    // TODO: Use unified loading API
    const nuxtApp = useNuxtApp()
    nuxtApp.hook('page:start', indicator.start)
    nuxtApp.hook('page:finish', indicator.finish)
    onBeforeUnmount(() => indicator.clear)

    return () =>
      h('div', {
        class: 'nuxt-loading-indicator',
        style: {
          position: 'fixed',
          top: 0,
          right: 0,
          left: 0,
          pointerEvents: 'none',
          width: '100%',
          height: '100vh',
          opacity: 1,
          background: '#000 !important',
          backgroundSize: 'none !important',
          transition: 'none !important',
          zIndex: 999999
        }
      })
  }
})

function useLoadingIndicator(opts) {
  const progress = ref(0)
  const isLoading = ref(false)
  const step = computed(() => 10000 / opts.duration)

  let _timer = null
  let _throttle = null

  function start() {
    clear()
    progress.value = 0
    isLoading.value = true
    if (opts.throttle) {
      if (process.client) {
        _throttle = setTimeout(_startTimer, opts.throttle)
      }
    } else {
      _startTimer()
    }
  }

  function finish() {
    progress.value = 100
    _hide()
  }

  function clear() {
    clearInterval(_timer)
    clearTimeout(_throttle)
    _timer = null
    _throttle = null
  }

  function _increase(num) {
    progress.value = Math.min(100, progress.value + num)
  }

  function _hide() {
    clear()
    if (process.client) {
      setTimeout(() => {
        isLoading.value = false
        setTimeout(() => {
          progress.value = 0
        }, 400)
      }, 500)
    }
  }

  function _startTimer() {
    if (process.client) {
      _timer = setInterval(() => {
        _increase(step.value)
      }, 100)
    }
  }

  return {
    progress,
    isLoading,
    start,
    finish,
    clear
  }
}
</script>
