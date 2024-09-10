<script>
  import { base } from "$app/paths";
  import Pamphlet from "$lib/components/Pamphlet.svelte";
  // @ts-ignore
  import ImageCompare from "svelte-image-compare";

  const pamphlets = [
    {
      title: "Kroger",
      role: "Product Designer",
      description:
        "Lead product designer for Kroger’s Fresh Departments. I was responsible for a web portal and Android application that helped department leaders and associates better account for production amounts in the bakeries, delis and butchers enterprise wide.",
      link: "/case-study/kroger",
      heroImg: "/assets/scenery/mountain-lake.png",
      productImg: "/assets/productImages/kroger/imgBakery.png",
      altText: "Mountain view from the slopes of Humboldt in Colorado",
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
      <h4>CLC Lodging</h4>
      <h1>Changing user perspectives through a modern redesign</h1>
    </header>
    <section class="nav-grid">
      <div class="nav-grid-col">
        <div class="content">
          <h3>Role</h3>
          <p>
            <strong>As project lead</strong>, I first performed a heuristic
            analysis on CLC Lodging’s applications. In tandem, I created some
            concept high fidelity mocks of what a redesign could look like.
            After presenting this to the client, I was able to show the impact
            these changes could make for them. Securing a phase 2, I led a small
            remote team in redesigning screens and developing those screens into
            the application.
          </p>
        </div>
        <div class="article-text img-col">
          <div class="flex-img">
            <img
              style="max-width: 111px"
              src="{base}/assets/headshotCasey.png"
              alt=""
            />
            <p>
              <strong>Casey Blakely.</strong> Senior Analyst and Designer.
            </p>
          </div>
          <div class="col-cnt-1">
            <p>
              <strong>Meet the Team.</strong> Casey Blakely (left) led the team with
              support from Nia-Simone (right). Discovery sessions were set up to
              go over individual app screens and potential changes. Nia-Simone was
              then able to redesign screens with oversight and support from Casey.
              Casey was then able to assist in development efforts by being the analyst/designer,
              making sure changes were understood.
            </p>
          </div>
        </div>
      </div>
      <div class="grid-col">
        <div class="content">
          <h3>Research</h3>
          <p>
            <strong>Looking for problems.</strong> The only user feedback I had access
            to where the comments and reviews left through the different app stores.
            I also had access to the product owner and community teams of CLC Lodging.
            With those two areas, I relied on my experience as a product designer
            to perform industry analysis in order to create a solution.
          </p>
          <ul>
            <li>Ratings and reviews</li>
            <li>Competitor analysis</li>
            <li>Heuristic analysis</li>
            <li>Stakeholder interviews</li>
          </ul>
        </div>
        <div class="content">
          <h3>Platform</h3>
          <p>
            <strong>One brand, two experiences.</strong> CLC Lodging had an already
            redesigned web portal for it’s users. However, the Android and iOS apps
            were the outdated experiences and the focus of my efforts.
          </p>
          <ul>
            <li>Mobile (Android and iOS)</li>
          </ul>
        </div>
      </div>
    </section>
  </section>
</nav>

<div class="wrapper">
  <div class="article-grid">
    <h3>The Goal</h3>
    <div class="article-paragraph">
      <p>
        <strong>Improve Ratings.</strong> CLC approached us asking if we could help
        improve their ratings. They knew that the app was pretty outdated visually
        and knew from reviews of some of the things that weren’t working, but needed
        some help pinpointing and prioritizing enhancements.
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
    <img
      src="{base}/assets/productImages/clc/clcRatingsImage.png"
      alt=""
      class="sm"
    />
  </div>
  <div class="article-grid">
    <h3>Interview</h3>
    <div class="article-paragraph article-paragraph__img">
      <div>
        <p>
          <strong>Talking with product ownership.</strong> There was one main product
          owner for the CLC Lodging apps and was one of my favorite product owners
          to have worked with. She knew the product inside and out and was able to
          clearly walk me through the app and it’s nuances. Turns out there were
          a lot of “you can only see this page if...” scenarios.
        </p>
        <p>
          I also met with other product team members who were able to aggregate
          user reviews across different platforms. From this I was able to
          understand user pain points.
        </p>
        <p>
          With these conversations happening, I wanted to gather my thoughts, as
          well as help facilitate thoughts of my product owner, inside a Mural
          board.
        </p>
        <p>
          This is one of my preferred methods of quickly capturing notes and
          ideas from my interviews.
        </p>
      </div>
      <img
        src="{base}/assets/productImages/clc/figure3.png"
        alt=""
        class="sm"
      />
    </div>
  </div>
  <div class="article-flex article-flex--col">
    <h3>Research</h3>
    <div class="article-paragraph">
      <p>
        <strong>Jakob Nielson.</strong> For the analysis I first grabbed
        <a
          href="https://www.nngroup.com/articles/ten-usability-heuristics/"
          target="_blank">Nielson’s 10 Usability Heuristics</a
        > as a reference. Using this foundation I started breaking out the the app
        by it’s different flows and screens. I identified the major flow: Login,
        Search, Hotel Details, and Booking. Alongside this flow were a multitude
        of one off screens that performed various status or administrative features
        for the user.
      </p>
      <p>
        From there I decided to break the flow into the four different micro
        flows and perform the analysis on each. I gave each screen in the flow a
        status; Good, Poor, Fail. If the screen didn’t pass a particular
        heuristic I marked and explained why.
      </p>
      <p>
        After doing this for the entirety of the app I created a PowerPoint
        presentation to show to the client.
      </p>
      <p>
        <strong>Findings.</strong> Overall the app was mostly in need of a fresh
        UI with more consistency between component usage. Some key issues of note
        were it was pretty poor at letting the user know what the error was, leading
        to frustrations. These frustrations were clearly shown in the apps reviews.
        Additionally, there were components that looked like they were a button for
        example, and yet it acted as a tab. However there were other UI versions
        of tabs making the interaction confusing.
      </p>
    </div>
    <img src="{base}/assets/productImages/clc/figure1.png" alt="" class="sm" />
  </div>
  <div class="article-grid">
    <h3>Concept Mockups</h3>
    <div class="article-paragraph">
      <p>
        <strong>Competitor Analysis.</strong> I decided since I didn’t have access
        to any users, I would have to rely more on my experience and the designs
        of other competitor apps. I downloaded and went through a meriad of apps:
        Hopper, Booking.com, Expedia, HotelTonight.
      </p>
      <p>
        I really liked how HotelsTonight’s search UI functioned as well as
        Booking.com, since they themselves had just done a redesign.
      </p>
      <p>
        Using these apps in conjunction with my analysis findings, I quickly put
        together some concept mocks, making sure to focus on spacing,
        typographical hierarchy and a modern consistency.
      </p>
      <p>
        <strong>Recommendations.</strong> I presented the Analysis findings along
        with the concept mockups based on those finding to the stakeholders of CLC
        Lodging. Walking through the different heuristics first making sure they
        understood what I was about to discuss. After spending time on the poor or
        failing pages, I showed off the concepts mocks.
      </p>
      <p>
        Talking through the different changes I was proposing I wanted to make
        sure the client understood why these would be beneficial and an
        improvement for their app. Showcasing the importance of visual
        consistency and hierarchy, the client was receptive to my concepts and
        ultimately wanted to move forward with a full redesign of the app.
      </p>
    </div>
    <div class="image-compare">
      <ImageCompare
        before="{base}/assets/productImages/clc/oldVersion.png"
        after="{base}/assets/productImages/clc/newVersion.png"
        contain={true}
        overlay={false}
      >
        <span slot="before">BEFORE</span>
        <span slot="after">AFTER</span>
      </ImageCompare>
    </div>
  </div>
</div>
<!--  -->
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
