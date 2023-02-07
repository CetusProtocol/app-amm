import{_ as A}from"./coin-pair-name.08bd66d0.js";import{l as k,ai as L,o as s,m as n,p as o,q as u,v as l,t as i,M as d,c as r,w as h,S as f,B as N,aj as w,s as v,D as S,ac as B,ad as $,ae as _,y as D,z as U}from"./entry.99eac0f3.js";import{_ as V}from"./img-no-Positions_2x.7a5d8c0c.js";import{_ as P}from"./img-no-Positions_2x.46d8a631.js";const T={class:"pools-position-item"},q={class:"card-header"},z={key:0,class:"label green"},K={key:1,class:"label blue"},R={key:2,class:"label purple"},F={class:"induction"},M={class:"item"},Z={class:"induction-text"},j={key:0,class:"induction-value"},E={key:0},W={key:1,class:"coin-amount"},X={class:"card-content"},Y={key:0,class:"content-top"},G={class:"top"},H={class:"text"},J={class:"value"},O={key:0},Q={class:"bottom"},x={class:"btn-box"};function ee(e,a,b,I,C,g){const m=A,p=f,t=N;return s(),n("div",T,[o("div",q,[u(m,{"from-coin":e.pItem.coinA,"to-coin":e.pItem.coinB},null,8,["from-coin","to-coin"]),e.index.chainName==="Aptos"&&e.pItem.coinA.name.toLowerCase().includes("z")||e.pItem.coinB.name.toLowerCase().includes("z")?(s(),n("div",z," LayerZero ")):l("",!0),e.index.chainName==="Aptos"&&e.pItem.coinA.name.toLowerCase().includes("wo")||e.pItem.coinB.name.toLowerCase().includes("wo")?(s(),n("div",K," Wormhole ")):l("",!0),e.index.chainName==="Aptos"&&e.pItem.coinA.name.toLowerCase().includes("ce")||e.pItem.coinB.name.toLowerCase().includes("ce")?(s(),n("div",R," Celer ")):l("",!0)]),o("div",F,[o("div",M,[o("div",Z,i(e.$t("common.totalLiquidity")),1),e.pItem.totalLpUSD?(s(),n("div",j,[e.pItem.showTotalLpUSD||e.index.chainName=="Aptos"?(s(),n("div",E,i(e.pItem.totalLpUSD&&`$ ${e.addCommom(e.pItem.totalLpUSD,2)}`),1)):(s(),n("div",W,[o("div",null,[o("span",null,i(e.addCommom(e.pItem.totalCoinXAmount,e.pItem.coinA.decimals)),1),d(),o("i",null,i(e.pItem.coinA.symbol),1)]),o("div",null,[o("span",null,i(e.addCommom(e.pItem.totalCoinYAmount,e.pItem.coinB.decimals)),1),d(),o("i",null,i(e.pItem.coinB.symbol),1)])]))])):(s(),r(p,{key:1,indicator:e.indicator},null,8,["indicator"]))])]),o("div",X,[e.pItem&&Number(e.pItem.balance)&&e.wallet.connected?(s(),n("div",Y,[o("div",G,[o("div",H,i(e.$t("common.yourPoolTokens")),1),o("div",J,[o("p",null,i(e.getLpView(e.pItem)),1),d(" \xA0\xA0 "),Number(e.pItem.myBalanceUSD)?(s(),n("span",O," ~ $"+i(e.addCommom(e.pItem.myBalanceUSD,2)),1)):l("",!0)])]),o("div",Q,[o("div",x,[u(t,{class:"cancel-btn",onClick:e.toRemove},{default:h(()=>[d(i(e.$t("button.remove")),1)]),_:1},8,["onClick"]),u(t,{disabled:e.index.chainName=="Aptos",class:"confirm-btn",onClick:e.toAdd},{default:h(()=>[d(i(e.$t("button.add")),1)]),_:1},8,["disabled","onClick"])])])])):(s(),r(t,{key:1,disabled:e.index.chainName=="Aptos",class:"add-big-btn",onClick:a[0]||(a[0]=c=>e.router.push(`/pools-liquidity-add?from=${e.pItem.coinA.symbol}&to=${e.pItem.coinB.symbol}`))},{default:h(()=>[d(i(e.$t("button.addLiquidity")),1)]),_:1},8,["disabled"]))])])}const oe=k(L,[["render",ee],["__scopeId","data-v-3dcf9d3f"]]),y=e=>(D("data-v-88cd0da6"),e=e(),U(),e),se={class:"pools-position-list-container"},ne=["href"],ie=y(()=>o("svg",{class:"icon cmm-icon","aria-hidden":"true"},[o("use",{"xlink:href":"#icon-icon-back"})],-1)),te=[ie],ae={class:"position-title"},le=y(()=>o("use",{"xlink:href":"#icon-icon-refresh"},null,-1)),de=[le],ce=["href"],re={class:"search-input"},me=["placeholder"],pe={key:2,class:"tab-list"},ue=["onClick"],he={class:"item"},ve={key:3},$e={key:0,class:"position-list"},_e={key:1,class:"no-data"},ke={key:0,src:V},fe={key:1,src:P};function ye(e,a,b,I,C,g){const m=oe,p=f;return s(),n("div",se,[e.chainName=="Aptos"&&e.config?(s(),n("a",{key:0,href:`${e.config.cmmSite}/pools?language=${e.languageValue}`},te,8,ne)):l("",!0),o("div",ae,[o("div",null,i(e.$t("menu.pools"))+" ",1),(s(),n("svg",{"aria-hidden":"true",class:v(e.refresh?"refresh refresh-icon ":"refresh-icon"),onClick:a[0]||(a[0]=(...t)=>e.clickRefresh&&e.clickRefresh(...t))},de,2))]),e.chainName=="Aptos"&&e.config?(s(),n("a",{key:1,href:`${e.config.cmmSite}/pools`,class:"migrate-earn"},null,8,ce)):l("",!0),o("div",re,[S(o("input",{"onUpdate:modelValue":a[1]||(a[1]=t=>e.searchKey=t),onkeyup:"value=value.replace(/[^A-Za-z0-9]+$/g,'')",placeholder:e.$t("inputPlaceholder.liquidityPlaceholder")},null,8,me),[[B,e.searchKey]]),o("div",{class:"search-icon",onClick:a[2]||(a[2]=t=>e.updateLpList(e.searchKey))})]),e.chainName==="Aptos"?(s(),n("div",pe,[(s(!0),n($,null,_(e.tabList,(t,c)=>(s(),n("div",{key:c,class:v(["item-container",e.currentTab==t?"item-container-active item-container":"item-container"]),onClick:be=>e.currentTab=t},[o("div",he,i(t),1)],10,ue))),128))])):l("",!0),e.loading?(s(),r(p,{key:4})):(s(),n("div",ve,[e.list&&e.list.length>0?(s(),n("div",$e,[(s(!0),n($,null,_(e.list,(t,c)=>(s(),r(m,{key:c,"p-item":t},null,8,["p-item"]))),128))])):l("",!0),e.list&&e.list.length<=0?(s(),n("div",_e,[e.indexStore.theme=="default"?(s(),n("img",ke)):(s(),n("img",fe)),o("span",null,i(e.$t("common.poolsNotFound")),1)])):l("",!0)]))])}const Le=k(w,[["render",ye],["__scopeId","data-v-88cd0da6"]]);export{Le as default};
