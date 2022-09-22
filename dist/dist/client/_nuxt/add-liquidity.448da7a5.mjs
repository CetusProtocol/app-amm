import{_ as h}from"./coin-pair-name.062d61c0.mjs";import{_ as D}from"./status-block.06e7ae54.mjs";import{_ as y}from"./coin-tab.8b258053.mjs";import{a as v,Q as b,f as k,r as P,i as S,j as w,k as A,l as F,J as g,o as s,c as q,w as d,p as n,q as c,t as e,m as i,G as E,B as N,y as T,z as B}from"./entry.feb8c63f.mjs";const I=v({components:{Modal:b},props:{isIncrease:{type:Boolean,required:!1}},setup(){const o=k({fromCoin:{symbol:"CUSDT",name:"CUSDT",token_mint:"Gcu9zjxrjez4xWGj8bi2gTLXYN8hD8Avu2tN8xfnV65Q",swap_token_account:"EPyDSacqb9PH4SoXFov21VPnVSdMBw4N4aQurC89k8ei",decimal:8,show_decimal:4,calculate_decimal:6,tokenAccountAddress:"EFVNcMQwxzwsGq4uhRDPeZHy4LUY1R7EPzGK8dFngZNu",balance:{decimals:8,_decimals:"100000000",wei:"60195129396"}},toCoin:{symbol:"CUSDC",name:"CUSDC",token_mint:"GHStiPQDe4HEQxtDzyFFuNjP6Z6GqYhbPqJ6oiRFmGWT",swap_token_account:"EDSWfuCTcCNXM5WeMZntLkQUjZuXeCp6mEKe5FbEXNX",decimal:8,show_decimal:4,calculate_decimal:6,tokenAccountAddress:"HCcBQYAh6kTw5CL58urZCWdFevsU2SWSxaHYmVf3bo2Q",balance:{decimals:8,_decimals:"100000000",wei:"76482100375"}},fromCoinAmount:"1",toCoinAmount:"5.25132139",currentPrice:.9995373145698367,minPrice:"0.9950127279292509038664997734721554603704755158639167078309052856",maxPrice:"1.0004000600040001",showFromCoinLock:!1,showToCoinLock:!1,currentStatus:"Active",feeTier:"0.01%"}),t=P(!0);function r(m){t.value=m}return{secondConfirmData:o,importIcon:S,fixD:w,decimalFormat:A,direct:t,changeDirect:r}}});const a=o=>(T("data-v-9ada9351"),o=o(),B(),o),M=a(()=>n("svg",{class:"icon modal-icon-close","aria-hidden":"true"},[n("use",{"xlink:href":"#icon-a-icon-Shutdown"})],-1)),L={class:"add-liquidity-container"},Q={class:"top"},G={class:"induction info"},V={class:"item"},U={class:"induction-text"},Y={key:0,class:"induction-value"},$={key:1,class:"induction-value"},j={class:"item"},z={class:"induction-text"},H={key:0,class:"induction-value"},W={key:1,class:"induction-value"},X={class:"item"},Z=a(()=>n("span",{class:"induction-text"},"Fee Tier",-1)),R={class:"induction-value"},J={class:"range-box"},K=a(()=>n("div",{class:"range-title"},[n("h3",null,"Selected Range")],-1)),O={class:"current-price"},x={key:0},oo={key:1},eo={class:"price-range-block"},no={class:"price-item"},so=a(()=>n("div",{class:"title"},"Min Price",-1)),io={key:0,class:"price"},to={key:1,class:"price"},ao={key:2,class:"text"},co={key:3,class:"text"},ro={class:"price-item"},mo=a(()=>n("div",{class:"title"},"Max Price",-1)),lo={key:0,class:"price"},uo={key:1,class:"price"},Co={key:2,class:"text"},fo={key:3,class:"text"},_o={class:"text-block"},po={class:"note"},ho={class:"note"},Do=a(()=>n("svg",{class:"icon","aria-hidden":"true"},[n("use",{"xlink:href":"#icon-icon-add"})],-1));function yo(o,t,r,m,vo,bo){const u=h,C=D,f=y,_=N,p=g("Modal");return s(),q(p,{width:"440px",visible:!0,footer:null,title:"Add Liquidity",class:"add-liquidity-modal",onCancel:t[1]||(t[1]=l=>o.$emit("onClose"))},{closeIcon:d(()=>[M]),default:d(()=>[n("div",L,[n("div",Q,[c(u,{"from-coin":o.secondConfirmData.fromCoin,"to-coin":o.secondConfirmData.toCoin},null,8,["from-coin","to-coin"]),c(C,{"current-status":o.secondConfirmData.currentStatus},null,8,["current-status"])]),n("div",G,[n("div",V,[n("span",U,e(o.secondConfirmData.fromCoin.symbol),1),o.isIncrease?(s(),i("span",$,e(o.secondConfirmData.fromCoinAmount||0)+" \u2192 3.1212",1)):(s(),i("span",Y,e(o.secondConfirmData.fromCoinAmount||0),1))]),n("div",j,[n("span",z,e(o.secondConfirmData.toCoin.symbol),1),o.isIncrease?(s(),i("span",W,e(o.secondConfirmData.toCoinAmount||0)+" \u2192 7.99212",1)):(s(),i("span",H,e(o.secondConfirmData.toCoinAmount||0),1))]),n("div",X,[Z,n("span",R,e(o.secondConfirmData.feeTier),1)])]),n("div",J,[K,n("div",O,[o.direct?(s(),i("div",x," 1 "+e(o.secondConfirmData.fromCoin.symbol)+" \u2248 "+e(o.fixD(o.secondConfirmData.currentPrice,o.secondConfirmData.toCoin.decimal))+" "+e(o.secondConfirmData.toCoin.symbol),1)):(s(),i("div",oo," 1 "+e(o.secondConfirmData.toCoin.symbol)+" \u2248 "+e(o.fixD(1/o.secondConfirmData.currentPrice,o.secondConfirmData.toCoin.decimal))+" "+e(o.secondConfirmData.fromCoin.symbol),1)),c(f,{direct:o.direct,"form-coin-symbol":o.secondConfirmData.fromCoin.symbol,"to-coin-symbol":o.secondConfirmData.toCoin.symbol,onChangeDirect:t[0]||(t[0]=l=>o.direct=l)},null,8,["direct","form-coin-symbol","to-coin-symbol"])]),n("div",eo,[n("div",no,[so,o.direct?(s(),i("p",io,e(o.decimalFormat(o.secondConfirmData.minPrice,6)),1)):(s(),i("p",to,e(o.decimalFormat(1/o.secondConfirmData.maxPrice,6)),1)),o.direct?(s(),i("div",co,e(o.secondConfirmData.toCoin.symbol)+" per "+e(o.secondConfirmData.fromCoin.symbol),1)):(s(),i("div",ao,e(o.secondConfirmData.fromCoin.symbol)+" per "+e(o.secondConfirmData.toCoin.symbol),1))]),n("div",ro,[mo,o.direct?(s(),i("p",lo,e(o.secondConfirmData.maxPrice.indexOf("\u221E")>-1?"\u221E":o.decimalFormat(o.secondConfirmData.maxPrice,6)),1)):(s(),i("p",uo,e(o.secondConfirmData.maxPrice.indexOf("\u221E")>-1?"\u221E":o.decimalFormat(1/o.secondConfirmData.minPrice,6)),1)),o.direct?(s(),i("div",fo,e(o.secondConfirmData.toCoin.symbol)+" per "+e(o.secondConfirmData.fromCoin.symbol),1)):(s(),i("div",Co,e(o.secondConfirmData.fromCoin.symbol)+" per "+e(o.secondConfirmData.toCoin.symbol),1))])]),n("div",_o,[n("div",po," Your position will be 100% composed of "+e(o.secondConfirmData.fromCoin.symbol)+" at this price ",1),n("div",ho," Your position will be 100% composed of "+e(o.secondConfirmData.toCoin.symbol)+" at this price ",1)])])]),c(_,{class:"big-btn liquidity-btn"},{default:d(()=>[Do,E(" "+e(o.isIncrease?"Add More":"Add Liquidity"),1)]),_:1})]),_:1})}const Ao=F(I,[["render",yo],["__scopeId","data-v-9ada9351"]]);export{Ao as _};
