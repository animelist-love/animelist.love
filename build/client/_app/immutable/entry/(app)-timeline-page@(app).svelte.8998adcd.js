import{S as oe,i as ce,s as ae,G as Qe,k as $,a as q,l as k,m as w,c as F,h as m,n as _,T as L,b as x,L as v,H as We,I as Ge,J as Je,g as y,d as P,O as Xe,o as $e,P as ee,Q as te,U as De,E as Re,w as Ze,y as W,z as G,A as J,B as X,a4 as et,e as me,V as ue,q as O,r as H,u as Q,W as tt,v as le,f as re,F as lt,X as rt,Y as at,K as st,p as Ne,C as U,D as nt}from"../chunks/index.28a8b093.js";import{a as it,b as ot}from"../chunks/aniList.16789991.js";import{c as ct}from"../chunks/createInfiniteQuery.54db7b9a.js";import{d as ut,a as xe,f as ft,b as dt,i as ht}from"../chunks/index.f1452f32.js";import{a as gt}from"../chunks/navigation.01510f09.js";import{d as mt}from"../chunks/UserSettingStore.4034ccb9.js";import{f as _t}from"../chunks/index.6e5fca10.js";import{o as vt}from"../chunks/onMediaDetailsModal.79cd5933.js";import{I as pt}from"../chunks/Image.1cf0f7e3.js";import{D as bt}from"../chunks/Dot.a3f98c28.js";import{T as wt}from"../chunks/TimelineCardSkeleton.b3cba383.js";function Ce(n){let e,l,t,r,a,s,i,o,c,u;return{c(){e=$("div"),l=$("button"),t=ee("svg"),r=ee("path"),a=q(),s=$("button"),i=ee("svg"),o=ee("path"),this.h()},l(h){e=k(h,"DIV",{class:!0});var p=w(e);l=k(p,"BUTTON",{class:!0});var g=w(l);t=te(g,"svg",{xmlns:!0,width:!0,height:!0,viewBox:!0,class:!0});var f=w(t);r=te(f,"path",{d:!0}),w(r).forEach(m),f.forEach(m),g.forEach(m),a=F(p),s=k(p,"BUTTON",{class:!0});var d=w(s);i=te(d,"svg",{xmlns:!0,width:!0,height:!0,viewBox:!0,class:!0});var b=w(i);o=te(b,"path",{d:!0}),w(o).forEach(m),b.forEach(m),d.forEach(m),p.forEach(m),this.h()},h(){_(r,"d","M13.293 6.293 7.586 12l5.707 5.707 1.414-1.414L10.414 12l4.293-4.293z"),_(t,"xmlns","http://www.w3.org/2000/svg"),_(t,"width","24"),_(t,"height","24"),_(t,"viewBox","0 0 24 24"),_(t,"class","w-6 h-6 fill-current"),_(l,"class","block p-1 lg:p-2 rounded-full bg-neutral-900/80 lg:hover:bg-neutral-800 z-10"),L(l,"opacity-60",!n[3]),L(l,"cursor-not-allowed",!n[3]),_(o,"d","M10.707 17.707 16.414 12l-5.707-5.707-1.414 1.414L13.586 12l-4.293 4.293z"),_(i,"xmlns","http://www.w3.org/2000/svg"),_(i,"width","24"),_(i,"height","24"),_(i,"viewBox","0 0 24 24"),_(i,"class","w-6 h-6 fill-current"),_(s,"class","block p-1 lg:p-2 rounded-full bg-neutral-900/80 lg:hover:bg-neutral-800 z-10"),L(s,"opacity-60",!n[2]),L(s,"cursor-not-allowed",!n[2]),_(e,"class","absolute flex gap-x-2 right-2 -top-12")},m(h,p){x(h,e,p),v(e,l),v(l,t),v(t,r),v(e,a),v(e,s),v(s,i),v(i,o),c||(u=[De(l,"click",n[8]),De(s,"click",n[9])],c=!0)},p(h,p){p&8&&L(l,"opacity-60",!h[3]),p&8&&L(l,"cursor-not-allowed",!h[3]),p&4&&L(s,"opacity-60",!h[2]),p&4&&L(s,"cursor-not-allowed",!h[2])},d(h){h&&m(e),c=!1,Re(u)}}}function Dt(n){let e,l,t,r,a=(n[0]||!n[4])&&Ce(n);const s=n[7].default,i=Qe(s,n,n[6],null);return{c(){e=$("div"),a&&a.c(),l=q(),t=$("div"),i&&i.c(),this.h()},l(o){e=k(o,"DIV",{class:!0});var c=w(e);a&&a.l(c),l=F(c),t=k(c,"DIV",{class:!0});var u=w(t);i&&i.l(u),u.forEach(m),c.forEach(m),this.h()},h(){_(t,"class","flex flex-row w-full overflow-x-auto snap-x scrollbar-none"),_(e,"class","flex justify-center relative"),L(e,"mt-12",n[0]||!n[4])},m(o,c){x(o,e,c),a&&a.m(e,null),v(e,l),v(e,t),i&&i.m(t,null),n[10](t),r=!0},p(o,[c]){o[0]||!o[4]?a?a.p(o,c):(a=Ce(o),a.c(),a.m(e,l)):a&&(a.d(1),a=null),i&&i.p&&(!r||c&64)&&We(i,s,o,o[6],r?Je(s,o[6],c,null):Ge(o[6]),null),(!r||c&17)&&L(e,"mt-12",o[0]||!o[4])},i(o){r||(y(i,o),r=!0)},o(o){P(i,o),r=!1},d(o){o&&m(e),a&&a.d(),i&&i.d(o),n[10](null)}}}function $t(n,e,l){let t;Xe(n,mt,f=>l(4,t=f));let{$$slots:r={},$$scope:a}=e,{isNavigation:s=!1}=e,i,o=!0,c=!1;const u=f=>{var d,b,A,S;if(!(!c&&f!=="next"||!o&&f==="next")&&i.querySelector('[isView="1"]')){if(((d=i.querySelector('[isView="1"]'))==null?void 0:d.getAttribute("data-index"))==="1"&&f!=="next")return;const D=i.childElementCount,I=i.querySelectorAll('[isView="1"]').length-1,C=parseInt((b=i.querySelector('[isView="1"]'))==null?void 0:b.getAttribute("data-index")),B=C+I;if(B>=D&&f==="next")return;const M=B+I;f==="next"?D>M?(l(3,c=!0),l(2,o=!0),(A=i.querySelector(`[data-index="${M}"]`))==null||A.scrollIntoView({behavior:"smooth",block:"nearest",inline:"end"})):(l(3,c=!0),l(2,o=!1),i.scrollBy({behavior:"smooth",left:i.scrollWidth})):C>I+1?(l(3,c=!0),l(2,o=!0),(S=i.querySelector(`[data-index="${C-I}"]`))==null||S.scrollIntoView({behavior:"smooth",block:"nearest",inline:"start"})):(l(3,c=!1),l(2,o=!0),i.scrollBy({behavior:"smooth",left:-i.scrollWidth}))}};$e(()=>{Array.from(i.children).forEach((f,d)=>{f.setAttribute("data-index",(d+1).toString()),ut(f)})});const h=()=>u("previus"),p=()=>u("next");function g(f){Ze[f?"unshift":"push"](()=>{i=f,l(1,i)})}return n.$$set=f=>{"isNavigation"in f&&l(0,s=f.isNavigation),"$$scope"in f&&l(6,a=f.$$scope)},[s,i,o,c,t,u,a,r,h,p,g]}class kt extends oe{constructor(e){super(),ce(this,e,$t,Dt,ae,{isNavigation:0})}}function Me(n,e,l){const t=n.slice();return t[12]=e[l],t[14]=l,t}function Be(n){let e,l,t=n[2](n[12].start)+"",r,a,s,i=n[1](n[12].start)+"",o,c,u,h,p,g;function f(){return n[4](n[14],n[12])}return{c(){e=$("div"),l=$("span"),r=O(t),a=q(),s=$("div"),o=O(i),c=q(),this.h()},l(d){e=k(d,"DIV",{class:!0,"data-time":!0});var b=w(e);l=k(b,"SPAN",{class:!0});var A=w(l);r=H(A,t),A.forEach(m),a=F(b),s=k(b,"DIV",{class:!0});var S=w(s);o=H(S,i),S.forEach(m),c=F(b),b.forEach(m),this.h()},h(){_(l,"class","font-bold font-lexenddeca"),_(s,"class","text-sm text-neutral-400"),L(s,"font-bold",n[12].isCurrentDay),L(s,"font-lexenddeca",n[12].isCurrentDay),_(e,"class",u=(n[12].isActive?"bg-white/20 ":"bg-neutral-600/20 ")+"flex flex-col justify-center items-center shrink-0 text-center snap-start mr-2 lg:mr-4 w-36 lg:w-48 px-6 py-4 rounded-lg cursor-pointer"),_(e,"data-time",h=n[12].start)},m(d,b){x(d,e,b),v(e,l),v(l,r),v(e,a),v(e,s),v(s,o),v(e,c),p||(g=De(e,"click",f),p=!0)},p(d,b){n=d,b&1&&t!==(t=n[2](n[12].start)+"")&&Q(r,t),b&1&&i!==(i=n[1](n[12].start)+"")&&Q(o,i),b&1&&L(s,"font-bold",n[12].isCurrentDay),b&1&&L(s,"font-lexenddeca",n[12].isCurrentDay),b&1&&u!==(u=(n[12].isActive?"bg-white/20 ":"bg-neutral-600/20 ")+"flex flex-col justify-center items-center shrink-0 text-center snap-start mr-2 lg:mr-4 w-36 lg:w-48 px-6 py-4 rounded-lg cursor-pointer")&&_(e,"class",u),b&1&&h!==(h=n[12].start)&&_(e,"data-time",h)},d(d){d&&m(e),p=!1,g()}}}function Et(n){let e,l=n[0],t=[];for(let r=0;r<l.length;r+=1)t[r]=Be(Me(n,l,r));return{c(){for(let r=0;r<t.length;r+=1)t[r].c();e=me()},l(r){for(let a=0;a<t.length;a+=1)t[a].l(r);e=me()},m(r,a){for(let s=0;s<t.length;s+=1)t[s]&&t[s].m(r,a);x(r,e,a)},p(r,a){if(a&15){l=r[0];let s;for(s=0;s<l.length;s+=1){const i=Me(r,l,s);t[s]?t[s].p(i,a):(t[s]=Be(i),t[s].c(),t[s].m(e.parentNode,e))}for(;s<t.length;s+=1)t[s].d(1);t.length=l.length}},d(r){ue(t,r),r&&m(e)}}}function It(n){let e,l,t;return l=new kt({props:{$$slots:{default:[Et]},$$scope:{ctx:n}}}),{c(){e=$("div"),W(l.$$.fragment),this.h()},l(r){e=k(r,"DIV",{class:!0});var a=w(e);G(l.$$.fragment,a),a.forEach(m),this.h()},h(){_(e,"class","w-full")},m(r,a){x(r,e,a),J(l,e,null),t=!0},p(r,[a]){const s={};a&32769&&(s.$$scope={dirty:a,ctx:r}),l.$set(s)},i(r){t||(y(l.$$.fragment,r),t=!0)},o(r){P(l.$$.fragment,r),t=!1},d(r){r&&m(e),X(l)}}}function yt(n,e,l){gt(f=>{var d;((d=f.to)==null?void 0:d.route.id)==="/(app)/timeline"&&window.scrollTo({top:0})});const t=et(),r=new Date,a=["Chủ nhật","Thứ hai","Thứ ba","Thứ tư","Thứ năm","Thứ sáu","Thứ bảy"],s=new Date(r.getFullYear(),r.getMonth(),r.getDate()).getTime(),i=new Date(r.getFullYear(),r.getMonth(),r.getDate(),23,59,59,999).getTime(),o=[...[...Array(7)].map((f,d)=>{const b=(d+1)*24*60*60*1e3;return{start:s-b,end:i-b,isCurrentDay:!1,isActive:!1}}).reverse(),{start:s,end:i,isCurrentDay:!0,isActive:!0},...[...Array(14)].map((f,d)=>{const b=(d+1)*24*60*60*1e3;return{start:s+b,end:i+b,isCurrentDay:!1,isActive:!1}})];let c=o.findIndex(f=>f.isActive);const u=f=>{if(f===s)return"Hôm nay";const d=new Date(f);return`${d.getDate()} tháng ${d.getMonth()+1}`},h=f=>a[new Date(f).getDay()];$e(()=>{setTimeout(()=>{var f;(f=document.querySelector(`[data-time="${s}"]`))==null||f.scrollIntoView({behavior:"smooth",block:"nearest",inline:"start"})},10)});const p=(f,d)=>{var b;window.scrollTo({top:0}),l(0,o[c].isActive=!1,o),c=f,l(0,o[c].isActive=!0,o),t("dayData",d),(b=document.querySelector(`[data-time="${o[c].start}"]`))==null||b.scrollIntoView({behavior:"smooth",block:"nearest",inline:"start"})};return[o,u,h,p,(f,d)=>p(f,d)]}class Vt extends oe{constructor(e){super(),ce(this,e,yt,It,ae,{})}}function Le(n,e,l){const t=n.slice();return t[2]=e[l],t}function qe(n){let e,l=n[2]+"",t,r,a,s;return a=new bt({props:{backgroundColor:n[0].media.coverImage.color}}),{c(){e=$("span"),t=O(l),r=q(),W(a.$$.fragment)},l(i){e=k(i,"SPAN",{});var o=w(e);t=H(o,l),o.forEach(m),r=F(i),G(a.$$.fragment,i)},m(i,o){x(i,e,o),v(e,t),x(i,r,o),J(a,i,o),s=!0},p(i,o){(!s||o&1)&&l!==(l=i[2]+"")&&Q(t,l);const c={};o&1&&(c.backgroundColor=i[0].media.coverImage.color),a.$set(c)},i(i){s||(y(a.$$.fragment,i),s=!0)},o(i){P(a.$$.fragment,i),s=!1},d(i){i&&m(e),i&&m(r),X(a,i)}}}function At(n){var Ee;let e,l,t,r,a,s,i,o,c,u,h,p=n[0].media.title.userPreferred+"",g,f,d,b,A,S,D,I,C,B=((Ee=n[0])==null?void 0:Ee.episode)+"",M,fe,de,_e,R,Z,j,se,Y,ve,ke;i=new pt({props:{src:n[0].media.coverImage.large,backgroundColor:n[0].media.coverImage.color}});let K=n[0].media.genres,V=[];for(let E=0;E<K.length;E+=1)V[E]=qe(Le(n,K,E));const Ke=E=>P(V[E],1,1,()=>{V[E]=null});return{c(){e=$("div"),l=$("div"),t=$("a"),r=$("div"),a=$("div"),s=$("div"),W(i.$$.fragment),o=q(),c=$("div"),u=$("div"),h=$("h3"),g=O(p),f=q(),d=$("div");for(let E=0;E<V.length;E+=1)V[E].c();b=q(),A=$("div"),S=$("span"),D=O(n[1]),I=$("span"),C=O("Episode "),M=O(B),_e=q(),R=$("div"),Z=$("button"),j=ee("svg"),se=ee("path"),this.h()},l(E){e=k(E,"DIV",{class:!0});var T=w(e);l=k(T,"DIV",{class:!0});var z=w(l);t=k(z,"A",{class:!0,href:!0});var ne=w(t);r=k(ne,"DIV",{class:!0});var N=w(r);a=k(N,"DIV",{class:!0});var ie=w(a);s=k(ie,"DIV",{class:!0});var Ie=w(s);G(i.$$.fragment,Ie),Ie.forEach(m),ie.forEach(m),o=F(N),c=k(N,"DIV",{class:!0});var he=w(c);u=k(he,"DIV",{class:!0});var ge=w(u);h=k(ge,"H3",{class:!0});var ye=w(h);g=H(ye,p),ye.forEach(m),f=F(ge),d=k(ge,"DIV",{class:!0});var Ve=w(d);for(let we=0;we<V.length;we+=1)V[we].l(Ve);Ve.forEach(m),ge.forEach(m),b=F(he),A=k(he,"DIV",{class:!0});var pe=w(A);S=k(pe,"SPAN",{});var Ae=w(S);D=H(Ae,n[1]),Ae.forEach(m),I=k(pe,"SPAN",{});var be=w(I);C=H(be,"Episode "),M=H(be,B),be.forEach(m),pe.forEach(m),he.forEach(m),N.forEach(m),ne.forEach(m),_e=F(z),R=k(z,"DIV",{class:!0});var Te=w(R);Z=k(Te,"BUTTON",{class:!0});var Se=w(Z);j=te(Se,"svg",{xmlns:!0,width:!0,height:!0,viewBox:!0,class:!0});var Pe=w(j);se=te(Pe,"path",{d:!0}),w(se).forEach(m),Pe.forEach(m),Se.forEach(m),Te.forEach(m),z.forEach(m),T.forEach(m),this.h()},h(){_(s,"class","aspect-w-11 aspect-h-16"),_(a,"class","w-16 rounded shrink-0 overflow-hidden"),_(h,"class","font-bold font-lexenddeca line-clamp-2"),_(d,"class","hidden md:flex flex-wrap gap-1.5 text-sm items-center"),_(u,"class","flex flex-col gap-1.5"),_(A,"class","flex text-sm items-center gap-2"),_(c,"class","w-full flex flex-col justify-start md:justify-between gap-2"),_(r,"class","flex gap-4"),_(t,"class","w-full"),_(t,"href",fe=`/${n[0].media.type.toLowerCase()}/details/${xe(n[0].media.title.userPreferred)}-an${n[0].media.id}`),_(se,"d","M19 11h-6V5h-2v6H5v2h6v6h2v-6h6z"),_(j,"xmlns","http://www.w3.org/2000/svg"),_(j,"width","24"),_(j,"height","24"),_(j,"viewBox","0 0 24 24"),_(j,"class","w-6 h-6 fill-current"),_(Z,"class","text-neutral-400"),_(R,"class","flex items-center z-10"),_(l,"class","flex justify-between w-full gap-4"),_(e,"class","w-full flex flex-wrap rounded-lg bg-neutral-500/20 p-4")},m(E,T){x(E,e,T),v(e,l),v(l,t),v(t,r),v(r,a),v(a,s),J(i,s,null),v(r,o),v(r,c),v(c,u),v(u,h),v(h,g),v(u,f),v(u,d);for(let z=0;z<V.length;z+=1)V[z]&&V[z].m(d,null);v(c,b),v(c,A),v(A,S),v(S,D),v(A,I),v(I,C),v(I,M),v(l,_e),v(l,R),v(R,Z),v(Z,j),v(j,se),Y=!0,ve||(ke=tt(de=vt.call(null,t,{id:n[0].media.id,image:n[0].media.coverImage.large||n[0].media.coverImage.extraLarge,name:n[0].media.title.userPreferred})),ve=!0)},p(E,[T]){var ne;const z={};if(T&1&&(z.src=E[0].media.coverImage.large),T&1&&(z.backgroundColor=E[0].media.coverImage.color),i.$set(z),(!Y||T&1)&&p!==(p=E[0].media.title.userPreferred+"")&&Q(g,p),T&1){K=E[0].media.genres;let N;for(N=0;N<K.length;N+=1){const ie=Le(E,K,N);V[N]?(V[N].p(ie,T),y(V[N],1)):(V[N]=qe(ie),V[N].c(),y(V[N],1),V[N].m(d,null))}for(le(),N=K.length;N<V.length;N+=1)Ke(N);re()}(!Y||T&2)&&Q(D,E[1]),(!Y||T&1)&&B!==(B=((ne=E[0])==null?void 0:ne.episode)+"")&&Q(M,B),(!Y||T&1&&fe!==(fe=`/${E[0].media.type.toLowerCase()}/details/${xe(E[0].media.title.userPreferred)}-an${E[0].media.id}`))&&_(t,"href",fe),de&&lt(de.update)&&T&1&&de.update.call(null,{id:E[0].media.id,image:E[0].media.coverImage.large||E[0].media.coverImage.extraLarge,name:E[0].media.title.userPreferred})},i(E){if(!Y){y(i.$$.fragment,E);for(let T=0;T<K.length;T+=1)y(V[T]);Y=!0}},o(E){P(i.$$.fragment,E),V=V.filter(Boolean);for(let T=0;T<V.length;T+=1)P(V[T]);Y=!1},d(E){E&&m(e),X(i),ue(V,E),ve=!1,ke()}}}function Tt(n,e,l){let{source:t}=e,{time:r}=e;return n.$$set=a=>{"source"in a&&l(0,t=a.source),"time"in a&&l(1,r=a.time)},[t,r]}class St extends oe{constructor(e){super(),ce(this,e,Tt,At,ae,{source:0,time:1})}}function Fe(n,e,l){const t=n.slice();return t[5]=e[l],t}function ze(n,e,l){const t=n.slice();return t[8]=e[l],t}function je(n){let e,l;return e=new St({props:{source:n[8],time:n[1](n[5])}}),{c(){W(e.$$.fragment)},l(t){G(e.$$.fragment,t)},m(t,r){J(e,t,r),l=!0},p(t,r){const a={};r&1&&(a.source=t[8]),r&1&&(a.time=t[1](t[5])),e.$set(a)},i(t){l||(y(e.$$.fragment,t),l=!0)},o(t){P(e.$$.fragment,t),l=!1},d(t){X(e,t)}}}function Oe(n){let e,l,t,r=n[1](n[5])+"",a,s,i,o,c,u=n[0][n[5]],h=[];for(let g=0;g<u.length;g+=1)h[g]=je(ze(n,u,g));const p=g=>P(h[g],1,1,()=>{h[g]=null});return{c(){e=$("li"),l=$("div"),t=$("span"),a=O(r),s=q(),i=$("div");for(let g=0;g<h.length;g+=1)h[g].c();o=q(),this.h()},l(g){e=k(g,"LI",{class:!0});var f=w(e);l=k(f,"DIV",{class:!0});var d=w(l);t=k(d,"SPAN",{class:!0});var b=w(t);a=H(b,r),b.forEach(m),d.forEach(m),s=F(f),i=k(f,"DIV",{class:!0});var A=w(i);for(let S=0;S<h.length;S+=1)h[S].l(A);A.forEach(m),o=F(f),f.forEach(m),this.h()},h(){_(t,"class","text-lg font-bold font-lexenddeca"),_(l,"class","flex"),_(i,"class","w-full flex flex-col gap-2"),_(e,"class","w-full flex flex-col gap-2 mb-6")},m(g,f){x(g,e,f),v(e,l),v(l,t),v(t,a),v(e,s),v(e,i);for(let d=0;d<h.length;d+=1)h[d]&&h[d].m(i,null);v(e,o),c=!0},p(g,f){if((!c||f&1)&&r!==(r=g[1](g[5])+"")&&Q(a,r),f&3){u=g[0][g[5]];let d;for(d=0;d<u.length;d+=1){const b=ze(g,u,d);h[d]?(h[d].p(b,f),y(h[d],1)):(h[d]=je(b),h[d].c(),y(h[d],1),h[d].m(i,null))}for(le(),d=u.length;d<h.length;d+=1)p(d);re()}},i(g){if(!c){for(let f=0;f<u.length;f+=1)y(h[f]);c=!0}},o(g){h=h.filter(Boolean);for(let f=0;f<h.length;f+=1)P(h[f]);c=!1},d(g){g&&m(e),ue(h,g)}}}function Pt(n){let e,l,t,r,a=Object.keys(n[0]),s=[];for(let o=0;o<a.length;o+=1)s[o]=Oe(Fe(n,a,o));const i=o=>P(s[o],1,1,()=>{s[o]=null});return{c(){e=$("div"),l=$("ol");for(let o=0;o<s.length;o+=1)s[o].c();this.h()},l(o){e=k(o,"DIV",{class:!0});var c=w(e);l=k(c,"OL",{class:!0});var u=w(l);for(let h=0;h<s.length;h+=1)s[h].l(u);u.forEach(m),c.forEach(m),this.h()},h(){_(l,"class","w-full"),_(e,"class","w-full")},m(o,c){x(o,e,c),v(e,l);for(let u=0;u<s.length;u+=1)s[u]&&s[u].m(l,null);r=!0},p(o,[c]){if(c&3){a=Object.keys(o[0]);let u;for(u=0;u<a.length;u+=1){const h=Fe(o,a,u);s[u]?(s[u].p(h,c),y(s[u],1)):(s[u]=Oe(h),s[u].c(),y(s[u],1),s[u].m(l,null))}for(le(),u=a.length;u<s.length;u+=1)i(u);re()}},i(o){if(!r){for(let c=0;c<a.length;c+=1)y(s[c]);t||rt(()=>{t=at(l,_t,{}),t.start()}),r=!0}},o(o){s=s.filter(Boolean);for(let c=0;c<s.length;c+=1)P(s[c]);r=!1},d(o){o&&m(e),ue(s,o)}}}function Nt(n,e,l){let{source:t=[]}=e,r={},a=0;const s=o=>o<10?"0"+o.toString():o.toString(),i=o=>{const c=new Date(parseInt(o)*1e3);return`${s(c.getHours())}:${s(c.getMinutes())}`};return n.$$set=o=>{"source"in o&&l(2,t=o.source)},n.$$.update=()=>{if(n.$$.dirty&13&&a!==t.length){l(3,a=t.length-1>a?1:t.length);for(let o=a-1;o<t.length;o++){const c=t[o];c==null||c.data.Page.airingSchedules.forEach(u=>{if(u.media.isAdult)return;const h=u.airingAt;r[h]||l(0,r[h]=[],r),r[h].push(u)})}}},[r,i,t,a]}class xt extends oe{constructor(e){super(),ce(this,e,Nt,Pt,ae,{source:2})}}function Ct(n,e,l){const t=n.slice();return t[9]=e[l],t}function He(n){let e;return{c(){e=$("div"),this.h()},l(l){e=k(l,"DIV",{class:!0}),w(e).forEach(m),this.h()},h(){var l;_(e,"class","fixed inset-0 blur-3xl bg-cover bg-center bg-no-repeat opacity-10 -z-10"),Ne(e,"background-image",`url("${(l=n[2].data)==null?void 0:l.pages[0].data.Page.airingSchedules[0].media.coverImage.large}")`)},m(l,t){x(l,e,t)},p(l,t){var r;t&4&&Ne(e,"background-image",`url("${(r=l[2].data)==null?void 0:r.pages[0].data.Page.airingSchedules[0].media.coverImage.large}")`)},d(l){l&&m(e)}}}function Ue(n){let e=n[0].airingAt_greater,l,t,r=Ye(n);return{c(){r.c(),l=me()},l(a){r.l(a),l=me()},m(a,s){r.m(a,s),x(a,l,s),t=!0},p(a,s){s&1&&ae(e,e=a[0].airingAt_greater)?(le(),P(r,1,1,U),re(),r=Ye(a),r.c(),y(r,1),r.m(l.parentNode,l)):r.p(a,s)},i(a){t||(y(r),t=!0)},o(a){P(r),t=!1},d(a){a&&m(l),r.d(a)}}}function Ye(n){var t;let e,l;return e=new xt({props:{source:((t=n[2].data)==null?void 0:t.pages)||[]}}),{c(){W(e.$$.fragment)},l(r){G(e.$$.fragment,r)},m(r,a){J(e,r,a),l=!0},p(r,a){var i;const s={};a&4&&(s.source=((i=r[2].data)==null?void 0:i.pages)||[]),e.$set(s)},i(r){l||(y(e.$$.fragment,r),l=!0)},o(r){P(e.$$.fragment,r),l=!1},d(r){X(e,r)}}}function Mt(n){let e,l;return{c(){e=$("div"),l=O("Không còn kết quả nào!"),this.h()},l(t){e=k(t,"DIV",{class:!0});var r=w(e);l=H(r,"Không còn kết quả nào!"),r.forEach(m),this.h()},h(){_(e,"class","w-full text-center my-20")},m(t,r){x(t,e,r),v(e,l)},p:U,i:U,o:U,d(t){t&&m(e)}}}function Bt(n){let e;return{c(){e=$("div"),this.h()},l(l){e=k(l,"DIV",{class:!0}),w(e).forEach(m),this.h()},h(){_(e,"class","w-full my-20")},m(l,t){x(l,e,t)},p:U,i:U,o:U,d(l){l&&m(e)}}}function Lt(n){let e,l,t=Array(3),r=[];for(let a=0;a<t.length;a+=1)r[a]=qt(Ct(n,t,a));return{c(){e=$("div");for(let a=0;a<r.length;a+=1)r[a].c();this.h()},l(a){e=k(a,"DIV",{class:!0});var s=w(e);for(let i=0;i<r.length;i+=1)r[i].l(s);s.forEach(m),this.h()},h(){_(e,"class","w-full flex flex-col gap-2 mt-2")},m(a,s){x(a,e,s);for(let i=0;i<r.length;i+=1)r[i]&&r[i].m(e,null);l=!0},p:U,i(a){if(!l){for(let s=0;s<t.length;s+=1)y(r[s]);l=!0}},o(a){r=r.filter(Boolean);for(let s=0;s<r.length;s+=1)P(r[s]);l=!1},d(a){a&&m(e),ue(r,a)}}}function qt(n){let e,l;return e=new wt({}),{c(){W(e.$$.fragment)},l(t){G(e.$$.fragment,t)},m(t,r){J(e,t,r),l=!0},i(t){l||(y(e.$$.fragment,t),l=!0)},o(t){P(e.$$.fragment,t),l=!1},d(t){X(e,t)}}}function Ft(n){var A,S;let e,l,t,r,a,s,i,o,c,u,h,p=((S=(A=n[2])==null?void 0:A.data)==null?void 0:S.pages[0].data.Page.airingSchedules[0].media)&&He(n);a=new Vt({}),a.$on("dayData",n[4]);let g=n[2].isSuccess&&Ue(n);const f=[Lt,Bt,Mt],d=[];function b(D,I){return D[2].isLoading||D[2].isFetching||D[2].isFetchingNextPage?0:D[2].hasNextPage?1:2}return c=b(n),u=d[c]=f[c](n),{c(){p&&p.c(),e=q(),l=$("div"),t=$("div"),r=$("div"),W(a.$$.fragment),s=q(),i=$("div"),g&&g.c(),o=q(),u.c(),this.h()},l(D){p&&p.l(D),e=F(D),l=k(D,"DIV",{class:!0});var I=w(l);t=k(I,"DIV",{class:!0});var C=w(t);r=k(C,"DIV",{class:!0});var B=w(r);G(a.$$.fragment,B),B.forEach(m),s=F(C),i=k(C,"DIV",{class:!0});var M=w(i);g&&g.l(M),o=F(M),u.l(M),M.forEach(m),C.forEach(m),I.forEach(m),this.h()},h(){_(r,"class","w-full xl:max-w-4xl 3xl:max-w-5xl mx-auto"),_(i,"class","w-full xl:max-w-4xl 3xl:max-w-5xl mx-auto"),_(t,"class","flex flex-col gap-10 py-2 lg:py-4 px-2 md:px-6 lg:px-8"),_(l,"class","mt-20")},m(D,I){p&&p.m(D,I),x(D,e,I),x(D,l,I),v(l,t),v(t,r),J(a,r,null),v(t,s),v(t,i),g&&g.m(i,null),v(i,o),d[c].m(i,null),h=!0},p(D,[I]){var B,M;(M=(B=D[2])==null?void 0:B.data)!=null&&M.pages[0].data.Page.airingSchedules[0].media?p?p.p(D,I):(p=He(D),p.c(),p.m(e.parentNode,e)):p&&(p.d(1),p=null),D[2].isSuccess?g?(g.p(D,I),I&4&&y(g,1)):(g=Ue(D),g.c(),y(g,1),g.m(i,o)):g&&(le(),P(g,1,1,()=>{g=null}),re());let C=c;c=b(D),c===C?d[c].p(D,I):(le(),P(d[C],1,1,()=>{d[C]=null}),re(),u=d[c],u?u.p(D,I):(u=d[c]=f[c](D),u.c()),y(u,1),u.m(i,null))},i(D){h||(y(a.$$.fragment,D),y(g),y(u),h=!0)},o(D){P(a.$$.fragment,D),P(g),P(u),h=!1},d(D){p&&p.d(D),D&&m(e),D&&m(l),X(a),g&&g.d(),d[c].d()}}}function zt(n,e,l){let t,r,a=U,s=()=>(a(),a=nt(t,f=>l(2,r=f)),t);n.$$.on_destroy.push(()=>a());const i=new Date,o=new Date(i.getFullYear(),i.getMonth(),i.getDate()).getTime(),c=new Date(i.getFullYear(),i.getMonth(),i.getDate(),23,59,59,999).getTime(),u={type:"ANIME",sort:["TIME"],perPage:15,airingAt_greater:0,airingAt_lesser:0},h=(f,d)=>{l(0,u.airingAt_greater=Math.floor(f/1e3),u),l(0,u.airingAt_lesser=Math.floor(d/1e3),u)};h(o,c);const p=dt(()=>{ht()&&!(r.isLoading||r.isFetching||r.isFetchingNextPage)&&r.fetchNextPage()},100);$e(async()=>{window.addEventListener("scroll",p)}),st(()=>{window.removeEventListener("scroll",p)});const g=f=>h(f.detail.start,f.detail.end);return n.$$.update=()=>{n.$$.dirty&1&&s(l(1,t=ct({queryKey:["timeline",u],queryFn:({pageParam:f=1})=>ft(ot,{query:it,variables:{...u,page:f}}),getNextPageParam:f=>{var d,b,A,S,D,I;if((A=(b=(d=f.data)==null?void 0:d.Page)==null?void 0:b.pageInfo)!=null&&A.hasNextPage)return((I=(D=(S=f.data)==null?void 0:S.Page)==null?void 0:D.pageInfo)==null?void 0:I.currentPage)+1},enabled:!!(u.airingAt_greater&&u.airingAt_lesser)})))},[u,t,r,h,g]}class Rt extends oe{constructor(e){super(),ce(this,e,zt,Ft,ae,{})}}export{Rt as default};