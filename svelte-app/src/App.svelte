<script>

	import Navbar from "./Navbar.svelte";
	import Music from "./Music.svelte";
	import {Router, Route} from "svelte-routing";
	import Home from "./Home.svelte";
</script>

<Router>
    <Route path="/" component={Home} />
    <Route path="/music" component={Music} />
</Router>


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