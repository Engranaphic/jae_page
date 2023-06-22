(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const i of document.querySelectorAll('link[rel="modulepreload"]'))r(i);new MutationObserver(i=>{for(const s of i)if(s.type==="childList")for(const o of s.addedNodes)o.tagName==="LINK"&&o.rel==="modulepreload"&&r(o)}).observe(document,{childList:!0,subtree:!0});function n(i){const s={};return i.integrity&&(s.integrity=i.integrity),i.referrerpolicy&&(s.referrerPolicy=i.referrerpolicy),i.crossorigin==="use-credentials"?s.credentials="include":i.crossorigin==="anonymous"?s.credentials="omit":s.credentials="same-origin",s}function r(i){if(i.ep)return;i.ep=!0;const s=n(i);fetch(i.href,s)}})();function fp(t,e){const n=Object.create(null),r=t.split(",");for(let i=0;i<r.length;i++)n[r[i]]=!0;return e?i=>!!n[i.toLowerCase()]:i=>!!n[i]}function pp(t){if(re(t)){const e={};for(let n=0;n<t.length;n++){const r=t[n],i=it(r)?xS(r):pp(r);if(i)for(const s in i)e[s]=i[s]}return e}else{if(it(t))return t;if(Me(t))return t}}const kS=/;(?![^(]*\))/g,AS=/:([^]+)/,CS=/\/\*.*?\*\//gs;function xS(t){const e={};return t.replace(CS,"").split(kS).forEach(n=>{if(n){const r=n.split(AS);r.length>1&&(e[r[0].trim()]=r[1].trim())}}),e}function mp(t){let e="";if(it(t))e=t;else if(re(t))for(let n=0;n<t.length;n++){const r=mp(t[n]);r&&(e+=r+" ")}else if(Me(t))for(const n in t)t[n]&&(e+=n+" ");return e.trim()}const RS="itemscope,allowfullscreen,formnovalidate,ismap,nomodule,novalidate,readonly",NS=fp(RS);function D_(t){return!!t||t===""}const q9=t=>it(t)?t:t==null?"":re(t)||Me(t)&&(t.toString===F_||!ue(t.toString))?JSON.stringify(t,O_,2):String(t),O_=(t,e)=>e&&e.__v_isRef?O_(t,e.value):Vs(e)?{[`Map(${e.size})`]:[...e.entries()].reduce((n,[r,i])=>(n[`${r} =>`]=i,n),{})}:L_(e)?{[`Set(${e.size})`]:[...e.values()]}:Me(e)&&!re(e)&&!U_(e)?String(e):e,Re={},Us=[],In=()=>{},PS=()=>!1,DS=/^on[^a-z]/,Pl=t=>DS.test(t),gp=t=>t.startsWith("onUpdate:"),Et=Object.assign,yp=(t,e)=>{const n=t.indexOf(e);n>-1&&t.splice(n,1)},OS=Object.prototype.hasOwnProperty,ye=(t,e)=>OS.call(t,e),re=Array.isArray,Vs=t=>Dl(t)==="[object Map]",L_=t=>Dl(t)==="[object Set]",ue=t=>typeof t=="function",it=t=>typeof t=="string",vp=t=>typeof t=="symbol",Me=t=>t!==null&&typeof t=="object",M_=t=>Me(t)&&ue(t.then)&&ue(t.catch),F_=Object.prototype.toString,Dl=t=>F_.call(t),LS=t=>Dl(t).slice(8,-1),U_=t=>Dl(t)==="[object Object]",wp=t=>it(t)&&t!=="NaN"&&t[0]!=="-"&&""+parseInt(t,10)===t,Su=fp(",key,ref,ref_for,ref_key,onVnodeBeforeMount,onVnodeMounted,onVnodeBeforeUpdate,onVnodeUpdated,onVnodeBeforeUnmount,onVnodeUnmounted"),Ol=t=>{const e=Object.create(null);return n=>e[n]||(e[n]=t(n))},MS=/-(\w)/g,Qn=Ol(t=>t.replace(MS,(e,n)=>n?n.toUpperCase():"")),FS=/\B([A-Z])/g,_o=Ol(t=>t.replace(FS,"-$1").toLowerCase()),Ll=Ol(t=>t.charAt(0).toUpperCase()+t.slice(1)),Qh=Ol(t=>t?`on${Ll(t)}`:""),xa=(t,e)=>!Object.is(t,e),ku=(t,e)=>{for(let n=0;n<t.length;n++)t[n](e)},zu=(t,e,n)=>{Object.defineProperty(t,e,{configurable:!0,enumerable:!1,value:n})},Vd=t=>{const e=parseFloat(t);return isNaN(e)?t:e},US=t=>{const e=it(t)?Number(t):NaN;return isNaN(e)?t:e};let Zg;const VS=()=>Zg||(Zg=typeof globalThis<"u"?globalThis:typeof self<"u"?self:typeof window<"u"?window:typeof global<"u"?global:{});let gn;class $S{constructor(e=!1){this.detached=e,this._active=!0,this.effects=[],this.cleanups=[],this.parent=gn,!e&&gn&&(this.index=(gn.scopes||(gn.scopes=[])).push(this)-1)}get active(){return this._active}run(e){if(this._active){const n=gn;try{return gn=this,e()}finally{gn=n}}}on(){gn=this}off(){gn=this.parent}stop(e){if(this._active){let n,r;for(n=0,r=this.effects.length;n<r;n++)this.effects[n].stop();for(n=0,r=this.cleanups.length;n<r;n++)this.cleanups[n]();if(this.scopes)for(n=0,r=this.scopes.length;n<r;n++)this.scopes[n].stop(!0);if(!this.detached&&this.parent&&!e){const i=this.parent.scopes.pop();i&&i!==this&&(this.parent.scopes[this.index]=i,i.index=this.index)}this.parent=void 0,this._active=!1}}}function BS(t,e=gn){e&&e.active&&e.effects.push(t)}function qS(){return gn}const _p=t=>{const e=new Set(t);return e.w=0,e.n=0,e},V_=t=>(t.w&Kr)>0,$_=t=>(t.n&Kr)>0,jS=({deps:t})=>{if(t.length)for(let e=0;e<t.length;e++)t[e].w|=Kr},zS=t=>{const{deps:e}=t;if(e.length){let n=0;for(let r=0;r<e.length;r++){const i=e[r];V_(i)&&!$_(i)?i.delete(t):e[n++]=i,i.w&=~Kr,i.n&=~Kr}e.length=n}},$d=new WeakMap;let ta=0,Kr=1;const Bd=30;let yn;const qi=Symbol(""),qd=Symbol("");class bp{constructor(e,n=null,r){this.fn=e,this.scheduler=n,this.active=!0,this.deps=[],this.parent=void 0,BS(this,r)}run(){if(!this.active)return this.fn();let e=yn,n=jr;for(;e;){if(e===this)return;e=e.parent}try{return this.parent=yn,yn=this,jr=!0,Kr=1<<++ta,ta<=Bd?jS(this):ey(this),this.fn()}finally{ta<=Bd&&zS(this),Kr=1<<--ta,yn=this.parent,jr=n,this.parent=void 0,this.deferStop&&this.stop()}}stop(){yn===this?this.deferStop=!0:this.active&&(ey(this),this.onStop&&this.onStop(),this.active=!1)}}function ey(t){const{deps:e}=t;if(e.length){for(let n=0;n<e.length;n++)e[n].delete(t);e.length=0}}let jr=!0;const B_=[];function bo(){B_.push(jr),jr=!1}function Io(){const t=B_.pop();jr=t===void 0?!0:t}function Qt(t,e,n){if(jr&&yn){let r=$d.get(t);r||$d.set(t,r=new Map);let i=r.get(n);i||r.set(n,i=_p()),q_(i)}}function q_(t,e){let n=!1;ta<=Bd?$_(t)||(t.n|=Kr,n=!V_(t)):n=!t.has(yn),n&&(t.add(yn),yn.deps.push(t))}function lr(t,e,n,r,i,s){const o=$d.get(t);if(!o)return;let a=[];if(e==="clear")a=[...o.values()];else if(n==="length"&&re(t)){const c=Number(r);o.forEach((u,l)=>{(l==="length"||l>=c)&&a.push(u)})}else switch(n!==void 0&&a.push(o.get(n)),e){case"add":re(t)?wp(n)&&a.push(o.get("length")):(a.push(o.get(qi)),Vs(t)&&a.push(o.get(qd)));break;case"delete":re(t)||(a.push(o.get(qi)),Vs(t)&&a.push(o.get(qd)));break;case"set":Vs(t)&&a.push(o.get(qi));break}if(a.length===1)a[0]&&jd(a[0]);else{const c=[];for(const u of a)u&&c.push(...u);jd(_p(c))}}function jd(t,e){const n=re(t)?t:[...t];for(const r of n)r.computed&&ty(r);for(const r of n)r.computed||ty(r)}function ty(t,e){(t!==yn||t.allowRecurse)&&(t.scheduler?t.scheduler():t.run())}const HS=fp("__proto__,__v_isRef,__isVue"),j_=new Set(Object.getOwnPropertyNames(Symbol).filter(t=>t!=="arguments"&&t!=="caller").map(t=>Symbol[t]).filter(vp)),KS=Ip(),GS=Ip(!1,!0),WS=Ip(!0),ny=QS();function QS(){const t={};return["includes","indexOf","lastIndexOf"].forEach(e=>{t[e]=function(...n){const r=_e(this);for(let s=0,o=this.length;s<o;s++)Qt(r,"get",s+"");const i=r[e](...n);return i===-1||i===!1?r[e](...n.map(_e)):i}}),["push","pop","shift","unshift","splice"].forEach(e=>{t[e]=function(...n){bo();const r=_e(this)[e].apply(this,n);return Io(),r}}),t}function YS(t){const e=_e(this);return Qt(e,"has",t),e.hasOwnProperty(t)}function Ip(t=!1,e=!1){return function(r,i,s){if(i==="__v_isReactive")return!t;if(i==="__v_isReadonly")return t;if(i==="__v_isShallow")return e;if(i==="__v_raw"&&s===(t?e?dk:W_:e?G_:K_).get(r))return r;const o=re(r);if(!t){if(o&&ye(ny,i))return Reflect.get(ny,i,s);if(i==="hasOwnProperty")return YS}const a=Reflect.get(r,i,s);return(vp(i)?j_.has(i):HS(i))||(t||Qt(r,"get",i),e)?a:Ct(a)?o&&wp(i)?a:a.value:Me(a)?t?Q_(a):fc(a):a}}const XS=z_(),JS=z_(!0);function z_(t=!1){return function(n,r,i,s){let o=n[r];if(Zs(o)&&Ct(o)&&!Ct(i))return!1;if(!t&&(!Hu(i)&&!Zs(i)&&(o=_e(o),i=_e(i)),!re(n)&&Ct(o)&&!Ct(i)))return o.value=i,!0;const a=re(n)&&wp(r)?Number(r)<n.length:ye(n,r),c=Reflect.set(n,r,i,s);return n===_e(s)&&(a?xa(i,o)&&lr(n,"set",r,i):lr(n,"add",r,i)),c}}function ZS(t,e){const n=ye(t,e);t[e];const r=Reflect.deleteProperty(t,e);return r&&n&&lr(t,"delete",e,void 0),r}function ek(t,e){const n=Reflect.has(t,e);return(!vp(e)||!j_.has(e))&&Qt(t,"has",e),n}function tk(t){return Qt(t,"iterate",re(t)?"length":qi),Reflect.ownKeys(t)}const H_={get:KS,set:XS,deleteProperty:ZS,has:ek,ownKeys:tk},nk={get:WS,set(t,e){return!0},deleteProperty(t,e){return!0}},rk=Et({},H_,{get:GS,set:JS}),Ep=t=>t,Ml=t=>Reflect.getPrototypeOf(t);function Gc(t,e,n=!1,r=!1){t=t.__v_raw;const i=_e(t),s=_e(e);n||(e!==s&&Qt(i,"get",e),Qt(i,"get",s));const{has:o}=Ml(i),a=r?Ep:n?kp:Ra;if(o.call(i,e))return a(t.get(e));if(o.call(i,s))return a(t.get(s));t!==i&&t.get(e)}function Wc(t,e=!1){const n=this.__v_raw,r=_e(n),i=_e(t);return e||(t!==i&&Qt(r,"has",t),Qt(r,"has",i)),t===i?n.has(t):n.has(t)||n.has(i)}function Qc(t,e=!1){return t=t.__v_raw,!e&&Qt(_e(t),"iterate",qi),Reflect.get(t,"size",t)}function ry(t){t=_e(t);const e=_e(this);return Ml(e).has.call(e,t)||(e.add(t),lr(e,"add",t,t)),this}function iy(t,e){e=_e(e);const n=_e(this),{has:r,get:i}=Ml(n);let s=r.call(n,t);s||(t=_e(t),s=r.call(n,t));const o=i.call(n,t);return n.set(t,e),s?xa(e,o)&&lr(n,"set",t,e):lr(n,"add",t,e),this}function sy(t){const e=_e(this),{has:n,get:r}=Ml(e);let i=n.call(e,t);i||(t=_e(t),i=n.call(e,t)),r&&r.call(e,t);const s=e.delete(t);return i&&lr(e,"delete",t,void 0),s}function oy(){const t=_e(this),e=t.size!==0,n=t.clear();return e&&lr(t,"clear",void 0,void 0),n}function Yc(t,e){return function(r,i){const s=this,o=s.__v_raw,a=_e(o),c=e?Ep:t?kp:Ra;return!t&&Qt(a,"iterate",qi),o.forEach((u,l)=>r.call(i,c(u),c(l),s))}}function Xc(t,e,n){return function(...r){const i=this.__v_raw,s=_e(i),o=Vs(s),a=t==="entries"||t===Symbol.iterator&&o,c=t==="keys"&&o,u=i[t](...r),l=n?Ep:e?kp:Ra;return!e&&Qt(s,"iterate",c?qd:qi),{next(){const{value:h,done:d}=u.next();return d?{value:h,done:d}:{value:a?[l(h[0]),l(h[1])]:l(h),done:d}},[Symbol.iterator](){return this}}}}function Cr(t){return function(...e){return t==="delete"?!1:this}}function ik(){const t={get(s){return Gc(this,s)},get size(){return Qc(this)},has:Wc,add:ry,set:iy,delete:sy,clear:oy,forEach:Yc(!1,!1)},e={get(s){return Gc(this,s,!1,!0)},get size(){return Qc(this)},has:Wc,add:ry,set:iy,delete:sy,clear:oy,forEach:Yc(!1,!0)},n={get(s){return Gc(this,s,!0)},get size(){return Qc(this,!0)},has(s){return Wc.call(this,s,!0)},add:Cr("add"),set:Cr("set"),delete:Cr("delete"),clear:Cr("clear"),forEach:Yc(!0,!1)},r={get(s){return Gc(this,s,!0,!0)},get size(){return Qc(this,!0)},has(s){return Wc.call(this,s,!0)},add:Cr("add"),set:Cr("set"),delete:Cr("delete"),clear:Cr("clear"),forEach:Yc(!0,!0)};return["keys","values","entries",Symbol.iterator].forEach(s=>{t[s]=Xc(s,!1,!1),n[s]=Xc(s,!0,!1),e[s]=Xc(s,!1,!0),r[s]=Xc(s,!0,!0)}),[t,n,e,r]}const[sk,ok,ak,ck]=ik();function Tp(t,e){const n=e?t?ck:ak:t?ok:sk;return(r,i,s)=>i==="__v_isReactive"?!t:i==="__v_isReadonly"?t:i==="__v_raw"?r:Reflect.get(ye(n,i)&&i in r?n:r,i,s)}const uk={get:Tp(!1,!1)},lk={get:Tp(!1,!0)},hk={get:Tp(!0,!1)},K_=new WeakMap,G_=new WeakMap,W_=new WeakMap,dk=new WeakMap;function fk(t){switch(t){case"Object":case"Array":return 1;case"Map":case"Set":case"WeakMap":case"WeakSet":return 2;default:return 0}}function pk(t){return t.__v_skip||!Object.isExtensible(t)?0:fk(LS(t))}function fc(t){return Zs(t)?t:Sp(t,!1,H_,uk,K_)}function mk(t){return Sp(t,!1,rk,lk,G_)}function Q_(t){return Sp(t,!0,nk,hk,W_)}function Sp(t,e,n,r,i){if(!Me(t)||t.__v_raw&&!(e&&t.__v_isReactive))return t;const s=i.get(t);if(s)return s;const o=pk(t);if(o===0)return t;const a=new Proxy(t,o===2?r:n);return i.set(t,a),a}function $s(t){return Zs(t)?$s(t.__v_raw):!!(t&&t.__v_isReactive)}function Zs(t){return!!(t&&t.__v_isReadonly)}function Hu(t){return!!(t&&t.__v_isShallow)}function Y_(t){return $s(t)||Zs(t)}function _e(t){const e=t&&t.__v_raw;return e?_e(e):t}function X_(t){return zu(t,"__v_skip",!0),t}const Ra=t=>Me(t)?fc(t):t,kp=t=>Me(t)?Q_(t):t;function J_(t){jr&&yn&&(t=_e(t),q_(t.dep||(t.dep=_p())))}function Z_(t,e){t=_e(t);const n=t.dep;n&&jd(n)}function Ct(t){return!!(t&&t.__v_isRef===!0)}function gk(t){return eb(t,!1)}function yk(t){return eb(t,!0)}function eb(t,e){return Ct(t)?t:new vk(t,e)}class vk{constructor(e,n){this.__v_isShallow=n,this.dep=void 0,this.__v_isRef=!0,this._rawValue=n?e:_e(e),this._value=n?e:Ra(e)}get value(){return J_(this),this._value}set value(e){const n=this.__v_isShallow||Hu(e)||Zs(e);e=n?e:_e(e),xa(e,this._rawValue)&&(this._rawValue=e,this._value=n?e:Ra(e),Z_(this))}}function Bs(t){return Ct(t)?t.value:t}const wk={get:(t,e,n)=>Bs(Reflect.get(t,e,n)),set:(t,e,n,r)=>{const i=t[e];return Ct(i)&&!Ct(n)?(i.value=n,!0):Reflect.set(t,e,n,r)}};function tb(t){return $s(t)?t:new Proxy(t,wk)}var nb;class _k{constructor(e,n,r,i){this._setter=n,this.dep=void 0,this.__v_isRef=!0,this[nb]=!1,this._dirty=!0,this.effect=new bp(e,()=>{this._dirty||(this._dirty=!0,Z_(this))}),this.effect.computed=this,this.effect.active=this._cacheable=!i,this.__v_isReadonly=r}get value(){const e=_e(this);return J_(e),(e._dirty||!e._cacheable)&&(e._dirty=!1,e._value=e.effect.run()),e._value}set value(e){this._setter(e)}}nb="__v_isReadonly";function bk(t,e,n=!1){let r,i;const s=ue(t);return s?(r=t,i=In):(r=t.get,i=t.set),new _k(r,i,s||!i,n)}function zr(t,e,n,r){let i;try{i=r?t(...r):t()}catch(s){Fl(s,e,n)}return i}function un(t,e,n,r){if(ue(t)){const s=zr(t,e,n,r);return s&&M_(s)&&s.catch(o=>{Fl(o,e,n)}),s}const i=[];for(let s=0;s<t.length;s++)i.push(un(t[s],e,n,r));return i}function Fl(t,e,n,r=!0){const i=e?e.vnode:null;if(e){let s=e.parent;const o=e.proxy,a=n;for(;s;){const u=s.ec;if(u){for(let l=0;l<u.length;l++)if(u[l](t,o,a)===!1)return}s=s.parent}const c=e.appContext.config.errorHandler;if(c){zr(c,null,10,[t,o,a]);return}}Ik(t,n,i,r)}function Ik(t,e,n,r=!0){console.error(t)}let Na=!1,zd=!1;const At=[];let Dn=0;const qs=[];let er=null,ki=0;const rb=Promise.resolve();let Ap=null;function ib(t){const e=Ap||rb;return t?e.then(this?t.bind(this):t):e}function Ek(t){let e=Dn+1,n=At.length;for(;e<n;){const r=e+n>>>1;Pa(At[r])<t?e=r+1:n=r}return e}function Cp(t){(!At.length||!At.includes(t,Na&&t.allowRecurse?Dn+1:Dn))&&(t.id==null?At.push(t):At.splice(Ek(t.id),0,t),sb())}function sb(){!Na&&!zd&&(zd=!0,Ap=rb.then(ab))}function Tk(t){const e=At.indexOf(t);e>Dn&&At.splice(e,1)}function Sk(t){re(t)?qs.push(...t):(!er||!er.includes(t,t.allowRecurse?ki+1:ki))&&qs.push(t),sb()}function ay(t,e=Na?Dn+1:0){for(;e<At.length;e++){const n=At[e];n&&n.pre&&(At.splice(e,1),e--,n())}}function ob(t){if(qs.length){const e=[...new Set(qs)];if(qs.length=0,er){er.push(...e);return}for(er=e,er.sort((n,r)=>Pa(n)-Pa(r)),ki=0;ki<er.length;ki++)er[ki]();er=null,ki=0}}const Pa=t=>t.id==null?1/0:t.id,kk=(t,e)=>{const n=Pa(t)-Pa(e);if(n===0){if(t.pre&&!e.pre)return-1;if(e.pre&&!t.pre)return 1}return n};function ab(t){zd=!1,Na=!0,At.sort(kk);const e=In;try{for(Dn=0;Dn<At.length;Dn++){const n=At[Dn];n&&n.active!==!1&&zr(n,null,14)}}finally{Dn=0,At.length=0,ob(),Na=!1,Ap=null,(At.length||qs.length)&&ab()}}function Ak(t,e,...n){if(t.isUnmounted)return;const r=t.vnode.props||Re;let i=n;const s=e.startsWith("update:"),o=s&&e.slice(7);if(o&&o in r){const l=`${o==="modelValue"?"model":o}Modifiers`,{number:h,trim:d}=r[l]||Re;d&&(i=n.map(f=>it(f)?f.trim():f)),h&&(i=n.map(Vd))}let a,c=r[a=Qh(e)]||r[a=Qh(Qn(e))];!c&&s&&(c=r[a=Qh(_o(e))]),c&&un(c,t,6,i);const u=r[a+"Once"];if(u){if(!t.emitted)t.emitted={};else if(t.emitted[a])return;t.emitted[a]=!0,un(u,t,6,i)}}function cb(t,e,n=!1){const r=e.emitsCache,i=r.get(t);if(i!==void 0)return i;const s=t.emits;let o={},a=!1;if(!ue(t)){const c=u=>{const l=cb(u,e,!0);l&&(a=!0,Et(o,l))};!n&&e.mixins.length&&e.mixins.forEach(c),t.extends&&c(t.extends),t.mixins&&t.mixins.forEach(c)}return!s&&!a?(Me(t)&&r.set(t,null),null):(re(s)?s.forEach(c=>o[c]=null):Et(o,s),Me(t)&&r.set(t,o),o)}function Ul(t,e){return!t||!Pl(e)?!1:(e=e.slice(2).replace(/Once$/,""),ye(t,e[0].toLowerCase()+e.slice(1))||ye(t,_o(e))||ye(t,e))}let Zt=null,Vl=null;function Ku(t){const e=Zt;return Zt=t,Vl=t&&t.type.__scopeId||null,e}function j9(t){Vl=t}function z9(){Vl=null}function Ck(t,e=Zt,n){if(!e||t._n)return t;const r=(...i)=>{r._d&&yy(-1);const s=Ku(e);let o;try{o=t(...i)}finally{Ku(s),r._d&&yy(1)}return o};return r._n=!0,r._c=!0,r._d=!0,r}function Yh(t){const{type:e,vnode:n,proxy:r,withProxy:i,props:s,propsOptions:[o],slots:a,attrs:c,emit:u,render:l,renderCache:h,data:d,setupState:f,ctx:m,inheritAttrs:y}=t;let I,v;const E=Ku(t);try{if(n.shapeFlag&4){const R=i||r;I=Pn(l.call(R,R,h,s,f,d,m)),v=c}else{const R=e;I=Pn(R.length>1?R(s,{attrs:c,slots:a,emit:u}):R(s,null)),v=e.props?c:xk(c)}}catch(R){da.length=0,Fl(R,t,1),I=Ht(En)}let _=I;if(v&&y!==!1){const R=Object.keys(v),{shapeFlag:M}=_;R.length&&M&7&&(o&&R.some(gp)&&(v=Rk(v,o)),_=Gr(_,v))}return n.dirs&&(_=Gr(_),_.dirs=_.dirs?_.dirs.concat(n.dirs):n.dirs),n.transition&&(_.transition=n.transition),I=_,Ku(E),I}const xk=t=>{let e;for(const n in t)(n==="class"||n==="style"||Pl(n))&&((e||(e={}))[n]=t[n]);return e},Rk=(t,e)=>{const n={};for(const r in t)(!gp(r)||!(r.slice(9)in e))&&(n[r]=t[r]);return n};function Nk(t,e,n){const{props:r,children:i,component:s}=t,{props:o,children:a,patchFlag:c}=e,u=s.emitsOptions;if(e.dirs||e.transition)return!0;if(n&&c>=0){if(c&1024)return!0;if(c&16)return r?cy(r,o,u):!!o;if(c&8){const l=e.dynamicProps;for(let h=0;h<l.length;h++){const d=l[h];if(o[d]!==r[d]&&!Ul(u,d))return!0}}}else return(i||a)&&(!a||!a.$stable)?!0:r===o?!1:r?o?cy(r,o,u):!0:!!o;return!1}function cy(t,e,n){const r=Object.keys(e);if(r.length!==Object.keys(t).length)return!0;for(let i=0;i<r.length;i++){const s=r[i];if(e[s]!==t[s]&&!Ul(n,s))return!0}return!1}function Pk({vnode:t,parent:e},n){for(;e&&e.subTree===t;)(t=e.vnode).el=n,e=e.parent}const Dk=t=>t.__isSuspense;function Ok(t,e){e&&e.pendingBranch?re(t)?e.effects.push(...t):e.effects.push(t):Sk(t)}function Au(t,e){if(Ye){let n=Ye.provides;const r=Ye.parent&&Ye.parent.provides;r===n&&(n=Ye.provides=Object.create(r)),n[t]=e}}function Hn(t,e,n=!1){const r=Ye||Zt;if(r){const i=r.parent==null?r.vnode.appContext&&r.vnode.appContext.provides:r.parent.provides;if(i&&t in i)return i[t];if(arguments.length>1)return n&&ue(e)?e.call(r.proxy):e}}const Jc={};function la(t,e,n){return ub(t,e,n)}function ub(t,e,{immediate:n,deep:r,flush:i,onTrack:s,onTrigger:o}=Re){const a=qS()===(Ye==null?void 0:Ye.scope)?Ye:null;let c,u=!1,l=!1;if(Ct(t)?(c=()=>t.value,u=Hu(t)):$s(t)?(c=()=>t,r=!0):re(t)?(l=!0,u=t.some(_=>$s(_)||Hu(_)),c=()=>t.map(_=>{if(Ct(_))return _.value;if($s(_))return Oi(_);if(ue(_))return zr(_,a,2)})):ue(t)?e?c=()=>zr(t,a,2):c=()=>{if(!(a&&a.isUnmounted))return h&&h(),un(t,a,3,[d])}:c=In,e&&r){const _=c;c=()=>Oi(_())}let h,d=_=>{h=v.onStop=()=>{zr(_,a,4)}},f;if(Oa)if(d=In,e?n&&un(e,a,3,[c(),l?[]:void 0,d]):c(),i==="sync"){const _=RA();f=_.__watcherHandles||(_.__watcherHandles=[])}else return In;let m=l?new Array(t.length).fill(Jc):Jc;const y=()=>{if(!!v.active)if(e){const _=v.run();(r||u||(l?_.some((R,M)=>xa(R,m[M])):xa(_,m)))&&(h&&h(),un(e,a,3,[_,m===Jc?void 0:l&&m[0]===Jc?[]:m,d]),m=_)}else v.run()};y.allowRecurse=!!e;let I;i==="sync"?I=y:i==="post"?I=()=>qt(y,a&&a.suspense):(y.pre=!0,a&&(y.id=a.uid),I=()=>Cp(y));const v=new bp(c,I);e?n?y():m=v.run():i==="post"?qt(v.run.bind(v),a&&a.suspense):v.run();const E=()=>{v.stop(),a&&a.scope&&yp(a.scope.effects,v)};return f&&f.push(E),E}function Lk(t,e,n){const r=this.proxy,i=it(t)?t.includes(".")?lb(r,t):()=>r[t]:t.bind(r,r);let s;ue(e)?s=e:(s=e.handler,n=e);const o=Ye;eo(this);const a=ub(i,s.bind(r),n);return o?eo(o):ji(),a}function lb(t,e){const n=e.split(".");return()=>{let r=t;for(let i=0;i<n.length&&r;i++)r=r[n[i]];return r}}function Oi(t,e){if(!Me(t)||t.__v_skip||(e=e||new Set,e.has(t)))return t;if(e.add(t),Ct(t))Oi(t.value,e);else if(re(t))for(let n=0;n<t.length;n++)Oi(t[n],e);else if(L_(t)||Vs(t))t.forEach(n=>{Oi(n,e)});else if(U_(t))for(const n in t)Oi(t[n],e);return t}function Mk(){const t={isMounted:!1,isLeaving:!1,isUnmounting:!1,leavingVNodes:new Map};return xp(()=>{t.isMounted=!0}),mb(()=>{t.isUnmounting=!0}),t}const sn=[Function,Array],Fk={name:"BaseTransition",props:{mode:String,appear:Boolean,persisted:Boolean,onBeforeEnter:sn,onEnter:sn,onAfterEnter:sn,onEnterCancelled:sn,onBeforeLeave:sn,onLeave:sn,onAfterLeave:sn,onLeaveCancelled:sn,onBeforeAppear:sn,onAppear:sn,onAfterAppear:sn,onAppearCancelled:sn},setup(t,{slots:e}){const n=IA(),r=Mk();let i;return()=>{const s=e.default&&fb(e.default(),!0);if(!s||!s.length)return;let o=s[0];if(s.length>1){for(const y of s)if(y.type!==En){o=y;break}}const a=_e(t),{mode:c}=a;if(r.isLeaving)return Xh(o);const u=uy(o);if(!u)return Xh(o);const l=Hd(u,a,r,n);Kd(u,l);const h=n.subTree,d=h&&uy(h);let f=!1;const{getTransitionKey:m}=u.type;if(m){const y=m();i===void 0?i=y:y!==i&&(i=y,f=!0)}if(d&&d.type!==En&&(!Ai(u,d)||f)){const y=Hd(d,a,r,n);if(Kd(d,y),c==="out-in")return r.isLeaving=!0,y.afterLeave=()=>{r.isLeaving=!1,n.update.active!==!1&&n.update()},Xh(o);c==="in-out"&&u.type!==En&&(y.delayLeave=(I,v,E)=>{const _=db(r,d);_[String(d.key)]=d,I._leaveCb=()=>{v(),I._leaveCb=void 0,delete l.delayedLeave},l.delayedLeave=E})}return o}}},hb=Fk;function db(t,e){const{leavingVNodes:n}=t;let r=n.get(e.type);return r||(r=Object.create(null),n.set(e.type,r)),r}function Hd(t,e,n,r){const{appear:i,mode:s,persisted:o=!1,onBeforeEnter:a,onEnter:c,onAfterEnter:u,onEnterCancelled:l,onBeforeLeave:h,onLeave:d,onAfterLeave:f,onLeaveCancelled:m,onBeforeAppear:y,onAppear:I,onAfterAppear:v,onAppearCancelled:E}=e,_=String(t.key),R=db(n,t),M=(K,ae)=>{K&&un(K,r,9,ae)},H=(K,ae)=>{const we=ae[1];M(K,ae),re(K)?K.every(ot=>ot.length<=1)&&we():K.length<=1&&we()},ne={mode:s,persisted:o,beforeEnter(K){let ae=a;if(!n.isMounted)if(i)ae=y||a;else return;K._leaveCb&&K._leaveCb(!0);const we=R[_];we&&Ai(t,we)&&we.el._leaveCb&&we.el._leaveCb(),M(ae,[K])},enter(K){let ae=c,we=u,ot=l;if(!n.isMounted)if(i)ae=I||c,we=v||u,ot=E||l;else return;let G=!1;const xe=K._enterCb=yt=>{G||(G=!0,yt?M(ot,[K]):M(we,[K]),ne.delayedLeave&&ne.delayedLeave(),K._enterCb=void 0)};ae?H(ae,[K,xe]):xe()},leave(K,ae){const we=String(t.key);if(K._enterCb&&K._enterCb(!0),n.isUnmounting)return ae();M(h,[K]);let ot=!1;const G=K._leaveCb=xe=>{ot||(ot=!0,ae(),xe?M(m,[K]):M(f,[K]),K._leaveCb=void 0,R[we]===t&&delete R[we])};R[we]=t,d?H(d,[K,G]):G()},clone(K){return Hd(K,e,n,r)}};return ne}function Xh(t){if($l(t))return t=Gr(t),t.children=null,t}function uy(t){return $l(t)?t.children?t.children[0]:void 0:t}function Kd(t,e){t.shapeFlag&6&&t.component?Kd(t.component.subTree,e):t.shapeFlag&128?(t.ssContent.transition=e.clone(t.ssContent),t.ssFallback.transition=e.clone(t.ssFallback)):t.transition=e}function fb(t,e=!1,n){let r=[],i=0;for(let s=0;s<t.length;s++){let o=t[s];const a=n==null?o.key:String(n)+String(o.key!=null?o.key:s);o.type===Nn?(o.patchFlag&128&&i++,r=r.concat(fb(o.children,e,a))):(e||o.type!==En)&&r.push(a!=null?Gr(o,{key:a}):o)}if(i>1)for(let s=0;s<r.length;s++)r[s].patchFlag=-2;return r}function pc(t){return ue(t)?{setup:t,name:t.name}:t}const Cu=t=>!!t.type.__asyncLoader,$l=t=>t.type.__isKeepAlive;function Uk(t,e){pb(t,"a",e)}function Vk(t,e){pb(t,"da",e)}function pb(t,e,n=Ye){const r=t.__wdc||(t.__wdc=()=>{let i=n;for(;i;){if(i.isDeactivated)return;i=i.parent}return t()});if(Bl(e,r,n),n){let i=n.parent;for(;i&&i.parent;)$l(i.parent.vnode)&&$k(r,e,n,i),i=i.parent}}function $k(t,e,n,r){const i=Bl(e,t,r,!0);gb(()=>{yp(r[e],i)},n)}function Bl(t,e,n=Ye,r=!1){if(n){const i=n[t]||(n[t]=[]),s=e.__weh||(e.__weh=(...o)=>{if(n.isUnmounted)return;bo(),eo(n);const a=un(e,n,t,o);return ji(),Io(),a});return r?i.unshift(s):i.push(s),s}}const vr=t=>(e,n=Ye)=>(!Oa||t==="sp")&&Bl(t,(...r)=>e(...r),n),Bk=vr("bm"),xp=vr("m"),qk=vr("bu"),jk=vr("u"),mb=vr("bum"),gb=vr("um"),zk=vr("sp"),Hk=vr("rtg"),Kk=vr("rtc");function Gk(t,e=Ye){Bl("ec",t,e)}function H9(t,e){const n=Zt;if(n===null)return t;const r=zl(n)||n.proxy,i=t.dirs||(t.dirs=[]);for(let s=0;s<e.length;s++){let[o,a,c,u=Re]=e[s];o&&(ue(o)&&(o={mounted:o,updated:o}),o.deep&&Oi(a),i.push({dir:o,instance:r,value:a,oldValue:void 0,arg:c,modifiers:u}))}return t}function vi(t,e,n,r){const i=t.dirs,s=e&&e.dirs;for(let o=0;o<i.length;o++){const a=i[o];s&&(a.oldValue=s[o].value);let c=a.dir[r];c&&(bo(),un(c,n,8,[t.el,a,t,e]),Io())}}const yb="components";function Wk(t,e){return Yk(yb,t,!0,e)||t}const Qk=Symbol();function Yk(t,e,n=!0,r=!1){const i=Zt||Ye;if(i){const s=i.type;if(t===yb){const a=AA(s,!1);if(a&&(a===e||a===Qn(e)||a===Ll(Qn(e))))return s}const o=ly(i[t]||s[t],e)||ly(i.appContext[t],e);return!o&&r?s:o}}function ly(t,e){return t&&(t[e]||t[Qn(e)]||t[Ll(Qn(e))])}function K9(t,e,n,r){let i;const s=n&&n[r];if(re(t)||it(t)){i=new Array(t.length);for(let o=0,a=t.length;o<a;o++)i[o]=e(t[o],o,void 0,s&&s[o])}else if(typeof t=="number"){i=new Array(t);for(let o=0;o<t;o++)i[o]=e(o+1,o,void 0,s&&s[o])}else if(Me(t))if(t[Symbol.iterator])i=Array.from(t,(o,a)=>e(o,a,void 0,s&&s[a]));else{const o=Object.keys(t);i=new Array(o.length);for(let a=0,c=o.length;a<c;a++){const u=o[a];i[a]=e(t[u],u,a,s&&s[a])}}else i=[];return n&&(n[r]=i),i}const Gd=t=>t?Nb(t)?zl(t)||t.proxy:Gd(t.parent):null,ha=Et(Object.create(null),{$:t=>t,$el:t=>t.vnode.el,$data:t=>t.data,$props:t=>t.props,$attrs:t=>t.attrs,$slots:t=>t.slots,$refs:t=>t.refs,$parent:t=>Gd(t.parent),$root:t=>Gd(t.root),$emit:t=>t.emit,$options:t=>Rp(t),$forceUpdate:t=>t.f||(t.f=()=>Cp(t.update)),$nextTick:t=>t.n||(t.n=ib.bind(t.proxy)),$watch:t=>Lk.bind(t)}),Jh=(t,e)=>t!==Re&&!t.__isScriptSetup&&ye(t,e),Xk={get({_:t},e){const{ctx:n,setupState:r,data:i,props:s,accessCache:o,type:a,appContext:c}=t;let u;if(e[0]!=="$"){const f=o[e];if(f!==void 0)switch(f){case 1:return r[e];case 2:return i[e];case 4:return n[e];case 3:return s[e]}else{if(Jh(r,e))return o[e]=1,r[e];if(i!==Re&&ye(i,e))return o[e]=2,i[e];if((u=t.propsOptions[0])&&ye(u,e))return o[e]=3,s[e];if(n!==Re&&ye(n,e))return o[e]=4,n[e];Wd&&(o[e]=0)}}const l=ha[e];let h,d;if(l)return e==="$attrs"&&Qt(t,"get",e),l(t);if((h=a.__cssModules)&&(h=h[e]))return h;if(n!==Re&&ye(n,e))return o[e]=4,n[e];if(d=c.config.globalProperties,ye(d,e))return d[e]},set({_:t},e,n){const{data:r,setupState:i,ctx:s}=t;return Jh(i,e)?(i[e]=n,!0):r!==Re&&ye(r,e)?(r[e]=n,!0):ye(t.props,e)||e[0]==="$"&&e.slice(1)in t?!1:(s[e]=n,!0)},has({_:{data:t,setupState:e,accessCache:n,ctx:r,appContext:i,propsOptions:s}},o){let a;return!!n[o]||t!==Re&&ye(t,o)||Jh(e,o)||(a=s[0])&&ye(a,o)||ye(r,o)||ye(ha,o)||ye(i.config.globalProperties,o)},defineProperty(t,e,n){return n.get!=null?t._.accessCache[e]=0:ye(n,"value")&&this.set(t,e,n.value,null),Reflect.defineProperty(t,e,n)}};let Wd=!0;function Jk(t){const e=Rp(t),n=t.proxy,r=t.ctx;Wd=!1,e.beforeCreate&&hy(e.beforeCreate,t,"bc");const{data:i,computed:s,methods:o,watch:a,provide:c,inject:u,created:l,beforeMount:h,mounted:d,beforeUpdate:f,updated:m,activated:y,deactivated:I,beforeDestroy:v,beforeUnmount:E,destroyed:_,unmounted:R,render:M,renderTracked:H,renderTriggered:ne,errorCaptured:K,serverPrefetch:ae,expose:we,inheritAttrs:ot,components:G,directives:xe,filters:yt}=e;if(u&&Zk(u,r,null,t.appContext.config.unwrapInjectedRef),o)for(const ke in o){const Te=o[ke];ue(Te)&&(r[ke]=Te.bind(n))}if(i){const ke=i.call(n,n);Me(ke)&&(t.data=fc(ke))}if(Wd=!0,s)for(const ke in s){const Te=s[ke],fn=ue(Te)?Te.bind(n,n):ue(Te.get)?Te.get.bind(n,n):In,yi=!ue(Te)&&ue(Te.set)?Te.set.bind(n):In,pn=je({get:fn,set:yi});Object.defineProperty(r,ke,{enumerable:!0,configurable:!0,get:()=>pn.value,set:$t=>pn.value=$t})}if(a)for(const ke in a)vb(a[ke],r,n,ke);if(c){const ke=ue(c)?c.call(n):c;Reflect.ownKeys(ke).forEach(Te=>{Au(Te,ke[Te])})}l&&hy(l,t,"c");function Be(ke,Te){re(Te)?Te.forEach(fn=>ke(fn.bind(n))):Te&&ke(Te.bind(n))}if(Be(Bk,h),Be(xp,d),Be(qk,f),Be(jk,m),Be(Uk,y),Be(Vk,I),Be(Gk,K),Be(Kk,H),Be(Hk,ne),Be(mb,E),Be(gb,R),Be(zk,ae),re(we))if(we.length){const ke=t.exposed||(t.exposed={});we.forEach(Te=>{Object.defineProperty(ke,Te,{get:()=>n[Te],set:fn=>n[Te]=fn})})}else t.exposed||(t.exposed={});M&&t.render===In&&(t.render=M),ot!=null&&(t.inheritAttrs=ot),G&&(t.components=G),xe&&(t.directives=xe)}function Zk(t,e,n=In,r=!1){re(t)&&(t=Qd(t));for(const i in t){const s=t[i];let o;Me(s)?"default"in s?o=Hn(s.from||i,s.default,!0):o=Hn(s.from||i):o=Hn(s),Ct(o)&&r?Object.defineProperty(e,i,{enumerable:!0,configurable:!0,get:()=>o.value,set:a=>o.value=a}):e[i]=o}}function hy(t,e,n){un(re(t)?t.map(r=>r.bind(e.proxy)):t.bind(e.proxy),e,n)}function vb(t,e,n,r){const i=r.includes(".")?lb(n,r):()=>n[r];if(it(t)){const s=e[t];ue(s)&&la(i,s)}else if(ue(t))la(i,t.bind(n));else if(Me(t))if(re(t))t.forEach(s=>vb(s,e,n,r));else{const s=ue(t.handler)?t.handler.bind(n):e[t.handler];ue(s)&&la(i,s,t)}}function Rp(t){const e=t.type,{mixins:n,extends:r}=e,{mixins:i,optionsCache:s,config:{optionMergeStrategies:o}}=t.appContext,a=s.get(e);let c;return a?c=a:!i.length&&!n&&!r?c=e:(c={},i.length&&i.forEach(u=>Gu(c,u,o,!0)),Gu(c,e,o)),Me(e)&&s.set(e,c),c}function Gu(t,e,n,r=!1){const{mixins:i,extends:s}=e;s&&Gu(t,s,n,!0),i&&i.forEach(o=>Gu(t,o,n,!0));for(const o in e)if(!(r&&o==="expose")){const a=eA[o]||n&&n[o];t[o]=a?a(t[o],e[o]):e[o]}return t}const eA={data:dy,props:Ei,emits:Ei,methods:Ei,computed:Ei,beforeCreate:Ot,created:Ot,beforeMount:Ot,mounted:Ot,beforeUpdate:Ot,updated:Ot,beforeDestroy:Ot,beforeUnmount:Ot,destroyed:Ot,unmounted:Ot,activated:Ot,deactivated:Ot,errorCaptured:Ot,serverPrefetch:Ot,components:Ei,directives:Ei,watch:nA,provide:dy,inject:tA};function dy(t,e){return e?t?function(){return Et(ue(t)?t.call(this,this):t,ue(e)?e.call(this,this):e)}:e:t}function tA(t,e){return Ei(Qd(t),Qd(e))}function Qd(t){if(re(t)){const e={};for(let n=0;n<t.length;n++)e[t[n]]=t[n];return e}return t}function Ot(t,e){return t?[...new Set([].concat(t,e))]:e}function Ei(t,e){return t?Et(Et(Object.create(null),t),e):e}function nA(t,e){if(!t)return e;if(!e)return t;const n=Et(Object.create(null),t);for(const r in e)n[r]=Ot(t[r],e[r]);return n}function rA(t,e,n,r=!1){const i={},s={};zu(s,jl,1),t.propsDefaults=Object.create(null),wb(t,e,i,s);for(const o in t.propsOptions[0])o in i||(i[o]=void 0);n?t.props=r?i:mk(i):t.type.props?t.props=i:t.props=s,t.attrs=s}function iA(t,e,n,r){const{props:i,attrs:s,vnode:{patchFlag:o}}=t,a=_e(i),[c]=t.propsOptions;let u=!1;if((r||o>0)&&!(o&16)){if(o&8){const l=t.vnode.dynamicProps;for(let h=0;h<l.length;h++){let d=l[h];if(Ul(t.emitsOptions,d))continue;const f=e[d];if(c)if(ye(s,d))f!==s[d]&&(s[d]=f,u=!0);else{const m=Qn(d);i[m]=Yd(c,a,m,f,t,!1)}else f!==s[d]&&(s[d]=f,u=!0)}}}else{wb(t,e,i,s)&&(u=!0);let l;for(const h in a)(!e||!ye(e,h)&&((l=_o(h))===h||!ye(e,l)))&&(c?n&&(n[h]!==void 0||n[l]!==void 0)&&(i[h]=Yd(c,a,h,void 0,t,!0)):delete i[h]);if(s!==a)for(const h in s)(!e||!ye(e,h)&&!0)&&(delete s[h],u=!0)}u&&lr(t,"set","$attrs")}function wb(t,e,n,r){const[i,s]=t.propsOptions;let o=!1,a;if(e)for(let c in e){if(Su(c))continue;const u=e[c];let l;i&&ye(i,l=Qn(c))?!s||!s.includes(l)?n[l]=u:(a||(a={}))[l]=u:Ul(t.emitsOptions,c)||(!(c in r)||u!==r[c])&&(r[c]=u,o=!0)}if(s){const c=_e(n),u=a||Re;for(let l=0;l<s.length;l++){const h=s[l];n[h]=Yd(i,c,h,u[h],t,!ye(u,h))}}return o}function Yd(t,e,n,r,i,s){const o=t[n];if(o!=null){const a=ye(o,"default");if(a&&r===void 0){const c=o.default;if(o.type!==Function&&ue(c)){const{propsDefaults:u}=i;n in u?r=u[n]:(eo(i),r=u[n]=c.call(null,e),ji())}else r=c}o[0]&&(s&&!a?r=!1:o[1]&&(r===""||r===_o(n))&&(r=!0))}return r}function _b(t,e,n=!1){const r=e.propsCache,i=r.get(t);if(i)return i;const s=t.props,o={},a=[];let c=!1;if(!ue(t)){const l=h=>{c=!0;const[d,f]=_b(h,e,!0);Et(o,d),f&&a.push(...f)};!n&&e.mixins.length&&e.mixins.forEach(l),t.extends&&l(t.extends),t.mixins&&t.mixins.forEach(l)}if(!s&&!c)return Me(t)&&r.set(t,Us),Us;if(re(s))for(let l=0;l<s.length;l++){const h=Qn(s[l]);fy(h)&&(o[h]=Re)}else if(s)for(const l in s){const h=Qn(l);if(fy(h)){const d=s[l],f=o[h]=re(d)||ue(d)?{type:d}:Object.assign({},d);if(f){const m=gy(Boolean,f.type),y=gy(String,f.type);f[0]=m>-1,f[1]=y<0||m<y,(m>-1||ye(f,"default"))&&a.push(h)}}}const u=[o,a];return Me(t)&&r.set(t,u),u}function fy(t){return t[0]!=="$"}function py(t){const e=t&&t.toString().match(/^\s*(function|class) (\w+)/);return e?e[2]:t===null?"null":""}function my(t,e){return py(t)===py(e)}function gy(t,e){return re(e)?e.findIndex(n=>my(n,t)):ue(e)&&my(e,t)?0:-1}const bb=t=>t[0]==="_"||t==="$stable",Np=t=>re(t)?t.map(Pn):[Pn(t)],sA=(t,e,n)=>{if(e._n)return e;const r=Ck((...i)=>Np(e(...i)),n);return r._c=!1,r},Ib=(t,e,n)=>{const r=t._ctx;for(const i in t){if(bb(i))continue;const s=t[i];if(ue(s))e[i]=sA(i,s,r);else if(s!=null){const o=Np(s);e[i]=()=>o}}},Eb=(t,e)=>{const n=Np(e);t.slots.default=()=>n},oA=(t,e)=>{if(t.vnode.shapeFlag&32){const n=e._;n?(t.slots=_e(e),zu(e,"_",n)):Ib(e,t.slots={})}else t.slots={},e&&Eb(t,e);zu(t.slots,jl,1)},aA=(t,e,n)=>{const{vnode:r,slots:i}=t;let s=!0,o=Re;if(r.shapeFlag&32){const a=e._;a?n&&a===1?s=!1:(Et(i,e),!n&&a===1&&delete i._):(s=!e.$stable,Ib(e,i)),o=e}else e&&(Eb(t,e),o={default:1});if(s)for(const a in i)!bb(a)&&!(a in o)&&delete i[a]};function Tb(){return{app:null,config:{isNativeTag:PS,performance:!1,globalProperties:{},optionMergeStrategies:{},errorHandler:void 0,warnHandler:void 0,compilerOptions:{}},mixins:[],components:{},directives:{},provides:Object.create(null),optionsCache:new WeakMap,propsCache:new WeakMap,emitsCache:new WeakMap}}let cA=0;function uA(t,e){return function(r,i=null){ue(r)||(r=Object.assign({},r)),i!=null&&!Me(i)&&(i=null);const s=Tb(),o=new Set;let a=!1;const c=s.app={_uid:cA++,_component:r,_props:i,_container:null,_context:s,_instance:null,version:NA,get config(){return s.config},set config(u){},use(u,...l){return o.has(u)||(u&&ue(u.install)?(o.add(u),u.install(c,...l)):ue(u)&&(o.add(u),u(c,...l))),c},mixin(u){return s.mixins.includes(u)||s.mixins.push(u),c},component(u,l){return l?(s.components[u]=l,c):s.components[u]},directive(u,l){return l?(s.directives[u]=l,c):s.directives[u]},mount(u,l,h){if(!a){const d=Ht(r,i);return d.appContext=s,l&&e?e(d,u):t(d,u,h),a=!0,c._container=u,u.__vue_app__=c,zl(d.component)||d.component.proxy}},unmount(){a&&(t(null,c._container),delete c._container.__vue_app__)},provide(u,l){return s.provides[u]=l,c}};return c}}function Xd(t,e,n,r,i=!1){if(re(t)){t.forEach((d,f)=>Xd(d,e&&(re(e)?e[f]:e),n,r,i));return}if(Cu(r)&&!i)return;const s=r.shapeFlag&4?zl(r.component)||r.component.proxy:r.el,o=i?null:s,{i:a,r:c}=t,u=e&&e.r,l=a.refs===Re?a.refs={}:a.refs,h=a.setupState;if(u!=null&&u!==c&&(it(u)?(l[u]=null,ye(h,u)&&(h[u]=null)):Ct(u)&&(u.value=null)),ue(c))zr(c,a,12,[o,l]);else{const d=it(c),f=Ct(c);if(d||f){const m=()=>{if(t.f){const y=d?ye(h,c)?h[c]:l[c]:c.value;i?re(y)&&yp(y,s):re(y)?y.includes(s)||y.push(s):d?(l[c]=[s],ye(h,c)&&(h[c]=l[c])):(c.value=[s],t.k&&(l[t.k]=c.value))}else d?(l[c]=o,ye(h,c)&&(h[c]=o)):f&&(c.value=o,t.k&&(l[t.k]=o))};o?(m.id=-1,qt(m,n)):m()}}}const qt=Ok;function lA(t){return hA(t)}function hA(t,e){const n=VS();n.__VUE__=!0;const{insert:r,remove:i,patchProp:s,createElement:o,createText:a,createComment:c,setText:u,setElementText:l,parentNode:h,nextSibling:d,setScopeId:f=In,insertStaticContent:m}=t,y=(p,g,T,S=null,C=null,O=null,B=!1,D=null,F=!!g.dynamicChildren)=>{if(p===g)return;p&&!Ai(p,g)&&(S=V(p),$t(p,C,O,!0),p=null),g.patchFlag===-2&&(F=!1,g.dynamicChildren=null);const{type:N,ref:ee,shapeFlag:W}=g;switch(N){case ql:I(p,g,T,S);break;case En:v(p,g,T,S);break;case xu:p==null&&E(g,T,S,B);break;case Nn:G(p,g,T,S,C,O,B,D,F);break;default:W&1?M(p,g,T,S,C,O,B,D,F):W&6?xe(p,g,T,S,C,O,B,D,F):(W&64||W&128)&&N.process(p,g,T,S,C,O,B,D,F,ge)}ee!=null&&C&&Xd(ee,p&&p.ref,O,g||p,!g)},I=(p,g,T,S)=>{if(p==null)r(g.el=a(g.children),T,S);else{const C=g.el=p.el;g.children!==p.children&&u(C,g.children)}},v=(p,g,T,S)=>{p==null?r(g.el=c(g.children||""),T,S):g.el=p.el},E=(p,g,T,S)=>{[p.el,p.anchor]=m(p.children,g,T,S,p.el,p.anchor)},_=({el:p,anchor:g},T,S)=>{let C;for(;p&&p!==g;)C=d(p),r(p,T,S),p=C;r(g,T,S)},R=({el:p,anchor:g})=>{let T;for(;p&&p!==g;)T=d(p),i(p),p=T;i(g)},M=(p,g,T,S,C,O,B,D,F)=>{B=B||g.type==="svg",p==null?H(g,T,S,C,O,B,D,F):ae(p,g,C,O,B,D,F)},H=(p,g,T,S,C,O,B,D)=>{let F,N;const{type:ee,props:W,shapeFlag:te,transition:se,dirs:he}=p;if(F=p.el=o(p.type,O,W&&W.is,W),te&8?l(F,p.children):te&16&&K(p.children,F,null,S,C,O&&ee!=="foreignObject",B,D),he&&vi(p,null,S,"created"),ne(F,p,p.scopeId,B,S),W){for(const Se in W)Se!=="value"&&!Su(Se)&&s(F,Se,null,W[Se],O,p.children,S,C,j);"value"in W&&s(F,"value",null,W.value),(N=W.onVnodeBeforeMount)&&Rn(N,S,p)}he&&vi(p,null,S,"beforeMount");const Ae=(!C||C&&!C.pendingBranch)&&se&&!se.persisted;Ae&&se.beforeEnter(F),r(F,g,T),((N=W&&W.onVnodeMounted)||Ae||he)&&qt(()=>{N&&Rn(N,S,p),Ae&&se.enter(F),he&&vi(p,null,S,"mounted")},C)},ne=(p,g,T,S,C)=>{if(T&&f(p,T),S)for(let O=0;O<S.length;O++)f(p,S[O]);if(C){let O=C.subTree;if(g===O){const B=C.vnode;ne(p,B,B.scopeId,B.slotScopeIds,C.parent)}}},K=(p,g,T,S,C,O,B,D,F=0)=>{for(let N=F;N<p.length;N++){const ee=p[N]=D?Fr(p[N]):Pn(p[N]);y(null,ee,g,T,S,C,O,B,D)}},ae=(p,g,T,S,C,O,B)=>{const D=g.el=p.el;let{patchFlag:F,dynamicChildren:N,dirs:ee}=g;F|=p.patchFlag&16;const W=p.props||Re,te=g.props||Re;let se;T&&wi(T,!1),(se=te.onVnodeBeforeUpdate)&&Rn(se,T,g,p),ee&&vi(g,p,T,"beforeUpdate"),T&&wi(T,!0);const he=C&&g.type!=="foreignObject";if(N?we(p.dynamicChildren,N,D,T,S,he,O):B||Te(p,g,D,null,T,S,he,O,!1),F>0){if(F&16)ot(D,g,W,te,T,S,C);else if(F&2&&W.class!==te.class&&s(D,"class",null,te.class,C),F&4&&s(D,"style",W.style,te.style,C),F&8){const Ae=g.dynamicProps;for(let Se=0;Se<Ae.length;Se++){const tt=Ae[Se],mn=W[tt],bs=te[tt];(bs!==mn||tt==="value")&&s(D,tt,mn,bs,C,p.children,T,S,j)}}F&1&&p.children!==g.children&&l(D,g.children)}else!B&&N==null&&ot(D,g,W,te,T,S,C);((se=te.onVnodeUpdated)||ee)&&qt(()=>{se&&Rn(se,T,g,p),ee&&vi(g,p,T,"updated")},S)},we=(p,g,T,S,C,O,B)=>{for(let D=0;D<g.length;D++){const F=p[D],N=g[D],ee=F.el&&(F.type===Nn||!Ai(F,N)||F.shapeFlag&70)?h(F.el):T;y(F,N,ee,null,S,C,O,B,!0)}},ot=(p,g,T,S,C,O,B)=>{if(T!==S){if(T!==Re)for(const D in T)!Su(D)&&!(D in S)&&s(p,D,T[D],null,B,g.children,C,O,j);for(const D in S){if(Su(D))continue;const F=S[D],N=T[D];F!==N&&D!=="value"&&s(p,D,N,F,B,g.children,C,O,j)}"value"in S&&s(p,"value",T.value,S.value)}},G=(p,g,T,S,C,O,B,D,F)=>{const N=g.el=p?p.el:a(""),ee=g.anchor=p?p.anchor:a("");let{patchFlag:W,dynamicChildren:te,slotScopeIds:se}=g;se&&(D=D?D.concat(se):se),p==null?(r(N,T,S),r(ee,T,S),K(g.children,T,ee,C,O,B,D,F)):W>0&&W&64&&te&&p.dynamicChildren?(we(p.dynamicChildren,te,T,C,O,B,D),(g.key!=null||C&&g===C.subTree)&&Sb(p,g,!0)):Te(p,g,T,ee,C,O,B,D,F)},xe=(p,g,T,S,C,O,B,D,F)=>{g.slotScopeIds=D,p==null?g.shapeFlag&512?C.ctx.activate(g,T,S,B,F):yt(g,T,S,C,O,B,F):Ar(p,g,F)},yt=(p,g,T,S,C,O,B)=>{const D=p.component=bA(p,S,C);if($l(p)&&(D.ctx.renderer=ge),EA(D),D.asyncDep){if(C&&C.registerDep(D,Be),!p.el){const F=D.subTree=Ht(En);v(null,F,g,T)}return}Be(D,p,g,T,C,O,B)},Ar=(p,g,T)=>{const S=g.component=p.component;if(Nk(p,g,T))if(S.asyncDep&&!S.asyncResolved){ke(S,g,T);return}else S.next=g,Tk(S.update),S.update();else g.el=p.el,S.vnode=g},Be=(p,g,T,S,C,O,B)=>{const D=()=>{if(p.isMounted){let{next:ee,bu:W,u:te,parent:se,vnode:he}=p,Ae=ee,Se;wi(p,!1),ee?(ee.el=he.el,ke(p,ee,B)):ee=he,W&&ku(W),(Se=ee.props&&ee.props.onVnodeBeforeUpdate)&&Rn(Se,se,ee,he),wi(p,!0);const tt=Yh(p),mn=p.subTree;p.subTree=tt,y(mn,tt,h(mn.el),V(mn),p,C,O),ee.el=tt.el,Ae===null&&Pk(p,tt.el),te&&qt(te,C),(Se=ee.props&&ee.props.onVnodeUpdated)&&qt(()=>Rn(Se,se,ee,he),C)}else{let ee;const{el:W,props:te}=g,{bm:se,m:he,parent:Ae}=p,Se=Cu(g);if(wi(p,!1),se&&ku(se),!Se&&(ee=te&&te.onVnodeBeforeMount)&&Rn(ee,Ae,g),wi(p,!0),W&&le){const tt=()=>{p.subTree=Yh(p),le(W,p.subTree,p,C,null)};Se?g.type.__asyncLoader().then(()=>!p.isUnmounted&&tt()):tt()}else{const tt=p.subTree=Yh(p);y(null,tt,T,S,p,C,O),g.el=tt.el}if(he&&qt(he,C),!Se&&(ee=te&&te.onVnodeMounted)){const tt=g;qt(()=>Rn(ee,Ae,tt),C)}(g.shapeFlag&256||Ae&&Cu(Ae.vnode)&&Ae.vnode.shapeFlag&256)&&p.a&&qt(p.a,C),p.isMounted=!0,g=T=S=null}},F=p.effect=new bp(D,()=>Cp(N),p.scope),N=p.update=()=>F.run();N.id=p.uid,wi(p,!0),N()},ke=(p,g,T)=>{g.component=p;const S=p.vnode.props;p.vnode=g,p.next=null,iA(p,g.props,S,T),aA(p,g.children,T),bo(),ay(),Io()},Te=(p,g,T,S,C,O,B,D,F=!1)=>{const N=p&&p.children,ee=p?p.shapeFlag:0,W=g.children,{patchFlag:te,shapeFlag:se}=g;if(te>0){if(te&128){yi(N,W,T,S,C,O,B,D,F);return}else if(te&256){fn(N,W,T,S,C,O,B,D,F);return}}se&8?(ee&16&&j(N,C,O),W!==N&&l(T,W)):ee&16?se&16?yi(N,W,T,S,C,O,B,D,F):j(N,C,O,!0):(ee&8&&l(T,""),se&16&&K(W,T,S,C,O,B,D,F))},fn=(p,g,T,S,C,O,B,D,F)=>{p=p||Us,g=g||Us;const N=p.length,ee=g.length,W=Math.min(N,ee);let te;for(te=0;te<W;te++){const se=g[te]=F?Fr(g[te]):Pn(g[te]);y(p[te],se,T,null,C,O,B,D,F)}N>ee?j(p,C,O,!0,!1,W):K(g,T,S,C,O,B,D,F,W)},yi=(p,g,T,S,C,O,B,D,F)=>{let N=0;const ee=g.length;let W=p.length-1,te=ee-1;for(;N<=W&&N<=te;){const se=p[N],he=g[N]=F?Fr(g[N]):Pn(g[N]);if(Ai(se,he))y(se,he,T,null,C,O,B,D,F);else break;N++}for(;N<=W&&N<=te;){const se=p[W],he=g[te]=F?Fr(g[te]):Pn(g[te]);if(Ai(se,he))y(se,he,T,null,C,O,B,D,F);else break;W--,te--}if(N>W){if(N<=te){const se=te+1,he=se<ee?g[se].el:S;for(;N<=te;)y(null,g[N]=F?Fr(g[N]):Pn(g[N]),T,he,C,O,B,D,F),N++}}else if(N>te)for(;N<=W;)$t(p[N],C,O,!0),N++;else{const se=N,he=N,Ae=new Map;for(N=he;N<=te;N++){const Xt=g[N]=F?Fr(g[N]):Pn(g[N]);Xt.key!=null&&Ae.set(Xt.key,N)}let Se,tt=0;const mn=te-he+1;let bs=!1,Yg=0;const $o=new Array(mn);for(N=0;N<mn;N++)$o[N]=0;for(N=se;N<=W;N++){const Xt=p[N];if(tt>=mn){$t(Xt,C,O,!0);continue}let xn;if(Xt.key!=null)xn=Ae.get(Xt.key);else for(Se=he;Se<=te;Se++)if($o[Se-he]===0&&Ai(Xt,g[Se])){xn=Se;break}xn===void 0?$t(Xt,C,O,!0):($o[xn-he]=N+1,xn>=Yg?Yg=xn:bs=!0,y(Xt,g[xn],T,null,C,O,B,D,F),tt++)}const Xg=bs?dA($o):Us;for(Se=Xg.length-1,N=mn-1;N>=0;N--){const Xt=he+N,xn=g[Xt],Jg=Xt+1<ee?g[Xt+1].el:S;$o[N]===0?y(null,xn,T,Jg,C,O,B,D,F):bs&&(Se<0||N!==Xg[Se]?pn(xn,T,Jg,2):Se--)}}},pn=(p,g,T,S,C=null)=>{const{el:O,type:B,transition:D,children:F,shapeFlag:N}=p;if(N&6){pn(p.component.subTree,g,T,S);return}if(N&128){p.suspense.move(g,T,S);return}if(N&64){B.move(p,g,T,ge);return}if(B===Nn){r(O,g,T);for(let W=0;W<F.length;W++)pn(F[W],g,T,S);r(p.anchor,g,T);return}if(B===xu){_(p,g,T);return}if(S!==2&&N&1&&D)if(S===0)D.beforeEnter(O),r(O,g,T),qt(()=>D.enter(O),C);else{const{leave:W,delayLeave:te,afterLeave:se}=D,he=()=>r(O,g,T),Ae=()=>{W(O,()=>{he(),se&&se()})};te?te(O,he,Ae):Ae()}else r(O,g,T)},$t=(p,g,T,S=!1,C=!1)=>{const{type:O,props:B,ref:D,children:F,dynamicChildren:N,shapeFlag:ee,patchFlag:W,dirs:te}=p;if(D!=null&&Xd(D,null,T,p,!0),ee&256){g.ctx.deactivate(p);return}const se=ee&1&&te,he=!Cu(p);let Ae;if(he&&(Ae=B&&B.onVnodeBeforeUnmount)&&Rn(Ae,g,p),ee&6)k(p.component,T,S);else{if(ee&128){p.suspense.unmount(T,S);return}se&&vi(p,null,g,"beforeUnmount"),ee&64?p.type.remove(p,g,T,C,ge,S):N&&(O!==Nn||W>0&&W&64)?j(N,g,T,!1,!0):(O===Nn&&W&384||!C&&ee&16)&&j(F,g,T),S&&_s(p)}(he&&(Ae=B&&B.onVnodeUnmounted)||se)&&qt(()=>{Ae&&Rn(Ae,g,p),se&&vi(p,null,g,"unmounted")},T)},_s=p=>{const{type:g,el:T,anchor:S,transition:C}=p;if(g===Nn){Kc(T,S);return}if(g===xu){R(p);return}const O=()=>{i(T),C&&!C.persisted&&C.afterLeave&&C.afterLeave()};if(p.shapeFlag&1&&C&&!C.persisted){const{leave:B,delayLeave:D}=C,F=()=>B(T,O);D?D(p.el,O,F):F()}else O()},Kc=(p,g)=>{let T;for(;p!==g;)T=d(p),i(p),p=T;i(g)},k=(p,g,T)=>{const{bum:S,scope:C,update:O,subTree:B,um:D}=p;S&&ku(S),C.stop(),O&&(O.active=!1,$t(B,p,g,T)),D&&qt(D,g),qt(()=>{p.isUnmounted=!0},g),g&&g.pendingBranch&&!g.isUnmounted&&p.asyncDep&&!p.asyncResolved&&p.suspenseId===g.pendingId&&(g.deps--,g.deps===0&&g.resolve())},j=(p,g,T,S=!1,C=!1,O=0)=>{for(let B=O;B<p.length;B++)$t(p[B],g,T,S,C)},V=p=>p.shapeFlag&6?V(p.component.subTree):p.shapeFlag&128?p.suspense.next():d(p.anchor||p.el),Z=(p,g,T)=>{p==null?g._vnode&&$t(g._vnode,null,null,!0):y(g._vnode||null,p,g,null,null,null,T),ay(),ob(),g._vnode=p},ge={p:y,um:$t,m:pn,r:_s,mt:yt,mc:K,pc:Te,pbc:we,n:V,o:t};let qe,le;return e&&([qe,le]=e(ge)),{render:Z,hydrate:qe,createApp:uA(Z,qe)}}function wi({effect:t,update:e},n){t.allowRecurse=e.allowRecurse=n}function Sb(t,e,n=!1){const r=t.children,i=e.children;if(re(r)&&re(i))for(let s=0;s<r.length;s++){const o=r[s];let a=i[s];a.shapeFlag&1&&!a.dynamicChildren&&((a.patchFlag<=0||a.patchFlag===32)&&(a=i[s]=Fr(i[s]),a.el=o.el),n||Sb(o,a)),a.type===ql&&(a.el=o.el)}}function dA(t){const e=t.slice(),n=[0];let r,i,s,o,a;const c=t.length;for(r=0;r<c;r++){const u=t[r];if(u!==0){if(i=n[n.length-1],t[i]<u){e[r]=i,n.push(r);continue}for(s=0,o=n.length-1;s<o;)a=s+o>>1,t[n[a]]<u?s=a+1:o=a;u<t[n[s]]&&(s>0&&(e[r]=n[s-1]),n[s]=r)}}for(s=n.length,o=n[s-1];s-- >0;)n[s]=o,o=e[o];return n}const fA=t=>t.__isTeleport,Nn=Symbol(void 0),ql=Symbol(void 0),En=Symbol(void 0),xu=Symbol(void 0),da=[];let wn=null;function kb(t=!1){da.push(wn=t?null:[])}function pA(){da.pop(),wn=da[da.length-1]||null}let Da=1;function yy(t){Da+=t}function Ab(t){return t.dynamicChildren=Da>0?wn||Us:null,pA(),Da>0&&wn&&wn.push(t),t}function G9(t,e,n,r,i,s){return Ab(Rb(t,e,n,r,i,s,!0))}function Cb(t,e,n,r,i){return Ab(Ht(t,e,n,r,i,!0))}function Jd(t){return t?t.__v_isVNode===!0:!1}function Ai(t,e){return t.type===e.type&&t.key===e.key}const jl="__vInternal",xb=({key:t})=>t!=null?t:null,Ru=({ref:t,ref_key:e,ref_for:n})=>t!=null?it(t)||Ct(t)||ue(t)?{i:Zt,r:t,k:e,f:!!n}:t:null;function Rb(t,e=null,n=null,r=0,i=null,s=t===Nn?0:1,o=!1,a=!1){const c={__v_isVNode:!0,__v_skip:!0,type:t,props:e,key:e&&xb(e),ref:e&&Ru(e),scopeId:Vl,slotScopeIds:null,children:n,component:null,suspense:null,ssContent:null,ssFallback:null,dirs:null,transition:null,el:null,anchor:null,target:null,targetAnchor:null,staticCount:0,shapeFlag:s,patchFlag:r,dynamicProps:i,dynamicChildren:null,appContext:null,ctx:Zt};return a?(Pp(c,n),s&128&&t.normalize(c)):n&&(c.shapeFlag|=it(n)?8:16),Da>0&&!o&&wn&&(c.patchFlag>0||s&6)&&c.patchFlag!==32&&wn.push(c),c}const Ht=mA;function mA(t,e=null,n=null,r=0,i=null,s=!1){if((!t||t===Qk)&&(t=En),Jd(t)){const a=Gr(t,e,!0);return n&&Pp(a,n),Da>0&&!s&&wn&&(a.shapeFlag&6?wn[wn.indexOf(t)]=a:wn.push(a)),a.patchFlag|=-2,a}if(CA(t)&&(t=t.__vccOpts),e){e=gA(e);let{class:a,style:c}=e;a&&!it(a)&&(e.class=mp(a)),Me(c)&&(Y_(c)&&!re(c)&&(c=Et({},c)),e.style=pp(c))}const o=it(t)?1:Dk(t)?128:fA(t)?64:Me(t)?4:ue(t)?2:0;return Rb(t,e,n,r,i,o,s,!0)}function gA(t){return t?Y_(t)||jl in t?Et({},t):t:null}function Gr(t,e,n=!1){const{props:r,ref:i,patchFlag:s,children:o}=t,a=e?vA(r||{},e):r;return{__v_isVNode:!0,__v_skip:!0,type:t.type,props:a,key:a&&xb(a),ref:e&&e.ref?n&&i?re(i)?i.concat(Ru(e)):[i,Ru(e)]:Ru(e):i,scopeId:t.scopeId,slotScopeIds:t.slotScopeIds,children:o,target:t.target,targetAnchor:t.targetAnchor,staticCount:t.staticCount,shapeFlag:t.shapeFlag,patchFlag:e&&t.type!==Nn?s===-1?16:s|16:s,dynamicProps:t.dynamicProps,dynamicChildren:t.dynamicChildren,appContext:t.appContext,dirs:t.dirs,transition:t.transition,component:t.component,suspense:t.suspense,ssContent:t.ssContent&&Gr(t.ssContent),ssFallback:t.ssFallback&&Gr(t.ssFallback),el:t.el,anchor:t.anchor,ctx:t.ctx,ce:t.ce}}function yA(t=" ",e=0){return Ht(ql,null,t,e)}function W9(t,e){const n=Ht(xu,null,t);return n.staticCount=e,n}function Q9(t="",e=!1){return e?(kb(),Cb(En,null,t)):Ht(En,null,t)}function Pn(t){return t==null||typeof t=="boolean"?Ht(En):re(t)?Ht(Nn,null,t.slice()):typeof t=="object"?Fr(t):Ht(ql,null,String(t))}function Fr(t){return t.el===null&&t.patchFlag!==-1||t.memo?t:Gr(t)}function Pp(t,e){let n=0;const{shapeFlag:r}=t;if(e==null)e=null;else if(re(e))n=16;else if(typeof e=="object")if(r&65){const i=e.default;i&&(i._c&&(i._d=!1),Pp(t,i()),i._c&&(i._d=!0));return}else{n=32;const i=e._;!i&&!(jl in e)?e._ctx=Zt:i===3&&Zt&&(Zt.slots._===1?e._=1:(e._=2,t.patchFlag|=1024))}else ue(e)?(e={default:e,_ctx:Zt},n=32):(e=String(e),r&64?(n=16,e=[yA(e)]):n=8);t.children=e,t.shapeFlag|=n}function vA(...t){const e={};for(let n=0;n<t.length;n++){const r=t[n];for(const i in r)if(i==="class")e.class!==r.class&&(e.class=mp([e.class,r.class]));else if(i==="style")e.style=pp([e.style,r.style]);else if(Pl(i)){const s=e[i],o=r[i];o&&s!==o&&!(re(s)&&s.includes(o))&&(e[i]=s?[].concat(s,o):o)}else i!==""&&(e[i]=r[i])}return e}function Rn(t,e,n,r=null){un(t,e,7,[n,r])}const wA=Tb();let _A=0;function bA(t,e,n){const r=t.type,i=(e?e.appContext:t.appContext)||wA,s={uid:_A++,vnode:t,type:r,parent:e,appContext:i,root:null,next:null,subTree:null,effect:null,update:null,scope:new $S(!0),render:null,proxy:null,exposed:null,exposeProxy:null,withProxy:null,provides:e?e.provides:Object.create(i.provides),accessCache:null,renderCache:[],components:null,directives:null,propsOptions:_b(r,i),emitsOptions:cb(r,i),emit:null,emitted:null,propsDefaults:Re,inheritAttrs:r.inheritAttrs,ctx:Re,data:Re,props:Re,attrs:Re,slots:Re,refs:Re,setupState:Re,setupContext:null,suspense:n,suspenseId:n?n.pendingId:0,asyncDep:null,asyncResolved:!1,isMounted:!1,isUnmounted:!1,isDeactivated:!1,bc:null,c:null,bm:null,m:null,bu:null,u:null,um:null,bum:null,da:null,a:null,rtg:null,rtc:null,ec:null,sp:null};return s.ctx={_:s},s.root=e?e.root:s,s.emit=Ak.bind(null,s),t.ce&&t.ce(s),s}let Ye=null;const IA=()=>Ye||Zt,eo=t=>{Ye=t,t.scope.on()},ji=()=>{Ye&&Ye.scope.off(),Ye=null};function Nb(t){return t.vnode.shapeFlag&4}let Oa=!1;function EA(t,e=!1){Oa=e;const{props:n,children:r}=t.vnode,i=Nb(t);rA(t,n,i,e),oA(t,r);const s=i?TA(t,e):void 0;return Oa=!1,s}function TA(t,e){const n=t.type;t.accessCache=Object.create(null),t.proxy=X_(new Proxy(t.ctx,Xk));const{setup:r}=n;if(r){const i=t.setupContext=r.length>1?kA(t):null;eo(t),bo();const s=zr(r,t,0,[t.props,i]);if(Io(),ji(),M_(s)){if(s.then(ji,ji),e)return s.then(o=>{vy(t,o,e)}).catch(o=>{Fl(o,t,0)});t.asyncDep=s}else vy(t,s,e)}else Pb(t,e)}function vy(t,e,n){ue(e)?t.type.__ssrInlineRender?t.ssrRender=e:t.render=e:Me(e)&&(t.setupState=tb(e)),Pb(t,n)}let wy;function Pb(t,e,n){const r=t.type;if(!t.render){if(!e&&wy&&!r.render){const i=r.template||Rp(t).template;if(i){const{isCustomElement:s,compilerOptions:o}=t.appContext.config,{delimiters:a,compilerOptions:c}=r,u=Et(Et({isCustomElement:s,delimiters:a},o),c);r.render=wy(i,u)}}t.render=r.render||In}eo(t),bo(),Jk(t),Io(),ji()}function SA(t){return new Proxy(t.attrs,{get(e,n){return Qt(t,"get","$attrs"),e[n]}})}function kA(t){const e=r=>{t.exposed=r||{}};let n;return{get attrs(){return n||(n=SA(t))},slots:t.slots,emit:t.emit,expose:e}}function zl(t){if(t.exposed)return t.exposeProxy||(t.exposeProxy=new Proxy(tb(X_(t.exposed)),{get(e,n){if(n in e)return e[n];if(n in ha)return ha[n](t)},has(e,n){return n in e||n in ha}}))}function AA(t,e=!0){return ue(t)?t.displayName||t.name:t.name||e&&t.__name}function CA(t){return ue(t)&&"__vccOpts"in t}const je=(t,e)=>bk(t,e,Oa);function mc(t,e,n){const r=arguments.length;return r===2?Me(e)&&!re(e)?Jd(e)?Ht(t,null,[e]):Ht(t,e):Ht(t,null,e):(r>3?n=Array.prototype.slice.call(arguments,2):r===3&&Jd(n)&&(n=[n]),Ht(t,e,n))}const xA=Symbol(""),RA=()=>Hn(xA),NA="3.2.47",PA="http://www.w3.org/2000/svg",Ci=typeof document<"u"?document:null,_y=Ci&&Ci.createElement("template"),DA={insert:(t,e,n)=>{e.insertBefore(t,n||null)},remove:t=>{const e=t.parentNode;e&&e.removeChild(t)},createElement:(t,e,n,r)=>{const i=e?Ci.createElementNS(PA,t):Ci.createElement(t,n?{is:n}:void 0);return t==="select"&&r&&r.multiple!=null&&i.setAttribute("multiple",r.multiple),i},createText:t=>Ci.createTextNode(t),createComment:t=>Ci.createComment(t),setText:(t,e)=>{t.nodeValue=e},setElementText:(t,e)=>{t.textContent=e},parentNode:t=>t.parentNode,nextSibling:t=>t.nextSibling,querySelector:t=>Ci.querySelector(t),setScopeId(t,e){t.setAttribute(e,"")},insertStaticContent(t,e,n,r,i,s){const o=n?n.previousSibling:e.lastChild;if(i&&(i===s||i.nextSibling))for(;e.insertBefore(i.cloneNode(!0),n),!(i===s||!(i=i.nextSibling)););else{_y.innerHTML=r?`<svg>${t}</svg>`:t;const a=_y.content;if(r){const c=a.firstChild;for(;c.firstChild;)a.appendChild(c.firstChild);a.removeChild(c)}e.insertBefore(a,n)}return[o?o.nextSibling:e.firstChild,n?n.previousSibling:e.lastChild]}};function OA(t,e,n){const r=t._vtc;r&&(e=(e?[e,...r]:[...r]).join(" ")),e==null?t.removeAttribute("class"):n?t.setAttribute("class",e):t.className=e}function LA(t,e,n){const r=t.style,i=it(n);if(n&&!i){if(e&&!it(e))for(const s in e)n[s]==null&&Zd(r,s,"");for(const s in n)Zd(r,s,n[s])}else{const s=r.display;i?e!==n&&(r.cssText=n):e&&t.removeAttribute("style"),"_vod"in t&&(r.display=s)}}const by=/\s*!important$/;function Zd(t,e,n){if(re(n))n.forEach(r=>Zd(t,e,r));else if(n==null&&(n=""),e.startsWith("--"))t.setProperty(e,n);else{const r=MA(t,e);by.test(n)?t.setProperty(_o(r),n.replace(by,""),"important"):t[r]=n}}const Iy=["Webkit","Moz","ms"],Zh={};function MA(t,e){const n=Zh[e];if(n)return n;let r=Qn(e);if(r!=="filter"&&r in t)return Zh[e]=r;r=Ll(r);for(let i=0;i<Iy.length;i++){const s=Iy[i]+r;if(s in t)return Zh[e]=s}return e}const Ey="http://www.w3.org/1999/xlink";function FA(t,e,n,r,i){if(r&&e.startsWith("xlink:"))n==null?t.removeAttributeNS(Ey,e.slice(6,e.length)):t.setAttributeNS(Ey,e,n);else{const s=NS(e);n==null||s&&!D_(n)?t.removeAttribute(e):t.setAttribute(e,s?"":n)}}function UA(t,e,n,r,i,s,o){if(e==="innerHTML"||e==="textContent"){r&&o(r,i,s),t[e]=n==null?"":n;return}if(e==="value"&&t.tagName!=="PROGRESS"&&!t.tagName.includes("-")){t._value=n;const c=n==null?"":n;(t.value!==c||t.tagName==="OPTION")&&(t.value=c),n==null&&t.removeAttribute(e);return}let a=!1;if(n===""||n==null){const c=typeof t[e];c==="boolean"?n=D_(n):n==null&&c==="string"?(n="",a=!0):c==="number"&&(n=0,a=!0)}try{t[e]=n}catch{}a&&t.removeAttribute(e)}function xs(t,e,n,r){t.addEventListener(e,n,r)}function VA(t,e,n,r){t.removeEventListener(e,n,r)}function $A(t,e,n,r,i=null){const s=t._vei||(t._vei={}),o=s[e];if(r&&o)o.value=r;else{const[a,c]=BA(e);if(r){const u=s[e]=zA(r,i);xs(t,a,u,c)}else o&&(VA(t,a,o,c),s[e]=void 0)}}const Ty=/(?:Once|Passive|Capture)$/;function BA(t){let e;if(Ty.test(t)){e={};let r;for(;r=t.match(Ty);)t=t.slice(0,t.length-r[0].length),e[r[0].toLowerCase()]=!0}return[t[2]===":"?t.slice(3):_o(t.slice(2)),e]}let ed=0;const qA=Promise.resolve(),jA=()=>ed||(qA.then(()=>ed=0),ed=Date.now());function zA(t,e){const n=r=>{if(!r._vts)r._vts=Date.now();else if(r._vts<=n.attached)return;un(HA(r,n.value),e,5,[r])};return n.value=t,n.attached=jA(),n}function HA(t,e){if(re(e)){const n=t.stopImmediatePropagation;return t.stopImmediatePropagation=()=>{n.call(t),t._stopped=!0},e.map(r=>i=>!i._stopped&&r&&r(i))}else return e}const Sy=/^on[a-z]/,KA=(t,e,n,r,i=!1,s,o,a,c)=>{e==="class"?OA(t,r,i):e==="style"?LA(t,n,r):Pl(e)?gp(e)||$A(t,e,n,r,o):(e[0]==="."?(e=e.slice(1),!0):e[0]==="^"?(e=e.slice(1),!1):GA(t,e,r,i))?UA(t,e,r,s,o,a,c):(e==="true-value"?t._trueValue=r:e==="false-value"&&(t._falseValue=r),FA(t,e,r,i))};function GA(t,e,n,r){return r?!!(e==="innerHTML"||e==="textContent"||e in t&&Sy.test(e)&&ue(n)):e==="spellcheck"||e==="draggable"||e==="translate"||e==="form"||e==="list"&&t.tagName==="INPUT"||e==="type"&&t.tagName==="TEXTAREA"||Sy.test(e)&&it(n)?!1:e in t}const xr="transition",Bo="animation",Db=(t,{slots:e})=>mc(hb,WA(t),e);Db.displayName="Transition";const Ob={name:String,type:String,css:{type:Boolean,default:!0},duration:[String,Number,Object],enterFromClass:String,enterActiveClass:String,enterToClass:String,appearFromClass:String,appearActiveClass:String,appearToClass:String,leaveFromClass:String,leaveActiveClass:String,leaveToClass:String};Db.props=Et({},hb.props,Ob);const _i=(t,e=[])=>{re(t)?t.forEach(n=>n(...e)):t&&t(...e)},ky=t=>t?re(t)?t.some(e=>e.length>1):t.length>1:!1;function WA(t){const e={};for(const G in t)G in Ob||(e[G]=t[G]);if(t.css===!1)return e;const{name:n="v",type:r,duration:i,enterFromClass:s=`${n}-enter-from`,enterActiveClass:o=`${n}-enter-active`,enterToClass:a=`${n}-enter-to`,appearFromClass:c=s,appearActiveClass:u=o,appearToClass:l=a,leaveFromClass:h=`${n}-leave-from`,leaveActiveClass:d=`${n}-leave-active`,leaveToClass:f=`${n}-leave-to`}=t,m=QA(i),y=m&&m[0],I=m&&m[1],{onBeforeEnter:v,onEnter:E,onEnterCancelled:_,onLeave:R,onLeaveCancelled:M,onBeforeAppear:H=v,onAppear:ne=E,onAppearCancelled:K=_}=e,ae=(G,xe,yt)=>{bi(G,xe?l:a),bi(G,xe?u:o),yt&&yt()},we=(G,xe)=>{G._isLeaving=!1,bi(G,h),bi(G,f),bi(G,d),xe&&xe()},ot=G=>(xe,yt)=>{const Ar=G?ne:E,Be=()=>ae(xe,G,yt);_i(Ar,[xe,Be]),Ay(()=>{bi(xe,G?c:s),Rr(xe,G?l:a),ky(Ar)||Cy(xe,r,y,Be)})};return Et(e,{onBeforeEnter(G){_i(v,[G]),Rr(G,s),Rr(G,o)},onBeforeAppear(G){_i(H,[G]),Rr(G,c),Rr(G,u)},onEnter:ot(!1),onAppear:ot(!0),onLeave(G,xe){G._isLeaving=!0;const yt=()=>we(G,xe);Rr(G,h),JA(),Rr(G,d),Ay(()=>{!G._isLeaving||(bi(G,h),Rr(G,f),ky(R)||Cy(G,r,I,yt))}),_i(R,[G,yt])},onEnterCancelled(G){ae(G,!1),_i(_,[G])},onAppearCancelled(G){ae(G,!0),_i(K,[G])},onLeaveCancelled(G){we(G),_i(M,[G])}})}function QA(t){if(t==null)return null;if(Me(t))return[td(t.enter),td(t.leave)];{const e=td(t);return[e,e]}}function td(t){return US(t)}function Rr(t,e){e.split(/\s+/).forEach(n=>n&&t.classList.add(n)),(t._vtc||(t._vtc=new Set)).add(e)}function bi(t,e){e.split(/\s+/).forEach(r=>r&&t.classList.remove(r));const{_vtc:n}=t;n&&(n.delete(e),n.size||(t._vtc=void 0))}function Ay(t){requestAnimationFrame(()=>{requestAnimationFrame(t)})}let YA=0;function Cy(t,e,n,r){const i=t._endId=++YA,s=()=>{i===t._endId&&r()};if(n)return setTimeout(s,n);const{type:o,timeout:a,propCount:c}=XA(t,e);if(!o)return r();const u=o+"end";let l=0;const h=()=>{t.removeEventListener(u,d),s()},d=f=>{f.target===t&&++l>=c&&h()};setTimeout(()=>{l<c&&h()},a+1),t.addEventListener(u,d)}function XA(t,e){const n=window.getComputedStyle(t),r=m=>(n[m]||"").split(", "),i=r(`${xr}Delay`),s=r(`${xr}Duration`),o=xy(i,s),a=r(`${Bo}Delay`),c=r(`${Bo}Duration`),u=xy(a,c);let l=null,h=0,d=0;e===xr?o>0&&(l=xr,h=o,d=s.length):e===Bo?u>0&&(l=Bo,h=u,d=c.length):(h=Math.max(o,u),l=h>0?o>u?xr:Bo:null,d=l?l===xr?s.length:c.length:0);const f=l===xr&&/\b(transform|all)(,|$)/.test(r(`${xr}Property`).toString());return{type:l,timeout:h,propCount:d,hasTransform:f}}function xy(t,e){for(;t.length<e.length;)t=t.concat(t);return Math.max(...e.map((n,r)=>Ry(n)+Ry(t[r])))}function Ry(t){return Number(t.slice(0,-1).replace(",","."))*1e3}function JA(){return document.body.offsetHeight}const Ny=t=>{const e=t.props["onUpdate:modelValue"]||!1;return re(e)?n=>ku(e,n):e};function ZA(t){t.target.composing=!0}function Py(t){const e=t.target;e.composing&&(e.composing=!1,e.dispatchEvent(new Event("input")))}const Y9={created(t,{modifiers:{lazy:e,trim:n,number:r}},i){t._assign=Ny(i);const s=r||i.props&&i.props.type==="number";xs(t,e?"change":"input",o=>{if(o.target.composing)return;let a=t.value;n&&(a=a.trim()),s&&(a=Vd(a)),t._assign(a)}),n&&xs(t,"change",()=>{t.value=t.value.trim()}),e||(xs(t,"compositionstart",ZA),xs(t,"compositionend",Py),xs(t,"change",Py))},mounted(t,{value:e}){t.value=e==null?"":e},beforeUpdate(t,{value:e,modifiers:{lazy:n,trim:r,number:i}},s){if(t._assign=Ny(s),t.composing||document.activeElement===t&&t.type!=="range"&&(n||r&&t.value.trim()===e||(i||t.type==="number")&&Vd(t.value)===e))return;const o=e==null?"":e;t.value!==o&&(t.value=o)}},eC=["ctrl","shift","alt","meta"],tC={stop:t=>t.stopPropagation(),prevent:t=>t.preventDefault(),self:t=>t.target!==t.currentTarget,ctrl:t=>!t.ctrlKey,shift:t=>!t.shiftKey,alt:t=>!t.altKey,meta:t=>!t.metaKey,left:t=>"button"in t&&t.button!==0,middle:t=>"button"in t&&t.button!==1,right:t=>"button"in t&&t.button!==2,exact:(t,e)=>eC.some(n=>t[`${n}Key`]&&!e.includes(n))},X9=(t,e)=>(n,...r)=>{for(let i=0;i<e.length;i++){const s=tC[e[i]];if(s&&s(n,e))return}return t(n,...r)},nC=Et({patchProp:KA},DA);let Dy;function rC(){return Dy||(Dy=lA(nC))}const iC=(...t)=>{const e=rC().createApp(...t),{mount:n}=e;return e.mount=r=>{const i=sC(r);if(!i)return;const s=e._component;!ue(s)&&!s.render&&!s.template&&(s.template=i.innerHTML),i.innerHTML="";const o=n(i,!1,i instanceof SVGElement);return i instanceof Element&&(i.removeAttribute("v-cloak"),i.setAttribute("data-v-app","")),o},e};function sC(t){return it(t)?document.querySelector(t):t}const oC={__name:"App",setup(t){xp(()=>{window.matchMedia("(prefers-color-scheme: dark)").addEventListener("change",e)});const e=n=>{const r=document.querySelector("link[rel='icon']");n.matches?r.href="/favicon-dark.png":r.href="/favicon-light.png"};return(n,r)=>{const i=Wk("router-view");return kb(),Cb(i)}}},aC="modulepreload",cC=function(t){return"/"+t},Oy={},Is=function(e,n,r){if(!n||n.length===0)return e();const i=document.getElementsByTagName("link");return Promise.all(n.map(s=>{if(s=cC(s),s in Oy)return;Oy[s]=!0;const o=s.endsWith(".css"),a=o?'[rel="stylesheet"]':"";if(!!r)for(let l=i.length-1;l>=0;l--){const h=i[l];if(h.href===s&&(!o||h.rel==="stylesheet"))return}else if(document.querySelector(`link[href="${s}"]${a}`))return;const u=document.createElement("link");if(u.rel=o?"stylesheet":aC,o||(u.as="script",u.crossOrigin=""),u.href=s,document.head.appendChild(u),o)return new Promise((l,h)=>{u.addEventListener("load",l),u.addEventListener("error",()=>h(new Error(`Unable to preload CSS for ${s}`)))})})).then(()=>e())};/*!
  * vue-router v4.1.6
  * (c) 2022 Eduardo San Martin Morote
  * @license MIT
  */const Rs=typeof window<"u";function uC(t){return t.__esModule||t[Symbol.toStringTag]==="Module"}const be=Object.assign;function nd(t,e){const n={};for(const r in e){const i=e[r];n[r]=Sn(i)?i.map(t):t(i)}return n}const fa=()=>{},Sn=Array.isArray,lC=/\/$/,hC=t=>t.replace(lC,"");function rd(t,e,n="/"){let r,i={},s="",o="";const a=e.indexOf("#");let c=e.indexOf("?");return a<c&&a>=0&&(c=-1),c>-1&&(r=e.slice(0,c),s=e.slice(c+1,a>-1?a:e.length),i=t(s)),a>-1&&(r=r||e.slice(0,a),o=e.slice(a,e.length)),r=mC(r!=null?r:e,n),{fullPath:r+(s&&"?")+s+o,path:r,query:i,hash:o}}function dC(t,e){const n=e.query?t(e.query):"";return e.path+(n&&"?")+n+(e.hash||"")}function Ly(t,e){return!e||!t.toLowerCase().startsWith(e.toLowerCase())?t:t.slice(e.length)||"/"}function fC(t,e,n){const r=e.matched.length-1,i=n.matched.length-1;return r>-1&&r===i&&to(e.matched[r],n.matched[i])&&Lb(e.params,n.params)&&t(e.query)===t(n.query)&&e.hash===n.hash}function to(t,e){return(t.aliasOf||t)===(e.aliasOf||e)}function Lb(t,e){if(Object.keys(t).length!==Object.keys(e).length)return!1;for(const n in t)if(!pC(t[n],e[n]))return!1;return!0}function pC(t,e){return Sn(t)?My(t,e):Sn(e)?My(e,t):t===e}function My(t,e){return Sn(e)?t.length===e.length&&t.every((n,r)=>n===e[r]):t.length===1&&t[0]===e}function mC(t,e){if(t.startsWith("/"))return t;if(!t)return e;const n=e.split("/"),r=t.split("/");let i=n.length-1,s,o;for(s=0;s<r.length;s++)if(o=r[s],o!==".")if(o==="..")i>1&&i--;else break;return n.slice(0,i).join("/")+"/"+r.slice(s-(s===r.length?1:0)).join("/")}var La;(function(t){t.pop="pop",t.push="push"})(La||(La={}));var pa;(function(t){t.back="back",t.forward="forward",t.unknown=""})(pa||(pa={}));function gC(t){if(!t)if(Rs){const e=document.querySelector("base");t=e&&e.getAttribute("href")||"/",t=t.replace(/^\w+:\/\/[^\/]+/,"")}else t="/";return t[0]!=="/"&&t[0]!=="#"&&(t="/"+t),hC(t)}const yC=/^[^#]+#/;function vC(t,e){return t.replace(yC,"#")+e}function wC(t,e){const n=document.documentElement.getBoundingClientRect(),r=t.getBoundingClientRect();return{behavior:e.behavior,left:r.left-n.left-(e.left||0),top:r.top-n.top-(e.top||0)}}const Hl=()=>({left:window.pageXOffset,top:window.pageYOffset});function _C(t){let e;if("el"in t){const n=t.el,r=typeof n=="string"&&n.startsWith("#"),i=typeof n=="string"?r?document.getElementById(n.slice(1)):document.querySelector(n):n;if(!i)return;e=wC(i,t)}else e=t;"scrollBehavior"in document.documentElement.style?window.scrollTo(e):window.scrollTo(e.left!=null?e.left:window.pageXOffset,e.top!=null?e.top:window.pageYOffset)}function Fy(t,e){return(history.state?history.state.position-e:-1)+t}const ef=new Map;function bC(t,e){ef.set(t,e)}function IC(t){const e=ef.get(t);return ef.delete(t),e}let EC=()=>location.protocol+"//"+location.host;function Mb(t,e){const{pathname:n,search:r,hash:i}=e,s=t.indexOf("#");if(s>-1){let a=i.includes(t.slice(s))?t.slice(s).length:1,c=i.slice(a);return c[0]!=="/"&&(c="/"+c),Ly(c,"")}return Ly(n,t)+r+i}function TC(t,e,n,r){let i=[],s=[],o=null;const a=({state:d})=>{const f=Mb(t,location),m=n.value,y=e.value;let I=0;if(d){if(n.value=f,e.value=d,o&&o===m){o=null;return}I=y?d.position-y.position:0}else r(f);i.forEach(v=>{v(n.value,m,{delta:I,type:La.pop,direction:I?I>0?pa.forward:pa.back:pa.unknown})})};function c(){o=n.value}function u(d){i.push(d);const f=()=>{const m=i.indexOf(d);m>-1&&i.splice(m,1)};return s.push(f),f}function l(){const{history:d}=window;!d.state||d.replaceState(be({},d.state,{scroll:Hl()}),"")}function h(){for(const d of s)d();s=[],window.removeEventListener("popstate",a),window.removeEventListener("beforeunload",l)}return window.addEventListener("popstate",a),window.addEventListener("beforeunload",l),{pauseListeners:c,listen:u,destroy:h}}function Uy(t,e,n,r=!1,i=!1){return{back:t,current:e,forward:n,replaced:r,position:window.history.length,scroll:i?Hl():null}}function SC(t){const{history:e,location:n}=window,r={value:Mb(t,n)},i={value:e.state};i.value||s(r.value,{back:null,current:r.value,forward:null,position:e.length-1,replaced:!0,scroll:null},!0);function s(c,u,l){const h=t.indexOf("#"),d=h>-1?(n.host&&document.querySelector("base")?t:t.slice(h))+c:EC()+t+c;try{e[l?"replaceState":"pushState"](u,"",d),i.value=u}catch(f){console.error(f),n[l?"replace":"assign"](d)}}function o(c,u){const l=be({},e.state,Uy(i.value.back,c,i.value.forward,!0),u,{position:i.value.position});s(c,l,!0),r.value=c}function a(c,u){const l=be({},i.value,e.state,{forward:c,scroll:Hl()});s(l.current,l,!0);const h=be({},Uy(r.value,c,null),{position:l.position+1},u);s(c,h,!1),r.value=c}return{location:r,state:i,push:a,replace:o}}function kC(t){t=gC(t);const e=SC(t),n=TC(t,e.state,e.location,e.replace);function r(s,o=!0){o||n.pauseListeners(),history.go(s)}const i=be({location:"",base:t,go:r,createHref:vC.bind(null,t)},e,n);return Object.defineProperty(i,"location",{enumerable:!0,get:()=>e.location.value}),Object.defineProperty(i,"state",{enumerable:!0,get:()=>e.state.value}),i}function AC(t){return typeof t=="string"||t&&typeof t=="object"}function Fb(t){return typeof t=="string"||typeof t=="symbol"}const Nr={path:"/",name:void 0,params:{},query:{},hash:"",fullPath:"/",matched:[],meta:{},redirectedFrom:void 0},Ub=Symbol("");var Vy;(function(t){t[t.aborted=4]="aborted",t[t.cancelled=8]="cancelled",t[t.duplicated=16]="duplicated"})(Vy||(Vy={}));function no(t,e){return be(new Error,{type:t,[Ub]:!0},e)}function Zn(t,e){return t instanceof Error&&Ub in t&&(e==null||!!(t.type&e))}const $y="[^/]+?",CC={sensitive:!1,strict:!1,start:!0,end:!0},xC=/[.+*?^${}()[\]/\\]/g;function RC(t,e){const n=be({},CC,e),r=[];let i=n.start?"^":"";const s=[];for(const u of t){const l=u.length?[]:[90];n.strict&&!u.length&&(i+="/");for(let h=0;h<u.length;h++){const d=u[h];let f=40+(n.sensitive?.25:0);if(d.type===0)h||(i+="/"),i+=d.value.replace(xC,"\\$&"),f+=40;else if(d.type===1){const{value:m,repeatable:y,optional:I,regexp:v}=d;s.push({name:m,repeatable:y,optional:I});const E=v||$y;if(E!==$y){f+=10;try{new RegExp(`(${E})`)}catch(R){throw new Error(`Invalid custom RegExp for param "${m}" (${E}): `+R.message)}}let _=y?`((?:${E})(?:/(?:${E}))*)`:`(${E})`;h||(_=I&&u.length<2?`(?:/${_})`:"/"+_),I&&(_+="?"),i+=_,f+=20,I&&(f+=-8),y&&(f+=-20),E===".*"&&(f+=-50)}l.push(f)}r.push(l)}if(n.strict&&n.end){const u=r.length-1;r[u][r[u].length-1]+=.7000000000000001}n.strict||(i+="/?"),n.end?i+="$":n.strict&&(i+="(?:/|$)");const o=new RegExp(i,n.sensitive?"":"i");function a(u){const l=u.match(o),h={};if(!l)return null;for(let d=1;d<l.length;d++){const f=l[d]||"",m=s[d-1];h[m.name]=f&&m.repeatable?f.split("/"):f}return h}function c(u){let l="",h=!1;for(const d of t){(!h||!l.endsWith("/"))&&(l+="/"),h=!1;for(const f of d)if(f.type===0)l+=f.value;else if(f.type===1){const{value:m,repeatable:y,optional:I}=f,v=m in u?u[m]:"";if(Sn(v)&&!y)throw new Error(`Provided param "${m}" is an array but it is not repeatable (* or + modifiers)`);const E=Sn(v)?v.join("/"):v;if(!E)if(I)d.length<2&&(l.endsWith("/")?l=l.slice(0,-1):h=!0);else throw new Error(`Missing required param "${m}"`);l+=E}}return l||"/"}return{re:o,score:r,keys:s,parse:a,stringify:c}}function NC(t,e){let n=0;for(;n<t.length&&n<e.length;){const r=e[n]-t[n];if(r)return r;n++}return t.length<e.length?t.length===1&&t[0]===40+40?-1:1:t.length>e.length?e.length===1&&e[0]===40+40?1:-1:0}function PC(t,e){let n=0;const r=t.score,i=e.score;for(;n<r.length&&n<i.length;){const s=NC(r[n],i[n]);if(s)return s;n++}if(Math.abs(i.length-r.length)===1){if(By(r))return 1;if(By(i))return-1}return i.length-r.length}function By(t){const e=t[t.length-1];return t.length>0&&e[e.length-1]<0}const DC={type:0,value:""},OC=/[a-zA-Z0-9_]/;function LC(t){if(!t)return[[]];if(t==="/")return[[DC]];if(!t.startsWith("/"))throw new Error(`Invalid path "${t}"`);function e(f){throw new Error(`ERR (${n})/"${u}": ${f}`)}let n=0,r=n;const i=[];let s;function o(){s&&i.push(s),s=[]}let a=0,c,u="",l="";function h(){!u||(n===0?s.push({type:0,value:u}):n===1||n===2||n===3?(s.length>1&&(c==="*"||c==="+")&&e(`A repeatable param (${u}) must be alone in its segment. eg: '/:ids+.`),s.push({type:1,value:u,regexp:l,repeatable:c==="*"||c==="+",optional:c==="*"||c==="?"})):e("Invalid state to consume buffer"),u="")}function d(){u+=c}for(;a<t.length;){if(c=t[a++],c==="\\"&&n!==2){r=n,n=4;continue}switch(n){case 0:c==="/"?(u&&h(),o()):c===":"?(h(),n=1):d();break;case 4:d(),n=r;break;case 1:c==="("?n=2:OC.test(c)?d():(h(),n=0,c!=="*"&&c!=="?"&&c!=="+"&&a--);break;case 2:c===")"?l[l.length-1]=="\\"?l=l.slice(0,-1)+c:n=3:l+=c;break;case 3:h(),n=0,c!=="*"&&c!=="?"&&c!=="+"&&a--,l="";break;default:e("Unknown state");break}}return n===2&&e(`Unfinished custom RegExp for param "${u}"`),h(),o(),i}function MC(t,e,n){const r=RC(LC(t.path),n),i=be(r,{record:t,parent:e,children:[],alias:[]});return e&&!i.record.aliasOf==!e.record.aliasOf&&e.children.push(i),i}function FC(t,e){const n=[],r=new Map;e=zy({strict:!1,end:!0,sensitive:!1},e);function i(l){return r.get(l)}function s(l,h,d){const f=!d,m=UC(l);m.aliasOf=d&&d.record;const y=zy(e,l),I=[m];if("alias"in l){const _=typeof l.alias=="string"?[l.alias]:l.alias;for(const R of _)I.push(be({},m,{components:d?d.record.components:m.components,path:R,aliasOf:d?d.record:m}))}let v,E;for(const _ of I){const{path:R}=_;if(h&&R[0]!=="/"){const M=h.record.path,H=M[M.length-1]==="/"?"":"/";_.path=h.record.path+(R&&H+R)}if(v=MC(_,h,y),d?d.alias.push(v):(E=E||v,E!==v&&E.alias.push(v),f&&l.name&&!jy(v)&&o(l.name)),m.children){const M=m.children;for(let H=0;H<M.length;H++)s(M[H],v,d&&d.children[H])}d=d||v,(v.record.components&&Object.keys(v.record.components).length||v.record.name||v.record.redirect)&&c(v)}return E?()=>{o(E)}:fa}function o(l){if(Fb(l)){const h=r.get(l);h&&(r.delete(l),n.splice(n.indexOf(h),1),h.children.forEach(o),h.alias.forEach(o))}else{const h=n.indexOf(l);h>-1&&(n.splice(h,1),l.record.name&&r.delete(l.record.name),l.children.forEach(o),l.alias.forEach(o))}}function a(){return n}function c(l){let h=0;for(;h<n.length&&PC(l,n[h])>=0&&(l.record.path!==n[h].record.path||!Vb(l,n[h]));)h++;n.splice(h,0,l),l.record.name&&!jy(l)&&r.set(l.record.name,l)}function u(l,h){let d,f={},m,y;if("name"in l&&l.name){if(d=r.get(l.name),!d)throw no(1,{location:l});y=d.record.name,f=be(qy(h.params,d.keys.filter(E=>!E.optional).map(E=>E.name)),l.params&&qy(l.params,d.keys.map(E=>E.name))),m=d.stringify(f)}else if("path"in l)m=l.path,d=n.find(E=>E.re.test(m)),d&&(f=d.parse(m),y=d.record.name);else{if(d=h.name?r.get(h.name):n.find(E=>E.re.test(h.path)),!d)throw no(1,{location:l,currentLocation:h});y=d.record.name,f=be({},h.params,l.params),m=d.stringify(f)}const I=[];let v=d;for(;v;)I.unshift(v.record),v=v.parent;return{name:y,path:m,params:f,matched:I,meta:$C(I)}}return t.forEach(l=>s(l)),{addRoute:s,resolve:u,removeRoute:o,getRoutes:a,getRecordMatcher:i}}function qy(t,e){const n={};for(const r of e)r in t&&(n[r]=t[r]);return n}function UC(t){return{path:t.path,redirect:t.redirect,name:t.name,meta:t.meta||{},aliasOf:void 0,beforeEnter:t.beforeEnter,props:VC(t),children:t.children||[],instances:{},leaveGuards:new Set,updateGuards:new Set,enterCallbacks:{},components:"components"in t?t.components||null:t.component&&{default:t.component}}}function VC(t){const e={},n=t.props||!1;if("component"in t)e.default=n;else for(const r in t.components)e[r]=typeof n=="boolean"?n:n[r];return e}function jy(t){for(;t;){if(t.record.aliasOf)return!0;t=t.parent}return!1}function $C(t){return t.reduce((e,n)=>be(e,n.meta),{})}function zy(t,e){const n={};for(const r in t)n[r]=r in e?e[r]:t[r];return n}function Vb(t,e){return e.children.some(n=>n===t||Vb(t,n))}const $b=/#/g,BC=/&/g,qC=/\//g,jC=/=/g,zC=/\?/g,Bb=/\+/g,HC=/%5B/g,KC=/%5D/g,qb=/%5E/g,GC=/%60/g,jb=/%7B/g,WC=/%7C/g,zb=/%7D/g,QC=/%20/g;function Dp(t){return encodeURI(""+t).replace(WC,"|").replace(HC,"[").replace(KC,"]")}function YC(t){return Dp(t).replace(jb,"{").replace(zb,"}").replace(qb,"^")}function tf(t){return Dp(t).replace(Bb,"%2B").replace(QC,"+").replace($b,"%23").replace(BC,"%26").replace(GC,"`").replace(jb,"{").replace(zb,"}").replace(qb,"^")}function XC(t){return tf(t).replace(jC,"%3D")}function JC(t){return Dp(t).replace($b,"%23").replace(zC,"%3F")}function ZC(t){return t==null?"":JC(t).replace(qC,"%2F")}function Wu(t){try{return decodeURIComponent(""+t)}catch{}return""+t}function ex(t){const e={};if(t===""||t==="?")return e;const r=(t[0]==="?"?t.slice(1):t).split("&");for(let i=0;i<r.length;++i){const s=r[i].replace(Bb," "),o=s.indexOf("="),a=Wu(o<0?s:s.slice(0,o)),c=o<0?null:Wu(s.slice(o+1));if(a in e){let u=e[a];Sn(u)||(u=e[a]=[u]),u.push(c)}else e[a]=c}return e}function Hy(t){let e="";for(let n in t){const r=t[n];if(n=XC(n),r==null){r!==void 0&&(e+=(e.length?"&":"")+n);continue}(Sn(r)?r.map(s=>s&&tf(s)):[r&&tf(r)]).forEach(s=>{s!==void 0&&(e+=(e.length?"&":"")+n,s!=null&&(e+="="+s))})}return e}function tx(t){const e={};for(const n in t){const r=t[n];r!==void 0&&(e[n]=Sn(r)?r.map(i=>i==null?null:""+i):r==null?r:""+r)}return e}const nx=Symbol(""),Ky=Symbol(""),Kl=Symbol(""),Hb=Symbol(""),nf=Symbol("");function qo(){let t=[];function e(r){return t.push(r),()=>{const i=t.indexOf(r);i>-1&&t.splice(i,1)}}function n(){t=[]}return{add:e,list:()=>t,reset:n}}function Ur(t,e,n,r,i){const s=r&&(r.enterCallbacks[i]=r.enterCallbacks[i]||[]);return()=>new Promise((o,a)=>{const c=h=>{h===!1?a(no(4,{from:n,to:e})):h instanceof Error?a(h):AC(h)?a(no(2,{from:e,to:h})):(s&&r.enterCallbacks[i]===s&&typeof h=="function"&&s.push(h),o())},u=t.call(r&&r.instances[i],e,n,c);let l=Promise.resolve(u);t.length<3&&(l=l.then(c)),l.catch(h=>a(h))})}function id(t,e,n,r){const i=[];for(const s of t)for(const o in s.components){let a=s.components[o];if(!(e!=="beforeRouteEnter"&&!s.instances[o]))if(rx(a)){const u=(a.__vccOpts||a)[e];u&&i.push(Ur(u,n,r,s,o))}else{let c=a();i.push(()=>c.then(u=>{if(!u)return Promise.reject(new Error(`Couldn't resolve component "${o}" at "${s.path}"`));const l=uC(u)?u.default:u;s.components[o]=l;const d=(l.__vccOpts||l)[e];return d&&Ur(d,n,r,s,o)()}))}}return i}function rx(t){return typeof t=="object"||"displayName"in t||"props"in t||"__vccOpts"in t}function Gy(t){const e=Hn(Kl),n=Hn(Hb),r=je(()=>e.resolve(Bs(t.to))),i=je(()=>{const{matched:c}=r.value,{length:u}=c,l=c[u-1],h=n.matched;if(!l||!h.length)return-1;const d=h.findIndex(to.bind(null,l));if(d>-1)return d;const f=Wy(c[u-2]);return u>1&&Wy(l)===f&&h[h.length-1].path!==f?h.findIndex(to.bind(null,c[u-2])):d}),s=je(()=>i.value>-1&&ax(n.params,r.value.params)),o=je(()=>i.value>-1&&i.value===n.matched.length-1&&Lb(n.params,r.value.params));function a(c={}){return ox(c)?e[Bs(t.replace)?"replace":"push"](Bs(t.to)).catch(fa):Promise.resolve()}return{route:r,href:je(()=>r.value.href),isActive:s,isExactActive:o,navigate:a}}const ix=pc({name:"RouterLink",compatConfig:{MODE:3},props:{to:{type:[String,Object],required:!0},replace:Boolean,activeClass:String,exactActiveClass:String,custom:Boolean,ariaCurrentValue:{type:String,default:"page"}},useLink:Gy,setup(t,{slots:e}){const n=fc(Gy(t)),{options:r}=Hn(Kl),i=je(()=>({[Qy(t.activeClass,r.linkActiveClass,"router-link-active")]:n.isActive,[Qy(t.exactActiveClass,r.linkExactActiveClass,"router-link-exact-active")]:n.isExactActive}));return()=>{const s=e.default&&e.default(n);return t.custom?s:mc("a",{"aria-current":n.isExactActive?t.ariaCurrentValue:null,href:n.href,onClick:n.navigate,class:i.value},s)}}}),sx=ix;function ox(t){if(!(t.metaKey||t.altKey||t.ctrlKey||t.shiftKey)&&!t.defaultPrevented&&!(t.button!==void 0&&t.button!==0)){if(t.currentTarget&&t.currentTarget.getAttribute){const e=t.currentTarget.getAttribute("target");if(/\b_blank\b/i.test(e))return}return t.preventDefault&&t.preventDefault(),!0}}function ax(t,e){for(const n in e){const r=e[n],i=t[n];if(typeof r=="string"){if(r!==i)return!1}else if(!Sn(i)||i.length!==r.length||r.some((s,o)=>s!==i[o]))return!1}return!0}function Wy(t){return t?t.aliasOf?t.aliasOf.path:t.path:""}const Qy=(t,e,n)=>t!=null?t:e!=null?e:n,cx=pc({name:"RouterView",inheritAttrs:!1,props:{name:{type:String,default:"default"},route:Object},compatConfig:{MODE:3},setup(t,{attrs:e,slots:n}){const r=Hn(nf),i=je(()=>t.route||r.value),s=Hn(Ky,0),o=je(()=>{let u=Bs(s);const{matched:l}=i.value;let h;for(;(h=l[u])&&!h.components;)u++;return u}),a=je(()=>i.value.matched[o.value]);Au(Ky,je(()=>o.value+1)),Au(nx,a),Au(nf,i);const c=gk();return la(()=>[c.value,a.value,t.name],([u,l,h],[d,f,m])=>{l&&(l.instances[h]=u,f&&f!==l&&u&&u===d&&(l.leaveGuards.size||(l.leaveGuards=f.leaveGuards),l.updateGuards.size||(l.updateGuards=f.updateGuards))),u&&l&&(!f||!to(l,f)||!d)&&(l.enterCallbacks[h]||[]).forEach(y=>y(u))},{flush:"post"}),()=>{const u=i.value,l=t.name,h=a.value,d=h&&h.components[l];if(!d)return Yy(n.default,{Component:d,route:u});const f=h.props[l],m=f?f===!0?u.params:typeof f=="function"?f(u):f:null,I=mc(d,be({},m,e,{onVnodeUnmounted:v=>{v.component.isUnmounted&&(h.instances[l]=null)},ref:c}));return Yy(n.default,{Component:I,route:u})||I}}});function Yy(t,e){if(!t)return null;const n=t(e);return n.length===1?n[0]:n}const ux=cx;function lx(t){const e=FC(t.routes,t),n=t.parseQuery||ex,r=t.stringifyQuery||Hy,i=t.history,s=qo(),o=qo(),a=qo(),c=yk(Nr);let u=Nr;Rs&&t.scrollBehavior&&"scrollRestoration"in history&&(history.scrollRestoration="manual");const l=nd.bind(null,k=>""+k),h=nd.bind(null,ZC),d=nd.bind(null,Wu);function f(k,j){let V,Z;return Fb(k)?(V=e.getRecordMatcher(k),Z=j):Z=k,e.addRoute(Z,V)}function m(k){const j=e.getRecordMatcher(k);j&&e.removeRoute(j)}function y(){return e.getRoutes().map(k=>k.record)}function I(k){return!!e.getRecordMatcher(k)}function v(k,j){if(j=be({},j||c.value),typeof k=="string"){const p=rd(n,k,j.path),g=e.resolve({path:p.path},j),T=i.createHref(p.fullPath);return be(p,g,{params:d(g.params),hash:Wu(p.hash),redirectedFrom:void 0,href:T})}let V;if("path"in k)V=be({},k,{path:rd(n,k.path,j.path).path});else{const p=be({},k.params);for(const g in p)p[g]==null&&delete p[g];V=be({},k,{params:h(k.params)}),j.params=h(j.params)}const Z=e.resolve(V,j),ge=k.hash||"";Z.params=l(d(Z.params));const qe=dC(r,be({},k,{hash:YC(ge),path:Z.path})),le=i.createHref(qe);return be({fullPath:qe,hash:ge,query:r===Hy?tx(k.query):k.query||{}},Z,{redirectedFrom:void 0,href:le})}function E(k){return typeof k=="string"?rd(n,k,c.value.path):be({},k)}function _(k,j){if(u!==k)return no(8,{from:j,to:k})}function R(k){return ne(k)}function M(k){return R(be(E(k),{replace:!0}))}function H(k){const j=k.matched[k.matched.length-1];if(j&&j.redirect){const{redirect:V}=j;let Z=typeof V=="function"?V(k):V;return typeof Z=="string"&&(Z=Z.includes("?")||Z.includes("#")?Z=E(Z):{path:Z},Z.params={}),be({query:k.query,hash:k.hash,params:"path"in Z?{}:k.params},Z)}}function ne(k,j){const V=u=v(k),Z=c.value,ge=k.state,qe=k.force,le=k.replace===!0,p=H(V);if(p)return ne(be(E(p),{state:typeof p=="object"?be({},ge,p.state):ge,force:qe,replace:le}),j||V);const g=V;g.redirectedFrom=j;let T;return!qe&&fC(r,Z,V)&&(T=no(16,{to:g,from:Z}),yi(Z,Z,!0,!1)),(T?Promise.resolve(T):ae(g,Z)).catch(S=>Zn(S)?Zn(S,2)?S:fn(S):ke(S,g,Z)).then(S=>{if(S){if(Zn(S,2))return ne(be({replace:le},E(S.to),{state:typeof S.to=="object"?be({},ge,S.to.state):ge,force:qe}),j||g)}else S=ot(g,Z,!0,le,ge);return we(g,Z,S),S})}function K(k,j){const V=_(k,j);return V?Promise.reject(V):Promise.resolve()}function ae(k,j){let V;const[Z,ge,qe]=hx(k,j);V=id(Z.reverse(),"beforeRouteLeave",k,j);for(const p of Z)p.leaveGuards.forEach(g=>{V.push(Ur(g,k,j))});const le=K.bind(null,k,j);return V.push(le),Es(V).then(()=>{V=[];for(const p of s.list())V.push(Ur(p,k,j));return V.push(le),Es(V)}).then(()=>{V=id(ge,"beforeRouteUpdate",k,j);for(const p of ge)p.updateGuards.forEach(g=>{V.push(Ur(g,k,j))});return V.push(le),Es(V)}).then(()=>{V=[];for(const p of k.matched)if(p.beforeEnter&&!j.matched.includes(p))if(Sn(p.beforeEnter))for(const g of p.beforeEnter)V.push(Ur(g,k,j));else V.push(Ur(p.beforeEnter,k,j));return V.push(le),Es(V)}).then(()=>(k.matched.forEach(p=>p.enterCallbacks={}),V=id(qe,"beforeRouteEnter",k,j),V.push(le),Es(V))).then(()=>{V=[];for(const p of o.list())V.push(Ur(p,k,j));return V.push(le),Es(V)}).catch(p=>Zn(p,8)?p:Promise.reject(p))}function we(k,j,V){for(const Z of a.list())Z(k,j,V)}function ot(k,j,V,Z,ge){const qe=_(k,j);if(qe)return qe;const le=j===Nr,p=Rs?history.state:{};V&&(Z||le?i.replace(k.fullPath,be({scroll:le&&p&&p.scroll},ge)):i.push(k.fullPath,ge)),c.value=k,yi(k,j,V,le),fn()}let G;function xe(){G||(G=i.listen((k,j,V)=>{if(!Kc.listening)return;const Z=v(k),ge=H(Z);if(ge){ne(be(ge,{replace:!0}),Z).catch(fa);return}u=Z;const qe=c.value;Rs&&bC(Fy(qe.fullPath,V.delta),Hl()),ae(Z,qe).catch(le=>Zn(le,12)?le:Zn(le,2)?(ne(le.to,Z).then(p=>{Zn(p,20)&&!V.delta&&V.type===La.pop&&i.go(-1,!1)}).catch(fa),Promise.reject()):(V.delta&&i.go(-V.delta,!1),ke(le,Z,qe))).then(le=>{le=le||ot(Z,qe,!1),le&&(V.delta&&!Zn(le,8)?i.go(-V.delta,!1):V.type===La.pop&&Zn(le,20)&&i.go(-1,!1)),we(Z,qe,le)}).catch(fa)}))}let yt=qo(),Ar=qo(),Be;function ke(k,j,V){fn(k);const Z=Ar.list();return Z.length?Z.forEach(ge=>ge(k,j,V)):console.error(k),Promise.reject(k)}function Te(){return Be&&c.value!==Nr?Promise.resolve():new Promise((k,j)=>{yt.add([k,j])})}function fn(k){return Be||(Be=!k,xe(),yt.list().forEach(([j,V])=>k?V(k):j()),yt.reset()),k}function yi(k,j,V,Z){const{scrollBehavior:ge}=t;if(!Rs||!ge)return Promise.resolve();const qe=!V&&IC(Fy(k.fullPath,0))||(Z||!V)&&history.state&&history.state.scroll||null;return ib().then(()=>ge(k,j,qe)).then(le=>le&&_C(le)).catch(le=>ke(le,k,j))}const pn=k=>i.go(k);let $t;const _s=new Set,Kc={currentRoute:c,listening:!0,addRoute:f,removeRoute:m,hasRoute:I,getRoutes:y,resolve:v,options:t,push:R,replace:M,go:pn,back:()=>pn(-1),forward:()=>pn(1),beforeEach:s.add,beforeResolve:o.add,afterEach:a.add,onError:Ar.add,isReady:Te,install(k){const j=this;k.component("RouterLink",sx),k.component("RouterView",ux),k.config.globalProperties.$router=j,Object.defineProperty(k.config.globalProperties,"$route",{enumerable:!0,get:()=>Bs(c)}),Rs&&!$t&&c.value===Nr&&($t=!0,R(i.location).catch(ge=>{}));const V={};for(const ge in Nr)V[ge]=je(()=>c.value[ge]);k.provide(Kl,j),k.provide(Hb,fc(V)),k.provide(nf,c);const Z=k.unmount;_s.add(k),k.unmount=function(){_s.delete(k),_s.size<1&&(u=Nr,G&&G(),G=null,c.value=Nr,$t=!1,Be=!1),Z()}}};return Kc}function Es(t){return t.reduce((e,n)=>e.then(()=>n()),Promise.resolve())}function hx(t,e){const n=[],r=[],i=[],s=Math.max(e.matched.length,t.matched.length);for(let o=0;o<s;o++){const a=e.matched[o];a&&(t.matched.find(u=>to(u,a))?r.push(a):n.push(a));const c=t.matched[o];c&&(e.matched.find(u=>to(u,c))||i.push(c))}return[n,r,i]}function J9(){return Hn(Kl)}/**
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
 */const Kb=function(t){const e=[];let n=0;for(let r=0;r<t.length;r++){let i=t.charCodeAt(r);i<128?e[n++]=i:i<2048?(e[n++]=i>>6|192,e[n++]=i&63|128):(i&64512)===55296&&r+1<t.length&&(t.charCodeAt(r+1)&64512)===56320?(i=65536+((i&1023)<<10)+(t.charCodeAt(++r)&1023),e[n++]=i>>18|240,e[n++]=i>>12&63|128,e[n++]=i>>6&63|128,e[n++]=i&63|128):(e[n++]=i>>12|224,e[n++]=i>>6&63|128,e[n++]=i&63|128)}return e},dx=function(t){const e=[];let n=0,r=0;for(;n<t.length;){const i=t[n++];if(i<128)e[r++]=String.fromCharCode(i);else if(i>191&&i<224){const s=t[n++];e[r++]=String.fromCharCode((i&31)<<6|s&63)}else if(i>239&&i<365){const s=t[n++],o=t[n++],a=t[n++],c=((i&7)<<18|(s&63)<<12|(o&63)<<6|a&63)-65536;e[r++]=String.fromCharCode(55296+(c>>10)),e[r++]=String.fromCharCode(56320+(c&1023))}else{const s=t[n++],o=t[n++];e[r++]=String.fromCharCode((i&15)<<12|(s&63)<<6|o&63)}}return e.join("")},Gb={byteToCharMap_:null,charToByteMap_:null,byteToCharMapWebSafe_:null,charToByteMapWebSafe_:null,ENCODED_VALS_BASE:"ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",get ENCODED_VALS(){return this.ENCODED_VALS_BASE+"+/="},get ENCODED_VALS_WEBSAFE(){return this.ENCODED_VALS_BASE+"-_."},HAS_NATIVE_SUPPORT:typeof atob=="function",encodeByteArray(t,e){if(!Array.isArray(t))throw Error("encodeByteArray takes an array as a parameter");this.init_();const n=e?this.byteToCharMapWebSafe_:this.byteToCharMap_,r=[];for(let i=0;i<t.length;i+=3){const s=t[i],o=i+1<t.length,a=o?t[i+1]:0,c=i+2<t.length,u=c?t[i+2]:0,l=s>>2,h=(s&3)<<4|a>>4;let d=(a&15)<<2|u>>6,f=u&63;c||(f=64,o||(d=64)),r.push(n[l],n[h],n[d],n[f])}return r.join("")},encodeString(t,e){return this.HAS_NATIVE_SUPPORT&&!e?btoa(t):this.encodeByteArray(Kb(t),e)},decodeString(t,e){return this.HAS_NATIVE_SUPPORT&&!e?atob(t):dx(this.decodeStringToByteArray(t,e))},decodeStringToByteArray(t,e){this.init_();const n=e?this.charToByteMapWebSafe_:this.charToByteMap_,r=[];for(let i=0;i<t.length;){const s=n[t.charAt(i++)],a=i<t.length?n[t.charAt(i)]:0;++i;const u=i<t.length?n[t.charAt(i)]:64;++i;const h=i<t.length?n[t.charAt(i)]:64;if(++i,s==null||a==null||u==null||h==null)throw new fx;const d=s<<2|a>>4;if(r.push(d),u!==64){const f=a<<4&240|u>>2;if(r.push(f),h!==64){const m=u<<6&192|h;r.push(m)}}}return r},init_(){if(!this.byteToCharMap_){this.byteToCharMap_={},this.charToByteMap_={},this.byteToCharMapWebSafe_={},this.charToByteMapWebSafe_={};for(let t=0;t<this.ENCODED_VALS.length;t++)this.byteToCharMap_[t]=this.ENCODED_VALS.charAt(t),this.charToByteMap_[this.byteToCharMap_[t]]=t,this.byteToCharMapWebSafe_[t]=this.ENCODED_VALS_WEBSAFE.charAt(t),this.charToByteMapWebSafe_[this.byteToCharMapWebSafe_[t]]=t,t>=this.ENCODED_VALS_BASE.length&&(this.charToByteMap_[this.ENCODED_VALS_WEBSAFE.charAt(t)]=t,this.charToByteMapWebSafe_[this.ENCODED_VALS.charAt(t)]=t)}}};class fx extends Error{constructor(){super(...arguments),this.name="DecodeBase64StringError"}}const px=function(t){const e=Kb(t);return Gb.encodeByteArray(e,!0)},Qu=function(t){return px(t).replace(/\./g,"")},Wb=function(t){try{return Gb.decodeString(t,!0)}catch(e){console.error("base64Decode failed: ",e)}return null};function Yu(t,e){if(!(e instanceof Object))return e;switch(e.constructor){case Date:const n=e;return new Date(n.getTime());case Object:t===void 0&&(t={});break;case Array:t=[];break;default:return e}for(const n in e)!e.hasOwnProperty(n)||!mx(n)||(t[n]=Yu(t[n],e[n]));return t}function mx(t){return t!=="__proto__"}/**
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
 */function gx(){if(typeof self<"u")return self;if(typeof window<"u")return window;if(typeof global<"u")return global;throw new Error("Unable to locate global object.")}/**
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
 */const yx=()=>gx().__FIREBASE_DEFAULTS__,vx=()=>{if(typeof process>"u"||typeof process.env>"u")return;const t={}.__FIREBASE_DEFAULTS__;if(t)return JSON.parse(t)},wx=()=>{if(typeof document>"u")return;let t;try{t=document.cookie.match(/__FIREBASE_DEFAULTS__=([^;]+)/)}catch{return}const e=t&&Wb(t[1]);return e&&JSON.parse(e)},Op=()=>{try{return yx()||vx()||wx()}catch(t){console.info(`Unable to get __FIREBASE_DEFAULTS__ due to: ${t}`);return}},_x=()=>{var t;return(t=Op())===null||t===void 0?void 0:t.config},bx=t=>{var e;return(e=Op())===null||e===void 0?void 0:e[`_${t}`]};/**
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
 */class Ix{constructor(){this.reject=()=>{},this.resolve=()=>{},this.promise=new Promise((e,n)=>{this.resolve=e,this.reject=n})}wrapCallback(e){return(n,r)=>{n?this.reject(n):this.resolve(r),typeof e=="function"&&(this.promise.catch(()=>{}),e.length===1?e(n):e(n,r))}}}/**
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
 */function Qb(t,e){if(t.uid)throw new Error('The "uid" field is no longer supported by mockUserToken. Please use "sub" instead for Firebase Auth User ID.');const n={alg:"none",type:"JWT"},r=e||"demo-project",i=t.iat||0,s=t.sub||t.user_id;if(!s)throw new Error("mockUserToken must contain 'sub' or 'user_id' field!");const o=Object.assign({iss:`https://securetoken.google.com/${r}`,aud:r,iat:i,exp:i+3600,auth_time:i,sub:s,user_id:s,firebase:{sign_in_provider:"custom",identities:{}}},t),a="";return[Qu(JSON.stringify(n)),Qu(JSON.stringify(o)),a].join(".")}/**
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
 */function ze(){return typeof navigator<"u"&&typeof navigator.userAgent=="string"?navigator.userAgent:""}function Ex(){return typeof window<"u"&&!!(window.cordova||window.phonegap||window.PhoneGap)&&/ios|iphone|ipod|ipad|android|blackberry|iemobile/i.test(ze())}function Gl(){var t;const e=(t=Op())===null||t===void 0?void 0:t.forceEnvironment;if(e==="node")return!0;if(e==="browser")return!1;try{return Object.prototype.toString.call(global.process)==="[object process]"}catch{return!1}}function Tx(){return typeof self=="object"&&self.self===self}function Yb(){const t=typeof chrome=="object"?chrome.runtime:typeof browser=="object"?browser.runtime:void 0;return typeof t=="object"&&t.id!==void 0}function Lp(){return typeof navigator=="object"&&navigator.product==="ReactNative"}function Xb(){const t=ze();return t.indexOf("MSIE ")>=0||t.indexOf("Trident/")>=0}function Sx(){return!Gl()&&navigator.userAgent.includes("Safari")&&!navigator.userAgent.includes("Chrome")}function Ma(){try{return typeof indexedDB=="object"}catch{return!1}}function kx(){return new Promise((t,e)=>{try{let n=!0;const r="validate-browser-context-for-indexeddb-analytics-module",i=self.indexedDB.open(r);i.onsuccess=()=>{i.result.close(),n||self.indexedDB.deleteDatabase(r),t(!0)},i.onupgradeneeded=()=>{n=!1},i.onerror=()=>{var s;e(((s=i.error)===null||s===void 0?void 0:s.message)||"")}}catch(n){e(n)}})}/**
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
 */const Ax="FirebaseError";class Rt extends Error{constructor(e,n,r){super(n),this.code=e,this.customData=r,this.name=Ax,Object.setPrototypeOf(this,Rt.prototype),Error.captureStackTrace&&Error.captureStackTrace(this,hs.prototype.create)}}class hs{constructor(e,n,r){this.service=e,this.serviceName=n,this.errors=r}create(e,...n){const r=n[0]||{},i=`${this.service}/${e}`,s=this.errors[e],o=s?Cx(s,r):"Error",a=`${this.serviceName}: ${o} (${i}).`;return new Rt(i,a,r)}}function Cx(t,e){return t.replace(xx,(n,r)=>{const i=e[r];return i!=null?String(i):`<${r}?>`})}const xx=/\{\$([^}]+)}/g;/**
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
 */function Xy(t,e){return Object.prototype.hasOwnProperty.call(t,e)}function Rx(t){for(const e in t)if(Object.prototype.hasOwnProperty.call(t,e))return!1;return!0}function rf(t,e){if(t===e)return!0;const n=Object.keys(t),r=Object.keys(e);for(const i of n){if(!r.includes(i))return!1;const s=t[i],o=e[i];if(Jy(s)&&Jy(o)){if(!rf(s,o))return!1}else if(s!==o)return!1}for(const i of r)if(!n.includes(i))return!1;return!0}function Jy(t){return t!==null&&typeof t=="object"}/**
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
 */function Eo(t){const e=[];for(const[n,r]of Object.entries(t))Array.isArray(r)?r.forEach(i=>{e.push(encodeURIComponent(n)+"="+encodeURIComponent(i))}):e.push(encodeURIComponent(n)+"="+encodeURIComponent(r));return e.length?"&"+e.join("&"):""}function Os(t){const e={};return t.replace(/^\?/,"").split("&").forEach(r=>{if(r){const[i,s]=r.split("=");e[decodeURIComponent(i)]=decodeURIComponent(s)}}),e}function na(t){const e=t.indexOf("?");if(!e)return"";const n=t.indexOf("#",e);return t.substring(e,n>0?n:void 0)}function Jb(t,e){const n=new Nx(t,e);return n.subscribe.bind(n)}class Nx{constructor(e,n){this.observers=[],this.unsubscribes=[],this.observerCount=0,this.task=Promise.resolve(),this.finalized=!1,this.onNoObservers=n,this.task.then(()=>{e(this)}).catch(r=>{this.error(r)})}next(e){this.forEachObserver(n=>{n.next(e)})}error(e){this.forEachObserver(n=>{n.error(e)}),this.close(e)}complete(){this.forEachObserver(e=>{e.complete()}),this.close()}subscribe(e,n,r){let i;if(e===void 0&&n===void 0&&r===void 0)throw new Error("Missing Observer.");Px(e,["next","error","complete"])?i=e:i={next:e,error:n,complete:r},i.next===void 0&&(i.next=sd),i.error===void 0&&(i.error=sd),i.complete===void 0&&(i.complete=sd);const s=this.unsubscribeOne.bind(this,this.observers.length);return this.finalized&&this.task.then(()=>{try{this.finalError?i.error(this.finalError):i.complete()}catch{}}),this.observers.push(i),s}unsubscribeOne(e){this.observers===void 0||this.observers[e]===void 0||(delete this.observers[e],this.observerCount-=1,this.observerCount===0&&this.onNoObservers!==void 0&&this.onNoObservers(this))}forEachObserver(e){if(!this.finalized)for(let n=0;n<this.observers.length;n++)this.sendOne(n,e)}sendOne(e,n){this.task.then(()=>{if(this.observers!==void 0&&this.observers[e]!==void 0)try{n(this.observers[e])}catch(r){typeof console<"u"&&console.error&&console.error(r)}})}close(e){this.finalized||(this.finalized=!0,e!==void 0&&(this.finalError=e),this.task.then(()=>{this.observers=void 0,this.onNoObservers=void 0}))}}function Px(t,e){if(typeof t!="object"||t===null)return!1;for(const n of e)if(n in t&&typeof t[n]=="function")return!0;return!1}function sd(){}/**
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
 */function Y(t){return t&&t._delegate?t._delegate:t}class hn{constructor(e,n,r){this.name=e,this.instanceFactory=n,this.type=r,this.multipleInstances=!1,this.serviceProps={},this.instantiationMode="LAZY",this.onInstanceCreated=null}setInstantiationMode(e){return this.instantiationMode=e,this}setMultipleInstances(e){return this.multipleInstances=e,this}setServiceProps(e){return this.serviceProps=e,this}setInstanceCreatedCallback(e){return this.onInstanceCreated=e,this}}/**
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
 */const Ti="[DEFAULT]";/**
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
 */class Dx{constructor(e,n){this.name=e,this.container=n,this.component=null,this.instances=new Map,this.instancesDeferred=new Map,this.instancesOptions=new Map,this.onInitCallbacks=new Map}get(e){const n=this.normalizeInstanceIdentifier(e);if(!this.instancesDeferred.has(n)){const r=new Ix;if(this.instancesDeferred.set(n,r),this.isInitialized(n)||this.shouldAutoInitialize())try{const i=this.getOrInitializeService({instanceIdentifier:n});i&&r.resolve(i)}catch{}}return this.instancesDeferred.get(n).promise}getImmediate(e){var n;const r=this.normalizeInstanceIdentifier(e==null?void 0:e.identifier),i=(n=e==null?void 0:e.optional)!==null&&n!==void 0?n:!1;if(this.isInitialized(r)||this.shouldAutoInitialize())try{return this.getOrInitializeService({instanceIdentifier:r})}catch(s){if(i)return null;throw s}else{if(i)return null;throw Error(`Service ${this.name} is not available`)}}getComponent(){return this.component}setComponent(e){if(e.name!==this.name)throw Error(`Mismatching Component ${e.name} for Provider ${this.name}.`);if(this.component)throw Error(`Component for ${this.name} has already been provided`);if(this.component=e,!!this.shouldAutoInitialize()){if(Lx(e))try{this.getOrInitializeService({instanceIdentifier:Ti})}catch{}for(const[n,r]of this.instancesDeferred.entries()){const i=this.normalizeInstanceIdentifier(n);try{const s=this.getOrInitializeService({instanceIdentifier:i});r.resolve(s)}catch{}}}}clearInstance(e=Ti){this.instancesDeferred.delete(e),this.instancesOptions.delete(e),this.instances.delete(e)}async delete(){const e=Array.from(this.instances.values());await Promise.all([...e.filter(n=>"INTERNAL"in n).map(n=>n.INTERNAL.delete()),...e.filter(n=>"_delete"in n).map(n=>n._delete())])}isComponentSet(){return this.component!=null}isInitialized(e=Ti){return this.instances.has(e)}getOptions(e=Ti){return this.instancesOptions.get(e)||{}}initialize(e={}){const{options:n={}}=e,r=this.normalizeInstanceIdentifier(e.instanceIdentifier);if(this.isInitialized(r))throw Error(`${this.name}(${r}) has already been initialized`);if(!this.isComponentSet())throw Error(`Component ${this.name} has not been registered yet`);const i=this.getOrInitializeService({instanceIdentifier:r,options:n});for(const[s,o]of this.instancesDeferred.entries()){const a=this.normalizeInstanceIdentifier(s);r===a&&o.resolve(i)}return i}onInit(e,n){var r;const i=this.normalizeInstanceIdentifier(n),s=(r=this.onInitCallbacks.get(i))!==null&&r!==void 0?r:new Set;s.add(e),this.onInitCallbacks.set(i,s);const o=this.instances.get(i);return o&&e(o,i),()=>{s.delete(e)}}invokeOnInitCallbacks(e,n){const r=this.onInitCallbacks.get(n);if(!!r)for(const i of r)try{i(e,n)}catch{}}getOrInitializeService({instanceIdentifier:e,options:n={}}){let r=this.instances.get(e);if(!r&&this.component&&(r=this.component.instanceFactory(this.container,{instanceIdentifier:Ox(e),options:n}),this.instances.set(e,r),this.instancesOptions.set(e,n),this.invokeOnInitCallbacks(r,e),this.component.onInstanceCreated))try{this.component.onInstanceCreated(this.container,e,r)}catch{}return r||null}normalizeInstanceIdentifier(e=Ti){return this.component?this.component.multipleInstances?e:Ti:e}shouldAutoInitialize(){return!!this.component&&this.component.instantiationMode!=="EXPLICIT"}}function Ox(t){return t===Ti?void 0:t}function Lx(t){return t.instantiationMode==="EAGER"}/**
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
 */class Mx{constructor(e){this.name=e,this.providers=new Map}addComponent(e){const n=this.getProvider(e.name);if(n.isComponentSet())throw new Error(`Component ${e.name} has already been registered with ${this.name}`);n.setComponent(e)}addOrOverwriteComponent(e){this.getProvider(e.name).isComponentSet()&&this.providers.delete(e.name),this.addComponent(e)}getProvider(e){if(this.providers.has(e))return this.providers.get(e);const n=new Dx(e,this);return this.providers.set(e,n),n}getProviders(){return Array.from(this.providers.values())}}/**
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
 */const Mp=[];var pe;(function(t){t[t.DEBUG=0]="DEBUG",t[t.VERBOSE=1]="VERBOSE",t[t.INFO=2]="INFO",t[t.WARN=3]="WARN",t[t.ERROR=4]="ERROR",t[t.SILENT=5]="SILENT"})(pe||(pe={}));const Zb={debug:pe.DEBUG,verbose:pe.VERBOSE,info:pe.INFO,warn:pe.WARN,error:pe.ERROR,silent:pe.SILENT},Fx=pe.INFO,Ux={[pe.DEBUG]:"log",[pe.VERBOSE]:"log",[pe.INFO]:"info",[pe.WARN]:"warn",[pe.ERROR]:"error"},Vx=(t,e,...n)=>{if(e<t.logLevel)return;const r=new Date().toISOString(),i=Ux[e];if(i)console[i](`[${r}]  ${t.name}:`,...n);else throw new Error(`Attempted to log a message with an invalid logType (value: ${e})`)};class Wl{constructor(e){this.name=e,this._logLevel=Fx,this._logHandler=Vx,this._userLogHandler=null,Mp.push(this)}get logLevel(){return this._logLevel}set logLevel(e){if(!(e in pe))throw new TypeError(`Invalid value "${e}" assigned to \`logLevel\``);this._logLevel=e}setLogLevel(e){this._logLevel=typeof e=="string"?Zb[e]:e}get logHandler(){return this._logHandler}set logHandler(e){if(typeof e!="function")throw new TypeError("Value assigned to `logHandler` must be a function");this._logHandler=e}get userLogHandler(){return this._userLogHandler}set userLogHandler(e){this._userLogHandler=e}debug(...e){this._userLogHandler&&this._userLogHandler(this,pe.DEBUG,...e),this._logHandler(this,pe.DEBUG,...e)}log(...e){this._userLogHandler&&this._userLogHandler(this,pe.VERBOSE,...e),this._logHandler(this,pe.VERBOSE,...e)}info(...e){this._userLogHandler&&this._userLogHandler(this,pe.INFO,...e),this._logHandler(this,pe.INFO,...e)}warn(...e){this._userLogHandler&&this._userLogHandler(this,pe.WARN,...e),this._logHandler(this,pe.WARN,...e)}error(...e){this._userLogHandler&&this._userLogHandler(this,pe.ERROR,...e),this._logHandler(this,pe.ERROR,...e)}}function $x(t){Mp.forEach(e=>{e.setLogLevel(t)})}function Bx(t,e){for(const n of Mp){let r=null;e&&e.level&&(r=Zb[e.level]),t===null?n.userLogHandler=null:n.userLogHandler=(i,s,...o)=>{const a=o.map(c=>{if(c==null)return null;if(typeof c=="string")return c;if(typeof c=="number"||typeof c=="boolean")return c.toString();if(c instanceof Error)return c.message;try{return JSON.stringify(c)}catch{return null}}).filter(c=>c).join(" ");s>=(r!=null?r:i.logLevel)&&t({level:pe[s].toLowerCase(),message:a,args:o,type:i.name})}}}const qx=(t,e)=>e.some(n=>t instanceof n);let Zy,ev;function jx(){return Zy||(Zy=[IDBDatabase,IDBObjectStore,IDBIndex,IDBCursor,IDBTransaction])}function zx(){return ev||(ev=[IDBCursor.prototype.advance,IDBCursor.prototype.continue,IDBCursor.prototype.continuePrimaryKey])}const e0=new WeakMap,sf=new WeakMap,t0=new WeakMap,od=new WeakMap,Fp=new WeakMap;function Hx(t){const e=new Promise((n,r)=>{const i=()=>{t.removeEventListener("success",s),t.removeEventListener("error",o)},s=()=>{n(Hr(t.result)),i()},o=()=>{r(t.error),i()};t.addEventListener("success",s),t.addEventListener("error",o)});return e.then(n=>{n instanceof IDBCursor&&e0.set(n,t)}).catch(()=>{}),Fp.set(e,t),e}function Kx(t){if(sf.has(t))return;const e=new Promise((n,r)=>{const i=()=>{t.removeEventListener("complete",s),t.removeEventListener("error",o),t.removeEventListener("abort",o)},s=()=>{n(),i()},o=()=>{r(t.error||new DOMException("AbortError","AbortError")),i()};t.addEventListener("complete",s),t.addEventListener("error",o),t.addEventListener("abort",o)});sf.set(t,e)}let of={get(t,e,n){if(t instanceof IDBTransaction){if(e==="done")return sf.get(t);if(e==="objectStoreNames")return t.objectStoreNames||t0.get(t);if(e==="store")return n.objectStoreNames[1]?void 0:n.objectStore(n.objectStoreNames[0])}return Hr(t[e])},set(t,e,n){return t[e]=n,!0},has(t,e){return t instanceof IDBTransaction&&(e==="done"||e==="store")?!0:e in t}};function Gx(t){of=t(of)}function Wx(t){return t===IDBDatabase.prototype.transaction&&!("objectStoreNames"in IDBTransaction.prototype)?function(e,...n){const r=t.call(ad(this),e,...n);return t0.set(r,e.sort?e.sort():[e]),Hr(r)}:zx().includes(t)?function(...e){return t.apply(ad(this),e),Hr(e0.get(this))}:function(...e){return Hr(t.apply(ad(this),e))}}function Qx(t){return typeof t=="function"?Wx(t):(t instanceof IDBTransaction&&Kx(t),qx(t,jx())?new Proxy(t,of):t)}function Hr(t){if(t instanceof IDBRequest)return Hx(t);if(od.has(t))return od.get(t);const e=Qx(t);return e!==t&&(od.set(t,e),Fp.set(e,t)),e}const ad=t=>Fp.get(t);function Yx(t,e,{blocked:n,upgrade:r,blocking:i,terminated:s}={}){const o=indexedDB.open(t,e),a=Hr(o);return r&&o.addEventListener("upgradeneeded",c=>{r(Hr(o.result),c.oldVersion,c.newVersion,Hr(o.transaction),c)}),n&&o.addEventListener("blocked",c=>n(c.oldVersion,c.newVersion,c)),a.then(c=>{s&&c.addEventListener("close",()=>s()),i&&c.addEventListener("versionchange",u=>i(u.oldVersion,u.newVersion,u))}).catch(()=>{}),a}const Xx=["get","getKey","getAll","getAllKeys","count"],Jx=["put","add","delete","clear"],cd=new Map;function tv(t,e){if(!(t instanceof IDBDatabase&&!(e in t)&&typeof e=="string"))return;if(cd.get(e))return cd.get(e);const n=e.replace(/FromIndex$/,""),r=e!==n,i=Jx.includes(n);if(!(n in(r?IDBIndex:IDBObjectStore).prototype)||!(i||Xx.includes(n)))return;const s=async function(o,...a){const c=this.transaction(o,i?"readwrite":"readonly");let u=c.store;return r&&(u=u.index(a.shift())),(await Promise.all([u[n](...a),i&&c.done]))[0]};return cd.set(e,s),s}Gx(t=>({...t,get:(e,n,r)=>tv(e,n)||t.get(e,n,r),has:(e,n)=>!!tv(e,n)||t.has(e,n)}));/**
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
 */class Zx{constructor(e){this.container=e}getPlatformInfoString(){return this.container.getProviders().map(n=>{if(eR(n)){const r=n.getImmediate();return`${r.library}/${r.version}`}else return null}).filter(n=>n).join(" ")}}function eR(t){const e=t.getComponent();return(e==null?void 0:e.type)==="VERSION"}const af="@firebase/app",nv="0.9.9";/**
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
 */const Yi=new Wl("@firebase/app"),tR="@firebase/app-compat",nR="@firebase/analytics-compat",rR="@firebase/analytics",iR="@firebase/app-check-compat",sR="@firebase/app-check",oR="@firebase/auth",aR="@firebase/auth-compat",cR="@firebase/database",uR="@firebase/database-compat",lR="@firebase/functions",hR="@firebase/functions-compat",dR="@firebase/installations",fR="@firebase/installations-compat",pR="@firebase/messaging",mR="@firebase/messaging-compat",gR="@firebase/performance",yR="@firebase/performance-compat",vR="@firebase/remote-config",wR="@firebase/remote-config-compat",_R="@firebase/storage",bR="@firebase/storage-compat",IR="@firebase/firestore",ER="@firebase/firestore-compat",TR="firebase",SR="9.21.0";/**
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
 */const Wr="[DEFAULT]",kR={[af]:"fire-core",[tR]:"fire-core-compat",[rR]:"fire-analytics",[nR]:"fire-analytics-compat",[sR]:"fire-app-check",[iR]:"fire-app-check-compat",[oR]:"fire-auth",[aR]:"fire-auth-compat",[cR]:"fire-rtdb",[uR]:"fire-rtdb-compat",[lR]:"fire-fn",[hR]:"fire-fn-compat",[dR]:"fire-iid",[fR]:"fire-iid-compat",[pR]:"fire-fcm",[mR]:"fire-fcm-compat",[gR]:"fire-perf",[yR]:"fire-perf-compat",[vR]:"fire-rc",[wR]:"fire-rc-compat",[_R]:"fire-gcs",[bR]:"fire-gcs-compat",[IR]:"fire-fst",[ER]:"fire-fst-compat","fire-js":"fire-js",[TR]:"fire-js-all"};/**
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
 */const Qr=new Map,Fa=new Map;function Xu(t,e){try{t.container.addComponent(e)}catch(n){Yi.debug(`Component ${e.name} failed to register with FirebaseApp ${t.name}`,n)}}function n0(t,e){t.container.addOrOverwriteComponent(e)}function hr(t){const e=t.name;if(Fa.has(e))return Yi.debug(`There were multiple attempts to register component ${e}.`),!1;Fa.set(e,t);for(const n of Qr.values())Xu(n,t);return!0}function r0(t,e){const n=t.container.getProvider("heartbeat").getImmediate({optional:!0});return n&&n.triggerHeartbeat(),t.container.getProvider(e)}function AR(t,e,n=Wr){r0(t,e).clearInstance(n)}function CR(){Fa.clear()}/**
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
 */const xR={["no-app"]:"No Firebase App '{$appName}' has been created - call Firebase App.initializeApp()",["bad-app-name"]:"Illegal App name: '{$appName}",["duplicate-app"]:"Firebase App named '{$appName}' already exists with different options or config",["app-deleted"]:"Firebase App named '{$appName}' already deleted",["no-options"]:"Need to provide options, when not being deployed to hosting via source.",["invalid-app-argument"]:"firebase.{$appName}() takes either no argument or a Firebase App instance.",["invalid-log-argument"]:"First argument to `onLog` must be null or a function.",["idb-open"]:"Error thrown when opening IndexedDB. Original error: {$originalErrorMessage}.",["idb-get"]:"Error thrown when reading from IndexedDB. Original error: {$originalErrorMessage}.",["idb-set"]:"Error thrown when writing to IndexedDB. Original error: {$originalErrorMessage}.",["idb-delete"]:"Error thrown when deleting from IndexedDB. Original error: {$originalErrorMessage}."},ar=new hs("app","Firebase",xR);/**
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
 */class RR{constructor(e,n,r){this._isDeleted=!1,this._options=Object.assign({},e),this._config=Object.assign({},n),this._name=n.name,this._automaticDataCollectionEnabled=n.automaticDataCollectionEnabled,this._container=r,this.container.addComponent(new hn("app",()=>this,"PUBLIC"))}get automaticDataCollectionEnabled(){return this.checkDestroyed(),this._automaticDataCollectionEnabled}set automaticDataCollectionEnabled(e){this.checkDestroyed(),this._automaticDataCollectionEnabled=e}get name(){return this.checkDestroyed(),this._name}get options(){return this.checkDestroyed(),this._options}get config(){return this.checkDestroyed(),this._config}get container(){return this._container}get isDeleted(){return this._isDeleted}set isDeleted(e){this._isDeleted=e}checkDestroyed(){if(this.isDeleted)throw ar.create("app-deleted",{appName:this._name})}}/**
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
 */const wr=SR;function Up(t,e={}){let n=t;typeof e!="object"&&(e={name:e});const r=Object.assign({name:Wr,automaticDataCollectionEnabled:!1},e),i=r.name;if(typeof i!="string"||!i)throw ar.create("bad-app-name",{appName:String(i)});if(n||(n=_x()),!n)throw ar.create("no-options");const s=Qr.get(i);if(s){if(rf(n,s.options)&&rf(r,s.config))return s;throw ar.create("duplicate-app",{appName:i})}const o=new Mx(i);for(const c of Fa.values())o.addComponent(c);const a=new RR(n,r,o);return Qr.set(i,a),a}function NR(t=Wr){const e=Qr.get(t);if(!e&&t===Wr)return Up();if(!e)throw ar.create("no-app",{appName:t});return e}function PR(){return Array.from(Qr.values())}async function i0(t){const e=t.name;Qr.has(e)&&(Qr.delete(e),await Promise.all(t.container.getProviders().map(n=>n.delete())),t.isDeleted=!0)}function ln(t,e,n){var r;let i=(r=kR[t])!==null&&r!==void 0?r:t;n&&(i+=`-${n}`);const s=i.match(/\s|\//),o=e.match(/\s|\//);if(s||o){const a=[`Unable to register library "${i}" with version "${e}":`];s&&a.push(`library name "${i}" contains illegal characters (whitespace or "/")`),s&&o&&a.push("and"),o&&a.push(`version name "${e}" contains illegal characters (whitespace or "/")`),Yi.warn(a.join(" "));return}hr(new hn(`${i}-version`,()=>({library:i,version:e}),"VERSION"))}function s0(t,e){if(t!==null&&typeof t!="function")throw ar.create("invalid-log-argument");Bx(t,e)}function o0(t){$x(t)}/**
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
 */const DR="firebase-heartbeat-database",OR=1,Ua="firebase-heartbeat-store";let ud=null;function a0(){return ud||(ud=Yx(DR,OR,{upgrade:(t,e)=>{switch(e){case 0:t.createObjectStore(Ua)}}}).catch(t=>{throw ar.create("idb-open",{originalErrorMessage:t.message})})),ud}async function LR(t){try{return(await a0()).transaction(Ua).objectStore(Ua).get(c0(t))}catch(e){if(e instanceof Rt)Yi.warn(e.message);else{const n=ar.create("idb-get",{originalErrorMessage:e==null?void 0:e.message});Yi.warn(n.message)}}}async function rv(t,e){try{const r=(await a0()).transaction(Ua,"readwrite");return await r.objectStore(Ua).put(e,c0(t)),r.done}catch(n){if(n instanceof Rt)Yi.warn(n.message);else{const r=ar.create("idb-set",{originalErrorMessage:n==null?void 0:n.message});Yi.warn(r.message)}}}function c0(t){return`${t.name}!${t.options.appId}`}/**
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
 */const MR=1024,FR=30*24*60*60*1e3;class UR{constructor(e){this.container=e,this._heartbeatsCache=null;const n=this.container.getProvider("app").getImmediate();this._storage=new $R(n),this._heartbeatsCachePromise=this._storage.read().then(r=>(this._heartbeatsCache=r,r))}async triggerHeartbeat(){const n=this.container.getProvider("platform-logger").getImmediate().getPlatformInfoString(),r=iv();if(this._heartbeatsCache===null&&(this._heartbeatsCache=await this._heartbeatsCachePromise),!(this._heartbeatsCache.lastSentHeartbeatDate===r||this._heartbeatsCache.heartbeats.some(i=>i.date===r)))return this._heartbeatsCache.heartbeats.push({date:r,agent:n}),this._heartbeatsCache.heartbeats=this._heartbeatsCache.heartbeats.filter(i=>{const s=new Date(i.date).valueOf();return Date.now()-s<=FR}),this._storage.overwrite(this._heartbeatsCache)}async getHeartbeatsHeader(){if(this._heartbeatsCache===null&&await this._heartbeatsCachePromise,this._heartbeatsCache===null||this._heartbeatsCache.heartbeats.length===0)return"";const e=iv(),{heartbeatsToSend:n,unsentEntries:r}=VR(this._heartbeatsCache.heartbeats),i=Qu(JSON.stringify({version:2,heartbeats:n}));return this._heartbeatsCache.lastSentHeartbeatDate=e,r.length>0?(this._heartbeatsCache.heartbeats=r,await this._storage.overwrite(this._heartbeatsCache)):(this._heartbeatsCache.heartbeats=[],this._storage.overwrite(this._heartbeatsCache)),i}}function iv(){return new Date().toISOString().substring(0,10)}function VR(t,e=MR){const n=[];let r=t.slice();for(const i of t){const s=n.find(o=>o.agent===i.agent);if(s){if(s.dates.push(i.date),sv(n)>e){s.dates.pop();break}}else if(n.push({agent:i.agent,dates:[i.date]}),sv(n)>e){n.pop();break}r=r.slice(1)}return{heartbeatsToSend:n,unsentEntries:r}}class $R{constructor(e){this.app=e,this._canUseIndexedDBPromise=this.runIndexedDBEnvironmentCheck()}async runIndexedDBEnvironmentCheck(){return Ma()?kx().then(()=>!0).catch(()=>!1):!1}async read(){return await this._canUseIndexedDBPromise?await LR(this.app)||{heartbeats:[]}:{heartbeats:[]}}async overwrite(e){var n;if(await this._canUseIndexedDBPromise){const i=await this.read();return rv(this.app,{lastSentHeartbeatDate:(n=e.lastSentHeartbeatDate)!==null&&n!==void 0?n:i.lastSentHeartbeatDate,heartbeats:e.heartbeats})}else return}async add(e){var n;if(await this._canUseIndexedDBPromise){const i=await this.read();return rv(this.app,{lastSentHeartbeatDate:(n=e.lastSentHeartbeatDate)!==null&&n!==void 0?n:i.lastSentHeartbeatDate,heartbeats:[...i.heartbeats,...e.heartbeats]})}else return}}function sv(t){return Qu(JSON.stringify({version:2,heartbeats:t})).length}/**
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
 */function BR(t){hr(new hn("platform-logger",e=>new Zx(e),"PRIVATE")),hr(new hn("heartbeat",e=>new UR(e),"PRIVATE")),ln(af,nv,t),ln(af,nv,"esm2017"),ln("fire-js","")}BR("");const qR=Object.freeze(Object.defineProperty({__proto__:null,SDK_VERSION:wr,_DEFAULT_ENTRY_NAME:Wr,_addComponent:Xu,_addOrOverwriteComponent:n0,_apps:Qr,_clearComponents:CR,_components:Fa,_getProvider:r0,_registerComponent:hr,_removeServiceInstance:AR,deleteApp:i0,getApp:NR,getApps:PR,initializeApp:Up,onLog:s0,registerVersion:ln,setLogLevel:o0,FirebaseError:Rt},Symbol.toStringTag,{value:"Module"}));/**
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
 */class jR{constructor(e,n){this._delegate=e,this.firebase=n,Xu(e,new hn("app-compat",()=>this,"PUBLIC")),this.container=e.container}get automaticDataCollectionEnabled(){return this._delegate.automaticDataCollectionEnabled}set automaticDataCollectionEnabled(e){this._delegate.automaticDataCollectionEnabled=e}get name(){return this._delegate.name}get options(){return this._delegate.options}delete(){return new Promise(e=>{this._delegate.checkDestroyed(),e()}).then(()=>(this.firebase.INTERNAL.removeApp(this.name),i0(this._delegate)))}_getService(e,n=Wr){var r;this._delegate.checkDestroyed();const i=this._delegate.container.getProvider(e);return!i.isInitialized()&&((r=i.getComponent())===null||r===void 0?void 0:r.instantiationMode)==="EXPLICIT"&&i.initialize(),i.getImmediate({identifier:n})}_removeServiceInstance(e,n=Wr){this._delegate.container.getProvider(e).clearInstance(n)}_addComponent(e){Xu(this._delegate,e)}_addOrOverwriteComponent(e){n0(this._delegate,e)}toJSON(){return{name:this.name,automaticDataCollectionEnabled:this.automaticDataCollectionEnabled,options:this.options}}}/**
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
 */const zR={["no-app"]:"No Firebase App '{$appName}' has been created - call Firebase App.initializeApp()",["invalid-app-argument"]:"firebase.{$appName}() takes either no argument or a Firebase App instance."},ov=new hs("app-compat","Firebase",zR);/**
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
 */function HR(t){const e={},n={__esModule:!0,initializeApp:s,app:i,registerVersion:ln,setLogLevel:o0,onLog:s0,apps:null,SDK_VERSION:wr,INTERNAL:{registerComponent:a,removeApp:r,useAsService:c,modularAPIs:qR}};n.default=n,Object.defineProperty(n,"apps",{get:o});function r(u){delete e[u]}function i(u){if(u=u||Wr,!Xy(e,u))throw ov.create("no-app",{appName:u});return e[u]}i.App=t;function s(u,l={}){const h=Up(u,l);if(Xy(e,h.name))return e[h.name];const d=new t(h,n);return e[h.name]=d,d}function o(){return Object.keys(e).map(u=>e[u])}function a(u){const l=u.name,h=l.replace("-compat","");if(hr(u)&&u.type==="PUBLIC"){const d=(f=i())=>{if(typeof f[h]!="function")throw ov.create("invalid-app-argument",{appName:l});return f[h]()};u.serviceProps!==void 0&&Yu(d,u.serviceProps),n[h]=d,t.prototype[h]=function(...f){return this._getService.bind(this,l).apply(this,u.multipleInstances?f:[])}}return u.type==="PUBLIC"?n[h]:null}function c(u,l){return l==="serverAuth"?null:l}return n}/**
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
 */function u0(){const t=HR(jR);t.INTERNAL=Object.assign(Object.assign({},t.INTERNAL),{createFirebaseNamespace:u0,extendNamespace:e,createSubscribe:Jb,ErrorFactory:hs,deepExtend:Yu});function e(n){Yu(t,n)}return t}const KR=u0();/**
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
 */const av=new Wl("@firebase/app-compat"),GR="@firebase/app-compat",WR="0.2.9";/**
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
 */function QR(t){ln(GR,WR,t)}/**
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
 */if(Tx()&&self.firebase!==void 0){av.warn(`
    Warning: Firebase is already defined in the global scope. Please make sure
    Firebase library is only loaded once.
  `);const t=self.firebase.SDK_VERSION;t&&t.indexOf("LITE")>=0&&av.warn(`
    Warning: You are trying to load Firebase while using Firebase Performance standalone script.
    You should load Firebase Performance with this instance of Firebase to avoid loading duplicate code.
    `)}const ds=KR;QR();var YR="firebase",XR="9.21.0";/**
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
 */ds.registerVersion(YR,XR,"app-compat");function Vp(t,e){var n={};for(var r in t)Object.prototype.hasOwnProperty.call(t,r)&&e.indexOf(r)<0&&(n[r]=t[r]);if(t!=null&&typeof Object.getOwnPropertySymbols=="function")for(var i=0,r=Object.getOwnPropertySymbols(t);i<r.length;i++)e.indexOf(r[i])<0&&Object.prototype.propertyIsEnumerable.call(t,r[i])&&(n[r[i]]=t[r[i]]);return n}const jo={FACEBOOK:"facebook.com",GITHUB:"github.com",GOOGLE:"google.com",PASSWORD:"password",PHONE:"phone",TWITTER:"twitter.com"},Ts={EMAIL_SIGNIN:"EMAIL_SIGNIN",PASSWORD_RESET:"PASSWORD_RESET",RECOVER_EMAIL:"RECOVER_EMAIL",REVERT_SECOND_FACTOR_ADDITION:"REVERT_SECOND_FACTOR_ADDITION",VERIFY_AND_CHANGE_EMAIL:"VERIFY_AND_CHANGE_EMAIL",VERIFY_EMAIL:"VERIFY_EMAIL"};/**
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
 */function JR(){return{["admin-restricted-operation"]:"This operation is restricted to administrators only.",["argument-error"]:"",["app-not-authorized"]:"This app, identified by the domain where it's hosted, is not authorized to use Firebase Authentication with the provided API key. Review your key configuration in the Google API console.",["app-not-installed"]:"The requested mobile application corresponding to the identifier (Android package name or iOS bundle ID) provided is not installed on this device.",["captcha-check-failed"]:"The reCAPTCHA response token provided is either invalid, expired, already used or the domain associated with it does not match the list of whitelisted domains.",["code-expired"]:"The SMS code has expired. Please re-send the verification code to try again.",["cordova-not-ready"]:"Cordova framework is not ready.",["cors-unsupported"]:"This browser is not supported.",["credential-already-in-use"]:"This credential is already associated with a different user account.",["custom-token-mismatch"]:"The custom token corresponds to a different audience.",["requires-recent-login"]:"This operation is sensitive and requires recent authentication. Log in again before retrying this request.",["dependent-sdk-initialized-before-auth"]:"Another Firebase SDK was initialized and is trying to use Auth before Auth is initialized. Please be sure to call `initializeAuth` or `getAuth` before starting any other Firebase SDK.",["dynamic-link-not-activated"]:"Please activate Dynamic Links in the Firebase Console and agree to the terms and conditions.",["email-change-needs-verification"]:"Multi-factor users must always have a verified email.",["email-already-in-use"]:"The email address is already in use by another account.",["emulator-config-failed"]:'Auth instance has already been used to make a network call. Auth can no longer be configured to use the emulator. Try calling "connectAuthEmulator()" sooner.',["expired-action-code"]:"The action code has expired.",["cancelled-popup-request"]:"This operation has been cancelled due to another conflicting popup being opened.",["internal-error"]:"An internal AuthError has occurred.",["invalid-app-credential"]:"The phone verification request contains an invalid application verifier. The reCAPTCHA token response is either invalid or expired.",["invalid-app-id"]:"The mobile app identifier is not registed for the current project.",["invalid-user-token"]:"This user's credential isn't valid for this project. This can happen if the user's token has been tampered with, or if the user isn't for the project associated with this API key.",["invalid-auth-event"]:"An internal AuthError has occurred.",["invalid-verification-code"]:"The SMS verification code used to create the phone auth credential is invalid. Please resend the verification code sms and be sure to use the verification code provided by the user.",["invalid-continue-uri"]:"The continue URL provided in the request is invalid.",["invalid-cordova-configuration"]:"The following Cordova plugins must be installed to enable OAuth sign-in: cordova-plugin-buildinfo, cordova-universal-links-plugin, cordova-plugin-browsertab, cordova-plugin-inappbrowser and cordova-plugin-customurlscheme.",["invalid-custom-token"]:"The custom token format is incorrect. Please check the documentation.",["invalid-dynamic-link-domain"]:"The provided dynamic link domain is not configured or authorized for the current project.",["invalid-email"]:"The email address is badly formatted.",["invalid-emulator-scheme"]:"Emulator URL must start with a valid scheme (http:// or https://).",["invalid-api-key"]:"Your API key is invalid, please check you have copied it correctly.",["invalid-cert-hash"]:"The SHA-1 certificate hash provided is invalid.",["invalid-credential"]:"The supplied auth credential is malformed or has expired.",["invalid-message-payload"]:"The email template corresponding to this action contains invalid characters in its message. Please fix by going to the Auth email templates section in the Firebase Console.",["invalid-multi-factor-session"]:"The request does not contain a valid proof of first factor successful sign-in.",["invalid-oauth-provider"]:"EmailAuthProvider is not supported for this operation. This operation only supports OAuth providers.",["invalid-oauth-client-id"]:"The OAuth client ID provided is either invalid or does not match the specified API key.",["unauthorized-domain"]:"This domain is not authorized for OAuth operations for your Firebase project. Edit the list of authorized domains from the Firebase console.",["invalid-action-code"]:"The action code is invalid. This can happen if the code is malformed, expired, or has already been used.",["wrong-password"]:"The password is invalid or the user does not have a password.",["invalid-persistence-type"]:"The specified persistence type is invalid. It can only be local, session or none.",["invalid-phone-number"]:"The format of the phone number provided is incorrect. Please enter the phone number in a format that can be parsed into E.164 format. E.164 phone numbers are written in the format [+][country code][subscriber number including area code].",["invalid-provider-id"]:"The specified provider ID is invalid.",["invalid-recipient-email"]:"The email corresponding to this action failed to send as the provided recipient email address is invalid.",["invalid-sender"]:"The email template corresponding to this action contains an invalid sender email or name. Please fix by going to the Auth email templates section in the Firebase Console.",["invalid-verification-id"]:"The verification ID used to create the phone auth credential is invalid.",["invalid-tenant-id"]:"The Auth instance's tenant ID is invalid.",["login-blocked"]:"Login blocked by user-provided method: {$originalMessage}",["missing-android-pkg-name"]:"An Android Package Name must be provided if the Android App is required to be installed.",["auth-domain-config-required"]:"Be sure to include authDomain when calling firebase.initializeApp(), by following the instructions in the Firebase console.",["missing-app-credential"]:"The phone verification request is missing an application verifier assertion. A reCAPTCHA response token needs to be provided.",["missing-verification-code"]:"The phone auth credential was created with an empty SMS verification code.",["missing-continue-uri"]:"A continue URL must be provided in the request.",["missing-iframe-start"]:"An internal AuthError has occurred.",["missing-ios-bundle-id"]:"An iOS Bundle ID must be provided if an App Store ID is provided.",["missing-or-invalid-nonce"]:"The request does not contain a valid nonce. This can occur if the SHA-256 hash of the provided raw nonce does not match the hashed nonce in the ID token payload.",["missing-password"]:"A non-empty password must be provided",["missing-multi-factor-info"]:"No second factor identifier is provided.",["missing-multi-factor-session"]:"The request is missing proof of first factor successful sign-in.",["missing-phone-number"]:"To send verification codes, provide a phone number for the recipient.",["missing-verification-id"]:"The phone auth credential was created with an empty verification ID.",["app-deleted"]:"This instance of FirebaseApp has been deleted.",["multi-factor-info-not-found"]:"The user does not have a second factor matching the identifier provided.",["multi-factor-auth-required"]:"Proof of ownership of a second factor is required to complete sign-in.",["account-exists-with-different-credential"]:"An account already exists with the same email address but different sign-in credentials. Sign in using a provider associated with this email address.",["network-request-failed"]:"A network AuthError (such as timeout, interrupted connection or unreachable host) has occurred.",["no-auth-event"]:"An internal AuthError has occurred.",["no-such-provider"]:"User was not linked to an account with the given provider.",["null-user"]:"A null user object was provided as the argument for an operation which requires a non-null user object.",["operation-not-allowed"]:"The given sign-in provider is disabled for this Firebase project. Enable it in the Firebase console, under the sign-in method tab of the Auth section.",["operation-not-supported-in-this-environment"]:'This operation is not supported in the environment this application is running on. "location.protocol" must be http, https or chrome-extension and web storage must be enabled.',["popup-blocked"]:"Unable to establish a connection with the popup. It may have been blocked by the browser.",["popup-closed-by-user"]:"The popup has been closed by the user before finalizing the operation.",["provider-already-linked"]:"User can only be linked to one identity for the given provider.",["quota-exceeded"]:"The project's quota for this operation has been exceeded.",["redirect-cancelled-by-user"]:"The redirect operation has been cancelled by the user before finalizing.",["redirect-operation-pending"]:"A redirect sign-in operation is already pending.",["rejected-credential"]:"The request contains malformed or mismatching credentials.",["second-factor-already-in-use"]:"The second factor is already enrolled on this account.",["maximum-second-factor-count-exceeded"]:"The maximum allowed number of second factors on a user has been exceeded.",["tenant-id-mismatch"]:"The provided tenant ID does not match the Auth instance's tenant ID",timeout:"The operation has timed out.",["user-token-expired"]:"The user's credential is no longer valid. The user must sign in again.",["too-many-requests"]:"We have blocked all requests from this device due to unusual activity. Try again later.",["unauthorized-continue-uri"]:"The domain of the continue URL is not whitelisted.  Please whitelist the domain in the Firebase console.",["unsupported-first-factor"]:"Enrolling a second factor or signing in with a multi-factor account requires sign-in with a supported first factor.",["unsupported-persistence-type"]:"The current environment does not support the specified persistence type.",["unsupported-tenant-operation"]:"This operation is not supported in a multi-tenant context.",["unverified-email"]:"The operation requires a verified email.",["user-cancelled"]:"The user did not grant your application the permissions it requested.",["user-not-found"]:"There is no user record corresponding to this identifier. The user may have been deleted.",["user-disabled"]:"The user account has been disabled by an administrator.",["user-mismatch"]:"The supplied credentials do not correspond to the previously signed in user.",["user-signed-out"]:"",["weak-password"]:"The password must be 6 characters long or more.",["web-storage-unsupported"]:"This browser is not supported or 3rd party cookies and data may be disabled.",["already-initialized"]:"initializeAuth() has already been called with different options. To avoid this error, call initializeAuth() with the same options as when it was originally called, or call getAuth() to return the already initialized instance.",["missing-recaptcha-token"]:"The reCAPTCHA token is missing when sending request to the backend.",["invalid-recaptcha-token"]:"The reCAPTCHA token is invalid when sending request to the backend.",["invalid-recaptcha-action"]:"The reCAPTCHA action is invalid when sending request to the backend.",["recaptcha-not-enabled"]:"reCAPTCHA Enterprise integration is not enabled for this project.",["missing-client-type"]:"The reCAPTCHA client type is missing when sending request to the backend.",["missing-recaptcha-version"]:"The reCAPTCHA version is missing when sending request to the backend.",["invalid-req-type"]:"Invalid request parameters.",["invalid-recaptcha-version"]:"The reCAPTCHA version is invalid when sending request to the backend."}}function l0(){return{["dependent-sdk-initialized-before-auth"]:"Another Firebase SDK was initialized and is trying to use Auth before Auth is initialized. Please be sure to call `initializeAuth` or `getAuth` before starting any other Firebase SDK."}}const ZR=JR,eN=l0,h0=new hs("auth","Firebase",l0());/**
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
 */const Ju=new Wl("@firebase/auth");function tN(t,...e){Ju.logLevel<=pe.WARN&&Ju.warn(`Auth (${wr}): ${t}`,...e)}function Nu(t,...e){Ju.logLevel<=pe.ERROR&&Ju.error(`Auth (${wr}): ${t}`,...e)}/**
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
 */function Tt(t,...e){throw $p(t,...e)}function bt(t,...e){return $p(t,...e)}function d0(t,e,n){const r=Object.assign(Object.assign({},eN()),{[e]:n});return new hs("auth","Firebase",r).create(e,{appName:t.name})}function To(t,e,n){const r=n;if(!(e instanceof r))throw r.name!==e.constructor.name&&Tt(t,"argument-error"),d0(t,"argument-error",`Type of ${e.constructor.name} does not match expected instance.Did you pass a reference from a different Auth SDK?`)}function $p(t,...e){if(typeof t!="string"){const n=e[0],r=[...e.slice(1)];return r[0]&&(r[0].appName=t.name),t._errorFactory.create(n,...r)}return h0.create(t,...e)}function P(t,e,...n){if(!t)throw $p(e,...n)}function $n(t){const e="INTERNAL ASSERTION FAILED: "+t;throw Nu(e),new Error(e)}function kn(t,e){t||$n(e)}/**
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
 */function Va(){var t;return typeof self<"u"&&((t=self.location)===null||t===void 0?void 0:t.href)||""}function Bp(){return cv()==="http:"||cv()==="https:"}function cv(){var t;return typeof self<"u"&&((t=self.location)===null||t===void 0?void 0:t.protocol)||null}/**
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
 */function nN(){return typeof navigator<"u"&&navigator&&"onLine"in navigator&&typeof navigator.onLine=="boolean"&&(Bp()||Yb()||"connection"in navigator)?navigator.onLine:!0}function rN(){if(typeof navigator>"u")return null;const t=navigator;return t.languages&&t.languages[0]||t.language||null}/**
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
 */class gc{constructor(e,n){this.shortDelay=e,this.longDelay=n,kn(n>e,"Short delay should be less than long delay!"),this.isMobile=Ex()||Lp()}get(){return nN()?this.isMobile?this.longDelay:this.shortDelay:Math.min(5e3,this.shortDelay)}}/**
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
 */function qp(t,e){kn(t.emulator,"Emulator should always be set here");const{url:n}=t.emulator;return e?`${n}${e.startsWith("/")?e.slice(1):e}`:n}/**
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
 */class f0{static initialize(e,n,r){this.fetchImpl=e,n&&(this.headersImpl=n),r&&(this.responseImpl=r)}static fetch(){if(this.fetchImpl)return this.fetchImpl;if(typeof self<"u"&&"fetch"in self)return self.fetch;$n("Could not find fetch implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}static headers(){if(this.headersImpl)return this.headersImpl;if(typeof self<"u"&&"Headers"in self)return self.Headers;$n("Could not find Headers implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}static response(){if(this.responseImpl)return this.responseImpl;if(typeof self<"u"&&"Response"in self)return self.Response;$n("Could not find Response implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}}/**
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
 */const iN={CREDENTIAL_MISMATCH:"custom-token-mismatch",MISSING_CUSTOM_TOKEN:"internal-error",INVALID_IDENTIFIER:"invalid-email",MISSING_CONTINUE_URI:"internal-error",INVALID_PASSWORD:"wrong-password",MISSING_PASSWORD:"missing-password",EMAIL_EXISTS:"email-already-in-use",PASSWORD_LOGIN_DISABLED:"operation-not-allowed",INVALID_IDP_RESPONSE:"invalid-credential",INVALID_PENDING_TOKEN:"invalid-credential",FEDERATED_USER_ID_ALREADY_LINKED:"credential-already-in-use",MISSING_REQ_TYPE:"internal-error",EMAIL_NOT_FOUND:"user-not-found",RESET_PASSWORD_EXCEED_LIMIT:"too-many-requests",EXPIRED_OOB_CODE:"expired-action-code",INVALID_OOB_CODE:"invalid-action-code",MISSING_OOB_CODE:"internal-error",CREDENTIAL_TOO_OLD_LOGIN_AGAIN:"requires-recent-login",INVALID_ID_TOKEN:"invalid-user-token",TOKEN_EXPIRED:"user-token-expired",USER_NOT_FOUND:"user-token-expired",TOO_MANY_ATTEMPTS_TRY_LATER:"too-many-requests",INVALID_CODE:"invalid-verification-code",INVALID_SESSION_INFO:"invalid-verification-id",INVALID_TEMPORARY_PROOF:"invalid-credential",MISSING_SESSION_INFO:"missing-verification-id",SESSION_EXPIRED:"code-expired",MISSING_ANDROID_PACKAGE_NAME:"missing-android-pkg-name",UNAUTHORIZED_DOMAIN:"unauthorized-continue-uri",INVALID_OAUTH_CLIENT_ID:"invalid-oauth-client-id",ADMIN_ONLY_OPERATION:"admin-restricted-operation",INVALID_MFA_PENDING_CREDENTIAL:"invalid-multi-factor-session",MFA_ENROLLMENT_NOT_FOUND:"multi-factor-info-not-found",MISSING_MFA_ENROLLMENT_ID:"missing-multi-factor-info",MISSING_MFA_PENDING_CREDENTIAL:"missing-multi-factor-session",SECOND_FACTOR_EXISTS:"second-factor-already-in-use",SECOND_FACTOR_LIMIT_EXCEEDED:"maximum-second-factor-count-exceeded",BLOCKING_FUNCTION_ERROR_RESPONSE:"internal-error",RECAPTCHA_NOT_ENABLED:"recaptcha-not-enabled",MISSING_RECAPTCHA_TOKEN:"missing-recaptcha-token",INVALID_RECAPTCHA_TOKEN:"invalid-recaptcha-token",INVALID_RECAPTCHA_ACTION:"invalid-recaptcha-action",MISSING_CLIENT_TYPE:"missing-client-type",MISSING_RECAPTCHA_VERSION:"missing-recaptcha-version",INVALID_RECAPTCHA_VERSION:"invalid-recaptcha-version",INVALID_REQ_TYPE:"invalid-req-type"};/**
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
 */const sN=new gc(3e4,6e4);function st(t,e){return t.tenantId&&!e.tenantId?Object.assign(Object.assign({},e),{tenantId:t.tenantId}):e}async function ut(t,e,n,r,i={}){return p0(t,i,async()=>{let s={},o={};r&&(e==="GET"?o=r:s={body:JSON.stringify(r)});const a=Eo(Object.assign({key:t.config.apiKey},o)).slice(1),c=await t._getAdditionalHeaders();return c["Content-Type"]="application/json",t.languageCode&&(c["X-Firebase-Locale"]=t.languageCode),f0.fetch()(m0(t,t.config.apiHost,n,a),Object.assign({method:e,headers:c,referrerPolicy:"no-referrer"},s))})}async function p0(t,e,n){t._canInitEmulator=!1;const r=Object.assign(Object.assign({},iN),e);try{const i=new oN(t),s=await Promise.race([n(),i.promise]);i.clearNetworkTimeout();const o=await s.json();if("needConfirmation"in o)throw ra(t,"account-exists-with-different-credential",o);if(s.ok&&!("errorMessage"in o))return o;{const a=s.ok?o.errorMessage:o.error.message,[c,u]=a.split(" : ");if(c==="FEDERATED_USER_ID_ALREADY_LINKED")throw ra(t,"credential-already-in-use",o);if(c==="EMAIL_EXISTS")throw ra(t,"email-already-in-use",o);if(c==="USER_DISABLED")throw ra(t,"user-disabled",o);const l=r[c]||c.toLowerCase().replace(/[_\s]+/g,"-");if(u)throw d0(t,l,u);Tt(t,l)}}catch(i){if(i instanceof Rt)throw i;Tt(t,"network-request-failed",{message:String(i)})}}async function _r(t,e,n,r,i={}){const s=await ut(t,e,n,r,i);return"mfaPendingCredential"in s&&Tt(t,"multi-factor-auth-required",{_serverResponse:s}),s}function m0(t,e,n,r){const i=`${e}${n}?${r}`;return t.config.emulator?qp(t.config,i):`${t.config.apiScheme}://${i}`}class oN{constructor(e){this.auth=e,this.timer=null,this.promise=new Promise((n,r)=>{this.timer=setTimeout(()=>r(bt(this.auth,"network-request-failed")),sN.get())})}clearNetworkTimeout(){clearTimeout(this.timer)}}function ra(t,e,n){const r={appName:t.name};n.email&&(r.email=n.email),n.phoneNumber&&(r.phoneNumber=n.phoneNumber);const i=bt(t,e,r);return i.customData._tokenResponse=n,i}/**
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
 */async function aN(t,e){return ut(t,"POST","/v1/accounts:delete",e)}async function cN(t,e){return ut(t,"POST","/v1/accounts:update",e)}async function uN(t,e){return ut(t,"POST","/v1/accounts:lookup",e)}/**
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
 */function ma(t){if(!!t)try{const e=new Date(Number(t));if(!isNaN(e.getTime()))return e.toUTCString()}catch{}}async function lN(t,e=!1){const n=Y(t),r=await n.getIdToken(e),i=Ql(r);P(i&&i.exp&&i.auth_time&&i.iat,n.auth,"internal-error");const s=typeof i.firebase=="object"?i.firebase:void 0,o=s==null?void 0:s.sign_in_provider;return{claims:i,token:r,authTime:ma(ld(i.auth_time)),issuedAtTime:ma(ld(i.iat)),expirationTime:ma(ld(i.exp)),signInProvider:o||null,signInSecondFactor:(s==null?void 0:s.sign_in_second_factor)||null}}function ld(t){return Number(t)*1e3}function Ql(t){const[e,n,r]=t.split(".");if(e===void 0||n===void 0||r===void 0)return Nu("JWT malformed, contained fewer than 3 sections"),null;try{const i=Wb(n);return i?JSON.parse(i):(Nu("Failed to decode base64 JWT payload"),null)}catch(i){return Nu("Caught error parsing JWT payload as JSON",i==null?void 0:i.toString()),null}}function hN(t){const e=Ql(t);return P(e,"internal-error"),P(typeof e.exp<"u","internal-error"),P(typeof e.iat<"u","internal-error"),Number(e.exp)-Number(e.iat)}/**
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
 */async function dr(t,e,n=!1){if(n)return e;try{return await e}catch(r){throw r instanceof Rt&&dN(r)&&t.auth.currentUser===t&&await t.auth.signOut(),r}}function dN({code:t}){return t==="auth/user-disabled"||t==="auth/user-token-expired"}/**
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
 */class fN{constructor(e){this.user=e,this.isRunning=!1,this.timerId=null,this.errorBackoff=3e4}_start(){this.isRunning||(this.isRunning=!0,this.schedule())}_stop(){!this.isRunning||(this.isRunning=!1,this.timerId!==null&&clearTimeout(this.timerId))}getInterval(e){var n;if(e){const r=this.errorBackoff;return this.errorBackoff=Math.min(this.errorBackoff*2,96e4),r}else{this.errorBackoff=3e4;const i=((n=this.user.stsTokenManager.expirationTime)!==null&&n!==void 0?n:0)-Date.now()-3e5;return Math.max(0,i)}}schedule(e=!1){if(!this.isRunning)return;const n=this.getInterval(e);this.timerId=setTimeout(async()=>{await this.iteration()},n)}async iteration(){try{await this.user.getIdToken(!0)}catch(e){(e==null?void 0:e.code)==="auth/network-request-failed"&&this.schedule(!0);return}this.schedule()}}/**
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
 */class g0{constructor(e,n){this.createdAt=e,this.lastLoginAt=n,this._initializeTime()}_initializeTime(){this.lastSignInTime=ma(this.lastLoginAt),this.creationTime=ma(this.createdAt)}_copy(e){this.createdAt=e.createdAt,this.lastLoginAt=e.lastLoginAt,this._initializeTime()}toJSON(){return{createdAt:this.createdAt,lastLoginAt:this.lastLoginAt}}}/**
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
 */async function $a(t){var e;const n=t.auth,r=await t.getIdToken(),i=await dr(t,uN(n,{idToken:r}));P(i==null?void 0:i.users.length,n,"internal-error");const s=i.users[0];t._notifyReloadListener(s);const o=!((e=s.providerUserInfo)===null||e===void 0)&&e.length?gN(s.providerUserInfo):[],a=mN(t.providerData,o),c=t.isAnonymous,u=!(t.email&&s.passwordHash)&&!(a!=null&&a.length),l=c?u:!1,h={uid:s.localId,displayName:s.displayName||null,photoURL:s.photoUrl||null,email:s.email||null,emailVerified:s.emailVerified||!1,phoneNumber:s.phoneNumber||null,tenantId:s.tenantId||null,providerData:a,metadata:new g0(s.createdAt,s.lastLoginAt),isAnonymous:l};Object.assign(t,h)}async function pN(t){const e=Y(t);await $a(e),await e.auth._persistUserIfCurrent(e),e.auth._notifyListenersIfCurrent(e)}function mN(t,e){return[...t.filter(r=>!e.some(i=>i.providerId===r.providerId)),...e]}function gN(t){return t.map(e=>{var{providerId:n}=e,r=Vp(e,["providerId"]);return{providerId:n,uid:r.rawId||"",displayName:r.displayName||null,email:r.email||null,phoneNumber:r.phoneNumber||null,photoURL:r.photoUrl||null}})}/**
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
 */async function yN(t,e){const n=await p0(t,{},async()=>{const r=Eo({grant_type:"refresh_token",refresh_token:e}).slice(1),{tokenApiHost:i,apiKey:s}=t.config,o=m0(t,i,"/v1/token",`key=${s}`),a=await t._getAdditionalHeaders();return a["Content-Type"]="application/x-www-form-urlencoded",f0.fetch()(o,{method:"POST",headers:a,body:r})});return{accessToken:n.access_token,expiresIn:n.expires_in,refreshToken:n.refresh_token}}/**
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
 */class Ba{constructor(){this.refreshToken=null,this.accessToken=null,this.expirationTime=null}get isExpired(){return!this.expirationTime||Date.now()>this.expirationTime-3e4}updateFromServerResponse(e){P(e.idToken,"internal-error"),P(typeof e.idToken<"u","internal-error"),P(typeof e.refreshToken<"u","internal-error");const n="expiresIn"in e&&typeof e.expiresIn<"u"?Number(e.expiresIn):hN(e.idToken);this.updateTokensAndExpiration(e.idToken,e.refreshToken,n)}async getToken(e,n=!1){return P(!this.accessToken||this.refreshToken,e,"user-token-expired"),!n&&this.accessToken&&!this.isExpired?this.accessToken:this.refreshToken?(await this.refresh(e,this.refreshToken),this.accessToken):null}clearRefreshToken(){this.refreshToken=null}async refresh(e,n){const{accessToken:r,refreshToken:i,expiresIn:s}=await yN(e,n);this.updateTokensAndExpiration(r,i,Number(s))}updateTokensAndExpiration(e,n,r){this.refreshToken=n||null,this.accessToken=e||null,this.expirationTime=Date.now()+r*1e3}static fromJSON(e,n){const{refreshToken:r,accessToken:i,expirationTime:s}=n,o=new Ba;return r&&(P(typeof r=="string","internal-error",{appName:e}),o.refreshToken=r),i&&(P(typeof i=="string","internal-error",{appName:e}),o.accessToken=i),s&&(P(typeof s=="number","internal-error",{appName:e}),o.expirationTime=s),o}toJSON(){return{refreshToken:this.refreshToken,accessToken:this.accessToken,expirationTime:this.expirationTime}}_assign(e){this.accessToken=e.accessToken,this.refreshToken=e.refreshToken,this.expirationTime=e.expirationTime}_clone(){return Object.assign(new Ba,this.toJSON())}_performRefresh(){return $n("not implemented")}}/**
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
 */function Pr(t,e){P(typeof t=="string"||typeof t>"u","internal-error",{appName:e})}class zi{constructor(e){var{uid:n,auth:r,stsTokenManager:i}=e,s=Vp(e,["uid","auth","stsTokenManager"]);this.providerId="firebase",this.proactiveRefresh=new fN(this),this.reloadUserInfo=null,this.reloadListener=null,this.uid=n,this.auth=r,this.stsTokenManager=i,this.accessToken=i.accessToken,this.displayName=s.displayName||null,this.email=s.email||null,this.emailVerified=s.emailVerified||!1,this.phoneNumber=s.phoneNumber||null,this.photoURL=s.photoURL||null,this.isAnonymous=s.isAnonymous||!1,this.tenantId=s.tenantId||null,this.providerData=s.providerData?[...s.providerData]:[],this.metadata=new g0(s.createdAt||void 0,s.lastLoginAt||void 0)}async getIdToken(e){const n=await dr(this,this.stsTokenManager.getToken(this.auth,e));return P(n,this.auth,"internal-error"),this.accessToken!==n&&(this.accessToken=n,await this.auth._persistUserIfCurrent(this),this.auth._notifyListenersIfCurrent(this)),n}getIdTokenResult(e){return lN(this,e)}reload(){return pN(this)}_assign(e){this!==e&&(P(this.uid===e.uid,this.auth,"internal-error"),this.displayName=e.displayName,this.photoURL=e.photoURL,this.email=e.email,this.emailVerified=e.emailVerified,this.phoneNumber=e.phoneNumber,this.isAnonymous=e.isAnonymous,this.tenantId=e.tenantId,this.providerData=e.providerData.map(n=>Object.assign({},n)),this.metadata._copy(e.metadata),this.stsTokenManager._assign(e.stsTokenManager))}_clone(e){const n=new zi(Object.assign(Object.assign({},this),{auth:e,stsTokenManager:this.stsTokenManager._clone()}));return n.metadata._copy(this.metadata),n}_onReload(e){P(!this.reloadListener,this.auth,"internal-error"),this.reloadListener=e,this.reloadUserInfo&&(this._notifyReloadListener(this.reloadUserInfo),this.reloadUserInfo=null)}_notifyReloadListener(e){this.reloadListener?this.reloadListener(e):this.reloadUserInfo=e}_startProactiveRefresh(){this.proactiveRefresh._start()}_stopProactiveRefresh(){this.proactiveRefresh._stop()}async _updateTokensIfNecessary(e,n=!1){let r=!1;e.idToken&&e.idToken!==this.stsTokenManager.accessToken&&(this.stsTokenManager.updateFromServerResponse(e),r=!0),n&&await $a(this),await this.auth._persistUserIfCurrent(this),r&&this.auth._notifyListenersIfCurrent(this)}async delete(){const e=await this.getIdToken();return await dr(this,aN(this.auth,{idToken:e})),this.stsTokenManager.clearRefreshToken(),this.auth.signOut()}toJSON(){return Object.assign(Object.assign({uid:this.uid,email:this.email||void 0,emailVerified:this.emailVerified,displayName:this.displayName||void 0,isAnonymous:this.isAnonymous,photoURL:this.photoURL||void 0,phoneNumber:this.phoneNumber||void 0,tenantId:this.tenantId||void 0,providerData:this.providerData.map(e=>Object.assign({},e)),stsTokenManager:this.stsTokenManager.toJSON(),_redirectEventId:this._redirectEventId},this.metadata.toJSON()),{apiKey:this.auth.config.apiKey,appName:this.auth.name})}get refreshToken(){return this.stsTokenManager.refreshToken||""}static _fromJSON(e,n){var r,i,s,o,a,c,u,l;const h=(r=n.displayName)!==null&&r!==void 0?r:void 0,d=(i=n.email)!==null&&i!==void 0?i:void 0,f=(s=n.phoneNumber)!==null&&s!==void 0?s:void 0,m=(o=n.photoURL)!==null&&o!==void 0?o:void 0,y=(a=n.tenantId)!==null&&a!==void 0?a:void 0,I=(c=n._redirectEventId)!==null&&c!==void 0?c:void 0,v=(u=n.createdAt)!==null&&u!==void 0?u:void 0,E=(l=n.lastLoginAt)!==null&&l!==void 0?l:void 0,{uid:_,emailVerified:R,isAnonymous:M,providerData:H,stsTokenManager:ne}=n;P(_&&ne,e,"internal-error");const K=Ba.fromJSON(this.name,ne);P(typeof _=="string",e,"internal-error"),Pr(h,e.name),Pr(d,e.name),P(typeof R=="boolean",e,"internal-error"),P(typeof M=="boolean",e,"internal-error"),Pr(f,e.name),Pr(m,e.name),Pr(y,e.name),Pr(I,e.name),Pr(v,e.name),Pr(E,e.name);const ae=new zi({uid:_,auth:e,email:d,emailVerified:R,displayName:h,isAnonymous:M,photoURL:m,phoneNumber:f,tenantId:y,stsTokenManager:K,createdAt:v,lastLoginAt:E});return H&&Array.isArray(H)&&(ae.providerData=H.map(we=>Object.assign({},we))),I&&(ae._redirectEventId=I),ae}static async _fromIdTokenResponse(e,n,r=!1){const i=new Ba;i.updateFromServerResponse(n);const s=new zi({uid:n.localId,auth:e,stsTokenManager:i,isAnonymous:r});return await $a(s),s}}/**
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
 */const uv=new Map;function en(t){kn(t instanceof Function,"Expected a class definition");let e=uv.get(t);return e?(kn(e instanceof t,"Instance stored in cache mismatched with class"),e):(e=new t,uv.set(t,e),e)}/**
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
 */class y0{constructor(){this.type="NONE",this.storage={}}async _isAvailable(){return!0}async _set(e,n){this.storage[e]=n}async _get(e){const n=this.storage[e];return n===void 0?null:n}async _remove(e){delete this.storage[e]}_addListener(e,n){}_removeListener(e,n){}}y0.type="NONE";const ro=y0;/**
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
 */function Hi(t,e,n){return`firebase:${t}:${e}:${n}`}class js{constructor(e,n,r){this.persistence=e,this.auth=n,this.userKey=r;const{config:i,name:s}=this.auth;this.fullUserKey=Hi(this.userKey,i.apiKey,s),this.fullPersistenceKey=Hi("persistence",i.apiKey,s),this.boundEventHandler=n._onStorageEvent.bind(n),this.persistence._addListener(this.fullUserKey,this.boundEventHandler)}setCurrentUser(e){return this.persistence._set(this.fullUserKey,e.toJSON())}async getCurrentUser(){const e=await this.persistence._get(this.fullUserKey);return e?zi._fromJSON(this.auth,e):null}removeCurrentUser(){return this.persistence._remove(this.fullUserKey)}savePersistenceForRedirect(){return this.persistence._set(this.fullPersistenceKey,this.persistence.type)}async setPersistence(e){if(this.persistence===e)return;const n=await this.getCurrentUser();if(await this.removeCurrentUser(),this.persistence=e,n)return this.setCurrentUser(n)}delete(){this.persistence._removeListener(this.fullUserKey,this.boundEventHandler)}static async create(e,n,r="authUser"){if(!n.length)return new js(en(ro),e,r);const i=(await Promise.all(n.map(async u=>{if(await u._isAvailable())return u}))).filter(u=>u);let s=i[0]||en(ro);const o=Hi(r,e.config.apiKey,e.name);let a=null;for(const u of n)try{const l=await u._get(o);if(l){const h=zi._fromJSON(e,l);u!==s&&(a=h),s=u;break}}catch{}const c=i.filter(u=>u._shouldAllowMigration);return!s._shouldAllowMigration||!c.length?new js(s,e,r):(s=c[0],a&&await s._set(o,a.toJSON()),await Promise.all(n.map(async u=>{if(u!==s)try{await u._remove(o)}catch{}})),new js(s,e,r))}}/**
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
 */function lv(t){const e=t.toLowerCase();if(e.includes("opera/")||e.includes("opr/")||e.includes("opios/"))return"Opera";if(_0(e))return"IEMobile";if(e.includes("msie")||e.includes("trident/"))return"IE";if(e.includes("edge/"))return"Edge";if(v0(e))return"Firefox";if(e.includes("silk/"))return"Silk";if(b0(e))return"Blackberry";if(I0(e))return"Webos";if(jp(e))return"Safari";if((e.includes("chrome/")||w0(e))&&!e.includes("edge/"))return"Chrome";if(yc(e))return"Android";{const n=/([a-zA-Z\d\.]+)\/[a-zA-Z\d\.]*$/,r=t.match(n);if((r==null?void 0:r.length)===2)return r[1]}return"Other"}function v0(t=ze()){return/firefox\//i.test(t)}function jp(t=ze()){const e=t.toLowerCase();return e.includes("safari/")&&!e.includes("chrome/")&&!e.includes("crios/")&&!e.includes("android")}function w0(t=ze()){return/crios\//i.test(t)}function _0(t=ze()){return/iemobile/i.test(t)}function yc(t=ze()){return/android/i.test(t)}function b0(t=ze()){return/blackberry/i.test(t)}function I0(t=ze()){return/webos/i.test(t)}function So(t=ze()){return/iphone|ipad|ipod/i.test(t)||/macintosh/i.test(t)&&/mobile/i.test(t)}function vN(t=ze()){return/(iPad|iPhone|iPod).*OS 7_\d/i.test(t)||/(iPad|iPhone|iPod).*OS 8_\d/i.test(t)}function wN(t=ze()){var e;return So(t)&&!!(!((e=window.navigator)===null||e===void 0)&&e.standalone)}function _N(){return Xb()&&document.documentMode===10}function E0(t=ze()){return So(t)||yc(t)||I0(t)||b0(t)||/windows phone/i.test(t)||_0(t)}function bN(){try{return!!(window&&window!==window.top)}catch{return!1}}/**
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
 */function T0(t,e=[]){let n;switch(t){case"Browser":n=lv(ze());break;case"Worker":n=`${lv(ze())}-${t}`;break;default:n=t}const r=e.length?e.join(","):"FirebaseCore-web";return`${n}/JsCore/${wr}/${r}`}/**
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
 */async function IN(t){return(await ut(t,"GET","/v1/recaptchaParams")).recaptchaSiteKey||""}async function S0(t,e){return ut(t,"GET","/v2/recaptchaConfig",st(t,e))}/**
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
 */function hv(t){return t!==void 0&&t.getResponse!==void 0}function dv(t){return t!==void 0&&t.enterprise!==void 0}class k0{constructor(e){if(this.siteKey="",this.emailPasswordEnabled=!1,e.recaptchaKey===void 0)throw new Error("recaptchaKey undefined");this.siteKey=e.recaptchaKey.split("/")[3],this.emailPasswordEnabled=e.recaptchaEnforcementState.some(n=>n.provider==="EMAIL_PASSWORD_PROVIDER"&&n.enforcementState!=="OFF")}}/**
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
 */function EN(){var t,e;return(e=(t=document.getElementsByTagName("head"))===null||t===void 0?void 0:t[0])!==null&&e!==void 0?e:document}function zp(t){return new Promise((e,n)=>{const r=document.createElement("script");r.setAttribute("src",t),r.onload=e,r.onerror=i=>{const s=bt("internal-error");s.customData=i,n(s)},r.type="text/javascript",r.charset="UTF-8",EN().appendChild(r)})}function A0(t){return`__${t}${Math.floor(Math.random()*1e6)}`}const TN="https://www.google.com/recaptcha/enterprise.js?render=",SN="recaptcha-enterprise",kN="NO_RECAPTCHA";class C0{constructor(e){this.type=SN,this.auth=et(e)}async verify(e="verify",n=!1){async function r(s){if(!n){if(s.tenantId==null&&s._agentRecaptchaConfig!=null)return s._agentRecaptchaConfig.siteKey;if(s.tenantId!=null&&s._tenantRecaptchaConfigs[s.tenantId]!==void 0)return s._tenantRecaptchaConfigs[s.tenantId].siteKey}return new Promise(async(o,a)=>{S0(s,{clientType:"CLIENT_TYPE_WEB",version:"RECAPTCHA_ENTERPRISE"}).then(c=>{if(c.recaptchaKey===void 0)a(new Error("recaptcha Enterprise site key undefined"));else{const u=new k0(c);return s.tenantId==null?s._agentRecaptchaConfig=u:s._tenantRecaptchaConfigs[s.tenantId]=u,o(u.siteKey)}}).catch(c=>{a(c)})})}function i(s,o,a){const c=window.grecaptcha;dv(c)?c.enterprise.ready(()=>{c.enterprise.execute(s,{action:e}).then(u=>{o(u)}).catch(()=>{o(kN)})}):a(Error("No reCAPTCHA enterprise script loaded."))}return new Promise((s,o)=>{r(this.auth).then(a=>{if(!n&&dv(window.grecaptcha))i(a,s,o);else{if(typeof window>"u"){o(new Error("RecaptchaVerifier is only supported in browser"));return}zp(TN+a).then(()=>{i(a,s,o)}).catch(c=>{o(c)})}}).catch(a=>{o(a)})})}}async function Yr(t,e,n,r=!1){const i=new C0(t);let s;try{s=await i.verify(n)}catch{s=await i.verify(n,!0)}const o=Object.assign({},e);return r?Object.assign(o,{captchaResp:s}):Object.assign(o,{captchaResponse:s}),Object.assign(o,{clientType:"CLIENT_TYPE_WEB"}),Object.assign(o,{recaptchaVersion:"RECAPTCHA_ENTERPRISE"}),o}/**
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
 */class AN{constructor(e){this.auth=e,this.queue=[]}pushCallback(e,n){const r=s=>new Promise((o,a)=>{try{const c=e(s);o(c)}catch(c){a(c)}});r.onAbort=n,this.queue.push(r);const i=this.queue.length-1;return()=>{this.queue[i]=()=>Promise.resolve()}}async runMiddleware(e){if(this.auth.currentUser===e)return;const n=[];try{for(const r of this.queue)await r(e),r.onAbort&&n.push(r.onAbort)}catch(r){n.reverse();for(const i of n)try{i()}catch{}throw this.auth._errorFactory.create("login-blocked",{originalMessage:r==null?void 0:r.message})}}}/**
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
 */class CN{constructor(e,n,r,i){this.app=e,this.heartbeatServiceProvider=n,this.appCheckServiceProvider=r,this.config=i,this.currentUser=null,this.emulatorConfig=null,this.operations=Promise.resolve(),this.authStateSubscription=new fv(this),this.idTokenSubscription=new fv(this),this.beforeStateQueue=new AN(this),this.redirectUser=null,this.isProactiveRefreshEnabled=!1,this._canInitEmulator=!0,this._isInitialized=!1,this._deleted=!1,this._initializationPromise=null,this._popupRedirectResolver=null,this._errorFactory=h0,this._agentRecaptchaConfig=null,this._tenantRecaptchaConfigs={},this.lastNotifiedUid=void 0,this.languageCode=null,this.tenantId=null,this.settings={appVerificationDisabledForTesting:!1},this.frameworks=[],this.name=e.name,this.clientVersion=i.sdkClientVersion}_initializeWithPersistence(e,n){return n&&(this._popupRedirectResolver=en(n)),this._initializationPromise=this.queue(async()=>{var r,i;if(!this._deleted&&(this.persistenceManager=await js.create(this,e),!this._deleted)){if(!((r=this._popupRedirectResolver)===null||r===void 0)&&r._shouldInitProactively)try{await this._popupRedirectResolver._initialize(this)}catch{}await this.initializeCurrentUser(n),this.lastNotifiedUid=((i=this.currentUser)===null||i===void 0?void 0:i.uid)||null,!this._deleted&&(this._isInitialized=!0)}}),this._initializationPromise}async _onStorageEvent(){if(this._deleted)return;const e=await this.assertedPersistence.getCurrentUser();if(!(!this.currentUser&&!e)){if(this.currentUser&&e&&this.currentUser.uid===e.uid){this._currentUser._assign(e),await this.currentUser.getIdToken();return}await this._updateCurrentUser(e,!0)}}async initializeCurrentUser(e){var n;const r=await this.assertedPersistence.getCurrentUser();let i=r,s=!1;if(e&&this.config.authDomain){await this.getOrInitRedirectPersistenceManager();const o=(n=this.redirectUser)===null||n===void 0?void 0:n._redirectEventId,a=i==null?void 0:i._redirectEventId,c=await this.tryRedirectSignIn(e);(!o||o===a)&&(c==null?void 0:c.user)&&(i=c.user,s=!0)}if(!i)return this.directlySetCurrentUser(null);if(!i._redirectEventId){if(s)try{await this.beforeStateQueue.runMiddleware(i)}catch(o){i=r,this._popupRedirectResolver._overrideRedirectResult(this,()=>Promise.reject(o))}return i?this.reloadAndSetCurrentUserOrClear(i):this.directlySetCurrentUser(null)}return P(this._popupRedirectResolver,this,"argument-error"),await this.getOrInitRedirectPersistenceManager(),this.redirectUser&&this.redirectUser._redirectEventId===i._redirectEventId?this.directlySetCurrentUser(i):this.reloadAndSetCurrentUserOrClear(i)}async tryRedirectSignIn(e){let n=null;try{n=await this._popupRedirectResolver._completeRedirectFn(this,e,!0)}catch{await this._setRedirectUser(null)}return n}async reloadAndSetCurrentUserOrClear(e){try{await $a(e)}catch(n){if((n==null?void 0:n.code)!=="auth/network-request-failed")return this.directlySetCurrentUser(null)}return this.directlySetCurrentUser(e)}useDeviceLanguage(){this.languageCode=rN()}async _delete(){this._deleted=!0}async updateCurrentUser(e){const n=e?Y(e):null;return n&&P(n.auth.config.apiKey===this.config.apiKey,this,"invalid-user-token"),this._updateCurrentUser(n&&n._clone(this))}async _updateCurrentUser(e,n=!1){if(!this._deleted)return e&&P(this.tenantId===e.tenantId,this,"tenant-id-mismatch"),n||await this.beforeStateQueue.runMiddleware(e),this.queue(async()=>{await this.directlySetCurrentUser(e),this.notifyAuthListeners()})}async signOut(){return await this.beforeStateQueue.runMiddleware(null),(this.redirectPersistenceManager||this._popupRedirectResolver)&&await this._setRedirectUser(null),this._updateCurrentUser(null,!0)}setPersistence(e){return this.queue(async()=>{await this.assertedPersistence.setPersistence(en(e))})}async initializeRecaptchaConfig(){const e=await S0(this,{clientType:"CLIENT_TYPE_WEB",version:"RECAPTCHA_ENTERPRISE"}),n=new k0(e);this.tenantId==null?this._agentRecaptchaConfig=n:this._tenantRecaptchaConfigs[this.tenantId]=n,n.emailPasswordEnabled&&new C0(this).verify()}_getRecaptchaConfig(){return this.tenantId==null?this._agentRecaptchaConfig:this._tenantRecaptchaConfigs[this.tenantId]}_getPersistence(){return this.assertedPersistence.persistence.type}_updateErrorMap(e){this._errorFactory=new hs("auth","Firebase",e())}onAuthStateChanged(e,n,r){return this.registerStateListener(this.authStateSubscription,e,n,r)}beforeAuthStateChanged(e,n){return this.beforeStateQueue.pushCallback(e,n)}onIdTokenChanged(e,n,r){return this.registerStateListener(this.idTokenSubscription,e,n,r)}toJSON(){var e;return{apiKey:this.config.apiKey,authDomain:this.config.authDomain,appName:this.name,currentUser:(e=this._currentUser)===null||e===void 0?void 0:e.toJSON()}}async _setRedirectUser(e,n){const r=await this.getOrInitRedirectPersistenceManager(n);return e===null?r.removeCurrentUser():r.setCurrentUser(e)}async getOrInitRedirectPersistenceManager(e){if(!this.redirectPersistenceManager){const n=e&&en(e)||this._popupRedirectResolver;P(n,this,"argument-error"),this.redirectPersistenceManager=await js.create(this,[en(n._redirectPersistence)],"redirectUser"),this.redirectUser=await this.redirectPersistenceManager.getCurrentUser()}return this.redirectPersistenceManager}async _redirectUserForId(e){var n,r;return this._isInitialized&&await this.queue(async()=>{}),((n=this._currentUser)===null||n===void 0?void 0:n._redirectEventId)===e?this._currentUser:((r=this.redirectUser)===null||r===void 0?void 0:r._redirectEventId)===e?this.redirectUser:null}async _persistUserIfCurrent(e){if(e===this.currentUser)return this.queue(async()=>this.directlySetCurrentUser(e))}_notifyListenersIfCurrent(e){e===this.currentUser&&this.notifyAuthListeners()}_key(){return`${this.config.authDomain}:${this.config.apiKey}:${this.name}`}_startProactiveRefresh(){this.isProactiveRefreshEnabled=!0,this.currentUser&&this._currentUser._startProactiveRefresh()}_stopProactiveRefresh(){this.isProactiveRefreshEnabled=!1,this.currentUser&&this._currentUser._stopProactiveRefresh()}get _currentUser(){return this.currentUser}notifyAuthListeners(){var e,n;if(!this._isInitialized)return;this.idTokenSubscription.next(this.currentUser);const r=(n=(e=this.currentUser)===null||e===void 0?void 0:e.uid)!==null&&n!==void 0?n:null;this.lastNotifiedUid!==r&&(this.lastNotifiedUid=r,this.authStateSubscription.next(this.currentUser))}registerStateListener(e,n,r,i){if(this._deleted)return()=>{};const s=typeof n=="function"?n:n.next.bind(n),o=this._isInitialized?Promise.resolve():this._initializationPromise;return P(o,this,"internal-error"),o.then(()=>s(this.currentUser)),typeof n=="function"?e.addObserver(n,r,i):e.addObserver(n)}async directlySetCurrentUser(e){this.currentUser&&this.currentUser!==e&&this._currentUser._stopProactiveRefresh(),e&&this.isProactiveRefreshEnabled&&e._startProactiveRefresh(),this.currentUser=e,e?await this.assertedPersistence.setCurrentUser(e):await this.assertedPersistence.removeCurrentUser()}queue(e){return this.operations=this.operations.then(e,e),this.operations}get assertedPersistence(){return P(this.persistenceManager,this,"internal-error"),this.persistenceManager}_logFramework(e){!e||this.frameworks.includes(e)||(this.frameworks.push(e),this.frameworks.sort(),this.clientVersion=T0(this.config.clientPlatform,this._getFrameworks()))}_getFrameworks(){return this.frameworks}async _getAdditionalHeaders(){var e;const n={["X-Client-Version"]:this.clientVersion};this.app.options.appId&&(n["X-Firebase-gmpid"]=this.app.options.appId);const r=await((e=this.heartbeatServiceProvider.getImmediate({optional:!0}))===null||e===void 0?void 0:e.getHeartbeatsHeader());r&&(n["X-Firebase-Client"]=r);const i=await this._getAppCheckToken();return i&&(n["X-Firebase-AppCheck"]=i),n}async _getAppCheckToken(){var e;const n=await((e=this.appCheckServiceProvider.getImmediate({optional:!0}))===null||e===void 0?void 0:e.getToken());return n!=null&&n.error&&tN(`Error while retrieving App Check token: ${n.error}`),n==null?void 0:n.token}}function et(t){return Y(t)}class fv{constructor(e){this.auth=e,this.observer=null,this.addObserver=Jb(n=>this.observer=n)}get next(){return P(this.observer,this.auth,"internal-error"),this.observer.next.bind(this.observer)}}function xN(t,e){const n=(e==null?void 0:e.persistence)||[],r=(Array.isArray(n)?n:[n]).map(en);e!=null&&e.errorMap&&t._updateErrorMap(e.errorMap),t._initializeWithPersistence(r,e==null?void 0:e.popupRedirectResolver)}function RN(t,e,n){const r=et(t);P(r._canInitEmulator,r,"emulator-config-failed"),P(/^https?:\/\//.test(e),r,"invalid-emulator-scheme");const i=!!(n!=null&&n.disableWarnings),s=x0(e),{host:o,port:a}=NN(e),c=a===null?"":`:${a}`;r.config.emulator={url:`${s}//${o}${c}/`},r.settings.appVerificationDisabledForTesting=!0,r.emulatorConfig=Object.freeze({host:o,port:a,protocol:s.replace(":",""),options:Object.freeze({disableWarnings:i})}),i||PN()}function x0(t){const e=t.indexOf(":");return e<0?"":t.substr(0,e+1)}function NN(t){const e=x0(t),n=/(\/\/)?([^?#/]+)/.exec(t.substr(e.length));if(!n)return{host:"",port:null};const r=n[2].split("@").pop()||"",i=/^(\[[^\]]+\])(:|$)/.exec(r);if(i){const s=i[1];return{host:s,port:pv(r.substr(s.length+1))}}else{const[s,o]=r.split(":");return{host:s,port:pv(o)}}}function pv(t){if(!t)return null;const e=Number(t);return isNaN(e)?null:e}function PN(){function t(){const e=document.createElement("p"),n=e.style;e.innerText="Running in emulator mode. Do not use with production credentials.",n.position="fixed",n.width="100%",n.backgroundColor="#ffffff",n.border=".1em solid #000000",n.color="#b50000",n.bottom="0px",n.left="0px",n.margin="0px",n.zIndex="10000",n.textAlign="center",e.classList.add("firebase-emulator-warning"),document.body.appendChild(e)}typeof console<"u"&&typeof console.info=="function"&&console.info("WARNING: You are using the Auth Emulator, which is intended for local testing only.  Do not use with production credentials."),typeof window<"u"&&typeof document<"u"&&(document.readyState==="loading"?window.addEventListener("DOMContentLoaded",t):t())}/**
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
 */class ko{constructor(e,n){this.providerId=e,this.signInMethod=n}toJSON(){return $n("not implemented")}_getIdTokenResponse(e){return $n("not implemented")}_linkToIdToken(e,n){return $n("not implemented")}_getReauthenticationResolver(e){return $n("not implemented")}}/**
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
 */async function R0(t,e){return ut(t,"POST","/v1/accounts:resetPassword",st(t,e))}async function N0(t,e){return ut(t,"POST","/v1/accounts:update",e)}async function DN(t,e){return ut(t,"POST","/v1/accounts:update",st(t,e))}/**
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
 */async function hd(t,e){return _r(t,"POST","/v1/accounts:signInWithPassword",st(t,e))}async function Yl(t,e){return ut(t,"POST","/v1/accounts:sendOobCode",st(t,e))}async function ON(t,e){return Yl(t,e)}async function dd(t,e){return Yl(t,e)}async function fd(t,e){return Yl(t,e)}async function LN(t,e){return Yl(t,e)}/**
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
 */async function MN(t,e){return _r(t,"POST","/v1/accounts:signInWithEmailLink",st(t,e))}async function FN(t,e){return _r(t,"POST","/v1/accounts:signInWithEmailLink",st(t,e))}/**
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
 */class qa extends ko{constructor(e,n,r,i=null){super("password",r),this._email=e,this._password=n,this._tenantId=i}static _fromEmailAndPassword(e,n){return new qa(e,n,"password")}static _fromEmailAndCode(e,n,r=null){return new qa(e,n,"emailLink",r)}toJSON(){return{email:this._email,password:this._password,signInMethod:this.signInMethod,tenantId:this._tenantId}}static fromJSON(e){const n=typeof e=="string"?JSON.parse(e):e;if((n==null?void 0:n.email)&&(n==null?void 0:n.password)){if(n.signInMethod==="password")return this._fromEmailAndPassword(n.email,n.password);if(n.signInMethod==="emailLink")return this._fromEmailAndCode(n.email,n.password,n.tenantId)}return null}async _getIdTokenResponse(e){var n;switch(this.signInMethod){case"password":const r={returnSecureToken:!0,email:this._email,password:this._password,clientType:"CLIENT_TYPE_WEB"};if(!((n=e._getRecaptchaConfig())===null||n===void 0)&&n.emailPasswordEnabled){const i=await Yr(e,r,"signInWithPassword");return hd(e,i)}else return hd(e,r).catch(async i=>{if(i.code==="auth/missing-recaptcha-token"){console.log("Sign-in with email address and password is protected by reCAPTCHA for this project. Automatically triggering the reCAPTCHA flow and restarting the sign-in flow.");const s=await Yr(e,r,"signInWithPassword");return hd(e,s)}else return Promise.reject(i)});case"emailLink":return MN(e,{email:this._email,oobCode:this._password});default:Tt(e,"internal-error")}}async _linkToIdToken(e,n){switch(this.signInMethod){case"password":return N0(e,{idToken:n,returnSecureToken:!0,email:this._email,password:this._password});case"emailLink":return FN(e,{idToken:n,email:this._email,oobCode:this._password});default:Tt(e,"internal-error")}}_getReauthenticationResolver(e){return this._getIdTokenResponse(e)}}/**
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
 */async function cr(t,e){return _r(t,"POST","/v1/accounts:signInWithIdp",st(t,e))}/**
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
 */const UN="http://localhost";class Yn extends ko{constructor(){super(...arguments),this.pendingToken=null}static _fromParams(e){const n=new Yn(e.providerId,e.signInMethod);return e.idToken||e.accessToken?(e.idToken&&(n.idToken=e.idToken),e.accessToken&&(n.accessToken=e.accessToken),e.nonce&&!e.pendingToken&&(n.nonce=e.nonce),e.pendingToken&&(n.pendingToken=e.pendingToken)):e.oauthToken&&e.oauthTokenSecret?(n.accessToken=e.oauthToken,n.secret=e.oauthTokenSecret):Tt("argument-error"),n}toJSON(){return{idToken:this.idToken,accessToken:this.accessToken,secret:this.secret,nonce:this.nonce,pendingToken:this.pendingToken,providerId:this.providerId,signInMethod:this.signInMethod}}static fromJSON(e){const n=typeof e=="string"?JSON.parse(e):e,{providerId:r,signInMethod:i}=n,s=Vp(n,["providerId","signInMethod"]);if(!r||!i)return null;const o=new Yn(r,i);return o.idToken=s.idToken||void 0,o.accessToken=s.accessToken||void 0,o.secret=s.secret,o.nonce=s.nonce,o.pendingToken=s.pendingToken||null,o}_getIdTokenResponse(e){const n=this.buildRequest();return cr(e,n)}_linkToIdToken(e,n){const r=this.buildRequest();return r.idToken=n,cr(e,r)}_getReauthenticationResolver(e){const n=this.buildRequest();return n.autoCreate=!1,cr(e,n)}buildRequest(){const e={requestUri:UN,returnSecureToken:!0};if(this.pendingToken)e.pendingToken=this.pendingToken;else{const n={};this.idToken&&(n.id_token=this.idToken),this.accessToken&&(n.access_token=this.accessToken),this.secret&&(n.oauth_token_secret=this.secret),n.providerId=this.providerId,this.nonce&&!this.pendingToken&&(n.nonce=this.nonce),e.postBody=Eo(n)}return e}}/**
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
 */async function VN(t,e){return ut(t,"POST","/v1/accounts:sendVerificationCode",st(t,e))}async function $N(t,e){return _r(t,"POST","/v1/accounts:signInWithPhoneNumber",st(t,e))}async function BN(t,e){const n=await _r(t,"POST","/v1/accounts:signInWithPhoneNumber",st(t,e));if(n.temporaryProof)throw ra(t,"account-exists-with-different-credential",n);return n}const qN={USER_NOT_FOUND:"user-not-found"};async function jN(t,e){const n=Object.assign(Object.assign({},e),{operation:"REAUTH"});return _r(t,"POST","/v1/accounts:signInWithPhoneNumber",st(t,n),qN)}/**
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
 */class Ki extends ko{constructor(e){super("phone","phone"),this.params=e}static _fromVerification(e,n){return new Ki({verificationId:e,verificationCode:n})}static _fromTokenResponse(e,n){return new Ki({phoneNumber:e,temporaryProof:n})}_getIdTokenResponse(e){return $N(e,this._makeVerificationRequest())}_linkToIdToken(e,n){return BN(e,Object.assign({idToken:n},this._makeVerificationRequest()))}_getReauthenticationResolver(e){return jN(e,this._makeVerificationRequest())}_makeVerificationRequest(){const{temporaryProof:e,phoneNumber:n,verificationId:r,verificationCode:i}=this.params;return e&&n?{temporaryProof:e,phoneNumber:n}:{sessionInfo:r,code:i}}toJSON(){const e={providerId:this.providerId};return this.params.phoneNumber&&(e.phoneNumber=this.params.phoneNumber),this.params.temporaryProof&&(e.temporaryProof=this.params.temporaryProof),this.params.verificationCode&&(e.verificationCode=this.params.verificationCode),this.params.verificationId&&(e.verificationId=this.params.verificationId),e}static fromJSON(e){typeof e=="string"&&(e=JSON.parse(e));const{verificationId:n,verificationCode:r,phoneNumber:i,temporaryProof:s}=e;return!r&&!n&&!i&&!s?null:new Ki({verificationId:n,verificationCode:r,phoneNumber:i,temporaryProof:s})}}/**
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
 */function zN(t){switch(t){case"recoverEmail":return"RECOVER_EMAIL";case"resetPassword":return"PASSWORD_RESET";case"signIn":return"EMAIL_SIGNIN";case"verifyEmail":return"VERIFY_EMAIL";case"verifyAndChangeEmail":return"VERIFY_AND_CHANGE_EMAIL";case"revertSecondFactorAddition":return"REVERT_SECOND_FACTOR_ADDITION";default:return null}}function HN(t){const e=Os(na(t)).link,n=e?Os(na(e)).deep_link_id:null,r=Os(na(t)).deep_link_id;return(r?Os(na(r)).link:null)||r||n||e||t}class Xl{constructor(e){var n,r,i,s,o,a;const c=Os(na(e)),u=(n=c.apiKey)!==null&&n!==void 0?n:null,l=(r=c.oobCode)!==null&&r!==void 0?r:null,h=zN((i=c.mode)!==null&&i!==void 0?i:null);P(u&&l&&h,"argument-error"),this.apiKey=u,this.operation=h,this.code=l,this.continueUrl=(s=c.continueUrl)!==null&&s!==void 0?s:null,this.languageCode=(o=c.languageCode)!==null&&o!==void 0?o:null,this.tenantId=(a=c.tenantId)!==null&&a!==void 0?a:null}static parseLink(e){const n=HN(e);try{return new Xl(n)}catch{return null}}}/**
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
 */class ui{constructor(){this.providerId=ui.PROVIDER_ID}static credential(e,n){return qa._fromEmailAndPassword(e,n)}static credentialWithLink(e,n){const r=Xl.parseLink(n);return P(r,"argument-error"),qa._fromEmailAndCode(e,r.code,r.tenantId)}}ui.PROVIDER_ID="password";ui.EMAIL_PASSWORD_SIGN_IN_METHOD="password";ui.EMAIL_LINK_SIGN_IN_METHOD="emailLink";/**
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
 */class br{constructor(e){this.providerId=e,this.defaultLanguageCode=null,this.customParameters={}}setDefaultLanguage(e){this.defaultLanguageCode=e}setCustomParameters(e){return this.customParameters=e,this}getCustomParameters(){return this.customParameters}}/**
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
 */class Ao extends br{constructor(){super(...arguments),this.scopes=[]}addScope(e){return this.scopes.includes(e)||this.scopes.push(e),this}getScopes(){return[...this.scopes]}}class zs extends Ao{static credentialFromJSON(e){const n=typeof e=="string"?JSON.parse(e):e;return P("providerId"in n&&"signInMethod"in n,"argument-error"),Yn._fromParams(n)}credential(e){return this._credential(Object.assign(Object.assign({},e),{nonce:e.rawNonce}))}_credential(e){return P(e.idToken||e.accessToken,"argument-error"),Yn._fromParams(Object.assign(Object.assign({},e),{providerId:this.providerId,signInMethod:this.providerId}))}static credentialFromResult(e){return zs.oauthCredentialFromTaggedObject(e)}static credentialFromError(e){return zs.oauthCredentialFromTaggedObject(e.customData||{})}static oauthCredentialFromTaggedObject({_tokenResponse:e}){if(!e)return null;const{oauthIdToken:n,oauthAccessToken:r,oauthTokenSecret:i,pendingToken:s,nonce:o,providerId:a}=e;if(!r&&!i&&!n&&!s||!a)return null;try{return new zs(a)._credential({idToken:n,accessToken:r,nonce:o,pendingToken:s})}catch{return null}}}/**
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
 */class On extends Ao{constructor(){super("facebook.com")}static credential(e){return Yn._fromParams({providerId:On.PROVIDER_ID,signInMethod:On.FACEBOOK_SIGN_IN_METHOD,accessToken:e})}static credentialFromResult(e){return On.credentialFromTaggedObject(e)}static credentialFromError(e){return On.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e||!("oauthAccessToken"in e)||!e.oauthAccessToken)return null;try{return On.credential(e.oauthAccessToken)}catch{return null}}}On.FACEBOOK_SIGN_IN_METHOD="facebook.com";On.PROVIDER_ID="facebook.com";/**
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
 */class Ln extends Ao{constructor(){super("google.com"),this.addScope("profile")}static credential(e,n){return Yn._fromParams({providerId:Ln.PROVIDER_ID,signInMethod:Ln.GOOGLE_SIGN_IN_METHOD,idToken:e,accessToken:n})}static credentialFromResult(e){return Ln.credentialFromTaggedObject(e)}static credentialFromError(e){return Ln.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e)return null;const{oauthIdToken:n,oauthAccessToken:r}=e;if(!n&&!r)return null;try{return Ln.credential(n,r)}catch{return null}}}Ln.GOOGLE_SIGN_IN_METHOD="google.com";Ln.PROVIDER_ID="google.com";/**
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
 */class Mn extends Ao{constructor(){super("github.com")}static credential(e){return Yn._fromParams({providerId:Mn.PROVIDER_ID,signInMethod:Mn.GITHUB_SIGN_IN_METHOD,accessToken:e})}static credentialFromResult(e){return Mn.credentialFromTaggedObject(e)}static credentialFromError(e){return Mn.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e||!("oauthAccessToken"in e)||!e.oauthAccessToken)return null;try{return Mn.credential(e.oauthAccessToken)}catch{return null}}}Mn.GITHUB_SIGN_IN_METHOD="github.com";Mn.PROVIDER_ID="github.com";/**
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
 */const KN="http://localhost";class io extends ko{constructor(e,n){super(e,e),this.pendingToken=n}_getIdTokenResponse(e){const n=this.buildRequest();return cr(e,n)}_linkToIdToken(e,n){const r=this.buildRequest();return r.idToken=n,cr(e,r)}_getReauthenticationResolver(e){const n=this.buildRequest();return n.autoCreate=!1,cr(e,n)}toJSON(){return{signInMethod:this.signInMethod,providerId:this.providerId,pendingToken:this.pendingToken}}static fromJSON(e){const n=typeof e=="string"?JSON.parse(e):e,{providerId:r,signInMethod:i,pendingToken:s}=n;return!r||!i||!s||r!==i?null:new io(r,s)}static _create(e,n){return new io(e,n)}buildRequest(){return{requestUri:KN,returnSecureToken:!0,pendingToken:this.pendingToken}}}/**
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
 */const GN="saml.";class Zu extends br{constructor(e){P(e.startsWith(GN),"argument-error"),super(e)}static credentialFromResult(e){return Zu.samlCredentialFromTaggedObject(e)}static credentialFromError(e){return Zu.samlCredentialFromTaggedObject(e.customData||{})}static credentialFromJSON(e){const n=io.fromJSON(e);return P(n,"argument-error"),n}static samlCredentialFromTaggedObject({_tokenResponse:e}){if(!e)return null;const{pendingToken:n,providerId:r}=e;if(!n||!r)return null;try{return io._create(r,n)}catch{return null}}}/**
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
 */class Fn extends Ao{constructor(){super("twitter.com")}static credential(e,n){return Yn._fromParams({providerId:Fn.PROVIDER_ID,signInMethod:Fn.TWITTER_SIGN_IN_METHOD,oauthToken:e,oauthTokenSecret:n})}static credentialFromResult(e){return Fn.credentialFromTaggedObject(e)}static credentialFromError(e){return Fn.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e)return null;const{oauthAccessToken:n,oauthTokenSecret:r}=e;if(!n||!r)return null;try{return Fn.credential(n,r)}catch{return null}}}Fn.TWITTER_SIGN_IN_METHOD="twitter.com";Fn.PROVIDER_ID="twitter.com";/**
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
 */async function Pu(t,e){return _r(t,"POST","/v1/accounts:signUp",st(t,e))}/**
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
 */class dn{constructor(e){this.user=e.user,this.providerId=e.providerId,this._tokenResponse=e._tokenResponse,this.operationType=e.operationType}static async _fromIdTokenResponse(e,n,r,i=!1){const s=await zi._fromIdTokenResponse(e,r,i),o=mv(r);return new dn({user:s,providerId:o,_tokenResponse:r,operationType:n})}static async _forOperation(e,n,r){await e._updateTokensIfNecessary(r,!0);const i=mv(r);return new dn({user:e,providerId:i,_tokenResponse:r,operationType:n})}}function mv(t){return t.providerId?t.providerId:"phoneNumber"in t?"phone":null}/**
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
 */async function WN(t){var e;const n=et(t);if(await n._initializationPromise,!((e=n.currentUser)===null||e===void 0)&&e.isAnonymous)return new dn({user:n.currentUser,providerId:null,operationType:"signIn"});const r=await Pu(n,{returnSecureToken:!0}),i=await dn._fromIdTokenResponse(n,"signIn",r,!0);return await n._updateCurrentUser(i.user),i}/**
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
 */class el extends Rt{constructor(e,n,r,i){var s;super(n.code,n.message),this.operationType=r,this.user=i,Object.setPrototypeOf(this,el.prototype),this.customData={appName:e.name,tenantId:(s=e.tenantId)!==null&&s!==void 0?s:void 0,_serverResponse:n.customData._serverResponse,operationType:r}}static _fromErrorAndOperation(e,n,r,i){return new el(e,n,r,i)}}function P0(t,e,n,r){return(e==="reauthenticate"?n._getReauthenticationResolver(t):n._getIdTokenResponse(t)).catch(s=>{throw s.code==="auth/multi-factor-auth-required"?el._fromErrorAndOperation(t,s,e,r):s})}/**
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
 */function D0(t){return new Set(t.map(({providerId:e})=>e).filter(e=>!!e))}/**
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
 */async function QN(t,e){const n=Y(t);await Jl(!0,n,e);const{providerUserInfo:r}=await cN(n.auth,{idToken:await n.getIdToken(),deleteProvider:[e]}),i=D0(r||[]);return n.providerData=n.providerData.filter(s=>i.has(s.providerId)),i.has("phone")||(n.phoneNumber=null),await n.auth._persistUserIfCurrent(n),n}async function Hp(t,e,n=!1){const r=await dr(t,e._linkToIdToken(t.auth,await t.getIdToken()),n);return dn._forOperation(t,"link",r)}async function Jl(t,e,n){await $a(e);const r=D0(e.providerData),i=t===!1?"provider-already-linked":"no-such-provider";P(r.has(n)===t,e.auth,i)}/**
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
 */async function O0(t,e,n=!1){const{auth:r}=t,i="reauthenticate";try{const s=await dr(t,P0(r,i,e,t),n);P(s.idToken,r,"internal-error");const o=Ql(s.idToken);P(o,r,"internal-error");const{sub:a}=o;return P(t.uid===a,r,"user-mismatch"),dn._forOperation(t,i,s)}catch(s){throw(s==null?void 0:s.code)==="auth/user-not-found"&&Tt(r,"user-mismatch"),s}}/**
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
 */async function L0(t,e,n=!1){const r="signIn",i=await P0(t,r,e),s=await dn._fromIdTokenResponse(t,r,i);return n||await t._updateCurrentUser(s.user),s}async function Zl(t,e){return L0(et(t),e)}async function M0(t,e){const n=Y(t);return await Jl(!1,n,e.providerId),Hp(n,e)}async function F0(t,e){return O0(Y(t),e)}/**
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
 */async function YN(t,e){return _r(t,"POST","/v1/accounts:signInWithCustomToken",st(t,e))}/**
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
 */async function XN(t,e){const n=et(t),r=await YN(n,{token:e,returnSecureToken:!0}),i=await dn._fromIdTokenResponse(n,"signIn",r);return await n._updateCurrentUser(i.user),i}/**
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
 */class vc{constructor(e,n){this.factorId=e,this.uid=n.mfaEnrollmentId,this.enrollmentTime=new Date(n.enrolledAt).toUTCString(),this.displayName=n.displayName}static _fromServerResponse(e,n){return"phoneInfo"in n?Kp._fromServerResponse(e,n):"totpInfo"in n?Gp._fromServerResponse(e,n):Tt(e,"internal-error")}}class Kp extends vc{constructor(e){super("phone",e),this.phoneNumber=e.phoneInfo}static _fromServerResponse(e,n){return new Kp(n)}}class Gp extends vc{constructor(e){super("totp",e)}static _fromServerResponse(e,n){return new Gp(n)}}/**
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
 */function Hs(t,e,n){var r;P(((r=n.url)===null||r===void 0?void 0:r.length)>0,t,"invalid-continue-uri"),P(typeof n.dynamicLinkDomain>"u"||n.dynamicLinkDomain.length>0,t,"invalid-dynamic-link-domain"),e.continueUrl=n.url,e.dynamicLinkDomain=n.dynamicLinkDomain,e.canHandleCodeInApp=n.handleCodeInApp,n.iOS&&(P(n.iOS.bundleId.length>0,t,"missing-ios-bundle-id"),e.iOSBundleId=n.iOS.bundleId),n.android&&(P(n.android.packageName.length>0,t,"missing-android-pkg-name"),e.androidInstallApp=n.android.installApp,e.androidMinimumVersionCode=n.android.minimumVersion,e.androidPackageName=n.android.packageName)}/**
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
 */async function JN(t,e,n){var r;const i=et(t),s={requestType:"PASSWORD_RESET",email:e,clientType:"CLIENT_TYPE_WEB"};if(!((r=i._getRecaptchaConfig())===null||r===void 0)&&r.emailPasswordEnabled){const o=await Yr(i,s,"getOobCode",!0);n&&Hs(i,o,n),await dd(i,o)}else n&&Hs(i,s,n),await dd(i,s).catch(async o=>{if(o.code==="auth/missing-recaptcha-token"){console.log("Password resets are protected by reCAPTCHA for this project. Automatically triggering the reCAPTCHA flow and restarting the password reset flow.");const a=await Yr(i,s,"getOobCode",!0);n&&Hs(i,a,n),await dd(i,a)}else return Promise.reject(o)})}async function ZN(t,e,n){await R0(Y(t),{oobCode:e,newPassword:n})}async function eP(t,e){await DN(Y(t),{oobCode:e})}async function U0(t,e){const n=Y(t),r=await R0(n,{oobCode:e}),i=r.requestType;switch(P(i,n,"internal-error"),i){case"EMAIL_SIGNIN":break;case"VERIFY_AND_CHANGE_EMAIL":P(r.newEmail,n,"internal-error");break;case"REVERT_SECOND_FACTOR_ADDITION":P(r.mfaInfo,n,"internal-error");default:P(r.email,n,"internal-error")}let s=null;return r.mfaInfo&&(s=vc._fromServerResponse(et(n),r.mfaInfo)),{data:{email:(r.requestType==="VERIFY_AND_CHANGE_EMAIL"?r.newEmail:r.email)||null,previousEmail:(r.requestType==="VERIFY_AND_CHANGE_EMAIL"?r.email:r.newEmail)||null,multiFactorInfo:s},operation:i}}async function tP(t,e){const{data:n}=await U0(Y(t),e);return n.email}async function nP(t,e,n){var r;const i=et(t),s={returnSecureToken:!0,email:e,password:n,clientType:"CLIENT_TYPE_WEB"};let o;if(!((r=i._getRecaptchaConfig())===null||r===void 0)&&r.emailPasswordEnabled){const u=await Yr(i,s,"signUpPassword");o=Pu(i,u)}else o=Pu(i,s).catch(async u=>{if(u.code==="auth/missing-recaptcha-token"){console.log("Sign-up is protected by reCAPTCHA for this project. Automatically triggering the reCAPTCHA flow and restarting the sign-up flow.");const l=await Yr(i,s,"signUpPassword");return Pu(i,l)}else return Promise.reject(u)});const a=await o.catch(u=>Promise.reject(u)),c=await dn._fromIdTokenResponse(i,"signIn",a);return await i._updateCurrentUser(c.user),c}function rP(t,e,n){return Zl(Y(t),ui.credential(e,n))}/**
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
 */async function iP(t,e,n){var r;const i=et(t),s={requestType:"EMAIL_SIGNIN",email:e,clientType:"CLIENT_TYPE_WEB"};function o(a,c){P(c.handleCodeInApp,i,"argument-error"),c&&Hs(i,a,c)}if(!((r=i._getRecaptchaConfig())===null||r===void 0)&&r.emailPasswordEnabled){const a=await Yr(i,s,"getOobCode",!0);o(a,n),await fd(i,a)}else o(s,n),await fd(i,s).catch(async a=>{if(a.code==="auth/missing-recaptcha-token"){console.log("Email link sign-in is protected by reCAPTCHA for this project. Automatically triggering the reCAPTCHA flow and restarting the sign-in flow.");const c=await Yr(i,s,"getOobCode",!0);o(c,n),await fd(i,c)}else return Promise.reject(a)})}function sP(t,e){const n=Xl.parseLink(e);return(n==null?void 0:n.operation)==="EMAIL_SIGNIN"}async function oP(t,e,n){const r=Y(t),i=ui.credentialWithLink(e,n||Va());return P(i._tenantId===(r.tenantId||null),r,"tenant-id-mismatch"),Zl(r,i)}/**
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
 */async function aP(t,e){return ut(t,"POST","/v1/accounts:createAuthUri",st(t,e))}/**
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
 */async function cP(t,e){const n=Bp()?Va():"http://localhost",r={identifier:e,continueUri:n},{signinMethods:i}=await aP(Y(t),r);return i||[]}async function uP(t,e){const n=Y(t),i={requestType:"VERIFY_EMAIL",idToken:await t.getIdToken()};e&&Hs(n.auth,i,e);const{email:s}=await ON(n.auth,i);s!==t.email&&await t.reload()}async function lP(t,e,n){const r=Y(t),s={requestType:"VERIFY_AND_CHANGE_EMAIL",idToken:await t.getIdToken(),newEmail:e};n&&Hs(r.auth,s,n);const{email:o}=await LN(r.auth,s);o!==t.email&&await t.reload()}/**
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
 */async function hP(t,e){return ut(t,"POST","/v1/accounts:update",e)}/**
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
 */async function dP(t,{displayName:e,photoURL:n}){if(e===void 0&&n===void 0)return;const r=Y(t),s={idToken:await r.getIdToken(),displayName:e,photoUrl:n,returnSecureToken:!0},o=await dr(r,hP(r.auth,s));r.displayName=o.displayName||null,r.photoURL=o.photoUrl||null;const a=r.providerData.find(({providerId:c})=>c==="password");a&&(a.displayName=r.displayName,a.photoURL=r.photoURL),await r._updateTokensIfNecessary(o)}function fP(t,e){return V0(Y(t),e,null)}function pP(t,e){return V0(Y(t),null,e)}async function V0(t,e,n){const{auth:r}=t,s={idToken:await t.getIdToken(),returnSecureToken:!0};e&&(s.email=e),n&&(s.password=n);const o=await dr(t,N0(r,s));await t._updateTokensIfNecessary(o,!0)}/**
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
 */function mP(t){var e,n;if(!t)return null;const{providerId:r}=t,i=t.rawUserInfo?JSON.parse(t.rawUserInfo):{},s=t.isNewUser||t.kind==="identitytoolkit#SignupNewUserResponse";if(!r&&(t==null?void 0:t.idToken)){const o=(n=(e=Ql(t.idToken))===null||e===void 0?void 0:e.firebase)===null||n===void 0?void 0:n.sign_in_provider;if(o){const a=o!=="anonymous"&&o!=="custom"?o:null;return new Ks(s,a)}}if(!r)return null;switch(r){case"facebook.com":return new gP(s,i);case"github.com":return new yP(s,i);case"google.com":return new vP(s,i);case"twitter.com":return new wP(s,i,t.screenName||null);case"custom":case"anonymous":return new Ks(s,null);default:return new Ks(s,r,i)}}class Ks{constructor(e,n,r={}){this.isNewUser=e,this.providerId=n,this.profile=r}}class $0 extends Ks{constructor(e,n,r,i){super(e,n,r),this.username=i}}class gP extends Ks{constructor(e,n){super(e,"facebook.com",n)}}class yP extends $0{constructor(e,n){super(e,"github.com",n,typeof(n==null?void 0:n.login)=="string"?n==null?void 0:n.login:null)}}class vP extends Ks{constructor(e,n){super(e,"google.com",n)}}class wP extends $0{constructor(e,n,r){super(e,"twitter.com",n,r)}}function _P(t){const{user:e,_tokenResponse:n}=t;return e.isAnonymous&&!n?{providerId:null,isNewUser:!1,profile:null}:mP(n)}class Li{constructor(e,n,r){this.type=e,this.credential=n,this.auth=r}static _fromIdtoken(e,n){return new Li("enroll",e,n)}static _fromMfaPendingCredential(e){return new Li("signin",e)}toJSON(){return{multiFactorSession:{[this.type==="enroll"?"idToken":"pendingCredential"]:this.credential}}}static fromJSON(e){var n,r;if(e!=null&&e.multiFactorSession){if(!((n=e.multiFactorSession)===null||n===void 0)&&n.pendingCredential)return Li._fromMfaPendingCredential(e.multiFactorSession.pendingCredential);if(!((r=e.multiFactorSession)===null||r===void 0)&&r.idToken)return Li._fromIdtoken(e.multiFactorSession.idToken)}return null}}/**
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
 */class Wp{constructor(e,n,r){this.session=e,this.hints=n,this.signInResolver=r}static _fromError(e,n){const r=et(e),i=n.customData._serverResponse,s=(i.mfaInfo||[]).map(a=>vc._fromServerResponse(r,a));P(i.mfaPendingCredential,r,"internal-error");const o=Li._fromMfaPendingCredential(i.mfaPendingCredential);return new Wp(o,s,async a=>{const c=await a._process(r,o);delete i.mfaInfo,delete i.mfaPendingCredential;const u=Object.assign(Object.assign({},i),{idToken:c.idToken,refreshToken:c.refreshToken});switch(n.operationType){case"signIn":const l=await dn._fromIdTokenResponse(r,n.operationType,u);return await r._updateCurrentUser(l.user),l;case"reauthenticate":return P(n.user,r,"internal-error"),dn._forOperation(n.user,n.operationType,u);default:Tt(r,"internal-error")}})}async resolveSignIn(e){const n=e;return this.signInResolver(n)}}function bP(t,e){var n;const r=Y(t),i=e;return P(e.customData.operationType,r,"argument-error"),P((n=i.customData._serverResponse)===null||n===void 0?void 0:n.mfaPendingCredential,r,"argument-error"),Wp._fromError(r,i)}/**
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
 */function IP(t,e){return ut(t,"POST","/v2/accounts/mfaEnrollment:start",st(t,e))}function EP(t,e){return ut(t,"POST","/v2/accounts/mfaEnrollment:finalize",st(t,e))}function TP(t,e){return ut(t,"POST","/v2/accounts/mfaEnrollment:withdraw",st(t,e))}class Qp{constructor(e){this.user=e,this.enrolledFactors=[],e._onReload(n=>{n.mfaInfo&&(this.enrolledFactors=n.mfaInfo.map(r=>vc._fromServerResponse(e.auth,r)))})}static _fromUser(e){return new Qp(e)}async getSession(){return Li._fromIdtoken(await this.user.getIdToken(),this.user.auth)}async enroll(e,n){const r=e,i=await this.getSession(),s=await dr(this.user,r._process(this.user.auth,i,n));return await this.user._updateTokensIfNecessary(s),this.user.reload()}async unenroll(e){const n=typeof e=="string"?e:e.uid,r=await this.user.getIdToken();try{const i=await dr(this.user,TP(this.user.auth,{idToken:r,mfaEnrollmentId:n}));this.enrolledFactors=this.enrolledFactors.filter(({uid:s})=>s!==n),await this.user._updateTokensIfNecessary(i),await this.user.reload()}catch(i){throw i}}}const pd=new WeakMap;function SP(t){const e=Y(t);return pd.has(e)||pd.set(e,Qp._fromUser(e)),pd.get(e)}const tl="__sak";/**
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
 */class B0{constructor(e,n){this.storageRetriever=e,this.type=n}_isAvailable(){try{return this.storage?(this.storage.setItem(tl,"1"),this.storage.removeItem(tl),Promise.resolve(!0)):Promise.resolve(!1)}catch{return Promise.resolve(!1)}}_set(e,n){return this.storage.setItem(e,JSON.stringify(n)),Promise.resolve()}_get(e){const n=this.storage.getItem(e);return Promise.resolve(n?JSON.parse(n):null)}_remove(e){return this.storage.removeItem(e),Promise.resolve()}get storage(){return this.storageRetriever()}}/**
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
 */function kP(){const t=ze();return jp(t)||So(t)}const AP=1e3,CP=10;class q0 extends B0{constructor(){super(()=>window.localStorage,"LOCAL"),this.boundEventHandler=(e,n)=>this.onStorageEvent(e,n),this.listeners={},this.localCache={},this.pollTimer=null,this.safariLocalStorageNotSynced=kP()&&bN(),this.fallbackToPolling=E0(),this._shouldAllowMigration=!0}forAllChangedKeys(e){for(const n of Object.keys(this.listeners)){const r=this.storage.getItem(n),i=this.localCache[n];r!==i&&e(n,i,r)}}onStorageEvent(e,n=!1){if(!e.key){this.forAllChangedKeys((o,a,c)=>{this.notifyListeners(o,c)});return}const r=e.key;if(n?this.detachListener():this.stopPolling(),this.safariLocalStorageNotSynced){const o=this.storage.getItem(r);if(e.newValue!==o)e.newValue!==null?this.storage.setItem(r,e.newValue):this.storage.removeItem(r);else if(this.localCache[r]===e.newValue&&!n)return}const i=()=>{const o=this.storage.getItem(r);!n&&this.localCache[r]===o||this.notifyListeners(r,o)},s=this.storage.getItem(r);_N()&&s!==e.newValue&&e.newValue!==e.oldValue?setTimeout(i,CP):i()}notifyListeners(e,n){this.localCache[e]=n;const r=this.listeners[e];if(r)for(const i of Array.from(r))i(n&&JSON.parse(n))}startPolling(){this.stopPolling(),this.pollTimer=setInterval(()=>{this.forAllChangedKeys((e,n,r)=>{this.onStorageEvent(new StorageEvent("storage",{key:e,oldValue:n,newValue:r}),!0)})},AP)}stopPolling(){this.pollTimer&&(clearInterval(this.pollTimer),this.pollTimer=null)}attachListener(){window.addEventListener("storage",this.boundEventHandler)}detachListener(){window.removeEventListener("storage",this.boundEventHandler)}_addListener(e,n){Object.keys(this.listeners).length===0&&(this.fallbackToPolling?this.startPolling():this.attachListener()),this.listeners[e]||(this.listeners[e]=new Set,this.localCache[e]=this.storage.getItem(e)),this.listeners[e].add(n)}_removeListener(e,n){this.listeners[e]&&(this.listeners[e].delete(n),this.listeners[e].size===0&&delete this.listeners[e]),Object.keys(this.listeners).length===0&&(this.detachListener(),this.stopPolling())}async _set(e,n){await super._set(e,n),this.localCache[e]=JSON.stringify(n)}async _get(e){const n=await super._get(e);return this.localCache[e]=JSON.stringify(n),n}async _remove(e){await super._remove(e),delete this.localCache[e]}}q0.type="LOCAL";const Yp=q0;/**
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
 */class j0 extends B0{constructor(){super(()=>window.sessionStorage,"SESSION")}_addListener(e,n){}_removeListener(e,n){}}j0.type="SESSION";const Xi=j0;/**
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
 */function xP(t){return Promise.all(t.map(async e=>{try{return{fulfilled:!0,value:await e}}catch(n){return{fulfilled:!1,reason:n}}}))}/**
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
 */class eh{constructor(e){this.eventTarget=e,this.handlersMap={},this.boundEventHandler=this.handleEvent.bind(this)}static _getInstance(e){const n=this.receivers.find(i=>i.isListeningto(e));if(n)return n;const r=new eh(e);return this.receivers.push(r),r}isListeningto(e){return this.eventTarget===e}async handleEvent(e){const n=e,{eventId:r,eventType:i,data:s}=n.data,o=this.handlersMap[i];if(!(o!=null&&o.size))return;n.ports[0].postMessage({status:"ack",eventId:r,eventType:i});const a=Array.from(o).map(async u=>u(n.origin,s)),c=await xP(a);n.ports[0].postMessage({status:"done",eventId:r,eventType:i,response:c})}_subscribe(e,n){Object.keys(this.handlersMap).length===0&&this.eventTarget.addEventListener("message",this.boundEventHandler),this.handlersMap[e]||(this.handlersMap[e]=new Set),this.handlersMap[e].add(n)}_unsubscribe(e,n){this.handlersMap[e]&&n&&this.handlersMap[e].delete(n),(!n||this.handlersMap[e].size===0)&&delete this.handlersMap[e],Object.keys(this.handlersMap).length===0&&this.eventTarget.removeEventListener("message",this.boundEventHandler)}}eh.receivers=[];/**
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
 */function wc(t="",e=10){let n="";for(let r=0;r<e;r++)n+=Math.floor(Math.random()*10);return t+n}/**
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
 */class RP{constructor(e){this.target=e,this.handlers=new Set}removeMessageHandler(e){e.messageChannel&&(e.messageChannel.port1.removeEventListener("message",e.onMessage),e.messageChannel.port1.close()),this.handlers.delete(e)}async _send(e,n,r=50){const i=typeof MessageChannel<"u"?new MessageChannel:null;if(!i)throw new Error("connection_unavailable");let s,o;return new Promise((a,c)=>{const u=wc("",20);i.port1.start();const l=setTimeout(()=>{c(new Error("unsupported_event"))},r);o={messageChannel:i,onMessage(h){const d=h;if(d.data.eventId===u)switch(d.data.status){case"ack":clearTimeout(l),s=setTimeout(()=>{c(new Error("timeout"))},3e3);break;case"done":clearTimeout(s),a(d.data.response);break;default:clearTimeout(l),clearTimeout(s),c(new Error("invalid_response"));break}}},this.handlers.add(o),i.port1.addEventListener("message",o.onMessage),this.target.postMessage({eventType:e,eventId:u,data:n},[i.port2])}).finally(()=>{o&&this.removeMessageHandler(o)})}}/**
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
 */function rt(){return window}function NP(t){rt().location.href=t}/**
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
 */function Xp(){return typeof rt().WorkerGlobalScope<"u"&&typeof rt().importScripts=="function"}async function PP(){if(!(navigator!=null&&navigator.serviceWorker))return null;try{return(await navigator.serviceWorker.ready).active}catch{return null}}function DP(){var t;return((t=navigator==null?void 0:navigator.serviceWorker)===null||t===void 0?void 0:t.controller)||null}function OP(){return Xp()?self:null}/**
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
 */const z0="firebaseLocalStorageDb",LP=1,nl="firebaseLocalStorage",H0="fbase_key";class _c{constructor(e){this.request=e}toPromise(){return new Promise((e,n)=>{this.request.addEventListener("success",()=>{e(this.request.result)}),this.request.addEventListener("error",()=>{n(this.request.error)})})}}function th(t,e){return t.transaction([nl],e?"readwrite":"readonly").objectStore(nl)}function MP(){const t=indexedDB.deleteDatabase(z0);return new _c(t).toPromise()}function cf(){const t=indexedDB.open(z0,LP);return new Promise((e,n)=>{t.addEventListener("error",()=>{n(t.error)}),t.addEventListener("upgradeneeded",()=>{const r=t.result;try{r.createObjectStore(nl,{keyPath:H0})}catch(i){n(i)}}),t.addEventListener("success",async()=>{const r=t.result;r.objectStoreNames.contains(nl)?e(r):(r.close(),await MP(),e(await cf()))})})}async function gv(t,e,n){const r=th(t,!0).put({[H0]:e,value:n});return new _c(r).toPromise()}async function FP(t,e){const n=th(t,!1).get(e),r=await new _c(n).toPromise();return r===void 0?null:r.value}function yv(t,e){const n=th(t,!0).delete(e);return new _c(n).toPromise()}const UP=800,VP=3;class K0{constructor(){this.type="LOCAL",this._shouldAllowMigration=!0,this.listeners={},this.localCache={},this.pollTimer=null,this.pendingWrites=0,this.receiver=null,this.sender=null,this.serviceWorkerReceiverAvailable=!1,this.activeServiceWorker=null,this._workerInitializationPromise=this.initializeServiceWorkerMessaging().then(()=>{},()=>{})}async _openDb(){return this.db?this.db:(this.db=await cf(),this.db)}async _withRetries(e){let n=0;for(;;)try{const r=await this._openDb();return await e(r)}catch(r){if(n++>VP)throw r;this.db&&(this.db.close(),this.db=void 0)}}async initializeServiceWorkerMessaging(){return Xp()?this.initializeReceiver():this.initializeSender()}async initializeReceiver(){this.receiver=eh._getInstance(OP()),this.receiver._subscribe("keyChanged",async(e,n)=>({keyProcessed:(await this._poll()).includes(n.key)})),this.receiver._subscribe("ping",async(e,n)=>["keyChanged"])}async initializeSender(){var e,n;if(this.activeServiceWorker=await PP(),!this.activeServiceWorker)return;this.sender=new RP(this.activeServiceWorker);const r=await this.sender._send("ping",{},800);!r||((e=r[0])===null||e===void 0?void 0:e.fulfilled)&&((n=r[0])===null||n===void 0?void 0:n.value.includes("keyChanged"))&&(this.serviceWorkerReceiverAvailable=!0)}async notifyServiceWorker(e){if(!(!this.sender||!this.activeServiceWorker||DP()!==this.activeServiceWorker))try{await this.sender._send("keyChanged",{key:e},this.serviceWorkerReceiverAvailable?800:50)}catch{}}async _isAvailable(){try{if(!indexedDB)return!1;const e=await cf();return await gv(e,tl,"1"),await yv(e,tl),!0}catch{}return!1}async _withPendingWrite(e){this.pendingWrites++;try{await e()}finally{this.pendingWrites--}}async _set(e,n){return this._withPendingWrite(async()=>(await this._withRetries(r=>gv(r,e,n)),this.localCache[e]=n,this.notifyServiceWorker(e)))}async _get(e){const n=await this._withRetries(r=>FP(r,e));return this.localCache[e]=n,n}async _remove(e){return this._withPendingWrite(async()=>(await this._withRetries(n=>yv(n,e)),delete this.localCache[e],this.notifyServiceWorker(e)))}async _poll(){const e=await this._withRetries(i=>{const s=th(i,!1).getAll();return new _c(s).toPromise()});if(!e)return[];if(this.pendingWrites!==0)return[];const n=[],r=new Set;for(const{fbase_key:i,value:s}of e)r.add(i),JSON.stringify(this.localCache[i])!==JSON.stringify(s)&&(this.notifyListeners(i,s),n.push(i));for(const i of Object.keys(this.localCache))this.localCache[i]&&!r.has(i)&&(this.notifyListeners(i,null),n.push(i));return n}notifyListeners(e,n){this.localCache[e]=n;const r=this.listeners[e];if(r)for(const i of Array.from(r))i(n)}startPolling(){this.stopPolling(),this.pollTimer=setInterval(async()=>this._poll(),UP)}stopPolling(){this.pollTimer&&(clearInterval(this.pollTimer),this.pollTimer=null)}_addListener(e,n){Object.keys(this.listeners).length===0&&this.startPolling(),this.listeners[e]||(this.listeners[e]=new Set,this._get(e)),this.listeners[e].add(n)}_removeListener(e,n){this.listeners[e]&&(this.listeners[e].delete(n),this.listeners[e].size===0&&delete this.listeners[e]),Object.keys(this.listeners).length===0&&this.stopPolling()}}K0.type="LOCAL";const ja=K0;/**
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
 */function $P(t,e){return ut(t,"POST","/v2/accounts/mfaSignIn:start",st(t,e))}function BP(t,e){return ut(t,"POST","/v2/accounts/mfaSignIn:finalize",st(t,e))}/**
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
 */const qP=500,jP=6e4,Zc=1e12;class zP{constructor(e){this.auth=e,this.counter=Zc,this._widgets=new Map}render(e,n){const r=this.counter;return this._widgets.set(r,new HP(e,this.auth.name,n||{})),this.counter++,r}reset(e){var n;const r=e||Zc;(n=this._widgets.get(r))===null||n===void 0||n.delete(),this._widgets.delete(r)}getResponse(e){var n;const r=e||Zc;return((n=this._widgets.get(r))===null||n===void 0?void 0:n.getResponse())||""}async execute(e){var n;const r=e||Zc;return(n=this._widgets.get(r))===null||n===void 0||n.execute(),""}}class HP{constructor(e,n,r){this.params=r,this.timerId=null,this.deleted=!1,this.responseToken=null,this.clickHandler=()=>{this.execute()};const i=typeof e=="string"?document.getElementById(e):e;P(i,"argument-error",{appName:n}),this.container=i,this.isVisible=this.params.size!=="invisible",this.isVisible?this.execute():this.container.addEventListener("click",this.clickHandler)}getResponse(){return this.checkIfDeleted(),this.responseToken}delete(){this.checkIfDeleted(),this.deleted=!0,this.timerId&&(clearTimeout(this.timerId),this.timerId=null),this.container.removeEventListener("click",this.clickHandler)}execute(){this.checkIfDeleted(),!this.timerId&&(this.timerId=window.setTimeout(()=>{this.responseToken=KP(50);const{callback:e,"expired-callback":n}=this.params;if(e)try{e(this.responseToken)}catch{}this.timerId=window.setTimeout(()=>{if(this.timerId=null,this.responseToken=null,n)try{n()}catch{}this.isVisible&&this.execute()},jP)},qP))}checkIfDeleted(){if(this.deleted)throw new Error("reCAPTCHA mock was already deleted!")}}function KP(t){const e=[],n="1234567890abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ";for(let r=0;r<t;r++)e.push(n.charAt(Math.floor(Math.random()*n.length)));return e.join("")}/**
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
 */const md=A0("rcb"),GP=new gc(3e4,6e4),WP="https://www.google.com/recaptcha/api.js?";class QP{constructor(){var e;this.hostLanguage="",this.counter=0,this.librarySeparatelyLoaded=!!(!((e=rt().grecaptcha)===null||e===void 0)&&e.render)}load(e,n=""){return P(YP(n),e,"argument-error"),this.shouldResolveImmediately(n)&&hv(rt().grecaptcha)?Promise.resolve(rt().grecaptcha):new Promise((r,i)=>{const s=rt().setTimeout(()=>{i(bt(e,"network-request-failed"))},GP.get());rt()[md]=()=>{rt().clearTimeout(s),delete rt()[md];const a=rt().grecaptcha;if(!a||!hv(a)){i(bt(e,"internal-error"));return}const c=a.render;a.render=(u,l)=>{const h=c(u,l);return this.counter++,h},this.hostLanguage=n,r(a)};const o=`${WP}?${Eo({onload:md,render:"explicit",hl:n})}`;zp(o).catch(()=>{clearTimeout(s),i(bt(e,"internal-error"))})})}clearedOneInstance(){this.counter--}shouldResolveImmediately(e){var n;return!!(!((n=rt().grecaptcha)===null||n===void 0)&&n.render)&&(e===this.hostLanguage||this.counter>0||this.librarySeparatelyLoaded)}}function YP(t){return t.length<=6&&/^\s*[a-zA-Z0-9\-]*\s*$/.test(t)}class XP{async load(e){return new zP(e)}clearedOneInstance(){}}/**
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
 */const G0="recaptcha",JP={theme:"light",type:"image"};class ZP{constructor(e,n=Object.assign({},JP),r){this.parameters=n,this.type=G0,this.destroyed=!1,this.widgetId=null,this.tokenChangeListeners=new Set,this.renderPromise=null,this.recaptcha=null,this.auth=et(r),this.isInvisible=this.parameters.size==="invisible",P(typeof document<"u",this.auth,"operation-not-supported-in-this-environment");const i=typeof e=="string"?document.getElementById(e):e;P(i,this.auth,"argument-error"),this.container=i,this.parameters.callback=this.makeTokenCallback(this.parameters.callback),this._recaptchaLoader=this.auth.settings.appVerificationDisabledForTesting?new XP:new QP,this.validateStartingState()}async verify(){this.assertNotDestroyed();const e=await this.render(),n=this.getAssertedRecaptcha(),r=n.getResponse(e);return r||new Promise(i=>{const s=o=>{!o||(this.tokenChangeListeners.delete(s),i(o))};this.tokenChangeListeners.add(s),this.isInvisible&&n.execute(e)})}render(){try{this.assertNotDestroyed()}catch(e){return Promise.reject(e)}return this.renderPromise?this.renderPromise:(this.renderPromise=this.makeRenderPromise().catch(e=>{throw this.renderPromise=null,e}),this.renderPromise)}_reset(){this.assertNotDestroyed(),this.widgetId!==null&&this.getAssertedRecaptcha().reset(this.widgetId)}clear(){this.assertNotDestroyed(),this.destroyed=!0,this._recaptchaLoader.clearedOneInstance(),this.isInvisible||this.container.childNodes.forEach(e=>{this.container.removeChild(e)})}validateStartingState(){P(!this.parameters.sitekey,this.auth,"argument-error"),P(this.isInvisible||!this.container.hasChildNodes(),this.auth,"argument-error"),P(typeof document<"u",this.auth,"operation-not-supported-in-this-environment")}makeTokenCallback(e){return n=>{if(this.tokenChangeListeners.forEach(r=>r(n)),typeof e=="function")e(n);else if(typeof e=="string"){const r=rt()[e];typeof r=="function"&&r(n)}}}assertNotDestroyed(){P(!this.destroyed,this.auth,"internal-error")}async makeRenderPromise(){if(await this.init(),!this.widgetId){let e=this.container;if(!this.isInvisible){const n=document.createElement("div");e.appendChild(n),e=n}this.widgetId=this.getAssertedRecaptcha().render(e,this.parameters)}return this.widgetId}async init(){P(Bp()&&!Xp(),this.auth,"internal-error"),await e2(),this.recaptcha=await this._recaptchaLoader.load(this.auth,this.auth.languageCode||void 0);const e=await IN(this.auth);P(e,this.auth,"internal-error"),this.parameters.sitekey=e}getAssertedRecaptcha(){return P(this.recaptcha,this.auth,"internal-error"),this.recaptcha}}function e2(){let t=null;return new Promise(e=>{if(document.readyState==="complete"){e();return}t=()=>e(),window.addEventListener("load",t)}).catch(e=>{throw t&&window.removeEventListener("load",t),e})}/**
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
 */class Jp{constructor(e,n){this.verificationId=e,this.onConfirmation=n}confirm(e){const n=Ki._fromVerification(this.verificationId,e);return this.onConfirmation(n)}}async function t2(t,e,n){const r=et(t),i=await nh(r,e,Y(n));return new Jp(i,s=>Zl(r,s))}async function n2(t,e,n){const r=Y(t);await Jl(!1,r,"phone");const i=await nh(r.auth,e,Y(n));return new Jp(i,s=>M0(r,s))}async function r2(t,e,n){const r=Y(t),i=await nh(r.auth,e,Y(n));return new Jp(i,s=>F0(r,s))}async function nh(t,e,n){var r;const i=await n.verify();try{P(typeof i=="string",t,"argument-error"),P(n.type===G0,t,"argument-error");let s;if(typeof e=="string"?s={phoneNumber:e}:s=e,"session"in s){const o=s.session;if("phoneNumber"in s)return P(o.type==="enroll",t,"internal-error"),(await IP(t,{idToken:o.credential,phoneEnrollmentInfo:{phoneNumber:s.phoneNumber,recaptchaToken:i}})).phoneSessionInfo.sessionInfo;{P(o.type==="signin",t,"internal-error");const a=((r=s.multiFactorHint)===null||r===void 0?void 0:r.uid)||s.multiFactorUid;return P(a,t,"missing-multi-factor-info"),(await $P(t,{mfaPendingCredential:o.credential,mfaEnrollmentId:a,phoneSignInInfo:{recaptchaToken:i}})).phoneResponseInfo.sessionInfo}}else{const{sessionInfo:o}=await VN(t,{phoneNumber:s.phoneNumber,recaptchaToken:i});return o}}finally{n._reset()}}async function i2(t,e){await Hp(Y(t),e)}/**
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
 */class Tn{constructor(e){this.providerId=Tn.PROVIDER_ID,this.auth=et(e)}verifyPhoneNumber(e,n){return nh(this.auth,e,Y(n))}static credential(e,n){return Ki._fromVerification(e,n)}static credentialFromResult(e){const n=e;return Tn.credentialFromTaggedObject(n)}static credentialFromError(e){return Tn.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e)return null;const{phoneNumber:n,temporaryProof:r}=e;return n&&r?Ki._fromTokenResponse(n,r):null}}Tn.PROVIDER_ID="phone";Tn.PHONE_SIGN_IN_METHOD="phone";/**
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
 */function fs(t,e){return e?en(e):(P(t._popupRedirectResolver,t,"argument-error"),t._popupRedirectResolver)}/**
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
 */class Zp extends ko{constructor(e){super("custom","custom"),this.params=e}_getIdTokenResponse(e){return cr(e,this._buildIdpRequest())}_linkToIdToken(e,n){return cr(e,this._buildIdpRequest(n))}_getReauthenticationResolver(e){return cr(e,this._buildIdpRequest())}_buildIdpRequest(e){const n={requestUri:this.params.requestUri,sessionId:this.params.sessionId,postBody:this.params.postBody,tenantId:this.params.tenantId,pendingToken:this.params.pendingToken,returnSecureToken:!0,returnIdpCredential:!0};return e&&(n.idToken=e),n}}function s2(t){return L0(t.auth,new Zp(t),t.bypassAuthState)}function o2(t){const{auth:e,user:n}=t;return P(n,e,"internal-error"),O0(n,new Zp(t),t.bypassAuthState)}async function a2(t){const{auth:e,user:n}=t;return P(n,e,"internal-error"),Hp(n,new Zp(t),t.bypassAuthState)}/**
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
 */class W0{constructor(e,n,r,i,s=!1){this.auth=e,this.resolver=r,this.user=i,this.bypassAuthState=s,this.pendingPromise=null,this.eventManager=null,this.filter=Array.isArray(n)?n:[n]}execute(){return new Promise(async(e,n)=>{this.pendingPromise={resolve:e,reject:n};try{this.eventManager=await this.resolver._initialize(this.auth),await this.onExecution(),this.eventManager.registerConsumer(this)}catch(r){this.reject(r)}})}async onAuthEvent(e){const{urlResponse:n,sessionId:r,postBody:i,tenantId:s,error:o,type:a}=e;if(o){this.reject(o);return}const c={auth:this.auth,requestUri:n,sessionId:r,tenantId:s||void 0,postBody:i||void 0,user:this.user,bypassAuthState:this.bypassAuthState};try{this.resolve(await this.getIdpTask(a)(c))}catch(u){this.reject(u)}}onError(e){this.reject(e)}getIdpTask(e){switch(e){case"signInViaPopup":case"signInViaRedirect":return s2;case"linkViaPopup":case"linkViaRedirect":return a2;case"reauthViaPopup":case"reauthViaRedirect":return o2;default:Tt(this.auth,"internal-error")}}resolve(e){kn(this.pendingPromise,"Pending promise was never set"),this.pendingPromise.resolve(e),this.unregisterAndCleanUp()}reject(e){kn(this.pendingPromise,"Pending promise was never set"),this.pendingPromise.reject(e),this.unregisterAndCleanUp()}unregisterAndCleanUp(){this.eventManager&&this.eventManager.unregisterConsumer(this),this.pendingPromise=null,this.cleanUp()}}/**
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
 */const c2=new gc(2e3,1e4);async function u2(t,e,n){const r=et(t);To(t,e,br);const i=fs(r,n);return new nr(r,"signInViaPopup",e,i).executeNotNull()}async function l2(t,e,n){const r=Y(t);To(r.auth,e,br);const i=fs(r.auth,n);return new nr(r.auth,"reauthViaPopup",e,i,r).executeNotNull()}async function h2(t,e,n){const r=Y(t);To(r.auth,e,br);const i=fs(r.auth,n);return new nr(r.auth,"linkViaPopup",e,i,r).executeNotNull()}class nr extends W0{constructor(e,n,r,i,s){super(e,n,i,s),this.provider=r,this.authWindow=null,this.pollId=null,nr.currentPopupAction&&nr.currentPopupAction.cancel(),nr.currentPopupAction=this}async executeNotNull(){const e=await this.execute();return P(e,this.auth,"internal-error"),e}async onExecution(){kn(this.filter.length===1,"Popup operations only handle one event");const e=wc();this.authWindow=await this.resolver._openPopup(this.auth,this.provider,this.filter[0],e),this.authWindow.associatedEvent=e,this.resolver._originValidation(this.auth).catch(n=>{this.reject(n)}),this.resolver._isIframeWebStorageSupported(this.auth,n=>{n||this.reject(bt(this.auth,"web-storage-unsupported"))}),this.pollUserCancellation()}get eventId(){var e;return((e=this.authWindow)===null||e===void 0?void 0:e.associatedEvent)||null}cancel(){this.reject(bt(this.auth,"cancelled-popup-request"))}cleanUp(){this.authWindow&&this.authWindow.close(),this.pollId&&window.clearTimeout(this.pollId),this.authWindow=null,this.pollId=null,nr.currentPopupAction=null}pollUserCancellation(){const e=()=>{var n,r;if(!((r=(n=this.authWindow)===null||n===void 0?void 0:n.window)===null||r===void 0)&&r.closed){this.pollId=window.setTimeout(()=>{this.pollId=null,this.reject(bt(this.auth,"popup-closed-by-user"))},8e3);return}this.pollId=window.setTimeout(e,c2.get())};e()}}nr.currentPopupAction=null;/**
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
 */const d2="pendingRedirect",ga=new Map;class f2 extends W0{constructor(e,n,r=!1){super(e,["signInViaRedirect","linkViaRedirect","reauthViaRedirect","unknown"],n,void 0,r),this.eventId=null}async execute(){let e=ga.get(this.auth._key());if(!e){try{const r=await p2(this.resolver,this.auth)?await super.execute():null;e=()=>Promise.resolve(r)}catch(n){e=()=>Promise.reject(n)}ga.set(this.auth._key(),e)}return this.bypassAuthState||ga.set(this.auth._key(),()=>Promise.resolve(null)),e()}async onAuthEvent(e){if(e.type==="signInViaRedirect")return super.onAuthEvent(e);if(e.type==="unknown"){this.resolve(null);return}if(e.eventId){const n=await this.auth._redirectUserForId(e.eventId);if(n)return this.user=n,super.onAuthEvent(e);this.resolve(null)}}async onExecution(){}cleanUp(){}}async function p2(t,e){const n=Y0(e),r=Q0(t);if(!await r._isAvailable())return!1;const i=await r._get(n)==="true";return await r._remove(n),i}async function em(t,e){return Q0(t)._set(Y0(e),"true")}function m2(){ga.clear()}function tm(t,e){ga.set(t._key(),e)}function Q0(t){return en(t._redirectPersistence)}function Y0(t){return Hi(d2,t.config.apiKey,t.name)}/**
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
 */function g2(t,e,n){return y2(t,e,n)}async function y2(t,e,n){const r=et(t);To(t,e,br),await r._initializationPromise;const i=fs(r,n);return await em(i,r),i._openRedirect(r,e,"signInViaRedirect")}function v2(t,e,n){return w2(t,e,n)}async function w2(t,e,n){const r=Y(t);To(r.auth,e,br),await r.auth._initializationPromise;const i=fs(r.auth,n);await em(i,r.auth);const s=await X0(r);return i._openRedirect(r.auth,e,"reauthViaRedirect",s)}function _2(t,e,n){return b2(t,e,n)}async function b2(t,e,n){const r=Y(t);To(r.auth,e,br),await r.auth._initializationPromise;const i=fs(r.auth,n);await Jl(!1,r,e.providerId),await em(i,r.auth);const s=await X0(r);return i._openRedirect(r.auth,e,"linkViaRedirect",s)}async function I2(t,e){return await et(t)._initializationPromise,rh(t,e,!1)}async function rh(t,e,n=!1){const r=et(t),i=fs(r,e),o=await new f2(r,i,n).execute();return o&&!n&&(delete o.user._redirectEventId,await r._persistUserIfCurrent(o.user),await r._setRedirectUser(null,e)),o}async function X0(t){const e=wc(`${t.uid}:::`);return t._redirectEventId=e,await t.auth._setRedirectUser(t),await t.auth._persistUserIfCurrent(t),e}/**
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
 */const E2=10*60*1e3;class J0{constructor(e){this.auth=e,this.cachedEventUids=new Set,this.consumers=new Set,this.queuedRedirectEvent=null,this.hasHandledPotentialRedirect=!1,this.lastProcessedEventTime=Date.now()}registerConsumer(e){this.consumers.add(e),this.queuedRedirectEvent&&this.isEventForConsumer(this.queuedRedirectEvent,e)&&(this.sendToConsumer(this.queuedRedirectEvent,e),this.saveEventToCache(this.queuedRedirectEvent),this.queuedRedirectEvent=null)}unregisterConsumer(e){this.consumers.delete(e)}onEvent(e){if(this.hasEventBeenHandled(e))return!1;let n=!1;return this.consumers.forEach(r=>{this.isEventForConsumer(e,r)&&(n=!0,this.sendToConsumer(e,r),this.saveEventToCache(e))}),this.hasHandledPotentialRedirect||!T2(e)||(this.hasHandledPotentialRedirect=!0,n||(this.queuedRedirectEvent=e,n=!0)),n}sendToConsumer(e,n){var r;if(e.error&&!Z0(e)){const i=((r=e.error.code)===null||r===void 0?void 0:r.split("auth/")[1])||"internal-error";n.onError(bt(this.auth,i))}else n.onAuthEvent(e)}isEventForConsumer(e,n){const r=n.eventId===null||!!e.eventId&&e.eventId===n.eventId;return n.filter.includes(e.type)&&r}hasEventBeenHandled(e){return Date.now()-this.lastProcessedEventTime>=E2&&this.cachedEventUids.clear(),this.cachedEventUids.has(vv(e))}saveEventToCache(e){this.cachedEventUids.add(vv(e)),this.lastProcessedEventTime=Date.now()}}function vv(t){return[t.type,t.eventId,t.sessionId,t.tenantId].filter(e=>e).join("-")}function Z0({type:t,error:e}){return t==="unknown"&&(e==null?void 0:e.code)==="auth/no-auth-event"}function T2(t){switch(t.type){case"signInViaRedirect":case"linkViaRedirect":case"reauthViaRedirect":return!0;case"unknown":return Z0(t);default:return!1}}/**
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
 */async function eI(t,e={}){return ut(t,"GET","/v1/projects",e)}/**
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
 */const S2=/^\d{1,3}\.\d{1,3}\.\d{1,3}\.\d{1,3}$/,k2=/^https?/;async function A2(t){if(t.config.emulator)return;const{authorizedDomains:e}=await eI(t);for(const n of e)try{if(C2(n))return}catch{}Tt(t,"unauthorized-domain")}function C2(t){const e=Va(),{protocol:n,hostname:r}=new URL(e);if(t.startsWith("chrome-extension://")){const o=new URL(t);return o.hostname===""&&r===""?n==="chrome-extension:"&&t.replace("chrome-extension://","")===e.replace("chrome-extension://",""):n==="chrome-extension:"&&o.hostname===r}if(!k2.test(n))return!1;if(S2.test(t))return r===t;const i=t.replace(/\./g,"\\.");return new RegExp("^(.+\\."+i+"|"+i+")$","i").test(r)}/**
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
 */const x2=new gc(3e4,6e4);function wv(){const t=rt().___jsl;if(t!=null&&t.H){for(const e of Object.keys(t.H))if(t.H[e].r=t.H[e].r||[],t.H[e].L=t.H[e].L||[],t.H[e].r=[...t.H[e].L],t.CP)for(let n=0;n<t.CP.length;n++)t.CP[n]=null}}function R2(t){return new Promise((e,n)=>{var r,i,s;function o(){wv(),gapi.load("gapi.iframes",{callback:()=>{e(gapi.iframes.getContext())},ontimeout:()=>{wv(),n(bt(t,"network-request-failed"))},timeout:x2.get()})}if(!((i=(r=rt().gapi)===null||r===void 0?void 0:r.iframes)===null||i===void 0)&&i.Iframe)e(gapi.iframes.getContext());else if(!((s=rt().gapi)===null||s===void 0)&&s.load)o();else{const a=A0("iframefcb");return rt()[a]=()=>{gapi.load?o():n(bt(t,"network-request-failed"))},zp(`https://apis.google.com/js/api.js?onload=${a}`).catch(c=>n(c))}}).catch(e=>{throw Du=null,e})}let Du=null;function N2(t){return Du=Du||R2(t),Du}/**
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
 */const P2=new gc(5e3,15e3),D2="__/auth/iframe",O2="emulator/auth/iframe",L2={style:{position:"absolute",top:"-100px",width:"1px",height:"1px"},"aria-hidden":"true",tabindex:"-1"},M2=new Map([["identitytoolkit.googleapis.com","p"],["staging-identitytoolkit.sandbox.googleapis.com","s"],["test-identitytoolkit.sandbox.googleapis.com","t"]]);function F2(t){const e=t.config;P(e.authDomain,t,"auth-domain-config-required");const n=e.emulator?qp(e,O2):`https://${t.config.authDomain}/${D2}`,r={apiKey:e.apiKey,appName:t.name,v:wr},i=M2.get(t.config.apiHost);i&&(r.eid=i);const s=t._getFrameworks();return s.length&&(r.fw=s.join(",")),`${n}?${Eo(r).slice(1)}`}async function U2(t){const e=await N2(t),n=rt().gapi;return P(n,t,"internal-error"),e.open({where:document.body,url:F2(t),messageHandlersFilter:n.iframes.CROSS_ORIGIN_IFRAMES_FILTER,attributes:L2,dontclear:!0},r=>new Promise(async(i,s)=>{await r.restyle({setHideOnLeave:!1});const o=bt(t,"network-request-failed"),a=rt().setTimeout(()=>{s(o)},P2.get());function c(){rt().clearTimeout(a),i(r)}r.ping(c).then(c,()=>{s(o)})}))}/**
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
 */const V2={location:"yes",resizable:"yes",statusbar:"yes",toolbar:"no"},$2=500,B2=600,q2="_blank",j2="http://localhost";class _v{constructor(e){this.window=e,this.associatedEvent=null}close(){if(this.window)try{this.window.close()}catch{}}}function z2(t,e,n,r=$2,i=B2){const s=Math.max((window.screen.availHeight-i)/2,0).toString(),o=Math.max((window.screen.availWidth-r)/2,0).toString();let a="";const c=Object.assign(Object.assign({},V2),{width:r.toString(),height:i.toString(),top:s,left:o}),u=ze().toLowerCase();n&&(a=w0(u)?q2:n),v0(u)&&(e=e||j2,c.scrollbars="yes");const l=Object.entries(c).reduce((d,[f,m])=>`${d}${f}=${m},`,"");if(wN(u)&&a!=="_self")return H2(e||"",a),new _v(null);const h=window.open(e||"",a,l);P(h,t,"popup-blocked");try{h.focus()}catch{}return new _v(h)}function H2(t,e){const n=document.createElement("a");n.href=t,n.target=e;const r=document.createEvent("MouseEvent");r.initMouseEvent("click",!0,!0,window,1,0,0,0,0,!1,!1,!1,!1,1,null),n.dispatchEvent(r)}/**
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
 */const K2="__/auth/handler",G2="emulator/auth/handler",W2=encodeURIComponent("fac");async function uf(t,e,n,r,i,s){P(t.config.authDomain,t,"auth-domain-config-required"),P(t.config.apiKey,t,"invalid-api-key");const o={apiKey:t.config.apiKey,appName:t.name,authType:n,redirectUrl:r,v:wr,eventId:i};if(e instanceof br){e.setDefaultLanguage(t.languageCode),o.providerId=e.providerId||"",Rx(e.getCustomParameters())||(o.customParameters=JSON.stringify(e.getCustomParameters()));for(const[l,h]of Object.entries(s||{}))o[l]=h}if(e instanceof Ao){const l=e.getScopes().filter(h=>h!=="");l.length>0&&(o.scopes=l.join(","))}t.tenantId&&(o.tid=t.tenantId);const a=o;for(const l of Object.keys(a))a[l]===void 0&&delete a[l];const c=await t._getAppCheckToken(),u=c?`#${W2}=${encodeURIComponent(c)}`:"";return`${Q2(t)}?${Eo(a).slice(1)}${u}`}function Q2({config:t}){return t.emulator?qp(t,G2):`https://${t.authDomain}/${K2}`}/**
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
 */const gd="webStorageSupport";class Y2{constructor(){this.eventManagers={},this.iframes={},this.originValidationPromises={},this._redirectPersistence=Xi,this._completeRedirectFn=rh,this._overrideRedirectResult=tm}async _openPopup(e,n,r,i){var s;kn((s=this.eventManagers[e._key()])===null||s===void 0?void 0:s.manager,"_initialize() not called before _openPopup()");const o=await uf(e,n,r,Va(),i);return z2(e,o,wc())}async _openRedirect(e,n,r,i){await this._originValidation(e);const s=await uf(e,n,r,Va(),i);return NP(s),new Promise(()=>{})}_initialize(e){const n=e._key();if(this.eventManagers[n]){const{manager:i,promise:s}=this.eventManagers[n];return i?Promise.resolve(i):(kn(s,"If manager is not set, promise should be"),s)}const r=this.initAndGetManager(e);return this.eventManagers[n]={promise:r},r.catch(()=>{delete this.eventManagers[n]}),r}async initAndGetManager(e){const n=await U2(e),r=new J0(e);return n.register("authEvent",i=>(P(i==null?void 0:i.authEvent,e,"invalid-auth-event"),{status:r.onEvent(i.authEvent)?"ACK":"ERROR"}),gapi.iframes.CROSS_ORIGIN_IFRAMES_FILTER),this.eventManagers[e._key()]={manager:r},this.iframes[e._key()]=n,r}_isIframeWebStorageSupported(e,n){this.iframes[e._key()].send(gd,{type:gd},i=>{var s;const o=(s=i==null?void 0:i[0])===null||s===void 0?void 0:s[gd];o!==void 0&&n(!!o),Tt(e,"internal-error")},gapi.iframes.CROSS_ORIGIN_IFRAMES_FILTER)}_originValidation(e){const n=e._key();return this.originValidationPromises[n]||(this.originValidationPromises[n]=A2(e)),this.originValidationPromises[n]}get _shouldInitProactively(){return E0()||jp()||So()}}const X2=Y2;class J2{constructor(e){this.factorId=e}_process(e,n,r){switch(n.type){case"enroll":return this._finalizeEnroll(e,n.credential,r);case"signin":return this._finalizeSignIn(e,n.credential);default:return $n("unexpected MultiFactorSessionType")}}}class nm extends J2{constructor(e){super("phone"),this.credential=e}static _fromCredential(e){return new nm(e)}_finalizeEnroll(e,n,r){return EP(e,{idToken:n,displayName:r,phoneVerificationInfo:this.credential._makeVerificationRequest()})}_finalizeSignIn(e,n){return BP(e,{mfaPendingCredential:n,phoneVerificationInfo:this.credential._makeVerificationRequest()})}}class tI{constructor(){}static assertion(e){return nm._fromCredential(e)}}tI.FACTOR_ID="phone";var bv="@firebase/auth",Iv="0.23.1";/**
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
 */class Z2{constructor(e){this.auth=e,this.internalListeners=new Map}getUid(){var e;return this.assertAuthConfigured(),((e=this.auth.currentUser)===null||e===void 0?void 0:e.uid)||null}async getToken(e){return this.assertAuthConfigured(),await this.auth._initializationPromise,this.auth.currentUser?{accessToken:await this.auth.currentUser.getIdToken(e)}:null}addAuthTokenListener(e){if(this.assertAuthConfigured(),this.internalListeners.has(e))return;const n=this.auth.onIdTokenChanged(r=>{e((r==null?void 0:r.stsTokenManager.accessToken)||null)});this.internalListeners.set(e,n),this.updateProactiveRefresh()}removeAuthTokenListener(e){this.assertAuthConfigured();const n=this.internalListeners.get(e);!n||(this.internalListeners.delete(e),n(),this.updateProactiveRefresh())}assertAuthConfigured(){P(this.auth._initializationPromise,"dependent-sdk-initialized-before-auth")}updateProactiveRefresh(){this.internalListeners.size>0?this.auth._startProactiveRefresh():this.auth._stopProactiveRefresh()}}/**
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
 */function eD(t){switch(t){case"Node":return"node";case"ReactNative":return"rn";case"Worker":return"webworker";case"Cordova":return"cordova";default:return}}function tD(t){hr(new hn("auth",(e,{options:n})=>{const r=e.getProvider("app").getImmediate(),i=e.getProvider("heartbeat"),s=e.getProvider("app-check-internal"),{apiKey:o,authDomain:a}=r.options;P(o&&!o.includes(":"),"invalid-api-key",{appName:r.name}),P(!(a!=null&&a.includes(":")),"argument-error",{appName:r.name});const c={apiKey:o,authDomain:a,clientPlatform:t,apiHost:"identitytoolkit.googleapis.com",tokenApiHost:"securetoken.googleapis.com",apiScheme:"https",sdkClientVersion:T0(t)},u=new CN(r,i,s,c);return xN(u,n),u},"PUBLIC").setInstantiationMode("EXPLICIT").setInstanceCreatedCallback((e,n,r)=>{e.getProvider("auth-internal").initialize()})),hr(new hn("auth-internal",e=>{const n=et(e.getProvider("auth").getImmediate());return(r=>new Z2(r))(n)},"PRIVATE").setInstantiationMode("EXPLICIT")),ln(bv,Iv,eD(t)),ln(bv,Iv,"esm2017")}/**
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
 */const nD=5*60;bx("authIdTokenMaxAge");tD("Browser");/**
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
 */function Ji(){return window}/**
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
 */const rD=2e3;async function iD(t,e,n){var r;const{BuildInfo:i}=Ji();kn(e.sessionId,"AuthEvent did not contain a session ID");const s=await uD(e.sessionId),o={};return So()?o.ibi=i.packageName:yc()?o.apn=i.packageName:Tt(t,"operation-not-supported-in-this-environment"),i.displayName&&(o.appDisplayName=i.displayName),o.sessionId=s,uf(t,n,e.type,void 0,(r=e.eventId)!==null&&r!==void 0?r:void 0,o)}async function sD(t){const{BuildInfo:e}=Ji(),n={};So()?n.iosBundleId=e.packageName:yc()?n.androidPackageName=e.packageName:Tt(t,"operation-not-supported-in-this-environment"),await eI(t,n)}function oD(t){const{cordova:e}=Ji();return new Promise(n=>{e.plugins.browsertab.isAvailable(r=>{let i=null;r?e.plugins.browsertab.openUrl(t):i=e.InAppBrowser.open(t,vN()?"_blank":"_system","location=yes"),n(i)})})}async function aD(t,e,n){const{cordova:r}=Ji();let i=()=>{};try{await new Promise((s,o)=>{let a=null;function c(){var h;s();const d=(h=r.plugins.browsertab)===null||h===void 0?void 0:h.close;typeof d=="function"&&d(),typeof(n==null?void 0:n.close)=="function"&&n.close()}function u(){a||(a=window.setTimeout(()=>{o(bt(t,"redirect-cancelled-by-user"))},rD))}function l(){(document==null?void 0:document.visibilityState)==="visible"&&u()}e.addPassiveListener(c),document.addEventListener("resume",u,!1),yc()&&document.addEventListener("visibilitychange",l,!1),i=()=>{e.removePassiveListener(c),document.removeEventListener("resume",u,!1),document.removeEventListener("visibilitychange",l,!1),a&&window.clearTimeout(a)}})}finally{i()}}function cD(t){var e,n,r,i,s,o,a,c,u,l;const h=Ji();P(typeof((e=h==null?void 0:h.universalLinks)===null||e===void 0?void 0:e.subscribe)=="function",t,"invalid-cordova-configuration",{missingPlugin:"cordova-universal-links-plugin-fix"}),P(typeof((n=h==null?void 0:h.BuildInfo)===null||n===void 0?void 0:n.packageName)<"u",t,"invalid-cordova-configuration",{missingPlugin:"cordova-plugin-buildInfo"}),P(typeof((s=(i=(r=h==null?void 0:h.cordova)===null||r===void 0?void 0:r.plugins)===null||i===void 0?void 0:i.browsertab)===null||s===void 0?void 0:s.openUrl)=="function",t,"invalid-cordova-configuration",{missingPlugin:"cordova-plugin-browsertab"}),P(typeof((c=(a=(o=h==null?void 0:h.cordova)===null||o===void 0?void 0:o.plugins)===null||a===void 0?void 0:a.browsertab)===null||c===void 0?void 0:c.isAvailable)=="function",t,"invalid-cordova-configuration",{missingPlugin:"cordova-plugin-browsertab"}),P(typeof((l=(u=h==null?void 0:h.cordova)===null||u===void 0?void 0:u.InAppBrowser)===null||l===void 0?void 0:l.open)=="function",t,"invalid-cordova-configuration",{missingPlugin:"cordova-plugin-inappbrowser"})}async function uD(t){const e=lD(t),n=await crypto.subtle.digest("SHA-256",e);return Array.from(new Uint8Array(n)).map(i=>i.toString(16).padStart(2,"0")).join("")}function lD(t){if(kn(/[0-9a-zA-Z]+/.test(t),"Can only convert alpha-numeric strings"),typeof TextEncoder<"u")return new TextEncoder().encode(t);const e=new ArrayBuffer(t.length),n=new Uint8Array(e);for(let r=0;r<t.length;r++)n[r]=t.charCodeAt(r);return n}/**
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
 */const hD=20;class dD extends J0{constructor(){super(...arguments),this.passiveListeners=new Set,this.initPromise=new Promise(e=>{this.resolveInialized=e})}addPassiveListener(e){this.passiveListeners.add(e)}removePassiveListener(e){this.passiveListeners.delete(e)}resetRedirect(){this.queuedRedirectEvent=null,this.hasHandledPotentialRedirect=!1}onEvent(e){return this.resolveInialized(),this.passiveListeners.forEach(n=>n(e)),super.onEvent(e)}async initialized(){await this.initPromise}}function fD(t,e,n=null){return{type:e,eventId:n,urlResponse:null,sessionId:gD(),postBody:null,tenantId:t.tenantId,error:bt(t,"no-auth-event")}}function pD(t,e){return lf()._set(hf(t),e)}async function Ev(t){const e=await lf()._get(hf(t));return e&&await lf()._remove(hf(t)),e}function mD(t,e){var n,r;const i=vD(e);if(i.includes("/__/auth/callback")){const s=Ou(i),o=s.firebaseError?yD(decodeURIComponent(s.firebaseError)):null,a=(r=(n=o==null?void 0:o.code)===null||n===void 0?void 0:n.split("auth/"))===null||r===void 0?void 0:r[1],c=a?bt(a):null;return c?{type:t.type,eventId:t.eventId,tenantId:t.tenantId,error:c,urlResponse:null,sessionId:null,postBody:null}:{type:t.type,eventId:t.eventId,tenantId:t.tenantId,sessionId:t.sessionId,urlResponse:i,postBody:null}}return null}function gD(){const t=[],e="1234567890abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ";for(let n=0;n<hD;n++){const r=Math.floor(Math.random()*e.length);t.push(e.charAt(r))}return t.join("")}function lf(){return en(Yp)}function hf(t){return Hi("authEvent",t.config.apiKey,t.name)}function yD(t){try{return JSON.parse(t)}catch{return null}}function vD(t){const e=Ou(t),n=e.link?decodeURIComponent(e.link):void 0,r=Ou(n).link,i=e.deep_link_id?decodeURIComponent(e.deep_link_id):void 0;return Ou(i).link||i||r||n||t}function Ou(t){if(!(t!=null&&t.includes("?")))return{};const[e,...n]=t.split("?");return Os(n.join("?"))}/**
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
 */const wD=500;class _D{constructor(){this._redirectPersistence=Xi,this._shouldInitProactively=!0,this.eventManagers=new Map,this.originValidationPromises={},this._completeRedirectFn=rh,this._overrideRedirectResult=tm}async _initialize(e){const n=e._key();let r=this.eventManagers.get(n);return r||(r=new dD(e),this.eventManagers.set(n,r),this.attachCallbackListeners(e,r)),r}_openPopup(e){Tt(e,"operation-not-supported-in-this-environment")}async _openRedirect(e,n,r,i){cD(e);const s=await this._initialize(e);await s.initialized(),s.resetRedirect(),m2(),await this._originValidation(e);const o=fD(e,r,i);await pD(e,o);const a=await iD(e,o,n),c=await oD(a);return aD(e,s,c)}_isIframeWebStorageSupported(e,n){throw new Error("Method not implemented.")}_originValidation(e){const n=e._key();return this.originValidationPromises[n]||(this.originValidationPromises[n]=sD(e)),this.originValidationPromises[n]}attachCallbackListeners(e,n){const{universalLinks:r,handleOpenURL:i,BuildInfo:s}=Ji(),o=setTimeout(async()=>{await Ev(e),n.onEvent(Tv())},wD),a=async l=>{clearTimeout(o);const h=await Ev(e);let d=null;h&&(l==null?void 0:l.url)&&(d=mD(h,l.url)),n.onEvent(d||Tv())};typeof r<"u"&&typeof r.subscribe=="function"&&r.subscribe(null,a);const c=i,u=`${s.packageName.toLowerCase()}://`;Ji().handleOpenURL=async l=>{if(l.toLowerCase().startsWith(u)&&a({url:l}),typeof c=="function")try{c(l)}catch(h){console.error(h)}}}}const bD=_D;function Tv(){return{type:"unknown",eventId:null,sessionId:null,urlResponse:null,postBody:null,tenantId:null,error:bt("no-auth-event")}}/**
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
 */function ID(t,e){et(t)._logFramework(e)}var ED="@firebase/auth-compat",TD="0.4.1";/**
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
 */const SD=1e3;function ya(){var t;return((t=self==null?void 0:self.location)===null||t===void 0?void 0:t.protocol)||null}function kD(){return ya()==="http:"||ya()==="https:"}function nI(t=ze()){return!!((ya()==="file:"||ya()==="ionic:"||ya()==="capacitor:")&&t.toLowerCase().match(/iphone|ipad|ipod|android/))}function AD(){return Lp()||Gl()}function CD(){return Xb()&&(document==null?void 0:document.documentMode)===11}function xD(t=ze()){return/Edge\/\d+/.test(t)}function RD(t=ze()){return CD()||xD(t)}function rI(){try{const t=self.localStorage,e=wc();if(t)return t.setItem(e,"1"),t.removeItem(e),RD()?Ma():!0}catch{return rm()&&Ma()}return!1}function rm(){return typeof global<"u"&&"WorkerGlobalScope"in global&&"importScripts"in global}function yd(){return(kD()||Yb()||nI())&&!AD()&&rI()&&!rm()}function iI(){return nI()&&typeof document<"u"}async function ND(){return iI()?new Promise(t=>{const e=setTimeout(()=>{t(!1)},SD);document.addEventListener("deviceready",()=>{clearTimeout(e),t(!0)})}):!1}function PD(){return typeof window<"u"?window:null}/**
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
 */const Jt={LOCAL:"local",NONE:"none",SESSION:"session"},zo=P,sI="persistence";function DD(t,e){if(zo(Object.values(Jt).includes(e),t,"invalid-persistence-type"),Lp()){zo(e!==Jt.SESSION,t,"unsupported-persistence-type");return}if(Gl()){zo(e===Jt.NONE,t,"unsupported-persistence-type");return}if(rm()){zo(e===Jt.NONE||e===Jt.LOCAL&&Ma(),t,"unsupported-persistence-type");return}zo(e===Jt.NONE||rI(),t,"unsupported-persistence-type")}async function df(t){await t._initializationPromise;const e=oI(),n=Hi(sI,t.config.apiKey,t.name);e&&e.setItem(n,t._getPersistence())}function OD(t,e){const n=oI();if(!n)return[];const r=Hi(sI,t,e);switch(n.getItem(r)){case Jt.NONE:return[ro];case Jt.LOCAL:return[ja,Xi];case Jt.SESSION:return[Xi];default:return[]}}function oI(){var t;try{return((t=PD())===null||t===void 0?void 0:t.sessionStorage)||null}catch{return null}}/**
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
 */const LD=P;class Br{constructor(){this.browserResolver=en(X2),this.cordovaResolver=en(bD),this.underlyingResolver=null,this._redirectPersistence=Xi,this._completeRedirectFn=rh,this._overrideRedirectResult=tm}async _initialize(e){return await this.selectUnderlyingResolver(),this.assertedUnderlyingResolver._initialize(e)}async _openPopup(e,n,r,i){return await this.selectUnderlyingResolver(),this.assertedUnderlyingResolver._openPopup(e,n,r,i)}async _openRedirect(e,n,r,i){return await this.selectUnderlyingResolver(),this.assertedUnderlyingResolver._openRedirect(e,n,r,i)}_isIframeWebStorageSupported(e,n){this.assertedUnderlyingResolver._isIframeWebStorageSupported(e,n)}_originValidation(e){return this.assertedUnderlyingResolver._originValidation(e)}get _shouldInitProactively(){return iI()||this.browserResolver._shouldInitProactively}get assertedUnderlyingResolver(){return LD(this.underlyingResolver,"internal-error"),this.underlyingResolver}async selectUnderlyingResolver(){if(this.underlyingResolver)return;const e=await ND();this.underlyingResolver=e?this.cordovaResolver:this.browserResolver}}/**
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
 */function aI(t){return t.unwrap()}function MD(t){return t.wrapped()}/**
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
 */function FD(t){return cI(t)}function UD(t,e){var n;const r=(n=e.customData)===null||n===void 0?void 0:n._tokenResponse;if((e==null?void 0:e.code)==="auth/multi-factor-auth-required"){const i=e;i.resolver=new VD(t,bP(t,e))}else if(r){const i=cI(e),s=e;i&&(s.credential=i,s.tenantId=r.tenantId||void 0,s.email=r.email||void 0,s.phoneNumber=r.phoneNumber||void 0)}}function cI(t){const{_tokenResponse:e}=t instanceof Rt?t.customData:t;if(!e)return null;if(!(t instanceof Rt)&&"temporaryProof"in e&&"phoneNumber"in e)return Tn.credentialFromResult(t);const n=e.providerId;if(!n||n===jo.PASSWORD)return null;let r;switch(n){case jo.GOOGLE:r=Ln;break;case jo.FACEBOOK:r=On;break;case jo.GITHUB:r=Mn;break;case jo.TWITTER:r=Fn;break;default:const{oauthIdToken:i,oauthAccessToken:s,oauthTokenSecret:o,pendingToken:a,nonce:c}=e;return!s&&!o&&!i&&!a?null:a?n.startsWith("saml.")?io._create(n,a):Yn._fromParams({providerId:n,signInMethod:n,pendingToken:a,idToken:i,accessToken:s}):new zs(n).credential({idToken:i,accessToken:s,rawNonce:c})}return t instanceof Rt?r.credentialFromError(t):r.credentialFromResult(t)}function jt(t,e){return e.catch(n=>{throw n instanceof Rt&&UD(t,n),n}).then(n=>{const r=n.operationType,i=n.user;return{operationType:r,credential:FD(n),additionalUserInfo:_P(n),user:rr.getOrCreate(i)}})}async function ff(t,e){const n=await e;return{verificationId:n.verificationId,confirm:r=>jt(t,n.confirm(r))}}class VD{constructor(e,n){this.resolver=n,this.auth=MD(e)}get session(){return this.resolver.session}get hints(){return this.resolver.hints}resolveSignIn(e){return jt(aI(this.auth),this.resolver.resolveSignIn(e))}}/**
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
 */class rr{constructor(e){this._delegate=e,this.multiFactor=SP(e)}static getOrCreate(e){return rr.USER_MAP.has(e)||rr.USER_MAP.set(e,new rr(e)),rr.USER_MAP.get(e)}delete(){return this._delegate.delete()}reload(){return this._delegate.reload()}toJSON(){return this._delegate.toJSON()}getIdTokenResult(e){return this._delegate.getIdTokenResult(e)}getIdToken(e){return this._delegate.getIdToken(e)}linkAndRetrieveDataWithCredential(e){return this.linkWithCredential(e)}async linkWithCredential(e){return jt(this.auth,M0(this._delegate,e))}async linkWithPhoneNumber(e,n){return ff(this.auth,n2(this._delegate,e,n))}async linkWithPopup(e){return jt(this.auth,h2(this._delegate,e,Br))}async linkWithRedirect(e){return await df(et(this.auth)),_2(this._delegate,e,Br)}reauthenticateAndRetrieveDataWithCredential(e){return this.reauthenticateWithCredential(e)}async reauthenticateWithCredential(e){return jt(this.auth,F0(this._delegate,e))}reauthenticateWithPhoneNumber(e,n){return ff(this.auth,r2(this._delegate,e,n))}reauthenticateWithPopup(e){return jt(this.auth,l2(this._delegate,e,Br))}async reauthenticateWithRedirect(e){return await df(et(this.auth)),v2(this._delegate,e,Br)}sendEmailVerification(e){return uP(this._delegate,e)}async unlink(e){return await QN(this._delegate,e),this}updateEmail(e){return fP(this._delegate,e)}updatePassword(e){return pP(this._delegate,e)}updatePhoneNumber(e){return i2(this._delegate,e)}updateProfile(e){return dP(this._delegate,e)}verifyBeforeUpdateEmail(e,n){return lP(this._delegate,e,n)}get emailVerified(){return this._delegate.emailVerified}get isAnonymous(){return this._delegate.isAnonymous}get metadata(){return this._delegate.metadata}get phoneNumber(){return this._delegate.phoneNumber}get providerData(){return this._delegate.providerData}get refreshToken(){return this._delegate.refreshToken}get tenantId(){return this._delegate.tenantId}get displayName(){return this._delegate.displayName}get email(){return this._delegate.email}get photoURL(){return this._delegate.photoURL}get providerId(){return this._delegate.providerId}get uid(){return this._delegate.uid}get auth(){return this._delegate.auth}}rr.USER_MAP=new WeakMap;/**
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
 */const Ho=P;class pf{constructor(e,n){if(this.app=e,n.isInitialized()){this._delegate=n.getImmediate(),this.linkUnderlyingAuth();return}const{apiKey:r}=e.options;Ho(r,"invalid-api-key",{appName:e.name}),Ho(r,"invalid-api-key",{appName:e.name});const i=typeof window<"u"?Br:void 0;this._delegate=n.initialize({options:{persistence:$D(r,e.name),popupRedirectResolver:i}}),this._delegate._updateErrorMap(ZR),this.linkUnderlyingAuth()}get emulatorConfig(){return this._delegate.emulatorConfig}get currentUser(){return this._delegate.currentUser?rr.getOrCreate(this._delegate.currentUser):null}get languageCode(){return this._delegate.languageCode}set languageCode(e){this._delegate.languageCode=e}get settings(){return this._delegate.settings}get tenantId(){return this._delegate.tenantId}set tenantId(e){this._delegate.tenantId=e}useDeviceLanguage(){this._delegate.useDeviceLanguage()}signOut(){return this._delegate.signOut()}useEmulator(e,n){RN(this._delegate,e,n)}applyActionCode(e){return eP(this._delegate,e)}checkActionCode(e){return U0(this._delegate,e)}confirmPasswordReset(e,n){return ZN(this._delegate,e,n)}async createUserWithEmailAndPassword(e,n){return jt(this._delegate,nP(this._delegate,e,n))}fetchProvidersForEmail(e){return this.fetchSignInMethodsForEmail(e)}fetchSignInMethodsForEmail(e){return cP(this._delegate,e)}isSignInWithEmailLink(e){return sP(this._delegate,e)}async getRedirectResult(){Ho(yd(),this._delegate,"operation-not-supported-in-this-environment");const e=await I2(this._delegate,Br);return e?jt(this._delegate,Promise.resolve(e)):{credential:null,user:null}}addFrameworkForLogging(e){ID(this._delegate,e)}onAuthStateChanged(e,n,r){const{next:i,error:s,complete:o}=Sv(e,n,r);return this._delegate.onAuthStateChanged(i,s,o)}onIdTokenChanged(e,n,r){const{next:i,error:s,complete:o}=Sv(e,n,r);return this._delegate.onIdTokenChanged(i,s,o)}sendSignInLinkToEmail(e,n){return iP(this._delegate,e,n)}sendPasswordResetEmail(e,n){return JN(this._delegate,e,n||void 0)}async setPersistence(e){DD(this._delegate,e);let n;switch(e){case Jt.SESSION:n=Xi;break;case Jt.LOCAL:n=await en(ja)._isAvailable()?ja:Yp;break;case Jt.NONE:n=ro;break;default:return Tt("argument-error",{appName:this._delegate.name})}return this._delegate.setPersistence(n)}signInAndRetrieveDataWithCredential(e){return this.signInWithCredential(e)}signInAnonymously(){return jt(this._delegate,WN(this._delegate))}signInWithCredential(e){return jt(this._delegate,Zl(this._delegate,e))}signInWithCustomToken(e){return jt(this._delegate,XN(this._delegate,e))}signInWithEmailAndPassword(e,n){return jt(this._delegate,rP(this._delegate,e,n))}signInWithEmailLink(e,n){return jt(this._delegate,oP(this._delegate,e,n))}signInWithPhoneNumber(e,n){return ff(this._delegate,t2(this._delegate,e,n))}async signInWithPopup(e){return Ho(yd(),this._delegate,"operation-not-supported-in-this-environment"),jt(this._delegate,u2(this._delegate,e,Br))}async signInWithRedirect(e){return Ho(yd(),this._delegate,"operation-not-supported-in-this-environment"),await df(this._delegate),g2(this._delegate,e,Br)}updateCurrentUser(e){return this._delegate.updateCurrentUser(e)}verifyPasswordResetCode(e){return tP(this._delegate,e)}unwrap(){return this._delegate}_delete(){return this._delegate._delete()}linkUnderlyingAuth(){this._delegate.wrapped=()=>this}}pf.Persistence=Jt;function Sv(t,e,n){let r=t;typeof t!="function"&&({next:r,error:e,complete:n}=t);const i=r;return{next:o=>i(o&&rr.getOrCreate(o)),error:e,complete:n}}function $D(t,e){const n=OD(t,e);if(typeof self<"u"&&!n.includes(ja)&&n.push(ja),typeof window<"u")for(const r of[Yp,Xi])n.includes(r)||n.push(r);return n.includes(ro)||n.push(ro),n}/**
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
 */class im{constructor(){this.providerId="phone",this._delegate=new Tn(aI(ds.auth()))}static credential(e,n){return Tn.credential(e,n)}verifyPhoneNumber(e,n){return this._delegate.verifyPhoneNumber(e,n)}unwrap(){return this._delegate}}im.PHONE_SIGN_IN_METHOD=Tn.PHONE_SIGN_IN_METHOD;im.PROVIDER_ID=Tn.PROVIDER_ID;/**
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
 */const BD=P;class qD{constructor(e,n,r=ds.app()){var i;BD((i=r.options)===null||i===void 0?void 0:i.apiKey,"invalid-api-key",{appName:r.name}),this._delegate=new ZP(e,n,r.auth()),this.type=this._delegate.type}clear(){this._delegate.clear()}render(){return this._delegate.render()}verify(){return this._delegate.verify()}}/**
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
 */const jD="auth-compat";function zD(t){t.INTERNAL.registerComponent(new hn(jD,e=>{const n=e.getProvider("app-compat").getImmediate(),r=e.getProvider("auth");return new pf(n,r)},"PUBLIC").setServiceProps({ActionCodeInfo:{Operation:{EMAIL_SIGNIN:Ts.EMAIL_SIGNIN,PASSWORD_RESET:Ts.PASSWORD_RESET,RECOVER_EMAIL:Ts.RECOVER_EMAIL,REVERT_SECOND_FACTOR_ADDITION:Ts.REVERT_SECOND_FACTOR_ADDITION,VERIFY_AND_CHANGE_EMAIL:Ts.VERIFY_AND_CHANGE_EMAIL,VERIFY_EMAIL:Ts.VERIFY_EMAIL}},EmailAuthProvider:ui,FacebookAuthProvider:On,GithubAuthProvider:Mn,GoogleAuthProvider:Ln,OAuthProvider:zs,SAMLAuthProvider:Zu,PhoneAuthProvider:im,PhoneMultiFactorGenerator:tI,RecaptchaVerifier:qD,TwitterAuthProvider:Fn,Auth:pf,AuthCredential:ko,Error:Rt}).setInstantiationMode("LAZY").setMultipleInstances(!1)),t.registerVersion(ED,TD)}zD(ds);var HD=typeof globalThis<"u"?globalThis:typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{},$,sm=sm||{},ie=HD||self;function rl(){}function ih(t){var e=typeof t;return e=e!="object"?e:t?Array.isArray(t)?"array":e:"null",e=="array"||e=="object"&&typeof t.length=="number"}function bc(t){var e=typeof t;return e=="object"&&t!=null||e=="function"}function KD(t){return Object.prototype.hasOwnProperty.call(t,vd)&&t[vd]||(t[vd]=++GD)}var vd="closure_uid_"+(1e9*Math.random()>>>0),GD=0;function WD(t,e,n){return t.call.apply(t.bind,arguments)}function QD(t,e,n){if(!t)throw Error();if(2<arguments.length){var r=Array.prototype.slice.call(arguments,2);return function(){var i=Array.prototype.slice.call(arguments);return Array.prototype.unshift.apply(i,r),t.apply(e,i)}}return function(){return t.apply(e,arguments)}}function Nt(t,e,n){return Function.prototype.bind&&Function.prototype.bind.toString().indexOf("native code")!=-1?Nt=WD:Nt=QD,Nt.apply(null,arguments)}function eu(t,e){var n=Array.prototype.slice.call(arguments,1);return function(){var r=n.slice();return r.push.apply(r,arguments),t.apply(this,r)}}function pt(t,e){function n(){}n.prototype=e.prototype,t.$=e.prototype,t.prototype=new n,t.prototype.constructor=t,t.ac=function(r,i,s){for(var o=Array(arguments.length-2),a=2;a<arguments.length;a++)o[a-2]=arguments[a];return e.prototype[i].apply(r,o)}}function li(){this.s=this.s,this.o=this.o}var YD=0;li.prototype.s=!1;li.prototype.ra=function(){!this.s&&(this.s=!0,this.N(),YD!=0)&&KD(this)};li.prototype.N=function(){if(this.o)for(;this.o.length;)this.o.shift()()};const uI=Array.prototype.indexOf?function(t,e){return Array.prototype.indexOf.call(t,e,void 0)}:function(t,e){if(typeof t=="string")return typeof e!="string"||e.length!=1?-1:t.indexOf(e,0);for(let n=0;n<t.length;n++)if(n in t&&t[n]===e)return n;return-1};function om(t){const e=t.length;if(0<e){const n=Array(e);for(let r=0;r<e;r++)n[r]=t[r];return n}return[]}function kv(t,e){for(let n=1;n<arguments.length;n++){const r=arguments[n];if(ih(r)){const i=t.length||0,s=r.length||0;t.length=i+s;for(let o=0;o<s;o++)t[i+o]=r[o]}else t.push(r)}}function Pt(t,e){this.type=t,this.g=this.target=e,this.defaultPrevented=!1}Pt.prototype.h=function(){this.defaultPrevented=!0};var XD=function(){if(!ie.addEventListener||!Object.defineProperty)return!1;var t=!1,e=Object.defineProperty({},"passive",{get:function(){t=!0}});try{ie.addEventListener("test",rl,e),ie.removeEventListener("test",rl,e)}catch{}return t}();function il(t){return/^[\s\xa0]*$/.test(t)}var Av=String.prototype.trim?function(t){return t.trim()}:function(t){return/^[\s\xa0]*([\s\S]*?)[\s\xa0]*$/.exec(t)[1]};function wd(t,e){return t<e?-1:t>e?1:0}function sh(){var t=ie.navigator;return t&&(t=t.userAgent)?t:""}function Un(t){return sh().indexOf(t)!=-1}function am(t){return am[" "](t),t}am[" "]=rl;function lI(t,e,n){return Object.prototype.hasOwnProperty.call(t,e)?t[e]:t[e]=n(e)}var JD=Un("Opera"),so=Un("Trident")||Un("MSIE"),hI=Un("Edge"),mf=hI||so,dI=Un("Gecko")&&!(sh().toLowerCase().indexOf("webkit")!=-1&&!Un("Edge"))&&!(Un("Trident")||Un("MSIE"))&&!Un("Edge"),ZD=sh().toLowerCase().indexOf("webkit")!=-1&&!Un("Edge");function fI(){var t=ie.document;return t?t.documentMode:void 0}var sl;e:{var _d="",bd=function(){var t=sh();if(dI)return/rv:([^\);]+)(\)|;)/.exec(t);if(hI)return/Edge\/([\d\.]+)/.exec(t);if(so)return/\b(?:MSIE|rv)[: ]([^\);]+)(\)|;)/.exec(t);if(ZD)return/WebKit\/(\S+)/.exec(t);if(JD)return/(?:Version)[ \/]?(\S+)/.exec(t)}();if(bd&&(_d=bd?bd[1]:""),so){var Id=fI();if(Id!=null&&Id>parseFloat(_d)){sl=String(Id);break e}}sl=_d}var eO={};function tO(){return lI(eO,9,function(){let t=0;const e=Av(String(sl)).split("."),n=Av("9").split("."),r=Math.max(e.length,n.length);for(let o=0;t==0&&o<r;o++){var i=e[o]||"",s=n[o]||"";do{if(i=/(\d*)(\D*)(.*)/.exec(i)||["","","",""],s=/(\d*)(\D*)(.*)/.exec(s)||["","","",""],i[0].length==0&&s[0].length==0)break;t=wd(i[1].length==0?0:parseInt(i[1],10),s[1].length==0?0:parseInt(s[1],10))||wd(i[2].length==0,s[2].length==0)||wd(i[2],s[2]),i=i[3],s=s[3]}while(t==0)}return 0<=t})}var gf;if(ie.document&&so){var Cv=fI();gf=Cv||parseInt(sl,10)||void 0}else gf=void 0;var nO=gf;function za(t,e){if(Pt.call(this,t?t.type:""),this.relatedTarget=this.g=this.target=null,this.button=this.screenY=this.screenX=this.clientY=this.clientX=0,this.key="",this.metaKey=this.shiftKey=this.altKey=this.ctrlKey=!1,this.state=null,this.pointerId=0,this.pointerType="",this.i=null,t){var n=this.type=t.type,r=t.changedTouches&&t.changedTouches.length?t.changedTouches[0]:null;if(this.target=t.target||t.srcElement,this.g=e,e=t.relatedTarget){if(dI){e:{try{am(e.nodeName);var i=!0;break e}catch{}i=!1}i||(e=null)}}else n=="mouseover"?e=t.fromElement:n=="mouseout"&&(e=t.toElement);this.relatedTarget=e,r?(this.clientX=r.clientX!==void 0?r.clientX:r.pageX,this.clientY=r.clientY!==void 0?r.clientY:r.pageY,this.screenX=r.screenX||0,this.screenY=r.screenY||0):(this.clientX=t.clientX!==void 0?t.clientX:t.pageX,this.clientY=t.clientY!==void 0?t.clientY:t.pageY,this.screenX=t.screenX||0,this.screenY=t.screenY||0),this.button=t.button,this.key=t.key||"",this.ctrlKey=t.ctrlKey,this.altKey=t.altKey,this.shiftKey=t.shiftKey,this.metaKey=t.metaKey,this.pointerId=t.pointerId||0,this.pointerType=typeof t.pointerType=="string"?t.pointerType:rO[t.pointerType]||"",this.state=t.state,this.i=t,t.defaultPrevented&&za.$.h.call(this)}}pt(za,Pt);var rO={2:"touch",3:"pen",4:"mouse"};za.prototype.h=function(){za.$.h.call(this);var t=this.i;t.preventDefault?t.preventDefault():t.returnValue=!1};var Ic="closure_listenable_"+(1e6*Math.random()|0),iO=0;function sO(t,e,n,r,i){this.listener=t,this.proxy=null,this.src=e,this.type=n,this.capture=!!r,this.la=i,this.key=++iO,this.fa=this.ia=!1}function oh(t){t.fa=!0,t.listener=null,t.proxy=null,t.src=null,t.la=null}function cm(t,e,n){for(const r in t)e.call(n,t[r],r,t)}function pI(t){const e={};for(const n in t)e[n]=t[n];return e}const xv="constructor hasOwnProperty isPrototypeOf propertyIsEnumerable toLocaleString toString valueOf".split(" ");function mI(t,e){let n,r;for(let i=1;i<arguments.length;i++){r=arguments[i];for(n in r)t[n]=r[n];for(let s=0;s<xv.length;s++)n=xv[s],Object.prototype.hasOwnProperty.call(r,n)&&(t[n]=r[n])}}function ah(t){this.src=t,this.g={},this.h=0}ah.prototype.add=function(t,e,n,r,i){var s=t.toString();t=this.g[s],t||(t=this.g[s]=[],this.h++);var o=vf(t,e,r,i);return-1<o?(e=t[o],n||(e.ia=!1)):(e=new sO(e,this.src,s,!!r,i),e.ia=n,t.push(e)),e};function yf(t,e){var n=e.type;if(n in t.g){var r=t.g[n],i=uI(r,e),s;(s=0<=i)&&Array.prototype.splice.call(r,i,1),s&&(oh(e),t.g[n].length==0&&(delete t.g[n],t.h--))}}function vf(t,e,n,r){for(var i=0;i<t.length;++i){var s=t[i];if(!s.fa&&s.listener==e&&s.capture==!!n&&s.la==r)return i}return-1}var um="closure_lm_"+(1e6*Math.random()|0),Ed={};function gI(t,e,n,r,i){if(r&&r.once)return vI(t,e,n,r,i);if(Array.isArray(e)){for(var s=0;s<e.length;s++)gI(t,e[s],n,r,i);return null}return n=dm(n),t&&t[Ic]?t.O(e,n,bc(r)?!!r.capture:!!r,i):yI(t,e,n,!1,r,i)}function yI(t,e,n,r,i,s){if(!e)throw Error("Invalid event type");var o=bc(i)?!!i.capture:!!i,a=hm(t);if(a||(t[um]=a=new ah(t)),n=a.add(e,n,r,o,s),n.proxy)return n;if(r=oO(),n.proxy=r,r.src=t,r.listener=n,t.addEventListener)XD||(i=o),i===void 0&&(i=!1),t.addEventListener(e.toString(),r,i);else if(t.attachEvent)t.attachEvent(_I(e.toString()),r);else if(t.addListener&&t.removeListener)t.addListener(r);else throw Error("addEventListener and attachEvent are unavailable.");return n}function oO(){function t(n){return e.call(t.src,t.listener,n)}const e=aO;return t}function vI(t,e,n,r,i){if(Array.isArray(e)){for(var s=0;s<e.length;s++)vI(t,e[s],n,r,i);return null}return n=dm(n),t&&t[Ic]?t.P(e,n,bc(r)?!!r.capture:!!r,i):yI(t,e,n,!0,r,i)}function wI(t,e,n,r,i){if(Array.isArray(e))for(var s=0;s<e.length;s++)wI(t,e[s],n,r,i);else r=bc(r)?!!r.capture:!!r,n=dm(n),t&&t[Ic]?(t=t.i,e=String(e).toString(),e in t.g&&(s=t.g[e],n=vf(s,n,r,i),-1<n&&(oh(s[n]),Array.prototype.splice.call(s,n,1),s.length==0&&(delete t.g[e],t.h--)))):t&&(t=hm(t))&&(e=t.g[e.toString()],t=-1,e&&(t=vf(e,n,r,i)),(n=-1<t?e[t]:null)&&lm(n))}function lm(t){if(typeof t!="number"&&t&&!t.fa){var e=t.src;if(e&&e[Ic])yf(e.i,t);else{var n=t.type,r=t.proxy;e.removeEventListener?e.removeEventListener(n,r,t.capture):e.detachEvent?e.detachEvent(_I(n),r):e.addListener&&e.removeListener&&e.removeListener(r),(n=hm(e))?(yf(n,t),n.h==0&&(n.src=null,e[um]=null)):oh(t)}}}function _I(t){return t in Ed?Ed[t]:Ed[t]="on"+t}function aO(t,e){if(t.fa)t=!0;else{e=new za(e,this);var n=t.listener,r=t.la||t.src;t.ia&&lm(t),t=n.call(r,e)}return t}function hm(t){return t=t[um],t instanceof ah?t:null}var Td="__closure_events_fn_"+(1e9*Math.random()>>>0);function dm(t){return typeof t=="function"?t:(t[Td]||(t[Td]=function(e){return t.handleEvent(e)}),t[Td])}function ft(){li.call(this),this.i=new ah(this),this.S=this,this.J=null}pt(ft,li);ft.prototype[Ic]=!0;ft.prototype.removeEventListener=function(t,e,n,r){wI(this,t,e,n,r)};function It(t,e){var n,r=t.J;if(r)for(n=[];r;r=r.J)n.push(r);if(t=t.S,r=e.type||e,typeof e=="string")e=new Pt(e,t);else if(e instanceof Pt)e.target=e.target||t;else{var i=e;e=new Pt(r,t),mI(e,i)}if(i=!0,n)for(var s=n.length-1;0<=s;s--){var o=e.g=n[s];i=tu(o,r,!0,e)&&i}if(o=e.g=t,i=tu(o,r,!0,e)&&i,i=tu(o,r,!1,e)&&i,n)for(s=0;s<n.length;s++)o=e.g=n[s],i=tu(o,r,!1,e)&&i}ft.prototype.N=function(){if(ft.$.N.call(this),this.i){var t=this.i,e;for(e in t.g){for(var n=t.g[e],r=0;r<n.length;r++)oh(n[r]);delete t.g[e],t.h--}}this.J=null};ft.prototype.O=function(t,e,n,r){return this.i.add(String(t),e,!1,n,r)};ft.prototype.P=function(t,e,n,r){return this.i.add(String(t),e,!0,n,r)};function tu(t,e,n,r){if(e=t.i.g[String(e)],!e)return!0;e=e.concat();for(var i=!0,s=0;s<e.length;++s){var o=e[s];if(o&&!o.fa&&o.capture==n){var a=o.listener,c=o.la||o.src;o.ia&&yf(t.i,o),i=a.call(c,r)!==!1&&i}}return i&&!r.defaultPrevented}var fm=ie.JSON.stringify;function cO(){var t=EI;let e=null;return t.g&&(e=t.g,t.g=t.g.next,t.g||(t.h=null),e.next=null),e}class uO{constructor(){this.h=this.g=null}add(e,n){const r=bI.get();r.set(e,n),this.h?this.h.next=r:this.g=r,this.h=r}}var bI=new class{constructor(t,e){this.i=t,this.j=e,this.h=0,this.g=null}get(){let t;return 0<this.h?(this.h--,t=this.g,this.g=t.next,t.next=null):t=this.i(),t}}(()=>new lO,t=>t.reset());class lO{constructor(){this.next=this.g=this.h=null}set(e,n){this.h=e,this.g=n,this.next=null}reset(){this.next=this.g=this.h=null}}function hO(t){ie.setTimeout(()=>{throw t},0)}function II(t,e){wf||dO(),_f||(wf(),_f=!0),EI.add(t,e)}var wf;function dO(){var t=ie.Promise.resolve(void 0);wf=function(){t.then(fO)}}var _f=!1,EI=new uO;function fO(){for(var t;t=cO();){try{t.h.call(t.g)}catch(n){hO(n)}var e=bI;e.j(t),100>e.h&&(e.h++,t.next=e.g,e.g=t)}_f=!1}function ch(t,e){ft.call(this),this.h=t||1,this.g=e||ie,this.j=Nt(this.qb,this),this.l=Date.now()}pt(ch,ft);$=ch.prototype;$.ga=!1;$.T=null;$.qb=function(){if(this.ga){var t=Date.now()-this.l;0<t&&t<.8*this.h?this.T=this.g.setTimeout(this.j,this.h-t):(this.T&&(this.g.clearTimeout(this.T),this.T=null),It(this,"tick"),this.ga&&(pm(this),this.start()))}};$.start=function(){this.ga=!0,this.T||(this.T=this.g.setTimeout(this.j,this.h),this.l=Date.now())};function pm(t){t.ga=!1,t.T&&(t.g.clearTimeout(t.T),t.T=null)}$.N=function(){ch.$.N.call(this),pm(this),delete this.g};function mm(t,e,n){if(typeof t=="function")n&&(t=Nt(t,n));else if(t&&typeof t.handleEvent=="function")t=Nt(t.handleEvent,t);else throw Error("Invalid listener argument");return 2147483647<Number(e)?-1:ie.setTimeout(t,e||0)}function TI(t){t.g=mm(()=>{t.g=null,t.i&&(t.i=!1,TI(t))},t.j);const e=t.h;t.h=null,t.m.apply(null,e)}class pO extends li{constructor(e,n){super(),this.m=e,this.j=n,this.h=null,this.i=!1,this.g=null}l(e){this.h=arguments,this.g?this.i=!0:TI(this)}N(){super.N(),this.g&&(ie.clearTimeout(this.g),this.g=null,this.i=!1,this.h=null)}}function Ha(t){li.call(this),this.h=t,this.g={}}pt(Ha,li);var Rv=[];function SI(t,e,n,r){Array.isArray(n)||(n&&(Rv[0]=n.toString()),n=Rv);for(var i=0;i<n.length;i++){var s=gI(e,n[i],r||t.handleEvent,!1,t.h||t);if(!s)break;t.g[s.key]=s}}function kI(t){cm(t.g,function(e,n){this.g.hasOwnProperty(n)&&lm(e)},t),t.g={}}Ha.prototype.N=function(){Ha.$.N.call(this),kI(this)};Ha.prototype.handleEvent=function(){throw Error("EventHandler.handleEvent not implemented")};function uh(){this.g=!0}uh.prototype.Ea=function(){this.g=!1};function mO(t,e,n,r,i,s){t.info(function(){if(t.g)if(s)for(var o="",a=s.split("&"),c=0;c<a.length;c++){var u=a[c].split("=");if(1<u.length){var l=u[0];u=u[1];var h=l.split("_");o=2<=h.length&&h[1]=="type"?o+(l+"="+u+"&"):o+(l+"=redacted&")}}else o=null;else o=s;return"XMLHTTP REQ ("+r+") [attempt "+i+"]: "+e+`
`+n+`
`+o})}function gO(t,e,n,r,i,s,o){t.info(function(){return"XMLHTTP RESP ("+r+") [ attempt "+i+"]: "+e+`
`+n+`
`+s+" "+o})}function Ls(t,e,n,r){t.info(function(){return"XMLHTTP TEXT ("+e+"): "+vO(t,n)+(r?" "+r:"")})}function yO(t,e){t.info(function(){return"TIMEOUT: "+e})}uh.prototype.info=function(){};function vO(t,e){if(!t.g)return e;if(!e)return null;try{var n=JSON.parse(e);if(n){for(t=0;t<n.length;t++)if(Array.isArray(n[t])){var r=n[t];if(!(2>r.length)){var i=r[1];if(Array.isArray(i)&&!(1>i.length)){var s=i[0];if(s!="noop"&&s!="stop"&&s!="close")for(var o=1;o<i.length;o++)i[o]=""}}}}return fm(n)}catch{return e}}var ps={},Nv=null;function lh(){return Nv=Nv||new ft}ps.Ta="serverreachability";function AI(t){Pt.call(this,ps.Ta,t)}pt(AI,Pt);function Ka(t){const e=lh();It(e,new AI(e))}ps.STAT_EVENT="statevent";function CI(t,e){Pt.call(this,ps.STAT_EVENT,t),this.stat=e}pt(CI,Pt);function Ut(t){const e=lh();It(e,new CI(e,t))}ps.Ua="timingevent";function xI(t,e){Pt.call(this,ps.Ua,t),this.size=e}pt(xI,Pt);function Ec(t,e){if(typeof t!="function")throw Error("Fn must not be null and must be a function");return ie.setTimeout(function(){t()},e)}var hh={NO_ERROR:0,rb:1,Eb:2,Db:3,yb:4,Cb:5,Fb:6,Qa:7,TIMEOUT:8,Ib:9},RI={wb:"complete",Sb:"success",Ra:"error",Qa:"abort",Kb:"ready",Lb:"readystatechange",TIMEOUT:"timeout",Gb:"incrementaldata",Jb:"progress",zb:"downloadprogress",$b:"uploadprogress"};function gm(){}gm.prototype.h=null;function Pv(t){return t.h||(t.h=t.i())}function NI(){}var Tc={OPEN:"a",vb:"b",Ra:"c",Hb:"d"};function ym(){Pt.call(this,"d")}pt(ym,Pt);function vm(){Pt.call(this,"c")}pt(vm,Pt);var bf;function dh(){}pt(dh,gm);dh.prototype.g=function(){return new XMLHttpRequest};dh.prototype.i=function(){return{}};bf=new dh;function Sc(t,e,n,r){this.l=t,this.j=e,this.m=n,this.W=r||1,this.U=new Ha(this),this.P=wO,t=mf?125:void 0,this.V=new ch(t),this.I=null,this.i=!1,this.s=this.A=this.v=this.L=this.G=this.Y=this.B=null,this.F=[],this.g=null,this.C=0,this.o=this.u=null,this.aa=-1,this.J=!1,this.O=0,this.M=null,this.ca=this.K=this.ba=this.S=!1,this.h=new PI}function PI(){this.i=null,this.g="",this.h=!1}var wO=45e3,If={},ol={};$=Sc.prototype;$.setTimeout=function(t){this.P=t};function Ef(t,e,n){t.L=1,t.v=ph(fr(e)),t.s=n,t.S=!0,DI(t,null)}function DI(t,e){t.G=Date.now(),kc(t),t.A=fr(t.v);var n=t.A,r=t.W;Array.isArray(r)||(r=[String(r)]),BI(n.i,"t",r),t.C=0,n=t.l.I,t.h=new PI,t.g=cE(t.l,n?e:null,!t.s),0<t.O&&(t.M=new pO(Nt(t.Pa,t,t.g),t.O)),SI(t.U,t.g,"readystatechange",t.nb),e=t.I?pI(t.I):{},t.s?(t.u||(t.u="POST"),e["Content-Type"]="application/x-www-form-urlencoded",t.g.ha(t.A,t.u,t.s,e)):(t.u="GET",t.g.ha(t.A,t.u,null,e)),Ka(),mO(t.j,t.u,t.A,t.m,t.W,t.s)}$.nb=function(t){t=t.target;const e=this.M;e&&ir(t)==3?e.l():this.Pa(t)};$.Pa=function(t){try{if(t==this.g)e:{const l=ir(this.g);var e=this.g.Ia();const h=this.g.da();if(!(3>l)&&(l!=3||mf||this.g&&(this.h.h||this.g.ja()||Mv(this.g)))){this.J||l!=4||e==7||(e==8||0>=h?Ka(3):Ka(2)),fh(this);var n=this.g.da();this.aa=n;t:if(OI(this)){var r=Mv(this.g);t="";var i=r.length,s=ir(this.g)==4;if(!this.h.i){if(typeof TextDecoder>"u"){Mi(this),va(this);var o="";break t}this.h.i=new ie.TextDecoder}for(e=0;e<i;e++)this.h.h=!0,t+=this.h.i.decode(r[e],{stream:s&&e==i-1});r.splice(0,i),this.h.g+=t,this.C=0,o=this.h.g}else o=this.g.ja();if(this.i=n==200,gO(this.j,this.u,this.A,this.m,this.W,l,n),this.i){if(this.ba&&!this.K){t:{if(this.g){var a,c=this.g;if((a=c.g?c.g.getResponseHeader("X-HTTP-Initial-Response"):null)&&!il(a)){var u=a;break t}}u=null}if(n=u)Ls(this.j,this.m,n,"Initial handshake response via X-HTTP-Initial-Response"),this.K=!0,Tf(this,n);else{this.i=!1,this.o=3,Ut(12),Mi(this),va(this);break e}}this.S?(LI(this,l,o),mf&&this.i&&l==3&&(SI(this.U,this.V,"tick",this.mb),this.V.start())):(Ls(this.j,this.m,o,null),Tf(this,o)),l==4&&Mi(this),this.i&&!this.J&&(l==4?iE(this.l,this):(this.i=!1,kc(this)))}else n==400&&0<o.indexOf("Unknown SID")?(this.o=3,Ut(12)):(this.o=0,Ut(13)),Mi(this),va(this)}}}catch{}finally{}};function OI(t){return t.g?t.u=="GET"&&t.L!=2&&t.l.Ha:!1}function LI(t,e,n){let r=!0,i;for(;!t.J&&t.C<n.length;)if(i=_O(t,n),i==ol){e==4&&(t.o=4,Ut(14),r=!1),Ls(t.j,t.m,null,"[Incomplete Response]");break}else if(i==If){t.o=4,Ut(15),Ls(t.j,t.m,n,"[Invalid Chunk]"),r=!1;break}else Ls(t.j,t.m,i,null),Tf(t,i);OI(t)&&i!=ol&&i!=If&&(t.h.g="",t.C=0),e!=4||n.length!=0||t.h.h||(t.o=1,Ut(16),r=!1),t.i=t.i&&r,r?0<n.length&&!t.ca&&(t.ca=!0,e=t.l,e.g==t&&e.ca&&!e.L&&(e.j.info("Great, no buffering proxy detected. Bytes received: "+n.length),Sm(e),e.L=!0,Ut(11))):(Ls(t.j,t.m,n,"[Invalid Chunked Response]"),Mi(t),va(t))}$.mb=function(){if(this.g){var t=ir(this.g),e=this.g.ja();this.C<e.length&&(fh(this),LI(this,t,e),this.i&&t!=4&&kc(this))}};function _O(t,e){var n=t.C,r=e.indexOf(`
`,n);return r==-1?ol:(n=Number(e.substring(n,r)),isNaN(n)?If:(r+=1,r+n>e.length?ol:(e=e.substr(r,n),t.C=r+n,e)))}$.cancel=function(){this.J=!0,Mi(this)};function kc(t){t.Y=Date.now()+t.P,MI(t,t.P)}function MI(t,e){if(t.B!=null)throw Error("WatchDog timer not null");t.B=Ec(Nt(t.lb,t),e)}function fh(t){t.B&&(ie.clearTimeout(t.B),t.B=null)}$.lb=function(){this.B=null;const t=Date.now();0<=t-this.Y?(yO(this.j,this.A),this.L!=2&&(Ka(),Ut(17)),Mi(this),this.o=2,va(this)):MI(this,this.Y-t)};function va(t){t.l.H==0||t.J||iE(t.l,t)}function Mi(t){fh(t);var e=t.M;e&&typeof e.ra=="function"&&e.ra(),t.M=null,pm(t.V),kI(t.U),t.g&&(e=t.g,t.g=null,e.abort(),e.ra())}function Tf(t,e){try{var n=t.l;if(n.H!=0&&(n.g==t||Sf(n.h,t))){if(!t.K&&Sf(n.h,t)&&n.H==3){try{var r=n.Ja.g.parse(e)}catch{r=null}if(Array.isArray(r)&&r.length==3){var i=r;if(i[0]==0){e:if(!n.u){if(n.g)if(n.g.G+3e3<t.G)ul(n),yh(n);else break e;Tm(n),Ut(18)}}else n.Fa=i[1],0<n.Fa-n.V&&37500>i[2]&&n.M&&n.A==0&&!n.v&&(n.v=Ec(Nt(n.ib,n),6e3));if(1>=zI(n.h)&&n.na){try{n.na()}catch{}n.na=void 0}}else Fi(n,11)}else if((t.K||n.g==t)&&ul(n),!il(e))for(i=n.Ja.g.parse(e),e=0;e<i.length;e++){let u=i[e];if(n.V=u[0],u=u[1],n.H==2)if(u[0]=="c"){n.J=u[1],n.oa=u[2];const l=u[3];l!=null&&(n.qa=l,n.j.info("VER="+n.qa));const h=u[4];h!=null&&(n.Ga=h,n.j.info("SVER="+n.Ga));const d=u[5];d!=null&&typeof d=="number"&&0<d&&(r=1.5*d,n.K=r,n.j.info("backChannelRequestTimeoutMs_="+r)),r=n;const f=t.g;if(f){const m=f.g?f.g.getResponseHeader("X-Client-Wire-Protocol"):null;if(m){var s=r.h;s.g||m.indexOf("spdy")==-1&&m.indexOf("quic")==-1&&m.indexOf("h2")==-1||(s.j=s.l,s.g=new Set,s.h&&(wm(s,s.h),s.h=null))}if(r.F){const y=f.g?f.g.getResponseHeader("X-HTTP-Session-Id"):null;y&&(r.Da=y,Ue(r.G,r.F,y))}}n.H=3,n.l&&n.l.Ba(),n.ca&&(n.S=Date.now()-t.G,n.j.info("Handshake RTT: "+n.S+"ms")),r=n;var o=t;if(r.wa=aE(r,r.I?r.oa:null,r.Y),o.K){HI(r.h,o);var a=o,c=r.K;c&&a.setTimeout(c),a.B&&(fh(a),kc(a)),r.g=o}else nE(r);0<n.i.length&&vh(n)}else u[0]!="stop"&&u[0]!="close"||Fi(n,7);else n.H==3&&(u[0]=="stop"||u[0]=="close"?u[0]=="stop"?Fi(n,7):Em(n):u[0]!="noop"&&n.l&&n.l.Aa(u),n.A=0)}}Ka(4)}catch{}}function bO(t){if(t.Z&&typeof t.Z=="function")return t.Z();if(typeof Map<"u"&&t instanceof Map||typeof Set<"u"&&t instanceof Set)return Array.from(t.values());if(typeof t=="string")return t.split("");if(ih(t)){for(var e=[],n=t.length,r=0;r<n;r++)e.push(t[r]);return e}e=[],n=0;for(r in t)e[n++]=t[r];return e}function IO(t){if(t.sa&&typeof t.sa=="function")return t.sa();if(!t.Z||typeof t.Z!="function"){if(typeof Map<"u"&&t instanceof Map)return Array.from(t.keys());if(!(typeof Set<"u"&&t instanceof Set)){if(ih(t)||typeof t=="string"){var e=[];t=t.length;for(var n=0;n<t;n++)e.push(n);return e}e=[],n=0;for(const r in t)e[n++]=r;return e}}}function FI(t,e){if(t.forEach&&typeof t.forEach=="function")t.forEach(e,void 0);else if(ih(t)||typeof t=="string")Array.prototype.forEach.call(t,e,void 0);else for(var n=IO(t),r=bO(t),i=r.length,s=0;s<i;s++)e.call(void 0,r[s],n&&n[s],t)}var UI=RegExp("^(?:([^:/?#.]+):)?(?://(?:([^\\\\/?#]*)@)?([^\\\\/?#]*?)(?::([0-9]+))?(?=[\\\\/?#]|$))?([^?#]+)?(?:\\?([^#]*))?(?:#([\\s\\S]*))?$");function EO(t,e){if(t){t=t.split("&");for(var n=0;n<t.length;n++){var r=t[n].indexOf("="),i=null;if(0<=r){var s=t[n].substring(0,r);i=t[n].substring(r+1)}else s=t[n];e(s,i?decodeURIComponent(i.replace(/\+/g," ")):"")}}}function Gi(t,e){if(this.g=this.s=this.j="",this.m=null,this.o=this.l="",this.h=!1,t instanceof Gi){this.h=e!==void 0?e:t.h,al(this,t.j),this.s=t.s,this.g=t.g,cl(this,t.m),this.l=t.l,e=t.i;var n=new Ga;n.i=e.i,e.g&&(n.g=new Map(e.g),n.h=e.h),Dv(this,n),this.o=t.o}else t&&(n=String(t).match(UI))?(this.h=!!e,al(this,n[1]||"",!0),this.s=ia(n[2]||""),this.g=ia(n[3]||"",!0),cl(this,n[4]),this.l=ia(n[5]||"",!0),Dv(this,n[6]||"",!0),this.o=ia(n[7]||"")):(this.h=!!e,this.i=new Ga(null,this.h))}Gi.prototype.toString=function(){var t=[],e=this.j;e&&t.push(sa(e,Ov,!0),":");var n=this.g;return(n||e=="file")&&(t.push("//"),(e=this.s)&&t.push(sa(e,Ov,!0),"@"),t.push(encodeURIComponent(String(n)).replace(/%25([0-9a-fA-F]{2})/g,"%$1")),n=this.m,n!=null&&t.push(":",String(n))),(n=this.l)&&(this.g&&n.charAt(0)!="/"&&t.push("/"),t.push(sa(n,n.charAt(0)=="/"?kO:SO,!0))),(n=this.i.toString())&&t.push("?",n),(n=this.o)&&t.push("#",sa(n,CO)),t.join("")};function fr(t){return new Gi(t)}function al(t,e,n){t.j=n?ia(e,!0):e,t.j&&(t.j=t.j.replace(/:$/,""))}function cl(t,e){if(e){if(e=Number(e),isNaN(e)||0>e)throw Error("Bad port number "+e);t.m=e}else t.m=null}function Dv(t,e,n){e instanceof Ga?(t.i=e,xO(t.i,t.h)):(n||(e=sa(e,AO)),t.i=new Ga(e,t.h))}function Ue(t,e,n){t.i.set(e,n)}function ph(t){return Ue(t,"zx",Math.floor(2147483648*Math.random()).toString(36)+Math.abs(Math.floor(2147483648*Math.random())^Date.now()).toString(36)),t}function ia(t,e){return t?e?decodeURI(t.replace(/%25/g,"%2525")):decodeURIComponent(t):""}function sa(t,e,n){return typeof t=="string"?(t=encodeURI(t).replace(e,TO),n&&(t=t.replace(/%25([0-9a-fA-F]{2})/g,"%$1")),t):null}function TO(t){return t=t.charCodeAt(0),"%"+(t>>4&15).toString(16)+(t&15).toString(16)}var Ov=/[#\/\?@]/g,SO=/[#\?:]/g,kO=/[#\?]/g,AO=/[#\?@]/g,CO=/#/g;function Ga(t,e){this.h=this.g=null,this.i=t||null,this.j=!!e}function hi(t){t.g||(t.g=new Map,t.h=0,t.i&&EO(t.i,function(e,n){t.add(decodeURIComponent(e.replace(/\+/g," ")),n)}))}$=Ga.prototype;$.add=function(t,e){hi(this),this.i=null,t=Co(this,t);var n=this.g.get(t);return n||this.g.set(t,n=[]),n.push(e),this.h+=1,this};function VI(t,e){hi(t),e=Co(t,e),t.g.has(e)&&(t.i=null,t.h-=t.g.get(e).length,t.g.delete(e))}function $I(t,e){return hi(t),e=Co(t,e),t.g.has(e)}$.forEach=function(t,e){hi(this),this.g.forEach(function(n,r){n.forEach(function(i){t.call(e,i,r,this)},this)},this)};$.sa=function(){hi(this);const t=Array.from(this.g.values()),e=Array.from(this.g.keys()),n=[];for(let r=0;r<e.length;r++){const i=t[r];for(let s=0;s<i.length;s++)n.push(e[r])}return n};$.Z=function(t){hi(this);let e=[];if(typeof t=="string")$I(this,t)&&(e=e.concat(this.g.get(Co(this,t))));else{t=Array.from(this.g.values());for(let n=0;n<t.length;n++)e=e.concat(t[n])}return e};$.set=function(t,e){return hi(this),this.i=null,t=Co(this,t),$I(this,t)&&(this.h-=this.g.get(t).length),this.g.set(t,[e]),this.h+=1,this};$.get=function(t,e){return t?(t=this.Z(t),0<t.length?String(t[0]):e):e};function BI(t,e,n){VI(t,e),0<n.length&&(t.i=null,t.g.set(Co(t,e),om(n)),t.h+=n.length)}$.toString=function(){if(this.i)return this.i;if(!this.g)return"";const t=[],e=Array.from(this.g.keys());for(var n=0;n<e.length;n++){var r=e[n];const s=encodeURIComponent(String(r)),o=this.Z(r);for(r=0;r<o.length;r++){var i=s;o[r]!==""&&(i+="="+encodeURIComponent(String(o[r]))),t.push(i)}}return this.i=t.join("&")};function Co(t,e){return e=String(e),t.j&&(e=e.toLowerCase()),e}function xO(t,e){e&&!t.j&&(hi(t),t.i=null,t.g.forEach(function(n,r){var i=r.toLowerCase();r!=i&&(VI(this,r),BI(this,i,n))},t)),t.j=e}var RO=class{constructor(t,e){this.h=t,this.g=e}};function qI(t){this.l=t||NO,ie.PerformanceNavigationTiming?(t=ie.performance.getEntriesByType("navigation"),t=0<t.length&&(t[0].nextHopProtocol=="hq"||t[0].nextHopProtocol=="h2")):t=!!(ie.g&&ie.g.Ka&&ie.g.Ka()&&ie.g.Ka().ec),this.j=t?this.l:1,this.g=null,1<this.j&&(this.g=new Set),this.h=null,this.i=[]}var NO=10;function jI(t){return t.h?!0:t.g?t.g.size>=t.j:!1}function zI(t){return t.h?1:t.g?t.g.size:0}function Sf(t,e){return t.h?t.h==e:t.g?t.g.has(e):!1}function wm(t,e){t.g?t.g.add(e):t.h=e}function HI(t,e){t.h&&t.h==e?t.h=null:t.g&&t.g.has(e)&&t.g.delete(e)}qI.prototype.cancel=function(){if(this.i=KI(this),this.h)this.h.cancel(),this.h=null;else if(this.g&&this.g.size!==0){for(const t of this.g.values())t.cancel();this.g.clear()}};function KI(t){if(t.h!=null)return t.i.concat(t.h.F);if(t.g!=null&&t.g.size!==0){let e=t.i;for(const n of t.g.values())e=e.concat(n.F);return e}return om(t.i)}function _m(){}_m.prototype.stringify=function(t){return ie.JSON.stringify(t,void 0)};_m.prototype.parse=function(t){return ie.JSON.parse(t,void 0)};function PO(){this.g=new _m}function DO(t,e,n){const r=n||"";try{FI(t,function(i,s){let o=i;bc(i)&&(o=fm(i)),e.push(r+s+"="+encodeURIComponent(o))})}catch(i){throw e.push(r+"type="+encodeURIComponent("_badmap")),i}}function OO(t,e){const n=new uh;if(ie.Image){const r=new Image;r.onload=eu(nu,n,r,"TestLoadImage: loaded",!0,e),r.onerror=eu(nu,n,r,"TestLoadImage: error",!1,e),r.onabort=eu(nu,n,r,"TestLoadImage: abort",!1,e),r.ontimeout=eu(nu,n,r,"TestLoadImage: timeout",!1,e),ie.setTimeout(function(){r.ontimeout&&r.ontimeout()},1e4),r.src=t}else e(!1)}function nu(t,e,n,r,i){try{e.onload=null,e.onerror=null,e.onabort=null,e.ontimeout=null,i(r)}catch{}}function Ac(t){this.l=t.fc||null,this.j=t.ob||!1}pt(Ac,gm);Ac.prototype.g=function(){return new mh(this.l,this.j)};Ac.prototype.i=function(t){return function(){return t}}({});function mh(t,e){ft.call(this),this.F=t,this.u=e,this.m=void 0,this.readyState=bm,this.status=0,this.responseType=this.responseText=this.response=this.statusText="",this.onreadystatechange=null,this.v=new Headers,this.h=null,this.C="GET",this.B="",this.g=!1,this.A=this.j=this.l=null}pt(mh,ft);var bm=0;$=mh.prototype;$.open=function(t,e){if(this.readyState!=bm)throw this.abort(),Error("Error reopening a connection");this.C=t,this.B=e,this.readyState=1,Wa(this)};$.send=function(t){if(this.readyState!=1)throw this.abort(),Error("need to call open() first. ");this.g=!0;const e={headers:this.v,method:this.C,credentials:this.m,cache:void 0};t&&(e.body=t),(this.F||ie).fetch(new Request(this.B,e)).then(this.$a.bind(this),this.ka.bind(this))};$.abort=function(){this.response=this.responseText="",this.v=new Headers,this.status=0,this.j&&this.j.cancel("Request was aborted.").catch(()=>{}),1<=this.readyState&&this.g&&this.readyState!=4&&(this.g=!1,Cc(this)),this.readyState=bm};$.$a=function(t){if(this.g&&(this.l=t,this.h||(this.status=this.l.status,this.statusText=this.l.statusText,this.h=t.headers,this.readyState=2,Wa(this)),this.g&&(this.readyState=3,Wa(this),this.g)))if(this.responseType==="arraybuffer")t.arrayBuffer().then(this.Ya.bind(this),this.ka.bind(this));else if(typeof ie.ReadableStream<"u"&&"body"in t){if(this.j=t.body.getReader(),this.u){if(this.responseType)throw Error('responseType must be empty for "streamBinaryChunks" mode responses.');this.response=[]}else this.response=this.responseText="",this.A=new TextDecoder;GI(this)}else t.text().then(this.Za.bind(this),this.ka.bind(this))};function GI(t){t.j.read().then(t.Xa.bind(t)).catch(t.ka.bind(t))}$.Xa=function(t){if(this.g){if(this.u&&t.value)this.response.push(t.value);else if(!this.u){var e=t.value?t.value:new Uint8Array(0);(e=this.A.decode(e,{stream:!t.done}))&&(this.response=this.responseText+=e)}t.done?Cc(this):Wa(this),this.readyState==3&&GI(this)}};$.Za=function(t){this.g&&(this.response=this.responseText=t,Cc(this))};$.Ya=function(t){this.g&&(this.response=t,Cc(this))};$.ka=function(){this.g&&Cc(this)};function Cc(t){t.readyState=4,t.l=null,t.j=null,t.A=null,Wa(t)}$.setRequestHeader=function(t,e){this.v.append(t,e)};$.getResponseHeader=function(t){return this.h&&this.h.get(t.toLowerCase())||""};$.getAllResponseHeaders=function(){if(!this.h)return"";const t=[],e=this.h.entries();for(var n=e.next();!n.done;)n=n.value,t.push(n[0]+": "+n[1]),n=e.next();return t.join(`\r
`)};function Wa(t){t.onreadystatechange&&t.onreadystatechange.call(t)}Object.defineProperty(mh.prototype,"withCredentials",{get:function(){return this.m==="include"},set:function(t){this.m=t?"include":"same-origin"}});var LO=ie.JSON.parse;function We(t){ft.call(this),this.headers=new Map,this.u=t||null,this.h=!1,this.C=this.g=null,this.I="",this.m=0,this.j="",this.l=this.G=this.v=this.F=!1,this.B=0,this.A=null,this.K=WI,this.L=this.M=!1}pt(We,ft);var WI="",MO=/^https?$/i,FO=["POST","PUT"];$=We.prototype;$.Oa=function(t){this.M=t};$.ha=function(t,e,n,r){if(this.g)throw Error("[goog.net.XhrIo] Object is active with another request="+this.I+"; newUri="+t);e=e?e.toUpperCase():"GET",this.I=t,this.j="",this.m=0,this.F=!1,this.h=!0,this.g=this.u?this.u.g():bf.g(),this.C=this.u?Pv(this.u):Pv(bf),this.g.onreadystatechange=Nt(this.La,this);try{this.G=!0,this.g.open(e,String(t),!0),this.G=!1}catch(s){Lv(this,s);return}if(t=n||"",n=new Map(this.headers),r)if(Object.getPrototypeOf(r)===Object.prototype)for(var i in r)n.set(i,r[i]);else if(typeof r.keys=="function"&&typeof r.get=="function")for(const s of r.keys())n.set(s,r.get(s));else throw Error("Unknown input type for opt_headers: "+String(r));r=Array.from(n.keys()).find(s=>s.toLowerCase()=="content-type"),i=ie.FormData&&t instanceof ie.FormData,!(0<=uI(FO,e))||r||i||n.set("Content-Type","application/x-www-form-urlencoded;charset=utf-8");for(const[s,o]of n)this.g.setRequestHeader(s,o);this.K&&(this.g.responseType=this.K),"withCredentials"in this.g&&this.g.withCredentials!==this.M&&(this.g.withCredentials=this.M);try{XI(this),0<this.B&&((this.L=UO(this.g))?(this.g.timeout=this.B,this.g.ontimeout=Nt(this.ua,this)):this.A=mm(this.ua,this.B,this)),this.v=!0,this.g.send(t),this.v=!1}catch(s){Lv(this,s)}};function UO(t){return so&&tO()&&typeof t.timeout=="number"&&t.ontimeout!==void 0}$.ua=function(){typeof sm<"u"&&this.g&&(this.j="Timed out after "+this.B+"ms, aborting",this.m=8,It(this,"timeout"),this.abort(8))};function Lv(t,e){t.h=!1,t.g&&(t.l=!0,t.g.abort(),t.l=!1),t.j=e,t.m=5,QI(t),gh(t)}function QI(t){t.F||(t.F=!0,It(t,"complete"),It(t,"error"))}$.abort=function(t){this.g&&this.h&&(this.h=!1,this.l=!0,this.g.abort(),this.l=!1,this.m=t||7,It(this,"complete"),It(this,"abort"),gh(this))};$.N=function(){this.g&&(this.h&&(this.h=!1,this.l=!0,this.g.abort(),this.l=!1),gh(this,!0)),We.$.N.call(this)};$.La=function(){this.s||(this.G||this.v||this.l?YI(this):this.kb())};$.kb=function(){YI(this)};function YI(t){if(t.h&&typeof sm<"u"&&(!t.C[1]||ir(t)!=4||t.da()!=2)){if(t.v&&ir(t)==4)mm(t.La,0,t);else if(It(t,"readystatechange"),ir(t)==4){t.h=!1;try{const a=t.da();e:switch(a){case 200:case 201:case 202:case 204:case 206:case 304:case 1223:var e=!0;break e;default:e=!1}var n;if(!(n=e)){var r;if(r=a===0){var i=String(t.I).match(UI)[1]||null;if(!i&&ie.self&&ie.self.location){var s=ie.self.location.protocol;i=s.substr(0,s.length-1)}r=!MO.test(i?i.toLowerCase():"")}n=r}if(n)It(t,"complete"),It(t,"success");else{t.m=6;try{var o=2<ir(t)?t.g.statusText:""}catch{o=""}t.j=o+" ["+t.da()+"]",QI(t)}}finally{gh(t)}}}}function gh(t,e){if(t.g){XI(t);const n=t.g,r=t.C[0]?rl:null;t.g=null,t.C=null,e||It(t,"ready");try{n.onreadystatechange=r}catch{}}}function XI(t){t.g&&t.L&&(t.g.ontimeout=null),t.A&&(ie.clearTimeout(t.A),t.A=null)}function ir(t){return t.g?t.g.readyState:0}$.da=function(){try{return 2<ir(this)?this.g.status:-1}catch{return-1}};$.ja=function(){try{return this.g?this.g.responseText:""}catch{return""}};$.Wa=function(t){if(this.g){var e=this.g.responseText;return t&&e.indexOf(t)==0&&(e=e.substring(t.length)),LO(e)}};function Mv(t){try{if(!t.g)return null;if("response"in t.g)return t.g.response;switch(t.K){case WI:case"text":return t.g.responseText;case"arraybuffer":if("mozResponseArrayBuffer"in t.g)return t.g.mozResponseArrayBuffer}return null}catch{return null}}$.Ia=function(){return this.m};$.Sa=function(){return typeof this.j=="string"?this.j:String(this.j)};function JI(t){let e="";return cm(t,function(n,r){e+=r,e+=":",e+=n,e+=`\r
`}),e}function Im(t,e,n){e:{for(r in n){var r=!1;break e}r=!0}r||(n=JI(n),typeof t=="string"?n!=null&&encodeURIComponent(String(n)):Ue(t,e,n))}function Ko(t,e,n){return n&&n.internalChannelParams&&n.internalChannelParams[t]||e}function ZI(t){this.Ga=0,this.i=[],this.j=new uh,this.oa=this.wa=this.G=this.Y=this.g=this.Da=this.F=this.ma=this.o=this.U=this.s=null,this.fb=this.W=0,this.cb=Ko("failFast",!1,t),this.M=this.v=this.u=this.m=this.l=null,this.aa=!0,this.ta=this.Fa=this.V=-1,this.ba=this.A=this.C=0,this.ab=Ko("baseRetryDelayMs",5e3,t),this.hb=Ko("retryDelaySeedMs",1e4,t),this.eb=Ko("forwardChannelMaxRetries",2,t),this.xa=Ko("forwardChannelRequestTimeoutMs",2e4,t),this.va=t&&t.xmlHttpFactory||void 0,this.Ha=t&&t.dc||!1,this.K=void 0,this.I=t&&t.supportsCrossDomainXhr||!1,this.J="",this.h=new qI(t&&t.concurrentRequestLimit),this.Ja=new PO,this.P=t&&t.fastHandshake||!1,this.O=t&&t.encodeInitMessageHeaders||!1,this.P&&this.O&&(this.O=!1),this.bb=t&&t.bc||!1,t&&t.Ea&&this.j.Ea(),t&&t.forceLongPolling&&(this.aa=!1),this.ca=!this.P&&this.aa&&t&&t.detectBufferingProxy||!1,this.na=void 0,this.S=0,this.L=!1,this.pa=this.B=null}$=ZI.prototype;$.qa=8;$.H=1;function Em(t){if(eE(t),t.H==3){var e=t.W++,n=fr(t.G);Ue(n,"SID",t.J),Ue(n,"RID",e),Ue(n,"TYPE","terminate"),xc(t,n),e=new Sc(t,t.j,e,void 0),e.L=2,e.v=ph(fr(n)),n=!1,ie.navigator&&ie.navigator.sendBeacon&&(n=ie.navigator.sendBeacon(e.v.toString(),"")),!n&&ie.Image&&(new Image().src=e.v,n=!0),n||(e.g=cE(e.l,null),e.g.ha(e.v)),e.G=Date.now(),kc(e)}oE(t)}function yh(t){t.g&&(Sm(t),t.g.cancel(),t.g=null)}function eE(t){yh(t),t.u&&(ie.clearTimeout(t.u),t.u=null),ul(t),t.h.cancel(),t.m&&(typeof t.m=="number"&&ie.clearTimeout(t.m),t.m=null)}function vh(t){jI(t.h)||t.m||(t.m=!0,II(t.Na,t),t.C=0)}function VO(t,e){return zI(t.h)>=t.h.j-(t.m?1:0)?!1:t.m?(t.i=e.F.concat(t.i),!0):t.H==1||t.H==2||t.C>=(t.cb?0:t.eb)?!1:(t.m=Ec(Nt(t.Na,t,e),sE(t,t.C)),t.C++,!0)}$.Na=function(t){if(this.m)if(this.m=null,this.H==1){if(!t){this.W=Math.floor(1e5*Math.random()),t=this.W++;const i=new Sc(this,this.j,t,void 0);let s=this.s;if(this.U&&(s?(s=pI(s),mI(s,this.U)):s=this.U),this.o!==null||this.O||(i.I=s,s=null),this.P)e:{for(var e=0,n=0;n<this.i.length;n++){t:{var r=this.i[n];if("__data__"in r.g&&(r=r.g.__data__,typeof r=="string")){r=r.length;break t}r=void 0}if(r===void 0)break;if(e+=r,4096<e){e=n;break e}if(e===4096||n===this.i.length-1){e=n+1;break e}}e=1e3}else e=1e3;e=tE(this,i,e),n=fr(this.G),Ue(n,"RID",t),Ue(n,"CVER",22),this.F&&Ue(n,"X-HTTP-Session-Id",this.F),xc(this,n),s&&(this.O?e="headers="+encodeURIComponent(String(JI(s)))+"&"+e:this.o&&Im(n,this.o,s)),wm(this.h,i),this.bb&&Ue(n,"TYPE","init"),this.P?(Ue(n,"$req",e),Ue(n,"SID","null"),i.ba=!0,Ef(i,n,null)):Ef(i,n,e),this.H=2}}else this.H==3&&(t?Fv(this,t):this.i.length==0||jI(this.h)||Fv(this))};function Fv(t,e){var n;e?n=e.m:n=t.W++;const r=fr(t.G);Ue(r,"SID",t.J),Ue(r,"RID",n),Ue(r,"AID",t.V),xc(t,r),t.o&&t.s&&Im(r,t.o,t.s),n=new Sc(t,t.j,n,t.C+1),t.o===null&&(n.I=t.s),e&&(t.i=e.F.concat(t.i)),e=tE(t,n,1e3),n.setTimeout(Math.round(.5*t.xa)+Math.round(.5*t.xa*Math.random())),wm(t.h,n),Ef(n,r,e)}function xc(t,e){t.ma&&cm(t.ma,function(n,r){Ue(e,r,n)}),t.l&&FI({},function(n,r){Ue(e,r,n)})}function tE(t,e,n){n=Math.min(t.i.length,n);var r=t.l?Nt(t.l.Va,t.l,t):null;e:{var i=t.i;let s=-1;for(;;){const o=["count="+n];s==-1?0<n?(s=i[0].h,o.push("ofs="+s)):s=0:o.push("ofs="+s);let a=!0;for(let c=0;c<n;c++){let u=i[c].h;const l=i[c].g;if(u-=s,0>u)s=Math.max(0,i[c].h-100),a=!1;else try{DO(l,o,"req"+u+"_")}catch{r&&r(l)}}if(a){r=o.join("&");break e}}}return t=t.i.splice(0,n),e.F=t,r}function nE(t){t.g||t.u||(t.ba=1,II(t.Ma,t),t.A=0)}function Tm(t){return t.g||t.u||3<=t.A?!1:(t.ba++,t.u=Ec(Nt(t.Ma,t),sE(t,t.A)),t.A++,!0)}$.Ma=function(){if(this.u=null,rE(this),this.ca&&!(this.L||this.g==null||0>=this.S)){var t=2*this.S;this.j.info("BP detection timer enabled: "+t),this.B=Ec(Nt(this.jb,this),t)}};$.jb=function(){this.B&&(this.B=null,this.j.info("BP detection timeout reached."),this.j.info("Buffering proxy detected and switch to long-polling!"),this.M=!1,this.L=!0,Ut(10),yh(this),rE(this))};function Sm(t){t.B!=null&&(ie.clearTimeout(t.B),t.B=null)}function rE(t){t.g=new Sc(t,t.j,"rpc",t.ba),t.o===null&&(t.g.I=t.s),t.g.O=0;var e=fr(t.wa);Ue(e,"RID","rpc"),Ue(e,"SID",t.J),Ue(e,"CI",t.M?"0":"1"),Ue(e,"AID",t.V),Ue(e,"TYPE","xmlhttp"),xc(t,e),t.o&&t.s&&Im(e,t.o,t.s),t.K&&t.g.setTimeout(t.K);var n=t.g;t=t.oa,n.L=1,n.v=ph(fr(e)),n.s=null,n.S=!0,DI(n,t)}$.ib=function(){this.v!=null&&(this.v=null,yh(this),Tm(this),Ut(19))};function ul(t){t.v!=null&&(ie.clearTimeout(t.v),t.v=null)}function iE(t,e){var n=null;if(t.g==e){ul(t),Sm(t),t.g=null;var r=2}else if(Sf(t.h,e))n=e.F,HI(t.h,e),r=1;else return;if(t.H!=0){if(t.ta=e.aa,e.i)if(r==1){n=e.s?e.s.length:0,e=Date.now()-e.G;var i=t.C;r=lh(),It(r,new xI(r,n)),vh(t)}else nE(t);else if(i=e.o,i==3||i==0&&0<t.ta||!(r==1&&VO(t,e)||r==2&&Tm(t)))switch(n&&0<n.length&&(e=t.h,e.i=e.i.concat(n)),i){case 1:Fi(t,5);break;case 4:Fi(t,10);break;case 3:Fi(t,6);break;default:Fi(t,2)}}}function sE(t,e){let n=t.ab+Math.floor(Math.random()*t.hb);return t.l||(n*=2),n*e}function Fi(t,e){if(t.j.info("Error code "+e),e==2){var n=null;t.l&&(n=null);var r=Nt(t.pb,t);n||(n=new Gi("//www.google.com/images/cleardot.gif"),ie.location&&ie.location.protocol=="http"||al(n,"https"),ph(n)),OO(n.toString(),r)}else Ut(2);t.H=0,t.l&&t.l.za(e),oE(t),eE(t)}$.pb=function(t){t?(this.j.info("Successfully pinged google.com"),Ut(2)):(this.j.info("Failed to ping google.com"),Ut(1))};function oE(t){if(t.H=0,t.pa=[],t.l){const e=KI(t.h);(e.length!=0||t.i.length!=0)&&(kv(t.pa,e),kv(t.pa,t.i),t.h.i.length=0,om(t.i),t.i.length=0),t.l.ya()}}function aE(t,e,n){var r=n instanceof Gi?fr(n):new Gi(n,void 0);if(r.g!="")e&&(r.g=e+"."+r.g),cl(r,r.m);else{var i=ie.location;r=i.protocol,e=e?e+"."+i.hostname:i.hostname,i=+i.port;var s=new Gi(null,void 0);r&&al(s,r),e&&(s.g=e),i&&cl(s,i),n&&(s.l=n),r=s}return n=t.F,e=t.Da,n&&e&&Ue(r,n,e),Ue(r,"VER",t.qa),xc(t,r),r}function cE(t,e,n){if(e&&!t.I)throw Error("Can't create secondary domain capable XhrIo object.");return e=n&&t.Ha&&!t.va?new We(new Ac({ob:!0})):new We(t.va),e.Oa(t.I),e}function uE(){}$=uE.prototype;$.Ba=function(){};$.Aa=function(){};$.za=function(){};$.ya=function(){};$.Va=function(){};function ll(){if(so&&!(10<=Number(nO)))throw Error("Environmental error: no available transport.")}ll.prototype.g=function(t,e){return new tn(t,e)};function tn(t,e){ft.call(this),this.g=new ZI(e),this.l=t,this.h=e&&e.messageUrlParams||null,t=e&&e.messageHeaders||null,e&&e.clientProtocolHeaderRequired&&(t?t["X-Client-Protocol"]="webchannel":t={"X-Client-Protocol":"webchannel"}),this.g.s=t,t=e&&e.initMessageHeaders||null,e&&e.messageContentType&&(t?t["X-WebChannel-Content-Type"]=e.messageContentType:t={"X-WebChannel-Content-Type":e.messageContentType}),e&&e.Ca&&(t?t["X-WebChannel-Client-Profile"]=e.Ca:t={"X-WebChannel-Client-Profile":e.Ca}),this.g.U=t,(t=e&&e.cc)&&!il(t)&&(this.g.o=t),this.A=e&&e.supportsCrossDomainXhr||!1,this.v=e&&e.sendRawJson||!1,(e=e&&e.httpSessionIdParam)&&!il(e)&&(this.g.F=e,t=this.h,t!==null&&e in t&&(t=this.h,e in t&&delete t[e])),this.j=new xo(this)}pt(tn,ft);tn.prototype.m=function(){this.g.l=this.j,this.A&&(this.g.I=!0);var t=this.g,e=this.l,n=this.h||void 0;Ut(0),t.Y=e,t.ma=n||{},t.M=t.aa,t.G=aE(t,null,t.Y),vh(t)};tn.prototype.close=function(){Em(this.g)};tn.prototype.u=function(t){var e=this.g;if(typeof t=="string"){var n={};n.__data__=t,t=n}else this.v&&(n={},n.__data__=fm(t),t=n);e.i.push(new RO(e.fb++,t)),e.H==3&&vh(e)};tn.prototype.N=function(){this.g.l=null,delete this.j,Em(this.g),delete this.g,tn.$.N.call(this)};function lE(t){ym.call(this);var e=t.__sm__;if(e){e:{for(const n in e){t=n;break e}t=void 0}(this.i=t)&&(t=this.i,e=e!==null&&t in e?e[t]:void 0),this.data=e}else this.data=t}pt(lE,ym);function hE(){vm.call(this),this.status=1}pt(hE,vm);function xo(t){this.g=t}pt(xo,uE);xo.prototype.Ba=function(){It(this.g,"a")};xo.prototype.Aa=function(t){It(this.g,new lE(t))};xo.prototype.za=function(t){It(this.g,new hE)};xo.prototype.ya=function(){It(this.g,"b")};function $O(){this.blockSize=-1}function An(){this.blockSize=-1,this.blockSize=64,this.g=Array(4),this.m=Array(this.blockSize),this.i=this.h=0,this.reset()}pt(An,$O);An.prototype.reset=function(){this.g[0]=1732584193,this.g[1]=4023233417,this.g[2]=2562383102,this.g[3]=271733878,this.i=this.h=0};function Sd(t,e,n){n||(n=0);var r=Array(16);if(typeof e=="string")for(var i=0;16>i;++i)r[i]=e.charCodeAt(n++)|e.charCodeAt(n++)<<8|e.charCodeAt(n++)<<16|e.charCodeAt(n++)<<24;else for(i=0;16>i;++i)r[i]=e[n++]|e[n++]<<8|e[n++]<<16|e[n++]<<24;e=t.g[0],n=t.g[1],i=t.g[2];var s=t.g[3],o=e+(s^n&(i^s))+r[0]+3614090360&4294967295;e=n+(o<<7&4294967295|o>>>25),o=s+(i^e&(n^i))+r[1]+3905402710&4294967295,s=e+(o<<12&4294967295|o>>>20),o=i+(n^s&(e^n))+r[2]+606105819&4294967295,i=s+(o<<17&4294967295|o>>>15),o=n+(e^i&(s^e))+r[3]+3250441966&4294967295,n=i+(o<<22&4294967295|o>>>10),o=e+(s^n&(i^s))+r[4]+4118548399&4294967295,e=n+(o<<7&4294967295|o>>>25),o=s+(i^e&(n^i))+r[5]+1200080426&4294967295,s=e+(o<<12&4294967295|o>>>20),o=i+(n^s&(e^n))+r[6]+2821735955&4294967295,i=s+(o<<17&4294967295|o>>>15),o=n+(e^i&(s^e))+r[7]+4249261313&4294967295,n=i+(o<<22&4294967295|o>>>10),o=e+(s^n&(i^s))+r[8]+1770035416&4294967295,e=n+(o<<7&4294967295|o>>>25),o=s+(i^e&(n^i))+r[9]+2336552879&4294967295,s=e+(o<<12&4294967295|o>>>20),o=i+(n^s&(e^n))+r[10]+4294925233&4294967295,i=s+(o<<17&4294967295|o>>>15),o=n+(e^i&(s^e))+r[11]+2304563134&4294967295,n=i+(o<<22&4294967295|o>>>10),o=e+(s^n&(i^s))+r[12]+1804603682&4294967295,e=n+(o<<7&4294967295|o>>>25),o=s+(i^e&(n^i))+r[13]+4254626195&4294967295,s=e+(o<<12&4294967295|o>>>20),o=i+(n^s&(e^n))+r[14]+2792965006&4294967295,i=s+(o<<17&4294967295|o>>>15),o=n+(e^i&(s^e))+r[15]+1236535329&4294967295,n=i+(o<<22&4294967295|o>>>10),o=e+(i^s&(n^i))+r[1]+4129170786&4294967295,e=n+(o<<5&4294967295|o>>>27),o=s+(n^i&(e^n))+r[6]+3225465664&4294967295,s=e+(o<<9&4294967295|o>>>23),o=i+(e^n&(s^e))+r[11]+643717713&4294967295,i=s+(o<<14&4294967295|o>>>18),o=n+(s^e&(i^s))+r[0]+3921069994&4294967295,n=i+(o<<20&4294967295|o>>>12),o=e+(i^s&(n^i))+r[5]+3593408605&4294967295,e=n+(o<<5&4294967295|o>>>27),o=s+(n^i&(e^n))+r[10]+38016083&4294967295,s=e+(o<<9&4294967295|o>>>23),o=i+(e^n&(s^e))+r[15]+3634488961&4294967295,i=s+(o<<14&4294967295|o>>>18),o=n+(s^e&(i^s))+r[4]+3889429448&4294967295,n=i+(o<<20&4294967295|o>>>12),o=e+(i^s&(n^i))+r[9]+568446438&4294967295,e=n+(o<<5&4294967295|o>>>27),o=s+(n^i&(e^n))+r[14]+3275163606&4294967295,s=e+(o<<9&4294967295|o>>>23),o=i+(e^n&(s^e))+r[3]+4107603335&4294967295,i=s+(o<<14&4294967295|o>>>18),o=n+(s^e&(i^s))+r[8]+1163531501&4294967295,n=i+(o<<20&4294967295|o>>>12),o=e+(i^s&(n^i))+r[13]+2850285829&4294967295,e=n+(o<<5&4294967295|o>>>27),o=s+(n^i&(e^n))+r[2]+4243563512&4294967295,s=e+(o<<9&4294967295|o>>>23),o=i+(e^n&(s^e))+r[7]+1735328473&4294967295,i=s+(o<<14&4294967295|o>>>18),o=n+(s^e&(i^s))+r[12]+2368359562&4294967295,n=i+(o<<20&4294967295|o>>>12),o=e+(n^i^s)+r[5]+4294588738&4294967295,e=n+(o<<4&4294967295|o>>>28),o=s+(e^n^i)+r[8]+2272392833&4294967295,s=e+(o<<11&4294967295|o>>>21),o=i+(s^e^n)+r[11]+1839030562&4294967295,i=s+(o<<16&4294967295|o>>>16),o=n+(i^s^e)+r[14]+4259657740&4294967295,n=i+(o<<23&4294967295|o>>>9),o=e+(n^i^s)+r[1]+2763975236&4294967295,e=n+(o<<4&4294967295|o>>>28),o=s+(e^n^i)+r[4]+1272893353&4294967295,s=e+(o<<11&4294967295|o>>>21),o=i+(s^e^n)+r[7]+4139469664&4294967295,i=s+(o<<16&4294967295|o>>>16),o=n+(i^s^e)+r[10]+3200236656&4294967295,n=i+(o<<23&4294967295|o>>>9),o=e+(n^i^s)+r[13]+681279174&4294967295,e=n+(o<<4&4294967295|o>>>28),o=s+(e^n^i)+r[0]+3936430074&4294967295,s=e+(o<<11&4294967295|o>>>21),o=i+(s^e^n)+r[3]+3572445317&4294967295,i=s+(o<<16&4294967295|o>>>16),o=n+(i^s^e)+r[6]+76029189&4294967295,n=i+(o<<23&4294967295|o>>>9),o=e+(n^i^s)+r[9]+3654602809&4294967295,e=n+(o<<4&4294967295|o>>>28),o=s+(e^n^i)+r[12]+3873151461&4294967295,s=e+(o<<11&4294967295|o>>>21),o=i+(s^e^n)+r[15]+530742520&4294967295,i=s+(o<<16&4294967295|o>>>16),o=n+(i^s^e)+r[2]+3299628645&4294967295,n=i+(o<<23&4294967295|o>>>9),o=e+(i^(n|~s))+r[0]+4096336452&4294967295,e=n+(o<<6&4294967295|o>>>26),o=s+(n^(e|~i))+r[7]+1126891415&4294967295,s=e+(o<<10&4294967295|o>>>22),o=i+(e^(s|~n))+r[14]+2878612391&4294967295,i=s+(o<<15&4294967295|o>>>17),o=n+(s^(i|~e))+r[5]+4237533241&4294967295,n=i+(o<<21&4294967295|o>>>11),o=e+(i^(n|~s))+r[12]+1700485571&4294967295,e=n+(o<<6&4294967295|o>>>26),o=s+(n^(e|~i))+r[3]+2399980690&4294967295,s=e+(o<<10&4294967295|o>>>22),o=i+(e^(s|~n))+r[10]+4293915773&4294967295,i=s+(o<<15&4294967295|o>>>17),o=n+(s^(i|~e))+r[1]+2240044497&4294967295,n=i+(o<<21&4294967295|o>>>11),o=e+(i^(n|~s))+r[8]+1873313359&4294967295,e=n+(o<<6&4294967295|o>>>26),o=s+(n^(e|~i))+r[15]+4264355552&4294967295,s=e+(o<<10&4294967295|o>>>22),o=i+(e^(s|~n))+r[6]+2734768916&4294967295,i=s+(o<<15&4294967295|o>>>17),o=n+(s^(i|~e))+r[13]+1309151649&4294967295,n=i+(o<<21&4294967295|o>>>11),o=e+(i^(n|~s))+r[4]+4149444226&4294967295,e=n+(o<<6&4294967295|o>>>26),o=s+(n^(e|~i))+r[11]+3174756917&4294967295,s=e+(o<<10&4294967295|o>>>22),o=i+(e^(s|~n))+r[2]+718787259&4294967295,i=s+(o<<15&4294967295|o>>>17),o=n+(s^(i|~e))+r[9]+3951481745&4294967295,t.g[0]=t.g[0]+e&4294967295,t.g[1]=t.g[1]+(i+(o<<21&4294967295|o>>>11))&4294967295,t.g[2]=t.g[2]+i&4294967295,t.g[3]=t.g[3]+s&4294967295}An.prototype.j=function(t,e){e===void 0&&(e=t.length);for(var n=e-this.blockSize,r=this.m,i=this.h,s=0;s<e;){if(i==0)for(;s<=n;)Sd(this,t,s),s+=this.blockSize;if(typeof t=="string"){for(;s<e;)if(r[i++]=t.charCodeAt(s++),i==this.blockSize){Sd(this,r),i=0;break}}else for(;s<e;)if(r[i++]=t[s++],i==this.blockSize){Sd(this,r),i=0;break}}this.h=i,this.i+=e};An.prototype.l=function(){var t=Array((56>this.h?this.blockSize:2*this.blockSize)-this.h);t[0]=128;for(var e=1;e<t.length-8;++e)t[e]=0;var n=8*this.i;for(e=t.length-8;e<t.length;++e)t[e]=n&255,n/=256;for(this.j(t),t=Array(16),e=n=0;4>e;++e)for(var r=0;32>r;r+=8)t[n++]=this.g[e]>>>r&255;return t};function Ee(t,e){this.h=e;for(var n=[],r=!0,i=t.length-1;0<=i;i--){var s=t[i]|0;r&&s==e||(n[i]=s,r=!1)}this.g=n}var BO={};function km(t){return-128<=t&&128>t?lI(BO,t,function(e){return new Ee([e|0],0>e?-1:0)}):new Ee([t|0],0>t?-1:0)}function Bn(t){if(isNaN(t)||!isFinite(t))return Gs;if(0>t)return wt(Bn(-t));for(var e=[],n=1,r=0;t>=n;r++)e[r]=t/n|0,n*=kf;return new Ee(e,0)}function dE(t,e){if(t.length==0)throw Error("number format error: empty string");if(e=e||10,2>e||36<e)throw Error("radix out of range: "+e);if(t.charAt(0)=="-")return wt(dE(t.substring(1),e));if(0<=t.indexOf("-"))throw Error('number format error: interior "-" character');for(var n=Bn(Math.pow(e,8)),r=Gs,i=0;i<t.length;i+=8){var s=Math.min(8,t.length-i),o=parseInt(t.substring(i,i+s),e);8>s?(s=Bn(Math.pow(e,s)),r=r.R(s).add(Bn(o))):(r=r.R(n),r=r.add(Bn(o)))}return r}var kf=4294967296,Gs=km(0),Af=km(1),Uv=km(16777216);$=Ee.prototype;$.ea=function(){if(on(this))return-wt(this).ea();for(var t=0,e=1,n=0;n<this.g.length;n++){var r=this.D(n);t+=(0<=r?r:kf+r)*e,e*=kf}return t};$.toString=function(t){if(t=t||10,2>t||36<t)throw Error("radix out of range: "+t);if(sr(this))return"0";if(on(this))return"-"+wt(this).toString(t);for(var e=Bn(Math.pow(t,6)),n=this,r="";;){var i=dl(n,e).g;n=hl(n,i.R(e));var s=((0<n.g.length?n.g[0]:n.h)>>>0).toString(t);if(n=i,sr(n))return s+r;for(;6>s.length;)s="0"+s;r=s+r}};$.D=function(t){return 0>t?0:t<this.g.length?this.g[t]:this.h};function sr(t){if(t.h!=0)return!1;for(var e=0;e<t.g.length;e++)if(t.g[e]!=0)return!1;return!0}function on(t){return t.h==-1}$.X=function(t){return t=hl(this,t),on(t)?-1:sr(t)?0:1};function wt(t){for(var e=t.g.length,n=[],r=0;r<e;r++)n[r]=~t.g[r];return new Ee(n,~t.h).add(Af)}$.abs=function(){return on(this)?wt(this):this};$.add=function(t){for(var e=Math.max(this.g.length,t.g.length),n=[],r=0,i=0;i<=e;i++){var s=r+(this.D(i)&65535)+(t.D(i)&65535),o=(s>>>16)+(this.D(i)>>>16)+(t.D(i)>>>16);r=o>>>16,s&=65535,o&=65535,n[i]=o<<16|s}return new Ee(n,n[n.length-1]&-2147483648?-1:0)};function hl(t,e){return t.add(wt(e))}$.R=function(t){if(sr(this)||sr(t))return Gs;if(on(this))return on(t)?wt(this).R(wt(t)):wt(wt(this).R(t));if(on(t))return wt(this.R(wt(t)));if(0>this.X(Uv)&&0>t.X(Uv))return Bn(this.ea()*t.ea());for(var e=this.g.length+t.g.length,n=[],r=0;r<2*e;r++)n[r]=0;for(r=0;r<this.g.length;r++)for(var i=0;i<t.g.length;i++){var s=this.D(r)>>>16,o=this.D(r)&65535,a=t.D(i)>>>16,c=t.D(i)&65535;n[2*r+2*i]+=o*c,ru(n,2*r+2*i),n[2*r+2*i+1]+=s*c,ru(n,2*r+2*i+1),n[2*r+2*i+1]+=o*a,ru(n,2*r+2*i+1),n[2*r+2*i+2]+=s*a,ru(n,2*r+2*i+2)}for(r=0;r<e;r++)n[r]=n[2*r+1]<<16|n[2*r];for(r=e;r<2*e;r++)n[r]=0;return new Ee(n,0)};function ru(t,e){for(;(t[e]&65535)!=t[e];)t[e+1]+=t[e]>>>16,t[e]&=65535,e++}function Go(t,e){this.g=t,this.h=e}function dl(t,e){if(sr(e))throw Error("division by zero");if(sr(t))return new Go(Gs,Gs);if(on(t))return e=dl(wt(t),e),new Go(wt(e.g),wt(e.h));if(on(e))return e=dl(t,wt(e)),new Go(wt(e.g),e.h);if(30<t.g.length){if(on(t)||on(e))throw Error("slowDivide_ only works with positive integers.");for(var n=Af,r=e;0>=r.X(t);)n=Vv(n),r=Vv(r);var i=Ss(n,1),s=Ss(r,1);for(r=Ss(r,2),n=Ss(n,2);!sr(r);){var o=s.add(r);0>=o.X(t)&&(i=i.add(n),s=o),r=Ss(r,1),n=Ss(n,1)}return e=hl(t,i.R(e)),new Go(i,e)}for(i=Gs;0<=t.X(e);){for(n=Math.max(1,Math.floor(t.ea()/e.ea())),r=Math.ceil(Math.log(n)/Math.LN2),r=48>=r?1:Math.pow(2,r-48),s=Bn(n),o=s.R(e);on(o)||0<o.X(t);)n-=r,s=Bn(n),o=s.R(e);sr(s)&&(s=Af),i=i.add(s),t=hl(t,o)}return new Go(i,t)}$.gb=function(t){return dl(this,t).h};$.and=function(t){for(var e=Math.max(this.g.length,t.g.length),n=[],r=0;r<e;r++)n[r]=this.D(r)&t.D(r);return new Ee(n,this.h&t.h)};$.or=function(t){for(var e=Math.max(this.g.length,t.g.length),n=[],r=0;r<e;r++)n[r]=this.D(r)|t.D(r);return new Ee(n,this.h|t.h)};$.xor=function(t){for(var e=Math.max(this.g.length,t.g.length),n=[],r=0;r<e;r++)n[r]=this.D(r)^t.D(r);return new Ee(n,this.h^t.h)};function Vv(t){for(var e=t.g.length+1,n=[],r=0;r<e;r++)n[r]=t.D(r)<<1|t.D(r-1)>>>31;return new Ee(n,t.h)}function Ss(t,e){var n=e>>5;e%=32;for(var r=t.g.length-n,i=[],s=0;s<r;s++)i[s]=0<e?t.D(s+n)>>>e|t.D(s+n+1)<<32-e:t.D(s+n);return new Ee(i,t.h)}ll.prototype.createWebChannel=ll.prototype.g;tn.prototype.send=tn.prototype.u;tn.prototype.open=tn.prototype.m;tn.prototype.close=tn.prototype.close;hh.NO_ERROR=0;hh.TIMEOUT=8;hh.HTTP_ERROR=6;RI.COMPLETE="complete";NI.EventType=Tc;Tc.OPEN="a";Tc.CLOSE="b";Tc.ERROR="c";Tc.MESSAGE="d";ft.prototype.listen=ft.prototype.O;We.prototype.listenOnce=We.prototype.P;We.prototype.getLastError=We.prototype.Sa;We.prototype.getLastErrorCode=We.prototype.Ia;We.prototype.getStatus=We.prototype.da;We.prototype.getResponseJson=We.prototype.Wa;We.prototype.getResponseText=We.prototype.ja;We.prototype.send=We.prototype.ha;We.prototype.setWithCredentials=We.prototype.Oa;An.prototype.digest=An.prototype.l;An.prototype.reset=An.prototype.reset;An.prototype.update=An.prototype.j;Ee.prototype.add=Ee.prototype.add;Ee.prototype.multiply=Ee.prototype.R;Ee.prototype.modulo=Ee.prototype.gb;Ee.prototype.compare=Ee.prototype.X;Ee.prototype.toNumber=Ee.prototype.ea;Ee.prototype.toString=Ee.prototype.toString;Ee.prototype.getBits=Ee.prototype.D;Ee.fromNumber=Bn;Ee.fromString=dE;var qO=function(){return new ll},jO=function(){return lh()},kd=hh,zO=RI,HO=ps,$v={xb:0,Ab:1,Bb:2,Ub:3,Zb:4,Wb:5,Xb:6,Vb:7,Tb:8,Yb:9,PROXY:10,NOPROXY:11,Rb:12,Nb:13,Ob:14,Mb:15,Pb:16,Qb:17,tb:18,sb:19,ub:20},KO=Ac,iu=NI,GO=We,WO=An,Ws=Ee;const Bv="@firebase/firestore";/**
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
 */class ht{constructor(e){this.uid=e}isAuthenticated(){return this.uid!=null}toKey(){return this.isAuthenticated()?"uid:"+this.uid:"anonymous-user"}isEqual(e){return e.uid===this.uid}}ht.UNAUTHENTICATED=new ht(null),ht.GOOGLE_CREDENTIALS=new ht("google-credentials-uid"),ht.FIRST_PARTY=new ht("first-party-uid"),ht.MOCK_USER=new ht("mock-user");/**
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
 */let Ro="9.21.0";/**
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
 */const Xr=new Wl("@firebase/firestore");function Cf(){return Xr.logLevel}function QO(t){Xr.setLogLevel(t)}function x(t,...e){if(Xr.logLevel<=pe.DEBUG){const n=e.map(Am);Xr.debug(`Firestore (${Ro}): ${t}`,...n)}}function Xe(t,...e){if(Xr.logLevel<=pe.ERROR){const n=e.map(Am);Xr.error(`Firestore (${Ro}): ${t}`,...n)}}function Cn(t,...e){if(Xr.logLevel<=pe.WARN){const n=e.map(Am);Xr.warn(`Firestore (${Ro}): ${t}`,...n)}}function Am(t){if(typeof t=="string")return t;try{return e=t,JSON.stringify(e)}catch{return t}/**
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
 */function q(t="Unexpected state"){const e=`FIRESTORE (${Ro}) INTERNAL ASSERTION FAILED: `+t;throw Xe(e),new Error(e)}function J(t,e){t||q()}function YO(t,e){t||q()}function U(t,e){return t}/**
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
 */const b={OK:"ok",CANCELLED:"cancelled",UNKNOWN:"unknown",INVALID_ARGUMENT:"invalid-argument",DEADLINE_EXCEEDED:"deadline-exceeded",NOT_FOUND:"not-found",ALREADY_EXISTS:"already-exists",PERMISSION_DENIED:"permission-denied",UNAUTHENTICATED:"unauthenticated",RESOURCE_EXHAUSTED:"resource-exhausted",FAILED_PRECONDITION:"failed-precondition",ABORTED:"aborted",OUT_OF_RANGE:"out-of-range",UNIMPLEMENTED:"unimplemented",INTERNAL:"internal",UNAVAILABLE:"unavailable",DATA_LOSS:"data-loss"};class A extends Rt{constructor(e,n){super(e,n),this.code=e,this.message=n,this.toString=()=>`${this.name}: [code=${this.code}]: ${this.message}`}}/**
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
 */class dt{constructor(){this.promise=new Promise((e,n)=>{this.resolve=e,this.reject=n})}}/**
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
 */class fE{constructor(e,n){this.user=n,this.type="OAuth",this.headers=new Map,this.headers.set("Authorization",`Bearer ${e}`)}}class XO{getToken(){return Promise.resolve(null)}invalidateToken(){}start(e,n){e.enqueueRetryable(()=>n(ht.UNAUTHENTICATED))}shutdown(){}}class JO{constructor(e){this.token=e,this.changeListener=null}getToken(){return Promise.resolve(this.token)}invalidateToken(){}start(e,n){this.changeListener=n,e.enqueueRetryable(()=>n(this.token.user))}shutdown(){this.changeListener=null}}class ZO{constructor(e){this.t=e,this.currentUser=ht.UNAUTHENTICATED,this.i=0,this.forceRefresh=!1,this.auth=null}start(e,n){let r=this.i;const i=c=>this.i!==r?(r=this.i,n(c)):Promise.resolve();let s=new dt;this.o=()=>{this.i++,this.currentUser=this.u(),s.resolve(),s=new dt,e.enqueueRetryable(()=>i(this.currentUser))};const o=()=>{const c=s;e.enqueueRetryable(async()=>{await c.promise,await i(this.currentUser)})},a=c=>{x("FirebaseAuthCredentialsProvider","Auth detected"),this.auth=c,this.auth.addAuthTokenListener(this.o),o()};this.t.onInit(c=>a(c)),setTimeout(()=>{if(!this.auth){const c=this.t.getImmediate({optional:!0});c?a(c):(x("FirebaseAuthCredentialsProvider","Auth not yet detected"),s.resolve(),s=new dt)}},0),o()}getToken(){const e=this.i,n=this.forceRefresh;return this.forceRefresh=!1,this.auth?this.auth.getToken(n).then(r=>this.i!==e?(x("FirebaseAuthCredentialsProvider","getToken aborted due to token change."),this.getToken()):r?(J(typeof r.accessToken=="string"),new fE(r.accessToken,this.currentUser)):null):Promise.resolve(null)}invalidateToken(){this.forceRefresh=!0}shutdown(){this.auth&&this.auth.removeAuthTokenListener(this.o)}u(){const e=this.auth&&this.auth.getUid();return J(e===null||typeof e=="string"),new ht(e)}}class eL{constructor(e,n,r){this.h=e,this.l=n,this.m=r,this.type="FirstParty",this.user=ht.FIRST_PARTY,this.g=new Map}p(){return this.m?this.m():null}get headers(){this.g.set("X-Goog-AuthUser",this.h);const e=this.p();return e&&this.g.set("Authorization",e),this.l&&this.g.set("X-Goog-Iam-Authorization-Token",this.l),this.g}}class tL{constructor(e,n,r){this.h=e,this.l=n,this.m=r}getToken(){return Promise.resolve(new eL(this.h,this.l,this.m))}start(e,n){e.enqueueRetryable(()=>n(ht.FIRST_PARTY))}shutdown(){}invalidateToken(){}}class nL{constructor(e){this.value=e,this.type="AppCheck",this.headers=new Map,e&&e.length>0&&this.headers.set("x-firebase-appcheck",this.value)}}class rL{constructor(e){this.I=e,this.forceRefresh=!1,this.appCheck=null,this.T=null}start(e,n){const r=s=>{s.error!=null&&x("FirebaseAppCheckTokenProvider",`Error getting App Check token; using placeholder token instead. Error: ${s.error.message}`);const o=s.token!==this.T;return this.T=s.token,x("FirebaseAppCheckTokenProvider",`Received ${o?"new":"existing"} token.`),o?n(s.token):Promise.resolve()};this.o=s=>{e.enqueueRetryable(()=>r(s))};const i=s=>{x("FirebaseAppCheckTokenProvider","AppCheck detected"),this.appCheck=s,this.appCheck.addTokenListener(this.o)};this.I.onInit(s=>i(s)),setTimeout(()=>{if(!this.appCheck){const s=this.I.getImmediate({optional:!0});s?i(s):x("FirebaseAppCheckTokenProvider","AppCheck not yet detected")}},0)}getToken(){const e=this.forceRefresh;return this.forceRefresh=!1,this.appCheck?this.appCheck.getToken(e).then(n=>n?(J(typeof n.token=="string"),this.T=n.token,new nL(n.token)):null):Promise.resolve(null)}invalidateToken(){this.forceRefresh=!0}shutdown(){this.appCheck&&this.appCheck.removeTokenListener(this.o)}}/**
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
 */function iL(t){const e=typeof self<"u"&&(self.crypto||self.msCrypto),n=new Uint8Array(t);if(e&&typeof e.getRandomValues=="function")e.getRandomValues(n);else for(let r=0;r<t;r++)n[r]=Math.floor(256*Math.random());return n}/**
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
 */class pE{static A(){const e="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",n=Math.floor(256/e.length)*e.length;let r="";for(;r.length<20;){const i=iL(40);for(let s=0;s<i.length;++s)r.length<20&&i[s]<n&&(r+=e.charAt(i[s]%e.length))}return r}}function oe(t,e){return t<e?-1:t>e?1:0}function oo(t,e,n){return t.length===e.length&&t.every((r,i)=>n(r,e[i]))}function mE(t){return t+"\0"}/**
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
 */class $e{constructor(e,n){if(this.seconds=e,this.nanoseconds=n,n<0)throw new A(b.INVALID_ARGUMENT,"Timestamp nanoseconds out of range: "+n);if(n>=1e9)throw new A(b.INVALID_ARGUMENT,"Timestamp nanoseconds out of range: "+n);if(e<-62135596800)throw new A(b.INVALID_ARGUMENT,"Timestamp seconds out of range: "+e);if(e>=253402300800)throw new A(b.INVALID_ARGUMENT,"Timestamp seconds out of range: "+e)}static now(){return $e.fromMillis(Date.now())}static fromDate(e){return $e.fromMillis(e.getTime())}static fromMillis(e){const n=Math.floor(e/1e3),r=Math.floor(1e6*(e-1e3*n));return new $e(n,r)}toDate(){return new Date(this.toMillis())}toMillis(){return 1e3*this.seconds+this.nanoseconds/1e6}_compareTo(e){return this.seconds===e.seconds?oe(this.nanoseconds,e.nanoseconds):oe(this.seconds,e.seconds)}isEqual(e){return e.seconds===this.seconds&&e.nanoseconds===this.nanoseconds}toString(){return"Timestamp(seconds="+this.seconds+", nanoseconds="+this.nanoseconds+")"}toJSON(){return{seconds:this.seconds,nanoseconds:this.nanoseconds}}valueOf(){const e=this.seconds- -62135596800;return String(e).padStart(12,"0")+"."+String(this.nanoseconds).padStart(9,"0")}}/**
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
 */class X{constructor(e){this.timestamp=e}static fromTimestamp(e){return new X(e)}static min(){return new X(new $e(0,0))}static max(){return new X(new $e(253402300799,999999999))}compareTo(e){return this.timestamp._compareTo(e.timestamp)}isEqual(e){return this.timestamp.isEqual(e.timestamp)}toMicroseconds(){return 1e6*this.timestamp.seconds+this.timestamp.nanoseconds/1e3}toString(){return"SnapshotVersion("+this.timestamp.toString()+")"}toTimestamp(){return this.timestamp}}/**
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
 */class Qa{constructor(e,n,r){n===void 0?n=0:n>e.length&&q(),r===void 0?r=e.length-n:r>e.length-n&&q(),this.segments=e,this.offset=n,this.len=r}get length(){return this.len}isEqual(e){return Qa.comparator(this,e)===0}child(e){const n=this.segments.slice(this.offset,this.limit());return e instanceof Qa?e.forEach(r=>{n.push(r)}):n.push(e),this.construct(n)}limit(){return this.offset+this.length}popFirst(e){return e=e===void 0?1:e,this.construct(this.segments,this.offset+e,this.length-e)}popLast(){return this.construct(this.segments,this.offset,this.length-1)}firstSegment(){return this.segments[this.offset]}lastSegment(){return this.get(this.length-1)}get(e){return this.segments[this.offset+e]}isEmpty(){return this.length===0}isPrefixOf(e){if(e.length<this.length)return!1;for(let n=0;n<this.length;n++)if(this.get(n)!==e.get(n))return!1;return!0}isImmediateParentOf(e){if(this.length+1!==e.length)return!1;for(let n=0;n<this.length;n++)if(this.get(n)!==e.get(n))return!1;return!0}forEach(e){for(let n=this.offset,r=this.limit();n<r;n++)e(this.segments[n])}toArray(){return this.segments.slice(this.offset,this.limit())}static comparator(e,n){const r=Math.min(e.length,n.length);for(let i=0;i<r;i++){const s=e.get(i),o=n.get(i);if(s<o)return-1;if(s>o)return 1}return e.length<n.length?-1:e.length>n.length?1:0}}class me extends Qa{construct(e,n,r){return new me(e,n,r)}canonicalString(){return this.toArray().join("/")}toString(){return this.canonicalString()}static fromString(...e){const n=[];for(const r of e){if(r.indexOf("//")>=0)throw new A(b.INVALID_ARGUMENT,`Invalid segment (${r}). Paths must not contain // in them.`);n.push(...r.split("/").filter(i=>i.length>0))}return new me(n)}static emptyPath(){return new me([])}}const sL=/^[_a-zA-Z][_a-zA-Z0-9]*$/;class Je extends Qa{construct(e,n,r){return new Je(e,n,r)}static isValidIdentifier(e){return sL.test(e)}canonicalString(){return this.toArray().map(e=>(e=e.replace(/\\/g,"\\\\").replace(/`/g,"\\`"),Je.isValidIdentifier(e)||(e="`"+e+"`"),e)).join(".")}toString(){return this.canonicalString()}isKeyField(){return this.length===1&&this.get(0)==="__name__"}static keyField(){return new Je(["__name__"])}static fromServerFormat(e){const n=[];let r="",i=0;const s=()=>{if(r.length===0)throw new A(b.INVALID_ARGUMENT,`Invalid field path (${e}). Paths must not be empty, begin with '.', end with '.', or contain '..'`);n.push(r),r=""};let o=!1;for(;i<e.length;){const a=e[i];if(a==="\\"){if(i+1===e.length)throw new A(b.INVALID_ARGUMENT,"Path has trailing escape character: "+e);const c=e[i+1];if(c!=="\\"&&c!=="."&&c!=="`")throw new A(b.INVALID_ARGUMENT,"Path has invalid escape sequence: "+e);r+=c,i+=2}else a==="`"?(o=!o,i++):a!=="."||o?(r+=a,i++):(s(),i++)}if(s(),o)throw new A(b.INVALID_ARGUMENT,"Unterminated ` in path: "+e);return new Je(n)}static emptyPath(){return new Je([])}}/**
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
 */class gE{constructor(e,n,r,i){this.indexId=e,this.collectionGroup=n,this.fields=r,this.indexState=i}}function xf(t){return t.fields.find(e=>e.kind===2)}function Si(t){return t.fields.filter(e=>e.kind!==2)}gE.UNKNOWN_ID=-1;class oL{constructor(e,n){this.fieldPath=e,this.kind=n}}class fl{constructor(e,n){this.sequenceNumber=e,this.offset=n}static empty(){return new fl(0,nn.min())}}function yE(t,e){const n=t.toTimestamp().seconds,r=t.toTimestamp().nanoseconds+1,i=X.fromTimestamp(r===1e9?new $e(n+1,0):new $e(n,r));return new nn(i,L.empty(),e)}function vE(t){return new nn(t.readTime,t.key,-1)}class nn{constructor(e,n,r){this.readTime=e,this.documentKey=n,this.largestBatchId=r}static min(){return new nn(X.min(),L.empty(),-1)}static max(){return new nn(X.max(),L.empty(),-1)}}function Cm(t,e){let n=t.readTime.compareTo(e.readTime);return n!==0?n:(n=L.comparator(t.documentKey,e.documentKey),n!==0?n:oe(t.largestBatchId,e.largestBatchId))}/**
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
 */const wE="The current tab is not in the required state to perform this operation. It might be necessary to refresh the browser tab.";class _E{constructor(){this.onCommittedListeners=[]}addOnCommittedListener(e){this.onCommittedListeners.push(e)}raiseOnCommittedEvent(){this.onCommittedListeners.forEach(e=>e())}}/**
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
 */async function di(t){if(t.code!==b.FAILED_PRECONDITION||t.message!==wE)throw t;x("LocalStore","Unexpectedly lost primary lease")}/**
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
 */class w{constructor(e){this.nextCallback=null,this.catchCallback=null,this.result=void 0,this.error=void 0,this.isDone=!1,this.callbackAttached=!1,e(n=>{this.isDone=!0,this.result=n,this.nextCallback&&this.nextCallback(n)},n=>{this.isDone=!0,this.error=n,this.catchCallback&&this.catchCallback(n)})}catch(e){return this.next(void 0,e)}next(e,n){return this.callbackAttached&&q(),this.callbackAttached=!0,this.isDone?this.error?this.wrapFailure(n,this.error):this.wrapSuccess(e,this.result):new w((r,i)=>{this.nextCallback=s=>{this.wrapSuccess(e,s).next(r,i)},this.catchCallback=s=>{this.wrapFailure(n,s).next(r,i)}})}toPromise(){return new Promise((e,n)=>{this.next(e,n)})}wrapUserFunction(e){try{const n=e();return n instanceof w?n:w.resolve(n)}catch(n){return w.reject(n)}}wrapSuccess(e,n){return e?this.wrapUserFunction(()=>e(n)):w.resolve(n)}wrapFailure(e,n){return e?this.wrapUserFunction(()=>e(n)):w.reject(n)}static resolve(e){return new w((n,r)=>{n(e)})}static reject(e){return new w((n,r)=>{r(e)})}static waitFor(e){return new w((n,r)=>{let i=0,s=0,o=!1;e.forEach(a=>{++i,a.next(()=>{++s,o&&s===i&&n()},c=>r(c))}),o=!0,s===i&&n()})}static or(e){let n=w.resolve(!1);for(const r of e)n=n.next(i=>i?w.resolve(i):r());return n}static forEach(e,n){const r=[];return e.forEach((i,s)=>{r.push(n.call(this,i,s))}),this.waitFor(r)}static mapArray(e,n){return new w((r,i)=>{const s=e.length,o=new Array(s);let a=0;for(let c=0;c<s;c++){const u=c;n(e[u]).next(l=>{o[u]=l,++a,a===s&&r(o)},l=>i(l))}})}static doWhile(e,n){return new w((r,i)=>{const s=()=>{e()===!0?n().next(()=>{s()},i):r()};s()})}}/**
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
 */class wh{constructor(e,n){this.action=e,this.transaction=n,this.aborted=!1,this.R=new dt,this.transaction.oncomplete=()=>{this.R.resolve()},this.transaction.onabort=()=>{n.error?this.R.reject(new wa(e,n.error)):this.R.resolve()},this.transaction.onerror=r=>{const i=xm(r.target.error);this.R.reject(new wa(e,i))}}static open(e,n,r,i){try{return new wh(n,e.transaction(i,r))}catch(s){throw new wa(n,s)}}get v(){return this.R.promise}abort(e){e&&this.R.reject(e),this.aborted||(x("SimpleDb","Aborting transaction:",e?e.message:"Client-initiated abort"),this.aborted=!0,this.transaction.abort())}P(){const e=this.transaction;this.aborted||typeof e.commit!="function"||e.commit()}store(e){const n=this.transaction.objectStore(e);return new cL(n)}}class _n{constructor(e,n,r){this.name=e,this.version=n,this.V=r,_n.S(ze())===12.2&&Xe("Firestore persistence suffers from a bug in iOS 12.2 Safari that may cause your app to stop working. See https://stackoverflow.com/q/56496296/110915 for details and a potential workaround.")}static delete(e){return x("SimpleDb","Removing database:",e),xi(window.indexedDB.deleteDatabase(e)).toPromise()}static D(){if(!Ma())return!1;if(_n.C())return!0;const e=ze(),n=_n.S(e),r=0<n&&n<10,i=_n.N(e),s=0<i&&i<4.5;return!(e.indexOf("MSIE ")>0||e.indexOf("Trident/")>0||e.indexOf("Edge/")>0||r||s)}static C(){var e;return typeof process<"u"&&((e=process.env)===null||e===void 0?void 0:e.k)==="YES"}static M(e,n){return e.store(n)}static S(e){const n=e.match(/i(?:phone|pad|pod) os ([\d_]+)/i),r=n?n[1].split("_").slice(0,2).join("."):"-1";return Number(r)}static N(e){const n=e.match(/Android ([\d.]+)/i),r=n?n[1].split(".").slice(0,2).join("."):"-1";return Number(r)}async O(e){return this.db||(x("SimpleDb","Opening database:",this.name),this.db=await new Promise((n,r)=>{const i=indexedDB.open(this.name,this.version);i.onsuccess=s=>{const o=s.target.result;n(o)},i.onblocked=()=>{r(new wa(e,"Cannot upgrade IndexedDB schema while another tab is open. Close all tabs that access Firestore and reload this page to proceed."))},i.onerror=s=>{const o=s.target.error;o.name==="VersionError"?r(new A(b.FAILED_PRECONDITION,"A newer version of the Firestore SDK was previously used and so the persisted data is not compatible with the version of the SDK you are now using. The SDK will operate with persistence disabled. If you need persistence, please re-upgrade to a newer version of the SDK or else clear the persisted IndexedDB data for your app to start fresh.")):o.name==="InvalidStateError"?r(new A(b.FAILED_PRECONDITION,"Unable to open an IndexedDB connection. This could be due to running in a private browsing session on a browser whose private browsing sessions do not support IndexedDB: "+o)):r(new wa(e,o))},i.onupgradeneeded=s=>{x("SimpleDb",'Database "'+this.name+'" requires upgrade from version:',s.oldVersion);const o=s.target.result;this.V.$(o,i.transaction,s.oldVersion,this.version).next(()=>{x("SimpleDb","Database upgrade to version "+this.version+" complete")})}})),this.F&&(this.db.onversionchange=n=>this.F(n)),this.db}B(e){this.F=e,this.db&&(this.db.onversionchange=n=>e(n))}async runTransaction(e,n,r,i){const s=n==="readonly";let o=0;for(;;){++o;try{this.db=await this.O(e);const a=wh.open(this.db,e,s?"readonly":"readwrite",r),c=i(a).next(u=>(a.P(),u)).catch(u=>(a.abort(u),w.reject(u))).toPromise();return c.catch(()=>{}),await a.v,c}catch(a){const c=a,u=c.name!=="FirebaseError"&&o<3;if(x("SimpleDb","Transaction failed with error:",c.message,"Retrying:",u),this.close(),!u)return Promise.reject(c)}}}close(){this.db&&this.db.close(),this.db=void 0}}class aL{constructor(e){this.L=e,this.q=!1,this.U=null}get isDone(){return this.q}get K(){return this.U}set cursor(e){this.L=e}done(){this.q=!0}G(e){this.U=e}delete(){return xi(this.L.delete())}}class wa extends A{constructor(e,n){super(b.UNAVAILABLE,`IndexedDB transaction '${e}' failed: ${n}`),this.name="IndexedDbTransactionError"}}function fi(t){return t.name==="IndexedDbTransactionError"}class cL{constructor(e){this.store=e}put(e,n){let r;return n!==void 0?(x("SimpleDb","PUT",this.store.name,e,n),r=this.store.put(n,e)):(x("SimpleDb","PUT",this.store.name,"<auto-key>",e),r=this.store.put(e)),xi(r)}add(e){return x("SimpleDb","ADD",this.store.name,e,e),xi(this.store.add(e))}get(e){return xi(this.store.get(e)).next(n=>(n===void 0&&(n=null),x("SimpleDb","GET",this.store.name,e,n),n))}delete(e){return x("SimpleDb","DELETE",this.store.name,e),xi(this.store.delete(e))}count(){return x("SimpleDb","COUNT",this.store.name),xi(this.store.count())}j(e,n){const r=this.options(e,n);if(r.index||typeof this.store.getAll!="function"){const i=this.cursor(r),s=[];return this.W(i,(o,a)=>{s.push(a)}).next(()=>s)}{const i=this.store.getAll(r.range);return new w((s,o)=>{i.onerror=a=>{o(a.target.error)},i.onsuccess=a=>{s(a.target.result)}})}}H(e,n){const r=this.store.getAll(e,n===null?void 0:n);return new w((i,s)=>{r.onerror=o=>{s(o.target.error)},r.onsuccess=o=>{i(o.target.result)}})}J(e,n){x("SimpleDb","DELETE ALL",this.store.name);const r=this.options(e,n);r.Y=!1;const i=this.cursor(r);return this.W(i,(s,o,a)=>a.delete())}X(e,n){let r;n?r=e:(r={},n=e);const i=this.cursor(r);return this.W(i,n)}Z(e){const n=this.cursor({});return new w((r,i)=>{n.onerror=s=>{const o=xm(s.target.error);i(o)},n.onsuccess=s=>{const o=s.target.result;o?e(o.primaryKey,o.value).next(a=>{a?o.continue():r()}):r()}})}W(e,n){const r=[];return new w((i,s)=>{e.onerror=o=>{s(o.target.error)},e.onsuccess=o=>{const a=o.target.result;if(!a)return void i();const c=new aL(a),u=n(a.primaryKey,a.value,c);if(u instanceof w){const l=u.catch(h=>(c.done(),w.reject(h)));r.push(l)}c.isDone?i():c.K===null?a.continue():a.continue(c.K)}}).next(()=>w.waitFor(r))}options(e,n){let r;return e!==void 0&&(typeof e=="string"?r=e:n=e),{index:r,range:n}}cursor(e){let n="next";if(e.reverse&&(n="prev"),e.index){const r=this.store.index(e.index);return e.Y?r.openKeyCursor(e.range,n):r.openCursor(e.range,n)}return this.store.openCursor(e.range,n)}}function xi(t){return new w((e,n)=>{t.onsuccess=r=>{const i=r.target.result;e(i)},t.onerror=r=>{const i=xm(r.target.error);n(i)}})}let qv=!1;function xm(t){const e=_n.S(ze());if(e>=12.2&&e<13){const n="An internal error was encountered in the Indexed Database server";if(t.message.indexOf(n)>=0){const r=new A("internal",`IOS_INDEXEDDB_BUG1: IndexedDb has thrown '${n}'. This is likely due to an unavoidable bug in iOS. See https://stackoverflow.com/q/56496296/110915 for details and a potential workaround.`);return qv||(qv=!0,setTimeout(()=>{throw r},0)),r}}return t}class uL{constructor(e,n){this.asyncQueue=e,this.tt=n,this.task=null}start(){this.et(15e3)}stop(){this.task&&(this.task.cancel(),this.task=null)}get started(){return this.task!==null}et(e){x("IndexBackiller",`Scheduled in ${e}ms`),this.task=this.asyncQueue.enqueueAfterDelay("index_backfill",e,async()=>{this.task=null;try{x("IndexBackiller",`Documents written: ${await this.tt.nt()}`)}catch(n){fi(n)?x("IndexBackiller","Ignoring IndexedDB error during index backfill: ",n):await di(n)}await this.et(6e4)})}}class lL{constructor(e,n){this.localStore=e,this.persistence=n}async nt(e=50){return this.persistence.runTransaction("Backfill Indexes","readwrite-primary",n=>this.st(n,e))}st(e,n){const r=new Set;let i=n,s=!0;return w.doWhile(()=>s===!0&&i>0,()=>this.localStore.indexManager.getNextCollectionGroupToUpdate(e).next(o=>{if(o!==null&&!r.has(o))return x("IndexBackiller",`Processing collection: ${o}`),this.it(e,o,i).next(a=>{i-=a,r.add(o)});s=!1})).next(()=>n-i)}it(e,n,r){return this.localStore.indexManager.getMinOffsetFromCollectionGroup(e,n).next(i=>this.localStore.localDocuments.getNextDocuments(e,n,i,r).next(s=>{const o=s.changes;return this.localStore.indexManager.updateIndexEntries(e,o).next(()=>this.rt(i,s)).next(a=>(x("IndexBackiller",`Updating offset: ${a}`),this.localStore.indexManager.updateCollectionGroup(e,n,a))).next(()=>o.size)}))}rt(e,n){let r=e;return n.changes.forEach((i,s)=>{const o=vE(s);Cm(o,r)>0&&(r=o)}),new nn(r.readTime,r.documentKey,Math.max(n.batchId,e.largestBatchId))}}/**
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
 */class Kt{constructor(e,n){this.previousValue=e,n&&(n.sequenceNumberHandler=r=>this.ot(r),this.ut=r=>n.writeSequenceNumber(r))}ot(e){return this.previousValue=Math.max(e,this.previousValue),this.previousValue}next(){const e=++this.previousValue;return this.ut&&this.ut(e),e}}Kt.ct=-1;function Rc(t){return t==null}function Ya(t){return t===0&&1/t==-1/0}function bE(t){return typeof t=="number"&&Number.isInteger(t)&&!Ya(t)&&t<=Number.MAX_SAFE_INTEGER&&t>=Number.MIN_SAFE_INTEGER}/**
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
 */function Vt(t){let e="";for(let n=0;n<t.length;n++)e.length>0&&(e=jv(e)),e=hL(t.get(n),e);return jv(e)}function hL(t,e){let n=e;const r=t.length;for(let i=0;i<r;i++){const s=t.charAt(i);switch(s){case"\0":n+="";break;case"":n+="";break;default:n+=s}}return n}function jv(t){return t+""}function qn(t){const e=t.length;if(J(e>=2),e===2)return J(t.charAt(0)===""&&t.charAt(1)===""),me.emptyPath();const n=e-2,r=[];let i="";for(let s=0;s<e;){const o=t.indexOf("",s);switch((o<0||o>n)&&q(),t.charAt(o+1)){case"":const a=t.substring(s,o);let c;i.length===0?c=a:(i+=a,c=i,i=""),r.push(c);break;case"":i+=t.substring(s,o),i+="\0";break;case"":i+=t.substring(s,o+1);break;default:q()}s=o+2}return new me(r)}/**
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
 */const zv=["userId","batchId"];/**
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
 */function Lu(t,e){return[t,Vt(e)]}function IE(t,e,n){return[t,Vt(e),n]}const dL={},fL=["prefixPath","collectionGroup","readTime","documentId"],pL=["prefixPath","collectionGroup","documentId"],mL=["collectionGroup","readTime","prefixPath","documentId"],gL=["canonicalId","targetId"],yL=["targetId","path"],vL=["path","targetId"],wL=["collectionId","parent"],_L=["indexId","uid"],bL=["uid","sequenceNumber"],IL=["indexId","uid","arrayValue","directionalValue","orderedDocumentKey","documentKey"],EL=["indexId","uid","orderedDocumentKey"],TL=["userId","collectionPath","documentId"],SL=["userId","collectionPath","largestBatchId"],kL=["userId","collectionGroup","largestBatchId"],EE=["mutationQueues","mutations","documentMutations","remoteDocuments","targets","owner","targetGlobal","targetDocuments","clientMetadata","remoteDocumentGlobal","collectionParents","bundles","namedQueries"],AL=[...EE,"documentOverlays"],TE=["mutationQueues","mutations","documentMutations","remoteDocumentsV14","targets","owner","targetGlobal","targetDocuments","clientMetadata","remoteDocumentGlobal","collectionParents","bundles","namedQueries","documentOverlays"],SE=TE,CL=[...SE,"indexConfiguration","indexState","indexEntries"];/**
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
 */class Rf extends _E{constructor(e,n){super(),this.at=e,this.currentSequenceNumber=n}}function mt(t,e){const n=U(t);return _n.M(n.at,e)}/**
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
 */function Hv(t){let e=0;for(const n in t)Object.prototype.hasOwnProperty.call(t,n)&&e++;return e}function ms(t,e){for(const n in t)Object.prototype.hasOwnProperty.call(t,n)&&e(n,t[n])}function kE(t){for(const e in t)if(Object.prototype.hasOwnProperty.call(t,e))return!1;return!0}/**
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
 */class Ce{constructor(e,n){this.comparator=e,this.root=n||vt.EMPTY}insert(e,n){return new Ce(this.comparator,this.root.insert(e,n,this.comparator).copy(null,null,vt.BLACK,null,null))}remove(e){return new Ce(this.comparator,this.root.remove(e,this.comparator).copy(null,null,vt.BLACK,null,null))}get(e){let n=this.root;for(;!n.isEmpty();){const r=this.comparator(e,n.key);if(r===0)return n.value;r<0?n=n.left:r>0&&(n=n.right)}return null}indexOf(e){let n=0,r=this.root;for(;!r.isEmpty();){const i=this.comparator(e,r.key);if(i===0)return n+r.left.size;i<0?r=r.left:(n+=r.left.size+1,r=r.right)}return-1}isEmpty(){return this.root.isEmpty()}get size(){return this.root.size}minKey(){return this.root.minKey()}maxKey(){return this.root.maxKey()}inorderTraversal(e){return this.root.inorderTraversal(e)}forEach(e){this.inorderTraversal((n,r)=>(e(n,r),!1))}toString(){const e=[];return this.inorderTraversal((n,r)=>(e.push(`${n}:${r}`),!1)),`{${e.join(", ")}}`}reverseTraversal(e){return this.root.reverseTraversal(e)}getIterator(){return new su(this.root,null,this.comparator,!1)}getIteratorFrom(e){return new su(this.root,e,this.comparator,!1)}getReverseIterator(){return new su(this.root,null,this.comparator,!0)}getReverseIteratorFrom(e){return new su(this.root,e,this.comparator,!0)}}class su{constructor(e,n,r,i){this.isReverse=i,this.nodeStack=[];let s=1;for(;!e.isEmpty();)if(s=n?r(e.key,n):1,n&&i&&(s*=-1),s<0)e=this.isReverse?e.left:e.right;else{if(s===0){this.nodeStack.push(e);break}this.nodeStack.push(e),e=this.isReverse?e.right:e.left}}getNext(){let e=this.nodeStack.pop();const n={key:e.key,value:e.value};if(this.isReverse)for(e=e.left;!e.isEmpty();)this.nodeStack.push(e),e=e.right;else for(e=e.right;!e.isEmpty();)this.nodeStack.push(e),e=e.left;return n}hasNext(){return this.nodeStack.length>0}peek(){if(this.nodeStack.length===0)return null;const e=this.nodeStack[this.nodeStack.length-1];return{key:e.key,value:e.value}}}class vt{constructor(e,n,r,i,s){this.key=e,this.value=n,this.color=r!=null?r:vt.RED,this.left=i!=null?i:vt.EMPTY,this.right=s!=null?s:vt.EMPTY,this.size=this.left.size+1+this.right.size}copy(e,n,r,i,s){return new vt(e!=null?e:this.key,n!=null?n:this.value,r!=null?r:this.color,i!=null?i:this.left,s!=null?s:this.right)}isEmpty(){return!1}inorderTraversal(e){return this.left.inorderTraversal(e)||e(this.key,this.value)||this.right.inorderTraversal(e)}reverseTraversal(e){return this.right.reverseTraversal(e)||e(this.key,this.value)||this.left.reverseTraversal(e)}min(){return this.left.isEmpty()?this:this.left.min()}minKey(){return this.min().key}maxKey(){return this.right.isEmpty()?this.key:this.right.maxKey()}insert(e,n,r){let i=this;const s=r(e,i.key);return i=s<0?i.copy(null,null,null,i.left.insert(e,n,r),null):s===0?i.copy(null,n,null,null,null):i.copy(null,null,null,null,i.right.insert(e,n,r)),i.fixUp()}removeMin(){if(this.left.isEmpty())return vt.EMPTY;let e=this;return e.left.isRed()||e.left.left.isRed()||(e=e.moveRedLeft()),e=e.copy(null,null,null,e.left.removeMin(),null),e.fixUp()}remove(e,n){let r,i=this;if(n(e,i.key)<0)i.left.isEmpty()||i.left.isRed()||i.left.left.isRed()||(i=i.moveRedLeft()),i=i.copy(null,null,null,i.left.remove(e,n),null);else{if(i.left.isRed()&&(i=i.rotateRight()),i.right.isEmpty()||i.right.isRed()||i.right.left.isRed()||(i=i.moveRedRight()),n(e,i.key)===0){if(i.right.isEmpty())return vt.EMPTY;r=i.right.min(),i=i.copy(r.key,r.value,null,null,i.right.removeMin())}i=i.copy(null,null,null,null,i.right.remove(e,n))}return i.fixUp()}isRed(){return this.color}fixUp(){let e=this;return e.right.isRed()&&!e.left.isRed()&&(e=e.rotateLeft()),e.left.isRed()&&e.left.left.isRed()&&(e=e.rotateRight()),e.left.isRed()&&e.right.isRed()&&(e=e.colorFlip()),e}moveRedLeft(){let e=this.colorFlip();return e.right.left.isRed()&&(e=e.copy(null,null,null,null,e.right.rotateRight()),e=e.rotateLeft(),e=e.colorFlip()),e}moveRedRight(){let e=this.colorFlip();return e.left.left.isRed()&&(e=e.rotateRight(),e=e.colorFlip()),e}rotateLeft(){const e=this.copy(null,null,vt.RED,null,this.right.left);return this.right.copy(null,null,this.color,e,null)}rotateRight(){const e=this.copy(null,null,vt.RED,this.left.right,null);return this.left.copy(null,null,this.color,null,e)}colorFlip(){const e=this.left.copy(null,null,!this.left.color,null,null),n=this.right.copy(null,null,!this.right.color,null,null);return this.copy(null,null,!this.color,e,n)}checkMaxDepth(){const e=this.check();return Math.pow(2,e)<=this.size+1}check(){if(this.isRed()&&this.left.isRed()||this.right.isRed())throw q();const e=this.left.check();if(e!==this.right.check())throw q();return e+(this.isRed()?0:1)}}vt.EMPTY=null,vt.RED=!0,vt.BLACK=!1;vt.EMPTY=new class{constructor(){this.size=0}get key(){throw q()}get value(){throw q()}get color(){throw q()}get left(){throw q()}get right(){throw q()}copy(t,e,n,r,i){return this}insert(t,e,n){return new vt(t,e)}remove(t,e){return this}isEmpty(){return!0}inorderTraversal(t){return!1}reverseTraversal(t){return!1}minKey(){return null}maxKey(){return null}isRed(){return!1}checkMaxDepth(){return!0}check(){return 0}};/**
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
 */class Oe{constructor(e){this.comparator=e,this.data=new Ce(this.comparator)}has(e){return this.data.get(e)!==null}first(){return this.data.minKey()}last(){return this.data.maxKey()}get size(){return this.data.size}indexOf(e){return this.data.indexOf(e)}forEach(e){this.data.inorderTraversal((n,r)=>(e(n),!1))}forEachInRange(e,n){const r=this.data.getIteratorFrom(e[0]);for(;r.hasNext();){const i=r.getNext();if(this.comparator(i.key,e[1])>=0)return;n(i.key)}}forEachWhile(e,n){let r;for(r=n!==void 0?this.data.getIteratorFrom(n):this.data.getIterator();r.hasNext();)if(!e(r.getNext().key))return}firstAfterOrEqual(e){const n=this.data.getIteratorFrom(e);return n.hasNext()?n.getNext().key:null}getIterator(){return new Kv(this.data.getIterator())}getIteratorFrom(e){return new Kv(this.data.getIteratorFrom(e))}add(e){return this.copy(this.data.remove(e).insert(e,!0))}delete(e){return this.has(e)?this.copy(this.data.remove(e)):this}isEmpty(){return this.data.isEmpty()}unionWith(e){let n=this;return n.size<e.size&&(n=e,e=this),e.forEach(r=>{n=n.add(r)}),n}isEqual(e){if(!(e instanceof Oe)||this.size!==e.size)return!1;const n=this.data.getIterator(),r=e.data.getIterator();for(;n.hasNext();){const i=n.getNext().key,s=r.getNext().key;if(this.comparator(i,s)!==0)return!1}return!0}toArray(){const e=[];return this.forEach(n=>{e.push(n)}),e}toString(){const e=[];return this.forEach(n=>e.push(n)),"SortedSet("+e.toString()+")"}copy(e){const n=new Oe(this.comparator);return n.data=e,n}}class Kv{constructor(e){this.iter=e}getNext(){return this.iter.getNext().key}hasNext(){return this.iter.hasNext()}}function ks(t){return t.hasNext()?t.getNext():void 0}/**
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
 */class Gt{constructor(e){this.fields=e,e.sort(Je.comparator)}static empty(){return new Gt([])}unionWith(e){let n=new Oe(Je.comparator);for(const r of this.fields)n=n.add(r);for(const r of e)n=n.add(r);return new Gt(n.toArray())}covers(e){for(const n of this.fields)if(n.isPrefixOf(e))return!0;return!1}isEqual(e){return oo(this.fields,e.fields,(n,r)=>n.isEqual(r))}}/**
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
 */class AE extends Error{constructor(){super(...arguments),this.name="Base64DecodeError"}}/**
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
 */function xL(){return typeof atob<"u"}/**
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
 */class at{constructor(e){this.binaryString=e}static fromBase64String(e){const n=function(r){try{return atob(r)}catch(i){throw typeof DOMException<"u"&&i instanceof DOMException?new AE("Invalid base64 string: "+i):i}}(e);return new at(n)}static fromUint8Array(e){const n=function(r){let i="";for(let s=0;s<r.length;++s)i+=String.fromCharCode(r[s]);return i}(e);return new at(n)}[Symbol.iterator](){let e=0;return{next:()=>e<this.binaryString.length?{value:this.binaryString.charCodeAt(e++),done:!1}:{value:void 0,done:!0}}}toBase64(){return e=this.binaryString,btoa(e);var e}toUint8Array(){return function(e){const n=new Uint8Array(e.length);for(let r=0;r<e.length;r++)n[r]=e.charCodeAt(r);return n}(this.binaryString)}approximateByteSize(){return 2*this.binaryString.length}compareTo(e){return oe(this.binaryString,e.binaryString)}isEqual(e){return this.binaryString===e.binaryString}}at.EMPTY_BYTE_STRING=new at("");const RL=new RegExp(/^\d{4}-\d\d-\d\dT\d\d:\d\d:\d\d(?:\.(\d+))?Z$/);function Jr(t){if(J(!!t),typeof t=="string"){let e=0;const n=RL.exec(t);if(J(!!n),n[1]){let i=n[1];i=(i+"000000000").substr(0,9),e=Number(i)}const r=new Date(t);return{seconds:Math.floor(r.getTime()/1e3),nanos:e}}return{seconds:Ke(t.seconds),nanos:Ke(t.nanos)}}function Ke(t){return typeof t=="number"?t:typeof t=="string"?Number(t):0}function Zr(t){return typeof t=="string"?at.fromBase64String(t):at.fromUint8Array(t)}/**
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
 */function _h(t){var e,n;return((n=(((e=t==null?void 0:t.mapValue)===null||e===void 0?void 0:e.fields)||{}).__type__)===null||n===void 0?void 0:n.stringValue)==="server_timestamp"}function Rm(t){const e=t.mapValue.fields.__previous_value__;return _h(e)?Rm(e):e}function Xa(t){const e=Jr(t.mapValue.fields.__local_write_time__.timestampValue);return new $e(e.seconds,e.nanos)}/**
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
 */class NL{constructor(e,n,r,i,s,o,a,c){this.databaseId=e,this.appId=n,this.persistenceKey=r,this.host=i,this.ssl=s,this.forceLongPolling=o,this.autoDetectLongPolling=a,this.useFetchStreams=c}}class ei{constructor(e,n){this.projectId=e,this.database=n||"(default)"}static empty(){return new ei("","")}get isDefaultDatabase(){return this.database==="(default)"}isEqual(e){return e instanceof ei&&e.projectId===this.projectId&&e.database===this.database}}/**
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
 */const qr={mapValue:{fields:{__type__:{stringValue:"__max__"}}}},Mu={nullValue:"NULL_VALUE"};function Zi(t){return"nullValue"in t?0:"booleanValue"in t?1:"integerValue"in t||"doubleValue"in t?2:"timestampValue"in t?3:"stringValue"in t?5:"bytesValue"in t?6:"referenceValue"in t?7:"geoPointValue"in t?8:"arrayValue"in t?9:"mapValue"in t?_h(t)?4:CE(t)?9007199254740991:10:q()}function Xn(t,e){if(t===e)return!0;const n=Zi(t);if(n!==Zi(e))return!1;switch(n){case 0:case 9007199254740991:return!0;case 1:return t.booleanValue===e.booleanValue;case 4:return Xa(t).isEqual(Xa(e));case 3:return function(r,i){if(typeof r.timestampValue=="string"&&typeof i.timestampValue=="string"&&r.timestampValue.length===i.timestampValue.length)return r.timestampValue===i.timestampValue;const s=Jr(r.timestampValue),o=Jr(i.timestampValue);return s.seconds===o.seconds&&s.nanos===o.nanos}(t,e);case 5:return t.stringValue===e.stringValue;case 6:return function(r,i){return Zr(r.bytesValue).isEqual(Zr(i.bytesValue))}(t,e);case 7:return t.referenceValue===e.referenceValue;case 8:return function(r,i){return Ke(r.geoPointValue.latitude)===Ke(i.geoPointValue.latitude)&&Ke(r.geoPointValue.longitude)===Ke(i.geoPointValue.longitude)}(t,e);case 2:return function(r,i){if("integerValue"in r&&"integerValue"in i)return Ke(r.integerValue)===Ke(i.integerValue);if("doubleValue"in r&&"doubleValue"in i){const s=Ke(r.doubleValue),o=Ke(i.doubleValue);return s===o?Ya(s)===Ya(o):isNaN(s)&&isNaN(o)}return!1}(t,e);case 9:return oo(t.arrayValue.values||[],e.arrayValue.values||[],Xn);case 10:return function(r,i){const s=r.mapValue.fields||{},o=i.mapValue.fields||{};if(Hv(s)!==Hv(o))return!1;for(const a in s)if(s.hasOwnProperty(a)&&(o[a]===void 0||!Xn(s[a],o[a])))return!1;return!0}(t,e);default:return q()}}function Ja(t,e){return(t.values||[]).find(n=>Xn(n,e))!==void 0}function ti(t,e){if(t===e)return 0;const n=Zi(t),r=Zi(e);if(n!==r)return oe(n,r);switch(n){case 0:case 9007199254740991:return 0;case 1:return oe(t.booleanValue,e.booleanValue);case 2:return function(i,s){const o=Ke(i.integerValue||i.doubleValue),a=Ke(s.integerValue||s.doubleValue);return o<a?-1:o>a?1:o===a?0:isNaN(o)?isNaN(a)?0:-1:1}(t,e);case 3:return Gv(t.timestampValue,e.timestampValue);case 4:return Gv(Xa(t),Xa(e));case 5:return oe(t.stringValue,e.stringValue);case 6:return function(i,s){const o=Zr(i),a=Zr(s);return o.compareTo(a)}(t.bytesValue,e.bytesValue);case 7:return function(i,s){const o=i.split("/"),a=s.split("/");for(let c=0;c<o.length&&c<a.length;c++){const u=oe(o[c],a[c]);if(u!==0)return u}return oe(o.length,a.length)}(t.referenceValue,e.referenceValue);case 8:return function(i,s){const o=oe(Ke(i.latitude),Ke(s.latitude));return o!==0?o:oe(Ke(i.longitude),Ke(s.longitude))}(t.geoPointValue,e.geoPointValue);case 9:return function(i,s){const o=i.values||[],a=s.values||[];for(let c=0;c<o.length&&c<a.length;++c){const u=ti(o[c],a[c]);if(u)return u}return oe(o.length,a.length)}(t.arrayValue,e.arrayValue);case 10:return function(i,s){if(i===qr.mapValue&&s===qr.mapValue)return 0;if(i===qr.mapValue)return 1;if(s===qr.mapValue)return-1;const o=i.fields||{},a=Object.keys(o),c=s.fields||{},u=Object.keys(c);a.sort(),u.sort();for(let l=0;l<a.length&&l<u.length;++l){const h=oe(a[l],u[l]);if(h!==0)return h;const d=ti(o[a[l]],c[u[l]]);if(d!==0)return d}return oe(a.length,u.length)}(t.mapValue,e.mapValue);default:throw q()}}function Gv(t,e){if(typeof t=="string"&&typeof e=="string"&&t.length===e.length)return oe(t,e);const n=Jr(t),r=Jr(e),i=oe(n.seconds,r.seconds);return i!==0?i:oe(n.nanos,r.nanos)}function ao(t){return Nf(t)}function Nf(t){return"nullValue"in t?"null":"booleanValue"in t?""+t.booleanValue:"integerValue"in t?""+t.integerValue:"doubleValue"in t?""+t.doubleValue:"timestampValue"in t?function(r){const i=Jr(r);return`time(${i.seconds},${i.nanos})`}(t.timestampValue):"stringValue"in t?t.stringValue:"bytesValue"in t?Zr(t.bytesValue).toBase64():"referenceValue"in t?(n=t.referenceValue,L.fromName(n).toString()):"geoPointValue"in t?`geo(${(e=t.geoPointValue).latitude},${e.longitude})`:"arrayValue"in t?function(r){let i="[",s=!0;for(const o of r.values||[])s?s=!1:i+=",",i+=Nf(o);return i+"]"}(t.arrayValue):"mapValue"in t?function(r){const i=Object.keys(r.fields||{}).sort();let s="{",o=!0;for(const a of i)o?o=!1:s+=",",s+=`${a}:${Nf(r.fields[a])}`;return s+"}"}(t.mapValue):q();var e,n}function es(t,e){return{referenceValue:`projects/${t.projectId}/databases/${t.database}/documents/${e.path.canonicalString()}`}}function Pf(t){return!!t&&"integerValue"in t}function Za(t){return!!t&&"arrayValue"in t}function Wv(t){return!!t&&"nullValue"in t}function Qv(t){return!!t&&"doubleValue"in t&&isNaN(Number(t.doubleValue))}function Fu(t){return!!t&&"mapValue"in t}function _a(t){if(t.geoPointValue)return{geoPointValue:Object.assign({},t.geoPointValue)};if(t.timestampValue&&typeof t.timestampValue=="object")return{timestampValue:Object.assign({},t.timestampValue)};if(t.mapValue){const e={mapValue:{fields:{}}};return ms(t.mapValue.fields,(n,r)=>e.mapValue.fields[n]=_a(r)),e}if(t.arrayValue){const e={arrayValue:{values:[]}};for(let n=0;n<(t.arrayValue.values||[]).length;++n)e.arrayValue.values[n]=_a(t.arrayValue.values[n]);return e}return Object.assign({},t)}function CE(t){return(((t.mapValue||{}).fields||{}).__type__||{}).stringValue==="__max__"}function PL(t){return"nullValue"in t?Mu:"booleanValue"in t?{booleanValue:!1}:"integerValue"in t||"doubleValue"in t?{doubleValue:NaN}:"timestampValue"in t?{timestampValue:{seconds:Number.MIN_SAFE_INTEGER}}:"stringValue"in t?{stringValue:""}:"bytesValue"in t?{bytesValue:""}:"referenceValue"in t?es(ei.empty(),L.empty()):"geoPointValue"in t?{geoPointValue:{latitude:-90,longitude:-180}}:"arrayValue"in t?{arrayValue:{}}:"mapValue"in t?{mapValue:{}}:q()}function DL(t){return"nullValue"in t?{booleanValue:!1}:"booleanValue"in t?{doubleValue:NaN}:"integerValue"in t||"doubleValue"in t?{timestampValue:{seconds:Number.MIN_SAFE_INTEGER}}:"timestampValue"in t?{stringValue:""}:"stringValue"in t?{bytesValue:""}:"bytesValue"in t?es(ei.empty(),L.empty()):"referenceValue"in t?{geoPointValue:{latitude:-90,longitude:-180}}:"geoPointValue"in t?{arrayValue:{}}:"arrayValue"in t?{mapValue:{}}:"mapValue"in t?qr:q()}function Yv(t,e){const n=ti(t.value,e.value);return n!==0?n:t.inclusive&&!e.inclusive?-1:!t.inclusive&&e.inclusive?1:0}function Xv(t,e){const n=ti(t.value,e.value);return n!==0?n:t.inclusive&&!e.inclusive?1:!t.inclusive&&e.inclusive?-1:0}/**
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
 */class _t{constructor(e){this.value=e}static empty(){return new _t({mapValue:{}})}field(e){if(e.isEmpty())return this.value;{let n=this.value;for(let r=0;r<e.length-1;++r)if(n=(n.mapValue.fields||{})[e.get(r)],!Fu(n))return null;return n=(n.mapValue.fields||{})[e.lastSegment()],n||null}}set(e,n){this.getFieldsMap(e.popLast())[e.lastSegment()]=_a(n)}setAll(e){let n=Je.emptyPath(),r={},i=[];e.forEach((o,a)=>{if(!n.isImmediateParentOf(a)){const c=this.getFieldsMap(n);this.applyChanges(c,r,i),r={},i=[],n=a.popLast()}o?r[a.lastSegment()]=_a(o):i.push(a.lastSegment())});const s=this.getFieldsMap(n);this.applyChanges(s,r,i)}delete(e){const n=this.field(e.popLast());Fu(n)&&n.mapValue.fields&&delete n.mapValue.fields[e.lastSegment()]}isEqual(e){return Xn(this.value,e.value)}getFieldsMap(e){let n=this.value;n.mapValue.fields||(n.mapValue={fields:{}});for(let r=0;r<e.length;++r){let i=n.mapValue.fields[e.get(r)];Fu(i)&&i.mapValue.fields||(i={mapValue:{fields:{}}},n.mapValue.fields[e.get(r)]=i),n=i}return n.mapValue.fields}applyChanges(e,n,r){ms(n,(i,s)=>e[i]=s);for(const i of r)delete e[i]}clone(){return new _t(_a(this.value))}}function xE(t){const e=[];return ms(t.fields,(n,r)=>{const i=new Je([n]);if(Fu(r)){const s=xE(r.mapValue).fields;if(s.length===0)e.push(i);else for(const o of s)e.push(i.child(o))}else e.push(i)}),new Gt(e)}/**
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
 */class Pe{constructor(e,n,r,i,s,o,a){this.key=e,this.documentType=n,this.version=r,this.readTime=i,this.createTime=s,this.data=o,this.documentState=a}static newInvalidDocument(e){return new Pe(e,0,X.min(),X.min(),X.min(),_t.empty(),0)}static newFoundDocument(e,n,r,i){return new Pe(e,1,n,X.min(),r,i,0)}static newNoDocument(e,n){return new Pe(e,2,n,X.min(),X.min(),_t.empty(),0)}static newUnknownDocument(e,n){return new Pe(e,3,n,X.min(),X.min(),_t.empty(),2)}convertToFoundDocument(e,n){return!this.createTime.isEqual(X.min())||this.documentType!==2&&this.documentType!==0||(this.createTime=e),this.version=e,this.documentType=1,this.data=n,this.documentState=0,this}convertToNoDocument(e){return this.version=e,this.documentType=2,this.data=_t.empty(),this.documentState=0,this}convertToUnknownDocument(e){return this.version=e,this.documentType=3,this.data=_t.empty(),this.documentState=2,this}setHasCommittedMutations(){return this.documentState=2,this}setHasLocalMutations(){return this.documentState=1,this.version=X.min(),this}setReadTime(e){return this.readTime=e,this}get hasLocalMutations(){return this.documentState===1}get hasCommittedMutations(){return this.documentState===2}get hasPendingWrites(){return this.hasLocalMutations||this.hasCommittedMutations}isValidDocument(){return this.documentType!==0}isFoundDocument(){return this.documentType===1}isNoDocument(){return this.documentType===2}isUnknownDocument(){return this.documentType===3}isEqual(e){return e instanceof Pe&&this.key.isEqual(e.key)&&this.version.isEqual(e.version)&&this.documentType===e.documentType&&this.documentState===e.documentState&&this.data.isEqual(e.data)}mutableCopy(){return new Pe(this.key,this.documentType,this.version,this.readTime,this.createTime,this.data.clone(),this.documentState)}toString(){return`Document(${this.key}, ${this.version}, ${JSON.stringify(this.data.value)}, {createTime: ${this.createTime}}), {documentType: ${this.documentType}}), {documentState: ${this.documentState}})`}}/**
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
 */class ni{constructor(e,n){this.position=e,this.inclusive=n}}function Jv(t,e,n){let r=0;for(let i=0;i<t.position.length;i++){const s=e[i],o=t.position[i];if(s.field.isKeyField()?r=L.comparator(L.fromName(o.referenceValue),n.key):r=ti(o,n.data.field(s.field)),s.dir==="desc"&&(r*=-1),r!==0)break}return r}function Zv(t,e){if(t===null)return e===null;if(e===null||t.inclusive!==e.inclusive||t.position.length!==e.position.length)return!1;for(let n=0;n<t.position.length;n++)if(!Xn(t.position[n],e.position[n]))return!1;return!0}/**
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
 */class Qs{constructor(e,n="asc"){this.field=e,this.dir=n}}function OL(t,e){return t.dir===e.dir&&t.field.isEqual(e.field)}/**
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
 */class RE{}class de extends RE{constructor(e,n,r){super(),this.field=e,this.op=n,this.value=r}static create(e,n,r){return e.isKeyField()?n==="in"||n==="not-in"?this.createKeyFieldInFilter(e,n,r):new LL(e,n,r):n==="array-contains"?new UL(e,r):n==="in"?new ME(e,r):n==="not-in"?new VL(e,r):n==="array-contains-any"?new $L(e,r):new de(e,n,r)}static createKeyFieldInFilter(e,n,r){return n==="in"?new ML(e,r):new FL(e,r)}matches(e){const n=e.data.field(this.field);return this.op==="!="?n!==null&&this.matchesComparison(ti(n,this.value)):n!==null&&Zi(this.value)===Zi(n)&&this.matchesComparison(ti(n,this.value))}matchesComparison(e){switch(this.op){case"<":return e<0;case"<=":return e<=0;case"==":return e===0;case"!=":return e!==0;case">":return e>0;case">=":return e>=0;default:return q()}}isInequality(){return["<","<=",">",">=","!=","not-in"].indexOf(this.op)>=0}getFlattenedFilters(){return[this]}getFilters(){return[this]}getFirstInequalityField(){return this.isInequality()?this.field:null}}class Ie extends RE{constructor(e,n){super(),this.filters=e,this.op=n,this.ht=null}static create(e,n){return new Ie(e,n)}matches(e){return co(this)?this.filters.find(n=>!n.matches(e))===void 0:this.filters.find(n=>n.matches(e))!==void 0}getFlattenedFilters(){return this.ht!==null||(this.ht=this.filters.reduce((e,n)=>e.concat(n.getFlattenedFilters()),[])),this.ht}getFilters(){return Object.assign([],this.filters)}getFirstInequalityField(){const e=this.lt(n=>n.isInequality());return e!==null?e.field:null}lt(e){for(const n of this.getFlattenedFilters())if(e(n))return n;return null}}function co(t){return t.op==="and"}function Df(t){return t.op==="or"}function Nm(t){return NE(t)&&co(t)}function NE(t){for(const e of t.filters)if(e instanceof Ie)return!1;return!0}function Of(t){if(t instanceof de)return t.field.canonicalString()+t.op.toString()+ao(t.value);if(Nm(t))return t.filters.map(e=>Of(e)).join(",");{const e=t.filters.map(n=>Of(n)).join(",");return`${t.op}(${e})`}}function PE(t,e){return t instanceof de?function(n,r){return r instanceof de&&n.op===r.op&&n.field.isEqual(r.field)&&Xn(n.value,r.value)}(t,e):t instanceof Ie?function(n,r){return r instanceof Ie&&n.op===r.op&&n.filters.length===r.filters.length?n.filters.reduce((i,s,o)=>i&&PE(s,r.filters[o]),!0):!1}(t,e):void q()}function DE(t,e){const n=t.filters.concat(e);return Ie.create(n,t.op)}function OE(t){return t instanceof de?function(e){return`${e.field.canonicalString()} ${e.op} ${ao(e.value)}`}(t):t instanceof Ie?function(e){return e.op.toString()+" {"+e.getFilters().map(OE).join(" ,")+"}"}(t):"Filter"}class LL extends de{constructor(e,n,r){super(e,n,r),this.key=L.fromName(r.referenceValue)}matches(e){const n=L.comparator(e.key,this.key);return this.matchesComparison(n)}}class ML extends de{constructor(e,n){super(e,"in",n),this.keys=LE("in",n)}matches(e){return this.keys.some(n=>n.isEqual(e.key))}}class FL extends de{constructor(e,n){super(e,"not-in",n),this.keys=LE("not-in",n)}matches(e){return!this.keys.some(n=>n.isEqual(e.key))}}function LE(t,e){var n;return(((n=e.arrayValue)===null||n===void 0?void 0:n.values)||[]).map(r=>L.fromName(r.referenceValue))}class UL extends de{constructor(e,n){super(e,"array-contains",n)}matches(e){const n=e.data.field(this.field);return Za(n)&&Ja(n.arrayValue,this.value)}}class ME extends de{constructor(e,n){super(e,"in",n)}matches(e){const n=e.data.field(this.field);return n!==null&&Ja(this.value.arrayValue,n)}}class VL extends de{constructor(e,n){super(e,"not-in",n)}matches(e){if(Ja(this.value.arrayValue,{nullValue:"NULL_VALUE"}))return!1;const n=e.data.field(this.field);return n!==null&&!Ja(this.value.arrayValue,n)}}class $L extends de{constructor(e,n){super(e,"array-contains-any",n)}matches(e){const n=e.data.field(this.field);return!(!Za(n)||!n.arrayValue.values)&&n.arrayValue.values.some(r=>Ja(this.value.arrayValue,r))}}/**
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
 */class BL{constructor(e,n=null,r=[],i=[],s=null,o=null,a=null){this.path=e,this.collectionGroup=n,this.orderBy=r,this.filters=i,this.limit=s,this.startAt=o,this.endAt=a,this.ft=null}}function Lf(t,e=null,n=[],r=[],i=null,s=null,o=null){return new BL(t,e,n,r,i,s,o)}function ts(t){const e=U(t);if(e.ft===null){let n=e.path.canonicalString();e.collectionGroup!==null&&(n+="|cg:"+e.collectionGroup),n+="|f:",n+=e.filters.map(r=>Of(r)).join(","),n+="|ob:",n+=e.orderBy.map(r=>function(i){return i.field.canonicalString()+i.dir}(r)).join(","),Rc(e.limit)||(n+="|l:",n+=e.limit),e.startAt&&(n+="|lb:",n+=e.startAt.inclusive?"b:":"a:",n+=e.startAt.position.map(r=>ao(r)).join(",")),e.endAt&&(n+="|ub:",n+=e.endAt.inclusive?"a:":"b:",n+=e.endAt.position.map(r=>ao(r)).join(",")),e.ft=n}return e.ft}function Nc(t,e){if(t.limit!==e.limit||t.orderBy.length!==e.orderBy.length)return!1;for(let n=0;n<t.orderBy.length;n++)if(!OL(t.orderBy[n],e.orderBy[n]))return!1;if(t.filters.length!==e.filters.length)return!1;for(let n=0;n<t.filters.length;n++)if(!PE(t.filters[n],e.filters[n]))return!1;return t.collectionGroup===e.collectionGroup&&!!t.path.isEqual(e.path)&&!!Zv(t.startAt,e.startAt)&&Zv(t.endAt,e.endAt)}function pl(t){return L.isDocumentKey(t.path)&&t.collectionGroup===null&&t.filters.length===0}function ml(t,e){return t.filters.filter(n=>n instanceof de&&n.field.isEqual(e))}function ew(t,e,n){let r=Mu,i=!0;for(const s of ml(t,e)){let o=Mu,a=!0;switch(s.op){case"<":case"<=":o=PL(s.value);break;case"==":case"in":case">=":o=s.value;break;case">":o=s.value,a=!1;break;case"!=":case"not-in":o=Mu}Yv({value:r,inclusive:i},{value:o,inclusive:a})<0&&(r=o,i=a)}if(n!==null){for(let s=0;s<t.orderBy.length;++s)if(t.orderBy[s].field.isEqual(e)){const o=n.position[s];Yv({value:r,inclusive:i},{value:o,inclusive:n.inclusive})<0&&(r=o,i=n.inclusive);break}}return{value:r,inclusive:i}}function tw(t,e,n){let r=qr,i=!0;for(const s of ml(t,e)){let o=qr,a=!0;switch(s.op){case">=":case">":o=DL(s.value),a=!1;break;case"==":case"in":case"<=":o=s.value;break;case"<":o=s.value,a=!1;break;case"!=":case"not-in":o=qr}Xv({value:r,inclusive:i},{value:o,inclusive:a})>0&&(r=o,i=a)}if(n!==null){for(let s=0;s<t.orderBy.length;++s)if(t.orderBy[s].field.isEqual(e)){const o=n.position[s];Xv({value:r,inclusive:i},{value:o,inclusive:n.inclusive})>0&&(r=o,i=n.inclusive);break}}return{value:r,inclusive:i}}/**
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
 */class Ir{constructor(e,n=null,r=[],i=[],s=null,o="F",a=null,c=null){this.path=e,this.collectionGroup=n,this.explicitOrderBy=r,this.filters=i,this.limit=s,this.limitType=o,this.startAt=a,this.endAt=c,this.dt=null,this._t=null,this.startAt,this.endAt}}function FE(t,e,n,r,i,s,o,a){return new Ir(t,e,n,r,i,s,o,a)}function No(t){return new Ir(t)}function nw(t){return t.filters.length===0&&t.limit===null&&t.startAt==null&&t.endAt==null&&(t.explicitOrderBy.length===0||t.explicitOrderBy.length===1&&t.explicitOrderBy[0].field.isKeyField())}function Pm(t){return t.explicitOrderBy.length>0?t.explicitOrderBy[0].field:null}function bh(t){for(const e of t.filters){const n=e.getFirstInequalityField();if(n!==null)return n}return null}function Dm(t){return t.collectionGroup!==null}function Wi(t){const e=U(t);if(e.dt===null){e.dt=[];const n=bh(e),r=Pm(e);if(n!==null&&r===null)n.isKeyField()||e.dt.push(new Qs(n)),e.dt.push(new Qs(Je.keyField(),"asc"));else{let i=!1;for(const s of e.explicitOrderBy)e.dt.push(s),s.field.isKeyField()&&(i=!0);if(!i){const s=e.explicitOrderBy.length>0?e.explicitOrderBy[e.explicitOrderBy.length-1].dir:"asc";e.dt.push(new Qs(Je.keyField(),s))}}}return e.dt}function Yt(t){const e=U(t);if(!e._t)if(e.limitType==="F")e._t=Lf(e.path,e.collectionGroup,Wi(e),e.filters,e.limit,e.startAt,e.endAt);else{const n=[];for(const s of Wi(e)){const o=s.dir==="desc"?"asc":"desc";n.push(new Qs(s.field,o))}const r=e.endAt?new ni(e.endAt.position,e.endAt.inclusive):null,i=e.startAt?new ni(e.startAt.position,e.startAt.inclusive):null;e._t=Lf(e.path,e.collectionGroup,n,e.filters,e.limit,r,i)}return e._t}function Mf(t,e){e.getFirstInequalityField(),bh(t);const n=t.filters.concat([e]);return new Ir(t.path,t.collectionGroup,t.explicitOrderBy.slice(),n,t.limit,t.limitType,t.startAt,t.endAt)}function gl(t,e,n){return new Ir(t.path,t.collectionGroup,t.explicitOrderBy.slice(),t.filters.slice(),e,n,t.startAt,t.endAt)}function Pc(t,e){return Nc(Yt(t),Yt(e))&&t.limitType===e.limitType}function UE(t){return`${ts(Yt(t))}|lt:${t.limitType}`}function Ff(t){return`Query(target=${function(e){let n=e.path.canonicalString();return e.collectionGroup!==null&&(n+=" collectionGroup="+e.collectionGroup),e.filters.length>0&&(n+=`, filters: [${e.filters.map(r=>OE(r)).join(", ")}]`),Rc(e.limit)||(n+=", limit: "+e.limit),e.orderBy.length>0&&(n+=`, orderBy: [${e.orderBy.map(r=>function(i){return`${i.field.canonicalString()} (${i.dir})`}(r)).join(", ")}]`),e.startAt&&(n+=", startAt: ",n+=e.startAt.inclusive?"b:":"a:",n+=e.startAt.position.map(r=>ao(r)).join(",")),e.endAt&&(n+=", endAt: ",n+=e.endAt.inclusive?"a:":"b:",n+=e.endAt.position.map(r=>ao(r)).join(",")),`Target(${n})`}(Yt(t))}; limitType=${t.limitType})`}function Dc(t,e){return e.isFoundDocument()&&function(n,r){const i=r.key.path;return n.collectionGroup!==null?r.key.hasCollectionId(n.collectionGroup)&&n.path.isPrefixOf(i):L.isDocumentKey(n.path)?n.path.isEqual(i):n.path.isImmediateParentOf(i)}(t,e)&&function(n,r){for(const i of Wi(n))if(!i.field.isKeyField()&&r.data.field(i.field)===null)return!1;return!0}(t,e)&&function(n,r){for(const i of n.filters)if(!i.matches(r))return!1;return!0}(t,e)&&function(n,r){return!(n.startAt&&!function(i,s,o){const a=Jv(i,s,o);return i.inclusive?a<=0:a<0}(n.startAt,Wi(n),r)||n.endAt&&!function(i,s,o){const a=Jv(i,s,o);return i.inclusive?a>=0:a>0}(n.endAt,Wi(n),r))}(t,e)}function VE(t){return t.collectionGroup||(t.path.length%2==1?t.path.lastSegment():t.path.get(t.path.length-2))}function $E(t){return(e,n)=>{let r=!1;for(const i of Wi(t)){const s=qL(i,e,n);if(s!==0)return s;r=r||i.field.isKeyField()}return 0}}function qL(t,e,n){const r=t.field.isKeyField()?L.comparator(e.key,n.key):function(i,s,o){const a=s.data.field(i),c=o.data.field(i);return a!==null&&c!==null?ti(a,c):q()}(t.field,e,n);switch(t.dir){case"asc":return r;case"desc":return-1*r;default:return q()}}/**
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
 */class pi{constructor(e,n){this.mapKeyFn=e,this.equalsFn=n,this.inner={},this.innerSize=0}get(e){const n=this.mapKeyFn(e),r=this.inner[n];if(r!==void 0){for(const[i,s]of r)if(this.equalsFn(i,e))return s}}has(e){return this.get(e)!==void 0}set(e,n){const r=this.mapKeyFn(e),i=this.inner[r];if(i===void 0)return this.inner[r]=[[e,n]],void this.innerSize++;for(let s=0;s<i.length;s++)if(this.equalsFn(i[s][0],e))return void(i[s]=[e,n]);i.push([e,n]),this.innerSize++}delete(e){const n=this.mapKeyFn(e),r=this.inner[n];if(r===void 0)return!1;for(let i=0;i<r.length;i++)if(this.equalsFn(r[i][0],e))return r.length===1?delete this.inner[n]:r.splice(i,1),this.innerSize--,!0;return!1}forEach(e){ms(this.inner,(n,r)=>{for(const[i,s]of r)e(i,s)})}isEmpty(){return kE(this.inner)}size(){return this.innerSize}}/**
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
 */const jL=new Ce(L.comparator);function Wt(){return jL}const BE=new Ce(L.comparator);function oa(...t){let e=BE;for(const n of t)e=e.insert(n.key,n);return e}function qE(t){let e=BE;return t.forEach((n,r)=>e=e.insert(n,r.overlayedDocument)),e}function jn(){return ba()}function jE(){return ba()}function ba(){return new pi(t=>t.toString(),(t,e)=>t.isEqual(e))}const zL=new Ce(L.comparator),HL=new Oe(L.comparator);function ce(...t){let e=HL;for(const n of t)e=e.add(n);return e}const KL=new Oe(oe);function Om(){return KL}/**
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
 */function zE(t,e){if(t.useProto3Json){if(isNaN(e))return{doubleValue:"NaN"};if(e===1/0)return{doubleValue:"Infinity"};if(e===-1/0)return{doubleValue:"-Infinity"}}return{doubleValue:Ya(e)?"-0":e}}function HE(t){return{integerValue:""+t}}function KE(t,e){return bE(e)?HE(e):zE(t,e)}/**
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
 */class Ih{constructor(){this._=void 0}}function GL(t,e,n){return t instanceof uo?function(r,i){const s={fields:{__type__:{stringValue:"server_timestamp"},__local_write_time__:{timestampValue:{seconds:r.seconds,nanos:r.nanoseconds}}}};return i&&_h(i)&&(i=Rm(i)),i&&(s.fields.__previous_value__=i),{mapValue:s}}(n,e):t instanceof ns?WE(t,e):t instanceof rs?QE(t,e):function(r,i){const s=GE(r,i),o=rw(s)+rw(r.wt);return Pf(s)&&Pf(r.wt)?HE(o):zE(r.serializer,o)}(t,e)}function WL(t,e,n){return t instanceof ns?WE(t,e):t instanceof rs?QE(t,e):n}function GE(t,e){return t instanceof lo?Pf(n=e)||function(r){return!!r&&"doubleValue"in r}(n)?e:{integerValue:0}:null;var n}class uo extends Ih{}class ns extends Ih{constructor(e){super(),this.elements=e}}function WE(t,e){const n=YE(e);for(const r of t.elements)n.some(i=>Xn(i,r))||n.push(r);return{arrayValue:{values:n}}}class rs extends Ih{constructor(e){super(),this.elements=e}}function QE(t,e){let n=YE(e);for(const r of t.elements)n=n.filter(i=>!Xn(i,r));return{arrayValue:{values:n}}}class lo extends Ih{constructor(e,n){super(),this.serializer=e,this.wt=n}}function rw(t){return Ke(t.integerValue||t.doubleValue)}function YE(t){return Za(t)&&t.arrayValue.values?t.arrayValue.values.slice():[]}/**
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
 */class Oc{constructor(e,n){this.field=e,this.transform=n}}function QL(t,e){return t.field.isEqual(e.field)&&function(n,r){return n instanceof ns&&r instanceof ns||n instanceof rs&&r instanceof rs?oo(n.elements,r.elements,Xn):n instanceof lo&&r instanceof lo?Xn(n.wt,r.wt):n instanceof uo&&r instanceof uo}(t.transform,e.transform)}class YL{constructor(e,n){this.version=e,this.transformResults=n}}class Ve{constructor(e,n){this.updateTime=e,this.exists=n}static none(){return new Ve}static exists(e){return new Ve(void 0,e)}static updateTime(e){return new Ve(e)}get isNone(){return this.updateTime===void 0&&this.exists===void 0}isEqual(e){return this.exists===e.exists&&(this.updateTime?!!e.updateTime&&this.updateTime.isEqual(e.updateTime):!e.updateTime)}}function Uu(t,e){return t.updateTime!==void 0?e.isFoundDocument()&&e.version.isEqual(t.updateTime):t.exists===void 0||t.exists===e.isFoundDocument()}class Eh{}function XE(t,e){if(!t.hasLocalMutations||e&&e.fields.length===0)return null;if(e===null)return t.isNoDocument()?new Do(t.key,Ve.none()):new Po(t.key,t.data,Ve.none());{const n=t.data,r=_t.empty();let i=new Oe(Je.comparator);for(let s of e.fields)if(!i.has(s)){let o=n.field(s);o===null&&s.length>1&&(s=s.popLast(),o=n.field(s)),o===null?r.delete(s):r.set(s,o),i=i.add(s)}return new Er(t.key,r,new Gt(i.toArray()),Ve.none())}}function XL(t,e,n){t instanceof Po?function(r,i,s){const o=r.value.clone(),a=sw(r.fieldTransforms,i,s.transformResults);o.setAll(a),i.convertToFoundDocument(s.version,o).setHasCommittedMutations()}(t,e,n):t instanceof Er?function(r,i,s){if(!Uu(r.precondition,i))return void i.convertToUnknownDocument(s.version);const o=sw(r.fieldTransforms,i,s.transformResults),a=i.data;a.setAll(JE(r)),a.setAll(o),i.convertToFoundDocument(s.version,a).setHasCommittedMutations()}(t,e,n):function(r,i,s){i.convertToNoDocument(s.version).setHasCommittedMutations()}(0,e,n)}function Ia(t,e,n,r){return t instanceof Po?function(i,s,o,a){if(!Uu(i.precondition,s))return o;const c=i.value.clone(),u=ow(i.fieldTransforms,a,s);return c.setAll(u),s.convertToFoundDocument(s.version,c).setHasLocalMutations(),null}(t,e,n,r):t instanceof Er?function(i,s,o,a){if(!Uu(i.precondition,s))return o;const c=ow(i.fieldTransforms,a,s),u=s.data;return u.setAll(JE(i)),u.setAll(c),s.convertToFoundDocument(s.version,u).setHasLocalMutations(),o===null?null:o.unionWith(i.fieldMask.fields).unionWith(i.fieldTransforms.map(l=>l.field))}(t,e,n,r):function(i,s,o){return Uu(i.precondition,s)?(s.convertToNoDocument(s.version).setHasLocalMutations(),null):o}(t,e,n)}function JL(t,e){let n=null;for(const r of t.fieldTransforms){const i=e.data.field(r.field),s=GE(r.transform,i||null);s!=null&&(n===null&&(n=_t.empty()),n.set(r.field,s))}return n||null}function iw(t,e){return t.type===e.type&&!!t.key.isEqual(e.key)&&!!t.precondition.isEqual(e.precondition)&&!!function(n,r){return n===void 0&&r===void 0||!(!n||!r)&&oo(n,r,(i,s)=>QL(i,s))}(t.fieldTransforms,e.fieldTransforms)&&(t.type===0?t.value.isEqual(e.value):t.type!==1||t.data.isEqual(e.data)&&t.fieldMask.isEqual(e.fieldMask))}class Po extends Eh{constructor(e,n,r,i=[]){super(),this.key=e,this.value=n,this.precondition=r,this.fieldTransforms=i,this.type=0}getFieldMask(){return null}}class Er extends Eh{constructor(e,n,r,i,s=[]){super(),this.key=e,this.data=n,this.fieldMask=r,this.precondition=i,this.fieldTransforms=s,this.type=1}getFieldMask(){return this.fieldMask}}function JE(t){const e=new Map;return t.fieldMask.fields.forEach(n=>{if(!n.isEmpty()){const r=t.data.field(n);e.set(n,r)}}),e}function sw(t,e,n){const r=new Map;J(t.length===n.length);for(let i=0;i<n.length;i++){const s=t[i],o=s.transform,a=e.data.field(s.field);r.set(s.field,WL(o,a,n[i]))}return r}function ow(t,e,n){const r=new Map;for(const i of t){const s=i.transform,o=n.data.field(i.field);r.set(i.field,GL(s,o,e))}return r}class Do extends Eh{constructor(e,n){super(),this.key=e,this.precondition=n,this.type=2,this.fieldTransforms=[]}getFieldMask(){return null}}class Lm extends Eh{constructor(e,n){super(),this.key=e,this.precondition=n,this.type=3,this.fieldTransforms=[]}getFieldMask(){return null}}/**
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
 */class Mm{constructor(e,n,r,i){this.batchId=e,this.localWriteTime=n,this.baseMutations=r,this.mutations=i}applyToRemoteDocument(e,n){const r=n.mutationResults;for(let i=0;i<this.mutations.length;i++){const s=this.mutations[i];s.key.isEqual(e.key)&&XL(s,e,r[i])}}applyToLocalView(e,n){for(const r of this.baseMutations)r.key.isEqual(e.key)&&(n=Ia(r,e,n,this.localWriteTime));for(const r of this.mutations)r.key.isEqual(e.key)&&(n=Ia(r,e,n,this.localWriteTime));return n}applyToLocalDocumentSet(e,n){const r=jE();return this.mutations.forEach(i=>{const s=e.get(i.key),o=s.overlayedDocument;let a=this.applyToLocalView(o,s.mutatedFields);a=n.has(i.key)?null:a;const c=XE(o,a);c!==null&&r.set(i.key,c),o.isValidDocument()||o.convertToNoDocument(X.min())}),r}keys(){return this.mutations.reduce((e,n)=>e.add(n.key),ce())}isEqual(e){return this.batchId===e.batchId&&oo(this.mutations,e.mutations,(n,r)=>iw(n,r))&&oo(this.baseMutations,e.baseMutations,(n,r)=>iw(n,r))}}class Fm{constructor(e,n,r,i){this.batch=e,this.commitVersion=n,this.mutationResults=r,this.docVersions=i}static from(e,n,r){J(e.mutations.length===r.length);let i=zL;const s=e.mutations;for(let o=0;o<s.length;o++)i=i.insert(s[o].key,r[o].version);return new Fm(e,n,r,i)}}/**
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
 */class Um{constructor(e,n){this.largestBatchId=e,this.mutation=n}getKey(){return this.mutation.key}isEqual(e){return e!==null&&this.mutation===e.mutation}toString(){return`Overlay{
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
 */class ZL{constructor(e,n){this.count=e,this.unchangedNames=n}}/**
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
 */var nt,fe;function ZE(t){switch(t){default:return q();case b.CANCELLED:case b.UNKNOWN:case b.DEADLINE_EXCEEDED:case b.RESOURCE_EXHAUSTED:case b.INTERNAL:case b.UNAVAILABLE:case b.UNAUTHENTICATED:return!1;case b.INVALID_ARGUMENT:case b.NOT_FOUND:case b.ALREADY_EXISTS:case b.PERMISSION_DENIED:case b.FAILED_PRECONDITION:case b.ABORTED:case b.OUT_OF_RANGE:case b.UNIMPLEMENTED:case b.DATA_LOSS:return!0}}function e1(t){if(t===void 0)return Xe("GRPC error has no .code"),b.UNKNOWN;switch(t){case nt.OK:return b.OK;case nt.CANCELLED:return b.CANCELLED;case nt.UNKNOWN:return b.UNKNOWN;case nt.DEADLINE_EXCEEDED:return b.DEADLINE_EXCEEDED;case nt.RESOURCE_EXHAUSTED:return b.RESOURCE_EXHAUSTED;case nt.INTERNAL:return b.INTERNAL;case nt.UNAVAILABLE:return b.UNAVAILABLE;case nt.UNAUTHENTICATED:return b.UNAUTHENTICATED;case nt.INVALID_ARGUMENT:return b.INVALID_ARGUMENT;case nt.NOT_FOUND:return b.NOT_FOUND;case nt.ALREADY_EXISTS:return b.ALREADY_EXISTS;case nt.PERMISSION_DENIED:return b.PERMISSION_DENIED;case nt.FAILED_PRECONDITION:return b.FAILED_PRECONDITION;case nt.ABORTED:return b.ABORTED;case nt.OUT_OF_RANGE:return b.OUT_OF_RANGE;case nt.UNIMPLEMENTED:return b.UNIMPLEMENTED;case nt.DATA_LOSS:return b.DATA_LOSS;default:return q()}}(fe=nt||(nt={}))[fe.OK=0]="OK",fe[fe.CANCELLED=1]="CANCELLED",fe[fe.UNKNOWN=2]="UNKNOWN",fe[fe.INVALID_ARGUMENT=3]="INVALID_ARGUMENT",fe[fe.DEADLINE_EXCEEDED=4]="DEADLINE_EXCEEDED",fe[fe.NOT_FOUND=5]="NOT_FOUND",fe[fe.ALREADY_EXISTS=6]="ALREADY_EXISTS",fe[fe.PERMISSION_DENIED=7]="PERMISSION_DENIED",fe[fe.UNAUTHENTICATED=16]="UNAUTHENTICATED",fe[fe.RESOURCE_EXHAUSTED=8]="RESOURCE_EXHAUSTED",fe[fe.FAILED_PRECONDITION=9]="FAILED_PRECONDITION",fe[fe.ABORTED=10]="ABORTED",fe[fe.OUT_OF_RANGE=11]="OUT_OF_RANGE",fe[fe.UNIMPLEMENTED=12]="UNIMPLEMENTED",fe[fe.INTERNAL=13]="INTERNAL",fe[fe.UNAVAILABLE=14]="UNAVAILABLE",fe[fe.DATA_LOSS=15]="DATA_LOSS";/**
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
 */class Vm{constructor(){this.onExistenceFilterMismatchCallbacks=new Map}static get instance(){return ou}static getOrCreateInstance(){return ou===null&&(ou=new Vm),ou}onExistenceFilterMismatch(e){const n=Symbol();return this.onExistenceFilterMismatchCallbacks.set(n,e),()=>this.onExistenceFilterMismatchCallbacks.delete(n)}notifyOnExistenceFilterMismatch(e){this.onExistenceFilterMismatchCallbacks.forEach(n=>n(e))}}let ou=null;/**
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
 */function t1(){return new TextEncoder}/**
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
 */const eM=new Ws([4294967295,4294967295],0);function aw(t){const e=t1().encode(t),n=new WO;return n.update(e),new Uint8Array(n.digest())}function cw(t){const e=new DataView(t.buffer),n=e.getUint32(0,!0),r=e.getUint32(4,!0),i=e.getUint32(8,!0),s=e.getUint32(12,!0);return[new Ws([n,r],0),new Ws([i,s],0)]}class $m{constructor(e,n,r){if(this.bitmap=e,this.padding=n,this.hashCount=r,n<0||n>=8)throw new aa(`Invalid padding: ${n}`);if(r<0)throw new aa(`Invalid hash count: ${r}`);if(e.length>0&&this.hashCount===0)throw new aa(`Invalid hash count: ${r}`);if(e.length===0&&n!==0)throw new aa(`Invalid padding when bitmap length is 0: ${n}`);this.yt=8*e.length-n,this.It=Ws.fromNumber(this.yt)}Tt(e,n,r){let i=e.add(n.multiply(Ws.fromNumber(r)));return i.compare(eM)===1&&(i=new Ws([i.getBits(0),i.getBits(1)],0)),i.modulo(this.It).toNumber()}Et(e){return(this.bitmap[Math.floor(e/8)]&1<<e%8)!=0}At(e){if(this.yt===0)return!1;const n=aw(e),[r,i]=cw(n);for(let s=0;s<this.hashCount;s++){const o=this.Tt(r,i,s);if(!this.Et(o))return!1}return!0}static create(e,n,r){const i=e%8==0?0:8-e%8,s=new Uint8Array(Math.ceil(e/8)),o=new $m(s,i,n);return r.forEach(a=>o.insert(a)),o}insert(e){if(this.yt===0)return;const n=aw(e),[r,i]=cw(n);for(let s=0;s<this.hashCount;s++){const o=this.Tt(r,i,s);this.Rt(o)}}Rt(e){const n=Math.floor(e/8),r=e%8;this.bitmap[n]|=1<<r}}class aa extends Error{constructor(){super(...arguments),this.name="BloomFilterError"}}/**
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
 */class Lc{constructor(e,n,r,i,s){this.snapshotVersion=e,this.targetChanges=n,this.targetMismatches=r,this.documentUpdates=i,this.resolvedLimboDocuments=s}static createSynthesizedRemoteEventForCurrentChange(e,n,r){const i=new Map;return i.set(e,Mc.createSynthesizedTargetChangeForCurrentChange(e,n,r)),new Lc(X.min(),i,new Ce(oe),Wt(),ce())}}class Mc{constructor(e,n,r,i,s){this.resumeToken=e,this.current=n,this.addedDocuments=r,this.modifiedDocuments=i,this.removedDocuments=s}static createSynthesizedTargetChangeForCurrentChange(e,n,r){return new Mc(r,n,ce(),ce(),ce())}}/**
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
 */class Vu{constructor(e,n,r,i){this.vt=e,this.removedTargetIds=n,this.key=r,this.Pt=i}}class n1{constructor(e,n){this.targetId=e,this.bt=n}}class r1{constructor(e,n,r=at.EMPTY_BYTE_STRING,i=null){this.state=e,this.targetIds=n,this.resumeToken=r,this.cause=i}}class uw{constructor(){this.Vt=0,this.St=hw(),this.Dt=at.EMPTY_BYTE_STRING,this.Ct=!1,this.xt=!0}get current(){return this.Ct}get resumeToken(){return this.Dt}get Nt(){return this.Vt!==0}get kt(){return this.xt}Mt(e){e.approximateByteSize()>0&&(this.xt=!0,this.Dt=e)}Ot(){let e=ce(),n=ce(),r=ce();return this.St.forEach((i,s)=>{switch(s){case 0:e=e.add(i);break;case 2:n=n.add(i);break;case 1:r=r.add(i);break;default:q()}}),new Mc(this.Dt,this.Ct,e,n,r)}$t(){this.xt=!1,this.St=hw()}Ft(e,n){this.xt=!0,this.St=this.St.insert(e,n)}Bt(e){this.xt=!0,this.St=this.St.remove(e)}Lt(){this.Vt+=1}qt(){this.Vt-=1}Ut(){this.xt=!0,this.Ct=!0}}class tM{constructor(e){this.Kt=e,this.Gt=new Map,this.Qt=Wt(),this.jt=lw(),this.zt=new Ce(oe)}Wt(e){for(const n of e.vt)e.Pt&&e.Pt.isFoundDocument()?this.Ht(n,e.Pt):this.Jt(n,e.key,e.Pt);for(const n of e.removedTargetIds)this.Jt(n,e.key,e.Pt)}Yt(e){this.forEachTarget(e,n=>{const r=this.Xt(n);switch(e.state){case 0:this.Zt(n)&&r.Mt(e.resumeToken);break;case 1:r.qt(),r.Nt||r.$t(),r.Mt(e.resumeToken);break;case 2:r.qt(),r.Nt||this.removeTarget(n);break;case 3:this.Zt(n)&&(r.Ut(),r.Mt(e.resumeToken));break;case 4:this.Zt(n)&&(this.te(n),r.Mt(e.resumeToken));break;default:q()}})}forEachTarget(e,n){e.targetIds.length>0?e.targetIds.forEach(n):this.Gt.forEach((r,i)=>{this.Zt(i)&&n(i)})}ee(e){var n;const r=e.targetId,i=e.bt.count,s=this.ne(r);if(s){const o=s.target;if(pl(o))if(i===0){const a=new L(o.path);this.Jt(r,a,Pe.newNoDocument(a,X.min()))}else J(i===1);else{const a=this.se(r);if(a!==i){const c=this.ie(e,a);if(c!==0){this.te(r);const u=c===2?"TargetPurposeExistenceFilterMismatchBloom":"TargetPurposeExistenceFilterMismatch";this.zt=this.zt.insert(r,u)}(n=Vm.instance)===null||n===void 0||n.notifyOnExistenceFilterMismatch(function(u,l,h){var d,f,m,y,I,v;const E={localCacheCount:l,existenceFilterCount:h.count},_=h.unchangedNames;return _&&(E.bloomFilter={applied:u===0,hashCount:(d=_==null?void 0:_.hashCount)!==null&&d!==void 0?d:0,bitmapLength:(y=(m=(f=_==null?void 0:_.bits)===null||f===void 0?void 0:f.bitmap)===null||m===void 0?void 0:m.length)!==null&&y!==void 0?y:0,padding:(v=(I=_==null?void 0:_.bits)===null||I===void 0?void 0:I.padding)!==null&&v!==void 0?v:0}),E}(c,a,e.bt))}}}}ie(e,n){const{unchangedNames:r,count:i}=e.bt;if(!r||!r.bits)return 1;const{bits:{bitmap:s="",padding:o=0},hashCount:a=0}=r;let c,u;try{c=Zr(s).toUint8Array()}catch(l){if(l instanceof AE)return Cn("Decoding the base64 bloom filter in existence filter failed ("+l.message+"); ignoring the bloom filter and falling back to full re-query."),1;throw l}try{u=new $m(c,o,a)}catch(l){return Cn(l instanceof aa?"BloomFilter error: ":"Applying bloom filter failed: ",l),1}return u.yt===0?1:i!==n-this.re(e.targetId,u)?2:0}re(e,n){const r=this.Kt.getRemoteKeysForTarget(e);let i=0;return r.forEach(s=>{const o=this.Kt.oe(),a=`projects/${o.projectId}/databases/${o.database}/documents/${s.path.canonicalString()}`;n.At(a)||(this.Jt(e,s,null),i++)}),i}ue(e){const n=new Map;this.Gt.forEach((s,o)=>{const a=this.ne(o);if(a){if(s.current&&pl(a.target)){const c=new L(a.target.path);this.Qt.get(c)!==null||this.ce(o,c)||this.Jt(o,c,Pe.newNoDocument(c,e))}s.kt&&(n.set(o,s.Ot()),s.$t())}});let r=ce();this.jt.forEach((s,o)=>{let a=!0;o.forEachWhile(c=>{const u=this.ne(c);return!u||u.purpose==="TargetPurposeLimboResolution"||(a=!1,!1)}),a&&(r=r.add(s))}),this.Qt.forEach((s,o)=>o.setReadTime(e));const i=new Lc(e,n,this.zt,this.Qt,r);return this.Qt=Wt(),this.jt=lw(),this.zt=new Ce(oe),i}Ht(e,n){if(!this.Zt(e))return;const r=this.ce(e,n.key)?2:0;this.Xt(e).Ft(n.key,r),this.Qt=this.Qt.insert(n.key,n),this.jt=this.jt.insert(n.key,this.ae(n.key).add(e))}Jt(e,n,r){if(!this.Zt(e))return;const i=this.Xt(e);this.ce(e,n)?i.Ft(n,1):i.Bt(n),this.jt=this.jt.insert(n,this.ae(n).delete(e)),r&&(this.Qt=this.Qt.insert(n,r))}removeTarget(e){this.Gt.delete(e)}se(e){const n=this.Xt(e).Ot();return this.Kt.getRemoteKeysForTarget(e).size+n.addedDocuments.size-n.removedDocuments.size}Lt(e){this.Xt(e).Lt()}Xt(e){let n=this.Gt.get(e);return n||(n=new uw,this.Gt.set(e,n)),n}ae(e){let n=this.jt.get(e);return n||(n=new Oe(oe),this.jt=this.jt.insert(e,n)),n}Zt(e){const n=this.ne(e)!==null;return n||x("WatchChangeAggregator","Detected inactive target",e),n}ne(e){const n=this.Gt.get(e);return n&&n.Nt?null:this.Kt.he(e)}te(e){this.Gt.set(e,new uw),this.Kt.getRemoteKeysForTarget(e).forEach(n=>{this.Jt(e,n,null)})}ce(e,n){return this.Kt.getRemoteKeysForTarget(e).has(n)}}function lw(){return new Ce(L.comparator)}function hw(){return new Ce(L.comparator)}const nM=(()=>({asc:"ASCENDING",desc:"DESCENDING"}))(),rM=(()=>({"<":"LESS_THAN","<=":"LESS_THAN_OR_EQUAL",">":"GREATER_THAN",">=":"GREATER_THAN_OR_EQUAL","==":"EQUAL","!=":"NOT_EQUAL","array-contains":"ARRAY_CONTAINS",in:"IN","not-in":"NOT_IN","array-contains-any":"ARRAY_CONTAINS_ANY"}))(),iM=(()=>({and:"AND",or:"OR"}))();class sM{constructor(e,n){this.databaseId=e,this.useProto3Json=n}}function Uf(t,e){return t.useProto3Json||Rc(e)?e:{value:e}}function ho(t,e){return t.useProto3Json?`${new Date(1e3*e.seconds).toISOString().replace(/\.\d*/,"").replace("Z","")}.${("000000000"+e.nanoseconds).slice(-9)}Z`:{seconds:""+e.seconds,nanos:e.nanoseconds}}function i1(t,e){return t.useProto3Json?e.toBase64():e.toUint8Array()}function oM(t,e){return ho(t,e.toTimestamp())}function Ze(t){return J(!!t),X.fromTimestamp(function(e){const n=Jr(e);return new $e(n.seconds,n.nanos)}(t))}function Bm(t,e){return function(n){return new me(["projects",n.projectId,"databases",n.database])}(t).child("documents").child(e).canonicalString()}function s1(t){const e=me.fromString(t);return J(p1(e)),e}function ec(t,e){return Bm(t.databaseId,e.path)}function Kn(t,e){const n=s1(e);if(n.get(1)!==t.databaseId.projectId)throw new A(b.INVALID_ARGUMENT,"Tried to deserialize key from different project: "+n.get(1)+" vs "+t.databaseId.projectId);if(n.get(3)!==t.databaseId.database)throw new A(b.INVALID_ARGUMENT,"Tried to deserialize key from different database: "+n.get(3)+" vs "+t.databaseId.database);return new L(a1(n))}function Vf(t,e){return Bm(t.databaseId,e)}function o1(t){const e=s1(t);return e.length===4?me.emptyPath():a1(e)}function tc(t){return new me(["projects",t.databaseId.projectId,"databases",t.databaseId.database]).canonicalString()}function a1(t){return J(t.length>4&&t.get(4)==="documents"),t.popFirst(5)}function dw(t,e,n){return{name:ec(t,e),fields:n.value.mapValue.fields}}function c1(t,e,n){const r=Kn(t,e.name),i=Ze(e.updateTime),s=e.createTime?Ze(e.createTime):X.min(),o=new _t({mapValue:{fields:e.fields}}),a=Pe.newFoundDocument(r,i,s,o);return n&&a.setHasCommittedMutations(),n?a.setHasCommittedMutations():a}function aM(t,e){return"found"in e?function(n,r){J(!!r.found),r.found.name,r.found.updateTime;const i=Kn(n,r.found.name),s=Ze(r.found.updateTime),o=r.found.createTime?Ze(r.found.createTime):X.min(),a=new _t({mapValue:{fields:r.found.fields}});return Pe.newFoundDocument(i,s,o,a)}(t,e):"missing"in e?function(n,r){J(!!r.missing),J(!!r.readTime);const i=Kn(n,r.missing),s=Ze(r.readTime);return Pe.newNoDocument(i,s)}(t,e):q()}function cM(t,e){let n;if("targetChange"in e){e.targetChange;const r=function(c){return c==="NO_CHANGE"?0:c==="ADD"?1:c==="REMOVE"?2:c==="CURRENT"?3:c==="RESET"?4:q()}(e.targetChange.targetChangeType||"NO_CHANGE"),i=e.targetChange.targetIds||[],s=function(c,u){return c.useProto3Json?(J(u===void 0||typeof u=="string"),at.fromBase64String(u||"")):(J(u===void 0||u instanceof Uint8Array),at.fromUint8Array(u||new Uint8Array))}(t,e.targetChange.resumeToken),o=e.targetChange.cause,a=o&&function(c){const u=c.code===void 0?b.UNKNOWN:e1(c.code);return new A(u,c.message||"")}(o);n=new r1(r,i,s,a||null)}else if("documentChange"in e){e.documentChange;const r=e.documentChange;r.document,r.document.name,r.document.updateTime;const i=Kn(t,r.document.name),s=Ze(r.document.updateTime),o=r.document.createTime?Ze(r.document.createTime):X.min(),a=new _t({mapValue:{fields:r.document.fields}}),c=Pe.newFoundDocument(i,s,o,a),u=r.targetIds||[],l=r.removedTargetIds||[];n=new Vu(u,l,c.key,c)}else if("documentDelete"in e){e.documentDelete;const r=e.documentDelete;r.document;const i=Kn(t,r.document),s=r.readTime?Ze(r.readTime):X.min(),o=Pe.newNoDocument(i,s),a=r.removedTargetIds||[];n=new Vu([],a,o.key,o)}else if("documentRemove"in e){e.documentRemove;const r=e.documentRemove;r.document;const i=Kn(t,r.document),s=r.removedTargetIds||[];n=new Vu([],s,i,null)}else{if(!("filter"in e))return q();{e.filter;const r=e.filter;r.targetId;const{count:i=0,unchangedNames:s}=r,o=new ZL(i,s),a=r.targetId;n=new n1(a,o)}}return n}function nc(t,e){let n;if(e instanceof Po)n={update:dw(t,e.key,e.value)};else if(e instanceof Do)n={delete:ec(t,e.key)};else if(e instanceof Er)n={update:dw(t,e.key,e.data),updateMask:pM(e.fieldMask)};else{if(!(e instanceof Lm))return q();n={verify:ec(t,e.key)}}return e.fieldTransforms.length>0&&(n.updateTransforms=e.fieldTransforms.map(r=>function(i,s){const o=s.transform;if(o instanceof uo)return{fieldPath:s.field.canonicalString(),setToServerValue:"REQUEST_TIME"};if(o instanceof ns)return{fieldPath:s.field.canonicalString(),appendMissingElements:{values:o.elements}};if(o instanceof rs)return{fieldPath:s.field.canonicalString(),removeAllFromArray:{values:o.elements}};if(o instanceof lo)return{fieldPath:s.field.canonicalString(),increment:o.wt};throw q()}(0,r))),e.precondition.isNone||(n.currentDocument=function(r,i){return i.updateTime!==void 0?{updateTime:oM(r,i.updateTime)}:i.exists!==void 0?{exists:i.exists}:q()}(t,e.precondition)),n}function $f(t,e){const n=e.currentDocument?function(i){return i.updateTime!==void 0?Ve.updateTime(Ze(i.updateTime)):i.exists!==void 0?Ve.exists(i.exists):Ve.none()}(e.currentDocument):Ve.none(),r=e.updateTransforms?e.updateTransforms.map(i=>function(s,o){let a=null;if("setToServerValue"in o)J(o.setToServerValue==="REQUEST_TIME"),a=new uo;else if("appendMissingElements"in o){const u=o.appendMissingElements.values||[];a=new ns(u)}else if("removeAllFromArray"in o){const u=o.removeAllFromArray.values||[];a=new rs(u)}else"increment"in o?a=new lo(s,o.increment):q();const c=Je.fromServerFormat(o.fieldPath);return new Oc(c,a)}(t,i)):[];if(e.update){e.update.name;const i=Kn(t,e.update.name),s=new _t({mapValue:{fields:e.update.fields}});if(e.updateMask){const o=function(a){const c=a.fieldPaths||[];return new Gt(c.map(u=>Je.fromServerFormat(u)))}(e.updateMask);return new Er(i,s,o,n,r)}return new Po(i,s,n,r)}if(e.delete){const i=Kn(t,e.delete);return new Do(i,n)}if(e.verify){const i=Kn(t,e.verify);return new Lm(i,n)}return q()}function uM(t,e){return t&&t.length>0?(J(e!==void 0),t.map(n=>function(r,i){let s=r.updateTime?Ze(r.updateTime):Ze(i);return s.isEqual(X.min())&&(s=Ze(i)),new YL(s,r.transformResults||[])}(n,e))):[]}function u1(t,e){return{documents:[Vf(t,e.path)]}}function l1(t,e){const n={structuredQuery:{}},r=e.path;e.collectionGroup!==null?(n.parent=Vf(t,r),n.structuredQuery.from=[{collectionId:e.collectionGroup,allDescendants:!0}]):(n.parent=Vf(t,r.popLast()),n.structuredQuery.from=[{collectionId:r.lastSegment()}]);const i=function(c){if(c.length!==0)return f1(Ie.create(c,"and"))}(e.filters);i&&(n.structuredQuery.where=i);const s=function(c){if(c.length!==0)return c.map(u=>function(l){return{field:Ns(l.field),direction:hM(l.dir)}}(u))}(e.orderBy);s&&(n.structuredQuery.orderBy=s);const o=Uf(t,e.limit);var a;return o!==null&&(n.structuredQuery.limit=o),e.startAt&&(n.structuredQuery.startAt={before:(a=e.startAt).inclusive,values:a.position}),e.endAt&&(n.structuredQuery.endAt=function(c){return{before:!c.inclusive,values:c.position}}(e.endAt)),n}function h1(t){let e=o1(t.parent);const n=t.structuredQuery,r=n.from?n.from.length:0;let i=null;if(r>0){J(r===1);const l=n.from[0];l.allDescendants?i=l.collectionId:e=e.child(l.collectionId)}let s=[];n.where&&(s=function(l){const h=d1(l);return h instanceof Ie&&Nm(h)?h.getFilters():[h]}(n.where));let o=[];n.orderBy&&(o=n.orderBy.map(l=>function(h){return new Qs(Ps(h.field),function(d){switch(d){case"ASCENDING":return"asc";case"DESCENDING":return"desc";default:return}}(h.direction))}(l)));let a=null;n.limit&&(a=function(l){let h;return h=typeof l=="object"?l.value:l,Rc(h)?null:h}(n.limit));let c=null;n.startAt&&(c=function(l){const h=!!l.before,d=l.values||[];return new ni(d,h)}(n.startAt));let u=null;return n.endAt&&(u=function(l){const h=!l.before,d=l.values||[];return new ni(d,h)}(n.endAt)),FE(e,i,o,s,a,"F",c,u)}function lM(t,e){const n=function(r){switch(r){case"TargetPurposeListen":return null;case"TargetPurposeExistenceFilterMismatch":return"existence-filter-mismatch";case"TargetPurposeExistenceFilterMismatchBloom":return"existence-filter-mismatch-bloom";case"TargetPurposeLimboResolution":return"limbo-document";default:return q()}}(e.purpose);return n==null?null:{"goog-listen-tags":n}}function d1(t){return t.unaryFilter!==void 0?function(e){switch(e.unaryFilter.op){case"IS_NAN":const n=Ps(e.unaryFilter.field);return de.create(n,"==",{doubleValue:NaN});case"IS_NULL":const r=Ps(e.unaryFilter.field);return de.create(r,"==",{nullValue:"NULL_VALUE"});case"IS_NOT_NAN":const i=Ps(e.unaryFilter.field);return de.create(i,"!=",{doubleValue:NaN});case"IS_NOT_NULL":const s=Ps(e.unaryFilter.field);return de.create(s,"!=",{nullValue:"NULL_VALUE"});default:return q()}}(t):t.fieldFilter!==void 0?function(e){return de.create(Ps(e.fieldFilter.field),function(n){switch(n){case"EQUAL":return"==";case"NOT_EQUAL":return"!=";case"GREATER_THAN":return">";case"GREATER_THAN_OR_EQUAL":return">=";case"LESS_THAN":return"<";case"LESS_THAN_OR_EQUAL":return"<=";case"ARRAY_CONTAINS":return"array-contains";case"IN":return"in";case"NOT_IN":return"not-in";case"ARRAY_CONTAINS_ANY":return"array-contains-any";default:return q()}}(e.fieldFilter.op),e.fieldFilter.value)}(t):t.compositeFilter!==void 0?function(e){return Ie.create(e.compositeFilter.filters.map(n=>d1(n)),function(n){switch(n){case"AND":return"and";case"OR":return"or";default:return q()}}(e.compositeFilter.op))}(t):q()}function hM(t){return nM[t]}function dM(t){return rM[t]}function fM(t){return iM[t]}function Ns(t){return{fieldPath:t.canonicalString()}}function Ps(t){return Je.fromServerFormat(t.fieldPath)}function f1(t){return t instanceof de?function(e){if(e.op==="=="){if(Qv(e.value))return{unaryFilter:{field:Ns(e.field),op:"IS_NAN"}};if(Wv(e.value))return{unaryFilter:{field:Ns(e.field),op:"IS_NULL"}}}else if(e.op==="!="){if(Qv(e.value))return{unaryFilter:{field:Ns(e.field),op:"IS_NOT_NAN"}};if(Wv(e.value))return{unaryFilter:{field:Ns(e.field),op:"IS_NOT_NULL"}}}return{fieldFilter:{field:Ns(e.field),op:dM(e.op),value:e.value}}}(t):t instanceof Ie?function(e){const n=e.getFilters().map(r=>f1(r));return n.length===1?n[0]:{compositeFilter:{op:fM(e.op),filters:n}}}(t):q()}function pM(t){const e=[];return t.fields.forEach(n=>e.push(n.canonicalString())),{fieldPaths:e}}function p1(t){return t.length>=4&&t.get(0)==="projects"&&t.get(2)==="databases"}/**
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
 */class or{constructor(e,n,r,i,s=X.min(),o=X.min(),a=at.EMPTY_BYTE_STRING,c=null){this.target=e,this.targetId=n,this.purpose=r,this.sequenceNumber=i,this.snapshotVersion=s,this.lastLimboFreeSnapshotVersion=o,this.resumeToken=a,this.expectedCount=c}withSequenceNumber(e){return new or(this.target,this.targetId,this.purpose,e,this.snapshotVersion,this.lastLimboFreeSnapshotVersion,this.resumeToken,this.expectedCount)}withResumeToken(e,n){return new or(this.target,this.targetId,this.purpose,this.sequenceNumber,n,this.lastLimboFreeSnapshotVersion,e,null)}withExpectedCount(e){return new or(this.target,this.targetId,this.purpose,this.sequenceNumber,this.snapshotVersion,this.lastLimboFreeSnapshotVersion,this.resumeToken,e)}withLastLimboFreeSnapshotVersion(e){return new or(this.target,this.targetId,this.purpose,this.sequenceNumber,this.snapshotVersion,e,this.resumeToken,this.expectedCount)}}/**
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
 */class m1{constructor(e){this.le=e}}function mM(t,e){let n;if(e.document)n=c1(t.le,e.document,!!e.hasCommittedMutations);else if(e.noDocument){const r=L.fromSegments(e.noDocument.path),i=ss(e.noDocument.readTime);n=Pe.newNoDocument(r,i),e.hasCommittedMutations&&n.setHasCommittedMutations()}else{if(!e.unknownDocument)return q();{const r=L.fromSegments(e.unknownDocument.path),i=ss(e.unknownDocument.version);n=Pe.newUnknownDocument(r,i)}}return e.readTime&&n.setReadTime(function(r){const i=new $e(r[0],r[1]);return X.fromTimestamp(i)}(e.readTime)),n}function fw(t,e){const n=e.key,r={prefixPath:n.getCollectionPath().popLast().toArray(),collectionGroup:n.collectionGroup,documentId:n.path.lastSegment(),readTime:yl(e.readTime),hasCommittedMutations:e.hasCommittedMutations};if(e.isFoundDocument())r.document=function(i,s){return{name:ec(i,s.key),fields:s.data.value.mapValue.fields,updateTime:ho(i,s.version.toTimestamp()),createTime:ho(i,s.createTime.toTimestamp())}}(t.le,e);else if(e.isNoDocument())r.noDocument={path:n.path.toArray(),readTime:is(e.version)};else{if(!e.isUnknownDocument())return q();r.unknownDocument={path:n.path.toArray(),version:is(e.version)}}return r}function yl(t){const e=t.toTimestamp();return[e.seconds,e.nanoseconds]}function is(t){const e=t.toTimestamp();return{seconds:e.seconds,nanoseconds:e.nanoseconds}}function ss(t){const e=new $e(t.seconds,t.nanoseconds);return X.fromTimestamp(e)}function Ri(t,e){const n=(e.baseMutations||[]).map(s=>$f(t.le,s));for(let s=0;s<e.mutations.length-1;++s){const o=e.mutations[s];if(s+1<e.mutations.length&&e.mutations[s+1].transform!==void 0){const a=e.mutations[s+1];o.updateTransforms=a.transform.fieldTransforms,e.mutations.splice(s+1,1),++s}}const r=e.mutations.map(s=>$f(t.le,s)),i=$e.fromMillis(e.localWriteTimeMs);return new Mm(e.batchId,i,n,r)}function ca(t){const e=ss(t.readTime),n=t.lastLimboFreeSnapshotVersion!==void 0?ss(t.lastLimboFreeSnapshotVersion):X.min();let r;var i;return t.query.documents!==void 0?(J((i=t.query).documents.length===1),r=Yt(No(o1(i.documents[0])))):r=function(s){return Yt(h1(s))}(t.query),new or(r,t.targetId,"TargetPurposeListen",t.lastListenSequenceNumber,e,n,at.fromBase64String(t.resumeToken))}function g1(t,e){const n=is(e.snapshotVersion),r=is(e.lastLimboFreeSnapshotVersion);let i;i=pl(e.target)?u1(t.le,e.target):l1(t.le,e.target);const s=e.resumeToken.toBase64();return{targetId:e.targetId,canonicalId:ts(e.target),readTime:n,resumeToken:s,lastListenSequenceNumber:e.sequenceNumber,lastLimboFreeSnapshotVersion:r,query:i}}function qm(t){const e=h1({parent:t.parent,structuredQuery:t.structuredQuery});return t.limitType==="LAST"?gl(e,e.limit,"L"):e}function Ad(t,e){return new Um(e.largestBatchId,$f(t.le,e.overlayMutation))}function pw(t,e){const n=e.path.lastSegment();return[t,Vt(e.path.popLast()),n]}function mw(t,e,n,r){return{indexId:t,uid:e.uid||"",sequenceNumber:n,readTime:is(r.readTime),documentKey:Vt(r.documentKey.path),largestBatchId:r.largestBatchId}}/**
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
 */class gM{getBundleMetadata(e,n){return gw(e).get(n).next(r=>{if(r)return{id:(i=r).bundleId,createTime:ss(i.createTime),version:i.version};var i})}saveBundleMetadata(e,n){return gw(e).put({bundleId:(r=n).id,createTime:is(Ze(r.createTime)),version:r.version});var r}getNamedQuery(e,n){return yw(e).get(n).next(r=>{if(r)return{name:(i=r).name,query:qm(i.bundledQuery),readTime:ss(i.readTime)};var i})}saveNamedQuery(e,n){return yw(e).put(function(r){return{name:r.name,readTime:is(Ze(r.readTime)),bundledQuery:r.bundledQuery}}(n))}}function gw(t){return mt(t,"bundles")}function yw(t){return mt(t,"namedQueries")}/**
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
 */class Th{constructor(e,n){this.serializer=e,this.userId=n}static fe(e,n){const r=n.uid||"";return new Th(e,r)}getOverlay(e,n){return Wo(e).get(pw(this.userId,n)).next(r=>r?Ad(this.serializer,r):null)}getOverlays(e,n){const r=jn();return w.forEach(n,i=>this.getOverlay(e,i).next(s=>{s!==null&&r.set(i,s)})).next(()=>r)}saveOverlays(e,n,r){const i=[];return r.forEach((s,o)=>{const a=new Um(n,o);i.push(this.de(e,a))}),w.waitFor(i)}removeOverlaysForBatchId(e,n,r){const i=new Set;n.forEach(o=>i.add(Vt(o.getCollectionPath())));const s=[];return i.forEach(o=>{const a=IDBKeyRange.bound([this.userId,o,r],[this.userId,o,r+1],!1,!0);s.push(Wo(e).J("collectionPathOverlayIndex",a))}),w.waitFor(s)}getOverlaysForCollection(e,n,r){const i=jn(),s=Vt(n),o=IDBKeyRange.bound([this.userId,s,r],[this.userId,s,Number.POSITIVE_INFINITY],!0);return Wo(e).j("collectionPathOverlayIndex",o).next(a=>{for(const c of a){const u=Ad(this.serializer,c);i.set(u.getKey(),u)}return i})}getOverlaysForCollectionGroup(e,n,r,i){const s=jn();let o;const a=IDBKeyRange.bound([this.userId,n,r],[this.userId,n,Number.POSITIVE_INFINITY],!0);return Wo(e).X({index:"collectionGroupOverlayIndex",range:a},(c,u,l)=>{const h=Ad(this.serializer,u);s.size()<i||h.largestBatchId===o?(s.set(h.getKey(),h),o=h.largestBatchId):l.done()}).next(()=>s)}de(e,n){return Wo(e).put(function(r,i,s){const[o,a,c]=pw(i,s.mutation.key);return{userId:i,collectionPath:a,documentId:c,collectionGroup:s.mutation.key.getCollectionGroup(),largestBatchId:s.largestBatchId,overlayMutation:nc(r.le,s.mutation)}}(this.serializer,this.userId,n))}}function Wo(t){return mt(t,"documentOverlays")}/**
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
 */class Ni{constructor(){}_e(e,n){this.we(e,n),n.me()}we(e,n){if("nullValue"in e)this.ge(n,5);else if("booleanValue"in e)this.ge(n,10),n.ye(e.booleanValue?1:0);else if("integerValue"in e)this.ge(n,15),n.ye(Ke(e.integerValue));else if("doubleValue"in e){const r=Ke(e.doubleValue);isNaN(r)?this.ge(n,13):(this.ge(n,15),Ya(r)?n.ye(0):n.ye(r))}else if("timestampValue"in e){const r=e.timestampValue;this.ge(n,20),typeof r=="string"?n.pe(r):(n.pe(`${r.seconds||""}`),n.ye(r.nanos||0))}else if("stringValue"in e)this.Ie(e.stringValue,n),this.Te(n);else if("bytesValue"in e)this.ge(n,30),n.Ee(Zr(e.bytesValue)),this.Te(n);else if("referenceValue"in e)this.Ae(e.referenceValue,n);else if("geoPointValue"in e){const r=e.geoPointValue;this.ge(n,45),n.ye(r.latitude||0),n.ye(r.longitude||0)}else"mapValue"in e?CE(e)?this.ge(n,Number.MAX_SAFE_INTEGER):(this.Re(e.mapValue,n),this.Te(n)):"arrayValue"in e?(this.ve(e.arrayValue,n),this.Te(n)):q()}Ie(e,n){this.ge(n,25),this.Pe(e,n)}Pe(e,n){n.pe(e)}Re(e,n){const r=e.fields||{};this.ge(n,55);for(const i of Object.keys(r))this.Ie(i,n),this.we(r[i],n)}ve(e,n){const r=e.values||[];this.ge(n,50);for(const i of r)this.we(i,n)}Ae(e,n){this.ge(n,37),L.fromName(e).path.forEach(r=>{this.ge(n,60),this.Pe(r,n)})}ge(e,n){e.ye(n)}Te(e){e.ye(2)}}Ni.be=new Ni;function yM(t){if(t===0)return 8;let e=0;return t>>4==0&&(e+=4,t<<=4),t>>6==0&&(e+=2,t<<=2),t>>7==0&&(e+=1),e}function vw(t){const e=64-function(n){let r=0;for(let i=0;i<8;++i){const s=yM(255&n[i]);if(r+=s,s!==8)break}return r}(t);return Math.ceil(e/8)}class vM{constructor(){this.buffer=new Uint8Array(1024),this.position=0}Ve(e){const n=e[Symbol.iterator]();let r=n.next();for(;!r.done;)this.Se(r.value),r=n.next();this.De()}Ce(e){const n=e[Symbol.iterator]();let r=n.next();for(;!r.done;)this.xe(r.value),r=n.next();this.Ne()}ke(e){for(const n of e){const r=n.charCodeAt(0);if(r<128)this.Se(r);else if(r<2048)this.Se(960|r>>>6),this.Se(128|63&r);else if(n<"\uD800"||"\uDBFF"<n)this.Se(480|r>>>12),this.Se(128|63&r>>>6),this.Se(128|63&r);else{const i=n.codePointAt(0);this.Se(240|i>>>18),this.Se(128|63&i>>>12),this.Se(128|63&i>>>6),this.Se(128|63&i)}}this.De()}Me(e){for(const n of e){const r=n.charCodeAt(0);if(r<128)this.xe(r);else if(r<2048)this.xe(960|r>>>6),this.xe(128|63&r);else if(n<"\uD800"||"\uDBFF"<n)this.xe(480|r>>>12),this.xe(128|63&r>>>6),this.xe(128|63&r);else{const i=n.codePointAt(0);this.xe(240|i>>>18),this.xe(128|63&i>>>12),this.xe(128|63&i>>>6),this.xe(128|63&i)}}this.Ne()}Oe(e){const n=this.$e(e),r=vw(n);this.Fe(1+r),this.buffer[this.position++]=255&r;for(let i=n.length-r;i<n.length;++i)this.buffer[this.position++]=255&n[i]}Be(e){const n=this.$e(e),r=vw(n);this.Fe(1+r),this.buffer[this.position++]=~(255&r);for(let i=n.length-r;i<n.length;++i)this.buffer[this.position++]=~(255&n[i])}Le(){this.qe(255),this.qe(255)}Ue(){this.Ke(255),this.Ke(255)}reset(){this.position=0}seed(e){this.Fe(e.length),this.buffer.set(e,this.position),this.position+=e.length}Ge(){return this.buffer.slice(0,this.position)}$e(e){const n=function(i){const s=new DataView(new ArrayBuffer(8));return s.setFloat64(0,i,!1),new Uint8Array(s.buffer)}(e),r=(128&n[0])!=0;n[0]^=r?255:128;for(let i=1;i<n.length;++i)n[i]^=r?255:0;return n}Se(e){const n=255&e;n===0?(this.qe(0),this.qe(255)):n===255?(this.qe(255),this.qe(0)):this.qe(n)}xe(e){const n=255&e;n===0?(this.Ke(0),this.Ke(255)):n===255?(this.Ke(255),this.Ke(0)):this.Ke(e)}De(){this.qe(0),this.qe(1)}Ne(){this.Ke(0),this.Ke(1)}qe(e){this.Fe(1),this.buffer[this.position++]=e}Ke(e){this.Fe(1),this.buffer[this.position++]=~e}Fe(e){const n=e+this.position;if(n<=this.buffer.length)return;let r=2*this.buffer.length;r<n&&(r=n);const i=new Uint8Array(r);i.set(this.buffer),this.buffer=i}}class wM{constructor(e){this.Qe=e}Ee(e){this.Qe.Ve(e)}pe(e){this.Qe.ke(e)}ye(e){this.Qe.Oe(e)}me(){this.Qe.Le()}}class _M{constructor(e){this.Qe=e}Ee(e){this.Qe.Ce(e)}pe(e){this.Qe.Me(e)}ye(e){this.Qe.Be(e)}me(){this.Qe.Ue()}}class Qo{constructor(){this.Qe=new vM,this.je=new wM(this.Qe),this.ze=new _M(this.Qe)}seed(e){this.Qe.seed(e)}We(e){return e===0?this.je:this.ze}Ge(){return this.Qe.Ge()}reset(){this.Qe.reset()}}/**
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
 */class Pi{constructor(e,n,r,i){this.indexId=e,this.documentKey=n,this.arrayValue=r,this.directionalValue=i}He(){const e=this.directionalValue.length,n=e===0||this.directionalValue[e-1]===255?e+1:e,r=new Uint8Array(n);return r.set(this.directionalValue,0),n!==e?r.set([0],this.directionalValue.length):++r[r.length-1],new Pi(this.indexId,this.documentKey,this.arrayValue,r)}}function Dr(t,e){let n=t.indexId-e.indexId;return n!==0?n:(n=ww(t.arrayValue,e.arrayValue),n!==0?n:(n=ww(t.directionalValue,e.directionalValue),n!==0?n:L.comparator(t.documentKey,e.documentKey)))}function ww(t,e){for(let n=0;n<t.length&&n<e.length;++n){const r=t[n]-e[n];if(r!==0)return r}return t.length-e.length}/**
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
 */class bM{constructor(e){this.collectionId=e.collectionGroup!=null?e.collectionGroup:e.path.lastSegment(),this.Je=e.orderBy,this.Ye=[];for(const n of e.filters){const r=n;r.isInequality()?this.Xe=r:this.Ye.push(r)}}Ze(e){J(e.collectionGroup===this.collectionId);const n=xf(e);if(n!==void 0&&!this.tn(n))return!1;const r=Si(e);let i=0,s=0;for(;i<r.length&&this.tn(r[i]);++i);if(i===r.length)return!0;if(this.Xe!==void 0){const o=r[i];if(!this.en(this.Xe,o)||!this.nn(this.Je[s++],o))return!1;++i}for(;i<r.length;++i){const o=r[i];if(s>=this.Je.length||!this.nn(this.Je[s++],o))return!1}return!0}tn(e){for(const n of this.Ye)if(this.en(n,e))return!0;return!1}en(e,n){if(e===void 0||!e.field.isEqual(n.fieldPath))return!1;const r=e.op==="array-contains"||e.op==="array-contains-any";return n.kind===2===r}nn(e,n){return!!e.field.isEqual(n.fieldPath)&&(n.kind===0&&e.dir==="asc"||n.kind===1&&e.dir==="desc")}}/**
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
 */function y1(t){var e,n;if(J(t instanceof de||t instanceof Ie),t instanceof de){if(t instanceof ME){const i=((n=(e=t.value.arrayValue)===null||e===void 0?void 0:e.values)===null||n===void 0?void 0:n.map(s=>de.create(t.field,"==",s)))||[];return Ie.create(i,"or")}return t}const r=t.filters.map(i=>y1(i));return Ie.create(r,t.op)}function IM(t){if(t.getFilters().length===0)return[];const e=jf(y1(t));return J(v1(e)),Bf(e)||qf(e)?[e]:e.getFilters()}function Bf(t){return t instanceof de}function qf(t){return t instanceof Ie&&Nm(t)}function v1(t){return Bf(t)||qf(t)||function(e){if(e instanceof Ie&&Df(e)){for(const n of e.getFilters())if(!Bf(n)&&!qf(n))return!1;return!0}return!1}(t)}function jf(t){if(J(t instanceof de||t instanceof Ie),t instanceof de)return t;if(t.filters.length===1)return jf(t.filters[0]);const e=t.filters.map(r=>jf(r));let n=Ie.create(e,t.op);return n=vl(n),v1(n)?n:(J(n instanceof Ie),J(co(n)),J(n.filters.length>1),n.filters.reduce((r,i)=>jm(r,i)))}function jm(t,e){let n;return J(t instanceof de||t instanceof Ie),J(e instanceof de||e instanceof Ie),n=t instanceof de?e instanceof de?function(r,i){return Ie.create([r,i],"and")}(t,e):_w(t,e):e instanceof de?_w(e,t):function(r,i){if(J(r.filters.length>0&&i.filters.length>0),co(r)&&co(i))return DE(r,i.getFilters());const s=Df(r)?r:i,o=Df(r)?i:r,a=s.filters.map(c=>jm(c,o));return Ie.create(a,"or")}(t,e),vl(n)}function _w(t,e){if(co(e))return DE(e,t.getFilters());{const n=e.filters.map(r=>jm(t,r));return Ie.create(n,"or")}}function vl(t){if(J(t instanceof de||t instanceof Ie),t instanceof de)return t;const e=t.getFilters();if(e.length===1)return vl(e[0]);if(NE(t))return t;const n=e.map(i=>vl(i)),r=[];return n.forEach(i=>{i instanceof de?r.push(i):i instanceof Ie&&(i.op===t.op?r.push(...i.filters):r.push(i))}),r.length===1?r[0]:Ie.create(r,t.op)}/**
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
 */class EM{constructor(){this.sn=new zm}addToCollectionParentIndex(e,n){return this.sn.add(n),w.resolve()}getCollectionParents(e,n){return w.resolve(this.sn.getEntries(n))}addFieldIndex(e,n){return w.resolve()}deleteFieldIndex(e,n){return w.resolve()}getDocumentsMatchingTarget(e,n){return w.resolve(null)}getIndexType(e,n){return w.resolve(0)}getFieldIndexes(e,n){return w.resolve([])}getNextCollectionGroupToUpdate(e){return w.resolve(null)}getMinOffset(e,n){return w.resolve(nn.min())}getMinOffsetFromCollectionGroup(e,n){return w.resolve(nn.min())}updateCollectionGroup(e,n,r){return w.resolve()}updateIndexEntries(e,n){return w.resolve()}}class zm{constructor(){this.index={}}add(e){const n=e.lastSegment(),r=e.popLast(),i=this.index[n]||new Oe(me.comparator),s=!i.has(r);return this.index[n]=i.add(r),s}has(e){const n=e.lastSegment(),r=e.popLast(),i=this.index[n];return i&&i.has(r)}getEntries(e){return(this.index[e]||new Oe(me.comparator)).toArray()}}/**
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
 */const au=new Uint8Array(0);class TM{constructor(e,n){this.user=e,this.databaseId=n,this.rn=new zm,this.on=new pi(r=>ts(r),(r,i)=>Nc(r,i)),this.uid=e.uid||""}addToCollectionParentIndex(e,n){if(!this.rn.has(n)){const r=n.lastSegment(),i=n.popLast();e.addOnCommittedListener(()=>{this.rn.add(n)});const s={collectionId:r,parent:Vt(i)};return bw(e).put(s)}return w.resolve()}getCollectionParents(e,n){const r=[],i=IDBKeyRange.bound([n,""],[mE(n),""],!1,!0);return bw(e).j(i).next(s=>{for(const o of s){if(o.collectionId!==n)break;r.push(qn(o.parent))}return r})}addFieldIndex(e,n){const r=cu(e),i=function(o){return{indexId:o.indexId,collectionGroup:o.collectionGroup,fields:o.fields.map(a=>[a.fieldPath.canonicalString(),a.kind])}}(n);delete i.indexId;const s=r.add(i);if(n.indexState){const o=Xo(e);return s.next(a=>{o.put(mw(a,this.user,n.indexState.sequenceNumber,n.indexState.offset))})}return s.next()}deleteFieldIndex(e,n){const r=cu(e),i=Xo(e),s=Yo(e);return r.delete(n.indexId).next(()=>i.delete(IDBKeyRange.bound([n.indexId],[n.indexId+1],!1,!0))).next(()=>s.delete(IDBKeyRange.bound([n.indexId],[n.indexId+1],!1,!0)))}getDocumentsMatchingTarget(e,n){const r=Yo(e);let i=!0;const s=new Map;return w.forEach(this.un(n),o=>this.cn(e,o).next(a=>{i&&(i=!!a),s.set(o,a)})).next(()=>{if(i){let o=ce();const a=[];return w.forEach(s,(c,u)=>{var l;x("IndexedDbIndexManager",`Using index ${l=c,`id=${l.indexId}|cg=${l.collectionGroup}|f=${l.fields.map(_=>`${_.fieldPath}:${_.kind}`).join(",")}`} to execute ${ts(n)}`);const h=function(_,R){const M=xf(R);if(M===void 0)return null;for(const H of ml(_,M.fieldPath))switch(H.op){case"array-contains-any":return H.value.arrayValue.values||[];case"array-contains":return[H.value]}return null}(u,c),d=function(_,R){const M=new Map;for(const H of Si(R))for(const ne of ml(_,H.fieldPath))switch(ne.op){case"==":case"in":M.set(H.fieldPath.canonicalString(),ne.value);break;case"not-in":case"!=":return M.set(H.fieldPath.canonicalString(),ne.value),Array.from(M.values())}return null}(u,c),f=function(_,R){const M=[];let H=!0;for(const ne of Si(R)){const K=ne.kind===0?ew(_,ne.fieldPath,_.startAt):tw(_,ne.fieldPath,_.startAt);M.push(K.value),H&&(H=K.inclusive)}return new ni(M,H)}(u,c),m=function(_,R){const M=[];let H=!0;for(const ne of Si(R)){const K=ne.kind===0?tw(_,ne.fieldPath,_.endAt):ew(_,ne.fieldPath,_.endAt);M.push(K.value),H&&(H=K.inclusive)}return new ni(M,H)}(u,c),y=this.an(c,u,f),I=this.an(c,u,m),v=this.hn(c,u,d),E=this.ln(c.indexId,h,y,f.inclusive,I,m.inclusive,v);return w.forEach(E,_=>r.H(_,n.limit).next(R=>{R.forEach(M=>{const H=L.fromSegments(M.documentKey);o.has(H)||(o=o.add(H),a.push(H))})}))}).next(()=>a)}return w.resolve(null)})}un(e){let n=this.on.get(e);return n||(e.filters.length===0?n=[e]:n=IM(Ie.create(e.filters,"and")).map(r=>Lf(e.path,e.collectionGroup,e.orderBy,r.getFilters(),e.limit,e.startAt,e.endAt)),this.on.set(e,n),n)}ln(e,n,r,i,s,o,a){const c=(n!=null?n.length:1)*Math.max(r.length,s.length),u=c/(n!=null?n.length:1),l=[];for(let h=0;h<c;++h){const d=n?this.fn(n[h/u]):au,f=this.dn(e,d,r[h%u],i),m=this._n(e,d,s[h%u],o),y=a.map(I=>this.dn(e,d,I,!0));l.push(...this.createRange(f,m,y))}return l}dn(e,n,r,i){const s=new Pi(e,L.empty(),n,r);return i?s:s.He()}_n(e,n,r,i){const s=new Pi(e,L.empty(),n,r);return i?s.He():s}cn(e,n){const r=new bM(n),i=n.collectionGroup!=null?n.collectionGroup:n.path.lastSegment();return this.getFieldIndexes(e,i).next(s=>{let o=null;for(const a of s)r.Ze(a)&&(!o||a.fields.length>o.fields.length)&&(o=a);return o})}getIndexType(e,n){let r=2;const i=this.un(n);return w.forEach(i,s=>this.cn(e,s).next(o=>{o?r!==0&&o.fields.length<function(a){let c=new Oe(Je.comparator),u=!1;for(const l of a.filters)for(const h of l.getFlattenedFilters())h.field.isKeyField()||(h.op==="array-contains"||h.op==="array-contains-any"?u=!0:c=c.add(h.field));for(const l of a.orderBy)l.field.isKeyField()||(c=c.add(l.field));return c.size+(u?1:0)}(s)&&(r=1):r=0})).next(()=>function(s){return s.limit!==null}(n)&&i.length>1&&r===2?1:r)}wn(e,n){const r=new Qo;for(const i of Si(e)){const s=n.data.field(i.fieldPath);if(s==null)return null;const o=r.We(i.kind);Ni.be._e(s,o)}return r.Ge()}fn(e){const n=new Qo;return Ni.be._e(e,n.We(0)),n.Ge()}mn(e,n){const r=new Qo;return Ni.be._e(es(this.databaseId,n),r.We(function(i){const s=Si(i);return s.length===0?0:s[s.length-1].kind}(e))),r.Ge()}hn(e,n,r){if(r===null)return[];let i=[];i.push(new Qo);let s=0;for(const o of Si(e)){const a=r[s++];for(const c of i)if(this.gn(n,o.fieldPath)&&Za(a))i=this.yn(i,o,a);else{const u=c.We(o.kind);Ni.be._e(a,u)}}return this.pn(i)}an(e,n,r){return this.hn(e,n,r.position)}pn(e){const n=[];for(let r=0;r<e.length;++r)n[r]=e[r].Ge();return n}yn(e,n,r){const i=[...e],s=[];for(const o of r.arrayValue.values||[])for(const a of i){const c=new Qo;c.seed(a.Ge()),Ni.be._e(o,c.We(n.kind)),s.push(c)}return s}gn(e,n){return!!e.filters.find(r=>r instanceof de&&r.field.isEqual(n)&&(r.op==="in"||r.op==="not-in"))}getFieldIndexes(e,n){const r=cu(e),i=Xo(e);return(n?r.j("collectionGroupIndex",IDBKeyRange.bound(n,n)):r.j()).next(s=>{const o=[];return w.forEach(s,a=>i.get([a.indexId,this.uid]).next(c=>{o.push(function(u,l){const h=l?new fl(l.sequenceNumber,new nn(ss(l.readTime),new L(qn(l.documentKey)),l.largestBatchId)):fl.empty(),d=u.fields.map(([f,m])=>new oL(Je.fromServerFormat(f),m));return new gE(u.indexId,u.collectionGroup,d,h)}(a,c))})).next(()=>o)})}getNextCollectionGroupToUpdate(e){return this.getFieldIndexes(e).next(n=>n.length===0?null:(n.sort((r,i)=>{const s=r.indexState.sequenceNumber-i.indexState.sequenceNumber;return s!==0?s:oe(r.collectionGroup,i.collectionGroup)}),n[0].collectionGroup))}updateCollectionGroup(e,n,r){const i=cu(e),s=Xo(e);return this.In(e).next(o=>i.j("collectionGroupIndex",IDBKeyRange.bound(n,n)).next(a=>w.forEach(a,c=>s.put(mw(c.indexId,this.user,o,r)))))}updateIndexEntries(e,n){const r=new Map;return w.forEach(n,(i,s)=>{const o=r.get(i.collectionGroup);return(o?w.resolve(o):this.getFieldIndexes(e,i.collectionGroup)).next(a=>(r.set(i.collectionGroup,a),w.forEach(a,c=>this.Tn(e,i,c).next(u=>{const l=this.En(s,c);return u.isEqual(l)?w.resolve():this.An(e,s,c,u,l)}))))})}Rn(e,n,r,i){return Yo(e).put({indexId:i.indexId,uid:this.uid,arrayValue:i.arrayValue,directionalValue:i.directionalValue,orderedDocumentKey:this.mn(r,n.key),documentKey:n.key.path.toArray()})}vn(e,n,r,i){return Yo(e).delete([i.indexId,this.uid,i.arrayValue,i.directionalValue,this.mn(r,n.key),n.key.path.toArray()])}Tn(e,n,r){const i=Yo(e);let s=new Oe(Dr);return i.X({index:"documentKeyIndex",range:IDBKeyRange.only([r.indexId,this.uid,this.mn(r,n)])},(o,a)=>{s=s.add(new Pi(r.indexId,n,a.arrayValue,a.directionalValue))}).next(()=>s)}En(e,n){let r=new Oe(Dr);const i=this.wn(n,e);if(i==null)return r;const s=xf(n);if(s!=null){const o=e.data.field(s.fieldPath);if(Za(o))for(const a of o.arrayValue.values||[])r=r.add(new Pi(n.indexId,e.key,this.fn(a),i))}else r=r.add(new Pi(n.indexId,e.key,au,i));return r}An(e,n,r,i,s){x("IndexedDbIndexManager","Updating index entries for document '%s'",n.key);const o=[];return function(a,c,u,l,h){const d=a.getIterator(),f=c.getIterator();let m=ks(d),y=ks(f);for(;m||y;){let I=!1,v=!1;if(m&&y){const E=u(m,y);E<0?v=!0:E>0&&(I=!0)}else m!=null?v=!0:I=!0;I?(l(y),y=ks(f)):v?(h(m),m=ks(d)):(m=ks(d),y=ks(f))}}(i,s,Dr,a=>{o.push(this.Rn(e,n,r,a))},a=>{o.push(this.vn(e,n,r,a))}),w.waitFor(o)}In(e){let n=1;return Xo(e).X({index:"sequenceNumberIndex",reverse:!0,range:IDBKeyRange.upperBound([this.uid,Number.MAX_SAFE_INTEGER])},(r,i,s)=>{s.done(),n=i.sequenceNumber+1}).next(()=>n)}createRange(e,n,r){r=r.sort((o,a)=>Dr(o,a)).filter((o,a,c)=>!a||Dr(o,c[a-1])!==0);const i=[];i.push(e);for(const o of r){const a=Dr(o,e),c=Dr(o,n);if(a===0)i[0]=e.He();else if(a>0&&c<0)i.push(o),i.push(o.He());else if(c>0)break}i.push(n);const s=[];for(let o=0;o<i.length;o+=2){if(this.Pn(i[o],i[o+1]))return[];const a=[i[o].indexId,this.uid,i[o].arrayValue,i[o].directionalValue,au,[]],c=[i[o+1].indexId,this.uid,i[o+1].arrayValue,i[o+1].directionalValue,au,[]];s.push(IDBKeyRange.bound(a,c))}return s}Pn(e,n){return Dr(e,n)>0}getMinOffsetFromCollectionGroup(e,n){return this.getFieldIndexes(e,n).next(Iw)}getMinOffset(e,n){return w.mapArray(this.un(n),r=>this.cn(e,r).next(i=>i||q())).next(Iw)}}function bw(t){return mt(t,"collectionParents")}function Yo(t){return mt(t,"indexEntries")}function cu(t){return mt(t,"indexConfiguration")}function Xo(t){return mt(t,"indexState")}function Iw(t){J(t.length!==0);let e=t[0].indexState.offset,n=e.largestBatchId;for(let r=1;r<t.length;r++){const i=t[r].indexState.offset;Cm(i,e)<0&&(e=i),n<i.largestBatchId&&(n=i.largestBatchId)}return new nn(e.readTime,e.documentKey,n)}/**
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
 */const Ew={didRun:!1,sequenceNumbersCollected:0,targetsRemoved:0,documentsRemoved:0};class zt{constructor(e,n,r){this.cacheSizeCollectionThreshold=e,this.percentileToCollect=n,this.maximumSequenceNumbersToCollect=r}static withCacheSize(e){return new zt(e,zt.DEFAULT_COLLECTION_PERCENTILE,zt.DEFAULT_MAX_SEQUENCE_NUMBERS_TO_COLLECT)}}/**
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
 */function w1(t,e,n){const r=t.store("mutations"),i=t.store("documentMutations"),s=[],o=IDBKeyRange.only(n.batchId);let a=0;const c=r.X({range:o},(l,h,d)=>(a++,d.delete()));s.push(c.next(()=>{J(a===1)}));const u=[];for(const l of n.mutations){const h=IE(e,l.key.path,n.batchId);s.push(i.delete(h)),u.push(l.key)}return w.waitFor(s).next(()=>u)}function wl(t){if(!t)return 0;let e;if(t.document)e=t.document;else if(t.unknownDocument)e=t.unknownDocument;else{if(!t.noDocument)throw q();e=t.noDocument}return JSON.stringify(e).length}/**
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
 */zt.DEFAULT_COLLECTION_PERCENTILE=10,zt.DEFAULT_MAX_SEQUENCE_NUMBERS_TO_COLLECT=1e3,zt.DEFAULT=new zt(41943040,zt.DEFAULT_COLLECTION_PERCENTILE,zt.DEFAULT_MAX_SEQUENCE_NUMBERS_TO_COLLECT),zt.DISABLED=new zt(-1,0,0);class Sh{constructor(e,n,r,i){this.userId=e,this.serializer=n,this.indexManager=r,this.referenceDelegate=i,this.bn={}}static fe(e,n,r,i){J(e.uid!=="");const s=e.isAuthenticated()?e.uid:"";return new Sh(s,n,r,i)}checkEmpty(e){let n=!0;const r=IDBKeyRange.bound([this.userId,Number.NEGATIVE_INFINITY],[this.userId,Number.POSITIVE_INFINITY]);return Or(e).X({index:"userMutationsIndex",range:r},(i,s,o)=>{n=!1,o.done()}).next(()=>n)}addMutationBatch(e,n,r,i){const s=Ds(e),o=Or(e);return o.add({}).next(a=>{J(typeof a=="number");const c=new Mm(a,n,r,i),u=function(d,f,m){const y=m.baseMutations.map(v=>nc(d.le,v)),I=m.mutations.map(v=>nc(d.le,v));return{userId:f,batchId:m.batchId,localWriteTimeMs:m.localWriteTime.toMillis(),baseMutations:y,mutations:I}}(this.serializer,this.userId,c),l=[];let h=new Oe((d,f)=>oe(d.canonicalString(),f.canonicalString()));for(const d of i){const f=IE(this.userId,d.key.path,a);h=h.add(d.key.path.popLast()),l.push(o.put(u)),l.push(s.put(f,dL))}return h.forEach(d=>{l.push(this.indexManager.addToCollectionParentIndex(e,d))}),e.addOnCommittedListener(()=>{this.bn[a]=c.keys()}),w.waitFor(l).next(()=>c)})}lookupMutationBatch(e,n){return Or(e).get(n).next(r=>r?(J(r.userId===this.userId),Ri(this.serializer,r)):null)}Vn(e,n){return this.bn[n]?w.resolve(this.bn[n]):this.lookupMutationBatch(e,n).next(r=>{if(r){const i=r.keys();return this.bn[n]=i,i}return null})}getNextMutationBatchAfterBatchId(e,n){const r=n+1,i=IDBKeyRange.lowerBound([this.userId,r]);let s=null;return Or(e).X({index:"userMutationsIndex",range:i},(o,a,c)=>{a.userId===this.userId&&(J(a.batchId>=r),s=Ri(this.serializer,a)),c.done()}).next(()=>s)}getHighestUnacknowledgedBatchId(e){const n=IDBKeyRange.upperBound([this.userId,Number.POSITIVE_INFINITY]);let r=-1;return Or(e).X({index:"userMutationsIndex",range:n,reverse:!0},(i,s,o)=>{r=s.batchId,o.done()}).next(()=>r)}getAllMutationBatches(e){const n=IDBKeyRange.bound([this.userId,-1],[this.userId,Number.POSITIVE_INFINITY]);return Or(e).j("userMutationsIndex",n).next(r=>r.map(i=>Ri(this.serializer,i)))}getAllMutationBatchesAffectingDocumentKey(e,n){const r=Lu(this.userId,n.path),i=IDBKeyRange.lowerBound(r),s=[];return Ds(e).X({range:i},(o,a,c)=>{const[u,l,h]=o,d=qn(l);if(u===this.userId&&n.path.isEqual(d))return Or(e).get(h).next(f=>{if(!f)throw q();J(f.userId===this.userId),s.push(Ri(this.serializer,f))});c.done()}).next(()=>s)}getAllMutationBatchesAffectingDocumentKeys(e,n){let r=new Oe(oe);const i=[];return n.forEach(s=>{const o=Lu(this.userId,s.path),a=IDBKeyRange.lowerBound(o),c=Ds(e).X({range:a},(u,l,h)=>{const[d,f,m]=u,y=qn(f);d===this.userId&&s.path.isEqual(y)?r=r.add(m):h.done()});i.push(c)}),w.waitFor(i).next(()=>this.Sn(e,r))}getAllMutationBatchesAffectingQuery(e,n){const r=n.path,i=r.length+1,s=Lu(this.userId,r),o=IDBKeyRange.lowerBound(s);let a=new Oe(oe);return Ds(e).X({range:o},(c,u,l)=>{const[h,d,f]=c,m=qn(d);h===this.userId&&r.isPrefixOf(m)?m.length===i&&(a=a.add(f)):l.done()}).next(()=>this.Sn(e,a))}Sn(e,n){const r=[],i=[];return n.forEach(s=>{i.push(Or(e).get(s).next(o=>{if(o===null)throw q();J(o.userId===this.userId),r.push(Ri(this.serializer,o))}))}),w.waitFor(i).next(()=>r)}removeMutationBatch(e,n){return w1(e.at,this.userId,n).next(r=>(e.addOnCommittedListener(()=>{this.Dn(n.batchId)}),w.forEach(r,i=>this.referenceDelegate.markPotentiallyOrphaned(e,i))))}Dn(e){delete this.bn[e]}performConsistencyCheck(e){return this.checkEmpty(e).next(n=>{if(!n)return w.resolve();const r=IDBKeyRange.lowerBound([this.userId]),i=[];return Ds(e).X({range:r},(s,o,a)=>{if(s[0]===this.userId){const c=qn(s[1]);i.push(c)}else a.done()}).next(()=>{J(i.length===0)})})}containsKey(e,n){return _1(e,this.userId,n)}Cn(e){return b1(e).get(this.userId).next(n=>n||{userId:this.userId,lastAcknowledgedBatchId:-1,lastStreamToken:""})}}function _1(t,e,n){const r=Lu(e,n.path),i=r[1],s=IDBKeyRange.lowerBound(r);let o=!1;return Ds(t).X({range:s,Y:!0},(a,c,u)=>{const[l,h,d]=a;l===e&&h===i&&(o=!0),u.done()}).next(()=>o)}function Or(t){return mt(t,"mutations")}function Ds(t){return mt(t,"documentMutations")}function b1(t){return mt(t,"mutationQueues")}/**
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
 */class os{constructor(e){this.xn=e}next(){return this.xn+=2,this.xn}static Nn(){return new os(0)}static kn(){return new os(-1)}}/**
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
 */class SM{constructor(e,n){this.referenceDelegate=e,this.serializer=n}allocateTargetId(e){return this.Mn(e).next(n=>{const r=new os(n.highestTargetId);return n.highestTargetId=r.next(),this.On(e,n).next(()=>n.highestTargetId)})}getLastRemoteSnapshotVersion(e){return this.Mn(e).next(n=>X.fromTimestamp(new $e(n.lastRemoteSnapshotVersion.seconds,n.lastRemoteSnapshotVersion.nanoseconds)))}getHighestSequenceNumber(e){return this.Mn(e).next(n=>n.highestListenSequenceNumber)}setTargetsMetadata(e,n,r){return this.Mn(e).next(i=>(i.highestListenSequenceNumber=n,r&&(i.lastRemoteSnapshotVersion=r.toTimestamp()),n>i.highestListenSequenceNumber&&(i.highestListenSequenceNumber=n),this.On(e,i)))}addTargetData(e,n){return this.$n(e,n).next(()=>this.Mn(e).next(r=>(r.targetCount+=1,this.Fn(n,r),this.On(e,r))))}updateTargetData(e,n){return this.$n(e,n)}removeTargetData(e,n){return this.removeMatchingKeysForTargetId(e,n.targetId).next(()=>As(e).delete(n.targetId)).next(()=>this.Mn(e)).next(r=>(J(r.targetCount>0),r.targetCount-=1,this.On(e,r)))}removeTargets(e,n,r){let i=0;const s=[];return As(e).X((o,a)=>{const c=ca(a);c.sequenceNumber<=n&&r.get(c.targetId)===null&&(i++,s.push(this.removeTargetData(e,c)))}).next(()=>w.waitFor(s)).next(()=>i)}forEachTarget(e,n){return As(e).X((r,i)=>{const s=ca(i);n(s)})}Mn(e){return Tw(e).get("targetGlobalKey").next(n=>(J(n!==null),n))}On(e,n){return Tw(e).put("targetGlobalKey",n)}$n(e,n){return As(e).put(g1(this.serializer,n))}Fn(e,n){let r=!1;return e.targetId>n.highestTargetId&&(n.highestTargetId=e.targetId,r=!0),e.sequenceNumber>n.highestListenSequenceNumber&&(n.highestListenSequenceNumber=e.sequenceNumber,r=!0),r}getTargetCount(e){return this.Mn(e).next(n=>n.targetCount)}getTargetData(e,n){const r=ts(n),i=IDBKeyRange.bound([r,Number.NEGATIVE_INFINITY],[r,Number.POSITIVE_INFINITY]);let s=null;return As(e).X({range:i,index:"queryTargetsIndex"},(o,a,c)=>{const u=ca(a);Nc(n,u.target)&&(s=u,c.done())}).next(()=>s)}addMatchingKeys(e,n,r){const i=[],s=Vr(e);return n.forEach(o=>{const a=Vt(o.path);i.push(s.put({targetId:r,path:a})),i.push(this.referenceDelegate.addReference(e,r,o))}),w.waitFor(i)}removeMatchingKeys(e,n,r){const i=Vr(e);return w.forEach(n,s=>{const o=Vt(s.path);return w.waitFor([i.delete([r,o]),this.referenceDelegate.removeReference(e,r,s)])})}removeMatchingKeysForTargetId(e,n){const r=Vr(e),i=IDBKeyRange.bound([n],[n+1],!1,!0);return r.delete(i)}getMatchingKeysForTargetId(e,n){const r=IDBKeyRange.bound([n],[n+1],!1,!0),i=Vr(e);let s=ce();return i.X({range:r,Y:!0},(o,a,c)=>{const u=qn(o[1]),l=new L(u);s=s.add(l)}).next(()=>s)}containsKey(e,n){const r=Vt(n.path),i=IDBKeyRange.bound([r],[mE(r)],!1,!0);let s=0;return Vr(e).X({index:"documentTargetsIndex",Y:!0,range:i},([o,a],c,u)=>{o!==0&&(s++,u.done())}).next(()=>s>0)}he(e,n){return As(e).get(n).next(r=>r?ca(r):null)}}function As(t){return mt(t,"targets")}function Tw(t){return mt(t,"targetGlobal")}function Vr(t){return mt(t,"targetDocuments")}/**
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
 */function Sw([t,e],[n,r]){const i=oe(t,n);return i===0?oe(e,r):i}class kM{constructor(e){this.Bn=e,this.buffer=new Oe(Sw),this.Ln=0}qn(){return++this.Ln}Un(e){const n=[e,this.qn()];if(this.buffer.size<this.Bn)this.buffer=this.buffer.add(n);else{const r=this.buffer.last();Sw(n,r)<0&&(this.buffer=this.buffer.delete(r).add(n))}}get maxValue(){return this.buffer.last()[0]}}class AM{constructor(e,n,r){this.garbageCollector=e,this.asyncQueue=n,this.localStore=r,this.Kn=null}start(){this.garbageCollector.params.cacheSizeCollectionThreshold!==-1&&this.Gn(6e4)}stop(){this.Kn&&(this.Kn.cancel(),this.Kn=null)}get started(){return this.Kn!==null}Gn(e){x("LruGarbageCollector",`Garbage collection scheduled in ${e}ms`),this.Kn=this.asyncQueue.enqueueAfterDelay("lru_garbage_collection",e,async()=>{this.Kn=null;try{await this.localStore.collectGarbage(this.garbageCollector)}catch(n){fi(n)?x("LruGarbageCollector","Ignoring IndexedDB error during garbage collection: ",n):await di(n)}await this.Gn(3e5)})}}class CM{constructor(e,n){this.Qn=e,this.params=n}calculateTargetCount(e,n){return this.Qn.jn(e).next(r=>Math.floor(n/100*r))}nthSequenceNumber(e,n){if(n===0)return w.resolve(Kt.ct);const r=new kM(n);return this.Qn.forEachTarget(e,i=>r.Un(i.sequenceNumber)).next(()=>this.Qn.zn(e,i=>r.Un(i))).next(()=>r.maxValue)}removeTargets(e,n,r){return this.Qn.removeTargets(e,n,r)}removeOrphanedDocuments(e,n){return this.Qn.removeOrphanedDocuments(e,n)}collect(e,n){return this.params.cacheSizeCollectionThreshold===-1?(x("LruGarbageCollector","Garbage collection skipped; disabled"),w.resolve(Ew)):this.getCacheSize(e).next(r=>r<this.params.cacheSizeCollectionThreshold?(x("LruGarbageCollector",`Garbage collection skipped; Cache size ${r} is lower than threshold ${this.params.cacheSizeCollectionThreshold}`),Ew):this.Wn(e,n))}getCacheSize(e){return this.Qn.getCacheSize(e)}Wn(e,n){let r,i,s,o,a,c,u;const l=Date.now();return this.calculateTargetCount(e,this.params.percentileToCollect).next(h=>(h>this.params.maximumSequenceNumbersToCollect?(x("LruGarbageCollector",`Capping sequence numbers to collect down to the maximum of ${this.params.maximumSequenceNumbersToCollect} from ${h}`),i=this.params.maximumSequenceNumbersToCollect):i=h,o=Date.now(),this.nthSequenceNumber(e,i))).next(h=>(r=h,a=Date.now(),this.removeTargets(e,r,n))).next(h=>(s=h,c=Date.now(),this.removeOrphanedDocuments(e,r))).next(h=>(u=Date.now(),Cf()<=pe.DEBUG&&x("LruGarbageCollector",`LRU Garbage Collection
	Counted targets in ${o-l}ms
	Determined least recently used ${i} in `+(a-o)+`ms
	Removed ${s} targets in `+(c-a)+`ms
	Removed ${h} documents in `+(u-c)+`ms
Total Duration: ${u-l}ms`),w.resolve({didRun:!0,sequenceNumbersCollected:i,targetsRemoved:s,documentsRemoved:h})))}}function xM(t,e){return new CM(t,e)}/**
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
 */class RM{constructor(e,n){this.db=e,this.garbageCollector=xM(this,n)}jn(e){const n=this.Hn(e);return this.db.getTargetCache().getTargetCount(e).next(r=>n.next(i=>r+i))}Hn(e){let n=0;return this.zn(e,r=>{n++}).next(()=>n)}forEachTarget(e,n){return this.db.getTargetCache().forEachTarget(e,n)}zn(e,n){return this.Jn(e,(r,i)=>n(i))}addReference(e,n,r){return uu(e,r)}removeReference(e,n,r){return uu(e,r)}removeTargets(e,n,r){return this.db.getTargetCache().removeTargets(e,n,r)}markPotentiallyOrphaned(e,n){return uu(e,n)}Yn(e,n){return function(r,i){let s=!1;return b1(r).Z(o=>_1(r,o,i).next(a=>(a&&(s=!0),w.resolve(!a)))).next(()=>s)}(e,n)}removeOrphanedDocuments(e,n){const r=this.db.getRemoteDocumentCache().newChangeBuffer(),i=[];let s=0;return this.Jn(e,(o,a)=>{if(a<=n){const c=this.Yn(e,o).next(u=>{if(!u)return s++,r.getEntry(e,o).next(()=>(r.removeEntry(o,X.min()),Vr(e).delete([0,Vt(o.path)])))});i.push(c)}}).next(()=>w.waitFor(i)).next(()=>r.apply(e)).next(()=>s)}removeTarget(e,n){const r=n.withSequenceNumber(e.currentSequenceNumber);return this.db.getTargetCache().updateTargetData(e,r)}updateLimboDocument(e,n){return uu(e,n)}Jn(e,n){const r=Vr(e);let i,s=Kt.ct;return r.X({index:"documentTargetsIndex"},([o,a],{path:c,sequenceNumber:u})=>{o===0?(s!==Kt.ct&&n(new L(qn(i)),s),s=u,i=c):s=Kt.ct}).next(()=>{s!==Kt.ct&&n(new L(qn(i)),s)})}getCacheSize(e){return this.db.getRemoteDocumentCache().getSize(e)}}function uu(t,e){return Vr(t).put(function(n,r){return{targetId:0,path:Vt(n.path),sequenceNumber:r}}(e,t.currentSequenceNumber))}/**
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
 */class I1{constructor(){this.changes=new pi(e=>e.toString(),(e,n)=>e.isEqual(n)),this.changesApplied=!1}addEntry(e){this.assertNotApplied(),this.changes.set(e.key,e)}removeEntry(e,n){this.assertNotApplied(),this.changes.set(e,Pe.newInvalidDocument(e).setReadTime(n))}getEntry(e,n){this.assertNotApplied();const r=this.changes.get(n);return r!==void 0?w.resolve(r):this.getFromCache(e,n)}getEntries(e,n){return this.getAllFromCache(e,n)}apply(e){return this.assertNotApplied(),this.changesApplied=!0,this.applyChanges(e)}assertNotApplied(){}}/**
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
 */class NM{constructor(e){this.serializer=e}setIndexManager(e){this.indexManager=e}addEntry(e,n,r){return Ii(e).put(r)}removeEntry(e,n,r){return Ii(e).delete(function(i,s){const o=i.path.toArray();return[o.slice(0,o.length-2),o[o.length-2],yl(s),o[o.length-1]]}(n,r))}updateMetadata(e,n){return this.getMetadata(e).next(r=>(r.byteSize+=n,this.Xn(e,r)))}getEntry(e,n){let r=Pe.newInvalidDocument(n);return Ii(e).X({index:"documentKeyIndex",range:IDBKeyRange.only(Jo(n))},(i,s)=>{r=this.Zn(n,s)}).next(()=>r)}ts(e,n){let r={size:0,document:Pe.newInvalidDocument(n)};return Ii(e).X({index:"documentKeyIndex",range:IDBKeyRange.only(Jo(n))},(i,s)=>{r={document:this.Zn(n,s),size:wl(s)}}).next(()=>r)}getEntries(e,n){let r=Wt();return this.es(e,n,(i,s)=>{const o=this.Zn(i,s);r=r.insert(i,o)}).next(()=>r)}ns(e,n){let r=Wt(),i=new Ce(L.comparator);return this.es(e,n,(s,o)=>{const a=this.Zn(s,o);r=r.insert(s,a),i=i.insert(s,wl(o))}).next(()=>({documents:r,ss:i}))}es(e,n,r){if(n.isEmpty())return w.resolve();let i=new Oe(Cw);n.forEach(c=>i=i.add(c));const s=IDBKeyRange.bound(Jo(i.first()),Jo(i.last())),o=i.getIterator();let a=o.getNext();return Ii(e).X({index:"documentKeyIndex",range:s},(c,u,l)=>{const h=L.fromSegments([...u.prefixPath,u.collectionGroup,u.documentId]);for(;a&&Cw(a,h)<0;)r(a,null),a=o.getNext();a&&a.isEqual(h)&&(r(a,u),a=o.hasNext()?o.getNext():null),a?l.G(Jo(a)):l.done()}).next(()=>{for(;a;)r(a,null),a=o.hasNext()?o.getNext():null})}getDocumentsMatchingQuery(e,n,r,i){const s=n.path,o=[s.popLast().toArray(),s.lastSegment(),yl(r.readTime),r.documentKey.path.isEmpty()?"":r.documentKey.path.lastSegment()],a=[s.popLast().toArray(),s.lastSegment(),[Number.MAX_SAFE_INTEGER,Number.MAX_SAFE_INTEGER],""];return Ii(e).j(IDBKeyRange.bound(o,a,!0)).next(c=>{let u=Wt();for(const l of c){const h=this.Zn(L.fromSegments(l.prefixPath.concat(l.collectionGroup,l.documentId)),l);h.isFoundDocument()&&(Dc(n,h)||i.has(h.key))&&(u=u.insert(h.key,h))}return u})}getAllFromCollectionGroup(e,n,r,i){let s=Wt();const o=Aw(n,r),a=Aw(n,nn.max());return Ii(e).X({index:"collectionGroupIndex",range:IDBKeyRange.bound(o,a,!0)},(c,u,l)=>{const h=this.Zn(L.fromSegments(u.prefixPath.concat(u.collectionGroup,u.documentId)),u);s=s.insert(h.key,h),s.size===i&&l.done()}).next(()=>s)}newChangeBuffer(e){return new PM(this,!!e&&e.trackRemovals)}getSize(e){return this.getMetadata(e).next(n=>n.byteSize)}getMetadata(e){return kw(e).get("remoteDocumentGlobalKey").next(n=>(J(!!n),n))}Xn(e,n){return kw(e).put("remoteDocumentGlobalKey",n)}Zn(e,n){if(n){const r=mM(this.serializer,n);if(!(r.isNoDocument()&&r.version.isEqual(X.min())))return r}return Pe.newInvalidDocument(e)}}function E1(t){return new NM(t)}class PM extends I1{constructor(e,n){super(),this.rs=e,this.trackRemovals=n,this.os=new pi(r=>r.toString(),(r,i)=>r.isEqual(i))}applyChanges(e){const n=[];let r=0,i=new Oe((s,o)=>oe(s.canonicalString(),o.canonicalString()));return this.changes.forEach((s,o)=>{const a=this.os.get(s);if(n.push(this.rs.removeEntry(e,s,a.readTime)),o.isValidDocument()){const c=fw(this.rs.serializer,o);i=i.add(s.path.popLast());const u=wl(c);r+=u-a.size,n.push(this.rs.addEntry(e,s,c))}else if(r-=a.size,this.trackRemovals){const c=fw(this.rs.serializer,o.convertToNoDocument(X.min()));n.push(this.rs.addEntry(e,s,c))}}),i.forEach(s=>{n.push(this.rs.indexManager.addToCollectionParentIndex(e,s))}),n.push(this.rs.updateMetadata(e,r)),w.waitFor(n)}getFromCache(e,n){return this.rs.ts(e,n).next(r=>(this.os.set(n,{size:r.size,readTime:r.document.readTime}),r.document))}getAllFromCache(e,n){return this.rs.ns(e,n).next(({documents:r,ss:i})=>(i.forEach((s,o)=>{this.os.set(s,{size:o,readTime:r.get(s).readTime})}),r))}}function kw(t){return mt(t,"remoteDocumentGlobal")}function Ii(t){return mt(t,"remoteDocumentsV14")}function Jo(t){const e=t.path.toArray();return[e.slice(0,e.length-2),e[e.length-2],e[e.length-1]]}function Aw(t,e){const n=e.documentKey.path.toArray();return[t,yl(e.readTime),n.slice(0,n.length-2),n.length>0?n[n.length-1]:""]}function Cw(t,e){const n=t.path.toArray(),r=e.path.toArray();let i=0;for(let s=0;s<n.length-2&&s<r.length-2;++s)if(i=oe(n[s],r[s]),i)return i;return i=oe(n.length,r.length),i||(i=oe(n[n.length-2],r[r.length-2]),i||oe(n[n.length-1],r[r.length-1]))}/**
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
 */class DM{constructor(e,n){this.overlayedDocument=e,this.mutatedFields=n}}/**
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
 */class T1{constructor(e,n,r,i){this.remoteDocumentCache=e,this.mutationQueue=n,this.documentOverlayCache=r,this.indexManager=i}getDocument(e,n){let r=null;return this.documentOverlayCache.getOverlay(e,n).next(i=>(r=i,this.remoteDocumentCache.getEntry(e,n))).next(i=>(r!==null&&Ia(r.mutation,i,Gt.empty(),$e.now()),i))}getDocuments(e,n){return this.remoteDocumentCache.getEntries(e,n).next(r=>this.getLocalViewOfDocuments(e,r,ce()).next(()=>r))}getLocalViewOfDocuments(e,n,r=ce()){const i=jn();return this.populateOverlays(e,i,n).next(()=>this.computeViews(e,n,i,r).next(s=>{let o=oa();return s.forEach((a,c)=>{o=o.insert(a,c.overlayedDocument)}),o}))}getOverlayedDocuments(e,n){const r=jn();return this.populateOverlays(e,r,n).next(()=>this.computeViews(e,n,r,ce()))}populateOverlays(e,n,r){const i=[];return r.forEach(s=>{n.has(s)||i.push(s)}),this.documentOverlayCache.getOverlays(e,i).next(s=>{s.forEach((o,a)=>{n.set(o,a)})})}computeViews(e,n,r,i){let s=Wt();const o=ba(),a=ba();return n.forEach((c,u)=>{const l=r.get(u.key);i.has(u.key)&&(l===void 0||l.mutation instanceof Er)?s=s.insert(u.key,u):l!==void 0?(o.set(u.key,l.mutation.getFieldMask()),Ia(l.mutation,u,l.mutation.getFieldMask(),$e.now())):o.set(u.key,Gt.empty())}),this.recalculateAndSaveOverlays(e,s).next(c=>(c.forEach((u,l)=>o.set(u,l)),n.forEach((u,l)=>{var h;return a.set(u,new DM(l,(h=o.get(u))!==null&&h!==void 0?h:null))}),a))}recalculateAndSaveOverlays(e,n){const r=ba();let i=new Ce((o,a)=>o-a),s=ce();return this.mutationQueue.getAllMutationBatchesAffectingDocumentKeys(e,n).next(o=>{for(const a of o)a.keys().forEach(c=>{const u=n.get(c);if(u===null)return;let l=r.get(c)||Gt.empty();l=a.applyToLocalView(u,l),r.set(c,l);const h=(i.get(a.batchId)||ce()).add(c);i=i.insert(a.batchId,h)})}).next(()=>{const o=[],a=i.getReverseIterator();for(;a.hasNext();){const c=a.getNext(),u=c.key,l=c.value,h=jE();l.forEach(d=>{if(!s.has(d)){const f=XE(n.get(d),r.get(d));f!==null&&h.set(d,f),s=s.add(d)}}),o.push(this.documentOverlayCache.saveOverlays(e,u,h))}return w.waitFor(o)}).next(()=>r)}recalculateAndSaveOverlaysForDocumentKeys(e,n){return this.remoteDocumentCache.getEntries(e,n).next(r=>this.recalculateAndSaveOverlays(e,r))}getDocumentsMatchingQuery(e,n,r){return function(i){return L.isDocumentKey(i.path)&&i.collectionGroup===null&&i.filters.length===0}(n)?this.getDocumentsMatchingDocumentQuery(e,n.path):Dm(n)?this.getDocumentsMatchingCollectionGroupQuery(e,n,r):this.getDocumentsMatchingCollectionQuery(e,n,r)}getNextDocuments(e,n,r,i){return this.remoteDocumentCache.getAllFromCollectionGroup(e,n,r,i).next(s=>{const o=i-s.size>0?this.documentOverlayCache.getOverlaysForCollectionGroup(e,n,r.largestBatchId,i-s.size):w.resolve(jn());let a=-1,c=s;return o.next(u=>w.forEach(u,(l,h)=>(a<h.largestBatchId&&(a=h.largestBatchId),s.get(l)?w.resolve():this.remoteDocumentCache.getEntry(e,l).next(d=>{c=c.insert(l,d)}))).next(()=>this.populateOverlays(e,u,s)).next(()=>this.computeViews(e,c,u,ce())).next(l=>({batchId:a,changes:qE(l)})))})}getDocumentsMatchingDocumentQuery(e,n){return this.getDocument(e,new L(n)).next(r=>{let i=oa();return r.isFoundDocument()&&(i=i.insert(r.key,r)),i})}getDocumentsMatchingCollectionGroupQuery(e,n,r){const i=n.collectionGroup;let s=oa();return this.indexManager.getCollectionParents(e,i).next(o=>w.forEach(o,a=>{const c=function(u,l){return new Ir(l,null,u.explicitOrderBy.slice(),u.filters.slice(),u.limit,u.limitType,u.startAt,u.endAt)}(n,a.child(i));return this.getDocumentsMatchingCollectionQuery(e,c,r).next(u=>{u.forEach((l,h)=>{s=s.insert(l,h)})})}).next(()=>s))}getDocumentsMatchingCollectionQuery(e,n,r){let i;return this.documentOverlayCache.getOverlaysForCollection(e,n.path,r.largestBatchId).next(s=>(i=s,this.remoteDocumentCache.getDocumentsMatchingQuery(e,n,r,i))).next(s=>{i.forEach((a,c)=>{const u=c.getKey();s.get(u)===null&&(s=s.insert(u,Pe.newInvalidDocument(u)))});let o=oa();return s.forEach((a,c)=>{const u=i.get(a);u!==void 0&&Ia(u.mutation,c,Gt.empty(),$e.now()),Dc(n,c)&&(o=o.insert(a,c))}),o})}}/**
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
 */class OM{constructor(e){this.serializer=e,this.us=new Map,this.cs=new Map}getBundleMetadata(e,n){return w.resolve(this.us.get(n))}saveBundleMetadata(e,n){var r;return this.us.set(n.id,{id:(r=n).id,version:r.version,createTime:Ze(r.createTime)}),w.resolve()}getNamedQuery(e,n){return w.resolve(this.cs.get(n))}saveNamedQuery(e,n){return this.cs.set(n.name,function(r){return{name:r.name,query:qm(r.bundledQuery),readTime:Ze(r.readTime)}}(n)),w.resolve()}}/**
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
 */class LM{constructor(){this.overlays=new Ce(L.comparator),this.hs=new Map}getOverlay(e,n){return w.resolve(this.overlays.get(n))}getOverlays(e,n){const r=jn();return w.forEach(n,i=>this.getOverlay(e,i).next(s=>{s!==null&&r.set(i,s)})).next(()=>r)}saveOverlays(e,n,r){return r.forEach((i,s)=>{this.de(e,n,s)}),w.resolve()}removeOverlaysForBatchId(e,n,r){const i=this.hs.get(r);return i!==void 0&&(i.forEach(s=>this.overlays=this.overlays.remove(s)),this.hs.delete(r)),w.resolve()}getOverlaysForCollection(e,n,r){const i=jn(),s=n.length+1,o=new L(n.child("")),a=this.overlays.getIteratorFrom(o);for(;a.hasNext();){const c=a.getNext().value,u=c.getKey();if(!n.isPrefixOf(u.path))break;u.path.length===s&&c.largestBatchId>r&&i.set(c.getKey(),c)}return w.resolve(i)}getOverlaysForCollectionGroup(e,n,r,i){let s=new Ce((u,l)=>u-l);const o=this.overlays.getIterator();for(;o.hasNext();){const u=o.getNext().value;if(u.getKey().getCollectionGroup()===n&&u.largestBatchId>r){let l=s.get(u.largestBatchId);l===null&&(l=jn(),s=s.insert(u.largestBatchId,l)),l.set(u.getKey(),u)}}const a=jn(),c=s.getIterator();for(;c.hasNext()&&(c.getNext().value.forEach((u,l)=>a.set(u,l)),!(a.size()>=i)););return w.resolve(a)}de(e,n,r){const i=this.overlays.get(r.key);if(i!==null){const o=this.hs.get(i.largestBatchId).delete(r.key);this.hs.set(i.largestBatchId,o)}this.overlays=this.overlays.insert(r.key,new Um(n,r));let s=this.hs.get(n);s===void 0&&(s=ce(),this.hs.set(n,s)),this.hs.set(n,s.add(r.key))}}/**
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
 */class Hm{constructor(){this.ls=new Oe(lt.fs),this.ds=new Oe(lt._s)}isEmpty(){return this.ls.isEmpty()}addReference(e,n){const r=new lt(e,n);this.ls=this.ls.add(r),this.ds=this.ds.add(r)}ws(e,n){e.forEach(r=>this.addReference(r,n))}removeReference(e,n){this.gs(new lt(e,n))}ys(e,n){e.forEach(r=>this.removeReference(r,n))}ps(e){const n=new L(new me([])),r=new lt(n,e),i=new lt(n,e+1),s=[];return this.ds.forEachInRange([r,i],o=>{this.gs(o),s.push(o.key)}),s}Is(){this.ls.forEach(e=>this.gs(e))}gs(e){this.ls=this.ls.delete(e),this.ds=this.ds.delete(e)}Ts(e){const n=new L(new me([])),r=new lt(n,e),i=new lt(n,e+1);let s=ce();return this.ds.forEachInRange([r,i],o=>{s=s.add(o.key)}),s}containsKey(e){const n=new lt(e,0),r=this.ls.firstAfterOrEqual(n);return r!==null&&e.isEqual(r.key)}}class lt{constructor(e,n){this.key=e,this.Es=n}static fs(e,n){return L.comparator(e.key,n.key)||oe(e.Es,n.Es)}static _s(e,n){return oe(e.Es,n.Es)||L.comparator(e.key,n.key)}}/**
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
 */class MM{constructor(e,n){this.indexManager=e,this.referenceDelegate=n,this.mutationQueue=[],this.As=1,this.Rs=new Oe(lt.fs)}checkEmpty(e){return w.resolve(this.mutationQueue.length===0)}addMutationBatch(e,n,r,i){const s=this.As;this.As++,this.mutationQueue.length>0&&this.mutationQueue[this.mutationQueue.length-1];const o=new Mm(s,n,r,i);this.mutationQueue.push(o);for(const a of i)this.Rs=this.Rs.add(new lt(a.key,s)),this.indexManager.addToCollectionParentIndex(e,a.key.path.popLast());return w.resolve(o)}lookupMutationBatch(e,n){return w.resolve(this.vs(n))}getNextMutationBatchAfterBatchId(e,n){const r=n+1,i=this.Ps(r),s=i<0?0:i;return w.resolve(this.mutationQueue.length>s?this.mutationQueue[s]:null)}getHighestUnacknowledgedBatchId(){return w.resolve(this.mutationQueue.length===0?-1:this.As-1)}getAllMutationBatches(e){return w.resolve(this.mutationQueue.slice())}getAllMutationBatchesAffectingDocumentKey(e,n){const r=new lt(n,0),i=new lt(n,Number.POSITIVE_INFINITY),s=[];return this.Rs.forEachInRange([r,i],o=>{const a=this.vs(o.Es);s.push(a)}),w.resolve(s)}getAllMutationBatchesAffectingDocumentKeys(e,n){let r=new Oe(oe);return n.forEach(i=>{const s=new lt(i,0),o=new lt(i,Number.POSITIVE_INFINITY);this.Rs.forEachInRange([s,o],a=>{r=r.add(a.Es)})}),w.resolve(this.bs(r))}getAllMutationBatchesAffectingQuery(e,n){const r=n.path,i=r.length+1;let s=r;L.isDocumentKey(s)||(s=s.child(""));const o=new lt(new L(s),0);let a=new Oe(oe);return this.Rs.forEachWhile(c=>{const u=c.key.path;return!!r.isPrefixOf(u)&&(u.length===i&&(a=a.add(c.Es)),!0)},o),w.resolve(this.bs(a))}bs(e){const n=[];return e.forEach(r=>{const i=this.vs(r);i!==null&&n.push(i)}),n}removeMutationBatch(e,n){J(this.Vs(n.batchId,"removed")===0),this.mutationQueue.shift();let r=this.Rs;return w.forEach(n.mutations,i=>{const s=new lt(i.key,n.batchId);return r=r.delete(s),this.referenceDelegate.markPotentiallyOrphaned(e,i.key)}).next(()=>{this.Rs=r})}Dn(e){}containsKey(e,n){const r=new lt(n,0),i=this.Rs.firstAfterOrEqual(r);return w.resolve(n.isEqual(i&&i.key))}performConsistencyCheck(e){return this.mutationQueue.length,w.resolve()}Vs(e,n){return this.Ps(e)}Ps(e){return this.mutationQueue.length===0?0:e-this.mutationQueue[0].batchId}vs(e){const n=this.Ps(e);return n<0||n>=this.mutationQueue.length?null:this.mutationQueue[n]}}/**
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
 */class FM{constructor(e){this.Ss=e,this.docs=new Ce(L.comparator),this.size=0}setIndexManager(e){this.indexManager=e}addEntry(e,n){const r=n.key,i=this.docs.get(r),s=i?i.size:0,o=this.Ss(n);return this.docs=this.docs.insert(r,{document:n.mutableCopy(),size:o}),this.size+=o-s,this.indexManager.addToCollectionParentIndex(e,r.path.popLast())}removeEntry(e){const n=this.docs.get(e);n&&(this.docs=this.docs.remove(e),this.size-=n.size)}getEntry(e,n){const r=this.docs.get(n);return w.resolve(r?r.document.mutableCopy():Pe.newInvalidDocument(n))}getEntries(e,n){let r=Wt();return n.forEach(i=>{const s=this.docs.get(i);r=r.insert(i,s?s.document.mutableCopy():Pe.newInvalidDocument(i))}),w.resolve(r)}getDocumentsMatchingQuery(e,n,r,i){let s=Wt();const o=n.path,a=new L(o.child("")),c=this.docs.getIteratorFrom(a);for(;c.hasNext();){const{key:u,value:{document:l}}=c.getNext();if(!o.isPrefixOf(u.path))break;u.path.length>o.length+1||Cm(vE(l),r)<=0||(i.has(l.key)||Dc(n,l))&&(s=s.insert(l.key,l.mutableCopy()))}return w.resolve(s)}getAllFromCollectionGroup(e,n,r,i){q()}Ds(e,n){return w.forEach(this.docs,r=>n(r))}newChangeBuffer(e){return new UM(this)}getSize(e){return w.resolve(this.size)}}class UM extends I1{constructor(e){super(),this.rs=e}applyChanges(e){const n=[];return this.changes.forEach((r,i)=>{i.isValidDocument()?n.push(this.rs.addEntry(e,i)):this.rs.removeEntry(r)}),w.waitFor(n)}getFromCache(e,n){return this.rs.getEntry(e,n)}getAllFromCache(e,n){return this.rs.getEntries(e,n)}}/**
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
 */class VM{constructor(e){this.persistence=e,this.Cs=new pi(n=>ts(n),Nc),this.lastRemoteSnapshotVersion=X.min(),this.highestTargetId=0,this.xs=0,this.Ns=new Hm,this.targetCount=0,this.ks=os.Nn()}forEachTarget(e,n){return this.Cs.forEach((r,i)=>n(i)),w.resolve()}getLastRemoteSnapshotVersion(e){return w.resolve(this.lastRemoteSnapshotVersion)}getHighestSequenceNumber(e){return w.resolve(this.xs)}allocateTargetId(e){return this.highestTargetId=this.ks.next(),w.resolve(this.highestTargetId)}setTargetsMetadata(e,n,r){return r&&(this.lastRemoteSnapshotVersion=r),n>this.xs&&(this.xs=n),w.resolve()}$n(e){this.Cs.set(e.target,e);const n=e.targetId;n>this.highestTargetId&&(this.ks=new os(n),this.highestTargetId=n),e.sequenceNumber>this.xs&&(this.xs=e.sequenceNumber)}addTargetData(e,n){return this.$n(n),this.targetCount+=1,w.resolve()}updateTargetData(e,n){return this.$n(n),w.resolve()}removeTargetData(e,n){return this.Cs.delete(n.target),this.Ns.ps(n.targetId),this.targetCount-=1,w.resolve()}removeTargets(e,n,r){let i=0;const s=[];return this.Cs.forEach((o,a)=>{a.sequenceNumber<=n&&r.get(a.targetId)===null&&(this.Cs.delete(o),s.push(this.removeMatchingKeysForTargetId(e,a.targetId)),i++)}),w.waitFor(s).next(()=>i)}getTargetCount(e){return w.resolve(this.targetCount)}getTargetData(e,n){const r=this.Cs.get(n)||null;return w.resolve(r)}addMatchingKeys(e,n,r){return this.Ns.ws(n,r),w.resolve()}removeMatchingKeys(e,n,r){this.Ns.ys(n,r);const i=this.persistence.referenceDelegate,s=[];return i&&n.forEach(o=>{s.push(i.markPotentiallyOrphaned(e,o))}),w.waitFor(s)}removeMatchingKeysForTargetId(e,n){return this.Ns.ps(n),w.resolve()}getMatchingKeysForTargetId(e,n){const r=this.Ns.Ts(n);return w.resolve(r)}containsKey(e,n){return w.resolve(this.Ns.containsKey(n))}}/**
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
 */class S1{constructor(e,n){this.Ms={},this.overlays={},this.Os=new Kt(0),this.$s=!1,this.$s=!0,this.referenceDelegate=e(this),this.Fs=new VM(this),this.indexManager=new EM,this.remoteDocumentCache=function(r){return new FM(r)}(r=>this.referenceDelegate.Bs(r)),this.serializer=new m1(n),this.Ls=new OM(this.serializer)}start(){return Promise.resolve()}shutdown(){return this.$s=!1,Promise.resolve()}get started(){return this.$s}setDatabaseDeletedListener(){}setNetworkEnabled(){}getIndexManager(e){return this.indexManager}getDocumentOverlayCache(e){let n=this.overlays[e.toKey()];return n||(n=new LM,this.overlays[e.toKey()]=n),n}getMutationQueue(e,n){let r=this.Ms[e.toKey()];return r||(r=new MM(n,this.referenceDelegate),this.Ms[e.toKey()]=r),r}getTargetCache(){return this.Fs}getRemoteDocumentCache(){return this.remoteDocumentCache}getBundleCache(){return this.Ls}runTransaction(e,n,r){x("MemoryPersistence","Starting transaction:",e);const i=new $M(this.Os.next());return this.referenceDelegate.qs(),r(i).next(s=>this.referenceDelegate.Us(i).next(()=>s)).toPromise().then(s=>(i.raiseOnCommittedEvent(),s))}Ks(e,n){return w.or(Object.values(this.Ms).map(r=>()=>r.containsKey(e,n)))}}class $M extends _E{constructor(e){super(),this.currentSequenceNumber=e}}class kh{constructor(e){this.persistence=e,this.Gs=new Hm,this.Qs=null}static js(e){return new kh(e)}get zs(){if(this.Qs)return this.Qs;throw q()}addReference(e,n,r){return this.Gs.addReference(r,n),this.zs.delete(r.toString()),w.resolve()}removeReference(e,n,r){return this.Gs.removeReference(r,n),this.zs.add(r.toString()),w.resolve()}markPotentiallyOrphaned(e,n){return this.zs.add(n.toString()),w.resolve()}removeTarget(e,n){this.Gs.ps(n.targetId).forEach(i=>this.zs.add(i.toString()));const r=this.persistence.getTargetCache();return r.getMatchingKeysForTargetId(e,n.targetId).next(i=>{i.forEach(s=>this.zs.add(s.toString()))}).next(()=>r.removeTargetData(e,n))}qs(){this.Qs=new Set}Us(e){const n=this.persistence.getRemoteDocumentCache().newChangeBuffer();return w.forEach(this.zs,r=>{const i=L.fromPath(r);return this.Ws(e,i).next(s=>{s||n.removeEntry(i,X.min())})}).next(()=>(this.Qs=null,n.apply(e)))}updateLimboDocument(e,n){return this.Ws(e,n).next(r=>{r?this.zs.delete(n.toString()):this.zs.add(n.toString())})}Bs(e){return 0}Ws(e,n){return w.or([()=>w.resolve(this.Gs.containsKey(n)),()=>this.persistence.getTargetCache().containsKey(e,n),()=>this.persistence.Ks(e,n)])}}/**
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
 */class BM{constructor(e){this.serializer=e}$(e,n,r,i){const s=new wh("createOrUpgrade",n);r<1&&i>=1&&(function(a){a.createObjectStore("owner")}(e),function(a){a.createObjectStore("mutationQueues",{keyPath:"userId"}),a.createObjectStore("mutations",{keyPath:"batchId",autoIncrement:!0}).createIndex("userMutationsIndex",zv,{unique:!0}),a.createObjectStore("documentMutations")}(e),xw(e),function(a){a.createObjectStore("remoteDocuments")}(e));let o=w.resolve();return r<3&&i>=3&&(r!==0&&(function(a){a.deleteObjectStore("targetDocuments"),a.deleteObjectStore("targets"),a.deleteObjectStore("targetGlobal")}(e),xw(e)),o=o.next(()=>function(a){const c=a.store("targetGlobal"),u={highestTargetId:0,highestListenSequenceNumber:0,lastRemoteSnapshotVersion:X.min().toTimestamp(),targetCount:0};return c.put("targetGlobalKey",u)}(s))),r<4&&i>=4&&(r!==0&&(o=o.next(()=>function(a,c){return c.store("mutations").j().next(u=>{a.deleteObjectStore("mutations"),a.createObjectStore("mutations",{keyPath:"batchId",autoIncrement:!0}).createIndex("userMutationsIndex",zv,{unique:!0});const l=c.store("mutations"),h=u.map(d=>l.put(d));return w.waitFor(h)})}(e,s))),o=o.next(()=>{(function(a){a.createObjectStore("clientMetadata",{keyPath:"clientId"})})(e)})),r<5&&i>=5&&(o=o.next(()=>this.Js(s))),r<6&&i>=6&&(o=o.next(()=>(function(a){a.createObjectStore("remoteDocumentGlobal")}(e),this.Ys(s)))),r<7&&i>=7&&(o=o.next(()=>this.Xs(s))),r<8&&i>=8&&(o=o.next(()=>this.Zs(e,s))),r<9&&i>=9&&(o=o.next(()=>{(function(a){a.objectStoreNames.contains("remoteDocumentChanges")&&a.deleteObjectStore("remoteDocumentChanges")})(e)})),r<10&&i>=10&&(o=o.next(()=>this.ti(s))),r<11&&i>=11&&(o=o.next(()=>{(function(a){a.createObjectStore("bundles",{keyPath:"bundleId"})})(e),function(a){a.createObjectStore("namedQueries",{keyPath:"name"})}(e)})),r<12&&i>=12&&(o=o.next(()=>{(function(a){const c=a.createObjectStore("documentOverlays",{keyPath:TL});c.createIndex("collectionPathOverlayIndex",SL,{unique:!1}),c.createIndex("collectionGroupOverlayIndex",kL,{unique:!1})})(e)})),r<13&&i>=13&&(o=o.next(()=>function(a){const c=a.createObjectStore("remoteDocumentsV14",{keyPath:fL});c.createIndex("documentKeyIndex",pL),c.createIndex("collectionGroupIndex",mL)}(e)).next(()=>this.ei(e,s)).next(()=>e.deleteObjectStore("remoteDocuments"))),r<14&&i>=14&&(o=o.next(()=>this.ni(e,s))),r<15&&i>=15&&(o=o.next(()=>function(a){a.createObjectStore("indexConfiguration",{keyPath:"indexId",autoIncrement:!0}).createIndex("collectionGroupIndex","collectionGroup",{unique:!1}),a.createObjectStore("indexState",{keyPath:_L}).createIndex("sequenceNumberIndex",bL,{unique:!1}),a.createObjectStore("indexEntries",{keyPath:IL}).createIndex("documentKeyIndex",EL,{unique:!1})}(e))),o}Ys(e){let n=0;return e.store("remoteDocuments").X((r,i)=>{n+=wl(i)}).next(()=>{const r={byteSize:n};return e.store("remoteDocumentGlobal").put("remoteDocumentGlobalKey",r)})}Js(e){const n=e.store("mutationQueues"),r=e.store("mutations");return n.j().next(i=>w.forEach(i,s=>{const o=IDBKeyRange.bound([s.userId,-1],[s.userId,s.lastAcknowledgedBatchId]);return r.j("userMutationsIndex",o).next(a=>w.forEach(a,c=>{J(c.userId===s.userId);const u=Ri(this.serializer,c);return w1(e,s.userId,u).next(()=>{})}))}))}Xs(e){const n=e.store("targetDocuments"),r=e.store("remoteDocuments");return e.store("targetGlobal").get("targetGlobalKey").next(i=>{const s=[];return r.X((o,a)=>{const c=new me(o),u=function(l){return[0,Vt(l)]}(c);s.push(n.get(u).next(l=>l?w.resolve():(h=>n.put({targetId:0,path:Vt(h),sequenceNumber:i.highestListenSequenceNumber}))(c)))}).next(()=>w.waitFor(s))})}Zs(e,n){e.createObjectStore("collectionParents",{keyPath:wL});const r=n.store("collectionParents"),i=new zm,s=o=>{if(i.add(o)){const a=o.lastSegment(),c=o.popLast();return r.put({collectionId:a,parent:Vt(c)})}};return n.store("remoteDocuments").X({Y:!0},(o,a)=>{const c=new me(o);return s(c.popLast())}).next(()=>n.store("documentMutations").X({Y:!0},([o,a,c],u)=>{const l=qn(a);return s(l.popLast())}))}ti(e){const n=e.store("targets");return n.X((r,i)=>{const s=ca(i),o=g1(this.serializer,s);return n.put(o)})}ei(e,n){const r=n.store("remoteDocuments"),i=[];return r.X((s,o)=>{const a=n.store("remoteDocumentsV14"),c=(u=o,u.document?new L(me.fromString(u.document.name).popFirst(5)):u.noDocument?L.fromSegments(u.noDocument.path):u.unknownDocument?L.fromSegments(u.unknownDocument.path):q()).path.toArray();var u;/**
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
*/const l={prefixPath:c.slice(0,c.length-2),collectionGroup:c[c.length-2],documentId:c[c.length-1],readTime:o.readTime||[0,0],unknownDocument:o.unknownDocument,noDocument:o.noDocument,document:o.document,hasCommittedMutations:!!o.hasCommittedMutations};i.push(a.put(l))}).next(()=>w.waitFor(i))}ni(e,n){const r=n.store("mutations"),i=E1(this.serializer),s=new S1(kh.js,this.serializer.le);return r.j().next(o=>{const a=new Map;return o.forEach(c=>{var u;let l=(u=a.get(c.userId))!==null&&u!==void 0?u:ce();Ri(this.serializer,c).keys().forEach(h=>l=l.add(h)),a.set(c.userId,l)}),w.forEach(a,(c,u)=>{const l=new ht(u),h=Th.fe(this.serializer,l),d=s.getIndexManager(l),f=Sh.fe(l,this.serializer,d,s.referenceDelegate);return new T1(i,f,h,d).recalculateAndSaveOverlaysForDocumentKeys(new Rf(n,Kt.ct),c).next()})})}}function xw(t){t.createObjectStore("targetDocuments",{keyPath:yL}).createIndex("documentTargetsIndex",vL,{unique:!0}),t.createObjectStore("targets",{keyPath:"targetId"}).createIndex("queryTargetsIndex",gL,{unique:!0}),t.createObjectStore("targetGlobal")}const Cd="Failed to obtain exclusive access to the persistence layer. To allow shared access, multi-tab synchronization has to be enabled in all tabs. If you are using `experimentalForceOwningTab:true`, make sure that only one tab has persistence enabled at any given time.";class Km{constructor(e,n,r,i,s,o,a,c,u,l,h=15){if(this.allowTabSynchronization=e,this.persistenceKey=n,this.clientId=r,this.si=s,this.window=o,this.document=a,this.ii=u,this.ri=l,this.oi=h,this.Os=null,this.$s=!1,this.isPrimary=!1,this.networkEnabled=!0,this.ui=null,this.inForeground=!1,this.ci=null,this.ai=null,this.hi=Number.NEGATIVE_INFINITY,this.li=d=>Promise.resolve(),!Km.D())throw new A(b.UNIMPLEMENTED,"This platform is either missing IndexedDB or is known to have an incomplete implementation. Offline persistence has been disabled.");this.referenceDelegate=new RM(this,i),this.fi=n+"main",this.serializer=new m1(c),this.di=new _n(this.fi,this.oi,new BM(this.serializer)),this.Fs=new SM(this.referenceDelegate,this.serializer),this.remoteDocumentCache=E1(this.serializer),this.Ls=new gM,this.window&&this.window.localStorage?this._i=this.window.localStorage:(this._i=null,l===!1&&Xe("IndexedDbPersistence","LocalStorage is unavailable. As a result, persistence may not work reliably. In particular enablePersistence() could fail immediately after refreshing the page."))}start(){return this.wi().then(()=>{if(!this.isPrimary&&!this.allowTabSynchronization)throw new A(b.FAILED_PRECONDITION,Cd);return this.mi(),this.gi(),this.yi(),this.runTransaction("getHighestListenSequenceNumber","readonly",e=>this.Fs.getHighestSequenceNumber(e))}).then(e=>{this.Os=new Kt(e,this.ii)}).then(()=>{this.$s=!0}).catch(e=>(this.di&&this.di.close(),Promise.reject(e)))}pi(e){return this.li=async n=>{if(this.started)return e(n)},e(this.isPrimary)}setDatabaseDeletedListener(e){this.di.B(async n=>{n.newVersion===null&&await e()})}setNetworkEnabled(e){this.networkEnabled!==e&&(this.networkEnabled=e,this.si.enqueueAndForget(async()=>{this.started&&await this.wi()}))}wi(){return this.runTransaction("updateClientMetadataAndTryBecomePrimary","readwrite",e=>lu(e).put({clientId:this.clientId,updateTimeMs:Date.now(),networkEnabled:this.networkEnabled,inForeground:this.inForeground}).next(()=>{if(this.isPrimary)return this.Ii(e).next(n=>{n||(this.isPrimary=!1,this.si.enqueueRetryable(()=>this.li(!1)))})}).next(()=>this.Ti(e)).next(n=>this.isPrimary&&!n?this.Ei(e).next(()=>!1):!!n&&this.Ai(e).next(()=>!0))).catch(e=>{if(fi(e))return x("IndexedDbPersistence","Failed to extend owner lease: ",e),this.isPrimary;if(!this.allowTabSynchronization)throw e;return x("IndexedDbPersistence","Releasing owner lease after error during lease refresh",e),!1}).then(e=>{this.isPrimary!==e&&this.si.enqueueRetryable(()=>this.li(e)),this.isPrimary=e})}Ii(e){return Zo(e).get("owner").next(n=>w.resolve(this.Ri(n)))}vi(e){return lu(e).delete(this.clientId)}async Pi(){if(this.isPrimary&&!this.bi(this.hi,18e5)){this.hi=Date.now();const e=await this.runTransaction("maybeGarbageCollectMultiClientState","readwrite-primary",n=>{const r=mt(n,"clientMetadata");return r.j().next(i=>{const s=this.Vi(i,18e5),o=i.filter(a=>s.indexOf(a)===-1);return w.forEach(o,a=>r.delete(a.clientId)).next(()=>o)})}).catch(()=>[]);if(this._i)for(const n of e)this._i.removeItem(this.Si(n.clientId))}}yi(){this.ai=this.si.enqueueAfterDelay("client_metadata_refresh",4e3,()=>this.wi().then(()=>this.Pi()).then(()=>this.yi()))}Ri(e){return!!e&&e.ownerId===this.clientId}Ti(e){return this.ri?w.resolve(!0):Zo(e).get("owner").next(n=>{if(n!==null&&this.bi(n.leaseTimestampMs,5e3)&&!this.Di(n.ownerId)){if(this.Ri(n)&&this.networkEnabled)return!0;if(!this.Ri(n)){if(!n.allowTabSynchronization)throw new A(b.FAILED_PRECONDITION,Cd);return!1}}return!(!this.networkEnabled||!this.inForeground)||lu(e).j().next(r=>this.Vi(r,5e3).find(i=>{if(this.clientId!==i.clientId){const s=!this.networkEnabled&&i.networkEnabled,o=!this.inForeground&&i.inForeground,a=this.networkEnabled===i.networkEnabled;if(s||o&&a)return!0}return!1})===void 0)}).next(n=>(this.isPrimary!==n&&x("IndexedDbPersistence",`Client ${n?"is":"is not"} eligible for a primary lease.`),n))}async shutdown(){this.$s=!1,this.Ci(),this.ai&&(this.ai.cancel(),this.ai=null),this.xi(),this.Ni(),await this.di.runTransaction("shutdown","readwrite",["owner","clientMetadata"],e=>{const n=new Rf(e,Kt.ct);return this.Ei(n).next(()=>this.vi(n))}),this.di.close(),this.ki()}Vi(e,n){return e.filter(r=>this.bi(r.updateTimeMs,n)&&!this.Di(r.clientId))}Mi(){return this.runTransaction("getActiveClients","readonly",e=>lu(e).j().next(n=>this.Vi(n,18e5).map(r=>r.clientId)))}get started(){return this.$s}getMutationQueue(e,n){return Sh.fe(e,this.serializer,n,this.referenceDelegate)}getTargetCache(){return this.Fs}getRemoteDocumentCache(){return this.remoteDocumentCache}getIndexManager(e){return new TM(e,this.serializer.le.databaseId)}getDocumentOverlayCache(e){return Th.fe(this.serializer,e)}getBundleCache(){return this.Ls}runTransaction(e,n,r){x("IndexedDbPersistence","Starting transaction:",e);const i=n==="readonly"?"readonly":"readwrite",s=(o=this.oi)===15?CL:o===14?SE:o===13?TE:o===12?AL:o===11?EE:void q();var o;let a;return this.di.runTransaction(e,i,s,c=>(a=new Rf(c,this.Os?this.Os.next():Kt.ct),n==="readwrite-primary"?this.Ii(a).next(u=>!!u||this.Ti(a)).next(u=>{if(!u)throw Xe(`Failed to obtain primary lease for action '${e}'.`),this.isPrimary=!1,this.si.enqueueRetryable(()=>this.li(!1)),new A(b.FAILED_PRECONDITION,wE);return r(a)}).next(u=>this.Ai(a).next(()=>u)):this.Oi(a).next(()=>r(a)))).then(c=>(a.raiseOnCommittedEvent(),c))}Oi(e){return Zo(e).get("owner").next(n=>{if(n!==null&&this.bi(n.leaseTimestampMs,5e3)&&!this.Di(n.ownerId)&&!this.Ri(n)&&!(this.ri||this.allowTabSynchronization&&n.allowTabSynchronization))throw new A(b.FAILED_PRECONDITION,Cd)})}Ai(e){const n={ownerId:this.clientId,allowTabSynchronization:this.allowTabSynchronization,leaseTimestampMs:Date.now()};return Zo(e).put("owner",n)}static D(){return _n.D()}Ei(e){const n=Zo(e);return n.get("owner").next(r=>this.Ri(r)?(x("IndexedDbPersistence","Releasing primary lease."),n.delete("owner")):w.resolve())}bi(e,n){const r=Date.now();return!(e<r-n)&&(!(e>r)||(Xe(`Detected an update time that is in the future: ${e} > ${r}`),!1))}mi(){this.document!==null&&typeof this.document.addEventListener=="function"&&(this.ci=()=>{this.si.enqueueAndForget(()=>(this.inForeground=this.document.visibilityState==="visible",this.wi()))},this.document.addEventListener("visibilitychange",this.ci),this.inForeground=this.document.visibilityState==="visible")}xi(){this.ci&&(this.document.removeEventListener("visibilitychange",this.ci),this.ci=null)}gi(){var e;typeof((e=this.window)===null||e===void 0?void 0:e.addEventListener)=="function"&&(this.ui=()=>{this.Ci();const n=/(?:Version|Mobile)\/1[456]/;Sx()&&(navigator.appVersion.match(n)||navigator.userAgent.match(n))&&this.si.enterRestrictedMode(!0),this.si.enqueueAndForget(()=>this.shutdown())},this.window.addEventListener("pagehide",this.ui))}Ni(){this.ui&&(this.window.removeEventListener("pagehide",this.ui),this.ui=null)}Di(e){var n;try{const r=((n=this._i)===null||n===void 0?void 0:n.getItem(this.Si(e)))!==null;return x("IndexedDbPersistence",`Client '${e}' ${r?"is":"is not"} zombied in LocalStorage`),r}catch(r){return Xe("IndexedDbPersistence","Failed to get zombied client id.",r),!1}}Ci(){if(this._i)try{this._i.setItem(this.Si(this.clientId),String(Date.now()))}catch(e){Xe("Failed to set zombie client id.",e)}}ki(){if(this._i)try{this._i.removeItem(this.Si(this.clientId))}catch{}}Si(e){return`firestore_zombie_${this.persistenceKey}_${e}`}}function Zo(t){return mt(t,"owner")}function lu(t){return mt(t,"clientMetadata")}function Gm(t,e){let n=t.projectId;return t.isDefaultDatabase||(n+="."+t.database),"firestore/"+e+"/"+n+"/"}/**
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
 */class Wm{constructor(e,n,r,i){this.targetId=e,this.fromCache=n,this.$i=r,this.Fi=i}static Bi(e,n){let r=ce(),i=ce();for(const s of n.docChanges)switch(s.type){case 0:r=r.add(s.doc.key);break;case 1:i=i.add(s.doc.key)}return new Wm(e,n.fromCache,r,i)}}/**
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
 */class k1{constructor(){this.Li=!1}initialize(e,n){this.qi=e,this.indexManager=n,this.Li=!0}getDocumentsMatchingQuery(e,n,r,i){return this.Ui(e,n).next(s=>s||this.Ki(e,n,i,r)).next(s=>s||this.Gi(e,n))}Ui(e,n){if(nw(n))return w.resolve(null);let r=Yt(n);return this.indexManager.getIndexType(e,r).next(i=>i===0?null:(n.limit!==null&&i===1&&(n=gl(n,null,"F"),r=Yt(n)),this.indexManager.getDocumentsMatchingTarget(e,r).next(s=>{const o=ce(...s);return this.qi.getDocuments(e,o).next(a=>this.indexManager.getMinOffset(e,r).next(c=>{const u=this.Qi(n,a);return this.ji(n,u,o,c.readTime)?this.Ui(e,gl(n,null,"F")):this.zi(e,u,n,c)}))})))}Ki(e,n,r,i){return nw(n)||i.isEqual(X.min())?this.Gi(e,n):this.qi.getDocuments(e,r).next(s=>{const o=this.Qi(n,s);return this.ji(n,o,r,i)?this.Gi(e,n):(Cf()<=pe.DEBUG&&x("QueryEngine","Re-using previous result from %s to execute query: %s",i.toString(),Ff(n)),this.zi(e,o,n,yE(i,-1)))})}Qi(e,n){let r=new Oe($E(e));return n.forEach((i,s)=>{Dc(e,s)&&(r=r.add(s))}),r}ji(e,n,r,i){if(e.limit===null)return!1;if(r.size!==n.size)return!0;const s=e.limitType==="F"?n.last():n.first();return!!s&&(s.hasPendingWrites||s.version.compareTo(i)>0)}Gi(e,n){return Cf()<=pe.DEBUG&&x("QueryEngine","Using full collection scan to execute query:",Ff(n)),this.qi.getDocumentsMatchingQuery(e,n,nn.min())}zi(e,n,r,i){return this.qi.getDocumentsMatchingQuery(e,r,i).next(s=>(n.forEach(o=>{s=s.insert(o.key,o)}),s))}}/**
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
 */class qM{constructor(e,n,r,i){this.persistence=e,this.Wi=n,this.serializer=i,this.Hi=new Ce(oe),this.Ji=new pi(s=>ts(s),Nc),this.Yi=new Map,this.Xi=e.getRemoteDocumentCache(),this.Fs=e.getTargetCache(),this.Ls=e.getBundleCache(),this.Zi(r)}Zi(e){this.documentOverlayCache=this.persistence.getDocumentOverlayCache(e),this.indexManager=this.persistence.getIndexManager(e),this.mutationQueue=this.persistence.getMutationQueue(e,this.indexManager),this.localDocuments=new T1(this.Xi,this.mutationQueue,this.documentOverlayCache,this.indexManager),this.Xi.setIndexManager(this.indexManager),this.Wi.initialize(this.localDocuments,this.indexManager)}collectGarbage(e){return this.persistence.runTransaction("Collect garbage","readwrite-primary",n=>e.collect(n,this.Hi))}}function A1(t,e,n,r){return new qM(t,e,n,r)}async function C1(t,e){const n=U(t);return await n.persistence.runTransaction("Handle user change","readonly",r=>{let i;return n.mutationQueue.getAllMutationBatches(r).next(s=>(i=s,n.Zi(e),n.mutationQueue.getAllMutationBatches(r))).next(s=>{const o=[],a=[];let c=ce();for(const u of i){o.push(u.batchId);for(const l of u.mutations)c=c.add(l.key)}for(const u of s){a.push(u.batchId);for(const l of u.mutations)c=c.add(l.key)}return n.localDocuments.getDocuments(r,c).next(u=>({tr:u,removedBatchIds:o,addedBatchIds:a}))})})}function jM(t,e){const n=U(t);return n.persistence.runTransaction("Acknowledge batch","readwrite-primary",r=>{const i=e.batch.keys(),s=n.Xi.newChangeBuffer({trackRemovals:!0});return function(o,a,c,u){const l=c.batch,h=l.keys();let d=w.resolve();return h.forEach(f=>{d=d.next(()=>u.getEntry(a,f)).next(m=>{const y=c.docVersions.get(f);J(y!==null),m.version.compareTo(y)<0&&(l.applyToRemoteDocument(m,c),m.isValidDocument()&&(m.setReadTime(c.commitVersion),u.addEntry(m)))})}),d.next(()=>o.mutationQueue.removeMutationBatch(a,l))}(n,r,e,s).next(()=>s.apply(r)).next(()=>n.mutationQueue.performConsistencyCheck(r)).next(()=>n.documentOverlayCache.removeOverlaysForBatchId(r,i,e.batch.batchId)).next(()=>n.localDocuments.recalculateAndSaveOverlaysForDocumentKeys(r,function(o){let a=ce();for(let c=0;c<o.mutationResults.length;++c)o.mutationResults[c].transformResults.length>0&&(a=a.add(o.batch.mutations[c].key));return a}(e))).next(()=>n.localDocuments.getDocuments(r,i))})}function x1(t){const e=U(t);return e.persistence.runTransaction("Get last remote snapshot version","readonly",n=>e.Fs.getLastRemoteSnapshotVersion(n))}function zM(t,e){const n=U(t),r=e.snapshotVersion;let i=n.Hi;return n.persistence.runTransaction("Apply remote event","readwrite-primary",s=>{const o=n.Xi.newChangeBuffer({trackRemovals:!0});i=n.Hi;const a=[];e.targetChanges.forEach((l,h)=>{const d=i.get(h);if(!d)return;a.push(n.Fs.removeMatchingKeys(s,l.removedDocuments,h).next(()=>n.Fs.addMatchingKeys(s,l.addedDocuments,h)));let f=d.withSequenceNumber(s.currentSequenceNumber);e.targetMismatches.get(h)!==null?f=f.withResumeToken(at.EMPTY_BYTE_STRING,X.min()).withLastLimboFreeSnapshotVersion(X.min()):l.resumeToken.approximateByteSize()>0&&(f=f.withResumeToken(l.resumeToken,r)),i=i.insert(h,f),function(m,y,I){return m.resumeToken.approximateByteSize()===0||y.snapshotVersion.toMicroseconds()-m.snapshotVersion.toMicroseconds()>=3e8?!0:I.addedDocuments.size+I.modifiedDocuments.size+I.removedDocuments.size>0}(d,f,l)&&a.push(n.Fs.updateTargetData(s,f))});let c=Wt(),u=ce();if(e.documentUpdates.forEach(l=>{e.resolvedLimboDocuments.has(l)&&a.push(n.persistence.referenceDelegate.updateLimboDocument(s,l))}),a.push(R1(s,o,e.documentUpdates).next(l=>{c=l.er,u=l.nr})),!r.isEqual(X.min())){const l=n.Fs.getLastRemoteSnapshotVersion(s).next(h=>n.Fs.setTargetsMetadata(s,s.currentSequenceNumber,r));a.push(l)}return w.waitFor(a).next(()=>o.apply(s)).next(()=>n.localDocuments.getLocalViewOfDocuments(s,c,u)).next(()=>c)}).then(s=>(n.Hi=i,s))}function R1(t,e,n){let r=ce(),i=ce();return n.forEach(s=>r=r.add(s)),e.getEntries(t,r).next(s=>{let o=Wt();return n.forEach((a,c)=>{const u=s.get(a);c.isFoundDocument()!==u.isFoundDocument()&&(i=i.add(a)),c.isNoDocument()&&c.version.isEqual(X.min())?(e.removeEntry(a,c.readTime),o=o.insert(a,c)):!u.isValidDocument()||c.version.compareTo(u.version)>0||c.version.compareTo(u.version)===0&&u.hasPendingWrites?(e.addEntry(c),o=o.insert(a,c)):x("LocalStore","Ignoring outdated watch update for ",a,". Current version:",u.version," Watch version:",c.version)}),{er:o,nr:i}})}function HM(t,e){const n=U(t);return n.persistence.runTransaction("Get next mutation batch","readonly",r=>(e===void 0&&(e=-1),n.mutationQueue.getNextMutationBatchAfterBatchId(r,e)))}function fo(t,e){const n=U(t);return n.persistence.runTransaction("Allocate target","readwrite",r=>{let i;return n.Fs.getTargetData(r,e).next(s=>s?(i=s,w.resolve(i)):n.Fs.allocateTargetId(r).next(o=>(i=new or(e,o,"TargetPurposeListen",r.currentSequenceNumber),n.Fs.addTargetData(r,i).next(()=>i))))}).then(r=>{const i=n.Hi.get(r.targetId);return(i===null||r.snapshotVersion.compareTo(i.snapshotVersion)>0)&&(n.Hi=n.Hi.insert(r.targetId,r),n.Ji.set(e,r.targetId)),r})}async function po(t,e,n){const r=U(t),i=r.Hi.get(e),s=n?"readwrite":"readwrite-primary";try{n||await r.persistence.runTransaction("Release target",s,o=>r.persistence.referenceDelegate.removeTarget(o,i))}catch(o){if(!fi(o))throw o;x("LocalStore",`Failed to update sequence numbers for target ${e}: ${o}`)}r.Hi=r.Hi.remove(e),r.Ji.delete(i.target)}function _l(t,e,n){const r=U(t);let i=X.min(),s=ce();return r.persistence.runTransaction("Execute query","readonly",o=>function(a,c,u){const l=U(a),h=l.Ji.get(u);return h!==void 0?w.resolve(l.Hi.get(h)):l.Fs.getTargetData(c,u)}(r,o,Yt(e)).next(a=>{if(a)return i=a.lastLimboFreeSnapshotVersion,r.Fs.getMatchingKeysForTargetId(o,a.targetId).next(c=>{s=c})}).next(()=>r.Wi.getDocumentsMatchingQuery(o,e,n?i:X.min(),n?s:ce())).next(a=>(D1(r,VE(e),a),{documents:a,sr:s})))}function N1(t,e){const n=U(t),r=U(n.Fs),i=n.Hi.get(e);return i?Promise.resolve(i.target):n.persistence.runTransaction("Get target data","readonly",s=>r.he(s,e).next(o=>o?o.target:null))}function P1(t,e){const n=U(t),r=n.Yi.get(e)||X.min();return n.persistence.runTransaction("Get new document changes","readonly",i=>n.Xi.getAllFromCollectionGroup(i,e,yE(r,-1),Number.MAX_SAFE_INTEGER)).then(i=>(D1(n,e,i),i))}function D1(t,e,n){let r=t.Yi.get(e)||X.min();n.forEach((i,s)=>{s.readTime.compareTo(r)>0&&(r=s.readTime)}),t.Yi.set(e,r)}async function KM(t,e,n,r){const i=U(t);let s=ce(),o=Wt();for(const u of n){const l=e.ir(u.metadata.name);u.document&&(s=s.add(l));const h=e.rr(u);h.setReadTime(e.ur(u.metadata.readTime)),o=o.insert(l,h)}const a=i.Xi.newChangeBuffer({trackRemovals:!0}),c=await fo(i,function(u){return Yt(No(me.fromString(`__bundle__/docs/${u}`)))}(r));return i.persistence.runTransaction("Apply bundle documents","readwrite",u=>R1(u,a,o).next(l=>(a.apply(u),l)).next(l=>i.Fs.removeMatchingKeysForTargetId(u,c.targetId).next(()=>i.Fs.addMatchingKeys(u,s,c.targetId)).next(()=>i.localDocuments.getLocalViewOfDocuments(u,l.er,l.nr)).next(()=>l.er)))}async function GM(t,e,n=ce()){const r=await fo(t,Yt(qm(e.bundledQuery))),i=U(t);return i.persistence.runTransaction("Save named query","readwrite",s=>{const o=Ze(e.readTime);if(r.snapshotVersion.compareTo(o)>=0)return i.Ls.saveNamedQuery(s,e);const a=r.withResumeToken(at.EMPTY_BYTE_STRING,o);return i.Hi=i.Hi.insert(a.targetId,a),i.Fs.updateTargetData(s,a).next(()=>i.Fs.removeMatchingKeysForTargetId(s,r.targetId)).next(()=>i.Fs.addMatchingKeys(s,n,r.targetId)).next(()=>i.Ls.saveNamedQuery(s,e))})}function Rw(t,e){return`firestore_clients_${t}_${e}`}function Nw(t,e,n){let r=`firestore_mutations_${t}_${n}`;return e.isAuthenticated()&&(r+=`_${e.uid}`),r}function xd(t,e){return`firestore_targets_${t}_${e}`}class bl{constructor(e,n,r,i){this.user=e,this.batchId=n,this.state=r,this.error=i}static cr(e,n,r){const i=JSON.parse(r);let s,o=typeof i=="object"&&["pending","acknowledged","rejected"].indexOf(i.state)!==-1&&(i.error===void 0||typeof i.error=="object");return o&&i.error&&(o=typeof i.error.message=="string"&&typeof i.error.code=="string",o&&(s=new A(i.error.code,i.error.message))),o?new bl(e,n,i.state,s):(Xe("SharedClientState",`Failed to parse mutation state for ID '${n}': ${r}`),null)}ar(){const e={state:this.state,updateTimeMs:Date.now()};return this.error&&(e.error={code:this.error.code,message:this.error.message}),JSON.stringify(e)}}class Ea{constructor(e,n,r){this.targetId=e,this.state=n,this.error=r}static cr(e,n){const r=JSON.parse(n);let i,s=typeof r=="object"&&["not-current","current","rejected"].indexOf(r.state)!==-1&&(r.error===void 0||typeof r.error=="object");return s&&r.error&&(s=typeof r.error.message=="string"&&typeof r.error.code=="string",s&&(i=new A(r.error.code,r.error.message))),s?new Ea(e,r.state,i):(Xe("SharedClientState",`Failed to parse target state for ID '${e}': ${n}`),null)}ar(){const e={state:this.state,updateTimeMs:Date.now()};return this.error&&(e.error={code:this.error.code,message:this.error.message}),JSON.stringify(e)}}class Il{constructor(e,n){this.clientId=e,this.activeTargetIds=n}static cr(e,n){const r=JSON.parse(n);let i=typeof r=="object"&&r.activeTargetIds instanceof Array,s=Om();for(let o=0;i&&o<r.activeTargetIds.length;++o)i=bE(r.activeTargetIds[o]),s=s.add(r.activeTargetIds[o]);return i?new Il(e,s):(Xe("SharedClientState",`Failed to parse client data for instance '${e}': ${n}`),null)}}class Qm{constructor(e,n){this.clientId=e,this.onlineState=n}static cr(e){const n=JSON.parse(e);return typeof n=="object"&&["Unknown","Online","Offline"].indexOf(n.onlineState)!==-1&&typeof n.clientId=="string"?new Qm(n.clientId,n.onlineState):(Xe("SharedClientState",`Failed to parse online state: ${e}`),null)}}class zf{constructor(){this.activeTargetIds=Om()}hr(e){this.activeTargetIds=this.activeTargetIds.add(e)}lr(e){this.activeTargetIds=this.activeTargetIds.delete(e)}ar(){const e={activeTargetIds:this.activeTargetIds.toArray(),updateTimeMs:Date.now()};return JSON.stringify(e)}}class Rd{constructor(e,n,r,i,s){this.window=e,this.si=n,this.persistenceKey=r,this.dr=i,this.syncEngine=null,this.onlineStateHandler=null,this.sequenceNumberHandler=null,this._r=this.wr.bind(this),this.mr=new Ce(oe),this.started=!1,this.gr=[];const o=r.replace(/[.*+?^${}()|[\]\\]/g,"\\$&");this.storage=this.window.localStorage,this.currentUser=s,this.yr=Rw(this.persistenceKey,this.dr),this.pr=function(a){return`firestore_sequence_number_${a}`}(this.persistenceKey),this.mr=this.mr.insert(this.dr,new zf),this.Ir=new RegExp(`^firestore_clients_${o}_([^_]*)$`),this.Tr=new RegExp(`^firestore_mutations_${o}_(\\d+)(?:_(.*))?$`),this.Er=new RegExp(`^firestore_targets_${o}_(\\d+)$`),this.Ar=function(a){return`firestore_online_state_${a}`}(this.persistenceKey),this.Rr=function(a){return`firestore_bundle_loaded_v2_${a}`}(this.persistenceKey),this.window.addEventListener("storage",this._r)}static D(e){return!(!e||!e.localStorage)}async start(){const e=await this.syncEngine.Mi();for(const r of e){if(r===this.dr)continue;const i=this.getItem(Rw(this.persistenceKey,r));if(i){const s=Il.cr(r,i);s&&(this.mr=this.mr.insert(s.clientId,s))}}this.vr();const n=this.storage.getItem(this.Ar);if(n){const r=this.Pr(n);r&&this.br(r)}for(const r of this.gr)this.wr(r);this.gr=[],this.window.addEventListener("pagehide",()=>this.shutdown()),this.started=!0}writeSequenceNumber(e){this.setItem(this.pr,JSON.stringify(e))}getAllActiveQueryTargets(){return this.Vr(this.mr)}isActiveQueryTarget(e){let n=!1;return this.mr.forEach((r,i)=>{i.activeTargetIds.has(e)&&(n=!0)}),n}addPendingMutation(e){this.Sr(e,"pending")}updateMutationState(e,n,r){this.Sr(e,n,r),this.Dr(e)}addLocalQueryTarget(e){let n="not-current";if(this.isActiveQueryTarget(e)){const r=this.storage.getItem(xd(this.persistenceKey,e));if(r){const i=Ea.cr(e,r);i&&(n=i.state)}}return this.Cr.hr(e),this.vr(),n}removeLocalQueryTarget(e){this.Cr.lr(e),this.vr()}isLocalQueryTarget(e){return this.Cr.activeTargetIds.has(e)}clearQueryState(e){this.removeItem(xd(this.persistenceKey,e))}updateQueryState(e,n,r){this.Nr(e,n,r)}handleUserChange(e,n,r){n.forEach(i=>{this.Dr(i)}),this.currentUser=e,r.forEach(i=>{this.addPendingMutation(i)})}setOnlineState(e){this.kr(e)}notifyBundleLoaded(e){this.Mr(e)}shutdown(){this.started&&(this.window.removeEventListener("storage",this._r),this.removeItem(this.yr),this.started=!1)}getItem(e){const n=this.storage.getItem(e);return x("SharedClientState","READ",e,n),n}setItem(e,n){x("SharedClientState","SET",e,n),this.storage.setItem(e,n)}removeItem(e){x("SharedClientState","REMOVE",e),this.storage.removeItem(e)}wr(e){const n=e;if(n.storageArea===this.storage){if(x("SharedClientState","EVENT",n.key,n.newValue),n.key===this.yr)return void Xe("Received WebStorage notification for local change. Another client might have garbage-collected our state");this.si.enqueueRetryable(async()=>{if(this.started){if(n.key!==null){if(this.Ir.test(n.key)){if(n.newValue==null){const r=this.Or(n.key);return this.$r(r,null)}{const r=this.Fr(n.key,n.newValue);if(r)return this.$r(r.clientId,r)}}else if(this.Tr.test(n.key)){if(n.newValue!==null){const r=this.Br(n.key,n.newValue);if(r)return this.Lr(r)}}else if(this.Er.test(n.key)){if(n.newValue!==null){const r=this.qr(n.key,n.newValue);if(r)return this.Ur(r)}}else if(n.key===this.Ar){if(n.newValue!==null){const r=this.Pr(n.newValue);if(r)return this.br(r)}}else if(n.key===this.pr){const r=function(i){let s=Kt.ct;if(i!=null)try{const o=JSON.parse(i);J(typeof o=="number"),s=o}catch(o){Xe("SharedClientState","Failed to read sequence number from WebStorage",o)}return s}(n.newValue);r!==Kt.ct&&this.sequenceNumberHandler(r)}else if(n.key===this.Rr){const r=this.Kr(n.newValue);await Promise.all(r.map(i=>this.syncEngine.Gr(i)))}}}else this.gr.push(n)})}}get Cr(){return this.mr.get(this.dr)}vr(){this.setItem(this.yr,this.Cr.ar())}Sr(e,n,r){const i=new bl(this.currentUser,e,n,r),s=Nw(this.persistenceKey,this.currentUser,e);this.setItem(s,i.ar())}Dr(e){const n=Nw(this.persistenceKey,this.currentUser,e);this.removeItem(n)}kr(e){const n={clientId:this.dr,onlineState:e};this.storage.setItem(this.Ar,JSON.stringify(n))}Nr(e,n,r){const i=xd(this.persistenceKey,e),s=new Ea(e,n,r);this.setItem(i,s.ar())}Mr(e){const n=JSON.stringify(Array.from(e));this.setItem(this.Rr,n)}Or(e){const n=this.Ir.exec(e);return n?n[1]:null}Fr(e,n){const r=this.Or(e);return Il.cr(r,n)}Br(e,n){const r=this.Tr.exec(e),i=Number(r[1]),s=r[2]!==void 0?r[2]:null;return bl.cr(new ht(s),i,n)}qr(e,n){const r=this.Er.exec(e),i=Number(r[1]);return Ea.cr(i,n)}Pr(e){return Qm.cr(e)}Kr(e){return JSON.parse(e)}async Lr(e){if(e.user.uid===this.currentUser.uid)return this.syncEngine.Qr(e.batchId,e.state,e.error);x("SharedClientState",`Ignoring mutation for non-active user ${e.user.uid}`)}Ur(e){return this.syncEngine.jr(e.targetId,e.state,e.error)}$r(e,n){const r=n?this.mr.insert(e,n):this.mr.remove(e),i=this.Vr(this.mr),s=this.Vr(r),o=[],a=[];return s.forEach(c=>{i.has(c)||o.push(c)}),i.forEach(c=>{s.has(c)||a.push(c)}),this.syncEngine.zr(o,a).then(()=>{this.mr=r})}br(e){this.mr.get(e.clientId)&&this.onlineStateHandler(e.onlineState)}Vr(e){let n=Om();return e.forEach((r,i)=>{n=n.unionWith(i.activeTargetIds)}),n}}class O1{constructor(){this.Wr=new zf,this.Hr={},this.onlineStateHandler=null,this.sequenceNumberHandler=null}addPendingMutation(e){}updateMutationState(e,n,r){}addLocalQueryTarget(e){return this.Wr.hr(e),this.Hr[e]||"not-current"}updateQueryState(e,n,r){this.Hr[e]=n}removeLocalQueryTarget(e){this.Wr.lr(e)}isLocalQueryTarget(e){return this.Wr.activeTargetIds.has(e)}clearQueryState(e){delete this.Hr[e]}getAllActiveQueryTargets(){return this.Wr.activeTargetIds}isActiveQueryTarget(e){return this.Wr.activeTargetIds.has(e)}start(){return this.Wr=new zf,Promise.resolve()}handleUserChange(e,n,r){}setOnlineState(e){}shutdown(){}writeSequenceNumber(e){}notifyBundleLoaded(e){}}/**
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
 */class WM{Jr(e){}shutdown(){}}/**
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
 */class Pw{constructor(){this.Yr=()=>this.Xr(),this.Zr=()=>this.eo(),this.no=[],this.so()}Jr(e){this.no.push(e)}shutdown(){window.removeEventListener("online",this.Yr),window.removeEventListener("offline",this.Zr)}so(){window.addEventListener("online",this.Yr),window.addEventListener("offline",this.Zr)}Xr(){x("ConnectivityMonitor","Network connectivity changed: AVAILABLE");for(const e of this.no)e(0)}eo(){x("ConnectivityMonitor","Network connectivity changed: UNAVAILABLE");for(const e of this.no)e(1)}static D(){return typeof window<"u"&&window.addEventListener!==void 0&&window.removeEventListener!==void 0}}/**
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
 */let hu=null;function Nd(){return hu===null?hu=268435456+Math.round(2147483648*Math.random()):hu++,"0x"+hu.toString(16)}/**
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
 */const QM={BatchGetDocuments:"batchGet",Commit:"commit",RunQuery:"runQuery",RunAggregationQuery:"runAggregationQuery"};/**
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
 */class YM{constructor(e){this.io=e.io,this.ro=e.ro}oo(e){this.uo=e}co(e){this.ao=e}onMessage(e){this.ho=e}close(){this.ro()}send(e){this.io(e)}lo(){this.uo()}fo(e){this.ao(e)}_o(e){this.ho(e)}}/**
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
 */const kt="WebChannelConnection";class XM extends class{constructor(e){this.databaseInfo=e,this.databaseId=e.databaseId;const n=e.ssl?"https":"http";this.wo=n+"://"+e.host,this.mo="projects/"+this.databaseId.projectId+"/databases/"+this.databaseId.database+"/documents"}get yo(){return!1}po(e,n,r,i,s){const o=Nd(),a=this.Io(e,n);x("RestConnection",`Sending RPC '${e}' ${o}:`,a,r);const c={};return this.To(c,i,s),this.Eo(e,a,c,r).then(u=>(x("RestConnection",`Received RPC '${e}' ${o}: `,u),u),u=>{throw Cn("RestConnection",`RPC '${e}' ${o} failed with error: `,u,"url: ",a,"request:",r),u})}Ao(e,n,r,i,s,o){return this.po(e,n,r,i,s)}To(e,n,r){e["X-Goog-Api-Client"]="gl-js/ fire/"+Ro,e["Content-Type"]="text/plain",this.databaseInfo.appId&&(e["X-Firebase-GMPID"]=this.databaseInfo.appId),n&&n.headers.forEach((i,s)=>e[s]=i),r&&r.headers.forEach((i,s)=>e[s]=i)}Io(e,n){const r=QM[e];return`${this.wo}/v1/${n}:${r}`}}{constructor(e){super(e),this.forceLongPolling=e.forceLongPolling,this.autoDetectLongPolling=e.autoDetectLongPolling,this.useFetchStreams=e.useFetchStreams}Eo(e,n,r,i){const s=Nd();return new Promise((o,a)=>{const c=new GO;c.setWithCredentials(!0),c.listenOnce(zO.COMPLETE,()=>{try{switch(c.getLastErrorCode()){case kd.NO_ERROR:const l=c.getResponseJson();x(kt,`XHR for RPC '${e}' ${s} received:`,JSON.stringify(l)),o(l);break;case kd.TIMEOUT:x(kt,`RPC '${e}' ${s} timed out`),a(new A(b.DEADLINE_EXCEEDED,"Request time out"));break;case kd.HTTP_ERROR:const h=c.getStatus();if(x(kt,`RPC '${e}' ${s} failed with status:`,h,"response text:",c.getResponseText()),h>0){let d=c.getResponseJson();Array.isArray(d)&&(d=d[0]);const f=d==null?void 0:d.error;if(f&&f.status&&f.message){const m=function(y){const I=y.toLowerCase().replace(/_/g,"-");return Object.values(b).indexOf(I)>=0?I:b.UNKNOWN}(f.status);a(new A(m,f.message))}else a(new A(b.UNKNOWN,"Server responded with status "+c.getStatus()))}else a(new A(b.UNAVAILABLE,"Connection failed."));break;default:q()}}finally{x(kt,`RPC '${e}' ${s} completed.`)}});const u=JSON.stringify(i);x(kt,`RPC '${e}' ${s} sending request:`,i),c.send(n,"POST",u,r,15)})}Ro(e,n,r){const i=Nd(),s=[this.wo,"/","google.firestore.v1.Firestore","/",e,"/channel"],o=qO(),a=jO(),c={httpSessionIdParam:"gsessionid",initMessageHeaders:{},messageUrlParams:{database:`projects/${this.databaseId.projectId}/databases/${this.databaseId.database}`},sendRawJson:!0,supportsCrossDomainXhr:!0,internalChannelParams:{forwardChannelRequestTimeoutMs:6e5},forceLongPolling:this.forceLongPolling,detectBufferingProxy:this.autoDetectLongPolling};this.useFetchStreams&&(c.xmlHttpFactory=new KO({})),this.To(c.initMessageHeaders,n,r),c.encodeInitMessageHeaders=!0;const u=s.join("");x(kt,`Creating RPC '${e}' stream ${i}: ${u}`,c);const l=o.createWebChannel(u,c);let h=!1,d=!1;const f=new YM({io:y=>{d?x(kt,`Not sending because RPC '${e}' stream ${i} is closed:`,y):(h||(x(kt,`Opening RPC '${e}' stream ${i} transport.`),l.open(),h=!0),x(kt,`RPC '${e}' stream ${i} sending:`,y),l.send(y))},ro:()=>l.close()}),m=(y,I,v)=>{y.listen(I,E=>{try{v(E)}catch(_){setTimeout(()=>{throw _},0)}})};return m(l,iu.EventType.OPEN,()=>{d||x(kt,`RPC '${e}' stream ${i} transport opened.`)}),m(l,iu.EventType.CLOSE,()=>{d||(d=!0,x(kt,`RPC '${e}' stream ${i} transport closed`),f.fo())}),m(l,iu.EventType.ERROR,y=>{d||(d=!0,Cn(kt,`RPC '${e}' stream ${i} transport errored:`,y),f.fo(new A(b.UNAVAILABLE,"The operation could not be completed")))}),m(l,iu.EventType.MESSAGE,y=>{var I;if(!d){const v=y.data[0];J(!!v);const E=v,_=E.error||((I=E[0])===null||I===void 0?void 0:I.error);if(_){x(kt,`RPC '${e}' stream ${i} received error:`,_);const R=_.status;let M=function(ne){const K=nt[ne];if(K!==void 0)return e1(K)}(R),H=_.message;M===void 0&&(M=b.INTERNAL,H="Unknown error status: "+R+" with message "+_.message),d=!0,f.fo(new A(M,H)),l.close()}else x(kt,`RPC '${e}' stream ${i} received:`,v),f._o(v)}}),m(a,HO.STAT_EVENT,y=>{y.stat===$v.PROXY?x(kt,`RPC '${e}' stream ${i} detected buffering proxy`):y.stat===$v.NOPROXY&&x(kt,`RPC '${e}' stream ${i} detected no buffering proxy`)}),setTimeout(()=>{f.lo()},0),f}}/**
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
 */function L1(){return typeof window<"u"?window:null}function $u(){return typeof document<"u"?document:null}/**
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
 */function Fc(t){return new sM(t,!0)}/**
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
 */class Ym{constructor(e,n,r=1e3,i=1.5,s=6e4){this.si=e,this.timerId=n,this.vo=r,this.Po=i,this.bo=s,this.Vo=0,this.So=null,this.Do=Date.now(),this.reset()}reset(){this.Vo=0}Co(){this.Vo=this.bo}xo(e){this.cancel();const n=Math.floor(this.Vo+this.No()),r=Math.max(0,Date.now()-this.Do),i=Math.max(0,n-r);i>0&&x("ExponentialBackoff",`Backing off for ${i} ms (base delay: ${this.Vo} ms, delay with jitter: ${n} ms, last attempt: ${r} ms ago)`),this.So=this.si.enqueueAfterDelay(this.timerId,i,()=>(this.Do=Date.now(),e())),this.Vo*=this.Po,this.Vo<this.vo&&(this.Vo=this.vo),this.Vo>this.bo&&(this.Vo=this.bo)}ko(){this.So!==null&&(this.So.skipDelay(),this.So=null)}cancel(){this.So!==null&&(this.So.cancel(),this.So=null)}No(){return(Math.random()-.5)*this.Vo}}/**
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
 */class M1{constructor(e,n,r,i,s,o,a,c){this.si=e,this.Mo=r,this.Oo=i,this.connection=s,this.authCredentialsProvider=o,this.appCheckCredentialsProvider=a,this.listener=c,this.state=0,this.$o=0,this.Fo=null,this.Bo=null,this.stream=null,this.Lo=new Ym(e,n)}qo(){return this.state===1||this.state===5||this.Uo()}Uo(){return this.state===2||this.state===3}start(){this.state!==4?this.auth():this.Ko()}async stop(){this.qo()&&await this.close(0)}Go(){this.state=0,this.Lo.reset()}Qo(){this.Uo()&&this.Fo===null&&(this.Fo=this.si.enqueueAfterDelay(this.Mo,6e4,()=>this.jo()))}zo(e){this.Wo(),this.stream.send(e)}async jo(){if(this.Uo())return this.close(0)}Wo(){this.Fo&&(this.Fo.cancel(),this.Fo=null)}Ho(){this.Bo&&(this.Bo.cancel(),this.Bo=null)}async close(e,n){this.Wo(),this.Ho(),this.Lo.cancel(),this.$o++,e!==4?this.Lo.reset():n&&n.code===b.RESOURCE_EXHAUSTED?(Xe(n.toString()),Xe("Using maximum backoff delay to prevent overloading the backend."),this.Lo.Co()):n&&n.code===b.UNAUTHENTICATED&&this.state!==3&&(this.authCredentialsProvider.invalidateToken(),this.appCheckCredentialsProvider.invalidateToken()),this.stream!==null&&(this.Jo(),this.stream.close(),this.stream=null),this.state=e,await this.listener.co(n)}Jo(){}auth(){this.state=1;const e=this.Yo(this.$o),n=this.$o;Promise.all([this.authCredentialsProvider.getToken(),this.appCheckCredentialsProvider.getToken()]).then(([r,i])=>{this.$o===n&&this.Xo(r,i)},r=>{e(()=>{const i=new A(b.UNKNOWN,"Fetching auth token failed: "+r.message);return this.Zo(i)})})}Xo(e,n){const r=this.Yo(this.$o);this.stream=this.tu(e,n),this.stream.oo(()=>{r(()=>(this.state=2,this.Bo=this.si.enqueueAfterDelay(this.Oo,1e4,()=>(this.Uo()&&(this.state=3),Promise.resolve())),this.listener.oo()))}),this.stream.co(i=>{r(()=>this.Zo(i))}),this.stream.onMessage(i=>{r(()=>this.onMessage(i))})}Ko(){this.state=5,this.Lo.xo(async()=>{this.state=0,this.start()})}Zo(e){return x("PersistentStream",`close with error: ${e}`),this.stream=null,this.close(4,e)}Yo(e){return n=>{this.si.enqueueAndForget(()=>this.$o===e?n():(x("PersistentStream","stream callback skipped by getCloseGuardedDispatcher."),Promise.resolve()))}}}class JM extends M1{constructor(e,n,r,i,s,o){super(e,"listen_stream_connection_backoff","listen_stream_idle","health_check_timeout",n,r,i,o),this.serializer=s}tu(e,n){return this.connection.Ro("Listen",e,n)}onMessage(e){this.Lo.reset();const n=cM(this.serializer,e),r=function(i){if(!("targetChange"in i))return X.min();const s=i.targetChange;return s.targetIds&&s.targetIds.length?X.min():s.readTime?Ze(s.readTime):X.min()}(e);return this.listener.eu(n,r)}nu(e){const n={};n.database=tc(this.serializer),n.addTarget=function(i,s){let o;const a=s.target;if(o=pl(a)?{documents:u1(i,a)}:{query:l1(i,a)},o.targetId=s.targetId,s.resumeToken.approximateByteSize()>0){o.resumeToken=i1(i,s.resumeToken);const c=Uf(i,s.expectedCount);c!==null&&(o.expectedCount=c)}else if(s.snapshotVersion.compareTo(X.min())>0){o.readTime=ho(i,s.snapshotVersion.toTimestamp());const c=Uf(i,s.expectedCount);c!==null&&(o.expectedCount=c)}return o}(this.serializer,e);const r=lM(this.serializer,e);r&&(n.labels=r),this.zo(n)}su(e){const n={};n.database=tc(this.serializer),n.removeTarget=e,this.zo(n)}}class ZM extends M1{constructor(e,n,r,i,s,o){super(e,"write_stream_connection_backoff","write_stream_idle","health_check_timeout",n,r,i,o),this.serializer=s,this.iu=!1}get ru(){return this.iu}start(){this.iu=!1,this.lastStreamToken=void 0,super.start()}Jo(){this.iu&&this.ou([])}tu(e,n){return this.connection.Ro("Write",e,n)}onMessage(e){if(J(!!e.streamToken),this.lastStreamToken=e.streamToken,this.iu){this.Lo.reset();const n=uM(e.writeResults,e.commitTime),r=Ze(e.commitTime);return this.listener.uu(r,n)}return J(!e.writeResults||e.writeResults.length===0),this.iu=!0,this.listener.cu()}au(){const e={};e.database=tc(this.serializer),this.zo(e)}ou(e){const n={streamToken:this.lastStreamToken,writes:e.map(r=>nc(this.serializer,r))};this.zo(n)}}/**
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
 */class eF extends class{}{constructor(e,n,r,i){super(),this.authCredentials=e,this.appCheckCredentials=n,this.connection=r,this.serializer=i,this.hu=!1}lu(){if(this.hu)throw new A(b.FAILED_PRECONDITION,"The client has already been terminated.")}po(e,n,r){return this.lu(),Promise.all([this.authCredentials.getToken(),this.appCheckCredentials.getToken()]).then(([i,s])=>this.connection.po(e,n,r,i,s)).catch(i=>{throw i.name==="FirebaseError"?(i.code===b.UNAUTHENTICATED&&(this.authCredentials.invalidateToken(),this.appCheckCredentials.invalidateToken()),i):new A(b.UNKNOWN,i.toString())})}Ao(e,n,r,i){return this.lu(),Promise.all([this.authCredentials.getToken(),this.appCheckCredentials.getToken()]).then(([s,o])=>this.connection.Ao(e,n,r,s,o,i)).catch(s=>{throw s.name==="FirebaseError"?(s.code===b.UNAUTHENTICATED&&(this.authCredentials.invalidateToken(),this.appCheckCredentials.invalidateToken()),s):new A(b.UNKNOWN,s.toString())})}terminate(){this.hu=!0}}class tF{constructor(e,n){this.asyncQueue=e,this.onlineStateHandler=n,this.state="Unknown",this.du=0,this._u=null,this.wu=!0}mu(){this.du===0&&(this.gu("Unknown"),this._u=this.asyncQueue.enqueueAfterDelay("online_state_timeout",1e4,()=>(this._u=null,this.yu("Backend didn't respond within 10 seconds."),this.gu("Offline"),Promise.resolve())))}pu(e){this.state==="Online"?this.gu("Unknown"):(this.du++,this.du>=1&&(this.Iu(),this.yu(`Connection failed 1 times. Most recent error: ${e.toString()}`),this.gu("Offline")))}set(e){this.Iu(),this.du=0,e==="Online"&&(this.wu=!1),this.gu(e)}gu(e){e!==this.state&&(this.state=e,this.onlineStateHandler(e))}yu(e){const n=`Could not reach Cloud Firestore backend. ${e}
This typically indicates that your device does not have a healthy Internet connection at the moment. The client will operate in offline mode until it is able to successfully connect to the backend.`;this.wu?(Xe(n),this.wu=!1):x("OnlineStateTracker",n)}Iu(){this._u!==null&&(this._u.cancel(),this._u=null)}}/**
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
 */class nF{constructor(e,n,r,i,s){this.localStore=e,this.datastore=n,this.asyncQueue=r,this.remoteSyncer={},this.Tu=[],this.Eu=new Map,this.Au=new Set,this.Ru=[],this.vu=s,this.vu.Jr(o=>{r.enqueueAndForget(async()=>{mi(this)&&(x("RemoteStore","Restarting streams for network reachability change."),await async function(a){const c=U(a);c.Au.add(4),await Oo(c),c.Pu.set("Unknown"),c.Au.delete(4),await Uc(c)}(this))})}),this.Pu=new tF(r,i)}}async function Uc(t){if(mi(t))for(const e of t.Ru)await e(!0)}async function Oo(t){for(const e of t.Ru)await e(!1)}function Ah(t,e){const n=U(t);n.Eu.has(e.targetId)||(n.Eu.set(e.targetId,e),Zm(n)?Jm(n):Mo(n).Uo()&&Xm(n,e))}function rc(t,e){const n=U(t),r=Mo(n);n.Eu.delete(e),r.Uo()&&F1(n,e),n.Eu.size===0&&(r.Uo()?r.Qo():mi(n)&&n.Pu.set("Unknown"))}function Xm(t,e){if(t.bu.Lt(e.targetId),e.resumeToken.approximateByteSize()>0||e.snapshotVersion.compareTo(X.min())>0){const n=t.remoteSyncer.getRemoteKeysForTarget(e.targetId).size;e=e.withExpectedCount(n)}Mo(t).nu(e)}function F1(t,e){t.bu.Lt(e),Mo(t).su(e)}function Jm(t){t.bu=new tM({getRemoteKeysForTarget:e=>t.remoteSyncer.getRemoteKeysForTarget(e),he:e=>t.Eu.get(e)||null,oe:()=>t.datastore.serializer.databaseId}),Mo(t).start(),t.Pu.mu()}function Zm(t){return mi(t)&&!Mo(t).qo()&&t.Eu.size>0}function mi(t){return U(t).Au.size===0}function U1(t){t.bu=void 0}async function rF(t){t.Eu.forEach((e,n)=>{Xm(t,e)})}async function iF(t,e){U1(t),Zm(t)?(t.Pu.pu(e),Jm(t)):t.Pu.set("Unknown")}async function sF(t,e,n){if(t.Pu.set("Online"),e instanceof r1&&e.state===2&&e.cause)try{await async function(r,i){const s=i.cause;for(const o of i.targetIds)r.Eu.has(o)&&(await r.remoteSyncer.rejectListen(o,s),r.Eu.delete(o),r.bu.removeTarget(o))}(t,e)}catch(r){x("RemoteStore","Failed to remove targets %s: %s ",e.targetIds.join(","),r),await El(t,r)}else if(e instanceof Vu?t.bu.Wt(e):e instanceof n1?t.bu.ee(e):t.bu.Yt(e),!n.isEqual(X.min()))try{const r=await x1(t.localStore);n.compareTo(r)>=0&&await function(i,s){const o=i.bu.ue(s);return o.targetChanges.forEach((a,c)=>{if(a.resumeToken.approximateByteSize()>0){const u=i.Eu.get(c);u&&i.Eu.set(c,u.withResumeToken(a.resumeToken,s))}}),o.targetMismatches.forEach((a,c)=>{const u=i.Eu.get(a);if(!u)return;i.Eu.set(a,u.withResumeToken(at.EMPTY_BYTE_STRING,u.snapshotVersion)),F1(i,a);const l=new or(u.target,a,c,u.sequenceNumber);Xm(i,l)}),i.remoteSyncer.applyRemoteEvent(o)}(t,n)}catch(r){x("RemoteStore","Failed to raise snapshot:",r),await El(t,r)}}async function El(t,e,n){if(!fi(e))throw e;t.Au.add(1),await Oo(t),t.Pu.set("Offline"),n||(n=()=>x1(t.localStore)),t.asyncQueue.enqueueRetryable(async()=>{x("RemoteStore","Retrying IndexedDB access"),await n(),t.Au.delete(1),await Uc(t)})}function V1(t,e){return e().catch(n=>El(t,n,e))}async function Lo(t){const e=U(t),n=ri(e);let r=e.Tu.length>0?e.Tu[e.Tu.length-1].batchId:-1;for(;oF(e);)try{const i=await HM(e.localStore,r);if(i===null){e.Tu.length===0&&n.Qo();break}r=i.batchId,aF(e,i)}catch(i){await El(e,i)}$1(e)&&B1(e)}function oF(t){return mi(t)&&t.Tu.length<10}function aF(t,e){t.Tu.push(e);const n=ri(t);n.Uo()&&n.ru&&n.ou(e.mutations)}function $1(t){return mi(t)&&!ri(t).qo()&&t.Tu.length>0}function B1(t){ri(t).start()}async function cF(t){ri(t).au()}async function uF(t){const e=ri(t);for(const n of t.Tu)e.ou(n.mutations)}async function lF(t,e,n){const r=t.Tu.shift(),i=Fm.from(r,e,n);await V1(t,()=>t.remoteSyncer.applySuccessfulWrite(i)),await Lo(t)}async function hF(t,e){e&&ri(t).ru&&await async function(n,r){if(i=r.code,ZE(i)&&i!==b.ABORTED){const s=n.Tu.shift();ri(n).Go(),await V1(n,()=>n.remoteSyncer.rejectFailedWrite(s.batchId,r)),await Lo(n)}var i}(t,e),$1(t)&&B1(t)}async function Dw(t,e){const n=U(t);n.asyncQueue.verifyOperationInProgress(),x("RemoteStore","RemoteStore received new credentials");const r=mi(n);n.Au.add(3),await Oo(n),r&&n.Pu.set("Unknown"),await n.remoteSyncer.handleCredentialChange(e),n.Au.delete(3),await Uc(n)}async function Hf(t,e){const n=U(t);e?(n.Au.delete(2),await Uc(n)):e||(n.Au.add(2),await Oo(n),n.Pu.set("Unknown"))}function Mo(t){return t.Vu||(t.Vu=function(e,n,r){const i=U(e);return i.lu(),new JM(n,i.connection,i.authCredentials,i.appCheckCredentials,i.serializer,r)}(t.datastore,t.asyncQueue,{oo:rF.bind(null,t),co:iF.bind(null,t),eu:sF.bind(null,t)}),t.Ru.push(async e=>{e?(t.Vu.Go(),Zm(t)?Jm(t):t.Pu.set("Unknown")):(await t.Vu.stop(),U1(t))})),t.Vu}function ri(t){return t.Su||(t.Su=function(e,n,r){const i=U(e);return i.lu(),new ZM(n,i.connection,i.authCredentials,i.appCheckCredentials,i.serializer,r)}(t.datastore,t.asyncQueue,{oo:cF.bind(null,t),co:hF.bind(null,t),cu:uF.bind(null,t),uu:lF.bind(null,t)}),t.Ru.push(async e=>{e?(t.Su.Go(),await Lo(t)):(await t.Su.stop(),t.Tu.length>0&&(x("RemoteStore",`Stopping write stream with ${t.Tu.length} pending writes`),t.Tu=[]))})),t.Su}/**
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
 */class eg{constructor(e,n,r,i,s){this.asyncQueue=e,this.timerId=n,this.targetTimeMs=r,this.op=i,this.removalCallback=s,this.deferred=new dt,this.then=this.deferred.promise.then.bind(this.deferred.promise),this.deferred.promise.catch(o=>{})}static createAndSchedule(e,n,r,i,s){const o=Date.now()+r,a=new eg(e,n,o,i,s);return a.start(r),a}start(e){this.timerHandle=setTimeout(()=>this.handleDelayElapsed(),e)}skipDelay(){return this.handleDelayElapsed()}cancel(e){this.timerHandle!==null&&(this.clearTimeout(),this.deferred.reject(new A(b.CANCELLED,"Operation cancelled"+(e?": "+e:""))))}handleDelayElapsed(){this.asyncQueue.enqueueAndForget(()=>this.timerHandle!==null?(this.clearTimeout(),this.op().then(e=>this.deferred.resolve(e))):Promise.resolve())}clearTimeout(){this.timerHandle!==null&&(this.removalCallback(this),clearTimeout(this.timerHandle),this.timerHandle=null)}}function Fo(t,e){if(Xe("AsyncQueue",`${e}: ${t}`),fi(t))return new A(b.UNAVAILABLE,`${e}: ${t}`);throw t}/**
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
 */class Ys{constructor(e){this.comparator=e?(n,r)=>e(n,r)||L.comparator(n.key,r.key):(n,r)=>L.comparator(n.key,r.key),this.keyedMap=oa(),this.sortedSet=new Ce(this.comparator)}static emptySet(e){return new Ys(e.comparator)}has(e){return this.keyedMap.get(e)!=null}get(e){return this.keyedMap.get(e)}first(){return this.sortedSet.minKey()}last(){return this.sortedSet.maxKey()}isEmpty(){return this.sortedSet.isEmpty()}indexOf(e){const n=this.keyedMap.get(e);return n?this.sortedSet.indexOf(n):-1}get size(){return this.sortedSet.size}forEach(e){this.sortedSet.inorderTraversal((n,r)=>(e(n),!1))}add(e){const n=this.delete(e.key);return n.copy(n.keyedMap.insert(e.key,e),n.sortedSet.insert(e,null))}delete(e){const n=this.get(e);return n?this.copy(this.keyedMap.remove(e),this.sortedSet.remove(n)):this}isEqual(e){if(!(e instanceof Ys)||this.size!==e.size)return!1;const n=this.sortedSet.getIterator(),r=e.sortedSet.getIterator();for(;n.hasNext();){const i=n.getNext().key,s=r.getNext().key;if(!i.isEqual(s))return!1}return!0}toString(){const e=[];return this.forEach(n=>{e.push(n.toString())}),e.length===0?"DocumentSet ()":`DocumentSet (
  `+e.join(`  
`)+`
)`}copy(e,n){const r=new Ys;return r.comparator=this.comparator,r.keyedMap=e,r.sortedSet=n,r}}/**
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
 */class Ow{constructor(){this.Du=new Ce(L.comparator)}track(e){const n=e.doc.key,r=this.Du.get(n);r?e.type!==0&&r.type===3?this.Du=this.Du.insert(n,e):e.type===3&&r.type!==1?this.Du=this.Du.insert(n,{type:r.type,doc:e.doc}):e.type===2&&r.type===2?this.Du=this.Du.insert(n,{type:2,doc:e.doc}):e.type===2&&r.type===0?this.Du=this.Du.insert(n,{type:0,doc:e.doc}):e.type===1&&r.type===0?this.Du=this.Du.remove(n):e.type===1&&r.type===2?this.Du=this.Du.insert(n,{type:1,doc:r.doc}):e.type===0&&r.type===1?this.Du=this.Du.insert(n,{type:2,doc:e.doc}):q():this.Du=this.Du.insert(n,e)}Cu(){const e=[];return this.Du.inorderTraversal((n,r)=>{e.push(r)}),e}}class mo{constructor(e,n,r,i,s,o,a,c,u){this.query=e,this.docs=n,this.oldDocs=r,this.docChanges=i,this.mutatedKeys=s,this.fromCache=o,this.syncStateChanged=a,this.excludesMetadataChanges=c,this.hasCachedResults=u}static fromInitialDocuments(e,n,r,i,s){const o=[];return n.forEach(a=>{o.push({type:0,doc:a})}),new mo(e,n,Ys.emptySet(n),o,r,i,!0,!1,s)}get hasPendingWrites(){return!this.mutatedKeys.isEmpty()}isEqual(e){if(!(this.fromCache===e.fromCache&&this.hasCachedResults===e.hasCachedResults&&this.syncStateChanged===e.syncStateChanged&&this.mutatedKeys.isEqual(e.mutatedKeys)&&Pc(this.query,e.query)&&this.docs.isEqual(e.docs)&&this.oldDocs.isEqual(e.oldDocs)))return!1;const n=this.docChanges,r=e.docChanges;if(n.length!==r.length)return!1;for(let i=0;i<n.length;i++)if(n[i].type!==r[i].type||!n[i].doc.isEqual(r[i].doc))return!1;return!0}}/**
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
 */class dF{constructor(){this.xu=void 0,this.listeners=[]}}class fF{constructor(){this.queries=new pi(e=>UE(e),Pc),this.onlineState="Unknown",this.Nu=new Set}}async function tg(t,e){const n=U(t),r=e.query;let i=!1,s=n.queries.get(r);if(s||(i=!0,s=new dF),i)try{s.xu=await n.onListen(r)}catch(o){const a=Fo(o,`Initialization of query '${Ff(e.query)}' failed`);return void e.onError(a)}n.queries.set(r,s),s.listeners.push(e),e.ku(n.onlineState),s.xu&&e.Mu(s.xu)&&rg(n)}async function ng(t,e){const n=U(t),r=e.query;let i=!1;const s=n.queries.get(r);if(s){const o=s.listeners.indexOf(e);o>=0&&(s.listeners.splice(o,1),i=s.listeners.length===0)}if(i)return n.queries.delete(r),n.onUnlisten(r)}function pF(t,e){const n=U(t);let r=!1;for(const i of e){const s=i.query,o=n.queries.get(s);if(o){for(const a of o.listeners)a.Mu(i)&&(r=!0);o.xu=i}}r&&rg(n)}function mF(t,e,n){const r=U(t),i=r.queries.get(e);if(i)for(const s of i.listeners)s.onError(n);r.queries.delete(e)}function rg(t){t.Nu.forEach(e=>{e.next()})}class ig{constructor(e,n,r){this.query=e,this.Ou=n,this.$u=!1,this.Fu=null,this.onlineState="Unknown",this.options=r||{}}Mu(e){if(!this.options.includeMetadataChanges){const r=[];for(const i of e.docChanges)i.type!==3&&r.push(i);e=new mo(e.query,e.docs,e.oldDocs,r,e.mutatedKeys,e.fromCache,e.syncStateChanged,!0,e.hasCachedResults)}let n=!1;return this.$u?this.Bu(e)&&(this.Ou.next(e),n=!0):this.Lu(e,this.onlineState)&&(this.qu(e),n=!0),this.Fu=e,n}onError(e){this.Ou.error(e)}ku(e){this.onlineState=e;let n=!1;return this.Fu&&!this.$u&&this.Lu(this.Fu,e)&&(this.qu(this.Fu),n=!0),n}Lu(e,n){if(!e.fromCache)return!0;const r=n!=="Offline";return(!this.options.Uu||!r)&&(!e.docs.isEmpty()||e.hasCachedResults||n==="Offline")}Bu(e){if(e.docChanges.length>0)return!0;const n=this.Fu&&this.Fu.hasPendingWrites!==e.hasPendingWrites;return!(!e.syncStateChanged&&!n)&&this.options.includeMetadataChanges===!0}qu(e){e=mo.fromInitialDocuments(e.query,e.docs,e.mutatedKeys,e.fromCache,e.hasCachedResults),this.$u=!0,this.Ou.next(e)}}/**
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
 */class gF{constructor(e,n){this.Ku=e,this.byteLength=n}Gu(){return"metadata"in this.Ku}}/**
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
 */class Lw{constructor(e){this.serializer=e}ir(e){return Kn(this.serializer,e)}rr(e){return e.metadata.exists?c1(this.serializer,e.document,!1):Pe.newNoDocument(this.ir(e.metadata.name),this.ur(e.metadata.readTime))}ur(e){return Ze(e)}}class yF{constructor(e,n,r){this.Qu=e,this.localStore=n,this.serializer=r,this.queries=[],this.documents=[],this.collectionGroups=new Set,this.progress=q1(e)}ju(e){this.progress.bytesLoaded+=e.byteLength;let n=this.progress.documentsLoaded;if(e.Ku.namedQuery)this.queries.push(e.Ku.namedQuery);else if(e.Ku.documentMetadata){this.documents.push({metadata:e.Ku.documentMetadata}),e.Ku.documentMetadata.exists||++n;const r=me.fromString(e.Ku.documentMetadata.name);this.collectionGroups.add(r.get(r.length-2))}else e.Ku.document&&(this.documents[this.documents.length-1].document=e.Ku.document,++n);return n!==this.progress.documentsLoaded?(this.progress.documentsLoaded=n,Object.assign({},this.progress)):null}zu(e){const n=new Map,r=new Lw(this.serializer);for(const i of e)if(i.metadata.queries){const s=r.ir(i.metadata.name);for(const o of i.metadata.queries){const a=(n.get(o)||ce()).add(s);n.set(o,a)}}return n}async complete(){const e=await KM(this.localStore,new Lw(this.serializer),this.documents,this.Qu.id),n=this.zu(this.documents);for(const r of this.queries)await GM(this.localStore,r,n.get(r.name));return this.progress.taskState="Success",{progress:this.progress,Wu:this.collectionGroups,Hu:e}}}function q1(t){return{taskState:"Running",documentsLoaded:0,bytesLoaded:0,totalDocuments:t.totalDocuments,totalBytes:t.totalBytes}}/**
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
 */class j1{constructor(e){this.key=e}}class z1{constructor(e){this.key=e}}class H1{constructor(e,n){this.query=e,this.Ju=n,this.Yu=null,this.hasCachedResults=!1,this.current=!1,this.Xu=ce(),this.mutatedKeys=ce(),this.Zu=$E(e),this.tc=new Ys(this.Zu)}get ec(){return this.Ju}nc(e,n){const r=n?n.sc:new Ow,i=n?n.tc:this.tc;let s=n?n.mutatedKeys:this.mutatedKeys,o=i,a=!1;const c=this.query.limitType==="F"&&i.size===this.query.limit?i.last():null,u=this.query.limitType==="L"&&i.size===this.query.limit?i.first():null;if(e.inorderTraversal((l,h)=>{const d=i.get(l),f=Dc(this.query,h)?h:null,m=!!d&&this.mutatedKeys.has(d.key),y=!!f&&(f.hasLocalMutations||this.mutatedKeys.has(f.key)&&f.hasCommittedMutations);let I=!1;d&&f?d.data.isEqual(f.data)?m!==y&&(r.track({type:3,doc:f}),I=!0):this.ic(d,f)||(r.track({type:2,doc:f}),I=!0,(c&&this.Zu(f,c)>0||u&&this.Zu(f,u)<0)&&(a=!0)):!d&&f?(r.track({type:0,doc:f}),I=!0):d&&!f&&(r.track({type:1,doc:d}),I=!0,(c||u)&&(a=!0)),I&&(f?(o=o.add(f),s=y?s.add(l):s.delete(l)):(o=o.delete(l),s=s.delete(l)))}),this.query.limit!==null)for(;o.size>this.query.limit;){const l=this.query.limitType==="F"?o.last():o.first();o=o.delete(l.key),s=s.delete(l.key),r.track({type:1,doc:l})}return{tc:o,sc:r,ji:a,mutatedKeys:s}}ic(e,n){return e.hasLocalMutations&&n.hasCommittedMutations&&!n.hasLocalMutations}applyChanges(e,n,r){const i=this.tc;this.tc=e.tc,this.mutatedKeys=e.mutatedKeys;const s=e.sc.Cu();s.sort((u,l)=>function(h,d){const f=m=>{switch(m){case 0:return 1;case 2:case 3:return 2;case 1:return 0;default:return q()}};return f(h)-f(d)}(u.type,l.type)||this.Zu(u.doc,l.doc)),this.rc(r);const o=n?this.oc():[],a=this.Xu.size===0&&this.current?1:0,c=a!==this.Yu;return this.Yu=a,s.length!==0||c?{snapshot:new mo(this.query,e.tc,i,s,e.mutatedKeys,a===0,c,!1,!!r&&r.resumeToken.approximateByteSize()>0),uc:o}:{uc:o}}ku(e){return this.current&&e==="Offline"?(this.current=!1,this.applyChanges({tc:this.tc,sc:new Ow,mutatedKeys:this.mutatedKeys,ji:!1},!1)):{uc:[]}}cc(e){return!this.Ju.has(e)&&!!this.tc.has(e)&&!this.tc.get(e).hasLocalMutations}rc(e){e&&(e.addedDocuments.forEach(n=>this.Ju=this.Ju.add(n)),e.modifiedDocuments.forEach(n=>{}),e.removedDocuments.forEach(n=>this.Ju=this.Ju.delete(n)),this.current=e.current)}oc(){if(!this.current)return[];const e=this.Xu;this.Xu=ce(),this.tc.forEach(r=>{this.cc(r.key)&&(this.Xu=this.Xu.add(r.key))});const n=[];return e.forEach(r=>{this.Xu.has(r)||n.push(new z1(r))}),this.Xu.forEach(r=>{e.has(r)||n.push(new j1(r))}),n}ac(e){this.Ju=e.sr,this.Xu=ce();const n=this.nc(e.documents);return this.applyChanges(n,!0)}hc(){return mo.fromInitialDocuments(this.query,this.tc,this.mutatedKeys,this.Yu===0,this.hasCachedResults)}}class vF{constructor(e,n,r){this.query=e,this.targetId=n,this.view=r}}class wF{constructor(e){this.key=e,this.lc=!1}}class _F{constructor(e,n,r,i,s,o){this.localStore=e,this.remoteStore=n,this.eventManager=r,this.sharedClientState=i,this.currentUser=s,this.maxConcurrentLimboResolutions=o,this.fc={},this.dc=new pi(a=>UE(a),Pc),this._c=new Map,this.wc=new Set,this.mc=new Ce(L.comparator),this.gc=new Map,this.yc=new Hm,this.Ic={},this.Tc=new Map,this.Ec=os.kn(),this.onlineState="Unknown",this.Ac=void 0}get isPrimaryClient(){return this.Ac===!0}}async function bF(t,e){const n=ug(t);let r,i;const s=n.dc.get(e);if(s)r=s.targetId,n.sharedClientState.addLocalQueryTarget(r),i=s.view.hc();else{const o=await fo(n.localStore,Yt(e)),a=n.sharedClientState.addLocalQueryTarget(o.targetId);r=o.targetId,i=await sg(n,e,r,a==="current",o.resumeToken),n.isPrimaryClient&&Ah(n.remoteStore,o)}return i}async function sg(t,e,n,r,i){t.Rc=(h,d,f)=>async function(m,y,I,v){let E=y.view.nc(I);E.ji&&(E=await _l(m.localStore,y.query,!1).then(({documents:M})=>y.view.nc(M,E)));const _=v&&v.targetChanges.get(y.targetId),R=y.view.applyChanges(E,m.isPrimaryClient,_);return Kf(m,y.targetId,R.uc),R.snapshot}(t,h,d,f);const s=await _l(t.localStore,e,!0),o=new H1(e,s.sr),a=o.nc(s.documents),c=Mc.createSynthesizedTargetChangeForCurrentChange(n,r&&t.onlineState!=="Offline",i),u=o.applyChanges(a,t.isPrimaryClient,c);Kf(t,n,u.uc);const l=new vF(e,n,o);return t.dc.set(e,l),t._c.has(n)?t._c.get(n).push(e):t._c.set(n,[e]),u.snapshot}async function IF(t,e){const n=U(t),r=n.dc.get(e),i=n._c.get(r.targetId);if(i.length>1)return n._c.set(r.targetId,i.filter(s=>!Pc(s,e))),void n.dc.delete(e);n.isPrimaryClient?(n.sharedClientState.removeLocalQueryTarget(r.targetId),n.sharedClientState.isActiveQueryTarget(r.targetId)||await po(n.localStore,r.targetId,!1).then(()=>{n.sharedClientState.clearQueryState(r.targetId),rc(n.remoteStore,r.targetId),go(n,r.targetId)}).catch(di)):(go(n,r.targetId),await po(n.localStore,r.targetId,!0))}async function EF(t,e,n){const r=lg(t);try{const i=await function(s,o){const a=U(s),c=$e.now(),u=o.reduce((d,f)=>d.add(f.key),ce());let l,h;return a.persistence.runTransaction("Locally write mutations","readwrite",d=>{let f=Wt(),m=ce();return a.Xi.getEntries(d,u).next(y=>{f=y,f.forEach((I,v)=>{v.isValidDocument()||(m=m.add(I))})}).next(()=>a.localDocuments.getOverlayedDocuments(d,f)).next(y=>{l=y;const I=[];for(const v of o){const E=JL(v,l.get(v.key).overlayedDocument);E!=null&&I.push(new Er(v.key,E,xE(E.value.mapValue),Ve.exists(!0)))}return a.mutationQueue.addMutationBatch(d,c,I,o)}).next(y=>{h=y;const I=y.applyToLocalDocumentSet(l,m);return a.documentOverlayCache.saveOverlays(d,y.batchId,I)})}).then(()=>({batchId:h.batchId,changes:qE(l)}))}(r.localStore,e);r.sharedClientState.addPendingMutation(i.batchId),function(s,o,a){let c=s.Ic[s.currentUser.toKey()];c||(c=new Ce(oe)),c=c.insert(o,a),s.Ic[s.currentUser.toKey()]=c}(r,i.batchId,n),await Tr(r,i.changes),await Lo(r.remoteStore)}catch(i){const s=Fo(i,"Failed to persist write");n.reject(s)}}async function K1(t,e){const n=U(t);try{const r=await zM(n.localStore,e);e.targetChanges.forEach((i,s)=>{const o=n.gc.get(s);o&&(J(i.addedDocuments.size+i.modifiedDocuments.size+i.removedDocuments.size<=1),i.addedDocuments.size>0?o.lc=!0:i.modifiedDocuments.size>0?J(o.lc):i.removedDocuments.size>0&&(J(o.lc),o.lc=!1))}),await Tr(n,r,e)}catch(r){await di(r)}}function Mw(t,e,n){const r=U(t);if(r.isPrimaryClient&&n===0||!r.isPrimaryClient&&n===1){const i=[];r.dc.forEach((s,o)=>{const a=o.view.ku(e);a.snapshot&&i.push(a.snapshot)}),function(s,o){const a=U(s);a.onlineState=o;let c=!1;a.queries.forEach((u,l)=>{for(const h of l.listeners)h.ku(o)&&(c=!0)}),c&&rg(a)}(r.eventManager,e),i.length&&r.fc.eu(i),r.onlineState=e,r.isPrimaryClient&&r.sharedClientState.setOnlineState(e)}}async function TF(t,e,n){const r=U(t);r.sharedClientState.updateQueryState(e,"rejected",n);const i=r.gc.get(e),s=i&&i.key;if(s){let o=new Ce(L.comparator);o=o.insert(s,Pe.newNoDocument(s,X.min()));const a=ce().add(s),c=new Lc(X.min(),new Map,new Ce(oe),o,a);await K1(r,c),r.mc=r.mc.remove(s),r.gc.delete(e),cg(r)}else await po(r.localStore,e,!1).then(()=>go(r,e,n)).catch(di)}async function SF(t,e){const n=U(t),r=e.batch.batchId;try{const i=await jM(n.localStore,e);ag(n,r,null),og(n,r),n.sharedClientState.updateMutationState(r,"acknowledged"),await Tr(n,i)}catch(i){await di(i)}}async function kF(t,e,n){const r=U(t);try{const i=await function(s,o){const a=U(s);return a.persistence.runTransaction("Reject batch","readwrite-primary",c=>{let u;return a.mutationQueue.lookupMutationBatch(c,o).next(l=>(J(l!==null),u=l.keys(),a.mutationQueue.removeMutationBatch(c,l))).next(()=>a.mutationQueue.performConsistencyCheck(c)).next(()=>a.documentOverlayCache.removeOverlaysForBatchId(c,u,o)).next(()=>a.localDocuments.recalculateAndSaveOverlaysForDocumentKeys(c,u)).next(()=>a.localDocuments.getDocuments(c,u))})}(r.localStore,e);ag(r,e,n),og(r,e),r.sharedClientState.updateMutationState(e,"rejected",n),await Tr(r,i)}catch(i){await di(i)}}async function AF(t,e){const n=U(t);mi(n.remoteStore)||x("SyncEngine","The network is disabled. The task returned by 'awaitPendingWrites()' will not complete until the network is enabled.");try{const r=await function(s){const o=U(s);return o.persistence.runTransaction("Get highest unacknowledged batch id","readonly",a=>o.mutationQueue.getHighestUnacknowledgedBatchId(a))}(n.localStore);if(r===-1)return void e.resolve();const i=n.Tc.get(r)||[];i.push(e),n.Tc.set(r,i)}catch(r){const i=Fo(r,"Initialization of waitForPendingWrites() operation failed");e.reject(i)}}function og(t,e){(t.Tc.get(e)||[]).forEach(n=>{n.resolve()}),t.Tc.delete(e)}function ag(t,e,n){const r=U(t);let i=r.Ic[r.currentUser.toKey()];if(i){const s=i.get(e);s&&(n?s.reject(n):s.resolve(),i=i.remove(e)),r.Ic[r.currentUser.toKey()]=i}}function go(t,e,n=null){t.sharedClientState.removeLocalQueryTarget(e);for(const r of t._c.get(e))t.dc.delete(r),n&&t.fc.vc(r,n);t._c.delete(e),t.isPrimaryClient&&t.yc.ps(e).forEach(r=>{t.yc.containsKey(r)||G1(t,r)})}function G1(t,e){t.wc.delete(e.path.canonicalString());const n=t.mc.get(e);n!==null&&(rc(t.remoteStore,n),t.mc=t.mc.remove(e),t.gc.delete(n),cg(t))}function Kf(t,e,n){for(const r of n)r instanceof j1?(t.yc.addReference(r.key,e),CF(t,r)):r instanceof z1?(x("SyncEngine","Document no longer in limbo: "+r.key),t.yc.removeReference(r.key,e),t.yc.containsKey(r.key)||G1(t,r.key)):q()}function CF(t,e){const n=e.key,r=n.path.canonicalString();t.mc.get(n)||t.wc.has(r)||(x("SyncEngine","New document in limbo: "+n),t.wc.add(r),cg(t))}function cg(t){for(;t.wc.size>0&&t.mc.size<t.maxConcurrentLimboResolutions;){const e=t.wc.values().next().value;t.wc.delete(e);const n=new L(me.fromString(e)),r=t.Ec.next();t.gc.set(r,new wF(n)),t.mc=t.mc.insert(n,r),Ah(t.remoteStore,new or(Yt(No(n.path)),r,"TargetPurposeLimboResolution",Kt.ct))}}async function Tr(t,e,n){const r=U(t),i=[],s=[],o=[];r.dc.isEmpty()||(r.dc.forEach((a,c)=>{o.push(r.Rc(c,e,n).then(u=>{if((u||n)&&r.isPrimaryClient&&r.sharedClientState.updateQueryState(c.targetId,u!=null&&u.fromCache?"not-current":"current"),u){i.push(u);const l=Wm.Bi(c.targetId,u);s.push(l)}}))}),await Promise.all(o),r.fc.eu(i),await async function(a,c){const u=U(a);try{await u.persistence.runTransaction("notifyLocalViewChanges","readwrite",l=>w.forEach(c,h=>w.forEach(h.$i,d=>u.persistence.referenceDelegate.addReference(l,h.targetId,d)).next(()=>w.forEach(h.Fi,d=>u.persistence.referenceDelegate.removeReference(l,h.targetId,d)))))}catch(l){if(!fi(l))throw l;x("LocalStore","Failed to update sequence numbers: "+l)}for(const l of c){const h=l.targetId;if(!l.fromCache){const d=u.Hi.get(h),f=d.snapshotVersion,m=d.withLastLimboFreeSnapshotVersion(f);u.Hi=u.Hi.insert(h,m)}}}(r.localStore,s))}async function xF(t,e){const n=U(t);if(!n.currentUser.isEqual(e)){x("SyncEngine","User change. New user:",e.toKey());const r=await C1(n.localStore,e);n.currentUser=e,function(i,s){i.Tc.forEach(o=>{o.forEach(a=>{a.reject(new A(b.CANCELLED,s))})}),i.Tc.clear()}(n,"'waitForPendingWrites' promise is rejected due to a user change."),n.sharedClientState.handleUserChange(e,r.removedBatchIds,r.addedBatchIds),await Tr(n,r.tr)}}function RF(t,e){const n=U(t),r=n.gc.get(e);if(r&&r.lc)return ce().add(r.key);{let i=ce();const s=n._c.get(e);if(!s)return i;for(const o of s){const a=n.dc.get(o);i=i.unionWith(a.view.ec)}return i}}async function NF(t,e){const n=U(t),r=await _l(n.localStore,e.query,!0),i=e.view.ac(r);return n.isPrimaryClient&&Kf(n,e.targetId,i.uc),i}async function PF(t,e){const n=U(t);return P1(n.localStore,e).then(r=>Tr(n,r))}async function DF(t,e,n,r){const i=U(t),s=await function(o,a){const c=U(o),u=U(c.mutationQueue);return c.persistence.runTransaction("Lookup mutation documents","readonly",l=>u.Vn(l,a).next(h=>h?c.localDocuments.getDocuments(l,h):w.resolve(null)))}(i.localStore,e);s!==null?(n==="pending"?await Lo(i.remoteStore):n==="acknowledged"||n==="rejected"?(ag(i,e,r||null),og(i,e),function(o,a){U(U(o).mutationQueue).Dn(a)}(i.localStore,e)):q(),await Tr(i,s)):x("SyncEngine","Cannot apply mutation batch with id: "+e)}async function OF(t,e){const n=U(t);if(ug(n),lg(n),e===!0&&n.Ac!==!0){const r=n.sharedClientState.getAllActiveQueryTargets(),i=await Fw(n,r.toArray());n.Ac=!0,await Hf(n.remoteStore,!0);for(const s of i)Ah(n.remoteStore,s)}else if(e===!1&&n.Ac!==!1){const r=[];let i=Promise.resolve();n._c.forEach((s,o)=>{n.sharedClientState.isLocalQueryTarget(o)?r.push(o):i=i.then(()=>(go(n,o),po(n.localStore,o,!0))),rc(n.remoteStore,o)}),await i,await Fw(n,r),function(s){const o=U(s);o.gc.forEach((a,c)=>{rc(o.remoteStore,c)}),o.yc.Is(),o.gc=new Map,o.mc=new Ce(L.comparator)}(n),n.Ac=!1,await Hf(n.remoteStore,!1)}}async function Fw(t,e,n){const r=U(t),i=[],s=[];for(const o of e){let a;const c=r._c.get(o);if(c&&c.length!==0){a=await fo(r.localStore,Yt(c[0]));for(const u of c){const l=r.dc.get(u),h=await NF(r,l);h.snapshot&&s.push(h.snapshot)}}else{const u=await N1(r.localStore,o);a=await fo(r.localStore,u),await sg(r,W1(u),o,!1,a.resumeToken)}i.push(a)}return r.fc.eu(s),i}function W1(t){return FE(t.path,t.collectionGroup,t.orderBy,t.filters,t.limit,"F",t.startAt,t.endAt)}function LF(t){const e=U(t);return U(U(e.localStore).persistence).Mi()}async function MF(t,e,n,r){const i=U(t);if(i.Ac)return void x("SyncEngine","Ignoring unexpected query state notification.");const s=i._c.get(e);if(s&&s.length>0)switch(n){case"current":case"not-current":{const o=await P1(i.localStore,VE(s[0])),a=Lc.createSynthesizedRemoteEventForCurrentChange(e,n==="current",at.EMPTY_BYTE_STRING);await Tr(i,o,a);break}case"rejected":await po(i.localStore,e,!0),go(i,e,r);break;default:q()}}async function FF(t,e,n){const r=ug(t);if(r.Ac){for(const i of e){if(r._c.has(i)){x("SyncEngine","Adding an already active target "+i);continue}const s=await N1(r.localStore,i),o=await fo(r.localStore,s);await sg(r,W1(s),o.targetId,!1,o.resumeToken),Ah(r.remoteStore,o)}for(const i of n)r._c.has(i)&&await po(r.localStore,i,!1).then(()=>{rc(r.remoteStore,i),go(r,i)}).catch(di)}}function ug(t){const e=U(t);return e.remoteStore.remoteSyncer.applyRemoteEvent=K1.bind(null,e),e.remoteStore.remoteSyncer.getRemoteKeysForTarget=RF.bind(null,e),e.remoteStore.remoteSyncer.rejectListen=TF.bind(null,e),e.fc.eu=pF.bind(null,e.eventManager),e.fc.vc=mF.bind(null,e.eventManager),e}function lg(t){const e=U(t);return e.remoteStore.remoteSyncer.applySuccessfulWrite=SF.bind(null,e),e.remoteStore.remoteSyncer.rejectFailedWrite=kF.bind(null,e),e}function UF(t,e,n){const r=U(t);(async function(i,s,o){try{const a=await s.getMetadata();if(await function(h,d){const f=U(h),m=Ze(d.createTime);return f.persistence.runTransaction("hasNewerBundle","readonly",y=>f.Ls.getBundleMetadata(y,d.id)).then(y=>!!y&&y.createTime.compareTo(m)>=0)}(i.localStore,a))return await s.close(),o._completeWith(function(h){return{taskState:"Success",documentsLoaded:h.totalDocuments,bytesLoaded:h.totalBytes,totalDocuments:h.totalDocuments,totalBytes:h.totalBytes}}(a)),Promise.resolve(new Set);o._updateProgress(q1(a));const c=new yF(a,i.localStore,s.serializer);let u=await s.Pc();for(;u;){const h=await c.ju(u);h&&o._updateProgress(h),u=await s.Pc()}const l=await c.complete();return await Tr(i,l.Hu,void 0),await function(h,d){const f=U(h);return f.persistence.runTransaction("Save bundle","readwrite",m=>f.Ls.saveBundleMetadata(m,d))}(i.localStore,a),o._completeWith(l.progress),Promise.resolve(l.Wu)}catch(a){return Cn("SyncEngine",`Loading bundle failed with ${a}`),o._failWith(a),Promise.resolve(new Set)}})(r,e,n).then(i=>{r.sharedClientState.notifyBundleLoaded(i)})}class Gf{constructor(){this.synchronizeTabs=!1}async initialize(e){this.serializer=Fc(e.databaseInfo.databaseId),this.sharedClientState=this.createSharedClientState(e),this.persistence=this.createPersistence(e),await this.persistence.start(),this.localStore=this.createLocalStore(e),this.gcScheduler=this.createGarbageCollectionScheduler(e,this.localStore),this.indexBackfillerScheduler=this.createIndexBackfillerScheduler(e,this.localStore)}createGarbageCollectionScheduler(e,n){return null}createIndexBackfillerScheduler(e,n){return null}createLocalStore(e){return A1(this.persistence,new k1,e.initialUser,this.serializer)}createPersistence(e){return new S1(kh.js,this.serializer)}createSharedClientState(e){return new O1}async terminate(){this.gcScheduler&&this.gcScheduler.stop(),await this.sharedClientState.shutdown(),await this.persistence.shutdown()}}class Q1 extends Gf{constructor(e,n,r){super(),this.bc=e,this.cacheSizeBytes=n,this.forceOwnership=r,this.synchronizeTabs=!1}async initialize(e){await super.initialize(e),await this.bc.initialize(this,e),await lg(this.bc.syncEngine),await Lo(this.bc.remoteStore),await this.persistence.pi(()=>(this.gcScheduler&&!this.gcScheduler.started&&this.gcScheduler.start(),this.indexBackfillerScheduler&&!this.indexBackfillerScheduler.started&&this.indexBackfillerScheduler.start(),Promise.resolve()))}createLocalStore(e){return A1(this.persistence,new k1,e.initialUser,this.serializer)}createGarbageCollectionScheduler(e,n){const r=this.persistence.referenceDelegate.garbageCollector;return new AM(r,e.asyncQueue,n)}createIndexBackfillerScheduler(e,n){const r=new lL(n,this.persistence);return new uL(e.asyncQueue,r)}createPersistence(e){const n=Gm(e.databaseInfo.databaseId,e.databaseInfo.persistenceKey),r=this.cacheSizeBytes!==void 0?zt.withCacheSize(this.cacheSizeBytes):zt.DEFAULT;return new Km(this.synchronizeTabs,n,e.clientId,r,e.asyncQueue,L1(),$u(),this.serializer,this.sharedClientState,!!this.forceOwnership)}createSharedClientState(e){return new O1}}class VF extends Q1{constructor(e,n){super(e,n,!1),this.bc=e,this.cacheSizeBytes=n,this.synchronizeTabs=!0}async initialize(e){await super.initialize(e);const n=this.bc.syncEngine;this.sharedClientState instanceof Rd&&(this.sharedClientState.syncEngine={Qr:DF.bind(null,n),jr:MF.bind(null,n),zr:FF.bind(null,n),Mi:LF.bind(null,n),Gr:PF.bind(null,n)},await this.sharedClientState.start()),await this.persistence.pi(async r=>{await OF(this.bc.syncEngine,r),this.gcScheduler&&(r&&!this.gcScheduler.started?this.gcScheduler.start():r||this.gcScheduler.stop()),this.indexBackfillerScheduler&&(r&&!this.indexBackfillerScheduler.started?this.indexBackfillerScheduler.start():r||this.indexBackfillerScheduler.stop())})}createSharedClientState(e){const n=L1();if(!Rd.D(n))throw new A(b.UNIMPLEMENTED,"IndexedDB persistence is only available on platforms that support LocalStorage.");const r=Gm(e.databaseInfo.databaseId,e.databaseInfo.persistenceKey);return new Rd(n,e.asyncQueue,r,e.clientId,e.initialUser)}}class hg{async initialize(e,n){this.localStore||(this.localStore=e.localStore,this.sharedClientState=e.sharedClientState,this.datastore=this.createDatastore(n),this.remoteStore=this.createRemoteStore(n),this.eventManager=this.createEventManager(n),this.syncEngine=this.createSyncEngine(n,!e.synchronizeTabs),this.sharedClientState.onlineStateHandler=r=>Mw(this.syncEngine,r,1),this.remoteStore.remoteSyncer.handleCredentialChange=xF.bind(null,this.syncEngine),await Hf(this.remoteStore,this.syncEngine.isPrimaryClient))}createEventManager(e){return new fF}createDatastore(e){const n=Fc(e.databaseInfo.databaseId),r=(i=e.databaseInfo,new XM(i));var i;return function(s,o,a,c){return new eF(s,o,a,c)}(e.authCredentials,e.appCheckCredentials,r,n)}createRemoteStore(e){return n=this.localStore,r=this.datastore,i=e.asyncQueue,s=a=>Mw(this.syncEngine,a,0),o=Pw.D()?new Pw:new WM,new nF(n,r,i,s,o);var n,r,i,s,o}createSyncEngine(e,n){return function(r,i,s,o,a,c,u){const l=new _F(r,i,s,o,a,c);return u&&(l.Ac=!0),l}(this.localStore,this.remoteStore,this.eventManager,this.sharedClientState,e.initialUser,e.maxConcurrentLimboResolutions,n)}terminate(){return async function(e){const n=U(e);x("RemoteStore","RemoteStore shutting down."),n.Au.add(5),await Oo(n),n.vu.shutdown(),n.Pu.set("Unknown")}(this.remoteStore)}}/**
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
 */function Uw(t,e=10240){let n=0;return{async read(){if(n<t.byteLength){const r={value:t.slice(n,n+e),done:!1};return n+=e,r}return{done:!0}},async cancel(){},releaseLock(){},closed:Promise.resolve()}}/**
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
 */class Ch{constructor(e){this.observer=e,this.muted=!1}next(e){this.observer.next&&this.Vc(this.observer.next,e)}error(e){this.observer.error?this.Vc(this.observer.error,e):Xe("Uncaught Error in snapshot listener:",e.toString())}Sc(){this.muted=!0}Vc(e,n){this.muted||setTimeout(()=>{this.muted||e(n)},0)}}/**
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
 */class $F{constructor(e,n){this.Dc=e,this.serializer=n,this.metadata=new dt,this.buffer=new Uint8Array,this.Cc=new TextDecoder("utf-8"),this.xc().then(r=>{r&&r.Gu()?this.metadata.resolve(r.Ku.metadata):this.metadata.reject(new Error(`The first element of the bundle is not a metadata, it is
             ${JSON.stringify(r==null?void 0:r.Ku)}`))},r=>this.metadata.reject(r))}close(){return this.Dc.cancel()}async getMetadata(){return this.metadata.promise}async Pc(){return await this.getMetadata(),this.xc()}async xc(){const e=await this.Nc();if(e===null)return null;const n=this.Cc.decode(e),r=Number(n);isNaN(r)&&this.kc(`length string (${n}) is not valid number`);const i=await this.Mc(r);return new gF(JSON.parse(i),e.length+r)}Oc(){return this.buffer.findIndex(e=>e==="{".charCodeAt(0))}async Nc(){for(;this.Oc()<0&&!await this.$c(););if(this.buffer.length===0)return null;const e=this.Oc();e<0&&this.kc("Reached the end of bundle when a length string is expected.");const n=this.buffer.slice(0,e);return this.buffer=this.buffer.slice(e),n}async Mc(e){for(;this.buffer.length<e;)await this.$c()&&this.kc("Reached the end of bundle when more is expected.");const n=this.Cc.decode(this.buffer.slice(0,e));return this.buffer=this.buffer.slice(e),n}kc(e){throw this.Dc.cancel(),new Error(`Invalid bundle format: ${e}`)}async $c(){const e=await this.Dc.read();if(!e.done){const n=new Uint8Array(this.buffer.length+e.value.length);n.set(this.buffer),n.set(e.value,this.buffer.length),this.buffer=n}return e.done}}/**
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
 */class BF{constructor(e){this.datastore=e,this.readVersions=new Map,this.mutations=[],this.committed=!1,this.lastWriteError=null,this.writtenDocs=new Set}async lookup(e){if(this.ensureCommitNotCalled(),this.mutations.length>0)throw new A(b.INVALID_ARGUMENT,"Firestore transactions require all reads to be executed before all writes.");const n=await async function(r,i){const s=U(r),o=tc(s.serializer)+"/documents",a={documents:i.map(h=>ec(s.serializer,h))},c=await s.Ao("BatchGetDocuments",o,a,i.length),u=new Map;c.forEach(h=>{const d=aM(s.serializer,h);u.set(d.key.toString(),d)});const l=[];return i.forEach(h=>{const d=u.get(h.toString());J(!!d),l.push(d)}),l}(this.datastore,e);return n.forEach(r=>this.recordVersion(r)),n}set(e,n){this.write(n.toMutation(e,this.precondition(e))),this.writtenDocs.add(e.toString())}update(e,n){try{this.write(n.toMutation(e,this.preconditionForUpdate(e)))}catch(r){this.lastWriteError=r}this.writtenDocs.add(e.toString())}delete(e){this.write(new Do(e,this.precondition(e))),this.writtenDocs.add(e.toString())}async commit(){if(this.ensureCommitNotCalled(),this.lastWriteError)throw this.lastWriteError;const e=this.readVersions;this.mutations.forEach(n=>{e.delete(n.key.toString())}),e.forEach((n,r)=>{const i=L.fromPath(r);this.mutations.push(new Lm(i,this.precondition(i)))}),await async function(n,r){const i=U(n),s=tc(i.serializer)+"/documents",o={writes:r.map(a=>nc(i.serializer,a))};await i.po("Commit",s,o)}(this.datastore,this.mutations),this.committed=!0}recordVersion(e){let n;if(e.isFoundDocument())n=e.version;else{if(!e.isNoDocument())throw q();n=X.min()}const r=this.readVersions.get(e.key.toString());if(r){if(!n.isEqual(r))throw new A(b.ABORTED,"Document version changed between two reads.")}else this.readVersions.set(e.key.toString(),n)}precondition(e){const n=this.readVersions.get(e.toString());return!this.writtenDocs.has(e.toString())&&n?n.isEqual(X.min())?Ve.exists(!1):Ve.updateTime(n):Ve.none()}preconditionForUpdate(e){const n=this.readVersions.get(e.toString());if(!this.writtenDocs.has(e.toString())&&n){if(n.isEqual(X.min()))throw new A(b.INVALID_ARGUMENT,"Can't update a document that doesn't exist.");return Ve.updateTime(n)}return Ve.exists(!0)}write(e){this.ensureCommitNotCalled(),this.mutations.push(e)}ensureCommitNotCalled(){}}/**
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
 */class qF{constructor(e,n,r,i,s){this.asyncQueue=e,this.datastore=n,this.options=r,this.updateFunction=i,this.deferred=s,this.Fc=r.maxAttempts,this.Lo=new Ym(this.asyncQueue,"transaction_retry")}run(){this.Fc-=1,this.Bc()}Bc(){this.Lo.xo(async()=>{const e=new BF(this.datastore),n=this.Lc(e);n&&n.then(r=>{this.asyncQueue.enqueueAndForget(()=>e.commit().then(()=>{this.deferred.resolve(r)}).catch(i=>{this.qc(i)}))}).catch(r=>{this.qc(r)})})}Lc(e){try{const n=this.updateFunction(e);return!Rc(n)&&n.catch&&n.then?n:(this.deferred.reject(Error("Transaction callback must return a Promise")),null)}catch(n){return this.deferred.reject(n),null}}qc(e){this.Fc>0&&this.Uc(e)?(this.Fc-=1,this.asyncQueue.enqueueAndForget(()=>(this.Bc(),Promise.resolve()))):this.deferred.reject(e)}Uc(e){if(e.name==="FirebaseError"){const n=e.code;return n==="aborted"||n==="failed-precondition"||n==="already-exists"||!ZE(n)}return!1}}/**
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
 */class jF{constructor(e,n,r,i){this.authCredentials=e,this.appCheckCredentials=n,this.asyncQueue=r,this.databaseInfo=i,this.user=ht.UNAUTHENTICATED,this.clientId=pE.A(),this.authCredentialListener=()=>Promise.resolve(),this.appCheckCredentialListener=()=>Promise.resolve(),this.authCredentials.start(r,async s=>{x("FirestoreClient","Received user=",s.uid),await this.authCredentialListener(s),this.user=s}),this.appCheckCredentials.start(r,s=>(x("FirestoreClient","Received new app check token=",s),this.appCheckCredentialListener(s,this.user)))}async getConfiguration(){return{asyncQueue:this.asyncQueue,databaseInfo:this.databaseInfo,clientId:this.clientId,authCredentials:this.authCredentials,appCheckCredentials:this.appCheckCredentials,initialUser:this.user,maxConcurrentLimboResolutions:100}}setCredentialChangeListener(e){this.authCredentialListener=e}setAppCheckTokenChangeListener(e){this.appCheckCredentialListener=e}verifyNotTerminated(){if(this.asyncQueue.isShuttingDown)throw new A(b.FAILED_PRECONDITION,"The client has already been terminated.")}terminate(){this.asyncQueue.enterRestrictedMode();const e=new dt;return this.asyncQueue.enqueueAndForgetEvenWhileRestricted(async()=>{try{this._onlineComponents&&await this._onlineComponents.terminate(),this._offlineComponents&&await this._offlineComponents.terminate(),this.authCredentials.shutdown(),this.appCheckCredentials.shutdown(),e.resolve()}catch(n){const r=Fo(n,"Failed to shutdown persistence");e.reject(r)}}),e.promise}}async function Bu(t,e){t.asyncQueue.verifyOperationInProgress(),x("FirestoreClient","Initializing OfflineComponentProvider");const n=await t.getConfiguration();await e.initialize(n);let r=n.initialUser;t.setCredentialChangeListener(async i=>{r.isEqual(i)||(await C1(e.localStore,i),r=i)}),e.persistence.setDatabaseDeletedListener(()=>t.terminate()),t._offlineComponents=e}async function Wf(t,e){t.asyncQueue.verifyOperationInProgress();const n=await dg(t);x("FirestoreClient","Initializing OnlineComponentProvider");const r=await t.getConfiguration();await e.initialize(n,r),t.setCredentialChangeListener(i=>Dw(e.remoteStore,i)),t.setAppCheckTokenChangeListener((i,s)=>Dw(e.remoteStore,s)),t._onlineComponents=e}function Y1(t){return t.name==="FirebaseError"?t.code===b.FAILED_PRECONDITION||t.code===b.UNIMPLEMENTED:!(typeof DOMException<"u"&&t instanceof DOMException)||t.code===22||t.code===20||t.code===11}async function dg(t){if(!t._offlineComponents)if(t._uninitializedComponentsProvider){x("FirestoreClient","Using user provided OfflineComponentProvider");try{await Bu(t,t._uninitializedComponentsProvider._offline)}catch(e){const n=e;if(!Y1(n))throw n;Cn("Error using user provided cache. Falling back to memory cache: "+n),await Bu(t,new Gf)}}else x("FirestoreClient","Using default OfflineComponentProvider"),await Bu(t,new Gf);return t._offlineComponents}async function xh(t){return t._onlineComponents||(t._uninitializedComponentsProvider?(x("FirestoreClient","Using user provided OnlineComponentProvider"),await Wf(t,t._uninitializedComponentsProvider._online)):(x("FirestoreClient","Using default OnlineComponentProvider"),await Wf(t,new hg))),t._onlineComponents}function X1(t){return dg(t).then(e=>e.persistence)}function fg(t){return dg(t).then(e=>e.localStore)}function J1(t){return xh(t).then(e=>e.remoteStore)}function pg(t){return xh(t).then(e=>e.syncEngine)}function zF(t){return xh(t).then(e=>e.datastore)}async function yo(t){const e=await xh(t),n=e.eventManager;return n.onListen=bF.bind(null,e.syncEngine),n.onUnlisten=IF.bind(null,e.syncEngine),n}function HF(t){return t.asyncQueue.enqueue(async()=>{const e=await X1(t),n=await J1(t);return e.setNetworkEnabled(!0),function(r){const i=U(r);return i.Au.delete(0),Uc(i)}(n)})}function KF(t){return t.asyncQueue.enqueue(async()=>{const e=await X1(t),n=await J1(t);return e.setNetworkEnabled(!1),async function(r){const i=U(r);i.Au.add(0),await Oo(i),i.Pu.set("Offline")}(n)})}function GF(t,e){const n=new dt;return t.asyncQueue.enqueueAndForget(async()=>async function(r,i,s){try{const o=await function(a,c){const u=U(a);return u.persistence.runTransaction("read document","readonly",l=>u.localDocuments.getDocument(l,c))}(r,i);o.isFoundDocument()?s.resolve(o):o.isNoDocument()?s.resolve(null):s.reject(new A(b.UNAVAILABLE,"Failed to get document from cache. (However, this document may exist on the server. Run again without setting 'source' in the GetOptions to attempt to retrieve the document from the server.)"))}catch(o){const a=Fo(o,`Failed to get document '${i} from cache`);s.reject(a)}}(await fg(t),e,n)),n.promise}function Z1(t,e,n={}){const r=new dt;return t.asyncQueue.enqueueAndForget(async()=>function(i,s,o,a,c){const u=new Ch({next:h=>{s.enqueueAndForget(()=>ng(i,l));const d=h.docs.has(o);!d&&h.fromCache?c.reject(new A(b.UNAVAILABLE,"Failed to get document because the client is offline.")):d&&h.fromCache&&a&&a.source==="server"?c.reject(new A(b.UNAVAILABLE,'Failed to get document from server. (However, this document does exist in the local cache. Run again without setting source to "server" to retrieve the cached document.)')):c.resolve(h)},error:h=>c.reject(h)}),l=new ig(No(o.path),u,{includeMetadataChanges:!0,Uu:!0});return tg(i,l)}(await yo(t),t.asyncQueue,e,n,r)),r.promise}function WF(t,e){const n=new dt;return t.asyncQueue.enqueueAndForget(async()=>async function(r,i,s){try{const o=await _l(r,i,!0),a=new H1(i,o.sr),c=a.nc(o.documents),u=a.applyChanges(c,!1);s.resolve(u.snapshot)}catch(o){const a=Fo(o,`Failed to execute query '${i} against cache`);s.reject(a)}}(await fg(t),e,n)),n.promise}function eT(t,e,n={}){const r=new dt;return t.asyncQueue.enqueueAndForget(async()=>function(i,s,o,a,c){const u=new Ch({next:h=>{s.enqueueAndForget(()=>ng(i,l)),h.fromCache&&a.source==="server"?c.reject(new A(b.UNAVAILABLE,'Failed to get documents from server. (However, these documents may exist in the local cache. Run again without setting source to "server" to retrieve the cached documents.)')):c.resolve(h)},error:h=>c.reject(h)}),l=new ig(o,u,{includeMetadataChanges:!0,Uu:!0});return tg(i,l)}(await yo(t),t.asyncQueue,e,n,r)),r.promise}function QF(t,e){const n=new Ch(e);return t.asyncQueue.enqueueAndForget(async()=>function(r,i){U(r).Nu.add(i),i.next()}(await yo(t),n)),()=>{n.Sc(),t.asyncQueue.enqueueAndForget(async()=>function(r,i){U(r).Nu.delete(i)}(await yo(t),n))}}function YF(t,e,n,r){const i=function(s,o){let a;return a=typeof s=="string"?t1().encode(s):s,function(c,u){return new $F(c,u)}(function(c,u){if(c instanceof Uint8Array)return Uw(c,u);if(c instanceof ArrayBuffer)return Uw(new Uint8Array(c),u);if(c instanceof ReadableStream)return c.getReader();throw new Error("Source of `toByteStreamReader` has to be a ArrayBuffer or ReadableStream")}(a),o)}(n,Fc(e));t.asyncQueue.enqueueAndForget(async()=>{UF(await pg(t),i,r)})}function XF(t,e){return t.asyncQueue.enqueue(async()=>function(n,r){const i=U(n);return i.persistence.runTransaction("Get named query","readonly",s=>i.Ls.getNamedQuery(s,r))}(await fg(t),e))}/**
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
 */const Vw=new Map;/**
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
 */function mg(t,e,n){if(!n)throw new A(b.INVALID_ARGUMENT,`Function ${t}() cannot be called with an empty ${e}.`)}function tT(t,e,n,r){if(e===!0&&r===!0)throw new A(b.INVALID_ARGUMENT,`${t} and ${n} cannot be used together.`)}function $w(t){if(!L.isDocumentKey(t))throw new A(b.INVALID_ARGUMENT,`Invalid document reference. Document references must have an even number of segments, but ${t} has ${t.length}.`)}function Bw(t){if(L.isDocumentKey(t))throw new A(b.INVALID_ARGUMENT,`Invalid collection reference. Collection references must have an odd number of segments, but ${t} has ${t.length}.`)}function Rh(t){if(t===void 0)return"undefined";if(t===null)return"null";if(typeof t=="string")return t.length>20&&(t=`${t.substring(0,20)}...`),JSON.stringify(t);if(typeof t=="number"||typeof t=="boolean")return""+t;if(typeof t=="object"){if(t instanceof Array)return"an array";{const e=function(n){return n.constructor?n.constructor.name:null}(t);return e?`a custom ${e} object`:"an object"}}return typeof t=="function"?"a function":q()}function ve(t,e){if("_delegate"in t&&(t=t._delegate),!(t instanceof e)){if(e.name===t.constructor.name)throw new A(b.INVALID_ARGUMENT,"Type does not match the expected instance. Did you pass a reference from a different Firestore SDK?");{const n=Rh(t);throw new A(b.INVALID_ARGUMENT,`Expected type '${e.name}', but it was: ${n}`)}}return t}function nT(t,e){if(e<=0)throw new A(b.INVALID_ARGUMENT,`Function ${t}() requires a positive number, but it was: ${e}.`)}/**
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
 */class qw{constructor(e){var n;if(e.host===void 0){if(e.ssl!==void 0)throw new A(b.INVALID_ARGUMENT,"Can't provide ssl option if host option is not set");this.host="firestore.googleapis.com",this.ssl=!0}else this.host=e.host,this.ssl=(n=e.ssl)===null||n===void 0||n;if(this.credentials=e.credentials,this.ignoreUndefinedProperties=!!e.ignoreUndefinedProperties,this.cache=e.localCache,e.cacheSizeBytes===void 0)this.cacheSizeBytes=41943040;else{if(e.cacheSizeBytes!==-1&&e.cacheSizeBytes<1048576)throw new A(b.INVALID_ARGUMENT,"cacheSizeBytes must be at least 1048576");this.cacheSizeBytes=e.cacheSizeBytes}tT("experimentalForceLongPolling",e.experimentalForceLongPolling,"experimentalAutoDetectLongPolling",e.experimentalAutoDetectLongPolling),this.experimentalForceLongPolling=!!e.experimentalForceLongPolling,this.experimentalForceLongPolling?this.experimentalAutoDetectLongPolling=!1:e.experimentalAutoDetectLongPolling===void 0?this.experimentalAutoDetectLongPolling=!1:this.experimentalAutoDetectLongPolling=!!e.experimentalAutoDetectLongPolling,this.useFetchStreams=!!e.useFetchStreams}isEqual(e){return this.host===e.host&&this.ssl===e.ssl&&this.credentials===e.credentials&&this.cacheSizeBytes===e.cacheSizeBytes&&this.experimentalForceLongPolling===e.experimentalForceLongPolling&&this.experimentalAutoDetectLongPolling===e.experimentalAutoDetectLongPolling&&this.ignoreUndefinedProperties===e.ignoreUndefinedProperties&&this.useFetchStreams===e.useFetchStreams}}/**
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
 */class Vc{constructor(e,n,r,i){this._authCredentials=e,this._appCheckCredentials=n,this._databaseId=r,this._app=i,this.type="firestore-lite",this._persistenceKey="(lite)",this._settings=new qw({}),this._settingsFrozen=!1}get app(){if(!this._app)throw new A(b.FAILED_PRECONDITION,"Firestore was not initialized using the Firebase SDK. 'app' is not available");return this._app}get _initialized(){return this._settingsFrozen}get _terminated(){return this._terminateTask!==void 0}_setSettings(e){if(this._settingsFrozen)throw new A(b.FAILED_PRECONDITION,"Firestore has already been started and its settings can no longer be changed. You can only modify settings before calling any other methods on a Firestore object.");this._settings=new qw(e),e.credentials!==void 0&&(this._authCredentials=function(n){if(!n)return new XO;switch(n.type){case"firstParty":return new tL(n.sessionIndex||"0",n.iamToken||null,n.authTokenFactory||null);case"provider":return n.client;default:throw new A(b.INVALID_ARGUMENT,"makeAuthCredentialsProvider failed due to invalid credential type")}}(e.credentials))}_getSettings(){return this._settings}_freezeSettings(){return this._settingsFrozen=!0,this._settings}_delete(){return this._terminateTask||(this._terminateTask=this._terminate()),this._terminateTask}toJSON(){return{app:this._app,databaseId:this._databaseId,settings:this._settings}}_terminate(){return function(e){const n=Vw.get(e);n&&(x("ComponentProvider","Removing Datastore"),Vw.delete(e),n.terminate())}(this),Promise.resolve()}}function JF(t,e,n,r={}){var i;const s=(t=ve(t,Vc))._getSettings();if(s.host!=="firestore.googleapis.com"&&s.host!==e&&Cn("Host has been set in both settings() and useEmulator(), emulator host will be used"),t._setSettings(Object.assign(Object.assign({},s),{host:`${e}:${n}`,ssl:!1})),r.mockUserToken){let o,a;if(typeof r.mockUserToken=="string")o=r.mockUserToken,a=ht.MOCK_USER;else{o=Qb(r.mockUserToken,(i=t._app)===null||i===void 0?void 0:i.options.projectId);const c=r.mockUserToken.sub||r.mockUserToken.user_id;if(!c)throw new A(b.INVALID_ARGUMENT,"mockUserToken must contain 'sub' or 'user_id' field!");a=new ht(c)}t._authCredentials=new JO(new fE(o,a))}}/**
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
 */class Le{constructor(e,n,r){this.converter=n,this._key=r,this.type="document",this.firestore=e}get _path(){return this._key.path}get id(){return this._key.path.lastSegment()}get path(){return this._key.path.canonicalString()}get parent(){return new Gn(this.firestore,this.converter,this._key.path.popLast())}withConverter(e){return new Le(this.firestore,e,this._key)}}class St{constructor(e,n,r){this.converter=n,this._query=r,this.type="query",this.firestore=e}withConverter(e){return new St(this.firestore,e,this._query)}}class Gn extends St{constructor(e,n,r){super(e,n,No(r)),this._path=r,this.type="collection"}get id(){return this._query.path.lastSegment()}get path(){return this._query.path.canonicalString()}get parent(){const e=this._path.popLast();return e.isEmpty()?null:new Le(this.firestore,null,new L(e))}withConverter(e){return new Gn(this.firestore,e,this._path)}}function rT(t,e,...n){if(t=Y(t),mg("collection","path",e),t instanceof Vc){const r=me.fromString(e,...n);return Bw(r),new Gn(t,null,r)}{if(!(t instanceof Le||t instanceof Gn))throw new A(b.INVALID_ARGUMENT,"Expected first argument to collection() to be a CollectionReference, a DocumentReference or FirebaseFirestore");const r=t._path.child(me.fromString(e,...n));return Bw(r),new Gn(t.firestore,null,r)}}function ZF(t,e){if(t=ve(t,Vc),mg("collectionGroup","collection id",e),e.indexOf("/")>=0)throw new A(b.INVALID_ARGUMENT,`Invalid collection ID '${e}' passed to function collectionGroup(). Collection IDs must not contain '/'.`);return new St(t,null,function(n){return new Ir(me.emptyPath(),n)}(e))}function Tl(t,e,...n){if(t=Y(t),arguments.length===1&&(e=pE.A()),mg("doc","path",e),t instanceof Vc){const r=me.fromString(e,...n);return $w(r),new Le(t,null,new L(r))}{if(!(t instanceof Le||t instanceof Gn))throw new A(b.INVALID_ARGUMENT,"Expected first argument to collection() to be a CollectionReference, a DocumentReference or FirebaseFirestore");const r=t._path.child(me.fromString(e,...n));return $w(r),new Le(t.firestore,t instanceof Gn?t.converter:null,new L(r))}}function iT(t,e){return t=Y(t),e=Y(e),(t instanceof Le||t instanceof Gn)&&(e instanceof Le||e instanceof Gn)&&t.firestore===e.firestore&&t.path===e.path&&t.converter===e.converter}function sT(t,e){return t=Y(t),e=Y(e),t instanceof St&&e instanceof St&&t.firestore===e.firestore&&Pc(t._query,e._query)&&t.converter===e.converter}/**
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
 */class e4{constructor(){this.Kc=Promise.resolve(),this.Gc=[],this.Qc=!1,this.jc=[],this.zc=null,this.Wc=!1,this.Hc=!1,this.Jc=[],this.Lo=new Ym(this,"async_queue_retry"),this.Yc=()=>{const n=$u();n&&x("AsyncQueue","Visibility state changed to "+n.visibilityState),this.Lo.ko()};const e=$u();e&&typeof e.addEventListener=="function"&&e.addEventListener("visibilitychange",this.Yc)}get isShuttingDown(){return this.Qc}enqueueAndForget(e){this.enqueue(e)}enqueueAndForgetEvenWhileRestricted(e){this.Xc(),this.Zc(e)}enterRestrictedMode(e){if(!this.Qc){this.Qc=!0,this.Hc=e||!1;const n=$u();n&&typeof n.removeEventListener=="function"&&n.removeEventListener("visibilitychange",this.Yc)}}enqueue(e){if(this.Xc(),this.Qc)return new Promise(()=>{});const n=new dt;return this.Zc(()=>this.Qc&&this.Hc?Promise.resolve():(e().then(n.resolve,n.reject),n.promise)).then(()=>n.promise)}enqueueRetryable(e){this.enqueueAndForget(()=>(this.Gc.push(e),this.ta()))}async ta(){if(this.Gc.length!==0){try{await this.Gc[0](),this.Gc.shift(),this.Lo.reset()}catch(e){if(!fi(e))throw e;x("AsyncQueue","Operation failed with retryable error: "+e)}this.Gc.length>0&&this.Lo.xo(()=>this.ta())}}Zc(e){const n=this.Kc.then(()=>(this.Wc=!0,e().catch(r=>{this.zc=r,this.Wc=!1;const i=function(s){let o=s.message||"";return s.stack&&(o=s.stack.includes(s.message)?s.stack:s.message+`
`+s.stack),o}(r);throw Xe("INTERNAL UNHANDLED ERROR: ",i),r}).then(r=>(this.Wc=!1,r))));return this.Kc=n,n}enqueueAfterDelay(e,n,r){this.Xc(),this.Jc.indexOf(e)>-1&&(n=0);const i=eg.createAndSchedule(this,e,n,r,s=>this.ea(s));return this.jc.push(i),i}Xc(){this.zc&&q()}verifyOperationInProgress(){}async na(){let e;do e=this.Kc,await e;while(e!==this.Kc)}sa(e){for(const n of this.jc)if(n.timerId===e)return!0;return!1}ia(e){return this.na().then(()=>{this.jc.sort((n,r)=>n.targetTimeMs-r.targetTimeMs);for(const n of this.jc)if(n.skipDelay(),e!=="all"&&n.timerId===e)break;return this.na()})}ra(e){this.Jc.push(e)}ea(e){const n=this.jc.indexOf(e);this.jc.splice(n,1)}}function Qf(t){return function(e,n){if(typeof e!="object"||e===null)return!1;const r=e;for(const i of n)if(i in r&&typeof r[i]=="function")return!0;return!1}(t,["next","error","complete"])}class t4{constructor(){this._progressObserver={},this._taskCompletionResolver=new dt,this._lastProgress={taskState:"Running",totalBytes:0,totalDocuments:0,bytesLoaded:0,documentsLoaded:0}}onProgress(e,n,r){this._progressObserver={next:e,error:n,complete:r}}catch(e){return this._taskCompletionResolver.promise.catch(e)}then(e,n){return this._taskCompletionResolver.promise.then(e,n)}_completeWith(e){this._updateProgress(e),this._progressObserver.complete&&this._progressObserver.complete(),this._taskCompletionResolver.resolve(e)}_failWith(e){this._lastProgress.taskState="Error",this._progressObserver.next&&this._progressObserver.next(this._lastProgress),this._progressObserver.error&&this._progressObserver.error(e),this._taskCompletionResolver.reject(e)}_updateProgress(e){this._lastProgress=e,this._progressObserver.next&&this._progressObserver.next(e)}}/**
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
 */const n4=-1;class Qe extends Vc{constructor(e,n,r,i){super(e,n,r,i),this.type="firestore",this._queue=new e4,this._persistenceKey=(i==null?void 0:i.name)||"[DEFAULT]"}_terminate(){return this._firestoreClient||oT(this),this._firestoreClient.terminate()}}function gt(t){return t._firestoreClient||oT(t),t._firestoreClient.verifyNotTerminated(),t._firestoreClient}function oT(t){var e,n,r;const i=t._freezeSettings(),s=function(o,a,c,u){return new NL(o,a,c,u.host,u.ssl,u.experimentalForceLongPolling,u.experimentalAutoDetectLongPolling,u.useFetchStreams)}(t._databaseId,((e=t._app)===null||e===void 0?void 0:e.options.appId)||"",t._persistenceKey,i);t._firestoreClient=new jF(t._authCredentials,t._appCheckCredentials,t._queue,s),((n=i.cache)===null||n===void 0?void 0:n._offlineComponentProvider)&&((r=i.cache)===null||r===void 0?void 0:r._onlineComponentProvider)&&(t._firestoreClient._uninitializedComponentsProvider={_offlineKind:i.cache.kind,_offline:i.cache._offlineComponentProvider,_online:i.cache._onlineComponentProvider})}function r4(t,e){cT(t=ve(t,Qe));const n=gt(t);if(n._uninitializedComponentsProvider)throw new A(b.FAILED_PRECONDITION,"SDK cache is already specified.");Cn("enableIndexedDbPersistence() will be deprecated in the future, you can use `FirestoreSettings.cache` instead.");const r=t._freezeSettings(),i=new hg;return aT(n,i,new Q1(i,r.cacheSizeBytes,e==null?void 0:e.forceOwnership))}function i4(t){cT(t=ve(t,Qe));const e=gt(t);if(e._uninitializedComponentsProvider)throw new A(b.FAILED_PRECONDITION,"SDK cache is already specified.");Cn("enableMultiTabIndexedDbPersistence() will be deprecated in the future, you can use `FirestoreSettings.cache` instead.");const n=t._freezeSettings(),r=new hg;return aT(e,r,new VF(r,n.cacheSizeBytes))}function aT(t,e,n){const r=new dt;return t.asyncQueue.enqueue(async()=>{try{await Bu(t,n),await Wf(t,e),r.resolve()}catch(i){const s=i;if(!Y1(s))throw s;Cn("Error enabling indexeddb cache. Falling back to memory cache: "+s),r.reject(s)}}).then(()=>r.promise)}function s4(t){if(t._initialized&&!t._terminated)throw new A(b.FAILED_PRECONDITION,"Persistence can only be cleared before a Firestore instance is initialized or after it is terminated.");const e=new dt;return t._queue.enqueueAndForgetEvenWhileRestricted(async()=>{try{await async function(n){if(!_n.D())return Promise.resolve();const r=n+"main";await _n.delete(r)}(Gm(t._databaseId,t._persistenceKey)),e.resolve()}catch(n){e.reject(n)}}),e.promise}function o4(t){return function(e){const n=new dt;return e.asyncQueue.enqueueAndForget(async()=>AF(await pg(e),n)),n.promise}(gt(t=ve(t,Qe)))}function a4(t){return HF(gt(t=ve(t,Qe)))}function c4(t){return KF(gt(t=ve(t,Qe)))}function u4(t,e){const n=gt(t=ve(t,Qe)),r=new t4;return YF(n,t._databaseId,e,r),r}function l4(t,e){return XF(gt(t=ve(t,Qe)),e).then(n=>n?new St(t,null,n.query):null)}function cT(t){if(t._initialized||t._terminated)throw new A(b.FAILED_PRECONDITION,"Firestore has already been started and persistence can no longer be enabled. You can only enable persistence before calling any other methods on a Firestore object.")}/**
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
 */class Jn{constructor(e){this._byteString=e}static fromBase64String(e){try{return new Jn(at.fromBase64String(e))}catch(n){throw new A(b.INVALID_ARGUMENT,"Failed to construct data from Base64 string: "+n)}}static fromUint8Array(e){return new Jn(at.fromUint8Array(e))}toBase64(){return this._byteString.toBase64()}toUint8Array(){return this._byteString.toUint8Array()}toString(){return"Bytes(base64: "+this.toBase64()+")"}isEqual(e){return this._byteString.isEqual(e._byteString)}}/**
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
 */class ii{constructor(...e){for(let n=0;n<e.length;++n)if(e[n].length===0)throw new A(b.INVALID_ARGUMENT,"Invalid field name at argument $(i + 1). Field names must not be empty.");this._internalPath=new Je(e)}isEqual(e){return this._internalPath.isEqual(e._internalPath)}}/**
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
 */class gs{constructor(e){this._methodName=e}}/**
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
 */class Nh{constructor(e,n){if(!isFinite(e)||e<-90||e>90)throw new A(b.INVALID_ARGUMENT,"Latitude must be a number between -90 and 90, but was: "+e);if(!isFinite(n)||n<-180||n>180)throw new A(b.INVALID_ARGUMENT,"Longitude must be a number between -180 and 180, but was: "+n);this._lat=e,this._long=n}get latitude(){return this._lat}get longitude(){return this._long}isEqual(e){return this._lat===e._lat&&this._long===e._long}toJSON(){return{latitude:this._lat,longitude:this._long}}_compareTo(e){return oe(this._lat,e._lat)||oe(this._long,e._long)}}/**
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
 */const h4=/^__.*__$/;class d4{constructor(e,n,r){this.data=e,this.fieldMask=n,this.fieldTransforms=r}toMutation(e,n){return this.fieldMask!==null?new Er(e,this.data,this.fieldMask,n,this.fieldTransforms):new Po(e,this.data,n,this.fieldTransforms)}}class uT{constructor(e,n,r){this.data=e,this.fieldMask=n,this.fieldTransforms=r}toMutation(e,n){return new Er(e,this.data,this.fieldMask,n,this.fieldTransforms)}}function lT(t){switch(t){case 0:case 2:case 1:return!0;case 3:case 4:return!1;default:throw q()}}class Ph{constructor(e,n,r,i,s,o){this.settings=e,this.databaseId=n,this.serializer=r,this.ignoreUndefinedProperties=i,s===void 0&&this.oa(),this.fieldTransforms=s||[],this.fieldMask=o||[]}get path(){return this.settings.path}get ua(){return this.settings.ua}ca(e){return new Ph(Object.assign(Object.assign({},this.settings),e),this.databaseId,this.serializer,this.ignoreUndefinedProperties,this.fieldTransforms,this.fieldMask)}aa(e){var n;const r=(n=this.path)===null||n===void 0?void 0:n.child(e),i=this.ca({path:r,ha:!1});return i.la(e),i}fa(e){var n;const r=(n=this.path)===null||n===void 0?void 0:n.child(e),i=this.ca({path:r,ha:!1});return i.oa(),i}da(e){return this.ca({path:void 0,ha:!0})}_a(e){return Sl(e,this.settings.methodName,this.settings.wa||!1,this.path,this.settings.ma)}contains(e){return this.fieldMask.find(n=>e.isPrefixOf(n))!==void 0||this.fieldTransforms.find(n=>e.isPrefixOf(n.field))!==void 0}oa(){if(this.path)for(let e=0;e<this.path.length;e++)this.la(this.path.get(e))}la(e){if(e.length===0)throw this._a("Document fields must not be empty");if(lT(this.ua)&&h4.test(e))throw this._a('Document fields cannot begin and end with "__"')}}class f4{constructor(e,n,r){this.databaseId=e,this.ignoreUndefinedProperties=n,this.serializer=r||Fc(e)}ga(e,n,r,i=!1){return new Ph({ua:e,methodName:n,ma:r,path:Je.emptyPath(),ha:!1,wa:i},this.databaseId,this.serializer,this.ignoreUndefinedProperties)}}function ys(t){const e=t._freezeSettings(),n=Fc(t._databaseId);return new f4(t._databaseId,!!e.ignoreUndefinedProperties,n)}function Dh(t,e,n,r,i,s={}){const o=t.ga(s.merge||s.mergeFields?2:0,e,n,i);wg("Data must be an object, but it was:",o,r);const a=fT(r,o);let c,u;if(s.merge)c=new Gt(o.fieldMask),u=o.fieldTransforms;else if(s.mergeFields){const l=[];for(const h of s.mergeFields){const d=Yf(e,h,n);if(!o.contains(d))throw new A(b.INVALID_ARGUMENT,`Field '${d}' is specified in your field mask but missing from your input data.`);mT(l,d)||l.push(d)}c=new Gt(l),u=o.fieldTransforms.filter(h=>c.covers(h.field))}else c=null,u=o.fieldTransforms;return new d4(new _t(a),c,u)}class $c extends gs{_toFieldTransform(e){if(e.ua!==2)throw e.ua===1?e._a(`${this._methodName}() can only appear at the top level of your update data`):e._a(`${this._methodName}() cannot be used with set() unless you pass {merge:true}`);return e.fieldMask.push(e.path),null}isEqual(e){return e instanceof $c}}function hT(t,e,n){return new Ph({ua:3,ma:e.settings.ma,methodName:t._methodName,ha:n},e.databaseId,e.serializer,e.ignoreUndefinedProperties)}class gg extends gs{_toFieldTransform(e){return new Oc(e.path,new uo)}isEqual(e){return e instanceof gg}}class p4 extends gs{constructor(e,n){super(e),this.ya=n}_toFieldTransform(e){const n=hT(this,e,!0),r=this.ya.map(s=>vs(s,n)),i=new ns(r);return new Oc(e.path,i)}isEqual(e){return this===e}}class m4 extends gs{constructor(e,n){super(e),this.ya=n}_toFieldTransform(e){const n=hT(this,e,!0),r=this.ya.map(s=>vs(s,n)),i=new rs(r);return new Oc(e.path,i)}isEqual(e){return this===e}}class g4 extends gs{constructor(e,n){super(e),this.pa=n}_toFieldTransform(e){const n=new lo(e.serializer,KE(e.serializer,this.pa));return new Oc(e.path,n)}isEqual(e){return this===e}}function yg(t,e,n,r){const i=t.ga(1,e,n);wg("Data must be an object, but it was:",i,r);const s=[],o=_t.empty();ms(r,(c,u)=>{const l=_g(e,c,n);u=Y(u);const h=i.fa(l);if(u instanceof $c)s.push(l);else{const d=vs(u,h);d!=null&&(s.push(l),o.set(l,d))}});const a=new Gt(s);return new uT(o,a,i.fieldTransforms)}function vg(t,e,n,r,i,s){const o=t.ga(1,e,n),a=[Yf(e,r,n)],c=[i];if(s.length%2!=0)throw new A(b.INVALID_ARGUMENT,`Function ${e}() needs to be called with an even number of arguments that alternate between field names and values.`);for(let d=0;d<s.length;d+=2)a.push(Yf(e,s[d])),c.push(s[d+1]);const u=[],l=_t.empty();for(let d=a.length-1;d>=0;--d)if(!mT(u,a[d])){const f=a[d];let m=c[d];m=Y(m);const y=o.fa(f);if(m instanceof $c)u.push(f);else{const I=vs(m,y);I!=null&&(u.push(f),l.set(f,I))}}const h=new Gt(u);return new uT(l,h,o.fieldTransforms)}function dT(t,e,n,r=!1){return vs(n,t.ga(r?4:3,e))}function vs(t,e){if(pT(t=Y(t)))return wg("Unsupported field value:",e,t),fT(t,e);if(t instanceof gs)return function(n,r){if(!lT(r.ua))throw r._a(`${n._methodName}() can only be used with update() and set()`);if(!r.path)throw r._a(`${n._methodName}() is not currently supported inside arrays`);const i=n._toFieldTransform(r);i&&r.fieldTransforms.push(i)}(t,e),null;if(t===void 0&&e.ignoreUndefinedProperties)return null;if(e.path&&e.fieldMask.push(e.path),t instanceof Array){if(e.settings.ha&&e.ua!==4)throw e._a("Nested arrays are not supported");return function(n,r){const i=[];let s=0;for(const o of n){let a=vs(o,r.da(s));a==null&&(a={nullValue:"NULL_VALUE"}),i.push(a),s++}return{arrayValue:{values:i}}}(t,e)}return function(n,r){if((n=Y(n))===null)return{nullValue:"NULL_VALUE"};if(typeof n=="number")return KE(r.serializer,n);if(typeof n=="boolean")return{booleanValue:n};if(typeof n=="string")return{stringValue:n};if(n instanceof Date){const i=$e.fromDate(n);return{timestampValue:ho(r.serializer,i)}}if(n instanceof $e){const i=new $e(n.seconds,1e3*Math.floor(n.nanoseconds/1e3));return{timestampValue:ho(r.serializer,i)}}if(n instanceof Nh)return{geoPointValue:{latitude:n.latitude,longitude:n.longitude}};if(n instanceof Jn)return{bytesValue:i1(r.serializer,n._byteString)};if(n instanceof Le){const i=r.databaseId,s=n.firestore._databaseId;if(!s.isEqual(i))throw r._a(`Document reference is for database ${s.projectId}/${s.database} but should be for database ${i.projectId}/${i.database}`);return{referenceValue:Bm(n.firestore._databaseId||r.databaseId,n._key.path)}}throw r._a(`Unsupported field value: ${Rh(n)}`)}(t,e)}function fT(t,e){const n={};return kE(t)?e.path&&e.path.length>0&&e.fieldMask.push(e.path):ms(t,(r,i)=>{const s=vs(i,e.aa(r));s!=null&&(n[r]=s)}),{mapValue:{fields:n}}}function pT(t){return!(typeof t!="object"||t===null||t instanceof Array||t instanceof Date||t instanceof $e||t instanceof Nh||t instanceof Jn||t instanceof Le||t instanceof gs)}function wg(t,e,n){if(!pT(n)||!function(r){return typeof r=="object"&&r!==null&&(Object.getPrototypeOf(r)===Object.prototype||Object.getPrototypeOf(r)===null)}(n)){const r=Rh(n);throw r==="an object"?e._a(t+" a custom object"):e._a(t+" "+r)}}function Yf(t,e,n){if((e=Y(e))instanceof ii)return e._internalPath;if(typeof e=="string")return _g(t,e);throw Sl("Field path arguments must be of type string or ",t,!1,void 0,n)}const y4=new RegExp("[~\\*/\\[\\]]");function _g(t,e,n){if(e.search(y4)>=0)throw Sl(`Invalid field path (${e}). Paths must not contain '~', '*', '/', '[', or ']'`,t,!1,void 0,n);try{return new ii(...e.split("."))._internalPath}catch{throw Sl(`Invalid field path (${e}). Paths must not be empty, begin with '.', end with '.', or contain '..'`,t,!1,void 0,n)}}function Sl(t,e,n,r,i){const s=r&&!r.isEmpty(),o=i!==void 0;let a=`Function ${e}() called with invalid data`;n&&(a+=" (via `toFirestore()`)"),a+=". ";let c="";return(s||o)&&(c+=" (found",s&&(c+=` in field ${r}`),o&&(c+=` in document ${i}`),c+=")"),new A(b.INVALID_ARGUMENT,a+t+c)}function mT(t,e){return t.some(n=>n.isEqual(e))}/**
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
 */class ic{constructor(e,n,r,i,s){this._firestore=e,this._userDataWriter=n,this._key=r,this._document=i,this._converter=s}get id(){return this._key.path.lastSegment()}get ref(){return new Le(this._firestore,this._converter,this._key)}exists(){return this._document!==null}data(){if(this._document){if(this._converter){const e=new v4(this._firestore,this._userDataWriter,this._key,this._document,null);return this._converter.fromFirestore(e)}return this._userDataWriter.convertValue(this._document.data.value)}}get(e){if(this._document){const n=this._document.data.field(Oh("DocumentSnapshot.get",e));if(n!==null)return this._userDataWriter.convertValue(n)}}}class v4 extends ic{data(){return super.data()}}function Oh(t,e){return typeof e=="string"?_g(t,e):e instanceof ii?e._internalPath:e._delegate._internalPath}/**
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
 */function gT(t){if(t.limitType==="L"&&t.explicitOrderBy.length===0)throw new A(b.UNIMPLEMENTED,"limitToLast() queries require specifying at least one orderBy() clause")}class bg{}class Bc extends bg{}function Lr(t,e,...n){let r=[];e instanceof bg&&r.push(e),r=r.concat(n),function(i){const s=i.filter(a=>a instanceof Ig).length,o=i.filter(a=>a instanceof Lh).length;if(s>1||s>0&&o>0)throw new A(b.INVALID_ARGUMENT,"InvalidQuery. When using composite filters, you cannot use more than one filter at the top level. Consider nesting the multiple filters within an `and(...)` statement. For example: change `query(query, where(...), or(...))` to `query(query, and(where(...), or(...)))`.")}(r);for(const i of r)t=i._apply(t);return t}class Lh extends Bc{constructor(e,n,r){super(),this._field=e,this._op=n,this._value=r,this.type="where"}static _create(e,n,r){return new Lh(e,n,r)}_apply(e){const n=this._parse(e);return vT(e._query,n),new St(e.firestore,e.converter,Mf(e._query,n))}_parse(e){const n=ys(e.firestore);return function(i,s,o,a,c,u,l){let h;if(c.isKeyField()){if(u==="array-contains"||u==="array-contains-any")throw new A(b.INVALID_ARGUMENT,`Invalid Query. You can't perform '${u}' queries on documentId().`);if(u==="in"||u==="not-in"){zw(l,u);const d=[];for(const f of l)d.push(jw(a,i,f));h={arrayValue:{values:d}}}else h=jw(a,i,l)}else u!=="in"&&u!=="not-in"&&u!=="array-contains-any"||zw(l,u),h=dT(o,s,l,u==="in"||u==="not-in");return de.create(c,u,h)}(e._query,"where",n,e.firestore._databaseId,this._field,this._op,this._value)}}function w4(t,e,n){const r=e,i=Oh("where",t);return Lh._create(i,r,n)}class Ig extends bg{constructor(e,n){super(),this.type=e,this._queryConstraints=n}static _create(e,n){return new Ig(e,n)}_parse(e){const n=this._queryConstraints.map(r=>r._parse(e)).filter(r=>r.getFilters().length>0);return n.length===1?n[0]:Ie.create(n,this._getOperator())}_apply(e){const n=this._parse(e);return n.getFilters().length===0?e:(function(r,i){let s=r;const o=i.getFlattenedFilters();for(const a of o)vT(s,a),s=Mf(s,a)}(e._query,n),new St(e.firestore,e.converter,Mf(e._query,n)))}_getQueryConstraints(){return this._queryConstraints}_getOperator(){return this.type==="and"?"and":"or"}}class Eg extends Bc{constructor(e,n){super(),this._field=e,this._direction=n,this.type="orderBy"}static _create(e,n){return new Eg(e,n)}_apply(e){const n=function(r,i,s){if(r.startAt!==null)throw new A(b.INVALID_ARGUMENT,"Invalid query. You must not call startAt() or startAfter() before calling orderBy().");if(r.endAt!==null)throw new A(b.INVALID_ARGUMENT,"Invalid query. You must not call endAt() or endBefore() before calling orderBy().");const o=new Qs(i,s);return function(a,c){if(Pm(a)===null){const u=bh(a);u!==null&&wT(a,u,c.field)}}(r,o),o}(e._query,this._field,this._direction);return new St(e.firestore,e.converter,function(r,i){const s=r.explicitOrderBy.concat([i]);return new Ir(r.path,r.collectionGroup,s,r.filters.slice(),r.limit,r.limitType,r.startAt,r.endAt)}(e._query,n))}}function _4(t,e="asc"){const n=e,r=Oh("orderBy",t);return Eg._create(r,n)}class Mh extends Bc{constructor(e,n,r){super(),this.type=e,this._limit=n,this._limitType=r}static _create(e,n,r){return new Mh(e,n,r)}_apply(e){return new St(e.firestore,e.converter,gl(e._query,this._limit,this._limitType))}}function b4(t){return nT("limit",t),Mh._create("limit",t,"F")}function I4(t){return nT("limitToLast",t),Mh._create("limitToLast",t,"L")}class Fh extends Bc{constructor(e,n,r){super(),this.type=e,this._docOrFields=n,this._inclusive=r}static _create(e,n,r){return new Fh(e,n,r)}_apply(e){const n=yT(e,this.type,this._docOrFields,this._inclusive);return new St(e.firestore,e.converter,function(r,i){return new Ir(r.path,r.collectionGroup,r.explicitOrderBy.slice(),r.filters.slice(),r.limit,r.limitType,i,r.endAt)}(e._query,n))}}function E4(...t){return Fh._create("startAt",t,!0)}function T4(...t){return Fh._create("startAfter",t,!1)}class Uh extends Bc{constructor(e,n,r){super(),this.type=e,this._docOrFields=n,this._inclusive=r}static _create(e,n,r){return new Uh(e,n,r)}_apply(e){const n=yT(e,this.type,this._docOrFields,this._inclusive);return new St(e.firestore,e.converter,function(r,i){return new Ir(r.path,r.collectionGroup,r.explicitOrderBy.slice(),r.filters.slice(),r.limit,r.limitType,r.startAt,i)}(e._query,n))}}function S4(...t){return Uh._create("endBefore",t,!1)}function k4(...t){return Uh._create("endAt",t,!0)}function yT(t,e,n,r){if(n[0]=Y(n[0]),n[0]instanceof ic)return function(i,s,o,a,c){if(!a)throw new A(b.NOT_FOUND,`Can't use a DocumentSnapshot that doesn't exist for ${o}().`);const u=[];for(const l of Wi(i))if(l.field.isKeyField())u.push(es(s,a.key));else{const h=a.data.field(l.field);if(_h(h))throw new A(b.INVALID_ARGUMENT,'Invalid query. You are trying to start or end a query using a document for which the field "'+l.field+'" is an uncommitted server timestamp. (Since the value of this field is unknown, you cannot start/end a query with it.)');if(h===null){const d=l.field.canonicalString();throw new A(b.INVALID_ARGUMENT,`Invalid query. You are trying to start or end a query using a document for which the field '${d}' (used as the orderBy) does not exist.`)}u.push(h)}return new ni(u,c)}(t._query,t.firestore._databaseId,e,n[0]._document,r);{const i=ys(t.firestore);return function(s,o,a,c,u,l){const h=s.explicitOrderBy;if(u.length>h.length)throw new A(b.INVALID_ARGUMENT,`Too many arguments provided to ${c}(). The number of arguments must be less than or equal to the number of orderBy() clauses`);const d=[];for(let f=0;f<u.length;f++){const m=u[f];if(h[f].field.isKeyField()){if(typeof m!="string")throw new A(b.INVALID_ARGUMENT,`Invalid query. Expected a string for document ID in ${c}(), but got a ${typeof m}`);if(!Dm(s)&&m.indexOf("/")!==-1)throw new A(b.INVALID_ARGUMENT,`Invalid query. When querying a collection and ordering by documentId(), the value passed to ${c}() must be a plain document ID, but '${m}' contains a slash.`);const y=s.path.child(me.fromString(m));if(!L.isDocumentKey(y))throw new A(b.INVALID_ARGUMENT,`Invalid query. When querying a collection group and ordering by documentId(), the value passed to ${c}() must result in a valid document path, but '${y}' is not because it contains an odd number of segments.`);const I=new L(y);d.push(es(o,I))}else{const y=dT(a,c,m);d.push(y)}}return new ni(d,l)}(t._query,t.firestore._databaseId,i,e,n,r)}}function jw(t,e,n){if(typeof(n=Y(n))=="string"){if(n==="")throw new A(b.INVALID_ARGUMENT,"Invalid query. When querying with documentId(), you must provide a valid document ID, but it was an empty string.");if(!Dm(e)&&n.indexOf("/")!==-1)throw new A(b.INVALID_ARGUMENT,`Invalid query. When querying a collection by documentId(), you must provide a plain document ID, but '${n}' contains a '/' character.`);const r=e.path.child(me.fromString(n));if(!L.isDocumentKey(r))throw new A(b.INVALID_ARGUMENT,`Invalid query. When querying a collection group by documentId(), the value provided must result in a valid document path, but '${r}' is not because it has an odd number of segments (${r.length}).`);return es(t,new L(r))}if(n instanceof Le)return es(t,n._key);throw new A(b.INVALID_ARGUMENT,`Invalid query. When querying with documentId(), you must provide a valid string or a DocumentReference, but it was: ${Rh(n)}.`)}function zw(t,e){if(!Array.isArray(t)||t.length===0)throw new A(b.INVALID_ARGUMENT,`Invalid Query. A non-empty array is required for '${e.toString()}' filters.`)}function vT(t,e){if(e.isInequality()){const r=bh(t),i=e.field;if(r!==null&&!r.isEqual(i))throw new A(b.INVALID_ARGUMENT,`Invalid query. All where filters with an inequality (<, <=, !=, not-in, >, or >=) must be on the same field. But you have inequality filters on '${r.toString()}' and '${i.toString()}'`);const s=Pm(t);s!==null&&wT(t,i,s)}const n=function(r,i){for(const s of r)for(const o of s.getFlattenedFilters())if(i.indexOf(o.op)>=0)return o.op;return null}(t.filters,function(r){switch(r){case"!=":return["!=","not-in"];case"array-contains-any":case"in":return["not-in"];case"not-in":return["array-contains-any","in","not-in","!="];default:return[]}}(e.op));if(n!==null)throw n===e.op?new A(b.INVALID_ARGUMENT,`Invalid query. You cannot use more than one '${e.op.toString()}' filter.`):new A(b.INVALID_ARGUMENT,`Invalid query. You cannot use '${e.op.toString()}' filters with '${n.toString()}' filters.`)}function wT(t,e,n){if(!n.isEqual(e))throw new A(b.INVALID_ARGUMENT,`Invalid query. You have a where filter with an inequality (<, <=, !=, not-in, >, or >=) on field '${e.toString()}' and so you must also use '${e.toString()}' as your first argument to orderBy(), but your first orderBy() is on field '${n.toString()}' instead.`)}class Tg{convertValue(e,n="none"){switch(Zi(e)){case 0:return null;case 1:return e.booleanValue;case 2:return Ke(e.integerValue||e.doubleValue);case 3:return this.convertTimestamp(e.timestampValue);case 4:return this.convertServerTimestamp(e,n);case 5:return e.stringValue;case 6:return this.convertBytes(Zr(e.bytesValue));case 7:return this.convertReference(e.referenceValue);case 8:return this.convertGeoPoint(e.geoPointValue);case 9:return this.convertArray(e.arrayValue,n);case 10:return this.convertObject(e.mapValue,n);default:throw q()}}convertObject(e,n){return this.convertObjectMap(e.fields,n)}convertObjectMap(e,n="none"){const r={};return ms(e,(i,s)=>{r[i]=this.convertValue(s,n)}),r}convertGeoPoint(e){return new Nh(Ke(e.latitude),Ke(e.longitude))}convertArray(e,n){return(e.values||[]).map(r=>this.convertValue(r,n))}convertServerTimestamp(e,n){switch(n){case"previous":const r=Rm(e);return r==null?null:this.convertValue(r,n);case"estimate":return this.convertTimestamp(Xa(e));default:return null}}convertTimestamp(e){const n=Jr(e);return new $e(n.seconds,n.nanos)}convertDocumentKey(e,n){const r=me.fromString(e);J(p1(r));const i=new ei(r.get(1),r.get(3)),s=new L(r.popFirst(5));return i.isEqual(n)||Xe(`Document ${s} contains a document reference within a different database (${i.projectId}/${i.database}) which is not supported. It will be treated as a reference in the current database (${n.projectId}/${n.database}) instead.`),s}}/**
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
 */function Vh(t,e,n){let r;return r=t?n&&(n.merge||n.mergeFields)?t.toFirestore(e,n):t.toFirestore(e):e,r}class A4 extends Tg{constructor(e){super(),this.firestore=e}convertBytes(e){return new Jn(e)}convertReference(e){const n=this.convertDocumentKey(e,this.firestore._databaseId);return new Le(this.firestore,null,n)}}/**
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
 */class Ui{constructor(e,n){this.hasPendingWrites=e,this.fromCache=n}isEqual(e){return this.hasPendingWrites===e.hasPendingWrites&&this.fromCache===e.fromCache}}class pr extends ic{constructor(e,n,r,i,s,o){super(e,n,r,i,o),this._firestore=e,this._firestoreImpl=e,this.metadata=s}exists(){return super.exists()}data(e={}){if(this._document){if(this._converter){const n=new Ta(this._firestore,this._userDataWriter,this._key,this._document,this.metadata,null);return this._converter.fromFirestore(n,e)}return this._userDataWriter.convertValue(this._document.data.value,e.serverTimestamps)}}get(e,n={}){if(this._document){const r=this._document.data.field(Oh("DocumentSnapshot.get",e));if(r!==null)return this._userDataWriter.convertValue(r,n.serverTimestamps)}}}class Ta extends pr{data(e={}){return super.data(e)}}class si{constructor(e,n,r,i){this._firestore=e,this._userDataWriter=n,this._snapshot=i,this.metadata=new Ui(i.hasPendingWrites,i.fromCache),this.query=r}get docs(){const e=[];return this.forEach(n=>e.push(n)),e}get size(){return this._snapshot.docs.size}get empty(){return this.size===0}forEach(e,n){this._snapshot.docs.forEach(r=>{e.call(n,new Ta(this._firestore,this._userDataWriter,r.key,r,new Ui(this._snapshot.mutatedKeys.has(r.key),this._snapshot.fromCache),this.query.converter))})}docChanges(e={}){const n=!!e.includeMetadataChanges;if(n&&this._snapshot.excludesMetadataChanges)throw new A(b.INVALID_ARGUMENT,"To include metadata changes with your document changes, you must also pass { includeMetadataChanges:true } to onSnapshot().");return this._cachedChanges&&this._cachedChangesIncludeMetadataChanges===n||(this._cachedChanges=function(r,i){if(r._snapshot.oldDocs.isEmpty()){let s=0;return r._snapshot.docChanges.map(o=>{const a=new Ta(r._firestore,r._userDataWriter,o.doc.key,o.doc,new Ui(r._snapshot.mutatedKeys.has(o.doc.key),r._snapshot.fromCache),r.query.converter);return o.doc,{type:"added",doc:a,oldIndex:-1,newIndex:s++}})}{let s=r._snapshot.oldDocs;return r._snapshot.docChanges.filter(o=>i||o.type!==3).map(o=>{const a=new Ta(r._firestore,r._userDataWriter,o.doc.key,o.doc,new Ui(r._snapshot.mutatedKeys.has(o.doc.key),r._snapshot.fromCache),r.query.converter);let c=-1,u=-1;return o.type!==0&&(c=s.indexOf(o.doc.key),s=s.delete(o.doc.key)),o.type!==1&&(s=s.add(o.doc),u=s.indexOf(o.doc.key)),{type:C4(o.type),doc:a,oldIndex:c,newIndex:u}})}}(this,n),this._cachedChangesIncludeMetadataChanges=n),this._cachedChanges}}function C4(t){switch(t){case 0:return"added";case 2:case 3:return"modified";case 1:return"removed";default:return q()}}function _T(t,e){return t instanceof pr&&e instanceof pr?t._firestore===e._firestore&&t._key.isEqual(e._key)&&(t._document===null?e._document===null:t._document.isEqual(e._document))&&t._converter===e._converter:t instanceof si&&e instanceof si&&t._firestore===e._firestore&&sT(t.query,e.query)&&t.metadata.isEqual(e.metadata)&&t._snapshot.isEqual(e._snapshot)}/**
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
 */function x4(t){t=ve(t,Le);const e=ve(t.firestore,Qe);return Z1(gt(e),t._key).then(n=>Sg(e,t,n))}class ws extends Tg{constructor(e){super(),this.firestore=e}convertBytes(e){return new Jn(e)}convertReference(e){const n=this.convertDocumentKey(e,this.firestore._databaseId);return new Le(this.firestore,null,n)}}function R4(t){t=ve(t,Le);const e=ve(t.firestore,Qe),n=gt(e),r=new ws(e);return GF(n,t._key).then(i=>new pr(e,r,t._key,i,new Ui(i!==null&&i.hasLocalMutations,!0),t.converter))}function N4(t){t=ve(t,Le);const e=ve(t.firestore,Qe);return Z1(gt(e),t._key,{source:"server"}).then(n=>Sg(e,t,n))}function P4(t){t=ve(t,St);const e=ve(t.firestore,Qe),n=gt(e),r=new ws(e);return gT(t._query),eT(n,t._query).then(i=>new si(e,r,t,i))}function D4(t){t=ve(t,St);const e=ve(t.firestore,Qe),n=gt(e),r=new ws(e);return WF(n,t._query).then(i=>new si(e,r,t,i))}function O4(t){t=ve(t,St);const e=ve(t.firestore,Qe),n=gt(e),r=new ws(e);return eT(n,t._query,{source:"server"}).then(i=>new si(e,r,t,i))}function Hw(t,e,n){t=ve(t,Le);const r=ve(t.firestore,Qe),i=Vh(t.converter,e,n);return qc(r,[Dh(ys(r),"setDoc",t._key,i,t.converter!==null,n).toMutation(t._key,Ve.none())])}function Kw(t,e,n,...r){t=ve(t,Le);const i=ve(t.firestore,Qe),s=ys(i);let o;return o=typeof(e=Y(e))=="string"||e instanceof ii?vg(s,"updateDoc",t._key,e,n,r):yg(s,"updateDoc",t._key,e),qc(i,[o.toMutation(t._key,Ve.exists(!0))])}function L4(t){return qc(ve(t.firestore,Qe),[new Do(t._key,Ve.none())])}function M4(t,e){const n=ve(t.firestore,Qe),r=Tl(t),i=Vh(t.converter,e);return qc(n,[Dh(ys(t.firestore),"addDoc",r._key,i,t.converter!==null,{}).toMutation(r._key,Ve.exists(!1))]).then(()=>r)}function bT(t,...e){var n,r,i;t=Y(t);let s={includeMetadataChanges:!1},o=0;typeof e[o]!="object"||Qf(e[o])||(s=e[o],o++);const a={includeMetadataChanges:s.includeMetadataChanges};if(Qf(e[o])){const h=e[o];e[o]=(n=h.next)===null||n===void 0?void 0:n.bind(h),e[o+1]=(r=h.error)===null||r===void 0?void 0:r.bind(h),e[o+2]=(i=h.complete)===null||i===void 0?void 0:i.bind(h)}let c,u,l;if(t instanceof Le)u=ve(t.firestore,Qe),l=No(t._key.path),c={next:h=>{e[o]&&e[o](Sg(u,t,h))},error:e[o+1],complete:e[o+2]};else{const h=ve(t,St);u=ve(h.firestore,Qe),l=h._query;const d=new ws(u);c={next:f=>{e[o]&&e[o](new si(u,d,h,f))},error:e[o+1],complete:e[o+2]},gT(t._query)}return function(h,d,f,m){const y=new Ch(m),I=new ig(d,y,f);return h.asyncQueue.enqueueAndForget(async()=>tg(await yo(h),I)),()=>{y.Sc(),h.asyncQueue.enqueueAndForget(async()=>ng(await yo(h),I))}}(gt(u),l,a,c)}function F4(t,e){return QF(gt(t=ve(t,Qe)),Qf(e)?e:{next:e})}function qc(t,e){return function(n,r){const i=new dt;return n.asyncQueue.enqueueAndForget(async()=>EF(await pg(n),r,i)),i.promise}(gt(t),e)}function Sg(t,e,n){const r=n.docs.get(e._key),i=new ws(t);return new pr(t,i,e._key,r,new Ui(n.hasPendingWrites,n.fromCache),e.converter)}/**
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
 */const U4={maxAttempts:5};/**
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
 */class V4{constructor(e,n){this._firestore=e,this._commitHandler=n,this._mutations=[],this._committed=!1,this._dataReader=ys(e)}set(e,n,r){this._verifyNotCommitted();const i=$r(e,this._firestore),s=Vh(i.converter,n,r),o=Dh(this._dataReader,"WriteBatch.set",i._key,s,i.converter!==null,r);return this._mutations.push(o.toMutation(i._key,Ve.none())),this}update(e,n,r,...i){this._verifyNotCommitted();const s=$r(e,this._firestore);let o;return o=typeof(n=Y(n))=="string"||n instanceof ii?vg(this._dataReader,"WriteBatch.update",s._key,n,r,i):yg(this._dataReader,"WriteBatch.update",s._key,n),this._mutations.push(o.toMutation(s._key,Ve.exists(!0))),this}delete(e){this._verifyNotCommitted();const n=$r(e,this._firestore);return this._mutations=this._mutations.concat(new Do(n._key,Ve.none())),this}commit(){return this._verifyNotCommitted(),this._committed=!0,this._mutations.length>0?this._commitHandler(this._mutations):Promise.resolve()}_verifyNotCommitted(){if(this._committed)throw new A(b.FAILED_PRECONDITION,"A write batch can no longer be used after commit() has been called.")}}function $r(t,e){if((t=Y(t)).firestore!==e)throw new A(b.INVALID_ARGUMENT,"Provided document reference is from a different Firestore instance.");return t}/**
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
 */class $4 extends class{constructor(e,n){this._firestore=e,this._transaction=n,this._dataReader=ys(e)}get(e){const n=$r(e,this._firestore),r=new A4(this._firestore);return this._transaction.lookup([n._key]).then(i=>{if(!i||i.length!==1)return q();const s=i[0];if(s.isFoundDocument())return new ic(this._firestore,r,s.key,s,n.converter);if(s.isNoDocument())return new ic(this._firestore,r,n._key,null,n.converter);throw q()})}set(e,n,r){const i=$r(e,this._firestore),s=Vh(i.converter,n,r),o=Dh(this._dataReader,"Transaction.set",i._key,s,i.converter!==null,r);return this._transaction.set(i._key,o),this}update(e,n,r,...i){const s=$r(e,this._firestore);let o;return o=typeof(n=Y(n))=="string"||n instanceof ii?vg(this._dataReader,"Transaction.update",s._key,n,r,i):yg(this._dataReader,"Transaction.update",s._key,n),this._transaction.update(s._key,o),this}delete(e){const n=$r(e,this._firestore);return this._transaction.delete(n._key),this}}{constructor(e,n){super(e,n),this._firestore=e}get(e){const n=$r(e,this._firestore),r=new ws(this._firestore);return super.get(e).then(i=>new pr(this._firestore,r,n._key,i._document,new Ui(!1,!1),n.converter))}}function B4(t,e,n){t=ve(t,Qe);const r=Object.assign(Object.assign({},U4),n);return function(i){if(i.maxAttempts<1)throw new A(b.INVALID_ARGUMENT,"Max attempts must be at least 1")}(r),function(i,s,o){const a=new dt;return i.asyncQueue.enqueueAndForget(async()=>{const c=await zF(i);new qF(i.asyncQueue,c,o,s,a).run()}),a.promise}(gt(t),i=>e(new $4(t,i)),r)}/**
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
 */function q4(){return new $c("deleteField")}function j4(){return new gg("serverTimestamp")}function z4(...t){return new p4("arrayUnion",t)}function H4(...t){return new m4("arrayRemove",t)}function K4(t){return new g4("increment",t)}(function(t,e=!0){(function(n){Ro=n})(wr),hr(new hn("firestore",(n,{instanceIdentifier:r,options:i})=>{const s=n.getProvider("app").getImmediate(),o=new Qe(new ZO(n.getProvider("auth-internal")),new rL(n.getProvider("app-check-internal")),function(a,c){if(!Object.prototype.hasOwnProperty.apply(a.options,["projectId"]))throw new A(b.INVALID_ARGUMENT,'"projectId" not provided in firebase.initializeApp.');return new ei(a.options.projectId,c)}(s,r),s);return i=Object.assign({useFetchStreams:e},i),o._setSettings(i),o},"PUBLIC").setMultipleInstances(!0)),ln(Bv,"3.11.0",t),ln(Bv,"3.11.0","esm2017")})();const G4="@firebase/firestore-compat",W4="0.3.8";/**
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
 */function kg(t,e){if(e===void 0)return{merge:!1};if(e.mergeFields!==void 0&&e.merge!==void 0)throw new A("invalid-argument",`Invalid options passed to function ${t}(): You cannot specify both "merge" and "mergeFields".`);return e}/**
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
 */function Gw(){if(typeof Uint8Array>"u")throw new A("unimplemented","Uint8Arrays are not available in this environment.")}function Ww(){if(!xL())throw new A("unimplemented","Blobs are unavailable in Firestore in this environment.")}class sc{constructor(e){this._delegate=e}static fromBase64String(e){return Ww(),new sc(Jn.fromBase64String(e))}static fromUint8Array(e){return Gw(),new sc(Jn.fromUint8Array(e))}toBase64(){return Ww(),this._delegate.toBase64()}toUint8Array(){return Gw(),this._delegate.toUint8Array()}isEqual(e){return this._delegate.isEqual(e._delegate)}toString(){return"Blob(base64: "+this.toBase64()+")"}}/**
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
 */function Xf(t){return Q4(t,["next","error","complete"])}function Q4(t,e){if(typeof t!="object"||t===null)return!1;const n=t;for(const r of e)if(r in n&&typeof n[r]=="function")return!0;return!1}/**
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
 */class Y4{enableIndexedDbPersistence(e,n){return r4(e._delegate,{forceOwnership:n})}enableMultiTabIndexedDbPersistence(e){return i4(e._delegate)}clearIndexedDbPersistence(e){return s4(e._delegate)}}class IT{constructor(e,n,r){this._delegate=n,this._persistenceProvider=r,this.INTERNAL={delete:()=>this.terminate()},e instanceof ei||(this._appCompat=e)}get _databaseId(){return this._delegate._databaseId}settings(e){const n=this._delegate._getSettings();!e.merge&&n.host!==e.host&&Cn("You are overriding the original host. If you did not intend to override your settings, use {merge: true}."),e.merge&&(e=Object.assign(Object.assign({},n),e),delete e.merge),this._delegate._setSettings(e)}useEmulator(e,n,r={}){JF(this._delegate,e,n,r)}enableNetwork(){return a4(this._delegate)}disableNetwork(){return c4(this._delegate)}enablePersistence(e){let n=!1,r=!1;return e&&(n=!!e.synchronizeTabs,r=!!e.experimentalForceOwningTab,tT("synchronizeTabs",n,"experimentalForceOwningTab",r)),n?this._persistenceProvider.enableMultiTabIndexedDbPersistence(this):this._persistenceProvider.enableIndexedDbPersistence(this,r)}clearPersistence(){return this._persistenceProvider.clearIndexedDbPersistence(this)}terminate(){return this._appCompat&&(this._appCompat._removeServiceInstance("firestore-compat"),this._appCompat._removeServiceInstance("firestore")),this._delegate._delete()}waitForPendingWrites(){return o4(this._delegate)}onSnapshotsInSync(e){return F4(this._delegate,e)}get app(){if(!this._appCompat)throw new A("failed-precondition","Firestore was not initialized using the Firebase SDK. 'app' is not available");return this._appCompat}collection(e){try{return new vo(this,rT(this._delegate,e))}catch(n){throw Mt(n,"collection()","Firestore.collection()")}}doc(e){try{return new an(this,Tl(this._delegate,e))}catch(n){throw Mt(n,"doc()","Firestore.doc()")}}collectionGroup(e){try{return new Lt(this,ZF(this._delegate,e))}catch(n){throw Mt(n,"collectionGroup()","Firestore.collectionGroup()")}}runTransaction(e){return B4(this._delegate,n=>e(new ET(this,n)))}batch(){return gt(this._delegate),new TT(new V4(this._delegate,e=>qc(this._delegate,e)))}loadBundle(e){return u4(this._delegate,e)}namedQuery(e){return l4(this._delegate,e).then(n=>n?new Lt(this,n):null)}}class $h extends Tg{constructor(e){super(),this.firestore=e}convertBytes(e){return new sc(new Jn(e))}convertReference(e){const n=this.convertDocumentKey(e,this.firestore._databaseId);return an.forKey(n,this.firestore,null)}}function X4(t){QO(t)}class ET{constructor(e,n){this._firestore=e,this._delegate=n,this._userDataWriter=new $h(e)}get(e){const n=Vi(e);return this._delegate.get(n).then(r=>new oc(this._firestore,new pr(this._firestore._delegate,this._userDataWriter,r._key,r._document,r.metadata,n.converter)))}set(e,n,r){const i=Vi(e);return r?(kg("Transaction.set",r),this._delegate.set(i,n,r)):this._delegate.set(i,n),this}update(e,n,r,...i){const s=Vi(e);return arguments.length===2?this._delegate.update(s,n):this._delegate.update(s,n,r,...i),this}delete(e){const n=Vi(e);return this._delegate.delete(n),this}}class TT{constructor(e){this._delegate=e}set(e,n,r){const i=Vi(e);return r?(kg("WriteBatch.set",r),this._delegate.set(i,n,r)):this._delegate.set(i,n),this}update(e,n,r,...i){const s=Vi(e);return arguments.length===2?this._delegate.update(s,n):this._delegate.update(s,n,r,...i),this}delete(e){const n=Vi(e);return this._delegate.delete(n),this}commit(){return this._delegate.commit()}}class as{constructor(e,n,r){this._firestore=e,this._userDataWriter=n,this._delegate=r}fromFirestore(e,n){const r=new Ta(this._firestore._delegate,this._userDataWriter,e._key,e._document,e.metadata,null);return this._delegate.fromFirestore(new ac(this._firestore,r),n!=null?n:{})}toFirestore(e,n){return n?this._delegate.toFirestore(e,n):this._delegate.toFirestore(e)}static getInstance(e,n){const r=as.INSTANCES;let i=r.get(e);i||(i=new WeakMap,r.set(e,i));let s=i.get(n);return s||(s=new as(e,new $h(e),n),i.set(n,s)),s}}as.INSTANCES=new WeakMap;class an{constructor(e,n){this.firestore=e,this._delegate=n,this._userDataWriter=new $h(e)}static forPath(e,n,r){if(e.length%2!==0)throw new A("invalid-argument",`Invalid document reference. Document references must have an even number of segments, but ${e.canonicalString()} has ${e.length}`);return new an(n,new Le(n._delegate,r,new L(e)))}static forKey(e,n,r){return new an(n,new Le(n._delegate,r,e))}get id(){return this._delegate.id}get parent(){return new vo(this.firestore,this._delegate.parent)}get path(){return this._delegate.path}collection(e){try{return new vo(this.firestore,rT(this._delegate,e))}catch(n){throw Mt(n,"collection()","DocumentReference.collection()")}}isEqual(e){return e=Y(e),e instanceof Le?iT(this._delegate,e):!1}set(e,n){n=kg("DocumentReference.set",n);try{return n?Hw(this._delegate,e,n):Hw(this._delegate,e)}catch(r){throw Mt(r,"setDoc()","DocumentReference.set()")}}update(e,n,...r){try{return arguments.length===1?Kw(this._delegate,e):Kw(this._delegate,e,n,...r)}catch(i){throw Mt(i,"updateDoc()","DocumentReference.update()")}}delete(){return L4(this._delegate)}onSnapshot(...e){const n=ST(e),r=kT(e,i=>new oc(this.firestore,new pr(this.firestore._delegate,this._userDataWriter,i._key,i._document,i.metadata,this._delegate.converter)));return bT(this._delegate,n,r)}get(e){let n;return(e==null?void 0:e.source)==="cache"?n=R4(this._delegate):(e==null?void 0:e.source)==="server"?n=N4(this._delegate):n=x4(this._delegate),n.then(r=>new oc(this.firestore,new pr(this.firestore._delegate,this._userDataWriter,r._key,r._document,r.metadata,this._delegate.converter)))}withConverter(e){return new an(this.firestore,e?this._delegate.withConverter(as.getInstance(this.firestore,e)):this._delegate.withConverter(null))}}function Mt(t,e,n){return t.message=t.message.replace(e,n),t}function ST(t){for(const e of t)if(typeof e=="object"&&!Xf(e))return e;return{}}function kT(t,e){var n,r;let i;return Xf(t[0])?i=t[0]:Xf(t[1])?i=t[1]:typeof t[0]=="function"?i={next:t[0],error:t[1],complete:t[2]}:i={next:t[1],error:t[2],complete:t[3]},{next:s=>{i.next&&i.next(e(s))},error:(n=i.error)===null||n===void 0?void 0:n.bind(i),complete:(r=i.complete)===null||r===void 0?void 0:r.bind(i)}}class oc{constructor(e,n){this._firestore=e,this._delegate=n}get ref(){return new an(this._firestore,this._delegate.ref)}get id(){return this._delegate.id}get metadata(){return this._delegate.metadata}get exists(){return this._delegate.exists()}data(e){return this._delegate.data(e)}get(e,n){return this._delegate.get(e,n)}isEqual(e){return _T(this._delegate,e._delegate)}}class ac extends oc{data(e){const n=this._delegate.data(e);return YO(n!==void 0),n}}class Lt{constructor(e,n){this.firestore=e,this._delegate=n,this._userDataWriter=new $h(e)}where(e,n,r){try{return new Lt(this.firestore,Lr(this._delegate,w4(e,n,r)))}catch(i){throw Mt(i,/(orderBy|where)\(\)/,"Query.$1()")}}orderBy(e,n){try{return new Lt(this.firestore,Lr(this._delegate,_4(e,n)))}catch(r){throw Mt(r,/(orderBy|where)\(\)/,"Query.$1()")}}limit(e){try{return new Lt(this.firestore,Lr(this._delegate,b4(e)))}catch(n){throw Mt(n,"limit()","Query.limit()")}}limitToLast(e){try{return new Lt(this.firestore,Lr(this._delegate,I4(e)))}catch(n){throw Mt(n,"limitToLast()","Query.limitToLast()")}}startAt(...e){try{return new Lt(this.firestore,Lr(this._delegate,E4(...e)))}catch(n){throw Mt(n,"startAt()","Query.startAt()")}}startAfter(...e){try{return new Lt(this.firestore,Lr(this._delegate,T4(...e)))}catch(n){throw Mt(n,"startAfter()","Query.startAfter()")}}endBefore(...e){try{return new Lt(this.firestore,Lr(this._delegate,S4(...e)))}catch(n){throw Mt(n,"endBefore()","Query.endBefore()")}}endAt(...e){try{return new Lt(this.firestore,Lr(this._delegate,k4(...e)))}catch(n){throw Mt(n,"endAt()","Query.endAt()")}}isEqual(e){return sT(this._delegate,e._delegate)}get(e){let n;return(e==null?void 0:e.source)==="cache"?n=D4(this._delegate):(e==null?void 0:e.source)==="server"?n=O4(this._delegate):n=P4(this._delegate),n.then(r=>new Jf(this.firestore,new si(this.firestore._delegate,this._userDataWriter,this._delegate,r._snapshot)))}onSnapshot(...e){const n=ST(e),r=kT(e,i=>new Jf(this.firestore,new si(this.firestore._delegate,this._userDataWriter,this._delegate,i._snapshot)));return bT(this._delegate,n,r)}withConverter(e){return new Lt(this.firestore,e?this._delegate.withConverter(as.getInstance(this.firestore,e)):this._delegate.withConverter(null))}}class J4{constructor(e,n){this._firestore=e,this._delegate=n}get type(){return this._delegate.type}get doc(){return new ac(this._firestore,this._delegate.doc)}get oldIndex(){return this._delegate.oldIndex}get newIndex(){return this._delegate.newIndex}}class Jf{constructor(e,n){this._firestore=e,this._delegate=n}get query(){return new Lt(this._firestore,this._delegate.query)}get metadata(){return this._delegate.metadata}get size(){return this._delegate.size}get empty(){return this._delegate.empty}get docs(){return this._delegate.docs.map(e=>new ac(this._firestore,e))}docChanges(e){return this._delegate.docChanges(e).map(n=>new J4(this._firestore,n))}forEach(e,n){this._delegate.forEach(r=>{e.call(n,new ac(this._firestore,r))})}isEqual(e){return _T(this._delegate,e._delegate)}}class vo extends Lt{constructor(e,n){super(e,n),this.firestore=e,this._delegate=n}get id(){return this._delegate.id}get path(){return this._delegate.path}get parent(){const e=this._delegate.parent;return e?new an(this.firestore,e):null}doc(e){try{return e===void 0?new an(this.firestore,Tl(this._delegate)):new an(this.firestore,Tl(this._delegate,e))}catch(n){throw Mt(n,"doc()","CollectionReference.doc()")}}add(e){return M4(this._delegate,e).then(n=>new an(this.firestore,n))}isEqual(e){return iT(this._delegate,e._delegate)}withConverter(e){return new vo(this.firestore,e?this._delegate.withConverter(as.getInstance(this.firestore,e)):this._delegate.withConverter(null))}}function Vi(t){return ve(t,Le)}/**
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
 */class Ag{constructor(...e){this._delegate=new ii(...e)}static documentId(){return new Ag(Je.keyField().canonicalString())}isEqual(e){return e=Y(e),e instanceof ii?this._delegate._internalPath.isEqual(e._internalPath):!1}}/**
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
 */class Di{constructor(e){this._delegate=e}static serverTimestamp(){const e=j4();return e._methodName="FieldValue.serverTimestamp",new Di(e)}static delete(){const e=q4();return e._methodName="FieldValue.delete",new Di(e)}static arrayUnion(...e){const n=z4(...e);return n._methodName="FieldValue.arrayUnion",new Di(n)}static arrayRemove(...e){const n=H4(...e);return n._methodName="FieldValue.arrayRemove",new Di(n)}static increment(e){const n=K4(e);return n._methodName="FieldValue.increment",new Di(n)}isEqual(e){return this._delegate.isEqual(e._delegate)}}/**
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
 */const Z4={Firestore:IT,GeoPoint:Nh,Timestamp:$e,Blob:sc,Transaction:ET,WriteBatch:TT,DocumentReference:an,DocumentSnapshot:oc,Query:Lt,QueryDocumentSnapshot:ac,QuerySnapshot:Jf,CollectionReference:vo,FieldPath:Ag,FieldValue:Di,setLogLevel:X4,CACHE_SIZE_UNLIMITED:n4};function eU(t,e){t.INTERNAL.registerComponent(new hn("firestore-compat",n=>{const r=n.getProvider("app-compat").getImmediate(),i=n.getProvider("firestore").getImmediate();return e(r,i)},"PUBLIC").setServiceProps(Object.assign({},Z4)))}/**
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
 */function tU(t){eU(t,(e,n)=>new IT(e,n,new Y4)),t.registerVersion(G4,W4)}tU(ds);/**
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
 */const AT="firebasestorage.googleapis.com",CT="storageBucket",nU=2*60*1e3,rU=10*60*1e3,iU=1e3;/**
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
 */class He extends Rt{constructor(e,n,r=0){super(Pd(e),`Firebase Storage: ${n} (${Pd(e)})`),this.status_=r,this.customData={serverResponse:null},this._baseMessage=this.message,Object.setPrototypeOf(this,He.prototype)}get status(){return this.status_}set status(e){this.status_=e}_codeEquals(e){return Pd(e)===this.code}get serverResponse(){return this.customData.serverResponse}set serverResponse(e){this.customData.serverResponse=e,this.customData.serverResponse?this.message=`${this._baseMessage}
${this.customData.serverResponse}`:this.message=this._baseMessage}}var Fe;(function(t){t.UNKNOWN="unknown",t.OBJECT_NOT_FOUND="object-not-found",t.BUCKET_NOT_FOUND="bucket-not-found",t.PROJECT_NOT_FOUND="project-not-found",t.QUOTA_EXCEEDED="quota-exceeded",t.UNAUTHENTICATED="unauthenticated",t.UNAUTHORIZED="unauthorized",t.UNAUTHORIZED_APP="unauthorized-app",t.RETRY_LIMIT_EXCEEDED="retry-limit-exceeded",t.INVALID_CHECKSUM="invalid-checksum",t.CANCELED="canceled",t.INVALID_EVENT_NAME="invalid-event-name",t.INVALID_URL="invalid-url",t.INVALID_DEFAULT_BUCKET="invalid-default-bucket",t.NO_DEFAULT_BUCKET="no-default-bucket",t.CANNOT_SLICE_BLOB="cannot-slice-blob",t.SERVER_FILE_WRONG_SIZE="server-file-wrong-size",t.NO_DOWNLOAD_URL="no-download-url",t.INVALID_ARGUMENT="invalid-argument",t.INVALID_ARGUMENT_COUNT="invalid-argument-count",t.APP_DELETED="app-deleted",t.INVALID_ROOT_OPERATION="invalid-root-operation",t.INVALID_FORMAT="invalid-format",t.INTERNAL_ERROR="internal-error",t.UNSUPPORTED_ENVIRONMENT="unsupported-environment"})(Fe||(Fe={}));function Pd(t){return"storage/"+t}function Cg(){const t="An unknown error occurred, please check the error payload for server response.";return new He(Fe.UNKNOWN,t)}function sU(t){return new He(Fe.OBJECT_NOT_FOUND,"Object '"+t+"' does not exist.")}function oU(t){return new He(Fe.QUOTA_EXCEEDED,"Quota for bucket '"+t+"' exceeded, please view quota on https://firebase.google.com/pricing/.")}function aU(){const t="User is not authenticated, please authenticate using Firebase Authentication and try again.";return new He(Fe.UNAUTHENTICATED,t)}function cU(){return new He(Fe.UNAUTHORIZED_APP,"This app does not have permission to access Firebase Storage on this project.")}function uU(t){return new He(Fe.UNAUTHORIZED,"User does not have permission to access '"+t+"'.")}function xT(){return new He(Fe.RETRY_LIMIT_EXCEEDED,"Max retry time for operation exceeded, please try again.")}function RT(){return new He(Fe.CANCELED,"User canceled the upload/download.")}function lU(t){return new He(Fe.INVALID_URL,"Invalid URL '"+t+"'.")}function hU(t){return new He(Fe.INVALID_DEFAULT_BUCKET,"Invalid default bucket '"+t+"'.")}function dU(){return new He(Fe.NO_DEFAULT_BUCKET,"No default bucket found. Did you set the '"+CT+"' property when initializing the app?")}function NT(){return new He(Fe.CANNOT_SLICE_BLOB,"Cannot slice blob for upload. Please retry the upload.")}function fU(){return new He(Fe.SERVER_FILE_WRONG_SIZE,"Server recorded incorrect upload file size, please retry the upload.")}function pU(){return new He(Fe.NO_DOWNLOAD_URL,"The given file does not have any download URLs.")}function mU(t){return new He(Fe.UNSUPPORTED_ENVIRONMENT,`${t} is missing. Make sure to install the required polyfills. See https://firebase.google.com/docs/web/environments-js-sdk#polyfills for more information.`)}function Xs(t){return new He(Fe.INVALID_ARGUMENT,t)}function PT(){return new He(Fe.APP_DELETED,"The Firebase app was deleted.")}function DT(t){return new He(Fe.INVALID_ROOT_OPERATION,"The operation '"+t+"' cannot be performed on a root reference, create a non-root reference using child, such as .child('file.png').")}function Sa(t,e){return new He(Fe.INVALID_FORMAT,"String does not match format '"+t+"': "+e)}function ea(t){throw new He(Fe.INTERNAL_ERROR,"Internal error: "+t)}/**
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
 */class xt{constructor(e,n){this.bucket=e,this.path_=n}get path(){return this.path_}get isRoot(){return this.path.length===0}fullServerUrl(){const e=encodeURIComponent;return"/b/"+e(this.bucket)+"/o/"+e(this.path)}bucketOnlyServerUrl(){return"/b/"+encodeURIComponent(this.bucket)+"/o"}static makeFromBucketSpec(e,n){let r;try{r=xt.makeFromUrl(e,n)}catch{return new xt(e,"")}if(r.path==="")return r;throw hU(e)}static makeFromUrl(e,n){let r=null;const i="([A-Za-z0-9.\\-_]+)";function s(R){R.path.charAt(R.path.length-1)==="/"&&(R.path_=R.path_.slice(0,-1))}const o="(/(.*))?$",a=new RegExp("^gs://"+i+o,"i"),c={bucket:1,path:3};function u(R){R.path_=decodeURIComponent(R.path)}const l="v[A-Za-z0-9_]+",h=n.replace(/[.]/g,"\\."),d="(/([^?#]*).*)?$",f=new RegExp(`^https?://${h}/${l}/b/${i}/o${d}`,"i"),m={bucket:1,path:3},y=n===AT?"(?:storage.googleapis.com|storage.cloud.google.com)":n,I="([^?#]*)",v=new RegExp(`^https?://${y}/${i}/${I}`,"i"),_=[{regex:a,indices:c,postModify:s},{regex:f,indices:m,postModify:u},{regex:v,indices:{bucket:1,path:2},postModify:u}];for(let R=0;R<_.length;R++){const M=_[R],H=M.regex.exec(e);if(H){const ne=H[M.indices.bucket];let K=H[M.indices.path];K||(K=""),r=new xt(ne,K),M.postModify(r);break}}if(r==null)throw lU(e);return r}}class gU{constructor(e){this.promise_=Promise.reject(e)}getPromise(){return this.promise_}cancel(e=!1){}}/**
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
 */function yU(t,e,n){let r=1,i=null,s=null,o=!1,a=0;function c(){return a===2}let u=!1;function l(...I){u||(u=!0,e.apply(null,I))}function h(I){i=setTimeout(()=>{i=null,t(f,c())},I)}function d(){s&&clearTimeout(s)}function f(I,...v){if(u){d();return}if(I){d(),l.call(null,I,...v);return}if(c()||o){d(),l.call(null,I,...v);return}r<64&&(r*=2);let _;a===1?(a=2,_=0):_=(r+Math.random())*1e3,h(_)}let m=!1;function y(I){m||(m=!0,d(),!u&&(i!==null?(I||(a=2),clearTimeout(i),h(0)):I||(a=1)))}return h(0),s=setTimeout(()=>{o=!0,y(!0)},n),y}function vU(t){t(!1)}/**
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
 */function wU(t){return t!==void 0}function _U(t){return typeof t=="function"}function bU(t){return typeof t=="object"&&!Array.isArray(t)}function Bh(t){return typeof t=="string"||t instanceof String}function Qw(t){return xg()&&t instanceof Blob}function xg(){return typeof Blob<"u"&&!Gl()}function Zf(t,e,n,r){if(r<e)throw Xs(`Invalid value for '${t}'. Expected ${e} or greater.`);if(r>n)throw Xs(`Invalid value for '${t}'. Expected ${n} or less.`)}/**
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
 */function gi(t,e,n){let r=e;return n==null&&(r=`https://${e}`),`${n}://${r}/v0${t}`}function OT(t){const e=encodeURIComponent;let n="?";for(const r in t)if(t.hasOwnProperty(r)){const i=e(r)+"="+e(t[r]);n=n+i+"&"}return n=n.slice(0,-1),n}/**
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
 */var Qi;(function(t){t[t.NO_ERROR=0]="NO_ERROR",t[t.NETWORK_ERROR=1]="NETWORK_ERROR",t[t.ABORT=2]="ABORT"})(Qi||(Qi={}));/**
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
 */function LT(t,e){const n=t>=500&&t<600,i=[408,429].indexOf(t)!==-1,s=e.indexOf(t)!==-1;return n||i||s}/**
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
 */class IU{constructor(e,n,r,i,s,o,a,c,u,l,h,d=!0){this.url_=e,this.method_=n,this.headers_=r,this.body_=i,this.successCodes_=s,this.additionalRetryCodes_=o,this.callback_=a,this.errorCallback_=c,this.timeout_=u,this.progressCallback_=l,this.connectionFactory_=h,this.retry=d,this.pendingConnection_=null,this.backoffId_=null,this.canceled_=!1,this.appDelete_=!1,this.promise_=new Promise((f,m)=>{this.resolve_=f,this.reject_=m,this.start_()})}start_(){const e=(r,i)=>{if(i){r(!1,new du(!1,null,!0));return}const s=this.connectionFactory_();this.pendingConnection_=s;const o=a=>{const c=a.loaded,u=a.lengthComputable?a.total:-1;this.progressCallback_!==null&&this.progressCallback_(c,u)};this.progressCallback_!==null&&s.addUploadProgressListener(o),s.send(this.url_,this.method_,this.body_,this.headers_).then(()=>{this.progressCallback_!==null&&s.removeUploadProgressListener(o),this.pendingConnection_=null;const a=s.getErrorCode()===Qi.NO_ERROR,c=s.getStatus();if(!a||LT(c,this.additionalRetryCodes_)&&this.retry){const l=s.getErrorCode()===Qi.ABORT;r(!1,new du(!1,null,l));return}const u=this.successCodes_.indexOf(c)!==-1;r(!0,new du(u,s))})},n=(r,i)=>{const s=this.resolve_,o=this.reject_,a=i.connection;if(i.wasSuccessCode)try{const c=this.callback_(a,a.getResponse());wU(c)?s(c):s()}catch(c){o(c)}else if(a!==null){const c=Cg();c.serverResponse=a.getErrorText(),this.errorCallback_?o(this.errorCallback_(a,c)):o(c)}else if(i.canceled){const c=this.appDelete_?PT():RT();o(c)}else{const c=xT();o(c)}};this.canceled_?n(!1,new du(!1,null,!0)):this.backoffId_=yU(e,n,this.timeout_)}getPromise(){return this.promise_}cancel(e){this.canceled_=!0,this.appDelete_=e||!1,this.backoffId_!==null&&vU(this.backoffId_),this.pendingConnection_!==null&&this.pendingConnection_.abort()}}class du{constructor(e,n,r){this.wasSuccessCode=e,this.connection=n,this.canceled=!!r}}function EU(t,e){e!==null&&e.length>0&&(t.Authorization="Firebase "+e)}function TU(t,e){t["X-Firebase-Storage-Version"]="webjs/"+(e!=null?e:"AppManager")}function SU(t,e){e&&(t["X-Firebase-GMPID"]=e)}function kU(t,e){e!==null&&(t["X-Firebase-AppCheck"]=e)}function AU(t,e,n,r,i,s,o=!0){const a=OT(t.urlParams),c=t.url+a,u=Object.assign({},t.headers);return SU(u,e),EU(u,n),TU(u,s),kU(u,r),new IU(c,t.method,u,t.body,t.successCodes,t.additionalRetryCodes,t.handler,t.errorHandler,t.timeout,t.progressCallback,i,o)}/**
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
 */function CU(){return typeof BlobBuilder<"u"?BlobBuilder:typeof WebKitBlobBuilder<"u"?WebKitBlobBuilder:void 0}function xU(...t){const e=CU();if(e!==void 0){const n=new e;for(let r=0;r<t.length;r++)n.append(t[r]);return n.getBlob()}else{if(xg())return new Blob(t);throw new He(Fe.UNSUPPORTED_ENVIRONMENT,"This browser doesn't seem to support creating Blobs")}}function RU(t,e,n){return t.webkitSlice?t.webkitSlice(e,n):t.mozSlice?t.mozSlice(e,n):t.slice?t.slice(e,n):null}/**
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
 */function NU(t){if(typeof atob>"u")throw mU("base-64");return atob(t)}/**
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
 */const cn={RAW:"raw",BASE64:"base64",BASE64URL:"base64url",DATA_URL:"data_url"};class Dd{constructor(e,n){this.data=e,this.contentType=n||null}}function MT(t,e){switch(t){case cn.RAW:return new Dd(FT(e));case cn.BASE64:case cn.BASE64URL:return new Dd(UT(t,e));case cn.DATA_URL:return new Dd(DU(e),OU(e))}throw Cg()}function FT(t){const e=[];for(let n=0;n<t.length;n++){let r=t.charCodeAt(n);if(r<=127)e.push(r);else if(r<=2047)e.push(192|r>>6,128|r&63);else if((r&64512)===55296)if(!(n<t.length-1&&(t.charCodeAt(n+1)&64512)===56320))e.push(239,191,189);else{const s=r,o=t.charCodeAt(++n);r=65536|(s&1023)<<10|o&1023,e.push(240|r>>18,128|r>>12&63,128|r>>6&63,128|r&63)}else(r&64512)===56320?e.push(239,191,189):e.push(224|r>>12,128|r>>6&63,128|r&63)}return new Uint8Array(e)}function PU(t){let e;try{e=decodeURIComponent(t)}catch{throw Sa(cn.DATA_URL,"Malformed data URL.")}return FT(e)}function UT(t,e){switch(t){case cn.BASE64:{const i=e.indexOf("-")!==-1,s=e.indexOf("_")!==-1;if(i||s)throw Sa(t,"Invalid character '"+(i?"-":"_")+"' found: is it base64url encoded?");break}case cn.BASE64URL:{const i=e.indexOf("+")!==-1,s=e.indexOf("/")!==-1;if(i||s)throw Sa(t,"Invalid character '"+(i?"+":"/")+"' found: is it base64 encoded?");e=e.replace(/-/g,"+").replace(/_/g,"/");break}}let n;try{n=NU(e)}catch(i){throw i.message.includes("polyfill")?i:Sa(t,"Invalid character found")}const r=new Uint8Array(n.length);for(let i=0;i<n.length;i++)r[i]=n.charCodeAt(i);return r}class VT{constructor(e){this.base64=!1,this.contentType=null;const n=e.match(/^data:([^,]+)?,/);if(n===null)throw Sa(cn.DATA_URL,"Must be formatted 'data:[<mediatype>][;base64],<data>");const r=n[1]||null;r!=null&&(this.base64=LU(r,";base64"),this.contentType=this.base64?r.substring(0,r.length-7):r),this.rest=e.substring(e.indexOf(",")+1)}}function DU(t){const e=new VT(t);return e.base64?UT(cn.BASE64,e.rest):PU(e.rest)}function OU(t){return new VT(t).contentType}function LU(t,e){return t.length>=e.length?t.substring(t.length-e.length)===e:!1}/**
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
 */class tr{constructor(e,n){let r=0,i="";Qw(e)?(this.data_=e,r=e.size,i=e.type):e instanceof ArrayBuffer?(n?this.data_=new Uint8Array(e):(this.data_=new Uint8Array(e.byteLength),this.data_.set(new Uint8Array(e))),r=this.data_.length):e instanceof Uint8Array&&(n?this.data_=e:(this.data_=new Uint8Array(e.length),this.data_.set(e)),r=e.length),this.size_=r,this.type_=i}size(){return this.size_}type(){return this.type_}slice(e,n){if(Qw(this.data_)){const r=this.data_,i=RU(r,e,n);return i===null?null:new tr(i)}else{const r=new Uint8Array(this.data_.buffer,e,n-e);return new tr(r,!0)}}static getBlob(...e){if(xg()){const n=e.map(r=>r instanceof tr?r.data_:r);return new tr(xU.apply(null,n))}else{const n=e.map(o=>Bh(o)?MT(cn.RAW,o).data:o.data_);let r=0;n.forEach(o=>{r+=o.byteLength});const i=new Uint8Array(r);let s=0;return n.forEach(o=>{for(let a=0;a<o.length;a++)i[s++]=o[a]}),new tr(i,!0)}}uploadData(){return this.data_}}/**
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
 */function Rg(t){let e;try{e=JSON.parse(t)}catch{return null}return bU(e)?e:null}/**
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
 */function MU(t){if(t.length===0)return null;const e=t.lastIndexOf("/");return e===-1?"":t.slice(0,e)}function FU(t,e){const n=e.split("/").filter(r=>r.length>0).join("/");return t.length===0?n:t+"/"+n}function $T(t){const e=t.lastIndexOf("/",t.length-2);return e===-1?t:t.slice(e+1)}/**
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
 */function UU(t,e){return e}class Dt{constructor(e,n,r,i){this.server=e,this.local=n||e,this.writable=!!r,this.xform=i||UU}}let fu=null;function VU(t){return!Bh(t)||t.length<2?t:$T(t)}function qh(){if(fu)return fu;const t=[];t.push(new Dt("bucket")),t.push(new Dt("generation")),t.push(new Dt("metageneration")),t.push(new Dt("name","fullPath",!0));function e(s,o){return VU(o)}const n=new Dt("name");n.xform=e,t.push(n);function r(s,o){return o!==void 0?Number(o):o}const i=new Dt("size");return i.xform=r,t.push(i),t.push(new Dt("timeCreated")),t.push(new Dt("updated")),t.push(new Dt("md5Hash",null,!0)),t.push(new Dt("cacheControl",null,!0)),t.push(new Dt("contentDisposition",null,!0)),t.push(new Dt("contentEncoding",null,!0)),t.push(new Dt("contentLanguage",null,!0)),t.push(new Dt("contentType",null,!0)),t.push(new Dt("metadata","customMetadata",!0)),fu=t,fu}function $U(t,e){function n(){const r=t.bucket,i=t.fullPath,s=new xt(r,i);return e._makeStorageReference(s)}Object.defineProperty(t,"ref",{get:n})}function BU(t,e,n){const r={};r.type="file";const i=n.length;for(let s=0;s<i;s++){const o=n[s];r[o.local]=o.xform(r,e[o.server])}return $U(r,t),r}function BT(t,e,n){const r=Rg(e);return r===null?null:BU(t,r,n)}function qU(t,e,n,r){const i=Rg(e);if(i===null||!Bh(i.downloadTokens))return null;const s=i.downloadTokens;if(s.length===0)return null;const o=encodeURIComponent;return s.split(",").map(u=>{const l=t.bucket,h=t.fullPath,d="/b/"+o(l)+"/o/"+o(h),f=gi(d,n,r),m=OT({alt:"media",token:u});return f+m})[0]}function Ng(t,e){const n={},r=e.length;for(let i=0;i<r;i++){const s=e[i];s.writable&&(n[s.server]=t[s.local])}return JSON.stringify(n)}/**
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
 */const Yw="prefixes",Xw="items";function jU(t,e,n){const r={prefixes:[],items:[],nextPageToken:n.nextPageToken};if(n[Yw])for(const i of n[Yw]){const s=i.replace(/\/$/,""),o=t._makeStorageReference(new xt(e,s));r.prefixes.push(o)}if(n[Xw])for(const i of n[Xw]){const s=t._makeStorageReference(new xt(e,i.name));r.items.push(s)}return r}function zU(t,e,n){const r=Rg(n);return r===null?null:jU(t,e,r)}class Sr{constructor(e,n,r,i){this.url=e,this.method=n,this.handler=r,this.timeout=i,this.urlParams={},this.headers={},this.body=null,this.errorHandler=null,this.progressCallback=null,this.successCodes=[200],this.additionalRetryCodes=[]}}/**
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
 */function Wn(t){if(!t)throw Cg()}function jh(t,e){function n(r,i){const s=BT(t,i,e);return Wn(s!==null),s}return n}function HU(t,e){function n(r,i){const s=zU(t,e,i);return Wn(s!==null),s}return n}function KU(t,e){function n(r,i){const s=BT(t,i,e);return Wn(s!==null),qU(s,i,t.host,t._protocol)}return n}function Uo(t){function e(n,r){let i;return n.getStatus()===401?n.getErrorText().includes("Firebase App Check token is invalid")?i=cU():i=aU():n.getStatus()===402?i=oU(t.bucket):n.getStatus()===403?i=uU(t.path):i=r,i.status=n.getStatus(),i.serverResponse=r.serverResponse,i}return e}function zh(t){const e=Uo(t);function n(r,i){let s=e(r,i);return r.getStatus()===404&&(s=sU(t.path)),s.serverResponse=i.serverResponse,s}return n}function qT(t,e,n){const r=e.fullServerUrl(),i=gi(r,t.host,t._protocol),s="GET",o=t.maxOperationRetryTime,a=new Sr(i,s,jh(t,n),o);return a.errorHandler=zh(e),a}function GU(t,e,n,r,i){const s={};e.isRoot?s.prefix="":s.prefix=e.path+"/",n&&n.length>0&&(s.delimiter=n),r&&(s.pageToken=r),i&&(s.maxResults=i);const o=e.bucketOnlyServerUrl(),a=gi(o,t.host,t._protocol),c="GET",u=t.maxOperationRetryTime,l=new Sr(a,c,HU(t,e.bucket),u);return l.urlParams=s,l.errorHandler=Uo(e),l}function WU(t,e,n){const r=e.fullServerUrl(),i=gi(r,t.host,t._protocol),s="GET",o=t.maxOperationRetryTime,a=new Sr(i,s,KU(t,n),o);return a.errorHandler=zh(e),a}function QU(t,e,n,r){const i=e.fullServerUrl(),s=gi(i,t.host,t._protocol),o="PATCH",a=Ng(n,r),c={"Content-Type":"application/json; charset=utf-8"},u=t.maxOperationRetryTime,l=new Sr(s,o,jh(t,r),u);return l.headers=c,l.body=a,l.errorHandler=zh(e),l}function YU(t,e){const n=e.fullServerUrl(),r=gi(n,t.host,t._protocol),i="DELETE",s=t.maxOperationRetryTime;function o(c,u){}const a=new Sr(r,i,o,s);return a.successCodes=[200,204],a.errorHandler=zh(e),a}function XU(t,e){return t&&t.contentType||e&&e.type()||"application/octet-stream"}function jT(t,e,n){const r=Object.assign({},n);return r.fullPath=t.path,r.size=e.size(),r.contentType||(r.contentType=XU(null,e)),r}function JU(t,e,n,r,i){const s=e.bucketOnlyServerUrl(),o={"X-Goog-Upload-Protocol":"multipart"};function a(){let _="";for(let R=0;R<2;R++)_=_+Math.random().toString().slice(2);return _}const c=a();o["Content-Type"]="multipart/related; boundary="+c;const u=jT(e,r,i),l=Ng(u,n),h="--"+c+`\r
Content-Type: application/json; charset=utf-8\r
\r
`+l+`\r
--`+c+`\r
Content-Type: `+u.contentType+`\r
\r
`,d=`\r
--`+c+"--",f=tr.getBlob(h,r,d);if(f===null)throw NT();const m={name:u.fullPath},y=gi(s,t.host,t._protocol),I="POST",v=t.maxUploadRetryTime,E=new Sr(y,I,jh(t,n),v);return E.urlParams=m,E.headers=o,E.body=f.uploadData(),E.errorHandler=Uo(e),E}class kl{constructor(e,n,r,i){this.current=e,this.total=n,this.finalized=!!r,this.metadata=i||null}}function Pg(t,e){let n=null;try{n=t.getResponseHeader("X-Goog-Upload-Status")}catch{Wn(!1)}return Wn(!!n&&(e||["active"]).indexOf(n)!==-1),n}function ZU(t,e,n,r,i){const s=e.bucketOnlyServerUrl(),o=jT(e,r,i),a={name:o.fullPath},c=gi(s,t.host,t._protocol),u="POST",l={"X-Goog-Upload-Protocol":"resumable","X-Goog-Upload-Command":"start","X-Goog-Upload-Header-Content-Length":`${r.size()}`,"X-Goog-Upload-Header-Content-Type":o.contentType,"Content-Type":"application/json; charset=utf-8"},h=Ng(o,n),d=t.maxUploadRetryTime;function f(y){Pg(y);let I;try{I=y.getResponseHeader("X-Goog-Upload-URL")}catch{Wn(!1)}return Wn(Bh(I)),I}const m=new Sr(c,u,f,d);return m.urlParams=a,m.headers=l,m.body=h,m.errorHandler=Uo(e),m}function e3(t,e,n,r){const i={"X-Goog-Upload-Command":"query"};function s(u){const l=Pg(u,["active","final"]);let h=null;try{h=u.getResponseHeader("X-Goog-Upload-Size-Received")}catch{Wn(!1)}h||Wn(!1);const d=Number(h);return Wn(!isNaN(d)),new kl(d,r.size(),l==="final")}const o="POST",a=t.maxUploadRetryTime,c=new Sr(n,o,s,a);return c.headers=i,c.errorHandler=Uo(e),c}const Jw=256*1024;function t3(t,e,n,r,i,s,o,a){const c=new kl(0,0);if(o?(c.current=o.current,c.total=o.total):(c.current=0,c.total=r.size()),r.size()!==c.total)throw fU();const u=c.total-c.current;let l=u;i>0&&(l=Math.min(l,i));const h=c.current,d=h+l;let f="";l===0?f="finalize":u===l?f="upload, finalize":f="upload";const m={"X-Goog-Upload-Command":f,"X-Goog-Upload-Offset":`${c.current}`},y=r.slice(h,d);if(y===null)throw NT();function I(R,M){const H=Pg(R,["active","final"]),ne=c.current+l,K=r.size();let ae;return H==="final"?ae=jh(e,s)(R,M):ae=null,new kl(ne,K,H==="final",ae)}const v="POST",E=e.maxUploadRetryTime,_=new Sr(n,v,I,E);return _.headers=m,_.body=y.uploadData(),_.progressCallback=a||null,_.errorHandler=Uo(t),_}/**
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
 */const n3={STATE_CHANGED:"state_changed"},Ft={RUNNING:"running",PAUSED:"paused",SUCCESS:"success",CANCELED:"canceled",ERROR:"error"};function Od(t){switch(t){case"running":case"pausing":case"canceling":return Ft.RUNNING;case"paused":return Ft.PAUSED;case"success":return Ft.SUCCESS;case"canceled":return Ft.CANCELED;case"error":return Ft.ERROR;default:return Ft.ERROR}}/**
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
 */class r3{constructor(e,n,r){if(_U(e)||n!=null||r!=null)this.next=e,this.error=n!=null?n:void 0,this.complete=r!=null?r:void 0;else{const s=e;this.next=s.next,this.error=s.error,this.complete=s.complete}}}/**
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
 */function Cs(t){return(...e)=>{Promise.resolve().then(()=>t(...e))}}class i3{constructor(){this.sent_=!1,this.xhr_=new XMLHttpRequest,this.initXhr(),this.errorCode_=Qi.NO_ERROR,this.sendPromise_=new Promise(e=>{this.xhr_.addEventListener("abort",()=>{this.errorCode_=Qi.ABORT,e()}),this.xhr_.addEventListener("error",()=>{this.errorCode_=Qi.NETWORK_ERROR,e()}),this.xhr_.addEventListener("load",()=>{e()})})}send(e,n,r,i){if(this.sent_)throw ea("cannot .send() more than once");if(this.sent_=!0,this.xhr_.open(n,e,!0),i!==void 0)for(const s in i)i.hasOwnProperty(s)&&this.xhr_.setRequestHeader(s,i[s].toString());return r!==void 0?this.xhr_.send(r):this.xhr_.send(),this.sendPromise_}getErrorCode(){if(!this.sent_)throw ea("cannot .getErrorCode() before sending");return this.errorCode_}getStatus(){if(!this.sent_)throw ea("cannot .getStatus() before sending");try{return this.xhr_.status}catch{return-1}}getResponse(){if(!this.sent_)throw ea("cannot .getResponse() before sending");return this.xhr_.response}getErrorText(){if(!this.sent_)throw ea("cannot .getErrorText() before sending");return this.xhr_.statusText}abort(){this.xhr_.abort()}getResponseHeader(e){return this.xhr_.getResponseHeader(e)}addUploadProgressListener(e){this.xhr_.upload!=null&&this.xhr_.upload.addEventListener("progress",e)}removeUploadProgressListener(e){this.xhr_.upload!=null&&this.xhr_.upload.removeEventListener("progress",e)}}class s3 extends i3{initXhr(){this.xhr_.responseType="text"}}function Vn(){return new s3}/**
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
 */class zT{constructor(e,n,r=null){this._transferred=0,this._needToFetchStatus=!1,this._needToFetchMetadata=!1,this._observers=[],this._error=void 0,this._uploadUrl=void 0,this._request=void 0,this._chunkMultiplier=1,this._resolve=void 0,this._reject=void 0,this._ref=e,this._blob=n,this._metadata=r,this._mappings=qh(),this._resumable=this._shouldDoResumable(this._blob),this._state="running",this._errorHandler=i=>{if(this._request=void 0,this._chunkMultiplier=1,i._codeEquals(Fe.CANCELED))this._needToFetchStatus=!0,this.completeTransitions_();else{const s=this.isExponentialBackoffExpired();if(LT(i.status,[]))if(s)i=xT();else{this.sleepTime=Math.max(this.sleepTime*2,iU),this._needToFetchStatus=!0,this.completeTransitions_();return}this._error=i,this._transition("error")}},this._metadataErrorHandler=i=>{this._request=void 0,i._codeEquals(Fe.CANCELED)?this.completeTransitions_():(this._error=i,this._transition("error"))},this.sleepTime=0,this.maxSleepTime=this._ref.storage.maxUploadRetryTime,this._promise=new Promise((i,s)=>{this._resolve=i,this._reject=s,this._start()}),this._promise.then(null,()=>{})}isExponentialBackoffExpired(){return this.sleepTime>this.maxSleepTime}_makeProgressCallback(){const e=this._transferred;return n=>this._updateProgress(e+n)}_shouldDoResumable(e){return e.size()>256*1024}_start(){this._state==="running"&&this._request===void 0&&(this._resumable?this._uploadUrl===void 0?this._createResumable():this._needToFetchStatus?this._fetchStatus():this._needToFetchMetadata?this._fetchMetadata():this.pendingTimeout=setTimeout(()=>{this.pendingTimeout=void 0,this._continueUpload()},this.sleepTime):this._oneShotUpload())}_resolveToken(e){Promise.all([this._ref.storage._getAuthToken(),this._ref.storage._getAppCheckToken()]).then(([n,r])=>{switch(this._state){case"running":e(n,r);break;case"canceling":this._transition("canceled");break;case"pausing":this._transition("paused");break}})}_createResumable(){this._resolveToken((e,n)=>{const r=ZU(this._ref.storage,this._ref._location,this._mappings,this._blob,this._metadata),i=this._ref.storage._makeRequest(r,Vn,e,n);this._request=i,i.getPromise().then(s=>{this._request=void 0,this._uploadUrl=s,this._needToFetchStatus=!1,this.completeTransitions_()},this._errorHandler)})}_fetchStatus(){const e=this._uploadUrl;this._resolveToken((n,r)=>{const i=e3(this._ref.storage,this._ref._location,e,this._blob),s=this._ref.storage._makeRequest(i,Vn,n,r);this._request=s,s.getPromise().then(o=>{o=o,this._request=void 0,this._updateProgress(o.current),this._needToFetchStatus=!1,o.finalized&&(this._needToFetchMetadata=!0),this.completeTransitions_()},this._errorHandler)})}_continueUpload(){const e=Jw*this._chunkMultiplier,n=new kl(this._transferred,this._blob.size()),r=this._uploadUrl;this._resolveToken((i,s)=>{let o;try{o=t3(this._ref._location,this._ref.storage,r,this._blob,e,this._mappings,n,this._makeProgressCallback())}catch(c){this._error=c,this._transition("error");return}const a=this._ref.storage._makeRequest(o,Vn,i,s,!1);this._request=a,a.getPromise().then(c=>{this._increaseMultiplier(),this._request=void 0,this._updateProgress(c.current),c.finalized?(this._metadata=c.metadata,this._transition("success")):this.completeTransitions_()},this._errorHandler)})}_increaseMultiplier(){Jw*this._chunkMultiplier*2<32*1024*1024&&(this._chunkMultiplier*=2)}_fetchMetadata(){this._resolveToken((e,n)=>{const r=qT(this._ref.storage,this._ref._location,this._mappings),i=this._ref.storage._makeRequest(r,Vn,e,n);this._request=i,i.getPromise().then(s=>{this._request=void 0,this._metadata=s,this._transition("success")},this._metadataErrorHandler)})}_oneShotUpload(){this._resolveToken((e,n)=>{const r=JU(this._ref.storage,this._ref._location,this._mappings,this._blob,this._metadata),i=this._ref.storage._makeRequest(r,Vn,e,n);this._request=i,i.getPromise().then(s=>{this._request=void 0,this._metadata=s,this._updateProgress(this._blob.size()),this._transition("success")},this._errorHandler)})}_updateProgress(e){const n=this._transferred;this._transferred=e,this._transferred!==n&&this._notifyObservers()}_transition(e){if(this._state!==e)switch(e){case"canceling":case"pausing":this._state=e,this._request!==void 0?this._request.cancel():this.pendingTimeout&&(clearTimeout(this.pendingTimeout),this.pendingTimeout=void 0,this.completeTransitions_());break;case"running":const n=this._state==="paused";this._state=e,n&&(this._notifyObservers(),this._start());break;case"paused":this._state=e,this._notifyObservers();break;case"canceled":this._error=RT(),this._state=e,this._notifyObservers();break;case"error":this._state=e,this._notifyObservers();break;case"success":this._state=e,this._notifyObservers();break}}completeTransitions_(){switch(this._state){case"pausing":this._transition("paused");break;case"canceling":this._transition("canceled");break;case"running":this._start();break}}get snapshot(){const e=Od(this._state);return{bytesTransferred:this._transferred,totalBytes:this._blob.size(),state:e,metadata:this._metadata,task:this,ref:this._ref}}on(e,n,r,i){const s=new r3(n||void 0,r||void 0,i||void 0);return this._addObserver(s),()=>{this._removeObserver(s)}}then(e,n){return this._promise.then(e,n)}catch(e){return this.then(null,e)}_addObserver(e){this._observers.push(e),this._notifyObserver(e)}_removeObserver(e){const n=this._observers.indexOf(e);n!==-1&&this._observers.splice(n,1)}_notifyObservers(){this._finishPromise(),this._observers.slice().forEach(n=>{this._notifyObserver(n)})}_finishPromise(){if(this._resolve!==void 0){let e=!0;switch(Od(this._state)){case Ft.SUCCESS:Cs(this._resolve.bind(null,this.snapshot))();break;case Ft.CANCELED:case Ft.ERROR:const n=this._reject;Cs(n.bind(null,this._error))();break;default:e=!1;break}e&&(this._resolve=void 0,this._reject=void 0)}}_notifyObserver(e){switch(Od(this._state)){case Ft.RUNNING:case Ft.PAUSED:e.next&&Cs(e.next.bind(e,this.snapshot))();break;case Ft.SUCCESS:e.complete&&Cs(e.complete.bind(e))();break;case Ft.CANCELED:case Ft.ERROR:e.error&&Cs(e.error.bind(e,this._error))();break;default:e.error&&Cs(e.error.bind(e,this._error))()}}resume(){const e=this._state==="paused"||this._state==="pausing";return e&&this._transition("running"),e}pause(){const e=this._state==="running";return e&&this._transition("pausing"),e}cancel(){const e=this._state==="running"||this._state==="pausing";return e&&this._transition("canceling"),e}}/**
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
 */class cs{constructor(e,n){this._service=e,n instanceof xt?this._location=n:this._location=xt.makeFromUrl(n,e.host)}toString(){return"gs://"+this._location.bucket+"/"+this._location.path}_newRef(e,n){return new cs(e,n)}get root(){const e=new xt(this._location.bucket,"");return this._newRef(this._service,e)}get bucket(){return this._location.bucket}get fullPath(){return this._location.path}get name(){return $T(this._location.path)}get storage(){return this._service}get parent(){const e=MU(this._location.path);if(e===null)return null;const n=new xt(this._location.bucket,e);return new cs(this._service,n)}_throwIfRoot(e){if(this._location.path==="")throw DT(e)}}function o3(t,e,n){return t._throwIfRoot("uploadBytesResumable"),new zT(t,new tr(e),n)}function a3(t){const e={prefixes:[],items:[]};return HT(t,e).then(()=>e)}async function HT(t,e,n){const i=await KT(t,{pageToken:n});e.prefixes.push(...i.prefixes),e.items.push(...i.items),i.nextPageToken!=null&&await HT(t,e,i.nextPageToken)}function KT(t,e){e!=null&&typeof e.maxResults=="number"&&Zf("options.maxResults",1,1e3,e.maxResults);const n=e||{},r=GU(t.storage,t._location,"/",n.pageToken,n.maxResults);return t.storage.makeRequestWithTokens(r,Vn)}function c3(t){t._throwIfRoot("getMetadata");const e=qT(t.storage,t._location,qh());return t.storage.makeRequestWithTokens(e,Vn)}function u3(t,e){t._throwIfRoot("updateMetadata");const n=QU(t.storage,t._location,e,qh());return t.storage.makeRequestWithTokens(n,Vn)}function l3(t){t._throwIfRoot("getDownloadURL");const e=WU(t.storage,t._location,qh());return t.storage.makeRequestWithTokens(e,Vn).then(n=>{if(n===null)throw pU();return n})}function h3(t){t._throwIfRoot("deleteObject");const e=YU(t.storage,t._location);return t.storage.makeRequestWithTokens(e,Vn)}function GT(t,e){const n=FU(t._location.path,e),r=new xt(t._location.bucket,n);return new cs(t.storage,r)}/**
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
 */function d3(t){return/^[A-Za-z]+:\/\//.test(t)}function f3(t,e){return new cs(t,e)}function WT(t,e){if(t instanceof Dg){const n=t;if(n._bucket==null)throw dU();const r=new cs(n,n._bucket);return e!=null?WT(r,e):r}else return e!==void 0?GT(t,e):t}function p3(t,e){if(e&&d3(e)){if(t instanceof Dg)return f3(t,e);throw Xs("To use ref(service, url), the first argument must be a Storage instance.")}else return WT(t,e)}function Zw(t,e){const n=e==null?void 0:e[CT];return n==null?null:xt.makeFromBucketSpec(n,t)}function m3(t,e,n,r={}){t.host=`${e}:${n}`,t._protocol="http";const{mockUserToken:i}=r;i&&(t._overrideAuthToken=typeof i=="string"?i:Qb(i,t.app.options.projectId))}class Dg{constructor(e,n,r,i,s){this.app=e,this._authProvider=n,this._appCheckProvider=r,this._url=i,this._firebaseVersion=s,this._bucket=null,this._host=AT,this._protocol="https",this._appId=null,this._deleted=!1,this._maxOperationRetryTime=nU,this._maxUploadRetryTime=rU,this._requests=new Set,i!=null?this._bucket=xt.makeFromBucketSpec(i,this._host):this._bucket=Zw(this._host,this.app.options)}get host(){return this._host}set host(e){this._host=e,this._url!=null?this._bucket=xt.makeFromBucketSpec(this._url,e):this._bucket=Zw(e,this.app.options)}get maxUploadRetryTime(){return this._maxUploadRetryTime}set maxUploadRetryTime(e){Zf("time",0,Number.POSITIVE_INFINITY,e),this._maxUploadRetryTime=e}get maxOperationRetryTime(){return this._maxOperationRetryTime}set maxOperationRetryTime(e){Zf("time",0,Number.POSITIVE_INFINITY,e),this._maxOperationRetryTime=e}async _getAuthToken(){if(this._overrideAuthToken)return this._overrideAuthToken;const e=this._authProvider.getImmediate({optional:!0});if(e){const n=await e.getToken();if(n!==null)return n.accessToken}return null}async _getAppCheckToken(){const e=this._appCheckProvider.getImmediate({optional:!0});return e?(await e.getToken()).token:null}_delete(){return this._deleted||(this._deleted=!0,this._requests.forEach(e=>e.cancel()),this._requests.clear()),Promise.resolve()}_makeStorageReference(e){return new cs(this,e)}_makeRequest(e,n,r,i,s=!0){if(this._deleted)return new gU(PT());{const o=AU(e,this._appId,r,i,n,this._firebaseVersion,s);return this._requests.add(o),o.getPromise().then(()=>this._requests.delete(o),()=>this._requests.delete(o)),o}}async makeRequestWithTokens(e,n){const[r,i]=await Promise.all([this._getAuthToken(),this._getAppCheckToken()]);return this._makeRequest(e,n,r,i).getPromise()}}const e_="@firebase/storage",t_="0.11.2";/**
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
 */const g3="storage";function y3(t,e,n){return t=Y(t),o3(t,e,n)}function v3(t){return t=Y(t),c3(t)}function w3(t,e){return t=Y(t),u3(t,e)}function _3(t,e){return t=Y(t),KT(t,e)}function b3(t){return t=Y(t),a3(t)}function I3(t){return t=Y(t),l3(t)}function E3(t){return t=Y(t),h3(t)}function n_(t,e){return t=Y(t),p3(t,e)}function T3(t,e){return GT(t,e)}function S3(t,e,n,r={}){m3(t,e,n,r)}function k3(t,{instanceIdentifier:e}){const n=t.getProvider("app").getImmediate(),r=t.getProvider("auth-internal"),i=t.getProvider("app-check-internal");return new Dg(n,r,i,e,wr)}function A3(){hr(new hn(g3,k3,"PUBLIC").setMultipleInstances(!0)),ln(e_,t_,""),ln(e_,t_,"esm2017")}A3();/**
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
 */class pu{constructor(e,n,r){this._delegate=e,this.task=n,this.ref=r}get bytesTransferred(){return this._delegate.bytesTransferred}get metadata(){return this._delegate.metadata}get state(){return this._delegate.state}get totalBytes(){return this._delegate.totalBytes}}/**
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
 */class r_{constructor(e,n){this._delegate=e,this._ref=n,this.cancel=this._delegate.cancel.bind(this._delegate),this.catch=this._delegate.catch.bind(this._delegate),this.pause=this._delegate.pause.bind(this._delegate),this.resume=this._delegate.resume.bind(this._delegate)}get snapshot(){return new pu(this._delegate.snapshot,this,this._ref)}then(e,n){return this._delegate.then(r=>{if(e)return e(new pu(r,this,this._ref))},n)}on(e,n,r,i){let s;return n&&(typeof n=="function"?s=o=>n(new pu(o,this,this._ref)):s={next:n.next?o=>n.next(new pu(o,this,this._ref)):void 0,complete:n.complete||void 0,error:n.error||void 0}),this._delegate.on(e,s,r||void 0,i||void 0)}}class i_{constructor(e,n){this._delegate=e,this._service=n}get prefixes(){return this._delegate.prefixes.map(e=>new ur(e,this._service))}get items(){return this._delegate.items.map(e=>new ur(e,this._service))}get nextPageToken(){return this._delegate.nextPageToken||null}}/**
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
 */class ur{constructor(e,n){this._delegate=e,this.storage=n}get name(){return this._delegate.name}get bucket(){return this._delegate.bucket}get fullPath(){return this._delegate.fullPath}toString(){return this._delegate.toString()}child(e){const n=T3(this._delegate,e);return new ur(n,this.storage)}get root(){return new ur(this._delegate.root,this.storage)}get parent(){const e=this._delegate.parent;return e==null?null:new ur(e,this.storage)}put(e,n){return this._throwIfRoot("put"),new r_(y3(this._delegate,e,n),this)}putString(e,n=cn.RAW,r){this._throwIfRoot("putString");const i=MT(n,e),s=Object.assign({},r);return s.contentType==null&&i.contentType!=null&&(s.contentType=i.contentType),new r_(new zT(this._delegate,new tr(i.data,!0),s),this)}listAll(){return b3(this._delegate).then(e=>new i_(e,this.storage))}list(e){return _3(this._delegate,e||void 0).then(n=>new i_(n,this.storage))}getMetadata(){return v3(this._delegate)}updateMetadata(e){return w3(this._delegate,e)}getDownloadURL(){return I3(this._delegate)}delete(){return this._throwIfRoot("delete"),E3(this._delegate)}_throwIfRoot(e){if(this._delegate._location.path==="")throw DT(e)}}/**
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
 */class QT{constructor(e,n){this.app=e,this._delegate=n}get maxOperationRetryTime(){return this._delegate.maxOperationRetryTime}get maxUploadRetryTime(){return this._delegate.maxUploadRetryTime}ref(e){if(s_(e))throw Xs("ref() expected a child path but got a URL, use refFromURL instead.");return new ur(n_(this._delegate,e),this)}refFromURL(e){if(!s_(e))throw Xs("refFromURL() expected a full URL but got a child path, use ref() instead.");try{xt.makeFromUrl(e,this._delegate.host)}catch{throw Xs("refFromUrl() expected a valid full URL but got an invalid one.")}return new ur(n_(this._delegate,e),this)}setMaxUploadRetryTime(e){this._delegate.maxUploadRetryTime=e}setMaxOperationRetryTime(e){this._delegate.maxOperationRetryTime=e}useEmulator(e,n,r={}){S3(this._delegate,e,n,r)}}function s_(t){return/^[A-Za-z]+:\/\//.test(t)}const C3="@firebase/storage-compat",x3="0.3.2";/**
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
 */const R3="storage-compat";function N3(t,{instanceIdentifier:e}){const n=t.getProvider("app-compat").getImmediate(),r=t.getProvider("storage").getImmediate({identifier:e});return new QT(n,r)}function P3(t){const e={TaskState:Ft,TaskEvent:n3,StringFormat:cn,Storage:QT,Reference:ur};t.INTERNAL.registerComponent(new hn(R3,N3,"PUBLIC").setServiceProps(e).setMultipleInstances(!0)),t.registerVersion(C3,x3)}P3(ds);const Og=ds.initializeApp({apiKey:"AIzaSyCV8VEQjUNCDSJq-D1HkzKDypsvxPLJ1U0",authDomain:"juan-antonio-espinoza.firebaseapp.com",projectId:"juan-antonio-espinoza",storageBucket:"juan-antonio-espinoza.appspot.com",messagingSenderId:"1009701811173",appId:"1:1009701811173:web:650d9b527cf0070251750c"}),Z9=Og.firestore(),D3=Og.auth(),eV=Og.storage().ref(),mu=()=>(t,e,n)=>{D3.onAuthStateChanged(function(r){if(!r)return n({path:"/admin_login?returnPath=jae_admin"});n()})},O3=lx({history:kC("/"),routes:[{path:"/",name:"home",component:()=>Is(()=>import("./Public.2a66509e.js"),["assets/Public.2a66509e.js","assets/_plugin-vue_export-helper.cdc0426e.js","assets/Public.e82e3242.css"])},{path:"/admin_login",name:"login",component:()=>Is(()=>import("./Login.5b66ce96.js"),["assets/Login.5b66ce96.js","assets/_plugin-vue_export-helper.cdc0426e.js","assets/Login.24e35747.css"])},{path:"/jae_admin",name:"admin",component:()=>Is(()=>import("./Admin.c47352c6.js"),["assets/Admin.c47352c6.js","assets/_plugin-vue_export-helper.cdc0426e.js","assets/Admin.cb7748a9.css"]),beforeEnter:mu(),redirect:"/admin/plataforma",children:[{path:"/admin/plataforma",name:"Plata",component:()=>Is(()=>import("./Plataforma.278dc0fe.js"),["assets/Plataforma.278dc0fe.js","assets/_plugin-vue_export-helper.cdc0426e.js","assets/Plataforma.4f2f5bb1.css"]),beforeEnter:mu()},{path:"/admin/souvenirs",name:"Souve",component:()=>Is(()=>import("./Souvenirs.9f625758.js"),["assets/Souvenirs.9f625758.js","assets/_plugin-vue_export-helper.cdc0426e.js","assets/Souvenirs.d24c123d.css"]),beforeEnter:mu()},{path:"/admin/eventos",name:"Event",component:()=>Is(()=>import("./Eventos.ff923a5a.js"),["assets/Eventos.ff923a5a.js","assets/_plugin-vue_export-helper.cdc0426e.js","assets/Eventos.b98eddaf.css"]),beforeEnter:mu()}]}]});function o_(t,e){var n=Object.keys(t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(t);e&&(r=r.filter(function(i){return Object.getOwnPropertyDescriptor(t,i).enumerable})),n.push.apply(n,r)}return n}function z(t){for(var e=1;e<arguments.length;e++){var n=arguments[e]!=null?arguments[e]:{};e%2?o_(Object(n),!0).forEach(function(r){ct(t,r,n[r])}):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(n)):o_(Object(n)).forEach(function(r){Object.defineProperty(t,r,Object.getOwnPropertyDescriptor(n,r))})}return t}function Al(t){return Al=typeof Symbol=="function"&&typeof Symbol.iterator=="symbol"?function(e){return typeof e}:function(e){return e&&typeof Symbol=="function"&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},Al(t)}function L3(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}function a_(t,e){for(var n=0;n<e.length;n++){var r=e[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(t,r.key,r)}}function M3(t,e,n){return e&&a_(t.prototype,e),n&&a_(t,n),Object.defineProperty(t,"prototype",{writable:!1}),t}function ct(t,e,n){return e in t?Object.defineProperty(t,e,{value:n,enumerable:!0,configurable:!0,writable:!0}):t[e]=n,t}function Lg(t,e){return U3(t)||$3(t,e)||YT(t,e)||q3()}function jc(t){return F3(t)||V3(t)||YT(t)||B3()}function F3(t){if(Array.isArray(t))return ep(t)}function U3(t){if(Array.isArray(t))return t}function V3(t){if(typeof Symbol<"u"&&t[Symbol.iterator]!=null||t["@@iterator"]!=null)return Array.from(t)}function $3(t,e){var n=t==null?null:typeof Symbol<"u"&&t[Symbol.iterator]||t["@@iterator"];if(n!=null){var r=[],i=!0,s=!1,o,a;try{for(n=n.call(t);!(i=(o=n.next()).done)&&(r.push(o.value),!(e&&r.length===e));i=!0);}catch(c){s=!0,a=c}finally{try{!i&&n.return!=null&&n.return()}finally{if(s)throw a}}return r}}function YT(t,e){if(!!t){if(typeof t=="string")return ep(t,e);var n=Object.prototype.toString.call(t).slice(8,-1);if(n==="Object"&&t.constructor&&(n=t.constructor.name),n==="Map"||n==="Set")return Array.from(t);if(n==="Arguments"||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n))return ep(t,e)}}function ep(t,e){(e==null||e>t.length)&&(e=t.length);for(var n=0,r=new Array(e);n<e;n++)r[n]=t[n];return r}function B3(){throw new TypeError(`Invalid attempt to spread non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`)}function q3(){throw new TypeError(`Invalid attempt to destructure non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`)}var c_=function(){},Mg={},XT={},JT=null,ZT={mark:c_,measure:c_};try{typeof window<"u"&&(Mg=window),typeof document<"u"&&(XT=document),typeof MutationObserver<"u"&&(JT=MutationObserver),typeof performance<"u"&&(ZT=performance)}catch{}var j3=Mg.navigator||{},u_=j3.userAgent,l_=u_===void 0?"":u_,oi=Mg,De=XT,h_=JT,gu=ZT;oi.document;var kr=!!De.documentElement&&!!De.head&&typeof De.addEventListener=="function"&&typeof De.createElement=="function",eS=~l_.indexOf("MSIE")||~l_.indexOf("Trident/"),yu,vu,wu,_u,bu,mr="___FONT_AWESOME___",tp=16,tS="fa",nS="svg-inline--fa",us="data-fa-i2svg",np="data-fa-pseudo-element",z3="data-fa-pseudo-element-pending",Fg="data-prefix",Ug="data-icon",d_="fontawesome-i2svg",H3="async",K3=["HTML","HEAD","STYLE","SCRIPT"],rS=function(){try{return!0}catch{return!1}}(),Ne="classic",Ge="sharp",Vg=[Ne,Ge];function zc(t){return new Proxy(t,{get:function(n,r){return r in n?n[r]:n[Ne]}})}var cc=zc((yu={},ct(yu,Ne,{fa:"solid",fas:"solid","fa-solid":"solid",far:"regular","fa-regular":"regular",fal:"light","fa-light":"light",fat:"thin","fa-thin":"thin",fad:"duotone","fa-duotone":"duotone",fab:"brands","fa-brands":"brands",fak:"kit","fa-kit":"kit"}),ct(yu,Ge,{fa:"solid",fass:"solid","fa-solid":"solid",fasr:"regular","fa-regular":"regular",fasl:"light","fa-light":"light"}),yu)),uc=zc((vu={},ct(vu,Ne,{solid:"fas",regular:"far",light:"fal",thin:"fat",duotone:"fad",brands:"fab",kit:"fak"}),ct(vu,Ge,{solid:"fass",regular:"fasr",light:"fasl"}),vu)),lc=zc((wu={},ct(wu,Ne,{fab:"fa-brands",fad:"fa-duotone",fak:"fa-kit",fal:"fa-light",far:"fa-regular",fas:"fa-solid",fat:"fa-thin"}),ct(wu,Ge,{fass:"fa-solid",fasr:"fa-regular",fasl:"fa-light"}),wu)),G3=zc((_u={},ct(_u,Ne,{"fa-brands":"fab","fa-duotone":"fad","fa-kit":"fak","fa-light":"fal","fa-regular":"far","fa-solid":"fas","fa-thin":"fat"}),ct(_u,Ge,{"fa-solid":"fass","fa-regular":"fasr","fa-light":"fasl"}),_u)),W3=/fa(s|r|l|t|d|b|k|ss|sr|sl)?[\-\ ]/,iS="fa-layers-text",Q3=/Font ?Awesome ?([56 ]*)(Solid|Regular|Light|Thin|Duotone|Brands|Free|Pro|Sharp|Kit)?.*/i,Y3=zc((bu={},ct(bu,Ne,{900:"fas",400:"far",normal:"far",300:"fal",100:"fat"}),ct(bu,Ge,{900:"fass",400:"fasr",300:"fasl"}),bu)),sS=[1,2,3,4,5,6,7,8,9,10],X3=sS.concat([11,12,13,14,15,16,17,18,19,20]),J3=["class","data-prefix","data-icon","data-fa-transform","data-fa-mask"],$i={GROUP:"duotone-group",SWAP_OPACITY:"swap-opacity",PRIMARY:"primary",SECONDARY:"secondary"},hc=new Set;Object.keys(uc[Ne]).map(hc.add.bind(hc));Object.keys(uc[Ge]).map(hc.add.bind(hc));var Z3=[].concat(Vg,jc(hc),["2xs","xs","sm","lg","xl","2xl","beat","border","fade","beat-fade","bounce","flip-both","flip-horizontal","flip-vertical","flip","fw","inverse","layers-counter","layers-text","layers","li","pull-left","pull-right","pulse","rotate-180","rotate-270","rotate-90","rotate-by","shake","spin-pulse","spin-reverse","spin","stack-1x","stack-2x","stack","ul",$i.GROUP,$i.SWAP_OPACITY,$i.PRIMARY,$i.SECONDARY]).concat(sS.map(function(t){return"".concat(t,"x")})).concat(X3.map(function(t){return"w-".concat(t)})),ka=oi.FontAwesomeConfig||{};function e6(t){var e=De.querySelector("script["+t+"]");if(e)return e.getAttribute(t)}function t6(t){return t===""?!0:t==="false"?!1:t==="true"?!0:t}if(De&&typeof De.querySelector=="function"){var n6=[["data-family-prefix","familyPrefix"],["data-css-prefix","cssPrefix"],["data-family-default","familyDefault"],["data-style-default","styleDefault"],["data-replacement-class","replacementClass"],["data-auto-replace-svg","autoReplaceSvg"],["data-auto-add-css","autoAddCss"],["data-auto-a11y","autoA11y"],["data-search-pseudo-elements","searchPseudoElements"],["data-observe-mutations","observeMutations"],["data-mutate-approach","mutateApproach"],["data-keep-original-source","keepOriginalSource"],["data-measure-performance","measurePerformance"],["data-show-missing-icons","showMissingIcons"]];n6.forEach(function(t){var e=Lg(t,2),n=e[0],r=e[1],i=t6(e6(n));i!=null&&(ka[r]=i)})}var oS={styleDefault:"solid",familyDefault:"classic",cssPrefix:tS,replacementClass:nS,autoReplaceSvg:!0,autoAddCss:!0,autoA11y:!0,searchPseudoElements:!1,observeMutations:!0,mutateApproach:"async",keepOriginalSource:!0,measurePerformance:!1,showMissingIcons:!0};ka.familyPrefix&&(ka.cssPrefix=ka.familyPrefix);var wo=z(z({},oS),ka);wo.autoReplaceSvg||(wo.observeMutations=!1);var Q={};Object.keys(oS).forEach(function(t){Object.defineProperty(Q,t,{enumerable:!0,set:function(n){wo[t]=n,Aa.forEach(function(r){return r(Q)})},get:function(){return wo[t]}})});Object.defineProperty(Q,"familyPrefix",{enumerable:!0,set:function(e){wo.cssPrefix=e,Aa.forEach(function(n){return n(Q)})},get:function(){return wo.cssPrefix}});oi.FontAwesomeConfig=Q;var Aa=[];function r6(t){return Aa.push(t),function(){Aa.splice(Aa.indexOf(t),1)}}var Mr=tp,zn={size:16,x:0,y:0,rotate:0,flipX:!1,flipY:!1};function i6(t){if(!(!t||!kr)){var e=De.createElement("style");e.setAttribute("type","text/css"),e.innerHTML=t;for(var n=De.head.childNodes,r=null,i=n.length-1;i>-1;i--){var s=n[i],o=(s.tagName||"").toUpperCase();["STYLE","LINK"].indexOf(o)>-1&&(r=s)}return De.head.insertBefore(e,r),t}}var s6="0123456789abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ";function dc(){for(var t=12,e="";t-- >0;)e+=s6[Math.random()*62|0];return e}function Vo(t){for(var e=[],n=(t||[]).length>>>0;n--;)e[n]=t[n];return e}function $g(t){return t.classList?Vo(t.classList):(t.getAttribute("class")||"").split(" ").filter(function(e){return e})}function aS(t){return"".concat(t).replace(/&/g,"&amp;").replace(/"/g,"&quot;").replace(/'/g,"&#39;").replace(/</g,"&lt;").replace(/>/g,"&gt;")}function o6(t){return Object.keys(t||{}).reduce(function(e,n){return e+"".concat(n,'="').concat(aS(t[n]),'" ')},"").trim()}function Hh(t){return Object.keys(t||{}).reduce(function(e,n){return e+"".concat(n,": ").concat(t[n].trim(),";")},"")}function Bg(t){return t.size!==zn.size||t.x!==zn.x||t.y!==zn.y||t.rotate!==zn.rotate||t.flipX||t.flipY}function a6(t){var e=t.transform,n=t.containerWidth,r=t.iconWidth,i={transform:"translate(".concat(n/2," 256)")},s="translate(".concat(e.x*32,", ").concat(e.y*32,") "),o="scale(".concat(e.size/16*(e.flipX?-1:1),", ").concat(e.size/16*(e.flipY?-1:1),") "),a="rotate(".concat(e.rotate," 0 0)"),c={transform:"".concat(s," ").concat(o," ").concat(a)},u={transform:"translate(".concat(r/2*-1," -256)")};return{outer:i,inner:c,path:u}}function c6(t){var e=t.transform,n=t.width,r=n===void 0?tp:n,i=t.height,s=i===void 0?tp:i,o=t.startCentered,a=o===void 0?!1:o,c="";return a&&eS?c+="translate(".concat(e.x/Mr-r/2,"em, ").concat(e.y/Mr-s/2,"em) "):a?c+="translate(calc(-50% + ".concat(e.x/Mr,"em), calc(-50% + ").concat(e.y/Mr,"em)) "):c+="translate(".concat(e.x/Mr,"em, ").concat(e.y/Mr,"em) "),c+="scale(".concat(e.size/Mr*(e.flipX?-1:1),", ").concat(e.size/Mr*(e.flipY?-1:1),") "),c+="rotate(".concat(e.rotate,"deg) "),c}var u6=`:root, :host {
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
}`;function cS(){var t=tS,e=nS,n=Q.cssPrefix,r=Q.replacementClass,i=u6;if(n!==t||r!==e){var s=new RegExp("\\.".concat(t,"\\-"),"g"),o=new RegExp("\\--".concat(t,"\\-"),"g"),a=new RegExp("\\.".concat(e),"g");i=i.replace(s,".".concat(n,"-")).replace(o,"--".concat(n,"-")).replace(a,".".concat(r))}return i}var f_=!1;function Ld(){Q.autoAddCss&&!f_&&(i6(cS()),f_=!0)}var l6={mixout:function(){return{dom:{css:cS,insertCss:Ld}}},hooks:function(){return{beforeDOMElementCreation:function(){Ld()},beforeI2svg:function(){Ld()}}}},gr=oi||{};gr[mr]||(gr[mr]={});gr[mr].styles||(gr[mr].styles={});gr[mr].hooks||(gr[mr].hooks={});gr[mr].shims||(gr[mr].shims=[]);var bn=gr[mr],uS=[],h6=function t(){De.removeEventListener("DOMContentLoaded",t),Cl=1,uS.map(function(e){return e()})},Cl=!1;kr&&(Cl=(De.documentElement.doScroll?/^loaded|^c/:/^loaded|^i|^c/).test(De.readyState),Cl||De.addEventListener("DOMContentLoaded",h6));function d6(t){!kr||(Cl?setTimeout(t,0):uS.push(t))}function Hc(t){var e=t.tag,n=t.attributes,r=n===void 0?{}:n,i=t.children,s=i===void 0?[]:i;return typeof t=="string"?aS(t):"<".concat(e," ").concat(o6(r),">").concat(s.map(Hc).join(""),"</").concat(e,">")}function p_(t,e,n){if(t&&t[e]&&t[e][n])return{prefix:e,iconName:n,icon:t[e][n]}}var f6=function(e,n){return function(r,i,s,o){return e.call(n,r,i,s,o)}},Md=function(e,n,r,i){var s=Object.keys(e),o=s.length,a=i!==void 0?f6(n,i):n,c,u,l;for(r===void 0?(c=1,l=e[s[0]]):(c=0,l=r);c<o;c++)u=s[c],l=a(l,e[u],u,e);return l};function p6(t){for(var e=[],n=0,r=t.length;n<r;){var i=t.charCodeAt(n++);if(i>=55296&&i<=56319&&n<r){var s=t.charCodeAt(n++);(s&64512)==56320?e.push(((i&1023)<<10)+(s&1023)+65536):(e.push(i),n--)}else e.push(i)}return e}function rp(t){var e=p6(t);return e.length===1?e[0].toString(16):null}function m6(t,e){var n=t.length,r=t.charCodeAt(e),i;return r>=55296&&r<=56319&&n>e+1&&(i=t.charCodeAt(e+1),i>=56320&&i<=57343)?(r-55296)*1024+i-56320+65536:r}function m_(t){return Object.keys(t).reduce(function(e,n){var r=t[n],i=!!r.icon;return i?e[r.iconName]=r.icon:e[n]=r,e},{})}function ip(t,e){var n=arguments.length>2&&arguments[2]!==void 0?arguments[2]:{},r=n.skipHooks,i=r===void 0?!1:r,s=m_(e);typeof bn.hooks.addPack=="function"&&!i?bn.hooks.addPack(t,m_(e)):bn.styles[t]=z(z({},bn.styles[t]||{}),s),t==="fas"&&ip("fa",e)}var Iu,Eu,Tu,Ms=bn.styles,g6=bn.shims,y6=(Iu={},ct(Iu,Ne,Object.values(lc[Ne])),ct(Iu,Ge,Object.values(lc[Ge])),Iu),qg=null,lS={},hS={},dS={},fS={},pS={},v6=(Eu={},ct(Eu,Ne,Object.keys(cc[Ne])),ct(Eu,Ge,Object.keys(cc[Ge])),Eu);function w6(t){return~Z3.indexOf(t)}function _6(t,e){var n=e.split("-"),r=n[0],i=n.slice(1).join("-");return r===t&&i!==""&&!w6(i)?i:null}var mS=function(){var e=function(s){return Md(Ms,function(o,a,c){return o[c]=Md(a,s,{}),o},{})};lS=e(function(i,s,o){if(s[3]&&(i[s[3]]=o),s[2]){var a=s[2].filter(function(c){return typeof c=="number"});a.forEach(function(c){i[c.toString(16)]=o})}return i}),hS=e(function(i,s,o){if(i[o]=o,s[2]){var a=s[2].filter(function(c){return typeof c=="string"});a.forEach(function(c){i[c]=o})}return i}),pS=e(function(i,s,o){var a=s[2];return i[o]=o,a.forEach(function(c){i[c]=o}),i});var n="far"in Ms||Q.autoFetchSvg,r=Md(g6,function(i,s){var o=s[0],a=s[1],c=s[2];return a==="far"&&!n&&(a="fas"),typeof o=="string"&&(i.names[o]={prefix:a,iconName:c}),typeof o=="number"&&(i.unicodes[o.toString(16)]={prefix:a,iconName:c}),i},{names:{},unicodes:{}});dS=r.names,fS=r.unicodes,qg=Kh(Q.styleDefault,{family:Q.familyDefault})};r6(function(t){qg=Kh(t.styleDefault,{family:Q.familyDefault})});mS();function jg(t,e){return(lS[t]||{})[e]}function b6(t,e){return(hS[t]||{})[e]}function Bi(t,e){return(pS[t]||{})[e]}function gS(t){return dS[t]||{prefix:null,iconName:null}}function I6(t){var e=fS[t],n=jg("fas",t);return e||(n?{prefix:"fas",iconName:n}:null)||{prefix:null,iconName:null}}function ai(){return qg}var zg=function(){return{prefix:null,iconName:null,rest:[]}};function Kh(t){var e=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},n=e.family,r=n===void 0?Ne:n,i=cc[r][t],s=uc[r][t]||uc[r][i],o=t in bn.styles?t:null;return s||o||null}var g_=(Tu={},ct(Tu,Ne,Object.keys(lc[Ne])),ct(Tu,Ge,Object.keys(lc[Ge])),Tu);function Gh(t){var e,n=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},r=n.skipLookups,i=r===void 0?!1:r,s=(e={},ct(e,Ne,"".concat(Q.cssPrefix,"-").concat(Ne)),ct(e,Ge,"".concat(Q.cssPrefix,"-").concat(Ge)),e),o=null,a=Ne;(t.includes(s[Ne])||t.some(function(u){return g_[Ne].includes(u)}))&&(a=Ne),(t.includes(s[Ge])||t.some(function(u){return g_[Ge].includes(u)}))&&(a=Ge);var c=t.reduce(function(u,l){var h=_6(Q.cssPrefix,l);if(Ms[l]?(l=y6[a].includes(l)?G3[a][l]:l,o=l,u.prefix=l):v6[a].indexOf(l)>-1?(o=l,u.prefix=Kh(l,{family:a})):h?u.iconName=h:l!==Q.replacementClass&&l!==s[Ne]&&l!==s[Ge]&&u.rest.push(l),!i&&u.prefix&&u.iconName){var d=o==="fa"?gS(u.iconName):{},f=Bi(u.prefix,u.iconName);d.prefix&&(o=null),u.iconName=d.iconName||f||u.iconName,u.prefix=d.prefix||u.prefix,u.prefix==="far"&&!Ms.far&&Ms.fas&&!Q.autoFetchSvg&&(u.prefix="fas")}return u},zg());return(t.includes("fa-brands")||t.includes("fab"))&&(c.prefix="fab"),(t.includes("fa-duotone")||t.includes("fad"))&&(c.prefix="fad"),!c.prefix&&a===Ge&&(Ms.fass||Q.autoFetchSvg)&&(c.prefix="fass",c.iconName=Bi(c.prefix,c.iconName)||c.iconName),(c.prefix==="fa"||o==="fa")&&(c.prefix=ai()||"fas"),c}var E6=function(){function t(){L3(this,t),this.definitions={}}return M3(t,[{key:"add",value:function(){for(var n=this,r=arguments.length,i=new Array(r),s=0;s<r;s++)i[s]=arguments[s];var o=i.reduce(this._pullDefinitions,{});Object.keys(o).forEach(function(a){n.definitions[a]=z(z({},n.definitions[a]||{}),o[a]),ip(a,o[a]);var c=lc[Ne][a];c&&ip(c,o[a]),mS()})}},{key:"reset",value:function(){this.definitions={}}},{key:"_pullDefinitions",value:function(n,r){var i=r.prefix&&r.iconName&&r.icon?{0:r}:r;return Object.keys(i).map(function(s){var o=i[s],a=o.prefix,c=o.iconName,u=o.icon,l=u[2];n[a]||(n[a]={}),l.length>0&&l.forEach(function(h){typeof h=="string"&&(n[a][h]=u)}),n[a][c]=u}),n}}]),t}(),y_=[],Fs={},Js={},T6=Object.keys(Js);function S6(t,e){var n=e.mixoutsTo;return y_=t,Fs={},Object.keys(Js).forEach(function(r){T6.indexOf(r)===-1&&delete Js[r]}),y_.forEach(function(r){var i=r.mixout?r.mixout():{};if(Object.keys(i).forEach(function(o){typeof i[o]=="function"&&(n[o]=i[o]),Al(i[o])==="object"&&Object.keys(i[o]).forEach(function(a){n[o]||(n[o]={}),n[o][a]=i[o][a]})}),r.hooks){var s=r.hooks();Object.keys(s).forEach(function(o){Fs[o]||(Fs[o]=[]),Fs[o].push(s[o])})}r.provides&&r.provides(Js)}),n}function sp(t,e){for(var n=arguments.length,r=new Array(n>2?n-2:0),i=2;i<n;i++)r[i-2]=arguments[i];var s=Fs[t]||[];return s.forEach(function(o){e=o.apply(null,[e].concat(r))}),e}function ls(t){for(var e=arguments.length,n=new Array(e>1?e-1:0),r=1;r<e;r++)n[r-1]=arguments[r];var i=Fs[t]||[];i.forEach(function(s){s.apply(null,n)})}function yr(){var t=arguments[0],e=Array.prototype.slice.call(arguments,1);return Js[t]?Js[t].apply(null,e):void 0}function op(t){t.prefix==="fa"&&(t.prefix="fas");var e=t.iconName,n=t.prefix||ai();if(!!e)return e=Bi(n,e)||e,p_(yS.definitions,n,e)||p_(bn.styles,n,e)}var yS=new E6,k6=function(){Q.autoReplaceSvg=!1,Q.observeMutations=!1,ls("noAuto")},A6={i2svg:function(){var e=arguments.length>0&&arguments[0]!==void 0?arguments[0]:{};return kr?(ls("beforeI2svg",e),yr("pseudoElements2svg",e),yr("i2svg",e)):Promise.reject("Operation requires a DOM of some kind.")},watch:function(){var e=arguments.length>0&&arguments[0]!==void 0?arguments[0]:{},n=e.autoReplaceSvgRoot;Q.autoReplaceSvg===!1&&(Q.autoReplaceSvg=!0),Q.observeMutations=!0,d6(function(){x6({autoReplaceSvgRoot:n}),ls("watch",e)})}},C6={icon:function(e){if(e===null)return null;if(Al(e)==="object"&&e.prefix&&e.iconName)return{prefix:e.prefix,iconName:Bi(e.prefix,e.iconName)||e.iconName};if(Array.isArray(e)&&e.length===2){var n=e[1].indexOf("fa-")===0?e[1].slice(3):e[1],r=Kh(e[0]);return{prefix:r,iconName:Bi(r,n)||n}}if(typeof e=="string"&&(e.indexOf("".concat(Q.cssPrefix,"-"))>-1||e.match(W3))){var i=Gh(e.split(" "),{skipLookups:!0});return{prefix:i.prefix||ai(),iconName:Bi(i.prefix,i.iconName)||i.iconName}}if(typeof e=="string"){var s=ai();return{prefix:s,iconName:Bi(s,e)||e}}}},rn={noAuto:k6,config:Q,dom:A6,parse:C6,library:yS,findIconDefinition:op,toHtml:Hc},x6=function(){var e=arguments.length>0&&arguments[0]!==void 0?arguments[0]:{},n=e.autoReplaceSvgRoot,r=n===void 0?De:n;(Object.keys(bn.styles).length>0||Q.autoFetchSvg)&&kr&&Q.autoReplaceSvg&&rn.dom.i2svg({node:r})};function Wh(t,e){return Object.defineProperty(t,"abstract",{get:e}),Object.defineProperty(t,"html",{get:function(){return t.abstract.map(function(r){return Hc(r)})}}),Object.defineProperty(t,"node",{get:function(){if(!!kr){var r=De.createElement("div");return r.innerHTML=t.html,r.children}}}),t}function R6(t){var e=t.children,n=t.main,r=t.mask,i=t.attributes,s=t.styles,o=t.transform;if(Bg(o)&&n.found&&!r.found){var a=n.width,c=n.height,u={x:a/c/2,y:.5};i.style=Hh(z(z({},s),{},{"transform-origin":"".concat(u.x+o.x/16,"em ").concat(u.y+o.y/16,"em")}))}return[{tag:"svg",attributes:i,children:e}]}function N6(t){var e=t.prefix,n=t.iconName,r=t.children,i=t.attributes,s=t.symbol,o=s===!0?"".concat(e,"-").concat(Q.cssPrefix,"-").concat(n):s;return[{tag:"svg",attributes:{style:"display: none;"},children:[{tag:"symbol",attributes:z(z({},i),{},{id:o}),children:r}]}]}function Hg(t){var e=t.icons,n=e.main,r=e.mask,i=t.prefix,s=t.iconName,o=t.transform,a=t.symbol,c=t.title,u=t.maskId,l=t.titleId,h=t.extra,d=t.watchable,f=d===void 0?!1:d,m=r.found?r:n,y=m.width,I=m.height,v=i==="fak",E=[Q.replacementClass,s?"".concat(Q.cssPrefix,"-").concat(s):""].filter(function(ae){return h.classes.indexOf(ae)===-1}).filter(function(ae){return ae!==""||!!ae}).concat(h.classes).join(" "),_={children:[],attributes:z(z({},h.attributes),{},{"data-prefix":i,"data-icon":s,class:E,role:h.attributes.role||"img",xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 ".concat(y," ").concat(I)})},R=v&&!~h.classes.indexOf("fa-fw")?{width:"".concat(y/I*16*.0625,"em")}:{};f&&(_.attributes[us]=""),c&&(_.children.push({tag:"title",attributes:{id:_.attributes["aria-labelledby"]||"title-".concat(l||dc())},children:[c]}),delete _.attributes.title);var M=z(z({},_),{},{prefix:i,iconName:s,main:n,mask:r,maskId:u,transform:o,symbol:a,styles:z(z({},R),h.styles)}),H=r.found&&n.found?yr("generateAbstractMask",M)||{children:[],attributes:{}}:yr("generateAbstractIcon",M)||{children:[],attributes:{}},ne=H.children,K=H.attributes;return M.children=ne,M.attributes=K,a?N6(M):R6(M)}function v_(t){var e=t.content,n=t.width,r=t.height,i=t.transform,s=t.title,o=t.extra,a=t.watchable,c=a===void 0?!1:a,u=z(z(z({},o.attributes),s?{title:s}:{}),{},{class:o.classes.join(" ")});c&&(u[us]="");var l=z({},o.styles);Bg(i)&&(l.transform=c6({transform:i,startCentered:!0,width:n,height:r}),l["-webkit-transform"]=l.transform);var h=Hh(l);h.length>0&&(u.style=h);var d=[];return d.push({tag:"span",attributes:u,children:[e]}),s&&d.push({tag:"span",attributes:{class:"sr-only"},children:[s]}),d}function P6(t){var e=t.content,n=t.title,r=t.extra,i=z(z(z({},r.attributes),n?{title:n}:{}),{},{class:r.classes.join(" ")}),s=Hh(r.styles);s.length>0&&(i.style=s);var o=[];return o.push({tag:"span",attributes:i,children:[e]}),n&&o.push({tag:"span",attributes:{class:"sr-only"},children:[n]}),o}var Fd=bn.styles;function ap(t){var e=t[0],n=t[1],r=t.slice(4),i=Lg(r,1),s=i[0],o=null;return Array.isArray(s)?o={tag:"g",attributes:{class:"".concat(Q.cssPrefix,"-").concat($i.GROUP)},children:[{tag:"path",attributes:{class:"".concat(Q.cssPrefix,"-").concat($i.SECONDARY),fill:"currentColor",d:s[0]}},{tag:"path",attributes:{class:"".concat(Q.cssPrefix,"-").concat($i.PRIMARY),fill:"currentColor",d:s[1]}}]}:o={tag:"path",attributes:{fill:"currentColor",d:s}},{found:!0,width:e,height:n,icon:o}}var D6={found:!1,width:512,height:512};function O6(t,e){!rS&&!Q.showMissingIcons&&t&&console.error('Icon with name "'.concat(t,'" and prefix "').concat(e,'" is missing.'))}function cp(t,e){var n=e;return e==="fa"&&Q.styleDefault!==null&&(e=ai()),new Promise(function(r,i){if(yr("missingIconAbstract"),n==="fa"){var s=gS(t)||{};t=s.iconName||t,e=s.prefix||e}if(t&&e&&Fd[e]&&Fd[e][t]){var o=Fd[e][t];return r(ap(o))}O6(t,e),r(z(z({},D6),{},{icon:Q.showMissingIcons&&t?yr("missingIconAbstract")||{}:{}}))})}var w_=function(){},up=Q.measurePerformance&&gu&&gu.mark&&gu.measure?gu:{mark:w_,measure:w_},ua='FA "6.4.0"',L6=function(e){return up.mark("".concat(ua," ").concat(e," begins")),function(){return vS(e)}},vS=function(e){up.mark("".concat(ua," ").concat(e," ends")),up.measure("".concat(ua," ").concat(e),"".concat(ua," ").concat(e," begins"),"".concat(ua," ").concat(e," ends"))},Kg={begin:L6,end:vS},qu=function(){};function __(t){var e=t.getAttribute?t.getAttribute(us):null;return typeof e=="string"}function M6(t){var e=t.getAttribute?t.getAttribute(Fg):null,n=t.getAttribute?t.getAttribute(Ug):null;return e&&n}function F6(t){return t&&t.classList&&t.classList.contains&&t.classList.contains(Q.replacementClass)}function U6(){if(Q.autoReplaceSvg===!0)return ju.replace;var t=ju[Q.autoReplaceSvg];return t||ju.replace}function V6(t){return De.createElementNS("http://www.w3.org/2000/svg",t)}function $6(t){return De.createElement(t)}function wS(t){var e=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},n=e.ceFn,r=n===void 0?t.tag==="svg"?V6:$6:n;if(typeof t=="string")return De.createTextNode(t);var i=r(t.tag);Object.keys(t.attributes||[]).forEach(function(o){i.setAttribute(o,t.attributes[o])});var s=t.children||[];return s.forEach(function(o){i.appendChild(wS(o,{ceFn:r}))}),i}function B6(t){var e=" ".concat(t.outerHTML," ");return e="".concat(e,"Font Awesome fontawesome.com "),e}var ju={replace:function(e){var n=e[0];if(n.parentNode)if(e[1].forEach(function(i){n.parentNode.insertBefore(wS(i),n)}),n.getAttribute(us)===null&&Q.keepOriginalSource){var r=De.createComment(B6(n));n.parentNode.replaceChild(r,n)}else n.remove()},nest:function(e){var n=e[0],r=e[1];if(~$g(n).indexOf(Q.replacementClass))return ju.replace(e);var i=new RegExp("".concat(Q.cssPrefix,"-.*"));if(delete r[0].attributes.id,r[0].attributes.class){var s=r[0].attributes.class.split(" ").reduce(function(a,c){return c===Q.replacementClass||c.match(i)?a.toSvg.push(c):a.toNode.push(c),a},{toNode:[],toSvg:[]});r[0].attributes.class=s.toSvg.join(" "),s.toNode.length===0?n.removeAttribute("class"):n.setAttribute("class",s.toNode.join(" "))}var o=r.map(function(a){return Hc(a)}).join(`
`);n.setAttribute(us,""),n.innerHTML=o}};function b_(t){t()}function _S(t,e){var n=typeof e=="function"?e:qu;if(t.length===0)n();else{var r=b_;Q.mutateApproach===H3&&(r=oi.requestAnimationFrame||b_),r(function(){var i=U6(),s=Kg.begin("mutate");t.map(i),s(),n()})}}var Gg=!1;function bS(){Gg=!0}function lp(){Gg=!1}var xl=null;function I_(t){if(!!h_&&!!Q.observeMutations){var e=t.treeCallback,n=e===void 0?qu:e,r=t.nodeCallback,i=r===void 0?qu:r,s=t.pseudoElementsCallback,o=s===void 0?qu:s,a=t.observeMutationsRoot,c=a===void 0?De:a;xl=new h_(function(u){if(!Gg){var l=ai();Vo(u).forEach(function(h){if(h.type==="childList"&&h.addedNodes.length>0&&!__(h.addedNodes[0])&&(Q.searchPseudoElements&&o(h.target),n(h.target)),h.type==="attributes"&&h.target.parentNode&&Q.searchPseudoElements&&o(h.target.parentNode),h.type==="attributes"&&__(h.target)&&~J3.indexOf(h.attributeName))if(h.attributeName==="class"&&M6(h.target)){var d=Gh($g(h.target)),f=d.prefix,m=d.iconName;h.target.setAttribute(Fg,f||l),m&&h.target.setAttribute(Ug,m)}else F6(h.target)&&i(h.target)})}}),kr&&xl.observe(c,{childList:!0,attributes:!0,characterData:!0,subtree:!0})}}function q6(){!xl||xl.disconnect()}function j6(t){var e=t.getAttribute("style"),n=[];return e&&(n=e.split(";").reduce(function(r,i){var s=i.split(":"),o=s[0],a=s.slice(1);return o&&a.length>0&&(r[o]=a.join(":").trim()),r},{})),n}function z6(t){var e=t.getAttribute("data-prefix"),n=t.getAttribute("data-icon"),r=t.innerText!==void 0?t.innerText.trim():"",i=Gh($g(t));return i.prefix||(i.prefix=ai()),e&&n&&(i.prefix=e,i.iconName=n),i.iconName&&i.prefix||(i.prefix&&r.length>0&&(i.iconName=b6(i.prefix,t.innerText)||jg(i.prefix,rp(t.innerText))),!i.iconName&&Q.autoFetchSvg&&t.firstChild&&t.firstChild.nodeType===Node.TEXT_NODE&&(i.iconName=t.firstChild.data)),i}function H6(t){var e=Vo(t.attributes).reduce(function(i,s){return i.name!=="class"&&i.name!=="style"&&(i[s.name]=s.value),i},{}),n=t.getAttribute("title"),r=t.getAttribute("data-fa-title-id");return Q.autoA11y&&(n?e["aria-labelledby"]="".concat(Q.replacementClass,"-title-").concat(r||dc()):(e["aria-hidden"]="true",e.focusable="false")),e}function K6(){return{iconName:null,title:null,titleId:null,prefix:null,transform:zn,symbol:!1,mask:{iconName:null,prefix:null,rest:[]},maskId:null,extra:{classes:[],styles:{},attributes:{}}}}function E_(t){var e=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{styleParser:!0},n=z6(t),r=n.iconName,i=n.prefix,s=n.rest,o=H6(t),a=sp("parseNodeAttributes",{},t),c=e.styleParser?j6(t):[];return z({iconName:r,title:t.getAttribute("title"),titleId:t.getAttribute("data-fa-title-id"),prefix:i,transform:zn,mask:{iconName:null,prefix:null,rest:[]},maskId:null,symbol:!1,extra:{classes:s,styles:c,attributes:o}},a)}var G6=bn.styles;function IS(t){var e=Q.autoReplaceSvg==="nest"?E_(t,{styleParser:!1}):E_(t);return~e.extra.classes.indexOf(iS)?yr("generateLayersText",t,e):yr("generateSvgReplacementMutation",t,e)}var ci=new Set;Vg.map(function(t){ci.add("fa-".concat(t))});Object.keys(cc[Ne]).map(ci.add.bind(ci));Object.keys(cc[Ge]).map(ci.add.bind(ci));ci=jc(ci);function T_(t){var e=arguments.length>1&&arguments[1]!==void 0?arguments[1]:null;if(!kr)return Promise.resolve();var n=De.documentElement.classList,r=function(h){return n.add("".concat(d_,"-").concat(h))},i=function(h){return n.remove("".concat(d_,"-").concat(h))},s=Q.autoFetchSvg?ci:Vg.map(function(l){return"fa-".concat(l)}).concat(Object.keys(G6));s.includes("fa")||s.push("fa");var o=[".".concat(iS,":not([").concat(us,"])")].concat(s.map(function(l){return".".concat(l,":not([").concat(us,"])")})).join(", ");if(o.length===0)return Promise.resolve();var a=[];try{a=Vo(t.querySelectorAll(o))}catch{}if(a.length>0)r("pending"),i("complete");else return Promise.resolve();var c=Kg.begin("onTree"),u=a.reduce(function(l,h){try{var d=IS(h);d&&l.push(d)}catch(f){rS||f.name==="MissingIcon"&&console.error(f)}return l},[]);return new Promise(function(l,h){Promise.all(u).then(function(d){_S(d,function(){r("active"),r("complete"),i("pending"),typeof e=="function"&&e(),c(),l()})}).catch(function(d){c(),h(d)})})}function W6(t){var e=arguments.length>1&&arguments[1]!==void 0?arguments[1]:null;IS(t).then(function(n){n&&_S([n],e)})}function Q6(t){return function(e){var n=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},r=(e||{}).icon?e:op(e||{}),i=n.mask;return i&&(i=(i||{}).icon?i:op(i||{})),t(r,z(z({},n),{},{mask:i}))}}var Y6=function(e){var n=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},r=n.transform,i=r===void 0?zn:r,s=n.symbol,o=s===void 0?!1:s,a=n.mask,c=a===void 0?null:a,u=n.maskId,l=u===void 0?null:u,h=n.title,d=h===void 0?null:h,f=n.titleId,m=f===void 0?null:f,y=n.classes,I=y===void 0?[]:y,v=n.attributes,E=v===void 0?{}:v,_=n.styles,R=_===void 0?{}:_;if(!!e){var M=e.prefix,H=e.iconName,ne=e.icon;return Wh(z({type:"icon"},e),function(){return ls("beforeDOMElementCreation",{iconDefinition:e,params:n}),Q.autoA11y&&(d?E["aria-labelledby"]="".concat(Q.replacementClass,"-title-").concat(m||dc()):(E["aria-hidden"]="true",E.focusable="false")),Hg({icons:{main:ap(ne),mask:c?ap(c.icon):{found:!1,width:null,height:null,icon:{}}},prefix:M,iconName:H,transform:z(z({},zn),i),symbol:o,title:d,maskId:l,titleId:m,extra:{attributes:E,styles:R,classes:I}})})}},X6={mixout:function(){return{icon:Q6(Y6)}},hooks:function(){return{mutationObserverCallbacks:function(n){return n.treeCallback=T_,n.nodeCallback=W6,n}}},provides:function(e){e.i2svg=function(n){var r=n.node,i=r===void 0?De:r,s=n.callback,o=s===void 0?function(){}:s;return T_(i,o)},e.generateSvgReplacementMutation=function(n,r){var i=r.iconName,s=r.title,o=r.titleId,a=r.prefix,c=r.transform,u=r.symbol,l=r.mask,h=r.maskId,d=r.extra;return new Promise(function(f,m){Promise.all([cp(i,a),l.iconName?cp(l.iconName,l.prefix):Promise.resolve({found:!1,width:512,height:512,icon:{}})]).then(function(y){var I=Lg(y,2),v=I[0],E=I[1];f([n,Hg({icons:{main:v,mask:E},prefix:a,iconName:i,transform:c,symbol:u,maskId:h,title:s,titleId:o,extra:d,watchable:!0})])}).catch(m)})},e.generateAbstractIcon=function(n){var r=n.children,i=n.attributes,s=n.main,o=n.transform,a=n.styles,c=Hh(a);c.length>0&&(i.style=c);var u;return Bg(o)&&(u=yr("generateAbstractTransformGrouping",{main:s,transform:o,containerWidth:s.width,iconWidth:s.width})),r.push(u||s.icon),{children:r,attributes:i}}}},J6={mixout:function(){return{layer:function(n){var r=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},i=r.classes,s=i===void 0?[]:i;return Wh({type:"layer"},function(){ls("beforeDOMElementCreation",{assembler:n,params:r});var o=[];return n(function(a){Array.isArray(a)?a.map(function(c){o=o.concat(c.abstract)}):o=o.concat(a.abstract)}),[{tag:"span",attributes:{class:["".concat(Q.cssPrefix,"-layers")].concat(jc(s)).join(" ")},children:o}]})}}}},Z6={mixout:function(){return{counter:function(n){var r=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},i=r.title,s=i===void 0?null:i,o=r.classes,a=o===void 0?[]:o,c=r.attributes,u=c===void 0?{}:c,l=r.styles,h=l===void 0?{}:l;return Wh({type:"counter",content:n},function(){return ls("beforeDOMElementCreation",{content:n,params:r}),P6({content:n.toString(),title:s,extra:{attributes:u,styles:h,classes:["".concat(Q.cssPrefix,"-layers-counter")].concat(jc(a))}})})}}}},e9={mixout:function(){return{text:function(n){var r=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},i=r.transform,s=i===void 0?zn:i,o=r.title,a=o===void 0?null:o,c=r.classes,u=c===void 0?[]:c,l=r.attributes,h=l===void 0?{}:l,d=r.styles,f=d===void 0?{}:d;return Wh({type:"text",content:n},function(){return ls("beforeDOMElementCreation",{content:n,params:r}),v_({content:n,transform:z(z({},zn),s),title:a,extra:{attributes:h,styles:f,classes:["".concat(Q.cssPrefix,"-layers-text")].concat(jc(u))}})})}}},provides:function(e){e.generateLayersText=function(n,r){var i=r.title,s=r.transform,o=r.extra,a=null,c=null;if(eS){var u=parseInt(getComputedStyle(n).fontSize,10),l=n.getBoundingClientRect();a=l.width/u,c=l.height/u}return Q.autoA11y&&!i&&(o.attributes["aria-hidden"]="true"),Promise.resolve([n,v_({content:n.innerHTML,width:a,height:c,transform:s,title:i,extra:o,watchable:!0})])}}},t9=new RegExp('"',"ug"),S_=[1105920,1112319];function n9(t){var e=t.replace(t9,""),n=m6(e,0),r=n>=S_[0]&&n<=S_[1],i=e.length===2?e[0]===e[1]:!1;return{value:rp(i?e[0]:e),isSecondary:r||i}}function k_(t,e){var n="".concat(z3).concat(e.replace(":","-"));return new Promise(function(r,i){if(t.getAttribute(n)!==null)return r();var s=Vo(t.children),o=s.filter(function(ne){return ne.getAttribute(np)===e})[0],a=oi.getComputedStyle(t,e),c=a.getPropertyValue("font-family").match(Q3),u=a.getPropertyValue("font-weight"),l=a.getPropertyValue("content");if(o&&!c)return t.removeChild(o),r();if(c&&l!=="none"&&l!==""){var h=a.getPropertyValue("content"),d=~["Sharp"].indexOf(c[2])?Ge:Ne,f=~["Solid","Regular","Light","Thin","Duotone","Brands","Kit"].indexOf(c[2])?uc[d][c[2].toLowerCase()]:Y3[d][u],m=n9(h),y=m.value,I=m.isSecondary,v=c[0].startsWith("FontAwesome"),E=jg(f,y),_=E;if(v){var R=I6(y);R.iconName&&R.prefix&&(E=R.iconName,f=R.prefix)}if(E&&!I&&(!o||o.getAttribute(Fg)!==f||o.getAttribute(Ug)!==_)){t.setAttribute(n,_),o&&t.removeChild(o);var M=K6(),H=M.extra;H.attributes[np]=e,cp(E,f).then(function(ne){var K=Hg(z(z({},M),{},{icons:{main:ne,mask:zg()},prefix:f,iconName:_,extra:H,watchable:!0})),ae=De.createElement("svg");e==="::before"?t.insertBefore(ae,t.firstChild):t.appendChild(ae),ae.outerHTML=K.map(function(we){return Hc(we)}).join(`
`),t.removeAttribute(n),r()}).catch(i)}else r()}else r()})}function r9(t){return Promise.all([k_(t,"::before"),k_(t,"::after")])}function i9(t){return t.parentNode!==document.head&&!~K3.indexOf(t.tagName.toUpperCase())&&!t.getAttribute(np)&&(!t.parentNode||t.parentNode.tagName!=="svg")}function A_(t){if(!!kr)return new Promise(function(e,n){var r=Vo(t.querySelectorAll("*")).filter(i9).map(r9),i=Kg.begin("searchPseudoElements");bS(),Promise.all(r).then(function(){i(),lp(),e()}).catch(function(){i(),lp(),n()})})}var s9={hooks:function(){return{mutationObserverCallbacks:function(n){return n.pseudoElementsCallback=A_,n}}},provides:function(e){e.pseudoElements2svg=function(n){var r=n.node,i=r===void 0?De:r;Q.searchPseudoElements&&A_(i)}}},C_=!1,o9={mixout:function(){return{dom:{unwatch:function(){bS(),C_=!0}}}},hooks:function(){return{bootstrap:function(){I_(sp("mutationObserverCallbacks",{}))},noAuto:function(){q6()},watch:function(n){var r=n.observeMutationsRoot;C_?lp():I_(sp("mutationObserverCallbacks",{observeMutationsRoot:r}))}}}},x_=function(e){var n={size:16,x:0,y:0,flipX:!1,flipY:!1,rotate:0};return e.toLowerCase().split(" ").reduce(function(r,i){var s=i.toLowerCase().split("-"),o=s[0],a=s.slice(1).join("-");if(o&&a==="h")return r.flipX=!0,r;if(o&&a==="v")return r.flipY=!0,r;if(a=parseFloat(a),isNaN(a))return r;switch(o){case"grow":r.size=r.size+a;break;case"shrink":r.size=r.size-a;break;case"left":r.x=r.x-a;break;case"right":r.x=r.x+a;break;case"up":r.y=r.y-a;break;case"down":r.y=r.y+a;break;case"rotate":r.rotate=r.rotate+a;break}return r},n)},a9={mixout:function(){return{parse:{transform:function(n){return x_(n)}}}},hooks:function(){return{parseNodeAttributes:function(n,r){var i=r.getAttribute("data-fa-transform");return i&&(n.transform=x_(i)),n}}},provides:function(e){e.generateAbstractTransformGrouping=function(n){var r=n.main,i=n.transform,s=n.containerWidth,o=n.iconWidth,a={transform:"translate(".concat(s/2," 256)")},c="translate(".concat(i.x*32,", ").concat(i.y*32,") "),u="scale(".concat(i.size/16*(i.flipX?-1:1),", ").concat(i.size/16*(i.flipY?-1:1),") "),l="rotate(".concat(i.rotate," 0 0)"),h={transform:"".concat(c," ").concat(u," ").concat(l)},d={transform:"translate(".concat(o/2*-1," -256)")},f={outer:a,inner:h,path:d};return{tag:"g",attributes:z({},f.outer),children:[{tag:"g",attributes:z({},f.inner),children:[{tag:r.icon.tag,children:r.icon.children,attributes:z(z({},r.icon.attributes),f.path)}]}]}}}},Ud={x:0,y:0,width:"100%",height:"100%"};function R_(t){var e=arguments.length>1&&arguments[1]!==void 0?arguments[1]:!0;return t.attributes&&(t.attributes.fill||e)&&(t.attributes.fill="black"),t}function c9(t){return t.tag==="g"?t.children:[t]}var u9={hooks:function(){return{parseNodeAttributes:function(n,r){var i=r.getAttribute("data-fa-mask"),s=i?Gh(i.split(" ").map(function(o){return o.trim()})):zg();return s.prefix||(s.prefix=ai()),n.mask=s,n.maskId=r.getAttribute("data-fa-mask-id"),n}}},provides:function(e){e.generateAbstractMask=function(n){var r=n.children,i=n.attributes,s=n.main,o=n.mask,a=n.maskId,c=n.transform,u=s.width,l=s.icon,h=o.width,d=o.icon,f=a6({transform:c,containerWidth:h,iconWidth:u}),m={tag:"rect",attributes:z(z({},Ud),{},{fill:"white"})},y=l.children?{children:l.children.map(R_)}:{},I={tag:"g",attributes:z({},f.inner),children:[R_(z({tag:l.tag,attributes:z(z({},l.attributes),f.path)},y))]},v={tag:"g",attributes:z({},f.outer),children:[I]},E="mask-".concat(a||dc()),_="clip-".concat(a||dc()),R={tag:"mask",attributes:z(z({},Ud),{},{id:E,maskUnits:"userSpaceOnUse",maskContentUnits:"userSpaceOnUse"}),children:[m,v]},M={tag:"defs",children:[{tag:"clipPath",attributes:{id:_},children:c9(d)},R]};return r.push(M,{tag:"rect",attributes:z({fill:"currentColor","clip-path":"url(#".concat(_,")"),mask:"url(#".concat(E,")")},Ud)}),{children:r,attributes:i}}}},l9={provides:function(e){var n=!1;oi.matchMedia&&(n=oi.matchMedia("(prefers-reduced-motion: reduce)").matches),e.missingIconAbstract=function(){var r=[],i={fill:"currentColor"},s={attributeType:"XML",repeatCount:"indefinite",dur:"2s"};r.push({tag:"path",attributes:z(z({},i),{},{d:"M156.5,447.7l-12.6,29.5c-18.7-9.5-35.9-21.2-51.5-34.9l22.7-22.7C127.6,430.5,141.5,440,156.5,447.7z M40.6,272H8.5 c1.4,21.2,5.4,41.7,11.7,61.1L50,321.2C45.1,305.5,41.8,289,40.6,272z M40.6,240c1.4-18.8,5.2-37,11.1-54.1l-29.5-12.6 C14.7,194.3,10,216.7,8.5,240H40.6z M64.3,156.5c7.8-14.9,17.2-28.8,28.1-41.5L69.7,92.3c-13.7,15.6-25.5,32.8-34.9,51.5 L64.3,156.5z M397,419.6c-13.9,12-29.4,22.3-46.1,30.4l11.9,29.8c20.7-9.9,39.8-22.6,56.9-37.6L397,419.6z M115,92.4 c13.9-12,29.4-22.3,46.1-30.4l-11.9-29.8c-20.7,9.9-39.8,22.6-56.8,37.6L115,92.4z M447.7,355.5c-7.8,14.9-17.2,28.8-28.1,41.5 l22.7,22.7c13.7-15.6,25.5-32.9,34.9-51.5L447.7,355.5z M471.4,272c-1.4,18.8-5.2,37-11.1,54.1l29.5,12.6 c7.5-21.1,12.2-43.5,13.6-66.8H471.4z M321.2,462c-15.7,5-32.2,8.2-49.2,9.4v32.1c21.2-1.4,41.7-5.4,61.1-11.7L321.2,462z M240,471.4c-18.8-1.4-37-5.2-54.1-11.1l-12.6,29.5c21.1,7.5,43.5,12.2,66.8,13.6V471.4z M462,190.8c5,15.7,8.2,32.2,9.4,49.2h32.1 c-1.4-21.2-5.4-41.7-11.7-61.1L462,190.8z M92.4,397c-12-13.9-22.3-29.4-30.4-46.1l-29.8,11.9c9.9,20.7,22.6,39.8,37.6,56.9 L92.4,397z M272,40.6c18.8,1.4,36.9,5.2,54.1,11.1l12.6-29.5C317.7,14.7,295.3,10,272,8.5V40.6z M190.8,50 c15.7-5,32.2-8.2,49.2-9.4V8.5c-21.2,1.4-41.7,5.4-61.1,11.7L190.8,50z M442.3,92.3L419.6,115c12,13.9,22.3,29.4,30.5,46.1 l29.8-11.9C470,128.5,457.3,109.4,442.3,92.3z M397,92.4l22.7-22.7c-15.6-13.7-32.8-25.5-51.5-34.9l-12.6,29.5 C370.4,72.1,384.4,81.5,397,92.4z"})});var o=z(z({},s),{},{attributeName:"opacity"}),a={tag:"circle",attributes:z(z({},i),{},{cx:"256",cy:"364",r:"28"}),children:[]};return n||a.children.push({tag:"animate",attributes:z(z({},s),{},{attributeName:"r",values:"28;14;28;28;14;28;"})},{tag:"animate",attributes:z(z({},o),{},{values:"1;0;1;1;0;1;"})}),r.push(a),r.push({tag:"path",attributes:z(z({},i),{},{opacity:"1",d:"M263.7,312h-16c-6.6,0-12-5.4-12-12c0-71,77.4-63.9,77.4-107.8c0-20-17.8-40.2-57.4-40.2c-29.1,0-44.3,9.6-59.2,28.7 c-3.9,5-11.1,6-16.2,2.4l-13.1-9.2c-5.6-3.9-6.9-11.8-2.6-17.2c21.2-27.2,46.4-44.7,91.2-44.7c52.3,0,97.4,29.8,97.4,80.2 c0,67.6-77.4,63.5-77.4,107.8C275.7,306.6,270.3,312,263.7,312z"}),children:n?[]:[{tag:"animate",attributes:z(z({},o),{},{values:"1;0;0;0;0;1;"})}]}),n||r.push({tag:"path",attributes:z(z({},i),{},{opacity:"0",d:"M232.5,134.5l7,168c0.3,6.4,5.6,11.5,12,11.5h9c6.4,0,11.7-5.1,12-11.5l7-168c0.3-6.8-5.2-12.5-12-12.5h-23 C237.7,122,232.2,127.7,232.5,134.5z"}),children:[{tag:"animate",attributes:z(z({},o),{},{values:"0;0;1;1;0;0;"})}]}),{tag:"g",attributes:{class:"missing"},children:r}}}},h9={hooks:function(){return{parseNodeAttributes:function(n,r){var i=r.getAttribute("data-fa-symbol"),s=i===null?!1:i===""?!0:i;return n.symbol=s,n}}}},d9=[l6,X6,J6,Z6,e9,s9,o9,a9,u9,l9,h9];S6(d9,{mixoutsTo:rn});rn.noAuto;var ES=rn.config,f9=rn.library;rn.dom;var Rl=rn.parse;rn.findIconDefinition;rn.toHtml;var p9=rn.icon;rn.layer;var m9=rn.text;rn.counter;function N_(t,e){var n=Object.keys(t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(t);e&&(r=r.filter(function(i){return Object.getOwnPropertyDescriptor(t,i).enumerable})),n.push.apply(n,r)}return n}function vn(t){for(var e=1;e<arguments.length;e++){var n=arguments[e]!=null?arguments[e]:{};e%2?N_(Object(n),!0).forEach(function(r){Bt(t,r,n[r])}):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(n)):N_(Object(n)).forEach(function(r){Object.defineProperty(t,r,Object.getOwnPropertyDescriptor(n,r))})}return t}function Nl(t){return Nl=typeof Symbol=="function"&&typeof Symbol.iterator=="symbol"?function(e){return typeof e}:function(e){return e&&typeof Symbol=="function"&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},Nl(t)}function Bt(t,e,n){return e in t?Object.defineProperty(t,e,{value:n,enumerable:!0,configurable:!0,writable:!0}):t[e]=n,t}function g9(t,e){if(t==null)return{};var n={},r=Object.keys(t),i,s;for(s=0;s<r.length;s++)i=r[s],!(e.indexOf(i)>=0)&&(n[i]=t[i]);return n}function y9(t,e){if(t==null)return{};var n=g9(t,e),r,i;if(Object.getOwnPropertySymbols){var s=Object.getOwnPropertySymbols(t);for(i=0;i<s.length;i++)r=s[i],!(e.indexOf(r)>=0)&&(!Object.prototype.propertyIsEnumerable.call(t,r)||(n[r]=t[r]))}return n}function hp(t){return v9(t)||w9(t)||_9(t)||b9()}function v9(t){if(Array.isArray(t))return dp(t)}function w9(t){if(typeof Symbol<"u"&&t[Symbol.iterator]!=null||t["@@iterator"]!=null)return Array.from(t)}function _9(t,e){if(!!t){if(typeof t=="string")return dp(t,e);var n=Object.prototype.toString.call(t).slice(8,-1);if(n==="Object"&&t.constructor&&(n=t.constructor.name),n==="Map"||n==="Set")return Array.from(t);if(n==="Arguments"||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n))return dp(t,e)}}function dp(t,e){(e==null||e>t.length)&&(e=t.length);for(var n=0,r=new Array(e);n<e;n++)r[n]=t[n];return r}function b9(){throw new TypeError(`Invalid attempt to spread non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`)}var I9=typeof globalThis<"u"?globalThis:typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{},TS={exports:{}};(function(t){(function(e){var n=function(v,E,_){if(!u(E)||h(E)||d(E)||f(E)||c(E))return E;var R,M=0,H=0;if(l(E))for(R=[],H=E.length;M<H;M++)R.push(n(v,E[M],_));else{R={};for(var ne in E)Object.prototype.hasOwnProperty.call(E,ne)&&(R[v(ne,_)]=n(v,E[ne],_))}return R},r=function(v,E){E=E||{};var _=E.separator||"_",R=E.split||/(?=[A-Z])/;return v.split(R).join(_)},i=function(v){return m(v)?v:(v=v.replace(/[\-_\s]+(.)?/g,function(E,_){return _?_.toUpperCase():""}),v.substr(0,1).toLowerCase()+v.substr(1))},s=function(v){var E=i(v);return E.substr(0,1).toUpperCase()+E.substr(1)},o=function(v,E){return r(v,E).toLowerCase()},a=Object.prototype.toString,c=function(v){return typeof v=="function"},u=function(v){return v===Object(v)},l=function(v){return a.call(v)=="[object Array]"},h=function(v){return a.call(v)=="[object Date]"},d=function(v){return a.call(v)=="[object RegExp]"},f=function(v){return a.call(v)=="[object Boolean]"},m=function(v){return v=v-0,v===v},y=function(v,E){var _=E&&"process"in E?E.process:E;return typeof _!="function"?v:function(R,M){return _(R,v,M)}},I={camelize:i,decamelize:o,pascalize:s,depascalize:o,camelizeKeys:function(v,E){return n(y(i,E),v)},decamelizeKeys:function(v,E){return n(y(o,E),v,E)},pascalizeKeys:function(v,E){return n(y(s,E),v)},depascalizeKeys:function(){return this.decamelizeKeys.apply(this,arguments)}};t.exports?t.exports=I:e.humps=I})(I9)})(TS);var E9=TS.exports,T9=["class","style"];function S9(t){return t.split(";").map(function(e){return e.trim()}).filter(function(e){return e}).reduce(function(e,n){var r=n.indexOf(":"),i=E9.camelize(n.slice(0,r)),s=n.slice(r+1).trim();return e[i]=s,e},{})}function k9(t){return t.split(/\s+/).reduce(function(e,n){return e[n]=!0,e},{})}function Wg(t){var e=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},n=arguments.length>2&&arguments[2]!==void 0?arguments[2]:{};if(typeof t=="string")return t;var r=(t.children||[]).map(function(c){return Wg(c)}),i=Object.keys(t.attributes||{}).reduce(function(c,u){var l=t.attributes[u];switch(u){case"class":c.class=k9(l);break;case"style":c.style=S9(l);break;default:c.attrs[u]=l}return c},{attrs:{},class:{},style:{}});n.class;var s=n.style,o=s===void 0?{}:s,a=y9(n,T9);return mc(t.tag,vn(vn(vn({},e),{},{class:i.class,style:vn(vn({},i.style),o)},i.attrs),a),r)}var SS=!1;try{SS=!0}catch{}function A9(){if(!SS&&console&&typeof console.error=="function"){var t;(t=console).error.apply(t,arguments)}}function Ca(t,e){return Array.isArray(e)&&e.length>0||!Array.isArray(e)&&e?Bt({},t,e):{}}function C9(t){var e,n=(e={"fa-spin":t.spin,"fa-pulse":t.pulse,"fa-fw":t.fixedWidth,"fa-border":t.border,"fa-li":t.listItem,"fa-inverse":t.inverse,"fa-flip":t.flip===!0,"fa-flip-horizontal":t.flip==="horizontal"||t.flip==="both","fa-flip-vertical":t.flip==="vertical"||t.flip==="both"},Bt(e,"fa-".concat(t.size),t.size!==null),Bt(e,"fa-rotate-".concat(t.rotation),t.rotation!==null),Bt(e,"fa-pull-".concat(t.pull),t.pull!==null),Bt(e,"fa-swap-opacity",t.swapOpacity),Bt(e,"fa-bounce",t.bounce),Bt(e,"fa-shake",t.shake),Bt(e,"fa-beat",t.beat),Bt(e,"fa-fade",t.fade),Bt(e,"fa-beat-fade",t.beatFade),Bt(e,"fa-flash",t.flash),Bt(e,"fa-spin-pulse",t.spinPulse),Bt(e,"fa-spin-reverse",t.spinReverse),e);return Object.keys(n).map(function(r){return n[r]?r:null}).filter(function(r){return r})}function P_(t){if(t&&Nl(t)==="object"&&t.prefix&&t.iconName&&t.icon)return t;if(Rl.icon)return Rl.icon(t);if(t===null)return null;if(Nl(t)==="object"&&t.prefix&&t.iconName)return t;if(Array.isArray(t)&&t.length===2)return{prefix:t[0],iconName:t[1]};if(typeof t=="string")return{prefix:"fas",iconName:t}}var x9=pc({name:"FontAwesomeIcon",props:{border:{type:Boolean,default:!1},fixedWidth:{type:Boolean,default:!1},flip:{type:[Boolean,String],default:!1,validator:function(e){return[!0,!1,"horizontal","vertical","both"].indexOf(e)>-1}},icon:{type:[Object,Array,String],required:!0},mask:{type:[Object,Array,String],default:null},listItem:{type:Boolean,default:!1},pull:{type:String,default:null,validator:function(e){return["right","left"].indexOf(e)>-1}},pulse:{type:Boolean,default:!1},rotation:{type:[String,Number],default:null,validator:function(e){return[90,180,270].indexOf(Number.parseInt(e,10))>-1}},swapOpacity:{type:Boolean,default:!1},size:{type:String,default:null,validator:function(e){return["2xs","xs","sm","lg","xl","2xl","1x","2x","3x","4x","5x","6x","7x","8x","9x","10x"].indexOf(e)>-1}},spin:{type:Boolean,default:!1},transform:{type:[String,Object],default:null},symbol:{type:[Boolean,String],default:!1},title:{type:String,default:null},inverse:{type:Boolean,default:!1},bounce:{type:Boolean,default:!1},shake:{type:Boolean,default:!1},beat:{type:Boolean,default:!1},fade:{type:Boolean,default:!1},beatFade:{type:Boolean,default:!1},flash:{type:Boolean,default:!1},spinPulse:{type:Boolean,default:!1},spinReverse:{type:Boolean,default:!1}},setup:function(e,n){var r=n.attrs,i=je(function(){return P_(e.icon)}),s=je(function(){return Ca("classes",C9(e))}),o=je(function(){return Ca("transform",typeof e.transform=="string"?Rl.transform(e.transform):e.transform)}),a=je(function(){return Ca("mask",P_(e.mask))}),c=je(function(){return p9(i.value,vn(vn(vn(vn({},s.value),o.value),a.value),{},{symbol:e.symbol,title:e.title}))});la(c,function(l){if(!l)return A9("Could not find one or more icon(s)",i.value,a.value)},{immediate:!0});var u=je(function(){return c.value?Wg(c.value.abstract[0],{},r):null});return function(){return u.value}}});pc({name:"FontAwesomeLayers",props:{fixedWidth:{type:Boolean,default:!1}},setup:function(e,n){var r=n.slots,i=ES.familyPrefix,s=je(function(){return["".concat(i,"-layers")].concat(hp(e.fixedWidth?["".concat(i,"-fw")]:[]))});return function(){return mc("div",{class:s.value},r.default?r.default():[])}}});pc({name:"FontAwesomeLayersText",props:{value:{type:[String,Number],default:""},transform:{type:[String,Object],default:null},counter:{type:Boolean,default:!1},position:{type:String,default:null,validator:function(e){return["bottom-left","bottom-right","top-left","top-right"].indexOf(e)>-1}}},setup:function(e,n){var r=n.attrs,i=ES.familyPrefix,s=je(function(){return Ca("classes",[].concat(hp(e.counter?["".concat(i,"-layers-counter")]:[]),hp(e.position?["".concat(i,"-layers-").concat(e.position)]:[])))}),o=je(function(){return Ca("transform",typeof e.transform=="string"?Rl.transform(e.transform):e.transform)}),a=je(function(){var u=m9(e.value.toString(),vn(vn({},o.value),s.value)),l=u.abstract;return e.counter&&(l[0].attributes.class=l[0].attributes.class.replace("fa-layers-text","")),l[0]}),c=je(function(){return Wg(a.value,{},r)});return function(){return c.value}}});var R9={prefix:"fas",iconName:"trash-can",icon:[448,512,[61460,"trash-alt"],"f2ed","M135.2 17.7C140.6 6.8 151.7 0 163.8 0H284.2c12.1 0 23.2 6.8 28.6 17.7L320 32h96c17.7 0 32 14.3 32 32s-14.3 32-32 32H32C14.3 96 0 81.7 0 64S14.3 32 32 32h96l7.2-14.3zM32 128H416V448c0 35.3-28.7 64-64 64H96c-35.3 0-64-28.7-64-64V128zm96 64c-8.8 0-16 7.2-16 16V432c0 8.8 7.2 16 16 16s16-7.2 16-16V208c0-8.8-7.2-16-16-16zm96 0c-8.8 0-16 7.2-16 16V432c0 8.8 7.2 16 16 16s16-7.2 16-16V208c0-8.8-7.2-16-16-16zm96 0c-8.8 0-16 7.2-16 16V432c0 8.8 7.2 16 16 16s16-7.2 16-16V208c0-8.8-7.2-16-16-16z"]},N9={prefix:"fas",iconName:"bars",icon:[448,512,["navicon"],"f0c9","M0 96C0 78.3 14.3 64 32 64H416c17.7 0 32 14.3 32 32s-14.3 32-32 32H32C14.3 128 0 113.7 0 96zM0 256c0-17.7 14.3-32 32-32H416c17.7 0 32 14.3 32 32s-14.3 32-32 32H32c-17.7 0-32-14.3-32-32zM448 416c0 17.7-14.3 32-32 32H32c-17.7 0-32-14.3-32-32s14.3-32 32-32H416c17.7 0 32 14.3 32 32z"]},P9={prefix:"fas",iconName:"angle-right",icon:[320,512,[8250],"f105","M278.6 233.4c12.5 12.5 12.5 32.8 0 45.3l-160 160c-12.5 12.5-32.8 12.5-45.3 0s-12.5-32.8 0-45.3L210.7 256 73.4 118.6c-12.5-12.5-12.5-32.8 0-45.3s32.8-12.5 45.3 0l160 160z"]},D9={prefix:"fas",iconName:"phone",icon:[512,512,[128222,128379],"f095","M164.9 24.6c-7.7-18.6-28-28.5-47.4-23.2l-88 24C12.1 30.2 0 46 0 64C0 311.4 200.6 512 448 512c18 0 33.8-12.1 38.6-29.5l24-88c5.3-19.4-4.6-39.7-23.2-47.4l-96-40c-16.3-6.8-35.2-2.1-46.3 11.6L304.7 368C234.3 334.7 177.3 277.7 144 207.3L193.3 167c13.7-11.2 18.4-30 11.6-46.3l-40-96z"]},O9={prefix:"fas",iconName:"envelope",icon:[512,512,[128386,9993,61443],"f0e0","M48 64C21.5 64 0 85.5 0 112c0 15.1 7.1 29.3 19.2 38.4L236.8 313.6c11.4 8.5 27 8.5 38.4 0L492.8 150.4c12.1-9.1 19.2-23.3 19.2-38.4c0-26.5-21.5-48-48-48H48zM0 176V384c0 35.3 28.7 64 64 64H448c35.3 0 64-28.7 64-64V176L294.4 339.2c-22.8 17.1-54 17.1-76.8 0L0 176z"]},L9={prefix:"fas",iconName:"arrow-up",icon:[384,512,[8593],"f062","M214.6 41.4c-12.5-12.5-32.8-12.5-45.3 0l-160 160c-12.5 12.5-12.5 32.8 0 45.3s32.8 12.5 45.3 0L160 141.2V448c0 17.7 14.3 32 32 32s32-14.3 32-32V141.2L329.4 246.6c12.5 12.5 32.8 12.5 45.3 0s12.5-32.8 0-45.3l-160-160z"]},M9={prefix:"fas",iconName:"expand",icon:[448,512,[],"f065","M32 32C14.3 32 0 46.3 0 64v96c0 17.7 14.3 32 32 32s32-14.3 32-32V96h64c17.7 0 32-14.3 32-32s-14.3-32-32-32H32zM64 352c0-17.7-14.3-32-32-32s-32 14.3-32 32v96c0 17.7 14.3 32 32 32h96c17.7 0 32-14.3 32-32s-14.3-32-32-32H64V352zM320 32c-17.7 0-32 14.3-32 32s14.3 32 32 32h64v64c0 17.7 14.3 32 32 32s32-14.3 32-32V64c0-17.7-14.3-32-32-32H320zM448 352c0-17.7-14.3-32-32-32s-32 14.3-32 32v64H320c-17.7 0-32 14.3-32 32s14.3 32 32 32h96c17.7 0 32-14.3 32-32V352z"]},F9={prefix:"fas",iconName:"xmark",icon:[384,512,[128473,10005,10006,10060,215,"close","multiply","remove","times"],"f00d","M342.6 150.6c12.5-12.5 12.5-32.8 0-45.3s-32.8-12.5-45.3 0L192 210.7 86.6 105.4c-12.5-12.5-32.8-12.5-45.3 0s-12.5 32.8 0 45.3L146.7 256 41.4 361.4c-12.5 12.5-12.5 32.8 0 45.3s32.8 12.5 45.3 0L192 301.3 297.4 406.6c12.5 12.5 32.8 12.5 45.3 0s12.5-32.8 0-45.3L237.3 256 342.6 150.6z"]},U9={prefix:"fas",iconName:"angle-left",icon:[320,512,[8249],"f104","M41.4 233.4c-12.5 12.5-12.5 32.8 0 45.3l160 160c12.5 12.5 32.8 12.5 45.3 0s12.5-32.8 0-45.3L109.3 256 246.6 118.6c12.5-12.5 12.5-32.8 0-45.3s-32.8-12.5-45.3 0l-160 160z"]},V9={prefix:"fab",iconName:"instagram",icon:[448,512,[],"f16d","M224.1 141c-63.6 0-114.9 51.3-114.9 114.9s51.3 114.9 114.9 114.9S339 319.5 339 255.9 287.7 141 224.1 141zm0 189.6c-41.1 0-74.7-33.5-74.7-74.7s33.5-74.7 74.7-74.7 74.7 33.5 74.7 74.7-33.6 74.7-74.7 74.7zm146.4-194.3c0 14.9-12 26.8-26.8 26.8-14.9 0-26.8-12-26.8-26.8s12-26.8 26.8-26.8 26.8 12 26.8 26.8zm76.1 27.2c-1.7-35.9-9.9-67.7-36.2-93.9-26.2-26.2-58-34.4-93.9-36.2-37-2.1-147.9-2.1-184.9 0-35.8 1.7-67.6 9.9-93.9 36.1s-34.4 58-36.2 93.9c-2.1 37-2.1 147.9 0 184.9 1.7 35.9 9.9 67.7 36.2 93.9s58 34.4 93.9 36.2c37 2.1 147.9 2.1 184.9 0 35.9-1.7 67.7-9.9 93.9-36.2 26.2-26.2 34.4-58 36.2-93.9 2.1-37 2.1-147.8 0-184.8zM398.8 388c-7.8 19.6-22.9 34.7-42.6 42.6-29.5 11.7-99.5 9-132.1 9s-102.7 2.6-132.1-9c-19.6-7.8-34.7-22.9-42.6-42.6-11.7-29.5-9-99.5-9-132.1s-2.6-102.7 9-132.1c7.8-19.6 22.9-34.7 42.6-42.6 29.5-11.7 99.5-9 132.1-9s102.7-2.6 132.1 9c19.6 7.8 34.7 22.9 42.6 42.6 11.7 29.5 9 99.5 9 132.1s2.7 102.7-9 132.1z"]},$9={prefix:"fab",iconName:"facebook",icon:[512,512,[62e3],"f09a","M504 256C504 119 393 8 256 8S8 119 8 256c0 123.78 90.69 226.38 209.25 245V327.69h-63V256h63v-54.64c0-62.15 37-96.48 93.67-96.48 27.14 0 55.52 4.84 55.52 4.84v61h-31.28c-30.8 0-40.41 19.12-40.41 38.73V256h68.78l-11 71.69h-57.78V501C413.31 482.38 504 379.78 504 256z"]},B9={prefix:"fab",iconName:"whatsapp",icon:[448,512,[],"f232","M380.9 97.1C339 55.1 283.2 32 223.9 32c-122.4 0-222 99.6-222 222 0 39.1 10.2 77.3 29.6 111L0 480l117.7-30.9c32.4 17.7 68.9 27 106.1 27h.1c122.3 0 224.1-99.6 224.1-222 0-59.3-25.2-115-67.1-157zm-157 341.6c-33.2 0-65.7-8.9-94-25.7l-6.7-4-69.8 18.3L72 359.2l-4.4-7c-18.5-29.4-28.2-63.3-28.2-98.2 0-101.7 82.8-184.5 184.6-184.5 49.3 0 95.6 19.2 130.4 54.1 34.8 34.9 56.2 81.2 56.1 130.5 0 101.8-84.9 184.6-186.6 184.6zm101.2-138.2c-5.5-2.8-32.8-16.2-37.9-18-5.1-1.9-8.8-2.8-12.5 2.8-3.7 5.6-14.3 18-17.6 21.8-3.2 3.7-6.5 4.2-12 1.4-32.6-16.3-54-29.1-75.5-66-5.7-9.8 5.7-9.1 16.3-30.3 1.8-3.7.9-6.9-.5-9.7-1.4-2.8-12.5-30.1-17.1-41.2-4.5-10.8-9.1-9.3-12.5-9.5-3.2-.2-6.9-.2-10.6-.2-3.7 0-9.7 1.4-14.8 6.9-5.1 5.6-19.4 19-19.4 46.3 0 27.3 19.9 53.7 22.6 57.4 2.8 3.7 39.1 59.7 94.8 83.8 35.2 15.2 49 16.5 66.6 13.9 10.7-1.6 32.8-13.4 37.4-26.4 4.6-13 4.6-24.1 3.2-26.4-1.3-2.5-5-3.9-10.5-6.6z"]};f9.add(M9,F9,N9,P9,U9,$9,V9,B9,O9,R9,D9,L9);const Qg=iC(oC);Qg.use(O3);Qg.component("font-awesome-icon",x9);Qg.mount("#app");export{eV as A,M4 as B,L4 as C,Tl as D,Nn as F,Db as T,rT as _,Wk as a,Q9 as b,G9 as c,Rb as d,Ht as e,z9 as f,X9 as g,yA as h,xp as i,la as j,K9 as k,Ck as l,W9 as m,mp as n,kb as o,j9 as p,Cb as q,gk as r,D3 as s,q9 as t,J9 as u,Y9 as v,H9 as w,bT as x,Z9 as y,pp as z};
