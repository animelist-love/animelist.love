import{S as fe,i as me,s as he,k as _,l as g,m as p,h as u,n as h,b as D,v as ce,d as C,f as de,g as y,X as _e,Y as ge,V as ue,C as A,y as pe,a as B,z as ve,c as M,A as be,L as b,W as ke,F as we,B as ye,q as De,r as Ie,u as Ve}from"./index.28a8b093.js";import{f as Ee}from"./index.6e5fca10.js";import{u as ie}from"./useCreateLink.cbad7577.js";import{o as Pe}from"./onStaffDetailsModal.ad71e974.js";import{C as Se}from"./CardVerticalBase.a15db06b.js";function ne(i,e,r){const l=i.slice();return l[6]=e[r],l}function Le(i,e,r){const l=i.slice();return l[3]=e[r],l}function Ce(i){let e,r,l,t=i[2],a=[];for(let c=0;c<t.length;c+=1)a[c]=oe(ne(i,t,c));const o=c=>C(a[c],1,1,()=>{a[c]=null});return{c(){e=_("div");for(let c=0;c<a.length;c+=1)a[c].c();this.h()},l(c){e=g(c,"DIV",{class:!0});var n=p(e);for(let s=0;s<a.length;s+=1)a[s].l(n);n.forEach(u),this.h()},h(){h(e,"class","w-full grid grid-cols-12 gap-x-1.5 sm:gap-x-2.5 gap-y-0 md:grid-cols-4 md:gap-2 lg:md:gap-3 xl:grid-cols-5 2xl:gap-4")},m(c,n){D(c,e,n);for(let s=0;s<a.length;s+=1)a[s]&&a[s].m(e,null);l=!0},p(c,n){if(n&4){t=c[2];let s;for(s=0;s<t.length;s+=1){const d=ne(c,t,s);a[s]?(a[s].p(d,n),y(a[s],1)):(a[s]=oe(d),a[s].c(),y(a[s],1),a[s].m(e,null))}for(ce(),s=t.length;s<a.length;s+=1)o(s);de()}},i(c){if(!l){for(let n=0;n<t.length;n+=1)y(a[n]);r||_e(()=>{r=ge(e,Ee,{}),r.start()}),l=!0}},o(c){a=a.filter(Boolean);for(let n=0;n<a.length;n+=1)C(a[n]);l=!1},d(c){c&&u(e),ue(a,c)}}}function Ae(i){let e,r=Array(5),l=[];for(let t=0;t<r.length;t+=1)l[t]=Me(Le(i,r,t));return{c(){e=_("div");for(let t=0;t<l.length;t+=1)l[t].c();this.h()},l(t){e=g(t,"DIV",{class:!0});var a=p(e);for(let o=0;o<l.length;o+=1)l[o].l(a);a.forEach(u),this.h()},h(){h(e,"class","w-full grid grid-cols-12 gap-4 animate-pulse")},m(t,a){D(t,e,a);for(let o=0;o<l.length;o+=1)l[o]&&l[o].m(e,null)},p:A,i:A,o:A,d(t){t&&u(e),ue(l,t)}}}function Be(i){let e,r=i[6].role+"",l;return{c(){e=_("div"),l=De(r),this.h()},l(t){e=g(t,"DIV",{slot:!0,class:!0});var a=p(e);l=Ie(a,r),a.forEach(u),this.h()},h(){h(e,"slot","sub-description"),h(e,"class","mt-1 px-1 text-xs md:text-sm text-neutral-300 opacity-60 lowercase first-letter:uppercase")},m(t,a){D(t,e,a),b(e,l)},p(t,a){a&4&&r!==(r=t[6].role+"")&&Ve(l,r)},d(t){t&&u(e)}}}function oe(i){var s,d,w,q,x,j,z,F,W,X,Y,G;let e,r,l,t,a,o,c,n;return r=new Se({props:{options:{title:(w=(d=(s=i[6])==null?void 0:s.node)==null?void 0:d.name)==null?void 0:w.userPreferred,coverImage:{alt:(j=(x=(q=i[6])==null?void 0:q.node)==null?void 0:x.name)==null?void 0:j.userPreferred,image:((W=(F=(z=i[6])==null?void 0:z.node)==null?void 0:F.image)==null?void 0:W.large)||((G=(Y=(X=i[6])==null?void 0:X.node)==null?void 0:Y.image)==null?void 0:G.medium)}},$$slots:{"sub-description":[Be]},$$scope:{ctx:i}}}),{c(){e=_("a"),pe(r.$$.fragment),l=B(),this.h()},l(f){e=g(f,"A",{class:!0,href:!0});var m=p(e);ve(r.$$.fragment,m),l=M(m),m.forEach(u),this.h()},h(){var f,m,v,k;h(e,"class","col-span-4 md:col-span-1 2xl:col-span-1"),h(e,"href",t=ie(["/character/",{value:((m=(f=i[6].node)==null?void 0:f.name)==null?void 0:m.userPreferred)||"",convert:"-"},"-an",((k=(v=i[6])==null?void 0:v.node)==null?void 0:k.id)||0]))},m(f,m){var v,k,I,V,E,P,S,L;D(f,e,m),be(r,e,null),b(e,l),o=!0,c||(n=ke(a=Pe.call(null,e,{id:((k=(v=i[6])==null?void 0:v.node)==null?void 0:k.id)??0,name:((E=(V=(I=i[6])==null?void 0:I.node)==null?void 0:V.name)==null?void 0:E.userPreferred)||"",image:((L=(S=(P=i[6])==null?void 0:P.node)==null?void 0:S.image)==null?void 0:L.medium)||""})),c=!0)},p(f,m){var k,I,V,E,P,S,L,H,J,K,N,O,Q,R,T,U,Z,$,ee,le,te,ae,re,se;i=f;const v={};m&4&&(v.options={title:(V=(I=(k=i[6])==null?void 0:k.node)==null?void 0:I.name)==null?void 0:V.userPreferred,coverImage:{alt:(S=(P=(E=i[6])==null?void 0:E.node)==null?void 0:P.name)==null?void 0:S.userPreferred,image:((J=(H=(L=i[6])==null?void 0:L.node)==null?void 0:H.image)==null?void 0:J.large)||((O=(N=(K=i[6])==null?void 0:K.node)==null?void 0:N.image)==null?void 0:O.medium)}}),m&516&&(v.$$scope={dirty:m,ctx:i}),r.$set(v),(!o||m&4&&t!==(t=ie(["/character/",{value:((R=(Q=i[6].node)==null?void 0:Q.name)==null?void 0:R.userPreferred)||"",convert:"-"},"-an",((U=(T=i[6])==null?void 0:T.node)==null?void 0:U.id)||0])))&&h(e,"href",t),a&&we(a.update)&&m&4&&a.update.call(null,{id:(($=(Z=i[6])==null?void 0:Z.node)==null?void 0:$.id)??0,name:((te=(le=(ee=i[6])==null?void 0:ee.node)==null?void 0:le.name)==null?void 0:te.userPreferred)||"",image:((se=(re=(ae=i[6])==null?void 0:ae.node)==null?void 0:re.image)==null?void 0:se.medium)||""})},i(f){o||(y(r.$$.fragment,f),o=!0)},o(f){C(r.$$.fragment,f),o=!1},d(f){f&&u(e),ye(r),c=!1,n()}}}function Me(i){let e,r,l,t,a,o,c,n;return{c(){e=_("div"),r=_("div"),l=B(),t=_("div"),a=_("div"),o=B(),c=_("div"),n=B(),this.h()},l(s){e=g(s,"DIV",{class:!0});var d=p(e);r=g(d,"DIV",{class:!0}),p(r).forEach(u),l=M(d),t=g(d,"DIV",{class:!0});var w=p(t);a=g(w,"DIV",{class:!0}),p(a).forEach(u),o=M(w),c=g(w,"DIV",{class:!0}),p(c).forEach(u),w.forEach(u),n=M(d),d.forEach(u),this.h()},h(){h(r,"class","w-14 md:w-16 flex-shrink-0 h-24 bg-neutral-800"),h(a,"class","py-1 px-2 bg-neutral-800 w-full h-8 rounded"),h(c,"class","py-1 px-2 bg-neutral-800 w-full h-6 rounded"),h(t,"class","flex flex-col justify-between ml-0.5 md:ml-2 p-2 w-full"),h(e,"class","col-span-6 lg:col-span-4 flex bg-neutral-900 rounded-lg overflow-hidden")},m(s,d){D(s,e,d),b(e,r),b(e,l),b(e,t),b(t,a),b(t,o),b(t,c),b(e,n)},p:A,d(s){s&&u(e)}}}function qe(i){let e,r,l,t;const a=[Ae,Ce],o=[];function c(n,s){return n[0]?0:n[1]&&n[2]?1:-1}return~(r=c(i))&&(l=o[r]=a[r](i)),{c(){e=_("div"),l&&l.c(),this.h()},l(n){e=g(n,"DIV",{class:!0});var s=p(e);l&&l.l(s),s.forEach(u),this.h()},h(){h(e,"class","w-full flex flex-col space-y-3 py-2 rounded-lg")},m(n,s){D(n,e,s),~r&&o[r].m(e,null),t=!0},p(n,[s]){let d=r;r=c(n),r===d?~r&&o[r].p(n,s):(l&&(ce(),C(o[d],1,1,()=>{o[d]=null}),de()),~r?(l=o[r],l?l.p(n,s):(l=o[r]=a[r](n),l.c()),y(l,1),l.m(e,null)):l=null)},i(n){t||(y(l),t=!0)},o(n){C(l),t=!1},d(n){n&&u(e),~r&&o[r].d()}}}function xe(i,e,r){let{isLoading:l=!0}=e,{isSuccess:t=!1}=e,{source:a=null}=e;return i.$$set=o=>{"isLoading"in o&&r(0,l=o.isLoading),"isSuccess"in o&&r(1,t=o.isSuccess),"source"in o&&r(2,a=o.source)},[l,t,a]}class Ye extends fe{constructor(e){super(),me(this,e,xe,qe,he,{isLoading:0,isSuccess:1,source:2})}}export{Ye as default};
