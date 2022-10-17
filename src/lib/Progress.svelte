<script lang="ts">
    export let progress = null;
    export let size = 70;

    $: radius = size / 2 - size / 5;

    function circumference(radius: number): number {
        if (radius == 0) return 0;
        return Math.PI * (radius + radius);
    }

    $: defaultStyle = `
        stroke-dasharray: ${circumference(radius)};
        stroke-dashoffset: ${circumference(radius) - 2};

        animation: none;
    `;

    $: progressStyle = `
        animation: dash 1.5s linear forwards;

        stroke-dasharray: ${circumference(radius)};
        stroke-dashoffset: ${circumference(radius) - 2};
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
    }

    @keyframes dash {
        to {
            stroke-dashoffset: 0;
        }
    }
</style>
