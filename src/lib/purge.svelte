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
	<h1>😈😈😈!!!PURGE TIME!!!😈😈😈</h1>
	<p>All players on teams that don't have a 👑 or 💀 are free game</p>
	<p>Dead players can kill alive players😈</p>
	<b>Happy hunting!</b>
	<p>Tap or click anywhere to close</p>
	<p>Or the message will close in {time}</p>
</div>

<style type="text/css">
	h1,
	b {
		color: red !important;
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
