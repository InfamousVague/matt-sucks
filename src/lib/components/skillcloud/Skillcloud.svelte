<script lang="ts">
	import Skill from "./Skill.svelte";

    export let skills: string[] = [];
</script>

<div id="skills">
    <h2>Skills</h2>
    <div id="skillcloud">
        {#each skills as skill}
            <Skill {skill} />
        {/each}
    </div>
</div>


<style lang="scss">
    #skills {
        display: inline-flex;
        flex-direction: column;
        #skillcloud {
            display: inline-flex;
            gap: var(--gap);
            flex-wrap: wrap;
        }
    }
</style>