import{s as xe,n as te,o as _e,e as Y,r as Te,h as Ce}from"../chunks/scheduler.bFUA4JZJ.js";import{S as be,i as Ie,e as m,t as Me,s as x,k as ce,c as f,a as P,b as Le,d as y,f as b,m as d,g as M,h,j as He,l as De,z as U,B as C,C as G,v as de,w as ue,x as pe,q as we,o as ge,y as ve}from"../chunks/index.AGRpPdDC.js";import{b as H}from"../chunks/paths.MygNB0FF.js";import{e as me,P as qe}from"../chunks/Pamphlet.js5NZ1Se.js";function fe(n,e,a){const p=n.slice();return p[11]=e[a],p[13]=a,p}function ke(n){let e,a,p,r,t,v,I;function k(){return n[9](n[13])}return{c(){e=m("div"),a=m("img"),t=x(),this.h()},l(o){e=f(o,"DIV",{class:!0});var l=P(e);a=f(l,"IMG",{src:!0,alt:!0,class:!0}),t=b(l),l.forEach(y),this.h()},h(){Y(a.src,p=n[11].thumbnail)||d(a,"src",p),d(a,"alt",r=n[11].alt),d(a,"class","thumbnail svelte-1n3877r"),d(e,"class","image-container")},m(o,l){M(o,e,l),h(e,a),h(e,t),v||(I=U(a,"click",k),v=!0)},p(o,l){n=o,l&1&&!Y(a.src,p=n[11].thumbnail)&&d(a,"src",p),l&1&&r!==(r=n[11].alt)&&d(a,"alt",r)},d(o){o&&y(e),v=!1,I()}}}function ye(n){let e,a,p="×",r,t,v="❮",I,k,o="❯",l,s,i,u,c,L,F;return{c(){e=m("div"),a=m("button"),a.textContent=p,r=x(),t=m("button"),t.textContent=v,I=x(),k=m("button"),k.textContent=o,l=x(),s=m("div"),i=m("img"),this.h()},l(_){e=f(_,"DIV",{class:!0});var T=P(e);a=f(T,"BUTTON",{class:!0,"data-svelte-h":!0}),C(a)!=="svelte-jiky8x"&&(a.textContent=p),r=b(T),t=f(T,"BUTTON",{class:!0,"data-svelte-h":!0}),C(t)!=="svelte-aqfkll"&&(t.textContent=v),I=b(T),k=f(T,"BUTTON",{class:!0,"data-svelte-h":!0}),C(k)!=="svelte-1hmu56q"&&(k.textContent=o),l=b(T),s=f(T,"DIV",{class:!0});var K=P(s);i=f(K,"IMG",{src:!0,alt:!0,class:!0}),K.forEach(y),T.forEach(y),this.h()},h(){d(a,"class","close svelte-1n3877r"),d(t,"class","nav prev svelte-1n3877r"),d(k,"class","nav next svelte-1n3877r"),Y(i.src,u=n[0][n[3]].full)||d(i,"src",u),d(i,"alt",c=n[0][n[3]].alt),d(i,"class","svelte-1n3877r"),d(s,"class","lightbox-content svelte-1n3877r"),d(e,"class","lightbox svelte-1n3877r")},m(_,T){M(_,e,T),h(e,a),h(e,r),h(e,t),h(e,I),h(e,k),h(e,l),h(e,s),h(s,i),L||(F=[U(a,"click",G(n[5])),U(t,"click",G(n[7])),U(k,"click",G(n[6])),U(s,"click",G(n[8])),U(e,"click",n[5])],L=!0)},p(_,T){T&9&&!Y(i.src,u=_[0][_[3]].full)&&d(i,"src",u),T&9&&c!==(c=_[0][_[3]].alt)&&d(i,"alt",c)},d(_){_&&y(e),L=!1,Te(F)}}}function Pe(n){let e,a,p,r,t,v,I,k=me(n[0]),o=[];for(let s=0;s<k.length;s+=1)o[s]=ke(fe(n,k,s));let l=n[2]&&ye(n);return{c(){e=m("div"),a=m("h3"),p=Me(n[1]),r=x(),t=m("div");for(let s=0;s<o.length;s+=1)o[s].c();v=x(),l&&l.c(),I=ce(),this.h()},l(s){e=f(s,"DIV",{class:!0});var i=P(e);a=f(i,"H3",{});var u=P(a);p=Le(u,n[1]),u.forEach(y),r=b(i),t=f(i,"DIV",{class:!0});var c=P(t);for(let L=0;L<o.length;L+=1)o[L].l(c);c.forEach(y),i.forEach(y),v=b(s),l&&l.l(s),I=ce(),this.h()},h(){d(t,"class","image-gallery svelte-1n3877r"),d(e,"class","image-wrapper autoShow svelte-1n3877r")},m(s,i){M(s,e,i),h(e,a),h(a,p),h(e,r),h(e,t);for(let u=0;u<o.length;u+=1)o[u]&&o[u].m(t,null);M(s,v,i),l&&l.m(s,i),M(s,I,i)},p(s,[i]){if(i&2&&He(p,s[1]),i&17){k=me(s[0]);let u;for(u=0;u<k.length;u+=1){const c=fe(s,k,u);o[u]?o[u].p(c,i):(o[u]=ke(c),o[u].c(),o[u].m(t,null))}for(;u<o.length;u+=1)o[u].d(1);o.length=k.length}s[2]?l?l.p(s,i):(l=ye(s),l.c(),l.m(I.parentNode,I)):l&&(l.d(1),l=null)},i:te,o:te,d(s){s&&(y(e),y(v),y(I)),De(o,s),l&&l.d(s)}}}function Se(n,e,a){let{images:p=[]}=e,{title:r}=e,t=!1,v=0;function I(c){a(3,v=c),a(2,t=!0)}function k(){a(2,t=!1)}function o(){a(3,v=(v+1)%p.length)}function l(){a(3,v=(v-1+p.length)%p.length)}function s(c){t&&(c.key==="ArrowRight"&&o(),c.key==="ArrowLeft"&&l(),c.key==="Escape"&&k())}_e(()=>(window.addEventListener("keydown",s),()=>{window.removeEventListener("keydown",s)}));function i(c){Ce.call(this,n,c)}const u=c=>I(c);return n.$$set=c=>{"images"in c&&a(0,p=c.images),"title"in c&&a(1,r=c.title)},[p,r,t,v,I,k,o,l,i,u]}class Ve extends be{constructor(e){super(),Ie(this,e,Se,Pe,xe,{images:0,title:1})}}function Ee(n){let e,a=`<section class="wrapper svelte-wrh2xk"><header><h4 class="svelte-wrh2xk">Kroger</h4> <sub>*Not all processes shown*</sub> <h1 class="svelte-wrh2xk">Launching an app enterprise wide for bakery associates</h1></header> <section class="nav-grid svelte-wrh2xk"><div class="nav-grid-col"><div class="content svelte-wrh2xk"><h3 class="svelte-wrh2xk">Role</h3> <p class="svelte-wrh2xk"><strong>As project designer</strong>, I was in charge of two
            products, Fresh Production and Fresh Production Portal. Fresh
            Production was our core Android application for all fresh
            departments within Kroger stores. Our first department was Bakery.</p> <p class="svelte-wrh2xk">Fresh Production Portal was the web app used by division leads to
            help with administrative tasks for each individual store.</p> <p class="svelte-wrh2xk">This article will focus mainly on the impact I had on bringing the
            Fresh Production app from five test stores, to all stores within the
            Kroger family.</p></div></div> <div class="nav-grid-col"><div class="content svelte-wrh2xk"><h3 class="svelte-wrh2xk">Process and Research</h3> <p class="svelte-wrh2xk"><strong>Understanding the job.</strong> I inherited the app from my colleague,
            therefore I had to quickly ramp up on what was being solved and what
            issues were currently hampering progress.</p> <p class="svelte-wrh2xk">To accomplish this I visited or called each test store to understand
            how they used or felt about the app in it&#39;s current state, met with
            our busines partners to determine goals and KPI&#39;s, and connected
            with my development team to start learning our sprint cycles and
            processes.</p> <p class="svelte-wrh2xk">I will go into more details in this article but at a glance, these
            are the high level research and design methodologies I implemented
            to start discovering and improving Fresh Production.</p> <ul class="svelte-wrh2xk"><li class="svelte-wrh2xk">In store interviews</li> <li class="svelte-wrh2xk">Discovery sessions</li> <li class="svelte-wrh2xk">Wireframe Interviews</li> <li class="svelte-wrh2xk">SME &amp; Business Interviews</li> <li class="svelte-wrh2xk">Design System</li> <li class="svelte-wrh2xk">Design Thinking</li></ul></div></div></section> <div class="article-text img-col svelte-wrh2xk"><div class="flex-img svelte-wrh2xk"><img style="max-width: 111px" src="${H}/assets/headshotSarah.png" alt="" class="svelte-wrh2xk"/> <p class="svelte-wrh2xk"><strong>Sarah Pruscia</strong> brought the project owner experience and
          stability the team needed to bring the app enterprise wide.</p> <img style="max-width: 111px" src="${H}/assets/headshotRyan.png" alt="" class="svelte-wrh2xk"/> <p class="svelte-wrh2xk"><strong>Ryan Ware</strong> knew Kroger&#39;s technical landscape inside and
          out, often leading to quicker and more quality solutions.</p> <img style="max-width: 111px" src="${H}/assets/headshotCasey.png" alt="" class="svelte-wrh2xk"/> <p class="svelte-wrh2xk"><strong>Casey Blakely.</strong> Senior Analyst and Designer.</p></div> <div class="col-cnt-2 svelte-wrh2xk"><p class="svelte-wrh2xk"><strong>Meet the Team.</strong> Sarah Pruscia (left) joined our team a
          few months after I myself. Before her, we were a team without a product
          owner. Myself (right) and the technical lead Ryan Ware (center), were wearing
          multiple hats, trying to keep the project moving forward. Once the three
          came together, progress of the app sped along.</p> <p class="svelte-wrh2xk">Over the coming months the three of us were able to lead our team and
          go from 5 test stores to launching enterprise wide in all bakeries.</p></div></div></section>`,p,r,t,v,I="The Problem",k,o,l=`<p class="svelte-wrh2xk"><strong class="svelte-wrh2xk">Updating Old Processes.</strong> In 2020, the world shut down for
        most people. Remote work became the new normal and software companies thrived.
        Kroger was in a unique situation, however. While the general operations employees
        could work their jobs remotely, their in-store associates were considered
        front line workers and had to go in to stores. This disrupted how much product
        designers were able to validate their solutions as access to their core users
        was limited by safety regulations. Such was the state of the product I inherited
        when joining Kroger in early 2021.</p> <p class="svelte-wrh2xk"><strong class="svelte-wrh2xk">Fresh Production</strong> was the app being created to replace the
        old hardware and process for bakery associates to plan the amount of stock
        they needed for a given day. The team had seen heavy turnover in key leadership
        positions leading to a slow progress due to lack of direction.</p>`,s,i,u,c,L=`<h3 class="svelte-wrh2xk">Level Setting</h3> <div class="article-paragraph svelte-wrh2xk"><p class="svelte-wrh2xk">I needed to get familiar with the current state of the app and how
        user&#39;s were reacting to it. After talking with my team and business
        parnters, I understood what we were trying to accomplish. Now I needed
        to know where we were in the solution and how our test stores were using
        the new process.</p> <p class="svelte-wrh2xk">We had five test stores using our app, one of which was local to me in
        Cincinnati, OH. The rest were out of state. So, I set up Teams calls to
        discuss certain flows of the app and get feedback.</p> <p class="svelte-wrh2xk">Talking to users is one of the best parts about being a Product
        Designer. You get to experience how that person interacts with your app,
        see their reactions and find out real problems they have that you can
        solve. In Kroger&#39;s case, I got to see how their bakery associates worked
        and what they had to do on a daily basis.</p> <p class="svelte-wrh2xk">My Teams interviews were limited in what I could do to interact with my
        users. Usually they joined by a store phone which meant they couldn&#39;t
        share any screens. So, I had them walk along with me in the app, asking
        questions related to the flow and expected data. This worked well enough
        to determine that while the flow made sense, the data didn&#39;t and they
        frequently felt they needed to make more.</p> <p class="svelte-wrh2xk">For the stores I was able to go in to, the Cincinnati store did not
        like, trust or use the app. The Michigan store used the app but didn&#39;t
        trust the data. I was beginning to see some repeating feedback. Users
        didn&#39;t want to change because the app wasn&#39;t accurate and ultimately
        wasn&#39;t predicting the needed items to make for the day. These interviews
        gave way to our first set of goals.</p></div>`,F,_,T=`<h3 class="svelte-wrh2xk">Success Metrics</h3> <div class="article-paragraph article-paragraph__img svelte-wrh2xk"><div><p class="svelte-wrh2xk"><strong class="svelte-wrh2xk">KPI&#39;s.</strong> There were multiple KPI’s (Key Performance Indicators)
          we established from quarter to quarter. In the beginning we had three key
          metrics to measure for our success</p> <ul class="svelte-wrh2xk"><li class="svelte-wrh2xk">Adoption from associates</li> <li class="svelte-wrh2xk">Shrink Reduction in the amount of product thrown away per store</li> <li class="svelte-wrh2xk">Financial Savings by stocking appropriate product amounts</li></ul></div> <img src="${H}/assets/productImages/kroger/fp_user.webp" alt="" class="article-paragraph-image svelte-wrh2xk"/></div>`,K,S,se=`<h3 class="svelte-wrh2xk">Current App</h3> <div class="article-paragraph svelte-wrh2xk"><p class="svelte-wrh2xk"><strong class="svelte-wrh2xk">Three Tasks.</strong> Bakery associates were tasked with three methods
        of stocking goods on the floor. Today&#39;s preparation, tomorrow&#39;s preparation
        and thawing freezer items. Each one would show what food they needed to prepare,
        and how much. The associate then needed to enter in the amount they actually
        prepared for the day. This entry data would then be used to help produce
        accurate numbers for the following day.</p></div> <img src="${H}/assets/productImages/kroger/fp_App.png" alt="" class="svelte-wrh2xk"/> <div class="article-paragraph svelte-wrh2xk"><p class="svelte-wrh2xk">It was important that the associate entered in the actual number of
        produced goods. We initially added a feature that asked the associate
        why they overproduced or underproduced. We found that associates rarely
        entered in meaningful data. When I interviewed some associates about
        this, they said they usually ignored this feature because it just slowed
        them down.</p> <p class="svelte-wrh2xk">Even with correct entries, our recommendated amount to make was
        consistently off, especially in Thaw &amp; Sell. We needed to figure out how
        to make that reccommendation more accurate.</p></div> <blockquote class="svelte-wrh2xk">They didn&#39;t trust the numbers and didn&#39;t want to get in trouble for under
      producing.</blockquote>`,X,V,ae=`<h3 class="svelte-wrh2xk">Solving Data</h3> <div class="article-paragraph svelte-wrh2xk"><p class="svelte-wrh2xk"><strong class="svelte-wrh2xk">Where does the data come from?</strong> Kroger has an entire separate
        company devoted to their data analysis and engineering. So we reached out
        to our partner to better understand how our numbers were so off.</p> <p class="svelte-wrh2xk">I can&#39;t devolve the exact algorithm for determining how much to produce
        for a given store, but we were able to determine the reason for why the
        data was off. We didn&#39;t currently have a way to know just what was in
        the freezer vs what was already on the sales floor. Those two areas were
        essentially the same number in our systems.</p> <p class="svelte-wrh2xk">Because of this we couldn&#39;t give an accurate number. However, we now had
        a problem we could solve.</p></div>`,J,E,re=`<h3 class="svelte-wrh2xk">Solving Thaw &amp; Sell</h3> <div class="article-paragraph article-paragraph__img svelte-wrh2xk"><div><p class="svelte-wrh2xk"><strong class="svelte-wrh2xk">Design Thinking.</strong> I ran a several workshops with the team
          to brainstorm solutions for the accuracy issue. I knew this was the bigger
          deterrent in terms of user adoption, and I believe great solutions come
          from the entire team, not just the product designer.</p> <p class="svelte-wrh2xk">Essentially I wanted the team to rapidly come up with ideas for
          solving how we can know salesfloor numbers vs overall numbers. We
          eventually landed on giving the associate a way to count a table after
          seeing one of our counterpart apps implement something similar.</p> <p class="svelte-wrh2xk">Now I needed to come up wit the design solution. I like to sketch out
          designs when I&#39;m starting off on a new screen. I find it helps me
          create ideas faster and not worry as much about the final details. One
          excercise I use is called Crazy 8&#39;s which lets me create eight screens
          in rapid succession.</p></div> <img src="${H}/assets/productImages/kroger/imgCrazy8.jpg" alt="" class="sm svelte-wrh2xk"/></div>`,Q,j,oe=`<h3 class="svelte-wrh2xk">Design Solution</h3> <div class="article-paragraph svelte-wrh2xk"><p class="svelte-wrh2xk"><strong class="svelte-wrh2xk">Rapid Prototyping and Testing.</strong> I wanted the associate to
        be able to scan a certain display table and then count what was on it. This
        required multiple steps and a flow that needed to be both easy and accurate.</p> <p class="svelte-wrh2xk">Before the scanning, which is an integrated aspect of the device used,
        could even happen, I needed to a way for the user to setup the table.
        Ideally this is a one time event that the associate had to perform,
        followed by an easy to edit flow in case they needed to change out what
        was on a table.</p> <p class="svelte-wrh2xk">Once a table was setup, the associate would then be asked to count that
        table. With the scanning capability of the device, I wanted the user to
        be able to quickly scan a barcode on the table that would pull up the
        correct table in the app, allowing them to make an accurate count. The
        barcode was another solution we saw from other associate app teams.</p> <p class="svelte-wrh2xk">The final piece was to make sure the associate could easily and quickly
        count that item. They have to perform multiple counts throughout their
        day for various apps, so we knew adding a new counting task wasn&#39;t going
        to be appreciated. I didn&#39;t see any other immediate choice given our
        data problems.</p></div> <img src="${H}/assets/productImages/kroger/fp_Count.png" alt="" class="svelte-wrh2xk"/> <div class="article-paragraph svelte-wrh2xk"><p class="svelte-wrh2xk">Above is an excerpt of the whole solution. The part shown is when the
        associate has already created some tables and is able to scan the
        barcode to access the counting flow.</p> <p class="svelte-wrh2xk">From the counting flow the can quickly see what products they have to
        count on that table before doing their production. Once all tables have
        been completely counted, they can then start their daily production.</p></div>`,Z,A,ne=`<h3 class="svelte-wrh2xk">The Testing</h3> <div class="article-paragraph svelte-wrh2xk"><p class="svelte-wrh2xk"><strong class="svelte-wrh2xk">Into the Stores.</strong> My process for testing was to wire up the
        mockups into InVision, do some basic interactions so the associate could
        tap through the flow, and pull it up on my phone to walk the associates through
        the new screens, asking questions along the way.</p> <p class="svelte-wrh2xk">I would give the associate a high level overview of what they were going
        to be seeing, with the problem we were hoping to solve, but largely let
        them interact with the prototype on their own and observe any struggles
        they encounter or any validations of the designs.</p> <p class="svelte-wrh2xk">Testing proved to be a little tricky to work through. They would notice
        things like wrong product imagery or incorrect product in the activity,
        which would distract them from what I was actually trying to test. They
        wouldn’t be sure what was tappable or not, a limitation of the
        prototyping tool and how I would not wire up the sections of the app I
        wasn’t trying to test.</p> <p class="svelte-wrh2xk">For the new counting feature, I tested in a few stores that weren’t
        familiar with the app to get a fresh impression, as well as another trip
        to Michigan to test with our highest usage store. Using the process I
        mentioned above, I collected the feedback from the associates. Most of
        the non-familiar associates were comfortable with the process and
        understood the need and the outcome. For our Michigan store, they were
        not excited about having to count more, but said the process seemed
        quick and easy enough to complete. We found that giving them control of
        their table and products and that seeing the count they performed
        directly impacted the amount they produced, greatly increased the trust
        in the app.</p> <blockquote class="svelte-wrh2xk">They would notice things like wrong product imagery or incorrect product
        in the activity, which would distract them from what I was actually
        trying to test.</blockquote> <p class="svelte-wrh2xk">Once I had gathered the feedback and made any tweaks necessary, the team
        worked on developing this new process. Once development was finished we
        did another round of testing with the actual device in our test stores.
        This allowed us to continually fix issues, create new enhancements, and
        ultimately push this app out to all bakery departments across the
        country.</p></div>`,ee,W,le=`<h3 class="svelte-wrh2xk">Deploy the App</h3> <div class="article-paragraph article-paragraph__img svelte-wrh2xk"><div><p class="svelte-wrh2xk"><strong class="svelte-wrh2xk">Starting to Trust.</strong> This new solution took months to work
          out and develop. I spent countless hours with my product owner in stores
          and in meetings with business partners, making sure this solution solved
          the needs of the user and the business. We were confident it did. The feedback
          was positive on both sides.</p> <p class="svelte-wrh2xk">We launched the app enterprise wide. We created training documents in
          the app as well as printable guides for stores. In tandem with our UI
          solution, we also spent time with our data partners cleaning and
          fixing our data.</p> <p class="svelte-wrh2xk">The feedback we were getting from leadership and the stores I was able
          to talk with was positive. After the one-time setup of tables,
          associates found that counting the items was quick due to being able
          to scan the barcode as well as count on the list of items.</p> <p class="svelte-wrh2xk">Through Google Analytics, we could see that daily usage of the app and
          daily completion of the tasks were on the rise. Associates were using
          the app to complete their work for the day.</p></div> <img src="${H}/assets/productImages/kroger/fp_userCounting.webp" alt="" class="article-paragraph-image svelte-wrh2xk"/></div>`,R,D,ie='<div class="article-flex article-flex--col svelte-wrh2xk"><h3 class="svelte-wrh2xk">Continue Reading</h3></div>',$,O,N,q,he=`<div class="btn-container svelte-wrh2xk"><button><a href="${H}/">Return Home</a></button></div>`,z;return i=new Ve({props:{title:"Old Method of tracking production",images:n[1]}}),O=new qe({props:{pamphlets:n[2].map(n[3])}}),{c(){e=m("nav"),e.innerHTML=a,p=x(),r=m("div"),t=m("div"),v=m("h3"),v.textContent=I,k=x(),o=m("div"),o.innerHTML=l,s=x(),de(i.$$.fragment),u=x(),c=m("div"),c.innerHTML=L,F=x(),_=m("div"),_.innerHTML=T,K=x(),S=m("div"),S.innerHTML=se,X=x(),V=m("div"),V.innerHTML=ae,J=x(),E=m("div"),E.innerHTML=re,Q=x(),j=m("div"),j.innerHTML=oe,Z=x(),A=m("div"),A.innerHTML=ne,ee=x(),W=m("div"),W.innerHTML=le,R=x(),D=m("div"),D.innerHTML=ie,$=x(),de(O.$$.fragment),N=x(),q=m("div"),q.innerHTML=he,this.h()},l(w){e=f(w,"NAV",{class:!0,"data-svelte-h":!0}),C(e)!=="svelte-1a9ss2a"&&(e.innerHTML=a),p=b(w),r=f(w,"DIV",{class:!0});var g=P(r);t=f(g,"DIV",{class:!0});var B=P(t);v=f(B,"H3",{class:!0,"data-svelte-h":!0}),C(v)!=="svelte-51pnmu"&&(v.textContent=I),k=b(B),o=f(B,"DIV",{class:!0,"data-svelte-h":!0}),C(o)!=="svelte-nu1mwh"&&(o.innerHTML=l),s=b(B),ue(i.$$.fragment,B),B.forEach(y),u=b(g),c=f(g,"DIV",{class:!0,"data-svelte-h":!0}),C(c)!=="svelte-1ijxrg8"&&(c.innerHTML=L),F=b(g),_=f(g,"DIV",{class:!0,"data-svelte-h":!0}),C(_)!=="svelte-1br85a9"&&(_.innerHTML=T),K=b(g),S=f(g,"DIV",{class:!0,"data-svelte-h":!0}),C(S)!=="svelte-d370r7"&&(S.innerHTML=se),X=b(g),V=f(g,"DIV",{class:!0,"data-svelte-h":!0}),C(V)!=="svelte-fpklhj"&&(V.innerHTML=ae),J=b(g),E=f(g,"DIV",{class:!0,"data-svelte-h":!0}),C(E)!=="svelte-yudkja"&&(E.innerHTML=re),Q=b(g),j=f(g,"DIV",{class:!0,"data-svelte-h":!0}),C(j)!=="svelte-vdyg46"&&(j.innerHTML=oe),Z=b(g),A=f(g,"DIV",{class:!0,"data-svelte-h":!0}),C(A)!=="svelte-1x6dcfy"&&(A.innerHTML=ne),ee=b(g),W=f(g,"DIV",{class:!0,"data-svelte-h":!0}),C(W)!=="svelte-axgj2e"&&(W.innerHTML=le),g.forEach(y),R=b(w),D=f(w,"DIV",{class:!0,"data-svelte-h":!0}),C(D)!=="svelte-n4rwsa"&&(D.innerHTML=ie),$=b(w),ue(O.$$.fragment,w),N=b(w),q=f(w,"DIV",{class:!0,"data-svelte-h":!0}),C(q)!=="svelte-1uic8sd"&&(q.innerHTML=he),this.h()},h(){d(e,"class","svelte-wrh2xk"),d(v,"class","svelte-wrh2xk"),d(o,"class","article-paragraph svelte-wrh2xk"),d(t,"class","article-grid svelte-wrh2xk"),d(c,"class","article-flex article-flex--col svelte-wrh2xk"),d(_,"class","article-grid svelte-wrh2xk"),d(S,"class","article-flex article-flex--col svelte-wrh2xk"),d(V,"class","article-grid svelte-wrh2xk"),d(E,"class","article-grid svelte-wrh2xk"),d(j,"class","article-flex article-flex--col svelte-wrh2xk"),d(A,"class","article-grid svelte-wrh2xk"),d(W,"class","article-grid svelte-wrh2xk"),d(r,"class","wrapper svelte-wrh2xk"),d(D,"class","wrapper svelte-wrh2xk"),d(q,"class","wrapper svelte-wrh2xk")},m(w,g){M(w,e,g),M(w,p,g),M(w,r,g),h(r,t),h(t,v),h(t,k),h(t,o),h(t,s),pe(i,t,null),h(r,u),h(r,c),h(r,F),h(r,_),h(r,K),h(r,S),h(r,X),h(r,V),h(r,J),h(r,E),h(r,Q),h(r,j),h(r,Z),h(r,A),h(r,ee),h(r,W),M(w,R,g),M(w,D,g),M(w,$,g),pe(O,w,g),M(w,N,g),M(w,q,g),z=!0},p:te,i(w){z||(we(i.$$.fragment,w),we(O.$$.fragment,w),z=!0)},o(w){ge(i.$$.fragment,w),ge(O.$$.fragment,w),z=!1},d(w){w&&(y(e),y(p),y(r),y(R),y(D),y($),y(N),y(q)),ve(i),ve(O,w)}}}function je(n){function e(t){return t.startsWith("http")?t:`${H}${t}`}const a=[{thumbnail:e("/assets/productImages/kroger/cap_1.png"),full:e("/assets/productImages/kroger/cap_1.png"),alt:"Example image 1 of the old way of computer assisted production"},{thumbnail:e("/assets/productImages/kroger/cap_2.png"),full:e("/assets/productImages/kroger/cap_2.png"),alt:"Example image 2 of the old way of computer assisted production"},{thumbnail:e("/assets/productImages/kroger/cap_3.png"),full:e("/assets/productImages/kroger/cap_3.png"),alt:"Example image 3 of the old way of computer assisted production"},{thumbnail:e("/assets/productImages/kroger/cap_4.png"),full:e("/assets/productImages/kroger/cap_4.png"),alt:"Example image 4 of the old way of computer assisted production"}],p=[{title:"CLC Lodging",role:"Product Designer & Business Analyst",description:"Lead product designer for CLC Lodging's request for UX improvements to their mobile application. Heuristic Analysis revealed a need for more recognizable UI patterns and user flows. I led a small team in gathering requirements in order to enhance the application's user experience as well as update it's UI to a more modern feel.",link:"/case-study/clc",heroImg:e("/assets/scenery/river-rapids.png"),productImg:e("/assets/productImages/clc/figure2.png"),altText:"A flowing river cascading over rocks from Yosemite National Park"}];return[e,a,p,t=>({...t,link:e(t.link)})]}class Ke extends be{constructor(e){super(),Ie(this,e,je,Ee,xe,{})}}export{Ke as component};
