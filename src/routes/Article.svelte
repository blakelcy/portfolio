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
      {#each articleParagraphs as paragraph}
        <p>{paragraph}</p>
      {/each}
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
      color: red;
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
        gap: 0.75rem 1rem;

        & > p {
          font-size: 1rem;
        }
      }

      & > .main-text-grid {
        & > p {
          @media screen and (min-width: 960px) {
            column-count: 5;
          }
        }
      }

      & > .divider {
        height: 1.5rem;
        background-color: black;
        margin: 1rem 0;
      }
    }
  }
</style>
