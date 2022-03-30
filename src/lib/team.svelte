<script>
    export let judge = "Judge";
    export let teamName = "TeamName";
    export let players = [
        "Player 1"
    ];
    let hidden = true;
    
</script>

<li class="team team-top" style={hidden ? "height: 25px;" : ""} on:click={() => {hidden = !hidden}}>
    {teamName}<span class="score">{judge}</span>
    <div>
        {#each players as player}
            <div>{player}</div>
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