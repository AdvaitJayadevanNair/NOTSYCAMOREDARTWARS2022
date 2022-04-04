<script>
	export let name = null;
	export let playing = null;
	export let alive = null;
	export let kills = null;
	export let revive = null;
	export let players = null;

	let hidden = true;
</script>

<div
	on:click|stopPropagation={() => {
		hidden = !hidden;
	}}
>
	{name}
	{#if !playing}
		<span title="Not Playing">👻</span>
	{:else if alive}
		<span title="Alive">😃</span>
	{:else}
		<span title="Dead">💀</span>
	{/if}
	{#if !hidden}
		<div class="slanted">
			<div>Revives: {revive}</div>
			<div>Kills({kills.length}):</div>
			{#each kills as kill}
				<div>
					{players[kill]}
				</div>
			{/each}
		</div>
	{/if}
</div>

<style>
	.slanted {
		padding-left: 15px;
		font-style: italic;
	}
</style>
