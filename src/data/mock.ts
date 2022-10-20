import { AlphabetType } from "../model/alphabet";
import type { Subset, Letter } from "../model/alphabet";
import { Exercise, type Lesson } from "../model/exercise";

import type { AlphabetRepo } from "./repo";

import hiragana from "./hiragana.json"
import katakana from "./katakana.json"

export class AlphabetFactory {

    static getRepo(type: AlphabetType): AlphabetRepo {

        switch (type) {
            case AlphabetType.Hira:
                return new HiraganaStub();
            case AlphabetType.Kata:
                return new KatakanaStub();
            default:
                return new HiraganaStub();
        }

    }
}

export class HiraganaStub implements AlphabetRepo {

    getAlphabet(): Array<Subset> {
        return hiragana as Array<Subset>
    }

}

export class KatakanaStub implements AlphabetRepo {
    getAlphabet(): Array<Subset> {
        return katakana as Array<Subset>
    }
}

export class ExerciseMock {
    repo: AlphabetRepo;

    generateLesson(): Lesson {
        return [...Array(10)]
            .flatMap(() => {
                const alphabet = Random.alphabet();
                const repo = AlphabetFactory.getRepo(alphabet);
                const subsets = repo.getAlphabet();
                const subset = Random.subset(subsets)
                const [letter] = Random.letters(subset.letters, 1)
                return new Exercise(alphabet, letter);
            })
    }
}

class Random {
    static alphabet(): AlphabetType {
        return Object.values(AlphabetType)[
            Math.floor(Math.random() * Object.keys(AlphabetType).length)
        ];
    }

    static subset(subsets: Array<Subset>): Subset {
        return subsets[Math.floor(Math.random() * subsets.length)]
    }

    static letters(letters: Array<Letter>, wanted: number): Array<Letter> {
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