import{y as f,i as b,A as v,a as y,k as h,b as l,o as N,c as g,d as t,w as e,f as c,u,e as s,t as r}from"./index.6435504a.js";import"./axios.b07f2b9a.js";const k={class:"card-header"},x=c("span",null,"User details",-1),V={__name:"Detail",setup(T){f();const _=b(),d=v(()=>a.userType==0?"student":a.userType==1?"teacher":"student"),a=y([]);return h(()=>{a.value=JSON.parse(sessionStorage.getItem("user"))}),(B,n)=>{const i=l("el-button"),o=l("el-form-item"),m=l("el-form"),p=l("el-card");return N(),g("div",null,[t(p,{class:"box-card"},{header:e(()=>[c("div",k,[x,t(i,{size:"mini",style:{float:"right"},onClick:n[0]||(n[0]=C=>u(_).go(-1))},{default:e(()=>[s("back")]),_:1})])]),default:e(()=>[t(m,null,{default:e(()=>[t(o,{label:"Name:"},{default:e(()=>[s(r(a.value.userName),1)]),_:1}),t(o,{label:"Type:"},{default:e(()=>[s(r(u(d)),1)]),_:1}),t(o,{label:"UPI:"},{default:e(()=>[s(r(a.value.upi),1)]),_:1}),t(o,{label:"Email:"},{default:e(()=>[s(r(a.value.email),1)]),_:1})]),_:1})]),_:1})])}}};export{V as default};