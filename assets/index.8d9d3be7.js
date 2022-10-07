var ca=Object.defineProperty;var fa=(a,t,e)=>t in a?ca(a,t,{enumerable:!0,configurable:!0,writable:!0,value:e}):a[t]=e;var R=(a,t,e)=>(fa(a,typeof t!="symbol"?t+"":t,e),e);(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const r of document.querySelectorAll('link[rel="modulepreload"]'))n(r);new MutationObserver(r=>{for(const u of r)if(u.type==="childList")for(const o of u.addedNodes)o.tagName==="LINK"&&o.rel==="modulepreload"&&n(o)}).observe(document,{childList:!0,subtree:!0});function e(r){const u={};return r.integrity&&(u.integrity=r.integrity),r.referrerpolicy&&(u.referrerPolicy=r.referrerpolicy),r.crossorigin==="use-credentials"?u.credentials="include":r.crossorigin==="anonymous"?u.credentials="omit":u.credentials="same-origin",u}function n(r){if(r.ep)return;r.ep=!0;const u=e(r);fetch(r.href,u)}})();function _(){}function ha(a,t){for(const e in t)a[e]=t[e];return a}function ea(a){return a()}function U(){return Object.create(null)}function D(a){a.forEach(ea)}function ma(a){return typeof a=="function"}function w(a,t){return a!=a?t==t:a!==t||a&&typeof a=="object"||typeof a=="function"}function ga(a){return Object.keys(a).length===0}function ka(a,...t){if(a==null)return _;const e=a.subscribe(...t);return e.unsubscribe?()=>e.unsubscribe():e}function na(a,t,e){a.$$.on_destroy.push(ka(t,e))}function da(a,t,e,n){if(a){const r=ra(a,t,e,n);return a[0](r)}}function ra(a,t,e,n){return a[1]&&n?ha(e.ctx.slice(),a[1](n(t))):e.ctx}function _a(a,t,e,n){if(a[2]&&n){const r=a[2](n(e));if(t.dirty===void 0)return r;if(typeof r=="object"){const u=[],o=Math.max(t.dirty.length,r.length);for(let l=0;l<o;l+=1)u[l]=t.dirty[l]|r[l];return u}return t.dirty|r}return t.dirty}function pa(a,t,e,n,r,u){if(r){const o=ra(t,e,n,u);a.p(o,r)}}function ja(a){if(a.ctx.length>32){const t=[],e=a.ctx.length/32;for(let n=0;n<e;n++)t[n]=-1;return t}return-1}function k(a,t){a.appendChild(t)}function S(a,t,e){a.insertBefore(t,e||null)}function E(a){a.parentNode.removeChild(a)}function ia(a,t){for(let e=0;e<a.length;e+=1)a[e]&&a[e].d(t)}function p(a){return document.createElement(a)}function v(a){return document.createTextNode(a)}function P(){return v(" ")}function ua(a,t,e,n){return a.addEventListener(t,e,n),()=>a.removeEventListener(t,e,n)}function j(a,t,e){e==null?a.removeAttribute(t):a.getAttribute(t)!==e&&a.setAttribute(t,e)}function ba(a){return Array.from(a.childNodes)}function K(a,t){t=""+t,a.wholeText!==t&&(a.data=t)}let I;function A(a){I=a}const C=[],V=[],H=[],W=[],ya=Promise.resolve();let T=!1;function $a(){T||(T=!0,ya.then(oa))}function q(a){H.push(a)}const M=new Set;let x=0;function oa(){const a=I;do{for(;x<C.length;){const t=C[x];x++,A(t),va(t.$$)}for(A(null),C.length=0,x=0;V.length;)V.pop()();for(let t=0;t<H.length;t+=1){const e=H[t];M.has(e)||(M.add(e),e())}H.length=0}while(C.length);for(;W.length;)W.pop()();T=!1,M.clear(),A(a)}function va(a){if(a.fragment!==null){a.update(),D(a.before_update);const t=a.dirty;a.dirty=[-1],a.fragment&&a.fragment.p(a.ctx,t),a.after_update.forEach(q)}}const F=new Set;let $;function sa(){$={r:0,c:[],p:$}}function la(){$.r||D($.c),$=$.p}function d(a,t){a&&a.i&&(F.delete(a),a.i(t))}function y(a,t,e,n){if(a&&a.o){if(F.has(a))return;F.add(a),$.c.push(()=>{F.delete(a),n&&(e&&a.d(1),n())}),a.o(t)}else n&&n()}function G(a){a&&a.c()}function L(a,t,e,n){const{fragment:r,on_mount:u,on_destroy:o,after_update:l}=a.$$;r&&r.m(t,e),n||q(()=>{const f=u.map(ea).filter(ma);o?o.push(...f):D(f),a.$$.on_mount=[]}),l.forEach(q)}function O(a,t){const e=a.$$;e.fragment!==null&&(D(e.on_destroy),e.fragment&&e.fragment.d(t),e.on_destroy=e.fragment=null,e.ctx=[])}function Ba(a,t){a.$$.dirty[0]===-1&&(C.push(a),$a(),a.$$.dirty.fill(0)),a.$$.dirty[t/31|0]|=1<<t%31}function z(a,t,e,n,r,u,o,l=[-1]){const f=I;A(a);const c=a.$$={fragment:null,ctx:null,props:u,update:_,not_equal:r,bound:U(),on_mount:[],on_destroy:[],on_disconnect:[],before_update:[],after_update:[],context:new Map(t.context||(f?f.$$.context:[])),callbacks:U(),dirty:l,skip_bound:!1,root:t.target||f.$$.root};o&&o(c.root);let i=!1;if(c.ctx=e?e(a,t.props||{},(h,s,...g)=>{const m=g.length?g[0]:s;return c.ctx&&r(c.ctx[h],c.ctx[h]=m)&&(!c.skip_bound&&c.bound[h]&&c.bound[h](m),i&&Ba(a,h)),s}):[],c.update(),i=!0,D(c.before_update),c.fragment=n?n(c.ctx):!1,t.target){if(t.hydrate){const h=ba(t.target);c.fragment&&c.fragment.l(h),h.forEach(E)}else c.fragment&&c.fragment.c();t.intro&&d(a.$$.fragment),L(a,t.target,t.anchor,t.customElement),oa()}A(f)}class N{$destroy(){O(this,1),this.$destroy=_}$on(t,e){const n=this.$$.callbacks[t]||(this.$$.callbacks[t]=[]);return n.push(e),()=>{const r=n.indexOf(e);r!==-1&&n.splice(r,1)}}$set(t){this.$$set&&!ga(t)&&(this.$$.skip_bound=!0,this.$$set(t),this.$$.skip_bound=!1)}}class Ea{constructor(){R(this,"subsets")}}class Ca{static createKana(t){let e=new Ea;return e.subsets=[t.common(),t.extended(),t.dakuon(),t.handakuon()],e}}var b=(a=>(a[a.Kata=0]="Kata",a[a.Hira=1]="Hira",a))(b||{});class Aa{common(){return{name:"Common Kana",letters:[{romaji:"a",hiragana:"\u3042",katakana:"\u30A2"},{romaji:"i",hiragana:"\u3044",katakana:"\u30A4"},{romaji:"u",hiragana:"\u3046",katakana:"\u30A6"},{romaji:"e",hiragana:"\u3048",katakana:"\u30A8"},{romaji:"o",hiragana:"\u304A",katakana:"\u30AA"},{romaji:"ka",hiragana:"\u304B",katakana:"\u30AB"},{romaji:"ki",hiragana:"\u304D",katakana:"\u30AD"},{romaji:"ku",hiragana:"\u304F",katakana:"\u30AF"},{romaji:"ke",hiragana:"\u3051",katakana:"\u30B1"},{romaji:"ko",hiragana:"\u3053",katakana:"\u30B3"},{romaji:"sa",hiragana:"\u3055",katakana:"\u30B5"},{romaji:"shi",hiragana:"\u3057",katakana:"\u30B7"},{romaji:"su",hiragana:"\u3059",katakana:"\u30B9"},{romaji:"se",hiragana:"\u305B",katakana:"\u30BB"},{romaji:"so",hiragana:"\u305D",katakana:"\u30BD"},{romaji:"ta",hiragana:"\u305F",katakana:"\u30BF"},{romaji:"chi",hiragana:"\u3061",katakana:"\u30C1"},{romaji:"tsu",hiragana:"\u3064",katakana:"\u30C4"},{romaji:"te",hiragana:"\u3066",katakana:"\u30C6"},{romaji:"to",hiragana:"\u3068",katakana:"\u30C8"},{romaji:"na",hiragana:"\u306A",katakana:"\u30CA"},{romaji:"ni",hiragana:"\u306B",katakana:"\u30CB"},{romaji:"nu",hiragana:"\u306C",katakana:"\u30CC"},{romaji:"ne",hiragana:"\u306D",katakana:"\u30CD"},{romaji:"no",hiragana:"\u306E",katakana:"\u30CE"},{romaji:"ha",hiragana:"\u306F",katakana:"\u30CF"},{romaji:"hi",hiragana:"\u3072",katakana:"\u30D2"},{romaji:"fu",hiragana:"\u3075",katakana:"\u30D5"},{romaji:"he",hiragana:"\u3078",katakana:"\u30D8"},{romaji:"ho",hiragana:"\u307B",katakana:"\u30DB"},{romaji:"ma",hiragana:"\u307E",katakana:"\u30DE"},{romaji:"mi",hiragana:"\u307F",katakana:"\u30DF"},{romaji:"mu",hiragana:"\u3080",katakana:"\u30E0"},{romaji:"me",hiragana:"\u3081",katakana:"\u30E1"},{romaji:"mo",hiragana:"\u3082",katakana:"\u30E2"},{romaji:"ra",hiragana:"\u3089",katakana:"\u30E9"},{romaji:"ri",hiragana:"\u308A",katakana:"\u30EA"},{romaji:"ru",hiragana:"\u308B",katakana:"\u30EB"},{romaji:"re",hiragana:"\u308C",katakana:"\u30EC"},{romaji:"ro",hiragana:"\u308D",katakana:"\u30ED"}]}}extended(){return{name:"Other Kana",letters:[{romaji:"ya",hiragana:"\u3084",katakana:"\u30E4"},{romaji:"yu",hiragana:"\u3086",katakana:"\u30E6"},{romaji:"yo",hiragana:"\u3088",katakana:"\u30E8"},{romaji:"wa",hiragana:"\u308F",katakana:"\u30EF"},{romaji:"n",hiragana:"\u3093",katakana:"\u30F3"}]}}dakuon(){return{name:"Dakuon",letters:[{romaji:"ga",hiragana:"\u304C",katakana:"\u30AC"},{romaji:"gi",hiragana:"\u304E",katakana:"\u30AE"},{romaji:"gu",hiragana:"\u3050",katakana:"\u30B0"},{romaji:"ge",hiragana:"\u3052",katakana:"\u30B2"},{romaji:"go",hiragana:"\u3054",katakana:"\u30B4"},{romaji:"za",hiragana:"\u3056",katakana:"\u30B6"},{romaji:"ji",hiragana:"\u3058",katakana:"\u30B8"},{romaji:"zu",hiragana:"\u305A",katakana:"\u30BA"},{romaji:"ze",hiragana:"\u305C",katakana:"\u30BC"},{romaji:"zo",hiragana:"\u305E",katakana:"\u30BE"},{romaji:"da",hiragana:"\u3060",katakana:"\u30C0"},{romaji:"ji",hiragana:"\u3062",katakana:"\u30C2"},{romaji:"zu",hiragana:"\u3065",katakana:"\u30C5"},{romaji:"de",hiragana:"\u3067",katakana:"\u30C7"},{romaji:"do",hiragana:"\u3069",katakana:"\u30C9"},{romaji:"ba",hiragana:"\u3070",katakana:"\u30D0"},{romaji:"bi",hiragana:"\u3073",katakana:"\u30D3"},{romaji:"bu",hiragana:"\u3076",katakana:"\u30D6"},{romaji:"be",hiragana:"\u3079",katakana:"\u30D9"},{romaji:"bo",hiragana:"\u307C",katakana:"\u30DC"}]}}handakuon(){return{name:"Handakuon",letters:[{romaji:"pa",hiragana:"\u3071",katakana:"\u30D1"},{romaji:"pi",hiragana:"\u3074",katakana:"\u30D4"},{romaji:"pu",hiragana:"\u3077",katakana:"\u30D7"},{romaji:"pe",hiragana:"\u307A",katakana:"\u30DA"},{romaji:"po",hiragana:"\u307D",katakana:"\u30DD"}]}}}const B=[];function Da(a,t=_){let e;const n=new Set;function r(l){if(w(a,l)&&(a=l,e)){const f=!B.length;for(const c of n)c[1](),B.push(c,a);if(f){for(let c=0;c<B.length;c+=2)B[c][0](B[c+1]);B.length=0}}}function u(l){r(l(a))}function o(l,f=_){const c=[l,f];return n.add(c),n.size===1&&(e=t(r)||_),l(a),()=>{n.delete(c),n.size===0&&(e(),e=null)}}return{set:r,update:u,subscribe:o}}const J=wa();function wa(){const a=b.Hira,{subscribe:t,set:e}=Da(a);let n=a;return{subscribe:t,changeType:()=>{n===b.Hira?n=b.Kata:n=b.Hira,e(n)}}}function Sa(a){let t,e,n,r,u,o,l,f;return{c(){t=p("button"),e=p("p"),n=v(a[0]),r=P(),u=p("p"),o=v(a[1]),j(e,"class","japanese svelte-58djdn"),j(u,"class","svelte-58djdn"),j(t,"class","letter svelte-58djdn")},m(c,i){S(c,t,i),k(t,e),k(e,n),k(t,r),k(t,u),k(u,o),l||(f=ua(t,"click",a[2]),l=!0)},p(c,[i]){i&1&&K(n,c[0]),i&2&&K(o,c[1])},i:_,o:_,d(c){c&&E(t),l=!1,f()}}}function xa(a,t,e){let{japanese:n}=t,{romaji:r}=t;function u(){console.log("japanese is ",n," and romaji is ",r)}return a.$$set=o=>{"japanese"in o&&e(0,n=o.japanese),"romaji"in o&&e(1,r=o.romaji)},[n,r,u]}class Ha extends N{constructor(t){super(),z(this,t,xa,Sa,w,{japanese:0,romaji:1})}}function X(a,t,e){const n=a.slice();return n[4]=t[e].romaji,n[5]=t[e].hiragana,n[6]=t[e].katakana,n}const Fa=a=>({}),Y=a=>({});function Z(a){let t,e;return t=new Ha({props:{japanese:a[1]===b.Hira?a[5]:a[6],romaji:a[4]}}),{c(){G(t.$$.fragment)},m(n,r){L(t,n,r),e=!0},p(n,r){const u={};r&3&&(u.japanese=n[1]===b.Hira?n[5]:n[6]),r&1&&(u.romaji=n[4]),t.$set(u)},i(n){e||(d(t.$$.fragment,n),e=!0)},o(n){y(t.$$.fragment,n),e=!1},d(n){O(t,n)}}}function Ka(a){let t,e,n,r;const u=a[3].header,o=da(u,a,a[2],Y);let l=a[0],f=[];for(let i=0;i<l.length;i+=1)f[i]=Z(X(a,l,i));const c=i=>y(f[i],1,1,()=>{f[i]=null});return{c(){t=p("div"),o&&o.c(),e=P(),n=p("div");for(let i=0;i<f.length;i+=1)f[i].c();j(n,"class","grid svelte-19swv05"),j(t,"class","subset svelte-19swv05")},m(i,h){S(i,t,h),o&&o.m(t,null),k(t,e),k(t,n);for(let s=0;s<f.length;s+=1)f[s].m(n,null);r=!0},p(i,[h]){if(o&&o.p&&(!r||h&4)&&pa(o,u,i,i[2],r?_a(u,i[2],h,Fa):ja(i[2]),Y),h&3){l=i[0];let s;for(s=0;s<l.length;s+=1){const g=X(i,l,s);f[s]?(f[s].p(g,h),d(f[s],1)):(f[s]=Z(g),f[s].c(),d(f[s],1),f[s].m(n,null))}for(sa(),s=l.length;s<f.length;s+=1)c(s);la()}},i(i){if(!r){d(o,i);for(let h=0;h<l.length;h+=1)d(f[h]);r=!0}},o(i){y(o,i),f=f.filter(Boolean);for(let h=0;h<f.length;h+=1)y(f[h]);r=!1},d(i){i&&E(t),o&&o.d(i),ia(f,i)}}}function La(a,t,e){let n;na(a,J,l=>e(1,n=l));let{$$slots:r={},$$scope:u}=t,{letters:o}=t;return a.$$set=l=>{"letters"in l&&e(0,o=l.letters),"$$scope"in l&&e(2,u=l.$$scope)},[o,n,u,r]}class Oa extends N{constructor(t){super(),z(this,t,La,Ka,w,{letters:0})}}function za(a){let t,e,n,r,u;return{c(){t=p("p"),e=p("span"),n=v("* "),r=v(a[0]),u=v(" *"),j(e,"class","svelte-rtoy8f"),j(t,"class","name svelte-rtoy8f")},m(o,l){S(o,t,l),k(t,e),k(e,n),k(e,r),k(e,u)},p(o,[l]){l&1&&K(r,o[0])},i:_,o:_,d(o){o&&E(t)}}}function Na(a,t,e){let{name:n}=t;return a.$$set=r=>{"name"in r&&e(0,n=r.name)},[n]}class Ma extends N{constructor(t){super(),z(this,t,Na,za,w,{name:0})}}function aa(a,t,e){const n=a.slice();return n[3]=t[e].name,n[4]=t[e].letters,n}function Ta(a){let t,e,n;return e=new Ma({props:{name:a[3]}}),{c(){t=p("div"),G(e.$$.fragment),j(t,"slot","header")},m(r,u){S(r,t,u),L(e,t,null),n=!0},p:_,i(r){n||(d(e.$$.fragment,r),n=!0)},o(r){y(e.$$.fragment,r),n=!1},d(r){r&&E(t),O(e)}}}function ta(a){let t,e;return t=new Oa({props:{letters:a[4],$$slots:{header:[Ta]},$$scope:{ctx:a}}}),{c(){G(t.$$.fragment)},m(n,r){L(t,n,r),e=!0},p(n,r){const u={};r&128&&(u.$$scope={dirty:r,ctx:n}),t.$set(u)},i(n){e||(d(t.$$.fragment,n),e=!0)},o(n){y(t.$$.fragment,n),e=!1},d(n){O(t,n)}}}function qa(a){let t,e,n,r=a[0]===b.Hira?"Katakana":"Hiragana",u,o,l,f,c=a[1].subsets,i=[];for(let s=0;s<c.length;s+=1)i[s]=ta(aa(a,c,s));const h=s=>y(i[s],1,1,()=>{i[s]=null});return{c(){t=p("main");for(let s=0;s<i.length;s+=1)i[s].c();e=P(),n=p("button"),u=v(r),j(n,"class","switch svelte-12ef6pv"),j(t,"class","svelte-12ef6pv")},m(s,g){S(s,t,g);for(let m=0;m<i.length;m+=1)i[m].m(t,null);k(t,e),k(t,n),k(n,u),o=!0,l||(f=ua(n,"click",J.changeType),l=!0)},p(s,[g]){if(g&2){c=s[1].subsets;let m;for(m=0;m<c.length;m+=1){const Q=aa(s,c,m);i[m]?(i[m].p(Q,g),d(i[m],1)):(i[m]=ta(Q),i[m].c(),d(i[m],1),i[m].m(t,e))}for(sa(),m=c.length;m<i.length;m+=1)h(m);la()}(!o||g&1)&&r!==(r=s[0]===b.Hira?"Katakana":"Hiragana")&&K(u,r)},i(s){if(!o){for(let g=0;g<c.length;g+=1)d(i[g]);o=!0}},o(s){i=i.filter(Boolean);for(let g=0;g<i.length;g+=1)y(i[g]);o=!1},d(s){s&&E(t),ia(i,s),l=!1,f()}}}function Pa(a,t,e){let n;na(a,J,o=>e(0,n=o));const r=new Aa;let u=Ca.createKana(r);return[n,u]}class Ia extends N{constructor(t){super(),z(this,t,Pa,qa,w,{})}}new Ia({target:document.getElementById("app")});