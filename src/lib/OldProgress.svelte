<script lang="ts">
    import { onDestroy, onMount } from "svelte";

    // let progress / value / amount / width /  = 0;
    export let width: number = 25;
    let interval: NodeJS.Timer;

    onMount(() => {
        interval = setInterval(() => {
            if (width < 90) {
                width++;
            }
        }, 100);
    });

    onDestroy(() => {
        clearInterval(interval);
    });
</script>

<div class="container">
    <div class="progress" style="width: {width}%;" />
</div>

<style>
    .container {
        width: 100%;
        background-color: lightgrey;

        border-radius: 16px;
    }

    .progress {
        height: 30px;
        background-color: green;

        border-radius: inherit;
    }
</style>
