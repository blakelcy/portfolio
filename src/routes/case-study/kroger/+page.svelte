<script>
  import { base } from "$app/paths";
  import ImageGallery from "$lib/components/ImageGallery.svelte"; // Import the Gallery component

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
            Fresh Production app from 5 test stores, to all stores within the
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
          owner. Myself and the technical lead Ryan Ware (right), were wearing multiple
          hats, trying to keep the project moving forward. Once the three came together,
          progress of the app sped along.
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
        Kroger was in a unique situation however. While the general operations employees
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
        To help them achieve this, I wanted to conduct stakeholder interviews as
        well as perform a heuristic analysis on their current app.
      </p>
      <p>
        After gathering what information and direction I could from those
        exercises I would create some concept mockups for some of their main
        flows.
      </p>
      <p>
        With these changes, I hoped to achieve a more thoughtful UI with an
        enhanced user experience for their userbase so that they would be able
        to easily book lodging while on the road and CLC would see an
        improvement to their ratings.
      </p>
    </div>
  </div>
</div>
<div class="wrapper">
  <div class="section-title">
    <h3>App Breakdown</h3>
    <div class="paragraph">
      <p>
        <strong>The Three Tasks.</strong> Bakery associates were tasked with three
        methods of stocking goods on the floor. Today's preparation, tomorrow's preparation
        and thawing freezer items. Each one would show what food they needed to prepare,
        and how much. The associate then needed to enter in the amount they actually
        prepared for the day.
      </p>
      <img
        class="center"
        src="{base}/assets/productImages/kroger/imgBakery.png"
        style="max-width: 300px;"
        alt=""
      />
      <figure class="img-figure-text center">
        Simplified recreation of Fresh Production.
      </figure>
    </div>
  </div>
  <div class="article-text">
    <div class="paragraph">
      <p>
        Often the associates would over-produce, claiming that the
        recommendation was inaccurate. To their credit, the app could not
        account for was local events that may drive production needs up.
      </p>
      <p>
        <strong>Prep for Today.</strong> Associates in the Bakery baked a lot of
        fresh goods daily. Those goods, prepped the day before in the
        <strong>Prep for Tomorrow</strong> task flow, were packaged and placed on
        the store floor. This was able to be accurately accounted for because the
        product prepped had a different ID than the product created. We knew how
        much quantity was in the store and from that could calculate usage.
      </p>
      <p>
        <strong>Thaw & Sell.</strong> Because thawed items had the same ID both in
        the freezer and on the store floor, it was very difficult to know accurate
        quantities. We could tell when an item was sold, but we had no idea how much
        was on the floor at any given time. The only measure we had was how much
        the associate said they "produced" that day. This contributed to further
        inaccuracies in what to produce on a given day. Our data was not correct.
      </p>
    </div>
  </div>
</div>

<div class="wrapper">
  <div class="section-title">
    <h3>Design Solution</h3>
    <div class="section-text">
      <p>
        <strong>Design Thinking.</strong> After talking and visiting with the associates
        in the store, it was now time to solve any issues we uncovered and were priority
        for the team. We first would add a story to our backlog, assigned to me so
        that I can start mocking out a potential solution. Since we had such a robust
        Design System in place, most of my “low fidelity” wireframes were more in
        the “high fidelity” realm. I would often just “sketch” in Sketch, our chosen
        design tool. For more complex issues, or for newer, non-design system components,
        I would revert to pen and paper to quickly hash out ideas. For the beginning
        of this app however, we had the design in place. The problems came from accuracy
        of numbers and user adoption.
      </p>

      <p>
        I ran a several workshops with the team to brainstorm solutions for the
        accuracy issue. I knew this was the bigger deterrent in terms of user
        adoption.
      </p>
      <blockquote>
        They didn't trust the numbers and didn't want to get in trouble for
        under producing.
      </blockquote>
    </div>
  </div>
  <div class="article-text">
    <div class="paragraph col-cnt-2">
      <p>
        We performed a few exercises, one of which was <strong
          >Crazy 8's.</strong
        > I had our team of developers fold a piece of paper into 8 identical squares
        and then spend a minute per square coming up with ideas that can help us
        better achieve accurate numbers.
      </p>
      <img
        src="{base}/assets/productImages/kroger/imgCrazy8.jpg"
        style="max-width: 300px;"
        alt=""
      />
      <figure class="img-figure-text">Example of Crazy 8's solution.</figure>
      <p>
        We came up with a counting solution. We wanted the associate to be able
        to scan a certain display table and then count what was on it. This
        required multiple steps and a flow that needed to be both easy and
        accurate.
      </p>

      <p>
        Our MVP (minimum viable product) to get this tested ended up being a
        onetime setup where the associate would print out a unique barcode,
        stick it to their physical table, and scan in items to that table. Once
        that setup was complete then the daily interaction for their frozen
        product would be to scan the barcode on the table, count the products on
        that table, and then get a more accurate production number for the day.
      </p>
      <img
        src="{base}/assets/productImages/kroger/imgFlow.png"
        style="max-width: 300px;"
        alt=""
      />
      <figure class="img-figure-text center">
        Quick user flow of solution.
      </figure>
      <p>
        I prototyped the screens out and did an initial user test using
        InVision.
      </p>
    </div>
  </div>
