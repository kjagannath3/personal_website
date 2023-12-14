<script>
	export let name;
	import Navbar from "./Navbar.svelte";``

</script>

<Navbar />
<main>
	<h1 class="big-title">Hello World!</h1>
	<p class="big-paragraph">Welcome to the world of Keshav Jagannath!</p>
</main>

<style>
	main {
		text-align: center;
		padding: 1em;
		max-width: 240px;
		margin: 0 auto;
	}

	.big-title {
		font-size: 7em;
	}

	.big-paragraph {
		font-size: 1.5em;
	}

	h1 {
		text-transform: uppercase;
		font-size: 4em;
		font-weight: 100;
	}

	@media (min-width: 640px) {
		main {
			max-width: none;
		}
	}
</style>