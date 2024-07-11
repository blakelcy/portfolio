<script>
  // @ts-ignore
  import imgBanner from "$lib/assets/pnw_forest.png?enhanced";
</script>

<section class="grid-full banner-container">
  <enhanced:img
    class="banner-image"
    src={imgBanner}
    alt="MidJourney generated image of a forest in the Pacific North West"
  />
</section>

<style>
  .banner-container {
    position: relative;
    overflow: hidden;
    max-height: 600px;
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
