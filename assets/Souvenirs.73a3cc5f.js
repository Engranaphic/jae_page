import{x as k,e as d,j as C,s as w,r as B,o as c,c as l,a as e,F as h,l as v,z as p,B as y,C as D,b as E,t as z,p as L,g as P,D as F,E as N}from"./index.eaef6e73.js";import{_ as R}from"./_plugin-vue_export-helper.cdc0426e.js";const i=r=>(L("data-v-badf5f9d"),r=r(),P(),r),V={id:"clients"},$=i(()=>e("div",{class:"main-title"},"Souvenires",-1)),q={class:"container grid"},A={class:"col-12 lg:col-4"},M={class:"login-form"},T=i(()=>e("div",{class:"title flex"}," Subir una Imagen ",-1)),U=i(()=>e("div",{class:"form-text"}," Las imagenes subidas apareceran en la seccion de Souvenires ",-1)),G={class:"field"},H=i(()=>e("label",{for:"name"},"Imagen (se recomienda subir solo logos)",-1)),J={class:"col-12 lg:col-8"},K={class:"w-full"},O=i(()=>e("thead",null,[e("tr",{class:"grid"},[e("th",{class:"col text-center flex justify-content-center align-items-center",style:{color:"#101615cc","font-size":"130%"}},"Imagenes"),e("th",{class:"col text-center flex justify-content-center align-items-center",style:{color:"#101615cc","font-size":"130%"}},"Acciones")])],-1)),Q={class:"col text-center flex justify-content-center align-items-center"},W=["src","alt"],X={class:"col text-center flex justify-content-center align-items-center"},Y={class:"flex flex-wrap justify-content-center"},Z=["onClick"],ee={__name:"Souvenirs",emits:["toasting"],setup(r,{emit:b}){const _=k(p,"souvenirs"),o=d(),f=d([]),g=d(0),m=d(1),x=a=>{o.value=a.target.files[0]};C(()=>{w(_,a=>{let s=[],n=[];a.forEach(t=>{let u={id:t.id,name:t.data().name,url:t.data().url,created:t.data().created};s.length>=5&&(n.push(s),s=[]),s.push(u)}),s.length!=0&&(n.push(s),s=[]),m.value=n.length,f.value=n})});const S=()=>{let a=y.child("souvenirs/"+o.value.name),s={contentType:"img/jpeg"};a.put(o.value,s).then(n=>{n.task.snapshot.ref.getDownloadURL().then(t=>{D(_,{name:"souvenirs/"+o.value.name,url:t,created:new Date}),o.value=""}).catch(t=>{})}).catch(n=>{})},I=a=>{y.child(a.name).delete().then(n=>{F(N(p,"souvenirs",a.id))}).catch(n=>{b("toasting","Error "+n.code+" al eliminar cliente: "+n.message,"error")})},j=a=>{g.value=a-1};return(a,s)=>{const n=B("font-awesome-icon");return c(),l("div",V,[$,e("div",q,[e("div",A,[e("div",M,[T,U,e("div",G,[H,e("input",{onChange:x,type:"file",required:"true",accept:"image/*"},null,32)]),e("div",{class:"flex justify-content-end"},[e("div",{class:"boton-mail select-none cursor-pointer",onClick:S},"Subir")])])]),e("div",J,[e("table",K,[O,e("tbody",null,[(c(!0),l(h,null,v(f.value[g.value],t=>(c(),l("tr",{key:t.id,class:"grid py-3"},[e("td",Q,[e("img",{src:t.url,alt:t.name,class:"galery-image"},null,8,W)]),e("td",X,[e("div",{class:"boton-action trash select-none cursor-pointer flex justify-content-center align-items-center",onClick:s[0]||(s[0]=u=>I(a.serv))},[E(n,{icon:"fa-solid fa-trash-can"})])])]))),128))]),e("tfoot",null,[e("div",Y,[(c(!0),l(h,null,v(m.value,t=>(c(),l("div",{class:"indices-tabla select-none cursor-pointer",onClick:u=>j(t),key:t},z(t),9,Z))),128))])])])])])])}}},ne=R(ee,[["__scopeId","data-v-badf5f9d"]]);export{ne as default};
