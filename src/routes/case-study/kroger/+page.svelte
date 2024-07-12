<script>
  import { base } from "$app/paths";
  // @ts-ignore
  import logoKroger from "$lib/assets/logos/kroger-footer-logo.png?enhanced";
</script>

<nav>
  <div class="wrapper" style="padding: 3rem 1rem 0rem 1rem;">
    <img class="nav-img" src="{base}/assets/kroger-footer-logo.png" alt="" />
    <div class="list-itmes">
      <h3>Roles</h3>
      <ul class="list-outside inline-block">
        <li>UX Researcher</li>
        <li>Product Designer</li>
      </ul>
    </div>
    <i class="disclaimer"
      >*Not all solutions can be shown due to intellectual property of client*</i
    >
  </div>
  <div class="wrapper">
    <section class="section-title">
      <h3>Fresh For Everyone</h3>
      <div class="section-text col-cnt-2">
        <p>
          <strong>"Fresh for Everyone"</strong> is more than just a slogan; it's
          the brand ethos that Kroger operates under. This universal tagline, in
          its simplicity and directness, is crafted to immediately convey an understanding
          of the uniquely egalitarian nature of the American brand. It underscores
          Kroger’s unwavering commitment and deeply rooted belief that everyone should
          have access to food that is not only fresh and affordable, but also delicious.
          This commitment forms the cornerstone of the brand's identity, shaping
          its operations and initiatives across all levels.
        </p>
        <p>
          With a heavy focus on product design and design lead mentality, Kroger
          has two pillars that they focus their design experience on. Customer
          Experience and Associate Experience. CX focused on the customers
          journey when shopping online via the website or apps. AX focused on
          the experience of the tools the associates used to perform their jobs.
          I worked for AX for their fresh departments: Bakery, Deli, Meat &
          Seafood.
        </p>
      </div>
    </section>
  </div>
  <div class="wrapper">
    <section class="section-title">
      <h3>Fresh Production</h3>
      <div class="section-text">
        <p>
          <strong>Teamwork is key.</strong> I had an excellent team surrounding and
          supporting me on this product, but nothing would have gotten accomplished
          without my amazing product owner Sarah Pruscia and Technical Lead Ryan
          Ware.
        </p>
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
  </div>
</nav>

<div class="wrapper">
  <section class="section-title">
    <h3>The Problem</h3>
    <div class="section-text">
      <p>
        <strong>Updating Old Processes.</strong> In 2020, the world shut down for
        most people. Remote work became the new normal and software companies thrived.
        Kroger was in a unique situation however. While the general operations employees
        could work their jobs remotely, their in-store associates were considered
        front line workers and had to go in to stores. This disrupted how much product
        designers were able to validate their solutions as access to their core users
        was limited by safety regulations.
      </p>
      <p>
        Such was the state of the product I enherited when joining Kroger in
        early 2021. <strong>Fresh Production</strong> was the app being created to
        replace the old hardware and process for bakery associates to plan the amount
        of stock they needed for a given day. The team had seen heavy turnover in
        key leadership positions leading to a slow progress due to lack of direction.
      </p>
    </div>
  </section>
  <div class="article-text">
    <div class="paragraph">
      <p>
        I set about getting familiar with the current state of the app and how
        user's were reacting to it. We had five test stores using our app, one
        of which was local to me in Cincinnati, OH. Another was in Michigan. The
        rest were out of state. For those I set up Teams calls to discuss
        ceertain flows of the app and get feedback.
      </p>
      <p>
        Talking to users is one of the best parts about being a Product
        Designer. You get to experience how that person interacts wih your app,
        see their reactions and hopefully find out real problems they have that
        you can solve. In Kroger's case, I was fortunate enough to see how their
        bakery associates worked and what they had to do on a daily basis.
      </p>
      <p>
        For the two stores I was able to go in to, the Cincinnati store did not
        like, trust or use the app. The Michigan store used the app but didn't
        trust the data. These interviews gave way to our first set of goals.
      </p>
    </div>
  </div>
  <div class="section-title">
    <h3>Success Metrics</h3>
    <div class="paragraph">
      <p>
        <strong>KPI's.</strong> There were multiple KPI’s (Key Performance Indicators)
        we established from quarter to quarter. But in the beginning we had 3 key
        metrics to measure for our success
      </p>
      <ul>
        <li>Adoption from our associates</li>
        <li>Shrink Reduction in the amount of product thrown away per store</li>
        <li>Financial Savings by stocking appropriate product amounts</li>
      </ul>
    </div>
  </div>
