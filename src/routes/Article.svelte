<script>
  import ArticleCard from "./ArticleCard.svelte";

  export let bar = true;
  export let bordered = true;
  export let redText = false;
  export let gridThree = false;
  export let gridFour = false;
  export let title = "Default";
  // Define the content for the article
  export let articleParagraphs = [];

  // Define the data for the ArticleCard components
  export let articleCards = [];

  // Define a function to update the article cards
  function updateCards(newCards) {
    articleCards = newCards;
  }
</script>

<section class:redText>
  <div class="wrapper">
    <h2>{title}</h2>
    <div class="main-text-grid" class:gridFour>
      <p>
        I've had the privilege of working in many different industries, both as
        a developer and a designer. From hospitals, to banks. Grocery stores to
        medical research groups and think tanks, I've led a lot of discoveries
        with a lot of great people. My approach to design problems stems from my
        belief in collaborative ideation to create the best possible outcome for
        users and businesses. I invite you to read about my work below, where I
        found my passion for asking questions, analyzing feedback, and improving
        systems for businesses and customers. If you like what you see feel free
        to contact me. In my personal life, I love to visit National Parks and
        hike and camp in my home state of Ohio. This portfolio takes inspiration
        from early <a
          href="https://standardsmanual.com/products/parks"
          target="_blank">National Parks pamphlets and articles.</a
        >
      </p>
    </div>

    {#if bar === true}
      <div class="divider"></div>
    {/if}
    <div class="article-grid" class:bordered>
      {#each articleCards as card, index}
        <p class="article-layout col-{index + 1}">
          <ArticleCard {...card} />
        </p>
      {/each}
    </div>
  </div>
</section>

<style lang="scss">
  section {
    padding: 1rem;

    &.redText {
      color: rgb(208, 20, 20);
    }

    & > .wrapper {
      & > h2 {
        font-weight: 700;
        line-height: 120%;
        margin-bottom: 0.25rem;
        font-family: "CustomFont", sans-serif;
      }

      & > .article-grid,
      .main-text-grid {
        display: grid;
        grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));

        & > p {
          font-size: 1rem;

          & a {
            color: #0d0d0d;
          }
        }
      }

      & > .main-text-grid {
        & > p {
          @media screen and (min-width: 960px) {
            column-count: 5;
          }
        }
      }
      & > .article-grid {
        gap: 0.75rem 1rem;
      }
      & > .divider {
        height: 1.5rem;
        background-color: black;
        margin: 1rem 0;
      }
    }
  }
</style>
