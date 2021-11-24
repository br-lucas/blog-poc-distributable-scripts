var x=Object.defineProperty,L=Object.defineProperties;var k=Object.getOwnPropertyDescriptors;var u=Object.getOwnPropertySymbols;var w=Object.prototype.hasOwnProperty,$=Object.prototype.propertyIsEnumerable;var _=(r,e,t)=>e in r?x(r,e,{enumerable:!0,configurable:!0,writable:!0,value:t}):r[e]=t,d=(r,e)=>{for(var t in e||(e={}))w.call(e,t)&&_(r,t,e[t]);if(u)for(var t of u(e))$.call(e,t)&&_(r,t,e[t]);return r},p=(r,e)=>L(r,k(e));import{N as f,c as O,o as a,a as l,b as i,d as m,r as h,e as B,u as E,f as P,V as S}from"./vendor.67c01a5b.js";const N=function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const n of document.querySelectorAll('link[rel="modulepreload"]'))o(n);new MutationObserver(n=>{for(const s of n)if(s.type==="childList")for(const c of s.addedNodes)c.tagName==="LINK"&&c.rel==="modulepreload"&&o(c)}).observe(document,{childList:!0,subtree:!0});function t(n){const s={};return n.integrity&&(s.integrity=n.integrity),n.referrerpolicy&&(s.referrerPolicy=n.referrerpolicy),n.crossorigin==="use-credentials"?s.credentials="include":n.crossorigin==="anonymous"?s.credentials="omit":s.credentials="same-origin",s}function o(n){if(n.ep)return;n.ep=!0;const s=t(n);fetch(n.href,s)}};N();const j=({isClient:r,router:e})=>{r&&(e.beforeEach(()=>{f.start()}),e.afterEach(()=>{f.done()}))};var C=Object.freeze({__proto__:null,[Symbol.toStringTag]:"Module",install:j});const M=({isClient:r,initialState:e,app:t})=>{const o=O();t.use(o),r?o.state.value=e.pinia||{}:e.pinia=o.state.value};var V=Object.freeze({__proto__:null,[Symbol.toStringTag]:"Module",install:M});const z={width:"1.2em",height:"1.2em",preserveAspectRatio:"xMidYMid meet",viewBox:"0 0 32 32"},A=i("path",{d:"M27.562 26L17.17 8.928l2.366-3.888L17.828 4L16 7.005L14.17 4l-1.708 1.04l2.366 3.888L4.438 26H2v2h28v-2zM16 10.85L25.22 26H17v-8h-2v8H6.78z",fill:"currentColor"},null,-1),H=[A];function R(r,e){return a(),l("svg",z,H)}var D={name:"carbon-campsite",render:R},v=(r,e)=>{const t=r.__vccOpts||r;for(const[o,n]of e)t[o]=n;return t};const I={},T={class:"text-4xl"},q=i("p",null,[i("a",{rel:"noreferrer",href:"https://github.com/antfu/vitesse",target:"_blank"}," Vitesse ")],-1);function F(r,e){const t=D;return a(),l("div",null,[i("p",T,[m(t,{class:"inline-block"})]),q])}var G=v(I,[["render",F]]);const K=[{name:"index",path:"/",component:G,props:!0}],U="modulepreload",g={},W="https://cdn.jsdelivr.net/gh/br-lucas/blog-poc-distributable-scripts/",Y=function(e,t){return!t||t.length===0?e():Promise.all(t.map(o=>{if(o=`${W}${o}`,o in g)return;g[o]=!0;const n=o.endsWith(".css"),s=n?'[rel="stylesheet"]':"";if(document.querySelector(`link[href="${o}"]${s}`))return;const c=document.createElement("link");if(c.rel=n?"stylesheet":U,n||(c.as="script",c.crossOrigin=""),c.href=o,document.head.appendChild(c),n)return new Promise((y,b)=>{c.addEventListener("load",y),c.addEventListener("error",b)})})).then(()=>e())},J={},Q={class:"px-4 py-10 text-center text-gray-700 dark:text-gray-200"},X=i("div",{class:"mt-5 mx-auto text-center opacity-25 text-sm"}," [Default Layout] ",-1);function Z(r,e){const t=h("router-view");return a(),l("main",Q,[m(t),X])}var ee=v(J,[["render",Z]]);const te={"404":()=>Y(()=>import("./404.7a2ccc9a.js"),["assets/404.7a2ccc9a.js","assets/vendor.67c01a5b.js"]),default:ee};function re(r){return r.map(e=>{var t;return{path:e.path,component:te[((t=e.meta)==null?void 0:t.layout)||"default"],children:[p(d({},e),{path:""})]}})}const ne=B({setup(r){return E({title:"Broken Rubik Blog",meta:[{name:"description",content:"Blog Admin Dashboard"}],link:[{rel:"preconnect",href:"https://fonts.googleapis.com"},{rel:"preconnect",href:"https://fonts.gstatic.com",crossorigin:!0},{rel:"stylesheet",href:"https://fonts.googleapis.com/css2?family=Inter:wght@400;700&display=swap"}]}),(e,t)=>{const o=h("router-view");return a(),P(o)}}});const oe=re(K);S(ne,{routes:oe},r=>{Object.values({"./modules/nprogress.ts":C,"./modules/pinia.ts":V}).map(e=>{var t;return(t=e.install)==null?void 0:t.call(e,r)})});
