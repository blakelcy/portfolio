<script>
  import { base } from "$app/paths";
  import ImageGallery from "$lib/components/ImageGallery.svelte"; // Import the Gallery component
  import Pamphlet from "$lib/components/Pamphlet.svelte";

  const images = [
    {
      thumbnail: "/assets/productImages/kroger/cap_1.png",
      full: "/assets/productImages/kroger/cap_1.png",
      alt: "Description of image 1",
    },
    {
      thumbnail: "/assets/productImages/kroger/cap_2.png",
      full: "/assets/productImages/kroger/cap_2.png",
      alt: "Description of image 2",
    },
    {
      thumbnail: "/assets/productImages/kroger/cap_3.png",
      full: "/assets/productImages/kroger/cap_3.png",
      alt: "Description of image 1",
    },
    {
      thumbnail: "/assets/productImages/kroger/cap_4.png",
      full: "/assets/productImages/kroger/cap_4.png",
      alt: "Description of image 2",
    },
    // Add more images as needed
  ];

  const pamphlets = [
    {
      title: "CLC Lodging",
      role: "Product Designer & Business Analyst",
      description:
        "Lead product designer for CLC Lodging's request for UX improvements to their mobile application. Heuristic Analysis revealed a need for more recognizable UI patterns and user flows. I led a small team in gathering requirements in order to enhance the application's user experience as well as update it's UI to a more modern feel.",
      link: "/case-study/clc",
      heroImg: "/assets/scenery/river-rapids.png",
      productImg: "/assets/productImages/clc/figure2.png",
      altText:
        "A flowing river cascading over rocks from Yosemite National Park",
    },
  ];

  // Function to prepend base to internal links
  function getFullPath(link) {
    if (link.startsWith("http")) {
      return link; // External link, return as is
    }
    return `${base}${link}`; // Internal link, prepend base
  }
</script>

<nav>
  <section class="wrapper">
    <header>
      <h4>Kroger</h4>
      <sub>*Not all processes shown*</sub>
      <h1>Launching an app enterprise wide for bakery associates</h1>
    </header>
    <section class="nav-grid">
      <div class="nav-grid-col">
        <div class="content">
          <h3>Role</h3>
          <p>
            <strong>As project designer</strong>, I was in charge of two
            products, Fresh Production and Fresh Production Portal. Fresh
            Production was our core Android application for all fresh
            departments within Kroger stores. Our first department was Bakery.
          </p>
          <p>
            Fresh Production Portal was the web app used by division leads to
            help with administrative tasks for each individual store.
          </p>
          <p>
            This article will focus mainly on the impact I had on bringing the
            Fresh Production app from five test stores, to all stores within the
            Kroger family.
          </p>
        </div>
      </div>
      <div class="nav-grid-col">
        <div class="content">
          <h3>Process and Research</h3>
          <p>
            <strong>Understanding the job.</strong> I inherited the app from my colleague,
            therefore I had to quickly ramp up on what was being solved and what
            issues were currently hampering progress.
          </p>
          <p>
            To accomplish this I visited or called each test store to understand
            how they used or felt about the app in it's current state, met with
            our busines partners to determine goals and KPI's, and connected
            with my development team to start learning our sprint cycles and
            processes.
          </p>
          <p>
            I will go into more details in this article but at a glance, these
            are the high level research and design methodologies I implemented
            to start discovering and improving Fresh Production.
          </p>
          <ul>
            <li>In store interviews</li>
            <li>Discovery sessions</li>
            <li>Wireframe Interviews</li>
            <li>SME & Business Interviews</li>
            <li>Design System</li>
            <li>Design Thinking</li>
          </ul>
        </div>
      </div>
    </section>
    <div class="article-text img-col">
      <div class="flex-img">
        <img
          style="max-width: 111px"
          src="{base}/assets/headshotSarah.png"
          alt=""
        />
        <p>
          <strong>Sarah Pruscia</strong> brought the project owner experience and
          stability the team needed to bring the app enterprise wide.
        </p>
        <img
          style="max-width: 111px"
          src="{base}/assets/headshotRyan.png"
          alt=""
        />
        <p>
          <strong>Ryan Ware</strong> knew Kroger's technical landscape inside and
          out, often leading to quicker and more quality solutions.
        </p>
        <img
          style="max-width: 111px"
          src="{base}/assets/headshotCasey.png"
          alt=""
        />
        <p>
          <strong>Casey Blakely.</strong> Senior Analyst and Designer.
        </p>
      </div>
      <div class="col-cnt-2">
        <p>
          <strong>Meet the Team.</strong> Sarah Pruscia (left) joined our team a
          few months after I myself. Before her, we were a team without a product
          owner. Myself (right) and the technical lead Ryan Ware (center), were wearing
          multiple hats, trying to keep the project moving forward. Once the three
          came together, progress of the app sped along.
        </p>

        <p>
          Over the coming months the three of us were able to lead our team and
          go from 5 test stores to launching enterprise wide in all bakeries.
        </p>
      </div>
    </div>
  </section>
