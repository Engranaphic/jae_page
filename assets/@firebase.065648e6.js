import{_ as Fc}from"./tslib.9ddfe73c.js";import{o as Uy}from"./idb.94e4f64e.js";/**
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
 */const Md=function(n){const e=[];let t=0;for(let r=0;r<n.length;r++){let i=n.charCodeAt(r);i<128?e[t++]=i:i<2048?(e[t++]=i>>6|192,e[t++]=i&63|128):(i&64512)===55296&&r+1<n.length&&(n.charCodeAt(r+1)&64512)===56320?(i=65536+((i&1023)<<10)+(n.charCodeAt(++r)&1023),e[t++]=i>>18|240,e[t++]=i>>12&63|128,e[t++]=i>>6&63|128,e[t++]=i&63|128):(e[t++]=i>>12|224,e[t++]=i>>6&63|128,e[t++]=i&63|128)}return e},Fy=function(n){const e=[];let t=0,r=0;for(;t<n.length;){const i=n[t++];if(i<128)e[r++]=String.fromCharCode(i);else if(i>191&&i<224){const s=n[t++];e[r++]=String.fromCharCode((i&31)<<6|s&63)}else if(i>239&&i<365){const s=n[t++],o=n[t++],a=n[t++],c=((i&7)<<18|(s&63)<<12|(o&63)<<6|a&63)-65536;e[r++]=String.fromCharCode(55296+(c>>10)),e[r++]=String.fromCharCode(56320+(c&1023))}else{const s=n[t++],o=n[t++];e[r++]=String.fromCharCode((i&15)<<12|(s&63)<<6|o&63)}}return e.join("")},Ud={byteToCharMap_:null,charToByteMap_:null,byteToCharMapWebSafe_:null,charToByteMapWebSafe_:null,ENCODED_VALS_BASE:"ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",get ENCODED_VALS(){return this.ENCODED_VALS_BASE+"+/="},get ENCODED_VALS_WEBSAFE(){return this.ENCODED_VALS_BASE+"-_."},HAS_NATIVE_SUPPORT:typeof atob=="function",encodeByteArray(n,e){if(!Array.isArray(n))throw Error("encodeByteArray takes an array as a parameter");this.init_();const t=e?this.byteToCharMapWebSafe_:this.byteToCharMap_,r=[];for(let i=0;i<n.length;i+=3){const s=n[i],o=i+1<n.length,a=o?n[i+1]:0,c=i+2<n.length,u=c?n[i+2]:0,l=s>>2,h=(s&3)<<4|a>>4;let d=(a&15)<<2|u>>6,p=u&63;c||(p=64,o||(d=64)),r.push(t[l],t[h],t[d],t[p])}return r.join("")},encodeString(n,e){return this.HAS_NATIVE_SUPPORT&&!e?btoa(n):this.encodeByteArray(Md(n),e)},decodeString(n,e){return this.HAS_NATIVE_SUPPORT&&!e?atob(n):Fy(this.decodeStringToByteArray(n,e))},decodeStringToByteArray(n,e){this.init_();const t=e?this.charToByteMapWebSafe_:this.charToByteMap_,r=[];for(let i=0;i<n.length;){const s=t[n.charAt(i++)],a=i<n.length?t[n.charAt(i)]:0;++i;const u=i<n.length?t[n.charAt(i)]:64;++i;const h=i<n.length?t[n.charAt(i)]:64;if(++i,s==null||a==null||u==null||h==null)throw new Vy;const d=s<<2|a>>4;if(r.push(d),u!==64){const p=a<<4&240|u>>2;if(r.push(p),h!==64){const g=u<<6&192|h;r.push(g)}}}return r},init_(){if(!this.byteToCharMap_){this.byteToCharMap_={},this.charToByteMap_={},this.byteToCharMapWebSafe_={},this.charToByteMapWebSafe_={};for(let n=0;n<this.ENCODED_VALS.length;n++)this.byteToCharMap_[n]=this.ENCODED_VALS.charAt(n),this.charToByteMap_[this.byteToCharMap_[n]]=n,this.byteToCharMapWebSafe_[n]=this.ENCODED_VALS_WEBSAFE.charAt(n),this.charToByteMapWebSafe_[this.byteToCharMapWebSafe_[n]]=n,n>=this.ENCODED_VALS_BASE.length&&(this.charToByteMap_[this.ENCODED_VALS_WEBSAFE.charAt(n)]=n,this.charToByteMapWebSafe_[this.ENCODED_VALS.charAt(n)]=n)}}};class Vy extends Error{constructor(){super(...arguments),this.name="DecodeBase64StringError"}}const By=function(n){const e=Md(n);return Ud.encodeByteArray(e,!0)},Ks=function(n){return By(n).replace(/\./g,"")},Fd=function(n){try{return Ud.decodeString(n,!0)}catch(e){console.error("base64Decode failed: ",e)}return null};function Ws(n,e){if(!(e instanceof Object))return e;switch(e.constructor){case Date:const t=e;return new Date(t.getTime());case Object:n===void 0&&(n={});break;case Array:n=[];break;default:return e}for(const t in e)!e.hasOwnProperty(t)||!qy(t)||(n[t]=Ws(n[t],e[t]));return n}function qy(n){return n!=="__proto__"}/**
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
 */function $y(){if(typeof self<"u")return self;if(typeof window<"u")return window;if(typeof global<"u")return global;throw new Error("Unable to locate global object.")}/**
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
 */const zy=()=>$y().__FIREBASE_DEFAULTS__,jy=()=>{if(typeof process>"u"||typeof process.env>"u")return;const n={}.__FIREBASE_DEFAULTS__;if(n)return JSON.parse(n)},Gy=()=>{if(typeof document>"u")return;let n;try{n=document.cookie.match(/__FIREBASE_DEFAULTS__=([^;]+)/)}catch{return}const e=n&&Fd(n[1]);return e&&JSON.parse(e)},Vc=()=>{try{return zy()||jy()||Gy()}catch(n){console.info(`Unable to get __FIREBASE_DEFAULTS__ due to: ${n}`);return}},Ky=()=>{var n;return(n=Vc())===null||n===void 0?void 0:n.config},Wy=n=>{var e;return(e=Vc())===null||e===void 0?void 0:e[`_${n}`]};/**
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
 */class Hy{constructor(){this.reject=()=>{},this.resolve=()=>{},this.promise=new Promise((e,t)=>{this.resolve=e,this.reject=t})}wrapCallback(e){return(t,r)=>{t?this.reject(t):this.resolve(r),typeof e=="function"&&(this.promise.catch(()=>{}),e.length===1?e(t):e(t,r))}}}/**
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
 */function Vd(n,e){if(n.uid)throw new Error('The "uid" field is no longer supported by mockUserToken. Please use "sub" instead for Firebase Auth User ID.');const t={alg:"none",type:"JWT"},r=e||"demo-project",i=n.iat||0,s=n.sub||n.user_id;if(!s)throw new Error("mockUserToken must contain 'sub' or 'user_id' field!");const o=Object.assign({iss:`https://securetoken.google.com/${r}`,aud:r,iat:i,exp:i+3600,auth_time:i,sub:s,user_id:s,firebase:{sign_in_provider:"custom",identities:{}}},n),a="";return[Ks(JSON.stringify(t)),Ks(JSON.stringify(o)),a].join(".")}/**
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
 */function J(){return typeof navigator<"u"&&typeof navigator.userAgent=="string"?navigator.userAgent:""}function Qy(){return typeof window<"u"&&!!(window.cordova||window.phonegap||window.PhoneGap)&&/ios|iphone|ipod|ipad|android|blackberry|iemobile/i.test(J())}function Eo(){var n;const e=(n=Vc())===null||n===void 0?void 0:n.forceEnvironment;if(e==="node")return!0;if(e==="browser")return!1;try{return Object.prototype.toString.call(global.process)==="[object process]"}catch{return!1}}function Yy(){return typeof self=="object"&&self.self===self}function Bd(){const n=typeof chrome=="object"?chrome.runtime:typeof browser=="object"?browser.runtime:void 0;return typeof n=="object"&&n.id!==void 0}function Bc(){return typeof navigator=="object"&&navigator.product==="ReactNative"}function qd(){const n=J();return n.indexOf("MSIE ")>=0||n.indexOf("Trident/")>=0}function Jy(){return!Eo()&&navigator.userAgent.includes("Safari")&&!navigator.userAgent.includes("Chrome")}function _i(){try{return typeof indexedDB=="object"}catch{return!1}}function Xy(){return new Promise((n,e)=>{try{let t=!0;const r="validate-browser-context-for-indexeddb-analytics-module",i=self.indexedDB.open(r);i.onsuccess=()=>{i.result.close(),t||self.indexedDB.deleteDatabase(r),n(!0)},i.onupgradeneeded=()=>{t=!1},i.onerror=()=>{var s;e(((s=i.error)===null||s===void 0?void 0:s.message)||"")}}catch(t){e(t)}})}/**
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
 */const Zy="FirebaseError";class Ce extends Error{constructor(e,t,r){super(t),this.code=e,this.customData=r,this.name=Zy,Object.setPrototypeOf(this,Ce.prototype),Error.captureStackTrace&&Error.captureStackTrace(this,Gn.prototype.create)}}class Gn{constructor(e,t,r){this.service=e,this.serviceName=t,this.errors=r}create(e,...t){const r=t[0]||{},i=`${this.service}/${e}`,s=this.errors[e],o=s?ev(s,r):"Error",a=`${this.serviceName}: ${o} (${i}).`;return new Ce(i,a,r)}}function ev(n,e){return n.replace(tv,(t,r)=>{const i=e[r];return i!=null?String(i):`<${r}?>`})}const tv=/\{\$([^}]+)}/g;/**
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
 */function Ol(n,e){return Object.prototype.hasOwnProperty.call(n,e)}function nv(n){for(const e in n)if(Object.prototype.hasOwnProperty.call(n,e))return!1;return!0}function Wa(n,e){if(n===e)return!0;const t=Object.keys(n),r=Object.keys(e);for(const i of t){if(!r.includes(i))return!1;const s=n[i],o=e[i];if(Ll(s)&&Ll(o)){if(!Wa(s,o))return!1}else if(s!==o)return!1}for(const i of r)if(!t.includes(i))return!1;return!0}function Ll(n){return n!==null&&typeof n=="object"}/**
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
 */function Nr(n){const e=[];for(const[t,r]of Object.entries(n))Array.isArray(r)?r.forEach(i=>{e.push(encodeURIComponent(t)+"="+encodeURIComponent(i))}):e.push(encodeURIComponent(t)+"="+encodeURIComponent(r));return e.length?"&"+e.join("&"):""}function or(n){const e={};return n.replace(/^\?/,"").split("&").forEach(r=>{if(r){const[i,s]=r.split("=");e[decodeURIComponent(i)]=decodeURIComponent(s)}}),e}function ri(n){const e=n.indexOf("?");if(!e)return"";const t=n.indexOf("#",e);return n.substring(e,t>0?t:void 0)}function $d(n,e){const t=new rv(n,e);return t.subscribe.bind(t)}class rv{constructor(e,t){this.observers=[],this.unsubscribes=[],this.observerCount=0,this.task=Promise.resolve(),this.finalized=!1,this.onNoObservers=t,this.task.then(()=>{e(this)}).catch(r=>{this.error(r)})}next(e){this.forEachObserver(t=>{t.next(e)})}error(e){this.forEachObserver(t=>{t.error(e)}),this.close(e)}complete(){this.forEachObserver(e=>{e.complete()}),this.close()}subscribe(e,t,r){let i;if(e===void 0&&t===void 0&&r===void 0)throw new Error("Missing Observer.");iv(e,["next","error","complete"])?i=e:i={next:e,error:t,complete:r},i.next===void 0&&(i.next=Ia),i.error===void 0&&(i.error=Ia),i.complete===void 0&&(i.complete=Ia);const s=this.unsubscribeOne.bind(this,this.observers.length);return this.finalized&&this.task.then(()=>{try{this.finalError?i.error(this.finalError):i.complete()}catch{}}),this.observers.push(i),s}unsubscribeOne(e){this.observers===void 0||this.observers[e]===void 0||(delete this.observers[e],this.observerCount-=1,this.observerCount===0&&this.onNoObservers!==void 0&&this.onNoObservers(this))}forEachObserver(e){if(!this.finalized)for(let t=0;t<this.observers.length;t++)this.sendOne(t,e)}sendOne(e,t){this.task.then(()=>{if(this.observers!==void 0&&this.observers[e]!==void 0)try{t(this.observers[e])}catch(r){typeof console<"u"&&console.error&&console.error(r)}})}close(e){this.finalized||(this.finalized=!0,e!==void 0&&(this.finalError=e),this.task.then(()=>{this.observers=void 0,this.onNoObservers=void 0}))}}function iv(n,e){if(typeof n!="object"||n===null)return!1;for(const t of e)if(t in n&&typeof n[t]=="function")return!0;return!1}function Ia(){}/**
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
 */function S(n){return n&&n._delegate?n._delegate:n}class Je{constructor(e,t,r){this.name=e,this.instanceFactory=t,this.type=r,this.multipleInstances=!1,this.serviceProps={},this.instantiationMode="LAZY",this.onInstanceCreated=null}setInstantiationMode(e){return this.instantiationMode=e,this}setMultipleInstances(e){return this.multipleInstances=e,this}setServiceProps(e){return this.serviceProps=e,this}setInstanceCreatedCallback(e){return this.onInstanceCreated=e,this}}/**
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
 */const fn="[DEFAULT]";/**
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
 */class sv{constructor(e,t){this.name=e,this.container=t,this.component=null,this.instances=new Map,this.instancesDeferred=new Map,this.instancesOptions=new Map,this.onInitCallbacks=new Map}get(e){const t=this.normalizeInstanceIdentifier(e);if(!this.instancesDeferred.has(t)){const r=new Hy;if(this.instancesDeferred.set(t,r),this.isInitialized(t)||this.shouldAutoInitialize())try{const i=this.getOrInitializeService({instanceIdentifier:t});i&&r.resolve(i)}catch{}}return this.instancesDeferred.get(t).promise}getImmediate(e){var t;const r=this.normalizeInstanceIdentifier(e==null?void 0:e.identifier),i=(t=e==null?void 0:e.optional)!==null&&t!==void 0?t:!1;if(this.isInitialized(r)||this.shouldAutoInitialize())try{return this.getOrInitializeService({instanceIdentifier:r})}catch(s){if(i)return null;throw s}else{if(i)return null;throw Error(`Service ${this.name} is not available`)}}getComponent(){return this.component}setComponent(e){if(e.name!==this.name)throw Error(`Mismatching Component ${e.name} for Provider ${this.name}.`);if(this.component)throw Error(`Component for ${this.name} has already been provided`);if(this.component=e,!!this.shouldAutoInitialize()){if(av(e))try{this.getOrInitializeService({instanceIdentifier:fn})}catch{}for(const[t,r]of this.instancesDeferred.entries()){const i=this.normalizeInstanceIdentifier(t);try{const s=this.getOrInitializeService({instanceIdentifier:i});r.resolve(s)}catch{}}}}clearInstance(e=fn){this.instancesDeferred.delete(e),this.instancesOptions.delete(e),this.instances.delete(e)}async delete(){const e=Array.from(this.instances.values());await Promise.all([...e.filter(t=>"INTERNAL"in t).map(t=>t.INTERNAL.delete()),...e.filter(t=>"_delete"in t).map(t=>t._delete())])}isComponentSet(){return this.component!=null}isInitialized(e=fn){return this.instances.has(e)}getOptions(e=fn){return this.instancesOptions.get(e)||{}}initialize(e={}){const{options:t={}}=e,r=this.normalizeInstanceIdentifier(e.instanceIdentifier);if(this.isInitialized(r))throw Error(`${this.name}(${r}) has already been initialized`);if(!this.isComponentSet())throw Error(`Component ${this.name} has not been registered yet`);const i=this.getOrInitializeService({instanceIdentifier:r,options:t});for(const[s,o]of this.instancesDeferred.entries()){const a=this.normalizeInstanceIdentifier(s);r===a&&o.resolve(i)}return i}onInit(e,t){var r;const i=this.normalizeInstanceIdentifier(t),s=(r=this.onInitCallbacks.get(i))!==null&&r!==void 0?r:new Set;s.add(e),this.onInitCallbacks.set(i,s);const o=this.instances.get(i);return o&&e(o,i),()=>{s.delete(e)}}invokeOnInitCallbacks(e,t){const r=this.onInitCallbacks.get(t);if(!!r)for(const i of r)try{i(e,t)}catch{}}getOrInitializeService({instanceIdentifier:e,options:t={}}){let r=this.instances.get(e);if(!r&&this.component&&(r=this.component.instanceFactory(this.container,{instanceIdentifier:ov(e),options:t}),this.instances.set(e,r),this.instancesOptions.set(e,t),this.invokeOnInitCallbacks(r,e),this.component.onInstanceCreated))try{this.component.onInstanceCreated(this.container,e,r)}catch{}return r||null}normalizeInstanceIdentifier(e=fn){return this.component?this.component.multipleInstances?e:fn:e}shouldAutoInitialize(){return!!this.component&&this.component.instantiationMode!=="EXPLICIT"}}function ov(n){return n===fn?void 0:n}function av(n){return n.instantiationMode==="EAGER"}/**
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
 */class cv{constructor(e){this.name=e,this.providers=new Map}addComponent(e){const t=this.getProvider(e.name);if(t.isComponentSet())throw new Error(`Component ${e.name} has already been registered with ${this.name}`);t.setComponent(e)}addOrOverwriteComponent(e){this.getProvider(e.name).isComponentSet()&&this.providers.delete(e.name),this.addComponent(e)}getProvider(e){if(this.providers.has(e))return this.providers.get(e);const t=new sv(e,this);return this.providers.set(e,t),t}getProviders(){return Array.from(this.providers.values())}}/**
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
 */const qc=[];var U;(function(n){n[n.DEBUG=0]="DEBUG",n[n.VERBOSE=1]="VERBOSE",n[n.INFO=2]="INFO",n[n.WARN=3]="WARN",n[n.ERROR=4]="ERROR",n[n.SILENT=5]="SILENT"})(U||(U={}));const zd={debug:U.DEBUG,verbose:U.VERBOSE,info:U.INFO,warn:U.WARN,error:U.ERROR,silent:U.SILENT},uv=U.INFO,lv={[U.DEBUG]:"log",[U.VERBOSE]:"log",[U.INFO]:"info",[U.WARN]:"warn",[U.ERROR]:"error"},hv=(n,e,...t)=>{if(e<n.logLevel)return;const r=new Date().toISOString(),i=lv[e];if(i)console[i](`[${r}]  ${n.name}:`,...t);else throw new Error(`Attempted to log a message with an invalid logType (value: ${e})`)};class bo{constructor(e){this.name=e,this._logLevel=uv,this._logHandler=hv,this._userLogHandler=null,qc.push(this)}get logLevel(){return this._logLevel}set logLevel(e){if(!(e in U))throw new TypeError(`Invalid value "${e}" assigned to \`logLevel\``);this._logLevel=e}setLogLevel(e){this._logLevel=typeof e=="string"?zd[e]:e}get logHandler(){return this._logHandler}set logHandler(e){if(typeof e!="function")throw new TypeError("Value assigned to `logHandler` must be a function");this._logHandler=e}get userLogHandler(){return this._userLogHandler}set userLogHandler(e){this._userLogHandler=e}debug(...e){this._userLogHandler&&this._userLogHandler(this,U.DEBUG,...e),this._logHandler(this,U.DEBUG,...e)}log(...e){this._userLogHandler&&this._userLogHandler(this,U.VERBOSE,...e),this._logHandler(this,U.VERBOSE,...e)}info(...e){this._userLogHandler&&this._userLogHandler(this,U.INFO,...e),this._logHandler(this,U.INFO,...e)}warn(...e){this._userLogHandler&&this._userLogHandler(this,U.WARN,...e),this._logHandler(this,U.WARN,...e)}error(...e){this._userLogHandler&&this._userLogHandler(this,U.ERROR,...e),this._logHandler(this,U.ERROR,...e)}}function dv(n){qc.forEach(e=>{e.setLogLevel(n)})}function fv(n,e){for(const t of qc){let r=null;e&&e.level&&(r=zd[e.level]),n===null?t.userLogHandler=null:t.userLogHandler=(i,s,...o)=>{const a=o.map(c=>{if(c==null)return null;if(typeof c=="string")return c;if(typeof c=="number"||typeof c=="boolean")return c.toString();if(c instanceof Error)return c.message;try{return JSON.stringify(c)}catch{return null}}).filter(c=>c).join(" ");s>=(r!=null?r:i.logLevel)&&n({level:U[s].toLowerCase(),message:a,args:o,type:i.name})}}}/**
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
 */class pv{constructor(e){this.container=e}getPlatformInfoString(){return this.container.getProviders().map(t=>{if(mv(t)){const r=t.getImmediate();return`${r.library}/${r.version}`}else return null}).filter(t=>t).join(" ")}}function mv(n){const e=n.getComponent();return(e==null?void 0:e.type)==="VERSION"}const Ha="@firebase/app",Ml="0.9.8";/**
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
 */const Dn=new bo("@firebase/app"),gv="@firebase/app-compat",yv="@firebase/analytics-compat",vv="@firebase/analytics",wv="@firebase/app-check-compat",_v="@firebase/app-check",Iv="@firebase/auth",Tv="@firebase/auth-compat",Ev="@firebase/database",bv="@firebase/database-compat",Sv="@firebase/functions",kv="@firebase/functions-compat",Av="@firebase/installations",Rv="@firebase/installations-compat",Cv="@firebase/messaging",Nv="@firebase/messaging-compat",Dv="@firebase/performance",Pv="@firebase/performance-compat",xv="@firebase/remote-config",Ov="@firebase/remote-config-compat",Lv="@firebase/storage",Mv="@firebase/storage-compat",Uv="@firebase/firestore",Fv="@firebase/firestore-compat",Vv="firebase",Bv="9.20.0";/**
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
 */const Gt="[DEFAULT]",qv={[Ha]:"fire-core",[gv]:"fire-core-compat",[vv]:"fire-analytics",[yv]:"fire-analytics-compat",[_v]:"fire-app-check",[wv]:"fire-app-check-compat",[Iv]:"fire-auth",[Tv]:"fire-auth-compat",[Ev]:"fire-rtdb",[bv]:"fire-rtdb-compat",[Sv]:"fire-fn",[kv]:"fire-fn-compat",[Av]:"fire-iid",[Rv]:"fire-iid-compat",[Cv]:"fire-fcm",[Nv]:"fire-fcm-compat",[Dv]:"fire-perf",[Pv]:"fire-perf-compat",[xv]:"fire-rc",[Ov]:"fire-rc-compat",[Lv]:"fire-gcs",[Mv]:"fire-gcs-compat",[Uv]:"fire-fst",[Fv]:"fire-fst-compat","fire-js":"fire-js",[Vv]:"fire-js-all"};/**
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
 */const Kt=new Map,Ii=new Map;function Hs(n,e){try{n.container.addComponent(e)}catch(t){Dn.debug(`Component ${e.name} failed to register with FirebaseApp ${n.name}`,t)}}function jd(n,e){n.container.addOrOverwriteComponent(e)}function bt(n){const e=n.name;if(Ii.has(e))return Dn.debug(`There were multiple attempts to register component ${e}.`),!1;Ii.set(e,n);for(const t of Kt.values())Hs(t,n);return!0}function Gd(n,e){const t=n.container.getProvider("heartbeat").getImmediate({optional:!0});return t&&t.triggerHeartbeat(),n.container.getProvider(e)}function $v(n,e,t=Gt){Gd(n,e).clearInstance(t)}function zv(){Ii.clear()}/**
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
 */const jv={["no-app"]:"No Firebase App '{$appName}' has been created - call Firebase App.initializeApp()",["bad-app-name"]:"Illegal App name: '{$appName}",["duplicate-app"]:"Firebase App named '{$appName}' already exists with different options or config",["app-deleted"]:"Firebase App named '{$appName}' already deleted",["no-options"]:"Need to provide options, when not being deployed to hosting via source.",["invalid-app-argument"]:"firebase.{$appName}() takes either no argument or a Firebase App instance.",["invalid-log-argument"]:"First argument to `onLog` must be null or a function.",["idb-open"]:"Error thrown when opening IndexedDB. Original error: {$originalErrorMessage}.",["idb-get"]:"Error thrown when reading from IndexedDB. Original error: {$originalErrorMessage}.",["idb-set"]:"Error thrown when writing to IndexedDB. Original error: {$originalErrorMessage}.",["idb-delete"]:"Error thrown when deleting from IndexedDB. Original error: {$originalErrorMessage}."},It=new Gn("app","Firebase",jv);/**
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
 */class Gv{constructor(e,t,r){this._isDeleted=!1,this._options=Object.assign({},e),this._config=Object.assign({},t),this._name=t.name,this._automaticDataCollectionEnabled=t.automaticDataCollectionEnabled,this._container=r,this.container.addComponent(new Je("app",()=>this,"PUBLIC"))}get automaticDataCollectionEnabled(){return this.checkDestroyed(),this._automaticDataCollectionEnabled}set automaticDataCollectionEnabled(e){this.checkDestroyed(),this._automaticDataCollectionEnabled=e}get name(){return this.checkDestroyed(),this._name}get options(){return this.checkDestroyed(),this._options}get config(){return this.checkDestroyed(),this._config}get container(){return this._container}get isDeleted(){return this._isDeleted}set isDeleted(e){this._isDeleted=e}checkDestroyed(){if(this.isDeleted)throw It.create("app-deleted",{appName:this._name})}}/**
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
 */const Ct=Bv;function $c(n,e={}){let t=n;typeof e!="object"&&(e={name:e});const r=Object.assign({name:Gt,automaticDataCollectionEnabled:!1},e),i=r.name;if(typeof i!="string"||!i)throw It.create("bad-app-name",{appName:String(i)});if(t||(t=Ky()),!t)throw It.create("no-options");const s=Kt.get(i);if(s){if(Wa(t,s.options)&&Wa(r,s.config))return s;throw It.create("duplicate-app",{appName:i})}const o=new cv(i);for(const c of Ii.values())o.addComponent(c);const a=new Gv(t,r,o);return Kt.set(i,a),a}function Kv(n=Gt){const e=Kt.get(n);if(!e&&n===Gt)return $c();if(!e)throw It.create("no-app",{appName:n});return e}function Wv(){return Array.from(Kt.values())}async function Kd(n){const e=n.name;Kt.has(e)&&(Kt.delete(e),await Promise.all(n.container.getProviders().map(t=>t.delete())),n.isDeleted=!0)}function Ye(n,e,t){var r;let i=(r=qv[n])!==null&&r!==void 0?r:n;t&&(i+=`-${t}`);const s=i.match(/\s|\//),o=e.match(/\s|\//);if(s||o){const a=[`Unable to register library "${i}" with version "${e}":`];s&&a.push(`library name "${i}" contains illegal characters (whitespace or "/")`),s&&o&&a.push("and"),o&&a.push(`version name "${e}" contains illegal characters (whitespace or "/")`),Dn.warn(a.join(" "));return}bt(new Je(`${i}-version`,()=>({library:i,version:e}),"VERSION"))}function Wd(n,e){if(n!==null&&typeof n!="function")throw It.create("invalid-log-argument");fv(n,e)}function Hd(n){dv(n)}/**
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
 */const Hv="firebase-heartbeat-database",Qv=1,Ti="firebase-heartbeat-store";let Ta=null;function Qd(){return Ta||(Ta=Uy(Hv,Qv,{upgrade:(n,e)=>{switch(e){case 0:n.createObjectStore(Ti)}}}).catch(n=>{throw It.create("idb-open",{originalErrorMessage:n.message})})),Ta}async function Yv(n){try{return(await Qd()).transaction(Ti).objectStore(Ti).get(Yd(n))}catch(e){if(e instanceof Ce)Dn.warn(e.message);else{const t=It.create("idb-get",{originalErrorMessage:e==null?void 0:e.message});Dn.warn(t.message)}}}async function Ul(n,e){try{const r=(await Qd()).transaction(Ti,"readwrite");return await r.objectStore(Ti).put(e,Yd(n)),r.done}catch(t){if(t instanceof Ce)Dn.warn(t.message);else{const r=It.create("idb-set",{originalErrorMessage:t==null?void 0:t.message});Dn.warn(r.message)}}}function Yd(n){return`${n.name}!${n.options.appId}`}/**
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
 */const Jv=1024,Xv=30*24*60*60*1e3;class Zv{constructor(e){this.container=e,this._heartbeatsCache=null;const t=this.container.getProvider("app").getImmediate();this._storage=new tw(t),this._heartbeatsCachePromise=this._storage.read().then(r=>(this._heartbeatsCache=r,r))}async triggerHeartbeat(){const t=this.container.getProvider("platform-logger").getImmediate().getPlatformInfoString(),r=Fl();if(this._heartbeatsCache===null&&(this._heartbeatsCache=await this._heartbeatsCachePromise),!(this._heartbeatsCache.lastSentHeartbeatDate===r||this._heartbeatsCache.heartbeats.some(i=>i.date===r)))return this._heartbeatsCache.heartbeats.push({date:r,agent:t}),this._heartbeatsCache.heartbeats=this._heartbeatsCache.heartbeats.filter(i=>{const s=new Date(i.date).valueOf();return Date.now()-s<=Xv}),this._storage.overwrite(this._heartbeatsCache)}async getHeartbeatsHeader(){if(this._heartbeatsCache===null&&await this._heartbeatsCachePromise,this._heartbeatsCache===null||this._heartbeatsCache.heartbeats.length===0)return"";const e=Fl(),{heartbeatsToSend:t,unsentEntries:r}=ew(this._heartbeatsCache.heartbeats),i=Ks(JSON.stringify({version:2,heartbeats:t}));return this._heartbeatsCache.lastSentHeartbeatDate=e,r.length>0?(this._heartbeatsCache.heartbeats=r,await this._storage.overwrite(this._heartbeatsCache)):(this._heartbeatsCache.heartbeats=[],this._storage.overwrite(this._heartbeatsCache)),i}}function Fl(){return new Date().toISOString().substring(0,10)}function ew(n,e=Jv){const t=[];let r=n.slice();for(const i of n){const s=t.find(o=>o.agent===i.agent);if(s){if(s.dates.push(i.date),Vl(t)>e){s.dates.pop();break}}else if(t.push({agent:i.agent,dates:[i.date]}),Vl(t)>e){t.pop();break}r=r.slice(1)}return{heartbeatsToSend:t,unsentEntries:r}}class tw{constructor(e){this.app=e,this._canUseIndexedDBPromise=this.runIndexedDBEnvironmentCheck()}async runIndexedDBEnvironmentCheck(){return _i()?Xy().then(()=>!0).catch(()=>!1):!1}async read(){return await this._canUseIndexedDBPromise?await Yv(this.app)||{heartbeats:[]}:{heartbeats:[]}}async overwrite(e){var t;if(await this._canUseIndexedDBPromise){const i=await this.read();return Ul(this.app,{lastSentHeartbeatDate:(t=e.lastSentHeartbeatDate)!==null&&t!==void 0?t:i.lastSentHeartbeatDate,heartbeats:e.heartbeats})}else return}async add(e){var t;if(await this._canUseIndexedDBPromise){const i=await this.read();return Ul(this.app,{lastSentHeartbeatDate:(t=e.lastSentHeartbeatDate)!==null&&t!==void 0?t:i.lastSentHeartbeatDate,heartbeats:[...i.heartbeats,...e.heartbeats]})}else return}}function Vl(n){return Ks(JSON.stringify({version:2,heartbeats:n})).length}/**
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
 */function nw(n){bt(new Je("platform-logger",e=>new pv(e),"PRIVATE")),bt(new Je("heartbeat",e=>new Zv(e),"PRIVATE")),Ye(Ha,Ml,n),Ye(Ha,Ml,"esm2017"),Ye("fire-js","")}nw("");const rw=Object.freeze(Object.defineProperty({__proto__:null,SDK_VERSION:Ct,_DEFAULT_ENTRY_NAME:Gt,_addComponent:Hs,_addOrOverwriteComponent:jd,_apps:Kt,_clearComponents:zv,_components:Ii,_getProvider:Gd,_registerComponent:bt,_removeServiceInstance:$v,deleteApp:Kd,getApp:Kv,getApps:Wv,initializeApp:$c,onLog:Wd,registerVersion:Ye,setLogLevel:Hd,FirebaseError:Ce},Symbol.toStringTag,{value:"Module"}));/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class iw{constructor(e,t){this._delegate=e,this.firebase=t,Hs(e,new Je("app-compat",()=>this,"PUBLIC")),this.container=e.container}get automaticDataCollectionEnabled(){return this._delegate.automaticDataCollectionEnabled}set automaticDataCollectionEnabled(e){this._delegate.automaticDataCollectionEnabled=e}get name(){return this._delegate.name}get options(){return this._delegate.options}delete(){return new Promise(e=>{this._delegate.checkDestroyed(),e()}).then(()=>(this.firebase.INTERNAL.removeApp(this.name),Kd(this._delegate)))}_getService(e,t=Gt){var r;this._delegate.checkDestroyed();const i=this._delegate.container.getProvider(e);return!i.isInitialized()&&((r=i.getComponent())===null||r===void 0?void 0:r.instantiationMode)==="EXPLICIT"&&i.initialize(),i.getImmediate({identifier:t})}_removeServiceInstance(e,t=Gt){this._delegate.container.getProvider(e).clearInstance(t)}_addComponent(e){Hs(this._delegate,e)}_addOrOverwriteComponent(e){jd(this._delegate,e)}toJSON(){return{name:this.name,automaticDataCollectionEnabled:this.automaticDataCollectionEnabled,options:this.options}}}/**
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
 */const sw={["no-app"]:"No Firebase App '{$appName}' has been created - call Firebase App.initializeApp()",["invalid-app-argument"]:"firebase.{$appName}() takes either no argument or a Firebase App instance."},Bl=new Gn("app-compat","Firebase",sw);/**
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
 */function ow(n){const e={},t={__esModule:!0,initializeApp:s,app:i,registerVersion:Ye,setLogLevel:Hd,onLog:Wd,apps:null,SDK_VERSION:Ct,INTERNAL:{registerComponent:a,removeApp:r,useAsService:c,modularAPIs:rw}};t.default=t,Object.defineProperty(t,"apps",{get:o});function r(u){delete e[u]}function i(u){if(u=u||Gt,!Ol(e,u))throw Bl.create("no-app",{appName:u});return e[u]}i.App=n;function s(u,l={}){const h=$c(u,l);if(Ol(e,h.name))return e[h.name];const d=new n(h,t);return e[h.name]=d,d}function o(){return Object.keys(e).map(u=>e[u])}function a(u){const l=u.name,h=l.replace("-compat","");if(bt(u)&&u.type==="PUBLIC"){const d=(p=i())=>{if(typeof p[h]!="function")throw Bl.create("invalid-app-argument",{appName:l});return p[h]()};u.serviceProps!==void 0&&Ws(d,u.serviceProps),t[h]=d,n.prototype[h]=function(...p){return this._getService.bind(this,l).apply(this,u.multipleInstances?p:[])}}return u.type==="PUBLIC"?t[h]:null}function c(u,l){return l==="serverAuth"?null:l}return t}/**
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
 */function Jd(){const n=ow(iw);n.INTERNAL=Object.assign(Object.assign({},n.INTERNAL),{createFirebaseNamespace:Jd,extendNamespace:e,createSubscribe:$d,ErrorFactory:Gn,deepExtend:Ws});function e(t){Ws(n,t)}return n}const aw=Jd();/**
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
 */const ql=new bo("@firebase/app-compat"),cw="@firebase/app-compat",uw="0.2.8";/**
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
 */function lw(n){Ye(cw,uw,n)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */if(Yy()&&self.firebase!==void 0){ql.warn(`
    Warning: Firebase is already defined in the global scope. Please make sure
    Firebase library is only loaded once.
  `);const n=self.firebase.SDK_VERSION;n&&n.indexOf("LITE")>=0&&ql.warn(`
    Warning: You are trying to load Firebase while using Firebase Performance standalone script.
    You should load Firebase Performance with this instance of Firebase to avoid loading duplicate code.
    `)}const Ki=aw;lw();const Kr={FACEBOOK:"facebook.com",GITHUB:"github.com",GOOGLE:"google.com",PASSWORD:"password",PHONE:"phone",TWITTER:"twitter.com"},Zn={EMAIL_SIGNIN:"EMAIL_SIGNIN",PASSWORD_RESET:"PASSWORD_RESET",RECOVER_EMAIL:"RECOVER_EMAIL",REVERT_SECOND_FACTOR_ADDITION:"REVERT_SECOND_FACTOR_ADDITION",VERIFY_AND_CHANGE_EMAIL:"VERIFY_AND_CHANGE_EMAIL",VERIFY_EMAIL:"VERIFY_EMAIL"};/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function hw(){return{["admin-restricted-operation"]:"This operation is restricted to administrators only.",["argument-error"]:"",["app-not-authorized"]:"This app, identified by the domain where it's hosted, is not authorized to use Firebase Authentication with the provided API key. Review your key configuration in the Google API console.",["app-not-installed"]:"The requested mobile application corresponding to the identifier (Android package name or iOS bundle ID) provided is not installed on this device.",["captcha-check-failed"]:"The reCAPTCHA response token provided is either invalid, expired, already used or the domain associated with it does not match the list of whitelisted domains.",["code-expired"]:"The SMS code has expired. Please re-send the verification code to try again.",["cordova-not-ready"]:"Cordova framework is not ready.",["cors-unsupported"]:"This browser is not supported.",["credential-already-in-use"]:"This credential is already associated with a different user account.",["custom-token-mismatch"]:"The custom token corresponds to a different audience.",["requires-recent-login"]:"This operation is sensitive and requires recent authentication. Log in again before retrying this request.",["dependent-sdk-initialized-before-auth"]:"Another Firebase SDK was initialized and is trying to use Auth before Auth is initialized. Please be sure to call `initializeAuth` or `getAuth` before starting any other Firebase SDK.",["dynamic-link-not-activated"]:"Please activate Dynamic Links in the Firebase Console and agree to the terms and conditions.",["email-change-needs-verification"]:"Multi-factor users must always have a verified email.",["email-already-in-use"]:"The email address is already in use by another account.",["emulator-config-failed"]:'Auth instance has already been used to make a network call. Auth can no longer be configured to use the emulator. Try calling "connectAuthEmulator()" sooner.',["expired-action-code"]:"The action code has expired.",["cancelled-popup-request"]:"This operation has been cancelled due to another conflicting popup being opened.",["internal-error"]:"An internal AuthError has occurred.",["invalid-app-credential"]:"The phone verification request contains an invalid application verifier. The reCAPTCHA token response is either invalid or expired.",["invalid-app-id"]:"The mobile app identifier is not registed for the current project.",["invalid-user-token"]:"This user's credential isn't valid for this project. This can happen if the user's token has been tampered with, or if the user isn't for the project associated with this API key.",["invalid-auth-event"]:"An internal AuthError has occurred.",["invalid-verification-code"]:"The SMS verification code used to create the phone auth credential is invalid. Please resend the verification code sms and be sure to use the verification code provided by the user.",["invalid-continue-uri"]:"The continue URL provided in the request is invalid.",["invalid-cordova-configuration"]:"The following Cordova plugins must be installed to enable OAuth sign-in: cordova-plugin-buildinfo, cordova-universal-links-plugin, cordova-plugin-browsertab, cordova-plugin-inappbrowser and cordova-plugin-customurlscheme.",["invalid-custom-token"]:"The custom token format is incorrect. Please check the documentation.",["invalid-dynamic-link-domain"]:"The provided dynamic link domain is not configured or authorized for the current project.",["invalid-email"]:"The email address is badly formatted.",["invalid-emulator-scheme"]:"Emulator URL must start with a valid scheme (http:// or https://).",["invalid-api-key"]:"Your API key is invalid, please check you have copied it correctly.",["invalid-cert-hash"]:"The SHA-1 certificate hash provided is invalid.",["invalid-credential"]:"The supplied auth credential is malformed or has expired.",["invalid-message-payload"]:"The email template corresponding to this action contains invalid characters in its message. Please fix by going to the Auth email templates section in the Firebase Console.",["invalid-multi-factor-session"]:"The request does not contain a valid proof of first factor successful sign-in.",["invalid-oauth-provider"]:"EmailAuthProvider is not supported for this operation. This operation only supports OAuth providers.",["invalid-oauth-client-id"]:"The OAuth client ID provided is either invalid or does not match the specified API key.",["unauthorized-domain"]:"This domain is not authorized for OAuth operations for your Firebase project. Edit the list of authorized domains from the Firebase console.",["invalid-action-code"]:"The action code is invalid. This can happen if the code is malformed, expired, or has already been used.",["wrong-password"]:"The password is invalid or the user does not have a password.",["invalid-persistence-type"]:"The specified persistence type is invalid. It can only be local, session or none.",["invalid-phone-number"]:"The format of the phone number provided is incorrect. Please enter the phone number in a format that can be parsed into E.164 format. E.164 phone numbers are written in the format [+][country code][subscriber number including area code].",["invalid-provider-id"]:"The specified provider ID is invalid.",["invalid-recipient-email"]:"The email corresponding to this action failed to send as the provided recipient email address is invalid.",["invalid-sender"]:"The email template corresponding to this action contains an invalid sender email or name. Please fix by going to the Auth email templates section in the Firebase Console.",["invalid-verification-id"]:"The verification ID used to create the phone auth credential is invalid.",["invalid-tenant-id"]:"The Auth instance's tenant ID is invalid.",["login-blocked"]:"Login blocked by user-provided method: {$originalMessage}",["missing-android-pkg-name"]:"An Android Package Name must be provided if the Android App is required to be installed.",["auth-domain-config-required"]:"Be sure to include authDomain when calling firebase.initializeApp(), by following the instructions in the Firebase console.",["missing-app-credential"]:"The phone verification request is missing an application verifier assertion. A reCAPTCHA response token needs to be provided.",["missing-verification-code"]:"The phone auth credential was created with an empty SMS verification code.",["missing-continue-uri"]:"A continue URL must be provided in the request.",["missing-iframe-start"]:"An internal AuthError has occurred.",["missing-ios-bundle-id"]:"An iOS Bundle ID must be provided if an App Store ID is provided.",["missing-or-invalid-nonce"]:"The request does not contain a valid nonce. This can occur if the SHA-256 hash of the provided raw nonce does not match the hashed nonce in the ID token payload.",["missing-password"]:"A non-empty password must be provided",["missing-multi-factor-info"]:"No second factor identifier is provided.",["missing-multi-factor-session"]:"The request is missing proof of first factor successful sign-in.",["missing-phone-number"]:"To send verification codes, provide a phone number for the recipient.",["missing-verification-id"]:"The phone auth credential was created with an empty verification ID.",["app-deleted"]:"This instance of FirebaseApp has been deleted.",["multi-factor-info-not-found"]:"The user does not have a second factor matching the identifier provided.",["multi-factor-auth-required"]:"Proof of ownership of a second factor is required to complete sign-in.",["account-exists-with-different-credential"]:"An account already exists with the same email address but different sign-in credentials. Sign in using a provider associated with this email address.",["network-request-failed"]:"A network AuthError (such as timeout, interrupted connection or unreachable host) has occurred.",["no-auth-event"]:"An internal AuthError has occurred.",["no-such-provider"]:"User was not linked to an account with the given provider.",["null-user"]:"A null user object was provided as the argument for an operation which requires a non-null user object.",["operation-not-allowed"]:"The given sign-in provider is disabled for this Firebase project. Enable it in the Firebase console, under the sign-in method tab of the Auth section.",["operation-not-supported-in-this-environment"]:'This operation is not supported in the environment this application is running on. "location.protocol" must be http, https or chrome-extension and web storage must be enabled.',["popup-blocked"]:"Unable to establish a connection with the popup. It may have been blocked by the browser.",["popup-closed-by-user"]:"The popup has been closed by the user before finalizing the operation.",["provider-already-linked"]:"User can only be linked to one identity for the given provider.",["quota-exceeded"]:"The project's quota for this operation has been exceeded.",["redirect-cancelled-by-user"]:"The redirect operation has been cancelled by the user before finalizing.",["redirect-operation-pending"]:"A redirect sign-in operation is already pending.",["rejected-credential"]:"The request contains malformed or mismatching credentials.",["second-factor-already-in-use"]:"The second factor is already enrolled on this account.",["maximum-second-factor-count-exceeded"]:"The maximum allowed number of second factors on a user has been exceeded.",["tenant-id-mismatch"]:"The provided tenant ID does not match the Auth instance's tenant ID",timeout:"The operation has timed out.",["user-token-expired"]:"The user's credential is no longer valid. The user must sign in again.",["too-many-requests"]:"We have blocked all requests from this device due to unusual activity. Try again later.",["unauthorized-continue-uri"]:"The domain of the continue URL is not whitelisted.  Please whitelist the domain in the Firebase console.",["unsupported-first-factor"]:"Enrolling a second factor or signing in with a multi-factor account requires sign-in with a supported first factor.",["unsupported-persistence-type"]:"The current environment does not support the specified persistence type.",["unsupported-tenant-operation"]:"This operation is not supported in a multi-tenant context.",["unverified-email"]:"The operation requires a verified email.",["user-cancelled"]:"The user did not grant your application the permissions it requested.",["user-not-found"]:"There is no user record corresponding to this identifier. The user may have been deleted.",["user-disabled"]:"The user account has been disabled by an administrator.",["user-mismatch"]:"The supplied credentials do not correspond to the previously signed in user.",["user-signed-out"]:"",["weak-password"]:"The password must be 6 characters long or more.",["web-storage-unsupported"]:"This browser is not supported or 3rd party cookies and data may be disabled.",["already-initialized"]:"initializeAuth() has already been called with different options. To avoid this error, call initializeAuth() with the same options as when it was originally called, or call getAuth() to return the already initialized instance.",["missing-recaptcha-token"]:"The reCAPTCHA token is missing when sending request to the backend.",["invalid-recaptcha-token"]:"The reCAPTCHA token is invalid when sending request to the backend.",["invalid-recaptcha-action"]:"The reCAPTCHA action is invalid when sending request to the backend.",["recaptcha-not-enabled"]:"reCAPTCHA Enterprise integration is not enabled for this project.",["missing-client-type"]:"The reCAPTCHA client type is missing when sending request to the backend.",["missing-recaptcha-version"]:"The reCAPTCHA version is missing when sending request to the backend.",["invalid-req-type"]:"Invalid request parameters.",["invalid-recaptcha-version"]:"The reCAPTCHA version is invalid when sending request to the backend."}}function Xd(){return{["dependent-sdk-initialized-before-auth"]:"Another Firebase SDK was initialized and is trying to use Auth before Auth is initialized. Please be sure to call `initializeAuth` or `getAuth` before starting any other Firebase SDK."}}const dw=hw,fw=Xd,Zd=new Gn("auth","Firebase",Xd());/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Qs=new bo("@firebase/auth");function pw(n,...e){Qs.logLevel<=U.WARN&&Qs.warn(`Auth (${Ct}): ${n}`,...e)}function Ls(n,...e){Qs.logLevel<=U.ERROR&&Qs.error(`Auth (${Ct}): ${n}`,...e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Ee(n,...e){throw zc(n,...e)}function Ie(n,...e){return zc(n,...e)}function ef(n,e,t){const r=Object.assign(Object.assign({},fw()),{[e]:t});return new Gn("auth","Firebase",r).create(e,{appName:n.name})}function Dr(n,e,t){const r=t;if(!(e instanceof r))throw r.name!==e.constructor.name&&Ee(n,"argument-error"),ef(n,"argument-error",`Type of ${e.constructor.name} does not match expected instance.Did you pass a reference from a different Auth SDK?`)}function zc(n,...e){if(typeof n!="string"){const t=e[0],r=[...e.slice(1)];return r[0]&&(r[0].appName=n.name),n._errorFactory.create(t,...r)}return Zd.create(n,...e)}function w(n,e,...t){if(!n)throw zc(e,...t)}function ct(n){const e="INTERNAL ASSERTION FAILED: "+n;throw Ls(e),new Error(e)}function tt(n,e){n||ct(e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Ei(){var n;return typeof self<"u"&&((n=self.location)===null||n===void 0?void 0:n.href)||""}function jc(){return $l()==="http:"||$l()==="https:"}function $l(){var n;return typeof self<"u"&&((n=self.location)===null||n===void 0?void 0:n.protocol)||null}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function mw(){return typeof navigator<"u"&&navigator&&"onLine"in navigator&&typeof navigator.onLine=="boolean"&&(jc()||Bd()||"connection"in navigator)?navigator.onLine:!0}function gw(){if(typeof navigator>"u")return null;const n=navigator;return n.languages&&n.languages[0]||n.language||null}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Wi{constructor(e,t){this.shortDelay=e,this.longDelay=t,tt(t>e,"Short delay should be less than long delay!"),this.isMobile=Qy()||Bc()}get(){return mw()?this.isMobile?this.longDelay:this.shortDelay:Math.min(5e3,this.shortDelay)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Gc(n,e){tt(n.emulator,"Emulator should always be set here");const{url:t}=n.emulator;return e?`${t}${e.startsWith("/")?e.slice(1):e}`:t}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class tf{static initialize(e,t,r){this.fetchImpl=e,t&&(this.headersImpl=t),r&&(this.responseImpl=r)}static fetch(){if(this.fetchImpl)return this.fetchImpl;if(typeof self<"u"&&"fetch"in self)return self.fetch;ct("Could not find fetch implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}static headers(){if(this.headersImpl)return this.headersImpl;if(typeof self<"u"&&"Headers"in self)return self.Headers;ct("Could not find Headers implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}static response(){if(this.responseImpl)return this.responseImpl;if(typeof self<"u"&&"Response"in self)return self.Response;ct("Could not find Response implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const yw={CREDENTIAL_MISMATCH:"custom-token-mismatch",MISSING_CUSTOM_TOKEN:"internal-error",INVALID_IDENTIFIER:"invalid-email",MISSING_CONTINUE_URI:"internal-error",INVALID_PASSWORD:"wrong-password",MISSING_PASSWORD:"missing-password",EMAIL_EXISTS:"email-already-in-use",PASSWORD_LOGIN_DISABLED:"operation-not-allowed",INVALID_IDP_RESPONSE:"invalid-credential",INVALID_PENDING_TOKEN:"invalid-credential",FEDERATED_USER_ID_ALREADY_LINKED:"credential-already-in-use",MISSING_REQ_TYPE:"internal-error",EMAIL_NOT_FOUND:"user-not-found",RESET_PASSWORD_EXCEED_LIMIT:"too-many-requests",EXPIRED_OOB_CODE:"expired-action-code",INVALID_OOB_CODE:"invalid-action-code",MISSING_OOB_CODE:"internal-error",CREDENTIAL_TOO_OLD_LOGIN_AGAIN:"requires-recent-login",INVALID_ID_TOKEN:"invalid-user-token",TOKEN_EXPIRED:"user-token-expired",USER_NOT_FOUND:"user-token-expired",TOO_MANY_ATTEMPTS_TRY_LATER:"too-many-requests",INVALID_CODE:"invalid-verification-code",INVALID_SESSION_INFO:"invalid-verification-id",INVALID_TEMPORARY_PROOF:"invalid-credential",MISSING_SESSION_INFO:"missing-verification-id",SESSION_EXPIRED:"code-expired",MISSING_ANDROID_PACKAGE_NAME:"missing-android-pkg-name",UNAUTHORIZED_DOMAIN:"unauthorized-continue-uri",INVALID_OAUTH_CLIENT_ID:"invalid-oauth-client-id",ADMIN_ONLY_OPERATION:"admin-restricted-operation",INVALID_MFA_PENDING_CREDENTIAL:"invalid-multi-factor-session",MFA_ENROLLMENT_NOT_FOUND:"multi-factor-info-not-found",MISSING_MFA_ENROLLMENT_ID:"missing-multi-factor-info",MISSING_MFA_PENDING_CREDENTIAL:"missing-multi-factor-session",SECOND_FACTOR_EXISTS:"second-factor-already-in-use",SECOND_FACTOR_LIMIT_EXCEEDED:"maximum-second-factor-count-exceeded",BLOCKING_FUNCTION_ERROR_RESPONSE:"internal-error",RECAPTCHA_NOT_ENABLED:"recaptcha-not-enabled",MISSING_RECAPTCHA_TOKEN:"missing-recaptcha-token",INVALID_RECAPTCHA_TOKEN:"invalid-recaptcha-token",INVALID_RECAPTCHA_ACTION:"invalid-recaptcha-action",MISSING_CLIENT_TYPE:"missing-client-type",MISSING_RECAPTCHA_VERSION:"missing-recaptcha-version",INVALID_RECAPTCHA_VERSION:"invalid-recaptcha-version",INVALID_REQ_TYPE:"invalid-req-type"};/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const vw=new Wi(3e4,6e4);function le(n,e){return n.tenantId&&!e.tenantId?Object.assign(Object.assign({},e),{tenantId:n.tenantId}):e}async function de(n,e,t,r,i={}){return nf(n,i,async()=>{let s={},o={};r&&(e==="GET"?o=r:s={body:JSON.stringify(r)});const a=Nr(Object.assign({key:n.config.apiKey},o)).slice(1),c=await n._getAdditionalHeaders();return c["Content-Type"]="application/json",n.languageCode&&(c["X-Firebase-Locale"]=n.languageCode),tf.fetch()(rf(n,n.config.apiHost,t,a),Object.assign({method:e,headers:c,referrerPolicy:"no-referrer"},s))})}async function nf(n,e,t){n._canInitEmulator=!1;const r=Object.assign(Object.assign({},yw),e);try{const i=new ww(n),s=await Promise.race([t(),i.promise]);i.clearNetworkTimeout();const o=await s.json();if("needConfirmation"in o)throw ii(n,"account-exists-with-different-credential",o);if(s.ok&&!("errorMessage"in o))return o;{const a=s.ok?o.errorMessage:o.error.message,[c,u]=a.split(" : ");if(c==="FEDERATED_USER_ID_ALREADY_LINKED")throw ii(n,"credential-already-in-use",o);if(c==="EMAIL_EXISTS")throw ii(n,"email-already-in-use",o);if(c==="USER_DISABLED")throw ii(n,"user-disabled",o);const l=r[c]||c.toLowerCase().replace(/[_\s]+/g,"-");if(u)throw ef(n,l,u);Ee(n,l)}}catch(i){if(i instanceof Ce)throw i;Ee(n,"network-request-failed",{message:String(i)})}}async function Nt(n,e,t,r,i={}){const s=await de(n,e,t,r,i);return"mfaPendingCredential"in s&&Ee(n,"multi-factor-auth-required",{_serverResponse:s}),s}function rf(n,e,t,r){const i=`${e}${t}?${r}`;return n.config.emulator?Gc(n.config,i):`${n.config.apiScheme}://${i}`}class ww{constructor(e){this.auth=e,this.timer=null,this.promise=new Promise((t,r)=>{this.timer=setTimeout(()=>r(Ie(this.auth,"network-request-failed")),vw.get())})}clearNetworkTimeout(){clearTimeout(this.timer)}}function ii(n,e,t){const r={appName:n.name};t.email&&(r.email=t.email),t.phoneNumber&&(r.phoneNumber=t.phoneNumber);const i=Ie(n,e,r);return i.customData._tokenResponse=t,i}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function _w(n,e){return de(n,"POST","/v1/accounts:delete",e)}async function Iw(n,e){return de(n,"POST","/v1/accounts:update",e)}async function Tw(n,e){return de(n,"POST","/v1/accounts:lookup",e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function ui(n){if(!!n)try{const e=new Date(Number(n));if(!isNaN(e.getTime()))return e.toUTCString()}catch{}}async function Ew(n,e=!1){const t=S(n),r=await t.getIdToken(e),i=So(r);w(i&&i.exp&&i.auth_time&&i.iat,t.auth,"internal-error");const s=typeof i.firebase=="object"?i.firebase:void 0,o=s==null?void 0:s.sign_in_provider;return{claims:i,token:r,authTime:ui(Ea(i.auth_time)),issuedAtTime:ui(Ea(i.iat)),expirationTime:ui(Ea(i.exp)),signInProvider:o||null,signInSecondFactor:(s==null?void 0:s.sign_in_second_factor)||null}}function Ea(n){return Number(n)*1e3}function So(n){const[e,t,r]=n.split(".");if(e===void 0||t===void 0||r===void 0)return Ls("JWT malformed, contained fewer than 3 sections"),null;try{const i=Fd(t);return i?JSON.parse(i):(Ls("Failed to decode base64 JWT payload"),null)}catch(i){return Ls("Caught error parsing JWT payload as JSON",i==null?void 0:i.toString()),null}}function bw(n){const e=So(n);return w(e,"internal-error"),w(typeof e.exp<"u","internal-error"),w(typeof e.iat<"u","internal-error"),Number(e.exp)-Number(e.iat)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function St(n,e,t=!1){if(t)return e;try{return await e}catch(r){throw r instanceof Ce&&Sw(r)&&n.auth.currentUser===n&&await n.auth.signOut(),r}}function Sw({code:n}){return n==="auth/user-disabled"||n==="auth/user-token-expired"}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class kw{constructor(e){this.user=e,this.isRunning=!1,this.timerId=null,this.errorBackoff=3e4}_start(){this.isRunning||(this.isRunning=!0,this.schedule())}_stop(){!this.isRunning||(this.isRunning=!1,this.timerId!==null&&clearTimeout(this.timerId))}getInterval(e){var t;if(e){const r=this.errorBackoff;return this.errorBackoff=Math.min(this.errorBackoff*2,96e4),r}else{this.errorBackoff=3e4;const i=((t=this.user.stsTokenManager.expirationTime)!==null&&t!==void 0?t:0)-Date.now()-3e5;return Math.max(0,i)}}schedule(e=!1){if(!this.isRunning)return;const t=this.getInterval(e);this.timerId=setTimeout(async()=>{await this.iteration()},t)}async iteration(){try{await this.user.getIdToken(!0)}catch(e){(e==null?void 0:e.code)==="auth/network-request-failed"&&this.schedule(!0);return}this.schedule()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class sf{constructor(e,t){this.createdAt=e,this.lastLoginAt=t,this._initializeTime()}_initializeTime(){this.lastSignInTime=ui(this.lastLoginAt),this.creationTime=ui(this.createdAt)}_copy(e){this.createdAt=e.createdAt,this.lastLoginAt=e.lastLoginAt,this._initializeTime()}toJSON(){return{createdAt:this.createdAt,lastLoginAt:this.lastLoginAt}}}/**
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
 */async function bi(n){var e;const t=n.auth,r=await n.getIdToken(),i=await St(n,Tw(t,{idToken:r}));w(i==null?void 0:i.users.length,t,"internal-error");const s=i.users[0];n._notifyReloadListener(s);const o=!((e=s.providerUserInfo)===null||e===void 0)&&e.length?Cw(s.providerUserInfo):[],a=Rw(n.providerData,o),c=n.isAnonymous,u=!(n.email&&s.passwordHash)&&!(a!=null&&a.length),l=c?u:!1,h={uid:s.localId,displayName:s.displayName||null,photoURL:s.photoUrl||null,email:s.email||null,emailVerified:s.emailVerified||!1,phoneNumber:s.phoneNumber||null,tenantId:s.tenantId||null,providerData:a,metadata:new sf(s.createdAt,s.lastLoginAt),isAnonymous:l};Object.assign(n,h)}async function Aw(n){const e=S(n);await bi(e),await e.auth._persistUserIfCurrent(e),e.auth._notifyListenersIfCurrent(e)}function Rw(n,e){return[...n.filter(r=>!e.some(i=>i.providerId===r.providerId)),...e]}function Cw(n){return n.map(e=>{var{providerId:t}=e,r=Fc(e,["providerId"]);return{providerId:t,uid:r.rawId||"",displayName:r.displayName||null,email:r.email||null,phoneNumber:r.phoneNumber||null,photoURL:r.photoUrl||null}})}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function Nw(n,e){const t=await nf(n,{},async()=>{const r=Nr({grant_type:"refresh_token",refresh_token:e}).slice(1),{tokenApiHost:i,apiKey:s}=n.config,o=rf(n,i,"/v1/token",`key=${s}`),a=await n._getAdditionalHeaders();return a["Content-Type"]="application/x-www-form-urlencoded",tf.fetch()(o,{method:"POST",headers:a,body:r})});return{accessToken:t.access_token,expiresIn:t.expires_in,refreshToken:t.refresh_token}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Si{constructor(){this.refreshToken=null,this.accessToken=null,this.expirationTime=null}get isExpired(){return!this.expirationTime||Date.now()>this.expirationTime-3e4}updateFromServerResponse(e){w(e.idToken,"internal-error"),w(typeof e.idToken<"u","internal-error"),w(typeof e.refreshToken<"u","internal-error");const t="expiresIn"in e&&typeof e.expiresIn<"u"?Number(e.expiresIn):bw(e.idToken);this.updateTokensAndExpiration(e.idToken,e.refreshToken,t)}async getToken(e,t=!1){return w(!this.accessToken||this.refreshToken,e,"user-token-expired"),!t&&this.accessToken&&!this.isExpired?this.accessToken:this.refreshToken?(await this.refresh(e,this.refreshToken),this.accessToken):null}clearRefreshToken(){this.refreshToken=null}async refresh(e,t){const{accessToken:r,refreshToken:i,expiresIn:s}=await Nw(e,t);this.updateTokensAndExpiration(r,i,Number(s))}updateTokensAndExpiration(e,t,r){this.refreshToken=t||null,this.accessToken=e||null,this.expirationTime=Date.now()+r*1e3}static fromJSON(e,t){const{refreshToken:r,accessToken:i,expirationTime:s}=t,o=new Si;return r&&(w(typeof r=="string","internal-error",{appName:e}),o.refreshToken=r),i&&(w(typeof i=="string","internal-error",{appName:e}),o.accessToken=i),s&&(w(typeof s=="number","internal-error",{appName:e}),o.expirationTime=s),o}toJSON(){return{refreshToken:this.refreshToken,accessToken:this.accessToken,expirationTime:this.expirationTime}}_assign(e){this.accessToken=e.accessToken,this.refreshToken=e.refreshToken,this.expirationTime=e.expirationTime}_clone(){return Object.assign(new Si,this.toJSON())}_performRefresh(){return ct("not implemented")}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Mt(n,e){w(typeof n=="string"||typeof n>"u","internal-error",{appName:e})}class Sn{constructor(e){var{uid:t,auth:r,stsTokenManager:i}=e,s=Fc(e,["uid","auth","stsTokenManager"]);this.providerId="firebase",this.proactiveRefresh=new kw(this),this.reloadUserInfo=null,this.reloadListener=null,this.uid=t,this.auth=r,this.stsTokenManager=i,this.accessToken=i.accessToken,this.displayName=s.displayName||null,this.email=s.email||null,this.emailVerified=s.emailVerified||!1,this.phoneNumber=s.phoneNumber||null,this.photoURL=s.photoURL||null,this.isAnonymous=s.isAnonymous||!1,this.tenantId=s.tenantId||null,this.providerData=s.providerData?[...s.providerData]:[],this.metadata=new sf(s.createdAt||void 0,s.lastLoginAt||void 0)}async getIdToken(e){const t=await St(this,this.stsTokenManager.getToken(this.auth,e));return w(t,this.auth,"internal-error"),this.accessToken!==t&&(this.accessToken=t,await this.auth._persistUserIfCurrent(this),this.auth._notifyListenersIfCurrent(this)),t}getIdTokenResult(e){return Ew(this,e)}reload(){return Aw(this)}_assign(e){this!==e&&(w(this.uid===e.uid,this.auth,"internal-error"),this.displayName=e.displayName,this.photoURL=e.photoURL,this.email=e.email,this.emailVerified=e.emailVerified,this.phoneNumber=e.phoneNumber,this.isAnonymous=e.isAnonymous,this.tenantId=e.tenantId,this.providerData=e.providerData.map(t=>Object.assign({},t)),this.metadata._copy(e.metadata),this.stsTokenManager._assign(e.stsTokenManager))}_clone(e){const t=new Sn(Object.assign(Object.assign({},this),{auth:e,stsTokenManager:this.stsTokenManager._clone()}));return t.metadata._copy(this.metadata),t}_onReload(e){w(!this.reloadListener,this.auth,"internal-error"),this.reloadListener=e,this.reloadUserInfo&&(this._notifyReloadListener(this.reloadUserInfo),this.reloadUserInfo=null)}_notifyReloadListener(e){this.reloadListener?this.reloadListener(e):this.reloadUserInfo=e}_startProactiveRefresh(){this.proactiveRefresh._start()}_stopProactiveRefresh(){this.proactiveRefresh._stop()}async _updateTokensIfNecessary(e,t=!1){let r=!1;e.idToken&&e.idToken!==this.stsTokenManager.accessToken&&(this.stsTokenManager.updateFromServerResponse(e),r=!0),t&&await bi(this),await this.auth._persistUserIfCurrent(this),r&&this.auth._notifyListenersIfCurrent(this)}async delete(){const e=await this.getIdToken();return await St(this,_w(this.auth,{idToken:e})),this.stsTokenManager.clearRefreshToken(),this.auth.signOut()}toJSON(){return Object.assign(Object.assign({uid:this.uid,email:this.email||void 0,emailVerified:this.emailVerified,displayName:this.displayName||void 0,isAnonymous:this.isAnonymous,photoURL:this.photoURL||void 0,phoneNumber:this.phoneNumber||void 0,tenantId:this.tenantId||void 0,providerData:this.providerData.map(e=>Object.assign({},e)),stsTokenManager:this.stsTokenManager.toJSON(),_redirectEventId:this._redirectEventId},this.metadata.toJSON()),{apiKey:this.auth.config.apiKey,appName:this.auth.name})}get refreshToken(){return this.stsTokenManager.refreshToken||""}static _fromJSON(e,t){var r,i,s,o,a,c,u,l;const h=(r=t.displayName)!==null&&r!==void 0?r:void 0,d=(i=t.email)!==null&&i!==void 0?i:void 0,p=(s=t.phoneNumber)!==null&&s!==void 0?s:void 0,g=(o=t.photoURL)!==null&&o!==void 0?o:void 0,_=(a=t.tenantId)!==null&&a!==void 0?a:void 0,E=(c=t._redirectEventId)!==null&&c!==void 0?c:void 0,x=(u=t.createdAt)!==null&&u!==void 0?u:void 0,q=(l=t.lastLoginAt)!==null&&l!==void 0?l:void 0,{uid:C,emailVerified:O,isAnonymous:$,providerData:V,stsTokenManager:ae}=t;w(C&&ae,e,"internal-error");const ke=Si.fromJSON(this.name,ae);w(typeof C=="string",e,"internal-error"),Mt(h,e.name),Mt(d,e.name),w(typeof O=="boolean",e,"internal-error"),w(typeof $=="boolean",e,"internal-error"),Mt(p,e.name),Mt(g,e.name),Mt(_,e.name),Mt(E,e.name),Mt(x,e.name),Mt(q,e.name);const hn=new Sn({uid:C,auth:e,email:d,emailVerified:O,displayName:h,isAnonymous:$,photoURL:g,phoneNumber:p,tenantId:_,stsTokenManager:ke,createdAt:x,lastLoginAt:q});return V&&Array.isArray(V)&&(hn.providerData=V.map(My=>Object.assign({},My))),E&&(hn._redirectEventId=E),hn}static async _fromIdTokenResponse(e,t,r=!1){const i=new Si;i.updateFromServerResponse(t);const s=new Sn({uid:t.localId,auth:e,stsTokenManager:i,isAnonymous:r});return await bi(s),s}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const zl=new Map;function Ge(n){tt(n instanceof Function,"Expected a class definition");let e=zl.get(n);return e?(tt(e instanceof n,"Instance stored in cache mismatched with class"),e):(e=new n,zl.set(n,e),e)}/**
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
 */class of{constructor(){this.type="NONE",this.storage={}}async _isAvailable(){return!0}async _set(e,t){this.storage[e]=t}async _get(e){const t=this.storage[e];return t===void 0?null:t}async _remove(e){delete this.storage[e]}_addListener(e,t){}_removeListener(e,t){}}of.type="NONE";const mr=of;/**
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
 */function kn(n,e,t){return`firebase:${n}:${e}:${t}`}class cr{constructor(e,t,r){this.persistence=e,this.auth=t,this.userKey=r;const{config:i,name:s}=this.auth;this.fullUserKey=kn(this.userKey,i.apiKey,s),this.fullPersistenceKey=kn("persistence",i.apiKey,s),this.boundEventHandler=t._onStorageEvent.bind(t),this.persistence._addListener(this.fullUserKey,this.boundEventHandler)}setCurrentUser(e){return this.persistence._set(this.fullUserKey,e.toJSON())}async getCurrentUser(){const e=await this.persistence._get(this.fullUserKey);return e?Sn._fromJSON(this.auth,e):null}removeCurrentUser(){return this.persistence._remove(this.fullUserKey)}savePersistenceForRedirect(){return this.persistence._set(this.fullPersistenceKey,this.persistence.type)}async setPersistence(e){if(this.persistence===e)return;const t=await this.getCurrentUser();if(await this.removeCurrentUser(),this.persistence=e,t)return this.setCurrentUser(t)}delete(){this.persistence._removeListener(this.fullUserKey,this.boundEventHandler)}static async create(e,t,r="authUser"){if(!t.length)return new cr(Ge(mr),e,r);const i=(await Promise.all(t.map(async u=>{if(await u._isAvailable())return u}))).filter(u=>u);let s=i[0]||Ge(mr);const o=kn(r,e.config.apiKey,e.name);let a=null;for(const u of t)try{const l=await u._get(o);if(l){const h=Sn._fromJSON(e,l);u!==s&&(a=h),s=u;break}}catch{}const c=i.filter(u=>u._shouldAllowMigration);return!s._shouldAllowMigration||!c.length?new cr(s,e,r):(s=c[0],a&&await s._set(o,a.toJSON()),await Promise.all(t.map(async u=>{if(u!==s)try{await u._remove(o)}catch{}})),new cr(s,e,r))}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function jl(n){const e=n.toLowerCase();if(e.includes("opera/")||e.includes("opr/")||e.includes("opios/"))return"Opera";if(uf(e))return"IEMobile";if(e.includes("msie")||e.includes("trident/"))return"IE";if(e.includes("edge/"))return"Edge";if(af(e))return"Firefox";if(e.includes("silk/"))return"Silk";if(lf(e))return"Blackberry";if(hf(e))return"Webos";if(Kc(e))return"Safari";if((e.includes("chrome/")||cf(e))&&!e.includes("edge/"))return"Chrome";if(Hi(e))return"Android";{const t=/([a-zA-Z\d\.]+)\/[a-zA-Z\d\.]*$/,r=n.match(t);if((r==null?void 0:r.length)===2)return r[1]}return"Other"}function af(n=J()){return/firefox\//i.test(n)}function Kc(n=J()){const e=n.toLowerCase();return e.includes("safari/")&&!e.includes("chrome/")&&!e.includes("crios/")&&!e.includes("android")}function cf(n=J()){return/crios\//i.test(n)}function uf(n=J()){return/iemobile/i.test(n)}function Hi(n=J()){return/android/i.test(n)}function lf(n=J()){return/blackberry/i.test(n)}function hf(n=J()){return/webos/i.test(n)}function Pr(n=J()){return/iphone|ipad|ipod/i.test(n)||/macintosh/i.test(n)&&/mobile/i.test(n)}function Dw(n=J()){return/(iPad|iPhone|iPod).*OS 7_\d/i.test(n)||/(iPad|iPhone|iPod).*OS 8_\d/i.test(n)}function Pw(n=J()){var e;return Pr(n)&&!!(!((e=window.navigator)===null||e===void 0)&&e.standalone)}function xw(){return qd()&&document.documentMode===10}function df(n=J()){return Pr(n)||Hi(n)||hf(n)||lf(n)||/windows phone/i.test(n)||uf(n)}function Ow(){try{return!!(window&&window!==window.top)}catch{return!1}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function ff(n,e=[]){let t;switch(n){case"Browser":t=jl(J());break;case"Worker":t=`${jl(J())}-${n}`;break;default:t=n}const r=e.length?e.join(","):"FirebaseCore-web";return`${t}/JsCore/${Ct}/${r}`}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function Lw(n){return(await de(n,"GET","/v1/recaptchaParams")).recaptchaSiteKey||""}async function pf(n,e){return de(n,"GET","/v2/recaptchaConfig",le(n,e))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Gl(n){return n!==void 0&&n.getResponse!==void 0}function Kl(n){return n!==void 0&&n.enterprise!==void 0}class mf{constructor(e){if(this.siteKey="",this.emailPasswordEnabled=!1,e.recaptchaKey===void 0)throw new Error("recaptchaKey undefined");this.siteKey=e.recaptchaKey.split("/")[3],this.emailPasswordEnabled=e.recaptchaEnforcementState.some(t=>t.provider==="EMAIL_PASSWORD_PROVIDER"&&t.enforcementState!=="OFF")}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Mw(){var n,e;return(e=(n=document.getElementsByTagName("head"))===null||n===void 0?void 0:n[0])!==null&&e!==void 0?e:document}function Wc(n){return new Promise((e,t)=>{const r=document.createElement("script");r.setAttribute("src",n),r.onload=e,r.onerror=i=>{const s=Ie("internal-error");s.customData=i,t(s)},r.type="text/javascript",r.charset="UTF-8",Mw().appendChild(r)})}function gf(n){return`__${n}${Math.floor(Math.random()*1e6)}`}const Uw="https://www.google.com/recaptcha/enterprise.js?render=",Fw="recaptcha-enterprise";class yf{constructor(e){this.type=Fw,this.auth=oe(e)}async verify(e="verify",t=!1){async function r(s){if(!t){if(s.tenantId==null&&s._agentRecaptchaConfig!=null)return s._agentRecaptchaConfig.siteKey;if(s.tenantId!=null&&s._tenantRecaptchaConfigs[s.tenantId]!==void 0)return s._tenantRecaptchaConfigs[s.tenantId].siteKey}return new Promise(async(o,a)=>{pf(s,{clientType:"CLIENT_TYPE_WEB",version:"RECAPTCHA_ENTERPRISE"}).then(c=>{if(c.recaptchaKey===void 0)a(new Error("recaptcha Enterprise site key undefined"));else{const u=new mf(c);return s.tenantId==null?s._agentRecaptchaConfig=u:s._tenantRecaptchaConfigs[s.tenantId]=u,o(u.siteKey)}}).catch(c=>{a(c)})})}function i(s,o,a){const c=window.grecaptcha;Kl(c)?c.enterprise.ready(()=>{try{c.enterprise.execute(s,{action:e}).then(u=>{o(u)}).catch(u=>{a(u)})}catch(u){a(u)}}):a(Error("No reCAPTCHA enterprise script loaded."))}return new Promise((s,o)=>{r(this.auth).then(a=>{if(!t&&Kl(window.grecaptcha))i(a,s,o);else{if(typeof window>"u"){o(new Error("RecaptchaVerifier is only supported in browser"));return}Wc(Uw+a).then(()=>{i(a,s,o)}).catch(c=>{o(c)})}}).catch(a=>{o(a)})})}}async function Wt(n,e,t,r=!1){const i=new yf(n);let s;try{s=await i.verify(t)}catch{s=await i.verify(t,!0)}const o=Object.assign({},e);return r?Object.assign(o,{captchaResp:s}):Object.assign(o,{captchaResponse:s}),Object.assign(o,{clientType:"CLIENT_TYPE_WEB"}),Object.assign(o,{recaptchaVersion:"RECAPTCHA_ENTERPRISE"}),o}/**
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
 */class Vw{constructor(e){this.auth=e,this.queue=[]}pushCallback(e,t){const r=s=>new Promise((o,a)=>{try{const c=e(s);o(c)}catch(c){a(c)}});r.onAbort=t,this.queue.push(r);const i=this.queue.length-1;return()=>{this.queue[i]=()=>Promise.resolve()}}async runMiddleware(e){if(this.auth.currentUser===e)return;const t=[];try{for(const r of this.queue)await r(e),r.onAbort&&t.push(r.onAbort)}catch(r){t.reverse();for(const i of t)try{i()}catch{}throw this.auth._errorFactory.create("login-blocked",{originalMessage:r==null?void 0:r.message})}}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Bw{constructor(e,t,r,i){this.app=e,this.heartbeatServiceProvider=t,this.appCheckServiceProvider=r,this.config=i,this.currentUser=null,this.emulatorConfig=null,this.operations=Promise.resolve(),this.authStateSubscription=new Wl(this),this.idTokenSubscription=new Wl(this),this.beforeStateQueue=new Vw(this),this.redirectUser=null,this.isProactiveRefreshEnabled=!1,this._canInitEmulator=!0,this._isInitialized=!1,this._deleted=!1,this._initializationPromise=null,this._popupRedirectResolver=null,this._errorFactory=Zd,this._agentRecaptchaConfig=null,this._tenantRecaptchaConfigs={},this.lastNotifiedUid=void 0,this.languageCode=null,this.tenantId=null,this.settings={appVerificationDisabledForTesting:!1},this.frameworks=[],this.name=e.name,this.clientVersion=i.sdkClientVersion}_initializeWithPersistence(e,t){return t&&(this._popupRedirectResolver=Ge(t)),this._initializationPromise=this.queue(async()=>{var r,i;if(!this._deleted&&(this.persistenceManager=await cr.create(this,e),!this._deleted)){if(!((r=this._popupRedirectResolver)===null||r===void 0)&&r._shouldInitProactively)try{await this._popupRedirectResolver._initialize(this)}catch{}await this.initializeCurrentUser(t),this.lastNotifiedUid=((i=this.currentUser)===null||i===void 0?void 0:i.uid)||null,!this._deleted&&(this._isInitialized=!0)}}),this._initializationPromise}async _onStorageEvent(){if(this._deleted)return;const e=await this.assertedPersistence.getCurrentUser();if(!(!this.currentUser&&!e)){if(this.currentUser&&e&&this.currentUser.uid===e.uid){this._currentUser._assign(e),await this.currentUser.getIdToken();return}await this._updateCurrentUser(e,!0)}}async initializeCurrentUser(e){var t;const r=await this.assertedPersistence.getCurrentUser();let i=r,s=!1;if(e&&this.config.authDomain){await this.getOrInitRedirectPersistenceManager();const o=(t=this.redirectUser)===null||t===void 0?void 0:t._redirectEventId,a=i==null?void 0:i._redirectEventId,c=await this.tryRedirectSignIn(e);(!o||o===a)&&(c==null?void 0:c.user)&&(i=c.user,s=!0)}if(!i)return this.directlySetCurrentUser(null);if(!i._redirectEventId){if(s)try{await this.beforeStateQueue.runMiddleware(i)}catch(o){i=r,this._popupRedirectResolver._overrideRedirectResult(this,()=>Promise.reject(o))}return i?this.reloadAndSetCurrentUserOrClear(i):this.directlySetCurrentUser(null)}return w(this._popupRedirectResolver,this,"argument-error"),await this.getOrInitRedirectPersistenceManager(),this.redirectUser&&this.redirectUser._redirectEventId===i._redirectEventId?this.directlySetCurrentUser(i):this.reloadAndSetCurrentUserOrClear(i)}async tryRedirectSignIn(e){let t=null;try{t=await this._popupRedirectResolver._completeRedirectFn(this,e,!0)}catch{await this._setRedirectUser(null)}return t}async reloadAndSetCurrentUserOrClear(e){try{await bi(e)}catch(t){if((t==null?void 0:t.code)!=="auth/network-request-failed")return this.directlySetCurrentUser(null)}return this.directlySetCurrentUser(e)}useDeviceLanguage(){this.languageCode=gw()}async _delete(){this._deleted=!0}async updateCurrentUser(e){const t=e?S(e):null;return t&&w(t.auth.config.apiKey===this.config.apiKey,this,"invalid-user-token"),this._updateCurrentUser(t&&t._clone(this))}async _updateCurrentUser(e,t=!1){if(!this._deleted)return e&&w(this.tenantId===e.tenantId,this,"tenant-id-mismatch"),t||await this.beforeStateQueue.runMiddleware(e),this.queue(async()=>{await this.directlySetCurrentUser(e),this.notifyAuthListeners()})}async signOut(){return await this.beforeStateQueue.runMiddleware(null),(this.redirectPersistenceManager||this._popupRedirectResolver)&&await this._setRedirectUser(null),this._updateCurrentUser(null,!0)}setPersistence(e){return this.queue(async()=>{await this.assertedPersistence.setPersistence(Ge(e))})}async initializeRecaptchaConfig(){const e=await pf(this,{clientType:"CLIENT_TYPE_WEB",version:"RECAPTCHA_ENTERPRISE"}),t=new mf(e);this.tenantId==null?this._agentRecaptchaConfig=t:this._tenantRecaptchaConfigs[this.tenantId]=t,t.emailPasswordEnabled&&new yf(this).verify()}_getRecaptchaConfig(){return this.tenantId==null?this._agentRecaptchaConfig:this._tenantRecaptchaConfigs[this.tenantId]}_getPersistence(){return this.assertedPersistence.persistence.type}_updateErrorMap(e){this._errorFactory=new Gn("auth","Firebase",e())}onAuthStateChanged(e,t,r){return this.registerStateListener(this.authStateSubscription,e,t,r)}beforeAuthStateChanged(e,t){return this.beforeStateQueue.pushCallback(e,t)}onIdTokenChanged(e,t,r){return this.registerStateListener(this.idTokenSubscription,e,t,r)}toJSON(){var e;return{apiKey:this.config.apiKey,authDomain:this.config.authDomain,appName:this.name,currentUser:(e=this._currentUser)===null||e===void 0?void 0:e.toJSON()}}async _setRedirectUser(e,t){const r=await this.getOrInitRedirectPersistenceManager(t);return e===null?r.removeCurrentUser():r.setCurrentUser(e)}async getOrInitRedirectPersistenceManager(e){if(!this.redirectPersistenceManager){const t=e&&Ge(e)||this._popupRedirectResolver;w(t,this,"argument-error"),this.redirectPersistenceManager=await cr.create(this,[Ge(t._redirectPersistence)],"redirectUser"),this.redirectUser=await this.redirectPersistenceManager.getCurrentUser()}return this.redirectPersistenceManager}async _redirectUserForId(e){var t,r;return this._isInitialized&&await this.queue(async()=>{}),((t=this._currentUser)===null||t===void 0?void 0:t._redirectEventId)===e?this._currentUser:((r=this.redirectUser)===null||r===void 0?void 0:r._redirectEventId)===e?this.redirectUser:null}async _persistUserIfCurrent(e){if(e===this.currentUser)return this.queue(async()=>this.directlySetCurrentUser(e))}_notifyListenersIfCurrent(e){e===this.currentUser&&this.notifyAuthListeners()}_key(){return`${this.config.authDomain}:${this.config.apiKey}:${this.name}`}_startProactiveRefresh(){this.isProactiveRefreshEnabled=!0,this.currentUser&&this._currentUser._startProactiveRefresh()}_stopProactiveRefresh(){this.isProactiveRefreshEnabled=!1,this.currentUser&&this._currentUser._stopProactiveRefresh()}get _currentUser(){return this.currentUser}notifyAuthListeners(){var e,t;if(!this._isInitialized)return;this.idTokenSubscription.next(this.currentUser);const r=(t=(e=this.currentUser)===null||e===void 0?void 0:e.uid)!==null&&t!==void 0?t:null;this.lastNotifiedUid!==r&&(this.lastNotifiedUid=r,this.authStateSubscription.next(this.currentUser))}registerStateListener(e,t,r,i){if(this._deleted)return()=>{};const s=typeof t=="function"?t:t.next.bind(t),o=this._isInitialized?Promise.resolve():this._initializationPromise;return w(o,this,"internal-error"),o.then(()=>s(this.currentUser)),typeof t=="function"?e.addObserver(t,r,i):e.addObserver(t)}async directlySetCurrentUser(e){this.currentUser&&this.currentUser!==e&&this._currentUser._stopProactiveRefresh(),e&&this.isProactiveRefreshEnabled&&e._startProactiveRefresh(),this.currentUser=e,e?await this.assertedPersistence.setCurrentUser(e):await this.assertedPersistence.removeCurrentUser()}queue(e){return this.operations=this.operations.then(e,e),this.operations}get assertedPersistence(){return w(this.persistenceManager,this,"internal-error"),this.persistenceManager}_logFramework(e){!e||this.frameworks.includes(e)||(this.frameworks.push(e),this.frameworks.sort(),this.clientVersion=ff(this.config.clientPlatform,this._getFrameworks()))}_getFrameworks(){return this.frameworks}async _getAdditionalHeaders(){var e;const t={["X-Client-Version"]:this.clientVersion};this.app.options.appId&&(t["X-Firebase-gmpid"]=this.app.options.appId);const r=await((e=this.heartbeatServiceProvider.getImmediate({optional:!0}))===null||e===void 0?void 0:e.getHeartbeatsHeader());r&&(t["X-Firebase-Client"]=r);const i=await this._getAppCheckToken();return i&&(t["X-Firebase-AppCheck"]=i),t}async _getAppCheckToken(){var e;const t=await((e=this.appCheckServiceProvider.getImmediate({optional:!0}))===null||e===void 0?void 0:e.getToken());return t!=null&&t.error&&pw(`Error while retrieving App Check token: ${t.error}`),t==null?void 0:t.token}}function oe(n){return S(n)}class Wl{constructor(e){this.auth=e,this.observer=null,this.addObserver=$d(t=>this.observer=t)}get next(){return w(this.observer,this.auth,"internal-error"),this.observer.next.bind(this.observer)}}function qw(n,e){const t=(e==null?void 0:e.persistence)||[],r=(Array.isArray(t)?t:[t]).map(Ge);e!=null&&e.errorMap&&n._updateErrorMap(e.errorMap),n._initializeWithPersistence(r,e==null?void 0:e.popupRedirectResolver)}function $w(n,e,t){const r=oe(n);w(r._canInitEmulator,r,"emulator-config-failed"),w(/^https?:\/\//.test(e),r,"invalid-emulator-scheme");const i=!!(t!=null&&t.disableWarnings),s=vf(e),{host:o,port:a}=zw(e),c=a===null?"":`:${a}`;r.config.emulator={url:`${s}//${o}${c}/`},r.settings.appVerificationDisabledForTesting=!0,r.emulatorConfig=Object.freeze({host:o,port:a,protocol:s.replace(":",""),options:Object.freeze({disableWarnings:i})}),i||jw()}function vf(n){const e=n.indexOf(":");return e<0?"":n.substr(0,e+1)}function zw(n){const e=vf(n),t=/(\/\/)?([^?#/]+)/.exec(n.substr(e.length));if(!t)return{host:"",port:null};const r=t[2].split("@").pop()||"",i=/^(\[[^\]]+\])(:|$)/.exec(r);if(i){const s=i[1];return{host:s,port:Hl(r.substr(s.length+1))}}else{const[s,o]=r.split(":");return{host:s,port:Hl(o)}}}function Hl(n){if(!n)return null;const e=Number(n);return isNaN(e)?null:e}function jw(){function n(){const e=document.createElement("p"),t=e.style;e.innerText="Running in emulator mode. Do not use with production credentials.",t.position="fixed",t.width="100%",t.backgroundColor="#ffffff",t.border=".1em solid #000000",t.color="#b50000",t.bottom="0px",t.left="0px",t.margin="0px",t.zIndex="10000",t.textAlign="center",e.classList.add("firebase-emulator-warning"),document.body.appendChild(e)}typeof console<"u"&&typeof console.info=="function"&&console.info("WARNING: You are using the Auth Emulator, which is intended for local testing only.  Do not use with production credentials."),typeof window<"u"&&typeof document<"u"&&(document.readyState==="loading"?window.addEventListener("DOMContentLoaded",n):n())}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class xr{constructor(e,t){this.providerId=e,this.signInMethod=t}toJSON(){return ct("not implemented")}_getIdTokenResponse(e){return ct("not implemented")}_linkToIdToken(e,t){return ct("not implemented")}_getReauthenticationResolver(e){return ct("not implemented")}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function wf(n,e){return de(n,"POST","/v1/accounts:resetPassword",le(n,e))}async function _f(n,e){return de(n,"POST","/v1/accounts:update",e)}async function Gw(n,e){return de(n,"POST","/v1/accounts:update",le(n,e))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function ba(n,e){return Nt(n,"POST","/v1/accounts:signInWithPassword",le(n,e))}async function ko(n,e){return de(n,"POST","/v1/accounts:sendOobCode",le(n,e))}async function Kw(n,e){return ko(n,e)}async function Sa(n,e){return ko(n,e)}async function ka(n,e){return ko(n,e)}async function Ww(n,e){return ko(n,e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function Hw(n,e){return Nt(n,"POST","/v1/accounts:signInWithEmailLink",le(n,e))}async function Qw(n,e){return Nt(n,"POST","/v1/accounts:signInWithEmailLink",le(n,e))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ki extends xr{constructor(e,t,r,i=null){super("password",r),this._email=e,this._password=t,this._tenantId=i}static _fromEmailAndPassword(e,t){return new ki(e,t,"password")}static _fromEmailAndCode(e,t,r=null){return new ki(e,t,"emailLink",r)}toJSON(){return{email:this._email,password:this._password,signInMethod:this.signInMethod,tenantId:this._tenantId}}static fromJSON(e){const t=typeof e=="string"?JSON.parse(e):e;if((t==null?void 0:t.email)&&(t==null?void 0:t.password)){if(t.signInMethod==="password")return this._fromEmailAndPassword(t.email,t.password);if(t.signInMethod==="emailLink")return this._fromEmailAndCode(t.email,t.password,t.tenantId)}return null}async _getIdTokenResponse(e){var t;switch(this.signInMethod){case"password":const r={returnSecureToken:!0,email:this._email,password:this._password,clientType:"CLIENT_TYPE_WEB"};if(!((t=e._getRecaptchaConfig())===null||t===void 0)&&t.emailPasswordEnabled){const i=await Wt(e,r,"signInWithPassword");return ba(e,i)}else return ba(e,r).catch(async i=>{if(i.code==="auth/missing-recaptcha-token"){console.log("Sign-in with email address and password is protected by reCAPTCHA for this project. Automatically triggering the reCAPTCHA flow and restarting the sign-in flow.");const s=await Wt(e,r,"signInWithPassword");return ba(e,s)}else return Promise.reject(i)});case"emailLink":return Hw(e,{email:this._email,oobCode:this._password});default:Ee(e,"internal-error")}}async _linkToIdToken(e,t){switch(this.signInMethod){case"password":return _f(e,{idToken:t,returnSecureToken:!0,email:this._email,password:this._password});case"emailLink":return Qw(e,{idToken:t,email:this._email,oobCode:this._password});default:Ee(e,"internal-error")}}_getReauthenticationResolver(e){return this._getIdTokenResponse(e)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function Tt(n,e){return Nt(n,"POST","/v1/accounts:signInWithIdp",le(n,e))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Yw="http://localhost";class pt extends xr{constructor(){super(...arguments),this.pendingToken=null}static _fromParams(e){const t=new pt(e.providerId,e.signInMethod);return e.idToken||e.accessToken?(e.idToken&&(t.idToken=e.idToken),e.accessToken&&(t.accessToken=e.accessToken),e.nonce&&!e.pendingToken&&(t.nonce=e.nonce),e.pendingToken&&(t.pendingToken=e.pendingToken)):e.oauthToken&&e.oauthTokenSecret?(t.accessToken=e.oauthToken,t.secret=e.oauthTokenSecret):Ee("argument-error"),t}toJSON(){return{idToken:this.idToken,accessToken:this.accessToken,secret:this.secret,nonce:this.nonce,pendingToken:this.pendingToken,providerId:this.providerId,signInMethod:this.signInMethod}}static fromJSON(e){const t=typeof e=="string"?JSON.parse(e):e,{providerId:r,signInMethod:i}=t,s=Fc(t,["providerId","signInMethod"]);if(!r||!i)return null;const o=new pt(r,i);return o.idToken=s.idToken||void 0,o.accessToken=s.accessToken||void 0,o.secret=s.secret,o.nonce=s.nonce,o.pendingToken=s.pendingToken||null,o}_getIdTokenResponse(e){const t=this.buildRequest();return Tt(e,t)}_linkToIdToken(e,t){const r=this.buildRequest();return r.idToken=t,Tt(e,r)}_getReauthenticationResolver(e){const t=this.buildRequest();return t.autoCreate=!1,Tt(e,t)}buildRequest(){const e={requestUri:Yw,returnSecureToken:!0};if(this.pendingToken)e.pendingToken=this.pendingToken;else{const t={};this.idToken&&(t.id_token=this.idToken),this.accessToken&&(t.access_token=this.accessToken),this.secret&&(t.oauth_token_secret=this.secret),t.providerId=this.providerId,this.nonce&&!this.pendingToken&&(t.nonce=this.nonce),e.postBody=Nr(t)}return e}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function Jw(n,e){return de(n,"POST","/v1/accounts:sendVerificationCode",le(n,e))}async function Xw(n,e){return Nt(n,"POST","/v1/accounts:signInWithPhoneNumber",le(n,e))}async function Zw(n,e){const t=await Nt(n,"POST","/v1/accounts:signInWithPhoneNumber",le(n,e));if(t.temporaryProof)throw ii(n,"account-exists-with-different-credential",t);return t}const e_={USER_NOT_FOUND:"user-not-found"};async function t_(n,e){const t=Object.assign(Object.assign({},e),{operation:"REAUTH"});return Nt(n,"POST","/v1/accounts:signInWithPhoneNumber",le(n,t),e_)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class An extends xr{constructor(e){super("phone","phone"),this.params=e}static _fromVerification(e,t){return new An({verificationId:e,verificationCode:t})}static _fromTokenResponse(e,t){return new An({phoneNumber:e,temporaryProof:t})}_getIdTokenResponse(e){return Xw(e,this._makeVerificationRequest())}_linkToIdToken(e,t){return Zw(e,Object.assign({idToken:t},this._makeVerificationRequest()))}_getReauthenticationResolver(e){return t_(e,this._makeVerificationRequest())}_makeVerificationRequest(){const{temporaryProof:e,phoneNumber:t,verificationId:r,verificationCode:i}=this.params;return e&&t?{temporaryProof:e,phoneNumber:t}:{sessionInfo:r,code:i}}toJSON(){const e={providerId:this.providerId};return this.params.phoneNumber&&(e.phoneNumber=this.params.phoneNumber),this.params.temporaryProof&&(e.temporaryProof=this.params.temporaryProof),this.params.verificationCode&&(e.verificationCode=this.params.verificationCode),this.params.verificationId&&(e.verificationId=this.params.verificationId),e}static fromJSON(e){typeof e=="string"&&(e=JSON.parse(e));const{verificationId:t,verificationCode:r,phoneNumber:i,temporaryProof:s}=e;return!r&&!t&&!i&&!s?null:new An({verificationId:t,verificationCode:r,phoneNumber:i,temporaryProof:s})}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function n_(n){switch(n){case"recoverEmail":return"RECOVER_EMAIL";case"resetPassword":return"PASSWORD_RESET";case"signIn":return"EMAIL_SIGNIN";case"verifyEmail":return"VERIFY_EMAIL";case"verifyAndChangeEmail":return"VERIFY_AND_CHANGE_EMAIL";case"revertSecondFactorAddition":return"REVERT_SECOND_FACTOR_ADDITION";default:return null}}function r_(n){const e=or(ri(n)).link,t=e?or(ri(e)).deep_link_id:null,r=or(ri(n)).deep_link_id;return(r?or(ri(r)).link:null)||r||t||e||n}class Ao{constructor(e){var t,r,i,s,o,a;const c=or(ri(e)),u=(t=c.apiKey)!==null&&t!==void 0?t:null,l=(r=c.oobCode)!==null&&r!==void 0?r:null,h=n_((i=c.mode)!==null&&i!==void 0?i:null);w(u&&l&&h,"argument-error"),this.apiKey=u,this.operation=h,this.code=l,this.continueUrl=(s=c.continueUrl)!==null&&s!==void 0?s:null,this.languageCode=(o=c.languageCode)!==null&&o!==void 0?o:null,this.tenantId=(a=c.tenantId)!==null&&a!==void 0?a:null}static parseLink(e){const t=r_(e);try{return new Ao(t)}catch{return null}}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class nn{constructor(){this.providerId=nn.PROVIDER_ID}static credential(e,t){return ki._fromEmailAndPassword(e,t)}static credentialWithLink(e,t){const r=Ao.parseLink(t);return w(r,"argument-error"),ki._fromEmailAndCode(e,r.code,r.tenantId)}}nn.PROVIDER_ID="password";nn.EMAIL_PASSWORD_SIGN_IN_METHOD="password";nn.EMAIL_LINK_SIGN_IN_METHOD="emailLink";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Dt{constructor(e){this.providerId=e,this.defaultLanguageCode=null,this.customParameters={}}setDefaultLanguage(e){this.defaultLanguageCode=e}setCustomParameters(e){return this.customParameters=e,this}getCustomParameters(){return this.customParameters}}/**
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
 */class Or extends Dt{constructor(){super(...arguments),this.scopes=[]}addScope(e){return this.scopes.includes(e)||this.scopes.push(e),this}getScopes(){return[...this.scopes]}}class ur extends Or{static credentialFromJSON(e){const t=typeof e=="string"?JSON.parse(e):e;return w("providerId"in t&&"signInMethod"in t,"argument-error"),pt._fromParams(t)}credential(e){return this._credential(Object.assign(Object.assign({},e),{nonce:e.rawNonce}))}_credential(e){return w(e.idToken||e.accessToken,"argument-error"),pt._fromParams(Object.assign(Object.assign({},e),{providerId:this.providerId,signInMethod:this.providerId}))}static credentialFromResult(e){return ur.oauthCredentialFromTaggedObject(e)}static credentialFromError(e){return ur.oauthCredentialFromTaggedObject(e.customData||{})}static oauthCredentialFromTaggedObject({_tokenResponse:e}){if(!e)return null;const{oauthIdToken:t,oauthAccessToken:r,oauthTokenSecret:i,pendingToken:s,nonce:o,providerId:a}=e;if(!r&&!i&&!t&&!s||!a)return null;try{return new ur(a)._credential({idToken:t,accessToken:r,nonce:o,pendingToken:s})}catch{return null}}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class nt extends Or{constructor(){super("facebook.com")}static credential(e){return pt._fromParams({providerId:nt.PROVIDER_ID,signInMethod:nt.FACEBOOK_SIGN_IN_METHOD,accessToken:e})}static credentialFromResult(e){return nt.credentialFromTaggedObject(e)}static credentialFromError(e){return nt.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e||!("oauthAccessToken"in e)||!e.oauthAccessToken)return null;try{return nt.credential(e.oauthAccessToken)}catch{return null}}}nt.FACEBOOK_SIGN_IN_METHOD="facebook.com";nt.PROVIDER_ID="facebook.com";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class rt extends Or{constructor(){super("google.com"),this.addScope("profile")}static credential(e,t){return pt._fromParams({providerId:rt.PROVIDER_ID,signInMethod:rt.GOOGLE_SIGN_IN_METHOD,idToken:e,accessToken:t})}static credentialFromResult(e){return rt.credentialFromTaggedObject(e)}static credentialFromError(e){return rt.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e)return null;const{oauthIdToken:t,oauthAccessToken:r}=e;if(!t&&!r)return null;try{return rt.credential(t,r)}catch{return null}}}rt.GOOGLE_SIGN_IN_METHOD="google.com";rt.PROVIDER_ID="google.com";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class it extends Or{constructor(){super("github.com")}static credential(e){return pt._fromParams({providerId:it.PROVIDER_ID,signInMethod:it.GITHUB_SIGN_IN_METHOD,accessToken:e})}static credentialFromResult(e){return it.credentialFromTaggedObject(e)}static credentialFromError(e){return it.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e||!("oauthAccessToken"in e)||!e.oauthAccessToken)return null;try{return it.credential(e.oauthAccessToken)}catch{return null}}}it.GITHUB_SIGN_IN_METHOD="github.com";it.PROVIDER_ID="github.com";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const i_="http://localhost";class gr extends xr{constructor(e,t){super(e,e),this.pendingToken=t}_getIdTokenResponse(e){const t=this.buildRequest();return Tt(e,t)}_linkToIdToken(e,t){const r=this.buildRequest();return r.idToken=t,Tt(e,r)}_getReauthenticationResolver(e){const t=this.buildRequest();return t.autoCreate=!1,Tt(e,t)}toJSON(){return{signInMethod:this.signInMethod,providerId:this.providerId,pendingToken:this.pendingToken}}static fromJSON(e){const t=typeof e=="string"?JSON.parse(e):e,{providerId:r,signInMethod:i,pendingToken:s}=t;return!r||!i||!s||r!==i?null:new gr(r,s)}static _create(e,t){return new gr(e,t)}buildRequest(){return{requestUri:i_,returnSecureToken:!0,pendingToken:this.pendingToken}}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const s_="saml.";class Ys extends Dt{constructor(e){w(e.startsWith(s_),"argument-error"),super(e)}static credentialFromResult(e){return Ys.samlCredentialFromTaggedObject(e)}static credentialFromError(e){return Ys.samlCredentialFromTaggedObject(e.customData||{})}static credentialFromJSON(e){const t=gr.fromJSON(e);return w(t,"argument-error"),t}static samlCredentialFromTaggedObject({_tokenResponse:e}){if(!e)return null;const{pendingToken:t,providerId:r}=e;if(!t||!r)return null;try{return gr._create(r,t)}catch{return null}}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class st extends Or{constructor(){super("twitter.com")}static credential(e,t){return pt._fromParams({providerId:st.PROVIDER_ID,signInMethod:st.TWITTER_SIGN_IN_METHOD,oauthToken:e,oauthTokenSecret:t})}static credentialFromResult(e){return st.credentialFromTaggedObject(e)}static credentialFromError(e){return st.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e)return null;const{oauthAccessToken:t,oauthTokenSecret:r}=e;if(!t||!r)return null;try{return st.credential(t,r)}catch{return null}}}st.TWITTER_SIGN_IN_METHOD="twitter.com";st.PROVIDER_ID="twitter.com";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function Ms(n,e){return Nt(n,"POST","/v1/accounts:signUp",le(n,e))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Xe{constructor(e){this.user=e.user,this.providerId=e.providerId,this._tokenResponse=e._tokenResponse,this.operationType=e.operationType}static async _fromIdTokenResponse(e,t,r,i=!1){const s=await Sn._fromIdTokenResponse(e,r,i),o=Ql(r);return new Xe({user:s,providerId:o,_tokenResponse:r,operationType:t})}static async _forOperation(e,t,r){await e._updateTokensIfNecessary(r,!0);const i=Ql(r);return new Xe({user:e,providerId:i,_tokenResponse:r,operationType:t})}}function Ql(n){return n.providerId?n.providerId:"phoneNumber"in n?"phone":null}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function o_(n){var e;const t=oe(n);if(await t._initializationPromise,!((e=t.currentUser)===null||e===void 0)&&e.isAnonymous)return new Xe({user:t.currentUser,providerId:null,operationType:"signIn"});const r=await Ms(t,{returnSecureToken:!0}),i=await Xe._fromIdTokenResponse(t,"signIn",r,!0);return await t._updateCurrentUser(i.user),i}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Js extends Ce{constructor(e,t,r,i){var s;super(t.code,t.message),this.operationType=r,this.user=i,Object.setPrototypeOf(this,Js.prototype),this.customData={appName:e.name,tenantId:(s=e.tenantId)!==null&&s!==void 0?s:void 0,_serverResponse:t.customData._serverResponse,operationType:r}}static _fromErrorAndOperation(e,t,r,i){return new Js(e,t,r,i)}}function If(n,e,t,r){return(e==="reauthenticate"?t._getReauthenticationResolver(n):t._getIdTokenResponse(n)).catch(s=>{throw s.code==="auth/multi-factor-auth-required"?Js._fromErrorAndOperation(n,s,e,r):s})}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Tf(n){return new Set(n.map(({providerId:e})=>e).filter(e=>!!e))}/**
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
 */async function a_(n,e){const t=S(n);await Ro(!0,t,e);const{providerUserInfo:r}=await Iw(t.auth,{idToken:await t.getIdToken(),deleteProvider:[e]}),i=Tf(r||[]);return t.providerData=t.providerData.filter(s=>i.has(s.providerId)),i.has("phone")||(t.phoneNumber=null),await t.auth._persistUserIfCurrent(t),t}async function Hc(n,e,t=!1){const r=await St(n,e._linkToIdToken(n.auth,await n.getIdToken()),t);return Xe._forOperation(n,"link",r)}async function Ro(n,e,t){await bi(e);const r=Tf(e.providerData),i=n===!1?"provider-already-linked":"no-such-provider";w(r.has(t)===n,e.auth,i)}/**
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
 */async function Ef(n,e,t=!1){const{auth:r}=n,i="reauthenticate";try{const s=await St(n,If(r,i,e,n),t);w(s.idToken,r,"internal-error");const o=So(s.idToken);w(o,r,"internal-error");const{sub:a}=o;return w(n.uid===a,r,"user-mismatch"),Xe._forOperation(n,i,s)}catch(s){throw(s==null?void 0:s.code)==="auth/user-not-found"&&Ee(r,"user-mismatch"),s}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function bf(n,e,t=!1){const r="signIn",i=await If(n,r,e),s=await Xe._fromIdTokenResponse(n,r,i);return t||await n._updateCurrentUser(s.user),s}async function Co(n,e){return bf(oe(n),e)}async function Sf(n,e){const t=S(n);return await Ro(!1,t,e.providerId),Hc(t,e)}async function kf(n,e){return Ef(S(n),e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function c_(n,e){return Nt(n,"POST","/v1/accounts:signInWithCustomToken",le(n,e))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function u_(n,e){const t=oe(n),r=await c_(t,{token:e,returnSecureToken:!0}),i=await Xe._fromIdTokenResponse(t,"signIn",r);return await t._updateCurrentUser(i.user),i}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Qi{constructor(e,t){this.factorId=e,this.uid=t.mfaEnrollmentId,this.enrollmentTime=new Date(t.enrolledAt).toUTCString(),this.displayName=t.displayName}static _fromServerResponse(e,t){return"phoneInfo"in t?Qc._fromServerResponse(e,t):"totpInfo"in t?Yc._fromServerResponse(e,t):Ee(e,"internal-error")}}class Qc extends Qi{constructor(e){super("phone",e),this.phoneNumber=e.phoneInfo}static _fromServerResponse(e,t){return new Qc(t)}}class Yc extends Qi{constructor(e){super("totp",e)}static _fromServerResponse(e,t){return new Yc(t)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function lr(n,e,t){var r;w(((r=t.url)===null||r===void 0?void 0:r.length)>0,n,"invalid-continue-uri"),w(typeof t.dynamicLinkDomain>"u"||t.dynamicLinkDomain.length>0,n,"invalid-dynamic-link-domain"),e.continueUrl=t.url,e.dynamicLinkDomain=t.dynamicLinkDomain,e.canHandleCodeInApp=t.handleCodeInApp,t.iOS&&(w(t.iOS.bundleId.length>0,n,"missing-ios-bundle-id"),e.iOSBundleId=t.iOS.bundleId),t.android&&(w(t.android.packageName.length>0,n,"missing-android-pkg-name"),e.androidInstallApp=t.android.installApp,e.androidMinimumVersionCode=t.android.minimumVersion,e.androidPackageName=t.android.packageName)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function l_(n,e,t){var r;const i=oe(n),s={requestType:"PASSWORD_RESET",email:e,clientType:"CLIENT_TYPE_WEB"};if(!((r=i._getRecaptchaConfig())===null||r===void 0)&&r.emailPasswordEnabled){const o=await Wt(i,s,"getOobCode",!0);t&&lr(i,o,t),await Sa(i,o)}else t&&lr(i,s,t),await Sa(i,s).catch(async o=>{if(o.code==="auth/missing-recaptcha-token"){console.log("Password resets are protected by reCAPTCHA for this project. Automatically triggering the reCAPTCHA flow and restarting the password reset flow.");const a=await Wt(i,s,"getOobCode",!0);t&&lr(i,a,t),await Sa(i,a)}else return Promise.reject(o)})}async function h_(n,e,t){await wf(S(n),{oobCode:e,newPassword:t})}async function d_(n,e){await Gw(S(n),{oobCode:e})}async function Af(n,e){const t=S(n),r=await wf(t,{oobCode:e}),i=r.requestType;switch(w(i,t,"internal-error"),i){case"EMAIL_SIGNIN":break;case"VERIFY_AND_CHANGE_EMAIL":w(r.newEmail,t,"internal-error");break;case"REVERT_SECOND_FACTOR_ADDITION":w(r.mfaInfo,t,"internal-error");default:w(r.email,t,"internal-error")}let s=null;return r.mfaInfo&&(s=Qi._fromServerResponse(oe(t),r.mfaInfo)),{data:{email:(r.requestType==="VERIFY_AND_CHANGE_EMAIL"?r.newEmail:r.email)||null,previousEmail:(r.requestType==="VERIFY_AND_CHANGE_EMAIL"?r.email:r.newEmail)||null,multiFactorInfo:s},operation:i}}async function f_(n,e){const{data:t}=await Af(S(n),e);return t.email}async function p_(n,e,t){var r;const i=oe(n),s={returnSecureToken:!0,email:e,password:t,clientType:"CLIENT_TYPE_WEB"};let o;if(!((r=i._getRecaptchaConfig())===null||r===void 0)&&r.emailPasswordEnabled){const u=await Wt(i,s,"signUpPassword");o=Ms(i,u)}else o=Ms(i,s).catch(async u=>{if(u.code==="auth/missing-recaptcha-token"){console.log("Sign-up is protected by reCAPTCHA for this project. Automatically triggering the reCAPTCHA flow and restarting the sign-up flow.");const l=await Wt(i,s,"signUpPassword");return Ms(i,l)}else return Promise.reject(u)});const a=await o.catch(u=>Promise.reject(u)),c=await Xe._fromIdTokenResponse(i,"signIn",a);return await i._updateCurrentUser(c.user),c}function m_(n,e,t){return Co(S(n),nn.credential(e,t))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function g_(n,e,t){var r;const i=oe(n),s={requestType:"EMAIL_SIGNIN",email:e,clientType:"CLIENT_TYPE_WEB"};function o(a,c){w(c.handleCodeInApp,i,"argument-error"),c&&lr(i,a,c)}if(!((r=i._getRecaptchaConfig())===null||r===void 0)&&r.emailPasswordEnabled){const a=await Wt(i,s,"getOobCode",!0);o(a,t),await ka(i,a)}else o(s,t),await ka(i,s).catch(async a=>{if(a.code==="auth/missing-recaptcha-token"){console.log("Email link sign-in is protected by reCAPTCHA for this project. Automatically triggering the reCAPTCHA flow and restarting the sign-in flow.");const c=await Wt(i,s,"getOobCode",!0);o(c,t),await ka(i,c)}else return Promise.reject(a)})}function y_(n,e){const t=Ao.parseLink(e);return(t==null?void 0:t.operation)==="EMAIL_SIGNIN"}async function v_(n,e,t){const r=S(n),i=nn.credentialWithLink(e,t||Ei());return w(i._tenantId===(r.tenantId||null),r,"tenant-id-mismatch"),Co(r,i)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function w_(n,e){return de(n,"POST","/v1/accounts:createAuthUri",le(n,e))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function __(n,e){const t=jc()?Ei():"http://localhost",r={identifier:e,continueUri:t},{signinMethods:i}=await w_(S(n),r);return i||[]}async function I_(n,e){const t=S(n),i={requestType:"VERIFY_EMAIL",idToken:await n.getIdToken()};e&&lr(t.auth,i,e);const{email:s}=await Kw(t.auth,i);s!==n.email&&await n.reload()}async function T_(n,e,t){const r=S(n),s={requestType:"VERIFY_AND_CHANGE_EMAIL",idToken:await n.getIdToken(),newEmail:e};t&&lr(r.auth,s,t);const{email:o}=await Ww(r.auth,s);o!==n.email&&await n.reload()}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function E_(n,e){return de(n,"POST","/v1/accounts:update",e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function b_(n,{displayName:e,photoURL:t}){if(e===void 0&&t===void 0)return;const r=S(n),s={idToken:await r.getIdToken(),displayName:e,photoUrl:t,returnSecureToken:!0},o=await St(r,E_(r.auth,s));r.displayName=o.displayName||null,r.photoURL=o.photoUrl||null;const a=r.providerData.find(({providerId:c})=>c==="password");a&&(a.displayName=r.displayName,a.photoURL=r.photoURL),await r._updateTokensIfNecessary(o)}function S_(n,e){return Rf(S(n),e,null)}function k_(n,e){return Rf(S(n),null,e)}async function Rf(n,e,t){const{auth:r}=n,s={idToken:await n.getIdToken(),returnSecureToken:!0};e&&(s.email=e),t&&(s.password=t);const o=await St(n,_f(r,s));await n._updateTokensIfNecessary(o,!0)}/**
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
 */function A_(n){var e,t;if(!n)return null;const{providerId:r}=n,i=n.rawUserInfo?JSON.parse(n.rawUserInfo):{},s=n.isNewUser||n.kind==="identitytoolkit#SignupNewUserResponse";if(!r&&(n==null?void 0:n.idToken)){const o=(t=(e=So(n.idToken))===null||e===void 0?void 0:e.firebase)===null||t===void 0?void 0:t.sign_in_provider;if(o){const a=o!=="anonymous"&&o!=="custom"?o:null;return new hr(s,a)}}if(!r)return null;switch(r){case"facebook.com":return new R_(s,i);case"github.com":return new C_(s,i);case"google.com":return new N_(s,i);case"twitter.com":return new D_(s,i,n.screenName||null);case"custom":case"anonymous":return new hr(s,null);default:return new hr(s,r,i)}}class hr{constructor(e,t,r={}){this.isNewUser=e,this.providerId=t,this.profile=r}}class Cf extends hr{constructor(e,t,r,i){super(e,t,r),this.username=i}}class R_ extends hr{constructor(e,t){super(e,"facebook.com",t)}}class C_ extends Cf{constructor(e,t){super(e,"github.com",t,typeof(t==null?void 0:t.login)=="string"?t==null?void 0:t.login:null)}}class N_ extends hr{constructor(e,t){super(e,"google.com",t)}}class D_ extends Cf{constructor(e,t,r){super(e,"twitter.com",t,r)}}function P_(n){const{user:e,_tokenResponse:t}=n;return e.isAnonymous&&!t?{providerId:null,isNewUser:!1,profile:null}:A_(t)}class _n{constructor(e,t,r){this.type=e,this.credential=t,this.auth=r}static _fromIdtoken(e,t){return new _n("enroll",e,t)}static _fromMfaPendingCredential(e){return new _n("signin",e)}toJSON(){return{multiFactorSession:{[this.type==="enroll"?"idToken":"pendingCredential"]:this.credential}}}static fromJSON(e){var t,r;if(e!=null&&e.multiFactorSession){if(!((t=e.multiFactorSession)===null||t===void 0)&&t.pendingCredential)return _n._fromMfaPendingCredential(e.multiFactorSession.pendingCredential);if(!((r=e.multiFactorSession)===null||r===void 0)&&r.idToken)return _n._fromIdtoken(e.multiFactorSession.idToken)}return null}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Jc{constructor(e,t,r){this.session=e,this.hints=t,this.signInResolver=r}static _fromError(e,t){const r=oe(e),i=t.customData._serverResponse,s=(i.mfaInfo||[]).map(a=>Qi._fromServerResponse(r,a));w(i.mfaPendingCredential,r,"internal-error");const o=_n._fromMfaPendingCredential(i.mfaPendingCredential);return new Jc(o,s,async a=>{const c=await a._process(r,o);delete i.mfaInfo,delete i.mfaPendingCredential;const u=Object.assign(Object.assign({},i),{idToken:c.idToken,refreshToken:c.refreshToken});switch(t.operationType){case"signIn":const l=await Xe._fromIdTokenResponse(r,t.operationType,u);return await r._updateCurrentUser(l.user),l;case"reauthenticate":return w(t.user,r,"internal-error"),Xe._forOperation(t.user,t.operationType,u);default:Ee(r,"internal-error")}})}async resolveSignIn(e){const t=e;return this.signInResolver(t)}}function x_(n,e){var t;const r=S(n),i=e;return w(e.customData.operationType,r,"argument-error"),w((t=i.customData._serverResponse)===null||t===void 0?void 0:t.mfaPendingCredential,r,"argument-error"),Jc._fromError(r,i)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function O_(n,e){return de(n,"POST","/v2/accounts/mfaEnrollment:start",le(n,e))}function L_(n,e){return de(n,"POST","/v2/accounts/mfaEnrollment:finalize",le(n,e))}function M_(n,e){return de(n,"POST","/v2/accounts/mfaEnrollment:withdraw",le(n,e))}class Xc{constructor(e){this.user=e,this.enrolledFactors=[],e._onReload(t=>{t.mfaInfo&&(this.enrolledFactors=t.mfaInfo.map(r=>Qi._fromServerResponse(e.auth,r)))})}static _fromUser(e){return new Xc(e)}async getSession(){return _n._fromIdtoken(await this.user.getIdToken(),this.user.auth)}async enroll(e,t){const r=e,i=await this.getSession(),s=await St(this.user,r._process(this.user.auth,i,t));return await this.user._updateTokensIfNecessary(s),this.user.reload()}async unenroll(e){const t=typeof e=="string"?e:e.uid,r=await this.user.getIdToken();try{const i=await St(this.user,M_(this.user.auth,{idToken:r,mfaEnrollmentId:t}));this.enrolledFactors=this.enrolledFactors.filter(({uid:s})=>s!==t),await this.user._updateTokensIfNecessary(i),await this.user.reload()}catch(i){throw i}}}const Aa=new WeakMap;function U_(n){const e=S(n);return Aa.has(e)||Aa.set(e,Xc._fromUser(e)),Aa.get(e)}const Xs="__sak";/**
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
 */class Nf{constructor(e,t){this.storageRetriever=e,this.type=t}_isAvailable(){try{return this.storage?(this.storage.setItem(Xs,"1"),this.storage.removeItem(Xs),Promise.resolve(!0)):Promise.resolve(!1)}catch{return Promise.resolve(!1)}}_set(e,t){return this.storage.setItem(e,JSON.stringify(t)),Promise.resolve()}_get(e){const t=this.storage.getItem(e);return Promise.resolve(t?JSON.parse(t):null)}_remove(e){return this.storage.removeItem(e),Promise.resolve()}get storage(){return this.storageRetriever()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function F_(){const n=J();return Kc(n)||Pr(n)}const V_=1e3,B_=10;class Df extends Nf{constructor(){super(()=>window.localStorage,"LOCAL"),this.boundEventHandler=(e,t)=>this.onStorageEvent(e,t),this.listeners={},this.localCache={},this.pollTimer=null,this.safariLocalStorageNotSynced=F_()&&Ow(),this.fallbackToPolling=df(),this._shouldAllowMigration=!0}forAllChangedKeys(e){for(const t of Object.keys(this.listeners)){const r=this.storage.getItem(t),i=this.localCache[t];r!==i&&e(t,i,r)}}onStorageEvent(e,t=!1){if(!e.key){this.forAllChangedKeys((o,a,c)=>{this.notifyListeners(o,c)});return}const r=e.key;if(t?this.detachListener():this.stopPolling(),this.safariLocalStorageNotSynced){const o=this.storage.getItem(r);if(e.newValue!==o)e.newValue!==null?this.storage.setItem(r,e.newValue):this.storage.removeItem(r);else if(this.localCache[r]===e.newValue&&!t)return}const i=()=>{const o=this.storage.getItem(r);!t&&this.localCache[r]===o||this.notifyListeners(r,o)},s=this.storage.getItem(r);xw()&&s!==e.newValue&&e.newValue!==e.oldValue?setTimeout(i,B_):i()}notifyListeners(e,t){this.localCache[e]=t;const r=this.listeners[e];if(r)for(const i of Array.from(r))i(t&&JSON.parse(t))}startPolling(){this.stopPolling(),this.pollTimer=setInterval(()=>{this.forAllChangedKeys((e,t,r)=>{this.onStorageEvent(new StorageEvent("storage",{key:e,oldValue:t,newValue:r}),!0)})},V_)}stopPolling(){this.pollTimer&&(clearInterval(this.pollTimer),this.pollTimer=null)}attachListener(){window.addEventListener("storage",this.boundEventHandler)}detachListener(){window.removeEventListener("storage",this.boundEventHandler)}_addListener(e,t){Object.keys(this.listeners).length===0&&(this.fallbackToPolling?this.startPolling():this.attachListener()),this.listeners[e]||(this.listeners[e]=new Set,this.localCache[e]=this.storage.getItem(e)),this.listeners[e].add(t)}_removeListener(e,t){this.listeners[e]&&(this.listeners[e].delete(t),this.listeners[e].size===0&&delete this.listeners[e]),Object.keys(this.listeners).length===0&&(this.detachListener(),this.stopPolling())}async _set(e,t){await super._set(e,t),this.localCache[e]=JSON.stringify(t)}async _get(e){const t=await super._get(e);return this.localCache[e]=JSON.stringify(t),t}async _remove(e){await super._remove(e),delete this.localCache[e]}}Df.type="LOCAL";const Zc=Df;/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Pf extends Nf{constructor(){super(()=>window.sessionStorage,"SESSION")}_addListener(e,t){}_removeListener(e,t){}}Pf.type="SESSION";const Pn=Pf;/**
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
 */function q_(n){return Promise.all(n.map(async e=>{try{return{fulfilled:!0,value:await e}}catch(t){return{fulfilled:!1,reason:t}}}))}/**
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
 */class No{constructor(e){this.eventTarget=e,this.handlersMap={},this.boundEventHandler=this.handleEvent.bind(this)}static _getInstance(e){const t=this.receivers.find(i=>i.isListeningto(e));if(t)return t;const r=new No(e);return this.receivers.push(r),r}isListeningto(e){return this.eventTarget===e}async handleEvent(e){const t=e,{eventId:r,eventType:i,data:s}=t.data,o=this.handlersMap[i];if(!(o!=null&&o.size))return;t.ports[0].postMessage({status:"ack",eventId:r,eventType:i});const a=Array.from(o).map(async u=>u(t.origin,s)),c=await q_(a);t.ports[0].postMessage({status:"done",eventId:r,eventType:i,response:c})}_subscribe(e,t){Object.keys(this.handlersMap).length===0&&this.eventTarget.addEventListener("message",this.boundEventHandler),this.handlersMap[e]||(this.handlersMap[e]=new Set),this.handlersMap[e].add(t)}_unsubscribe(e,t){this.handlersMap[e]&&t&&this.handlersMap[e].delete(t),(!t||this.handlersMap[e].size===0)&&delete this.handlersMap[e],Object.keys(this.handlersMap).length===0&&this.eventTarget.removeEventListener("message",this.boundEventHandler)}}No.receivers=[];/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Yi(n="",e=10){let t="";for(let r=0;r<e;r++)t+=Math.floor(Math.random()*10);return n+t}/**
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
 */class $_{constructor(e){this.target=e,this.handlers=new Set}removeMessageHandler(e){e.messageChannel&&(e.messageChannel.port1.removeEventListener("message",e.onMessage),e.messageChannel.port1.close()),this.handlers.delete(e)}async _send(e,t,r=50){const i=typeof MessageChannel<"u"?new MessageChannel:null;if(!i)throw new Error("connection_unavailable");let s,o;return new Promise((a,c)=>{const u=Yi("",20);i.port1.start();const l=setTimeout(()=>{c(new Error("unsupported_event"))},r);o={messageChannel:i,onMessage(h){const d=h;if(d.data.eventId===u)switch(d.data.status){case"ack":clearTimeout(l),s=setTimeout(()=>{c(new Error("timeout"))},3e3);break;case"done":clearTimeout(s),a(d.data.response);break;default:clearTimeout(l),clearTimeout(s),c(new Error("invalid_response"));break}}},this.handlers.add(o),i.port1.addEventListener("message",o.onMessage),this.target.postMessage({eventType:e,eventId:u,data:t},[i.port2])}).finally(()=>{o&&this.removeMessageHandler(o)})}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function ue(){return window}function z_(n){ue().location.href=n}/**
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
 */function eu(){return typeof ue().WorkerGlobalScope<"u"&&typeof ue().importScripts=="function"}async function j_(){if(!(navigator!=null&&navigator.serviceWorker))return null;try{return(await navigator.serviceWorker.ready).active}catch{return null}}function G_(){var n;return((n=navigator==null?void 0:navigator.serviceWorker)===null||n===void 0?void 0:n.controller)||null}function K_(){return eu()?self:null}/**
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
 */const xf="firebaseLocalStorageDb",W_=1,Zs="firebaseLocalStorage",Of="fbase_key";class Ji{constructor(e){this.request=e}toPromise(){return new Promise((e,t)=>{this.request.addEventListener("success",()=>{e(this.request.result)}),this.request.addEventListener("error",()=>{t(this.request.error)})})}}function Do(n,e){return n.transaction([Zs],e?"readwrite":"readonly").objectStore(Zs)}function H_(){const n=indexedDB.deleteDatabase(xf);return new Ji(n).toPromise()}function Qa(){const n=indexedDB.open(xf,W_);return new Promise((e,t)=>{n.addEventListener("error",()=>{t(n.error)}),n.addEventListener("upgradeneeded",()=>{const r=n.result;try{r.createObjectStore(Zs,{keyPath:Of})}catch(i){t(i)}}),n.addEventListener("success",async()=>{const r=n.result;r.objectStoreNames.contains(Zs)?e(r):(r.close(),await H_(),e(await Qa()))})})}async function Yl(n,e,t){const r=Do(n,!0).put({[Of]:e,value:t});return new Ji(r).toPromise()}async function Q_(n,e){const t=Do(n,!1).get(e),r=await new Ji(t).toPromise();return r===void 0?null:r.value}function Jl(n,e){const t=Do(n,!0).delete(e);return new Ji(t).toPromise()}const Y_=800,J_=3;class Lf{constructor(){this.type="LOCAL",this._shouldAllowMigration=!0,this.listeners={},this.localCache={},this.pollTimer=null,this.pendingWrites=0,this.receiver=null,this.sender=null,this.serviceWorkerReceiverAvailable=!1,this.activeServiceWorker=null,this._workerInitializationPromise=this.initializeServiceWorkerMessaging().then(()=>{},()=>{})}async _openDb(){return this.db?this.db:(this.db=await Qa(),this.db)}async _withRetries(e){let t=0;for(;;)try{const r=await this._openDb();return await e(r)}catch(r){if(t++>J_)throw r;this.db&&(this.db.close(),this.db=void 0)}}async initializeServiceWorkerMessaging(){return eu()?this.initializeReceiver():this.initializeSender()}async initializeReceiver(){this.receiver=No._getInstance(K_()),this.receiver._subscribe("keyChanged",async(e,t)=>({keyProcessed:(await this._poll()).includes(t.key)})),this.receiver._subscribe("ping",async(e,t)=>["keyChanged"])}async initializeSender(){var e,t;if(this.activeServiceWorker=await j_(),!this.activeServiceWorker)return;this.sender=new $_(this.activeServiceWorker);const r=await this.sender._send("ping",{},800);!r||((e=r[0])===null||e===void 0?void 0:e.fulfilled)&&((t=r[0])===null||t===void 0?void 0:t.value.includes("keyChanged"))&&(this.serviceWorkerReceiverAvailable=!0)}async notifyServiceWorker(e){if(!(!this.sender||!this.activeServiceWorker||G_()!==this.activeServiceWorker))try{await this.sender._send("keyChanged",{key:e},this.serviceWorkerReceiverAvailable?800:50)}catch{}}async _isAvailable(){try{if(!indexedDB)return!1;const e=await Qa();return await Yl(e,Xs,"1"),await Jl(e,Xs),!0}catch{}return!1}async _withPendingWrite(e){this.pendingWrites++;try{await e()}finally{this.pendingWrites--}}async _set(e,t){return this._withPendingWrite(async()=>(await this._withRetries(r=>Yl(r,e,t)),this.localCache[e]=t,this.notifyServiceWorker(e)))}async _get(e){const t=await this._withRetries(r=>Q_(r,e));return this.localCache[e]=t,t}async _remove(e){return this._withPendingWrite(async()=>(await this._withRetries(t=>Jl(t,e)),delete this.localCache[e],this.notifyServiceWorker(e)))}async _poll(){const e=await this._withRetries(i=>{const s=Do(i,!1).getAll();return new Ji(s).toPromise()});if(!e)return[];if(this.pendingWrites!==0)return[];const t=[],r=new Set;for(const{fbase_key:i,value:s}of e)r.add(i),JSON.stringify(this.localCache[i])!==JSON.stringify(s)&&(this.notifyListeners(i,s),t.push(i));for(const i of Object.keys(this.localCache))this.localCache[i]&&!r.has(i)&&(this.notifyListeners(i,null),t.push(i));return t}notifyListeners(e,t){this.localCache[e]=t;const r=this.listeners[e];if(r)for(const i of Array.from(r))i(t)}startPolling(){this.stopPolling(),this.pollTimer=setInterval(async()=>this._poll(),Y_)}stopPolling(){this.pollTimer&&(clearInterval(this.pollTimer),this.pollTimer=null)}_addListener(e,t){Object.keys(this.listeners).length===0&&this.startPolling(),this.listeners[e]||(this.listeners[e]=new Set,this._get(e)),this.listeners[e].add(t)}_removeListener(e,t){this.listeners[e]&&(this.listeners[e].delete(t),this.listeners[e].size===0&&delete this.listeners[e]),Object.keys(this.listeners).length===0&&this.stopPolling()}}Lf.type="LOCAL";const Ai=Lf;/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function X_(n,e){return de(n,"POST","/v2/accounts/mfaSignIn:start",le(n,e))}function Z_(n,e){return de(n,"POST","/v2/accounts/mfaSignIn:finalize",le(n,e))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const eI=500,tI=6e4,_s=1e12;class nI{constructor(e){this.auth=e,this.counter=_s,this._widgets=new Map}render(e,t){const r=this.counter;return this._widgets.set(r,new rI(e,this.auth.name,t||{})),this.counter++,r}reset(e){var t;const r=e||_s;(t=this._widgets.get(r))===null||t===void 0||t.delete(),this._widgets.delete(r)}getResponse(e){var t;const r=e||_s;return((t=this._widgets.get(r))===null||t===void 0?void 0:t.getResponse())||""}async execute(e){var t;const r=e||_s;return(t=this._widgets.get(r))===null||t===void 0||t.execute(),""}}class rI{constructor(e,t,r){this.params=r,this.timerId=null,this.deleted=!1,this.responseToken=null,this.clickHandler=()=>{this.execute()};const i=typeof e=="string"?document.getElementById(e):e;w(i,"argument-error",{appName:t}),this.container=i,this.isVisible=this.params.size!=="invisible",this.isVisible?this.execute():this.container.addEventListener("click",this.clickHandler)}getResponse(){return this.checkIfDeleted(),this.responseToken}delete(){this.checkIfDeleted(),this.deleted=!0,this.timerId&&(clearTimeout(this.timerId),this.timerId=null),this.container.removeEventListener("click",this.clickHandler)}execute(){this.checkIfDeleted(),!this.timerId&&(this.timerId=window.setTimeout(()=>{this.responseToken=iI(50);const{callback:e,"expired-callback":t}=this.params;if(e)try{e(this.responseToken)}catch{}this.timerId=window.setTimeout(()=>{if(this.timerId=null,this.responseToken=null,t)try{t()}catch{}this.isVisible&&this.execute()},tI)},eI))}checkIfDeleted(){if(this.deleted)throw new Error("reCAPTCHA mock was already deleted!")}}function iI(n){const e=[],t="1234567890abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ";for(let r=0;r<n;r++)e.push(t.charAt(Math.floor(Math.random()*t.length)));return e.join("")}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Ra=gf("rcb"),sI=new Wi(3e4,6e4),oI="https://www.google.com/recaptcha/api.js?";class aI{constructor(){var e;this.hostLanguage="",this.counter=0,this.librarySeparatelyLoaded=!!(!((e=ue().grecaptcha)===null||e===void 0)&&e.render)}load(e,t=""){return w(cI(t),e,"argument-error"),this.shouldResolveImmediately(t)&&Gl(ue().grecaptcha)?Promise.resolve(ue().grecaptcha):new Promise((r,i)=>{const s=ue().setTimeout(()=>{i(Ie(e,"network-request-failed"))},sI.get());ue()[Ra]=()=>{ue().clearTimeout(s),delete ue()[Ra];const a=ue().grecaptcha;if(!a||!Gl(a)){i(Ie(e,"internal-error"));return}const c=a.render;a.render=(u,l)=>{const h=c(u,l);return this.counter++,h},this.hostLanguage=t,r(a)};const o=`${oI}?${Nr({onload:Ra,render:"explicit",hl:t})}`;Wc(o).catch(()=>{clearTimeout(s),i(Ie(e,"internal-error"))})})}clearedOneInstance(){this.counter--}shouldResolveImmediately(e){var t;return!!(!((t=ue().grecaptcha)===null||t===void 0)&&t.render)&&(e===this.hostLanguage||this.counter>0||this.librarySeparatelyLoaded)}}function cI(n){return n.length<=6&&/^\s*[a-zA-Z0-9\-]*\s*$/.test(n)}class uI{async load(e){return new nI(e)}clearedOneInstance(){}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Mf="recaptcha",lI={theme:"light",type:"image"};class hI{constructor(e,t=Object.assign({},lI),r){this.parameters=t,this.type=Mf,this.destroyed=!1,this.widgetId=null,this.tokenChangeListeners=new Set,this.renderPromise=null,this.recaptcha=null,this.auth=oe(r),this.isInvisible=this.parameters.size==="invisible",w(typeof document<"u",this.auth,"operation-not-supported-in-this-environment");const i=typeof e=="string"?document.getElementById(e):e;w(i,this.auth,"argument-error"),this.container=i,this.parameters.callback=this.makeTokenCallback(this.parameters.callback),this._recaptchaLoader=this.auth.settings.appVerificationDisabledForTesting?new uI:new aI,this.validateStartingState()}async verify(){this.assertNotDestroyed();const e=await this.render(),t=this.getAssertedRecaptcha(),r=t.getResponse(e);return r||new Promise(i=>{const s=o=>{!o||(this.tokenChangeListeners.delete(s),i(o))};this.tokenChangeListeners.add(s),this.isInvisible&&t.execute(e)})}render(){try{this.assertNotDestroyed()}catch(e){return Promise.reject(e)}return this.renderPromise?this.renderPromise:(this.renderPromise=this.makeRenderPromise().catch(e=>{throw this.renderPromise=null,e}),this.renderPromise)}_reset(){this.assertNotDestroyed(),this.widgetId!==null&&this.getAssertedRecaptcha().reset(this.widgetId)}clear(){this.assertNotDestroyed(),this.destroyed=!0,this._recaptchaLoader.clearedOneInstance(),this.isInvisible||this.container.childNodes.forEach(e=>{this.container.removeChild(e)})}validateStartingState(){w(!this.parameters.sitekey,this.auth,"argument-error"),w(this.isInvisible||!this.container.hasChildNodes(),this.auth,"argument-error"),w(typeof document<"u",this.auth,"operation-not-supported-in-this-environment")}makeTokenCallback(e){return t=>{if(this.tokenChangeListeners.forEach(r=>r(t)),typeof e=="function")e(t);else if(typeof e=="string"){const r=ue()[e];typeof r=="function"&&r(t)}}}assertNotDestroyed(){w(!this.destroyed,this.auth,"internal-error")}async makeRenderPromise(){if(await this.init(),!this.widgetId){let e=this.container;if(!this.isInvisible){const t=document.createElement("div");e.appendChild(t),e=t}this.widgetId=this.getAssertedRecaptcha().render(e,this.parameters)}return this.widgetId}async init(){w(jc()&&!eu(),this.auth,"internal-error"),await dI(),this.recaptcha=await this._recaptchaLoader.load(this.auth,this.auth.languageCode||void 0);const e=await Lw(this.auth);w(e,this.auth,"internal-error"),this.parameters.sitekey=e}getAssertedRecaptcha(){return w(this.recaptcha,this.auth,"internal-error"),this.recaptcha}}function dI(){let n=null;return new Promise(e=>{if(document.readyState==="complete"){e();return}n=()=>e(),window.addEventListener("load",n)}).catch(e=>{throw n&&window.removeEventListener("load",n),e})}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class tu{constructor(e,t){this.verificationId=e,this.onConfirmation=t}confirm(e){const t=An._fromVerification(this.verificationId,e);return this.onConfirmation(t)}}async function fI(n,e,t){const r=oe(n),i=await Po(r,e,S(t));return new tu(i,s=>Co(r,s))}async function pI(n,e,t){const r=S(n);await Ro(!1,r,"phone");const i=await Po(r.auth,e,S(t));return new tu(i,s=>Sf(r,s))}async function mI(n,e,t){const r=S(n),i=await Po(r.auth,e,S(t));return new tu(i,s=>kf(r,s))}async function Po(n,e,t){var r;const i=await t.verify();try{w(typeof i=="string",n,"argument-error"),w(t.type===Mf,n,"argument-error");let s;if(typeof e=="string"?s={phoneNumber:e}:s=e,"session"in s){const o=s.session;if("phoneNumber"in s)return w(o.type==="enroll",n,"internal-error"),(await O_(n,{idToken:o.credential,phoneEnrollmentInfo:{phoneNumber:s.phoneNumber,recaptchaToken:i}})).phoneSessionInfo.sessionInfo;{w(o.type==="signin",n,"internal-error");const a=((r=s.multiFactorHint)===null||r===void 0?void 0:r.uid)||s.multiFactorUid;return w(a,n,"missing-multi-factor-info"),(await X_(n,{mfaPendingCredential:o.credential,mfaEnrollmentId:a,phoneSignInInfo:{recaptchaToken:i}})).phoneResponseInfo.sessionInfo}}else{const{sessionInfo:o}=await Jw(n,{phoneNumber:s.phoneNumber,recaptchaToken:i});return o}}finally{t._reset()}}async function gI(n,e){await Hc(S(n),e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class et{constructor(e){this.providerId=et.PROVIDER_ID,this.auth=oe(e)}verifyPhoneNumber(e,t){return Po(this.auth,e,S(t))}static credential(e,t){return An._fromVerification(e,t)}static credentialFromResult(e){const t=e;return et.credentialFromTaggedObject(t)}static credentialFromError(e){return et.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e)return null;const{phoneNumber:t,temporaryProof:r}=e;return t&&r?An._fromTokenResponse(t,r):null}}et.PROVIDER_ID="phone";et.PHONE_SIGN_IN_METHOD="phone";/**
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
 */function Kn(n,e){return e?Ge(e):(w(n._popupRedirectResolver,n,"argument-error"),n._popupRedirectResolver)}/**
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
 */class nu extends xr{constructor(e){super("custom","custom"),this.params=e}_getIdTokenResponse(e){return Tt(e,this._buildIdpRequest())}_linkToIdToken(e,t){return Tt(e,this._buildIdpRequest(t))}_getReauthenticationResolver(e){return Tt(e,this._buildIdpRequest())}_buildIdpRequest(e){const t={requestUri:this.params.requestUri,sessionId:this.params.sessionId,postBody:this.params.postBody,tenantId:this.params.tenantId,pendingToken:this.params.pendingToken,returnSecureToken:!0,returnIdpCredential:!0};return e&&(t.idToken=e),t}}function yI(n){return bf(n.auth,new nu(n),n.bypassAuthState)}function vI(n){const{auth:e,user:t}=n;return w(t,e,"internal-error"),Ef(t,new nu(n),n.bypassAuthState)}async function wI(n){const{auth:e,user:t}=n;return w(t,e,"internal-error"),Hc(t,new nu(n),n.bypassAuthState)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Uf{constructor(e,t,r,i,s=!1){this.auth=e,this.resolver=r,this.user=i,this.bypassAuthState=s,this.pendingPromise=null,this.eventManager=null,this.filter=Array.isArray(t)?t:[t]}execute(){return new Promise(async(e,t)=>{this.pendingPromise={resolve:e,reject:t};try{this.eventManager=await this.resolver._initialize(this.auth),await this.onExecution(),this.eventManager.registerConsumer(this)}catch(r){this.reject(r)}})}async onAuthEvent(e){const{urlResponse:t,sessionId:r,postBody:i,tenantId:s,error:o,type:a}=e;if(o){this.reject(o);return}const c={auth:this.auth,requestUri:t,sessionId:r,tenantId:s||void 0,postBody:i||void 0,user:this.user,bypassAuthState:this.bypassAuthState};try{this.resolve(await this.getIdpTask(a)(c))}catch(u){this.reject(u)}}onError(e){this.reject(e)}getIdpTask(e){switch(e){case"signInViaPopup":case"signInViaRedirect":return yI;case"linkViaPopup":case"linkViaRedirect":return wI;case"reauthViaPopup":case"reauthViaRedirect":return vI;default:Ee(this.auth,"internal-error")}}resolve(e){tt(this.pendingPromise,"Pending promise was never set"),this.pendingPromise.resolve(e),this.unregisterAndCleanUp()}reject(e){tt(this.pendingPromise,"Pending promise was never set"),this.pendingPromise.reject(e),this.unregisterAndCleanUp()}unregisterAndCleanUp(){this.eventManager&&this.eventManager.unregisterConsumer(this),this.pendingPromise=null,this.cleanUp()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const _I=new Wi(2e3,1e4);async function II(n,e,t){const r=oe(n);Dr(n,e,Dt);const i=Kn(r,t);return new vt(r,"signInViaPopup",e,i).executeNotNull()}async function TI(n,e,t){const r=S(n);Dr(r.auth,e,Dt);const i=Kn(r.auth,t);return new vt(r.auth,"reauthViaPopup",e,i,r).executeNotNull()}async function EI(n,e,t){const r=S(n);Dr(r.auth,e,Dt);const i=Kn(r.auth,t);return new vt(r.auth,"linkViaPopup",e,i,r).executeNotNull()}class vt extends Uf{constructor(e,t,r,i,s){super(e,t,i,s),this.provider=r,this.authWindow=null,this.pollId=null,vt.currentPopupAction&&vt.currentPopupAction.cancel(),vt.currentPopupAction=this}async executeNotNull(){const e=await this.execute();return w(e,this.auth,"internal-error"),e}async onExecution(){tt(this.filter.length===1,"Popup operations only handle one event");const e=Yi();this.authWindow=await this.resolver._openPopup(this.auth,this.provider,this.filter[0],e),this.authWindow.associatedEvent=e,this.resolver._originValidation(this.auth).catch(t=>{this.reject(t)}),this.resolver._isIframeWebStorageSupported(this.auth,t=>{t||this.reject(Ie(this.auth,"web-storage-unsupported"))}),this.pollUserCancellation()}get eventId(){var e;return((e=this.authWindow)===null||e===void 0?void 0:e.associatedEvent)||null}cancel(){this.reject(Ie(this.auth,"cancelled-popup-request"))}cleanUp(){this.authWindow&&this.authWindow.close(),this.pollId&&window.clearTimeout(this.pollId),this.authWindow=null,this.pollId=null,vt.currentPopupAction=null}pollUserCancellation(){const e=()=>{var t,r;if(!((r=(t=this.authWindow)===null||t===void 0?void 0:t.window)===null||r===void 0)&&r.closed){this.pollId=window.setTimeout(()=>{this.pollId=null,this.reject(Ie(this.auth,"popup-closed-by-user"))},2e3);return}this.pollId=window.setTimeout(e,_I.get())};e()}}vt.currentPopupAction=null;/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const bI="pendingRedirect",li=new Map;class SI extends Uf{constructor(e,t,r=!1){super(e,["signInViaRedirect","linkViaRedirect","reauthViaRedirect","unknown"],t,void 0,r),this.eventId=null}async execute(){let e=li.get(this.auth._key());if(!e){try{const r=await kI(this.resolver,this.auth)?await super.execute():null;e=()=>Promise.resolve(r)}catch(t){e=()=>Promise.reject(t)}li.set(this.auth._key(),e)}return this.bypassAuthState||li.set(this.auth._key(),()=>Promise.resolve(null)),e()}async onAuthEvent(e){if(e.type==="signInViaRedirect")return super.onAuthEvent(e);if(e.type==="unknown"){this.resolve(null);return}if(e.eventId){const t=await this.auth._redirectUserForId(e.eventId);if(t)return this.user=t,super.onAuthEvent(e);this.resolve(null)}}async onExecution(){}cleanUp(){}}async function kI(n,e){const t=Vf(e),r=Ff(n);if(!await r._isAvailable())return!1;const i=await r._get(t)==="true";return await r._remove(t),i}async function ru(n,e){return Ff(n)._set(Vf(e),"true")}function AI(){li.clear()}function iu(n,e){li.set(n._key(),e)}function Ff(n){return Ge(n._redirectPersistence)}function Vf(n){return kn(bI,n.config.apiKey,n.name)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function RI(n,e,t){return CI(n,e,t)}async function CI(n,e,t){const r=oe(n);Dr(n,e,Dt),await r._initializationPromise;const i=Kn(r,t);return await ru(i,r),i._openRedirect(r,e,"signInViaRedirect")}function NI(n,e,t){return DI(n,e,t)}async function DI(n,e,t){const r=S(n);Dr(r.auth,e,Dt),await r.auth._initializationPromise;const i=Kn(r.auth,t);await ru(i,r.auth);const s=await Bf(r);return i._openRedirect(r.auth,e,"reauthViaRedirect",s)}function PI(n,e,t){return xI(n,e,t)}async function xI(n,e,t){const r=S(n);Dr(r.auth,e,Dt),await r.auth._initializationPromise;const i=Kn(r.auth,t);await Ro(!1,r,e.providerId),await ru(i,r.auth);const s=await Bf(r);return i._openRedirect(r.auth,e,"linkViaRedirect",s)}async function OI(n,e){return await oe(n)._initializationPromise,xo(n,e,!1)}async function xo(n,e,t=!1){const r=oe(n),i=Kn(r,e),o=await new SI(r,i,t).execute();return o&&!t&&(delete o.user._redirectEventId,await r._persistUserIfCurrent(o.user),await r._setRedirectUser(null,e)),o}async function Bf(n){const e=Yi(`${n.uid}:::`);return n._redirectEventId=e,await n.auth._setRedirectUser(n),await n.auth._persistUserIfCurrent(n),e}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const LI=10*60*1e3;class qf{constructor(e){this.auth=e,this.cachedEventUids=new Set,this.consumers=new Set,this.queuedRedirectEvent=null,this.hasHandledPotentialRedirect=!1,this.lastProcessedEventTime=Date.now()}registerConsumer(e){this.consumers.add(e),this.queuedRedirectEvent&&this.isEventForConsumer(this.queuedRedirectEvent,e)&&(this.sendToConsumer(this.queuedRedirectEvent,e),this.saveEventToCache(this.queuedRedirectEvent),this.queuedRedirectEvent=null)}unregisterConsumer(e){this.consumers.delete(e)}onEvent(e){if(this.hasEventBeenHandled(e))return!1;let t=!1;return this.consumers.forEach(r=>{this.isEventForConsumer(e,r)&&(t=!0,this.sendToConsumer(e,r),this.saveEventToCache(e))}),this.hasHandledPotentialRedirect||!MI(e)||(this.hasHandledPotentialRedirect=!0,t||(this.queuedRedirectEvent=e,t=!0)),t}sendToConsumer(e,t){var r;if(e.error&&!$f(e)){const i=((r=e.error.code)===null||r===void 0?void 0:r.split("auth/")[1])||"internal-error";t.onError(Ie(this.auth,i))}else t.onAuthEvent(e)}isEventForConsumer(e,t){const r=t.eventId===null||!!e.eventId&&e.eventId===t.eventId;return t.filter.includes(e.type)&&r}hasEventBeenHandled(e){return Date.now()-this.lastProcessedEventTime>=LI&&this.cachedEventUids.clear(),this.cachedEventUids.has(Xl(e))}saveEventToCache(e){this.cachedEventUids.add(Xl(e)),this.lastProcessedEventTime=Date.now()}}function Xl(n){return[n.type,n.eventId,n.sessionId,n.tenantId].filter(e=>e).join("-")}function $f({type:n,error:e}){return n==="unknown"&&(e==null?void 0:e.code)==="auth/no-auth-event"}function MI(n){switch(n.type){case"signInViaRedirect":case"linkViaRedirect":case"reauthViaRedirect":return!0;case"unknown":return $f(n);default:return!1}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function zf(n,e={}){return de(n,"GET","/v1/projects",e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const UI=/^\d{1,3}\.\d{1,3}\.\d{1,3}\.\d{1,3}$/,FI=/^https?/;async function VI(n){if(n.config.emulator)return;const{authorizedDomains:e}=await zf(n);for(const t of e)try{if(BI(t))return}catch{}Ee(n,"unauthorized-domain")}function BI(n){const e=Ei(),{protocol:t,hostname:r}=new URL(e);if(n.startsWith("chrome-extension://")){const o=new URL(n);return o.hostname===""&&r===""?t==="chrome-extension:"&&n.replace("chrome-extension://","")===e.replace("chrome-extension://",""):t==="chrome-extension:"&&o.hostname===r}if(!FI.test(t))return!1;if(UI.test(n))return r===n;const i=n.replace(/\./g,"\\.");return new RegExp("^(.+\\."+i+"|"+i+")$","i").test(r)}/**
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
 */const qI=new Wi(3e4,6e4);function Zl(){const n=ue().___jsl;if(n!=null&&n.H){for(const e of Object.keys(n.H))if(n.H[e].r=n.H[e].r||[],n.H[e].L=n.H[e].L||[],n.H[e].r=[...n.H[e].L],n.CP)for(let t=0;t<n.CP.length;t++)n.CP[t]=null}}function $I(n){return new Promise((e,t)=>{var r,i,s;function o(){Zl(),gapi.load("gapi.iframes",{callback:()=>{e(gapi.iframes.getContext())},ontimeout:()=>{Zl(),t(Ie(n,"network-request-failed"))},timeout:qI.get()})}if(!((i=(r=ue().gapi)===null||r===void 0?void 0:r.iframes)===null||i===void 0)&&i.Iframe)e(gapi.iframes.getContext());else if(!((s=ue().gapi)===null||s===void 0)&&s.load)o();else{const a=gf("iframefcb");return ue()[a]=()=>{gapi.load?o():t(Ie(n,"network-request-failed"))},Wc(`https://apis.google.com/js/api.js?onload=${a}`).catch(c=>t(c))}}).catch(e=>{throw Us=null,e})}let Us=null;function zI(n){return Us=Us||$I(n),Us}/**
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
 */const jI=new Wi(5e3,15e3),GI="__/auth/iframe",KI="emulator/auth/iframe",WI={style:{position:"absolute",top:"-100px",width:"1px",height:"1px"},"aria-hidden":"true",tabindex:"-1"},HI=new Map([["identitytoolkit.googleapis.com","p"],["staging-identitytoolkit.sandbox.googleapis.com","s"],["test-identitytoolkit.sandbox.googleapis.com","t"]]);function QI(n){const e=n.config;w(e.authDomain,n,"auth-domain-config-required");const t=e.emulator?Gc(e,KI):`https://${n.config.authDomain}/${GI}`,r={apiKey:e.apiKey,appName:n.name,v:Ct},i=HI.get(n.config.apiHost);i&&(r.eid=i);const s=n._getFrameworks();return s.length&&(r.fw=s.join(",")),`${t}?${Nr(r).slice(1)}`}async function YI(n){const e=await zI(n),t=ue().gapi;return w(t,n,"internal-error"),e.open({where:document.body,url:QI(n),messageHandlersFilter:t.iframes.CROSS_ORIGIN_IFRAMES_FILTER,attributes:WI,dontclear:!0},r=>new Promise(async(i,s)=>{await r.restyle({setHideOnLeave:!1});const o=Ie(n,"network-request-failed"),a=ue().setTimeout(()=>{s(o)},jI.get());function c(){ue().clearTimeout(a),i(r)}r.ping(c).then(c,()=>{s(o)})}))}/**
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
 */const JI={location:"yes",resizable:"yes",statusbar:"yes",toolbar:"no"},XI=500,ZI=600,eT="_blank",tT="http://localhost";class eh{constructor(e){this.window=e,this.associatedEvent=null}close(){if(this.window)try{this.window.close()}catch{}}}function nT(n,e,t,r=XI,i=ZI){const s=Math.max((window.screen.availHeight-i)/2,0).toString(),o=Math.max((window.screen.availWidth-r)/2,0).toString();let a="";const c=Object.assign(Object.assign({},JI),{width:r.toString(),height:i.toString(),top:s,left:o}),u=J().toLowerCase();t&&(a=cf(u)?eT:t),af(u)&&(e=e||tT,c.scrollbars="yes");const l=Object.entries(c).reduce((d,[p,g])=>`${d}${p}=${g},`,"");if(Pw(u)&&a!=="_self")return rT(e||"",a),new eh(null);const h=window.open(e||"",a,l);w(h,n,"popup-blocked");try{h.focus()}catch{}return new eh(h)}function rT(n,e){const t=document.createElement("a");t.href=n,t.target=e;const r=document.createEvent("MouseEvent");r.initMouseEvent("click",!0,!0,window,1,0,0,0,0,!1,!1,!1,!1,1,null),t.dispatchEvent(r)}/**
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
 */const iT="__/auth/handler",sT="emulator/auth/handler",oT=encodeURIComponent("fac");async function Ya(n,e,t,r,i,s){w(n.config.authDomain,n,"auth-domain-config-required"),w(n.config.apiKey,n,"invalid-api-key");const o={apiKey:n.config.apiKey,appName:n.name,authType:t,redirectUrl:r,v:Ct,eventId:i};if(e instanceof Dt){e.setDefaultLanguage(n.languageCode),o.providerId=e.providerId||"",nv(e.getCustomParameters())||(o.customParameters=JSON.stringify(e.getCustomParameters()));for(const[l,h]of Object.entries(s||{}))o[l]=h}if(e instanceof Or){const l=e.getScopes().filter(h=>h!=="");l.length>0&&(o.scopes=l.join(","))}n.tenantId&&(o.tid=n.tenantId);const a=o;for(const l of Object.keys(a))a[l]===void 0&&delete a[l];const c=await n._getAppCheckToken(),u=c?`#${oT}=${encodeURIComponent(c)}`:"";return`${aT(n)}?${Nr(a).slice(1)}${u}`}function aT({config:n}){return n.emulator?Gc(n,sT):`https://${n.authDomain}/${iT}`}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Ca="webStorageSupport";class cT{constructor(){this.eventManagers={},this.iframes={},this.originValidationPromises={},this._redirectPersistence=Pn,this._completeRedirectFn=xo,this._overrideRedirectResult=iu}async _openPopup(e,t,r,i){var s;tt((s=this.eventManagers[e._key()])===null||s===void 0?void 0:s.manager,"_initialize() not called before _openPopup()");const o=await Ya(e,t,r,Ei(),i);return nT(e,o,Yi())}async _openRedirect(e,t,r,i){await this._originValidation(e);const s=await Ya(e,t,r,Ei(),i);return z_(s),new Promise(()=>{})}_initialize(e){const t=e._key();if(this.eventManagers[t]){const{manager:i,promise:s}=this.eventManagers[t];return i?Promise.resolve(i):(tt(s,"If manager is not set, promise should be"),s)}const r=this.initAndGetManager(e);return this.eventManagers[t]={promise:r},r.catch(()=>{delete this.eventManagers[t]}),r}async initAndGetManager(e){const t=await YI(e),r=new qf(e);return t.register("authEvent",i=>(w(i==null?void 0:i.authEvent,e,"invalid-auth-event"),{status:r.onEvent(i.authEvent)?"ACK":"ERROR"}),gapi.iframes.CROSS_ORIGIN_IFRAMES_FILTER),this.eventManagers[e._key()]={manager:r},this.iframes[e._key()]=t,r}_isIframeWebStorageSupported(e,t){this.iframes[e._key()].send(Ca,{type:Ca},i=>{var s;const o=(s=i==null?void 0:i[0])===null||s===void 0?void 0:s[Ca];o!==void 0&&t(!!o),Ee(e,"internal-error")},gapi.iframes.CROSS_ORIGIN_IFRAMES_FILTER)}_originValidation(e){const t=e._key();return this.originValidationPromises[t]||(this.originValidationPromises[t]=VI(e)),this.originValidationPromises[t]}get _shouldInitProactively(){return df()||Kc()||Pr()}}const uT=cT;class lT{constructor(e){this.factorId=e}_process(e,t,r){switch(t.type){case"enroll":return this._finalizeEnroll(e,t.credential,r);case"signin":return this._finalizeSignIn(e,t.credential);default:return ct("unexpected MultiFactorSessionType")}}}class su extends lT{constructor(e){super("phone"),this.credential=e}static _fromCredential(e){return new su(e)}_finalizeEnroll(e,t,r){return L_(e,{idToken:t,displayName:r,phoneVerificationInfo:this.credential._makeVerificationRequest()})}_finalizeSignIn(e,t){return Z_(e,{mfaPendingCredential:t,phoneVerificationInfo:this.credential._makeVerificationRequest()})}}class jf{constructor(){}static assertion(e){return su._fromCredential(e)}}jf.FACTOR_ID="phone";var th="@firebase/auth",nh="0.23.0";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class hT{constructor(e){this.auth=e,this.internalListeners=new Map}getUid(){var e;return this.assertAuthConfigured(),((e=this.auth.currentUser)===null||e===void 0?void 0:e.uid)||null}async getToken(e){return this.assertAuthConfigured(),await this.auth._initializationPromise,this.auth.currentUser?{accessToken:await this.auth.currentUser.getIdToken(e)}:null}addAuthTokenListener(e){if(this.assertAuthConfigured(),this.internalListeners.has(e))return;const t=this.auth.onIdTokenChanged(r=>{e((r==null?void 0:r.stsTokenManager.accessToken)||null)});this.internalListeners.set(e,t),this.updateProactiveRefresh()}removeAuthTokenListener(e){this.assertAuthConfigured();const t=this.internalListeners.get(e);!t||(this.internalListeners.delete(e),t(),this.updateProactiveRefresh())}assertAuthConfigured(){w(this.auth._initializationPromise,"dependent-sdk-initialized-before-auth")}updateProactiveRefresh(){this.internalListeners.size>0?this.auth._startProactiveRefresh():this.auth._stopProactiveRefresh()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function dT(n){switch(n){case"Node":return"node";case"ReactNative":return"rn";case"Worker":return"webworker";case"Cordova":return"cordova";default:return}}function fT(n){bt(new Je("auth",(e,{options:t})=>{const r=e.getProvider("app").getImmediate(),i=e.getProvider("heartbeat"),s=e.getProvider("app-check-internal"),{apiKey:o,authDomain:a}=r.options;w(o&&!o.includes(":"),"invalid-api-key",{appName:r.name}),w(!(a!=null&&a.includes(":")),"argument-error",{appName:r.name});const c={apiKey:o,authDomain:a,clientPlatform:n,apiHost:"identitytoolkit.googleapis.com",tokenApiHost:"securetoken.googleapis.com",apiScheme:"https",sdkClientVersion:ff(n)},u=new Bw(r,i,s,c);return qw(u,t),u},"PUBLIC").setInstantiationMode("EXPLICIT").setInstanceCreatedCallback((e,t,r)=>{e.getProvider("auth-internal").initialize()})),bt(new Je("auth-internal",e=>{const t=oe(e.getProvider("auth").getImmediate());return(r=>new hT(r))(t)},"PRIVATE").setInstantiationMode("EXPLICIT")),Ye(th,nh,dT(n)),Ye(th,nh,"esm2017")}/**
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
 */const pT=5*60;Wy("authIdTokenMaxAge");fT("Browser");/**
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
 */function xn(){return window}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const mT=2e3;async function gT(n,e,t){var r;const{BuildInfo:i}=xn();tt(e.sessionId,"AuthEvent did not contain a session ID");const s=await IT(e.sessionId),o={};return Pr()?o.ibi=i.packageName:Hi()?o.apn=i.packageName:Ee(n,"operation-not-supported-in-this-environment"),i.displayName&&(o.appDisplayName=i.displayName),o.sessionId=s,Ya(n,t,e.type,void 0,(r=e.eventId)!==null&&r!==void 0?r:void 0,o)}async function yT(n){const{BuildInfo:e}=xn(),t={};Pr()?t.iosBundleId=e.packageName:Hi()?t.androidPackageName=e.packageName:Ee(n,"operation-not-supported-in-this-environment"),await zf(n,t)}function vT(n){const{cordova:e}=xn();return new Promise(t=>{e.plugins.browsertab.isAvailable(r=>{let i=null;r?e.plugins.browsertab.openUrl(n):i=e.InAppBrowser.open(n,Dw()?"_blank":"_system","location=yes"),t(i)})})}async function wT(n,e,t){const{cordova:r}=xn();let i=()=>{};try{await new Promise((s,o)=>{let a=null;function c(){var h;s();const d=(h=r.plugins.browsertab)===null||h===void 0?void 0:h.close;typeof d=="function"&&d(),typeof(t==null?void 0:t.close)=="function"&&t.close()}function u(){a||(a=window.setTimeout(()=>{o(Ie(n,"redirect-cancelled-by-user"))},mT))}function l(){(document==null?void 0:document.visibilityState)==="visible"&&u()}e.addPassiveListener(c),document.addEventListener("resume",u,!1),Hi()&&document.addEventListener("visibilitychange",l,!1),i=()=>{e.removePassiveListener(c),document.removeEventListener("resume",u,!1),document.removeEventListener("visibilitychange",l,!1),a&&window.clearTimeout(a)}})}finally{i()}}function _T(n){var e,t,r,i,s,o,a,c,u,l;const h=xn();w(typeof((e=h==null?void 0:h.universalLinks)===null||e===void 0?void 0:e.subscribe)=="function",n,"invalid-cordova-configuration",{missingPlugin:"cordova-universal-links-plugin-fix"}),w(typeof((t=h==null?void 0:h.BuildInfo)===null||t===void 0?void 0:t.packageName)<"u",n,"invalid-cordova-configuration",{missingPlugin:"cordova-plugin-buildInfo"}),w(typeof((s=(i=(r=h==null?void 0:h.cordova)===null||r===void 0?void 0:r.plugins)===null||i===void 0?void 0:i.browsertab)===null||s===void 0?void 0:s.openUrl)=="function",n,"invalid-cordova-configuration",{missingPlugin:"cordova-plugin-browsertab"}),w(typeof((c=(a=(o=h==null?void 0:h.cordova)===null||o===void 0?void 0:o.plugins)===null||a===void 0?void 0:a.browsertab)===null||c===void 0?void 0:c.isAvailable)=="function",n,"invalid-cordova-configuration",{missingPlugin:"cordova-plugin-browsertab"}),w(typeof((l=(u=h==null?void 0:h.cordova)===null||u===void 0?void 0:u.InAppBrowser)===null||l===void 0?void 0:l.open)=="function",n,"invalid-cordova-configuration",{missingPlugin:"cordova-plugin-inappbrowser"})}async function IT(n){const e=TT(n),t=await crypto.subtle.digest("SHA-256",e);return Array.from(new Uint8Array(t)).map(i=>i.toString(16).padStart(2,"0")).join("")}function TT(n){if(tt(/[0-9a-zA-Z]+/.test(n),"Can only convert alpha-numeric strings"),typeof TextEncoder<"u")return new TextEncoder().encode(n);const e=new ArrayBuffer(n.length),t=new Uint8Array(e);for(let r=0;r<n.length;r++)t[r]=n.charCodeAt(r);return t}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const ET=20;class bT extends qf{constructor(){super(...arguments),this.passiveListeners=new Set,this.initPromise=new Promise(e=>{this.resolveInialized=e})}addPassiveListener(e){this.passiveListeners.add(e)}removePassiveListener(e){this.passiveListeners.delete(e)}resetRedirect(){this.queuedRedirectEvent=null,this.hasHandledPotentialRedirect=!1}onEvent(e){return this.resolveInialized(),this.passiveListeners.forEach(t=>t(e)),super.onEvent(e)}async initialized(){await this.initPromise}}function ST(n,e,t=null){return{type:e,eventId:t,urlResponse:null,sessionId:RT(),postBody:null,tenantId:n.tenantId,error:Ie(n,"no-auth-event")}}function kT(n,e){return Ja()._set(Xa(n),e)}async function rh(n){const e=await Ja()._get(Xa(n));return e&&await Ja()._remove(Xa(n)),e}function AT(n,e){var t,r;const i=NT(e);if(i.includes("/__/auth/callback")){const s=Fs(i),o=s.firebaseError?CT(decodeURIComponent(s.firebaseError)):null,a=(r=(t=o==null?void 0:o.code)===null||t===void 0?void 0:t.split("auth/"))===null||r===void 0?void 0:r[1],c=a?Ie(a):null;return c?{type:n.type,eventId:n.eventId,tenantId:n.tenantId,error:c,urlResponse:null,sessionId:null,postBody:null}:{type:n.type,eventId:n.eventId,tenantId:n.tenantId,sessionId:n.sessionId,urlResponse:i,postBody:null}}return null}function RT(){const n=[],e="1234567890abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ";for(let t=0;t<ET;t++){const r=Math.floor(Math.random()*e.length);n.push(e.charAt(r))}return n.join("")}function Ja(){return Ge(Zc)}function Xa(n){return kn("authEvent",n.config.apiKey,n.name)}function CT(n){try{return JSON.parse(n)}catch{return null}}function NT(n){const e=Fs(n),t=e.link?decodeURIComponent(e.link):void 0,r=Fs(t).link,i=e.deep_link_id?decodeURIComponent(e.deep_link_id):void 0;return Fs(i).link||i||r||t||n}function Fs(n){if(!(n!=null&&n.includes("?")))return{};const[e,...t]=n.split("?");return or(t.join("?"))}/**
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
 */const DT=500;class PT{constructor(){this._redirectPersistence=Pn,this._shouldInitProactively=!0,this.eventManagers=new Map,this.originValidationPromises={},this._completeRedirectFn=xo,this._overrideRedirectResult=iu}async _initialize(e){const t=e._key();let r=this.eventManagers.get(t);return r||(r=new bT(e),this.eventManagers.set(t,r),this.attachCallbackListeners(e,r)),r}_openPopup(e){Ee(e,"operation-not-supported-in-this-environment")}async _openRedirect(e,t,r,i){_T(e);const s=await this._initialize(e);await s.initialized(),s.resetRedirect(),AI(),await this._originValidation(e);const o=ST(e,r,i);await kT(e,o);const a=await gT(e,o,t),c=await vT(a);return wT(e,s,c)}_isIframeWebStorageSupported(e,t){throw new Error("Method not implemented.")}_originValidation(e){const t=e._key();return this.originValidationPromises[t]||(this.originValidationPromises[t]=yT(e)),this.originValidationPromises[t]}attachCallbackListeners(e,t){const{universalLinks:r,handleOpenURL:i,BuildInfo:s}=xn(),o=setTimeout(async()=>{await rh(e),t.onEvent(ih())},DT),a=async l=>{clearTimeout(o);const h=await rh(e);let d=null;h&&(l==null?void 0:l.url)&&(d=AT(h,l.url)),t.onEvent(d||ih())};typeof r<"u"&&typeof r.subscribe=="function"&&r.subscribe(null,a);const c=i,u=`${s.packageName.toLowerCase()}://`;xn().handleOpenURL=async l=>{if(l.toLowerCase().startsWith(u)&&a({url:l}),typeof c=="function")try{c(l)}catch(h){console.error(h)}}}}const xT=PT;function ih(){return{type:"unknown",eventId:null,sessionId:null,urlResponse:null,postBody:null,tenantId:null,error:Ie("no-auth-event")}}/**
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
 */function OT(n,e){oe(n)._logFramework(e)}var LT="@firebase/auth-compat",MT="0.4.0";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const UT=1e3;function hi(){var n;return((n=self==null?void 0:self.location)===null||n===void 0?void 0:n.protocol)||null}function FT(){return hi()==="http:"||hi()==="https:"}function Gf(n=J()){return!!((hi()==="file:"||hi()==="ionic:"||hi()==="capacitor:")&&n.toLowerCase().match(/iphone|ipad|ipod|android/))}function VT(){return Bc()||Eo()}function BT(){return qd()&&(document==null?void 0:document.documentMode)===11}function qT(n=J()){return/Edge\/\d+/.test(n)}function $T(n=J()){return BT()||qT(n)}function Kf(){try{const n=self.localStorage,e=Yi();if(n)return n.setItem(e,"1"),n.removeItem(e),$T()?_i():!0}catch{return ou()&&_i()}return!1}function ou(){return typeof global<"u"&&"WorkerGlobalScope"in global&&"importScripts"in global}function Na(){return(FT()||Bd()||Gf())&&!VT()&&Kf()&&!ou()}function Wf(){return Gf()&&typeof document<"u"}async function zT(){return Wf()?new Promise(n=>{const e=setTimeout(()=>{n(!1)},UT);document.addEventListener("deviceready",()=>{clearTimeout(e),n(!0)})}):!1}function jT(){return typeof window<"u"?window:null}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const je={LOCAL:"local",NONE:"none",SESSION:"session"},Wr=w,Hf="persistence";function GT(n,e){if(Wr(Object.values(je).includes(e),n,"invalid-persistence-type"),Bc()){Wr(e!==je.SESSION,n,"unsupported-persistence-type");return}if(Eo()){Wr(e===je.NONE,n,"unsupported-persistence-type");return}if(ou()){Wr(e===je.NONE||e===je.LOCAL&&_i(),n,"unsupported-persistence-type");return}Wr(e===je.NONE||Kf(),n,"unsupported-persistence-type")}async function Za(n){await n._initializationPromise;const e=Qf(),t=kn(Hf,n.config.apiKey,n.name);e&&e.setItem(t,n._getPersistence())}function KT(n,e){const t=Qf();if(!t)return[];const r=kn(Hf,n,e);switch(t.getItem(r)){case je.NONE:return[mr];case je.LOCAL:return[Ai,Pn];case je.SESSION:return[Pn];default:return[]}}function Qf(){var n;try{return((n=jT())===null||n===void 0?void 0:n.sessionStorage)||null}catch{return null}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const WT=w;class $t{constructor(){this.browserResolver=Ge(uT),this.cordovaResolver=Ge(xT),this.underlyingResolver=null,this._redirectPersistence=Pn,this._completeRedirectFn=xo,this._overrideRedirectResult=iu}async _initialize(e){return await this.selectUnderlyingResolver(),this.assertedUnderlyingResolver._initialize(e)}async _openPopup(e,t,r,i){return await this.selectUnderlyingResolver(),this.assertedUnderlyingResolver._openPopup(e,t,r,i)}async _openRedirect(e,t,r,i){return await this.selectUnderlyingResolver(),this.assertedUnderlyingResolver._openRedirect(e,t,r,i)}_isIframeWebStorageSupported(e,t){this.assertedUnderlyingResolver._isIframeWebStorageSupported(e,t)}_originValidation(e){return this.assertedUnderlyingResolver._originValidation(e)}get _shouldInitProactively(){return Wf()||this.browserResolver._shouldInitProactively}get assertedUnderlyingResolver(){return WT(this.underlyingResolver,"internal-error"),this.underlyingResolver}async selectUnderlyingResolver(){if(this.underlyingResolver)return;const e=await zT();this.underlyingResolver=e?this.cordovaResolver:this.browserResolver}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Yf(n){return n.unwrap()}function HT(n){return n.wrapped()}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function QT(n){return Jf(n)}function YT(n,e){var t;const r=(t=e.customData)===null||t===void 0?void 0:t._tokenResponse;if((e==null?void 0:e.code)==="auth/multi-factor-auth-required"){const i=e;i.resolver=new JT(n,x_(n,e))}else if(r){const i=Jf(e),s=e;i&&(s.credential=i,s.tenantId=r.tenantId||void 0,s.email=r.email||void 0,s.phoneNumber=r.phoneNumber||void 0)}}function Jf(n){const{_tokenResponse:e}=n instanceof Ce?n.customData:n;if(!e)return null;if(!(n instanceof Ce)&&"temporaryProof"in e&&"phoneNumber"in e)return et.credentialFromResult(n);const t=e.providerId;if(!t||t===Kr.PASSWORD)return null;let r;switch(t){case Kr.GOOGLE:r=rt;break;case Kr.FACEBOOK:r=nt;break;case Kr.GITHUB:r=it;break;case Kr.TWITTER:r=st;break;default:const{oauthIdToken:i,oauthAccessToken:s,oauthTokenSecret:o,pendingToken:a,nonce:c}=e;return!s&&!o&&!i&&!a?null:a?t.startsWith("saml.")?gr._create(t,a):pt._fromParams({providerId:t,signInMethod:t,pendingToken:a,idToken:i,accessToken:s}):new ur(t).credential({idToken:i,accessToken:s,rawNonce:c})}return n instanceof Ce?r.credentialFromError(n):r.credentialFromResult(n)}function Fe(n,e){return e.catch(t=>{throw t instanceof Ce&&YT(n,t),t}).then(t=>{const r=t.operationType,i=t.user;return{operationType:r,credential:QT(t),additionalUserInfo:P_(t),user:wt.getOrCreate(i)}})}async function ec(n,e){const t=await e;return{verificationId:t.verificationId,confirm:r=>Fe(n,t.confirm(r))}}class JT{constructor(e,t){this.resolver=t,this.auth=HT(e)}get session(){return this.resolver.session}get hints(){return this.resolver.hints}resolveSignIn(e){return Fe(Yf(this.auth),this.resolver.resolveSignIn(e))}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class wt{constructor(e){this._delegate=e,this.multiFactor=U_(e)}static getOrCreate(e){return wt.USER_MAP.has(e)||wt.USER_MAP.set(e,new wt(e)),wt.USER_MAP.get(e)}delete(){return this._delegate.delete()}reload(){return this._delegate.reload()}toJSON(){return this._delegate.toJSON()}getIdTokenResult(e){return this._delegate.getIdTokenResult(e)}getIdToken(e){return this._delegate.getIdToken(e)}linkAndRetrieveDataWithCredential(e){return this.linkWithCredential(e)}async linkWithCredential(e){return Fe(this.auth,Sf(this._delegate,e))}async linkWithPhoneNumber(e,t){return ec(this.auth,pI(this._delegate,e,t))}async linkWithPopup(e){return Fe(this.auth,EI(this._delegate,e,$t))}async linkWithRedirect(e){return await Za(oe(this.auth)),PI(this._delegate,e,$t)}reauthenticateAndRetrieveDataWithCredential(e){return this.reauthenticateWithCredential(e)}async reauthenticateWithCredential(e){return Fe(this.auth,kf(this._delegate,e))}reauthenticateWithPhoneNumber(e,t){return ec(this.auth,mI(this._delegate,e,t))}reauthenticateWithPopup(e){return Fe(this.auth,TI(this._delegate,e,$t))}async reauthenticateWithRedirect(e){return await Za(oe(this.auth)),NI(this._delegate,e,$t)}sendEmailVerification(e){return I_(this._delegate,e)}async unlink(e){return await a_(this._delegate,e),this}updateEmail(e){return S_(this._delegate,e)}updatePassword(e){return k_(this._delegate,e)}updatePhoneNumber(e){return gI(this._delegate,e)}updateProfile(e){return b_(this._delegate,e)}verifyBeforeUpdateEmail(e,t){return T_(this._delegate,e,t)}get emailVerified(){return this._delegate.emailVerified}get isAnonymous(){return this._delegate.isAnonymous}get metadata(){return this._delegate.metadata}get phoneNumber(){return this._delegate.phoneNumber}get providerData(){return this._delegate.providerData}get refreshToken(){return this._delegate.refreshToken}get tenantId(){return this._delegate.tenantId}get displayName(){return this._delegate.displayName}get email(){return this._delegate.email}get photoURL(){return this._delegate.photoURL}get providerId(){return this._delegate.providerId}get uid(){return this._delegate.uid}get auth(){return this._delegate.auth}}wt.USER_MAP=new WeakMap;/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Hr=w;class tc{constructor(e,t){if(this.app=e,t.isInitialized()){this._delegate=t.getImmediate(),this.linkUnderlyingAuth();return}const{apiKey:r}=e.options;Hr(r,"invalid-api-key",{appName:e.name}),Hr(r,"invalid-api-key",{appName:e.name});const i=typeof window<"u"?$t:void 0;this._delegate=t.initialize({options:{persistence:XT(r,e.name),popupRedirectResolver:i}}),this._delegate._updateErrorMap(dw),this.linkUnderlyingAuth()}get emulatorConfig(){return this._delegate.emulatorConfig}get currentUser(){return this._delegate.currentUser?wt.getOrCreate(this._delegate.currentUser):null}get languageCode(){return this._delegate.languageCode}set languageCode(e){this._delegate.languageCode=e}get settings(){return this._delegate.settings}get tenantId(){return this._delegate.tenantId}set tenantId(e){this._delegate.tenantId=e}useDeviceLanguage(){this._delegate.useDeviceLanguage()}signOut(){return this._delegate.signOut()}useEmulator(e,t){$w(this._delegate,e,t)}applyActionCode(e){return d_(this._delegate,e)}checkActionCode(e){return Af(this._delegate,e)}confirmPasswordReset(e,t){return h_(this._delegate,e,t)}async createUserWithEmailAndPassword(e,t){return Fe(this._delegate,p_(this._delegate,e,t))}fetchProvidersForEmail(e){return this.fetchSignInMethodsForEmail(e)}fetchSignInMethodsForEmail(e){return __(this._delegate,e)}isSignInWithEmailLink(e){return y_(this._delegate,e)}async getRedirectResult(){Hr(Na(),this._delegate,"operation-not-supported-in-this-environment");const e=await OI(this._delegate,$t);return e?Fe(this._delegate,Promise.resolve(e)):{credential:null,user:null}}addFrameworkForLogging(e){OT(this._delegate,e)}onAuthStateChanged(e,t,r){const{next:i,error:s,complete:o}=sh(e,t,r);return this._delegate.onAuthStateChanged(i,s,o)}onIdTokenChanged(e,t,r){const{next:i,error:s,complete:o}=sh(e,t,r);return this._delegate.onIdTokenChanged(i,s,o)}sendSignInLinkToEmail(e,t){return g_(this._delegate,e,t)}sendPasswordResetEmail(e,t){return l_(this._delegate,e,t||void 0)}async setPersistence(e){GT(this._delegate,e);let t;switch(e){case je.SESSION:t=Pn;break;case je.LOCAL:t=await Ge(Ai)._isAvailable()?Ai:Zc;break;case je.NONE:t=mr;break;default:return Ee("argument-error",{appName:this._delegate.name})}return this._delegate.setPersistence(t)}signInAndRetrieveDataWithCredential(e){return this.signInWithCredential(e)}signInAnonymously(){return Fe(this._delegate,o_(this._delegate))}signInWithCredential(e){return Fe(this._delegate,Co(this._delegate,e))}signInWithCustomToken(e){return Fe(this._delegate,u_(this._delegate,e))}signInWithEmailAndPassword(e,t){return Fe(this._delegate,m_(this._delegate,e,t))}signInWithEmailLink(e,t){return Fe(this._delegate,v_(this._delegate,e,t))}signInWithPhoneNumber(e,t){return ec(this._delegate,fI(this._delegate,e,t))}async signInWithPopup(e){return Hr(Na(),this._delegate,"operation-not-supported-in-this-environment"),Fe(this._delegate,II(this._delegate,e,$t))}async signInWithRedirect(e){return Hr(Na(),this._delegate,"operation-not-supported-in-this-environment"),await Za(this._delegate),RI(this._delegate,e,$t)}updateCurrentUser(e){return this._delegate.updateCurrentUser(e)}verifyPasswordResetCode(e){return f_(this._delegate,e)}unwrap(){return this._delegate}_delete(){return this._delegate._delete()}linkUnderlyingAuth(){this._delegate.wrapped=()=>this}}tc.Persistence=je;function sh(n,e,t){let r=n;typeof n!="function"&&({next:r,error:e,complete:t}=n);const i=r;return{next:o=>i(o&&wt.getOrCreate(o)),error:e,complete:t}}function XT(n,e){const t=KT(n,e);if(typeof self<"u"&&!t.includes(Ai)&&t.push(Ai),typeof window<"u")for(const r of[Zc,Pn])t.includes(r)||t.push(r);return t.includes(mr)||t.push(mr),t}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class au{constructor(){this.providerId="phone",this._delegate=new et(Yf(Ki.auth()))}static credential(e,t){return et.credential(e,t)}verifyPhoneNumber(e,t){return this._delegate.verifyPhoneNumber(e,t)}unwrap(){return this._delegate}}au.PHONE_SIGN_IN_METHOD=et.PHONE_SIGN_IN_METHOD;au.PROVIDER_ID=et.PROVIDER_ID;/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const ZT=w;class eE{constructor(e,t,r=Ki.app()){var i;ZT((i=r.options)===null||i===void 0?void 0:i.apiKey,"invalid-api-key",{appName:r.name}),this._delegate=new hI(e,t,r.auth()),this.type=this._delegate.type}clear(){this._delegate.clear()}render(){return this._delegate.render()}verify(){return this._delegate.verify()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const tE="auth-compat";function nE(n){n.INTERNAL.registerComponent(new Je(tE,e=>{const t=e.getProvider("app-compat").getImmediate(),r=e.getProvider("auth");return new tc(t,r)},"PUBLIC").setServiceProps({ActionCodeInfo:{Operation:{EMAIL_SIGNIN:Zn.EMAIL_SIGNIN,PASSWORD_RESET:Zn.PASSWORD_RESET,RECOVER_EMAIL:Zn.RECOVER_EMAIL,REVERT_SECOND_FACTOR_ADDITION:Zn.REVERT_SECOND_FACTOR_ADDITION,VERIFY_AND_CHANGE_EMAIL:Zn.VERIFY_AND_CHANGE_EMAIL,VERIFY_EMAIL:Zn.VERIFY_EMAIL}},EmailAuthProvider:nn,FacebookAuthProvider:nt,GithubAuthProvider:it,GoogleAuthProvider:rt,OAuthProvider:ur,SAMLAuthProvider:Ys,PhoneAuthProvider:au,PhoneMultiFactorGenerator:jf,RecaptchaVerifier:eE,TwitterAuthProvider:st,Auth:tc,AuthCredential:xr,Error:Ce}).setInstantiationMode("LAZY").setMultipleInstances(!1)),n.registerVersion(LT,MT)}nE(Ki);var rE=typeof globalThis<"u"?globalThis:typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{},k,cu=cu||{},N=rE||self;function eo(){}function Oo(n){var e=typeof n;return e=e!="object"?e:n?Array.isArray(n)?"array":e:"null",e=="array"||e=="object"&&typeof n.length=="number"}function Xi(n){var e=typeof n;return e=="object"&&n!=null||e=="function"}function iE(n){return Object.prototype.hasOwnProperty.call(n,Da)&&n[Da]||(n[Da]=++sE)}var Da="closure_uid_"+(1e9*Math.random()>>>0),sE=0;function oE(n,e,t){return n.call.apply(n.bind,arguments)}function aE(n,e,t){if(!n)throw Error();if(2<arguments.length){var r=Array.prototype.slice.call(arguments,2);return function(){var i=Array.prototype.slice.call(arguments);return Array.prototype.unshift.apply(i,r),n.apply(e,i)}}return function(){return n.apply(e,arguments)}}function Ne(n,e,t){return Function.prototype.bind&&Function.prototype.bind.toString().indexOf("native code")!=-1?Ne=oE:Ne=aE,Ne.apply(null,arguments)}function Is(n,e){var t=Array.prototype.slice.call(arguments,1);return function(){var r=t.slice();return r.push.apply(r,arguments),n.apply(this,r)}}function Se(n,e){function t(){}t.prototype=e.prototype,n.X=e.prototype,n.prototype=new t,n.prototype.constructor=n,n.Wb=function(r,i,s){for(var o=Array(arguments.length-2),a=2;a<arguments.length;a++)o[a-2]=arguments[a];return e.prototype[i].apply(r,o)}}function rn(){this.s=this.s,this.o=this.o}var cE=0;rn.prototype.s=!1;rn.prototype.na=function(){!this.s&&(this.s=!0,this.M(),cE!=0)&&iE(this)};rn.prototype.M=function(){if(this.o)for(;this.o.length;)this.o.shift()()};const Xf=Array.prototype.indexOf?function(n,e){return Array.prototype.indexOf.call(n,e,void 0)}:function(n,e){if(typeof n=="string")return typeof e!="string"||e.length!=1?-1:n.indexOf(e,0);for(let t=0;t<n.length;t++)if(t in n&&n[t]===e)return t;return-1};function uu(n){const e=n.length;if(0<e){const t=Array(e);for(let r=0;r<e;r++)t[r]=n[r];return t}return[]}function oh(n,e){for(let t=1;t<arguments.length;t++){const r=arguments[t];if(Oo(r)){const i=n.length||0,s=r.length||0;n.length=i+s;for(let o=0;o<s;o++)n[i+o]=r[o]}else n.push(r)}}function De(n,e){this.type=n,this.g=this.target=e,this.defaultPrevented=!1}De.prototype.h=function(){this.defaultPrevented=!0};var uE=function(){if(!N.addEventListener||!Object.defineProperty)return!1;var n=!1,e=Object.defineProperty({},"passive",{get:function(){n=!0}});try{N.addEventListener("test",eo,e),N.removeEventListener("test",eo,e)}catch{}return n}();function to(n){return/^[\s\xa0]*$/.test(n)}var ah=String.prototype.trim?function(n){return n.trim()}:function(n){return/^[\s\xa0]*([\s\S]*?)[\s\xa0]*$/.exec(n)[1]};function Pa(n,e){return n<e?-1:n>e?1:0}function Lo(){var n=N.navigator;return n&&(n=n.userAgent)?n:""}function ot(n){return Lo().indexOf(n)!=-1}function lu(n){return lu[" "](n),n}lu[" "]=eo;function lE(n){var e=fE;return Object.prototype.hasOwnProperty.call(e,9)?e[9]:e[9]=n(9)}var hE=ot("Opera"),yr=ot("Trident")||ot("MSIE"),Zf=ot("Edge"),nc=Zf||yr,ep=ot("Gecko")&&!(Lo().toLowerCase().indexOf("webkit")!=-1&&!ot("Edge"))&&!(ot("Trident")||ot("MSIE"))&&!ot("Edge"),dE=Lo().toLowerCase().indexOf("webkit")!=-1&&!ot("Edge");function tp(){var n=N.document;return n?n.documentMode:void 0}var no;e:{var xa="",Oa=function(){var n=Lo();if(ep)return/rv:([^\);]+)(\)|;)/.exec(n);if(Zf)return/Edge\/([\d\.]+)/.exec(n);if(yr)return/\b(?:MSIE|rv)[: ]([^\);]+)(\)|;)/.exec(n);if(dE)return/WebKit\/(\S+)/.exec(n);if(hE)return/(?:Version)[ \/]?(\S+)/.exec(n)}();if(Oa&&(xa=Oa?Oa[1]:""),yr){var La=tp();if(La!=null&&La>parseFloat(xa)){no=String(La);break e}}no=xa}var fE={};function pE(){return lE(function(){let n=0;const e=ah(String(no)).split("."),t=ah("9").split("."),r=Math.max(e.length,t.length);for(let o=0;n==0&&o<r;o++){var i=e[o]||"",s=t[o]||"";do{if(i=/(\d*)(\D*)(.*)/.exec(i)||["","","",""],s=/(\d*)(\D*)(.*)/.exec(s)||["","","",""],i[0].length==0&&s[0].length==0)break;n=Pa(i[1].length==0?0:parseInt(i[1],10),s[1].length==0?0:parseInt(s[1],10))||Pa(i[2].length==0,s[2].length==0)||Pa(i[2],s[2]),i=i[3],s=s[3]}while(n==0)}return 0<=n})}var rc;if(N.document&&yr){var ch=tp();rc=ch||parseInt(no,10)||void 0}else rc=void 0;var mE=rc;function Ri(n,e){if(De.call(this,n?n.type:""),this.relatedTarget=this.g=this.target=null,this.button=this.screenY=this.screenX=this.clientY=this.clientX=0,this.key="",this.metaKey=this.shiftKey=this.altKey=this.ctrlKey=!1,this.state=null,this.pointerId=0,this.pointerType="",this.i=null,n){var t=this.type=n.type,r=n.changedTouches&&n.changedTouches.length?n.changedTouches[0]:null;if(this.target=n.target||n.srcElement,this.g=e,e=n.relatedTarget){if(ep){e:{try{lu(e.nodeName);var i=!0;break e}catch{}i=!1}i||(e=null)}}else t=="mouseover"?e=n.fromElement:t=="mouseout"&&(e=n.toElement);this.relatedTarget=e,r?(this.clientX=r.clientX!==void 0?r.clientX:r.pageX,this.clientY=r.clientY!==void 0?r.clientY:r.pageY,this.screenX=r.screenX||0,this.screenY=r.screenY||0):(this.clientX=n.clientX!==void 0?n.clientX:n.pageX,this.clientY=n.clientY!==void 0?n.clientY:n.pageY,this.screenX=n.screenX||0,this.screenY=n.screenY||0),this.button=n.button,this.key=n.key||"",this.ctrlKey=n.ctrlKey,this.altKey=n.altKey,this.shiftKey=n.shiftKey,this.metaKey=n.metaKey,this.pointerId=n.pointerId||0,this.pointerType=typeof n.pointerType=="string"?n.pointerType:gE[n.pointerType]||"",this.state=n.state,this.i=n,n.defaultPrevented&&Ri.X.h.call(this)}}Se(Ri,De);var gE={2:"touch",3:"pen",4:"mouse"};Ri.prototype.h=function(){Ri.X.h.call(this);var n=this.i;n.preventDefault?n.preventDefault():n.returnValue=!1};var Zi="closure_listenable_"+(1e6*Math.random()|0),yE=0;function vE(n,e,t,r,i){this.listener=n,this.proxy=null,this.src=e,this.type=t,this.capture=!!r,this.ha=i,this.key=++yE,this.ba=this.ea=!1}function Mo(n){n.ba=!0,n.listener=null,n.proxy=null,n.src=null,n.ha=null}function hu(n,e,t){for(const r in n)e.call(t,n[r],r,n)}function np(n){const e={};for(const t in n)e[t]=n[t];return e}const uh="constructor hasOwnProperty isPrototypeOf propertyIsEnumerable toLocaleString toString valueOf".split(" ");function rp(n,e){let t,r;for(let i=1;i<arguments.length;i++){r=arguments[i];for(t in r)n[t]=r[t];for(let s=0;s<uh.length;s++)t=uh[s],Object.prototype.hasOwnProperty.call(r,t)&&(n[t]=r[t])}}function Uo(n){this.src=n,this.g={},this.h=0}Uo.prototype.add=function(n,e,t,r,i){var s=n.toString();n=this.g[s],n||(n=this.g[s]=[],this.h++);var o=sc(n,e,r,i);return-1<o?(e=n[o],t||(e.ea=!1)):(e=new vE(e,this.src,s,!!r,i),e.ea=t,n.push(e)),e};function ic(n,e){var t=e.type;if(t in n.g){var r=n.g[t],i=Xf(r,e),s;(s=0<=i)&&Array.prototype.splice.call(r,i,1),s&&(Mo(e),n.g[t].length==0&&(delete n.g[t],n.h--))}}function sc(n,e,t,r){for(var i=0;i<n.length;++i){var s=n[i];if(!s.ba&&s.listener==e&&s.capture==!!t&&s.ha==r)return i}return-1}var du="closure_lm_"+(1e6*Math.random()|0),Ma={};function ip(n,e,t,r,i){if(r&&r.once)return op(n,e,t,r,i);if(Array.isArray(e)){for(var s=0;s<e.length;s++)ip(n,e[s],t,r,i);return null}return t=mu(t),n&&n[Zi]?n.N(e,t,Xi(r)?!!r.capture:!!r,i):sp(n,e,t,!1,r,i)}function sp(n,e,t,r,i,s){if(!e)throw Error("Invalid event type");var o=Xi(i)?!!i.capture:!!i,a=pu(n);if(a||(n[du]=a=new Uo(n)),t=a.add(e,t,r,o,s),t.proxy)return t;if(r=wE(),t.proxy=r,r.src=n,r.listener=t,n.addEventListener)uE||(i=o),i===void 0&&(i=!1),n.addEventListener(e.toString(),r,i);else if(n.attachEvent)n.attachEvent(cp(e.toString()),r);else if(n.addListener&&n.removeListener)n.addListener(r);else throw Error("addEventListener and attachEvent are unavailable.");return t}function wE(){function n(t){return e.call(n.src,n.listener,t)}const e=_E;return n}function op(n,e,t,r,i){if(Array.isArray(e)){for(var s=0;s<e.length;s++)op(n,e[s],t,r,i);return null}return t=mu(t),n&&n[Zi]?n.O(e,t,Xi(r)?!!r.capture:!!r,i):sp(n,e,t,!0,r,i)}function ap(n,e,t,r,i){if(Array.isArray(e))for(var s=0;s<e.length;s++)ap(n,e[s],t,r,i);else r=Xi(r)?!!r.capture:!!r,t=mu(t),n&&n[Zi]?(n=n.i,e=String(e).toString(),e in n.g&&(s=n.g[e],t=sc(s,t,r,i),-1<t&&(Mo(s[t]),Array.prototype.splice.call(s,t,1),s.length==0&&(delete n.g[e],n.h--)))):n&&(n=pu(n))&&(e=n.g[e.toString()],n=-1,e&&(n=sc(e,t,r,i)),(t=-1<n?e[n]:null)&&fu(t))}function fu(n){if(typeof n!="number"&&n&&!n.ba){var e=n.src;if(e&&e[Zi])ic(e.i,n);else{var t=n.type,r=n.proxy;e.removeEventListener?e.removeEventListener(t,r,n.capture):e.detachEvent?e.detachEvent(cp(t),r):e.addListener&&e.removeListener&&e.removeListener(r),(t=pu(e))?(ic(t,n),t.h==0&&(t.src=null,e[du]=null)):Mo(n)}}}function cp(n){return n in Ma?Ma[n]:Ma[n]="on"+n}function _E(n,e){if(n.ba)n=!0;else{e=new Ri(e,this);var t=n.listener,r=n.ha||n.src;n.ea&&fu(n),n=t.call(r,e)}return n}function pu(n){return n=n[du],n instanceof Uo?n:null}var Ua="__closure_events_fn_"+(1e9*Math.random()>>>0);function mu(n){return typeof n=="function"?n:(n[Ua]||(n[Ua]=function(e){return n.handleEvent(e)}),n[Ua])}function ge(){rn.call(this),this.i=new Uo(this),this.P=this,this.I=null}Se(ge,rn);ge.prototype[Zi]=!0;ge.prototype.removeEventListener=function(n,e,t,r){ap(this,n,e,t,r)};function Te(n,e){var t,r=n.I;if(r)for(t=[];r;r=r.I)t.push(r);if(n=n.P,r=e.type||e,typeof e=="string")e=new De(e,n);else if(e instanceof De)e.target=e.target||n;else{var i=e;e=new De(r,n),rp(e,i)}if(i=!0,t)for(var s=t.length-1;0<=s;s--){var o=e.g=t[s];i=Ts(o,r,!0,e)&&i}if(o=e.g=n,i=Ts(o,r,!0,e)&&i,i=Ts(o,r,!1,e)&&i,t)for(s=0;s<t.length;s++)o=e.g=t[s],i=Ts(o,r,!1,e)&&i}ge.prototype.M=function(){if(ge.X.M.call(this),this.i){var n=this.i,e;for(e in n.g){for(var t=n.g[e],r=0;r<t.length;r++)Mo(t[r]);delete n.g[e],n.h--}}this.I=null};ge.prototype.N=function(n,e,t,r){return this.i.add(String(n),e,!1,t,r)};ge.prototype.O=function(n,e,t,r){return this.i.add(String(n),e,!0,t,r)};function Ts(n,e,t,r){if(e=n.i.g[String(e)],!e)return!0;e=e.concat();for(var i=!0,s=0;s<e.length;++s){var o=e[s];if(o&&!o.ba&&o.capture==t){var a=o.listener,c=o.ha||o.src;o.ea&&ic(n.i,o),i=a.call(c,r)!==!1&&i}}return i&&!r.defaultPrevented}var gu=N.JSON.stringify;function IE(){var n=hp;let e=null;return n.g&&(e=n.g,n.g=n.g.next,n.g||(n.h=null),e.next=null),e}class TE{constructor(){this.h=this.g=null}add(e,t){const r=up.get();r.set(e,t),this.h?this.h.next=r:this.g=r,this.h=r}}var up=new class{constructor(n,e){this.i=n,this.j=e,this.h=0,this.g=null}get(){let n;return 0<this.h?(this.h--,n=this.g,this.g=n.next,n.next=null):n=this.i(),n}}(()=>new EE,n=>n.reset());class EE{constructor(){this.next=this.g=this.h=null}set(e,t){this.h=e,this.g=t,this.next=null}reset(){this.next=this.g=this.h=null}}function bE(n){N.setTimeout(()=>{throw n},0)}function lp(n,e){oc||SE(),ac||(oc(),ac=!0),hp.add(n,e)}var oc;function SE(){var n=N.Promise.resolve(void 0);oc=function(){n.then(kE)}}var ac=!1,hp=new TE;function kE(){for(var n;n=IE();){try{n.h.call(n.g)}catch(t){bE(t)}var e=up;e.j(n),100>e.h&&(e.h++,n.next=e.g,e.g=n)}ac=!1}function Fo(n,e){ge.call(this),this.h=n||1,this.g=e||N,this.j=Ne(this.lb,this),this.l=Date.now()}Se(Fo,ge);k=Fo.prototype;k.ca=!1;k.R=null;k.lb=function(){if(this.ca){var n=Date.now()-this.l;0<n&&n<.8*this.h?this.R=this.g.setTimeout(this.j,this.h-n):(this.R&&(this.g.clearTimeout(this.R),this.R=null),Te(this,"tick"),this.ca&&(yu(this),this.start()))}};k.start=function(){this.ca=!0,this.R||(this.R=this.g.setTimeout(this.j,this.h),this.l=Date.now())};function yu(n){n.ca=!1,n.R&&(n.g.clearTimeout(n.R),n.R=null)}k.M=function(){Fo.X.M.call(this),yu(this),delete this.g};function vu(n,e,t){if(typeof n=="function")t&&(n=Ne(n,t));else if(n&&typeof n.handleEvent=="function")n=Ne(n.handleEvent,n);else throw Error("Invalid listener argument");return 2147483647<Number(e)?-1:N.setTimeout(n,e||0)}function dp(n){n.g=vu(()=>{n.g=null,n.i&&(n.i=!1,dp(n))},n.j);const e=n.h;n.h=null,n.m.apply(null,e)}class AE extends rn{constructor(e,t){super(),this.m=e,this.j=t,this.h=null,this.i=!1,this.g=null}l(e){this.h=arguments,this.g?this.i=!0:dp(this)}M(){super.M(),this.g&&(N.clearTimeout(this.g),this.g=null,this.i=!1,this.h=null)}}function Ci(n){rn.call(this),this.h=n,this.g={}}Se(Ci,rn);var lh=[];function fp(n,e,t,r){Array.isArray(t)||(t&&(lh[0]=t.toString()),t=lh);for(var i=0;i<t.length;i++){var s=ip(e,t[i],r||n.handleEvent,!1,n.h||n);if(!s)break;n.g[s.key]=s}}function pp(n){hu(n.g,function(e,t){this.g.hasOwnProperty(t)&&fu(e)},n),n.g={}}Ci.prototype.M=function(){Ci.X.M.call(this),pp(this)};Ci.prototype.handleEvent=function(){throw Error("EventHandler.handleEvent not implemented")};function Vo(){this.g=!0}Vo.prototype.Aa=function(){this.g=!1};function RE(n,e,t,r,i,s){n.info(function(){if(n.g)if(s)for(var o="",a=s.split("&"),c=0;c<a.length;c++){var u=a[c].split("=");if(1<u.length){var l=u[0];u=u[1];var h=l.split("_");o=2<=h.length&&h[1]=="type"?o+(l+"="+u+"&"):o+(l+"=redacted&")}}else o=null;else o=s;return"XMLHTTP REQ ("+r+") [attempt "+i+"]: "+e+`
`+t+`
`+o})}function CE(n,e,t,r,i,s,o){n.info(function(){return"XMLHTTP RESP ("+r+") [ attempt "+i+"]: "+e+`
`+t+`
`+s+" "+o})}function ar(n,e,t,r){n.info(function(){return"XMLHTTP TEXT ("+e+"): "+DE(n,t)+(r?" "+r:"")})}function NE(n,e){n.info(function(){return"TIMEOUT: "+e})}Vo.prototype.info=function(){};function DE(n,e){if(!n.g)return e;if(!e)return null;try{var t=JSON.parse(e);if(t){for(n=0;n<t.length;n++)if(Array.isArray(t[n])){var r=t[n];if(!(2>r.length)){var i=r[1];if(Array.isArray(i)&&!(1>i.length)){var s=i[0];if(s!="noop"&&s!="stop"&&s!="close")for(var o=1;o<i.length;o++)i[o]=""}}}}return gu(t)}catch{return e}}var Wn={},hh=null;function Bo(){return hh=hh||new ge}Wn.Pa="serverreachability";function mp(n){De.call(this,Wn.Pa,n)}Se(mp,De);function Ni(n){const e=Bo();Te(e,new mp(e))}Wn.STAT_EVENT="statevent";function gp(n,e){De.call(this,Wn.STAT_EVENT,n),this.stat=e}Se(gp,De);function Me(n){const e=Bo();Te(e,new gp(e,n))}Wn.Qa="timingevent";function yp(n,e){De.call(this,Wn.Qa,n),this.size=e}Se(yp,De);function es(n,e){if(typeof n!="function")throw Error("Fn must not be null and must be a function");return N.setTimeout(function(){n()},e)}var qo={NO_ERROR:0,mb:1,zb:2,yb:3,tb:4,xb:5,Ab:6,Ma:7,TIMEOUT:8,Db:9},vp={rb:"complete",Nb:"success",Na:"error",Ma:"abort",Fb:"ready",Gb:"readystatechange",TIMEOUT:"timeout",Bb:"incrementaldata",Eb:"progress",ub:"downloadprogress",Vb:"uploadprogress"};function wu(){}wu.prototype.h=null;function dh(n){return n.h||(n.h=n.i())}function wp(){}var ts={OPEN:"a",qb:"b",Na:"c",Cb:"d"};function _u(){De.call(this,"d")}Se(_u,De);function Iu(){De.call(this,"c")}Se(Iu,De);var cc;function $o(){}Se($o,wu);$o.prototype.g=function(){return new XMLHttpRequest};$o.prototype.i=function(){return{}};cc=new $o;function ns(n,e,t,r){this.l=n,this.j=e,this.m=t,this.U=r||1,this.S=new Ci(this),this.O=PE,n=nc?125:void 0,this.T=new Fo(n),this.H=null,this.i=!1,this.s=this.A=this.v=this.K=this.F=this.V=this.B=null,this.D=[],this.g=null,this.C=0,this.o=this.u=null,this.Y=-1,this.I=!1,this.N=0,this.L=null,this.$=this.J=this.Z=this.P=!1,this.h=new _p}function _p(){this.i=null,this.g="",this.h=!1}var PE=45e3,uc={},ro={};k=ns.prototype;k.setTimeout=function(n){this.O=n};function lc(n,e,t){n.K=1,n.v=jo(kt(e)),n.s=t,n.P=!0,Ip(n,null)}function Ip(n,e){n.F=Date.now(),rs(n),n.A=kt(n.v);var t=n.A,r=n.U;Array.isArray(r)||(r=[String(r)]),Cp(t.i,"t",r),n.C=0,t=n.l.H,n.h=new _p,n.g=Yp(n.l,t?e:null,!n.s),0<n.N&&(n.L=new AE(Ne(n.La,n,n.g),n.N)),fp(n.S,n.g,"readystatechange",n.ib),e=n.H?np(n.H):{},n.s?(n.u||(n.u="POST"),e["Content-Type"]="application/x-www-form-urlencoded",n.g.da(n.A,n.u,n.s,e)):(n.u="GET",n.g.da(n.A,n.u,null,e)),Ni(),RE(n.j,n.u,n.A,n.m,n.U,n.s)}k.ib=function(n){n=n.target;const e=this.L;e&&_t(n)==3?e.l():this.La(n)};k.La=function(n){try{if(n==this.g)e:{const l=_t(this.g);var e=this.g.Ea();const h=this.g.aa();if(!(3>l)&&(l!=3||nc||this.g&&(this.h.h||this.g.fa()||gh(this.g)))){this.I||l!=4||e==7||(e==8||0>=h?Ni(3):Ni(2)),zo(this);var t=this.g.aa();this.Y=t;t:if(Tp(this)){var r=gh(this.g);n="";var i=r.length,s=_t(this.g)==4;if(!this.h.i){if(typeof TextDecoder>"u"){In(this),di(this);var o="";break t}this.h.i=new N.TextDecoder}for(e=0;e<i;e++)this.h.h=!0,n+=this.h.i.decode(r[e],{stream:s&&e==i-1});r.splice(0,i),this.h.g+=n,this.C=0,o=this.h.g}else o=this.g.fa();if(this.i=t==200,CE(this.j,this.u,this.A,this.m,this.U,l,t),this.i){if(this.Z&&!this.J){t:{if(this.g){var a,c=this.g;if((a=c.g?c.g.getResponseHeader("X-HTTP-Initial-Response"):null)&&!to(a)){var u=a;break t}}u=null}if(t=u)ar(this.j,this.m,t,"Initial handshake response via X-HTTP-Initial-Response"),this.J=!0,hc(this,t);else{this.i=!1,this.o=3,Me(12),In(this),di(this);break e}}this.P?(Ep(this,l,o),nc&&this.i&&l==3&&(fp(this.S,this.T,"tick",this.hb),this.T.start())):(ar(this.j,this.m,o,null),hc(this,o)),l==4&&In(this),this.i&&!this.I&&(l==4?Kp(this.l,this):(this.i=!1,rs(this)))}else t==400&&0<o.indexOf("Unknown SID")?(this.o=3,Me(12)):(this.o=0,Me(13)),In(this),di(this)}}}catch{}finally{}};function Tp(n){return n.g?n.u=="GET"&&n.K!=2&&n.l.Da:!1}function Ep(n,e,t){let r=!0,i;for(;!n.I&&n.C<t.length;)if(i=xE(n,t),i==ro){e==4&&(n.o=4,Me(14),r=!1),ar(n.j,n.m,null,"[Incomplete Response]");break}else if(i==uc){n.o=4,Me(15),ar(n.j,n.m,t,"[Invalid Chunk]"),r=!1;break}else ar(n.j,n.m,i,null),hc(n,i);Tp(n)&&i!=ro&&i!=uc&&(n.h.g="",n.C=0),e!=4||t.length!=0||n.h.h||(n.o=1,Me(16),r=!1),n.i=n.i&&r,r?0<t.length&&!n.$&&(n.$=!0,e=n.l,e.g==n&&e.$&&!e.K&&(e.j.info("Great, no buffering proxy detected. Bytes received: "+t.length),Ru(e),e.K=!0,Me(11))):(ar(n.j,n.m,t,"[Invalid Chunked Response]"),In(n),di(n))}k.hb=function(){if(this.g){var n=_t(this.g),e=this.g.fa();this.C<e.length&&(zo(this),Ep(this,n,e),this.i&&n!=4&&rs(this))}};function xE(n,e){var t=n.C,r=e.indexOf(`
`,t);return r==-1?ro:(t=Number(e.substring(t,r)),isNaN(t)?uc:(r+=1,r+t>e.length?ro:(e=e.substr(r,t),n.C=r+t,e)))}k.cancel=function(){this.I=!0,In(this)};function rs(n){n.V=Date.now()+n.O,bp(n,n.O)}function bp(n,e){if(n.B!=null)throw Error("WatchDog timer not null");n.B=es(Ne(n.gb,n),e)}function zo(n){n.B&&(N.clearTimeout(n.B),n.B=null)}k.gb=function(){this.B=null;const n=Date.now();0<=n-this.V?(NE(this.j,this.A),this.K!=2&&(Ni(),Me(17)),In(this),this.o=2,di(this)):bp(this,this.V-n)};function di(n){n.l.G==0||n.I||Kp(n.l,n)}function In(n){zo(n);var e=n.L;e&&typeof e.na=="function"&&e.na(),n.L=null,yu(n.T),pp(n.S),n.g&&(e=n.g,n.g=null,e.abort(),e.na())}function hc(n,e){try{var t=n.l;if(t.G!=0&&(t.g==n||dc(t.h,n))){if(!n.J&&dc(t.h,n)&&t.G==3){try{var r=t.Fa.g.parse(e)}catch{r=null}if(Array.isArray(r)&&r.length==3){var i=r;if(i[0]==0){e:if(!t.u){if(t.g)if(t.g.F+3e3<n.F)oo(t),Wo(t);else break e;Au(t),Me(18)}}else t.Ba=i[1],0<t.Ba-t.T&&37500>i[2]&&t.L&&t.A==0&&!t.v&&(t.v=es(Ne(t.cb,t),6e3));if(1>=Pp(t.h)&&t.ja){try{t.ja()}catch{}t.ja=void 0}}else Tn(t,11)}else if((n.J||t.g==n)&&oo(t),!to(e))for(i=t.Fa.g.parse(e),e=0;e<i.length;e++){let u=i[e];if(t.T=u[0],u=u[1],t.G==2)if(u[0]=="c"){t.I=u[1],t.ka=u[2];const l=u[3];l!=null&&(t.ma=l,t.j.info("VER="+t.ma));const h=u[4];h!=null&&(t.Ca=h,t.j.info("SVER="+t.Ca));const d=u[5];d!=null&&typeof d=="number"&&0<d&&(r=1.5*d,t.J=r,t.j.info("backChannelRequestTimeoutMs_="+r)),r=t;const p=n.g;if(p){const g=p.g?p.g.getResponseHeader("X-Client-Wire-Protocol"):null;if(g){var s=r.h;s.g||g.indexOf("spdy")==-1&&g.indexOf("quic")==-1&&g.indexOf("h2")==-1||(s.j=s.l,s.g=new Set,s.h&&(Tu(s,s.h),s.h=null))}if(r.D){const _=p.g?p.g.getResponseHeader("X-HTTP-Session-Id"):null;_&&(r.za=_,H(r.F,r.D,_))}}t.G=3,t.l&&t.l.xa(),t.$&&(t.P=Date.now()-n.F,t.j.info("Handshake RTT: "+t.P+"ms")),r=t;var o=n;if(r.sa=Qp(r,r.H?r.ka:null,r.V),o.J){xp(r.h,o);var a=o,c=r.J;c&&a.setTimeout(c),a.B&&(zo(a),rs(a)),r.g=o}else jp(r);0<t.i.length&&Ho(t)}else u[0]!="stop"&&u[0]!="close"||Tn(t,7);else t.G==3&&(u[0]=="stop"||u[0]=="close"?u[0]=="stop"?Tn(t,7):ku(t):u[0]!="noop"&&t.l&&t.l.wa(u),t.A=0)}}Ni(4)}catch{}}function OE(n){if(n.W&&typeof n.W=="function")return n.W();if(typeof Map<"u"&&n instanceof Map||typeof Set<"u"&&n instanceof Set)return Array.from(n.values());if(typeof n=="string")return n.split("");if(Oo(n)){for(var e=[],t=n.length,r=0;r<t;r++)e.push(n[r]);return e}e=[],t=0;for(r in n)e[t++]=n[r];return e}function LE(n){if(n.oa&&typeof n.oa=="function")return n.oa();if(!n.W||typeof n.W!="function"){if(typeof Map<"u"&&n instanceof Map)return Array.from(n.keys());if(!(typeof Set<"u"&&n instanceof Set)){if(Oo(n)||typeof n=="string"){var e=[];n=n.length;for(var t=0;t<n;t++)e.push(t);return e}e=[],t=0;for(const r in n)e[t++]=r;return e}}}function Sp(n,e){if(n.forEach&&typeof n.forEach=="function")n.forEach(e,void 0);else if(Oo(n)||typeof n=="string")Array.prototype.forEach.call(n,e,void 0);else for(var t=LE(n),r=OE(n),i=r.length,s=0;s<i;s++)e.call(void 0,r[s],t&&t[s],n)}var kp=RegExp("^(?:([^:/?#.]+):)?(?://(?:([^\\\\/?#]*)@)?([^\\\\/?#]*?)(?::([0-9]+))?(?=[\\\\/?#]|$))?([^?#]+)?(?:\\?([^#]*))?(?:#([\\s\\S]*))?$");function ME(n,e){if(n){n=n.split("&");for(var t=0;t<n.length;t++){var r=n[t].indexOf("="),i=null;if(0<=r){var s=n[t].substring(0,r);i=n[t].substring(r+1)}else s=n[t];e(s,i?decodeURIComponent(i.replace(/\+/g," ")):"")}}}function Rn(n,e){if(this.g=this.s=this.j="",this.m=null,this.o=this.l="",this.h=!1,n instanceof Rn){this.h=e!==void 0?e:n.h,io(this,n.j),this.s=n.s,this.g=n.g,so(this,n.m),this.l=n.l,e=n.i;var t=new Di;t.i=e.i,e.g&&(t.g=new Map(e.g),t.h=e.h),fh(this,t),this.o=n.o}else n&&(t=String(n).match(kp))?(this.h=!!e,io(this,t[1]||"",!0),this.s=si(t[2]||""),this.g=si(t[3]||"",!0),so(this,t[4]),this.l=si(t[5]||"",!0),fh(this,t[6]||"",!0),this.o=si(t[7]||"")):(this.h=!!e,this.i=new Di(null,this.h))}Rn.prototype.toString=function(){var n=[],e=this.j;e&&n.push(oi(e,ph,!0),":");var t=this.g;return(t||e=="file")&&(n.push("//"),(e=this.s)&&n.push(oi(e,ph,!0),"@"),n.push(encodeURIComponent(String(t)).replace(/%25([0-9a-fA-F]{2})/g,"%$1")),t=this.m,t!=null&&n.push(":",String(t))),(t=this.l)&&(this.g&&t.charAt(0)!="/"&&n.push("/"),n.push(oi(t,t.charAt(0)=="/"?VE:FE,!0))),(t=this.i.toString())&&n.push("?",t),(t=this.o)&&n.push("#",oi(t,qE)),n.join("")};function kt(n){return new Rn(n)}function io(n,e,t){n.j=t?si(e,!0):e,n.j&&(n.j=n.j.replace(/:$/,""))}function so(n,e){if(e){if(e=Number(e),isNaN(e)||0>e)throw Error("Bad port number "+e);n.m=e}else n.m=null}function fh(n,e,t){e instanceof Di?(n.i=e,$E(n.i,n.h)):(t||(e=oi(e,BE)),n.i=new Di(e,n.h))}function H(n,e,t){n.i.set(e,t)}function jo(n){return H(n,"zx",Math.floor(2147483648*Math.random()).toString(36)+Math.abs(Math.floor(2147483648*Math.random())^Date.now()).toString(36)),n}function si(n,e){return n?e?decodeURI(n.replace(/%25/g,"%2525")):decodeURIComponent(n):""}function oi(n,e,t){return typeof n=="string"?(n=encodeURI(n).replace(e,UE),t&&(n=n.replace(/%25([0-9a-fA-F]{2})/g,"%$1")),n):null}function UE(n){return n=n.charCodeAt(0),"%"+(n>>4&15).toString(16)+(n&15).toString(16)}var ph=/[#\/\?@]/g,FE=/[#\?:]/g,VE=/[#\?]/g,BE=/[#\?@]/g,qE=/#/g;function Di(n,e){this.h=this.g=null,this.i=n||null,this.j=!!e}function sn(n){n.g||(n.g=new Map,n.h=0,n.i&&ME(n.i,function(e,t){n.add(decodeURIComponent(e.replace(/\+/g," ")),t)}))}k=Di.prototype;k.add=function(n,e){sn(this),this.i=null,n=Lr(this,n);var t=this.g.get(n);return t||this.g.set(n,t=[]),t.push(e),this.h+=1,this};function Ap(n,e){sn(n),e=Lr(n,e),n.g.has(e)&&(n.i=null,n.h-=n.g.get(e).length,n.g.delete(e))}function Rp(n,e){return sn(n),e=Lr(n,e),n.g.has(e)}k.forEach=function(n,e){sn(this),this.g.forEach(function(t,r){t.forEach(function(i){n.call(e,i,r,this)},this)},this)};k.oa=function(){sn(this);const n=Array.from(this.g.values()),e=Array.from(this.g.keys()),t=[];for(let r=0;r<e.length;r++){const i=n[r];for(let s=0;s<i.length;s++)t.push(e[r])}return t};k.W=function(n){sn(this);let e=[];if(typeof n=="string")Rp(this,n)&&(e=e.concat(this.g.get(Lr(this,n))));else{n=Array.from(this.g.values());for(let t=0;t<n.length;t++)e=e.concat(n[t])}return e};k.set=function(n,e){return sn(this),this.i=null,n=Lr(this,n),Rp(this,n)&&(this.h-=this.g.get(n).length),this.g.set(n,[e]),this.h+=1,this};k.get=function(n,e){return n?(n=this.W(n),0<n.length?String(n[0]):e):e};function Cp(n,e,t){Ap(n,e),0<t.length&&(n.i=null,n.g.set(Lr(n,e),uu(t)),n.h+=t.length)}k.toString=function(){if(this.i)return this.i;if(!this.g)return"";const n=[],e=Array.from(this.g.keys());for(var t=0;t<e.length;t++){var r=e[t];const s=encodeURIComponent(String(r)),o=this.W(r);for(r=0;r<o.length;r++){var i=s;o[r]!==""&&(i+="="+encodeURIComponent(String(o[r]))),n.push(i)}}return this.i=n.join("&")};function Lr(n,e){return e=String(e),n.j&&(e=e.toLowerCase()),e}function $E(n,e){e&&!n.j&&(sn(n),n.i=null,n.g.forEach(function(t,r){var i=r.toLowerCase();r!=i&&(Ap(this,r),Cp(this,i,t))},n)),n.j=e}var zE=class{constructor(n,e){this.h=n,this.g=e}};function Np(n){this.l=n||jE,N.PerformanceNavigationTiming?(n=N.performance.getEntriesByType("navigation"),n=0<n.length&&(n[0].nextHopProtocol=="hq"||n[0].nextHopProtocol=="h2")):n=!!(N.g&&N.g.Ga&&N.g.Ga()&&N.g.Ga().$b),this.j=n?this.l:1,this.g=null,1<this.j&&(this.g=new Set),this.h=null,this.i=[]}var jE=10;function Dp(n){return n.h?!0:n.g?n.g.size>=n.j:!1}function Pp(n){return n.h?1:n.g?n.g.size:0}function dc(n,e){return n.h?n.h==e:n.g?n.g.has(e):!1}function Tu(n,e){n.g?n.g.add(e):n.h=e}function xp(n,e){n.h&&n.h==e?n.h=null:n.g&&n.g.has(e)&&n.g.delete(e)}Np.prototype.cancel=function(){if(this.i=Op(this),this.h)this.h.cancel(),this.h=null;else if(this.g&&this.g.size!==0){for(const n of this.g.values())n.cancel();this.g.clear()}};function Op(n){if(n.h!=null)return n.i.concat(n.h.D);if(n.g!=null&&n.g.size!==0){let e=n.i;for(const t of n.g.values())e=e.concat(t.D);return e}return uu(n.i)}function Eu(){}Eu.prototype.stringify=function(n){return N.JSON.stringify(n,void 0)};Eu.prototype.parse=function(n){return N.JSON.parse(n,void 0)};function GE(){this.g=new Eu}function KE(n,e,t){const r=t||"";try{Sp(n,function(i,s){let o=i;Xi(i)&&(o=gu(i)),e.push(r+s+"="+encodeURIComponent(o))})}catch(i){throw e.push(r+"type="+encodeURIComponent("_badmap")),i}}function WE(n,e){const t=new Vo;if(N.Image){const r=new Image;r.onload=Is(Es,t,r,"TestLoadImage: loaded",!0,e),r.onerror=Is(Es,t,r,"TestLoadImage: error",!1,e),r.onabort=Is(Es,t,r,"TestLoadImage: abort",!1,e),r.ontimeout=Is(Es,t,r,"TestLoadImage: timeout",!1,e),N.setTimeout(function(){r.ontimeout&&r.ontimeout()},1e4),r.src=n}else e(!1)}function Es(n,e,t,r,i){try{e.onload=null,e.onerror=null,e.onabort=null,e.ontimeout=null,i(r)}catch{}}function is(n){this.l=n.ac||null,this.j=n.jb||!1}Se(is,wu);is.prototype.g=function(){return new Go(this.l,this.j)};is.prototype.i=function(n){return function(){return n}}({});function Go(n,e){ge.call(this),this.D=n,this.u=e,this.m=void 0,this.readyState=bu,this.status=0,this.responseType=this.responseText=this.response=this.statusText="",this.onreadystatechange=null,this.v=new Headers,this.h=null,this.C="GET",this.B="",this.g=!1,this.A=this.j=this.l=null}Se(Go,ge);var bu=0;k=Go.prototype;k.open=function(n,e){if(this.readyState!=bu)throw this.abort(),Error("Error reopening a connection");this.C=n,this.B=e,this.readyState=1,Pi(this)};k.send=function(n){if(this.readyState!=1)throw this.abort(),Error("need to call open() first. ");this.g=!0;const e={headers:this.v,method:this.C,credentials:this.m,cache:void 0};n&&(e.body=n),(this.D||N).fetch(new Request(this.B,e)).then(this.Wa.bind(this),this.ga.bind(this))};k.abort=function(){this.response=this.responseText="",this.v=new Headers,this.status=0,this.j&&this.j.cancel("Request was aborted.").catch(()=>{}),1<=this.readyState&&this.g&&this.readyState!=4&&(this.g=!1,ss(this)),this.readyState=bu};k.Wa=function(n){if(this.g&&(this.l=n,this.h||(this.status=this.l.status,this.statusText=this.l.statusText,this.h=n.headers,this.readyState=2,Pi(this)),this.g&&(this.readyState=3,Pi(this),this.g)))if(this.responseType==="arraybuffer")n.arrayBuffer().then(this.Ua.bind(this),this.ga.bind(this));else if(typeof N.ReadableStream<"u"&&"body"in n){if(this.j=n.body.getReader(),this.u){if(this.responseType)throw Error('responseType must be empty for "streamBinaryChunks" mode responses.');this.response=[]}else this.response=this.responseText="",this.A=new TextDecoder;Lp(this)}else n.text().then(this.Va.bind(this),this.ga.bind(this))};function Lp(n){n.j.read().then(n.Ta.bind(n)).catch(n.ga.bind(n))}k.Ta=function(n){if(this.g){if(this.u&&n.value)this.response.push(n.value);else if(!this.u){var e=n.value?n.value:new Uint8Array(0);(e=this.A.decode(e,{stream:!n.done}))&&(this.response=this.responseText+=e)}n.done?ss(this):Pi(this),this.readyState==3&&Lp(this)}};k.Va=function(n){this.g&&(this.response=this.responseText=n,ss(this))};k.Ua=function(n){this.g&&(this.response=n,ss(this))};k.ga=function(){this.g&&ss(this)};function ss(n){n.readyState=4,n.l=null,n.j=null,n.A=null,Pi(n)}k.setRequestHeader=function(n,e){this.v.append(n,e)};k.getResponseHeader=function(n){return this.h&&this.h.get(n.toLowerCase())||""};k.getAllResponseHeaders=function(){if(!this.h)return"";const n=[],e=this.h.entries();for(var t=e.next();!t.done;)t=t.value,n.push(t[0]+": "+t[1]),t=e.next();return n.join(`\r
`)};function Pi(n){n.onreadystatechange&&n.onreadystatechange.call(n)}Object.defineProperty(Go.prototype,"withCredentials",{get:function(){return this.m==="include"},set:function(n){this.m=n?"include":"same-origin"}});var HE=N.JSON.parse;function ee(n){ge.call(this),this.headers=new Map,this.u=n||null,this.h=!1,this.C=this.g=null,this.H="",this.m=0,this.j="",this.l=this.F=this.v=this.D=!1,this.B=0,this.A=null,this.J=Mp,this.K=this.L=!1}Se(ee,ge);var Mp="",QE=/^https?$/i,YE=["POST","PUT"];k=ee.prototype;k.Ka=function(n){this.L=n};k.da=function(n,e,t,r){if(this.g)throw Error("[goog.net.XhrIo] Object is active with another request="+this.H+"; newUri="+n);e=e?e.toUpperCase():"GET",this.H=n,this.j="",this.m=0,this.D=!1,this.h=!0,this.g=this.u?this.u.g():cc.g(),this.C=this.u?dh(this.u):dh(cc),this.g.onreadystatechange=Ne(this.Ha,this);try{this.F=!0,this.g.open(e,String(n),!0),this.F=!1}catch(s){mh(this,s);return}if(n=t||"",t=new Map(this.headers),r)if(Object.getPrototypeOf(r)===Object.prototype)for(var i in r)t.set(i,r[i]);else if(typeof r.keys=="function"&&typeof r.get=="function")for(const s of r.keys())t.set(s,r.get(s));else throw Error("Unknown input type for opt_headers: "+String(r));r=Array.from(t.keys()).find(s=>s.toLowerCase()=="content-type"),i=N.FormData&&n instanceof N.FormData,!(0<=Xf(YE,e))||r||i||t.set("Content-Type","application/x-www-form-urlencoded;charset=utf-8");for(const[s,o]of t)this.g.setRequestHeader(s,o);this.J&&(this.g.responseType=this.J),"withCredentials"in this.g&&this.g.withCredentials!==this.L&&(this.g.withCredentials=this.L);try{Vp(this),0<this.B&&((this.K=JE(this.g))?(this.g.timeout=this.B,this.g.ontimeout=Ne(this.qa,this)):this.A=vu(this.qa,this.B,this)),this.v=!0,this.g.send(n),this.v=!1}catch(s){mh(this,s)}};function JE(n){return yr&&pE()&&typeof n.timeout=="number"&&n.ontimeout!==void 0}k.qa=function(){typeof cu<"u"&&this.g&&(this.j="Timed out after "+this.B+"ms, aborting",this.m=8,Te(this,"timeout"),this.abort(8))};function mh(n,e){n.h=!1,n.g&&(n.l=!0,n.g.abort(),n.l=!1),n.j=e,n.m=5,Up(n),Ko(n)}function Up(n){n.D||(n.D=!0,Te(n,"complete"),Te(n,"error"))}k.abort=function(n){this.g&&this.h&&(this.h=!1,this.l=!0,this.g.abort(),this.l=!1,this.m=n||7,Te(this,"complete"),Te(this,"abort"),Ko(this))};k.M=function(){this.g&&(this.h&&(this.h=!1,this.l=!0,this.g.abort(),this.l=!1),Ko(this,!0)),ee.X.M.call(this)};k.Ha=function(){this.s||(this.F||this.v||this.l?Fp(this):this.fb())};k.fb=function(){Fp(this)};function Fp(n){if(n.h&&typeof cu<"u"&&(!n.C[1]||_t(n)!=4||n.aa()!=2)){if(n.v&&_t(n)==4)vu(n.Ha,0,n);else if(Te(n,"readystatechange"),_t(n)==4){n.h=!1;try{const a=n.aa();e:switch(a){case 200:case 201:case 202:case 204:case 206:case 304:case 1223:var e=!0;break e;default:e=!1}var t;if(!(t=e)){var r;if(r=a===0){var i=String(n.H).match(kp)[1]||null;if(!i&&N.self&&N.self.location){var s=N.self.location.protocol;i=s.substr(0,s.length-1)}r=!QE.test(i?i.toLowerCase():"")}t=r}if(t)Te(n,"complete"),Te(n,"success");else{n.m=6;try{var o=2<_t(n)?n.g.statusText:""}catch{o=""}n.j=o+" ["+n.aa()+"]",Up(n)}}finally{Ko(n)}}}}function Ko(n,e){if(n.g){Vp(n);const t=n.g,r=n.C[0]?eo:null;n.g=null,n.C=null,e||Te(n,"ready");try{t.onreadystatechange=r}catch{}}}function Vp(n){n.g&&n.K&&(n.g.ontimeout=null),n.A&&(N.clearTimeout(n.A),n.A=null)}function _t(n){return n.g?n.g.readyState:0}k.aa=function(){try{return 2<_t(this)?this.g.status:-1}catch{return-1}};k.fa=function(){try{return this.g?this.g.responseText:""}catch{return""}};k.Sa=function(n){if(this.g){var e=this.g.responseText;return n&&e.indexOf(n)==0&&(e=e.substring(n.length)),HE(e)}};function gh(n){try{if(!n.g)return null;if("response"in n.g)return n.g.response;switch(n.J){case Mp:case"text":return n.g.responseText;case"arraybuffer":if("mozResponseArrayBuffer"in n.g)return n.g.mozResponseArrayBuffer}return null}catch{return null}}k.Ea=function(){return this.m};k.Oa=function(){return typeof this.j=="string"?this.j:String(this.j)};function Bp(n){let e="";return hu(n,function(t,r){e+=r,e+=":",e+=t,e+=`\r
`}),e}function Su(n,e,t){e:{for(r in t){var r=!1;break e}r=!0}r||(t=Bp(t),typeof n=="string"?t!=null&&encodeURIComponent(String(t)):H(n,e,t))}function Qr(n,e,t){return t&&t.internalChannelParams&&t.internalChannelParams[n]||e}function qp(n){this.Ca=0,this.i=[],this.j=new Vo,this.ka=this.sa=this.F=this.V=this.g=this.za=this.D=this.ia=this.o=this.S=this.s=null,this.ab=this.U=0,this.Za=Qr("failFast",!1,n),this.L=this.v=this.u=this.m=this.l=null,this.Y=!0,this.pa=this.Ba=this.T=-1,this.Z=this.A=this.C=0,this.Xa=Qr("baseRetryDelayMs",5e3,n),this.bb=Qr("retryDelaySeedMs",1e4,n),this.$a=Qr("forwardChannelMaxRetries",2,n),this.ta=Qr("forwardChannelRequestTimeoutMs",2e4,n),this.ra=n&&n.xmlHttpFactory||void 0,this.Da=n&&n.Zb||!1,this.J=void 0,this.H=n&&n.supportsCrossDomainXhr||!1,this.I="",this.h=new Np(n&&n.concurrentRequestLimit),this.Fa=new GE,this.O=n&&n.fastHandshake||!1,this.N=n&&n.encodeInitMessageHeaders||!1,this.O&&this.N&&(this.N=!1),this.Ya=n&&n.Xb||!1,n&&n.Aa&&this.j.Aa(),n&&n.forceLongPolling&&(this.Y=!1),this.$=!this.O&&this.Y&&n&&n.detectBufferingProxy||!1,this.ja=void 0,this.P=0,this.K=!1,this.la=this.B=null}k=qp.prototype;k.ma=8;k.G=1;function ku(n){if($p(n),n.G==3){var e=n.U++,t=kt(n.F);H(t,"SID",n.I),H(t,"RID",e),H(t,"TYPE","terminate"),os(n,t),e=new ns(n,n.j,e,void 0),e.K=2,e.v=jo(kt(t)),t=!1,N.navigator&&N.navigator.sendBeacon&&(t=N.navigator.sendBeacon(e.v.toString(),"")),!t&&N.Image&&(new Image().src=e.v,t=!0),t||(e.g=Yp(e.l,null),e.g.da(e.v)),e.F=Date.now(),rs(e)}Hp(n)}function Wo(n){n.g&&(Ru(n),n.g.cancel(),n.g=null)}function $p(n){Wo(n),n.u&&(N.clearTimeout(n.u),n.u=null),oo(n),n.h.cancel(),n.m&&(typeof n.m=="number"&&N.clearTimeout(n.m),n.m=null)}function Ho(n){Dp(n.h)||n.m||(n.m=!0,lp(n.Ja,n),n.C=0)}function XE(n,e){return Pp(n.h)>=n.h.j-(n.m?1:0)?!1:n.m?(n.i=e.D.concat(n.i),!0):n.G==1||n.G==2||n.C>=(n.Za?0:n.$a)?!1:(n.m=es(Ne(n.Ja,n,e),Wp(n,n.C)),n.C++,!0)}k.Ja=function(n){if(this.m)if(this.m=null,this.G==1){if(!n){this.U=Math.floor(1e5*Math.random()),n=this.U++;const i=new ns(this,this.j,n,void 0);let s=this.s;if(this.S&&(s?(s=np(s),rp(s,this.S)):s=this.S),this.o!==null||this.N||(i.H=s,s=null),this.O)e:{for(var e=0,t=0;t<this.i.length;t++){t:{var r=this.i[t];if("__data__"in r.g&&(r=r.g.__data__,typeof r=="string")){r=r.length;break t}r=void 0}if(r===void 0)break;if(e+=r,4096<e){e=t;break e}if(e===4096||t===this.i.length-1){e=t+1;break e}}e=1e3}else e=1e3;e=zp(this,i,e),t=kt(this.F),H(t,"RID",n),H(t,"CVER",22),this.D&&H(t,"X-HTTP-Session-Id",this.D),os(this,t),s&&(this.N?e="headers="+encodeURIComponent(String(Bp(s)))+"&"+e:this.o&&Su(t,this.o,s)),Tu(this.h,i),this.Ya&&H(t,"TYPE","init"),this.O?(H(t,"$req",e),H(t,"SID","null"),i.Z=!0,lc(i,t,null)):lc(i,t,e),this.G=2}}else this.G==3&&(n?yh(this,n):this.i.length==0||Dp(this.h)||yh(this))};function yh(n,e){var t;e?t=e.m:t=n.U++;const r=kt(n.F);H(r,"SID",n.I),H(r,"RID",t),H(r,"AID",n.T),os(n,r),n.o&&n.s&&Su(r,n.o,n.s),t=new ns(n,n.j,t,n.C+1),n.o===null&&(t.H=n.s),e&&(n.i=e.D.concat(n.i)),e=zp(n,t,1e3),t.setTimeout(Math.round(.5*n.ta)+Math.round(.5*n.ta*Math.random())),Tu(n.h,t),lc(t,r,e)}function os(n,e){n.ia&&hu(n.ia,function(t,r){H(e,r,t)}),n.l&&Sp({},function(t,r){H(e,r,t)})}function zp(n,e,t){t=Math.min(n.i.length,t);var r=n.l?Ne(n.l.Ra,n.l,n):null;e:{var i=n.i;let s=-1;for(;;){const o=["count="+t];s==-1?0<t?(s=i[0].h,o.push("ofs="+s)):s=0:o.push("ofs="+s);let a=!0;for(let c=0;c<t;c++){let u=i[c].h;const l=i[c].g;if(u-=s,0>u)s=Math.max(0,i[c].h-100),a=!1;else try{KE(l,o,"req"+u+"_")}catch{r&&r(l)}}if(a){r=o.join("&");break e}}}return n=n.i.splice(0,t),e.D=n,r}function jp(n){n.g||n.u||(n.Z=1,lp(n.Ia,n),n.A=0)}function Au(n){return n.g||n.u||3<=n.A?!1:(n.Z++,n.u=es(Ne(n.Ia,n),Wp(n,n.A)),n.A++,!0)}k.Ia=function(){if(this.u=null,Gp(this),this.$&&!(this.K||this.g==null||0>=this.P)){var n=2*this.P;this.j.info("BP detection timer enabled: "+n),this.B=es(Ne(this.eb,this),n)}};k.eb=function(){this.B&&(this.B=null,this.j.info("BP detection timeout reached."),this.j.info("Buffering proxy detected and switch to long-polling!"),this.L=!1,this.K=!0,Me(10),Wo(this),Gp(this))};function Ru(n){n.B!=null&&(N.clearTimeout(n.B),n.B=null)}function Gp(n){n.g=new ns(n,n.j,"rpc",n.Z),n.o===null&&(n.g.H=n.s),n.g.N=0;var e=kt(n.sa);H(e,"RID","rpc"),H(e,"SID",n.I),H(e,"CI",n.L?"0":"1"),H(e,"AID",n.T),H(e,"TYPE","xmlhttp"),os(n,e),n.o&&n.s&&Su(e,n.o,n.s),n.J&&n.g.setTimeout(n.J);var t=n.g;n=n.ka,t.K=1,t.v=jo(kt(e)),t.s=null,t.P=!0,Ip(t,n)}k.cb=function(){this.v!=null&&(this.v=null,Wo(this),Au(this),Me(19))};function oo(n){n.v!=null&&(N.clearTimeout(n.v),n.v=null)}function Kp(n,e){var t=null;if(n.g==e){oo(n),Ru(n),n.g=null;var r=2}else if(dc(n.h,e))t=e.D,xp(n.h,e),r=1;else return;if(n.G!=0){if(n.pa=e.Y,e.i)if(r==1){t=e.s?e.s.length:0,e=Date.now()-e.F;var i=n.C;r=Bo(),Te(r,new yp(r,t)),Ho(n)}else jp(n);else if(i=e.o,i==3||i==0&&0<n.pa||!(r==1&&XE(n,e)||r==2&&Au(n)))switch(t&&0<t.length&&(e=n.h,e.i=e.i.concat(t)),i){case 1:Tn(n,5);break;case 4:Tn(n,10);break;case 3:Tn(n,6);break;default:Tn(n,2)}}}function Wp(n,e){let t=n.Xa+Math.floor(Math.random()*n.bb);return n.l||(t*=2),t*e}function Tn(n,e){if(n.j.info("Error code "+e),e==2){var t=null;n.l&&(t=null);var r=Ne(n.kb,n);t||(t=new Rn("//www.google.com/images/cleardot.gif"),N.location&&N.location.protocol=="http"||io(t,"https"),jo(t)),WE(t.toString(),r)}else Me(2);n.G=0,n.l&&n.l.va(e),Hp(n),$p(n)}k.kb=function(n){n?(this.j.info("Successfully pinged google.com"),Me(2)):(this.j.info("Failed to ping google.com"),Me(1))};function Hp(n){if(n.G=0,n.la=[],n.l){const e=Op(n.h);(e.length!=0||n.i.length!=0)&&(oh(n.la,e),oh(n.la,n.i),n.h.i.length=0,uu(n.i),n.i.length=0),n.l.ua()}}function Qp(n,e,t){var r=t instanceof Rn?kt(t):new Rn(t,void 0);if(r.g!="")e&&(r.g=e+"."+r.g),so(r,r.m);else{var i=N.location;r=i.protocol,e=e?e+"."+i.hostname:i.hostname,i=+i.port;var s=new Rn(null,void 0);r&&io(s,r),e&&(s.g=e),i&&so(s,i),t&&(s.l=t),r=s}return t=n.D,e=n.za,t&&e&&H(r,t,e),H(r,"VER",n.ma),os(n,r),r}function Yp(n,e,t){if(e&&!n.H)throw Error("Can't create secondary domain capable XhrIo object.");return e=t&&n.Da&&!n.ra?new ee(new is({jb:!0})):new ee(n.ra),e.Ka(n.H),e}function Jp(){}k=Jp.prototype;k.xa=function(){};k.wa=function(){};k.va=function(){};k.ua=function(){};k.Ra=function(){};function ao(){if(yr&&!(10<=Number(mE)))throw Error("Environmental error: no available transport.")}ao.prototype.g=function(n,e){return new Ke(n,e)};function Ke(n,e){ge.call(this),this.g=new qp(e),this.l=n,this.h=e&&e.messageUrlParams||null,n=e&&e.messageHeaders||null,e&&e.clientProtocolHeaderRequired&&(n?n["X-Client-Protocol"]="webchannel":n={"X-Client-Protocol":"webchannel"}),this.g.s=n,n=e&&e.initMessageHeaders||null,e&&e.messageContentType&&(n?n["X-WebChannel-Content-Type"]=e.messageContentType:n={"X-WebChannel-Content-Type":e.messageContentType}),e&&e.ya&&(n?n["X-WebChannel-Client-Profile"]=e.ya:n={"X-WebChannel-Client-Profile":e.ya}),this.g.S=n,(n=e&&e.Yb)&&!to(n)&&(this.g.o=n),this.A=e&&e.supportsCrossDomainXhr||!1,this.v=e&&e.sendRawJson||!1,(e=e&&e.httpSessionIdParam)&&!to(e)&&(this.g.D=e,n=this.h,n!==null&&e in n&&(n=this.h,e in n&&delete n[e])),this.j=new Mr(this)}Se(Ke,ge);Ke.prototype.m=function(){this.g.l=this.j,this.A&&(this.g.H=!0);var n=this.g,e=this.l,t=this.h||void 0;Me(0),n.V=e,n.ia=t||{},n.L=n.Y,n.F=Qp(n,null,n.V),Ho(n)};Ke.prototype.close=function(){ku(this.g)};Ke.prototype.u=function(n){var e=this.g;if(typeof n=="string"){var t={};t.__data__=n,n=t}else this.v&&(t={},t.__data__=gu(n),n=t);e.i.push(new zE(e.ab++,n)),e.G==3&&Ho(e)};Ke.prototype.M=function(){this.g.l=null,delete this.j,ku(this.g),delete this.g,Ke.X.M.call(this)};function Xp(n){_u.call(this);var e=n.__sm__;if(e){e:{for(const t in e){n=t;break e}n=void 0}(this.i=n)&&(n=this.i,e=e!==null&&n in e?e[n]:void 0),this.data=e}else this.data=n}Se(Xp,_u);function Zp(){Iu.call(this),this.status=1}Se(Zp,Iu);function Mr(n){this.g=n}Se(Mr,Jp);Mr.prototype.xa=function(){Te(this.g,"a")};Mr.prototype.wa=function(n){Te(this.g,new Xp(n))};Mr.prototype.va=function(n){Te(this.g,new Zp)};Mr.prototype.ua=function(){Te(this.g,"b")};ao.prototype.createWebChannel=ao.prototype.g;Ke.prototype.send=Ke.prototype.u;Ke.prototype.open=Ke.prototype.m;Ke.prototype.close=Ke.prototype.close;qo.NO_ERROR=0;qo.TIMEOUT=8;qo.HTTP_ERROR=6;vp.COMPLETE="complete";wp.EventType=ts;ts.OPEN="a";ts.CLOSE="b";ts.ERROR="c";ts.MESSAGE="d";ge.prototype.listen=ge.prototype.N;ee.prototype.listenOnce=ee.prototype.O;ee.prototype.getLastError=ee.prototype.Oa;ee.prototype.getLastErrorCode=ee.prototype.Ea;ee.prototype.getStatus=ee.prototype.aa;ee.prototype.getResponseJson=ee.prototype.Sa;ee.prototype.getResponseText=ee.prototype.fa;ee.prototype.send=ee.prototype.da;ee.prototype.setWithCredentials=ee.prototype.Ka;var ZE=function(){return new ao},eb=function(){return Bo()},Fa=qo,tb=vp,nb=Wn,vh={sb:0,vb:1,wb:2,Pb:3,Ub:4,Rb:5,Sb:6,Qb:7,Ob:8,Tb:9,PROXY:10,NOPROXY:11,Mb:12,Ib:13,Jb:14,Hb:15,Kb:16,Lb:17,ob:18,nb:19,pb:20},rb=is,bs=wp,ib=ee;const wh="@firebase/firestore";/**
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
 */class pe{constructor(e){this.uid=e}isAuthenticated(){return this.uid!=null}toKey(){return this.isAuthenticated()?"uid:"+this.uid:"anonymous-user"}isEqual(e){return e.uid===this.uid}}pe.UNAUTHENTICATED=new pe(null),pe.GOOGLE_CREDENTIALS=new pe("google-credentials-uid"),pe.FIRST_PARTY=new pe("first-party-uid"),pe.MOCK_USER=new pe("mock-user");/**
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
 */let Ur="9.20.0";/**
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
 */const Ht=new bo("@firebase/firestore");function fc(){return Ht.logLevel}function sb(n){Ht.setLogLevel(n)}function v(n,...e){if(Ht.logLevel<=U.DEBUG){const t=e.map(Cu);Ht.debug(`Firestore (${Ur}): ${n}`,...t)}}function re(n,...e){if(Ht.logLevel<=U.ERROR){const t=e.map(Cu);Ht.error(`Firestore (${Ur}): ${n}`,...t)}}function At(n,...e){if(Ht.logLevel<=U.WARN){const t=e.map(Cu);Ht.warn(`Firestore (${Ur}): ${n}`,...t)}}function Cu(n){if(typeof n=="string")return n;try{return e=n,JSON.stringify(e)}catch{return n}/**
* @license
* Copyright 2020 Google LLC
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
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
 */function b(n="Unexpected state"){const e=`FIRESTORE (${Ur}) INTERNAL ASSERTION FAILED: `+n;throw re(e),new Error(e)}function A(n,e){n||b()}function ob(n,e){n||b()}function T(n,e){return n}/**
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
 */const m={OK:"ok",CANCELLED:"cancelled",UNKNOWN:"unknown",INVALID_ARGUMENT:"invalid-argument",DEADLINE_EXCEEDED:"deadline-exceeded",NOT_FOUND:"not-found",ALREADY_EXISTS:"already-exists",PERMISSION_DENIED:"permission-denied",UNAUTHENTICATED:"unauthenticated",RESOURCE_EXHAUSTED:"resource-exhausted",FAILED_PRECONDITION:"failed-precondition",ABORTED:"aborted",OUT_OF_RANGE:"out-of-range",UNIMPLEMENTED:"unimplemented",INTERNAL:"internal",UNAVAILABLE:"unavailable",DATA_LOSS:"data-loss"};class y extends Ce{constructor(e,t){super(e,t),this.code=e,this.message=t,this.toString=()=>`${this.name}: [code=${this.code}]: ${this.message}`}}/**
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
 */class me{constructor(){this.promise=new Promise((e,t)=>{this.resolve=e,this.reject=t})}}/**
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
 */class em{constructor(e,t){this.user=t,this.type="OAuth",this.headers=new Map,this.headers.set("Authorization",`Bearer ${e}`)}}class ab{getToken(){return Promise.resolve(null)}invalidateToken(){}start(e,t){e.enqueueRetryable(()=>t(pe.UNAUTHENTICATED))}shutdown(){}}class cb{constructor(e){this.token=e,this.changeListener=null}getToken(){return Promise.resolve(this.token)}invalidateToken(){}start(e,t){this.changeListener=t,e.enqueueRetryable(()=>t(this.token.user))}shutdown(){this.changeListener=null}}class ub{constructor(e){this.t=e,this.currentUser=pe.UNAUTHENTICATED,this.i=0,this.forceRefresh=!1,this.auth=null}start(e,t){let r=this.i;const i=c=>this.i!==r?(r=this.i,t(c)):Promise.resolve();let s=new me;this.o=()=>{this.i++,this.currentUser=this.u(),s.resolve(),s=new me,e.enqueueRetryable(()=>i(this.currentUser))};const o=()=>{const c=s;e.enqueueRetryable(async()=>{await c.promise,await i(this.currentUser)})},a=c=>{v("FirebaseAuthCredentialsProvider","Auth detected"),this.auth=c,this.auth.addAuthTokenListener(this.o),o()};this.t.onInit(c=>a(c)),setTimeout(()=>{if(!this.auth){const c=this.t.getImmediate({optional:!0});c?a(c):(v("FirebaseAuthCredentialsProvider","Auth not yet detected"),s.resolve(),s=new me)}},0),o()}getToken(){const e=this.i,t=this.forceRefresh;return this.forceRefresh=!1,this.auth?this.auth.getToken(t).then(r=>this.i!==e?(v("FirebaseAuthCredentialsProvider","getToken aborted due to token change."),this.getToken()):r?(A(typeof r.accessToken=="string"),new em(r.accessToken,this.currentUser)):null):Promise.resolve(null)}invalidateToken(){this.forceRefresh=!0}shutdown(){this.auth&&this.auth.removeAuthTokenListener(this.o)}u(){const e=this.auth&&this.auth.getUid();return A(e===null||typeof e=="string"),new pe(e)}}class lb{constructor(e,t,r){this.h=e,this.l=t,this.m=r,this.type="FirstParty",this.user=pe.FIRST_PARTY,this.g=new Map}p(){return this.m?this.m():null}get headers(){this.g.set("X-Goog-AuthUser",this.h);const e=this.p();return e&&this.g.set("Authorization",e),this.l&&this.g.set("X-Goog-Iam-Authorization-Token",this.l),this.g}}class hb{constructor(e,t,r){this.h=e,this.l=t,this.m=r}getToken(){return Promise.resolve(new lb(this.h,this.l,this.m))}start(e,t){e.enqueueRetryable(()=>t(pe.FIRST_PARTY))}shutdown(){}invalidateToken(){}}class db{constructor(e){this.value=e,this.type="AppCheck",this.headers=new Map,e&&e.length>0&&this.headers.set("x-firebase-appcheck",this.value)}}class fb{constructor(e){this.I=e,this.forceRefresh=!1,this.appCheck=null,this.T=null}start(e,t){const r=s=>{s.error!=null&&v("FirebaseAppCheckTokenProvider",`Error getting App Check token; using placeholder token instead. Error: ${s.error.message}`);const o=s.token!==this.T;return this.T=s.token,v("FirebaseAppCheckTokenProvider",`Received ${o?"new":"existing"} token.`),o?t(s.token):Promise.resolve()};this.o=s=>{e.enqueueRetryable(()=>r(s))};const i=s=>{v("FirebaseAppCheckTokenProvider","AppCheck detected"),this.appCheck=s,this.appCheck.addTokenListener(this.o)};this.I.onInit(s=>i(s)),setTimeout(()=>{if(!this.appCheck){const s=this.I.getImmediate({optional:!0});s?i(s):v("FirebaseAppCheckTokenProvider","AppCheck not yet detected")}},0)}getToken(){const e=this.forceRefresh;return this.forceRefresh=!1,this.appCheck?this.appCheck.getToken(e).then(t=>t?(A(typeof t.token=="string"),this.T=t.token,new db(t.token)):null):Promise.resolve(null)}invalidateToken(){this.forceRefresh=!0}shutdown(){this.appCheck&&this.appCheck.removeTokenListener(this.o)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function pb(n){const e=typeof self<"u"&&(self.crypto||self.msCrypto),t=new Uint8Array(n);if(e&&typeof e.getRandomValues=="function")e.getRandomValues(t);else for(let r=0;r<n;r++)t[r]=Math.floor(256*Math.random());return t}/**
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
 */class tm{static A(){const e="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",t=Math.floor(256/e.length)*e.length;let r="";for(;r.length<20;){const i=pb(40);for(let s=0;s<i.length;++s)r.length<20&&i[s]<t&&(r+=e.charAt(i[s]%e.length))}return r}}function D(n,e){return n<e?-1:n>e?1:0}function vr(n,e,t){return n.length===e.length&&n.every((r,i)=>t(r,e[i]))}function nm(n){return n+"\0"}/**
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
 */class Y{constructor(e,t){if(this.seconds=e,this.nanoseconds=t,t<0)throw new y(m.INVALID_ARGUMENT,"Timestamp nanoseconds out of range: "+t);if(t>=1e9)throw new y(m.INVALID_ARGUMENT,"Timestamp nanoseconds out of range: "+t);if(e<-62135596800)throw new y(m.INVALID_ARGUMENT,"Timestamp seconds out of range: "+e);if(e>=253402300800)throw new y(m.INVALID_ARGUMENT,"Timestamp seconds out of range: "+e)}static now(){return Y.fromMillis(Date.now())}static fromDate(e){return Y.fromMillis(e.getTime())}static fromMillis(e){const t=Math.floor(e/1e3),r=Math.floor(1e6*(e-1e3*t));return new Y(t,r)}toDate(){return new Date(this.toMillis())}toMillis(){return 1e3*this.seconds+this.nanoseconds/1e6}_compareTo(e){return this.seconds===e.seconds?D(this.nanoseconds,e.nanoseconds):D(this.seconds,e.seconds)}isEqual(e){return e.seconds===this.seconds&&e.nanoseconds===this.nanoseconds}toString(){return"Timestamp(seconds="+this.seconds+", nanoseconds="+this.nanoseconds+")"}toJSON(){return{seconds:this.seconds,nanoseconds:this.nanoseconds}}valueOf(){const e=this.seconds- -62135596800;return String(e).padStart(12,"0")+"."+String(this.nanoseconds).padStart(9,"0")}}/**
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
 */class R{constructor(e){this.timestamp=e}static fromTimestamp(e){return new R(e)}static min(){return new R(new Y(0,0))}static max(){return new R(new Y(253402300799,999999999))}compareTo(e){return this.timestamp._compareTo(e.timestamp)}isEqual(e){return this.timestamp.isEqual(e.timestamp)}toMicroseconds(){return 1e6*this.timestamp.seconds+this.timestamp.nanoseconds/1e3}toString(){return"SnapshotVersion("+this.timestamp.toString()+")"}toTimestamp(){return this.timestamp}}/**
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
 */class xi{constructor(e,t,r){t===void 0?t=0:t>e.length&&b(),r===void 0?r=e.length-t:r>e.length-t&&b(),this.segments=e,this.offset=t,this.len=r}get length(){return this.len}isEqual(e){return xi.comparator(this,e)===0}child(e){const t=this.segments.slice(this.offset,this.limit());return e instanceof xi?e.forEach(r=>{t.push(r)}):t.push(e),this.construct(t)}limit(){return this.offset+this.length}popFirst(e){return e=e===void 0?1:e,this.construct(this.segments,this.offset+e,this.length-e)}popLast(){return this.construct(this.segments,this.offset,this.length-1)}firstSegment(){return this.segments[this.offset]}lastSegment(){return this.get(this.length-1)}get(e){return this.segments[this.offset+e]}isEmpty(){return this.length===0}isPrefixOf(e){if(e.length<this.length)return!1;for(let t=0;t<this.length;t++)if(this.get(t)!==e.get(t))return!1;return!0}isImmediateParentOf(e){if(this.length+1!==e.length)return!1;for(let t=0;t<this.length;t++)if(this.get(t)!==e.get(t))return!1;return!0}forEach(e){for(let t=this.offset,r=this.limit();t<r;t++)e(this.segments[t])}toArray(){return this.segments.slice(this.offset,this.limit())}static comparator(e,t){const r=Math.min(e.length,t.length);for(let i=0;i<r;i++){const s=e.get(i),o=t.get(i);if(s<o)return-1;if(s>o)return 1}return e.length<t.length?-1:e.length>t.length?1:0}}class F extends xi{construct(e,t,r){return new F(e,t,r)}canonicalString(){return this.toArray().join("/")}toString(){return this.canonicalString()}static fromString(...e){const t=[];for(const r of e){if(r.indexOf("//")>=0)throw new y(m.INVALID_ARGUMENT,`Invalid segment (${r}). Paths must not contain // in them.`);t.push(...r.split("/").filter(i=>i.length>0))}return new F(t)}static emptyPath(){return new F([])}}const mb=/^[_a-zA-Z][_a-zA-Z0-9]*$/;class ie extends xi{construct(e,t,r){return new ie(e,t,r)}static isValidIdentifier(e){return mb.test(e)}canonicalString(){return this.toArray().map(e=>(e=e.replace(/\\/g,"\\\\").replace(/`/g,"\\`"),ie.isValidIdentifier(e)||(e="`"+e+"`"),e)).join(".")}toString(){return this.canonicalString()}isKeyField(){return this.length===1&&this.get(0)==="__name__"}static keyField(){return new ie(["__name__"])}static fromServerFormat(e){const t=[];let r="",i=0;const s=()=>{if(r.length===0)throw new y(m.INVALID_ARGUMENT,`Invalid field path (${e}). Paths must not be empty, begin with '.', end with '.', or contain '..'`);t.push(r),r=""};let o=!1;for(;i<e.length;){const a=e[i];if(a==="\\"){if(i+1===e.length)throw new y(m.INVALID_ARGUMENT,"Path has trailing escape character: "+e);const c=e[i+1];if(c!=="\\"&&c!=="."&&c!=="`")throw new y(m.INVALID_ARGUMENT,"Path has invalid escape sequence: "+e);r+=c,i+=2}else a==="`"?(o=!o,i++):a!=="."||o?(r+=a,i++):(s(),i++)}if(s(),o)throw new y(m.INVALID_ARGUMENT,"Unterminated ` in path: "+e);return new ie(t)}static emptyPath(){return new ie([])}}/**
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
 */class I{constructor(e){this.path=e}static fromPath(e){return new I(F.fromString(e))}static fromName(e){return new I(F.fromString(e).popFirst(5))}static empty(){return new I(F.emptyPath())}get collectionGroup(){return this.path.popLast().lastSegment()}hasCollectionId(e){return this.path.length>=2&&this.path.get(this.path.length-2)===e}getCollectionGroup(){return this.path.get(this.path.length-2)}getCollectionPath(){return this.path.popLast()}isEqual(e){return e!==null&&F.comparator(this.path,e.path)===0}toString(){return this.path.toString()}static comparator(e,t){return F.comparator(e.path,t.path)}static isDocumentKey(e){return e.length%2==0}static fromSegments(e){return new I(new F(e.slice()))}}/**
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
 */class rm{constructor(e,t,r,i){this.indexId=e,this.collectionGroup=t,this.fields=r,this.indexState=i}}function pc(n){return n.fields.find(e=>e.kind===2)}function pn(n){return n.fields.filter(e=>e.kind!==2)}rm.UNKNOWN_ID=-1;class gb{constructor(e,t){this.fieldPath=e,this.kind=t}}class co{constructor(e,t){this.sequenceNumber=e,this.offset=t}static empty(){return new co(0,We.min())}}function im(n,e){const t=n.toTimestamp().seconds,r=n.toTimestamp().nanoseconds+1,i=R.fromTimestamp(r===1e9?new Y(t+1,0):new Y(t,r));return new We(i,I.empty(),e)}function sm(n){return new We(n.readTime,n.key,-1)}class We{constructor(e,t,r){this.readTime=e,this.documentKey=t,this.largestBatchId=r}static min(){return new We(R.min(),I.empty(),-1)}static max(){return new We(R.max(),I.empty(),-1)}}function Nu(n,e){let t=n.readTime.compareTo(e.readTime);return t!==0?t:(t=I.comparator(n.documentKey,e.documentKey),t!==0?t:D(n.largestBatchId,e.largestBatchId))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const om="The current tab is not in the required state to perform this operation. It might be necessary to refresh the browser tab.";class am{constructor(){this.onCommittedListeners=[]}addOnCommittedListener(e){this.onCommittedListeners.push(e)}raiseOnCommittedEvent(){this.onCommittedListeners.forEach(e=>e())}}/**
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
 */async function on(n){if(n.code!==m.FAILED_PRECONDITION||n.message!==om)throw n;v("LocalStore","Unexpectedly lost primary lease")}/**
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
 */class f{constructor(e){this.nextCallback=null,this.catchCallback=null,this.result=void 0,this.error=void 0,this.isDone=!1,this.callbackAttached=!1,e(t=>{this.isDone=!0,this.result=t,this.nextCallback&&this.nextCallback(t)},t=>{this.isDone=!0,this.error=t,this.catchCallback&&this.catchCallback(t)})}catch(e){return this.next(void 0,e)}next(e,t){return this.callbackAttached&&b(),this.callbackAttached=!0,this.isDone?this.error?this.wrapFailure(t,this.error):this.wrapSuccess(e,this.result):new f((r,i)=>{this.nextCallback=s=>{this.wrapSuccess(e,s).next(r,i)},this.catchCallback=s=>{this.wrapFailure(t,s).next(r,i)}})}toPromise(){return new Promise((e,t)=>{this.next(e,t)})}wrapUserFunction(e){try{const t=e();return t instanceof f?t:f.resolve(t)}catch(t){return f.reject(t)}}wrapSuccess(e,t){return e?this.wrapUserFunction(()=>e(t)):f.resolve(t)}wrapFailure(e,t){return e?this.wrapUserFunction(()=>e(t)):f.reject(t)}static resolve(e){return new f((t,r)=>{t(e)})}static reject(e){return new f((t,r)=>{r(e)})}static waitFor(e){return new f((t,r)=>{let i=0,s=0,o=!1;e.forEach(a=>{++i,a.next(()=>{++s,o&&s===i&&t()},c=>r(c))}),o=!0,s===i&&t()})}static or(e){let t=f.resolve(!1);for(const r of e)t=t.next(i=>i?f.resolve(i):r());return t}static forEach(e,t){const r=[];return e.forEach((i,s)=>{r.push(t.call(this,i,s))}),this.waitFor(r)}static mapArray(e,t){return new f((r,i)=>{const s=e.length,o=new Array(s);let a=0;for(let c=0;c<s;c++){const u=c;t(e[u]).next(l=>{o[u]=l,++a,a===s&&r(o)},l=>i(l))}})}static doWhile(e,t){return new f((r,i)=>{const s=()=>{e()===!0?t().next(()=>{s()},i):r()};s()})}}/**
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
 */class Qo{constructor(e,t){this.action=e,this.transaction=t,this.aborted=!1,this.R=new me,this.transaction.oncomplete=()=>{this.R.resolve()},this.transaction.onabort=()=>{t.error?this.R.reject(new fi(e,t.error)):this.R.resolve()},this.transaction.onerror=r=>{const i=Du(r.target.error);this.R.reject(new fi(e,i))}}static open(e,t,r,i){try{return new Qo(t,e.transaction(i,r))}catch(s){throw new fi(t,s)}}get v(){return this.R.promise}abort(e){e&&this.R.reject(e),this.aborted||(v("SimpleDb","Aborting transaction:",e?e.message:"Client-initiated abort"),this.aborted=!0,this.transaction.abort())}P(){const e=this.transaction;this.aborted||typeof e.commit!="function"||e.commit()}store(e){const t=this.transaction.objectStore(e);return new vb(t)}}class Ze{constructor(e,t,r){this.name=e,this.version=t,this.V=r,Ze.S(J())===12.2&&re("Firestore persistence suffers from a bug in iOS 12.2 Safari that may cause your app to stop working. See https://stackoverflow.com/q/56496296/110915 for details and a potential workaround.")}static delete(e){return v("SimpleDb","Removing database:",e),mn(window.indexedDB.deleteDatabase(e)).toPromise()}static D(){if(!_i())return!1;if(Ze.C())return!0;const e=J(),t=Ze.S(e),r=0<t&&t<10,i=Ze.N(e),s=0<i&&i<4.5;return!(e.indexOf("MSIE ")>0||e.indexOf("Trident/")>0||e.indexOf("Edge/")>0||r||s)}static C(){var e;return typeof process<"u"&&((e=process.env)===null||e===void 0?void 0:e.k)==="YES"}static O(e,t){return e.store(t)}static S(e){const t=e.match(/i(?:phone|pad|pod) os ([\d_]+)/i),r=t?t[1].split("_").slice(0,2).join("."):"-1";return Number(r)}static N(e){const t=e.match(/Android ([\d.]+)/i),r=t?t[1].split(".").slice(0,2).join("."):"-1";return Number(r)}async $(e){return this.db||(v("SimpleDb","Opening database:",this.name),this.db=await new Promise((t,r)=>{const i=indexedDB.open(this.name,this.version);i.onsuccess=s=>{const o=s.target.result;t(o)},i.onblocked=()=>{r(new fi(e,"Cannot upgrade IndexedDB schema while another tab is open. Close all tabs that access Firestore and reload this page to proceed."))},i.onerror=s=>{const o=s.target.error;o.name==="VersionError"?r(new y(m.FAILED_PRECONDITION,"A newer version of the Firestore SDK was previously used and so the persisted data is not compatible with the version of the SDK you are now using. The SDK will operate with persistence disabled. If you need persistence, please re-upgrade to a newer version of the SDK or else clear the persisted IndexedDB data for your app to start fresh.")):o.name==="InvalidStateError"?r(new y(m.FAILED_PRECONDITION,"Unable to open an IndexedDB connection. This could be due to running in a private browsing session on a browser whose private browsing sessions do not support IndexedDB: "+o)):r(new fi(e,o))},i.onupgradeneeded=s=>{v("SimpleDb",'Database "'+this.name+'" requires upgrade from version:',s.oldVersion);const o=s.target.result;this.V.M(o,i.transaction,s.oldVersion,this.version).next(()=>{v("SimpleDb","Database upgrade to version "+this.version+" complete")})}})),this.F&&(this.db.onversionchange=t=>this.F(t)),this.db}B(e){this.F=e,this.db&&(this.db.onversionchange=t=>e(t))}async runTransaction(e,t,r,i){const s=t==="readonly";let o=0;for(;;){++o;try{this.db=await this.$(e);const a=Qo.open(this.db,e,s?"readonly":"readwrite",r),c=i(a).next(u=>(a.P(),u)).catch(u=>(a.abort(u),f.reject(u))).toPromise();return c.catch(()=>{}),await a.v,c}catch(a){const c=a,u=c.name!=="FirebaseError"&&o<3;if(v("SimpleDb","Transaction failed with error:",c.message,"Retrying:",u),this.close(),!u)return Promise.reject(c)}}}close(){this.db&&this.db.close(),this.db=void 0}}class yb{constructor(e){this.L=e,this.q=!1,this.U=null}get isDone(){return this.q}get K(){return this.U}set cursor(e){this.L=e}done(){this.q=!0}G(e){this.U=e}delete(){return mn(this.L.delete())}}class fi extends y{constructor(e,t){super(m.UNAVAILABLE,`IndexedDB transaction '${e}' failed: ${t}`),this.name="IndexedDbTransactionError"}}function an(n){return n.name==="IndexedDbTransactionError"}class vb{constructor(e){this.store=e}put(e,t){let r;return t!==void 0?(v("SimpleDb","PUT",this.store.name,e,t),r=this.store.put(t,e)):(v("SimpleDb","PUT",this.store.name,"<auto-key>",e),r=this.store.put(e)),mn(r)}add(e){return v("SimpleDb","ADD",this.store.name,e,e),mn(this.store.add(e))}get(e){return mn(this.store.get(e)).next(t=>(t===void 0&&(t=null),v("SimpleDb","GET",this.store.name,e,t),t))}delete(e){return v("SimpleDb","DELETE",this.store.name,e),mn(this.store.delete(e))}count(){return v("SimpleDb","COUNT",this.store.name),mn(this.store.count())}j(e,t){const r=this.options(e,t);if(r.index||typeof this.store.getAll!="function"){const i=this.cursor(r),s=[];return this.W(i,(o,a)=>{s.push(a)}).next(()=>s)}{const i=this.store.getAll(r.range);return new f((s,o)=>{i.onerror=a=>{o(a.target.error)},i.onsuccess=a=>{s(a.target.result)}})}}H(e,t){const r=this.store.getAll(e,t===null?void 0:t);return new f((i,s)=>{r.onerror=o=>{s(o.target.error)},r.onsuccess=o=>{i(o.target.result)}})}J(e,t){v("SimpleDb","DELETE ALL",this.store.name);const r=this.options(e,t);r.Y=!1;const i=this.cursor(r);return this.W(i,(s,o,a)=>a.delete())}Z(e,t){let r;t?r=e:(r={},t=e);const i=this.cursor(r);return this.W(i,t)}X(e){const t=this.cursor({});return new f((r,i)=>{t.onerror=s=>{const o=Du(s.target.error);i(o)},t.onsuccess=s=>{const o=s.target.result;o?e(o.primaryKey,o.value).next(a=>{a?o.continue():r()}):r()}})}W(e,t){const r=[];return new f((i,s)=>{e.onerror=o=>{s(o.target.error)},e.onsuccess=o=>{const a=o.target.result;if(!a)return void i();const c=new yb(a),u=t(a.primaryKey,a.value,c);if(u instanceof f){const l=u.catch(h=>(c.done(),f.reject(h)));r.push(l)}c.isDone?i():c.K===null?a.continue():a.continue(c.K)}}).next(()=>f.waitFor(r))}options(e,t){let r;return e!==void 0&&(typeof e=="string"?r=e:t=e),{index:r,range:t}}cursor(e){let t="next";if(e.reverse&&(t="prev"),e.index){const r=this.store.index(e.index);return e.Y?r.openKeyCursor(e.range,t):r.openCursor(e.range,t)}return this.store.openCursor(e.range,t)}}function mn(n){return new f((e,t)=>{n.onsuccess=r=>{const i=r.target.result;e(i)},n.onerror=r=>{const i=Du(r.target.error);t(i)}})}let _h=!1;function Du(n){const e=Ze.S(J());if(e>=12.2&&e<13){const t="An internal error was encountered in the Indexed Database server";if(n.message.indexOf(t)>=0){const r=new y("internal",`IOS_INDEXEDDB_BUG1: IndexedDb has thrown '${t}'. This is likely due to an unavoidable bug in iOS. See https://stackoverflow.com/q/56496296/110915 for details and a potential workaround.`);return _h||(_h=!0,setTimeout(()=>{throw r},0)),r}}return n}class wb{constructor(e,t){this.asyncQueue=e,this.tt=t,this.task=null}start(){this.et(15e3)}stop(){this.task&&(this.task.cancel(),this.task=null)}get started(){return this.task!==null}et(e){v("IndexBackiller",`Scheduled in ${e}ms`),this.task=this.asyncQueue.enqueueAfterDelay("index_backfill",e,async()=>{this.task=null;try{v("IndexBackiller",`Documents written: ${await this.tt.nt()}`)}catch(t){an(t)?v("IndexBackiller","Ignoring IndexedDB error during index backfill: ",t):await on(t)}await this.et(6e4)})}}class _b{constructor(e,t){this.localStore=e,this.persistence=t}async nt(e=50){return this.persistence.runTransaction("Backfill Indexes","readwrite-primary",t=>this.st(t,e))}st(e,t){const r=new Set;let i=t,s=!0;return f.doWhile(()=>s===!0&&i>0,()=>this.localStore.indexManager.getNextCollectionGroupToUpdate(e).next(o=>{if(o!==null&&!r.has(o))return v("IndexBackiller",`Processing collection: ${o}`),this.it(e,o,i).next(a=>{i-=a,r.add(o)});s=!1})).next(()=>t-i)}it(e,t,r){return this.localStore.indexManager.getMinOffsetFromCollectionGroup(e,t).next(i=>this.localStore.localDocuments.getNextDocuments(e,t,i,r).next(s=>{const o=s.changes;return this.localStore.indexManager.updateIndexEntries(e,o).next(()=>this.rt(i,s)).next(a=>(v("IndexBackiller",`Updating offset: ${a}`),this.localStore.indexManager.updateCollectionGroup(e,t,a))).next(()=>o.size)}))}rt(e,t){let r=e;return t.changes.forEach((i,s)=>{const o=sm(s);Nu(o,r)>0&&(r=o)}),new We(r.readTime,r.documentKey,Math.max(t.batchId,e.largestBatchId))}}/**
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
 */class Be{constructor(e,t){this.previousValue=e,t&&(t.sequenceNumberHandler=r=>this.ot(r),this.ut=r=>t.writeSequenceNumber(r))}ot(e){return this.previousValue=Math.max(e,this.previousValue),this.previousValue}next(){const e=++this.previousValue;return this.ut&&this.ut(e),e}}Be.ct=-1;function as(n){return n==null}function Oi(n){return n===0&&1/n==-1/0}function cm(n){return typeof n=="number"&&Number.isInteger(n)&&!Oi(n)&&n<=Number.MAX_SAFE_INTEGER&&n>=Number.MIN_SAFE_INTEGER}/**
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
 */function Ue(n){let e="";for(let t=0;t<n.length;t++)e.length>0&&(e=Ih(e)),e=Ib(n.get(t),e);return Ih(e)}function Ib(n,e){let t=e;const r=n.length;for(let i=0;i<r;i++){const s=n.charAt(i);switch(s){case"\0":t+="";break;case"":t+="";break;default:t+=s}}return t}function Ih(n){return n+""}function ut(n){const e=n.length;if(A(e>=2),e===2)return A(n.charAt(0)===""&&n.charAt(1)===""),F.emptyPath();const t=e-2,r=[];let i="";for(let s=0;s<e;){const o=n.indexOf("",s);switch((o<0||o>t)&&b(),n.charAt(o+1)){case"":const a=n.substring(s,o);let c;i.length===0?c=a:(i+=a,c=i,i=""),r.push(c);break;case"":i+=n.substring(s,o),i+="\0";break;case"":i+=n.substring(s,o+1);break;default:b()}s=o+2}return new F(r)}/**
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
 */const Th=["userId","batchId"];/**
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
 */function Vs(n,e){return[n,Ue(e)]}function um(n,e,t){return[n,Ue(e),t]}const Tb={},Eb=["prefixPath","collectionGroup","readTime","documentId"],bb=["prefixPath","collectionGroup","documentId"],Sb=["collectionGroup","readTime","prefixPath","documentId"],kb=["canonicalId","targetId"],Ab=["targetId","path"],Rb=["path","targetId"],Cb=["collectionId","parent"],Nb=["indexId","uid"],Db=["uid","sequenceNumber"],Pb=["indexId","uid","arrayValue","directionalValue","orderedDocumentKey","documentKey"],xb=["indexId","uid","orderedDocumentKey"],Ob=["userId","collectionPath","documentId"],Lb=["userId","collectionPath","largestBatchId"],Mb=["userId","collectionGroup","largestBatchId"],lm=["mutationQueues","mutations","documentMutations","remoteDocuments","targets","owner","targetGlobal","targetDocuments","clientMetadata","remoteDocumentGlobal","collectionParents","bundles","namedQueries"],Ub=[...lm,"documentOverlays"],hm=["mutationQueues","mutations","documentMutations","remoteDocumentsV14","targets","owner","targetGlobal","targetDocuments","clientMetadata","remoteDocumentGlobal","collectionParents","bundles","namedQueries","documentOverlays"],dm=hm,Fb=[...dm,"indexConfiguration","indexState","indexEntries"];/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class mc extends am{constructor(e,t){super(),this.at=e,this.currentSequenceNumber=t}}function ye(n,e){const t=T(n);return Ze.O(t.at,e)}/**
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
 */function Eh(n){let e=0;for(const t in n)Object.prototype.hasOwnProperty.call(n,t)&&e++;return e}function Hn(n,e){for(const t in n)Object.prototype.hasOwnProperty.call(n,t)&&e(t,n[t])}function fm(n){for(const e in n)if(Object.prototype.hasOwnProperty.call(n,e))return!1;return!0}/**
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
 */class te{constructor(e,t){this.comparator=e,this.root=t||we.EMPTY}insert(e,t){return new te(this.comparator,this.root.insert(e,t,this.comparator).copy(null,null,we.BLACK,null,null))}remove(e){return new te(this.comparator,this.root.remove(e,this.comparator).copy(null,null,we.BLACK,null,null))}get(e){let t=this.root;for(;!t.isEmpty();){const r=this.comparator(e,t.key);if(r===0)return t.value;r<0?t=t.left:r>0&&(t=t.right)}return null}indexOf(e){let t=0,r=this.root;for(;!r.isEmpty();){const i=this.comparator(e,r.key);if(i===0)return t+r.left.size;i<0?r=r.left:(t+=r.left.size+1,r=r.right)}return-1}isEmpty(){return this.root.isEmpty()}get size(){return this.root.size}minKey(){return this.root.minKey()}maxKey(){return this.root.maxKey()}inorderTraversal(e){return this.root.inorderTraversal(e)}forEach(e){this.inorderTraversal((t,r)=>(e(t,r),!1))}toString(){const e=[];return this.inorderTraversal((t,r)=>(e.push(`${t}:${r}`),!1)),`{${e.join(", ")}}`}reverseTraversal(e){return this.root.reverseTraversal(e)}getIterator(){return new Ss(this.root,null,this.comparator,!1)}getIteratorFrom(e){return new Ss(this.root,e,this.comparator,!1)}getReverseIterator(){return new Ss(this.root,null,this.comparator,!0)}getReverseIteratorFrom(e){return new Ss(this.root,e,this.comparator,!0)}}class Ss{constructor(e,t,r,i){this.isReverse=i,this.nodeStack=[];let s=1;for(;!e.isEmpty();)if(s=t?r(e.key,t):1,t&&i&&(s*=-1),s<0)e=this.isReverse?e.left:e.right;else{if(s===0){this.nodeStack.push(e);break}this.nodeStack.push(e),e=this.isReverse?e.right:e.left}}getNext(){let e=this.nodeStack.pop();const t={key:e.key,value:e.value};if(this.isReverse)for(e=e.left;!e.isEmpty();)this.nodeStack.push(e),e=e.right;else for(e=e.right;!e.isEmpty();)this.nodeStack.push(e),e=e.left;return t}hasNext(){return this.nodeStack.length>0}peek(){if(this.nodeStack.length===0)return null;const e=this.nodeStack[this.nodeStack.length-1];return{key:e.key,value:e.value}}}class we{constructor(e,t,r,i,s){this.key=e,this.value=t,this.color=r!=null?r:we.RED,this.left=i!=null?i:we.EMPTY,this.right=s!=null?s:we.EMPTY,this.size=this.left.size+1+this.right.size}copy(e,t,r,i,s){return new we(e!=null?e:this.key,t!=null?t:this.value,r!=null?r:this.color,i!=null?i:this.left,s!=null?s:this.right)}isEmpty(){return!1}inorderTraversal(e){return this.left.inorderTraversal(e)||e(this.key,this.value)||this.right.inorderTraversal(e)}reverseTraversal(e){return this.right.reverseTraversal(e)||e(this.key,this.value)||this.left.reverseTraversal(e)}min(){return this.left.isEmpty()?this:this.left.min()}minKey(){return this.min().key}maxKey(){return this.right.isEmpty()?this.key:this.right.maxKey()}insert(e,t,r){let i=this;const s=r(e,i.key);return i=s<0?i.copy(null,null,null,i.left.insert(e,t,r),null):s===0?i.copy(null,t,null,null,null):i.copy(null,null,null,null,i.right.insert(e,t,r)),i.fixUp()}removeMin(){if(this.left.isEmpty())return we.EMPTY;let e=this;return e.left.isRed()||e.left.left.isRed()||(e=e.moveRedLeft()),e=e.copy(null,null,null,e.left.removeMin(),null),e.fixUp()}remove(e,t){let r,i=this;if(t(e,i.key)<0)i.left.isEmpty()||i.left.isRed()||i.left.left.isRed()||(i=i.moveRedLeft()),i=i.copy(null,null,null,i.left.remove(e,t),null);else{if(i.left.isRed()&&(i=i.rotateRight()),i.right.isEmpty()||i.right.isRed()||i.right.left.isRed()||(i=i.moveRedRight()),t(e,i.key)===0){if(i.right.isEmpty())return we.EMPTY;r=i.right.min(),i=i.copy(r.key,r.value,null,null,i.right.removeMin())}i=i.copy(null,null,null,null,i.right.remove(e,t))}return i.fixUp()}isRed(){return this.color}fixUp(){let e=this;return e.right.isRed()&&!e.left.isRed()&&(e=e.rotateLeft()),e.left.isRed()&&e.left.left.isRed()&&(e=e.rotateRight()),e.left.isRed()&&e.right.isRed()&&(e=e.colorFlip()),e}moveRedLeft(){let e=this.colorFlip();return e.right.left.isRed()&&(e=e.copy(null,null,null,null,e.right.rotateRight()),e=e.rotateLeft(),e=e.colorFlip()),e}moveRedRight(){let e=this.colorFlip();return e.left.left.isRed()&&(e=e.rotateRight(),e=e.colorFlip()),e}rotateLeft(){const e=this.copy(null,null,we.RED,null,this.right.left);return this.right.copy(null,null,this.color,e,null)}rotateRight(){const e=this.copy(null,null,we.RED,this.left.right,null);return this.left.copy(null,null,this.color,null,e)}colorFlip(){const e=this.left.copy(null,null,!this.left.color,null,null),t=this.right.copy(null,null,!this.right.color,null,null);return this.copy(null,null,!this.color,e,t)}checkMaxDepth(){const e=this.check();return Math.pow(2,e)<=this.size+1}check(){if(this.isRed()&&this.left.isRed()||this.right.isRed())throw b();const e=this.left.check();if(e!==this.right.check())throw b();return e+(this.isRed()?0:1)}}we.EMPTY=null,we.RED=!0,we.BLACK=!1;we.EMPTY=new class{constructor(){this.size=0}get key(){throw b()}get value(){throw b()}get color(){throw b()}get left(){throw b()}get right(){throw b()}copy(n,e,t,r,i){return this}insert(n,e,t){return new we(n,e)}remove(n,e){return this}isEmpty(){return!0}inorderTraversal(n){return!1}reverseTraversal(n){return!1}minKey(){return null}maxKey(){return null}isRed(){return!1}checkMaxDepth(){return!0}check(){return 0}};/**
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
 */class j{constructor(e){this.comparator=e,this.data=new te(this.comparator)}has(e){return this.data.get(e)!==null}first(){return this.data.minKey()}last(){return this.data.maxKey()}get size(){return this.data.size}indexOf(e){return this.data.indexOf(e)}forEach(e){this.data.inorderTraversal((t,r)=>(e(t),!1))}forEachInRange(e,t){const r=this.data.getIteratorFrom(e[0]);for(;r.hasNext();){const i=r.getNext();if(this.comparator(i.key,e[1])>=0)return;t(i.key)}}forEachWhile(e,t){let r;for(r=t!==void 0?this.data.getIteratorFrom(t):this.data.getIterator();r.hasNext();)if(!e(r.getNext().key))return}firstAfterOrEqual(e){const t=this.data.getIteratorFrom(e);return t.hasNext()?t.getNext().key:null}getIterator(){return new bh(this.data.getIterator())}getIteratorFrom(e){return new bh(this.data.getIteratorFrom(e))}add(e){return this.copy(this.data.remove(e).insert(e,!0))}delete(e){return this.has(e)?this.copy(this.data.remove(e)):this}isEmpty(){return this.data.isEmpty()}unionWith(e){let t=this;return t.size<e.size&&(t=e,e=this),e.forEach(r=>{t=t.add(r)}),t}isEqual(e){if(!(e instanceof j)||this.size!==e.size)return!1;const t=this.data.getIterator(),r=e.data.getIterator();for(;t.hasNext();){const i=t.getNext().key,s=r.getNext().key;if(this.comparator(i,s)!==0)return!1}return!0}toArray(){const e=[];return this.forEach(t=>{e.push(t)}),e}toString(){const e=[];return this.forEach(t=>e.push(t)),"SortedSet("+e.toString()+")"}copy(e){const t=new j(this.comparator);return t.data=e,t}}class bh{constructor(e){this.iter=e}getNext(){return this.iter.getNext().key}hasNext(){return this.iter.hasNext()}}function er(n){return n.hasNext()?n.getNext():void 0}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class qe{constructor(e){this.fields=e,e.sort(ie.comparator)}static empty(){return new qe([])}unionWith(e){let t=new j(ie.comparator);for(const r of this.fields)t=t.add(r);for(const r of e)t=t.add(r);return new qe(t.toArray())}covers(e){for(const t of this.fields)if(t.isPrefixOf(e))return!0;return!1}isEqual(e){return vr(this.fields,e.fields,(t,r)=>t.isEqual(r))}}/**
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
 */class Vb extends Error{constructor(){super(...arguments),this.name="Base64DecodeError"}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Bb(){return typeof atob<"u"}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class he{constructor(e){this.binaryString=e}static fromBase64String(e){const t=function(r){try{return atob(r)}catch(i){throw typeof DOMException<"u"&&i instanceof DOMException?new Vb("Invalid base64 string: "+i):i}}(e);return new he(t)}static fromUint8Array(e){const t=function(r){let i="";for(let s=0;s<r.length;++s)i+=String.fromCharCode(r[s]);return i}(e);return new he(t)}[Symbol.iterator](){let e=0;return{next:()=>e<this.binaryString.length?{value:this.binaryString.charCodeAt(e++),done:!1}:{value:void 0,done:!0}}}toBase64(){return e=this.binaryString,btoa(e);var e}toUint8Array(){return function(e){const t=new Uint8Array(e.length);for(let r=0;r<e.length;r++)t[r]=e.charCodeAt(r);return t}(this.binaryString)}approximateByteSize(){return 2*this.binaryString.length}compareTo(e){return D(this.binaryString,e.binaryString)}isEqual(e){return this.binaryString===e.binaryString}}he.EMPTY_BYTE_STRING=new he("");const qb=new RegExp(/^\d{4}-\d\d-\d\dT\d\d:\d\d:\d\d(?:\.(\d+))?Z$/);function Qt(n){if(A(!!n),typeof n=="string"){let e=0;const t=qb.exec(n);if(A(!!t),t[1]){let i=t[1];i=(i+"000000000").substr(0,9),e=Number(i)}const r=new Date(n);return{seconds:Math.floor(r.getTime()/1e3),nanos:e}}return{seconds:Z(n.seconds),nanos:Z(n.nanos)}}function Z(n){return typeof n=="number"?n:typeof n=="string"?Number(n):0}function On(n){return typeof n=="string"?he.fromBase64String(n):he.fromUint8Array(n)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Pu(n){var e,t;return((t=(((e=n==null?void 0:n.mapValue)===null||e===void 0?void 0:e.fields)||{}).__type__)===null||t===void 0?void 0:t.stringValue)==="server_timestamp"}function pm(n){const e=n.mapValue.fields.__previous_value__;return Pu(e)?pm(e):e}function Li(n){const e=Qt(n.mapValue.fields.__local_write_time__.timestampValue);return new Y(e.seconds,e.nanos)}/**
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
 */class $b{constructor(e,t,r,i,s,o,a,c){this.databaseId=e,this.appId=t,this.persistenceKey=r,this.host=i,this.ssl=s,this.forceLongPolling=o,this.autoDetectLongPolling=a,this.useFetchStreams=c}}class Yt{constructor(e,t){this.projectId=e,this.database=t||"(default)"}static empty(){return new Yt("","")}get isDefaultDatabase(){return this.database==="(default)"}isEqual(e){return e instanceof Yt&&e.projectId===this.projectId&&e.database===this.database}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const zt={mapValue:{fields:{__type__:{stringValue:"__max__"}}}},Bs={nullValue:"NULL_VALUE"};function Ln(n){return"nullValue"in n?0:"booleanValue"in n?1:"integerValue"in n||"doubleValue"in n?2:"timestampValue"in n?3:"stringValue"in n?5:"bytesValue"in n?6:"referenceValue"in n?7:"geoPointValue"in n?8:"arrayValue"in n?9:"mapValue"in n?Pu(n)?4:mm(n)?9007199254740991:10:b()}function mt(n,e){if(n===e)return!0;const t=Ln(n);if(t!==Ln(e))return!1;switch(t){case 0:case 9007199254740991:return!0;case 1:return n.booleanValue===e.booleanValue;case 4:return Li(n).isEqual(Li(e));case 3:return function(r,i){if(typeof r.timestampValue=="string"&&typeof i.timestampValue=="string"&&r.timestampValue.length===i.timestampValue.length)return r.timestampValue===i.timestampValue;const s=Qt(r.timestampValue),o=Qt(i.timestampValue);return s.seconds===o.seconds&&s.nanos===o.nanos}(n,e);case 5:return n.stringValue===e.stringValue;case 6:return function(r,i){return On(r.bytesValue).isEqual(On(i.bytesValue))}(n,e);case 7:return n.referenceValue===e.referenceValue;case 8:return function(r,i){return Z(r.geoPointValue.latitude)===Z(i.geoPointValue.latitude)&&Z(r.geoPointValue.longitude)===Z(i.geoPointValue.longitude)}(n,e);case 2:return function(r,i){if("integerValue"in r&&"integerValue"in i)return Z(r.integerValue)===Z(i.integerValue);if("doubleValue"in r&&"doubleValue"in i){const s=Z(r.doubleValue),o=Z(i.doubleValue);return s===o?Oi(s)===Oi(o):isNaN(s)&&isNaN(o)}return!1}(n,e);case 9:return vr(n.arrayValue.values||[],e.arrayValue.values||[],mt);case 10:return function(r,i){const s=r.mapValue.fields||{},o=i.mapValue.fields||{};if(Eh(s)!==Eh(o))return!1;for(const a in s)if(s.hasOwnProperty(a)&&(o[a]===void 0||!mt(s[a],o[a])))return!1;return!0}(n,e);default:return b()}}function Mi(n,e){return(n.values||[]).find(t=>mt(t,e))!==void 0}function Jt(n,e){if(n===e)return 0;const t=Ln(n),r=Ln(e);if(t!==r)return D(t,r);switch(t){case 0:case 9007199254740991:return 0;case 1:return D(n.booleanValue,e.booleanValue);case 2:return function(i,s){const o=Z(i.integerValue||i.doubleValue),a=Z(s.integerValue||s.doubleValue);return o<a?-1:o>a?1:o===a?0:isNaN(o)?isNaN(a)?0:-1:1}(n,e);case 3:return Sh(n.timestampValue,e.timestampValue);case 4:return Sh(Li(n),Li(e));case 5:return D(n.stringValue,e.stringValue);case 6:return function(i,s){const o=On(i),a=On(s);return o.compareTo(a)}(n.bytesValue,e.bytesValue);case 7:return function(i,s){const o=i.split("/"),a=s.split("/");for(let c=0;c<o.length&&c<a.length;c++){const u=D(o[c],a[c]);if(u!==0)return u}return D(o.length,a.length)}(n.referenceValue,e.referenceValue);case 8:return function(i,s){const o=D(Z(i.latitude),Z(s.latitude));return o!==0?o:D(Z(i.longitude),Z(s.longitude))}(n.geoPointValue,e.geoPointValue);case 9:return function(i,s){const o=i.values||[],a=s.values||[];for(let c=0;c<o.length&&c<a.length;++c){const u=Jt(o[c],a[c]);if(u)return u}return D(o.length,a.length)}(n.arrayValue,e.arrayValue);case 10:return function(i,s){if(i===zt.mapValue&&s===zt.mapValue)return 0;if(i===zt.mapValue)return 1;if(s===zt.mapValue)return-1;const o=i.fields||{},a=Object.keys(o),c=s.fields||{},u=Object.keys(c);a.sort(),u.sort();for(let l=0;l<a.length&&l<u.length;++l){const h=D(a[l],u[l]);if(h!==0)return h;const d=Jt(o[a[l]],c[u[l]]);if(d!==0)return d}return D(a.length,u.length)}(n.mapValue,e.mapValue);default:throw b()}}function Sh(n,e){if(typeof n=="string"&&typeof e=="string"&&n.length===e.length)return D(n,e);const t=Qt(n),r=Qt(e),i=D(t.seconds,r.seconds);return i!==0?i:D(t.nanos,r.nanos)}function wr(n){return gc(n)}function gc(n){return"nullValue"in n?"null":"booleanValue"in n?""+n.booleanValue:"integerValue"in n?""+n.integerValue:"doubleValue"in n?""+n.doubleValue:"timestampValue"in n?function(r){const i=Qt(r);return`time(${i.seconds},${i.nanos})`}(n.timestampValue):"stringValue"in n?n.stringValue:"bytesValue"in n?On(n.bytesValue).toBase64():"referenceValue"in n?(t=n.referenceValue,I.fromName(t).toString()):"geoPointValue"in n?`geo(${(e=n.geoPointValue).latitude},${e.longitude})`:"arrayValue"in n?function(r){let i="[",s=!0;for(const o of r.values||[])s?s=!1:i+=",",i+=gc(o);return i+"]"}(n.arrayValue):"mapValue"in n?function(r){const i=Object.keys(r.fields||{}).sort();let s="{",o=!0;for(const a of i)o?o=!1:s+=",",s+=`${a}:${gc(r.fields[a])}`;return s+"}"}(n.mapValue):b();var e,t}function Mn(n,e){return{referenceValue:`projects/${n.projectId}/databases/${n.database}/documents/${e.path.canonicalString()}`}}function yc(n){return!!n&&"integerValue"in n}function Ui(n){return!!n&&"arrayValue"in n}function kh(n){return!!n&&"nullValue"in n}function Ah(n){return!!n&&"doubleValue"in n&&isNaN(Number(n.doubleValue))}function qs(n){return!!n&&"mapValue"in n}function pi(n){if(n.geoPointValue)return{geoPointValue:Object.assign({},n.geoPointValue)};if(n.timestampValue&&typeof n.timestampValue=="object")return{timestampValue:Object.assign({},n.timestampValue)};if(n.mapValue){const e={mapValue:{fields:{}}};return Hn(n.mapValue.fields,(t,r)=>e.mapValue.fields[t]=pi(r)),e}if(n.arrayValue){const e={arrayValue:{values:[]}};for(let t=0;t<(n.arrayValue.values||[]).length;++t)e.arrayValue.values[t]=pi(n.arrayValue.values[t]);return e}return Object.assign({},n)}function mm(n){return(((n.mapValue||{}).fields||{}).__type__||{}).stringValue==="__max__"}function zb(n){return"nullValue"in n?Bs:"booleanValue"in n?{booleanValue:!1}:"integerValue"in n||"doubleValue"in n?{doubleValue:NaN}:"timestampValue"in n?{timestampValue:{seconds:Number.MIN_SAFE_INTEGER}}:"stringValue"in n?{stringValue:""}:"bytesValue"in n?{bytesValue:""}:"referenceValue"in n?Mn(Yt.empty(),I.empty()):"geoPointValue"in n?{geoPointValue:{latitude:-90,longitude:-180}}:"arrayValue"in n?{arrayValue:{}}:"mapValue"in n?{mapValue:{}}:b()}function jb(n){return"nullValue"in n?{booleanValue:!1}:"booleanValue"in n?{doubleValue:NaN}:"integerValue"in n||"doubleValue"in n?{timestampValue:{seconds:Number.MIN_SAFE_INTEGER}}:"timestampValue"in n?{stringValue:""}:"stringValue"in n?{bytesValue:""}:"bytesValue"in n?Mn(Yt.empty(),I.empty()):"referenceValue"in n?{geoPointValue:{latitude:-90,longitude:-180}}:"geoPointValue"in n?{arrayValue:{}}:"arrayValue"in n?{mapValue:{}}:"mapValue"in n?zt:b()}function Rh(n,e){const t=Jt(n.value,e.value);return t!==0?t:n.inclusive&&!e.inclusive?-1:!n.inclusive&&e.inclusive?1:0}function Ch(n,e){const t=Jt(n.value,e.value);return t!==0?t:n.inclusive&&!e.inclusive?1:!n.inclusive&&e.inclusive?-1:0}/**
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
 */class _e{constructor(e){this.value=e}static empty(){return new _e({mapValue:{}})}field(e){if(e.isEmpty())return this.value;{let t=this.value;for(let r=0;r<e.length-1;++r)if(t=(t.mapValue.fields||{})[e.get(r)],!qs(t))return null;return t=(t.mapValue.fields||{})[e.lastSegment()],t||null}}set(e,t){this.getFieldsMap(e.popLast())[e.lastSegment()]=pi(t)}setAll(e){let t=ie.emptyPath(),r={},i=[];e.forEach((o,a)=>{if(!t.isImmediateParentOf(a)){const c=this.getFieldsMap(t);this.applyChanges(c,r,i),r={},i=[],t=a.popLast()}o?r[a.lastSegment()]=pi(o):i.push(a.lastSegment())});const s=this.getFieldsMap(t);this.applyChanges(s,r,i)}delete(e){const t=this.field(e.popLast());qs(t)&&t.mapValue.fields&&delete t.mapValue.fields[e.lastSegment()]}isEqual(e){return mt(this.value,e.value)}getFieldsMap(e){let t=this.value;t.mapValue.fields||(t.mapValue={fields:{}});for(let r=0;r<e.length;++r){let i=t.mapValue.fields[e.get(r)];qs(i)&&i.mapValue.fields||(i={mapValue:{fields:{}}},t.mapValue.fields[e.get(r)]=i),t=i}return t.mapValue.fields}applyChanges(e,t,r){Hn(t,(i,s)=>e[i]=s);for(const i of r)delete e[i]}clone(){return new _e(pi(this.value))}}function gm(n){const e=[];return Hn(n.fields,(t,r)=>{const i=new ie([t]);if(qs(r)){const s=gm(r.mapValue).fields;if(s.length===0)e.push(i);else for(const o of s)e.push(i.child(o))}else e.push(i)}),new qe(e)}/**
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
 */class G{constructor(e,t,r,i,s,o,a){this.key=e,this.documentType=t,this.version=r,this.readTime=i,this.createTime=s,this.data=o,this.documentState=a}static newInvalidDocument(e){return new G(e,0,R.min(),R.min(),R.min(),_e.empty(),0)}static newFoundDocument(e,t,r,i){return new G(e,1,t,R.min(),r,i,0)}static newNoDocument(e,t){return new G(e,2,t,R.min(),R.min(),_e.empty(),0)}static newUnknownDocument(e,t){return new G(e,3,t,R.min(),R.min(),_e.empty(),2)}convertToFoundDocument(e,t){return!this.createTime.isEqual(R.min())||this.documentType!==2&&this.documentType!==0||(this.createTime=e),this.version=e,this.documentType=1,this.data=t,this.documentState=0,this}convertToNoDocument(e){return this.version=e,this.documentType=2,this.data=_e.empty(),this.documentState=0,this}convertToUnknownDocument(e){return this.version=e,this.documentType=3,this.data=_e.empty(),this.documentState=2,this}setHasCommittedMutations(){return this.documentState=2,this}setHasLocalMutations(){return this.documentState=1,this.version=R.min(),this}setReadTime(e){return this.readTime=e,this}get hasLocalMutations(){return this.documentState===1}get hasCommittedMutations(){return this.documentState===2}get hasPendingWrites(){return this.hasLocalMutations||this.hasCommittedMutations}isValidDocument(){return this.documentType!==0}isFoundDocument(){return this.documentType===1}isNoDocument(){return this.documentType===2}isUnknownDocument(){return this.documentType===3}isEqual(e){return e instanceof G&&this.key.isEqual(e.key)&&this.version.isEqual(e.version)&&this.documentType===e.documentType&&this.documentState===e.documentState&&this.data.isEqual(e.data)}mutableCopy(){return new G(this.key,this.documentType,this.version,this.readTime,this.createTime,this.data.clone(),this.documentState)}toString(){return`Document(${this.key}, ${this.version}, ${JSON.stringify(this.data.value)}, {createTime: ${this.createTime}}), {documentType: ${this.documentType}}), {documentState: ${this.documentState}})`}}/**
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
 */class Xt{constructor(e,t){this.position=e,this.inclusive=t}}function Nh(n,e,t){let r=0;for(let i=0;i<n.position.length;i++){const s=e[i],o=n.position[i];if(s.field.isKeyField()?r=I.comparator(I.fromName(o.referenceValue),t.key):r=Jt(o,t.data.field(s.field)),s.dir==="desc"&&(r*=-1),r!==0)break}return r}function Dh(n,e){if(n===null)return e===null;if(e===null||n.inclusive!==e.inclusive||n.position.length!==e.position.length)return!1;for(let t=0;t<n.position.length;t++)if(!mt(n.position[t],e.position[t]))return!1;return!0}/**
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
 */class dr{constructor(e,t="asc"){this.field=e,this.dir=t}}function Gb(n,e){return n.dir===e.dir&&n.field.isEqual(e.field)}/**
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
 */class ym{}class L extends ym{constructor(e,t,r){super(),this.field=e,this.op=t,this.value=r}static create(e,t,r){return e.isKeyField()?t==="in"||t==="not-in"?this.createKeyFieldInFilter(e,t,r):new Kb(e,t,r):t==="array-contains"?new Qb(e,r):t==="in"?new Em(e,r):t==="not-in"?new Yb(e,r):t==="array-contains-any"?new Jb(e,r):new L(e,t,r)}static createKeyFieldInFilter(e,t,r){return t==="in"?new Wb(e,r):new Hb(e,r)}matches(e){const t=e.data.field(this.field);return this.op==="!="?t!==null&&this.matchesComparison(Jt(t,this.value)):t!==null&&Ln(this.value)===Ln(t)&&this.matchesComparison(Jt(t,this.value))}matchesComparison(e){switch(this.op){case"<":return e<0;case"<=":return e<=0;case"==":return e===0;case"!=":return e!==0;case">":return e>0;case">=":return e>=0;default:return b()}}isInequality(){return["<","<=",">",">=","!=","not-in"].indexOf(this.op)>=0}getFlattenedFilters(){return[this]}getFilters(){return[this]}getFirstInequalityField(){return this.isInequality()?this.field:null}}class z extends ym{constructor(e,t){super(),this.filters=e,this.op=t,this.ht=null}static create(e,t){return new z(e,t)}matches(e){return _r(this)?this.filters.find(t=>!t.matches(e))===void 0:this.filters.find(t=>t.matches(e))!==void 0}getFlattenedFilters(){return this.ht!==null||(this.ht=this.filters.reduce((e,t)=>e.concat(t.getFlattenedFilters()),[])),this.ht}getFilters(){return Object.assign([],this.filters)}getFirstInequalityField(){const e=this.lt(t=>t.isInequality());return e!==null?e.field:null}lt(e){for(const t of this.getFlattenedFilters())if(e(t))return t;return null}}function _r(n){return n.op==="and"}function vc(n){return n.op==="or"}function xu(n){return vm(n)&&_r(n)}function vm(n){for(const e of n.filters)if(e instanceof z)return!1;return!0}function wc(n){if(n instanceof L)return n.field.canonicalString()+n.op.toString()+wr(n.value);if(xu(n))return n.filters.map(e=>wc(e)).join(",");{const e=n.filters.map(t=>wc(t)).join(",");return`${n.op}(${e})`}}function wm(n,e){return n instanceof L?function(t,r){return r instanceof L&&t.op===r.op&&t.field.isEqual(r.field)&&mt(t.value,r.value)}(n,e):n instanceof z?function(t,r){return r instanceof z&&t.op===r.op&&t.filters.length===r.filters.length?t.filters.reduce((i,s,o)=>i&&wm(s,r.filters[o]),!0):!1}(n,e):void b()}function _m(n,e){const t=n.filters.concat(e);return z.create(t,n.op)}function Im(n){return n instanceof L?function(e){return`${e.field.canonicalString()} ${e.op} ${wr(e.value)}`}(n):n instanceof z?function(e){return e.op.toString()+" {"+e.getFilters().map(Im).join(" ,")+"}"}(n):"Filter"}class Kb extends L{constructor(e,t,r){super(e,t,r),this.key=I.fromName(r.referenceValue)}matches(e){const t=I.comparator(e.key,this.key);return this.matchesComparison(t)}}class Wb extends L{constructor(e,t){super(e,"in",t),this.keys=Tm("in",t)}matches(e){return this.keys.some(t=>t.isEqual(e.key))}}class Hb extends L{constructor(e,t){super(e,"not-in",t),this.keys=Tm("not-in",t)}matches(e){return!this.keys.some(t=>t.isEqual(e.key))}}function Tm(n,e){var t;return(((t=e.arrayValue)===null||t===void 0?void 0:t.values)||[]).map(r=>I.fromName(r.referenceValue))}class Qb extends L{constructor(e,t){super(e,"array-contains",t)}matches(e){const t=e.data.field(this.field);return Ui(t)&&Mi(t.arrayValue,this.value)}}class Em extends L{constructor(e,t){super(e,"in",t)}matches(e){const t=e.data.field(this.field);return t!==null&&Mi(this.value.arrayValue,t)}}class Yb extends L{constructor(e,t){super(e,"not-in",t)}matches(e){if(Mi(this.value.arrayValue,{nullValue:"NULL_VALUE"}))return!1;const t=e.data.field(this.field);return t!==null&&!Mi(this.value.arrayValue,t)}}class Jb extends L{constructor(e,t){super(e,"array-contains-any",t)}matches(e){const t=e.data.field(this.field);return!(!Ui(t)||!t.arrayValue.values)&&t.arrayValue.values.some(r=>Mi(this.value.arrayValue,r))}}/**
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
 */class Xb{constructor(e,t=null,r=[],i=[],s=null,o=null,a=null){this.path=e,this.collectionGroup=t,this.orderBy=r,this.filters=i,this.limit=s,this.startAt=o,this.endAt=a,this.ft=null}}function _c(n,e=null,t=[],r=[],i=null,s=null,o=null){return new Xb(n,e,t,r,i,s,o)}function Un(n){const e=T(n);if(e.ft===null){let t=e.path.canonicalString();e.collectionGroup!==null&&(t+="|cg:"+e.collectionGroup),t+="|f:",t+=e.filters.map(r=>wc(r)).join(","),t+="|ob:",t+=e.orderBy.map(r=>function(i){return i.field.canonicalString()+i.dir}(r)).join(","),as(e.limit)||(t+="|l:",t+=e.limit),e.startAt&&(t+="|lb:",t+=e.startAt.inclusive?"b:":"a:",t+=e.startAt.position.map(r=>wr(r)).join(",")),e.endAt&&(t+="|ub:",t+=e.endAt.inclusive?"a:":"b:",t+=e.endAt.position.map(r=>wr(r)).join(",")),e.ft=t}return e.ft}function cs(n,e){if(n.limit!==e.limit||n.orderBy.length!==e.orderBy.length)return!1;for(let t=0;t<n.orderBy.length;t++)if(!Gb(n.orderBy[t],e.orderBy[t]))return!1;if(n.filters.length!==e.filters.length)return!1;for(let t=0;t<n.filters.length;t++)if(!wm(n.filters[t],e.filters[t]))return!1;return n.collectionGroup===e.collectionGroup&&!!n.path.isEqual(e.path)&&!!Dh(n.startAt,e.startAt)&&Dh(n.endAt,e.endAt)}function uo(n){return I.isDocumentKey(n.path)&&n.collectionGroup===null&&n.filters.length===0}function lo(n,e){return n.filters.filter(t=>t instanceof L&&t.field.isEqual(e))}function Ph(n,e,t){let r=Bs,i=!0;for(const s of lo(n,e)){let o=Bs,a=!0;switch(s.op){case"<":case"<=":o=zb(s.value);break;case"==":case"in":case">=":o=s.value;break;case">":o=s.value,a=!1;break;case"!=":case"not-in":o=Bs}Rh({value:r,inclusive:i},{value:o,inclusive:a})<0&&(r=o,i=a)}if(t!==null){for(let s=0;s<n.orderBy.length;++s)if(n.orderBy[s].field.isEqual(e)){const o=t.position[s];Rh({value:r,inclusive:i},{value:o,inclusive:t.inclusive})<0&&(r=o,i=t.inclusive);break}}return{value:r,inclusive:i}}function xh(n,e,t){let r=zt,i=!0;for(const s of lo(n,e)){let o=zt,a=!0;switch(s.op){case">=":case">":o=jb(s.value),a=!1;break;case"==":case"in":case"<=":o=s.value;break;case"<":o=s.value,a=!1;break;case"!=":case"not-in":o=zt}Ch({value:r,inclusive:i},{value:o,inclusive:a})>0&&(r=o,i=a)}if(t!==null){for(let s=0;s<n.orderBy.length;++s)if(n.orderBy[s].field.isEqual(e)){const o=t.position[s];Ch({value:r,inclusive:i},{value:o,inclusive:t.inclusive})>0&&(r=o,i=t.inclusive);break}}return{value:r,inclusive:i}}/**
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
 */class Pt{constructor(e,t=null,r=[],i=[],s=null,o="F",a=null,c=null){this.path=e,this.collectionGroup=t,this.explicitOrderBy=r,this.filters=i,this.limit=s,this.limitType=o,this.startAt=a,this.endAt=c,this.dt=null,this.wt=null,this.startAt,this.endAt}}function bm(n,e,t,r,i,s,o,a){return new Pt(n,e,t,r,i,s,o,a)}function Fr(n){return new Pt(n)}function Oh(n){return n.filters.length===0&&n.limit===null&&n.startAt==null&&n.endAt==null&&(n.explicitOrderBy.length===0||n.explicitOrderBy.length===1&&n.explicitOrderBy[0].field.isKeyField())}function Ou(n){return n.explicitOrderBy.length>0?n.explicitOrderBy[0].field:null}function Yo(n){for(const e of n.filters){const t=e.getFirstInequalityField();if(t!==null)return t}return null}function Lu(n){return n.collectionGroup!==null}function Cn(n){const e=T(n);if(e.dt===null){e.dt=[];const t=Yo(e),r=Ou(e);if(t!==null&&r===null)t.isKeyField()||e.dt.push(new dr(t)),e.dt.push(new dr(ie.keyField(),"asc"));else{let i=!1;for(const s of e.explicitOrderBy)e.dt.push(s),s.field.isKeyField()&&(i=!0);if(!i){const s=e.explicitOrderBy.length>0?e.explicitOrderBy[e.explicitOrderBy.length-1].dir:"asc";e.dt.push(new dr(ie.keyField(),s))}}}return e.dt}function ze(n){const e=T(n);if(!e.wt)if(e.limitType==="F")e.wt=_c(e.path,e.collectionGroup,Cn(e),e.filters,e.limit,e.startAt,e.endAt);else{const t=[];for(const s of Cn(e)){const o=s.dir==="desc"?"asc":"desc";t.push(new dr(s.field,o))}const r=e.endAt?new Xt(e.endAt.position,e.endAt.inclusive):null,i=e.startAt?new Xt(e.startAt.position,e.startAt.inclusive):null;e.wt=_c(e.path,e.collectionGroup,t,e.filters,e.limit,r,i)}return e.wt}function Ic(n,e){e.getFirstInequalityField(),Yo(n);const t=n.filters.concat([e]);return new Pt(n.path,n.collectionGroup,n.explicitOrderBy.slice(),t,n.limit,n.limitType,n.startAt,n.endAt)}function ho(n,e,t){return new Pt(n.path,n.collectionGroup,n.explicitOrderBy.slice(),n.filters.slice(),e,t,n.startAt,n.endAt)}function us(n,e){return cs(ze(n),ze(e))&&n.limitType===e.limitType}function Sm(n){return`${Un(ze(n))}|lt:${n.limitType}`}function Tc(n){return`Query(target=${function(e){let t=e.path.canonicalString();return e.collectionGroup!==null&&(t+=" collectionGroup="+e.collectionGroup),e.filters.length>0&&(t+=`, filters: [${e.filters.map(r=>Im(r)).join(", ")}]`),as(e.limit)||(t+=", limit: "+e.limit),e.orderBy.length>0&&(t+=`, orderBy: [${e.orderBy.map(r=>function(i){return`${i.field.canonicalString()} (${i.dir})`}(r)).join(", ")}]`),e.startAt&&(t+=", startAt: ",t+=e.startAt.inclusive?"b:":"a:",t+=e.startAt.position.map(r=>wr(r)).join(",")),e.endAt&&(t+=", endAt: ",t+=e.endAt.inclusive?"a:":"b:",t+=e.endAt.position.map(r=>wr(r)).join(",")),`Target(${t})`}(ze(n))}; limitType=${n.limitType})`}function ls(n,e){return e.isFoundDocument()&&function(t,r){const i=r.key.path;return t.collectionGroup!==null?r.key.hasCollectionId(t.collectionGroup)&&t.path.isPrefixOf(i):I.isDocumentKey(t.path)?t.path.isEqual(i):t.path.isImmediateParentOf(i)}(n,e)&&function(t,r){for(const i of Cn(t))if(!i.field.isKeyField()&&r.data.field(i.field)===null)return!1;return!0}(n,e)&&function(t,r){for(const i of t.filters)if(!i.matches(r))return!1;return!0}(n,e)&&function(t,r){return!(t.startAt&&!function(i,s,o){const a=Nh(i,s,o);return i.inclusive?a<=0:a<0}(t.startAt,Cn(t),r)||t.endAt&&!function(i,s,o){const a=Nh(i,s,o);return i.inclusive?a>=0:a>0}(t.endAt,Cn(t),r))}(n,e)}function km(n){return n.collectionGroup||(n.path.length%2==1?n.path.lastSegment():n.path.get(n.path.length-2))}function Am(n){return(e,t)=>{let r=!1;for(const i of Cn(n)){const s=Zb(i,e,t);if(s!==0)return s;r=r||i.field.isKeyField()}return 0}}function Zb(n,e,t){const r=n.field.isKeyField()?I.comparator(e.key,t.key):function(i,s,o){const a=s.data.field(i),c=o.data.field(i);return a!==null&&c!==null?Jt(a,c):b()}(n.field,e,t);switch(n.dir){case"asc":return r;case"desc":return-1*r;default:return b()}}/**
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
 */class cn{constructor(e,t){this.mapKeyFn=e,this.equalsFn=t,this.inner={},this.innerSize=0}get(e){const t=this.mapKeyFn(e),r=this.inner[t];if(r!==void 0){for(const[i,s]of r)if(this.equalsFn(i,e))return s}}has(e){return this.get(e)!==void 0}set(e,t){const r=this.mapKeyFn(e),i=this.inner[r];if(i===void 0)return this.inner[r]=[[e,t]],void this.innerSize++;for(let s=0;s<i.length;s++)if(this.equalsFn(i[s][0],e))return void(i[s]=[e,t]);i.push([e,t]),this.innerSize++}delete(e){const t=this.mapKeyFn(e),r=this.inner[t];if(r===void 0)return!1;for(let i=0;i<r.length;i++)if(this.equalsFn(r[i][0],e))return r.length===1?delete this.inner[t]:r.splice(i,1),this.innerSize--,!0;return!1}forEach(e){Hn(this.inner,(t,r)=>{for(const[i,s]of r)e(i,s)})}isEmpty(){return fm(this.inner)}size(){return this.innerSize}}/**
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
 */const eS=new te(I.comparator);function $e(){return eS}const Rm=new te(I.comparator);function ai(...n){let e=Rm;for(const t of n)e=e.insert(t.key,t);return e}function Cm(n){let e=Rm;return n.forEach((t,r)=>e=e.insert(t,r.overlayedDocument)),e}function lt(){return mi()}function Nm(){return mi()}function mi(){return new cn(n=>n.toString(),(n,e)=>n.isEqual(e))}const tS=new te(I.comparator),nS=new j(I.comparator);function P(...n){let e=nS;for(const t of n)e=e.add(t);return e}const rS=new j(D);function Jo(){return rS}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Dm(n,e){if(n.useProto3Json){if(isNaN(e))return{doubleValue:"NaN"};if(e===1/0)return{doubleValue:"Infinity"};if(e===-1/0)return{doubleValue:"-Infinity"}}return{doubleValue:Oi(e)?"-0":e}}function Pm(n){return{integerValue:""+n}}function xm(n,e){return cm(e)?Pm(e):Dm(n,e)}/**
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
 */class Xo{constructor(){this._=void 0}}function iS(n,e,t){return n instanceof Ir?function(r,i){const s={fields:{__type__:{stringValue:"server_timestamp"},__local_write_time__:{timestampValue:{seconds:r.seconds,nanos:r.nanoseconds}}}};return i&&(s.fields.__previous_value__=i),{mapValue:s}}(t,e):n instanceof Fn?Lm(n,e):n instanceof Vn?Mm(n,e):function(r,i){const s=Om(r,i),o=Lh(s)+Lh(r._t);return yc(s)&&yc(r._t)?Pm(o):Dm(r.serializer,o)}(n,e)}function sS(n,e,t){return n instanceof Fn?Lm(n,e):n instanceof Vn?Mm(n,e):t}function Om(n,e){return n instanceof Tr?yc(t=e)||function(r){return!!r&&"doubleValue"in r}(t)?e:{integerValue:0}:null;var t}class Ir extends Xo{}class Fn extends Xo{constructor(e){super(),this.elements=e}}function Lm(n,e){const t=Um(e);for(const r of n.elements)t.some(i=>mt(i,r))||t.push(r);return{arrayValue:{values:t}}}class Vn extends Xo{constructor(e){super(),this.elements=e}}function Mm(n,e){let t=Um(e);for(const r of n.elements)t=t.filter(i=>!mt(i,r));return{arrayValue:{values:t}}}class Tr extends Xo{constructor(e,t){super(),this.serializer=e,this._t=t}}function Lh(n){return Z(n.integerValue||n.doubleValue)}function Um(n){return Ui(n)&&n.arrayValue.values?n.arrayValue.values.slice():[]}/**
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
 */class hs{constructor(e,t){this.field=e,this.transform=t}}function oS(n,e){return n.field.isEqual(e.field)&&function(t,r){return t instanceof Fn&&r instanceof Fn||t instanceof Vn&&r instanceof Vn?vr(t.elements,r.elements,mt):t instanceof Tr&&r instanceof Tr?mt(t._t,r._t):t instanceof Ir&&r instanceof Ir}(n.transform,e.transform)}class aS{constructor(e,t){this.version=e,this.transformResults=t}}class Q{constructor(e,t){this.updateTime=e,this.exists=t}static none(){return new Q}static exists(e){return new Q(void 0,e)}static updateTime(e){return new Q(e)}get isNone(){return this.updateTime===void 0&&this.exists===void 0}isEqual(e){return this.exists===e.exists&&(this.updateTime?!!e.updateTime&&this.updateTime.isEqual(e.updateTime):!e.updateTime)}}function $s(n,e){return n.updateTime!==void 0?e.isFoundDocument()&&e.version.isEqual(n.updateTime):n.exists===void 0||n.exists===e.isFoundDocument()}class Zo{}function Fm(n,e){if(!n.hasLocalMutations||e&&e.fields.length===0)return null;if(e===null)return n.isNoDocument()?new Br(n.key,Q.none()):new Vr(n.key,n.data,Q.none());{const t=n.data,r=_e.empty();let i=new j(ie.comparator);for(let s of e.fields)if(!i.has(s)){let o=t.field(s);o===null&&s.length>1&&(s=s.popLast(),o=t.field(s)),o===null?r.delete(s):r.set(s,o),i=i.add(s)}return new xt(n.key,r,new qe(i.toArray()),Q.none())}}function cS(n,e,t){n instanceof Vr?function(r,i,s){const o=r.value.clone(),a=Uh(r.fieldTransforms,i,s.transformResults);o.setAll(a),i.convertToFoundDocument(s.version,o).setHasCommittedMutations()}(n,e,t):n instanceof xt?function(r,i,s){if(!$s(r.precondition,i))return void i.convertToUnknownDocument(s.version);const o=Uh(r.fieldTransforms,i,s.transformResults),a=i.data;a.setAll(Vm(r)),a.setAll(o),i.convertToFoundDocument(s.version,a).setHasCommittedMutations()}(n,e,t):function(r,i,s){i.convertToNoDocument(s.version).setHasCommittedMutations()}(0,e,t)}function gi(n,e,t,r){return n instanceof Vr?function(i,s,o,a){if(!$s(i.precondition,s))return o;const c=i.value.clone(),u=Fh(i.fieldTransforms,a,s);return c.setAll(u),s.convertToFoundDocument(s.version,c).setHasLocalMutations(),null}(n,e,t,r):n instanceof xt?function(i,s,o,a){if(!$s(i.precondition,s))return o;const c=Fh(i.fieldTransforms,a,s),u=s.data;return u.setAll(Vm(i)),u.setAll(c),s.convertToFoundDocument(s.version,u).setHasLocalMutations(),o===null?null:o.unionWith(i.fieldMask.fields).unionWith(i.fieldTransforms.map(l=>l.field))}(n,e,t,r):function(i,s,o){return $s(i.precondition,s)?(s.convertToNoDocument(s.version).setHasLocalMutations(),null):o}(n,e,t)}function uS(n,e){let t=null;for(const r of n.fieldTransforms){const i=e.data.field(r.field),s=Om(r.transform,i||null);s!=null&&(t===null&&(t=_e.empty()),t.set(r.field,s))}return t||null}function Mh(n,e){return n.type===e.type&&!!n.key.isEqual(e.key)&&!!n.precondition.isEqual(e.precondition)&&!!function(t,r){return t===void 0&&r===void 0||!(!t||!r)&&vr(t,r,(i,s)=>oS(i,s))}(n.fieldTransforms,e.fieldTransforms)&&(n.type===0?n.value.isEqual(e.value):n.type!==1||n.data.isEqual(e.data)&&n.fieldMask.isEqual(e.fieldMask))}class Vr extends Zo{constructor(e,t,r,i=[]){super(),this.key=e,this.value=t,this.precondition=r,this.fieldTransforms=i,this.type=0}getFieldMask(){return null}}class xt extends Zo{constructor(e,t,r,i,s=[]){super(),this.key=e,this.data=t,this.fieldMask=r,this.precondition=i,this.fieldTransforms=s,this.type=1}getFieldMask(){return this.fieldMask}}function Vm(n){const e=new Map;return n.fieldMask.fields.forEach(t=>{if(!t.isEmpty()){const r=n.data.field(t);e.set(t,r)}}),e}function Uh(n,e,t){const r=new Map;A(n.length===t.length);for(let i=0;i<t.length;i++){const s=n[i],o=s.transform,a=e.data.field(s.field);r.set(s.field,sS(o,a,t[i]))}return r}function Fh(n,e,t){const r=new Map;for(const i of n){const s=i.transform,o=t.data.field(i.field);r.set(i.field,iS(s,o,e))}return r}class Br extends Zo{constructor(e,t){super(),this.key=e,this.precondition=t,this.type=2,this.fieldTransforms=[]}getFieldMask(){return null}}class Mu extends Zo{constructor(e,t){super(),this.key=e,this.precondition=t,this.type=3,this.fieldTransforms=[]}getFieldMask(){return null}}/**
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
 */class Uu{constructor(e,t,r,i){this.batchId=e,this.localWriteTime=t,this.baseMutations=r,this.mutations=i}applyToRemoteDocument(e,t){const r=t.mutationResults;for(let i=0;i<this.mutations.length;i++){const s=this.mutations[i];s.key.isEqual(e.key)&&cS(s,e,r[i])}}applyToLocalView(e,t){for(const r of this.baseMutations)r.key.isEqual(e.key)&&(t=gi(r,e,t,this.localWriteTime));for(const r of this.mutations)r.key.isEqual(e.key)&&(t=gi(r,e,t,this.localWriteTime));return t}applyToLocalDocumentSet(e,t){const r=Nm();return this.mutations.forEach(i=>{const s=e.get(i.key),o=s.overlayedDocument;let a=this.applyToLocalView(o,s.mutatedFields);a=t.has(i.key)?null:a;const c=Fm(o,a);c!==null&&r.set(i.key,c),o.isValidDocument()||o.convertToNoDocument(R.min())}),r}keys(){return this.mutations.reduce((e,t)=>e.add(t.key),P())}isEqual(e){return this.batchId===e.batchId&&vr(this.mutations,e.mutations,(t,r)=>Mh(t,r))&&vr(this.baseMutations,e.baseMutations,(t,r)=>Mh(t,r))}}class Fu{constructor(e,t,r,i){this.batch=e,this.commitVersion=t,this.mutationResults=r,this.docVersions=i}static from(e,t,r){A(e.mutations.length===r.length);let i=tS;const s=e.mutations;for(let o=0;o<s.length;o++)i=i.insert(s[o].key,r[o].version);return new Fu(e,t,r,i)}}/**
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
 */class Vu{constructor(e,t){this.largestBatchId=e,this.mutation=t}getKey(){return this.mutation.key}isEqual(e){return e!==null&&this.mutation===e.mutation}toString(){return`Overlay{
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
 */class lS{constructor(e){this.count=e}}/**
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
 */var ce,M;function Bm(n){switch(n){default:return b();case m.CANCELLED:case m.UNKNOWN:case m.DEADLINE_EXCEEDED:case m.RESOURCE_EXHAUSTED:case m.INTERNAL:case m.UNAVAILABLE:case m.UNAUTHENTICATED:return!1;case m.INVALID_ARGUMENT:case m.NOT_FOUND:case m.ALREADY_EXISTS:case m.PERMISSION_DENIED:case m.FAILED_PRECONDITION:case m.ABORTED:case m.OUT_OF_RANGE:case m.UNIMPLEMENTED:case m.DATA_LOSS:return!0}}function qm(n){if(n===void 0)return re("GRPC error has no .code"),m.UNKNOWN;switch(n){case ce.OK:return m.OK;case ce.CANCELLED:return m.CANCELLED;case ce.UNKNOWN:return m.UNKNOWN;case ce.DEADLINE_EXCEEDED:return m.DEADLINE_EXCEEDED;case ce.RESOURCE_EXHAUSTED:return m.RESOURCE_EXHAUSTED;case ce.INTERNAL:return m.INTERNAL;case ce.UNAVAILABLE:return m.UNAVAILABLE;case ce.UNAUTHENTICATED:return m.UNAUTHENTICATED;case ce.INVALID_ARGUMENT:return m.INVALID_ARGUMENT;case ce.NOT_FOUND:return m.NOT_FOUND;case ce.ALREADY_EXISTS:return m.ALREADY_EXISTS;case ce.PERMISSION_DENIED:return m.PERMISSION_DENIED;case ce.FAILED_PRECONDITION:return m.FAILED_PRECONDITION;case ce.ABORTED:return m.ABORTED;case ce.OUT_OF_RANGE:return m.OUT_OF_RANGE;case ce.UNIMPLEMENTED:return m.UNIMPLEMENTED;case ce.DATA_LOSS:return m.DATA_LOSS;default:return b()}}(M=ce||(ce={}))[M.OK=0]="OK",M[M.CANCELLED=1]="CANCELLED",M[M.UNKNOWN=2]="UNKNOWN",M[M.INVALID_ARGUMENT=3]="INVALID_ARGUMENT",M[M.DEADLINE_EXCEEDED=4]="DEADLINE_EXCEEDED",M[M.NOT_FOUND=5]="NOT_FOUND",M[M.ALREADY_EXISTS=6]="ALREADY_EXISTS",M[M.PERMISSION_DENIED=7]="PERMISSION_DENIED",M[M.UNAUTHENTICATED=16]="UNAUTHENTICATED",M[M.RESOURCE_EXHAUSTED=8]="RESOURCE_EXHAUSTED",M[M.FAILED_PRECONDITION=9]="FAILED_PRECONDITION",M[M.ABORTED=10]="ABORTED",M[M.OUT_OF_RANGE=11]="OUT_OF_RANGE",M[M.UNIMPLEMENTED=12]="UNIMPLEMENTED",M[M.INTERNAL=13]="INTERNAL",M[M.UNAVAILABLE=14]="UNAVAILABLE",M[M.DATA_LOSS=15]="DATA_LOSS";/**
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
 */class Bu{constructor(){this.onExistenceFilterMismatchCallbacks=new Map}static get instance(){return ks}static getOrCreateInstance(){return ks===null&&(ks=new Bu),ks}onExistenceFilterMismatch(e){const t=Symbol();return this.onExistenceFilterMismatchCallbacks.set(t,e),()=>this.onExistenceFilterMismatchCallbacks.delete(t)}notifyOnExistenceFilterMismatch(e){this.onExistenceFilterMismatchCallbacks.forEach(t=>t(e))}}let ks=null;/**
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
 */class ds{constructor(e,t,r,i,s){this.snapshotVersion=e,this.targetChanges=t,this.targetMismatches=r,this.documentUpdates=i,this.resolvedLimboDocuments=s}static createSynthesizedRemoteEventForCurrentChange(e,t,r){const i=new Map;return i.set(e,fs.createSynthesizedTargetChangeForCurrentChange(e,t,r)),new ds(R.min(),i,Jo(),$e(),P())}}class fs{constructor(e,t,r,i,s){this.resumeToken=e,this.current=t,this.addedDocuments=r,this.modifiedDocuments=i,this.removedDocuments=s}static createSynthesizedTargetChangeForCurrentChange(e,t,r){return new fs(r,t,P(),P(),P())}}/**
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
 */class zs{constructor(e,t,r,i){this.It=e,this.removedTargetIds=t,this.key=r,this.Tt=i}}class $m{constructor(e,t){this.targetId=e,this.Et=t}}class zm{constructor(e,t,r=he.EMPTY_BYTE_STRING,i=null){this.state=e,this.targetIds=t,this.resumeToken=r,this.cause=i}}class Vh{constructor(){this.At=0,this.Rt=qh(),this.vt=he.EMPTY_BYTE_STRING,this.bt=!1,this.Pt=!0}get current(){return this.bt}get resumeToken(){return this.vt}get Vt(){return this.At!==0}get St(){return this.Pt}Dt(e){e.approximateByteSize()>0&&(this.Pt=!0,this.vt=e)}Ct(){let e=P(),t=P(),r=P();return this.Rt.forEach((i,s)=>{switch(s){case 0:e=e.add(i);break;case 2:t=t.add(i);break;case 1:r=r.add(i);break;default:b()}}),new fs(this.vt,this.bt,e,t,r)}xt(){this.Pt=!1,this.Rt=qh()}Nt(e,t){this.Pt=!0,this.Rt=this.Rt.insert(e,t)}kt(e){this.Pt=!0,this.Rt=this.Rt.remove(e)}Ot(){this.At+=1}$t(){this.At-=1}Mt(){this.Pt=!0,this.bt=!0}}class hS{constructor(e){this.Ft=e,this.Bt=new Map,this.Lt=$e(),this.qt=Bh(),this.Ut=new j(D)}Kt(e){for(const t of e.It)e.Tt&&e.Tt.isFoundDocument()?this.Gt(t,e.Tt):this.Qt(t,e.key,e.Tt);for(const t of e.removedTargetIds)this.Qt(t,e.key,e.Tt)}zt(e){this.forEachTarget(e,t=>{const r=this.jt(t);switch(e.state){case 0:this.Wt(t)&&r.Dt(e.resumeToken);break;case 1:r.$t(),r.Vt||r.xt(),r.Dt(e.resumeToken);break;case 2:r.$t(),r.Vt||this.removeTarget(t);break;case 3:this.Wt(t)&&(r.Mt(),r.Dt(e.resumeToken));break;case 4:this.Wt(t)&&(this.Ht(t),r.Dt(e.resumeToken));break;default:b()}})}forEachTarget(e,t){e.targetIds.length>0?e.targetIds.forEach(t):this.Bt.forEach((r,i)=>{this.Wt(i)&&t(i)})}Jt(e){var t;const r=e.targetId,i=e.Et.count,s=this.Yt(r);if(s){const o=s.target;if(uo(o))if(i===0){const a=new I(o.path);this.Qt(r,a,G.newNoDocument(a,R.min()))}else A(i===1);else{const a=this.Zt(r);a!==i&&(this.Ht(r),this.Ut=this.Ut.add(r),(t=Bu.instance)===null||t===void 0||t.notifyOnExistenceFilterMismatch({localCacheCount:a,existenceFilterCount:e.Et.count}))}}}Xt(e){const t=new Map;this.Bt.forEach((s,o)=>{const a=this.Yt(o);if(a){if(s.current&&uo(a.target)){const c=new I(a.target.path);this.Lt.get(c)!==null||this.te(o,c)||this.Qt(o,c,G.newNoDocument(c,e))}s.St&&(t.set(o,s.Ct()),s.xt())}});let r=P();this.qt.forEach((s,o)=>{let a=!0;o.forEachWhile(c=>{const u=this.Yt(c);return!u||u.purpose===2||(a=!1,!1)}),a&&(r=r.add(s))}),this.Lt.forEach((s,o)=>o.setReadTime(e));const i=new ds(e,t,this.Ut,this.Lt,r);return this.Lt=$e(),this.qt=Bh(),this.Ut=new j(D),i}Gt(e,t){if(!this.Wt(e))return;const r=this.te(e,t.key)?2:0;this.jt(e).Nt(t.key,r),this.Lt=this.Lt.insert(t.key,t),this.qt=this.qt.insert(t.key,this.ee(t.key).add(e))}Qt(e,t,r){if(!this.Wt(e))return;const i=this.jt(e);this.te(e,t)?i.Nt(t,1):i.kt(t),this.qt=this.qt.insert(t,this.ee(t).delete(e)),r&&(this.Lt=this.Lt.insert(t,r))}removeTarget(e){this.Bt.delete(e)}Zt(e){const t=this.jt(e).Ct();return this.Ft.getRemoteKeysForTarget(e).size+t.addedDocuments.size-t.removedDocuments.size}Ot(e){this.jt(e).Ot()}jt(e){let t=this.Bt.get(e);return t||(t=new Vh,this.Bt.set(e,t)),t}ee(e){let t=this.qt.get(e);return t||(t=new j(D),this.qt=this.qt.insert(e,t)),t}Wt(e){const t=this.Yt(e)!==null;return t||v("WatchChangeAggregator","Detected inactive target",e),t}Yt(e){const t=this.Bt.get(e);return t&&t.Vt?null:this.Ft.ne(e)}Ht(e){this.Bt.set(e,new Vh),this.Ft.getRemoteKeysForTarget(e).forEach(t=>{this.Qt(e,t,null)})}te(e,t){return this.Ft.getRemoteKeysForTarget(e).has(t)}}function Bh(){return new te(I.comparator)}function qh(){return new te(I.comparator)}/**
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
 */const dS=(()=>({asc:"ASCENDING",desc:"DESCENDING"}))(),fS=(()=>({"<":"LESS_THAN","<=":"LESS_THAN_OR_EQUAL",">":"GREATER_THAN",">=":"GREATER_THAN_OR_EQUAL","==":"EQUAL","!=":"NOT_EQUAL","array-contains":"ARRAY_CONTAINS",in:"IN","not-in":"NOT_IN","array-contains-any":"ARRAY_CONTAINS_ANY"}))(),pS=(()=>({and:"AND",or:"OR"}))();class mS{constructor(e,t){this.databaseId=e,this.useProto3Json=t}}function Er(n,e){return n.useProto3Json?`${new Date(1e3*e.seconds).toISOString().replace(/\.\d*/,"").replace("Z","")}.${("000000000"+e.nanoseconds).slice(-9)}Z`:{seconds:""+e.seconds,nanos:e.nanoseconds}}function jm(n,e){return n.useProto3Json?e.toBase64():e.toUint8Array()}function gS(n,e){return Er(n,e.toTimestamp())}function se(n){return A(!!n),R.fromTimestamp(function(e){const t=Qt(e);return new Y(t.seconds,t.nanos)}(n))}function qu(n,e){return function(t){return new F(["projects",t.projectId,"databases",t.database])}(n).child("documents").child(e).canonicalString()}function Gm(n){const e=F.fromString(n);return A(eg(e)),e}function Fi(n,e){return qu(n.databaseId,e.path)}function ht(n,e){const t=Gm(e);if(t.get(1)!==n.databaseId.projectId)throw new y(m.INVALID_ARGUMENT,"Tried to deserialize key from different project: "+t.get(1)+" vs "+n.databaseId.projectId);if(t.get(3)!==n.databaseId.database)throw new y(m.INVALID_ARGUMENT,"Tried to deserialize key from different database: "+t.get(3)+" vs "+n.databaseId.database);return new I(Wm(t))}function Ec(n,e){return qu(n.databaseId,e)}function Km(n){const e=Gm(n);return e.length===4?F.emptyPath():Wm(e)}function Vi(n){return new F(["projects",n.databaseId.projectId,"databases",n.databaseId.database]).canonicalString()}function Wm(n){return A(n.length>4&&n.get(4)==="documents"),n.popFirst(5)}function $h(n,e,t){return{name:Fi(n,e),fields:t.value.mapValue.fields}}function Hm(n,e,t){const r=ht(n,e.name),i=se(e.updateTime),s=e.createTime?se(e.createTime):R.min(),o=new _e({mapValue:{fields:e.fields}}),a=G.newFoundDocument(r,i,s,o);return t&&a.setHasCommittedMutations(),t?a.setHasCommittedMutations():a}function yS(n,e){return"found"in e?function(t,r){A(!!r.found),r.found.name,r.found.updateTime;const i=ht(t,r.found.name),s=se(r.found.updateTime),o=r.found.createTime?se(r.found.createTime):R.min(),a=new _e({mapValue:{fields:r.found.fields}});return G.newFoundDocument(i,s,o,a)}(n,e):"missing"in e?function(t,r){A(!!r.missing),A(!!r.readTime);const i=ht(t,r.missing),s=se(r.readTime);return G.newNoDocument(i,s)}(n,e):b()}function vS(n,e){let t;if("targetChange"in e){e.targetChange;const r=function(c){return c==="NO_CHANGE"?0:c==="ADD"?1:c==="REMOVE"?2:c==="CURRENT"?3:c==="RESET"?4:b()}(e.targetChange.targetChangeType||"NO_CHANGE"),i=e.targetChange.targetIds||[],s=function(c,u){return c.useProto3Json?(A(u===void 0||typeof u=="string"),he.fromBase64String(u||"")):(A(u===void 0||u instanceof Uint8Array),he.fromUint8Array(u||new Uint8Array))}(n,e.targetChange.resumeToken),o=e.targetChange.cause,a=o&&function(c){const u=c.code===void 0?m.UNKNOWN:qm(c.code);return new y(u,c.message||"")}(o);t=new zm(r,i,s,a||null)}else if("documentChange"in e){e.documentChange;const r=e.documentChange;r.document,r.document.name,r.document.updateTime;const i=ht(n,r.document.name),s=se(r.document.updateTime),o=r.document.createTime?se(r.document.createTime):R.min(),a=new _e({mapValue:{fields:r.document.fields}}),c=G.newFoundDocument(i,s,o,a),u=r.targetIds||[],l=r.removedTargetIds||[];t=new zs(u,l,c.key,c)}else if("documentDelete"in e){e.documentDelete;const r=e.documentDelete;r.document;const i=ht(n,r.document),s=r.readTime?se(r.readTime):R.min(),o=G.newNoDocument(i,s),a=r.removedTargetIds||[];t=new zs([],a,o.key,o)}else if("documentRemove"in e){e.documentRemove;const r=e.documentRemove;r.document;const i=ht(n,r.document),s=r.removedTargetIds||[];t=new zs([],s,i,null)}else{if(!("filter"in e))return b();{e.filter;const r=e.filter;r.targetId;const i=r.count||0,s=new lS(i),o=r.targetId;t=new $m(o,s)}}return t}function Bi(n,e){let t;if(e instanceof Vr)t={update:$h(n,e.key,e.value)};else if(e instanceof Br)t={delete:Fi(n,e.key)};else if(e instanceof xt)t={update:$h(n,e.key,e.data),updateMask:bS(e.fieldMask)};else{if(!(e instanceof Mu))return b();t={verify:Fi(n,e.key)}}return e.fieldTransforms.length>0&&(t.updateTransforms=e.fieldTransforms.map(r=>function(i,s){const o=s.transform;if(o instanceof Ir)return{fieldPath:s.field.canonicalString(),setToServerValue:"REQUEST_TIME"};if(o instanceof Fn)return{fieldPath:s.field.canonicalString(),appendMissingElements:{values:o.elements}};if(o instanceof Vn)return{fieldPath:s.field.canonicalString(),removeAllFromArray:{values:o.elements}};if(o instanceof Tr)return{fieldPath:s.field.canonicalString(),increment:o._t};throw b()}(0,r))),e.precondition.isNone||(t.currentDocument=function(r,i){return i.updateTime!==void 0?{updateTime:gS(r,i.updateTime)}:i.exists!==void 0?{exists:i.exists}:b()}(n,e.precondition)),t}function bc(n,e){const t=e.currentDocument?function(i){return i.updateTime!==void 0?Q.updateTime(se(i.updateTime)):i.exists!==void 0?Q.exists(i.exists):Q.none()}(e.currentDocument):Q.none(),r=e.updateTransforms?e.updateTransforms.map(i=>function(s,o){let a=null;if("setToServerValue"in o)A(o.setToServerValue==="REQUEST_TIME"),a=new Ir;else if("appendMissingElements"in o){const u=o.appendMissingElements.values||[];a=new Fn(u)}else if("removeAllFromArray"in o){const u=o.removeAllFromArray.values||[];a=new Vn(u)}else"increment"in o?a=new Tr(s,o.increment):b();const c=ie.fromServerFormat(o.fieldPath);return new hs(c,a)}(n,i)):[];if(e.update){e.update.name;const i=ht(n,e.update.name),s=new _e({mapValue:{fields:e.update.fields}});if(e.updateMask){const o=function(a){const c=a.fieldPaths||[];return new qe(c.map(u=>ie.fromServerFormat(u)))}(e.updateMask);return new xt(i,s,o,t,r)}return new Vr(i,s,t,r)}if(e.delete){const i=ht(n,e.delete);return new Br(i,t)}if(e.verify){const i=ht(n,e.verify);return new Mu(i,t)}return b()}function wS(n,e){return n&&n.length>0?(A(e!==void 0),n.map(t=>function(r,i){let s=r.updateTime?se(r.updateTime):se(i);return s.isEqual(R.min())&&(s=se(i)),new aS(s,r.transformResults||[])}(t,e))):[]}function Qm(n,e){return{documents:[Ec(n,e.path)]}}function Ym(n,e){const t={structuredQuery:{}},r=e.path;e.collectionGroup!==null?(t.parent=Ec(n,r),t.structuredQuery.from=[{collectionId:e.collectionGroup,allDescendants:!0}]):(t.parent=Ec(n,r.popLast()),t.structuredQuery.from=[{collectionId:r.lastSegment()}]);const i=function(c){if(c.length!==0)return Zm(z.create(c,"and"))}(e.filters);i&&(t.structuredQuery.where=i);const s=function(c){if(c.length!==0)return c.map(u=>function(l){return{field:rr(l.field),direction:IS(l.dir)}}(u))}(e.orderBy);s&&(t.structuredQuery.orderBy=s);const o=function(c,u){return c.useProto3Json||as(u)?u:{value:u}}(n,e.limit);var a;return o!==null&&(t.structuredQuery.limit=o),e.startAt&&(t.structuredQuery.startAt={before:(a=e.startAt).inclusive,values:a.position}),e.endAt&&(t.structuredQuery.endAt=function(c){return{before:!c.inclusive,values:c.position}}(e.endAt)),t}function Jm(n){let e=Km(n.parent);const t=n.structuredQuery,r=t.from?t.from.length:0;let i=null;if(r>0){A(r===1);const l=t.from[0];l.allDescendants?i=l.collectionId:e=e.child(l.collectionId)}let s=[];t.where&&(s=function(l){const h=Xm(l);return h instanceof z&&xu(h)?h.getFilters():[h]}(t.where));let o=[];t.orderBy&&(o=t.orderBy.map(l=>function(h){return new dr(ir(h.field),function(d){switch(d){case"ASCENDING":return"asc";case"DESCENDING":return"desc";default:return}}(h.direction))}(l)));let a=null;t.limit&&(a=function(l){let h;return h=typeof l=="object"?l.value:l,as(h)?null:h}(t.limit));let c=null;t.startAt&&(c=function(l){const h=!!l.before,d=l.values||[];return new Xt(d,h)}(t.startAt));let u=null;return t.endAt&&(u=function(l){const h=!l.before,d=l.values||[];return new Xt(d,h)}(t.endAt)),bm(e,i,o,s,a,"F",c,u)}function _S(n,e){const t=function(r,i){switch(i){case 0:return null;case 1:return"existence-filter-mismatch";case 2:return"limbo-document";default:return b()}}(0,e.purpose);return t==null?null:{"goog-listen-tags":t}}function Xm(n){return n.unaryFilter!==void 0?function(e){switch(e.unaryFilter.op){case"IS_NAN":const t=ir(e.unaryFilter.field);return L.create(t,"==",{doubleValue:NaN});case"IS_NULL":const r=ir(e.unaryFilter.field);return L.create(r,"==",{nullValue:"NULL_VALUE"});case"IS_NOT_NAN":const i=ir(e.unaryFilter.field);return L.create(i,"!=",{doubleValue:NaN});case"IS_NOT_NULL":const s=ir(e.unaryFilter.field);return L.create(s,"!=",{nullValue:"NULL_VALUE"});default:return b()}}(n):n.fieldFilter!==void 0?function(e){return L.create(ir(e.fieldFilter.field),function(t){switch(t){case"EQUAL":return"==";case"NOT_EQUAL":return"!=";case"GREATER_THAN":return">";case"GREATER_THAN_OR_EQUAL":return">=";case"LESS_THAN":return"<";case"LESS_THAN_OR_EQUAL":return"<=";case"ARRAY_CONTAINS":return"array-contains";case"IN":return"in";case"NOT_IN":return"not-in";case"ARRAY_CONTAINS_ANY":return"array-contains-any";default:return b()}}(e.fieldFilter.op),e.fieldFilter.value)}(n):n.compositeFilter!==void 0?function(e){return z.create(e.compositeFilter.filters.map(t=>Xm(t)),function(t){switch(t){case"AND":return"and";case"OR":return"or";default:return b()}}(e.compositeFilter.op))}(n):b()}function IS(n){return dS[n]}function TS(n){return fS[n]}function ES(n){return pS[n]}function rr(n){return{fieldPath:n.canonicalString()}}function ir(n){return ie.fromServerFormat(n.fieldPath)}function Zm(n){return n instanceof L?function(e){if(e.op==="=="){if(Ah(e.value))return{unaryFilter:{field:rr(e.field),op:"IS_NAN"}};if(kh(e.value))return{unaryFilter:{field:rr(e.field),op:"IS_NULL"}}}else if(e.op==="!="){if(Ah(e.value))return{unaryFilter:{field:rr(e.field),op:"IS_NOT_NAN"}};if(kh(e.value))return{unaryFilter:{field:rr(e.field),op:"IS_NOT_NULL"}}}return{fieldFilter:{field:rr(e.field),op:TS(e.op),value:e.value}}}(n):n instanceof z?function(e){const t=e.getFilters().map(r=>Zm(r));return t.length===1?t[0]:{compositeFilter:{op:ES(e.op),filters:t}}}(n):b()}function bS(n){const e=[];return n.fields.forEach(t=>e.push(t.canonicalString())),{fieldPaths:e}}function eg(n){return n.length>=4&&n.get(0)==="projects"&&n.get(2)==="databases"}/**
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
 */class jt{constructor(e,t,r,i,s=R.min(),o=R.min(),a=he.EMPTY_BYTE_STRING){this.target=e,this.targetId=t,this.purpose=r,this.sequenceNumber=i,this.snapshotVersion=s,this.lastLimboFreeSnapshotVersion=o,this.resumeToken=a}withSequenceNumber(e){return new jt(this.target,this.targetId,this.purpose,e,this.snapshotVersion,this.lastLimboFreeSnapshotVersion,this.resumeToken)}withResumeToken(e,t){return new jt(this.target,this.targetId,this.purpose,this.sequenceNumber,t,this.lastLimboFreeSnapshotVersion,e)}withLastLimboFreeSnapshotVersion(e){return new jt(this.target,this.targetId,this.purpose,this.sequenceNumber,this.snapshotVersion,e,this.resumeToken)}}/**
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
 */class tg{constructor(e){this.se=e}}function SS(n,e){let t;if(e.document)t=Hm(n.se,e.document,!!e.hasCommittedMutations);else if(e.noDocument){const r=I.fromSegments(e.noDocument.path),i=qn(e.noDocument.readTime);t=G.newNoDocument(r,i),e.hasCommittedMutations&&t.setHasCommittedMutations()}else{if(!e.unknownDocument)return b();{const r=I.fromSegments(e.unknownDocument.path),i=qn(e.unknownDocument.version);t=G.newUnknownDocument(r,i)}}return e.readTime&&t.setReadTime(function(r){const i=new Y(r[0],r[1]);return R.fromTimestamp(i)}(e.readTime)),t}function zh(n,e){const t=e.key,r={prefixPath:t.getCollectionPath().popLast().toArray(),collectionGroup:t.collectionGroup,documentId:t.path.lastSegment(),readTime:fo(e.readTime),hasCommittedMutations:e.hasCommittedMutations};if(e.isFoundDocument())r.document=function(i,s){return{name:Fi(i,s.key),fields:s.data.value.mapValue.fields,updateTime:Er(i,s.version.toTimestamp()),createTime:Er(i,s.createTime.toTimestamp())}}(n.se,e);else if(e.isNoDocument())r.noDocument={path:t.path.toArray(),readTime:Bn(e.version)};else{if(!e.isUnknownDocument())return b();r.unknownDocument={path:t.path.toArray(),version:Bn(e.version)}}return r}function fo(n){const e=n.toTimestamp();return[e.seconds,e.nanoseconds]}function Bn(n){const e=n.toTimestamp();return{seconds:e.seconds,nanoseconds:e.nanoseconds}}function qn(n){const e=new Y(n.seconds,n.nanoseconds);return R.fromTimestamp(e)}function gn(n,e){const t=(e.baseMutations||[]).map(s=>bc(n.se,s));for(let s=0;s<e.mutations.length-1;++s){const o=e.mutations[s];if(s+1<e.mutations.length&&e.mutations[s+1].transform!==void 0){const a=e.mutations[s+1];o.updateTransforms=a.transform.fieldTransforms,e.mutations.splice(s+1,1),++s}}const r=e.mutations.map(s=>bc(n.se,s)),i=Y.fromMillis(e.localWriteTimeMs);return new Uu(e.batchId,i,t,r)}function ci(n){const e=qn(n.readTime),t=n.lastLimboFreeSnapshotVersion!==void 0?qn(n.lastLimboFreeSnapshotVersion):R.min();let r;var i;return n.query.documents!==void 0?(A((i=n.query).documents.length===1),r=ze(Fr(Km(i.documents[0])))):r=function(s){return ze(Jm(s))}(n.query),new jt(r,n.targetId,0,n.lastListenSequenceNumber,e,t,he.fromBase64String(n.resumeToken))}function ng(n,e){const t=Bn(e.snapshotVersion),r=Bn(e.lastLimboFreeSnapshotVersion);let i;i=uo(e.target)?Qm(n.se,e.target):Ym(n.se,e.target);const s=e.resumeToken.toBase64();return{targetId:e.targetId,canonicalId:Un(e.target),readTime:t,resumeToken:s,lastListenSequenceNumber:e.sequenceNumber,lastLimboFreeSnapshotVersion:r,query:i}}function $u(n){const e=Jm({parent:n.parent,structuredQuery:n.structuredQuery});return n.limitType==="LAST"?ho(e,e.limit,"L"):e}function Va(n,e){return new Vu(e.largestBatchId,bc(n.se,e.overlayMutation))}function jh(n,e){const t=e.path.lastSegment();return[n,Ue(e.path.popLast()),t]}function Gh(n,e,t,r){return{indexId:n,uid:e.uid||"",sequenceNumber:t,readTime:Bn(r.readTime),documentKey:Ue(r.documentKey.path),largestBatchId:r.largestBatchId}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class kS{getBundleMetadata(e,t){return Kh(e).get(t).next(r=>{if(r)return{id:(i=r).bundleId,createTime:qn(i.createTime),version:i.version};var i})}saveBundleMetadata(e,t){return Kh(e).put({bundleId:(r=t).id,createTime:Bn(se(r.createTime)),version:r.version});var r}getNamedQuery(e,t){return Wh(e).get(t).next(r=>{if(r)return{name:(i=r).name,query:$u(i.bundledQuery),readTime:qn(i.readTime)};var i})}saveNamedQuery(e,t){return Wh(e).put(function(r){return{name:r.name,readTime:Bn(se(r.readTime)),bundledQuery:r.bundledQuery}}(t))}}function Kh(n){return ye(n,"bundles")}function Wh(n){return ye(n,"namedQueries")}/**
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
 */class ea{constructor(e,t){this.serializer=e,this.userId=t}static ie(e,t){const r=t.uid||"";return new ea(e,r)}getOverlay(e,t){return Yr(e).get(jh(this.userId,t)).next(r=>r?Va(this.serializer,r):null)}getOverlays(e,t){const r=lt();return f.forEach(t,i=>this.getOverlay(e,i).next(s=>{s!==null&&r.set(i,s)})).next(()=>r)}saveOverlays(e,t,r){const i=[];return r.forEach((s,o)=>{const a=new Vu(t,o);i.push(this.re(e,a))}),f.waitFor(i)}removeOverlaysForBatchId(e,t,r){const i=new Set;t.forEach(o=>i.add(Ue(o.getCollectionPath())));const s=[];return i.forEach(o=>{const a=IDBKeyRange.bound([this.userId,o,r],[this.userId,o,r+1],!1,!0);s.push(Yr(e).J("collectionPathOverlayIndex",a))}),f.waitFor(s)}getOverlaysForCollection(e,t,r){const i=lt(),s=Ue(t),o=IDBKeyRange.bound([this.userId,s,r],[this.userId,s,Number.POSITIVE_INFINITY],!0);return Yr(e).j("collectionPathOverlayIndex",o).next(a=>{for(const c of a){const u=Va(this.serializer,c);i.set(u.getKey(),u)}return i})}getOverlaysForCollectionGroup(e,t,r,i){const s=lt();let o;const a=IDBKeyRange.bound([this.userId,t,r],[this.userId,t,Number.POSITIVE_INFINITY],!0);return Yr(e).Z({index:"collectionGroupOverlayIndex",range:a},(c,u,l)=>{const h=Va(this.serializer,u);s.size()<i||h.largestBatchId===o?(s.set(h.getKey(),h),o=h.largestBatchId):l.done()}).next(()=>s)}re(e,t){return Yr(e).put(function(r,i,s){const[o,a,c]=jh(i,s.mutation.key);return{userId:i,collectionPath:a,documentId:c,collectionGroup:s.mutation.key.getCollectionGroup(),largestBatchId:s.largestBatchId,overlayMutation:Bi(r.se,s.mutation)}}(this.serializer,this.userId,t))}}function Yr(n){return ye(n,"documentOverlays")}/**
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
 */class yn{constructor(){}oe(e,t){this.ue(e,t),t.ce()}ue(e,t){if("nullValue"in e)this.ae(t,5);else if("booleanValue"in e)this.ae(t,10),t.he(e.booleanValue?1:0);else if("integerValue"in e)this.ae(t,15),t.he(Z(e.integerValue));else if("doubleValue"in e){const r=Z(e.doubleValue);isNaN(r)?this.ae(t,13):(this.ae(t,15),Oi(r)?t.he(0):t.he(r))}else if("timestampValue"in e){const r=e.timestampValue;this.ae(t,20),typeof r=="string"?t.le(r):(t.le(`${r.seconds||""}`),t.he(r.nanos||0))}else if("stringValue"in e)this.fe(e.stringValue,t),this.de(t);else if("bytesValue"in e)this.ae(t,30),t.we(On(e.bytesValue)),this.de(t);else if("referenceValue"in e)this._e(e.referenceValue,t);else if("geoPointValue"in e){const r=e.geoPointValue;this.ae(t,45),t.he(r.latitude||0),t.he(r.longitude||0)}else"mapValue"in e?mm(e)?this.ae(t,Number.MAX_SAFE_INTEGER):(this.me(e.mapValue,t),this.de(t)):"arrayValue"in e?(this.ge(e.arrayValue,t),this.de(t)):b()}fe(e,t){this.ae(t,25),this.ye(e,t)}ye(e,t){t.le(e)}me(e,t){const r=e.fields||{};this.ae(t,55);for(const i of Object.keys(r))this.fe(i,t),this.ue(r[i],t)}ge(e,t){const r=e.values||[];this.ae(t,50);for(const i of r)this.ue(i,t)}_e(e,t){this.ae(t,37),I.fromName(e).path.forEach(r=>{this.ae(t,60),this.ye(r,t)})}ae(e,t){e.he(t)}de(e){e.he(2)}}yn.pe=new yn;function AS(n){if(n===0)return 8;let e=0;return n>>4==0&&(e+=4,n<<=4),n>>6==0&&(e+=2,n<<=2),n>>7==0&&(e+=1),e}function Hh(n){const e=64-function(t){let r=0;for(let i=0;i<8;++i){const s=AS(255&t[i]);if(r+=s,s!==8)break}return r}(n);return Math.ceil(e/8)}class RS{constructor(){this.buffer=new Uint8Array(1024),this.position=0}Ie(e){const t=e[Symbol.iterator]();let r=t.next();for(;!r.done;)this.Te(r.value),r=t.next();this.Ee()}Ae(e){const t=e[Symbol.iterator]();let r=t.next();for(;!r.done;)this.Re(r.value),r=t.next();this.ve()}be(e){for(const t of e){const r=t.charCodeAt(0);if(r<128)this.Te(r);else if(r<2048)this.Te(960|r>>>6),this.Te(128|63&r);else if(t<"\uD800"||"\uDBFF"<t)this.Te(480|r>>>12),this.Te(128|63&r>>>6),this.Te(128|63&r);else{const i=t.codePointAt(0);this.Te(240|i>>>18),this.Te(128|63&i>>>12),this.Te(128|63&i>>>6),this.Te(128|63&i)}}this.Ee()}Pe(e){for(const t of e){const r=t.charCodeAt(0);if(r<128)this.Re(r);else if(r<2048)this.Re(960|r>>>6),this.Re(128|63&r);else if(t<"\uD800"||"\uDBFF"<t)this.Re(480|r>>>12),this.Re(128|63&r>>>6),this.Re(128|63&r);else{const i=t.codePointAt(0);this.Re(240|i>>>18),this.Re(128|63&i>>>12),this.Re(128|63&i>>>6),this.Re(128|63&i)}}this.ve()}Ve(e){const t=this.Se(e),r=Hh(t);this.De(1+r),this.buffer[this.position++]=255&r;for(let i=t.length-r;i<t.length;++i)this.buffer[this.position++]=255&t[i]}Ce(e){const t=this.Se(e),r=Hh(t);this.De(1+r),this.buffer[this.position++]=~(255&r);for(let i=t.length-r;i<t.length;++i)this.buffer[this.position++]=~(255&t[i])}xe(){this.Ne(255),this.Ne(255)}ke(){this.Oe(255),this.Oe(255)}reset(){this.position=0}seed(e){this.De(e.length),this.buffer.set(e,this.position),this.position+=e.length}$e(){return this.buffer.slice(0,this.position)}Se(e){const t=function(i){const s=new DataView(new ArrayBuffer(8));return s.setFloat64(0,i,!1),new Uint8Array(s.buffer)}(e),r=(128&t[0])!=0;t[0]^=r?255:128;for(let i=1;i<t.length;++i)t[i]^=r?255:0;return t}Te(e){const t=255&e;t===0?(this.Ne(0),this.Ne(255)):t===255?(this.Ne(255),this.Ne(0)):this.Ne(t)}Re(e){const t=255&e;t===0?(this.Oe(0),this.Oe(255)):t===255?(this.Oe(255),this.Oe(0)):this.Oe(e)}Ee(){this.Ne(0),this.Ne(1)}ve(){this.Oe(0),this.Oe(1)}Ne(e){this.De(1),this.buffer[this.position++]=e}Oe(e){this.De(1),this.buffer[this.position++]=~e}De(e){const t=e+this.position;if(t<=this.buffer.length)return;let r=2*this.buffer.length;r<t&&(r=t);const i=new Uint8Array(r);i.set(this.buffer),this.buffer=i}}class CS{constructor(e){this.Me=e}we(e){this.Me.Ie(e)}le(e){this.Me.be(e)}he(e){this.Me.Ve(e)}ce(){this.Me.xe()}}class NS{constructor(e){this.Me=e}we(e){this.Me.Ae(e)}le(e){this.Me.Pe(e)}he(e){this.Me.Ce(e)}ce(){this.Me.ke()}}class Jr{constructor(){this.Me=new RS,this.Fe=new CS(this.Me),this.Be=new NS(this.Me)}seed(e){this.Me.seed(e)}Le(e){return e===0?this.Fe:this.Be}$e(){return this.Me.$e()}reset(){this.Me.reset()}}/**
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
 */class vn{constructor(e,t,r,i){this.indexId=e,this.documentKey=t,this.arrayValue=r,this.directionalValue=i}qe(){const e=this.directionalValue.length,t=e===0||this.directionalValue[e-1]===255?e+1:e,r=new Uint8Array(t);return r.set(this.directionalValue,0),t!==e?r.set([0],this.directionalValue.length):++r[r.length-1],new vn(this.indexId,this.documentKey,this.arrayValue,r)}}function Ut(n,e){let t=n.indexId-e.indexId;return t!==0?t:(t=Qh(n.arrayValue,e.arrayValue),t!==0?t:(t=Qh(n.directionalValue,e.directionalValue),t!==0?t:I.comparator(n.documentKey,e.documentKey)))}function Qh(n,e){for(let t=0;t<n.length&&t<e.length;++t){const r=n[t]-e[t];if(r!==0)return r}return n.length-e.length}/**
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
 */class DS{constructor(e){this.collectionId=e.collectionGroup!=null?e.collectionGroup:e.path.lastSegment(),this.Ue=e.orderBy,this.Ke=[];for(const t of e.filters){const r=t;r.isInequality()?this.Ge=r:this.Ke.push(r)}}Qe(e){A(e.collectionGroup===this.collectionId);const t=pc(e);if(t!==void 0&&!this.ze(t))return!1;const r=pn(e);let i=0,s=0;for(;i<r.length&&this.ze(r[i]);++i);if(i===r.length)return!0;if(this.Ge!==void 0){const o=r[i];if(!this.je(this.Ge,o)||!this.We(this.Ue[s++],o))return!1;++i}for(;i<r.length;++i){const o=r[i];if(s>=this.Ue.length||!this.We(this.Ue[s++],o))return!1}return!0}ze(e){for(const t of this.Ke)if(this.je(t,e))return!0;return!1}je(e,t){if(e===void 0||!e.field.isEqual(t.fieldPath))return!1;const r=e.op==="array-contains"||e.op==="array-contains-any";return t.kind===2===r}We(e,t){return!!e.field.isEqual(t.fieldPath)&&(t.kind===0&&e.dir==="asc"||t.kind===1&&e.dir==="desc")}}/**
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
 */function rg(n){var e,t;if(A(n instanceof L||n instanceof z),n instanceof L){if(n instanceof Em){const i=((t=(e=n.value.arrayValue)===null||e===void 0?void 0:e.values)===null||t===void 0?void 0:t.map(s=>L.create(n.field,"==",s)))||[];return z.create(i,"or")}return n}const r=n.filters.map(i=>rg(i));return z.create(r,n.op)}function PS(n){if(n.getFilters().length===0)return[];const e=Ac(rg(n));return A(ig(e)),Sc(e)||kc(e)?[e]:e.getFilters()}function Sc(n){return n instanceof L}function kc(n){return n instanceof z&&xu(n)}function ig(n){return Sc(n)||kc(n)||function(e){if(e instanceof z&&vc(e)){for(const t of e.getFilters())if(!Sc(t)&&!kc(t))return!1;return!0}return!1}(n)}function Ac(n){if(A(n instanceof L||n instanceof z),n instanceof L)return n;if(n.filters.length===1)return Ac(n.filters[0]);const e=n.filters.map(r=>Ac(r));let t=z.create(e,n.op);return t=po(t),ig(t)?t:(A(t instanceof z),A(_r(t)),A(t.filters.length>1),t.filters.reduce((r,i)=>zu(r,i)))}function zu(n,e){let t;return A(n instanceof L||n instanceof z),A(e instanceof L||e instanceof z),t=n instanceof L?e instanceof L?function(r,i){return z.create([r,i],"and")}(n,e):Yh(n,e):e instanceof L?Yh(e,n):function(r,i){if(A(r.filters.length>0&&i.filters.length>0),_r(r)&&_r(i))return _m(r,i.getFilters());const s=vc(r)?r:i,o=vc(r)?i:r,a=s.filters.map(c=>zu(c,o));return z.create(a,"or")}(n,e),po(t)}function Yh(n,e){if(_r(e))return _m(e,n.getFilters());{const t=e.filters.map(r=>zu(n,r));return z.create(t,"or")}}function po(n){if(A(n instanceof L||n instanceof z),n instanceof L)return n;const e=n.getFilters();if(e.length===1)return po(e[0]);if(vm(n))return n;const t=e.map(i=>po(i)),r=[];return t.forEach(i=>{i instanceof L?r.push(i):i instanceof z&&(i.op===n.op?r.push(...i.filters):r.push(i))}),r.length===1?r[0]:z.create(r,n.op)}/**
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
 */class xS{constructor(){this.He=new ju}addToCollectionParentIndex(e,t){return this.He.add(t),f.resolve()}getCollectionParents(e,t){return f.resolve(this.He.getEntries(t))}addFieldIndex(e,t){return f.resolve()}deleteFieldIndex(e,t){return f.resolve()}getDocumentsMatchingTarget(e,t){return f.resolve(null)}getIndexType(e,t){return f.resolve(0)}getFieldIndexes(e,t){return f.resolve([])}getNextCollectionGroupToUpdate(e){return f.resolve(null)}getMinOffset(e,t){return f.resolve(We.min())}getMinOffsetFromCollectionGroup(e,t){return f.resolve(We.min())}updateCollectionGroup(e,t,r){return f.resolve()}updateIndexEntries(e,t){return f.resolve()}}class ju{constructor(){this.index={}}add(e){const t=e.lastSegment(),r=e.popLast(),i=this.index[t]||new j(F.comparator),s=!i.has(r);return this.index[t]=i.add(r),s}has(e){const t=e.lastSegment(),r=e.popLast(),i=this.index[t];return i&&i.has(r)}getEntries(e){return(this.index[e]||new j(F.comparator)).toArray()}}/**
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
 */const As=new Uint8Array(0);class OS{constructor(e,t){this.user=e,this.databaseId=t,this.Je=new ju,this.Ye=new cn(r=>Un(r),(r,i)=>cs(r,i)),this.uid=e.uid||""}addToCollectionParentIndex(e,t){if(!this.Je.has(t)){const r=t.lastSegment(),i=t.popLast();e.addOnCommittedListener(()=>{this.Je.add(t)});const s={collectionId:r,parent:Ue(i)};return Jh(e).put(s)}return f.resolve()}getCollectionParents(e,t){const r=[],i=IDBKeyRange.bound([t,""],[nm(t),""],!1,!0);return Jh(e).j(i).next(s=>{for(const o of s){if(o.collectionId!==t)break;r.push(ut(o.parent))}return r})}addFieldIndex(e,t){const r=Rs(e),i=function(o){return{indexId:o.indexId,collectionGroup:o.collectionGroup,fields:o.fields.map(a=>[a.fieldPath.canonicalString(),a.kind])}}(t);delete i.indexId;const s=r.add(i);if(t.indexState){const o=Zr(e);return s.next(a=>{o.put(Gh(a,this.user,t.indexState.sequenceNumber,t.indexState.offset))})}return s.next()}deleteFieldIndex(e,t){const r=Rs(e),i=Zr(e),s=Xr(e);return r.delete(t.indexId).next(()=>i.delete(IDBKeyRange.bound([t.indexId],[t.indexId+1],!1,!0))).next(()=>s.delete(IDBKeyRange.bound([t.indexId],[t.indexId+1],!1,!0)))}getDocumentsMatchingTarget(e,t){const r=Xr(e);let i=!0;const s=new Map;return f.forEach(this.Ze(t),o=>this.Xe(e,o).next(a=>{i&&(i=!!a),s.set(o,a)})).next(()=>{if(i){let o=P();const a=[];return f.forEach(s,(c,u)=>{var l;v("IndexedDbIndexManager",`Using index ${l=c,`id=${l.indexId}|cg=${l.collectionGroup}|f=${l.fields.map(C=>`${C.fieldPath}:${C.kind}`).join(",")}`} to execute ${Un(t)}`);const h=function(C,O){const $=pc(O);if($===void 0)return null;for(const V of lo(C,$.fieldPath))switch(V.op){case"array-contains-any":return V.value.arrayValue.values||[];case"array-contains":return[V.value]}return null}(u,c),d=function(C,O){const $=new Map;for(const V of pn(O))for(const ae of lo(C,V.fieldPath))switch(ae.op){case"==":case"in":$.set(V.fieldPath.canonicalString(),ae.value);break;case"not-in":case"!=":return $.set(V.fieldPath.canonicalString(),ae.value),Array.from($.values())}return null}(u,c),p=function(C,O){const $=[];let V=!0;for(const ae of pn(O)){const ke=ae.kind===0?Ph(C,ae.fieldPath,C.startAt):xh(C,ae.fieldPath,C.startAt);$.push(ke.value),V&&(V=ke.inclusive)}return new Xt($,V)}(u,c),g=function(C,O){const $=[];let V=!0;for(const ae of pn(O)){const ke=ae.kind===0?xh(C,ae.fieldPath,C.endAt):Ph(C,ae.fieldPath,C.endAt);$.push(ke.value),V&&(V=ke.inclusive)}return new Xt($,V)}(u,c),_=this.tn(c,u,p),E=this.tn(c,u,g),x=this.en(c,u,d),q=this.nn(c.indexId,h,_,p.inclusive,E,g.inclusive,x);return f.forEach(q,C=>r.H(C,t.limit).next(O=>{O.forEach($=>{const V=I.fromSegments($.documentKey);o.has(V)||(o=o.add(V),a.push(V))})}))}).next(()=>a)}return f.resolve(null)})}Ze(e){let t=this.Ye.get(e);return t||(e.filters.length===0?t=[e]:t=PS(z.create(e.filters,"and")).map(r=>_c(e.path,e.collectionGroup,e.orderBy,r.getFilters(),e.limit,e.startAt,e.endAt)),this.Ye.set(e,t),t)}nn(e,t,r,i,s,o,a){const c=(t!=null?t.length:1)*Math.max(r.length,s.length),u=c/(t!=null?t.length:1),l=[];for(let h=0;h<c;++h){const d=t?this.sn(t[h/u]):As,p=this.rn(e,d,r[h%u],i),g=this.on(e,d,s[h%u],o),_=a.map(E=>this.rn(e,d,E,!0));l.push(...this.createRange(p,g,_))}return l}rn(e,t,r,i){const s=new vn(e,I.empty(),t,r);return i?s:s.qe()}on(e,t,r,i){const s=new vn(e,I.empty(),t,r);return i?s.qe():s}Xe(e,t){const r=new DS(t),i=t.collectionGroup!=null?t.collectionGroup:t.path.lastSegment();return this.getFieldIndexes(e,i).next(s=>{let o=null;for(const a of s)r.Qe(a)&&(!o||a.fields.length>o.fields.length)&&(o=a);return o})}getIndexType(e,t){let r=2;const i=this.Ze(t);return f.forEach(i,s=>this.Xe(e,s).next(o=>{o?r!==0&&o.fields.length<function(a){let c=new j(ie.comparator),u=!1;for(const l of a.filters)for(const h of l.getFlattenedFilters())h.field.isKeyField()||(h.op==="array-contains"||h.op==="array-contains-any"?u=!0:c=c.add(h.field));for(const l of a.orderBy)l.field.isKeyField()||(c=c.add(l.field));return c.size+(u?1:0)}(s)&&(r=1):r=0})).next(()=>function(s){return s.limit!==null}(t)&&i.length>1&&r===2?1:r)}un(e,t){const r=new Jr;for(const i of pn(e)){const s=t.data.field(i.fieldPath);if(s==null)return null;const o=r.Le(i.kind);yn.pe.oe(s,o)}return r.$e()}sn(e){const t=new Jr;return yn.pe.oe(e,t.Le(0)),t.$e()}cn(e,t){const r=new Jr;return yn.pe.oe(Mn(this.databaseId,t),r.Le(function(i){const s=pn(i);return s.length===0?0:s[s.length-1].kind}(e))),r.$e()}en(e,t,r){if(r===null)return[];let i=[];i.push(new Jr);let s=0;for(const o of pn(e)){const a=r[s++];for(const c of i)if(this.an(t,o.fieldPath)&&Ui(a))i=this.hn(i,o,a);else{const u=c.Le(o.kind);yn.pe.oe(a,u)}}return this.ln(i)}tn(e,t,r){return this.en(e,t,r.position)}ln(e){const t=[];for(let r=0;r<e.length;++r)t[r]=e[r].$e();return t}hn(e,t,r){const i=[...e],s=[];for(const o of r.arrayValue.values||[])for(const a of i){const c=new Jr;c.seed(a.$e()),yn.pe.oe(o,c.Le(t.kind)),s.push(c)}return s}an(e,t){return!!e.filters.find(r=>r instanceof L&&r.field.isEqual(t)&&(r.op==="in"||r.op==="not-in"))}getFieldIndexes(e,t){const r=Rs(e),i=Zr(e);return(t?r.j("collectionGroupIndex",IDBKeyRange.bound(t,t)):r.j()).next(s=>{const o=[];return f.forEach(s,a=>i.get([a.indexId,this.uid]).next(c=>{o.push(function(u,l){const h=l?new co(l.sequenceNumber,new We(qn(l.readTime),new I(ut(l.documentKey)),l.largestBatchId)):co.empty(),d=u.fields.map(([p,g])=>new gb(ie.fromServerFormat(p),g));return new rm(u.indexId,u.collectionGroup,d,h)}(a,c))})).next(()=>o)})}getNextCollectionGroupToUpdate(e){return this.getFieldIndexes(e).next(t=>t.length===0?null:(t.sort((r,i)=>{const s=r.indexState.sequenceNumber-i.indexState.sequenceNumber;return s!==0?s:D(r.collectionGroup,i.collectionGroup)}),t[0].collectionGroup))}updateCollectionGroup(e,t,r){const i=Rs(e),s=Zr(e);return this.fn(e).next(o=>i.j("collectionGroupIndex",IDBKeyRange.bound(t,t)).next(a=>f.forEach(a,c=>s.put(Gh(c.indexId,this.user,o,r)))))}updateIndexEntries(e,t){const r=new Map;return f.forEach(t,(i,s)=>{const o=r.get(i.collectionGroup);return(o?f.resolve(o):this.getFieldIndexes(e,i.collectionGroup)).next(a=>(r.set(i.collectionGroup,a),f.forEach(a,c=>this.dn(e,i,c).next(u=>{const l=this.wn(s,c);return u.isEqual(l)?f.resolve():this._n(e,s,c,u,l)}))))})}mn(e,t,r,i){return Xr(e).put({indexId:i.indexId,uid:this.uid,arrayValue:i.arrayValue,directionalValue:i.directionalValue,orderedDocumentKey:this.cn(r,t.key),documentKey:t.key.path.toArray()})}gn(e,t,r,i){return Xr(e).delete([i.indexId,this.uid,i.arrayValue,i.directionalValue,this.cn(r,t.key),t.key.path.toArray()])}dn(e,t,r){const i=Xr(e);let s=new j(Ut);return i.Z({index:"documentKeyIndex",range:IDBKeyRange.only([r.indexId,this.uid,this.cn(r,t)])},(o,a)=>{s=s.add(new vn(r.indexId,t,a.arrayValue,a.directionalValue))}).next(()=>s)}wn(e,t){let r=new j(Ut);const i=this.un(t,e);if(i==null)return r;const s=pc(t);if(s!=null){const o=e.data.field(s.fieldPath);if(Ui(o))for(const a of o.arrayValue.values||[])r=r.add(new vn(t.indexId,e.key,this.sn(a),i))}else r=r.add(new vn(t.indexId,e.key,As,i));return r}_n(e,t,r,i,s){v("IndexedDbIndexManager","Updating index entries for document '%s'",t.key);const o=[];return function(a,c,u,l,h){const d=a.getIterator(),p=c.getIterator();let g=er(d),_=er(p);for(;g||_;){let E=!1,x=!1;if(g&&_){const q=u(g,_);q<0?x=!0:q>0&&(E=!0)}else g!=null?x=!0:E=!0;E?(l(_),_=er(p)):x?(h(g),g=er(d)):(g=er(d),_=er(p))}}(i,s,Ut,a=>{o.push(this.mn(e,t,r,a))},a=>{o.push(this.gn(e,t,r,a))}),f.waitFor(o)}fn(e){let t=1;return Zr(e).Z({index:"sequenceNumberIndex",reverse:!0,range:IDBKeyRange.upperBound([this.uid,Number.MAX_SAFE_INTEGER])},(r,i,s)=>{s.done(),t=i.sequenceNumber+1}).next(()=>t)}createRange(e,t,r){r=r.sort((o,a)=>Ut(o,a)).filter((o,a,c)=>!a||Ut(o,c[a-1])!==0);const i=[];i.push(e);for(const o of r){const a=Ut(o,e),c=Ut(o,t);if(a===0)i[0]=e.qe();else if(a>0&&c<0)i.push(o),i.push(o.qe());else if(c>0)break}i.push(t);const s=[];for(let o=0;o<i.length;o+=2){if(this.yn(i[o],i[o+1]))return[];const a=[i[o].indexId,this.uid,i[o].arrayValue,i[o].directionalValue,As,[]],c=[i[o+1].indexId,this.uid,i[o+1].arrayValue,i[o+1].directionalValue,As,[]];s.push(IDBKeyRange.bound(a,c))}return s}yn(e,t){return Ut(e,t)>0}getMinOffsetFromCollectionGroup(e,t){return this.getFieldIndexes(e,t).next(Xh)}getMinOffset(e,t){return f.mapArray(this.Ze(t),r=>this.Xe(e,r).next(i=>i||b())).next(Xh)}}function Jh(n){return ye(n,"collectionParents")}function Xr(n){return ye(n,"indexEntries")}function Rs(n){return ye(n,"indexConfiguration")}function Zr(n){return ye(n,"indexState")}function Xh(n){A(n.length!==0);let e=n[0].indexState.offset,t=e.largestBatchId;for(let r=1;r<n.length;r++){const i=n[r].indexState.offset;Nu(i,e)<0&&(e=i),t<i.largestBatchId&&(t=i.largestBatchId)}return new We(e.readTime,e.documentKey,t)}/**
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
 */const Zh={didRun:!1,sequenceNumbersCollected:0,targetsRemoved:0,documentsRemoved:0};class Ve{constructor(e,t,r){this.cacheSizeCollectionThreshold=e,this.percentileToCollect=t,this.maximumSequenceNumbersToCollect=r}static withCacheSize(e){return new Ve(e,Ve.DEFAULT_COLLECTION_PERCENTILE,Ve.DEFAULT_MAX_SEQUENCE_NUMBERS_TO_COLLECT)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function sg(n,e,t){const r=n.store("mutations"),i=n.store("documentMutations"),s=[],o=IDBKeyRange.only(t.batchId);let a=0;const c=r.Z({range:o},(l,h,d)=>(a++,d.delete()));s.push(c.next(()=>{A(a===1)}));const u=[];for(const l of t.mutations){const h=um(e,l.key.path,t.batchId);s.push(i.delete(h)),u.push(l.key)}return f.waitFor(s).next(()=>u)}function mo(n){if(!n)return 0;let e;if(n.document)e=n.document;else if(n.unknownDocument)e=n.unknownDocument;else{if(!n.noDocument)throw b();e=n.noDocument}return JSON.stringify(e).length}/**
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
 */Ve.DEFAULT_COLLECTION_PERCENTILE=10,Ve.DEFAULT_MAX_SEQUENCE_NUMBERS_TO_COLLECT=1e3,Ve.DEFAULT=new Ve(41943040,Ve.DEFAULT_COLLECTION_PERCENTILE,Ve.DEFAULT_MAX_SEQUENCE_NUMBERS_TO_COLLECT),Ve.DISABLED=new Ve(-1,0,0);class ta{constructor(e,t,r,i){this.userId=e,this.serializer=t,this.indexManager=r,this.referenceDelegate=i,this.pn={}}static ie(e,t,r,i){A(e.uid!=="");const s=e.isAuthenticated()?e.uid:"";return new ta(s,t,r,i)}checkEmpty(e){let t=!0;const r=IDBKeyRange.bound([this.userId,Number.NEGATIVE_INFINITY],[this.userId,Number.POSITIVE_INFINITY]);return Ft(e).Z({index:"userMutationsIndex",range:r},(i,s,o)=>{t=!1,o.done()}).next(()=>t)}addMutationBatch(e,t,r,i){const s=sr(e),o=Ft(e);return o.add({}).next(a=>{A(typeof a=="number");const c=new Uu(a,t,r,i),u=function(d,p,g){const _=g.baseMutations.map(x=>Bi(d.se,x)),E=g.mutations.map(x=>Bi(d.se,x));return{userId:p,batchId:g.batchId,localWriteTimeMs:g.localWriteTime.toMillis(),baseMutations:_,mutations:E}}(this.serializer,this.userId,c),l=[];let h=new j((d,p)=>D(d.canonicalString(),p.canonicalString()));for(const d of i){const p=um(this.userId,d.key.path,a);h=h.add(d.key.path.popLast()),l.push(o.put(u)),l.push(s.put(p,Tb))}return h.forEach(d=>{l.push(this.indexManager.addToCollectionParentIndex(e,d))}),e.addOnCommittedListener(()=>{this.pn[a]=c.keys()}),f.waitFor(l).next(()=>c)})}lookupMutationBatch(e,t){return Ft(e).get(t).next(r=>r?(A(r.userId===this.userId),gn(this.serializer,r)):null)}In(e,t){return this.pn[t]?f.resolve(this.pn[t]):this.lookupMutationBatch(e,t).next(r=>{if(r){const i=r.keys();return this.pn[t]=i,i}return null})}getNextMutationBatchAfterBatchId(e,t){const r=t+1,i=IDBKeyRange.lowerBound([this.userId,r]);let s=null;return Ft(e).Z({index:"userMutationsIndex",range:i},(o,a,c)=>{a.userId===this.userId&&(A(a.batchId>=r),s=gn(this.serializer,a)),c.done()}).next(()=>s)}getHighestUnacknowledgedBatchId(e){const t=IDBKeyRange.upperBound([this.userId,Number.POSITIVE_INFINITY]);let r=-1;return Ft(e).Z({index:"userMutationsIndex",range:t,reverse:!0},(i,s,o)=>{r=s.batchId,o.done()}).next(()=>r)}getAllMutationBatches(e){const t=IDBKeyRange.bound([this.userId,-1],[this.userId,Number.POSITIVE_INFINITY]);return Ft(e).j("userMutationsIndex",t).next(r=>r.map(i=>gn(this.serializer,i)))}getAllMutationBatchesAffectingDocumentKey(e,t){const r=Vs(this.userId,t.path),i=IDBKeyRange.lowerBound(r),s=[];return sr(e).Z({range:i},(o,a,c)=>{const[u,l,h]=o,d=ut(l);if(u===this.userId&&t.path.isEqual(d))return Ft(e).get(h).next(p=>{if(!p)throw b();A(p.userId===this.userId),s.push(gn(this.serializer,p))});c.done()}).next(()=>s)}getAllMutationBatchesAffectingDocumentKeys(e,t){let r=new j(D);const i=[];return t.forEach(s=>{const o=Vs(this.userId,s.path),a=IDBKeyRange.lowerBound(o),c=sr(e).Z({range:a},(u,l,h)=>{const[d,p,g]=u,_=ut(p);d===this.userId&&s.path.isEqual(_)?r=r.add(g):h.done()});i.push(c)}),f.waitFor(i).next(()=>this.Tn(e,r))}getAllMutationBatchesAffectingQuery(e,t){const r=t.path,i=r.length+1,s=Vs(this.userId,r),o=IDBKeyRange.lowerBound(s);let a=new j(D);return sr(e).Z({range:o},(c,u,l)=>{const[h,d,p]=c,g=ut(d);h===this.userId&&r.isPrefixOf(g)?g.length===i&&(a=a.add(p)):l.done()}).next(()=>this.Tn(e,a))}Tn(e,t){const r=[],i=[];return t.forEach(s=>{i.push(Ft(e).get(s).next(o=>{if(o===null)throw b();A(o.userId===this.userId),r.push(gn(this.serializer,o))}))}),f.waitFor(i).next(()=>r)}removeMutationBatch(e,t){return sg(e.at,this.userId,t).next(r=>(e.addOnCommittedListener(()=>{this.En(t.batchId)}),f.forEach(r,i=>this.referenceDelegate.markPotentiallyOrphaned(e,i))))}En(e){delete this.pn[e]}performConsistencyCheck(e){return this.checkEmpty(e).next(t=>{if(!t)return f.resolve();const r=IDBKeyRange.lowerBound([this.userId]),i=[];return sr(e).Z({range:r},(s,o,a)=>{if(s[0]===this.userId){const c=ut(s[1]);i.push(c)}else a.done()}).next(()=>{A(i.length===0)})})}containsKey(e,t){return og(e,this.userId,t)}An(e){return ag(e).get(this.userId).next(t=>t||{userId:this.userId,lastAcknowledgedBatchId:-1,lastStreamToken:""})}}function og(n,e,t){const r=Vs(e,t.path),i=r[1],s=IDBKeyRange.lowerBound(r);let o=!1;return sr(n).Z({range:s,Y:!0},(a,c,u)=>{const[l,h,d]=a;l===e&&h===i&&(o=!0),u.done()}).next(()=>o)}function Ft(n){return ye(n,"mutations")}function sr(n){return ye(n,"documentMutations")}function ag(n){return ye(n,"mutationQueues")}/**
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
 */class $n{constructor(e){this.Rn=e}next(){return this.Rn+=2,this.Rn}static vn(){return new $n(0)}static bn(){return new $n(-1)}}/**
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
 */class LS{constructor(e,t){this.referenceDelegate=e,this.serializer=t}allocateTargetId(e){return this.Pn(e).next(t=>{const r=new $n(t.highestTargetId);return t.highestTargetId=r.next(),this.Vn(e,t).next(()=>t.highestTargetId)})}getLastRemoteSnapshotVersion(e){return this.Pn(e).next(t=>R.fromTimestamp(new Y(t.lastRemoteSnapshotVersion.seconds,t.lastRemoteSnapshotVersion.nanoseconds)))}getHighestSequenceNumber(e){return this.Pn(e).next(t=>t.highestListenSequenceNumber)}setTargetsMetadata(e,t,r){return this.Pn(e).next(i=>(i.highestListenSequenceNumber=t,r&&(i.lastRemoteSnapshotVersion=r.toTimestamp()),t>i.highestListenSequenceNumber&&(i.highestListenSequenceNumber=t),this.Vn(e,i)))}addTargetData(e,t){return this.Sn(e,t).next(()=>this.Pn(e).next(r=>(r.targetCount+=1,this.Dn(t,r),this.Vn(e,r))))}updateTargetData(e,t){return this.Sn(e,t)}removeTargetData(e,t){return this.removeMatchingKeysForTargetId(e,t.targetId).next(()=>tr(e).delete(t.targetId)).next(()=>this.Pn(e)).next(r=>(A(r.targetCount>0),r.targetCount-=1,this.Vn(e,r)))}removeTargets(e,t,r){let i=0;const s=[];return tr(e).Z((o,a)=>{const c=ci(a);c.sequenceNumber<=t&&r.get(c.targetId)===null&&(i++,s.push(this.removeTargetData(e,c)))}).next(()=>f.waitFor(s)).next(()=>i)}forEachTarget(e,t){return tr(e).Z((r,i)=>{const s=ci(i);t(s)})}Pn(e){return ed(e).get("targetGlobalKey").next(t=>(A(t!==null),t))}Vn(e,t){return ed(e).put("targetGlobalKey",t)}Sn(e,t){return tr(e).put(ng(this.serializer,t))}Dn(e,t){let r=!1;return e.targetId>t.highestTargetId&&(t.highestTargetId=e.targetId,r=!0),e.sequenceNumber>t.highestListenSequenceNumber&&(t.highestListenSequenceNumber=e.sequenceNumber,r=!0),r}getTargetCount(e){return this.Pn(e).next(t=>t.targetCount)}getTargetData(e,t){const r=Un(t),i=IDBKeyRange.bound([r,Number.NEGATIVE_INFINITY],[r,Number.POSITIVE_INFINITY]);let s=null;return tr(e).Z({range:i,index:"queryTargetsIndex"},(o,a,c)=>{const u=ci(a);cs(t,u.target)&&(s=u,c.done())}).next(()=>s)}addMatchingKeys(e,t,r){const i=[],s=Bt(e);return t.forEach(o=>{const a=Ue(o.path);i.push(s.put({targetId:r,path:a})),i.push(this.referenceDelegate.addReference(e,r,o))}),f.waitFor(i)}removeMatchingKeys(e,t,r){const i=Bt(e);return f.forEach(t,s=>{const o=Ue(s.path);return f.waitFor([i.delete([r,o]),this.referenceDelegate.removeReference(e,r,s)])})}removeMatchingKeysForTargetId(e,t){const r=Bt(e),i=IDBKeyRange.bound([t],[t+1],!1,!0);return r.delete(i)}getMatchingKeysForTargetId(e,t){const r=IDBKeyRange.bound([t],[t+1],!1,!0),i=Bt(e);let s=P();return i.Z({range:r,Y:!0},(o,a,c)=>{const u=ut(o[1]),l=new I(u);s=s.add(l)}).next(()=>s)}containsKey(e,t){const r=Ue(t.path),i=IDBKeyRange.bound([r],[nm(r)],!1,!0);let s=0;return Bt(e).Z({index:"documentTargetsIndex",Y:!0,range:i},([o,a],c,u)=>{o!==0&&(s++,u.done())}).next(()=>s>0)}ne(e,t){return tr(e).get(t).next(r=>r?ci(r):null)}}function tr(n){return ye(n,"targets")}function ed(n){return ye(n,"targetGlobal")}function Bt(n){return ye(n,"targetDocuments")}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function td([n,e],[t,r]){const i=D(n,t);return i===0?D(e,r):i}class MS{constructor(e){this.Cn=e,this.buffer=new j(td),this.xn=0}Nn(){return++this.xn}kn(e){const t=[e,this.Nn()];if(this.buffer.size<this.Cn)this.buffer=this.buffer.add(t);else{const r=this.buffer.last();td(t,r)<0&&(this.buffer=this.buffer.delete(r).add(t))}}get maxValue(){return this.buffer.last()[0]}}class US{constructor(e,t,r){this.garbageCollector=e,this.asyncQueue=t,this.localStore=r,this.On=null}start(){this.garbageCollector.params.cacheSizeCollectionThreshold!==-1&&this.$n(6e4)}stop(){this.On&&(this.On.cancel(),this.On=null)}get started(){return this.On!==null}$n(e){v("LruGarbageCollector",`Garbage collection scheduled in ${e}ms`),this.On=this.asyncQueue.enqueueAfterDelay("lru_garbage_collection",e,async()=>{this.On=null;try{await this.localStore.collectGarbage(this.garbageCollector)}catch(t){an(t)?v("LruGarbageCollector","Ignoring IndexedDB error during garbage collection: ",t):await on(t)}await this.$n(3e5)})}}class FS{constructor(e,t){this.Mn=e,this.params=t}calculateTargetCount(e,t){return this.Mn.Fn(e).next(r=>Math.floor(t/100*r))}nthSequenceNumber(e,t){if(t===0)return f.resolve(Be.ct);const r=new MS(t);return this.Mn.forEachTarget(e,i=>r.kn(i.sequenceNumber)).next(()=>this.Mn.Bn(e,i=>r.kn(i))).next(()=>r.maxValue)}removeTargets(e,t,r){return this.Mn.removeTargets(e,t,r)}removeOrphanedDocuments(e,t){return this.Mn.removeOrphanedDocuments(e,t)}collect(e,t){return this.params.cacheSizeCollectionThreshold===-1?(v("LruGarbageCollector","Garbage collection skipped; disabled"),f.resolve(Zh)):this.getCacheSize(e).next(r=>r<this.params.cacheSizeCollectionThreshold?(v("LruGarbageCollector",`Garbage collection skipped; Cache size ${r} is lower than threshold ${this.params.cacheSizeCollectionThreshold}`),Zh):this.Ln(e,t))}getCacheSize(e){return this.Mn.getCacheSize(e)}Ln(e,t){let r,i,s,o,a,c,u;const l=Date.now();return this.calculateTargetCount(e,this.params.percentileToCollect).next(h=>(h>this.params.maximumSequenceNumbersToCollect?(v("LruGarbageCollector",`Capping sequence numbers to collect down to the maximum of ${this.params.maximumSequenceNumbersToCollect} from ${h}`),i=this.params.maximumSequenceNumbersToCollect):i=h,o=Date.now(),this.nthSequenceNumber(e,i))).next(h=>(r=h,a=Date.now(),this.removeTargets(e,r,t))).next(h=>(s=h,c=Date.now(),this.removeOrphanedDocuments(e,r))).next(h=>(u=Date.now(),fc()<=U.DEBUG&&v("LruGarbageCollector",`LRU Garbage Collection
	Counted targets in ${o-l}ms
	Determined least recently used ${i} in `+(a-o)+`ms
	Removed ${s} targets in `+(c-a)+`ms
	Removed ${h} documents in `+(u-c)+`ms
Total Duration: ${u-l}ms`),f.resolve({didRun:!0,sequenceNumbersCollected:i,targetsRemoved:s,documentsRemoved:h})))}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class VS{constructor(e,t){this.db=e,this.garbageCollector=function(r,i){return new FS(r,i)}(this,t)}Fn(e){const t=this.qn(e);return this.db.getTargetCache().getTargetCount(e).next(r=>t.next(i=>r+i))}qn(e){let t=0;return this.Bn(e,r=>{t++}).next(()=>t)}forEachTarget(e,t){return this.db.getTargetCache().forEachTarget(e,t)}Bn(e,t){return this.Un(e,(r,i)=>t(i))}addReference(e,t,r){return Cs(e,r)}removeReference(e,t,r){return Cs(e,r)}removeTargets(e,t,r){return this.db.getTargetCache().removeTargets(e,t,r)}markPotentiallyOrphaned(e,t){return Cs(e,t)}Kn(e,t){return function(r,i){let s=!1;return ag(r).X(o=>og(r,o,i).next(a=>(a&&(s=!0),f.resolve(!a)))).next(()=>s)}(e,t)}removeOrphanedDocuments(e,t){const r=this.db.getRemoteDocumentCache().newChangeBuffer(),i=[];let s=0;return this.Un(e,(o,a)=>{if(a<=t){const c=this.Kn(e,o).next(u=>{if(!u)return s++,r.getEntry(e,o).next(()=>(r.removeEntry(o,R.min()),Bt(e).delete([0,Ue(o.path)])))});i.push(c)}}).next(()=>f.waitFor(i)).next(()=>r.apply(e)).next(()=>s)}removeTarget(e,t){const r=t.withSequenceNumber(e.currentSequenceNumber);return this.db.getTargetCache().updateTargetData(e,r)}updateLimboDocument(e,t){return Cs(e,t)}Un(e,t){const r=Bt(e);let i,s=Be.ct;return r.Z({index:"documentTargetsIndex"},([o,a],{path:c,sequenceNumber:u})=>{o===0?(s!==Be.ct&&t(new I(ut(i)),s),s=u,i=c):s=Be.ct}).next(()=>{s!==Be.ct&&t(new I(ut(i)),s)})}getCacheSize(e){return this.db.getRemoteDocumentCache().getSize(e)}}function Cs(n,e){return Bt(n).put(function(t,r){return{targetId:0,path:Ue(t.path),sequenceNumber:r}}(e,n.currentSequenceNumber))}/**
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
 */class cg{constructor(){this.changes=new cn(e=>e.toString(),(e,t)=>e.isEqual(t)),this.changesApplied=!1}addEntry(e){this.assertNotApplied(),this.changes.set(e.key,e)}removeEntry(e,t){this.assertNotApplied(),this.changes.set(e,G.newInvalidDocument(e).setReadTime(t))}getEntry(e,t){this.assertNotApplied();const r=this.changes.get(t);return r!==void 0?f.resolve(r):this.getFromCache(e,t)}getEntries(e,t){return this.getAllFromCache(e,t)}apply(e){return this.assertNotApplied(),this.changesApplied=!0,this.applyChanges(e)}assertNotApplied(){}}/**
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
 */class BS{constructor(e){this.serializer=e}setIndexManager(e){this.indexManager=e}addEntry(e,t,r){return dn(e).put(r)}removeEntry(e,t,r){return dn(e).delete(function(i,s){const o=i.path.toArray();return[o.slice(0,o.length-2),o[o.length-2],fo(s),o[o.length-1]]}(t,r))}updateMetadata(e,t){return this.getMetadata(e).next(r=>(r.byteSize+=t,this.Gn(e,r)))}getEntry(e,t){let r=G.newInvalidDocument(t);return dn(e).Z({index:"documentKeyIndex",range:IDBKeyRange.only(ei(t))},(i,s)=>{r=this.Qn(t,s)}).next(()=>r)}zn(e,t){let r={size:0,document:G.newInvalidDocument(t)};return dn(e).Z({index:"documentKeyIndex",range:IDBKeyRange.only(ei(t))},(i,s)=>{r={document:this.Qn(t,s),size:mo(s)}}).next(()=>r)}getEntries(e,t){let r=$e();return this.jn(e,t,(i,s)=>{const o=this.Qn(i,s);r=r.insert(i,o)}).next(()=>r)}Wn(e,t){let r=$e(),i=new te(I.comparator);return this.jn(e,t,(s,o)=>{const a=this.Qn(s,o);r=r.insert(s,a),i=i.insert(s,mo(o))}).next(()=>({documents:r,Hn:i}))}jn(e,t,r){if(t.isEmpty())return f.resolve();let i=new j(id);t.forEach(c=>i=i.add(c));const s=IDBKeyRange.bound(ei(i.first()),ei(i.last())),o=i.getIterator();let a=o.getNext();return dn(e).Z({index:"documentKeyIndex",range:s},(c,u,l)=>{const h=I.fromSegments([...u.prefixPath,u.collectionGroup,u.documentId]);for(;a&&id(a,h)<0;)r(a,null),a=o.getNext();a&&a.isEqual(h)&&(r(a,u),a=o.hasNext()?o.getNext():null),a?l.G(ei(a)):l.done()}).next(()=>{for(;a;)r(a,null),a=o.hasNext()?o.getNext():null})}getDocumentsMatchingQuery(e,t,r,i){const s=t.path,o=[s.popLast().toArray(),s.lastSegment(),fo(r.readTime),r.documentKey.path.isEmpty()?"":r.documentKey.path.lastSegment()],a=[s.popLast().toArray(),s.lastSegment(),[Number.MAX_SAFE_INTEGER,Number.MAX_SAFE_INTEGER],""];return dn(e).j(IDBKeyRange.bound(o,a,!0)).next(c=>{let u=$e();for(const l of c){const h=this.Qn(I.fromSegments(l.prefixPath.concat(l.collectionGroup,l.documentId)),l);h.isFoundDocument()&&(ls(t,h)||i.has(h.key))&&(u=u.insert(h.key,h))}return u})}getAllFromCollectionGroup(e,t,r,i){let s=$e();const o=rd(t,r),a=rd(t,We.max());return dn(e).Z({index:"collectionGroupIndex",range:IDBKeyRange.bound(o,a,!0)},(c,u,l)=>{const h=this.Qn(I.fromSegments(u.prefixPath.concat(u.collectionGroup,u.documentId)),u);s=s.insert(h.key,h),s.size===i&&l.done()}).next(()=>s)}newChangeBuffer(e){return new qS(this,!!e&&e.trackRemovals)}getSize(e){return this.getMetadata(e).next(t=>t.byteSize)}getMetadata(e){return nd(e).get("remoteDocumentGlobalKey").next(t=>(A(!!t),t))}Gn(e,t){return nd(e).put("remoteDocumentGlobalKey",t)}Qn(e,t){if(t){const r=SS(this.serializer,t);if(!(r.isNoDocument()&&r.version.isEqual(R.min())))return r}return G.newInvalidDocument(e)}}function ug(n){return new BS(n)}class qS extends cg{constructor(e,t){super(),this.Jn=e,this.trackRemovals=t,this.Yn=new cn(r=>r.toString(),(r,i)=>r.isEqual(i))}applyChanges(e){const t=[];let r=0,i=new j((s,o)=>D(s.canonicalString(),o.canonicalString()));return this.changes.forEach((s,o)=>{const a=this.Yn.get(s);if(t.push(this.Jn.removeEntry(e,s,a.readTime)),o.isValidDocument()){const c=zh(this.Jn.serializer,o);i=i.add(s.path.popLast());const u=mo(c);r+=u-a.size,t.push(this.Jn.addEntry(e,s,c))}else if(r-=a.size,this.trackRemovals){const c=zh(this.Jn.serializer,o.convertToNoDocument(R.min()));t.push(this.Jn.addEntry(e,s,c))}}),i.forEach(s=>{t.push(this.Jn.indexManager.addToCollectionParentIndex(e,s))}),t.push(this.Jn.updateMetadata(e,r)),f.waitFor(t)}getFromCache(e,t){return this.Jn.zn(e,t).next(r=>(this.Yn.set(t,{size:r.size,readTime:r.document.readTime}),r.document))}getAllFromCache(e,t){return this.Jn.Wn(e,t).next(({documents:r,Hn:i})=>(i.forEach((s,o)=>{this.Yn.set(s,{size:o,readTime:r.get(s).readTime})}),r))}}function nd(n){return ye(n,"remoteDocumentGlobal")}function dn(n){return ye(n,"remoteDocumentsV14")}function ei(n){const e=n.path.toArray();return[e.slice(0,e.length-2),e[e.length-2],e[e.length-1]]}function rd(n,e){const t=e.documentKey.path.toArray();return[n,fo(e.readTime),t.slice(0,t.length-2),t.length>0?t[t.length-1]:""]}function id(n,e){const t=n.path.toArray(),r=e.path.toArray();let i=0;for(let s=0;s<t.length-2&&s<r.length-2;++s)if(i=D(t[s],r[s]),i)return i;return i=D(t.length,r.length),i||(i=D(t[t.length-2],r[r.length-2]),i||D(t[t.length-1],r[r.length-1]))}/**
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
 */class $S{constructor(e,t){this.overlayedDocument=e,this.mutatedFields=t}}/**
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
 */class lg{constructor(e,t,r,i){this.remoteDocumentCache=e,this.mutationQueue=t,this.documentOverlayCache=r,this.indexManager=i}getDocument(e,t){let r=null;return this.documentOverlayCache.getOverlay(e,t).next(i=>(r=i,this.remoteDocumentCache.getEntry(e,t))).next(i=>(r!==null&&gi(r.mutation,i,qe.empty(),Y.now()),i))}getDocuments(e,t){return this.remoteDocumentCache.getEntries(e,t).next(r=>this.getLocalViewOfDocuments(e,r,P()).next(()=>r))}getLocalViewOfDocuments(e,t,r=P()){const i=lt();return this.populateOverlays(e,i,t).next(()=>this.computeViews(e,t,i,r).next(s=>{let o=ai();return s.forEach((a,c)=>{o=o.insert(a,c.overlayedDocument)}),o}))}getOverlayedDocuments(e,t){const r=lt();return this.populateOverlays(e,r,t).next(()=>this.computeViews(e,t,r,P()))}populateOverlays(e,t,r){const i=[];return r.forEach(s=>{t.has(s)||i.push(s)}),this.documentOverlayCache.getOverlays(e,i).next(s=>{s.forEach((o,a)=>{t.set(o,a)})})}computeViews(e,t,r,i){let s=$e();const o=mi(),a=mi();return t.forEach((c,u)=>{const l=r.get(u.key);i.has(u.key)&&(l===void 0||l.mutation instanceof xt)?s=s.insert(u.key,u):l!==void 0?(o.set(u.key,l.mutation.getFieldMask()),gi(l.mutation,u,l.mutation.getFieldMask(),Y.now())):o.set(u.key,qe.empty())}),this.recalculateAndSaveOverlays(e,s).next(c=>(c.forEach((u,l)=>o.set(u,l)),t.forEach((u,l)=>{var h;return a.set(u,new $S(l,(h=o.get(u))!==null&&h!==void 0?h:null))}),a))}recalculateAndSaveOverlays(e,t){const r=mi();let i=new te((o,a)=>o-a),s=P();return this.mutationQueue.getAllMutationBatchesAffectingDocumentKeys(e,t).next(o=>{for(const a of o)a.keys().forEach(c=>{const u=t.get(c);if(u===null)return;let l=r.get(c)||qe.empty();l=a.applyToLocalView(u,l),r.set(c,l);const h=(i.get(a.batchId)||P()).add(c);i=i.insert(a.batchId,h)})}).next(()=>{const o=[],a=i.getReverseIterator();for(;a.hasNext();){const c=a.getNext(),u=c.key,l=c.value,h=Nm();l.forEach(d=>{if(!s.has(d)){const p=Fm(t.get(d),r.get(d));p!==null&&h.set(d,p),s=s.add(d)}}),o.push(this.documentOverlayCache.saveOverlays(e,u,h))}return f.waitFor(o)}).next(()=>r)}recalculateAndSaveOverlaysForDocumentKeys(e,t){return this.remoteDocumentCache.getEntries(e,t).next(r=>this.recalculateAndSaveOverlays(e,r))}getDocumentsMatchingQuery(e,t,r){return function(i){return I.isDocumentKey(i.path)&&i.collectionGroup===null&&i.filters.length===0}(t)?this.getDocumentsMatchingDocumentQuery(e,t.path):Lu(t)?this.getDocumentsMatchingCollectionGroupQuery(e,t,r):this.getDocumentsMatchingCollectionQuery(e,t,r)}getNextDocuments(e,t,r,i){return this.remoteDocumentCache.getAllFromCollectionGroup(e,t,r,i).next(s=>{const o=i-s.size>0?this.documentOverlayCache.getOverlaysForCollectionGroup(e,t,r.largestBatchId,i-s.size):f.resolve(lt());let a=-1,c=s;return o.next(u=>f.forEach(u,(l,h)=>(a<h.largestBatchId&&(a=h.largestBatchId),s.get(l)?f.resolve():this.remoteDocumentCache.getEntry(e,l).next(d=>{c=c.insert(l,d)}))).next(()=>this.populateOverlays(e,u,s)).next(()=>this.computeViews(e,c,u,P())).next(l=>({batchId:a,changes:Cm(l)})))})}getDocumentsMatchingDocumentQuery(e,t){return this.getDocument(e,new I(t)).next(r=>{let i=ai();return r.isFoundDocument()&&(i=i.insert(r.key,r)),i})}getDocumentsMatchingCollectionGroupQuery(e,t,r){const i=t.collectionGroup;let s=ai();return this.indexManager.getCollectionParents(e,i).next(o=>f.forEach(o,a=>{const c=function(u,l){return new Pt(l,null,u.explicitOrderBy.slice(),u.filters.slice(),u.limit,u.limitType,u.startAt,u.endAt)}(t,a.child(i));return this.getDocumentsMatchingCollectionQuery(e,c,r).next(u=>{u.forEach((l,h)=>{s=s.insert(l,h)})})}).next(()=>s))}getDocumentsMatchingCollectionQuery(e,t,r){let i;return this.documentOverlayCache.getOverlaysForCollection(e,t.path,r.largestBatchId).next(s=>(i=s,this.remoteDocumentCache.getDocumentsMatchingQuery(e,t,r,i))).next(s=>{i.forEach((a,c)=>{const u=c.getKey();s.get(u)===null&&(s=s.insert(u,G.newInvalidDocument(u)))});let o=ai();return s.forEach((a,c)=>{const u=i.get(a);u!==void 0&&gi(u.mutation,c,qe.empty(),Y.now()),ls(t,c)&&(o=o.insert(a,c))}),o})}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class zS{constructor(e){this.serializer=e,this.Zn=new Map,this.Xn=new Map}getBundleMetadata(e,t){return f.resolve(this.Zn.get(t))}saveBundleMetadata(e,t){var r;return this.Zn.set(t.id,{id:(r=t).id,version:r.version,createTime:se(r.createTime)}),f.resolve()}getNamedQuery(e,t){return f.resolve(this.Xn.get(t))}saveNamedQuery(e,t){return this.Xn.set(t.name,function(r){return{name:r.name,query:$u(r.bundledQuery),readTime:se(r.readTime)}}(t)),f.resolve()}}/**
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
 */class jS{constructor(){this.overlays=new te(I.comparator),this.ts=new Map}getOverlay(e,t){return f.resolve(this.overlays.get(t))}getOverlays(e,t){const r=lt();return f.forEach(t,i=>this.getOverlay(e,i).next(s=>{s!==null&&r.set(i,s)})).next(()=>r)}saveOverlays(e,t,r){return r.forEach((i,s)=>{this.re(e,t,s)}),f.resolve()}removeOverlaysForBatchId(e,t,r){const i=this.ts.get(r);return i!==void 0&&(i.forEach(s=>this.overlays=this.overlays.remove(s)),this.ts.delete(r)),f.resolve()}getOverlaysForCollection(e,t,r){const i=lt(),s=t.length+1,o=new I(t.child("")),a=this.overlays.getIteratorFrom(o);for(;a.hasNext();){const c=a.getNext().value,u=c.getKey();if(!t.isPrefixOf(u.path))break;u.path.length===s&&c.largestBatchId>r&&i.set(c.getKey(),c)}return f.resolve(i)}getOverlaysForCollectionGroup(e,t,r,i){let s=new te((u,l)=>u-l);const o=this.overlays.getIterator();for(;o.hasNext();){const u=o.getNext().value;if(u.getKey().getCollectionGroup()===t&&u.largestBatchId>r){let l=s.get(u.largestBatchId);l===null&&(l=lt(),s=s.insert(u.largestBatchId,l)),l.set(u.getKey(),u)}}const a=lt(),c=s.getIterator();for(;c.hasNext()&&(c.getNext().value.forEach((u,l)=>a.set(u,l)),!(a.size()>=i)););return f.resolve(a)}re(e,t,r){const i=this.overlays.get(r.key);if(i!==null){const o=this.ts.get(i.largestBatchId).delete(r.key);this.ts.set(i.largestBatchId,o)}this.overlays=this.overlays.insert(r.key,new Vu(t,r));let s=this.ts.get(t);s===void 0&&(s=P(),this.ts.set(t,s)),this.ts.set(t,s.add(r.key))}}/**
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
 */class Gu{constructor(){this.es=new j(fe.ns),this.ss=new j(fe.rs)}isEmpty(){return this.es.isEmpty()}addReference(e,t){const r=new fe(e,t);this.es=this.es.add(r),this.ss=this.ss.add(r)}os(e,t){e.forEach(r=>this.addReference(r,t))}removeReference(e,t){this.us(new fe(e,t))}cs(e,t){e.forEach(r=>this.removeReference(r,t))}hs(e){const t=new I(new F([])),r=new fe(t,e),i=new fe(t,e+1),s=[];return this.ss.forEachInRange([r,i],o=>{this.us(o),s.push(o.key)}),s}ls(){this.es.forEach(e=>this.us(e))}us(e){this.es=this.es.delete(e),this.ss=this.ss.delete(e)}fs(e){const t=new I(new F([])),r=new fe(t,e),i=new fe(t,e+1);let s=P();return this.ss.forEachInRange([r,i],o=>{s=s.add(o.key)}),s}containsKey(e){const t=new fe(e,0),r=this.es.firstAfterOrEqual(t);return r!==null&&e.isEqual(r.key)}}class fe{constructor(e,t){this.key=e,this.ds=t}static ns(e,t){return I.comparator(e.key,t.key)||D(e.ds,t.ds)}static rs(e,t){return D(e.ds,t.ds)||I.comparator(e.key,t.key)}}/**
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
 */class GS{constructor(e,t){this.indexManager=e,this.referenceDelegate=t,this.mutationQueue=[],this.ws=1,this._s=new j(fe.ns)}checkEmpty(e){return f.resolve(this.mutationQueue.length===0)}addMutationBatch(e,t,r,i){const s=this.ws;this.ws++,this.mutationQueue.length>0&&this.mutationQueue[this.mutationQueue.length-1];const o=new Uu(s,t,r,i);this.mutationQueue.push(o);for(const a of i)this._s=this._s.add(new fe(a.key,s)),this.indexManager.addToCollectionParentIndex(e,a.key.path.popLast());return f.resolve(o)}lookupMutationBatch(e,t){return f.resolve(this.gs(t))}getNextMutationBatchAfterBatchId(e,t){const r=t+1,i=this.ys(r),s=i<0?0:i;return f.resolve(this.mutationQueue.length>s?this.mutationQueue[s]:null)}getHighestUnacknowledgedBatchId(){return f.resolve(this.mutationQueue.length===0?-1:this.ws-1)}getAllMutationBatches(e){return f.resolve(this.mutationQueue.slice())}getAllMutationBatchesAffectingDocumentKey(e,t){const r=new fe(t,0),i=new fe(t,Number.POSITIVE_INFINITY),s=[];return this._s.forEachInRange([r,i],o=>{const a=this.gs(o.ds);s.push(a)}),f.resolve(s)}getAllMutationBatchesAffectingDocumentKeys(e,t){let r=new j(D);return t.forEach(i=>{const s=new fe(i,0),o=new fe(i,Number.POSITIVE_INFINITY);this._s.forEachInRange([s,o],a=>{r=r.add(a.ds)})}),f.resolve(this.ps(r))}getAllMutationBatchesAffectingQuery(e,t){const r=t.path,i=r.length+1;let s=r;I.isDocumentKey(s)||(s=s.child(""));const o=new fe(new I(s),0);let a=new j(D);return this._s.forEachWhile(c=>{const u=c.key.path;return!!r.isPrefixOf(u)&&(u.length===i&&(a=a.add(c.ds)),!0)},o),f.resolve(this.ps(a))}ps(e){const t=[];return e.forEach(r=>{const i=this.gs(r);i!==null&&t.push(i)}),t}removeMutationBatch(e,t){A(this.Is(t.batchId,"removed")===0),this.mutationQueue.shift();let r=this._s;return f.forEach(t.mutations,i=>{const s=new fe(i.key,t.batchId);return r=r.delete(s),this.referenceDelegate.markPotentiallyOrphaned(e,i.key)}).next(()=>{this._s=r})}En(e){}containsKey(e,t){const r=new fe(t,0),i=this._s.firstAfterOrEqual(r);return f.resolve(t.isEqual(i&&i.key))}performConsistencyCheck(e){return this.mutationQueue.length,f.resolve()}Is(e,t){return this.ys(e)}ys(e){return this.mutationQueue.length===0?0:e-this.mutationQueue[0].batchId}gs(e){const t=this.ys(e);return t<0||t>=this.mutationQueue.length?null:this.mutationQueue[t]}}/**
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
 */class KS{constructor(e){this.Ts=e,this.docs=new te(I.comparator),this.size=0}setIndexManager(e){this.indexManager=e}addEntry(e,t){const r=t.key,i=this.docs.get(r),s=i?i.size:0,o=this.Ts(t);return this.docs=this.docs.insert(r,{document:t.mutableCopy(),size:o}),this.size+=o-s,this.indexManager.addToCollectionParentIndex(e,r.path.popLast())}removeEntry(e){const t=this.docs.get(e);t&&(this.docs=this.docs.remove(e),this.size-=t.size)}getEntry(e,t){const r=this.docs.get(t);return f.resolve(r?r.document.mutableCopy():G.newInvalidDocument(t))}getEntries(e,t){let r=$e();return t.forEach(i=>{const s=this.docs.get(i);r=r.insert(i,s?s.document.mutableCopy():G.newInvalidDocument(i))}),f.resolve(r)}getDocumentsMatchingQuery(e,t,r,i){let s=$e();const o=t.path,a=new I(o.child("")),c=this.docs.getIteratorFrom(a);for(;c.hasNext();){const{key:u,value:{document:l}}=c.getNext();if(!o.isPrefixOf(u.path))break;u.path.length>o.length+1||Nu(sm(l),r)<=0||(i.has(l.key)||ls(t,l))&&(s=s.insert(l.key,l.mutableCopy()))}return f.resolve(s)}getAllFromCollectionGroup(e,t,r,i){b()}Es(e,t){return f.forEach(this.docs,r=>t(r))}newChangeBuffer(e){return new WS(this)}getSize(e){return f.resolve(this.size)}}class WS extends cg{constructor(e){super(),this.Jn=e}applyChanges(e){const t=[];return this.changes.forEach((r,i)=>{i.isValidDocument()?t.push(this.Jn.addEntry(e,i)):this.Jn.removeEntry(r)}),f.waitFor(t)}getFromCache(e,t){return this.Jn.getEntry(e,t)}getAllFromCache(e,t){return this.Jn.getEntries(e,t)}}/**
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
 */class HS{constructor(e){this.persistence=e,this.As=new cn(t=>Un(t),cs),this.lastRemoteSnapshotVersion=R.min(),this.highestTargetId=0,this.Rs=0,this.vs=new Gu,this.targetCount=0,this.bs=$n.vn()}forEachTarget(e,t){return this.As.forEach((r,i)=>t(i)),f.resolve()}getLastRemoteSnapshotVersion(e){return f.resolve(this.lastRemoteSnapshotVersion)}getHighestSequenceNumber(e){return f.resolve(this.Rs)}allocateTargetId(e){return this.highestTargetId=this.bs.next(),f.resolve(this.highestTargetId)}setTargetsMetadata(e,t,r){return r&&(this.lastRemoteSnapshotVersion=r),t>this.Rs&&(this.Rs=t),f.resolve()}Sn(e){this.As.set(e.target,e);const t=e.targetId;t>this.highestTargetId&&(this.bs=new $n(t),this.highestTargetId=t),e.sequenceNumber>this.Rs&&(this.Rs=e.sequenceNumber)}addTargetData(e,t){return this.Sn(t),this.targetCount+=1,f.resolve()}updateTargetData(e,t){return this.Sn(t),f.resolve()}removeTargetData(e,t){return this.As.delete(t.target),this.vs.hs(t.targetId),this.targetCount-=1,f.resolve()}removeTargets(e,t,r){let i=0;const s=[];return this.As.forEach((o,a)=>{a.sequenceNumber<=t&&r.get(a.targetId)===null&&(this.As.delete(o),s.push(this.removeMatchingKeysForTargetId(e,a.targetId)),i++)}),f.waitFor(s).next(()=>i)}getTargetCount(e){return f.resolve(this.targetCount)}getTargetData(e,t){const r=this.As.get(t)||null;return f.resolve(r)}addMatchingKeys(e,t,r){return this.vs.os(t,r),f.resolve()}removeMatchingKeys(e,t,r){this.vs.cs(t,r);const i=this.persistence.referenceDelegate,s=[];return i&&t.forEach(o=>{s.push(i.markPotentiallyOrphaned(e,o))}),f.waitFor(s)}removeMatchingKeysForTargetId(e,t){return this.vs.hs(t),f.resolve()}getMatchingKeysForTargetId(e,t){const r=this.vs.fs(t);return f.resolve(r)}containsKey(e,t){return f.resolve(this.vs.containsKey(t))}}/**
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
 */class hg{constructor(e,t){this.Ps={},this.overlays={},this.Vs=new Be(0),this.Ss=!1,this.Ss=!0,this.referenceDelegate=e(this),this.Ds=new HS(this),this.indexManager=new xS,this.remoteDocumentCache=function(r){return new KS(r)}(r=>this.referenceDelegate.Cs(r)),this.serializer=new tg(t),this.xs=new zS(this.serializer)}start(){return Promise.resolve()}shutdown(){return this.Ss=!1,Promise.resolve()}get started(){return this.Ss}setDatabaseDeletedListener(){}setNetworkEnabled(){}getIndexManager(e){return this.indexManager}getDocumentOverlayCache(e){let t=this.overlays[e.toKey()];return t||(t=new jS,this.overlays[e.toKey()]=t),t}getMutationQueue(e,t){let r=this.Ps[e.toKey()];return r||(r=new GS(t,this.referenceDelegate),this.Ps[e.toKey()]=r),r}getTargetCache(){return this.Ds}getRemoteDocumentCache(){return this.remoteDocumentCache}getBundleCache(){return this.xs}runTransaction(e,t,r){v("MemoryPersistence","Starting transaction:",e);const i=new QS(this.Vs.next());return this.referenceDelegate.Ns(),r(i).next(s=>this.referenceDelegate.ks(i).next(()=>s)).toPromise().then(s=>(i.raiseOnCommittedEvent(),s))}Os(e,t){return f.or(Object.values(this.Ps).map(r=>()=>r.containsKey(e,t)))}}class QS extends am{constructor(e){super(),this.currentSequenceNumber=e}}class na{constructor(e){this.persistence=e,this.$s=new Gu,this.Ms=null}static Fs(e){return new na(e)}get Bs(){if(this.Ms)return this.Ms;throw b()}addReference(e,t,r){return this.$s.addReference(r,t),this.Bs.delete(r.toString()),f.resolve()}removeReference(e,t,r){return this.$s.removeReference(r,t),this.Bs.add(r.toString()),f.resolve()}markPotentiallyOrphaned(e,t){return this.Bs.add(t.toString()),f.resolve()}removeTarget(e,t){this.$s.hs(t.targetId).forEach(i=>this.Bs.add(i.toString()));const r=this.persistence.getTargetCache();return r.getMatchingKeysForTargetId(e,t.targetId).next(i=>{i.forEach(s=>this.Bs.add(s.toString()))}).next(()=>r.removeTargetData(e,t))}Ns(){this.Ms=new Set}ks(e){const t=this.persistence.getRemoteDocumentCache().newChangeBuffer();return f.forEach(this.Bs,r=>{const i=I.fromPath(r);return this.Ls(e,i).next(s=>{s||t.removeEntry(i,R.min())})}).next(()=>(this.Ms=null,t.apply(e)))}updateLimboDocument(e,t){return this.Ls(e,t).next(r=>{r?this.Bs.delete(t.toString()):this.Bs.add(t.toString())})}Cs(e){return 0}Ls(e,t){return f.or([()=>f.resolve(this.$s.containsKey(t)),()=>this.persistence.getTargetCache().containsKey(e,t),()=>this.persistence.Os(e,t)])}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class YS{constructor(e){this.serializer=e}M(e,t,r,i){const s=new Qo("createOrUpgrade",t);r<1&&i>=1&&(function(a){a.createObjectStore("owner")}(e),function(a){a.createObjectStore("mutationQueues",{keyPath:"userId"}),a.createObjectStore("mutations",{keyPath:"batchId",autoIncrement:!0}).createIndex("userMutationsIndex",Th,{unique:!0}),a.createObjectStore("documentMutations")}(e),sd(e),function(a){a.createObjectStore("remoteDocuments")}(e));let o=f.resolve();return r<3&&i>=3&&(r!==0&&(function(a){a.deleteObjectStore("targetDocuments"),a.deleteObjectStore("targets"),a.deleteObjectStore("targetGlobal")}(e),sd(e)),o=o.next(()=>function(a){const c=a.store("targetGlobal"),u={highestTargetId:0,highestListenSequenceNumber:0,lastRemoteSnapshotVersion:R.min().toTimestamp(),targetCount:0};return c.put("targetGlobalKey",u)}(s))),r<4&&i>=4&&(r!==0&&(o=o.next(()=>function(a,c){return c.store("mutations").j().next(u=>{a.deleteObjectStore("mutations"),a.createObjectStore("mutations",{keyPath:"batchId",autoIncrement:!0}).createIndex("userMutationsIndex",Th,{unique:!0});const l=c.store("mutations"),h=u.map(d=>l.put(d));return f.waitFor(h)})}(e,s))),o=o.next(()=>{(function(a){a.createObjectStore("clientMetadata",{keyPath:"clientId"})})(e)})),r<5&&i>=5&&(o=o.next(()=>this.qs(s))),r<6&&i>=6&&(o=o.next(()=>(function(a){a.createObjectStore("remoteDocumentGlobal")}(e),this.Us(s)))),r<7&&i>=7&&(o=o.next(()=>this.Ks(s))),r<8&&i>=8&&(o=o.next(()=>this.Gs(e,s))),r<9&&i>=9&&(o=o.next(()=>{(function(a){a.objectStoreNames.contains("remoteDocumentChanges")&&a.deleteObjectStore("remoteDocumentChanges")})(e)})),r<10&&i>=10&&(o=o.next(()=>this.Qs(s))),r<11&&i>=11&&(o=o.next(()=>{(function(a){a.createObjectStore("bundles",{keyPath:"bundleId"})})(e),function(a){a.createObjectStore("namedQueries",{keyPath:"name"})}(e)})),r<12&&i>=12&&(o=o.next(()=>{(function(a){const c=a.createObjectStore("documentOverlays",{keyPath:Ob});c.createIndex("collectionPathOverlayIndex",Lb,{unique:!1}),c.createIndex("collectionGroupOverlayIndex",Mb,{unique:!1})})(e)})),r<13&&i>=13&&(o=o.next(()=>function(a){const c=a.createObjectStore("remoteDocumentsV14",{keyPath:Eb});c.createIndex("documentKeyIndex",bb),c.createIndex("collectionGroupIndex",Sb)}(e)).next(()=>this.zs(e,s)).next(()=>e.deleteObjectStore("remoteDocuments"))),r<14&&i>=14&&(o=o.next(()=>this.js(e,s))),r<15&&i>=15&&(o=o.next(()=>function(a){a.createObjectStore("indexConfiguration",{keyPath:"indexId",autoIncrement:!0}).createIndex("collectionGroupIndex","collectionGroup",{unique:!1}),a.createObjectStore("indexState",{keyPath:Nb}).createIndex("sequenceNumberIndex",Db,{unique:!1}),a.createObjectStore("indexEntries",{keyPath:Pb}).createIndex("documentKeyIndex",xb,{unique:!1})}(e))),o}Us(e){let t=0;return e.store("remoteDocuments").Z((r,i)=>{t+=mo(i)}).next(()=>{const r={byteSize:t};return e.store("remoteDocumentGlobal").put("remoteDocumentGlobalKey",r)})}qs(e){const t=e.store("mutationQueues"),r=e.store("mutations");return t.j().next(i=>f.forEach(i,s=>{const o=IDBKeyRange.bound([s.userId,-1],[s.userId,s.lastAcknowledgedBatchId]);return r.j("userMutationsIndex",o).next(a=>f.forEach(a,c=>{A(c.userId===s.userId);const u=gn(this.serializer,c);return sg(e,s.userId,u).next(()=>{})}))}))}Ks(e){const t=e.store("targetDocuments"),r=e.store("remoteDocuments");return e.store("targetGlobal").get("targetGlobalKey").next(i=>{const s=[];return r.Z((o,a)=>{const c=new F(o),u=function(l){return[0,Ue(l)]}(c);s.push(t.get(u).next(l=>l?f.resolve():(h=>t.put({targetId:0,path:Ue(h),sequenceNumber:i.highestListenSequenceNumber}))(c)))}).next(()=>f.waitFor(s))})}Gs(e,t){e.createObjectStore("collectionParents",{keyPath:Cb});const r=t.store("collectionParents"),i=new ju,s=o=>{if(i.add(o)){const a=o.lastSegment(),c=o.popLast();return r.put({collectionId:a,parent:Ue(c)})}};return t.store("remoteDocuments").Z({Y:!0},(o,a)=>{const c=new F(o);return s(c.popLast())}).next(()=>t.store("documentMutations").Z({Y:!0},([o,a,c],u)=>{const l=ut(a);return s(l.popLast())}))}Qs(e){const t=e.store("targets");return t.Z((r,i)=>{const s=ci(i),o=ng(this.serializer,s);return t.put(o)})}zs(e,t){const r=t.store("remoteDocuments"),i=[];return r.Z((s,o)=>{const a=t.store("remoteDocumentsV14"),c=(u=o,u.document?new I(F.fromString(u.document.name).popFirst(5)):u.noDocument?I.fromSegments(u.noDocument.path):u.unknownDocument?I.fromSegments(u.unknownDocument.path):b()).path.toArray();var u;/**
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
*/const l={prefixPath:c.slice(0,c.length-2),collectionGroup:c[c.length-2],documentId:c[c.length-1],readTime:o.readTime||[0,0],unknownDocument:o.unknownDocument,noDocument:o.noDocument,document:o.document,hasCommittedMutations:!!o.hasCommittedMutations};i.push(a.put(l))}).next(()=>f.waitFor(i))}js(e,t){const r=t.store("mutations"),i=ug(this.serializer),s=new hg(na.Fs,this.serializer.se);return r.j().next(o=>{const a=new Map;return o.forEach(c=>{var u;let l=(u=a.get(c.userId))!==null&&u!==void 0?u:P();gn(this.serializer,c).keys().forEach(h=>l=l.add(h)),a.set(c.userId,l)}),f.forEach(a,(c,u)=>{const l=new pe(u),h=ea.ie(this.serializer,l),d=s.getIndexManager(l),p=ta.ie(l,this.serializer,d,s.referenceDelegate);return new lg(i,p,h,d).recalculateAndSaveOverlaysForDocumentKeys(new mc(t,Be.ct),c).next()})})}}function sd(n){n.createObjectStore("targetDocuments",{keyPath:Ab}).createIndex("documentTargetsIndex",Rb,{unique:!0}),n.createObjectStore("targets",{keyPath:"targetId"}).createIndex("queryTargetsIndex",kb,{unique:!0}),n.createObjectStore("targetGlobal")}const Ba="Failed to obtain exclusive access to the persistence layer. To allow shared access, multi-tab synchronization has to be enabled in all tabs. If you are using `experimentalForceOwningTab:true`, make sure that only one tab has persistence enabled at any given time.";class Ku{constructor(e,t,r,i,s,o,a,c,u,l,h=15){if(this.allowTabSynchronization=e,this.persistenceKey=t,this.clientId=r,this.Ws=s,this.window=o,this.document=a,this.Hs=u,this.Js=l,this.Ys=h,this.Vs=null,this.Ss=!1,this.isPrimary=!1,this.networkEnabled=!0,this.Zs=null,this.inForeground=!1,this.Xs=null,this.ti=null,this.ei=Number.NEGATIVE_INFINITY,this.ni=d=>Promise.resolve(),!Ku.D())throw new y(m.UNIMPLEMENTED,"This platform is either missing IndexedDB or is known to have an incomplete implementation. Offline persistence has been disabled.");this.referenceDelegate=new VS(this,i),this.si=t+"main",this.serializer=new tg(c),this.ii=new Ze(this.si,this.Ys,new YS(this.serializer)),this.Ds=new LS(this.referenceDelegate,this.serializer),this.remoteDocumentCache=ug(this.serializer),this.xs=new kS,this.window&&this.window.localStorage?this.ri=this.window.localStorage:(this.ri=null,l===!1&&re("IndexedDbPersistence","LocalStorage is unavailable. As a result, persistence may not work reliably. In particular enablePersistence() could fail immediately after refreshing the page."))}start(){return this.oi().then(()=>{if(!this.isPrimary&&!this.allowTabSynchronization)throw new y(m.FAILED_PRECONDITION,Ba);return this.ui(),this.ci(),this.ai(),this.runTransaction("getHighestListenSequenceNumber","readonly",e=>this.Ds.getHighestSequenceNumber(e))}).then(e=>{this.Vs=new Be(e,this.Hs)}).then(()=>{this.Ss=!0}).catch(e=>(this.ii&&this.ii.close(),Promise.reject(e)))}hi(e){return this.ni=async t=>{if(this.started)return e(t)},e(this.isPrimary)}setDatabaseDeletedListener(e){this.ii.B(async t=>{t.newVersion===null&&await e()})}setNetworkEnabled(e){this.networkEnabled!==e&&(this.networkEnabled=e,this.Ws.enqueueAndForget(async()=>{this.started&&await this.oi()}))}oi(){return this.runTransaction("updateClientMetadataAndTryBecomePrimary","readwrite",e=>Ns(e).put({clientId:this.clientId,updateTimeMs:Date.now(),networkEnabled:this.networkEnabled,inForeground:this.inForeground}).next(()=>{if(this.isPrimary)return this.li(e).next(t=>{t||(this.isPrimary=!1,this.Ws.enqueueRetryable(()=>this.ni(!1)))})}).next(()=>this.fi(e)).next(t=>this.isPrimary&&!t?this.di(e).next(()=>!1):!!t&&this.wi(e).next(()=>!0))).catch(e=>{if(an(e))return v("IndexedDbPersistence","Failed to extend owner lease: ",e),this.isPrimary;if(!this.allowTabSynchronization)throw e;return v("IndexedDbPersistence","Releasing owner lease after error during lease refresh",e),!1}).then(e=>{this.isPrimary!==e&&this.Ws.enqueueRetryable(()=>this.ni(e)),this.isPrimary=e})}li(e){return ti(e).get("owner").next(t=>f.resolve(this._i(t)))}mi(e){return Ns(e).delete(this.clientId)}async gi(){if(this.isPrimary&&!this.yi(this.ei,18e5)){this.ei=Date.now();const e=await this.runTransaction("maybeGarbageCollectMultiClientState","readwrite-primary",t=>{const r=ye(t,"clientMetadata");return r.j().next(i=>{const s=this.pi(i,18e5),o=i.filter(a=>s.indexOf(a)===-1);return f.forEach(o,a=>r.delete(a.clientId)).next(()=>o)})}).catch(()=>[]);if(this.ri)for(const t of e)this.ri.removeItem(this.Ii(t.clientId))}}ai(){this.ti=this.Ws.enqueueAfterDelay("client_metadata_refresh",4e3,()=>this.oi().then(()=>this.gi()).then(()=>this.ai()))}_i(e){return!!e&&e.ownerId===this.clientId}fi(e){return this.Js?f.resolve(!0):ti(e).get("owner").next(t=>{if(t!==null&&this.yi(t.leaseTimestampMs,5e3)&&!this.Ti(t.ownerId)){if(this._i(t)&&this.networkEnabled)return!0;if(!this._i(t)){if(!t.allowTabSynchronization)throw new y(m.FAILED_PRECONDITION,Ba);return!1}}return!(!this.networkEnabled||!this.inForeground)||Ns(e).j().next(r=>this.pi(r,5e3).find(i=>{if(this.clientId!==i.clientId){const s=!this.networkEnabled&&i.networkEnabled,o=!this.inForeground&&i.inForeground,a=this.networkEnabled===i.networkEnabled;if(s||o&&a)return!0}return!1})===void 0)}).next(t=>(this.isPrimary!==t&&v("IndexedDbPersistence",`Client ${t?"is":"is not"} eligible for a primary lease.`),t))}async shutdown(){this.Ss=!1,this.Ei(),this.ti&&(this.ti.cancel(),this.ti=null),this.Ai(),this.Ri(),await this.ii.runTransaction("shutdown","readwrite",["owner","clientMetadata"],e=>{const t=new mc(e,Be.ct);return this.di(t).next(()=>this.mi(t))}),this.ii.close(),this.vi()}pi(e,t){return e.filter(r=>this.yi(r.updateTimeMs,t)&&!this.Ti(r.clientId))}bi(){return this.runTransaction("getActiveClients","readonly",e=>Ns(e).j().next(t=>this.pi(t,18e5).map(r=>r.clientId)))}get started(){return this.Ss}getMutationQueue(e,t){return ta.ie(e,this.serializer,t,this.referenceDelegate)}getTargetCache(){return this.Ds}getRemoteDocumentCache(){return this.remoteDocumentCache}getIndexManager(e){return new OS(e,this.serializer.se.databaseId)}getDocumentOverlayCache(e){return ea.ie(this.serializer,e)}getBundleCache(){return this.xs}runTransaction(e,t,r){v("IndexedDbPersistence","Starting transaction:",e);const i=t==="readonly"?"readonly":"readwrite",s=(o=this.Ys)===15?Fb:o===14?dm:o===13?hm:o===12?Ub:o===11?lm:void b();var o;let a;return this.ii.runTransaction(e,i,s,c=>(a=new mc(c,this.Vs?this.Vs.next():Be.ct),t==="readwrite-primary"?this.li(a).next(u=>!!u||this.fi(a)).next(u=>{if(!u)throw re(`Failed to obtain primary lease for action '${e}'.`),this.isPrimary=!1,this.Ws.enqueueRetryable(()=>this.ni(!1)),new y(m.FAILED_PRECONDITION,om);return r(a)}).next(u=>this.wi(a).next(()=>u)):this.Pi(a).next(()=>r(a)))).then(c=>(a.raiseOnCommittedEvent(),c))}Pi(e){return ti(e).get("owner").next(t=>{if(t!==null&&this.yi(t.leaseTimestampMs,5e3)&&!this.Ti(t.ownerId)&&!this._i(t)&&!(this.Js||this.allowTabSynchronization&&t.allowTabSynchronization))throw new y(m.FAILED_PRECONDITION,Ba)})}wi(e){const t={ownerId:this.clientId,allowTabSynchronization:this.allowTabSynchronization,leaseTimestampMs:Date.now()};return ti(e).put("owner",t)}static D(){return Ze.D()}di(e){const t=ti(e);return t.get("owner").next(r=>this._i(r)?(v("IndexedDbPersistence","Releasing primary lease."),t.delete("owner")):f.resolve())}yi(e,t){const r=Date.now();return!(e<r-t)&&(!(e>r)||(re(`Detected an update time that is in the future: ${e} > ${r}`),!1))}ui(){this.document!==null&&typeof this.document.addEventListener=="function"&&(this.Xs=()=>{this.Ws.enqueueAndForget(()=>(this.inForeground=this.document.visibilityState==="visible",this.oi()))},this.document.addEventListener("visibilitychange",this.Xs),this.inForeground=this.document.visibilityState==="visible")}Ai(){this.Xs&&(this.document.removeEventListener("visibilitychange",this.Xs),this.Xs=null)}ci(){var e;typeof((e=this.window)===null||e===void 0?void 0:e.addEventListener)=="function"&&(this.Zs=()=>{this.Ei();const t=/(?:Version|Mobile)\/1[456]/;Jy()&&(navigator.appVersion.match(t)||navigator.userAgent.match(t))&&this.Ws.enterRestrictedMode(!0),this.Ws.enqueueAndForget(()=>this.shutdown())},this.window.addEventListener("pagehide",this.Zs))}Ri(){this.Zs&&(this.window.removeEventListener("pagehide",this.Zs),this.Zs=null)}Ti(e){var t;try{const r=((t=this.ri)===null||t===void 0?void 0:t.getItem(this.Ii(e)))!==null;return v("IndexedDbPersistence",`Client '${e}' ${r?"is":"is not"} zombied in LocalStorage`),r}catch(r){return re("IndexedDbPersistence","Failed to get zombied client id.",r),!1}}Ei(){if(this.ri)try{this.ri.setItem(this.Ii(this.clientId),String(Date.now()))}catch(e){re("Failed to set zombie client id.",e)}}vi(){if(this.ri)try{this.ri.removeItem(this.Ii(this.clientId))}catch{}}Ii(e){return`firestore_zombie_${this.persistenceKey}_${e}`}}function ti(n){return ye(n,"owner")}function Ns(n){return ye(n,"clientMetadata")}function Wu(n,e){let t=n.projectId;return n.isDefaultDatabase||(t+="."+n.database),"firestore/"+e+"/"+t+"/"}/**
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
 */class Hu{constructor(e,t,r,i){this.targetId=e,this.fromCache=t,this.Vi=r,this.Si=i}static Di(e,t){let r=P(),i=P();for(const s of t.docChanges)switch(s.type){case 0:r=r.add(s.doc.key);break;case 1:i=i.add(s.doc.key)}return new Hu(e,t.fromCache,r,i)}}/**
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
 */class dg{constructor(){this.Ci=!1}initialize(e,t){this.xi=e,this.indexManager=t,this.Ci=!0}getDocumentsMatchingQuery(e,t,r,i){return this.Ni(e,t).next(s=>s||this.ki(e,t,i,r)).next(s=>s||this.Oi(e,t))}Ni(e,t){if(Oh(t))return f.resolve(null);let r=ze(t);return this.indexManager.getIndexType(e,r).next(i=>i===0?null:(t.limit!==null&&i===1&&(t=ho(t,null,"F"),r=ze(t)),this.indexManager.getDocumentsMatchingTarget(e,r).next(s=>{const o=P(...s);return this.xi.getDocuments(e,o).next(a=>this.indexManager.getMinOffset(e,r).next(c=>{const u=this.$i(t,a);return this.Mi(t,u,o,c.readTime)?this.Ni(e,ho(t,null,"F")):this.Fi(e,u,t,c)}))})))}ki(e,t,r,i){return Oh(t)||i.isEqual(R.min())?this.Oi(e,t):this.xi.getDocuments(e,r).next(s=>{const o=this.$i(t,s);return this.Mi(t,o,r,i)?this.Oi(e,t):(fc()<=U.DEBUG&&v("QueryEngine","Re-using previous result from %s to execute query: %s",i.toString(),Tc(t)),this.Fi(e,o,t,im(i,-1)))})}$i(e,t){let r=new j(Am(e));return t.forEach((i,s)=>{ls(e,s)&&(r=r.add(s))}),r}Mi(e,t,r,i){if(e.limit===null)return!1;if(r.size!==t.size)return!0;const s=e.limitType==="F"?t.last():t.first();return!!s&&(s.hasPendingWrites||s.version.compareTo(i)>0)}Oi(e,t){return fc()<=U.DEBUG&&v("QueryEngine","Using full collection scan to execute query:",Tc(t)),this.xi.getDocumentsMatchingQuery(e,t,We.min())}Fi(e,t,r,i){return this.xi.getDocumentsMatchingQuery(e,r,i).next(s=>(t.forEach(o=>{s=s.insert(o.key,o)}),s))}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class JS{constructor(e,t,r,i){this.persistence=e,this.Bi=t,this.serializer=i,this.Li=new te(D),this.qi=new cn(s=>Un(s),cs),this.Ui=new Map,this.Ki=e.getRemoteDocumentCache(),this.Ds=e.getTargetCache(),this.xs=e.getBundleCache(),this.Gi(r)}Gi(e){this.documentOverlayCache=this.persistence.getDocumentOverlayCache(e),this.indexManager=this.persistence.getIndexManager(e),this.mutationQueue=this.persistence.getMutationQueue(e,this.indexManager),this.localDocuments=new lg(this.Ki,this.mutationQueue,this.documentOverlayCache,this.indexManager),this.Ki.setIndexManager(this.indexManager),this.Bi.initialize(this.localDocuments,this.indexManager)}collectGarbage(e){return this.persistence.runTransaction("Collect garbage","readwrite-primary",t=>e.collect(t,this.Li))}}function fg(n,e,t,r){return new JS(n,e,t,r)}async function pg(n,e){const t=T(n);return await t.persistence.runTransaction("Handle user change","readonly",r=>{let i;return t.mutationQueue.getAllMutationBatches(r).next(s=>(i=s,t.Gi(e),t.mutationQueue.getAllMutationBatches(r))).next(s=>{const o=[],a=[];let c=P();for(const u of i){o.push(u.batchId);for(const l of u.mutations)c=c.add(l.key)}for(const u of s){a.push(u.batchId);for(const l of u.mutations)c=c.add(l.key)}return t.localDocuments.getDocuments(r,c).next(u=>({Qi:u,removedBatchIds:o,addedBatchIds:a}))})})}function XS(n,e){const t=T(n);return t.persistence.runTransaction("Acknowledge batch","readwrite-primary",r=>{const i=e.batch.keys(),s=t.Ki.newChangeBuffer({trackRemovals:!0});return function(o,a,c,u){const l=c.batch,h=l.keys();let d=f.resolve();return h.forEach(p=>{d=d.next(()=>u.getEntry(a,p)).next(g=>{const _=c.docVersions.get(p);A(_!==null),g.version.compareTo(_)<0&&(l.applyToRemoteDocument(g,c),g.isValidDocument()&&(g.setReadTime(c.commitVersion),u.addEntry(g)))})}),d.next(()=>o.mutationQueue.removeMutationBatch(a,l))}(t,r,e,s).next(()=>s.apply(r)).next(()=>t.mutationQueue.performConsistencyCheck(r)).next(()=>t.documentOverlayCache.removeOverlaysForBatchId(r,i,e.batch.batchId)).next(()=>t.localDocuments.recalculateAndSaveOverlaysForDocumentKeys(r,function(o){let a=P();for(let c=0;c<o.mutationResults.length;++c)o.mutationResults[c].transformResults.length>0&&(a=a.add(o.batch.mutations[c].key));return a}(e))).next(()=>t.localDocuments.getDocuments(r,i))})}function mg(n){const e=T(n);return e.persistence.runTransaction("Get last remote snapshot version","readonly",t=>e.Ds.getLastRemoteSnapshotVersion(t))}function ZS(n,e){const t=T(n),r=e.snapshotVersion;let i=t.Li;return t.persistence.runTransaction("Apply remote event","readwrite-primary",s=>{const o=t.Ki.newChangeBuffer({trackRemovals:!0});i=t.Li;const a=[];e.targetChanges.forEach((l,h)=>{const d=i.get(h);if(!d)return;a.push(t.Ds.removeMatchingKeys(s,l.removedDocuments,h).next(()=>t.Ds.addMatchingKeys(s,l.addedDocuments,h)));let p=d.withSequenceNumber(s.currentSequenceNumber);e.targetMismatches.has(h)?p=p.withResumeToken(he.EMPTY_BYTE_STRING,R.min()).withLastLimboFreeSnapshotVersion(R.min()):l.resumeToken.approximateByteSize()>0&&(p=p.withResumeToken(l.resumeToken,r)),i=i.insert(h,p),function(g,_,E){return g.resumeToken.approximateByteSize()===0||_.snapshotVersion.toMicroseconds()-g.snapshotVersion.toMicroseconds()>=3e8?!0:E.addedDocuments.size+E.modifiedDocuments.size+E.removedDocuments.size>0}(d,p,l)&&a.push(t.Ds.updateTargetData(s,p))});let c=$e(),u=P();if(e.documentUpdates.forEach(l=>{e.resolvedLimboDocuments.has(l)&&a.push(t.persistence.referenceDelegate.updateLimboDocument(s,l))}),a.push(gg(s,o,e.documentUpdates).next(l=>{c=l.zi,u=l.ji})),!r.isEqual(R.min())){const l=t.Ds.getLastRemoteSnapshotVersion(s).next(h=>t.Ds.setTargetsMetadata(s,s.currentSequenceNumber,r));a.push(l)}return f.waitFor(a).next(()=>o.apply(s)).next(()=>t.localDocuments.getLocalViewOfDocuments(s,c,u)).next(()=>c)}).then(s=>(t.Li=i,s))}function gg(n,e,t){let r=P(),i=P();return t.forEach(s=>r=r.add(s)),e.getEntries(n,r).next(s=>{let o=$e();return t.forEach((a,c)=>{const u=s.get(a);c.isFoundDocument()!==u.isFoundDocument()&&(i=i.add(a)),c.isNoDocument()&&c.version.isEqual(R.min())?(e.removeEntry(a,c.readTime),o=o.insert(a,c)):!u.isValidDocument()||c.version.compareTo(u.version)>0||c.version.compareTo(u.version)===0&&u.hasPendingWrites?(e.addEntry(c),o=o.insert(a,c)):v("LocalStore","Ignoring outdated watch update for ",a,". Current version:",u.version," Watch version:",c.version)}),{zi:o,ji:i}})}function e0(n,e){const t=T(n);return t.persistence.runTransaction("Get next mutation batch","readonly",r=>(e===void 0&&(e=-1),t.mutationQueue.getNextMutationBatchAfterBatchId(r,e)))}function br(n,e){const t=T(n);return t.persistence.runTransaction("Allocate target","readwrite",r=>{let i;return t.Ds.getTargetData(r,e).next(s=>s?(i=s,f.resolve(i)):t.Ds.allocateTargetId(r).next(o=>(i=new jt(e,o,0,r.currentSequenceNumber),t.Ds.addTargetData(r,i).next(()=>i))))}).then(r=>{const i=t.Li.get(r.targetId);return(i===null||r.snapshotVersion.compareTo(i.snapshotVersion)>0)&&(t.Li=t.Li.insert(r.targetId,r),t.qi.set(e,r.targetId)),r})}async function Sr(n,e,t){const r=T(n),i=r.Li.get(e),s=t?"readwrite":"readwrite-primary";try{t||await r.persistence.runTransaction("Release target",s,o=>r.persistence.referenceDelegate.removeTarget(o,i))}catch(o){if(!an(o))throw o;v("LocalStore",`Failed to update sequence numbers for target ${e}: ${o}`)}r.Li=r.Li.remove(e),r.qi.delete(i.target)}function go(n,e,t){const r=T(n);let i=R.min(),s=P();return r.persistence.runTransaction("Execute query","readonly",o=>function(a,c,u){const l=T(a),h=l.qi.get(u);return h!==void 0?f.resolve(l.Li.get(h)):l.Ds.getTargetData(c,u)}(r,o,ze(e)).next(a=>{if(a)return i=a.lastLimboFreeSnapshotVersion,r.Ds.getMatchingKeysForTargetId(o,a.targetId).next(c=>{s=c})}).next(()=>r.Bi.getDocumentsMatchingQuery(o,e,t?i:R.min(),t?s:P())).next(a=>(wg(r,km(e),a),{documents:a,Wi:s})))}function yg(n,e){const t=T(n),r=T(t.Ds),i=t.Li.get(e);return i?Promise.resolve(i.target):t.persistence.runTransaction("Get target data","readonly",s=>r.ne(s,e).next(o=>o?o.target:null))}function vg(n,e){const t=T(n),r=t.Ui.get(e)||R.min();return t.persistence.runTransaction("Get new document changes","readonly",i=>t.Ki.getAllFromCollectionGroup(i,e,im(r,-1),Number.MAX_SAFE_INTEGER)).then(i=>(wg(t,e,i),i))}function wg(n,e,t){let r=n.Ui.get(e)||R.min();t.forEach((i,s)=>{s.readTime.compareTo(r)>0&&(r=s.readTime)}),n.Ui.set(e,r)}async function t0(n,e,t,r){const i=T(n);let s=P(),o=$e();for(const u of t){const l=e.Hi(u.metadata.name);u.document&&(s=s.add(l));const h=e.Ji(u);h.setReadTime(e.Yi(u.metadata.readTime)),o=o.insert(l,h)}const a=i.Ki.newChangeBuffer({trackRemovals:!0}),c=await br(i,function(u){return ze(Fr(F.fromString(`__bundle__/docs/${u}`)))}(r));return i.persistence.runTransaction("Apply bundle documents","readwrite",u=>gg(u,a,o).next(l=>(a.apply(u),l)).next(l=>i.Ds.removeMatchingKeysForTargetId(u,c.targetId).next(()=>i.Ds.addMatchingKeys(u,s,c.targetId)).next(()=>i.localDocuments.getLocalViewOfDocuments(u,l.zi,l.ji)).next(()=>l.zi)))}async function n0(n,e,t=P()){const r=await br(n,ze($u(e.bundledQuery))),i=T(n);return i.persistence.runTransaction("Save named query","readwrite",s=>{const o=se(e.readTime);if(r.snapshotVersion.compareTo(o)>=0)return i.xs.saveNamedQuery(s,e);const a=r.withResumeToken(he.EMPTY_BYTE_STRING,o);return i.Li=i.Li.insert(a.targetId,a),i.Ds.updateTargetData(s,a).next(()=>i.Ds.removeMatchingKeysForTargetId(s,r.targetId)).next(()=>i.Ds.addMatchingKeys(s,t,r.targetId)).next(()=>i.xs.saveNamedQuery(s,e))})}function od(n,e){return`firestore_clients_${n}_${e}`}function ad(n,e,t){let r=`firestore_mutations_${n}_${t}`;return e.isAuthenticated()&&(r+=`_${e.uid}`),r}function qa(n,e){return`firestore_targets_${n}_${e}`}class yo{constructor(e,t,r,i){this.user=e,this.batchId=t,this.state=r,this.error=i}static Zi(e,t,r){const i=JSON.parse(r);let s,o=typeof i=="object"&&["pending","acknowledged","rejected"].indexOf(i.state)!==-1&&(i.error===void 0||typeof i.error=="object");return o&&i.error&&(o=typeof i.error.message=="string"&&typeof i.error.code=="string",o&&(s=new y(i.error.code,i.error.message))),o?new yo(e,t,i.state,s):(re("SharedClientState",`Failed to parse mutation state for ID '${t}': ${r}`),null)}Xi(){const e={state:this.state,updateTimeMs:Date.now()};return this.error&&(e.error={code:this.error.code,message:this.error.message}),JSON.stringify(e)}}class yi{constructor(e,t,r){this.targetId=e,this.state=t,this.error=r}static Zi(e,t){const r=JSON.parse(t);let i,s=typeof r=="object"&&["not-current","current","rejected"].indexOf(r.state)!==-1&&(r.error===void 0||typeof r.error=="object");return s&&r.error&&(s=typeof r.error.message=="string"&&typeof r.error.code=="string",s&&(i=new y(r.error.code,r.error.message))),s?new yi(e,r.state,i):(re("SharedClientState",`Failed to parse target state for ID '${e}': ${t}`),null)}Xi(){const e={state:this.state,updateTimeMs:Date.now()};return this.error&&(e.error={code:this.error.code,message:this.error.message}),JSON.stringify(e)}}class vo{constructor(e,t){this.clientId=e,this.activeTargetIds=t}static Zi(e,t){const r=JSON.parse(t);let i=typeof r=="object"&&r.activeTargetIds instanceof Array,s=Jo();for(let o=0;i&&o<r.activeTargetIds.length;++o)i=cm(r.activeTargetIds[o]),s=s.add(r.activeTargetIds[o]);return i?new vo(e,s):(re("SharedClientState",`Failed to parse client data for instance '${e}': ${t}`),null)}}class Qu{constructor(e,t){this.clientId=e,this.onlineState=t}static Zi(e){const t=JSON.parse(e);return typeof t=="object"&&["Unknown","Online","Offline"].indexOf(t.onlineState)!==-1&&typeof t.clientId=="string"?new Qu(t.clientId,t.onlineState):(re("SharedClientState",`Failed to parse online state: ${e}`),null)}}class Rc{constructor(){this.activeTargetIds=Jo()}tr(e){this.activeTargetIds=this.activeTargetIds.add(e)}er(e){this.activeTargetIds=this.activeTargetIds.delete(e)}Xi(){const e={activeTargetIds:this.activeTargetIds.toArray(),updateTimeMs:Date.now()};return JSON.stringify(e)}}class $a{constructor(e,t,r,i,s){this.window=e,this.Ws=t,this.persistenceKey=r,this.nr=i,this.syncEngine=null,this.onlineStateHandler=null,this.sequenceNumberHandler=null,this.sr=this.ir.bind(this),this.rr=new te(D),this.started=!1,this.ur=[];const o=r.replace(/[.*+?^${}()|[\]\\]/g,"\\$&");this.storage=this.window.localStorage,this.currentUser=s,this.cr=od(this.persistenceKey,this.nr),this.ar=function(a){return`firestore_sequence_number_${a}`}(this.persistenceKey),this.rr=this.rr.insert(this.nr,new Rc),this.hr=new RegExp(`^firestore_clients_${o}_([^_]*)$`),this.lr=new RegExp(`^firestore_mutations_${o}_(\\d+)(?:_(.*))?$`),this.dr=new RegExp(`^firestore_targets_${o}_(\\d+)$`),this.wr=function(a){return`firestore_online_state_${a}`}(this.persistenceKey),this._r=function(a){return`firestore_bundle_loaded_v2_${a}`}(this.persistenceKey),this.window.addEventListener("storage",this.sr)}static D(e){return!(!e||!e.localStorage)}async start(){const e=await this.syncEngine.bi();for(const r of e){if(r===this.nr)continue;const i=this.getItem(od(this.persistenceKey,r));if(i){const s=vo.Zi(r,i);s&&(this.rr=this.rr.insert(s.clientId,s))}}this.mr();const t=this.storage.getItem(this.wr);if(t){const r=this.gr(t);r&&this.yr(r)}for(const r of this.ur)this.ir(r);this.ur=[],this.window.addEventListener("pagehide",()=>this.shutdown()),this.started=!0}writeSequenceNumber(e){this.setItem(this.ar,JSON.stringify(e))}getAllActiveQueryTargets(){return this.pr(this.rr)}isActiveQueryTarget(e){let t=!1;return this.rr.forEach((r,i)=>{i.activeTargetIds.has(e)&&(t=!0)}),t}addPendingMutation(e){this.Ir(e,"pending")}updateMutationState(e,t,r){this.Ir(e,t,r),this.Tr(e)}addLocalQueryTarget(e){let t="not-current";if(this.isActiveQueryTarget(e)){const r=this.storage.getItem(qa(this.persistenceKey,e));if(r){const i=yi.Zi(e,r);i&&(t=i.state)}}return this.Er.tr(e),this.mr(),t}removeLocalQueryTarget(e){this.Er.er(e),this.mr()}isLocalQueryTarget(e){return this.Er.activeTargetIds.has(e)}clearQueryState(e){this.removeItem(qa(this.persistenceKey,e))}updateQueryState(e,t,r){this.Ar(e,t,r)}handleUserChange(e,t,r){t.forEach(i=>{this.Tr(i)}),this.currentUser=e,r.forEach(i=>{this.addPendingMutation(i)})}setOnlineState(e){this.Rr(e)}notifyBundleLoaded(e){this.vr(e)}shutdown(){this.started&&(this.window.removeEventListener("storage",this.sr),this.removeItem(this.cr),this.started=!1)}getItem(e){const t=this.storage.getItem(e);return v("SharedClientState","READ",e,t),t}setItem(e,t){v("SharedClientState","SET",e,t),this.storage.setItem(e,t)}removeItem(e){v("SharedClientState","REMOVE",e),this.storage.removeItem(e)}ir(e){const t=e;if(t.storageArea===this.storage){if(v("SharedClientState","EVENT",t.key,t.newValue),t.key===this.cr)return void re("Received WebStorage notification for local change. Another client might have garbage-collected our state");this.Ws.enqueueRetryable(async()=>{if(this.started){if(t.key!==null){if(this.hr.test(t.key)){if(t.newValue==null){const r=this.br(t.key);return this.Pr(r,null)}{const r=this.Vr(t.key,t.newValue);if(r)return this.Pr(r.clientId,r)}}else if(this.lr.test(t.key)){if(t.newValue!==null){const r=this.Sr(t.key,t.newValue);if(r)return this.Dr(r)}}else if(this.dr.test(t.key)){if(t.newValue!==null){const r=this.Cr(t.key,t.newValue);if(r)return this.Nr(r)}}else if(t.key===this.wr){if(t.newValue!==null){const r=this.gr(t.newValue);if(r)return this.yr(r)}}else if(t.key===this.ar){const r=function(i){let s=Be.ct;if(i!=null)try{const o=JSON.parse(i);A(typeof o=="number"),s=o}catch(o){re("SharedClientState","Failed to read sequence number from WebStorage",o)}return s}(t.newValue);r!==Be.ct&&this.sequenceNumberHandler(r)}else if(t.key===this._r){const r=this.kr(t.newValue);await Promise.all(r.map(i=>this.syncEngine.Or(i)))}}}else this.ur.push(t)})}}get Er(){return this.rr.get(this.nr)}mr(){this.setItem(this.cr,this.Er.Xi())}Ir(e,t,r){const i=new yo(this.currentUser,e,t,r),s=ad(this.persistenceKey,this.currentUser,e);this.setItem(s,i.Xi())}Tr(e){const t=ad(this.persistenceKey,this.currentUser,e);this.removeItem(t)}Rr(e){const t={clientId:this.nr,onlineState:e};this.storage.setItem(this.wr,JSON.stringify(t))}Ar(e,t,r){const i=qa(this.persistenceKey,e),s=new yi(e,t,r);this.setItem(i,s.Xi())}vr(e){const t=JSON.stringify(Array.from(e));this.setItem(this._r,t)}br(e){const t=this.hr.exec(e);return t?t[1]:null}Vr(e,t){const r=this.br(e);return vo.Zi(r,t)}Sr(e,t){const r=this.lr.exec(e),i=Number(r[1]),s=r[2]!==void 0?r[2]:null;return yo.Zi(new pe(s),i,t)}Cr(e,t){const r=this.dr.exec(e),i=Number(r[1]);return yi.Zi(i,t)}gr(e){return Qu.Zi(e)}kr(e){return JSON.parse(e)}async Dr(e){if(e.user.uid===this.currentUser.uid)return this.syncEngine.$r(e.batchId,e.state,e.error);v("SharedClientState",`Ignoring mutation for non-active user ${e.user.uid}`)}Nr(e){return this.syncEngine.Mr(e.targetId,e.state,e.error)}Pr(e,t){const r=t?this.rr.insert(e,t):this.rr.remove(e),i=this.pr(this.rr),s=this.pr(r),o=[],a=[];return s.forEach(c=>{i.has(c)||o.push(c)}),i.forEach(c=>{s.has(c)||a.push(c)}),this.syncEngine.Fr(o,a).then(()=>{this.rr=r})}yr(e){this.rr.get(e.clientId)&&this.onlineStateHandler(e.onlineState)}pr(e){let t=Jo();return e.forEach((r,i)=>{t=t.unionWith(i.activeTargetIds)}),t}}class _g{constructor(){this.Br=new Rc,this.Lr={},this.onlineStateHandler=null,this.sequenceNumberHandler=null}addPendingMutation(e){}updateMutationState(e,t,r){}addLocalQueryTarget(e){return this.Br.tr(e),this.Lr[e]||"not-current"}updateQueryState(e,t,r){this.Lr[e]=t}removeLocalQueryTarget(e){this.Br.er(e)}isLocalQueryTarget(e){return this.Br.activeTargetIds.has(e)}clearQueryState(e){delete this.Lr[e]}getAllActiveQueryTargets(){return this.Br.activeTargetIds}isActiveQueryTarget(e){return this.Br.activeTargetIds.has(e)}start(){return this.Br=new Rc,Promise.resolve()}handleUserChange(e,t,r){}setOnlineState(e){}shutdown(){}writeSequenceNumber(e){}notifyBundleLoaded(e){}}/**
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
 */class r0{qr(e){}shutdown(){}}/**
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
 */class cd{constructor(){this.Ur=()=>this.Kr(),this.Gr=()=>this.Qr(),this.zr=[],this.jr()}qr(e){this.zr.push(e)}shutdown(){window.removeEventListener("online",this.Ur),window.removeEventListener("offline",this.Gr)}jr(){window.addEventListener("online",this.Ur),window.addEventListener("offline",this.Gr)}Kr(){v("ConnectivityMonitor","Network connectivity changed: AVAILABLE");for(const e of this.zr)e(0)}Qr(){v("ConnectivityMonitor","Network connectivity changed: UNAVAILABLE");for(const e of this.zr)e(1)}static D(){return typeof window<"u"&&window.addEventListener!==void 0&&window.removeEventListener!==void 0}}/**
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
 */let Ds=null;function za(){return Ds===null?Ds=268435456+Math.round(2147483648*Math.random()):Ds++,"0x"+Ds.toString(16)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const i0={BatchGetDocuments:"batchGet",Commit:"commit",RunQuery:"runQuery",RunAggregationQuery:"runAggregationQuery"};/**
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
 */class s0{constructor(e){this.Wr=e.Wr,this.Hr=e.Hr}Jr(e){this.Yr=e}Zr(e){this.Xr=e}onMessage(e){this.eo=e}close(){this.Hr()}send(e){this.Wr(e)}no(){this.Yr()}so(e){this.Xr(e)}io(e){this.eo(e)}}/**
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
 */const Ae="WebChannelConnection";class o0 extends class{constructor(e){this.databaseInfo=e,this.databaseId=e.databaseId;const t=e.ssl?"https":"http";this.ro=t+"://"+e.host,this.oo="projects/"+this.databaseId.projectId+"/databases/"+this.databaseId.database+"/documents"}get uo(){return!1}co(e,t,r,i,s){const o=za(),a=this.ao(e,t);v("RestConnection",`Sending RPC '${e}' ${o}:`,a,r);const c={};return this.ho(c,i,s),this.lo(e,a,c,r).then(u=>(v("RestConnection",`Received RPC '${e}' ${o}: `,u),u),u=>{throw At("RestConnection",`RPC '${e}' ${o} failed with error: `,u,"url: ",a,"request:",r),u})}fo(e,t,r,i,s,o){return this.co(e,t,r,i,s)}ho(e,t,r){e["X-Goog-Api-Client"]="gl-js/ fire/"+Ur,e["Content-Type"]="text/plain",this.databaseInfo.appId&&(e["X-Firebase-GMPID"]=this.databaseInfo.appId),t&&t.headers.forEach((i,s)=>e[s]=i),r&&r.headers.forEach((i,s)=>e[s]=i)}ao(e,t){const r=i0[e];return`${this.ro}/v1/${t}:${r}`}}{constructor(e){super(e),this.forceLongPolling=e.forceLongPolling,this.autoDetectLongPolling=e.autoDetectLongPolling,this.useFetchStreams=e.useFetchStreams}lo(e,t,r,i){const s=za();return new Promise((o,a)=>{const c=new ib;c.setWithCredentials(!0),c.listenOnce(tb.COMPLETE,()=>{try{switch(c.getLastErrorCode()){case Fa.NO_ERROR:const l=c.getResponseJson();v(Ae,`XHR for RPC '${e}' ${s} received:`,JSON.stringify(l)),o(l);break;case Fa.TIMEOUT:v(Ae,`RPC '${e}' ${s} timed out`),a(new y(m.DEADLINE_EXCEEDED,"Request time out"));break;case Fa.HTTP_ERROR:const h=c.getStatus();if(v(Ae,`RPC '${e}' ${s} failed with status:`,h,"response text:",c.getResponseText()),h>0){let d=c.getResponseJson();Array.isArray(d)&&(d=d[0]);const p=d==null?void 0:d.error;if(p&&p.status&&p.message){const g=function(_){const E=_.toLowerCase().replace(/_/g,"-");return Object.values(m).indexOf(E)>=0?E:m.UNKNOWN}(p.status);a(new y(g,p.message))}else a(new y(m.UNKNOWN,"Server responded with status "+c.getStatus()))}else a(new y(m.UNAVAILABLE,"Connection failed."));break;default:b()}}finally{v(Ae,`RPC '${e}' ${s} completed.`)}});const u=JSON.stringify(i);v(Ae,`RPC '${e}' ${s} sending request:`,i),c.send(t,"POST",u,r,15)})}wo(e,t,r){const i=za(),s=[this.ro,"/","google.firestore.v1.Firestore","/",e,"/channel"],o=ZE(),a=eb(),c={httpSessionIdParam:"gsessionid",initMessageHeaders:{},messageUrlParams:{database:`projects/${this.databaseId.projectId}/databases/${this.databaseId.database}`},sendRawJson:!0,supportsCrossDomainXhr:!0,internalChannelParams:{forwardChannelRequestTimeoutMs:6e5},forceLongPolling:this.forceLongPolling,detectBufferingProxy:this.autoDetectLongPolling};this.useFetchStreams&&(c.xmlHttpFactory=new rb({})),this.ho(c.initMessageHeaders,t,r),c.encodeInitMessageHeaders=!0;const u=s.join("");v(Ae,`Creating RPC '${e}' stream ${i}: ${u}`,c);const l=o.createWebChannel(u,c);let h=!1,d=!1;const p=new s0({Wr:_=>{d?v(Ae,`Not sending because RPC '${e}' stream ${i} is closed:`,_):(h||(v(Ae,`Opening RPC '${e}' stream ${i} transport.`),l.open(),h=!0),v(Ae,`RPC '${e}' stream ${i} sending:`,_),l.send(_))},Hr:()=>l.close()}),g=(_,E,x)=>{_.listen(E,q=>{try{x(q)}catch(C){setTimeout(()=>{throw C},0)}})};return g(l,bs.EventType.OPEN,()=>{d||v(Ae,`RPC '${e}' stream ${i} transport opened.`)}),g(l,bs.EventType.CLOSE,()=>{d||(d=!0,v(Ae,`RPC '${e}' stream ${i} transport closed`),p.so())}),g(l,bs.EventType.ERROR,_=>{d||(d=!0,At(Ae,`RPC '${e}' stream ${i} transport errored:`,_),p.so(new y(m.UNAVAILABLE,"The operation could not be completed")))}),g(l,bs.EventType.MESSAGE,_=>{var E;if(!d){const x=_.data[0];A(!!x);const q=x,C=q.error||((E=q[0])===null||E===void 0?void 0:E.error);if(C){v(Ae,`RPC '${e}' stream ${i} received error:`,C);const O=C.status;let $=function(ae){const ke=ce[ae];if(ke!==void 0)return qm(ke)}(O),V=C.message;$===void 0&&($=m.INTERNAL,V="Unknown error status: "+O+" with message "+C.message),d=!0,p.so(new y($,V)),l.close()}else v(Ae,`RPC '${e}' stream ${i} received:`,x),p.io(x)}}),g(a,nb.STAT_EVENT,_=>{_.stat===vh.PROXY?v(Ae,`RPC '${e}' stream ${i} detected buffering proxy`):_.stat===vh.NOPROXY&&v(Ae,`RPC '${e}' stream ${i} detected no buffering proxy`)}),setTimeout(()=>{p.no()},0),p}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
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
 */function Ig(){return typeof window<"u"?window:null}function js(){return typeof document<"u"?document:null}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function ps(n){return new mS(n,!0)}/**
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
 */class Yu{constructor(e,t,r=1e3,i=1.5,s=6e4){this.Ws=e,this.timerId=t,this._o=r,this.mo=i,this.yo=s,this.po=0,this.Io=null,this.To=Date.now(),this.reset()}reset(){this.po=0}Eo(){this.po=this.yo}Ao(e){this.cancel();const t=Math.floor(this.po+this.Ro()),r=Math.max(0,Date.now()-this.To),i=Math.max(0,t-r);i>0&&v("ExponentialBackoff",`Backing off for ${i} ms (base delay: ${this.po} ms, delay with jitter: ${t} ms, last attempt: ${r} ms ago)`),this.Io=this.Ws.enqueueAfterDelay(this.timerId,i,()=>(this.To=Date.now(),e())),this.po*=this.mo,this.po<this._o&&(this.po=this._o),this.po>this.yo&&(this.po=this.yo)}vo(){this.Io!==null&&(this.Io.skipDelay(),this.Io=null)}cancel(){this.Io!==null&&(this.Io.cancel(),this.Io=null)}Ro(){return(Math.random()-.5)*this.po}}/**
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
 */class Tg{constructor(e,t,r,i,s,o,a,c){this.Ws=e,this.bo=r,this.Po=i,this.connection=s,this.authCredentialsProvider=o,this.appCheckCredentialsProvider=a,this.listener=c,this.state=0,this.Vo=0,this.So=null,this.Do=null,this.stream=null,this.Co=new Yu(e,t)}xo(){return this.state===1||this.state===5||this.No()}No(){return this.state===2||this.state===3}start(){this.state!==4?this.auth():this.ko()}async stop(){this.xo()&&await this.close(0)}Oo(){this.state=0,this.Co.reset()}$o(){this.No()&&this.So===null&&(this.So=this.Ws.enqueueAfterDelay(this.bo,6e4,()=>this.Mo()))}Fo(e){this.Bo(),this.stream.send(e)}async Mo(){if(this.No())return this.close(0)}Bo(){this.So&&(this.So.cancel(),this.So=null)}Lo(){this.Do&&(this.Do.cancel(),this.Do=null)}async close(e,t){this.Bo(),this.Lo(),this.Co.cancel(),this.Vo++,e!==4?this.Co.reset():t&&t.code===m.RESOURCE_EXHAUSTED?(re(t.toString()),re("Using maximum backoff delay to prevent overloading the backend."),this.Co.Eo()):t&&t.code===m.UNAUTHENTICATED&&this.state!==3&&(this.authCredentialsProvider.invalidateToken(),this.appCheckCredentialsProvider.invalidateToken()),this.stream!==null&&(this.qo(),this.stream.close(),this.stream=null),this.state=e,await this.listener.Zr(t)}qo(){}auth(){this.state=1;const e=this.Uo(this.Vo),t=this.Vo;Promise.all([this.authCredentialsProvider.getToken(),this.appCheckCredentialsProvider.getToken()]).then(([r,i])=>{this.Vo===t&&this.Ko(r,i)},r=>{e(()=>{const i=new y(m.UNKNOWN,"Fetching auth token failed: "+r.message);return this.Go(i)})})}Ko(e,t){const r=this.Uo(this.Vo);this.stream=this.Qo(e,t),this.stream.Jr(()=>{r(()=>(this.state=2,this.Do=this.Ws.enqueueAfterDelay(this.Po,1e4,()=>(this.No()&&(this.state=3),Promise.resolve())),this.listener.Jr()))}),this.stream.Zr(i=>{r(()=>this.Go(i))}),this.stream.onMessage(i=>{r(()=>this.onMessage(i))})}ko(){this.state=5,this.Co.Ao(async()=>{this.state=0,this.start()})}Go(e){return v("PersistentStream",`close with error: ${e}`),this.stream=null,this.close(4,e)}Uo(e){return t=>{this.Ws.enqueueAndForget(()=>this.Vo===e?t():(v("PersistentStream","stream callback skipped by getCloseGuardedDispatcher."),Promise.resolve()))}}}class a0 extends Tg{constructor(e,t,r,i,s,o){super(e,"listen_stream_connection_backoff","listen_stream_idle","health_check_timeout",t,r,i,o),this.serializer=s}Qo(e,t){return this.connection.wo("Listen",e,t)}onMessage(e){this.Co.reset();const t=vS(this.serializer,e),r=function(i){if(!("targetChange"in i))return R.min();const s=i.targetChange;return s.targetIds&&s.targetIds.length?R.min():s.readTime?se(s.readTime):R.min()}(e);return this.listener.zo(t,r)}jo(e){const t={};t.database=Vi(this.serializer),t.addTarget=function(i,s){let o;const a=s.target;return o=uo(a)?{documents:Qm(i,a)}:{query:Ym(i,a)},o.targetId=s.targetId,s.resumeToken.approximateByteSize()>0?o.resumeToken=jm(i,s.resumeToken):s.snapshotVersion.compareTo(R.min())>0&&(o.readTime=Er(i,s.snapshotVersion.toTimestamp())),o}(this.serializer,e);const r=_S(this.serializer,e);r&&(t.labels=r),this.Fo(t)}Wo(e){const t={};t.database=Vi(this.serializer),t.removeTarget=e,this.Fo(t)}}class c0 extends Tg{constructor(e,t,r,i,s,o){super(e,"write_stream_connection_backoff","write_stream_idle","health_check_timeout",t,r,i,o),this.serializer=s,this.Ho=!1}get Jo(){return this.Ho}start(){this.Ho=!1,this.lastStreamToken=void 0,super.start()}qo(){this.Ho&&this.Yo([])}Qo(e,t){return this.connection.wo("Write",e,t)}onMessage(e){if(A(!!e.streamToken),this.lastStreamToken=e.streamToken,this.Ho){this.Co.reset();const t=wS(e.writeResults,e.commitTime),r=se(e.commitTime);return this.listener.Zo(r,t)}return A(!e.writeResults||e.writeResults.length===0),this.Ho=!0,this.listener.Xo()}tu(){const e={};e.database=Vi(this.serializer),this.Fo(e)}Yo(e){const t={streamToken:this.lastStreamToken,writes:e.map(r=>Bi(this.serializer,r))};this.Fo(t)}}/**
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
 */class u0 extends class{}{constructor(e,t,r,i){super(),this.authCredentials=e,this.appCheckCredentials=t,this.connection=r,this.serializer=i,this.eu=!1}nu(){if(this.eu)throw new y(m.FAILED_PRECONDITION,"The client has already been terminated.")}co(e,t,r){return this.nu(),Promise.all([this.authCredentials.getToken(),this.appCheckCredentials.getToken()]).then(([i,s])=>this.connection.co(e,t,r,i,s)).catch(i=>{throw i.name==="FirebaseError"?(i.code===m.UNAUTHENTICATED&&(this.authCredentials.invalidateToken(),this.appCheckCredentials.invalidateToken()),i):new y(m.UNKNOWN,i.toString())})}fo(e,t,r,i){return this.nu(),Promise.all([this.authCredentials.getToken(),this.appCheckCredentials.getToken()]).then(([s,o])=>this.connection.fo(e,t,r,s,o,i)).catch(s=>{throw s.name==="FirebaseError"?(s.code===m.UNAUTHENTICATED&&(this.authCredentials.invalidateToken(),this.appCheckCredentials.invalidateToken()),s):new y(m.UNKNOWN,s.toString())})}terminate(){this.eu=!0}}class l0{constructor(e,t){this.asyncQueue=e,this.onlineStateHandler=t,this.state="Unknown",this.su=0,this.iu=null,this.ru=!0}ou(){this.su===0&&(this.uu("Unknown"),this.iu=this.asyncQueue.enqueueAfterDelay("online_state_timeout",1e4,()=>(this.iu=null,this.cu("Backend didn't respond within 10 seconds."),this.uu("Offline"),Promise.resolve())))}au(e){this.state==="Online"?this.uu("Unknown"):(this.su++,this.su>=1&&(this.hu(),this.cu(`Connection failed 1 times. Most recent error: ${e.toString()}`),this.uu("Offline")))}set(e){this.hu(),this.su=0,e==="Online"&&(this.ru=!1),this.uu(e)}uu(e){e!==this.state&&(this.state=e,this.onlineStateHandler(e))}cu(e){const t=`Could not reach Cloud Firestore backend. ${e}
This typically indicates that your device does not have a healthy Internet connection at the moment. The client will operate in offline mode until it is able to successfully connect to the backend.`;this.ru?(re(t),this.ru=!1):v("OnlineStateTracker",t)}hu(){this.iu!==null&&(this.iu.cancel(),this.iu=null)}}/**
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
 */class h0{constructor(e,t,r,i,s){this.localStore=e,this.datastore=t,this.asyncQueue=r,this.remoteSyncer={},this.lu=[],this.fu=new Map,this.du=new Set,this.wu=[],this._u=s,this._u.qr(o=>{r.enqueueAndForget(async()=>{un(this)&&(v("RemoteStore","Restarting streams for network reachability change."),await async function(a){const c=T(a);c.du.add(4),await qr(c),c.mu.set("Unknown"),c.du.delete(4),await ms(c)}(this))})}),this.mu=new l0(r,i)}}async function ms(n){if(un(n))for(const e of n.wu)await e(!0)}async function qr(n){for(const e of n.wu)await e(!1)}function ra(n,e){const t=T(n);t.fu.has(e.targetId)||(t.fu.set(e.targetId,e),Zu(t)?Xu(t):zr(t).No()&&Ju(t,e))}function qi(n,e){const t=T(n),r=zr(t);t.fu.delete(e),r.No()&&Eg(t,e),t.fu.size===0&&(r.No()?r.$o():un(t)&&t.mu.set("Unknown"))}function Ju(n,e){n.gu.Ot(e.targetId),zr(n).jo(e)}function Eg(n,e){n.gu.Ot(e),zr(n).Wo(e)}function Xu(n){n.gu=new hS({getRemoteKeysForTarget:e=>n.remoteSyncer.getRemoteKeysForTarget(e),ne:e=>n.fu.get(e)||null}),zr(n).start(),n.mu.ou()}function Zu(n){return un(n)&&!zr(n).xo()&&n.fu.size>0}function un(n){return T(n).du.size===0}function bg(n){n.gu=void 0}async function d0(n){n.fu.forEach((e,t)=>{Ju(n,e)})}async function f0(n,e){bg(n),Zu(n)?(n.mu.au(e),Xu(n)):n.mu.set("Unknown")}async function p0(n,e,t){if(n.mu.set("Online"),e instanceof zm&&e.state===2&&e.cause)try{await async function(r,i){const s=i.cause;for(const o of i.targetIds)r.fu.has(o)&&(await r.remoteSyncer.rejectListen(o,s),r.fu.delete(o),r.gu.removeTarget(o))}(n,e)}catch(r){v("RemoteStore","Failed to remove targets %s: %s ",e.targetIds.join(","),r),await wo(n,r)}else if(e instanceof zs?n.gu.Kt(e):e instanceof $m?n.gu.Jt(e):n.gu.zt(e),!t.isEqual(R.min()))try{const r=await mg(n.localStore);t.compareTo(r)>=0&&await function(i,s){const o=i.gu.Xt(s);return o.targetChanges.forEach((a,c)=>{if(a.resumeToken.approximateByteSize()>0){const u=i.fu.get(c);u&&i.fu.set(c,u.withResumeToken(a.resumeToken,s))}}),o.targetMismatches.forEach(a=>{const c=i.fu.get(a);if(!c)return;i.fu.set(a,c.withResumeToken(he.EMPTY_BYTE_STRING,c.snapshotVersion)),Eg(i,a);const u=new jt(c.target,a,1,c.sequenceNumber);Ju(i,u)}),i.remoteSyncer.applyRemoteEvent(o)}(n,t)}catch(r){v("RemoteStore","Failed to raise snapshot:",r),await wo(n,r)}}async function wo(n,e,t){if(!an(e))throw e;n.du.add(1),await qr(n),n.mu.set("Offline"),t||(t=()=>mg(n.localStore)),n.asyncQueue.enqueueRetryable(async()=>{v("RemoteStore","Retrying IndexedDB access"),await t(),n.du.delete(1),await ms(n)})}function Sg(n,e){return e().catch(t=>wo(n,t,e))}async function $r(n){const e=T(n),t=Zt(e);let r=e.lu.length>0?e.lu[e.lu.length-1].batchId:-1;for(;m0(e);)try{const i=await e0(e.localStore,r);if(i===null){e.lu.length===0&&t.$o();break}r=i.batchId,g0(e,i)}catch(i){await wo(e,i)}kg(e)&&Ag(e)}function m0(n){return un(n)&&n.lu.length<10}function g0(n,e){n.lu.push(e);const t=Zt(n);t.No()&&t.Jo&&t.Yo(e.mutations)}function kg(n){return un(n)&&!Zt(n).xo()&&n.lu.length>0}function Ag(n){Zt(n).start()}async function y0(n){Zt(n).tu()}async function v0(n){const e=Zt(n);for(const t of n.lu)e.Yo(t.mutations)}async function w0(n,e,t){const r=n.lu.shift(),i=Fu.from(r,e,t);await Sg(n,()=>n.remoteSyncer.applySuccessfulWrite(i)),await $r(n)}async function _0(n,e){e&&Zt(n).Jo&&await async function(t,r){if(i=r.code,Bm(i)&&i!==m.ABORTED){const s=t.lu.shift();Zt(t).Oo(),await Sg(t,()=>t.remoteSyncer.rejectFailedWrite(s.batchId,r)),await $r(t)}var i}(n,e),kg(n)&&Ag(n)}async function ud(n,e){const t=T(n);t.asyncQueue.verifyOperationInProgress(),v("RemoteStore","RemoteStore received new credentials");const r=un(t);t.du.add(3),await qr(t),r&&t.mu.set("Unknown"),await t.remoteSyncer.handleCredentialChange(e),t.du.delete(3),await ms(t)}async function Cc(n,e){const t=T(n);e?(t.du.delete(2),await ms(t)):e||(t.du.add(2),await qr(t),t.mu.set("Unknown"))}function zr(n){return n.yu||(n.yu=function(e,t,r){const i=T(e);return i.nu(),new a0(t,i.connection,i.authCredentials,i.appCheckCredentials,i.serializer,r)}(n.datastore,n.asyncQueue,{Jr:d0.bind(null,n),Zr:f0.bind(null,n),zo:p0.bind(null,n)}),n.wu.push(async e=>{e?(n.yu.Oo(),Zu(n)?Xu(n):n.mu.set("Unknown")):(await n.yu.stop(),bg(n))})),n.yu}function Zt(n){return n.pu||(n.pu=function(e,t,r){const i=T(e);return i.nu(),new c0(t,i.connection,i.authCredentials,i.appCheckCredentials,i.serializer,r)}(n.datastore,n.asyncQueue,{Jr:y0.bind(null,n),Zr:_0.bind(null,n),Xo:v0.bind(null,n),Zo:w0.bind(null,n)}),n.wu.push(async e=>{e?(n.pu.Oo(),await $r(n)):(await n.pu.stop(),n.lu.length>0&&(v("RemoteStore",`Stopping write stream with ${n.lu.length} pending writes`),n.lu=[]))})),n.pu}/**
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
 */class el{constructor(e,t,r,i,s){this.asyncQueue=e,this.timerId=t,this.targetTimeMs=r,this.op=i,this.removalCallback=s,this.deferred=new me,this.then=this.deferred.promise.then.bind(this.deferred.promise),this.deferred.promise.catch(o=>{})}static createAndSchedule(e,t,r,i,s){const o=Date.now()+r,a=new el(e,t,o,i,s);return a.start(r),a}start(e){this.timerHandle=setTimeout(()=>this.handleDelayElapsed(),e)}skipDelay(){return this.handleDelayElapsed()}cancel(e){this.timerHandle!==null&&(this.clearTimeout(),this.deferred.reject(new y(m.CANCELLED,"Operation cancelled"+(e?": "+e:""))))}handleDelayElapsed(){this.asyncQueue.enqueueAndForget(()=>this.timerHandle!==null?(this.clearTimeout(),this.op().then(e=>this.deferred.resolve(e))):Promise.resolve())}clearTimeout(){this.timerHandle!==null&&(this.removalCallback(this),clearTimeout(this.timerHandle),this.timerHandle=null)}}function jr(n,e){if(re("AsyncQueue",`${e}: ${n}`),an(n))return new y(m.UNAVAILABLE,`${e}: ${n}`);throw n}/**
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
 */class fr{constructor(e){this.comparator=e?(t,r)=>e(t,r)||I.comparator(t.key,r.key):(t,r)=>I.comparator(t.key,r.key),this.keyedMap=ai(),this.sortedSet=new te(this.comparator)}static emptySet(e){return new fr(e.comparator)}has(e){return this.keyedMap.get(e)!=null}get(e){return this.keyedMap.get(e)}first(){return this.sortedSet.minKey()}last(){return this.sortedSet.maxKey()}isEmpty(){return this.sortedSet.isEmpty()}indexOf(e){const t=this.keyedMap.get(e);return t?this.sortedSet.indexOf(t):-1}get size(){return this.sortedSet.size}forEach(e){this.sortedSet.inorderTraversal((t,r)=>(e(t),!1))}add(e){const t=this.delete(e.key);return t.copy(t.keyedMap.insert(e.key,e),t.sortedSet.insert(e,null))}delete(e){const t=this.get(e);return t?this.copy(this.keyedMap.remove(e),this.sortedSet.remove(t)):this}isEqual(e){if(!(e instanceof fr)||this.size!==e.size)return!1;const t=this.sortedSet.getIterator(),r=e.sortedSet.getIterator();for(;t.hasNext();){const i=t.getNext().key,s=r.getNext().key;if(!i.isEqual(s))return!1}return!0}toString(){const e=[];return this.forEach(t=>{e.push(t.toString())}),e.length===0?"DocumentSet ()":`DocumentSet (
  `+e.join(`  
`)+`
)`}copy(e,t){const r=new fr;return r.comparator=this.comparator,r.keyedMap=e,r.sortedSet=t,r}}/**
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
 */class ld{constructor(){this.Iu=new te(I.comparator)}track(e){const t=e.doc.key,r=this.Iu.get(t);r?e.type!==0&&r.type===3?this.Iu=this.Iu.insert(t,e):e.type===3&&r.type!==1?this.Iu=this.Iu.insert(t,{type:r.type,doc:e.doc}):e.type===2&&r.type===2?this.Iu=this.Iu.insert(t,{type:2,doc:e.doc}):e.type===2&&r.type===0?this.Iu=this.Iu.insert(t,{type:0,doc:e.doc}):e.type===1&&r.type===0?this.Iu=this.Iu.remove(t):e.type===1&&r.type===2?this.Iu=this.Iu.insert(t,{type:1,doc:r.doc}):e.type===0&&r.type===1?this.Iu=this.Iu.insert(t,{type:2,doc:e.doc}):b():this.Iu=this.Iu.insert(t,e)}Tu(){const e=[];return this.Iu.inorderTraversal((t,r)=>{e.push(r)}),e}}class kr{constructor(e,t,r,i,s,o,a,c,u){this.query=e,this.docs=t,this.oldDocs=r,this.docChanges=i,this.mutatedKeys=s,this.fromCache=o,this.syncStateChanged=a,this.excludesMetadataChanges=c,this.hasCachedResults=u}static fromInitialDocuments(e,t,r,i,s){const o=[];return t.forEach(a=>{o.push({type:0,doc:a})}),new kr(e,t,fr.emptySet(t),o,r,i,!0,!1,s)}get hasPendingWrites(){return!this.mutatedKeys.isEmpty()}isEqual(e){if(!(this.fromCache===e.fromCache&&this.hasCachedResults===e.hasCachedResults&&this.syncStateChanged===e.syncStateChanged&&this.mutatedKeys.isEqual(e.mutatedKeys)&&us(this.query,e.query)&&this.docs.isEqual(e.docs)&&this.oldDocs.isEqual(e.oldDocs)))return!1;const t=this.docChanges,r=e.docChanges;if(t.length!==r.length)return!1;for(let i=0;i<t.length;i++)if(t[i].type!==r[i].type||!t[i].doc.isEqual(r[i].doc))return!1;return!0}}/**
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
 */class I0{constructor(){this.Eu=void 0,this.listeners=[]}}class T0{constructor(){this.queries=new cn(e=>Sm(e),us),this.onlineState="Unknown",this.Au=new Set}}async function tl(n,e){const t=T(n),r=e.query;let i=!1,s=t.queries.get(r);if(s||(i=!0,s=new I0),i)try{s.Eu=await t.onListen(r)}catch(o){const a=jr(o,`Initialization of query '${Tc(e.query)}' failed`);return void e.onError(a)}t.queries.set(r,s),s.listeners.push(e),e.Ru(t.onlineState),s.Eu&&e.vu(s.Eu)&&rl(t)}async function nl(n,e){const t=T(n),r=e.query;let i=!1;const s=t.queries.get(r);if(s){const o=s.listeners.indexOf(e);o>=0&&(s.listeners.splice(o,1),i=s.listeners.length===0)}if(i)return t.queries.delete(r),t.onUnlisten(r)}function E0(n,e){const t=T(n);let r=!1;for(const i of e){const s=i.query,o=t.queries.get(s);if(o){for(const a of o.listeners)a.vu(i)&&(r=!0);o.Eu=i}}r&&rl(t)}function b0(n,e,t){const r=T(n),i=r.queries.get(e);if(i)for(const s of i.listeners)s.onError(t);r.queries.delete(e)}function rl(n){n.Au.forEach(e=>{e.next()})}class il{constructor(e,t,r){this.query=e,this.bu=t,this.Pu=!1,this.Vu=null,this.onlineState="Unknown",this.options=r||{}}vu(e){if(!this.options.includeMetadataChanges){const r=[];for(const i of e.docChanges)i.type!==3&&r.push(i);e=new kr(e.query,e.docs,e.oldDocs,r,e.mutatedKeys,e.fromCache,e.syncStateChanged,!0,e.hasCachedResults)}let t=!1;return this.Pu?this.Su(e)&&(this.bu.next(e),t=!0):this.Du(e,this.onlineState)&&(this.Cu(e),t=!0),this.Vu=e,t}onError(e){this.bu.error(e)}Ru(e){this.onlineState=e;let t=!1;return this.Vu&&!this.Pu&&this.Du(this.Vu,e)&&(this.Cu(this.Vu),t=!0),t}Du(e,t){if(!e.fromCache)return!0;const r=t!=="Offline";return(!this.options.xu||!r)&&(!e.docs.isEmpty()||e.hasCachedResults||t==="Offline")}Su(e){if(e.docChanges.length>0)return!0;const t=this.Vu&&this.Vu.hasPendingWrites!==e.hasPendingWrites;return!(!e.syncStateChanged&&!t)&&this.options.includeMetadataChanges===!0}Cu(e){e=kr.fromInitialDocuments(e.query,e.docs,e.mutatedKeys,e.fromCache,e.hasCachedResults),this.Pu=!0,this.bu.next(e)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class S0{constructor(e,t){this.Nu=e,this.byteLength=t}ku(){return"metadata"in this.Nu}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class hd{constructor(e){this.serializer=e}Hi(e){return ht(this.serializer,e)}Ji(e){return e.metadata.exists?Hm(this.serializer,e.document,!1):G.newNoDocument(this.Hi(e.metadata.name),this.Yi(e.metadata.readTime))}Yi(e){return se(e)}}class k0{constructor(e,t,r){this.Ou=e,this.localStore=t,this.serializer=r,this.queries=[],this.documents=[],this.collectionGroups=new Set,this.progress=Rg(e)}$u(e){this.progress.bytesLoaded+=e.byteLength;let t=this.progress.documentsLoaded;if(e.Nu.namedQuery)this.queries.push(e.Nu.namedQuery);else if(e.Nu.documentMetadata){this.documents.push({metadata:e.Nu.documentMetadata}),e.Nu.documentMetadata.exists||++t;const r=F.fromString(e.Nu.documentMetadata.name);this.collectionGroups.add(r.get(r.length-2))}else e.Nu.document&&(this.documents[this.documents.length-1].document=e.Nu.document,++t);return t!==this.progress.documentsLoaded?(this.progress.documentsLoaded=t,Object.assign({},this.progress)):null}Mu(e){const t=new Map,r=new hd(this.serializer);for(const i of e)if(i.metadata.queries){const s=r.Hi(i.metadata.name);for(const o of i.metadata.queries){const a=(t.get(o)||P()).add(s);t.set(o,a)}}return t}async complete(){const e=await t0(this.localStore,new hd(this.serializer),this.documents,this.Ou.id),t=this.Mu(this.documents);for(const r of this.queries)await n0(this.localStore,r,t.get(r.name));return this.progress.taskState="Success",{progress:this.progress,Fu:this.collectionGroups,Bu:e}}}function Rg(n){return{taskState:"Running",documentsLoaded:0,bytesLoaded:0,totalDocuments:n.totalDocuments,totalBytes:n.totalBytes}}/**
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
 */class Cg{constructor(e){this.key=e}}class Ng{constructor(e){this.key=e}}class Dg{constructor(e,t){this.query=e,this.Lu=t,this.qu=null,this.hasCachedResults=!1,this.current=!1,this.Uu=P(),this.mutatedKeys=P(),this.Ku=Am(e),this.Gu=new fr(this.Ku)}get Qu(){return this.Lu}zu(e,t){const r=t?t.ju:new ld,i=t?t.Gu:this.Gu;let s=t?t.mutatedKeys:this.mutatedKeys,o=i,a=!1;const c=this.query.limitType==="F"&&i.size===this.query.limit?i.last():null,u=this.query.limitType==="L"&&i.size===this.query.limit?i.first():null;if(e.inorderTraversal((l,h)=>{const d=i.get(l),p=ls(this.query,h)?h:null,g=!!d&&this.mutatedKeys.has(d.key),_=!!p&&(p.hasLocalMutations||this.mutatedKeys.has(p.key)&&p.hasCommittedMutations);let E=!1;d&&p?d.data.isEqual(p.data)?g!==_&&(r.track({type:3,doc:p}),E=!0):this.Wu(d,p)||(r.track({type:2,doc:p}),E=!0,(c&&this.Ku(p,c)>0||u&&this.Ku(p,u)<0)&&(a=!0)):!d&&p?(r.track({type:0,doc:p}),E=!0):d&&!p&&(r.track({type:1,doc:d}),E=!0,(c||u)&&(a=!0)),E&&(p?(o=o.add(p),s=_?s.add(l):s.delete(l)):(o=o.delete(l),s=s.delete(l)))}),this.query.limit!==null)for(;o.size>this.query.limit;){const l=this.query.limitType==="F"?o.last():o.first();o=o.delete(l.key),s=s.delete(l.key),r.track({type:1,doc:l})}return{Gu:o,ju:r,Mi:a,mutatedKeys:s}}Wu(e,t){return e.hasLocalMutations&&t.hasCommittedMutations&&!t.hasLocalMutations}applyChanges(e,t,r){const i=this.Gu;this.Gu=e.Gu,this.mutatedKeys=e.mutatedKeys;const s=e.ju.Tu();s.sort((u,l)=>function(h,d){const p=g=>{switch(g){case 0:return 1;case 2:case 3:return 2;case 1:return 0;default:return b()}};return p(h)-p(d)}(u.type,l.type)||this.Ku(u.doc,l.doc)),this.Hu(r);const o=t?this.Ju():[],a=this.Uu.size===0&&this.current?1:0,c=a!==this.qu;return this.qu=a,s.length!==0||c?{snapshot:new kr(this.query,e.Gu,i,s,e.mutatedKeys,a===0,c,!1,!!r&&r.resumeToken.approximateByteSize()>0),Yu:o}:{Yu:o}}Ru(e){return this.current&&e==="Offline"?(this.current=!1,this.applyChanges({Gu:this.Gu,ju:new ld,mutatedKeys:this.mutatedKeys,Mi:!1},!1)):{Yu:[]}}Zu(e){return!this.Lu.has(e)&&!!this.Gu.has(e)&&!this.Gu.get(e).hasLocalMutations}Hu(e){e&&(e.addedDocuments.forEach(t=>this.Lu=this.Lu.add(t)),e.modifiedDocuments.forEach(t=>{}),e.removedDocuments.forEach(t=>this.Lu=this.Lu.delete(t)),this.current=e.current)}Ju(){if(!this.current)return[];const e=this.Uu;this.Uu=P(),this.Gu.forEach(r=>{this.Zu(r.key)&&(this.Uu=this.Uu.add(r.key))});const t=[];return e.forEach(r=>{this.Uu.has(r)||t.push(new Ng(r))}),this.Uu.forEach(r=>{e.has(r)||t.push(new Cg(r))}),t}Xu(e){this.Lu=e.Wi,this.Uu=P();const t=this.zu(e.documents);return this.applyChanges(t,!0)}tc(){return kr.fromInitialDocuments(this.query,this.Gu,this.mutatedKeys,this.qu===0,this.hasCachedResults)}}class A0{constructor(e,t,r){this.query=e,this.targetId=t,this.view=r}}class R0{constructor(e){this.key=e,this.ec=!1}}class C0{constructor(e,t,r,i,s,o){this.localStore=e,this.remoteStore=t,this.eventManager=r,this.sharedClientState=i,this.currentUser=s,this.maxConcurrentLimboResolutions=o,this.nc={},this.sc=new cn(a=>Sm(a),us),this.ic=new Map,this.rc=new Set,this.oc=new te(I.comparator),this.uc=new Map,this.cc=new Gu,this.ac={},this.hc=new Map,this.lc=$n.bn(),this.onlineState="Unknown",this.fc=void 0}get isPrimaryClient(){return this.fc===!0}}async function N0(n,e){const t=ul(n);let r,i;const s=t.sc.get(e);if(s)r=s.targetId,t.sharedClientState.addLocalQueryTarget(r),i=s.view.tc();else{const o=await br(t.localStore,ze(e));t.isPrimaryClient&&ra(t.remoteStore,o);const a=t.sharedClientState.addLocalQueryTarget(o.targetId);r=o.targetId,i=await sl(t,e,r,a==="current",o.resumeToken)}return i}async function sl(n,e,t,r,i){n.dc=(h,d,p)=>async function(g,_,E,x){let q=_.view.zu(E);q.Mi&&(q=await go(g.localStore,_.query,!1).then(({documents:$})=>_.view.zu($,q)));const C=x&&x.targetChanges.get(_.targetId),O=_.view.applyChanges(q,g.isPrimaryClient,C);return Nc(g,_.targetId,O.Yu),O.snapshot}(n,h,d,p);const s=await go(n.localStore,e,!0),o=new Dg(e,s.Wi),a=o.zu(s.documents),c=fs.createSynthesizedTargetChangeForCurrentChange(t,r&&n.onlineState!=="Offline",i),u=o.applyChanges(a,n.isPrimaryClient,c);Nc(n,t,u.Yu);const l=new A0(e,t,o);return n.sc.set(e,l),n.ic.has(t)?n.ic.get(t).push(e):n.ic.set(t,[e]),u.snapshot}async function D0(n,e){const t=T(n),r=t.sc.get(e),i=t.ic.get(r.targetId);if(i.length>1)return t.ic.set(r.targetId,i.filter(s=>!us(s,e))),void t.sc.delete(e);t.isPrimaryClient?(t.sharedClientState.removeLocalQueryTarget(r.targetId),t.sharedClientState.isActiveQueryTarget(r.targetId)||await Sr(t.localStore,r.targetId,!1).then(()=>{t.sharedClientState.clearQueryState(r.targetId),qi(t.remoteStore,r.targetId),Ar(t,r.targetId)}).catch(on)):(Ar(t,r.targetId),await Sr(t.localStore,r.targetId,!0))}async function P0(n,e,t){const r=ll(n);try{const i=await function(s,o){const a=T(s),c=Y.now(),u=o.reduce((d,p)=>d.add(p.key),P());let l,h;return a.persistence.runTransaction("Locally write mutations","readwrite",d=>{let p=$e(),g=P();return a.Ki.getEntries(d,u).next(_=>{p=_,p.forEach((E,x)=>{x.isValidDocument()||(g=g.add(E))})}).next(()=>a.localDocuments.getOverlayedDocuments(d,p)).next(_=>{l=_;const E=[];for(const x of o){const q=uS(x,l.get(x.key).overlayedDocument);q!=null&&E.push(new xt(x.key,q,gm(q.value.mapValue),Q.exists(!0)))}return a.mutationQueue.addMutationBatch(d,c,E,o)}).next(_=>{h=_;const E=_.applyToLocalDocumentSet(l,g);return a.documentOverlayCache.saveOverlays(d,_.batchId,E)})}).then(()=>({batchId:h.batchId,changes:Cm(l)}))}(r.localStore,e);r.sharedClientState.addPendingMutation(i.batchId),function(s,o,a){let c=s.ac[s.currentUser.toKey()];c||(c=new te(D)),c=c.insert(o,a),s.ac[s.currentUser.toKey()]=c}(r,i.batchId,t),await Ot(r,i.changes),await $r(r.remoteStore)}catch(i){const s=jr(i,"Failed to persist write");t.reject(s)}}async function Pg(n,e){const t=T(n);try{const r=await ZS(t.localStore,e);e.targetChanges.forEach((i,s)=>{const o=t.uc.get(s);o&&(A(i.addedDocuments.size+i.modifiedDocuments.size+i.removedDocuments.size<=1),i.addedDocuments.size>0?o.ec=!0:i.modifiedDocuments.size>0?A(o.ec):i.removedDocuments.size>0&&(A(o.ec),o.ec=!1))}),await Ot(t,r,e)}catch(r){await on(r)}}function dd(n,e,t){const r=T(n);if(r.isPrimaryClient&&t===0||!r.isPrimaryClient&&t===1){const i=[];r.sc.forEach((s,o)=>{const a=o.view.Ru(e);a.snapshot&&i.push(a.snapshot)}),function(s,o){const a=T(s);a.onlineState=o;let c=!1;a.queries.forEach((u,l)=>{for(const h of l.listeners)h.Ru(o)&&(c=!0)}),c&&rl(a)}(r.eventManager,e),i.length&&r.nc.zo(i),r.onlineState=e,r.isPrimaryClient&&r.sharedClientState.setOnlineState(e)}}async function x0(n,e,t){const r=T(n);r.sharedClientState.updateQueryState(e,"rejected",t);const i=r.uc.get(e),s=i&&i.key;if(s){let o=new te(I.comparator);o=o.insert(s,G.newNoDocument(s,R.min()));const a=P().add(s),c=new ds(R.min(),new Map,new j(D),o,a);await Pg(r,c),r.oc=r.oc.remove(s),r.uc.delete(e),cl(r)}else await Sr(r.localStore,e,!1).then(()=>Ar(r,e,t)).catch(on)}async function O0(n,e){const t=T(n),r=e.batch.batchId;try{const i=await XS(t.localStore,e);al(t,r,null),ol(t,r),t.sharedClientState.updateMutationState(r,"acknowledged"),await Ot(t,i)}catch(i){await on(i)}}async function L0(n,e,t){const r=T(n);try{const i=await function(s,o){const a=T(s);return a.persistence.runTransaction("Reject batch","readwrite-primary",c=>{let u;return a.mutationQueue.lookupMutationBatch(c,o).next(l=>(A(l!==null),u=l.keys(),a.mutationQueue.removeMutationBatch(c,l))).next(()=>a.mutationQueue.performConsistencyCheck(c)).next(()=>a.documentOverlayCache.removeOverlaysForBatchId(c,u,o)).next(()=>a.localDocuments.recalculateAndSaveOverlaysForDocumentKeys(c,u)).next(()=>a.localDocuments.getDocuments(c,u))})}(r.localStore,e);al(r,e,t),ol(r,e),r.sharedClientState.updateMutationState(e,"rejected",t),await Ot(r,i)}catch(i){await on(i)}}async function M0(n,e){const t=T(n);un(t.remoteStore)||v("SyncEngine","The network is disabled. The task returned by 'awaitPendingWrites()' will not complete until the network is enabled.");try{const r=await function(s){const o=T(s);return o.persistence.runTransaction("Get highest unacknowledged batch id","readonly",a=>o.mutationQueue.getHighestUnacknowledgedBatchId(a))}(t.localStore);if(r===-1)return void e.resolve();const i=t.hc.get(r)||[];i.push(e),t.hc.set(r,i)}catch(r){const i=jr(r,"Initialization of waitForPendingWrites() operation failed");e.reject(i)}}function ol(n,e){(n.hc.get(e)||[]).forEach(t=>{t.resolve()}),n.hc.delete(e)}function al(n,e,t){const r=T(n);let i=r.ac[r.currentUser.toKey()];if(i){const s=i.get(e);s&&(t?s.reject(t):s.resolve(),i=i.remove(e)),r.ac[r.currentUser.toKey()]=i}}function Ar(n,e,t=null){n.sharedClientState.removeLocalQueryTarget(e);for(const r of n.ic.get(e))n.sc.delete(r),t&&n.nc.wc(r,t);n.ic.delete(e),n.isPrimaryClient&&n.cc.hs(e).forEach(r=>{n.cc.containsKey(r)||xg(n,r)})}function xg(n,e){n.rc.delete(e.path.canonicalString());const t=n.oc.get(e);t!==null&&(qi(n.remoteStore,t),n.oc=n.oc.remove(e),n.uc.delete(t),cl(n))}function Nc(n,e,t){for(const r of t)r instanceof Cg?(n.cc.addReference(r.key,e),U0(n,r)):r instanceof Ng?(v("SyncEngine","Document no longer in limbo: "+r.key),n.cc.removeReference(r.key,e),n.cc.containsKey(r.key)||xg(n,r.key)):b()}function U0(n,e){const t=e.key,r=t.path.canonicalString();n.oc.get(t)||n.rc.has(r)||(v("SyncEngine","New document in limbo: "+t),n.rc.add(r),cl(n))}function cl(n){for(;n.rc.size>0&&n.oc.size<n.maxConcurrentLimboResolutions;){const e=n.rc.values().next().value;n.rc.delete(e);const t=new I(F.fromString(e)),r=n.lc.next();n.uc.set(r,new R0(t)),n.oc=n.oc.insert(t,r),ra(n.remoteStore,new jt(ze(Fr(t.path)),r,2,Be.ct))}}async function Ot(n,e,t){const r=T(n),i=[],s=[],o=[];r.sc.isEmpty()||(r.sc.forEach((a,c)=>{o.push(r.dc(c,e,t).then(u=>{if((u||t)&&r.isPrimaryClient&&r.sharedClientState.updateQueryState(c.targetId,u!=null&&u.fromCache?"not-current":"current"),u){i.push(u);const l=Hu.Di(c.targetId,u);s.push(l)}}))}),await Promise.all(o),r.nc.zo(i),await async function(a,c){const u=T(a);try{await u.persistence.runTransaction("notifyLocalViewChanges","readwrite",l=>f.forEach(c,h=>f.forEach(h.Vi,d=>u.persistence.referenceDelegate.addReference(l,h.targetId,d)).next(()=>f.forEach(h.Si,d=>u.persistence.referenceDelegate.removeReference(l,h.targetId,d)))))}catch(l){if(!an(l))throw l;v("LocalStore","Failed to update sequence numbers: "+l)}for(const l of c){const h=l.targetId;if(!l.fromCache){const d=u.Li.get(h),p=d.snapshotVersion,g=d.withLastLimboFreeSnapshotVersion(p);u.Li=u.Li.insert(h,g)}}}(r.localStore,s))}async function F0(n,e){const t=T(n);if(!t.currentUser.isEqual(e)){v("SyncEngine","User change. New user:",e.toKey());const r=await pg(t.localStore,e);t.currentUser=e,function(i,s){i.hc.forEach(o=>{o.forEach(a=>{a.reject(new y(m.CANCELLED,s))})}),i.hc.clear()}(t,"'waitForPendingWrites' promise is rejected due to a user change."),t.sharedClientState.handleUserChange(e,r.removedBatchIds,r.addedBatchIds),await Ot(t,r.Qi)}}function V0(n,e){const t=T(n),r=t.uc.get(e);if(r&&r.ec)return P().add(r.key);{let i=P();const s=t.ic.get(e);if(!s)return i;for(const o of s){const a=t.sc.get(o);i=i.unionWith(a.view.Qu)}return i}}async function B0(n,e){const t=T(n),r=await go(t.localStore,e.query,!0),i=e.view.Xu(r);return t.isPrimaryClient&&Nc(t,e.targetId,i.Yu),i}async function q0(n,e){const t=T(n);return vg(t.localStore,e).then(r=>Ot(t,r))}async function $0(n,e,t,r){const i=T(n),s=await function(o,a){const c=T(o),u=T(c.mutationQueue);return c.persistence.runTransaction("Lookup mutation documents","readonly",l=>u.In(l,a).next(h=>h?c.localDocuments.getDocuments(l,h):f.resolve(null)))}(i.localStore,e);s!==null?(t==="pending"?await $r(i.remoteStore):t==="acknowledged"||t==="rejected"?(al(i,e,r||null),ol(i,e),function(o,a){T(T(o).mutationQueue).En(a)}(i.localStore,e)):b(),await Ot(i,s)):v("SyncEngine","Cannot apply mutation batch with id: "+e)}async function z0(n,e){const t=T(n);if(ul(t),ll(t),e===!0&&t.fc!==!0){const r=t.sharedClientState.getAllActiveQueryTargets(),i=await fd(t,r.toArray());t.fc=!0,await Cc(t.remoteStore,!0);for(const s of i)ra(t.remoteStore,s)}else if(e===!1&&t.fc!==!1){const r=[];let i=Promise.resolve();t.ic.forEach((s,o)=>{t.sharedClientState.isLocalQueryTarget(o)?r.push(o):i=i.then(()=>(Ar(t,o),Sr(t.localStore,o,!0))),qi(t.remoteStore,o)}),await i,await fd(t,r),function(s){const o=T(s);o.uc.forEach((a,c)=>{qi(o.remoteStore,c)}),o.cc.ls(),o.uc=new Map,o.oc=new te(I.comparator)}(t),t.fc=!1,await Cc(t.remoteStore,!1)}}async function fd(n,e,t){const r=T(n),i=[],s=[];for(const o of e){let a;const c=r.ic.get(o);if(c&&c.length!==0){a=await br(r.localStore,ze(c[0]));for(const u of c){const l=r.sc.get(u),h=await B0(r,l);h.snapshot&&s.push(h.snapshot)}}else{const u=await yg(r.localStore,o);a=await br(r.localStore,u),await sl(r,Og(u),o,!1,a.resumeToken)}i.push(a)}return r.nc.zo(s),i}function Og(n){return bm(n.path,n.collectionGroup,n.orderBy,n.filters,n.limit,"F",n.startAt,n.endAt)}function j0(n){const e=T(n);return T(T(e.localStore).persistence).bi()}async function G0(n,e,t,r){const i=T(n);if(i.fc)return void v("SyncEngine","Ignoring unexpected query state notification.");const s=i.ic.get(e);if(s&&s.length>0)switch(t){case"current":case"not-current":{const o=await vg(i.localStore,km(s[0])),a=ds.createSynthesizedRemoteEventForCurrentChange(e,t==="current",he.EMPTY_BYTE_STRING);await Ot(i,o,a);break}case"rejected":await Sr(i.localStore,e,!0),Ar(i,e,r);break;default:b()}}async function K0(n,e,t){const r=ul(n);if(r.fc){for(const i of e){if(r.ic.has(i)){v("SyncEngine","Adding an already active target "+i);continue}const s=await yg(r.localStore,i),o=await br(r.localStore,s);await sl(r,Og(s),o.targetId,!1,o.resumeToken),ra(r.remoteStore,o)}for(const i of t)r.ic.has(i)&&await Sr(r.localStore,i,!1).then(()=>{qi(r.remoteStore,i),Ar(r,i)}).catch(on)}}function ul(n){const e=T(n);return e.remoteStore.remoteSyncer.applyRemoteEvent=Pg.bind(null,e),e.remoteStore.remoteSyncer.getRemoteKeysForTarget=V0.bind(null,e),e.remoteStore.remoteSyncer.rejectListen=x0.bind(null,e),e.nc.zo=E0.bind(null,e.eventManager),e.nc.wc=b0.bind(null,e.eventManager),e}function ll(n){const e=T(n);return e.remoteStore.remoteSyncer.applySuccessfulWrite=O0.bind(null,e),e.remoteStore.remoteSyncer.rejectFailedWrite=L0.bind(null,e),e}function W0(n,e,t){const r=T(n);(async function(i,s,o){try{const a=await s.getMetadata();if(await function(h,d){const p=T(h),g=se(d.createTime);return p.persistence.runTransaction("hasNewerBundle","readonly",_=>p.xs.getBundleMetadata(_,d.id)).then(_=>!!_&&_.createTime.compareTo(g)>=0)}(i.localStore,a))return await s.close(),o._completeWith(function(h){return{taskState:"Success",documentsLoaded:h.totalDocuments,bytesLoaded:h.totalBytes,totalDocuments:h.totalDocuments,totalBytes:h.totalBytes}}(a)),Promise.resolve(new Set);o._updateProgress(Rg(a));const c=new k0(a,i.localStore,s.serializer);let u=await s._c();for(;u;){const h=await c.$u(u);h&&o._updateProgress(h),u=await s._c()}const l=await c.complete();return await Ot(i,l.Bu,void 0),await function(h,d){const p=T(h);return p.persistence.runTransaction("Save bundle","readwrite",g=>p.xs.saveBundleMetadata(g,d))}(i.localStore,a),o._completeWith(l.progress),Promise.resolve(l.Fu)}catch(a){return At("SyncEngine",`Loading bundle failed with ${a}`),o._failWith(a),Promise.resolve(new Set)}})(r,e,t).then(i=>{r.sharedClientState.notifyBundleLoaded(i)})}class Dc{constructor(){this.synchronizeTabs=!1}async initialize(e){this.serializer=ps(e.databaseInfo.databaseId),this.sharedClientState=this.createSharedClientState(e),this.persistence=this.createPersistence(e),await this.persistence.start(),this.localStore=this.createLocalStore(e),this.gcScheduler=this.createGarbageCollectionScheduler(e,this.localStore),this.indexBackfillerScheduler=this.createIndexBackfillerScheduler(e,this.localStore)}createGarbageCollectionScheduler(e,t){return null}createIndexBackfillerScheduler(e,t){return null}createLocalStore(e){return fg(this.persistence,new dg,e.initialUser,this.serializer)}createPersistence(e){return new hg(na.Fs,this.serializer)}createSharedClientState(e){return new _g}async terminate(){this.gcScheduler&&this.gcScheduler.stop(),await this.sharedClientState.shutdown(),await this.persistence.shutdown()}}class Lg extends Dc{constructor(e,t,r){super(),this.mc=e,this.cacheSizeBytes=t,this.forceOwnership=r,this.synchronizeTabs=!1}async initialize(e){await super.initialize(e),await this.mc.initialize(this,e),await ll(this.mc.syncEngine),await $r(this.mc.remoteStore),await this.persistence.hi(()=>(this.gcScheduler&&!this.gcScheduler.started&&this.gcScheduler.start(),this.indexBackfillerScheduler&&!this.indexBackfillerScheduler.started&&this.indexBackfillerScheduler.start(),Promise.resolve()))}createLocalStore(e){return fg(this.persistence,new dg,e.initialUser,this.serializer)}createGarbageCollectionScheduler(e,t){const r=this.persistence.referenceDelegate.garbageCollector;return new US(r,e.asyncQueue,t)}createIndexBackfillerScheduler(e,t){const r=new _b(t,this.persistence);return new wb(e.asyncQueue,r)}createPersistence(e){const t=Wu(e.databaseInfo.databaseId,e.databaseInfo.persistenceKey),r=this.cacheSizeBytes!==void 0?Ve.withCacheSize(this.cacheSizeBytes):Ve.DEFAULT;return new Ku(this.synchronizeTabs,t,e.clientId,r,e.asyncQueue,Ig(),js(),this.serializer,this.sharedClientState,!!this.forceOwnership)}createSharedClientState(e){return new _g}}class H0 extends Lg{constructor(e,t){super(e,t,!1),this.mc=e,this.cacheSizeBytes=t,this.synchronizeTabs=!0}async initialize(e){await super.initialize(e);const t=this.mc.syncEngine;this.sharedClientState instanceof $a&&(this.sharedClientState.syncEngine={$r:$0.bind(null,t),Mr:G0.bind(null,t),Fr:K0.bind(null,t),bi:j0.bind(null,t),Or:q0.bind(null,t)},await this.sharedClientState.start()),await this.persistence.hi(async r=>{await z0(this.mc.syncEngine,r),this.gcScheduler&&(r&&!this.gcScheduler.started?this.gcScheduler.start():r||this.gcScheduler.stop()),this.indexBackfillerScheduler&&(r&&!this.indexBackfillerScheduler.started?this.indexBackfillerScheduler.start():r||this.indexBackfillerScheduler.stop())})}createSharedClientState(e){const t=Ig();if(!$a.D(t))throw new y(m.UNIMPLEMENTED,"IndexedDB persistence is only available on platforms that support LocalStorage.");const r=Wu(e.databaseInfo.databaseId,e.databaseInfo.persistenceKey);return new $a(t,e.asyncQueue,r,e.clientId,e.initialUser)}}class hl{async initialize(e,t){this.localStore||(this.localStore=e.localStore,this.sharedClientState=e.sharedClientState,this.datastore=this.createDatastore(t),this.remoteStore=this.createRemoteStore(t),this.eventManager=this.createEventManager(t),this.syncEngine=this.createSyncEngine(t,!e.synchronizeTabs),this.sharedClientState.onlineStateHandler=r=>dd(this.syncEngine,r,1),this.remoteStore.remoteSyncer.handleCredentialChange=F0.bind(null,this.syncEngine),await Cc(this.remoteStore,this.syncEngine.isPrimaryClient))}createEventManager(e){return new T0}createDatastore(e){const t=ps(e.databaseInfo.databaseId),r=(i=e.databaseInfo,new o0(i));var i;return function(s,o,a,c){return new u0(s,o,a,c)}(e.authCredentials,e.appCheckCredentials,r,t)}createRemoteStore(e){return t=this.localStore,r=this.datastore,i=e.asyncQueue,s=a=>dd(this.syncEngine,a,0),o=cd.D()?new cd:new r0,new h0(t,r,i,s,o);var t,r,i,s,o}createSyncEngine(e,t){return function(r,i,s,o,a,c,u){const l=new C0(r,i,s,o,a,c);return u&&(l.fc=!0),l}(this.localStore,this.remoteStore,this.eventManager,this.sharedClientState,e.initialUser,e.maxConcurrentLimboResolutions,t)}terminate(){return async function(e){const t=T(e);v("RemoteStore","RemoteStore shutting down."),t.du.add(5),await qr(t),t._u.shutdown(),t.mu.set("Unknown")}(this.remoteStore)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function pd(n,e=10240){let t=0;return{async read(){if(t<n.byteLength){const r={value:n.slice(t,t+e),done:!1};return t+=e,r}return{done:!0}},async cancel(){},releaseLock(){},closed:Promise.resolve()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
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
 */class ia{constructor(e){this.observer=e,this.muted=!1}next(e){this.observer.next&&this.gc(this.observer.next,e)}error(e){this.observer.error?this.gc(this.observer.error,e):re("Uncaught Error in snapshot listener:",e.toString())}yc(){this.muted=!0}gc(e,t){this.muted||setTimeout(()=>{this.muted||e(t)},0)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Q0{constructor(e,t){this.Ic=e,this.serializer=t,this.metadata=new me,this.buffer=new Uint8Array,this.Tc=new TextDecoder("utf-8"),this.Ec().then(r=>{r&&r.ku()?this.metadata.resolve(r.Nu.metadata):this.metadata.reject(new Error(`The first element of the bundle is not a metadata, it is
             ${JSON.stringify(r==null?void 0:r.Nu)}`))},r=>this.metadata.reject(r))}close(){return this.Ic.cancel()}async getMetadata(){return this.metadata.promise}async _c(){return await this.getMetadata(),this.Ec()}async Ec(){const e=await this.Ac();if(e===null)return null;const t=this.Tc.decode(e),r=Number(t);isNaN(r)&&this.Rc(`length string (${t}) is not valid number`);const i=await this.vc(r);return new S0(JSON.parse(i),e.length+r)}bc(){return this.buffer.findIndex(e=>e==="{".charCodeAt(0))}async Ac(){for(;this.bc()<0&&!await this.Pc(););if(this.buffer.length===0)return null;const e=this.bc();e<0&&this.Rc("Reached the end of bundle when a length string is expected.");const t=this.buffer.slice(0,e);return this.buffer=this.buffer.slice(e),t}async vc(e){for(;this.buffer.length<e;)await this.Pc()&&this.Rc("Reached the end of bundle when more is expected.");const t=this.Tc.decode(this.buffer.slice(0,e));return this.buffer=this.buffer.slice(e),t}Rc(e){throw this.Ic.cancel(),new Error(`Invalid bundle format: ${e}`)}async Pc(){const e=await this.Ic.read();if(!e.done){const t=new Uint8Array(this.buffer.length+e.value.length);t.set(this.buffer),t.set(e.value,this.buffer.length),this.buffer=t}return e.done}}/**
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
 */class Y0{constructor(e){this.datastore=e,this.readVersions=new Map,this.mutations=[],this.committed=!1,this.lastWriteError=null,this.writtenDocs=new Set}async lookup(e){if(this.ensureCommitNotCalled(),this.mutations.length>0)throw new y(m.INVALID_ARGUMENT,"Firestore transactions require all reads to be executed before all writes.");const t=await async function(r,i){const s=T(r),o=Vi(s.serializer)+"/documents",a={documents:i.map(h=>Fi(s.serializer,h))},c=await s.fo("BatchGetDocuments",o,a,i.length),u=new Map;c.forEach(h=>{const d=yS(s.serializer,h);u.set(d.key.toString(),d)});const l=[];return i.forEach(h=>{const d=u.get(h.toString());A(!!d),l.push(d)}),l}(this.datastore,e);return t.forEach(r=>this.recordVersion(r)),t}set(e,t){this.write(t.toMutation(e,this.precondition(e))),this.writtenDocs.add(e.toString())}update(e,t){try{this.write(t.toMutation(e,this.preconditionForUpdate(e)))}catch(r){this.lastWriteError=r}this.writtenDocs.add(e.toString())}delete(e){this.write(new Br(e,this.precondition(e))),this.writtenDocs.add(e.toString())}async commit(){if(this.ensureCommitNotCalled(),this.lastWriteError)throw this.lastWriteError;const e=this.readVersions;this.mutations.forEach(t=>{e.delete(t.key.toString())}),e.forEach((t,r)=>{const i=I.fromPath(r);this.mutations.push(new Mu(i,this.precondition(i)))}),await async function(t,r){const i=T(t),s=Vi(i.serializer)+"/documents",o={writes:r.map(a=>Bi(i.serializer,a))};await i.co("Commit",s,o)}(this.datastore,this.mutations),this.committed=!0}recordVersion(e){let t;if(e.isFoundDocument())t=e.version;else{if(!e.isNoDocument())throw b();t=R.min()}const r=this.readVersions.get(e.key.toString());if(r){if(!t.isEqual(r))throw new y(m.ABORTED,"Document version changed between two reads.")}else this.readVersions.set(e.key.toString(),t)}precondition(e){const t=this.readVersions.get(e.toString());return!this.writtenDocs.has(e.toString())&&t?t.isEqual(R.min())?Q.exists(!1):Q.updateTime(t):Q.none()}preconditionForUpdate(e){const t=this.readVersions.get(e.toString());if(!this.writtenDocs.has(e.toString())&&t){if(t.isEqual(R.min()))throw new y(m.INVALID_ARGUMENT,"Can't update a document that doesn't exist.");return Q.updateTime(t)}return Q.exists(!0)}write(e){this.ensureCommitNotCalled(),this.mutations.push(e)}ensureCommitNotCalled(){}}/**
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
 */class J0{constructor(e,t,r,i,s){this.asyncQueue=e,this.datastore=t,this.options=r,this.updateFunction=i,this.deferred=s,this.Vc=r.maxAttempts,this.Co=new Yu(this.asyncQueue,"transaction_retry")}run(){this.Vc-=1,this.Sc()}Sc(){this.Co.Ao(async()=>{const e=new Y0(this.datastore),t=this.Dc(e);t&&t.then(r=>{this.asyncQueue.enqueueAndForget(()=>e.commit().then(()=>{this.deferred.resolve(r)}).catch(i=>{this.Cc(i)}))}).catch(r=>{this.Cc(r)})})}Dc(e){try{const t=this.updateFunction(e);return!as(t)&&t.catch&&t.then?t:(this.deferred.reject(Error("Transaction callback must return a Promise")),null)}catch(t){return this.deferred.reject(t),null}}Cc(e){this.Vc>0&&this.xc(e)?(this.Vc-=1,this.asyncQueue.enqueueAndForget(()=>(this.Sc(),Promise.resolve()))):this.deferred.reject(e)}xc(e){if(e.name==="FirebaseError"){const t=e.code;return t==="aborted"||t==="failed-precondition"||t==="already-exists"||!Bm(t)}return!1}}/**
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
 */class X0{constructor(e,t,r,i){this.authCredentials=e,this.appCheckCredentials=t,this.asyncQueue=r,this.databaseInfo=i,this.user=pe.UNAUTHENTICATED,this.clientId=tm.A(),this.authCredentialListener=()=>Promise.resolve(),this.appCheckCredentialListener=()=>Promise.resolve(),this.authCredentials.start(r,async s=>{v("FirestoreClient","Received user=",s.uid),await this.authCredentialListener(s),this.user=s}),this.appCheckCredentials.start(r,s=>(v("FirestoreClient","Received new app check token=",s),this.appCheckCredentialListener(s,this.user)))}async getConfiguration(){return{asyncQueue:this.asyncQueue,databaseInfo:this.databaseInfo,clientId:this.clientId,authCredentials:this.authCredentials,appCheckCredentials:this.appCheckCredentials,initialUser:this.user,maxConcurrentLimboResolutions:100}}setCredentialChangeListener(e){this.authCredentialListener=e}setAppCheckTokenChangeListener(e){this.appCheckCredentialListener=e}verifyNotTerminated(){if(this.asyncQueue.isShuttingDown)throw new y(m.FAILED_PRECONDITION,"The client has already been terminated.")}terminate(){this.asyncQueue.enterRestrictedMode();const e=new me;return this.asyncQueue.enqueueAndForgetEvenWhileRestricted(async()=>{try{this._onlineComponents&&await this._onlineComponents.terminate(),this._offlineComponents&&await this._offlineComponents.terminate(),this.authCredentials.shutdown(),this.appCheckCredentials.shutdown(),e.resolve()}catch(t){const r=jr(t,"Failed to shutdown persistence");e.reject(r)}}),e.promise}}async function Gs(n,e){n.asyncQueue.verifyOperationInProgress(),v("FirestoreClient","Initializing OfflineComponentProvider");const t=await n.getConfiguration();await e.initialize(t);let r=t.initialUser;n.setCredentialChangeListener(async i=>{r.isEqual(i)||(await pg(e.localStore,i),r=i)}),e.persistence.setDatabaseDeletedListener(()=>n.terminate()),n._offlineComponents=e}async function Pc(n,e){n.asyncQueue.verifyOperationInProgress();const t=await dl(n);v("FirestoreClient","Initializing OnlineComponentProvider");const r=await n.getConfiguration();await e.initialize(t,r),n.setCredentialChangeListener(i=>ud(e.remoteStore,i)),n.setAppCheckTokenChangeListener((i,s)=>ud(e.remoteStore,s)),n._onlineComponents=e}function Mg(n){return n.name==="FirebaseError"?n.code===m.FAILED_PRECONDITION||n.code===m.UNIMPLEMENTED:!(typeof DOMException<"u"&&n instanceof DOMException)||n.code===22||n.code===20||n.code===11}async function dl(n){if(!n._offlineComponents)if(n._uninitializedComponentsProvider){v("FirestoreClient","Using user provided OfflineComponentProvider");try{await Gs(n,n._uninitializedComponentsProvider._offline)}catch(e){const t=e;if(!Mg(t))throw t;At("Error using user provided cache. Falling back to memory cache: "+t),await Gs(n,new Dc)}}else v("FirestoreClient","Using default OfflineComponentProvider"),await Gs(n,new Dc);return n._offlineComponents}async function sa(n){return n._onlineComponents||(n._uninitializedComponentsProvider?(v("FirestoreClient","Using user provided OnlineComponentProvider"),await Pc(n,n._uninitializedComponentsProvider._online)):(v("FirestoreClient","Using default OnlineComponentProvider"),await Pc(n,new hl))),n._onlineComponents}function Ug(n){return dl(n).then(e=>e.persistence)}function fl(n){return dl(n).then(e=>e.localStore)}function Fg(n){return sa(n).then(e=>e.remoteStore)}function pl(n){return sa(n).then(e=>e.syncEngine)}function Z0(n){return sa(n).then(e=>e.datastore)}async function Rr(n){const e=await sa(n),t=e.eventManager;return t.onListen=N0.bind(null,e.syncEngine),t.onUnlisten=D0.bind(null,e.syncEngine),t}function ek(n){return n.asyncQueue.enqueue(async()=>{const e=await Ug(n),t=await Fg(n);return e.setNetworkEnabled(!0),function(r){const i=T(r);return i.du.delete(0),ms(i)}(t)})}function tk(n){return n.asyncQueue.enqueue(async()=>{const e=await Ug(n),t=await Fg(n);return e.setNetworkEnabled(!1),async function(r){const i=T(r);i.du.add(0),await qr(i),i.mu.set("Offline")}(t)})}function nk(n,e){const t=new me;return n.asyncQueue.enqueueAndForget(async()=>async function(r,i,s){try{const o=await function(a,c){const u=T(a);return u.persistence.runTransaction("read document","readonly",l=>u.localDocuments.getDocument(l,c))}(r,i);o.isFoundDocument()?s.resolve(o):o.isNoDocument()?s.resolve(null):s.reject(new y(m.UNAVAILABLE,"Failed to get document from cache. (However, this document may exist on the server. Run again without setting 'source' in the GetOptions to attempt to retrieve the document from the server.)"))}catch(o){const a=jr(o,`Failed to get document '${i} from cache`);s.reject(a)}}(await fl(n),e,t)),t.promise}function Vg(n,e,t={}){const r=new me;return n.asyncQueue.enqueueAndForget(async()=>function(i,s,o,a,c){const u=new ia({next:h=>{s.enqueueAndForget(()=>nl(i,l));const d=h.docs.has(o);!d&&h.fromCache?c.reject(new y(m.UNAVAILABLE,"Failed to get document because the client is offline.")):d&&h.fromCache&&a&&a.source==="server"?c.reject(new y(m.UNAVAILABLE,'Failed to get document from server. (However, this document does exist in the local cache. Run again without setting source to "server" to retrieve the cached document.)')):c.resolve(h)},error:h=>c.reject(h)}),l=new il(Fr(o.path),u,{includeMetadataChanges:!0,xu:!0});return tl(i,l)}(await Rr(n),n.asyncQueue,e,t,r)),r.promise}function rk(n,e){const t=new me;return n.asyncQueue.enqueueAndForget(async()=>async function(r,i,s){try{const o=await go(r,i,!0),a=new Dg(i,o.Wi),c=a.zu(o.documents),u=a.applyChanges(c,!1);s.resolve(u.snapshot)}catch(o){const a=jr(o,`Failed to execute query '${i} against cache`);s.reject(a)}}(await fl(n),e,t)),t.promise}function Bg(n,e,t={}){const r=new me;return n.asyncQueue.enqueueAndForget(async()=>function(i,s,o,a,c){const u=new ia({next:h=>{s.enqueueAndForget(()=>nl(i,l)),h.fromCache&&a.source==="server"?c.reject(new y(m.UNAVAILABLE,'Failed to get documents from server. (However, these documents may exist in the local cache. Run again without setting source to "server" to retrieve the cached documents.)')):c.resolve(h)},error:h=>c.reject(h)}),l=new il(o,u,{includeMetadataChanges:!0,xu:!0});return tl(i,l)}(await Rr(n),n.asyncQueue,e,t,r)),r.promise}function ik(n,e){const t=new ia(e);return n.asyncQueue.enqueueAndForget(async()=>function(r,i){T(r).Au.add(i),i.next()}(await Rr(n),t)),()=>{t.yc(),n.asyncQueue.enqueueAndForget(async()=>function(r,i){T(r).Au.delete(i)}(await Rr(n),t))}}function sk(n,e,t,r){const i=function(s,o){let a;return a=typeof s=="string"?new TextEncoder().encode(s):s,function(c,u){return new Q0(c,u)}(function(c,u){if(c instanceof Uint8Array)return pd(c,u);if(c instanceof ArrayBuffer)return pd(new Uint8Array(c),u);if(c instanceof ReadableStream)return c.getReader();throw new Error("Source of `toByteStreamReader` has to be a ArrayBuffer or ReadableStream")}(a),o)}(t,ps(e));n.asyncQueue.enqueueAndForget(async()=>{W0(await pl(n),i,r)})}function ok(n,e){return n.asyncQueue.enqueue(async()=>function(t,r){const i=T(t);return i.persistence.runTransaction("Get named query","readonly",s=>i.xs.getNamedQuery(s,r))}(await fl(n),e))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const md=new Map;/**
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
 */function ml(n,e,t){if(!t)throw new y(m.INVALID_ARGUMENT,`Function ${n}() cannot be called with an empty ${e}.`)}function qg(n,e,t,r){if(e===!0&&r===!0)throw new y(m.INVALID_ARGUMENT,`${n} and ${t} cannot be used together.`)}function gd(n){if(!I.isDocumentKey(n))throw new y(m.INVALID_ARGUMENT,`Invalid document reference. Document references must have an even number of segments, but ${n} has ${n.length}.`)}function yd(n){if(I.isDocumentKey(n))throw new y(m.INVALID_ARGUMENT,`Invalid collection reference. Collection references must have an odd number of segments, but ${n} has ${n.length}.`)}function oa(n){if(n===void 0)return"undefined";if(n===null)return"null";if(typeof n=="string")return n.length>20&&(n=`${n.substring(0,20)}...`),JSON.stringify(n);if(typeof n=="number"||typeof n=="boolean")return""+n;if(typeof n=="object"){if(n instanceof Array)return"an array";{const e=function(t){return t.constructor?t.constructor.name:null}(n);return e?`a custom ${e} object`:"an object"}}return typeof n=="function"?"a function":b()}function B(n,e){if("_delegate"in n&&(n=n._delegate),!(n instanceof e)){if(e.name===n.constructor.name)throw new y(m.INVALID_ARGUMENT,"Type does not match the expected instance. Did you pass a reference from a different Firestore SDK?");{const t=oa(n);throw new y(m.INVALID_ARGUMENT,`Expected type '${e.name}', but it was: ${t}`)}}return n}function $g(n,e){if(e<=0)throw new y(m.INVALID_ARGUMENT,`Function ${n}() requires a positive number, but it was: ${e}.`)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class vd{constructor(e){var t;if(e.host===void 0){if(e.ssl!==void 0)throw new y(m.INVALID_ARGUMENT,"Can't provide ssl option if host option is not set");this.host="firestore.googleapis.com",this.ssl=!0}else this.host=e.host,this.ssl=(t=e.ssl)===null||t===void 0||t;if(this.credentials=e.credentials,this.ignoreUndefinedProperties=!!e.ignoreUndefinedProperties,this.cache=e.localCache,e.cacheSizeBytes===void 0)this.cacheSizeBytes=41943040;else{if(e.cacheSizeBytes!==-1&&e.cacheSizeBytes<1048576)throw new y(m.INVALID_ARGUMENT,"cacheSizeBytes must be at least 1048576");this.cacheSizeBytes=e.cacheSizeBytes}this.experimentalForceLongPolling=!!e.experimentalForceLongPolling,this.experimentalAutoDetectLongPolling=!!e.experimentalAutoDetectLongPolling,this.useFetchStreams=!!e.useFetchStreams,qg("experimentalForceLongPolling",e.experimentalForceLongPolling,"experimentalAutoDetectLongPolling",e.experimentalAutoDetectLongPolling)}isEqual(e){return this.host===e.host&&this.ssl===e.ssl&&this.credentials===e.credentials&&this.cacheSizeBytes===e.cacheSizeBytes&&this.experimentalForceLongPolling===e.experimentalForceLongPolling&&this.experimentalAutoDetectLongPolling===e.experimentalAutoDetectLongPolling&&this.ignoreUndefinedProperties===e.ignoreUndefinedProperties&&this.useFetchStreams===e.useFetchStreams}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class gs{constructor(e,t,r,i){this._authCredentials=e,this._appCheckCredentials=t,this._databaseId=r,this._app=i,this.type="firestore-lite",this._persistenceKey="(lite)",this._settings=new vd({}),this._settingsFrozen=!1}get app(){if(!this._app)throw new y(m.FAILED_PRECONDITION,"Firestore was not initialized using the Firebase SDK. 'app' is not available");return this._app}get _initialized(){return this._settingsFrozen}get _terminated(){return this._terminateTask!==void 0}_setSettings(e){if(this._settingsFrozen)throw new y(m.FAILED_PRECONDITION,"Firestore has already been started and its settings can no longer be changed. You can only modify settings before calling any other methods on a Firestore object.");this._settings=new vd(e),e.credentials!==void 0&&(this._authCredentials=function(t){if(!t)return new ab;switch(t.type){case"firstParty":return new hb(t.sessionIndex||"0",t.iamToken||null,t.authTokenFactory||null);case"provider":return t.client;default:throw new y(m.INVALID_ARGUMENT,"makeAuthCredentialsProvider failed due to invalid credential type")}}(e.credentials))}_getSettings(){return this._settings}_freezeSettings(){return this._settingsFrozen=!0,this._settings}_delete(){return this._terminateTask||(this._terminateTask=this._terminate()),this._terminateTask}toJSON(){return{app:this._app,databaseId:this._databaseId,settings:this._settings}}_terminate(){return function(e){const t=md.get(e);t&&(v("ComponentProvider","Removing Datastore"),md.delete(e),t.terminate())}(this),Promise.resolve()}}function ak(n,e,t,r={}){var i;const s=(n=B(n,gs))._getSettings();if(s.host!=="firestore.googleapis.com"&&s.host!==e&&At("Host has been set in both settings() and useEmulator(), emulator host will be used"),n._setSettings(Object.assign(Object.assign({},s),{host:`${e}:${t}`,ssl:!1})),r.mockUserToken){let o,a;if(typeof r.mockUserToken=="string")o=r.mockUserToken,a=pe.MOCK_USER;else{o=Vd(r.mockUserToken,(i=n._app)===null||i===void 0?void 0:i.options.projectId);const c=r.mockUserToken.sub||r.mockUserToken.user_id;if(!c)throw new y(m.INVALID_ARGUMENT,"mockUserToken must contain 'sub' or 'user_id' field!");a=new pe(c)}n._authCredentials=new cb(new em(o,a))}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class K{constructor(e,t,r){this.converter=t,this._key=r,this.type="document",this.firestore=e}get _path(){return this._key.path}get id(){return this._key.path.lastSegment()}get path(){return this._key.path.canonicalString()}get parent(){return new dt(this.firestore,this.converter,this._key.path.popLast())}withConverter(e){return new K(this.firestore,e,this._key)}}class be{constructor(e,t,r){this.converter=t,this._query=r,this.type="query",this.firestore=e}withConverter(e){return new be(this.firestore,e,this._query)}}class dt extends be{constructor(e,t,r){super(e,t,Fr(r)),this._path=r,this.type="collection"}get id(){return this._query.path.lastSegment()}get path(){return this._query.path.canonicalString()}get parent(){const e=this._path.popLast();return e.isEmpty()?null:new K(this.firestore,null,new I(e))}withConverter(e){return new dt(this.firestore,e,this._path)}}function zg(n,e,...t){if(n=S(n),ml("collection","path",e),n instanceof gs){const r=F.fromString(e,...t);return yd(r),new dt(n,null,r)}{if(!(n instanceof K||n instanceof dt))throw new y(m.INVALID_ARGUMENT,"Expected first argument to collection() to be a CollectionReference, a DocumentReference or FirebaseFirestore");const r=n._path.child(F.fromString(e,...t));return yd(r),new dt(n.firestore,null,r)}}function ck(n,e){if(n=B(n,gs),ml("collectionGroup","collection id",e),e.indexOf("/")>=0)throw new y(m.INVALID_ARGUMENT,`Invalid collection ID '${e}' passed to function collectionGroup(). Collection IDs must not contain '/'.`);return new be(n,null,function(t){return new Pt(F.emptyPath(),t)}(e))}function _o(n,e,...t){if(n=S(n),arguments.length===1&&(e=tm.A()),ml("doc","path",e),n instanceof gs){const r=F.fromString(e,...t);return gd(r),new K(n,null,new I(r))}{if(!(n instanceof K||n instanceof dt))throw new y(m.INVALID_ARGUMENT,"Expected first argument to collection() to be a CollectionReference, a DocumentReference or FirebaseFirestore");const r=n._path.child(F.fromString(e,...t));return gd(r),new K(n.firestore,n instanceof dt?n.converter:null,new I(r))}}function jg(n,e){return n=S(n),e=S(e),(n instanceof K||n instanceof dt)&&(e instanceof K||e instanceof dt)&&n.firestore===e.firestore&&n.path===e.path&&n.converter===e.converter}function Gg(n,e){return n=S(n),e=S(e),n instanceof be&&e instanceof be&&n.firestore===e.firestore&&us(n._query,e._query)&&n.converter===e.converter}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class uk{constructor(){this.Nc=Promise.resolve(),this.kc=[],this.Oc=!1,this.$c=[],this.Mc=null,this.Fc=!1,this.Bc=!1,this.Lc=[],this.Co=new Yu(this,"async_queue_retry"),this.qc=()=>{const t=js();t&&v("AsyncQueue","Visibility state changed to "+t.visibilityState),this.Co.vo()};const e=js();e&&typeof e.addEventListener=="function"&&e.addEventListener("visibilitychange",this.qc)}get isShuttingDown(){return this.Oc}enqueueAndForget(e){this.enqueue(e)}enqueueAndForgetEvenWhileRestricted(e){this.Uc(),this.Kc(e)}enterRestrictedMode(e){if(!this.Oc){this.Oc=!0,this.Bc=e||!1;const t=js();t&&typeof t.removeEventListener=="function"&&t.removeEventListener("visibilitychange",this.qc)}}enqueue(e){if(this.Uc(),this.Oc)return new Promise(()=>{});const t=new me;return this.Kc(()=>this.Oc&&this.Bc?Promise.resolve():(e().then(t.resolve,t.reject),t.promise)).then(()=>t.promise)}enqueueRetryable(e){this.enqueueAndForget(()=>(this.kc.push(e),this.Gc()))}async Gc(){if(this.kc.length!==0){try{await this.kc[0](),this.kc.shift(),this.Co.reset()}catch(e){if(!an(e))throw e;v("AsyncQueue","Operation failed with retryable error: "+e)}this.kc.length>0&&this.Co.Ao(()=>this.Gc())}}Kc(e){const t=this.Nc.then(()=>(this.Fc=!0,e().catch(r=>{this.Mc=r,this.Fc=!1;const i=function(s){let o=s.message||"";return s.stack&&(o=s.stack.includes(s.message)?s.stack:s.message+`
`+s.stack),o}(r);throw re("INTERNAL UNHANDLED ERROR: ",i),r}).then(r=>(this.Fc=!1,r))));return this.Nc=t,t}enqueueAfterDelay(e,t,r){this.Uc(),this.Lc.indexOf(e)>-1&&(t=0);const i=el.createAndSchedule(this,e,t,r,s=>this.Qc(s));return this.$c.push(i),i}Uc(){this.Mc&&b()}verifyOperationInProgress(){}async zc(){let e;do e=this.Nc,await e;while(e!==this.Nc)}jc(e){for(const t of this.$c)if(t.timerId===e)return!0;return!1}Wc(e){return this.zc().then(()=>{this.$c.sort((t,r)=>t.targetTimeMs-r.targetTimeMs);for(const t of this.$c)if(t.skipDelay(),e!=="all"&&t.timerId===e)break;return this.zc()})}Hc(e){this.Lc.push(e)}Qc(e){const t=this.$c.indexOf(e);this.$c.splice(t,1)}}function xc(n){return function(e,t){if(typeof e!="object"||e===null)return!1;const r=e;for(const i of t)if(i in r&&typeof r[i]=="function")return!0;return!1}(n,["next","error","complete"])}class lk{constructor(){this._progressObserver={},this._taskCompletionResolver=new me,this._lastProgress={taskState:"Running",totalBytes:0,totalDocuments:0,bytesLoaded:0,documentsLoaded:0}}onProgress(e,t,r){this._progressObserver={next:e,error:t,complete:r}}catch(e){return this._taskCompletionResolver.promise.catch(e)}then(e,t){return this._taskCompletionResolver.promise.then(e,t)}_completeWith(e){this._updateProgress(e),this._progressObserver.complete&&this._progressObserver.complete(),this._taskCompletionResolver.resolve(e)}_failWith(e){this._lastProgress.taskState="Error",this._progressObserver.next&&this._progressObserver.next(this._lastProgress),this._progressObserver.error&&this._progressObserver.error(e),this._taskCompletionResolver.reject(e)}_updateProgress(e){this._lastProgress=e,this._progressObserver.next&&this._progressObserver.next(e)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const hk=-1;class ne extends gs{constructor(e,t,r,i){super(e,t,r,i),this.type="firestore",this._queue=new uk,this._persistenceKey=(i==null?void 0:i.name)||"[DEFAULT]"}_terminate(){return this._firestoreClient||Kg(this),this._firestoreClient.terminate()}}function ve(n){return n._firestoreClient||Kg(n),n._firestoreClient.verifyNotTerminated(),n._firestoreClient}function Kg(n){var e,t,r;const i=n._freezeSettings(),s=function(o,a,c,u){return new $b(o,a,c,u.host,u.ssl,u.experimentalForceLongPolling,u.experimentalAutoDetectLongPolling,u.useFetchStreams)}(n._databaseId,((e=n._app)===null||e===void 0?void 0:e.options.appId)||"",n._persistenceKey,i);n._firestoreClient=new X0(n._authCredentials,n._appCheckCredentials,n._queue,s),((t=i.cache)===null||t===void 0?void 0:t._offlineComponentProvider)&&((r=i.cache)===null||r===void 0?void 0:r._onlineComponentProvider)&&(n._firestoreClient._uninitializedComponentsProvider={_offlineKind:i.cache.kind,_offline:i.cache._offlineComponentProvider,_online:i.cache._onlineComponentProvider})}function dk(n,e){Hg(n=B(n,ne));const t=ve(n);if(t._uninitializedComponentsProvider)throw new y(m.FAILED_PRECONDITION,"SDK cache is already specified.");At("enableIndexedDbPersistence() will be deprecated in the future, you can use `FirestoreSettings.cache` instead.");const r=n._freezeSettings(),i=new hl;return Wg(t,i,new Lg(i,r.cacheSizeBytes,e==null?void 0:e.forceOwnership))}function fk(n){Hg(n=B(n,ne));const e=ve(n);if(e._uninitializedComponentsProvider)throw new y(m.FAILED_PRECONDITION,"SDK cache is already specified.");At("enableMultiTabIndexedDbPersistence() will be deprecated in the future, you can use `FirestoreSettings.cache` instead.");const t=n._freezeSettings(),r=new hl;return Wg(e,r,new H0(r,t.cacheSizeBytes))}function Wg(n,e,t){const r=new me;return n.asyncQueue.enqueue(async()=>{try{await Gs(n,t),await Pc(n,e),r.resolve()}catch(i){const s=i;if(!Mg(s))throw s;At("Error enabling indexeddb cache. Falling back to memory cache: "+s),r.reject(s)}}).then(()=>r.promise)}function pk(n){if(n._initialized&&!n._terminated)throw new y(m.FAILED_PRECONDITION,"Persistence can only be cleared before a Firestore instance is initialized or after it is terminated.");const e=new me;return n._queue.enqueueAndForgetEvenWhileRestricted(async()=>{try{await async function(t){if(!Ze.D())return Promise.resolve();const r=t+"main";await Ze.delete(r)}(Wu(n._databaseId,n._persistenceKey)),e.resolve()}catch(t){e.reject(t)}}),e.promise}function mk(n){return function(e){const t=new me;return e.asyncQueue.enqueueAndForget(async()=>M0(await pl(e),t)),t.promise}(ve(n=B(n,ne)))}function gk(n){return ek(ve(n=B(n,ne)))}function yk(n){return tk(ve(n=B(n,ne)))}function vk(n,e){const t=ve(n=B(n,ne)),r=new lk;return sk(t,n._databaseId,e,r),r}function wk(n,e){return ok(ve(n=B(n,ne)),e).then(t=>t?new be(n,null,t.query):null)}function Hg(n){if(n._initialized||n._terminated)throw new y(m.FAILED_PRECONDITION,"Firestore has already been started and persistence can no longer be enabled. You can only enable persistence before calling any other methods on a Firestore object.")}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class gt{constructor(e){this._byteString=e}static fromBase64String(e){try{return new gt(he.fromBase64String(e))}catch(t){throw new y(m.INVALID_ARGUMENT,"Failed to construct data from Base64 string: "+t)}}static fromUint8Array(e){return new gt(he.fromUint8Array(e))}toBase64(){return this._byteString.toBase64()}toUint8Array(){return this._byteString.toUint8Array()}toString(){return"Bytes(base64: "+this.toBase64()+")"}isEqual(e){return this._byteString.isEqual(e._byteString)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class en{constructor(...e){for(let t=0;t<e.length;++t)if(e[t].length===0)throw new y(m.INVALID_ARGUMENT,"Invalid field name at argument $(i + 1). Field names must not be empty.");this._internalPath=new ie(e)}isEqual(e){return this._internalPath.isEqual(e._internalPath)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Qn{constructor(e){this._methodName=e}}/**
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
 */class aa{constructor(e,t){if(!isFinite(e)||e<-90||e>90)throw new y(m.INVALID_ARGUMENT,"Latitude must be a number between -90 and 90, but was: "+e);if(!isFinite(t)||t<-180||t>180)throw new y(m.INVALID_ARGUMENT,"Longitude must be a number between -180 and 180, but was: "+t);this._lat=e,this._long=t}get latitude(){return this._lat}get longitude(){return this._long}isEqual(e){return this._lat===e._lat&&this._long===e._long}toJSON(){return{latitude:this._lat,longitude:this._long}}_compareTo(e){return D(this._lat,e._lat)||D(this._long,e._long)}}/**
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
 */const _k=/^__.*__$/;class Ik{constructor(e,t,r){this.data=e,this.fieldMask=t,this.fieldTransforms=r}toMutation(e,t){return this.fieldMask!==null?new xt(e,this.data,this.fieldMask,t,this.fieldTransforms):new Vr(e,this.data,t,this.fieldTransforms)}}class Qg{constructor(e,t,r){this.data=e,this.fieldMask=t,this.fieldTransforms=r}toMutation(e,t){return new xt(e,this.data,this.fieldMask,t,this.fieldTransforms)}}function Yg(n){switch(n){case 0:case 2:case 1:return!0;case 3:case 4:return!1;default:throw b()}}class ca{constructor(e,t,r,i,s,o){this.settings=e,this.databaseId=t,this.serializer=r,this.ignoreUndefinedProperties=i,s===void 0&&this.Jc(),this.fieldTransforms=s||[],this.fieldMask=o||[]}get path(){return this.settings.path}get Yc(){return this.settings.Yc}Zc(e){return new ca(Object.assign(Object.assign({},this.settings),e),this.databaseId,this.serializer,this.ignoreUndefinedProperties,this.fieldTransforms,this.fieldMask)}Xc(e){var t;const r=(t=this.path)===null||t===void 0?void 0:t.child(e),i=this.Zc({path:r,ta:!1});return i.ea(e),i}na(e){var t;const r=(t=this.path)===null||t===void 0?void 0:t.child(e),i=this.Zc({path:r,ta:!1});return i.Jc(),i}sa(e){return this.Zc({path:void 0,ta:!0})}ia(e){return Io(e,this.settings.methodName,this.settings.ra||!1,this.path,this.settings.oa)}contains(e){return this.fieldMask.find(t=>e.isPrefixOf(t))!==void 0||this.fieldTransforms.find(t=>e.isPrefixOf(t.field))!==void 0}Jc(){if(this.path)for(let e=0;e<this.path.length;e++)this.ea(this.path.get(e))}ea(e){if(e.length===0)throw this.ia("Document fields must not be empty");if(Yg(this.Yc)&&_k.test(e))throw this.ia('Document fields cannot begin and end with "__"')}}class Tk{constructor(e,t,r){this.databaseId=e,this.ignoreUndefinedProperties=t,this.serializer=r||ps(e)}ua(e,t,r,i=!1){return new ca({Yc:e,methodName:t,oa:r,path:ie.emptyPath(),ta:!1,ra:i},this.databaseId,this.serializer,this.ignoreUndefinedProperties)}}function Yn(n){const e=n._freezeSettings(),t=ps(n._databaseId);return new Tk(n._databaseId,!!e.ignoreUndefinedProperties,t)}function ua(n,e,t,r,i,s={}){const o=n.ua(s.merge||s.mergeFields?2:0,e,t,i);wl("Data must be an object, but it was:",o,r);const a=Zg(r,o);let c,u;if(s.merge)c=new qe(o.fieldMask),u=o.fieldTransforms;else if(s.mergeFields){const l=[];for(const h of s.mergeFields){const d=Oc(e,h,t);if(!o.contains(d))throw new y(m.INVALID_ARGUMENT,`Field '${d}' is specified in your field mask but missing from your input data.`);ty(l,d)||l.push(d)}c=new qe(l),u=o.fieldTransforms.filter(h=>c.covers(h.field))}else c=null,u=o.fieldTransforms;return new Ik(new _e(a),c,u)}class ys extends Qn{_toFieldTransform(e){if(e.Yc!==2)throw e.Yc===1?e.ia(`${this._methodName}() can only appear at the top level of your update data`):e.ia(`${this._methodName}() cannot be used with set() unless you pass {merge:true}`);return e.fieldMask.push(e.path),null}isEqual(e){return e instanceof ys}}function Jg(n,e,t){return new ca({Yc:3,oa:e.settings.oa,methodName:n._methodName,ta:t},e.databaseId,e.serializer,e.ignoreUndefinedProperties)}class gl extends Qn{_toFieldTransform(e){return new hs(e.path,new Ir)}isEqual(e){return e instanceof gl}}class Ek extends Qn{constructor(e,t){super(e),this.ca=t}_toFieldTransform(e){const t=Jg(this,e,!0),r=this.ca.map(s=>Jn(s,t)),i=new Fn(r);return new hs(e.path,i)}isEqual(e){return this===e}}class bk extends Qn{constructor(e,t){super(e),this.ca=t}_toFieldTransform(e){const t=Jg(this,e,!0),r=this.ca.map(s=>Jn(s,t)),i=new Vn(r);return new hs(e.path,i)}isEqual(e){return this===e}}class Sk extends Qn{constructor(e,t){super(e),this.aa=t}_toFieldTransform(e){const t=new Tr(e.serializer,xm(e.serializer,this.aa));return new hs(e.path,t)}isEqual(e){return this===e}}function yl(n,e,t,r){const i=n.ua(1,e,t);wl("Data must be an object, but it was:",i,r);const s=[],o=_e.empty();Hn(r,(c,u)=>{const l=_l(e,c,t);u=S(u);const h=i.na(l);if(u instanceof ys)s.push(l);else{const d=Jn(u,h);d!=null&&(s.push(l),o.set(l,d))}});const a=new qe(s);return new Qg(o,a,i.fieldTransforms)}function vl(n,e,t,r,i,s){const o=n.ua(1,e,t),a=[Oc(e,r,t)],c=[i];if(s.length%2!=0)throw new y(m.INVALID_ARGUMENT,`Function ${e}() needs to be called with an even number of arguments that alternate between field names and values.`);for(let d=0;d<s.length;d+=2)a.push(Oc(e,s[d])),c.push(s[d+1]);const u=[],l=_e.empty();for(let d=a.length-1;d>=0;--d)if(!ty(u,a[d])){const p=a[d];let g=c[d];g=S(g);const _=o.na(p);if(g instanceof ys)u.push(p);else{const E=Jn(g,_);E!=null&&(u.push(p),l.set(p,E))}}const h=new qe(u);return new Qg(l,h,o.fieldTransforms)}function Xg(n,e,t,r=!1){return Jn(t,n.ua(r?4:3,e))}function Jn(n,e){if(ey(n=S(n)))return wl("Unsupported field value:",e,n),Zg(n,e);if(n instanceof Qn)return function(t,r){if(!Yg(r.Yc))throw r.ia(`${t._methodName}() can only be used with update() and set()`);if(!r.path)throw r.ia(`${t._methodName}() is not currently supported inside arrays`);const i=t._toFieldTransform(r);i&&r.fieldTransforms.push(i)}(n,e),null;if(n===void 0&&e.ignoreUndefinedProperties)return null;if(e.path&&e.fieldMask.push(e.path),n instanceof Array){if(e.settings.ta&&e.Yc!==4)throw e.ia("Nested arrays are not supported");return function(t,r){const i=[];let s=0;for(const o of t){let a=Jn(o,r.sa(s));a==null&&(a={nullValue:"NULL_VALUE"}),i.push(a),s++}return{arrayValue:{values:i}}}(n,e)}return function(t,r){if((t=S(t))===null)return{nullValue:"NULL_VALUE"};if(typeof t=="number")return xm(r.serializer,t);if(typeof t=="boolean")return{booleanValue:t};if(typeof t=="string")return{stringValue:t};if(t instanceof Date){const i=Y.fromDate(t);return{timestampValue:Er(r.serializer,i)}}if(t instanceof Y){const i=new Y(t.seconds,1e3*Math.floor(t.nanoseconds/1e3));return{timestampValue:Er(r.serializer,i)}}if(t instanceof aa)return{geoPointValue:{latitude:t.latitude,longitude:t.longitude}};if(t instanceof gt)return{bytesValue:jm(r.serializer,t._byteString)};if(t instanceof K){const i=r.databaseId,s=t.firestore._databaseId;if(!s.isEqual(i))throw r.ia(`Document reference is for database ${s.projectId}/${s.database} but should be for database ${i.projectId}/${i.database}`);return{referenceValue:qu(t.firestore._databaseId||r.databaseId,t._key.path)}}throw r.ia(`Unsupported field value: ${oa(t)}`)}(n,e)}function Zg(n,e){const t={};return fm(n)?e.path&&e.path.length>0&&e.fieldMask.push(e.path):Hn(n,(r,i)=>{const s=Jn(i,e.Xc(r));s!=null&&(t[r]=s)}),{mapValue:{fields:t}}}function ey(n){return!(typeof n!="object"||n===null||n instanceof Array||n instanceof Date||n instanceof Y||n instanceof aa||n instanceof gt||n instanceof K||n instanceof Qn)}function wl(n,e,t){if(!ey(t)||!function(r){return typeof r=="object"&&r!==null&&(Object.getPrototypeOf(r)===Object.prototype||Object.getPrototypeOf(r)===null)}(t)){const r=oa(t);throw r==="an object"?e.ia(n+" a custom object"):e.ia(n+" "+r)}}function Oc(n,e,t){if((e=S(e))instanceof en)return e._internalPath;if(typeof e=="string")return _l(n,e);throw Io("Field path arguments must be of type string or ",n,!1,void 0,t)}const kk=new RegExp("[~\\*/\\[\\]]");function _l(n,e,t){if(e.search(kk)>=0)throw Io(`Invalid field path (${e}). Paths must not contain '~', '*', '/', '[', or ']'`,n,!1,void 0,t);try{return new en(...e.split("."))._internalPath}catch{throw Io(`Invalid field path (${e}). Paths must not be empty, begin with '.', end with '.', or contain '..'`,n,!1,void 0,t)}}function Io(n,e,t,r,i){const s=r&&!r.isEmpty(),o=i!==void 0;let a=`Function ${e}() called with invalid data`;t&&(a+=" (via `toFirestore()`)"),a+=". ";let c="";return(s||o)&&(c+=" (found",s&&(c+=` in field ${r}`),o&&(c+=` in document ${i}`),c+=")"),new y(m.INVALID_ARGUMENT,a+n+c)}function ty(n,e){return n.some(t=>t.isEqual(e))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class $i{constructor(e,t,r,i,s){this._firestore=e,this._userDataWriter=t,this._key=r,this._document=i,this._converter=s}get id(){return this._key.path.lastSegment()}get ref(){return new K(this._firestore,this._converter,this._key)}exists(){return this._document!==null}data(){if(this._document){if(this._converter){const e=new Ak(this._firestore,this._userDataWriter,this._key,this._document,null);return this._converter.fromFirestore(e)}return this._userDataWriter.convertValue(this._document.data.value)}}get(e){if(this._document){const t=this._document.data.field(la("DocumentSnapshot.get",e));if(t!==null)return this._userDataWriter.convertValue(t)}}}class Ak extends $i{data(){return super.data()}}function la(n,e){return typeof e=="string"?_l(n,e):e instanceof en?e._internalPath:e._delegate._internalPath}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function ny(n){if(n.limitType==="L"&&n.explicitOrderBy.length===0)throw new y(m.UNIMPLEMENTED,"limitToLast() queries require specifying at least one orderBy() clause")}class Il{}class vs extends Il{}function Vt(n,e,...t){let r=[];e instanceof Il&&r.push(e),r=r.concat(t),function(i){const s=i.filter(a=>a instanceof Tl).length,o=i.filter(a=>a instanceof ha).length;if(s>1||s>0&&o>0)throw new y(m.INVALID_ARGUMENT,"InvalidQuery. When using composite filters, you cannot use more than one filter at the top level. Consider nesting the multiple filters within an `and(...)` statement. For example: change `query(query, where(...), or(...))` to `query(query, and(where(...), or(...)))`.")}(r);for(const i of r)n=i._apply(n);return n}class ha extends vs{constructor(e,t,r){super(),this._field=e,this._op=t,this._value=r,this.type="where"}static _create(e,t,r){return new ha(e,t,r)}_apply(e){const t=this._parse(e);return iy(e._query,t),new be(e.firestore,e.converter,Ic(e._query,t))}_parse(e){const t=Yn(e.firestore);return function(i,s,o,a,c,u,l){let h;if(c.isKeyField()){if(u==="array-contains"||u==="array-contains-any")throw new y(m.INVALID_ARGUMENT,`Invalid Query. You can't perform '${u}' queries on documentId().`);if(u==="in"||u==="not-in"){_d(l,u);const d=[];for(const p of l)d.push(wd(a,i,p));h={arrayValue:{values:d}}}else h=wd(a,i,l)}else u!=="in"&&u!=="not-in"&&u!=="array-contains-any"||_d(l,u),h=Xg(o,s,l,u==="in"||u==="not-in");return L.create(c,u,h)}(e._query,"where",t,e.firestore._databaseId,this._field,this._op,this._value)}}function Rk(n,e,t){const r=e,i=la("where",n);return ha._create(i,r,t)}class Tl extends Il{constructor(e,t){super(),this.type=e,this._queryConstraints=t}static _create(e,t){return new Tl(e,t)}_parse(e){const t=this._queryConstraints.map(r=>r._parse(e)).filter(r=>r.getFilters().length>0);return t.length===1?t[0]:z.create(t,this._getOperator())}_apply(e){const t=this._parse(e);return t.getFilters().length===0?e:(function(r,i){let s=r;const o=i.getFlattenedFilters();for(const a of o)iy(s,a),s=Ic(s,a)}(e._query,t),new be(e.firestore,e.converter,Ic(e._query,t)))}_getQueryConstraints(){return this._queryConstraints}_getOperator(){return this.type==="and"?"and":"or"}}class El extends vs{constructor(e,t){super(),this._field=e,this._direction=t,this.type="orderBy"}static _create(e,t){return new El(e,t)}_apply(e){const t=function(r,i,s){if(r.startAt!==null)throw new y(m.INVALID_ARGUMENT,"Invalid query. You must not call startAt() or startAfter() before calling orderBy().");if(r.endAt!==null)throw new y(m.INVALID_ARGUMENT,"Invalid query. You must not call endAt() or endBefore() before calling orderBy().");const o=new dr(i,s);return function(a,c){if(Ou(a)===null){const u=Yo(a);u!==null&&sy(a,u,c.field)}}(r,o),o}(e._query,this._field,this._direction);return new be(e.firestore,e.converter,function(r,i){const s=r.explicitOrderBy.concat([i]);return new Pt(r.path,r.collectionGroup,s,r.filters.slice(),r.limit,r.limitType,r.startAt,r.endAt)}(e._query,t))}}function Ck(n,e="asc"){const t=e,r=la("orderBy",n);return El._create(r,t)}class da extends vs{constructor(e,t,r){super(),this.type=e,this._limit=t,this._limitType=r}static _create(e,t,r){return new da(e,t,r)}_apply(e){return new be(e.firestore,e.converter,ho(e._query,this._limit,this._limitType))}}function Nk(n){return $g("limit",n),da._create("limit",n,"F")}function Dk(n){return $g("limitToLast",n),da._create("limitToLast",n,"L")}class fa extends vs{constructor(e,t,r){super(),this.type=e,this._docOrFields=t,this._inclusive=r}static _create(e,t,r){return new fa(e,t,r)}_apply(e){const t=ry(e,this.type,this._docOrFields,this._inclusive);return new be(e.firestore,e.converter,function(r,i){return new Pt(r.path,r.collectionGroup,r.explicitOrderBy.slice(),r.filters.slice(),r.limit,r.limitType,i,r.endAt)}(e._query,t))}}function Pk(...n){return fa._create("startAt",n,!0)}function xk(...n){return fa._create("startAfter",n,!1)}class pa extends vs{constructor(e,t,r){super(),this.type=e,this._docOrFields=t,this._inclusive=r}static _create(e,t,r){return new pa(e,t,r)}_apply(e){const t=ry(e,this.type,this._docOrFields,this._inclusive);return new be(e.firestore,e.converter,function(r,i){return new Pt(r.path,r.collectionGroup,r.explicitOrderBy.slice(),r.filters.slice(),r.limit,r.limitType,r.startAt,i)}(e._query,t))}}function Ok(...n){return pa._create("endBefore",n,!1)}function Lk(...n){return pa._create("endAt",n,!0)}function ry(n,e,t,r){if(t[0]=S(t[0]),t[0]instanceof $i)return function(i,s,o,a,c){if(!a)throw new y(m.NOT_FOUND,`Can't use a DocumentSnapshot that doesn't exist for ${o}().`);const u=[];for(const l of Cn(i))if(l.field.isKeyField())u.push(Mn(s,a.key));else{const h=a.data.field(l.field);if(Pu(h))throw new y(m.INVALID_ARGUMENT,'Invalid query. You are trying to start or end a query using a document for which the field "'+l.field+'" is an uncommitted server timestamp. (Since the value of this field is unknown, you cannot start/end a query with it.)');if(h===null){const d=l.field.canonicalString();throw new y(m.INVALID_ARGUMENT,`Invalid query. You are trying to start or end a query using a document for which the field '${d}' (used as the orderBy) does not exist.`)}u.push(h)}return new Xt(u,c)}(n._query,n.firestore._databaseId,e,t[0]._document,r);{const i=Yn(n.firestore);return function(s,o,a,c,u,l){const h=s.explicitOrderBy;if(u.length>h.length)throw new y(m.INVALID_ARGUMENT,`Too many arguments provided to ${c}(). The number of arguments must be less than or equal to the number of orderBy() clauses`);const d=[];for(let p=0;p<u.length;p++){const g=u[p];if(h[p].field.isKeyField()){if(typeof g!="string")throw new y(m.INVALID_ARGUMENT,`Invalid query. Expected a string for document ID in ${c}(), but got a ${typeof g}`);if(!Lu(s)&&g.indexOf("/")!==-1)throw new y(m.INVALID_ARGUMENT,`Invalid query. When querying a collection and ordering by documentId(), the value passed to ${c}() must be a plain document ID, but '${g}' contains a slash.`);const _=s.path.child(F.fromString(g));if(!I.isDocumentKey(_))throw new y(m.INVALID_ARGUMENT,`Invalid query. When querying a collection group and ordering by documentId(), the value passed to ${c}() must result in a valid document path, but '${_}' is not because it contains an odd number of segments.`);const E=new I(_);d.push(Mn(o,E))}else{const _=Xg(a,c,g);d.push(_)}}return new Xt(d,l)}(n._query,n.firestore._databaseId,i,e,t,r)}}function wd(n,e,t){if(typeof(t=S(t))=="string"){if(t==="")throw new y(m.INVALID_ARGUMENT,"Invalid query. When querying with documentId(), you must provide a valid document ID, but it was an empty string.");if(!Lu(e)&&t.indexOf("/")!==-1)throw new y(m.INVALID_ARGUMENT,`Invalid query. When querying a collection by documentId(), you must provide a plain document ID, but '${t}' contains a '/' character.`);const r=e.path.child(F.fromString(t));if(!I.isDocumentKey(r))throw new y(m.INVALID_ARGUMENT,`Invalid query. When querying a collection group by documentId(), the value provided must result in a valid document path, but '${r}' is not because it has an odd number of segments (${r.length}).`);return Mn(n,new I(r))}if(t instanceof K)return Mn(n,t._key);throw new y(m.INVALID_ARGUMENT,`Invalid query. When querying with documentId(), you must provide a valid string or a DocumentReference, but it was: ${oa(t)}.`)}function _d(n,e){if(!Array.isArray(n)||n.length===0)throw new y(m.INVALID_ARGUMENT,`Invalid Query. A non-empty array is required for '${e.toString()}' filters.`)}function iy(n,e){if(e.isInequality()){const r=Yo(n),i=e.field;if(r!==null&&!r.isEqual(i))throw new y(m.INVALID_ARGUMENT,`Invalid query. All where filters with an inequality (<, <=, !=, not-in, >, or >=) must be on the same field. But you have inequality filters on '${r.toString()}' and '${i.toString()}'`);const s=Ou(n);s!==null&&sy(n,i,s)}const t=function(r,i){for(const s of r)for(const o of s.getFlattenedFilters())if(i.indexOf(o.op)>=0)return o.op;return null}(n.filters,function(r){switch(r){case"!=":return["!=","not-in"];case"array-contains-any":case"in":return["not-in"];case"not-in":return["array-contains-any","in","not-in","!="];default:return[]}}(e.op));if(t!==null)throw t===e.op?new y(m.INVALID_ARGUMENT,`Invalid query. You cannot use more than one '${e.op.toString()}' filter.`):new y(m.INVALID_ARGUMENT,`Invalid query. You cannot use '${e.op.toString()}' filters with '${t.toString()}' filters.`)}function sy(n,e,t){if(!t.isEqual(e))throw new y(m.INVALID_ARGUMENT,`Invalid query. You have a where filter with an inequality (<, <=, !=, not-in, >, or >=) on field '${e.toString()}' and so you must also use '${e.toString()}' as your first argument to orderBy(), but your first orderBy() is on field '${t.toString()}' instead.`)}class bl{convertValue(e,t="none"){switch(Ln(e)){case 0:return null;case 1:return e.booleanValue;case 2:return Z(e.integerValue||e.doubleValue);case 3:return this.convertTimestamp(e.timestampValue);case 4:return this.convertServerTimestamp(e,t);case 5:return e.stringValue;case 6:return this.convertBytes(On(e.bytesValue));case 7:return this.convertReference(e.referenceValue);case 8:return this.convertGeoPoint(e.geoPointValue);case 9:return this.convertArray(e.arrayValue,t);case 10:return this.convertObject(e.mapValue,t);default:throw b()}}convertObject(e,t){const r={};return Hn(e.fields,(i,s)=>{r[i]=this.convertValue(s,t)}),r}convertGeoPoint(e){return new aa(Z(e.latitude),Z(e.longitude))}convertArray(e,t){return(e.values||[]).map(r=>this.convertValue(r,t))}convertServerTimestamp(e,t){switch(t){case"previous":const r=pm(e);return r==null?null:this.convertValue(r,t);case"estimate":return this.convertTimestamp(Li(e));default:return null}}convertTimestamp(e){const t=Qt(e);return new Y(t.seconds,t.nanos)}convertDocumentKey(e,t){const r=F.fromString(e);A(eg(r));const i=new Yt(r.get(1),r.get(3)),s=new I(r.popFirst(5));return i.isEqual(t)||re(`Document ${s} contains a document reference within a different database (${i.projectId}/${i.database}) which is not supported. It will be treated as a reference in the current database (${t.projectId}/${t.database}) instead.`),s}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function ma(n,e,t){let r;return r=n?t&&(t.merge||t.mergeFields)?n.toFirestore(e,t):n.toFirestore(e):e,r}class Mk extends bl{constructor(e){super(),this.firestore=e}convertBytes(e){return new gt(e)}convertReference(e){const t=this.convertDocumentKey(e,this.firestore._databaseId);return new K(this.firestore,null,t)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class En{constructor(e,t){this.hasPendingWrites=e,this.fromCache=t}isEqual(e){return this.hasPendingWrites===e.hasPendingWrites&&this.fromCache===e.fromCache}}class Rt extends $i{constructor(e,t,r,i,s,o){super(e,t,r,i,o),this._firestore=e,this._firestoreImpl=e,this.metadata=s}exists(){return super.exists()}data(e={}){if(this._document){if(this._converter){const t=new vi(this._firestore,this._userDataWriter,this._key,this._document,this.metadata,null);return this._converter.fromFirestore(t,e)}return this._userDataWriter.convertValue(this._document.data.value,e.serverTimestamps)}}get(e,t={}){if(this._document){const r=this._document.data.field(la("DocumentSnapshot.get",e));if(r!==null)return this._userDataWriter.convertValue(r,t.serverTimestamps)}}}class vi extends Rt{data(e={}){return super.data(e)}}class tn{constructor(e,t,r,i){this._firestore=e,this._userDataWriter=t,this._snapshot=i,this.metadata=new En(i.hasPendingWrites,i.fromCache),this.query=r}get docs(){const e=[];return this.forEach(t=>e.push(t)),e}get size(){return this._snapshot.docs.size}get empty(){return this.size===0}forEach(e,t){this._snapshot.docs.forEach(r=>{e.call(t,new vi(this._firestore,this._userDataWriter,r.key,r,new En(this._snapshot.mutatedKeys.has(r.key),this._snapshot.fromCache),this.query.converter))})}docChanges(e={}){const t=!!e.includeMetadataChanges;if(t&&this._snapshot.excludesMetadataChanges)throw new y(m.INVALID_ARGUMENT,"To include metadata changes with your document changes, you must also pass { includeMetadataChanges:true } to onSnapshot().");return this._cachedChanges&&this._cachedChangesIncludeMetadataChanges===t||(this._cachedChanges=function(r,i){if(r._snapshot.oldDocs.isEmpty()){let s=0;return r._snapshot.docChanges.map(o=>{const a=new vi(r._firestore,r._userDataWriter,o.doc.key,o.doc,new En(r._snapshot.mutatedKeys.has(o.doc.key),r._snapshot.fromCache),r.query.converter);return o.doc,{type:"added",doc:a,oldIndex:-1,newIndex:s++}})}{let s=r._snapshot.oldDocs;return r._snapshot.docChanges.filter(o=>i||o.type!==3).map(o=>{const a=new vi(r._firestore,r._userDataWriter,o.doc.key,o.doc,new En(r._snapshot.mutatedKeys.has(o.doc.key),r._snapshot.fromCache),r.query.converter);let c=-1,u=-1;return o.type!==0&&(c=s.indexOf(o.doc.key),s=s.delete(o.doc.key)),o.type!==1&&(s=s.add(o.doc),u=s.indexOf(o.doc.key)),{type:Uk(o.type),doc:a,oldIndex:c,newIndex:u}})}}(this,t),this._cachedChangesIncludeMetadataChanges=t),this._cachedChanges}}function Uk(n){switch(n){case 0:return"added";case 2:case 3:return"modified";case 1:return"removed";default:return b()}}function oy(n,e){return n instanceof Rt&&e instanceof Rt?n._firestore===e._firestore&&n._key.isEqual(e._key)&&(n._document===null?e._document===null:n._document.isEqual(e._document))&&n._converter===e._converter:n instanceof tn&&e instanceof tn&&n._firestore===e._firestore&&Gg(n.query,e.query)&&n.metadata.isEqual(e.metadata)&&n._snapshot.isEqual(e._snapshot)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Fk(n){n=B(n,K);const e=B(n.firestore,ne);return Vg(ve(e),n._key).then(t=>Sl(e,n,t))}class Xn extends bl{constructor(e){super(),this.firestore=e}convertBytes(e){return new gt(e)}convertReference(e){const t=this.convertDocumentKey(e,this.firestore._databaseId);return new K(this.firestore,null,t)}}function Vk(n){n=B(n,K);const e=B(n.firestore,ne),t=ve(e),r=new Xn(e);return nk(t,n._key).then(i=>new Rt(e,r,n._key,i,new En(i!==null&&i.hasLocalMutations,!0),n.converter))}function Bk(n){n=B(n,K);const e=B(n.firestore,ne);return Vg(ve(e),n._key,{source:"server"}).then(t=>Sl(e,n,t))}function qk(n){n=B(n,be);const e=B(n.firestore,ne),t=ve(e),r=new Xn(e);return ny(n._query),Bg(t,n._query).then(i=>new tn(e,r,n,i))}function $k(n){n=B(n,be);const e=B(n.firestore,ne),t=ve(e),r=new Xn(e);return rk(t,n._query).then(i=>new tn(e,r,n,i))}function zk(n){n=B(n,be);const e=B(n.firestore,ne),t=ve(e),r=new Xn(e);return Bg(t,n._query,{source:"server"}).then(i=>new tn(e,r,n,i))}function Id(n,e,t){n=B(n,K);const r=B(n.firestore,ne),i=ma(n.converter,e,t);return ws(r,[ua(Yn(r),"setDoc",n._key,i,n.converter!==null,t).toMutation(n._key,Q.none())])}function Td(n,e,t,...r){n=B(n,K);const i=B(n.firestore,ne),s=Yn(i);let o;return o=typeof(e=S(e))=="string"||e instanceof en?vl(s,"updateDoc",n._key,e,t,r):yl(s,"updateDoc",n._key,e),ws(i,[o.toMutation(n._key,Q.exists(!0))])}function jk(n){return ws(B(n.firestore,ne),[new Br(n._key,Q.none())])}function Gk(n,e){const t=B(n.firestore,ne),r=_o(n),i=ma(n.converter,e);return ws(t,[ua(Yn(n.firestore),"addDoc",r._key,i,n.converter!==null,{}).toMutation(r._key,Q.exists(!1))]).then(()=>r)}function ay(n,...e){var t,r,i;n=S(n);let s={includeMetadataChanges:!1},o=0;typeof e[o]!="object"||xc(e[o])||(s=e[o],o++);const a={includeMetadataChanges:s.includeMetadataChanges};if(xc(e[o])){const h=e[o];e[o]=(t=h.next)===null||t===void 0?void 0:t.bind(h),e[o+1]=(r=h.error)===null||r===void 0?void 0:r.bind(h),e[o+2]=(i=h.complete)===null||i===void 0?void 0:i.bind(h)}let c,u,l;if(n instanceof K)u=B(n.firestore,ne),l=Fr(n._key.path),c={next:h=>{e[o]&&e[o](Sl(u,n,h))},error:e[o+1],complete:e[o+2]};else{const h=B(n,be);u=B(h.firestore,ne),l=h._query;const d=new Xn(u);c={next:p=>{e[o]&&e[o](new tn(u,d,h,p))},error:e[o+1],complete:e[o+2]},ny(n._query)}return function(h,d,p,g){const _=new ia(g),E=new il(d,_,p);return h.asyncQueue.enqueueAndForget(async()=>tl(await Rr(h),E)),()=>{_.yc(),h.asyncQueue.enqueueAndForget(async()=>nl(await Rr(h),E))}}(ve(u),l,a,c)}function Kk(n,e){return ik(ve(n=B(n,ne)),xc(e)?e:{next:e})}function ws(n,e){return function(t,r){const i=new me;return t.asyncQueue.enqueueAndForget(async()=>P0(await pl(t),r,i)),i.promise}(ve(n),e)}function Sl(n,e,t){const r=t.docs.get(e._key),i=new Xn(n);return new Rt(n,i,e._key,r,new En(t.hasPendingWrites,t.fromCache),e.converter)}/**
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
 */const Wk={maxAttempts:5};/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Hk{constructor(e,t){this._firestore=e,this._commitHandler=t,this._mutations=[],this._committed=!1,this._dataReader=Yn(e)}set(e,t,r){this._verifyNotCommitted();const i=qt(e,this._firestore),s=ma(i.converter,t,r),o=ua(this._dataReader,"WriteBatch.set",i._key,s,i.converter!==null,r);return this._mutations.push(o.toMutation(i._key,Q.none())),this}update(e,t,r,...i){this._verifyNotCommitted();const s=qt(e,this._firestore);let o;return o=typeof(t=S(t))=="string"||t instanceof en?vl(this._dataReader,"WriteBatch.update",s._key,t,r,i):yl(this._dataReader,"WriteBatch.update",s._key,t),this._mutations.push(o.toMutation(s._key,Q.exists(!0))),this}delete(e){this._verifyNotCommitted();const t=qt(e,this._firestore);return this._mutations=this._mutations.concat(new Br(t._key,Q.none())),this}commit(){return this._verifyNotCommitted(),this._committed=!0,this._mutations.length>0?this._commitHandler(this._mutations):Promise.resolve()}_verifyNotCommitted(){if(this._committed)throw new y(m.FAILED_PRECONDITION,"A write batch can no longer be used after commit() has been called.")}}function qt(n,e){if((n=S(n)).firestore!==e)throw new y(m.INVALID_ARGUMENT,"Provided document reference is from a different Firestore instance.");return n}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
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
 */class Qk extends class{constructor(e,t){this._firestore=e,this._transaction=t,this._dataReader=Yn(e)}get(e){const t=qt(e,this._firestore),r=new Mk(this._firestore);return this._transaction.lookup([t._key]).then(i=>{if(!i||i.length!==1)return b();const s=i[0];if(s.isFoundDocument())return new $i(this._firestore,r,s.key,s,t.converter);if(s.isNoDocument())return new $i(this._firestore,r,t._key,null,t.converter);throw b()})}set(e,t,r){const i=qt(e,this._firestore),s=ma(i.converter,t,r),o=ua(this._dataReader,"Transaction.set",i._key,s,i.converter!==null,r);return this._transaction.set(i._key,o),this}update(e,t,r,...i){const s=qt(e,this._firestore);let o;return o=typeof(t=S(t))=="string"||t instanceof en?vl(this._dataReader,"Transaction.update",s._key,t,r,i):yl(this._dataReader,"Transaction.update",s._key,t),this._transaction.update(s._key,o),this}delete(e){const t=qt(e,this._firestore);return this._transaction.delete(t._key),this}}{constructor(e,t){super(e,t),this._firestore=e}get(e){const t=qt(e,this._firestore),r=new Xn(this._firestore);return super.get(e).then(i=>new Rt(this._firestore,r,t._key,i._document,new En(!1,!1),t.converter))}}function Yk(n,e,t){n=B(n,ne);const r=Object.assign(Object.assign({},Wk),t);return function(i){if(i.maxAttempts<1)throw new y(m.INVALID_ARGUMENT,"Max attempts must be at least 1")}(r),function(i,s,o){const a=new me;return i.asyncQueue.enqueueAndForget(async()=>{const c=await Z0(i);new J0(i.asyncQueue,c,o,s,a).run()}),a.promise}(ve(n),i=>e(new Qk(n,i)),r)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Jk(){return new ys("deleteField")}function Xk(){return new gl("serverTimestamp")}function Zk(...n){return new Ek("arrayUnion",n)}function eA(...n){return new bk("arrayRemove",n)}function tA(n){return new Sk("increment",n)}(function(n,e=!0){(function(t){Ur=t})(Ct),bt(new Je("firestore",(t,{instanceIdentifier:r,options:i})=>{const s=t.getProvider("app").getImmediate(),o=new ne(new ub(t.getProvider("auth-internal")),new fb(t.getProvider("app-check-internal")),function(a,c){if(!Object.prototype.hasOwnProperty.apply(a.options,["projectId"]))throw new y(m.INVALID_ARGUMENT,'"projectId" not provided in firebase.initializeApp.');return new Yt(a.options.projectId,c)}(s,r),s);return i=Object.assign({useFetchStreams:e},i),o._setSettings(i),o},"PUBLIC").setMultipleInstances(!0)),Ye(wh,"3.10.1",n),Ye(wh,"3.10.1","esm2017")})();const nA="@firebase/firestore-compat",rA="0.3.7";/**
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
 */function kl(n,e){if(e===void 0)return{merge:!1};if(e.mergeFields!==void 0&&e.merge!==void 0)throw new y("invalid-argument",`Invalid options passed to function ${n}(): You cannot specify both "merge" and "mergeFields".`);return e}/**
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
 */function Ed(){if(typeof Uint8Array>"u")throw new y("unimplemented","Uint8Arrays are not available in this environment.")}function bd(){if(!Bb())throw new y("unimplemented","Blobs are unavailable in Firestore in this environment.")}class zi{constructor(e){this._delegate=e}static fromBase64String(e){return bd(),new zi(gt.fromBase64String(e))}static fromUint8Array(e){return Ed(),new zi(gt.fromUint8Array(e))}toBase64(){return bd(),this._delegate.toBase64()}toUint8Array(){return Ed(),this._delegate.toUint8Array()}isEqual(e){return this._delegate.isEqual(e._delegate)}toString(){return"Blob(base64: "+this.toBase64()+")"}}/**
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
 */function Lc(n){return iA(n,["next","error","complete"])}function iA(n,e){if(typeof n!="object"||n===null)return!1;const t=n;for(const r of e)if(r in t&&typeof t[r]=="function")return!0;return!1}/**
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
 */class sA{enableIndexedDbPersistence(e,t){return dk(e._delegate,{forceOwnership:t})}enableMultiTabIndexedDbPersistence(e){return fk(e._delegate)}clearIndexedDbPersistence(e){return pk(e._delegate)}}class cy{constructor(e,t,r){this._delegate=t,this._persistenceProvider=r,this.INTERNAL={delete:()=>this.terminate()},e instanceof Yt||(this._appCompat=e)}get _databaseId(){return this._delegate._databaseId}settings(e){const t=this._delegate._getSettings();!e.merge&&t.host!==e.host&&At("You are overriding the original host. If you did not intend to override your settings, use {merge: true}."),e.merge&&(e=Object.assign(Object.assign({},t),e),delete e.merge),this._delegate._setSettings(e)}useEmulator(e,t,r={}){ak(this._delegate,e,t,r)}enableNetwork(){return gk(this._delegate)}disableNetwork(){return yk(this._delegate)}enablePersistence(e){let t=!1,r=!1;return e&&(t=!!e.synchronizeTabs,r=!!e.experimentalForceOwningTab,qg("synchronizeTabs",t,"experimentalForceOwningTab",r)),t?this._persistenceProvider.enableMultiTabIndexedDbPersistence(this):this._persistenceProvider.enableIndexedDbPersistence(this,r)}clearPersistence(){return this._persistenceProvider.clearIndexedDbPersistence(this)}terminate(){return this._appCompat&&(this._appCompat._removeServiceInstance("firestore-compat"),this._appCompat._removeServiceInstance("firestore")),this._delegate._delete()}waitForPendingWrites(){return mk(this._delegate)}onSnapshotsInSync(e){return Kk(this._delegate,e)}get app(){if(!this._appCompat)throw new y("failed-precondition","Firestore was not initialized using the Firebase SDK. 'app' is not available");return this._appCompat}collection(e){try{return new Cr(this,zg(this._delegate,e))}catch(t){throw Oe(t,"collection()","Firestore.collection()")}}doc(e){try{return new He(this,_o(this._delegate,e))}catch(t){throw Oe(t,"doc()","Firestore.doc()")}}collectionGroup(e){try{return new xe(this,ck(this._delegate,e))}catch(t){throw Oe(t,"collectionGroup()","Firestore.collectionGroup()")}}runTransaction(e){return Yk(this._delegate,t=>e(new uy(this,t)))}batch(){return ve(this._delegate),new ly(new Hk(this._delegate,e=>ws(this._delegate,e)))}loadBundle(e){return vk(this._delegate,e)}namedQuery(e){return wk(this._delegate,e).then(t=>t?new xe(this,t):null)}}class ga extends bl{constructor(e){super(),this.firestore=e}convertBytes(e){return new zi(new gt(e))}convertReference(e){const t=this.convertDocumentKey(e,this.firestore._databaseId);return He.forKey(t,this.firestore,null)}}function oA(n){sb(n)}class uy{constructor(e,t){this._firestore=e,this._delegate=t,this._userDataWriter=new ga(e)}get(e){const t=bn(e);return this._delegate.get(t).then(r=>new ji(this._firestore,new Rt(this._firestore._delegate,this._userDataWriter,r._key,r._document,r.metadata,t.converter)))}set(e,t,r){const i=bn(e);return r?(kl("Transaction.set",r),this._delegate.set(i,t,r)):this._delegate.set(i,t),this}update(e,t,r,...i){const s=bn(e);return arguments.length===2?this._delegate.update(s,t):this._delegate.update(s,t,r,...i),this}delete(e){const t=bn(e);return this._delegate.delete(t),this}}class ly{constructor(e){this._delegate=e}set(e,t,r){const i=bn(e);return r?(kl("WriteBatch.set",r),this._delegate.set(i,t,r)):this._delegate.set(i,t),this}update(e,t,r,...i){const s=bn(e);return arguments.length===2?this._delegate.update(s,t):this._delegate.update(s,t,r,...i),this}delete(e){const t=bn(e);return this._delegate.delete(t),this}commit(){return this._delegate.commit()}}class zn{constructor(e,t,r){this._firestore=e,this._userDataWriter=t,this._delegate=r}fromFirestore(e,t){const r=new vi(this._firestore._delegate,this._userDataWriter,e._key,e._document,e.metadata,null);return this._delegate.fromFirestore(new Gi(this._firestore,r),t!=null?t:{})}toFirestore(e,t){return t?this._delegate.toFirestore(e,t):this._delegate.toFirestore(e)}static getInstance(e,t){const r=zn.INSTANCES;let i=r.get(e);i||(i=new WeakMap,r.set(e,i));let s=i.get(t);return s||(s=new zn(e,new ga(e),t),i.set(t,s)),s}}zn.INSTANCES=new WeakMap;class He{constructor(e,t){this.firestore=e,this._delegate=t,this._userDataWriter=new ga(e)}static forPath(e,t,r){if(e.length%2!==0)throw new y("invalid-argument",`Invalid document reference. Document references must have an even number of segments, but ${e.canonicalString()} has ${e.length}`);return new He(t,new K(t._delegate,r,new I(e)))}static forKey(e,t,r){return new He(t,new K(t._delegate,r,e))}get id(){return this._delegate.id}get parent(){return new Cr(this.firestore,this._delegate.parent)}get path(){return this._delegate.path}collection(e){try{return new Cr(this.firestore,zg(this._delegate,e))}catch(t){throw Oe(t,"collection()","DocumentReference.collection()")}}isEqual(e){return e=S(e),e instanceof K?jg(this._delegate,e):!1}set(e,t){t=kl("DocumentReference.set",t);try{return t?Id(this._delegate,e,t):Id(this._delegate,e)}catch(r){throw Oe(r,"setDoc()","DocumentReference.set()")}}update(e,t,...r){try{return arguments.length===1?Td(this._delegate,e):Td(this._delegate,e,t,...r)}catch(i){throw Oe(i,"updateDoc()","DocumentReference.update()")}}delete(){return jk(this._delegate)}onSnapshot(...e){const t=hy(e),r=dy(e,i=>new ji(this.firestore,new Rt(this.firestore._delegate,this._userDataWriter,i._key,i._document,i.metadata,this._delegate.converter)));return ay(this._delegate,t,r)}get(e){let t;return(e==null?void 0:e.source)==="cache"?t=Vk(this._delegate):(e==null?void 0:e.source)==="server"?t=Bk(this._delegate):t=Fk(this._delegate),t.then(r=>new ji(this.firestore,new Rt(this.firestore._delegate,this._userDataWriter,r._key,r._document,r.metadata,this._delegate.converter)))}withConverter(e){return new He(this.firestore,e?this._delegate.withConverter(zn.getInstance(this.firestore,e)):this._delegate.withConverter(null))}}function Oe(n,e,t){return n.message=n.message.replace(e,t),n}function hy(n){for(const e of n)if(typeof e=="object"&&!Lc(e))return e;return{}}function dy(n,e){var t,r;let i;return Lc(n[0])?i=n[0]:Lc(n[1])?i=n[1]:typeof n[0]=="function"?i={next:n[0],error:n[1],complete:n[2]}:i={next:n[1],error:n[2],complete:n[3]},{next:s=>{i.next&&i.next(e(s))},error:(t=i.error)===null||t===void 0?void 0:t.bind(i),complete:(r=i.complete)===null||r===void 0?void 0:r.bind(i)}}class ji{constructor(e,t){this._firestore=e,this._delegate=t}get ref(){return new He(this._firestore,this._delegate.ref)}get id(){return this._delegate.id}get metadata(){return this._delegate.metadata}get exists(){return this._delegate.exists()}data(e){return this._delegate.data(e)}get(e,t){return this._delegate.get(e,t)}isEqual(e){return oy(this._delegate,e._delegate)}}class Gi extends ji{data(e){const t=this._delegate.data(e);return ob(t!==void 0),t}}class xe{constructor(e,t){this.firestore=e,this._delegate=t,this._userDataWriter=new ga(e)}where(e,t,r){try{return new xe(this.firestore,Vt(this._delegate,Rk(e,t,r)))}catch(i){throw Oe(i,/(orderBy|where)\(\)/,"Query.$1()")}}orderBy(e,t){try{return new xe(this.firestore,Vt(this._delegate,Ck(e,t)))}catch(r){throw Oe(r,/(orderBy|where)\(\)/,"Query.$1()")}}limit(e){try{return new xe(this.firestore,Vt(this._delegate,Nk(e)))}catch(t){throw Oe(t,"limit()","Query.limit()")}}limitToLast(e){try{return new xe(this.firestore,Vt(this._delegate,Dk(e)))}catch(t){throw Oe(t,"limitToLast()","Query.limitToLast()")}}startAt(...e){try{return new xe(this.firestore,Vt(this._delegate,Pk(...e)))}catch(t){throw Oe(t,"startAt()","Query.startAt()")}}startAfter(...e){try{return new xe(this.firestore,Vt(this._delegate,xk(...e)))}catch(t){throw Oe(t,"startAfter()","Query.startAfter()")}}endBefore(...e){try{return new xe(this.firestore,Vt(this._delegate,Ok(...e)))}catch(t){throw Oe(t,"endBefore()","Query.endBefore()")}}endAt(...e){try{return new xe(this.firestore,Vt(this._delegate,Lk(...e)))}catch(t){throw Oe(t,"endAt()","Query.endAt()")}}isEqual(e){return Gg(this._delegate,e._delegate)}get(e){let t;return(e==null?void 0:e.source)==="cache"?t=$k(this._delegate):(e==null?void 0:e.source)==="server"?t=zk(this._delegate):t=qk(this._delegate),t.then(r=>new Mc(this.firestore,new tn(this.firestore._delegate,this._userDataWriter,this._delegate,r._snapshot)))}onSnapshot(...e){const t=hy(e),r=dy(e,i=>new Mc(this.firestore,new tn(this.firestore._delegate,this._userDataWriter,this._delegate,i._snapshot)));return ay(this._delegate,t,r)}withConverter(e){return new xe(this.firestore,e?this._delegate.withConverter(zn.getInstance(this.firestore,e)):this._delegate.withConverter(null))}}class aA{constructor(e,t){this._firestore=e,this._delegate=t}get type(){return this._delegate.type}get doc(){return new Gi(this._firestore,this._delegate.doc)}get oldIndex(){return this._delegate.oldIndex}get newIndex(){return this._delegate.newIndex}}class Mc{constructor(e,t){this._firestore=e,this._delegate=t}get query(){return new xe(this._firestore,this._delegate.query)}get metadata(){return this._delegate.metadata}get size(){return this._delegate.size}get empty(){return this._delegate.empty}get docs(){return this._delegate.docs.map(e=>new Gi(this._firestore,e))}docChanges(e){return this._delegate.docChanges(e).map(t=>new aA(this._firestore,t))}forEach(e,t){this._delegate.forEach(r=>{e.call(t,new Gi(this._firestore,r))})}isEqual(e){return oy(this._delegate,e._delegate)}}class Cr extends xe{constructor(e,t){super(e,t),this.firestore=e,this._delegate=t}get id(){return this._delegate.id}get path(){return this._delegate.path}get parent(){const e=this._delegate.parent;return e?new He(this.firestore,e):null}doc(e){try{return e===void 0?new He(this.firestore,_o(this._delegate)):new He(this.firestore,_o(this._delegate,e))}catch(t){throw Oe(t,"doc()","CollectionReference.doc()")}}add(e){return Gk(this._delegate,e).then(t=>new He(this.firestore,t))}isEqual(e){return jg(this._delegate,e._delegate)}withConverter(e){return new Cr(this.firestore,e?this._delegate.withConverter(zn.getInstance(this.firestore,e)):this._delegate.withConverter(null))}}function bn(n){return B(n,K)}/**
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
 */class Al{constructor(...e){this._delegate=new en(...e)}static documentId(){return new Al(ie.keyField().canonicalString())}isEqual(e){return e=S(e),e instanceof en?this._delegate._internalPath.isEqual(e._internalPath):!1}}/**
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
 */class wn{constructor(e){this._delegate=e}static serverTimestamp(){const e=Xk();return e._methodName="FieldValue.serverTimestamp",new wn(e)}static delete(){const e=Jk();return e._methodName="FieldValue.delete",new wn(e)}static arrayUnion(...e){const t=Zk(...e);return t._methodName="FieldValue.arrayUnion",new wn(t)}static arrayRemove(...e){const t=eA(...e);return t._methodName="FieldValue.arrayRemove",new wn(t)}static increment(e){const t=tA(e);return t._methodName="FieldValue.increment",new wn(t)}isEqual(e){return this._delegate.isEqual(e._delegate)}}/**
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
 */const cA={Firestore:cy,GeoPoint:aa,Timestamp:Y,Blob:zi,Transaction:uy,WriteBatch:ly,DocumentReference:He,DocumentSnapshot:ji,Query:xe,QueryDocumentSnapshot:Gi,QuerySnapshot:Mc,CollectionReference:Cr,FieldPath:Al,FieldValue:wn,setLogLevel:oA,CACHE_SIZE_UNLIMITED:hk};function uA(n,e){n.INTERNAL.registerComponent(new Je("firestore-compat",t=>{const r=t.getProvider("app-compat").getImmediate(),i=t.getProvider("firestore").getImmediate();return e(r,i)},"PUBLIC").setServiceProps(Object.assign({},cA)))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function lA(n){uA(n,(e,t)=>new cy(e,t,new sA)),n.registerVersion(nA,rA)}lA(Ki);/**
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
 */const fy="firebasestorage.googleapis.com",py="storageBucket",hA=2*60*1e3,dA=10*60*1e3,fA=1e3;/**
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
 */class X extends Ce{constructor(e,t,r=0){super(ja(e),`Firebase Storage: ${t} (${ja(e)})`),this.status_=r,this.customData={serverResponse:null},this._baseMessage=this.message,Object.setPrototypeOf(this,X.prototype)}get status(){return this.status_}set status(e){this.status_=e}_codeEquals(e){return ja(e)===this.code}get serverResponse(){return this.customData.serverResponse}set serverResponse(e){this.customData.serverResponse=e,this.customData.serverResponse?this.message=`${this._baseMessage}
${this.customData.serverResponse}`:this.message=this._baseMessage}}var W;(function(n){n.UNKNOWN="unknown",n.OBJECT_NOT_FOUND="object-not-found",n.BUCKET_NOT_FOUND="bucket-not-found",n.PROJECT_NOT_FOUND="project-not-found",n.QUOTA_EXCEEDED="quota-exceeded",n.UNAUTHENTICATED="unauthenticated",n.UNAUTHORIZED="unauthorized",n.UNAUTHORIZED_APP="unauthorized-app",n.RETRY_LIMIT_EXCEEDED="retry-limit-exceeded",n.INVALID_CHECKSUM="invalid-checksum",n.CANCELED="canceled",n.INVALID_EVENT_NAME="invalid-event-name",n.INVALID_URL="invalid-url",n.INVALID_DEFAULT_BUCKET="invalid-default-bucket",n.NO_DEFAULT_BUCKET="no-default-bucket",n.CANNOT_SLICE_BLOB="cannot-slice-blob",n.SERVER_FILE_WRONG_SIZE="server-file-wrong-size",n.NO_DOWNLOAD_URL="no-download-url",n.INVALID_ARGUMENT="invalid-argument",n.INVALID_ARGUMENT_COUNT="invalid-argument-count",n.APP_DELETED="app-deleted",n.INVALID_ROOT_OPERATION="invalid-root-operation",n.INVALID_FORMAT="invalid-format",n.INTERNAL_ERROR="internal-error",n.UNSUPPORTED_ENVIRONMENT="unsupported-environment"})(W||(W={}));function ja(n){return"storage/"+n}function Rl(){const n="An unknown error occurred, please check the error payload for server response.";return new X(W.UNKNOWN,n)}function pA(n){return new X(W.OBJECT_NOT_FOUND,"Object '"+n+"' does not exist.")}function mA(n){return new X(W.QUOTA_EXCEEDED,"Quota for bucket '"+n+"' exceeded, please view quota on https://firebase.google.com/pricing/.")}function gA(){const n="User is not authenticated, please authenticate using Firebase Authentication and try again.";return new X(W.UNAUTHENTICATED,n)}function yA(){return new X(W.UNAUTHORIZED_APP,"This app does not have permission to access Firebase Storage on this project.")}function vA(n){return new X(W.UNAUTHORIZED,"User does not have permission to access '"+n+"'.")}function my(){return new X(W.RETRY_LIMIT_EXCEEDED,"Max retry time for operation exceeded, please try again.")}function gy(){return new X(W.CANCELED,"User canceled the upload/download.")}function wA(n){return new X(W.INVALID_URL,"Invalid URL '"+n+"'.")}function _A(n){return new X(W.INVALID_DEFAULT_BUCKET,"Invalid default bucket '"+n+"'.")}function IA(){return new X(W.NO_DEFAULT_BUCKET,"No default bucket found. Did you set the '"+py+"' property when initializing the app?")}function yy(){return new X(W.CANNOT_SLICE_BLOB,"Cannot slice blob for upload. Please retry the upload.")}function TA(){return new X(W.SERVER_FILE_WRONG_SIZE,"Server recorded incorrect upload file size, please retry the upload.")}function EA(){return new X(W.NO_DOWNLOAD_URL,"The given file does not have any download URLs.")}function bA(n){return new X(W.UNSUPPORTED_ENVIRONMENT,`${n} is missing. Make sure to install the required polyfills. See https://firebase.google.com/docs/web/environments-js-sdk#polyfills for more information.`)}function pr(n){return new X(W.INVALID_ARGUMENT,n)}function vy(){return new X(W.APP_DELETED,"The Firebase app was deleted.")}function wy(n){return new X(W.INVALID_ROOT_OPERATION,"The operation '"+n+"' cannot be performed on a root reference, create a non-root reference using child, such as .child('file.png').")}function wi(n,e){return new X(W.INVALID_FORMAT,"String does not match format '"+n+"': "+e)}function ni(n){throw new X(W.INTERNAL_ERROR,"Internal error: "+n)}/**
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
 */class Re{constructor(e,t){this.bucket=e,this.path_=t}get path(){return this.path_}get isRoot(){return this.path.length===0}fullServerUrl(){const e=encodeURIComponent;return"/b/"+e(this.bucket)+"/o/"+e(this.path)}bucketOnlyServerUrl(){return"/b/"+encodeURIComponent(this.bucket)+"/o"}static makeFromBucketSpec(e,t){let r;try{r=Re.makeFromUrl(e,t)}catch{return new Re(e,"")}if(r.path==="")return r;throw _A(e)}static makeFromUrl(e,t){let r=null;const i="([A-Za-z0-9.\\-_]+)";function s(O){O.path.charAt(O.path.length-1)==="/"&&(O.path_=O.path_.slice(0,-1))}const o="(/(.*))?$",a=new RegExp("^gs://"+i+o,"i"),c={bucket:1,path:3};function u(O){O.path_=decodeURIComponent(O.path)}const l="v[A-Za-z0-9_]+",h=t.replace(/[.]/g,"\\."),d="(/([^?#]*).*)?$",p=new RegExp(`^https?://${h}/${l}/b/${i}/o${d}`,"i"),g={bucket:1,path:3},_=t===fy?"(?:storage.googleapis.com|storage.cloud.google.com)":t,E="([^?#]*)",x=new RegExp(`^https?://${_}/${i}/${E}`,"i"),C=[{regex:a,indices:c,postModify:s},{regex:p,indices:g,postModify:u},{regex:x,indices:{bucket:1,path:2},postModify:u}];for(let O=0;O<C.length;O++){const $=C[O],V=$.regex.exec(e);if(V){const ae=V[$.indices.bucket];let ke=V[$.indices.path];ke||(ke=""),r=new Re(ae,ke),$.postModify(r);break}}if(r==null)throw wA(e);return r}}class SA{constructor(e){this.promise_=Promise.reject(e)}getPromise(){return this.promise_}cancel(e=!1){}}/**
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
 */function kA(n,e,t){let r=1,i=null,s=null,o=!1,a=0;function c(){return a===2}let u=!1;function l(...E){u||(u=!0,e.apply(null,E))}function h(E){i=setTimeout(()=>{i=null,n(p,c())},E)}function d(){s&&clearTimeout(s)}function p(E,...x){if(u){d();return}if(E){d(),l.call(null,E,...x);return}if(c()||o){d(),l.call(null,E,...x);return}r<64&&(r*=2);let C;a===1?(a=2,C=0):C=(r+Math.random())*1e3,h(C)}let g=!1;function _(E){g||(g=!0,d(),!u&&(i!==null?(E||(a=2),clearTimeout(i),h(0)):E||(a=1)))}return h(0),s=setTimeout(()=>{o=!0,_(!0)},t),_}function AA(n){n(!1)}/**
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
 */function RA(n){return n!==void 0}function CA(n){return typeof n=="function"}function NA(n){return typeof n=="object"&&!Array.isArray(n)}function ya(n){return typeof n=="string"||n instanceof String}function Sd(n){return Cl()&&n instanceof Blob}function Cl(){return typeof Blob<"u"&&!Eo()}function Uc(n,e,t,r){if(r<e)throw pr(`Invalid value for '${n}'. Expected ${e} or greater.`);if(r>t)throw pr(`Invalid value for '${n}'. Expected ${t} or less.`)}/**
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
 */function ln(n,e,t){let r=e;return t==null&&(r=`https://${e}`),`${t}://${r}/v0${n}`}function _y(n){const e=encodeURIComponent;let t="?";for(const r in n)if(n.hasOwnProperty(r)){const i=e(r)+"="+e(n[r]);t=t+i+"&"}return t=t.slice(0,-1),t}/**
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
 */var Nn;(function(n){n[n.NO_ERROR=0]="NO_ERROR",n[n.NETWORK_ERROR=1]="NETWORK_ERROR",n[n.ABORT=2]="ABORT"})(Nn||(Nn={}));/**
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
 */function Iy(n,e){const t=n>=500&&n<600,i=[408,429].indexOf(n)!==-1,s=e.indexOf(n)!==-1;return t||i||s}/**
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
 */class DA{constructor(e,t,r,i,s,o,a,c,u,l,h,d=!0){this.url_=e,this.method_=t,this.headers_=r,this.body_=i,this.successCodes_=s,this.additionalRetryCodes_=o,this.callback_=a,this.errorCallback_=c,this.timeout_=u,this.progressCallback_=l,this.connectionFactory_=h,this.retry=d,this.pendingConnection_=null,this.backoffId_=null,this.canceled_=!1,this.appDelete_=!1,this.promise_=new Promise((p,g)=>{this.resolve_=p,this.reject_=g,this.start_()})}start_(){const e=(r,i)=>{if(i){r(!1,new Ps(!1,null,!0));return}const s=this.connectionFactory_();this.pendingConnection_=s;const o=a=>{const c=a.loaded,u=a.lengthComputable?a.total:-1;this.progressCallback_!==null&&this.progressCallback_(c,u)};this.progressCallback_!==null&&s.addUploadProgressListener(o),s.send(this.url_,this.method_,this.body_,this.headers_).then(()=>{this.progressCallback_!==null&&s.removeUploadProgressListener(o),this.pendingConnection_=null;const a=s.getErrorCode()===Nn.NO_ERROR,c=s.getStatus();if(!a||Iy(c,this.additionalRetryCodes_)&&this.retry){const l=s.getErrorCode()===Nn.ABORT;r(!1,new Ps(!1,null,l));return}const u=this.successCodes_.indexOf(c)!==-1;r(!0,new Ps(u,s))})},t=(r,i)=>{const s=this.resolve_,o=this.reject_,a=i.connection;if(i.wasSuccessCode)try{const c=this.callback_(a,a.getResponse());RA(c)?s(c):s()}catch(c){o(c)}else if(a!==null){const c=Rl();c.serverResponse=a.getErrorText(),this.errorCallback_?o(this.errorCallback_(a,c)):o(c)}else if(i.canceled){const c=this.appDelete_?vy():gy();o(c)}else{const c=my();o(c)}};this.canceled_?t(!1,new Ps(!1,null,!0)):this.backoffId_=kA(e,t,this.timeout_)}getPromise(){return this.promise_}cancel(e){this.canceled_=!0,this.appDelete_=e||!1,this.backoffId_!==null&&AA(this.backoffId_),this.pendingConnection_!==null&&this.pendingConnection_.abort()}}class Ps{constructor(e,t,r){this.wasSuccessCode=e,this.connection=t,this.canceled=!!r}}function PA(n,e){e!==null&&e.length>0&&(n.Authorization="Firebase "+e)}function xA(n,e){n["X-Firebase-Storage-Version"]="webjs/"+(e!=null?e:"AppManager")}function OA(n,e){e&&(n["X-Firebase-GMPID"]=e)}function LA(n,e){e!==null&&(n["X-Firebase-AppCheck"]=e)}function MA(n,e,t,r,i,s,o=!0){const a=_y(n.urlParams),c=n.url+a,u=Object.assign({},n.headers);return OA(u,e),PA(u,t),xA(u,s),LA(u,r),new DA(c,n.method,u,n.body,n.successCodes,n.additionalRetryCodes,n.handler,n.errorHandler,n.timeout,n.progressCallback,i,o)}/**
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
 */function UA(){return typeof BlobBuilder<"u"?BlobBuilder:typeof WebKitBlobBuilder<"u"?WebKitBlobBuilder:void 0}function FA(...n){const e=UA();if(e!==void 0){const t=new e;for(let r=0;r<n.length;r++)t.append(n[r]);return t.getBlob()}else{if(Cl())return new Blob(n);throw new X(W.UNSUPPORTED_ENVIRONMENT,"This browser doesn't seem to support creating Blobs")}}function VA(n,e,t){return n.webkitSlice?n.webkitSlice(e,t):n.mozSlice?n.mozSlice(e,t):n.slice?n.slice(e,t):null}/**
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
 */function BA(n){if(typeof atob>"u")throw bA("base-64");return atob(n)}/**
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
 */const Qe={RAW:"raw",BASE64:"base64",BASE64URL:"base64url",DATA_URL:"data_url"};class Ga{constructor(e,t){this.data=e,this.contentType=t||null}}function Ty(n,e){switch(n){case Qe.RAW:return new Ga(Ey(e));case Qe.BASE64:case Qe.BASE64URL:return new Ga(by(n,e));case Qe.DATA_URL:return new Ga($A(e),zA(e))}throw Rl()}function Ey(n){const e=[];for(let t=0;t<n.length;t++){let r=n.charCodeAt(t);if(r<=127)e.push(r);else if(r<=2047)e.push(192|r>>6,128|r&63);else if((r&64512)===55296)if(!(t<n.length-1&&(n.charCodeAt(t+1)&64512)===56320))e.push(239,191,189);else{const s=r,o=n.charCodeAt(++t);r=65536|(s&1023)<<10|o&1023,e.push(240|r>>18,128|r>>12&63,128|r>>6&63,128|r&63)}else(r&64512)===56320?e.push(239,191,189):e.push(224|r>>12,128|r>>6&63,128|r&63)}return new Uint8Array(e)}function qA(n){let e;try{e=decodeURIComponent(n)}catch{throw wi(Qe.DATA_URL,"Malformed data URL.")}return Ey(e)}function by(n,e){switch(n){case Qe.BASE64:{const i=e.indexOf("-")!==-1,s=e.indexOf("_")!==-1;if(i||s)throw wi(n,"Invalid character '"+(i?"-":"_")+"' found: is it base64url encoded?");break}case Qe.BASE64URL:{const i=e.indexOf("+")!==-1,s=e.indexOf("/")!==-1;if(i||s)throw wi(n,"Invalid character '"+(i?"+":"/")+"' found: is it base64 encoded?");e=e.replace(/-/g,"+").replace(/_/g,"/");break}}let t;try{t=BA(e)}catch(i){throw i.message.includes("polyfill")?i:wi(n,"Invalid character found")}const r=new Uint8Array(t.length);for(let i=0;i<t.length;i++)r[i]=t.charCodeAt(i);return r}class Sy{constructor(e){this.base64=!1,this.contentType=null;const t=e.match(/^data:([^,]+)?,/);if(t===null)throw wi(Qe.DATA_URL,"Must be formatted 'data:[<mediatype>][;base64],<data>");const r=t[1]||null;r!=null&&(this.base64=jA(r,";base64"),this.contentType=this.base64?r.substring(0,r.length-7):r),this.rest=e.substring(e.indexOf(",")+1)}}function $A(n){const e=new Sy(n);return e.base64?by(Qe.BASE64,e.rest):qA(e.rest)}function zA(n){return new Sy(n).contentType}function jA(n,e){return n.length>=e.length?n.substring(n.length-e.length)===e:!1}/**
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
 */class yt{constructor(e,t){let r=0,i="";Sd(e)?(this.data_=e,r=e.size,i=e.type):e instanceof ArrayBuffer?(t?this.data_=new Uint8Array(e):(this.data_=new Uint8Array(e.byteLength),this.data_.set(new Uint8Array(e))),r=this.data_.length):e instanceof Uint8Array&&(t?this.data_=e:(this.data_=new Uint8Array(e.length),this.data_.set(e)),r=e.length),this.size_=r,this.type_=i}size(){return this.size_}type(){return this.type_}slice(e,t){if(Sd(this.data_)){const r=this.data_,i=VA(r,e,t);return i===null?null:new yt(i)}else{const r=new Uint8Array(this.data_.buffer,e,t-e);return new yt(r,!0)}}static getBlob(...e){if(Cl()){const t=e.map(r=>r instanceof yt?r.data_:r);return new yt(FA.apply(null,t))}else{const t=e.map(o=>ya(o)?Ty(Qe.RAW,o).data:o.data_);let r=0;t.forEach(o=>{r+=o.byteLength});const i=new Uint8Array(r);let s=0;return t.forEach(o=>{for(let a=0;a<o.length;a++)i[s++]=o[a]}),new yt(i,!0)}}uploadData(){return this.data_}}/**
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
 */function Nl(n){let e;try{e=JSON.parse(n)}catch{return null}return NA(e)?e:null}/**
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
 */function GA(n){if(n.length===0)return null;const e=n.lastIndexOf("/");return e===-1?"":n.slice(0,e)}function KA(n,e){const t=e.split("/").filter(r=>r.length>0).join("/");return n.length===0?t:n+"/"+t}function ky(n){const e=n.lastIndexOf("/",n.length-2);return e===-1?n:n.slice(e+1)}/**
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
 */function WA(n,e){return e}class Pe{constructor(e,t,r,i){this.server=e,this.local=t||e,this.writable=!!r,this.xform=i||WA}}let xs=null;function HA(n){return!ya(n)||n.length<2?n:ky(n)}function va(){if(xs)return xs;const n=[];n.push(new Pe("bucket")),n.push(new Pe("generation")),n.push(new Pe("metageneration")),n.push(new Pe("name","fullPath",!0));function e(s,o){return HA(o)}const t=new Pe("name");t.xform=e,n.push(t);function r(s,o){return o!==void 0?Number(o):o}const i=new Pe("size");return i.xform=r,n.push(i),n.push(new Pe("timeCreated")),n.push(new Pe("updated")),n.push(new Pe("md5Hash",null,!0)),n.push(new Pe("cacheControl",null,!0)),n.push(new Pe("contentDisposition",null,!0)),n.push(new Pe("contentEncoding",null,!0)),n.push(new Pe("contentLanguage",null,!0)),n.push(new Pe("contentType",null,!0)),n.push(new Pe("metadata","customMetadata",!0)),xs=n,xs}function QA(n,e){function t(){const r=n.bucket,i=n.fullPath,s=new Re(r,i);return e._makeStorageReference(s)}Object.defineProperty(n,"ref",{get:t})}function YA(n,e,t){const r={};r.type="file";const i=t.length;for(let s=0;s<i;s++){const o=t[s];r[o.local]=o.xform(r,e[o.server])}return QA(r,n),r}function Ay(n,e,t){const r=Nl(e);return r===null?null:YA(n,r,t)}function JA(n,e,t,r){const i=Nl(e);if(i===null||!ya(i.downloadTokens))return null;const s=i.downloadTokens;if(s.length===0)return null;const o=encodeURIComponent;return s.split(",").map(u=>{const l=n.bucket,h=n.fullPath,d="/b/"+o(l)+"/o/"+o(h),p=ln(d,t,r),g=_y({alt:"media",token:u});return p+g})[0]}function Dl(n,e){const t={},r=e.length;for(let i=0;i<r;i++){const s=e[i];s.writable&&(t[s.server]=n[s.local])}return JSON.stringify(t)}/**
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
 */const kd="prefixes",Ad="items";function XA(n,e,t){const r={prefixes:[],items:[],nextPageToken:t.nextPageToken};if(t[kd])for(const i of t[kd]){const s=i.replace(/\/$/,""),o=n._makeStorageReference(new Re(e,s));r.prefixes.push(o)}if(t[Ad])for(const i of t[Ad]){const s=n._makeStorageReference(new Re(e,i.name));r.items.push(s)}return r}function ZA(n,e,t){const r=Nl(t);return r===null?null:XA(n,e,r)}class Lt{constructor(e,t,r,i){this.url=e,this.method=t,this.handler=r,this.timeout=i,this.urlParams={},this.headers={},this.body=null,this.errorHandler=null,this.progressCallback=null,this.successCodes=[200],this.additionalRetryCodes=[]}}/**
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
 */function ft(n){if(!n)throw Rl()}function wa(n,e){function t(r,i){const s=Ay(n,i,e);return ft(s!==null),s}return t}function eR(n,e){function t(r,i){const s=ZA(n,e,i);return ft(s!==null),s}return t}function tR(n,e){function t(r,i){const s=Ay(n,i,e);return ft(s!==null),JA(s,i,n.host,n._protocol)}return t}function Gr(n){function e(t,r){let i;return t.getStatus()===401?t.getErrorText().includes("Firebase App Check token is invalid")?i=yA():i=gA():t.getStatus()===402?i=mA(n.bucket):t.getStatus()===403?i=vA(n.path):i=r,i.status=t.getStatus(),i.serverResponse=r.serverResponse,i}return e}function _a(n){const e=Gr(n);function t(r,i){let s=e(r,i);return r.getStatus()===404&&(s=pA(n.path)),s.serverResponse=i.serverResponse,s}return t}function Ry(n,e,t){const r=e.fullServerUrl(),i=ln(r,n.host,n._protocol),s="GET",o=n.maxOperationRetryTime,a=new Lt(i,s,wa(n,t),o);return a.errorHandler=_a(e),a}function nR(n,e,t,r,i){const s={};e.isRoot?s.prefix="":s.prefix=e.path+"/",t&&t.length>0&&(s.delimiter=t),r&&(s.pageToken=r),i&&(s.maxResults=i);const o=e.bucketOnlyServerUrl(),a=ln(o,n.host,n._protocol),c="GET",u=n.maxOperationRetryTime,l=new Lt(a,c,eR(n,e.bucket),u);return l.urlParams=s,l.errorHandler=Gr(e),l}function rR(n,e,t){const r=e.fullServerUrl(),i=ln(r,n.host,n._protocol),s="GET",o=n.maxOperationRetryTime,a=new Lt(i,s,tR(n,t),o);return a.errorHandler=_a(e),a}function iR(n,e,t,r){const i=e.fullServerUrl(),s=ln(i,n.host,n._protocol),o="PATCH",a=Dl(t,r),c={"Content-Type":"application/json; charset=utf-8"},u=n.maxOperationRetryTime,l=new Lt(s,o,wa(n,r),u);return l.headers=c,l.body=a,l.errorHandler=_a(e),l}function sR(n,e){const t=e.fullServerUrl(),r=ln(t,n.host,n._protocol),i="DELETE",s=n.maxOperationRetryTime;function o(c,u){}const a=new Lt(r,i,o,s);return a.successCodes=[200,204],a.errorHandler=_a(e),a}function oR(n,e){return n&&n.contentType||e&&e.type()||"application/octet-stream"}function Cy(n,e,t){const r=Object.assign({},t);return r.fullPath=n.path,r.size=e.size(),r.contentType||(r.contentType=oR(null,e)),r}function aR(n,e,t,r,i){const s=e.bucketOnlyServerUrl(),o={"X-Goog-Upload-Protocol":"multipart"};function a(){let C="";for(let O=0;O<2;O++)C=C+Math.random().toString().slice(2);return C}const c=a();o["Content-Type"]="multipart/related; boundary="+c;const u=Cy(e,r,i),l=Dl(u,t),h="--"+c+`\r
Content-Type: application/json; charset=utf-8\r
\r
`+l+`\r
--`+c+`\r
Content-Type: `+u.contentType+`\r
\r
`,d=`\r
--`+c+"--",p=yt.getBlob(h,r,d);if(p===null)throw yy();const g={name:u.fullPath},_=ln(s,n.host,n._protocol),E="POST",x=n.maxUploadRetryTime,q=new Lt(_,E,wa(n,t),x);return q.urlParams=g,q.headers=o,q.body=p.uploadData(),q.errorHandler=Gr(e),q}class To{constructor(e,t,r,i){this.current=e,this.total=t,this.finalized=!!r,this.metadata=i||null}}function Pl(n,e){let t=null;try{t=n.getResponseHeader("X-Goog-Upload-Status")}catch{ft(!1)}return ft(!!t&&(e||["active"]).indexOf(t)!==-1),t}function cR(n,e,t,r,i){const s=e.bucketOnlyServerUrl(),o=Cy(e,r,i),a={name:o.fullPath},c=ln(s,n.host,n._protocol),u="POST",l={"X-Goog-Upload-Protocol":"resumable","X-Goog-Upload-Command":"start","X-Goog-Upload-Header-Content-Length":`${r.size()}`,"X-Goog-Upload-Header-Content-Type":o.contentType,"Content-Type":"application/json; charset=utf-8"},h=Dl(o,t),d=n.maxUploadRetryTime;function p(_){Pl(_);let E;try{E=_.getResponseHeader("X-Goog-Upload-URL")}catch{ft(!1)}return ft(ya(E)),E}const g=new Lt(c,u,p,d);return g.urlParams=a,g.headers=l,g.body=h,g.errorHandler=Gr(e),g}function uR(n,e,t,r){const i={"X-Goog-Upload-Command":"query"};function s(u){const l=Pl(u,["active","final"]);let h=null;try{h=u.getResponseHeader("X-Goog-Upload-Size-Received")}catch{ft(!1)}h||ft(!1);const d=Number(h);return ft(!isNaN(d)),new To(d,r.size(),l==="final")}const o="POST",a=n.maxUploadRetryTime,c=new Lt(t,o,s,a);return c.headers=i,c.errorHandler=Gr(e),c}const Rd=256*1024;function lR(n,e,t,r,i,s,o,a){const c=new To(0,0);if(o?(c.current=o.current,c.total=o.total):(c.current=0,c.total=r.size()),r.size()!==c.total)throw TA();const u=c.total-c.current;let l=u;i>0&&(l=Math.min(l,i));const h=c.current,d=h+l;let p="";l===0?p="finalize":u===l?p="upload, finalize":p="upload";const g={"X-Goog-Upload-Command":p,"X-Goog-Upload-Offset":`${c.current}`},_=r.slice(h,d);if(_===null)throw yy();function E(O,$){const V=Pl(O,["active","final"]),ae=c.current+l,ke=r.size();let hn;return V==="final"?hn=wa(e,s)(O,$):hn=null,new To(ae,ke,V==="final",hn)}const x="POST",q=e.maxUploadRetryTime,C=new Lt(t,x,E,q);return C.headers=g,C.body=_.uploadData(),C.progressCallback=a||null,C.errorHandler=Gr(n),C}/**
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
 */const hR={STATE_CHANGED:"state_changed"},Le={RUNNING:"running",PAUSED:"paused",SUCCESS:"success",CANCELED:"canceled",ERROR:"error"};function Ka(n){switch(n){case"running":case"pausing":case"canceling":return Le.RUNNING;case"paused":return Le.PAUSED;case"success":return Le.SUCCESS;case"canceled":return Le.CANCELED;case"error":return Le.ERROR;default:return Le.ERROR}}/**
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
 */class dR{constructor(e,t,r){if(CA(e)||t!=null||r!=null)this.next=e,this.error=t!=null?t:void 0,this.complete=r!=null?r:void 0;else{const s=e;this.next=s.next,this.error=s.error,this.complete=s.complete}}}/**
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
 */function nr(n){return(...e)=>{Promise.resolve().then(()=>n(...e))}}class fR{constructor(){this.sent_=!1,this.xhr_=new XMLHttpRequest,this.initXhr(),this.errorCode_=Nn.NO_ERROR,this.sendPromise_=new Promise(e=>{this.xhr_.addEventListener("abort",()=>{this.errorCode_=Nn.ABORT,e()}),this.xhr_.addEventListener("error",()=>{this.errorCode_=Nn.NETWORK_ERROR,e()}),this.xhr_.addEventListener("load",()=>{e()})})}send(e,t,r,i){if(this.sent_)throw ni("cannot .send() more than once");if(this.sent_=!0,this.xhr_.open(t,e,!0),i!==void 0)for(const s in i)i.hasOwnProperty(s)&&this.xhr_.setRequestHeader(s,i[s].toString());return r!==void 0?this.xhr_.send(r):this.xhr_.send(),this.sendPromise_}getErrorCode(){if(!this.sent_)throw ni("cannot .getErrorCode() before sending");return this.errorCode_}getStatus(){if(!this.sent_)throw ni("cannot .getStatus() before sending");try{return this.xhr_.status}catch{return-1}}getResponse(){if(!this.sent_)throw ni("cannot .getResponse() before sending");return this.xhr_.response}getErrorText(){if(!this.sent_)throw ni("cannot .getErrorText() before sending");return this.xhr_.statusText}abort(){this.xhr_.abort()}getResponseHeader(e){return this.xhr_.getResponseHeader(e)}addUploadProgressListener(e){this.xhr_.upload!=null&&this.xhr_.upload.addEventListener("progress",e)}removeUploadProgressListener(e){this.xhr_.upload!=null&&this.xhr_.upload.removeEventListener("progress",e)}}class pR extends fR{initXhr(){this.xhr_.responseType="text"}}function at(){return new pR}/**
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
 */class Ny{constructor(e,t,r=null){this._transferred=0,this._needToFetchStatus=!1,this._needToFetchMetadata=!1,this._observers=[],this._error=void 0,this._uploadUrl=void 0,this._request=void 0,this._chunkMultiplier=1,this._resolve=void 0,this._reject=void 0,this._ref=e,this._blob=t,this._metadata=r,this._mappings=va(),this._resumable=this._shouldDoResumable(this._blob),this._state="running",this._errorHandler=i=>{if(this._request=void 0,this._chunkMultiplier=1,i._codeEquals(W.CANCELED))this._needToFetchStatus=!0,this.completeTransitions_();else{const s=this.isExponentialBackoffExpired();if(Iy(i.status,[]))if(s)i=my();else{this.sleepTime=Math.max(this.sleepTime*2,fA),this._needToFetchStatus=!0,this.completeTransitions_();return}this._error=i,this._transition("error")}},this._metadataErrorHandler=i=>{this._request=void 0,i._codeEquals(W.CANCELED)?this.completeTransitions_():(this._error=i,this._transition("error"))},this.sleepTime=0,this.maxSleepTime=this._ref.storage.maxUploadRetryTime,this._promise=new Promise((i,s)=>{this._resolve=i,this._reject=s,this._start()}),this._promise.then(null,()=>{})}isExponentialBackoffExpired(){return this.sleepTime>this.maxSleepTime}_makeProgressCallback(){const e=this._transferred;return t=>this._updateProgress(e+t)}_shouldDoResumable(e){return e.size()>256*1024}_start(){this._state==="running"&&this._request===void 0&&(this._resumable?this._uploadUrl===void 0?this._createResumable():this._needToFetchStatus?this._fetchStatus():this._needToFetchMetadata?this._fetchMetadata():this.pendingTimeout=setTimeout(()=>{this.pendingTimeout=void 0,this._continueUpload()},this.sleepTime):this._oneShotUpload())}_resolveToken(e){Promise.all([this._ref.storage._getAuthToken(),this._ref.storage._getAppCheckToken()]).then(([t,r])=>{switch(this._state){case"running":e(t,r);break;case"canceling":this._transition("canceled");break;case"pausing":this._transition("paused");break}})}_createResumable(){this._resolveToken((e,t)=>{const r=cR(this._ref.storage,this._ref._location,this._mappings,this._blob,this._metadata),i=this._ref.storage._makeRequest(r,at,e,t);this._request=i,i.getPromise().then(s=>{this._request=void 0,this._uploadUrl=s,this._needToFetchStatus=!1,this.completeTransitions_()},this._errorHandler)})}_fetchStatus(){const e=this._uploadUrl;this._resolveToken((t,r)=>{const i=uR(this._ref.storage,this._ref._location,e,this._blob),s=this._ref.storage._makeRequest(i,at,t,r);this._request=s,s.getPromise().then(o=>{o=o,this._request=void 0,this._updateProgress(o.current),this._needToFetchStatus=!1,o.finalized&&(this._needToFetchMetadata=!0),this.completeTransitions_()},this._errorHandler)})}_continueUpload(){const e=Rd*this._chunkMultiplier,t=new To(this._transferred,this._blob.size()),r=this._uploadUrl;this._resolveToken((i,s)=>{let o;try{o=lR(this._ref._location,this._ref.storage,r,this._blob,e,this._mappings,t,this._makeProgressCallback())}catch(c){this._error=c,this._transition("error");return}const a=this._ref.storage._makeRequest(o,at,i,s,!1);this._request=a,a.getPromise().then(c=>{this._increaseMultiplier(),this._request=void 0,this._updateProgress(c.current),c.finalized?(this._metadata=c.metadata,this._transition("success")):this.completeTransitions_()},this._errorHandler)})}_increaseMultiplier(){Rd*this._chunkMultiplier*2<32*1024*1024&&(this._chunkMultiplier*=2)}_fetchMetadata(){this._resolveToken((e,t)=>{const r=Ry(this._ref.storage,this._ref._location,this._mappings),i=this._ref.storage._makeRequest(r,at,e,t);this._request=i,i.getPromise().then(s=>{this._request=void 0,this._metadata=s,this._transition("success")},this._metadataErrorHandler)})}_oneShotUpload(){this._resolveToken((e,t)=>{const r=aR(this._ref.storage,this._ref._location,this._mappings,this._blob,this._metadata),i=this._ref.storage._makeRequest(r,at,e,t);this._request=i,i.getPromise().then(s=>{this._request=void 0,this._metadata=s,this._updateProgress(this._blob.size()),this._transition("success")},this._errorHandler)})}_updateProgress(e){const t=this._transferred;this._transferred=e,this._transferred!==t&&this._notifyObservers()}_transition(e){if(this._state!==e)switch(e){case"canceling":case"pausing":this._state=e,this._request!==void 0?this._request.cancel():this.pendingTimeout&&(clearTimeout(this.pendingTimeout),this.pendingTimeout=void 0,this.completeTransitions_());break;case"running":const t=this._state==="paused";this._state=e,t&&(this._notifyObservers(),this._start());break;case"paused":this._state=e,this._notifyObservers();break;case"canceled":this._error=gy(),this._state=e,this._notifyObservers();break;case"error":this._state=e,this._notifyObservers();break;case"success":this._state=e,this._notifyObservers();break}}completeTransitions_(){switch(this._state){case"pausing":this._transition("paused");break;case"canceling":this._transition("canceled");break;case"running":this._start();break}}get snapshot(){const e=Ka(this._state);return{bytesTransferred:this._transferred,totalBytes:this._blob.size(),state:e,metadata:this._metadata,task:this,ref:this._ref}}on(e,t,r,i){const s=new dR(t||void 0,r||void 0,i||void 0);return this._addObserver(s),()=>{this._removeObserver(s)}}then(e,t){return this._promise.then(e,t)}catch(e){return this.then(null,e)}_addObserver(e){this._observers.push(e),this._notifyObserver(e)}_removeObserver(e){const t=this._observers.indexOf(e);t!==-1&&this._observers.splice(t,1)}_notifyObservers(){this._finishPromise(),this._observers.slice().forEach(t=>{this._notifyObserver(t)})}_finishPromise(){if(this._resolve!==void 0){let e=!0;switch(Ka(this._state)){case Le.SUCCESS:nr(this._resolve.bind(null,this.snapshot))();break;case Le.CANCELED:case Le.ERROR:const t=this._reject;nr(t.bind(null,this._error))();break;default:e=!1;break}e&&(this._resolve=void 0,this._reject=void 0)}}_notifyObserver(e){switch(Ka(this._state)){case Le.RUNNING:case Le.PAUSED:e.next&&nr(e.next.bind(e,this.snapshot))();break;case Le.SUCCESS:e.complete&&nr(e.complete.bind(e))();break;case Le.CANCELED:case Le.ERROR:e.error&&nr(e.error.bind(e,this._error))();break;default:e.error&&nr(e.error.bind(e,this._error))()}}resume(){const e=this._state==="paused"||this._state==="pausing";return e&&this._transition("running"),e}pause(){const e=this._state==="running";return e&&this._transition("pausing"),e}cancel(){const e=this._state==="running"||this._state==="pausing";return e&&this._transition("canceling"),e}}/**
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
 */class jn{constructor(e,t){this._service=e,t instanceof Re?this._location=t:this._location=Re.makeFromUrl(t,e.host)}toString(){return"gs://"+this._location.bucket+"/"+this._location.path}_newRef(e,t){return new jn(e,t)}get root(){const e=new Re(this._location.bucket,"");return this._newRef(this._service,e)}get bucket(){return this._location.bucket}get fullPath(){return this._location.path}get name(){return ky(this._location.path)}get storage(){return this._service}get parent(){const e=GA(this._location.path);if(e===null)return null;const t=new Re(this._location.bucket,e);return new jn(this._service,t)}_throwIfRoot(e){if(this._location.path==="")throw wy(e)}}function mR(n,e,t){return n._throwIfRoot("uploadBytesResumable"),new Ny(n,new yt(e),t)}function gR(n){const e={prefixes:[],items:[]};return Dy(n,e).then(()=>e)}async function Dy(n,e,t){const i=await Py(n,{pageToken:t});e.prefixes.push(...i.prefixes),e.items.push(...i.items),i.nextPageToken!=null&&await Dy(n,e,i.nextPageToken)}function Py(n,e){e!=null&&typeof e.maxResults=="number"&&Uc("options.maxResults",1,1e3,e.maxResults);const t=e||{},r=nR(n.storage,n._location,"/",t.pageToken,t.maxResults);return n.storage.makeRequestWithTokens(r,at)}function yR(n){n._throwIfRoot("getMetadata");const e=Ry(n.storage,n._location,va());return n.storage.makeRequestWithTokens(e,at)}function vR(n,e){n._throwIfRoot("updateMetadata");const t=iR(n.storage,n._location,e,va());return n.storage.makeRequestWithTokens(t,at)}function wR(n){n._throwIfRoot("getDownloadURL");const e=rR(n.storage,n._location,va());return n.storage.makeRequestWithTokens(e,at).then(t=>{if(t===null)throw EA();return t})}function _R(n){n._throwIfRoot("deleteObject");const e=sR(n.storage,n._location);return n.storage.makeRequestWithTokens(e,at)}function xy(n,e){const t=KA(n._location.path,e),r=new Re(n._location.bucket,t);return new jn(n.storage,r)}/**
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
 */function IR(n){return/^[A-Za-z]+:\/\//.test(n)}function TR(n,e){return new jn(n,e)}function Oy(n,e){if(n instanceof xl){const t=n;if(t._bucket==null)throw IA();const r=new jn(t,t._bucket);return e!=null?Oy(r,e):r}else return e!==void 0?xy(n,e):n}function ER(n,e){if(e&&IR(e)){if(n instanceof xl)return TR(n,e);throw pr("To use ref(service, url), the first argument must be a Storage instance.")}else return Oy(n,e)}function Cd(n,e){const t=e==null?void 0:e[py];return t==null?null:Re.makeFromBucketSpec(t,n)}function bR(n,e,t,r={}){n.host=`${e}:${t}`,n._protocol="http";const{mockUserToken:i}=r;i&&(n._overrideAuthToken=typeof i=="string"?i:Vd(i,n.app.options.projectId))}class xl{constructor(e,t,r,i,s){this.app=e,this._authProvider=t,this._appCheckProvider=r,this._url=i,this._firebaseVersion=s,this._bucket=null,this._host=fy,this._protocol="https",this._appId=null,this._deleted=!1,this._maxOperationRetryTime=hA,this._maxUploadRetryTime=dA,this._requests=new Set,i!=null?this._bucket=Re.makeFromBucketSpec(i,this._host):this._bucket=Cd(this._host,this.app.options)}get host(){return this._host}set host(e){this._host=e,this._url!=null?this._bucket=Re.makeFromBucketSpec(this._url,e):this._bucket=Cd(e,this.app.options)}get maxUploadRetryTime(){return this._maxUploadRetryTime}set maxUploadRetryTime(e){Uc("time",0,Number.POSITIVE_INFINITY,e),this._maxUploadRetryTime=e}get maxOperationRetryTime(){return this._maxOperationRetryTime}set maxOperationRetryTime(e){Uc("time",0,Number.POSITIVE_INFINITY,e),this._maxOperationRetryTime=e}async _getAuthToken(){if(this._overrideAuthToken)return this._overrideAuthToken;const e=this._authProvider.getImmediate({optional:!0});if(e){const t=await e.getToken();if(t!==null)return t.accessToken}return null}async _getAppCheckToken(){const e=this._appCheckProvider.getImmediate({optional:!0});return e?(await e.getToken()).token:null}_delete(){return this._deleted||(this._deleted=!0,this._requests.forEach(e=>e.cancel()),this._requests.clear()),Promise.resolve()}_makeStorageReference(e){return new jn(this,e)}_makeRequest(e,t,r,i,s=!0){if(this._deleted)return new SA(vy());{const o=MA(e,this._appId,r,i,t,this._firebaseVersion,s);return this._requests.add(o),o.getPromise().then(()=>this._requests.delete(o),()=>this._requests.delete(o)),o}}async makeRequestWithTokens(e,t){const[r,i]=await Promise.all([this._getAuthToken(),this._getAppCheckToken()]);return this._makeRequest(e,t,r,i).getPromise()}}const Nd="@firebase/storage",Dd="0.11.2";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const SR="storage";function kR(n,e,t){return n=S(n),mR(n,e,t)}function AR(n){return n=S(n),yR(n)}function RR(n,e){return n=S(n),vR(n,e)}function CR(n,e){return n=S(n),Py(n,e)}function NR(n){return n=S(n),gR(n)}function DR(n){return n=S(n),wR(n)}function PR(n){return n=S(n),_R(n)}function Pd(n,e){return n=S(n),ER(n,e)}function xR(n,e){return xy(n,e)}function OR(n,e,t,r={}){bR(n,e,t,r)}function LR(n,{instanceIdentifier:e}){const t=n.getProvider("app").getImmediate(),r=n.getProvider("auth-internal"),i=n.getProvider("app-check-internal");return new xl(t,r,i,e,Ct)}function MR(){bt(new Je(SR,LR,"PUBLIC").setMultipleInstances(!0)),Ye(Nd,Dd,""),Ye(Nd,Dd,"esm2017")}MR();/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Os{constructor(e,t,r){this._delegate=e,this.task=t,this.ref=r}get bytesTransferred(){return this._delegate.bytesTransferred}get metadata(){return this._delegate.metadata}get state(){return this._delegate.state}get totalBytes(){return this._delegate.totalBytes}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class xd{constructor(e,t){this._delegate=e,this._ref=t,this.cancel=this._delegate.cancel.bind(this._delegate),this.catch=this._delegate.catch.bind(this._delegate),this.pause=this._delegate.pause.bind(this._delegate),this.resume=this._delegate.resume.bind(this._delegate)}get snapshot(){return new Os(this._delegate.snapshot,this,this._ref)}then(e,t){return this._delegate.then(r=>{if(e)return e(new Os(r,this,this._ref))},t)}on(e,t,r,i){let s;return t&&(typeof t=="function"?s=o=>t(new Os(o,this,this._ref)):s={next:t.next?o=>t.next(new Os(o,this,this._ref)):void 0,complete:t.complete||void 0,error:t.error||void 0}),this._delegate.on(e,s,r||void 0,i||void 0)}}class Od{constructor(e,t){this._delegate=e,this._service=t}get prefixes(){return this._delegate.prefixes.map(e=>new Et(e,this._service))}get items(){return this._delegate.items.map(e=>new Et(e,this._service))}get nextPageToken(){return this._delegate.nextPageToken||null}}/**
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
 */class Et{constructor(e,t){this._delegate=e,this.storage=t}get name(){return this._delegate.name}get bucket(){return this._delegate.bucket}get fullPath(){return this._delegate.fullPath}toString(){return this._delegate.toString()}child(e){const t=xR(this._delegate,e);return new Et(t,this.storage)}get root(){return new Et(this._delegate.root,this.storage)}get parent(){const e=this._delegate.parent;return e==null?null:new Et(e,this.storage)}put(e,t){return this._throwIfRoot("put"),new xd(kR(this._delegate,e,t),this)}putString(e,t=Qe.RAW,r){this._throwIfRoot("putString");const i=Ty(t,e),s=Object.assign({},r);return s.contentType==null&&i.contentType!=null&&(s.contentType=i.contentType),new xd(new Ny(this._delegate,new yt(i.data,!0),s),this)}listAll(){return NR(this._delegate).then(e=>new Od(e,this.storage))}list(e){return CR(this._delegate,e||void 0).then(t=>new Od(t,this.storage))}getMetadata(){return AR(this._delegate)}updateMetadata(e){return RR(this._delegate,e)}getDownloadURL(){return DR(this._delegate)}delete(){return this._throwIfRoot("delete"),PR(this._delegate)}_throwIfRoot(e){if(this._delegate._location.path==="")throw wy(e)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ly{constructor(e,t){this.app=e,this._delegate=t}get maxOperationRetryTime(){return this._delegate.maxOperationRetryTime}get maxUploadRetryTime(){return this._delegate.maxUploadRetryTime}ref(e){if(Ld(e))throw pr("ref() expected a child path but got a URL, use refFromURL instead.");return new Et(Pd(this._delegate,e),this)}refFromURL(e){if(!Ld(e))throw pr("refFromURL() expected a full URL but got a child path, use ref() instead.");try{Re.makeFromUrl(e,this._delegate.host)}catch{throw pr("refFromUrl() expected a valid full URL but got an invalid one.")}return new Et(Pd(this._delegate,e),this)}setMaxUploadRetryTime(e){this._delegate.maxUploadRetryTime=e}setMaxOperationRetryTime(e){this._delegate.maxOperationRetryTime=e}useEmulator(e,t,r={}){OR(this._delegate,e,t,r)}}function Ld(n){return/^[A-Za-z]+:\/\//.test(n)}const UR="@firebase/storage-compat",FR="0.3.2";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const VR="storage-compat";function BR(n,{instanceIdentifier:e}){const t=n.getProvider("app-compat").getImmediate(),r=n.getProvider("storage").getImmediate({identifier:e});return new Ly(t,r)}function qR(n){const e={TaskState:Le,TaskEvent:hR,StringFormat:Qe,Storage:Ly,Reference:Et};n.INTERNAL.registerComponent(new Je(VR,BR,"PUBLIC").setServiceProps(e).setMultipleInstances(!0)),n.registerVersion(UR,FR)}qR(Ki);export{ay as c,Ki as f,jk as o,_o as r,zg as s,Gk as u};
