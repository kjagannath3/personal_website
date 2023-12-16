<script>
    import Navbar from "./Navbar.svelte";
</script>

<Navbar />
<main>
	<h1 class="big-title">Hello World!</h1>
	<p class="big-paragraph">Welcome to the world of Keshav Jagannath!</p>
	<div class="content">
		<div class ="text-picture-container">
			<div class="text-container">
			<h2>Lorem Ipsum</h2>
				<p>
					Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam non urna at libero sodales blandit. 
					Suspendisse sed mi eu sem blandit tristique. Sed eleifend nisl non lacus vulputate, eget posuere massa 
					hendrerit. Proin auctor, elit eget consectetur tristique, dolor risus malesuada nisi, ac interdum quam 
					libero a felis. Sed a tincidunt arcu. Nullam tincidunt semper orci, at lobortis dui congue nec. Curabitur 
					tincidunt, nisi nec rhoncus feugiat, erat lorem iaculis metus, id venenatis nunc lectus sed nisl. Quisque 
					ut euismod nulla. Sed vel lectus ipsum. Vivamus at nunc nec nisi eleifend congue. Vivamus convallis sapien 
					ut dapibus tincidunt. Vivamus sit amet ipsum eget justo facilisis venenatis. Nulla facilisi.
				</p>	
			</div>
			<div class="image-container">
				<img class ="headshot" src="GTfall2021-1599.png" alt="headshot" height="300px" width="200px">
			</div>	
		</div>

	</div>
</main>



<style>
	.big-paragraph {
		text-align: center;
	}
	.content {
		box-sizing: border-box;
		width: 100%;
		padding: 20px;
		display: flex;
		justify-content: center;
		align-items: center;
	}
	.text-picture-container {
		box-sizing: border-box;
		padding: 90px;
		width: 80%;
		align-self: center;
		display: flex;
        flex-direction: row;
        align-items: center;
        justify-content: center;
		border-radius: 20px;
		background-color: lightgrey;
	}
</style>