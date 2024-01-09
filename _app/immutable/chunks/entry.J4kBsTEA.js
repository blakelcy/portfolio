import{n as ie,s as at,t as rt}from"./scheduler.YAOc3RFa.js";new URL("sveltekit-internal://");function ot(e,t){return e==="/"||t==="ignore"?e:t==="never"?e.endsWith("/")?e.slice(0,-1):e:t==="always"&&!e.endsWith("/")?e+"/":e}function st(e){return e.split("%25").map(decodeURI).join("%25")}function it(e){for(const t in e)e[t]=decodeURIComponent(e[t]);return e}function ce({href:e}){return e.split("#")[0]}const ct=["href","pathname","search","toString","toJSON"];function lt(e,t,n){const a=new URL(e);Object.defineProperty(a,"searchParams",{value:new Proxy(a.searchParams,{get(r,s){if(s==="get"||s==="getAll"||s==="has")return o=>(n(o),r[s](o));t();const i=Reflect.get(r,s);return typeof i=="function"?i.bind(r):i}}),enumerable:!0,configurable:!0});for(const r of ct)Object.defineProperty(a,r,{get(){return t(),e[r]},enumerable:!0,configurable:!0});return a}const ft="/__data.json",ut=".html__data.json";function dt(e){return e.endsWith(".html")?e.replace(/\.html$/,ut):e.replace(/\/$/,"")+ft}function ht(...e){let t=5381;for(const n of e)if(typeof n=="string"){let a=n.length;for(;a;)t=t*33^n.charCodeAt(--a)}else if(ArrayBuffer.isView(n)){const a=new Uint8Array(n.buffer,n.byteOffset,n.byteLength);let r=a.length;for(;r;)t=t*33^a[--r]}else throw new TypeError("value must be a string or TypedArray");return(t>>>0).toString(36)}const Ne=window.fetch;window.fetch=(e,t)=>((e instanceof Request?e.method:t?.method||"GET")!=="GET"&&D.delete(pe(e)),Ne(e,t));const D=new Map;function pt(e){const t=atob(e),n=new Uint8Array(t.length);for(let a=0;a<t.length;a++)n[a]=t.charCodeAt(a);return n.buffer}function gt(e,t){const n=pe(e,t),a=document.querySelector(n);if(a?.textContent){let{body:r,...s}=JSON.parse(a.textContent);const i=a.getAttribute("data-ttl");return i&&D.set(n,{body:r,init:s,ttl:1e3*Number(i)}),a.getAttribute("data-b64")!==null&&(r=pt(r)),Promise.resolve(new Response(r,s))}return window.fetch(e,t)}function _t(e,t,n){if(D.size>0){const a=pe(e,n),r=D.get(a);if(r){if(performance.now()<r.ttl&&["default","force-cache","only-if-cached",void 0].includes(n?.cache))return new Response(r.body,r.init);D.delete(a)}}return window.fetch(t,n)}function pe(e,t){let a=`script[data-sveltekit-fetched][data-url=${JSON.stringify(e instanceof Request?e.url:e)}]`;if(t?.headers||t?.body){const r=[];t.headers&&r.push([...new Headers(t.headers)].join(",")),t.body&&(typeof t.body=="string"||ArrayBuffer.isView(t.body))&&r.push(t.body),a+=`[data-hash="${ht(...r)}"]`}return a}const mt=/^(\[)?(\.\.\.)?(\w+)(?:=(\w+))?(\])?$/;function yt(e){const t=[];return{pattern:e==="/"?/^\/$/:new RegExp(`^${vt(e).map(a=>{const r=/^\[\.\.\.(\w+)(?:=(\w+))?\]$/.exec(a);if(r)return t.push({name:r[1],matcher:r[2],optional:!1,rest:!0,chained:!0}),"(?:/(.*))?";const s=/^\[\[(\w+)(?:=(\w+))?\]\]$/.exec(a);if(s)return t.push({name:s[1],matcher:s[2],optional:!0,rest:!1,chained:!0}),"(?:/([^/]+))?";if(!a)return;const i=a.split(/\[(.+?)\](?!\])/);return"/"+i.map((c,l)=>{if(l%2){if(c.startsWith("x+"))return le(String.fromCharCode(parseInt(c.slice(2),16)));if(c.startsWith("u+"))return le(String.fromCharCode(...c.slice(2).split("-").map(p=>parseInt(p,16))));const d=mt.exec(c),[,g,u,f,h]=d;return t.push({name:f,matcher:h,optional:!!g,rest:!!u,chained:u?l===1&&i[0]==="":!1}),u?"(.*?)":g?"([^/]*)?":"([^/]+?)"}return le(c)}).join("")}).join("")}/?$`),params:t}}function wt(e){return!/^\([^)]+\)$/.test(e)}function vt(e){return e.slice(1).split("/").filter(wt)}function bt(e,t,n){const a={},r=e.slice(1),s=r.filter(o=>o!==void 0);let i=0;for(let o=0;o<t.length;o+=1){const c=t[o];let l=r[o-i];if(c.chained&&c.rest&&i&&(l=r.slice(o-i,o+1).filter(d=>d).join("/"),i=0),l===void 0){c.rest&&(a[c.name]="");continue}if(!c.matcher||n[c.matcher](l)){a[c.name]=l;const d=t[o+1],g=r[o+1];d&&!d.rest&&d.optional&&g&&c.chained&&(i=0),!d&&!g&&Object.keys(a).length===s.length&&(i=0);continue}if(c.optional&&c.chained){i++;continue}return}if(!i)return a}function le(e){return e.normalize().replace(/[[\]]/g,"\\$&").replace(/%/g,"%25").replace(/\//g,"%2[Ff]").replace(/\?/g,"%3[Ff]").replace(/#/g,"%23").replace(/[.*+?^${}()|\\]/g,"\\$&")}function Et({nodes:e,server_loads:t,dictionary:n,matchers:a}){const r=new Set(t);return Object.entries(n).map(([o,[c,l,d]])=>{const{pattern:g,params:u}=yt(o),f={id:o,exec:h=>{const p=g.exec(h);if(p)return bt(p,u,a)},errors:[1,...d||[]].map(h=>e[h]),layouts:[0,...l||[]].map(i),leaf:s(c)};return f.errors.length=f.layouts.length=Math.max(f.errors.length,f.layouts.length),f});function s(o){const c=o<0;return c&&(o=~o),[c,e[o]]}function i(o){return o===void 0?o:[r.has(o),e[o]]}}function Oe(e,t=JSON.parse){try{return t(sessionStorage[e])}catch{}}function Re(e,t,n=JSON.stringify){const a=n(t);try{sessionStorage[e]=a}catch{}}const x=[];function ge(e,t=ie){let n;const a=new Set;function r(o){if(at(e,o)&&(e=o,n)){const c=!x.length;for(const l of a)l[1](),x.push(l,e);if(c){for(let l=0;l<x.length;l+=2)x[l][0](x[l+1]);x.length=0}}}function s(o){r(o(e))}function i(o,c=ie){const l=[o,c];return a.add(l),a.size===1&&(n=t(r,s)||ie),o(e),()=>{a.delete(l),a.size===0&&n&&(n(),n=null)}}return{set:r,update:s,subscribe:i}}const A=globalThis.__sveltekit_mfkvpy?.base??"",kt=globalThis.__sveltekit_mfkvpy?.assets??A,St="1704830242284",je="sveltekit:snapshot",$e="sveltekit:scroll",De="sveltekit:states",At="sveltekit:pageurl",N="sveltekit:history",V="sveltekit:navigation",z={tap:1,hover:2,viewport:3,eager:4,off:-1,false:-1},M=location.origin;function Ce(e){if(e instanceof URL)return e;let t=document.baseURI;if(!t){const n=document.getElementsByTagName("base");t=n.length?n[0].href:document.URL}return new URL(e,t)}function _e(){return{x:pageXOffset,y:pageYOffset}}function U(e,t){return e.getAttribute(`data-sveltekit-${t}`)}const Ie={...z,"":z.hover};function Ve(e){let t=e.assignedSlot??e.parentNode;return t?.nodeType===11&&(t=t.host),t}function Fe(e,t){for(;e&&e!==t;){if(e.nodeName.toUpperCase()==="A"&&e.hasAttribute("href"))return e;e=Ve(e)}}function ue(e,t){let n;try{n=new URL(e instanceof SVGAElement?e.href.baseVal:e.href,document.baseURI)}catch{}const a=e instanceof SVGAElement?e.target.baseVal:e.target,r=!n||!!a||te(n,t)||(e.getAttribute("rel")||"").split(/\s+/).includes("external"),s=n?.origin===M&&e.hasAttribute("download");return{url:n,external:r,target:a,download:s}}function Y(e){let t=null,n=null,a=null,r=null,s=null,i=null,o=e;for(;o&&o!==document.documentElement;)a===null&&(a=U(o,"preload-code")),r===null&&(r=U(o,"preload-data")),t===null&&(t=U(o,"keepfocus")),n===null&&(n=U(o,"noscroll")),s===null&&(s=U(o,"reload")),i===null&&(i=U(o,"replacestate")),o=Ve(o);function c(l){switch(l){case"":case"true":return!0;case"off":case"false":return!1;default:return}}return{preload_code:Ie[a??"off"],preload_data:Ie[r??"off"],keepfocus:c(t),noscroll:c(n),reload:c(s),replace_state:c(i)}}function Le(e){const t=ge(e);let n=!0;function a(){n=!0,t.update(i=>i)}function r(i){n=!1,t.set(i)}function s(i){let o;return t.subscribe(c=>{(o===void 0||n&&c!==o)&&i(o=c)})}return{notify:a,set:r,subscribe:s}}function Rt(){const{set:e,subscribe:t}=ge(!1);let n;async function a(){clearTimeout(n);try{const r=await fetch(`${kt}/_app/version.json`,{headers:{pragma:"no-cache","cache-control":"no-cache"}});if(!r.ok)return!1;const i=(await r.json()).version!==St;return i&&(e(!0),clearTimeout(n)),i}catch{return!1}}return{subscribe:t,check:a}}function te(e,t){return e.origin!==M||!e.pathname.startsWith(t)}const It=-1,Lt=-2,Pt=-3,Tt=-4,xt=-5,Ut=-6;function Nt(e,t){if(typeof e=="number")return r(e,!0);if(!Array.isArray(e)||e.length===0)throw new Error("Invalid input");const n=e,a=Array(n.length);function r(s,i=!1){if(s===It)return;if(s===Pt)return NaN;if(s===Tt)return 1/0;if(s===xt)return-1/0;if(s===Ut)return-0;if(i)throw new Error("Invalid input");if(s in a)return a[s];const o=n[s];if(!o||typeof o!="object")a[s]=o;else if(Array.isArray(o))if(typeof o[0]=="string"){const c=o[0],l=t?.[c];if(l)return a[s]=l(r(o[1]));switch(c){case"Date":a[s]=new Date(o[1]);break;case"Set":const d=new Set;a[s]=d;for(let f=1;f<o.length;f+=1)d.add(r(o[f]));break;case"Map":const g=new Map;a[s]=g;for(let f=1;f<o.length;f+=2)g.set(r(o[f]),r(o[f+1]));break;case"RegExp":a[s]=new RegExp(o[1],o[2]);break;case"Object":a[s]=Object(o[1]);break;case"BigInt":a[s]=BigInt(o[1]);break;case"null":const u=Object.create(null);a[s]=u;for(let f=1;f<o.length;f+=2)u[o[f]]=r(o[f+1]);break;default:throw new Error(`Unknown type ${c}`)}}else{const c=new Array(o.length);a[s]=c;for(let l=0;l<o.length;l+=1){const d=o[l];d!==Lt&&(c[l]=r(d))}}else{const c={};a[s]=c;for(const l in o){const d=o[l];c[l]=r(d)}}return a[s]}return r(0)}const qe=new Set(["load","prerender","csr","ssr","trailingSlash","config"]);[...qe];const Ot=new Set([...qe]);[...Ot];function jt(e){return e.filter(t=>t!=null)}class ne{constructor(t,n){this.status=t,typeof n=="string"?this.body={message:n}:n?this.body=n:this.body={message:`Error: ${t}`}}toString(){return JSON.stringify(this.body)}}class Ge{constructor(t,n){this.status=t,this.location=n}}class me extends Error{constructor(t,n,a){super(a),this.status=t,this.text=n}}const $t="x-sveltekit-invalidated",Dt="x-sveltekit-trailing-slash";function J(e){return e instanceof ne||e instanceof me?e.status:500}function Ct(e){return e instanceof me?e.text:"Internal Error"}const T=Oe($e)??{},F=Oe(je)??{},Vt=history.pushState,ye=history.replaceState,L={url:Le({}),page:Le({}),navigating:ge(null),updated:Rt()};function we(e){T[e]=_e()}function Ft(e,t){let n=e+1;for(;T[n];)delete T[n],n+=1;for(n=t+1;F[n];)delete F[n],n+=1}function j(e){return location.href=e.href,new Promise(()=>{})}function Pe(){}let ae,de,W,I,he,H;const Me=[],X=[];let O=null;const He=[],qt=[];let C=[],y={branch:[],error:null,url:null},ve=!1,Z=!1,Te=!0,q=!1,$=!1,Be=!1,be=!1,Ee,w,k,S,Q;async function Xt(e,t,n){H=e,ae=Et(e),I=document.documentElement,he=t,de=e.nodes[0],W=e.nodes[1],de(),W(),w=history.state?.[N],k=history.state?.[V],w||(w=k=Date.now(),ye.call(history,{...history.state,[N]:w,[V]:k},"",location.href));const a=T[w];a&&(history.scrollRestoration="manual",scrollTo(a.x,a.y)),n?await Yt(he,n):Kt(location.href,{replaceState:!0}),zt()}function Ke(e){X.some(t=>t?.snapshot)&&(F[e]=X.map(t=>t?.snapshot?.capture()))}function ze(e){F[e]?.forEach((t,n)=>{X[n]?.snapshot?.restore(t)})}function xe(){we(w),Re($e,T),Ke(k),Re(je,F)}async function Ye(e,t,n,a){return K({type:"goto",url:Ce(e),keepfocus:t.keepFocus,noscroll:t.noScroll,replace_state:t.replaceState,state:t.state,redirect_count:n,nav_token:a,accept:()=>{t.invalidateAll&&(be=!0)}})}async function Gt(e){return O={id:e.id,promise:We(e).then(t=>(t.type==="loaded"&&t.state.error&&(O=null),t))},O.promise}async function fe(e){const t=ae.find(n=>n.exec(Xe(e)));t&&await Promise.all([...t.layouts,t.leaf].map(n=>n?.[1]()))}function Je(e,t){y=e.state;const n=document.querySelector("style[data-sveltekit]");n&&n.remove(),S=e.props.page,Ee=new H.root({target:t,props:{...e.props,stores:L,components:X},hydrate:!0}),ze(k);const a={from:null,to:{params:y.params,route:{id:y.route?.id??null},url:new URL(location.href)},willUnload:!1,type:"enter",complete:Promise.resolve()};C.forEach(r=>r(a)),Z=!0}async function ee({url:e,params:t,branch:n,status:a,error:r,route:s,form:i}){let o="never";if(A&&(e.pathname===A||e.pathname===A+"/"))o="always";else for(const f of n)f?.slash!==void 0&&(o=f.slash);e.pathname=ot(e.pathname,o),e.search=e.search;const c={type:"loaded",state:{url:e,params:t,branch:n,error:r,route:s},props:{constructors:jt(n).map(f=>f.node.component),page:S}};i!==void 0&&(c.props.form=i);let l={},d=!S,g=0;for(let f=0;f<Math.max(n.length,y.branch.length);f+=1){const h=n[f],p=y.branch[f];h?.data!==p?.data&&(d=!0),h&&(l={...l,...h.data},d&&(c.props[`data_${g}`]=l),g+=1)}return(!y.url||e.href!==y.url.href||y.error!==r||i!==void 0&&i!==S.form||d)&&(c.props.page={error:r,params:t,route:{id:s?.id??null},state:{},status:a,url:new URL(e),form:i??null,data:d?l:S.data}),c}async function ke({loader:e,parent:t,url:n,params:a,route:r,server_data_node:s}){let i=null,o=!0;const c={dependencies:new Set,params:new Set,parent:!1,route:!1,url:!1,search_params:new Set},l=await e();if(l.universal?.load){let d=function(...u){for(const f of u){const{href:h}=new URL(f,n);c.dependencies.add(h)}};const g={route:new Proxy(r,{get:(u,f)=>(o&&(c.route=!0),u[f])}),params:new Proxy(a,{get:(u,f)=>(o&&c.params.add(f),u[f])}),data:s?.data??null,url:lt(n,()=>{o&&(c.url=!0)},u=>{o&&c.search_params.add(u)}),async fetch(u,f){let h;u instanceof Request?(h=u.url,f={body:u.method==="GET"||u.method==="HEAD"?void 0:await u.blob(),cache:u.cache,credentials:u.credentials,headers:u.headers,integrity:u.integrity,keepalive:u.keepalive,method:u.method,mode:u.mode,redirect:u.redirect,referrer:u.referrer,referrerPolicy:u.referrerPolicy,signal:u.signal,...f}):h=u;const p=new URL(h,n);return o&&d(p.href),p.origin===n.origin&&(h=p.href.slice(n.origin.length)),Z?_t(h,p.href,f):gt(h,f)},setHeaders:()=>{},depends:d,parent(){return o&&(c.parent=!0),t()},untrack(u){o=!1;try{return u()}finally{o=!0}}};i=await l.universal.load.call(null,g)??null}return{node:l,loader:e,server:s,universal:l.universal?.load?{type:"data",data:i,uses:c}:null,data:i??s?.data??null,slash:l.universal?.trailingSlash??s?.slash}}function Ue(e,t,n,a,r,s){if(be)return!0;if(!r)return!1;if(r.parent&&e||r.route&&t||r.url&&n)return!0;for(const i of r.search_params)if(a.has(i))return!0;for(const i of r.params)if(s[i]!==y.params[i])return!0;for(const i of r.dependencies)if(Me.some(o=>o(new URL(i))))return!0;return!1}function Se(e,t){return e?.type==="data"?e:e?.type==="skip"?t??null:null}function Mt(e,t){if(!e)return new Set(t.searchParams.keys());const n=new Set([...e.searchParams.keys(),...t.searchParams.keys()]);for(const a of n){const r=e.searchParams.getAll(a),s=t.searchParams.getAll(a);r.every(i=>s.includes(i))&&s.every(i=>r.includes(i))&&n.delete(a)}return n}async function We({id:e,invalidating:t,url:n,params:a,route:r}){if(O?.id===e)return O.promise;const{errors:s,layouts:i,leaf:o}=r,c=[...i,o];s.forEach(_=>_?.().catch(()=>{})),c.forEach(_=>_?.[1]().catch(()=>{}));let l=null;const d=y.url?e!==y.url.pathname+y.url.search:!1,g=y.route?r.id!==y.route.id:!1,u=Mt(y.url,n);let f=!1;const h=c.map((_,m)=>{const v=y.branch[m],b=!!_?.[0]&&(v?.loader!==_[1]||Ue(f,g,d,u,v.server?.uses,a));return b&&(f=!0),b});if(h.some(Boolean)){try{l=await et(n,h)}catch(_){return re({status:J(_),error:await G(_,{url:n,params:a,route:{id:r.id}}),url:n,route:r})}if(l.type==="redirect")return l}const p=l?.nodes;let R=!1;const E=c.map(async(_,m)=>{if(!_)return;const v=y.branch[m],b=p?.[m];if((!b||b.type==="skip")&&_[1]===v?.loader&&!Ue(R,g,d,u,v.universal?.uses,a))return v;if(R=!0,b?.type==="error")throw b;return ke({loader:_[1],url:n,params:a,route:r,parent:async()=>{const oe={};for(let se=0;se<m;se+=1)Object.assign(oe,(await E[se])?.data);return oe},server_data_node:Se(b===void 0&&_[0]?{type:"skip"}:b??null,_[0]?v?.server:void 0)})});for(const _ of E)_.catch(()=>{});const P=[];for(let _=0;_<c.length;_+=1)if(c[_])try{P.push(await E[_])}catch(m){if(m instanceof Ge)return{type:"redirect",location:m.location};let v=J(m),b;if(p?.includes(m))v=m.status??v,b=m.error;else if(m instanceof ne)b=m.body;else{if(await L.updated.check())return await j(n);b=await G(m,{params:a,url:n,route:{id:r.id}})}const B=await Ht(_,P,s);return B?await ee({url:n,params:a,branch:P.slice(0,B.idx).concat(B.node),status:v,error:b,route:r}):await Qe(n,{id:r.id},b,v)}else P.push(void 0);return await ee({url:n,params:a,branch:P,status:200,error:null,route:r,form:t?void 0:null})}async function Ht(e,t,n){for(;e--;)if(n[e]){let a=e;for(;!t[a];)a-=1;try{return{idx:a+1,node:{node:await n[e](),loader:n[e],data:{},server:null,universal:null}}}catch{continue}}}async function re({status:e,error:t,url:n,route:a}){const r={};let s=null;if(H.server_loads[0]===0)try{const l=await et(n,[!0]);if(l.type!=="data"||l.nodes[0]&&l.nodes[0].type!=="data")throw 0;s=l.nodes[0]??null}catch{(n.origin!==M||n.pathname!==location.pathname||ve)&&await j(n)}const o=await ke({loader:de,url:n,params:r,route:a,parent:()=>Promise.resolve({}),server_data_node:Se(s)}),c={node:await W(),loader:W,universal:null,server:null,data:null};return await ee({url:n,params:r,branch:[o,c],status:e,error:t,route:null})}function Ae(e,t){if(te(e,A))return;const n=Xe(e.pathname);for(const a of ae){const r=a.exec(n);if(r)return{id:e.pathname+e.search,invalidating:t,route:a,params:it(r),url:e}}}function Xe(e){return st(e.slice(A.length)||"/")}function Ze({url:e,type:t,intent:n,delta:a}){let r=!1;const s=nt(y,n,e,t);a!==void 0&&(s.navigation.delta=a);const i={...s.navigation,cancel:()=>{r=!0,s.reject(new Error("navigation cancelled"))}};return q||He.forEach(o=>o(i)),r?null:s}async function K({type:e,url:t,popped:n,keepfocus:a,noscroll:r,replace_state:s,state:i={},redirect_count:o=0,nav_token:c={},accept:l=Pe,block:d=Pe}){const g=Ae(t,!1),u=Ze({url:t,type:e,delta:n?.delta,intent:g});if(!u){d();return}const f=w,h=k;l(),q=!0,Z&&L.navigating.set(u.navigation),Q=c;let p=g&&await We(g);if(!p){if(te(t,A))return await j(t);p=await Qe(t,{id:null},await G(new me(404,"Not Found",`Not found: ${t.pathname}`),{url:t,params:{},route:{id:null}}),404)}if(t=g?.url||t,Q!==c)return u.reject(new Error("navigation aborted")),!1;if(p.type==="redirect")if(o>=20)p=await re({status:500,error:await G(new Error("Redirect loop"),{url:t,params:{},route:{id:null}}),url:t,route:{id:null}});else return Ye(new URL(p.location,t).href,{},o+1,c),!1;else p.props.page.status>=400&&await L.updated.check()&&await j(t);if(Me.length=0,be=!1,we(f),Ke(h),p.props.page.url.pathname!==t.pathname&&(t.pathname=p.props.page.url.pathname),i=n?n.state:i,!n){const _=s?0:1,m={[N]:w+=_,[V]:k+=_,[De]:i};(s?ye:Vt).call(history,m,"",t),s||Ft(w,k)}if(O=null,p.props.page.state=i,Z){y=p.state,p.props.page&&(p.props.page.url=t);const _=(await Promise.all(qt.map(m=>m(u.navigation)))).filter(m=>typeof m=="function");if(_.length>0){let m=function(){C=C.filter(v=>!_.includes(v))};_.push(m),callbacks.after_navigate.push(..._)}Ee.$set(p.props),Be=!0}else Je(p,he);const{activeElement:R}=document;await rt();const E=n?n.scroll:r?_e():null;if(Te){const _=t.hash&&document.getElementById(decodeURIComponent(t.hash.slice(1)));E?scrollTo(E.x,E.y):_?_.scrollIntoView():scrollTo(0,0)}const P=document.activeElement!==R&&document.activeElement!==document.body;!a&&!P&&Jt(),Te=!0,p.props.page&&(S=p.props.page),q=!1,e==="popstate"&&ze(k),u.fulfil(void 0),C.forEach(_=>_(u.navigation)),L.navigating.set(null)}async function Qe(e,t,n,a){return e.origin===M&&e.pathname===location.pathname&&!ve?await re({status:a,error:n,url:e,route:t}):await j(e)}function Bt(){let e;I.addEventListener("mousemove",s=>{const i=s.target;clearTimeout(e),e=setTimeout(()=>{a(i,2)},20)});function t(s){a(s.composedPath()[0],1)}I.addEventListener("mousedown",t),I.addEventListener("touchstart",t,{passive:!0});const n=new IntersectionObserver(s=>{for(const i of s)i.isIntersecting&&(fe(i.target.href),n.unobserve(i.target))},{threshold:0});function a(s,i){const o=Fe(s,I);if(!o)return;const{url:c,external:l,download:d}=ue(o,A);if(l||d)return;const g=Y(o);if(!g.reload)if(i<=g.preload_data){const u=Ae(c,!1);u&&Gt(u)}else i<=g.preload_code&&fe(c.pathname)}function r(){n.disconnect();for(const s of I.querySelectorAll("a")){const{url:i,external:o,download:c}=ue(s,A);if(o||c)continue;const l=Y(s);l.reload||(l.preload_code===z.viewport&&n.observe(s),l.preload_code===z.eager&&fe(i.pathname))}}C.push(r),r()}function G(e,t){if(e instanceof ne)return e.body;const n=J(e),a=Ct(e);return H.hooks.handleError({error:e,event:t,status:n,message:a})??{message:a}}function Kt(e,t={}){return e=Ce(e),e.origin!==M?Promise.reject(new Error("goto: invalid URL")):Ye(e,t,0)}function zt(){history.scrollRestoration="manual",addEventListener("beforeunload",t=>{let n=!1;if(xe(),!q){const a=nt(y,void 0,null,"leave"),r={...a.navigation,cancel:()=>{n=!0,a.reject(new Error("navigation cancelled"))}};He.forEach(s=>s(r))}n?(t.preventDefault(),t.returnValue=""):history.scrollRestoration="auto"}),addEventListener("visibilitychange",()=>{document.visibilityState==="hidden"&&xe()}),navigator.connection?.saveData||Bt(),I.addEventListener("click",t=>{if(t.button||t.which!==1||t.metaKey||t.ctrlKey||t.shiftKey||t.altKey||t.defaultPrevented)return;const n=Fe(t.composedPath()[0],I);if(!n)return;const{url:a,external:r,target:s,download:i}=ue(n,A);if(!a)return;if(s==="_parent"||s==="_top"){if(window.parent!==window)return}else if(s&&s!=="_self")return;const o=Y(n);if(!(n instanceof SVGAElement)&&a.protocol!==location.protocol&&!(a.protocol==="https:"||a.protocol==="http:")||i)return;if(r||o.reload){Ze({url:a,type:"link"})?q=!0:t.preventDefault();return}const[l,d]=a.href.split("#");if(d!==void 0&&l===ce(location)){const[,g]=y.url.href.split("#");if(g===d){t.preventDefault(),d===""||d==="top"&&n.ownerDocument.getElementById("top")===null?window.scrollTo({top:0}):n.ownerDocument.getElementById(d)?.scrollIntoView();return}if($=!0,we(w),e(a),!o.replace_state)return;$=!1}t.preventDefault(),K({type:"link",url:a,keepfocus:o.keepfocus,noscroll:o.noscroll,replace_state:o.replace_state??a.href===location.href})}),I.addEventListener("submit",t=>{if(t.defaultPrevented)return;const n=HTMLFormElement.prototype.cloneNode.call(t.target),a=t.submitter;if((a?.formMethod||n.method)!=="get")return;const s=new URL(a?.hasAttribute("formaction")&&a?.formAction||n.action);if(te(s,A))return;const i=t.target,o=Y(i);if(o.reload)return;t.preventDefault(),t.stopPropagation();const c=new FormData(i),l=a?.getAttribute("name");l&&c.append(l,a?.getAttribute("value")??""),s.search=new URLSearchParams(c).toString(),K({type:"form",url:s,keepfocus:o.keepfocus,noscroll:o.noscroll,replace_state:o.replace_state??s.href===location.href})}),addEventListener("popstate",async t=>{if(t.state?.[N]){const n=t.state[N];if(Q={},n===w)return;const a=T[n],r=t.state[De]??{},s=new URL(t.state[At]??location.href),i=t.state[V],o=ce(location)===ce(y.url);if(i===k&&(Be||o)){e(s),T[w]=_e(),a&&scrollTo(a.x,a.y),r!==S.state&&(S={...S,state:r},Ee.$set({page:S})),w=n;return}const l=n-w;await K({type:"popstate",url:s,popped:{state:r,scroll:a,delta:l},accept:()=>{w=n,k=i},block:()=>{history.go(-l)},nav_token:Q})}else if(!$){const n=new URL(location.href);e(n)}}),addEventListener("hashchange",()=>{$&&($=!1,ye.call(history,{...history.state,[N]:++w,[V]:k},"",location.href))});for(const t of document.querySelectorAll("link"))t.rel==="icon"&&(t.href=t.href);addEventListener("pageshow",t=>{t.persisted&&L.navigating.set(null)});function e(t){y.url=t,L.page.set({...S,url:t}),L.page.notify()}}async function Yt(e,{status:t=200,error:n,node_ids:a,params:r,route:s,data:i,form:o}){ve=!0;const c=new URL(location.href);({params:r={},route:s={id:null}}=Ae(c,!1)||{});let l;try{const d=a.map(async(f,h)=>{const p=i[h];return p?.uses&&(p.uses=tt(p.uses)),ke({loader:H.nodes[f],url:c,params:r,route:s,parent:async()=>{const R={};for(let E=0;E<h;E+=1)Object.assign(R,(await d[E]).data);return R},server_data_node:Se(p)})}),g=await Promise.all(d),u=ae.find(({id:f})=>f===s.id);if(u){const f=u.layouts;for(let h=0;h<f.length;h++)f[h]||g.splice(h,0,void 0)}l=await ee({url:c,params:r,branch:g,status:t,error:n,form:o,route:u??null})}catch(d){if(d instanceof Ge){await j(new URL(d.location,location.href));return}l=await re({status:J(d),error:await G(d,{url:c,params:r,route:s}),url:c,route:s})}l.props.page&&(l.props.page.state={}),Je(l,e)}async function et(e,t){const n=new URL(e);n.pathname=dt(e.pathname),e.pathname.endsWith("/")&&n.searchParams.append(Dt,"1"),n.searchParams.append($t,t.map(r=>r?"1":"0").join(""));const a=await Ne(n.href);if(!a.ok){let r;throw a.headers.get("content-type")?.includes("application/json")?r=await a.json():a.status===404?r="Not Found":a.status===500&&(r="Internal Error"),new ne(a.status,r)}return new Promise(async r=>{const s=new Map,i=a.body.getReader(),o=new TextDecoder;function c(d){return Nt(d,{Promise:g=>new Promise((u,f)=>{s.set(g,{fulfil:u,reject:f})})})}let l="";for(;;){const{done:d,value:g}=await i.read();if(d&&!l)break;for(l+=!g&&l?`
`:o.decode(g,{stream:!0});;){const u=l.indexOf(`
`);if(u===-1)break;const f=JSON.parse(l.slice(0,u));if(l=l.slice(u+1),f.type==="redirect")return r(f);if(f.type==="data")f.nodes?.forEach(h=>{h?.type==="data"&&(h.uses=tt(h.uses),h.data=c(h.data))}),r(f);else if(f.type==="chunk"){const{id:h,data:p,error:R}=f,E=s.get(h);s.delete(h),R?E.reject(c(R)):E.fulfil(c(p))}}}})}function tt(e){return{dependencies:new Set(e?.dependencies??[]),params:new Set(e?.params??[]),parent:!!e?.parent,route:!!e?.route,url:!!e?.url,search_params:new Set(e?.search_params??[])}}function Jt(){const e=document.querySelector("[autofocus]");if(e)e.focus();else{const t=document.body,n=t.getAttribute("tabindex");t.tabIndex=-1,t.focus({preventScroll:!0,focusVisible:!1}),n!==null?t.setAttribute("tabindex",n):t.removeAttribute("tabindex");const a=getSelection();if(a&&a.type!=="None"){const r=[];for(let s=0;s<a.rangeCount;s+=1)r.push(a.getRangeAt(s));setTimeout(()=>{if(a.rangeCount===r.length){for(let s=0;s<a.rangeCount;s+=1){const i=r[s],o=a.getRangeAt(s);if(i.commonAncestorContainer!==o.commonAncestorContainer||i.startContainer!==o.startContainer||i.endContainer!==o.endContainer||i.startOffset!==o.startOffset||i.endOffset!==o.endOffset)return}a.removeAllRanges()}})}}}function nt(e,t,n,a){let r,s;const i=new Promise((c,l)=>{r=c,s=l});return i.catch(()=>{}),{navigation:{from:{params:e.params,route:{id:e.route?.id??null},url:e.url},to:n&&{params:t?.params??null,route:{id:t?.route?.id??null},url:n},willUnload:!t,type:a,complete:i},fulfil:r,reject:s}}export{Xt as a,A as b,L as s};
