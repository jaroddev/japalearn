<script lang="ts">
  import { Alphabet, KanaFactory } from "./model/alphabet.js";
  import { KanaSubsetMock } from "./data/mock.js";

  import SubSet from "./lib/SubSet.svelte";

  const mock = new KanaSubsetMock();
  let alphabet: Alphabet = KanaFactory.createKana(mock);
</script>

<main>
  {#each alphabet.subsets as { name, letters }}
    <SubSet {name} {letters} />
  {/each}
</main>

<style>
  main {
    width: 50%;
    margin: 0 auto;
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
