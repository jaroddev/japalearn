<script lang="ts">
    import type { Letter } from "../model/alphabet.js";
    import { MasteryLocalStorage } from "../data/local";

    import LetterTile from "./LetterTile.svelte";

    export let letters: Array<Letter>;

    const repo = new MasteryLocalStorage();

    function score({ id }): number {
        const mastery = repo.get(id);
        return mastery.score();
    }
</script>

<!-- A subset of an alphabet -->
<div class="subset">
    <slot name="header" />

    <div class="grid">
        {#each letters as letter}
            <LetterTile
                japanese={letter.symbol}
                romaji={letter.romaji}
                progress={score(letter)}
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
