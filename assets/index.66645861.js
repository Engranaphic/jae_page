(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const i of document.querySelectorAll('link[rel="modulepreload"]'))r(i);new MutationObserver(i=>{for(const s of i)if(s.type==="childList")for(const o of s.addedNodes)o.tagName==="LINK"&&o.rel==="modulepreload"&&r(o)}).observe(document,{childList:!0,subtree:!0});function n(i){const s={};return i.integrity&&(s.integrity=i.integrity),i.referrerpolicy&&(s.referrerPolicy=i.referrerpolicy),i.crossorigin==="use-credentials"?s.credentials="include":i.crossorigin==="anonymous"?s.credentials="omit":s.credentials="same-origin",s}function r(i){if(i.ep)return;i.ep=!0;const s=n(i);fetch(i.href,s)}})();function Yf(t,e){const n=Object.create(null),r=t.split(",");for(let i=0;i<r.length;i++)n[r[i]]=!0;return e?i=>!!n[i.toLowerCase()]:i=>!!n[i]}function Qf(t){if(re(t)){const e={};for(let n=0;n<t.length;n++){const r=t[n],i=rt(r)?tS(r):Qf(r);if(i)for(const s in i)e[s]=i[s]}return e}else{if(rt(t))return t;if(Oe(t))return t}}const J1=/;(?![^(]*\))/g,Z1=/:([^]+)/,eS=/\/\*.*?\*\//gs;function tS(t){const e={};return t.replace(eS,"").split(J1).forEach(n=>{if(n){const r=n.split(Z1);r.length>1&&(e[r[0].trim()]=r[1].trim())}}),e}function Xf(t){let e="";if(rt(t))e=t;else if(re(t))for(let n=0;n<t.length;n++){const r=Xf(t[n]);r&&(e+=r+" ")}else if(Oe(t))for(const n in t)t[n]&&(e+=n+" ");return e.trim()}const nS="itemscope,allowfullscreen,formnovalidate,ismap,nomodule,novalidate,readonly",rS=Yf(nS);function c_(t){return!!t||t===""}const c3=t=>rt(t)?t:t==null?"":re(t)||Oe(t)&&(t.toString===d_||!ue(t.toString))?JSON.stringify(t,u_,2):String(t),u_=(t,e)=>e&&e.__v_isRef?u_(t,e.value):Ps(e)?{[`Map(${e.size})`]:[...e.entries()].reduce((n,[r,i])=>(n[`${r} =>`]=i,n),{})}:l_(e)?{[`Set(${e.size})`]:[...e.values()]}:Oe(e)&&!re(e)&&!f_(e)?String(e):e,Re={},Ns=[],wn=()=>{},iS=()=>!1,sS=/^on[^a-z]/,vl=t=>sS.test(t),Jf=t=>t.startsWith("onUpdate:"),_t=Object.assign,Zf=(t,e)=>{const n=t.indexOf(e);n>-1&&t.splice(n,1)},oS=Object.prototype.hasOwnProperty,ye=(t,e)=>oS.call(t,e),re=Array.isArray,Ps=t=>wl(t)==="[object Map]",l_=t=>wl(t)==="[object Set]",ue=t=>typeof t=="function",rt=t=>typeof t=="string",ep=t=>typeof t=="symbol",Oe=t=>t!==null&&typeof t=="object",h_=t=>Oe(t)&&ue(t.then)&&ue(t.catch),d_=Object.prototype.toString,wl=t=>d_.call(t),aS=t=>wl(t).slice(8,-1),f_=t=>wl(t)==="[object Object]",tp=t=>rt(t)&&t!=="NaN"&&t[0]!=="-"&&""+parseInt(t,10)===t,fu=Yf(",key,ref,ref_for,ref_key,onVnodeBeforeMount,onVnodeMounted,onVnodeBeforeUpdate,onVnodeUpdated,onVnodeBeforeUnmount,onVnodeUnmounted"),_l=t=>{const e=Object.create(null);return n=>e[n]||(e[n]=t(n))},cS=/-(\w)/g,jn=_l(t=>t.replace(cS,(e,n)=>n?n.toUpperCase():"")),uS=/\B([A-Z])/g,lo=_l(t=>t.replace(uS,"-$1").toLowerCase()),bl=_l(t=>t.charAt(0).toUpperCase()+t.slice(1)),Lh=_l(t=>t?`on${bl(t)}`:""),wa=(t,e)=>!Object.is(t,e),pu=(t,e)=>{for(let n=0;n<t.length;n++)t[n](e)},Pu=(t,e,n)=>{Object.defineProperty(t,e,{configurable:!0,enumerable:!1,value:n})},Td=t=>{const e=parseFloat(t);return isNaN(e)?t:e},lS=t=>{const e=rt(t)?Number(t):NaN;return isNaN(e)?t:e};let Pg;const hS=()=>Pg||(Pg=typeof globalThis<"u"?globalThis:typeof self<"u"?self:typeof window<"u"?window:typeof global<"u"?global:{});let fn;class dS{constructor(e=!1){this.detached=e,this._active=!0,this.effects=[],this.cleanups=[],this.parent=fn,!e&&fn&&(this.index=(fn.scopes||(fn.scopes=[])).push(this)-1)}get active(){return this._active}run(e){if(this._active){const n=fn;try{return fn=this,e()}finally{fn=n}}}on(){fn=this}off(){fn=this.parent}stop(e){if(this._active){let n,r;for(n=0,r=this.effects.length;n<r;n++)this.effects[n].stop();for(n=0,r=this.cleanups.length;n<r;n++)this.cleanups[n]();if(this.scopes)for(n=0,r=this.scopes.length;n<r;n++)this.scopes[n].stop(!0);if(!this.detached&&this.parent&&!e){const i=this.parent.scopes.pop();i&&i!==this&&(this.parent.scopes[this.index]=i,i.index=this.index)}this.parent=void 0,this._active=!1}}}function fS(t,e=fn){e&&e.active&&e.effects.push(t)}function pS(){return fn}const np=t=>{const e=new Set(t);return e.w=0,e.n=0,e},p_=t=>(t.w&$r)>0,m_=t=>(t.n&$r)>0,mS=({deps:t})=>{if(t.length)for(let e=0;e<t.length;e++)t[e].w|=$r},gS=t=>{const{deps:e}=t;if(e.length){let n=0;for(let r=0;r<e.length;r++){const i=e[r];p_(i)&&!m_(i)?i.delete(t):e[n++]=i,i.w&=~$r,i.n&=~$r}e.length=n}},Sd=new WeakMap;let Ko=0,$r=1;const kd=30;let pn;const Mi=Symbol(""),Ad=Symbol("");class rp{constructor(e,n=null,r){this.fn=e,this.scheduler=n,this.active=!0,this.deps=[],this.parent=void 0,fS(this,r)}run(){if(!this.active)return this.fn();let e=pn,n=Fr;for(;e;){if(e===this)return;e=e.parent}try{return this.parent=pn,pn=this,Fr=!0,$r=1<<++Ko,Ko<=kd?mS(this):Dg(this),this.fn()}finally{Ko<=kd&&gS(this),$r=1<<--Ko,pn=this.parent,Fr=n,this.parent=void 0,this.deferStop&&this.stop()}}stop(){pn===this?this.deferStop=!0:this.active&&(Dg(this),this.onStop&&this.onStop(),this.active=!1)}}function Dg(t){const{deps:e}=t;if(e.length){for(let n=0;n<e.length;n++)e[n].delete(t);e.length=0}}let Fr=!0;const g_=[];function ho(){g_.push(Fr),Fr=!1}function fo(){const t=g_.pop();Fr=t===void 0?!0:t}function Wt(t,e,n){if(Fr&&pn){let r=Sd.get(t);r||Sd.set(t,r=new Map);let i=r.get(n);i||r.set(n,i=np()),y_(i)}}function y_(t,e){let n=!1;Ko<=kd?m_(t)||(t.n|=$r,n=!p_(t)):n=!t.has(pn),n&&(t.add(pn),pn.deps.push(t))}function nr(t,e,n,r,i,s){const o=Sd.get(t);if(!o)return;let a=[];if(e==="clear")a=[...o.values()];else if(n==="length"&&re(t)){const c=Number(r);o.forEach((u,l)=>{(l==="length"||l>=c)&&a.push(u)})}else switch(n!==void 0&&a.push(o.get(n)),e){case"add":re(t)?tp(n)&&a.push(o.get("length")):(a.push(o.get(Mi)),Ps(t)&&a.push(o.get(Ad)));break;case"delete":re(t)||(a.push(o.get(Mi)),Ps(t)&&a.push(o.get(Ad)));break;case"set":Ps(t)&&a.push(o.get(Mi));break}if(a.length===1)a[0]&&Cd(a[0]);else{const c=[];for(const u of a)u&&c.push(...u);Cd(np(c))}}function Cd(t,e){const n=re(t)?t:[...t];for(const r of n)r.computed&&Og(r);for(const r of n)r.computed||Og(r)}function Og(t,e){(t!==pn||t.allowRecurse)&&(t.scheduler?t.scheduler():t.run())}const yS=Yf("__proto__,__v_isRef,__isVue"),v_=new Set(Object.getOwnPropertyNames(Symbol).filter(t=>t!=="arguments"&&t!=="caller").map(t=>Symbol[t]).filter(ep)),vS=ip(),wS=ip(!1,!0),_S=ip(!0),Lg=bS();function bS(){const t={};return["includes","indexOf","lastIndexOf"].forEach(e=>{t[e]=function(...n){const r=_e(this);for(let s=0,o=this.length;s<o;s++)Wt(r,"get",s+"");const i=r[e](...n);return i===-1||i===!1?r[e](...n.map(_e)):i}}),["push","pop","shift","unshift","splice"].forEach(e=>{t[e]=function(...n){ho();const r=_e(this)[e].apply(this,n);return fo(),r}}),t}function IS(t){const e=_e(this);return Wt(e,"has",t),e.hasOwnProperty(t)}function ip(t=!1,e=!1){return function(r,i,s){if(i==="__v_isReactive")return!t;if(i==="__v_isReadonly")return t;if(i==="__v_isShallow")return e;if(i==="__v_raw"&&s===(t?e?US:E_:e?I_:b_).get(r))return r;const o=re(r);if(!t){if(o&&ye(Lg,i))return Reflect.get(Lg,i,s);if(i==="hasOwnProperty")return IS}const a=Reflect.get(r,i,s);return(ep(i)?v_.has(i):yS(i))||(t||Wt(r,"get",i),e)?a:kt(a)?o&&tp(i)?a:a.value:Oe(a)?t?T_(a):rc(a):a}}const ES=w_(),TS=w_(!0);function w_(t=!1){return function(n,r,i,s){let o=n[r];if(zs(o)&&kt(o)&&!kt(i))return!1;if(!t&&(!Du(i)&&!zs(i)&&(o=_e(o),i=_e(i)),!re(n)&&kt(o)&&!kt(i)))return o.value=i,!0;const a=re(n)&&tp(r)?Number(r)<n.length:ye(n,r),c=Reflect.set(n,r,i,s);return n===_e(s)&&(a?wa(i,o)&&nr(n,"set",r,i):nr(n,"add",r,i)),c}}function SS(t,e){const n=ye(t,e);t[e];const r=Reflect.deleteProperty(t,e);return r&&n&&nr(t,"delete",e,void 0),r}function kS(t,e){const n=Reflect.has(t,e);return(!ep(e)||!v_.has(e))&&Wt(t,"has",e),n}function AS(t){return Wt(t,"iterate",re(t)?"length":Mi),Reflect.ownKeys(t)}const __={get:vS,set:ES,deleteProperty:SS,has:kS,ownKeys:AS},CS={get:_S,set(t,e){return!0},deleteProperty(t,e){return!0}},RS=_t({},__,{get:wS,set:TS}),sp=t=>t,Il=t=>Reflect.getPrototypeOf(t);function Fc(t,e,n=!1,r=!1){t=t.__v_raw;const i=_e(t),s=_e(e);n||(e!==s&&Wt(i,"get",e),Wt(i,"get",s));const{has:o}=Il(i),a=r?sp:n?cp:_a;if(o.call(i,e))return a(t.get(e));if(o.call(i,s))return a(t.get(s));t!==i&&t.get(e)}function Uc(t,e=!1){const n=this.__v_raw,r=_e(n),i=_e(t);return e||(t!==i&&Wt(r,"has",t),Wt(r,"has",i)),t===i?n.has(t):n.has(t)||n.has(i)}function Vc(t,e=!1){return t=t.__v_raw,!e&&Wt(_e(t),"iterate",Mi),Reflect.get(t,"size",t)}function Mg(t){t=_e(t);const e=_e(this);return Il(e).has.call(e,t)||(e.add(t),nr(e,"add",t,t)),this}function Fg(t,e){e=_e(e);const n=_e(this),{has:r,get:i}=Il(n);let s=r.call(n,t);s||(t=_e(t),s=r.call(n,t));const o=i.call(n,t);return n.set(t,e),s?wa(e,o)&&nr(n,"set",t,e):nr(n,"add",t,e),this}function Ug(t){const e=_e(this),{has:n,get:r}=Il(e);let i=n.call(e,t);i||(t=_e(t),i=n.call(e,t)),r&&r.call(e,t);const s=e.delete(t);return i&&nr(e,"delete",t,void 0),s}function Vg(){const t=_e(this),e=t.size!==0,n=t.clear();return e&&nr(t,"clear",void 0,void 0),n}function Bc(t,e){return function(r,i){const s=this,o=s.__v_raw,a=_e(o),c=e?sp:t?cp:_a;return!t&&Wt(a,"iterate",Mi),o.forEach((u,l)=>r.call(i,c(u),c(l),s))}}function $c(t,e,n){return function(...r){const i=this.__v_raw,s=_e(i),o=Ps(s),a=t==="entries"||t===Symbol.iterator&&o,c=t==="keys"&&o,u=i[t](...r),l=n?sp:e?cp:_a;return!e&&Wt(s,"iterate",c?Ad:Mi),{next(){const{value:h,done:d}=u.next();return d?{value:h,done:d}:{value:a?[l(h[0]),l(h[1])]:l(h),done:d}},[Symbol.iterator](){return this}}}}function br(t){return function(...e){return t==="delete"?!1:this}}function xS(){const t={get(s){return Fc(this,s)},get size(){return Vc(this)},has:Uc,add:Mg,set:Fg,delete:Ug,clear:Vg,forEach:Bc(!1,!1)},e={get(s){return Fc(this,s,!1,!0)},get size(){return Vc(this)},has:Uc,add:Mg,set:Fg,delete:Ug,clear:Vg,forEach:Bc(!1,!0)},n={get(s){return Fc(this,s,!0)},get size(){return Vc(this,!0)},has(s){return Uc.call(this,s,!0)},add:br("add"),set:br("set"),delete:br("delete"),clear:br("clear"),forEach:Bc(!0,!1)},r={get(s){return Fc(this,s,!0,!0)},get size(){return Vc(this,!0)},has(s){return Uc.call(this,s,!0)},add:br("add"),set:br("set"),delete:br("delete"),clear:br("clear"),forEach:Bc(!0,!0)};return["keys","values","entries",Symbol.iterator].forEach(s=>{t[s]=$c(s,!1,!1),n[s]=$c(s,!0,!1),e[s]=$c(s,!1,!0),r[s]=$c(s,!0,!0)}),[t,n,e,r]}const[NS,PS,DS,OS]=xS();function op(t,e){const n=e?t?OS:DS:t?PS:NS;return(r,i,s)=>i==="__v_isReactive"?!t:i==="__v_isReadonly"?t:i==="__v_raw"?r:Reflect.get(ye(n,i)&&i in r?n:r,i,s)}const LS={get:op(!1,!1)},MS={get:op(!1,!0)},FS={get:op(!0,!1)},b_=new WeakMap,I_=new WeakMap,E_=new WeakMap,US=new WeakMap;function VS(t){switch(t){case"Object":case"Array":return 1;case"Map":case"Set":case"WeakMap":case"WeakSet":return 2;default:return 0}}function BS(t){return t.__v_skip||!Object.isExtensible(t)?0:VS(aS(t))}function rc(t){return zs(t)?t:ap(t,!1,__,LS,b_)}function $S(t){return ap(t,!1,RS,MS,I_)}function T_(t){return ap(t,!0,CS,FS,E_)}function ap(t,e,n,r,i){if(!Oe(t)||t.__v_raw&&!(e&&t.__v_isReactive))return t;const s=i.get(t);if(s)return s;const o=BS(t);if(o===0)return t;const a=new Proxy(t,o===2?r:n);return i.set(t,a),a}function Ds(t){return zs(t)?Ds(t.__v_raw):!!(t&&t.__v_isReactive)}function zs(t){return!!(t&&t.__v_isReadonly)}function Du(t){return!!(t&&t.__v_isShallow)}function S_(t){return Ds(t)||zs(t)}function _e(t){const e=t&&t.__v_raw;return e?_e(e):t}function k_(t){return Pu(t,"__v_skip",!0),t}const _a=t=>Oe(t)?rc(t):t,cp=t=>Oe(t)?T_(t):t;function A_(t){Fr&&pn&&(t=_e(t),y_(t.dep||(t.dep=np())))}function C_(t,e){t=_e(t);const n=t.dep;n&&Cd(n)}function kt(t){return!!(t&&t.__v_isRef===!0)}function qS(t){return R_(t,!1)}function jS(t){return R_(t,!0)}function R_(t,e){return kt(t)?t:new zS(t,e)}class zS{constructor(e,n){this.__v_isShallow=n,this.dep=void 0,this.__v_isRef=!0,this._rawValue=n?e:_e(e),this._value=n?e:_a(e)}get value(){return A_(this),this._value}set value(e){const n=this.__v_isShallow||Du(e)||zs(e);e=n?e:_e(e),wa(e,this._rawValue)&&(this._rawValue=e,this._value=n?e:_a(e),C_(this))}}function Os(t){return kt(t)?t.value:t}const HS={get:(t,e,n)=>Os(Reflect.get(t,e,n)),set:(t,e,n,r)=>{const i=t[e];return kt(i)&&!kt(n)?(i.value=n,!0):Reflect.set(t,e,n,r)}};function x_(t){return Ds(t)?t:new Proxy(t,HS)}var N_;class KS{constructor(e,n,r,i){this._setter=n,this.dep=void 0,this.__v_isRef=!0,this[N_]=!1,this._dirty=!0,this.effect=new rp(e,()=>{this._dirty||(this._dirty=!0,C_(this))}),this.effect.computed=this,this.effect.active=this._cacheable=!i,this.__v_isReadonly=r}get value(){const e=_e(this);return A_(e),(e._dirty||!e._cacheable)&&(e._dirty=!1,e._value=e.effect.run()),e._value}set value(e){this._setter(e)}}N_="__v_isReadonly";function WS(t,e,n=!1){let r,i;const s=ue(t);return s?(r=t,i=wn):(r=t.get,i=t.set),new KS(r,i,s||!i,n)}function Ur(t,e,n,r){let i;try{i=r?t(...r):t()}catch(s){El(s,e,n)}return i}function on(t,e,n,r){if(ue(t)){const s=Ur(t,e,n,r);return s&&h_(s)&&s.catch(o=>{El(o,e,n)}),s}const i=[];for(let s=0;s<t.length;s++)i.push(on(t[s],e,n,r));return i}function El(t,e,n,r=!0){const i=e?e.vnode:null;if(e){let s=e.parent;const o=e.proxy,a=n;for(;s;){const u=s.ec;if(u){for(let l=0;l<u.length;l++)if(u[l](t,o,a)===!1)return}s=s.parent}const c=e.appContext.config.errorHandler;if(c){Ur(c,null,10,[t,o,a]);return}}GS(t,n,i,r)}function GS(t,e,n,r=!0){console.error(t)}let ba=!1,Rd=!1;const St=[];let Cn=0;const Ls=[];let Gn=null,_i=0;const P_=Promise.resolve();let up=null;function D_(t){const e=up||P_;return t?e.then(this?t.bind(this):t):e}function YS(t){let e=Cn+1,n=St.length;for(;e<n;){const r=e+n>>>1;Ia(St[r])<t?e=r+1:n=r}return e}function lp(t){(!St.length||!St.includes(t,ba&&t.allowRecurse?Cn+1:Cn))&&(t.id==null?St.push(t):St.splice(YS(t.id),0,t),O_())}function O_(){!ba&&!Rd&&(Rd=!0,up=P_.then(M_))}function QS(t){const e=St.indexOf(t);e>Cn&&St.splice(e,1)}function XS(t){re(t)?Ls.push(...t):(!Gn||!Gn.includes(t,t.allowRecurse?_i+1:_i))&&Ls.push(t),O_()}function Bg(t,e=ba?Cn+1:0){for(;e<St.length;e++){const n=St[e];n&&n.pre&&(St.splice(e,1),e--,n())}}function L_(t){if(Ls.length){const e=[...new Set(Ls)];if(Ls.length=0,Gn){Gn.push(...e);return}for(Gn=e,Gn.sort((n,r)=>Ia(n)-Ia(r)),_i=0;_i<Gn.length;_i++)Gn[_i]();Gn=null,_i=0}}const Ia=t=>t.id==null?1/0:t.id,JS=(t,e)=>{const n=Ia(t)-Ia(e);if(n===0){if(t.pre&&!e.pre)return-1;if(e.pre&&!t.pre)return 1}return n};function M_(t){Rd=!1,ba=!0,St.sort(JS);const e=wn;try{for(Cn=0;Cn<St.length;Cn++){const n=St[Cn];n&&n.active!==!1&&Ur(n,null,14)}}finally{Cn=0,St.length=0,L_(),ba=!1,up=null,(St.length||Ls.length)&&M_()}}function ZS(t,e,...n){if(t.isUnmounted)return;const r=t.vnode.props||Re;let i=n;const s=e.startsWith("update:"),o=s&&e.slice(7);if(o&&o in r){const l=`${o==="modelValue"?"model":o}Modifiers`,{number:h,trim:d}=r[l]||Re;d&&(i=n.map(f=>rt(f)?f.trim():f)),h&&(i=n.map(Td))}let a,c=r[a=Lh(e)]||r[a=Lh(jn(e))];!c&&s&&(c=r[a=Lh(lo(e))]),c&&on(c,t,6,i);const u=r[a+"Once"];if(u){if(!t.emitted)t.emitted={};else if(t.emitted[a])return;t.emitted[a]=!0,on(u,t,6,i)}}function F_(t,e,n=!1){const r=e.emitsCache,i=r.get(t);if(i!==void 0)return i;const s=t.emits;let o={},a=!1;if(!ue(t)){const c=u=>{const l=F_(u,e,!0);l&&(a=!0,_t(o,l))};!n&&e.mixins.length&&e.mixins.forEach(c),t.extends&&c(t.extends),t.mixins&&t.mixins.forEach(c)}return!s&&!a?(Oe(t)&&r.set(t,null),null):(re(s)?s.forEach(c=>o[c]=null):_t(o,s),Oe(t)&&r.set(t,o),o)}function Tl(t,e){return!t||!vl(e)?!1:(e=e.slice(2).replace(/Once$/,""),ye(t,e[0].toLowerCase()+e.slice(1))||ye(t,lo(e))||ye(t,e))}let Xt=null,Sl=null;function Ou(t){const e=Xt;return Xt=t,Sl=t&&t.type.__scopeId||null,e}function u3(t){Sl=t}function l3(){Sl=null}function ek(t,e=Xt,n){if(!e||t._n)return t;const r=(...i)=>{r._d&&Qg(-1);const s=Ou(e);let o;try{o=t(...i)}finally{Ou(s),r._d&&Qg(1)}return o};return r._n=!0,r._c=!0,r._d=!0,r}function Mh(t){const{type:e,vnode:n,proxy:r,withProxy:i,props:s,propsOptions:[o],slots:a,attrs:c,emit:u,render:l,renderCache:h,data:d,setupState:f,ctx:g,inheritAttrs:y}=t;let E,v;const I=Ou(t);try{if(n.shapeFlag&4){const x=i||r;E=An(l.call(x,x,h,s,f,d,g)),v=c}else{const x=e;E=An(x.length>1?x(s,{attrs:c,slots:a,emit:u}):x(s,null)),v=e.props?c:tk(c)}}catch(x){na.length=0,El(x,t,1),E=jt(_n)}let b=E;if(v&&y!==!1){const x=Object.keys(v),{shapeFlag:M}=b;x.length&&M&7&&(o&&x.some(Jf)&&(v=nk(v,o)),b=qr(b,v))}return n.dirs&&(b=qr(b),b.dirs=b.dirs?b.dirs.concat(n.dirs):n.dirs),n.transition&&(b.transition=n.transition),E=b,Ou(I),E}const tk=t=>{let e;for(const n in t)(n==="class"||n==="style"||vl(n))&&((e||(e={}))[n]=t[n]);return e},nk=(t,e)=>{const n={};for(const r in t)(!Jf(r)||!(r.slice(9)in e))&&(n[r]=t[r]);return n};function rk(t,e,n){const{props:r,children:i,component:s}=t,{props:o,children:a,patchFlag:c}=e,u=s.emitsOptions;if(e.dirs||e.transition)return!0;if(n&&c>=0){if(c&1024)return!0;if(c&16)return r?$g(r,o,u):!!o;if(c&8){const l=e.dynamicProps;for(let h=0;h<l.length;h++){const d=l[h];if(o[d]!==r[d]&&!Tl(u,d))return!0}}}else return(i||a)&&(!a||!a.$stable)?!0:r===o?!1:r?o?$g(r,o,u):!0:!!o;return!1}function $g(t,e,n){const r=Object.keys(e);if(r.length!==Object.keys(t).length)return!0;for(let i=0;i<r.length;i++){const s=r[i];if(e[s]!==t[s]&&!Tl(n,s))return!0}return!1}function ik({vnode:t,parent:e},n){for(;e&&e.subTree===t;)(t=e.vnode).el=n,e=e.parent}const sk=t=>t.__isSuspense;function ok(t,e){e&&e.pendingBranch?re(t)?e.effects.push(...t):e.effects.push(t):XS(t)}function mu(t,e){if(Ye){let n=Ye.provides;const r=Ye.parent&&Ye.parent.provides;r===n&&(n=Ye.provides=Object.create(r)),n[t]=e}}function Vn(t,e,n=!1){const r=Ye||Xt;if(r){const i=r.parent==null?r.vnode.appContext&&r.vnode.appContext.provides:r.parent.provides;if(i&&t in i)return i[t];if(arguments.length>1)return n&&ue(e)?e.call(r.proxy):e}}const qc={};function ea(t,e,n){return U_(t,e,n)}function U_(t,e,{immediate:n,deep:r,flush:i,onTrack:s,onTrigger:o}=Re){const a=pS()===(Ye==null?void 0:Ye.scope)?Ye:null;let c,u=!1,l=!1;if(kt(t)?(c=()=>t.value,u=Du(t)):Ds(t)?(c=()=>t,r=!0):re(t)?(l=!0,u=t.some(b=>Ds(b)||Du(b)),c=()=>t.map(b=>{if(kt(b))return b.value;if(Ds(b))return Ci(b);if(ue(b))return Ur(b,a,2)})):ue(t)?e?c=()=>Ur(t,a,2):c=()=>{if(!(a&&a.isUnmounted))return h&&h(),on(t,a,3,[d])}:c=wn,e&&r){const b=c;c=()=>Ci(b())}let h,d=b=>{h=v.onStop=()=>{Ur(b,a,4)}},f;if(Ta)if(d=wn,e?n&&on(e,a,3,[c(),l?[]:void 0,d]):c(),i==="sync"){const b=nA();f=b.__watcherHandles||(b.__watcherHandles=[])}else return wn;let g=l?new Array(t.length).fill(qc):qc;const y=()=>{if(!!v.active)if(e){const b=v.run();(r||u||(l?b.some((x,M)=>wa(x,g[M])):wa(b,g)))&&(h&&h(),on(e,a,3,[b,g===qc?void 0:l&&g[0]===qc?[]:g,d]),g=b)}else v.run()};y.allowRecurse=!!e;let E;i==="sync"?E=y:i==="post"?E=()=>Bt(y,a&&a.suspense):(y.pre=!0,a&&(y.id=a.uid),E=()=>lp(y));const v=new rp(c,E);e?n?y():g=v.run():i==="post"?Bt(v.run.bind(v),a&&a.suspense):v.run();const I=()=>{v.stop(),a&&a.scope&&Zf(a.scope.effects,v)};return f&&f.push(I),I}function ak(t,e,n){const r=this.proxy,i=rt(t)?t.includes(".")?V_(r,t):()=>r[t]:t.bind(r,r);let s;ue(e)?s=e:(s=e.handler,n=e);const o=Ye;Hs(this);const a=U_(i,s.bind(r),n);return o?Hs(o):Fi(),a}function V_(t,e){const n=e.split(".");return()=>{let r=t;for(let i=0;i<n.length&&r;i++)r=r[n[i]];return r}}function Ci(t,e){if(!Oe(t)||t.__v_skip||(e=e||new Set,e.has(t)))return t;if(e.add(t),kt(t))Ci(t.value,e);else if(re(t))for(let n=0;n<t.length;n++)Ci(t[n],e);else if(l_(t)||Ps(t))t.forEach(n=>{Ci(n,e)});else if(f_(t))for(const n in t)Ci(t[n],e);return t}function ck(){const t={isMounted:!1,isLeaving:!1,isUnmounting:!1,leavingVNodes:new Map};return hp(()=>{t.isMounted=!0}),z_(()=>{t.isUnmounting=!0}),t}const nn=[Function,Array],uk={name:"BaseTransition",props:{mode:String,appear:Boolean,persisted:Boolean,onBeforeEnter:nn,onEnter:nn,onAfterEnter:nn,onEnterCancelled:nn,onBeforeLeave:nn,onLeave:nn,onAfterLeave:nn,onLeaveCancelled:nn,onBeforeAppear:nn,onAppear:nn,onAfterAppear:nn,onAppearCancelled:nn},setup(t,{slots:e}){const n=Gk(),r=ck();let i;return()=>{const s=e.default&&q_(e.default(),!0);if(!s||!s.length)return;let o=s[0];if(s.length>1){for(const y of s)if(y.type!==_n){o=y;break}}const a=_e(t),{mode:c}=a;if(r.isLeaving)return Fh(o);const u=qg(o);if(!u)return Fh(o);const l=xd(u,a,r,n);Nd(u,l);const h=n.subTree,d=h&&qg(h);let f=!1;const{getTransitionKey:g}=u.type;if(g){const y=g();i===void 0?i=y:y!==i&&(i=y,f=!0)}if(d&&d.type!==_n&&(!bi(u,d)||f)){const y=xd(d,a,r,n);if(Nd(d,y),c==="out-in")return r.isLeaving=!0,y.afterLeave=()=>{r.isLeaving=!1,n.update.active!==!1&&n.update()},Fh(o);c==="in-out"&&u.type!==_n&&(y.delayLeave=(E,v,I)=>{const b=$_(r,d);b[String(d.key)]=d,E._leaveCb=()=>{v(),E._leaveCb=void 0,delete l.delayedLeave},l.delayedLeave=I})}return o}}},B_=uk;function $_(t,e){const{leavingVNodes:n}=t;let r=n.get(e.type);return r||(r=Object.create(null),n.set(e.type,r)),r}function xd(t,e,n,r){const{appear:i,mode:s,persisted:o=!1,onBeforeEnter:a,onEnter:c,onAfterEnter:u,onEnterCancelled:l,onBeforeLeave:h,onLeave:d,onAfterLeave:f,onLeaveCancelled:g,onBeforeAppear:y,onAppear:E,onAfterAppear:v,onAppearCancelled:I}=e,b=String(t.key),x=$_(n,t),M=(H,oe)=>{H&&on(H,r,9,oe)},z=(H,oe)=>{const we=oe[1];M(H,oe),re(H)?H.every(st=>st.length<=1)&&we():H.length<=1&&we()},ne={mode:s,persisted:o,beforeEnter(H){let oe=a;if(!n.isMounted)if(i)oe=y||a;else return;H._leaveCb&&H._leaveCb(!0);const we=x[b];we&&bi(t,we)&&we.el._leaveCb&&we.el._leaveCb(),M(oe,[H])},enter(H){let oe=c,we=u,st=l;if(!n.isMounted)if(i)oe=E||c,we=v||u,st=I||l;else return;let K=!1;const Ce=H._enterCb=mt=>{K||(K=!0,mt?M(st,[H]):M(we,[H]),ne.delayedLeave&&ne.delayedLeave(),H._enterCb=void 0)};oe?z(oe,[H,Ce]):Ce()},leave(H,oe){const we=String(t.key);if(H._enterCb&&H._enterCb(!0),n.isUnmounting)return oe();M(h,[H]);let st=!1;const K=H._leaveCb=Ce=>{st||(st=!0,oe(),Ce?M(g,[H]):M(f,[H]),H._leaveCb=void 0,x[we]===t&&delete x[we])};x[we]=t,d?z(d,[H,K]):K()},clone(H){return xd(H,e,n,r)}};return ne}function Fh(t){if(kl(t))return t=qr(t),t.children=null,t}function qg(t){return kl(t)?t.children?t.children[0]:void 0:t}function Nd(t,e){t.shapeFlag&6&&t.component?Nd(t.component.subTree,e):t.shapeFlag&128?(t.ssContent.transition=e.clone(t.ssContent),t.ssFallback.transition=e.clone(t.ssFallback)):t.transition=e}function q_(t,e=!1,n){let r=[],i=0;for(let s=0;s<t.length;s++){let o=t[s];const a=n==null?o.key:String(n)+String(o.key!=null?o.key:s);o.type===kn?(o.patchFlag&128&&i++,r=r.concat(q_(o.children,e,a))):(e||o.type!==_n)&&r.push(a!=null?qr(o,{key:a}):o)}if(i>1)for(let s=0;s<r.length;s++)r[s].patchFlag=-2;return r}function ic(t){return ue(t)?{setup:t,name:t.name}:t}const gu=t=>!!t.type.__asyncLoader,kl=t=>t.type.__isKeepAlive;function lk(t,e){j_(t,"a",e)}function hk(t,e){j_(t,"da",e)}function j_(t,e,n=Ye){const r=t.__wdc||(t.__wdc=()=>{let i=n;for(;i;){if(i.isDeactivated)return;i=i.parent}return t()});if(Al(e,r,n),n){let i=n.parent;for(;i&&i.parent;)kl(i.parent.vnode)&&dk(r,e,n,i),i=i.parent}}function dk(t,e,n,r){const i=Al(e,t,r,!0);H_(()=>{Zf(r[e],i)},n)}function Al(t,e,n=Ye,r=!1){if(n){const i=n[t]||(n[t]=[]),s=e.__weh||(e.__weh=(...o)=>{if(n.isUnmounted)return;ho(),Hs(n);const a=on(e,n,t,o);return Fi(),fo(),a});return r?i.unshift(s):i.push(s),s}}const hr=t=>(e,n=Ye)=>(!Ta||t==="sp")&&Al(t,(...r)=>e(...r),n),fk=hr("bm"),hp=hr("m"),pk=hr("bu"),mk=hr("u"),z_=hr("bum"),H_=hr("um"),gk=hr("sp"),yk=hr("rtg"),vk=hr("rtc");function wk(t,e=Ye){Al("ec",t,e)}function h3(t,e){const n=Xt;if(n===null)return t;const r=xl(n)||n.proxy,i=t.dirs||(t.dirs=[]);for(let s=0;s<e.length;s++){let[o,a,c,u=Re]=e[s];o&&(ue(o)&&(o={mounted:o,updated:o}),o.deep&&Ci(a),i.push({dir:o,instance:r,value:a,oldValue:void 0,arg:c,modifiers:u}))}return t}function di(t,e,n,r){const i=t.dirs,s=e&&e.dirs;for(let o=0;o<i.length;o++){const a=i[o];s&&(a.oldValue=s[o].value);let c=a.dir[r];c&&(ho(),on(c,n,8,[t.el,a,t,e]),fo())}}const K_="components";function _k(t,e){return Ik(K_,t,!0,e)||t}const bk=Symbol();function Ik(t,e,n=!0,r=!1){const i=Xt||Ye;if(i){const s=i.type;if(t===K_){const a=Zk(s,!1);if(a&&(a===e||a===jn(e)||a===bl(jn(e))))return s}const o=jg(i[t]||s[t],e)||jg(i.appContext[t],e);return!o&&r?s:o}}function jg(t,e){return t&&(t[e]||t[jn(e)]||t[bl(jn(e))])}function d3(t,e,n,r){let i;const s=n&&n[r];if(re(t)||rt(t)){i=new Array(t.length);for(let o=0,a=t.length;o<a;o++)i[o]=e(t[o],o,void 0,s&&s[o])}else if(typeof t=="number"){i=new Array(t);for(let o=0;o<t;o++)i[o]=e(o+1,o,void 0,s&&s[o])}else if(Oe(t))if(t[Symbol.iterator])i=Array.from(t,(o,a)=>e(o,a,void 0,s&&s[a]));else{const o=Object.keys(t);i=new Array(o.length);for(let a=0,c=o.length;a<c;a++){const u=o[a];i[a]=e(t[u],u,a,s&&s[a])}}else i=[];return n&&(n[r]=i),i}const Pd=t=>t?ob(t)?xl(t)||t.proxy:Pd(t.parent):null,ta=_t(Object.create(null),{$:t=>t,$el:t=>t.vnode.el,$data:t=>t.data,$props:t=>t.props,$attrs:t=>t.attrs,$slots:t=>t.slots,$refs:t=>t.refs,$parent:t=>Pd(t.parent),$root:t=>Pd(t.root),$emit:t=>t.emit,$options:t=>dp(t),$forceUpdate:t=>t.f||(t.f=()=>lp(t.update)),$nextTick:t=>t.n||(t.n=D_.bind(t.proxy)),$watch:t=>ak.bind(t)}),Uh=(t,e)=>t!==Re&&!t.__isScriptSetup&&ye(t,e),Ek={get({_:t},e){const{ctx:n,setupState:r,data:i,props:s,accessCache:o,type:a,appContext:c}=t;let u;if(e[0]!=="$"){const f=o[e];if(f!==void 0)switch(f){case 1:return r[e];case 2:return i[e];case 4:return n[e];case 3:return s[e]}else{if(Uh(r,e))return o[e]=1,r[e];if(i!==Re&&ye(i,e))return o[e]=2,i[e];if((u=t.propsOptions[0])&&ye(u,e))return o[e]=3,s[e];if(n!==Re&&ye(n,e))return o[e]=4,n[e];Dd&&(o[e]=0)}}const l=ta[e];let h,d;if(l)return e==="$attrs"&&Wt(t,"get",e),l(t);if((h=a.__cssModules)&&(h=h[e]))return h;if(n!==Re&&ye(n,e))return o[e]=4,n[e];if(d=c.config.globalProperties,ye(d,e))return d[e]},set({_:t},e,n){const{data:r,setupState:i,ctx:s}=t;return Uh(i,e)?(i[e]=n,!0):r!==Re&&ye(r,e)?(r[e]=n,!0):ye(t.props,e)||e[0]==="$"&&e.slice(1)in t?!1:(s[e]=n,!0)},has({_:{data:t,setupState:e,accessCache:n,ctx:r,appContext:i,propsOptions:s}},o){let a;return!!n[o]||t!==Re&&ye(t,o)||Uh(e,o)||(a=s[0])&&ye(a,o)||ye(r,o)||ye(ta,o)||ye(i.config.globalProperties,o)},defineProperty(t,e,n){return n.get!=null?t._.accessCache[e]=0:ye(n,"value")&&this.set(t,e,n.value,null),Reflect.defineProperty(t,e,n)}};let Dd=!0;function Tk(t){const e=dp(t),n=t.proxy,r=t.ctx;Dd=!1,e.beforeCreate&&zg(e.beforeCreate,t,"bc");const{data:i,computed:s,methods:o,watch:a,provide:c,inject:u,created:l,beforeMount:h,mounted:d,beforeUpdate:f,updated:g,activated:y,deactivated:E,beforeDestroy:v,beforeUnmount:I,destroyed:b,unmounted:x,render:M,renderTracked:z,renderTriggered:ne,errorCaptured:H,serverPrefetch:oe,expose:we,inheritAttrs:st,components:K,directives:Ce,filters:mt}=e;if(u&&Sk(u,r,null,t.appContext.config.unwrapInjectedRef),o)for(const ke in o){const Ee=o[ke];ue(Ee)&&(r[ke]=Ee.bind(n))}if(i){const ke=i.call(n,n);Oe(ke)&&(t.data=rc(ke))}if(Dd=!0,s)for(const ke in s){const Ee=s[ke],ln=ue(Ee)?Ee.bind(n,n):ue(Ee.get)?Ee.get.bind(n,n):wn,hi=!ue(Ee)&&ue(Ee.set)?Ee.set.bind(n):wn,hn=$e({get:ln,set:hi});Object.defineProperty(r,ke,{enumerable:!0,configurable:!0,get:()=>hn.value,set:Ut=>hn.value=Ut})}if(a)for(const ke in a)W_(a[ke],r,n,ke);if(c){const ke=ue(c)?c.call(n):c;Reflect.ownKeys(ke).forEach(Ee=>{mu(Ee,ke[Ee])})}l&&zg(l,t,"c");function Ve(ke,Ee){re(Ee)?Ee.forEach(ln=>ke(ln.bind(n))):Ee&&ke(Ee.bind(n))}if(Ve(fk,h),Ve(hp,d),Ve(pk,f),Ve(mk,g),Ve(lk,y),Ve(hk,E),Ve(wk,H),Ve(vk,z),Ve(yk,ne),Ve(z_,I),Ve(H_,x),Ve(gk,oe),re(we))if(we.length){const ke=t.exposed||(t.exposed={});we.forEach(Ee=>{Object.defineProperty(ke,Ee,{get:()=>n[Ee],set:ln=>n[Ee]=ln})})}else t.exposed||(t.exposed={});M&&t.render===wn&&(t.render=M),st!=null&&(t.inheritAttrs=st),K&&(t.components=K),Ce&&(t.directives=Ce)}function Sk(t,e,n=wn,r=!1){re(t)&&(t=Od(t));for(const i in t){const s=t[i];let o;Oe(s)?"default"in s?o=Vn(s.from||i,s.default,!0):o=Vn(s.from||i):o=Vn(s),kt(o)&&r?Object.defineProperty(e,i,{enumerable:!0,configurable:!0,get:()=>o.value,set:a=>o.value=a}):e[i]=o}}function zg(t,e,n){on(re(t)?t.map(r=>r.bind(e.proxy)):t.bind(e.proxy),e,n)}function W_(t,e,n,r){const i=r.includes(".")?V_(n,r):()=>n[r];if(rt(t)){const s=e[t];ue(s)&&ea(i,s)}else if(ue(t))ea(i,t.bind(n));else if(Oe(t))if(re(t))t.forEach(s=>W_(s,e,n,r));else{const s=ue(t.handler)?t.handler.bind(n):e[t.handler];ue(s)&&ea(i,s,t)}}function dp(t){const e=t.type,{mixins:n,extends:r}=e,{mixins:i,optionsCache:s,config:{optionMergeStrategies:o}}=t.appContext,a=s.get(e);let c;return a?c=a:!i.length&&!n&&!r?c=e:(c={},i.length&&i.forEach(u=>Lu(c,u,o,!0)),Lu(c,e,o)),Oe(e)&&s.set(e,c),c}function Lu(t,e,n,r=!1){const{mixins:i,extends:s}=e;s&&Lu(t,s,n,!0),i&&i.forEach(o=>Lu(t,o,n,!0));for(const o in e)if(!(r&&o==="expose")){const a=kk[o]||n&&n[o];t[o]=a?a(t[o],e[o]):e[o]}return t}const kk={data:Hg,props:yi,emits:yi,methods:yi,computed:yi,beforeCreate:Pt,created:Pt,beforeMount:Pt,mounted:Pt,beforeUpdate:Pt,updated:Pt,beforeDestroy:Pt,beforeUnmount:Pt,destroyed:Pt,unmounted:Pt,activated:Pt,deactivated:Pt,errorCaptured:Pt,serverPrefetch:Pt,components:yi,directives:yi,watch:Ck,provide:Hg,inject:Ak};function Hg(t,e){return e?t?function(){return _t(ue(t)?t.call(this,this):t,ue(e)?e.call(this,this):e)}:e:t}function Ak(t,e){return yi(Od(t),Od(e))}function Od(t){if(re(t)){const e={};for(let n=0;n<t.length;n++)e[t[n]]=t[n];return e}return t}function Pt(t,e){return t?[...new Set([].concat(t,e))]:e}function yi(t,e){return t?_t(_t(Object.create(null),t),e):e}function Ck(t,e){if(!t)return e;if(!e)return t;const n=_t(Object.create(null),t);for(const r in e)n[r]=Pt(t[r],e[r]);return n}function Rk(t,e,n,r=!1){const i={},s={};Pu(s,Rl,1),t.propsDefaults=Object.create(null),G_(t,e,i,s);for(const o in t.propsOptions[0])o in i||(i[o]=void 0);n?t.props=r?i:$S(i):t.type.props?t.props=i:t.props=s,t.attrs=s}function xk(t,e,n,r){const{props:i,attrs:s,vnode:{patchFlag:o}}=t,a=_e(i),[c]=t.propsOptions;let u=!1;if((r||o>0)&&!(o&16)){if(o&8){const l=t.vnode.dynamicProps;for(let h=0;h<l.length;h++){let d=l[h];if(Tl(t.emitsOptions,d))continue;const f=e[d];if(c)if(ye(s,d))f!==s[d]&&(s[d]=f,u=!0);else{const g=jn(d);i[g]=Ld(c,a,g,f,t,!1)}else f!==s[d]&&(s[d]=f,u=!0)}}}else{G_(t,e,i,s)&&(u=!0);let l;for(const h in a)(!e||!ye(e,h)&&((l=lo(h))===h||!ye(e,l)))&&(c?n&&(n[h]!==void 0||n[l]!==void 0)&&(i[h]=Ld(c,a,h,void 0,t,!0)):delete i[h]);if(s!==a)for(const h in s)(!e||!ye(e,h)&&!0)&&(delete s[h],u=!0)}u&&nr(t,"set","$attrs")}function G_(t,e,n,r){const[i,s]=t.propsOptions;let o=!1,a;if(e)for(let c in e){if(fu(c))continue;const u=e[c];let l;i&&ye(i,l=jn(c))?!s||!s.includes(l)?n[l]=u:(a||(a={}))[l]=u:Tl(t.emitsOptions,c)||(!(c in r)||u!==r[c])&&(r[c]=u,o=!0)}if(s){const c=_e(n),u=a||Re;for(let l=0;l<s.length;l++){const h=s[l];n[h]=Ld(i,c,h,u[h],t,!ye(u,h))}}return o}function Ld(t,e,n,r,i,s){const o=t[n];if(o!=null){const a=ye(o,"default");if(a&&r===void 0){const c=o.default;if(o.type!==Function&&ue(c)){const{propsDefaults:u}=i;n in u?r=u[n]:(Hs(i),r=u[n]=c.call(null,e),Fi())}else r=c}o[0]&&(s&&!a?r=!1:o[1]&&(r===""||r===lo(n))&&(r=!0))}return r}function Y_(t,e,n=!1){const r=e.propsCache,i=r.get(t);if(i)return i;const s=t.props,o={},a=[];let c=!1;if(!ue(t)){const l=h=>{c=!0;const[d,f]=Y_(h,e,!0);_t(o,d),f&&a.push(...f)};!n&&e.mixins.length&&e.mixins.forEach(l),t.extends&&l(t.extends),t.mixins&&t.mixins.forEach(l)}if(!s&&!c)return Oe(t)&&r.set(t,Ns),Ns;if(re(s))for(let l=0;l<s.length;l++){const h=jn(s[l]);Kg(h)&&(o[h]=Re)}else if(s)for(const l in s){const h=jn(l);if(Kg(h)){const d=s[l],f=o[h]=re(d)||ue(d)?{type:d}:Object.assign({},d);if(f){const g=Yg(Boolean,f.type),y=Yg(String,f.type);f[0]=g>-1,f[1]=y<0||g<y,(g>-1||ye(f,"default"))&&a.push(h)}}}const u=[o,a];return Oe(t)&&r.set(t,u),u}function Kg(t){return t[0]!=="$"}function Wg(t){const e=t&&t.toString().match(/^\s*(function|class) (\w+)/);return e?e[2]:t===null?"null":""}function Gg(t,e){return Wg(t)===Wg(e)}function Yg(t,e){return re(e)?e.findIndex(n=>Gg(n,t)):ue(e)&&Gg(e,t)?0:-1}const Q_=t=>t[0]==="_"||t==="$stable",fp=t=>re(t)?t.map(An):[An(t)],Nk=(t,e,n)=>{if(e._n)return e;const r=ek((...i)=>fp(e(...i)),n);return r._c=!1,r},X_=(t,e,n)=>{const r=t._ctx;for(const i in t){if(Q_(i))continue;const s=t[i];if(ue(s))e[i]=Nk(i,s,r);else if(s!=null){const o=fp(s);e[i]=()=>o}}},J_=(t,e)=>{const n=fp(e);t.slots.default=()=>n},Pk=(t,e)=>{if(t.vnode.shapeFlag&32){const n=e._;n?(t.slots=_e(e),Pu(e,"_",n)):X_(e,t.slots={})}else t.slots={},e&&J_(t,e);Pu(t.slots,Rl,1)},Dk=(t,e,n)=>{const{vnode:r,slots:i}=t;let s=!0,o=Re;if(r.shapeFlag&32){const a=e._;a?n&&a===1?s=!1:(_t(i,e),!n&&a===1&&delete i._):(s=!e.$stable,X_(e,i)),o=e}else e&&(J_(t,e),o={default:1});if(s)for(const a in i)!Q_(a)&&!(a in o)&&delete i[a]};function Z_(){return{app:null,config:{isNativeTag:iS,performance:!1,globalProperties:{},optionMergeStrategies:{},errorHandler:void 0,warnHandler:void 0,compilerOptions:{}},mixins:[],components:{},directives:{},provides:Object.create(null),optionsCache:new WeakMap,propsCache:new WeakMap,emitsCache:new WeakMap}}let Ok=0;function Lk(t,e){return function(r,i=null){ue(r)||(r=Object.assign({},r)),i!=null&&!Oe(i)&&(i=null);const s=Z_(),o=new Set;let a=!1;const c=s.app={_uid:Ok++,_component:r,_props:i,_container:null,_context:s,_instance:null,version:rA,get config(){return s.config},set config(u){},use(u,...l){return o.has(u)||(u&&ue(u.install)?(o.add(u),u.install(c,...l)):ue(u)&&(o.add(u),u(c,...l))),c},mixin(u){return s.mixins.includes(u)||s.mixins.push(u),c},component(u,l){return l?(s.components[u]=l,c):s.components[u]},directive(u,l){return l?(s.directives[u]=l,c):s.directives[u]},mount(u,l,h){if(!a){const d=jt(r,i);return d.appContext=s,l&&e?e(d,u):t(d,u,h),a=!0,c._container=u,u.__vue_app__=c,xl(d.component)||d.component.proxy}},unmount(){a&&(t(null,c._container),delete c._container.__vue_app__)},provide(u,l){return s.provides[u]=l,c}};return c}}function Md(t,e,n,r,i=!1){if(re(t)){t.forEach((d,f)=>Md(d,e&&(re(e)?e[f]:e),n,r,i));return}if(gu(r)&&!i)return;const s=r.shapeFlag&4?xl(r.component)||r.component.proxy:r.el,o=i?null:s,{i:a,r:c}=t,u=e&&e.r,l=a.refs===Re?a.refs={}:a.refs,h=a.setupState;if(u!=null&&u!==c&&(rt(u)?(l[u]=null,ye(h,u)&&(h[u]=null)):kt(u)&&(u.value=null)),ue(c))Ur(c,a,12,[o,l]);else{const d=rt(c),f=kt(c);if(d||f){const g=()=>{if(t.f){const y=d?ye(h,c)?h[c]:l[c]:c.value;i?re(y)&&Zf(y,s):re(y)?y.includes(s)||y.push(s):d?(l[c]=[s],ye(h,c)&&(h[c]=l[c])):(c.value=[s],t.k&&(l[t.k]=c.value))}else d?(l[c]=o,ye(h,c)&&(h[c]=o)):f&&(c.value=o,t.k&&(l[t.k]=o))};o?(g.id=-1,Bt(g,n)):g()}}}const Bt=ok;function Mk(t){return Fk(t)}function Fk(t,e){const n=hS();n.__VUE__=!0;const{insert:r,remove:i,patchProp:s,createElement:o,createText:a,createComment:c,setText:u,setElementText:l,parentNode:h,nextSibling:d,setScopeId:f=wn,insertStaticContent:g}=t,y=(p,m,T,S=null,C=null,O=null,B=!1,D=null,F=!!m.dynamicChildren)=>{if(p===m)return;p&&!bi(p,m)&&(S=V(p),Ut(p,C,O,!0),p=null),m.patchFlag===-2&&(F=!1,m.dynamicChildren=null);const{type:N,ref:ee,shapeFlag:W}=m;switch(N){case Cl:E(p,m,T,S);break;case _n:v(p,m,T,S);break;case yu:p==null&&I(m,T,S,B);break;case kn:K(p,m,T,S,C,O,B,D,F);break;default:W&1?M(p,m,T,S,C,O,B,D,F):W&6?Ce(p,m,T,S,C,O,B,D,F):(W&64||W&128)&&N.process(p,m,T,S,C,O,B,D,F,ge)}ee!=null&&C&&Md(ee,p&&p.ref,O,m||p,!m)},E=(p,m,T,S)=>{if(p==null)r(m.el=a(m.children),T,S);else{const C=m.el=p.el;m.children!==p.children&&u(C,m.children)}},v=(p,m,T,S)=>{p==null?r(m.el=c(m.children||""),T,S):m.el=p.el},I=(p,m,T,S)=>{[p.el,p.anchor]=g(p.children,m,T,S,p.el,p.anchor)},b=({el:p,anchor:m},T,S)=>{let C;for(;p&&p!==m;)C=d(p),r(p,T,S),p=C;r(m,T,S)},x=({el:p,anchor:m})=>{let T;for(;p&&p!==m;)T=d(p),i(p),p=T;i(m)},M=(p,m,T,S,C,O,B,D,F)=>{B=B||m.type==="svg",p==null?z(m,T,S,C,O,B,D,F):oe(p,m,C,O,B,D,F)},z=(p,m,T,S,C,O,B,D)=>{let F,N;const{type:ee,props:W,shapeFlag:te,transition:se,dirs:he}=p;if(F=p.el=o(p.type,O,W&&W.is,W),te&8?l(F,p.children):te&16&&H(p.children,F,null,S,C,O&&ee!=="foreignObject",B,D),he&&di(p,null,S,"created"),ne(F,p,p.scopeId,B,S),W){for(const Te in W)Te!=="value"&&!fu(Te)&&s(F,Te,null,W[Te],O,p.children,S,C,q);"value"in W&&s(F,"value",null,W.value),(N=W.onVnodeBeforeMount)&&Sn(N,S,p)}he&&di(p,null,S,"beforeMount");const Ae=(!C||C&&!C.pendingBranch)&&se&&!se.persisted;Ae&&se.beforeEnter(F),r(F,m,T),((N=W&&W.onVnodeMounted)||Ae||he)&&Bt(()=>{N&&Sn(N,S,p),Ae&&se.enter(F),he&&di(p,null,S,"mounted")},C)},ne=(p,m,T,S,C)=>{if(T&&f(p,T),S)for(let O=0;O<S.length;O++)f(p,S[O]);if(C){let O=C.subTree;if(m===O){const B=C.vnode;ne(p,B,B.scopeId,B.slotScopeIds,C.parent)}}},H=(p,m,T,S,C,O,B,D,F=0)=>{for(let N=F;N<p.length;N++){const ee=p[N]=D?Nr(p[N]):An(p[N]);y(null,ee,m,T,S,C,O,B,D)}},oe=(p,m,T,S,C,O,B)=>{const D=m.el=p.el;let{patchFlag:F,dynamicChildren:N,dirs:ee}=m;F|=p.patchFlag&16;const W=p.props||Re,te=m.props||Re;let se;T&&fi(T,!1),(se=te.onVnodeBeforeUpdate)&&Sn(se,T,m,p),ee&&di(m,p,T,"beforeUpdate"),T&&fi(T,!0);const he=C&&m.type!=="foreignObject";if(N?we(p.dynamicChildren,N,D,T,S,he,O):B||Ee(p,m,D,null,T,S,he,O,!1),F>0){if(F&16)st(D,m,W,te,T,S,C);else if(F&2&&W.class!==te.class&&s(D,"class",null,te.class,C),F&4&&s(D,"style",W.style,te.style,C),F&8){const Ae=m.dynamicProps;for(let Te=0;Te<Ae.length;Te++){const et=Ae[Te],dn=W[et],gs=te[et];(gs!==dn||et==="value")&&s(D,et,dn,gs,C,p.children,T,S,q)}}F&1&&p.children!==m.children&&l(D,m.children)}else!B&&N==null&&st(D,m,W,te,T,S,C);((se=te.onVnodeUpdated)||ee)&&Bt(()=>{se&&Sn(se,T,m,p),ee&&di(m,p,T,"updated")},S)},we=(p,m,T,S,C,O,B)=>{for(let D=0;D<m.length;D++){const F=p[D],N=m[D],ee=F.el&&(F.type===kn||!bi(F,N)||F.shapeFlag&70)?h(F.el):T;y(F,N,ee,null,S,C,O,B,!0)}},st=(p,m,T,S,C,O,B)=>{if(T!==S){if(T!==Re)for(const D in T)!fu(D)&&!(D in S)&&s(p,D,T[D],null,B,m.children,C,O,q);for(const D in S){if(fu(D))continue;const F=S[D],N=T[D];F!==N&&D!=="value"&&s(p,D,N,F,B,m.children,C,O,q)}"value"in S&&s(p,"value",T.value,S.value)}},K=(p,m,T,S,C,O,B,D,F)=>{const N=m.el=p?p.el:a(""),ee=m.anchor=p?p.anchor:a("");let{patchFlag:W,dynamicChildren:te,slotScopeIds:se}=m;se&&(D=D?D.concat(se):se),p==null?(r(N,T,S),r(ee,T,S),H(m.children,T,ee,C,O,B,D,F)):W>0&&W&64&&te&&p.dynamicChildren?(we(p.dynamicChildren,te,T,C,O,B,D),(m.key!=null||C&&m===C.subTree)&&eb(p,m,!0)):Ee(p,m,T,ee,C,O,B,D,F)},Ce=(p,m,T,S,C,O,B,D,F)=>{m.slotScopeIds=D,p==null?m.shapeFlag&512?C.ctx.activate(m,T,S,B,F):mt(m,T,S,C,O,B,F):_r(p,m,F)},mt=(p,m,T,S,C,O,B)=>{const D=p.component=Wk(p,S,C);if(kl(p)&&(D.ctx.renderer=ge),Yk(D),D.asyncDep){if(C&&C.registerDep(D,Ve),!p.el){const F=D.subTree=jt(_n);v(null,F,m,T)}return}Ve(D,p,m,T,C,O,B)},_r=(p,m,T)=>{const S=m.component=p.component;if(rk(p,m,T))if(S.asyncDep&&!S.asyncResolved){ke(S,m,T);return}else S.next=m,QS(S.update),S.update();else m.el=p.el,S.vnode=m},Ve=(p,m,T,S,C,O,B)=>{const D=()=>{if(p.isMounted){let{next:ee,bu:W,u:te,parent:se,vnode:he}=p,Ae=ee,Te;fi(p,!1),ee?(ee.el=he.el,ke(p,ee,B)):ee=he,W&&pu(W),(Te=ee.props&&ee.props.onVnodeBeforeUpdate)&&Sn(Te,se,ee,he),fi(p,!0);const et=Mh(p),dn=p.subTree;p.subTree=et,y(dn,et,h(dn.el),V(dn),p,C,O),ee.el=et.el,Ae===null&&ik(p,et.el),te&&Bt(te,C),(Te=ee.props&&ee.props.onVnodeUpdated)&&Bt(()=>Sn(Te,se,ee,he),C)}else{let ee;const{el:W,props:te}=m,{bm:se,m:he,parent:Ae}=p,Te=gu(m);if(fi(p,!1),se&&pu(se),!Te&&(ee=te&&te.onVnodeBeforeMount)&&Sn(ee,Ae,m),fi(p,!0),W&&le){const et=()=>{p.subTree=Mh(p),le(W,p.subTree,p,C,null)};Te?m.type.__asyncLoader().then(()=>!p.isUnmounted&&et()):et()}else{const et=p.subTree=Mh(p);y(null,et,T,S,p,C,O),m.el=et.el}if(he&&Bt(he,C),!Te&&(ee=te&&te.onVnodeMounted)){const et=m;Bt(()=>Sn(ee,Ae,et),C)}(m.shapeFlag&256||Ae&&gu(Ae.vnode)&&Ae.vnode.shapeFlag&256)&&p.a&&Bt(p.a,C),p.isMounted=!0,m=T=S=null}},F=p.effect=new rp(D,()=>lp(N),p.scope),N=p.update=()=>F.run();N.id=p.uid,fi(p,!0),N()},ke=(p,m,T)=>{m.component=p;const S=p.vnode.props;p.vnode=m,p.next=null,xk(p,m.props,S,T),Dk(p,m.children,T),ho(),Bg(),fo()},Ee=(p,m,T,S,C,O,B,D,F=!1)=>{const N=p&&p.children,ee=p?p.shapeFlag:0,W=m.children,{patchFlag:te,shapeFlag:se}=m;if(te>0){if(te&128){hi(N,W,T,S,C,O,B,D,F);return}else if(te&256){ln(N,W,T,S,C,O,B,D,F);return}}se&8?(ee&16&&q(N,C,O),W!==N&&l(T,W)):ee&16?se&16?hi(N,W,T,S,C,O,B,D,F):q(N,C,O,!0):(ee&8&&l(T,""),se&16&&H(W,T,S,C,O,B,D,F))},ln=(p,m,T,S,C,O,B,D,F)=>{p=p||Ns,m=m||Ns;const N=p.length,ee=m.length,W=Math.min(N,ee);let te;for(te=0;te<W;te++){const se=m[te]=F?Nr(m[te]):An(m[te]);y(p[te],se,T,null,C,O,B,D,F)}N>ee?q(p,C,O,!0,!1,W):H(m,T,S,C,O,B,D,F,W)},hi=(p,m,T,S,C,O,B,D,F)=>{let N=0;const ee=m.length;let W=p.length-1,te=ee-1;for(;N<=W&&N<=te;){const se=p[N],he=m[N]=F?Nr(m[N]):An(m[N]);if(bi(se,he))y(se,he,T,null,C,O,B,D,F);else break;N++}for(;N<=W&&N<=te;){const se=p[W],he=m[te]=F?Nr(m[te]):An(m[te]);if(bi(se,he))y(se,he,T,null,C,O,B,D,F);else break;W--,te--}if(N>W){if(N<=te){const se=te+1,he=se<ee?m[se].el:S;for(;N<=te;)y(null,m[N]=F?Nr(m[N]):An(m[N]),T,he,C,O,B,D,F),N++}}else if(N>te)for(;N<=W;)Ut(p[N],C,O,!0),N++;else{const se=N,he=N,Ae=new Map;for(N=he;N<=te;N++){const Yt=m[N]=F?Nr(m[N]):An(m[N]);Yt.key!=null&&Ae.set(Yt.key,N)}let Te,et=0;const dn=te-he+1;let gs=!1,Rg=0;const No=new Array(dn);for(N=0;N<dn;N++)No[N]=0;for(N=se;N<=W;N++){const Yt=p[N];if(et>=dn){Ut(Yt,C,O,!0);continue}let Tn;if(Yt.key!=null)Tn=Ae.get(Yt.key);else for(Te=he;Te<=te;Te++)if(No[Te-he]===0&&bi(Yt,m[Te])){Tn=Te;break}Tn===void 0?Ut(Yt,C,O,!0):(No[Tn-he]=N+1,Tn>=Rg?Rg=Tn:gs=!0,y(Yt,m[Tn],T,null,C,O,B,D,F),et++)}const xg=gs?Uk(No):Ns;for(Te=xg.length-1,N=dn-1;N>=0;N--){const Yt=he+N,Tn=m[Yt],Ng=Yt+1<ee?m[Yt+1].el:S;No[N]===0?y(null,Tn,T,Ng,C,O,B,D,F):gs&&(Te<0||N!==xg[Te]?hn(Tn,T,Ng,2):Te--)}}},hn=(p,m,T,S,C=null)=>{const{el:O,type:B,transition:D,children:F,shapeFlag:N}=p;if(N&6){hn(p.component.subTree,m,T,S);return}if(N&128){p.suspense.move(m,T,S);return}if(N&64){B.move(p,m,T,ge);return}if(B===kn){r(O,m,T);for(let W=0;W<F.length;W++)hn(F[W],m,T,S);r(p.anchor,m,T);return}if(B===yu){b(p,m,T);return}if(S!==2&&N&1&&D)if(S===0)D.beforeEnter(O),r(O,m,T),Bt(()=>D.enter(O),C);else{const{leave:W,delayLeave:te,afterLeave:se}=D,he=()=>r(O,m,T),Ae=()=>{W(O,()=>{he(),se&&se()})};te?te(O,he,Ae):Ae()}else r(O,m,T)},Ut=(p,m,T,S=!1,C=!1)=>{const{type:O,props:B,ref:D,children:F,dynamicChildren:N,shapeFlag:ee,patchFlag:W,dirs:te}=p;if(D!=null&&Md(D,null,T,p,!0),ee&256){m.ctx.deactivate(p);return}const se=ee&1&&te,he=!gu(p);let Ae;if(he&&(Ae=B&&B.onVnodeBeforeUnmount)&&Sn(Ae,m,p),ee&6)k(p.component,T,S);else{if(ee&128){p.suspense.unmount(T,S);return}se&&di(p,null,m,"beforeUnmount"),ee&64?p.type.remove(p,m,T,C,ge,S):N&&(O!==kn||W>0&&W&64)?q(N,m,T,!1,!0):(O===kn&&W&384||!C&&ee&16)&&q(F,m,T),S&&ms(p)}(he&&(Ae=B&&B.onVnodeUnmounted)||se)&&Bt(()=>{Ae&&Sn(Ae,m,p),se&&di(p,null,m,"unmounted")},T)},ms=p=>{const{type:m,el:T,anchor:S,transition:C}=p;if(m===kn){Mc(T,S);return}if(m===yu){x(p);return}const O=()=>{i(T),C&&!C.persisted&&C.afterLeave&&C.afterLeave()};if(p.shapeFlag&1&&C&&!C.persisted){const{leave:B,delayLeave:D}=C,F=()=>B(T,O);D?D(p.el,O,F):F()}else O()},Mc=(p,m)=>{let T;for(;p!==m;)T=d(p),i(p),p=T;i(m)},k=(p,m,T)=>{const{bum:S,scope:C,update:O,subTree:B,um:D}=p;S&&pu(S),C.stop(),O&&(O.active=!1,Ut(B,p,m,T)),D&&Bt(D,m),Bt(()=>{p.isUnmounted=!0},m),m&&m.pendingBranch&&!m.isUnmounted&&p.asyncDep&&!p.asyncResolved&&p.suspenseId===m.pendingId&&(m.deps--,m.deps===0&&m.resolve())},q=(p,m,T,S=!1,C=!1,O=0)=>{for(let B=O;B<p.length;B++)Ut(p[B],m,T,S,C)},V=p=>p.shapeFlag&6?V(p.component.subTree):p.shapeFlag&128?p.suspense.next():d(p.anchor||p.el),Z=(p,m,T)=>{p==null?m._vnode&&Ut(m._vnode,null,null,!0):y(m._vnode||null,p,m,null,null,null,T),Bg(),L_(),m._vnode=p},ge={p:y,um:Ut,m:hn,r:ms,mt,mc:H,pc:Ee,pbc:we,n:V,o:t};let Be,le;return e&&([Be,le]=e(ge)),{render:Z,hydrate:Be,createApp:Lk(Z,Be)}}function fi({effect:t,update:e},n){t.allowRecurse=e.allowRecurse=n}function eb(t,e,n=!1){const r=t.children,i=e.children;if(re(r)&&re(i))for(let s=0;s<r.length;s++){const o=r[s];let a=i[s];a.shapeFlag&1&&!a.dynamicChildren&&((a.patchFlag<=0||a.patchFlag===32)&&(a=i[s]=Nr(i[s]),a.el=o.el),n||eb(o,a)),a.type===Cl&&(a.el=o.el)}}function Uk(t){const e=t.slice(),n=[0];let r,i,s,o,a;const c=t.length;for(r=0;r<c;r++){const u=t[r];if(u!==0){if(i=n[n.length-1],t[i]<u){e[r]=i,n.push(r);continue}for(s=0,o=n.length-1;s<o;)a=s+o>>1,t[n[a]]<u?s=a+1:o=a;u<t[n[s]]&&(s>0&&(e[r]=n[s-1]),n[s]=r)}}for(s=n.length,o=n[s-1];s-- >0;)n[s]=o,o=e[o];return n}const Vk=t=>t.__isTeleport,kn=Symbol(void 0),Cl=Symbol(void 0),_n=Symbol(void 0),yu=Symbol(void 0),na=[];let gn=null;function tb(t=!1){na.push(gn=t?null:[])}function Bk(){na.pop(),gn=na[na.length-1]||null}let Ea=1;function Qg(t){Ea+=t}function nb(t){return t.dynamicChildren=Ea>0?gn||Ns:null,Bk(),Ea>0&&gn&&gn.push(t),t}function f3(t,e,n,r,i,s){return nb(sb(t,e,n,r,i,s,!0))}function rb(t,e,n,r,i){return nb(jt(t,e,n,r,i,!0))}function Fd(t){return t?t.__v_isVNode===!0:!1}function bi(t,e){return t.type===e.type&&t.key===e.key}const Rl="__vInternal",ib=({key:t})=>t!=null?t:null,vu=({ref:t,ref_key:e,ref_for:n})=>t!=null?rt(t)||kt(t)||ue(t)?{i:Xt,r:t,k:e,f:!!n}:t:null;function sb(t,e=null,n=null,r=0,i=null,s=t===kn?0:1,o=!1,a=!1){const c={__v_isVNode:!0,__v_skip:!0,type:t,props:e,key:e&&ib(e),ref:e&&vu(e),scopeId:Sl,slotScopeIds:null,children:n,component:null,suspense:null,ssContent:null,ssFallback:null,dirs:null,transition:null,el:null,anchor:null,target:null,targetAnchor:null,staticCount:0,shapeFlag:s,patchFlag:r,dynamicProps:i,dynamicChildren:null,appContext:null,ctx:Xt};return a?(pp(c,n),s&128&&t.normalize(c)):n&&(c.shapeFlag|=rt(n)?8:16),Ea>0&&!o&&gn&&(c.patchFlag>0||s&6)&&c.patchFlag!==32&&gn.push(c),c}const jt=$k;function $k(t,e=null,n=null,r=0,i=null,s=!1){if((!t||t===bk)&&(t=_n),Fd(t)){const a=qr(t,e,!0);return n&&pp(a,n),Ea>0&&!s&&gn&&(a.shapeFlag&6?gn[gn.indexOf(t)]=a:gn.push(a)),a.patchFlag|=-2,a}if(eA(t)&&(t=t.__vccOpts),e){e=qk(e);let{class:a,style:c}=e;a&&!rt(a)&&(e.class=Xf(a)),Oe(c)&&(S_(c)&&!re(c)&&(c=_t({},c)),e.style=Qf(c))}const o=rt(t)?1:sk(t)?128:Vk(t)?64:Oe(t)?4:ue(t)?2:0;return sb(t,e,n,r,i,o,s,!0)}function qk(t){return t?S_(t)||Rl in t?_t({},t):t:null}function qr(t,e,n=!1){const{props:r,ref:i,patchFlag:s,children:o}=t,a=e?zk(r||{},e):r;return{__v_isVNode:!0,__v_skip:!0,type:t.type,props:a,key:a&&ib(a),ref:e&&e.ref?n&&i?re(i)?i.concat(vu(e)):[i,vu(e)]:vu(e):i,scopeId:t.scopeId,slotScopeIds:t.slotScopeIds,children:o,target:t.target,targetAnchor:t.targetAnchor,staticCount:t.staticCount,shapeFlag:t.shapeFlag,patchFlag:e&&t.type!==kn?s===-1?16:s|16:s,dynamicProps:t.dynamicProps,dynamicChildren:t.dynamicChildren,appContext:t.appContext,dirs:t.dirs,transition:t.transition,component:t.component,suspense:t.suspense,ssContent:t.ssContent&&qr(t.ssContent),ssFallback:t.ssFallback&&qr(t.ssFallback),el:t.el,anchor:t.anchor,ctx:t.ctx,ce:t.ce}}function jk(t=" ",e=0){return jt(Cl,null,t,e)}function p3(t,e){const n=jt(yu,null,t);return n.staticCount=e,n}function m3(t="",e=!1){return e?(tb(),rb(_n,null,t)):jt(_n,null,t)}function An(t){return t==null||typeof t=="boolean"?jt(_n):re(t)?jt(kn,null,t.slice()):typeof t=="object"?Nr(t):jt(Cl,null,String(t))}function Nr(t){return t.el===null&&t.patchFlag!==-1||t.memo?t:qr(t)}function pp(t,e){let n=0;const{shapeFlag:r}=t;if(e==null)e=null;else if(re(e))n=16;else if(typeof e=="object")if(r&65){const i=e.default;i&&(i._c&&(i._d=!1),pp(t,i()),i._c&&(i._d=!0));return}else{n=32;const i=e._;!i&&!(Rl in e)?e._ctx=Xt:i===3&&Xt&&(Xt.slots._===1?e._=1:(e._=2,t.patchFlag|=1024))}else ue(e)?(e={default:e,_ctx:Xt},n=32):(e=String(e),r&64?(n=16,e=[jk(e)]):n=8);t.children=e,t.shapeFlag|=n}function zk(...t){const e={};for(let n=0;n<t.length;n++){const r=t[n];for(const i in r)if(i==="class")e.class!==r.class&&(e.class=Xf([e.class,r.class]));else if(i==="style")e.style=Qf([e.style,r.style]);else if(vl(i)){const s=e[i],o=r[i];o&&s!==o&&!(re(s)&&s.includes(o))&&(e[i]=s?[].concat(s,o):o)}else i!==""&&(e[i]=r[i])}return e}function Sn(t,e,n,r=null){on(t,e,7,[n,r])}const Hk=Z_();let Kk=0;function Wk(t,e,n){const r=t.type,i=(e?e.appContext:t.appContext)||Hk,s={uid:Kk++,vnode:t,type:r,parent:e,appContext:i,root:null,next:null,subTree:null,effect:null,update:null,scope:new dS(!0),render:null,proxy:null,exposed:null,exposeProxy:null,withProxy:null,provides:e?e.provides:Object.create(i.provides),accessCache:null,renderCache:[],components:null,directives:null,propsOptions:Y_(r,i),emitsOptions:F_(r,i),emit:null,emitted:null,propsDefaults:Re,inheritAttrs:r.inheritAttrs,ctx:Re,data:Re,props:Re,attrs:Re,slots:Re,refs:Re,setupState:Re,setupContext:null,suspense:n,suspenseId:n?n.pendingId:0,asyncDep:null,asyncResolved:!1,isMounted:!1,isUnmounted:!1,isDeactivated:!1,bc:null,c:null,bm:null,m:null,bu:null,u:null,um:null,bum:null,da:null,a:null,rtg:null,rtc:null,ec:null,sp:null};return s.ctx={_:s},s.root=e?e.root:s,s.emit=ZS.bind(null,s),t.ce&&t.ce(s),s}let Ye=null;const Gk=()=>Ye||Xt,Hs=t=>{Ye=t,t.scope.on()},Fi=()=>{Ye&&Ye.scope.off(),Ye=null};function ob(t){return t.vnode.shapeFlag&4}let Ta=!1;function Yk(t,e=!1){Ta=e;const{props:n,children:r}=t.vnode,i=ob(t);Rk(t,n,i,e),Pk(t,r);const s=i?Qk(t,e):void 0;return Ta=!1,s}function Qk(t,e){const n=t.type;t.accessCache=Object.create(null),t.proxy=k_(new Proxy(t.ctx,Ek));const{setup:r}=n;if(r){const i=t.setupContext=r.length>1?Jk(t):null;Hs(t),ho();const s=Ur(r,t,0,[t.props,i]);if(fo(),Fi(),h_(s)){if(s.then(Fi,Fi),e)return s.then(o=>{Xg(t,o,e)}).catch(o=>{El(o,t,0)});t.asyncDep=s}else Xg(t,s,e)}else ab(t,e)}function Xg(t,e,n){ue(e)?t.type.__ssrInlineRender?t.ssrRender=e:t.render=e:Oe(e)&&(t.setupState=x_(e)),ab(t,n)}let Jg;function ab(t,e,n){const r=t.type;if(!t.render){if(!e&&Jg&&!r.render){const i=r.template||dp(t).template;if(i){const{isCustomElement:s,compilerOptions:o}=t.appContext.config,{delimiters:a,compilerOptions:c}=r,u=_t(_t({isCustomElement:s,delimiters:a},o),c);r.render=Jg(i,u)}}t.render=r.render||wn}Hs(t),ho(),Tk(t),fo(),Fi()}function Xk(t){return new Proxy(t.attrs,{get(e,n){return Wt(t,"get","$attrs"),e[n]}})}function Jk(t){const e=r=>{t.exposed=r||{}};let n;return{get attrs(){return n||(n=Xk(t))},slots:t.slots,emit:t.emit,expose:e}}function xl(t){if(t.exposed)return t.exposeProxy||(t.exposeProxy=new Proxy(x_(k_(t.exposed)),{get(e,n){if(n in e)return e[n];if(n in ta)return ta[n](t)},has(e,n){return n in e||n in ta}}))}function Zk(t,e=!0){return ue(t)?t.displayName||t.name:t.name||e&&t.__name}function eA(t){return ue(t)&&"__vccOpts"in t}const $e=(t,e)=>WS(t,e,Ta);function sc(t,e,n){const r=arguments.length;return r===2?Oe(e)&&!re(e)?Fd(e)?jt(t,null,[e]):jt(t,e):jt(t,null,e):(r>3?n=Array.prototype.slice.call(arguments,2):r===3&&Fd(n)&&(n=[n]),jt(t,e,n))}const tA=Symbol(""),nA=()=>Vn(tA),rA="3.2.47",iA="http://www.w3.org/2000/svg",Ii=typeof document<"u"?document:null,Zg=Ii&&Ii.createElement("template"),sA={insert:(t,e,n)=>{e.insertBefore(t,n||null)},remove:t=>{const e=t.parentNode;e&&e.removeChild(t)},createElement:(t,e,n,r)=>{const i=e?Ii.createElementNS(iA,t):Ii.createElement(t,n?{is:n}:void 0);return t==="select"&&r&&r.multiple!=null&&i.setAttribute("multiple",r.multiple),i},createText:t=>Ii.createTextNode(t),createComment:t=>Ii.createComment(t),setText:(t,e)=>{t.nodeValue=e},setElementText:(t,e)=>{t.textContent=e},parentNode:t=>t.parentNode,nextSibling:t=>t.nextSibling,querySelector:t=>Ii.querySelector(t),setScopeId(t,e){t.setAttribute(e,"")},insertStaticContent(t,e,n,r,i,s){const o=n?n.previousSibling:e.lastChild;if(i&&(i===s||i.nextSibling))for(;e.insertBefore(i.cloneNode(!0),n),!(i===s||!(i=i.nextSibling)););else{Zg.innerHTML=r?`<svg>${t}</svg>`:t;const a=Zg.content;if(r){const c=a.firstChild;for(;c.firstChild;)a.appendChild(c.firstChild);a.removeChild(c)}e.insertBefore(a,n)}return[o?o.nextSibling:e.firstChild,n?n.previousSibling:e.lastChild]}};function oA(t,e,n){const r=t._vtc;r&&(e=(e?[e,...r]:[...r]).join(" ")),e==null?t.removeAttribute("class"):n?t.setAttribute("class",e):t.className=e}function aA(t,e,n){const r=t.style,i=rt(n);if(n&&!i){if(e&&!rt(e))for(const s in e)n[s]==null&&Ud(r,s,"");for(const s in n)Ud(r,s,n[s])}else{const s=r.display;i?e!==n&&(r.cssText=n):e&&t.removeAttribute("style"),"_vod"in t&&(r.display=s)}}const ey=/\s*!important$/;function Ud(t,e,n){if(re(n))n.forEach(r=>Ud(t,e,r));else if(n==null&&(n=""),e.startsWith("--"))t.setProperty(e,n);else{const r=cA(t,e);ey.test(n)?t.setProperty(lo(r),n.replace(ey,""),"important"):t[r]=n}}const ty=["Webkit","Moz","ms"],Vh={};function cA(t,e){const n=Vh[e];if(n)return n;let r=jn(e);if(r!=="filter"&&r in t)return Vh[e]=r;r=bl(r);for(let i=0;i<ty.length;i++){const s=ty[i]+r;if(s in t)return Vh[e]=s}return e}const ny="http://www.w3.org/1999/xlink";function uA(t,e,n,r,i){if(r&&e.startsWith("xlink:"))n==null?t.removeAttributeNS(ny,e.slice(6,e.length)):t.setAttributeNS(ny,e,n);else{const s=rS(e);n==null||s&&!c_(n)?t.removeAttribute(e):t.setAttribute(e,s?"":n)}}function lA(t,e,n,r,i,s,o){if(e==="innerHTML"||e==="textContent"){r&&o(r,i,s),t[e]=n==null?"":n;return}if(e==="value"&&t.tagName!=="PROGRESS"&&!t.tagName.includes("-")){t._value=n;const c=n==null?"":n;(t.value!==c||t.tagName==="OPTION")&&(t.value=c),n==null&&t.removeAttribute(e);return}let a=!1;if(n===""||n==null){const c=typeof t[e];c==="boolean"?n=c_(n):n==null&&c==="string"?(n="",a=!0):c==="number"&&(n=0,a=!0)}try{t[e]=n}catch{}a&&t.removeAttribute(e)}function Is(t,e,n,r){t.addEventListener(e,n,r)}function hA(t,e,n,r){t.removeEventListener(e,n,r)}function dA(t,e,n,r,i=null){const s=t._vei||(t._vei={}),o=s[e];if(r&&o)o.value=r;else{const[a,c]=fA(e);if(r){const u=s[e]=gA(r,i);Is(t,a,u,c)}else o&&(hA(t,a,o,c),s[e]=void 0)}}const ry=/(?:Once|Passive|Capture)$/;function fA(t){let e;if(ry.test(t)){e={};let r;for(;r=t.match(ry);)t=t.slice(0,t.length-r[0].length),e[r[0].toLowerCase()]=!0}return[t[2]===":"?t.slice(3):lo(t.slice(2)),e]}let Bh=0;const pA=Promise.resolve(),mA=()=>Bh||(pA.then(()=>Bh=0),Bh=Date.now());function gA(t,e){const n=r=>{if(!r._vts)r._vts=Date.now();else if(r._vts<=n.attached)return;on(yA(r,n.value),e,5,[r])};return n.value=t,n.attached=mA(),n}function yA(t,e){if(re(e)){const n=t.stopImmediatePropagation;return t.stopImmediatePropagation=()=>{n.call(t),t._stopped=!0},e.map(r=>i=>!i._stopped&&r&&r(i))}else return e}const iy=/^on[a-z]/,vA=(t,e,n,r,i=!1,s,o,a,c)=>{e==="class"?oA(t,r,i):e==="style"?aA(t,n,r):vl(e)?Jf(e)||dA(t,e,n,r,o):(e[0]==="."?(e=e.slice(1),!0):e[0]==="^"?(e=e.slice(1),!1):wA(t,e,r,i))?lA(t,e,r,s,o,a,c):(e==="true-value"?t._trueValue=r:e==="false-value"&&(t._falseValue=r),uA(t,e,r,i))};function wA(t,e,n,r){return r?!!(e==="innerHTML"||e==="textContent"||e in t&&iy.test(e)&&ue(n)):e==="spellcheck"||e==="draggable"||e==="translate"||e==="form"||e==="list"&&t.tagName==="INPUT"||e==="type"&&t.tagName==="TEXTAREA"||iy.test(e)&&rt(n)?!1:e in t}const Ir="transition",Po="animation",cb=(t,{slots:e})=>sc(B_,_A(t),e);cb.displayName="Transition";const ub={name:String,type:String,css:{type:Boolean,default:!0},duration:[String,Number,Object],enterFromClass:String,enterActiveClass:String,enterToClass:String,appearFromClass:String,appearActiveClass:String,appearToClass:String,leaveFromClass:String,leaveActiveClass:String,leaveToClass:String};cb.props=_t({},B_.props,ub);const pi=(t,e=[])=>{re(t)?t.forEach(n=>n(...e)):t&&t(...e)},sy=t=>t?re(t)?t.some(e=>e.length>1):t.length>1:!1;function _A(t){const e={};for(const K in t)K in ub||(e[K]=t[K]);if(t.css===!1)return e;const{name:n="v",type:r,duration:i,enterFromClass:s=`${n}-enter-from`,enterActiveClass:o=`${n}-enter-active`,enterToClass:a=`${n}-enter-to`,appearFromClass:c=s,appearActiveClass:u=o,appearToClass:l=a,leaveFromClass:h=`${n}-leave-from`,leaveActiveClass:d=`${n}-leave-active`,leaveToClass:f=`${n}-leave-to`}=t,g=bA(i),y=g&&g[0],E=g&&g[1],{onBeforeEnter:v,onEnter:I,onEnterCancelled:b,onLeave:x,onLeaveCancelled:M,onBeforeAppear:z=v,onAppear:ne=I,onAppearCancelled:H=b}=e,oe=(K,Ce,mt)=>{mi(K,Ce?l:a),mi(K,Ce?u:o),mt&&mt()},we=(K,Ce)=>{K._isLeaving=!1,mi(K,h),mi(K,f),mi(K,d),Ce&&Ce()},st=K=>(Ce,mt)=>{const _r=K?ne:I,Ve=()=>oe(Ce,K,mt);pi(_r,[Ce,Ve]),oy(()=>{mi(Ce,K?c:s),Er(Ce,K?l:a),sy(_r)||ay(Ce,r,y,Ve)})};return _t(e,{onBeforeEnter(K){pi(v,[K]),Er(K,s),Er(K,o)},onBeforeAppear(K){pi(z,[K]),Er(K,c),Er(K,u)},onEnter:st(!1),onAppear:st(!0),onLeave(K,Ce){K._isLeaving=!0;const mt=()=>we(K,Ce);Er(K,h),TA(),Er(K,d),oy(()=>{!K._isLeaving||(mi(K,h),Er(K,f),sy(x)||ay(K,r,E,mt))}),pi(x,[K,mt])},onEnterCancelled(K){oe(K,!1),pi(b,[K])},onAppearCancelled(K){oe(K,!0),pi(H,[K])},onLeaveCancelled(K){we(K),pi(M,[K])}})}function bA(t){if(t==null)return null;if(Oe(t))return[$h(t.enter),$h(t.leave)];{const e=$h(t);return[e,e]}}function $h(t){return lS(t)}function Er(t,e){e.split(/\s+/).forEach(n=>n&&t.classList.add(n)),(t._vtc||(t._vtc=new Set)).add(e)}function mi(t,e){e.split(/\s+/).forEach(r=>r&&t.classList.remove(r));const{_vtc:n}=t;n&&(n.delete(e),n.size||(t._vtc=void 0))}function oy(t){requestAnimationFrame(()=>{requestAnimationFrame(t)})}let IA=0;function ay(t,e,n,r){const i=t._endId=++IA,s=()=>{i===t._endId&&r()};if(n)return setTimeout(s,n);const{type:o,timeout:a,propCount:c}=EA(t,e);if(!o)return r();const u=o+"end";let l=0;const h=()=>{t.removeEventListener(u,d),s()},d=f=>{f.target===t&&++l>=c&&h()};setTimeout(()=>{l<c&&h()},a+1),t.addEventListener(u,d)}function EA(t,e){const n=window.getComputedStyle(t),r=g=>(n[g]||"").split(", "),i=r(`${Ir}Delay`),s=r(`${Ir}Duration`),o=cy(i,s),a=r(`${Po}Delay`),c=r(`${Po}Duration`),u=cy(a,c);let l=null,h=0,d=0;e===Ir?o>0&&(l=Ir,h=o,d=s.length):e===Po?u>0&&(l=Po,h=u,d=c.length):(h=Math.max(o,u),l=h>0?o>u?Ir:Po:null,d=l?l===Ir?s.length:c.length:0);const f=l===Ir&&/\b(transform|all)(,|$)/.test(r(`${Ir}Property`).toString());return{type:l,timeout:h,propCount:d,hasTransform:f}}function cy(t,e){for(;t.length<e.length;)t=t.concat(t);return Math.max(...e.map((n,r)=>uy(n)+uy(t[r])))}function uy(t){return Number(t.slice(0,-1).replace(",","."))*1e3}function TA(){return document.body.offsetHeight}const ly=t=>{const e=t.props["onUpdate:modelValue"]||!1;return re(e)?n=>pu(e,n):e};function SA(t){t.target.composing=!0}function hy(t){const e=t.target;e.composing&&(e.composing=!1,e.dispatchEvent(new Event("input")))}const g3={created(t,{modifiers:{lazy:e,trim:n,number:r}},i){t._assign=ly(i);const s=r||i.props&&i.props.type==="number";Is(t,e?"change":"input",o=>{if(o.target.composing)return;let a=t.value;n&&(a=a.trim()),s&&(a=Td(a)),t._assign(a)}),n&&Is(t,"change",()=>{t.value=t.value.trim()}),e||(Is(t,"compositionstart",SA),Is(t,"compositionend",hy),Is(t,"change",hy))},mounted(t,{value:e}){t.value=e==null?"":e},beforeUpdate(t,{value:e,modifiers:{lazy:n,trim:r,number:i}},s){if(t._assign=ly(s),t.composing||document.activeElement===t&&t.type!=="range"&&(n||r&&t.value.trim()===e||(i||t.type==="number")&&Td(t.value)===e))return;const o=e==null?"":e;t.value!==o&&(t.value=o)}},kA=["ctrl","shift","alt","meta"],AA={stop:t=>t.stopPropagation(),prevent:t=>t.preventDefault(),self:t=>t.target!==t.currentTarget,ctrl:t=>!t.ctrlKey,shift:t=>!t.shiftKey,alt:t=>!t.altKey,meta:t=>!t.metaKey,left:t=>"button"in t&&t.button!==0,middle:t=>"button"in t&&t.button!==1,right:t=>"button"in t&&t.button!==2,exact:(t,e)=>kA.some(n=>t[`${n}Key`]&&!e.includes(n))},y3=(t,e)=>(n,...r)=>{for(let i=0;i<e.length;i++){const s=AA[e[i]];if(s&&s(n,e))return}return t(n,...r)},CA=_t({patchProp:vA},sA);let dy;function RA(){return dy||(dy=Mk(CA))}const xA=(...t)=>{const e=RA().createApp(...t),{mount:n}=e;return e.mount=r=>{const i=NA(r);if(!i)return;const s=e._component;!ue(s)&&!s.render&&!s.template&&(s.template=i.innerHTML),i.innerHTML="";const o=n(i,!1,i instanceof SVGElement);return i instanceof Element&&(i.removeAttribute("v-cloak"),i.setAttribute("data-v-app","")),o},e};function NA(t){return rt(t)?document.querySelector(t):t}const PA={__name:"App",setup(t){hp(()=>{window.matchMedia("(prefers-color-scheme: dark)").addEventListener("change",e)});const e=n=>{const r=document.querySelector("link[rel='icon']");n.matches?r.href="/favicon-dark.png":r.href="/favicon-light.png"};return(n,r)=>{const i=_k("router-view");return tb(),rb(i)}}},DA="modulepreload",OA=function(t){return"/jae_page/"+t},fy={},Tr=function(e,n,r){if(!n||n.length===0)return e();const i=document.getElementsByTagName("link");return Promise.all(n.map(s=>{if(s=OA(s),s in fy)return;fy[s]=!0;const o=s.endsWith(".css"),a=o?'[rel="stylesheet"]':"";if(!!r)for(let l=i.length-1;l>=0;l--){const h=i[l];if(h.href===s&&(!o||h.rel==="stylesheet"))return}else if(document.querySelector(`link[href="${s}"]${a}`))return;const u=document.createElement("link");if(u.rel=o?"stylesheet":DA,o||(u.as="script",u.crossOrigin=""),u.href=s,document.head.appendChild(u),o)return new Promise((l,h)=>{u.addEventListener("load",l),u.addEventListener("error",()=>h(new Error(`Unable to preload CSS for ${s}`)))})})).then(()=>e())};/*!
  * vue-router v4.1.6
  * (c) 2022 Eduardo San Martin Morote
  * @license MIT
  */const Es=typeof window<"u";function LA(t){return t.__esModule||t[Symbol.toStringTag]==="Module"}const be=Object.assign;function qh(t,e){const n={};for(const r in e){const i=e[r];n[r]=In(i)?i.map(t):t(i)}return n}const ra=()=>{},In=Array.isArray,MA=/\/$/,FA=t=>t.replace(MA,"");function jh(t,e,n="/"){let r,i={},s="",o="";const a=e.indexOf("#");let c=e.indexOf("?");return a<c&&a>=0&&(c=-1),c>-1&&(r=e.slice(0,c),s=e.slice(c+1,a>-1?a:e.length),i=t(s)),a>-1&&(r=r||e.slice(0,a),o=e.slice(a,e.length)),r=$A(r!=null?r:e,n),{fullPath:r+(s&&"?")+s+o,path:r,query:i,hash:o}}function UA(t,e){const n=e.query?t(e.query):"";return e.path+(n&&"?")+n+(e.hash||"")}function py(t,e){return!e||!t.toLowerCase().startsWith(e.toLowerCase())?t:t.slice(e.length)||"/"}function VA(t,e,n){const r=e.matched.length-1,i=n.matched.length-1;return r>-1&&r===i&&Ks(e.matched[r],n.matched[i])&&lb(e.params,n.params)&&t(e.query)===t(n.query)&&e.hash===n.hash}function Ks(t,e){return(t.aliasOf||t)===(e.aliasOf||e)}function lb(t,e){if(Object.keys(t).length!==Object.keys(e).length)return!1;for(const n in t)if(!BA(t[n],e[n]))return!1;return!0}function BA(t,e){return In(t)?my(t,e):In(e)?my(e,t):t===e}function my(t,e){return In(e)?t.length===e.length&&t.every((n,r)=>n===e[r]):t.length===1&&t[0]===e}function $A(t,e){if(t.startsWith("/"))return t;if(!t)return e;const n=e.split("/"),r=t.split("/");let i=n.length-1,s,o;for(s=0;s<r.length;s++)if(o=r[s],o!==".")if(o==="..")i>1&&i--;else break;return n.slice(0,i).join("/")+"/"+r.slice(s-(s===r.length?1:0)).join("/")}var Sa;(function(t){t.pop="pop",t.push="push"})(Sa||(Sa={}));var ia;(function(t){t.back="back",t.forward="forward",t.unknown=""})(ia||(ia={}));function qA(t){if(!t)if(Es){const e=document.querySelector("base");t=e&&e.getAttribute("href")||"/",t=t.replace(/^\w+:\/\/[^\/]+/,"")}else t="/";return t[0]!=="/"&&t[0]!=="#"&&(t="/"+t),FA(t)}const jA=/^[^#]+#/;function zA(t,e){return t.replace(jA,"#")+e}function HA(t,e){const n=document.documentElement.getBoundingClientRect(),r=t.getBoundingClientRect();return{behavior:e.behavior,left:r.left-n.left-(e.left||0),top:r.top-n.top-(e.top||0)}}const Nl=()=>({left:window.pageXOffset,top:window.pageYOffset});function KA(t){let e;if("el"in t){const n=t.el,r=typeof n=="string"&&n.startsWith("#"),i=typeof n=="string"?r?document.getElementById(n.slice(1)):document.querySelector(n):n;if(!i)return;e=HA(i,t)}else e=t;"scrollBehavior"in document.documentElement.style?window.scrollTo(e):window.scrollTo(e.left!=null?e.left:window.pageXOffset,e.top!=null?e.top:window.pageYOffset)}function gy(t,e){return(history.state?history.state.position-e:-1)+t}const Vd=new Map;function WA(t,e){Vd.set(t,e)}function GA(t){const e=Vd.get(t);return Vd.delete(t),e}let YA=()=>location.protocol+"//"+location.host;function hb(t,e){const{pathname:n,search:r,hash:i}=e,s=t.indexOf("#");if(s>-1){let a=i.includes(t.slice(s))?t.slice(s).length:1,c=i.slice(a);return c[0]!=="/"&&(c="/"+c),py(c,"")}return py(n,t)+r+i}function QA(t,e,n,r){let i=[],s=[],o=null;const a=({state:d})=>{const f=hb(t,location),g=n.value,y=e.value;let E=0;if(d){if(n.value=f,e.value=d,o&&o===g){o=null;return}E=y?d.position-y.position:0}else r(f);i.forEach(v=>{v(n.value,g,{delta:E,type:Sa.pop,direction:E?E>0?ia.forward:ia.back:ia.unknown})})};function c(){o=n.value}function u(d){i.push(d);const f=()=>{const g=i.indexOf(d);g>-1&&i.splice(g,1)};return s.push(f),f}function l(){const{history:d}=window;!d.state||d.replaceState(be({},d.state,{scroll:Nl()}),"")}function h(){for(const d of s)d();s=[],window.removeEventListener("popstate",a),window.removeEventListener("beforeunload",l)}return window.addEventListener("popstate",a),window.addEventListener("beforeunload",l),{pauseListeners:c,listen:u,destroy:h}}function yy(t,e,n,r=!1,i=!1){return{back:t,current:e,forward:n,replaced:r,position:window.history.length,scroll:i?Nl():null}}function XA(t){const{history:e,location:n}=window,r={value:hb(t,n)},i={value:e.state};i.value||s(r.value,{back:null,current:r.value,forward:null,position:e.length-1,replaced:!0,scroll:null},!0);function s(c,u,l){const h=t.indexOf("#"),d=h>-1?(n.host&&document.querySelector("base")?t:t.slice(h))+c:YA()+t+c;try{e[l?"replaceState":"pushState"](u,"",d),i.value=u}catch(f){console.error(f),n[l?"replace":"assign"](d)}}function o(c,u){const l=be({},e.state,yy(i.value.back,c,i.value.forward,!0),u,{position:i.value.position});s(c,l,!0),r.value=c}function a(c,u){const l=be({},i.value,e.state,{forward:c,scroll:Nl()});s(l.current,l,!0);const h=be({},yy(r.value,c,null),{position:l.position+1},u);s(c,h,!1),r.value=c}return{location:r,state:i,push:a,replace:o}}function JA(t){t=qA(t);const e=XA(t),n=QA(t,e.state,e.location,e.replace);function r(s,o=!0){o||n.pauseListeners(),history.go(s)}const i=be({location:"",base:t,go:r,createHref:zA.bind(null,t)},e,n);return Object.defineProperty(i,"location",{enumerable:!0,get:()=>e.location.value}),Object.defineProperty(i,"state",{enumerable:!0,get:()=>e.state.value}),i}function ZA(t){return typeof t=="string"||t&&typeof t=="object"}function db(t){return typeof t=="string"||typeof t=="symbol"}const Sr={path:"/",name:void 0,params:{},query:{},hash:"",fullPath:"/",matched:[],meta:{},redirectedFrom:void 0},fb=Symbol("");var vy;(function(t){t[t.aborted=4]="aborted",t[t.cancelled=8]="cancelled",t[t.duplicated=16]="duplicated"})(vy||(vy={}));function Ws(t,e){return be(new Error,{type:t,[fb]:!0},e)}function Wn(t,e){return t instanceof Error&&fb in t&&(e==null||!!(t.type&e))}const wy="[^/]+?",eC={sensitive:!1,strict:!1,start:!0,end:!0},tC=/[.+*?^${}()[\]/\\]/g;function nC(t,e){const n=be({},eC,e),r=[];let i=n.start?"^":"";const s=[];for(const u of t){const l=u.length?[]:[90];n.strict&&!u.length&&(i+="/");for(let h=0;h<u.length;h++){const d=u[h];let f=40+(n.sensitive?.25:0);if(d.type===0)h||(i+="/"),i+=d.value.replace(tC,"\\$&"),f+=40;else if(d.type===1){const{value:g,repeatable:y,optional:E,regexp:v}=d;s.push({name:g,repeatable:y,optional:E});const I=v||wy;if(I!==wy){f+=10;try{new RegExp(`(${I})`)}catch(x){throw new Error(`Invalid custom RegExp for param "${g}" (${I}): `+x.message)}}let b=y?`((?:${I})(?:/(?:${I}))*)`:`(${I})`;h||(b=E&&u.length<2?`(?:/${b})`:"/"+b),E&&(b+="?"),i+=b,f+=20,E&&(f+=-8),y&&(f+=-20),I===".*"&&(f+=-50)}l.push(f)}r.push(l)}if(n.strict&&n.end){const u=r.length-1;r[u][r[u].length-1]+=.7000000000000001}n.strict||(i+="/?"),n.end?i+="$":n.strict&&(i+="(?:/|$)");const o=new RegExp(i,n.sensitive?"":"i");function a(u){const l=u.match(o),h={};if(!l)return null;for(let d=1;d<l.length;d++){const f=l[d]||"",g=s[d-1];h[g.name]=f&&g.repeatable?f.split("/"):f}return h}function c(u){let l="",h=!1;for(const d of t){(!h||!l.endsWith("/"))&&(l+="/"),h=!1;for(const f of d)if(f.type===0)l+=f.value;else if(f.type===1){const{value:g,repeatable:y,optional:E}=f,v=g in u?u[g]:"";if(In(v)&&!y)throw new Error(`Provided param "${g}" is an array but it is not repeatable (* or + modifiers)`);const I=In(v)?v.join("/"):v;if(!I)if(E)d.length<2&&(l.endsWith("/")?l=l.slice(0,-1):h=!0);else throw new Error(`Missing required param "${g}"`);l+=I}}return l||"/"}return{re:o,score:r,keys:s,parse:a,stringify:c}}function rC(t,e){let n=0;for(;n<t.length&&n<e.length;){const r=e[n]-t[n];if(r)return r;n++}return t.length<e.length?t.length===1&&t[0]===40+40?-1:1:t.length>e.length?e.length===1&&e[0]===40+40?1:-1:0}function iC(t,e){let n=0;const r=t.score,i=e.score;for(;n<r.length&&n<i.length;){const s=rC(r[n],i[n]);if(s)return s;n++}if(Math.abs(i.length-r.length)===1){if(_y(r))return 1;if(_y(i))return-1}return i.length-r.length}function _y(t){const e=t[t.length-1];return t.length>0&&e[e.length-1]<0}const sC={type:0,value:""},oC=/[a-zA-Z0-9_]/;function aC(t){if(!t)return[[]];if(t==="/")return[[sC]];if(!t.startsWith("/"))throw new Error(`Invalid path "${t}"`);function e(f){throw new Error(`ERR (${n})/"${u}": ${f}`)}let n=0,r=n;const i=[];let s;function o(){s&&i.push(s),s=[]}let a=0,c,u="",l="";function h(){!u||(n===0?s.push({type:0,value:u}):n===1||n===2||n===3?(s.length>1&&(c==="*"||c==="+")&&e(`A repeatable param (${u}) must be alone in its segment. eg: '/:ids+.`),s.push({type:1,value:u,regexp:l,repeatable:c==="*"||c==="+",optional:c==="*"||c==="?"})):e("Invalid state to consume buffer"),u="")}function d(){u+=c}for(;a<t.length;){if(c=t[a++],c==="\\"&&n!==2){r=n,n=4;continue}switch(n){case 0:c==="/"?(u&&h(),o()):c===":"?(h(),n=1):d();break;case 4:d(),n=r;break;case 1:c==="("?n=2:oC.test(c)?d():(h(),n=0,c!=="*"&&c!=="?"&&c!=="+"&&a--);break;case 2:c===")"?l[l.length-1]=="\\"?l=l.slice(0,-1)+c:n=3:l+=c;break;case 3:h(),n=0,c!=="*"&&c!=="?"&&c!=="+"&&a--,l="";break;default:e("Unknown state");break}}return n===2&&e(`Unfinished custom RegExp for param "${u}"`),h(),o(),i}function cC(t,e,n){const r=nC(aC(t.path),n),i=be(r,{record:t,parent:e,children:[],alias:[]});return e&&!i.record.aliasOf==!e.record.aliasOf&&e.children.push(i),i}function uC(t,e){const n=[],r=new Map;e=Ey({strict:!1,end:!0,sensitive:!1},e);function i(l){return r.get(l)}function s(l,h,d){const f=!d,g=lC(l);g.aliasOf=d&&d.record;const y=Ey(e,l),E=[g];if("alias"in l){const b=typeof l.alias=="string"?[l.alias]:l.alias;for(const x of b)E.push(be({},g,{components:d?d.record.components:g.components,path:x,aliasOf:d?d.record:g}))}let v,I;for(const b of E){const{path:x}=b;if(h&&x[0]!=="/"){const M=h.record.path,z=M[M.length-1]==="/"?"":"/";b.path=h.record.path+(x&&z+x)}if(v=cC(b,h,y),d?d.alias.push(v):(I=I||v,I!==v&&I.alias.push(v),f&&l.name&&!Iy(v)&&o(l.name)),g.children){const M=g.children;for(let z=0;z<M.length;z++)s(M[z],v,d&&d.children[z])}d=d||v,(v.record.components&&Object.keys(v.record.components).length||v.record.name||v.record.redirect)&&c(v)}return I?()=>{o(I)}:ra}function o(l){if(db(l)){const h=r.get(l);h&&(r.delete(l),n.splice(n.indexOf(h),1),h.children.forEach(o),h.alias.forEach(o))}else{const h=n.indexOf(l);h>-1&&(n.splice(h,1),l.record.name&&r.delete(l.record.name),l.children.forEach(o),l.alias.forEach(o))}}function a(){return n}function c(l){let h=0;for(;h<n.length&&iC(l,n[h])>=0&&(l.record.path!==n[h].record.path||!pb(l,n[h]));)h++;n.splice(h,0,l),l.record.name&&!Iy(l)&&r.set(l.record.name,l)}function u(l,h){let d,f={},g,y;if("name"in l&&l.name){if(d=r.get(l.name),!d)throw Ws(1,{location:l});y=d.record.name,f=be(by(h.params,d.keys.filter(I=>!I.optional).map(I=>I.name)),l.params&&by(l.params,d.keys.map(I=>I.name))),g=d.stringify(f)}else if("path"in l)g=l.path,d=n.find(I=>I.re.test(g)),d&&(f=d.parse(g),y=d.record.name);else{if(d=h.name?r.get(h.name):n.find(I=>I.re.test(h.path)),!d)throw Ws(1,{location:l,currentLocation:h});y=d.record.name,f=be({},h.params,l.params),g=d.stringify(f)}const E=[];let v=d;for(;v;)E.unshift(v.record),v=v.parent;return{name:y,path:g,params:f,matched:E,meta:dC(E)}}return t.forEach(l=>s(l)),{addRoute:s,resolve:u,removeRoute:o,getRoutes:a,getRecordMatcher:i}}function by(t,e){const n={};for(const r of e)r in t&&(n[r]=t[r]);return n}function lC(t){return{path:t.path,redirect:t.redirect,name:t.name,meta:t.meta||{},aliasOf:void 0,beforeEnter:t.beforeEnter,props:hC(t),children:t.children||[],instances:{},leaveGuards:new Set,updateGuards:new Set,enterCallbacks:{},components:"components"in t?t.components||null:t.component&&{default:t.component}}}function hC(t){const e={},n=t.props||!1;if("component"in t)e.default=n;else for(const r in t.components)e[r]=typeof n=="boolean"?n:n[r];return e}function Iy(t){for(;t;){if(t.record.aliasOf)return!0;t=t.parent}return!1}function dC(t){return t.reduce((e,n)=>be(e,n.meta),{})}function Ey(t,e){const n={};for(const r in t)n[r]=r in e?e[r]:t[r];return n}function pb(t,e){return e.children.some(n=>n===t||pb(t,n))}const mb=/#/g,fC=/&/g,pC=/\//g,mC=/=/g,gC=/\?/g,gb=/\+/g,yC=/%5B/g,vC=/%5D/g,yb=/%5E/g,wC=/%60/g,vb=/%7B/g,_C=/%7C/g,wb=/%7D/g,bC=/%20/g;function mp(t){return encodeURI(""+t).replace(_C,"|").replace(yC,"[").replace(vC,"]")}function IC(t){return mp(t).replace(vb,"{").replace(wb,"}").replace(yb,"^")}function Bd(t){return mp(t).replace(gb,"%2B").replace(bC,"+").replace(mb,"%23").replace(fC,"%26").replace(wC,"`").replace(vb,"{").replace(wb,"}").replace(yb,"^")}function EC(t){return Bd(t).replace(mC,"%3D")}function TC(t){return mp(t).replace(mb,"%23").replace(gC,"%3F")}function SC(t){return t==null?"":TC(t).replace(pC,"%2F")}function Mu(t){try{return decodeURIComponent(""+t)}catch{}return""+t}function kC(t){const e={};if(t===""||t==="?")return e;const r=(t[0]==="?"?t.slice(1):t).split("&");for(let i=0;i<r.length;++i){const s=r[i].replace(gb," "),o=s.indexOf("="),a=Mu(o<0?s:s.slice(0,o)),c=o<0?null:Mu(s.slice(o+1));if(a in e){let u=e[a];In(u)||(u=e[a]=[u]),u.push(c)}else e[a]=c}return e}function Ty(t){let e="";for(let n in t){const r=t[n];if(n=EC(n),r==null){r!==void 0&&(e+=(e.length?"&":"")+n);continue}(In(r)?r.map(s=>s&&Bd(s)):[r&&Bd(r)]).forEach(s=>{s!==void 0&&(e+=(e.length?"&":"")+n,s!=null&&(e+="="+s))})}return e}function AC(t){const e={};for(const n in t){const r=t[n];r!==void 0&&(e[n]=In(r)?r.map(i=>i==null?null:""+i):r==null?r:""+r)}return e}const CC=Symbol(""),Sy=Symbol(""),Pl=Symbol(""),_b=Symbol(""),$d=Symbol("");function Do(){let t=[];function e(r){return t.push(r),()=>{const i=t.indexOf(r);i>-1&&t.splice(i,1)}}function n(){t=[]}return{add:e,list:()=>t,reset:n}}function Pr(t,e,n,r,i){const s=r&&(r.enterCallbacks[i]=r.enterCallbacks[i]||[]);return()=>new Promise((o,a)=>{const c=h=>{h===!1?a(Ws(4,{from:n,to:e})):h instanceof Error?a(h):ZA(h)?a(Ws(2,{from:e,to:h})):(s&&r.enterCallbacks[i]===s&&typeof h=="function"&&s.push(h),o())},u=t.call(r&&r.instances[i],e,n,c);let l=Promise.resolve(u);t.length<3&&(l=l.then(c)),l.catch(h=>a(h))})}function zh(t,e,n,r){const i=[];for(const s of t)for(const o in s.components){let a=s.components[o];if(!(e!=="beforeRouteEnter"&&!s.instances[o]))if(RC(a)){const u=(a.__vccOpts||a)[e];u&&i.push(Pr(u,n,r,s,o))}else{let c=a();i.push(()=>c.then(u=>{if(!u)return Promise.reject(new Error(`Couldn't resolve component "${o}" at "${s.path}"`));const l=LA(u)?u.default:u;s.components[o]=l;const d=(l.__vccOpts||l)[e];return d&&Pr(d,n,r,s,o)()}))}}return i}function RC(t){return typeof t=="object"||"displayName"in t||"props"in t||"__vccOpts"in t}function ky(t){const e=Vn(Pl),n=Vn(_b),r=$e(()=>e.resolve(Os(t.to))),i=$e(()=>{const{matched:c}=r.value,{length:u}=c,l=c[u-1],h=n.matched;if(!l||!h.length)return-1;const d=h.findIndex(Ks.bind(null,l));if(d>-1)return d;const f=Ay(c[u-2]);return u>1&&Ay(l)===f&&h[h.length-1].path!==f?h.findIndex(Ks.bind(null,c[u-2])):d}),s=$e(()=>i.value>-1&&DC(n.params,r.value.params)),o=$e(()=>i.value>-1&&i.value===n.matched.length-1&&lb(n.params,r.value.params));function a(c={}){return PC(c)?e[Os(t.replace)?"replace":"push"](Os(t.to)).catch(ra):Promise.resolve()}return{route:r,href:$e(()=>r.value.href),isActive:s,isExactActive:o,navigate:a}}const xC=ic({name:"RouterLink",compatConfig:{MODE:3},props:{to:{type:[String,Object],required:!0},replace:Boolean,activeClass:String,exactActiveClass:String,custom:Boolean,ariaCurrentValue:{type:String,default:"page"}},useLink:ky,setup(t,{slots:e}){const n=rc(ky(t)),{options:r}=Vn(Pl),i=$e(()=>({[Cy(t.activeClass,r.linkActiveClass,"router-link-active")]:n.isActive,[Cy(t.exactActiveClass,r.linkExactActiveClass,"router-link-exact-active")]:n.isExactActive}));return()=>{const s=e.default&&e.default(n);return t.custom?s:sc("a",{"aria-current":n.isExactActive?t.ariaCurrentValue:null,href:n.href,onClick:n.navigate,class:i.value},s)}}}),NC=xC;function PC(t){if(!(t.metaKey||t.altKey||t.ctrlKey||t.shiftKey)&&!t.defaultPrevented&&!(t.button!==void 0&&t.button!==0)){if(t.currentTarget&&t.currentTarget.getAttribute){const e=t.currentTarget.getAttribute("target");if(/\b_blank\b/i.test(e))return}return t.preventDefault&&t.preventDefault(),!0}}function DC(t,e){for(const n in e){const r=e[n],i=t[n];if(typeof r=="string"){if(r!==i)return!1}else if(!In(i)||i.length!==r.length||r.some((s,o)=>s!==i[o]))return!1}return!0}function Ay(t){return t?t.aliasOf?t.aliasOf.path:t.path:""}const Cy=(t,e,n)=>t!=null?t:e!=null?e:n,OC=ic({name:"RouterView",inheritAttrs:!1,props:{name:{type:String,default:"default"},route:Object},compatConfig:{MODE:3},setup(t,{attrs:e,slots:n}){const r=Vn($d),i=$e(()=>t.route||r.value),s=Vn(Sy,0),o=$e(()=>{let u=Os(s);const{matched:l}=i.value;let h;for(;(h=l[u])&&!h.components;)u++;return u}),a=$e(()=>i.value.matched[o.value]);mu(Sy,$e(()=>o.value+1)),mu(CC,a),mu($d,i);const c=qS();return ea(()=>[c.value,a.value,t.name],([u,l,h],[d,f,g])=>{l&&(l.instances[h]=u,f&&f!==l&&u&&u===d&&(l.leaveGuards.size||(l.leaveGuards=f.leaveGuards),l.updateGuards.size||(l.updateGuards=f.updateGuards))),u&&l&&(!f||!Ks(l,f)||!d)&&(l.enterCallbacks[h]||[]).forEach(y=>y(u))},{flush:"post"}),()=>{const u=i.value,l=t.name,h=a.value,d=h&&h.components[l];if(!d)return Ry(n.default,{Component:d,route:u});const f=h.props[l],g=f?f===!0?u.params:typeof f=="function"?f(u):f:null,E=sc(d,be({},g,e,{onVnodeUnmounted:v=>{v.component.isUnmounted&&(h.instances[l]=null)},ref:c}));return Ry(n.default,{Component:E,route:u})||E}}});function Ry(t,e){if(!t)return null;const n=t(e);return n.length===1?n[0]:n}const LC=OC;function MC(t){const e=uC(t.routes,t),n=t.parseQuery||kC,r=t.stringifyQuery||Ty,i=t.history,s=Do(),o=Do(),a=Do(),c=jS(Sr);let u=Sr;Es&&t.scrollBehavior&&"scrollRestoration"in history&&(history.scrollRestoration="manual");const l=qh.bind(null,k=>""+k),h=qh.bind(null,SC),d=qh.bind(null,Mu);function f(k,q){let V,Z;return db(k)?(V=e.getRecordMatcher(k),Z=q):Z=k,e.addRoute(Z,V)}function g(k){const q=e.getRecordMatcher(k);q&&e.removeRoute(q)}function y(){return e.getRoutes().map(k=>k.record)}function E(k){return!!e.getRecordMatcher(k)}function v(k,q){if(q=be({},q||c.value),typeof k=="string"){const p=jh(n,k,q.path),m=e.resolve({path:p.path},q),T=i.createHref(p.fullPath);return be(p,m,{params:d(m.params),hash:Mu(p.hash),redirectedFrom:void 0,href:T})}let V;if("path"in k)V=be({},k,{path:jh(n,k.path,q.path).path});else{const p=be({},k.params);for(const m in p)p[m]==null&&delete p[m];V=be({},k,{params:h(k.params)}),q.params=h(q.params)}const Z=e.resolve(V,q),ge=k.hash||"";Z.params=l(d(Z.params));const Be=UA(r,be({},k,{hash:IC(ge),path:Z.path})),le=i.createHref(Be);return be({fullPath:Be,hash:ge,query:r===Ty?AC(k.query):k.query||{}},Z,{redirectedFrom:void 0,href:le})}function I(k){return typeof k=="string"?jh(n,k,c.value.path):be({},k)}function b(k,q){if(u!==k)return Ws(8,{from:q,to:k})}function x(k){return ne(k)}function M(k){return x(be(I(k),{replace:!0}))}function z(k){const q=k.matched[k.matched.length-1];if(q&&q.redirect){const{redirect:V}=q;let Z=typeof V=="function"?V(k):V;return typeof Z=="string"&&(Z=Z.includes("?")||Z.includes("#")?Z=I(Z):{path:Z},Z.params={}),be({query:k.query,hash:k.hash,params:"path"in Z?{}:k.params},Z)}}function ne(k,q){const V=u=v(k),Z=c.value,ge=k.state,Be=k.force,le=k.replace===!0,p=z(V);if(p)return ne(be(I(p),{state:typeof p=="object"?be({},ge,p.state):ge,force:Be,replace:le}),q||V);const m=V;m.redirectedFrom=q;let T;return!Be&&VA(r,Z,V)&&(T=Ws(16,{to:m,from:Z}),hi(Z,Z,!0,!1)),(T?Promise.resolve(T):oe(m,Z)).catch(S=>Wn(S)?Wn(S,2)?S:ln(S):ke(S,m,Z)).then(S=>{if(S){if(Wn(S,2))return ne(be({replace:le},I(S.to),{state:typeof S.to=="object"?be({},ge,S.to.state):ge,force:Be}),q||m)}else S=st(m,Z,!0,le,ge);return we(m,Z,S),S})}function H(k,q){const V=b(k,q);return V?Promise.reject(V):Promise.resolve()}function oe(k,q){let V;const[Z,ge,Be]=FC(k,q);V=zh(Z.reverse(),"beforeRouteLeave",k,q);for(const p of Z)p.leaveGuards.forEach(m=>{V.push(Pr(m,k,q))});const le=H.bind(null,k,q);return V.push(le),ys(V).then(()=>{V=[];for(const p of s.list())V.push(Pr(p,k,q));return V.push(le),ys(V)}).then(()=>{V=zh(ge,"beforeRouteUpdate",k,q);for(const p of ge)p.updateGuards.forEach(m=>{V.push(Pr(m,k,q))});return V.push(le),ys(V)}).then(()=>{V=[];for(const p of k.matched)if(p.beforeEnter&&!q.matched.includes(p))if(In(p.beforeEnter))for(const m of p.beforeEnter)V.push(Pr(m,k,q));else V.push(Pr(p.beforeEnter,k,q));return V.push(le),ys(V)}).then(()=>(k.matched.forEach(p=>p.enterCallbacks={}),V=zh(Be,"beforeRouteEnter",k,q),V.push(le),ys(V))).then(()=>{V=[];for(const p of o.list())V.push(Pr(p,k,q));return V.push(le),ys(V)}).catch(p=>Wn(p,8)?p:Promise.reject(p))}function we(k,q,V){for(const Z of a.list())Z(k,q,V)}function st(k,q,V,Z,ge){const Be=b(k,q);if(Be)return Be;const le=q===Sr,p=Es?history.state:{};V&&(Z||le?i.replace(k.fullPath,be({scroll:le&&p&&p.scroll},ge)):i.push(k.fullPath,ge)),c.value=k,hi(k,q,V,le),ln()}let K;function Ce(){K||(K=i.listen((k,q,V)=>{if(!Mc.listening)return;const Z=v(k),ge=z(Z);if(ge){ne(be(ge,{replace:!0}),Z).catch(ra);return}u=Z;const Be=c.value;Es&&WA(gy(Be.fullPath,V.delta),Nl()),oe(Z,Be).catch(le=>Wn(le,12)?le:Wn(le,2)?(ne(le.to,Z).then(p=>{Wn(p,20)&&!V.delta&&V.type===Sa.pop&&i.go(-1,!1)}).catch(ra),Promise.reject()):(V.delta&&i.go(-V.delta,!1),ke(le,Z,Be))).then(le=>{le=le||st(Z,Be,!1),le&&(V.delta&&!Wn(le,8)?i.go(-V.delta,!1):V.type===Sa.pop&&Wn(le,20)&&i.go(-1,!1)),we(Z,Be,le)}).catch(ra)}))}let mt=Do(),_r=Do(),Ve;function ke(k,q,V){ln(k);const Z=_r.list();return Z.length?Z.forEach(ge=>ge(k,q,V)):console.error(k),Promise.reject(k)}function Ee(){return Ve&&c.value!==Sr?Promise.resolve():new Promise((k,q)=>{mt.add([k,q])})}function ln(k){return Ve||(Ve=!k,Ce(),mt.list().forEach(([q,V])=>k?V(k):q()),mt.reset()),k}function hi(k,q,V,Z){const{scrollBehavior:ge}=t;if(!Es||!ge)return Promise.resolve();const Be=!V&&GA(gy(k.fullPath,0))||(Z||!V)&&history.state&&history.state.scroll||null;return D_().then(()=>ge(k,q,Be)).then(le=>le&&KA(le)).catch(le=>ke(le,k,q))}const hn=k=>i.go(k);let Ut;const ms=new Set,Mc={currentRoute:c,listening:!0,addRoute:f,removeRoute:g,hasRoute:E,getRoutes:y,resolve:v,options:t,push:x,replace:M,go:hn,back:()=>hn(-1),forward:()=>hn(1),beforeEach:s.add,beforeResolve:o.add,afterEach:a.add,onError:_r.add,isReady:Ee,install(k){const q=this;k.component("RouterLink",NC),k.component("RouterView",LC),k.config.globalProperties.$router=q,Object.defineProperty(k.config.globalProperties,"$route",{enumerable:!0,get:()=>Os(c)}),Es&&!Ut&&c.value===Sr&&(Ut=!0,x(i.location).catch(ge=>{}));const V={};for(const ge in Sr)V[ge]=$e(()=>c.value[ge]);k.provide(Pl,q),k.provide(_b,rc(V)),k.provide($d,c);const Z=k.unmount;ms.add(k),k.unmount=function(){ms.delete(k),ms.size<1&&(u=Sr,K&&K(),K=null,c.value=Sr,Ut=!1,Ve=!1),Z()}}};return Mc}function ys(t){return t.reduce((e,n)=>e.then(()=>n()),Promise.resolve())}function FC(t,e){const n=[],r=[],i=[],s=Math.max(e.matched.length,t.matched.length);for(let o=0;o<s;o++){const a=e.matched[o];a&&(t.matched.find(u=>Ks(u,a))?r.push(a):n.push(a));const c=t.matched[o];c&&(e.matched.find(u=>Ks(u,c))||i.push(c))}return[n,r,i]}function v3(){return Vn(Pl)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 *//**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const bb=function(t){const e=[];let n=0;for(let r=0;r<t.length;r++){let i=t.charCodeAt(r);i<128?e[n++]=i:i<2048?(e[n++]=i>>6|192,e[n++]=i&63|128):(i&64512)===55296&&r+1<t.length&&(t.charCodeAt(r+1)&64512)===56320?(i=65536+((i&1023)<<10)+(t.charCodeAt(++r)&1023),e[n++]=i>>18|240,e[n++]=i>>12&63|128,e[n++]=i>>6&63|128,e[n++]=i&63|128):(e[n++]=i>>12|224,e[n++]=i>>6&63|128,e[n++]=i&63|128)}return e},UC=function(t){const e=[];let n=0,r=0;for(;n<t.length;){const i=t[n++];if(i<128)e[r++]=String.fromCharCode(i);else if(i>191&&i<224){const s=t[n++];e[r++]=String.fromCharCode((i&31)<<6|s&63)}else if(i>239&&i<365){const s=t[n++],o=t[n++],a=t[n++],c=((i&7)<<18|(s&63)<<12|(o&63)<<6|a&63)-65536;e[r++]=String.fromCharCode(55296+(c>>10)),e[r++]=String.fromCharCode(56320+(c&1023))}else{const s=t[n++],o=t[n++];e[r++]=String.fromCharCode((i&15)<<12|(s&63)<<6|o&63)}}return e.join("")},Ib={byteToCharMap_:null,charToByteMap_:null,byteToCharMapWebSafe_:null,charToByteMapWebSafe_:null,ENCODED_VALS_BASE:"ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",get ENCODED_VALS(){return this.ENCODED_VALS_BASE+"+/="},get ENCODED_VALS_WEBSAFE(){return this.ENCODED_VALS_BASE+"-_."},HAS_NATIVE_SUPPORT:typeof atob=="function",encodeByteArray(t,e){if(!Array.isArray(t))throw Error("encodeByteArray takes an array as a parameter");this.init_();const n=e?this.byteToCharMapWebSafe_:this.byteToCharMap_,r=[];for(let i=0;i<t.length;i+=3){const s=t[i],o=i+1<t.length,a=o?t[i+1]:0,c=i+2<t.length,u=c?t[i+2]:0,l=s>>2,h=(s&3)<<4|a>>4;let d=(a&15)<<2|u>>6,f=u&63;c||(f=64,o||(d=64)),r.push(n[l],n[h],n[d],n[f])}return r.join("")},encodeString(t,e){return this.HAS_NATIVE_SUPPORT&&!e?btoa(t):this.encodeByteArray(bb(t),e)},decodeString(t,e){return this.HAS_NATIVE_SUPPORT&&!e?atob(t):UC(this.decodeStringToByteArray(t,e))},decodeStringToByteArray(t,e){this.init_();const n=e?this.charToByteMapWebSafe_:this.charToByteMap_,r=[];for(let i=0;i<t.length;){const s=n[t.charAt(i++)],a=i<t.length?n[t.charAt(i)]:0;++i;const u=i<t.length?n[t.charAt(i)]:64;++i;const h=i<t.length?n[t.charAt(i)]:64;if(++i,s==null||a==null||u==null||h==null)throw new VC;const d=s<<2|a>>4;if(r.push(d),u!==64){const f=a<<4&240|u>>2;if(r.push(f),h!==64){const g=u<<6&192|h;r.push(g)}}}return r},init_(){if(!this.byteToCharMap_){this.byteToCharMap_={},this.charToByteMap_={},this.byteToCharMapWebSafe_={},this.charToByteMapWebSafe_={};for(let t=0;t<this.ENCODED_VALS.length;t++)this.byteToCharMap_[t]=this.ENCODED_VALS.charAt(t),this.charToByteMap_[this.byteToCharMap_[t]]=t,this.byteToCharMapWebSafe_[t]=this.ENCODED_VALS_WEBSAFE.charAt(t),this.charToByteMapWebSafe_[this.byteToCharMapWebSafe_[t]]=t,t>=this.ENCODED_VALS_BASE.length&&(this.charToByteMap_[this.ENCODED_VALS_WEBSAFE.charAt(t)]=t,this.charToByteMapWebSafe_[this.ENCODED_VALS.charAt(t)]=t)}}};class VC extends Error{constructor(){super(...arguments),this.name="DecodeBase64StringError"}}const BC=function(t){const e=bb(t);return Ib.encodeByteArray(e,!0)},Fu=function(t){return BC(t).replace(/\./g,"")},Eb=function(t){try{return Ib.decodeString(t,!0)}catch(e){console.error("base64Decode failed: ",e)}return null};function Uu(t,e){if(!(e instanceof Object))return e;switch(e.constructor){case Date:const n=e;return new Date(n.getTime());case Object:t===void 0&&(t={});break;case Array:t=[];break;default:return e}for(const n in e)!e.hasOwnProperty(n)||!$C(n)||(t[n]=Uu(t[n],e[n]));return t}function $C(t){return t!=="__proto__"}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function qC(){if(typeof self<"u")return self;if(typeof window<"u")return window;if(typeof global<"u")return global;throw new Error("Unable to locate global object.")}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const jC=()=>qC().__FIREBASE_DEFAULTS__,zC=()=>{if(typeof process>"u"||typeof process.env>"u")return;const t={}.__FIREBASE_DEFAULTS__;if(t)return JSON.parse(t)},HC=()=>{if(typeof document>"u")return;let t;try{t=document.cookie.match(/__FIREBASE_DEFAULTS__=([^;]+)/)}catch{return}const e=t&&Eb(t[1]);return e&&JSON.parse(e)},gp=()=>{try{return jC()||zC()||HC()}catch(t){console.info(`Unable to get __FIREBASE_DEFAULTS__ due to: ${t}`);return}},KC=()=>{var t;return(t=gp())===null||t===void 0?void 0:t.config},WC=t=>{var e;return(e=gp())===null||e===void 0?void 0:e[`_${t}`]};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class GC{constructor(){this.reject=()=>{},this.resolve=()=>{},this.promise=new Promise((e,n)=>{this.resolve=e,this.reject=n})}wrapCallback(e){return(n,r)=>{n?this.reject(n):this.resolve(r),typeof e=="function"&&(this.promise.catch(()=>{}),e.length===1?e(n):e(n,r))}}}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Tb(t,e){if(t.uid)throw new Error('The "uid" field is no longer supported by mockUserToken. Please use "sub" instead for Firebase Auth User ID.');const n={alg:"none",type:"JWT"},r=e||"demo-project",i=t.iat||0,s=t.sub||t.user_id;if(!s)throw new Error("mockUserToken must contain 'sub' or 'user_id' field!");const o=Object.assign({iss:`https://securetoken.google.com/${r}`,aud:r,iat:i,exp:i+3600,auth_time:i,sub:s,user_id:s,firebase:{sign_in_provider:"custom",identities:{}}},t),a="";return[Fu(JSON.stringify(n)),Fu(JSON.stringify(o)),a].join(".")}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function qe(){return typeof navigator<"u"&&typeof navigator.userAgent=="string"?navigator.userAgent:""}function YC(){return typeof window<"u"&&!!(window.cordova||window.phonegap||window.PhoneGap)&&/ios|iphone|ipod|ipad|android|blackberry|iemobile/i.test(qe())}function Dl(){var t;const e=(t=gp())===null||t===void 0?void 0:t.forceEnvironment;if(e==="node")return!0;if(e==="browser")return!1;try{return Object.prototype.toString.call(global.process)==="[object process]"}catch{return!1}}function QC(){return typeof self=="object"&&self.self===self}function Sb(){const t=typeof chrome=="object"?chrome.runtime:typeof browser=="object"?browser.runtime:void 0;return typeof t=="object"&&t.id!==void 0}function yp(){return typeof navigator=="object"&&navigator.product==="ReactNative"}function kb(){const t=qe();return t.indexOf("MSIE ")>=0||t.indexOf("Trident/")>=0}function XC(){return!Dl()&&navigator.userAgent.includes("Safari")&&!navigator.userAgent.includes("Chrome")}function ka(){try{return typeof indexedDB=="object"}catch{return!1}}function JC(){return new Promise((t,e)=>{try{let n=!0;const r="validate-browser-context-for-indexeddb-analytics-module",i=self.indexedDB.open(r);i.onsuccess=()=>{i.result.close(),n||self.indexedDB.deleteDatabase(r),t(!0)},i.onupgradeneeded=()=>{n=!1},i.onerror=()=>{var s;e(((s=i.error)===null||s===void 0?void 0:s.message)||"")}}catch(n){e(n)}})}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const ZC="FirebaseError";class Ct extends Error{constructor(e,n,r){super(n),this.code=e,this.customData=r,this.name=ZC,Object.setPrototypeOf(this,Ct.prototype),Error.captureStackTrace&&Error.captureStackTrace(this,os.prototype.create)}}class os{constructor(e,n,r){this.service=e,this.serviceName=n,this.errors=r}create(e,...n){const r=n[0]||{},i=`${this.service}/${e}`,s=this.errors[e],o=s?eR(s,r):"Error",a=`${this.serviceName}: ${o} (${i}).`;return new Ct(i,a,r)}}function eR(t,e){return t.replace(tR,(n,r)=>{const i=e[r];return i!=null?String(i):`<${r}?>`})}const tR=/\{\$([^}]+)}/g;/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function xy(t,e){return Object.prototype.hasOwnProperty.call(t,e)}function nR(t){for(const e in t)if(Object.prototype.hasOwnProperty.call(t,e))return!1;return!0}function qd(t,e){if(t===e)return!0;const n=Object.keys(t),r=Object.keys(e);for(const i of n){if(!r.includes(i))return!1;const s=t[i],o=e[i];if(Ny(s)&&Ny(o)){if(!qd(s,o))return!1}else if(s!==o)return!1}for(const i of r)if(!n.includes(i))return!1;return!0}function Ny(t){return t!==null&&typeof t=="object"}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function po(t){const e=[];for(const[n,r]of Object.entries(t))Array.isArray(r)?r.forEach(i=>{e.push(encodeURIComponent(n)+"="+encodeURIComponent(i))}):e.push(encodeURIComponent(n)+"="+encodeURIComponent(r));return e.length?"&"+e.join("&"):""}function As(t){const e={};return t.replace(/^\?/,"").split("&").forEach(r=>{if(r){const[i,s]=r.split("=");e[decodeURIComponent(i)]=decodeURIComponent(s)}}),e}function Wo(t){const e=t.indexOf("?");if(!e)return"";const n=t.indexOf("#",e);return t.substring(e,n>0?n:void 0)}function Ab(t,e){const n=new rR(t,e);return n.subscribe.bind(n)}class rR{constructor(e,n){this.observers=[],this.unsubscribes=[],this.observerCount=0,this.task=Promise.resolve(),this.finalized=!1,this.onNoObservers=n,this.task.then(()=>{e(this)}).catch(r=>{this.error(r)})}next(e){this.forEachObserver(n=>{n.next(e)})}error(e){this.forEachObserver(n=>{n.error(e)}),this.close(e)}complete(){this.forEachObserver(e=>{e.complete()}),this.close()}subscribe(e,n,r){let i;if(e===void 0&&n===void 0&&r===void 0)throw new Error("Missing Observer.");iR(e,["next","error","complete"])?i=e:i={next:e,error:n,complete:r},i.next===void 0&&(i.next=Hh),i.error===void 0&&(i.error=Hh),i.complete===void 0&&(i.complete=Hh);const s=this.unsubscribeOne.bind(this,this.observers.length);return this.finalized&&this.task.then(()=>{try{this.finalError?i.error(this.finalError):i.complete()}catch{}}),this.observers.push(i),s}unsubscribeOne(e){this.observers===void 0||this.observers[e]===void 0||(delete this.observers[e],this.observerCount-=1,this.observerCount===0&&this.onNoObservers!==void 0&&this.onNoObservers(this))}forEachObserver(e){if(!this.finalized)for(let n=0;n<this.observers.length;n++)this.sendOne(n,e)}sendOne(e,n){this.task.then(()=>{if(this.observers!==void 0&&this.observers[e]!==void 0)try{n(this.observers[e])}catch(r){typeof console<"u"&&console.error&&console.error(r)}})}close(e){this.finalized||(this.finalized=!0,e!==void 0&&(this.finalError=e),this.task.then(()=>{this.observers=void 0,this.onNoObservers=void 0}))}}function iR(t,e){if(typeof t!="object"||t===null)return!1;for(const n of e)if(n in t&&typeof t[n]=="function")return!0;return!1}function Hh(){}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Y(t){return t&&t._delegate?t._delegate:t}class cn{constructor(e,n,r){this.name=e,this.instanceFactory=n,this.type=r,this.multipleInstances=!1,this.serviceProps={},this.instantiationMode="LAZY",this.onInstanceCreated=null}setInstantiationMode(e){return this.instantiationMode=e,this}setMultipleInstances(e){return this.multipleInstances=e,this}setServiceProps(e){return this.serviceProps=e,this}setInstanceCreatedCallback(e){return this.onInstanceCreated=e,this}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const vi="[DEFAULT]";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class sR{constructor(e,n){this.name=e,this.container=n,this.component=null,this.instances=new Map,this.instancesDeferred=new Map,this.instancesOptions=new Map,this.onInitCallbacks=new Map}get(e){const n=this.normalizeInstanceIdentifier(e);if(!this.instancesDeferred.has(n)){const r=new GC;if(this.instancesDeferred.set(n,r),this.isInitialized(n)||this.shouldAutoInitialize())try{const i=this.getOrInitializeService({instanceIdentifier:n});i&&r.resolve(i)}catch{}}return this.instancesDeferred.get(n).promise}getImmediate(e){var n;const r=this.normalizeInstanceIdentifier(e==null?void 0:e.identifier),i=(n=e==null?void 0:e.optional)!==null&&n!==void 0?n:!1;if(this.isInitialized(r)||this.shouldAutoInitialize())try{return this.getOrInitializeService({instanceIdentifier:r})}catch(s){if(i)return null;throw s}else{if(i)return null;throw Error(`Service ${this.name} is not available`)}}getComponent(){return this.component}setComponent(e){if(e.name!==this.name)throw Error(`Mismatching Component ${e.name} for Provider ${this.name}.`);if(this.component)throw Error(`Component for ${this.name} has already been provided`);if(this.component=e,!!this.shouldAutoInitialize()){if(aR(e))try{this.getOrInitializeService({instanceIdentifier:vi})}catch{}for(const[n,r]of this.instancesDeferred.entries()){const i=this.normalizeInstanceIdentifier(n);try{const s=this.getOrInitializeService({instanceIdentifier:i});r.resolve(s)}catch{}}}}clearInstance(e=vi){this.instancesDeferred.delete(e),this.instancesOptions.delete(e),this.instances.delete(e)}async delete(){const e=Array.from(this.instances.values());await Promise.all([...e.filter(n=>"INTERNAL"in n).map(n=>n.INTERNAL.delete()),...e.filter(n=>"_delete"in n).map(n=>n._delete())])}isComponentSet(){return this.component!=null}isInitialized(e=vi){return this.instances.has(e)}getOptions(e=vi){return this.instancesOptions.get(e)||{}}initialize(e={}){const{options:n={}}=e,r=this.normalizeInstanceIdentifier(e.instanceIdentifier);if(this.isInitialized(r))throw Error(`${this.name}(${r}) has already been initialized`);if(!this.isComponentSet())throw Error(`Component ${this.name} has not been registered yet`);const i=this.getOrInitializeService({instanceIdentifier:r,options:n});for(const[s,o]of this.instancesDeferred.entries()){const a=this.normalizeInstanceIdentifier(s);r===a&&o.resolve(i)}return i}onInit(e,n){var r;const i=this.normalizeInstanceIdentifier(n),s=(r=this.onInitCallbacks.get(i))!==null&&r!==void 0?r:new Set;s.add(e),this.onInitCallbacks.set(i,s);const o=this.instances.get(i);return o&&e(o,i),()=>{s.delete(e)}}invokeOnInitCallbacks(e,n){const r=this.onInitCallbacks.get(n);if(!!r)for(const i of r)try{i(e,n)}catch{}}getOrInitializeService({instanceIdentifier:e,options:n={}}){let r=this.instances.get(e);if(!r&&this.component&&(r=this.component.instanceFactory(this.container,{instanceIdentifier:oR(e),options:n}),this.instances.set(e,r),this.instancesOptions.set(e,n),this.invokeOnInitCallbacks(r,e),this.component.onInstanceCreated))try{this.component.onInstanceCreated(this.container,e,r)}catch{}return r||null}normalizeInstanceIdentifier(e=vi){return this.component?this.component.multipleInstances?e:vi:e}shouldAutoInitialize(){return!!this.component&&this.component.instantiationMode!=="EXPLICIT"}}function oR(t){return t===vi?void 0:t}function aR(t){return t.instantiationMode==="EAGER"}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class cR{constructor(e){this.name=e,this.providers=new Map}addComponent(e){const n=this.getProvider(e.name);if(n.isComponentSet())throw new Error(`Component ${e.name} has already been registered with ${this.name}`);n.setComponent(e)}addOrOverwriteComponent(e){this.getProvider(e.name).isComponentSet()&&this.providers.delete(e.name),this.addComponent(e)}getProvider(e){if(this.providers.has(e))return this.providers.get(e);const n=new sR(e,this);return this.providers.set(e,n),n}getProviders(){return Array.from(this.providers.values())}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const vp=[];var pe;(function(t){t[t.DEBUG=0]="DEBUG",t[t.VERBOSE=1]="VERBOSE",t[t.INFO=2]="INFO",t[t.WARN=3]="WARN",t[t.ERROR=4]="ERROR",t[t.SILENT=5]="SILENT"})(pe||(pe={}));const Cb={debug:pe.DEBUG,verbose:pe.VERBOSE,info:pe.INFO,warn:pe.WARN,error:pe.ERROR,silent:pe.SILENT},uR=pe.INFO,lR={[pe.DEBUG]:"log",[pe.VERBOSE]:"log",[pe.INFO]:"info",[pe.WARN]:"warn",[pe.ERROR]:"error"},hR=(t,e,...n)=>{if(e<t.logLevel)return;const r=new Date().toISOString(),i=lR[e];if(i)console[i](`[${r}]  ${t.name}:`,...n);else throw new Error(`Attempted to log a message with an invalid logType (value: ${e})`)};class Ol{constructor(e){this.name=e,this._logLevel=uR,this._logHandler=hR,this._userLogHandler=null,vp.push(this)}get logLevel(){return this._logLevel}set logLevel(e){if(!(e in pe))throw new TypeError(`Invalid value "${e}" assigned to \`logLevel\``);this._logLevel=e}setLogLevel(e){this._logLevel=typeof e=="string"?Cb[e]:e}get logHandler(){return this._logHandler}set logHandler(e){if(typeof e!="function")throw new TypeError("Value assigned to `logHandler` must be a function");this._logHandler=e}get userLogHandler(){return this._userLogHandler}set userLogHandler(e){this._userLogHandler=e}debug(...e){this._userLogHandler&&this._userLogHandler(this,pe.DEBUG,...e),this._logHandler(this,pe.DEBUG,...e)}log(...e){this._userLogHandler&&this._userLogHandler(this,pe.VERBOSE,...e),this._logHandler(this,pe.VERBOSE,...e)}info(...e){this._userLogHandler&&this._userLogHandler(this,pe.INFO,...e),this._logHandler(this,pe.INFO,...e)}warn(...e){this._userLogHandler&&this._userLogHandler(this,pe.WARN,...e),this._logHandler(this,pe.WARN,...e)}error(...e){this._userLogHandler&&this._userLogHandler(this,pe.ERROR,...e),this._logHandler(this,pe.ERROR,...e)}}function dR(t){vp.forEach(e=>{e.setLogLevel(t)})}function fR(t,e){for(const n of vp){let r=null;e&&e.level&&(r=Cb[e.level]),t===null?n.userLogHandler=null:n.userLogHandler=(i,s,...o)=>{const a=o.map(c=>{if(c==null)return null;if(typeof c=="string")return c;if(typeof c=="number"||typeof c=="boolean")return c.toString();if(c instanceof Error)return c.message;try{return JSON.stringify(c)}catch{return null}}).filter(c=>c).join(" ");s>=(r!=null?r:i.logLevel)&&t({level:pe[s].toLowerCase(),message:a,args:o,type:i.name})}}}const pR=(t,e)=>e.some(n=>t instanceof n);let Py,Dy;function mR(){return Py||(Py=[IDBDatabase,IDBObjectStore,IDBIndex,IDBCursor,IDBTransaction])}function gR(){return Dy||(Dy=[IDBCursor.prototype.advance,IDBCursor.prototype.continue,IDBCursor.prototype.continuePrimaryKey])}const Rb=new WeakMap,jd=new WeakMap,xb=new WeakMap,Kh=new WeakMap,wp=new WeakMap;function yR(t){const e=new Promise((n,r)=>{const i=()=>{t.removeEventListener("success",s),t.removeEventListener("error",o)},s=()=>{n(Vr(t.result)),i()},o=()=>{r(t.error),i()};t.addEventListener("success",s),t.addEventListener("error",o)});return e.then(n=>{n instanceof IDBCursor&&Rb.set(n,t)}).catch(()=>{}),wp.set(e,t),e}function vR(t){if(jd.has(t))return;const e=new Promise((n,r)=>{const i=()=>{t.removeEventListener("complete",s),t.removeEventListener("error",o),t.removeEventListener("abort",o)},s=()=>{n(),i()},o=()=>{r(t.error||new DOMException("AbortError","AbortError")),i()};t.addEventListener("complete",s),t.addEventListener("error",o),t.addEventListener("abort",o)});jd.set(t,e)}let zd={get(t,e,n){if(t instanceof IDBTransaction){if(e==="done")return jd.get(t);if(e==="objectStoreNames")return t.objectStoreNames||xb.get(t);if(e==="store")return n.objectStoreNames[1]?void 0:n.objectStore(n.objectStoreNames[0])}return Vr(t[e])},set(t,e,n){return t[e]=n,!0},has(t,e){return t instanceof IDBTransaction&&(e==="done"||e==="store")?!0:e in t}};function wR(t){zd=t(zd)}function _R(t){return t===IDBDatabase.prototype.transaction&&!("objectStoreNames"in IDBTransaction.prototype)?function(e,...n){const r=t.call(Wh(this),e,...n);return xb.set(r,e.sort?e.sort():[e]),Vr(r)}:gR().includes(t)?function(...e){return t.apply(Wh(this),e),Vr(Rb.get(this))}:function(...e){return Vr(t.apply(Wh(this),e))}}function bR(t){return typeof t=="function"?_R(t):(t instanceof IDBTransaction&&vR(t),pR(t,mR())?new Proxy(t,zd):t)}function Vr(t){if(t instanceof IDBRequest)return yR(t);if(Kh.has(t))return Kh.get(t);const e=bR(t);return e!==t&&(Kh.set(t,e),wp.set(e,t)),e}const Wh=t=>wp.get(t);function IR(t,e,{blocked:n,upgrade:r,blocking:i,terminated:s}={}){const o=indexedDB.open(t,e),a=Vr(o);return r&&o.addEventListener("upgradeneeded",c=>{r(Vr(o.result),c.oldVersion,c.newVersion,Vr(o.transaction))}),n&&o.addEventListener("blocked",()=>n()),a.then(c=>{s&&c.addEventListener("close",()=>s()),i&&c.addEventListener("versionchange",()=>i())}).catch(()=>{}),a}const ER=["get","getKey","getAll","getAllKeys","count"],TR=["put","add","delete","clear"],Gh=new Map;function Oy(t,e){if(!(t instanceof IDBDatabase&&!(e in t)&&typeof e=="string"))return;if(Gh.get(e))return Gh.get(e);const n=e.replace(/FromIndex$/,""),r=e!==n,i=TR.includes(n);if(!(n in(r?IDBIndex:IDBObjectStore).prototype)||!(i||ER.includes(n)))return;const s=async function(o,...a){const c=this.transaction(o,i?"readwrite":"readonly");let u=c.store;return r&&(u=u.index(a.shift())),(await Promise.all([u[n](...a),i&&c.done]))[0]};return Gh.set(e,s),s}wR(t=>({...t,get:(e,n,r)=>Oy(e,n)||t.get(e,n,r),has:(e,n)=>!!Oy(e,n)||t.has(e,n)}));/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class SR{constructor(e){this.container=e}getPlatformInfoString(){return this.container.getProviders().map(n=>{if(kR(n)){const r=n.getImmediate();return`${r.library}/${r.version}`}else return null}).filter(n=>n).join(" ")}}function kR(t){const e=t.getComponent();return(e==null?void 0:e.type)==="VERSION"}const Hd="@firebase/app",Ly="0.9.8";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const zi=new Ol("@firebase/app"),AR="@firebase/app-compat",CR="@firebase/analytics-compat",RR="@firebase/analytics",xR="@firebase/app-check-compat",NR="@firebase/app-check",PR="@firebase/auth",DR="@firebase/auth-compat",OR="@firebase/database",LR="@firebase/database-compat",MR="@firebase/functions",FR="@firebase/functions-compat",UR="@firebase/installations",VR="@firebase/installations-compat",BR="@firebase/messaging",$R="@firebase/messaging-compat",qR="@firebase/performance",jR="@firebase/performance-compat",zR="@firebase/remote-config",HR="@firebase/remote-config-compat",KR="@firebase/storage",WR="@firebase/storage-compat",GR="@firebase/firestore",YR="@firebase/firestore-compat",QR="firebase",XR="9.20.0";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const jr="[DEFAULT]",JR={[Hd]:"fire-core",[AR]:"fire-core-compat",[RR]:"fire-analytics",[CR]:"fire-analytics-compat",[NR]:"fire-app-check",[xR]:"fire-app-check-compat",[PR]:"fire-auth",[DR]:"fire-auth-compat",[OR]:"fire-rtdb",[LR]:"fire-rtdb-compat",[MR]:"fire-fn",[FR]:"fire-fn-compat",[UR]:"fire-iid",[VR]:"fire-iid-compat",[BR]:"fire-fcm",[$R]:"fire-fcm-compat",[qR]:"fire-perf",[jR]:"fire-perf-compat",[zR]:"fire-rc",[HR]:"fire-rc-compat",[KR]:"fire-gcs",[WR]:"fire-gcs-compat",[GR]:"fire-fst",[YR]:"fire-fst-compat","fire-js":"fire-js",[QR]:"fire-js-all"};/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const zr=new Map,Aa=new Map;function Vu(t,e){try{t.container.addComponent(e)}catch(n){zi.debug(`Component ${e.name} failed to register with FirebaseApp ${t.name}`,n)}}function Nb(t,e){t.container.addOrOverwriteComponent(e)}function rr(t){const e=t.name;if(Aa.has(e))return zi.debug(`There were multiple attempts to register component ${e}.`),!1;Aa.set(e,t);for(const n of zr.values())Vu(n,t);return!0}function Pb(t,e){const n=t.container.getProvider("heartbeat").getImmediate({optional:!0});return n&&n.triggerHeartbeat(),t.container.getProvider(e)}function ZR(t,e,n=jr){Pb(t,e).clearInstance(n)}function ex(){Aa.clear()}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const tx={["no-app"]:"No Firebase App '{$appName}' has been created - call Firebase App.initializeApp()",["bad-app-name"]:"Illegal App name: '{$appName}",["duplicate-app"]:"Firebase App named '{$appName}' already exists with different options or config",["app-deleted"]:"Firebase App named '{$appName}' already deleted",["no-options"]:"Need to provide options, when not being deployed to hosting via source.",["invalid-app-argument"]:"firebase.{$appName}() takes either no argument or a Firebase App instance.",["invalid-log-argument"]:"First argument to `onLog` must be null or a function.",["idb-open"]:"Error thrown when opening IndexedDB. Original error: {$originalErrorMessage}.",["idb-get"]:"Error thrown when reading from IndexedDB. Original error: {$originalErrorMessage}.",["idb-set"]:"Error thrown when writing to IndexedDB. Original error: {$originalErrorMessage}.",["idb-delete"]:"Error thrown when deleting from IndexedDB. Original error: {$originalErrorMessage}."},Zn=new os("app","Firebase",tx);/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class nx{constructor(e,n,r){this._isDeleted=!1,this._options=Object.assign({},e),this._config=Object.assign({},n),this._name=n.name,this._automaticDataCollectionEnabled=n.automaticDataCollectionEnabled,this._container=r,this.container.addComponent(new cn("app",()=>this,"PUBLIC"))}get automaticDataCollectionEnabled(){return this.checkDestroyed(),this._automaticDataCollectionEnabled}set automaticDataCollectionEnabled(e){this.checkDestroyed(),this._automaticDataCollectionEnabled=e}get name(){return this.checkDestroyed(),this._name}get options(){return this.checkDestroyed(),this._options}get config(){return this.checkDestroyed(),this._config}get container(){return this._container}get isDeleted(){return this._isDeleted}set isDeleted(e){this._isDeleted=e}checkDestroyed(){if(this.isDeleted)throw Zn.create("app-deleted",{appName:this._name})}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const dr=XR;function _p(t,e={}){let n=t;typeof e!="object"&&(e={name:e});const r=Object.assign({name:jr,automaticDataCollectionEnabled:!1},e),i=r.name;if(typeof i!="string"||!i)throw Zn.create("bad-app-name",{appName:String(i)});if(n||(n=KC()),!n)throw Zn.create("no-options");const s=zr.get(i);if(s){if(qd(n,s.options)&&qd(r,s.config))return s;throw Zn.create("duplicate-app",{appName:i})}const o=new cR(i);for(const c of Aa.values())o.addComponent(c);const a=new nx(n,r,o);return zr.set(i,a),a}function rx(t=jr){const e=zr.get(t);if(!e&&t===jr)return _p();if(!e)throw Zn.create("no-app",{appName:t});return e}function ix(){return Array.from(zr.values())}async function Db(t){const e=t.name;zr.has(e)&&(zr.delete(e),await Promise.all(t.container.getProviders().map(n=>n.delete())),t.isDeleted=!0)}function an(t,e,n){var r;let i=(r=JR[t])!==null&&r!==void 0?r:t;n&&(i+=`-${n}`);const s=i.match(/\s|\//),o=e.match(/\s|\//);if(s||o){const a=[`Unable to register library "${i}" with version "${e}":`];s&&a.push(`library name "${i}" contains illegal characters (whitespace or "/")`),s&&o&&a.push("and"),o&&a.push(`version name "${e}" contains illegal characters (whitespace or "/")`),zi.warn(a.join(" "));return}rr(new cn(`${i}-version`,()=>({library:i,version:e}),"VERSION"))}function Ob(t,e){if(t!==null&&typeof t!="function")throw Zn.create("invalid-log-argument");fR(t,e)}function Lb(t){dR(t)}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const sx="firebase-heartbeat-database",ox=1,Ca="firebase-heartbeat-store";let Yh=null;function Mb(){return Yh||(Yh=IR(sx,ox,{upgrade:(t,e)=>{switch(e){case 0:t.createObjectStore(Ca)}}}).catch(t=>{throw Zn.create("idb-open",{originalErrorMessage:t.message})})),Yh}async function ax(t){try{return(await Mb()).transaction(Ca).objectStore(Ca).get(Fb(t))}catch(e){if(e instanceof Ct)zi.warn(e.message);else{const n=Zn.create("idb-get",{originalErrorMessage:e==null?void 0:e.message});zi.warn(n.message)}}}async function My(t,e){try{const r=(await Mb()).transaction(Ca,"readwrite");return await r.objectStore(Ca).put(e,Fb(t)),r.done}catch(n){if(n instanceof Ct)zi.warn(n.message);else{const r=Zn.create("idb-set",{originalErrorMessage:n==null?void 0:n.message});zi.warn(r.message)}}}function Fb(t){return`${t.name}!${t.options.appId}`}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const cx=1024,ux=30*24*60*60*1e3;class lx{constructor(e){this.container=e,this._heartbeatsCache=null;const n=this.container.getProvider("app").getImmediate();this._storage=new dx(n),this._heartbeatsCachePromise=this._storage.read().then(r=>(this._heartbeatsCache=r,r))}async triggerHeartbeat(){const n=this.container.getProvider("platform-logger").getImmediate().getPlatformInfoString(),r=Fy();if(this._heartbeatsCache===null&&(this._heartbeatsCache=await this._heartbeatsCachePromise),!(this._heartbeatsCache.lastSentHeartbeatDate===r||this._heartbeatsCache.heartbeats.some(i=>i.date===r)))return this._heartbeatsCache.heartbeats.push({date:r,agent:n}),this._heartbeatsCache.heartbeats=this._heartbeatsCache.heartbeats.filter(i=>{const s=new Date(i.date).valueOf();return Date.now()-s<=ux}),this._storage.overwrite(this._heartbeatsCache)}async getHeartbeatsHeader(){if(this._heartbeatsCache===null&&await this._heartbeatsCachePromise,this._heartbeatsCache===null||this._heartbeatsCache.heartbeats.length===0)return"";const e=Fy(),{heartbeatsToSend:n,unsentEntries:r}=hx(this._heartbeatsCache.heartbeats),i=Fu(JSON.stringify({version:2,heartbeats:n}));return this._heartbeatsCache.lastSentHeartbeatDate=e,r.length>0?(this._heartbeatsCache.heartbeats=r,await this._storage.overwrite(this._heartbeatsCache)):(this._heartbeatsCache.heartbeats=[],this._storage.overwrite(this._heartbeatsCache)),i}}function Fy(){return new Date().toISOString().substring(0,10)}function hx(t,e=cx){const n=[];let r=t.slice();for(const i of t){const s=n.find(o=>o.agent===i.agent);if(s){if(s.dates.push(i.date),Uy(n)>e){s.dates.pop();break}}else if(n.push({agent:i.agent,dates:[i.date]}),Uy(n)>e){n.pop();break}r=r.slice(1)}return{heartbeatsToSend:n,unsentEntries:r}}class dx{constructor(e){this.app=e,this._canUseIndexedDBPromise=this.runIndexedDBEnvironmentCheck()}async runIndexedDBEnvironmentCheck(){return ka()?JC().then(()=>!0).catch(()=>!1):!1}async read(){return await this._canUseIndexedDBPromise?await ax(this.app)||{heartbeats:[]}:{heartbeats:[]}}async overwrite(e){var n;if(await this._canUseIndexedDBPromise){const i=await this.read();return My(this.app,{lastSentHeartbeatDate:(n=e.lastSentHeartbeatDate)!==null&&n!==void 0?n:i.lastSentHeartbeatDate,heartbeats:e.heartbeats})}else return}async add(e){var n;if(await this._canUseIndexedDBPromise){const i=await this.read();return My(this.app,{lastSentHeartbeatDate:(n=e.lastSentHeartbeatDate)!==null&&n!==void 0?n:i.lastSentHeartbeatDate,heartbeats:[...i.heartbeats,...e.heartbeats]})}else return}}function Uy(t){return Fu(JSON.stringify({version:2,heartbeats:t})).length}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function fx(t){rr(new cn("platform-logger",e=>new SR(e),"PRIVATE")),rr(new cn("heartbeat",e=>new lx(e),"PRIVATE")),an(Hd,Ly,t),an(Hd,Ly,"esm2017"),an("fire-js","")}fx("");const px=Object.freeze(Object.defineProperty({__proto__:null,SDK_VERSION:dr,_DEFAULT_ENTRY_NAME:jr,_addComponent:Vu,_addOrOverwriteComponent:Nb,_apps:zr,_clearComponents:ex,_components:Aa,_getProvider:Pb,_registerComponent:rr,_removeServiceInstance:ZR,deleteApp:Db,getApp:rx,getApps:ix,initializeApp:_p,onLog:Ob,registerVersion:an,setLogLevel:Lb,FirebaseError:Ct},Symbol.toStringTag,{value:"Module"}));/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class mx{constructor(e,n){this._delegate=e,this.firebase=n,Vu(e,new cn("app-compat",()=>this,"PUBLIC")),this.container=e.container}get automaticDataCollectionEnabled(){return this._delegate.automaticDataCollectionEnabled}set automaticDataCollectionEnabled(e){this._delegate.automaticDataCollectionEnabled=e}get name(){return this._delegate.name}get options(){return this._delegate.options}delete(){return new Promise(e=>{this._delegate.checkDestroyed(),e()}).then(()=>(this.firebase.INTERNAL.removeApp(this.name),Db(this._delegate)))}_getService(e,n=jr){var r;this._delegate.checkDestroyed();const i=this._delegate.container.getProvider(e);return!i.isInitialized()&&((r=i.getComponent())===null||r===void 0?void 0:r.instantiationMode)==="EXPLICIT"&&i.initialize(),i.getImmediate({identifier:n})}_removeServiceInstance(e,n=jr){this._delegate.container.getProvider(e).clearInstance(n)}_addComponent(e){Vu(this._delegate,e)}_addOrOverwriteComponent(e){Nb(this._delegate,e)}toJSON(){return{name:this.name,automaticDataCollectionEnabled:this.automaticDataCollectionEnabled,options:this.options}}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const gx={["no-app"]:"No Firebase App '{$appName}' has been created - call Firebase App.initializeApp()",["invalid-app-argument"]:"firebase.{$appName}() takes either no argument or a Firebase App instance."},Vy=new os("app-compat","Firebase",gx);/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function yx(t){const e={},n={__esModule:!0,initializeApp:s,app:i,registerVersion:an,setLogLevel:Lb,onLog:Ob,apps:null,SDK_VERSION:dr,INTERNAL:{registerComponent:a,removeApp:r,useAsService:c,modularAPIs:px}};n.default=n,Object.defineProperty(n,"apps",{get:o});function r(u){delete e[u]}function i(u){if(u=u||jr,!xy(e,u))throw Vy.create("no-app",{appName:u});return e[u]}i.App=t;function s(u,l={}){const h=_p(u,l);if(xy(e,h.name))return e[h.name];const d=new t(h,n);return e[h.name]=d,d}function o(){return Object.keys(e).map(u=>e[u])}function a(u){const l=u.name,h=l.replace("-compat","");if(rr(u)&&u.type==="PUBLIC"){const d=(f=i())=>{if(typeof f[h]!="function")throw Vy.create("invalid-app-argument",{appName:l});return f[h]()};u.serviceProps!==void 0&&Uu(d,u.serviceProps),n[h]=d,t.prototype[h]=function(...f){return this._getService.bind(this,l).apply(this,u.multipleInstances?f:[])}}return u.type==="PUBLIC"?n[h]:null}function c(u,l){return l==="serverAuth"?null:l}return n}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Ub(){const t=yx(mx);t.INTERNAL=Object.assign(Object.assign({},t.INTERNAL),{createFirebaseNamespace:Ub,extendNamespace:e,createSubscribe:Ab,ErrorFactory:os,deepExtend:Uu});function e(n){Uu(t,n)}return t}const vx=Ub();/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const By=new Ol("@firebase/app-compat"),wx="@firebase/app-compat",_x="0.2.8";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function bx(t){an(wx,_x,t)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */if(QC()&&self.firebase!==void 0){By.warn(`
    Warning: Firebase is already defined in the global scope. Please make sure
    Firebase library is only loaded once.
  `);const t=self.firebase.SDK_VERSION;t&&t.indexOf("LITE")>=0&&By.warn(`
    Warning: You are trying to load Firebase while using Firebase Performance standalone script.
    You should load Firebase Performance with this instance of Firebase to avoid loading duplicate code.
    `)}const as=vx;bx();var Ix="firebase",Ex="9.20.0";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */as.registerVersion(Ix,Ex,"app-compat");function bp(t,e){var n={};for(var r in t)Object.prototype.hasOwnProperty.call(t,r)&&e.indexOf(r)<0&&(n[r]=t[r]);if(t!=null&&typeof Object.getOwnPropertySymbols=="function")for(var i=0,r=Object.getOwnPropertySymbols(t);i<r.length;i++)e.indexOf(r[i])<0&&Object.prototype.propertyIsEnumerable.call(t,r[i])&&(n[r[i]]=t[r[i]]);return n}const Oo={FACEBOOK:"facebook.com",GITHUB:"github.com",GOOGLE:"google.com",PASSWORD:"password",PHONE:"phone",TWITTER:"twitter.com"},vs={EMAIL_SIGNIN:"EMAIL_SIGNIN",PASSWORD_RESET:"PASSWORD_RESET",RECOVER_EMAIL:"RECOVER_EMAIL",REVERT_SECOND_FACTOR_ADDITION:"REVERT_SECOND_FACTOR_ADDITION",VERIFY_AND_CHANGE_EMAIL:"VERIFY_AND_CHANGE_EMAIL",VERIFY_EMAIL:"VERIFY_EMAIL"};/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Tx(){return{["admin-restricted-operation"]:"This operation is restricted to administrators only.",["argument-error"]:"",["app-not-authorized"]:"This app, identified by the domain where it's hosted, is not authorized to use Firebase Authentication with the provided API key. Review your key configuration in the Google API console.",["app-not-installed"]:"The requested mobile application corresponding to the identifier (Android package name or iOS bundle ID) provided is not installed on this device.",["captcha-check-failed"]:"The reCAPTCHA response token provided is either invalid, expired, already used or the domain associated with it does not match the list of whitelisted domains.",["code-expired"]:"The SMS code has expired. Please re-send the verification code to try again.",["cordova-not-ready"]:"Cordova framework is not ready.",["cors-unsupported"]:"This browser is not supported.",["credential-already-in-use"]:"This credential is already associated with a different user account.",["custom-token-mismatch"]:"The custom token corresponds to a different audience.",["requires-recent-login"]:"This operation is sensitive and requires recent authentication. Log in again before retrying this request.",["dependent-sdk-initialized-before-auth"]:"Another Firebase SDK was initialized and is trying to use Auth before Auth is initialized. Please be sure to call `initializeAuth` or `getAuth` before starting any other Firebase SDK.",["dynamic-link-not-activated"]:"Please activate Dynamic Links in the Firebase Console and agree to the terms and conditions.",["email-change-needs-verification"]:"Multi-factor users must always have a verified email.",["email-already-in-use"]:"The email address is already in use by another account.",["emulator-config-failed"]:'Auth instance has already been used to make a network call. Auth can no longer be configured to use the emulator. Try calling "connectAuthEmulator()" sooner.',["expired-action-code"]:"The action code has expired.",["cancelled-popup-request"]:"This operation has been cancelled due to another conflicting popup being opened.",["internal-error"]:"An internal AuthError has occurred.",["invalid-app-credential"]:"The phone verification request contains an invalid application verifier. The reCAPTCHA token response is either invalid or expired.",["invalid-app-id"]:"The mobile app identifier is not registed for the current project.",["invalid-user-token"]:"This user's credential isn't valid for this project. This can happen if the user's token has been tampered with, or if the user isn't for the project associated with this API key.",["invalid-auth-event"]:"An internal AuthError has occurred.",["invalid-verification-code"]:"The SMS verification code used to create the phone auth credential is invalid. Please resend the verification code sms and be sure to use the verification code provided by the user.",["invalid-continue-uri"]:"The continue URL provided in the request is invalid.",["invalid-cordova-configuration"]:"The following Cordova plugins must be installed to enable OAuth sign-in: cordova-plugin-buildinfo, cordova-universal-links-plugin, cordova-plugin-browsertab, cordova-plugin-inappbrowser and cordova-plugin-customurlscheme.",["invalid-custom-token"]:"The custom token format is incorrect. Please check the documentation.",["invalid-dynamic-link-domain"]:"The provided dynamic link domain is not configured or authorized for the current project.",["invalid-email"]:"The email address is badly formatted.",["invalid-emulator-scheme"]:"Emulator URL must start with a valid scheme (http:// or https://).",["invalid-api-key"]:"Your API key is invalid, please check you have copied it correctly.",["invalid-cert-hash"]:"The SHA-1 certificate hash provided is invalid.",["invalid-credential"]:"The supplied auth credential is malformed or has expired.",["invalid-message-payload"]:"The email template corresponding to this action contains invalid characters in its message. Please fix by going to the Auth email templates section in the Firebase Console.",["invalid-multi-factor-session"]:"The request does not contain a valid proof of first factor successful sign-in.",["invalid-oauth-provider"]:"EmailAuthProvider is not supported for this operation. This operation only supports OAuth providers.",["invalid-oauth-client-id"]:"The OAuth client ID provided is either invalid or does not match the specified API key.",["unauthorized-domain"]:"This domain is not authorized for OAuth operations for your Firebase project. Edit the list of authorized domains from the Firebase console.",["invalid-action-code"]:"The action code is invalid. This can happen if the code is malformed, expired, or has already been used.",["wrong-password"]:"The password is invalid or the user does not have a password.",["invalid-persistence-type"]:"The specified persistence type is invalid. It can only be local, session or none.",["invalid-phone-number"]:"The format of the phone number provided is incorrect. Please enter the phone number in a format that can be parsed into E.164 format. E.164 phone numbers are written in the format [+][country code][subscriber number including area code].",["invalid-provider-id"]:"The specified provider ID is invalid.",["invalid-recipient-email"]:"The email corresponding to this action failed to send as the provided recipient email address is invalid.",["invalid-sender"]:"The email template corresponding to this action contains an invalid sender email or name. Please fix by going to the Auth email templates section in the Firebase Console.",["invalid-verification-id"]:"The verification ID used to create the phone auth credential is invalid.",["invalid-tenant-id"]:"The Auth instance's tenant ID is invalid.",["login-blocked"]:"Login blocked by user-provided method: {$originalMessage}",["missing-android-pkg-name"]:"An Android Package Name must be provided if the Android App is required to be installed.",["auth-domain-config-required"]:"Be sure to include authDomain when calling firebase.initializeApp(), by following the instructions in the Firebase console.",["missing-app-credential"]:"The phone verification request is missing an application verifier assertion. A reCAPTCHA response token needs to be provided.",["missing-verification-code"]:"The phone auth credential was created with an empty SMS verification code.",["missing-continue-uri"]:"A continue URL must be provided in the request.",["missing-iframe-start"]:"An internal AuthError has occurred.",["missing-ios-bundle-id"]:"An iOS Bundle ID must be provided if an App Store ID is provided.",["missing-or-invalid-nonce"]:"The request does not contain a valid nonce. This can occur if the SHA-256 hash of the provided raw nonce does not match the hashed nonce in the ID token payload.",["missing-password"]:"A non-empty password must be provided",["missing-multi-factor-info"]:"No second factor identifier is provided.",["missing-multi-factor-session"]:"The request is missing proof of first factor successful sign-in.",["missing-phone-number"]:"To send verification codes, provide a phone number for the recipient.",["missing-verification-id"]:"The phone auth credential was created with an empty verification ID.",["app-deleted"]:"This instance of FirebaseApp has been deleted.",["multi-factor-info-not-found"]:"The user does not have a second factor matching the identifier provided.",["multi-factor-auth-required"]:"Proof of ownership of a second factor is required to complete sign-in.",["account-exists-with-different-credential"]:"An account already exists with the same email address but different sign-in credentials. Sign in using a provider associated with this email address.",["network-request-failed"]:"A network AuthError (such as timeout, interrupted connection or unreachable host) has occurred.",["no-auth-event"]:"An internal AuthError has occurred.",["no-such-provider"]:"User was not linked to an account with the given provider.",["null-user"]:"A null user object was provided as the argument for an operation which requires a non-null user object.",["operation-not-allowed"]:"The given sign-in provider is disabled for this Firebase project. Enable it in the Firebase console, under the sign-in method tab of the Auth section.",["operation-not-supported-in-this-environment"]:'This operation is not supported in the environment this application is running on. "location.protocol" must be http, https or chrome-extension and web storage must be enabled.',["popup-blocked"]:"Unable to establish a connection with the popup. It may have been blocked by the browser.",["popup-closed-by-user"]:"The popup has been closed by the user before finalizing the operation.",["provider-already-linked"]:"User can only be linked to one identity for the given provider.",["quota-exceeded"]:"The project's quota for this operation has been exceeded.",["redirect-cancelled-by-user"]:"The redirect operation has been cancelled by the user before finalizing.",["redirect-operation-pending"]:"A redirect sign-in operation is already pending.",["rejected-credential"]:"The request contains malformed or mismatching credentials.",["second-factor-already-in-use"]:"The second factor is already enrolled on this account.",["maximum-second-factor-count-exceeded"]:"The maximum allowed number of second factors on a user has been exceeded.",["tenant-id-mismatch"]:"The provided tenant ID does not match the Auth instance's tenant ID",timeout:"The operation has timed out.",["user-token-expired"]:"The user's credential is no longer valid. The user must sign in again.",["too-many-requests"]:"We have blocked all requests from this device due to unusual activity. Try again later.",["unauthorized-continue-uri"]:"The domain of the continue URL is not whitelisted.  Please whitelist the domain in the Firebase console.",["unsupported-first-factor"]:"Enrolling a second factor or signing in with a multi-factor account requires sign-in with a supported first factor.",["unsupported-persistence-type"]:"The current environment does not support the specified persistence type.",["unsupported-tenant-operation"]:"This operation is not supported in a multi-tenant context.",["unverified-email"]:"The operation requires a verified email.",["user-cancelled"]:"The user did not grant your application the permissions it requested.",["user-not-found"]:"There is no user record corresponding to this identifier. The user may have been deleted.",["user-disabled"]:"The user account has been disabled by an administrator.",["user-mismatch"]:"The supplied credentials do not correspond to the previously signed in user.",["user-signed-out"]:"",["weak-password"]:"The password must be 6 characters long or more.",["web-storage-unsupported"]:"This browser is not supported or 3rd party cookies and data may be disabled.",["already-initialized"]:"initializeAuth() has already been called with different options. To avoid this error, call initializeAuth() with the same options as when it was originally called, or call getAuth() to return the already initialized instance.",["missing-recaptcha-token"]:"The reCAPTCHA token is missing when sending request to the backend.",["invalid-recaptcha-token"]:"The reCAPTCHA token is invalid when sending request to the backend.",["invalid-recaptcha-action"]:"The reCAPTCHA action is invalid when sending request to the backend.",["recaptcha-not-enabled"]:"reCAPTCHA Enterprise integration is not enabled for this project.",["missing-client-type"]:"The reCAPTCHA client type is missing when sending request to the backend.",["missing-recaptcha-version"]:"The reCAPTCHA version is missing when sending request to the backend.",["invalid-req-type"]:"Invalid request parameters.",["invalid-recaptcha-version"]:"The reCAPTCHA version is invalid when sending request to the backend."}}function Vb(){return{["dependent-sdk-initialized-before-auth"]:"Another Firebase SDK was initialized and is trying to use Auth before Auth is initialized. Please be sure to call `initializeAuth` or `getAuth` before starting any other Firebase SDK."}}const Sx=Tx,kx=Vb,Bb=new os("auth","Firebase",Vb());/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Bu=new Ol("@firebase/auth");function Ax(t,...e){Bu.logLevel<=pe.WARN&&Bu.warn(`Auth (${dr}): ${t}`,...e)}function wu(t,...e){Bu.logLevel<=pe.ERROR&&Bu.error(`Auth (${dr}): ${t}`,...e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function bt(t,...e){throw Ip(t,...e)}function vt(t,...e){return Ip(t,...e)}function $b(t,e,n){const r=Object.assign(Object.assign({},kx()),{[e]:n});return new os("auth","Firebase",r).create(e,{appName:t.name})}function mo(t,e,n){const r=n;if(!(e instanceof r))throw r.name!==e.constructor.name&&bt(t,"argument-error"),$b(t,"argument-error",`Type of ${e.constructor.name} does not match expected instance.Did you pass a reference from a different Auth SDK?`)}function Ip(t,...e){if(typeof t!="string"){const n=e[0],r=[...e.slice(1)];return r[0]&&(r[0].appName=t.name),t._errorFactory.create(n,...r)}return Bb.create(t,...e)}function P(t,e,...n){if(!t)throw Ip(e,...n)}function Ln(t){const e="INTERNAL ASSERTION FAILED: "+t;throw wu(e),new Error(e)}function En(t,e){t||Ln(e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Ra(){var t;return typeof self<"u"&&((t=self.location)===null||t===void 0?void 0:t.href)||""}function Ep(){return $y()==="http:"||$y()==="https:"}function $y(){var t;return typeof self<"u"&&((t=self.location)===null||t===void 0?void 0:t.protocol)||null}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Cx(){return typeof navigator<"u"&&navigator&&"onLine"in navigator&&typeof navigator.onLine=="boolean"&&(Ep()||Sb()||"connection"in navigator)?navigator.onLine:!0}function Rx(){if(typeof navigator>"u")return null;const t=navigator;return t.languages&&t.languages[0]||t.language||null}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class oc{constructor(e,n){this.shortDelay=e,this.longDelay=n,En(n>e,"Short delay should be less than long delay!"),this.isMobile=YC()||yp()}get(){return Cx()?this.isMobile?this.longDelay:this.shortDelay:Math.min(5e3,this.shortDelay)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Tp(t,e){En(t.emulator,"Emulator should always be set here");const{url:n}=t.emulator;return e?`${n}${e.startsWith("/")?e.slice(1):e}`:n}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class qb{static initialize(e,n,r){this.fetchImpl=e,n&&(this.headersImpl=n),r&&(this.responseImpl=r)}static fetch(){if(this.fetchImpl)return this.fetchImpl;if(typeof self<"u"&&"fetch"in self)return self.fetch;Ln("Could not find fetch implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}static headers(){if(this.headersImpl)return this.headersImpl;if(typeof self<"u"&&"Headers"in self)return self.Headers;Ln("Could not find Headers implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}static response(){if(this.responseImpl)return this.responseImpl;if(typeof self<"u"&&"Response"in self)return self.Response;Ln("Could not find Response implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const xx={CREDENTIAL_MISMATCH:"custom-token-mismatch",MISSING_CUSTOM_TOKEN:"internal-error",INVALID_IDENTIFIER:"invalid-email",MISSING_CONTINUE_URI:"internal-error",INVALID_PASSWORD:"wrong-password",MISSING_PASSWORD:"missing-password",EMAIL_EXISTS:"email-already-in-use",PASSWORD_LOGIN_DISABLED:"operation-not-allowed",INVALID_IDP_RESPONSE:"invalid-credential",INVALID_PENDING_TOKEN:"invalid-credential",FEDERATED_USER_ID_ALREADY_LINKED:"credential-already-in-use",MISSING_REQ_TYPE:"internal-error",EMAIL_NOT_FOUND:"user-not-found",RESET_PASSWORD_EXCEED_LIMIT:"too-many-requests",EXPIRED_OOB_CODE:"expired-action-code",INVALID_OOB_CODE:"invalid-action-code",MISSING_OOB_CODE:"internal-error",CREDENTIAL_TOO_OLD_LOGIN_AGAIN:"requires-recent-login",INVALID_ID_TOKEN:"invalid-user-token",TOKEN_EXPIRED:"user-token-expired",USER_NOT_FOUND:"user-token-expired",TOO_MANY_ATTEMPTS_TRY_LATER:"too-many-requests",INVALID_CODE:"invalid-verification-code",INVALID_SESSION_INFO:"invalid-verification-id",INVALID_TEMPORARY_PROOF:"invalid-credential",MISSING_SESSION_INFO:"missing-verification-id",SESSION_EXPIRED:"code-expired",MISSING_ANDROID_PACKAGE_NAME:"missing-android-pkg-name",UNAUTHORIZED_DOMAIN:"unauthorized-continue-uri",INVALID_OAUTH_CLIENT_ID:"invalid-oauth-client-id",ADMIN_ONLY_OPERATION:"admin-restricted-operation",INVALID_MFA_PENDING_CREDENTIAL:"invalid-multi-factor-session",MFA_ENROLLMENT_NOT_FOUND:"multi-factor-info-not-found",MISSING_MFA_ENROLLMENT_ID:"missing-multi-factor-info",MISSING_MFA_PENDING_CREDENTIAL:"missing-multi-factor-session",SECOND_FACTOR_EXISTS:"second-factor-already-in-use",SECOND_FACTOR_LIMIT_EXCEEDED:"maximum-second-factor-count-exceeded",BLOCKING_FUNCTION_ERROR_RESPONSE:"internal-error",RECAPTCHA_NOT_ENABLED:"recaptcha-not-enabled",MISSING_RECAPTCHA_TOKEN:"missing-recaptcha-token",INVALID_RECAPTCHA_TOKEN:"invalid-recaptcha-token",INVALID_RECAPTCHA_ACTION:"invalid-recaptcha-action",MISSING_CLIENT_TYPE:"missing-client-type",MISSING_RECAPTCHA_VERSION:"missing-recaptcha-version",INVALID_RECAPTCHA_VERSION:"invalid-recaptcha-version",INVALID_REQ_TYPE:"invalid-req-type"};/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Nx=new oc(3e4,6e4);function it(t,e){return t.tenantId&&!e.tenantId?Object.assign(Object.assign({},e),{tenantId:t.tenantId}):e}async function ct(t,e,n,r,i={}){return jb(t,i,async()=>{let s={},o={};r&&(e==="GET"?o=r:s={body:JSON.stringify(r)});const a=po(Object.assign({key:t.config.apiKey},o)).slice(1),c=await t._getAdditionalHeaders();return c["Content-Type"]="application/json",t.languageCode&&(c["X-Firebase-Locale"]=t.languageCode),qb.fetch()(zb(t,t.config.apiHost,n,a),Object.assign({method:e,headers:c,referrerPolicy:"no-referrer"},s))})}async function jb(t,e,n){t._canInitEmulator=!1;const r=Object.assign(Object.assign({},xx),e);try{const i=new Px(t),s=await Promise.race([n(),i.promise]);i.clearNetworkTimeout();const o=await s.json();if("needConfirmation"in o)throw Go(t,"account-exists-with-different-credential",o);if(s.ok&&!("errorMessage"in o))return o;{const a=s.ok?o.errorMessage:o.error.message,[c,u]=a.split(" : ");if(c==="FEDERATED_USER_ID_ALREADY_LINKED")throw Go(t,"credential-already-in-use",o);if(c==="EMAIL_EXISTS")throw Go(t,"email-already-in-use",o);if(c==="USER_DISABLED")throw Go(t,"user-disabled",o);const l=r[c]||c.toLowerCase().replace(/[_\s]+/g,"-");if(u)throw $b(t,l,u);bt(t,l)}}catch(i){if(i instanceof Ct)throw i;bt(t,"network-request-failed",{message:String(i)})}}async function fr(t,e,n,r,i={}){const s=await ct(t,e,n,r,i);return"mfaPendingCredential"in s&&bt(t,"multi-factor-auth-required",{_serverResponse:s}),s}function zb(t,e,n,r){const i=`${e}${n}?${r}`;return t.config.emulator?Tp(t.config,i):`${t.config.apiScheme}://${i}`}class Px{constructor(e){this.auth=e,this.timer=null,this.promise=new Promise((n,r)=>{this.timer=setTimeout(()=>r(vt(this.auth,"network-request-failed")),Nx.get())})}clearNetworkTimeout(){clearTimeout(this.timer)}}function Go(t,e,n){const r={appName:t.name};n.email&&(r.email=n.email),n.phoneNumber&&(r.phoneNumber=n.phoneNumber);const i=vt(t,e,r);return i.customData._tokenResponse=n,i}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function Dx(t,e){return ct(t,"POST","/v1/accounts:delete",e)}async function Ox(t,e){return ct(t,"POST","/v1/accounts:update",e)}async function Lx(t,e){return ct(t,"POST","/v1/accounts:lookup",e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function sa(t){if(!!t)try{const e=new Date(Number(t));if(!isNaN(e.getTime()))return e.toUTCString()}catch{}}async function Mx(t,e=!1){const n=Y(t),r=await n.getIdToken(e),i=Ll(r);P(i&&i.exp&&i.auth_time&&i.iat,n.auth,"internal-error");const s=typeof i.firebase=="object"?i.firebase:void 0,o=s==null?void 0:s.sign_in_provider;return{claims:i,token:r,authTime:sa(Qh(i.auth_time)),issuedAtTime:sa(Qh(i.iat)),expirationTime:sa(Qh(i.exp)),signInProvider:o||null,signInSecondFactor:(s==null?void 0:s.sign_in_second_factor)||null}}function Qh(t){return Number(t)*1e3}function Ll(t){const[e,n,r]=t.split(".");if(e===void 0||n===void 0||r===void 0)return wu("JWT malformed, contained fewer than 3 sections"),null;try{const i=Eb(n);return i?JSON.parse(i):(wu("Failed to decode base64 JWT payload"),null)}catch(i){return wu("Caught error parsing JWT payload as JSON",i==null?void 0:i.toString()),null}}function Fx(t){const e=Ll(t);return P(e,"internal-error"),P(typeof e.exp<"u","internal-error"),P(typeof e.iat<"u","internal-error"),Number(e.exp)-Number(e.iat)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function ir(t,e,n=!1){if(n)return e;try{return await e}catch(r){throw r instanceof Ct&&Ux(r)&&t.auth.currentUser===t&&await t.auth.signOut(),r}}function Ux({code:t}){return t==="auth/user-disabled"||t==="auth/user-token-expired"}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Vx{constructor(e){this.user=e,this.isRunning=!1,this.timerId=null,this.errorBackoff=3e4}_start(){this.isRunning||(this.isRunning=!0,this.schedule())}_stop(){!this.isRunning||(this.isRunning=!1,this.timerId!==null&&clearTimeout(this.timerId))}getInterval(e){var n;if(e){const r=this.errorBackoff;return this.errorBackoff=Math.min(this.errorBackoff*2,96e4),r}else{this.errorBackoff=3e4;const i=((n=this.user.stsTokenManager.expirationTime)!==null&&n!==void 0?n:0)-Date.now()-3e5;return Math.max(0,i)}}schedule(e=!1){if(!this.isRunning)return;const n=this.getInterval(e);this.timerId=setTimeout(async()=>{await this.iteration()},n)}async iteration(){try{await this.user.getIdToken(!0)}catch(e){(e==null?void 0:e.code)==="auth/network-request-failed"&&this.schedule(!0);return}this.schedule()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Hb{constructor(e,n){this.createdAt=e,this.lastLoginAt=n,this._initializeTime()}_initializeTime(){this.lastSignInTime=sa(this.lastLoginAt),this.creationTime=sa(this.createdAt)}_copy(e){this.createdAt=e.createdAt,this.lastLoginAt=e.lastLoginAt,this._initializeTime()}toJSON(){return{createdAt:this.createdAt,lastLoginAt:this.lastLoginAt}}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function xa(t){var e;const n=t.auth,r=await t.getIdToken(),i=await ir(t,Lx(n,{idToken:r}));P(i==null?void 0:i.users.length,n,"internal-error");const s=i.users[0];t._notifyReloadListener(s);const o=!((e=s.providerUserInfo)===null||e===void 0)&&e.length?qx(s.providerUserInfo):[],a=$x(t.providerData,o),c=t.isAnonymous,u=!(t.email&&s.passwordHash)&&!(a!=null&&a.length),l=c?u:!1,h={uid:s.localId,displayName:s.displayName||null,photoURL:s.photoUrl||null,email:s.email||null,emailVerified:s.emailVerified||!1,phoneNumber:s.phoneNumber||null,tenantId:s.tenantId||null,providerData:a,metadata:new Hb(s.createdAt,s.lastLoginAt),isAnonymous:l};Object.assign(t,h)}async function Bx(t){const e=Y(t);await xa(e),await e.auth._persistUserIfCurrent(e),e.auth._notifyListenersIfCurrent(e)}function $x(t,e){return[...t.filter(r=>!e.some(i=>i.providerId===r.providerId)),...e]}function qx(t){return t.map(e=>{var{providerId:n}=e,r=bp(e,["providerId"]);return{providerId:n,uid:r.rawId||"",displayName:r.displayName||null,email:r.email||null,phoneNumber:r.phoneNumber||null,photoURL:r.photoUrl||null}})}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function jx(t,e){const n=await jb(t,{},async()=>{const r=po({grant_type:"refresh_token",refresh_token:e}).slice(1),{tokenApiHost:i,apiKey:s}=t.config,o=zb(t,i,"/v1/token",`key=${s}`),a=await t._getAdditionalHeaders();return a["Content-Type"]="application/x-www-form-urlencoded",qb.fetch()(o,{method:"POST",headers:a,body:r})});return{accessToken:n.access_token,expiresIn:n.expires_in,refreshToken:n.refresh_token}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Na{constructor(){this.refreshToken=null,this.accessToken=null,this.expirationTime=null}get isExpired(){return!this.expirationTime||Date.now()>this.expirationTime-3e4}updateFromServerResponse(e){P(e.idToken,"internal-error"),P(typeof e.idToken<"u","internal-error"),P(typeof e.refreshToken<"u","internal-error");const n="expiresIn"in e&&typeof e.expiresIn<"u"?Number(e.expiresIn):Fx(e.idToken);this.updateTokensAndExpiration(e.idToken,e.refreshToken,n)}async getToken(e,n=!1){return P(!this.accessToken||this.refreshToken,e,"user-token-expired"),!n&&this.accessToken&&!this.isExpired?this.accessToken:this.refreshToken?(await this.refresh(e,this.refreshToken),this.accessToken):null}clearRefreshToken(){this.refreshToken=null}async refresh(e,n){const{accessToken:r,refreshToken:i,expiresIn:s}=await jx(e,n);this.updateTokensAndExpiration(r,i,Number(s))}updateTokensAndExpiration(e,n,r){this.refreshToken=n||null,this.accessToken=e||null,this.expirationTime=Date.now()+r*1e3}static fromJSON(e,n){const{refreshToken:r,accessToken:i,expirationTime:s}=n,o=new Na;return r&&(P(typeof r=="string","internal-error",{appName:e}),o.refreshToken=r),i&&(P(typeof i=="string","internal-error",{appName:e}),o.accessToken=i),s&&(P(typeof s=="number","internal-error",{appName:e}),o.expirationTime=s),o}toJSON(){return{refreshToken:this.refreshToken,accessToken:this.accessToken,expirationTime:this.expirationTime}}_assign(e){this.accessToken=e.accessToken,this.refreshToken=e.refreshToken,this.expirationTime=e.expirationTime}_clone(){return Object.assign(new Na,this.toJSON())}_performRefresh(){return Ln("not implemented")}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function kr(t,e){P(typeof t=="string"||typeof t>"u","internal-error",{appName:e})}class Ui{constructor(e){var{uid:n,auth:r,stsTokenManager:i}=e,s=bp(e,["uid","auth","stsTokenManager"]);this.providerId="firebase",this.proactiveRefresh=new Vx(this),this.reloadUserInfo=null,this.reloadListener=null,this.uid=n,this.auth=r,this.stsTokenManager=i,this.accessToken=i.accessToken,this.displayName=s.displayName||null,this.email=s.email||null,this.emailVerified=s.emailVerified||!1,this.phoneNumber=s.phoneNumber||null,this.photoURL=s.photoURL||null,this.isAnonymous=s.isAnonymous||!1,this.tenantId=s.tenantId||null,this.providerData=s.providerData?[...s.providerData]:[],this.metadata=new Hb(s.createdAt||void 0,s.lastLoginAt||void 0)}async getIdToken(e){const n=await ir(this,this.stsTokenManager.getToken(this.auth,e));return P(n,this.auth,"internal-error"),this.accessToken!==n&&(this.accessToken=n,await this.auth._persistUserIfCurrent(this),this.auth._notifyListenersIfCurrent(this)),n}getIdTokenResult(e){return Mx(this,e)}reload(){return Bx(this)}_assign(e){this!==e&&(P(this.uid===e.uid,this.auth,"internal-error"),this.displayName=e.displayName,this.photoURL=e.photoURL,this.email=e.email,this.emailVerified=e.emailVerified,this.phoneNumber=e.phoneNumber,this.isAnonymous=e.isAnonymous,this.tenantId=e.tenantId,this.providerData=e.providerData.map(n=>Object.assign({},n)),this.metadata._copy(e.metadata),this.stsTokenManager._assign(e.stsTokenManager))}_clone(e){const n=new Ui(Object.assign(Object.assign({},this),{auth:e,stsTokenManager:this.stsTokenManager._clone()}));return n.metadata._copy(this.metadata),n}_onReload(e){P(!this.reloadListener,this.auth,"internal-error"),this.reloadListener=e,this.reloadUserInfo&&(this._notifyReloadListener(this.reloadUserInfo),this.reloadUserInfo=null)}_notifyReloadListener(e){this.reloadListener?this.reloadListener(e):this.reloadUserInfo=e}_startProactiveRefresh(){this.proactiveRefresh._start()}_stopProactiveRefresh(){this.proactiveRefresh._stop()}async _updateTokensIfNecessary(e,n=!1){let r=!1;e.idToken&&e.idToken!==this.stsTokenManager.accessToken&&(this.stsTokenManager.updateFromServerResponse(e),r=!0),n&&await xa(this),await this.auth._persistUserIfCurrent(this),r&&this.auth._notifyListenersIfCurrent(this)}async delete(){const e=await this.getIdToken();return await ir(this,Dx(this.auth,{idToken:e})),this.stsTokenManager.clearRefreshToken(),this.auth.signOut()}toJSON(){return Object.assign(Object.assign({uid:this.uid,email:this.email||void 0,emailVerified:this.emailVerified,displayName:this.displayName||void 0,isAnonymous:this.isAnonymous,photoURL:this.photoURL||void 0,phoneNumber:this.phoneNumber||void 0,tenantId:this.tenantId||void 0,providerData:this.providerData.map(e=>Object.assign({},e)),stsTokenManager:this.stsTokenManager.toJSON(),_redirectEventId:this._redirectEventId},this.metadata.toJSON()),{apiKey:this.auth.config.apiKey,appName:this.auth.name})}get refreshToken(){return this.stsTokenManager.refreshToken||""}static _fromJSON(e,n){var r,i,s,o,a,c,u,l;const h=(r=n.displayName)!==null&&r!==void 0?r:void 0,d=(i=n.email)!==null&&i!==void 0?i:void 0,f=(s=n.phoneNumber)!==null&&s!==void 0?s:void 0,g=(o=n.photoURL)!==null&&o!==void 0?o:void 0,y=(a=n.tenantId)!==null&&a!==void 0?a:void 0,E=(c=n._redirectEventId)!==null&&c!==void 0?c:void 0,v=(u=n.createdAt)!==null&&u!==void 0?u:void 0,I=(l=n.lastLoginAt)!==null&&l!==void 0?l:void 0,{uid:b,emailVerified:x,isAnonymous:M,providerData:z,stsTokenManager:ne}=n;P(b&&ne,e,"internal-error");const H=Na.fromJSON(this.name,ne);P(typeof b=="string",e,"internal-error"),kr(h,e.name),kr(d,e.name),P(typeof x=="boolean",e,"internal-error"),P(typeof M=="boolean",e,"internal-error"),kr(f,e.name),kr(g,e.name),kr(y,e.name),kr(E,e.name),kr(v,e.name),kr(I,e.name);const oe=new Ui({uid:b,auth:e,email:d,emailVerified:x,displayName:h,isAnonymous:M,photoURL:g,phoneNumber:f,tenantId:y,stsTokenManager:H,createdAt:v,lastLoginAt:I});return z&&Array.isArray(z)&&(oe.providerData=z.map(we=>Object.assign({},we))),E&&(oe._redirectEventId=E),oe}static async _fromIdTokenResponse(e,n,r=!1){const i=new Na;i.updateFromServerResponse(n);const s=new Ui({uid:n.localId,auth:e,stsTokenManager:i,isAnonymous:r});return await xa(s),s}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const qy=new Map;function Jt(t){En(t instanceof Function,"Expected a class definition");let e=qy.get(t);return e?(En(e instanceof t,"Instance stored in cache mismatched with class"),e):(e=new t,qy.set(t,e),e)}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Kb{constructor(){this.type="NONE",this.storage={}}async _isAvailable(){return!0}async _set(e,n){this.storage[e]=n}async _get(e){const n=this.storage[e];return n===void 0?null:n}async _remove(e){delete this.storage[e]}_addListener(e,n){}_removeListener(e,n){}}Kb.type="NONE";const Gs=Kb;/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Vi(t,e,n){return`firebase:${t}:${e}:${n}`}class Ms{constructor(e,n,r){this.persistence=e,this.auth=n,this.userKey=r;const{config:i,name:s}=this.auth;this.fullUserKey=Vi(this.userKey,i.apiKey,s),this.fullPersistenceKey=Vi("persistence",i.apiKey,s),this.boundEventHandler=n._onStorageEvent.bind(n),this.persistence._addListener(this.fullUserKey,this.boundEventHandler)}setCurrentUser(e){return this.persistence._set(this.fullUserKey,e.toJSON())}async getCurrentUser(){const e=await this.persistence._get(this.fullUserKey);return e?Ui._fromJSON(this.auth,e):null}removeCurrentUser(){return this.persistence._remove(this.fullUserKey)}savePersistenceForRedirect(){return this.persistence._set(this.fullPersistenceKey,this.persistence.type)}async setPersistence(e){if(this.persistence===e)return;const n=await this.getCurrentUser();if(await this.removeCurrentUser(),this.persistence=e,n)return this.setCurrentUser(n)}delete(){this.persistence._removeListener(this.fullUserKey,this.boundEventHandler)}static async create(e,n,r="authUser"){if(!n.length)return new Ms(Jt(Gs),e,r);const i=(await Promise.all(n.map(async u=>{if(await u._isAvailable())return u}))).filter(u=>u);let s=i[0]||Jt(Gs);const o=Vi(r,e.config.apiKey,e.name);let a=null;for(const u of n)try{const l=await u._get(o);if(l){const h=Ui._fromJSON(e,l);u!==s&&(a=h),s=u;break}}catch{}const c=i.filter(u=>u._shouldAllowMigration);return!s._shouldAllowMigration||!c.length?new Ms(s,e,r):(s=c[0],a&&await s._set(o,a.toJSON()),await Promise.all(n.map(async u=>{if(u!==s)try{await u._remove(o)}catch{}})),new Ms(s,e,r))}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function jy(t){const e=t.toLowerCase();if(e.includes("opera/")||e.includes("opr/")||e.includes("opios/"))return"Opera";if(Yb(e))return"IEMobile";if(e.includes("msie")||e.includes("trident/"))return"IE";if(e.includes("edge/"))return"Edge";if(Wb(e))return"Firefox";if(e.includes("silk/"))return"Silk";if(Qb(e))return"Blackberry";if(Xb(e))return"Webos";if(Sp(e))return"Safari";if((e.includes("chrome/")||Gb(e))&&!e.includes("edge/"))return"Chrome";if(ac(e))return"Android";{const n=/([a-zA-Z\d\.]+)\/[a-zA-Z\d\.]*$/,r=t.match(n);if((r==null?void 0:r.length)===2)return r[1]}return"Other"}function Wb(t=qe()){return/firefox\//i.test(t)}function Sp(t=qe()){const e=t.toLowerCase();return e.includes("safari/")&&!e.includes("chrome/")&&!e.includes("crios/")&&!e.includes("android")}function Gb(t=qe()){return/crios\//i.test(t)}function Yb(t=qe()){return/iemobile/i.test(t)}function ac(t=qe()){return/android/i.test(t)}function Qb(t=qe()){return/blackberry/i.test(t)}function Xb(t=qe()){return/webos/i.test(t)}function go(t=qe()){return/iphone|ipad|ipod/i.test(t)||/macintosh/i.test(t)&&/mobile/i.test(t)}function zx(t=qe()){return/(iPad|iPhone|iPod).*OS 7_\d/i.test(t)||/(iPad|iPhone|iPod).*OS 8_\d/i.test(t)}function Hx(t=qe()){var e;return go(t)&&!!(!((e=window.navigator)===null||e===void 0)&&e.standalone)}function Kx(){return kb()&&document.documentMode===10}function Jb(t=qe()){return go(t)||ac(t)||Xb(t)||Qb(t)||/windows phone/i.test(t)||Yb(t)}function Wx(){try{return!!(window&&window!==window.top)}catch{return!1}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Zb(t,e=[]){let n;switch(t){case"Browser":n=jy(qe());break;case"Worker":n=`${jy(qe())}-${t}`;break;default:n=t}const r=e.length?e.join(","):"FirebaseCore-web";return`${n}/JsCore/${dr}/${r}`}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function Gx(t){return(await ct(t,"GET","/v1/recaptchaParams")).recaptchaSiteKey||""}async function eI(t,e){return ct(t,"GET","/v2/recaptchaConfig",it(t,e))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function zy(t){return t!==void 0&&t.getResponse!==void 0}function Hy(t){return t!==void 0&&t.enterprise!==void 0}class tI{constructor(e){if(this.siteKey="",this.emailPasswordEnabled=!1,e.recaptchaKey===void 0)throw new Error("recaptchaKey undefined");this.siteKey=e.recaptchaKey.split("/")[3],this.emailPasswordEnabled=e.recaptchaEnforcementState.some(n=>n.provider==="EMAIL_PASSWORD_PROVIDER"&&n.enforcementState!=="OFF")}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Yx(){var t,e;return(e=(t=document.getElementsByTagName("head"))===null||t===void 0?void 0:t[0])!==null&&e!==void 0?e:document}function kp(t){return new Promise((e,n)=>{const r=document.createElement("script");r.setAttribute("src",t),r.onload=e,r.onerror=i=>{const s=vt("internal-error");s.customData=i,n(s)},r.type="text/javascript",r.charset="UTF-8",Yx().appendChild(r)})}function nI(t){return`__${t}${Math.floor(Math.random()*1e6)}`}const Qx="https://www.google.com/recaptcha/enterprise.js?render=",Xx="recaptcha-enterprise";class rI{constructor(e){this.type=Xx,this.auth=Ze(e)}async verify(e="verify",n=!1){async function r(s){if(!n){if(s.tenantId==null&&s._agentRecaptchaConfig!=null)return s._agentRecaptchaConfig.siteKey;if(s.tenantId!=null&&s._tenantRecaptchaConfigs[s.tenantId]!==void 0)return s._tenantRecaptchaConfigs[s.tenantId].siteKey}return new Promise(async(o,a)=>{eI(s,{clientType:"CLIENT_TYPE_WEB",version:"RECAPTCHA_ENTERPRISE"}).then(c=>{if(c.recaptchaKey===void 0)a(new Error("recaptcha Enterprise site key undefined"));else{const u=new tI(c);return s.tenantId==null?s._agentRecaptchaConfig=u:s._tenantRecaptchaConfigs[s.tenantId]=u,o(u.siteKey)}}).catch(c=>{a(c)})})}function i(s,o,a){const c=window.grecaptcha;Hy(c)?c.enterprise.ready(()=>{try{c.enterprise.execute(s,{action:e}).then(u=>{o(u)}).catch(u=>{a(u)})}catch(u){a(u)}}):a(Error("No reCAPTCHA enterprise script loaded."))}return new Promise((s,o)=>{r(this.auth).then(a=>{if(!n&&Hy(window.grecaptcha))i(a,s,o);else{if(typeof window>"u"){o(new Error("RecaptchaVerifier is only supported in browser"));return}kp(Qx+a).then(()=>{i(a,s,o)}).catch(c=>{o(c)})}}).catch(a=>{o(a)})})}}async function Hr(t,e,n,r=!1){const i=new rI(t);let s;try{s=await i.verify(n)}catch{s=await i.verify(n,!0)}const o=Object.assign({},e);return r?Object.assign(o,{captchaResp:s}):Object.assign(o,{captchaResponse:s}),Object.assign(o,{clientType:"CLIENT_TYPE_WEB"}),Object.assign(o,{recaptchaVersion:"RECAPTCHA_ENTERPRISE"}),o}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Jx{constructor(e){this.auth=e,this.queue=[]}pushCallback(e,n){const r=s=>new Promise((o,a)=>{try{const c=e(s);o(c)}catch(c){a(c)}});r.onAbort=n,this.queue.push(r);const i=this.queue.length-1;return()=>{this.queue[i]=()=>Promise.resolve()}}async runMiddleware(e){if(this.auth.currentUser===e)return;const n=[];try{for(const r of this.queue)await r(e),r.onAbort&&n.push(r.onAbort)}catch(r){n.reverse();for(const i of n)try{i()}catch{}throw this.auth._errorFactory.create("login-blocked",{originalMessage:r==null?void 0:r.message})}}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Zx{constructor(e,n,r,i){this.app=e,this.heartbeatServiceProvider=n,this.appCheckServiceProvider=r,this.config=i,this.currentUser=null,this.emulatorConfig=null,this.operations=Promise.resolve(),this.authStateSubscription=new Ky(this),this.idTokenSubscription=new Ky(this),this.beforeStateQueue=new Jx(this),this.redirectUser=null,this.isProactiveRefreshEnabled=!1,this._canInitEmulator=!0,this._isInitialized=!1,this._deleted=!1,this._initializationPromise=null,this._popupRedirectResolver=null,this._errorFactory=Bb,this._agentRecaptchaConfig=null,this._tenantRecaptchaConfigs={},this.lastNotifiedUid=void 0,this.languageCode=null,this.tenantId=null,this.settings={appVerificationDisabledForTesting:!1},this.frameworks=[],this.name=e.name,this.clientVersion=i.sdkClientVersion}_initializeWithPersistence(e,n){return n&&(this._popupRedirectResolver=Jt(n)),this._initializationPromise=this.queue(async()=>{var r,i;if(!this._deleted&&(this.persistenceManager=await Ms.create(this,e),!this._deleted)){if(!((r=this._popupRedirectResolver)===null||r===void 0)&&r._shouldInitProactively)try{await this._popupRedirectResolver._initialize(this)}catch{}await this.initializeCurrentUser(n),this.lastNotifiedUid=((i=this.currentUser)===null||i===void 0?void 0:i.uid)||null,!this._deleted&&(this._isInitialized=!0)}}),this._initializationPromise}async _onStorageEvent(){if(this._deleted)return;const e=await this.assertedPersistence.getCurrentUser();if(!(!this.currentUser&&!e)){if(this.currentUser&&e&&this.currentUser.uid===e.uid){this._currentUser._assign(e),await this.currentUser.getIdToken();return}await this._updateCurrentUser(e,!0)}}async initializeCurrentUser(e){var n;const r=await this.assertedPersistence.getCurrentUser();let i=r,s=!1;if(e&&this.config.authDomain){await this.getOrInitRedirectPersistenceManager();const o=(n=this.redirectUser)===null||n===void 0?void 0:n._redirectEventId,a=i==null?void 0:i._redirectEventId,c=await this.tryRedirectSignIn(e);(!o||o===a)&&(c==null?void 0:c.user)&&(i=c.user,s=!0)}if(!i)return this.directlySetCurrentUser(null);if(!i._redirectEventId){if(s)try{await this.beforeStateQueue.runMiddleware(i)}catch(o){i=r,this._popupRedirectResolver._overrideRedirectResult(this,()=>Promise.reject(o))}return i?this.reloadAndSetCurrentUserOrClear(i):this.directlySetCurrentUser(null)}return P(this._popupRedirectResolver,this,"argument-error"),await this.getOrInitRedirectPersistenceManager(),this.redirectUser&&this.redirectUser._redirectEventId===i._redirectEventId?this.directlySetCurrentUser(i):this.reloadAndSetCurrentUserOrClear(i)}async tryRedirectSignIn(e){let n=null;try{n=await this._popupRedirectResolver._completeRedirectFn(this,e,!0)}catch{await this._setRedirectUser(null)}return n}async reloadAndSetCurrentUserOrClear(e){try{await xa(e)}catch(n){if((n==null?void 0:n.code)!=="auth/network-request-failed")return this.directlySetCurrentUser(null)}return this.directlySetCurrentUser(e)}useDeviceLanguage(){this.languageCode=Rx()}async _delete(){this._deleted=!0}async updateCurrentUser(e){const n=e?Y(e):null;return n&&P(n.auth.config.apiKey===this.config.apiKey,this,"invalid-user-token"),this._updateCurrentUser(n&&n._clone(this))}async _updateCurrentUser(e,n=!1){if(!this._deleted)return e&&P(this.tenantId===e.tenantId,this,"tenant-id-mismatch"),n||await this.beforeStateQueue.runMiddleware(e),this.queue(async()=>{await this.directlySetCurrentUser(e),this.notifyAuthListeners()})}async signOut(){return await this.beforeStateQueue.runMiddleware(null),(this.redirectPersistenceManager||this._popupRedirectResolver)&&await this._setRedirectUser(null),this._updateCurrentUser(null,!0)}setPersistence(e){return this.queue(async()=>{await this.assertedPersistence.setPersistence(Jt(e))})}async initializeRecaptchaConfig(){const e=await eI(this,{clientType:"CLIENT_TYPE_WEB",version:"RECAPTCHA_ENTERPRISE"}),n=new tI(e);this.tenantId==null?this._agentRecaptchaConfig=n:this._tenantRecaptchaConfigs[this.tenantId]=n,n.emailPasswordEnabled&&new rI(this).verify()}_getRecaptchaConfig(){return this.tenantId==null?this._agentRecaptchaConfig:this._tenantRecaptchaConfigs[this.tenantId]}_getPersistence(){return this.assertedPersistence.persistence.type}_updateErrorMap(e){this._errorFactory=new os("auth","Firebase",e())}onAuthStateChanged(e,n,r){return this.registerStateListener(this.authStateSubscription,e,n,r)}beforeAuthStateChanged(e,n){return this.beforeStateQueue.pushCallback(e,n)}onIdTokenChanged(e,n,r){return this.registerStateListener(this.idTokenSubscription,e,n,r)}toJSON(){var e;return{apiKey:this.config.apiKey,authDomain:this.config.authDomain,appName:this.name,currentUser:(e=this._currentUser)===null||e===void 0?void 0:e.toJSON()}}async _setRedirectUser(e,n){const r=await this.getOrInitRedirectPersistenceManager(n);return e===null?r.removeCurrentUser():r.setCurrentUser(e)}async getOrInitRedirectPersistenceManager(e){if(!this.redirectPersistenceManager){const n=e&&Jt(e)||this._popupRedirectResolver;P(n,this,"argument-error"),this.redirectPersistenceManager=await Ms.create(this,[Jt(n._redirectPersistence)],"redirectUser"),this.redirectUser=await this.redirectPersistenceManager.getCurrentUser()}return this.redirectPersistenceManager}async _redirectUserForId(e){var n,r;return this._isInitialized&&await this.queue(async()=>{}),((n=this._currentUser)===null||n===void 0?void 0:n._redirectEventId)===e?this._currentUser:((r=this.redirectUser)===null||r===void 0?void 0:r._redirectEventId)===e?this.redirectUser:null}async _persistUserIfCurrent(e){if(e===this.currentUser)return this.queue(async()=>this.directlySetCurrentUser(e))}_notifyListenersIfCurrent(e){e===this.currentUser&&this.notifyAuthListeners()}_key(){return`${this.config.authDomain}:${this.config.apiKey}:${this.name}`}_startProactiveRefresh(){this.isProactiveRefreshEnabled=!0,this.currentUser&&this._currentUser._startProactiveRefresh()}_stopProactiveRefresh(){this.isProactiveRefreshEnabled=!1,this.currentUser&&this._currentUser._stopProactiveRefresh()}get _currentUser(){return this.currentUser}notifyAuthListeners(){var e,n;if(!this._isInitialized)return;this.idTokenSubscription.next(this.currentUser);const r=(n=(e=this.currentUser)===null||e===void 0?void 0:e.uid)!==null&&n!==void 0?n:null;this.lastNotifiedUid!==r&&(this.lastNotifiedUid=r,this.authStateSubscription.next(this.currentUser))}registerStateListener(e,n,r,i){if(this._deleted)return()=>{};const s=typeof n=="function"?n:n.next.bind(n),o=this._isInitialized?Promise.resolve():this._initializationPromise;return P(o,this,"internal-error"),o.then(()=>s(this.currentUser)),typeof n=="function"?e.addObserver(n,r,i):e.addObserver(n)}async directlySetCurrentUser(e){this.currentUser&&this.currentUser!==e&&this._currentUser._stopProactiveRefresh(),e&&this.isProactiveRefreshEnabled&&e._startProactiveRefresh(),this.currentUser=e,e?await this.assertedPersistence.setCurrentUser(e):await this.assertedPersistence.removeCurrentUser()}queue(e){return this.operations=this.operations.then(e,e),this.operations}get assertedPersistence(){return P(this.persistenceManager,this,"internal-error"),this.persistenceManager}_logFramework(e){!e||this.frameworks.includes(e)||(this.frameworks.push(e),this.frameworks.sort(),this.clientVersion=Zb(this.config.clientPlatform,this._getFrameworks()))}_getFrameworks(){return this.frameworks}async _getAdditionalHeaders(){var e;const n={["X-Client-Version"]:this.clientVersion};this.app.options.appId&&(n["X-Firebase-gmpid"]=this.app.options.appId);const r=await((e=this.heartbeatServiceProvider.getImmediate({optional:!0}))===null||e===void 0?void 0:e.getHeartbeatsHeader());r&&(n["X-Firebase-Client"]=r);const i=await this._getAppCheckToken();return i&&(n["X-Firebase-AppCheck"]=i),n}async _getAppCheckToken(){var e;const n=await((e=this.appCheckServiceProvider.getImmediate({optional:!0}))===null||e===void 0?void 0:e.getToken());return n!=null&&n.error&&Ax(`Error while retrieving App Check token: ${n.error}`),n==null?void 0:n.token}}function Ze(t){return Y(t)}class Ky{constructor(e){this.auth=e,this.observer=null,this.addObserver=Ab(n=>this.observer=n)}get next(){return P(this.observer,this.auth,"internal-error"),this.observer.next.bind(this.observer)}}function eN(t,e){const n=(e==null?void 0:e.persistence)||[],r=(Array.isArray(n)?n:[n]).map(Jt);e!=null&&e.errorMap&&t._updateErrorMap(e.errorMap),t._initializeWithPersistence(r,e==null?void 0:e.popupRedirectResolver)}function tN(t,e,n){const r=Ze(t);P(r._canInitEmulator,r,"emulator-config-failed"),P(/^https?:\/\//.test(e),r,"invalid-emulator-scheme");const i=!!(n!=null&&n.disableWarnings),s=iI(e),{host:o,port:a}=nN(e),c=a===null?"":`:${a}`;r.config.emulator={url:`${s}//${o}${c}/`},r.settings.appVerificationDisabledForTesting=!0,r.emulatorConfig=Object.freeze({host:o,port:a,protocol:s.replace(":",""),options:Object.freeze({disableWarnings:i})}),i||rN()}function iI(t){const e=t.indexOf(":");return e<0?"":t.substr(0,e+1)}function nN(t){const e=iI(t),n=/(\/\/)?([^?#/]+)/.exec(t.substr(e.length));if(!n)return{host:"",port:null};const r=n[2].split("@").pop()||"",i=/^(\[[^\]]+\])(:|$)/.exec(r);if(i){const s=i[1];return{host:s,port:Wy(r.substr(s.length+1))}}else{const[s,o]=r.split(":");return{host:s,port:Wy(o)}}}function Wy(t){if(!t)return null;const e=Number(t);return isNaN(e)?null:e}function rN(){function t(){const e=document.createElement("p"),n=e.style;e.innerText="Running in emulator mode. Do not use with production credentials.",n.position="fixed",n.width="100%",n.backgroundColor="#ffffff",n.border=".1em solid #000000",n.color="#b50000",n.bottom="0px",n.left="0px",n.margin="0px",n.zIndex="10000",n.textAlign="center",e.classList.add("firebase-emulator-warning"),document.body.appendChild(e)}typeof console<"u"&&typeof console.info=="function"&&console.info("WARNING: You are using the Auth Emulator, which is intended for local testing only.  Do not use with production credentials."),typeof window<"u"&&typeof document<"u"&&(document.readyState==="loading"?window.addEventListener("DOMContentLoaded",t):t())}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class yo{constructor(e,n){this.providerId=e,this.signInMethod=n}toJSON(){return Ln("not implemented")}_getIdTokenResponse(e){return Ln("not implemented")}_linkToIdToken(e,n){return Ln("not implemented")}_getReauthenticationResolver(e){return Ln("not implemented")}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function sI(t,e){return ct(t,"POST","/v1/accounts:resetPassword",it(t,e))}async function oI(t,e){return ct(t,"POST","/v1/accounts:update",e)}async function iN(t,e){return ct(t,"POST","/v1/accounts:update",it(t,e))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function Xh(t,e){return fr(t,"POST","/v1/accounts:signInWithPassword",it(t,e))}async function Ml(t,e){return ct(t,"POST","/v1/accounts:sendOobCode",it(t,e))}async function sN(t,e){return Ml(t,e)}async function Jh(t,e){return Ml(t,e)}async function Zh(t,e){return Ml(t,e)}async function oN(t,e){return Ml(t,e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function aN(t,e){return fr(t,"POST","/v1/accounts:signInWithEmailLink",it(t,e))}async function cN(t,e){return fr(t,"POST","/v1/accounts:signInWithEmailLink",it(t,e))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Pa extends yo{constructor(e,n,r,i=null){super("password",r),this._email=e,this._password=n,this._tenantId=i}static _fromEmailAndPassword(e,n){return new Pa(e,n,"password")}static _fromEmailAndCode(e,n,r=null){return new Pa(e,n,"emailLink",r)}toJSON(){return{email:this._email,password:this._password,signInMethod:this.signInMethod,tenantId:this._tenantId}}static fromJSON(e){const n=typeof e=="string"?JSON.parse(e):e;if((n==null?void 0:n.email)&&(n==null?void 0:n.password)){if(n.signInMethod==="password")return this._fromEmailAndPassword(n.email,n.password);if(n.signInMethod==="emailLink")return this._fromEmailAndCode(n.email,n.password,n.tenantId)}return null}async _getIdTokenResponse(e){var n;switch(this.signInMethod){case"password":const r={returnSecureToken:!0,email:this._email,password:this._password,clientType:"CLIENT_TYPE_WEB"};if(!((n=e._getRecaptchaConfig())===null||n===void 0)&&n.emailPasswordEnabled){const i=await Hr(e,r,"signInWithPassword");return Xh(e,i)}else return Xh(e,r).catch(async i=>{if(i.code==="auth/missing-recaptcha-token"){console.log("Sign-in with email address and password is protected by reCAPTCHA for this project. Automatically triggering the reCAPTCHA flow and restarting the sign-in flow.");const s=await Hr(e,r,"signInWithPassword");return Xh(e,s)}else return Promise.reject(i)});case"emailLink":return aN(e,{email:this._email,oobCode:this._password});default:bt(e,"internal-error")}}async _linkToIdToken(e,n){switch(this.signInMethod){case"password":return oI(e,{idToken:n,returnSecureToken:!0,email:this._email,password:this._password});case"emailLink":return cN(e,{idToken:n,email:this._email,oobCode:this._password});default:bt(e,"internal-error")}}_getReauthenticationResolver(e){return this._getIdTokenResponse(e)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function er(t,e){return fr(t,"POST","/v1/accounts:signInWithIdp",it(t,e))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const uN="http://localhost";class zn extends yo{constructor(){super(...arguments),this.pendingToken=null}static _fromParams(e){const n=new zn(e.providerId,e.signInMethod);return e.idToken||e.accessToken?(e.idToken&&(n.idToken=e.idToken),e.accessToken&&(n.accessToken=e.accessToken),e.nonce&&!e.pendingToken&&(n.nonce=e.nonce),e.pendingToken&&(n.pendingToken=e.pendingToken)):e.oauthToken&&e.oauthTokenSecret?(n.accessToken=e.oauthToken,n.secret=e.oauthTokenSecret):bt("argument-error"),n}toJSON(){return{idToken:this.idToken,accessToken:this.accessToken,secret:this.secret,nonce:this.nonce,pendingToken:this.pendingToken,providerId:this.providerId,signInMethod:this.signInMethod}}static fromJSON(e){const n=typeof e=="string"?JSON.parse(e):e,{providerId:r,signInMethod:i}=n,s=bp(n,["providerId","signInMethod"]);if(!r||!i)return null;const o=new zn(r,i);return o.idToken=s.idToken||void 0,o.accessToken=s.accessToken||void 0,o.secret=s.secret,o.nonce=s.nonce,o.pendingToken=s.pendingToken||null,o}_getIdTokenResponse(e){const n=this.buildRequest();return er(e,n)}_linkToIdToken(e,n){const r=this.buildRequest();return r.idToken=n,er(e,r)}_getReauthenticationResolver(e){const n=this.buildRequest();return n.autoCreate=!1,er(e,n)}buildRequest(){const e={requestUri:uN,returnSecureToken:!0};if(this.pendingToken)e.pendingToken=this.pendingToken;else{const n={};this.idToken&&(n.id_token=this.idToken),this.accessToken&&(n.access_token=this.accessToken),this.secret&&(n.oauth_token_secret=this.secret),n.providerId=this.providerId,this.nonce&&!this.pendingToken&&(n.nonce=this.nonce),e.postBody=po(n)}return e}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function lN(t,e){return ct(t,"POST","/v1/accounts:sendVerificationCode",it(t,e))}async function hN(t,e){return fr(t,"POST","/v1/accounts:signInWithPhoneNumber",it(t,e))}async function dN(t,e){const n=await fr(t,"POST","/v1/accounts:signInWithPhoneNumber",it(t,e));if(n.temporaryProof)throw Go(t,"account-exists-with-different-credential",n);return n}const fN={USER_NOT_FOUND:"user-not-found"};async function pN(t,e){const n=Object.assign(Object.assign({},e),{operation:"REAUTH"});return fr(t,"POST","/v1/accounts:signInWithPhoneNumber",it(t,n),fN)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Bi extends yo{constructor(e){super("phone","phone"),this.params=e}static _fromVerification(e,n){return new Bi({verificationId:e,verificationCode:n})}static _fromTokenResponse(e,n){return new Bi({phoneNumber:e,temporaryProof:n})}_getIdTokenResponse(e){return hN(e,this._makeVerificationRequest())}_linkToIdToken(e,n){return dN(e,Object.assign({idToken:n},this._makeVerificationRequest()))}_getReauthenticationResolver(e){return pN(e,this._makeVerificationRequest())}_makeVerificationRequest(){const{temporaryProof:e,phoneNumber:n,verificationId:r,verificationCode:i}=this.params;return e&&n?{temporaryProof:e,phoneNumber:n}:{sessionInfo:r,code:i}}toJSON(){const e={providerId:this.providerId};return this.params.phoneNumber&&(e.phoneNumber=this.params.phoneNumber),this.params.temporaryProof&&(e.temporaryProof=this.params.temporaryProof),this.params.verificationCode&&(e.verificationCode=this.params.verificationCode),this.params.verificationId&&(e.verificationId=this.params.verificationId),e}static fromJSON(e){typeof e=="string"&&(e=JSON.parse(e));const{verificationId:n,verificationCode:r,phoneNumber:i,temporaryProof:s}=e;return!r&&!n&&!i&&!s?null:new Bi({verificationId:n,verificationCode:r,phoneNumber:i,temporaryProof:s})}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function mN(t){switch(t){case"recoverEmail":return"RECOVER_EMAIL";case"resetPassword":return"PASSWORD_RESET";case"signIn":return"EMAIL_SIGNIN";case"verifyEmail":return"VERIFY_EMAIL";case"verifyAndChangeEmail":return"VERIFY_AND_CHANGE_EMAIL";case"revertSecondFactorAddition":return"REVERT_SECOND_FACTOR_ADDITION";default:return null}}function gN(t){const e=As(Wo(t)).link,n=e?As(Wo(e)).deep_link_id:null,r=As(Wo(t)).deep_link_id;return(r?As(Wo(r)).link:null)||r||n||e||t}class Fl{constructor(e){var n,r,i,s,o,a;const c=As(Wo(e)),u=(n=c.apiKey)!==null&&n!==void 0?n:null,l=(r=c.oobCode)!==null&&r!==void 0?r:null,h=mN((i=c.mode)!==null&&i!==void 0?i:null);P(u&&l&&h,"argument-error"),this.apiKey=u,this.operation=h,this.code=l,this.continueUrl=(s=c.continueUrl)!==null&&s!==void 0?s:null,this.languageCode=(o=c.languageCode)!==null&&o!==void 0?o:null,this.tenantId=(a=c.tenantId)!==null&&a!==void 0?a:null}static parseLink(e){const n=gN(e);try{return new Fl(n)}catch{return null}}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ri{constructor(){this.providerId=ri.PROVIDER_ID}static credential(e,n){return Pa._fromEmailAndPassword(e,n)}static credentialWithLink(e,n){const r=Fl.parseLink(n);return P(r,"argument-error"),Pa._fromEmailAndCode(e,r.code,r.tenantId)}}ri.PROVIDER_ID="password";ri.EMAIL_PASSWORD_SIGN_IN_METHOD="password";ri.EMAIL_LINK_SIGN_IN_METHOD="emailLink";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class pr{constructor(e){this.providerId=e,this.defaultLanguageCode=null,this.customParameters={}}setDefaultLanguage(e){this.defaultLanguageCode=e}setCustomParameters(e){return this.customParameters=e,this}getCustomParameters(){return this.customParameters}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class vo extends pr{constructor(){super(...arguments),this.scopes=[]}addScope(e){return this.scopes.includes(e)||this.scopes.push(e),this}getScopes(){return[...this.scopes]}}class Fs extends vo{static credentialFromJSON(e){const n=typeof e=="string"?JSON.parse(e):e;return P("providerId"in n&&"signInMethod"in n,"argument-error"),zn._fromParams(n)}credential(e){return this._credential(Object.assign(Object.assign({},e),{nonce:e.rawNonce}))}_credential(e){return P(e.idToken||e.accessToken,"argument-error"),zn._fromParams(Object.assign(Object.assign({},e),{providerId:this.providerId,signInMethod:this.providerId}))}static credentialFromResult(e){return Fs.oauthCredentialFromTaggedObject(e)}static credentialFromError(e){return Fs.oauthCredentialFromTaggedObject(e.customData||{})}static oauthCredentialFromTaggedObject({_tokenResponse:e}){if(!e)return null;const{oauthIdToken:n,oauthAccessToken:r,oauthTokenSecret:i,pendingToken:s,nonce:o,providerId:a}=e;if(!r&&!i&&!n&&!s||!a)return null;try{return new Fs(a)._credential({idToken:n,accessToken:r,nonce:o,pendingToken:s})}catch{return null}}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Rn extends vo{constructor(){super("facebook.com")}static credential(e){return zn._fromParams({providerId:Rn.PROVIDER_ID,signInMethod:Rn.FACEBOOK_SIGN_IN_METHOD,accessToken:e})}static credentialFromResult(e){return Rn.credentialFromTaggedObject(e)}static credentialFromError(e){return Rn.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e||!("oauthAccessToken"in e)||!e.oauthAccessToken)return null;try{return Rn.credential(e.oauthAccessToken)}catch{return null}}}Rn.FACEBOOK_SIGN_IN_METHOD="facebook.com";Rn.PROVIDER_ID="facebook.com";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class xn extends vo{constructor(){super("google.com"),this.addScope("profile")}static credential(e,n){return zn._fromParams({providerId:xn.PROVIDER_ID,signInMethod:xn.GOOGLE_SIGN_IN_METHOD,idToken:e,accessToken:n})}static credentialFromResult(e){return xn.credentialFromTaggedObject(e)}static credentialFromError(e){return xn.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e)return null;const{oauthIdToken:n,oauthAccessToken:r}=e;if(!n&&!r)return null;try{return xn.credential(n,r)}catch{return null}}}xn.GOOGLE_SIGN_IN_METHOD="google.com";xn.PROVIDER_ID="google.com";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Nn extends vo{constructor(){super("github.com")}static credential(e){return zn._fromParams({providerId:Nn.PROVIDER_ID,signInMethod:Nn.GITHUB_SIGN_IN_METHOD,accessToken:e})}static credentialFromResult(e){return Nn.credentialFromTaggedObject(e)}static credentialFromError(e){return Nn.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e||!("oauthAccessToken"in e)||!e.oauthAccessToken)return null;try{return Nn.credential(e.oauthAccessToken)}catch{return null}}}Nn.GITHUB_SIGN_IN_METHOD="github.com";Nn.PROVIDER_ID="github.com";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const yN="http://localhost";class Ys extends yo{constructor(e,n){super(e,e),this.pendingToken=n}_getIdTokenResponse(e){const n=this.buildRequest();return er(e,n)}_linkToIdToken(e,n){const r=this.buildRequest();return r.idToken=n,er(e,r)}_getReauthenticationResolver(e){const n=this.buildRequest();return n.autoCreate=!1,er(e,n)}toJSON(){return{signInMethod:this.signInMethod,providerId:this.providerId,pendingToken:this.pendingToken}}static fromJSON(e){const n=typeof e=="string"?JSON.parse(e):e,{providerId:r,signInMethod:i,pendingToken:s}=n;return!r||!i||!s||r!==i?null:new Ys(r,s)}static _create(e,n){return new Ys(e,n)}buildRequest(){return{requestUri:yN,returnSecureToken:!0,pendingToken:this.pendingToken}}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const vN="saml.";class $u extends pr{constructor(e){P(e.startsWith(vN),"argument-error"),super(e)}static credentialFromResult(e){return $u.samlCredentialFromTaggedObject(e)}static credentialFromError(e){return $u.samlCredentialFromTaggedObject(e.customData||{})}static credentialFromJSON(e){const n=Ys.fromJSON(e);return P(n,"argument-error"),n}static samlCredentialFromTaggedObject({_tokenResponse:e}){if(!e)return null;const{pendingToken:n,providerId:r}=e;if(!n||!r)return null;try{return Ys._create(r,n)}catch{return null}}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Pn extends vo{constructor(){super("twitter.com")}static credential(e,n){return zn._fromParams({providerId:Pn.PROVIDER_ID,signInMethod:Pn.TWITTER_SIGN_IN_METHOD,oauthToken:e,oauthTokenSecret:n})}static credentialFromResult(e){return Pn.credentialFromTaggedObject(e)}static credentialFromError(e){return Pn.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e)return null;const{oauthAccessToken:n,oauthTokenSecret:r}=e;if(!n||!r)return null;try{return Pn.credential(n,r)}catch{return null}}}Pn.TWITTER_SIGN_IN_METHOD="twitter.com";Pn.PROVIDER_ID="twitter.com";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function _u(t,e){return fr(t,"POST","/v1/accounts:signUp",it(t,e))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class un{constructor(e){this.user=e.user,this.providerId=e.providerId,this._tokenResponse=e._tokenResponse,this.operationType=e.operationType}static async _fromIdTokenResponse(e,n,r,i=!1){const s=await Ui._fromIdTokenResponse(e,r,i),o=Gy(r);return new un({user:s,providerId:o,_tokenResponse:r,operationType:n})}static async _forOperation(e,n,r){await e._updateTokensIfNecessary(r,!0);const i=Gy(r);return new un({user:e,providerId:i,_tokenResponse:r,operationType:n})}}function Gy(t){return t.providerId?t.providerId:"phoneNumber"in t?"phone":null}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function wN(t){var e;const n=Ze(t);if(await n._initializationPromise,!((e=n.currentUser)===null||e===void 0)&&e.isAnonymous)return new un({user:n.currentUser,providerId:null,operationType:"signIn"});const r=await _u(n,{returnSecureToken:!0}),i=await un._fromIdTokenResponse(n,"signIn",r,!0);return await n._updateCurrentUser(i.user),i}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class qu extends Ct{constructor(e,n,r,i){var s;super(n.code,n.message),this.operationType=r,this.user=i,Object.setPrototypeOf(this,qu.prototype),this.customData={appName:e.name,tenantId:(s=e.tenantId)!==null&&s!==void 0?s:void 0,_serverResponse:n.customData._serverResponse,operationType:r}}static _fromErrorAndOperation(e,n,r,i){return new qu(e,n,r,i)}}function aI(t,e,n,r){return(e==="reauthenticate"?n._getReauthenticationResolver(t):n._getIdTokenResponse(t)).catch(s=>{throw s.code==="auth/multi-factor-auth-required"?qu._fromErrorAndOperation(t,s,e,r):s})}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function cI(t){return new Set(t.map(({providerId:e})=>e).filter(e=>!!e))}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function _N(t,e){const n=Y(t);await Ul(!0,n,e);const{providerUserInfo:r}=await Ox(n.auth,{idToken:await n.getIdToken(),deleteProvider:[e]}),i=cI(r||[]);return n.providerData=n.providerData.filter(s=>i.has(s.providerId)),i.has("phone")||(n.phoneNumber=null),await n.auth._persistUserIfCurrent(n),n}async function Ap(t,e,n=!1){const r=await ir(t,e._linkToIdToken(t.auth,await t.getIdToken()),n);return un._forOperation(t,"link",r)}async function Ul(t,e,n){await xa(e);const r=cI(e.providerData),i=t===!1?"provider-already-linked":"no-such-provider";P(r.has(n)===t,e.auth,i)}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function uI(t,e,n=!1){const{auth:r}=t,i="reauthenticate";try{const s=await ir(t,aI(r,i,e,t),n);P(s.idToken,r,"internal-error");const o=Ll(s.idToken);P(o,r,"internal-error");const{sub:a}=o;return P(t.uid===a,r,"user-mismatch"),un._forOperation(t,i,s)}catch(s){throw(s==null?void 0:s.code)==="auth/user-not-found"&&bt(r,"user-mismatch"),s}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function lI(t,e,n=!1){const r="signIn",i=await aI(t,r,e),s=await un._fromIdTokenResponse(t,r,i);return n||await t._updateCurrentUser(s.user),s}async function Vl(t,e){return lI(Ze(t),e)}async function hI(t,e){const n=Y(t);return await Ul(!1,n,e.providerId),Ap(n,e)}async function dI(t,e){return uI(Y(t),e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function bN(t,e){return fr(t,"POST","/v1/accounts:signInWithCustomToken",it(t,e))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function IN(t,e){const n=Ze(t),r=await bN(n,{token:e,returnSecureToken:!0}),i=await un._fromIdTokenResponse(n,"signIn",r);return await n._updateCurrentUser(i.user),i}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class cc{constructor(e,n){this.factorId=e,this.uid=n.mfaEnrollmentId,this.enrollmentTime=new Date(n.enrolledAt).toUTCString(),this.displayName=n.displayName}static _fromServerResponse(e,n){return"phoneInfo"in n?Cp._fromServerResponse(e,n):"totpInfo"in n?Rp._fromServerResponse(e,n):bt(e,"internal-error")}}class Cp extends cc{constructor(e){super("phone",e),this.phoneNumber=e.phoneInfo}static _fromServerResponse(e,n){return new Cp(n)}}class Rp extends cc{constructor(e){super("totp",e)}static _fromServerResponse(e,n){return new Rp(n)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Us(t,e,n){var r;P(((r=n.url)===null||r===void 0?void 0:r.length)>0,t,"invalid-continue-uri"),P(typeof n.dynamicLinkDomain>"u"||n.dynamicLinkDomain.length>0,t,"invalid-dynamic-link-domain"),e.continueUrl=n.url,e.dynamicLinkDomain=n.dynamicLinkDomain,e.canHandleCodeInApp=n.handleCodeInApp,n.iOS&&(P(n.iOS.bundleId.length>0,t,"missing-ios-bundle-id"),e.iOSBundleId=n.iOS.bundleId),n.android&&(P(n.android.packageName.length>0,t,"missing-android-pkg-name"),e.androidInstallApp=n.android.installApp,e.androidMinimumVersionCode=n.android.minimumVersion,e.androidPackageName=n.android.packageName)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function EN(t,e,n){var r;const i=Ze(t),s={requestType:"PASSWORD_RESET",email:e,clientType:"CLIENT_TYPE_WEB"};if(!((r=i._getRecaptchaConfig())===null||r===void 0)&&r.emailPasswordEnabled){const o=await Hr(i,s,"getOobCode",!0);n&&Us(i,o,n),await Jh(i,o)}else n&&Us(i,s,n),await Jh(i,s).catch(async o=>{if(o.code==="auth/missing-recaptcha-token"){console.log("Password resets are protected by reCAPTCHA for this project. Automatically triggering the reCAPTCHA flow and restarting the password reset flow.");const a=await Hr(i,s,"getOobCode",!0);n&&Us(i,a,n),await Jh(i,a)}else return Promise.reject(o)})}async function TN(t,e,n){await sI(Y(t),{oobCode:e,newPassword:n})}async function SN(t,e){await iN(Y(t),{oobCode:e})}async function fI(t,e){const n=Y(t),r=await sI(n,{oobCode:e}),i=r.requestType;switch(P(i,n,"internal-error"),i){case"EMAIL_SIGNIN":break;case"VERIFY_AND_CHANGE_EMAIL":P(r.newEmail,n,"internal-error");break;case"REVERT_SECOND_FACTOR_ADDITION":P(r.mfaInfo,n,"internal-error");default:P(r.email,n,"internal-error")}let s=null;return r.mfaInfo&&(s=cc._fromServerResponse(Ze(n),r.mfaInfo)),{data:{email:(r.requestType==="VERIFY_AND_CHANGE_EMAIL"?r.newEmail:r.email)||null,previousEmail:(r.requestType==="VERIFY_AND_CHANGE_EMAIL"?r.email:r.newEmail)||null,multiFactorInfo:s},operation:i}}async function kN(t,e){const{data:n}=await fI(Y(t),e);return n.email}async function AN(t,e,n){var r;const i=Ze(t),s={returnSecureToken:!0,email:e,password:n,clientType:"CLIENT_TYPE_WEB"};let o;if(!((r=i._getRecaptchaConfig())===null||r===void 0)&&r.emailPasswordEnabled){const u=await Hr(i,s,"signUpPassword");o=_u(i,u)}else o=_u(i,s).catch(async u=>{if(u.code==="auth/missing-recaptcha-token"){console.log("Sign-up is protected by reCAPTCHA for this project. Automatically triggering the reCAPTCHA flow and restarting the sign-up flow.");const l=await Hr(i,s,"signUpPassword");return _u(i,l)}else return Promise.reject(u)});const a=await o.catch(u=>Promise.reject(u)),c=await un._fromIdTokenResponse(i,"signIn",a);return await i._updateCurrentUser(c.user),c}function CN(t,e,n){return Vl(Y(t),ri.credential(e,n))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function RN(t,e,n){var r;const i=Ze(t),s={requestType:"EMAIL_SIGNIN",email:e,clientType:"CLIENT_TYPE_WEB"};function o(a,c){P(c.handleCodeInApp,i,"argument-error"),c&&Us(i,a,c)}if(!((r=i._getRecaptchaConfig())===null||r===void 0)&&r.emailPasswordEnabled){const a=await Hr(i,s,"getOobCode",!0);o(a,n),await Zh(i,a)}else o(s,n),await Zh(i,s).catch(async a=>{if(a.code==="auth/missing-recaptcha-token"){console.log("Email link sign-in is protected by reCAPTCHA for this project. Automatically triggering the reCAPTCHA flow and restarting the sign-in flow.");const c=await Hr(i,s,"getOobCode",!0);o(c,n),await Zh(i,c)}else return Promise.reject(a)})}function xN(t,e){const n=Fl.parseLink(e);return(n==null?void 0:n.operation)==="EMAIL_SIGNIN"}async function NN(t,e,n){const r=Y(t),i=ri.credentialWithLink(e,n||Ra());return P(i._tenantId===(r.tenantId||null),r,"tenant-id-mismatch"),Vl(r,i)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function PN(t,e){return ct(t,"POST","/v1/accounts:createAuthUri",it(t,e))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function DN(t,e){const n=Ep()?Ra():"http://localhost",r={identifier:e,continueUri:n},{signinMethods:i}=await PN(Y(t),r);return i||[]}async function ON(t,e){const n=Y(t),i={requestType:"VERIFY_EMAIL",idToken:await t.getIdToken()};e&&Us(n.auth,i,e);const{email:s}=await sN(n.auth,i);s!==t.email&&await t.reload()}async function LN(t,e,n){const r=Y(t),s={requestType:"VERIFY_AND_CHANGE_EMAIL",idToken:await t.getIdToken(),newEmail:e};n&&Us(r.auth,s,n);const{email:o}=await oN(r.auth,s);o!==t.email&&await t.reload()}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function MN(t,e){return ct(t,"POST","/v1/accounts:update",e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function FN(t,{displayName:e,photoURL:n}){if(e===void 0&&n===void 0)return;const r=Y(t),s={idToken:await r.getIdToken(),displayName:e,photoUrl:n,returnSecureToken:!0},o=await ir(r,MN(r.auth,s));r.displayName=o.displayName||null,r.photoURL=o.photoUrl||null;const a=r.providerData.find(({providerId:c})=>c==="password");a&&(a.displayName=r.displayName,a.photoURL=r.photoURL),await r._updateTokensIfNecessary(o)}function UN(t,e){return pI(Y(t),e,null)}function VN(t,e){return pI(Y(t),null,e)}async function pI(t,e,n){const{auth:r}=t,s={idToken:await t.getIdToken(),returnSecureToken:!0};e&&(s.email=e),n&&(s.password=n);const o=await ir(t,oI(r,s));await t._updateTokensIfNecessary(o,!0)}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function BN(t){var e,n;if(!t)return null;const{providerId:r}=t,i=t.rawUserInfo?JSON.parse(t.rawUserInfo):{},s=t.isNewUser||t.kind==="identitytoolkit#SignupNewUserResponse";if(!r&&(t==null?void 0:t.idToken)){const o=(n=(e=Ll(t.idToken))===null||e===void 0?void 0:e.firebase)===null||n===void 0?void 0:n.sign_in_provider;if(o){const a=o!=="anonymous"&&o!=="custom"?o:null;return new Vs(s,a)}}if(!r)return null;switch(r){case"facebook.com":return new $N(s,i);case"github.com":return new qN(s,i);case"google.com":return new jN(s,i);case"twitter.com":return new zN(s,i,t.screenName||null);case"custom":case"anonymous":return new Vs(s,null);default:return new Vs(s,r,i)}}class Vs{constructor(e,n,r={}){this.isNewUser=e,this.providerId=n,this.profile=r}}class mI extends Vs{constructor(e,n,r,i){super(e,n,r),this.username=i}}class $N extends Vs{constructor(e,n){super(e,"facebook.com",n)}}class qN extends mI{constructor(e,n){super(e,"github.com",n,typeof(n==null?void 0:n.login)=="string"?n==null?void 0:n.login:null)}}class jN extends Vs{constructor(e,n){super(e,"google.com",n)}}class zN extends mI{constructor(e,n,r){super(e,"twitter.com",n,r)}}function HN(t){const{user:e,_tokenResponse:n}=t;return e.isAnonymous&&!n?{providerId:null,isNewUser:!1,profile:null}:BN(n)}class Ri{constructor(e,n,r){this.type=e,this.credential=n,this.auth=r}static _fromIdtoken(e,n){return new Ri("enroll",e,n)}static _fromMfaPendingCredential(e){return new Ri("signin",e)}toJSON(){return{multiFactorSession:{[this.type==="enroll"?"idToken":"pendingCredential"]:this.credential}}}static fromJSON(e){var n,r;if(e!=null&&e.multiFactorSession){if(!((n=e.multiFactorSession)===null||n===void 0)&&n.pendingCredential)return Ri._fromMfaPendingCredential(e.multiFactorSession.pendingCredential);if(!((r=e.multiFactorSession)===null||r===void 0)&&r.idToken)return Ri._fromIdtoken(e.multiFactorSession.idToken)}return null}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class xp{constructor(e,n,r){this.session=e,this.hints=n,this.signInResolver=r}static _fromError(e,n){const r=Ze(e),i=n.customData._serverResponse,s=(i.mfaInfo||[]).map(a=>cc._fromServerResponse(r,a));P(i.mfaPendingCredential,r,"internal-error");const o=Ri._fromMfaPendingCredential(i.mfaPendingCredential);return new xp(o,s,async a=>{const c=await a._process(r,o);delete i.mfaInfo,delete i.mfaPendingCredential;const u=Object.assign(Object.assign({},i),{idToken:c.idToken,refreshToken:c.refreshToken});switch(n.operationType){case"signIn":const l=await un._fromIdTokenResponse(r,n.operationType,u);return await r._updateCurrentUser(l.user),l;case"reauthenticate":return P(n.user,r,"internal-error"),un._forOperation(n.user,n.operationType,u);default:bt(r,"internal-error")}})}async resolveSignIn(e){const n=e;return this.signInResolver(n)}}function KN(t,e){var n;const r=Y(t),i=e;return P(e.customData.operationType,r,"argument-error"),P((n=i.customData._serverResponse)===null||n===void 0?void 0:n.mfaPendingCredential,r,"argument-error"),xp._fromError(r,i)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function WN(t,e){return ct(t,"POST","/v2/accounts/mfaEnrollment:start",it(t,e))}function GN(t,e){return ct(t,"POST","/v2/accounts/mfaEnrollment:finalize",it(t,e))}function YN(t,e){return ct(t,"POST","/v2/accounts/mfaEnrollment:withdraw",it(t,e))}class Np{constructor(e){this.user=e,this.enrolledFactors=[],e._onReload(n=>{n.mfaInfo&&(this.enrolledFactors=n.mfaInfo.map(r=>cc._fromServerResponse(e.auth,r)))})}static _fromUser(e){return new Np(e)}async getSession(){return Ri._fromIdtoken(await this.user.getIdToken(),this.user.auth)}async enroll(e,n){const r=e,i=await this.getSession(),s=await ir(this.user,r._process(this.user.auth,i,n));return await this.user._updateTokensIfNecessary(s),this.user.reload()}async unenroll(e){const n=typeof e=="string"?e:e.uid,r=await this.user.getIdToken();try{const i=await ir(this.user,YN(this.user.auth,{idToken:r,mfaEnrollmentId:n}));this.enrolledFactors=this.enrolledFactors.filter(({uid:s})=>s!==n),await this.user._updateTokensIfNecessary(i),await this.user.reload()}catch(i){throw i}}}const ed=new WeakMap;function QN(t){const e=Y(t);return ed.has(e)||ed.set(e,Np._fromUser(e)),ed.get(e)}const ju="__sak";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class gI{constructor(e,n){this.storageRetriever=e,this.type=n}_isAvailable(){try{return this.storage?(this.storage.setItem(ju,"1"),this.storage.removeItem(ju),Promise.resolve(!0)):Promise.resolve(!1)}catch{return Promise.resolve(!1)}}_set(e,n){return this.storage.setItem(e,JSON.stringify(n)),Promise.resolve()}_get(e){const n=this.storage.getItem(e);return Promise.resolve(n?JSON.parse(n):null)}_remove(e){return this.storage.removeItem(e),Promise.resolve()}get storage(){return this.storageRetriever()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function XN(){const t=qe();return Sp(t)||go(t)}const JN=1e3,ZN=10;class yI extends gI{constructor(){super(()=>window.localStorage,"LOCAL"),this.boundEventHandler=(e,n)=>this.onStorageEvent(e,n),this.listeners={},this.localCache={},this.pollTimer=null,this.safariLocalStorageNotSynced=XN()&&Wx(),this.fallbackToPolling=Jb(),this._shouldAllowMigration=!0}forAllChangedKeys(e){for(const n of Object.keys(this.listeners)){const r=this.storage.getItem(n),i=this.localCache[n];r!==i&&e(n,i,r)}}onStorageEvent(e,n=!1){if(!e.key){this.forAllChangedKeys((o,a,c)=>{this.notifyListeners(o,c)});return}const r=e.key;if(n?this.detachListener():this.stopPolling(),this.safariLocalStorageNotSynced){const o=this.storage.getItem(r);if(e.newValue!==o)e.newValue!==null?this.storage.setItem(r,e.newValue):this.storage.removeItem(r);else if(this.localCache[r]===e.newValue&&!n)return}const i=()=>{const o=this.storage.getItem(r);!n&&this.localCache[r]===o||this.notifyListeners(r,o)},s=this.storage.getItem(r);Kx()&&s!==e.newValue&&e.newValue!==e.oldValue?setTimeout(i,ZN):i()}notifyListeners(e,n){this.localCache[e]=n;const r=this.listeners[e];if(r)for(const i of Array.from(r))i(n&&JSON.parse(n))}startPolling(){this.stopPolling(),this.pollTimer=setInterval(()=>{this.forAllChangedKeys((e,n,r)=>{this.onStorageEvent(new StorageEvent("storage",{key:e,oldValue:n,newValue:r}),!0)})},JN)}stopPolling(){this.pollTimer&&(clearInterval(this.pollTimer),this.pollTimer=null)}attachListener(){window.addEventListener("storage",this.boundEventHandler)}detachListener(){window.removeEventListener("storage",this.boundEventHandler)}_addListener(e,n){Object.keys(this.listeners).length===0&&(this.fallbackToPolling?this.startPolling():this.attachListener()),this.listeners[e]||(this.listeners[e]=new Set,this.localCache[e]=this.storage.getItem(e)),this.listeners[e].add(n)}_removeListener(e,n){this.listeners[e]&&(this.listeners[e].delete(n),this.listeners[e].size===0&&delete this.listeners[e]),Object.keys(this.listeners).length===0&&(this.detachListener(),this.stopPolling())}async _set(e,n){await super._set(e,n),this.localCache[e]=JSON.stringify(n)}async _get(e){const n=await super._get(e);return this.localCache[e]=JSON.stringify(n),n}async _remove(e){await super._remove(e),delete this.localCache[e]}}yI.type="LOCAL";const Pp=yI;/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class vI extends gI{constructor(){super(()=>window.sessionStorage,"SESSION")}_addListener(e,n){}_removeListener(e,n){}}vI.type="SESSION";const Hi=vI;/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function eP(t){return Promise.all(t.map(async e=>{try{return{fulfilled:!0,value:await e}}catch(n){return{fulfilled:!1,reason:n}}}))}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Bl{constructor(e){this.eventTarget=e,this.handlersMap={},this.boundEventHandler=this.handleEvent.bind(this)}static _getInstance(e){const n=this.receivers.find(i=>i.isListeningto(e));if(n)return n;const r=new Bl(e);return this.receivers.push(r),r}isListeningto(e){return this.eventTarget===e}async handleEvent(e){const n=e,{eventId:r,eventType:i,data:s}=n.data,o=this.handlersMap[i];if(!(o!=null&&o.size))return;n.ports[0].postMessage({status:"ack",eventId:r,eventType:i});const a=Array.from(o).map(async u=>u(n.origin,s)),c=await eP(a);n.ports[0].postMessage({status:"done",eventId:r,eventType:i,response:c})}_subscribe(e,n){Object.keys(this.handlersMap).length===0&&this.eventTarget.addEventListener("message",this.boundEventHandler),this.handlersMap[e]||(this.handlersMap[e]=new Set),this.handlersMap[e].add(n)}_unsubscribe(e,n){this.handlersMap[e]&&n&&this.handlersMap[e].delete(n),(!n||this.handlersMap[e].size===0)&&delete this.handlersMap[e],Object.keys(this.handlersMap).length===0&&this.eventTarget.removeEventListener("message",this.boundEventHandler)}}Bl.receivers=[];/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function uc(t="",e=10){let n="";for(let r=0;r<e;r++)n+=Math.floor(Math.random()*10);return t+n}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class tP{constructor(e){this.target=e,this.handlers=new Set}removeMessageHandler(e){e.messageChannel&&(e.messageChannel.port1.removeEventListener("message",e.onMessage),e.messageChannel.port1.close()),this.handlers.delete(e)}async _send(e,n,r=50){const i=typeof MessageChannel<"u"?new MessageChannel:null;if(!i)throw new Error("connection_unavailable");let s,o;return new Promise((a,c)=>{const u=uc("",20);i.port1.start();const l=setTimeout(()=>{c(new Error("unsupported_event"))},r);o={messageChannel:i,onMessage(h){const d=h;if(d.data.eventId===u)switch(d.data.status){case"ack":clearTimeout(l),s=setTimeout(()=>{c(new Error("timeout"))},3e3);break;case"done":clearTimeout(s),a(d.data.response);break;default:clearTimeout(l),clearTimeout(s),c(new Error("invalid_response"));break}}},this.handlers.add(o),i.port1.addEventListener("message",o.onMessage),this.target.postMessage({eventType:e,eventId:u,data:n},[i.port2])}).finally(()=>{o&&this.removeMessageHandler(o)})}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function nt(){return window}function nP(t){nt().location.href=t}/**
 * @license
 * Copyright 2020 Google LLC.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Dp(){return typeof nt().WorkerGlobalScope<"u"&&typeof nt().importScripts=="function"}async function rP(){if(!(navigator!=null&&navigator.serviceWorker))return null;try{return(await navigator.serviceWorker.ready).active}catch{return null}}function iP(){var t;return((t=navigator==null?void 0:navigator.serviceWorker)===null||t===void 0?void 0:t.controller)||null}function sP(){return Dp()?self:null}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const wI="firebaseLocalStorageDb",oP=1,zu="firebaseLocalStorage",_I="fbase_key";class lc{constructor(e){this.request=e}toPromise(){return new Promise((e,n)=>{this.request.addEventListener("success",()=>{e(this.request.result)}),this.request.addEventListener("error",()=>{n(this.request.error)})})}}function $l(t,e){return t.transaction([zu],e?"readwrite":"readonly").objectStore(zu)}function aP(){const t=indexedDB.deleteDatabase(wI);return new lc(t).toPromise()}function Kd(){const t=indexedDB.open(wI,oP);return new Promise((e,n)=>{t.addEventListener("error",()=>{n(t.error)}),t.addEventListener("upgradeneeded",()=>{const r=t.result;try{r.createObjectStore(zu,{keyPath:_I})}catch(i){n(i)}}),t.addEventListener("success",async()=>{const r=t.result;r.objectStoreNames.contains(zu)?e(r):(r.close(),await aP(),e(await Kd()))})})}async function Yy(t,e,n){const r=$l(t,!0).put({[_I]:e,value:n});return new lc(r).toPromise()}async function cP(t,e){const n=$l(t,!1).get(e),r=await new lc(n).toPromise();return r===void 0?null:r.value}function Qy(t,e){const n=$l(t,!0).delete(e);return new lc(n).toPromise()}const uP=800,lP=3;class bI{constructor(){this.type="LOCAL",this._shouldAllowMigration=!0,this.listeners={},this.localCache={},this.pollTimer=null,this.pendingWrites=0,this.receiver=null,this.sender=null,this.serviceWorkerReceiverAvailable=!1,this.activeServiceWorker=null,this._workerInitializationPromise=this.initializeServiceWorkerMessaging().then(()=>{},()=>{})}async _openDb(){return this.db?this.db:(this.db=await Kd(),this.db)}async _withRetries(e){let n=0;for(;;)try{const r=await this._openDb();return await e(r)}catch(r){if(n++>lP)throw r;this.db&&(this.db.close(),this.db=void 0)}}async initializeServiceWorkerMessaging(){return Dp()?this.initializeReceiver():this.initializeSender()}async initializeReceiver(){this.receiver=Bl._getInstance(sP()),this.receiver._subscribe("keyChanged",async(e,n)=>({keyProcessed:(await this._poll()).includes(n.key)})),this.receiver._subscribe("ping",async(e,n)=>["keyChanged"])}async initializeSender(){var e,n;if(this.activeServiceWorker=await rP(),!this.activeServiceWorker)return;this.sender=new tP(this.activeServiceWorker);const r=await this.sender._send("ping",{},800);!r||((e=r[0])===null||e===void 0?void 0:e.fulfilled)&&((n=r[0])===null||n===void 0?void 0:n.value.includes("keyChanged"))&&(this.serviceWorkerReceiverAvailable=!0)}async notifyServiceWorker(e){if(!(!this.sender||!this.activeServiceWorker||iP()!==this.activeServiceWorker))try{await this.sender._send("keyChanged",{key:e},this.serviceWorkerReceiverAvailable?800:50)}catch{}}async _isAvailable(){try{if(!indexedDB)return!1;const e=await Kd();return await Yy(e,ju,"1"),await Qy(e,ju),!0}catch{}return!1}async _withPendingWrite(e){this.pendingWrites++;try{await e()}finally{this.pendingWrites--}}async _set(e,n){return this._withPendingWrite(async()=>(await this._withRetries(r=>Yy(r,e,n)),this.localCache[e]=n,this.notifyServiceWorker(e)))}async _get(e){const n=await this._withRetries(r=>cP(r,e));return this.localCache[e]=n,n}async _remove(e){return this._withPendingWrite(async()=>(await this._withRetries(n=>Qy(n,e)),delete this.localCache[e],this.notifyServiceWorker(e)))}async _poll(){const e=await this._withRetries(i=>{const s=$l(i,!1).getAll();return new lc(s).toPromise()});if(!e)return[];if(this.pendingWrites!==0)return[];const n=[],r=new Set;for(const{fbase_key:i,value:s}of e)r.add(i),JSON.stringify(this.localCache[i])!==JSON.stringify(s)&&(this.notifyListeners(i,s),n.push(i));for(const i of Object.keys(this.localCache))this.localCache[i]&&!r.has(i)&&(this.notifyListeners(i,null),n.push(i));return n}notifyListeners(e,n){this.localCache[e]=n;const r=this.listeners[e];if(r)for(const i of Array.from(r))i(n)}startPolling(){this.stopPolling(),this.pollTimer=setInterval(async()=>this._poll(),uP)}stopPolling(){this.pollTimer&&(clearInterval(this.pollTimer),this.pollTimer=null)}_addListener(e,n){Object.keys(this.listeners).length===0&&this.startPolling(),this.listeners[e]||(this.listeners[e]=new Set,this._get(e)),this.listeners[e].add(n)}_removeListener(e,n){this.listeners[e]&&(this.listeners[e].delete(n),this.listeners[e].size===0&&delete this.listeners[e]),Object.keys(this.listeners).length===0&&this.stopPolling()}}bI.type="LOCAL";const Da=bI;/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function hP(t,e){return ct(t,"POST","/v2/accounts/mfaSignIn:start",it(t,e))}function dP(t,e){return ct(t,"POST","/v2/accounts/mfaSignIn:finalize",it(t,e))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const fP=500,pP=6e4,jc=1e12;class mP{constructor(e){this.auth=e,this.counter=jc,this._widgets=new Map}render(e,n){const r=this.counter;return this._widgets.set(r,new gP(e,this.auth.name,n||{})),this.counter++,r}reset(e){var n;const r=e||jc;(n=this._widgets.get(r))===null||n===void 0||n.delete(),this._widgets.delete(r)}getResponse(e){var n;const r=e||jc;return((n=this._widgets.get(r))===null||n===void 0?void 0:n.getResponse())||""}async execute(e){var n;const r=e||jc;return(n=this._widgets.get(r))===null||n===void 0||n.execute(),""}}class gP{constructor(e,n,r){this.params=r,this.timerId=null,this.deleted=!1,this.responseToken=null,this.clickHandler=()=>{this.execute()};const i=typeof e=="string"?document.getElementById(e):e;P(i,"argument-error",{appName:n}),this.container=i,this.isVisible=this.params.size!=="invisible",this.isVisible?this.execute():this.container.addEventListener("click",this.clickHandler)}getResponse(){return this.checkIfDeleted(),this.responseToken}delete(){this.checkIfDeleted(),this.deleted=!0,this.timerId&&(clearTimeout(this.timerId),this.timerId=null),this.container.removeEventListener("click",this.clickHandler)}execute(){this.checkIfDeleted(),!this.timerId&&(this.timerId=window.setTimeout(()=>{this.responseToken=yP(50);const{callback:e,"expired-callback":n}=this.params;if(e)try{e(this.responseToken)}catch{}this.timerId=window.setTimeout(()=>{if(this.timerId=null,this.responseToken=null,n)try{n()}catch{}this.isVisible&&this.execute()},pP)},fP))}checkIfDeleted(){if(this.deleted)throw new Error("reCAPTCHA mock was already deleted!")}}function yP(t){const e=[],n="1234567890abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ";for(let r=0;r<t;r++)e.push(n.charAt(Math.floor(Math.random()*n.length)));return e.join("")}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const td=nI("rcb"),vP=new oc(3e4,6e4),wP="https://www.google.com/recaptcha/api.js?";class _P{constructor(){var e;this.hostLanguage="",this.counter=0,this.librarySeparatelyLoaded=!!(!((e=nt().grecaptcha)===null||e===void 0)&&e.render)}load(e,n=""){return P(bP(n),e,"argument-error"),this.shouldResolveImmediately(n)&&zy(nt().grecaptcha)?Promise.resolve(nt().grecaptcha):new Promise((r,i)=>{const s=nt().setTimeout(()=>{i(vt(e,"network-request-failed"))},vP.get());nt()[td]=()=>{nt().clearTimeout(s),delete nt()[td];const a=nt().grecaptcha;if(!a||!zy(a)){i(vt(e,"internal-error"));return}const c=a.render;a.render=(u,l)=>{const h=c(u,l);return this.counter++,h},this.hostLanguage=n,r(a)};const o=`${wP}?${po({onload:td,render:"explicit",hl:n})}`;kp(o).catch(()=>{clearTimeout(s),i(vt(e,"internal-error"))})})}clearedOneInstance(){this.counter--}shouldResolveImmediately(e){var n;return!!(!((n=nt().grecaptcha)===null||n===void 0)&&n.render)&&(e===this.hostLanguage||this.counter>0||this.librarySeparatelyLoaded)}}function bP(t){return t.length<=6&&/^\s*[a-zA-Z0-9\-]*\s*$/.test(t)}class IP{async load(e){return new mP(e)}clearedOneInstance(){}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const II="recaptcha",EP={theme:"light",type:"image"};class TP{constructor(e,n=Object.assign({},EP),r){this.parameters=n,this.type=II,this.destroyed=!1,this.widgetId=null,this.tokenChangeListeners=new Set,this.renderPromise=null,this.recaptcha=null,this.auth=Ze(r),this.isInvisible=this.parameters.size==="invisible",P(typeof document<"u",this.auth,"operation-not-supported-in-this-environment");const i=typeof e=="string"?document.getElementById(e):e;P(i,this.auth,"argument-error"),this.container=i,this.parameters.callback=this.makeTokenCallback(this.parameters.callback),this._recaptchaLoader=this.auth.settings.appVerificationDisabledForTesting?new IP:new _P,this.validateStartingState()}async verify(){this.assertNotDestroyed();const e=await this.render(),n=this.getAssertedRecaptcha(),r=n.getResponse(e);return r||new Promise(i=>{const s=o=>{!o||(this.tokenChangeListeners.delete(s),i(o))};this.tokenChangeListeners.add(s),this.isInvisible&&n.execute(e)})}render(){try{this.assertNotDestroyed()}catch(e){return Promise.reject(e)}return this.renderPromise?this.renderPromise:(this.renderPromise=this.makeRenderPromise().catch(e=>{throw this.renderPromise=null,e}),this.renderPromise)}_reset(){this.assertNotDestroyed(),this.widgetId!==null&&this.getAssertedRecaptcha().reset(this.widgetId)}clear(){this.assertNotDestroyed(),this.destroyed=!0,this._recaptchaLoader.clearedOneInstance(),this.isInvisible||this.container.childNodes.forEach(e=>{this.container.removeChild(e)})}validateStartingState(){P(!this.parameters.sitekey,this.auth,"argument-error"),P(this.isInvisible||!this.container.hasChildNodes(),this.auth,"argument-error"),P(typeof document<"u",this.auth,"operation-not-supported-in-this-environment")}makeTokenCallback(e){return n=>{if(this.tokenChangeListeners.forEach(r=>r(n)),typeof e=="function")e(n);else if(typeof e=="string"){const r=nt()[e];typeof r=="function"&&r(n)}}}assertNotDestroyed(){P(!this.destroyed,this.auth,"internal-error")}async makeRenderPromise(){if(await this.init(),!this.widgetId){let e=this.container;if(!this.isInvisible){const n=document.createElement("div");e.appendChild(n),e=n}this.widgetId=this.getAssertedRecaptcha().render(e,this.parameters)}return this.widgetId}async init(){P(Ep()&&!Dp(),this.auth,"internal-error"),await SP(),this.recaptcha=await this._recaptchaLoader.load(this.auth,this.auth.languageCode||void 0);const e=await Gx(this.auth);P(e,this.auth,"internal-error"),this.parameters.sitekey=e}getAssertedRecaptcha(){return P(this.recaptcha,this.auth,"internal-error"),this.recaptcha}}function SP(){let t=null;return new Promise(e=>{if(document.readyState==="complete"){e();return}t=()=>e(),window.addEventListener("load",t)}).catch(e=>{throw t&&window.removeEventListener("load",t),e})}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Op{constructor(e,n){this.verificationId=e,this.onConfirmation=n}confirm(e){const n=Bi._fromVerification(this.verificationId,e);return this.onConfirmation(n)}}async function kP(t,e,n){const r=Ze(t),i=await ql(r,e,Y(n));return new Op(i,s=>Vl(r,s))}async function AP(t,e,n){const r=Y(t);await Ul(!1,r,"phone");const i=await ql(r.auth,e,Y(n));return new Op(i,s=>hI(r,s))}async function CP(t,e,n){const r=Y(t),i=await ql(r.auth,e,Y(n));return new Op(i,s=>dI(r,s))}async function ql(t,e,n){var r;const i=await n.verify();try{P(typeof i=="string",t,"argument-error"),P(n.type===II,t,"argument-error");let s;if(typeof e=="string"?s={phoneNumber:e}:s=e,"session"in s){const o=s.session;if("phoneNumber"in s)return P(o.type==="enroll",t,"internal-error"),(await WN(t,{idToken:o.credential,phoneEnrollmentInfo:{phoneNumber:s.phoneNumber,recaptchaToken:i}})).phoneSessionInfo.sessionInfo;{P(o.type==="signin",t,"internal-error");const a=((r=s.multiFactorHint)===null||r===void 0?void 0:r.uid)||s.multiFactorUid;return P(a,t,"missing-multi-factor-info"),(await hP(t,{mfaPendingCredential:o.credential,mfaEnrollmentId:a,phoneSignInInfo:{recaptchaToken:i}})).phoneResponseInfo.sessionInfo}}else{const{sessionInfo:o}=await lN(t,{phoneNumber:s.phoneNumber,recaptchaToken:i});return o}}finally{n._reset()}}async function RP(t,e){await Ap(Y(t),e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class bn{constructor(e){this.providerId=bn.PROVIDER_ID,this.auth=Ze(e)}verifyPhoneNumber(e,n){return ql(this.auth,e,Y(n))}static credential(e,n){return Bi._fromVerification(e,n)}static credentialFromResult(e){const n=e;return bn.credentialFromTaggedObject(n)}static credentialFromError(e){return bn.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e)return null;const{phoneNumber:n,temporaryProof:r}=e;return n&&r?Bi._fromTokenResponse(n,r):null}}bn.PROVIDER_ID="phone";bn.PHONE_SIGN_IN_METHOD="phone";/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function cs(t,e){return e?Jt(e):(P(t._popupRedirectResolver,t,"argument-error"),t._popupRedirectResolver)}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Lp extends yo{constructor(e){super("custom","custom"),this.params=e}_getIdTokenResponse(e){return er(e,this._buildIdpRequest())}_linkToIdToken(e,n){return er(e,this._buildIdpRequest(n))}_getReauthenticationResolver(e){return er(e,this._buildIdpRequest())}_buildIdpRequest(e){const n={requestUri:this.params.requestUri,sessionId:this.params.sessionId,postBody:this.params.postBody,tenantId:this.params.tenantId,pendingToken:this.params.pendingToken,returnSecureToken:!0,returnIdpCredential:!0};return e&&(n.idToken=e),n}}function xP(t){return lI(t.auth,new Lp(t),t.bypassAuthState)}function NP(t){const{auth:e,user:n}=t;return P(n,e,"internal-error"),uI(n,new Lp(t),t.bypassAuthState)}async function PP(t){const{auth:e,user:n}=t;return P(n,e,"internal-error"),Ap(n,new Lp(t),t.bypassAuthState)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class EI{constructor(e,n,r,i,s=!1){this.auth=e,this.resolver=r,this.user=i,this.bypassAuthState=s,this.pendingPromise=null,this.eventManager=null,this.filter=Array.isArray(n)?n:[n]}execute(){return new Promise(async(e,n)=>{this.pendingPromise={resolve:e,reject:n};try{this.eventManager=await this.resolver._initialize(this.auth),await this.onExecution(),this.eventManager.registerConsumer(this)}catch(r){this.reject(r)}})}async onAuthEvent(e){const{urlResponse:n,sessionId:r,postBody:i,tenantId:s,error:o,type:a}=e;if(o){this.reject(o);return}const c={auth:this.auth,requestUri:n,sessionId:r,tenantId:s||void 0,postBody:i||void 0,user:this.user,bypassAuthState:this.bypassAuthState};try{this.resolve(await this.getIdpTask(a)(c))}catch(u){this.reject(u)}}onError(e){this.reject(e)}getIdpTask(e){switch(e){case"signInViaPopup":case"signInViaRedirect":return xP;case"linkViaPopup":case"linkViaRedirect":return PP;case"reauthViaPopup":case"reauthViaRedirect":return NP;default:bt(this.auth,"internal-error")}}resolve(e){En(this.pendingPromise,"Pending promise was never set"),this.pendingPromise.resolve(e),this.unregisterAndCleanUp()}reject(e){En(this.pendingPromise,"Pending promise was never set"),this.pendingPromise.reject(e),this.unregisterAndCleanUp()}unregisterAndCleanUp(){this.eventManager&&this.eventManager.unregisterConsumer(this),this.pendingPromise=null,this.cleanUp()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const DP=new oc(2e3,1e4);async function OP(t,e,n){const r=Ze(t);mo(t,e,pr);const i=cs(r,n);return new Qn(r,"signInViaPopup",e,i).executeNotNull()}async function LP(t,e,n){const r=Y(t);mo(r.auth,e,pr);const i=cs(r.auth,n);return new Qn(r.auth,"reauthViaPopup",e,i,r).executeNotNull()}async function MP(t,e,n){const r=Y(t);mo(r.auth,e,pr);const i=cs(r.auth,n);return new Qn(r.auth,"linkViaPopup",e,i,r).executeNotNull()}class Qn extends EI{constructor(e,n,r,i,s){super(e,n,i,s),this.provider=r,this.authWindow=null,this.pollId=null,Qn.currentPopupAction&&Qn.currentPopupAction.cancel(),Qn.currentPopupAction=this}async executeNotNull(){const e=await this.execute();return P(e,this.auth,"internal-error"),e}async onExecution(){En(this.filter.length===1,"Popup operations only handle one event");const e=uc();this.authWindow=await this.resolver._openPopup(this.auth,this.provider,this.filter[0],e),this.authWindow.associatedEvent=e,this.resolver._originValidation(this.auth).catch(n=>{this.reject(n)}),this.resolver._isIframeWebStorageSupported(this.auth,n=>{n||this.reject(vt(this.auth,"web-storage-unsupported"))}),this.pollUserCancellation()}get eventId(){var e;return((e=this.authWindow)===null||e===void 0?void 0:e.associatedEvent)||null}cancel(){this.reject(vt(this.auth,"cancelled-popup-request"))}cleanUp(){this.authWindow&&this.authWindow.close(),this.pollId&&window.clearTimeout(this.pollId),this.authWindow=null,this.pollId=null,Qn.currentPopupAction=null}pollUserCancellation(){const e=()=>{var n,r;if(!((r=(n=this.authWindow)===null||n===void 0?void 0:n.window)===null||r===void 0)&&r.closed){this.pollId=window.setTimeout(()=>{this.pollId=null,this.reject(vt(this.auth,"popup-closed-by-user"))},2e3);return}this.pollId=window.setTimeout(e,DP.get())};e()}}Qn.currentPopupAction=null;/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const FP="pendingRedirect",oa=new Map;class UP extends EI{constructor(e,n,r=!1){super(e,["signInViaRedirect","linkViaRedirect","reauthViaRedirect","unknown"],n,void 0,r),this.eventId=null}async execute(){let e=oa.get(this.auth._key());if(!e){try{const r=await VP(this.resolver,this.auth)?await super.execute():null;e=()=>Promise.resolve(r)}catch(n){e=()=>Promise.reject(n)}oa.set(this.auth._key(),e)}return this.bypassAuthState||oa.set(this.auth._key(),()=>Promise.resolve(null)),e()}async onAuthEvent(e){if(e.type==="signInViaRedirect")return super.onAuthEvent(e);if(e.type==="unknown"){this.resolve(null);return}if(e.eventId){const n=await this.auth._redirectUserForId(e.eventId);if(n)return this.user=n,super.onAuthEvent(e);this.resolve(null)}}async onExecution(){}cleanUp(){}}async function VP(t,e){const n=SI(e),r=TI(t);if(!await r._isAvailable())return!1;const i=await r._get(n)==="true";return await r._remove(n),i}async function Mp(t,e){return TI(t)._set(SI(e),"true")}function BP(){oa.clear()}function Fp(t,e){oa.set(t._key(),e)}function TI(t){return Jt(t._redirectPersistence)}function SI(t){return Vi(FP,t.config.apiKey,t.name)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function $P(t,e,n){return qP(t,e,n)}async function qP(t,e,n){const r=Ze(t);mo(t,e,pr),await r._initializationPromise;const i=cs(r,n);return await Mp(i,r),i._openRedirect(r,e,"signInViaRedirect")}function jP(t,e,n){return zP(t,e,n)}async function zP(t,e,n){const r=Y(t);mo(r.auth,e,pr),await r.auth._initializationPromise;const i=cs(r.auth,n);await Mp(i,r.auth);const s=await kI(r);return i._openRedirect(r.auth,e,"reauthViaRedirect",s)}function HP(t,e,n){return KP(t,e,n)}async function KP(t,e,n){const r=Y(t);mo(r.auth,e,pr),await r.auth._initializationPromise;const i=cs(r.auth,n);await Ul(!1,r,e.providerId),await Mp(i,r.auth);const s=await kI(r);return i._openRedirect(r.auth,e,"linkViaRedirect",s)}async function WP(t,e){return await Ze(t)._initializationPromise,jl(t,e,!1)}async function jl(t,e,n=!1){const r=Ze(t),i=cs(r,e),o=await new UP(r,i,n).execute();return o&&!n&&(delete o.user._redirectEventId,await r._persistUserIfCurrent(o.user),await r._setRedirectUser(null,e)),o}async function kI(t){const e=uc(`${t.uid}:::`);return t._redirectEventId=e,await t.auth._setRedirectUser(t),await t.auth._persistUserIfCurrent(t),e}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const GP=10*60*1e3;class AI{constructor(e){this.auth=e,this.cachedEventUids=new Set,this.consumers=new Set,this.queuedRedirectEvent=null,this.hasHandledPotentialRedirect=!1,this.lastProcessedEventTime=Date.now()}registerConsumer(e){this.consumers.add(e),this.queuedRedirectEvent&&this.isEventForConsumer(this.queuedRedirectEvent,e)&&(this.sendToConsumer(this.queuedRedirectEvent,e),this.saveEventToCache(this.queuedRedirectEvent),this.queuedRedirectEvent=null)}unregisterConsumer(e){this.consumers.delete(e)}onEvent(e){if(this.hasEventBeenHandled(e))return!1;let n=!1;return this.consumers.forEach(r=>{this.isEventForConsumer(e,r)&&(n=!0,this.sendToConsumer(e,r),this.saveEventToCache(e))}),this.hasHandledPotentialRedirect||!YP(e)||(this.hasHandledPotentialRedirect=!0,n||(this.queuedRedirectEvent=e,n=!0)),n}sendToConsumer(e,n){var r;if(e.error&&!CI(e)){const i=((r=e.error.code)===null||r===void 0?void 0:r.split("auth/")[1])||"internal-error";n.onError(vt(this.auth,i))}else n.onAuthEvent(e)}isEventForConsumer(e,n){const r=n.eventId===null||!!e.eventId&&e.eventId===n.eventId;return n.filter.includes(e.type)&&r}hasEventBeenHandled(e){return Date.now()-this.lastProcessedEventTime>=GP&&this.cachedEventUids.clear(),this.cachedEventUids.has(Xy(e))}saveEventToCache(e){this.cachedEventUids.add(Xy(e)),this.lastProcessedEventTime=Date.now()}}function Xy(t){return[t.type,t.eventId,t.sessionId,t.tenantId].filter(e=>e).join("-")}function CI({type:t,error:e}){return t==="unknown"&&(e==null?void 0:e.code)==="auth/no-auth-event"}function YP(t){switch(t.type){case"signInViaRedirect":case"linkViaRedirect":case"reauthViaRedirect":return!0;case"unknown":return CI(t);default:return!1}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function RI(t,e={}){return ct(t,"GET","/v1/projects",e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const QP=/^\d{1,3}\.\d{1,3}\.\d{1,3}\.\d{1,3}$/,XP=/^https?/;async function JP(t){if(t.config.emulator)return;const{authorizedDomains:e}=await RI(t);for(const n of e)try{if(ZP(n))return}catch{}bt(t,"unauthorized-domain")}function ZP(t){const e=Ra(),{protocol:n,hostname:r}=new URL(e);if(t.startsWith("chrome-extension://")){const o=new URL(t);return o.hostname===""&&r===""?n==="chrome-extension:"&&t.replace("chrome-extension://","")===e.replace("chrome-extension://",""):n==="chrome-extension:"&&o.hostname===r}if(!XP.test(n))return!1;if(QP.test(t))return r===t;const i=t.replace(/\./g,"\\.");return new RegExp("^(.+\\."+i+"|"+i+")$","i").test(r)}/**
 * @license
 * Copyright 2020 Google LLC.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const eD=new oc(3e4,6e4);function Jy(){const t=nt().___jsl;if(t!=null&&t.H){for(const e of Object.keys(t.H))if(t.H[e].r=t.H[e].r||[],t.H[e].L=t.H[e].L||[],t.H[e].r=[...t.H[e].L],t.CP)for(let n=0;n<t.CP.length;n++)t.CP[n]=null}}function tD(t){return new Promise((e,n)=>{var r,i,s;function o(){Jy(),gapi.load("gapi.iframes",{callback:()=>{e(gapi.iframes.getContext())},ontimeout:()=>{Jy(),n(vt(t,"network-request-failed"))},timeout:eD.get()})}if(!((i=(r=nt().gapi)===null||r===void 0?void 0:r.iframes)===null||i===void 0)&&i.Iframe)e(gapi.iframes.getContext());else if(!((s=nt().gapi)===null||s===void 0)&&s.load)o();else{const a=nI("iframefcb");return nt()[a]=()=>{gapi.load?o():n(vt(t,"network-request-failed"))},kp(`https://apis.google.com/js/api.js?onload=${a}`).catch(c=>n(c))}}).catch(e=>{throw bu=null,e})}let bu=null;function nD(t){return bu=bu||tD(t),bu}/**
 * @license
 * Copyright 2020 Google LLC.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const rD=new oc(5e3,15e3),iD="__/auth/iframe",sD="emulator/auth/iframe",oD={style:{position:"absolute",top:"-100px",width:"1px",height:"1px"},"aria-hidden":"true",tabindex:"-1"},aD=new Map([["identitytoolkit.googleapis.com","p"],["staging-identitytoolkit.sandbox.googleapis.com","s"],["test-identitytoolkit.sandbox.googleapis.com","t"]]);function cD(t){const e=t.config;P(e.authDomain,t,"auth-domain-config-required");const n=e.emulator?Tp(e,sD):`https://${t.config.authDomain}/${iD}`,r={apiKey:e.apiKey,appName:t.name,v:dr},i=aD.get(t.config.apiHost);i&&(r.eid=i);const s=t._getFrameworks();return s.length&&(r.fw=s.join(",")),`${n}?${po(r).slice(1)}`}async function uD(t){const e=await nD(t),n=nt().gapi;return P(n,t,"internal-error"),e.open({where:document.body,url:cD(t),messageHandlersFilter:n.iframes.CROSS_ORIGIN_IFRAMES_FILTER,attributes:oD,dontclear:!0},r=>new Promise(async(i,s)=>{await r.restyle({setHideOnLeave:!1});const o=vt(t,"network-request-failed"),a=nt().setTimeout(()=>{s(o)},rD.get());function c(){nt().clearTimeout(a),i(r)}r.ping(c).then(c,()=>{s(o)})}))}/**
 * @license
 * Copyright 2020 Google LLC.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const lD={location:"yes",resizable:"yes",statusbar:"yes",toolbar:"no"},hD=500,dD=600,fD="_blank",pD="http://localhost";class Zy{constructor(e){this.window=e,this.associatedEvent=null}close(){if(this.window)try{this.window.close()}catch{}}}function mD(t,e,n,r=hD,i=dD){const s=Math.max((window.screen.availHeight-i)/2,0).toString(),o=Math.max((window.screen.availWidth-r)/2,0).toString();let a="";const c=Object.assign(Object.assign({},lD),{width:r.toString(),height:i.toString(),top:s,left:o}),u=qe().toLowerCase();n&&(a=Gb(u)?fD:n),Wb(u)&&(e=e||pD,c.scrollbars="yes");const l=Object.entries(c).reduce((d,[f,g])=>`${d}${f}=${g},`,"");if(Hx(u)&&a!=="_self")return gD(e||"",a),new Zy(null);const h=window.open(e||"",a,l);P(h,t,"popup-blocked");try{h.focus()}catch{}return new Zy(h)}function gD(t,e){const n=document.createElement("a");n.href=t,n.target=e;const r=document.createEvent("MouseEvent");r.initMouseEvent("click",!0,!0,window,1,0,0,0,0,!1,!1,!1,!1,1,null),n.dispatchEvent(r)}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const yD="__/auth/handler",vD="emulator/auth/handler",wD=encodeURIComponent("fac");async function Wd(t,e,n,r,i,s){P(t.config.authDomain,t,"auth-domain-config-required"),P(t.config.apiKey,t,"invalid-api-key");const o={apiKey:t.config.apiKey,appName:t.name,authType:n,redirectUrl:r,v:dr,eventId:i};if(e instanceof pr){e.setDefaultLanguage(t.languageCode),o.providerId=e.providerId||"",nR(e.getCustomParameters())||(o.customParameters=JSON.stringify(e.getCustomParameters()));for(const[l,h]of Object.entries(s||{}))o[l]=h}if(e instanceof vo){const l=e.getScopes().filter(h=>h!=="");l.length>0&&(o.scopes=l.join(","))}t.tenantId&&(o.tid=t.tenantId);const a=o;for(const l of Object.keys(a))a[l]===void 0&&delete a[l];const c=await t._getAppCheckToken(),u=c?`#${wD}=${encodeURIComponent(c)}`:"";return`${_D(t)}?${po(a).slice(1)}${u}`}function _D({config:t}){return t.emulator?Tp(t,vD):`https://${t.authDomain}/${yD}`}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const nd="webStorageSupport";class bD{constructor(){this.eventManagers={},this.iframes={},this.originValidationPromises={},this._redirectPersistence=Hi,this._completeRedirectFn=jl,this._overrideRedirectResult=Fp}async _openPopup(e,n,r,i){var s;En((s=this.eventManagers[e._key()])===null||s===void 0?void 0:s.manager,"_initialize() not called before _openPopup()");const o=await Wd(e,n,r,Ra(),i);return mD(e,o,uc())}async _openRedirect(e,n,r,i){await this._originValidation(e);const s=await Wd(e,n,r,Ra(),i);return nP(s),new Promise(()=>{})}_initialize(e){const n=e._key();if(this.eventManagers[n]){const{manager:i,promise:s}=this.eventManagers[n];return i?Promise.resolve(i):(En(s,"If manager is not set, promise should be"),s)}const r=this.initAndGetManager(e);return this.eventManagers[n]={promise:r},r.catch(()=>{delete this.eventManagers[n]}),r}async initAndGetManager(e){const n=await uD(e),r=new AI(e);return n.register("authEvent",i=>(P(i==null?void 0:i.authEvent,e,"invalid-auth-event"),{status:r.onEvent(i.authEvent)?"ACK":"ERROR"}),gapi.iframes.CROSS_ORIGIN_IFRAMES_FILTER),this.eventManagers[e._key()]={manager:r},this.iframes[e._key()]=n,r}_isIframeWebStorageSupported(e,n){this.iframes[e._key()].send(nd,{type:nd},i=>{var s;const o=(s=i==null?void 0:i[0])===null||s===void 0?void 0:s[nd];o!==void 0&&n(!!o),bt(e,"internal-error")},gapi.iframes.CROSS_ORIGIN_IFRAMES_FILTER)}_originValidation(e){const n=e._key();return this.originValidationPromises[n]||(this.originValidationPromises[n]=JP(e)),this.originValidationPromises[n]}get _shouldInitProactively(){return Jb()||Sp()||go()}}const ID=bD;class ED{constructor(e){this.factorId=e}_process(e,n,r){switch(n.type){case"enroll":return this._finalizeEnroll(e,n.credential,r);case"signin":return this._finalizeSignIn(e,n.credential);default:return Ln("unexpected MultiFactorSessionType")}}}class Up extends ED{constructor(e){super("phone"),this.credential=e}static _fromCredential(e){return new Up(e)}_finalizeEnroll(e,n,r){return GN(e,{idToken:n,displayName:r,phoneVerificationInfo:this.credential._makeVerificationRequest()})}_finalizeSignIn(e,n){return dP(e,{mfaPendingCredential:n,phoneVerificationInfo:this.credential._makeVerificationRequest()})}}class xI{constructor(){}static assertion(e){return Up._fromCredential(e)}}xI.FACTOR_ID="phone";var ev="@firebase/auth",tv="0.23.0";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class TD{constructor(e){this.auth=e,this.internalListeners=new Map}getUid(){var e;return this.assertAuthConfigured(),((e=this.auth.currentUser)===null||e===void 0?void 0:e.uid)||null}async getToken(e){return this.assertAuthConfigured(),await this.auth._initializationPromise,this.auth.currentUser?{accessToken:await this.auth.currentUser.getIdToken(e)}:null}addAuthTokenListener(e){if(this.assertAuthConfigured(),this.internalListeners.has(e))return;const n=this.auth.onIdTokenChanged(r=>{e((r==null?void 0:r.stsTokenManager.accessToken)||null)});this.internalListeners.set(e,n),this.updateProactiveRefresh()}removeAuthTokenListener(e){this.assertAuthConfigured();const n=this.internalListeners.get(e);!n||(this.internalListeners.delete(e),n(),this.updateProactiveRefresh())}assertAuthConfigured(){P(this.auth._initializationPromise,"dependent-sdk-initialized-before-auth")}updateProactiveRefresh(){this.internalListeners.size>0?this.auth._startProactiveRefresh():this.auth._stopProactiveRefresh()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function SD(t){switch(t){case"Node":return"node";case"ReactNative":return"rn";case"Worker":return"webworker";case"Cordova":return"cordova";default:return}}function kD(t){rr(new cn("auth",(e,{options:n})=>{const r=e.getProvider("app").getImmediate(),i=e.getProvider("heartbeat"),s=e.getProvider("app-check-internal"),{apiKey:o,authDomain:a}=r.options;P(o&&!o.includes(":"),"invalid-api-key",{appName:r.name}),P(!(a!=null&&a.includes(":")),"argument-error",{appName:r.name});const c={apiKey:o,authDomain:a,clientPlatform:t,apiHost:"identitytoolkit.googleapis.com",tokenApiHost:"securetoken.googleapis.com",apiScheme:"https",sdkClientVersion:Zb(t)},u=new Zx(r,i,s,c);return eN(u,n),u},"PUBLIC").setInstantiationMode("EXPLICIT").setInstanceCreatedCallback((e,n,r)=>{e.getProvider("auth-internal").initialize()})),rr(new cn("auth-internal",e=>{const n=Ze(e.getProvider("auth").getImmediate());return(r=>new TD(r))(n)},"PRIVATE").setInstantiationMode("EXPLICIT")),an(ev,tv,SD(t)),an(ev,tv,"esm2017")}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const AD=5*60;WC("authIdTokenMaxAge");kD("Browser");/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Ki(){return window}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const CD=2e3;async function RD(t,e,n){var r;const{BuildInfo:i}=Ki();En(e.sessionId,"AuthEvent did not contain a session ID");const s=await OD(e.sessionId),o={};return go()?o.ibi=i.packageName:ac()?o.apn=i.packageName:bt(t,"operation-not-supported-in-this-environment"),i.displayName&&(o.appDisplayName=i.displayName),o.sessionId=s,Wd(t,n,e.type,void 0,(r=e.eventId)!==null&&r!==void 0?r:void 0,o)}async function xD(t){const{BuildInfo:e}=Ki(),n={};go()?n.iosBundleId=e.packageName:ac()?n.androidPackageName=e.packageName:bt(t,"operation-not-supported-in-this-environment"),await RI(t,n)}function ND(t){const{cordova:e}=Ki();return new Promise(n=>{e.plugins.browsertab.isAvailable(r=>{let i=null;r?e.plugins.browsertab.openUrl(t):i=e.InAppBrowser.open(t,zx()?"_blank":"_system","location=yes"),n(i)})})}async function PD(t,e,n){const{cordova:r}=Ki();let i=()=>{};try{await new Promise((s,o)=>{let a=null;function c(){var h;s();const d=(h=r.plugins.browsertab)===null||h===void 0?void 0:h.close;typeof d=="function"&&d(),typeof(n==null?void 0:n.close)=="function"&&n.close()}function u(){a||(a=window.setTimeout(()=>{o(vt(t,"redirect-cancelled-by-user"))},CD))}function l(){(document==null?void 0:document.visibilityState)==="visible"&&u()}e.addPassiveListener(c),document.addEventListener("resume",u,!1),ac()&&document.addEventListener("visibilitychange",l,!1),i=()=>{e.removePassiveListener(c),document.removeEventListener("resume",u,!1),document.removeEventListener("visibilitychange",l,!1),a&&window.clearTimeout(a)}})}finally{i()}}function DD(t){var e,n,r,i,s,o,a,c,u,l;const h=Ki();P(typeof((e=h==null?void 0:h.universalLinks)===null||e===void 0?void 0:e.subscribe)=="function",t,"invalid-cordova-configuration",{missingPlugin:"cordova-universal-links-plugin-fix"}),P(typeof((n=h==null?void 0:h.BuildInfo)===null||n===void 0?void 0:n.packageName)<"u",t,"invalid-cordova-configuration",{missingPlugin:"cordova-plugin-buildInfo"}),P(typeof((s=(i=(r=h==null?void 0:h.cordova)===null||r===void 0?void 0:r.plugins)===null||i===void 0?void 0:i.browsertab)===null||s===void 0?void 0:s.openUrl)=="function",t,"invalid-cordova-configuration",{missingPlugin:"cordova-plugin-browsertab"}),P(typeof((c=(a=(o=h==null?void 0:h.cordova)===null||o===void 0?void 0:o.plugins)===null||a===void 0?void 0:a.browsertab)===null||c===void 0?void 0:c.isAvailable)=="function",t,"invalid-cordova-configuration",{missingPlugin:"cordova-plugin-browsertab"}),P(typeof((l=(u=h==null?void 0:h.cordova)===null||u===void 0?void 0:u.InAppBrowser)===null||l===void 0?void 0:l.open)=="function",t,"invalid-cordova-configuration",{missingPlugin:"cordova-plugin-inappbrowser"})}async function OD(t){const e=LD(t),n=await crypto.subtle.digest("SHA-256",e);return Array.from(new Uint8Array(n)).map(i=>i.toString(16).padStart(2,"0")).join("")}function LD(t){if(En(/[0-9a-zA-Z]+/.test(t),"Can only convert alpha-numeric strings"),typeof TextEncoder<"u")return new TextEncoder().encode(t);const e=new ArrayBuffer(t.length),n=new Uint8Array(e);for(let r=0;r<t.length;r++)n[r]=t.charCodeAt(r);return n}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const MD=20;class FD extends AI{constructor(){super(...arguments),this.passiveListeners=new Set,this.initPromise=new Promise(e=>{this.resolveInialized=e})}addPassiveListener(e){this.passiveListeners.add(e)}removePassiveListener(e){this.passiveListeners.delete(e)}resetRedirect(){this.queuedRedirectEvent=null,this.hasHandledPotentialRedirect=!1}onEvent(e){return this.resolveInialized(),this.passiveListeners.forEach(n=>n(e)),super.onEvent(e)}async initialized(){await this.initPromise}}function UD(t,e,n=null){return{type:e,eventId:n,urlResponse:null,sessionId:$D(),postBody:null,tenantId:t.tenantId,error:vt(t,"no-auth-event")}}function VD(t,e){return Gd()._set(Yd(t),e)}async function nv(t){const e=await Gd()._get(Yd(t));return e&&await Gd()._remove(Yd(t)),e}function BD(t,e){var n,r;const i=jD(e);if(i.includes("/__/auth/callback")){const s=Iu(i),o=s.firebaseError?qD(decodeURIComponent(s.firebaseError)):null,a=(r=(n=o==null?void 0:o.code)===null||n===void 0?void 0:n.split("auth/"))===null||r===void 0?void 0:r[1],c=a?vt(a):null;return c?{type:t.type,eventId:t.eventId,tenantId:t.tenantId,error:c,urlResponse:null,sessionId:null,postBody:null}:{type:t.type,eventId:t.eventId,tenantId:t.tenantId,sessionId:t.sessionId,urlResponse:i,postBody:null}}return null}function $D(){const t=[],e="1234567890abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ";for(let n=0;n<MD;n++){const r=Math.floor(Math.random()*e.length);t.push(e.charAt(r))}return t.join("")}function Gd(){return Jt(Pp)}function Yd(t){return Vi("authEvent",t.config.apiKey,t.name)}function qD(t){try{return JSON.parse(t)}catch{return null}}function jD(t){const e=Iu(t),n=e.link?decodeURIComponent(e.link):void 0,r=Iu(n).link,i=e.deep_link_id?decodeURIComponent(e.deep_link_id):void 0;return Iu(i).link||i||r||n||t}function Iu(t){if(!(t!=null&&t.includes("?")))return{};const[e,...n]=t.split("?");return As(n.join("?"))}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const zD=500;class HD{constructor(){this._redirectPersistence=Hi,this._shouldInitProactively=!0,this.eventManagers=new Map,this.originValidationPromises={},this._completeRedirectFn=jl,this._overrideRedirectResult=Fp}async _initialize(e){const n=e._key();let r=this.eventManagers.get(n);return r||(r=new FD(e),this.eventManagers.set(n,r),this.attachCallbackListeners(e,r)),r}_openPopup(e){bt(e,"operation-not-supported-in-this-environment")}async _openRedirect(e,n,r,i){DD(e);const s=await this._initialize(e);await s.initialized(),s.resetRedirect(),BP(),await this._originValidation(e);const o=UD(e,r,i);await VD(e,o);const a=await RD(e,o,n),c=await ND(a);return PD(e,s,c)}_isIframeWebStorageSupported(e,n){throw new Error("Method not implemented.")}_originValidation(e){const n=e._key();return this.originValidationPromises[n]||(this.originValidationPromises[n]=xD(e)),this.originValidationPromises[n]}attachCallbackListeners(e,n){const{universalLinks:r,handleOpenURL:i,BuildInfo:s}=Ki(),o=setTimeout(async()=>{await nv(e),n.onEvent(rv())},zD),a=async l=>{clearTimeout(o);const h=await nv(e);let d=null;h&&(l==null?void 0:l.url)&&(d=BD(h,l.url)),n.onEvent(d||rv())};typeof r<"u"&&typeof r.subscribe=="function"&&r.subscribe(null,a);const c=i,u=`${s.packageName.toLowerCase()}://`;Ki().handleOpenURL=async l=>{if(l.toLowerCase().startsWith(u)&&a({url:l}),typeof c=="function")try{c(l)}catch(h){console.error(h)}}}}const KD=HD;function rv(){return{type:"unknown",eventId:null,sessionId:null,urlResponse:null,postBody:null,tenantId:null,error:vt("no-auth-event")}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function WD(t,e){Ze(t)._logFramework(e)}var GD="@firebase/auth-compat",YD="0.4.0";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const QD=1e3;function aa(){var t;return((t=self==null?void 0:self.location)===null||t===void 0?void 0:t.protocol)||null}function XD(){return aa()==="http:"||aa()==="https:"}function NI(t=qe()){return!!((aa()==="file:"||aa()==="ionic:"||aa()==="capacitor:")&&t.toLowerCase().match(/iphone|ipad|ipod|android/))}function JD(){return yp()||Dl()}function ZD(){return kb()&&(document==null?void 0:document.documentMode)===11}function eO(t=qe()){return/Edge\/\d+/.test(t)}function tO(t=qe()){return ZD()||eO(t)}function PI(){try{const t=self.localStorage,e=uc();if(t)return t.setItem(e,"1"),t.removeItem(e),tO()?ka():!0}catch{return Vp()&&ka()}return!1}function Vp(){return typeof global<"u"&&"WorkerGlobalScope"in global&&"importScripts"in global}function rd(){return(XD()||Sb()||NI())&&!JD()&&PI()&&!Vp()}function DI(){return NI()&&typeof document<"u"}async function nO(){return DI()?new Promise(t=>{const e=setTimeout(()=>{t(!1)},QD);document.addEventListener("deviceready",()=>{clearTimeout(e),t(!0)})}):!1}function rO(){return typeof window<"u"?window:null}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Qt={LOCAL:"local",NONE:"none",SESSION:"session"},Lo=P,OI="persistence";function iO(t,e){if(Lo(Object.values(Qt).includes(e),t,"invalid-persistence-type"),yp()){Lo(e!==Qt.SESSION,t,"unsupported-persistence-type");return}if(Dl()){Lo(e===Qt.NONE,t,"unsupported-persistence-type");return}if(Vp()){Lo(e===Qt.NONE||e===Qt.LOCAL&&ka(),t,"unsupported-persistence-type");return}Lo(e===Qt.NONE||PI(),t,"unsupported-persistence-type")}async function Qd(t){await t._initializationPromise;const e=LI(),n=Vi(OI,t.config.apiKey,t.name);e&&e.setItem(n,t._getPersistence())}function sO(t,e){const n=LI();if(!n)return[];const r=Vi(OI,t,e);switch(n.getItem(r)){case Qt.NONE:return[Gs];case Qt.LOCAL:return[Da,Hi];case Qt.SESSION:return[Hi];default:return[]}}function LI(){var t;try{return((t=rO())===null||t===void 0?void 0:t.sessionStorage)||null}catch{return null}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const oO=P;class Lr{constructor(){this.browserResolver=Jt(ID),this.cordovaResolver=Jt(KD),this.underlyingResolver=null,this._redirectPersistence=Hi,this._completeRedirectFn=jl,this._overrideRedirectResult=Fp}async _initialize(e){return await this.selectUnderlyingResolver(),this.assertedUnderlyingResolver._initialize(e)}async _openPopup(e,n,r,i){return await this.selectUnderlyingResolver(),this.assertedUnderlyingResolver._openPopup(e,n,r,i)}async _openRedirect(e,n,r,i){return await this.selectUnderlyingResolver(),this.assertedUnderlyingResolver._openRedirect(e,n,r,i)}_isIframeWebStorageSupported(e,n){this.assertedUnderlyingResolver._isIframeWebStorageSupported(e,n)}_originValidation(e){return this.assertedUnderlyingResolver._originValidation(e)}get _shouldInitProactively(){return DI()||this.browserResolver._shouldInitProactively}get assertedUnderlyingResolver(){return oO(this.underlyingResolver,"internal-error"),this.underlyingResolver}async selectUnderlyingResolver(){if(this.underlyingResolver)return;const e=await nO();this.underlyingResolver=e?this.cordovaResolver:this.browserResolver}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function MI(t){return t.unwrap()}function aO(t){return t.wrapped()}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function cO(t){return FI(t)}function uO(t,e){var n;const r=(n=e.customData)===null||n===void 0?void 0:n._tokenResponse;if((e==null?void 0:e.code)==="auth/multi-factor-auth-required"){const i=e;i.resolver=new lO(t,KN(t,e))}else if(r){const i=FI(e),s=e;i&&(s.credential=i,s.tenantId=r.tenantId||void 0,s.email=r.email||void 0,s.phoneNumber=r.phoneNumber||void 0)}}function FI(t){const{_tokenResponse:e}=t instanceof Ct?t.customData:t;if(!e)return null;if(!(t instanceof Ct)&&"temporaryProof"in e&&"phoneNumber"in e)return bn.credentialFromResult(t);const n=e.providerId;if(!n||n===Oo.PASSWORD)return null;let r;switch(n){case Oo.GOOGLE:r=xn;break;case Oo.FACEBOOK:r=Rn;break;case Oo.GITHUB:r=Nn;break;case Oo.TWITTER:r=Pn;break;default:const{oauthIdToken:i,oauthAccessToken:s,oauthTokenSecret:o,pendingToken:a,nonce:c}=e;return!s&&!o&&!i&&!a?null:a?n.startsWith("saml.")?Ys._create(n,a):zn._fromParams({providerId:n,signInMethod:n,pendingToken:a,idToken:i,accessToken:s}):new Fs(n).credential({idToken:i,accessToken:s,rawNonce:c})}return t instanceof Ct?r.credentialFromError(t):r.credentialFromResult(t)}function $t(t,e){return e.catch(n=>{throw n instanceof Ct&&uO(t,n),n}).then(n=>{const r=n.operationType,i=n.user;return{operationType:r,credential:cO(n),additionalUserInfo:HN(n),user:Xn.getOrCreate(i)}})}async function Xd(t,e){const n=await e;return{verificationId:n.verificationId,confirm:r=>$t(t,n.confirm(r))}}class lO{constructor(e,n){this.resolver=n,this.auth=aO(e)}get session(){return this.resolver.session}get hints(){return this.resolver.hints}resolveSignIn(e){return $t(MI(this.auth),this.resolver.resolveSignIn(e))}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Xn{constructor(e){this._delegate=e,this.multiFactor=QN(e)}static getOrCreate(e){return Xn.USER_MAP.has(e)||Xn.USER_MAP.set(e,new Xn(e)),Xn.USER_MAP.get(e)}delete(){return this._delegate.delete()}reload(){return this._delegate.reload()}toJSON(){return this._delegate.toJSON()}getIdTokenResult(e){return this._delegate.getIdTokenResult(e)}getIdToken(e){return this._delegate.getIdToken(e)}linkAndRetrieveDataWithCredential(e){return this.linkWithCredential(e)}async linkWithCredential(e){return $t(this.auth,hI(this._delegate,e))}async linkWithPhoneNumber(e,n){return Xd(this.auth,AP(this._delegate,e,n))}async linkWithPopup(e){return $t(this.auth,MP(this._delegate,e,Lr))}async linkWithRedirect(e){return await Qd(Ze(this.auth)),HP(this._delegate,e,Lr)}reauthenticateAndRetrieveDataWithCredential(e){return this.reauthenticateWithCredential(e)}async reauthenticateWithCredential(e){return $t(this.auth,dI(this._delegate,e))}reauthenticateWithPhoneNumber(e,n){return Xd(this.auth,CP(this._delegate,e,n))}reauthenticateWithPopup(e){return $t(this.auth,LP(this._delegate,e,Lr))}async reauthenticateWithRedirect(e){return await Qd(Ze(this.auth)),jP(this._delegate,e,Lr)}sendEmailVerification(e){return ON(this._delegate,e)}async unlink(e){return await _N(this._delegate,e),this}updateEmail(e){return UN(this._delegate,e)}updatePassword(e){return VN(this._delegate,e)}updatePhoneNumber(e){return RP(this._delegate,e)}updateProfile(e){return FN(this._delegate,e)}verifyBeforeUpdateEmail(e,n){return LN(this._delegate,e,n)}get emailVerified(){return this._delegate.emailVerified}get isAnonymous(){return this._delegate.isAnonymous}get metadata(){return this._delegate.metadata}get phoneNumber(){return this._delegate.phoneNumber}get providerData(){return this._delegate.providerData}get refreshToken(){return this._delegate.refreshToken}get tenantId(){return this._delegate.tenantId}get displayName(){return this._delegate.displayName}get email(){return this._delegate.email}get photoURL(){return this._delegate.photoURL}get providerId(){return this._delegate.providerId}get uid(){return this._delegate.uid}get auth(){return this._delegate.auth}}Xn.USER_MAP=new WeakMap;/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Mo=P;class Jd{constructor(e,n){if(this.app=e,n.isInitialized()){this._delegate=n.getImmediate(),this.linkUnderlyingAuth();return}const{apiKey:r}=e.options;Mo(r,"invalid-api-key",{appName:e.name}),Mo(r,"invalid-api-key",{appName:e.name});const i=typeof window<"u"?Lr:void 0;this._delegate=n.initialize({options:{persistence:hO(r,e.name),popupRedirectResolver:i}}),this._delegate._updateErrorMap(Sx),this.linkUnderlyingAuth()}get emulatorConfig(){return this._delegate.emulatorConfig}get currentUser(){return this._delegate.currentUser?Xn.getOrCreate(this._delegate.currentUser):null}get languageCode(){return this._delegate.languageCode}set languageCode(e){this._delegate.languageCode=e}get settings(){return this._delegate.settings}get tenantId(){return this._delegate.tenantId}set tenantId(e){this._delegate.tenantId=e}useDeviceLanguage(){this._delegate.useDeviceLanguage()}signOut(){return this._delegate.signOut()}useEmulator(e,n){tN(this._delegate,e,n)}applyActionCode(e){return SN(this._delegate,e)}checkActionCode(e){return fI(this._delegate,e)}confirmPasswordReset(e,n){return TN(this._delegate,e,n)}async createUserWithEmailAndPassword(e,n){return $t(this._delegate,AN(this._delegate,e,n))}fetchProvidersForEmail(e){return this.fetchSignInMethodsForEmail(e)}fetchSignInMethodsForEmail(e){return DN(this._delegate,e)}isSignInWithEmailLink(e){return xN(this._delegate,e)}async getRedirectResult(){Mo(rd(),this._delegate,"operation-not-supported-in-this-environment");const e=await WP(this._delegate,Lr);return e?$t(this._delegate,Promise.resolve(e)):{credential:null,user:null}}addFrameworkForLogging(e){WD(this._delegate,e)}onAuthStateChanged(e,n,r){const{next:i,error:s,complete:o}=iv(e,n,r);return this._delegate.onAuthStateChanged(i,s,o)}onIdTokenChanged(e,n,r){const{next:i,error:s,complete:o}=iv(e,n,r);return this._delegate.onIdTokenChanged(i,s,o)}sendSignInLinkToEmail(e,n){return RN(this._delegate,e,n)}sendPasswordResetEmail(e,n){return EN(this._delegate,e,n||void 0)}async setPersistence(e){iO(this._delegate,e);let n;switch(e){case Qt.SESSION:n=Hi;break;case Qt.LOCAL:n=await Jt(Da)._isAvailable()?Da:Pp;break;case Qt.NONE:n=Gs;break;default:return bt("argument-error",{appName:this._delegate.name})}return this._delegate.setPersistence(n)}signInAndRetrieveDataWithCredential(e){return this.signInWithCredential(e)}signInAnonymously(){return $t(this._delegate,wN(this._delegate))}signInWithCredential(e){return $t(this._delegate,Vl(this._delegate,e))}signInWithCustomToken(e){return $t(this._delegate,IN(this._delegate,e))}signInWithEmailAndPassword(e,n){return $t(this._delegate,CN(this._delegate,e,n))}signInWithEmailLink(e,n){return $t(this._delegate,NN(this._delegate,e,n))}signInWithPhoneNumber(e,n){return Xd(this._delegate,kP(this._delegate,e,n))}async signInWithPopup(e){return Mo(rd(),this._delegate,"operation-not-supported-in-this-environment"),$t(this._delegate,OP(this._delegate,e,Lr))}async signInWithRedirect(e){return Mo(rd(),this._delegate,"operation-not-supported-in-this-environment"),await Qd(this._delegate),$P(this._delegate,e,Lr)}updateCurrentUser(e){return this._delegate.updateCurrentUser(e)}verifyPasswordResetCode(e){return kN(this._delegate,e)}unwrap(){return this._delegate}_delete(){return this._delegate._delete()}linkUnderlyingAuth(){this._delegate.wrapped=()=>this}}Jd.Persistence=Qt;function iv(t,e,n){let r=t;typeof t!="function"&&({next:r,error:e,complete:n}=t);const i=r;return{next:o=>i(o&&Xn.getOrCreate(o)),error:e,complete:n}}function hO(t,e){const n=sO(t,e);if(typeof self<"u"&&!n.includes(Da)&&n.push(Da),typeof window<"u")for(const r of[Pp,Hi])n.includes(r)||n.push(r);return n.includes(Gs)||n.push(Gs),n}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Bp{constructor(){this.providerId="phone",this._delegate=new bn(MI(as.auth()))}static credential(e,n){return bn.credential(e,n)}verifyPhoneNumber(e,n){return this._delegate.verifyPhoneNumber(e,n)}unwrap(){return this._delegate}}Bp.PHONE_SIGN_IN_METHOD=bn.PHONE_SIGN_IN_METHOD;Bp.PROVIDER_ID=bn.PROVIDER_ID;/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const dO=P;class fO{constructor(e,n,r=as.app()){var i;dO((i=r.options)===null||i===void 0?void 0:i.apiKey,"invalid-api-key",{appName:r.name}),this._delegate=new TP(e,n,r.auth()),this.type=this._delegate.type}clear(){this._delegate.clear()}render(){return this._delegate.render()}verify(){return this._delegate.verify()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const pO="auth-compat";function mO(t){t.INTERNAL.registerComponent(new cn(pO,e=>{const n=e.getProvider("app-compat").getImmediate(),r=e.getProvider("auth");return new Jd(n,r)},"PUBLIC").setServiceProps({ActionCodeInfo:{Operation:{EMAIL_SIGNIN:vs.EMAIL_SIGNIN,PASSWORD_RESET:vs.PASSWORD_RESET,RECOVER_EMAIL:vs.RECOVER_EMAIL,REVERT_SECOND_FACTOR_ADDITION:vs.REVERT_SECOND_FACTOR_ADDITION,VERIFY_AND_CHANGE_EMAIL:vs.VERIFY_AND_CHANGE_EMAIL,VERIFY_EMAIL:vs.VERIFY_EMAIL}},EmailAuthProvider:ri,FacebookAuthProvider:Rn,GithubAuthProvider:Nn,GoogleAuthProvider:xn,OAuthProvider:Fs,SAMLAuthProvider:$u,PhoneAuthProvider:Bp,PhoneMultiFactorGenerator:xI,RecaptchaVerifier:fO,TwitterAuthProvider:Pn,Auth:Jd,AuthCredential:yo,Error:Ct}).setInstantiationMode("LAZY").setMultipleInstances(!1)),t.registerVersion(GD,YD)}mO(as);var gO=typeof globalThis<"u"?globalThis:typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{},Q,$p=$p||{},ie=gO||self;function Hu(){}function zl(t){var e=typeof t;return e=e!="object"?e:t?Array.isArray(t)?"array":e:"null",e=="array"||e=="object"&&typeof t.length=="number"}function hc(t){var e=typeof t;return e=="object"&&t!=null||e=="function"}function yO(t){return Object.prototype.hasOwnProperty.call(t,id)&&t[id]||(t[id]=++vO)}var id="closure_uid_"+(1e9*Math.random()>>>0),vO=0;function wO(t,e,n){return t.call.apply(t.bind,arguments)}function _O(t,e,n){if(!t)throw Error();if(2<arguments.length){var r=Array.prototype.slice.call(arguments,2);return function(){var i=Array.prototype.slice.call(arguments);return Array.prototype.unshift.apply(i,r),t.apply(e,i)}}return function(){return t.apply(e,arguments)}}function Rt(t,e,n){return Function.prototype.bind&&Function.prototype.bind.toString().indexOf("native code")!=-1?Rt=wO:Rt=_O,Rt.apply(null,arguments)}function zc(t,e){var n=Array.prototype.slice.call(arguments,1);return function(){var r=n.slice();return r.push.apply(r,arguments),t.apply(this,r)}}function Et(t,e){function n(){}n.prototype=e.prototype,t.X=e.prototype,t.prototype=new n,t.prototype.constructor=t,t.Wb=function(r,i,s){for(var o=Array(arguments.length-2),a=2;a<arguments.length;a++)o[a-2]=arguments[a];return e.prototype[i].apply(r,o)}}function ii(){this.s=this.s,this.o=this.o}var bO=0;ii.prototype.s=!1;ii.prototype.na=function(){!this.s&&(this.s=!0,this.M(),bO!=0)&&yO(this)};ii.prototype.M=function(){if(this.o)for(;this.o.length;)this.o.shift()()};const UI=Array.prototype.indexOf?function(t,e){return Array.prototype.indexOf.call(t,e,void 0)}:function(t,e){if(typeof t=="string")return typeof e!="string"||e.length!=1?-1:t.indexOf(e,0);for(let n=0;n<t.length;n++)if(n in t&&t[n]===e)return n;return-1};function qp(t){const e=t.length;if(0<e){const n=Array(e);for(let r=0;r<e;r++)n[r]=t[r];return n}return[]}function sv(t,e){for(let n=1;n<arguments.length;n++){const r=arguments[n];if(zl(r)){const i=t.length||0,s=r.length||0;t.length=i+s;for(let o=0;o<s;o++)t[i+o]=r[o]}else t.push(r)}}function xt(t,e){this.type=t,this.g=this.target=e,this.defaultPrevented=!1}xt.prototype.h=function(){this.defaultPrevented=!0};var IO=function(){if(!ie.addEventListener||!Object.defineProperty)return!1;var t=!1,e=Object.defineProperty({},"passive",{get:function(){t=!0}});try{ie.addEventListener("test",Hu,e),ie.removeEventListener("test",Hu,e)}catch{}return t}();function Ku(t){return/^[\s\xa0]*$/.test(t)}var ov=String.prototype.trim?function(t){return t.trim()}:function(t){return/^[\s\xa0]*([\s\S]*?)[\s\xa0]*$/.exec(t)[1]};function sd(t,e){return t<e?-1:t>e?1:0}function Hl(){var t=ie.navigator;return t&&(t=t.userAgent)?t:""}function Dn(t){return Hl().indexOf(t)!=-1}function jp(t){return jp[" "](t),t}jp[" "]=Hu;function EO(t){var e=kO;return Object.prototype.hasOwnProperty.call(e,9)?e[9]:e[9]=t(9)}var TO=Dn("Opera"),Qs=Dn("Trident")||Dn("MSIE"),VI=Dn("Edge"),Zd=VI||Qs,BI=Dn("Gecko")&&!(Hl().toLowerCase().indexOf("webkit")!=-1&&!Dn("Edge"))&&!(Dn("Trident")||Dn("MSIE"))&&!Dn("Edge"),SO=Hl().toLowerCase().indexOf("webkit")!=-1&&!Dn("Edge");function $I(){var t=ie.document;return t?t.documentMode:void 0}var Wu;e:{var od="",ad=function(){var t=Hl();if(BI)return/rv:([^\);]+)(\)|;)/.exec(t);if(VI)return/Edge\/([\d\.]+)/.exec(t);if(Qs)return/\b(?:MSIE|rv)[: ]([^\);]+)(\)|;)/.exec(t);if(SO)return/WebKit\/(\S+)/.exec(t);if(TO)return/(?:Version)[ \/]?(\S+)/.exec(t)}();if(ad&&(od=ad?ad[1]:""),Qs){var cd=$I();if(cd!=null&&cd>parseFloat(od)){Wu=String(cd);break e}}Wu=od}var kO={};function AO(){return EO(function(){let t=0;const e=ov(String(Wu)).split("."),n=ov("9").split("."),r=Math.max(e.length,n.length);for(let o=0;t==0&&o<r;o++){var i=e[o]||"",s=n[o]||"";do{if(i=/(\d*)(\D*)(.*)/.exec(i)||["","","",""],s=/(\d*)(\D*)(.*)/.exec(s)||["","","",""],i[0].length==0&&s[0].length==0)break;t=sd(i[1].length==0?0:parseInt(i[1],10),s[1].length==0?0:parseInt(s[1],10))||sd(i[2].length==0,s[2].length==0)||sd(i[2],s[2]),i=i[3],s=s[3]}while(t==0)}return 0<=t})}var ef;if(ie.document&&Qs){var av=$I();ef=av||parseInt(Wu,10)||void 0}else ef=void 0;var CO=ef;function Oa(t,e){if(xt.call(this,t?t.type:""),this.relatedTarget=this.g=this.target=null,this.button=this.screenY=this.screenX=this.clientY=this.clientX=0,this.key="",this.metaKey=this.shiftKey=this.altKey=this.ctrlKey=!1,this.state=null,this.pointerId=0,this.pointerType="",this.i=null,t){var n=this.type=t.type,r=t.changedTouches&&t.changedTouches.length?t.changedTouches[0]:null;if(this.target=t.target||t.srcElement,this.g=e,e=t.relatedTarget){if(BI){e:{try{jp(e.nodeName);var i=!0;break e}catch{}i=!1}i||(e=null)}}else n=="mouseover"?e=t.fromElement:n=="mouseout"&&(e=t.toElement);this.relatedTarget=e,r?(this.clientX=r.clientX!==void 0?r.clientX:r.pageX,this.clientY=r.clientY!==void 0?r.clientY:r.pageY,this.screenX=r.screenX||0,this.screenY=r.screenY||0):(this.clientX=t.clientX!==void 0?t.clientX:t.pageX,this.clientY=t.clientY!==void 0?t.clientY:t.pageY,this.screenX=t.screenX||0,this.screenY=t.screenY||0),this.button=t.button,this.key=t.key||"",this.ctrlKey=t.ctrlKey,this.altKey=t.altKey,this.shiftKey=t.shiftKey,this.metaKey=t.metaKey,this.pointerId=t.pointerId||0,this.pointerType=typeof t.pointerType=="string"?t.pointerType:RO[t.pointerType]||"",this.state=t.state,this.i=t,t.defaultPrevented&&Oa.X.h.call(this)}}Et(Oa,xt);var RO={2:"touch",3:"pen",4:"mouse"};Oa.prototype.h=function(){Oa.X.h.call(this);var t=this.i;t.preventDefault?t.preventDefault():t.returnValue=!1};var dc="closure_listenable_"+(1e6*Math.random()|0),xO=0;function NO(t,e,n,r,i){this.listener=t,this.proxy=null,this.src=e,this.type=n,this.capture=!!r,this.ha=i,this.key=++xO,this.ba=this.ea=!1}function Kl(t){t.ba=!0,t.listener=null,t.proxy=null,t.src=null,t.ha=null}function zp(t,e,n){for(const r in t)e.call(n,t[r],r,t)}function qI(t){const e={};for(const n in t)e[n]=t[n];return e}const cv="constructor hasOwnProperty isPrototypeOf propertyIsEnumerable toLocaleString toString valueOf".split(" ");function jI(t,e){let n,r;for(let i=1;i<arguments.length;i++){r=arguments[i];for(n in r)t[n]=r[n];for(let s=0;s<cv.length;s++)n=cv[s],Object.prototype.hasOwnProperty.call(r,n)&&(t[n]=r[n])}}function Wl(t){this.src=t,this.g={},this.h=0}Wl.prototype.add=function(t,e,n,r,i){var s=t.toString();t=this.g[s],t||(t=this.g[s]=[],this.h++);var o=nf(t,e,r,i);return-1<o?(e=t[o],n||(e.ea=!1)):(e=new NO(e,this.src,s,!!r,i),e.ea=n,t.push(e)),e};function tf(t,e){var n=e.type;if(n in t.g){var r=t.g[n],i=UI(r,e),s;(s=0<=i)&&Array.prototype.splice.call(r,i,1),s&&(Kl(e),t.g[n].length==0&&(delete t.g[n],t.h--))}}function nf(t,e,n,r){for(var i=0;i<t.length;++i){var s=t[i];if(!s.ba&&s.listener==e&&s.capture==!!n&&s.ha==r)return i}return-1}var Hp="closure_lm_"+(1e6*Math.random()|0),ud={};function zI(t,e,n,r,i){if(r&&r.once)return KI(t,e,n,r,i);if(Array.isArray(e)){for(var s=0;s<e.length;s++)zI(t,e[s],n,r,i);return null}return n=Gp(n),t&&t[dc]?t.N(e,n,hc(r)?!!r.capture:!!r,i):HI(t,e,n,!1,r,i)}function HI(t,e,n,r,i,s){if(!e)throw Error("Invalid event type");var o=hc(i)?!!i.capture:!!i,a=Wp(t);if(a||(t[Hp]=a=new Wl(t)),n=a.add(e,n,r,o,s),n.proxy)return n;if(r=PO(),n.proxy=r,r.src=t,r.listener=n,t.addEventListener)IO||(i=o),i===void 0&&(i=!1),t.addEventListener(e.toString(),r,i);else if(t.attachEvent)t.attachEvent(GI(e.toString()),r);else if(t.addListener&&t.removeListener)t.addListener(r);else throw Error("addEventListener and attachEvent are unavailable.");return n}function PO(){function t(n){return e.call(t.src,t.listener,n)}const e=DO;return t}function KI(t,e,n,r,i){if(Array.isArray(e)){for(var s=0;s<e.length;s++)KI(t,e[s],n,r,i);return null}return n=Gp(n),t&&t[dc]?t.O(e,n,hc(r)?!!r.capture:!!r,i):HI(t,e,n,!0,r,i)}function WI(t,e,n,r,i){if(Array.isArray(e))for(var s=0;s<e.length;s++)WI(t,e[s],n,r,i);else r=hc(r)?!!r.capture:!!r,n=Gp(n),t&&t[dc]?(t=t.i,e=String(e).toString(),e in t.g&&(s=t.g[e],n=nf(s,n,r,i),-1<n&&(Kl(s[n]),Array.prototype.splice.call(s,n,1),s.length==0&&(delete t.g[e],t.h--)))):t&&(t=Wp(t))&&(e=t.g[e.toString()],t=-1,e&&(t=nf(e,n,r,i)),(n=-1<t?e[t]:null)&&Kp(n))}function Kp(t){if(typeof t!="number"&&t&&!t.ba){var e=t.src;if(e&&e[dc])tf(e.i,t);else{var n=t.type,r=t.proxy;e.removeEventListener?e.removeEventListener(n,r,t.capture):e.detachEvent?e.detachEvent(GI(n),r):e.addListener&&e.removeListener&&e.removeListener(r),(n=Wp(e))?(tf(n,t),n.h==0&&(n.src=null,e[Hp]=null)):Kl(t)}}}function GI(t){return t in ud?ud[t]:ud[t]="on"+t}function DO(t,e){if(t.ba)t=!0;else{e=new Oa(e,this);var n=t.listener,r=t.ha||t.src;t.ea&&Kp(t),t=n.call(r,e)}return t}function Wp(t){return t=t[Hp],t instanceof Wl?t:null}var ld="__closure_events_fn_"+(1e9*Math.random()>>>0);function Gp(t){return typeof t=="function"?t:(t[ld]||(t[ld]=function(e){return t.handleEvent(e)}),t[ld])}function dt(){ii.call(this),this.i=new Wl(this),this.P=this,this.I=null}Et(dt,ii);dt.prototype[dc]=!0;dt.prototype.removeEventListener=function(t,e,n,r){WI(this,t,e,n,r)};function wt(t,e){var n,r=t.I;if(r)for(n=[];r;r=r.I)n.push(r);if(t=t.P,r=e.type||e,typeof e=="string")e=new xt(e,t);else if(e instanceof xt)e.target=e.target||t;else{var i=e;e=new xt(r,t),jI(e,i)}if(i=!0,n)for(var s=n.length-1;0<=s;s--){var o=e.g=n[s];i=Hc(o,r,!0,e)&&i}if(o=e.g=t,i=Hc(o,r,!0,e)&&i,i=Hc(o,r,!1,e)&&i,n)for(s=0;s<n.length;s++)o=e.g=n[s],i=Hc(o,r,!1,e)&&i}dt.prototype.M=function(){if(dt.X.M.call(this),this.i){var t=this.i,e;for(e in t.g){for(var n=t.g[e],r=0;r<n.length;r++)Kl(n[r]);delete t.g[e],t.h--}}this.I=null};dt.prototype.N=function(t,e,n,r){return this.i.add(String(t),e,!1,n,r)};dt.prototype.O=function(t,e,n,r){return this.i.add(String(t),e,!0,n,r)};function Hc(t,e,n,r){if(e=t.i.g[String(e)],!e)return!0;e=e.concat();for(var i=!0,s=0;s<e.length;++s){var o=e[s];if(o&&!o.ba&&o.capture==n){var a=o.listener,c=o.ha||o.src;o.ea&&tf(t.i,o),i=a.call(c,r)!==!1&&i}}return i&&!r.defaultPrevented}var Yp=ie.JSON.stringify;function OO(){var t=XI;let e=null;return t.g&&(e=t.g,t.g=t.g.next,t.g||(t.h=null),e.next=null),e}class LO{constructor(){this.h=this.g=null}add(e,n){const r=YI.get();r.set(e,n),this.h?this.h.next=r:this.g=r,this.h=r}}var YI=new class{constructor(t,e){this.i=t,this.j=e,this.h=0,this.g=null}get(){let t;return 0<this.h?(this.h--,t=this.g,this.g=t.next,t.next=null):t=this.i(),t}}(()=>new MO,t=>t.reset());class MO{constructor(){this.next=this.g=this.h=null}set(e,n){this.h=e,this.g=n,this.next=null}reset(){this.next=this.g=this.h=null}}function FO(t){ie.setTimeout(()=>{throw t},0)}function QI(t,e){rf||UO(),sf||(rf(),sf=!0),XI.add(t,e)}var rf;function UO(){var t=ie.Promise.resolve(void 0);rf=function(){t.then(VO)}}var sf=!1,XI=new LO;function VO(){for(var t;t=OO();){try{t.h.call(t.g)}catch(n){FO(n)}var e=YI;e.j(t),100>e.h&&(e.h++,t.next=e.g,e.g=t)}sf=!1}function Gl(t,e){dt.call(this),this.h=t||1,this.g=e||ie,this.j=Rt(this.lb,this),this.l=Date.now()}Et(Gl,dt);Q=Gl.prototype;Q.ca=!1;Q.R=null;Q.lb=function(){if(this.ca){var t=Date.now()-this.l;0<t&&t<.8*this.h?this.R=this.g.setTimeout(this.j,this.h-t):(this.R&&(this.g.clearTimeout(this.R),this.R=null),wt(this,"tick"),this.ca&&(Qp(this),this.start()))}};Q.start=function(){this.ca=!0,this.R||(this.R=this.g.setTimeout(this.j,this.h),this.l=Date.now())};function Qp(t){t.ca=!1,t.R&&(t.g.clearTimeout(t.R),t.R=null)}Q.M=function(){Gl.X.M.call(this),Qp(this),delete this.g};function Xp(t,e,n){if(typeof t=="function")n&&(t=Rt(t,n));else if(t&&typeof t.handleEvent=="function")t=Rt(t.handleEvent,t);else throw Error("Invalid listener argument");return 2147483647<Number(e)?-1:ie.setTimeout(t,e||0)}function JI(t){t.g=Xp(()=>{t.g=null,t.i&&(t.i=!1,JI(t))},t.j);const e=t.h;t.h=null,t.m.apply(null,e)}class BO extends ii{constructor(e,n){super(),this.m=e,this.j=n,this.h=null,this.i=!1,this.g=null}l(e){this.h=arguments,this.g?this.i=!0:JI(this)}M(){super.M(),this.g&&(ie.clearTimeout(this.g),this.g=null,this.i=!1,this.h=null)}}function La(t){ii.call(this),this.h=t,this.g={}}Et(La,ii);var uv=[];function ZI(t,e,n,r){Array.isArray(n)||(n&&(uv[0]=n.toString()),n=uv);for(var i=0;i<n.length;i++){var s=zI(e,n[i],r||t.handleEvent,!1,t.h||t);if(!s)break;t.g[s.key]=s}}function e0(t){zp(t.g,function(e,n){this.g.hasOwnProperty(n)&&Kp(e)},t),t.g={}}La.prototype.M=function(){La.X.M.call(this),e0(this)};La.prototype.handleEvent=function(){throw Error("EventHandler.handleEvent not implemented")};function Yl(){this.g=!0}Yl.prototype.Aa=function(){this.g=!1};function $O(t,e,n,r,i,s){t.info(function(){if(t.g)if(s)for(var o="",a=s.split("&"),c=0;c<a.length;c++){var u=a[c].split("=");if(1<u.length){var l=u[0];u=u[1];var h=l.split("_");o=2<=h.length&&h[1]=="type"?o+(l+"="+u+"&"):o+(l+"=redacted&")}}else o=null;else o=s;return"XMLHTTP REQ ("+r+") [attempt "+i+"]: "+e+`
`+n+`
`+o})}function qO(t,e,n,r,i,s,o){t.info(function(){return"XMLHTTP RESP ("+r+") [ attempt "+i+"]: "+e+`
`+n+`
`+s+" "+o})}function Cs(t,e,n,r){t.info(function(){return"XMLHTTP TEXT ("+e+"): "+zO(t,n)+(r?" "+r:"")})}function jO(t,e){t.info(function(){return"TIMEOUT: "+e})}Yl.prototype.info=function(){};function zO(t,e){if(!t.g)return e;if(!e)return null;try{var n=JSON.parse(e);if(n){for(t=0;t<n.length;t++)if(Array.isArray(n[t])){var r=n[t];if(!(2>r.length)){var i=r[1];if(Array.isArray(i)&&!(1>i.length)){var s=i[0];if(s!="noop"&&s!="stop"&&s!="close")for(var o=1;o<i.length;o++)i[o]=""}}}}return Yp(n)}catch{return e}}var us={},lv=null;function Ql(){return lv=lv||new dt}us.Pa="serverreachability";function t0(t){xt.call(this,us.Pa,t)}Et(t0,xt);function Ma(t){const e=Ql();wt(e,new t0(e))}us.STAT_EVENT="statevent";function n0(t,e){xt.call(this,us.STAT_EVENT,t),this.stat=e}Et(n0,xt);function Mt(t){const e=Ql();wt(e,new n0(e,t))}us.Qa="timingevent";function r0(t,e){xt.call(this,us.Qa,t),this.size=e}Et(r0,xt);function fc(t,e){if(typeof t!="function")throw Error("Fn must not be null and must be a function");return ie.setTimeout(function(){t()},e)}var Xl={NO_ERROR:0,mb:1,zb:2,yb:3,tb:4,xb:5,Ab:6,Ma:7,TIMEOUT:8,Db:9},i0={rb:"complete",Nb:"success",Na:"error",Ma:"abort",Fb:"ready",Gb:"readystatechange",TIMEOUT:"timeout",Bb:"incrementaldata",Eb:"progress",ub:"downloadprogress",Vb:"uploadprogress"};function Jp(){}Jp.prototype.h=null;function hv(t){return t.h||(t.h=t.i())}function s0(){}var pc={OPEN:"a",qb:"b",Na:"c",Cb:"d"};function Zp(){xt.call(this,"d")}Et(Zp,xt);function em(){xt.call(this,"c")}Et(em,xt);var of;function Jl(){}Et(Jl,Jp);Jl.prototype.g=function(){return new XMLHttpRequest};Jl.prototype.i=function(){return{}};of=new Jl;function mc(t,e,n,r){this.l=t,this.j=e,this.m=n,this.U=r||1,this.S=new La(this),this.O=HO,t=Zd?125:void 0,this.T=new Gl(t),this.H=null,this.i=!1,this.s=this.A=this.v=this.K=this.F=this.V=this.B=null,this.D=[],this.g=null,this.C=0,this.o=this.u=null,this.Y=-1,this.I=!1,this.N=0,this.L=null,this.$=this.J=this.Z=this.P=!1,this.h=new o0}function o0(){this.i=null,this.g="",this.h=!1}var HO=45e3,af={},Gu={};Q=mc.prototype;Q.setTimeout=function(t){this.O=t};function cf(t,e,n){t.K=1,t.v=eh(sr(e)),t.s=n,t.P=!0,a0(t,null)}function a0(t,e){t.F=Date.now(),gc(t),t.A=sr(t.v);var n=t.A,r=t.U;Array.isArray(r)||(r=[String(r)]),m0(n.i,"t",r),t.C=0,n=t.l.H,t.h=new o0,t.g=M0(t.l,n?e:null,!t.s),0<t.N&&(t.L=new BO(Rt(t.La,t,t.g),t.N)),ZI(t.S,t.g,"readystatechange",t.ib),e=t.H?qI(t.H):{},t.s?(t.u||(t.u="POST"),e["Content-Type"]="application/x-www-form-urlencoded",t.g.da(t.A,t.u,t.s,e)):(t.u="GET",t.g.da(t.A,t.u,null,e)),Ma(),$O(t.j,t.u,t.A,t.m,t.U,t.s)}Q.ib=function(t){t=t.target;const e=this.L;e&&Jn(t)==3?e.l():this.La(t)};Q.La=function(t){try{if(t==this.g)e:{const l=Jn(this.g);var e=this.g.Ea();const h=this.g.aa();if(!(3>l)&&(l!=3||Zd||this.g&&(this.h.h||this.g.fa()||mv(this.g)))){this.I||l!=4||e==7||(e==8||0>=h?Ma(3):Ma(2)),Zl(this);var n=this.g.aa();this.Y=n;t:if(c0(this)){var r=mv(this.g);t="";var i=r.length,s=Jn(this.g)==4;if(!this.h.i){if(typeof TextDecoder>"u"){xi(this),ca(this);var o="";break t}this.h.i=new ie.TextDecoder}for(e=0;e<i;e++)this.h.h=!0,t+=this.h.i.decode(r[e],{stream:s&&e==i-1});r.splice(0,i),this.h.g+=t,this.C=0,o=this.h.g}else o=this.g.fa();if(this.i=n==200,qO(this.j,this.u,this.A,this.m,this.U,l,n),this.i){if(this.Z&&!this.J){t:{if(this.g){var a,c=this.g;if((a=c.g?c.g.getResponseHeader("X-HTTP-Initial-Response"):null)&&!Ku(a)){var u=a;break t}}u=null}if(n=u)Cs(this.j,this.m,n,"Initial handshake response via X-HTTP-Initial-Response"),this.J=!0,uf(this,n);else{this.i=!1,this.o=3,Mt(12),xi(this),ca(this);break e}}this.P?(u0(this,l,o),Zd&&this.i&&l==3&&(ZI(this.S,this.T,"tick",this.hb),this.T.start())):(Cs(this.j,this.m,o,null),uf(this,o)),l==4&&xi(this),this.i&&!this.I&&(l==4?P0(this.l,this):(this.i=!1,gc(this)))}else n==400&&0<o.indexOf("Unknown SID")?(this.o=3,Mt(12)):(this.o=0,Mt(13)),xi(this),ca(this)}}}catch{}finally{}};function c0(t){return t.g?t.u=="GET"&&t.K!=2&&t.l.Da:!1}function u0(t,e,n){let r=!0,i;for(;!t.I&&t.C<n.length;)if(i=KO(t,n),i==Gu){e==4&&(t.o=4,Mt(14),r=!1),Cs(t.j,t.m,null,"[Incomplete Response]");break}else if(i==af){t.o=4,Mt(15),Cs(t.j,t.m,n,"[Invalid Chunk]"),r=!1;break}else Cs(t.j,t.m,i,null),uf(t,i);c0(t)&&i!=Gu&&i!=af&&(t.h.g="",t.C=0),e!=4||n.length!=0||t.h.h||(t.o=1,Mt(16),r=!1),t.i=t.i&&r,r?0<n.length&&!t.$&&(t.$=!0,e=t.l,e.g==t&&e.$&&!e.K&&(e.j.info("Great, no buffering proxy detected. Bytes received: "+n.length),am(e),e.K=!0,Mt(11))):(Cs(t.j,t.m,n,"[Invalid Chunked Response]"),xi(t),ca(t))}Q.hb=function(){if(this.g){var t=Jn(this.g),e=this.g.fa();this.C<e.length&&(Zl(this),u0(this,t,e),this.i&&t!=4&&gc(this))}};function KO(t,e){var n=t.C,r=e.indexOf(`
`,n);return r==-1?Gu:(n=Number(e.substring(n,r)),isNaN(n)?af:(r+=1,r+n>e.length?Gu:(e=e.substr(r,n),t.C=r+n,e)))}Q.cancel=function(){this.I=!0,xi(this)};function gc(t){t.V=Date.now()+t.O,l0(t,t.O)}function l0(t,e){if(t.B!=null)throw Error("WatchDog timer not null");t.B=fc(Rt(t.gb,t),e)}function Zl(t){t.B&&(ie.clearTimeout(t.B),t.B=null)}Q.gb=function(){this.B=null;const t=Date.now();0<=t-this.V?(jO(this.j,this.A),this.K!=2&&(Ma(),Mt(17)),xi(this),this.o=2,ca(this)):l0(this,this.V-t)};function ca(t){t.l.G==0||t.I||P0(t.l,t)}function xi(t){Zl(t);var e=t.L;e&&typeof e.na=="function"&&e.na(),t.L=null,Qp(t.T),e0(t.S),t.g&&(e=t.g,t.g=null,e.abort(),e.na())}function uf(t,e){try{var n=t.l;if(n.G!=0&&(n.g==t||lf(n.h,t))){if(!t.J&&lf(n.h,t)&&n.G==3){try{var r=n.Fa.g.parse(e)}catch{r=null}if(Array.isArray(r)&&r.length==3){var i=r;if(i[0]==0){e:if(!n.u){if(n.g)if(n.g.F+3e3<t.F)Xu(n),rh(n);else break e;om(n),Mt(18)}}else n.Ba=i[1],0<n.Ba-n.T&&37500>i[2]&&n.L&&n.A==0&&!n.v&&(n.v=fc(Rt(n.cb,n),6e3));if(1>=v0(n.h)&&n.ja){try{n.ja()}catch{}n.ja=void 0}}else Ni(n,11)}else if((t.J||n.g==t)&&Xu(n),!Ku(e))for(i=n.Fa.g.parse(e),e=0;e<i.length;e++){let u=i[e];if(n.T=u[0],u=u[1],n.G==2)if(u[0]=="c"){n.I=u[1],n.ka=u[2];const l=u[3];l!=null&&(n.ma=l,n.j.info("VER="+n.ma));const h=u[4];h!=null&&(n.Ca=h,n.j.info("SVER="+n.Ca));const d=u[5];d!=null&&typeof d=="number"&&0<d&&(r=1.5*d,n.J=r,n.j.info("backChannelRequestTimeoutMs_="+r)),r=n;const f=t.g;if(f){const g=f.g?f.g.getResponseHeader("X-Client-Wire-Protocol"):null;if(g){var s=r.h;s.g||g.indexOf("spdy")==-1&&g.indexOf("quic")==-1&&g.indexOf("h2")==-1||(s.j=s.l,s.g=new Set,s.h&&(tm(s,s.h),s.h=null))}if(r.D){const y=f.g?f.g.getResponseHeader("X-HTTP-Session-Id"):null;y&&(r.za=y,Me(r.F,r.D,y))}}n.G=3,n.l&&n.l.xa(),n.$&&(n.P=Date.now()-t.F,n.j.info("Handshake RTT: "+n.P+"ms")),r=n;var o=t;if(r.sa=L0(r,r.H?r.ka:null,r.V),o.J){w0(r.h,o);var a=o,c=r.J;c&&a.setTimeout(c),a.B&&(Zl(a),gc(a)),r.g=o}else x0(r);0<n.i.length&&ih(n)}else u[0]!="stop"&&u[0]!="close"||Ni(n,7);else n.G==3&&(u[0]=="stop"||u[0]=="close"?u[0]=="stop"?Ni(n,7):sm(n):u[0]!="noop"&&n.l&&n.l.wa(u),n.A=0)}}Ma(4)}catch{}}function WO(t){if(t.W&&typeof t.W=="function")return t.W();if(typeof Map<"u"&&t instanceof Map||typeof Set<"u"&&t instanceof Set)return Array.from(t.values());if(typeof t=="string")return t.split("");if(zl(t)){for(var e=[],n=t.length,r=0;r<n;r++)e.push(t[r]);return e}e=[],n=0;for(r in t)e[n++]=t[r];return e}function GO(t){if(t.oa&&typeof t.oa=="function")return t.oa();if(!t.W||typeof t.W!="function"){if(typeof Map<"u"&&t instanceof Map)return Array.from(t.keys());if(!(typeof Set<"u"&&t instanceof Set)){if(zl(t)||typeof t=="string"){var e=[];t=t.length;for(var n=0;n<t;n++)e.push(n);return e}e=[],n=0;for(const r in t)e[n++]=r;return e}}}function h0(t,e){if(t.forEach&&typeof t.forEach=="function")t.forEach(e,void 0);else if(zl(t)||typeof t=="string")Array.prototype.forEach.call(t,e,void 0);else for(var n=GO(t),r=WO(t),i=r.length,s=0;s<i;s++)e.call(void 0,r[s],n&&n[s],t)}var d0=RegExp("^(?:([^:/?#.]+):)?(?://(?:([^\\\\/?#]*)@)?([^\\\\/?#]*?)(?::([0-9]+))?(?=[\\\\/?#]|$))?([^?#]+)?(?:\\?([^#]*))?(?:#([\\s\\S]*))?$");function YO(t,e){if(t){t=t.split("&");for(var n=0;n<t.length;n++){var r=t[n].indexOf("="),i=null;if(0<=r){var s=t[n].substring(0,r);i=t[n].substring(r+1)}else s=t[n];e(s,i?decodeURIComponent(i.replace(/\+/g," ")):"")}}}function $i(t,e){if(this.g=this.s=this.j="",this.m=null,this.o=this.l="",this.h=!1,t instanceof $i){this.h=e!==void 0?e:t.h,Yu(this,t.j),this.s=t.s,this.g=t.g,Qu(this,t.m),this.l=t.l,e=t.i;var n=new Fa;n.i=e.i,e.g&&(n.g=new Map(e.g),n.h=e.h),dv(this,n),this.o=t.o}else t&&(n=String(t).match(d0))?(this.h=!!e,Yu(this,n[1]||"",!0),this.s=Yo(n[2]||""),this.g=Yo(n[3]||"",!0),Qu(this,n[4]),this.l=Yo(n[5]||"",!0),dv(this,n[6]||"",!0),this.o=Yo(n[7]||"")):(this.h=!!e,this.i=new Fa(null,this.h))}$i.prototype.toString=function(){var t=[],e=this.j;e&&t.push(Qo(e,fv,!0),":");var n=this.g;return(n||e=="file")&&(t.push("//"),(e=this.s)&&t.push(Qo(e,fv,!0),"@"),t.push(encodeURIComponent(String(n)).replace(/%25([0-9a-fA-F]{2})/g,"%$1")),n=this.m,n!=null&&t.push(":",String(n))),(n=this.l)&&(this.g&&n.charAt(0)!="/"&&t.push("/"),t.push(Qo(n,n.charAt(0)=="/"?JO:XO,!0))),(n=this.i.toString())&&t.push("?",n),(n=this.o)&&t.push("#",Qo(n,eL)),t.join("")};function sr(t){return new $i(t)}function Yu(t,e,n){t.j=n?Yo(e,!0):e,t.j&&(t.j=t.j.replace(/:$/,""))}function Qu(t,e){if(e){if(e=Number(e),isNaN(e)||0>e)throw Error("Bad port number "+e);t.m=e}else t.m=null}function dv(t,e,n){e instanceof Fa?(t.i=e,tL(t.i,t.h)):(n||(e=Qo(e,ZO)),t.i=new Fa(e,t.h))}function Me(t,e,n){t.i.set(e,n)}function eh(t){return Me(t,"zx",Math.floor(2147483648*Math.random()).toString(36)+Math.abs(Math.floor(2147483648*Math.random())^Date.now()).toString(36)),t}function Yo(t,e){return t?e?decodeURI(t.replace(/%25/g,"%2525")):decodeURIComponent(t):""}function Qo(t,e,n){return typeof t=="string"?(t=encodeURI(t).replace(e,QO),n&&(t=t.replace(/%25([0-9a-fA-F]{2})/g,"%$1")),t):null}function QO(t){return t=t.charCodeAt(0),"%"+(t>>4&15).toString(16)+(t&15).toString(16)}var fv=/[#\/\?@]/g,XO=/[#\?:]/g,JO=/[#\?]/g,ZO=/[#\?@]/g,eL=/#/g;function Fa(t,e){this.h=this.g=null,this.i=t||null,this.j=!!e}function si(t){t.g||(t.g=new Map,t.h=0,t.i&&YO(t.i,function(e,n){t.add(decodeURIComponent(e.replace(/\+/g," ")),n)}))}Q=Fa.prototype;Q.add=function(t,e){si(this),this.i=null,t=wo(this,t);var n=this.g.get(t);return n||this.g.set(t,n=[]),n.push(e),this.h+=1,this};function f0(t,e){si(t),e=wo(t,e),t.g.has(e)&&(t.i=null,t.h-=t.g.get(e).length,t.g.delete(e))}function p0(t,e){return si(t),e=wo(t,e),t.g.has(e)}Q.forEach=function(t,e){si(this),this.g.forEach(function(n,r){n.forEach(function(i){t.call(e,i,r,this)},this)},this)};Q.oa=function(){si(this);const t=Array.from(this.g.values()),e=Array.from(this.g.keys()),n=[];for(let r=0;r<e.length;r++){const i=t[r];for(let s=0;s<i.length;s++)n.push(e[r])}return n};Q.W=function(t){si(this);let e=[];if(typeof t=="string")p0(this,t)&&(e=e.concat(this.g.get(wo(this,t))));else{t=Array.from(this.g.values());for(let n=0;n<t.length;n++)e=e.concat(t[n])}return e};Q.set=function(t,e){return si(this),this.i=null,t=wo(this,t),p0(this,t)&&(this.h-=this.g.get(t).length),this.g.set(t,[e]),this.h+=1,this};Q.get=function(t,e){return t?(t=this.W(t),0<t.length?String(t[0]):e):e};function m0(t,e,n){f0(t,e),0<n.length&&(t.i=null,t.g.set(wo(t,e),qp(n)),t.h+=n.length)}Q.toString=function(){if(this.i)return this.i;if(!this.g)return"";const t=[],e=Array.from(this.g.keys());for(var n=0;n<e.length;n++){var r=e[n];const s=encodeURIComponent(String(r)),o=this.W(r);for(r=0;r<o.length;r++){var i=s;o[r]!==""&&(i+="="+encodeURIComponent(String(o[r]))),t.push(i)}}return this.i=t.join("&")};function wo(t,e){return e=String(e),t.j&&(e=e.toLowerCase()),e}function tL(t,e){e&&!t.j&&(si(t),t.i=null,t.g.forEach(function(n,r){var i=r.toLowerCase();r!=i&&(f0(this,r),m0(this,i,n))},t)),t.j=e}var nL=class{constructor(t,e){this.h=t,this.g=e}};function g0(t){this.l=t||rL,ie.PerformanceNavigationTiming?(t=ie.performance.getEntriesByType("navigation"),t=0<t.length&&(t[0].nextHopProtocol=="hq"||t[0].nextHopProtocol=="h2")):t=!!(ie.g&&ie.g.Ga&&ie.g.Ga()&&ie.g.Ga().$b),this.j=t?this.l:1,this.g=null,1<this.j&&(this.g=new Set),this.h=null,this.i=[]}var rL=10;function y0(t){return t.h?!0:t.g?t.g.size>=t.j:!1}function v0(t){return t.h?1:t.g?t.g.size:0}function lf(t,e){return t.h?t.h==e:t.g?t.g.has(e):!1}function tm(t,e){t.g?t.g.add(e):t.h=e}function w0(t,e){t.h&&t.h==e?t.h=null:t.g&&t.g.has(e)&&t.g.delete(e)}g0.prototype.cancel=function(){if(this.i=_0(this),this.h)this.h.cancel(),this.h=null;else if(this.g&&this.g.size!==0){for(const t of this.g.values())t.cancel();this.g.clear()}};function _0(t){if(t.h!=null)return t.i.concat(t.h.D);if(t.g!=null&&t.g.size!==0){let e=t.i;for(const n of t.g.values())e=e.concat(n.D);return e}return qp(t.i)}function nm(){}nm.prototype.stringify=function(t){return ie.JSON.stringify(t,void 0)};nm.prototype.parse=function(t){return ie.JSON.parse(t,void 0)};function iL(){this.g=new nm}function sL(t,e,n){const r=n||"";try{h0(t,function(i,s){let o=i;hc(i)&&(o=Yp(i)),e.push(r+s+"="+encodeURIComponent(o))})}catch(i){throw e.push(r+"type="+encodeURIComponent("_badmap")),i}}function oL(t,e){const n=new Yl;if(ie.Image){const r=new Image;r.onload=zc(Kc,n,r,"TestLoadImage: loaded",!0,e),r.onerror=zc(Kc,n,r,"TestLoadImage: error",!1,e),r.onabort=zc(Kc,n,r,"TestLoadImage: abort",!1,e),r.ontimeout=zc(Kc,n,r,"TestLoadImage: timeout",!1,e),ie.setTimeout(function(){r.ontimeout&&r.ontimeout()},1e4),r.src=t}else e(!1)}function Kc(t,e,n,r,i){try{e.onload=null,e.onerror=null,e.onabort=null,e.ontimeout=null,i(r)}catch{}}function yc(t){this.l=t.ac||null,this.j=t.jb||!1}Et(yc,Jp);yc.prototype.g=function(){return new th(this.l,this.j)};yc.prototype.i=function(t){return function(){return t}}({});function th(t,e){dt.call(this),this.D=t,this.u=e,this.m=void 0,this.readyState=rm,this.status=0,this.responseType=this.responseText=this.response=this.statusText="",this.onreadystatechange=null,this.v=new Headers,this.h=null,this.C="GET",this.B="",this.g=!1,this.A=this.j=this.l=null}Et(th,dt);var rm=0;Q=th.prototype;Q.open=function(t,e){if(this.readyState!=rm)throw this.abort(),Error("Error reopening a connection");this.C=t,this.B=e,this.readyState=1,Ua(this)};Q.send=function(t){if(this.readyState!=1)throw this.abort(),Error("need to call open() first. ");this.g=!0;const e={headers:this.v,method:this.C,credentials:this.m,cache:void 0};t&&(e.body=t),(this.D||ie).fetch(new Request(this.B,e)).then(this.Wa.bind(this),this.ga.bind(this))};Q.abort=function(){this.response=this.responseText="",this.v=new Headers,this.status=0,this.j&&this.j.cancel("Request was aborted.").catch(()=>{}),1<=this.readyState&&this.g&&this.readyState!=4&&(this.g=!1,vc(this)),this.readyState=rm};Q.Wa=function(t){if(this.g&&(this.l=t,this.h||(this.status=this.l.status,this.statusText=this.l.statusText,this.h=t.headers,this.readyState=2,Ua(this)),this.g&&(this.readyState=3,Ua(this),this.g)))if(this.responseType==="arraybuffer")t.arrayBuffer().then(this.Ua.bind(this),this.ga.bind(this));else if(typeof ie.ReadableStream<"u"&&"body"in t){if(this.j=t.body.getReader(),this.u){if(this.responseType)throw Error('responseType must be empty for "streamBinaryChunks" mode responses.');this.response=[]}else this.response=this.responseText="",this.A=new TextDecoder;b0(this)}else t.text().then(this.Va.bind(this),this.ga.bind(this))};function b0(t){t.j.read().then(t.Ta.bind(t)).catch(t.ga.bind(t))}Q.Ta=function(t){if(this.g){if(this.u&&t.value)this.response.push(t.value);else if(!this.u){var e=t.value?t.value:new Uint8Array(0);(e=this.A.decode(e,{stream:!t.done}))&&(this.response=this.responseText+=e)}t.done?vc(this):Ua(this),this.readyState==3&&b0(this)}};Q.Va=function(t){this.g&&(this.response=this.responseText=t,vc(this))};Q.Ua=function(t){this.g&&(this.response=t,vc(this))};Q.ga=function(){this.g&&vc(this)};function vc(t){t.readyState=4,t.l=null,t.j=null,t.A=null,Ua(t)}Q.setRequestHeader=function(t,e){this.v.append(t,e)};Q.getResponseHeader=function(t){return this.h&&this.h.get(t.toLowerCase())||""};Q.getAllResponseHeaders=function(){if(!this.h)return"";const t=[],e=this.h.entries();for(var n=e.next();!n.done;)n=n.value,t.push(n[0]+": "+n[1]),n=e.next();return t.join(`\r
`)};function Ua(t){t.onreadystatechange&&t.onreadystatechange.call(t)}Object.defineProperty(th.prototype,"withCredentials",{get:function(){return this.m==="include"},set:function(t){this.m=t?"include":"same-origin"}});var aL=ie.JSON.parse;function Ke(t){dt.call(this),this.headers=new Map,this.u=t||null,this.h=!1,this.C=this.g=null,this.H="",this.m=0,this.j="",this.l=this.F=this.v=this.D=!1,this.B=0,this.A=null,this.J=I0,this.K=this.L=!1}Et(Ke,dt);var I0="",cL=/^https?$/i,uL=["POST","PUT"];Q=Ke.prototype;Q.Ka=function(t){this.L=t};Q.da=function(t,e,n,r){if(this.g)throw Error("[goog.net.XhrIo] Object is active with another request="+this.H+"; newUri="+t);e=e?e.toUpperCase():"GET",this.H=t,this.j="",this.m=0,this.D=!1,this.h=!0,this.g=this.u?this.u.g():of.g(),this.C=this.u?hv(this.u):hv(of),this.g.onreadystatechange=Rt(this.Ha,this);try{this.F=!0,this.g.open(e,String(t),!0),this.F=!1}catch(s){pv(this,s);return}if(t=n||"",n=new Map(this.headers),r)if(Object.getPrototypeOf(r)===Object.prototype)for(var i in r)n.set(i,r[i]);else if(typeof r.keys=="function"&&typeof r.get=="function")for(const s of r.keys())n.set(s,r.get(s));else throw Error("Unknown input type for opt_headers: "+String(r));r=Array.from(n.keys()).find(s=>s.toLowerCase()=="content-type"),i=ie.FormData&&t instanceof ie.FormData,!(0<=UI(uL,e))||r||i||n.set("Content-Type","application/x-www-form-urlencoded;charset=utf-8");for(const[s,o]of n)this.g.setRequestHeader(s,o);this.J&&(this.g.responseType=this.J),"withCredentials"in this.g&&this.g.withCredentials!==this.L&&(this.g.withCredentials=this.L);try{S0(this),0<this.B&&((this.K=lL(this.g))?(this.g.timeout=this.B,this.g.ontimeout=Rt(this.qa,this)):this.A=Xp(this.qa,this.B,this)),this.v=!0,this.g.send(t),this.v=!1}catch(s){pv(this,s)}};function lL(t){return Qs&&AO()&&typeof t.timeout=="number"&&t.ontimeout!==void 0}Q.qa=function(){typeof $p<"u"&&this.g&&(this.j="Timed out after "+this.B+"ms, aborting",this.m=8,wt(this,"timeout"),this.abort(8))};function pv(t,e){t.h=!1,t.g&&(t.l=!0,t.g.abort(),t.l=!1),t.j=e,t.m=5,E0(t),nh(t)}function E0(t){t.D||(t.D=!0,wt(t,"complete"),wt(t,"error"))}Q.abort=function(t){this.g&&this.h&&(this.h=!1,this.l=!0,this.g.abort(),this.l=!1,this.m=t||7,wt(this,"complete"),wt(this,"abort"),nh(this))};Q.M=function(){this.g&&(this.h&&(this.h=!1,this.l=!0,this.g.abort(),this.l=!1),nh(this,!0)),Ke.X.M.call(this)};Q.Ha=function(){this.s||(this.F||this.v||this.l?T0(this):this.fb())};Q.fb=function(){T0(this)};function T0(t){if(t.h&&typeof $p<"u"&&(!t.C[1]||Jn(t)!=4||t.aa()!=2)){if(t.v&&Jn(t)==4)Xp(t.Ha,0,t);else if(wt(t,"readystatechange"),Jn(t)==4){t.h=!1;try{const a=t.aa();e:switch(a){case 200:case 201:case 202:case 204:case 206:case 304:case 1223:var e=!0;break e;default:e=!1}var n;if(!(n=e)){var r;if(r=a===0){var i=String(t.H).match(d0)[1]||null;if(!i&&ie.self&&ie.self.location){var s=ie.self.location.protocol;i=s.substr(0,s.length-1)}r=!cL.test(i?i.toLowerCase():"")}n=r}if(n)wt(t,"complete"),wt(t,"success");else{t.m=6;try{var o=2<Jn(t)?t.g.statusText:""}catch{o=""}t.j=o+" ["+t.aa()+"]",E0(t)}}finally{nh(t)}}}}function nh(t,e){if(t.g){S0(t);const n=t.g,r=t.C[0]?Hu:null;t.g=null,t.C=null,e||wt(t,"ready");try{n.onreadystatechange=r}catch{}}}function S0(t){t.g&&t.K&&(t.g.ontimeout=null),t.A&&(ie.clearTimeout(t.A),t.A=null)}function Jn(t){return t.g?t.g.readyState:0}Q.aa=function(){try{return 2<Jn(this)?this.g.status:-1}catch{return-1}};Q.fa=function(){try{return this.g?this.g.responseText:""}catch{return""}};Q.Sa=function(t){if(this.g){var e=this.g.responseText;return t&&e.indexOf(t)==0&&(e=e.substring(t.length)),aL(e)}};function mv(t){try{if(!t.g)return null;if("response"in t.g)return t.g.response;switch(t.J){case I0:case"text":return t.g.responseText;case"arraybuffer":if("mozResponseArrayBuffer"in t.g)return t.g.mozResponseArrayBuffer}return null}catch{return null}}Q.Ea=function(){return this.m};Q.Oa=function(){return typeof this.j=="string"?this.j:String(this.j)};function k0(t){let e="";return zp(t,function(n,r){e+=r,e+=":",e+=n,e+=`\r
`}),e}function im(t,e,n){e:{for(r in n){var r=!1;break e}r=!0}r||(n=k0(n),typeof t=="string"?n!=null&&encodeURIComponent(String(n)):Me(t,e,n))}function Fo(t,e,n){return n&&n.internalChannelParams&&n.internalChannelParams[t]||e}function A0(t){this.Ca=0,this.i=[],this.j=new Yl,this.ka=this.sa=this.F=this.V=this.g=this.za=this.D=this.ia=this.o=this.S=this.s=null,this.ab=this.U=0,this.Za=Fo("failFast",!1,t),this.L=this.v=this.u=this.m=this.l=null,this.Y=!0,this.pa=this.Ba=this.T=-1,this.Z=this.A=this.C=0,this.Xa=Fo("baseRetryDelayMs",5e3,t),this.bb=Fo("retryDelaySeedMs",1e4,t),this.$a=Fo("forwardChannelMaxRetries",2,t),this.ta=Fo("forwardChannelRequestTimeoutMs",2e4,t),this.ra=t&&t.xmlHttpFactory||void 0,this.Da=t&&t.Zb||!1,this.J=void 0,this.H=t&&t.supportsCrossDomainXhr||!1,this.I="",this.h=new g0(t&&t.concurrentRequestLimit),this.Fa=new iL,this.O=t&&t.fastHandshake||!1,this.N=t&&t.encodeInitMessageHeaders||!1,this.O&&this.N&&(this.N=!1),this.Ya=t&&t.Xb||!1,t&&t.Aa&&this.j.Aa(),t&&t.forceLongPolling&&(this.Y=!1),this.$=!this.O&&this.Y&&t&&t.detectBufferingProxy||!1,this.ja=void 0,this.P=0,this.K=!1,this.la=this.B=null}Q=A0.prototype;Q.ma=8;Q.G=1;function sm(t){if(C0(t),t.G==3){var e=t.U++,n=sr(t.F);Me(n,"SID",t.I),Me(n,"RID",e),Me(n,"TYPE","terminate"),wc(t,n),e=new mc(t,t.j,e,void 0),e.K=2,e.v=eh(sr(n)),n=!1,ie.navigator&&ie.navigator.sendBeacon&&(n=ie.navigator.sendBeacon(e.v.toString(),"")),!n&&ie.Image&&(new Image().src=e.v,n=!0),n||(e.g=M0(e.l,null),e.g.da(e.v)),e.F=Date.now(),gc(e)}O0(t)}function rh(t){t.g&&(am(t),t.g.cancel(),t.g=null)}function C0(t){rh(t),t.u&&(ie.clearTimeout(t.u),t.u=null),Xu(t),t.h.cancel(),t.m&&(typeof t.m=="number"&&ie.clearTimeout(t.m),t.m=null)}function ih(t){y0(t.h)||t.m||(t.m=!0,QI(t.Ja,t),t.C=0)}function hL(t,e){return v0(t.h)>=t.h.j-(t.m?1:0)?!1:t.m?(t.i=e.D.concat(t.i),!0):t.G==1||t.G==2||t.C>=(t.Za?0:t.$a)?!1:(t.m=fc(Rt(t.Ja,t,e),D0(t,t.C)),t.C++,!0)}Q.Ja=function(t){if(this.m)if(this.m=null,this.G==1){if(!t){this.U=Math.floor(1e5*Math.random()),t=this.U++;const i=new mc(this,this.j,t,void 0);let s=this.s;if(this.S&&(s?(s=qI(s),jI(s,this.S)):s=this.S),this.o!==null||this.N||(i.H=s,s=null),this.O)e:{for(var e=0,n=0;n<this.i.length;n++){t:{var r=this.i[n];if("__data__"in r.g&&(r=r.g.__data__,typeof r=="string")){r=r.length;break t}r=void 0}if(r===void 0)break;if(e+=r,4096<e){e=n;break e}if(e===4096||n===this.i.length-1){e=n+1;break e}}e=1e3}else e=1e3;e=R0(this,i,e),n=sr(this.F),Me(n,"RID",t),Me(n,"CVER",22),this.D&&Me(n,"X-HTTP-Session-Id",this.D),wc(this,n),s&&(this.N?e="headers="+encodeURIComponent(String(k0(s)))+"&"+e:this.o&&im(n,this.o,s)),tm(this.h,i),this.Ya&&Me(n,"TYPE","init"),this.O?(Me(n,"$req",e),Me(n,"SID","null"),i.Z=!0,cf(i,n,null)):cf(i,n,e),this.G=2}}else this.G==3&&(t?gv(this,t):this.i.length==0||y0(this.h)||gv(this))};function gv(t,e){var n;e?n=e.m:n=t.U++;const r=sr(t.F);Me(r,"SID",t.I),Me(r,"RID",n),Me(r,"AID",t.T),wc(t,r),t.o&&t.s&&im(r,t.o,t.s),n=new mc(t,t.j,n,t.C+1),t.o===null&&(n.H=t.s),e&&(t.i=e.D.concat(t.i)),e=R0(t,n,1e3),n.setTimeout(Math.round(.5*t.ta)+Math.round(.5*t.ta*Math.random())),tm(t.h,n),cf(n,r,e)}function wc(t,e){t.ia&&zp(t.ia,function(n,r){Me(e,r,n)}),t.l&&h0({},function(n,r){Me(e,r,n)})}function R0(t,e,n){n=Math.min(t.i.length,n);var r=t.l?Rt(t.l.Ra,t.l,t):null;e:{var i=t.i;let s=-1;for(;;){const o=["count="+n];s==-1?0<n?(s=i[0].h,o.push("ofs="+s)):s=0:o.push("ofs="+s);let a=!0;for(let c=0;c<n;c++){let u=i[c].h;const l=i[c].g;if(u-=s,0>u)s=Math.max(0,i[c].h-100),a=!1;else try{sL(l,o,"req"+u+"_")}catch{r&&r(l)}}if(a){r=o.join("&");break e}}}return t=t.i.splice(0,n),e.D=t,r}function x0(t){t.g||t.u||(t.Z=1,QI(t.Ia,t),t.A=0)}function om(t){return t.g||t.u||3<=t.A?!1:(t.Z++,t.u=fc(Rt(t.Ia,t),D0(t,t.A)),t.A++,!0)}Q.Ia=function(){if(this.u=null,N0(this),this.$&&!(this.K||this.g==null||0>=this.P)){var t=2*this.P;this.j.info("BP detection timer enabled: "+t),this.B=fc(Rt(this.eb,this),t)}};Q.eb=function(){this.B&&(this.B=null,this.j.info("BP detection timeout reached."),this.j.info("Buffering proxy detected and switch to long-polling!"),this.L=!1,this.K=!0,Mt(10),rh(this),N0(this))};function am(t){t.B!=null&&(ie.clearTimeout(t.B),t.B=null)}function N0(t){t.g=new mc(t,t.j,"rpc",t.Z),t.o===null&&(t.g.H=t.s),t.g.N=0;var e=sr(t.sa);Me(e,"RID","rpc"),Me(e,"SID",t.I),Me(e,"CI",t.L?"0":"1"),Me(e,"AID",t.T),Me(e,"TYPE","xmlhttp"),wc(t,e),t.o&&t.s&&im(e,t.o,t.s),t.J&&t.g.setTimeout(t.J);var n=t.g;t=t.ka,n.K=1,n.v=eh(sr(e)),n.s=null,n.P=!0,a0(n,t)}Q.cb=function(){this.v!=null&&(this.v=null,rh(this),om(this),Mt(19))};function Xu(t){t.v!=null&&(ie.clearTimeout(t.v),t.v=null)}function P0(t,e){var n=null;if(t.g==e){Xu(t),am(t),t.g=null;var r=2}else if(lf(t.h,e))n=e.D,w0(t.h,e),r=1;else return;if(t.G!=0){if(t.pa=e.Y,e.i)if(r==1){n=e.s?e.s.length:0,e=Date.now()-e.F;var i=t.C;r=Ql(),wt(r,new r0(r,n)),ih(t)}else x0(t);else if(i=e.o,i==3||i==0&&0<t.pa||!(r==1&&hL(t,e)||r==2&&om(t)))switch(n&&0<n.length&&(e=t.h,e.i=e.i.concat(n)),i){case 1:Ni(t,5);break;case 4:Ni(t,10);break;case 3:Ni(t,6);break;default:Ni(t,2)}}}function D0(t,e){let n=t.Xa+Math.floor(Math.random()*t.bb);return t.l||(n*=2),n*e}function Ni(t,e){if(t.j.info("Error code "+e),e==2){var n=null;t.l&&(n=null);var r=Rt(t.kb,t);n||(n=new $i("//www.google.com/images/cleardot.gif"),ie.location&&ie.location.protocol=="http"||Yu(n,"https"),eh(n)),oL(n.toString(),r)}else Mt(2);t.G=0,t.l&&t.l.va(e),O0(t),C0(t)}Q.kb=function(t){t?(this.j.info("Successfully pinged google.com"),Mt(2)):(this.j.info("Failed to ping google.com"),Mt(1))};function O0(t){if(t.G=0,t.la=[],t.l){const e=_0(t.h);(e.length!=0||t.i.length!=0)&&(sv(t.la,e),sv(t.la,t.i),t.h.i.length=0,qp(t.i),t.i.length=0),t.l.ua()}}function L0(t,e,n){var r=n instanceof $i?sr(n):new $i(n,void 0);if(r.g!="")e&&(r.g=e+"."+r.g),Qu(r,r.m);else{var i=ie.location;r=i.protocol,e=e?e+"."+i.hostname:i.hostname,i=+i.port;var s=new $i(null,void 0);r&&Yu(s,r),e&&(s.g=e),i&&Qu(s,i),n&&(s.l=n),r=s}return n=t.D,e=t.za,n&&e&&Me(r,n,e),Me(r,"VER",t.ma),wc(t,r),r}function M0(t,e,n){if(e&&!t.H)throw Error("Can't create secondary domain capable XhrIo object.");return e=n&&t.Da&&!t.ra?new Ke(new yc({jb:!0})):new Ke(t.ra),e.Ka(t.H),e}function F0(){}Q=F0.prototype;Q.xa=function(){};Q.wa=function(){};Q.va=function(){};Q.ua=function(){};Q.Ra=function(){};function Ju(){if(Qs&&!(10<=Number(CO)))throw Error("Environmental error: no available transport.")}Ju.prototype.g=function(t,e){return new Zt(t,e)};function Zt(t,e){dt.call(this),this.g=new A0(e),this.l=t,this.h=e&&e.messageUrlParams||null,t=e&&e.messageHeaders||null,e&&e.clientProtocolHeaderRequired&&(t?t["X-Client-Protocol"]="webchannel":t={"X-Client-Protocol":"webchannel"}),this.g.s=t,t=e&&e.initMessageHeaders||null,e&&e.messageContentType&&(t?t["X-WebChannel-Content-Type"]=e.messageContentType:t={"X-WebChannel-Content-Type":e.messageContentType}),e&&e.ya&&(t?t["X-WebChannel-Client-Profile"]=e.ya:t={"X-WebChannel-Client-Profile":e.ya}),this.g.S=t,(t=e&&e.Yb)&&!Ku(t)&&(this.g.o=t),this.A=e&&e.supportsCrossDomainXhr||!1,this.v=e&&e.sendRawJson||!1,(e=e&&e.httpSessionIdParam)&&!Ku(e)&&(this.g.D=e,t=this.h,t!==null&&e in t&&(t=this.h,e in t&&delete t[e])),this.j=new _o(this)}Et(Zt,dt);Zt.prototype.m=function(){this.g.l=this.j,this.A&&(this.g.H=!0);var t=this.g,e=this.l,n=this.h||void 0;Mt(0),t.V=e,t.ia=n||{},t.L=t.Y,t.F=L0(t,null,t.V),ih(t)};Zt.prototype.close=function(){sm(this.g)};Zt.prototype.u=function(t){var e=this.g;if(typeof t=="string"){var n={};n.__data__=t,t=n}else this.v&&(n={},n.__data__=Yp(t),t=n);e.i.push(new nL(e.ab++,t)),e.G==3&&ih(e)};Zt.prototype.M=function(){this.g.l=null,delete this.j,sm(this.g),delete this.g,Zt.X.M.call(this)};function U0(t){Zp.call(this);var e=t.__sm__;if(e){e:{for(const n in e){t=n;break e}t=void 0}(this.i=t)&&(t=this.i,e=e!==null&&t in e?e[t]:void 0),this.data=e}else this.data=t}Et(U0,Zp);function V0(){em.call(this),this.status=1}Et(V0,em);function _o(t){this.g=t}Et(_o,F0);_o.prototype.xa=function(){wt(this.g,"a")};_o.prototype.wa=function(t){wt(this.g,new U0(t))};_o.prototype.va=function(t){wt(this.g,new V0)};_o.prototype.ua=function(){wt(this.g,"b")};Ju.prototype.createWebChannel=Ju.prototype.g;Zt.prototype.send=Zt.prototype.u;Zt.prototype.open=Zt.prototype.m;Zt.prototype.close=Zt.prototype.close;Xl.NO_ERROR=0;Xl.TIMEOUT=8;Xl.HTTP_ERROR=6;i0.COMPLETE="complete";s0.EventType=pc;pc.OPEN="a";pc.CLOSE="b";pc.ERROR="c";pc.MESSAGE="d";dt.prototype.listen=dt.prototype.N;Ke.prototype.listenOnce=Ke.prototype.O;Ke.prototype.getLastError=Ke.prototype.Oa;Ke.prototype.getLastErrorCode=Ke.prototype.Ea;Ke.prototype.getStatus=Ke.prototype.aa;Ke.prototype.getResponseJson=Ke.prototype.Sa;Ke.prototype.getResponseText=Ke.prototype.fa;Ke.prototype.send=Ke.prototype.da;Ke.prototype.setWithCredentials=Ke.prototype.Ka;var dL=function(){return new Ju},fL=function(){return Ql()},hd=Xl,pL=i0,mL=us,yv={sb:0,vb:1,wb:2,Pb:3,Ub:4,Rb:5,Sb:6,Qb:7,Ob:8,Tb:9,PROXY:10,NOPROXY:11,Mb:12,Ib:13,Jb:14,Hb:15,Kb:16,Lb:17,ob:18,nb:19,pb:20},gL=yc,Wc=s0,yL=Ke;const vv="@firebase/firestore";/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class lt{constructor(e){this.uid=e}isAuthenticated(){return this.uid!=null}toKey(){return this.isAuthenticated()?"uid:"+this.uid:"anonymous-user"}isEqual(e){return e.uid===this.uid}}lt.UNAUTHENTICATED=new lt(null),lt.GOOGLE_CREDENTIALS=new lt("google-credentials-uid"),lt.FIRST_PARTY=new lt("first-party-uid"),lt.MOCK_USER=new lt("mock-user");/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let bo="9.20.0";/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Kr=new Ol("@firebase/firestore");function hf(){return Kr.logLevel}function vL(t){Kr.setLogLevel(t)}function R(t,...e){if(Kr.logLevel<=pe.DEBUG){const n=e.map(cm);Kr.debug(`Firestore (${bo}): ${t}`,...n)}}function Qe(t,...e){if(Kr.logLevel<=pe.ERROR){const n=e.map(cm);Kr.error(`Firestore (${bo}): ${t}`,...n)}}function or(t,...e){if(Kr.logLevel<=pe.WARN){const n=e.map(cm);Kr.warn(`Firestore (${bo}): ${t}`,...n)}}function cm(t){if(typeof t=="string")return t;try{return e=t,JSON.stringify(e)}catch{return t}/**
* @license
* Copyright 2020 Google LLC
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*   http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var e}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function $(t="Unexpected state"){const e=`FIRESTORE (${bo}) INTERNAL ASSERTION FAILED: `+t;throw Qe(e),new Error(e)}function X(t,e){t||$()}function wL(t,e){t||$()}function U(t,e){return t}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const _={OK:"ok",CANCELLED:"cancelled",UNKNOWN:"unknown",INVALID_ARGUMENT:"invalid-argument",DEADLINE_EXCEEDED:"deadline-exceeded",NOT_FOUND:"not-found",ALREADY_EXISTS:"already-exists",PERMISSION_DENIED:"permission-denied",UNAUTHENTICATED:"unauthenticated",RESOURCE_EXHAUSTED:"resource-exhausted",FAILED_PRECONDITION:"failed-precondition",ABORTED:"aborted",OUT_OF_RANGE:"out-of-range",UNIMPLEMENTED:"unimplemented",INTERNAL:"internal",UNAVAILABLE:"unavailable",DATA_LOSS:"data-loss"};class A extends Ct{constructor(e,n){super(e,n),this.code=e,this.message=n,this.toString=()=>`${this.name}: [code=${this.code}]: ${this.message}`}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ht{constructor(){this.promise=new Promise((e,n)=>{this.resolve=e,this.reject=n})}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class B0{constructor(e,n){this.user=n,this.type="OAuth",this.headers=new Map,this.headers.set("Authorization",`Bearer ${e}`)}}class _L{getToken(){return Promise.resolve(null)}invalidateToken(){}start(e,n){e.enqueueRetryable(()=>n(lt.UNAUTHENTICATED))}shutdown(){}}class bL{constructor(e){this.token=e,this.changeListener=null}getToken(){return Promise.resolve(this.token)}invalidateToken(){}start(e,n){this.changeListener=n,e.enqueueRetryable(()=>n(this.token.user))}shutdown(){this.changeListener=null}}class IL{constructor(e){this.t=e,this.currentUser=lt.UNAUTHENTICATED,this.i=0,this.forceRefresh=!1,this.auth=null}start(e,n){let r=this.i;const i=c=>this.i!==r?(r=this.i,n(c)):Promise.resolve();let s=new ht;this.o=()=>{this.i++,this.currentUser=this.u(),s.resolve(),s=new ht,e.enqueueRetryable(()=>i(this.currentUser))};const o=()=>{const c=s;e.enqueueRetryable(async()=>{await c.promise,await i(this.currentUser)})},a=c=>{R("FirebaseAuthCredentialsProvider","Auth detected"),this.auth=c,this.auth.addAuthTokenListener(this.o),o()};this.t.onInit(c=>a(c)),setTimeout(()=>{if(!this.auth){const c=this.t.getImmediate({optional:!0});c?a(c):(R("FirebaseAuthCredentialsProvider","Auth not yet detected"),s.resolve(),s=new ht)}},0),o()}getToken(){const e=this.i,n=this.forceRefresh;return this.forceRefresh=!1,this.auth?this.auth.getToken(n).then(r=>this.i!==e?(R("FirebaseAuthCredentialsProvider","getToken aborted due to token change."),this.getToken()):r?(X(typeof r.accessToken=="string"),new B0(r.accessToken,this.currentUser)):null):Promise.resolve(null)}invalidateToken(){this.forceRefresh=!0}shutdown(){this.auth&&this.auth.removeAuthTokenListener(this.o)}u(){const e=this.auth&&this.auth.getUid();return X(e===null||typeof e=="string"),new lt(e)}}class EL{constructor(e,n,r){this.h=e,this.l=n,this.m=r,this.type="FirstParty",this.user=lt.FIRST_PARTY,this.g=new Map}p(){return this.m?this.m():null}get headers(){this.g.set("X-Goog-AuthUser",this.h);const e=this.p();return e&&this.g.set("Authorization",e),this.l&&this.g.set("X-Goog-Iam-Authorization-Token",this.l),this.g}}class TL{constructor(e,n,r){this.h=e,this.l=n,this.m=r}getToken(){return Promise.resolve(new EL(this.h,this.l,this.m))}start(e,n){e.enqueueRetryable(()=>n(lt.FIRST_PARTY))}shutdown(){}invalidateToken(){}}class SL{constructor(e){this.value=e,this.type="AppCheck",this.headers=new Map,e&&e.length>0&&this.headers.set("x-firebase-appcheck",this.value)}}class kL{constructor(e){this.I=e,this.forceRefresh=!1,this.appCheck=null,this.T=null}start(e,n){const r=s=>{s.error!=null&&R("FirebaseAppCheckTokenProvider",`Error getting App Check token; using placeholder token instead. Error: ${s.error.message}`);const o=s.token!==this.T;return this.T=s.token,R("FirebaseAppCheckTokenProvider",`Received ${o?"new":"existing"} token.`),o?n(s.token):Promise.resolve()};this.o=s=>{e.enqueueRetryable(()=>r(s))};const i=s=>{R("FirebaseAppCheckTokenProvider","AppCheck detected"),this.appCheck=s,this.appCheck.addTokenListener(this.o)};this.I.onInit(s=>i(s)),setTimeout(()=>{if(!this.appCheck){const s=this.I.getImmediate({optional:!0});s?i(s):R("FirebaseAppCheckTokenProvider","AppCheck not yet detected")}},0)}getToken(){const e=this.forceRefresh;return this.forceRefresh=!1,this.appCheck?this.appCheck.getToken(e).then(n=>n?(X(typeof n.token=="string"),this.T=n.token,new SL(n.token)):null):Promise.resolve(null)}invalidateToken(){this.forceRefresh=!0}shutdown(){this.appCheck&&this.appCheck.removeTokenListener(this.o)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function AL(t){const e=typeof self<"u"&&(self.crypto||self.msCrypto),n=new Uint8Array(t);if(e&&typeof e.getRandomValues=="function")e.getRandomValues(n);else for(let r=0;r<t;r++)n[r]=Math.floor(256*Math.random());return n}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class $0{static A(){const e="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",n=Math.floor(256/e.length)*e.length;let r="";for(;r.length<20;){const i=AL(40);for(let s=0;s<i.length;++s)r.length<20&&i[s]<n&&(r+=e.charAt(i[s]%e.length))}return r}}function ae(t,e){return t<e?-1:t>e?1:0}function Xs(t,e,n){return t.length===e.length&&t.every((r,i)=>n(r,e[i]))}function q0(t){return t+"\0"}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ue{constructor(e,n){if(this.seconds=e,this.nanoseconds=n,n<0)throw new A(_.INVALID_ARGUMENT,"Timestamp nanoseconds out of range: "+n);if(n>=1e9)throw new A(_.INVALID_ARGUMENT,"Timestamp nanoseconds out of range: "+n);if(e<-62135596800)throw new A(_.INVALID_ARGUMENT,"Timestamp seconds out of range: "+e);if(e>=253402300800)throw new A(_.INVALID_ARGUMENT,"Timestamp seconds out of range: "+e)}static now(){return Ue.fromMillis(Date.now())}static fromDate(e){return Ue.fromMillis(e.getTime())}static fromMillis(e){const n=Math.floor(e/1e3),r=Math.floor(1e6*(e-1e3*n));return new Ue(n,r)}toDate(){return new Date(this.toMillis())}toMillis(){return 1e3*this.seconds+this.nanoseconds/1e6}_compareTo(e){return this.seconds===e.seconds?ae(this.nanoseconds,e.nanoseconds):ae(this.seconds,e.seconds)}isEqual(e){return e.seconds===this.seconds&&e.nanoseconds===this.nanoseconds}toString(){return"Timestamp(seconds="+this.seconds+", nanoseconds="+this.nanoseconds+")"}toJSON(){return{seconds:this.seconds,nanoseconds:this.nanoseconds}}valueOf(){const e=this.seconds- -62135596800;return String(e).padStart(12,"0")+"."+String(this.nanoseconds).padStart(9,"0")}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class J{constructor(e){this.timestamp=e}static fromTimestamp(e){return new J(e)}static min(){return new J(new Ue(0,0))}static max(){return new J(new Ue(253402300799,999999999))}compareTo(e){return this.timestamp._compareTo(e.timestamp)}isEqual(e){return this.timestamp.isEqual(e.timestamp)}toMicroseconds(){return 1e6*this.timestamp.seconds+this.timestamp.nanoseconds/1e3}toString(){return"SnapshotVersion("+this.timestamp.toString()+")"}toTimestamp(){return this.timestamp}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Va{constructor(e,n,r){n===void 0?n=0:n>e.length&&$(),r===void 0?r=e.length-n:r>e.length-n&&$(),this.segments=e,this.offset=n,this.len=r}get length(){return this.len}isEqual(e){return Va.comparator(this,e)===0}child(e){const n=this.segments.slice(this.offset,this.limit());return e instanceof Va?e.forEach(r=>{n.push(r)}):n.push(e),this.construct(n)}limit(){return this.offset+this.length}popFirst(e){return e=e===void 0?1:e,this.construct(this.segments,this.offset+e,this.length-e)}popLast(){return this.construct(this.segments,this.offset,this.length-1)}firstSegment(){return this.segments[this.offset]}lastSegment(){return this.get(this.length-1)}get(e){return this.segments[this.offset+e]}isEmpty(){return this.length===0}isPrefixOf(e){if(e.length<this.length)return!1;for(let n=0;n<this.length;n++)if(this.get(n)!==e.get(n))return!1;return!0}isImmediateParentOf(e){if(this.length+1!==e.length)return!1;for(let n=0;n<this.length;n++)if(this.get(n)!==e.get(n))return!1;return!0}forEach(e){for(let n=this.offset,r=this.limit();n<r;n++)e(this.segments[n])}toArray(){return this.segments.slice(this.offset,this.limit())}static comparator(e,n){const r=Math.min(e.length,n.length);for(let i=0;i<r;i++){const s=e.get(i),o=n.get(i);if(s<o)return-1;if(s>o)return 1}return e.length<n.length?-1:e.length>n.length?1:0}}class me extends Va{construct(e,n,r){return new me(e,n,r)}canonicalString(){return this.toArray().join("/")}toString(){return this.canonicalString()}static fromString(...e){const n=[];for(const r of e){if(r.indexOf("//")>=0)throw new A(_.INVALID_ARGUMENT,`Invalid segment (${r}). Paths must not contain // in them.`);n.push(...r.split("/").filter(i=>i.length>0))}return new me(n)}static emptyPath(){return new me([])}}const CL=/^[_a-zA-Z][_a-zA-Z0-9]*$/;class Xe extends Va{construct(e,n,r){return new Xe(e,n,r)}static isValidIdentifier(e){return CL.test(e)}canonicalString(){return this.toArray().map(e=>(e=e.replace(/\\/g,"\\\\").replace(/`/g,"\\`"),Xe.isValidIdentifier(e)||(e="`"+e+"`"),e)).join(".")}toString(){return this.canonicalString()}isKeyField(){return this.length===1&&this.get(0)==="__name__"}static keyField(){return new Xe(["__name__"])}static fromServerFormat(e){const n=[];let r="",i=0;const s=()=>{if(r.length===0)throw new A(_.INVALID_ARGUMENT,`Invalid field path (${e}). Paths must not be empty, begin with '.', end with '.', or contain '..'`);n.push(r),r=""};let o=!1;for(;i<e.length;){const a=e[i];if(a==="\\"){if(i+1===e.length)throw new A(_.INVALID_ARGUMENT,"Path has trailing escape character: "+e);const c=e[i+1];if(c!=="\\"&&c!=="."&&c!=="`")throw new A(_.INVALID_ARGUMENT,"Path has invalid escape sequence: "+e);r+=c,i+=2}else a==="`"?(o=!o,i++):a!=="."||o?(r+=a,i++):(s(),i++)}if(s(),o)throw new A(_.INVALID_ARGUMENT,"Unterminated ` in path: "+e);return new Xe(n)}static emptyPath(){return new Xe([])}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class L{constructor(e){this.path=e}static fromPath(e){return new L(me.fromString(e))}static fromName(e){return new L(me.fromString(e).popFirst(5))}static empty(){return new L(me.emptyPath())}get collectionGroup(){return this.path.popLast().lastSegment()}hasCollectionId(e){return this.path.length>=2&&this.path.get(this.path.length-2)===e}getCollectionGroup(){return this.path.get(this.path.length-2)}getCollectionPath(){return this.path.popLast()}isEqual(e){return e!==null&&me.comparator(this.path,e.path)===0}toString(){return this.path.toString()}static comparator(e,n){return me.comparator(e.path,n.path)}static isDocumentKey(e){return e.length%2==0}static fromSegments(e){return new L(new me(e.slice()))}}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class j0{constructor(e,n,r,i){this.indexId=e,this.collectionGroup=n,this.fields=r,this.indexState=i}}function df(t){return t.fields.find(e=>e.kind===2)}function wi(t){return t.fields.filter(e=>e.kind!==2)}j0.UNKNOWN_ID=-1;class RL{constructor(e,n){this.fieldPath=e,this.kind=n}}class Zu{constructor(e,n){this.sequenceNumber=e,this.offset=n}static empty(){return new Zu(0,en.min())}}function z0(t,e){const n=t.toTimestamp().seconds,r=t.toTimestamp().nanoseconds+1,i=J.fromTimestamp(r===1e9?new Ue(n+1,0):new Ue(n,r));return new en(i,L.empty(),e)}function H0(t){return new en(t.readTime,t.key,-1)}class en{constructor(e,n,r){this.readTime=e,this.documentKey=n,this.largestBatchId=r}static min(){return new en(J.min(),L.empty(),-1)}static max(){return new en(J.max(),L.empty(),-1)}}function um(t,e){let n=t.readTime.compareTo(e.readTime);return n!==0?n:(n=L.comparator(t.documentKey,e.documentKey),n!==0?n:ae(t.largestBatchId,e.largestBatchId))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const K0="The current tab is not in the required state to perform this operation. It might be necessary to refresh the browser tab.";class W0{constructor(){this.onCommittedListeners=[]}addOnCommittedListener(e){this.onCommittedListeners.push(e)}raiseOnCommittedEvent(){this.onCommittedListeners.forEach(e=>e())}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function oi(t){if(t.code!==_.FAILED_PRECONDITION||t.message!==K0)throw t;R("LocalStore","Unexpectedly lost primary lease")}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class w{constructor(e){this.nextCallback=null,this.catchCallback=null,this.result=void 0,this.error=void 0,this.isDone=!1,this.callbackAttached=!1,e(n=>{this.isDone=!0,this.result=n,this.nextCallback&&this.nextCallback(n)},n=>{this.isDone=!0,this.error=n,this.catchCallback&&this.catchCallback(n)})}catch(e){return this.next(void 0,e)}next(e,n){return this.callbackAttached&&$(),this.callbackAttached=!0,this.isDone?this.error?this.wrapFailure(n,this.error):this.wrapSuccess(e,this.result):new w((r,i)=>{this.nextCallback=s=>{this.wrapSuccess(e,s).next(r,i)},this.catchCallback=s=>{this.wrapFailure(n,s).next(r,i)}})}toPromise(){return new Promise((e,n)=>{this.next(e,n)})}wrapUserFunction(e){try{const n=e();return n instanceof w?n:w.resolve(n)}catch(n){return w.reject(n)}}wrapSuccess(e,n){return e?this.wrapUserFunction(()=>e(n)):w.resolve(n)}wrapFailure(e,n){return e?this.wrapUserFunction(()=>e(n)):w.reject(n)}static resolve(e){return new w((n,r)=>{n(e)})}static reject(e){return new w((n,r)=>{r(e)})}static waitFor(e){return new w((n,r)=>{let i=0,s=0,o=!1;e.forEach(a=>{++i,a.next(()=>{++s,o&&s===i&&n()},c=>r(c))}),o=!0,s===i&&n()})}static or(e){let n=w.resolve(!1);for(const r of e)n=n.next(i=>i?w.resolve(i):r());return n}static forEach(e,n){const r=[];return e.forEach((i,s)=>{r.push(n.call(this,i,s))}),this.waitFor(r)}static mapArray(e,n){return new w((r,i)=>{const s=e.length,o=new Array(s);let a=0;for(let c=0;c<s;c++){const u=c;n(e[u]).next(l=>{o[u]=l,++a,a===s&&r(o)},l=>i(l))}})}static doWhile(e,n){return new w((r,i)=>{const s=()=>{e()===!0?n().next(()=>{s()},i):r()};s()})}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class sh{constructor(e,n){this.action=e,this.transaction=n,this.aborted=!1,this.R=new ht,this.transaction.oncomplete=()=>{this.R.resolve()},this.transaction.onabort=()=>{n.error?this.R.reject(new ua(e,n.error)):this.R.resolve()},this.transaction.onerror=r=>{const i=lm(r.target.error);this.R.reject(new ua(e,i))}}static open(e,n,r,i){try{return new sh(n,e.transaction(i,r))}catch(s){throw new ua(n,s)}}get v(){return this.R.promise}abort(e){e&&this.R.reject(e),this.aborted||(R("SimpleDb","Aborting transaction:",e?e.message:"Client-initiated abort"),this.aborted=!0,this.transaction.abort())}P(){const e=this.transaction;this.aborted||typeof e.commit!="function"||e.commit()}store(e){const n=this.transaction.objectStore(e);return new NL(n)}}class yn{constructor(e,n,r){this.name=e,this.version=n,this.V=r,yn.S(qe())===12.2&&Qe("Firestore persistence suffers from a bug in iOS 12.2 Safari that may cause your app to stop working. See https://stackoverflow.com/q/56496296/110915 for details and a potential workaround.")}static delete(e){return R("SimpleDb","Removing database:",e),Ei(window.indexedDB.deleteDatabase(e)).toPromise()}static D(){if(!ka())return!1;if(yn.C())return!0;const e=qe(),n=yn.S(e),r=0<n&&n<10,i=yn.N(e),s=0<i&&i<4.5;return!(e.indexOf("MSIE ")>0||e.indexOf("Trident/")>0||e.indexOf("Edge/")>0||r||s)}static C(){var e;return typeof process<"u"&&((e=process.env)===null||e===void 0?void 0:e.k)==="YES"}static O(e,n){return e.store(n)}static S(e){const n=e.match(/i(?:phone|pad|pod) os ([\d_]+)/i),r=n?n[1].split("_").slice(0,2).join("."):"-1";return Number(r)}static N(e){const n=e.match(/Android ([\d.]+)/i),r=n?n[1].split(".").slice(0,2).join("."):"-1";return Number(r)}async $(e){return this.db||(R("SimpleDb","Opening database:",this.name),this.db=await new Promise((n,r)=>{const i=indexedDB.open(this.name,this.version);i.onsuccess=s=>{const o=s.target.result;n(o)},i.onblocked=()=>{r(new ua(e,"Cannot upgrade IndexedDB schema while another tab is open. Close all tabs that access Firestore and reload this page to proceed."))},i.onerror=s=>{const o=s.target.error;o.name==="VersionError"?r(new A(_.FAILED_PRECONDITION,"A newer version of the Firestore SDK was previously used and so the persisted data is not compatible with the version of the SDK you are now using. The SDK will operate with persistence disabled. If you need persistence, please re-upgrade to a newer version of the SDK or else clear the persisted IndexedDB data for your app to start fresh.")):o.name==="InvalidStateError"?r(new A(_.FAILED_PRECONDITION,"Unable to open an IndexedDB connection. This could be due to running in a private browsing session on a browser whose private browsing sessions do not support IndexedDB: "+o)):r(new ua(e,o))},i.onupgradeneeded=s=>{R("SimpleDb",'Database "'+this.name+'" requires upgrade from version:',s.oldVersion);const o=s.target.result;this.V.M(o,i.transaction,s.oldVersion,this.version).next(()=>{R("SimpleDb","Database upgrade to version "+this.version+" complete")})}})),this.F&&(this.db.onversionchange=n=>this.F(n)),this.db}B(e){this.F=e,this.db&&(this.db.onversionchange=n=>e(n))}async runTransaction(e,n,r,i){const s=n==="readonly";let o=0;for(;;){++o;try{this.db=await this.$(e);const a=sh.open(this.db,e,s?"readonly":"readwrite",r),c=i(a).next(u=>(a.P(),u)).catch(u=>(a.abort(u),w.reject(u))).toPromise();return c.catch(()=>{}),await a.v,c}catch(a){const c=a,u=c.name!=="FirebaseError"&&o<3;if(R("SimpleDb","Transaction failed with error:",c.message,"Retrying:",u),this.close(),!u)return Promise.reject(c)}}}close(){this.db&&this.db.close(),this.db=void 0}}class xL{constructor(e){this.L=e,this.q=!1,this.U=null}get isDone(){return this.q}get K(){return this.U}set cursor(e){this.L=e}done(){this.q=!0}G(e){this.U=e}delete(){return Ei(this.L.delete())}}class ua extends A{constructor(e,n){super(_.UNAVAILABLE,`IndexedDB transaction '${e}' failed: ${n}`),this.name="IndexedDbTransactionError"}}function ai(t){return t.name==="IndexedDbTransactionError"}class NL{constructor(e){this.store=e}put(e,n){let r;return n!==void 0?(R("SimpleDb","PUT",this.store.name,e,n),r=this.store.put(n,e)):(R("SimpleDb","PUT",this.store.name,"<auto-key>",e),r=this.store.put(e)),Ei(r)}add(e){return R("SimpleDb","ADD",this.store.name,e,e),Ei(this.store.add(e))}get(e){return Ei(this.store.get(e)).next(n=>(n===void 0&&(n=null),R("SimpleDb","GET",this.store.name,e,n),n))}delete(e){return R("SimpleDb","DELETE",this.store.name,e),Ei(this.store.delete(e))}count(){return R("SimpleDb","COUNT",this.store.name),Ei(this.store.count())}j(e,n){const r=this.options(e,n);if(r.index||typeof this.store.getAll!="function"){const i=this.cursor(r),s=[];return this.W(i,(o,a)=>{s.push(a)}).next(()=>s)}{const i=this.store.getAll(r.range);return new w((s,o)=>{i.onerror=a=>{o(a.target.error)},i.onsuccess=a=>{s(a.target.result)}})}}H(e,n){const r=this.store.getAll(e,n===null?void 0:n);return new w((i,s)=>{r.onerror=o=>{s(o.target.error)},r.onsuccess=o=>{i(o.target.result)}})}J(e,n){R("SimpleDb","DELETE ALL",this.store.name);const r=this.options(e,n);r.Y=!1;const i=this.cursor(r);return this.W(i,(s,o,a)=>a.delete())}Z(e,n){let r;n?r=e:(r={},n=e);const i=this.cursor(r);return this.W(i,n)}X(e){const n=this.cursor({});return new w((r,i)=>{n.onerror=s=>{const o=lm(s.target.error);i(o)},n.onsuccess=s=>{const o=s.target.result;o?e(o.primaryKey,o.value).next(a=>{a?o.continue():r()}):r()}})}W(e,n){const r=[];return new w((i,s)=>{e.onerror=o=>{s(o.target.error)},e.onsuccess=o=>{const a=o.target.result;if(!a)return void i();const c=new xL(a),u=n(a.primaryKey,a.value,c);if(u instanceof w){const l=u.catch(h=>(c.done(),w.reject(h)));r.push(l)}c.isDone?i():c.K===null?a.continue():a.continue(c.K)}}).next(()=>w.waitFor(r))}options(e,n){let r;return e!==void 0&&(typeof e=="string"?r=e:n=e),{index:r,range:n}}cursor(e){let n="next";if(e.reverse&&(n="prev"),e.index){const r=this.store.index(e.index);return e.Y?r.openKeyCursor(e.range,n):r.openCursor(e.range,n)}return this.store.openCursor(e.range,n)}}function Ei(t){return new w((e,n)=>{t.onsuccess=r=>{const i=r.target.result;e(i)},t.onerror=r=>{const i=lm(r.target.error);n(i)}})}let wv=!1;function lm(t){const e=yn.S(qe());if(e>=12.2&&e<13){const n="An internal error was encountered in the Indexed Database server";if(t.message.indexOf(n)>=0){const r=new A("internal",`IOS_INDEXEDDB_BUG1: IndexedDb has thrown '${n}'. This is likely due to an unavoidable bug in iOS. See https://stackoverflow.com/q/56496296/110915 for details and a potential workaround.`);return wv||(wv=!0,setTimeout(()=>{throw r},0)),r}}return t}class PL{constructor(e,n){this.asyncQueue=e,this.tt=n,this.task=null}start(){this.et(15e3)}stop(){this.task&&(this.task.cancel(),this.task=null)}get started(){return this.task!==null}et(e){R("IndexBackiller",`Scheduled in ${e}ms`),this.task=this.asyncQueue.enqueueAfterDelay("index_backfill",e,async()=>{this.task=null;try{R("IndexBackiller",`Documents written: ${await this.tt.nt()}`)}catch(n){ai(n)?R("IndexBackiller","Ignoring IndexedDB error during index backfill: ",n):await oi(n)}await this.et(6e4)})}}class DL{constructor(e,n){this.localStore=e,this.persistence=n}async nt(e=50){return this.persistence.runTransaction("Backfill Indexes","readwrite-primary",n=>this.st(n,e))}st(e,n){const r=new Set;let i=n,s=!0;return w.doWhile(()=>s===!0&&i>0,()=>this.localStore.indexManager.getNextCollectionGroupToUpdate(e).next(o=>{if(o!==null&&!r.has(o))return R("IndexBackiller",`Processing collection: ${o}`),this.it(e,o,i).next(a=>{i-=a,r.add(o)});s=!1})).next(()=>n-i)}it(e,n,r){return this.localStore.indexManager.getMinOffsetFromCollectionGroup(e,n).next(i=>this.localStore.localDocuments.getNextDocuments(e,n,i,r).next(s=>{const o=s.changes;return this.localStore.indexManager.updateIndexEntries(e,o).next(()=>this.rt(i,s)).next(a=>(R("IndexBackiller",`Updating offset: ${a}`),this.localStore.indexManager.updateCollectionGroup(e,n,a))).next(()=>o.size)}))}rt(e,n){let r=e;return n.changes.forEach((i,s)=>{const o=H0(s);um(o,r)>0&&(r=o)}),new en(r.readTime,r.documentKey,Math.max(n.batchId,e.largestBatchId))}}/**
 * @license
 * Copyright 2018 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class zt{constructor(e,n){this.previousValue=e,n&&(n.sequenceNumberHandler=r=>this.ot(r),this.ut=r=>n.writeSequenceNumber(r))}ot(e){return this.previousValue=Math.max(e,this.previousValue),this.previousValue}next(){const e=++this.previousValue;return this.ut&&this.ut(e),e}}zt.ct=-1;function _c(t){return t==null}function Ba(t){return t===0&&1/t==-1/0}function G0(t){return typeof t=="number"&&Number.isInteger(t)&&!Ba(t)&&t<=Number.MAX_SAFE_INTEGER&&t>=Number.MIN_SAFE_INTEGER}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Ft(t){let e="";for(let n=0;n<t.length;n++)e.length>0&&(e=_v(e)),e=OL(t.get(n),e);return _v(e)}function OL(t,e){let n=e;const r=t.length;for(let i=0;i<r;i++){const s=t.charAt(i);switch(s){case"\0":n+="";break;case"":n+="";break;default:n+=s}}return n}function _v(t){return t+""}function Mn(t){const e=t.length;if(X(e>=2),e===2)return X(t.charAt(0)===""&&t.charAt(1)===""),me.emptyPath();const n=e-2,r=[];let i="";for(let s=0;s<e;){const o=t.indexOf("",s);switch((o<0||o>n)&&$(),t.charAt(o+1)){case"":const a=t.substring(s,o);let c;i.length===0?c=a:(i+=a,c=i,i=""),r.push(c);break;case"":i+=t.substring(s,o),i+="\0";break;case"":i+=t.substring(s,o+1);break;default:$()}s=o+2}return new me(r)}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const bv=["userId","batchId"];/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Eu(t,e){return[t,Ft(e)]}function Y0(t,e,n){return[t,Ft(e),n]}const LL={},ML=["prefixPath","collectionGroup","readTime","documentId"],FL=["prefixPath","collectionGroup","documentId"],UL=["collectionGroup","readTime","prefixPath","documentId"],VL=["canonicalId","targetId"],BL=["targetId","path"],$L=["path","targetId"],qL=["collectionId","parent"],jL=["indexId","uid"],zL=["uid","sequenceNumber"],HL=["indexId","uid","arrayValue","directionalValue","orderedDocumentKey","documentKey"],KL=["indexId","uid","orderedDocumentKey"],WL=["userId","collectionPath","documentId"],GL=["userId","collectionPath","largestBatchId"],YL=["userId","collectionGroup","largestBatchId"],Q0=["mutationQueues","mutations","documentMutations","remoteDocuments","targets","owner","targetGlobal","targetDocuments","clientMetadata","remoteDocumentGlobal","collectionParents","bundles","namedQueries"],QL=[...Q0,"documentOverlays"],X0=["mutationQueues","mutations","documentMutations","remoteDocumentsV14","targets","owner","targetGlobal","targetDocuments","clientMetadata","remoteDocumentGlobal","collectionParents","bundles","namedQueries","documentOverlays"],J0=X0,XL=[...J0,"indexConfiguration","indexState","indexEntries"];/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ff extends W0{constructor(e,n){super(),this.at=e,this.currentSequenceNumber=n}}function ft(t,e){const n=U(t);return yn.O(n.at,e)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Iv(t){let e=0;for(const n in t)Object.prototype.hasOwnProperty.call(t,n)&&e++;return e}function ls(t,e){for(const n in t)Object.prototype.hasOwnProperty.call(t,n)&&e(n,t[n])}function Z0(t){for(const e in t)if(Object.prototype.hasOwnProperty.call(t,e))return!1;return!0}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class We{constructor(e,n){this.comparator=e,this.root=n||gt.EMPTY}insert(e,n){return new We(this.comparator,this.root.insert(e,n,this.comparator).copy(null,null,gt.BLACK,null,null))}remove(e){return new We(this.comparator,this.root.remove(e,this.comparator).copy(null,null,gt.BLACK,null,null))}get(e){let n=this.root;for(;!n.isEmpty();){const r=this.comparator(e,n.key);if(r===0)return n.value;r<0?n=n.left:r>0&&(n=n.right)}return null}indexOf(e){let n=0,r=this.root;for(;!r.isEmpty();){const i=this.comparator(e,r.key);if(i===0)return n+r.left.size;i<0?r=r.left:(n+=r.left.size+1,r=r.right)}return-1}isEmpty(){return this.root.isEmpty()}get size(){return this.root.size}minKey(){return this.root.minKey()}maxKey(){return this.root.maxKey()}inorderTraversal(e){return this.root.inorderTraversal(e)}forEach(e){this.inorderTraversal((n,r)=>(e(n,r),!1))}toString(){const e=[];return this.inorderTraversal((n,r)=>(e.push(`${n}:${r}`),!1)),`{${e.join(", ")}}`}reverseTraversal(e){return this.root.reverseTraversal(e)}getIterator(){return new Gc(this.root,null,this.comparator,!1)}getIteratorFrom(e){return new Gc(this.root,e,this.comparator,!1)}getReverseIterator(){return new Gc(this.root,null,this.comparator,!0)}getReverseIteratorFrom(e){return new Gc(this.root,e,this.comparator,!0)}}class Gc{constructor(e,n,r,i){this.isReverse=i,this.nodeStack=[];let s=1;for(;!e.isEmpty();)if(s=n?r(e.key,n):1,n&&i&&(s*=-1),s<0)e=this.isReverse?e.left:e.right;else{if(s===0){this.nodeStack.push(e);break}this.nodeStack.push(e),e=this.isReverse?e.right:e.left}}getNext(){let e=this.nodeStack.pop();const n={key:e.key,value:e.value};if(this.isReverse)for(e=e.left;!e.isEmpty();)this.nodeStack.push(e),e=e.right;else for(e=e.right;!e.isEmpty();)this.nodeStack.push(e),e=e.left;return n}hasNext(){return this.nodeStack.length>0}peek(){if(this.nodeStack.length===0)return null;const e=this.nodeStack[this.nodeStack.length-1];return{key:e.key,value:e.value}}}class gt{constructor(e,n,r,i,s){this.key=e,this.value=n,this.color=r!=null?r:gt.RED,this.left=i!=null?i:gt.EMPTY,this.right=s!=null?s:gt.EMPTY,this.size=this.left.size+1+this.right.size}copy(e,n,r,i,s){return new gt(e!=null?e:this.key,n!=null?n:this.value,r!=null?r:this.color,i!=null?i:this.left,s!=null?s:this.right)}isEmpty(){return!1}inorderTraversal(e){return this.left.inorderTraversal(e)||e(this.key,this.value)||this.right.inorderTraversal(e)}reverseTraversal(e){return this.right.reverseTraversal(e)||e(this.key,this.value)||this.left.reverseTraversal(e)}min(){return this.left.isEmpty()?this:this.left.min()}minKey(){return this.min().key}maxKey(){return this.right.isEmpty()?this.key:this.right.maxKey()}insert(e,n,r){let i=this;const s=r(e,i.key);return i=s<0?i.copy(null,null,null,i.left.insert(e,n,r),null):s===0?i.copy(null,n,null,null,null):i.copy(null,null,null,null,i.right.insert(e,n,r)),i.fixUp()}removeMin(){if(this.left.isEmpty())return gt.EMPTY;let e=this;return e.left.isRed()||e.left.left.isRed()||(e=e.moveRedLeft()),e=e.copy(null,null,null,e.left.removeMin(),null),e.fixUp()}remove(e,n){let r,i=this;if(n(e,i.key)<0)i.left.isEmpty()||i.left.isRed()||i.left.left.isRed()||(i=i.moveRedLeft()),i=i.copy(null,null,null,i.left.remove(e,n),null);else{if(i.left.isRed()&&(i=i.rotateRight()),i.right.isEmpty()||i.right.isRed()||i.right.left.isRed()||(i=i.moveRedRight()),n(e,i.key)===0){if(i.right.isEmpty())return gt.EMPTY;r=i.right.min(),i=i.copy(r.key,r.value,null,null,i.right.removeMin())}i=i.copy(null,null,null,null,i.right.remove(e,n))}return i.fixUp()}isRed(){return this.color}fixUp(){let e=this;return e.right.isRed()&&!e.left.isRed()&&(e=e.rotateLeft()),e.left.isRed()&&e.left.left.isRed()&&(e=e.rotateRight()),e.left.isRed()&&e.right.isRed()&&(e=e.colorFlip()),e}moveRedLeft(){let e=this.colorFlip();return e.right.left.isRed()&&(e=e.copy(null,null,null,null,e.right.rotateRight()),e=e.rotateLeft(),e=e.colorFlip()),e}moveRedRight(){let e=this.colorFlip();return e.left.left.isRed()&&(e=e.rotateRight(),e=e.colorFlip()),e}rotateLeft(){const e=this.copy(null,null,gt.RED,null,this.right.left);return this.right.copy(null,null,this.color,e,null)}rotateRight(){const e=this.copy(null,null,gt.RED,this.left.right,null);return this.left.copy(null,null,this.color,null,e)}colorFlip(){const e=this.left.copy(null,null,!this.left.color,null,null),n=this.right.copy(null,null,!this.right.color,null,null);return this.copy(null,null,!this.color,e,n)}checkMaxDepth(){const e=this.check();return Math.pow(2,e)<=this.size+1}check(){if(this.isRed()&&this.left.isRed()||this.right.isRed())throw $();const e=this.left.check();if(e!==this.right.check())throw $();return e+(this.isRed()?0:1)}}gt.EMPTY=null,gt.RED=!0,gt.BLACK=!1;gt.EMPTY=new class{constructor(){this.size=0}get key(){throw $()}get value(){throw $()}get color(){throw $()}get left(){throw $()}get right(){throw $()}copy(t,e,n,r,i){return this}insert(t,e,n){return new gt(t,e)}remove(t,e){return this}isEmpty(){return!0}inorderTraversal(t){return!1}reverseTraversal(t){return!1}minKey(){return null}maxKey(){return null}isRed(){return!1}checkMaxDepth(){return!0}check(){return 0}};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Se{constructor(e){this.comparator=e,this.data=new We(this.comparator)}has(e){return this.data.get(e)!==null}first(){return this.data.minKey()}last(){return this.data.maxKey()}get size(){return this.data.size}indexOf(e){return this.data.indexOf(e)}forEach(e){this.data.inorderTraversal((n,r)=>(e(n),!1))}forEachInRange(e,n){const r=this.data.getIteratorFrom(e[0]);for(;r.hasNext();){const i=r.getNext();if(this.comparator(i.key,e[1])>=0)return;n(i.key)}}forEachWhile(e,n){let r;for(r=n!==void 0?this.data.getIteratorFrom(n):this.data.getIterator();r.hasNext();)if(!e(r.getNext().key))return}firstAfterOrEqual(e){const n=this.data.getIteratorFrom(e);return n.hasNext()?n.getNext().key:null}getIterator(){return new Ev(this.data.getIterator())}getIteratorFrom(e){return new Ev(this.data.getIteratorFrom(e))}add(e){return this.copy(this.data.remove(e).insert(e,!0))}delete(e){return this.has(e)?this.copy(this.data.remove(e)):this}isEmpty(){return this.data.isEmpty()}unionWith(e){let n=this;return n.size<e.size&&(n=e,e=this),e.forEach(r=>{n=n.add(r)}),n}isEqual(e){if(!(e instanceof Se)||this.size!==e.size)return!1;const n=this.data.getIterator(),r=e.data.getIterator();for(;n.hasNext();){const i=n.getNext().key,s=r.getNext().key;if(this.comparator(i,s)!==0)return!1}return!0}toArray(){const e=[];return this.forEach(n=>{e.push(n)}),e}toString(){const e=[];return this.forEach(n=>e.push(n)),"SortedSet("+e.toString()+")"}copy(e){const n=new Se(this.comparator);return n.data=e,n}}class Ev{constructor(e){this.iter=e}getNext(){return this.iter.getNext().key}hasNext(){return this.iter.hasNext()}}function ws(t){return t.hasNext()?t.getNext():void 0}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ht{constructor(e){this.fields=e,e.sort(Xe.comparator)}static empty(){return new Ht([])}unionWith(e){let n=new Se(Xe.comparator);for(const r of this.fields)n=n.add(r);for(const r of e)n=n.add(r);return new Ht(n.toArray())}covers(e){for(const n of this.fields)if(n.isPrefixOf(e))return!0;return!1}isEqual(e){return Xs(this.fields,e.fields,(n,r)=>n.isEqual(r))}}/**
 * @license
 * Copyright 2023 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class JL extends Error{constructor(){super(...arguments),this.name="Base64DecodeError"}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function ZL(){return typeof atob<"u"}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ot{constructor(e){this.binaryString=e}static fromBase64String(e){const n=function(r){try{return atob(r)}catch(i){throw typeof DOMException<"u"&&i instanceof DOMException?new JL("Invalid base64 string: "+i):i}}(e);return new ot(n)}static fromUint8Array(e){const n=function(r){let i="";for(let s=0;s<r.length;++s)i+=String.fromCharCode(r[s]);return i}(e);return new ot(n)}[Symbol.iterator](){let e=0;return{next:()=>e<this.binaryString.length?{value:this.binaryString.charCodeAt(e++),done:!1}:{value:void 0,done:!0}}}toBase64(){return e=this.binaryString,btoa(e);var e}toUint8Array(){return function(e){const n=new Uint8Array(e.length);for(let r=0;r<e.length;r++)n[r]=e.charCodeAt(r);return n}(this.binaryString)}approximateByteSize(){return 2*this.binaryString.length}compareTo(e){return ae(this.binaryString,e.binaryString)}isEqual(e){return this.binaryString===e.binaryString}}ot.EMPTY_BYTE_STRING=new ot("");const eM=new RegExp(/^\d{4}-\d\d-\d\dT\d\d:\d\d:\d\d(?:\.(\d+))?Z$/);function Wr(t){if(X(!!t),typeof t=="string"){let e=0;const n=eM.exec(t);if(X(!!n),n[1]){let i=n[1];i=(i+"000000000").substr(0,9),e=Number(i)}const r=new Date(t);return{seconds:Math.floor(r.getTime()/1e3),nanos:e}}return{seconds:ze(t.seconds),nanos:ze(t.nanos)}}function ze(t){return typeof t=="number"?t:typeof t=="string"?Number(t):0}function Wi(t){return typeof t=="string"?ot.fromBase64String(t):ot.fromUint8Array(t)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function hm(t){var e,n;return((n=(((e=t==null?void 0:t.mapValue)===null||e===void 0?void 0:e.fields)||{}).__type__)===null||n===void 0?void 0:n.stringValue)==="server_timestamp"}function eE(t){const e=t.mapValue.fields.__previous_value__;return hm(e)?eE(e):e}function $a(t){const e=Wr(t.mapValue.fields.__local_write_time__.timestampValue);return new Ue(e.seconds,e.nanos)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class tM{constructor(e,n,r,i,s,o,a,c){this.databaseId=e,this.appId=n,this.persistenceKey=r,this.host=i,this.ssl=s,this.forceLongPolling=o,this.autoDetectLongPolling=a,this.useFetchStreams=c}}class Gr{constructor(e,n){this.projectId=e,this.database=n||"(default)"}static empty(){return new Gr("","")}get isDefaultDatabase(){return this.database==="(default)"}isEqual(e){return e instanceof Gr&&e.projectId===this.projectId&&e.database===this.database}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Mr={mapValue:{fields:{__type__:{stringValue:"__max__"}}}},Tu={nullValue:"NULL_VALUE"};function Gi(t){return"nullValue"in t?0:"booleanValue"in t?1:"integerValue"in t||"doubleValue"in t?2:"timestampValue"in t?3:"stringValue"in t?5:"bytesValue"in t?6:"referenceValue"in t?7:"geoPointValue"in t?8:"arrayValue"in t?9:"mapValue"in t?hm(t)?4:tE(t)?9007199254740991:10:$()}function Hn(t,e){if(t===e)return!0;const n=Gi(t);if(n!==Gi(e))return!1;switch(n){case 0:case 9007199254740991:return!0;case 1:return t.booleanValue===e.booleanValue;case 4:return $a(t).isEqual($a(e));case 3:return function(r,i){if(typeof r.timestampValue=="string"&&typeof i.timestampValue=="string"&&r.timestampValue.length===i.timestampValue.length)return r.timestampValue===i.timestampValue;const s=Wr(r.timestampValue),o=Wr(i.timestampValue);return s.seconds===o.seconds&&s.nanos===o.nanos}(t,e);case 5:return t.stringValue===e.stringValue;case 6:return function(r,i){return Wi(r.bytesValue).isEqual(Wi(i.bytesValue))}(t,e);case 7:return t.referenceValue===e.referenceValue;case 8:return function(r,i){return ze(r.geoPointValue.latitude)===ze(i.geoPointValue.latitude)&&ze(r.geoPointValue.longitude)===ze(i.geoPointValue.longitude)}(t,e);case 2:return function(r,i){if("integerValue"in r&&"integerValue"in i)return ze(r.integerValue)===ze(i.integerValue);if("doubleValue"in r&&"doubleValue"in i){const s=ze(r.doubleValue),o=ze(i.doubleValue);return s===o?Ba(s)===Ba(o):isNaN(s)&&isNaN(o)}return!1}(t,e);case 9:return Xs(t.arrayValue.values||[],e.arrayValue.values||[],Hn);case 10:return function(r,i){const s=r.mapValue.fields||{},o=i.mapValue.fields||{};if(Iv(s)!==Iv(o))return!1;for(const a in s)if(s.hasOwnProperty(a)&&(o[a]===void 0||!Hn(s[a],o[a])))return!1;return!0}(t,e);default:return $()}}function qa(t,e){return(t.values||[]).find(n=>Hn(n,e))!==void 0}function Yr(t,e){if(t===e)return 0;const n=Gi(t),r=Gi(e);if(n!==r)return ae(n,r);switch(n){case 0:case 9007199254740991:return 0;case 1:return ae(t.booleanValue,e.booleanValue);case 2:return function(i,s){const o=ze(i.integerValue||i.doubleValue),a=ze(s.integerValue||s.doubleValue);return o<a?-1:o>a?1:o===a?0:isNaN(o)?isNaN(a)?0:-1:1}(t,e);case 3:return Tv(t.timestampValue,e.timestampValue);case 4:return Tv($a(t),$a(e));case 5:return ae(t.stringValue,e.stringValue);case 6:return function(i,s){const o=Wi(i),a=Wi(s);return o.compareTo(a)}(t.bytesValue,e.bytesValue);case 7:return function(i,s){const o=i.split("/"),a=s.split("/");for(let c=0;c<o.length&&c<a.length;c++){const u=ae(o[c],a[c]);if(u!==0)return u}return ae(o.length,a.length)}(t.referenceValue,e.referenceValue);case 8:return function(i,s){const o=ae(ze(i.latitude),ze(s.latitude));return o!==0?o:ae(ze(i.longitude),ze(s.longitude))}(t.geoPointValue,e.geoPointValue);case 9:return function(i,s){const o=i.values||[],a=s.values||[];for(let c=0;c<o.length&&c<a.length;++c){const u=Yr(o[c],a[c]);if(u)return u}return ae(o.length,a.length)}(t.arrayValue,e.arrayValue);case 10:return function(i,s){if(i===Mr.mapValue&&s===Mr.mapValue)return 0;if(i===Mr.mapValue)return 1;if(s===Mr.mapValue)return-1;const o=i.fields||{},a=Object.keys(o),c=s.fields||{},u=Object.keys(c);a.sort(),u.sort();for(let l=0;l<a.length&&l<u.length;++l){const h=ae(a[l],u[l]);if(h!==0)return h;const d=Yr(o[a[l]],c[u[l]]);if(d!==0)return d}return ae(a.length,u.length)}(t.mapValue,e.mapValue);default:throw $()}}function Tv(t,e){if(typeof t=="string"&&typeof e=="string"&&t.length===e.length)return ae(t,e);const n=Wr(t),r=Wr(e),i=ae(n.seconds,r.seconds);return i!==0?i:ae(n.nanos,r.nanos)}function Js(t){return pf(t)}function pf(t){return"nullValue"in t?"null":"booleanValue"in t?""+t.booleanValue:"integerValue"in t?""+t.integerValue:"doubleValue"in t?""+t.doubleValue:"timestampValue"in t?function(r){const i=Wr(r);return`time(${i.seconds},${i.nanos})`}(t.timestampValue):"stringValue"in t?t.stringValue:"bytesValue"in t?Wi(t.bytesValue).toBase64():"referenceValue"in t?(n=t.referenceValue,L.fromName(n).toString()):"geoPointValue"in t?`geo(${(e=t.geoPointValue).latitude},${e.longitude})`:"arrayValue"in t?function(r){let i="[",s=!0;for(const o of r.values||[])s?s=!1:i+=",",i+=pf(o);return i+"]"}(t.arrayValue):"mapValue"in t?function(r){const i=Object.keys(r.fields||{}).sort();let s="{",o=!0;for(const a of i)o?o=!1:s+=",",s+=`${a}:${pf(r.fields[a])}`;return s+"}"}(t.mapValue):$();var e,n}function Yi(t,e){return{referenceValue:`projects/${t.projectId}/databases/${t.database}/documents/${e.path.canonicalString()}`}}function mf(t){return!!t&&"integerValue"in t}function ja(t){return!!t&&"arrayValue"in t}function Sv(t){return!!t&&"nullValue"in t}function kv(t){return!!t&&"doubleValue"in t&&isNaN(Number(t.doubleValue))}function Su(t){return!!t&&"mapValue"in t}function la(t){if(t.geoPointValue)return{geoPointValue:Object.assign({},t.geoPointValue)};if(t.timestampValue&&typeof t.timestampValue=="object")return{timestampValue:Object.assign({},t.timestampValue)};if(t.mapValue){const e={mapValue:{fields:{}}};return ls(t.mapValue.fields,(n,r)=>e.mapValue.fields[n]=la(r)),e}if(t.arrayValue){const e={arrayValue:{values:[]}};for(let n=0;n<(t.arrayValue.values||[]).length;++n)e.arrayValue.values[n]=la(t.arrayValue.values[n]);return e}return Object.assign({},t)}function tE(t){return(((t.mapValue||{}).fields||{}).__type__||{}).stringValue==="__max__"}function nM(t){return"nullValue"in t?Tu:"booleanValue"in t?{booleanValue:!1}:"integerValue"in t||"doubleValue"in t?{doubleValue:NaN}:"timestampValue"in t?{timestampValue:{seconds:Number.MIN_SAFE_INTEGER}}:"stringValue"in t?{stringValue:""}:"bytesValue"in t?{bytesValue:""}:"referenceValue"in t?Yi(Gr.empty(),L.empty()):"geoPointValue"in t?{geoPointValue:{latitude:-90,longitude:-180}}:"arrayValue"in t?{arrayValue:{}}:"mapValue"in t?{mapValue:{}}:$()}function rM(t){return"nullValue"in t?{booleanValue:!1}:"booleanValue"in t?{doubleValue:NaN}:"integerValue"in t||"doubleValue"in t?{timestampValue:{seconds:Number.MIN_SAFE_INTEGER}}:"timestampValue"in t?{stringValue:""}:"stringValue"in t?{bytesValue:""}:"bytesValue"in t?Yi(Gr.empty(),L.empty()):"referenceValue"in t?{geoPointValue:{latitude:-90,longitude:-180}}:"geoPointValue"in t?{arrayValue:{}}:"arrayValue"in t?{mapValue:{}}:"mapValue"in t?Mr:$()}function Av(t,e){const n=Yr(t.value,e.value);return n!==0?n:t.inclusive&&!e.inclusive?-1:!t.inclusive&&e.inclusive?1:0}function Cv(t,e){const n=Yr(t.value,e.value);return n!==0?n:t.inclusive&&!e.inclusive?1:!t.inclusive&&e.inclusive?-1:0}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class yt{constructor(e){this.value=e}static empty(){return new yt({mapValue:{}})}field(e){if(e.isEmpty())return this.value;{let n=this.value;for(let r=0;r<e.length-1;++r)if(n=(n.mapValue.fields||{})[e.get(r)],!Su(n))return null;return n=(n.mapValue.fields||{})[e.lastSegment()],n||null}}set(e,n){this.getFieldsMap(e.popLast())[e.lastSegment()]=la(n)}setAll(e){let n=Xe.emptyPath(),r={},i=[];e.forEach((o,a)=>{if(!n.isImmediateParentOf(a)){const c=this.getFieldsMap(n);this.applyChanges(c,r,i),r={},i=[],n=a.popLast()}o?r[a.lastSegment()]=la(o):i.push(a.lastSegment())});const s=this.getFieldsMap(n);this.applyChanges(s,r,i)}delete(e){const n=this.field(e.popLast());Su(n)&&n.mapValue.fields&&delete n.mapValue.fields[e.lastSegment()]}isEqual(e){return Hn(this.value,e.value)}getFieldsMap(e){let n=this.value;n.mapValue.fields||(n.mapValue={fields:{}});for(let r=0;r<e.length;++r){let i=n.mapValue.fields[e.get(r)];Su(i)&&i.mapValue.fields||(i={mapValue:{fields:{}}},n.mapValue.fields[e.get(r)]=i),n=i}return n.mapValue.fields}applyChanges(e,n,r){ls(n,(i,s)=>e[i]=s);for(const i of r)delete e[i]}clone(){return new yt(la(this.value))}}function nE(t){const e=[];return ls(t.fields,(n,r)=>{const i=new Xe([n]);if(Su(r)){const s=nE(r.mapValue).fields;if(s.length===0)e.push(i);else for(const o of s)e.push(i.child(o))}else e.push(i)}),new Ht(e)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ne{constructor(e,n,r,i,s,o,a){this.key=e,this.documentType=n,this.version=r,this.readTime=i,this.createTime=s,this.data=o,this.documentState=a}static newInvalidDocument(e){return new Ne(e,0,J.min(),J.min(),J.min(),yt.empty(),0)}static newFoundDocument(e,n,r,i){return new Ne(e,1,n,J.min(),r,i,0)}static newNoDocument(e,n){return new Ne(e,2,n,J.min(),J.min(),yt.empty(),0)}static newUnknownDocument(e,n){return new Ne(e,3,n,J.min(),J.min(),yt.empty(),2)}convertToFoundDocument(e,n){return!this.createTime.isEqual(J.min())||this.documentType!==2&&this.documentType!==0||(this.createTime=e),this.version=e,this.documentType=1,this.data=n,this.documentState=0,this}convertToNoDocument(e){return this.version=e,this.documentType=2,this.data=yt.empty(),this.documentState=0,this}convertToUnknownDocument(e){return this.version=e,this.documentType=3,this.data=yt.empty(),this.documentState=2,this}setHasCommittedMutations(){return this.documentState=2,this}setHasLocalMutations(){return this.documentState=1,this.version=J.min(),this}setReadTime(e){return this.readTime=e,this}get hasLocalMutations(){return this.documentState===1}get hasCommittedMutations(){return this.documentState===2}get hasPendingWrites(){return this.hasLocalMutations||this.hasCommittedMutations}isValidDocument(){return this.documentType!==0}isFoundDocument(){return this.documentType===1}isNoDocument(){return this.documentType===2}isUnknownDocument(){return this.documentType===3}isEqual(e){return e instanceof Ne&&this.key.isEqual(e.key)&&this.version.isEqual(e.version)&&this.documentType===e.documentType&&this.documentState===e.documentState&&this.data.isEqual(e.data)}mutableCopy(){return new Ne(this.key,this.documentType,this.version,this.readTime,this.createTime,this.data.clone(),this.documentState)}toString(){return`Document(${this.key}, ${this.version}, ${JSON.stringify(this.data.value)}, {createTime: ${this.createTime}}), {documentType: ${this.documentType}}), {documentState: ${this.documentState}})`}}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Qr{constructor(e,n){this.position=e,this.inclusive=n}}function Rv(t,e,n){let r=0;for(let i=0;i<t.position.length;i++){const s=e[i],o=t.position[i];if(s.field.isKeyField()?r=L.comparator(L.fromName(o.referenceValue),n.key):r=Yr(o,n.data.field(s.field)),s.dir==="desc"&&(r*=-1),r!==0)break}return r}function xv(t,e){if(t===null)return e===null;if(e===null||t.inclusive!==e.inclusive||t.position.length!==e.position.length)return!1;for(let n=0;n<t.position.length;n++)if(!Hn(t.position[n],e.position[n]))return!1;return!0}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Bs{constructor(e,n="asc"){this.field=e,this.dir=n}}function iM(t,e){return t.dir===e.dir&&t.field.isEqual(e.field)}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class rE{}class de extends rE{constructor(e,n,r){super(),this.field=e,this.op=n,this.value=r}static create(e,n,r){return e.isKeyField()?n==="in"||n==="not-in"?this.createKeyFieldInFilter(e,n,r):new sM(e,n,r):n==="array-contains"?new cM(e,r):n==="in"?new uE(e,r):n==="not-in"?new uM(e,r):n==="array-contains-any"?new lM(e,r):new de(e,n,r)}static createKeyFieldInFilter(e,n,r){return n==="in"?new oM(e,r):new aM(e,r)}matches(e){const n=e.data.field(this.field);return this.op==="!="?n!==null&&this.matchesComparison(Yr(n,this.value)):n!==null&&Gi(this.value)===Gi(n)&&this.matchesComparison(Yr(n,this.value))}matchesComparison(e){switch(this.op){case"<":return e<0;case"<=":return e<=0;case"==":return e===0;case"!=":return e!==0;case">":return e>0;case">=":return e>=0;default:return $()}}isInequality(){return["<","<=",">",">=","!=","not-in"].indexOf(this.op)>=0}getFlattenedFilters(){return[this]}getFilters(){return[this]}getFirstInequalityField(){return this.isInequality()?this.field:null}}class Ie extends rE{constructor(e,n){super(),this.filters=e,this.op=n,this.ht=null}static create(e,n){return new Ie(e,n)}matches(e){return Zs(this)?this.filters.find(n=>!n.matches(e))===void 0:this.filters.find(n=>n.matches(e))!==void 0}getFlattenedFilters(){return this.ht!==null||(this.ht=this.filters.reduce((e,n)=>e.concat(n.getFlattenedFilters()),[])),this.ht}getFilters(){return Object.assign([],this.filters)}getFirstInequalityField(){const e=this.lt(n=>n.isInequality());return e!==null?e.field:null}lt(e){for(const n of this.getFlattenedFilters())if(e(n))return n;return null}}function Zs(t){return t.op==="and"}function gf(t){return t.op==="or"}function dm(t){return iE(t)&&Zs(t)}function iE(t){for(const e of t.filters)if(e instanceof Ie)return!1;return!0}function yf(t){if(t instanceof de)return t.field.canonicalString()+t.op.toString()+Js(t.value);if(dm(t))return t.filters.map(e=>yf(e)).join(",");{const e=t.filters.map(n=>yf(n)).join(",");return`${t.op}(${e})`}}function sE(t,e){return t instanceof de?function(n,r){return r instanceof de&&n.op===r.op&&n.field.isEqual(r.field)&&Hn(n.value,r.value)}(t,e):t instanceof Ie?function(n,r){return r instanceof Ie&&n.op===r.op&&n.filters.length===r.filters.length?n.filters.reduce((i,s,o)=>i&&sE(s,r.filters[o]),!0):!1}(t,e):void $()}function oE(t,e){const n=t.filters.concat(e);return Ie.create(n,t.op)}function aE(t){return t instanceof de?function(e){return`${e.field.canonicalString()} ${e.op} ${Js(e.value)}`}(t):t instanceof Ie?function(e){return e.op.toString()+" {"+e.getFilters().map(aE).join(" ,")+"}"}(t):"Filter"}class sM extends de{constructor(e,n,r){super(e,n,r),this.key=L.fromName(r.referenceValue)}matches(e){const n=L.comparator(e.key,this.key);return this.matchesComparison(n)}}class oM extends de{constructor(e,n){super(e,"in",n),this.keys=cE("in",n)}matches(e){return this.keys.some(n=>n.isEqual(e.key))}}class aM extends de{constructor(e,n){super(e,"not-in",n),this.keys=cE("not-in",n)}matches(e){return!this.keys.some(n=>n.isEqual(e.key))}}function cE(t,e){var n;return(((n=e.arrayValue)===null||n===void 0?void 0:n.values)||[]).map(r=>L.fromName(r.referenceValue))}class cM extends de{constructor(e,n){super(e,"array-contains",n)}matches(e){const n=e.data.field(this.field);return ja(n)&&qa(n.arrayValue,this.value)}}class uE extends de{constructor(e,n){super(e,"in",n)}matches(e){const n=e.data.field(this.field);return n!==null&&qa(this.value.arrayValue,n)}}class uM extends de{constructor(e,n){super(e,"not-in",n)}matches(e){if(qa(this.value.arrayValue,{nullValue:"NULL_VALUE"}))return!1;const n=e.data.field(this.field);return n!==null&&!qa(this.value.arrayValue,n)}}class lM extends de{constructor(e,n){super(e,"array-contains-any",n)}matches(e){const n=e.data.field(this.field);return!(!ja(n)||!n.arrayValue.values)&&n.arrayValue.values.some(r=>qa(this.value.arrayValue,r))}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class hM{constructor(e,n=null,r=[],i=[],s=null,o=null,a=null){this.path=e,this.collectionGroup=n,this.orderBy=r,this.filters=i,this.limit=s,this.startAt=o,this.endAt=a,this.ft=null}}function vf(t,e=null,n=[],r=[],i=null,s=null,o=null){return new hM(t,e,n,r,i,s,o)}function Qi(t){const e=U(t);if(e.ft===null){let n=e.path.canonicalString();e.collectionGroup!==null&&(n+="|cg:"+e.collectionGroup),n+="|f:",n+=e.filters.map(r=>yf(r)).join(","),n+="|ob:",n+=e.orderBy.map(r=>function(i){return i.field.canonicalString()+i.dir}(r)).join(","),_c(e.limit)||(n+="|l:",n+=e.limit),e.startAt&&(n+="|lb:",n+=e.startAt.inclusive?"b:":"a:",n+=e.startAt.position.map(r=>Js(r)).join(",")),e.endAt&&(n+="|ub:",n+=e.endAt.inclusive?"a:":"b:",n+=e.endAt.position.map(r=>Js(r)).join(",")),e.ft=n}return e.ft}function bc(t,e){if(t.limit!==e.limit||t.orderBy.length!==e.orderBy.length)return!1;for(let n=0;n<t.orderBy.length;n++)if(!iM(t.orderBy[n],e.orderBy[n]))return!1;if(t.filters.length!==e.filters.length)return!1;for(let n=0;n<t.filters.length;n++)if(!sE(t.filters[n],e.filters[n]))return!1;return t.collectionGroup===e.collectionGroup&&!!t.path.isEqual(e.path)&&!!xv(t.startAt,e.startAt)&&xv(t.endAt,e.endAt)}function el(t){return L.isDocumentKey(t.path)&&t.collectionGroup===null&&t.filters.length===0}function tl(t,e){return t.filters.filter(n=>n instanceof de&&n.field.isEqual(e))}function Nv(t,e,n){let r=Tu,i=!0;for(const s of tl(t,e)){let o=Tu,a=!0;switch(s.op){case"<":case"<=":o=nM(s.value);break;case"==":case"in":case">=":o=s.value;break;case">":o=s.value,a=!1;break;case"!=":case"not-in":o=Tu}Av({value:r,inclusive:i},{value:o,inclusive:a})<0&&(r=o,i=a)}if(n!==null){for(let s=0;s<t.orderBy.length;++s)if(t.orderBy[s].field.isEqual(e)){const o=n.position[s];Av({value:r,inclusive:i},{value:o,inclusive:n.inclusive})<0&&(r=o,i=n.inclusive);break}}return{value:r,inclusive:i}}function Pv(t,e,n){let r=Mr,i=!0;for(const s of tl(t,e)){let o=Mr,a=!0;switch(s.op){case">=":case">":o=rM(s.value),a=!1;break;case"==":case"in":case"<=":o=s.value;break;case"<":o=s.value,a=!1;break;case"!=":case"not-in":o=Mr}Cv({value:r,inclusive:i},{value:o,inclusive:a})>0&&(r=o,i=a)}if(n!==null){for(let s=0;s<t.orderBy.length;++s)if(t.orderBy[s].field.isEqual(e)){const o=n.position[s];Cv({value:r,inclusive:i},{value:o,inclusive:n.inclusive})>0&&(r=o,i=n.inclusive);break}}return{value:r,inclusive:i}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class mr{constructor(e,n=null,r=[],i=[],s=null,o="F",a=null,c=null){this.path=e,this.collectionGroup=n,this.explicitOrderBy=r,this.filters=i,this.limit=s,this.limitType=o,this.startAt=a,this.endAt=c,this.dt=null,this.wt=null,this.startAt,this.endAt}}function lE(t,e,n,r,i,s,o,a){return new mr(t,e,n,r,i,s,o,a)}function Io(t){return new mr(t)}function Dv(t){return t.filters.length===0&&t.limit===null&&t.startAt==null&&t.endAt==null&&(t.explicitOrderBy.length===0||t.explicitOrderBy.length===1&&t.explicitOrderBy[0].field.isKeyField())}function fm(t){return t.explicitOrderBy.length>0?t.explicitOrderBy[0].field:null}function oh(t){for(const e of t.filters){const n=e.getFirstInequalityField();if(n!==null)return n}return null}function pm(t){return t.collectionGroup!==null}function qi(t){const e=U(t);if(e.dt===null){e.dt=[];const n=oh(e),r=fm(e);if(n!==null&&r===null)n.isKeyField()||e.dt.push(new Bs(n)),e.dt.push(new Bs(Xe.keyField(),"asc"));else{let i=!1;for(const s of e.explicitOrderBy)e.dt.push(s),s.field.isKeyField()&&(i=!0);if(!i){const s=e.explicitOrderBy.length>0?e.explicitOrderBy[e.explicitOrderBy.length-1].dir:"asc";e.dt.push(new Bs(Xe.keyField(),s))}}}return e.dt}function Gt(t){const e=U(t);if(!e.wt)if(e.limitType==="F")e.wt=vf(e.path,e.collectionGroup,qi(e),e.filters,e.limit,e.startAt,e.endAt);else{const n=[];for(const s of qi(e)){const o=s.dir==="desc"?"asc":"desc";n.push(new Bs(s.field,o))}const r=e.endAt?new Qr(e.endAt.position,e.endAt.inclusive):null,i=e.startAt?new Qr(e.startAt.position,e.startAt.inclusive):null;e.wt=vf(e.path,e.collectionGroup,n,e.filters,e.limit,r,i)}return e.wt}function wf(t,e){e.getFirstInequalityField(),oh(t);const n=t.filters.concat([e]);return new mr(t.path,t.collectionGroup,t.explicitOrderBy.slice(),n,t.limit,t.limitType,t.startAt,t.endAt)}function nl(t,e,n){return new mr(t.path,t.collectionGroup,t.explicitOrderBy.slice(),t.filters.slice(),e,n,t.startAt,t.endAt)}function Ic(t,e){return bc(Gt(t),Gt(e))&&t.limitType===e.limitType}function hE(t){return`${Qi(Gt(t))}|lt:${t.limitType}`}function _f(t){return`Query(target=${function(e){let n=e.path.canonicalString();return e.collectionGroup!==null&&(n+=" collectionGroup="+e.collectionGroup),e.filters.length>0&&(n+=`, filters: [${e.filters.map(r=>aE(r)).join(", ")}]`),_c(e.limit)||(n+=", limit: "+e.limit),e.orderBy.length>0&&(n+=`, orderBy: [${e.orderBy.map(r=>function(i){return`${i.field.canonicalString()} (${i.dir})`}(r)).join(", ")}]`),e.startAt&&(n+=", startAt: ",n+=e.startAt.inclusive?"b:":"a:",n+=e.startAt.position.map(r=>Js(r)).join(",")),e.endAt&&(n+=", endAt: ",n+=e.endAt.inclusive?"a:":"b:",n+=e.endAt.position.map(r=>Js(r)).join(",")),`Target(${n})`}(Gt(t))}; limitType=${t.limitType})`}function Ec(t,e){return e.isFoundDocument()&&function(n,r){const i=r.key.path;return n.collectionGroup!==null?r.key.hasCollectionId(n.collectionGroup)&&n.path.isPrefixOf(i):L.isDocumentKey(n.path)?n.path.isEqual(i):n.path.isImmediateParentOf(i)}(t,e)&&function(n,r){for(const i of qi(n))if(!i.field.isKeyField()&&r.data.field(i.field)===null)return!1;return!0}(t,e)&&function(n,r){for(const i of n.filters)if(!i.matches(r))return!1;return!0}(t,e)&&function(n,r){return!(n.startAt&&!function(i,s,o){const a=Rv(i,s,o);return i.inclusive?a<=0:a<0}(n.startAt,qi(n),r)||n.endAt&&!function(i,s,o){const a=Rv(i,s,o);return i.inclusive?a>=0:a>0}(n.endAt,qi(n),r))}(t,e)}function dE(t){return t.collectionGroup||(t.path.length%2==1?t.path.lastSegment():t.path.get(t.path.length-2))}function fE(t){return(e,n)=>{let r=!1;for(const i of qi(t)){const s=dM(i,e,n);if(s!==0)return s;r=r||i.field.isKeyField()}return 0}}function dM(t,e,n){const r=t.field.isKeyField()?L.comparator(e.key,n.key):function(i,s,o){const a=s.data.field(i),c=o.data.field(i);return a!==null&&c!==null?Yr(a,c):$()}(t.field,e,n);switch(t.dir){case"asc":return r;case"desc":return-1*r;default:return $()}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ci{constructor(e,n){this.mapKeyFn=e,this.equalsFn=n,this.inner={},this.innerSize=0}get(e){const n=this.mapKeyFn(e),r=this.inner[n];if(r!==void 0){for(const[i,s]of r)if(this.equalsFn(i,e))return s}}has(e){return this.get(e)!==void 0}set(e,n){const r=this.mapKeyFn(e),i=this.inner[r];if(i===void 0)return this.inner[r]=[[e,n]],void this.innerSize++;for(let s=0;s<i.length;s++)if(this.equalsFn(i[s][0],e))return void(i[s]=[e,n]);i.push([e,n]),this.innerSize++}delete(e){const n=this.mapKeyFn(e),r=this.inner[n];if(r===void 0)return!1;for(let i=0;i<r.length;i++)if(this.equalsFn(r[i][0],e))return r.length===1?delete this.inner[n]:r.splice(i,1),this.innerSize--,!0;return!1}forEach(e){ls(this.inner,(n,r)=>{for(const[i,s]of r)e(i,s)})}isEmpty(){return Z0(this.inner)}size(){return this.innerSize}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const fM=new We(L.comparator);function Kt(){return fM}const pE=new We(L.comparator);function Xo(...t){let e=pE;for(const n of t)e=e.insert(n.key,n);return e}function mE(t){let e=pE;return t.forEach((n,r)=>e=e.insert(n,r.overlayedDocument)),e}function Fn(){return ha()}function gE(){return ha()}function ha(){return new ci(t=>t.toString(),(t,e)=>t.isEqual(e))}const pM=new We(L.comparator),mM=new Se(L.comparator);function ce(...t){let e=mM;for(const n of t)e=e.add(n);return e}const gM=new Se(ae);function ah(){return gM}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function yE(t,e){if(t.useProto3Json){if(isNaN(e))return{doubleValue:"NaN"};if(e===1/0)return{doubleValue:"Infinity"};if(e===-1/0)return{doubleValue:"-Infinity"}}return{doubleValue:Ba(e)?"-0":e}}function vE(t){return{integerValue:""+t}}function wE(t,e){return G0(e)?vE(e):yE(t,e)}/**
 * @license
 * Copyright 2018 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ch{constructor(){this._=void 0}}function yM(t,e,n){return t instanceof eo?function(r,i){const s={fields:{__type__:{stringValue:"server_timestamp"},__local_write_time__:{timestampValue:{seconds:r.seconds,nanos:r.nanoseconds}}}};return i&&(s.fields.__previous_value__=i),{mapValue:s}}(n,e):t instanceof Xi?bE(t,e):t instanceof Ji?IE(t,e):function(r,i){const s=_E(r,i),o=Ov(s)+Ov(r._t);return mf(s)&&mf(r._t)?vE(o):yE(r.serializer,o)}(t,e)}function vM(t,e,n){return t instanceof Xi?bE(t,e):t instanceof Ji?IE(t,e):n}function _E(t,e){return t instanceof to?mf(n=e)||function(r){return!!r&&"doubleValue"in r}(n)?e:{integerValue:0}:null;var n}class eo extends ch{}class Xi extends ch{constructor(e){super(),this.elements=e}}function bE(t,e){const n=EE(e);for(const r of t.elements)n.some(i=>Hn(i,r))||n.push(r);return{arrayValue:{values:n}}}class Ji extends ch{constructor(e){super(),this.elements=e}}function IE(t,e){let n=EE(e);for(const r of t.elements)n=n.filter(i=>!Hn(i,r));return{arrayValue:{values:n}}}class to extends ch{constructor(e,n){super(),this.serializer=e,this._t=n}}function Ov(t){return ze(t.integerValue||t.doubleValue)}function EE(t){return ja(t)&&t.arrayValue.values?t.arrayValue.values.slice():[]}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Tc{constructor(e,n){this.field=e,this.transform=n}}function wM(t,e){return t.field.isEqual(e.field)&&function(n,r){return n instanceof Xi&&r instanceof Xi||n instanceof Ji&&r instanceof Ji?Xs(n.elements,r.elements,Hn):n instanceof to&&r instanceof to?Hn(n._t,r._t):n instanceof eo&&r instanceof eo}(t.transform,e.transform)}class _M{constructor(e,n){this.version=e,this.transformResults=n}}class Fe{constructor(e,n){this.updateTime=e,this.exists=n}static none(){return new Fe}static exists(e){return new Fe(void 0,e)}static updateTime(e){return new Fe(e)}get isNone(){return this.updateTime===void 0&&this.exists===void 0}isEqual(e){return this.exists===e.exists&&(this.updateTime?!!e.updateTime&&this.updateTime.isEqual(e.updateTime):!e.updateTime)}}function ku(t,e){return t.updateTime!==void 0?e.isFoundDocument()&&e.version.isEqual(t.updateTime):t.exists===void 0||t.exists===e.isFoundDocument()}class uh{}function TE(t,e){if(!t.hasLocalMutations||e&&e.fields.length===0)return null;if(e===null)return t.isNoDocument()?new To(t.key,Fe.none()):new Eo(t.key,t.data,Fe.none());{const n=t.data,r=yt.empty();let i=new Se(Xe.comparator);for(let s of e.fields)if(!i.has(s)){let o=n.field(s);o===null&&s.length>1&&(s=s.popLast(),o=n.field(s)),o===null?r.delete(s):r.set(s,o),i=i.add(s)}return new gr(t.key,r,new Ht(i.toArray()),Fe.none())}}function bM(t,e,n){t instanceof Eo?function(r,i,s){const o=r.value.clone(),a=Mv(r.fieldTransforms,i,s.transformResults);o.setAll(a),i.convertToFoundDocument(s.version,o).setHasCommittedMutations()}(t,e,n):t instanceof gr?function(r,i,s){if(!ku(r.precondition,i))return void i.convertToUnknownDocument(s.version);const o=Mv(r.fieldTransforms,i,s.transformResults),a=i.data;a.setAll(SE(r)),a.setAll(o),i.convertToFoundDocument(s.version,a).setHasCommittedMutations()}(t,e,n):function(r,i,s){i.convertToNoDocument(s.version).setHasCommittedMutations()}(0,e,n)}function da(t,e,n,r){return t instanceof Eo?function(i,s,o,a){if(!ku(i.precondition,s))return o;const c=i.value.clone(),u=Fv(i.fieldTransforms,a,s);return c.setAll(u),s.convertToFoundDocument(s.version,c).setHasLocalMutations(),null}(t,e,n,r):t instanceof gr?function(i,s,o,a){if(!ku(i.precondition,s))return o;const c=Fv(i.fieldTransforms,a,s),u=s.data;return u.setAll(SE(i)),u.setAll(c),s.convertToFoundDocument(s.version,u).setHasLocalMutations(),o===null?null:o.unionWith(i.fieldMask.fields).unionWith(i.fieldTransforms.map(l=>l.field))}(t,e,n,r):function(i,s,o){return ku(i.precondition,s)?(s.convertToNoDocument(s.version).setHasLocalMutations(),null):o}(t,e,n)}function IM(t,e){let n=null;for(const r of t.fieldTransforms){const i=e.data.field(r.field),s=_E(r.transform,i||null);s!=null&&(n===null&&(n=yt.empty()),n.set(r.field,s))}return n||null}function Lv(t,e){return t.type===e.type&&!!t.key.isEqual(e.key)&&!!t.precondition.isEqual(e.precondition)&&!!function(n,r){return n===void 0&&r===void 0||!(!n||!r)&&Xs(n,r,(i,s)=>wM(i,s))}(t.fieldTransforms,e.fieldTransforms)&&(t.type===0?t.value.isEqual(e.value):t.type!==1||t.data.isEqual(e.data)&&t.fieldMask.isEqual(e.fieldMask))}class Eo extends uh{constructor(e,n,r,i=[]){super(),this.key=e,this.value=n,this.precondition=r,this.fieldTransforms=i,this.type=0}getFieldMask(){return null}}class gr extends uh{constructor(e,n,r,i,s=[]){super(),this.key=e,this.data=n,this.fieldMask=r,this.precondition=i,this.fieldTransforms=s,this.type=1}getFieldMask(){return this.fieldMask}}function SE(t){const e=new Map;return t.fieldMask.fields.forEach(n=>{if(!n.isEmpty()){const r=t.data.field(n);e.set(n,r)}}),e}function Mv(t,e,n){const r=new Map;X(t.length===n.length);for(let i=0;i<n.length;i++){const s=t[i],o=s.transform,a=e.data.field(s.field);r.set(s.field,vM(o,a,n[i]))}return r}function Fv(t,e,n){const r=new Map;for(const i of t){const s=i.transform,o=n.data.field(i.field);r.set(i.field,yM(s,o,e))}return r}class To extends uh{constructor(e,n){super(),this.key=e,this.precondition=n,this.type=2,this.fieldTransforms=[]}getFieldMask(){return null}}class mm extends uh{constructor(e,n){super(),this.key=e,this.precondition=n,this.type=3,this.fieldTransforms=[]}getFieldMask(){return null}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class gm{constructor(e,n,r,i){this.batchId=e,this.localWriteTime=n,this.baseMutations=r,this.mutations=i}applyToRemoteDocument(e,n){const r=n.mutationResults;for(let i=0;i<this.mutations.length;i++){const s=this.mutations[i];s.key.isEqual(e.key)&&bM(s,e,r[i])}}applyToLocalView(e,n){for(const r of this.baseMutations)r.key.isEqual(e.key)&&(n=da(r,e,n,this.localWriteTime));for(const r of this.mutations)r.key.isEqual(e.key)&&(n=da(r,e,n,this.localWriteTime));return n}applyToLocalDocumentSet(e,n){const r=gE();return this.mutations.forEach(i=>{const s=e.get(i.key),o=s.overlayedDocument;let a=this.applyToLocalView(o,s.mutatedFields);a=n.has(i.key)?null:a;const c=TE(o,a);c!==null&&r.set(i.key,c),o.isValidDocument()||o.convertToNoDocument(J.min())}),r}keys(){return this.mutations.reduce((e,n)=>e.add(n.key),ce())}isEqual(e){return this.batchId===e.batchId&&Xs(this.mutations,e.mutations,(n,r)=>Lv(n,r))&&Xs(this.baseMutations,e.baseMutations,(n,r)=>Lv(n,r))}}class ym{constructor(e,n,r,i){this.batch=e,this.commitVersion=n,this.mutationResults=r,this.docVersions=i}static from(e,n,r){X(e.mutations.length===r.length);let i=pM;const s=e.mutations;for(let o=0;o<s.length;o++)i=i.insert(s[o].key,r[o].version);return new ym(e,n,r,i)}}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class vm{constructor(e,n){this.largestBatchId=e,this.mutation=n}getKey(){return this.mutation.key}isEqual(e){return e!==null&&this.mutation===e.mutation}toString(){return`Overlay{
      largestBatchId: ${this.largestBatchId},
      mutation: ${this.mutation.toString()}
    }`}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class EM{constructor(e){this.count=e}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */var tt,fe;function kE(t){switch(t){default:return $();case _.CANCELLED:case _.UNKNOWN:case _.DEADLINE_EXCEEDED:case _.RESOURCE_EXHAUSTED:case _.INTERNAL:case _.UNAVAILABLE:case _.UNAUTHENTICATED:return!1;case _.INVALID_ARGUMENT:case _.NOT_FOUND:case _.ALREADY_EXISTS:case _.PERMISSION_DENIED:case _.FAILED_PRECONDITION:case _.ABORTED:case _.OUT_OF_RANGE:case _.UNIMPLEMENTED:case _.DATA_LOSS:return!0}}function AE(t){if(t===void 0)return Qe("GRPC error has no .code"),_.UNKNOWN;switch(t){case tt.OK:return _.OK;case tt.CANCELLED:return _.CANCELLED;case tt.UNKNOWN:return _.UNKNOWN;case tt.DEADLINE_EXCEEDED:return _.DEADLINE_EXCEEDED;case tt.RESOURCE_EXHAUSTED:return _.RESOURCE_EXHAUSTED;case tt.INTERNAL:return _.INTERNAL;case tt.UNAVAILABLE:return _.UNAVAILABLE;case tt.UNAUTHENTICATED:return _.UNAUTHENTICATED;case tt.INVALID_ARGUMENT:return _.INVALID_ARGUMENT;case tt.NOT_FOUND:return _.NOT_FOUND;case tt.ALREADY_EXISTS:return _.ALREADY_EXISTS;case tt.PERMISSION_DENIED:return _.PERMISSION_DENIED;case tt.FAILED_PRECONDITION:return _.FAILED_PRECONDITION;case tt.ABORTED:return _.ABORTED;case tt.OUT_OF_RANGE:return _.OUT_OF_RANGE;case tt.UNIMPLEMENTED:return _.UNIMPLEMENTED;case tt.DATA_LOSS:return _.DATA_LOSS;default:return $()}}(fe=tt||(tt={}))[fe.OK=0]="OK",fe[fe.CANCELLED=1]="CANCELLED",fe[fe.UNKNOWN=2]="UNKNOWN",fe[fe.INVALID_ARGUMENT=3]="INVALID_ARGUMENT",fe[fe.DEADLINE_EXCEEDED=4]="DEADLINE_EXCEEDED",fe[fe.NOT_FOUND=5]="NOT_FOUND",fe[fe.ALREADY_EXISTS=6]="ALREADY_EXISTS",fe[fe.PERMISSION_DENIED=7]="PERMISSION_DENIED",fe[fe.UNAUTHENTICATED=16]="UNAUTHENTICATED",fe[fe.RESOURCE_EXHAUSTED=8]="RESOURCE_EXHAUSTED",fe[fe.FAILED_PRECONDITION=9]="FAILED_PRECONDITION",fe[fe.ABORTED=10]="ABORTED",fe[fe.OUT_OF_RANGE=11]="OUT_OF_RANGE",fe[fe.UNIMPLEMENTED=12]="UNIMPLEMENTED",fe[fe.INTERNAL=13]="INTERNAL",fe[fe.UNAVAILABLE=14]="UNAVAILABLE",fe[fe.DATA_LOSS=15]="DATA_LOSS";/**
 * @license
 * Copyright 2023 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class wm{constructor(){this.onExistenceFilterMismatchCallbacks=new Map}static get instance(){return Yc}static getOrCreateInstance(){return Yc===null&&(Yc=new wm),Yc}onExistenceFilterMismatch(e){const n=Symbol();return this.onExistenceFilterMismatchCallbacks.set(n,e),()=>this.onExistenceFilterMismatchCallbacks.delete(n)}notifyOnExistenceFilterMismatch(e){this.onExistenceFilterMismatchCallbacks.forEach(n=>n(e))}}let Yc=null;/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Sc{constructor(e,n,r,i,s){this.snapshotVersion=e,this.targetChanges=n,this.targetMismatches=r,this.documentUpdates=i,this.resolvedLimboDocuments=s}static createSynthesizedRemoteEventForCurrentChange(e,n,r){const i=new Map;return i.set(e,kc.createSynthesizedTargetChangeForCurrentChange(e,n,r)),new Sc(J.min(),i,ah(),Kt(),ce())}}class kc{constructor(e,n,r,i,s){this.resumeToken=e,this.current=n,this.addedDocuments=r,this.modifiedDocuments=i,this.removedDocuments=s}static createSynthesizedTargetChangeForCurrentChange(e,n,r){return new kc(r,n,ce(),ce(),ce())}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Au{constructor(e,n,r,i){this.It=e,this.removedTargetIds=n,this.key=r,this.Tt=i}}class CE{constructor(e,n){this.targetId=e,this.Et=n}}class RE{constructor(e,n,r=ot.EMPTY_BYTE_STRING,i=null){this.state=e,this.targetIds=n,this.resumeToken=r,this.cause=i}}class Uv{constructor(){this.At=0,this.Rt=Bv(),this.vt=ot.EMPTY_BYTE_STRING,this.bt=!1,this.Pt=!0}get current(){return this.bt}get resumeToken(){return this.vt}get Vt(){return this.At!==0}get St(){return this.Pt}Dt(e){e.approximateByteSize()>0&&(this.Pt=!0,this.vt=e)}Ct(){let e=ce(),n=ce(),r=ce();return this.Rt.forEach((i,s)=>{switch(s){case 0:e=e.add(i);break;case 2:n=n.add(i);break;case 1:r=r.add(i);break;default:$()}}),new kc(this.vt,this.bt,e,n,r)}xt(){this.Pt=!1,this.Rt=Bv()}Nt(e,n){this.Pt=!0,this.Rt=this.Rt.insert(e,n)}kt(e){this.Pt=!0,this.Rt=this.Rt.remove(e)}Ot(){this.At+=1}$t(){this.At-=1}Mt(){this.Pt=!0,this.bt=!0}}class TM{constructor(e){this.Ft=e,this.Bt=new Map,this.Lt=Kt(),this.qt=Vv(),this.Ut=new Se(ae)}Kt(e){for(const n of e.It)e.Tt&&e.Tt.isFoundDocument()?this.Gt(n,e.Tt):this.Qt(n,e.key,e.Tt);for(const n of e.removedTargetIds)this.Qt(n,e.key,e.Tt)}zt(e){this.forEachTarget(e,n=>{const r=this.jt(n);switch(e.state){case 0:this.Wt(n)&&r.Dt(e.resumeToken);break;case 1:r.$t(),r.Vt||r.xt(),r.Dt(e.resumeToken);break;case 2:r.$t(),r.Vt||this.removeTarget(n);break;case 3:this.Wt(n)&&(r.Mt(),r.Dt(e.resumeToken));break;case 4:this.Wt(n)&&(this.Ht(n),r.Dt(e.resumeToken));break;default:$()}})}forEachTarget(e,n){e.targetIds.length>0?e.targetIds.forEach(n):this.Bt.forEach((r,i)=>{this.Wt(i)&&n(i)})}Jt(e){var n;const r=e.targetId,i=e.Et.count,s=this.Yt(r);if(s){const o=s.target;if(el(o))if(i===0){const a=new L(o.path);this.Qt(r,a,Ne.newNoDocument(a,J.min()))}else X(i===1);else{const a=this.Zt(r);a!==i&&(this.Ht(r),this.Ut=this.Ut.add(r),(n=wm.instance)===null||n===void 0||n.notifyOnExistenceFilterMismatch({localCacheCount:a,existenceFilterCount:e.Et.count}))}}}Xt(e){const n=new Map;this.Bt.forEach((s,o)=>{const a=this.Yt(o);if(a){if(s.current&&el(a.target)){const c=new L(a.target.path);this.Lt.get(c)!==null||this.te(o,c)||this.Qt(o,c,Ne.newNoDocument(c,e))}s.St&&(n.set(o,s.Ct()),s.xt())}});let r=ce();this.qt.forEach((s,o)=>{let a=!0;o.forEachWhile(c=>{const u=this.Yt(c);return!u||u.purpose===2||(a=!1,!1)}),a&&(r=r.add(s))}),this.Lt.forEach((s,o)=>o.setReadTime(e));const i=new Sc(e,n,this.Ut,this.Lt,r);return this.Lt=Kt(),this.qt=Vv(),this.Ut=new Se(ae),i}Gt(e,n){if(!this.Wt(e))return;const r=this.te(e,n.key)?2:0;this.jt(e).Nt(n.key,r),this.Lt=this.Lt.insert(n.key,n),this.qt=this.qt.insert(n.key,this.ee(n.key).add(e))}Qt(e,n,r){if(!this.Wt(e))return;const i=this.jt(e);this.te(e,n)?i.Nt(n,1):i.kt(n),this.qt=this.qt.insert(n,this.ee(n).delete(e)),r&&(this.Lt=this.Lt.insert(n,r))}removeTarget(e){this.Bt.delete(e)}Zt(e){const n=this.jt(e).Ct();return this.Ft.getRemoteKeysForTarget(e).size+n.addedDocuments.size-n.removedDocuments.size}Ot(e){this.jt(e).Ot()}jt(e){let n=this.Bt.get(e);return n||(n=new Uv,this.Bt.set(e,n)),n}ee(e){let n=this.qt.get(e);return n||(n=new Se(ae),this.qt=this.qt.insert(e,n)),n}Wt(e){const n=this.Yt(e)!==null;return n||R("WatchChangeAggregator","Detected inactive target",e),n}Yt(e){const n=this.Bt.get(e);return n&&n.Vt?null:this.Ft.ne(e)}Ht(e){this.Bt.set(e,new Uv),this.Ft.getRemoteKeysForTarget(e).forEach(n=>{this.Qt(e,n,null)})}te(e,n){return this.Ft.getRemoteKeysForTarget(e).has(n)}}function Vv(){return new We(L.comparator)}function Bv(){return new We(L.comparator)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const SM=(()=>({asc:"ASCENDING",desc:"DESCENDING"}))(),kM=(()=>({"<":"LESS_THAN","<=":"LESS_THAN_OR_EQUAL",">":"GREATER_THAN",">=":"GREATER_THAN_OR_EQUAL","==":"EQUAL","!=":"NOT_EQUAL","array-contains":"ARRAY_CONTAINS",in:"IN","not-in":"NOT_IN","array-contains-any":"ARRAY_CONTAINS_ANY"}))(),AM=(()=>({and:"AND",or:"OR"}))();class CM{constructor(e,n){this.databaseId=e,this.useProto3Json=n}}function no(t,e){return t.useProto3Json?`${new Date(1e3*e.seconds).toISOString().replace(/\.\d*/,"").replace("Z","")}.${("000000000"+e.nanoseconds).slice(-9)}Z`:{seconds:""+e.seconds,nanos:e.nanoseconds}}function xE(t,e){return t.useProto3Json?e.toBase64():e.toUint8Array()}function RM(t,e){return no(t,e.toTimestamp())}function Je(t){return X(!!t),J.fromTimestamp(function(e){const n=Wr(e);return new Ue(n.seconds,n.nanos)}(t))}function _m(t,e){return function(n){return new me(["projects",n.projectId,"databases",n.database])}(t).child("documents").child(e).canonicalString()}function NE(t){const e=me.fromString(t);return X(BE(e)),e}function za(t,e){return _m(t.databaseId,e.path)}function Bn(t,e){const n=NE(e);if(n.get(1)!==t.databaseId.projectId)throw new A(_.INVALID_ARGUMENT,"Tried to deserialize key from different project: "+n.get(1)+" vs "+t.databaseId.projectId);if(n.get(3)!==t.databaseId.database)throw new A(_.INVALID_ARGUMENT,"Tried to deserialize key from different database: "+n.get(3)+" vs "+t.databaseId.database);return new L(DE(n))}function bf(t,e){return _m(t.databaseId,e)}function PE(t){const e=NE(t);return e.length===4?me.emptyPath():DE(e)}function Ha(t){return new me(["projects",t.databaseId.projectId,"databases",t.databaseId.database]).canonicalString()}function DE(t){return X(t.length>4&&t.get(4)==="documents"),t.popFirst(5)}function $v(t,e,n){return{name:za(t,e),fields:n.value.mapValue.fields}}function OE(t,e,n){const r=Bn(t,e.name),i=Je(e.updateTime),s=e.createTime?Je(e.createTime):J.min(),o=new yt({mapValue:{fields:e.fields}}),a=Ne.newFoundDocument(r,i,s,o);return n&&a.setHasCommittedMutations(),n?a.setHasCommittedMutations():a}function xM(t,e){return"found"in e?function(n,r){X(!!r.found),r.found.name,r.found.updateTime;const i=Bn(n,r.found.name),s=Je(r.found.updateTime),o=r.found.createTime?Je(r.found.createTime):J.min(),a=new yt({mapValue:{fields:r.found.fields}});return Ne.newFoundDocument(i,s,o,a)}(t,e):"missing"in e?function(n,r){X(!!r.missing),X(!!r.readTime);const i=Bn(n,r.missing),s=Je(r.readTime);return Ne.newNoDocument(i,s)}(t,e):$()}function NM(t,e){let n;if("targetChange"in e){e.targetChange;const r=function(c){return c==="NO_CHANGE"?0:c==="ADD"?1:c==="REMOVE"?2:c==="CURRENT"?3:c==="RESET"?4:$()}(e.targetChange.targetChangeType||"NO_CHANGE"),i=e.targetChange.targetIds||[],s=function(c,u){return c.useProto3Json?(X(u===void 0||typeof u=="string"),ot.fromBase64String(u||"")):(X(u===void 0||u instanceof Uint8Array),ot.fromUint8Array(u||new Uint8Array))}(t,e.targetChange.resumeToken),o=e.targetChange.cause,a=o&&function(c){const u=c.code===void 0?_.UNKNOWN:AE(c.code);return new A(u,c.message||"")}(o);n=new RE(r,i,s,a||null)}else if("documentChange"in e){e.documentChange;const r=e.documentChange;r.document,r.document.name,r.document.updateTime;const i=Bn(t,r.document.name),s=Je(r.document.updateTime),o=r.document.createTime?Je(r.document.createTime):J.min(),a=new yt({mapValue:{fields:r.document.fields}}),c=Ne.newFoundDocument(i,s,o,a),u=r.targetIds||[],l=r.removedTargetIds||[];n=new Au(u,l,c.key,c)}else if("documentDelete"in e){e.documentDelete;const r=e.documentDelete;r.document;const i=Bn(t,r.document),s=r.readTime?Je(r.readTime):J.min(),o=Ne.newNoDocument(i,s),a=r.removedTargetIds||[];n=new Au([],a,o.key,o)}else if("documentRemove"in e){e.documentRemove;const r=e.documentRemove;r.document;const i=Bn(t,r.document),s=r.removedTargetIds||[];n=new Au([],s,i,null)}else{if(!("filter"in e))return $();{e.filter;const r=e.filter;r.targetId;const i=r.count||0,s=new EM(i),o=r.targetId;n=new CE(o,s)}}return n}function Ka(t,e){let n;if(e instanceof Eo)n={update:$v(t,e.key,e.value)};else if(e instanceof To)n={delete:za(t,e.key)};else if(e instanceof gr)n={update:$v(t,e.key,e.data),updateMask:FM(e.fieldMask)};else{if(!(e instanceof mm))return $();n={verify:za(t,e.key)}}return e.fieldTransforms.length>0&&(n.updateTransforms=e.fieldTransforms.map(r=>function(i,s){const o=s.transform;if(o instanceof eo)return{fieldPath:s.field.canonicalString(),setToServerValue:"REQUEST_TIME"};if(o instanceof Xi)return{fieldPath:s.field.canonicalString(),appendMissingElements:{values:o.elements}};if(o instanceof Ji)return{fieldPath:s.field.canonicalString(),removeAllFromArray:{values:o.elements}};if(o instanceof to)return{fieldPath:s.field.canonicalString(),increment:o._t};throw $()}(0,r))),e.precondition.isNone||(n.currentDocument=function(r,i){return i.updateTime!==void 0?{updateTime:RM(r,i.updateTime)}:i.exists!==void 0?{exists:i.exists}:$()}(t,e.precondition)),n}function If(t,e){const n=e.currentDocument?function(i){return i.updateTime!==void 0?Fe.updateTime(Je(i.updateTime)):i.exists!==void 0?Fe.exists(i.exists):Fe.none()}(e.currentDocument):Fe.none(),r=e.updateTransforms?e.updateTransforms.map(i=>function(s,o){let a=null;if("setToServerValue"in o)X(o.setToServerValue==="REQUEST_TIME"),a=new eo;else if("appendMissingElements"in o){const u=o.appendMissingElements.values||[];a=new Xi(u)}else if("removeAllFromArray"in o){const u=o.removeAllFromArray.values||[];a=new Ji(u)}else"increment"in o?a=new to(s,o.increment):$();const c=Xe.fromServerFormat(o.fieldPath);return new Tc(c,a)}(t,i)):[];if(e.update){e.update.name;const i=Bn(t,e.update.name),s=new yt({mapValue:{fields:e.update.fields}});if(e.updateMask){const o=function(a){const c=a.fieldPaths||[];return new Ht(c.map(u=>Xe.fromServerFormat(u)))}(e.updateMask);return new gr(i,s,o,n,r)}return new Eo(i,s,n,r)}if(e.delete){const i=Bn(t,e.delete);return new To(i,n)}if(e.verify){const i=Bn(t,e.verify);return new mm(i,n)}return $()}function PM(t,e){return t&&t.length>0?(X(e!==void 0),t.map(n=>function(r,i){let s=r.updateTime?Je(r.updateTime):Je(i);return s.isEqual(J.min())&&(s=Je(i)),new _M(s,r.transformResults||[])}(n,e))):[]}function LE(t,e){return{documents:[bf(t,e.path)]}}function ME(t,e){const n={structuredQuery:{}},r=e.path;e.collectionGroup!==null?(n.parent=bf(t,r),n.structuredQuery.from=[{collectionId:e.collectionGroup,allDescendants:!0}]):(n.parent=bf(t,r.popLast()),n.structuredQuery.from=[{collectionId:r.lastSegment()}]);const i=function(c){if(c.length!==0)return VE(Ie.create(c,"and"))}(e.filters);i&&(n.structuredQuery.where=i);const s=function(c){if(c.length!==0)return c.map(u=>function(l){return{field:Ts(l.field),direction:OM(l.dir)}}(u))}(e.orderBy);s&&(n.structuredQuery.orderBy=s);const o=function(c,u){return c.useProto3Json||_c(u)?u:{value:u}}(t,e.limit);var a;return o!==null&&(n.structuredQuery.limit=o),e.startAt&&(n.structuredQuery.startAt={before:(a=e.startAt).inclusive,values:a.position}),e.endAt&&(n.structuredQuery.endAt=function(c){return{before:!c.inclusive,values:c.position}}(e.endAt)),n}function FE(t){let e=PE(t.parent);const n=t.structuredQuery,r=n.from?n.from.length:0;let i=null;if(r>0){X(r===1);const l=n.from[0];l.allDescendants?i=l.collectionId:e=e.child(l.collectionId)}let s=[];n.where&&(s=function(l){const h=UE(l);return h instanceof Ie&&dm(h)?h.getFilters():[h]}(n.where));let o=[];n.orderBy&&(o=n.orderBy.map(l=>function(h){return new Bs(Ss(h.field),function(d){switch(d){case"ASCENDING":return"asc";case"DESCENDING":return"desc";default:return}}(h.direction))}(l)));let a=null;n.limit&&(a=function(l){let h;return h=typeof l=="object"?l.value:l,_c(h)?null:h}(n.limit));let c=null;n.startAt&&(c=function(l){const h=!!l.before,d=l.values||[];return new Qr(d,h)}(n.startAt));let u=null;return n.endAt&&(u=function(l){const h=!l.before,d=l.values||[];return new Qr(d,h)}(n.endAt)),lE(e,i,o,s,a,"F",c,u)}function DM(t,e){const n=function(r,i){switch(i){case 0:return null;case 1:return"existence-filter-mismatch";case 2:return"limbo-document";default:return $()}}(0,e.purpose);return n==null?null:{"goog-listen-tags":n}}function UE(t){return t.unaryFilter!==void 0?function(e){switch(e.unaryFilter.op){case"IS_NAN":const n=Ss(e.unaryFilter.field);return de.create(n,"==",{doubleValue:NaN});case"IS_NULL":const r=Ss(e.unaryFilter.field);return de.create(r,"==",{nullValue:"NULL_VALUE"});case"IS_NOT_NAN":const i=Ss(e.unaryFilter.field);return de.create(i,"!=",{doubleValue:NaN});case"IS_NOT_NULL":const s=Ss(e.unaryFilter.field);return de.create(s,"!=",{nullValue:"NULL_VALUE"});default:return $()}}(t):t.fieldFilter!==void 0?function(e){return de.create(Ss(e.fieldFilter.field),function(n){switch(n){case"EQUAL":return"==";case"NOT_EQUAL":return"!=";case"GREATER_THAN":return">";case"GREATER_THAN_OR_EQUAL":return">=";case"LESS_THAN":return"<";case"LESS_THAN_OR_EQUAL":return"<=";case"ARRAY_CONTAINS":return"array-contains";case"IN":return"in";case"NOT_IN":return"not-in";case"ARRAY_CONTAINS_ANY":return"array-contains-any";default:return $()}}(e.fieldFilter.op),e.fieldFilter.value)}(t):t.compositeFilter!==void 0?function(e){return Ie.create(e.compositeFilter.filters.map(n=>UE(n)),function(n){switch(n){case"AND":return"and";case"OR":return"or";default:return $()}}(e.compositeFilter.op))}(t):$()}function OM(t){return SM[t]}function LM(t){return kM[t]}function MM(t){return AM[t]}function Ts(t){return{fieldPath:t.canonicalString()}}function Ss(t){return Xe.fromServerFormat(t.fieldPath)}function VE(t){return t instanceof de?function(e){if(e.op==="=="){if(kv(e.value))return{unaryFilter:{field:Ts(e.field),op:"IS_NAN"}};if(Sv(e.value))return{unaryFilter:{field:Ts(e.field),op:"IS_NULL"}}}else if(e.op==="!="){if(kv(e.value))return{unaryFilter:{field:Ts(e.field),op:"IS_NOT_NAN"}};if(Sv(e.value))return{unaryFilter:{field:Ts(e.field),op:"IS_NOT_NULL"}}}return{fieldFilter:{field:Ts(e.field),op:LM(e.op),value:e.value}}}(t):t instanceof Ie?function(e){const n=e.getFilters().map(r=>VE(r));return n.length===1?n[0]:{compositeFilter:{op:MM(e.op),filters:n}}}(t):$()}function FM(t){const e=[];return t.fields.forEach(n=>e.push(n.canonicalString())),{fieldPaths:e}}function BE(t){return t.length>=4&&t.get(0)==="projects"&&t.get(2)==="databases"}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Br{constructor(e,n,r,i,s=J.min(),o=J.min(),a=ot.EMPTY_BYTE_STRING){this.target=e,this.targetId=n,this.purpose=r,this.sequenceNumber=i,this.snapshotVersion=s,this.lastLimboFreeSnapshotVersion=o,this.resumeToken=a}withSequenceNumber(e){return new Br(this.target,this.targetId,this.purpose,e,this.snapshotVersion,this.lastLimboFreeSnapshotVersion,this.resumeToken)}withResumeToken(e,n){return new Br(this.target,this.targetId,this.purpose,this.sequenceNumber,n,this.lastLimboFreeSnapshotVersion,e)}withLastLimboFreeSnapshotVersion(e){return new Br(this.target,this.targetId,this.purpose,this.sequenceNumber,this.snapshotVersion,e,this.resumeToken)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class $E{constructor(e){this.se=e}}function UM(t,e){let n;if(e.document)n=OE(t.se,e.document,!!e.hasCommittedMutations);else if(e.noDocument){const r=L.fromSegments(e.noDocument.path),i=es(e.noDocument.readTime);n=Ne.newNoDocument(r,i),e.hasCommittedMutations&&n.setHasCommittedMutations()}else{if(!e.unknownDocument)return $();{const r=L.fromSegments(e.unknownDocument.path),i=es(e.unknownDocument.version);n=Ne.newUnknownDocument(r,i)}}return e.readTime&&n.setReadTime(function(r){const i=new Ue(r[0],r[1]);return J.fromTimestamp(i)}(e.readTime)),n}function qv(t,e){const n=e.key,r={prefixPath:n.getCollectionPath().popLast().toArray(),collectionGroup:n.collectionGroup,documentId:n.path.lastSegment(),readTime:rl(e.readTime),hasCommittedMutations:e.hasCommittedMutations};if(e.isFoundDocument())r.document=function(i,s){return{name:za(i,s.key),fields:s.data.value.mapValue.fields,updateTime:no(i,s.version.toTimestamp()),createTime:no(i,s.createTime.toTimestamp())}}(t.se,e);else if(e.isNoDocument())r.noDocument={path:n.path.toArray(),readTime:Zi(e.version)};else{if(!e.isUnknownDocument())return $();r.unknownDocument={path:n.path.toArray(),version:Zi(e.version)}}return r}function rl(t){const e=t.toTimestamp();return[e.seconds,e.nanoseconds]}function Zi(t){const e=t.toTimestamp();return{seconds:e.seconds,nanoseconds:e.nanoseconds}}function es(t){const e=new Ue(t.seconds,t.nanoseconds);return J.fromTimestamp(e)}function Ti(t,e){const n=(e.baseMutations||[]).map(s=>If(t.se,s));for(let s=0;s<e.mutations.length-1;++s){const o=e.mutations[s];if(s+1<e.mutations.length&&e.mutations[s+1].transform!==void 0){const a=e.mutations[s+1];o.updateTransforms=a.transform.fieldTransforms,e.mutations.splice(s+1,1),++s}}const r=e.mutations.map(s=>If(t.se,s)),i=Ue.fromMillis(e.localWriteTimeMs);return new gm(e.batchId,i,n,r)}function Jo(t){const e=es(t.readTime),n=t.lastLimboFreeSnapshotVersion!==void 0?es(t.lastLimboFreeSnapshotVersion):J.min();let r;var i;return t.query.documents!==void 0?(X((i=t.query).documents.length===1),r=Gt(Io(PE(i.documents[0])))):r=function(s){return Gt(FE(s))}(t.query),new Br(r,t.targetId,0,t.lastListenSequenceNumber,e,n,ot.fromBase64String(t.resumeToken))}function qE(t,e){const n=Zi(e.snapshotVersion),r=Zi(e.lastLimboFreeSnapshotVersion);let i;i=el(e.target)?LE(t.se,e.target):ME(t.se,e.target);const s=e.resumeToken.toBase64();return{targetId:e.targetId,canonicalId:Qi(e.target),readTime:n,resumeToken:s,lastListenSequenceNumber:e.sequenceNumber,lastLimboFreeSnapshotVersion:r,query:i}}function bm(t){const e=FE({parent:t.parent,structuredQuery:t.structuredQuery});return t.limitType==="LAST"?nl(e,e.limit,"L"):e}function dd(t,e){return new vm(e.largestBatchId,If(t.se,e.overlayMutation))}function jv(t,e){const n=e.path.lastSegment();return[t,Ft(e.path.popLast()),n]}function zv(t,e,n,r){return{indexId:t,uid:e.uid||"",sequenceNumber:n,readTime:Zi(r.readTime),documentKey:Ft(r.documentKey.path),largestBatchId:r.largestBatchId}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class VM{getBundleMetadata(e,n){return Hv(e).get(n).next(r=>{if(r)return{id:(i=r).bundleId,createTime:es(i.createTime),version:i.version};var i})}saveBundleMetadata(e,n){return Hv(e).put({bundleId:(r=n).id,createTime:Zi(Je(r.createTime)),version:r.version});var r}getNamedQuery(e,n){return Kv(e).get(n).next(r=>{if(r)return{name:(i=r).name,query:bm(i.bundledQuery),readTime:es(i.readTime)};var i})}saveNamedQuery(e,n){return Kv(e).put(function(r){return{name:r.name,readTime:Zi(Je(r.readTime)),bundledQuery:r.bundledQuery}}(n))}}function Hv(t){return ft(t,"bundles")}function Kv(t){return ft(t,"namedQueries")}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class lh{constructor(e,n){this.serializer=e,this.userId=n}static ie(e,n){const r=n.uid||"";return new lh(e,r)}getOverlay(e,n){return Uo(e).get(jv(this.userId,n)).next(r=>r?dd(this.serializer,r):null)}getOverlays(e,n){const r=Fn();return w.forEach(n,i=>this.getOverlay(e,i).next(s=>{s!==null&&r.set(i,s)})).next(()=>r)}saveOverlays(e,n,r){const i=[];return r.forEach((s,o)=>{const a=new vm(n,o);i.push(this.re(e,a))}),w.waitFor(i)}removeOverlaysForBatchId(e,n,r){const i=new Set;n.forEach(o=>i.add(Ft(o.getCollectionPath())));const s=[];return i.forEach(o=>{const a=IDBKeyRange.bound([this.userId,o,r],[this.userId,o,r+1],!1,!0);s.push(Uo(e).J("collectionPathOverlayIndex",a))}),w.waitFor(s)}getOverlaysForCollection(e,n,r){const i=Fn(),s=Ft(n),o=IDBKeyRange.bound([this.userId,s,r],[this.userId,s,Number.POSITIVE_INFINITY],!0);return Uo(e).j("collectionPathOverlayIndex",o).next(a=>{for(const c of a){const u=dd(this.serializer,c);i.set(u.getKey(),u)}return i})}getOverlaysForCollectionGroup(e,n,r,i){const s=Fn();let o;const a=IDBKeyRange.bound([this.userId,n,r],[this.userId,n,Number.POSITIVE_INFINITY],!0);return Uo(e).Z({index:"collectionGroupOverlayIndex",range:a},(c,u,l)=>{const h=dd(this.serializer,u);s.size()<i||h.largestBatchId===o?(s.set(h.getKey(),h),o=h.largestBatchId):l.done()}).next(()=>s)}re(e,n){return Uo(e).put(function(r,i,s){const[o,a,c]=jv(i,s.mutation.key);return{userId:i,collectionPath:a,documentId:c,collectionGroup:s.mutation.key.getCollectionGroup(),largestBatchId:s.largestBatchId,overlayMutation:Ka(r.se,s.mutation)}}(this.serializer,this.userId,n))}}function Uo(t){return ft(t,"documentOverlays")}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Si{constructor(){}oe(e,n){this.ue(e,n),n.ce()}ue(e,n){if("nullValue"in e)this.ae(n,5);else if("booleanValue"in e)this.ae(n,10),n.he(e.booleanValue?1:0);else if("integerValue"in e)this.ae(n,15),n.he(ze(e.integerValue));else if("doubleValue"in e){const r=ze(e.doubleValue);isNaN(r)?this.ae(n,13):(this.ae(n,15),Ba(r)?n.he(0):n.he(r))}else if("timestampValue"in e){const r=e.timestampValue;this.ae(n,20),typeof r=="string"?n.le(r):(n.le(`${r.seconds||""}`),n.he(r.nanos||0))}else if("stringValue"in e)this.fe(e.stringValue,n),this.de(n);else if("bytesValue"in e)this.ae(n,30),n.we(Wi(e.bytesValue)),this.de(n);else if("referenceValue"in e)this._e(e.referenceValue,n);else if("geoPointValue"in e){const r=e.geoPointValue;this.ae(n,45),n.he(r.latitude||0),n.he(r.longitude||0)}else"mapValue"in e?tE(e)?this.ae(n,Number.MAX_SAFE_INTEGER):(this.me(e.mapValue,n),this.de(n)):"arrayValue"in e?(this.ge(e.arrayValue,n),this.de(n)):$()}fe(e,n){this.ae(n,25),this.ye(e,n)}ye(e,n){n.le(e)}me(e,n){const r=e.fields||{};this.ae(n,55);for(const i of Object.keys(r))this.fe(i,n),this.ue(r[i],n)}ge(e,n){const r=e.values||[];this.ae(n,50);for(const i of r)this.ue(i,n)}_e(e,n){this.ae(n,37),L.fromName(e).path.forEach(r=>{this.ae(n,60),this.ye(r,n)})}ae(e,n){e.he(n)}de(e){e.he(2)}}Si.pe=new Si;function BM(t){if(t===0)return 8;let e=0;return t>>4==0&&(e+=4,t<<=4),t>>6==0&&(e+=2,t<<=2),t>>7==0&&(e+=1),e}function Wv(t){const e=64-function(n){let r=0;for(let i=0;i<8;++i){const s=BM(255&n[i]);if(r+=s,s!==8)break}return r}(t);return Math.ceil(e/8)}class $M{constructor(){this.buffer=new Uint8Array(1024),this.position=0}Ie(e){const n=e[Symbol.iterator]();let r=n.next();for(;!r.done;)this.Te(r.value),r=n.next();this.Ee()}Ae(e){const n=e[Symbol.iterator]();let r=n.next();for(;!r.done;)this.Re(r.value),r=n.next();this.ve()}be(e){for(const n of e){const r=n.charCodeAt(0);if(r<128)this.Te(r);else if(r<2048)this.Te(960|r>>>6),this.Te(128|63&r);else if(n<"\uD800"||"\uDBFF"<n)this.Te(480|r>>>12),this.Te(128|63&r>>>6),this.Te(128|63&r);else{const i=n.codePointAt(0);this.Te(240|i>>>18),this.Te(128|63&i>>>12),this.Te(128|63&i>>>6),this.Te(128|63&i)}}this.Ee()}Pe(e){for(const n of e){const r=n.charCodeAt(0);if(r<128)this.Re(r);else if(r<2048)this.Re(960|r>>>6),this.Re(128|63&r);else if(n<"\uD800"||"\uDBFF"<n)this.Re(480|r>>>12),this.Re(128|63&r>>>6),this.Re(128|63&r);else{const i=n.codePointAt(0);this.Re(240|i>>>18),this.Re(128|63&i>>>12),this.Re(128|63&i>>>6),this.Re(128|63&i)}}this.ve()}Ve(e){const n=this.Se(e),r=Wv(n);this.De(1+r),this.buffer[this.position++]=255&r;for(let i=n.length-r;i<n.length;++i)this.buffer[this.position++]=255&n[i]}Ce(e){const n=this.Se(e),r=Wv(n);this.De(1+r),this.buffer[this.position++]=~(255&r);for(let i=n.length-r;i<n.length;++i)this.buffer[this.position++]=~(255&n[i])}xe(){this.Ne(255),this.Ne(255)}ke(){this.Oe(255),this.Oe(255)}reset(){this.position=0}seed(e){this.De(e.length),this.buffer.set(e,this.position),this.position+=e.length}$e(){return this.buffer.slice(0,this.position)}Se(e){const n=function(i){const s=new DataView(new ArrayBuffer(8));return s.setFloat64(0,i,!1),new Uint8Array(s.buffer)}(e),r=(128&n[0])!=0;n[0]^=r?255:128;for(let i=1;i<n.length;++i)n[i]^=r?255:0;return n}Te(e){const n=255&e;n===0?(this.Ne(0),this.Ne(255)):n===255?(this.Ne(255),this.Ne(0)):this.Ne(n)}Re(e){const n=255&e;n===0?(this.Oe(0),this.Oe(255)):n===255?(this.Oe(255),this.Oe(0)):this.Oe(e)}Ee(){this.Ne(0),this.Ne(1)}ve(){this.Oe(0),this.Oe(1)}Ne(e){this.De(1),this.buffer[this.position++]=e}Oe(e){this.De(1),this.buffer[this.position++]=~e}De(e){const n=e+this.position;if(n<=this.buffer.length)return;let r=2*this.buffer.length;r<n&&(r=n);const i=new Uint8Array(r);i.set(this.buffer),this.buffer=i}}class qM{constructor(e){this.Me=e}we(e){this.Me.Ie(e)}le(e){this.Me.be(e)}he(e){this.Me.Ve(e)}ce(){this.Me.xe()}}class jM{constructor(e){this.Me=e}we(e){this.Me.Ae(e)}le(e){this.Me.Pe(e)}he(e){this.Me.Ce(e)}ce(){this.Me.ke()}}class Vo{constructor(){this.Me=new $M,this.Fe=new qM(this.Me),this.Be=new jM(this.Me)}seed(e){this.Me.seed(e)}Le(e){return e===0?this.Fe:this.Be}$e(){return this.Me.$e()}reset(){this.Me.reset()}}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ki{constructor(e,n,r,i){this.indexId=e,this.documentKey=n,this.arrayValue=r,this.directionalValue=i}qe(){const e=this.directionalValue.length,n=e===0||this.directionalValue[e-1]===255?e+1:e,r=new Uint8Array(n);return r.set(this.directionalValue,0),n!==e?r.set([0],this.directionalValue.length):++r[r.length-1],new ki(this.indexId,this.documentKey,this.arrayValue,r)}}function Ar(t,e){let n=t.indexId-e.indexId;return n!==0?n:(n=Gv(t.arrayValue,e.arrayValue),n!==0?n:(n=Gv(t.directionalValue,e.directionalValue),n!==0?n:L.comparator(t.documentKey,e.documentKey)))}function Gv(t,e){for(let n=0;n<t.length&&n<e.length;++n){const r=t[n]-e[n];if(r!==0)return r}return t.length-e.length}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class zM{constructor(e){this.collectionId=e.collectionGroup!=null?e.collectionGroup:e.path.lastSegment(),this.Ue=e.orderBy,this.Ke=[];for(const n of e.filters){const r=n;r.isInequality()?this.Ge=r:this.Ke.push(r)}}Qe(e){X(e.collectionGroup===this.collectionId);const n=df(e);if(n!==void 0&&!this.ze(n))return!1;const r=wi(e);let i=0,s=0;for(;i<r.length&&this.ze(r[i]);++i);if(i===r.length)return!0;if(this.Ge!==void 0){const o=r[i];if(!this.je(this.Ge,o)||!this.We(this.Ue[s++],o))return!1;++i}for(;i<r.length;++i){const o=r[i];if(s>=this.Ue.length||!this.We(this.Ue[s++],o))return!1}return!0}ze(e){for(const n of this.Ke)if(this.je(n,e))return!0;return!1}je(e,n){if(e===void 0||!e.field.isEqual(n.fieldPath))return!1;const r=e.op==="array-contains"||e.op==="array-contains-any";return n.kind===2===r}We(e,n){return!!e.field.isEqual(n.fieldPath)&&(n.kind===0&&e.dir==="asc"||n.kind===1&&e.dir==="desc")}}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function jE(t){var e,n;if(X(t instanceof de||t instanceof Ie),t instanceof de){if(t instanceof uE){const i=((n=(e=t.value.arrayValue)===null||e===void 0?void 0:e.values)===null||n===void 0?void 0:n.map(s=>de.create(t.field,"==",s)))||[];return Ie.create(i,"or")}return t}const r=t.filters.map(i=>jE(i));return Ie.create(r,t.op)}function HM(t){if(t.getFilters().length===0)return[];const e=Sf(jE(t));return X(zE(e)),Ef(e)||Tf(e)?[e]:e.getFilters()}function Ef(t){return t instanceof de}function Tf(t){return t instanceof Ie&&dm(t)}function zE(t){return Ef(t)||Tf(t)||function(e){if(e instanceof Ie&&gf(e)){for(const n of e.getFilters())if(!Ef(n)&&!Tf(n))return!1;return!0}return!1}(t)}function Sf(t){if(X(t instanceof de||t instanceof Ie),t instanceof de)return t;if(t.filters.length===1)return Sf(t.filters[0]);const e=t.filters.map(r=>Sf(r));let n=Ie.create(e,t.op);return n=il(n),zE(n)?n:(X(n instanceof Ie),X(Zs(n)),X(n.filters.length>1),n.filters.reduce((r,i)=>Im(r,i)))}function Im(t,e){let n;return X(t instanceof de||t instanceof Ie),X(e instanceof de||e instanceof Ie),n=t instanceof de?e instanceof de?function(r,i){return Ie.create([r,i],"and")}(t,e):Yv(t,e):e instanceof de?Yv(e,t):function(r,i){if(X(r.filters.length>0&&i.filters.length>0),Zs(r)&&Zs(i))return oE(r,i.getFilters());const s=gf(r)?r:i,o=gf(r)?i:r,a=s.filters.map(c=>Im(c,o));return Ie.create(a,"or")}(t,e),il(n)}function Yv(t,e){if(Zs(e))return oE(e,t.getFilters());{const n=e.filters.map(r=>Im(t,r));return Ie.create(n,"or")}}function il(t){if(X(t instanceof de||t instanceof Ie),t instanceof de)return t;const e=t.getFilters();if(e.length===1)return il(e[0]);if(iE(t))return t;const n=e.map(i=>il(i)),r=[];return n.forEach(i=>{i instanceof de?r.push(i):i instanceof Ie&&(i.op===t.op?r.push(...i.filters):r.push(i))}),r.length===1?r[0]:Ie.create(r,t.op)}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class KM{constructor(){this.He=new Em}addToCollectionParentIndex(e,n){return this.He.add(n),w.resolve()}getCollectionParents(e,n){return w.resolve(this.He.getEntries(n))}addFieldIndex(e,n){return w.resolve()}deleteFieldIndex(e,n){return w.resolve()}getDocumentsMatchingTarget(e,n){return w.resolve(null)}getIndexType(e,n){return w.resolve(0)}getFieldIndexes(e,n){return w.resolve([])}getNextCollectionGroupToUpdate(e){return w.resolve(null)}getMinOffset(e,n){return w.resolve(en.min())}getMinOffsetFromCollectionGroup(e,n){return w.resolve(en.min())}updateCollectionGroup(e,n,r){return w.resolve()}updateIndexEntries(e,n){return w.resolve()}}class Em{constructor(){this.index={}}add(e){const n=e.lastSegment(),r=e.popLast(),i=this.index[n]||new Se(me.comparator),s=!i.has(r);return this.index[n]=i.add(r),s}has(e){const n=e.lastSegment(),r=e.popLast(),i=this.index[n];return i&&i.has(r)}getEntries(e){return(this.index[e]||new Se(me.comparator)).toArray()}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Qc=new Uint8Array(0);class WM{constructor(e,n){this.user=e,this.databaseId=n,this.Je=new Em,this.Ye=new ci(r=>Qi(r),(r,i)=>bc(r,i)),this.uid=e.uid||""}addToCollectionParentIndex(e,n){if(!this.Je.has(n)){const r=n.lastSegment(),i=n.popLast();e.addOnCommittedListener(()=>{this.Je.add(n)});const s={collectionId:r,parent:Ft(i)};return Qv(e).put(s)}return w.resolve()}getCollectionParents(e,n){const r=[],i=IDBKeyRange.bound([n,""],[q0(n),""],!1,!0);return Qv(e).j(i).next(s=>{for(const o of s){if(o.collectionId!==n)break;r.push(Mn(o.parent))}return r})}addFieldIndex(e,n){const r=Xc(e),i=function(o){return{indexId:o.indexId,collectionGroup:o.collectionGroup,fields:o.fields.map(a=>[a.fieldPath.canonicalString(),a.kind])}}(n);delete i.indexId;const s=r.add(i);if(n.indexState){const o=$o(e);return s.next(a=>{o.put(zv(a,this.user,n.indexState.sequenceNumber,n.indexState.offset))})}return s.next()}deleteFieldIndex(e,n){const r=Xc(e),i=$o(e),s=Bo(e);return r.delete(n.indexId).next(()=>i.delete(IDBKeyRange.bound([n.indexId],[n.indexId+1],!1,!0))).next(()=>s.delete(IDBKeyRange.bound([n.indexId],[n.indexId+1],!1,!0)))}getDocumentsMatchingTarget(e,n){const r=Bo(e);let i=!0;const s=new Map;return w.forEach(this.Ze(n),o=>this.Xe(e,o).next(a=>{i&&(i=!!a),s.set(o,a)})).next(()=>{if(i){let o=ce();const a=[];return w.forEach(s,(c,u)=>{var l;R("IndexedDbIndexManager",`Using index ${l=c,`id=${l.indexId}|cg=${l.collectionGroup}|f=${l.fields.map(b=>`${b.fieldPath}:${b.kind}`).join(",")}`} to execute ${Qi(n)}`);const h=function(b,x){const M=df(x);if(M===void 0)return null;for(const z of tl(b,M.fieldPath))switch(z.op){case"array-contains-any":return z.value.arrayValue.values||[];case"array-contains":return[z.value]}return null}(u,c),d=function(b,x){const M=new Map;for(const z of wi(x))for(const ne of tl(b,z.fieldPath))switch(ne.op){case"==":case"in":M.set(z.fieldPath.canonicalString(),ne.value);break;case"not-in":case"!=":return M.set(z.fieldPath.canonicalString(),ne.value),Array.from(M.values())}return null}(u,c),f=function(b,x){const M=[];let z=!0;for(const ne of wi(x)){const H=ne.kind===0?Nv(b,ne.fieldPath,b.startAt):Pv(b,ne.fieldPath,b.startAt);M.push(H.value),z&&(z=H.inclusive)}return new Qr(M,z)}(u,c),g=function(b,x){const M=[];let z=!0;for(const ne of wi(x)){const H=ne.kind===0?Pv(b,ne.fieldPath,b.endAt):Nv(b,ne.fieldPath,b.endAt);M.push(H.value),z&&(z=H.inclusive)}return new Qr(M,z)}(u,c),y=this.tn(c,u,f),E=this.tn(c,u,g),v=this.en(c,u,d),I=this.nn(c.indexId,h,y,f.inclusive,E,g.inclusive,v);return w.forEach(I,b=>r.H(b,n.limit).next(x=>{x.forEach(M=>{const z=L.fromSegments(M.documentKey);o.has(z)||(o=o.add(z),a.push(z))})}))}).next(()=>a)}return w.resolve(null)})}Ze(e){let n=this.Ye.get(e);return n||(e.filters.length===0?n=[e]:n=HM(Ie.create(e.filters,"and")).map(r=>vf(e.path,e.collectionGroup,e.orderBy,r.getFilters(),e.limit,e.startAt,e.endAt)),this.Ye.set(e,n),n)}nn(e,n,r,i,s,o,a){const c=(n!=null?n.length:1)*Math.max(r.length,s.length),u=c/(n!=null?n.length:1),l=[];for(let h=0;h<c;++h){const d=n?this.sn(n[h/u]):Qc,f=this.rn(e,d,r[h%u],i),g=this.on(e,d,s[h%u],o),y=a.map(E=>this.rn(e,d,E,!0));l.push(...this.createRange(f,g,y))}return l}rn(e,n,r,i){const s=new ki(e,L.empty(),n,r);return i?s:s.qe()}on(e,n,r,i){const s=new ki(e,L.empty(),n,r);return i?s.qe():s}Xe(e,n){const r=new zM(n),i=n.collectionGroup!=null?n.collectionGroup:n.path.lastSegment();return this.getFieldIndexes(e,i).next(s=>{let o=null;for(const a of s)r.Qe(a)&&(!o||a.fields.length>o.fields.length)&&(o=a);return o})}getIndexType(e,n){let r=2;const i=this.Ze(n);return w.forEach(i,s=>this.Xe(e,s).next(o=>{o?r!==0&&o.fields.length<function(a){let c=new Se(Xe.comparator),u=!1;for(const l of a.filters)for(const h of l.getFlattenedFilters())h.field.isKeyField()||(h.op==="array-contains"||h.op==="array-contains-any"?u=!0:c=c.add(h.field));for(const l of a.orderBy)l.field.isKeyField()||(c=c.add(l.field));return c.size+(u?1:0)}(s)&&(r=1):r=0})).next(()=>function(s){return s.limit!==null}(n)&&i.length>1&&r===2?1:r)}un(e,n){const r=new Vo;for(const i of wi(e)){const s=n.data.field(i.fieldPath);if(s==null)return null;const o=r.Le(i.kind);Si.pe.oe(s,o)}return r.$e()}sn(e){const n=new Vo;return Si.pe.oe(e,n.Le(0)),n.$e()}cn(e,n){const r=new Vo;return Si.pe.oe(Yi(this.databaseId,n),r.Le(function(i){const s=wi(i);return s.length===0?0:s[s.length-1].kind}(e))),r.$e()}en(e,n,r){if(r===null)return[];let i=[];i.push(new Vo);let s=0;for(const o of wi(e)){const a=r[s++];for(const c of i)if(this.an(n,o.fieldPath)&&ja(a))i=this.hn(i,o,a);else{const u=c.Le(o.kind);Si.pe.oe(a,u)}}return this.ln(i)}tn(e,n,r){return this.en(e,n,r.position)}ln(e){const n=[];for(let r=0;r<e.length;++r)n[r]=e[r].$e();return n}hn(e,n,r){const i=[...e],s=[];for(const o of r.arrayValue.values||[])for(const a of i){const c=new Vo;c.seed(a.$e()),Si.pe.oe(o,c.Le(n.kind)),s.push(c)}return s}an(e,n){return!!e.filters.find(r=>r instanceof de&&r.field.isEqual(n)&&(r.op==="in"||r.op==="not-in"))}getFieldIndexes(e,n){const r=Xc(e),i=$o(e);return(n?r.j("collectionGroupIndex",IDBKeyRange.bound(n,n)):r.j()).next(s=>{const o=[];return w.forEach(s,a=>i.get([a.indexId,this.uid]).next(c=>{o.push(function(u,l){const h=l?new Zu(l.sequenceNumber,new en(es(l.readTime),new L(Mn(l.documentKey)),l.largestBatchId)):Zu.empty(),d=u.fields.map(([f,g])=>new RL(Xe.fromServerFormat(f),g));return new j0(u.indexId,u.collectionGroup,d,h)}(a,c))})).next(()=>o)})}getNextCollectionGroupToUpdate(e){return this.getFieldIndexes(e).next(n=>n.length===0?null:(n.sort((r,i)=>{const s=r.indexState.sequenceNumber-i.indexState.sequenceNumber;return s!==0?s:ae(r.collectionGroup,i.collectionGroup)}),n[0].collectionGroup))}updateCollectionGroup(e,n,r){const i=Xc(e),s=$o(e);return this.fn(e).next(o=>i.j("collectionGroupIndex",IDBKeyRange.bound(n,n)).next(a=>w.forEach(a,c=>s.put(zv(c.indexId,this.user,o,r)))))}updateIndexEntries(e,n){const r=new Map;return w.forEach(n,(i,s)=>{const o=r.get(i.collectionGroup);return(o?w.resolve(o):this.getFieldIndexes(e,i.collectionGroup)).next(a=>(r.set(i.collectionGroup,a),w.forEach(a,c=>this.dn(e,i,c).next(u=>{const l=this.wn(s,c);return u.isEqual(l)?w.resolve():this._n(e,s,c,u,l)}))))})}mn(e,n,r,i){return Bo(e).put({indexId:i.indexId,uid:this.uid,arrayValue:i.arrayValue,directionalValue:i.directionalValue,orderedDocumentKey:this.cn(r,n.key),documentKey:n.key.path.toArray()})}gn(e,n,r,i){return Bo(e).delete([i.indexId,this.uid,i.arrayValue,i.directionalValue,this.cn(r,n.key),n.key.path.toArray()])}dn(e,n,r){const i=Bo(e);let s=new Se(Ar);return i.Z({index:"documentKeyIndex",range:IDBKeyRange.only([r.indexId,this.uid,this.cn(r,n)])},(o,a)=>{s=s.add(new ki(r.indexId,n,a.arrayValue,a.directionalValue))}).next(()=>s)}wn(e,n){let r=new Se(Ar);const i=this.un(n,e);if(i==null)return r;const s=df(n);if(s!=null){const o=e.data.field(s.fieldPath);if(ja(o))for(const a of o.arrayValue.values||[])r=r.add(new ki(n.indexId,e.key,this.sn(a),i))}else r=r.add(new ki(n.indexId,e.key,Qc,i));return r}_n(e,n,r,i,s){R("IndexedDbIndexManager","Updating index entries for document '%s'",n.key);const o=[];return function(a,c,u,l,h){const d=a.getIterator(),f=c.getIterator();let g=ws(d),y=ws(f);for(;g||y;){let E=!1,v=!1;if(g&&y){const I=u(g,y);I<0?v=!0:I>0&&(E=!0)}else g!=null?v=!0:E=!0;E?(l(y),y=ws(f)):v?(h(g),g=ws(d)):(g=ws(d),y=ws(f))}}(i,s,Ar,a=>{o.push(this.mn(e,n,r,a))},a=>{o.push(this.gn(e,n,r,a))}),w.waitFor(o)}fn(e){let n=1;return $o(e).Z({index:"sequenceNumberIndex",reverse:!0,range:IDBKeyRange.upperBound([this.uid,Number.MAX_SAFE_INTEGER])},(r,i,s)=>{s.done(),n=i.sequenceNumber+1}).next(()=>n)}createRange(e,n,r){r=r.sort((o,a)=>Ar(o,a)).filter((o,a,c)=>!a||Ar(o,c[a-1])!==0);const i=[];i.push(e);for(const o of r){const a=Ar(o,e),c=Ar(o,n);if(a===0)i[0]=e.qe();else if(a>0&&c<0)i.push(o),i.push(o.qe());else if(c>0)break}i.push(n);const s=[];for(let o=0;o<i.length;o+=2){if(this.yn(i[o],i[o+1]))return[];const a=[i[o].indexId,this.uid,i[o].arrayValue,i[o].directionalValue,Qc,[]],c=[i[o+1].indexId,this.uid,i[o+1].arrayValue,i[o+1].directionalValue,Qc,[]];s.push(IDBKeyRange.bound(a,c))}return s}yn(e,n){return Ar(e,n)>0}getMinOffsetFromCollectionGroup(e,n){return this.getFieldIndexes(e,n).next(Xv)}getMinOffset(e,n){return w.mapArray(this.Ze(n),r=>this.Xe(e,r).next(i=>i||$())).next(Xv)}}function Qv(t){return ft(t,"collectionParents")}function Bo(t){return ft(t,"indexEntries")}function Xc(t){return ft(t,"indexConfiguration")}function $o(t){return ft(t,"indexState")}function Xv(t){X(t.length!==0);let e=t[0].indexState.offset,n=e.largestBatchId;for(let r=1;r<t.length;r++){const i=t[r].indexState.offset;um(i,e)<0&&(e=i),n<i.largestBatchId&&(n=i.largestBatchId)}return new en(e.readTime,e.documentKey,n)}/**
 * @license
 * Copyright 2018 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Jv={didRun:!1,sequenceNumbersCollected:0,targetsRemoved:0,documentsRemoved:0};class qt{constructor(e,n,r){this.cacheSizeCollectionThreshold=e,this.percentileToCollect=n,this.maximumSequenceNumbersToCollect=r}static withCacheSize(e){return new qt(e,qt.DEFAULT_COLLECTION_PERCENTILE,qt.DEFAULT_MAX_SEQUENCE_NUMBERS_TO_COLLECT)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function HE(t,e,n){const r=t.store("mutations"),i=t.store("documentMutations"),s=[],o=IDBKeyRange.only(n.batchId);let a=0;const c=r.Z({range:o},(l,h,d)=>(a++,d.delete()));s.push(c.next(()=>{X(a===1)}));const u=[];for(const l of n.mutations){const h=Y0(e,l.key.path,n.batchId);s.push(i.delete(h)),u.push(l.key)}return w.waitFor(s).next(()=>u)}function sl(t){if(!t)return 0;let e;if(t.document)e=t.document;else if(t.unknownDocument)e=t.unknownDocument;else{if(!t.noDocument)throw $();e=t.noDocument}return JSON.stringify(e).length}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */qt.DEFAULT_COLLECTION_PERCENTILE=10,qt.DEFAULT_MAX_SEQUENCE_NUMBERS_TO_COLLECT=1e3,qt.DEFAULT=new qt(41943040,qt.DEFAULT_COLLECTION_PERCENTILE,qt.DEFAULT_MAX_SEQUENCE_NUMBERS_TO_COLLECT),qt.DISABLED=new qt(-1,0,0);class hh{constructor(e,n,r,i){this.userId=e,this.serializer=n,this.indexManager=r,this.referenceDelegate=i,this.pn={}}static ie(e,n,r,i){X(e.uid!=="");const s=e.isAuthenticated()?e.uid:"";return new hh(s,n,r,i)}checkEmpty(e){let n=!0;const r=IDBKeyRange.bound([this.userId,Number.NEGATIVE_INFINITY],[this.userId,Number.POSITIVE_INFINITY]);return Cr(e).Z({index:"userMutationsIndex",range:r},(i,s,o)=>{n=!1,o.done()}).next(()=>n)}addMutationBatch(e,n,r,i){const s=ks(e),o=Cr(e);return o.add({}).next(a=>{X(typeof a=="number");const c=new gm(a,n,r,i),u=function(d,f,g){const y=g.baseMutations.map(v=>Ka(d.se,v)),E=g.mutations.map(v=>Ka(d.se,v));return{userId:f,batchId:g.batchId,localWriteTimeMs:g.localWriteTime.toMillis(),baseMutations:y,mutations:E}}(this.serializer,this.userId,c),l=[];let h=new Se((d,f)=>ae(d.canonicalString(),f.canonicalString()));for(const d of i){const f=Y0(this.userId,d.key.path,a);h=h.add(d.key.path.popLast()),l.push(o.put(u)),l.push(s.put(f,LL))}return h.forEach(d=>{l.push(this.indexManager.addToCollectionParentIndex(e,d))}),e.addOnCommittedListener(()=>{this.pn[a]=c.keys()}),w.waitFor(l).next(()=>c)})}lookupMutationBatch(e,n){return Cr(e).get(n).next(r=>r?(X(r.userId===this.userId),Ti(this.serializer,r)):null)}In(e,n){return this.pn[n]?w.resolve(this.pn[n]):this.lookupMutationBatch(e,n).next(r=>{if(r){const i=r.keys();return this.pn[n]=i,i}return null})}getNextMutationBatchAfterBatchId(e,n){const r=n+1,i=IDBKeyRange.lowerBound([this.userId,r]);let s=null;return Cr(e).Z({index:"userMutationsIndex",range:i},(o,a,c)=>{a.userId===this.userId&&(X(a.batchId>=r),s=Ti(this.serializer,a)),c.done()}).next(()=>s)}getHighestUnacknowledgedBatchId(e){const n=IDBKeyRange.upperBound([this.userId,Number.POSITIVE_INFINITY]);let r=-1;return Cr(e).Z({index:"userMutationsIndex",range:n,reverse:!0},(i,s,o)=>{r=s.batchId,o.done()}).next(()=>r)}getAllMutationBatches(e){const n=IDBKeyRange.bound([this.userId,-1],[this.userId,Number.POSITIVE_INFINITY]);return Cr(e).j("userMutationsIndex",n).next(r=>r.map(i=>Ti(this.serializer,i)))}getAllMutationBatchesAffectingDocumentKey(e,n){const r=Eu(this.userId,n.path),i=IDBKeyRange.lowerBound(r),s=[];return ks(e).Z({range:i},(o,a,c)=>{const[u,l,h]=o,d=Mn(l);if(u===this.userId&&n.path.isEqual(d))return Cr(e).get(h).next(f=>{if(!f)throw $();X(f.userId===this.userId),s.push(Ti(this.serializer,f))});c.done()}).next(()=>s)}getAllMutationBatchesAffectingDocumentKeys(e,n){let r=new Se(ae);const i=[];return n.forEach(s=>{const o=Eu(this.userId,s.path),a=IDBKeyRange.lowerBound(o),c=ks(e).Z({range:a},(u,l,h)=>{const[d,f,g]=u,y=Mn(f);d===this.userId&&s.path.isEqual(y)?r=r.add(g):h.done()});i.push(c)}),w.waitFor(i).next(()=>this.Tn(e,r))}getAllMutationBatchesAffectingQuery(e,n){const r=n.path,i=r.length+1,s=Eu(this.userId,r),o=IDBKeyRange.lowerBound(s);let a=new Se(ae);return ks(e).Z({range:o},(c,u,l)=>{const[h,d,f]=c,g=Mn(d);h===this.userId&&r.isPrefixOf(g)?g.length===i&&(a=a.add(f)):l.done()}).next(()=>this.Tn(e,a))}Tn(e,n){const r=[],i=[];return n.forEach(s=>{i.push(Cr(e).get(s).next(o=>{if(o===null)throw $();X(o.userId===this.userId),r.push(Ti(this.serializer,o))}))}),w.waitFor(i).next(()=>r)}removeMutationBatch(e,n){return HE(e.at,this.userId,n).next(r=>(e.addOnCommittedListener(()=>{this.En(n.batchId)}),w.forEach(r,i=>this.referenceDelegate.markPotentiallyOrphaned(e,i))))}En(e){delete this.pn[e]}performConsistencyCheck(e){return this.checkEmpty(e).next(n=>{if(!n)return w.resolve();const r=IDBKeyRange.lowerBound([this.userId]),i=[];return ks(e).Z({range:r},(s,o,a)=>{if(s[0]===this.userId){const c=Mn(s[1]);i.push(c)}else a.done()}).next(()=>{X(i.length===0)})})}containsKey(e,n){return KE(e,this.userId,n)}An(e){return WE(e).get(this.userId).next(n=>n||{userId:this.userId,lastAcknowledgedBatchId:-1,lastStreamToken:""})}}function KE(t,e,n){const r=Eu(e,n.path),i=r[1],s=IDBKeyRange.lowerBound(r);let o=!1;return ks(t).Z({range:s,Y:!0},(a,c,u)=>{const[l,h,d]=a;l===e&&h===i&&(o=!0),u.done()}).next(()=>o)}function Cr(t){return ft(t,"mutations")}function ks(t){return ft(t,"documentMutations")}function WE(t){return ft(t,"mutationQueues")}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ts{constructor(e){this.Rn=e}next(){return this.Rn+=2,this.Rn}static vn(){return new ts(0)}static bn(){return new ts(-1)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class GM{constructor(e,n){this.referenceDelegate=e,this.serializer=n}allocateTargetId(e){return this.Pn(e).next(n=>{const r=new ts(n.highestTargetId);return n.highestTargetId=r.next(),this.Vn(e,n).next(()=>n.highestTargetId)})}getLastRemoteSnapshotVersion(e){return this.Pn(e).next(n=>J.fromTimestamp(new Ue(n.lastRemoteSnapshotVersion.seconds,n.lastRemoteSnapshotVersion.nanoseconds)))}getHighestSequenceNumber(e){return this.Pn(e).next(n=>n.highestListenSequenceNumber)}setTargetsMetadata(e,n,r){return this.Pn(e).next(i=>(i.highestListenSequenceNumber=n,r&&(i.lastRemoteSnapshotVersion=r.toTimestamp()),n>i.highestListenSequenceNumber&&(i.highestListenSequenceNumber=n),this.Vn(e,i)))}addTargetData(e,n){return this.Sn(e,n).next(()=>this.Pn(e).next(r=>(r.targetCount+=1,this.Dn(n,r),this.Vn(e,r))))}updateTargetData(e,n){return this.Sn(e,n)}removeTargetData(e,n){return this.removeMatchingKeysForTargetId(e,n.targetId).next(()=>_s(e).delete(n.targetId)).next(()=>this.Pn(e)).next(r=>(X(r.targetCount>0),r.targetCount-=1,this.Vn(e,r)))}removeTargets(e,n,r){let i=0;const s=[];return _s(e).Z((o,a)=>{const c=Jo(a);c.sequenceNumber<=n&&r.get(c.targetId)===null&&(i++,s.push(this.removeTargetData(e,c)))}).next(()=>w.waitFor(s)).next(()=>i)}forEachTarget(e,n){return _s(e).Z((r,i)=>{const s=Jo(i);n(s)})}Pn(e){return Zv(e).get("targetGlobalKey").next(n=>(X(n!==null),n))}Vn(e,n){return Zv(e).put("targetGlobalKey",n)}Sn(e,n){return _s(e).put(qE(this.serializer,n))}Dn(e,n){let r=!1;return e.targetId>n.highestTargetId&&(n.highestTargetId=e.targetId,r=!0),e.sequenceNumber>n.highestListenSequenceNumber&&(n.highestListenSequenceNumber=e.sequenceNumber,r=!0),r}getTargetCount(e){return this.Pn(e).next(n=>n.targetCount)}getTargetData(e,n){const r=Qi(n),i=IDBKeyRange.bound([r,Number.NEGATIVE_INFINITY],[r,Number.POSITIVE_INFINITY]);let s=null;return _s(e).Z({range:i,index:"queryTargetsIndex"},(o,a,c)=>{const u=Jo(a);bc(n,u.target)&&(s=u,c.done())}).next(()=>s)}addMatchingKeys(e,n,r){const i=[],s=Dr(e);return n.forEach(o=>{const a=Ft(o.path);i.push(s.put({targetId:r,path:a})),i.push(this.referenceDelegate.addReference(e,r,o))}),w.waitFor(i)}removeMatchingKeys(e,n,r){const i=Dr(e);return w.forEach(n,s=>{const o=Ft(s.path);return w.waitFor([i.delete([r,o]),this.referenceDelegate.removeReference(e,r,s)])})}removeMatchingKeysForTargetId(e,n){const r=Dr(e),i=IDBKeyRange.bound([n],[n+1],!1,!0);return r.delete(i)}getMatchingKeysForTargetId(e,n){const r=IDBKeyRange.bound([n],[n+1],!1,!0),i=Dr(e);let s=ce();return i.Z({range:r,Y:!0},(o,a,c)=>{const u=Mn(o[1]),l=new L(u);s=s.add(l)}).next(()=>s)}containsKey(e,n){const r=Ft(n.path),i=IDBKeyRange.bound([r],[q0(r)],!1,!0);let s=0;return Dr(e).Z({index:"documentTargetsIndex",Y:!0,range:i},([o,a],c,u)=>{o!==0&&(s++,u.done())}).next(()=>s>0)}ne(e,n){return _s(e).get(n).next(r=>r?Jo(r):null)}}function _s(t){return ft(t,"targets")}function Zv(t){return ft(t,"targetGlobal")}function Dr(t){return ft(t,"targetDocuments")}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function ew([t,e],[n,r]){const i=ae(t,n);return i===0?ae(e,r):i}class YM{constructor(e){this.Cn=e,this.buffer=new Se(ew),this.xn=0}Nn(){return++this.xn}kn(e){const n=[e,this.Nn()];if(this.buffer.size<this.Cn)this.buffer=this.buffer.add(n);else{const r=this.buffer.last();ew(n,r)<0&&(this.buffer=this.buffer.delete(r).add(n))}}get maxValue(){return this.buffer.last()[0]}}class QM{constructor(e,n,r){this.garbageCollector=e,this.asyncQueue=n,this.localStore=r,this.On=null}start(){this.garbageCollector.params.cacheSizeCollectionThreshold!==-1&&this.$n(6e4)}stop(){this.On&&(this.On.cancel(),this.On=null)}get started(){return this.On!==null}$n(e){R("LruGarbageCollector",`Garbage collection scheduled in ${e}ms`),this.On=this.asyncQueue.enqueueAfterDelay("lru_garbage_collection",e,async()=>{this.On=null;try{await this.localStore.collectGarbage(this.garbageCollector)}catch(n){ai(n)?R("LruGarbageCollector","Ignoring IndexedDB error during garbage collection: ",n):await oi(n)}await this.$n(3e5)})}}class XM{constructor(e,n){this.Mn=e,this.params=n}calculateTargetCount(e,n){return this.Mn.Fn(e).next(r=>Math.floor(n/100*r))}nthSequenceNumber(e,n){if(n===0)return w.resolve(zt.ct);const r=new YM(n);return this.Mn.forEachTarget(e,i=>r.kn(i.sequenceNumber)).next(()=>this.Mn.Bn(e,i=>r.kn(i))).next(()=>r.maxValue)}removeTargets(e,n,r){return this.Mn.removeTargets(e,n,r)}removeOrphanedDocuments(e,n){return this.Mn.removeOrphanedDocuments(e,n)}collect(e,n){return this.params.cacheSizeCollectionThreshold===-1?(R("LruGarbageCollector","Garbage collection skipped; disabled"),w.resolve(Jv)):this.getCacheSize(e).next(r=>r<this.params.cacheSizeCollectionThreshold?(R("LruGarbageCollector",`Garbage collection skipped; Cache size ${r} is lower than threshold ${this.params.cacheSizeCollectionThreshold}`),Jv):this.Ln(e,n))}getCacheSize(e){return this.Mn.getCacheSize(e)}Ln(e,n){let r,i,s,o,a,c,u;const l=Date.now();return this.calculateTargetCount(e,this.params.percentileToCollect).next(h=>(h>this.params.maximumSequenceNumbersToCollect?(R("LruGarbageCollector",`Capping sequence numbers to collect down to the maximum of ${this.params.maximumSequenceNumbersToCollect} from ${h}`),i=this.params.maximumSequenceNumbersToCollect):i=h,o=Date.now(),this.nthSequenceNumber(e,i))).next(h=>(r=h,a=Date.now(),this.removeTargets(e,r,n))).next(h=>(s=h,c=Date.now(),this.removeOrphanedDocuments(e,r))).next(h=>(u=Date.now(),hf()<=pe.DEBUG&&R("LruGarbageCollector",`LRU Garbage Collection
	Counted targets in ${o-l}ms
	Determined least recently used ${i} in `+(a-o)+`ms
	Removed ${s} targets in `+(c-a)+`ms
	Removed ${h} documents in `+(u-c)+`ms
Total Duration: ${u-l}ms`),w.resolve({didRun:!0,sequenceNumbersCollected:i,targetsRemoved:s,documentsRemoved:h})))}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class JM{constructor(e,n){this.db=e,this.garbageCollector=function(r,i){return new XM(r,i)}(this,n)}Fn(e){const n=this.qn(e);return this.db.getTargetCache().getTargetCount(e).next(r=>n.next(i=>r+i))}qn(e){let n=0;return this.Bn(e,r=>{n++}).next(()=>n)}forEachTarget(e,n){return this.db.getTargetCache().forEachTarget(e,n)}Bn(e,n){return this.Un(e,(r,i)=>n(i))}addReference(e,n,r){return Jc(e,r)}removeReference(e,n,r){return Jc(e,r)}removeTargets(e,n,r){return this.db.getTargetCache().removeTargets(e,n,r)}markPotentiallyOrphaned(e,n){return Jc(e,n)}Kn(e,n){return function(r,i){let s=!1;return WE(r).X(o=>KE(r,o,i).next(a=>(a&&(s=!0),w.resolve(!a)))).next(()=>s)}(e,n)}removeOrphanedDocuments(e,n){const r=this.db.getRemoteDocumentCache().newChangeBuffer(),i=[];let s=0;return this.Un(e,(o,a)=>{if(a<=n){const c=this.Kn(e,o).next(u=>{if(!u)return s++,r.getEntry(e,o).next(()=>(r.removeEntry(o,J.min()),Dr(e).delete([0,Ft(o.path)])))});i.push(c)}}).next(()=>w.waitFor(i)).next(()=>r.apply(e)).next(()=>s)}removeTarget(e,n){const r=n.withSequenceNumber(e.currentSequenceNumber);return this.db.getTargetCache().updateTargetData(e,r)}updateLimboDocument(e,n){return Jc(e,n)}Un(e,n){const r=Dr(e);let i,s=zt.ct;return r.Z({index:"documentTargetsIndex"},([o,a],{path:c,sequenceNumber:u})=>{o===0?(s!==zt.ct&&n(new L(Mn(i)),s),s=u,i=c):s=zt.ct}).next(()=>{s!==zt.ct&&n(new L(Mn(i)),s)})}getCacheSize(e){return this.db.getRemoteDocumentCache().getSize(e)}}function Jc(t,e){return Dr(t).put(function(n,r){return{targetId:0,path:Ft(n.path),sequenceNumber:r}}(e,t.currentSequenceNumber))}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class GE{constructor(){this.changes=new ci(e=>e.toString(),(e,n)=>e.isEqual(n)),this.changesApplied=!1}addEntry(e){this.assertNotApplied(),this.changes.set(e.key,e)}removeEntry(e,n){this.assertNotApplied(),this.changes.set(e,Ne.newInvalidDocument(e).setReadTime(n))}getEntry(e,n){this.assertNotApplied();const r=this.changes.get(n);return r!==void 0?w.resolve(r):this.getFromCache(e,n)}getEntries(e,n){return this.getAllFromCache(e,n)}apply(e){return this.assertNotApplied(),this.changesApplied=!0,this.applyChanges(e)}assertNotApplied(){}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ZM{constructor(e){this.serializer=e}setIndexManager(e){this.indexManager=e}addEntry(e,n,r){return gi(e).put(r)}removeEntry(e,n,r){return gi(e).delete(function(i,s){const o=i.path.toArray();return[o.slice(0,o.length-2),o[o.length-2],rl(s),o[o.length-1]]}(n,r))}updateMetadata(e,n){return this.getMetadata(e).next(r=>(r.byteSize+=n,this.Gn(e,r)))}getEntry(e,n){let r=Ne.newInvalidDocument(n);return gi(e).Z({index:"documentKeyIndex",range:IDBKeyRange.only(qo(n))},(i,s)=>{r=this.Qn(n,s)}).next(()=>r)}zn(e,n){let r={size:0,document:Ne.newInvalidDocument(n)};return gi(e).Z({index:"documentKeyIndex",range:IDBKeyRange.only(qo(n))},(i,s)=>{r={document:this.Qn(n,s),size:sl(s)}}).next(()=>r)}getEntries(e,n){let r=Kt();return this.jn(e,n,(i,s)=>{const o=this.Qn(i,s);r=r.insert(i,o)}).next(()=>r)}Wn(e,n){let r=Kt(),i=new We(L.comparator);return this.jn(e,n,(s,o)=>{const a=this.Qn(s,o);r=r.insert(s,a),i=i.insert(s,sl(o))}).next(()=>({documents:r,Hn:i}))}jn(e,n,r){if(n.isEmpty())return w.resolve();let i=new Se(rw);n.forEach(c=>i=i.add(c));const s=IDBKeyRange.bound(qo(i.first()),qo(i.last())),o=i.getIterator();let a=o.getNext();return gi(e).Z({index:"documentKeyIndex",range:s},(c,u,l)=>{const h=L.fromSegments([...u.prefixPath,u.collectionGroup,u.documentId]);for(;a&&rw(a,h)<0;)r(a,null),a=o.getNext();a&&a.isEqual(h)&&(r(a,u),a=o.hasNext()?o.getNext():null),a?l.G(qo(a)):l.done()}).next(()=>{for(;a;)r(a,null),a=o.hasNext()?o.getNext():null})}getDocumentsMatchingQuery(e,n,r,i){const s=n.path,o=[s.popLast().toArray(),s.lastSegment(),rl(r.readTime),r.documentKey.path.isEmpty()?"":r.documentKey.path.lastSegment()],a=[s.popLast().toArray(),s.lastSegment(),[Number.MAX_SAFE_INTEGER,Number.MAX_SAFE_INTEGER],""];return gi(e).j(IDBKeyRange.bound(o,a,!0)).next(c=>{let u=Kt();for(const l of c){const h=this.Qn(L.fromSegments(l.prefixPath.concat(l.collectionGroup,l.documentId)),l);h.isFoundDocument()&&(Ec(n,h)||i.has(h.key))&&(u=u.insert(h.key,h))}return u})}getAllFromCollectionGroup(e,n,r,i){let s=Kt();const o=nw(n,r),a=nw(n,en.max());return gi(e).Z({index:"collectionGroupIndex",range:IDBKeyRange.bound(o,a,!0)},(c,u,l)=>{const h=this.Qn(L.fromSegments(u.prefixPath.concat(u.collectionGroup,u.documentId)),u);s=s.insert(h.key,h),s.size===i&&l.done()}).next(()=>s)}newChangeBuffer(e){return new e2(this,!!e&&e.trackRemovals)}getSize(e){return this.getMetadata(e).next(n=>n.byteSize)}getMetadata(e){return tw(e).get("remoteDocumentGlobalKey").next(n=>(X(!!n),n))}Gn(e,n){return tw(e).put("remoteDocumentGlobalKey",n)}Qn(e,n){if(n){const r=UM(this.serializer,n);if(!(r.isNoDocument()&&r.version.isEqual(J.min())))return r}return Ne.newInvalidDocument(e)}}function YE(t){return new ZM(t)}class e2 extends GE{constructor(e,n){super(),this.Jn=e,this.trackRemovals=n,this.Yn=new ci(r=>r.toString(),(r,i)=>r.isEqual(i))}applyChanges(e){const n=[];let r=0,i=new Se((s,o)=>ae(s.canonicalString(),o.canonicalString()));return this.changes.forEach((s,o)=>{const a=this.Yn.get(s);if(n.push(this.Jn.removeEntry(e,s,a.readTime)),o.isValidDocument()){const c=qv(this.Jn.serializer,o);i=i.add(s.path.popLast());const u=sl(c);r+=u-a.size,n.push(this.Jn.addEntry(e,s,c))}else if(r-=a.size,this.trackRemovals){const c=qv(this.Jn.serializer,o.convertToNoDocument(J.min()));n.push(this.Jn.addEntry(e,s,c))}}),i.forEach(s=>{n.push(this.Jn.indexManager.addToCollectionParentIndex(e,s))}),n.push(this.Jn.updateMetadata(e,r)),w.waitFor(n)}getFromCache(e,n){return this.Jn.zn(e,n).next(r=>(this.Yn.set(n,{size:r.size,readTime:r.document.readTime}),r.document))}getAllFromCache(e,n){return this.Jn.Wn(e,n).next(({documents:r,Hn:i})=>(i.forEach((s,o)=>{this.Yn.set(s,{size:o,readTime:r.get(s).readTime})}),r))}}function tw(t){return ft(t,"remoteDocumentGlobal")}function gi(t){return ft(t,"remoteDocumentsV14")}function qo(t){const e=t.path.toArray();return[e.slice(0,e.length-2),e[e.length-2],e[e.length-1]]}function nw(t,e){const n=e.documentKey.path.toArray();return[t,rl(e.readTime),n.slice(0,n.length-2),n.length>0?n[n.length-1]:""]}function rw(t,e){const n=t.path.toArray(),r=e.path.toArray();let i=0;for(let s=0;s<n.length-2&&s<r.length-2;++s)if(i=ae(n[s],r[s]),i)return i;return i=ae(n.length,r.length),i||(i=ae(n[n.length-2],r[r.length-2]),i||ae(n[n.length-1],r[r.length-1]))}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 *//**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class t2{constructor(e,n){this.overlayedDocument=e,this.mutatedFields=n}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class QE{constructor(e,n,r,i){this.remoteDocumentCache=e,this.mutationQueue=n,this.documentOverlayCache=r,this.indexManager=i}getDocument(e,n){let r=null;return this.documentOverlayCache.getOverlay(e,n).next(i=>(r=i,this.remoteDocumentCache.getEntry(e,n))).next(i=>(r!==null&&da(r.mutation,i,Ht.empty(),Ue.now()),i))}getDocuments(e,n){return this.remoteDocumentCache.getEntries(e,n).next(r=>this.getLocalViewOfDocuments(e,r,ce()).next(()=>r))}getLocalViewOfDocuments(e,n,r=ce()){const i=Fn();return this.populateOverlays(e,i,n).next(()=>this.computeViews(e,n,i,r).next(s=>{let o=Xo();return s.forEach((a,c)=>{o=o.insert(a,c.overlayedDocument)}),o}))}getOverlayedDocuments(e,n){const r=Fn();return this.populateOverlays(e,r,n).next(()=>this.computeViews(e,n,r,ce()))}populateOverlays(e,n,r){const i=[];return r.forEach(s=>{n.has(s)||i.push(s)}),this.documentOverlayCache.getOverlays(e,i).next(s=>{s.forEach((o,a)=>{n.set(o,a)})})}computeViews(e,n,r,i){let s=Kt();const o=ha(),a=ha();return n.forEach((c,u)=>{const l=r.get(u.key);i.has(u.key)&&(l===void 0||l.mutation instanceof gr)?s=s.insert(u.key,u):l!==void 0?(o.set(u.key,l.mutation.getFieldMask()),da(l.mutation,u,l.mutation.getFieldMask(),Ue.now())):o.set(u.key,Ht.empty())}),this.recalculateAndSaveOverlays(e,s).next(c=>(c.forEach((u,l)=>o.set(u,l)),n.forEach((u,l)=>{var h;return a.set(u,new t2(l,(h=o.get(u))!==null&&h!==void 0?h:null))}),a))}recalculateAndSaveOverlays(e,n){const r=ha();let i=new We((o,a)=>o-a),s=ce();return this.mutationQueue.getAllMutationBatchesAffectingDocumentKeys(e,n).next(o=>{for(const a of o)a.keys().forEach(c=>{const u=n.get(c);if(u===null)return;let l=r.get(c)||Ht.empty();l=a.applyToLocalView(u,l),r.set(c,l);const h=(i.get(a.batchId)||ce()).add(c);i=i.insert(a.batchId,h)})}).next(()=>{const o=[],a=i.getReverseIterator();for(;a.hasNext();){const c=a.getNext(),u=c.key,l=c.value,h=gE();l.forEach(d=>{if(!s.has(d)){const f=TE(n.get(d),r.get(d));f!==null&&h.set(d,f),s=s.add(d)}}),o.push(this.documentOverlayCache.saveOverlays(e,u,h))}return w.waitFor(o)}).next(()=>r)}recalculateAndSaveOverlaysForDocumentKeys(e,n){return this.remoteDocumentCache.getEntries(e,n).next(r=>this.recalculateAndSaveOverlays(e,r))}getDocumentsMatchingQuery(e,n,r){return function(i){return L.isDocumentKey(i.path)&&i.collectionGroup===null&&i.filters.length===0}(n)?this.getDocumentsMatchingDocumentQuery(e,n.path):pm(n)?this.getDocumentsMatchingCollectionGroupQuery(e,n,r):this.getDocumentsMatchingCollectionQuery(e,n,r)}getNextDocuments(e,n,r,i){return this.remoteDocumentCache.getAllFromCollectionGroup(e,n,r,i).next(s=>{const o=i-s.size>0?this.documentOverlayCache.getOverlaysForCollectionGroup(e,n,r.largestBatchId,i-s.size):w.resolve(Fn());let a=-1,c=s;return o.next(u=>w.forEach(u,(l,h)=>(a<h.largestBatchId&&(a=h.largestBatchId),s.get(l)?w.resolve():this.remoteDocumentCache.getEntry(e,l).next(d=>{c=c.insert(l,d)}))).next(()=>this.populateOverlays(e,u,s)).next(()=>this.computeViews(e,c,u,ce())).next(l=>({batchId:a,changes:mE(l)})))})}getDocumentsMatchingDocumentQuery(e,n){return this.getDocument(e,new L(n)).next(r=>{let i=Xo();return r.isFoundDocument()&&(i=i.insert(r.key,r)),i})}getDocumentsMatchingCollectionGroupQuery(e,n,r){const i=n.collectionGroup;let s=Xo();return this.indexManager.getCollectionParents(e,i).next(o=>w.forEach(o,a=>{const c=function(u,l){return new mr(l,null,u.explicitOrderBy.slice(),u.filters.slice(),u.limit,u.limitType,u.startAt,u.endAt)}(n,a.child(i));return this.getDocumentsMatchingCollectionQuery(e,c,r).next(u=>{u.forEach((l,h)=>{s=s.insert(l,h)})})}).next(()=>s))}getDocumentsMatchingCollectionQuery(e,n,r){let i;return this.documentOverlayCache.getOverlaysForCollection(e,n.path,r.largestBatchId).next(s=>(i=s,this.remoteDocumentCache.getDocumentsMatchingQuery(e,n,r,i))).next(s=>{i.forEach((a,c)=>{const u=c.getKey();s.get(u)===null&&(s=s.insert(u,Ne.newInvalidDocument(u)))});let o=Xo();return s.forEach((a,c)=>{const u=i.get(a);u!==void 0&&da(u.mutation,c,Ht.empty(),Ue.now()),Ec(n,c)&&(o=o.insert(a,c))}),o})}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class n2{constructor(e){this.serializer=e,this.Zn=new Map,this.Xn=new Map}getBundleMetadata(e,n){return w.resolve(this.Zn.get(n))}saveBundleMetadata(e,n){var r;return this.Zn.set(n.id,{id:(r=n).id,version:r.version,createTime:Je(r.createTime)}),w.resolve()}getNamedQuery(e,n){return w.resolve(this.Xn.get(n))}saveNamedQuery(e,n){return this.Xn.set(n.name,function(r){return{name:r.name,query:bm(r.bundledQuery),readTime:Je(r.readTime)}}(n)),w.resolve()}}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class r2{constructor(){this.overlays=new We(L.comparator),this.ts=new Map}getOverlay(e,n){return w.resolve(this.overlays.get(n))}getOverlays(e,n){const r=Fn();return w.forEach(n,i=>this.getOverlay(e,i).next(s=>{s!==null&&r.set(i,s)})).next(()=>r)}saveOverlays(e,n,r){return r.forEach((i,s)=>{this.re(e,n,s)}),w.resolve()}removeOverlaysForBatchId(e,n,r){const i=this.ts.get(r);return i!==void 0&&(i.forEach(s=>this.overlays=this.overlays.remove(s)),this.ts.delete(r)),w.resolve()}getOverlaysForCollection(e,n,r){const i=Fn(),s=n.length+1,o=new L(n.child("")),a=this.overlays.getIteratorFrom(o);for(;a.hasNext();){const c=a.getNext().value,u=c.getKey();if(!n.isPrefixOf(u.path))break;u.path.length===s&&c.largestBatchId>r&&i.set(c.getKey(),c)}return w.resolve(i)}getOverlaysForCollectionGroup(e,n,r,i){let s=new We((u,l)=>u-l);const o=this.overlays.getIterator();for(;o.hasNext();){const u=o.getNext().value;if(u.getKey().getCollectionGroup()===n&&u.largestBatchId>r){let l=s.get(u.largestBatchId);l===null&&(l=Fn(),s=s.insert(u.largestBatchId,l)),l.set(u.getKey(),u)}}const a=Fn(),c=s.getIterator();for(;c.hasNext()&&(c.getNext().value.forEach((u,l)=>a.set(u,l)),!(a.size()>=i)););return w.resolve(a)}re(e,n,r){const i=this.overlays.get(r.key);if(i!==null){const o=this.ts.get(i.largestBatchId).delete(r.key);this.ts.set(i.largestBatchId,o)}this.overlays=this.overlays.insert(r.key,new vm(n,r));let s=this.ts.get(n);s===void 0&&(s=ce(),this.ts.set(n,s)),this.ts.set(n,s.add(r.key))}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Tm{constructor(){this.es=new Se(ut.ns),this.ss=new Se(ut.rs)}isEmpty(){return this.es.isEmpty()}addReference(e,n){const r=new ut(e,n);this.es=this.es.add(r),this.ss=this.ss.add(r)}os(e,n){e.forEach(r=>this.addReference(r,n))}removeReference(e,n){this.us(new ut(e,n))}cs(e,n){e.forEach(r=>this.removeReference(r,n))}hs(e){const n=new L(new me([])),r=new ut(n,e),i=new ut(n,e+1),s=[];return this.ss.forEachInRange([r,i],o=>{this.us(o),s.push(o.key)}),s}ls(){this.es.forEach(e=>this.us(e))}us(e){this.es=this.es.delete(e),this.ss=this.ss.delete(e)}fs(e){const n=new L(new me([])),r=new ut(n,e),i=new ut(n,e+1);let s=ce();return this.ss.forEachInRange([r,i],o=>{s=s.add(o.key)}),s}containsKey(e){const n=new ut(e,0),r=this.es.firstAfterOrEqual(n);return r!==null&&e.isEqual(r.key)}}class ut{constructor(e,n){this.key=e,this.ds=n}static ns(e,n){return L.comparator(e.key,n.key)||ae(e.ds,n.ds)}static rs(e,n){return ae(e.ds,n.ds)||L.comparator(e.key,n.key)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class i2{constructor(e,n){this.indexManager=e,this.referenceDelegate=n,this.mutationQueue=[],this.ws=1,this._s=new Se(ut.ns)}checkEmpty(e){return w.resolve(this.mutationQueue.length===0)}addMutationBatch(e,n,r,i){const s=this.ws;this.ws++,this.mutationQueue.length>0&&this.mutationQueue[this.mutationQueue.length-1];const o=new gm(s,n,r,i);this.mutationQueue.push(o);for(const a of i)this._s=this._s.add(new ut(a.key,s)),this.indexManager.addToCollectionParentIndex(e,a.key.path.popLast());return w.resolve(o)}lookupMutationBatch(e,n){return w.resolve(this.gs(n))}getNextMutationBatchAfterBatchId(e,n){const r=n+1,i=this.ys(r),s=i<0?0:i;return w.resolve(this.mutationQueue.length>s?this.mutationQueue[s]:null)}getHighestUnacknowledgedBatchId(){return w.resolve(this.mutationQueue.length===0?-1:this.ws-1)}getAllMutationBatches(e){return w.resolve(this.mutationQueue.slice())}getAllMutationBatchesAffectingDocumentKey(e,n){const r=new ut(n,0),i=new ut(n,Number.POSITIVE_INFINITY),s=[];return this._s.forEachInRange([r,i],o=>{const a=this.gs(o.ds);s.push(a)}),w.resolve(s)}getAllMutationBatchesAffectingDocumentKeys(e,n){let r=new Se(ae);return n.forEach(i=>{const s=new ut(i,0),o=new ut(i,Number.POSITIVE_INFINITY);this._s.forEachInRange([s,o],a=>{r=r.add(a.ds)})}),w.resolve(this.ps(r))}getAllMutationBatchesAffectingQuery(e,n){const r=n.path,i=r.length+1;let s=r;L.isDocumentKey(s)||(s=s.child(""));const o=new ut(new L(s),0);let a=new Se(ae);return this._s.forEachWhile(c=>{const u=c.key.path;return!!r.isPrefixOf(u)&&(u.length===i&&(a=a.add(c.ds)),!0)},o),w.resolve(this.ps(a))}ps(e){const n=[];return e.forEach(r=>{const i=this.gs(r);i!==null&&n.push(i)}),n}removeMutationBatch(e,n){X(this.Is(n.batchId,"removed")===0),this.mutationQueue.shift();let r=this._s;return w.forEach(n.mutations,i=>{const s=new ut(i.key,n.batchId);return r=r.delete(s),this.referenceDelegate.markPotentiallyOrphaned(e,i.key)}).next(()=>{this._s=r})}En(e){}containsKey(e,n){const r=new ut(n,0),i=this._s.firstAfterOrEqual(r);return w.resolve(n.isEqual(i&&i.key))}performConsistencyCheck(e){return this.mutationQueue.length,w.resolve()}Is(e,n){return this.ys(e)}ys(e){return this.mutationQueue.length===0?0:e-this.mutationQueue[0].batchId}gs(e){const n=this.ys(e);return n<0||n>=this.mutationQueue.length?null:this.mutationQueue[n]}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class s2{constructor(e){this.Ts=e,this.docs=new We(L.comparator),this.size=0}setIndexManager(e){this.indexManager=e}addEntry(e,n){const r=n.key,i=this.docs.get(r),s=i?i.size:0,o=this.Ts(n);return this.docs=this.docs.insert(r,{document:n.mutableCopy(),size:o}),this.size+=o-s,this.indexManager.addToCollectionParentIndex(e,r.path.popLast())}removeEntry(e){const n=this.docs.get(e);n&&(this.docs=this.docs.remove(e),this.size-=n.size)}getEntry(e,n){const r=this.docs.get(n);return w.resolve(r?r.document.mutableCopy():Ne.newInvalidDocument(n))}getEntries(e,n){let r=Kt();return n.forEach(i=>{const s=this.docs.get(i);r=r.insert(i,s?s.document.mutableCopy():Ne.newInvalidDocument(i))}),w.resolve(r)}getDocumentsMatchingQuery(e,n,r,i){let s=Kt();const o=n.path,a=new L(o.child("")),c=this.docs.getIteratorFrom(a);for(;c.hasNext();){const{key:u,value:{document:l}}=c.getNext();if(!o.isPrefixOf(u.path))break;u.path.length>o.length+1||um(H0(l),r)<=0||(i.has(l.key)||Ec(n,l))&&(s=s.insert(l.key,l.mutableCopy()))}return w.resolve(s)}getAllFromCollectionGroup(e,n,r,i){$()}Es(e,n){return w.forEach(this.docs,r=>n(r))}newChangeBuffer(e){return new o2(this)}getSize(e){return w.resolve(this.size)}}class o2 extends GE{constructor(e){super(),this.Jn=e}applyChanges(e){const n=[];return this.changes.forEach((r,i)=>{i.isValidDocument()?n.push(this.Jn.addEntry(e,i)):this.Jn.removeEntry(r)}),w.waitFor(n)}getFromCache(e,n){return this.Jn.getEntry(e,n)}getAllFromCache(e,n){return this.Jn.getEntries(e,n)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class a2{constructor(e){this.persistence=e,this.As=new ci(n=>Qi(n),bc),this.lastRemoteSnapshotVersion=J.min(),this.highestTargetId=0,this.Rs=0,this.vs=new Tm,this.targetCount=0,this.bs=ts.vn()}forEachTarget(e,n){return this.As.forEach((r,i)=>n(i)),w.resolve()}getLastRemoteSnapshotVersion(e){return w.resolve(this.lastRemoteSnapshotVersion)}getHighestSequenceNumber(e){return w.resolve(this.Rs)}allocateTargetId(e){return this.highestTargetId=this.bs.next(),w.resolve(this.highestTargetId)}setTargetsMetadata(e,n,r){return r&&(this.lastRemoteSnapshotVersion=r),n>this.Rs&&(this.Rs=n),w.resolve()}Sn(e){this.As.set(e.target,e);const n=e.targetId;n>this.highestTargetId&&(this.bs=new ts(n),this.highestTargetId=n),e.sequenceNumber>this.Rs&&(this.Rs=e.sequenceNumber)}addTargetData(e,n){return this.Sn(n),this.targetCount+=1,w.resolve()}updateTargetData(e,n){return this.Sn(n),w.resolve()}removeTargetData(e,n){return this.As.delete(n.target),this.vs.hs(n.targetId),this.targetCount-=1,w.resolve()}removeTargets(e,n,r){let i=0;const s=[];return this.As.forEach((o,a)=>{a.sequenceNumber<=n&&r.get(a.targetId)===null&&(this.As.delete(o),s.push(this.removeMatchingKeysForTargetId(e,a.targetId)),i++)}),w.waitFor(s).next(()=>i)}getTargetCount(e){return w.resolve(this.targetCount)}getTargetData(e,n){const r=this.As.get(n)||null;return w.resolve(r)}addMatchingKeys(e,n,r){return this.vs.os(n,r),w.resolve()}removeMatchingKeys(e,n,r){this.vs.cs(n,r);const i=this.persistence.referenceDelegate,s=[];return i&&n.forEach(o=>{s.push(i.markPotentiallyOrphaned(e,o))}),w.waitFor(s)}removeMatchingKeysForTargetId(e,n){return this.vs.hs(n),w.resolve()}getMatchingKeysForTargetId(e,n){const r=this.vs.fs(n);return w.resolve(r)}containsKey(e,n){return w.resolve(this.vs.containsKey(n))}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class XE{constructor(e,n){this.Ps={},this.overlays={},this.Vs=new zt(0),this.Ss=!1,this.Ss=!0,this.referenceDelegate=e(this),this.Ds=new a2(this),this.indexManager=new KM,this.remoteDocumentCache=function(r){return new s2(r)}(r=>this.referenceDelegate.Cs(r)),this.serializer=new $E(n),this.xs=new n2(this.serializer)}start(){return Promise.resolve()}shutdown(){return this.Ss=!1,Promise.resolve()}get started(){return this.Ss}setDatabaseDeletedListener(){}setNetworkEnabled(){}getIndexManager(e){return this.indexManager}getDocumentOverlayCache(e){let n=this.overlays[e.toKey()];return n||(n=new r2,this.overlays[e.toKey()]=n),n}getMutationQueue(e,n){let r=this.Ps[e.toKey()];return r||(r=new i2(n,this.referenceDelegate),this.Ps[e.toKey()]=r),r}getTargetCache(){return this.Ds}getRemoteDocumentCache(){return this.remoteDocumentCache}getBundleCache(){return this.xs}runTransaction(e,n,r){R("MemoryPersistence","Starting transaction:",e);const i=new c2(this.Vs.next());return this.referenceDelegate.Ns(),r(i).next(s=>this.referenceDelegate.ks(i).next(()=>s)).toPromise().then(s=>(i.raiseOnCommittedEvent(),s))}Os(e,n){return w.or(Object.values(this.Ps).map(r=>()=>r.containsKey(e,n)))}}class c2 extends W0{constructor(e){super(),this.currentSequenceNumber=e}}class dh{constructor(e){this.persistence=e,this.$s=new Tm,this.Ms=null}static Fs(e){return new dh(e)}get Bs(){if(this.Ms)return this.Ms;throw $()}addReference(e,n,r){return this.$s.addReference(r,n),this.Bs.delete(r.toString()),w.resolve()}removeReference(e,n,r){return this.$s.removeReference(r,n),this.Bs.add(r.toString()),w.resolve()}markPotentiallyOrphaned(e,n){return this.Bs.add(n.toString()),w.resolve()}removeTarget(e,n){this.$s.hs(n.targetId).forEach(i=>this.Bs.add(i.toString()));const r=this.persistence.getTargetCache();return r.getMatchingKeysForTargetId(e,n.targetId).next(i=>{i.forEach(s=>this.Bs.add(s.toString()))}).next(()=>r.removeTargetData(e,n))}Ns(){this.Ms=new Set}ks(e){const n=this.persistence.getRemoteDocumentCache().newChangeBuffer();return w.forEach(this.Bs,r=>{const i=L.fromPath(r);return this.Ls(e,i).next(s=>{s||n.removeEntry(i,J.min())})}).next(()=>(this.Ms=null,n.apply(e)))}updateLimboDocument(e,n){return this.Ls(e,n).next(r=>{r?this.Bs.delete(n.toString()):this.Bs.add(n.toString())})}Cs(e){return 0}Ls(e,n){return w.or([()=>w.resolve(this.$s.containsKey(n)),()=>this.persistence.getTargetCache().containsKey(e,n),()=>this.persistence.Os(e,n)])}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class u2{constructor(e){this.serializer=e}M(e,n,r,i){const s=new sh("createOrUpgrade",n);r<1&&i>=1&&(function(a){a.createObjectStore("owner")}(e),function(a){a.createObjectStore("mutationQueues",{keyPath:"userId"}),a.createObjectStore("mutations",{keyPath:"batchId",autoIncrement:!0}).createIndex("userMutationsIndex",bv,{unique:!0}),a.createObjectStore("documentMutations")}(e),iw(e),function(a){a.createObjectStore("remoteDocuments")}(e));let o=w.resolve();return r<3&&i>=3&&(r!==0&&(function(a){a.deleteObjectStore("targetDocuments"),a.deleteObjectStore("targets"),a.deleteObjectStore("targetGlobal")}(e),iw(e)),o=o.next(()=>function(a){const c=a.store("targetGlobal"),u={highestTargetId:0,highestListenSequenceNumber:0,lastRemoteSnapshotVersion:J.min().toTimestamp(),targetCount:0};return c.put("targetGlobalKey",u)}(s))),r<4&&i>=4&&(r!==0&&(o=o.next(()=>function(a,c){return c.store("mutations").j().next(u=>{a.deleteObjectStore("mutations"),a.createObjectStore("mutations",{keyPath:"batchId",autoIncrement:!0}).createIndex("userMutationsIndex",bv,{unique:!0});const l=c.store("mutations"),h=u.map(d=>l.put(d));return w.waitFor(h)})}(e,s))),o=o.next(()=>{(function(a){a.createObjectStore("clientMetadata",{keyPath:"clientId"})})(e)})),r<5&&i>=5&&(o=o.next(()=>this.qs(s))),r<6&&i>=6&&(o=o.next(()=>(function(a){a.createObjectStore("remoteDocumentGlobal")}(e),this.Us(s)))),r<7&&i>=7&&(o=o.next(()=>this.Ks(s))),r<8&&i>=8&&(o=o.next(()=>this.Gs(e,s))),r<9&&i>=9&&(o=o.next(()=>{(function(a){a.objectStoreNames.contains("remoteDocumentChanges")&&a.deleteObjectStore("remoteDocumentChanges")})(e)})),r<10&&i>=10&&(o=o.next(()=>this.Qs(s))),r<11&&i>=11&&(o=o.next(()=>{(function(a){a.createObjectStore("bundles",{keyPath:"bundleId"})})(e),function(a){a.createObjectStore("namedQueries",{keyPath:"name"})}(e)})),r<12&&i>=12&&(o=o.next(()=>{(function(a){const c=a.createObjectStore("documentOverlays",{keyPath:WL});c.createIndex("collectionPathOverlayIndex",GL,{unique:!1}),c.createIndex("collectionGroupOverlayIndex",YL,{unique:!1})})(e)})),r<13&&i>=13&&(o=o.next(()=>function(a){const c=a.createObjectStore("remoteDocumentsV14",{keyPath:ML});c.createIndex("documentKeyIndex",FL),c.createIndex("collectionGroupIndex",UL)}(e)).next(()=>this.zs(e,s)).next(()=>e.deleteObjectStore("remoteDocuments"))),r<14&&i>=14&&(o=o.next(()=>this.js(e,s))),r<15&&i>=15&&(o=o.next(()=>function(a){a.createObjectStore("indexConfiguration",{keyPath:"indexId",autoIncrement:!0}).createIndex("collectionGroupIndex","collectionGroup",{unique:!1}),a.createObjectStore("indexState",{keyPath:jL}).createIndex("sequenceNumberIndex",zL,{unique:!1}),a.createObjectStore("indexEntries",{keyPath:HL}).createIndex("documentKeyIndex",KL,{unique:!1})}(e))),o}Us(e){let n=0;return e.store("remoteDocuments").Z((r,i)=>{n+=sl(i)}).next(()=>{const r={byteSize:n};return e.store("remoteDocumentGlobal").put("remoteDocumentGlobalKey",r)})}qs(e){const n=e.store("mutationQueues"),r=e.store("mutations");return n.j().next(i=>w.forEach(i,s=>{const o=IDBKeyRange.bound([s.userId,-1],[s.userId,s.lastAcknowledgedBatchId]);return r.j("userMutationsIndex",o).next(a=>w.forEach(a,c=>{X(c.userId===s.userId);const u=Ti(this.serializer,c);return HE(e,s.userId,u).next(()=>{})}))}))}Ks(e){const n=e.store("targetDocuments"),r=e.store("remoteDocuments");return e.store("targetGlobal").get("targetGlobalKey").next(i=>{const s=[];return r.Z((o,a)=>{const c=new me(o),u=function(l){return[0,Ft(l)]}(c);s.push(n.get(u).next(l=>l?w.resolve():(h=>n.put({targetId:0,path:Ft(h),sequenceNumber:i.highestListenSequenceNumber}))(c)))}).next(()=>w.waitFor(s))})}Gs(e,n){e.createObjectStore("collectionParents",{keyPath:qL});const r=n.store("collectionParents"),i=new Em,s=o=>{if(i.add(o)){const a=o.lastSegment(),c=o.popLast();return r.put({collectionId:a,parent:Ft(c)})}};return n.store("remoteDocuments").Z({Y:!0},(o,a)=>{const c=new me(o);return s(c.popLast())}).next(()=>n.store("documentMutations").Z({Y:!0},([o,a,c],u)=>{const l=Mn(a);return s(l.popLast())}))}Qs(e){const n=e.store("targets");return n.Z((r,i)=>{const s=Jo(i),o=qE(this.serializer,s);return n.put(o)})}zs(e,n){const r=n.store("remoteDocuments"),i=[];return r.Z((s,o)=>{const a=n.store("remoteDocumentsV14"),c=(u=o,u.document?new L(me.fromString(u.document.name).popFirst(5)):u.noDocument?L.fromSegments(u.noDocument.path):u.unknownDocument?L.fromSegments(u.unknownDocument.path):$()).path.toArray();var u;/**
* @license
* Copyright 2017 Google LLC
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*   http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/const l={prefixPath:c.slice(0,c.length-2),collectionGroup:c[c.length-2],documentId:c[c.length-1],readTime:o.readTime||[0,0],unknownDocument:o.unknownDocument,noDocument:o.noDocument,document:o.document,hasCommittedMutations:!!o.hasCommittedMutations};i.push(a.put(l))}).next(()=>w.waitFor(i))}js(e,n){const r=n.store("mutations"),i=YE(this.serializer),s=new XE(dh.Fs,this.serializer.se);return r.j().next(o=>{const a=new Map;return o.forEach(c=>{var u;let l=(u=a.get(c.userId))!==null&&u!==void 0?u:ce();Ti(this.serializer,c).keys().forEach(h=>l=l.add(h)),a.set(c.userId,l)}),w.forEach(a,(c,u)=>{const l=new lt(u),h=lh.ie(this.serializer,l),d=s.getIndexManager(l),f=hh.ie(l,this.serializer,d,s.referenceDelegate);return new QE(i,f,h,d).recalculateAndSaveOverlaysForDocumentKeys(new ff(n,zt.ct),c).next()})})}}function iw(t){t.createObjectStore("targetDocuments",{keyPath:BL}).createIndex("documentTargetsIndex",$L,{unique:!0}),t.createObjectStore("targets",{keyPath:"targetId"}).createIndex("queryTargetsIndex",VL,{unique:!0}),t.createObjectStore("targetGlobal")}const fd="Failed to obtain exclusive access to the persistence layer. To allow shared access, multi-tab synchronization has to be enabled in all tabs. If you are using `experimentalForceOwningTab:true`, make sure that only one tab has persistence enabled at any given time.";class Sm{constructor(e,n,r,i,s,o,a,c,u,l,h=15){if(this.allowTabSynchronization=e,this.persistenceKey=n,this.clientId=r,this.Ws=s,this.window=o,this.document=a,this.Hs=u,this.Js=l,this.Ys=h,this.Vs=null,this.Ss=!1,this.isPrimary=!1,this.networkEnabled=!0,this.Zs=null,this.inForeground=!1,this.Xs=null,this.ti=null,this.ei=Number.NEGATIVE_INFINITY,this.ni=d=>Promise.resolve(),!Sm.D())throw new A(_.UNIMPLEMENTED,"This platform is either missing IndexedDB or is known to have an incomplete implementation. Offline persistence has been disabled.");this.referenceDelegate=new JM(this,i),this.si=n+"main",this.serializer=new $E(c),this.ii=new yn(this.si,this.Ys,new u2(this.serializer)),this.Ds=new GM(this.referenceDelegate,this.serializer),this.remoteDocumentCache=YE(this.serializer),this.xs=new VM,this.window&&this.window.localStorage?this.ri=this.window.localStorage:(this.ri=null,l===!1&&Qe("IndexedDbPersistence","LocalStorage is unavailable. As a result, persistence may not work reliably. In particular enablePersistence() could fail immediately after refreshing the page."))}start(){return this.oi().then(()=>{if(!this.isPrimary&&!this.allowTabSynchronization)throw new A(_.FAILED_PRECONDITION,fd);return this.ui(),this.ci(),this.ai(),this.runTransaction("getHighestListenSequenceNumber","readonly",e=>this.Ds.getHighestSequenceNumber(e))}).then(e=>{this.Vs=new zt(e,this.Hs)}).then(()=>{this.Ss=!0}).catch(e=>(this.ii&&this.ii.close(),Promise.reject(e)))}hi(e){return this.ni=async n=>{if(this.started)return e(n)},e(this.isPrimary)}setDatabaseDeletedListener(e){this.ii.B(async n=>{n.newVersion===null&&await e()})}setNetworkEnabled(e){this.networkEnabled!==e&&(this.networkEnabled=e,this.Ws.enqueueAndForget(async()=>{this.started&&await this.oi()}))}oi(){return this.runTransaction("updateClientMetadataAndTryBecomePrimary","readwrite",e=>Zc(e).put({clientId:this.clientId,updateTimeMs:Date.now(),networkEnabled:this.networkEnabled,inForeground:this.inForeground}).next(()=>{if(this.isPrimary)return this.li(e).next(n=>{n||(this.isPrimary=!1,this.Ws.enqueueRetryable(()=>this.ni(!1)))})}).next(()=>this.fi(e)).next(n=>this.isPrimary&&!n?this.di(e).next(()=>!1):!!n&&this.wi(e).next(()=>!0))).catch(e=>{if(ai(e))return R("IndexedDbPersistence","Failed to extend owner lease: ",e),this.isPrimary;if(!this.allowTabSynchronization)throw e;return R("IndexedDbPersistence","Releasing owner lease after error during lease refresh",e),!1}).then(e=>{this.isPrimary!==e&&this.Ws.enqueueRetryable(()=>this.ni(e)),this.isPrimary=e})}li(e){return jo(e).get("owner").next(n=>w.resolve(this._i(n)))}mi(e){return Zc(e).delete(this.clientId)}async gi(){if(this.isPrimary&&!this.yi(this.ei,18e5)){this.ei=Date.now();const e=await this.runTransaction("maybeGarbageCollectMultiClientState","readwrite-primary",n=>{const r=ft(n,"clientMetadata");return r.j().next(i=>{const s=this.pi(i,18e5),o=i.filter(a=>s.indexOf(a)===-1);return w.forEach(o,a=>r.delete(a.clientId)).next(()=>o)})}).catch(()=>[]);if(this.ri)for(const n of e)this.ri.removeItem(this.Ii(n.clientId))}}ai(){this.ti=this.Ws.enqueueAfterDelay("client_metadata_refresh",4e3,()=>this.oi().then(()=>this.gi()).then(()=>this.ai()))}_i(e){return!!e&&e.ownerId===this.clientId}fi(e){return this.Js?w.resolve(!0):jo(e).get("owner").next(n=>{if(n!==null&&this.yi(n.leaseTimestampMs,5e3)&&!this.Ti(n.ownerId)){if(this._i(n)&&this.networkEnabled)return!0;if(!this._i(n)){if(!n.allowTabSynchronization)throw new A(_.FAILED_PRECONDITION,fd);return!1}}return!(!this.networkEnabled||!this.inForeground)||Zc(e).j().next(r=>this.pi(r,5e3).find(i=>{if(this.clientId!==i.clientId){const s=!this.networkEnabled&&i.networkEnabled,o=!this.inForeground&&i.inForeground,a=this.networkEnabled===i.networkEnabled;if(s||o&&a)return!0}return!1})===void 0)}).next(n=>(this.isPrimary!==n&&R("IndexedDbPersistence",`Client ${n?"is":"is not"} eligible for a primary lease.`),n))}async shutdown(){this.Ss=!1,this.Ei(),this.ti&&(this.ti.cancel(),this.ti=null),this.Ai(),this.Ri(),await this.ii.runTransaction("shutdown","readwrite",["owner","clientMetadata"],e=>{const n=new ff(e,zt.ct);return this.di(n).next(()=>this.mi(n))}),this.ii.close(),this.vi()}pi(e,n){return e.filter(r=>this.yi(r.updateTimeMs,n)&&!this.Ti(r.clientId))}bi(){return this.runTransaction("getActiveClients","readonly",e=>Zc(e).j().next(n=>this.pi(n,18e5).map(r=>r.clientId)))}get started(){return this.Ss}getMutationQueue(e,n){return hh.ie(e,this.serializer,n,this.referenceDelegate)}getTargetCache(){return this.Ds}getRemoteDocumentCache(){return this.remoteDocumentCache}getIndexManager(e){return new WM(e,this.serializer.se.databaseId)}getDocumentOverlayCache(e){return lh.ie(this.serializer,e)}getBundleCache(){return this.xs}runTransaction(e,n,r){R("IndexedDbPersistence","Starting transaction:",e);const i=n==="readonly"?"readonly":"readwrite",s=(o=this.Ys)===15?XL:o===14?J0:o===13?X0:o===12?QL:o===11?Q0:void $();var o;let a;return this.ii.runTransaction(e,i,s,c=>(a=new ff(c,this.Vs?this.Vs.next():zt.ct),n==="readwrite-primary"?this.li(a).next(u=>!!u||this.fi(a)).next(u=>{if(!u)throw Qe(`Failed to obtain primary lease for action '${e}'.`),this.isPrimary=!1,this.Ws.enqueueRetryable(()=>this.ni(!1)),new A(_.FAILED_PRECONDITION,K0);return r(a)}).next(u=>this.wi(a).next(()=>u)):this.Pi(a).next(()=>r(a)))).then(c=>(a.raiseOnCommittedEvent(),c))}Pi(e){return jo(e).get("owner").next(n=>{if(n!==null&&this.yi(n.leaseTimestampMs,5e3)&&!this.Ti(n.ownerId)&&!this._i(n)&&!(this.Js||this.allowTabSynchronization&&n.allowTabSynchronization))throw new A(_.FAILED_PRECONDITION,fd)})}wi(e){const n={ownerId:this.clientId,allowTabSynchronization:this.allowTabSynchronization,leaseTimestampMs:Date.now()};return jo(e).put("owner",n)}static D(){return yn.D()}di(e){const n=jo(e);return n.get("owner").next(r=>this._i(r)?(R("IndexedDbPersistence","Releasing primary lease."),n.delete("owner")):w.resolve())}yi(e,n){const r=Date.now();return!(e<r-n)&&(!(e>r)||(Qe(`Detected an update time that is in the future: ${e} > ${r}`),!1))}ui(){this.document!==null&&typeof this.document.addEventListener=="function"&&(this.Xs=()=>{this.Ws.enqueueAndForget(()=>(this.inForeground=this.document.visibilityState==="visible",this.oi()))},this.document.addEventListener("visibilitychange",this.Xs),this.inForeground=this.document.visibilityState==="visible")}Ai(){this.Xs&&(this.document.removeEventListener("visibilitychange",this.Xs),this.Xs=null)}ci(){var e;typeof((e=this.window)===null||e===void 0?void 0:e.addEventListener)=="function"&&(this.Zs=()=>{this.Ei();const n=/(?:Version|Mobile)\/1[456]/;XC()&&(navigator.appVersion.match(n)||navigator.userAgent.match(n))&&this.Ws.enterRestrictedMode(!0),this.Ws.enqueueAndForget(()=>this.shutdown())},this.window.addEventListener("pagehide",this.Zs))}Ri(){this.Zs&&(this.window.removeEventListener("pagehide",this.Zs),this.Zs=null)}Ti(e){var n;try{const r=((n=this.ri)===null||n===void 0?void 0:n.getItem(this.Ii(e)))!==null;return R("IndexedDbPersistence",`Client '${e}' ${r?"is":"is not"} zombied in LocalStorage`),r}catch(r){return Qe("IndexedDbPersistence","Failed to get zombied client id.",r),!1}}Ei(){if(this.ri)try{this.ri.setItem(this.Ii(this.clientId),String(Date.now()))}catch(e){Qe("Failed to set zombie client id.",e)}}vi(){if(this.ri)try{this.ri.removeItem(this.Ii(this.clientId))}catch{}}Ii(e){return`firestore_zombie_${this.persistenceKey}_${e}`}}function jo(t){return ft(t,"owner")}function Zc(t){return ft(t,"clientMetadata")}function km(t,e){let n=t.projectId;return t.isDefaultDatabase||(n+="."+t.database),"firestore/"+e+"/"+n+"/"}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Am{constructor(e,n,r,i){this.targetId=e,this.fromCache=n,this.Vi=r,this.Si=i}static Di(e,n){let r=ce(),i=ce();for(const s of n.docChanges)switch(s.type){case 0:r=r.add(s.doc.key);break;case 1:i=i.add(s.doc.key)}return new Am(e,n.fromCache,r,i)}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class JE{constructor(){this.Ci=!1}initialize(e,n){this.xi=e,this.indexManager=n,this.Ci=!0}getDocumentsMatchingQuery(e,n,r,i){return this.Ni(e,n).next(s=>s||this.ki(e,n,i,r)).next(s=>s||this.Oi(e,n))}Ni(e,n){if(Dv(n))return w.resolve(null);let r=Gt(n);return this.indexManager.getIndexType(e,r).next(i=>i===0?null:(n.limit!==null&&i===1&&(n=nl(n,null,"F"),r=Gt(n)),this.indexManager.getDocumentsMatchingTarget(e,r).next(s=>{const o=ce(...s);return this.xi.getDocuments(e,o).next(a=>this.indexManager.getMinOffset(e,r).next(c=>{const u=this.$i(n,a);return this.Mi(n,u,o,c.readTime)?this.Ni(e,nl(n,null,"F")):this.Fi(e,u,n,c)}))})))}ki(e,n,r,i){return Dv(n)||i.isEqual(J.min())?this.Oi(e,n):this.xi.getDocuments(e,r).next(s=>{const o=this.$i(n,s);return this.Mi(n,o,r,i)?this.Oi(e,n):(hf()<=pe.DEBUG&&R("QueryEngine","Re-using previous result from %s to execute query: %s",i.toString(),_f(n)),this.Fi(e,o,n,z0(i,-1)))})}$i(e,n){let r=new Se(fE(e));return n.forEach((i,s)=>{Ec(e,s)&&(r=r.add(s))}),r}Mi(e,n,r,i){if(e.limit===null)return!1;if(r.size!==n.size)return!0;const s=e.limitType==="F"?n.last():n.first();return!!s&&(s.hasPendingWrites||s.version.compareTo(i)>0)}Oi(e,n){return hf()<=pe.DEBUG&&R("QueryEngine","Using full collection scan to execute query:",_f(n)),this.xi.getDocumentsMatchingQuery(e,n,en.min())}Fi(e,n,r,i){return this.xi.getDocumentsMatchingQuery(e,r,i).next(s=>(n.forEach(o=>{s=s.insert(o.key,o)}),s))}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class l2{constructor(e,n,r,i){this.persistence=e,this.Bi=n,this.serializer=i,this.Li=new We(ae),this.qi=new ci(s=>Qi(s),bc),this.Ui=new Map,this.Ki=e.getRemoteDocumentCache(),this.Ds=e.getTargetCache(),this.xs=e.getBundleCache(),this.Gi(r)}Gi(e){this.documentOverlayCache=this.persistence.getDocumentOverlayCache(e),this.indexManager=this.persistence.getIndexManager(e),this.mutationQueue=this.persistence.getMutationQueue(e,this.indexManager),this.localDocuments=new QE(this.Ki,this.mutationQueue,this.documentOverlayCache,this.indexManager),this.Ki.setIndexManager(this.indexManager),this.Bi.initialize(this.localDocuments,this.indexManager)}collectGarbage(e){return this.persistence.runTransaction("Collect garbage","readwrite-primary",n=>e.collect(n,this.Li))}}function ZE(t,e,n,r){return new l2(t,e,n,r)}async function eT(t,e){const n=U(t);return await n.persistence.runTransaction("Handle user change","readonly",r=>{let i;return n.mutationQueue.getAllMutationBatches(r).next(s=>(i=s,n.Gi(e),n.mutationQueue.getAllMutationBatches(r))).next(s=>{const o=[],a=[];let c=ce();for(const u of i){o.push(u.batchId);for(const l of u.mutations)c=c.add(l.key)}for(const u of s){a.push(u.batchId);for(const l of u.mutations)c=c.add(l.key)}return n.localDocuments.getDocuments(r,c).next(u=>({Qi:u,removedBatchIds:o,addedBatchIds:a}))})})}function h2(t,e){const n=U(t);return n.persistence.runTransaction("Acknowledge batch","readwrite-primary",r=>{const i=e.batch.keys(),s=n.Ki.newChangeBuffer({trackRemovals:!0});return function(o,a,c,u){const l=c.batch,h=l.keys();let d=w.resolve();return h.forEach(f=>{d=d.next(()=>u.getEntry(a,f)).next(g=>{const y=c.docVersions.get(f);X(y!==null),g.version.compareTo(y)<0&&(l.applyToRemoteDocument(g,c),g.isValidDocument()&&(g.setReadTime(c.commitVersion),u.addEntry(g)))})}),d.next(()=>o.mutationQueue.removeMutationBatch(a,l))}(n,r,e,s).next(()=>s.apply(r)).next(()=>n.mutationQueue.performConsistencyCheck(r)).next(()=>n.documentOverlayCache.removeOverlaysForBatchId(r,i,e.batch.batchId)).next(()=>n.localDocuments.recalculateAndSaveOverlaysForDocumentKeys(r,function(o){let a=ce();for(let c=0;c<o.mutationResults.length;++c)o.mutationResults[c].transformResults.length>0&&(a=a.add(o.batch.mutations[c].key));return a}(e))).next(()=>n.localDocuments.getDocuments(r,i))})}function tT(t){const e=U(t);return e.persistence.runTransaction("Get last remote snapshot version","readonly",n=>e.Ds.getLastRemoteSnapshotVersion(n))}function d2(t,e){const n=U(t),r=e.snapshotVersion;let i=n.Li;return n.persistence.runTransaction("Apply remote event","readwrite-primary",s=>{const o=n.Ki.newChangeBuffer({trackRemovals:!0});i=n.Li;const a=[];e.targetChanges.forEach((l,h)=>{const d=i.get(h);if(!d)return;a.push(n.Ds.removeMatchingKeys(s,l.removedDocuments,h).next(()=>n.Ds.addMatchingKeys(s,l.addedDocuments,h)));let f=d.withSequenceNumber(s.currentSequenceNumber);e.targetMismatches.has(h)?f=f.withResumeToken(ot.EMPTY_BYTE_STRING,J.min()).withLastLimboFreeSnapshotVersion(J.min()):l.resumeToken.approximateByteSize()>0&&(f=f.withResumeToken(l.resumeToken,r)),i=i.insert(h,f),function(g,y,E){return g.resumeToken.approximateByteSize()===0||y.snapshotVersion.toMicroseconds()-g.snapshotVersion.toMicroseconds()>=3e8?!0:E.addedDocuments.size+E.modifiedDocuments.size+E.removedDocuments.size>0}(d,f,l)&&a.push(n.Ds.updateTargetData(s,f))});let c=Kt(),u=ce();if(e.documentUpdates.forEach(l=>{e.resolvedLimboDocuments.has(l)&&a.push(n.persistence.referenceDelegate.updateLimboDocument(s,l))}),a.push(nT(s,o,e.documentUpdates).next(l=>{c=l.zi,u=l.ji})),!r.isEqual(J.min())){const l=n.Ds.getLastRemoteSnapshotVersion(s).next(h=>n.Ds.setTargetsMetadata(s,s.currentSequenceNumber,r));a.push(l)}return w.waitFor(a).next(()=>o.apply(s)).next(()=>n.localDocuments.getLocalViewOfDocuments(s,c,u)).next(()=>c)}).then(s=>(n.Li=i,s))}function nT(t,e,n){let r=ce(),i=ce();return n.forEach(s=>r=r.add(s)),e.getEntries(t,r).next(s=>{let o=Kt();return n.forEach((a,c)=>{const u=s.get(a);c.isFoundDocument()!==u.isFoundDocument()&&(i=i.add(a)),c.isNoDocument()&&c.version.isEqual(J.min())?(e.removeEntry(a,c.readTime),o=o.insert(a,c)):!u.isValidDocument()||c.version.compareTo(u.version)>0||c.version.compareTo(u.version)===0&&u.hasPendingWrites?(e.addEntry(c),o=o.insert(a,c)):R("LocalStore","Ignoring outdated watch update for ",a,". Current version:",u.version," Watch version:",c.version)}),{zi:o,ji:i}})}function f2(t,e){const n=U(t);return n.persistence.runTransaction("Get next mutation batch","readonly",r=>(e===void 0&&(e=-1),n.mutationQueue.getNextMutationBatchAfterBatchId(r,e)))}function ro(t,e){const n=U(t);return n.persistence.runTransaction("Allocate target","readwrite",r=>{let i;return n.Ds.getTargetData(r,e).next(s=>s?(i=s,w.resolve(i)):n.Ds.allocateTargetId(r).next(o=>(i=new Br(e,o,0,r.currentSequenceNumber),n.Ds.addTargetData(r,i).next(()=>i))))}).then(r=>{const i=n.Li.get(r.targetId);return(i===null||r.snapshotVersion.compareTo(i.snapshotVersion)>0)&&(n.Li=n.Li.insert(r.targetId,r),n.qi.set(e,r.targetId)),r})}async function io(t,e,n){const r=U(t),i=r.Li.get(e),s=n?"readwrite":"readwrite-primary";try{n||await r.persistence.runTransaction("Release target",s,o=>r.persistence.referenceDelegate.removeTarget(o,i))}catch(o){if(!ai(o))throw o;R("LocalStore",`Failed to update sequence numbers for target ${e}: ${o}`)}r.Li=r.Li.remove(e),r.qi.delete(i.target)}function ol(t,e,n){const r=U(t);let i=J.min(),s=ce();return r.persistence.runTransaction("Execute query","readonly",o=>function(a,c,u){const l=U(a),h=l.qi.get(u);return h!==void 0?w.resolve(l.Li.get(h)):l.Ds.getTargetData(c,u)}(r,o,Gt(e)).next(a=>{if(a)return i=a.lastLimboFreeSnapshotVersion,r.Ds.getMatchingKeysForTargetId(o,a.targetId).next(c=>{s=c})}).next(()=>r.Bi.getDocumentsMatchingQuery(o,e,n?i:J.min(),n?s:ce())).next(a=>(sT(r,dE(e),a),{documents:a,Wi:s})))}function rT(t,e){const n=U(t),r=U(n.Ds),i=n.Li.get(e);return i?Promise.resolve(i.target):n.persistence.runTransaction("Get target data","readonly",s=>r.ne(s,e).next(o=>o?o.target:null))}function iT(t,e){const n=U(t),r=n.Ui.get(e)||J.min();return n.persistence.runTransaction("Get new document changes","readonly",i=>n.Ki.getAllFromCollectionGroup(i,e,z0(r,-1),Number.MAX_SAFE_INTEGER)).then(i=>(sT(n,e,i),i))}function sT(t,e,n){let r=t.Ui.get(e)||J.min();n.forEach((i,s)=>{s.readTime.compareTo(r)>0&&(r=s.readTime)}),t.Ui.set(e,r)}async function p2(t,e,n,r){const i=U(t);let s=ce(),o=Kt();for(const u of n){const l=e.Hi(u.metadata.name);u.document&&(s=s.add(l));const h=e.Ji(u);h.setReadTime(e.Yi(u.metadata.readTime)),o=o.insert(l,h)}const a=i.Ki.newChangeBuffer({trackRemovals:!0}),c=await ro(i,function(u){return Gt(Io(me.fromString(`__bundle__/docs/${u}`)))}(r));return i.persistence.runTransaction("Apply bundle documents","readwrite",u=>nT(u,a,o).next(l=>(a.apply(u),l)).next(l=>i.Ds.removeMatchingKeysForTargetId(u,c.targetId).next(()=>i.Ds.addMatchingKeys(u,s,c.targetId)).next(()=>i.localDocuments.getLocalViewOfDocuments(u,l.zi,l.ji)).next(()=>l.zi)))}async function m2(t,e,n=ce()){const r=await ro(t,Gt(bm(e.bundledQuery))),i=U(t);return i.persistence.runTransaction("Save named query","readwrite",s=>{const o=Je(e.readTime);if(r.snapshotVersion.compareTo(o)>=0)return i.xs.saveNamedQuery(s,e);const a=r.withResumeToken(ot.EMPTY_BYTE_STRING,o);return i.Li=i.Li.insert(a.targetId,a),i.Ds.updateTargetData(s,a).next(()=>i.Ds.removeMatchingKeysForTargetId(s,r.targetId)).next(()=>i.Ds.addMatchingKeys(s,n,r.targetId)).next(()=>i.xs.saveNamedQuery(s,e))})}function sw(t,e){return`firestore_clients_${t}_${e}`}function ow(t,e,n){let r=`firestore_mutations_${t}_${n}`;return e.isAuthenticated()&&(r+=`_${e.uid}`),r}function pd(t,e){return`firestore_targets_${t}_${e}`}class al{constructor(e,n,r,i){this.user=e,this.batchId=n,this.state=r,this.error=i}static Zi(e,n,r){const i=JSON.parse(r);let s,o=typeof i=="object"&&["pending","acknowledged","rejected"].indexOf(i.state)!==-1&&(i.error===void 0||typeof i.error=="object");return o&&i.error&&(o=typeof i.error.message=="string"&&typeof i.error.code=="string",o&&(s=new A(i.error.code,i.error.message))),o?new al(e,n,i.state,s):(Qe("SharedClientState",`Failed to parse mutation state for ID '${n}': ${r}`),null)}Xi(){const e={state:this.state,updateTimeMs:Date.now()};return this.error&&(e.error={code:this.error.code,message:this.error.message}),JSON.stringify(e)}}class fa{constructor(e,n,r){this.targetId=e,this.state=n,this.error=r}static Zi(e,n){const r=JSON.parse(n);let i,s=typeof r=="object"&&["not-current","current","rejected"].indexOf(r.state)!==-1&&(r.error===void 0||typeof r.error=="object");return s&&r.error&&(s=typeof r.error.message=="string"&&typeof r.error.code=="string",s&&(i=new A(r.error.code,r.error.message))),s?new fa(e,r.state,i):(Qe("SharedClientState",`Failed to parse target state for ID '${e}': ${n}`),null)}Xi(){const e={state:this.state,updateTimeMs:Date.now()};return this.error&&(e.error={code:this.error.code,message:this.error.message}),JSON.stringify(e)}}class cl{constructor(e,n){this.clientId=e,this.activeTargetIds=n}static Zi(e,n){const r=JSON.parse(n);let i=typeof r=="object"&&r.activeTargetIds instanceof Array,s=ah();for(let o=0;i&&o<r.activeTargetIds.length;++o)i=G0(r.activeTargetIds[o]),s=s.add(r.activeTargetIds[o]);return i?new cl(e,s):(Qe("SharedClientState",`Failed to parse client data for instance '${e}': ${n}`),null)}}class Cm{constructor(e,n){this.clientId=e,this.onlineState=n}static Zi(e){const n=JSON.parse(e);return typeof n=="object"&&["Unknown","Online","Offline"].indexOf(n.onlineState)!==-1&&typeof n.clientId=="string"?new Cm(n.clientId,n.onlineState):(Qe("SharedClientState",`Failed to parse online state: ${e}`),null)}}class kf{constructor(){this.activeTargetIds=ah()}tr(e){this.activeTargetIds=this.activeTargetIds.add(e)}er(e){this.activeTargetIds=this.activeTargetIds.delete(e)}Xi(){const e={activeTargetIds:this.activeTargetIds.toArray(),updateTimeMs:Date.now()};return JSON.stringify(e)}}class md{constructor(e,n,r,i,s){this.window=e,this.Ws=n,this.persistenceKey=r,this.nr=i,this.syncEngine=null,this.onlineStateHandler=null,this.sequenceNumberHandler=null,this.sr=this.ir.bind(this),this.rr=new We(ae),this.started=!1,this.ur=[];const o=r.replace(/[.*+?^${}()|[\]\\]/g,"\\$&");this.storage=this.window.localStorage,this.currentUser=s,this.cr=sw(this.persistenceKey,this.nr),this.ar=function(a){return`firestore_sequence_number_${a}`}(this.persistenceKey),this.rr=this.rr.insert(this.nr,new kf),this.hr=new RegExp(`^firestore_clients_${o}_([^_]*)$`),this.lr=new RegExp(`^firestore_mutations_${o}_(\\d+)(?:_(.*))?$`),this.dr=new RegExp(`^firestore_targets_${o}_(\\d+)$`),this.wr=function(a){return`firestore_online_state_${a}`}(this.persistenceKey),this._r=function(a){return`firestore_bundle_loaded_v2_${a}`}(this.persistenceKey),this.window.addEventListener("storage",this.sr)}static D(e){return!(!e||!e.localStorage)}async start(){const e=await this.syncEngine.bi();for(const r of e){if(r===this.nr)continue;const i=this.getItem(sw(this.persistenceKey,r));if(i){const s=cl.Zi(r,i);s&&(this.rr=this.rr.insert(s.clientId,s))}}this.mr();const n=this.storage.getItem(this.wr);if(n){const r=this.gr(n);r&&this.yr(r)}for(const r of this.ur)this.ir(r);this.ur=[],this.window.addEventListener("pagehide",()=>this.shutdown()),this.started=!0}writeSequenceNumber(e){this.setItem(this.ar,JSON.stringify(e))}getAllActiveQueryTargets(){return this.pr(this.rr)}isActiveQueryTarget(e){let n=!1;return this.rr.forEach((r,i)=>{i.activeTargetIds.has(e)&&(n=!0)}),n}addPendingMutation(e){this.Ir(e,"pending")}updateMutationState(e,n,r){this.Ir(e,n,r),this.Tr(e)}addLocalQueryTarget(e){let n="not-current";if(this.isActiveQueryTarget(e)){const r=this.storage.getItem(pd(this.persistenceKey,e));if(r){const i=fa.Zi(e,r);i&&(n=i.state)}}return this.Er.tr(e),this.mr(),n}removeLocalQueryTarget(e){this.Er.er(e),this.mr()}isLocalQueryTarget(e){return this.Er.activeTargetIds.has(e)}clearQueryState(e){this.removeItem(pd(this.persistenceKey,e))}updateQueryState(e,n,r){this.Ar(e,n,r)}handleUserChange(e,n,r){n.forEach(i=>{this.Tr(i)}),this.currentUser=e,r.forEach(i=>{this.addPendingMutation(i)})}setOnlineState(e){this.Rr(e)}notifyBundleLoaded(e){this.vr(e)}shutdown(){this.started&&(this.window.removeEventListener("storage",this.sr),this.removeItem(this.cr),this.started=!1)}getItem(e){const n=this.storage.getItem(e);return R("SharedClientState","READ",e,n),n}setItem(e,n){R("SharedClientState","SET",e,n),this.storage.setItem(e,n)}removeItem(e){R("SharedClientState","REMOVE",e),this.storage.removeItem(e)}ir(e){const n=e;if(n.storageArea===this.storage){if(R("SharedClientState","EVENT",n.key,n.newValue),n.key===this.cr)return void Qe("Received WebStorage notification for local change. Another client might have garbage-collected our state");this.Ws.enqueueRetryable(async()=>{if(this.started){if(n.key!==null){if(this.hr.test(n.key)){if(n.newValue==null){const r=this.br(n.key);return this.Pr(r,null)}{const r=this.Vr(n.key,n.newValue);if(r)return this.Pr(r.clientId,r)}}else if(this.lr.test(n.key)){if(n.newValue!==null){const r=this.Sr(n.key,n.newValue);if(r)return this.Dr(r)}}else if(this.dr.test(n.key)){if(n.newValue!==null){const r=this.Cr(n.key,n.newValue);if(r)return this.Nr(r)}}else if(n.key===this.wr){if(n.newValue!==null){const r=this.gr(n.newValue);if(r)return this.yr(r)}}else if(n.key===this.ar){const r=function(i){let s=zt.ct;if(i!=null)try{const o=JSON.parse(i);X(typeof o=="number"),s=o}catch(o){Qe("SharedClientState","Failed to read sequence number from WebStorage",o)}return s}(n.newValue);r!==zt.ct&&this.sequenceNumberHandler(r)}else if(n.key===this._r){const r=this.kr(n.newValue);await Promise.all(r.map(i=>this.syncEngine.Or(i)))}}}else this.ur.push(n)})}}get Er(){return this.rr.get(this.nr)}mr(){this.setItem(this.cr,this.Er.Xi())}Ir(e,n,r){const i=new al(this.currentUser,e,n,r),s=ow(this.persistenceKey,this.currentUser,e);this.setItem(s,i.Xi())}Tr(e){const n=ow(this.persistenceKey,this.currentUser,e);this.removeItem(n)}Rr(e){const n={clientId:this.nr,onlineState:e};this.storage.setItem(this.wr,JSON.stringify(n))}Ar(e,n,r){const i=pd(this.persistenceKey,e),s=new fa(e,n,r);this.setItem(i,s.Xi())}vr(e){const n=JSON.stringify(Array.from(e));this.setItem(this._r,n)}br(e){const n=this.hr.exec(e);return n?n[1]:null}Vr(e,n){const r=this.br(e);return cl.Zi(r,n)}Sr(e,n){const r=this.lr.exec(e),i=Number(r[1]),s=r[2]!==void 0?r[2]:null;return al.Zi(new lt(s),i,n)}Cr(e,n){const r=this.dr.exec(e),i=Number(r[1]);return fa.Zi(i,n)}gr(e){return Cm.Zi(e)}kr(e){return JSON.parse(e)}async Dr(e){if(e.user.uid===this.currentUser.uid)return this.syncEngine.$r(e.batchId,e.state,e.error);R("SharedClientState",`Ignoring mutation for non-active user ${e.user.uid}`)}Nr(e){return this.syncEngine.Mr(e.targetId,e.state,e.error)}Pr(e,n){const r=n?this.rr.insert(e,n):this.rr.remove(e),i=this.pr(this.rr),s=this.pr(r),o=[],a=[];return s.forEach(c=>{i.has(c)||o.push(c)}),i.forEach(c=>{s.has(c)||a.push(c)}),this.syncEngine.Fr(o,a).then(()=>{this.rr=r})}yr(e){this.rr.get(e.clientId)&&this.onlineStateHandler(e.onlineState)}pr(e){let n=ah();return e.forEach((r,i)=>{n=n.unionWith(i.activeTargetIds)}),n}}class oT{constructor(){this.Br=new kf,this.Lr={},this.onlineStateHandler=null,this.sequenceNumberHandler=null}addPendingMutation(e){}updateMutationState(e,n,r){}addLocalQueryTarget(e){return this.Br.tr(e),this.Lr[e]||"not-current"}updateQueryState(e,n,r){this.Lr[e]=n}removeLocalQueryTarget(e){this.Br.er(e)}isLocalQueryTarget(e){return this.Br.activeTargetIds.has(e)}clearQueryState(e){delete this.Lr[e]}getAllActiveQueryTargets(){return this.Br.activeTargetIds}isActiveQueryTarget(e){return this.Br.activeTargetIds.has(e)}start(){return this.Br=new kf,Promise.resolve()}handleUserChange(e,n,r){}setOnlineState(e){}shutdown(){}writeSequenceNumber(e){}notifyBundleLoaded(e){}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class g2{qr(e){}shutdown(){}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class aw{constructor(){this.Ur=()=>this.Kr(),this.Gr=()=>this.Qr(),this.zr=[],this.jr()}qr(e){this.zr.push(e)}shutdown(){window.removeEventListener("online",this.Ur),window.removeEventListener("offline",this.Gr)}jr(){window.addEventListener("online",this.Ur),window.addEventListener("offline",this.Gr)}Kr(){R("ConnectivityMonitor","Network connectivity changed: AVAILABLE");for(const e of this.zr)e(0)}Qr(){R("ConnectivityMonitor","Network connectivity changed: UNAVAILABLE");for(const e of this.zr)e(1)}static D(){return typeof window<"u"&&window.addEventListener!==void 0&&window.removeEventListener!==void 0}}/**
 * @license
 * Copyright 2023 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let eu=null;function gd(){return eu===null?eu=268435456+Math.round(2147483648*Math.random()):eu++,"0x"+eu.toString(16)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const y2={BatchGetDocuments:"batchGet",Commit:"commit",RunQuery:"runQuery",RunAggregationQuery:"runAggregationQuery"};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class v2{constructor(e){this.Wr=e.Wr,this.Hr=e.Hr}Jr(e){this.Yr=e}Zr(e){this.Xr=e}onMessage(e){this.eo=e}close(){this.Hr()}send(e){this.Wr(e)}no(){this.Yr()}so(e){this.Xr(e)}io(e){this.eo(e)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Tt="WebChannelConnection";class w2 extends class{constructor(e){this.databaseInfo=e,this.databaseId=e.databaseId;const n=e.ssl?"https":"http";this.ro=n+"://"+e.host,this.oo="projects/"+this.databaseId.projectId+"/databases/"+this.databaseId.database+"/documents"}get uo(){return!1}co(e,n,r,i,s){const o=gd(),a=this.ao(e,n);R("RestConnection",`Sending RPC '${e}' ${o}:`,a,r);const c={};return this.ho(c,i,s),this.lo(e,a,c,r).then(u=>(R("RestConnection",`Received RPC '${e}' ${o}: `,u),u),u=>{throw or("RestConnection",`RPC '${e}' ${o} failed with error: `,u,"url: ",a,"request:",r),u})}fo(e,n,r,i,s,o){return this.co(e,n,r,i,s)}ho(e,n,r){e["X-Goog-Api-Client"]="gl-js/ fire/"+bo,e["Content-Type"]="text/plain",this.databaseInfo.appId&&(e["X-Firebase-GMPID"]=this.databaseInfo.appId),n&&n.headers.forEach((i,s)=>e[s]=i),r&&r.headers.forEach((i,s)=>e[s]=i)}ao(e,n){const r=y2[e];return`${this.ro}/v1/${n}:${r}`}}{constructor(e){super(e),this.forceLongPolling=e.forceLongPolling,this.autoDetectLongPolling=e.autoDetectLongPolling,this.useFetchStreams=e.useFetchStreams}lo(e,n,r,i){const s=gd();return new Promise((o,a)=>{const c=new yL;c.setWithCredentials(!0),c.listenOnce(pL.COMPLETE,()=>{try{switch(c.getLastErrorCode()){case hd.NO_ERROR:const l=c.getResponseJson();R(Tt,`XHR for RPC '${e}' ${s} received:`,JSON.stringify(l)),o(l);break;case hd.TIMEOUT:R(Tt,`RPC '${e}' ${s} timed out`),a(new A(_.DEADLINE_EXCEEDED,"Request time out"));break;case hd.HTTP_ERROR:const h=c.getStatus();if(R(Tt,`RPC '${e}' ${s} failed with status:`,h,"response text:",c.getResponseText()),h>0){let d=c.getResponseJson();Array.isArray(d)&&(d=d[0]);const f=d==null?void 0:d.error;if(f&&f.status&&f.message){const g=function(y){const E=y.toLowerCase().replace(/_/g,"-");return Object.values(_).indexOf(E)>=0?E:_.UNKNOWN}(f.status);a(new A(g,f.message))}else a(new A(_.UNKNOWN,"Server responded with status "+c.getStatus()))}else a(new A(_.UNAVAILABLE,"Connection failed."));break;default:$()}}finally{R(Tt,`RPC '${e}' ${s} completed.`)}});const u=JSON.stringify(i);R(Tt,`RPC '${e}' ${s} sending request:`,i),c.send(n,"POST",u,r,15)})}wo(e,n,r){const i=gd(),s=[this.ro,"/","google.firestore.v1.Firestore","/",e,"/channel"],o=dL(),a=fL(),c={httpSessionIdParam:"gsessionid",initMessageHeaders:{},messageUrlParams:{database:`projects/${this.databaseId.projectId}/databases/${this.databaseId.database}`},sendRawJson:!0,supportsCrossDomainXhr:!0,internalChannelParams:{forwardChannelRequestTimeoutMs:6e5},forceLongPolling:this.forceLongPolling,detectBufferingProxy:this.autoDetectLongPolling};this.useFetchStreams&&(c.xmlHttpFactory=new gL({})),this.ho(c.initMessageHeaders,n,r),c.encodeInitMessageHeaders=!0;const u=s.join("");R(Tt,`Creating RPC '${e}' stream ${i}: ${u}`,c);const l=o.createWebChannel(u,c);let h=!1,d=!1;const f=new v2({Wr:y=>{d?R(Tt,`Not sending because RPC '${e}' stream ${i} is closed:`,y):(h||(R(Tt,`Opening RPC '${e}' stream ${i} transport.`),l.open(),h=!0),R(Tt,`RPC '${e}' stream ${i} sending:`,y),l.send(y))},Hr:()=>l.close()}),g=(y,E,v)=>{y.listen(E,I=>{try{v(I)}catch(b){setTimeout(()=>{throw b},0)}})};return g(l,Wc.EventType.OPEN,()=>{d||R(Tt,`RPC '${e}' stream ${i} transport opened.`)}),g(l,Wc.EventType.CLOSE,()=>{d||(d=!0,R(Tt,`RPC '${e}' stream ${i} transport closed`),f.so())}),g(l,Wc.EventType.ERROR,y=>{d||(d=!0,or(Tt,`RPC '${e}' stream ${i} transport errored:`,y),f.so(new A(_.UNAVAILABLE,"The operation could not be completed")))}),g(l,Wc.EventType.MESSAGE,y=>{var E;if(!d){const v=y.data[0];X(!!v);const I=v,b=I.error||((E=I[0])===null||E===void 0?void 0:E.error);if(b){R(Tt,`RPC '${e}' stream ${i} received error:`,b);const x=b.status;let M=function(ne){const H=tt[ne];if(H!==void 0)return AE(H)}(x),z=b.message;M===void 0&&(M=_.INTERNAL,z="Unknown error status: "+x+" with message "+b.message),d=!0,f.so(new A(M,z)),l.close()}else R(Tt,`RPC '${e}' stream ${i} received:`,v),f.io(v)}}),g(a,mL.STAT_EVENT,y=>{y.stat===yv.PROXY?R(Tt,`RPC '${e}' stream ${i} detected buffering proxy`):y.stat===yv.NOPROXY&&R(Tt,`RPC '${e}' stream ${i} detected no buffering proxy`)}),setTimeout(()=>{f.no()},0),f}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 *//**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function aT(){return typeof window<"u"?window:null}function Cu(){return typeof document<"u"?document:null}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Ac(t){return new CM(t,!0)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Rm{constructor(e,n,r=1e3,i=1.5,s=6e4){this.Ws=e,this.timerId=n,this._o=r,this.mo=i,this.yo=s,this.po=0,this.Io=null,this.To=Date.now(),this.reset()}reset(){this.po=0}Eo(){this.po=this.yo}Ao(e){this.cancel();const n=Math.floor(this.po+this.Ro()),r=Math.max(0,Date.now()-this.To),i=Math.max(0,n-r);i>0&&R("ExponentialBackoff",`Backing off for ${i} ms (base delay: ${this.po} ms, delay with jitter: ${n} ms, last attempt: ${r} ms ago)`),this.Io=this.Ws.enqueueAfterDelay(this.timerId,i,()=>(this.To=Date.now(),e())),this.po*=this.mo,this.po<this._o&&(this.po=this._o),this.po>this.yo&&(this.po=this.yo)}vo(){this.Io!==null&&(this.Io.skipDelay(),this.Io=null)}cancel(){this.Io!==null&&(this.Io.cancel(),this.Io=null)}Ro(){return(Math.random()-.5)*this.po}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class cT{constructor(e,n,r,i,s,o,a,c){this.Ws=e,this.bo=r,this.Po=i,this.connection=s,this.authCredentialsProvider=o,this.appCheckCredentialsProvider=a,this.listener=c,this.state=0,this.Vo=0,this.So=null,this.Do=null,this.stream=null,this.Co=new Rm(e,n)}xo(){return this.state===1||this.state===5||this.No()}No(){return this.state===2||this.state===3}start(){this.state!==4?this.auth():this.ko()}async stop(){this.xo()&&await this.close(0)}Oo(){this.state=0,this.Co.reset()}$o(){this.No()&&this.So===null&&(this.So=this.Ws.enqueueAfterDelay(this.bo,6e4,()=>this.Mo()))}Fo(e){this.Bo(),this.stream.send(e)}async Mo(){if(this.No())return this.close(0)}Bo(){this.So&&(this.So.cancel(),this.So=null)}Lo(){this.Do&&(this.Do.cancel(),this.Do=null)}async close(e,n){this.Bo(),this.Lo(),this.Co.cancel(),this.Vo++,e!==4?this.Co.reset():n&&n.code===_.RESOURCE_EXHAUSTED?(Qe(n.toString()),Qe("Using maximum backoff delay to prevent overloading the backend."),this.Co.Eo()):n&&n.code===_.UNAUTHENTICATED&&this.state!==3&&(this.authCredentialsProvider.invalidateToken(),this.appCheckCredentialsProvider.invalidateToken()),this.stream!==null&&(this.qo(),this.stream.close(),this.stream=null),this.state=e,await this.listener.Zr(n)}qo(){}auth(){this.state=1;const e=this.Uo(this.Vo),n=this.Vo;Promise.all([this.authCredentialsProvider.getToken(),this.appCheckCredentialsProvider.getToken()]).then(([r,i])=>{this.Vo===n&&this.Ko(r,i)},r=>{e(()=>{const i=new A(_.UNKNOWN,"Fetching auth token failed: "+r.message);return this.Go(i)})})}Ko(e,n){const r=this.Uo(this.Vo);this.stream=this.Qo(e,n),this.stream.Jr(()=>{r(()=>(this.state=2,this.Do=this.Ws.enqueueAfterDelay(this.Po,1e4,()=>(this.No()&&(this.state=3),Promise.resolve())),this.listener.Jr()))}),this.stream.Zr(i=>{r(()=>this.Go(i))}),this.stream.onMessage(i=>{r(()=>this.onMessage(i))})}ko(){this.state=5,this.Co.Ao(async()=>{this.state=0,this.start()})}Go(e){return R("PersistentStream",`close with error: ${e}`),this.stream=null,this.close(4,e)}Uo(e){return n=>{this.Ws.enqueueAndForget(()=>this.Vo===e?n():(R("PersistentStream","stream callback skipped by getCloseGuardedDispatcher."),Promise.resolve()))}}}class _2 extends cT{constructor(e,n,r,i,s,o){super(e,"listen_stream_connection_backoff","listen_stream_idle","health_check_timeout",n,r,i,o),this.serializer=s}Qo(e,n){return this.connection.wo("Listen",e,n)}onMessage(e){this.Co.reset();const n=NM(this.serializer,e),r=function(i){if(!("targetChange"in i))return J.min();const s=i.targetChange;return s.targetIds&&s.targetIds.length?J.min():s.readTime?Je(s.readTime):J.min()}(e);return this.listener.zo(n,r)}jo(e){const n={};n.database=Ha(this.serializer),n.addTarget=function(i,s){let o;const a=s.target;return o=el(a)?{documents:LE(i,a)}:{query:ME(i,a)},o.targetId=s.targetId,s.resumeToken.approximateByteSize()>0?o.resumeToken=xE(i,s.resumeToken):s.snapshotVersion.compareTo(J.min())>0&&(o.readTime=no(i,s.snapshotVersion.toTimestamp())),o}(this.serializer,e);const r=DM(this.serializer,e);r&&(n.labels=r),this.Fo(n)}Wo(e){const n={};n.database=Ha(this.serializer),n.removeTarget=e,this.Fo(n)}}class b2 extends cT{constructor(e,n,r,i,s,o){super(e,"write_stream_connection_backoff","write_stream_idle","health_check_timeout",n,r,i,o),this.serializer=s,this.Ho=!1}get Jo(){return this.Ho}start(){this.Ho=!1,this.lastStreamToken=void 0,super.start()}qo(){this.Ho&&this.Yo([])}Qo(e,n){return this.connection.wo("Write",e,n)}onMessage(e){if(X(!!e.streamToken),this.lastStreamToken=e.streamToken,this.Ho){this.Co.reset();const n=PM(e.writeResults,e.commitTime),r=Je(e.commitTime);return this.listener.Zo(r,n)}return X(!e.writeResults||e.writeResults.length===0),this.Ho=!0,this.listener.Xo()}tu(){const e={};e.database=Ha(this.serializer),this.Fo(e)}Yo(e){const n={streamToken:this.lastStreamToken,writes:e.map(r=>Ka(this.serializer,r))};this.Fo(n)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class I2 extends class{}{constructor(e,n,r,i){super(),this.authCredentials=e,this.appCheckCredentials=n,this.connection=r,this.serializer=i,this.eu=!1}nu(){if(this.eu)throw new A(_.FAILED_PRECONDITION,"The client has already been terminated.")}co(e,n,r){return this.nu(),Promise.all([this.authCredentials.getToken(),this.appCheckCredentials.getToken()]).then(([i,s])=>this.connection.co(e,n,r,i,s)).catch(i=>{throw i.name==="FirebaseError"?(i.code===_.UNAUTHENTICATED&&(this.authCredentials.invalidateToken(),this.appCheckCredentials.invalidateToken()),i):new A(_.UNKNOWN,i.toString())})}fo(e,n,r,i){return this.nu(),Promise.all([this.authCredentials.getToken(),this.appCheckCredentials.getToken()]).then(([s,o])=>this.connection.fo(e,n,r,s,o,i)).catch(s=>{throw s.name==="FirebaseError"?(s.code===_.UNAUTHENTICATED&&(this.authCredentials.invalidateToken(),this.appCheckCredentials.invalidateToken()),s):new A(_.UNKNOWN,s.toString())})}terminate(){this.eu=!0}}class E2{constructor(e,n){this.asyncQueue=e,this.onlineStateHandler=n,this.state="Unknown",this.su=0,this.iu=null,this.ru=!0}ou(){this.su===0&&(this.uu("Unknown"),this.iu=this.asyncQueue.enqueueAfterDelay("online_state_timeout",1e4,()=>(this.iu=null,this.cu("Backend didn't respond within 10 seconds."),this.uu("Offline"),Promise.resolve())))}au(e){this.state==="Online"?this.uu("Unknown"):(this.su++,this.su>=1&&(this.hu(),this.cu(`Connection failed 1 times. Most recent error: ${e.toString()}`),this.uu("Offline")))}set(e){this.hu(),this.su=0,e==="Online"&&(this.ru=!1),this.uu(e)}uu(e){e!==this.state&&(this.state=e,this.onlineStateHandler(e))}cu(e){const n=`Could not reach Cloud Firestore backend. ${e}
This typically indicates that your device does not have a healthy Internet connection at the moment. The client will operate in offline mode until it is able to successfully connect to the backend.`;this.ru?(Qe(n),this.ru=!1):R("OnlineStateTracker",n)}hu(){this.iu!==null&&(this.iu.cancel(),this.iu=null)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class T2{constructor(e,n,r,i,s){this.localStore=e,this.datastore=n,this.asyncQueue=r,this.remoteSyncer={},this.lu=[],this.fu=new Map,this.du=new Set,this.wu=[],this._u=s,this._u.qr(o=>{r.enqueueAndForget(async()=>{ui(this)&&(R("RemoteStore","Restarting streams for network reachability change."),await async function(a){const c=U(a);c.du.add(4),await So(c),c.mu.set("Unknown"),c.du.delete(4),await Cc(c)}(this))})}),this.mu=new E2(r,i)}}async function Cc(t){if(ui(t))for(const e of t.wu)await e(!0)}async function So(t){for(const e of t.wu)await e(!1)}function fh(t,e){const n=U(t);n.fu.has(e.targetId)||(n.fu.set(e.targetId,e),Pm(n)?Nm(n):Ao(n).No()&&xm(n,e))}function Wa(t,e){const n=U(t),r=Ao(n);n.fu.delete(e),r.No()&&uT(n,e),n.fu.size===0&&(r.No()?r.$o():ui(n)&&n.mu.set("Unknown"))}function xm(t,e){t.gu.Ot(e.targetId),Ao(t).jo(e)}function uT(t,e){t.gu.Ot(e),Ao(t).Wo(e)}function Nm(t){t.gu=new TM({getRemoteKeysForTarget:e=>t.remoteSyncer.getRemoteKeysForTarget(e),ne:e=>t.fu.get(e)||null}),Ao(t).start(),t.mu.ou()}function Pm(t){return ui(t)&&!Ao(t).xo()&&t.fu.size>0}function ui(t){return U(t).du.size===0}function lT(t){t.gu=void 0}async function S2(t){t.fu.forEach((e,n)=>{xm(t,e)})}async function k2(t,e){lT(t),Pm(t)?(t.mu.au(e),Nm(t)):t.mu.set("Unknown")}async function A2(t,e,n){if(t.mu.set("Online"),e instanceof RE&&e.state===2&&e.cause)try{await async function(r,i){const s=i.cause;for(const o of i.targetIds)r.fu.has(o)&&(await r.remoteSyncer.rejectListen(o,s),r.fu.delete(o),r.gu.removeTarget(o))}(t,e)}catch(r){R("RemoteStore","Failed to remove targets %s: %s ",e.targetIds.join(","),r),await ul(t,r)}else if(e instanceof Au?t.gu.Kt(e):e instanceof CE?t.gu.Jt(e):t.gu.zt(e),!n.isEqual(J.min()))try{const r=await tT(t.localStore);n.compareTo(r)>=0&&await function(i,s){const o=i.gu.Xt(s);return o.targetChanges.forEach((a,c)=>{if(a.resumeToken.approximateByteSize()>0){const u=i.fu.get(c);u&&i.fu.set(c,u.withResumeToken(a.resumeToken,s))}}),o.targetMismatches.forEach(a=>{const c=i.fu.get(a);if(!c)return;i.fu.set(a,c.withResumeToken(ot.EMPTY_BYTE_STRING,c.snapshotVersion)),uT(i,a);const u=new Br(c.target,a,1,c.sequenceNumber);xm(i,u)}),i.remoteSyncer.applyRemoteEvent(o)}(t,n)}catch(r){R("RemoteStore","Failed to raise snapshot:",r),await ul(t,r)}}async function ul(t,e,n){if(!ai(e))throw e;t.du.add(1),await So(t),t.mu.set("Offline"),n||(n=()=>tT(t.localStore)),t.asyncQueue.enqueueRetryable(async()=>{R("RemoteStore","Retrying IndexedDB access"),await n(),t.du.delete(1),await Cc(t)})}function hT(t,e){return e().catch(n=>ul(t,n,e))}async function ko(t){const e=U(t),n=Xr(e);let r=e.lu.length>0?e.lu[e.lu.length-1].batchId:-1;for(;C2(e);)try{const i=await f2(e.localStore,r);if(i===null){e.lu.length===0&&n.$o();break}r=i.batchId,R2(e,i)}catch(i){await ul(e,i)}dT(e)&&fT(e)}function C2(t){return ui(t)&&t.lu.length<10}function R2(t,e){t.lu.push(e);const n=Xr(t);n.No()&&n.Jo&&n.Yo(e.mutations)}function dT(t){return ui(t)&&!Xr(t).xo()&&t.lu.length>0}function fT(t){Xr(t).start()}async function x2(t){Xr(t).tu()}async function N2(t){const e=Xr(t);for(const n of t.lu)e.Yo(n.mutations)}async function P2(t,e,n){const r=t.lu.shift(),i=ym.from(r,e,n);await hT(t,()=>t.remoteSyncer.applySuccessfulWrite(i)),await ko(t)}async function D2(t,e){e&&Xr(t).Jo&&await async function(n,r){if(i=r.code,kE(i)&&i!==_.ABORTED){const s=n.lu.shift();Xr(n).Oo(),await hT(n,()=>n.remoteSyncer.rejectFailedWrite(s.batchId,r)),await ko(n)}var i}(t,e),dT(t)&&fT(t)}async function cw(t,e){const n=U(t);n.asyncQueue.verifyOperationInProgress(),R("RemoteStore","RemoteStore received new credentials");const r=ui(n);n.du.add(3),await So(n),r&&n.mu.set("Unknown"),await n.remoteSyncer.handleCredentialChange(e),n.du.delete(3),await Cc(n)}async function Af(t,e){const n=U(t);e?(n.du.delete(2),await Cc(n)):e||(n.du.add(2),await So(n),n.mu.set("Unknown"))}function Ao(t){return t.yu||(t.yu=function(e,n,r){const i=U(e);return i.nu(),new _2(n,i.connection,i.authCredentials,i.appCheckCredentials,i.serializer,r)}(t.datastore,t.asyncQueue,{Jr:S2.bind(null,t),Zr:k2.bind(null,t),zo:A2.bind(null,t)}),t.wu.push(async e=>{e?(t.yu.Oo(),Pm(t)?Nm(t):t.mu.set("Unknown")):(await t.yu.stop(),lT(t))})),t.yu}function Xr(t){return t.pu||(t.pu=function(e,n,r){const i=U(e);return i.nu(),new b2(n,i.connection,i.authCredentials,i.appCheckCredentials,i.serializer,r)}(t.datastore,t.asyncQueue,{Jr:x2.bind(null,t),Zr:D2.bind(null,t),Xo:N2.bind(null,t),Zo:P2.bind(null,t)}),t.wu.push(async e=>{e?(t.pu.Oo(),await ko(t)):(await t.pu.stop(),t.lu.length>0&&(R("RemoteStore",`Stopping write stream with ${t.lu.length} pending writes`),t.lu=[]))})),t.pu}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Dm{constructor(e,n,r,i,s){this.asyncQueue=e,this.timerId=n,this.targetTimeMs=r,this.op=i,this.removalCallback=s,this.deferred=new ht,this.then=this.deferred.promise.then.bind(this.deferred.promise),this.deferred.promise.catch(o=>{})}static createAndSchedule(e,n,r,i,s){const o=Date.now()+r,a=new Dm(e,n,o,i,s);return a.start(r),a}start(e){this.timerHandle=setTimeout(()=>this.handleDelayElapsed(),e)}skipDelay(){return this.handleDelayElapsed()}cancel(e){this.timerHandle!==null&&(this.clearTimeout(),this.deferred.reject(new A(_.CANCELLED,"Operation cancelled"+(e?": "+e:""))))}handleDelayElapsed(){this.asyncQueue.enqueueAndForget(()=>this.timerHandle!==null?(this.clearTimeout(),this.op().then(e=>this.deferred.resolve(e))):Promise.resolve())}clearTimeout(){this.timerHandle!==null&&(this.removalCallback(this),clearTimeout(this.timerHandle),this.timerHandle=null)}}function Co(t,e){if(Qe("AsyncQueue",`${e}: ${t}`),ai(t))return new A(_.UNAVAILABLE,`${e}: ${t}`);throw t}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class $s{constructor(e){this.comparator=e?(n,r)=>e(n,r)||L.comparator(n.key,r.key):(n,r)=>L.comparator(n.key,r.key),this.keyedMap=Xo(),this.sortedSet=new We(this.comparator)}static emptySet(e){return new $s(e.comparator)}has(e){return this.keyedMap.get(e)!=null}get(e){return this.keyedMap.get(e)}first(){return this.sortedSet.minKey()}last(){return this.sortedSet.maxKey()}isEmpty(){return this.sortedSet.isEmpty()}indexOf(e){const n=this.keyedMap.get(e);return n?this.sortedSet.indexOf(n):-1}get size(){return this.sortedSet.size}forEach(e){this.sortedSet.inorderTraversal((n,r)=>(e(n),!1))}add(e){const n=this.delete(e.key);return n.copy(n.keyedMap.insert(e.key,e),n.sortedSet.insert(e,null))}delete(e){const n=this.get(e);return n?this.copy(this.keyedMap.remove(e),this.sortedSet.remove(n)):this}isEqual(e){if(!(e instanceof $s)||this.size!==e.size)return!1;const n=this.sortedSet.getIterator(),r=e.sortedSet.getIterator();for(;n.hasNext();){const i=n.getNext().key,s=r.getNext().key;if(!i.isEqual(s))return!1}return!0}toString(){const e=[];return this.forEach(n=>{e.push(n.toString())}),e.length===0?"DocumentSet ()":`DocumentSet (
  `+e.join(`  
`)+`
)`}copy(e,n){const r=new $s;return r.comparator=this.comparator,r.keyedMap=e,r.sortedSet=n,r}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class uw{constructor(){this.Iu=new We(L.comparator)}track(e){const n=e.doc.key,r=this.Iu.get(n);r?e.type!==0&&r.type===3?this.Iu=this.Iu.insert(n,e):e.type===3&&r.type!==1?this.Iu=this.Iu.insert(n,{type:r.type,doc:e.doc}):e.type===2&&r.type===2?this.Iu=this.Iu.insert(n,{type:2,doc:e.doc}):e.type===2&&r.type===0?this.Iu=this.Iu.insert(n,{type:0,doc:e.doc}):e.type===1&&r.type===0?this.Iu=this.Iu.remove(n):e.type===1&&r.type===2?this.Iu=this.Iu.insert(n,{type:1,doc:r.doc}):e.type===0&&r.type===1?this.Iu=this.Iu.insert(n,{type:2,doc:e.doc}):$():this.Iu=this.Iu.insert(n,e)}Tu(){const e=[];return this.Iu.inorderTraversal((n,r)=>{e.push(r)}),e}}class so{constructor(e,n,r,i,s,o,a,c,u){this.query=e,this.docs=n,this.oldDocs=r,this.docChanges=i,this.mutatedKeys=s,this.fromCache=o,this.syncStateChanged=a,this.excludesMetadataChanges=c,this.hasCachedResults=u}static fromInitialDocuments(e,n,r,i,s){const o=[];return n.forEach(a=>{o.push({type:0,doc:a})}),new so(e,n,$s.emptySet(n),o,r,i,!0,!1,s)}get hasPendingWrites(){return!this.mutatedKeys.isEmpty()}isEqual(e){if(!(this.fromCache===e.fromCache&&this.hasCachedResults===e.hasCachedResults&&this.syncStateChanged===e.syncStateChanged&&this.mutatedKeys.isEqual(e.mutatedKeys)&&Ic(this.query,e.query)&&this.docs.isEqual(e.docs)&&this.oldDocs.isEqual(e.oldDocs)))return!1;const n=this.docChanges,r=e.docChanges;if(n.length!==r.length)return!1;for(let i=0;i<n.length;i++)if(n[i].type!==r[i].type||!n[i].doc.isEqual(r[i].doc))return!1;return!0}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class O2{constructor(){this.Eu=void 0,this.listeners=[]}}class L2{constructor(){this.queries=new ci(e=>hE(e),Ic),this.onlineState="Unknown",this.Au=new Set}}async function Om(t,e){const n=U(t),r=e.query;let i=!1,s=n.queries.get(r);if(s||(i=!0,s=new O2),i)try{s.Eu=await n.onListen(r)}catch(o){const a=Co(o,`Initialization of query '${_f(e.query)}' failed`);return void e.onError(a)}n.queries.set(r,s),s.listeners.push(e),e.Ru(n.onlineState),s.Eu&&e.vu(s.Eu)&&Mm(n)}async function Lm(t,e){const n=U(t),r=e.query;let i=!1;const s=n.queries.get(r);if(s){const o=s.listeners.indexOf(e);o>=0&&(s.listeners.splice(o,1),i=s.listeners.length===0)}if(i)return n.queries.delete(r),n.onUnlisten(r)}function M2(t,e){const n=U(t);let r=!1;for(const i of e){const s=i.query,o=n.queries.get(s);if(o){for(const a of o.listeners)a.vu(i)&&(r=!0);o.Eu=i}}r&&Mm(n)}function F2(t,e,n){const r=U(t),i=r.queries.get(e);if(i)for(const s of i.listeners)s.onError(n);r.queries.delete(e)}function Mm(t){t.Au.forEach(e=>{e.next()})}class Fm{constructor(e,n,r){this.query=e,this.bu=n,this.Pu=!1,this.Vu=null,this.onlineState="Unknown",this.options=r||{}}vu(e){if(!this.options.includeMetadataChanges){const r=[];for(const i of e.docChanges)i.type!==3&&r.push(i);e=new so(e.query,e.docs,e.oldDocs,r,e.mutatedKeys,e.fromCache,e.syncStateChanged,!0,e.hasCachedResults)}let n=!1;return this.Pu?this.Su(e)&&(this.bu.next(e),n=!0):this.Du(e,this.onlineState)&&(this.Cu(e),n=!0),this.Vu=e,n}onError(e){this.bu.error(e)}Ru(e){this.onlineState=e;let n=!1;return this.Vu&&!this.Pu&&this.Du(this.Vu,e)&&(this.Cu(this.Vu),n=!0),n}Du(e,n){if(!e.fromCache)return!0;const r=n!=="Offline";return(!this.options.xu||!r)&&(!e.docs.isEmpty()||e.hasCachedResults||n==="Offline")}Su(e){if(e.docChanges.length>0)return!0;const n=this.Vu&&this.Vu.hasPendingWrites!==e.hasPendingWrites;return!(!e.syncStateChanged&&!n)&&this.options.includeMetadataChanges===!0}Cu(e){e=so.fromInitialDocuments(e.query,e.docs,e.mutatedKeys,e.fromCache,e.hasCachedResults),this.Pu=!0,this.bu.next(e)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class U2{constructor(e,n){this.Nu=e,this.byteLength=n}ku(){return"metadata"in this.Nu}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class lw{constructor(e){this.serializer=e}Hi(e){return Bn(this.serializer,e)}Ji(e){return e.metadata.exists?OE(this.serializer,e.document,!1):Ne.newNoDocument(this.Hi(e.metadata.name),this.Yi(e.metadata.readTime))}Yi(e){return Je(e)}}class V2{constructor(e,n,r){this.Ou=e,this.localStore=n,this.serializer=r,this.queries=[],this.documents=[],this.collectionGroups=new Set,this.progress=pT(e)}$u(e){this.progress.bytesLoaded+=e.byteLength;let n=this.progress.documentsLoaded;if(e.Nu.namedQuery)this.queries.push(e.Nu.namedQuery);else if(e.Nu.documentMetadata){this.documents.push({metadata:e.Nu.documentMetadata}),e.Nu.documentMetadata.exists||++n;const r=me.fromString(e.Nu.documentMetadata.name);this.collectionGroups.add(r.get(r.length-2))}else e.Nu.document&&(this.documents[this.documents.length-1].document=e.Nu.document,++n);return n!==this.progress.documentsLoaded?(this.progress.documentsLoaded=n,Object.assign({},this.progress)):null}Mu(e){const n=new Map,r=new lw(this.serializer);for(const i of e)if(i.metadata.queries){const s=r.Hi(i.metadata.name);for(const o of i.metadata.queries){const a=(n.get(o)||ce()).add(s);n.set(o,a)}}return n}async complete(){const e=await p2(this.localStore,new lw(this.serializer),this.documents,this.Ou.id),n=this.Mu(this.documents);for(const r of this.queries)await m2(this.localStore,r,n.get(r.name));return this.progress.taskState="Success",{progress:this.progress,Fu:this.collectionGroups,Bu:e}}}function pT(t){return{taskState:"Running",documentsLoaded:0,bytesLoaded:0,totalDocuments:t.totalDocuments,totalBytes:t.totalBytes}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class mT{constructor(e){this.key=e}}class gT{constructor(e){this.key=e}}class yT{constructor(e,n){this.query=e,this.Lu=n,this.qu=null,this.hasCachedResults=!1,this.current=!1,this.Uu=ce(),this.mutatedKeys=ce(),this.Ku=fE(e),this.Gu=new $s(this.Ku)}get Qu(){return this.Lu}zu(e,n){const r=n?n.ju:new uw,i=n?n.Gu:this.Gu;let s=n?n.mutatedKeys:this.mutatedKeys,o=i,a=!1;const c=this.query.limitType==="F"&&i.size===this.query.limit?i.last():null,u=this.query.limitType==="L"&&i.size===this.query.limit?i.first():null;if(e.inorderTraversal((l,h)=>{const d=i.get(l),f=Ec(this.query,h)?h:null,g=!!d&&this.mutatedKeys.has(d.key),y=!!f&&(f.hasLocalMutations||this.mutatedKeys.has(f.key)&&f.hasCommittedMutations);let E=!1;d&&f?d.data.isEqual(f.data)?g!==y&&(r.track({type:3,doc:f}),E=!0):this.Wu(d,f)||(r.track({type:2,doc:f}),E=!0,(c&&this.Ku(f,c)>0||u&&this.Ku(f,u)<0)&&(a=!0)):!d&&f?(r.track({type:0,doc:f}),E=!0):d&&!f&&(r.track({type:1,doc:d}),E=!0,(c||u)&&(a=!0)),E&&(f?(o=o.add(f),s=y?s.add(l):s.delete(l)):(o=o.delete(l),s=s.delete(l)))}),this.query.limit!==null)for(;o.size>this.query.limit;){const l=this.query.limitType==="F"?o.last():o.first();o=o.delete(l.key),s=s.delete(l.key),r.track({type:1,doc:l})}return{Gu:o,ju:r,Mi:a,mutatedKeys:s}}Wu(e,n){return e.hasLocalMutations&&n.hasCommittedMutations&&!n.hasLocalMutations}applyChanges(e,n,r){const i=this.Gu;this.Gu=e.Gu,this.mutatedKeys=e.mutatedKeys;const s=e.ju.Tu();s.sort((u,l)=>function(h,d){const f=g=>{switch(g){case 0:return 1;case 2:case 3:return 2;case 1:return 0;default:return $()}};return f(h)-f(d)}(u.type,l.type)||this.Ku(u.doc,l.doc)),this.Hu(r);const o=n?this.Ju():[],a=this.Uu.size===0&&this.current?1:0,c=a!==this.qu;return this.qu=a,s.length!==0||c?{snapshot:new so(this.query,e.Gu,i,s,e.mutatedKeys,a===0,c,!1,!!r&&r.resumeToken.approximateByteSize()>0),Yu:o}:{Yu:o}}Ru(e){return this.current&&e==="Offline"?(this.current=!1,this.applyChanges({Gu:this.Gu,ju:new uw,mutatedKeys:this.mutatedKeys,Mi:!1},!1)):{Yu:[]}}Zu(e){return!this.Lu.has(e)&&!!this.Gu.has(e)&&!this.Gu.get(e).hasLocalMutations}Hu(e){e&&(e.addedDocuments.forEach(n=>this.Lu=this.Lu.add(n)),e.modifiedDocuments.forEach(n=>{}),e.removedDocuments.forEach(n=>this.Lu=this.Lu.delete(n)),this.current=e.current)}Ju(){if(!this.current)return[];const e=this.Uu;this.Uu=ce(),this.Gu.forEach(r=>{this.Zu(r.key)&&(this.Uu=this.Uu.add(r.key))});const n=[];return e.forEach(r=>{this.Uu.has(r)||n.push(new gT(r))}),this.Uu.forEach(r=>{e.has(r)||n.push(new mT(r))}),n}Xu(e){this.Lu=e.Wi,this.Uu=ce();const n=this.zu(e.documents);return this.applyChanges(n,!0)}tc(){return so.fromInitialDocuments(this.query,this.Gu,this.mutatedKeys,this.qu===0,this.hasCachedResults)}}class B2{constructor(e,n,r){this.query=e,this.targetId=n,this.view=r}}class $2{constructor(e){this.key=e,this.ec=!1}}class q2{constructor(e,n,r,i,s,o){this.localStore=e,this.remoteStore=n,this.eventManager=r,this.sharedClientState=i,this.currentUser=s,this.maxConcurrentLimboResolutions=o,this.nc={},this.sc=new ci(a=>hE(a),Ic),this.ic=new Map,this.rc=new Set,this.oc=new We(L.comparator),this.uc=new Map,this.cc=new Tm,this.ac={},this.hc=new Map,this.lc=ts.bn(),this.onlineState="Unknown",this.fc=void 0}get isPrimaryClient(){return this.fc===!0}}async function j2(t,e){const n=qm(t);let r,i;const s=n.sc.get(e);if(s)r=s.targetId,n.sharedClientState.addLocalQueryTarget(r),i=s.view.tc();else{const o=await ro(n.localStore,Gt(e));n.isPrimaryClient&&fh(n.remoteStore,o);const a=n.sharedClientState.addLocalQueryTarget(o.targetId);r=o.targetId,i=await Um(n,e,r,a==="current",o.resumeToken)}return i}async function Um(t,e,n,r,i){t.dc=(h,d,f)=>async function(g,y,E,v){let I=y.view.zu(E);I.Mi&&(I=await ol(g.localStore,y.query,!1).then(({documents:M})=>y.view.zu(M,I)));const b=v&&v.targetChanges.get(y.targetId),x=y.view.applyChanges(I,g.isPrimaryClient,b);return Cf(g,y.targetId,x.Yu),x.snapshot}(t,h,d,f);const s=await ol(t.localStore,e,!0),o=new yT(e,s.Wi),a=o.zu(s.documents),c=kc.createSynthesizedTargetChangeForCurrentChange(n,r&&t.onlineState!=="Offline",i),u=o.applyChanges(a,t.isPrimaryClient,c);Cf(t,n,u.Yu);const l=new B2(e,n,o);return t.sc.set(e,l),t.ic.has(n)?t.ic.get(n).push(e):t.ic.set(n,[e]),u.snapshot}async function z2(t,e){const n=U(t),r=n.sc.get(e),i=n.ic.get(r.targetId);if(i.length>1)return n.ic.set(r.targetId,i.filter(s=>!Ic(s,e))),void n.sc.delete(e);n.isPrimaryClient?(n.sharedClientState.removeLocalQueryTarget(r.targetId),n.sharedClientState.isActiveQueryTarget(r.targetId)||await io(n.localStore,r.targetId,!1).then(()=>{n.sharedClientState.clearQueryState(r.targetId),Wa(n.remoteStore,r.targetId),oo(n,r.targetId)}).catch(oi)):(oo(n,r.targetId),await io(n.localStore,r.targetId,!0))}async function H2(t,e,n){const r=jm(t);try{const i=await function(s,o){const a=U(s),c=Ue.now(),u=o.reduce((d,f)=>d.add(f.key),ce());let l,h;return a.persistence.runTransaction("Locally write mutations","readwrite",d=>{let f=Kt(),g=ce();return a.Ki.getEntries(d,u).next(y=>{f=y,f.forEach((E,v)=>{v.isValidDocument()||(g=g.add(E))})}).next(()=>a.localDocuments.getOverlayedDocuments(d,f)).next(y=>{l=y;const E=[];for(const v of o){const I=IM(v,l.get(v.key).overlayedDocument);I!=null&&E.push(new gr(v.key,I,nE(I.value.mapValue),Fe.exists(!0)))}return a.mutationQueue.addMutationBatch(d,c,E,o)}).next(y=>{h=y;const E=y.applyToLocalDocumentSet(l,g);return a.documentOverlayCache.saveOverlays(d,y.batchId,E)})}).then(()=>({batchId:h.batchId,changes:mE(l)}))}(r.localStore,e);r.sharedClientState.addPendingMutation(i.batchId),function(s,o,a){let c=s.ac[s.currentUser.toKey()];c||(c=new We(ae)),c=c.insert(o,a),s.ac[s.currentUser.toKey()]=c}(r,i.batchId,n),await yr(r,i.changes),await ko(r.remoteStore)}catch(i){const s=Co(i,"Failed to persist write");n.reject(s)}}async function vT(t,e){const n=U(t);try{const r=await d2(n.localStore,e);e.targetChanges.forEach((i,s)=>{const o=n.uc.get(s);o&&(X(i.addedDocuments.size+i.modifiedDocuments.size+i.removedDocuments.size<=1),i.addedDocuments.size>0?o.ec=!0:i.modifiedDocuments.size>0?X(o.ec):i.removedDocuments.size>0&&(X(o.ec),o.ec=!1))}),await yr(n,r,e)}catch(r){await oi(r)}}function hw(t,e,n){const r=U(t);if(r.isPrimaryClient&&n===0||!r.isPrimaryClient&&n===1){const i=[];r.sc.forEach((s,o)=>{const a=o.view.Ru(e);a.snapshot&&i.push(a.snapshot)}),function(s,o){const a=U(s);a.onlineState=o;let c=!1;a.queries.forEach((u,l)=>{for(const h of l.listeners)h.Ru(o)&&(c=!0)}),c&&Mm(a)}(r.eventManager,e),i.length&&r.nc.zo(i),r.onlineState=e,r.isPrimaryClient&&r.sharedClientState.setOnlineState(e)}}async function K2(t,e,n){const r=U(t);r.sharedClientState.updateQueryState(e,"rejected",n);const i=r.uc.get(e),s=i&&i.key;if(s){let o=new We(L.comparator);o=o.insert(s,Ne.newNoDocument(s,J.min()));const a=ce().add(s),c=new Sc(J.min(),new Map,new Se(ae),o,a);await vT(r,c),r.oc=r.oc.remove(s),r.uc.delete(e),$m(r)}else await io(r.localStore,e,!1).then(()=>oo(r,e,n)).catch(oi)}async function W2(t,e){const n=U(t),r=e.batch.batchId;try{const i=await h2(n.localStore,e);Bm(n,r,null),Vm(n,r),n.sharedClientState.updateMutationState(r,"acknowledged"),await yr(n,i)}catch(i){await oi(i)}}async function G2(t,e,n){const r=U(t);try{const i=await function(s,o){const a=U(s);return a.persistence.runTransaction("Reject batch","readwrite-primary",c=>{let u;return a.mutationQueue.lookupMutationBatch(c,o).next(l=>(X(l!==null),u=l.keys(),a.mutationQueue.removeMutationBatch(c,l))).next(()=>a.mutationQueue.performConsistencyCheck(c)).next(()=>a.documentOverlayCache.removeOverlaysForBatchId(c,u,o)).next(()=>a.localDocuments.recalculateAndSaveOverlaysForDocumentKeys(c,u)).next(()=>a.localDocuments.getDocuments(c,u))})}(r.localStore,e);Bm(r,e,n),Vm(r,e),r.sharedClientState.updateMutationState(e,"rejected",n),await yr(r,i)}catch(i){await oi(i)}}async function Y2(t,e){const n=U(t);ui(n.remoteStore)||R("SyncEngine","The network is disabled. The task returned by 'awaitPendingWrites()' will not complete until the network is enabled.");try{const r=await function(s){const o=U(s);return o.persistence.runTransaction("Get highest unacknowledged batch id","readonly",a=>o.mutationQueue.getHighestUnacknowledgedBatchId(a))}(n.localStore);if(r===-1)return void e.resolve();const i=n.hc.get(r)||[];i.push(e),n.hc.set(r,i)}catch(r){const i=Co(r,"Initialization of waitForPendingWrites() operation failed");e.reject(i)}}function Vm(t,e){(t.hc.get(e)||[]).forEach(n=>{n.resolve()}),t.hc.delete(e)}function Bm(t,e,n){const r=U(t);let i=r.ac[r.currentUser.toKey()];if(i){const s=i.get(e);s&&(n?s.reject(n):s.resolve(),i=i.remove(e)),r.ac[r.currentUser.toKey()]=i}}function oo(t,e,n=null){t.sharedClientState.removeLocalQueryTarget(e);for(const r of t.ic.get(e))t.sc.delete(r),n&&t.nc.wc(r,n);t.ic.delete(e),t.isPrimaryClient&&t.cc.hs(e).forEach(r=>{t.cc.containsKey(r)||wT(t,r)})}function wT(t,e){t.rc.delete(e.path.canonicalString());const n=t.oc.get(e);n!==null&&(Wa(t.remoteStore,n),t.oc=t.oc.remove(e),t.uc.delete(n),$m(t))}function Cf(t,e,n){for(const r of n)r instanceof mT?(t.cc.addReference(r.key,e),Q2(t,r)):r instanceof gT?(R("SyncEngine","Document no longer in limbo: "+r.key),t.cc.removeReference(r.key,e),t.cc.containsKey(r.key)||wT(t,r.key)):$()}function Q2(t,e){const n=e.key,r=n.path.canonicalString();t.oc.get(n)||t.rc.has(r)||(R("SyncEngine","New document in limbo: "+n),t.rc.add(r),$m(t))}function $m(t){for(;t.rc.size>0&&t.oc.size<t.maxConcurrentLimboResolutions;){const e=t.rc.values().next().value;t.rc.delete(e);const n=new L(me.fromString(e)),r=t.lc.next();t.uc.set(r,new $2(n)),t.oc=t.oc.insert(n,r),fh(t.remoteStore,new Br(Gt(Io(n.path)),r,2,zt.ct))}}async function yr(t,e,n){const r=U(t),i=[],s=[],o=[];r.sc.isEmpty()||(r.sc.forEach((a,c)=>{o.push(r.dc(c,e,n).then(u=>{if((u||n)&&r.isPrimaryClient&&r.sharedClientState.updateQueryState(c.targetId,u!=null&&u.fromCache?"not-current":"current"),u){i.push(u);const l=Am.Di(c.targetId,u);s.push(l)}}))}),await Promise.all(o),r.nc.zo(i),await async function(a,c){const u=U(a);try{await u.persistence.runTransaction("notifyLocalViewChanges","readwrite",l=>w.forEach(c,h=>w.forEach(h.Vi,d=>u.persistence.referenceDelegate.addReference(l,h.targetId,d)).next(()=>w.forEach(h.Si,d=>u.persistence.referenceDelegate.removeReference(l,h.targetId,d)))))}catch(l){if(!ai(l))throw l;R("LocalStore","Failed to update sequence numbers: "+l)}for(const l of c){const h=l.targetId;if(!l.fromCache){const d=u.Li.get(h),f=d.snapshotVersion,g=d.withLastLimboFreeSnapshotVersion(f);u.Li=u.Li.insert(h,g)}}}(r.localStore,s))}async function X2(t,e){const n=U(t);if(!n.currentUser.isEqual(e)){R("SyncEngine","User change. New user:",e.toKey());const r=await eT(n.localStore,e);n.currentUser=e,function(i,s){i.hc.forEach(o=>{o.forEach(a=>{a.reject(new A(_.CANCELLED,s))})}),i.hc.clear()}(n,"'waitForPendingWrites' promise is rejected due to a user change."),n.sharedClientState.handleUserChange(e,r.removedBatchIds,r.addedBatchIds),await yr(n,r.Qi)}}function J2(t,e){const n=U(t),r=n.uc.get(e);if(r&&r.ec)return ce().add(r.key);{let i=ce();const s=n.ic.get(e);if(!s)return i;for(const o of s){const a=n.sc.get(o);i=i.unionWith(a.view.Qu)}return i}}async function Z2(t,e){const n=U(t),r=await ol(n.localStore,e.query,!0),i=e.view.Xu(r);return n.isPrimaryClient&&Cf(n,e.targetId,i.Yu),i}async function eF(t,e){const n=U(t);return iT(n.localStore,e).then(r=>yr(n,r))}async function tF(t,e,n,r){const i=U(t),s=await function(o,a){const c=U(o),u=U(c.mutationQueue);return c.persistence.runTransaction("Lookup mutation documents","readonly",l=>u.In(l,a).next(h=>h?c.localDocuments.getDocuments(l,h):w.resolve(null)))}(i.localStore,e);s!==null?(n==="pending"?await ko(i.remoteStore):n==="acknowledged"||n==="rejected"?(Bm(i,e,r||null),Vm(i,e),function(o,a){U(U(o).mutationQueue).En(a)}(i.localStore,e)):$(),await yr(i,s)):R("SyncEngine","Cannot apply mutation batch with id: "+e)}async function nF(t,e){const n=U(t);if(qm(n),jm(n),e===!0&&n.fc!==!0){const r=n.sharedClientState.getAllActiveQueryTargets(),i=await dw(n,r.toArray());n.fc=!0,await Af(n.remoteStore,!0);for(const s of i)fh(n.remoteStore,s)}else if(e===!1&&n.fc!==!1){const r=[];let i=Promise.resolve();n.ic.forEach((s,o)=>{n.sharedClientState.isLocalQueryTarget(o)?r.push(o):i=i.then(()=>(oo(n,o),io(n.localStore,o,!0))),Wa(n.remoteStore,o)}),await i,await dw(n,r),function(s){const o=U(s);o.uc.forEach((a,c)=>{Wa(o.remoteStore,c)}),o.cc.ls(),o.uc=new Map,o.oc=new We(L.comparator)}(n),n.fc=!1,await Af(n.remoteStore,!1)}}async function dw(t,e,n){const r=U(t),i=[],s=[];for(const o of e){let a;const c=r.ic.get(o);if(c&&c.length!==0){a=await ro(r.localStore,Gt(c[0]));for(const u of c){const l=r.sc.get(u),h=await Z2(r,l);h.snapshot&&s.push(h.snapshot)}}else{const u=await rT(r.localStore,o);a=await ro(r.localStore,u),await Um(r,_T(u),o,!1,a.resumeToken)}i.push(a)}return r.nc.zo(s),i}function _T(t){return lE(t.path,t.collectionGroup,t.orderBy,t.filters,t.limit,"F",t.startAt,t.endAt)}function rF(t){const e=U(t);return U(U(e.localStore).persistence).bi()}async function iF(t,e,n,r){const i=U(t);if(i.fc)return void R("SyncEngine","Ignoring unexpected query state notification.");const s=i.ic.get(e);if(s&&s.length>0)switch(n){case"current":case"not-current":{const o=await iT(i.localStore,dE(s[0])),a=Sc.createSynthesizedRemoteEventForCurrentChange(e,n==="current",ot.EMPTY_BYTE_STRING);await yr(i,o,a);break}case"rejected":await io(i.localStore,e,!0),oo(i,e,r);break;default:$()}}async function sF(t,e,n){const r=qm(t);if(r.fc){for(const i of e){if(r.ic.has(i)){R("SyncEngine","Adding an already active target "+i);continue}const s=await rT(r.localStore,i),o=await ro(r.localStore,s);await Um(r,_T(s),o.targetId,!1,o.resumeToken),fh(r.remoteStore,o)}for(const i of n)r.ic.has(i)&&await io(r.localStore,i,!1).then(()=>{Wa(r.remoteStore,i),oo(r,i)}).catch(oi)}}function qm(t){const e=U(t);return e.remoteStore.remoteSyncer.applyRemoteEvent=vT.bind(null,e),e.remoteStore.remoteSyncer.getRemoteKeysForTarget=J2.bind(null,e),e.remoteStore.remoteSyncer.rejectListen=K2.bind(null,e),e.nc.zo=M2.bind(null,e.eventManager),e.nc.wc=F2.bind(null,e.eventManager),e}function jm(t){const e=U(t);return e.remoteStore.remoteSyncer.applySuccessfulWrite=W2.bind(null,e),e.remoteStore.remoteSyncer.rejectFailedWrite=G2.bind(null,e),e}function oF(t,e,n){const r=U(t);(async function(i,s,o){try{const a=await s.getMetadata();if(await function(h,d){const f=U(h),g=Je(d.createTime);return f.persistence.runTransaction("hasNewerBundle","readonly",y=>f.xs.getBundleMetadata(y,d.id)).then(y=>!!y&&y.createTime.compareTo(g)>=0)}(i.localStore,a))return await s.close(),o._completeWith(function(h){return{taskState:"Success",documentsLoaded:h.totalDocuments,bytesLoaded:h.totalBytes,totalDocuments:h.totalDocuments,totalBytes:h.totalBytes}}(a)),Promise.resolve(new Set);o._updateProgress(pT(a));const c=new V2(a,i.localStore,s.serializer);let u=await s._c();for(;u;){const h=await c.$u(u);h&&o._updateProgress(h),u=await s._c()}const l=await c.complete();return await yr(i,l.Bu,void 0),await function(h,d){const f=U(h);return f.persistence.runTransaction("Save bundle","readwrite",g=>f.xs.saveBundleMetadata(g,d))}(i.localStore,a),o._completeWith(l.progress),Promise.resolve(l.Fu)}catch(a){return or("SyncEngine",`Loading bundle failed with ${a}`),o._failWith(a),Promise.resolve(new Set)}})(r,e,n).then(i=>{r.sharedClientState.notifyBundleLoaded(i)})}class Rf{constructor(){this.synchronizeTabs=!1}async initialize(e){this.serializer=Ac(e.databaseInfo.databaseId),this.sharedClientState=this.createSharedClientState(e),this.persistence=this.createPersistence(e),await this.persistence.start(),this.localStore=this.createLocalStore(e),this.gcScheduler=this.createGarbageCollectionScheduler(e,this.localStore),this.indexBackfillerScheduler=this.createIndexBackfillerScheduler(e,this.localStore)}createGarbageCollectionScheduler(e,n){return null}createIndexBackfillerScheduler(e,n){return null}createLocalStore(e){return ZE(this.persistence,new JE,e.initialUser,this.serializer)}createPersistence(e){return new XE(dh.Fs,this.serializer)}createSharedClientState(e){return new oT}async terminate(){this.gcScheduler&&this.gcScheduler.stop(),await this.sharedClientState.shutdown(),await this.persistence.shutdown()}}class bT extends Rf{constructor(e,n,r){super(),this.mc=e,this.cacheSizeBytes=n,this.forceOwnership=r,this.synchronizeTabs=!1}async initialize(e){await super.initialize(e),await this.mc.initialize(this,e),await jm(this.mc.syncEngine),await ko(this.mc.remoteStore),await this.persistence.hi(()=>(this.gcScheduler&&!this.gcScheduler.started&&this.gcScheduler.start(),this.indexBackfillerScheduler&&!this.indexBackfillerScheduler.started&&this.indexBackfillerScheduler.start(),Promise.resolve()))}createLocalStore(e){return ZE(this.persistence,new JE,e.initialUser,this.serializer)}createGarbageCollectionScheduler(e,n){const r=this.persistence.referenceDelegate.garbageCollector;return new QM(r,e.asyncQueue,n)}createIndexBackfillerScheduler(e,n){const r=new DL(n,this.persistence);return new PL(e.asyncQueue,r)}createPersistence(e){const n=km(e.databaseInfo.databaseId,e.databaseInfo.persistenceKey),r=this.cacheSizeBytes!==void 0?qt.withCacheSize(this.cacheSizeBytes):qt.DEFAULT;return new Sm(this.synchronizeTabs,n,e.clientId,r,e.asyncQueue,aT(),Cu(),this.serializer,this.sharedClientState,!!this.forceOwnership)}createSharedClientState(e){return new oT}}class aF extends bT{constructor(e,n){super(e,n,!1),this.mc=e,this.cacheSizeBytes=n,this.synchronizeTabs=!0}async initialize(e){await super.initialize(e);const n=this.mc.syncEngine;this.sharedClientState instanceof md&&(this.sharedClientState.syncEngine={$r:tF.bind(null,n),Mr:iF.bind(null,n),Fr:sF.bind(null,n),bi:rF.bind(null,n),Or:eF.bind(null,n)},await this.sharedClientState.start()),await this.persistence.hi(async r=>{await nF(this.mc.syncEngine,r),this.gcScheduler&&(r&&!this.gcScheduler.started?this.gcScheduler.start():r||this.gcScheduler.stop()),this.indexBackfillerScheduler&&(r&&!this.indexBackfillerScheduler.started?this.indexBackfillerScheduler.start():r||this.indexBackfillerScheduler.stop())})}createSharedClientState(e){const n=aT();if(!md.D(n))throw new A(_.UNIMPLEMENTED,"IndexedDB persistence is only available on platforms that support LocalStorage.");const r=km(e.databaseInfo.databaseId,e.databaseInfo.persistenceKey);return new md(n,e.asyncQueue,r,e.clientId,e.initialUser)}}class zm{async initialize(e,n){this.localStore||(this.localStore=e.localStore,this.sharedClientState=e.sharedClientState,this.datastore=this.createDatastore(n),this.remoteStore=this.createRemoteStore(n),this.eventManager=this.createEventManager(n),this.syncEngine=this.createSyncEngine(n,!e.synchronizeTabs),this.sharedClientState.onlineStateHandler=r=>hw(this.syncEngine,r,1),this.remoteStore.remoteSyncer.handleCredentialChange=X2.bind(null,this.syncEngine),await Af(this.remoteStore,this.syncEngine.isPrimaryClient))}createEventManager(e){return new L2}createDatastore(e){const n=Ac(e.databaseInfo.databaseId),r=(i=e.databaseInfo,new w2(i));var i;return function(s,o,a,c){return new I2(s,o,a,c)}(e.authCredentials,e.appCheckCredentials,r,n)}createRemoteStore(e){return n=this.localStore,r=this.datastore,i=e.asyncQueue,s=a=>hw(this.syncEngine,a,0),o=aw.D()?new aw:new g2,new T2(n,r,i,s,o);var n,r,i,s,o}createSyncEngine(e,n){return function(r,i,s,o,a,c,u){const l=new q2(r,i,s,o,a,c);return u&&(l.fc=!0),l}(this.localStore,this.remoteStore,this.eventManager,this.sharedClientState,e.initialUser,e.maxConcurrentLimboResolutions,n)}terminate(){return async function(e){const n=U(e);R("RemoteStore","RemoteStore shutting down."),n.du.add(5),await So(n),n._u.shutdown(),n.mu.set("Unknown")}(this.remoteStore)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function fw(t,e=10240){let n=0;return{async read(){if(n<t.byteLength){const r={value:t.slice(n,n+e),done:!1};return n+=e,r}return{done:!0}},async cancel(){},releaseLock(){},closed:Promise.resolve()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 *//**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ph{constructor(e){this.observer=e,this.muted=!1}next(e){this.observer.next&&this.gc(this.observer.next,e)}error(e){this.observer.error?this.gc(this.observer.error,e):Qe("Uncaught Error in snapshot listener:",e.toString())}yc(){this.muted=!0}gc(e,n){this.muted||setTimeout(()=>{this.muted||e(n)},0)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class cF{constructor(e,n){this.Ic=e,this.serializer=n,this.metadata=new ht,this.buffer=new Uint8Array,this.Tc=new TextDecoder("utf-8"),this.Ec().then(r=>{r&&r.ku()?this.metadata.resolve(r.Nu.metadata):this.metadata.reject(new Error(`The first element of the bundle is not a metadata, it is
             ${JSON.stringify(r==null?void 0:r.Nu)}`))},r=>this.metadata.reject(r))}close(){return this.Ic.cancel()}async getMetadata(){return this.metadata.promise}async _c(){return await this.getMetadata(),this.Ec()}async Ec(){const e=await this.Ac();if(e===null)return null;const n=this.Tc.decode(e),r=Number(n);isNaN(r)&&this.Rc(`length string (${n}) is not valid number`);const i=await this.vc(r);return new U2(JSON.parse(i),e.length+r)}bc(){return this.buffer.findIndex(e=>e==="{".charCodeAt(0))}async Ac(){for(;this.bc()<0&&!await this.Pc(););if(this.buffer.length===0)return null;const e=this.bc();e<0&&this.Rc("Reached the end of bundle when a length string is expected.");const n=this.buffer.slice(0,e);return this.buffer=this.buffer.slice(e),n}async vc(e){for(;this.buffer.length<e;)await this.Pc()&&this.Rc("Reached the end of bundle when more is expected.");const n=this.Tc.decode(this.buffer.slice(0,e));return this.buffer=this.buffer.slice(e),n}Rc(e){throw this.Ic.cancel(),new Error(`Invalid bundle format: ${e}`)}async Pc(){const e=await this.Ic.read();if(!e.done){const n=new Uint8Array(this.buffer.length+e.value.length);n.set(this.buffer),n.set(e.value,this.buffer.length),this.buffer=n}return e.done}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class uF{constructor(e){this.datastore=e,this.readVersions=new Map,this.mutations=[],this.committed=!1,this.lastWriteError=null,this.writtenDocs=new Set}async lookup(e){if(this.ensureCommitNotCalled(),this.mutations.length>0)throw new A(_.INVALID_ARGUMENT,"Firestore transactions require all reads to be executed before all writes.");const n=await async function(r,i){const s=U(r),o=Ha(s.serializer)+"/documents",a={documents:i.map(h=>za(s.serializer,h))},c=await s.fo("BatchGetDocuments",o,a,i.length),u=new Map;c.forEach(h=>{const d=xM(s.serializer,h);u.set(d.key.toString(),d)});const l=[];return i.forEach(h=>{const d=u.get(h.toString());X(!!d),l.push(d)}),l}(this.datastore,e);return n.forEach(r=>this.recordVersion(r)),n}set(e,n){this.write(n.toMutation(e,this.precondition(e))),this.writtenDocs.add(e.toString())}update(e,n){try{this.write(n.toMutation(e,this.preconditionForUpdate(e)))}catch(r){this.lastWriteError=r}this.writtenDocs.add(e.toString())}delete(e){this.write(new To(e,this.precondition(e))),this.writtenDocs.add(e.toString())}async commit(){if(this.ensureCommitNotCalled(),this.lastWriteError)throw this.lastWriteError;const e=this.readVersions;this.mutations.forEach(n=>{e.delete(n.key.toString())}),e.forEach((n,r)=>{const i=L.fromPath(r);this.mutations.push(new mm(i,this.precondition(i)))}),await async function(n,r){const i=U(n),s=Ha(i.serializer)+"/documents",o={writes:r.map(a=>Ka(i.serializer,a))};await i.co("Commit",s,o)}(this.datastore,this.mutations),this.committed=!0}recordVersion(e){let n;if(e.isFoundDocument())n=e.version;else{if(!e.isNoDocument())throw $();n=J.min()}const r=this.readVersions.get(e.key.toString());if(r){if(!n.isEqual(r))throw new A(_.ABORTED,"Document version changed between two reads.")}else this.readVersions.set(e.key.toString(),n)}precondition(e){const n=this.readVersions.get(e.toString());return!this.writtenDocs.has(e.toString())&&n?n.isEqual(J.min())?Fe.exists(!1):Fe.updateTime(n):Fe.none()}preconditionForUpdate(e){const n=this.readVersions.get(e.toString());if(!this.writtenDocs.has(e.toString())&&n){if(n.isEqual(J.min()))throw new A(_.INVALID_ARGUMENT,"Can't update a document that doesn't exist.");return Fe.updateTime(n)}return Fe.exists(!0)}write(e){this.ensureCommitNotCalled(),this.mutations.push(e)}ensureCommitNotCalled(){}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class lF{constructor(e,n,r,i,s){this.asyncQueue=e,this.datastore=n,this.options=r,this.updateFunction=i,this.deferred=s,this.Vc=r.maxAttempts,this.Co=new Rm(this.asyncQueue,"transaction_retry")}run(){this.Vc-=1,this.Sc()}Sc(){this.Co.Ao(async()=>{const e=new uF(this.datastore),n=this.Dc(e);n&&n.then(r=>{this.asyncQueue.enqueueAndForget(()=>e.commit().then(()=>{this.deferred.resolve(r)}).catch(i=>{this.Cc(i)}))}).catch(r=>{this.Cc(r)})})}Dc(e){try{const n=this.updateFunction(e);return!_c(n)&&n.catch&&n.then?n:(this.deferred.reject(Error("Transaction callback must return a Promise")),null)}catch(n){return this.deferred.reject(n),null}}Cc(e){this.Vc>0&&this.xc(e)?(this.Vc-=1,this.asyncQueue.enqueueAndForget(()=>(this.Sc(),Promise.resolve()))):this.deferred.reject(e)}xc(e){if(e.name==="FirebaseError"){const n=e.code;return n==="aborted"||n==="failed-precondition"||n==="already-exists"||!kE(n)}return!1}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class hF{constructor(e,n,r,i){this.authCredentials=e,this.appCheckCredentials=n,this.asyncQueue=r,this.databaseInfo=i,this.user=lt.UNAUTHENTICATED,this.clientId=$0.A(),this.authCredentialListener=()=>Promise.resolve(),this.appCheckCredentialListener=()=>Promise.resolve(),this.authCredentials.start(r,async s=>{R("FirestoreClient","Received user=",s.uid),await this.authCredentialListener(s),this.user=s}),this.appCheckCredentials.start(r,s=>(R("FirestoreClient","Received new app check token=",s),this.appCheckCredentialListener(s,this.user)))}async getConfiguration(){return{asyncQueue:this.asyncQueue,databaseInfo:this.databaseInfo,clientId:this.clientId,authCredentials:this.authCredentials,appCheckCredentials:this.appCheckCredentials,initialUser:this.user,maxConcurrentLimboResolutions:100}}setCredentialChangeListener(e){this.authCredentialListener=e}setAppCheckTokenChangeListener(e){this.appCheckCredentialListener=e}verifyNotTerminated(){if(this.asyncQueue.isShuttingDown)throw new A(_.FAILED_PRECONDITION,"The client has already been terminated.")}terminate(){this.asyncQueue.enterRestrictedMode();const e=new ht;return this.asyncQueue.enqueueAndForgetEvenWhileRestricted(async()=>{try{this._onlineComponents&&await this._onlineComponents.terminate(),this._offlineComponents&&await this._offlineComponents.terminate(),this.authCredentials.shutdown(),this.appCheckCredentials.shutdown(),e.resolve()}catch(n){const r=Co(n,"Failed to shutdown persistence");e.reject(r)}}),e.promise}}async function Ru(t,e){t.asyncQueue.verifyOperationInProgress(),R("FirestoreClient","Initializing OfflineComponentProvider");const n=await t.getConfiguration();await e.initialize(n);let r=n.initialUser;t.setCredentialChangeListener(async i=>{r.isEqual(i)||(await eT(e.localStore,i),r=i)}),e.persistence.setDatabaseDeletedListener(()=>t.terminate()),t._offlineComponents=e}async function xf(t,e){t.asyncQueue.verifyOperationInProgress();const n=await Hm(t);R("FirestoreClient","Initializing OnlineComponentProvider");const r=await t.getConfiguration();await e.initialize(n,r),t.setCredentialChangeListener(i=>cw(e.remoteStore,i)),t.setAppCheckTokenChangeListener((i,s)=>cw(e.remoteStore,s)),t._onlineComponents=e}function IT(t){return t.name==="FirebaseError"?t.code===_.FAILED_PRECONDITION||t.code===_.UNIMPLEMENTED:!(typeof DOMException<"u"&&t instanceof DOMException)||t.code===22||t.code===20||t.code===11}async function Hm(t){if(!t._offlineComponents)if(t._uninitializedComponentsProvider){R("FirestoreClient","Using user provided OfflineComponentProvider");try{await Ru(t,t._uninitializedComponentsProvider._offline)}catch(e){const n=e;if(!IT(n))throw n;or("Error using user provided cache. Falling back to memory cache: "+n),await Ru(t,new Rf)}}else R("FirestoreClient","Using default OfflineComponentProvider"),await Ru(t,new Rf);return t._offlineComponents}async function mh(t){return t._onlineComponents||(t._uninitializedComponentsProvider?(R("FirestoreClient","Using user provided OnlineComponentProvider"),await xf(t,t._uninitializedComponentsProvider._online)):(R("FirestoreClient","Using default OnlineComponentProvider"),await xf(t,new zm))),t._onlineComponents}function ET(t){return Hm(t).then(e=>e.persistence)}function Km(t){return Hm(t).then(e=>e.localStore)}function TT(t){return mh(t).then(e=>e.remoteStore)}function Wm(t){return mh(t).then(e=>e.syncEngine)}function dF(t){return mh(t).then(e=>e.datastore)}async function ao(t){const e=await mh(t),n=e.eventManager;return n.onListen=j2.bind(null,e.syncEngine),n.onUnlisten=z2.bind(null,e.syncEngine),n}function fF(t){return t.asyncQueue.enqueue(async()=>{const e=await ET(t),n=await TT(t);return e.setNetworkEnabled(!0),function(r){const i=U(r);return i.du.delete(0),Cc(i)}(n)})}function pF(t){return t.asyncQueue.enqueue(async()=>{const e=await ET(t),n=await TT(t);return e.setNetworkEnabled(!1),async function(r){const i=U(r);i.du.add(0),await So(i),i.mu.set("Offline")}(n)})}function mF(t,e){const n=new ht;return t.asyncQueue.enqueueAndForget(async()=>async function(r,i,s){try{const o=await function(a,c){const u=U(a);return u.persistence.runTransaction("read document","readonly",l=>u.localDocuments.getDocument(l,c))}(r,i);o.isFoundDocument()?s.resolve(o):o.isNoDocument()?s.resolve(null):s.reject(new A(_.UNAVAILABLE,"Failed to get document from cache. (However, this document may exist on the server. Run again without setting 'source' in the GetOptions to attempt to retrieve the document from the server.)"))}catch(o){const a=Co(o,`Failed to get document '${i} from cache`);s.reject(a)}}(await Km(t),e,n)),n.promise}function ST(t,e,n={}){const r=new ht;return t.asyncQueue.enqueueAndForget(async()=>function(i,s,o,a,c){const u=new ph({next:h=>{s.enqueueAndForget(()=>Lm(i,l));const d=h.docs.has(o);!d&&h.fromCache?c.reject(new A(_.UNAVAILABLE,"Failed to get document because the client is offline.")):d&&h.fromCache&&a&&a.source==="server"?c.reject(new A(_.UNAVAILABLE,'Failed to get document from server. (However, this document does exist in the local cache. Run again without setting source to "server" to retrieve the cached document.)')):c.resolve(h)},error:h=>c.reject(h)}),l=new Fm(Io(o.path),u,{includeMetadataChanges:!0,xu:!0});return Om(i,l)}(await ao(t),t.asyncQueue,e,n,r)),r.promise}function gF(t,e){const n=new ht;return t.asyncQueue.enqueueAndForget(async()=>async function(r,i,s){try{const o=await ol(r,i,!0),a=new yT(i,o.Wi),c=a.zu(o.documents),u=a.applyChanges(c,!1);s.resolve(u.snapshot)}catch(o){const a=Co(o,`Failed to execute query '${i} against cache`);s.reject(a)}}(await Km(t),e,n)),n.promise}function kT(t,e,n={}){const r=new ht;return t.asyncQueue.enqueueAndForget(async()=>function(i,s,o,a,c){const u=new ph({next:h=>{s.enqueueAndForget(()=>Lm(i,l)),h.fromCache&&a.source==="server"?c.reject(new A(_.UNAVAILABLE,'Failed to get documents from server. (However, these documents may exist in the local cache. Run again without setting source to "server" to retrieve the cached documents.)')):c.resolve(h)},error:h=>c.reject(h)}),l=new Fm(o,u,{includeMetadataChanges:!0,xu:!0});return Om(i,l)}(await ao(t),t.asyncQueue,e,n,r)),r.promise}function yF(t,e){const n=new ph(e);return t.asyncQueue.enqueueAndForget(async()=>function(r,i){U(r).Au.add(i),i.next()}(await ao(t),n)),()=>{n.yc(),t.asyncQueue.enqueueAndForget(async()=>function(r,i){U(r).Au.delete(i)}(await ao(t),n))}}function vF(t,e,n,r){const i=function(s,o){let a;return a=typeof s=="string"?new TextEncoder().encode(s):s,function(c,u){return new cF(c,u)}(function(c,u){if(c instanceof Uint8Array)return fw(c,u);if(c instanceof ArrayBuffer)return fw(new Uint8Array(c),u);if(c instanceof ReadableStream)return c.getReader();throw new Error("Source of `toByteStreamReader` has to be a ArrayBuffer or ReadableStream")}(a),o)}(n,Ac(e));t.asyncQueue.enqueueAndForget(async()=>{oF(await Wm(t),i,r)})}function wF(t,e){return t.asyncQueue.enqueue(async()=>function(n,r){const i=U(n);return i.persistence.runTransaction("Get named query","readonly",s=>i.xs.getNamedQuery(s,r))}(await Km(t),e))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const pw=new Map;/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Gm(t,e,n){if(!n)throw new A(_.INVALID_ARGUMENT,`Function ${t}() cannot be called with an empty ${e}.`)}function AT(t,e,n,r){if(e===!0&&r===!0)throw new A(_.INVALID_ARGUMENT,`${t} and ${n} cannot be used together.`)}function mw(t){if(!L.isDocumentKey(t))throw new A(_.INVALID_ARGUMENT,`Invalid document reference. Document references must have an even number of segments, but ${t} has ${t.length}.`)}function gw(t){if(L.isDocumentKey(t))throw new A(_.INVALID_ARGUMENT,`Invalid collection reference. Collection references must have an odd number of segments, but ${t} has ${t.length}.`)}function gh(t){if(t===void 0)return"undefined";if(t===null)return"null";if(typeof t=="string")return t.length>20&&(t=`${t.substring(0,20)}...`),JSON.stringify(t);if(typeof t=="number"||typeof t=="boolean")return""+t;if(typeof t=="object"){if(t instanceof Array)return"an array";{const e=function(n){return n.constructor?n.constructor.name:null}(t);return e?`a custom ${e} object`:"an object"}}return typeof t=="function"?"a function":$()}function ve(t,e){if("_delegate"in t&&(t=t._delegate),!(t instanceof e)){if(e.name===t.constructor.name)throw new A(_.INVALID_ARGUMENT,"Type does not match the expected instance. Did you pass a reference from a different Firestore SDK?");{const n=gh(t);throw new A(_.INVALID_ARGUMENT,`Expected type '${e.name}', but it was: ${n}`)}}return t}function CT(t,e){if(e<=0)throw new A(_.INVALID_ARGUMENT,`Function ${t}() requires a positive number, but it was: ${e}.`)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class yw{constructor(e){var n;if(e.host===void 0){if(e.ssl!==void 0)throw new A(_.INVALID_ARGUMENT,"Can't provide ssl option if host option is not set");this.host="firestore.googleapis.com",this.ssl=!0}else this.host=e.host,this.ssl=(n=e.ssl)===null||n===void 0||n;if(this.credentials=e.credentials,this.ignoreUndefinedProperties=!!e.ignoreUndefinedProperties,this.cache=e.localCache,e.cacheSizeBytes===void 0)this.cacheSizeBytes=41943040;else{if(e.cacheSizeBytes!==-1&&e.cacheSizeBytes<1048576)throw new A(_.INVALID_ARGUMENT,"cacheSizeBytes must be at least 1048576");this.cacheSizeBytes=e.cacheSizeBytes}this.experimentalForceLongPolling=!!e.experimentalForceLongPolling,this.experimentalAutoDetectLongPolling=!!e.experimentalAutoDetectLongPolling,this.useFetchStreams=!!e.useFetchStreams,AT("experimentalForceLongPolling",e.experimentalForceLongPolling,"experimentalAutoDetectLongPolling",e.experimentalAutoDetectLongPolling)}isEqual(e){return this.host===e.host&&this.ssl===e.ssl&&this.credentials===e.credentials&&this.cacheSizeBytes===e.cacheSizeBytes&&this.experimentalForceLongPolling===e.experimentalForceLongPolling&&this.experimentalAutoDetectLongPolling===e.experimentalAutoDetectLongPolling&&this.ignoreUndefinedProperties===e.ignoreUndefinedProperties&&this.useFetchStreams===e.useFetchStreams}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Rc{constructor(e,n,r,i){this._authCredentials=e,this._appCheckCredentials=n,this._databaseId=r,this._app=i,this.type="firestore-lite",this._persistenceKey="(lite)",this._settings=new yw({}),this._settingsFrozen=!1}get app(){if(!this._app)throw new A(_.FAILED_PRECONDITION,"Firestore was not initialized using the Firebase SDK. 'app' is not available");return this._app}get _initialized(){return this._settingsFrozen}get _terminated(){return this._terminateTask!==void 0}_setSettings(e){if(this._settingsFrozen)throw new A(_.FAILED_PRECONDITION,"Firestore has already been started and its settings can no longer be changed. You can only modify settings before calling any other methods on a Firestore object.");this._settings=new yw(e),e.credentials!==void 0&&(this._authCredentials=function(n){if(!n)return new _L;switch(n.type){case"firstParty":return new TL(n.sessionIndex||"0",n.iamToken||null,n.authTokenFactory||null);case"provider":return n.client;default:throw new A(_.INVALID_ARGUMENT,"makeAuthCredentialsProvider failed due to invalid credential type")}}(e.credentials))}_getSettings(){return this._settings}_freezeSettings(){return this._settingsFrozen=!0,this._settings}_delete(){return this._terminateTask||(this._terminateTask=this._terminate()),this._terminateTask}toJSON(){return{app:this._app,databaseId:this._databaseId,settings:this._settings}}_terminate(){return function(e){const n=pw.get(e);n&&(R("ComponentProvider","Removing Datastore"),pw.delete(e),n.terminate())}(this),Promise.resolve()}}function _F(t,e,n,r={}){var i;const s=(t=ve(t,Rc))._getSettings();if(s.host!=="firestore.googleapis.com"&&s.host!==e&&or("Host has been set in both settings() and useEmulator(), emulator host will be used"),t._setSettings(Object.assign(Object.assign({},s),{host:`${e}:${n}`,ssl:!1})),r.mockUserToken){let o,a;if(typeof r.mockUserToken=="string")o=r.mockUserToken,a=lt.MOCK_USER;else{o=Tb(r.mockUserToken,(i=t._app)===null||i===void 0?void 0:i.options.projectId);const c=r.mockUserToken.sub||r.mockUserToken.user_id;if(!c)throw new A(_.INVALID_ARGUMENT,"mockUserToken must contain 'sub' or 'user_id' field!");a=new lt(c)}t._authCredentials=new bL(new B0(o,a))}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class De{constructor(e,n,r){this.converter=n,this._key=r,this.type="document",this.firestore=e}get _path(){return this._key.path}get id(){return this._key.path.lastSegment()}get path(){return this._key.path.canonicalString()}get parent(){return new $n(this.firestore,this.converter,this._key.path.popLast())}withConverter(e){return new De(this.firestore,e,this._key)}}class It{constructor(e,n,r){this.converter=n,this._query=r,this.type="query",this.firestore=e}withConverter(e){return new It(this.firestore,e,this._query)}}class $n extends It{constructor(e,n,r){super(e,n,Io(r)),this._path=r,this.type="collection"}get id(){return this._query.path.lastSegment()}get path(){return this._query.path.canonicalString()}get parent(){const e=this._path.popLast();return e.isEmpty()?null:new De(this.firestore,null,new L(e))}withConverter(e){return new $n(this.firestore,e,this._path)}}function RT(t,e,...n){if(t=Y(t),Gm("collection","path",e),t instanceof Rc){const r=me.fromString(e,...n);return gw(r),new $n(t,null,r)}{if(!(t instanceof De||t instanceof $n))throw new A(_.INVALID_ARGUMENT,"Expected first argument to collection() to be a CollectionReference, a DocumentReference or FirebaseFirestore");const r=t._path.child(me.fromString(e,...n));return gw(r),new $n(t.firestore,null,r)}}function bF(t,e){if(t=ve(t,Rc),Gm("collectionGroup","collection id",e),e.indexOf("/")>=0)throw new A(_.INVALID_ARGUMENT,`Invalid collection ID '${e}' passed to function collectionGroup(). Collection IDs must not contain '/'.`);return new It(t,null,function(n){return new mr(me.emptyPath(),n)}(e))}function ll(t,e,...n){if(t=Y(t),arguments.length===1&&(e=$0.A()),Gm("doc","path",e),t instanceof Rc){const r=me.fromString(e,...n);return mw(r),new De(t,null,new L(r))}{if(!(t instanceof De||t instanceof $n))throw new A(_.INVALID_ARGUMENT,"Expected first argument to collection() to be a CollectionReference, a DocumentReference or FirebaseFirestore");const r=t._path.child(me.fromString(e,...n));return mw(r),new De(t.firestore,t instanceof $n?t.converter:null,new L(r))}}function xT(t,e){return t=Y(t),e=Y(e),(t instanceof De||t instanceof $n)&&(e instanceof De||e instanceof $n)&&t.firestore===e.firestore&&t.path===e.path&&t.converter===e.converter}function NT(t,e){return t=Y(t),e=Y(e),t instanceof It&&e instanceof It&&t.firestore===e.firestore&&Ic(t._query,e._query)&&t.converter===e.converter}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class IF{constructor(){this.Nc=Promise.resolve(),this.kc=[],this.Oc=!1,this.$c=[],this.Mc=null,this.Fc=!1,this.Bc=!1,this.Lc=[],this.Co=new Rm(this,"async_queue_retry"),this.qc=()=>{const n=Cu();n&&R("AsyncQueue","Visibility state changed to "+n.visibilityState),this.Co.vo()};const e=Cu();e&&typeof e.addEventListener=="function"&&e.addEventListener("visibilitychange",this.qc)}get isShuttingDown(){return this.Oc}enqueueAndForget(e){this.enqueue(e)}enqueueAndForgetEvenWhileRestricted(e){this.Uc(),this.Kc(e)}enterRestrictedMode(e){if(!this.Oc){this.Oc=!0,this.Bc=e||!1;const n=Cu();n&&typeof n.removeEventListener=="function"&&n.removeEventListener("visibilitychange",this.qc)}}enqueue(e){if(this.Uc(),this.Oc)return new Promise(()=>{});const n=new ht;return this.Kc(()=>this.Oc&&this.Bc?Promise.resolve():(e().then(n.resolve,n.reject),n.promise)).then(()=>n.promise)}enqueueRetryable(e){this.enqueueAndForget(()=>(this.kc.push(e),this.Gc()))}async Gc(){if(this.kc.length!==0){try{await this.kc[0](),this.kc.shift(),this.Co.reset()}catch(e){if(!ai(e))throw e;R("AsyncQueue","Operation failed with retryable error: "+e)}this.kc.length>0&&this.Co.Ao(()=>this.Gc())}}Kc(e){const n=this.Nc.then(()=>(this.Fc=!0,e().catch(r=>{this.Mc=r,this.Fc=!1;const i=function(s){let o=s.message||"";return s.stack&&(o=s.stack.includes(s.message)?s.stack:s.message+`
`+s.stack),o}(r);throw Qe("INTERNAL UNHANDLED ERROR: ",i),r}).then(r=>(this.Fc=!1,r))));return this.Nc=n,n}enqueueAfterDelay(e,n,r){this.Uc(),this.Lc.indexOf(e)>-1&&(n=0);const i=Dm.createAndSchedule(this,e,n,r,s=>this.Qc(s));return this.$c.push(i),i}Uc(){this.Mc&&$()}verifyOperationInProgress(){}async zc(){let e;do e=this.Nc,await e;while(e!==this.Nc)}jc(e){for(const n of this.$c)if(n.timerId===e)return!0;return!1}Wc(e){return this.zc().then(()=>{this.$c.sort((n,r)=>n.targetTimeMs-r.targetTimeMs);for(const n of this.$c)if(n.skipDelay(),e!=="all"&&n.timerId===e)break;return this.zc()})}Hc(e){this.Lc.push(e)}Qc(e){const n=this.$c.indexOf(e);this.$c.splice(n,1)}}function Nf(t){return function(e,n){if(typeof e!="object"||e===null)return!1;const r=e;for(const i of n)if(i in r&&typeof r[i]=="function")return!0;return!1}(t,["next","error","complete"])}class EF{constructor(){this._progressObserver={},this._taskCompletionResolver=new ht,this._lastProgress={taskState:"Running",totalBytes:0,totalDocuments:0,bytesLoaded:0,documentsLoaded:0}}onProgress(e,n,r){this._progressObserver={next:e,error:n,complete:r}}catch(e){return this._taskCompletionResolver.promise.catch(e)}then(e,n){return this._taskCompletionResolver.promise.then(e,n)}_completeWith(e){this._updateProgress(e),this._progressObserver.complete&&this._progressObserver.complete(),this._taskCompletionResolver.resolve(e)}_failWith(e){this._lastProgress.taskState="Error",this._progressObserver.next&&this._progressObserver.next(this._lastProgress),this._progressObserver.error&&this._progressObserver.error(e),this._taskCompletionResolver.reject(e)}_updateProgress(e){this._lastProgress=e,this._progressObserver.next&&this._progressObserver.next(e)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const TF=-1;class Ge extends Rc{constructor(e,n,r,i){super(e,n,r,i),this.type="firestore",this._queue=new IF,this._persistenceKey=(i==null?void 0:i.name)||"[DEFAULT]"}_terminate(){return this._firestoreClient||PT(this),this._firestoreClient.terminate()}}function pt(t){return t._firestoreClient||PT(t),t._firestoreClient.verifyNotTerminated(),t._firestoreClient}function PT(t){var e,n,r;const i=t._freezeSettings(),s=function(o,a,c,u){return new tM(o,a,c,u.host,u.ssl,u.experimentalForceLongPolling,u.experimentalAutoDetectLongPolling,u.useFetchStreams)}(t._databaseId,((e=t._app)===null||e===void 0?void 0:e.options.appId)||"",t._persistenceKey,i);t._firestoreClient=new hF(t._authCredentials,t._appCheckCredentials,t._queue,s),((n=i.cache)===null||n===void 0?void 0:n._offlineComponentProvider)&&((r=i.cache)===null||r===void 0?void 0:r._onlineComponentProvider)&&(t._firestoreClient._uninitializedComponentsProvider={_offlineKind:i.cache.kind,_offline:i.cache._offlineComponentProvider,_online:i.cache._onlineComponentProvider})}function SF(t,e){OT(t=ve(t,Ge));const n=pt(t);if(n._uninitializedComponentsProvider)throw new A(_.FAILED_PRECONDITION,"SDK cache is already specified.");or("enableIndexedDbPersistence() will be deprecated in the future, you can use `FirestoreSettings.cache` instead.");const r=t._freezeSettings(),i=new zm;return DT(n,i,new bT(i,r.cacheSizeBytes,e==null?void 0:e.forceOwnership))}function kF(t){OT(t=ve(t,Ge));const e=pt(t);if(e._uninitializedComponentsProvider)throw new A(_.FAILED_PRECONDITION,"SDK cache is already specified.");or("enableMultiTabIndexedDbPersistence() will be deprecated in the future, you can use `FirestoreSettings.cache` instead.");const n=t._freezeSettings(),r=new zm;return DT(e,r,new aF(r,n.cacheSizeBytes))}function DT(t,e,n){const r=new ht;return t.asyncQueue.enqueue(async()=>{try{await Ru(t,n),await xf(t,e),r.resolve()}catch(i){const s=i;if(!IT(s))throw s;or("Error enabling indexeddb cache. Falling back to memory cache: "+s),r.reject(s)}}).then(()=>r.promise)}function AF(t){if(t._initialized&&!t._terminated)throw new A(_.FAILED_PRECONDITION,"Persistence can only be cleared before a Firestore instance is initialized or after it is terminated.");const e=new ht;return t._queue.enqueueAndForgetEvenWhileRestricted(async()=>{try{await async function(n){if(!yn.D())return Promise.resolve();const r=n+"main";await yn.delete(r)}(km(t._databaseId,t._persistenceKey)),e.resolve()}catch(n){e.reject(n)}}),e.promise}function CF(t){return function(e){const n=new ht;return e.asyncQueue.enqueueAndForget(async()=>Y2(await Wm(e),n)),n.promise}(pt(t=ve(t,Ge)))}function RF(t){return fF(pt(t=ve(t,Ge)))}function xF(t){return pF(pt(t=ve(t,Ge)))}function NF(t,e){const n=pt(t=ve(t,Ge)),r=new EF;return vF(n,t._databaseId,e,r),r}function PF(t,e){return wF(pt(t=ve(t,Ge)),e).then(n=>n?new It(t,null,n.query):null)}function OT(t){if(t._initialized||t._terminated)throw new A(_.FAILED_PRECONDITION,"Firestore has already been started and persistence can no longer be enabled. You can only enable persistence before calling any other methods on a Firestore object.")}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Kn{constructor(e){this._byteString=e}static fromBase64String(e){try{return new Kn(ot.fromBase64String(e))}catch(n){throw new A(_.INVALID_ARGUMENT,"Failed to construct data from Base64 string: "+n)}}static fromUint8Array(e){return new Kn(ot.fromUint8Array(e))}toBase64(){return this._byteString.toBase64()}toUint8Array(){return this._byteString.toUint8Array()}toString(){return"Bytes(base64: "+this.toBase64()+")"}isEqual(e){return this._byteString.isEqual(e._byteString)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Jr{constructor(...e){for(let n=0;n<e.length;++n)if(e[n].length===0)throw new A(_.INVALID_ARGUMENT,"Invalid field name at argument $(i + 1). Field names must not be empty.");this._internalPath=new Xe(e)}isEqual(e){return this._internalPath.isEqual(e._internalPath)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class hs{constructor(e){this._methodName=e}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class yh{constructor(e,n){if(!isFinite(e)||e<-90||e>90)throw new A(_.INVALID_ARGUMENT,"Latitude must be a number between -90 and 90, but was: "+e);if(!isFinite(n)||n<-180||n>180)throw new A(_.INVALID_ARGUMENT,"Longitude must be a number between -180 and 180, but was: "+n);this._lat=e,this._long=n}get latitude(){return this._lat}get longitude(){return this._long}isEqual(e){return this._lat===e._lat&&this._long===e._long}toJSON(){return{latitude:this._lat,longitude:this._long}}_compareTo(e){return ae(this._lat,e._lat)||ae(this._long,e._long)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const DF=/^__.*__$/;class OF{constructor(e,n,r){this.data=e,this.fieldMask=n,this.fieldTransforms=r}toMutation(e,n){return this.fieldMask!==null?new gr(e,this.data,this.fieldMask,n,this.fieldTransforms):new Eo(e,this.data,n,this.fieldTransforms)}}class LT{constructor(e,n,r){this.data=e,this.fieldMask=n,this.fieldTransforms=r}toMutation(e,n){return new gr(e,this.data,this.fieldMask,n,this.fieldTransforms)}}function MT(t){switch(t){case 0:case 2:case 1:return!0;case 3:case 4:return!1;default:throw $()}}class vh{constructor(e,n,r,i,s,o){this.settings=e,this.databaseId=n,this.serializer=r,this.ignoreUndefinedProperties=i,s===void 0&&this.Jc(),this.fieldTransforms=s||[],this.fieldMask=o||[]}get path(){return this.settings.path}get Yc(){return this.settings.Yc}Zc(e){return new vh(Object.assign(Object.assign({},this.settings),e),this.databaseId,this.serializer,this.ignoreUndefinedProperties,this.fieldTransforms,this.fieldMask)}Xc(e){var n;const r=(n=this.path)===null||n===void 0?void 0:n.child(e),i=this.Zc({path:r,ta:!1});return i.ea(e),i}na(e){var n;const r=(n=this.path)===null||n===void 0?void 0:n.child(e),i=this.Zc({path:r,ta:!1});return i.Jc(),i}sa(e){return this.Zc({path:void 0,ta:!0})}ia(e){return hl(e,this.settings.methodName,this.settings.ra||!1,this.path,this.settings.oa)}contains(e){return this.fieldMask.find(n=>e.isPrefixOf(n))!==void 0||this.fieldTransforms.find(n=>e.isPrefixOf(n.field))!==void 0}Jc(){if(this.path)for(let e=0;e<this.path.length;e++)this.ea(this.path.get(e))}ea(e){if(e.length===0)throw this.ia("Document fields must not be empty");if(MT(this.Yc)&&DF.test(e))throw this.ia('Document fields cannot begin and end with "__"')}}class LF{constructor(e,n,r){this.databaseId=e,this.ignoreUndefinedProperties=n,this.serializer=r||Ac(e)}ua(e,n,r,i=!1){return new vh({Yc:e,methodName:n,oa:r,path:Xe.emptyPath(),ta:!1,ra:i},this.databaseId,this.serializer,this.ignoreUndefinedProperties)}}function ds(t){const e=t._freezeSettings(),n=Ac(t._databaseId);return new LF(t._databaseId,!!e.ignoreUndefinedProperties,n)}function wh(t,e,n,r,i,s={}){const o=t.ua(s.merge||s.mergeFields?2:0,e,n,i);Jm("Data must be an object, but it was:",o,r);const a=VT(r,o);let c,u;if(s.merge)c=new Ht(o.fieldMask),u=o.fieldTransforms;else if(s.mergeFields){const l=[];for(const h of s.mergeFields){const d=Pf(e,h,n);if(!o.contains(d))throw new A(_.INVALID_ARGUMENT,`Field '${d}' is specified in your field mask but missing from your input data.`);$T(l,d)||l.push(d)}c=new Ht(l),u=o.fieldTransforms.filter(h=>c.covers(h.field))}else c=null,u=o.fieldTransforms;return new OF(new yt(a),c,u)}class xc extends hs{_toFieldTransform(e){if(e.Yc!==2)throw e.Yc===1?e.ia(`${this._methodName}() can only appear at the top level of your update data`):e.ia(`${this._methodName}() cannot be used with set() unless you pass {merge:true}`);return e.fieldMask.push(e.path),null}isEqual(e){return e instanceof xc}}function FT(t,e,n){return new vh({Yc:3,oa:e.settings.oa,methodName:t._methodName,ta:n},e.databaseId,e.serializer,e.ignoreUndefinedProperties)}class Ym extends hs{_toFieldTransform(e){return new Tc(e.path,new eo)}isEqual(e){return e instanceof Ym}}class MF extends hs{constructor(e,n){super(e),this.ca=n}_toFieldTransform(e){const n=FT(this,e,!0),r=this.ca.map(s=>fs(s,n)),i=new Xi(r);return new Tc(e.path,i)}isEqual(e){return this===e}}class FF extends hs{constructor(e,n){super(e),this.ca=n}_toFieldTransform(e){const n=FT(this,e,!0),r=this.ca.map(s=>fs(s,n)),i=new Ji(r);return new Tc(e.path,i)}isEqual(e){return this===e}}class UF extends hs{constructor(e,n){super(e),this.aa=n}_toFieldTransform(e){const n=new to(e.serializer,wE(e.serializer,this.aa));return new Tc(e.path,n)}isEqual(e){return this===e}}function Qm(t,e,n,r){const i=t.ua(1,e,n);Jm("Data must be an object, but it was:",i,r);const s=[],o=yt.empty();ls(r,(c,u)=>{const l=Zm(e,c,n);u=Y(u);const h=i.na(l);if(u instanceof xc)s.push(l);else{const d=fs(u,h);d!=null&&(s.push(l),o.set(l,d))}});const a=new Ht(s);return new LT(o,a,i.fieldTransforms)}function Xm(t,e,n,r,i,s){const o=t.ua(1,e,n),a=[Pf(e,r,n)],c=[i];if(s.length%2!=0)throw new A(_.INVALID_ARGUMENT,`Function ${e}() needs to be called with an even number of arguments that alternate between field names and values.`);for(let d=0;d<s.length;d+=2)a.push(Pf(e,s[d])),c.push(s[d+1]);const u=[],l=yt.empty();for(let d=a.length-1;d>=0;--d)if(!$T(u,a[d])){const f=a[d];let g=c[d];g=Y(g);const y=o.na(f);if(g instanceof xc)u.push(f);else{const E=fs(g,y);E!=null&&(u.push(f),l.set(f,E))}}const h=new Ht(u);return new LT(l,h,o.fieldTransforms)}function UT(t,e,n,r=!1){return fs(n,t.ua(r?4:3,e))}function fs(t,e){if(BT(t=Y(t)))return Jm("Unsupported field value:",e,t),VT(t,e);if(t instanceof hs)return function(n,r){if(!MT(r.Yc))throw r.ia(`${n._methodName}() can only be used with update() and set()`);if(!r.path)throw r.ia(`${n._methodName}() is not currently supported inside arrays`);const i=n._toFieldTransform(r);i&&r.fieldTransforms.push(i)}(t,e),null;if(t===void 0&&e.ignoreUndefinedProperties)return null;if(e.path&&e.fieldMask.push(e.path),t instanceof Array){if(e.settings.ta&&e.Yc!==4)throw e.ia("Nested arrays are not supported");return function(n,r){const i=[];let s=0;for(const o of n){let a=fs(o,r.sa(s));a==null&&(a={nullValue:"NULL_VALUE"}),i.push(a),s++}return{arrayValue:{values:i}}}(t,e)}return function(n,r){if((n=Y(n))===null)return{nullValue:"NULL_VALUE"};if(typeof n=="number")return wE(r.serializer,n);if(typeof n=="boolean")return{booleanValue:n};if(typeof n=="string")return{stringValue:n};if(n instanceof Date){const i=Ue.fromDate(n);return{timestampValue:no(r.serializer,i)}}if(n instanceof Ue){const i=new Ue(n.seconds,1e3*Math.floor(n.nanoseconds/1e3));return{timestampValue:no(r.serializer,i)}}if(n instanceof yh)return{geoPointValue:{latitude:n.latitude,longitude:n.longitude}};if(n instanceof Kn)return{bytesValue:xE(r.serializer,n._byteString)};if(n instanceof De){const i=r.databaseId,s=n.firestore._databaseId;if(!s.isEqual(i))throw r.ia(`Document reference is for database ${s.projectId}/${s.database} but should be for database ${i.projectId}/${i.database}`);return{referenceValue:_m(n.firestore._databaseId||r.databaseId,n._key.path)}}throw r.ia(`Unsupported field value: ${gh(n)}`)}(t,e)}function VT(t,e){const n={};return Z0(t)?e.path&&e.path.length>0&&e.fieldMask.push(e.path):ls(t,(r,i)=>{const s=fs(i,e.Xc(r));s!=null&&(n[r]=s)}),{mapValue:{fields:n}}}function BT(t){return!(typeof t!="object"||t===null||t instanceof Array||t instanceof Date||t instanceof Ue||t instanceof yh||t instanceof Kn||t instanceof De||t instanceof hs)}function Jm(t,e,n){if(!BT(n)||!function(r){return typeof r=="object"&&r!==null&&(Object.getPrototypeOf(r)===Object.prototype||Object.getPrototypeOf(r)===null)}(n)){const r=gh(n);throw r==="an object"?e.ia(t+" a custom object"):e.ia(t+" "+r)}}function Pf(t,e,n){if((e=Y(e))instanceof Jr)return e._internalPath;if(typeof e=="string")return Zm(t,e);throw hl("Field path arguments must be of type string or ",t,!1,void 0,n)}const VF=new RegExp("[~\\*/\\[\\]]");function Zm(t,e,n){if(e.search(VF)>=0)throw hl(`Invalid field path (${e}). Paths must not contain '~', '*', '/', '[', or ']'`,t,!1,void 0,n);try{return new Jr(...e.split("."))._internalPath}catch{throw hl(`Invalid field path (${e}). Paths must not be empty, begin with '.', end with '.', or contain '..'`,t,!1,void 0,n)}}function hl(t,e,n,r,i){const s=r&&!r.isEmpty(),o=i!==void 0;let a=`Function ${e}() called with invalid data`;n&&(a+=" (via `toFirestore()`)"),a+=". ";let c="";return(s||o)&&(c+=" (found",s&&(c+=` in field ${r}`),o&&(c+=` in document ${i}`),c+=")"),new A(_.INVALID_ARGUMENT,a+t+c)}function $T(t,e){return t.some(n=>n.isEqual(e))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ga{constructor(e,n,r,i,s){this._firestore=e,this._userDataWriter=n,this._key=r,this._document=i,this._converter=s}get id(){return this._key.path.lastSegment()}get ref(){return new De(this._firestore,this._converter,this._key)}exists(){return this._document!==null}data(){if(this._document){if(this._converter){const e=new BF(this._firestore,this._userDataWriter,this._key,this._document,null);return this._converter.fromFirestore(e)}return this._userDataWriter.convertValue(this._document.data.value)}}get(e){if(this._document){const n=this._document.data.field(_h("DocumentSnapshot.get",e));if(n!==null)return this._userDataWriter.convertValue(n)}}}class BF extends Ga{data(){return super.data()}}function _h(t,e){return typeof e=="string"?Zm(t,e):e instanceof Jr?e._internalPath:e._delegate._internalPath}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function qT(t){if(t.limitType==="L"&&t.explicitOrderBy.length===0)throw new A(_.UNIMPLEMENTED,"limitToLast() queries require specifying at least one orderBy() clause")}class eg{}class Nc extends eg{}function Rr(t,e,...n){let r=[];e instanceof eg&&r.push(e),r=r.concat(n),function(i){const s=i.filter(a=>a instanceof tg).length,o=i.filter(a=>a instanceof bh).length;if(s>1||s>0&&o>0)throw new A(_.INVALID_ARGUMENT,"InvalidQuery. When using composite filters, you cannot use more than one filter at the top level. Consider nesting the multiple filters within an `and(...)` statement. For example: change `query(query, where(...), or(...))` to `query(query, and(where(...), or(...)))`.")}(r);for(const i of r)t=i._apply(t);return t}class bh extends Nc{constructor(e,n,r){super(),this._field=e,this._op=n,this._value=r,this.type="where"}static _create(e,n,r){return new bh(e,n,r)}_apply(e){const n=this._parse(e);return zT(e._query,n),new It(e.firestore,e.converter,wf(e._query,n))}_parse(e){const n=ds(e.firestore);return function(i,s,o,a,c,u,l){let h;if(c.isKeyField()){if(u==="array-contains"||u==="array-contains-any")throw new A(_.INVALID_ARGUMENT,`Invalid Query. You can't perform '${u}' queries on documentId().`);if(u==="in"||u==="not-in"){ww(l,u);const d=[];for(const f of l)d.push(vw(a,i,f));h={arrayValue:{values:d}}}else h=vw(a,i,l)}else u!=="in"&&u!=="not-in"&&u!=="array-contains-any"||ww(l,u),h=UT(o,s,l,u==="in"||u==="not-in");return de.create(c,u,h)}(e._query,"where",n,e.firestore._databaseId,this._field,this._op,this._value)}}function $F(t,e,n){const r=e,i=_h("where",t);return bh._create(i,r,n)}class tg extends eg{constructor(e,n){super(),this.type=e,this._queryConstraints=n}static _create(e,n){return new tg(e,n)}_parse(e){const n=this._queryConstraints.map(r=>r._parse(e)).filter(r=>r.getFilters().length>0);return n.length===1?n[0]:Ie.create(n,this._getOperator())}_apply(e){const n=this._parse(e);return n.getFilters().length===0?e:(function(r,i){let s=r;const o=i.getFlattenedFilters();for(const a of o)zT(s,a),s=wf(s,a)}(e._query,n),new It(e.firestore,e.converter,wf(e._query,n)))}_getQueryConstraints(){return this._queryConstraints}_getOperator(){return this.type==="and"?"and":"or"}}class ng extends Nc{constructor(e,n){super(),this._field=e,this._direction=n,this.type="orderBy"}static _create(e,n){return new ng(e,n)}_apply(e){const n=function(r,i,s){if(r.startAt!==null)throw new A(_.INVALID_ARGUMENT,"Invalid query. You must not call startAt() or startAfter() before calling orderBy().");if(r.endAt!==null)throw new A(_.INVALID_ARGUMENT,"Invalid query. You must not call endAt() or endBefore() before calling orderBy().");const o=new Bs(i,s);return function(a,c){if(fm(a)===null){const u=oh(a);u!==null&&HT(a,u,c.field)}}(r,o),o}(e._query,this._field,this._direction);return new It(e.firestore,e.converter,function(r,i){const s=r.explicitOrderBy.concat([i]);return new mr(r.path,r.collectionGroup,s,r.filters.slice(),r.limit,r.limitType,r.startAt,r.endAt)}(e._query,n))}}function qF(t,e="asc"){const n=e,r=_h("orderBy",t);return ng._create(r,n)}class Ih extends Nc{constructor(e,n,r){super(),this.type=e,this._limit=n,this._limitType=r}static _create(e,n,r){return new Ih(e,n,r)}_apply(e){return new It(e.firestore,e.converter,nl(e._query,this._limit,this._limitType))}}function jF(t){return CT("limit",t),Ih._create("limit",t,"F")}function zF(t){return CT("limitToLast",t),Ih._create("limitToLast",t,"L")}class Eh extends Nc{constructor(e,n,r){super(),this.type=e,this._docOrFields=n,this._inclusive=r}static _create(e,n,r){return new Eh(e,n,r)}_apply(e){const n=jT(e,this.type,this._docOrFields,this._inclusive);return new It(e.firestore,e.converter,function(r,i){return new mr(r.path,r.collectionGroup,r.explicitOrderBy.slice(),r.filters.slice(),r.limit,r.limitType,i,r.endAt)}(e._query,n))}}function HF(...t){return Eh._create("startAt",t,!0)}function KF(...t){return Eh._create("startAfter",t,!1)}class Th extends Nc{constructor(e,n,r){super(),this.type=e,this._docOrFields=n,this._inclusive=r}static _create(e,n,r){return new Th(e,n,r)}_apply(e){const n=jT(e,this.type,this._docOrFields,this._inclusive);return new It(e.firestore,e.converter,function(r,i){return new mr(r.path,r.collectionGroup,r.explicitOrderBy.slice(),r.filters.slice(),r.limit,r.limitType,r.startAt,i)}(e._query,n))}}function WF(...t){return Th._create("endBefore",t,!1)}function GF(...t){return Th._create("endAt",t,!0)}function jT(t,e,n,r){if(n[0]=Y(n[0]),n[0]instanceof Ga)return function(i,s,o,a,c){if(!a)throw new A(_.NOT_FOUND,`Can't use a DocumentSnapshot that doesn't exist for ${o}().`);const u=[];for(const l of qi(i))if(l.field.isKeyField())u.push(Yi(s,a.key));else{const h=a.data.field(l.field);if(hm(h))throw new A(_.INVALID_ARGUMENT,'Invalid query. You are trying to start or end a query using a document for which the field "'+l.field+'" is an uncommitted server timestamp. (Since the value of this field is unknown, you cannot start/end a query with it.)');if(h===null){const d=l.field.canonicalString();throw new A(_.INVALID_ARGUMENT,`Invalid query. You are trying to start or end a query using a document for which the field '${d}' (used as the orderBy) does not exist.`)}u.push(h)}return new Qr(u,c)}(t._query,t.firestore._databaseId,e,n[0]._document,r);{const i=ds(t.firestore);return function(s,o,a,c,u,l){const h=s.explicitOrderBy;if(u.length>h.length)throw new A(_.INVALID_ARGUMENT,`Too many arguments provided to ${c}(). The number of arguments must be less than or equal to the number of orderBy() clauses`);const d=[];for(let f=0;f<u.length;f++){const g=u[f];if(h[f].field.isKeyField()){if(typeof g!="string")throw new A(_.INVALID_ARGUMENT,`Invalid query. Expected a string for document ID in ${c}(), but got a ${typeof g}`);if(!pm(s)&&g.indexOf("/")!==-1)throw new A(_.INVALID_ARGUMENT,`Invalid query. When querying a collection and ordering by documentId(), the value passed to ${c}() must be a plain document ID, but '${g}' contains a slash.`);const y=s.path.child(me.fromString(g));if(!L.isDocumentKey(y))throw new A(_.INVALID_ARGUMENT,`Invalid query. When querying a collection group and ordering by documentId(), the value passed to ${c}() must result in a valid document path, but '${y}' is not because it contains an odd number of segments.`);const E=new L(y);d.push(Yi(o,E))}else{const y=UT(a,c,g);d.push(y)}}return new Qr(d,l)}(t._query,t.firestore._databaseId,i,e,n,r)}}function vw(t,e,n){if(typeof(n=Y(n))=="string"){if(n==="")throw new A(_.INVALID_ARGUMENT,"Invalid query. When querying with documentId(), you must provide a valid document ID, but it was an empty string.");if(!pm(e)&&n.indexOf("/")!==-1)throw new A(_.INVALID_ARGUMENT,`Invalid query. When querying a collection by documentId(), you must provide a plain document ID, but '${n}' contains a '/' character.`);const r=e.path.child(me.fromString(n));if(!L.isDocumentKey(r))throw new A(_.INVALID_ARGUMENT,`Invalid query. When querying a collection group by documentId(), the value provided must result in a valid document path, but '${r}' is not because it has an odd number of segments (${r.length}).`);return Yi(t,new L(r))}if(n instanceof De)return Yi(t,n._key);throw new A(_.INVALID_ARGUMENT,`Invalid query. When querying with documentId(), you must provide a valid string or a DocumentReference, but it was: ${gh(n)}.`)}function ww(t,e){if(!Array.isArray(t)||t.length===0)throw new A(_.INVALID_ARGUMENT,`Invalid Query. A non-empty array is required for '${e.toString()}' filters.`)}function zT(t,e){if(e.isInequality()){const r=oh(t),i=e.field;if(r!==null&&!r.isEqual(i))throw new A(_.INVALID_ARGUMENT,`Invalid query. All where filters with an inequality (<, <=, !=, not-in, >, or >=) must be on the same field. But you have inequality filters on '${r.toString()}' and '${i.toString()}'`);const s=fm(t);s!==null&&HT(t,i,s)}const n=function(r,i){for(const s of r)for(const o of s.getFlattenedFilters())if(i.indexOf(o.op)>=0)return o.op;return null}(t.filters,function(r){switch(r){case"!=":return["!=","not-in"];case"array-contains-any":case"in":return["not-in"];case"not-in":return["array-contains-any","in","not-in","!="];default:return[]}}(e.op));if(n!==null)throw n===e.op?new A(_.INVALID_ARGUMENT,`Invalid query. You cannot use more than one '${e.op.toString()}' filter.`):new A(_.INVALID_ARGUMENT,`Invalid query. You cannot use '${e.op.toString()}' filters with '${n.toString()}' filters.`)}function HT(t,e,n){if(!n.isEqual(e))throw new A(_.INVALID_ARGUMENT,`Invalid query. You have a where filter with an inequality (<, <=, !=, not-in, >, or >=) on field '${e.toString()}' and so you must also use '${e.toString()}' as your first argument to orderBy(), but your first orderBy() is on field '${n.toString()}' instead.`)}class rg{convertValue(e,n="none"){switch(Gi(e)){case 0:return null;case 1:return e.booleanValue;case 2:return ze(e.integerValue||e.doubleValue);case 3:return this.convertTimestamp(e.timestampValue);case 4:return this.convertServerTimestamp(e,n);case 5:return e.stringValue;case 6:return this.convertBytes(Wi(e.bytesValue));case 7:return this.convertReference(e.referenceValue);case 8:return this.convertGeoPoint(e.geoPointValue);case 9:return this.convertArray(e.arrayValue,n);case 10:return this.convertObject(e.mapValue,n);default:throw $()}}convertObject(e,n){const r={};return ls(e.fields,(i,s)=>{r[i]=this.convertValue(s,n)}),r}convertGeoPoint(e){return new yh(ze(e.latitude),ze(e.longitude))}convertArray(e,n){return(e.values||[]).map(r=>this.convertValue(r,n))}convertServerTimestamp(e,n){switch(n){case"previous":const r=eE(e);return r==null?null:this.convertValue(r,n);case"estimate":return this.convertTimestamp($a(e));default:return null}}convertTimestamp(e){const n=Wr(e);return new Ue(n.seconds,n.nanos)}convertDocumentKey(e,n){const r=me.fromString(e);X(BE(r));const i=new Gr(r.get(1),r.get(3)),s=new L(r.popFirst(5));return i.isEqual(n)||Qe(`Document ${s} contains a document reference within a different database (${i.projectId}/${i.database}) which is not supported. It will be treated as a reference in the current database (${n.projectId}/${n.database}) instead.`),s}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Sh(t,e,n){let r;return r=t?n&&(n.merge||n.mergeFields)?t.toFirestore(e,n):t.toFirestore(e):e,r}class YF extends rg{constructor(e){super(),this.firestore=e}convertBytes(e){return new Kn(e)}convertReference(e){const n=this.convertDocumentKey(e,this.firestore._databaseId);return new De(this.firestore,null,n)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Pi{constructor(e,n){this.hasPendingWrites=e,this.fromCache=n}isEqual(e){return this.hasPendingWrites===e.hasPendingWrites&&this.fromCache===e.fromCache}}class ar extends Ga{constructor(e,n,r,i,s,o){super(e,n,r,i,o),this._firestore=e,this._firestoreImpl=e,this.metadata=s}exists(){return super.exists()}data(e={}){if(this._document){if(this._converter){const n=new pa(this._firestore,this._userDataWriter,this._key,this._document,this.metadata,null);return this._converter.fromFirestore(n,e)}return this._userDataWriter.convertValue(this._document.data.value,e.serverTimestamps)}}get(e,n={}){if(this._document){const r=this._document.data.field(_h("DocumentSnapshot.get",e));if(r!==null)return this._userDataWriter.convertValue(r,n.serverTimestamps)}}}class pa extends ar{data(e={}){return super.data(e)}}class Zr{constructor(e,n,r,i){this._firestore=e,this._userDataWriter=n,this._snapshot=i,this.metadata=new Pi(i.hasPendingWrites,i.fromCache),this.query=r}get docs(){const e=[];return this.forEach(n=>e.push(n)),e}get size(){return this._snapshot.docs.size}get empty(){return this.size===0}forEach(e,n){this._snapshot.docs.forEach(r=>{e.call(n,new pa(this._firestore,this._userDataWriter,r.key,r,new Pi(this._snapshot.mutatedKeys.has(r.key),this._snapshot.fromCache),this.query.converter))})}docChanges(e={}){const n=!!e.includeMetadataChanges;if(n&&this._snapshot.excludesMetadataChanges)throw new A(_.INVALID_ARGUMENT,"To include metadata changes with your document changes, you must also pass { includeMetadataChanges:true } to onSnapshot().");return this._cachedChanges&&this._cachedChangesIncludeMetadataChanges===n||(this._cachedChanges=function(r,i){if(r._snapshot.oldDocs.isEmpty()){let s=0;return r._snapshot.docChanges.map(o=>{const a=new pa(r._firestore,r._userDataWriter,o.doc.key,o.doc,new Pi(r._snapshot.mutatedKeys.has(o.doc.key),r._snapshot.fromCache),r.query.converter);return o.doc,{type:"added",doc:a,oldIndex:-1,newIndex:s++}})}{let s=r._snapshot.oldDocs;return r._snapshot.docChanges.filter(o=>i||o.type!==3).map(o=>{const a=new pa(r._firestore,r._userDataWriter,o.doc.key,o.doc,new Pi(r._snapshot.mutatedKeys.has(o.doc.key),r._snapshot.fromCache),r.query.converter);let c=-1,u=-1;return o.type!==0&&(c=s.indexOf(o.doc.key),s=s.delete(o.doc.key)),o.type!==1&&(s=s.add(o.doc),u=s.indexOf(o.doc.key)),{type:QF(o.type),doc:a,oldIndex:c,newIndex:u}})}}(this,n),this._cachedChangesIncludeMetadataChanges=n),this._cachedChanges}}function QF(t){switch(t){case 0:return"added";case 2:case 3:return"modified";case 1:return"removed";default:return $()}}function KT(t,e){return t instanceof ar&&e instanceof ar?t._firestore===e._firestore&&t._key.isEqual(e._key)&&(t._document===null?e._document===null:t._document.isEqual(e._document))&&t._converter===e._converter:t instanceof Zr&&e instanceof Zr&&t._firestore===e._firestore&&NT(t.query,e.query)&&t.metadata.isEqual(e.metadata)&&t._snapshot.isEqual(e._snapshot)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function XF(t){t=ve(t,De);const e=ve(t.firestore,Ge);return ST(pt(e),t._key).then(n=>ig(e,t,n))}class ps extends rg{constructor(e){super(),this.firestore=e}convertBytes(e){return new Kn(e)}convertReference(e){const n=this.convertDocumentKey(e,this.firestore._databaseId);return new De(this.firestore,null,n)}}function JF(t){t=ve(t,De);const e=ve(t.firestore,Ge),n=pt(e),r=new ps(e);return mF(n,t._key).then(i=>new ar(e,r,t._key,i,new Pi(i!==null&&i.hasLocalMutations,!0),t.converter))}function ZF(t){t=ve(t,De);const e=ve(t.firestore,Ge);return ST(pt(e),t._key,{source:"server"}).then(n=>ig(e,t,n))}function eU(t){t=ve(t,It);const e=ve(t.firestore,Ge),n=pt(e),r=new ps(e);return qT(t._query),kT(n,t._query).then(i=>new Zr(e,r,t,i))}function tU(t){t=ve(t,It);const e=ve(t.firestore,Ge),n=pt(e),r=new ps(e);return gF(n,t._query).then(i=>new Zr(e,r,t,i))}function nU(t){t=ve(t,It);const e=ve(t.firestore,Ge),n=pt(e),r=new ps(e);return kT(n,t._query,{source:"server"}).then(i=>new Zr(e,r,t,i))}function _w(t,e,n){t=ve(t,De);const r=ve(t.firestore,Ge),i=Sh(t.converter,e,n);return Pc(r,[wh(ds(r),"setDoc",t._key,i,t.converter!==null,n).toMutation(t._key,Fe.none())])}function bw(t,e,n,...r){t=ve(t,De);const i=ve(t.firestore,Ge),s=ds(i);let o;return o=typeof(e=Y(e))=="string"||e instanceof Jr?Xm(s,"updateDoc",t._key,e,n,r):Qm(s,"updateDoc",t._key,e),Pc(i,[o.toMutation(t._key,Fe.exists(!0))])}function rU(t){return Pc(ve(t.firestore,Ge),[new To(t._key,Fe.none())])}function iU(t,e){const n=ve(t.firestore,Ge),r=ll(t),i=Sh(t.converter,e);return Pc(n,[wh(ds(t.firestore),"addDoc",r._key,i,t.converter!==null,{}).toMutation(r._key,Fe.exists(!1))]).then(()=>r)}function WT(t,...e){var n,r,i;t=Y(t);let s={includeMetadataChanges:!1},o=0;typeof e[o]!="object"||Nf(e[o])||(s=e[o],o++);const a={includeMetadataChanges:s.includeMetadataChanges};if(Nf(e[o])){const h=e[o];e[o]=(n=h.next)===null||n===void 0?void 0:n.bind(h),e[o+1]=(r=h.error)===null||r===void 0?void 0:r.bind(h),e[o+2]=(i=h.complete)===null||i===void 0?void 0:i.bind(h)}let c,u,l;if(t instanceof De)u=ve(t.firestore,Ge),l=Io(t._key.path),c={next:h=>{e[o]&&e[o](ig(u,t,h))},error:e[o+1],complete:e[o+2]};else{const h=ve(t,It);u=ve(h.firestore,Ge),l=h._query;const d=new ps(u);c={next:f=>{e[o]&&e[o](new Zr(u,d,h,f))},error:e[o+1],complete:e[o+2]},qT(t._query)}return function(h,d,f,g){const y=new ph(g),E=new Fm(d,y,f);return h.asyncQueue.enqueueAndForget(async()=>Om(await ao(h),E)),()=>{y.yc(),h.asyncQueue.enqueueAndForget(async()=>Lm(await ao(h),E))}}(pt(u),l,a,c)}function sU(t,e){return yF(pt(t=ve(t,Ge)),Nf(e)?e:{next:e})}function Pc(t,e){return function(n,r){const i=new ht;return n.asyncQueue.enqueueAndForget(async()=>H2(await Wm(n),r,i)),i.promise}(pt(t),e)}function ig(t,e,n){const r=n.docs.get(e._key),i=new ps(t);return new ar(t,i,e._key,r,new Pi(n.hasPendingWrites,n.fromCache),e.converter)}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const oU={maxAttempts:5};/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class aU{constructor(e,n){this._firestore=e,this._commitHandler=n,this._mutations=[],this._committed=!1,this._dataReader=ds(e)}set(e,n,r){this._verifyNotCommitted();const i=Or(e,this._firestore),s=Sh(i.converter,n,r),o=wh(this._dataReader,"WriteBatch.set",i._key,s,i.converter!==null,r);return this._mutations.push(o.toMutation(i._key,Fe.none())),this}update(e,n,r,...i){this._verifyNotCommitted();const s=Or(e,this._firestore);let o;return o=typeof(n=Y(n))=="string"||n instanceof Jr?Xm(this._dataReader,"WriteBatch.update",s._key,n,r,i):Qm(this._dataReader,"WriteBatch.update",s._key,n),this._mutations.push(o.toMutation(s._key,Fe.exists(!0))),this}delete(e){this._verifyNotCommitted();const n=Or(e,this._firestore);return this._mutations=this._mutations.concat(new To(n._key,Fe.none())),this}commit(){return this._verifyNotCommitted(),this._committed=!0,this._mutations.length>0?this._commitHandler(this._mutations):Promise.resolve()}_verifyNotCommitted(){if(this._committed)throw new A(_.FAILED_PRECONDITION,"A write batch can no longer be used after commit() has been called.")}}function Or(t,e){if((t=Y(t)).firestore!==e)throw new A(_.INVALID_ARGUMENT,"Provided document reference is from a different Firestore instance.");return t}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 *//**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class cU extends class{constructor(e,n){this._firestore=e,this._transaction=n,this._dataReader=ds(e)}get(e){const n=Or(e,this._firestore),r=new YF(this._firestore);return this._transaction.lookup([n._key]).then(i=>{if(!i||i.length!==1)return $();const s=i[0];if(s.isFoundDocument())return new Ga(this._firestore,r,s.key,s,n.converter);if(s.isNoDocument())return new Ga(this._firestore,r,n._key,null,n.converter);throw $()})}set(e,n,r){const i=Or(e,this._firestore),s=Sh(i.converter,n,r),o=wh(this._dataReader,"Transaction.set",i._key,s,i.converter!==null,r);return this._transaction.set(i._key,o),this}update(e,n,r,...i){const s=Or(e,this._firestore);let o;return o=typeof(n=Y(n))=="string"||n instanceof Jr?Xm(this._dataReader,"Transaction.update",s._key,n,r,i):Qm(this._dataReader,"Transaction.update",s._key,n),this._transaction.update(s._key,o),this}delete(e){const n=Or(e,this._firestore);return this._transaction.delete(n._key),this}}{constructor(e,n){super(e,n),this._firestore=e}get(e){const n=Or(e,this._firestore),r=new ps(this._firestore);return super.get(e).then(i=>new ar(this._firestore,r,n._key,i._document,new Pi(!1,!1),n.converter))}}function uU(t,e,n){t=ve(t,Ge);const r=Object.assign(Object.assign({},oU),n);return function(i){if(i.maxAttempts<1)throw new A(_.INVALID_ARGUMENT,"Max attempts must be at least 1")}(r),function(i,s,o){const a=new ht;return i.asyncQueue.enqueueAndForget(async()=>{const c=await dF(i);new lF(i.asyncQueue,c,o,s,a).run()}),a.promise}(pt(t),i=>e(new cU(t,i)),r)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function lU(){return new xc("deleteField")}function hU(){return new Ym("serverTimestamp")}function dU(...t){return new MF("arrayUnion",t)}function fU(...t){return new FF("arrayRemove",t)}function pU(t){return new UF("increment",t)}(function(t,e=!0){(function(n){bo=n})(dr),rr(new cn("firestore",(n,{instanceIdentifier:r,options:i})=>{const s=n.getProvider("app").getImmediate(),o=new Ge(new IL(n.getProvider("auth-internal")),new kL(n.getProvider("app-check-internal")),function(a,c){if(!Object.prototype.hasOwnProperty.apply(a.options,["projectId"]))throw new A(_.INVALID_ARGUMENT,'"projectId" not provided in firebase.initializeApp.');return new Gr(a.options.projectId,c)}(s,r),s);return i=Object.assign({useFetchStreams:e},i),o._setSettings(i),o},"PUBLIC").setMultipleInstances(!0)),an(vv,"3.10.1",t),an(vv,"3.10.1","esm2017")})();const mU="@firebase/firestore-compat",gU="0.3.7";/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function sg(t,e){if(e===void 0)return{merge:!1};if(e.mergeFields!==void 0&&e.merge!==void 0)throw new A("invalid-argument",`Invalid options passed to function ${t}(): You cannot specify both "merge" and "mergeFields".`);return e}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Iw(){if(typeof Uint8Array>"u")throw new A("unimplemented","Uint8Arrays are not available in this environment.")}function Ew(){if(!ZL())throw new A("unimplemented","Blobs are unavailable in Firestore in this environment.")}class Ya{constructor(e){this._delegate=e}static fromBase64String(e){return Ew(),new Ya(Kn.fromBase64String(e))}static fromUint8Array(e){return Iw(),new Ya(Kn.fromUint8Array(e))}toBase64(){return Ew(),this._delegate.toBase64()}toUint8Array(){return Iw(),this._delegate.toUint8Array()}isEqual(e){return this._delegate.isEqual(e._delegate)}toString(){return"Blob(base64: "+this.toBase64()+")"}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Df(t){return yU(t,["next","error","complete"])}function yU(t,e){if(typeof t!="object"||t===null)return!1;const n=t;for(const r of e)if(r in n&&typeof n[r]=="function")return!0;return!1}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class vU{enableIndexedDbPersistence(e,n){return SF(e._delegate,{forceOwnership:n})}enableMultiTabIndexedDbPersistence(e){return kF(e._delegate)}clearIndexedDbPersistence(e){return AF(e._delegate)}}class GT{constructor(e,n,r){this._delegate=n,this._persistenceProvider=r,this.INTERNAL={delete:()=>this.terminate()},e instanceof Gr||(this._appCompat=e)}get _databaseId(){return this._delegate._databaseId}settings(e){const n=this._delegate._getSettings();!e.merge&&n.host!==e.host&&or("You are overriding the original host. If you did not intend to override your settings, use {merge: true}."),e.merge&&(e=Object.assign(Object.assign({},n),e),delete e.merge),this._delegate._setSettings(e)}useEmulator(e,n,r={}){_F(this._delegate,e,n,r)}enableNetwork(){return RF(this._delegate)}disableNetwork(){return xF(this._delegate)}enablePersistence(e){let n=!1,r=!1;return e&&(n=!!e.synchronizeTabs,r=!!e.experimentalForceOwningTab,AT("synchronizeTabs",n,"experimentalForceOwningTab",r)),n?this._persistenceProvider.enableMultiTabIndexedDbPersistence(this):this._persistenceProvider.enableIndexedDbPersistence(this,r)}clearPersistence(){return this._persistenceProvider.clearIndexedDbPersistence(this)}terminate(){return this._appCompat&&(this._appCompat._removeServiceInstance("firestore-compat"),this._appCompat._removeServiceInstance("firestore")),this._delegate._delete()}waitForPendingWrites(){return CF(this._delegate)}onSnapshotsInSync(e){return sU(this._delegate,e)}get app(){if(!this._appCompat)throw new A("failed-precondition","Firestore was not initialized using the Firebase SDK. 'app' is not available");return this._appCompat}collection(e){try{return new co(this,RT(this._delegate,e))}catch(n){throw Ot(n,"collection()","Firestore.collection()")}}doc(e){try{return new rn(this,ll(this._delegate,e))}catch(n){throw Ot(n,"doc()","Firestore.doc()")}}collectionGroup(e){try{return new Dt(this,bF(this._delegate,e))}catch(n){throw Ot(n,"collectionGroup()","Firestore.collectionGroup()")}}runTransaction(e){return uU(this._delegate,n=>e(new YT(this,n)))}batch(){return pt(this._delegate),new QT(new aU(this._delegate,e=>Pc(this._delegate,e)))}loadBundle(e){return NF(this._delegate,e)}namedQuery(e){return PF(this._delegate,e).then(n=>n?new Dt(this,n):null)}}class kh extends rg{constructor(e){super(),this.firestore=e}convertBytes(e){return new Ya(new Kn(e))}convertReference(e){const n=this.convertDocumentKey(e,this.firestore._databaseId);return rn.forKey(n,this.firestore,null)}}function wU(t){vL(t)}class YT{constructor(e,n){this._firestore=e,this._delegate=n,this._userDataWriter=new kh(e)}get(e){const n=Di(e);return this._delegate.get(n).then(r=>new Qa(this._firestore,new ar(this._firestore._delegate,this._userDataWriter,r._key,r._document,r.metadata,n.converter)))}set(e,n,r){const i=Di(e);return r?(sg("Transaction.set",r),this._delegate.set(i,n,r)):this._delegate.set(i,n),this}update(e,n,r,...i){const s=Di(e);return arguments.length===2?this._delegate.update(s,n):this._delegate.update(s,n,r,...i),this}delete(e){const n=Di(e);return this._delegate.delete(n),this}}class QT{constructor(e){this._delegate=e}set(e,n,r){const i=Di(e);return r?(sg("WriteBatch.set",r),this._delegate.set(i,n,r)):this._delegate.set(i,n),this}update(e,n,r,...i){const s=Di(e);return arguments.length===2?this._delegate.update(s,n):this._delegate.update(s,n,r,...i),this}delete(e){const n=Di(e);return this._delegate.delete(n),this}commit(){return this._delegate.commit()}}class ns{constructor(e,n,r){this._firestore=e,this._userDataWriter=n,this._delegate=r}fromFirestore(e,n){const r=new pa(this._firestore._delegate,this._userDataWriter,e._key,e._document,e.metadata,null);return this._delegate.fromFirestore(new Xa(this._firestore,r),n!=null?n:{})}toFirestore(e,n){return n?this._delegate.toFirestore(e,n):this._delegate.toFirestore(e)}static getInstance(e,n){const r=ns.INSTANCES;let i=r.get(e);i||(i=new WeakMap,r.set(e,i));let s=i.get(n);return s||(s=new ns(e,new kh(e),n),i.set(n,s)),s}}ns.INSTANCES=new WeakMap;class rn{constructor(e,n){this.firestore=e,this._delegate=n,this._userDataWriter=new kh(e)}static forPath(e,n,r){if(e.length%2!==0)throw new A("invalid-argument",`Invalid document reference. Document references must have an even number of segments, but ${e.canonicalString()} has ${e.length}`);return new rn(n,new De(n._delegate,r,new L(e)))}static forKey(e,n,r){return new rn(n,new De(n._delegate,r,e))}get id(){return this._delegate.id}get parent(){return new co(this.firestore,this._delegate.parent)}get path(){return this._delegate.path}collection(e){try{return new co(this.firestore,RT(this._delegate,e))}catch(n){throw Ot(n,"collection()","DocumentReference.collection()")}}isEqual(e){return e=Y(e),e instanceof De?xT(this._delegate,e):!1}set(e,n){n=sg("DocumentReference.set",n);try{return n?_w(this._delegate,e,n):_w(this._delegate,e)}catch(r){throw Ot(r,"setDoc()","DocumentReference.set()")}}update(e,n,...r){try{return arguments.length===1?bw(this._delegate,e):bw(this._delegate,e,n,...r)}catch(i){throw Ot(i,"updateDoc()","DocumentReference.update()")}}delete(){return rU(this._delegate)}onSnapshot(...e){const n=XT(e),r=JT(e,i=>new Qa(this.firestore,new ar(this.firestore._delegate,this._userDataWriter,i._key,i._document,i.metadata,this._delegate.converter)));return WT(this._delegate,n,r)}get(e){let n;return(e==null?void 0:e.source)==="cache"?n=JF(this._delegate):(e==null?void 0:e.source)==="server"?n=ZF(this._delegate):n=XF(this._delegate),n.then(r=>new Qa(this.firestore,new ar(this.firestore._delegate,this._userDataWriter,r._key,r._document,r.metadata,this._delegate.converter)))}withConverter(e){return new rn(this.firestore,e?this._delegate.withConverter(ns.getInstance(this.firestore,e)):this._delegate.withConverter(null))}}function Ot(t,e,n){return t.message=t.message.replace(e,n),t}function XT(t){for(const e of t)if(typeof e=="object"&&!Df(e))return e;return{}}function JT(t,e){var n,r;let i;return Df(t[0])?i=t[0]:Df(t[1])?i=t[1]:typeof t[0]=="function"?i={next:t[0],error:t[1],complete:t[2]}:i={next:t[1],error:t[2],complete:t[3]},{next:s=>{i.next&&i.next(e(s))},error:(n=i.error)===null||n===void 0?void 0:n.bind(i),complete:(r=i.complete)===null||r===void 0?void 0:r.bind(i)}}class Qa{constructor(e,n){this._firestore=e,this._delegate=n}get ref(){return new rn(this._firestore,this._delegate.ref)}get id(){return this._delegate.id}get metadata(){return this._delegate.metadata}get exists(){return this._delegate.exists()}data(e){return this._delegate.data(e)}get(e,n){return this._delegate.get(e,n)}isEqual(e){return KT(this._delegate,e._delegate)}}class Xa extends Qa{data(e){const n=this._delegate.data(e);return wL(n!==void 0),n}}class Dt{constructor(e,n){this.firestore=e,this._delegate=n,this._userDataWriter=new kh(e)}where(e,n,r){try{return new Dt(this.firestore,Rr(this._delegate,$F(e,n,r)))}catch(i){throw Ot(i,/(orderBy|where)\(\)/,"Query.$1()")}}orderBy(e,n){try{return new Dt(this.firestore,Rr(this._delegate,qF(e,n)))}catch(r){throw Ot(r,/(orderBy|where)\(\)/,"Query.$1()")}}limit(e){try{return new Dt(this.firestore,Rr(this._delegate,jF(e)))}catch(n){throw Ot(n,"limit()","Query.limit()")}}limitToLast(e){try{return new Dt(this.firestore,Rr(this._delegate,zF(e)))}catch(n){throw Ot(n,"limitToLast()","Query.limitToLast()")}}startAt(...e){try{return new Dt(this.firestore,Rr(this._delegate,HF(...e)))}catch(n){throw Ot(n,"startAt()","Query.startAt()")}}startAfter(...e){try{return new Dt(this.firestore,Rr(this._delegate,KF(...e)))}catch(n){throw Ot(n,"startAfter()","Query.startAfter()")}}endBefore(...e){try{return new Dt(this.firestore,Rr(this._delegate,WF(...e)))}catch(n){throw Ot(n,"endBefore()","Query.endBefore()")}}endAt(...e){try{return new Dt(this.firestore,Rr(this._delegate,GF(...e)))}catch(n){throw Ot(n,"endAt()","Query.endAt()")}}isEqual(e){return NT(this._delegate,e._delegate)}get(e){let n;return(e==null?void 0:e.source)==="cache"?n=tU(this._delegate):(e==null?void 0:e.source)==="server"?n=nU(this._delegate):n=eU(this._delegate),n.then(r=>new Of(this.firestore,new Zr(this.firestore._delegate,this._userDataWriter,this._delegate,r._snapshot)))}onSnapshot(...e){const n=XT(e),r=JT(e,i=>new Of(this.firestore,new Zr(this.firestore._delegate,this._userDataWriter,this._delegate,i._snapshot)));return WT(this._delegate,n,r)}withConverter(e){return new Dt(this.firestore,e?this._delegate.withConverter(ns.getInstance(this.firestore,e)):this._delegate.withConverter(null))}}class _U{constructor(e,n){this._firestore=e,this._delegate=n}get type(){return this._delegate.type}get doc(){return new Xa(this._firestore,this._delegate.doc)}get oldIndex(){return this._delegate.oldIndex}get newIndex(){return this._delegate.newIndex}}class Of{constructor(e,n){this._firestore=e,this._delegate=n}get query(){return new Dt(this._firestore,this._delegate.query)}get metadata(){return this._delegate.metadata}get size(){return this._delegate.size}get empty(){return this._delegate.empty}get docs(){return this._delegate.docs.map(e=>new Xa(this._firestore,e))}docChanges(e){return this._delegate.docChanges(e).map(n=>new _U(this._firestore,n))}forEach(e,n){this._delegate.forEach(r=>{e.call(n,new Xa(this._firestore,r))})}isEqual(e){return KT(this._delegate,e._delegate)}}class co extends Dt{constructor(e,n){super(e,n),this.firestore=e,this._delegate=n}get id(){return this._delegate.id}get path(){return this._delegate.path}get parent(){const e=this._delegate.parent;return e?new rn(this.firestore,e):null}doc(e){try{return e===void 0?new rn(this.firestore,ll(this._delegate)):new rn(this.firestore,ll(this._delegate,e))}catch(n){throw Ot(n,"doc()","CollectionReference.doc()")}}add(e){return iU(this._delegate,e).then(n=>new rn(this.firestore,n))}isEqual(e){return xT(this._delegate,e._delegate)}withConverter(e){return new co(this.firestore,e?this._delegate.withConverter(ns.getInstance(this.firestore,e)):this._delegate.withConverter(null))}}function Di(t){return ve(t,De)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class og{constructor(...e){this._delegate=new Jr(...e)}static documentId(){return new og(Xe.keyField().canonicalString())}isEqual(e){return e=Y(e),e instanceof Jr?this._delegate._internalPath.isEqual(e._internalPath):!1}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ai{constructor(e){this._delegate=e}static serverTimestamp(){const e=hU();return e._methodName="FieldValue.serverTimestamp",new Ai(e)}static delete(){const e=lU();return e._methodName="FieldValue.delete",new Ai(e)}static arrayUnion(...e){const n=dU(...e);return n._methodName="FieldValue.arrayUnion",new Ai(n)}static arrayRemove(...e){const n=fU(...e);return n._methodName="FieldValue.arrayRemove",new Ai(n)}static increment(e){const n=pU(e);return n._methodName="FieldValue.increment",new Ai(n)}isEqual(e){return this._delegate.isEqual(e._delegate)}}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const bU={Firestore:GT,GeoPoint:yh,Timestamp:Ue,Blob:Ya,Transaction:YT,WriteBatch:QT,DocumentReference:rn,DocumentSnapshot:Qa,Query:Dt,QueryDocumentSnapshot:Xa,QuerySnapshot:Of,CollectionReference:co,FieldPath:og,FieldValue:Ai,setLogLevel:wU,CACHE_SIZE_UNLIMITED:TF};function IU(t,e){t.INTERNAL.registerComponent(new cn("firestore-compat",n=>{const r=n.getProvider("app-compat").getImmediate(),i=n.getProvider("firestore").getImmediate();return e(r,i)},"PUBLIC").setServiceProps(Object.assign({},bU)))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function EU(t){IU(t,(e,n)=>new GT(e,n,new vU)),t.registerVersion(mU,gU)}EU(as);/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const ZT="firebasestorage.googleapis.com",e1="storageBucket",TU=2*60*1e3,SU=10*60*1e3,kU=1e3;/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class je extends Ct{constructor(e,n,r=0){super(yd(e),`Firebase Storage: ${n} (${yd(e)})`),this.status_=r,this.customData={serverResponse:null},this._baseMessage=this.message,Object.setPrototypeOf(this,je.prototype)}get status(){return this.status_}set status(e){this.status_=e}_codeEquals(e){return yd(e)===this.code}get serverResponse(){return this.customData.serverResponse}set serverResponse(e){this.customData.serverResponse=e,this.customData.serverResponse?this.message=`${this._baseMessage}
${this.customData.serverResponse}`:this.message=this._baseMessage}}var Le;(function(t){t.UNKNOWN="unknown",t.OBJECT_NOT_FOUND="object-not-found",t.BUCKET_NOT_FOUND="bucket-not-found",t.PROJECT_NOT_FOUND="project-not-found",t.QUOTA_EXCEEDED="quota-exceeded",t.UNAUTHENTICATED="unauthenticated",t.UNAUTHORIZED="unauthorized",t.UNAUTHORIZED_APP="unauthorized-app",t.RETRY_LIMIT_EXCEEDED="retry-limit-exceeded",t.INVALID_CHECKSUM="invalid-checksum",t.CANCELED="canceled",t.INVALID_EVENT_NAME="invalid-event-name",t.INVALID_URL="invalid-url",t.INVALID_DEFAULT_BUCKET="invalid-default-bucket",t.NO_DEFAULT_BUCKET="no-default-bucket",t.CANNOT_SLICE_BLOB="cannot-slice-blob",t.SERVER_FILE_WRONG_SIZE="server-file-wrong-size",t.NO_DOWNLOAD_URL="no-download-url",t.INVALID_ARGUMENT="invalid-argument",t.INVALID_ARGUMENT_COUNT="invalid-argument-count",t.APP_DELETED="app-deleted",t.INVALID_ROOT_OPERATION="invalid-root-operation",t.INVALID_FORMAT="invalid-format",t.INTERNAL_ERROR="internal-error",t.UNSUPPORTED_ENVIRONMENT="unsupported-environment"})(Le||(Le={}));function yd(t){return"storage/"+t}function ag(){const t="An unknown error occurred, please check the error payload for server response.";return new je(Le.UNKNOWN,t)}function AU(t){return new je(Le.OBJECT_NOT_FOUND,"Object '"+t+"' does not exist.")}function CU(t){return new je(Le.QUOTA_EXCEEDED,"Quota for bucket '"+t+"' exceeded, please view quota on https://firebase.google.com/pricing/.")}function RU(){const t="User is not authenticated, please authenticate using Firebase Authentication and try again.";return new je(Le.UNAUTHENTICATED,t)}function xU(){return new je(Le.UNAUTHORIZED_APP,"This app does not have permission to access Firebase Storage on this project.")}function NU(t){return new je(Le.UNAUTHORIZED,"User does not have permission to access '"+t+"'.")}function t1(){return new je(Le.RETRY_LIMIT_EXCEEDED,"Max retry time for operation exceeded, please try again.")}function n1(){return new je(Le.CANCELED,"User canceled the upload/download.")}function PU(t){return new je(Le.INVALID_URL,"Invalid URL '"+t+"'.")}function DU(t){return new je(Le.INVALID_DEFAULT_BUCKET,"Invalid default bucket '"+t+"'.")}function OU(){return new je(Le.NO_DEFAULT_BUCKET,"No default bucket found. Did you set the '"+e1+"' property when initializing the app?")}function r1(){return new je(Le.CANNOT_SLICE_BLOB,"Cannot slice blob for upload. Please retry the upload.")}function LU(){return new je(Le.SERVER_FILE_WRONG_SIZE,"Server recorded incorrect upload file size, please retry the upload.")}function MU(){return new je(Le.NO_DOWNLOAD_URL,"The given file does not have any download URLs.")}function FU(t){return new je(Le.UNSUPPORTED_ENVIRONMENT,`${t} is missing. Make sure to install the required polyfills. See https://firebase.google.com/docs/web/environments-js-sdk#polyfills for more information.`)}function qs(t){return new je(Le.INVALID_ARGUMENT,t)}function i1(){return new je(Le.APP_DELETED,"The Firebase app was deleted.")}function s1(t){return new je(Le.INVALID_ROOT_OPERATION,"The operation '"+t+"' cannot be performed on a root reference, create a non-root reference using child, such as .child('file.png').")}function ma(t,e){return new je(Le.INVALID_FORMAT,"String does not match format '"+t+"': "+e)}function zo(t){throw new je(Le.INTERNAL_ERROR,"Internal error: "+t)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class At{constructor(e,n){this.bucket=e,this.path_=n}get path(){return this.path_}get isRoot(){return this.path.length===0}fullServerUrl(){const e=encodeURIComponent;return"/b/"+e(this.bucket)+"/o/"+e(this.path)}bucketOnlyServerUrl(){return"/b/"+encodeURIComponent(this.bucket)+"/o"}static makeFromBucketSpec(e,n){let r;try{r=At.makeFromUrl(e,n)}catch{return new At(e,"")}if(r.path==="")return r;throw DU(e)}static makeFromUrl(e,n){let r=null;const i="([A-Za-z0-9.\\-_]+)";function s(x){x.path.charAt(x.path.length-1)==="/"&&(x.path_=x.path_.slice(0,-1))}const o="(/(.*))?$",a=new RegExp("^gs://"+i+o,"i"),c={bucket:1,path:3};function u(x){x.path_=decodeURIComponent(x.path)}const l="v[A-Za-z0-9_]+",h=n.replace(/[.]/g,"\\."),d="(/([^?#]*).*)?$",f=new RegExp(`^https?://${h}/${l}/b/${i}/o${d}`,"i"),g={bucket:1,path:3},y=n===ZT?"(?:storage.googleapis.com|storage.cloud.google.com)":n,E="([^?#]*)",v=new RegExp(`^https?://${y}/${i}/${E}`,"i"),b=[{regex:a,indices:c,postModify:s},{regex:f,indices:g,postModify:u},{regex:v,indices:{bucket:1,path:2},postModify:u}];for(let x=0;x<b.length;x++){const M=b[x],z=M.regex.exec(e);if(z){const ne=z[M.indices.bucket];let H=z[M.indices.path];H||(H=""),r=new At(ne,H),M.postModify(r);break}}if(r==null)throw PU(e);return r}}class UU{constructor(e){this.promise_=Promise.reject(e)}getPromise(){return this.promise_}cancel(e=!1){}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function VU(t,e,n){let r=1,i=null,s=null,o=!1,a=0;function c(){return a===2}let u=!1;function l(...E){u||(u=!0,e.apply(null,E))}function h(E){i=setTimeout(()=>{i=null,t(f,c())},E)}function d(){s&&clearTimeout(s)}function f(E,...v){if(u){d();return}if(E){d(),l.call(null,E,...v);return}if(c()||o){d(),l.call(null,E,...v);return}r<64&&(r*=2);let b;a===1?(a=2,b=0):b=(r+Math.random())*1e3,h(b)}let g=!1;function y(E){g||(g=!0,d(),!u&&(i!==null?(E||(a=2),clearTimeout(i),h(0)):E||(a=1)))}return h(0),s=setTimeout(()=>{o=!0,y(!0)},n),y}function BU(t){t(!1)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function $U(t){return t!==void 0}function qU(t){return typeof t=="function"}function jU(t){return typeof t=="object"&&!Array.isArray(t)}function Ah(t){return typeof t=="string"||t instanceof String}function Tw(t){return cg()&&t instanceof Blob}function cg(){return typeof Blob<"u"&&!Dl()}function Lf(t,e,n,r){if(r<e)throw qs(`Invalid value for '${t}'. Expected ${e} or greater.`);if(r>n)throw qs(`Invalid value for '${t}'. Expected ${n} or less.`)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function li(t,e,n){let r=e;return n==null&&(r=`https://${e}`),`${n}://${r}/v0${t}`}function o1(t){const e=encodeURIComponent;let n="?";for(const r in t)if(t.hasOwnProperty(r)){const i=e(r)+"="+e(t[r]);n=n+i+"&"}return n=n.slice(0,-1),n}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */var ji;(function(t){t[t.NO_ERROR=0]="NO_ERROR",t[t.NETWORK_ERROR=1]="NETWORK_ERROR",t[t.ABORT=2]="ABORT"})(ji||(ji={}));/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function a1(t,e){const n=t>=500&&t<600,i=[408,429].indexOf(t)!==-1,s=e.indexOf(t)!==-1;return n||i||s}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class zU{constructor(e,n,r,i,s,o,a,c,u,l,h,d=!0){this.url_=e,this.method_=n,this.headers_=r,this.body_=i,this.successCodes_=s,this.additionalRetryCodes_=o,this.callback_=a,this.errorCallback_=c,this.timeout_=u,this.progressCallback_=l,this.connectionFactory_=h,this.retry=d,this.pendingConnection_=null,this.backoffId_=null,this.canceled_=!1,this.appDelete_=!1,this.promise_=new Promise((f,g)=>{this.resolve_=f,this.reject_=g,this.start_()})}start_(){const e=(r,i)=>{if(i){r(!1,new tu(!1,null,!0));return}const s=this.connectionFactory_();this.pendingConnection_=s;const o=a=>{const c=a.loaded,u=a.lengthComputable?a.total:-1;this.progressCallback_!==null&&this.progressCallback_(c,u)};this.progressCallback_!==null&&s.addUploadProgressListener(o),s.send(this.url_,this.method_,this.body_,this.headers_).then(()=>{this.progressCallback_!==null&&s.removeUploadProgressListener(o),this.pendingConnection_=null;const a=s.getErrorCode()===ji.NO_ERROR,c=s.getStatus();if(!a||a1(c,this.additionalRetryCodes_)&&this.retry){const l=s.getErrorCode()===ji.ABORT;r(!1,new tu(!1,null,l));return}const u=this.successCodes_.indexOf(c)!==-1;r(!0,new tu(u,s))})},n=(r,i)=>{const s=this.resolve_,o=this.reject_,a=i.connection;if(i.wasSuccessCode)try{const c=this.callback_(a,a.getResponse());$U(c)?s(c):s()}catch(c){o(c)}else if(a!==null){const c=ag();c.serverResponse=a.getErrorText(),this.errorCallback_?o(this.errorCallback_(a,c)):o(c)}else if(i.canceled){const c=this.appDelete_?i1():n1();o(c)}else{const c=t1();o(c)}};this.canceled_?n(!1,new tu(!1,null,!0)):this.backoffId_=VU(e,n,this.timeout_)}getPromise(){return this.promise_}cancel(e){this.canceled_=!0,this.appDelete_=e||!1,this.backoffId_!==null&&BU(this.backoffId_),this.pendingConnection_!==null&&this.pendingConnection_.abort()}}class tu{constructor(e,n,r){this.wasSuccessCode=e,this.connection=n,this.canceled=!!r}}function HU(t,e){e!==null&&e.length>0&&(t.Authorization="Firebase "+e)}function KU(t,e){t["X-Firebase-Storage-Version"]="webjs/"+(e!=null?e:"AppManager")}function WU(t,e){e&&(t["X-Firebase-GMPID"]=e)}function GU(t,e){e!==null&&(t["X-Firebase-AppCheck"]=e)}function YU(t,e,n,r,i,s,o=!0){const a=o1(t.urlParams),c=t.url+a,u=Object.assign({},t.headers);return WU(u,e),HU(u,n),KU(u,s),GU(u,r),new zU(c,t.method,u,t.body,t.successCodes,t.additionalRetryCodes,t.handler,t.errorHandler,t.timeout,t.progressCallback,i,o)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function QU(){return typeof BlobBuilder<"u"?BlobBuilder:typeof WebKitBlobBuilder<"u"?WebKitBlobBuilder:void 0}function XU(...t){const e=QU();if(e!==void 0){const n=new e;for(let r=0;r<t.length;r++)n.append(t[r]);return n.getBlob()}else{if(cg())return new Blob(t);throw new je(Le.UNSUPPORTED_ENVIRONMENT,"This browser doesn't seem to support creating Blobs")}}function JU(t,e,n){return t.webkitSlice?t.webkitSlice(e,n):t.mozSlice?t.mozSlice(e,n):t.slice?t.slice(e,n):null}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function ZU(t){if(typeof atob>"u")throw FU("base-64");return atob(t)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const sn={RAW:"raw",BASE64:"base64",BASE64URL:"base64url",DATA_URL:"data_url"};class vd{constructor(e,n){this.data=e,this.contentType=n||null}}function c1(t,e){switch(t){case sn.RAW:return new vd(u1(e));case sn.BASE64:case sn.BASE64URL:return new vd(l1(t,e));case sn.DATA_URL:return new vd(tV(e),nV(e))}throw ag()}function u1(t){const e=[];for(let n=0;n<t.length;n++){let r=t.charCodeAt(n);if(r<=127)e.push(r);else if(r<=2047)e.push(192|r>>6,128|r&63);else if((r&64512)===55296)if(!(n<t.length-1&&(t.charCodeAt(n+1)&64512)===56320))e.push(239,191,189);else{const s=r,o=t.charCodeAt(++n);r=65536|(s&1023)<<10|o&1023,e.push(240|r>>18,128|r>>12&63,128|r>>6&63,128|r&63)}else(r&64512)===56320?e.push(239,191,189):e.push(224|r>>12,128|r>>6&63,128|r&63)}return new Uint8Array(e)}function eV(t){let e;try{e=decodeURIComponent(t)}catch{throw ma(sn.DATA_URL,"Malformed data URL.")}return u1(e)}function l1(t,e){switch(t){case sn.BASE64:{const i=e.indexOf("-")!==-1,s=e.indexOf("_")!==-1;if(i||s)throw ma(t,"Invalid character '"+(i?"-":"_")+"' found: is it base64url encoded?");break}case sn.BASE64URL:{const i=e.indexOf("+")!==-1,s=e.indexOf("/")!==-1;if(i||s)throw ma(t,"Invalid character '"+(i?"+":"/")+"' found: is it base64 encoded?");e=e.replace(/-/g,"+").replace(/_/g,"/");break}}let n;try{n=ZU(e)}catch(i){throw i.message.includes("polyfill")?i:ma(t,"Invalid character found")}const r=new Uint8Array(n.length);for(let i=0;i<n.length;i++)r[i]=n.charCodeAt(i);return r}class h1{constructor(e){this.base64=!1,this.contentType=null;const n=e.match(/^data:([^,]+)?,/);if(n===null)throw ma(sn.DATA_URL,"Must be formatted 'data:[<mediatype>][;base64],<data>");const r=n[1]||null;r!=null&&(this.base64=rV(r,";base64"),this.contentType=this.base64?r.substring(0,r.length-7):r),this.rest=e.substring(e.indexOf(",")+1)}}function tV(t){const e=new h1(t);return e.base64?l1(sn.BASE64,e.rest):eV(e.rest)}function nV(t){return new h1(t).contentType}function rV(t,e){return t.length>=e.length?t.substring(t.length-e.length)===e:!1}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Yn{constructor(e,n){let r=0,i="";Tw(e)?(this.data_=e,r=e.size,i=e.type):e instanceof ArrayBuffer?(n?this.data_=new Uint8Array(e):(this.data_=new Uint8Array(e.byteLength),this.data_.set(new Uint8Array(e))),r=this.data_.length):e instanceof Uint8Array&&(n?this.data_=e:(this.data_=new Uint8Array(e.length),this.data_.set(e)),r=e.length),this.size_=r,this.type_=i}size(){return this.size_}type(){return this.type_}slice(e,n){if(Tw(this.data_)){const r=this.data_,i=JU(r,e,n);return i===null?null:new Yn(i)}else{const r=new Uint8Array(this.data_.buffer,e,n-e);return new Yn(r,!0)}}static getBlob(...e){if(cg()){const n=e.map(r=>r instanceof Yn?r.data_:r);return new Yn(XU.apply(null,n))}else{const n=e.map(o=>Ah(o)?c1(sn.RAW,o).data:o.data_);let r=0;n.forEach(o=>{r+=o.byteLength});const i=new Uint8Array(r);let s=0;return n.forEach(o=>{for(let a=0;a<o.length;a++)i[s++]=o[a]}),new Yn(i,!0)}}uploadData(){return this.data_}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function ug(t){let e;try{e=JSON.parse(t)}catch{return null}return jU(e)?e:null}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function iV(t){if(t.length===0)return null;const e=t.lastIndexOf("/");return e===-1?"":t.slice(0,e)}function sV(t,e){const n=e.split("/").filter(r=>r.length>0).join("/");return t.length===0?n:t+"/"+n}function d1(t){const e=t.lastIndexOf("/",t.length-2);return e===-1?t:t.slice(e+1)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function oV(t,e){return e}class Nt{constructor(e,n,r,i){this.server=e,this.local=n||e,this.writable=!!r,this.xform=i||oV}}let nu=null;function aV(t){return!Ah(t)||t.length<2?t:d1(t)}function Ch(){if(nu)return nu;const t=[];t.push(new Nt("bucket")),t.push(new Nt("generation")),t.push(new Nt("metageneration")),t.push(new Nt("name","fullPath",!0));function e(s,o){return aV(o)}const n=new Nt("name");n.xform=e,t.push(n);function r(s,o){return o!==void 0?Number(o):o}const i=new Nt("size");return i.xform=r,t.push(i),t.push(new Nt("timeCreated")),t.push(new Nt("updated")),t.push(new Nt("md5Hash",null,!0)),t.push(new Nt("cacheControl",null,!0)),t.push(new Nt("contentDisposition",null,!0)),t.push(new Nt("contentEncoding",null,!0)),t.push(new Nt("contentLanguage",null,!0)),t.push(new Nt("contentType",null,!0)),t.push(new Nt("metadata","customMetadata",!0)),nu=t,nu}function cV(t,e){function n(){const r=t.bucket,i=t.fullPath,s=new At(r,i);return e._makeStorageReference(s)}Object.defineProperty(t,"ref",{get:n})}function uV(t,e,n){const r={};r.type="file";const i=n.length;for(let s=0;s<i;s++){const o=n[s];r[o.local]=o.xform(r,e[o.server])}return cV(r,t),r}function f1(t,e,n){const r=ug(e);return r===null?null:uV(t,r,n)}function lV(t,e,n,r){const i=ug(e);if(i===null||!Ah(i.downloadTokens))return null;const s=i.downloadTokens;if(s.length===0)return null;const o=encodeURIComponent;return s.split(",").map(u=>{const l=t.bucket,h=t.fullPath,d="/b/"+o(l)+"/o/"+o(h),f=li(d,n,r),g=o1({alt:"media",token:u});return f+g})[0]}function lg(t,e){const n={},r=e.length;for(let i=0;i<r;i++){const s=e[i];s.writable&&(n[s.server]=t[s.local])}return JSON.stringify(n)}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Sw="prefixes",kw="items";function hV(t,e,n){const r={prefixes:[],items:[],nextPageToken:n.nextPageToken};if(n[Sw])for(const i of n[Sw]){const s=i.replace(/\/$/,""),o=t._makeStorageReference(new At(e,s));r.prefixes.push(o)}if(n[kw])for(const i of n[kw]){const s=t._makeStorageReference(new At(e,i.name));r.items.push(s)}return r}function dV(t,e,n){const r=ug(n);return r===null?null:hV(t,e,r)}class vr{constructor(e,n,r,i){this.url=e,this.method=n,this.handler=r,this.timeout=i,this.urlParams={},this.headers={},this.body=null,this.errorHandler=null,this.progressCallback=null,this.successCodes=[200],this.additionalRetryCodes=[]}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function qn(t){if(!t)throw ag()}function Rh(t,e){function n(r,i){const s=f1(t,i,e);return qn(s!==null),s}return n}function fV(t,e){function n(r,i){const s=dV(t,e,i);return qn(s!==null),s}return n}function pV(t,e){function n(r,i){const s=f1(t,i,e);return qn(s!==null),lV(s,i,t.host,t._protocol)}return n}function Ro(t){function e(n,r){let i;return n.getStatus()===401?n.getErrorText().includes("Firebase App Check token is invalid")?i=xU():i=RU():n.getStatus()===402?i=CU(t.bucket):n.getStatus()===403?i=NU(t.path):i=r,i.status=n.getStatus(),i.serverResponse=r.serverResponse,i}return e}function xh(t){const e=Ro(t);function n(r,i){let s=e(r,i);return r.getStatus()===404&&(s=AU(t.path)),s.serverResponse=i.serverResponse,s}return n}function p1(t,e,n){const r=e.fullServerUrl(),i=li(r,t.host,t._protocol),s="GET",o=t.maxOperationRetryTime,a=new vr(i,s,Rh(t,n),o);return a.errorHandler=xh(e),a}function mV(t,e,n,r,i){const s={};e.isRoot?s.prefix="":s.prefix=e.path+"/",n&&n.length>0&&(s.delimiter=n),r&&(s.pageToken=r),i&&(s.maxResults=i);const o=e.bucketOnlyServerUrl(),a=li(o,t.host,t._protocol),c="GET",u=t.maxOperationRetryTime,l=new vr(a,c,fV(t,e.bucket),u);return l.urlParams=s,l.errorHandler=Ro(e),l}function gV(t,e,n){const r=e.fullServerUrl(),i=li(r,t.host,t._protocol),s="GET",o=t.maxOperationRetryTime,a=new vr(i,s,pV(t,n),o);return a.errorHandler=xh(e),a}function yV(t,e,n,r){const i=e.fullServerUrl(),s=li(i,t.host,t._protocol),o="PATCH",a=lg(n,r),c={"Content-Type":"application/json; charset=utf-8"},u=t.maxOperationRetryTime,l=new vr(s,o,Rh(t,r),u);return l.headers=c,l.body=a,l.errorHandler=xh(e),l}function vV(t,e){const n=e.fullServerUrl(),r=li(n,t.host,t._protocol),i="DELETE",s=t.maxOperationRetryTime;function o(c,u){}const a=new vr(r,i,o,s);return a.successCodes=[200,204],a.errorHandler=xh(e),a}function wV(t,e){return t&&t.contentType||e&&e.type()||"application/octet-stream"}function m1(t,e,n){const r=Object.assign({},n);return r.fullPath=t.path,r.size=e.size(),r.contentType||(r.contentType=wV(null,e)),r}function _V(t,e,n,r,i){const s=e.bucketOnlyServerUrl(),o={"X-Goog-Upload-Protocol":"multipart"};function a(){let b="";for(let x=0;x<2;x++)b=b+Math.random().toString().slice(2);return b}const c=a();o["Content-Type"]="multipart/related; boundary="+c;const u=m1(e,r,i),l=lg(u,n),h="--"+c+`\r
Content-Type: application/json; charset=utf-8\r
\r
`+l+`\r
--`+c+`\r
Content-Type: `+u.contentType+`\r
\r
`,d=`\r
--`+c+"--",f=Yn.getBlob(h,r,d);if(f===null)throw r1();const g={name:u.fullPath},y=li(s,t.host,t._protocol),E="POST",v=t.maxUploadRetryTime,I=new vr(y,E,Rh(t,n),v);return I.urlParams=g,I.headers=o,I.body=f.uploadData(),I.errorHandler=Ro(e),I}class dl{constructor(e,n,r,i){this.current=e,this.total=n,this.finalized=!!r,this.metadata=i||null}}function hg(t,e){let n=null;try{n=t.getResponseHeader("X-Goog-Upload-Status")}catch{qn(!1)}return qn(!!n&&(e||["active"]).indexOf(n)!==-1),n}function bV(t,e,n,r,i){const s=e.bucketOnlyServerUrl(),o=m1(e,r,i),a={name:o.fullPath},c=li(s,t.host,t._protocol),u="POST",l={"X-Goog-Upload-Protocol":"resumable","X-Goog-Upload-Command":"start","X-Goog-Upload-Header-Content-Length":`${r.size()}`,"X-Goog-Upload-Header-Content-Type":o.contentType,"Content-Type":"application/json; charset=utf-8"},h=lg(o,n),d=t.maxUploadRetryTime;function f(y){hg(y);let E;try{E=y.getResponseHeader("X-Goog-Upload-URL")}catch{qn(!1)}return qn(Ah(E)),E}const g=new vr(c,u,f,d);return g.urlParams=a,g.headers=l,g.body=h,g.errorHandler=Ro(e),g}function IV(t,e,n,r){const i={"X-Goog-Upload-Command":"query"};function s(u){const l=hg(u,["active","final"]);let h=null;try{h=u.getResponseHeader("X-Goog-Upload-Size-Received")}catch{qn(!1)}h||qn(!1);const d=Number(h);return qn(!isNaN(d)),new dl(d,r.size(),l==="final")}const o="POST",a=t.maxUploadRetryTime,c=new vr(n,o,s,a);return c.headers=i,c.errorHandler=Ro(e),c}const Aw=256*1024;function EV(t,e,n,r,i,s,o,a){const c=new dl(0,0);if(o?(c.current=o.current,c.total=o.total):(c.current=0,c.total=r.size()),r.size()!==c.total)throw LU();const u=c.total-c.current;let l=u;i>0&&(l=Math.min(l,i));const h=c.current,d=h+l;let f="";l===0?f="finalize":u===l?f="upload, finalize":f="upload";const g={"X-Goog-Upload-Command":f,"X-Goog-Upload-Offset":`${c.current}`},y=r.slice(h,d);if(y===null)throw r1();function E(x,M){const z=hg(x,["active","final"]),ne=c.current+l,H=r.size();let oe;return z==="final"?oe=Rh(e,s)(x,M):oe=null,new dl(ne,H,z==="final",oe)}const v="POST",I=e.maxUploadRetryTime,b=new vr(n,v,E,I);return b.headers=g,b.body=y.uploadData(),b.progressCallback=a||null,b.errorHandler=Ro(t),b}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const TV={STATE_CHANGED:"state_changed"},Lt={RUNNING:"running",PAUSED:"paused",SUCCESS:"success",CANCELED:"canceled",ERROR:"error"};function wd(t){switch(t){case"running":case"pausing":case"canceling":return Lt.RUNNING;case"paused":return Lt.PAUSED;case"success":return Lt.SUCCESS;case"canceled":return Lt.CANCELED;case"error":return Lt.ERROR;default:return Lt.ERROR}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class SV{constructor(e,n,r){if(qU(e)||n!=null||r!=null)this.next=e,this.error=n!=null?n:void 0,this.complete=r!=null?r:void 0;else{const s=e;this.next=s.next,this.error=s.error,this.complete=s.complete}}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function bs(t){return(...e)=>{Promise.resolve().then(()=>t(...e))}}class kV{constructor(){this.sent_=!1,this.xhr_=new XMLHttpRequest,this.initXhr(),this.errorCode_=ji.NO_ERROR,this.sendPromise_=new Promise(e=>{this.xhr_.addEventListener("abort",()=>{this.errorCode_=ji.ABORT,e()}),this.xhr_.addEventListener("error",()=>{this.errorCode_=ji.NETWORK_ERROR,e()}),this.xhr_.addEventListener("load",()=>{e()})})}send(e,n,r,i){if(this.sent_)throw zo("cannot .send() more than once");if(this.sent_=!0,this.xhr_.open(n,e,!0),i!==void 0)for(const s in i)i.hasOwnProperty(s)&&this.xhr_.setRequestHeader(s,i[s].toString());return r!==void 0?this.xhr_.send(r):this.xhr_.send(),this.sendPromise_}getErrorCode(){if(!this.sent_)throw zo("cannot .getErrorCode() before sending");return this.errorCode_}getStatus(){if(!this.sent_)throw zo("cannot .getStatus() before sending");try{return this.xhr_.status}catch{return-1}}getResponse(){if(!this.sent_)throw zo("cannot .getResponse() before sending");return this.xhr_.response}getErrorText(){if(!this.sent_)throw zo("cannot .getErrorText() before sending");return this.xhr_.statusText}abort(){this.xhr_.abort()}getResponseHeader(e){return this.xhr_.getResponseHeader(e)}addUploadProgressListener(e){this.xhr_.upload!=null&&this.xhr_.upload.addEventListener("progress",e)}removeUploadProgressListener(e){this.xhr_.upload!=null&&this.xhr_.upload.removeEventListener("progress",e)}}class AV extends kV{initXhr(){this.xhr_.responseType="text"}}function On(){return new AV}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class g1{constructor(e,n,r=null){this._transferred=0,this._needToFetchStatus=!1,this._needToFetchMetadata=!1,this._observers=[],this._error=void 0,this._uploadUrl=void 0,this._request=void 0,this._chunkMultiplier=1,this._resolve=void 0,this._reject=void 0,this._ref=e,this._blob=n,this._metadata=r,this._mappings=Ch(),this._resumable=this._shouldDoResumable(this._blob),this._state="running",this._errorHandler=i=>{if(this._request=void 0,this._chunkMultiplier=1,i._codeEquals(Le.CANCELED))this._needToFetchStatus=!0,this.completeTransitions_();else{const s=this.isExponentialBackoffExpired();if(a1(i.status,[]))if(s)i=t1();else{this.sleepTime=Math.max(this.sleepTime*2,kU),this._needToFetchStatus=!0,this.completeTransitions_();return}this._error=i,this._transition("error")}},this._metadataErrorHandler=i=>{this._request=void 0,i._codeEquals(Le.CANCELED)?this.completeTransitions_():(this._error=i,this._transition("error"))},this.sleepTime=0,this.maxSleepTime=this._ref.storage.maxUploadRetryTime,this._promise=new Promise((i,s)=>{this._resolve=i,this._reject=s,this._start()}),this._promise.then(null,()=>{})}isExponentialBackoffExpired(){return this.sleepTime>this.maxSleepTime}_makeProgressCallback(){const e=this._transferred;return n=>this._updateProgress(e+n)}_shouldDoResumable(e){return e.size()>256*1024}_start(){this._state==="running"&&this._request===void 0&&(this._resumable?this._uploadUrl===void 0?this._createResumable():this._needToFetchStatus?this._fetchStatus():this._needToFetchMetadata?this._fetchMetadata():this.pendingTimeout=setTimeout(()=>{this.pendingTimeout=void 0,this._continueUpload()},this.sleepTime):this._oneShotUpload())}_resolveToken(e){Promise.all([this._ref.storage._getAuthToken(),this._ref.storage._getAppCheckToken()]).then(([n,r])=>{switch(this._state){case"running":e(n,r);break;case"canceling":this._transition("canceled");break;case"pausing":this._transition("paused");break}})}_createResumable(){this._resolveToken((e,n)=>{const r=bV(this._ref.storage,this._ref._location,this._mappings,this._blob,this._metadata),i=this._ref.storage._makeRequest(r,On,e,n);this._request=i,i.getPromise().then(s=>{this._request=void 0,this._uploadUrl=s,this._needToFetchStatus=!1,this.completeTransitions_()},this._errorHandler)})}_fetchStatus(){const e=this._uploadUrl;this._resolveToken((n,r)=>{const i=IV(this._ref.storage,this._ref._location,e,this._blob),s=this._ref.storage._makeRequest(i,On,n,r);this._request=s,s.getPromise().then(o=>{o=o,this._request=void 0,this._updateProgress(o.current),this._needToFetchStatus=!1,o.finalized&&(this._needToFetchMetadata=!0),this.completeTransitions_()},this._errorHandler)})}_continueUpload(){const e=Aw*this._chunkMultiplier,n=new dl(this._transferred,this._blob.size()),r=this._uploadUrl;this._resolveToken((i,s)=>{let o;try{o=EV(this._ref._location,this._ref.storage,r,this._blob,e,this._mappings,n,this._makeProgressCallback())}catch(c){this._error=c,this._transition("error");return}const a=this._ref.storage._makeRequest(o,On,i,s,!1);this._request=a,a.getPromise().then(c=>{this._increaseMultiplier(),this._request=void 0,this._updateProgress(c.current),c.finalized?(this._metadata=c.metadata,this._transition("success")):this.completeTransitions_()},this._errorHandler)})}_increaseMultiplier(){Aw*this._chunkMultiplier*2<32*1024*1024&&(this._chunkMultiplier*=2)}_fetchMetadata(){this._resolveToken((e,n)=>{const r=p1(this._ref.storage,this._ref._location,this._mappings),i=this._ref.storage._makeRequest(r,On,e,n);this._request=i,i.getPromise().then(s=>{this._request=void 0,this._metadata=s,this._transition("success")},this._metadataErrorHandler)})}_oneShotUpload(){this._resolveToken((e,n)=>{const r=_V(this._ref.storage,this._ref._location,this._mappings,this._blob,this._metadata),i=this._ref.storage._makeRequest(r,On,e,n);this._request=i,i.getPromise().then(s=>{this._request=void 0,this._metadata=s,this._updateProgress(this._blob.size()),this._transition("success")},this._errorHandler)})}_updateProgress(e){const n=this._transferred;this._transferred=e,this._transferred!==n&&this._notifyObservers()}_transition(e){if(this._state!==e)switch(e){case"canceling":case"pausing":this._state=e,this._request!==void 0?this._request.cancel():this.pendingTimeout&&(clearTimeout(this.pendingTimeout),this.pendingTimeout=void 0,this.completeTransitions_());break;case"running":const n=this._state==="paused";this._state=e,n&&(this._notifyObservers(),this._start());break;case"paused":this._state=e,this._notifyObservers();break;case"canceled":this._error=n1(),this._state=e,this._notifyObservers();break;case"error":this._state=e,this._notifyObservers();break;case"success":this._state=e,this._notifyObservers();break}}completeTransitions_(){switch(this._state){case"pausing":this._transition("paused");break;case"canceling":this._transition("canceled");break;case"running":this._start();break}}get snapshot(){const e=wd(this._state);return{bytesTransferred:this._transferred,totalBytes:this._blob.size(),state:e,metadata:this._metadata,task:this,ref:this._ref}}on(e,n,r,i){const s=new SV(n||void 0,r||void 0,i||void 0);return this._addObserver(s),()=>{this._removeObserver(s)}}then(e,n){return this._promise.then(e,n)}catch(e){return this.then(null,e)}_addObserver(e){this._observers.push(e),this._notifyObserver(e)}_removeObserver(e){const n=this._observers.indexOf(e);n!==-1&&this._observers.splice(n,1)}_notifyObservers(){this._finishPromise(),this._observers.slice().forEach(n=>{this._notifyObserver(n)})}_finishPromise(){if(this._resolve!==void 0){let e=!0;switch(wd(this._state)){case Lt.SUCCESS:bs(this._resolve.bind(null,this.snapshot))();break;case Lt.CANCELED:case Lt.ERROR:const n=this._reject;bs(n.bind(null,this._error))();break;default:e=!1;break}e&&(this._resolve=void 0,this._reject=void 0)}}_notifyObserver(e){switch(wd(this._state)){case Lt.RUNNING:case Lt.PAUSED:e.next&&bs(e.next.bind(e,this.snapshot))();break;case Lt.SUCCESS:e.complete&&bs(e.complete.bind(e))();break;case Lt.CANCELED:case Lt.ERROR:e.error&&bs(e.error.bind(e,this._error))();break;default:e.error&&bs(e.error.bind(e,this._error))()}}resume(){const e=this._state==="paused"||this._state==="pausing";return e&&this._transition("running"),e}pause(){const e=this._state==="running";return e&&this._transition("pausing"),e}cancel(){const e=this._state==="running"||this._state==="pausing";return e&&this._transition("canceling"),e}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class rs{constructor(e,n){this._service=e,n instanceof At?this._location=n:this._location=At.makeFromUrl(n,e.host)}toString(){return"gs://"+this._location.bucket+"/"+this._location.path}_newRef(e,n){return new rs(e,n)}get root(){const e=new At(this._location.bucket,"");return this._newRef(this._service,e)}get bucket(){return this._location.bucket}get fullPath(){return this._location.path}get name(){return d1(this._location.path)}get storage(){return this._service}get parent(){const e=iV(this._location.path);if(e===null)return null;const n=new At(this._location.bucket,e);return new rs(this._service,n)}_throwIfRoot(e){if(this._location.path==="")throw s1(e)}}function CV(t,e,n){return t._throwIfRoot("uploadBytesResumable"),new g1(t,new Yn(e),n)}function RV(t){const e={prefixes:[],items:[]};return y1(t,e).then(()=>e)}async function y1(t,e,n){const i=await v1(t,{pageToken:n});e.prefixes.push(...i.prefixes),e.items.push(...i.items),i.nextPageToken!=null&&await y1(t,e,i.nextPageToken)}function v1(t,e){e!=null&&typeof e.maxResults=="number"&&Lf("options.maxResults",1,1e3,e.maxResults);const n=e||{},r=mV(t.storage,t._location,"/",n.pageToken,n.maxResults);return t.storage.makeRequestWithTokens(r,On)}function xV(t){t._throwIfRoot("getMetadata");const e=p1(t.storage,t._location,Ch());return t.storage.makeRequestWithTokens(e,On)}function NV(t,e){t._throwIfRoot("updateMetadata");const n=yV(t.storage,t._location,e,Ch());return t.storage.makeRequestWithTokens(n,On)}function PV(t){t._throwIfRoot("getDownloadURL");const e=gV(t.storage,t._location,Ch());return t.storage.makeRequestWithTokens(e,On).then(n=>{if(n===null)throw MU();return n})}function DV(t){t._throwIfRoot("deleteObject");const e=vV(t.storage,t._location);return t.storage.makeRequestWithTokens(e,On)}function w1(t,e){const n=sV(t._location.path,e),r=new At(t._location.bucket,n);return new rs(t.storage,r)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function OV(t){return/^[A-Za-z]+:\/\//.test(t)}function LV(t,e){return new rs(t,e)}function _1(t,e){if(t instanceof dg){const n=t;if(n._bucket==null)throw OU();const r=new rs(n,n._bucket);return e!=null?_1(r,e):r}else return e!==void 0?w1(t,e):t}function MV(t,e){if(e&&OV(e)){if(t instanceof dg)return LV(t,e);throw qs("To use ref(service, url), the first argument must be a Storage instance.")}else return _1(t,e)}function Cw(t,e){const n=e==null?void 0:e[e1];return n==null?null:At.makeFromBucketSpec(n,t)}function FV(t,e,n,r={}){t.host=`${e}:${n}`,t._protocol="http";const{mockUserToken:i}=r;i&&(t._overrideAuthToken=typeof i=="string"?i:Tb(i,t.app.options.projectId))}class dg{constructor(e,n,r,i,s){this.app=e,this._authProvider=n,this._appCheckProvider=r,this._url=i,this._firebaseVersion=s,this._bucket=null,this._host=ZT,this._protocol="https",this._appId=null,this._deleted=!1,this._maxOperationRetryTime=TU,this._maxUploadRetryTime=SU,this._requests=new Set,i!=null?this._bucket=At.makeFromBucketSpec(i,this._host):this._bucket=Cw(this._host,this.app.options)}get host(){return this._host}set host(e){this._host=e,this._url!=null?this._bucket=At.makeFromBucketSpec(this._url,e):this._bucket=Cw(e,this.app.options)}get maxUploadRetryTime(){return this._maxUploadRetryTime}set maxUploadRetryTime(e){Lf("time",0,Number.POSITIVE_INFINITY,e),this._maxUploadRetryTime=e}get maxOperationRetryTime(){return this._maxOperationRetryTime}set maxOperationRetryTime(e){Lf("time",0,Number.POSITIVE_INFINITY,e),this._maxOperationRetryTime=e}async _getAuthToken(){if(this._overrideAuthToken)return this._overrideAuthToken;const e=this._authProvider.getImmediate({optional:!0});if(e){const n=await e.getToken();if(n!==null)return n.accessToken}return null}async _getAppCheckToken(){const e=this._appCheckProvider.getImmediate({optional:!0});return e?(await e.getToken()).token:null}_delete(){return this._deleted||(this._deleted=!0,this._requests.forEach(e=>e.cancel()),this._requests.clear()),Promise.resolve()}_makeStorageReference(e){return new rs(this,e)}_makeRequest(e,n,r,i,s=!0){if(this._deleted)return new UU(i1());{const o=YU(e,this._appId,r,i,n,this._firebaseVersion,s);return this._requests.add(o),o.getPromise().then(()=>this._requests.delete(o),()=>this._requests.delete(o)),o}}async makeRequestWithTokens(e,n){const[r,i]=await Promise.all([this._getAuthToken(),this._getAppCheckToken()]);return this._makeRequest(e,n,r,i).getPromise()}}const Rw="@firebase/storage",xw="0.11.2";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const UV="storage";function VV(t,e,n){return t=Y(t),CV(t,e,n)}function BV(t){return t=Y(t),xV(t)}function $V(t,e){return t=Y(t),NV(t,e)}function qV(t,e){return t=Y(t),v1(t,e)}function jV(t){return t=Y(t),RV(t)}function zV(t){return t=Y(t),PV(t)}function HV(t){return t=Y(t),DV(t)}function Nw(t,e){return t=Y(t),MV(t,e)}function KV(t,e){return w1(t,e)}function WV(t,e,n,r={}){FV(t,e,n,r)}function GV(t,{instanceIdentifier:e}){const n=t.getProvider("app").getImmediate(),r=t.getProvider("auth-internal"),i=t.getProvider("app-check-internal");return new dg(n,r,i,e,dr)}function YV(){rr(new cn(UV,GV,"PUBLIC").setMultipleInstances(!0)),an(Rw,xw,""),an(Rw,xw,"esm2017")}YV();/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ru{constructor(e,n,r){this._delegate=e,this.task=n,this.ref=r}get bytesTransferred(){return this._delegate.bytesTransferred}get metadata(){return this._delegate.metadata}get state(){return this._delegate.state}get totalBytes(){return this._delegate.totalBytes}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Pw{constructor(e,n){this._delegate=e,this._ref=n,this.cancel=this._delegate.cancel.bind(this._delegate),this.catch=this._delegate.catch.bind(this._delegate),this.pause=this._delegate.pause.bind(this._delegate),this.resume=this._delegate.resume.bind(this._delegate)}get snapshot(){return new ru(this._delegate.snapshot,this,this._ref)}then(e,n){return this._delegate.then(r=>{if(e)return e(new ru(r,this,this._ref))},n)}on(e,n,r,i){let s;return n&&(typeof n=="function"?s=o=>n(new ru(o,this,this._ref)):s={next:n.next?o=>n.next(new ru(o,this,this._ref)):void 0,complete:n.complete||void 0,error:n.error||void 0}),this._delegate.on(e,s,r||void 0,i||void 0)}}class Dw{constructor(e,n){this._delegate=e,this._service=n}get prefixes(){return this._delegate.prefixes.map(e=>new tr(e,this._service))}get items(){return this._delegate.items.map(e=>new tr(e,this._service))}get nextPageToken(){return this._delegate.nextPageToken||null}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *  http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class tr{constructor(e,n){this._delegate=e,this.storage=n}get name(){return this._delegate.name}get bucket(){return this._delegate.bucket}get fullPath(){return this._delegate.fullPath}toString(){return this._delegate.toString()}child(e){const n=KV(this._delegate,e);return new tr(n,this.storage)}get root(){return new tr(this._delegate.root,this.storage)}get parent(){const e=this._delegate.parent;return e==null?null:new tr(e,this.storage)}put(e,n){return this._throwIfRoot("put"),new Pw(VV(this._delegate,e,n),this)}putString(e,n=sn.RAW,r){this._throwIfRoot("putString");const i=c1(n,e),s=Object.assign({},r);return s.contentType==null&&i.contentType!=null&&(s.contentType=i.contentType),new Pw(new g1(this._delegate,new Yn(i.data,!0),s),this)}listAll(){return jV(this._delegate).then(e=>new Dw(e,this.storage))}list(e){return qV(this._delegate,e||void 0).then(n=>new Dw(n,this.storage))}getMetadata(){return BV(this._delegate)}updateMetadata(e){return $V(this._delegate,e)}getDownloadURL(){return zV(this._delegate)}delete(){return this._throwIfRoot("delete"),HV(this._delegate)}_throwIfRoot(e){if(this._delegate._location.path==="")throw s1(e)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class b1{constructor(e,n){this.app=e,this._delegate=n}get maxOperationRetryTime(){return this._delegate.maxOperationRetryTime}get maxUploadRetryTime(){return this._delegate.maxUploadRetryTime}ref(e){if(Ow(e))throw qs("ref() expected a child path but got a URL, use refFromURL instead.");return new tr(Nw(this._delegate,e),this)}refFromURL(e){if(!Ow(e))throw qs("refFromURL() expected a full URL but got a child path, use ref() instead.");try{At.makeFromUrl(e,this._delegate.host)}catch{throw qs("refFromUrl() expected a valid full URL but got an invalid one.")}return new tr(Nw(this._delegate,e),this)}setMaxUploadRetryTime(e){this._delegate.maxUploadRetryTime=e}setMaxOperationRetryTime(e){this._delegate.maxOperationRetryTime=e}useEmulator(e,n,r={}){WV(this._delegate,e,n,r)}}function Ow(t){return/^[A-Za-z]+:\/\//.test(t)}const QV="@firebase/storage-compat",XV="0.3.2";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const JV="storage-compat";function ZV(t,{instanceIdentifier:e}){const n=t.getProvider("app-compat").getImmediate(),r=t.getProvider("storage").getImmediate({identifier:e});return new b1(n,r)}function eB(t){const e={TaskState:Lt,TaskEvent:TV,StringFormat:sn,Storage:b1,Reference:tr};t.INTERNAL.registerComponent(new cn(JV,ZV,"PUBLIC").setServiceProps(e).setMultipleInstances(!0)),t.registerVersion(QV,XV)}eB(as);const fg=as.initializeApp({apiKey:"AIzaSyCV8VEQjUNCDSJq-D1HkzKDypsvxPLJ1U0",authDomain:"juan-antonio-espinoza.firebaseapp.com",projectId:"juan-antonio-espinoza",storageBucket:"juan-antonio-espinoza.appspot.com",messagingSenderId:"1009701811173",appId:"1:1009701811173:web:650d9b527cf0070251750c"}),w3=fg.firestore(),tB=fg.auth(),_3=fg.storage().ref(),Ho=()=>(t,e,n)=>{tB.onAuthStateChanged(function(r){if(!r)return n({path:"/admin_login?returnPath=jae_admin"});n()})},nB=MC({history:JA("/jae_page/"),routes:[{path:"/",name:"Door",component:()=>Tr(()=>import("./Building.e638d5d5.js"),["assets/Building.e638d5d5.js","assets/_plugin-vue_export-helper.cdc0426e.js","assets/Building.38698173.css"])},{path:"/web_view",name:"home",component:()=>Tr(()=>import("./Public.0d2121eb.js"),["assets/Public.0d2121eb.js","assets/_plugin-vue_export-helper.cdc0426e.js","assets/Public.0bb45c8f.css"])},{path:"/admin_login",name:"login",component:()=>Tr(()=>import("./Login.5c7bff96.js"),["assets/Login.5c7bff96.js","assets/_plugin-vue_export-helper.cdc0426e.js","assets/Login.24e35747.css"])},{path:"/jae_admin",name:"admin",component:()=>Tr(()=>import("./Admin.c17d496a.js"),["assets/Admin.c17d496a.js","assets/_plugin-vue_export-helper.cdc0426e.js","assets/Admin.56bc3b82.css"]),beforeEnter:Ho(),redirect:"/admin/fotografia",children:[{path:"/admin/fotografia",name:"Foto",component:()=>Tr(()=>import("./Fotografia.ae6be109.js"),["assets/Fotografia.ae6be109.js","assets/_plugin-vue_export-helper.cdc0426e.js","assets/Fotografia.b8b220e1.css"]),beforeEnter:Ho()},{path:"/admin/casamientos",name:"Casa",component:()=>Tr(()=>import("./Casamiento.5bb40c53.js"),["assets/Casamiento.5bb40c53.js","assets/_plugin-vue_export-helper.cdc0426e.js","assets/Casamiento.95c9e584.css"]),beforeEnter:Ho()},{path:"/admin/bautizos",name:"Bauti",component:()=>Tr(()=>import("./Bautizos.17d5aeea.js"),["assets/Bautizos.17d5aeea.js","assets/_plugin-vue_export-helper.cdc0426e.js","assets/Bautizos.ec43d6a9.css"]),beforeEnter:Ho()},{path:"/admin/enmarcaciones",name:"Marco",component:()=>Tr(()=>import("./Enmarcaciones.cdfef463.js"),["assets/Enmarcaciones.cdfef463.js","assets/_plugin-vue_export-helper.cdc0426e.js","assets/Enmarcaciones.066e5f65.css"]),beforeEnter:Ho()}]}]});function Lw(t,e){var n=Object.keys(t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(t);e&&(r=r.filter(function(i){return Object.getOwnPropertyDescriptor(t,i).enumerable})),n.push.apply(n,r)}return n}function j(t){for(var e=1;e<arguments.length;e++){var n=arguments[e]!=null?arguments[e]:{};e%2?Lw(Object(n),!0).forEach(function(r){at(t,r,n[r])}):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(n)):Lw(Object(n)).forEach(function(r){Object.defineProperty(t,r,Object.getOwnPropertyDescriptor(n,r))})}return t}function fl(t){return fl=typeof Symbol=="function"&&typeof Symbol.iterator=="symbol"?function(e){return typeof e}:function(e){return e&&typeof Symbol=="function"&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},fl(t)}function rB(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}function Mw(t,e){for(var n=0;n<e.length;n++){var r=e[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(t,r.key,r)}}function iB(t,e,n){return e&&Mw(t.prototype,e),n&&Mw(t,n),Object.defineProperty(t,"prototype",{writable:!1}),t}function at(t,e,n){return e in t?Object.defineProperty(t,e,{value:n,enumerable:!0,configurable:!0,writable:!0}):t[e]=n,t}function pg(t,e){return oB(t)||cB(t,e)||I1(t,e)||lB()}function Dc(t){return sB(t)||aB(t)||I1(t)||uB()}function sB(t){if(Array.isArray(t))return Mf(t)}function oB(t){if(Array.isArray(t))return t}function aB(t){if(typeof Symbol<"u"&&t[Symbol.iterator]!=null||t["@@iterator"]!=null)return Array.from(t)}function cB(t,e){var n=t==null?null:typeof Symbol<"u"&&t[Symbol.iterator]||t["@@iterator"];if(n!=null){var r=[],i=!0,s=!1,o,a;try{for(n=n.call(t);!(i=(o=n.next()).done)&&(r.push(o.value),!(e&&r.length===e));i=!0);}catch(c){s=!0,a=c}finally{try{!i&&n.return!=null&&n.return()}finally{if(s)throw a}}return r}}function I1(t,e){if(!!t){if(typeof t=="string")return Mf(t,e);var n=Object.prototype.toString.call(t).slice(8,-1);if(n==="Object"&&t.constructor&&(n=t.constructor.name),n==="Map"||n==="Set")return Array.from(t);if(n==="Arguments"||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n))return Mf(t,e)}}function Mf(t,e){(e==null||e>t.length)&&(e=t.length);for(var n=0,r=new Array(e);n<e;n++)r[n]=t[n];return r}function uB(){throw new TypeError(`Invalid attempt to spread non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`)}function lB(){throw new TypeError(`Invalid attempt to destructure non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`)}var Fw=function(){},mg={},E1={},T1=null,S1={mark:Fw,measure:Fw};try{typeof window<"u"&&(mg=window),typeof document<"u"&&(E1=document),typeof MutationObserver<"u"&&(T1=MutationObserver),typeof performance<"u"&&(S1=performance)}catch{}var hB=mg.navigator||{},Uw=hB.userAgent,Vw=Uw===void 0?"":Uw,ei=mg,Pe=E1,Bw=T1,iu=S1;ei.document;var wr=!!Pe.documentElement&&!!Pe.head&&typeof Pe.addEventListener=="function"&&typeof Pe.createElement=="function",k1=~Vw.indexOf("MSIE")||~Vw.indexOf("Trident/"),su,ou,au,cu,uu,cr="___FONT_AWESOME___",Ff=16,A1="fa",C1="svg-inline--fa",is="data-fa-i2svg",Uf="data-fa-pseudo-element",dB="data-fa-pseudo-element-pending",gg="data-prefix",yg="data-icon",$w="fontawesome-i2svg",fB="async",pB=["HTML","HEAD","STYLE","SCRIPT"],R1=function(){try{return!0}catch{return!1}}(),xe="classic",He="sharp",vg=[xe,He];function Oc(t){return new Proxy(t,{get:function(n,r){return r in n?n[r]:n[xe]}})}var Ja=Oc((su={},at(su,xe,{fa:"solid",fas:"solid","fa-solid":"solid",far:"regular","fa-regular":"regular",fal:"light","fa-light":"light",fat:"thin","fa-thin":"thin",fad:"duotone","fa-duotone":"duotone",fab:"brands","fa-brands":"brands",fak:"kit","fa-kit":"kit"}),at(su,He,{fa:"solid",fass:"solid","fa-solid":"solid",fasr:"regular","fa-regular":"regular",fasl:"light","fa-light":"light"}),su)),Za=Oc((ou={},at(ou,xe,{solid:"fas",regular:"far",light:"fal",thin:"fat",duotone:"fad",brands:"fab",kit:"fak"}),at(ou,He,{solid:"fass",regular:"fasr",light:"fasl"}),ou)),ec=Oc((au={},at(au,xe,{fab:"fa-brands",fad:"fa-duotone",fak:"fa-kit",fal:"fa-light",far:"fa-regular",fas:"fa-solid",fat:"fa-thin"}),at(au,He,{fass:"fa-solid",fasr:"fa-regular",fasl:"fa-light"}),au)),mB=Oc((cu={},at(cu,xe,{"fa-brands":"fab","fa-duotone":"fad","fa-kit":"fak","fa-light":"fal","fa-regular":"far","fa-solid":"fas","fa-thin":"fat"}),at(cu,He,{"fa-solid":"fass","fa-regular":"fasr","fa-light":"fasl"}),cu)),gB=/fa(s|r|l|t|d|b|k|ss|sr|sl)?[\-\ ]/,x1="fa-layers-text",yB=/Font ?Awesome ?([56 ]*)(Solid|Regular|Light|Thin|Duotone|Brands|Free|Pro|Sharp|Kit)?.*/i,vB=Oc((uu={},at(uu,xe,{900:"fas",400:"far",normal:"far",300:"fal",100:"fat"}),at(uu,He,{900:"fass",400:"fasr",300:"fasl"}),uu)),N1=[1,2,3,4,5,6,7,8,9,10],wB=N1.concat([11,12,13,14,15,16,17,18,19,20]),_B=["class","data-prefix","data-icon","data-fa-transform","data-fa-mask"],Oi={GROUP:"duotone-group",SWAP_OPACITY:"swap-opacity",PRIMARY:"primary",SECONDARY:"secondary"},tc=new Set;Object.keys(Za[xe]).map(tc.add.bind(tc));Object.keys(Za[He]).map(tc.add.bind(tc));var bB=[].concat(vg,Dc(tc),["2xs","xs","sm","lg","xl","2xl","beat","border","fade","beat-fade","bounce","flip-both","flip-horizontal","flip-vertical","flip","fw","inverse","layers-counter","layers-text","layers","li","pull-left","pull-right","pulse","rotate-180","rotate-270","rotate-90","rotate-by","shake","spin-pulse","spin-reverse","spin","stack-1x","stack-2x","stack","ul",Oi.GROUP,Oi.SWAP_OPACITY,Oi.PRIMARY,Oi.SECONDARY]).concat(N1.map(function(t){return"".concat(t,"x")})).concat(wB.map(function(t){return"w-".concat(t)})),ga=ei.FontAwesomeConfig||{};function IB(t){var e=Pe.querySelector("script["+t+"]");if(e)return e.getAttribute(t)}function EB(t){return t===""?!0:t==="false"?!1:t==="true"?!0:t}if(Pe&&typeof Pe.querySelector=="function"){var TB=[["data-family-prefix","familyPrefix"],["data-css-prefix","cssPrefix"],["data-family-default","familyDefault"],["data-style-default","styleDefault"],["data-replacement-class","replacementClass"],["data-auto-replace-svg","autoReplaceSvg"],["data-auto-add-css","autoAddCss"],["data-auto-a11y","autoA11y"],["data-search-pseudo-elements","searchPseudoElements"],["data-observe-mutations","observeMutations"],["data-mutate-approach","mutateApproach"],["data-keep-original-source","keepOriginalSource"],["data-measure-performance","measurePerformance"],["data-show-missing-icons","showMissingIcons"]];TB.forEach(function(t){var e=pg(t,2),n=e[0],r=e[1],i=EB(IB(n));i!=null&&(ga[r]=i)})}var P1={styleDefault:"solid",familyDefault:"classic",cssPrefix:A1,replacementClass:C1,autoReplaceSvg:!0,autoAddCss:!0,autoA11y:!0,searchPseudoElements:!1,observeMutations:!0,mutateApproach:"async",keepOriginalSource:!0,measurePerformance:!1,showMissingIcons:!0};ga.familyPrefix&&(ga.cssPrefix=ga.familyPrefix);var uo=j(j({},P1),ga);uo.autoReplaceSvg||(uo.observeMutations=!1);var G={};Object.keys(P1).forEach(function(t){Object.defineProperty(G,t,{enumerable:!0,set:function(n){uo[t]=n,ya.forEach(function(r){return r(G)})},get:function(){return uo[t]}})});Object.defineProperty(G,"familyPrefix",{enumerable:!0,set:function(e){uo.cssPrefix=e,ya.forEach(function(n){return n(G)})},get:function(){return uo.cssPrefix}});ei.FontAwesomeConfig=G;var ya=[];function SB(t){return ya.push(t),function(){ya.splice(ya.indexOf(t),1)}}var xr=Ff,Un={size:16,x:0,y:0,rotate:0,flipX:!1,flipY:!1};function kB(t){if(!(!t||!wr)){var e=Pe.createElement("style");e.setAttribute("type","text/css"),e.innerHTML=t;for(var n=Pe.head.childNodes,r=null,i=n.length-1;i>-1;i--){var s=n[i],o=(s.tagName||"").toUpperCase();["STYLE","LINK"].indexOf(o)>-1&&(r=s)}return Pe.head.insertBefore(e,r),t}}var AB="0123456789abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ";function nc(){for(var t=12,e="";t-- >0;)e+=AB[Math.random()*62|0];return e}function xo(t){for(var e=[],n=(t||[]).length>>>0;n--;)e[n]=t[n];return e}function wg(t){return t.classList?xo(t.classList):(t.getAttribute("class")||"").split(" ").filter(function(e){return e})}function D1(t){return"".concat(t).replace(/&/g,"&amp;").replace(/"/g,"&quot;").replace(/'/g,"&#39;").replace(/</g,"&lt;").replace(/>/g,"&gt;")}function CB(t){return Object.keys(t||{}).reduce(function(e,n){return e+"".concat(n,'="').concat(D1(t[n]),'" ')},"").trim()}function Nh(t){return Object.keys(t||{}).reduce(function(e,n){return e+"".concat(n,": ").concat(t[n].trim(),";")},"")}function _g(t){return t.size!==Un.size||t.x!==Un.x||t.y!==Un.y||t.rotate!==Un.rotate||t.flipX||t.flipY}function RB(t){var e=t.transform,n=t.containerWidth,r=t.iconWidth,i={transform:"translate(".concat(n/2," 256)")},s="translate(".concat(e.x*32,", ").concat(e.y*32,") "),o="scale(".concat(e.size/16*(e.flipX?-1:1),", ").concat(e.size/16*(e.flipY?-1:1),") "),a="rotate(".concat(e.rotate," 0 0)"),c={transform:"".concat(s," ").concat(o," ").concat(a)},u={transform:"translate(".concat(r/2*-1," -256)")};return{outer:i,inner:c,path:u}}function xB(t){var e=t.transform,n=t.width,r=n===void 0?Ff:n,i=t.height,s=i===void 0?Ff:i,o=t.startCentered,a=o===void 0?!1:o,c="";return a&&k1?c+="translate(".concat(e.x/xr-r/2,"em, ").concat(e.y/xr-s/2,"em) "):a?c+="translate(calc(-50% + ".concat(e.x/xr,"em), calc(-50% + ").concat(e.y/xr,"em)) "):c+="translate(".concat(e.x/xr,"em, ").concat(e.y/xr,"em) "),c+="scale(".concat(e.size/xr*(e.flipX?-1:1),", ").concat(e.size/xr*(e.flipY?-1:1),") "),c+="rotate(".concat(e.rotate,"deg) "),c}var NB=`:root, :host {
  --fa-font-solid: normal 900 1em/1 "Font Awesome 6 Solid";
  --fa-font-regular: normal 400 1em/1 "Font Awesome 6 Regular";
  --fa-font-light: normal 300 1em/1 "Font Awesome 6 Light";
  --fa-font-thin: normal 100 1em/1 "Font Awesome 6 Thin";
  --fa-font-duotone: normal 900 1em/1 "Font Awesome 6 Duotone";
  --fa-font-sharp-solid: normal 900 1em/1 "Font Awesome 6 Sharp";
  --fa-font-sharp-regular: normal 400 1em/1 "Font Awesome 6 Sharp";
  --fa-font-sharp-light: normal 300 1em/1 "Font Awesome 6 Sharp";
  --fa-font-brands: normal 400 1em/1 "Font Awesome 6 Brands";
}

svg:not(:root).svg-inline--fa, svg:not(:host).svg-inline--fa {
  overflow: visible;
  box-sizing: content-box;
}

.svg-inline--fa {
  display: var(--fa-display, inline-block);
  height: 1em;
  overflow: visible;
  vertical-align: -0.125em;
}
.svg-inline--fa.fa-2xs {
  vertical-align: 0.1em;
}
.svg-inline--fa.fa-xs {
  vertical-align: 0em;
}
.svg-inline--fa.fa-sm {
  vertical-align: -0.0714285705em;
}
.svg-inline--fa.fa-lg {
  vertical-align: -0.2em;
}
.svg-inline--fa.fa-xl {
  vertical-align: -0.25em;
}
.svg-inline--fa.fa-2xl {
  vertical-align: -0.3125em;
}
.svg-inline--fa.fa-pull-left {
  margin-right: var(--fa-pull-margin, 0.3em);
  width: auto;
}
.svg-inline--fa.fa-pull-right {
  margin-left: var(--fa-pull-margin, 0.3em);
  width: auto;
}
.svg-inline--fa.fa-li {
  width: var(--fa-li-width, 2em);
  top: 0.25em;
}
.svg-inline--fa.fa-fw {
  width: var(--fa-fw-width, 1.25em);
}

.fa-layers svg.svg-inline--fa {
  bottom: 0;
  left: 0;
  margin: auto;
  position: absolute;
  right: 0;
  top: 0;
}

.fa-layers-counter, .fa-layers-text {
  display: inline-block;
  position: absolute;
  text-align: center;
}

.fa-layers {
  display: inline-block;
  height: 1em;
  position: relative;
  text-align: center;
  vertical-align: -0.125em;
  width: 1em;
}
.fa-layers svg.svg-inline--fa {
  -webkit-transform-origin: center center;
          transform-origin: center center;
}

.fa-layers-text {
  left: 50%;
  top: 50%;
  -webkit-transform: translate(-50%, -50%);
          transform: translate(-50%, -50%);
  -webkit-transform-origin: center center;
          transform-origin: center center;
}

.fa-layers-counter {
  background-color: var(--fa-counter-background-color, #ff253a);
  border-radius: var(--fa-counter-border-radius, 1em);
  box-sizing: border-box;
  color: var(--fa-inverse, #fff);
  line-height: var(--fa-counter-line-height, 1);
  max-width: var(--fa-counter-max-width, 5em);
  min-width: var(--fa-counter-min-width, 1.5em);
  overflow: hidden;
  padding: var(--fa-counter-padding, 0.25em 0.5em);
  right: var(--fa-right, 0);
  text-overflow: ellipsis;
  top: var(--fa-top, 0);
  -webkit-transform: scale(var(--fa-counter-scale, 0.25));
          transform: scale(var(--fa-counter-scale, 0.25));
  -webkit-transform-origin: top right;
          transform-origin: top right;
}

.fa-layers-bottom-right {
  bottom: var(--fa-bottom, 0);
  right: var(--fa-right, 0);
  top: auto;
  -webkit-transform: scale(var(--fa-layers-scale, 0.25));
          transform: scale(var(--fa-layers-scale, 0.25));
  -webkit-transform-origin: bottom right;
          transform-origin: bottom right;
}

.fa-layers-bottom-left {
  bottom: var(--fa-bottom, 0);
  left: var(--fa-left, 0);
  right: auto;
  top: auto;
  -webkit-transform: scale(var(--fa-layers-scale, 0.25));
          transform: scale(var(--fa-layers-scale, 0.25));
  -webkit-transform-origin: bottom left;
          transform-origin: bottom left;
}

.fa-layers-top-right {
  top: var(--fa-top, 0);
  right: var(--fa-right, 0);
  -webkit-transform: scale(var(--fa-layers-scale, 0.25));
          transform: scale(var(--fa-layers-scale, 0.25));
  -webkit-transform-origin: top right;
          transform-origin: top right;
}

.fa-layers-top-left {
  left: var(--fa-left, 0);
  right: auto;
  top: var(--fa-top, 0);
  -webkit-transform: scale(var(--fa-layers-scale, 0.25));
          transform: scale(var(--fa-layers-scale, 0.25));
  -webkit-transform-origin: top left;
          transform-origin: top left;
}

.fa-1x {
  font-size: 1em;
}

.fa-2x {
  font-size: 2em;
}

.fa-3x {
  font-size: 3em;
}

.fa-4x {
  font-size: 4em;
}

.fa-5x {
  font-size: 5em;
}

.fa-6x {
  font-size: 6em;
}

.fa-7x {
  font-size: 7em;
}

.fa-8x {
  font-size: 8em;
}

.fa-9x {
  font-size: 9em;
}

.fa-10x {
  font-size: 10em;
}

.fa-2xs {
  font-size: 0.625em;
  line-height: 0.1em;
  vertical-align: 0.225em;
}

.fa-xs {
  font-size: 0.75em;
  line-height: 0.0833333337em;
  vertical-align: 0.125em;
}

.fa-sm {
  font-size: 0.875em;
  line-height: 0.0714285718em;
  vertical-align: 0.0535714295em;
}

.fa-lg {
  font-size: 1.25em;
  line-height: 0.05em;
  vertical-align: -0.075em;
}

.fa-xl {
  font-size: 1.5em;
  line-height: 0.0416666682em;
  vertical-align: -0.125em;
}

.fa-2xl {
  font-size: 2em;
  line-height: 0.03125em;
  vertical-align: -0.1875em;
}

.fa-fw {
  text-align: center;
  width: 1.25em;
}

.fa-ul {
  list-style-type: none;
  margin-left: var(--fa-li-margin, 2.5em);
  padding-left: 0;
}
.fa-ul > li {
  position: relative;
}

.fa-li {
  left: calc(var(--fa-li-width, 2em) * -1);
  position: absolute;
  text-align: center;
  width: var(--fa-li-width, 2em);
  line-height: inherit;
}

.fa-border {
  border-color: var(--fa-border-color, #eee);
  border-radius: var(--fa-border-radius, 0.1em);
  border-style: var(--fa-border-style, solid);
  border-width: var(--fa-border-width, 0.08em);
  padding: var(--fa-border-padding, 0.2em 0.25em 0.15em);
}

.fa-pull-left {
  float: left;
  margin-right: var(--fa-pull-margin, 0.3em);
}

.fa-pull-right {
  float: right;
  margin-left: var(--fa-pull-margin, 0.3em);
}

.fa-beat {
  -webkit-animation-name: fa-beat;
          animation-name: fa-beat;
  -webkit-animation-delay: var(--fa-animation-delay, 0s);
          animation-delay: var(--fa-animation-delay, 0s);
  -webkit-animation-direction: var(--fa-animation-direction, normal);
          animation-direction: var(--fa-animation-direction, normal);
  -webkit-animation-duration: var(--fa-animation-duration, 1s);
          animation-duration: var(--fa-animation-duration, 1s);
  -webkit-animation-iteration-count: var(--fa-animation-iteration-count, infinite);
          animation-iteration-count: var(--fa-animation-iteration-count, infinite);
  -webkit-animation-timing-function: var(--fa-animation-timing, ease-in-out);
          animation-timing-function: var(--fa-animation-timing, ease-in-out);
}

.fa-bounce {
  -webkit-animation-name: fa-bounce;
          animation-name: fa-bounce;
  -webkit-animation-delay: var(--fa-animation-delay, 0s);
          animation-delay: var(--fa-animation-delay, 0s);
  -webkit-animation-direction: var(--fa-animation-direction, normal);
          animation-direction: var(--fa-animation-direction, normal);
  -webkit-animation-duration: var(--fa-animation-duration, 1s);
          animation-duration: var(--fa-animation-duration, 1s);
  -webkit-animation-iteration-count: var(--fa-animation-iteration-count, infinite);
          animation-iteration-count: var(--fa-animation-iteration-count, infinite);
  -webkit-animation-timing-function: var(--fa-animation-timing, cubic-bezier(0.28, 0.84, 0.42, 1));
          animation-timing-function: var(--fa-animation-timing, cubic-bezier(0.28, 0.84, 0.42, 1));
}

.fa-fade {
  -webkit-animation-name: fa-fade;
          animation-name: fa-fade;
  -webkit-animation-delay: var(--fa-animation-delay, 0s);
          animation-delay: var(--fa-animation-delay, 0s);
  -webkit-animation-direction: var(--fa-animation-direction, normal);
          animation-direction: var(--fa-animation-direction, normal);
  -webkit-animation-duration: var(--fa-animation-duration, 1s);
          animation-duration: var(--fa-animation-duration, 1s);
  -webkit-animation-iteration-count: var(--fa-animation-iteration-count, infinite);
          animation-iteration-count: var(--fa-animation-iteration-count, infinite);
  -webkit-animation-timing-function: var(--fa-animation-timing, cubic-bezier(0.4, 0, 0.6, 1));
          animation-timing-function: var(--fa-animation-timing, cubic-bezier(0.4, 0, 0.6, 1));
}

.fa-beat-fade {
  -webkit-animation-name: fa-beat-fade;
          animation-name: fa-beat-fade;
  -webkit-animation-delay: var(--fa-animation-delay, 0s);
          animation-delay: var(--fa-animation-delay, 0s);
  -webkit-animation-direction: var(--fa-animation-direction, normal);
          animation-direction: var(--fa-animation-direction, normal);
  -webkit-animation-duration: var(--fa-animation-duration, 1s);
          animation-duration: var(--fa-animation-duration, 1s);
  -webkit-animation-iteration-count: var(--fa-animation-iteration-count, infinite);
          animation-iteration-count: var(--fa-animation-iteration-count, infinite);
  -webkit-animation-timing-function: var(--fa-animation-timing, cubic-bezier(0.4, 0, 0.6, 1));
          animation-timing-function: var(--fa-animation-timing, cubic-bezier(0.4, 0, 0.6, 1));
}

.fa-flip {
  -webkit-animation-name: fa-flip;
          animation-name: fa-flip;
  -webkit-animation-delay: var(--fa-animation-delay, 0s);
          animation-delay: var(--fa-animation-delay, 0s);
  -webkit-animation-direction: var(--fa-animation-direction, normal);
          animation-direction: var(--fa-animation-direction, normal);
  -webkit-animation-duration: var(--fa-animation-duration, 1s);
          animation-duration: var(--fa-animation-duration, 1s);
  -webkit-animation-iteration-count: var(--fa-animation-iteration-count, infinite);
          animation-iteration-count: var(--fa-animation-iteration-count, infinite);
  -webkit-animation-timing-function: var(--fa-animation-timing, ease-in-out);
          animation-timing-function: var(--fa-animation-timing, ease-in-out);
}

.fa-shake {
  -webkit-animation-name: fa-shake;
          animation-name: fa-shake;
  -webkit-animation-delay: var(--fa-animation-delay, 0s);
          animation-delay: var(--fa-animation-delay, 0s);
  -webkit-animation-direction: var(--fa-animation-direction, normal);
          animation-direction: var(--fa-animation-direction, normal);
  -webkit-animation-duration: var(--fa-animation-duration, 1s);
          animation-duration: var(--fa-animation-duration, 1s);
  -webkit-animation-iteration-count: var(--fa-animation-iteration-count, infinite);
          animation-iteration-count: var(--fa-animation-iteration-count, infinite);
  -webkit-animation-timing-function: var(--fa-animation-timing, linear);
          animation-timing-function: var(--fa-animation-timing, linear);
}

.fa-spin {
  -webkit-animation-name: fa-spin;
          animation-name: fa-spin;
  -webkit-animation-delay: var(--fa-animation-delay, 0s);
          animation-delay: var(--fa-animation-delay, 0s);
  -webkit-animation-direction: var(--fa-animation-direction, normal);
          animation-direction: var(--fa-animation-direction, normal);
  -webkit-animation-duration: var(--fa-animation-duration, 2s);
          animation-duration: var(--fa-animation-duration, 2s);
  -webkit-animation-iteration-count: var(--fa-animation-iteration-count, infinite);
          animation-iteration-count: var(--fa-animation-iteration-count, infinite);
  -webkit-animation-timing-function: var(--fa-animation-timing, linear);
          animation-timing-function: var(--fa-animation-timing, linear);
}

.fa-spin-reverse {
  --fa-animation-direction: reverse;
}

.fa-pulse,
.fa-spin-pulse {
  -webkit-animation-name: fa-spin;
          animation-name: fa-spin;
  -webkit-animation-direction: var(--fa-animation-direction, normal);
          animation-direction: var(--fa-animation-direction, normal);
  -webkit-animation-duration: var(--fa-animation-duration, 1s);
          animation-duration: var(--fa-animation-duration, 1s);
  -webkit-animation-iteration-count: var(--fa-animation-iteration-count, infinite);
          animation-iteration-count: var(--fa-animation-iteration-count, infinite);
  -webkit-animation-timing-function: var(--fa-animation-timing, steps(8));
          animation-timing-function: var(--fa-animation-timing, steps(8));
}

@media (prefers-reduced-motion: reduce) {
  .fa-beat,
.fa-bounce,
.fa-fade,
.fa-beat-fade,
.fa-flip,
.fa-pulse,
.fa-shake,
.fa-spin,
.fa-spin-pulse {
    -webkit-animation-delay: -1ms;
            animation-delay: -1ms;
    -webkit-animation-duration: 1ms;
            animation-duration: 1ms;
    -webkit-animation-iteration-count: 1;
            animation-iteration-count: 1;
    -webkit-transition-delay: 0s;
            transition-delay: 0s;
    -webkit-transition-duration: 0s;
            transition-duration: 0s;
  }
}
@-webkit-keyframes fa-beat {
  0%, 90% {
    -webkit-transform: scale(1);
            transform: scale(1);
  }
  45% {
    -webkit-transform: scale(var(--fa-beat-scale, 1.25));
            transform: scale(var(--fa-beat-scale, 1.25));
  }
}
@keyframes fa-beat {
  0%, 90% {
    -webkit-transform: scale(1);
            transform: scale(1);
  }
  45% {
    -webkit-transform: scale(var(--fa-beat-scale, 1.25));
            transform: scale(var(--fa-beat-scale, 1.25));
  }
}
@-webkit-keyframes fa-bounce {
  0% {
    -webkit-transform: scale(1, 1) translateY(0);
            transform: scale(1, 1) translateY(0);
  }
  10% {
    -webkit-transform: scale(var(--fa-bounce-start-scale-x, 1.1), var(--fa-bounce-start-scale-y, 0.9)) translateY(0);
            transform: scale(var(--fa-bounce-start-scale-x, 1.1), var(--fa-bounce-start-scale-y, 0.9)) translateY(0);
  }
  30% {
    -webkit-transform: scale(var(--fa-bounce-jump-scale-x, 0.9), var(--fa-bounce-jump-scale-y, 1.1)) translateY(var(--fa-bounce-height, -0.5em));
            transform: scale(var(--fa-bounce-jump-scale-x, 0.9), var(--fa-bounce-jump-scale-y, 1.1)) translateY(var(--fa-bounce-height, -0.5em));
  }
  50% {
    -webkit-transform: scale(var(--fa-bounce-land-scale-x, 1.05), var(--fa-bounce-land-scale-y, 0.95)) translateY(0);
            transform: scale(var(--fa-bounce-land-scale-x, 1.05), var(--fa-bounce-land-scale-y, 0.95)) translateY(0);
  }
  57% {
    -webkit-transform: scale(1, 1) translateY(var(--fa-bounce-rebound, -0.125em));
            transform: scale(1, 1) translateY(var(--fa-bounce-rebound, -0.125em));
  }
  64% {
    -webkit-transform: scale(1, 1) translateY(0);
            transform: scale(1, 1) translateY(0);
  }
  100% {
    -webkit-transform: scale(1, 1) translateY(0);
            transform: scale(1, 1) translateY(0);
  }
}
@keyframes fa-bounce {
  0% {
    -webkit-transform: scale(1, 1) translateY(0);
            transform: scale(1, 1) translateY(0);
  }
  10% {
    -webkit-transform: scale(var(--fa-bounce-start-scale-x, 1.1), var(--fa-bounce-start-scale-y, 0.9)) translateY(0);
            transform: scale(var(--fa-bounce-start-scale-x, 1.1), var(--fa-bounce-start-scale-y, 0.9)) translateY(0);
  }
  30% {
    -webkit-transform: scale(var(--fa-bounce-jump-scale-x, 0.9), var(--fa-bounce-jump-scale-y, 1.1)) translateY(var(--fa-bounce-height, -0.5em));
            transform: scale(var(--fa-bounce-jump-scale-x, 0.9), var(--fa-bounce-jump-scale-y, 1.1)) translateY(var(--fa-bounce-height, -0.5em));
  }
  50% {
    -webkit-transform: scale(var(--fa-bounce-land-scale-x, 1.05), var(--fa-bounce-land-scale-y, 0.95)) translateY(0);
            transform: scale(var(--fa-bounce-land-scale-x, 1.05), var(--fa-bounce-land-scale-y, 0.95)) translateY(0);
  }
  57% {
    -webkit-transform: scale(1, 1) translateY(var(--fa-bounce-rebound, -0.125em));
            transform: scale(1, 1) translateY(var(--fa-bounce-rebound, -0.125em));
  }
  64% {
    -webkit-transform: scale(1, 1) translateY(0);
            transform: scale(1, 1) translateY(0);
  }
  100% {
    -webkit-transform: scale(1, 1) translateY(0);
            transform: scale(1, 1) translateY(0);
  }
}
@-webkit-keyframes fa-fade {
  50% {
    opacity: var(--fa-fade-opacity, 0.4);
  }
}
@keyframes fa-fade {
  50% {
    opacity: var(--fa-fade-opacity, 0.4);
  }
}
@-webkit-keyframes fa-beat-fade {
  0%, 100% {
    opacity: var(--fa-beat-fade-opacity, 0.4);
    -webkit-transform: scale(1);
            transform: scale(1);
  }
  50% {
    opacity: 1;
    -webkit-transform: scale(var(--fa-beat-fade-scale, 1.125));
            transform: scale(var(--fa-beat-fade-scale, 1.125));
  }
}
@keyframes fa-beat-fade {
  0%, 100% {
    opacity: var(--fa-beat-fade-opacity, 0.4);
    -webkit-transform: scale(1);
            transform: scale(1);
  }
  50% {
    opacity: 1;
    -webkit-transform: scale(var(--fa-beat-fade-scale, 1.125));
            transform: scale(var(--fa-beat-fade-scale, 1.125));
  }
}
@-webkit-keyframes fa-flip {
  50% {
    -webkit-transform: rotate3d(var(--fa-flip-x, 0), var(--fa-flip-y, 1), var(--fa-flip-z, 0), var(--fa-flip-angle, -180deg));
            transform: rotate3d(var(--fa-flip-x, 0), var(--fa-flip-y, 1), var(--fa-flip-z, 0), var(--fa-flip-angle, -180deg));
  }
}
@keyframes fa-flip {
  50% {
    -webkit-transform: rotate3d(var(--fa-flip-x, 0), var(--fa-flip-y, 1), var(--fa-flip-z, 0), var(--fa-flip-angle, -180deg));
            transform: rotate3d(var(--fa-flip-x, 0), var(--fa-flip-y, 1), var(--fa-flip-z, 0), var(--fa-flip-angle, -180deg));
  }
}
@-webkit-keyframes fa-shake {
  0% {
    -webkit-transform: rotate(-15deg);
            transform: rotate(-15deg);
  }
  4% {
    -webkit-transform: rotate(15deg);
            transform: rotate(15deg);
  }
  8%, 24% {
    -webkit-transform: rotate(-18deg);
            transform: rotate(-18deg);
  }
  12%, 28% {
    -webkit-transform: rotate(18deg);
            transform: rotate(18deg);
  }
  16% {
    -webkit-transform: rotate(-22deg);
            transform: rotate(-22deg);
  }
  20% {
    -webkit-transform: rotate(22deg);
            transform: rotate(22deg);
  }
  32% {
    -webkit-transform: rotate(-12deg);
            transform: rotate(-12deg);
  }
  36% {
    -webkit-transform: rotate(12deg);
            transform: rotate(12deg);
  }
  40%, 100% {
    -webkit-transform: rotate(0deg);
            transform: rotate(0deg);
  }
}
@keyframes fa-shake {
  0% {
    -webkit-transform: rotate(-15deg);
            transform: rotate(-15deg);
  }
  4% {
    -webkit-transform: rotate(15deg);
            transform: rotate(15deg);
  }
  8%, 24% {
    -webkit-transform: rotate(-18deg);
            transform: rotate(-18deg);
  }
  12%, 28% {
    -webkit-transform: rotate(18deg);
            transform: rotate(18deg);
  }
  16% {
    -webkit-transform: rotate(-22deg);
            transform: rotate(-22deg);
  }
  20% {
    -webkit-transform: rotate(22deg);
            transform: rotate(22deg);
  }
  32% {
    -webkit-transform: rotate(-12deg);
            transform: rotate(-12deg);
  }
  36% {
    -webkit-transform: rotate(12deg);
            transform: rotate(12deg);
  }
  40%, 100% {
    -webkit-transform: rotate(0deg);
            transform: rotate(0deg);
  }
}
@-webkit-keyframes fa-spin {
  0% {
    -webkit-transform: rotate(0deg);
            transform: rotate(0deg);
  }
  100% {
    -webkit-transform: rotate(360deg);
            transform: rotate(360deg);
  }
}
@keyframes fa-spin {
  0% {
    -webkit-transform: rotate(0deg);
            transform: rotate(0deg);
  }
  100% {
    -webkit-transform: rotate(360deg);
            transform: rotate(360deg);
  }
}
.fa-rotate-90 {
  -webkit-transform: rotate(90deg);
          transform: rotate(90deg);
}

.fa-rotate-180 {
  -webkit-transform: rotate(180deg);
          transform: rotate(180deg);
}

.fa-rotate-270 {
  -webkit-transform: rotate(270deg);
          transform: rotate(270deg);
}

.fa-flip-horizontal {
  -webkit-transform: scale(-1, 1);
          transform: scale(-1, 1);
}

.fa-flip-vertical {
  -webkit-transform: scale(1, -1);
          transform: scale(1, -1);
}

.fa-flip-both,
.fa-flip-horizontal.fa-flip-vertical {
  -webkit-transform: scale(-1, -1);
          transform: scale(-1, -1);
}

.fa-rotate-by {
  -webkit-transform: rotate(var(--fa-rotate-angle, none));
          transform: rotate(var(--fa-rotate-angle, none));
}

.fa-stack {
  display: inline-block;
  vertical-align: middle;
  height: 2em;
  position: relative;
  width: 2.5em;
}

.fa-stack-1x,
.fa-stack-2x {
  bottom: 0;
  left: 0;
  margin: auto;
  position: absolute;
  right: 0;
  top: 0;
  z-index: var(--fa-stack-z-index, auto);
}

.svg-inline--fa.fa-stack-1x {
  height: 1em;
  width: 1.25em;
}
.svg-inline--fa.fa-stack-2x {
  height: 2em;
  width: 2.5em;
}

.fa-inverse {
  color: var(--fa-inverse, #fff);
}

.sr-only,
.fa-sr-only {
  position: absolute;
  width: 1px;
  height: 1px;
  padding: 0;
  margin: -1px;
  overflow: hidden;
  clip: rect(0, 0, 0, 0);
  white-space: nowrap;
  border-width: 0;
}

.sr-only-focusable:not(:focus),
.fa-sr-only-focusable:not(:focus) {
  position: absolute;
  width: 1px;
  height: 1px;
  padding: 0;
  margin: -1px;
  overflow: hidden;
  clip: rect(0, 0, 0, 0);
  white-space: nowrap;
  border-width: 0;
}

.svg-inline--fa .fa-primary {
  fill: var(--fa-primary-color, currentColor);
  opacity: var(--fa-primary-opacity, 1);
}

.svg-inline--fa .fa-secondary {
  fill: var(--fa-secondary-color, currentColor);
  opacity: var(--fa-secondary-opacity, 0.4);
}

.svg-inline--fa.fa-swap-opacity .fa-primary {
  opacity: var(--fa-secondary-opacity, 0.4);
}

.svg-inline--fa.fa-swap-opacity .fa-secondary {
  opacity: var(--fa-primary-opacity, 1);
}

.svg-inline--fa mask .fa-primary,
.svg-inline--fa mask .fa-secondary {
  fill: black;
}

.fad.fa-inverse,
.fa-duotone.fa-inverse {
  color: var(--fa-inverse, #fff);
}`;function O1(){var t=A1,e=C1,n=G.cssPrefix,r=G.replacementClass,i=NB;if(n!==t||r!==e){var s=new RegExp("\\.".concat(t,"\\-"),"g"),o=new RegExp("\\--".concat(t,"\\-"),"g"),a=new RegExp("\\.".concat(e),"g");i=i.replace(s,".".concat(n,"-")).replace(o,"--".concat(n,"-")).replace(a,".".concat(r))}return i}var qw=!1;function _d(){G.autoAddCss&&!qw&&(kB(O1()),qw=!0)}var PB={mixout:function(){return{dom:{css:O1,insertCss:_d}}},hooks:function(){return{beforeDOMElementCreation:function(){_d()},beforeI2svg:function(){_d()}}}},ur=ei||{};ur[cr]||(ur[cr]={});ur[cr].styles||(ur[cr].styles={});ur[cr].hooks||(ur[cr].hooks={});ur[cr].shims||(ur[cr].shims=[]);var vn=ur[cr],L1=[],DB=function t(){Pe.removeEventListener("DOMContentLoaded",t),pl=1,L1.map(function(e){return e()})},pl=!1;wr&&(pl=(Pe.documentElement.doScroll?/^loaded|^c/:/^loaded|^i|^c/).test(Pe.readyState),pl||Pe.addEventListener("DOMContentLoaded",DB));function OB(t){!wr||(pl?setTimeout(t,0):L1.push(t))}function Lc(t){var e=t.tag,n=t.attributes,r=n===void 0?{}:n,i=t.children,s=i===void 0?[]:i;return typeof t=="string"?D1(t):"<".concat(e," ").concat(CB(r),">").concat(s.map(Lc).join(""),"</").concat(e,">")}function jw(t,e,n){if(t&&t[e]&&t[e][n])return{prefix:e,iconName:n,icon:t[e][n]}}var LB=function(e,n){return function(r,i,s,o){return e.call(n,r,i,s,o)}},bd=function(e,n,r,i){var s=Object.keys(e),o=s.length,a=i!==void 0?LB(n,i):n,c,u,l;for(r===void 0?(c=1,l=e[s[0]]):(c=0,l=r);c<o;c++)u=s[c],l=a(l,e[u],u,e);return l};function MB(t){for(var e=[],n=0,r=t.length;n<r;){var i=t.charCodeAt(n++);if(i>=55296&&i<=56319&&n<r){var s=t.charCodeAt(n++);(s&64512)==56320?e.push(((i&1023)<<10)+(s&1023)+65536):(e.push(i),n--)}else e.push(i)}return e}function Vf(t){var e=MB(t);return e.length===1?e[0].toString(16):null}function FB(t,e){var n=t.length,r=t.charCodeAt(e),i;return r>=55296&&r<=56319&&n>e+1&&(i=t.charCodeAt(e+1),i>=56320&&i<=57343)?(r-55296)*1024+i-56320+65536:r}function zw(t){return Object.keys(t).reduce(function(e,n){var r=t[n],i=!!r.icon;return i?e[r.iconName]=r.icon:e[n]=r,e},{})}function Bf(t,e){var n=arguments.length>2&&arguments[2]!==void 0?arguments[2]:{},r=n.skipHooks,i=r===void 0?!1:r,s=zw(e);typeof vn.hooks.addPack=="function"&&!i?vn.hooks.addPack(t,zw(e)):vn.styles[t]=j(j({},vn.styles[t]||{}),s),t==="fas"&&Bf("fa",e)}var lu,hu,du,Rs=vn.styles,UB=vn.shims,VB=(lu={},at(lu,xe,Object.values(ec[xe])),at(lu,He,Object.values(ec[He])),lu),bg=null,M1={},F1={},U1={},V1={},B1={},BB=(hu={},at(hu,xe,Object.keys(Ja[xe])),at(hu,He,Object.keys(Ja[He])),hu);function $B(t){return~bB.indexOf(t)}function qB(t,e){var n=e.split("-"),r=n[0],i=n.slice(1).join("-");return r===t&&i!==""&&!$B(i)?i:null}var $1=function(){var e=function(s){return bd(Rs,function(o,a,c){return o[c]=bd(a,s,{}),o},{})};M1=e(function(i,s,o){if(s[3]&&(i[s[3]]=o),s[2]){var a=s[2].filter(function(c){return typeof c=="number"});a.forEach(function(c){i[c.toString(16)]=o})}return i}),F1=e(function(i,s,o){if(i[o]=o,s[2]){var a=s[2].filter(function(c){return typeof c=="string"});a.forEach(function(c){i[c]=o})}return i}),B1=e(function(i,s,o){var a=s[2];return i[o]=o,a.forEach(function(c){i[c]=o}),i});var n="far"in Rs||G.autoFetchSvg,r=bd(UB,function(i,s){var o=s[0],a=s[1],c=s[2];return a==="far"&&!n&&(a="fas"),typeof o=="string"&&(i.names[o]={prefix:a,iconName:c}),typeof o=="number"&&(i.unicodes[o.toString(16)]={prefix:a,iconName:c}),i},{names:{},unicodes:{}});U1=r.names,V1=r.unicodes,bg=Ph(G.styleDefault,{family:G.familyDefault})};SB(function(t){bg=Ph(t.styleDefault,{family:G.familyDefault})});$1();function Ig(t,e){return(M1[t]||{})[e]}function jB(t,e){return(F1[t]||{})[e]}function Li(t,e){return(B1[t]||{})[e]}function q1(t){return U1[t]||{prefix:null,iconName:null}}function zB(t){var e=V1[t],n=Ig("fas",t);return e||(n?{prefix:"fas",iconName:n}:null)||{prefix:null,iconName:null}}function ti(){return bg}var Eg=function(){return{prefix:null,iconName:null,rest:[]}};function Ph(t){var e=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},n=e.family,r=n===void 0?xe:n,i=Ja[r][t],s=Za[r][t]||Za[r][i],o=t in vn.styles?t:null;return s||o||null}var Hw=(du={},at(du,xe,Object.keys(ec[xe])),at(du,He,Object.keys(ec[He])),du);function Dh(t){var e,n=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},r=n.skipLookups,i=r===void 0?!1:r,s=(e={},at(e,xe,"".concat(G.cssPrefix,"-").concat(xe)),at(e,He,"".concat(G.cssPrefix,"-").concat(He)),e),o=null,a=xe;(t.includes(s[xe])||t.some(function(u){return Hw[xe].includes(u)}))&&(a=xe),(t.includes(s[He])||t.some(function(u){return Hw[He].includes(u)}))&&(a=He);var c=t.reduce(function(u,l){var h=qB(G.cssPrefix,l);if(Rs[l]?(l=VB[a].includes(l)?mB[a][l]:l,o=l,u.prefix=l):BB[a].indexOf(l)>-1?(o=l,u.prefix=Ph(l,{family:a})):h?u.iconName=h:l!==G.replacementClass&&l!==s[xe]&&l!==s[He]&&u.rest.push(l),!i&&u.prefix&&u.iconName){var d=o==="fa"?q1(u.iconName):{},f=Li(u.prefix,u.iconName);d.prefix&&(o=null),u.iconName=d.iconName||f||u.iconName,u.prefix=d.prefix||u.prefix,u.prefix==="far"&&!Rs.far&&Rs.fas&&!G.autoFetchSvg&&(u.prefix="fas")}return u},Eg());return(t.includes("fa-brands")||t.includes("fab"))&&(c.prefix="fab"),(t.includes("fa-duotone")||t.includes("fad"))&&(c.prefix="fad"),!c.prefix&&a===He&&(Rs.fass||G.autoFetchSvg)&&(c.prefix="fass",c.iconName=Li(c.prefix,c.iconName)||c.iconName),(c.prefix==="fa"||o==="fa")&&(c.prefix=ti()||"fas"),c}var HB=function(){function t(){rB(this,t),this.definitions={}}return iB(t,[{key:"add",value:function(){for(var n=this,r=arguments.length,i=new Array(r),s=0;s<r;s++)i[s]=arguments[s];var o=i.reduce(this._pullDefinitions,{});Object.keys(o).forEach(function(a){n.definitions[a]=j(j({},n.definitions[a]||{}),o[a]),Bf(a,o[a]);var c=ec[xe][a];c&&Bf(c,o[a]),$1()})}},{key:"reset",value:function(){this.definitions={}}},{key:"_pullDefinitions",value:function(n,r){var i=r.prefix&&r.iconName&&r.icon?{0:r}:r;return Object.keys(i).map(function(s){var o=i[s],a=o.prefix,c=o.iconName,u=o.icon,l=u[2];n[a]||(n[a]={}),l.length>0&&l.forEach(function(h){typeof h=="string"&&(n[a][h]=u)}),n[a][c]=u}),n}}]),t}(),Kw=[],xs={},js={},KB=Object.keys(js);function WB(t,e){var n=e.mixoutsTo;return Kw=t,xs={},Object.keys(js).forEach(function(r){KB.indexOf(r)===-1&&delete js[r]}),Kw.forEach(function(r){var i=r.mixout?r.mixout():{};if(Object.keys(i).forEach(function(o){typeof i[o]=="function"&&(n[o]=i[o]),fl(i[o])==="object"&&Object.keys(i[o]).forEach(function(a){n[o]||(n[o]={}),n[o][a]=i[o][a]})}),r.hooks){var s=r.hooks();Object.keys(s).forEach(function(o){xs[o]||(xs[o]=[]),xs[o].push(s[o])})}r.provides&&r.provides(js)}),n}function $f(t,e){for(var n=arguments.length,r=new Array(n>2?n-2:0),i=2;i<n;i++)r[i-2]=arguments[i];var s=xs[t]||[];return s.forEach(function(o){e=o.apply(null,[e].concat(r))}),e}function ss(t){for(var e=arguments.length,n=new Array(e>1?e-1:0),r=1;r<e;r++)n[r-1]=arguments[r];var i=xs[t]||[];i.forEach(function(s){s.apply(null,n)})}function lr(){var t=arguments[0],e=Array.prototype.slice.call(arguments,1);return js[t]?js[t].apply(null,e):void 0}function qf(t){t.prefix==="fa"&&(t.prefix="fas");var e=t.iconName,n=t.prefix||ti();if(!!e)return e=Li(n,e)||e,jw(j1.definitions,n,e)||jw(vn.styles,n,e)}var j1=new HB,GB=function(){G.autoReplaceSvg=!1,G.observeMutations=!1,ss("noAuto")},YB={i2svg:function(){var e=arguments.length>0&&arguments[0]!==void 0?arguments[0]:{};return wr?(ss("beforeI2svg",e),lr("pseudoElements2svg",e),lr("i2svg",e)):Promise.reject("Operation requires a DOM of some kind.")},watch:function(){var e=arguments.length>0&&arguments[0]!==void 0?arguments[0]:{},n=e.autoReplaceSvgRoot;G.autoReplaceSvg===!1&&(G.autoReplaceSvg=!0),G.observeMutations=!0,OB(function(){XB({autoReplaceSvgRoot:n}),ss("watch",e)})}},QB={icon:function(e){if(e===null)return null;if(fl(e)==="object"&&e.prefix&&e.iconName)return{prefix:e.prefix,iconName:Li(e.prefix,e.iconName)||e.iconName};if(Array.isArray(e)&&e.length===2){var n=e[1].indexOf("fa-")===0?e[1].slice(3):e[1],r=Ph(e[0]);return{prefix:r,iconName:Li(r,n)||n}}if(typeof e=="string"&&(e.indexOf("".concat(G.cssPrefix,"-"))>-1||e.match(gB))){var i=Dh(e.split(" "),{skipLookups:!0});return{prefix:i.prefix||ti(),iconName:Li(i.prefix,i.iconName)||i.iconName}}if(typeof e=="string"){var s=ti();return{prefix:s,iconName:Li(s,e)||e}}}},tn={noAuto:GB,config:G,dom:YB,parse:QB,library:j1,findIconDefinition:qf,toHtml:Lc},XB=function(){var e=arguments.length>0&&arguments[0]!==void 0?arguments[0]:{},n=e.autoReplaceSvgRoot,r=n===void 0?Pe:n;(Object.keys(vn.styles).length>0||G.autoFetchSvg)&&wr&&G.autoReplaceSvg&&tn.dom.i2svg({node:r})};function Oh(t,e){return Object.defineProperty(t,"abstract",{get:e}),Object.defineProperty(t,"html",{get:function(){return t.abstract.map(function(r){return Lc(r)})}}),Object.defineProperty(t,"node",{get:function(){if(!!wr){var r=Pe.createElement("div");return r.innerHTML=t.html,r.children}}}),t}function JB(t){var e=t.children,n=t.main,r=t.mask,i=t.attributes,s=t.styles,o=t.transform;if(_g(o)&&n.found&&!r.found){var a=n.width,c=n.height,u={x:a/c/2,y:.5};i.style=Nh(j(j({},s),{},{"transform-origin":"".concat(u.x+o.x/16,"em ").concat(u.y+o.y/16,"em")}))}return[{tag:"svg",attributes:i,children:e}]}function ZB(t){var e=t.prefix,n=t.iconName,r=t.children,i=t.attributes,s=t.symbol,o=s===!0?"".concat(e,"-").concat(G.cssPrefix,"-").concat(n):s;return[{tag:"svg",attributes:{style:"display: none;"},children:[{tag:"symbol",attributes:j(j({},i),{},{id:o}),children:r}]}]}function Tg(t){var e=t.icons,n=e.main,r=e.mask,i=t.prefix,s=t.iconName,o=t.transform,a=t.symbol,c=t.title,u=t.maskId,l=t.titleId,h=t.extra,d=t.watchable,f=d===void 0?!1:d,g=r.found?r:n,y=g.width,E=g.height,v=i==="fak",I=[G.replacementClass,s?"".concat(G.cssPrefix,"-").concat(s):""].filter(function(oe){return h.classes.indexOf(oe)===-1}).filter(function(oe){return oe!==""||!!oe}).concat(h.classes).join(" "),b={children:[],attributes:j(j({},h.attributes),{},{"data-prefix":i,"data-icon":s,class:I,role:h.attributes.role||"img",xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 ".concat(y," ").concat(E)})},x=v&&!~h.classes.indexOf("fa-fw")?{width:"".concat(y/E*16*.0625,"em")}:{};f&&(b.attributes[is]=""),c&&(b.children.push({tag:"title",attributes:{id:b.attributes["aria-labelledby"]||"title-".concat(l||nc())},children:[c]}),delete b.attributes.title);var M=j(j({},b),{},{prefix:i,iconName:s,main:n,mask:r,maskId:u,transform:o,symbol:a,styles:j(j({},x),h.styles)}),z=r.found&&n.found?lr("generateAbstractMask",M)||{children:[],attributes:{}}:lr("generateAbstractIcon",M)||{children:[],attributes:{}},ne=z.children,H=z.attributes;return M.children=ne,M.attributes=H,a?ZB(M):JB(M)}function Ww(t){var e=t.content,n=t.width,r=t.height,i=t.transform,s=t.title,o=t.extra,a=t.watchable,c=a===void 0?!1:a,u=j(j(j({},o.attributes),s?{title:s}:{}),{},{class:o.classes.join(" ")});c&&(u[is]="");var l=j({},o.styles);_g(i)&&(l.transform=xB({transform:i,startCentered:!0,width:n,height:r}),l["-webkit-transform"]=l.transform);var h=Nh(l);h.length>0&&(u.style=h);var d=[];return d.push({tag:"span",attributes:u,children:[e]}),s&&d.push({tag:"span",attributes:{class:"sr-only"},children:[s]}),d}function e$(t){var e=t.content,n=t.title,r=t.extra,i=j(j(j({},r.attributes),n?{title:n}:{}),{},{class:r.classes.join(" ")}),s=Nh(r.styles);s.length>0&&(i.style=s);var o=[];return o.push({tag:"span",attributes:i,children:[e]}),n&&o.push({tag:"span",attributes:{class:"sr-only"},children:[n]}),o}var Id=vn.styles;function jf(t){var e=t[0],n=t[1],r=t.slice(4),i=pg(r,1),s=i[0],o=null;return Array.isArray(s)?o={tag:"g",attributes:{class:"".concat(G.cssPrefix,"-").concat(Oi.GROUP)},children:[{tag:"path",attributes:{class:"".concat(G.cssPrefix,"-").concat(Oi.SECONDARY),fill:"currentColor",d:s[0]}},{tag:"path",attributes:{class:"".concat(G.cssPrefix,"-").concat(Oi.PRIMARY),fill:"currentColor",d:s[1]}}]}:o={tag:"path",attributes:{fill:"currentColor",d:s}},{found:!0,width:e,height:n,icon:o}}var t$={found:!1,width:512,height:512};function n$(t,e){!R1&&!G.showMissingIcons&&t&&console.error('Icon with name "'.concat(t,'" and prefix "').concat(e,'" is missing.'))}function zf(t,e){var n=e;return e==="fa"&&G.styleDefault!==null&&(e=ti()),new Promise(function(r,i){if(lr("missingIconAbstract"),n==="fa"){var s=q1(t)||{};t=s.iconName||t,e=s.prefix||e}if(t&&e&&Id[e]&&Id[e][t]){var o=Id[e][t];return r(jf(o))}n$(t,e),r(j(j({},t$),{},{icon:G.showMissingIcons&&t?lr("missingIconAbstract")||{}:{}}))})}var Gw=function(){},Hf=G.measurePerformance&&iu&&iu.mark&&iu.measure?iu:{mark:Gw,measure:Gw},Zo='FA "6.4.0"',r$=function(e){return Hf.mark("".concat(Zo," ").concat(e," begins")),function(){return z1(e)}},z1=function(e){Hf.mark("".concat(Zo," ").concat(e," ends")),Hf.measure("".concat(Zo," ").concat(e),"".concat(Zo," ").concat(e," begins"),"".concat(Zo," ").concat(e," ends"))},Sg={begin:r$,end:z1},xu=function(){};function Yw(t){var e=t.getAttribute?t.getAttribute(is):null;return typeof e=="string"}function i$(t){var e=t.getAttribute?t.getAttribute(gg):null,n=t.getAttribute?t.getAttribute(yg):null;return e&&n}function s$(t){return t&&t.classList&&t.classList.contains&&t.classList.contains(G.replacementClass)}function o$(){if(G.autoReplaceSvg===!0)return Nu.replace;var t=Nu[G.autoReplaceSvg];return t||Nu.replace}function a$(t){return Pe.createElementNS("http://www.w3.org/2000/svg",t)}function c$(t){return Pe.createElement(t)}function H1(t){var e=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},n=e.ceFn,r=n===void 0?t.tag==="svg"?a$:c$:n;if(typeof t=="string")return Pe.createTextNode(t);var i=r(t.tag);Object.keys(t.attributes||[]).forEach(function(o){i.setAttribute(o,t.attributes[o])});var s=t.children||[];return s.forEach(function(o){i.appendChild(H1(o,{ceFn:r}))}),i}function u$(t){var e=" ".concat(t.outerHTML," ");return e="".concat(e,"Font Awesome fontawesome.com "),e}var Nu={replace:function(e){var n=e[0];if(n.parentNode)if(e[1].forEach(function(i){n.parentNode.insertBefore(H1(i),n)}),n.getAttribute(is)===null&&G.keepOriginalSource){var r=Pe.createComment(u$(n));n.parentNode.replaceChild(r,n)}else n.remove()},nest:function(e){var n=e[0],r=e[1];if(~wg(n).indexOf(G.replacementClass))return Nu.replace(e);var i=new RegExp("".concat(G.cssPrefix,"-.*"));if(delete r[0].attributes.id,r[0].attributes.class){var s=r[0].attributes.class.split(" ").reduce(function(a,c){return c===G.replacementClass||c.match(i)?a.toSvg.push(c):a.toNode.push(c),a},{toNode:[],toSvg:[]});r[0].attributes.class=s.toSvg.join(" "),s.toNode.length===0?n.removeAttribute("class"):n.setAttribute("class",s.toNode.join(" "))}var o=r.map(function(a){return Lc(a)}).join(`
`);n.setAttribute(is,""),n.innerHTML=o}};function Qw(t){t()}function K1(t,e){var n=typeof e=="function"?e:xu;if(t.length===0)n();else{var r=Qw;G.mutateApproach===fB&&(r=ei.requestAnimationFrame||Qw),r(function(){var i=o$(),s=Sg.begin("mutate");t.map(i),s(),n()})}}var kg=!1;function W1(){kg=!0}function Kf(){kg=!1}var ml=null;function Xw(t){if(!!Bw&&!!G.observeMutations){var e=t.treeCallback,n=e===void 0?xu:e,r=t.nodeCallback,i=r===void 0?xu:r,s=t.pseudoElementsCallback,o=s===void 0?xu:s,a=t.observeMutationsRoot,c=a===void 0?Pe:a;ml=new Bw(function(u){if(!kg){var l=ti();xo(u).forEach(function(h){if(h.type==="childList"&&h.addedNodes.length>0&&!Yw(h.addedNodes[0])&&(G.searchPseudoElements&&o(h.target),n(h.target)),h.type==="attributes"&&h.target.parentNode&&G.searchPseudoElements&&o(h.target.parentNode),h.type==="attributes"&&Yw(h.target)&&~_B.indexOf(h.attributeName))if(h.attributeName==="class"&&i$(h.target)){var d=Dh(wg(h.target)),f=d.prefix,g=d.iconName;h.target.setAttribute(gg,f||l),g&&h.target.setAttribute(yg,g)}else s$(h.target)&&i(h.target)})}}),wr&&ml.observe(c,{childList:!0,attributes:!0,characterData:!0,subtree:!0})}}function l$(){!ml||ml.disconnect()}function h$(t){var e=t.getAttribute("style"),n=[];return e&&(n=e.split(";").reduce(function(r,i){var s=i.split(":"),o=s[0],a=s.slice(1);return o&&a.length>0&&(r[o]=a.join(":").trim()),r},{})),n}function d$(t){var e=t.getAttribute("data-prefix"),n=t.getAttribute("data-icon"),r=t.innerText!==void 0?t.innerText.trim():"",i=Dh(wg(t));return i.prefix||(i.prefix=ti()),e&&n&&(i.prefix=e,i.iconName=n),i.iconName&&i.prefix||(i.prefix&&r.length>0&&(i.iconName=jB(i.prefix,t.innerText)||Ig(i.prefix,Vf(t.innerText))),!i.iconName&&G.autoFetchSvg&&t.firstChild&&t.firstChild.nodeType===Node.TEXT_NODE&&(i.iconName=t.firstChild.data)),i}function f$(t){var e=xo(t.attributes).reduce(function(i,s){return i.name!=="class"&&i.name!=="style"&&(i[s.name]=s.value),i},{}),n=t.getAttribute("title"),r=t.getAttribute("data-fa-title-id");return G.autoA11y&&(n?e["aria-labelledby"]="".concat(G.replacementClass,"-title-").concat(r||nc()):(e["aria-hidden"]="true",e.focusable="false")),e}function p$(){return{iconName:null,title:null,titleId:null,prefix:null,transform:Un,symbol:!1,mask:{iconName:null,prefix:null,rest:[]},maskId:null,extra:{classes:[],styles:{},attributes:{}}}}function Jw(t){var e=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{styleParser:!0},n=d$(t),r=n.iconName,i=n.prefix,s=n.rest,o=f$(t),a=$f("parseNodeAttributes",{},t),c=e.styleParser?h$(t):[];return j({iconName:r,title:t.getAttribute("title"),titleId:t.getAttribute("data-fa-title-id"),prefix:i,transform:Un,mask:{iconName:null,prefix:null,rest:[]},maskId:null,symbol:!1,extra:{classes:s,styles:c,attributes:o}},a)}var m$=vn.styles;function G1(t){var e=G.autoReplaceSvg==="nest"?Jw(t,{styleParser:!1}):Jw(t);return~e.extra.classes.indexOf(x1)?lr("generateLayersText",t,e):lr("generateSvgReplacementMutation",t,e)}var ni=new Set;vg.map(function(t){ni.add("fa-".concat(t))});Object.keys(Ja[xe]).map(ni.add.bind(ni));Object.keys(Ja[He]).map(ni.add.bind(ni));ni=Dc(ni);function Zw(t){var e=arguments.length>1&&arguments[1]!==void 0?arguments[1]:null;if(!wr)return Promise.resolve();var n=Pe.documentElement.classList,r=function(h){return n.add("".concat($w,"-").concat(h))},i=function(h){return n.remove("".concat($w,"-").concat(h))},s=G.autoFetchSvg?ni:vg.map(function(l){return"fa-".concat(l)}).concat(Object.keys(m$));s.includes("fa")||s.push("fa");var o=[".".concat(x1,":not([").concat(is,"])")].concat(s.map(function(l){return".".concat(l,":not([").concat(is,"])")})).join(", ");if(o.length===0)return Promise.resolve();var a=[];try{a=xo(t.querySelectorAll(o))}catch{}if(a.length>0)r("pending"),i("complete");else return Promise.resolve();var c=Sg.begin("onTree"),u=a.reduce(function(l,h){try{var d=G1(h);d&&l.push(d)}catch(f){R1||f.name==="MissingIcon"&&console.error(f)}return l},[]);return new Promise(function(l,h){Promise.all(u).then(function(d){K1(d,function(){r("active"),r("complete"),i("pending"),typeof e=="function"&&e(),c(),l()})}).catch(function(d){c(),h(d)})})}function g$(t){var e=arguments.length>1&&arguments[1]!==void 0?arguments[1]:null;G1(t).then(function(n){n&&K1([n],e)})}function y$(t){return function(e){var n=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},r=(e||{}).icon?e:qf(e||{}),i=n.mask;return i&&(i=(i||{}).icon?i:qf(i||{})),t(r,j(j({},n),{},{mask:i}))}}var v$=function(e){var n=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},r=n.transform,i=r===void 0?Un:r,s=n.symbol,o=s===void 0?!1:s,a=n.mask,c=a===void 0?null:a,u=n.maskId,l=u===void 0?null:u,h=n.title,d=h===void 0?null:h,f=n.titleId,g=f===void 0?null:f,y=n.classes,E=y===void 0?[]:y,v=n.attributes,I=v===void 0?{}:v,b=n.styles,x=b===void 0?{}:b;if(!!e){var M=e.prefix,z=e.iconName,ne=e.icon;return Oh(j({type:"icon"},e),function(){return ss("beforeDOMElementCreation",{iconDefinition:e,params:n}),G.autoA11y&&(d?I["aria-labelledby"]="".concat(G.replacementClass,"-title-").concat(g||nc()):(I["aria-hidden"]="true",I.focusable="false")),Tg({icons:{main:jf(ne),mask:c?jf(c.icon):{found:!1,width:null,height:null,icon:{}}},prefix:M,iconName:z,transform:j(j({},Un),i),symbol:o,title:d,maskId:l,titleId:g,extra:{attributes:I,styles:x,classes:E}})})}},w$={mixout:function(){return{icon:y$(v$)}},hooks:function(){return{mutationObserverCallbacks:function(n){return n.treeCallback=Zw,n.nodeCallback=g$,n}}},provides:function(e){e.i2svg=function(n){var r=n.node,i=r===void 0?Pe:r,s=n.callback,o=s===void 0?function(){}:s;return Zw(i,o)},e.generateSvgReplacementMutation=function(n,r){var i=r.iconName,s=r.title,o=r.titleId,a=r.prefix,c=r.transform,u=r.symbol,l=r.mask,h=r.maskId,d=r.extra;return new Promise(function(f,g){Promise.all([zf(i,a),l.iconName?zf(l.iconName,l.prefix):Promise.resolve({found:!1,width:512,height:512,icon:{}})]).then(function(y){var E=pg(y,2),v=E[0],I=E[1];f([n,Tg({icons:{main:v,mask:I},prefix:a,iconName:i,transform:c,symbol:u,maskId:h,title:s,titleId:o,extra:d,watchable:!0})])}).catch(g)})},e.generateAbstractIcon=function(n){var r=n.children,i=n.attributes,s=n.main,o=n.transform,a=n.styles,c=Nh(a);c.length>0&&(i.style=c);var u;return _g(o)&&(u=lr("generateAbstractTransformGrouping",{main:s,transform:o,containerWidth:s.width,iconWidth:s.width})),r.push(u||s.icon),{children:r,attributes:i}}}},_$={mixout:function(){return{layer:function(n){var r=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},i=r.classes,s=i===void 0?[]:i;return Oh({type:"layer"},function(){ss("beforeDOMElementCreation",{assembler:n,params:r});var o=[];return n(function(a){Array.isArray(a)?a.map(function(c){o=o.concat(c.abstract)}):o=o.concat(a.abstract)}),[{tag:"span",attributes:{class:["".concat(G.cssPrefix,"-layers")].concat(Dc(s)).join(" ")},children:o}]})}}}},b$={mixout:function(){return{counter:function(n){var r=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},i=r.title,s=i===void 0?null:i,o=r.classes,a=o===void 0?[]:o,c=r.attributes,u=c===void 0?{}:c,l=r.styles,h=l===void 0?{}:l;return Oh({type:"counter",content:n},function(){return ss("beforeDOMElementCreation",{content:n,params:r}),e$({content:n.toString(),title:s,extra:{attributes:u,styles:h,classes:["".concat(G.cssPrefix,"-layers-counter")].concat(Dc(a))}})})}}}},I$={mixout:function(){return{text:function(n){var r=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},i=r.transform,s=i===void 0?Un:i,o=r.title,a=o===void 0?null:o,c=r.classes,u=c===void 0?[]:c,l=r.attributes,h=l===void 0?{}:l,d=r.styles,f=d===void 0?{}:d;return Oh({type:"text",content:n},function(){return ss("beforeDOMElementCreation",{content:n,params:r}),Ww({content:n,transform:j(j({},Un),s),title:a,extra:{attributes:h,styles:f,classes:["".concat(G.cssPrefix,"-layers-text")].concat(Dc(u))}})})}}},provides:function(e){e.generateLayersText=function(n,r){var i=r.title,s=r.transform,o=r.extra,a=null,c=null;if(k1){var u=parseInt(getComputedStyle(n).fontSize,10),l=n.getBoundingClientRect();a=l.width/u,c=l.height/u}return G.autoA11y&&!i&&(o.attributes["aria-hidden"]="true"),Promise.resolve([n,Ww({content:n.innerHTML,width:a,height:c,transform:s,title:i,extra:o,watchable:!0})])}}},E$=new RegExp('"',"ug"),e_=[1105920,1112319];function T$(t){var e=t.replace(E$,""),n=FB(e,0),r=n>=e_[0]&&n<=e_[1],i=e.length===2?e[0]===e[1]:!1;return{value:Vf(i?e[0]:e),isSecondary:r||i}}function t_(t,e){var n="".concat(dB).concat(e.replace(":","-"));return new Promise(function(r,i){if(t.getAttribute(n)!==null)return r();var s=xo(t.children),o=s.filter(function(ne){return ne.getAttribute(Uf)===e})[0],a=ei.getComputedStyle(t,e),c=a.getPropertyValue("font-family").match(yB),u=a.getPropertyValue("font-weight"),l=a.getPropertyValue("content");if(o&&!c)return t.removeChild(o),r();if(c&&l!=="none"&&l!==""){var h=a.getPropertyValue("content"),d=~["Sharp"].indexOf(c[2])?He:xe,f=~["Solid","Regular","Light","Thin","Duotone","Brands","Kit"].indexOf(c[2])?Za[d][c[2].toLowerCase()]:vB[d][u],g=T$(h),y=g.value,E=g.isSecondary,v=c[0].startsWith("FontAwesome"),I=Ig(f,y),b=I;if(v){var x=zB(y);x.iconName&&x.prefix&&(I=x.iconName,f=x.prefix)}if(I&&!E&&(!o||o.getAttribute(gg)!==f||o.getAttribute(yg)!==b)){t.setAttribute(n,b),o&&t.removeChild(o);var M=p$(),z=M.extra;z.attributes[Uf]=e,zf(I,f).then(function(ne){var H=Tg(j(j({},M),{},{icons:{main:ne,mask:Eg()},prefix:f,iconName:b,extra:z,watchable:!0})),oe=Pe.createElement("svg");e==="::before"?t.insertBefore(oe,t.firstChild):t.appendChild(oe),oe.outerHTML=H.map(function(we){return Lc(we)}).join(`
`),t.removeAttribute(n),r()}).catch(i)}else r()}else r()})}function S$(t){return Promise.all([t_(t,"::before"),t_(t,"::after")])}function k$(t){return t.parentNode!==document.head&&!~pB.indexOf(t.tagName.toUpperCase())&&!t.getAttribute(Uf)&&(!t.parentNode||t.parentNode.tagName!=="svg")}function n_(t){if(!!wr)return new Promise(function(e,n){var r=xo(t.querySelectorAll("*")).filter(k$).map(S$),i=Sg.begin("searchPseudoElements");W1(),Promise.all(r).then(function(){i(),Kf(),e()}).catch(function(){i(),Kf(),n()})})}var A$={hooks:function(){return{mutationObserverCallbacks:function(n){return n.pseudoElementsCallback=n_,n}}},provides:function(e){e.pseudoElements2svg=function(n){var r=n.node,i=r===void 0?Pe:r;G.searchPseudoElements&&n_(i)}}},r_=!1,C$={mixout:function(){return{dom:{unwatch:function(){W1(),r_=!0}}}},hooks:function(){return{bootstrap:function(){Xw($f("mutationObserverCallbacks",{}))},noAuto:function(){l$()},watch:function(n){var r=n.observeMutationsRoot;r_?Kf():Xw($f("mutationObserverCallbacks",{observeMutationsRoot:r}))}}}},i_=function(e){var n={size:16,x:0,y:0,flipX:!1,flipY:!1,rotate:0};return e.toLowerCase().split(" ").reduce(function(r,i){var s=i.toLowerCase().split("-"),o=s[0],a=s.slice(1).join("-");if(o&&a==="h")return r.flipX=!0,r;if(o&&a==="v")return r.flipY=!0,r;if(a=parseFloat(a),isNaN(a))return r;switch(o){case"grow":r.size=r.size+a;break;case"shrink":r.size=r.size-a;break;case"left":r.x=r.x-a;break;case"right":r.x=r.x+a;break;case"up":r.y=r.y-a;break;case"down":r.y=r.y+a;break;case"rotate":r.rotate=r.rotate+a;break}return r},n)},R$={mixout:function(){return{parse:{transform:function(n){return i_(n)}}}},hooks:function(){return{parseNodeAttributes:function(n,r){var i=r.getAttribute("data-fa-transform");return i&&(n.transform=i_(i)),n}}},provides:function(e){e.generateAbstractTransformGrouping=function(n){var r=n.main,i=n.transform,s=n.containerWidth,o=n.iconWidth,a={transform:"translate(".concat(s/2," 256)")},c="translate(".concat(i.x*32,", ").concat(i.y*32,") "),u="scale(".concat(i.size/16*(i.flipX?-1:1),", ").concat(i.size/16*(i.flipY?-1:1),") "),l="rotate(".concat(i.rotate," 0 0)"),h={transform:"".concat(c," ").concat(u," ").concat(l)},d={transform:"translate(".concat(o/2*-1," -256)")},f={outer:a,inner:h,path:d};return{tag:"g",attributes:j({},f.outer),children:[{tag:"g",attributes:j({},f.inner),children:[{tag:r.icon.tag,children:r.icon.children,attributes:j(j({},r.icon.attributes),f.path)}]}]}}}},Ed={x:0,y:0,width:"100%",height:"100%"};function s_(t){var e=arguments.length>1&&arguments[1]!==void 0?arguments[1]:!0;return t.attributes&&(t.attributes.fill||e)&&(t.attributes.fill="black"),t}function x$(t){return t.tag==="g"?t.children:[t]}var N$={hooks:function(){return{parseNodeAttributes:function(n,r){var i=r.getAttribute("data-fa-mask"),s=i?Dh(i.split(" ").map(function(o){return o.trim()})):Eg();return s.prefix||(s.prefix=ti()),n.mask=s,n.maskId=r.getAttribute("data-fa-mask-id"),n}}},provides:function(e){e.generateAbstractMask=function(n){var r=n.children,i=n.attributes,s=n.main,o=n.mask,a=n.maskId,c=n.transform,u=s.width,l=s.icon,h=o.width,d=o.icon,f=RB({transform:c,containerWidth:h,iconWidth:u}),g={tag:"rect",attributes:j(j({},Ed),{},{fill:"white"})},y=l.children?{children:l.children.map(s_)}:{},E={tag:"g",attributes:j({},f.inner),children:[s_(j({tag:l.tag,attributes:j(j({},l.attributes),f.path)},y))]},v={tag:"g",attributes:j({},f.outer),children:[E]},I="mask-".concat(a||nc()),b="clip-".concat(a||nc()),x={tag:"mask",attributes:j(j({},Ed),{},{id:I,maskUnits:"userSpaceOnUse",maskContentUnits:"userSpaceOnUse"}),children:[g,v]},M={tag:"defs",children:[{tag:"clipPath",attributes:{id:b},children:x$(d)},x]};return r.push(M,{tag:"rect",attributes:j({fill:"currentColor","clip-path":"url(#".concat(b,")"),mask:"url(#".concat(I,")")},Ed)}),{children:r,attributes:i}}}},P$={provides:function(e){var n=!1;ei.matchMedia&&(n=ei.matchMedia("(prefers-reduced-motion: reduce)").matches),e.missingIconAbstract=function(){var r=[],i={fill:"currentColor"},s={attributeType:"XML",repeatCount:"indefinite",dur:"2s"};r.push({tag:"path",attributes:j(j({},i),{},{d:"M156.5,447.7l-12.6,29.5c-18.7-9.5-35.9-21.2-51.5-34.9l22.7-22.7C127.6,430.5,141.5,440,156.5,447.7z M40.6,272H8.5 c1.4,21.2,5.4,41.7,11.7,61.1L50,321.2C45.1,305.5,41.8,289,40.6,272z M40.6,240c1.4-18.8,5.2-37,11.1-54.1l-29.5-12.6 C14.7,194.3,10,216.7,8.5,240H40.6z M64.3,156.5c7.8-14.9,17.2-28.8,28.1-41.5L69.7,92.3c-13.7,15.6-25.5,32.8-34.9,51.5 L64.3,156.5z M397,419.6c-13.9,12-29.4,22.3-46.1,30.4l11.9,29.8c20.7-9.9,39.8-22.6,56.9-37.6L397,419.6z M115,92.4 c13.9-12,29.4-22.3,46.1-30.4l-11.9-29.8c-20.7,9.9-39.8,22.6-56.8,37.6L115,92.4z M447.7,355.5c-7.8,14.9-17.2,28.8-28.1,41.5 l22.7,22.7c13.7-15.6,25.5-32.9,34.9-51.5L447.7,355.5z M471.4,272c-1.4,18.8-5.2,37-11.1,54.1l29.5,12.6 c7.5-21.1,12.2-43.5,13.6-66.8H471.4z M321.2,462c-15.7,5-32.2,8.2-49.2,9.4v32.1c21.2-1.4,41.7-5.4,61.1-11.7L321.2,462z M240,471.4c-18.8-1.4-37-5.2-54.1-11.1l-12.6,29.5c21.1,7.5,43.5,12.2,66.8,13.6V471.4z M462,190.8c5,15.7,8.2,32.2,9.4,49.2h32.1 c-1.4-21.2-5.4-41.7-11.7-61.1L462,190.8z M92.4,397c-12-13.9-22.3-29.4-30.4-46.1l-29.8,11.9c9.9,20.7,22.6,39.8,37.6,56.9 L92.4,397z M272,40.6c18.8,1.4,36.9,5.2,54.1,11.1l12.6-29.5C317.7,14.7,295.3,10,272,8.5V40.6z M190.8,50 c15.7-5,32.2-8.2,49.2-9.4V8.5c-21.2,1.4-41.7,5.4-61.1,11.7L190.8,50z M442.3,92.3L419.6,115c12,13.9,22.3,29.4,30.5,46.1 l29.8-11.9C470,128.5,457.3,109.4,442.3,92.3z M397,92.4l22.7-22.7c-15.6-13.7-32.8-25.5-51.5-34.9l-12.6,29.5 C370.4,72.1,384.4,81.5,397,92.4z"})});var o=j(j({},s),{},{attributeName:"opacity"}),a={tag:"circle",attributes:j(j({},i),{},{cx:"256",cy:"364",r:"28"}),children:[]};return n||a.children.push({tag:"animate",attributes:j(j({},s),{},{attributeName:"r",values:"28;14;28;28;14;28;"})},{tag:"animate",attributes:j(j({},o),{},{values:"1;0;1;1;0;1;"})}),r.push(a),r.push({tag:"path",attributes:j(j({},i),{},{opacity:"1",d:"M263.7,312h-16c-6.6,0-12-5.4-12-12c0-71,77.4-63.9,77.4-107.8c0-20-17.8-40.2-57.4-40.2c-29.1,0-44.3,9.6-59.2,28.7 c-3.9,5-11.1,6-16.2,2.4l-13.1-9.2c-5.6-3.9-6.9-11.8-2.6-17.2c21.2-27.2,46.4-44.7,91.2-44.7c52.3,0,97.4,29.8,97.4,80.2 c0,67.6-77.4,63.5-77.4,107.8C275.7,306.6,270.3,312,263.7,312z"}),children:n?[]:[{tag:"animate",attributes:j(j({},o),{},{values:"1;0;0;0;0;1;"})}]}),n||r.push({tag:"path",attributes:j(j({},i),{},{opacity:"0",d:"M232.5,134.5l7,168c0.3,6.4,5.6,11.5,12,11.5h9c6.4,0,11.7-5.1,12-11.5l7-168c0.3-6.8-5.2-12.5-12-12.5h-23 C237.7,122,232.2,127.7,232.5,134.5z"}),children:[{tag:"animate",attributes:j(j({},o),{},{values:"0;0;1;1;0;0;"})}]}),{tag:"g",attributes:{class:"missing"},children:r}}}},D$={hooks:function(){return{parseNodeAttributes:function(n,r){var i=r.getAttribute("data-fa-symbol"),s=i===null?!1:i===""?!0:i;return n.symbol=s,n}}}},O$=[PB,w$,_$,b$,I$,A$,C$,R$,N$,P$,D$];WB(O$,{mixoutsTo:tn});tn.noAuto;var Y1=tn.config,L$=tn.library;tn.dom;var gl=tn.parse;tn.findIconDefinition;tn.toHtml;var M$=tn.icon;tn.layer;var F$=tn.text;tn.counter;function o_(t,e){var n=Object.keys(t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(t);e&&(r=r.filter(function(i){return Object.getOwnPropertyDescriptor(t,i).enumerable})),n.push.apply(n,r)}return n}function mn(t){for(var e=1;e<arguments.length;e++){var n=arguments[e]!=null?arguments[e]:{};e%2?o_(Object(n),!0).forEach(function(r){Vt(t,r,n[r])}):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(n)):o_(Object(n)).forEach(function(r){Object.defineProperty(t,r,Object.getOwnPropertyDescriptor(n,r))})}return t}function yl(t){return yl=typeof Symbol=="function"&&typeof Symbol.iterator=="symbol"?function(e){return typeof e}:function(e){return e&&typeof Symbol=="function"&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},yl(t)}function Vt(t,e,n){return e in t?Object.defineProperty(t,e,{value:n,enumerable:!0,configurable:!0,writable:!0}):t[e]=n,t}function U$(t,e){if(t==null)return{};var n={},r=Object.keys(t),i,s;for(s=0;s<r.length;s++)i=r[s],!(e.indexOf(i)>=0)&&(n[i]=t[i]);return n}function V$(t,e){if(t==null)return{};var n=U$(t,e),r,i;if(Object.getOwnPropertySymbols){var s=Object.getOwnPropertySymbols(t);for(i=0;i<s.length;i++)r=s[i],!(e.indexOf(r)>=0)&&(!Object.prototype.propertyIsEnumerable.call(t,r)||(n[r]=t[r]))}return n}function Wf(t){return B$(t)||$$(t)||q$(t)||j$()}function B$(t){if(Array.isArray(t))return Gf(t)}function $$(t){if(typeof Symbol<"u"&&t[Symbol.iterator]!=null||t["@@iterator"]!=null)return Array.from(t)}function q$(t,e){if(!!t){if(typeof t=="string")return Gf(t,e);var n=Object.prototype.toString.call(t).slice(8,-1);if(n==="Object"&&t.constructor&&(n=t.constructor.name),n==="Map"||n==="Set")return Array.from(t);if(n==="Arguments"||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n))return Gf(t,e)}}function Gf(t,e){(e==null||e>t.length)&&(e=t.length);for(var n=0,r=new Array(e);n<e;n++)r[n]=t[n];return r}function j$(){throw new TypeError(`Invalid attempt to spread non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`)}var z$=typeof globalThis<"u"?globalThis:typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{},Q1={exports:{}};(function(t){(function(e){var n=function(v,I,b){if(!u(I)||h(I)||d(I)||f(I)||c(I))return I;var x,M=0,z=0;if(l(I))for(x=[],z=I.length;M<z;M++)x.push(n(v,I[M],b));else{x={};for(var ne in I)Object.prototype.hasOwnProperty.call(I,ne)&&(x[v(ne,b)]=n(v,I[ne],b))}return x},r=function(v,I){I=I||{};var b=I.separator||"_",x=I.split||/(?=[A-Z])/;return v.split(x).join(b)},i=function(v){return g(v)?v:(v=v.replace(/[\-_\s]+(.)?/g,function(I,b){return b?b.toUpperCase():""}),v.substr(0,1).toLowerCase()+v.substr(1))},s=function(v){var I=i(v);return I.substr(0,1).toUpperCase()+I.substr(1)},o=function(v,I){return r(v,I).toLowerCase()},a=Object.prototype.toString,c=function(v){return typeof v=="function"},u=function(v){return v===Object(v)},l=function(v){return a.call(v)=="[object Array]"},h=function(v){return a.call(v)=="[object Date]"},d=function(v){return a.call(v)=="[object RegExp]"},f=function(v){return a.call(v)=="[object Boolean]"},g=function(v){return v=v-0,v===v},y=function(v,I){var b=I&&"process"in I?I.process:I;return typeof b!="function"?v:function(x,M){return b(x,v,M)}},E={camelize:i,decamelize:o,pascalize:s,depascalize:o,camelizeKeys:function(v,I){return n(y(i,I),v)},decamelizeKeys:function(v,I){return n(y(o,I),v,I)},pascalizeKeys:function(v,I){return n(y(s,I),v)},depascalizeKeys:function(){return this.decamelizeKeys.apply(this,arguments)}};t.exports?t.exports=E:e.humps=E})(z$)})(Q1);var H$=Q1.exports,K$=["class","style"];function W$(t){return t.split(";").map(function(e){return e.trim()}).filter(function(e){return e}).reduce(function(e,n){var r=n.indexOf(":"),i=H$.camelize(n.slice(0,r)),s=n.slice(r+1).trim();return e[i]=s,e},{})}function G$(t){return t.split(/\s+/).reduce(function(e,n){return e[n]=!0,e},{})}function Ag(t){var e=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},n=arguments.length>2&&arguments[2]!==void 0?arguments[2]:{};if(typeof t=="string")return t;var r=(t.children||[]).map(function(c){return Ag(c)}),i=Object.keys(t.attributes||{}).reduce(function(c,u){var l=t.attributes[u];switch(u){case"class":c.class=G$(l);break;case"style":c.style=W$(l);break;default:c.attrs[u]=l}return c},{attrs:{},class:{},style:{}});n.class;var s=n.style,o=s===void 0?{}:s,a=V$(n,K$);return sc(t.tag,mn(mn(mn({},e),{},{class:i.class,style:mn(mn({},i.style),o)},i.attrs),a),r)}var X1=!1;try{X1=!0}catch{}function Y$(){if(!X1&&console&&typeof console.error=="function"){var t;(t=console).error.apply(t,arguments)}}function va(t,e){return Array.isArray(e)&&e.length>0||!Array.isArray(e)&&e?Vt({},t,e):{}}function Q$(t){var e,n=(e={"fa-spin":t.spin,"fa-pulse":t.pulse,"fa-fw":t.fixedWidth,"fa-border":t.border,"fa-li":t.listItem,"fa-inverse":t.inverse,"fa-flip":t.flip===!0,"fa-flip-horizontal":t.flip==="horizontal"||t.flip==="both","fa-flip-vertical":t.flip==="vertical"||t.flip==="both"},Vt(e,"fa-".concat(t.size),t.size!==null),Vt(e,"fa-rotate-".concat(t.rotation),t.rotation!==null),Vt(e,"fa-pull-".concat(t.pull),t.pull!==null),Vt(e,"fa-swap-opacity",t.swapOpacity),Vt(e,"fa-bounce",t.bounce),Vt(e,"fa-shake",t.shake),Vt(e,"fa-beat",t.beat),Vt(e,"fa-fade",t.fade),Vt(e,"fa-beat-fade",t.beatFade),Vt(e,"fa-flash",t.flash),Vt(e,"fa-spin-pulse",t.spinPulse),Vt(e,"fa-spin-reverse",t.spinReverse),e);return Object.keys(n).map(function(r){return n[r]?r:null}).filter(function(r){return r})}function a_(t){if(t&&yl(t)==="object"&&t.prefix&&t.iconName&&t.icon)return t;if(gl.icon)return gl.icon(t);if(t===null)return null;if(yl(t)==="object"&&t.prefix&&t.iconName)return t;if(Array.isArray(t)&&t.length===2)return{prefix:t[0],iconName:t[1]};if(typeof t=="string")return{prefix:"fas",iconName:t}}var X$=ic({name:"FontAwesomeIcon",props:{border:{type:Boolean,default:!1},fixedWidth:{type:Boolean,default:!1},flip:{type:[Boolean,String],default:!1,validator:function(e){return[!0,!1,"horizontal","vertical","both"].indexOf(e)>-1}},icon:{type:[Object,Array,String],required:!0},mask:{type:[Object,Array,String],default:null},listItem:{type:Boolean,default:!1},pull:{type:String,default:null,validator:function(e){return["right","left"].indexOf(e)>-1}},pulse:{type:Boolean,default:!1},rotation:{type:[String,Number],default:null,validator:function(e){return[90,180,270].indexOf(Number.parseInt(e,10))>-1}},swapOpacity:{type:Boolean,default:!1},size:{type:String,default:null,validator:function(e){return["2xs","xs","sm","lg","xl","2xl","1x","2x","3x","4x","5x","6x","7x","8x","9x","10x"].indexOf(e)>-1}},spin:{type:Boolean,default:!1},transform:{type:[String,Object],default:null},symbol:{type:[Boolean,String],default:!1},title:{type:String,default:null},inverse:{type:Boolean,default:!1},bounce:{type:Boolean,default:!1},shake:{type:Boolean,default:!1},beat:{type:Boolean,default:!1},fade:{type:Boolean,default:!1},beatFade:{type:Boolean,default:!1},flash:{type:Boolean,default:!1},spinPulse:{type:Boolean,default:!1},spinReverse:{type:Boolean,default:!1}},setup:function(e,n){var r=n.attrs,i=$e(function(){return a_(e.icon)}),s=$e(function(){return va("classes",Q$(e))}),o=$e(function(){return va("transform",typeof e.transform=="string"?gl.transform(e.transform):e.transform)}),a=$e(function(){return va("mask",a_(e.mask))}),c=$e(function(){return M$(i.value,mn(mn(mn(mn({},s.value),o.value),a.value),{},{symbol:e.symbol,title:e.title}))});ea(c,function(l){if(!l)return Y$("Could not find one or more icon(s)",i.value,a.value)},{immediate:!0});var u=$e(function(){return c.value?Ag(c.value.abstract[0],{},r):null});return function(){return u.value}}});ic({name:"FontAwesomeLayers",props:{fixedWidth:{type:Boolean,default:!1}},setup:function(e,n){var r=n.slots,i=Y1.familyPrefix,s=$e(function(){return["".concat(i,"-layers")].concat(Wf(e.fixedWidth?["".concat(i,"-fw")]:[]))});return function(){return sc("div",{class:s.value},r.default?r.default():[])}}});ic({name:"FontAwesomeLayersText",props:{value:{type:[String,Number],default:""},transform:{type:[String,Object],default:null},counter:{type:Boolean,default:!1},position:{type:String,default:null,validator:function(e){return["bottom-left","bottom-right","top-left","top-right"].indexOf(e)>-1}}},setup:function(e,n){var r=n.attrs,i=Y1.familyPrefix,s=$e(function(){return va("classes",[].concat(Wf(e.counter?["".concat(i,"-layers-counter")]:[]),Wf(e.position?["".concat(i,"-layers-").concat(e.position)]:[])))}),o=$e(function(){return va("transform",typeof e.transform=="string"?gl.transform(e.transform):e.transform)}),a=$e(function(){var u=F$(e.value.toString(),mn(mn({},o.value),s.value)),l=u.abstract;return e.counter&&(l[0].attributes.class=l[0].attributes.class.replace("fa-layers-text","")),l[0]}),c=$e(function(){return Ag(a.value,{},r)});return function(){return c.value}}});var J$={prefix:"fas",iconName:"trash-can",icon:[448,512,[61460,"trash-alt"],"f2ed","M135.2 17.7C140.6 6.8 151.7 0 163.8 0H284.2c12.1 0 23.2 6.8 28.6 17.7L320 32h96c17.7 0 32 14.3 32 32s-14.3 32-32 32H32C14.3 96 0 81.7 0 64S14.3 32 32 32h96l7.2-14.3zM32 128H416V448c0 35.3-28.7 64-64 64H96c-35.3 0-64-28.7-64-64V128zm96 64c-8.8 0-16 7.2-16 16V432c0 8.8 7.2 16 16 16s16-7.2 16-16V208c0-8.8-7.2-16-16-16zm96 0c-8.8 0-16 7.2-16 16V432c0 8.8 7.2 16 16 16s16-7.2 16-16V208c0-8.8-7.2-16-16-16zm96 0c-8.8 0-16 7.2-16 16V432c0 8.8 7.2 16 16 16s16-7.2 16-16V208c0-8.8-7.2-16-16-16z"]},Z$={prefix:"fas",iconName:"bars",icon:[448,512,["navicon"],"f0c9","M0 96C0 78.3 14.3 64 32 64H416c17.7 0 32 14.3 32 32s-14.3 32-32 32H32C14.3 128 0 113.7 0 96zM0 256c0-17.7 14.3-32 32-32H416c17.7 0 32 14.3 32 32s-14.3 32-32 32H32c-17.7 0-32-14.3-32-32zM448 416c0 17.7-14.3 32-32 32H32c-17.7 0-32-14.3-32-32s14.3-32 32-32H416c17.7 0 32 14.3 32 32z"]},e3={prefix:"fas",iconName:"angle-right",icon:[320,512,[8250],"f105","M278.6 233.4c12.5 12.5 12.5 32.8 0 45.3l-160 160c-12.5 12.5-32.8 12.5-45.3 0s-12.5-32.8 0-45.3L210.7 256 73.4 118.6c-12.5-12.5-12.5-32.8 0-45.3s32.8-12.5 45.3 0l160 160z"]},t3={prefix:"fas",iconName:"envelope",icon:[512,512,[128386,9993,61443],"f0e0","M48 64C21.5 64 0 85.5 0 112c0 15.1 7.1 29.3 19.2 38.4L236.8 313.6c11.4 8.5 27 8.5 38.4 0L492.8 150.4c12.1-9.1 19.2-23.3 19.2-38.4c0-26.5-21.5-48-48-48H48zM0 176V384c0 35.3 28.7 64 64 64H448c35.3 0 64-28.7 64-64V176L294.4 339.2c-22.8 17.1-54 17.1-76.8 0L0 176z"]},n3={prefix:"fas",iconName:"expand",icon:[448,512,[],"f065","M32 32C14.3 32 0 46.3 0 64v96c0 17.7 14.3 32 32 32s32-14.3 32-32V96h64c17.7 0 32-14.3 32-32s-14.3-32-32-32H32zM64 352c0-17.7-14.3-32-32-32s-32 14.3-32 32v96c0 17.7 14.3 32 32 32h96c17.7 0 32-14.3 32-32s-14.3-32-32-32H64V352zM320 32c-17.7 0-32 14.3-32 32s14.3 32 32 32h64v64c0 17.7 14.3 32 32 32s32-14.3 32-32V64c0-17.7-14.3-32-32-32H320zM448 352c0-17.7-14.3-32-32-32s-32 14.3-32 32v64H320c-17.7 0-32 14.3-32 32s14.3 32 32 32h96c17.7 0 32-14.3 32-32V352z"]},r3={prefix:"fas",iconName:"xmark",icon:[384,512,[128473,10005,10006,10060,215,"close","multiply","remove","times"],"f00d","M342.6 150.6c12.5-12.5 12.5-32.8 0-45.3s-32.8-12.5-45.3 0L192 210.7 86.6 105.4c-12.5-12.5-32.8-12.5-45.3 0s-12.5 32.8 0 45.3L146.7 256 41.4 361.4c-12.5 12.5-12.5 32.8 0 45.3s32.8 12.5 45.3 0L192 301.3 297.4 406.6c12.5 12.5 32.8 12.5 45.3 0s12.5-32.8 0-45.3L237.3 256 342.6 150.6z"]},i3={prefix:"fas",iconName:"angle-left",icon:[320,512,[8249],"f104","M41.4 233.4c-12.5 12.5-12.5 32.8 0 45.3l160 160c12.5 12.5 32.8 12.5 45.3 0s12.5-32.8 0-45.3L109.3 256 246.6 118.6c12.5-12.5 12.5-32.8 0-45.3s-32.8-12.5-45.3 0l-160 160z"]},s3={prefix:"fab",iconName:"instagram",icon:[448,512,[],"f16d","M224.1 141c-63.6 0-114.9 51.3-114.9 114.9s51.3 114.9 114.9 114.9S339 319.5 339 255.9 287.7 141 224.1 141zm0 189.6c-41.1 0-74.7-33.5-74.7-74.7s33.5-74.7 74.7-74.7 74.7 33.5 74.7 74.7-33.6 74.7-74.7 74.7zm146.4-194.3c0 14.9-12 26.8-26.8 26.8-14.9 0-26.8-12-26.8-26.8s12-26.8 26.8-26.8 26.8 12 26.8 26.8zm76.1 27.2c-1.7-35.9-9.9-67.7-36.2-93.9-26.2-26.2-58-34.4-93.9-36.2-37-2.1-147.9-2.1-184.9 0-35.8 1.7-67.6 9.9-93.9 36.1s-34.4 58-36.2 93.9c-2.1 37-2.1 147.9 0 184.9 1.7 35.9 9.9 67.7 36.2 93.9s58 34.4 93.9 36.2c37 2.1 147.9 2.1 184.9 0 35.9-1.7 67.7-9.9 93.9-36.2 26.2-26.2 34.4-58 36.2-93.9 2.1-37 2.1-147.8 0-184.8zM398.8 388c-7.8 19.6-22.9 34.7-42.6 42.6-29.5 11.7-99.5 9-132.1 9s-102.7 2.6-132.1-9c-19.6-7.8-34.7-22.9-42.6-42.6-11.7-29.5-9-99.5-9-132.1s-2.6-102.7 9-132.1c7.8-19.6 22.9-34.7 42.6-42.6 29.5-11.7 99.5-9 132.1-9s102.7-2.6 132.1 9c19.6 7.8 34.7 22.9 42.6 42.6 11.7 29.5 9 99.5 9 132.1s2.7 102.7-9 132.1z"]},o3={prefix:"fab",iconName:"facebook",icon:[512,512,[62e3],"f09a","M504 256C504 119 393 8 256 8S8 119 8 256c0 123.78 90.69 226.38 209.25 245V327.69h-63V256h63v-54.64c0-62.15 37-96.48 93.67-96.48 27.14 0 55.52 4.84 55.52 4.84v61h-31.28c-30.8 0-40.41 19.12-40.41 38.73V256h68.78l-11 71.69h-57.78V501C413.31 482.38 504 379.78 504 256z"]},a3={prefix:"fab",iconName:"whatsapp",icon:[448,512,[],"f232","M380.9 97.1C339 55.1 283.2 32 223.9 32c-122.4 0-222 99.6-222 222 0 39.1 10.2 77.3 29.6 111L0 480l117.7-30.9c32.4 17.7 68.9 27 106.1 27h.1c122.3 0 224.1-99.6 224.1-222 0-59.3-25.2-115-67.1-157zm-157 341.6c-33.2 0-65.7-8.9-94-25.7l-6.7-4-69.8 18.3L72 359.2l-4.4-7c-18.5-29.4-28.2-63.3-28.2-98.2 0-101.7 82.8-184.5 184.6-184.5 49.3 0 95.6 19.2 130.4 54.1 34.8 34.9 56.2 81.2 56.1 130.5 0 101.8-84.9 184.6-186.6 184.6zm101.2-138.2c-5.5-2.8-32.8-16.2-37.9-18-5.1-1.9-8.8-2.8-12.5 2.8-3.7 5.6-14.3 18-17.6 21.8-3.2 3.7-6.5 4.2-12 1.4-32.6-16.3-54-29.1-75.5-66-5.7-9.8 5.7-9.1 16.3-30.3 1.8-3.7.9-6.9-.5-9.7-1.4-2.8-12.5-30.1-17.1-41.2-4.5-10.8-9.1-9.3-12.5-9.5-3.2-.2-6.9-.2-10.6-.2-3.7 0-9.7 1.4-14.8 6.9-5.1 5.6-19.4 19-19.4 46.3 0 27.3 19.9 53.7 22.6 57.4 2.8 3.7 39.1 59.7 94.8 83.8 35.2 15.2 49 16.5 66.6 13.9 10.7-1.6 32.8-13.4 37.4-26.4 4.6-13 4.6-24.1 3.2-26.4-1.3-2.5-5-3.9-10.5-6.6z"]};L$.add(n3,r3,Z$,e3,i3,o3,s3,a3,t3,J$);const Cg=xA(PA);Cg.use(nB);Cg.component("font-awesome-icon",X$);Cg.mount("#app");export{_3 as A,iU as B,rU as C,ll as D,kn as F,cb as T,sb as a,jt as b,f3 as c,p3 as d,qS as e,m3 as f,h3 as g,y3 as h,l3 as i,jk as j,hp as k,d3 as l,tB as m,WT as n,tb as o,u3 as p,rb as q,_k as r,RT as s,c3 as t,v3 as u,g3 as v,ea as w,w3 as x,Qf as y,ek as z};
