<script lang="ts">
    import { AlphabetType } from "../model/alphabet.js";
    import { AlphabetFactory } from "../data/mock.js";
    import { alphabetSwitcher } from "../store/alphabet";

    import SubSet from "../lib/SubSet.svelte";
    import SubsetHeader from "../lib/SubsetHeader.svelte";

    $: mock = AlphabetFactory.getRepo($alphabetSwitcher);
    $: alphabet = mock.getAlphabet();
</script>

<div class="container">
    <!-- <Progress progress="96" /> -->

    {#each alphabet as { name, letters }}
        <SubSet {letters}>
            <div slot="header">
                <SubsetHeader {name} />
            </div>
        </SubSet>
    {/each}
</div>

<button class="switch" on:click={alphabetSwitcher.changeType}>
    {$alphabetSwitcher === AlphabetType.Hira ? "Katakana" : "Hiragana"}
</button>

<style>
    .container {
        width: 50%;
        margin: 0 auto;
    }

    @media screen and (max-width: 768px) {
        .container {
            width: 70%;
        }
    }

    @media screen and (max-width: 425px) {
        .container {
            width: 95%;
        }
    }

    .switch {
        z-index: 3;
        position: fixed;
        bottom: 50px;
        right: 100px;

        padding: 5px 20px;
        border: solid 1px transparent;

        border-radius: 15px;

        font-size: 1em;
        font-weight: 700;
    }
</style>
