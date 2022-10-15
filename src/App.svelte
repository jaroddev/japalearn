<script lang="ts">
  import { Route } from "tinro";

  import LetterGrid from "./pages/LetterGrid.svelte";
  import Exercise from "./pages/Exercise.svelte";
</script>

<header>
  <nav>
    <a href="/japalearn/">Grille</a>
    <a href="/japalearn/exercise">Exercice</a>
  </nav>
</header>

<main>
  <Route path="/japalearn/"><LetterGrid /></Route>
  <Route path="/japalearn/exercise"><Exercise /></Route>
</main>

<style>
  header {
    padding: 16px 0;
    background-color: black;
    color: white;
  }

  header nav {
    height: 100%;
    display: flex;
    padding: 0 16px;
  }

  header a {
    margin: 0 20px;
    color: white;
    text-decoration: none;
    font-family: Verdana, Geneva, Tahoma, sans-serif;
  }
</style>
