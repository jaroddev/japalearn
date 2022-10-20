import type { LetterID, Subset } from "../model/alphabet";
import type { Mastery } from "../model/coverage";

export interface AlphabetRepo {
    getAlphabet(): Array<Subset>
}

export interface MasteryRepo {
    get(ID: LetterID): Mastery
    increase(ID: LetterID, guessed: boolean)
}