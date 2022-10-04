<script lang="ts">
    export let japanese: string;
    export let romaji: string;

    function sound() {
        console.log("japanese is ", japanese, " and romaji is ", romaji);
    }
</script>

<button class="letter" on:click={sound}>
    <p class="japanese">{japanese}</p>
    <p>{romaji}</p>
</button>

<style>
    button {
        border-radius: 8px;
        border: 1px solid transparent;

        padding: 0;
        margin: 0;
        font-size: 1.2em;
        font-family: inherit;
        cursor: pointer;
        transition: border-color 0.25s;
    }

    button:hover {
        border-color: #191134;
    }

    button > p {
        margin: 0;
        padding: 0;
    }

    .japanese {
        font-family: "Kosugi" cursive;
        font-weight: 500;
        font-size: 1.3em;
    }

    button:focus,
    button:focus-visible {
        outline: 4px auto -webkit-focus-ring-color;
    }
</style>
