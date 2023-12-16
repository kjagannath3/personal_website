<script>

	import Navbar from "./Navbar.svelte";
	import Music from "./Music.svelte";
	import {Router, Route} from "svelte-routing";
	import Home from "./Home.svelte";
	import Education from "./Education.svelte";
	import Resume from "./Resume.svelte";
	import Demos from "./Demos.svelte";
</script>

<Router>
    <Route path="/" component={Home} />
    <Route path="/music" component={Music} />
	<Route path="/education" component={Education}/>
	<Route path="/resume" component={Resume}/>
	<Route path="/demos" component={Demos} />
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