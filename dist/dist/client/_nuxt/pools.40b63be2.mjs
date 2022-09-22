import{_ as N}from"./coin-pair-name.062d61c0.mjs";import{a as k,a7 as P,a8 as R,A as S,X as g,e as $,ab as V,i as T,a4 as I,a9 as U,l as L,o as s,m as c,p as t,q as h,t as f,c as m,v as M,w as v,G as _,S as C,B as O,y as B,z as w,r as y,$ as z,Y as E,a0 as b,s as j,L as F,M as Y}from"./entry.feb8c63f.mjs";const G=k({props:{pItem:{type:Object,required:!0}},setup(o){const n=P(R,{style:{fontSize:"12px",color:"#fff",paddingBottom:"3px"},spin:!0}),i=S(),d=g(),r=$(()=>d);function p(){i.push(`/pools-management-remove?from=${o.pItem.coinA.symbol}&to=${o.pItem.coinB.symbol}`)}function a(){i.push(`/pools-liquidity-add?from=${o.pItem.coinA.symbol}&to=${o.pItem.coinB.symbol}`)}function l(e){const u=e.balance,D=U(u).div(Math.pow(10,e.decimals)).toString();return I(D,e.decimals)}return{indicator:n,thousands:V,importIcon:T,router:i,toRemove:p,toAdd:a,wallet:r,addCommom:I,getLpView:l}}});const A=o=>(B("data-v-76724d2b"),o=o(),w(),o),K={class:"pools-position-item"},W={class:"card-header"},X={class:"induction"},H={class:"item"},J=A(()=>t("div",{class:"induction-text"},"Total Liquidity",-1)),Q={key:0,class:"induction-value"},Z={class:"card-content"},x={key:0,class:"content-top"},oo={class:"top"},eo=A(()=>t("div",{class:"text"},"Your Pool Tokens",-1)),to={class:"value"},so=_(" \xA0\xA0 "),no={key:0},io={class:"bottom"},ao={class:"btn-box"},lo=_("Remove"),co=_("Add"),ro=_(" Add liquidity ");function po(o,n,i,d,r,p){const a=N,l=C,e=O;return s(),c("div",K,[t("div",W,[h(a,{"from-coin":o.pItem.coinA,"to-coin":o.pItem.coinB},null,8,["from-coin","to-coin"])]),t("div",X,[t("div",H,[J,o.pItem.totalLpUSD?(s(),c("div",Q,f(o.pItem.totalLpUSD&&`$ ${o.addCommom(o.pItem.totalLpUSD,2)}`),1)):(s(),m(l,{key:1,indicator:o.indicator},null,8,["indicator"]))])]),t("div",Z,[o.pItem&&Number(o.pItem.balance)&&o.wallet.connected?(s(),c("div",x,[t("div",oo,[eo,t("div",to,[t("p",null,f(o.getLpView(o.pItem)),1),so,o.pItem.myBalanceUSD?(s(),c("span",no,"~ $"+f(o.addCommom(o.pItem.myBalanceUSD,2)),1)):M("",!0)])]),t("div",io,[t("div",ao,[h(e,{class:"cancel-btn",onClick:o.toRemove},{default:v(()=>[lo]),_:1},8,["onClick"]),h(e,{class:"confirm-btn",onClick:o.toAdd},{default:v(()=>[co]),_:1},8,["onClick"])])])])):(s(),m(e,{key:1,class:"add-big-btn",onClick:n[0]||(n[0]=u=>o.router.push(`/pools-liquidity-add?from=${o.pItem.coinA.symbol}&to=${o.pItem.coinB.symbol}`))},{default:v(()=>[ro]),_:1}))])])}const uo=L(G,[["render",po],["__scopeId","data-v-76724d2b"]]),mo=k({setup(){const o=S(),n=y(!1),i=y(!1),d=y(Object.values(z)),r=()=>{i.value=!0,setTimeout(()=>{i.value=!1},1e3)},p=g(),a=E(),l=$(()=>p),e=$(()=>a);return b(async()=>{l.value.address?(console.log("\u53C8\u8FDB\u6765\u5417"),a.setMyLplist(l.value.address)):a.setMyLplist("")}),b(()=>{console.log("liquidity.value.myLplist#####",e.value.myLplist),e.value.myLplist.length>0&&(d.value=e.value.myLplist)}),{wallet:l,list:d,loading:n,clickRefresh:r,refresh:i,router:o,liquidity:e}}});const q=o=>(B("data-v-8710dee8"),o=o(),w(),o),_o={class:"pools-position-list-container"},ho={class:"position-title"},fo=q(()=>t("div",null," Pools ",-1)),vo=q(()=>t("use",{"xlink:href":"#icon-icon-refresh"},null,-1)),yo=[vo],$o={key:0,class:"position-list"};function Io(o,n,i,d,r,p){const a=uo,l=C;return s(),c("div",_o,[t("div",ho,[fo,(s(),c("svg",{"aria-hidden":"true",class:j(o.refresh?"refresh refresh-icon ":"refresh-icon"),onClick:n[0]||(n[0]=(...e)=>o.clickRefresh&&o.clickRefresh(...e))},yo,2))]),o.list&&o.list.length>0?(s(),c("div",$o,[(s(!0),c(F,null,Y(o.list,(e,u)=>(s(),m(a,{key:u,"p-item":e},null,8,["p-item"]))),128))])):(s(),m(l,{key:1}))])}const So=L(mo,[["render",Io],["__scopeId","data-v-8710dee8"]]);export{So as default};
