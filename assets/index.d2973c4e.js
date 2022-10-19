var it=Object.defineProperty;var ot=(t,e,a)=>e in t?it(t,e,{enumerable:!0,configurable:!0,writable:!0,value:a}):t[e]=a;var $=(t,e,a)=>(ot(t,typeof e!="symbol"?e+"":e,a),a);(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const r of document.querySelectorAll('link[rel="modulepreload"]'))n(r);new MutationObserver(r=>{for(const i of r)if(i.type==="childList")for(const s of i.addedNodes)s.tagName==="LINK"&&s.rel==="modulepreload"&&n(s)}).observe(document,{childList:!0,subtree:!0});function a(r){const i={};return r.integrity&&(i.integrity=r.integrity),r.referrerpolicy&&(i.referrerPolicy=r.referrerpolicy),r.crossorigin==="use-credentials"?i.credentials="include":r.crossorigin==="anonymous"?i.credentials="omit":i.credentials="same-origin",i}function n(r){if(r.ep)return;r.ep=!0;const i=a(r);fetch(r.href,i)}})();function E(){}function lt(t,e){for(const a in e)t[a]=e[a];return t}function We(t){return t()}function He(){return Object.create(null)}function W(t){t.forEach(We)}function Be(t){return typeof t=="function"}function L(t,e){return t!=t?e==e:t!==e||t&&typeof t=="object"||typeof t=="function"}function ct(t){return Object.keys(t).length===0}function ut(t,...e){if(t==null)return E;const a=t.subscribe(...e);return a.unsubscribe?()=>a.unsubscribe():a}function Ge(t,e,a){t.$$.on_destroy.push(ut(e,a))}function he(t,e,a,n){if(t){const r=Je(t,e,a,n);return t[0](r)}}function Je(t,e,a,n){return t[1]&&n?lt(a.ctx.slice(),t[1](n(e))):a.ctx}function ge(t,e,a,n){if(t[2]&&n){const r=t[2](n(a));if(e.dirty===void 0)return r;if(typeof r=="object"){const i=[],s=Math.max(e.dirty.length,r.length);for(let o=0;o<s;o+=1)i[o]=e.dirty[o]|r[o];return i}return e.dirty|r}return e.dirty}function be(t,e,a,n,r,i){if(r){const s=Je(e,a,n,i);t.p(s,r)}}function pe(t){if(t.ctx.length>32){const e=[],a=t.ctx.length/32;for(let n=0;n<a;n++)e[n]=-1;return e}return-1}function b(t,e){t.appendChild(e)}function _(t,e,a){t.insertBefore(e,a||null)}function k(t){t.parentNode.removeChild(t)}function Qe(t,e){for(let a=0;a<t.length;a+=1)t[a]&&t[a].d(e)}function p(t){return document.createElement(t)}function xe(t){return document.createElementNS("http://www.w3.org/2000/svg",t)}function H(t){return document.createTextNode(t)}function S(){return H(" ")}function ft(){return H("")}function G(t,e,a,n){return t.addEventListener(e,a,n),()=>t.removeEventListener(e,a,n)}function h(t,e,a){a==null?t.removeAttribute(e):t.getAttribute(e)!==a&&t.setAttribute(e,a)}function mt(t){return Array.from(t.childNodes)}function D(t,e){e=""+e,t.wholeText!==e&&(t.data=e)}function ze(t,e){t.value=e==null?"":e}function K(t,e,a,n){a===null?t.style.removeProperty(e):t.style.setProperty(e,a,n?"important":"")}function Oe(t,e,a){t.classList[a?"add":"remove"](e)}let Z;function J(t){Z=t}function U(){if(!Z)throw new Error("Function called outside component initialization");return Z}function Xe(t){U().$$.on_mount.push(t)}function dt(t){U().$$.on_destroy.push(t)}function ht(t,e){return U().$$.context.set(t,e),e}function ye(t){return U().$$.context.get(t)}function gt(t){return U().$$.context.has(t)}const B=[],Ae=[],ee=[],Me=[],Ze=Promise.resolve();let ue=!1;function Ue(){ue||(ue=!0,Ze.then(Ve))}function bt(){return Ue(),Ze}function fe(t){ee.push(t)}const le=new Set;let V=0;function Ve(){const t=Z;do{for(;V<B.length;){const e=B[V];V++,J(e),pt(e.$$)}for(J(null),B.length=0,V=0;Ae.length;)Ae.pop()();for(let e=0;e<ee.length;e+=1){const a=ee[e];le.has(a)||(le.add(a),a())}ee.length=0}while(B.length);for(;Me.length;)Me.pop()();ue=!1,le.clear(),J(t)}function pt(t){if(t.fragment!==null){t.update(),W(t.before_update);const e=t.dirty;t.dirty=[-1],t.fragment&&t.fragment.p(t.ctx,e),t.after_update.forEach(fe)}}const te=new Set;let Y;function ke(){Y={r:0,c:[],p:Y}}function _e(){Y.r||W(Y.c),Y=Y.p}function y(t,e){t&&t.i&&(te.delete(t),t.i(e))}function j(t,e,a,n){if(t&&t.o){if(te.has(t))return;te.add(t),Y.c.push(()=>{te.delete(t),n&&(a&&t.d(1),n())}),t.o(e)}else n&&n()}function R(t){t&&t.c()}function M(t,e,a,n){const{fragment:r,after_update:i}=t.$$;r&&r.m(e,a),n||fe(()=>{const s=t.$$.on_mount.map(We).filter(Be);t.$$.on_destroy?t.$$.on_destroy.push(...s):W(s),t.$$.on_mount=[]}),i.forEach(fe)}function C(t,e){const a=t.$$;a.fragment!==null&&(W(a.on_destroy),a.fragment&&a.fragment.d(e),a.on_destroy=a.fragment=null,a.ctx=[])}function yt(t,e){t.$$.dirty[0]===-1&&(B.push(t),Ue(),t.$$.dirty.fill(0)),t.$$.dirty[e/31|0]|=1<<e%31}function I(t,e,a,n,r,i,s,o=[-1]){const l=Z;J(t);const c=t.$$={fragment:null,ctx:[],props:i,update:E,not_equal:r,bound:He(),on_mount:[],on_destroy:[],on_disconnect:[],before_update:[],after_update:[],context:new Map(e.context||(l?l.$$.context:[])),callbacks:He(),dirty:o,skip_bound:!1,root:e.target||l.$$.root};s&&s(c.root);let u=!1;if(c.ctx=a?a(t,e.props||{},(m,f,...g)=>{const d=g.length?g[0]:f;return c.ctx&&r(c.ctx[m],c.ctx[m]=d)&&(!c.skip_bound&&c.bound[m]&&c.bound[m](d),u&&yt(t,m)),f}):[],c.update(),u=!0,W(c.before_update),c.fragment=n?n(c.ctx):!1,e.target){if(e.hydrate){const m=mt(e.target);c.fragment&&c.fragment.l(m),m.forEach(k)}else c.fragment&&c.fragment.c();e.intro&&y(t.$$.fragment),M(t,e.target,e.anchor,e.customElement),Ve()}J(l)}class q{$destroy(){C(this,1),this.$destroy=E}$on(e,a){if(!Be(a))return E;const n=this.$$.callbacks[e]||(this.$$.callbacks[e]=[]);return n.push(a),()=>{const r=n.indexOf(a);r!==-1&&n.splice(r,1)}}$set(e){this.$$set&&!ct(e)&&(this.$$.skip_bound=!0,this.$$set(e),this.$$.skip_bound=!1)}}const P=[];function je(t,e=E){let a;const n=new Set;function r(o){if(L(t,o)&&(t=o,a)){const l=!P.length;for(const c of n)c[1](),P.push(c,t);if(l){for(let c=0;c<P.length;c+=2)P[c][0](P[c+1]);P.length=0}}}function i(o){r(o(t))}function s(o,l=E){const c=[o,l];return n.add(c),n.size===1&&(a=e(r)||E),o(t),()=>{n.delete(c),n.size===0&&(a(),a=null)}}return{set:r,update:i,subscribe:s}}function me(t,e=!1){return t=t.slice(t.startsWith("/#")?2:0,t.endsWith("/*")?-2:void 0),t.startsWith("/")||(t="/"+t),t==="/"&&(t=""),e&&!t.endsWith("/")&&(t+="/"),t}function kt(t,e){t=me(t,!0),e=me(e,!0);let a=[],n={},r=!0,i=t.split("/").map(o=>o.startsWith(":")?(a.push(o.slice(1)),"([^\\/]+)"):o).join("\\/"),s=e.match(new RegExp(`^${i}$`));return s||(r=!1,s=e.match(new RegExp(`^${i}`))),s?(a.forEach((o,l)=>n[o]=s[l+1]),{exact:r,params:n,part:s[0].slice(0,-1)}):null}function et(t,e,a){if(a==="")return t;if(a[0]==="/")return a;let n=s=>s.split("/").filter(o=>o!==""),r=n(t),i=e?n(e):[];return"/"+i.map((s,o)=>r[o]).join("/")+"/"+a}function Ce(t,e,a,n){let r=[e,"data-"+e].reduce((i,s)=>{let o=t.getAttribute(s);return a&&t.removeAttribute(s),o===null?i:o},!1);return!n&&r===""?!0:r||n||!1}function _t(t){let e=t.split("&").map(a=>a.split("=")).reduce((a,n)=>{let r=n[0];if(!r)return a;let i=n.length>1?n[n.length-1]:!0;return typeof i=="string"&&i.includes(",")&&(i=i.split(",")),a[r]===void 0?a[r]=[i]:a[r].push(i),a},{});return Object.entries(e).reduce((a,n)=>(a[n[0]]=n[1].length>1?n[1]:n[1][0],a),{})}function jt(t){return Object.entries(t).map(([e,a])=>a?a===!0?e:`${e}=${Array.isArray(a)?a.join(","):a}`:null).filter(e=>e).join("&")}function Le(t,e){return t?e+t:""}function tt(t){throw new Error("[Tinro] "+t)}var z={HISTORY:1,HASH:2,MEMORY:3,OFF:4,run(t,e,a,n){return t===this.HISTORY?e&&e():t===this.HASH?a&&a():n&&n()},getDefault(){return!window||window.location.pathname==="srcdoc"?this.MEMORY:this.HISTORY}},we,at,nt,ae="",x=wt();function wt(){let t=z.getDefault(),e,a=s=>window.onhashchange=window.onpopstate=we=null,n=s=>e&&e(ce(t)),r=s=>{s&&(t=s),a(),t!==z.OFF&&z.run(t,o=>window.onpopstate=n,o=>window.onhashchange=n)&&n()},i=s=>{let o=Object.assign(ce(t),s);return o.path+Le(jt(o.query),"?")+Le(o.hash,"#")};return{mode:r,get:s=>ce(t),go(s,o){vt(t,s,o),n()},start(s){e=s,r()},stop(){e=null,r(z.OFF)},set(s){this.go(i(s),!s.path)},methods(){return $t(this)},base:s=>ae=s}}function vt(t,e,a){!a&&(at=nt);let n=r=>history[`${a?"replace":"push"}State`]({},"",r);z.run(t,r=>n(ae+e),r=>n(`#${e}`),r=>we=e)}function ce(t){let e=window.location,a=z.run(t,r=>(ae?e.pathname.replace(ae,""):e.pathname)+e.search+e.hash,r=>String(e.hash.slice(1)||"/"),r=>we||"/"),n=a.match(/^([^?#]+)(?:\?([^#]+))?(?:\#(.+))?$/);return nt=a,{url:a,from:at,path:n[1]||"",query:_t(n[2]||""),hash:n[3]||""}}function $t(t){let e=()=>t.get().query,a=s=>t.set({query:s}),n=s=>a(s(e())),r=()=>t.get().hash,i=s=>t.set({hash:s});return{hash:{get:r,set:i,clear:()=>i("")},query:{replace:a,clear:()=>a(""),get(s){return s?e()[s]:e()},set(s,o){n(l=>(l[s]=o,l))},delete(s){n(o=>(o[s]&&delete o[s],o))}}}}var de=St();function St(){let{subscribe:t}=je(x.get(),e=>{x.start(e);let a=Et(x.go);return()=>{x.stop(),a()}});return{subscribe:t,goto:x.go,params:Ht,meta:Ot,useHashNavigation:e=>x.mode(e?z.HASH:z.HISTORY),mode:{hash:()=>x.mode(z.HASH),history:()=>x.mode(z.HISTORY),memory:()=>x.mode(z.MEMORY)},base:x.base,location:x.methods()}}function Et(t){let e=a=>{let n=a.target.closest("a[href]"),r=n&&Ce(n,"target",!1,"_self"),i=n&&Ce(n,"tinro-ignore"),s=a.ctrlKey||a.metaKey||a.altKey||a.shiftKey;if(r=="_self"&&!i&&!s&&n){let o=n.getAttribute("href").replace(/^\/#/,"");/^\/\/|^#|^[a-zA-Z]+:/.test(o)||(a.preventDefault(),t(o.startsWith("/")?o:n.href.replace(window.location.origin,"")))}};return addEventListener("click",e),()=>removeEventListener("click",e)}function Ht(){return ye("tinro").meta.params}var ne="tinro",xt=rt({pattern:"",matched:!0});function zt(t){let e=ye(ne)||xt;(e.exact||e.fallback)&&tt(`${t.fallback?"<Route fallback>":`<Route path="${t.path}">`}  can't be inside ${e.fallback?"<Route fallback>":`<Route path="${e.path||"/"}"> with exact path`}`);let a=t.fallback?"fallbacks":"childs",n=je({}),r=rt({fallback:t.fallback,parent:e,update(i){r.exact=!i.path.endsWith("/*"),r.pattern=me(`${r.parent.pattern||""}${i.path}`),r.redirect=i.redirect,r.firstmatch=i.firstmatch,r.breadcrumb=i.breadcrumb,r.match()},register:()=>(r.parent[a].add(r),async()=>{r.parent[a].delete(r),r.parent.activeChilds.delete(r),r.router.un&&r.router.un(),r.parent.match()}),show:()=>{t.onShow(),!r.fallback&&r.parent.activeChilds.add(r)},hide:()=>{t.onHide(),r.parent.activeChilds.delete(r)},match:async()=>{r.matched=!1;let{path:i,url:s,from:o,query:l}=r.router.location,c=kt(r.pattern,i);if(!r.fallback&&c&&r.redirect&&(!r.exact||r.exact&&c.exact)){let u=et(i,r.parent.pattern,r.redirect);return de.goto(u,!0)}r.meta=c&&{from:o,url:s,query:l,match:c.part,pattern:r.pattern,breadcrumbs:r.parent.meta&&r.parent.meta.breadcrumbs.slice()||[],params:c.params,subscribe:n.subscribe},r.breadcrumb&&r.meta&&r.meta.breadcrumbs.push({name:r.breadcrumb,path:c.part}),n.set(r.meta),c&&!r.fallback&&(!r.exact||r.exact&&c.exact)&&(!r.parent.firstmatch||!r.parent.matched)?(t.onMeta(r.meta),r.parent.matched=!0,r.show()):r.hide(),c&&r.showFallbacks()}});return ht(ne,r),Xe(()=>r.register()),r}function Ot(){return gt(ne)?ye(ne).meta:tt("meta() function must be run inside any `<Route>` child component only")}function rt(t){let e={router:{},exact:!1,pattern:null,meta:null,parent:null,fallback:!1,redirect:!1,firstmatch:!1,breadcrumb:null,matched:!1,childs:new Set,activeChilds:new Set,fallbacks:new Set,async showFallbacks(){if(!this.fallback&&(await bt(),this.childs.size>0&&this.activeChilds.size==0||this.childs.size==0&&this.fallbacks.size>0)){let a=this;for(;a.fallbacks.size==0;)if(a=a.parent,!a)return;a&&a.fallbacks.forEach(n=>{if(n.redirect){let r=et("/",n.parent.pattern,n.redirect);de.goto(r,!0)}else n.show()})}},start(){this.router.un||(this.router.un=de.subscribe(a=>{this.router.location=a,this.pattern!==null&&this.match()}))},match(){this.showFallbacks()}};return Object.assign(e,t),e.start(),e}const At=t=>({params:t&2,meta:t&4}),Te=t=>({params:t[1],meta:t[2]});function Ke(t){let e;const a=t[9].default,n=he(a,t,t[8],Te);return{c(){n&&n.c()},m(r,i){n&&n.m(r,i),e=!0},p(r,i){n&&n.p&&(!e||i&262)&&be(n,a,r,r[8],e?ge(a,r[8],i,At):pe(r[8]),Te)},i(r){e||(y(n,r),e=!0)},o(r){j(n,r),e=!1},d(r){n&&n.d(r)}}}function Mt(t){let e,a,n=t[0]&&Ke(t);return{c(){n&&n.c(),e=ft()},m(r,i){n&&n.m(r,i),_(r,e,i),a=!0},p(r,[i]){r[0]?n?(n.p(r,i),i&1&&y(n,1)):(n=Ke(r),n.c(),y(n,1),n.m(e.parentNode,e)):n&&(ke(),j(n,1,1,()=>{n=null}),_e())},i(r){a||(y(n),a=!0)},o(r){j(n),a=!1},d(r){n&&n.d(r),r&&k(e)}}}function Ct(t,e,a){let{$$slots:n={},$$scope:r}=e,{path:i="/*"}=e,{fallback:s=!1}=e,{redirect:o=!1}=e,{firstmatch:l=!1}=e,{breadcrumb:c=null}=e,u=!1,m={},f={};const g=zt({fallback:s,onShow(){a(0,u=!0)},onHide(){a(0,u=!1)},onMeta(d){a(2,f=d),a(1,m=f.params)}});return t.$$set=d=>{"path"in d&&a(3,i=d.path),"fallback"in d&&a(4,s=d.fallback),"redirect"in d&&a(5,o=d.redirect),"firstmatch"in d&&a(6,l=d.firstmatch),"breadcrumb"in d&&a(7,c=d.breadcrumb),"$$scope"in d&&a(8,r=d.$$scope)},t.$$.update=()=>{t.$$.dirty&232&&g.update({path:i,redirect:o,firstmatch:l,breadcrumb:c})},[u,m,f,i,s,o,l,c,r,n]}class Re extends q{constructor(e){super(),I(this,e,Ct,Mt,L,{path:3,fallback:4,redirect:5,firstmatch:6,breadcrumb:7})}}class Lt{constructor(){$(this,"subsets")}}var N=(t=>(t[t.Kata=0]="Kata",t[t.Hira=1]="Hira",t))(N||{});class Tt{static createKana(e){let a=new Lt;return a.subsets=[e.common(),e.extended(),e.dakuon(),e.handakuon()],a}}class Ie{constructor({ID:e,stat:a}){$(this,"ID");$(this,"stat");this.ID=e,this.stat=a}score(){return this.stat.guessed/this.stat.encounter*100}encountered(e){this.stat.encounter++,e&&this.stat.guessed++}}class Kt{constructor(){$(this,"ID");$(this,"assignement");$(this,"hint");$(this,"answer")}checkAnswer(){return this.answer.given.toLowerCase()===this.answer.expected.toLowerCase()}score(){return this.checkAnswer()?1:0}}const Rt="Common Kana",It=[{romaji:"a",hiragana:{id:0,symbol:"\u3042"},katakana:{id:1,symbol:"\u30A2"}},{romaji:"i",hiragana:{id:2,symbol:"\u3044"},katakana:{id:3,symbol:"\u30A4"}},{romaji:"u",hiragana:{id:4,symbol:"\u3046"},katakana:{id:5,symbol:"\u30A6"}},{romaji:"e",hiragana:{id:6,symbol:"\u3048"},katakana:{id:7,symbol:"\u30A8"}},{romaji:"o",hiragana:{id:8,symbol:"\u304A"},katakana:{id:9,symbol:"\u30AA"}},{romaji:"ka",hiragana:{id:10,symbol:"\u304B"},katakana:{id:11,symbol:"\u30AB"}},{romaji:"ki",hiragana:{id:12,symbol:"\u304D"},katakana:{id:13,symbol:"\u30AD"}},{romaji:"ku",hiragana:{id:14,symbol:"\u304F"},katakana:{id:15,symbol:"\u30AF"}},{romaji:"ke",hiragana:{id:16,symbol:"\u3051"},katakana:{id:17,symbol:"\u30B1"}},{romaji:"ko",hiragana:{id:18,symbol:"\u3053"},katakana:{id:19,symbol:"\u30B3"}},{romaji:"sa",hiragana:{id:20,symbol:"\u3055"},katakana:{id:21,symbol:"\u30B5"}},{romaji:"shi",hiragana:{id:22,symbol:"\u3057"},katakana:{id:23,symbol:"\u30B7"}},{romaji:"su",hiragana:{id:24,symbol:"\u3059"},katakana:{id:25,symbol:"\u30B9"}},{romaji:"se",hiragana:{id:26,symbol:"\u305B"},katakana:{id:27,symbol:"\u30BB"}},{romaji:"so",hiragana:{id:28,symbol:"\u305D"},katakana:{id:29,symbol:"\u30BD"}},{romaji:"ta",hiragana:{id:30,symbol:"\u305F"},katakana:{id:31,symbol:"\u30BF"}},{romaji:"chi",hiragana:{id:32,symbol:"\u3061"},katakana:{id:33,symbol:"\u30C1"}},{romaji:"tsu",hiragana:{id:34,symbol:"\u3064"},katakana:{id:35,symbol:"\u30C4"}},{romaji:"te",hiragana:{id:36,symbol:"\u3066"},katakana:{id:37,symbol:"\u30C6"}},{romaji:"to",hiragana:{id:38,symbol:"\u3068"},katakana:{id:39,symbol:"\u30C8"}},{romaji:"na",hiragana:{id:40,symbol:"\u306A"},katakana:{id:41,symbol:"\u30CA"}},{romaji:"ni",hiragana:{id:42,symbol:"\u306B"},katakana:{id:43,symbol:"\u30CB"}},{romaji:"nu",hiragana:{id:44,symbol:"\u306C"},katakana:{id:45,symbol:"\u30CC"}},{romaji:"ne",hiragana:{id:46,symbol:"\u306D"},katakana:{id:47,symbol:"\u30CD"}},{romaji:"no",hiragana:{id:48,symbol:"\u306E"},katakana:{id:49,symbol:"\u30CE"}},{romaji:"ha",hiragana:{id:50,symbol:"\u306F"},katakana:{id:51,symbol:"\u30CF"}},{romaji:"hi",hiragana:{id:52,symbol:"\u3072"},katakana:{id:53,symbol:"\u30D2"}},{romaji:"fu",hiragana:{id:54,symbol:"\u3075"},katakana:{id:55,symbol:"\u30D5"}},{romaji:"he",hiragana:{id:56,symbol:"\u3078"},katakana:{id:57,symbol:"\u30D8"}},{romaji:"ho",hiragana:{id:58,symbol:"\u307B"},katakana:{id:59,symbol:"\u30DB"}},{romaji:"ma",hiragana:{id:60,symbol:"\u307E"},katakana:{id:61,symbol:"\u30DE"}},{romaji:"mi",hiragana:{id:62,symbol:"\u307F"},katakana:{id:63,symbol:"\u30DF"}},{romaji:"mu",hiragana:{id:64,symbol:"\u3080"},katakana:{id:65,symbol:"\u30E0"}},{romaji:"me",hiragana:{id:66,symbol:"\u3081"},katakana:{id:67,symbol:"\u30E1"}},{romaji:"mo",hiragana:{id:68,symbol:"\u3082"},katakana:{id:69,symbol:"\u30E2"}},{romaji:"ra",hiragana:{id:70,symbol:"\u3089"},katakana:{id:71,symbol:"\u30E9"}},{romaji:"ri",hiragana:{id:72,symbol:"\u308A"},katakana:{id:73,symbol:"\u30EA"}},{romaji:"ru",hiragana:{id:74,symbol:"\u308B"},katakana:{id:75,symbol:"\u30EB"}},{romaji:"re",hiragana:{id:76,symbol:"\u308C"},katakana:{id:77,symbol:"\u30EC"}},{romaji:"ro",hiragana:{id:78,symbol:"\u308D"},katakana:{id:79,symbol:"\u30ED"}}],qt={name:Rt,letters:It},Ft="Other Kana",Nt=[{romaji:"ya",hiragana:{id:120,symbol:"\u3084"},katakana:{id:121,symbol:"\u30E4"}},{romaji:"yu",hiragana:{id:122,symbol:"\u3086"},katakana:{id:123,symbol:"\u30E6"}},{romaji:"yo",hiragana:{id:124,symbol:"\u3088"},katakana:{id:125,symbol:"\u30E8"}},{romaji:"wa",hiragana:{id:126,symbol:"\u308F"},katakana:{id:127,symbol:"\u30EF"}},{romaji:"n",hiragana:{id:128,symbol:"\u3093"},katakana:{id:129,symbol:"\u30F3"}}],Yt={name:Ft,letters:Nt},Dt="Dakuon",Pt=[{romaji:"ga",hiragana:{id:80,symbol:"\u304C"},katakana:{id:81,symbol:"\u30AC"}},{romaji:"gi",hiragana:{id:82,symbol:"\u304E"},katakana:{id:83,symbol:"\u30AE"}},{romaji:"gu",hiragana:{id:84,symbol:"\u3050"},katakana:{id:85,symbol:"\u30B0"}},{romaji:"ge",hiragana:{id:86,symbol:"\u3052"},katakana:{id:87,symbol:"\u30B2"}},{romaji:"go",hiragana:{id:88,symbol:"\u3054"},katakana:{id:89,symbol:"\u30B4"}},{romaji:"za",hiragana:{id:90,symbol:"\u3056"},katakana:{id:91,symbol:"\u30B6"}},{romaji:"ji",hiragana:{id:92,symbol:"\u3058"},katakana:{id:93,symbol:"\u30B8"}},{romaji:"zu",hiragana:{id:94,symbol:"\u305A"},katakana:{id:95,symbol:"\u30BA"}},{romaji:"ze",hiragana:{id:96,symbol:"\u305C"},katakana:{id:97,symbol:"\u30BC"}},{romaji:"zo",hiragana:{id:98,symbol:"\u305E"},katakana:{id:99,symbol:"\u30BE"}},{romaji:"da",hiragana:{id:100,symbol:"\u3060"},katakana:{id:101,symbol:"\u30C0"}},{romaji:"ji",hiragana:{id:102,symbol:"\u3062"},katakana:{id:103,symbol:"\u30C2"}},{romaji:"zu",hiragana:{id:104,symbol:"\u3065"},katakana:{id:105,symbol:"\u30C5"}},{romaji:"de",hiragana:{id:106,symbol:"\u3067"},katakana:{id:107,symbol:"\u30C7"}},{romaji:"do",hiragana:{id:108,symbol:"\u3069"},katakana:{id:109,symbol:"\u30C9"}},{romaji:"ba",hiragana:{id:110,symbol:"\u3070"},katakana:{id:111,symbol:"\u30D0"}},{romaji:"bi",hiragana:{id:112,symbol:"\u3073"},katakana:{id:113,symbol:"\u30D3"}},{romaji:"bu",hiragana:{id:114,symbol:"\u3076"},katakana:{id:115,symbol:"\u30D6"}},{romaji:"be",hiragana:{id:116,symbol:"\u3079"},katakana:{id:117,symbol:"\u30D9"}},{romaji:"bo",hiragana:{id:118,symbol:"\u307C"},katakana:{id:119,symbol:"\u30DC"}}],Wt={name:Dt,letters:Pt},Bt="Handakuon",Gt=[{romaji:"pa",hiragana:{id:130,symbol:"\u3071"},katakana:{id:131,symbol:"\u30D1"}},{romaji:"pi",hiragana:{id:132,symbol:"\u3074"},katakana:{id:133,symbol:"\u30D4"}},{romaji:"pu",hiragana:{id:134,symbol:"\u3077"},katakana:{id:135,symbol:"\u30D7"}},{romaji:"pe",hiragana:{id:136,symbol:"\u307A"},katakana:{id:137,symbol:"\u30DA"}},{romaji:"po",hiragana:{id:138,symbol:"\u307D"},katakana:{id:139,symbol:"\u30DD"}}],Jt={name:Bt,letters:Gt};class st{common(){return qt}extended(){return Yt}dakuon(){return Wt}handakuon(){return Jt}}class Qt{constructor(){$(this,"factory");this.factory=new st}generateExercise(e,a){let n=new Kt;return n.assignement=`Translate this ${e} into romaji`,n.hint=a[e].symbol,n.ID=a[e].id,n.answer={expected:a.romaji,given:""},n}generateLesson(){return[this.factory.common(),this.factory.extended(),this.factory.dakuon(),this.factory.handakuon()].flatMap(a=>Q.drawLetters(a.letters,3)).map(a=>{const n=Q.drawAlphabet();return this.generateExercise(n,a)})}}const re=class{static drawAlphabet(){return re.ExerciseType[Math.floor(Math.random()*re.ExerciseType.length)]}static drawLetters(e,a){return a>e.length&&(a=e.length),Xt(e).slice(0,a)}};let Q=re;$(Q,"ExerciseType",["katakana","hiragana"]);function Xt(t){const e=Array.from(t);for(t.length=0;e.length>0;){const a=Math.floor(Math.random()*e.length);t.push(e[a]),e.splice(a,1)}return t}const ve=Zt();function Zt(){const t=N.Hira,{subscribe:e,set:a}=je(t);let n=t;return{subscribe:e,changeType:()=>{n===N.Hira?n=N.Kata:n=N.Hira,a(n)}}}const se=class{constructor(){$(this,"masteries");const e=localStorage.getItem(se.KEY);if(e==null){this.masteries=[],this.save();return}this.masteries=JSON.parse(e),this.masteries=this.masteries.map(a=>new Ie(a))}get(e){let a=this.masteries.find(n=>n.ID===e);return a===void 0&&(a=new Ie({ID:e,stat:{guessed:0,encounter:0}}),this.masteries.push(a)),a}increase(e,a){const n=this.get(e);console.log(this.masteries),console.log(n),n.encountered(a),this.save()}save(){const e=JSON.stringify(this.masteries);localStorage.setItem(se.KEY,e)}};let X=se;$(X,"KEY","masteries");function Ut(t){let e,a,n,r;return{c(){e=xe("svg"),a=xe("circle"),h(a,"class","path stroke-green svelte-l7dx3w"),h(a,"fill","grey"),h(a,"fill-opacity","10%"),h(a,"stroke-width","3"),h(a,"cx",n=t[0]/2),h(a,"cy",r=t[0]/2),h(a,"r",t[1]),h(a,"style",t[2]),h(e,"class","circular svelte-l7dx3w"),K(e,"width",t[0]+"px"),K(e,"height",t[0]+"px")},m(i,s){_(i,e,s),b(e,a)},p(i,[s]){s&1&&n!==(n=i[0]/2)&&h(a,"cx",n),s&1&&r!==(r=i[0]/2)&&h(a,"cy",r),s&2&&h(a,"r",i[1]),s&4&&h(a,"style",i[2]),s&1&&K(e,"width",i[0]+"px"),s&1&&K(e,"height",i[0]+"px")},i:E,o:E,d(i){i&&k(e)}}}function Vt(t,e,a){let n,r,i,s,o,{progress:l=null}=e,{size:c=70}=e,u;Xe(()=>{u=setTimeout(()=>{a(6,r=(100-l)/100*m(n))},1200)}),dt(()=>{clearTimeout(u)});function m(f){return f==0?0:Math.PI*(f+f)}return t.$$set=f=>{"progress"in f&&a(3,l=f.progress),"size"in f&&a(0,c=f.size)},t.$$.update=()=>{t.$$.dirty&1&&a(1,n=c/2-c/5),t.$$.dirty&2&&a(6,r=m(n)),t.$$.dirty&2&&a(4,i=`
        stroke-dasharray: ${m(n)};
        stroke-dashoffset: ${m(n)-2};
    `),t.$$.dirty&66&&a(5,s=`
        stroke-dasharray: ${m(n)};
        stroke-dashoffset: ${r};
    `),t.$$.dirty&56&&a(2,o=l>0?s:i)},[c,n,o,l,i,s,r]}class ea extends q{constructor(e){super(),I(this,e,Vt,Ut,L,{progress:3,size:0})}}function ta(t){let e,a,n,r,i,s,o,l,c,u,m;return l=new ea({props:{progress:t[2],size:40}}),{c(){e=p("button"),a=p("p"),n=H(t[0]),r=S(),i=p("p"),s=H(t[1]),o=S(),R(l.$$.fragment),h(a,"class","japanese svelte-58djdn"),h(i,"class","svelte-58djdn"),h(e,"class","letter svelte-58djdn")},m(f,g){_(f,e,g),b(e,a),b(a,n),b(e,r),b(e,i),b(i,s),b(e,o),M(l,e,null),c=!0,u||(m=G(e,"click",t[3]),u=!0)},p(f,[g]){(!c||g&1)&&D(n,f[0]),(!c||g&2)&&D(s,f[1]);const d={};g&4&&(d.progress=f[2]),l.$set(d)},i(f){c||(y(l.$$.fragment,f),c=!0)},o(f){j(l.$$.fragment,f),c=!1},d(f){f&&k(e),C(l),u=!1,m()}}}function aa(t,e,a){let{japanese:n}=e,{romaji:r}=e,{progress:i}=e;function s(){console.log("japanese is ",n," and romaji is ",r)}return t.$$set=o=>{"japanese"in o&&a(0,n=o.japanese),"romaji"in o&&a(1,r=o.romaji),"progress"in o&&a(2,i=o.progress)},[n,r,i,s]}class na extends q{constructor(e){super(),I(this,e,aa,ta,L,{japanese:0,romaji:1,progress:2})}}function qe(t,e,a){const n=t.slice();return n[7]=e[a].romaji,n[8]=e[a].hiragana,n[9]=e[a].katakana,n}const ra=t=>({}),Fe=t=>({});function Ne(t){let e,a;return e=new na({props:{japanese:t[1]?t[8].symbol:t[9].symbol,romaji:t[7],progress:t[1]?t[2](t[8]):t[2](t[9])}}),{c(){R(e.$$.fragment)},m(n,r){M(e,n,r),a=!0},p(n,r){const i={};r&3&&(i.japanese=n[1]?n[8].symbol:n[9].symbol),r&1&&(i.romaji=n[7]),r&3&&(i.progress=n[1]?n[2](n[8]):n[2](n[9])),e.$set(i)},i(n){a||(y(e.$$.fragment,n),a=!0)},o(n){j(e.$$.fragment,n),a=!1},d(n){C(e,n)}}}function sa(t){let e,a,n,r;const i=t[5].header,s=he(i,t,t[4],Fe);let o=t[0],l=[];for(let u=0;u<o.length;u+=1)l[u]=Ne(qe(t,o,u));const c=u=>j(l[u],1,1,()=>{l[u]=null});return{c(){e=p("div"),s&&s.c(),a=S(),n=p("div");for(let u=0;u<l.length;u+=1)l[u].c();h(n,"class","grid svelte-19swv05"),h(e,"class","subset svelte-19swv05")},m(u,m){_(u,e,m),s&&s.m(e,null),b(e,a),b(e,n);for(let f=0;f<l.length;f+=1)l[f].m(n,null);r=!0},p(u,[m]){if(s&&s.p&&(!r||m&16)&&be(s,i,u,u[4],r?ge(i,u[4],m,ra):pe(u[4]),Fe),m&7){o=u[0];let f;for(f=0;f<o.length;f+=1){const g=qe(u,o,f);l[f]?(l[f].p(g,m),y(l[f],1)):(l[f]=Ne(g),l[f].c(),y(l[f],1),l[f].m(n,null))}for(ke(),f=o.length;f<l.length;f+=1)c(f);_e()}},i(u){if(!r){y(s,u);for(let m=0;m<o.length;m+=1)y(l[m]);r=!0}},o(u){j(s,u),l=l.filter(Boolean);for(let m=0;m<l.length;m+=1)j(l[m]);r=!1},d(u){u&&k(e),s&&s.d(u),Qe(l,u)}}}function ia(t,e,a){let n,r;Ge(t,ve,u=>a(3,r=u));let{$$slots:i={},$$scope:s}=e,{letters:o}=e;const l=new X;function c({id:u}){return l.get(u).score()}return t.$$set=u=>{"letters"in u&&a(0,o=u.letters),"$$scope"in u&&a(4,s=u.$$scope)},t.$$.update=()=>{t.$$.dirty&8&&a(1,n=r===N.Hira)},[o,n,c,r,s,i]}class oa extends q{constructor(e){super(),I(this,e,ia,sa,L,{letters:0})}}function la(t){let e,a,n,r,i;return{c(){e=p("p"),a=p("span"),n=H("* "),r=H(t[0]),i=H(" *"),h(a,"class","svelte-rtoy8f"),h(e,"class","name svelte-rtoy8f")},m(s,o){_(s,e,o),b(e,a),b(a,n),b(a,r),b(a,i)},p(s,[o]){o&1&&D(r,s[0])},i:E,o:E,d(s){s&&k(e)}}}function ca(t,e,a){let{name:n}=e;return t.$$set=r=>{"name"in r&&a(0,n=r.name)},[n]}class ua extends q{constructor(e){super(),I(this,e,ca,la,L,{name:0})}}function Ye(t,e,a){const n=t.slice();return n[3]=e[a].name,n[4]=e[a].letters,n}function fa(t){let e,a,n,r;return a=new ua({props:{name:t[3]}}),{c(){e=p("div"),R(a.$$.fragment),n=S(),h(e,"slot","header")},m(i,s){_(i,e,s),M(a,e,null),b(e,n),r=!0},p:E,i(i){r||(y(a.$$.fragment,i),r=!0)},o(i){j(a.$$.fragment,i),r=!1},d(i){i&&k(e),C(a)}}}function De(t){let e,a;return e=new oa({props:{letters:t[4],$$slots:{header:[fa]},$$scope:{ctx:t}}}),{c(){R(e.$$.fragment)},m(n,r){M(e,n,r),a=!0},p(n,r){const i={};r&128&&(i.$$scope={dirty:r,ctx:n}),e.$set(i)},i(n){a||(y(e.$$.fragment,n),a=!0)},o(n){j(e.$$.fragment,n),a=!1},d(n){C(e,n)}}}function ma(t){let e,a,n,r=t[0]===N.Hira?"Katakana":"Hiragana",i,s,o,l,c=t[1].subsets,u=[];for(let f=0;f<c.length;f+=1)u[f]=De(Ye(t,c,f));const m=f=>j(u[f],1,1,()=>{u[f]=null});return{c(){e=p("div");for(let f=0;f<u.length;f+=1)u[f].c();a=S(),n=p("button"),i=H(r),h(e,"class","container svelte-t1ycgn"),h(n,"class","switch svelte-t1ycgn")},m(f,g){_(f,e,g);for(let d=0;d<u.length;d+=1)u[d].m(e,null);_(f,a,g),_(f,n,g),b(n,i),s=!0,o||(l=G(n,"click",ve.changeType),o=!0)},p(f,[g]){if(g&2){c=f[1].subsets;let d;for(d=0;d<c.length;d+=1){const v=Ye(f,c,d);u[d]?(u[d].p(v,g),y(u[d],1)):(u[d]=De(v),u[d].c(),y(u[d],1),u[d].m(e,null))}for(ke(),d=c.length;d<u.length;d+=1)m(d);_e()}(!s||g&1)&&r!==(r=f[0]===N.Hira?"Katakana":"Hiragana")&&D(i,r)},i(f){if(!s){for(let g=0;g<c.length;g+=1)y(u[g]);s=!0}},o(f){u=u.filter(Boolean);for(let g=0;g<u.length;g+=1)j(u[g]);s=!1},d(f){f&&k(e),Qe(u,f),f&&k(a),f&&k(n),o=!1,l()}}}function da(t,e,a){let n;Ge(t,ve,s=>a(0,n=s));const r=new st;let i=Tt.createKana(r);return[n,i]}class ha extends q{constructor(e){super(),I(this,e,da,ma,L,{})}}const ga=t=>({}),Pe=t=>({});function ba(t){let e,a,n,r,i;const s=t[2].sign,o=he(s,t,t[1],Pe);return{c(){e=p("div"),o&&o.c(),a=S(),n=p("div"),r=H(t[0]),h(n,"class","count svelte-196hb4e"),h(e,"class","panel svelte-196hb4e")},m(l,c){_(l,e,c),o&&o.m(e,null),b(e,a),b(e,n),b(n,r),i=!0},p(l,[c]){o&&o.p&&(!i||c&2)&&be(o,s,l,l[1],i?ge(s,l[1],c,ga):pe(l[1]),Pe),(!i||c&1)&&D(r,l[0])},i(l){i||(y(o,l),i=!0)},o(l){j(o,l),i=!1},d(l){l&&k(e),o&&o.d(l)}}}function pa(t,e,a){let{$$slots:n={},$$scope:r}=e,{score:i=0}=e;return t.$$set=s=>{"score"in s&&a(0,i=s.score),"$$scope"in s&&a(1,r=s.$$scope)},[i,r,n]}class ya extends q{constructor(e){super(),I(this,e,pa,ba,L,{score:0})}}function ka(t){let e;return{c(){e=p("div"),e.textContent="+",K(e,"color","green")},m(a,n){_(a,e,n)},d(a){a&&k(e)}}}function _a(t){let e;return{c(){e=p("div"),e.textContent="X",K(e,"color","red")},m(a,n){_(a,e,n)},d(a){a&&k(e)}}}function ja(t){let e;return{c(){e=p("div"),e.textContent="?",K(e,"color","grey")},m(a,n){_(a,e,n)},d(a){a&&k(e)}}}function wa(t){let e,a,n;function r(o,l){if(l&1&&(a=null),l&1&&(n=null),o[0]==0)return ja;if(a==null&&(a=o[4][o[0]-1].score()==0),a)return _a;if(n==null&&(n=o[4][o[0]-1].score()==1),n)return ka}let i=r(t,-1),s=i&&i(t);return{c(){e=p("div"),s&&s.c(),h(e,"slot","sign")},m(o,l){_(o,e,l),s&&s.m(e,null)},p(o,l){i!==(i=r(o,l))&&(s&&s.d(1),s=i&&i(o),s&&(s.c(),s.m(e,null)))},d(o){o&&k(e),s&&s.d()}}}function va(t){let e,a,n,r=t[1].assignement+"",i,s,o,l,c,u,m,f=t[1].hint+"",g,d,v,O,$e,T,Se,F,ie,Ee;return l=new ya({props:{score:t[2],$$slots:{sign:[wa]},$$scope:{ctx:t}}}),{c(){e=p("div"),a=p("div"),n=p("p"),i=H(r),s=S(),o=p("div"),R(l.$$.fragment),c=S(),u=p("div"),m=p("div"),g=H(f),d=S(),v=p("div"),O=p("input"),$e=S(),T=p("button"),Se=H("Check if valid"),h(n,"class"," svelte-imzkhe"),h(a,"class","card assignment svelte-imzkhe"),h(o,"class","card score svelte-imzkhe"),h(m,"class","center svelte-imzkhe"),h(u,"class","card hint svelte-imzkhe"),K(u,"border","1px solid transparent"),h(O,"class","card svelte-imzkhe"),h(O,"type","text"),h(O,"placeholder","translation"),T.disabled=t[3],h(T,"class","svelte-imzkhe"),Oe(T,"disabled",t[3]),h(v,"class","answer svelte-imzkhe"),K(v,"border","1px solid transparent"),h(e,"class","layout svelte-imzkhe")},m(w,A){_(w,e,A),b(e,a),b(a,n),b(n,i),b(e,s),b(e,o),M(l,o,null),b(e,c),b(e,u),b(u,m),b(m,g),b(e,d),b(e,v),b(v,O),ze(O,t[1].answer.given),b(v,$e),b(v,T),b(T,Se),F=!0,ie||(Ee=[G(O,"input",t[7]),G(O,"keydown",t[6]),G(T,"click",t[5])],ie=!0)},p(w,[A]){(!F||A&2)&&r!==(r=w[1].assignement+"")&&D(i,r);const oe={};A&4&&(oe.score=w[2]),A&2049&&(oe.$$scope={dirty:A,ctx:w}),l.$set(oe),(!F||A&2)&&f!==(f=w[1].hint+"")&&D(g,f),A&2&&O.value!==w[1].answer.given&&ze(O,w[1].answer.given),(!F||A&8)&&(T.disabled=w[3]),(!F||A&8)&&Oe(T,"disabled",w[3])},i(w){F||(y(l.$$.fragment,w),F=!0)},o(w){j(l.$$.fragment,w),F=!1},d(w){w&&k(e),C(l),ie=!1,W(Ee)}}}function $a(t,e,a){let n,r,i;const s=new X;let l=new Qt().generateLesson(),c=0,u=0;function m(){a(2,u=l.reduce((d,v)=>d+v.score(),0)),s.increase(n.ID,n.checkAnswer()),r&&a(0,c++,c),r||console.log("The lesson just ended")}function f(d){d.key=="Enter"&&m()}function g(){n.answer.given=this.value,a(1,n),a(4,l),a(0,c)}return t.$$.update=()=>{t.$$.dirty&1&&a(1,n=l[c]),t.$$.dirty&1&&(r=c+1<l.length),t.$$.dirty&2&&a(3,i=n.answer.given==="")},[c,n,u,i,l,m,f,g]}class Sa extends q{constructor(e){super(),I(this,e,$a,va,L,{})}}function Ea(t){let e,a;return e=new ha({}),{c(){R(e.$$.fragment)},m(n,r){M(e,n,r),a=!0},i(n){a||(y(e.$$.fragment,n),a=!0)},o(n){j(e.$$.fragment,n),a=!1},d(n){C(e,n)}}}function Ha(t){let e,a;return e=new Sa({}),{c(){R(e.$$.fragment)},m(n,r){M(e,n,r),a=!0},i(n){a||(y(e.$$.fragment,n),a=!0)},o(n){j(e.$$.fragment,n),a=!1},d(n){C(e,n)}}}function xa(t){let e,a,n,r,i,s,o;return r=new Re({props:{path:"/japalearn/",$$slots:{default:[Ea]},$$scope:{ctx:t}}}),s=new Re({props:{path:"/japalearn/exercise",$$slots:{default:[Ha]},$$scope:{ctx:t}}}),{c(){e=p("header"),e.innerHTML=`<nav class="svelte-1rsp3qx"><a href="/japalearn/" class="svelte-1rsp3qx">Grille</a> 
    <a href="/japalearn/exercise" class="svelte-1rsp3qx">Exercice</a></nav>`,a=S(),n=p("main"),R(r.$$.fragment),i=S(),R(s.$$.fragment),h(e,"class","svelte-1rsp3qx")},m(l,c){_(l,e,c),_(l,a,c),_(l,n,c),M(r,n,null),b(n,i),M(s,n,null),o=!0},p(l,[c]){const u={};c&1&&(u.$$scope={dirty:c,ctx:l}),r.$set(u);const m={};c&1&&(m.$$scope={dirty:c,ctx:l}),s.$set(m)},i(l){o||(y(r.$$.fragment,l),y(s.$$.fragment,l),o=!0)},o(l){j(r.$$.fragment,l),j(s.$$.fragment,l),o=!1},d(l){l&&k(e),l&&k(a),l&&k(n),C(r),C(s)}}}class za extends q{constructor(e){super(),I(this,e,null,xa,L,{})}}new za({target:document.getElementById("app")});
