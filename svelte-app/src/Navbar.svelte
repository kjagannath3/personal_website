<script>

	let buttons = [
		{id: 1, label: 'Home' },
        
		{id: 2, label: 'Education' },

		{id: 3, label: 'Project'},

		{id: 4, label: 'Music'},
	]
</script>

<nav>
    {#each buttons as button}
        <button>
            {button.label}
        </button>
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