import{s as de,d as Z,e as X,u as $,g as ee,f as te,r as ge,h as se,b as ve,n as fe}from"../chunks/scheduler.bFUA4JZJ.js";import{S as pe,i as ue,e as u,s as I,c as g,a as O,f as C,d as v,m as i,n as q,g as M,h as f,z as P,A as ae,q as J,o as Q,v as re,B,w as ne,x as ie,y as oe}from"../chunks/index.AGRpPdDC.js";import{b as U}from"../chunks/paths.MygNB0FF.js";import{P as me}from"../chunks/Pamphlet.js5NZ1Se.js";const we=s=>({}),le=s=>({}),ke=s=>({}),he=s=>({});function ce(s){let t;return{c(){t=u("div"),this.h()},l(a){t=g(a,"DIV",{class:!0,style:!0}),O(t).forEach(v),this.h()},h(){i(t,"class","overlay svelte-1frzg7s"),q(t,"opacity",s[7])},m(a,n){M(a,t,n)},p(a,n){n&128&&q(t,"opacity",a[7])},d(a){a&&v(t)}}}function ye(s){let t,a,n,o,p,E,S,H,R,m,_,x,z,c,b,A,D,h,j,F,d=s[1]&&ce(s);const L=s[19].before,k=Z(L,s,s[18],he),T=s[19].after,y=Z(T,s,s[18],le);return{c(){t=u("div"),a=u("img"),o=I(),p=u("img"),H=I(),d&&d.c(),R=I(),m=u("div"),k&&k.c(),_=I(),x=u("div"),y&&y.c(),z=I(),c=u("div"),b=u("div"),A=I(),D=u("div"),this.h()},l(e){t=g(e,"DIV",{class:!0,style:!0});var r=O(t);a=g(r,"IMG",{src:!0,alt:!0,style:!0,class:!0}),o=C(r),p=g(r,"IMG",{src:!0,alt:!0,style:!0,class:!0}),H=C(r),d&&d.l(r),R=C(r),m=g(r,"DIV",{class:!0,style:!0});var W=O(m);k&&k.l(W),W.forEach(v),_=C(r),x=g(r,"DIV",{class:!0,style:!0});var V=O(x);y&&y.l(V),V.forEach(v),z=C(r),c=g(r,"DIV",{class:!0,style:!0});var G=O(c);b=g(G,"DIV",{class:!0}),O(b).forEach(v),A=C(G),D=g(G,"DIV",{class:!0}),O(D).forEach(v),G.forEach(v),r.forEach(v),this.h()},h(){X(a.src,n=s[3])||i(a,"src",n),i(a,"alt","after"),i(a,"style",s[6]),i(a,"class","svelte-1frzg7s"),X(p.src,E=s[2])||i(p,"src",E),i(p,"alt","before"),i(p,"style",S=s[6]+"clip:rect(0, "+s[8]+"px, "+s[4]+"px, 0);"),i(p,"class","svelte-1frzg7s"),i(m,"class","before-label svelte-1frzg7s"),q(m,"opacity",s[7]),i(x,"class","after-label svelte-1frzg7s"),q(x,"opacity",s[7]),i(b,"class","arrow-left svelte-1frzg7s"),i(D,"class","arrow-right svelte-1frzg7s"),i(c,"class","handle svelte-1frzg7s"),q(c,"left","calc("+s[0]*100+"% - 20px)"),i(t,"class","container svelte-1frzg7s"),i(t,"style",s[6])},m(e,r){M(e,t,r),f(t,a),s[22](a),f(t,o),f(t,p),f(t,H),d&&d.m(t,null),f(t,R),f(t,m),k&&k.m(m,null),f(t,_),f(t,x),y&&y.m(x,null),f(t,z),f(t,c),f(c,b),f(c,A),f(c,D),h=!0,j||(F=[P(window,"touchmove",s[10]),P(window,"touchend",s[12]),P(window,"mousemove",s[10]),P(window,"mouseup",s[12]),P(window,"resize",s[9]),P(a,"mousedown",ae(s[21])),P(a,"load",s[9]),P(p,"mousedown",ae(s[20])),P(t,"touchstart",s[11]),P(t,"mousedown",s[11])],j=!0)},p(e,[r]){(!h||r&8&&!X(a.src,n=e[3]))&&i(a,"src",n),(!h||r&64)&&i(a,"style",e[6]),(!h||r&4&&!X(p.src,E=e[2]))&&i(p,"src",E),(!h||r&336&&S!==(S=e[6]+"clip:rect(0, "+e[8]+"px, "+e[4]+"px, 0);"))&&i(p,"style",S),e[1]?d?d.p(e,r):(d=ce(e),d.c(),d.m(t,R)):d&&(d.d(1),d=null),k&&k.p&&(!h||r&262144)&&$(k,L,e,e[18],h?te(L,e[18],r,ke):ee(e[18]),he),(!h||r&128)&&q(m,"opacity",e[7]),y&&y.p&&(!h||r&262144)&&$(y,T,e,e[18],h?te(T,e[18],r,we):ee(e[18]),le),(!h||r&128)&&q(x,"opacity",e[7]),(!h||r&1)&&q(c,"left","calc("+e[0]*100+"% - 20px)"),(!h||r&64)&&i(t,"style",e[6])},i(e){h||(J(k,e),J(y,e),h=!0)},o(e){Q(k,e),Q(y,e),h=!1},d(e){e&&v(t),s[22](null),d&&d.d(),k&&k.d(e),y&&y.d(e),j=!1,ge(F)}}}function _e(s,t,a){let n,o,p,E,S,{$$slots:H={},$$scope:R}=t,m=null,_=!1,x,{hideOnSlide:z=!0,contain:c=!1,overlay:b=!0,offset:A=.5,before:D="",after:h=""}=t;function j(e){a(15,m=(e.type==="load"?e.target:x).getBoundingClientRect())}function F(e){if(_&&m){let r=(e.touches?e.touches[0].pageX:e.pageX)-m.left;r=r<0?0:r>n?n:r,a(0,A=r/n)}}function d(e){a(16,_=!0),F(e)}function L(){a(16,_=!1)}function k(e){se.call(this,s,e)}function T(e){se.call(this,s,e)}function y(e){ve[e?"unshift":"push"](()=>{x=e,a(5,x)})}return s.$$set=e=>{"hideOnSlide"in e&&a(13,z=e.hideOnSlide),"contain"in e&&a(14,c=e.contain),"overlay"in e&&a(1,b=e.overlay),"offset"in e&&a(0,A=e.offset),"before"in e&&a(2,D=e.before),"after"in e&&a(3,h=e.after),"$$scope"in e&&a(18,R=e.$$scope)},s.$$.update=()=>{s.$$.dirty&32768&&a(17,n=m&&m.width),s.$$.dirty&32768&&a(4,o=m&&m.height),s.$$.dirty&131073&&a(8,p=n*A),s.$$.dirty&73728&&a(7,E=z&&_?0:1),s.$$.dirty&147472&&a(6,S=c?"width:100%;height:100%;":`width:${n}px;height:${o}px;`)},[A,b,D,h,o,x,S,E,p,j,F,d,L,z,c,m,_,n,R,H,k,T,y]}class xe extends pe{constructor(t){super(),ue(this,t,_e,ye,de,{hideOnSlide:13,contain:14,overlay:1,offset:0,before:2,after:3})}}function be(s){let t,a="BEFORE";return{c(){t=u("span"),t.textContent=a,this.h()},l(n){t=g(n,"SPAN",{slot:!0,"data-svelte-h":!0}),B(t)!=="svelte-rj0zgz"&&(t.textContent=a),this.h()},h(){i(t,"slot","before")},m(n,o){M(n,t,o)},p:fe,d(n){n&&v(t)}}}function Ie(s){let t,a="AFTER";return{c(){t=u("span"),t.textContent=a,this.h()},l(n){t=g(n,"SPAN",{slot:!0,"data-svelte-h":!0}),B(t)!=="svelte-12ugfn7"&&(t.textContent=a),this.h()},h(){i(t,"slot","after")},m(n,o){M(n,t,o)},p:fe,d(n){n&&v(t)}}}function Ce(s){let t,a=`<section class="wrapper svelte-wrh2xk"><header><h4 class="svelte-wrh2xk">CLC Lodging</h4> <h1 class="svelte-wrh2xk">Changing user perspectives through a modern redesign</h1></header> <section class="nav-grid svelte-wrh2xk"><div class="nav-grid-col"><div class="content svelte-wrh2xk"><h3 class="svelte-wrh2xk">Role</h3> <p class="svelte-wrh2xk"><strong>As project lead</strong>, I first performed a heuristic
            analysis on CLC Lodging’s applications. In tandem, I created some
            concept high fidelity mocks of what a redesign could look like.
            After presenting this to the client, I was able to show the impact
            these changes could make for them. Securing a phase 2, I led a small
            remote team in redesigning screens and developing those screens into
            the application.</p></div> <div class="article-text img-col svelte-wrh2xk"><div class="flex-img svelte-wrh2xk"><img style="max-width: 111px" src="${U}/assets/headshotCasey.png" alt="" class="svelte-wrh2xk"/> <p class="svelte-wrh2xk"><strong>Casey Blakely.</strong> Senior Analyst and Designer.</p> <img style="max-width: 111px" src="${U}/assets/headshotNiaSimone.png" alt="" class="svelte-wrh2xk"/> <p class="svelte-wrh2xk"><strong>Nia-Simone.</strong> Business Analyst.</p></div> <div class="col-cnt-1"><p class="svelte-wrh2xk"><strong>Meet the Team.</strong> Casey Blakely (left) led the team with
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
            were the outdated experiences and the focus of my efforts.</p> <ul class="svelte-wrh2xk"><li class="svelte-wrh2xk">Mobile (Android and iOS)</li></ul></div></div></section></section>`,n,o,p,E=`<h3 class="svelte-wrh2xk">The Goal</h3> <div class="article-paragraph svelte-wrh2xk"><p class="svelte-wrh2xk"><strong class="svelte-wrh2xk">Improve Ratings.</strong> CLC approached us asking if we could help
        improve their ratings. They knew that the app was pretty outdated visually
        and knew from reviews of some of the things that weren’t working, but needed
        some help pinpointing and prioritizing enhancements.</p> <p class="svelte-wrh2xk">To help them achieve this, I wanted to conduct stakeholder interviews as
        well as perform a heuristic analysis on their current app.</p> <p class="svelte-wrh2xk">After gathering what information and direction I could from those
        exercises I would create some concept mockups for some of their main
        flows.</p> <p class="svelte-wrh2xk">With these changes, I hoped to achieve a more thoughtful UI with an
        enhanced user experience for their userbase so that they would be able
        to easily book lodging while on the road and CLC would see an
        improvement to their ratings.</p></div> <img src="${U}/assets/productImages/clc/clcRatingsImage.png" alt="" class="sm svelte-wrh2xk"/>`,S,H,R=`<h3 class="svelte-wrh2xk">Interview</h3> <div class="article-paragraph article-paragraph__img svelte-wrh2xk"><div><p class="svelte-wrh2xk"><strong class="svelte-wrh2xk">Talking with product ownership.</strong> There was one main product
          owner for the CLC Lodging apps and was one of my favorite product owners
          to have worked with. She knew the product inside and out and was able to
          clearly walk me through the app and it’s nuances. Turns out there were
          a lot of “you can only see this page if...” scenarios.</p> <p class="svelte-wrh2xk">I also met with other product team members who were able to aggregate
          user reviews across different platforms. From this I was able to
          understand user pain points.</p> <p class="svelte-wrh2xk">With these conversations happening, I wanted to gather my thoughts, as
          well as help facilitate thoughts of my product owner, inside a Mural
          board.</p> <p class="svelte-wrh2xk">This is one of my preferred methods of quickly capturing notes and
          ideas from my interviews.</p></div> <img src="${U}/assets/productImages/clc/figure3.png" alt="" class="sm svelte-wrh2xk"/></div>`,m,_,x=`<h3 class="svelte-wrh2xk">Research</h3> <div class="article-paragraph svelte-wrh2xk"><p class="svelte-wrh2xk"><strong class="svelte-wrh2xk">Jakob Nielson.</strong> For the analysis I first grabbed
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
        of tabs making the interaction confusing.</p></div> <img src="${U}/assets/productImages/clc/figure1.png" alt="" class="sm svelte-wrh2xk"/>`,z,c,b,A="Concept Mockups",D,h,j=`<p class="svelte-wrh2xk"><strong class="svelte-wrh2xk">Competitor Analysis.</strong> I decided since I didn’t have access
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
        ultimately wanted to move forward with a full redesign of the app.</p>`,F,d,L,k,T,y='<div class="article-flex article-flex--col svelte-wrh2xk"><h3 class="svelte-wrh2xk">Continue Reading</h3></div>',e,r,W,V,G=`<div class="btn-container svelte-wrh2xk"><button><a href="${U}/">Return Home</a></button></div>`,K;return L=new xe({props:{before:U+"/assets/productImages/clc/oldVersion.png",after:U+"/assets/productImages/clc/newVersion.png",contain:!0,overlay:!1,$$slots:{after:[Ie],before:[be]},$$scope:{ctx:s}}}),r=new me({props:{pamphlets:s[1].map(s[2])}}),{c(){t=u("nav"),t.innerHTML=a,n=I(),o=u("div"),p=u("div"),p.innerHTML=E,S=I(),H=u("div"),H.innerHTML=R,m=I(),_=u("div"),_.innerHTML=x,z=I(),c=u("div"),b=u("h3"),b.textContent=A,D=I(),h=u("div"),h.innerHTML=j,F=I(),d=u("div"),re(L.$$.fragment),k=I(),T=u("div"),T.innerHTML=y,e=I(),re(r.$$.fragment),W=I(),V=u("div"),V.innerHTML=G,this.h()},l(l){t=g(l,"NAV",{class:!0,"data-svelte-h":!0}),B(t)!=="svelte-1au71kb"&&(t.innerHTML=a),n=C(l),o=g(l,"DIV",{class:!0});var w=O(o);p=g(w,"DIV",{class:!0,"data-svelte-h":!0}),B(p)!=="svelte-kt9syg"&&(p.innerHTML=E),S=C(w),H=g(w,"DIV",{class:!0,"data-svelte-h":!0}),B(H)!=="svelte-10za7tt"&&(H.innerHTML=R),m=C(w),_=g(w,"DIV",{class:!0,"data-svelte-h":!0}),B(_)!=="svelte-1imae8z"&&(_.innerHTML=x),z=C(w),c=g(w,"DIV",{class:!0});var N=O(c);b=g(N,"H3",{class:!0,"data-svelte-h":!0}),B(b)!=="svelte-157nezi"&&(b.textContent=A),D=C(N),h=g(N,"DIV",{class:!0,"data-svelte-h":!0}),B(h)!=="svelte-fyrzux"&&(h.innerHTML=j),F=C(N),d=g(N,"DIV",{class:!0});var Y=O(d);ne(L.$$.fragment,Y),Y.forEach(v),N.forEach(v),w.forEach(v),k=C(l),T=g(l,"DIV",{class:!0,"data-svelte-h":!0}),B(T)!=="svelte-n4rwsa"&&(T.innerHTML=y),e=C(l),ne(r.$$.fragment,l),W=C(l),V=g(l,"DIV",{class:!0,"data-svelte-h":!0}),B(V)!=="svelte-1uic8sd"&&(V.innerHTML=G),this.h()},h(){i(t,"class","svelte-wrh2xk"),i(p,"class","article-grid svelte-wrh2xk"),i(H,"class","article-grid svelte-wrh2xk"),i(_,"class","article-flex article-flex--col svelte-wrh2xk"),i(b,"class","svelte-wrh2xk"),i(h,"class","article-paragraph svelte-wrh2xk"),i(d,"class","image-compare svelte-wrh2xk"),i(c,"class","article-grid svelte-wrh2xk"),i(o,"class","wrapper svelte-wrh2xk"),i(T,"class","wrapper svelte-wrh2xk"),i(V,"class","wrapper svelte-wrh2xk")},m(l,w){M(l,t,w),M(l,n,w),M(l,o,w),f(o,p),f(o,S),f(o,H),f(o,m),f(o,_),f(o,z),f(o,c),f(c,b),f(c,D),f(c,h),f(c,F),f(c,d),ie(L,d,null),M(l,k,w),M(l,T,w),M(l,e,w),ie(r,l,w),M(l,W,w),M(l,V,w),K=!0},p(l,[w]){const N={};w&8&&(N.$$scope={dirty:w,ctx:l}),L.$set(N)},i(l){K||(J(L.$$.fragment,l),J(r.$$.fragment,l),K=!0)},o(l){Q(L.$$.fragment,l),Q(r.$$.fragment,l),K=!1},d(l){l&&(v(t),v(n),v(o),v(k),v(T),v(e),v(W),v(V)),oe(L),oe(r,l)}}}function Le(s){function t(o){return o.startsWith("http")?o:`${U}${o}`}const a=[{title:"Kroger",role:"Product Designer",description:"Lead product designer for Kroger’s Fresh Departments. I was responsible for a web portal and Android application that helped department leaders and associates better account for production amounts in the bakeries, delis and butchers enterprise wide.",link:"/case-study/kroger",heroImg:t("/assets/scenery/mountain-lake.png"),productImg:t("/assets/productImages/kroger/imgBakery.png"),altText:"Mountain view from the slopes of Humboldt in Colorado"}];return[t,a,o=>({...o,link:t(o.link)})]}class Se extends pe{constructor(t){super(),ue(this,t,Le,Ce,de,{})}}export{Se as component};