import{s as j,e as d,k as w,q as F,r as S,o as c,c as l,a as e,F as h,l as p,y as v,B as y,C as B,b as D,t as E,p as L,i as P,D as q,E as z}from"./index.c78e5ac6.js";import{_ as N}from"./_plugin-vue_export-helper.cdc0426e.js";const i=r=>(L("data-v-4f471bc3"),r=r(),P(),r),R={id:"clients"},V=i(()=>e("div",{class:"main-title"},"Fotografias",-1)),$={class:"container grid"},A={class:"col-12 lg:col-4"},M={class:"login-form"},T=i(()=>e("div",{class:"title flex"}," Subir una Imagen ",-1)),U=i(()=>e("div",{class:"form-text"}," Las imagenes subidas apareceran en la seccion de Fotograf\xEDa ",-1)),G={class:"field"},H=i(()=>e("label",{for:"name"},"Imagen",-1)),J={class:"col-12 lg:col-8"},K={class:"w-full"},O=i(()=>e("thead",null,[e("tr",{class:"grid"},[e("th",{class:"col text-center flex justify-content-center align-items-center",style:{color:"#101615cc","font-size":"130%"}},"Imagenes"),e("th",{class:"col text-center flex justify-content-center align-items-center",style:{color:"#101615cc","font-size":"130%"}},"Acciones")])],-1)),Q={class:"col text-center flex justify-content-center align-items-center"},W=["src","alt"],X={class:"col text-center flex justify-content-center align-items-center"},Y={class:"flex flex-wrap justify-content-center"},Z=["onClick"],ee={__name:"Fotografia",emits:["toasting"],setup(r,{emit:b}){const _=j(v,"fotografia"),o=d(),u=d([]),g=d(0),m=d(1),x=n=>{o.value=n.target.files[0]};w(()=>{F(_,n=>{let s=[],a=[];n.forEach(t=>{let f={id:t.id,name:t.data().name,url:t.data().url,created:t.data().created};s.length>=5&&(a.push(s),s=[]),s.push(f)}),s.length!=0&&(a.push(s),s=[]),m.value=a.length,u.value=a})});const k=()=>{let n=y.child("fotografia/"+o.value.name),s={contentType:"img/jpeg"};n.put(o.value,s).then(a=>{a.task.snapshot.ref.getDownloadURL().then(t=>{B(_,{name:"fotografia/"+o.value.name,url:t,created:new Date}),o.value=""}).catch(t=>{})}).catch(a=>{})},I=n=>{y.child(n.name).delete().then(a=>{q(z(v,"fotografia",n.id))}).catch(a=>{b("toasting","Error "+a.code+" al eliminar cliente: "+a.message,"error")})},C=n=>{g.value=n-1};return(n,s)=>{const a=S("font-awesome-icon");return c(),l("div",R,[V,e("div",$,[e("div",A,[e("div",M,[T,U,e("div",G,[H,e("input",{onChange:x,type:"file",required:"true",accept:"image/*"},null,32)]),e("div",{class:"flex justify-content-end"},[e("div",{class:"boton-mail select-none cursor-pointer",onClick:k},"Subir")])])]),e("div",J,[e("table",K,[O,e("tbody",null,[(c(!0),l(h,null,p(u.value[g.value],t=>(c(),l("tr",{key:t.id,class:"grid py-3"},[e("td",Q,[e("img",{src:t.url,alt:t.name,class:"galery-image"},null,8,W)]),e("td",X,[e("div",{class:"boton-action trash select-none cursor-pointer flex justify-content-center align-items-center",onClick:s[0]||(s[0]=f=>I(n.serv))},[D(a,{icon:"fa-solid fa-trash-can"})])])]))),128))]),e("tfoot",null,[e("div",Y,[(c(!0),l(h,null,p(m.value,t=>(c(),l("div",{class:"indices-tabla select-none cursor-pointer",onClick:f=>C(t),key:t},E(t),9,Z))),128))])])])])])])}}},ae=N(ee,[["__scopeId","data-v-4f471bc3"]]);export{ae as default};
