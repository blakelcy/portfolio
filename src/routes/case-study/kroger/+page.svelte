<div class="page">
  <h1>LATEST NEWS</h1>
  <div class="archive">
    <div class="main-text">
      <h3>Test</h3>
      <p>
        <strong>Jakob Nielson.</strong> For the analysis I first grabbed Nielson’s
        10 Usability Heuristics as a reference. Using this foundation I started breaking
        out the the app by it’s different flows and screens. I identified the major
        flow: Login, Search, Hotel Details, and Booking. Alongside this flow were
        a multitude of one off screens that performed various status or administrative
        features for the user.
      </p>
      <p>
        From there I decided to break the flow into the four different micro
        flows and perform the analysis on each. I gave each screen in the flow a
        status; Good, Poor, Fail. If the screen didn’t pass a particular
        heuristic I marked and explained why.
      </p>
    </div>
    <div class="figure-text">
      <p>
        After doing this for the entirety of the app I created a PowerPoint
        presentation to show to the client.
      </p>
      <p>
        <strong>Findings.</strong> Overall the app was mostly in need of a fresh
        UI with more consistency between component usage. Some key issues of note
        were it was pretty poor at letting the user know what the error was, leading
        to frustrations. These frustrations were clearly shown in the apps reviews.
        Additionally there were components that looked like they were a button for
        example, and yet it acted as a tab. However there were other UI versions
        of tabs making the interaction confusing.
      </p>
      <p>
        In addition to the heuristic analysis, I created a set of concept
        mockups for the Search, Hotel Details, and Hotel Booking screens.
      </p>
      <img src="/assets/figure1.png" alt="" />
    </div>
    <article class="article">
      1
      <hr class="image" />
      <hr />
    </article>
    <article class="article">
      2
      <hr />
      <hr />
      <hr />
      <hr />
      <hr />
    </article>
    <article class="article">
      3
      <hr />
      <hr />
      <hr />
    </article>
    <article class="article">
      4
      <hr class="image" />
      <hr />
      <hr />
      <hr />
      <hr />
      <hr />
      <hr />
    </article>
    <article class="article">
      5
      <hr />
      <hr />
      <hr />
    </article>
    <article class="article">
      6
      <hr />
      <hr />
      <hr />
    </article>
  </div>
</div>

<style>
  .archive {
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(210px, 1fr));
    grid-gap: 32px;
    grid-auto-flow: dense;
  }

  /* Extra-wide grid-posts */
  .article:nth-child(31n + 1) {
    grid-column: 1 / -1;
  }
  .article:nth-child(16n + 2) {
    grid-column: -3 / -1;
  }
  .article:nth-child(16n + 10) {
    grid-column: 1 / -2;
  }

  /* Single column display for phones */
  @media (max-width: 459px) {
    .archive {
      display: flex;
      flex-direction: column;
    }
  }
</style>
