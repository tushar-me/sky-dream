import{u as i,r as d,o as u,c as t,d as r,w as _,e as s,j as p,k as m,F as g}from"./app-DF1wReVw.js";import{_ as v}from"./GuestLayout-CmhycKmp.js";import{_ as f}from"./Servicecard-DpISjxqu.js";const h=s("div",{class:"bg-[url(https://images.pexels.com/photos/2065971/pexels-photo-2065971.jpeg)] relative bg-no-repeat bg-cover bg-bottom"},[s("h2",{class:"text-white uppercase pt-56 pb-20 text-6xl font-bold text-center"},"Our Services")],-1),x={class:"my-10 mx-20"},b={class:"grid grid-cols-1 lg:grid-cols-3 gap-5 mt-10"},F={__name:"Services",setup(w){const{sendRequest:c,loading:k,error:B}=i(),o=d([]),l=async()=>{const e=await c({url:"/api/frontend/services",method:"GET"});console.log("res",e),o.value=e==null?void 0:e.data};return u(async()=>await l()),(e,S)=>(t(),r(v,null,{default:_(()=>{var a;return[s("section",null,[h,s("div",x,[s("div",b,[(t(!0),p(g,null,m((a=o.value)==null?void 0:a.allServices,n=>(t(),r(f,{service:n},null,8,["service"]))),256))])])])]}),_:1}))}};export{F as default};