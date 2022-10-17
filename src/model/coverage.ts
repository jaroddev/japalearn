import type { LetterID } from "./alphabet";

export class Mastery {
    ID: LetterID;
    stat: {
        // the number of time we encountered
        // this letter inside an exercise.
        encounter: number;
        guessed: number;
    }

    score(): number {
        return this.stat.guessed / this.stat.encounter;
    }
}

export interface MasteryRepo {
    get(ID: LetterID): Mastery
    increase(ID: LetterID)
}