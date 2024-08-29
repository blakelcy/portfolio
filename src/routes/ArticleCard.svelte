<script>
  import { base } from "$app/paths";
  export let image;
  export let alt;
  export let company;
  export let paragraph1;
  export let paragraph2;
  export let link;
  export let linkAction = false; // Logging the properties to verify their values
  console.log("ArticleCard Props:", {
    image,
    alt,
    company,
    paragraph1,
    paragraph2,
    link,
    linkAction,
  });
</script>

{#if linkAction === false}
  <a href="{base}{link}" class="article-card">
    <div class="article-img">
      <img src={image} {alt} />
    </div>
    <p class="card-title">{company}</p>
    <div class="card-grid">
      <p>{paragraph1}</p>
      <p>{paragraph2}</p>
    </div>
  </a>
{:else}
  <a href={link} class="article-card" target="_blank">
    <div class="article-img">
      <img src={image} {alt} />
    </div>
    <p class="card-title">{company}</p>
    <div class="card-grid">
      <p>{paragraph1}</p>
      <p>{paragraph2}</p>
    </div>
  </a>
{/if}

<style lang="scss">
  .article-card {
    position: relative;
    display: flex;
    flex-direction: column;
    text-decoration: none;
    color: #0d0d0d;
  }

  .article-img {
    display: flex;
    justify-content: center;
    align-items: center;
    overflow: hidden;
    max-height: 300px;
    margin-bottom: 0.5rem;
    background-color: rgba(177, 182, 69, 0.06);

    @media screen and (min-width: 960px) {
      max-height: 600px;
    }
  }

  .article-img > img {
    width: auto; /* Make the image fill the container horizontally */
    height: 300px; /* Maintain the aspect ratio */
    display: block; /* Ensure the image behaves as a block element */
    transition: transform 0.33s ease;
    cursor: pointer;
    padding: 0.5rem 0;
    filter: grayscale(100%) invert(10%) sepia(8%) saturate(350%)
      hue-rotate(351deg) brightness(105%) contrast(95%);

    @media screen and (min-width: 960px) {
      height: 500px; /* Maintain the aspect ratio */
    }
  }

  .article-img > img:hover {
    transform: scale(1.1);
  }

  .card-title {
    margin: 0;
    font-weight: 900;
    padding-bottom: 0.5rem;
  }

  .card-grid {
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    gap: 0.75rem;
  }
  .card-grid > p {
    font-size: 0.75rem;
    margin: 0;
  }
</style>
