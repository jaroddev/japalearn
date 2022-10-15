<script lang="ts">
    export let score = 0;
</script>

<div class="panel">
    <slot name="sign" />

    <div class="count">
        {score}
    </div>
</div>

<style>
    .panel {
        box-sizing: border-box;
        height: 100%;
        width: 100%;

        display: flex;
        align-items: center;
        text-align: center;
    }

    div :global([slot="sign"]) {
        flex-grow: 4;
        font-size: 2.4em;
    }

    .count {
        flex-grow: 6;
        font-size: 1.9em;
    }
</style>
