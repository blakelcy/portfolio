<script>
	const imgUrl = new URL('./pnw_forest.png', import.meta.url).href;
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
		width: 100%;
		display: flex;
		justify-content: center;
		align-items: center;
		overflow: hidden;
		height: 100%;
	}

	/* Optional styling for the image */
	.banner-image {
		width: 100%; /* Make the image fill the container horizontally */
		height: auto; /* Maintain the aspect ratio */
		display: block; /* Ensure the image behaves as a block element */
		transition: transform 0.33s ease;
		cursor: pointer;
	}

	.banner-image:hover {
		transform: scale(1.1);
	}
</style>
