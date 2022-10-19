<script lang="ts">
    import type { Exercise } from "../model/exercise";

    export let exercise: Exercise;

    export let nextExercise: () => void;

    function handleKeyDown(e: KeyboardEvent) {
        if (e.key == "Enter") {
            nextExercise();
        }
    }

    $: disabled = exercise.answer.given === "";
</script>

<input
    class="card"
    type="text"
    placeholder="translation"
    bind:value={exercise.answer.given}
    on:keydown={handleKeyDown}
/>

<button on:click={nextExercise} {disabled} class:disabled>
    Check if valid
</button>

<style>
    /* This class should be shared if possible */
    .card {
        box-shadow: 1px 1px 4px 0px #000000;
    }

    input {
        height: 60%;
        font-size: 3em;

        text-align: center;
    }

    button {
        height: 20%;
        width: 100%;

        background-color: green;
        text-align: center;
        color: whitesmoke;

        font-weight: 900;
        font-size: 1.4em;
    }

    button.disabled {
        background-color: rgba(0, 0, 0, 0.393);
    }
</style>
