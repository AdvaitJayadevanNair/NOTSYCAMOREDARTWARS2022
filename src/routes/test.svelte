<script context="module">
	export const prerender = true;
</script>

<script>
	import { onMount } from 'svelte';
	import Select from '../lib/testSelect.svelte';

	let loading = true;
	let lastUpdate,
		judges,
		players,
		teams,
		weeks = null;

	onMount(async () => {
		const res = await fetch(`newData.json`);
		let data = await res.json();
		lastUpdate = data.lastUpdate;
		judges = data.judges;
		players = data.players;
		weeks = data.weeks;
		teams = data.teams;
		console.log('Fetched Data:', {
			lastUpdate,
			judges,
			players,
			weeks,
			teams
		});
		loading = false;
	});

	function getData() {
		console.log(
			'Get Data:',
			JSON.stringify(
				{
					lastUpdate,
					judges,
					players,
					weeks,
					teams
				},
				null,
				4
			)
		);
	}
</script>

{#if loading}
	<h1>Loading...</h1>
{/if}

{#if !loading}
	<!-- <h1>Players</h1>
	{#each players as player, playerIndex}
		<div>
			{playerIndex}. <input type="text" bind:value={player} />
		</div>
	{/each}
	<h1>Teams</h1>
	{#each teams as team, teamIndex}
		<div>
			{teamIndex}. <input type="text" bind:value={team.name} />
		</div>
	{/each} -->

	<h1>Weeks</h1>
	{#each weeks as week, weekIndex}
		<div class="week">
			{week.name}
			{#each week.matches as match, matchIndex}
				<div class="match">
					<div>Judge: <input type="number" bind:value={match.judge} /></div>
					<div class="team">
						<div>Team1: {teams[match.team1.id].name}</div>
						{#each teams[match.team1.id].players as player, playerIndex}
							<div class="player">
								{players[player]}
								<p>
									Alive: <input type="checkbox" bind:checked={match.team1.alive[playerIndex]} />
								</p>
								<p>
									Playing: <input type="checkbox" bind:checked={match.team1.playing[playerIndex]} />
								</p>
								<p>
									Revives: <input type="number" bind:value={match.team1.revives[playerIndex]} />
								</p>
								<p>Kills:</p>
								{#each match.team1.kills[playerIndex] as kill, killIndex}
									<p>
										{players[kill]}<button
											on:click={() => {
												match.team1.kills[playerIndex].splice(killIndex, 1);
												match.team1.kills[playerIndex] = match.team1.kills[playerIndex];
											}}>X</button
										>
									</p>
								{/each}
								<Select
									{players}
									enemies={teams[match.team2.id].players}
									add={(index) => {
										match.team1.kills[playerIndex].push(index);
										match.team2.kills = match.team2.kills;
									}}
								/>
							</div>
						{/each}
					</div>
					<div class="team">
						<div>Team2: {teams[match.team2.id].name}</div>
						{#each teams[match.team2.id].players as player, playerIndex}
							<div class="player">
								{players[player]}
								<p>
									Alive: <input type="checkbox" bind:checked={match.team2.alive[playerIndex]} />
								</p>
								<p>
									Playing: <input type="checkbox" bind:checked={match.team2.playing[playerIndex]} />
								</p>
								<p>
									Revives: <input type="number" bind:value={match.team2.revives[playerIndex]} />
								</p>
								<p>Kills:</p>
								{#each match.team2.kills[playerIndex] as kill}
									<p>{players[kill]}<button
											on:click={() => {
												match.team2.kills[playerIndex].splice(killIndex, 1);
												match.team2.kills[playerIndex] = match.team2.kills[playerIndex];
											}}>X</button
										></p>
								{/each}
								<Select
									{players}
									enemies={teams[match.team1.id].players}
									add={(index) => {
										match.team2.kills[playerIndex].push(index);
										match.team2.kills = match.team2.kills;
									}}
								/>
							</div>
						{/each}
					</div>
				</div>
			{/each}
		</div>
	{/each}

	<button on:click={getData}>Get Data</button>
{/if}

<style type="text/css">
	.week,
	.match,
	.team,
	.player {
		border: 2px solid black;
	}
	.player {
		background-color: orange;
	}
</style>
