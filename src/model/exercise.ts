import type { LetterID, Letter } from "./alphabet";

export class Exercise {
    ID: LetterID;
    assignement: string;
    hint: string;
    answer: {
        expected: string;
        given: string;
    }

    constructor(alphabet: string, letter: Letter) {
        this.assignement = `Translate this ${alphabet} into romaji`;
        this.hint = letter.symbol;
        this.ID = letter.id;
        this.answer = {
            expected: letter.romaji,
            given: ""
        }
    }

    checkAnswer(): boolean {
        return this.answer.given.toLowerCase() === this.answer.expected.toLowerCase();
    }

    score(): 0 | 1 {
        return this.checkAnswer() ? 1 : 0;
    }

}

export type Lesson = Array<Exercise>