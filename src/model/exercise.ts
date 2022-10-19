import type { LetterID } from "./alphabet";

export class Exercise {
    ID: LetterID;
    assignement: string;
    hint: string;
    answer: {
        expected: string;
        given: string;
    }

    checkAnswer(): boolean {
        return this.answer.given.toLowerCase() === this.answer.expected.toLowerCase();
    }

    score(): 0 | 1 {
        return this.checkAnswer() ? 1 : 0;
    }

}

export type Lesson = Array<Exercise>