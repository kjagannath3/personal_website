<script>
    import { Link } from 'svelte-routing';
	let buttons = [
		{id: 1, label: 'Home', link: '/' },
        
		{id: 2, label: 'Education', link: '/'},

		{id: 3, label: 'My resume', link: '/'},

		{id: 4, label: 'Demos', link: '/'},

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
    Link { /* Style for <a> or <Link> tags */
    color: white; /* White text color */
    text-decoration: none; /* Remove underline from links */
    padding: 10px 20px;
}
    button {
        background: none; /* Remove default button background */
        border: none; /* Remove default button border */
        color: white; /* White text color */
        font-weight: bold;
        cursor: pointer;
        padding: 10px 20px;
    }

    button:hover {
        background-color: rgba(255, 255, 255, 0.2); /* Light background on hover */
    }
</style>