export type LetterID = number;

export class Letter {
    id: LetterID;
    romaji: string;
    symbol: string;
}

// is it used somewhere ??
export class Alphabet {
    subsets: Array<Subset>
}

export class Subset {
    letters: Array<Letter>
    name: string
}

export enum AlphabetType {
    Hira = "hiragana",
    Kata = "katakana"
}