export class Exercise {
    assignement: string;
    hint: string;
    answer: {
        expected: string;
        given: string;
    }

    checkAnswer(): boolean {
        return this.answer.given.toLowerCase() === this.answer.expected.toLowerCase();
    }

}