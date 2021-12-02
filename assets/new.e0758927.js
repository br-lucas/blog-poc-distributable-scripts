import{d as p,u as d,r as m,a as g,b,l as s,e as t,w as f,A as _}from"./vendor.68906bd2.js";import{_ as h}from"./BlogForm.5cfbfb2e.js";import{g as x}from"./ServiceManager.910e01c5.js";import"./plugin-vue_export-helper.21dcd24c.js";const w={class:"flex flex-col"},v=t("h1",{class:"title mb-12"}," New Blog ",-1),y={class:"mb-16 mt-20 max-w-xs mx-auto w-full text-center flex gap-2"},B=_(" Cancel "),k=t("button",{type:"submit",form:"new-blog",class:"flex-1 rounded-full whitespace-nowrap font-bold text-lg text-white bg-brand px-5 py-2"}," Save ",-1),N=p({props:{blogs:{type:Object,required:!0}},setup(A){const a=x(),r=d(),l=async e=>{await a.createBlog(e);const o=e.id;r.push(`/blogs/${o}`)},i={blogURL:"blog",categoriesURL:"category",tagsURL:"tag",pageSize:10,dateFormat:"FMMonth DD, YYYY",shareOptions:{facebook:!0,email:!0,linkedin:!0,twitter:!0},postOptions:{commentsAvailable:!0,displayArchive:!0,displayAuthor:!0,displayDate:!0},listPageOptions:{displayArchive:!0,displayAuthor:!0,displayDate:!0}};return(e,o)=>{const n=m("router-link");return g(),b("div",w,[v,s(h,{ref:(c,u)=>{u.form=c},name:"new-blog","initial-values":i,onSubmit:l},null,512),t("div",y,[s(n,{to:"/blogs",class:"rounded-full flex-1 whitespace-nowrap font-bold text-lg text-white bg-gray-400 px-5 py-2"},{default:f(()=>[B]),_:1}),k])])}}});export{N as default};
