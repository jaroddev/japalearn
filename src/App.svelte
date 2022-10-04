<script lang="ts">
  import { onMount } from "svelte";

  import type { Repository, Letter } from "./data/mock.js";
  import { MockDAO } from "./data/mock.js";

  import LetterTile from "./lib/LetterTile.svelte";

  const repo: Repository = new MockDAO();
  let letters: Array<Letter> = [];

  onMount(() => {
    letters = repo.ListLetter();
  });
</script>

<main>
  <div class="grid">
    {#each letters as { romaji, hiragana }}
      <LetterTile japanese={hiragana} {romaji} />
    {/each}
  </div>
</main>

<style>
  main {
    width: 30%;
    margin: 0 auto;
  }

  .grid {
    display: grid;
    grid-template-columns: repeat(5, 1fr);
    gap: 15px;
  }
</style>
