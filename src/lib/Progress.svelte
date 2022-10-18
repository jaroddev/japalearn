<script lang="ts">
    import { onDestroy, onMount } from "svelte";

    export let progress = null;
    export let size = 70;
    $: radius = size / 2 - size / 5;

    $: dashOffset = circumference(radius);

    let timeout: NodeJS.Timeout;

    onMount(() => {
        timeout = setTimeout(() => {
            dashOffset = ((100 - progress) / 100) * circumference(radius);
        }, 1200);
    });

    onDestroy(() => {
        clearTimeout(timeout);
    });

    function circumference(radius: number): number {
        if (radius == 0) return 0;
        return Math.PI * (radius + radius);
    }

    $: defaultStyle = `
        stroke-dasharray: ${circumference(radius)};
        stroke-dashoffset: ${circumference(radius) - 2};
    `;

    $: progressStyle = `
        stroke-dasharray: ${circumference(radius)};
        stroke-dashoffset: ${dashOffset};
    `;

    $: style = progress > 0 ? progressStyle : defaultStyle;
</script>

<!-- stroke-miterlimit="10" -->
<svg class="circular" style="width: {size}px; height: {size}px;">
    <circle
        class="path stroke-green"
        fill="grey"
        fill-opacity="10%"
        stroke-width="3"
        cx={size / 2}
        cy={size / 2}
        r={radius}
        {style}
    />
</svg>

<style>
    .circular {
        position: relative;
    }

    .stroke-green {
        stroke: green;
    }

    .path {
        stroke-linecap: round;
        transition: stroke-dashoffset 1.5s;
    }
</style>
