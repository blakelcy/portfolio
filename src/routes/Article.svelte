<script>
	import ArticleCard from './ArticleCard.svelte';

	export let bar = true;
	export let bordered = true;
	export let redText = false;
	export let gridThree = false;
	export let gridFour = false;
	export let title = 'Default';
	// Define the content for the article
	export let articleParagraphs = [];

	// Define the data for the ArticleCard components
	export let articleCards = [];

	// Define a function to update the article cards
	function updateCards(newCards) {
		articleCards = newCards;
	}
</script>

<section class="grid-full article-section" class:redText>
	<h2 class="article-title">{title}</h2>
	<div class="article-grid" class:gridFour>
		{#each articleParagraphs as paragraph, index}
			<p class="article-layout col-{index + 1}">{paragraph}</p>
		{/each}
	</div>

	{#if bar === true}
		<div class="article-grid">
			<span></span>
		</div>
	{/if}
	<div class="article-grid grid-3" class:bordered>
		{#each articleCards as card, index}
			<p class="article-layout col-{index + 1}">
				<ArticleCard {...card} />
			</p>
		{/each}
	</div>
</section>

<style>
	.article-section {
		padding: 0 1rem;
	}

	.article-section.redText {
		color: red;
	}

	.article-section > .article-grid:first-of-type {
		margin-bottom: 2rem;
	}
	.article-title {
		font-weight: 700;
	}

	.article-grid,.article-grid.grid-3, .article-grid.gridFour {
		display: grid;
		grid-template-columns: repeat(1, 1fr);
		gap: 16px;
	}

	.article-grid > span {
		display: block;
		grid-column: 1 /13;
		background-color: black;
		height: 24px;
		margin-bottom: 16px;
	}

	.article-grid.bordered {
		padding-bottom: 1.5rem;
		border-bottom: 1px solid black;
	}

	.article-layout {
		margin: 0;
		font-size: 0.75rem;
	}

	.article-layout.col-1 {
		grid-column: 1 / 1;
	}
	.article-layout.col-2 {
		grid-column: 1 / 1;
	}
	.article-layout.col-3 {
		grid-column: 1 / 1;
	}
	.article-layout.col-4 {
		grid-column: 1 / 1;
	}
	.article-layout.col-5 {
		grid-column: 1 / 1;
	}
	.article-layout.col-6 {
		grid-column: 1 / 1;
	}

	@media (min-width: 500px) {

	.article-grid {
		grid-template-columns: repeat(2, 1fr);
	}

	.article-layout.col-1 {
		grid-column: 1 / 1;
		grid-row: 1 /1;
	}
	.article-layout.col-2 {
		grid-column: 1 / 1;
		grid-row: 2 /2;
	}
	.article-layout.col-3 {
		grid-column: 1 / 1;
		grid-row: 3 /3;
	}
	.article-layout.col-4 {
		grid-column: 2 / 2;
		grid-row: 1 /1;
	}
	.article-layout.col-5 {
		grid-column: 2 / 2;
		grid-row: 2 /2;
	}
	.article-layout.col-6 {
		grid-column: 2 / 2;
		grid-row: 3 /3;
	}
}

	@media (min-width: 768px) {
	.article-grid {
		grid-template-columns: repeat(6, 1fr);
	}
	.article-grid.grid-3 {
		grid-template-columns: repeat(3, 1fr);
	}

	.article-layout.col-1 {
		grid-column: 1 / 1;
		grid-row: 1 /1;
	}
	.article-layout.col-2 {
		grid-column: 2 / 2;
		grid-row: 1 /1;
	}
	.article-layout.col-3 {
		grid-column: 3 / 3;
		grid-row: 1 /1;
	}
	.article-layout.col-4 {
		grid-column: 4 / 4;
		grid-row: 1 /1;
	}
	.article-layout.col-5 {
		grid-column: 5 / 5;
		grid-row: 1 /1;
	}
	.article-layout.col-6 {
		grid-column: 6 / 6;
		grid-row: 1 /1;
	}
}
</style>