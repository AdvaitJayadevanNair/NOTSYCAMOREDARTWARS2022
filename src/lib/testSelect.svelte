<script type="text/javascript">
	export let players = null;
	export let enemies = null;
	export let add = null;
	let index = 0;
</script>

<select bind:value={index}>
	{#each enemies as enemy}
		<option value={enemy}>{players[enemy]}</option>
	{/each}
</select>
<button on:click={() => add(index)}>Add kill</button>
