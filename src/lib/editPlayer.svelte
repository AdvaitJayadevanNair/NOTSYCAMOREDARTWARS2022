<script>
	export let player = null;
	export let players = null;
	export let team = null;
	export let i = null;
	// export let name = null;
	// export let playing = null;
	// export let alive = null;
	// export let kills = null;
	// export let revive = null;
	// export let players = null;

	let hidden = true;
</script>

<div
	on:click|stopPropagation={() => {
		hidden = !hidden;
	}}
>
	{players[player]}
	{#if !team.playing[i]}
		<span title="Not Playing">👻</span>
	{:else if team.alive[i]}
		<span title="Alive">😃</span>
	{:else}
		<span title="Dead">💀</span>
	{/if}
	{#if !hidden}
		<div class="slanted">
			<div>Revives: {team.revive[i]}</div>
			<div>Kills({team.kills[i].length}):</div>
			{#each team.kills[i] as kill}
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
