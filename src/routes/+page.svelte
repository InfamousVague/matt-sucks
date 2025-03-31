<script lang="ts">
    import { Intro } from "$lib";
	import Skillcloud from "$lib/components/skillcloud/Skillcloud.svelte";
	import Works from "$lib/components/works/Works.svelte";
</script>

<Intro />
<Skillcloud skills={[
    "JavaScript", "CSS", "Rust", "React", "Svelte", "Python", "Vue", "NodeJS", "SCSS", "Leadership", "Product Owner",
    "Scrum", "Video Editing", "Content Creation", "Solidity", "Unit Testing", "GIT", "Figma", "UI/UX", "Adobe Suite",
    "Hiring & Interviews"
]} />
<Works />

<div id="work"></div>

<div id="contact"></div>