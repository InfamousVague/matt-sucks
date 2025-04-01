<script lang="ts">

</script>

<div id="nav">
    <div class="name">
        <p>Matthew Wisniewski</p>
    </div>

    <div class="controls">
        <a href="#about" class="nav-item">
            About
        </a>
        <a href="#skills" class="nav-item">
            Skills
        </a>
        <a href="#history" class="nav-item">
            History
        </a>
        <a href="#socials" class="nav-item">
            Socials
        </a>
        <a  href="#contact" class="nav-item">
            Contact
        </a>
    </div>
</div>

<style lang="scss">

    #nav {
        display: inline-flex;
        height: fit-content;
        justify-content: space-between;
        align-items: center;
        gap: var(--gap);

        .name {
            color: var(--cream);
            font-size: 1.5rem;
            font-weight: bold;

        }

        .nav-item {
            background-color: transparent;
            color: var(--cream);
            border: none;
            cursor: pointer;
            padding: calc(var(--padding) / 2) var(--padding);
            font-size: var(---interactive-text);
            border-radius: var(--radius);
            text-decoration: none;

            &:hover {
                background-color: var(--foreground);
            }
        }
    }

</style>