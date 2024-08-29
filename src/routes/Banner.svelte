<section class="hero-image">
  <div class="hero-text">
    <h1>Sr. Product Designer and Strategist</h1>
    <p>Celebrating over 10 years of product development and design.</p>
  </div>
</section>

<style lang="scss">
  .hero-image {
    display: block;
    background-image: linear-gradient(rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5)),
      url("/src/routes/hero-image.png");
    height: 400px;
    background-position: center;
    background-repeat: no-repeat;
    background-size: cover;
    position: relative;

    @media screen and (min-width: 960px) {
      height: 600px;
    }
  }
  .hero-text {
    color: white;
    padding: 2rem;
    padding-top: 7rem;
    padding-bottom: 8rem;
    max-width: 1600px;
    & > h1 {
      font-size: 2.5rem;
      max-width: 450px;
      padding-bottom: 0.5rem;
      line-height: 1.1;

      @media screen and (min-width: 960px) {
        font-size: 5.5rem;
        max-width: 100%;
      }
    }
    & > p {
      font-size: 1rem;
      max-width: 200px;
      line-height: 1.5;
      @media screen and (min-width: 960px) {
        font-size: 2.5rem;
        max-width: 100%;
      }
    }
  }
</style>
