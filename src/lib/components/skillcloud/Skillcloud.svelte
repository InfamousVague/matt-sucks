<script lang="ts">
	import Skill from "./Skill.svelte";

    export let skills: string[] = [];
</script>

<div id="skillcloud">
    {#each skills as skill}
        <Skill {skill} />
    {/each}
</div>

<style lang="scss">
    #skillcloud {
        display: inline-flex;
        gap: var(--gap);
        flex-wrap: wrap;
    }
</style>