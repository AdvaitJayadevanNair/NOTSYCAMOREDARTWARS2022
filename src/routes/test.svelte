<script context="module">
	export const prerender = true;
</script>

<script>
	import { onMount } from 'svelte';
	import Hero from '../lib/hero.svelte';
	import Footer from '../lib/footer.svelte';
	import Match from '../lib/editMatch.svelte';

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

	function addWeek() {
		weeks.push({
			name: 'Week ?',
			current: true,
			date: '?',
			matches: []
		});
		weeks = weeks;
	}

	function addMatch(weekIndex) {
		weeks[weekIndex].matches.push({
			team1: {
				id: 0,
				alive: [true, true, false, true, true, true],
				playing: [true, true, true, true, true, false],
				revives: [0, 0, 1, 0, 0, 0],
				kills: [[6, 7], [], [], [8], [], []]
			},
			team2: {
				id: 1,
				alive: [true, true, true, true, true],
				playing: [true, true, true, true, true],
				revives: [0, 0, 1, 0, 0, 0],
				kills: [[0, 1], [], [], [4, 5], []]
			},
			judge: 0
		});
		weeks = weeks;
	}

	function getData() {
		console.log('Get Data:', {
			lastUpdate,
			judges,
			players,
			weeks,
			teams
		});
	}
</script>

<svelte:head />

<Hero />

{#if loading}
	<h1>Loading...</h1>
{/if}

{#if !loading}
	<section id="bracket">
		<div class="info">Last Update: <input type="text" bind:value={lastUpdate} /></div>
		<div class="info">👻 = Not Playing | 😃 = Alive | 💀 = Dead | 👑 = Winner</div>
		<div class="info">Click on team for players</div>
		<div class="container">
			{#each weeks as week, weekIndex}
				<div class="week {week.current ? 'current' : ''}">
					<div class="week-details">
						<input type="text" bind:value={week.name} />
						<br />
						<span class="date">
							<input type="text" bind:value={week.date} />
						</span>
						<br />
						Current: <input type="checkbox" bind:checked={week.current} />
					</div>
					{#each week.matches as match}
						<Match {match} {judges} {players} {teams} />
					{/each}
					<button
						on:click={() => {
							addMatch(weekIndex);
						}}>Add Match</button
					>
				</div>
			{/each}
		</div>
		<button on:click={addWeek}>Add Week</button>
		<button on:click={getData}>Get Data</button>
	</section>
{/if}

<Footer />

<style type="text/css">
	:global(body) {
		font-family: 'Istok Web', sans-serif;
		background: #000;
		min-height: 100%;
		margin: 0;
	}

	#bracket {
		overflow: hidden;
		background-color: #e1e1e1;
		background-color: rgba(225, 225, 225, 0.9);
		font-size: 12px;
		padding: 40px 0;
	}

	.container {
		max-width: 1100px;
		margin: 0 auto;
		display: block;
		display: -webkit-box;
		display: -moz-box;
		display: -ms-flexbox;
		display: -webkit-flex;
		display: -webkit-flex;
		display: flex;
		-webkit-flex-direction: row;
		flex-direction: row;
		gap: 20px;
		margin-top: 20px;
	}

	.info {
		width: 100%;
		text-align: center;
	}

	.week {
		display: block;
		/*float: left;*/
		display: -webkit-box;
		display: -moz-box;
		display: -ms-flexbox;
		display: -webkit-flex;
		display: flex;
		-webkit-flex-direction: column;
		flex-direction: column;
		width: 100%;
	}

	.week-details {
		font-family: 'Roboto Condensed', sans-serif;
		font-size: 13px;
		color: #2c7399;
		text-transform: uppercase;
		text-align: center;
		/*height: 40px;*/
	}

	.week li {
		background-color: #fff;
		box-shadow: none;
		opacity: 0.45;
	}

	.current li {
		opacity: 1;
	}

	.current li.team {
		background-color: #fff;
		box-shadow: 0 1px 4px rgba(0, 0, 0, 0.1);
		opacity: 1;
	}

	.date {
		font-size: 10px;
		letter-spacing: 2px;
		font-family: 'Istok Web', sans-serif;
		color: #3f915f;
	}

	@media screen and (min-width: 981px) and (max-width: 1099px) {
		.container {
			margin: 0 1%;
		}
	}

	@media screen and (max-width: 980px) {
		.container {
			-webkit-flex-direction: column;
			-moz-flex-direction: column;
			flex-direction: column;
		}
	}
</style>
