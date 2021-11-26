var P=Object.defineProperty,k=Object.defineProperties;var z=Object.getOwnPropertyDescriptors;var y=Object.getOwnPropertySymbols;var B=Object.prototype.hasOwnProperty,S=Object.prototype.propertyIsEnumerable;var E=(t,e,o)=>e in t?P(t,e,{enumerable:!0,configurable:!0,writable:!0,value:o}):t[e]=o,A=(t,e)=>{for(var o in e||(e={}))B.call(e,o)&&E(t,o,e[o]);if(y)for(var o of y(e))S.call(e,o)&&E(t,o,e[o]);return t},$=(t,e)=>k(t,z(e));import{N as R,c as H,p as N,d as f,u as Y,o as C,a as l,b as d,e as s,f as q,g as F,h as W,i as G,j as V,r as v,k as U,l as _,w as x,m as I,v as K,n as p,T as M,F as J,q as Q,s as b,t as X,x as Z,y as j,z as ee,A as D,B as te,C as L,D as oe,E as se,V as re,G as ne}from"./vendor.4a4cde50.js";const ie=function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const r of document.querySelectorAll('link[rel="modulepreload"]'))n(r);new MutationObserver(r=>{for(const c of r)if(c.type==="childList")for(const i of c.addedNodes)i.tagName==="LINK"&&i.rel==="modulepreload"&&n(i)}).observe(document,{childList:!0,subtree:!0});function o(r){const c={};return r.integrity&&(c.integrity=r.integrity),r.referrerpolicy&&(c.referrerPolicy=r.referrerpolicy),r.crossorigin==="use-credentials"?c.credentials="include":r.crossorigin==="anonymous"?c.credentials="omit":c.credentials="same-origin",c}function n(r){if(r.ep)return;r.ep=!0;const c=o(r);fetch(r.href,c)}};ie();const ae=({isClient:t,router:e})=>{t&&(e.beforeEach(()=>{R.start()}),e.afterEach(()=>{R.done()}))};var ce=Object.freeze({__proto__:null,[Symbol.toStringTag]:"Module",install:ae});const le=({isClient:t,initialState:e,app:o})=>{const n=H();o.use(n),t?n.state.value=e.pinia||{}:e.pinia=n.state.value};var de=Object.freeze({__proto__:null,[Symbol.toStringTag]:"Module",install:le});const pe={disabled:!1,offset:[0,5],container:"body",boundary:void 0,instantMove:!1,disposeTimeout:5e3,popperTriggers:[],strategy:"absolute",modifiers:[],popperOptions:{},themes:{tooltip:{placement:"top",triggers:["hover","focus","touch"],hideTriggers:t=>[...t,"click"],delay:{show:0,hide:0},handleResize:!1,html:!1,loadingContent:"..."},dropdown:{placement:"bottom",triggers:["hover"],delay:0,handleResize:!0,autoHide:!0},menu:{$extend:"dropdown",triggers:["hover","focus"],popperTriggers:["hover","focus"],delay:{show:0,hide:400}}}},ue=({app:t})=>{t.use(N,pe)};var _e=Object.freeze({__proto__:null,[Symbol.toStringTag]:"Module",install:ue});const he="modulepreload",T={},me="https://cdn.jsdelivr.net/gh/br-lucas/blog-poc-distributable-scripts/",a=function(e,o){return!o||o.length===0?e():Promise.all(o.map(n=>{if(n=`${me}${n}`,n in T)return;T[n]=!0;const r=n.endsWith(".css"),c=r?'[rel="stylesheet"]':"";if(document.querySelector(`link[href="${n}"]${c}`))return;const i=document.createElement("link");if(i.rel=r?"stylesheet":he,r||(i.as="script",i.crossOrigin=""),i.href=n,document.head.appendChild(i),r)return new Promise((m,h)=>{i.addEventListener("load",m),i.addEventListener("error",h)})})).then(()=>e())},fe=f({setup(t){const e=Y();return C(()=>{e.push("/blogs")}),()=>{}}}),ge=[{name:"tags-new",path:"/tags/new",component:()=>a(()=>import("./new.56802bc7.js"),["assets/new.56802bc7.js","assets/plugin-vue_export-helper.21dcd24c.js"]),props:!0},{name:"tags",path:"/tags",component:()=>a(()=>import("./index.9981c8c4.js"),["assets/index.9981c8c4.js","assets/plugin-vue_export-helper.21dcd24c.js"]),props:!0},{name:"posts-new",path:"/posts/new",component:()=>a(()=>import("./new.e8ac4914.js"),["assets/new.e8ac4914.js","assets/plugin-vue_export-helper.21dcd24c.js"]),props:!0},{name:"posts",path:"/posts",component:()=>a(()=>import("./index.d852f140.js"),["assets/index.d852f140.js","assets/plugin-vue_export-helper.21dcd24c.js"]),props:!0},{name:"comments-new",path:"/comments/new",component:()=>a(()=>import("./new.7dbbbd34.js"),["assets/new.7dbbbd34.js","assets/plugin-vue_export-helper.21dcd24c.js"]),props:!0},{name:"comments",path:"/comments",component:()=>a(()=>import("./index.94c20a4b.js"),["assets/index.94c20a4b.js","assets/plugin-vue_export-helper.21dcd24c.js"]),props:!0},{name:"categories-new",path:"/categories/new",component:()=>a(()=>import("./new.c70cb7b9.js"),["assets/new.c70cb7b9.js","assets/plugin-vue_export-helper.21dcd24c.js"]),props:!0},{name:"categories",path:"/categories",component:()=>a(()=>import("./index.3670f839.js"),["assets/index.3670f839.js","assets/plugin-vue_export-helper.21dcd24c.js"]),props:!0},{name:"blogs-new",path:"/blogs/new",component:()=>a(()=>import("./new.4a75d100.js"),["assets/new.4a75d100.js","assets/plugin-vue_export-helper.21dcd24c.js"]),props:!0},{name:"blogs",path:"/blogs",component:()=>a(()=>import("./index.81d4e09d.js"),["assets/index.81d4e09d.js","assets/plugin-vue_export-helper.21dcd24c.js"]),props:!0},{name:"authors-new",path:"/authors/new",component:()=>a(()=>import("./new.319b85d0.js"),["assets/new.319b85d0.js","assets/plugin-vue_export-helper.21dcd24c.js"]),props:!0},{name:"authors",path:"/authors",component:()=>a(()=>import("./index.8d4120d0.js"),["assets/index.8d4120d0.js","assets/vendor.4a4cde50.js","assets/plugin-vue_export-helper.21dcd24c.js"]),props:!0},{name:"index",path:"/",component:fe,props:!0},{name:"tags-id",path:"/tags/:id",component:()=>a(()=>import("./_id_.c2d3c4f8.js"),["assets/_id_.c2d3c4f8.js","assets/vendor.4a4cde50.js"]),props:!0},{name:"posts-id",path:"/posts/:id",component:()=>a(()=>import("./_id_.05f1054e.js"),["assets/_id_.05f1054e.js","assets/vendor.4a4cde50.js"]),props:!0},{name:"comments-id",path:"/comments/:id",component:()=>a(()=>import("./_id_.09016ba6.js"),["assets/_id_.09016ba6.js","assets/vendor.4a4cde50.js"]),props:!0},{name:"categories-id",path:"/categories/:id",component:()=>a(()=>import("./_id_.351293ed.js"),["assets/_id_.351293ed.js","assets/vendor.4a4cde50.js"]),props:!0},{name:"blogs-id",path:"/blogs/:id",component:()=>a(()=>import("./_id_.38dc5c07.js"),["assets/_id_.38dc5c07.js","assets/vendor.4a4cde50.js"]),props:!0},{name:"authors-id",path:"/authors/:id",component:()=>a(()=>import("./_id_.ab73c996.js"),["assets/_id_.ab73c996.js","assets/vendor.4a4cde50.js"]),props:!0},{name:"all",path:"/:all(.*)*",component:()=>a(()=>import("./_...all_.620936ae.js"),["assets/_...all_.620936ae.js","assets/plugin-vue_export-helper.21dcd24c.js","assets/vendor.4a4cde50.js"]),props:!0}],ve={width:"1.2em",height:"1.2em",preserveAspectRatio:"xMidYMid meet",viewBox:"0 0 20 20"},xe=s("g",{fill:"none"},[s("path",{"fill-rule":"evenodd","clip-rule":"evenodd",d:"M12.707 5.293a1 1 0 0 1 0 1.414L9.414 10l3.293 3.293a1 1 0 0 1-1.414 1.414l-4-4a1 1 0 0 1 0-1.414l4-4a1 1 0 0 1 1.414 0z",fill:"currentColor"})],-1),be=[xe];function we(t,e){return l(),d("svg",ve,be)}var ye={name:"heroicons-solid-chevron-left",render:we},Ee="https://cdn.jsdelivr.net/gh/br-lucas/blog-poc-distributable-scripts/header-logo-squares.svg",Ae="https://cdn.jsdelivr.net/gh/br-lucas/blog-poc-distributable-scripts/header-logo-text.svg";const $e={width:"1.2em",height:"1.2em",preserveAspectRatio:"xMidYMid meet",viewBox:"0 0 20 20"},Re=s("g",{fill:"none"},[s("path",{d:"M9 4.804A7.968 7.968 0 0 0 5.5 4c-1.255 0-2.443.29-3.5.804v10A7.969 7.969 0 0 1 5.5 14c1.669 0 3.218.51 4.5 1.385A7.962 7.962 0 0 1 14.5 14c1.255 0 2.443.29 3.5.804v-10A7.968 7.968 0 0 0 14.5 4c-1.255 0-2.443.29-3.5.804V12a1 1 0 1 1-2 0V4.804z",fill:"currentColor"})],-1),Ce=[Re];function Ve(t,e){return l(),d("svg",$e,Ce)}var Ie={name:"heroicons-solid-book-open",render:Ve};const Me={width:"1.2em",height:"1.2em",preserveAspectRatio:"xMidYMid meet",viewBox:"0 0 20 20"},je=s("g",{fill:"none"},[s("path",{d:"M9 2a2 2 0 0 0-2 2v8a2 2 0 0 0 2 2h6a2 2 0 0 0 2-2V6.414A2 2 0 0 0 16.414 5L14 2.586A2 2 0 0 0 12.586 2H9z",fill:"currentColor"}),s("path",{d:"M3 8a2 2 0 0 1 2-2v10h8a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8z",fill:"currentColor"})],-1),De=[je];function Le(t,e){return l(),d("svg",Me,De)}var Te={name:"heroicons-solid-document-duplicate",render:Le};const Oe={width:"1.2em",height:"1.2em",preserveAspectRatio:"xMidYMid meet",viewBox:"0 0 20 20"},Pe=s("g",{fill:"none"},[s("path",{d:"M2 5a2 2 0 0 1 2-2h7a2 2 0 0 1 2 2v4a2 2 0 0 1-2 2H9l-3 3v-3H4a2 2 0 0 1-2-2V5z",fill:"currentColor"}),s("path",{d:"M15 7v2a4 4 0 0 1-4 4H9.828l-1.766 1.767c.28.149.599.233.938.233h2l3 3v-3h2a2 2 0 0 0 2-2V9a2 2 0 0 0-2-2h-1z",fill:"currentColor"})],-1),ke=[Pe];function ze(t,e){return l(),d("svg",Oe,ke)}var Be={name:"heroicons-solid-chat-alt-2",render:ze};const Se={width:"1.2em",height:"1.2em",preserveAspectRatio:"xMidYMid meet",viewBox:"0 0 20 20"},He=s("g",{fill:"none"},[s("path",{d:"M4 3a2 2 0 1 0 0 4h12a2 2 0 1 0 0-4H4z",fill:"currentColor"}),s("path",{"fill-rule":"evenodd","clip-rule":"evenodd",d:"M3 8h14v7a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8zm5 3a1 1 0 0 1 1-1h2a1 1 0 1 1 0 2H9a1 1 0 0 1-1-1z",fill:"currentColor"})],-1),Ne=[He];function Ye(t,e){return l(),d("svg",Se,Ne)}var qe={name:"heroicons-solid-archive",render:Ye};const Fe={width:"1.2em",height:"1.2em",preserveAspectRatio:"xMidYMid meet",viewBox:"0 0 20 20"},We=s("g",{fill:"none"},[s("path",{"fill-rule":"evenodd","clip-rule":"evenodd",d:"M17.707 9.293a1 1 0 0 1 0 1.414l-7 7a1 1 0 0 1-1.414 0l-7-7A.997.997 0 0 1 2 10V5a3 3 0 0 1 3-3h5c.256 0 .512.098.707.293l7 7zM5 6a1 1 0 1 0 0-2a1 1 0 0 0 0 2z",fill:"currentColor"})],-1),Ge=[We];function Ue(t,e){return l(),d("svg",Fe,Ge)}var Ke={name:"heroicons-solid-tag",render:Ue};const Je={width:"1.2em",height:"1.2em",preserveAspectRatio:"xMidYMid meet",viewBox:"0 0 20 20"},Qe=q('<g fill="none"><path d="M9 6a3 3 0 1 1-6 0a3 3 0 0 1 6 0z" fill="currentColor"></path><path d="M17 6a3 3 0 1 1-6 0a3 3 0 0 1 6 0z" fill="currentColor"></path><path d="M12.93 17c.046-.327.07-.66.07-1a6.97 6.97 0 0 0-1.5-4.33A5 5 0 0 1 19 16v1h-6.07z" fill="currentColor"></path><path d="M6 11a5 5 0 0 1 5 5v1H1v-1a5 5 0 0 1 5-5z" fill="currentColor"></path></g>',1),Xe=[Qe];function Ze(t,e){return l(),d("svg",Je,Xe)}var et={name:"heroicons-solid-users",render:Ze};const tt=[{path:"/blogs",text:"Blogs",icon:Ie},{path:"/posts",text:"Posts",icon:Te},{path:"/comments",text:"Comments",icon:Be},{path:"/categories",text:"Categories",icon:qe},{path:"/tags",text:"Tags",icon:Ke},{path:"/authors",text:"Authors",icon:et}],ot=(t,e=!1)=>{const o=F();return e?t.path===o.path:o.path.startsWith(t.path)},st=W("user",()=>{const t=G("drawerIsExpanded",!0);function e(){t.value=!t.value}return{drawerIsExpanded:t,toggleSideDrawer:e}}),rt={class:"py-4 flex justify-start pl-2 h-16",title:"Broken Rubik Blog Dashboard"},nt=s("img",{src:Ee,class:"block h-full"},null,-1),it={src:Ae,class:"block h-full ml-3"},at={class:"mt-8"},ct={class:"flex flex-col text-sm font-medium"},lt={key:0,class:"ml-4"},dt=s("hr",{class:"opacity-20 mt-auto"},null,-1),pt={class:"text-lg text-center w-16 ml-auto leading-none"},ut=f({setup(t){const e=st(),o=V(()=>e.drawerIsExpanded),n=V(()=>o.value?"w-60":"w-16"),r=()=>e.toggleSideDrawer();return(c,i)=>{const m=v("router-link"),h=ye,g=U("tooltip");return l(),d("nav",{class:b(["bg-[#272a42] transition transition-all text-opacity-60 text-white ease-out duration-200 flex flex-col sticky",p(n)])},[s("div",rt,[nt,_(M,{name:"slide-left"},{default:x(()=>[I(s("img",it,null,512),[[K,p(o)]])]),_:1})]),s("div",at,[s("ul",ct,[(l(!0),d(J,null,Q(p(tt),u=>(l(),d("li",{key:u.path},[I(_(m,{to:u.path,class:b(["flex items-center justify-start px-4 border-3 border-transparent bg-white bg-opacity-0 hover:bg-opacity-5 transition-all duration-200 py-2 my-1",p(ot)(u)?"text-blue-300 text-opacity-100 border-l-current":""])},{default:x(()=>[(l(),X(Z(u.icon),{class:"w-[26px] h-[26px] block flex-shrink-0 flex items-center justify-center"})),_(M,{name:"slide-left"},{default:x(()=>[p(o)?(l(),d("span",lt,j(u.text),1)):ee("",!0)]),_:2},1024)]),_:2},1032,["to","class"]),[[g,{content:u.text,disabled:p(o),placement:"right"}]])]))),128))])]),dt,s("button",{class:"h-12 flex items-center hover:text-white transition-all",onClick:i[0]||(i[0]=u=>r())},[s("span",pt,[_(h,{class:b(["transform duration-300 inline",p(o)?"":"rotate-180"])},null,8,["class"])])])],2)}}}),_t={class:"h-full flex items-stretch"},ht={class:"pt-4 bg-light-300 w-full h-full flex flex-col h-full overflow-y-scroll"},mt={class:"pl-6 flex-grow"},ft={class:"bg-white shadow h-12 flex items-center justify-center mt-auto flex-shrink-0 text-xs text-center text-sm text-gray-400 mt-12"},gt=s("a",{class:"underline-current text-blue-500",href:"https://www.brokenrubik.co"},"Broken Rubik",-1),vt=D(". All rights reserved. "),xt=f({setup(t){const e=new Date().getFullYear();return(o,n)=>{const r=v("router-view");return l(),d("div",_t,[_(ut),s("main",ht,[s("div",mt,[_(r)]),s("footer",ft,[s("p",null,[D(" Copyright \xA9 "+j(p(e))+" ",1),gt,vt])])])])}}}),bt={default:xt};function wt(t){return t.map(e=>{var o;return{path:e.path,component:bt[((o=e.meta)==null?void 0:o.layout)||"default"],children:[$(A({},e),{path:""})]}})}const yt=f({setup(t,{expose:e}){te({title:"Broken Rubik Blog",meta:[{name:"description",content:"Blog Admin Dashboard"}],link:[{rel:"preconnect",href:"https://fonts.googleapis.com"},{rel:"preconnect",href:"https://fonts.gstatic.com",crossorigin:!0},{rel:"stylesheet",href:"https://fonts.googleapis.com/css2?family=Inter:wght@400;500;700&display=swap"}]});const o=L(null),n=()=>{const{height:c}=se(),i=o.value;return c.value-(i==null?void 0:i.getBoundingClientRect().top)},r=L(0);return C(()=>{r.value=n()}),e({appContainer:o}),(c,i)=>{const m=v("router-view");return l(),d("div",{ref:(h,g)=>{g.appContainer=h,o.value=h},class:"h-screen",style:oe({height:r.value+"px"})},[_(m)],4)}}});document.querySelectorAll(".text").forEach(t=>{t.classList.remove("text")});var O;(O=document.getElementById("div__body"))==null||O.setAttribute("style","padding: 0 !important;");const w=document.getElementById("main_form");w&&(w.setAttribute("style","padding: 0 !important"),w.onsubmit=function(t){t.preventDefault()});const Et=wt(ge);re(yt,{routes:Et,history:ne()},t=>{Object.values({"./modules/nprogress.ts":ce,"./modules/pinia.ts":de,"./modules/v-tooltip.ts":_e}).map(e=>{var o;return(o=e.install)==null?void 0:o.call(e,t)})});
