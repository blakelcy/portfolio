import{s as q,x as W,n as F,y as $}from"../chunks/scheduler.6h9Eb0fi.js";import{S as z,i as G,e as y,s as P,t as S,c as b,a as C,d as _,f as L,b as M,o as p,g as U,h as m,j as A,z as j,n as R,q as ee,m as te,l as V,A as X,y as re,u as B,v as N,w as O,x as K}from"../chunks/index.Nq_3vCqA.js";function H(n){return n?.length!==void 0?n:Array.from(n)}function ae(n,e){const t={},r={},i={$$scope:1};let a=n.length;for(;a--;){const d=n[a],f=e[a];if(f){for(const s in d)s in f||(r[s]=1);for(const s in f)i[s]||(t[s]=f[s],i[s]=1);n[a]=f}else for(const s in d)i[s]=1}for(const d in r)d in t||(t[d]=void 0);return t}function ne(n){return typeof n=="object"&&n!==null?n:{}}function le(n){let e,t,r,i,a,d,f,s,g,w,c,v,I,u;return{c(){e=y("div"),t=y("div"),r=y("img"),a=P(),d=y("p"),f=S(n[2]),s=P(),g=y("div"),w=y("p"),c=S(n[3]),v=P(),I=y("p"),u=S(n[4]),this.h()},l(k){e=b(k,"DIV",{class:!0});var l=C(e);t=b(l,"DIV",{class:!0});var h=C(t);r=b(h,"IMG",{src:!0,alt:!0,class:!0}),h.forEach(_),a=L(l),d=b(l,"P",{class:!0});var o=C(d);f=M(o,n[2]),o.forEach(_),s=L(l),g=b(l,"DIV",{class:!0});var T=C(g);w=b(T,"P",{class:!0});var D=C(w);c=M(D,n[3]),D.forEach(_),v=L(T),I=b(T,"P",{class:!0});var E=C(I);u=M(E,n[4]),E.forEach(_),T.forEach(_),l.forEach(_),this.h()},h(){W(r.src,i=n[0])||p(r,"src",i),p(r,"alt",n[1]),p(r,"class","svelte-d8g6wd"),p(t,"class","article-img svelte-d8g6wd"),p(d,"class","card-title svelte-d8g6wd"),p(w,"class","svelte-d8g6wd"),p(I,"class","svelte-d8g6wd"),p(g,"class","card-grid svelte-d8g6wd"),p(e,"class","article-card svelte-d8g6wd")},m(k,l){U(k,e,l),m(e,t),m(t,r),m(e,a),m(e,d),m(d,f),m(e,s),m(e,g),m(g,w),m(w,c),m(g,v),m(g,I),m(I,u)},p(k,[l]){l&1&&!W(r.src,i=k[0])&&p(r,"src",i),l&2&&p(r,"alt",k[1]),l&4&&A(f,k[2]),l&8&&A(c,k[3]),l&16&&A(u,k[4])},i:F,o:F,d(k){k&&_(e)}}}function se(n,e,t){let{image:r}=e,{alt:i}=e,{company:a}=e,{paragraph1:d}=e,{paragraph2:f}=e;return n.$$set=s=>{"image"in s&&t(0,r=s.image),"alt"in s&&t(1,i=s.alt),"company"in s&&t(2,a=s.company),"paragraph1"in s&&t(3,d=s.paragraph1),"paragraph2"in s&&t(4,f=s.paragraph2)},[r,i,a,d,f]}class ie extends z{constructor(e){super(),G(this,e,se,le,q,{image:0,alt:1,company:2,paragraph1:3,paragraph2:4})}}function Y(n,e,t){const r=n.slice();return r[9]=e[t],r[11]=t,r}function J(n,e,t){const r=n.slice();return r[12]=e[t],r[11]=t,r}function Q(n){let e,t=n[12]+"",r;return{c(){e=y("p"),r=S(t),this.h()},l(i){e=b(i,"P",{class:!0});var a=C(e);r=M(a,t),a.forEach(_),this.h()},h(){p(e,"class","article-layout col-"+(n[11]+1)+" svelte-1493tsa")},m(i,a){U(i,e,a),m(e,r)},p(i,a){a&64&&t!==(t=i[12]+"")&&A(r,t)},d(i){i&&_(e)}}}function Z(n){let e,t='<span class="svelte-1493tsa"></span>';return{c(){e=y("div"),e.innerHTML=t,this.h()},l(r){e=b(r,"DIV",{class:!0,"data-svelte-h":!0}),re(e)!=="svelte-1y4lop0"&&(e.innerHTML=t),this.h()},h(){p(e,"class","article-grid svelte-1493tsa")},m(r,i){U(r,e,i)},d(r){r&&_(e)}}}function x(n){let e,t,r,i;const a=[n[9]];let d={};for(let f=0;f<a.length;f+=1)d=$(d,a[f]);return t=new ie({props:d}),{c(){e=y("p"),B(t.$$.fragment),r=P(),this.h()},l(f){e=b(f,"P",{class:!0});var s=C(e);N(t.$$.fragment,s),r=L(s),s.forEach(_),this.h()},h(){p(e,"class","article-layout col-"+(n[11]+1)+" svelte-1493tsa")},m(f,s){U(f,e,s),O(t,e,null),m(e,r),i=!0},p(f,s){const g=s&1?ae(a,[ne(f[9])]):{};t.$set(g)},i(f){i||(R(t.$$.fragment,f),i=!0)},o(f){V(t.$$.fragment,f),i=!1},d(f){f&&_(e),K(t)}}}function oe(n){let e,t,r,i,a,d,f,s,g,w=H(n[6]),c=[];for(let l=0;l<w.length;l+=1)c[l]=Q(J(n,w,l));let v=n[1]===!0&&Z(),I=H(n[0]),u=[];for(let l=0;l<I.length;l+=1)u[l]=x(Y(n,I,l));const k=l=>V(u[l],1,1,()=>{u[l]=null});return{c(){e=y("section"),t=y("h2"),r=S(n[5]),i=P(),a=y("div");for(let l=0;l<c.length;l+=1)c[l].c();d=P(),v&&v.c(),f=P(),s=y("div");for(let l=0;l<u.length;l+=1)u[l].c();this.h()},l(l){e=b(l,"SECTION",{class:!0});var h=C(e);t=b(h,"H2",{class:!0});var o=C(t);r=M(o,n[5]),o.forEach(_),i=L(h),a=b(h,"DIV",{class:!0});var T=C(a);for(let E=0;E<c.length;E+=1)c[E].l(T);T.forEach(_),d=L(h),v&&v.l(h),f=L(h),s=b(h,"DIV",{class:!0});var D=C(s);for(let E=0;E<u.length;E+=1)u[E].l(D);D.forEach(_),h.forEach(_),this.h()},h(){p(t,"class","article-title svelte-1493tsa"),p(a,"class","article-grid svelte-1493tsa"),j(a,"gridFour",n[4]),p(s,"class","article-grid grid-3 svelte-1493tsa"),j(s,"bordered",n[2]),p(e,"class","grid-full article-section svelte-1493tsa"),j(e,"redText",n[3])},m(l,h){U(l,e,h),m(e,t),m(t,r),m(e,i),m(e,a);for(let o=0;o<c.length;o+=1)c[o]&&c[o].m(a,null);m(e,d),v&&v.m(e,null),m(e,f),m(e,s);for(let o=0;o<u.length;o+=1)u[o]&&u[o].m(s,null);g=!0},p(l,[h]){if((!g||h&32)&&A(r,l[5]),h&64){w=H(l[6]);let o;for(o=0;o<w.length;o+=1){const T=J(l,w,o);c[o]?c[o].p(T,h):(c[o]=Q(T),c[o].c(),c[o].m(a,null))}for(;o<c.length;o+=1)c[o].d(1);c.length=w.length}if((!g||h&16)&&j(a,"gridFour",l[4]),l[1]===!0?v||(v=Z(),v.c(),v.m(e,f)):v&&(v.d(1),v=null),h&1){I=H(l[0]);let o;for(o=0;o<I.length;o+=1){const T=Y(l,I,o);u[o]?(u[o].p(T,h),R(u[o],1)):(u[o]=x(T),u[o].c(),R(u[o],1),u[o].m(s,null))}for(ee(),o=I.length;o<u.length;o+=1)k(o);te()}(!g||h&4)&&j(s,"bordered",l[2]),(!g||h&8)&&j(e,"redText",l[3])},i(l){if(!g){for(let h=0;h<I.length;h+=1)R(u[h]);g=!0}},o(l){u=u.filter(Boolean);for(let h=0;h<u.length;h+=1)V(u[h]);g=!1},d(l){l&&_(e),X(c,l),v&&v.d(),X(u,l)}}}function ce(n,e,t){let{bar:r=!0}=e,{bordered:i=!0}=e,{redText:a=!1}=e,{gridThree:d=!1}=e,{gridFour:f=!1}=e,{title:s="Default"}=e,{articleParagraphs:g=[]}=e,{articleCards:w=[]}=e;return n.$$set=c=>{"bar"in c&&t(1,r=c.bar),"bordered"in c&&t(2,i=c.bordered),"redText"in c&&t(3,a=c.redText),"gridThree"in c&&t(7,d=c.gridThree),"gridFour"in c&&t(4,f=c.gridFour),"title"in c&&t(5,s=c.title),"articleParagraphs"in c&&t(6,g=c.articleParagraphs),"articleCards"in c&&t(0,w=c.articleCards)},[w,r,i,a,f,s,g,d]}class fe extends z{constructor(e){super(),G(this,e,ce,oe,q,{bar:1,bordered:2,redText:3,gridThree:7,gridFour:4,title:5,articleParagraphs:6,articleCards:0})}}function de(n){let e,t,r;return{c(){e=y("section"),t=y("img"),this.h()},l(i){e=b(i,"SECTION",{class:!0});var a=C(e);t=b(a,"IMG",{class:!0,src:!0,alt:!0}),a.forEach(_),this.h()},h(){p(t,"class","banner-image svelte-b22sf"),W(t.src,r=n[0])||p(t,"src",r),p(t,"alt","MidJourney generated image of a forest in the Pacific North West"),p(e,"class","grid-full banner-container svelte-b22sf")},m(i,a){U(i,e,a),m(e,t)},p:F,i:F,o:F,d(i){i&&_(e)}}}function he(n){return[new URL(""+new URL("../assets/pnw_forest.oEFI77I9.png",import.meta.url).href,import.meta.url).href]}class ue extends z{constructor(e){super(),G(this,e,he,de,q,{})}}const ge=new URL(""+new URL("../assets/grocery.XsoRuWE2.png",import.meta.url).href,import.meta.url).href,me=new URL(""+new URL("../assets/trucker.alvAOYMD.png",import.meta.url).href,import.meta.url).href,pe=new URL(""+new URL("../assets/founder.-Q8bSYzT.png",import.meta.url).href,import.meta.url).href;function _e(n){let e,t,r,i;return e=new ue({}),r=new fe({props:{title:"The Growth and Experience of a Consultant",articleParagraphs:n[0],articleCards:n[1]}}),{c(){B(e.$$.fragment),t=P(),B(r.$$.fragment)},l(a){N(e.$$.fragment,a),t=L(a),N(r.$$.fragment,a)},m(a,d){O(e,a,d),U(a,t,d),O(r,a,d),i=!0},p:F,i(a){i||(R(e.$$.fragment,a),R(r.$$.fragment,a),i=!0)},o(a){V(e.$$.fragment,a),V(r.$$.fragment,a),i=!1},d(a){a&&_(t),K(e,a),K(r,a)}}}function ve(n){return[["Without a doubt, my decision to join a contractor software company has accelerated my learning and professional growth beyond my expectations. The dynamic environment and challenges have propelled me to gain valuable experience in multiple industries.","I had started with Cardinal Solutions Group in my last semester of my senior college year as an intern. The work, in truth, was tedious as I was entering in content for The Christ Hospitals new website. However, it introduced me into the world of a mid-sized consultancy and a","career full of variety. After college I was fortunate enough to work full time for Cardinal Solutions, starting as a developer. While I was pretty garbage at C# and asp.net development, I was pretty decent at front end development. More importantly I enjoyed it. I quickly worked to switch gears ","and developed my front end expertise. I worked on various projects writing the html and css, from pattern libraries to full scale projects. But as technology evolved, so to were expectations for front end developers. Frameworks like bootstrap reduced the need for custom css.","So I decided to transition more into the design side of projects. I had already worked closely with my design coworkers, and I knew my interests did not live in writing javascript, so this felt like the best career move. I still think it was, I enjoyed the processes relevant to design, especially UX research.","Talking to users and helping solve problems became a real area of interest for me, which ultimately lead me to co-founding a company with my friend. The aim of which is to help people organize their things and return them sustainably to the earth when they are done with them."],[{image:ge,alt:"ai generated image of a grocery store",company:"The Kroger Company ",paragraph1:"Product designer for their fresh department associates.",paragraph2:""},{image:me,alt:"ai generated image of a truck driver",company:"CLC Lodging ",paragraph1:"Lead designer and ux consultant for their redesign.",paragraph2:""},{image:pe,alt:"ai generated image of a truck driver",company:"Kwipoo",paragraph1:"Co-Founder",paragraph2:""}]]}class be extends z{constructor(e){super(),G(this,e,ve,_e,q,{})}}export{be as component};
