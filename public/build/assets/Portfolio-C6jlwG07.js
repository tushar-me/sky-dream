import{u as n,r as d,o as i,c as a,d as s,w as p,e as t,j as u,k as g,F as _}from"./app-DpswUAxI.js";import{_ as m}from"./GuestLayout-CuVvyZk5.js";import{_ as f}from"./PortCard-CWhx0jnI.js";const b=t("div",{class:"bg-[url(https://img.freepik.com/free-photo/canvas-easel-black-copy-space-background_23-2148660999.jpg?t=st=1719752276~exp=1719755876~hmac=2fa6d6653d0f4b54552edb24623613d11041a69d39d9d1a0c376e449319d4882&w=740)] relative bg-no-repeat bg-cover bg-top"},[t("h2",{class:"text-white uppercase pt-56 pb-20 text-6xl font-bold text-center"},"Our Portfolio")],-1),h={class:"grid grid-cols-1 lg:grid-cols-4 gap-5 mx-20 my-10"},E={__name:"Portfolio",setup(x){const{sendRequest:r,loading:y,error:k}=n(),o=d([]),l=async()=>{const e=await r({url:"/api/frontend/gallery",method:"GET"});console.log("res",e),o.value=e==null?void 0:e.data};return i(async()=>await l()),(e,v)=>(a(),s(m,null,{default:p(()=>[b,t("div",h,[(a(!0),u(_,null,g(o.value,c=>(a(),s(f,{gallery:c},null,8,["gallery"]))),256))])]),_:1}))}};export{E as default};
