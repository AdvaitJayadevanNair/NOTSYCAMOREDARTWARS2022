<script>
	export let match = null;
	export let judges = null;
	export let players = null;
	export let teams = null;
	import { onMount } from 'svelte';
	import Team from './team.svelte';

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
		<b
			>{teams[match.team1.id].name} VS. {teams[match.team2.id].name}({playersAlive(
				match.team1.alive,
				match.team1.playing
			)}-{playersAlive(match.team2.alive, match.team2.playing)})</b
		>
	</div>
	<Team
		name={teams[match.team1.id].name}
		judge={judges[match.judge]}
		{players}
		teamPlayers={teams[match.team1.id].players}
		playing={match.team1.playing}
		alive={match.team1.alive}
		kills={match.team1.kills}
		revives={match.team1.revives}
		teamAlive={playersAlive(match.team1.alive, match.team1.playing) > 0}
		winner={playersAlive(match.team2.alive, match.team2.playing) == 0}
	/>
	<Team
		name={teams[match.team2.id].name}
		judge={judges[match.judge]}
		{players}
		teamPlayers={teams[match.team2.id].players}
		playing={match.team2.playing}
		alive={match.team2.alive}
		kills={match.team2.kills}
		revives={match.team2.revives}
		teamAlive={playersAlive(match.team2.alive, match.team2.playing) > 0}
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
