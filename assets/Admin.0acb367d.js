import{e as c,j as u,x as b,E as j,a,b as f,l,G as $,T as w,k as t,q as _,f as B,z as S,A as I}from"./@vue.9e671e56.js";import{_ as v}from"./_plugin-vue_export-helper.cdc0426e.js";import{a as z}from"./index.2025ce1d.js";import{u as T}from"./vue-router.fd8ca502.js";import"./firebase.127c8ce3.js";import"./@firebase.065648e6.js";import"./tslib.9ddfe73c.js";import"./idb.94e4f64e.js";/* empty css                  */import"./@fortawesome.32fda8e3.js";const A={__name:"Toast",props:["message","type"],setup(s){const i=s;return(r,m)=>(c(),u("div",{id:"toast",class:"shadow-5 flex align-items-center justify-content-center",style:j("background: "+i.type+";")},b(i.message),5))}},E=v(A,[["__scopeId","data-v-8e4e8980"]]);const F=s=>(S("data-v-c36a06e1"),s=s(),I(),s),V={id:"admin"},N=F(()=>t("div",{class:"back-img"},null,-1)),h={id:"navbar",class:"z-5 shadow-5 flex justify-content-between"},M={class:"hidden lg:flex justify-content-center"},q={key:0,id:"side_menu"},D={__name:"Admin",setup(s){const i=T(),r=a(!1),m=a(""),g=a(""),k=a(!1),y=()=>{r.value=!r.value},d=()=>{z.signOut(),i.push({name:"home"})},n=p=>{i.push({name:p})};return(p,e)=>{const x=f("font-awesome-icon"),C=f("router-view");return c(),u("div",V,[l(w,{name:"fade"},{default:$(()=>[k.value?(c(),B(E,{key:0,message:m.value,type:g.value},null,8,["message","type"])):_("",!0)]),_:1}),N,t("div",h,[t("div",{onClick:e[0]||(e[0]=o=>n("home")),class:"button-link logo cursor-pointer select-none flex align-items-center justify-content-center"},"Volver a Inicio"),t("div",M,[t("div",{onClick:e[1]||(e[1]=o=>n("Foto")),class:"button-link cursor-pointer select-none flex align-items-center justify-content-center"},"Fotograf\xEDa"),t("div",{onClick:e[2]||(e[2]=o=>n("Casa")),class:"button-link cursor-pointer select-none flex align-items-center justify-content-center"},"Casamientos"),t("div",{onClick:e[3]||(e[3]=o=>n("Bauti")),class:"button-link cursor-pointer select-none flex align-items-center justify-content-center"},"Bautizos"),t("div",{onClick:e[4]||(e[4]=o=>n("Marco")),class:"button-link cursor-pointer select-none flex align-items-center justify-content-center"},"Enmarcaciones"),t("div",{onClick:d,class:"button-link cursor-pointer select-none flex align-items-center justify-content-center"},"Cerrar Sesion")]),t("div",{onClick:y,class:"button-link py-1 cursor-pointer flex lg:hidden align-items-center justify-content-center"},[l(x,{icon:"fa-solid fa-bars"})])]),t("div",null,[r.value?(c(),u("div",q,[t("div",{onClick:e[5]||(e[5]=o=>n("Foto")),class:"button-link select-none cursor-pointer flex align-items-center justify-content-center"},"Fotograf\xEDa"),t("div",{onClick:e[6]||(e[6]=o=>n("Casa")),class:"button-link select-none cursor-pointer flex align-items-center justify-content-center"},"Casamientos"),t("div",{onClick:e[7]||(e[7]=o=>n("Bauti")),class:"button-link select-none cursor-pointer flex align-items-center justify-content-center"},"Bautizos"),t("div",{onClick:e[8]||(e[8]=o=>n("Marco")),class:"button-link select-none cursor-pointer flex align-items-center justify-content-center"},"Enmarcaciones"),t("div",{onClick:d,class:"button-link select-none cursor-pointer flex align-items-center justify-content-center"},"Cerrar Sesion")])):_("",!0),l(C)])])}}},W=v(D,[["__scopeId","data-v-c36a06e1"]]);export{W as default};
