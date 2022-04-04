<script>
	export let match = null;
	export let judges = null;
	export let players = null;
	export let teams = null;
	import { onMount } from 'svelte';
	import Team from './editTeam.svelte';

	function playersAlive(alive, playing) {
		if (!alive || !playing) return;
		let c = 0;
		for (var i = 0; i < alive.length; i++) {
			if (playing[i] && alive[i]) {
				c++;
			}
		}
		return c;
	}
</script>

<ul class="matchup">
	<div>
		<b>
			{teams[match.team1.id].name} VS. {teams[match.team2.id].name}({playersAlive(
				match.team1.alive,
				match.team1.playing
			)}-{playersAlive(match.team2.alive, match.team2.playing)})
		</b>
		<select bind:value={match.judge}>
			{#each judges as judge, i}
				<option value={i}>{judge}</option>
			{/each}
		</select>
	</div>
	<Team
		{match}
		{players}
		team={match.team1}
		{teams}
		aliveCount={playersAlive(match.team1.alive, match.team1.playing)}
		winner={playersAlive(match.team2.alive, match.team2.playing) == 0}
	/>
	<Team
		{match}
		{players}
		team={match.team2}
		{teams}
		aliveCount={playersAlive(match.team2.alive, match.team2.playing)}
		winner={playersAlive(match.team1.alive, match.team1.playing) == 0}
	/>
</ul>

<style>
	.matchup {
		margin: 0;
		width: 100%;
		padding: 10px 0;
		min-height: 60px;
		-webkit-transition: all 0.2s;
		transition: all 0.2s;
	}
</style>
