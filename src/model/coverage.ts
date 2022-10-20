import type { LetterID } from "./alphabet";

export class Mastery {
    ID: LetterID;
    stat: {
        // the number of time we encountered
        // this letter inside an exercise.
        encounter: number;
        guessed: number;
    }

    constructor({ ID, stat }) {
        this.ID = ID;
        this.stat = stat;
    }

    score(): number {
        return (this.stat.guessed / this.stat.encounter) * 100;
    }

    encountered(guessed: boolean) {
        this.stat.encounter++

        if (guessed) {
            this.stat.guessed++
        }
    }
}