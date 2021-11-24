var L=Object.defineProperty,k=Object.defineProperties;var w=Object.getOwnPropertyDescriptors;var _=Object.getOwnPropertySymbols;var E=Object.prototype.hasOwnProperty,O=Object.prototype.propertyIsEnumerable;var p=(o,e,t)=>e in o?L(o,e,{enumerable:!0,configurable:!0,writable:!0,value:t}):o[e]=t,d=(o,e)=>{for(var t in e||(e={}))E.call(e,t)&&p(o,t,e[t]);if(_)for(var t of _(e))O.call(e,t)&&p(o,t,e[t]);return o},m=(o,e)=>k(o,w(e));import{N as f,c as $,o as c,a as l,b as i,d as h,u as P,e as v,r as g,f as B,g as j,V as S,h as V}from"./vendor.6951912d.js";const C=function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const r of document.querySelectorAll('link[rel="modulepreload"]'))s(r);new MutationObserver(r=>{for(const n of r)if(n.type==="childList")for(const a of n.addedNodes)a.tagName==="LINK"&&a.rel==="modulepreload"&&s(a)}).observe(document,{childList:!0,subtree:!0});function t(r){const n={};return r.integrity&&(n.integrity=r.integrity),r.referrerpolicy&&(n.referrerPolicy=r.referrerpolicy),r.crossorigin==="use-credentials"?n.credentials="include":r.crossorigin==="anonymous"?n.credentials="omit":n.credentials="same-origin",n}function s(r){if(r.ep)return;r.ep=!0;const n=t(r);fetch(r.href,n)}};C();const N=({isClient:o,router:e})=>{o&&(e.beforeEach(()=>{f.start()}),e.afterEach(()=>{f.done()}))};var R=Object.freeze({__proto__:null,[Symbol.toStringTag]:"Module",install:N});const A=({isClient:o,initialState:e,app:t})=>{const s=$();t.use(s),o?s.state.value=e.pinia||{}:e.pinia=s.state.value};var H=Object.freeze({__proto__:null,[Symbol.toStringTag]:"Module",install:A});const M="modulepreload",y={},D="https://cdn.jsdelivr.net/gh/br-lucas/blog-poc-distributable-scripts/",u=function(e,t){return!t||t.length===0?e():Promise.all(t.map(s=>{if(s=`${D}${s}`,s in y)return;y[s]=!0;const r=s.endsWith(".css"),n=r?'[rel="stylesheet"]':"";if(document.querySelector(`link[href="${s}"]${n}`))return;const a=document.createElement("link");if(a.rel=r?"stylesheet":M,r||(a.as="script",a.crossOrigin=""),a.href=s,document.head.appendChild(a),r)return new Promise((b,x)=>{a.addEventListener("load",b),a.addEventListener("error",x)})})).then(()=>e())},I={width:"1.2em",height:"1.2em",preserveAspectRatio:"xMidYMid meet",viewBox:"0 0 32 32"},T=i("path",{d:"M27.562 26L17.17 8.928l2.366-3.888L17.828 4L16 7.005L14.17 4l-1.708 1.04l2.366 3.888L4.438 26H2v2h28v-2zM16 10.85L25.22 26H17v-8h-2v8H6.78z",fill:"currentColor"},null,-1),z=[T];function q(o,e){return c(),l("svg",I,z)}var G={name:"carbon-campsite",render:q};const W={class:"text-4xl"},F=i("p",null,[i("a",{rel:"noreferrer",href:"https://github.com/antfu/vitesse",target:"_blank"}," Vitesse ")],-1),K=h({setup(o){const e=P(),t=()=>{e.push("/test")};return(s,r)=>{const n=G;return c(),l("div",null,[i("p",W,[v(n,{class:"inline-block"})]),F,i("div",{onClick:t}," Go! ")])}}}),U=[{name:"test-asd",path:"/test/asd",component:()=>u(()=>import("./asd.dbc59982.js"),["assets/asd.dbc59982.js","assets/vendor.6951912d.js"]),props:!0},{name:"index",path:"/",component:K,props:!0},{name:"all",path:"/:all(.*)*",component:()=>u(()=>import("./_...all_.6124b188.js"),["assets/_...all_.6124b188.js","assets/vendor.6951912d.js"]),props:!0,meta:{layout:404}}];var Y=(o,e)=>{const t=o.__vccOpts||o;for(const[s,r]of e)t[s]=r;return t};const J={},Q={class:"px-4 py-10 text-center text-gray-700 dark:text-gray-200"},X=i("div",{class:"mt-5 mx-auto text-center opacity-25 text-sm"}," [Default Layout] ",-1);function Z(o,e){const t=g("router-view");return c(),l("main",Q,[v(t),X])}var ee=Y(J,[["render",Z]]);const te={"404":()=>u(()=>import("./404.1616dff6.js"),["assets/404.1616dff6.js","assets/vendor.6951912d.js"]),default:ee};function oe(o){return o.map(e=>{var t;return{path:e.path,component:te[((t=e.meta)==null?void 0:t.layout)||"default"],children:[m(d({},e),{path:""})]}})}const re=h({setup(o){return B({title:"Broken Rubik Blog",meta:[{name:"description",content:"Blog Admin Dashboard"}],link:[{rel:"preconnect",href:"https://fonts.googleapis.com"},{rel:"preconnect",href:"https://fonts.gstatic.com",crossorigin:!0},{rel:"stylesheet",href:"https://fonts.googleapis.com/css2?family=Inter:wght@400;700&display=swap"}]}),(e,t)=>{const s=g("router-view");return c(),j(s)}}});const se=oe(U);S(re,{routes:se,history:V()},o=>{Object.values({"./modules/nprogress.ts":R,"./modules/pinia.ts":H}).map(e=>{var t;return(t=e.install)==null?void 0:t.call(e,o)})});export{Y as _};
