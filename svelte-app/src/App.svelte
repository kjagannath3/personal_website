<script>

	import Navbar from "./Navbar.svelte";
	import Music from "./Music.svelte";
	import {Router, Route} from "svelte-routing";
	import Home from "./Home.svelte";
	import Education from "./Education.svelte";
	import Resume from "./Resume.svelte";
	import Project from "./Projects.svelte"
	import Interests from "./Interests.svelte";
	import Contact from "./Contact.svelte";
	import Lifting from "./Lifting.svelte";
    import Projects from "./Projects.svelte";
</script>

<Router>
    <Route path="/" component={Home} />
    <Route path="/music" component={Music} />
	<Route path="/education" component={Education}/>
	<Route path="/resume" component={Resume}/>
	<Route path="/projects" component={Projects} />
	<Route path="/interests" component={Interests} />
	<Route path="/contact" component={Contact} />
	<Route path="/lifting" component={Lifting} />
</Router>

