import{p as pe,u as _e,a as be,r as ie,o as fe,c as i,d as ve,w as de,_ as he,e,t as n,m as _,v as b,f as l,j as c,n as f,g as ne,K as xe,h as v,l as ye}from"./app-DF1wReVw.js";import{_ as ge}from"./LoadingButton-DnLnlcmA.js";const we={class:"mb-10 text-primary text-xl font-medium"},ke={class:"flex items-center flex-wrap"},Se={class:"w-1/2 pr-5 pb-4"},De={class:"w-full"},Ve=e("label",{for:"name",class:"text-sm block mb-2"},[v("Title "),e("span",{class:"text-red-500"},"*")],-1),Ue=["disabled"],Ce={key:0,class:"text-red-500"},Te={class:"w-1/2 pr-5 pb-4"},$e={class:"w-full"},je=e("label",{for:"name",class:"text-sm block mb-2"},[v("Price "),e("span",{class:"text-red-500"},"*")],-1),Ie=["disabled"],Ne={key:0,class:"text-red-500"},Be={class:"flex items-start gap-5 my-6"},Le={class:"w-1/3 pr-2"},Me={class:"w-full"},Re=e("label",{for:"serviceImage",class:"text-sm block mb-2"},"Service Image",-1),Ae={for:"serviceImage",class:"border border-primary border-dashed p-4 rounded-2xl flex items-center justify-center w-full h-52 cursor-pointer"},Ee=["src"],Oe={key:1,class:"flex flex-col items-center justify-center gap-2"},Fe=e("small",{class:"text-xs text-center text-red-600"},"Select an image to upload Accepted formats: .jpg, .png | Max size: 1024kb | 600 * 400",-1),Pe=e("span",{class:"text-primary font-semibold opacity-85 pl-6"},"Upload Service Icon",-1),qe=["disabled"],ze={key:0,class:"text-red-500"},Ge={class:"w-full flex flex-col gap-3"},Ke=e("label",{class:"text-sm block mb-2"},"Speciality",-1),He=["disabled"],Je={key:0,class:"text-red-500"},Qe=e("label",{class:"text-sm block mb-2"},"Short Description",-1),We=["disabled"],Xe={key:0,class:"text-red-500"},Ye={class:"w-full"},Ze=e("h2",{class:"mb-2"},"Discription",-1),es=["disabled"],ss={class:"mt-5"},rs={__name:"Add",setup(ts){const u=pe(),{sendRequest:h,loading:d,error:o}=_e(),ce=be(),s=ie({name:null,price:null,image:null,shortDescritions:null,details:null,speciality:null}),ue=async()=>{var a,p;const t=await h({url:"/api/V1/service",method:"POST",data:{...s.value,id:((a=u==null?void 0:u.params)==null?void 0:a.id)??null}});x(),ce.success((p=t==null?void 0:t.data)==null?void 0:p.message)},m=ie(""),me=t=>{const a=t.target.files[0];s.value.image=a,m.value=URL.createObjectURL(a)};fe(async()=>{var a;const t=await h({url:`/api/V1/service/${(a=u==null?void 0:u.params)==null?void 0:a.id}`,method:"GET"});x(t.data)});const x=t=>{t?(s.value.name=t==null?void 0:t.name,s.value.price=t.price,s.value.image=s.value.shortDescritions=t.shortDescritions,s.value.details=t.details,s.value.speciality=t.speciality,m.value=t.image):(s.value.name=null,s.value.price=null,s.value.image=null,s.value.shortDescritions=null,s.value.details=null,s.value.speciality=null,m.value=null)};return(t,a)=>(i(),ve(he,null,{default:de(()=>{var p,y,g,w,k,S,D,V,U,C,T,$,j,I,N,B,L,M,R,A,E,O,F,P,q,z,G,K,H,J,Q,W,X,Y,Z,ee,se,te,ae,le,re,oe;return[e("form",{onSubmit:ye(ue,["prevent"]),class:"bg-white shadow-md p-6 max-w-5xl mx-auto"},[e("h3",we,n((y=(p=t.$route)==null?void 0:p.params)!=null&&y.id?"Edit Service":"Create a New Service"),1),e("div",null,[e("div",ke,[e("div",Se,[e("div",De,[Ve,_(e("input",{type:"text",disabled:l(d),"onUpdate:modelValue":a[0]||(a[0]=r=>s.value.name=r),class:"border border-primary rounded-md font-normal text-sm disabled:bg-teal-50 w-full focus:ring-primary focus:border-primary"},null,8,Ue),[[b,s.value.name]]),(S=(k=(w=(g=l(o))==null?void 0:g.response)==null?void 0:w.data)==null?void 0:k.errors)!=null&&S.name?(i(),c("span",Ce,n((C=(U=(V=(D=l(o))==null?void 0:D.response)==null?void 0:V.data)==null?void 0:U.errors)==null?void 0:C.name[0]),1)):f("",!0)])]),e("div",Te,[e("div",$e,[je,_(e("input",{type:"text",disabled:l(d),"onUpdate:modelValue":a[1]||(a[1]=r=>s.value.price=r),class:"border disabled:bg-teal-50 border-primary rounded-md font-normal text-sm w-full focus:ring-primary focus:border-primary"},null,8,Ie),[[b,s.value.price]]),(I=(j=($=(T=l(o))==null?void 0:T.response)==null?void 0:$.data)==null?void 0:j.errors)!=null&&I.price?(i(),c("span",Ne,n((M=(L=(B=(N=l(o))==null?void 0:N.response)==null?void 0:B.data)==null?void 0:L.errors)==null?void 0:M.price[0]),1)):f("",!0)])])]),e("div",Be,[e("div",Le,[e("div",Me,[Re,e("label",Ae,[m.value?(i(),c("img",{key:0,class:"w-full h-full",src:m.value,alt:""},null,8,Ee)):(i(),c("span",Oe,[ne(xe,{name:"tabler:cloud-upload",class:"text-primary text-5xl opacity-85"}),Fe,Pe]))]),e("input",{class:"hidden",disabled:l(d),id:"serviceImage",type:"file",onChange:me},null,40,qe),(O=(E=(A=(R=l(o))==null?void 0:R.response)==null?void 0:A.data)==null?void 0:E.errors)!=null&&O.image?(i(),c("span",ze,n((z=(q=(P=(F=l(o))==null?void 0:F.response)==null?void 0:P.data)==null?void 0:q.errors)==null?void 0:z.image[0]),1)):f("",!0)])]),e("div",Ge,[e("div",null,[Ke,_(e("input",{type:"text",disabled:l(d),"onUpdate:modelValue":a[2]||(a[2]=r=>s.value.speciality=r),class:"border disabled:bg-teal-50 border-primary rounded-md font-normal text-sm w-full focus:ring-primary focus:border-primary"},null,8,He),[[b,s.value.speciality]])]),(J=(H=(K=(G=l(o))==null?void 0:G.response)==null?void 0:K.data)==null?void 0:H.errors)!=null&&J.speciality?(i(),c("span",Je,n((Y=(X=(W=(Q=l(o))==null?void 0:Q.response)==null?void 0:W.data)==null?void 0:X.errors)==null?void 0:Y.speciality[0]),1)):f("",!0),e("div",null,[Qe,_(e("textarea",{disabled:l(d),rows:"5","onUpdate:modelValue":a[3]||(a[3]=r=>s.value.shortDescritions=r),class:"border border-primary rounded-md font-normal text-sm w-full disabled:bg-teal-50 focus:ring-primary focus:border-primary"},null,8,We),[[b,s.value.shortDescritions]]),(te=(se=(ee=(Z=l(o))==null?void 0:Z.response)==null?void 0:ee.data)==null?void 0:se.errors)!=null&&te.shortDescritions?(i(),c("span",Xe,n((oe=(re=(le=(ae=l(o))==null?void 0:ae.response)==null?void 0:le.data)==null?void 0:re.errors)==null?void 0:oe.shortDescritions[0]),1)):f("",!0)])])]),e("div",Ye,[Ze,_(e("textarea",{rows:"8",disabled:l(d),"onUpdate:modelValue":a[4]||(a[4]=r=>s.value.details=r),class:"border border-primary rounded-md disabled:bg-teal-50 font-normal text-sm w-full focus:ring-primary focus:border-primary"},null,8,es),[[b,s.value.details]])])]),e("div",ss,[ne(ge,{isLoading:l(d)},{default:de(()=>{var r;return[v(n((r=t.$route.params)!=null&&r.id?"Update Service":"Save Service"),1)]}),_:1},8,["isLoading"])])],32)]}),_:1}))}};export{rs as default};