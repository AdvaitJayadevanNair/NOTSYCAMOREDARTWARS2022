<script>
	export let match = null;
	export let players = null;
	export let team = null;
	export let teams = null;
	export let aliveCount = null;
	export let winner = null;
	import Player from './editPlayer.svelte';
	let hidden = true;

	function addPlayer() {
		team;
	}
</script>

<li
	class="team"
	style={hidden ? 'height: 25px;' : ''}
	on:click={() => {
		hidden = !hidden;
	}}
>
	<b>
		<input type="text" bind:value={teams[team.id].name} on:click|stopPropagation />
		{#if winner}
			<span title="Winner">👑</span>
		{:else if aliveCount > 0}
			<span title="Alive">😃</span>
		{:else}
			<span title="Dead">💀</span>
		{/if}
	</b>
	<span class="score">{aliveCount}</span>
	<div style="padding-left: 15px;">
		{#each teams[team.id].players as player, i}
			<Player {player} {players} {team} {i} />
		{/each}
		<button on:click|stopPropagation={addPlayer}>Add Player</button>
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
