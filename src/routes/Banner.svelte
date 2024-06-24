<script>
  const imgUrl = new URL("./pnw_forest.png", import.meta.url).href;
</script>

<section class="grid-full banner-container">
  <img
    class="banner-image"
    src={imgUrl}
    alt="MidJourney generated image of a forest in the Pacific North West"
  />
</section>

<style>
  .banner-container {
    position: relative;
    overflow: hidden;
    max-height: 800px;
  }

  /* Optional styling for the image */
  .banner-image {
    display: block;
    width: 100%;
    transition: transform 0.33s ease;
  }

  .banner-image:hover {
    transform: scale(1.1);
  }
</style>
