<script lang="ts">
    import {
        acceptMessage,
        notificator,
        showError,
    } from "../store/notification";
    import { Drawer, KanaSubsetMock } from "../data/mock";
    import type { Exercise } from "../model/exercise";

    const mock = new KanaSubsetMock();
    let lesson: Array<Exercise> = Drawer.generateLesson(mock);
    let lessonIndex = 0;

    console.log(lesson);

    $: exercise = lesson[lessonIndex];
    $: hasNext = lessonIndex + 1 < lesson.length;

    function checkAnswer() {
        console.log("before check answer", exercise);

        if (exercise.checkAnswer()) {
            console.log("accept");

            acceptMessage("You've guessed correctly !", notificator);
        } else {
            console.log("reject");

            showError("Wrong one", notificator);
        }

        console.log("before has Next", lessonIndex, lesson.length);

        if (hasNext) {
            console.log("hasNext");
            lessonIndex++;
        }
    }

    function handleKeyDown(e: KeyboardEvent) {
        if (e.key == "Enter") {
            checkAnswer();
        }
    }
</script>

<div class="layout">
    <div class="card assignment">
        <p class="">{exercise.assignement}</p>
    </div>

    <div class="card hint" style="border: 1px solid transparent;">
        <div class="center">{exercise.hint}</div>
    </div>

    <div class="answer" style="border: 1px solid transparent;">
        <input
            class="card"
            type="text"
            placeholder="translation"
            bind:value={exercise.answer.given}
            on:keydown={handleKeyDown}
        />

        <button on:click={checkAnswer}> Check if valid </button>
    </div>
</div>

<style>
    .layout {
        display: grid;
        grid-template-columns: repeat(12, 1fr);
        row-gap: 20px;

        padding: 20px 0;
        width: 100vw;
    }

    .card {
        box-shadow: 1px 1px 4px 0px #000000;
    }

    .assignment {
        padding: 20px 0;
        grid-column: 2 / span 10;
        height: 100%;

        box-sizing: border-box;
    }

    .assignment p {
        font-size: 2rem;
        text-align: center;
    }

    .hint {
        grid-column: 2 / span 4;
        height: 200px;

        display: flex;
    }

    .hint .center {
        text-align: center;
        font-size: 3em;
        font-weight: 600;

        align-self: center;
        margin: 0 auto;
    }

    .answer {
        grid-column: 8 / span 4;

        display: flex;

        flex-direction: column;

        justify-content: space-between;
    }

    .answer input {
        height: 60%;
        font-size: 3em;

        text-align: center;
    }

    .answer button {
        height: 20%;
        width: 100%;

        background-color: green;
        text-align: center;
        color: whitesmoke;

        font-weight: 900;
        font-size: 1.4em;
    }

    @media screen and (max-width: 700px) {
        .hint {
            grid-column: 2 / span 10;
        }

        .answer {
            grid-column: 2 / span 10;
        }
    }
</style>
