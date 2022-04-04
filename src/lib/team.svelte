<script>
	export let name = null;
	export let judge = null;
	export let players = null;
	export let teamPlayers = null;
	export let playing = null;
	export let alive = null;
	export let kills = null;
	export let revives = null;
	export let teamAlive = null;
	export let winner = null;
	import Player from './player.svelte';
	let hidden = true;
</script>

<li
	class="team"
	style={hidden ? 'height: 25px;' : ''}
	on:click={() => {
		hidden = !hidden;
	}}
>
	<b>
		{name}
		{#if winner}
			<span title="Winner">👑</span>
		{:else if teamAlive}
			<span title="Alive">😃</span>
		{:else}
			<span title="Dead">💀</span>
		{/if}
	</b>
	<span class="score">{judge}</span>
	<div style="padding-left: 15px;">
		{#each teamPlayers as player, i}
			<Player
				name={players[player]}
				kills={kills[i]}
				revive={revives[i]}
				playing={playing[i]}
				alive={alive[i]}
				{players}
			/>
		{/each}
	</div>
</li>

<style>
	.team {
		padding: 0 5px;
		margin: 3px 0;
		min-height: 25px;
		line-height: 25px;
		white-space: nowrap;
		overflow: hidden;
		position: relative;
		cursor: pointer;
	}
</style>
