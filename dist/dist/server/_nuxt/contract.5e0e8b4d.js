import{v as n,B as g}from"../server.mjs";import{_ as y}from"./_plugin-vue_export-helper.a1a6add7.js";import"#internal/nitro";const b=n.defineComponent({setup(){const i=n.ref(!1),d=n.ref("");async function l(){const o=await window.aptos.connect();console.log("toConnect###result###",o);const t=await window.aptos.account();d.value=t.address,console.log("toConnect###address####",t);const a=await window.aptos.isConnected();console.log("toConnect###status###",a),i.value=a;const e=await window.aptos.network();console.log("toConnect###network###",e)}async function u(){const o=await window.aptos.disconnect();console.log("disconnect###reuslt###",o),d.value="",i.value=!1}async function w(){const o=await window.martian.connect();console.log("toConnectMartian###result###",o);const t=await window.martian.account();d.value=t.address,console.log("toConnectMartian###address####",t);const a=await window.martian.isConnected();console.log("toConnectMartian###status###",a),i.value=a}async function r(){const o=await window.martian.disconnect();console.log("toDisconnectMartian###reuslt###",o),d.value="",i.value=!1}async function f(){const t=(await window.martian.connect()).address;console.log("toTestMartianInstruction####sender####",t);const a={arguments:[t,717],function:"0x1::coin::transfer",type:"entry_function_payload",type_arguments:["0x1::aptos_coin::AptosCoin"]},e=await window.martian.generateTransaction(t,a),c=await window.martian.signAndSubmitTransaction(e);console.log("txnHash###",c)}async function p(){const t=(await window.martian.connect()).address,a={type:"entry_function_payload",function:"0x01::coins::register",arguments:[],type_arguments:["0x1ce98d89494e9d3d7935bc3bd5fc714fc2abb99db3f024162552c4ba172f4d28::message::USDT "]},e=await window.martian.generateTransaction(t,a),c=await window.martian.signAndSubmitTransaction(e);console.log("toTestMartianRegister##txnHash###",c)}async function _(){const t=(await window.martian.connect()).address,a={type:"entry_function_payload",function:"0x84dc9d921d277db5047dcb17addc2ecfbddfad087dd4ea825b2d17785755cb29::aubrium::faucet",arguments:[],type_arguments:[]},e=await window.martian.generateTransaction(t,a),c=await window.martian.signAndSubmitTransaction(e);console.log("toTestMartianFaucet####txnHash####",c)}async function m(){const o={type:"entry_function_payload",function:"0x1ce98d89494e9d3d7935bc3bd5fc714fc2abb99db3f024162552c4ba172f4d28::message::mint_coin_2",arguments:["0x1ce98d89494e9d3d7935bc3bd5fc714fc2abb99db3f024162552c4ba172f4d28","0x83f44fc5763d1f5c2c75191642f222c8e1279e80fd24ce97e6bccef1dff93842","1"],type_arguments:["0x1::aptos_coin::TestCoin"]},t=await window.aptos.signAndSubmitTransaction(o);console.log("response####",t)}return{t:123,isConnected:i,accountAddress:d,toConnect:l,toDisconnect:u,toTest:m,toConnectMartian:w,toDisconnectMartian:r,toTestMartianInstruction:f,toTestMartianRegister:p,toTestMartianFaucet:_,faucetCoin:async()=>{const t=(await window.martian.connect()).address,a={type:"entry_function_payload",function:"0x84dc9d921d277db5047dcb17addc2ecfbddfad087dd4ea825b2d17785755cb29::cetus_faucet::faucet",arguments:[],type_arguments:[]},e=await window.martian.generateTransaction(t,a),c=await window.martian.signAndSubmitTransaction(e);console.log("faucetCoin####txnHash####",c)}}}});const C={class:"contract-container"},x=n.createTextVNode("connect Martian wallet"),T={key:1},h=n.createTextVNode("disconnect Martian wallet"),k=n.createTextVNode("USDT Faucet");function v(s,i,d,l,u,w){const r=g;return n.openBlock(),n.createElementBlock("div",C,[s.isConnected?(n.openBlock(),n.createElementBlock("div",T,[n.createVNode(r,{onClick:s.toDisconnectMartian},{default:n.withCtx(()=>[h]),_:1},8,["onClick"]),n.createElementVNode("div",null,n.toDisplayString(s.accountAddress),1),n.createVNode(r,{onClick:s.faucetCoin},{default:n.withCtx(()=>[k]),_:1},8,["onClick"])])):(n.openBlock(),n.createBlock(r,{key:0,onClick:s.toConnectMartian},{default:n.withCtx(()=>[x]),_:1},8,["onClick"]))])}const S=y(b,[["render",v],["__scopeId","data-v-c73607f9"]]);export{S as default};
