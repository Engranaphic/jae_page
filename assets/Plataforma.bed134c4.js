import{_ as C,e as d,j as P,x as w,r as S,o as c,c as l,a as e,F as h,l as p,y as v,A as y,B,b as D,t as E,p as L,g as z,C as A,D as F}from"./index.a72fee6b.js";import{_ as N}from"./_plugin-vue_export-helper.cdc0426e.js";const i=r=>(L("data-v-779a59d0"),r=r(),z(),r),R={id:"clients"},V=i(()=>e("div",{class:"main-title"},"Plataforma",-1)),$={class:"container grid"},q={class:"col-12 lg:col-4"},M={class:"login-form"},T=i(()=>e("div",{class:"title flex"}," Subir una Imagen ",-1)),U=i(()=>e("div",{class:"form-text"}," Las imagenes subidas apareceran en la seccion de Plataforma ",-1)),G={class:"field"},H=i(()=>e("label",{for:"name"},"Imagen",-1)),J={class:"col-12 lg:col-8"},K={class:"w-full"},O=i(()=>e("thead",null,[e("tr",{class:"grid"},[e("th",{class:"col text-center flex justify-content-center align-items-center",style:{color:"#101615cc","font-size":"130%"}},"Imagenes"),e("th",{class:"col text-center flex justify-content-center align-items-center",style:{color:"#101615cc","font-size":"130%"}},"Acciones")])],-1)),Q={class:"col text-center flex justify-content-center align-items-center"},W=["src","alt"],X={class:"col text-center flex justify-content-center align-items-center"},Y={class:"flex flex-wrap justify-content-center"},Z=["onClick"],ee={__name:"Plataforma",emits:["toasting"],setup(r,{emit:x}){const m=C(v,"plataforma"),o=d(),u=d([]),f=d(0),g=d(1),b=n=>{o.value=n.target.files[0]};P(()=>{w(m,n=>{let a=[],s=[];n.forEach(t=>{let _={id:t.id,name:t.data().name,url:t.data().url,created:t.data().created};a.length>=5&&(s.push(a),a=[]),a.push(_)}),a.length!=0&&(s.push(a),a=[]),g.value=s.length,u.value=s})});const I=()=>{let n=y.child("plataforma/"+o.value.name),a={contentType:"img/jpeg"};n.put(o.value,a).then(s=>{s.task.snapshot.ref.getDownloadURL().then(t=>{B(m,{name:"plataforma/"+o.value.name,url:t,created:new Date}),o.value=""}).catch(t=>{})}).catch(s=>{})},j=n=>{y.child(n.name).delete().then(s=>{A(F(v,"plataforma",n.id))}).catch(s=>{x("toasting","Error "+s.code+" al eliminar cliente: "+s.message,"error")})},k=n=>{f.value=n-1};return(n,a)=>{const s=S("font-awesome-icon");return c(),l("div",R,[V,e("div",$,[e("div",q,[e("div",M,[T,U,e("div",G,[H,e("input",{onChange:b,type:"file",required:"true",accept:"image/*"},null,32)]),e("div",{class:"flex justify-content-end"},[e("div",{class:"boton-mail select-none cursor-pointer",onClick:I},"Subir")])])]),e("div",J,[e("table",K,[O,e("tbody",null,[(c(!0),l(h,null,p(u.value[f.value],t=>(c(),l("tr",{key:t.id,class:"grid py-3"},[e("td",Q,[e("img",{src:t.url,alt:t.name,class:"galery-image"},null,8,W)]),e("td",X,[e("div",{class:"boton-action trash select-none cursor-pointer flex justify-content-center align-items-center",onClick:a[0]||(a[0]=_=>j(n.serv))},[D(s,{icon:"fa-solid fa-trash-can"})])])]))),128))]),e("tfoot",null,[e("div",Y,[(c(!0),l(h,null,p(g.value,t=>(c(),l("div",{class:"indices-tabla select-none cursor-pointer",onClick:_=>k(t),key:t},E(t),9,Z))),128))])])])])])])}}},se=N(ee,[["__scopeId","data-v-779a59d0"]]);export{se as default};