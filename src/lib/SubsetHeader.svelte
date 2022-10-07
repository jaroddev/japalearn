<script lang="ts">
    export let name: string;
</script>

<p class="name"><span>* {name} *</span></p>

<style>
    .name {
        font-size: 1.5em;
        text-align: center;

        border-bottom: 4px solid #000;
        line-height: 0.1em;
    }

    .name span {
        background-color: white;
        padding: 0 15px;
    }
</style>
