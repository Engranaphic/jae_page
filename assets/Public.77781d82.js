import{a as V,d as k}from"./index.2025ce1d.js";import{u as O}from"./vue-router.fd8ca502.js";import{c as I,s as S}from"./@firebase.065648e6.js";import{_ as p}from"./_plugin-vue_export-helper.cdc0426e.js";import{a as i,b as D,e as u,j as m,k as e,l as f,q as j,t as E,v as L,x as N,y as X,z as w,A as C,B as h,o as B,w as G,F as A,C as K,D as Q,m as Y,f as T}from"./@vue.9e671e56.js";import{e as Z}from"./emailjs-com.17848d4c.js";import"./firebase.127c8ce3.js";/* empty css                  */import"./@fortawesome.32fda8e3.js";import"./tslib.9ddfe73c.js";import"./idb.94e4f64e.js";const ee={id:"navbar",class:"fixed shadow-5 flex align-content-center"},te={__name:"NavBar",emits:["navigation"],setup(t,{emit:c}){const n=i(!1),a=()=>{n.value=!n.value};return(o,s)=>{const y=D("font-awesome-icon");return u(),m("div",ee,[e("div",{onClick:s[0]||(s[0]=r=>o.$emit("navigation","home")),class:"button-link cursor-pointer hidden lg:flex align-items-center justify-content-center"},"Fotografia"),e("div",{onClick:s[1]||(s[1]=r=>o.$emit("navigation","about")),class:"button-link cursor-pointer hidden lg:flex align-items-center justify-content-center"},"Casamiento"),e("div",{onClick:s[2]||(s[2]=r=>o.$emit("navigation","clients")),class:"button-link cursor-pointer hidden lg:flex align-items-center justify-content-center"},"Bautizos"),e("div",{onClick:s[3]||(s[3]=r=>o.$emit("navigation","contact")),class:"button-link cursor-pointer hidden lg:flex align-items-center justify-content-center"},"Enmarcaciones"),e("div",{onClick:a,class:"button-link lg:hidden cursor-pointer flex align-items-center justify-content-center"},[f(y,{icon:"fa-solid fa-bars"})]),n.value?(u(),m("div",{key:0,onClick:a,class:"px-5"},[e("div",{onClick:s[4]||(s[4]=r=>o.$emit("navigation","home")),class:"button-link cursor-pointer flex align-items-center justify-content-center"},"Fotografia"),e("div",{onClick:s[5]||(s[5]=r=>o.$emit("navigation","about")),class:"button-link cursor-pointer flex align-items-center justify-content-center"},"Casamiento"),e("div",{onClick:s[6]||(s[6]=r=>o.$emit("navigation","clients")),class:"button-link cursor-pointer flex align-items-center justify-content-center"},"Bautizos"),e("div",{onClick:s[7]||(s[7]=r=>o.$emit("navigation","contact")),class:"button-link cursor-pointer flex align-items-center justify-content-center"},"Enmarcaciones")])):j("",!0)])}}},ne=p(te,[["__scopeId","data-v-2e9e26a2"]]),se="/jae_page/assets/logo.83e01a45.svg";const ie={class:"z-5 logo-2 cursor-pointer",src:se,alt:"Logo"},ae={__name:"Logo",setup(t){return(c,n)=>(u(),m("img",ie))}},oe=p(ae,[["__scopeId","data-v-b51e359c"]]);const x=t=>(w("data-v-0062b98b"),t=t(),C(),t),le={id:"formulario"},ce=["onSubmit"],re=x(()=>e("div",{class:"title flex"}," Contacto ",-1)),de=x(()=>e("div",{class:"form-text"},[h(" Escribenos tu informaci\xF3n de contacto y "),e("br"),h("responderemos a la brevedad. ")],-1)),ue={class:"field"},me=x(()=>e("label",{for:"name"},"Nombre",-1)),_e={class:"field"},ve=x(()=>e("label",{for:"email"},"Correo",-1)),fe={class:"field"},pe=x(()=>e("label",{for:"phone"},"Tel\xE9fono",-1)),ge={class:"select-none",style:{color:"red","margin-bottom":"2%"}},he=x(()=>e("div",{class:"flex justify-content-end"},[e("input",{class:"boton-mail select-none cursor-pointer",type:"submit",value:"Enviar correo"})],-1)),be={__name:"Formulario",emits:["email"],setup(t,{emit:c}){const n=i(""),a=i(""),o=i("");i("");const s=i(""),y=r=>{let v=/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;if(!a.value.match(v)){s.value="Ingrese un correo valido, por favor";return}if(!o.value.match(/^[0-9]*$/)){s.value="Ingrese un numero de telefono, por favor";return}try{Z.sendForm("service_mw0hz5p","template_hfjklau",r.target,"x1wwRWXVFLCH2mrJI"),console.log("enviado")}catch($){console.log({error:$})}s.value="",n.value="",a.value="",o.value=""};return(r,v)=>{const $=D("font-awesome-icon");return u(),m("div",le,[e("form",{class:"formulario shadow-5",onSubmit:X(y,["prevent"])},[e("div",{class:"boton-close select-none cursor-pointer",onClick:v[0]||(v[0]=g=>r.$emit("email"))},[f($,{icon:"fa-solid fa-xmark"})]),re,de,e("div",ue,[me,E(e("input",{id:"name",placeholder:"Nombre",class:"outline-none",name:"name",type:"text","onUpdate:modelValue":v[1]||(v[1]=g=>n.value=g),required:"true",autofocus:""},null,512),[[L,n.value,void 0,{trim:!0}]])]),e("div",_e,[ve,E(e("input",{id:"email",placeholder:"Correo",class:"outline-none",name:"email",type:"text","onUpdate:modelValue":v[2]||(v[2]=g=>a.value=g),required:"true",autofocus:""},null,512),[[L,a.value,void 0,{trim:!0}]])]),e("div",fe,[pe,E(e("input",{id:"phone",placeholder:"Tel\xE9fono",class:"outline-none",name:"phone",type:"text","onUpdate:modelValue":v[3]||(v[3]=g=>o.value=g),required:"true",autofocus:""},null,512),[[L,o.value,void 0,{trim:!0}]])]),e("h1",ge,N(s.value),1),he],40,ce)])}}},ye=p(be,[["__scopeId","data-v-0062b98b"]]);const $e={class:"flex justify-content-center"},xe=["src"],we={__name:"ImageView",props:["image"],emits:["close"],setup(t,{emit:c}){const n=t;return(a,o)=>(u(),m("div",{id:"viewer",onClick:o[0]||(o[0]=s=>a.$emit("close"))},[e("div",$e,[e("img",{class:"foto",src:n.image},null,8,xe)])]))}},Ce=p(we,[["__scopeId","data-v-420199e7"]]);const ke=t=>(w("data-v-7e92f14f"),t=t(),C(),t),Ie={id:"home"},Se=ke(()=>e("div",{class:"gradient"},[e("div",{class:"main-text flex align-items-center justify-content-center"},[h("Productora de material fotogr\xE1fico y audiovisual"),e("br"),h("de eventos de todo tipo y merchandising")])],-1)),je=[Se],qe={__name:"Home",setup(t){return(c,n)=>(u(),m("div",Ie,je))}},Ee=p(qe,[["__scopeId","data-v-7e92f14f"]]);const Le={class:"container-slider"},Ne=["id"],Be=["src","alt"],ze={__name:"CarouselImg",props:["images","valorid","sliderclass"],setup(t){const c=t,n=i(),a=i();B(()=>{a.value=setInterval(o,2e3),n.value=document.getElementById(c.valorid),n.value.style.display="flex",n.value.style.marginLeft="-0%"}),G(()=>c.images,()=>{c.images&&(n.value.style.width=""+c.images.length+"00%")});const o=()=>{let s=document.querySelectorAll("."+c.sliderclass)[0];if(!s){clearInterval(a.value);return}n.value.style.marginLeft="-100%",n.value.style.transition="all 1s ease",setTimeout(function(){n.value.style.transition="none",n.value.insertAdjacentElement("beforeend",s),n.value.style.marginLeft="-0%"},1e3)};return(s,y)=>(u(),m("div",Le,[e("div",{id:c.valorid},[(u(!0),m(A,null,K(t.images,r=>(u(),m("div",{key:r.id,class:Q(c.sliderclass),style:{width:"100%"}},[e("img",{src:r.url,alt:r.name,class:"slider_img"},null,8,Be)],2))),128))],8,Ne)]))}},H=p(ze,[["__scopeId","data-v-ebadd8f4"]]);const Fe=t=>(w("data-v-8282ca3c"),t=t(),C(),t),Re={id:"left",class:"grid"},Ve={class:"about-title col-12"},Te=Fe(()=>e("div",{class:"col-12 lg:col-3 flex justify-content-center"},[e("div",{class:"text-contenido"},[e("div",{class:"text-info"},"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. In nisl nisi scelerisque eu ultrices vitae auctor. Non consectetur a erat nam. Ultrices gravida dictum fusce ut placerat orci nulla pellentesque dignissim. Sed faucibus turpis in eu mi bibendum neque egestas. Scelerisque fermentum dui faucibus in ornare quam. Tortor aliquam nulla facilisi cras. Nunc sed id semper risus in hendrerit gravida rutrum. Placerat in egestas erat imperdiet sed euismod nisi porta. Elementum integer enim neque volutpat ac tincidunt vitae. Diam maecenas ultricies mi eget mauris pharetra et ultrices neque.")])],-1)),Pe={class:"col-12 lg:col-9 flex justify-content-center"},We={class:"img-contenido"},De={__name:"LeftService",props:["title","content","name","classname"],setup(t){return i(!1),i(!1),i(!1),i(!1),(c,n)=>(u(),m("div",Re,[e("div",Ve,N(t.title),1),Te,e("div",Pe,[e("div",We,[f(H,{images:t.content,valorid:t.name,sliderclass:t.classname},null,8,["images","valorid","sliderclass"])])])]))}},P=p(De,[["__scopeId","data-v-8282ca3c"]]);const Ae=t=>(w("data-v-27495208"),t=t(),C(),t),He={id:"right",class:"grid"},Ue={class:"about-title col-12"},Me={class:"col-12 lg:col-9 flex justify-content-center"},Je={class:"img-contenido"},Oe=Ae(()=>e("div",{class:"col-12 lg:col-3 flex justify-content-center"},[e("div",{class:"text-contenido"},[e("div",{class:"text-info"},"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. In nisl nisi scelerisque eu ultrices vitae auctor. Non consectetur a erat nam. Ultrices gravida dictum fusce ut placerat orci nulla pellentesque dignissim. Sed faucibus turpis in eu mi bibendum neque egestas. Scelerisque fermentum dui faucibus in ornare quam. Tortor aliquam nulla facilisi cras. Nunc sed id semper risus in hendrerit gravida rutrum. Placerat in egestas erat imperdiet sed euismod nisi porta. Elementum integer enim neque volutpat ac tincidunt vitae. Diam maecenas ultricies mi eget mauris pharetra et ultrices neque.")])],-1)),Xe={__name:"RightService",props:["title","content","name","classname"],setup(t){return i(!1),i(!1),i(!1),i(!1),(c,n)=>(u(),m("div",He,[e("div",Ue,N(t.title),1),e("div",Me,[e("div",Je,[f(H,{images:t.content,valorid:t.name,sliderclass:t.classname},null,8,["images","valorid","sliderclass"])])]),Oe]))}},W=p(Xe,[["__scopeId","data-v-27495208"]]);const Ge={id:"clients"},Ke=Y('<div class="bg-clients" data-v-f6347943></div><div class="gradient" data-v-f6347943></div><div style="padding:100px 3%;" data-v-f6347943><div class="title-text arriba" data-v-f6347943>Redes Sociales</div><div class="instagram flex flex-wrap my-3 justify-content-center" data-v-f6347943></div></div>',3),Qe=[Ke],Ye={__name:"RRSS",props:["position","client_pos"],emits:["image-pop"],setup(t,{emit:c}){const n=i(window.innerWidth),a=i(!1);return i(0),i(0),B(()=>{window.innerWidth<=990?a.value=!0:window.innerWidth>990&&(a.value=!1),window.onresize=()=>{n.value=window.innerWidth,window.innerWidth<=990&&!a.value?a.value=!0:window.innerWidth>990&&a.value&&(a.value=!1)}}),(o,s)=>(u(),m("div",Ge,Qe))}},Ze=p(Ye,[["__scopeId","data-v-f6347943"]]);const q=t=>(w("data-v-b4f35bb9"),t=t(),C(),t),et={id:"contact"},tt=q(()=>e("div",{class:"bg-contact"},null,-1)),nt=q(()=>e("div",{class:"bg-color"},null,-1)),st=q(()=>e("div",{class:"bg-texture"},null,-1)),it={class:"flex justify-content-end",style:{padding:"80px 8%"}},at=q(()=>e("div",{class:"info"},[h(" Direcci\xF3n: "),e("span",null,"Calle de Prueba, Lautaro, Chile"),h(),e("br"),h(" Tel\xE9fono: "),e("span",null,"+56 9 8302 7111"),h(" Email: "),e("span",null,"juanespinoza.1607@gmail.com")],-1)),ot={__name:"Contact",props:["position","contact_pos"],emits:["form-pop"],setup(t,{emit:c}){return(n,a)=>(u(),m("div",et,[tt,nt,st,e("div",it,[e("div",null,[at,e("div",{onClick:a[0]||(a[0]=o=>n.$emit("form-pop")),class:"contact-button cursor-pointer"},"Haz tu cotizaci\xF3n aqu\xED")])])]))}},lt=p(ot,[["__scopeId","data-v-b4f35bb9"]]);const ct={key:0,class:"admin-nav fixed flex justify-content-start align-content-center"},rt={__name:"Public",setup(t){const c=i(!1),n=i(0),a=i(!1),o=i(!1),s=i(),y=O(),r=i(),v=i(),$=i(),g=i();B(()=>{window.addEventListener("scroll",J),V.onAuthStateChanged(function(d){d?c.value=!0:c.value=!1}),I(S(k,"fotografia"),d=>{let _=[];d.forEach(l=>{let b={id:l.id,name:l.data().name,url:l.data().url,created:l.data().created};_.push(b)}),r.value=_}),I(S(k,"casamiento"),d=>{let _=[];d.forEach(l=>{let b={id:l.id,name:l.data().name,url:l.data().url,created:l.data().created};_.push(b)}),v.value=_}),I(S(k,"bautizo"),d=>{let _=[];d.forEach(l=>{let b={id:l.id,name:l.data().name,url:l.data().url,created:l.data().created};_.push(b)}),$.value=_}),I(S(k,"enmarcacion"),d=>{let _=[];d.forEach(l=>{let b={id:l.id,name:l.data().name,url:l.data().url,created:l.data().created};_.push(b)}),g.value=_})});const U=()=>{y.push({name:"admin"})},M=()=>{V.signOut(),c.value=!1},z=d=>{let l=document.getElementById(d).offsetTop;window.scrollTo(0,l)},J=d=>{let l=d.srcElement.scrollingElement.scrollTop;n.value=l},F=()=>{a.value=!a.value},R=d=>{d&&(s.value=d),o.value=!o.value};return(d,_)=>(u(),m(A,null,[c.value?(u(),m("div",ct,[e("div",{class:"flex"},[e("div",{onClick:U,class:"button-link cursor-pointer flex align-items-center justify-content-center"},"Panel de Admin"),e("div",{onClick:M,class:"button-link cursor-pointer flex align-items-center justify-content-center"},"Cerrar Sesion")])])):j("",!0),f(ne,{onNavigation:z}),f(oe,{onNavigation:z,position:n.value},null,8,["position"]),a.value?(u(),T(ye,{key:1,onEmail:F})):j("",!0),o.value?(u(),T(Ce,{key:2,image:s.value,onClose:R},null,8,["image"])):j("",!0),f(Ee),f(P,{title:"Fotograf\xEDa",content:r.value,name:"slider1",classname:"imageslider1"},null,8,["content"]),f(W,{title:"Casamiento",content:v.value,name:"slider2",classname:"imageslider2"},null,8,["content"]),f(P,{title:"Bautizos",content:$.value,name:"slider3",classname:"imageslider3"},null,8,["content"]),f(W,{title:"Enmarcaciones",content:g.value,name:"slider4",classname:"imageslider4"},null,8,["content"]),f(Ze,{onImagePop:R}),f(lt,{onFormPop:F})],64))}},$t=p(rt,[["__scopeId","data-v-6b8d3f22"]]);export{$t as default};