</div>
<div class="wrapper">
  <div class="section-title">
    <h3>The Testing</h3>
    <div class="section-text">
      <p>
        <strong>Into the Stores.</strong> My process for testing was to wire up the
        mockups into InVision, do some basic interactions so the associate could
        tap through the flow, and pull it up on my phone to walk the associates through
        the new screens, asking questions along the way. I would give the associate
        a high level overview of what they are going to be seeing with the problem
        we are hoping to solve, but largely let them interact with the prototype
        on their own and observe any struggles they encounter or any validations
        of the designs.
      </p>
      <p>
        Testing proved to be a little tricky to work through. They would notice
        things like wrong product imagery or incorrect product in the activity
        which would distract them from what I was actually trying to test. They
        wouldn’t be sure what was tappable or not, a limitation of the
        prototyping tool and how I would not wire up the sections of the app I
        wasn’t trying to test.
      </p>
    </div>
  </div>
  <div class="article-text">
    <div class="paragraph col-cnt-2">
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
      <p>
        Once we were satisfied with the feedback, we worked on developing this
        new process. Once development was finished we did another round of
        testing with the actual device in our test stores. This allowed us to
        continually fix issues, create new enhancements, and ultimately push
        this app out to all bakery departments across the country.
      </p>
    </div>
  </div>
</div>

<div class="wrapper">
  <div class="section-title">
    <h3>Deploy the App</h3>
    <div class="section-text">
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
        solution, we also spent time with our data partners cleaning and fixing
        our data.
      </p>
    </div>
  </div>
  <div class="article-text">
    <div class="paragraph">
      <p>
        The feedback we were getting from leadership and the stores I was able
        to talk with was positive. After the one-time setup of tables,
        associates found that counting the items was quick due to being able to
        scan the barcode as well as count on the list of items.
      </p>
      <p>
        Through Google Analytics, we could see that daily usage of the app and
        daily completion of the tasks were on the rise. Associates were using
        the app to complete their work for the day.
      </p>
    </div>
  </div>
</div>

<div class="wrapper">
  <div class="section-title">
    <h3>Goals</h3>
    <div class="section-text">
      <p>
        <strong>Did we meet our KPI's?</strong> Overtime, yes. We were able to capture
        shrink numbers and determine that product was being sold around the same
        amount that was being produced. This was an estimated savings of $4M from
        enterprise launch.
      </p>
    </div>
  </div>
  <div class="section-title">
    <h3>Next Up</h3>
    <div class="section-text">
      <p>
        <strong>Expand into more departments!</strong> After Bakery was launched
        we immediately went into discovery with the Deli Department. New challenges
        awaited us in terms of temperature control, pre-sliced deli meats, and rotisserie
        chicken!
      </p>
      <p>
        Feel free to ask me more about this process. I applied much of what I
        learned from Bakery towards this new department but ultimately the
        worlds were very different and new solutions needed to be created.
      </p>
    </div>
  </div>
</div>

<div class="wrapper">
  <div class="btn-container">
    <button><a href="{base}/">Return Home</a></button><button
      ><a href="./../clc">CLC Lodging</a></button
    >
  </div>
</div>

<style lang="scss">
  nav {
    background-color: black;
    color: white;
  }
  .nav-grid {
    display: grid;
    grid-auto-flow: column;
    gap: 1rem;
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
    grid-template-columns: 12ch 1fr;
    gap: 0.75rem;
    margin-bottom: 6rem;
  }

  .article-grid h3,
  .article-flex h3 {
    font-size: 1.125rem;
    font-weight: 600;
    line-height: 100%;
    letter-spacing: 1px;
    text-transform: uppercase;
    font-family: "CustomFont", sans-serif;
  }
  .article-grid h3 {
    text-align: right;
    padding-top: 2rem;
  }

  .article-paragraph {
    columns: 2;
    margin-bottom: 4rem;
  }

  .article-paragraph.article-paragraph__img {
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    gap: 0.75rem;
    margin-bottom: 0;
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
    grid-column: 2 / -1;
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
  .section-title,
  .article-text {
    @media screen and (min-width: 960px) {
      display: flex;
      gap: 0.5rem;
    }
  }

  .section-title > h3 {
    margin-top: 2rem;
    margin-bottom: 0.75rem;
    text-align: center;
    text-transform: uppercase;
    font-family: "CustomFont", sans-serif;

    @media screen and (min-width: 960px) {
      text-align: right;
    }
  }

  .img-col {
    @media screen and (min-width: 960px) {
      flex-direction: column;
      grid-column: span 2;
    }
  }

  .grid-col-2 {
    @media screen and (min-width: 960px) {
      grid-column: span 2;
    }
  }

  .grid-col-3 {
    @media screen and (min-width: 960px) {
      grid-column: span 3;
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
    align-items: end;
    justify-content: center;
    margin-bottom: 0.75rem;

    & > p {
      margin-left: 0.5rem;
      font-size: 0.625rem;
      max-width: 50%;
    }

    @media screen and (min-width: 960px) {
      justify-content: start;
    }
  }

  img {
    width: 100%;
    height: auto;
  }
  .image-compare {
    grid-column: 1 / -1;
  }
  .btn-container {
    display: flex;
    flex-direction: column;
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
