<script lang="ts">
  import { Alphabet, KanaFactory, KanaType } from "./model/alphabet.js";
  import { KanaSubsetMock } from "./data/mock.js";
  import { alphabetSwitcher } from "./store/alphabet";

  import SubSet from "./lib/SubSet.svelte";
  import SubsetHeader from "./lib/SubsetHeader.svelte";

  const mock = new KanaSubsetMock();
  let alphabet: Alphabet = KanaFactory.createKana(mock);
</script>

<main>
  {#each alphabet.subsets as { name, letters }}
    <SubSet {letters}>
      <div slot="header">
        <SubsetHeader {name} />
      </div>
    </SubSet>
  {/each}

  <button class="switch" on:click={alphabetSwitcher.changeType}>
    {$alphabetSwitcher === KanaType.Hira ? "Katakana" : "Hiragana"}
  </button>
</main>

<style>
  main {
    width: 50%;
    margin: 0 auto;
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

  @media screen and (max-width: 768px) {
    main {
      width: 70%;
    }
  }

  @media screen and (max-width: 425px) {
    main {
      width: 95%;
    }
  }
</style>