</div>
<div class="wrapper">
  <div class="section-title">
    <h3>App Breakdown</h3>
    <div class="paragraph">
      <p>
        <strong>The Three Tasks.</strong> Bakery associates were tasked with three
        methods of stocking goods on the floor. Today's preperation, tomorrow's preperation
        and thawing freezer items. Each one would show what food they needed to prepare,
        and how much. The associate then needed to enter in the amount they actually
        prepared for the day.
      </p>
      <img
        class="center"
        src="{base}/assets/imgBakery.png"
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
        Often times the associates would over produce claiming that the
        recommendation was innacurate. One of the things our app could not
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
        quantities. Sure we could tell when an item was sold, but we had no idea
        how much was on the floor at any given time. The only measure we had was
        how much the associate said they "produced" that day. This contributed to
        further innacuracies in what to produce on a given day. Our data was not
        correct.
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
        in the store, it was now time to solve any issues we uncovered and felt were
        priority for the team. We first would add a story to our backlog, assigned
        to me so that I can start mocking out a potential solution. Since we had
        such a robust Design System in place, most of my “low fidelity” wireframes
        were more in the “high fidelity” realm. Often times I would just “sketch”
        in Sketch, our chosen design tool. For more complex issues, or for newer,
        non design system components, I would revert to pen and paper to quickly
        hash out ideas. For the beginning of this app however, we had the design
        in place. The problems came from accuracy of numbers and user adoption.
      </p>

      <p>
        I ran a few workshops within the team to brainstorm solutions for the
        accuracy issue. I felt this was the bigger deterrant in terms of user
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
      <img src="{base}/assets/imgCrazy8.jpg" style="max-width: 300px;" alt="" />
      <figure class="img-figure-text">Example of Crazy 8's solution.</figure>
      <p>
        We came up with a counting solution. We wanted the associate to be able
        to scan a certain display table and then count what was on it. This
        required multiple steps and a flow that needed to be both easy and
        accurate.
      </p>

      <p>
        Our MVP to get this tested ended up being a one time setup where the
        associate would print out a unique barcode, stick it to their physical
        table, and scan in items to that table. Once that setup was complete
        then the daily interaction for their frozen product would be to scan the
        barcode on the table, count the products on that table, and then get a
        more accurate production number for the day.
      </p>
      <img src="{base}/assets/imgFlow.png" style="max-width: 300px;" alt="" />
      <figure class="img-figure-text center">
        Quick user flow of solution.
      </figure>
      <p>
        I quickly prototyped the screens out and did an initial user test using
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
        the new screens, asking questions along the way. For the most part I would
        give the associate a high level overview of what they are going to be seeing
        with the problem we are hoping to solve, but largely let them interact with
        the prototype on their own and observe any struggles they encounter or any
        validations of the designs.
      </p>
      <p>
        Testing proved to be a little tricky to work through. Often times they
        would notice things like wrong product imagery or incorrect product in
        the activity which would distract them from what it was I was trying to
        test. Or they wouldn’t be sure what was tappable or not, a limitation of
        the prototyping tool and how I would not wire up the sections of the app
        I wasn’t trying to test.
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
        not overly excited about having to count more, but said the process
        seemed quick and easy enough to complete. We found that giving them
        control of their table and products and that seeing the count they
        performed directly impacted the amount they produced, greatly increased
        the trust in the app.
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
        out and develop. Myself and my product owner spent countless hours in stores
        and in meetings with business partners, making sure this solution solved
        the needs of the user and the business. We were confident it was. The feedback
        was positve on both sides.
      </p>
      <p>
        So we launched the app enterprise wide. We created training documents in
        the app as well as printables for stores. In tandum with our UI
        solution, we also spent time with our data partners cleaning and fixing
        our data.
      </p>
    </div>
  </div>
  <div class="article-text">
    <div class="paragraph">
      <p>
        I won't say we satisfied every associate but the feedback we were
        getting from leadership and the stores I was able to talk with was
        positive. After the one time setup of tables, associates found that
        counting the items was quick due to being able to scan the barcode as
        well as count on the list of items.
      </p>
      <p>
        Through our google analytics, we could see that daily usage of the app
        and daily completion of the tasks were on the rise. Associates were
        using the app to complete their work for the day.
      </p>
    </div>
  </div>
</div>

<div class="wrapper">
  <div class="section-title">
    <h3>Goals</h3>
    <div class="section-text">
      <p>
        <strong>Did we meet our KPI's?</strong> The short answer is yes, overtime.
        We were able to capture shrink numbers and determine that product was being
        sold around the same amount that was being produced. This was an estimated
        savings of $4M from enterprise launch.
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

    & .wrapper:first-child {
      padding: 0;
    }
  }

  .nav-img {
    width: auto;
    padding-left: 6rem;

    @media screen and (min-width: 960px) {
      max-height: 160px;
    }
  }

  .disclaimer {
    font-size: 0.75rem;
    text-align: center;
  }
  .wrapper {
    display: flex;
    flex-direction: column;
    padding: 2rem 1rem 1rem 1rem;

    & > * {
      margin-bottom: 1rem;
    }

    @media screen and (min-width: 960px) {
      display: grid;
      grid-template-columns: repeat(auto-fit, minmax(350px, 1fr));
      grid-gap: 1rem;
      grid-auto-flow: dense;
    }

    @media screen and (min-width: 1200px) {
      display: grid;
      grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
      grid-gap: 1rem;
      grid-auto-flow: dense;
    }
  }

  /* Single column display for phones */

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
  }

  img.center {
    margin: 0 auto;
    @media screen and (min-width: 960px) {
      margin: 0;
    }
  }

  .img-figure-text {
    text-align: right;
    color: rgba(13, 13, 13, 0.6);
    margin-top: 0.5rem;
    font-size: 0.75rem;

    &.center {
      text-align: center;
    }
  }

  .list-itmes {
    display: flex;
    align-items: center;
    flex-direction: column;
    @media screen and (min-width: 960px) {
      flex-direction: row;
    }
    & h3 {
      padding-bottom: 1rem;
      text-align: center;
      text-decoration: underline;

      @media screen and (min-width: 960px) {
        padding-bottom: 0px;
        text-align: left;
        text-decoration: none;
      }
    }
    & ul {
      display: flex;
      flex-direction: column;
      justify-content: center;
      align-items: center;

      @media screen and (min-width: 960px) {
        flex-direction: row;
        gap: 1.5rem;
      }
    }
  }

  blockquote {
    padding: 1rem;
    background-color: #6f4930;
    color: #fff;
    border-radius: 0.75rem;
    font-style: italic;
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
