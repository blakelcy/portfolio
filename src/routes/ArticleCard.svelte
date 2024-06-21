<script>
  export let image;
  export let alt;
  export let company;
  export let paragraph1;
  export let paragraph2;
</script>

<div class="article-card">
  <div class="img-wrapper">
    <img src={image} {alt} />
  </div>
  <h4>{company}</h4>
  <div class="card-grid">
    <p>{paragraph1}</p>
    <p>{paragraph2}</p>
  </div>
</div>

<style lang="scss">
  .article-card {
    position: relative;
    display: flex;
    flex-direction: column;

    & > .img-wrapper {
      overflow: hidden;
      margin-bottom: 0.5rem;

      & > img {
        display: block;
        max-width: 100%;
        transition: transform 0.33s ease;

        &:hover {
          transform: scale(1.1);
        }
      }
    }

    & > h4 {
      margin: 0;
      font-weight: 900;
      padding-bottom: 0.5rem;
    }

    & > .card-grid {
      display: grid;
      grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
      gap: 0.75rem;
      font-size: 0.75rem;
      margin: 0;

      @media screen and (min-width: 960px) {
        grid-template-columns: repeat(auto-fit, minmax(100px, 1fr));
      }
    }
  }
</style>
