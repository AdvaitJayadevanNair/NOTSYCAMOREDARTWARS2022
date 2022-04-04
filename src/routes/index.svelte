<script context="module">
	export const prerender = true;
</script>

<script>
	import { onMount } from 'svelte';
	import Hero from '../lib/hero.svelte';
	import Footer from '../lib/footer.svelte';
	import Match from '../lib/match.svelte';

	let data,
		lastUpdate,
		judges,
		players,
		teams,
		weeks = null;

	onMount(async () => {
		const res = await fetch(`dataV2.json`);
		data = await res.json();
		lastUpdate = data.lastUpdate;
		judges = data.judges;
		players = data.players;
		teams = data.teams;
		weeks = data.weeks;
		console.log('Fetched Data:', data, lastUpdate, players, teams, week1);
	});
</script>

<svelte:head />

<Hero />

{#if !data}
	<h1>Loading...</h1>
{/if}

{#if data}
	<section id="bracket">
		<div class="info">Last Update: {lastUpdate}</div>
		<div class="info">👻 = Not Playing | 😃 = Alive | 💀 = Dead | 👑 = Winner</div>
		<div class="info">Click on team for players</div>
		<div class="container">
			{#each weeks as week}
				<div class="week {week.current ? 'current' : ''}">
					<div class="week-details">{week.name}<br /><span class="date">{week.date}</span></div>
					{#each week.matches as match}
						<Match {match} {judges} {players} {teams} />
					{/each}
				</div>
			{/each}
		</div>
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
		height: 40px;
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
