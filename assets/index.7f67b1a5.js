var ta=Object.defineProperty;var na=(e,a,t)=>a in e?ta(e,a,{enumerable:!0,configurable:!0,writable:!0,value:t}):e[a]=t;var M=(e,a,t)=>(na(e,typeof a!="symbol"?a+"":a,t),t);(function(){const a=document.createElement("link").relList;if(a&&a.supports&&a.supports("modulepreload"))return;for(const r of document.querySelectorAll('link[rel="modulepreload"]'))n(r);new MutationObserver(r=>{for(const o of r)if(o.type==="childList")for(const u of o.addedNodes)u.tagName==="LINK"&&u.rel==="modulepreload"&&n(u)}).observe(document,{childList:!0,subtree:!0});function t(r){const o={};return r.integrity&&(o.integrity=r.integrity),r.referrerpolicy&&(o.referrerPolicy=r.referrerpolicy),r.crossorigin==="use-credentials"?o.credentials="include":r.crossorigin==="anonymous"?o.credentials="omit":o.credentials="same-origin",o}function n(r){if(r.ep)return;r.ep=!0;const o=t(r);fetch(r.href,o)}})();function B(){}function V(e){return e()}function P(){return Object.create(null)}function E(e){e.forEach(V)}function ra(e){return typeof e=="function"}function S(e,a){return e!=e?a==a:e!==a||e&&typeof e=="object"||typeof e=="function"}function ia(e){return Object.keys(e).length===0}function m(e,a){e.appendChild(a)}function O(e,a,t){e.insertBefore(a,t||null)}function v(e){e.parentNode.removeChild(e)}function W(e,a){for(let t=0;t<e.length;t+=1)e[t]&&e[t].d(a)}function d(e){return document.createElement(e)}function D(e){return document.createTextNode(e)}function X(){return D(" ")}function ua(e,a,t,n){return e.addEventListener(a,t,n),()=>e.removeEventListener(a,t,n)}function j(e,a,t){t==null?e.removeAttribute(a):e.getAttribute(a)!==t&&e.setAttribute(a,t)}function oa(e){return Array.from(e.childNodes)}function x(e,a){a=""+a,e.wholeText!==a&&(e.data=a)}let N;function y(e){N=e}const b=[],I=[],A=[],G=[],la=Promise.resolve();let F=!1;function sa(){F||(F=!0,la.then(Y))}function L(e){A.push(e)}const w=new Set;let $=0;function Y(){const e=N;do{for(;$<b.length;){const a=b[$];$++,y(a),ca(a.$$)}for(y(null),b.length=0,$=0;I.length;)I.pop()();for(let a=0;a<A.length;a+=1){const t=A[a];w.has(t)||(w.add(t),t())}A.length=0}while(b.length);for(;G.length;)G.pop()();F=!1,w.clear(),y(e)}function ca(e){if(e.fragment!==null){e.update(),E(e.before_update);const a=e.dirty;e.dirty=[-1],e.fragment&&e.fragment.p(e.ctx,a),e.after_update.forEach(L)}}const C=new Set;let g;function Z(){g={r:0,c:[],p:g}}function aa(){g.r||E(g.c),g=g.p}function k(e,a){e&&e.i&&(C.delete(e),e.i(a))}function _(e,a,t,n){if(e&&e.o){if(C.has(e))return;C.add(e),g.c.push(()=>{C.delete(e),n&&(t&&e.d(1),n())}),e.o(a)}else n&&n()}function ea(e){e&&e.c()}function z(e,a,t,n){const{fragment:r,on_mount:o,on_destroy:u,after_update:s}=e.$$;r&&r.m(a,t),n||L(()=>{const i=o.map(V).filter(ra);u?u.push(...i):E(i),e.$$.on_mount=[]}),s.forEach(L)}function K(e,a){const t=e.$$;t.fragment!==null&&(E(t.on_destroy),t.fragment&&t.fragment.d(a),t.on_destroy=t.fragment=null,t.ctx=[])}function fa(e,a){e.$$.dirty[0]===-1&&(b.push(e),sa(),e.$$.dirty.fill(0)),e.$$.dirty[a/31|0]|=1<<a%31}function q(e,a,t,n,r,o,u,s=[-1]){const i=N;y(e);const c=e.$$={fragment:null,ctx:null,props:o,update:B,not_equal:r,bound:P(),on_mount:[],on_destroy:[],on_disconnect:[],before_update:[],after_update:[],context:new Map(a.context||(i?i.$$.context:[])),callbacks:P(),dirty:s,skip_bound:!1,root:a.target||i.$$.root};u&&u(c.root);let l=!1;if(c.ctx=t?t(e,a.props||{},(f,h,...p)=>{const H=p.length?p[0]:h;return c.ctx&&r(c.ctx[f],c.ctx[f]=H)&&(!c.skip_bound&&c.bound[f]&&c.bound[f](H),l&&fa(e,f)),h}):[],c.update(),l=!0,E(c.before_update),c.fragment=n?n(c.ctx):!1,a.target){if(a.hydrate){const f=oa(a.target);c.fragment&&c.fragment.l(f),f.forEach(v)}else c.fragment&&c.fragment.c();a.intro&&k(e.$$.fragment),z(e,a.target,a.anchor,a.customElement),Y()}y(i)}class T{$destroy(){K(this,1),this.$destroy=B}$on(a,t){const n=this.$$.callbacks[a]||(this.$$.callbacks[a]=[]);return n.push(t),()=>{const r=n.indexOf(t);r!==-1&&n.splice(r,1)}}$set(a){this.$$set&&!ia(a)&&(this.$$.skip_bound=!0,this.$$set(a),this.$$.skip_bound=!1)}}class ha{constructor(){M(this,"subsets")}}class ma{static createKana(a){let t=new ha;return t.subsets=[a.common(),a.extended(),a.dakuon(),a.handakuon()],t}}class ka{common(){return{name:"Hiragana",letters:[{romaji:"a",hiragana:"\u3042",katakana:"\u30A2"},{romaji:"i",hiragana:"\u3044",katakana:"\u30A4"},{romaji:"u",hiragana:"\u3046",katakana:"\u30A6"},{romaji:"e",hiragana:"\u3048",katakana:"\u30A8"},{romaji:"o",hiragana:"\u304A",katakana:"\u30AA"},{romaji:"ka",hiragana:"\u304B",katakana:"\u30AB"},{romaji:"ki",hiragana:"\u304D",katakana:"\u30AD"},{romaji:"ku",hiragana:"\u304F",katakana:"\u30AF"},{romaji:"ke",hiragana:"\u3051",katakana:"\u30B1"},{romaji:"ko",hiragana:"\u3053",katakana:"\u30B3"},{romaji:"sa",hiragana:"\u3055",katakana:"\u30B5"},{romaji:"shi",hiragana:"\u3057",katakana:"\u30B7"},{romaji:"su",hiragana:"\u3059",katakana:"\u30B9"},{romaji:"se",hiragana:"\u305B",katakana:"\u30BB"},{romaji:"so",hiragana:"\u305D",katakana:"\u30BD"},{romaji:"ta",hiragana:"\u305F",katakana:"\u30BF"},{romaji:"chi",hiragana:"\u3061",katakana:"\u30C1"},{romaji:"tsu",hiragana:"\u3064",katakana:"\u30C4"},{romaji:"te",hiragana:"\u3066",katakana:"\u30C6"},{romaji:"to",hiragana:"\u3068",katakana:"\u30C8"},{romaji:"na",hiragana:"\u306A",katakana:"\u30CA"},{romaji:"ni",hiragana:"\u306B",katakana:"\u30CB"},{romaji:"nu",hiragana:"\u306C",katakana:"\u30CC"},{romaji:"ne",hiragana:"\u306D",katakana:"\u30CD"},{romaji:"no",hiragana:"\u306E",katakana:"\u30CE"},{romaji:"ha",hiragana:"\u306F",katakana:"\u30CF"},{romaji:"hi",hiragana:"\u3072",katakana:"\u30D2"},{romaji:"fu",hiragana:"\u3075",katakana:"\u30D5"},{romaji:"he",hiragana:"\u3078",katakana:"\u30D8"},{romaji:"ho",hiragana:"\u307B",katakana:"\u30DB"},{romaji:"ma",hiragana:"\u307E",katakana:"\u30DE"},{romaji:"mi",hiragana:"\u307F",katakana:"\u30DF"},{romaji:"mu",hiragana:"\u3080",katakana:"\u30E0"},{romaji:"me",hiragana:"\u3081",katakana:"\u30E1"},{romaji:"mo",hiragana:"\u3082",katakana:"\u30E2"},{romaji:"ra",hiragana:"\u3089",katakana:"\u30E9"},{romaji:"ri",hiragana:"\u308A",katakana:"\u30EA"},{romaji:"ru",hiragana:"\u308B",katakana:"\u30EB"},{romaji:"re",hiragana:"\u308C",katakana:"\u30EC"},{romaji:"ro",hiragana:"\u308D",katakana:"\u30ED"}]}}extended(){return{name:"Other Hiragana",letters:[{romaji:"ya",hiragana:"\u3084",katakana:"\u30E4"},{romaji:"yu",hiragana:"\u3086",katakana:"\u30E6"},{romaji:"yo",hiragana:"\u3088",katakana:"\u30E8"},{romaji:"wa",hiragana:"\u308F",katakana:"\u30EF"},{romaji:"n",hiragana:"\u3093",katakana:"\u30F3"}]}}dakuon(){return{name:"Dakuon",letters:[{romaji:"ga",hiragana:"\u304C",katakana:"\u30AC"},{romaji:"gi",hiragana:"\u304E",katakana:"\u30AE"},{romaji:"gu",hiragana:"\u3050",katakana:"\u30B0"},{romaji:"ge",hiragana:"\u3052",katakana:"\u30B2"},{romaji:"go",hiragana:"\u3054",katakana:"\u30B4"},{romaji:"za",hiragana:"\u3056",katakana:"\u30B6"},{romaji:"ji",hiragana:"\u3058",katakana:"\u30B8"},{romaji:"zu",hiragana:"\u305A",katakana:"\u30BA"},{romaji:"ze",hiragana:"\u305C",katakana:"\u30BC"},{romaji:"zo",hiragana:"\u305E",katakana:"\u30BE"},{romaji:"da",hiragana:"\u3060",katakana:"\u30C0"},{romaji:"ji",hiragana:"\u3062",katakana:"\u30C2"},{romaji:"zu",hiragana:"\u3065",katakana:"\u30C5"},{romaji:"de",hiragana:"\u3067",katakana:"\u30C7"},{romaji:"do",hiragana:"\u3069",katakana:"\u30C9"},{romaji:"ba",hiragana:"\u3070",katakana:"\u30D0"},{romaji:"bi",hiragana:"\u3073",katakana:"\u30D3"},{romaji:"bu",hiragana:"\u3076",katakana:"\u30D6"},{romaji:"be",hiragana:"\u3079",katakana:"\u30D9"},{romaji:"bo",hiragana:"\u307C",katakana:"\u30DC"}]}}handakuon(){return{name:"Handakuon",letters:[{romaji:"pa",hiragana:"\u3071",katakana:"\u30D1"},{romaji:"pi",hiragana:"\u3074",katakana:"\u30D4"},{romaji:"pu",hiragana:"\u3077",katakana:"\u30D7"},{romaji:"pe",hiragana:"\u307A",katakana:"\u30DA"},{romaji:"po",hiragana:"\u307D",katakana:"\u30DD"}]}}}function ga(e){let a,t,n,r,o,u,s,i;return{c(){a=d("button"),t=d("p"),n=D(e[0]),r=X(),o=d("p"),u=D(e[1]),j(t,"class","japanese svelte-58djdn"),j(o,"class","svelte-58djdn"),j(a,"class","letter svelte-58djdn")},m(c,l){O(c,a,l),m(a,t),m(t,n),m(a,r),m(a,o),m(o,u),s||(i=ua(a,"click",e[2]),s=!0)},p(c,[l]){l&1&&x(n,c[0]),l&2&&x(u,c[1])},i:B,o:B,d(c){c&&v(a),s=!1,i()}}}function da(e,a,t){let{japanese:n}=a,{romaji:r}=a;function o(){console.log("japanese is ",n," and romaji is ",r)}return e.$$set=u=>{"japanese"in u&&t(0,n=u.japanese),"romaji"in u&&t(1,r=u.romaji)},[n,r,o]}class ja extends T{constructor(a){super(),q(this,a,da,ga,S,{japanese:0,romaji:1})}}function J(e,a,t){const n=e.slice();return n[2]=a[t].romaji,n[3]=a[t].hiragana,n}function Q(e){let a,t;return a=new ja({props:{japanese:e[3],romaji:e[2]}}),{c(){ea(a.$$.fragment)},m(n,r){z(a,n,r),t=!0},p(n,r){const o={};r&1&&(o.japanese=n[3]),r&1&&(o.romaji=n[2]),a.$set(o)},i(n){t||(k(a.$$.fragment,n),t=!0)},o(n){_(a.$$.fragment,n),t=!1},d(n){K(a,n)}}}function _a(e){let a,t,n,r,o,u,s=e[0],i=[];for(let l=0;l<s.length;l+=1)i[l]=Q(J(e,s,l));const c=l=>_(i[l],1,1,()=>{i[l]=null});return{c(){a=d("div"),t=d("p"),n=D(e[1]),r=X(),o=d("div");for(let l=0;l<i.length;l+=1)i[l].c();j(t,"class","name svelte-phqh39"),j(o,"class","grid svelte-phqh39"),j(a,"class","subset svelte-phqh39")},m(l,f){O(l,a,f),m(a,t),m(t,n),m(a,r),m(a,o);for(let h=0;h<i.length;h+=1)i[h].m(o,null);u=!0},p(l,[f]){if((!u||f&2)&&x(n,l[1]),f&1){s=l[0];let h;for(h=0;h<s.length;h+=1){const p=J(l,s,h);i[h]?(i[h].p(p,f),k(i[h],1)):(i[h]=Q(p),i[h].c(),k(i[h],1),i[h].m(o,null))}for(Z(),h=s.length;h<i.length;h+=1)c(h);aa()}},i(l){if(!u){for(let f=0;f<s.length;f+=1)k(i[f]);u=!0}},o(l){i=i.filter(Boolean);for(let f=0;f<i.length;f+=1)_(i[f]);u=!1},d(l){l&&v(a),W(i,l)}}}function pa(e,a,t){let{letters:n}=a,{name:r}=a;return e.$$set=o=>{"letters"in o&&t(0,n=o.letters),"name"in o&&t(1,r=o.name)},[n,r]}class ba extends T{constructor(a){super(),q(this,a,pa,_a,S,{letters:0,name:1})}}function R(e,a,t){const n=e.slice();return n[2]=a[t].name,n[3]=a[t].letters,n}function U(e){let a,t;return a=new ba({props:{name:e[2],letters:e[3]}}),{c(){ea(a.$$.fragment)},m(n,r){z(a,n,r),t=!0},p:B,i(n){t||(k(a.$$.fragment,n),t=!0)},o(n){_(a.$$.fragment,n),t=!1},d(n){K(a,n)}}}function ya(e){let a,t,n=e[0].subsets,r=[];for(let u=0;u<n.length;u+=1)r[u]=U(R(e,n,u));const o=u=>_(r[u],1,1,()=>{r[u]=null});return{c(){a=d("main");for(let u=0;u<r.length;u+=1)r[u].c();j(a,"class","svelte-uc9b6t")},m(u,s){O(u,a,s);for(let i=0;i<r.length;i+=1)r[i].m(a,null);t=!0},p(u,[s]){if(s&1){n=u[0].subsets;let i;for(i=0;i<n.length;i+=1){const c=R(u,n,i);r[i]?(r[i].p(c,s),k(r[i],1)):(r[i]=U(c),r[i].c(),k(r[i],1),r[i].m(a,null))}for(Z(),i=n.length;i<r.length;i+=1)o(i);aa()}},i(u){if(!t){for(let s=0;s<n.length;s+=1)k(r[s]);t=!0}},o(u){r=r.filter(Boolean);for(let s=0;s<r.length;s+=1)_(r[s]);t=!1},d(u){u&&v(a),W(r,u)}}}function Ba(e){const a=new ka;return[ma.createKana(a)]}class Ea extends T{constructor(a){super(),q(this,a,Ba,ya,S,{})}}new Ea({target:document.getElementById("app")});