export type LetterID = number;

export class Letter {
    romaji: string;
    hiragana: {
        id: LetterID;
        symbol: string;
    };
    katakana: {
        id: LetterID;
        symbol: string;
    };
}

export class Alphabet {
    subsets: Array<Subset>
}

export class Subset {
    letters: Array<Letter>
    name: string
}

export enum KanaType {
    Kata,
    Hira
}

// Should be implemented in data folder
export interface KanaSubsetFactory {
    common(): Subset
    extended(): Subset
    dakuon(): Subset
    handakuon(): Subset
}

export class KanaFactory {
    static createKana(factory: KanaSubsetFactory): Alphabet {
        let alphabet = new Alphabet();

        alphabet.subsets = [
            factory.common(),
            factory.extended(),
            factory.dakuon(),
            factory.handakuon()
        ]

        return alphabet
    }
}