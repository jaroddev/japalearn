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
    width: 30%;
    margin: 0 auto;
  }
</style>
