<script>
	import Nav from '$lib/Nav.svelte';
	import Footer from './Footer.svelte';
  import "../app.css";
</script>

<Nav />

<main>
	<slot />
</main>

<Footer />