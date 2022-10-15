<script lang="ts">
    // import { notificator } from "../store/notification";

    export let score = 0;
    export let sign;
    export let color;
</script>

<div class="panel" style="border: 2px solid {color};">
    <div class="previous" style="color: {color};">{sign}</div>

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

    .previous {
        flex-grow: 4;
        font-size: 2.4em;
    }

    .count {
        flex-grow: 6;
        font-size: 1.9em;
    }
</style>