</nav>

<div class="wrapper">
  <div class="article-grid">
    <h3>The Problem</h3>
    <div class="article-paragraph">
      <p>
        <strong>Updating Old Processes.</strong> In 2020, the world shut down for
        most people. Remote work became the new normal and software companies thrived.
        Kroger was in a unique situation, however. While the general operations employees
        could work their jobs remotely, their in-store associates were considered
        front line workers and had to go in to stores. This disrupted how much product
        designers were able to validate their solutions as access to their core users
        was limited by safety regulations. Such was the state of the product I inherited
        when joining Kroger in early 2021.
      </p>
      <p>
        <strong>Fresh Production</strong> was the app being created to replace the
        old hardware and process for bakery associates to plan the amount of stock
        they needed for a given day. The team had seen heavy turnover in key leadership
        positions leading to a slow progress due to lack of direction.
      </p>
    </div>

    <ImageGallery title="Old Method of tracking production" {images} />
  </div>
  <div class="article-flex article-flex--col">
    <h3>Level Setting</h3>
    <div class="article-paragraph">
      <p>
        I needed to get familiar with the current state of the app and how
        user's were reacting to it. After talking with my team and business
        parnters, I understood what we were trying to accomplish. Now I needed
        to know where we were in the solution and how our test stores were using
        the new process.
      </p>
      <p>
        We had five test stores using our app, one of which was local to me in
        Cincinnati, OH. The rest were out of state. So, I set up Teams calls to
        discuss certain flows of the app and get feedback.
      </p>
      <p>
        Talking to users is one of the best parts about being a Product
        Designer. You get to experience how that person interacts with your app,
        see their reactions and find out real problems they have that you can
        solve. In Kroger's case, I got to see how their bakery associates worked
        and what they had to do on a daily basis.
      </p>
      <p>
        My Teams interviews were limited in what I could do to interact with my
        users. Usually they joined by a store phone which meant they couldn't
        share any screens. So, I had them walk along with me in the app, asking
        questions related to the flow and expected data. This worked well enough
        to determine that while the flow made sense, the data didn't and they
        frequently felt they needed to make more.
      </p>
      <p>
        For the stores I was able to go in to, the Cincinnati store did not
        like, trust or use the app. The Michigan store used the app but didn't
        trust the data. I was beginning to see some repeating feedback. Users
        didn't want to change because the app wasn't accurate and ultimately
        wasn't predicting the needed items to make for the day. These interviews
        gave way to our first set of goals.
      </p>
    </div>
  </div>
  <div class="article-grid">
    <h3>Success Metrics</h3>
    <div class="article-paragraph article-paragraph__img">
      <div>
        <p>
          <strong>KPI's.</strong> There were multiple KPI’s (Key Performance Indicators)
          we established from quarter to quarter. In the beginning we had three key
          metrics to measure for our success
        </p>
        <ul>
          <li>Adoption from associates</li>
          <li>
            Shrink Reduction in the amount of product thrown away per store
          </li>
          <li>Financial Savings by stocking appropriate product amounts</li>
        </ul>
      </div>

      <img
        src="{base}/assets/productImages/kroger/fp_user.webp"
        alt=""
        class="article-paragraph-image"
      />
    </div>
  </div>
  <div class="article-flex article-flex--col">
    <h3>Current App</h3>
    <div class="article-paragraph">
      <p>
        <strong>Three Tasks.</strong> Bakery associates were tasked with three methods
        of stocking goods on the floor. Today's preparation, tomorrow's preparation
        and thawing freezer items. Each one would show what food they needed to prepare,
        and how much. The associate then needed to enter in the amount they actually
        prepared for the day. This entry data would then be used to help produce
        accurate numbers for the following day.
      </p>
    </div>
    <img src="{base}/assets/productImages/kroger/fp_App.png" alt="" />
    <div class="article-paragraph">
      <p>
        It was important that the associate entered in the actual number of
        produced goods. We initially added a feature that asked the associate
        why they overproduced or underproduced. We found that associates rarely
        entered in meaningful data. When I interviewed some associates about
        this, they said they usually ignored this feature because it just slowed
        them down.
      </p>
      <p>
        Even with correct entries, our recommendated amount to make was
        consistently off, especially in Thaw & Sell. We needed to figure out how
        to make that reccommendation more accurate.
      </p>
    </div>
    <blockquote>
      They didn't trust the numbers and didn't want to get in trouble for under
      producing.
    </blockquote>
  </div>
  <div class="article-grid">
    <h3>Solving Data</h3>
    <div class="article-paragraph">
      <p>
        <strong>Where does the data come from?</strong> Kroger has an entire separate
        company devoted to their data analysis and engineering. So we reached out
        to our partner to better understand how our numbers were so off.
      </p>
      <p>
        I can't devolve the exact algorithm for determining how much to produce
        for a given store, but we were able to determine the reason for why the
        data was off. We didn't currently have a way to know just what was in
        the freezer vs what was already on the sales floor. Those two areas were
        essentially the same number in our systems.
      </p>
      <p>
        Because of this we couldn't give an accurate number. However, we now had
        a problem we could solve.
      </p>
    </div>
  </div>
  <div class="article-grid">
    <h3>Solving Thaw & Sell</h3>
    <div class="article-paragraph article-paragraph__img">
      <div>
        <p>
          <strong>Design Thinking.</strong> I ran a several workshops with the team
          to brainstorm solutions for the accuracy issue. I knew this was the bigger
          deterrent in terms of user adoption, and I believe great solutions come
          from the entire team, not just the product designer.
        </p>
        <p>
          Essentially I wanted the team to rapidly come up with ideas for
          solving how we can know salesfloor numbers vs overall numbers. We
          eventually landed on giving the associate a way to count a table after
          seeing one of our counterpart apps implement something similar.
        </p>
        <p>
          Now I needed to come up wit the design solution. I like to sketch out
          designs when I'm starting off on a new screen. I find it helps me
          create ideas faster and not worry as much about the final details. One
          excercise I use is called Crazy 8's which lets me create eight screens
          in rapid succession.
        </p>
      </div>
      <img
        src="{base}/assets/productImages/kroger/imgCrazy8.jpg"
        alt=""
        class="sm"
      />
    </div>
  </div>
  <div class="article-flex article-flex--col">
    <h3>Design Solution</h3>
    <div class="article-paragraph">
      <p>
        <strong>Rapid Prototyping and Testing.</strong> I wanted the associate to
        be able to scan a certain display table and then count what was on it. This
        required multiple steps and a flow that needed to be both easy and accurate.
      </p>
      <p>
        Before the scanning, which is an integrated aspect of the device used,
        could even happen, I needed to a way for the user to setup the table.
        Ideally this is a one time event that the associate had to perform,
        followed by an easy to edit flow in case they needed to change out what
        was on a table.
      </p>
      <p>
        Once a table was setup, the associate would then be asked to count that
        table. With the scanning capability of the device, I wanted the user to
        be able to quickly scan a barcode on the table that would pull up the
        correct table in the app, allowing them to make an accurate count. The
        barcode was another solution we saw from other associate app teams.
      </p>
      <p>
        The final piece was to make sure the associate could easily and quickly
        count that item. They have to perform multiple counts throughout their
        day for various apps, so we knew adding a new counting task wasn't going
        to be appreciated. I didn't see any other immediate choice given our
        data problems.
      </p>
    </div>
    <img src="{base}/assets/productImages/kroger/fp_Count.png" alt="" />
    <div class="article-paragraph">
      <p>
        Above is an excerpt of the whole solution. The part shown is when the
        associate has already created some tables and is able to scan the
        barcode to access the counting flow.
      </p>
      <p>
        From the counting flow the can quickly see what products they have to
        count on that table before doing their production. Once all tables have
        been completely counted, they can then start their daily production.
      </p>
    </div>
  </div>
  <div class="article-grid">
    <h3>The Testing</h3>
    <div class="article-paragraph">
      <p>
        <strong>Into the Stores.</strong> My process for testing was to wire up the
        mockups into InVision, do some basic interactions so the associate could
        tap through the flow, and pull it up on my phone to walk the associates through
        the new screens, asking questions along the way.
      </p>
      <p>
        I would give the associate a high level overview of what they were going
        to be seeing, with the problem we were hoping to solve, but largely let
        them interact with the prototype on their own and observe any struggles
        they encounter or any validations of the designs.
      </p>
      <p>
        Testing proved to be a little tricky to work through. They would notice
        things like wrong product imagery or incorrect product in the activity,
        which would distract them from what I was actually trying to test. They
        wouldn’t be sure what was tappable or not, a limitation of the
        prototyping tool and how I would not wire up the sections of the app I
        wasn’t trying to test.
      </p>

      <p>
        For the new counting feature, I tested in a few stores that weren’t
        familiar with the app to get a fresh impression, as well as another trip
        to Michigan to test with our highest usage store. Using the process I
        mentioned above, I collected the feedback from the associates. Most of
        the non-familiar associates were comfortable with the process and
        understood the need and the outcome. For our Michigan store, they were
        not excited about having to count more, but said the process seemed
        quick and easy enough to complete. We found that giving them control of
        their table and products and that seeing the count they performed
        directly impacted the amount they produced, greatly increased the trust
        in the app.
      </p>

      <blockquote>
        They would notice things like wrong product imagery or incorrect product
        in the activity, which would distract them from what I was actually
        trying to test.
      </blockquote>
      <p>
        Once I had gathered the feedback and made any tweaks necessary, the team
        worked on developing this new process. Once development was finished we
        did another round of testing with the actual device in our test stores.
        This allowed us to continually fix issues, create new enhancements, and
        ultimately push this app out to all bakery departments across the
        country.
      </p>
    </div>
  </div>
  <div class="article-grid">
    <h3>Deploy the App</h3>
    <div class="article-paragraph article-paragraph__img">
      <div>
        <p>
          <strong>Starting to Trust.</strong> This new solution took months to work
          out and develop. I spent countless hours with my product owner in stores
          and in meetings with business partners, making sure this solution solved
          the needs of the user and the business. We were confident it did. The feedback
          was positive on both sides.
        </p>
        <p>
          We launched the app enterprise wide. We created training documents in
          the app as well as printable guides for stores. In tandem with our UI
          solution, we also spent time with our data partners cleaning and
          fixing our data.
        </p>
        <p>
          The feedback we were getting from leadership and the stores I was able
          to talk with was positive. After the one-time setup of tables,
          associates found that counting the items was quick due to being able
          to scan the barcode as well as count on the list of items.
        </p>
        <p>
          Through Google Analytics, we could see that daily usage of the app and
          daily completion of the tasks were on the rise. Associates were using
          the app to complete their work for the day.
        </p>
      </div>

      <img
        src="{base}/assets/productImages/kroger/fp_userCounting.webp"
        alt=""
        class="article-paragraph-image"
      />
    </div>
  </div>
