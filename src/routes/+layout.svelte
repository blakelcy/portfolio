<script>
	import { page, navigating } from '$app/stores';
	import Nav from '$lib/Nav.svelte';
	import Footer from './Footer.svelte';
</script>

<Nav />

<main>
	<slot />
</main>

<Footer />
