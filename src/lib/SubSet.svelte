<script lang="ts">
    import type { Letter } from "../model/alphabet.js";

    import LetterTile from "./LetterTile.svelte";

    export let letters: Array<Letter>;
    export let name: string;
</script>

<!-- A subset of an alphabet -->
<div class="subset">
    <p class="name">{name}</p>

    <div class="grid">
        {#each letters as { romaji, hiragana }}
            <LetterTile japanese={hiragana} {romaji} />
        {/each}
    </div>
</div>

<style>
    .subset {
        padding: 20px 0;
    }

    .name {
        font-size: 1.5em;
        text-align: center;
    }

    .grid {
        display: grid;
        grid-template-columns: repeat(5, 1fr);
        gap: 15px;
    }
</style>
