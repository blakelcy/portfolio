<script>
	export let image;
	export let alt;
	export let company;
	export let paragraph1;
	export let paragraph2;
</script>

<div class="article-card">
	<div class="article-img">
		<img src={image} {alt} />
	</div>
	<p class="card-title">{company}</p>
	<div class="card-grid">
		<p>{paragraph1}</p>
		<p>{paragraph2}</p>
	</div>
</div>

<style>
	.article-card {
		position: relative;
		display: flex;
		flex-direction: column;
	}

	.article-img {
		display: flex;
		justify-content: center;
		align-items: center;
		overflow: hidden;
		height: 100%;
		margin-bottom: 0.5rem;
	}

	.article-img > img {
		width: 100%; /* Make the image fill the container horizontally */
		height: auto; /* Maintain the aspect ratio */
		display: block; /* Ensure the image behaves as a block element */
		transition: transform 0.33s ease;
		cursor: pointer;
	}

	.article-img > img:hover {
		transform: scale(1.1);
	}

	.card-title {
		margin: 0;
		font-weight: 900;
		padding-bottom: .5rem
	}

	.card-grid {
		display: grid;
		grid-template-columns: repeat(2, 1fr);
		gap: .75rem;
	}
	.card-grid > p {
		font-size: 0.75rem;
		margin: 0;
	}

</style>