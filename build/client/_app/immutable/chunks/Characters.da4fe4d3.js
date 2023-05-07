import{S as ee,i as le,s as te,k as _,l as g,m as p,h as u,n as m,b as y,v as U,d as P,f as Z,g as w,X as ae,Y as re,V as $,C,y as se,a as L,z as ie,c as S,A as ne,L as b,W as oe,F as ce,B as de,q as ue,r as fe,u as he}from"./index.28a8b093.js";import{f as me}from"./index.6e5fca10.js";import{u as Q}from"./useCreateLink.cbad7577.js";import{o as _e}from"./onCharacterDetailsModal.be1b54f7.js";import{C as ge}from"./CardVerticalBase.a15db06b.js";function R(i,e,r){const l=i.slice();return l[6]=e[r],l}function pe(i,e,r){const l=i.slice();return l[3]=e[r],l}function ve(i){let e,r,l,t=i[2],a=[];for(let c=0;c<t.length;c+=1)a[c]=T(R(i,t,c));const o=c=>P(a[c],1,1,()=>{a[c]=null});return{c(){e=_("div");for(let c=0;c<a.length;c+=1)a[c].c();this.h()},l(c){e=g(c,"DIV",{class:!0});var n=p(e);for(let s=0;s<a.length;s+=1)a[s].l(n);n.forEach(u),this.h()},h(){m(e,"class","w-full grid grid-cols-12 gap-x-1.5 sm:gap-x-2.5 gap-y-0 md:grid-cols-4 md:gap-2 lg:md:gap-3 xl:grid-cols-5 2xl:gap-4")},m(c,n){y(c,e,n);for(let s=0;s<a.length;s+=1)a[s]&&a[s].m(e,null);l=!0},p(c,n){if(n&4){t=c[2];let s;for(s=0;s<t.length;s+=1){const d=R(c,t,s);a[s]?(a[s].p(d,n),w(a[s],1)):(a[s]=T(d),a[s].c(),w(a[s],1),a[s].m(e,null))}for(U(),s=t.length;s<a.length;s+=1)o(s);Z()}},i(c){if(!l){for(let n=0;n<t.length;n+=1)w(a[n]);r||ae(()=>{r=re(e,me,{}),r.start()}),l=!0}},o(c){a=a.filter(Boolean);for(let n=0;n<a.length;n+=1)P(a[n]);l=!1},d(c){c&&u(e),$(a,c)}}}function be(i){let e,r=Array(5),l=[];for(let t=0;t<r.length;t+=1)l[t]=we(pe(i,r,t));return{c(){e=_("div");for(let t=0;t<l.length;t+=1)l[t].c();this.h()},l(t){e=g(t,"DIV",{class:!0});var a=p(e);for(let o=0;o<l.length;o+=1)l[o].l(a);a.forEach(u),this.h()},h(){m(e,"class","w-full grid grid-cols-12 gap-4 animate-pulse")},m(t,a){y(t,e,a);for(let o=0;o<l.length;o+=1)l[o]&&l[o].m(e,null)},p:C,i:C,o:C,d(t){t&&u(e),$(l,t)}}}function ke(i){let e,r=i[6].role+"",l;return{c(){e=_("div"),l=ue(r),this.h()},l(t){e=g(t,"DIV",{slot:!0,class:!0});var a=p(e);l=fe(a,r),a.forEach(u),this.h()},h(){m(e,"slot","sub-description"),m(e,"class","mt-1 px-1 text-xs md:text-sm text-neutral-300 opacity-60 lowercase first-letter:uppercase")},m(t,a){y(t,e,a),b(e,l)},p(t,a){a&4&&r!==(r=t[6].role+"")&&he(l,r)},d(t){t&&u(e)}}}function T(i){var s,d,k,A,B,M,q,x;let e,r,l,t,a,o,c,n;return r=new ge({props:{options:{title:((d=(s=i[6].node)==null?void 0:s.name)==null?void 0:d.userPreferred)||"",coverImage:{alt:((A=(k=i[6].node)==null?void 0:k.name)==null?void 0:A.userPreferred)||"",image:((M=(B=i[6].node)==null?void 0:B.image)==null?void 0:M.large)||((x=(q=i[6].node)==null?void 0:q.image)==null?void 0:x.medium)}},$$slots:{"sub-description":[ke]},$$scope:{ctx:i}}}),{c(){e=_("a"),se(r.$$.fragment),l=L(),this.h()},l(f){e=g(f,"A",{class:!0,href:!0});var h=p(e);ie(r.$$.fragment,h),l=S(h),h.forEach(u),this.h()},h(){var f,h,v;m(e,"class","col-span-4 md:col-span-1 2xl:col-span-1"),m(e,"href",t=Q(["/character/",{value:((h=(f=i[6].node)==null?void 0:f.name)==null?void 0:h.userPreferred)||"",convert:"lowcase"},"-an",((v=i[6].node)==null?void 0:v.id)||0]))},m(f,h){var v,D,I,V,E;y(f,e,h),ne(r,e,null),b(e,l),o=!0,c||(n=oe(a=_e.call(null,e,{id:((v=i[6].node)==null?void 0:v.id)||0,name:((I=(D=i[6].node)==null?void 0:D.name)==null?void 0:I.userPreferred)||"",image:((E=(V=i[6].node)==null?void 0:V.image)==null?void 0:E.medium)||""})),c=!0)},p(f,h){var D,I,V,E,j,z,F,W,X,Y,G,H,J,K,N,O;i=f;const v={};h&4&&(v.options={title:((I=(D=i[6].node)==null?void 0:D.name)==null?void 0:I.userPreferred)||"",coverImage:{alt:((E=(V=i[6].node)==null?void 0:V.name)==null?void 0:E.userPreferred)||"",image:((z=(j=i[6].node)==null?void 0:j.image)==null?void 0:z.large)||((W=(F=i[6].node)==null?void 0:F.image)==null?void 0:W.medium)}}),h&516&&(v.$$scope={dirty:h,ctx:i}),r.$set(v),(!o||h&4&&t!==(t=Q(["/character/",{value:((Y=(X=i[6].node)==null?void 0:X.name)==null?void 0:Y.userPreferred)||"",convert:"lowcase"},"-an",((G=i[6].node)==null?void 0:G.id)||0])))&&m(e,"href",t),a&&ce(a.update)&&h&4&&a.update.call(null,{id:((H=i[6].node)==null?void 0:H.id)||0,name:((K=(J=i[6].node)==null?void 0:J.name)==null?void 0:K.userPreferred)||"",image:((O=(N=i[6].node)==null?void 0:N.image)==null?void 0:O.medium)||""})},i(f){o||(w(r.$$.fragment,f),o=!0)},o(f){P(r.$$.fragment,f),o=!1},d(f){f&&u(e),de(r),c=!1,n()}}}function we(i){let e,r,l,t,a,o,c,n;return{c(){e=_("div"),r=_("div"),l=L(),t=_("div"),a=_("div"),o=L(),c=_("div"),n=L(),this.h()},l(s){e=g(s,"DIV",{class:!0});var d=p(e);r=g(d,"DIV",{class:!0}),p(r).forEach(u),l=S(d),t=g(d,"DIV",{class:!0});var k=p(t);a=g(k,"DIV",{class:!0}),p(a).forEach(u),o=S(k),c=g(k,"DIV",{class:!0}),p(c).forEach(u),k.forEach(u),n=S(d),d.forEach(u),this.h()},h(){m(r,"class","w-14 md:w-16 flex-shrink-0 h-24 bg-neutral-800"),m(a,"class","py-1 px-2 bg-neutral-800 w-full h-8 rounded"),m(c,"class","py-1 px-2 bg-neutral-800 w-full h-6 rounded"),m(t,"class","flex flex-col justify-between ml-0.5 md:ml-2 p-2 w-full"),m(e,"class","col-span-6 lg:col-span-4 flex bg-neutral-900 rounded-lg overflow-hidden")},m(s,d){y(s,e,d),b(e,r),b(e,l),b(e,t),b(t,a),b(t,o),b(t,c),b(e,n)},p:C,d(s){s&&u(e)}}}function ye(i){let e,r,l,t;const a=[be,ve],o=[];function c(n,s){return n[0]?0:n[1]&&n[2]?1:-1}return~(r=c(i))&&(l=o[r]=a[r](i)),{c(){e=_("div"),l&&l.c(),this.h()},l(n){e=g(n,"DIV",{class:!0});var s=p(e);l&&l.l(s),s.forEach(u),this.h()},h(){m(e,"class","w-full flex flex-col space-y-3 py-2 rounded-lg")},m(n,s){y(n,e,s),~r&&o[r].m(e,null),t=!0},p(n,[s]){let d=r;r=c(n),r===d?~r&&o[r].p(n,s):(l&&(U(),P(o[d],1,1,()=>{o[d]=null}),Z()),~r?(l=o[r],l?l.p(n,s):(l=o[r]=a[r](n),l.c()),w(l,1),l.m(e,null)):l=null)},i(n){t||(w(l),t=!0)},o(n){P(l),t=!1},d(n){n&&u(e),~r&&o[r].d()}}}function De(i,e,r){let{isLoading:l=!0}=e,{isSuccess:t=!1}=e,{source:a=null}=e;return i.$$set=o=>{"isLoading"in o&&r(0,l=o.isLoading),"isSuccess"in o&&r(1,t=o.isSuccess),"source"in o&&r(2,a=o.source)},[l,t,a]}class Le extends ee{constructor(e){super(),le(this,e,De,ye,te,{isLoading:0,isSuccess:1,source:2})}}export{Le as default};
