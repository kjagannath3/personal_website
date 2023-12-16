<script>
    import { Link } from 'svelte-routing';
	let buttons = [
		{id: 1, label: 'Home', link: '/' },
        
		{id: 2, label: 'Education', link: '/education'},

		{id: 3, label: 'My resume', link: '/resume'},

		{id: 4, label: 'Demos', link: '/demos'},

		{id: 5, label: 'Music', link: '/music'},
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
        background-color: rgb(11, 4, 150); /* Dark background */
        color: white;
        padding: 10px 0;
        display: flex; /* Align buttons in a row */
        justify-content: space-around; /* Even space between buttons */
    }


</style>