import{s as Y,n as L}from"./scheduler.bFUA4JZJ.js";import{S as Z,i as x,k as M,g as X,d as u,l as ee,e as v,t as O,s as T,c as f,a as d,b as R,f as w,m as i,n as C,h as o,j as y}from"./index.AGRpPdDC.js";function Q(s){return s?.length!==void 0?s:Array.from(s)}function U(s,t,r){const e=s.slice();return e[1]=t[r],e}function W(s){let t,r,e,a,n,l=s[1].title+"",_,N,p,k,b=s[1].role+"",I,$,g,E=s[1].description+"",D,j,z,m,V,q,A;return{c(){t=v("a"),r=v("section"),e=v("div"),a=v("header"),n=v("h2"),_=O(l),N=T(),p=v("div"),k=v("h4"),I=O(b),$=T(),g=v("p"),D=O(E),j=T(),z=v("div"),m=v("div"),q=T(),this.h()},l(c){t=f(c,"A",{href:!0,class:!0});var h=d(t);r=f(h,"SECTION",{class:!0});var B=d(r);e=f(B,"DIV",{class:!0,role:!0,style:!0,"aria-label":!0});var H=d(e);a=f(H,"HEADER",{class:!0});var P=d(a);n=f(P,"H2",{class:!0});var F=d(n);_=R(F,l),F.forEach(u),N=w(P),p=f(P,"DIV",{class:!0});var S=d(p);k=f(S,"H4",{class:!0});var G=d(k);I=R(G,b),G.forEach(u),$=w(S),g=f(S,"P",{class:!0});var J=d(g);D=R(J,E),J.forEach(u),S.forEach(u),P.forEach(u),j=w(H),z=f(H,"DIV",{class:!0});var K=d(z);m=f(K,"DIV",{class:!0,role:!0,style:!0,"aria-label":!0}),d(m).forEach(u),K.forEach(u),H.forEach(u),B.forEach(u),q=w(h),h.forEach(u),this.h()},h(){i(n,"class","svelte-zazvkk"),i(k,"class","svelte-zazvkk"),i(g,"class","svelte-zazvkk"),i(p,"class","text-wrapper svelte-zazvkk"),i(a,"class","svelte-zazvkk"),i(m,"class","product-image svelte-zazvkk"),i(m,"role","img"),C(m,"background-image","url("+s[1].productImg+")"),i(m,"aria-label","Image description"),i(z,"class","product-image-wrapper svelte-zazvkk"),i(e,"class","hero-image svelte-zazvkk"),i(e,"role","img"),C(e,"background-image","url("+s[1].heroImg+")"),i(e,"aria-label",V=s[1].altText),i(r,"class","svelte-zazvkk"),i(t,"href",A=`${s[1].link}`),i(t,"class","section-link svelte-zazvkk")},m(c,h){X(c,t,h),o(t,r),o(r,e),o(e,a),o(a,n),o(n,_),o(a,N),o(a,p),o(p,k),o(k,I),o(p,$),o(p,g),o(g,D),o(e,j),o(e,z),o(z,m),o(t,q)},p(c,h){h&1&&l!==(l=c[1].title+"")&&y(_,l),h&1&&b!==(b=c[1].role+"")&&y(I,b),h&1&&E!==(E=c[1].description+"")&&y(D,E),h&1&&C(m,"background-image","url("+c[1].productImg+")"),h&1&&C(e,"background-image","url("+c[1].heroImg+")"),h&1&&V!==(V=c[1].altText)&&i(e,"aria-label",V),h&1&&A!==(A=`${c[1].link}`)&&i(t,"href",A)},d(c){c&&u(t)}}}function ae(s){let t,r=Q(s[0]),e=[];for(let a=0;a<r.length;a+=1)e[a]=W(U(s,r,a));return{c(){for(let a=0;a<e.length;a+=1)e[a].c();t=M()},l(a){for(let n=0;n<e.length;n+=1)e[n].l(a);t=M()},m(a,n){for(let l=0;l<e.length;l+=1)e[l]&&e[l].m(a,n);X(a,t,n)},p(a,[n]){if(n&1){r=Q(a[0]);let l;for(l=0;l<r.length;l+=1){const _=U(a,r,l);e[l]?e[l].p(_,n):(e[l]=W(_),e[l].c(),e[l].m(t.parentNode,t))}for(;l<e.length;l+=1)e[l].d(1);e.length=r.length}},i:L,o:L,d(a){a&&u(t),ee(e,a)}}}function te(s,t,r){let{pamphlets:e=[]}=t;return s.$$set=a=>{"pamphlets"in a&&r(0,e=a.pamphlets)},[e]}class re extends Z{constructor(t){super(),x(this,t,te,ae,Y,{pamphlets:0})}}export{re as P,Q as e};