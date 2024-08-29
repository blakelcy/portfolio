<script lang="ts">
  export let pamphlets = [];
</script>

{#each pamphlets as pamphlet}
  <a href={`${pamphlet.link}`} class="section-link">
    <section>
      <div
        class="hero-image"
        role="img"
        style="background-image: url({pamphlet.heroImg});"
        aria-label={pamphlet.altText}
      >
        <header>
          <h2>{pamphlet.title}</h2>
          <div class="text-wrapper">
            <h4>{pamphlet.role}</h4>
            <p>{pamphlet.description}</p>
          </div>
        </header>
        <div class="product-image-wrapper">
          <div
            class="product-image"
            role="img"
            style="background-image: url({pamphlet.productImg});"
            aria-label="Image description"
          ></div>
        </div>
      </div>
    </section>
  </a>
{/each}

<style lang="scss">
  .section-link {
    display: block;
    text-decoration: none; /* Remove default underline */
    color: inherit; /* Ensure text color is inherited */

    &:hover {
      cursor: pointer;
    }
  }

  section {
    position: relative;
    margin-bottom: 2rem;
  }

  .hero-image {
    display: flex;
    flex-direction: column;
    height: 600px;
  }
  header {
    width: 120px;
    position: absolute;
    height: 100%;
    background-color: #171513;
    padding: 2rem;
    color: white;
  }

  h2 {
    writing-mode: tb-rl;
    font-size: 70px;
    line-height: 1;
  }

  .text-wrapper {
    display: none;
  }

  .product-image-wrapper {
    background-color: #030302;
    position: absolute;
    right: 0;
    height: 100%;
    width: calc(100% - 120px);
  }

  .product-image {
    background-image: linear-gradient(rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5));
    height: 70%;
    margin-top: 3rem;
    background-position: center;
    background-repeat: no-repeat;
    background-size: contain;
    position: relative;
  }

  @media (width > 768px) {
    .hero-image {
      background-image: linear-gradient(rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5));
      background-position: center;
      background-repeat: no-repeat;
      background-size: cover;
      position: relative;
      height: 560px;
    }
    header {
      width: 100%;
      height: 150px;
    }

    h2 {
      writing-mode: horizontal-tb;
    }

    .text-wrapper {
      display: block;
    }

    .text-wrapper > h4 {
      font-size: 1.75rem;
      margin-bottom: 1rem;
      margin-top: 2rem;
    }

    .text-wrapper > p {
      line-height: 2;
    }

    .product-image-wrapper {
      width: 55%;
    }

    section:hover header,
    section:hover .product-image-wrapper {
      position: absolute;
      height: 100%;
      z-index: 50;
    }

    section:hover header {
      width: 45%;
    }
    section:hover .product-image-wrapper {
      width: 55%;
      right: 0;
    }
    section:hover .text-wrapper,
    section:hover .product-image-wrapper {
      opacity: 1;
      visibility: visible;
    }

    section:hover .product-image-wrapper > .product-image {
      margin-top: 2rem;
    }

    .product-image {
      height: 80%;
    }

    .text-wrapper,
    .product-image-wrapper {
      transition:
        opacity 0.5s ease-in-out,
        width 0.2s ease-in;
      opacity: 0;
      visibility: hidden;
    }
  }
</style>
