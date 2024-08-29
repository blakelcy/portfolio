<script>
  import { onMount } from "svelte";
  import { fade } from "svelte/transition";

  let visible = true;

  onMount(() => {
    // Prevent scrolling
    document.body.style.overflow = "hidden";
    setTimeout(() => {
      visible = false;
      // Re-enable scrolling
      document.body.style.overflow = "";
    }, 2000); // Adjust this value to control how long the splash screen is visible
  });
</script>

{#if visible}
  <div transition:fade={{ duration: 1000 }} class="splash-screen">
    <span class="book-spine"></span>
    <div class="content">
      <div class="name">Casey</div>
      <div class="surname">Blakely</div>
    </div>
  </div>
{/if}

<style>
  .splash-screen {
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    height: 100vh;
    background-color: #edb40f; /* Bright yellow color */
    display: flex;
    justify-content: flex-start;
    align-items: flex-end;
    z-index: 9999;
  }

  .content {
    font-family: Arial, sans-serif;
    font-weight: bold;
    font-size: 98px;
    line-height: 1;
    color: #000000;
    transform: rotate(90deg);
    transform-origin: left top;
    position: absolute;
    top: 98px;
    left: 270px;
  }

  .book-spine {
    width: 6px;
    height: 100vh;
    background-color: #e4a601;
    transform-origin: left top;
    position: absolute;
    top: 0px;
    left: 32px;
  }

  .name,
  .surname {
    display: block;
    white-space: nowrap;
  }

  .surname {
    margin-top: 10px;
  }

  @media (width > 768px) {
    .content {
      font-size: 179px;
      left: 500px;
    }
    .book-spine {
      left: 64px;
    }
  }
</style>
