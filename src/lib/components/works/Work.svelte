<script lang="ts">
    export let title: string = "Work Title";
    export let description: string = "Description";
    export let position: string = "Position";
    export let photo: string = "";
    export let date: string = "";
</script>

<div class={"work"}>
    <div class="left">
        <img src="{photo}" alt="work_photo" />
    </div>
    <div class="right align-right">
        <p class="title ">{title} <span class="position gradient-text">{position}</span></p>
        <p class="date">{date}</p>
        <p class="description">{description}</p>
    </div>

</div>

<style lang="scss">
    .work {
        width: 100%;
        display: inline-flex;
        gap: calc(var(--gap) * 4);
        margin-bottom: calc(var(--gap) * 4);
        
        .right {
            display: inline-flex;
            flex-direction: column;
            gap: calc(var(--gap) / 2);
            justify-content: center;
            text-align: justify;

            .title {
                font-size: 2rem;
                font-weight: bold;

                .position {
                    font-weight:100;
                    margin-left: var(--gap);
                }
            }

            .date {
                font-size: 1.25rem;
                font-weight:100;

            }
        }

        .left {
            width: fit-content;
            display: inline-flex;
            align-items: center;
            img {
                max-width: 160px;
            }
        }
    }
</style>