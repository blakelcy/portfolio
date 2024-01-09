<script lang="ts">
    import { base } from '$app/paths';
</script>
<!-- <a href="{base}/">Home</a> -->
<div class="nav">
	<div class="left-half">
		<a href="/" class="nav-logo">Casey Blakely</a>
		<p class="nav-sub-logo">Official Map and Guide</p>
	</div>
	<div class="right-half">
		<div class="sub-grid">
			<div class="col-1">
				<p>c.blakely34@gmail.com</p>
				<p>casey.blakely@adventureware.com</p>
			</div>
			<div class="col-2">
				<p>
					Co-Founder of <a href="https://www.adventureware.com" target="_blank">Adventureware</a>
				</p>
				<p><a href="https://www.kwipoo.app" target="_blank">Kwipoo</a></p>
			</div>
		</div>
	</div>
</div>

<style>
	/* Styling for the navigation */
	.nav {
		background-color: black;
		display: grid;
		grid-template-columns: repeat(12, 1fr);
		gap: 16px;
		padding: 1rem 2rem;
	}

	.left-half {
		grid-column-start: 1;
		grid-column-end: 7;
	}

	.right-half {
		grid-column-start: 7;
		grid-column-end: 13;
	}

	.sub-grid {
		display: grid;
		grid-template-columns: repeat(6, 1fr);
		gap: 3rem;
	}

	.sub-grid > div > p {
		font-size: 1rem;
		color: white;
		font-weight: 700;
		margin: 0;
		line-height: 1.6;
	}

	.sub-grid > div > p > a {
		color: white;
	}

	.sub-grid > .col-1 {
		grid-column: 1 / 4;
	}
	.sub-grid > .col-2 {
		grid-column: 5 / 7;
	}

	.nav-logo,
	.nav-sub-logo {
		font-weight: bold;
		color: white;
	}

	.nav-logo {
		display: block;
		font-size: 2.5rem;
		margin-bottom: 2.5rem;
		text-decoration: none;
	}

	.nav-sub-logo {
		font-size: 1rem;
	}
</style>
