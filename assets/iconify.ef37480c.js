var Mt=Object.defineProperty;var c=(t,e)=>Mt(t,"name",{value:e,configurable:!0});import{R as G}from"./index.e88437f7.js";import{j as T}from"./jsx-runtime.66918ad9.js";const _=/^[a-z0-9]+(-[a-z0-9]+)*$/,A=c((t,e,n,r="")=>{const o=t.split(":");if(t.slice(0,1)==="@"){if(o.length<2||o.length>3)return null;r=o.shift().slice(1)}if(o.length>3||!o.length)return null;if(o.length>1){const l=o.pop(),f=o.pop(),a={provider:o.length>0?o[0]:r,prefix:f,name:l};return e&&!M(a)?null:a}const i=o[0],s=i.split("-");if(s.length>1){const l={provider:r,prefix:s.shift(),name:s.join("-")};return e&&!M(l)?null:l}if(n&&r===""){const l={provider:r,prefix:"",name:i};return e&&!M(l,n)?null:l}return null},"stringToIcon"),M=c((t,e)=>t?!!((t.provider===""||t.provider.match(_))&&(e&&t.prefix===""||t.prefix.match(_))&&t.name.match(_)):!1,"validateIconName"),gt=Object.freeze({left:0,top:0,width:16,height:16}),O=Object.freeze({rotate:0,vFlip:!1,hFlip:!1}),K=Object.freeze({...gt,...O}),z=Object.freeze({...K,body:"",hidden:!1});function Ft(t,e){const n={};!t.hFlip!=!e.hFlip&&(n.hFlip=!0),!t.vFlip!=!e.vFlip&&(n.vFlip=!0);const r=((t.rotate||0)+(e.rotate||0))%4;return r&&(n.rotate=r),n}c(Ft,"mergeIconTransformations");function ot(t,e){const n=Ft(t,e);for(const r in z)r in O?r in t&&!(r in n)&&(n[r]=O[r]):r in e?n[r]=e[r]:r in t&&(n[r]=t[r]);return n}c(ot,"mergeIconData");function Ot(t,e){const n=t.icons,r=t.aliases||{},o=Object.create(null);function i(s){if(n[s])return o[s]=[];if(!(s in o)){o[s]=null;const l=r[s]&&r[s].parent,f=l&&i(l);f&&(o[s]=[l].concat(f))}return o[s]}return c(i,"resolve"),(e||Object.keys(n).concat(Object.keys(r))).forEach(i),o}c(Ot,"getIconsTree");function At(t,e,n){const r=t.icons,o=t.aliases||{};let i={};function s(l){i=ot(r[l]||o[l],i)}return c(s,"parse"),s(e),n.forEach(s),ot(t,i)}c(At,"internalGetIconData");function mt(t,e){const n=[];if(typeof t!="object"||typeof t.icons!="object")return n;t.not_found instanceof Array&&t.not_found.forEach(o=>{e(o,null),n.push(o)});const r=Ot(t);for(const o in r){const i=r[o];i&&(e(o,At(t,o,i)),n.push(o))}return n}c(mt,"parseIconSet");const Dt={provider:"",aliases:{},not_found:{},...gt};function R(t,e){for(const n in e)if(n in t&&typeof t[n]!=typeof e[n])return!1;return!0}c(R,"checkOptionalProps");function yt(t){if(typeof t!="object"||t===null)return null;const e=t;if(typeof e.prefix!="string"||!t.icons||typeof t.icons!="object"||!R(t,Dt))return null;const n=e.icons;for(const o in n){const i=n[o];if(!o.match(_)||typeof i.body!="string"||!R(i,z))return null}const r=e.aliases||{};for(const o in r){const i=r[o],s=i.parent;if(!o.match(_)||typeof s!="string"||!n[s]&&!r[s]||!R(i,z))return null}return e}c(yt,"quicklyValidateIconSet");const rt=Object.create(null);function Nt(t,e){return{provider:t,prefix:e,icons:Object.create(null),missing:new Set}}c(Nt,"newStorage");function I(t,e){const n=rt[t]||(rt[t]=Object.create(null));return n[e]||(n[e]=Nt(t,e))}c(I,"getStorage");function W(t,e){return yt(e)?mt(e,(n,r)=>{r?t.icons[n]=r:t.missing.add(n)}):[]}c(W,"addIconSet");function Rt(t,e,n){try{if(typeof n.body=="string")return t.icons[e]={...n},!0}catch{}return!1}c(Rt,"addIconToStorage");let P=!1;function bt(t){return typeof t=="boolean"&&(P=t),P}c(bt,"allowSimpleNames");function Bt(t){const e=typeof t=="string"?A(t,!0,P):t;if(e){const n=I(e.provider,e.prefix),r=e.name;return n.icons[r]||(n.missing.has(r)?null:void 0)}}c(Bt,"getIconData");function zt(t,e){const n=A(t,!0,P);if(!n)return!1;const r=I(n.provider,n.prefix);return Rt(r,n.name,e)}c(zt,"addIcon");function Qt(t,e){if(typeof t!="object")return!1;if(typeof e!="string"&&(e=t.provider||""),P&&!e&&!t.prefix){let o=!1;return yt(t)&&(t.prefix="",mt(t,(i,s)=>{s&&zt(i,s)&&(o=!0)})),o}const n=t.prefix;if(!M({provider:e,prefix:n,name:"a"}))return!1;const r=I(e,n);return!!W(r,t)}c(Qt,"addCollection");const wt=Object.freeze({width:null,height:null}),xt=Object.freeze({...wt,...O}),Ut=/(-?[0-9.]*[0-9]+[0-9.]*)/g,qt=/^-?[0-9.]*[0-9]+[0-9.]*$/g;function it(t,e,n){if(e===1)return t;if(n=n||100,typeof t=="number")return Math.ceil(t*e*n)/n;if(typeof t!="string")return t;const r=t.split(Ut);if(r===null||!r.length)return t;const o=[];let i=r.shift(),s=qt.test(i);for(;;){if(s){const l=parseFloat(i);isNaN(l)?o.push(i):o.push(Math.ceil(l*e*n)/n)}else o.push(i);if(i=r.shift(),i===void 0)return o.join("");s=!s}}c(it,"calculateSize");function Ht(t,e){const n={...K,...t},r={...xt,...e},o={left:n.left,top:n.top,width:n.width,height:n.height};let i=n.body;[n,r].forEach(b=>{const y=[],v=b.hFlip,S=b.vFlip;let m=b.rotate;v?S?m+=2:(y.push("translate("+(o.width+o.left).toString()+" "+(0-o.top).toString()+")"),y.push("scale(-1 1)"),o.top=o.left=0):S&&(y.push("translate("+(0-o.left).toString()+" "+(o.height+o.top).toString()+")"),y.push("scale(1 -1)"),o.top=o.left=0);let d;switch(m<0&&(m-=Math.floor(m/4)*4),m=m%4,m){case 1:d=o.height/2+o.top,y.unshift("rotate(90 "+d.toString()+" "+d.toString()+")");break;case 2:y.unshift("rotate(180 "+(o.width/2+o.left).toString()+" "+(o.height/2+o.top).toString()+")");break;case 3:d=o.width/2+o.left,y.unshift("rotate(-90 "+d.toString()+" "+d.toString()+")");break}m%2===1&&(o.left!==o.top&&(d=o.left,o.left=o.top,o.top=d),o.width!==o.height&&(d=o.width,o.width=o.height,o.height=d)),y.length&&(i='<g transform="'+y.join(" ")+'">'+i+"</g>")});const s=r.width,l=r.height,f=o.width,a=o.height;let u,h;return s===null?(h=l===null?"1em":l==="auto"?a:l,u=it(h,f/a)):(u=s==="auto"?f:s,h=l===null?it(u,a/f):l==="auto"?a:l),{attributes:{width:u.toString(),height:h.toString(),viewBox:o.left.toString()+" "+o.top.toString()+" "+f.toString()+" "+a.toString()},body:i}}c(Ht,"iconToSVG");const $t=/\sid="(\S+)"/g,Vt="IconifyId"+Date.now().toString(16)+(Math.random()*16777216|0).toString(16);let Gt=0;function Kt(t,e=Vt){const n=[];let r;for(;r=$t.exec(t);)n.push(r[1]);return n.length&&n.forEach(o=>{const i=typeof e=="function"?e(o):e+(Gt++).toString(),s=o.replace(/[.*+?^${}()|[\]\\]/g,"\\$&");t=t.replace(new RegExp('([#;"])('+s+')([")]|\\.[a-z])',"g"),"$1"+i+"$3")}),t}c(Kt,"replaceIDs");const Q=Object.create(null);function Wt(t,e){Q[t]=e}c(Wt,"setAPIModule");function U(t){return Q[t]||Q[""]}c(U,"getAPIModule");function J(t){let e;if(typeof t.resources=="string")e=[t.resources];else if(e=t.resources,!(e instanceof Array)||!e.length)return null;return{resources:e,path:t.path||"/",maxURL:t.maxURL||500,rotate:t.rotate||750,timeout:t.timeout||5e3,random:t.random===!0,index:t.index||0,dataAfterTimeout:t.dataAfterTimeout!==!1}}c(J,"createAPIConfig");const X=Object.create(null),k=["https://api.simplesvg.com","https://api.unisvg.com"],F=[];for(;k.length>0;)k.length===1||Math.random()>.5?F.push(k.shift()):F.push(k.pop());X[""]=J({resources:["https://api.iconify.design"].concat(F)});function Jt(t,e){const n=J(e);return n===null?!1:(X[t]=n,!0)}c(Jt,"addAPIProvider");function Y(t){return X[t]}c(Y,"getAPIConfig");const Xt=c(()=>{let t;try{if(t=fetch,typeof t=="function")return t}catch{}},"detectFetch");let st=Xt();function Yt(t,e){const n=Y(t);if(!n)return 0;let r;if(!n.maxURL)r=0;else{let o=0;n.resources.forEach(s=>{o=Math.max(o,s.length)});const i=e+".json?icons=";r=n.maxURL-o-n.path.length-i.length}return r}c(Yt,"calculateMaxLength");function Zt(t){return t===404}c(Zt,"shouldAbort");const te=c((t,e,n)=>{const r=[],o=Yt(t,e),i="icons";let s={type:i,provider:t,prefix:e,icons:[]},l=0;return n.forEach((f,a)=>{l+=f.length+1,l>=o&&a>0&&(r.push(s),s={type:i,provider:t,prefix:e,icons:[]},l=f.length),s.icons.push(f)}),r.push(s),r},"prepare");function ee(t){if(typeof t=="string"){const e=Y(t);if(e)return e.path}return"/"}c(ee,"getPath");const ne=c((t,e,n)=>{if(!st){n("abort",424);return}let r=ee(e.provider);switch(e.type){case"icons":{const i=e.prefix,l=e.icons.join(","),f=new URLSearchParams({icons:l});r+=i+".json?"+f.toString();break}case"custom":{const i=e.uri;r+=i.slice(0,1)==="/"?i.slice(1):i;break}default:n("abort",400);return}let o=503;st(t+r).then(i=>{const s=i.status;if(s!==200){setTimeout(()=>{n(Zt(s)?"abort":"next",s)});return}return o=501,i.json()}).then(i=>{if(typeof i!="object"||i===null){setTimeout(()=>{n("next",o)});return}setTimeout(()=>{n("success",i)})}).catch(()=>{n("next",o)})},"send"),oe={prepare:te,send:ne};function re(t){const e={loaded:[],missing:[],pending:[]},n=Object.create(null);t.sort((o,i)=>o.provider!==i.provider?o.provider.localeCompare(i.provider):o.prefix!==i.prefix?o.prefix.localeCompare(i.prefix):o.name.localeCompare(i.name));let r={provider:"",prefix:"",name:""};return t.forEach(o=>{if(r.name===o.name&&r.prefix===o.prefix&&r.provider===o.provider)return;r=o;const i=o.provider,s=o.prefix,l=o.name,f=n[i]||(n[i]=Object.create(null)),a=f[s]||(f[s]=I(i,s));let u;l in a.icons?u=e.loaded:s===""||a.missing.has(l)?u=e.missing:u=e.pending;const h={provider:i,prefix:s,name:l};u.push(h)}),e}c(re,"sortIcons");function It(t,e){t.forEach(n=>{const r=n.loaderCallbacks;r&&(n.loaderCallbacks=r.filter(o=>o.id!==e))})}c(It,"removeCallback");function ie(t){t.pendingCallbacksFlag||(t.pendingCallbacksFlag=!0,setTimeout(()=>{t.pendingCallbacksFlag=!1;const e=t.loaderCallbacks?t.loaderCallbacks.slice(0):[];if(!e.length)return;let n=!1;const r=t.provider,o=t.prefix;e.forEach(i=>{const s=i.icons,l=s.pending.length;s.pending=s.pending.filter(f=>{if(f.prefix!==o)return!0;const a=f.name;if(t.icons[a])s.loaded.push({provider:r,prefix:o,name:a});else if(t.missing.has(a))s.missing.push({provider:r,prefix:o,name:a});else return n=!0,!0;return!1}),s.pending.length!==l&&(n||It([t],i.id),i.callback(s.loaded.slice(0),s.missing.slice(0),s.pending.slice(0),i.abort))})}))}c(ie,"updateCallbacks");let se=0;function ce(t,e,n){const r=se++,o=It.bind(null,n,r);if(!e.pending.length)return o;const i={id:r,icons:e,callback:t,abort:o};return n.forEach(s=>{(s.loaderCallbacks||(s.loaderCallbacks=[])).push(i)}),o}c(ce,"storeCallback");function le(t,e=!0,n=!1){const r=[];return t.forEach(o=>{const i=typeof o=="string"?A(o,e,n):o;i&&r.push(i)}),r}c(le,"listToIcons");var fe={resources:[],index:0,timeout:2e3,rotate:750,random:!1,dataAfterTimeout:!1};function ae(t,e,n,r){const o=t.resources.length,i=t.random?Math.floor(Math.random()*o):t.index;let s;if(t.random){let p=t.resources.slice(0);for(s=[];p.length>1;){const w=Math.floor(Math.random()*p.length);s.push(p[w]),p=p.slice(0,w).concat(p.slice(w+1))}s=s.concat(p)}else s=t.resources.slice(i).concat(t.resources.slice(0,i));const l=Date.now();let f="pending",a=0,u,h=null,g=[],b=[];typeof r=="function"&&b.push(r);function y(){h&&(clearTimeout(h),h=null)}c(y,"resetTimer");function v(){f==="pending"&&(f="aborted"),y(),g.forEach(p=>{p.status==="pending"&&(p.status="aborted")}),g=[]}c(v,"abort");function S(p,w){w&&(b=[]),typeof p=="function"&&b.push(p)}c(S,"subscribe");function m(){return{startTime:l,payload:e,status:f,queriesSent:a,queriesPending:g.length,subscribe:S,abort:v}}c(m,"getQueryStatus");function d(){f="failed",b.forEach(p=>{p(void 0,u)})}c(d,"failQuery");function nt(){g.forEach(p=>{p.status==="pending"&&(p.status="aborted")}),g=[]}c(nt,"clearQueue");function Et(p,w,C){const L=w!=="success";switch(g=g.filter(x=>x!==p),f){case"pending":break;case"failed":if(L||!t.dataAfterTimeout)return;break;default:return}if(w==="abort"){u=C,d();return}if(L){u=C,g.length||(s.length?N():d());return}if(y(),nt(),!t.random){const x=t.resources.indexOf(p.resource);x!==-1&&x!==t.index&&(t.index=x)}f="completed",b.forEach(x=>{x(C)})}c(Et,"moduleResponse");function N(){if(f!=="pending")return;y();const p=s.shift();if(p===void 0){if(g.length){h=setTimeout(()=>{y(),f==="pending"&&(nt(),d())},t.timeout);return}d();return}const w={status:"pending",resource:p,callback:(C,L)=>{Et(w,C,L)}};g.push(w),a++,h=setTimeout(N,t.rotate),n(p,e,w.callback)}return c(N,"execNext"),setTimeout(N),m}c(ae,"sendQuery");function St(t){const e={...fe,...t};let n=[];function r(){n=n.filter(l=>l().status==="pending")}c(r,"cleanup");function o(l,f,a){const u=ae(e,l,f,(h,g)=>{r(),a&&a(h,g)});return n.push(u),u}c(o,"query");function i(l){return n.find(f=>l(f))||null}return c(i,"find"),{query:o,find:i,setIndex:l=>{e.index=l},getIndex:()=>e.index,cleanup:r}}c(St,"initRedundancy");function ct(){}c(ct,"emptyCallback$1");const B=Object.create(null);function ue(t){if(!B[t]){const e=Y(t);if(!e)return;const n=St(e),r={config:e,redundancy:n};B[t]=r}return B[t]}c(ue,"getRedundancyCache");function de(t,e,n){let r,o;if(typeof t=="string"){const i=U(t);if(!i)return n(void 0,424),ct;o=i.send;const s=ue(t);s&&(r=s.redundancy)}else{const i=J(t);if(i){r=St(i);const s=t.resources?t.resources[0]:"",l=U(s);l&&(o=l.send)}}return!r||!o?(n(void 0,424),ct):r.query(e,o,n)().abort}c(de,"sendAPIQuery");const lt="iconify2",j="iconify",vt=j+"-count",ft=j+"-version",Ct=36e5,he=168;function q(t,e){try{return t.getItem(e)}catch{}}c(q,"getStoredItem");function Z(t,e,n){try{return t.setItem(e,n),!0}catch{}}c(Z,"setStoredItem");function at(t,e){try{t.removeItem(e)}catch{}}c(at,"removeStoredItem");function H(t,e){return Z(t,vt,e.toString())}c(H,"setBrowserStorageItemsCount");function $(t){return parseInt(q(t,vt))||0}c($,"getBrowserStorageItemsCount");const D={local:!0,session:!0},kt={local:new Set,session:new Set};let tt=!1;function pe(t){tt=t}c(pe,"setBrowserStorageStatus");let E=typeof window>"u"?{}:window;function _t(t){const e=t+"Storage";try{if(E&&E[e]&&typeof E[e].length=="number")return E[e]}catch{}D[t]=!1}c(_t,"getBrowserStorage");function Tt(t,e){const n=_t(t);if(!n)return;const r=q(n,ft);if(r!==lt){if(r){const l=$(n);for(let f=0;f<l;f++)at(n,j+f.toString())}Z(n,ft,lt),H(n,0);return}const o=Math.floor(Date.now()/Ct)-he,i=c(l=>{const f=j+l.toString(),a=q(n,f);if(typeof a=="string"){try{const u=JSON.parse(a);if(typeof u=="object"&&typeof u.cached=="number"&&u.cached>o&&typeof u.provider=="string"&&typeof u.data=="object"&&typeof u.data.prefix=="string"&&e(u,l))return!0}catch{}at(n,f)}},"parseItem");let s=$(n);for(let l=s-1;l>=0;l--)i(l)||(l===s-1?(s--,H(n,s)):kt[t].add(l))}c(Tt,"iterateBrowserStorage");function Pt(){if(!tt){pe(!0);for(const t in D)Tt(t,e=>{const n=e.data,r=e.provider,o=n.prefix,i=I(r,o);if(!W(i,n).length)return!1;const s=n.lastModified||-1;return i.lastModifiedCached=i.lastModifiedCached?Math.min(i.lastModifiedCached,s):s,!0})}}c(Pt,"initBrowserStorage");function ge(t,e){const n=t.lastModifiedCached;if(n&&n>=e)return n===e;if(t.lastModifiedCached=e,n)for(const r in D)Tt(r,o=>{const i=o.data;return o.provider!==t.provider||i.prefix!==t.prefix||i.lastModified===e});return!0}c(ge,"updateLastModified");function me(t,e){tt||Pt();function n(r){let o;if(!D[r]||!(o=_t(r)))return;const i=kt[r];let s;if(i.size)i.delete(s=Array.from(i).shift());else if(s=$(o),!H(o,s+1))return;const l={cached:Math.floor(Date.now()/Ct),provider:t.provider,data:e};return Z(o,j+s.toString(),JSON.stringify(l))}c(n,"store"),!(e.lastModified&&!ge(t,e.lastModified))&&(!Object.keys(e.icons).length||(e.not_found&&(e=Object.assign({},e),delete e.not_found),n("local")||n("session")))}c(me,"storeInBrowserStorage");function ut(){}c(ut,"emptyCallback");function ye(t){t.iconsLoaderFlag||(t.iconsLoaderFlag=!0,setTimeout(()=>{t.iconsLoaderFlag=!1,ie(t)}))}c(ye,"loadedNewIcons");function be(t,e){t.iconsToLoad?t.iconsToLoad=t.iconsToLoad.concat(e).sort():t.iconsToLoad=e,t.iconsQueueFlag||(t.iconsQueueFlag=!0,setTimeout(()=>{t.iconsQueueFlag=!1;const{provider:n,prefix:r}=t,o=t.iconsToLoad;delete t.iconsToLoad;let i;if(!o||!(i=U(n)))return;i.prepare(n,r,o).forEach(l=>{de(n,l,(f,a)=>{if(typeof f!="object"){if(a!==404)return;l.icons.forEach(u=>{t.missing.add(u)})}else try{const u=W(t,f);if(!u.length)return;const h=t.pendingIcons;h&&u.forEach(g=>{h.delete(g)}),me(t,f)}catch(u){console.error(u)}ye(t)})})}))}c(be,"loadNewIcons");const we=c((t,e)=>{const n=le(t,!0,bt()),r=re(n);if(!r.pending.length){let f=!0;return e&&setTimeout(()=>{f&&e(r.loaded,r.missing,r.pending,ut)}),()=>{f=!1}}const o=Object.create(null),i=[];let s,l;return r.pending.forEach(f=>{const{provider:a,prefix:u}=f;if(u===l&&a===s)return;s=a,l=u,i.push(I(a,u));const h=o[a]||(o[a]=Object.create(null));h[u]||(h[u]=[])}),r.pending.forEach(f=>{const{provider:a,prefix:u,name:h}=f,g=I(a,u),b=g.pendingIcons||(g.pendingIcons=new Set);b.has(h)||(b.add(h),o[a][u].push(h))}),i.forEach(f=>{const{provider:a,prefix:u}=f;o[a][u].length&&be(f,o[a][u])}),e?ce(e,r,i):ut},"loadIcons");function xe(t,e){const n={...t};for(const r in e){const o=e[r],i=typeof o;r in wt?(o===null||o&&(i==="string"||i==="number"))&&(n[r]=o):i===typeof n[r]&&(n[r]=r==="rotate"?o%4:o)}return n}c(xe,"mergeCustomisations");const Ie=/[\s,]+/;function Se(t,e){e.split(Ie).forEach(n=>{switch(n.trim()){case"horizontal":t.hFlip=!0;break;case"vertical":t.vFlip=!0;break}})}c(Se,"flipFromString");function ve(t,e=0){const n=t.replace(/^-?[0-9.]*/,"");function r(o){for(;o<0;)o+=4;return o%4}if(c(r,"cleanup"),n===""){const o=parseInt(t);return isNaN(o)?0:r(o)}else if(n!==t){let o=0;switch(n){case"%":o=25;break;case"deg":o=90}if(o){let i=parseFloat(t.slice(0,t.length-n.length));return isNaN(i)?0:(i=i/o,i%1===0?r(i):0)}}return e}c(ve,"rotateFromString");function Ce(t,e){let n=t.indexOf("xlink:")===-1?"":' xmlns:xlink="http://www.w3.org/1999/xlink"';for(const r in e)n+=" "+r+'="'+e[r]+'"';return'<svg xmlns="http://www.w3.org/2000/svg"'+n+">"+t+"</svg>"}c(Ce,"iconToHTML");function ke(t){return t.replace(/"/g,"'").replace(/%/g,"%25").replace(/#/g,"%23").replace(/</g,"%3C").replace(/>/g,"%3E").replace(/\s+/g," ")}c(ke,"encodeSVGforURL");function _e(t){return'url("data:image/svg+xml,'+ke(t)+'")'}c(_e,"svgToURL");const jt={...xt,inline:!1},Te={xmlns:"http://www.w3.org/2000/svg",xmlnsXlink:"http://www.w3.org/1999/xlink","aria-hidden":!0,role:"img"},Pe={display:"inline-block"},V={backgroundColor:"currentColor"},Lt={backgroundColor:"transparent"},dt={Image:"var(--svg)",Repeat:"no-repeat",Size:"100% 100%"},ht={webkitMask:V,mask:V,background:Lt};for(const t in ht){const e=ht[t];for(const n in dt)e[t+n]=dt[n]}const je={...jt,inline:!0};function pt(t){return t+(t.match(/^[-0-9.]+$/)?"px":"")}c(pt,"fixSize");const Le=c((t,e,n,r)=>{const o=n?je:jt,i=xe(o,e),s=e.mode||"svg",l={},f=e.style||{},a={...s==="svg"?Te:{},ref:r};for(let m in e){const d=e[m];if(d!==void 0)switch(m){case"icon":case"style":case"children":case"onLoad":case"mode":case"_ref":case"_inline":break;case"inline":case"hFlip":case"vFlip":i[m]=d===!0||d==="true"||d===1;break;case"flip":typeof d=="string"&&Se(i,d);break;case"color":l.color=d;break;case"rotate":typeof d=="string"?i[m]=ve(d):typeof d=="number"&&(i[m]=d);break;case"ariaHidden":case"aria-hidden":d!==!0&&d!=="true"&&delete a["aria-hidden"];break;default:o[m]===void 0&&(a[m]=d)}}const u=Ht(t,i),h=u.attributes;if(i.inline&&(l.verticalAlign="-0.125em"),s==="svg"){a.style={...l,...f},Object.assign(a,h);let m=0,d=e.id;return typeof d=="string"&&(d=d.replace(/-/g,"_")),a.dangerouslySetInnerHTML={__html:Kt(u.body,d?()=>d+"ID"+m++:"iconifyReact")},T("svg",{...a})}const{body:g,width:b,height:y}=t,v=s==="mask"||(s==="bg"?!1:g.indexOf("currentColor")!==-1),S=Ce(g,{...h,width:b+"",height:y+""});return a.style={...l,"--svg":_e(S),width:pt(h.width),height:pt(h.height),...Pe,...v?V:Lt,...f},T("span",{...a})},"render");bt(!0);Wt("",oe);if(typeof document<"u"&&typeof window<"u"){Pt();const t=window;if(t.IconifyPreload!==void 0){const e=t.IconifyPreload,n="Invalid IconifyPreload syntax.";typeof e=="object"&&e!==null&&(e instanceof Array?e:[e]).forEach(r=>{try{(typeof r!="object"||r===null||r instanceof Array||typeof r.icons!="object"||typeof r.prefix!="string"||!Qt(r))&&console.error(n)}catch{console.error(n)}})}if(t.IconifyProviders!==void 0){const e=t.IconifyProviders;if(typeof e=="object"&&e!==null)for(let n in e){const r="IconifyProviders["+n+"] is invalid.";try{const o=e[n];if(typeof o!="object"||!o||o.resources===void 0)continue;Jt(n,o)||console.error(r)}catch{console.error(r)}}}}class et extends G.Component{constructor(e){super(e),this.state={icon:null}}_abortLoading(){this._loading&&(this._loading.abort(),this._loading=null)}_setData(e){this.state.icon!==e&&this.setState({icon:e})}_checkIcon(e){const n=this.state,r=this.props.icon;if(typeof r=="object"&&r!==null&&typeof r.body=="string"){this._icon="",this._abortLoading(),(e||n.icon===null)&&this._setData({data:r});return}let o;if(typeof r!="string"||(o=A(r,!1,!0))===null){this._abortLoading(),this._setData(null);return}const i=Bt(o);if(!i){(!this._loading||this._loading.name!==r)&&(this._abortLoading(),this._icon="",this._setData(null),i!==null&&(this._loading={name:r,abort:we([o],this._checkIcon.bind(this,!1))}));return}if(this._icon!==r||n.icon===null){this._abortLoading(),this._icon=r;const s=["iconify"];o.prefix!==""&&s.push("iconify--"+o.prefix),o.provider!==""&&s.push("iconify--"+o.provider),this._setData({data:i,classes:s}),this.props.onLoad&&this.props.onLoad(r)}}componentDidMount(){this._checkIcon(!1)}componentDidUpdate(e){e.icon!==this.props.icon&&this._checkIcon(!0)}componentWillUnmount(){this._abortLoading()}render(){const e=this.props,n=this.state.icon;if(n===null)return e.children?e.children:T("span",{});let r=e;return n.classes&&(r={...e,className:(typeof e.className=="string"?e.className+" ":"")+n.classes.join(" ")}),Le({...K,...n.data},r,e._inline,e._ref)}}c(et,"IconComponent");const Oe=G.forwardRef(c(function(e,n){const r={...e,_ref:n,_inline:!1};return T(et,{...r})},"Icon"));G.forwardRef(c(function(e,n){const r={...e,_ref:n,_inline:!0};return T(et,{...r})},"InlineIcon"));export{Oe as I};
//# sourceMappingURL=iconify.ef37480c.js.map