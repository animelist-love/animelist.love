function $(){}const _t=t=>t;function dt(t,e){for(const n in e)t[n]=e[n];return t}function ht(t){return!!t&&(typeof t=="object"||typeof t=="function")&&typeof t.then=="function"}function Y(t){return t()}function I(){return Object.create(null)}function C(t){t.forEach(Y)}function L(t){return typeof t=="function"}function Jt(t,e){return t!=t?e==e:t!==e||t&&typeof t=="object"||typeof t=="function"}let D;function Kt(t,e){return D||(D=document.createElement("a")),D.href=e,t===D.href}function mt(t){return Object.keys(t).length===0}function pt(t,...e){if(t==null)return $;const n=t.subscribe(...e);return n.unsubscribe?()=>n.unsubscribe():n}function Qt(t,e,n){t.$$.on_destroy.push(pt(e,n))}function Vt(t,e,n,i){if(t){const s=Z(t,e,n,i);return t[0](s)}}function Z(t,e,n,i){return t[1]&&i?dt(n.ctx.slice(),t[1](i(e))):n.ctx}function Xt(t,e,n,i){if(t[2]&&i){const s=t[2](i(n));if(e.dirty===void 0)return s;if(typeof s=="object"){const r=[],c=Math.max(e.dirty.length,s.length);for(let u=0;u<c;u+=1)r[u]=e.dirty[u]|s[u];return r}return e.dirty|s}return e.dirty}function Yt(t,e,n,i,s,r){if(s){const c=Z(e,n,i,r);t.p(c,s)}}function Zt(t){if(t.ctx.length>32){const e=[],n=t.ctx.length/32;for(let i=0;i<n;i++)e[i]=-1;return e}return-1}function te(t){const e={};for(const n in t)e[n]=!0;return e}function ee(t,e,n){return t.set(n),e}function ne(t){return t&&L(t.destroy)?t.destroy:$}const tt=typeof window<"u";let yt=tt?()=>window.performance.now():()=>Date.now(),z=tt?t=>requestAnimationFrame(t):$;const E=new Set;function et(t){E.forEach(e=>{e.c(t)||(E.delete(e),e.f())}),E.size!==0&&z(et)}function gt(t){let e;return E.size===0&&z(et),{promise:new Promise(n=>{E.add(e={c:t,f:n})}),abort(){E.delete(e)}}}let H=!1;function $t(){H=!0}function bt(){H=!1}function xt(t,e,n,i){for(;t<e;){const s=t+(e-t>>1);n(s)<=i?t=s+1:e=s}return t}function wt(t){if(t.hydrate_init)return;t.hydrate_init=!0;let e=t.childNodes;if(t.nodeName==="HEAD"){const o=[];for(let l=0;l<e.length;l++){const f=e[l];f.claim_order!==void 0&&o.push(f)}e=o}const n=new Int32Array(e.length+1),i=new Int32Array(e.length);n[0]=-1;let s=0;for(let o=0;o<e.length;o++){const l=e[o].claim_order,f=(s>0&&e[n[s]].claim_order<=l?s+1:xt(1,s,_=>e[n[_]].claim_order,l))-1;i[o]=n[f]+1;const a=f+1;n[a]=o,s=Math.max(a,s)}const r=[],c=[];let u=e.length-1;for(let o=n[s]+1;o!=0;o=i[o-1]){for(r.push(e[o-1]);u>=o;u--)c.push(e[u]);u--}for(;u>=0;u--)c.push(e[u]);r.reverse(),c.sort((o,l)=>o.claim_order-l.claim_order);for(let o=0,l=0;o<c.length;o++){for(;l<r.length&&c[o].claim_order>=r[l].claim_order;)l++;const f=l<r.length?r[l]:null;t.insertBefore(c[o],f)}}function vt(t,e){t.appendChild(e)}function nt(t){if(!t)return document;const e=t.getRootNode?t.getRootNode():t.ownerDocument;return e&&e.host?e:t.ownerDocument}function Et(t){const e=F("style");return kt(nt(t),e),e.sheet}function kt(t,e){return vt(t.head||t,e),e.sheet}function Nt(t,e){if(H){for(wt(t),(t.actual_end_child===void 0||t.actual_end_child!==null&&t.actual_end_child.parentNode!==t)&&(t.actual_end_child=t.firstChild);t.actual_end_child!==null&&t.actual_end_child.claim_order===void 0;)t.actual_end_child=t.actual_end_child.nextSibling;e!==t.actual_end_child?(e.claim_order!==void 0||e.parentNode!==t)&&t.insertBefore(e,t.actual_end_child):t.actual_end_child=e.nextSibling}else(e.parentNode!==t||e.nextSibling!==null)&&t.appendChild(e)}function Tt(t,e,n){t.insertBefore(e,n||null)}function At(t,e,n){H&&!n?Nt(t,e):(e.parentNode!==t||e.nextSibling!=n)&&t.insertBefore(e,n||null)}function T(t){t.parentNode&&t.parentNode.removeChild(t)}function ie(t,e){for(let n=0;n<t.length;n+=1)t[n]&&t[n].d(e)}function F(t){return document.createElement(t)}function it(t){return document.createElementNS("http://www.w3.org/2000/svg",t)}function G(t){return document.createTextNode(t)}function se(){return G(" ")}function re(){return G("")}function ce(t,e,n,i){return t.addEventListener(e,n,i),()=>t.removeEventListener(e,n,i)}function oe(t){return function(e){return e.preventDefault(),t.call(this,e)}}function le(t){return function(e){return e.stopPropagation(),t.call(this,e)}}function Ct(t,e,n){n==null?t.removeAttribute(e):t.getAttribute(e)!==n&&t.setAttribute(e,n)}function ue(t,e){const n=Object.getOwnPropertyDescriptors(t.__proto__);for(const i in e)e[i]==null?t.removeAttribute(i):i==="style"?t.style.cssText=e[i]:i==="__value"?t.value=t[i]=e[i]:n[i]&&n[i].set?t[i]=e[i]:Ct(t,i,e[i])}function Dt(t){return Array.from(t.childNodes)}function st(t){t.claim_info===void 0&&(t.claim_info={last_index:0,total_claimed:0})}function rt(t,e,n,i,s=!1){st(t);const r=(()=>{for(let c=t.claim_info.last_index;c<t.length;c++){const u=t[c];if(e(u)){const o=n(u);return o===void 0?t.splice(c,1):t[c]=o,s||(t.claim_info.last_index=c),u}}for(let c=t.claim_info.last_index-1;c>=0;c--){const u=t[c];if(e(u)){const o=n(u);return o===void 0?t.splice(c,1):t[c]=o,s?o===void 0&&t.claim_info.last_index--:t.claim_info.last_index=c,u}}return i()})();return r.claim_order=t.claim_info.total_claimed,t.claim_info.total_claimed+=1,r}function ct(t,e,n,i){return rt(t,s=>s.nodeName===e,s=>{const r=[];for(let c=0;c<s.attributes.length;c++){const u=s.attributes[c];n[u.name]||r.push(u.name)}r.forEach(c=>s.removeAttribute(c))},()=>i(e))}function ae(t,e,n){return ct(t,e,n,F)}function fe(t,e,n){return ct(t,e,n,it)}function Mt(t,e){return rt(t,n=>n.nodeType===3,n=>{const i=""+e;if(n.data.startsWith(i)){if(n.data.length!==i.length)return n.splitText(i.length)}else n.data=i},()=>G(e),!0)}function _e(t){return Mt(t," ")}function J(t,e,n){for(let i=n;i<t.length;i+=1){const s=t[i];if(s.nodeType===8&&s.textContent.trim()===e)return i}return t.length}function de(t,e){const n=J(t,"HTML_TAG_START",0),i=J(t,"HTML_TAG_END",n);if(n===i)return new K(void 0,e);st(t);const s=t.splice(n,i-n+1);T(s[0]),T(s[s.length-1]);const r=s.slice(1,s.length-1);for(const c of r)c.claim_order=t.claim_info.total_claimed,t.claim_info.total_claimed+=1;return new K(r,e)}function he(t,e){e=""+e,t.data!==e&&(t.data=e)}function me(t,e){t.value=e??""}function pe(t,e,n,i){n===null?t.style.removeProperty(e):t.style.setProperty(e,n,i?"important":"")}function ye(t,e,n){t.classList[n?"add":"remove"](e)}function ot(t,e,{bubbles:n=!1,cancelable:i=!1}={}){const s=document.createEvent("CustomEvent");return s.initCustomEvent(t,n,i,e),s}function ge(t,e){const n=[];let i=0;for(const s of e.childNodes)if(s.nodeType===8){const r=s.textContent.trim();r===`HEAD_${t}_END`?(i-=1,n.push(s)):r===`HEAD_${t}_START`&&(i+=1,n.push(s))}else i>0&&n.push(s);return n}class St{constructor(e=!1){this.is_svg=!1,this.is_svg=e,this.e=this.n=null}c(e){this.h(e)}m(e,n,i=null){this.e||(this.is_svg?this.e=it(n.nodeName):this.e=F(n.nodeType===11?"TEMPLATE":n.nodeName),this.t=n.tagName!=="TEMPLATE"?n:n.content,this.c(e)),this.i(i)}h(e){this.e.innerHTML=e,this.n=Array.from(this.e.nodeName==="TEMPLATE"?this.e.content.childNodes:this.e.childNodes)}i(e){for(let n=0;n<this.n.length;n+=1)Tt(this.t,this.n[n],e)}p(e){this.d(),this.h(e),this.i(this.a)}d(){this.n.forEach(T)}}class K extends St{constructor(e,n=!1){super(n),this.e=this.n=null,this.l=e}c(e){this.l?this.n=this.l:super.c(e)}i(e){for(let n=0;n<this.n.length;n+=1)At(this.t,this.n[n],e)}}function $e(t,e){return new t(e)}const S=new Map;let P=0;function Pt(t){let e=5381,n=t.length;for(;n--;)e=(e<<5)-e^t.charCodeAt(n);return e>>>0}function jt(t,e){const n={stylesheet:Et(e),rules:{}};return S.set(t,n),n}function Lt(t,e,n,i,s,r,c,u=0){const o=16.666/i;let l=`{
`;for(let y=0;y<=1;y+=o){const x=e+(n-e)*r(y);l+=y*100+`%{${c(x,1-x)}}
`}const f=l+`100% {${c(n,1-n)}}
}`,a=`__svelte_${Pt(f)}_${u}`,_=nt(t),{stylesheet:d,rules:m}=S.get(_)||jt(_,t);m[a]||(m[a]=!0,d.insertRule(`@keyframes ${a} ${f}`,d.cssRules.length));const b=t.style.animation||"";return t.style.animation=`${b?`${b}, `:""}${a} ${i}ms linear ${s}ms 1 both`,P+=1,a}function Q(t,e){const n=(t.style.animation||"").split(", "),i=n.filter(e?r=>r.indexOf(e)<0:r=>r.indexOf("__svelte")===-1),s=n.length-i.length;s&&(t.style.animation=i.join(", "),P-=s,P||Ht())}function Ht(){z(()=>{P||(S.forEach(t=>{const{ownerNode:e}=t.stylesheet;e&&T(e)}),S.clear())})}let A;function h(t){A=t}function p(){if(!A)throw new Error("Function called outside component initialization");return A}function be(t){p().$$.before_update.push(t)}function xe(t){p().$$.on_mount.push(t)}function we(t){p().$$.after_update.push(t)}function ve(t){p().$$.on_destroy.push(t)}function Ee(){const t=p();return(e,n,{cancelable:i=!1}={})=>{const s=t.$$.callbacks[e];if(s){const r=ot(e,n,{cancelable:i});return s.slice().forEach(c=>{c.call(t,r)}),!r.defaultPrevented}return!0}}function ke(t,e){return p().$$.context.set(t,e),e}function Ne(t){return p().$$.context.get(t)}function Te(t,e){const n=t.$$.callbacks[e.type];n&&n.slice().forEach(i=>i.call(this,e))}const v=[],V=[];let k=[];const q=[],lt=Promise.resolve();let B=!1;function ut(){B||(B=!0,lt.then(U))}function Ae(){return ut(),lt}function j(t){k.push(t)}function Ce(t){q.push(t)}const R=new Set;let w=0;function U(){if(w!==0)return;const t=A;do{try{for(;w<v.length;){const e=v[w];w++,h(e),Ot(e.$$)}}catch(e){throw v.length=0,w=0,e}for(h(null),v.length=0,w=0;V.length;)V.pop()();for(let e=0;e<k.length;e+=1){const n=k[e];R.has(n)||(R.add(n),n())}k.length=0}while(v.length);for(;q.length;)q.pop()();B=!1,R.clear(),h(t)}function Ot(t){if(t.fragment!==null){t.update(),C(t.before_update);const e=t.dirty;t.dirty=[-1],t.fragment&&t.fragment.p(t.ctx,e),t.after_update.forEach(j)}}function Rt(t){const e=[],n=[];k.forEach(i=>t.indexOf(i)===-1?e.push(i):n.push(i)),n.forEach(i=>i()),k=e}let N;function qt(){return N||(N=Promise.resolve(),N.then(()=>{N=null})),N}function X(t,e,n){t.dispatchEvent(ot(`${e?"intro":"outro"}${n}`))}const M=new Set;let g;function Bt(){g={r:0,c:[],p:g}}function zt(){g.r||C(g.c),g=g.p}function at(t,e){t&&t.i&&(M.delete(t),t.i(e))}function Ft(t,e,n,i){if(t&&t.o){if(M.has(t))return;M.add(t),g.c.push(()=>{M.delete(t),i&&(n&&t.d(1),i())}),t.o(e)}else i&&i()}const Gt={duration:0};function De(t,e,n){const i={direction:"in"};let s=e(t,n,i),r=!1,c,u,o=0;function l(){c&&Q(t,c)}function f(){const{delay:_=0,duration:d=300,easing:m=_t,tick:b=$,css:y}=s||Gt;y&&(c=Lt(t,0,1,d,_,m,y,o++)),b(0,1);const x=yt()+_,ft=x+d;u&&u.abort(),r=!0,j(()=>X(t,!0,"start")),u=gt(O=>{if(r){if(O>=ft)return b(1,0),X(t,!0,"end"),l(),r=!1;if(O>=x){const W=m((O-x)/d);b(W,1-W)}}return r})}let a=!1;return{start(){a||(a=!0,Q(t),L(s)?(s=s(i),qt().then(f)):f())},invalidate(){a=!1},end(){r&&(l(),r=!1)}}}function Me(t,e){const n=e.token={};function i(s,r,c,u){if(e.token!==n)return;e.resolved=u;let o=e.ctx;c!==void 0&&(o=o.slice(),o[c]=u);const l=s&&(e.current=s)(o);let f=!1;e.block&&(e.blocks?e.blocks.forEach((a,_)=>{_!==r&&a&&(Bt(),Ft(a,1,1,()=>{e.blocks[_]===a&&(e.blocks[_]=null)}),zt())}):e.block.d(1),l.c(),at(l,1),l.m(e.mount(),e.anchor),f=!0),e.block=l,e.blocks&&(e.blocks[r]=l),f&&U()}if(ht(t)){const s=p();if(t.then(r=>{h(s),i(e.then,1,e.value,r),h(null)},r=>{if(h(s),i(e.catch,2,e.error,r),h(null),!e.hasCatch)throw r}),e.current!==e.pending)return i(e.pending,0),!0}else{if(e.current!==e.then)return i(e.then,1,e.value,t),!0;e.resolved=t}}function Se(t,e,n){const i=e.slice(),{resolved:s}=t;t.current===t.then&&(i[t.value]=s),t.current===t.catch&&(i[t.error]=s),t.block.p(i,n)}function Pe(t,e){const n={},i={},s={$$scope:1};let r=t.length;for(;r--;){const c=t[r],u=e[r];if(u){for(const o in c)o in u||(i[o]=1);for(const o in u)s[o]||(n[o]=u[o],s[o]=1);t[r]=u}else for(const o in c)s[o]=1}for(const c in i)c in n||(n[c]=void 0);return n}function je(t,e,n){const i=t.$$.props[e];i!==void 0&&(t.$$.bound[i]=n,n(t.$$.ctx[i]))}function Le(t){t&&t.c()}function He(t,e){t&&t.l(e)}function Ut(t,e,n,i){const{fragment:s,after_update:r}=t.$$;s&&s.m(e,n),i||j(()=>{const c=t.$$.on_mount.map(Y).filter(L);t.$$.on_destroy?t.$$.on_destroy.push(...c):C(c),t.$$.on_mount=[]}),r.forEach(j)}function Wt(t,e){const n=t.$$;n.fragment!==null&&(Rt(n.after_update),C(n.on_destroy),n.fragment&&n.fragment.d(e),n.on_destroy=n.fragment=null,n.ctx=[])}function It(t,e){t.$$.dirty[0]===-1&&(v.push(t),ut(),t.$$.dirty.fill(0)),t.$$.dirty[e/31|0]|=1<<e%31}function Oe(t,e,n,i,s,r,c,u=[-1]){const o=A;h(t);const l=t.$$={fragment:null,ctx:[],props:r,update:$,not_equal:s,bound:I(),on_mount:[],on_destroy:[],on_disconnect:[],before_update:[],after_update:[],context:new Map(e.context||(o?o.$$.context:[])),callbacks:I(),dirty:u,skip_bound:!1,root:e.target||o.$$.root};c&&c(l.root);let f=!1;if(l.ctx=n?n(t,e.props||{},(a,_,...d)=>{const m=d.length?d[0]:_;return l.ctx&&s(l.ctx[a],l.ctx[a]=m)&&(!l.skip_bound&&l.bound[a]&&l.bound[a](m),f&&It(t,a)),_}):[],l.update(),f=!0,C(l.before_update),l.fragment=i?i(l.ctx):!1,e.target){if(e.hydrate){$t();const a=Dt(e.target);l.fragment&&l.fragment.l(a),a.forEach(T)}else l.fragment&&l.fragment.c();e.intro&&at(t.$$.fragment),Ut(t,e.target,e.anchor,e.customElement),bt(),U()}h(o)}class Re{$destroy(){Wt(this,1),this.$destroy=$}$on(e,n){if(!L(n))return $;const i=this.$$.callbacks[e]||(this.$$.callbacks[e]=[]);return i.push(n),()=>{const s=i.indexOf(n);s!==-1&&i.splice(s,1)}}$set(e){this.$$set&&!mt(e)&&(this.$$.skip_bound=!0,this.$$set(e),this.$$.skip_bound=!1)}}export{de as $,Ut as A,Wt as B,$ as C,pt as D,C as E,L as F,Vt as G,Yt as H,Zt as I,Xt as J,ve as K,Nt as L,ke as M,Ne as N,Qt as O,it as P,fe as Q,Kt as R,Re as S,ye as T,ce as U,ie as V,ne as W,j as X,De as Y,_t as Z,K as _,se as a,ee as a0,je as a1,ge as a2,Ce as a3,Ee as a4,oe as a5,le as a6,Me as a7,Se as a8,me as a9,dt as aa,ue as ab,Pe as ac,te as ad,be as ae,Te as af,At as b,_e as c,Ft as d,re as e,zt as f,at as g,T as h,Oe as i,we as j,F as k,ae as l,Dt as m,Ct as n,xe as o,pe as p,G as q,Mt as r,Jt as s,Ae as t,he as u,Bt as v,V as w,$e as x,Le as y,He as z};