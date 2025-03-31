<script lang="ts">
    export let skill: string = ""

    const availableColors: string[] = [
        "#FFCBE1", "#D6E5BD", "#F9E1A8", "#BCD8EC", "#DCCCEC", "#FFDAB4", 
        "#ffcaaf", "#ffd97d", "#90f1ef", "#d4a373", "#d6f5e3", "#9affda",
        "#9872ff", "#e1737e", "#d5edb5", "#efd2ff", "#edf1ef", "#faf3dd"
    ];
    
    function getPastel() {
        return availableColors[Math.floor(Math.random() * availableColors.length)];
    }
</script>

<div class="skill" style="background-color: {getPastel()};">
    <p>{skill}</p>
</div>

<style lang="scss">
    .skill {
        display: inline-flex;
        padding: 0.5rem 1rem;
        border-radius: 0.5rem;
        p {
            color: var(--background);
        }
    }
</style>