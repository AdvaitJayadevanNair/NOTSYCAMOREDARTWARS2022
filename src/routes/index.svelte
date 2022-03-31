<script context="module">
	export const prerender = true;
</script>

<script>
	import { onMount } from 'svelte';
	import Team from '../lib/team.svelte';
	import Match from '../lib/match.svelte';

	let data = null;

	onMount(async () => {
		const res = await fetch(`data.json`);
		data = await res.json();
		console.log('Fetched Data:', data);
	});
</script>

<svelte:head />

<header class="hero">
	<div class="hero-wrap">
		<p class="intro" id="intro">NOT</p>
		<h1 id="headline">SYCAMORE DART WARS</h1>
		<p class="year"><i class="fa fa-star" /> 2022 <i class="fa fa-star" /></p>
	</div>
</header>

{#if !data}
	<h1>Loading...</h1>
{/if}

{#if data}
	<section id="bracket">
		<div class="info">Last Update: March 31 @ 3:17pm</div>
		<div class="info">👻 = Not Playing | 😃 = Alive | 💀 = Dead | 👑 = Winner</div>
		<div class="info">Click on team for players</div>
		<div class="container">
			<div class="round round-one current">
				<div class="round-details">Week 1<br /><span class="date">March 28</span></div>
				{#each data['week1'] as match}
					<Match {match} {data} />
				{/each}
			</div>
			<!-- END ROUND ONE -->
			<div class="round round-two">
				<div class="round-details">Week 2<br /><span class="date">April 4</span></div>
				{#each data['week2'] as match}
					<Match {match} {data} />
				{/each}
			</div>
		</div>
	</section>
{/if}

<section class="share">
	<div class="share-wrap">
		<span title="Rules">
			<a
				class="share-icon"
				href="https://docs.google.com/document/d/10t1YIo_EGLmgZqN013qmsDePMnURhsWIExMa9-9V1qY/edit?usp=sharing"
				><i class="fa fa-book" /></a
			>
		</span>
		<span title="Twitter">
			<a class="share-icon" href="https://twitter.com/dartwarz2022"><i class="fa fa-twitter" /></a>
		</span>
		<span title="Venmo">
			<a
				class="share-icon"
				href="https://venmo.com/code?user_id=2815419379351552226&created=1647963893.720152&printed=1"
				><i class="fa fa-usd" /></a
			>
		</span>
		<span title="Source">
			<a
				class="share-icon"
				href="https://github.com/AdvaitJayadevanNair/NOTSYCAMOREDARTWARS2022/tree/main"
				><i class="fa fa-github" /></a
			>
		</span>
		<p class="disclamer">© 2022 Advait Jayadevan Nair. All rights reserved.</p>
		<p class="disclamer">
			This website and any content on it is not assoiated with Sycamore High School.
		</p>
	</div>
</section>

<style type="text/css">
	.disclamer {
		color: white;
	}
	.info {
		width: 100%;
		text-align: center;
	}
</style>
