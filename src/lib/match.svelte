<script>
	export let match = null;
	export let data = null;
	import { onMount } from 'svelte';
	import Team from './team.svelte';

	let playersA = [];
	let playersB = [];

	onMount(async () => {
		playersA = data['teams'][match.a]['players'];
		playersB = data['teams'][match.b]['players'];

		if (data.teams[match.a].isSubInPlay != undefined && data.teams[match.a].isSubInPlay != -1) {
			console.log('Here', data['teams'][match.a]['isSubInPlay']);
			playersA[data['teams'][match.a]['isSubInPlay']].isNotPlaying = true;
			playersA.push({
				...data['teams'][match.a]['sub'],
				isSub: true
			});
		} else if (data.teams[match.a].isSubInPlay != undefined) {
			playersA.push({
				...data['teams'][match.a]['sub'],
				isNotPlaying: true,
				isSub: true
			});
		}
		if (
			data['teams'][match.b]['isSubInPlay'] != undefined &&
			data.teams[match.b].isSubInPlay != -1
		) {
			playersB[data['teams'][match.b]['isSubInPlay']].isNotPlaying = true;
			playersB.push({
				...data['teams'][match.b]['sub'],
				isSub: true
			});
		} else if (data.teams[match.a].isSubInPlay != undefined) {
			playersB.push({
				...data['teams'][match.b]['sub'],
				isNotPlaying: true,
				isSub: true
			});
		}
	});

	function playersAlive(players) {
		if (!players) return;
		let c = 0;
		for (var i = 0; i < players.length; i++) {
			if (players[i].isNotPlaying != true && players[i].alive) {
				c++;
			}
		}
		return c;
	}

	//{/*playersAlive(playersA)}-{playersAlive(playersB)*/}
</script>

<ul class="matchup">
	<div>
		<b
			>{data['teams'][match.a]['name']} VS. {data['teams'][match.b]['name']}({playersAlive(
				playersA
			)}-{playersAlive(playersB)})</b
		>
	</div>
	<Team
		judge={match.judge}
		teamName={data['teams'][match.a]['name']}
		players={playersA}
		alive={playersAlive(playersA) > 0 ? true : false}
		winner={playersAlive(playersB) == 0 ? true : false}
	/>
	<Team
		judge={match.judge}
		teamName={data['teams'][match.b]['name']}
		players={playersB}
		alive={playersAlive(playersB) > 0 ? true : false}
		winner={playersAlive(playersA) == 0 ? true : false}
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
