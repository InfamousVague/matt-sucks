<script lang="ts">

</script>

<div id="intro">
    <div class="left">

        <p class="heading">
            Your Next <span class="gradient-text">Software Engineer</span>
        </p>
        <p class="subtext">
            I am a versatile developer with a strong track record <b>leading fast-moving startups</b> from zero to launch, crafting beautiful and intuitive <b>user interfaces</b>, and building powerful <b>web and desktop apps</b>.
        </p>
    </div>
    <div class="right">
        <div id="about"></div>

        <img src="/splash.png" alt="">
    </div>
</div>

<style lang="scss">

#intro {
    display: inline-flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
    gap: var(--gap);

    .left {
        display: inline-flex;
        flex-direction: column;
        gap: var(--gap);
        width: 50%;

        .heading {
            font-size: 3rem;
            font-weight: bolder;
        }

        .subtext {
            font-size: 1.5rem;
        }
    }

    .right {
        width: 50%;
        display: inline-flex;
        justify-content: flex-end;
        img {
            width: 100%;
        }
    }
}

</style>