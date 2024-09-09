<script>
  import { onMount } from "svelte";
  import { browser } from "$app/environment";

  export let images = [];
  export let title;

  let lightboxOpen = false;
  let currentIndex = 0;

  function openLightbox(index) {
    currentIndex = index;
    lightboxOpen = true;
  }

  function closeLightbox() {
    lightboxOpen = false;
  }

  function nextImage() {
    currentIndex = (currentIndex + 1) % images.length;
  }

  function prevImage() {
    currentIndex = (currentIndex - 1 + images.length) % images.length;
  }

  function handleKeydown(e) {
    if (lightboxOpen) {
      if (e.key === "ArrowRight") nextImage();
      if (e.key === "ArrowLeft") prevImage();
      if (e.key === "Escape") closeLightbox();
    }
  }

  onMount(() => {
    if (browser) {
      window.addEventListener("keydown", handleKeydown);
      return () => {
        window.removeEventListener("keydown", handleKeydown);
      };
    }
  });
</script>

<div class="image-wrapper">
  <h3>{title}</h3>
  <div class="image-gallery">
    {#each images as image, i}
      <div class="image-container">
        <img
          src={image.thumbnail}
          alt={image.alt}
          on:click={() => openLightbox(i)}
          class="thumbnail"
        />
      </div>
    {/each}
  </div>
</div>

{#if lightboxOpen}
  <div class="lightbox" on:click={closeLightbox}>
    <button class="close" on:click|stopPropagation={closeLightbox}>×</button>
    <button class="nav prev" on:click|stopPropagation={prevImage}
      >&#10094;</button
    >
    <button class="nav next" on:click|stopPropagation={nextImage}
      >&#10095;</button
    >
    <div class="lightbox-content" on:click|stopPropagation>
      <img src={images[currentIndex].full} alt={images[currentIndex].alt} />
    </div>
  </div>
{/if}

<style>
  .image-wrapper {
    grid-column: -1 /1;
  }

  h4 {
    font-size: 1.125rem;
  }
  .image-gallery {
    display: grid;
    grid-template-columns: repeat(4, 1fr);
    gap: 1rem;
  }

  .thumbnail {
    width: 100%;
    height: auto;
    cursor: pointer;
    transition: opacity 0.3s ease;
    aspect-ratio: 9 / 16;
    object-fit: contain;
    mix-blend-mode: darken;
  }

  .thumbnail:hover {
    opacity: 0.8;
  }

  .lightbox {
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background-color: rgba(0, 0, 0, 0.8);
    display: flex;
    justify-content: center;
    align-items: center;
    z-index: 1000;
  }

  .lightbox-content {
    max-width: 90%;
    max-height: 90%;
  }

  .lightbox-content img {
    max-width: 100%;
    max-height: 100%;
    width: 750px;
  }

  .close {
    position: absolute;
    top: 15px;
    right: 35px;
    color: #fff;
    font-size: 40px;
    font-weight: bold;
    transition: 0.3s;
    background-color: rgba(0, 0, 0, 0.8);
    border: none;
    padding: 0 1rem;
  }

  .close:hover,
  .close:focus {
    color: #edb40f;
    text-decoration: none;
    cursor: pointer;
  }

  .nav {
    color: white;
    position: absolute;
    top: 50%;
    width: auto;
    padding: 16px;
    margin-top: -50px;
    font-weight: bold;
    font-size: 20px;
    transition: 0.6s ease;
    border-radius: 0 3px 3px 0;
    user-select: none;
    background-color: rgba(0, 0, 0, 0.8);
    border: none;
    cursor: pointer;
  }

  .prev {
    left: 0;
    border-radius: 3px 0 0 3px;
  }

  .next {
    right: 0;
    border-radius: 3px 0 0 3px;
  }

  .nav:hover {
    background-color: rgba(0, 0, 0, 0.9);
    color: #edb40f;
  }
</style>
