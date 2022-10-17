<script lang="ts">
    import { KanaType, type Letter } from "../model/alphabet.js";
    import { alphabetSwitcher } from "../store/alphabet.js";

    import LetterTile from "./LetterTile.svelte";

    export let letters: Array<Letter>;
</script>

<!-- A subset of an alphabet -->
<div class="subset">
    <slot name="header" />

    <div class="grid">
        {#each letters as { romaji, hiragana, katakana }}
            <LetterTile
                japanese={$alphabetSwitcher === KanaType.Hira
                    ? hiragana.symbol
                    : katakana.symbol}
                {romaji}
            />
        {/each}
    </div>
</div>

<style>
    .subset {
        padding: 20px 0;
    }

    .grid {
        display: grid;
        grid-template-columns: repeat(5, 1fr);
        gap: 15px;
    }
</style>
