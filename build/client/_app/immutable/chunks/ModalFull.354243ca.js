import{S as y,i as k,s as D,e as m,b as p,g as c,v as q,d,f as L,h as f,K as I,G as B,k as h,l as w,m as v,n as b,L as E,H as M,I as V,J as z,X as C,Y as F}from"./index.28a8b093.js";import{f as G}from"./index.6e5fca10.js";import{c as u}from"./UserSettingStore.4034ccb9.js";const H=i=>({}),S=i=>({});function g(i){let o,a,e,s;const l=i[3].content,n=B(l,i,i[2],S);return{c(){o=h("div"),a=h("div"),n&&n.c(),this.h()},l(t){o=w(t,"DIV",{class:!0});var r=v(o);a=w(r,"DIV",{class:!0});var _=v(a);n&&n.l(_),_.forEach(f),r.forEach(f),this.h()},h(){b(a,"class","h-screen w-full overflow-hidden"),b(o,"class","fixed bg-background/95 w-full h-full inset-0 z-50")},m(t,r){p(t,o,r),E(o,a),n&&n.m(a,null),s=!0},p(t,r){i=t,n&&n.p&&(!s||r&4)&&M(n,l,i,i[2],s?z(l,i[2],r,H):V(i[2]),S)},i(t){s||(c(n,t),e||C(()=>{e=F(o,G,{duration:i[1]}),e.start()}),s=!0)},o(t){d(n,t),s=!1},d(t){t&&f(o),n&&n.d(t)}}}function J(i){let o,a,e=i[0]&&g(i);return{c(){e&&e.c(),o=m()},l(s){e&&e.l(s),o=m()},m(s,l){e&&e.m(s,l),p(s,o,l),a=!0},p(s,[l]){s[0]?e?(e.p(s,l),l&1&&c(e,1)):(e=g(s),e.c(),c(e,1),e.m(o.parentNode,o)):e&&(q(),d(e,1,1,()=>{e=null}),L())},i(s){a||(c(e),a=!0)},o(s){d(e),a=!1},d(s){e&&e.d(s),s&&f(o)}}}function K(i,o,a){let{$$slots:e={},$$scope:s}=o,{isShow:l=!1}=o,{transitionDuration:n=200}=o;return I(()=>{var t;(t=window==null?void 0:window.document.querySelector("html"))==null||t.classList.remove("!overflow-hidden"),u.set(!0)}),i.$$set=t=>{"isShow"in t&&a(0,l=t.isShow),"transitionDuration"in t&&a(1,n=t.transitionDuration),"$$scope"in t&&a(2,s=t.$$scope)},i.$$.update=()=>{var t,r;i.$$.dirty&1&&(l?((t=window==null?void 0:window.document.querySelector("html"))==null||t.classList.add("!overflow-hidden"),u.set(!1)):((r=window==null?void 0:window.document.querySelector("html"))==null||r.classList.remove("!overflow-hidden"),u.set(!0)))},[l,n,s,e]}class Y extends y{constructor(o){super(),k(this,o,K,J,D,{isShow:0,transitionDuration:1})}}export{Y as M};