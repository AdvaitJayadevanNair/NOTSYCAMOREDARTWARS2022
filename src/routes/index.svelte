<script context="module">
	export const prerender = true;
</script>

<script>
	import { onMount } from 'svelte';
    import Team from '../lib/team.svelte';

	let data = null;

	onMount(async () => {
		const res = await fetch(`data.json`);
		data = await res.json();
	});
</script>

<svelte:head>
	<meta charset="utf-8" />
	<meta http-equiv="X-UA-Compatible" content="IE=edge,chrome=1" />
	<meta name="viewport" content="width=device-width,initial-scale=1.0" />
	<link
		href="https://maxcdn.bootstrapcdn.com/font-awesome/4.2.0/css/font-awesome.min.css"
		rel="stylesheet"
	/>
	<link
		href="https://fonts.googleapis.com/css?family=Holtwood+One+SC"
		rel="stylesheet"
		type="text/css"
	/>
	<link
		href="https://fonts.googleapis.com/css?family=Kaushan+Script|Herr+Von+Muellerhoff"
		rel="stylesheet"
		type="text/css"
	/>
	<link href="https://fonts.googleapis.com/css?family=Abel" rel="stylesheet" type="text/css" />
	<link
		href="https://fonts.googleapis.com/css?family=Istok+Web|Roboto+Condensed:700"
		rel="stylesheet"
		type="text/css"
	/>
	<title>!!!NOTSYCAMOREDARTWARS2022!!!</title>
</svelte:head>

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
		<div class="container">
            <div class="round round-one current">
                <div class="round-details">Week 1<br /><span class="date">March 28</span></div>
                {#each data["week1"] as match}
                    <ul class="matchup">
                        <Team judge={match.judge} teamName={data['teams'][match.a]['name']} players={data['teams'][match.a]['players']}/>
                        <Team judge={match.judge} teamName={data['teams'][match.b]['name']} players={data['teams'][match.b]['players']}/>
                    </ul>
                {/each}
            </div>
            <!-- END ROUND ONE -->
            <div class="round round-two">
                <div class="round-details">Week 2<br /><span class="date">April 4</span></div>
                {#each data["week2"] as match}
                    <ul class="matchup">
                        <Team judge={match.judge} teamName={data['teams'][match.a]['name']} players={data['teams'][match.a]['players']}/>
                        <Team judge={match.judge} teamName={data['teams'][match.b]['name']} players={data['teams'][match.b]['players']}/>
                    </ul>
                {/each}
            </div>
		</div>
	</section>
{/if}

<section class="share">
	<div class="share-wrap">
		<a
			class="share-icon"
			href="https://docs.google.com/document/d/10t1YIo_EGLmgZqN013qmsDePMnURhsWIExMa9-9V1qY/edit?usp=sharing"
			><i class="fa fa-book" /></a
		>
		<a class="share-icon" href="https://twitter.com/dartwarz2022"><i class="fa fa-twitter" /></a>
		<a
			class="share-icon"
			href="https://venmo.com/code?user_id=2815419379351552226&created=1647963893.720152&printed=1"
			><i class="fa fa-usd" /></a
		>
	</div>
</section>
