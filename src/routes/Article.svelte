<script>
  export let gridFour = false;
  export let title = "Default";
</script>

<section>
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
  </div>
</section>

<style lang="scss">
  section {
    padding: 4rem;
    max-width: 1600px;
    margin-inline: auto;

    &.redText {
      color: rgb(208, 20, 20);
    }

    & > .wrapper {
      margin-bottom: 1rem;
      & > h2 {
        font-size: 1.75rem;
        font-weight: 700;
        line-height: 120%;
        margin-bottom: 0.25rem;
        font-family: "CustomFont", sans-serif;
        margin-bottom: 1rem;
      }

      & > .main-text-grid {
        & > p {
          @media screen and (min-width: 960px) {
            font-size: 1.125rem;
            line-height: 175%;
            column-count: 5;
          }
          & > a {
            color: red;
            &:visited {
              color: red;
            }
          }
        }
      }
    }
  }
</style>
