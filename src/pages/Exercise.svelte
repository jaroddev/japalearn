<script lang="ts">
    import {
        acceptMessage,
        notificator,
        showError,
    } from "../store/notification";
    import { ExerciseMock } from "../data/mock";
    import type { Lesson } from "../model/exercise";

    import Score from "../lib/Score.svelte";

    const mock = new ExerciseMock();

    let lesson: Lesson = mock.generateLesson();
    let lessonIndex = 0;

    let score = 0;

    let previous = -1;
    let sign = "?";
    let color = "grey";

    $: exercise = lesson[lessonIndex];
    $: hasNext = lessonIndex + 1 < lesson.length;

    function getColor(sign: string) {
        if (sign == "?") {
            return "grey";
        }

        if (sign == "X") {
            return "red";
        }

        return "green";
    }

    function getSign(previous) {
        console.log(previous);

        if (previous == -1) {
            return "?";
        }

        if (previous == 0) {
            return "X";
        }

        if (previous == 1) {
            return "+";
        }
    }

    function checkAnswer() {
        if (exercise.checkAnswer()) {
            acceptMessage("You've guessed correctly !", notificator);
            previous = 1;
        } else {
            showError("Wrong one", notificator);
            previous = 0;
        }

        sign = getSign(previous);
        color = getColor(sign);

        score = lesson.reduce((accumulator, current) => {
            return accumulator + current.score();
        }, 0);

        if (hasNext) {
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

    <div class="card score">
        <Score {score} {sign} {color} />
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
        grid-column: 2 / span 6;
        height: 100%;

        box-sizing: border-box;
    }

    .assignment p {
        font-size: 2rem;
        text-align: center;
    }

    .score {
        grid-column: 9 / span 3;
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
        .assignment {
            grid-column: 2 / span 10;
        }

        .score {
            grid-column: 2 / span 10;
            min-height: 80px;
        }

        .hint {
            grid-column: 2 / span 10;
        }

        .answer {
            grid-column: 2 / span 10;
        }
    }
</style>