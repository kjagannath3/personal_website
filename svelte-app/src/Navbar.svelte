<script>
    import { Link } from 'svelte-routing';
	let buttons = [
		{id: 1, label: 'Home', link: '/' },
        
		{id: 2, label: 'Education', link: '/education'},

		{id: 3, label: 'Interests', link: '/interests'},

		{id: 4, label: 'Projects', link: '/projects'},

		{id: 5, label: 'Music', link: '/music'},

        {id: 7, label: 'Lifting', link: '/lifting'},

        {id: 8, label: 'Contact', link: '/contact'}

	]
</script>

<nav>
    {#each buttons as button}
        <Link to={button.link}>
            {button.label}
        </Link>
    {/each}
</nav>


<style>
    nav {
        /* width: 50%; */
        background-color: rgb(11, 4, 150); /* Dark background */
        border-radius: 10px;
        color: white;
        padding: 10px 0;
        display: flex; /* Align buttons in a row */
        justify-content: space-around; /* Even space between buttons */
    }
    .navbar a.active-link {
    color: red; /* Change this to whatever color you want */
    }

</style>