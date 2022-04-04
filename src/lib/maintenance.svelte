<script>
	let hidden = false;
	let time = 5;
	let interval = setInterval(() => {
		time--;
		if(time==0){
			hidden = true;
			clearInterval(interval);
		}
	}, 1000);
</script>

<div
	on:click={() => {
		 hidden = true;
	}}
	style="display: {hidden ? 'none' : 'flex'}"
	class="modal"
>
	<h1>😢😢😢!!!SITE WILL NOT BE UPDATED TILL MON 6PM!!!😢😢😢</h1>
	<p>The site will not be updated from Sunday April 3 9:00pm to Monday April 4 6:00pm</p>
	<p>This is for a new update that includes player kills and a revive count</p>
	<p>Tap or click anywhere to close</p>
	<p>Or the message will close in {time}</p>
</div>

<style type="text/css">
	h1,
	b {
		color: green !important;
	}
	p,
	b {
		color: white;
		text-align: center;
	}
	.modal {
		z-index: 1;
		position: fixed;
		top: 0;
		left: 0;
		width: 100vw;
		height: 100vh;
		background: black;
		flex-direction: column;
		align-items: center;
		justify-content: center;
	}
</style>
