import{o as r,c as u,t as b,z as j,u as $,e as a,r as f,b as l,A as w,T as B,a as t,f as _,m as S,x as I,p as z,h as T}from"./index.92118239.js";import{_ as v}from"./_plugin-vue_export-helper.cdc0426e.js";const A={__name:"Toast",props:["message","type"],setup(o){const i=o;return(c,d)=>(r(),u("div",{id:"toast",class:"shadow-5 flex align-items-center justify-content-center",style:j("background: "+i.type+";")},b(i.message),5))}},F=v(A,[["__scopeId","data-v-8e4e8980"]]);const V=o=>(z("data-v-c36a06e1"),o=o(),T(),o),h={id:"admin"},E=V(()=>t("div",{class:"back-img"},null,-1)),N={id:"navbar",class:"z-5 shadow-5 flex justify-content-between"},M={class:"hidden lg:flex justify-content-center"},D={key:0,id:"side_menu"},O={__name:"Admin",setup(o){const i=$(),c=a(!1),d=a(""),g=a(""),k=a(!1),y=()=>{c.value=!c.value},m=()=>{S.signOut(),i.push({name:"home"})},n=p=>{i.push({name:p})};return(p,e)=>{const x=f("font-awesome-icon"),C=f("router-view");return r(),u("div",h,[l(B,{name:"fade"},{default:w(()=>[k.value?(r(),I(F,{key:0,message:d.value,type:g.value},null,8,["message","type"])):_("",!0)]),_:1}),E,t("div",N,[t("div",{onClick:e[0]||(e[0]=s=>n("home")),class:"button-link logo cursor-pointer select-none flex align-items-center justify-content-center"},"Volver a Inicio"),t("div",M,[t("div",{onClick:e[1]||(e[1]=s=>n("Foto")),class:"button-link cursor-pointer select-none flex align-items-center justify-content-center"},"Fotograf\xEDa"),t("div",{onClick:e[2]||(e[2]=s=>n("Casa")),class:"button-link cursor-pointer select-none flex align-items-center justify-content-center"},"Casamientos"),t("div",{onClick:e[3]||(e[3]=s=>n("Bauti")),class:"button-link cursor-pointer select-none flex align-items-center justify-content-center"},"Bautizos"),t("div",{onClick:e[4]||(e[4]=s=>n("Marco")),class:"button-link cursor-pointer select-none flex align-items-center justify-content-center"},"Enmarcaciones"),t("div",{onClick:m,class:"button-link cursor-pointer select-none flex align-items-center justify-content-center"},"Cerrar Sesion")]),t("div",{onClick:y,class:"button-link py-1 cursor-pointer flex lg:hidden align-items-center justify-content-center"},[l(x,{icon:"fa-solid fa-bars"})])]),t("div",null,[c.value?(r(),u("div",D,[t("div",{onClick:e[5]||(e[5]=s=>n("Foto")),class:"button-link select-none cursor-pointer flex align-items-center justify-content-center"},"Fotograf\xEDa"),t("div",{onClick:e[6]||(e[6]=s=>n("Casa")),class:"button-link select-none cursor-pointer flex align-items-center justify-content-center"},"Casamientos"),t("div",{onClick:e[7]||(e[7]=s=>n("Bauti")),class:"button-link select-none cursor-pointer flex align-items-center justify-content-center"},"Bautizos"),t("div",{onClick:e[8]||(e[8]=s=>n("Marco")),class:"button-link select-none cursor-pointer flex align-items-center justify-content-center"},"Enmarcaciones"),t("div",{onClick:m,class:"button-link select-none cursor-pointer flex align-items-center justify-content-center"},"Cerrar Sesion")])):_("",!0),l(C)])])}}},G=v(O,[["__scopeId","data-v-c36a06e1"]]);export{G as default};
