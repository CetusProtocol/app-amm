import{_ as E}from"./back.0c96ec39.js";import{_ as V}from"./coin-pair-name.c1be1db6.js";import{_ as D}from"./status-block.c0a4a285.js";import{_ as B}from"./coin-tab.c42d257f.js";import{_ as L}from"./assets-card.30c5cf16.js";import{_ as I}from"./coin-select.716cdf97.js";import{_ as F}from"./swap-setting.17484c88.js";import{_ as T}from"./add-liquidity.59457205.js";import{v as e,u as A,i as P,f as q,g as G,B as M}from"../server.mjs";import{_ as R}from"./_plugin-vue_export-helper.a1a6add7.js";import"#internal/nitro";const W=e.defineComponent({setup(){const o=A(),n=e.ref(20),r=e.ref(0),y=e.ref(null);let k=e.ref(!1);const C=e.ref(!1),d=e.ref("fromCoin"),m=e.ref(""),u=e.ref(""),p=e.ref(!1),c=e.ref(!1),f=e.ref(!0),v=e.ref(""),S=e.ref(""),b=e.ref(!1),t=e.ref(!1),g=e.computed(()=>o.slippage),h=e.computed(()=>Number(v.value)?"Add More Liquidity":"Enter an amount"),i=e.ref({symbol:"SOL",name:"Wrapped SOL",mintAddress:"11111111111111111111111111111111",token_mint:"11111111111111111111111111111111",decimals:9,decimal:9,official:!0,showDefault:!0,balance:111}),s=e.ref({symbol:"USDC",name:"USD Coin",token_mint:"Ap4nbtHLUbUedzKQnEGu5EQcgfonVsCX3pWdZgKq8GwH",swap_token_account:"BntG1ST8owGCUsWWuABwuDqdMVkC6LxXxdGbHzyhfRtr",decimal:9,show_decimal:4,icon:"https://archive.crema.finance/assets/mainnet/EPjFWdd5AufqSSqeM2qN1xzybapC8G4wEGGkZwyTDt1v/logo.png",balance:777}),w=e.reactive({name:"CUSDT-CUSDC",fee:"0.0001",swap_account:"6jZ1KK9LephzTTTL4pRnHwL9qBG8ymHk5Biv7vFdNtrR",token_a:{symbol:"CUSDT",name:"CUSDT",token_mint:"Gcu9zjxrjez4xWGj8bi2gTLXYN8hD8Avu2tN8xfnV65Q",swap_token_account:"EPyDSacqb9PH4SoXFov21VPnVSdMBw4N4aQurC89k8ei",decimal:8,show_decimal:4,calculate_decimal:6},token_b:{symbol:"CUSDC",name:"CUSDC",token_mint:"GHStiPQDe4HEQxtDzyFFuNjP6Z6GqYhbPqJ6oiRFmGWT",swap_token_account:"EDSWfuCTcCNXM5WeMZntLkQUjZuXeCp6mEKe5FbEXNX",decimal:8,show_decimal:4,calculate_decimal:6},price_interval:{lower_price:"0.995",upper_price:"1.0004"},version:2,tokenSwapKey:"6jZ1KK9LephzTTTL4pRnHwL9qBG8ymHk5Biv7vFdNtrR",accountType:0,isInitialized:1,nonce:255,tokenProgramId:"TokenkegQfeZyiNwAJbNbGKPFXCWuBvf9Ss623VQ5DA",manager:"AYKFAKqx6ZWWC6Hkr4Csj3AcwLxCyLpq1tRk5TRWwqyz",managerTokenA:"FQEcvmkiiP95pkJ1s17qe6P5nGZtXFph45eeSggmQRni",managerTokenB:"Ch5BksXMFLGQ6CcL2dD8MACy1JsNAr5bQWfqKS5DEFTJ",swapTokenA:"EPyDSacqb9PH4SoXFov21VPnVSdMBw4N4aQurC89k8ei",swapTokenB:"EDSWfuCTcCNXM5WeMZntLkQUjZuXeCp6mEKe5FbEXNX",tokenAMint:"Gcu9zjxrjez4xWGj8bi2gTLXYN8hD8Avu2tN8xfnV65Q",tokenBMint:"GHStiPQDe4HEQxtDzyFFuNjP6Z6GqYhbPqJ6oiRFmGWT",ticksKey:"25SMMLkn91997idMeyHSQCKHLdyAK5xgc2xy9y1ErrRL",positionsKey:"CeLGR1idhpsdym3LFm9oodFa5fkWSmGjJ1CW9SGyfzvD",curveType:0,managerFee:"0.00002",tickSpace:1,currentSqrtPrice:"0.999768630519",currentLiquity:"246658087861075202",feeGrowthGlobal0:"0.0000133953863346",feeGrowthGlobal1:"0.0000126495577595",managerFeeA:"782334664",managerFeeB:"408082167",feeView:.01,currentPriceView:.9995373145698367,currentPriceViewReverse:"1.000462899607067",index:"58",positionId:"3XLR74hZpFVGKMNwoedHccq99LR5wP3gmSueSW6pjSks",lowerTick:-50,upperTick:4,liquity:"232423209336",feeGrowthInsideALast:"0.0000133914429271",feeGrowthInsideBLast:"0.0000126457075474",tokenAFee:"0",tokenBFee:"0",minPrice:"0.99501272792",maxPrice:"1.00040006000",nftTokenAccount:"7TNUCpcZfFoTNDPynwGHRpjuvZAz9sYAeoxz2JteioxF",nftTokenMint:"3XLR74hZpFVGKMNwoedHccq99LR5wP3gmSueSW6pjSks",nftTokenId:"3XLR74hZpFVGKMNwoedHccq99LR5wP3gmSueSW6pjSks",fromCoinAmount:"1.00265752",toCoinAmount:"5.26527690",tokenaFee:"0.0000091653942686965242",tokenbFee:"0.000008948786529063001656",amountUSD:"6.2674",feeUSD:"0.00001810994010336969776027693945159814",currentStatus:"Active",id:"3XLR74hZpFVGKMNwoedHccq99LR5wP3gmSueSW6pjSks",fromPercent:16,toPercent:84}),_=e.ref(!0);function N(a){_.value=a}return{importIcon:P,changeDirect:N,fixD:q,decimalFormat:G,direct:_,positionInfo:w,clickRefresh:()=>{r.value=0,k.value=!0,setTimeout(()=>{k.value=!1},1e3)},refresh:k,autoRefreshTime:n,countdown:r,setMarketTimer:()=>{y.value=setInterval(()=>{C.value||r.value<n.value&&(r.value+=1,r.value===n.value&&(r.value=0))},1e3)},marketTimer:y,loading:C,slippage:g,fromCoin:i,toCoin:s,openCoinSelect:a=>{d.value=a,a==="fromCoin"?(m.value=(s==null?void 0:s.symbol)||"",u.value=(i==null?void 0:i.symbol)||""):(m.value=(i==null?void 0:i.symbol)||"",u.value=(s==null?void 0:s.symbol)||""),p.value=!0},onCoinSelect:a=>{d.value==="fromCoin"?(s.value&&a.symbol.toLowerCase()===(s==null?void 0:s.value.symbol.toLowerCase())&&(s.value=null),i.value=a):(i.value&&a.symbol.toLowerCase()===(i==null?void 0:i.value.symbol.toLowerCase())&&(i.value=null),s.value=a),p.value=!1},existingCoins:m,lastSelectCoin:u,currentCoinKey:d,showCoinSelect:p,fromCoinAmount:v,toCoinAmount:S,maxBtnSelect:a=>{a==="fromCoin"?(f.value=!0,v.value=i&&i.value.balance):(f.value=!1,S.value=s&&s.value.balance)},fixedFromCoin:f,change:c,toggle:()=>{const a=i.value;i.value=s.value,s.value=a,c.value=!c.value},addLiquidityBtnText:h,isShowLiquidityModal:b,isShowSwapSetting:t}}});const l=o=>(e.pushScopeId("data-v-41513319"),o=o(),e.popScopeId(),o),K={class:"increase-liquidity-container"},U={class:"back-title"},j={class:"title"},H=l(()=>e.createElementVNode("p",null,"Increase Liquidity",-1)),X={class:"right title-right"},Q=l(()=>e.createElementVNode("svg",{class:"icon","aria-hidden":"true"},[e.createElementVNode("use",{"xlink:href":"#icon-a-icon-setslippage"})],-1)),Z=l(()=>e.createElementVNode("use",{"xlink:href":"#icon-icon-refresh"},null,-1)),z=[Z],O={class:"price-range"},$={class:"price-range-header"},J={class:"left"},Y=l(()=>e.createElementVNode("div",{class:"right"},[e.createElementVNode("div",{class:"fee"},"0.3%")],-1)),x={class:"price-range-footer"},ee={class:"select-range"},oe=l(()=>e.createElementVNode("p",null,"Selected Range",-1)),ne={class:"range-bottom"},te={key:0,class:"price"},ie={key:1,class:"price"},se={class:"price-range-block"},ae={class:"price-item"},le=l(()=>e.createElementVNode("div",{class:"title"},"Min Price",-1)),re={key:0,class:"price"},ce={key:1,class:"price"},de={key:2,class:"text"},me={key:3,class:"text"},ue={class:"price-item"},pe=l(()=>e.createElementVNode("div",{class:"title"},"Max Price",-1)),fe={key:0,class:"price"},ve={key:1,class:"price"},ke={key:2,class:"text"},Se={key:3,class:"text"},ye={class:"text-block"},Ce={class:"note"},be={class:"note"},_e={class:"card-container"},ge={class:"card-item"},he={class:"card-item"},we=e.createStaticVNode('<div class="induction remove-liquidity-bottom" data-v-41513319><div class="item" data-v-41513319><div class="induction-text" data-v-41513319>Liquidity</div><div class="induction-value" data-v-41513319>26.42 USDC \u2192 23.172 USDC</div></div><div class="item" data-v-41513319><div class="induction-text" data-v-41513319></div><div class="induction-value" data-v-41513319>0.02403 USDT \u2192 0.00821 USDT</div></div></div>',1),Ne=l(()=>e.createElementVNode("svg",{class:"icon","aria-hidden":"true"},[e.createElementVNode("use",{"xlink:href":"#icon-icon-add"})],-1));function Ee(o,n,r,y,k,C){const d=E,m=V,u=D,p=B,c=L,f=M,v=I,S=F,b=T;return e.openBlock(),e.createElementBlock("div",K,[e.createElementVNode("div",U,[e.createVNode(d),e.createElementVNode("div",j,[H,e.createElementVNode("div",X,[e.createElementVNode("div",{class:"slippage-icon",onClick:n[0]||(n[0]=t=>o.isShowSwapSetting=!0)},[Q,e.createElementVNode("span",null,e.toDisplayString(o.slippage)+"%",1)]),(e.openBlock(),e.createElementBlock("svg",{"aria-hidden":"true",class:e.normalizeClass(o.refresh?"refresh refresh-icon ":"refresh-icon"),onClick:n[1]||(n[1]=(...t)=>o.clickRefresh&&o.clickRefresh(...t))},z,2))])])]),e.createElementVNode("div",O,[e.createElementVNode("div",$,[e.createElementVNode("div",J,[e.createVNode(m,{"from-coin":o.positionInfo.token_a,"to-coin":o.positionInfo.token_b},null,8,["from-coin","to-coin"]),e.createVNode(u,{"current-status":o.positionInfo.currentStatus},null,8,["current-status"])]),Y]),e.createElementVNode("div",x,[e.createElementVNode("div",ee,[oe,e.createElementVNode("div",ne,[o.direct?(e.openBlock(),e.createElementBlock("div",te," 1 "+e.toDisplayString(o.positionInfo.token_a.symbol)+" \u2248 "+e.toDisplayString(o.fixD(o.positionInfo.currentPrice,o.positionInfo.token_b.decimal))+" "+e.toDisplayString(o.positionInfo.token_b.symbol),1)):(e.openBlock(),e.createElementBlock("div",ie," 1 "+e.toDisplayString(o.positionInfo.token_b.symbol)+" \u2248 "+e.toDisplayString(o.fixD(1/o.positionInfo.currentPrice,o.positionInfo.token_b.decimal))+" "+e.toDisplayString(o.positionInfo.token_a.symbol),1)),e.createVNode(p,{direct:o.direct,"form-coin-symbol":o.positionInfo.token_a.symbol,"to-coin-symbol":o.positionInfo.token_b.symbol,onChangeDirect:n[2]||(n[2]=t=>o.direct=t)},null,8,["direct","form-coin-symbol","to-coin-symbol"])])]),e.createElementVNode("div",se,[e.createElementVNode("div",ae,[le,o.direct?(e.openBlock(),e.createElementBlock("p",re,e.toDisplayString(o.decimalFormat(o.positionInfo.minPrice,6)),1)):(e.openBlock(),e.createElementBlock("p",ce,e.toDisplayString(o.decimalFormat(1/o.positionInfo.maxPrice,6)),1)),o.direct?(e.openBlock(),e.createElementBlock("div",me,e.toDisplayString(o.positionInfo.token_b.symbol)+" per "+e.toDisplayString(o.positionInfo.token_a.symbol),1)):(e.openBlock(),e.createElementBlock("div",de,e.toDisplayString(o.positionInfo.token_a.symbol)+" per "+e.toDisplayString(o.positionInfo.token_b.symbol),1))]),e.createElementVNode("div",ue,[pe,o.direct?(e.openBlock(),e.createElementBlock("p",fe,e.toDisplayString(o.positionInfo.maxPrice.indexOf("\u221E")>-1?"\u221E":o.decimalFormat(o.positionInfo.maxPrice,6)),1)):(e.openBlock(),e.createElementBlock("p",ve,e.toDisplayString(o.positionInfo.maxPrice.indexOf("\u221E")>-1?"\u221E":o.decimalFormat(1/o.positionInfo.minPrice,6)),1)),o.direct?(e.openBlock(),e.createElementBlock("div",Se,e.toDisplayString(o.positionInfo.token_b.symbol)+" per "+e.toDisplayString(o.positionInfo.token_a.symbol),1)):(e.openBlock(),e.createElementBlock("div",ke,e.toDisplayString(o.positionInfo.token_a.symbol)+" per "+e.toDisplayString(o.positionInfo.token_b.symbol),1))])]),e.createElementVNode("div",ye,[e.createElementVNode("div",Ce," Your position will be 100% composed of "+e.toDisplayString(o.positionInfo.token_a.symbol)+" at this price ",1),e.createElementVNode("div",be," Your position will be 100% composed of "+e.toDisplayString(o.positionInfo.token_b.symbol)+" at this price ",1)])])]),e.createElementVNode("div",_e,[e.createElementVNode("div",ge,[e.createVNode(c,{modelValue:o.fromCoinAmount,"onUpdate:modelValue":n[3]||(n[3]=t=>o.fromCoinAmount=t),"has-arrow":!1,"input-value":o.fromCoinAmount,"coin-name":o.fromCoin?o.fromCoin.symbol:null,balance:o.fromCoin?o.fromCoin.balance:null,"coin-icon":o.fromCoin?o.fromCoin.icon:"","swap-direction":"From",onOnMax:n[4]||(n[4]=t=>o.maxBtnSelect("fromCoin")),onOnInput:n[5]||(n[5]=t=>o.fromCoinAmount=t),onOnFocus:n[6]||(n[6]=()=>{o.fixedFromCoin=!0}),onOnSelect:n[7]||(n[7]=t=>o.openCoinSelect("fromCoin"))},null,8,["modelValue","input-value","coin-name","balance","coin-icon"])]),e.createElementVNode("div",he,[e.createVNode(c,{modelValue:o.toCoinAmount,"onUpdate:modelValue":n[8]||(n[8]=t=>o.toCoinAmount=t),"has-arrow":!1,"input-value":o.toCoinAmount,"coin-name":o.toCoin?o.toCoin.symbol:"",balance:o.toCoin?o.toCoin.balance:null,"swap-direction":"To","coin-icon":o.toCoin?o.toCoin.icon:"",onOnMax:n[9]||(n[9]=t=>o.maxBtnSelect("toCoin")),onOnInput:n[10]||(n[10]=t=>o.toCoinAmount=t),onOnFocus:n[11]||(n[11]=()=>{o.fixedFromCoin=!1}),onOnSelect:n[12]||(n[12]=t=>o.openCoinSelect("toCoin"))},null,8,["modelValue","input-value","coin-name","balance","coin-icon"])])]),we,e.createVNode(f,{disabled:!o.fromCoinAmount,class:"big-btn",onClick:n[13]||(n[13]=t=>o.isShowLiquidityModal=!0)},{default:e.withCtx(()=>[Ne,e.createElementVNode("span",null,e.toDisplayString(o.addLiquidityBtnText),1)]),_:1},8,["disabled"]),o.showCoinSelect?(e.openBlock(),e.createBlock(v,{key:0,"existing-coins":o.existingCoins,"last-select-coin":o.lastSelectCoin,onOnSelect:o.onCoinSelect,onOnClose:n[14]||(n[14]=t=>o.showCoinSelect=!1)},null,8,["existing-coins","last-select-coin","onOnSelect"])):e.createCommentVNode("",!0),o.isShowSwapSetting?(e.openBlock(),e.createBlock(S,{key:1,onOnClose:n[15]||(n[15]=t=>o.isShowSwapSetting=!1)})):e.createCommentVNode("",!0),o.isShowLiquidityModal?(e.openBlock(),e.createBlock(b,{key:2,"is-increase":!0,onOnClose:n[16]||(n[16]=t=>o.isShowLiquidityModal=!1)})):e.createCommentVNode("",!0)])}const He=R(W,[["render",Ee],["__scopeId","data-v-41513319"]]);export{He as default};
