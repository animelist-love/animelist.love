import{_ as Il}from"../chunks/preload-helper.41c905a7.js";import{S as he,i as de,s as se,k,q as Ke,a as J,P as Le,l as P,m as S,r as Xe,h as d,c as K,Q as De,n as v,T as Ne,b as C,L as A,a9 as Fe,U as pe,C as E,E as Ll,a4 as Dl,e as T,v as O,d as g,f as R,g as m,V as Z,X as be,Y as ye,y as Y,z as j,A as H,B as U,w as D,a1 as N,a3 as x,O as Nl,o as Fl,K as Vl,a7 as Tl,a8 as Bl,D as $l,x as Ve}from"../chunks/index.28a8b093.js";import{p as Ml}from"../chunks/stores.d60c0cff.js";import{g as _e}from"../chunks/navigation.01510f09.js";import{d as Ol,b as Te,c as Rl,e as Gl,g as Yl}from"../chunks/aniList.16789991.js";import{c as Hl}from"../chunks/createQuery.5564b7c8.js";import{c as Ul}from"../chunks/createInfiniteQuery.54db7b9a.js";import{b as Ze,a as re,f as Be,i as jl}from"../chunks/index.f1452f32.js";import{f as Se}from"../chunks/index.6e5fca10.js";import{C as ie}from"../chunks/CardVertical.36f9358d.js";import{M as ql}from"../chunks/ModalFull.354243ca.js";function Ql(o){let e,l,s,t,i,a,u,r,c,n,h,$,q;return{c(){e=k("div"),l=k("div"),s=k("span"),t=k("span"),i=Ke("Filter"),a=J(),u=k("span"),r=Le("svg"),c=Le("path"),n=J(),h=k("input"),this.h()},l(b){e=P(b,"DIV",{class:!0});var M=S(e);l=P(M,"DIV",{class:!0});var V=S(l);s=P(V,"SPAN",{class:!0});var X=S(s);t=P(X,"SPAN",{class:!0});var p=S(t);i=Xe(p,"Filter"),p.forEach(d),X.forEach(d),a=K(V),u=P(V,"SPAN",{class:!0});var I=S(u);r=De(I,"svg",{xmlns:!0,width:!0,height:!0,viewBox:!0,class:!0});var B=S(r);c=De(B,"path",{d:!0}),S(c).forEach(d),B.forEach(d),I.forEach(d),n=K(V),h=P(V,"INPUT",{type:!0,name:!0,class:!0,placeholder:!0,autocomplete:!0}),V.forEach(d),M.forEach(d),this.h()},h(){v(t,"class","p-2 bg-neutral-600/60 rounded-lg cursor-pointer"),v(s,"class","absolute inset-y-0 left-0 flex items-center"),v(c,"d","m16.192 6.344-4.243 4.242-4.242-4.242-1.414 1.414L10.535 12l-4.242 4.242 1.414 1.414 4.242-4.242 4.243 4.242 1.414-1.414L13.364 12l4.242-4.242z"),v(r,"xmlns","http://www.w3.org/2000/svg"),v(r,"width","24"),v(r,"height","24"),v(r,"viewBox","0 0 24 24"),v(r,"class","fill-current w-5 h-5"),v(u,"class","absolute inset-y-0 right-0 hidden items-center cursor-pointer hover:text-neutral-600"),Ne(u,"!flex",o[0].length),v(h,"type","text"),v(h,"name","search"),v(h,"class","w-full bg-background py-6 pl-16 pr-14 text-white focus:outline-none placeholder:text-neutral-500"),v(h,"placeholder","Type name anime/manga"),v(h,"autocomplete","off"),v(l,"class","flex w-full justify-between items-center relative text-white mb-6"),v(e,"class","flex w-full px-2 md:px-6 lg:px-8 sticky top-14 z-10")},m(b,M){C(b,e,M),A(e,l),A(l,s),A(s,t),A(t,i),A(l,a),A(l,u),A(u,r),A(r,c),A(l,n),A(l,h),Fe(h,o[0]),$||(q=[pe(t,"click",o[4]),pe(u,"click",o[5]),pe(h,"input",o[6]),pe(h,"input",o[1])],$=!0)},p(b,[M]){M&1&&Ne(u,"!flex",b[0].length),M&1&&h.value!==b[0]&&Fe(h,b[0])},i:E,o:E,d(b){b&&d(e),$=!1,Ll(q)}}}function zl(o,e,l){const s=Dl();let{search_value:t=""}=e;const i=Ze(function(){const h=this.value;s("search_value",h)},500),a=()=>{l(0,t=""),s("search_value","")},u=()=>s("showFilter",!0),r=()=>u(),c=()=>a();function n(){t=this.value,l(0,t)}return o.$$set=h=>{"search_value"in h&&l(0,t=h.search_value)},[t,i,a,u,r,c,n]}class Wl extends he{constructor(e){super(),de(this,e,zl,Ql,se,{search_value:0})}}function xl(o,e,l){const s=o.slice();return s[6]=e[l],s}function $e(o,e,l){const s=o.slice();return s[3]=e[l],s[5]=l,s}function Jl(o){let e,l,s,t=Array(9),i=[];for(let a=0;a<t.length;a+=1)i[a]=Xl(xl(o,t,a));return{c(){e=k("div"),l=k("div");for(let a=0;a<i.length;a+=1)i[a].c();this.h()},l(a){e=P(a,"DIV",{class:!0});var u=S(e);l=P(u,"DIV",{class:!0});var r=S(l);for(let c=0;c<i.length;c+=1)i[c].l(r);r.forEach(d),u.forEach(d),this.h()},h(){v(l,"class","w-full grid grid-cols-12 gap-x-1.5 sm:gap-x-2.5 gap-y-0 md:grid-cols-5 md:gap-2 lg:md:gap-3 2xl:grid-cols-7 2xl:gap-3 3xl:grid-cols-9 3xl:gap-4"),v(e,"class","flex justify-center py-2 lg:py-4 px-2 md:px-6 lg:px-8")},m(a,u){C(a,e,u),A(e,l);for(let r=0;r<i.length;r+=1)i[r]&&i[r].m(l,null);s=!0},p:E,i(a){if(!s){for(let u=0;u<t.length;u+=1)m(i[u]);s=!0}},o(a){i=i.filter(Boolean);for(let u=0;u<i.length;u+=1)g(i[u]);s=!1},d(a){a&&d(e),Z(i,a)}}}function Kl(o){let e,l,s,t,i=o[2],a=[];for(let r=0;r<i.length;r+=1)a[r]=Me($e(o,i,r));const u=r=>g(a[r],1,1,()=>{a[r]=null});return{c(){e=k("div"),l=k("div");for(let r=0;r<a.length;r+=1)a[r].c();this.h()},l(r){e=P(r,"DIV",{class:!0});var c=S(e);l=P(c,"DIV",{class:!0});var n=S(l);for(let h=0;h<a.length;h+=1)a[h].l(n);n.forEach(d),c.forEach(d),this.h()},h(){v(l,"class","w-full grid grid-cols-12 gap-x-1.5 sm:gap-x-2.5 gap-y-0 md:grid-cols-5 md:gap-2 lg:md:gap-3 2xl:grid-cols-7 2xl:gap-3 3xl:grid-cols-9 3xl:gap-4"),v(e,"class","flex justify-center py-2 lg:py-4 px-2 md:px-6 lg:px-8")},m(r,c){C(r,e,c),A(e,l);for(let n=0;n<a.length;n+=1)a[n]&&a[n].m(l,null);t=!0},p(r,c){if(c&4){i=r[2];let n;for(n=0;n<i.length;n+=1){const h=$e(r,i,n);a[n]?(a[n].p(h,c),m(a[n],1)):(a[n]=Me(h),a[n].c(),m(a[n],1),a[n].m(l,null))}for(O(),n=i.length;n<a.length;n+=1)u(n);R()}},i(r){if(!t){for(let c=0;c<i.length;c+=1)m(a[c]);s||be(()=>{s=ye(e,Se,{}),s.start()}),t=!0}},o(r){a=a.filter(Boolean);for(let c=0;c<a.length;c+=1)g(a[c]);t=!1},d(r){r&&d(e),Z(a,r)}}}function Xl(o){let e,l,s,t;return l=new ie({}),{c(){e=k("div"),Y(l.$$.fragment),s=J(),this.h()},l(i){e=P(i,"DIV",{class:!0});var a=S(e);j(l.$$.fragment,a),s=K(a),a.forEach(d),this.h()},h(){v(e,"class","col-span-4 md:col-span-1 2xl:col-span-1")},m(i,a){C(i,e,a),H(l,e,null),A(e,s),t=!0},p:E,i(i){t||(m(l.$$.fragment,i),t=!0)},o(i){g(l.$$.fragment,i),t=!1},d(i){i&&d(e),U(l)}}}function Me(o){let e,l,s,t;return l=new ie({props:{isLoading:!1,source:o[3],to:`/${o[3].type.toLowerCase()}/details/${re(o[3].title.userPreferred)}-an${o[3].id}`}}),{c(){e=k("div"),Y(l.$$.fragment),s=J(),this.h()},l(i){e=P(i,"DIV",{class:!0});var a=S(e);j(l.$$.fragment,a),s=K(a),a.forEach(d),this.h()},h(){v(e,"class","col-span-4 md:col-span-1 2xl:col-span-1")},m(i,a){C(i,e,a),H(l,e,null),A(e,s),t=!0},p(i,a){const u={};a&4&&(u.source=i[3]),a&4&&(u.to=`/${i[3].type.toLowerCase()}/details/${re(i[3].title.userPreferred)}-an${i[3].id}`),l.$set(u)},i(i){t||(m(l.$$.fragment,i),t=!0)},o(i){g(l.$$.fragment,i),t=!1},d(i){i&&d(e),U(l)}}}function Zl(o){let e,l,s,t;const i=[Kl,Jl],a=[];function u(r,c){return r[1]&&r[2].length?0:r[0]?1:-1}return~(e=u(o))&&(l=a[e]=i[e](o)),{c(){l&&l.c(),s=T()},l(r){l&&l.l(r),s=T()},m(r,c){~e&&a[e].m(r,c),C(r,s,c),t=!0},p(r,[c]){let n=e;e=u(r),e===n?~e&&a[e].p(r,c):(l&&(O(),g(a[n],1,1,()=>{a[n]=null}),R()),~e?(l=a[e],l?l.p(r,c):(l=a[e]=i[e](r),l.c()),m(l,1),l.m(s.parentNode,s)):l=null)},i(r){t||(m(l),t=!0)},o(r){g(l),t=!1},d(r){~e&&a[e].d(r),r&&d(s)}}}function ea(o,e,l){let{isLoading:s=!0}=e,{isSuccess:t=!1}=e,{source:i=[]}=e;return o.$$set=a=>{"isLoading"in a&&l(0,s=a.isLoading),"isSuccess"in a&&l(1,t=a.isSuccess),"source"in a&&l(2,i=a.source)},[s,t,i]}class el extends he{constructor(e){super(),de(this,e,ea,Zl,se,{isLoading:0,isSuccess:1,source:2})}}function la(o,e,l){const s=o.slice();return s[6]=e[l],s}function Oe(o,e,l){const s=o.slice();return s[3]=e[l],s[5]=l,s}function aa(o){let e,l,s,t=Array(8),i=[];for(let a=0;a<t.length;a+=1)i[a]=ra(la(o,t,a));return{c(){e=k("div"),l=k("div");for(let a=0;a<i.length;a+=1)i[a].c();this.h()},l(a){e=P(a,"DIV",{class:!0});var u=S(e);l=P(u,"DIV",{class:!0});var r=S(l);for(let c=0;c<i.length;c+=1)i[c].l(r);r.forEach(d),u.forEach(d),this.h()},h(){v(l,"class","w-full grid grid-cols-12 gap-x-1.5 sm:gap-x-2.5 gap-y-0 md:grid-cols-5 md:gap-2 lg:md:gap-3 2xl:grid-cols-7 2xl:gap-3 3xl:grid-cols-9 3xl:gap-4"),v(e,"class","flex justify-center py-2 lg:py-4 px-2 md:px-6 lg:px-8")},m(a,u){C(a,e,u),A(e,l);for(let r=0;r<i.length;r+=1)i[r]&&i[r].m(l,null);s=!0},p:E,i(a){if(!s){for(let u=0;u<t.length;u+=1)m(i[u]);s=!0}},o(a){i=i.filter(Boolean);for(let u=0;u<i.length;u+=1)g(i[u]);s=!1},d(a){a&&d(e),Z(i,a)}}}function ta(o){let e,l,s,t,i=o[2],a=[];for(let r=0;r<i.length;r+=1)a[r]=Re(Oe(o,i,r));const u=r=>g(a[r],1,1,()=>{a[r]=null});return{c(){e=k("div"),l=k("div");for(let r=0;r<a.length;r+=1)a[r].c();this.h()},l(r){e=P(r,"DIV",{class:!0});var c=S(e);l=P(c,"DIV",{class:!0});var n=S(l);for(let h=0;h<a.length;h+=1)a[h].l(n);n.forEach(d),c.forEach(d),this.h()},h(){v(l,"class","w-full grid grid-cols-12 gap-x-1.5 sm:gap-x-2.5 gap-y-0 md:grid-cols-5 md:gap-2 lg:md:gap-3 2xl:grid-cols-7 2xl:gap-3 3xl:grid-cols-9 3xl:gap-4"),v(e,"class","flex justify-center py-2 lg:py-4 px-2 md:px-6 lg:px-8")},m(r,c){C(r,e,c),A(e,l);for(let n=0;n<a.length;n+=1)a[n]&&a[n].m(l,null);t=!0},p(r,c){if(c&4){i=r[2];let n;for(n=0;n<i.length;n+=1){const h=Oe(r,i,n);a[n]?(a[n].p(h,c),m(a[n],1)):(a[n]=Re(h),a[n].c(),m(a[n],1),a[n].m(l,null))}for(O(),n=i.length;n<a.length;n+=1)u(n);R()}},i(r){if(!t){for(let c=0;c<i.length;c+=1)m(a[c]);s||be(()=>{s=ye(e,Se,{}),s.start()}),t=!0}},o(r){a=a.filter(Boolean);for(let c=0;c<a.length;c+=1)g(a[c]);t=!1},d(r){r&&d(e),Z(a,r)}}}function ra(o){let e,l,s,t;return l=new ie({}),{c(){e=k("div"),Y(l.$$.fragment),s=J(),this.h()},l(i){e=P(i,"DIV",{class:!0});var a=S(e);j(l.$$.fragment,a),s=K(a),a.forEach(d),this.h()},h(){v(e,"class","col-span-4 md:col-span-1 2xl:col-span-1")},m(i,a){C(i,e,a),H(l,e,null),A(e,s),t=!0},p:E,i(i){t||(m(l.$$.fragment,i),t=!0)},o(i){g(l.$$.fragment,i),t=!1},d(i){i&&d(e),U(l)}}}function Re(o){let e,l,s,t;return l=new ie({props:{isLoading:!1,source:o[3],to:`/character/${re(o[3].name.userPreferred)}-an${o[3].id}`}}),{c(){e=k("div"),Y(l.$$.fragment),s=J(),this.h()},l(i){e=P(i,"DIV",{class:!0});var a=S(e);j(l.$$.fragment,a),s=K(a),a.forEach(d),this.h()},h(){v(e,"class","col-span-4 md:col-span-1 2xl:col-span-1")},m(i,a){C(i,e,a),H(l,e,null),A(e,s),t=!0},p(i,a){const u={};a&4&&(u.source=i[3]),a&4&&(u.to=`/character/${re(i[3].name.userPreferred)}-an${i[3].id}`),l.$set(u)},i(i){t||(m(l.$$.fragment,i),t=!0)},o(i){g(l.$$.fragment,i),t=!1},d(i){i&&d(e),U(l)}}}function sa(o){let e,l,s,t;const i=[ta,aa],a=[];function u(r,c){return r[1]&&r[2].length?0:r[0]?1:-1}return~(e=u(o))&&(l=a[e]=i[e](o)),{c(){l&&l.c(),s=T()},l(r){l&&l.l(r),s=T()},m(r,c){~e&&a[e].m(r,c),C(r,s,c),t=!0},p(r,[c]){let n=e;e=u(r),e===n?~e&&a[e].p(r,c):(l&&(O(),g(a[n],1,1,()=>{a[n]=null}),R()),~e?(l=a[e],l?l.p(r,c):(l=a[e]=i[e](r),l.c()),m(l,1),l.m(s.parentNode,s)):l=null)},i(r){t||(m(l),t=!0)},o(r){g(l),t=!1},d(r){~e&&a[e].d(r),r&&d(s)}}}function ia(o,e,l){let{isLoading:s=!0}=e,{isSuccess:t=!1}=e,{source:i=[]}=e;return o.$$set=a=>{"isLoading"in a&&l(0,s=a.isLoading),"isSuccess"in a&&l(1,t=a.isSuccess),"source"in a&&l(2,i=a.source)},[s,t,i]}class na extends he{constructor(e){super(),de(this,e,ia,sa,se,{isLoading:0,isSuccess:1,source:2})}}function ua(o,e,l){const s=o.slice();return s[6]=e[l],s}function Ge(o,e,l){const s=o.slice();return s[3]=e[l],s[5]=l,s}function oa(o){let e,l,s,t=Array(8),i=[];for(let a=0;a<t.length;a+=1)i[a]=fa(ua(o,t,a));return{c(){e=k("div"),l=k("div");for(let a=0;a<i.length;a+=1)i[a].c();this.h()},l(a){e=P(a,"DIV",{class:!0});var u=S(e);l=P(u,"DIV",{class:!0});var r=S(l);for(let c=0;c<i.length;c+=1)i[c].l(r);r.forEach(d),u.forEach(d),this.h()},h(){v(l,"class","w-full grid grid-cols-12 gap-x-1.5 sm:gap-x-2.5 gap-y-0 md:grid-cols-5 md:gap-2 lg:md:gap-3 2xl:grid-cols-7 2xl:gap-3 3xl:grid-cols-9 3xl:gap-4"),v(e,"class","flex justify-center py-2 lg:py-4 px-2 md:px-6 lg:px-8")},m(a,u){C(a,e,u),A(e,l);for(let r=0;r<i.length;r+=1)i[r]&&i[r].m(l,null);s=!0},p:E,i(a){if(!s){for(let u=0;u<t.length;u+=1)m(i[u]);s=!0}},o(a){i=i.filter(Boolean);for(let u=0;u<i.length;u+=1)g(i[u]);s=!1},d(a){a&&d(e),Z(i,a)}}}function ca(o){let e,l,s,t,i=o[2],a=[];for(let r=0;r<i.length;r+=1)a[r]=Ye(Ge(o,i,r));const u=r=>g(a[r],1,1,()=>{a[r]=null});return{c(){e=k("div"),l=k("div");for(let r=0;r<a.length;r+=1)a[r].c();this.h()},l(r){e=P(r,"DIV",{class:!0});var c=S(e);l=P(c,"DIV",{class:!0});var n=S(l);for(let h=0;h<a.length;h+=1)a[h].l(n);n.forEach(d),c.forEach(d),this.h()},h(){v(l,"class","w-full grid grid-cols-12 gap-x-1.5 sm:gap-x-2.5 gap-y-0 md:grid-cols-5 md:gap-2 lg:md:gap-3 2xl:grid-cols-7 2xl:gap-3 3xl:grid-cols-9 3xl:gap-4"),v(e,"class","flex justify-center py-2 lg:py-4 px-2 md:px-6 lg:px-8")},m(r,c){C(r,e,c),A(e,l);for(let n=0;n<a.length;n+=1)a[n]&&a[n].m(l,null);t=!0},p(r,c){if(c&4){i=r[2];let n;for(n=0;n<i.length;n+=1){const h=Ge(r,i,n);a[n]?(a[n].p(h,c),m(a[n],1)):(a[n]=Ye(h),a[n].c(),m(a[n],1),a[n].m(l,null))}for(O(),n=i.length;n<a.length;n+=1)u(n);R()}},i(r){if(!t){for(let c=0;c<i.length;c+=1)m(a[c]);s||be(()=>{s=ye(e,Se,{}),s.start()}),t=!0}},o(r){a=a.filter(Boolean);for(let c=0;c<a.length;c+=1)g(a[c]);t=!1},d(r){r&&d(e),Z(a,r)}}}function fa(o){let e,l,s,t;return l=new ie({}),{c(){e=k("div"),Y(l.$$.fragment),s=J(),this.h()},l(i){e=P(i,"DIV",{class:!0});var a=S(e);j(l.$$.fragment,a),s=K(a),a.forEach(d),this.h()},h(){v(e,"class","col-span-4 md:col-span-1 2xl:col-span-1")},m(i,a){C(i,e,a),H(l,e,null),A(e,s),t=!0},p:E,i(i){t||(m(l.$$.fragment,i),t=!0)},o(i){g(l.$$.fragment,i),t=!1},d(i){i&&d(e),U(l)}}}function Ye(o){let e,l,s,t;return l=new ie({props:{isLoading:!1,source:o[3],to:`/staff/${re(o[3].name.userPreferred)}-an${o[3].id}`}}),{c(){e=k("div"),Y(l.$$.fragment),s=J(),this.h()},l(i){e=P(i,"DIV",{class:!0});var a=S(e);j(l.$$.fragment,a),s=K(a),a.forEach(d),this.h()},h(){v(e,"class","col-span-4 md:col-span-1 2xl:col-span-1")},m(i,a){C(i,e,a),H(l,e,null),A(e,s),t=!0},p(i,a){const u={};a&4&&(u.source=i[3]),a&4&&(u.to=`/staff/${re(i[3].name.userPreferred)}-an${i[3].id}`),l.$set(u)},i(i){t||(m(l.$$.fragment,i),t=!0)},o(i){g(l.$$.fragment,i),t=!1},d(i){i&&d(e),U(l)}}}function _a(o){let e,l,s,t;const i=[ca,oa],a=[];function u(r,c){return r[1]&&r[2].length?0:r[0]?1:-1}return~(e=u(o))&&(l=a[e]=i[e](o)),{c(){l&&l.c(),s=T()},l(r){l&&l.l(r),s=T()},m(r,c){~e&&a[e].m(r,c),C(r,s,c),t=!0},p(r,[c]){let n=e;e=u(r),e===n?~e&&a[e].p(r,c):(l&&(O(),g(a[n],1,1,()=>{a[n]=null}),R()),~e?(l=a[e],l?l.p(r,c):(l=a[e]=i[e](r),l.c()),m(l,1),l.m(s.parentNode,s)):l=null)},i(r){t||(m(l),t=!0)},o(r){g(l),t=!1},d(r){~e&&a[e].d(r),r&&d(s)}}}function ha(o,e,l){let{isLoading:s=!0}=e,{isSuccess:t=!1}=e,{source:i=[]}=e;return o.$$set=a=>{"isLoading"in a&&l(0,s=a.isLoading),"isSuccess"in a&&l(1,t=a.isSuccess),"source"in a&&l(2,i=a.source)},[s,t,i]}class da extends he{constructor(e){super(),de(this,e,ha,_a,se,{isLoading:0,isSuccess:1,source:2})}}function He(o,e,l){const s=o.slice();return s[66]=e[l],s}function Ue(o,e,l){const s=o.slice();return s[66]=e[l],s}function je(o,e,l){const s=o.slice();return s[66]=e[l],s}function qe(o){let e,l;return e=new ql({props:{isShow:!0,$$slots:{content:[va]},$$scope:{ctx:o}}}),{c(){Y(e.$$.fragment)},l(s){j(e.$$.fragment,s)},m(s,t){H(e,s,t),l=!0},p(s,t){const i={};t[0]&60415|t[2]&2048&&(i.$$scope={dirty:t,ctx:s}),e.$set(i)},i(s){l||(m(e.$$.fragment,s),l=!0)},o(s){g(e.$$.fragment,s),l=!1},d(s){U(e,s)}}}function ma(o){return{c:E,l:E,m:E,p:E,i:E,o:E,d:E}}function ga(o){let e,l,s,t,i,a,u,r,c,n,h,$,q;function b(f){o[33](f)}function M(f){o[34](f)}function V(f){o[35](f)}function X(f){o[36](f)}function p(f){o[37](f)}function I(f){o[38](f)}function B(f){o[39](f)}function ee(f){o[40](f)}function me(f){o[41](f)}function ge(f){o[42](f)}var Q=o[31];function z(f){let y={isLoading:f[13],typeBrowse:f[21],mediagenreCollection:f[14],mediaTagCollection:f[15],mediaFormatAnime:f[22],mediaFormatManga:f[23],mediaStatus:f[24],mediaCountry:f[25],mediaYear:f[26],mediaSeason:f[27],mediaSort:f[28],characterStaffSort:f[29]};return f[0]!==void 0&&(y.typeBrowse_value=f[0]),f[1]!==void 0&&(y.mediaGenres_value=f[1]),f[2]!==void 0&&(y.mediaTags_value=f[2]),f[3]!==void 0&&(y.mediaFormat_value=f[3]),f[4]!==void 0&&(y.mediaStatus_value=f[4]),f[5]!==void 0&&(y.mediaCountry_value=f[5]),f[6]!==void 0&&(y.mediaYear_value=f[6]),f[7]!==void 0&&(y.mediaSeason_value=f[7]),f[8]!==void 0&&(y.mediaSort_value=f[8]),f[9]!==void 0&&(y.isBirthday_value=f[9]),{props:y}}return Q&&(e=Ve(Q,z(o)),D.push(()=>N(e,"typeBrowse_value",b)),D.push(()=>N(e,"mediaGenres_value",M)),D.push(()=>N(e,"mediaTags_value",V)),D.push(()=>N(e,"mediaFormat_value",X)),D.push(()=>N(e,"mediaStatus_value",p)),D.push(()=>N(e,"mediaCountry_value",I)),D.push(()=>N(e,"mediaYear_value",B)),D.push(()=>N(e,"mediaSeason_value",ee)),D.push(()=>N(e,"mediaSort_value",me)),D.push(()=>N(e,"isBirthday_value",ge)),e.$on("closeFilter",o[43])),{c(){e&&Y(e.$$.fragment),$=T()},l(f){e&&j(e.$$.fragment,f),$=T()},m(f,y){e&&H(e,f,y),C(f,$,y),q=!0},p(f,y){const F={};if(y[0]&8192&&(F.isLoading=f[13]),y[0]&16384&&(F.mediagenreCollection=f[14]),y[0]&32768&&(F.mediaTagCollection=f[15]),!l&&y[0]&1&&(l=!0,F.typeBrowse_value=f[0],x(()=>l=!1)),!s&&y[0]&2&&(s=!0,F.mediaGenres_value=f[1],x(()=>s=!1)),!t&&y[0]&4&&(t=!0,F.mediaTags_value=f[2],x(()=>t=!1)),!i&&y[0]&8&&(i=!0,F.mediaFormat_value=f[3],x(()=>i=!1)),!a&&y[0]&16&&(a=!0,F.mediaStatus_value=f[4],x(()=>a=!1)),!u&&y[0]&32&&(u=!0,F.mediaCountry_value=f[5],x(()=>u=!1)),!r&&y[0]&64&&(r=!0,F.mediaYear_value=f[6],x(()=>r=!1)),!c&&y[0]&128&&(c=!0,F.mediaSeason_value=f[7],x(()=>c=!1)),!n&&y[0]&256&&(n=!0,F.mediaSort_value=f[8],x(()=>n=!1)),!h&&y[0]&512&&(h=!0,F.isBirthday_value=f[9],x(()=>h=!1)),Q!==(Q=f[31])){if(e){O();const le=e;g(le.$$.fragment,1,0,()=>{U(le,1)}),R()}Q?(e=Ve(Q,z(f)),D.push(()=>N(e,"typeBrowse_value",b)),D.push(()=>N(e,"mediaGenres_value",M)),D.push(()=>N(e,"mediaTags_value",V)),D.push(()=>N(e,"mediaFormat_value",X)),D.push(()=>N(e,"mediaStatus_value",p)),D.push(()=>N(e,"mediaCountry_value",I)),D.push(()=>N(e,"mediaYear_value",B)),D.push(()=>N(e,"mediaSeason_value",ee)),D.push(()=>N(e,"mediaSort_value",me)),D.push(()=>N(e,"isBirthday_value",ge)),e.$on("closeFilter",f[43]),Y(e.$$.fragment),m(e.$$.fragment,1),H(e,$.parentNode,$)):e=null}else Q&&e.$set(F)},i(f){q||(e&&m(e.$$.fragment,f),q=!0)},o(f){e&&g(e.$$.fragment,f),q=!1},d(f){f&&d($),e&&U(e,f)}}}function pa(o){return{c:E,l:E,m:E,p:E,i:E,o:E,d:E}}function va(o){let e,l,s={ctx:o,current:null,token:null,hasCatch:!1,pending:pa,then:ga,catch:ma,value:31,blocks:[,,,]};return Tl(o[31](),s),{c(){e=k("div"),s.block.c(),this.h()},l(t){e=P(t,"DIV",{slot:!0,class:!0});var i=S(e);s.block.l(i),i.forEach(d),this.h()},h(){v(e,"slot","content"),v(e,"class","fixed w-full md:w-80 h-full bottom-0 left-0 top-0")},m(t,i){C(t,e,i),s.block.m(e,s.anchor=null),s.mount=()=>e,s.anchor=null,l=!0},p(t,i){o=t,Bl(s,o,i)},i(t){l||(m(s.block),l=!0)},o(t){for(let i=0;i<3;i+=1){const a=s.blocks[i];g(a)}l=!1},d(t){t&&d(e),s.block.d(),s.token=null,s=null}}}function Qe(o){let e=o[10],l,s,t=Je(o);return{c(){t.c(),l=T()},l(i){t.l(i),l=T()},m(i,a){t.m(i,a),C(i,l,a),s=!0},p(i,a){a[0]&1024&&se(e,e=i[10])?(O(),g(t,1,1,E),R(),t=Je(i),t.c(),m(t,1),t.m(l.parentNode,l)):t.p(i,a)},i(i){s||(m(t),s=!0)},o(i){g(t),s=!1},d(i){i&&d(l),t.d(i)}}}function ba(o){var a;let e,l,s=(a=o[20].data)==null?void 0:a.pages,t=[];for(let u=0;u<s.length;u+=1)t[u]=ze(He(o,s,u));const i=u=>g(t[u],1,1,()=>{t[u]=null});return{c(){for(let u=0;u<t.length;u+=1)t[u].c();e=T()},l(u){for(let r=0;r<t.length;r+=1)t[r].l(u);e=T()},m(u,r){for(let c=0;c<t.length;c+=1)t[c]&&t[c].m(u,r);C(u,e,r),l=!0},p(u,r){var c;if(r[0]&1048576){s=(c=u[20].data)==null?void 0:c.pages;let n;for(n=0;n<s.length;n+=1){const h=He(u,s,n);t[n]?(t[n].p(h,r),m(t[n],1)):(t[n]=ze(h),t[n].c(),m(t[n],1),t[n].m(e.parentNode,e))}for(O(),n=s.length;n<t.length;n+=1)i(n);R()}},i(u){if(!l){for(let r=0;r<s.length;r+=1)m(t[r]);l=!0}},o(u){t=t.filter(Boolean);for(let r=0;r<t.length;r+=1)g(t[r]);l=!1},d(u){Z(t,u),u&&d(e)}}}function ya(o){var a;let e,l,s=(a=o[20].data)==null?void 0:a.pages,t=[];for(let u=0;u<s.length;u+=1)t[u]=We(Ue(o,s,u));const i=u=>g(t[u],1,1,()=>{t[u]=null});return{c(){for(let u=0;u<t.length;u+=1)t[u].c();e=T()},l(u){for(let r=0;r<t.length;r+=1)t[r].l(u);e=T()},m(u,r){for(let c=0;c<t.length;c+=1)t[c]&&t[c].m(u,r);C(u,e,r),l=!0},p(u,r){var c;if(r[0]&1048576){s=(c=u[20].data)==null?void 0:c.pages;let n;for(n=0;n<s.length;n+=1){const h=Ue(u,s,n);t[n]?(t[n].p(h,r),m(t[n],1)):(t[n]=We(h),t[n].c(),m(t[n],1),t[n].m(e.parentNode,e))}for(O(),n=s.length;n<t.length;n+=1)i(n);R()}},i(u){if(!l){for(let r=0;r<s.length;r+=1)m(t[r]);l=!0}},o(u){t=t.filter(Boolean);for(let r=0;r<t.length;r+=1)g(t[r]);l=!1},d(u){Z(t,u),u&&d(e)}}}function Sa(o){var a;let e,l,s=(a=o[20].data)==null?void 0:a.pages,t=[];for(let u=0;u<s.length;u+=1)t[u]=xe(je(o,s,u));const i=u=>g(t[u],1,1,()=>{t[u]=null});return{c(){for(let u=0;u<t.length;u+=1)t[u].c();e=T()},l(u){for(let r=0;r<t.length;r+=1)t[r].l(u);e=T()},m(u,r){for(let c=0;c<t.length;c+=1)t[c]&&t[c].m(u,r);C(u,e,r),l=!0},p(u,r){var c;if(r[0]&1048576){s=(c=u[20].data)==null?void 0:c.pages;let n;for(n=0;n<s.length;n+=1){const h=je(u,s,n);t[n]?(t[n].p(h,r),m(t[n],1)):(t[n]=xe(h),t[n].c(),m(t[n],1),t[n].m(e.parentNode,e))}for(O(),n=s.length;n<t.length;n+=1)i(n);R()}},i(u){if(!l){for(let r=0;r<s.length;r+=1)m(t[r]);l=!0}},o(u){t=t.filter(Boolean);for(let r=0;r<t.length;r+=1)g(t[r]);l=!1},d(u){Z(t,u),u&&d(e)}}}function ze(o){var s;let e,l;return e=new da({props:{isLoading:!1,isSuccess:!0,source:(s=o[66].data.Page)==null?void 0:s.staff}}),{c(){Y(e.$$.fragment)},l(t){j(e.$$.fragment,t)},m(t,i){H(e,t,i),l=!0},p(t,i){var u;const a={};i[0]&1048576&&(a.source=(u=t[66].data.Page)==null?void 0:u.staff),e.$set(a)},i(t){l||(m(e.$$.fragment,t),l=!0)},o(t){g(e.$$.fragment,t),l=!1},d(t){U(e,t)}}}function We(o){var s;let e,l;return e=new na({props:{isLoading:!1,isSuccess:!0,source:(s=o[66].data.Page)==null?void 0:s.characters}}),{c(){Y(e.$$.fragment)},l(t){j(e.$$.fragment,t)},m(t,i){H(e,t,i),l=!0},p(t,i){var u;const a={};i[0]&1048576&&(a.source=(u=t[66].data.Page)==null?void 0:u.characters),e.$set(a)},i(t){l||(m(e.$$.fragment,t),l=!0)},o(t){g(e.$$.fragment,t),l=!1},d(t){U(e,t)}}}function xe(o){var s;let e,l;return e=new el({props:{isLoading:!1,isSuccess:!0,source:(s=o[66].data.Page)==null?void 0:s.media}}),{c(){Y(e.$$.fragment)},l(t){j(e.$$.fragment,t)},m(t,i){H(e,t,i),l=!0},p(t,i){var u;const a={};i[0]&1048576&&(a.source=(u=t[66].data.Page)==null?void 0:u.media),e.$set(a)},i(t){l||(m(e.$$.fragment,t),l=!0)},o(t){g(e.$$.fragment,t),l=!1},d(t){U(e,t)}}}function Je(o){let e,l,s,t;const i=[Sa,ya,ba],a=[];function u(r,c){return r[18]?0:r[17]?1:r[19]?2:-1}return~(e=u(o))&&(l=a[e]=i[e](o)),{c(){l&&l.c(),s=T()},l(r){l&&l.l(r),s=T()},m(r,c){~e&&a[e].m(r,c),C(r,s,c),t=!0},p(r,c){let n=e;e=u(r),e===n?~e&&a[e].p(r,c):(l&&(O(),g(a[n],1,1,()=>{a[n]=null}),R()),~e?(l=a[e],l?l.p(r,c):(l=a[e]=i[e](r),l.c()),m(l,1),l.m(s.parentNode,s)):l=null)},i(r){t||(m(l),t=!0)},o(r){g(l),t=!1},d(r){~e&&a[e].d(r),r&&d(s)}}}function ka(o){let e,l;return{c(){e=k("div"),l=Ke("Không còn kết quả nào!"),this.h()},l(s){e=P(s,"DIV",{class:!0});var t=S(e);l=Xe(t,"Không còn kết quả nào!"),t.forEach(d),this.h()},h(){v(e,"class","w-full text-center my-20")},m(s,t){C(s,e,t),A(e,l)},i:E,o:E,d(s){s&&d(e)}}}function Pa(o){let e;return{c(){e=k("div"),this.h()},l(l){e=P(l,"DIV",{class:!0}),S(e).forEach(d),this.h()},h(){v(e,"class","h-[calc(130vh/2)] w-full")},m(l,s){C(l,e,s)},i:E,o:E,d(l){l&&d(e)}}}function wa(o){let e,l;return e=new el({}),{c(){Y(e.$$.fragment)},l(s){j(e.$$.fragment,s)},m(s,t){H(e,s,t),l=!0},i(s){l||(m(e.$$.fragment,s),l=!0)},o(s){g(e.$$.fragment,s),l=!1},d(s){U(e,s)}}}function Ea(o){let e,l,s,t,i,a,u,r,c,n,h=o[11]&&qe(o);function $(p){o[44](p)}let q={};o[12]!==void 0&&(q.search_value=o[12]),t=new Wl({props:q}),D.push(()=>N(t,"search_value",$)),t.$on("showFilter",o[45]),t.$on("search_value",o[46]);let b=o[20].isSuccess&&Qe(o);const M=[wa,Pa,ka],V=[];function X(p,I){return p[20].isLoading||p[20].isFetching||p[20].isFetchingNextPage?0:p[20].hasNextPage?1:2}return r=X(o),c=V[r]=M[r](o),{c(){h&&h.c(),e=J(),l=k("div"),s=k("div"),Y(t.$$.fragment),a=J(),b&&b.c(),u=J(),c.c(),this.h()},l(p){h&&h.l(p),e=K(p),l=P(p,"DIV",{class:!0});var I=S(l);s=P(I,"DIV",{class:!0});var B=S(s);j(t.$$.fragment,B),a=K(B),b&&b.l(B),u=K(B),c.l(B),B.forEach(d),I.forEach(d),this.h()},h(){v(s,"class","w-full relative"),v(l,"class","flex mt-20")},m(p,I){h&&h.m(p,I),C(p,e,I),C(p,l,I),A(l,s),H(t,s,null),A(s,a),b&&b.m(s,null),A(s,u),V[r].m(s,null),n=!0},p(p,I){p[11]?h?(h.p(p,I),I[0]&2048&&m(h,1)):(h=qe(p),h.c(),m(h,1),h.m(e.parentNode,e)):h&&(O(),g(h,1,1,()=>{h=null}),R());const B={};!i&&I[0]&4096&&(i=!0,B.search_value=p[12],x(()=>i=!1)),t.$set(B),p[20].isSuccess?b?(b.p(p,I),I[0]&1048576&&m(b,1)):(b=Qe(p),b.c(),m(b,1),b.m(s,u)):b&&(O(),g(b,1,1,()=>{b=null}),R());let ee=r;r=X(p),r!==ee&&(O(),g(V[ee],1,1,()=>{V[ee]=null}),R(),c=V[r],c||(c=V[r]=M[r](p),c.c()),m(c,1),c.m(s,null))},i(p){n||(m(h),m(t.$$.fragment,p),m(b),m(c),n=!0)},o(p){g(h),g(t.$$.fragment,p),g(b),g(c),n=!1},d(p){h&&h.d(p),p&&d(e),p&&d(l),U(t),b&&b.d(),V[r].d()}}}function Ca(o,e,l){let s,t,i,a,u,r=E,c=()=>(r(),r=$l(a,_=>l(20,u=_)),a),n;Nl(o,Ml,_=>l(47,n=_)),o.$$.on_destroy.push(()=>r());const h=async()=>(await Il(()=>import("../chunks/Filter.24aa01ca.js"),["..\\chunks\\Filter.24aa01ca.js","..\\chunks\\index.28a8b093.js"],import.meta.url)).default;let $=!1,q=n.url.searchParams.has("type")?{value:n.url.searchParams.get("type"),label:""}:{value:"ANIME",label:"Anime"},b=n.url.searchParams.get("search")||"",M=n.url.searchParams.has("genre")?n.url.searchParams.getAll("genre").map(_=>({value:_,label:""})):null,V=n.url.searchParams.has("tag")?n.url.searchParams.getAll("tag").map(_=>({value:_,label:""})):null,X=n.url.searchParams.has("format")?n.url.searchParams.getAll("format").map(_=>({value:_,label:""})):null,p=n.url.searchParams.has("status")?{value:n.url.searchParams.get("status"),label:""}:null,I=n.url.searchParams.has("country")?{value:n.url.searchParams.get("country"),label:""}:null,B=n.url.searchParams.has("year")?{value:n.url.searchParams.get("year"),label:""}:null,ee=n.url.searchParams.has("season")?{value:n.url.searchParams.get("season"),label:""}:null,me=n.url.searchParams.has("sort")?{value:n.url.searchParams.get("sort"),label:""}:null,ge=n.url.searchParams.has("birthday")?n.url.searchParams.get("birthday")==="true":!1,Q=b,z=q,f=M,y=V,F=X,le=p,ne=I,te=B,ue=ee,oe=me,ce=ge,ve=!0,fe=!1,ll=[{value:"ANIME",label:"Anime"},{value:"MANGA",label:"Manga"},{value:"CHARACTERS",label:"Characters"},{value:"STAFF",label:"Staff"}],ke=[],Pe=[],al=[{value:"TV",label:"TV"},{value:"TV_SHORT",label:"TV Short"},{value:"MOVIE",label:"Movie"},{value:"SPECIAL",label:"Special"},{value:"OVA",label:"OVA"},{value:"ONA",label:"ONA"},{value:"MUSIC",label:"Music"}],tl=[{value:"MANGA",label:"Manga"},{value:"NOVEL",label:"Novel"},{value:"ONE_SHOT",label:"One Shot"}],rl=[{value:"RELEASING",label:"Releasing"},{value:"FINISHED",label:"Finished"},{value:"NOT_YET_RELEASED",label:"Not Yet Released"},{value:"HIATUS",label:"Hiatus"},{value:"CANCELLED",label:"Cancelled"}],sl=[{value:"JP",label:"Japan"},{value:"KR",label:"South Korea"},{value:"CN",label:"China"},{value:"TW",label:"Taiwan"}],il=(()=>{const _=[];for(let L=new Date().getFullYear();L>=1940;L--)_.push({value:L.toString(),label:L.toString()});return _})(),nl=[{value:"WINTER",label:"Winter"},{value:"SPRING",label:"Spring"},{value:"SUMMER",label:"Summer"},{value:"FALL",label:"Fall"}],ul=[{value:"TITLE_ENGLISH",label:"Title"},{value:"SCORE_DESC",label:"Average Score"},{value:"POPULARITY_DESC",label:"Popularity"},{value:"TRENDING_DESC",label:"Trending"},{value:"FAVOURITES_DESC",label:"Favorites"},{value:"ID_DESC",label:"Date Added"},{value:"START_DATE_DESC",label:"Release Date"},{value:"END_DATE_DESC",label:"End Date"}],ol=[{value:"FAVOURITES_DESC",label:"Favorites"},{value:"ID_DESC",label:"Date Added"},{value:"SEARCH_MATCH",label:"Search Match"}],w={type:n.url.searchParams.get("type")||"ANIME",search:n.url.searchParams.get("search"),genre_in:null,tag_in:null,format_in:null,status:null,countryOfOrigin:null,year:null,season:null,sort:null,isBirthday:null,perPage:27};const cl=Hl(["collectionData"],()=>Be(Te,{query:Ol})).subscribe(_=>{var L,W;l(13,ve=_.isLoading),_.data&&!ve&&(l(14,ke=(L=_.data.data.GenreCollection)==null?void 0:L.map(G=>({value:G,label:G}))),l(15,Pe=(W=_.data.data.MediaTagCollection)==null?void 0:W.map(G=>({value:G.name,label:G.name}))))}),fl=_=>{const L={};for(const[W,G]of Object.entries(_))G!==""&&G!==null&&!(Array.isArray(G)&&G.length===0)&&(L[W]=G);return L},_l=_=>Be(Te,{query:s?Rl:t?Gl:Yl,variables:fl({...w,page:_,sort:w.sort||["FAVOURITES_DESC","ID_DESC"]})}),hl=(_,L)=>(_.value!==w.type&&(l(32,fe=!0),l(10,w={type:(_==null?void 0:_.value)||"ANIME",search:"",genre_in:null,tag_in:null,format_in:null,status:null,countryOfOrigin:null,year:null,season:null,sort:null,isBirthday:null,perPage:27}),n.url.searchParams.delete("search"),n.url.searchParams.delete("genre"),n.url.searchParams.delete("tag"),n.url.searchParams.delete("format"),n.url.searchParams.delete("status"),n.url.searchParams.delete("country"),n.url.searchParams.delete("year"),n.url.searchParams.delete("season"),n.url.searchParams.delete("sort"),n.url.searchParams.set(L,(_==null?void 0:_.value)||"ANIME"),l(12,Q=""),l(1,f=null),l(2,y=null),l(3,F=null),l(4,le=null),l(5,ne=null),l(6,te=null),l(7,ue=null),l(9,ce=!1),l(8,oe=null),n.url.search!==window.location.search&&_e(n.url),l(32,fe=!1)),_.value),ae=(_,L)=>fe?null:_?Array.isArray(_)?(n.url.searchParams.delete(L),_.forEach(W=>n.url.searchParams.append(L,W.value)),n.url.search!==window.location.search&&_e(n.url),_.map(W=>W.value)):(_.value&&(n.url.searchParams.set(L,_.value),n.url.search!==window.location.search&&_e(n.url)),_.value):(n.url.searchParams.delete(L),n.url.search!==window.location.search&&_e(n.url),null),we=_=>{l(10,w.search=_||null,w),n.url.searchParams.delete("search"),_&&n.url.searchParams.set("search",_),n.url.search!==window.location.search&&_e(n.url,{keepFocus:!0})},Ee=Ze(()=>{jl()&&!(u.isLoading||u.isFetching||u.isFetchingNextPage)&&u.fetchNextPage()},100);Fl(async()=>{window.addEventListener("scroll",Ee)}),Vl(()=>{window.removeEventListener("scroll",Ee),cl()});function dl(_){z=_,l(0,z)}function ml(_){f=_,l(1,f)}function gl(_){y=_,l(2,y)}function pl(_){F=_,l(3,F)}function vl(_){le=_,l(4,le)}function bl(_){ne=_,l(5,ne)}function yl(_){te=_,l(6,te)}function Sl(_){ue=_,l(7,ue)}function kl(_){oe=_,l(8,oe)}function Pl(_){ce=_,l(9,ce)}const wl=_=>{l(11,$=_.detail)};function El(_){Q=_,l(12,Q)}const Cl=_=>{l(11,$=_.detail)},Al=_=>we(_.detail);return o.$$.update=()=>{o.$$.dirty[0]&1&&l(18,s=z.value&&["ANIME","MANGA"].includes(z.value)),o.$$.dirty[0]&1&&l(17,t=z.value==="CHARACTERS"),o.$$.dirty[0]&1&&l(19,i=z.value==="STAFF"),o.$$.dirty[0]&1&&l(10,w.type=hl(z,"type"),w),o.$$.dirty[0]&2&&l(10,w.genre_in=ae(f,"genre"),w),o.$$.dirty[0]&4&&l(10,w.tag_in=ae(y,"tag"),w),o.$$.dirty[0]&8&&l(10,w.format_in=ae(F,"format"),w),o.$$.dirty[0]&16&&l(10,w.status=ae(le,"status"),w),o.$$.dirty[0]&32&&l(10,w.countryOfOrigin=ae(ne,"country"),w),o.$$.dirty[0]&64&&l(10,w.year=te?ae(te,"year")+"%":null,w),o.$$.dirty[0]&128&&l(10,w.season=ae(ue,"season"),w),o.$$.dirty[0]&256&&l(10,w.sort=ae(oe,"sort"),w),o.$$.dirty[0]&512&&l(10,w.isBirthday=ce,w),o.$$.dirty[0]&1024|o.$$.dirty[1]&2&&c(l(16,a=Ul(["media",w],({pageParam:_=1})=>_l(_),{enabled:!fe,getNextPageParam:_=>{var L,W,G,Ce,Ae,Ie;if((G=(W=(L=_.data)==null?void 0:L.Page)==null?void 0:W.pageInfo)!=null&&G.hasNextPage)return((Ie=(Ae=(Ce=_.data)==null?void 0:Ce.Page)==null?void 0:Ae.pageInfo)==null?void 0:Ie.currentPage)+1}})))},[z,f,y,F,le,ne,te,ue,oe,ce,w,$,Q,ve,ke,Pe,a,t,s,i,u,ll,al,tl,rl,sl,il,nl,ul,ol,we,h,fe,dl,ml,gl,pl,vl,bl,yl,Sl,kl,Pl,wl,El,Cl,Al]}class Ra extends he{constructor(e){super(),de(this,e,Ca,Ea,se,{},null,[-1,-1,-1])}}export{Ra as default};