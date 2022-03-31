<script>
	export let judge = 'Judge';
	export let alive = true;
	export let winner = false;
	export let teamName = 'TeamName';
	export let players = ['Player 1'];
	let hidden = true;
</script>

<li
	class="team team-top"
	style={hidden ? 'height: 25px;' : ''}
	on:click={() => {
		hidden = !hidden;
	}}
>
	<b>
		{teamName}
		{#if winner}<span title="Winner">👑</span>{:else if alive}<span title="Alive">😃</span
			>{:else}<span title="Dead">💀</span>{/if}
	</b>
	<span class="score">{judge}</span>
	<div>
		{#each players as player}
			<div>
				{player.name}
				{#if player.isNotPlaying}
					<span title="Not Playing">👻</span>
				{:else if player.alive}<span title="Alive">😃</span>{:else}<span title="Dead">💀</span>{/if}
			</div>
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
