if(!self.define){let e,i={};const r=(r,s)=>(r=new URL(r+".js",s).href,i[r]||new Promise((i=>{if("document"in self){const e=document.createElement("script");e.src=r,e.onload=i,document.head.appendChild(e)}else e=r,importScripts(r),i()})).then((()=>{let e=i[r];if(!e)throw new Error(`Module ${r} didn’t register its module`);return e})));self.define=(s,n)=>{const t=e||("document"in self?document.currentScript.src:"")||location.href;if(i[t])return;let o={};const c=e=>r(e,t),d={module:{uri:t},exports:o,require:c};i[t]=Promise.all(s.map((e=>d[e]||c(e)))).then((e=>(n(...e),o)))}}define(["./workbox-744925ba"],(function(e){"use strict";self.addEventListener("message",(e=>{e.data&&"SKIP_WAITING"===e.data.type&&self.skipWaiting()})),e.precacheAndRoute([{url:"dexie.js",revision:"0553d73ea0fa9c910bd3045226c1561f"},{url:"index.css",revision:"3affec43eef3b04df27e7485a7ad78c5"},{url:"index.html",revision:"b445c4cab66968458fdc41eaec04912e"},{url:"index.js",revision:"d32f00e77d525bb751f3adba1ff31c8d"}],{ignoreURLParametersMatching:[/^utm_/,/^fbclid$/]})}));
//# sourceMappingURL=sw.js.map