</div>
<div class="wrapper">
  <div class="article-flex article-flex--col">
    <h3>Continue Reading</h3>
  </div>
</div>
<Pamphlet
  pamphlets={pamphlets.map((p) => ({ ...p, link: getFullPath(p.link) }))}
/>

<div class="wrapper">
  <div class="btn-container">
    <button><a href="{base}/">Return Home</a></button>
  </div>
</div>

<style lang="scss">
  nav {
    background-color: black;
    color: white;
  }
  .nav-grid {
    display: grid;
    grid-auto-flow: row;
    gap: 1rem;

    @media screen and (min-width: 960px) {
      grid-auto-flow: column;
    }
  }

  .content {
    max-width: 75ch;
    margin-bottom: 3rem;
  }

  ul {
    columns: 2;
    -webkit-columns: 2;
    -moz-columns: 2;
  }
  li {
    padding: 2px;
  }
  .wrapper {
    padding: 1rem;
    max-width: 1080px;
    margin: 0 auto;
    padding: 2.5rem;
  }

  h1 {
    font-size: 3rem;
    font-family: "CustomFont";
    text-transform: capitalize;
    margin-bottom: 4rem;

    @media screen and (min-width: 960px) {
      font-size: 4rem;
    }
  }

  h3 {
    font-size: 1.125rem;
    font-weight: 600;
    margin-bottom: 0.75rem;
  }
  h4 {
    font-size: 1rem;
    color: #cfcfcf;
    font-weight: 600;
  }
  .article-grid {
    display: grid;
    grid-template-columns: 1fr;
    gap: 0.75rem;
    margin-bottom: 6rem;

    @media screen and (min-width: 960px) {
      grid-template-columns: 12ch 1fr;
    }
  }

  .article-grid h3,
  .article-flex h3 {
    font-size: 1.125rem;
    font-weight: 600;
    line-height: 100%;
    letter-spacing: 1px;
    text-transform: uppercase;
    font-family: "CustomFont", sans-serif;
    @media screen and (min-width: 960px) {
      text-align: right;
    }
  }
  .article-grid h3 {
    text-align: center;
    padding-top: 2rem;
  }

  .article-paragraph {
    columns: 1;
    margin-bottom: 4rem;
    @media screen and (min-width: 960px) {
      columns: 2;
    }
  }

  .article-paragraph.article-paragraph__img {
    display: grid;
    grid-template-columns: 1fr;
    gap: 0.75rem;
    margin-bottom: 0;

    @media screen and (min-width: 960px) {
      grid-template-columns: repeat(2, 1fr);
    }
  }

  .article-paragraph strong {
    padding-left: 32px;
  }

  .article-paragraph p {
    font-size: 1rem;
    line-height: 1.7;
  }

  .article-paragraph ul {
    columns: 1;
  }

  .article-paragraph-image {
    border: 2px solid #171513;
    border-radius: 0.5rem;
  }

  .article-grid img,
  .article-flex img {
    mix-blend-mode: darken;
  }

  .article-grid img {
    grid-column: 1 / -1;

    @media screen and (min-width: 960px) {
      grid-column: 2 / -1;
    }
  }

  .article-flex {
    display: flex;
    margin-bottom: 6rem;
  }
  .article-flex--col {
    flex-direction: column;
    align-items: center;
  }

  .article-flex--col img {
    margin-bottom: 3rem;
  }
  .article-flex h3 {
    padding-bottom: 2rem;
  }
  .article-text {
    display: flex;
    gap: 0.5rem;
    @media screen and (min-width: 960px) {
      display: flex;
      gap: 0.5rem;
    }
  }

  .img-col {
    flex-direction: column;
    grid-column: span 2;
    @media screen and (min-width: 960px) {
      flex-direction: column;
      grid-column: span 2;
    }
  }

  p {
    margin-bottom: 0.75rem;
  }

  .col-cnt-2 {
    @media screen and (min-width: 960px) {
      column-count: 2;
    }
  }
  .col-cnt-3 {
    @media screen and (min-width: 960px) {
      column-count: 3;
    }
  }

  .flex-col {
    flex-direction: column;
  }

  .flex-img {
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 1rem;
    justify-content: start;
    margin-bottom: 0.75rem;

    & > p {
      margin-left: 0.5rem;
      font-size: 0.625rem;
      max-width: 50%;
    }

    @media screen and (min-width: 960px) {
      justify-content: start;
      flex-direction: row;
    }
  }

  img {
    width: 100%;
    height: auto;
  }
  .image-compare {
    grid-column: 1 / -1;
  }

  blockquote {
    background-color: #6f4930;
    color: white;
    text-decoration: none;
    font-style: italic;
    padding: 1.5rem;
    margin-bottom: 0.5rem;
    border-radius: 1rem;
  }
  .btn-container {
    display: flex;
    flex-direction: column;
    justify-content: center;
    gap: 1rem;

    @media screen and (min-width: 960px) {
      flex-direction: row;
      margin: 0 auto;
    }

    & button {
      background-color: #6f4930;
      border: none;
      border-radius: 0.75rem;

      & a {
        display: block;
        color: white;
        text-decoration: none;
        padding: 0.75rem 1rem;
      }
    }
  }
</style>
