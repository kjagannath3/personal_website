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

<nav class="navbar">
    {#each buttons as button}
    
    <div class="button">
        <Link class="button" to={button.link}>
            {button.label}
        </Link>
    </div>
    {/each}
</nav>


<style>
    .navbar{
    background-color: rgb(11, 4, 150); /* Dark background */
    padding: 10px 0;
    display: flex; /* Align buttons in a row */
    justify-content: space-around; /* Even space between buttons */
}

.button {
    border: none; /* Remove default button border */
    cursor: pointer;
    padding: 10px 20px;
}

.button a {
    color: white; /* Explicitly set text color for <Link> */
    text-decoration: none; /* Optional: removes underline */
}

.button a:visited {
    color: white; /* Override visited link color */
}

.button:hover {
    background-color: rgba(255, 255, 255, 0.2); /* Light background on hover */
}

</style>