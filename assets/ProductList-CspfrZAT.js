const __vite__mapDeps=(i,m=__vite__mapDeps,d=(m.f||(m.f=["assets/Card-Cv4-rSXc.js","assets/index-D_nlKQhL.js","assets/index-OeGws0Lg.css","assets/ProductModal-DNBJbZTj.js"])))=>i.map(i=>d[i]);
import{j as O,u as Be,r as j,s as we,a as at,R as De,_ as Ue,b as Z,S as ct,c as ge,d as lt}from"./index-D_nlKQhL.js";const ut=()=>O.jsxs("div",{className:"border rounded-lg p-4 shadow bg-gray-200 animate-shimmer relative overflow-hidden",children:[O.jsx("div",{className:"w-full h-48 bg-gray-300 rounded"}),O.jsx("div",{className:"h-6 bg-gray-300 rounded mt-4"}),O.jsx("div",{className:"h-4 bg-gray-300 rounded mt-2 w-3/4"}),O.jsx("div",{className:"h-4 bg-gray-300 rounded mt-2 w-1/2"}),O.jsx("div",{className:"absolute inset-0 bg-gradient-to-r from-transparent via-gray-100 to-transparent animate-shimmer"})]});function ke(e,t){return function(){return e.apply(t,arguments)}}const{toString:ft}=Object.prototype,{getPrototypeOf:fe}=Object,K=(e=>t=>{const n=ft.call(t);return e[n]||(e[n]=n.slice(8,-1).toLowerCase())})(Object.create(null)),N=e=>(e=e.toLowerCase(),t=>K(t)===e),G=e=>t=>typeof t===e,{isArray:k}=Array,M=G("undefined");function dt(e){return e!==null&&!M(e)&&e.constructor!==null&&!M(e.constructor)&&P(e.constructor.isBuffer)&&e.constructor.isBuffer(e)}const qe=N("ArrayBuffer");function pt(e){let t;return typeof ArrayBuffer<"u"&&ArrayBuffer.isView?t=ArrayBuffer.isView(e):t=e&&e.buffer&&qe(e.buffer),t}const ht=G("string"),P=G("function"),He=G("number"),X=e=>e!==null&&typeof e=="object",mt=e=>e===!0||e===!1,J=e=>{if(K(e)!=="object")return!1;const t=fe(e);return(t===null||t===Object.prototype||Object.getPrototypeOf(t)===null)&&!(Symbol.toStringTag in e)&&!(Symbol.iterator in e)},yt=N("Date"),bt=N("File"),wt=N("Blob"),gt=N("FileList"),Et=e=>X(e)&&P(e.pipe),St=e=>{let t;return e&&(typeof FormData=="function"&&e instanceof FormData||P(e.append)&&((t=K(e))==="formdata"||t==="object"&&P(e.toString)&&e.toString()==="[object FormData]"))},Rt=N("URLSearchParams"),[Ot,Tt,At,xt]=["ReadableStream","Request","Response","Headers"].map(N),Pt=e=>e.trim?e.trim():e.replace(/^[\s\uFEFF\xA0]+|[\s\uFEFF\xA0]+$/g,"");function I(e,t,{allOwnKeys:n=!1}={}){if(e===null||typeof e>"u")return;let r,s;if(typeof e!="object"&&(e=[e]),k(e))for(r=0,s=e.length;r<s;r++)t.call(null,e[r],r,e);else{const i=n?Object.getOwnPropertyNames(e):Object.keys(e),o=i.length;let c;for(r=0;r<o;r++)c=i[r],t.call(null,e[c],c,e)}}function Me(e,t){t=t.toLowerCase();const n=Object.keys(e);let r=n.length,s;for(;r-- >0;)if(s=n[r],t===s.toLowerCase())return s;return null}const B=typeof globalThis<"u"?globalThis:typeof self<"u"?self:typeof window<"u"?window:global,Ie=e=>!M(e)&&e!==B;function se(){const{caseless:e}=Ie(this)&&this||{},t={},n=(r,s)=>{const i=e&&Me(t,s)||s;J(t[i])&&J(r)?t[i]=se(t[i],r):J(r)?t[i]=se({},r):k(r)?t[i]=r.slice():t[i]=r};for(let r=0,s=arguments.length;r<s;r++)arguments[r]&&I(arguments[r],n);return t}const Nt=(e,t,n,{allOwnKeys:r}={})=>(I(t,(s,i)=>{n&&P(s)?e[i]=ke(s,n):e[i]=s},{allOwnKeys:r}),e),Ct=e=>(e.charCodeAt(0)===65279&&(e=e.slice(1)),e),_t=(e,t,n,r)=>{e.prototype=Object.create(t.prototype,r),e.prototype.constructor=e,Object.defineProperty(e,"super",{value:t.prototype}),n&&Object.assign(e.prototype,n)},Lt=(e,t,n,r)=>{let s,i,o;const c={};if(t=t||{},e==null)return t;do{for(s=Object.getOwnPropertyNames(e),i=s.length;i-- >0;)o=s[i],(!r||r(o,e,t))&&!c[o]&&(t[o]=e[o],c[o]=!0);e=n!==!1&&fe(e)}while(e&&(!n||n(e,t))&&e!==Object.prototype);return t},Ft=(e,t,n)=>{e=String(e),(n===void 0||n>e.length)&&(n=e.length),n-=t.length;const r=e.indexOf(t,n);return r!==-1&&r===n},jt=e=>{if(!e)return null;if(k(e))return e;let t=e.length;if(!He(t))return null;const n=new Array(t);for(;t-- >0;)n[t]=e[t];return n},Bt=(e=>t=>e&&t instanceof e)(typeof Uint8Array<"u"&&fe(Uint8Array)),Dt=(e,t)=>{const r=(e&&e[Symbol.iterator]).call(e);let s;for(;(s=r.next())&&!s.done;){const i=s.value;t.call(e,i[0],i[1])}},Ut=(e,t)=>{let n;const r=[];for(;(n=e.exec(t))!==null;)r.push(n);return r},kt=N("HTMLFormElement"),qt=e=>e.toLowerCase().replace(/[-_\s]([a-z\d])(\w*)/g,function(n,r,s){return r.toUpperCase()+s}),Ee=(({hasOwnProperty:e})=>(t,n)=>e.call(t,n))(Object.prototype),Ht=N("RegExp"),ve=(e,t)=>{const n=Object.getOwnPropertyDescriptors(e),r={};I(n,(s,i)=>{let o;(o=t(s,i,e))!==!1&&(r[i]=o||s)}),Object.defineProperties(e,r)},Mt=e=>{ve(e,(t,n)=>{if(P(e)&&["arguments","caller","callee"].indexOf(n)!==-1)return!1;const r=e[n];if(P(r)){if(t.enumerable=!1,"writable"in t){t.writable=!1;return}t.set||(t.set=()=>{throw Error("Can not rewrite read-only method '"+n+"'")})}})},It=(e,t)=>{const n={},r=s=>{s.forEach(i=>{n[i]=!0})};return k(e)?r(e):r(String(e).split(t)),n},vt=()=>{},zt=(e,t)=>e!=null&&Number.isFinite(e=+e)?e:t,ee="abcdefghijklmnopqrstuvwxyz",Se="0123456789",ze={DIGIT:Se,ALPHA:ee,ALPHA_DIGIT:ee+ee.toUpperCase()+Se},Jt=(e=16,t=ze.ALPHA_DIGIT)=>{let n="";const{length:r}=t;for(;e--;)n+=t[Math.random()*r|0];return n};function Vt(e){return!!(e&&P(e.append)&&e[Symbol.toStringTag]==="FormData"&&e[Symbol.iterator])}const $t=e=>{const t=new Array(10),n=(r,s)=>{if(X(r)){if(t.indexOf(r)>=0)return;if(!("toJSON"in r)){t[s]=r;const i=k(r)?[]:{};return I(r,(o,c)=>{const d=n(o,s+1);!M(d)&&(i[c]=d)}),t[s]=void 0,i}}return r};return n(e,0)},Wt=N("AsyncFunction"),Kt=e=>e&&(X(e)||P(e))&&P(e.then)&&P(e.catch),Je=((e,t)=>e?setImmediate:t?((n,r)=>(B.addEventListener("message",({source:s,data:i})=>{s===B&&i===n&&r.length&&r.shift()()},!1),s=>{r.push(s),B.postMessage(n,"*")}))(`axios@${Math.random()}`,[]):n=>setTimeout(n))(typeof setImmediate=="function",P(B.postMessage)),Gt=typeof queueMicrotask<"u"?queueMicrotask.bind(B):typeof process<"u"&&process.nextTick||Je,a={isArray:k,isArrayBuffer:qe,isBuffer:dt,isFormData:St,isArrayBufferView:pt,isString:ht,isNumber:He,isBoolean:mt,isObject:X,isPlainObject:J,isReadableStream:Ot,isRequest:Tt,isResponse:At,isHeaders:xt,isUndefined:M,isDate:yt,isFile:bt,isBlob:wt,isRegExp:Ht,isFunction:P,isStream:Et,isURLSearchParams:Rt,isTypedArray:Bt,isFileList:gt,forEach:I,merge:se,extend:Nt,trim:Pt,stripBOM:Ct,inherits:_t,toFlatObject:Lt,kindOf:K,kindOfTest:N,endsWith:Ft,toArray:jt,forEachEntry:Dt,matchAll:Ut,isHTMLForm:kt,hasOwnProperty:Ee,hasOwnProp:Ee,reduceDescriptors:ve,freezeMethods:Mt,toObjectSet:It,toCamelCase:qt,noop:vt,toFiniteNumber:zt,findKey:Me,global:B,isContextDefined:Ie,ALPHABET:ze,generateString:Jt,isSpecCompliantForm:Vt,toJSONObject:$t,isAsyncFn:Wt,isThenable:Kt,setImmediate:Je,asap:Gt};function b(e,t,n,r,s){Error.call(this),Error.captureStackTrace?Error.captureStackTrace(this,this.constructor):this.stack=new Error().stack,this.message=e,this.name="AxiosError",t&&(this.code=t),n&&(this.config=n),r&&(this.request=r),s&&(this.response=s,this.status=s.status?s.status:null)}a.inherits(b,Error,{toJSON:function(){return{message:this.message,name:this.name,description:this.description,number:this.number,fileName:this.fileName,lineNumber:this.lineNumber,columnNumber:this.columnNumber,stack:this.stack,config:a.toJSONObject(this.config),code:this.code,status:this.status}}});const Ve=b.prototype,$e={};["ERR_BAD_OPTION_VALUE","ERR_BAD_OPTION","ECONNABORTED","ETIMEDOUT","ERR_NETWORK","ERR_FR_TOO_MANY_REDIRECTS","ERR_DEPRECATED","ERR_BAD_RESPONSE","ERR_BAD_REQUEST","ERR_CANCELED","ERR_NOT_SUPPORT","ERR_INVALID_URL"].forEach(e=>{$e[e]={value:e}});Object.defineProperties(b,$e);Object.defineProperty(Ve,"isAxiosError",{value:!0});b.from=(e,t,n,r,s,i)=>{const o=Object.create(Ve);return a.toFlatObject(e,o,function(d){return d!==Error.prototype},c=>c!=="isAxiosError"),b.call(o,e.message,t,n,r,s),o.cause=e,o.name=e.name,i&&Object.assign(o,i),o};const Xt=null;function oe(e){return a.isPlainObject(e)||a.isArray(e)}function We(e){return a.endsWith(e,"[]")?e.slice(0,-2):e}function Re(e,t,n){return e?e.concat(t).map(function(s,i){return s=We(s),!n&&i?"["+s+"]":s}).join(n?".":""):t}function Yt(e){return a.isArray(e)&&!e.some(oe)}const Qt=a.toFlatObject(a,{},null,function(t){return/^is[A-Z]/.test(t)});function Y(e,t,n){if(!a.isObject(e))throw new TypeError("target must be an object");t=t||new FormData,n=a.toFlatObject(n,{metaTokens:!0,dots:!1,indexes:!1},!1,function(y,p){return!a.isUndefined(p[y])});const r=n.metaTokens,s=n.visitor||u,i=n.dots,o=n.indexes,d=(n.Blob||typeof Blob<"u"&&Blob)&&a.isSpecCompliantForm(t);if(!a.isFunction(s))throw new TypeError("visitor must be a function");function l(f){if(f===null)return"";if(a.isDate(f))return f.toISOString();if(!d&&a.isBlob(f))throw new b("Blob is not supported. Use a Buffer instead.");return a.isArrayBuffer(f)||a.isTypedArray(f)?d&&typeof Blob=="function"?new Blob([f]):Buffer.from(f):f}function u(f,y,p){let w=f;if(f&&!p&&typeof f=="object"){if(a.endsWith(y,"{}"))y=r?y:y.slice(0,-2),f=JSON.stringify(f);else if(a.isArray(f)&&Yt(f)||(a.isFileList(f)||a.endsWith(y,"[]"))&&(w=a.toArray(f)))return y=We(y),w.forEach(function(S,C){!(a.isUndefined(S)||S===null)&&t.append(o===!0?Re([y],C,i):o===null?y:y+"[]",l(S))}),!1}return oe(f)?!0:(t.append(Re(p,y,i),l(f)),!1)}const h=[],g=Object.assign(Qt,{defaultVisitor:u,convertValue:l,isVisitable:oe});function m(f,y){if(!a.isUndefined(f)){if(h.indexOf(f)!==-1)throw Error("Circular reference detected in "+y.join("."));h.push(f),a.forEach(f,function(w,E){(!(a.isUndefined(w)||w===null)&&s.call(t,w,a.isString(E)?E.trim():E,y,g))===!0&&m(w,y?y.concat(E):[E])}),h.pop()}}if(!a.isObject(e))throw new TypeError("data must be an object");return m(e),t}function Oe(e){const t={"!":"%21","'":"%27","(":"%28",")":"%29","~":"%7E","%20":"+","%00":"\0"};return encodeURIComponent(e).replace(/[!'()~]|%20|%00/g,function(r){return t[r]})}function de(e,t){this._pairs=[],e&&Y(e,this,t)}const Ke=de.prototype;Ke.append=function(t,n){this._pairs.push([t,n])};Ke.toString=function(t){const n=t?function(r){return t.call(this,r,Oe)}:Oe;return this._pairs.map(function(s){return n(s[0])+"="+n(s[1])},"").join("&")};function Zt(e){return encodeURIComponent(e).replace(/%3A/gi,":").replace(/%24/g,"$").replace(/%2C/gi,",").replace(/%20/g,"+").replace(/%5B/gi,"[").replace(/%5D/gi,"]")}function Ge(e,t,n){if(!t)return e;const r=n&&n.encode||Zt,s=n&&n.serialize;let i;if(s?i=s(t,n):i=a.isURLSearchParams(t)?t.toString():new de(t,n).toString(r),i){const o=e.indexOf("#");o!==-1&&(e=e.slice(0,o)),e+=(e.indexOf("?")===-1?"?":"&")+i}return e}class Te{constructor(){this.handlers=[]}use(t,n,r){return this.handlers.push({fulfilled:t,rejected:n,synchronous:r?r.synchronous:!1,runWhen:r?r.runWhen:null}),this.handlers.length-1}eject(t){this.handlers[t]&&(this.handlers[t]=null)}clear(){this.handlers&&(this.handlers=[])}forEach(t){a.forEach(this.handlers,function(r){r!==null&&t(r)})}}const Xe={silentJSONParsing:!0,forcedJSONParsing:!0,clarifyTimeoutError:!1},en=typeof URLSearchParams<"u"?URLSearchParams:de,tn=typeof FormData<"u"?FormData:null,nn=typeof Blob<"u"?Blob:null,rn={isBrowser:!0,classes:{URLSearchParams:en,FormData:tn,Blob:nn},protocols:["http","https","file","blob","url","data"]},pe=typeof window<"u"&&typeof document<"u",ie=typeof navigator=="object"&&navigator||void 0,sn=pe&&(!ie||["ReactNative","NativeScript","NS"].indexOf(ie.product)<0),on=typeof WorkerGlobalScope<"u"&&self instanceof WorkerGlobalScope&&typeof self.importScripts=="function",an=pe&&window.location.href||"http://localhost",cn=Object.freeze(Object.defineProperty({__proto__:null,hasBrowserEnv:pe,hasStandardBrowserEnv:sn,hasStandardBrowserWebWorkerEnv:on,navigator:ie,origin:an},Symbol.toStringTag,{value:"Module"})),A={...cn,...rn};function ln(e,t){return Y(e,new A.classes.URLSearchParams,Object.assign({visitor:function(n,r,s,i){return A.isNode&&a.isBuffer(n)?(this.append(r,n.toString("base64")),!1):i.defaultVisitor.apply(this,arguments)}},t))}function un(e){return a.matchAll(/\w+|\[(\w*)]/g,e).map(t=>t[0]==="[]"?"":t[1]||t[0])}function fn(e){const t={},n=Object.keys(e);let r;const s=n.length;let i;for(r=0;r<s;r++)i=n[r],t[i]=e[i];return t}function Ye(e){function t(n,r,s,i){let o=n[i++];if(o==="__proto__")return!0;const c=Number.isFinite(+o),d=i>=n.length;return o=!o&&a.isArray(s)?s.length:o,d?(a.hasOwnProp(s,o)?s[o]=[s[o],r]:s[o]=r,!c):((!s[o]||!a.isObject(s[o]))&&(s[o]=[]),t(n,r,s[o],i)&&a.isArray(s[o])&&(s[o]=fn(s[o])),!c)}if(a.isFormData(e)&&a.isFunction(e.entries)){const n={};return a.forEachEntry(e,(r,s)=>{t(un(r),s,n,0)}),n}return null}function dn(e,t,n){if(a.isString(e))try{return(t||JSON.parse)(e),a.trim(e)}catch(r){if(r.name!=="SyntaxError")throw r}return(0,JSON.stringify)(e)}const v={transitional:Xe,adapter:["xhr","http","fetch"],transformRequest:[function(t,n){const r=n.getContentType()||"",s=r.indexOf("application/json")>-1,i=a.isObject(t);if(i&&a.isHTMLForm(t)&&(t=new FormData(t)),a.isFormData(t))return s?JSON.stringify(Ye(t)):t;if(a.isArrayBuffer(t)||a.isBuffer(t)||a.isStream(t)||a.isFile(t)||a.isBlob(t)||a.isReadableStream(t))return t;if(a.isArrayBufferView(t))return t.buffer;if(a.isURLSearchParams(t))return n.setContentType("application/x-www-form-urlencoded;charset=utf-8",!1),t.toString();let c;if(i){if(r.indexOf("application/x-www-form-urlencoded")>-1)return ln(t,this.formSerializer).toString();if((c=a.isFileList(t))||r.indexOf("multipart/form-data")>-1){const d=this.env&&this.env.FormData;return Y(c?{"files[]":t}:t,d&&new d,this.formSerializer)}}return i||s?(n.setContentType("application/json",!1),dn(t)):t}],transformResponse:[function(t){const n=this.transitional||v.transitional,r=n&&n.forcedJSONParsing,s=this.responseType==="json";if(a.isResponse(t)||a.isReadableStream(t))return t;if(t&&a.isString(t)&&(r&&!this.responseType||s)){const o=!(n&&n.silentJSONParsing)&&s;try{return JSON.parse(t)}catch(c){if(o)throw c.name==="SyntaxError"?b.from(c,b.ERR_BAD_RESPONSE,this,null,this.response):c}}return t}],timeout:0,xsrfCookieName:"XSRF-TOKEN",xsrfHeaderName:"X-XSRF-TOKEN",maxContentLength:-1,maxBodyLength:-1,env:{FormData:A.classes.FormData,Blob:A.classes.Blob},validateStatus:function(t){return t>=200&&t<300},headers:{common:{Accept:"application/json, text/plain, */*","Content-Type":void 0}}};a.forEach(["delete","get","head","post","put","patch"],e=>{v.headers[e]={}});const pn=a.toObjectSet(["age","authorization","content-length","content-type","etag","expires","from","host","if-modified-since","if-unmodified-since","last-modified","location","max-forwards","proxy-authorization","referer","retry-after","user-agent"]),hn=e=>{const t={};let n,r,s;return e&&e.split(`
`).forEach(function(o){s=o.indexOf(":"),n=o.substring(0,s).trim().toLowerCase(),r=o.substring(s+1).trim(),!(!n||t[n]&&pn[n])&&(n==="set-cookie"?t[n]?t[n].push(r):t[n]=[r]:t[n]=t[n]?t[n]+", "+r:r)}),t},Ae=Symbol("internals");function H(e){return e&&String(e).trim().toLowerCase()}function V(e){return e===!1||e==null?e:a.isArray(e)?e.map(V):String(e)}function mn(e){const t=Object.create(null),n=/([^\s,;=]+)\s*(?:=\s*([^,;]+))?/g;let r;for(;r=n.exec(e);)t[r[1]]=r[2];return t}const yn=e=>/^[-_a-zA-Z0-9^`|~,!#$%&'*+.]+$/.test(e.trim());function te(e,t,n,r,s){if(a.isFunction(r))return r.call(this,t,n);if(s&&(t=n),!!a.isString(t)){if(a.isString(r))return t.indexOf(r)!==-1;if(a.isRegExp(r))return r.test(t)}}function bn(e){return e.trim().toLowerCase().replace(/([a-z\d])(\w*)/g,(t,n,r)=>n.toUpperCase()+r)}function wn(e,t){const n=a.toCamelCase(" "+t);["get","set","has"].forEach(r=>{Object.defineProperty(e,r+n,{value:function(s,i,o){return this[r].call(this,t,s,i,o)},configurable:!0})})}class x{constructor(t){t&&this.set(t)}set(t,n,r){const s=this;function i(c,d,l){const u=H(d);if(!u)throw new Error("header name must be a non-empty string");const h=a.findKey(s,u);(!h||s[h]===void 0||l===!0||l===void 0&&s[h]!==!1)&&(s[h||d]=V(c))}const o=(c,d)=>a.forEach(c,(l,u)=>i(l,u,d));if(a.isPlainObject(t)||t instanceof this.constructor)o(t,n);else if(a.isString(t)&&(t=t.trim())&&!yn(t))o(hn(t),n);else if(a.isHeaders(t))for(const[c,d]of t.entries())i(d,c,r);else t!=null&&i(n,t,r);return this}get(t,n){if(t=H(t),t){const r=a.findKey(this,t);if(r){const s=this[r];if(!n)return s;if(n===!0)return mn(s);if(a.isFunction(n))return n.call(this,s,r);if(a.isRegExp(n))return n.exec(s);throw new TypeError("parser must be boolean|regexp|function")}}}has(t,n){if(t=H(t),t){const r=a.findKey(this,t);return!!(r&&this[r]!==void 0&&(!n||te(this,this[r],r,n)))}return!1}delete(t,n){const r=this;let s=!1;function i(o){if(o=H(o),o){const c=a.findKey(r,o);c&&(!n||te(r,r[c],c,n))&&(delete r[c],s=!0)}}return a.isArray(t)?t.forEach(i):i(t),s}clear(t){const n=Object.keys(this);let r=n.length,s=!1;for(;r--;){const i=n[r];(!t||te(this,this[i],i,t,!0))&&(delete this[i],s=!0)}return s}normalize(t){const n=this,r={};return a.forEach(this,(s,i)=>{const o=a.findKey(r,i);if(o){n[o]=V(s),delete n[i];return}const c=t?bn(i):String(i).trim();c!==i&&delete n[i],n[c]=V(s),r[c]=!0}),this}concat(...t){return this.constructor.concat(this,...t)}toJSON(t){const n=Object.create(null);return a.forEach(this,(r,s)=>{r!=null&&r!==!1&&(n[s]=t&&a.isArray(r)?r.join(", "):r)}),n}[Symbol.iterator](){return Object.entries(this.toJSON())[Symbol.iterator]()}toString(){return Object.entries(this.toJSON()).map(([t,n])=>t+": "+n).join(`
`)}get[Symbol.toStringTag](){return"AxiosHeaders"}static from(t){return t instanceof this?t:new this(t)}static concat(t,...n){const r=new this(t);return n.forEach(s=>r.set(s)),r}static accessor(t){const r=(this[Ae]=this[Ae]={accessors:{}}).accessors,s=this.prototype;function i(o){const c=H(o);r[c]||(wn(s,o),r[c]=!0)}return a.isArray(t)?t.forEach(i):i(t),this}}x.accessor(["Content-Type","Content-Length","Accept","Accept-Encoding","User-Agent","Authorization"]);a.reduceDescriptors(x.prototype,({value:e},t)=>{let n=t[0].toUpperCase()+t.slice(1);return{get:()=>e,set(r){this[n]=r}}});a.freezeMethods(x);function ne(e,t){const n=this||v,r=t||n,s=x.from(r.headers);let i=r.data;return a.forEach(e,function(c){i=c.call(n,i,s.normalize(),t?t.status:void 0)}),s.normalize(),i}function Qe(e){return!!(e&&e.__CANCEL__)}function q(e,t,n){b.call(this,e??"canceled",b.ERR_CANCELED,t,n),this.name="CanceledError"}a.inherits(q,b,{__CANCEL__:!0});function Ze(e,t,n){const r=n.config.validateStatus;!n.status||!r||r(n.status)?e(n):t(new b("Request failed with status code "+n.status,[b.ERR_BAD_REQUEST,b.ERR_BAD_RESPONSE][Math.floor(n.status/100)-4],n.config,n.request,n))}function gn(e){const t=/^([-+\w]{1,25})(:?\/\/|:)/.exec(e);return t&&t[1]||""}function En(e,t){e=e||10;const n=new Array(e),r=new Array(e);let s=0,i=0,o;return t=t!==void 0?t:1e3,function(d){const l=Date.now(),u=r[i];o||(o=l),n[s]=d,r[s]=l;let h=i,g=0;for(;h!==s;)g+=n[h++],h=h%e;if(s=(s+1)%e,s===i&&(i=(i+1)%e),l-o<t)return;const m=u&&l-u;return m?Math.round(g*1e3/m):void 0}}function Sn(e,t){let n=0,r=1e3/t,s,i;const o=(l,u=Date.now())=>{n=u,s=null,i&&(clearTimeout(i),i=null),e.apply(null,l)};return[(...l)=>{const u=Date.now(),h=u-n;h>=r?o(l,u):(s=l,i||(i=setTimeout(()=>{i=null,o(s)},r-h)))},()=>s&&o(s)]}const $=(e,t,n=3)=>{let r=0;const s=En(50,250);return Sn(i=>{const o=i.loaded,c=i.lengthComputable?i.total:void 0,d=o-r,l=s(d),u=o<=c;r=o;const h={loaded:o,total:c,progress:c?o/c:void 0,bytes:d,rate:l||void 0,estimated:l&&c&&u?(c-o)/l:void 0,event:i,lengthComputable:c!=null,[t?"download":"upload"]:!0};e(h)},n)},xe=(e,t)=>{const n=e!=null;return[r=>t[0]({lengthComputable:n,total:e,loaded:r}),t[1]]},Pe=e=>(...t)=>a.asap(()=>e(...t)),Rn=A.hasStandardBrowserEnv?function(){const t=A.navigator&&/(msie|trident)/i.test(A.navigator.userAgent),n=document.createElement("a");let r;function s(i){let o=i;return t&&(n.setAttribute("href",o),o=n.href),n.setAttribute("href",o),{href:n.href,protocol:n.protocol?n.protocol.replace(/:$/,""):"",host:n.host,search:n.search?n.search.replace(/^\?/,""):"",hash:n.hash?n.hash.replace(/^#/,""):"",hostname:n.hostname,port:n.port,pathname:n.pathname.charAt(0)==="/"?n.pathname:"/"+n.pathname}}return r=s(window.location.href),function(o){const c=a.isString(o)?s(o):o;return c.protocol===r.protocol&&c.host===r.host}}():function(){return function(){return!0}}(),On=A.hasStandardBrowserEnv?{write(e,t,n,r,s,i){const o=[e+"="+encodeURIComponent(t)];a.isNumber(n)&&o.push("expires="+new Date(n).toGMTString()),a.isString(r)&&o.push("path="+r),a.isString(s)&&o.push("domain="+s),i===!0&&o.push("secure"),document.cookie=o.join("; ")},read(e){const t=document.cookie.match(new RegExp("(^|;\\s*)("+e+")=([^;]*)"));return t?decodeURIComponent(t[3]):null},remove(e){this.write(e,"",Date.now()-864e5)}}:{write(){},read(){return null},remove(){}};function Tn(e){return/^([a-z][a-z\d+\-.]*:)?\/\//i.test(e)}function An(e,t){return t?e.replace(/\/?\/$/,"")+"/"+t.replace(/^\/+/,""):e}function et(e,t){return e&&!Tn(t)?An(e,t):t}const Ne=e=>e instanceof x?{...e}:e;function U(e,t){t=t||{};const n={};function r(l,u,h){return a.isPlainObject(l)&&a.isPlainObject(u)?a.merge.call({caseless:h},l,u):a.isPlainObject(u)?a.merge({},u):a.isArray(u)?u.slice():u}function s(l,u,h){if(a.isUndefined(u)){if(!a.isUndefined(l))return r(void 0,l,h)}else return r(l,u,h)}function i(l,u){if(!a.isUndefined(u))return r(void 0,u)}function o(l,u){if(a.isUndefined(u)){if(!a.isUndefined(l))return r(void 0,l)}else return r(void 0,u)}function c(l,u,h){if(h in t)return r(l,u);if(h in e)return r(void 0,l)}const d={url:i,method:i,data:i,baseURL:o,transformRequest:o,transformResponse:o,paramsSerializer:o,timeout:o,timeoutMessage:o,withCredentials:o,withXSRFToken:o,adapter:o,responseType:o,xsrfCookieName:o,xsrfHeaderName:o,onUploadProgress:o,onDownloadProgress:o,decompress:o,maxContentLength:o,maxBodyLength:o,beforeRedirect:o,transport:o,httpAgent:o,httpsAgent:o,cancelToken:o,socketPath:o,responseEncoding:o,validateStatus:c,headers:(l,u)=>s(Ne(l),Ne(u),!0)};return a.forEach(Object.keys(Object.assign({},e,t)),function(u){const h=d[u]||s,g=h(e[u],t[u],u);a.isUndefined(g)&&h!==c||(n[u]=g)}),n}const tt=e=>{const t=U({},e);let{data:n,withXSRFToken:r,xsrfHeaderName:s,xsrfCookieName:i,headers:o,auth:c}=t;t.headers=o=x.from(o),t.url=Ge(et(t.baseURL,t.url),e.params,e.paramsSerializer),c&&o.set("Authorization","Basic "+btoa((c.username||"")+":"+(c.password?unescape(encodeURIComponent(c.password)):"")));let d;if(a.isFormData(n)){if(A.hasStandardBrowserEnv||A.hasStandardBrowserWebWorkerEnv)o.setContentType(void 0);else if((d=o.getContentType())!==!1){const[l,...u]=d?d.split(";").map(h=>h.trim()).filter(Boolean):[];o.setContentType([l||"multipart/form-data",...u].join("; "))}}if(A.hasStandardBrowserEnv&&(r&&a.isFunction(r)&&(r=r(t)),r||r!==!1&&Rn(t.url))){const l=s&&i&&On.read(i);l&&o.set(s,l)}return t},xn=typeof XMLHttpRequest<"u",Pn=xn&&function(e){return new Promise(function(n,r){const s=tt(e);let i=s.data;const o=x.from(s.headers).normalize();let{responseType:c,onUploadProgress:d,onDownloadProgress:l}=s,u,h,g,m,f;function y(){m&&m(),f&&f(),s.cancelToken&&s.cancelToken.unsubscribe(u),s.signal&&s.signal.removeEventListener("abort",u)}let p=new XMLHttpRequest;p.open(s.method.toUpperCase(),s.url,!0),p.timeout=s.timeout;function w(){if(!p)return;const S=x.from("getAllResponseHeaders"in p&&p.getAllResponseHeaders()),T={data:!c||c==="text"||c==="json"?p.responseText:p.response,status:p.status,statusText:p.statusText,headers:S,config:e,request:p};Ze(function(F){n(F),y()},function(F){r(F),y()},T),p=null}"onloadend"in p?p.onloadend=w:p.onreadystatechange=function(){!p||p.readyState!==4||p.status===0&&!(p.responseURL&&p.responseURL.indexOf("file:")===0)||setTimeout(w)},p.onabort=function(){p&&(r(new b("Request aborted",b.ECONNABORTED,e,p)),p=null)},p.onerror=function(){r(new b("Network Error",b.ERR_NETWORK,e,p)),p=null},p.ontimeout=function(){let C=s.timeout?"timeout of "+s.timeout+"ms exceeded":"timeout exceeded";const T=s.transitional||Xe;s.timeoutErrorMessage&&(C=s.timeoutErrorMessage),r(new b(C,T.clarifyTimeoutError?b.ETIMEDOUT:b.ECONNABORTED,e,p)),p=null},i===void 0&&o.setContentType(null),"setRequestHeader"in p&&a.forEach(o.toJSON(),function(C,T){p.setRequestHeader(T,C)}),a.isUndefined(s.withCredentials)||(p.withCredentials=!!s.withCredentials),c&&c!=="json"&&(p.responseType=s.responseType),l&&([g,f]=$(l,!0),p.addEventListener("progress",g)),d&&p.upload&&([h,m]=$(d),p.upload.addEventListener("progress",h),p.upload.addEventListener("loadend",m)),(s.cancelToken||s.signal)&&(u=S=>{p&&(r(!S||S.type?new q(null,e,p):S),p.abort(),p=null)},s.cancelToken&&s.cancelToken.subscribe(u),s.signal&&(s.signal.aborted?u():s.signal.addEventListener("abort",u)));const E=gn(s.url);if(E&&A.protocols.indexOf(E)===-1){r(new b("Unsupported protocol "+E+":",b.ERR_BAD_REQUEST,e));return}p.send(i||null)})},Nn=(e,t)=>{const{length:n}=e=e?e.filter(Boolean):[];if(t||n){let r=new AbortController,s;const i=function(l){if(!s){s=!0,c();const u=l instanceof Error?l:this.reason;r.abort(u instanceof b?u:new q(u instanceof Error?u.message:u))}};let o=t&&setTimeout(()=>{o=null,i(new b(`timeout ${t} of ms exceeded`,b.ETIMEDOUT))},t);const c=()=>{e&&(o&&clearTimeout(o),o=null,e.forEach(l=>{l.unsubscribe?l.unsubscribe(i):l.removeEventListener("abort",i)}),e=null)};e.forEach(l=>l.addEventListener("abort",i));const{signal:d}=r;return d.unsubscribe=()=>a.asap(c),d}},Cn=function*(e,t){let n=e.byteLength;if(n<t){yield e;return}let r=0,s;for(;r<n;)s=r+t,yield e.slice(r,s),r=s},_n=async function*(e,t){for await(const n of Ln(e))yield*Cn(n,t)},Ln=async function*(e){if(e[Symbol.asyncIterator]){yield*e;return}const t=e.getReader();try{for(;;){const{done:n,value:r}=await t.read();if(n)break;yield r}}finally{await t.cancel()}},Ce=(e,t,n,r)=>{const s=_n(e,t);let i=0,o,c=d=>{o||(o=!0,r&&r(d))};return new ReadableStream({async pull(d){try{const{done:l,value:u}=await s.next();if(l){c(),d.close();return}let h=u.byteLength;if(n){let g=i+=h;n(g)}d.enqueue(new Uint8Array(u))}catch(l){throw c(l),l}},cancel(d){return c(d),s.return()}},{highWaterMark:2})},Q=typeof fetch=="function"&&typeof Request=="function"&&typeof Response=="function",nt=Q&&typeof ReadableStream=="function",Fn=Q&&(typeof TextEncoder=="function"?(e=>t=>e.encode(t))(new TextEncoder):async e=>new Uint8Array(await new Response(e).arrayBuffer())),rt=(e,...t)=>{try{return!!e(...t)}catch{return!1}},jn=nt&&rt(()=>{let e=!1;const t=new Request(A.origin,{body:new ReadableStream,method:"POST",get duplex(){return e=!0,"half"}}).headers.has("Content-Type");return e&&!t}),_e=64*1024,ae=nt&&rt(()=>a.isReadableStream(new Response("").body)),W={stream:ae&&(e=>e.body)};Q&&(e=>{["text","arrayBuffer","blob","formData","stream"].forEach(t=>{!W[t]&&(W[t]=a.isFunction(e[t])?n=>n[t]():(n,r)=>{throw new b(`Response type '${t}' is not supported`,b.ERR_NOT_SUPPORT,r)})})})(new Response);const Bn=async e=>{if(e==null)return 0;if(a.isBlob(e))return e.size;if(a.isSpecCompliantForm(e))return(await new Request(A.origin,{method:"POST",body:e}).arrayBuffer()).byteLength;if(a.isArrayBufferView(e)||a.isArrayBuffer(e))return e.byteLength;if(a.isURLSearchParams(e)&&(e=e+""),a.isString(e))return(await Fn(e)).byteLength},Dn=async(e,t)=>{const n=a.toFiniteNumber(e.getContentLength());return n??Bn(t)},Un=Q&&(async e=>{let{url:t,method:n,data:r,signal:s,cancelToken:i,timeout:o,onDownloadProgress:c,onUploadProgress:d,responseType:l,headers:u,withCredentials:h="same-origin",fetchOptions:g}=tt(e);l=l?(l+"").toLowerCase():"text";let m=Nn([s,i&&i.toAbortSignal()],o),f;const y=m&&m.unsubscribe&&(()=>{m.unsubscribe()});let p;try{if(d&&jn&&n!=="get"&&n!=="head"&&(p=await Dn(u,r))!==0){let T=new Request(t,{method:"POST",body:r,duplex:"half"}),_;if(a.isFormData(r)&&(_=T.headers.get("content-type"))&&u.setContentType(_),T.body){const[F,z]=xe(p,$(Pe(d)));r=Ce(T.body,_e,F,z)}}a.isString(h)||(h=h?"include":"omit");const w="credentials"in Request.prototype;f=new Request(t,{...g,signal:m,method:n.toUpperCase(),headers:u.normalize().toJSON(),body:r,duplex:"half",credentials:w?h:void 0});let E=await fetch(f);const S=ae&&(l==="stream"||l==="response");if(ae&&(c||S&&y)){const T={};["status","statusText","headers"].forEach(be=>{T[be]=E[be]});const _=a.toFiniteNumber(E.headers.get("content-length")),[F,z]=c&&xe(_,$(Pe(c),!0))||[];E=new Response(Ce(E.body,_e,F,()=>{z&&z(),y&&y()}),T)}l=l||"text";let C=await W[a.findKey(W,l)||"text"](E,e);return!S&&y&&y(),await new Promise((T,_)=>{Ze(T,_,{data:C,headers:x.from(E.headers),status:E.status,statusText:E.statusText,config:e,request:f})})}catch(w){throw y&&y(),w&&w.name==="TypeError"&&/fetch/i.test(w.message)?Object.assign(new b("Network Error",b.ERR_NETWORK,e,f),{cause:w.cause||w}):b.from(w,w&&w.code,e,f)}}),ce={http:Xt,xhr:Pn,fetch:Un};a.forEach(ce,(e,t)=>{if(e){try{Object.defineProperty(e,"name",{value:t})}catch{}Object.defineProperty(e,"adapterName",{value:t})}});const Le=e=>`- ${e}`,kn=e=>a.isFunction(e)||e===null||e===!1,st={getAdapter:e=>{e=a.isArray(e)?e:[e];const{length:t}=e;let n,r;const s={};for(let i=0;i<t;i++){n=e[i];let o;if(r=n,!kn(n)&&(r=ce[(o=String(n)).toLowerCase()],r===void 0))throw new b(`Unknown adapter '${o}'`);if(r)break;s[o||"#"+i]=r}if(!r){const i=Object.entries(s).map(([c,d])=>`adapter ${c} `+(d===!1?"is not supported by the environment":"is not available in the build"));let o=t?i.length>1?`since :
`+i.map(Le).join(`
`):" "+Le(i[0]):"as no adapter specified";throw new b("There is no suitable adapter to dispatch the request "+o,"ERR_NOT_SUPPORT")}return r},adapters:ce};function re(e){if(e.cancelToken&&e.cancelToken.throwIfRequested(),e.signal&&e.signal.aborted)throw new q(null,e)}function Fe(e){return re(e),e.headers=x.from(e.headers),e.data=ne.call(e,e.transformRequest),["post","put","patch"].indexOf(e.method)!==-1&&e.headers.setContentType("application/x-www-form-urlencoded",!1),st.getAdapter(e.adapter||v.adapter)(e).then(function(r){return re(e),r.data=ne.call(e,e.transformResponse,r),r.headers=x.from(r.headers),r},function(r){return Qe(r)||(re(e),r&&r.response&&(r.response.data=ne.call(e,e.transformResponse,r.response),r.response.headers=x.from(r.response.headers))),Promise.reject(r)})}const ot="1.7.7",he={};["object","boolean","number","function","string","symbol"].forEach((e,t)=>{he[e]=function(r){return typeof r===e||"a"+(t<1?"n ":" ")+e}});const je={};he.transitional=function(t,n,r){function s(i,o){return"[Axios v"+ot+"] Transitional option '"+i+"'"+o+(r?". "+r:"")}return(i,o,c)=>{if(t===!1)throw new b(s(o," has been removed"+(n?" in "+n:"")),b.ERR_DEPRECATED);return n&&!je[o]&&(je[o]=!0,console.warn(s(o," has been deprecated since v"+n+" and will be removed in the near future"))),t?t(i,o,c):!0}};function qn(e,t,n){if(typeof e!="object")throw new b("options must be an object",b.ERR_BAD_OPTION_VALUE);const r=Object.keys(e);let s=r.length;for(;s-- >0;){const i=r[s],o=t[i];if(o){const c=e[i],d=c===void 0||o(c,i,e);if(d!==!0)throw new b("option "+i+" must be "+d,b.ERR_BAD_OPTION_VALUE);continue}if(n!==!0)throw new b("Unknown option "+i,b.ERR_BAD_OPTION)}}const le={assertOptions:qn,validators:he},L=le.validators;class D{constructor(t){this.defaults=t,this.interceptors={request:new Te,response:new Te}}async request(t,n){try{return await this._request(t,n)}catch(r){if(r instanceof Error){let s;Error.captureStackTrace?Error.captureStackTrace(s={}):s=new Error;const i=s.stack?s.stack.replace(/^.+\n/,""):"";try{r.stack?i&&!String(r.stack).endsWith(i.replace(/^.+\n.+\n/,""))&&(r.stack+=`
`+i):r.stack=i}catch{}}throw r}}_request(t,n){typeof t=="string"?(n=n||{},n.url=t):n=t||{},n=U(this.defaults,n);const{transitional:r,paramsSerializer:s,headers:i}=n;r!==void 0&&le.assertOptions(r,{silentJSONParsing:L.transitional(L.boolean),forcedJSONParsing:L.transitional(L.boolean),clarifyTimeoutError:L.transitional(L.boolean)},!1),s!=null&&(a.isFunction(s)?n.paramsSerializer={serialize:s}:le.assertOptions(s,{encode:L.function,serialize:L.function},!0)),n.method=(n.method||this.defaults.method||"get").toLowerCase();let o=i&&a.merge(i.common,i[n.method]);i&&a.forEach(["delete","get","head","post","put","patch","common"],f=>{delete i[f]}),n.headers=x.concat(o,i);const c=[];let d=!0;this.interceptors.request.forEach(function(y){typeof y.runWhen=="function"&&y.runWhen(n)===!1||(d=d&&y.synchronous,c.unshift(y.fulfilled,y.rejected))});const l=[];this.interceptors.response.forEach(function(y){l.push(y.fulfilled,y.rejected)});let u,h=0,g;if(!d){const f=[Fe.bind(this),void 0];for(f.unshift.apply(f,c),f.push.apply(f,l),g=f.length,u=Promise.resolve(n);h<g;)u=u.then(f[h++],f[h++]);return u}g=c.length;let m=n;for(h=0;h<g;){const f=c[h++],y=c[h++];try{m=f(m)}catch(p){y.call(this,p);break}}try{u=Fe.call(this,m)}catch(f){return Promise.reject(f)}for(h=0,g=l.length;h<g;)u=u.then(l[h++],l[h++]);return u}getUri(t){t=U(this.defaults,t);const n=et(t.baseURL,t.url);return Ge(n,t.params,t.paramsSerializer)}}a.forEach(["delete","get","head","options"],function(t){D.prototype[t]=function(n,r){return this.request(U(r||{},{method:t,url:n,data:(r||{}).data}))}});a.forEach(["post","put","patch"],function(t){function n(r){return function(i,o,c){return this.request(U(c||{},{method:t,headers:r?{"Content-Type":"multipart/form-data"}:{},url:i,data:o}))}}D.prototype[t]=n(),D.prototype[t+"Form"]=n(!0)});class me{constructor(t){if(typeof t!="function")throw new TypeError("executor must be a function.");let n;this.promise=new Promise(function(i){n=i});const r=this;this.promise.then(s=>{if(!r._listeners)return;let i=r._listeners.length;for(;i-- >0;)r._listeners[i](s);r._listeners=null}),this.promise.then=s=>{let i;const o=new Promise(c=>{r.subscribe(c),i=c}).then(s);return o.cancel=function(){r.unsubscribe(i)},o},t(function(i,o,c){r.reason||(r.reason=new q(i,o,c),n(r.reason))})}throwIfRequested(){if(this.reason)throw this.reason}subscribe(t){if(this.reason){t(this.reason);return}this._listeners?this._listeners.push(t):this._listeners=[t]}unsubscribe(t){if(!this._listeners)return;const n=this._listeners.indexOf(t);n!==-1&&this._listeners.splice(n,1)}toAbortSignal(){const t=new AbortController,n=r=>{t.abort(r)};return this.subscribe(n),t.signal.unsubscribe=()=>this.unsubscribe(n),t.signal}static source(){let t;return{token:new me(function(s){t=s}),cancel:t}}}function Hn(e){return function(n){return e.apply(null,n)}}function Mn(e){return a.isObject(e)&&e.isAxiosError===!0}const ue={Continue:100,SwitchingProtocols:101,Processing:102,EarlyHints:103,Ok:200,Created:201,Accepted:202,NonAuthoritativeInformation:203,NoContent:204,ResetContent:205,PartialContent:206,MultiStatus:207,AlreadyReported:208,ImUsed:226,MultipleChoices:300,MovedPermanently:301,Found:302,SeeOther:303,NotModified:304,UseProxy:305,Unused:306,TemporaryRedirect:307,PermanentRedirect:308,BadRequest:400,Unauthorized:401,PaymentRequired:402,Forbidden:403,NotFound:404,MethodNotAllowed:405,NotAcceptable:406,ProxyAuthenticationRequired:407,RequestTimeout:408,Conflict:409,Gone:410,LengthRequired:411,PreconditionFailed:412,PayloadTooLarge:413,UriTooLong:414,UnsupportedMediaType:415,RangeNotSatisfiable:416,ExpectationFailed:417,ImATeapot:418,MisdirectedRequest:421,UnprocessableEntity:422,Locked:423,FailedDependency:424,TooEarly:425,UpgradeRequired:426,PreconditionRequired:428,TooManyRequests:429,RequestHeaderFieldsTooLarge:431,UnavailableForLegalReasons:451,InternalServerError:500,NotImplemented:501,BadGateway:502,ServiceUnavailable:503,GatewayTimeout:504,HttpVersionNotSupported:505,VariantAlsoNegotiates:506,InsufficientStorage:507,LoopDetected:508,NotExtended:510,NetworkAuthenticationRequired:511};Object.entries(ue).forEach(([e,t])=>{ue[t]=e});function it(e){const t=new D(e),n=ke(D.prototype.request,t);return a.extend(n,D.prototype,t,{allOwnKeys:!0}),a.extend(n,t,null,{allOwnKeys:!0}),n.create=function(s){return it(U(e,s))},n}const R=it(v);R.Axios=D;R.CanceledError=q;R.CancelToken=me;R.isCancel=Qe;R.VERSION=ot;R.toFormData=Y;R.AxiosError=b;R.Cancel=R.CanceledError;R.all=function(t){return Promise.all(t)};R.spread=Hn;R.isAxiosError=Mn;R.mergeConfig=U;R.AxiosHeaders=x;R.formToJSON=e=>Ye(a.isHTMLForm(e)?new FormData(e):e);R.getAdapter=st.getAdapter;R.HttpStatusCode=ue;R.default=R;const ye=R.create({baseURL:"https://fakestoreapi.com/",timeout:1e4,headers:{"Content-Type":"application/json",Authorization:"Bearer undefined"}});ye.interceptors.request.use(e=>e,e=>Promise.reject(e));ye.interceptors.response.use(e=>e,e=>(e.response.status,Promise.reject(e)));const In=e=>ye.get(e),vn=()=>{const e=Be(),[t,n]=j.useState(1),[r,s]=j.useState(!0),i=j.useCallback(async()=>{if(r)try{e(we(!0));const o=await In(`/products?limit=${t*6}`);o.data.length>0?(e(at(o.data)),n(c=>c+1)):s(!1)}catch(o){console.error(o)}finally{e(we(!1))}},[r,e,t]);return j.useEffect(()=>{r&&i()},[r]),{fetchProduct:i,hasMore:r}},zn=De.lazy(()=>Ue(()=>import("./Card-Cv4-rSXc.js"),__vite__mapDeps([0,1,2]))),Jn=De.lazy(()=>Ue(()=>import("./ProductModal-DNBJbZTj.js"),__vite__mapDeps([3,1,2]))),$n=()=>{const{fetchProduct:e,hasMore:t}=vn(),n=Be(),r=Z(m=>{var f;return(f=m==null?void 0:m.productsList)==null?void 0:f.filteredProducts}),s=Z(m=>{var f;return(f=m==null?void 0:m.productsList)==null?void 0:f.isLoading}),i=Z(m=>{var f;return(f=m==null?void 0:m.productsList)==null?void 0:f.isLoading}),[o,c]=j.useState(null);let d=0;const l=()=>{const m=window.scrollY;m>d&&window.innerHeight+document.documentElement.scrollTop+50>=document.documentElement.offsetHeight&&!s&&t&&e(),d=m};j.useEffect(()=>(window.addEventListener("scroll",l),()=>window.removeEventListener("scroll",l)),[s,t]);const u=m=>{c(m),n(ge(!0))},h=()=>{c(null),n(ge(!1))},g=m=>{var f;n(lt((f=m==null?void 0:m.target)==null?void 0:f.value))};return O.jsxs(O.Fragment,{children:[O.jsx("div",{className:"space-y-4 mb-5",children:O.jsxs("div",{className:"grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-2 gap-4",children:[O.jsx("h2",{className:"text-xl text-left font-bold mb-4",children:"Products"}),O.jsx("select",{className:"w-full p-2 border rounded-md",onChange:g,children:ct.map(({value:m,label:f})=>O.jsx("option",{value:m,children:f},m))})]})}),O.jsx("div",{className:"grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4",children:r?r.map(({id:m,title:f,image:y,category:p,price:w,rating:E,description:S})=>O.jsx(zn,{image:y,title:f,price:w,category:p,rating:E.rate,onCardClick:()=>u({id:m,title:f,image:y,category:p,price:w,rating:E,description:S})},m)):Array.from({length:6}).map((m,f)=>O.jsx(ut,{},f))}),i&&o&&O.jsx(j.Suspense,{fallback:O.jsx("div",{children:"Loading..."}),children:O.jsx(Jn,{selectedProduct:o,closeModalHandler:h})})]})};export{$n as default};
