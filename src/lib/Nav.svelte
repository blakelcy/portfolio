<script>
  import { base } from "$app/paths";
</script>

<nav>
  <div class="wrapper">
    <div class="nav-content">
      <h1>Casey Blakely</h1>
      <p>Official Map and Guide</p>
    </div>
    <div class="nav-content">
      <p>c.blakely34@gmail.com</p>
      <p>casey.blakely@adventureware.com</p>
    </div>
    <div class="nav-content">
      <p>Co-Founder of:</p>
      <a href="https://www.adventureware.com" target="_blank">Adventureware</a>
      <br />
      <a href="https://www.kwipoo.app" target="_blank">Kwipoo</a>
    </div>
  </div>
</nav>

<style lang="scss">
  nav {
    background-color: #171513;
    color: white;
    padding: 1rem;
    & > .wrapper {
      & > .nav-content {
        margin-bottom: 1rem;
        & > h1 {
          font-size: 2.5rem;
          line-height: 2.5rem;
          @media screen and (min-width: 960px) {
            margin-bottom: 40px;
          }
        }
        & > a {
          color: white;
        }

        &.img {
          overflow: hidden;
          margin-bottom: 0.5rem;

          & > img {
            display: block;
            max-width: 100%;
          }
        }
        @media screen and (min-width: 960px) {
          margin-bottom: 0px;
        }
      }
      @media screen and (min-width: 960px) {
        display: grid;
        grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
      }
    }
  }
</style>
