import{a as l,r,aj as u,l as p,o as f,m as C,p as o,q as a,w as c,t as w,B as m,G as i,y as S,z as h}from"./entry.e0fb6258.js";import{S as v}from"./SuiWallet.3466747c.js";const k=l({setup(){const t=r("");let s;return(e=>{e.VIEW_ACCOUNT="viewAccount",e.SUGGEST_TX="suggestTransactions"})(s||(s={})),new u,{address:t,toConnect:async()=>{await new v().connect()},toDisconnect:async()=>{await window.__suiet__.disconnect()}}}});const y=t=>(S("data-v-4379a5f9"),t=t(),h(),t),B={class:"suitest-container"},I=y(()=>o("h3",null,"sui test",-1));function T(t,s,_,d,e,g){const n=m;return f(),C("div",B,[I,o("div",null,[a(n,{onClick:t.toConnect},{default:c(()=>[i("connect")]),_:1},8,["onClick"]),a(n,{onClick:t.toDisconnect},{default:c(()=>[i("disconnect")]),_:1},8,["onClick"])]),o("p",null,w(t.address),1)])}const V=p(k,[["render",T],["__scopeId","data-v-4379a5f9"]]);export{V as default};