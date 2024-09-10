import{s as de,d as Z,e as X,u as $,g as ee,f as te,r as ge,h as se,b as ve,n as fe}from"../chunks/scheduler.bFUA4JZJ.js";import{S as pe,i as ue,e as u,s as I,c as g,a as B,f as C,d as v,m as n,n as q,g as M,h as f,z as P,A as re,q as J,o as Q,v as ae,B as O,w as oe,x as ne,y as ie}from"../chunks/index.AGRpPdDC.js";import{b as j}from"../chunks/paths.UgZ9cZXN.js";import{P as we}from"../chunks/Pamphlet.js5NZ1Se.js";const me=s=>({}),le=s=>({}),ke=s=>({}),he=s=>({});function ce(s){let t;return{c(){t=u("div"),this.h()},l(r){t=g(r,"DIV",{class:!0,style:!0}),B(t).forEach(v),this.h()},h(){n(t,"class","overlay svelte-1frzg7s"),q(t,"opacity",s[7])},m(r,o){M(r,t,o)},p(r,o){o&128&&q(t,"opacity",r[7])},d(r){r&&v(t)}}}function ye(s){let t,r,o,i,p,E,z,H,R,w,_,b,S,c,x,V,D,h,U,F,d=s[1]&&ce(s);const L=s[19].before,k=Z(L,s,s[18],he),T=s[19].after,y=Z(T,s,s[18],le);return{c(){t=u("div"),r=u("img"),i=I(),p=u("img"),H=I(),d&&d.c(),R=I(),w=u("div"),k&&k.c(),_=I(),b=u("div"),y&&y.c(),S=I(),c=u("div"),x=u("div"),V=I(),D=u("div"),this.h()},l(e){t=g(e,"DIV",{class:!0,style:!0});var a=B(t);r=g(a,"IMG",{src:!0,alt:!0,style:!0,class:!0}),i=C(a),p=g(a,"IMG",{src:!0,alt:!0,style:!0,class:!0}),H=C(a),d&&d.l(a),R=C(a),w=g(a,"DIV",{class:!0,style:!0});var W=B(w);k&&k.l(W),W.forEach(v),_=C(a),b=g(a,"DIV",{class:!0,style:!0});var A=B(b);y&&y.l(A),A.forEach(v),S=C(a),c=g(a,"DIV",{class:!0,style:!0});var G=B(c);x=g(G,"DIV",{class:!0}),B(x).forEach(v),V=C(G),D=g(G,"DIV",{class:!0}),B(D).forEach(v),G.forEach(v),a.forEach(v),this.h()},h(){X(r.src,o=s[3])||n(r,"src",o),n(r,"alt","after"),n(r,"style",s[6]),n(r,"class","svelte-1frzg7s"),X(p.src,E=s[2])||n(p,"src",E),n(p,"alt","before"),n(p,"style",z=s[6]+"clip:rect(0, "+s[8]+"px, "+s[4]+"px, 0);"),n(p,"class","svelte-1frzg7s"),n(w,"class","before-label svelte-1frzg7s"),q(w,"opacity",s[7]),n(b,"class","after-label svelte-1frzg7s"),q(b,"opacity",s[7]),n(x,"class","arrow-left svelte-1frzg7s"),n(D,"class","arrow-right svelte-1frzg7s"),n(c,"class","handle svelte-1frzg7s"),q(c,"left","calc("+s[0]*100+"% - 20px)"),n(t,"class","container svelte-1frzg7s"),n(t,"style",s[6])},m(e,a){M(e,t,a),f(t,r),s[22](r),f(t,i),f(t,p),f(t,H),d&&d.m(t,null),f(t,R),f(t,w),k&&k.m(w,null),f(t,_),f(t,b),y&&y.m(b,null),f(t,S),f(t,c),f(c,x),f(c,V),f(c,D),h=!0,U||(F=[P(window,"touchmove",s[10]),P(window,"touchend",s[12]),P(window,"mousemove",s[10]),P(window,"mouseup",s[12]),P(window,"resize",s[9]),P(r,"mousedown",re(s[21])),P(r,"load",s[9]),P(p,"mousedown",re(s[20])),P(t,"touchstart",s[11]),P(t,"mousedown",s[11])],U=!0)},p(e,[a]){(!h||a&8&&!X(r.src,o=e[3]))&&n(r,"src",o),(!h||a&64)&&n(r,"style",e[6]),(!h||a&4&&!X(p.src,E=e[2]))&&n(p,"src",E),(!h||a&336&&z!==(z=e[6]+"clip:rect(0, "+e[8]+"px, "+e[4]+"px, 0);"))&&n(p,"style",z),e[1]?d?d.p(e,a):(d=ce(e),d.c(),d.m(t,R)):d&&(d.d(1),d=null),k&&k.p&&(!h||a&262144)&&$(k,L,e,e[18],h?te(L,e[18],a,ke):ee(e[18]),he),(!h||a&128)&&q(w,"opacity",e[7]),y&&y.p&&(!h||a&262144)&&$(y,T,e,e[18],h?te(T,e[18],a,me):ee(e[18]),le),(!h||a&128)&&q(b,"opacity",e[7]),(!h||a&1)&&q(c,"left","calc("+e[0]*100+"% - 20px)"),(!h||a&64)&&n(t,"style",e[6])},i(e){h||(J(k,e),J(y,e),h=!0)},o(e){Q(k,e),Q(y,e),h=!1},d(e){e&&v(t),s[22](null),d&&d.d(),k&&k.d(e),y&&y.d(e),U=!1,ge(F)}}}function _e(s,t,r){let o,i,p,E,z,{$$slots:H={},$$scope:R}=t,w=null,_=!1,b,{hideOnSlide:S=!0,contain:c=!1,overlay:x=!0,offset:V=.5,before:D="",after:h=""}=t;function U(e){r(15,w=(e.type==="load"?e.target:b).getBoundingClientRect())}function F(e){if(_&&w){let a=(e.touches?e.touches[0].pageX:e.pageX)-w.left;a=a<0?0:a>o?o:a,r(0,V=a/o)}}function d(e){r(16,_=!0),F(e)}function L(){r(16,_=!1)}function k(e){se.call(this,s,e)}function T(e){se.call(this,s,e)}function y(e){ve[e?"unshift":"push"](()=>{b=e,r(5,b)})}return s.$$set=e=>{"hideOnSlide"in e&&r(13,S=e.hideOnSlide),"contain"in e&&r(14,c=e.contain),"overlay"in e&&r(1,x=e.overlay),"offset"in e&&r(0,V=e.offset),"before"in e&&r(2,D=e.before),"after"in e&&r(3,h=e.after),"$$scope"in e&&r(18,R=e.$$scope)},s.$$.update=()=>{s.$$.dirty&32768&&r(17,o=w&&w.width),s.$$.dirty&32768&&r(4,i=w&&w.height),s.$$.dirty&131073&&r(8,p=o*V),s.$$.dirty&73728&&r(7,E=S&&_?0:1),s.$$.dirty&147472&&r(6,z=c?"width:100%;height:100%;":`width:${o}px;height:${i}px;`)},[V,x,D,h,i,b,z,E,p,U,F,d,L,S,c,w,_,o,R,H,k,T,y]}class be extends pe{constructor(t){super(),ue(this,t,_e,ye,de,{hideOnSlide:13,contain:14,overlay:1,offset:0,before:2,after:3})}}function xe(s){let t,r="BEFORE";return{c(){t=u("span"),t.textContent=r,this.h()},l(o){t=g(o,"SPAN",{slot:!0,"data-svelte-h":!0}),O(t)!=="svelte-rj0zgz"&&(t.textContent=r),this.h()},h(){n(t,"slot","before")},m(o,i){M(o,t,i)},p:fe,d(o){o&&v(t)}}}function Ie(s){let t,r="AFTER";return{c(){t=u("span"),t.textContent=r,this.h()},l(o){t=g(o,"SPAN",{slot:!0,"data-svelte-h":!0}),O(t)!=="svelte-12ugfn7"&&(t.textContent=r),this.h()},h(){n(t,"slot","after")},m(o,i){M(o,t,i)},p:fe,d(o){o&&v(t)}}}function Ce(s){let t,r=`<section class="wrapper svelte-wrh2xk"><header><h4 class="svelte-wrh2xk">CLC Lodging</h4> <h1 class="svelte-wrh2xk">Changing user perspectives through a modern redesign</h1></header> <section class="nav-grid svelte-wrh2xk"><div class="nav-grid-col"><div class="content svelte-wrh2xk"><h3 class="svelte-wrh2xk">Role</h3> <p class="svelte-wrh2xk"><strong>As project lead</strong>, I first performed a heuristic
            analysis on CLC Lodging’s applications. In tandem, I created some
            concept high fidelity mocks of what a redesign could look like.
            After presenting this to the client, I was able to show the impact
            these changes could make for them. Securing a phase 2, I led a small
            remote team in redesigning screens and developing those screens into
            the application.</p></div> <div class="article-text img-col svelte-wrh2xk"><div class="flex-img svelte-wrh2xk"><img style="max-width: 111px" src="${j}/assets/headshotCasey.png" alt="" class="svelte-wrh2xk"/> <p class="svelte-wrh2xk"><strong>Casey Blakely.</strong> Senior Analyst and Designer.</p></div> <div class="col-cnt-1"><p class="svelte-wrh2xk"><strong>Meet the Team.</strong> Casey Blakely (left) led the team with
              support from Nia-Simone (right). Discovery sessions were set up to
              go over individual app screens and potential changes. Nia-Simone was
              then able to redesign screens with oversight and support from Casey.
              Casey was then able to assist in development efforts by being the analyst/designer,
              making sure changes were understood.</p></div></div></div> <div class="grid-col"><div class="content svelte-wrh2xk"><h3 class="svelte-wrh2xk">Research</h3> <p class="svelte-wrh2xk"><strong>Looking for problems.</strong> The only user feedback I had access
            to where the comments and reviews left through the different app stores.
            I also had access to the product owner and community teams of CLC Lodging.
            With those two areas, I relied on my experience as a product designer
            to perform industry analysis in order to create a solution.</p> <ul class="svelte-wrh2xk"><li class="svelte-wrh2xk">Ratings and reviews</li> <li class="svelte-wrh2xk">Competitor analysis</li> <li class="svelte-wrh2xk">Heuristic analysis</li> <li class="svelte-wrh2xk">Stakeholder interviews</li></ul></div> <div class="content svelte-wrh2xk"><h3 class="svelte-wrh2xk">Platform</h3> <p class="svelte-wrh2xk"><strong>One brand, two experiences.</strong> CLC Lodging had an already
            redesigned web portal for it’s users. However, the Android and iOS apps
            were the outdated experiences and the focus of my efforts.</p> <ul class="svelte-wrh2xk"><li class="svelte-wrh2xk">Mobile (Android and iOS)</li></ul></div></div></section></section>`,o,i,p,E=`<h3 class="svelte-wrh2xk">The Goal</h3> <div class="article-paragraph svelte-wrh2xk"><p class="svelte-wrh2xk"><strong class="svelte-wrh2xk">Improve Ratings.</strong> CLC approached us asking if we could help
        improve their ratings. They knew that the app was pretty outdated visually
        and knew from reviews of some of the things that weren’t working, but needed
        some help pinpointing and prioritizing enhancements.</p> <p class="svelte-wrh2xk">To help them achieve this, I wanted to conduct stakeholder interviews as
        well as perform a heuristic analysis on their current app.</p> <p class="svelte-wrh2xk">After gathering what information and direction I could from those
        exercises I would create some concept mockups for some of their main
        flows.</p> <p class="svelte-wrh2xk">With these changes, I hoped to achieve a more thoughtful UI with an
        enhanced user experience for their userbase so that they would be able
        to easily book lodging while on the road and CLC would see an
        improvement to their ratings.</p></div> <img src="${j}/assets/productImages/clc/clcRatingsImage.png" alt="" class="sm svelte-wrh2xk"/>`,z,H,R=`<h3 class="svelte-wrh2xk">Interview</h3> <div class="article-paragraph article-paragraph__img svelte-wrh2xk"><div><p class="svelte-wrh2xk"><strong class="svelte-wrh2xk">Talking with product ownership.</strong> There was one main product
          owner for the CLC Lodging apps and was one of my favorite product owners
          to have worked with. She knew the product inside and out and was able to
          clearly walk me through the app and it’s nuances. Turns out there were
          a lot of “you can only see this page if...” scenarios.</p> <p class="svelte-wrh2xk">I also met with other product team members who were able to aggregate
          user reviews across different platforms. From this I was able to
          understand user pain points.</p> <p class="svelte-wrh2xk">With these conversations happening, I wanted to gather my thoughts, as
          well as help facilitate thoughts of my product owner, inside a Mural
          board.</p> <p class="svelte-wrh2xk">This is one of my preferred methods of quickly capturing notes and
          ideas from my interviews.</p></div> <img src="${j}/assets/productImages/clc/figure3.png" alt="" class="sm svelte-wrh2xk"/></div>`,w,_,b=`<h3 class="svelte-wrh2xk">Research</h3> <div class="article-paragraph svelte-wrh2xk"><p class="svelte-wrh2xk"><strong class="svelte-wrh2xk">Jakob Nielson.</strong> For the analysis I first grabbed
        <a href="https://www.nngroup.com/articles/ten-usability-heuristics/" target="_blank">Nielson’s 10 Usability Heuristics</a> as a reference. Using this foundation I started breaking out the the app
        by it’s different flows and screens. I identified the major flow: Login,
        Search, Hotel Details, and Booking. Alongside this flow were a multitude
        of one off screens that performed various status or administrative features
        for the user.</p> <p class="svelte-wrh2xk">From there I decided to break the flow into the four different micro
        flows and perform the analysis on each. I gave each screen in the flow a
        status; Good, Poor, Fail. If the screen didn’t pass a particular
        heuristic I marked and explained why.</p> <p class="svelte-wrh2xk">After doing this for the entirety of the app I created a PowerPoint
        presentation to show to the client.</p> <p class="svelte-wrh2xk"><strong class="svelte-wrh2xk">Findings.</strong> Overall the app was mostly in need of a fresh
        UI with more consistency between component usage. Some key issues of note
        were it was pretty poor at letting the user know what the error was, leading
        to frustrations. These frustrations were clearly shown in the apps reviews.
        Additionally, there were components that looked like they were a button for
        example, and yet it acted as a tab. However there were other UI versions
        of tabs making the interaction confusing.</p></div> <img src="${j}/assets/productImages/clc/figure1.png" alt="" class="sm svelte-wrh2xk"/>`,S,c,x,V="Concept Mockups",D,h,U=`<p class="svelte-wrh2xk"><strong class="svelte-wrh2xk">Competitor Analysis.</strong> I decided since I didn’t have access
        to any users, I would have to rely more on my experience and the designs
        of other competitor apps. I downloaded and went through a meriad of apps:
        Hopper, Booking.com, Expedia, HotelTonight.</p> <p class="svelte-wrh2xk">I really liked how HotelsTonight’s search UI functioned as well as
        Booking.com, since they themselves had just done a redesign.</p> <p class="svelte-wrh2xk">Using these apps in conjunction with my analysis findings, I quickly put
        together some concept mocks, making sure to focus on spacing,
        typographical hierarchy and a modern consistency.</p> <p class="svelte-wrh2xk"><strong class="svelte-wrh2xk">Recommendations.</strong> I presented the Analysis findings along
        with the concept mockups based on those finding to the stakeholders of CLC
        Lodging. Walking through the different heuristics first making sure they
        understood what I was about to discuss. After spending time on the poor or
        failing pages, I showed off the concepts mocks.</p> <p class="svelte-wrh2xk">Talking through the different changes I was proposing I wanted to make
        sure the client understood why these would be beneficial and an
        improvement for their app. Showcasing the importance of visual
        consistency and hierarchy, the client was receptive to my concepts and
        ultimately wanted to move forward with a full redesign of the app.</p>`,F,d,L,k,T,y='<div class="article-flex article-flex--col svelte-wrh2xk"><h3 class="svelte-wrh2xk">Continue Reading</h3></div>',e,a,W,A,G=`<div class="btn-container svelte-wrh2xk"><button><a href="${j}/">Return Home</a></button></div>`,K;return L=new be({props:{before:j+"/assets/productImages/clc/oldVersion.png",after:j+"/assets/productImages/clc/newVersion.png",contain:!0,overlay:!1,$$slots:{after:[Ie],before:[xe]},$$scope:{ctx:s}}}),a=new we({props:{pamphlets:s[1].map(s[2])}}),{c(){t=u("nav"),t.innerHTML=r,o=I(),i=u("div"),p=u("div"),p.innerHTML=E,z=I(),H=u("div"),H.innerHTML=R,w=I(),_=u("div"),_.innerHTML=b,S=I(),c=u("div"),x=u("h3"),x.textContent=V,D=I(),h=u("div"),h.innerHTML=U,F=I(),d=u("div"),ae(L.$$.fragment),k=I(),T=u("div"),T.innerHTML=y,e=I(),ae(a.$$.fragment),W=I(),A=u("div"),A.innerHTML=G,this.h()},l(l){t=g(l,"NAV",{class:!0,"data-svelte-h":!0}),O(t)!=="svelte-1y1ydyo"&&(t.innerHTML=r),o=C(l),i=g(l,"DIV",{class:!0});var m=B(i);p=g(m,"DIV",{class:!0,"data-svelte-h":!0}),O(p)!=="svelte-kt9syg"&&(p.innerHTML=E),z=C(m),H=g(m,"DIV",{class:!0,"data-svelte-h":!0}),O(H)!=="svelte-10za7tt"&&(H.innerHTML=R),w=C(m),_=g(m,"DIV",{class:!0,"data-svelte-h":!0}),O(_)!=="svelte-1imae8z"&&(_.innerHTML=b),S=C(m),c=g(m,"DIV",{class:!0});var N=B(c);x=g(N,"H3",{class:!0,"data-svelte-h":!0}),O(x)!=="svelte-157nezi"&&(x.textContent=V),D=C(N),h=g(N,"DIV",{class:!0,"data-svelte-h":!0}),O(h)!=="svelte-fyrzux"&&(h.innerHTML=U),F=C(N),d=g(N,"DIV",{class:!0});var Y=B(d);oe(L.$$.fragment,Y),Y.forEach(v),N.forEach(v),m.forEach(v),k=C(l),T=g(l,"DIV",{class:!0,"data-svelte-h":!0}),O(T)!=="svelte-n4rwsa"&&(T.innerHTML=y),e=C(l),oe(a.$$.fragment,l),W=C(l),A=g(l,"DIV",{class:!0,"data-svelte-h":!0}),O(A)!=="svelte-1uic8sd"&&(A.innerHTML=G),this.h()},h(){n(t,"class","svelte-wrh2xk"),n(p,"class","article-grid svelte-wrh2xk"),n(H,"class","article-grid svelte-wrh2xk"),n(_,"class","article-flex article-flex--col svelte-wrh2xk"),n(x,"class","svelte-wrh2xk"),n(h,"class","article-paragraph svelte-wrh2xk"),n(d,"class","image-compare svelte-wrh2xk"),n(c,"class","article-grid svelte-wrh2xk"),n(i,"class","wrapper svelte-wrh2xk"),n(T,"class","wrapper svelte-wrh2xk"),n(A,"class","wrapper svelte-wrh2xk")},m(l,m){M(l,t,m),M(l,o,m),M(l,i,m),f(i,p),f(i,z),f(i,H),f(i,w),f(i,_),f(i,S),f(i,c),f(c,x),f(c,D),f(c,h),f(c,F),f(c,d),ne(L,d,null),M(l,k,m),M(l,T,m),M(l,e,m),ne(a,l,m),M(l,W,m),M(l,A,m),K=!0},p(l,[m]){const N={};m&8&&(N.$$scope={dirty:m,ctx:l}),L.$set(N)},i(l){K||(J(L.$$.fragment,l),J(a.$$.fragment,l),K=!0)},o(l){Q(L.$$.fragment,l),Q(a.$$.fragment,l),K=!1},d(l){l&&(v(t),v(o),v(i),v(k),v(T),v(e),v(W),v(A)),ie(L),ie(a,l)}}}function Le(s){function t(i){return i.startsWith("http")?i:`${j}${i}`}const r=[{title:"Kroger",role:"Product Designer",description:"Lead product designer for Kroger’s Fresh Departments. I was responsible for a web portal and Android application that helped department leaders and associates better account for production amounts in the bakeries, delis and butchers enterprise wide.",link:"/case-study/kroger",heroImg:t("/assets/scenery/mountain-lake.png"),productImg:t("/assets/productImages/kroger/imgBakery.png"),altText:"Mountain view from the slopes of Humboldt in Colorado"}];return[t,r,i=>({...i,link:t(i.link)})]}class ze extends pe{constructor(t){super(),ue(this,t,Le,Ce,de,{})}}export{ze as component};