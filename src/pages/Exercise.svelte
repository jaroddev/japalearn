<script lang="ts">
    import { MasteryLocalStorage } from "../data/local";
    import { ExerciseMock } from "../data/mock";
    import type { Lesson } from "../model/exercise";

    import Score from "../lib/Score.svelte";
    import ExerciseAnswerInput from "../lib/ExerciseAnswerInput.svelte";

    const repo = new MasteryLocalStorage();
    const mock = new ExerciseMock();

    let lesson: Lesson = mock.generateLesson();
    let lessonIndex = 0;

    let score = 0;

    $: exercise = lesson[lessonIndex];
    $: hasNext = lessonIndex + 1 < lesson.length;

    function nextExercise() {
        score = lesson.reduce((accumulator, current) => {
            return accumulator + current.score();
        }, 0);

        repo.increase(exercise.ID, exercise.checkAnswer());

        if (hasNext) {
            lessonIndex++;
        }

        if (!hasNext) {
            console.log("The lesson just ended");
        }
    }
</script>

<div class="layout">
    <div class="card assignment">
        <p class="">{exercise.assignement}</p>
    </div>

    <div class="card score">
        <Score {score}>
            <div slot="sign">
                {#if lessonIndex == 0}
                    <div style="color: grey;">?</div>
                {:else if lesson[lessonIndex - 1].score() == 0}
                    <div style="color: red;">X</div>
                {:else if lesson[lessonIndex - 1].score() == 1}
                    <div style="color: green;">+</div>
                {/if}
            </div>
        </Score>
    </div>

    <div class="card hint" style="border: 1px solid transparent;">
        <div class="center">{exercise.hint}</div>
    </div>

    <div class="answer" style="border: 1px solid transparent;">
        <ExerciseAnswerInput {exercise} {nextExercise} />
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
