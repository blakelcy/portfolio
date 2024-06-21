import{s as B,x as W,n as S,y as te}from"../chunks/scheduler.6h9Eb0fi.js";import{S as G,i as H,e as y,s as P,t as A,c as b,a as C,d as p,f as U,b as V,o as I,g as D,h as m,j as q,z as L,n as F,q as re,m as ae,l as M,A as J,u as N,v as O,w as X,x as K}from"../chunks/index.Nq_3vCqA.js";function z(r){return r?.length!==void 0?r:Array.from(r)}function ne(r,e){const t={},a={},l={$$scope:1};let n=r.length;for(;n--;){const d=r[n],c=e[n];if(c){for(const o in d)o in c||(a[o]=1);for(const o in c)l[o]||(t[o]=c[o],l[o]=1);r[n]=c}else for(const o in d)l[o]=1}for(const d in a)d in t||(t[d]=void 0);return t}function ie(r){return typeof r=="object"&&r!==null?r:{}}function le(r){let e,t,a,l,n,d,c,o,g,w,h,_,v,E;return{c(){e=y("div"),t=y("div"),a=y("img"),n=P(),d=y("h4"),c=A(r[2]),o=P(),g=y("div"),w=y("p"),h=A(r[3]),_=P(),v=y("p"),E=A(r[4]),this.h()},l(f){e=b(f,"DIV",{class:!0});var k=C(e);t=b(k,"DIV",{class:!0});var s=C(t);a=b(s,"IMG",{src:!0,alt:!0}),s.forEach(p),n=U(k),d=b(k,"H4",{});var u=C(d);c=V(u,r[2]),u.forEach(p),o=U(k),g=b(k,"DIV",{class:!0});var i=C(g);w=b(i,"P",{});var T=C(w);h=V(T,r[3]),T.forEach(p),_=U(i),v=b(i,"P",{});var R=C(v);E=V(R,r[4]),R.forEach(p),i.forEach(p),k.forEach(p),this.h()},h(){W(a.src,l=r[0])||I(a,"src",l),I(a,"alt",r[1]),I(t,"class","img-wrapper"),I(g,"class","card-grid"),I(e,"class","article-card svelte-1dfl9x3")},m(f,k){D(f,e,k),m(e,t),m(t,a),m(e,n),m(e,d),m(d,c),m(e,o),m(e,g),m(g,w),m(w,h),m(g,_),m(g,v),m(v,E)},p(f,[k]){k&1&&!W(a.src,l=f[0])&&I(a,"src",l),k&2&&I(a,"alt",f[1]),k&4&&q(c,f[2]),k&8&&q(h,f[3]),k&16&&q(E,f[4])},i:S,o:S,d(f){f&&p(e)}}}function se(r,e,t){let{image:a}=e,{alt:l}=e,{company:n}=e,{paragraph1:d}=e,{paragraph2:c}=e;return r.$$set=o=>{"image"in o&&t(0,a=o.image),"alt"in o&&t(1,l=o.alt),"company"in o&&t(2,n=o.company),"paragraph1"in o&&t(3,d=o.paragraph1),"paragraph2"in o&&t(4,c=o.paragraph2)},[a,l,n,d,c]}class oe extends G{constructor(e){super(),H(this,e,se,le,B,{image:0,alt:1,company:2,paragraph1:3,paragraph2:4})}}function Q(r,e,t){const a=r.slice();return a[9]=e[t],a[11]=t,a}function Z(r,e,t){const a=r.slice();return a[12]=e[t],a}function x(r){let e,t=r[12]+"",a;return{c(){e=y("p"),a=A(t)},l(l){e=b(l,"P",{});var n=C(e);a=V(n,t),n.forEach(p)},m(l,n){D(l,e,n),m(e,a)},p(l,n){n&64&&t!==(t=l[12]+"")&&q(a,t)},d(l){l&&p(e)}}}function $(r){let e;return{c(){e=y("div"),this.h()},l(t){e=b(t,"DIV",{class:!0}),C(e).forEach(p),this.h()},h(){I(e,"class","divider")},m(t,a){D(t,e,a)},d(t){t&&p(e)}}}function ee(r){let e,t,a,l;const n=[r[9]];let d={};for(let c=0;c<n.length;c+=1)d=te(d,n[c]);return t=new oe({props:d}),{c(){e=y("p"),N(t.$$.fragment),a=P(),this.h()},l(c){e=b(c,"P",{class:!0});var o=C(e);O(t.$$.fragment,o),a=U(o),o.forEach(p),this.h()},h(){I(e,"class","article-layout col-"+(r[11]+1))},m(c,o){D(c,e,o),X(t,e,null),m(e,a),l=!0},p(c,o){const g=o&1?ne(n,[ie(c[9])]):{};t.$set(g)},i(c){l||(F(t.$$.fragment,c),l=!0)},o(c){M(t.$$.fragment,c),l=!1},d(c){c&&p(e),K(t)}}}function ce(r){let e,t,a,l,n,d,c,o,g,w,h=z(r[6]),_=[];for(let s=0;s<h.length;s+=1)_[s]=x(Z(r,h,s));let v=r[1]===!0&&$(),E=z(r[0]),f=[];for(let s=0;s<E.length;s+=1)f[s]=ee(Q(r,E,s));const k=s=>M(f[s],1,1,()=>{f[s]=null});return{c(){e=y("section"),t=y("div"),a=y("h2"),l=A(r[5]),n=P(),d=y("div");for(let s=0;s<_.length;s+=1)_[s].c();c=P(),v&&v.c(),o=P(),g=y("div");for(let s=0;s<f.length;s+=1)f[s].c();this.h()},l(s){e=b(s,"SECTION",{class:!0});var u=C(e);t=b(u,"DIV",{class:!0});var i=C(t);a=b(i,"H2",{});var T=C(a);l=V(T,r[5]),T.forEach(p),n=U(i),d=b(i,"DIV",{class:!0});var R=C(d);for(let j=0;j<_.length;j+=1)_[j].l(R);R.forEach(p),c=U(i),v&&v.l(i),o=U(i),g=b(i,"DIV",{class:!0});var Y=C(g);for(let j=0;j<f.length;j+=1)f[j].l(Y);Y.forEach(p),i.forEach(p),u.forEach(p),this.h()},h(){I(d,"class","article-grid"),L(d,"gridFour",r[4]),I(g,"class","article-grid"),L(g,"bordered",r[2]),I(t,"class","wrapper"),I(e,"class","svelte-58lj7y"),L(e,"redText",r[3])},m(s,u){D(s,e,u),m(e,t),m(t,a),m(a,l),m(t,n),m(t,d);for(let i=0;i<_.length;i+=1)_[i]&&_[i].m(d,null);m(t,c),v&&v.m(t,null),m(t,o),m(t,g);for(let i=0;i<f.length;i+=1)f[i]&&f[i].m(g,null);w=!0},p(s,[u]){if((!w||u&32)&&q(l,s[5]),u&64){h=z(s[6]);let i;for(i=0;i<h.length;i+=1){const T=Z(s,h,i);_[i]?_[i].p(T,u):(_[i]=x(T),_[i].c(),_[i].m(d,null))}for(;i<_.length;i+=1)_[i].d(1);_.length=h.length}if((!w||u&16)&&L(d,"gridFour",s[4]),s[1]===!0?v||(v=$(),v.c(),v.m(t,o)):v&&(v.d(1),v=null),u&1){E=z(s[0]);let i;for(i=0;i<E.length;i+=1){const T=Q(s,E,i);f[i]?(f[i].p(T,u),F(f[i],1)):(f[i]=ee(T),f[i].c(),F(f[i],1),f[i].m(g,null))}for(re(),i=E.length;i<f.length;i+=1)k(i);ae()}(!w||u&4)&&L(g,"bordered",s[2]),(!w||u&8)&&L(e,"redText",s[3])},i(s){if(!w){for(let u=0;u<E.length;u+=1)F(f[u]);w=!0}},o(s){f=f.filter(Boolean);for(let u=0;u<f.length;u+=1)M(f[u]);w=!1},d(s){s&&p(e),J(_,s),v&&v.d(),J(f,s)}}}function fe(r,e,t){let{bar:a=!0}=e,{bordered:l=!0}=e,{redText:n=!1}=e,{gridThree:d=!1}=e,{gridFour:c=!1}=e,{title:o="Default"}=e,{articleParagraphs:g=[]}=e,{articleCards:w=[]}=e;return r.$$set=h=>{"bar"in h&&t(1,a=h.bar),"bordered"in h&&t(2,l=h.bordered),"redText"in h&&t(3,n=h.redText),"gridThree"in h&&t(7,d=h.gridThree),"gridFour"in h&&t(4,c=h.gridFour),"title"in h&&t(5,o=h.title),"articleParagraphs"in h&&t(6,g=h.articleParagraphs),"articleCards"in h&&t(0,w=h.articleCards)},[w,a,l,n,c,o,g,d]}class de extends G{constructor(e){super(),H(this,e,fe,ce,B,{bar:1,bordered:2,redText:3,gridThree:7,gridFour:4,title:5,articleParagraphs:6,articleCards:0})}}function he(r){let e,t,a;return{c(){e=y("section"),t=y("img"),this.h()},l(l){e=b(l,"SECTION",{class:!0});var n=C(e);t=b(n,"IMG",{class:!0,src:!0,alt:!0}),n.forEach(p),this.h()},h(){I(t,"class","banner-image svelte-h5abtq"),W(t.src,a=r[0])||I(t,"src",a),I(t,"alt","MidJourney generated image of a forest in the Pacific North West"),I(e,"class","grid-full banner-container svelte-h5abtq")},m(l,n){D(l,e,n),m(e,t)},p:S,i:S,o:S,d(l){l&&p(e)}}}function ue(r){return[new URL(""+new URL("../assets/pnw_forest.oEFI77I9.png",import.meta.url).href,import.meta.url).href]}class ge extends G{constructor(e){super(),H(this,e,ue,he,B,{})}}const me=new URL(""+new URL("../assets/grocery.XsoRuWE2.png",import.meta.url).href,import.meta.url).href,pe=new URL(""+new URL("../assets/trucker.alvAOYMD.png",import.meta.url).href,import.meta.url).href,_e=new URL(""+new URL("../assets/founder.-Q8bSYzT.png",import.meta.url).href,import.meta.url).href;function ve(r){let e,t,a,l;return e=new ge({}),a=new de({props:{title:"The Growth and Experience of a Consultant",articleParagraphs:r[0],articleCards:r[1]}}),{c(){N(e.$$.fragment),t=P(),N(a.$$.fragment)},l(n){O(e.$$.fragment,n),t=U(n),O(a.$$.fragment,n)},m(n,d){X(e,n,d),D(n,t,d),X(a,n,d),l=!0},p:S,i(n){l||(F(e.$$.fragment,n),F(a.$$.fragment,n),l=!0)},o(n){M(e.$$.fragment,n),M(a.$$.fragment,n),l=!1},d(n){n&&p(t),K(e,n),K(a,n)}}}function we(r){return[["Without a doubt, my decision to join a contractor software company has accelerated my learning and professional growth beyond my expectations. The dynamic environment and challenges have propelled me to gain valuable experience in multiple industries.","I had started with Cardinal Solutions Group in my last semester of my senior college year as an intern. The work, in truth, was tedious as I was entering in content for The Christ Hospitals new website. However, it introduced me into the world of a mid-sized consultancy and a","career full of variety. After college I was fortunate enough to work full time for Cardinal Solutions, starting as a developer. While I was pretty garbage at C# and asp.net development, I was pretty decent at front end development. More importantly I enjoyed it. I quickly worked to switch gears ","and developed my front end expertise. I worked on various projects writing the html and css, from pattern libraries to full scale projects. But as technology evolved, so to were expectations for front end developers. Frameworks like bootstrap reduced the need for custom css.","So I decided to transition more into the design side of projects. I had already worked closely with my design coworkers, and I knew my interests did not live in writing javascript, so this felt like the best career move. I still think it was, I enjoyed the processes relevant to design, especially UX research.","Talking to users and helping solve problems became a real area of interest for me, which ultimately lead me to co-founding a company with my friend. The aim of which is to help people organize their things and return them sustainably to the earth when they are done with them."],[{image:me,alt:"ai generated image of a grocery store",company:"The Kroger Company * Product Designer UI/UX",paragraph1:"Product designer for their fresh department associates. (Case Study in Progress)",paragraph2:""},{image:pe,alt:"ai generated image of a truck driver",company:"CLC Lodging * Product Designer/Business Analyst",paragraph1:"Lead designer and ux consultant for their redesign. (Case Study in Progress)",paragraph2:""},{image:_e,alt:"ai generated image of a truck driver",company:"Kwipoo",paragraph1:"Co-Founder (More to come!)",paragraph2:""}]]}class Ie extends G{constructor(e){super(),H(this,e,we,ve,B,{})}}export{Ie as component};