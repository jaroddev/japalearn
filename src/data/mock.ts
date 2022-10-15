import type { KanaSubsetFactory, Subset, Letter } from "../model/alphabet";
import { Exercise, type Lesson } from "../model/exercise";

import common from "./common.json";
import extended from "./extended.json";
import dakuon from "./dakuon.json";
import handakuon from "./handakuon.json";

export class KanaSubsetMock implements KanaSubsetFactory {
    common(): Subset {
        return common as Subset
    }

    extended(): Subset {
        return extended as Subset
    }

    dakuon(): Subset {
        return dakuon as Subset
    }

    handakuon(): Subset {
        return handakuon as Subset
    }
}

export class ExerciseMock {
    factory: KanaSubsetFactory;

    constructor() {
        this.factory = new KanaSubsetMock();
    }

    generateExercise(alphabet: string, letter: Letter): Exercise {
        let ex = new Exercise();

        ex.assignement = `Translate this ${alphabet} into romaji`;
        ex.hint = letter[alphabet];
        ex.answer = {
            expected: letter.romaji,
            given: ""
        }

        return ex;
    }

    generateLesson(): Lesson {
        const subsets = [
            this.factory.common(),
            this.factory.extended(),
            this.factory.dakuon(),
            this.factory.handakuon()
        ];

        return subsets
            .flatMap((subset) => Drawer.drawLetters(subset.letters, 3))
            .map((letter) => {
                const alphabet = Drawer.drawAlphabet();
                const exercise = this.generateExercise(alphabet, letter)
                return exercise
            })
    }
}

class Drawer {
    static ExerciseType: Array<string> = ["katakana", "hiragana"]

    static drawAlphabet(): string {
        return Drawer.ExerciseType[
            Math.floor(Math.random() * Drawer.ExerciseType.length)
        ];
    }

    static drawLetters(letters: Array<Letter>, wanted: number): Array<Letter> {
        if (wanted > letters.length) {
            wanted = letters.length
        }

        return shuffle(letters).slice(0, wanted);
    }
}

// Drawing from array of Letter
function shuffle(array: Array<any>) {
    const clone: Array<any> = Array.from(array);
    array.length = 0;

    while (clone.length > 0) {
        const index = Math.floor(Math.random() * clone.length);

        array.push(clone[index]);
        clone.splice(index, 1);
    }

    return array;
}