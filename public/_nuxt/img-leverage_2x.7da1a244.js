import{a as A,W as h,b as y,r as g,I as f,ap as v,i as _,l as b,ab as M,o as n,c as I,w as u,p as o,m as i,t as a,v as l,y as k,z}from"./entry.aaf05540.js";const S=A({components:{Modal:h},props:{fromCoins:{type:Object,required:!0},toCoins:{type:Object,required:!0}},setup(s){const e=y(),{copy:c}=e;let d=g("");const p=f(),m=v(s.fromCoins.symbol,s.toCoins.symbol,p.lpTokens);return d.value=m.address,{importIcon:_,store:e,copy:c,address:d}}});const t=s=>(k("data-v-d30c7307"),s=s(),z(),s),$=t(()=>o("svg",{class:"icon modal-icon-close","aria-hidden":"true"},[o("use",{"xlink:href":"#icon-a-icon-Shutdown"})],-1)),q={class:"address-container"},w={key:0,class:"pc-address"},L={class:"left"},B=["src"],G=t(()=>o("use",{"xlink:href":"#icon-icon-copy"},null,-1)),V=[G],R={key:1,class:"pc-address"},U={class:"left"},Y=["src"],D=t(()=>o("use",{"xlink:href":"#icon-icon-copy"},null,-1)),Q=[D],O={key:2,class:"pc-address"},j={class:"left"},E={class:"img-box"},F=["src"],N=["src"],T=t(()=>o("use",{"xlink:href":"#icon-icon-copy"},null,-1)),J=[T];function W(s,e,c,d,p,m){const C=M("Modal");return n(),I(C,{visible:!0,class:"mint-address",centered:"",closable:!0,title:s.$t("modal.AddressModalTitle"),width:"400px",footer:null,onCancel:e[3]||(e[3]=r=>s.$emit("onClose"))},{closeIcon:u(()=>[$]),default:u(()=>[o("div",q,[s.fromCoins&&s.fromCoins.symbol&&s.fromCoins.address?(n(),i("div",w,[o("div",L,[o("img",{src:s.fromCoins.icon||s.importIcon(`/image/coins/${s.fromCoins.symbol.toLowerCase()}.png`)},null,8,B),o("span",null,a(s.fromCoins.address&&s.fromCoins.address.substr(0,26))+" ... ",1)]),(n(),i("svg",{class:"icon","aria-hidden":"true",onClick:e[0]||(e[0]=r=>s.copy(s.fromCoins.address))},V))])):l("",!0),s.toCoins&&s.toCoins.symbol&&s.toCoins.address?(n(),i("div",R,[o("div",U,[o("img",{src:s.toCoins.icon||s.importIcon(`/image/coins/${s.toCoins.symbol.toLowerCase()}.png`)},null,8,Y),o("span",null,a(s.toCoins.address&&s.toCoins.address.substr(0,26))+" ... ",1)]),(n(),i("svg",{class:"icon","aria-hidden":"true",onClick:e[1]||(e[1]=r=>s.copy(s.toCoins.address))},Q))])):l("",!0),s.toCoins&&s.toCoins.symbol&&s.toCoins.address?(n(),i("div",O,[o("div",j,[o("div",E,[o("img",{src:s.fromCoins.icon||s.importIcon(`/image/coins/${s.fromCoins.symbol.toLowerCase()}.png`)},null,8,F),o("img",{src:s.toCoins.icon||s.importIcon(`/image/coins/${s.toCoins.symbol.toLowerCase()}.png`)},null,8,N)]),o("span",null,a(s.address&&s.address.substr(0,26))+" ... ",1)]),(n(),i("svg",{class:"icon","aria-hidden":"true",onClick:e[2]||(e[2]=r=>s.copy(s.address))},J))])):l("",!0)])]),_:1},8,["title"])}const P=b(S,[["render",W],["__scopeId","data-v-d30c7307"]]),H="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAwAAAGCBAMAAAAmlj/IAAAAIVBMVEUAAAA3NzczMzMzMzMzMzMzMzM0NDQyMjIqKiovLy8zMzOBPdR8AAAACnRSTlMADvLYz8dsUQYb5TpnEwAAAFhJREFUSMdjYGgLUs1gYOD0WrVqyQSGlsWF4lYeDFmGDAzCyxiiChgY2JcyaAkwMDAuglJQQagSqAaodqhhQMC1gGGUGqVGqVFqlBqlRqlRapQabhT1W44Aol8Y1JiheRsAAAAASUVORK5CYII=";export{H as _,P as a};