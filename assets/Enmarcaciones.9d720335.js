import{s as C,e as d,k as j,q as w,r as S,o,c as l,a as e,F as p,l as v,y,B as x,C as B,b as D,t as L,p as P,i as q,D as z,E as F}from"./index.c78e5ac6.js";import{_ as N}from"./_plugin-vue_export-helper.cdc0426e.js";const i=r=>(P("data-v-f40aad47"),r=r(),q(),r),R={id:"clients"},V=i(()=>e("div",{class:"main-title"},"Enmarcaciones",-1)),$={class:"container grid"},A={class:"col-12 lg:col-4"},M={class:"login-form"},T=i(()=>e("div",{class:"title flex"}," Subir una Imagen ",-1)),U=i(()=>e("div",{class:"form-text"}," Las imagenes subidas apareceran en la seccion de Enmarcaciones ",-1)),G={class:"field"},H=i(()=>e("label",{for:"name"},"Imagen (se recomienda subir solo logos)",-1)),J={class:"col-12 lg:col-8"},K={class:"w-full"},O=i(()=>e("thead",null,[e("tr",{class:"grid"},[e("th",{class:"col text-center flex justify-content-center align-items-center",style:{color:"#101615cc","font-size":"130%"}},"Imagenes"),e("th",{class:"col text-center flex justify-content-center align-items-center",style:{color:"#101615cc","font-size":"130%"}},"Acciones")])],-1)),Q={class:"col text-center flex justify-content-center align-items-center"},W=["src","alt"],X={class:"col text-center flex justify-content-center align-items-center"},Y={class:"flex flex-wrap justify-content-center"},Z=["onClick"],ee={__name:"Enmarcaciones",emits:["toasting"],setup(r,{emit:m}){const u=C(y,"enmarcacion"),c=d(),g=d([]),f=d(0),h=d(1),b=n=>{c.value=n.target.files[0]};j(()=>{w(u,n=>{let a=[],t=[];n.forEach(s=>{let _={id:s.id,name:s.data().name,url:s.data().url,created:s.data().created};a.length>=5&&(t.push(a),a=[]),a.push(_)}),a.length!=0&&(t.push(a),a=[]),h.value=t.length,g.value=t})});const k=()=>{let n=x.child("enmarcaciones/"+c.value.name),a={contentType:"img/jpeg"};n.put(c.value,a).then(t=>{t.task.snapshot.ref.getDownloadURL().then(s=>{B(u,{name:"enmarcacion/"+c.value.name,url:s,created:new Date}),c.value=""}).catch(s=>{})}).catch(t=>{m("toasting","Error "+t.code+" al crear cliente: "+t.message,"error")})},E=n=>{x.child(n.name).delete().then(t=>{z(F(y,"enmarcacion",n.id))}).catch(t=>{m("toasting","Error "+t.code+" al eliminar cliente: "+t.message,"error")})},I=n=>{f.value=n-1};return(n,a)=>{const t=S("font-awesome-icon");return o(),l("div",R,[V,e("div",$,[e("div",A,[e("div",M,[T,U,e("div",G,[H,e("input",{onChange:b,type:"file",required:"true",accept:"image/*"},null,32)]),e("div",{class:"flex justify-content-end"},[e("div",{class:"boton-mail select-none cursor-pointer",onClick:k},"Subir")])])]),e("div",J,[e("table",K,[O,e("tbody",null,[(o(!0),l(p,null,v(g.value[f.value],s=>(o(),l("tr",{key:s.id,class:"grid py-3"},[e("td",Q,[e("img",{src:s.url,alt:s.name,class:"galery-image"},null,8,W)]),e("td",X,[e("div",{class:"boton-action trash select-none cursor-pointer flex justify-content-center align-items-center",onClick:a[0]||(a[0]=_=>E(n.serv))},[D(t,{icon:"fa-solid fa-trash-can"})])])]))),128))]),e("tfoot",null,[e("div",Y,[(o(!0),l(p,null,v(h.value,s=>(o(),l("div",{class:"indices-tabla select-none cursor-pointer",onClick:_=>I(s),key:s},L(s),9,Z))),128))])])])])])])}}},ae=N(ee,[["__scopeId","data-v-f40aad47"]]);export{ae as default};
