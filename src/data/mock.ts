export class Letter {
    romaji: string;
    hiragana: string;
    katakana: string;
}

export interface Repository {
    ListLetter(): Array<Letter>
    // CheckAnswer(have: string, want: string, letter: Letter): GuessResult
}

class GuessResult { }
export class Correct extends GuessResult { }
export class Wrong extends GuessResult { }

class Exercice {
    letter: Letter
    have: string
    want: string
}


export class MockDAO implements Repository {

    ListLetter(): Array<Letter> {
        return [
            {
                "romaji": "a",
                "hiragana": "あ",
                "katakana": ""
            },
            {
                "romaji": "i",
                "hiragana": "い",
                "katakana": ""
            },
            {
                "romaji": "u",
                "hiragana": "う",
                "katakana": ""
            },
            {
                "romaji": "e",
                "hiragana": "え",
                "katakana": ""
            },
            {
                "romaji": "o",
                "hiragana": "お",
                "katakana": ""
            },
            {
                "romaji": "ka",
                "hiragana": "か",
                "katakana": ""
            },
            {
                "romaji": "ki",
                "hiragana": "き",
                "katakana": ""
            },
            {
                "romaji": "ku",
                "hiragana": "く",
                "katakana": ""
            },
            {
                "romaji": "ke",
                "hiragana": "け",
                "katakana": ""
            },
            {
                "romaji": "ko",
                "hiragana": "こ",
                "katakana": ""
            },
            {
                "romaji": "sa",
                "hiragana": "さ",
                "katakana": ""
            },
            {
                "romaji": "shi",
                "hiragana": "し",
                "katakana": ""
            },
            {
                "romaji": "su",
                "hiragana": "す",
                "katakana": ""
            },
            {
                "romaji": "se",
                "hiragana": "せ",
                "katakana": ""
            },
            {
                "romaji": "so",
                "hiragana": "そ",
                "katakana": ""
            },
            {
                "romaji": "ta",
                "hiragana": "た",
                "katakana": ""
            },
            {
                "romaji": "chi",
                "hiragana": "ち",
                "katakana": ""
            },
            {
                "romaji": "tsu",
                "hiragana": "つ",
                "katakana": ""
            },
            {
                "romaji": "te",
                "hiragana": "て",
                "katakana": ""
            },
            {
                "romaji": "to",
                "hiragana": "と",
                "katakana": ""
            },
            {
                "romaji": "na",
                "hiragana": "な",
                "katakana": ""
            },
            {
                "romaji": "ni",
                "hiragana": "に",
                "katakana": ""
            },
            {
                "romaji": "nu",
                "hiragana": "ぬ",
                "katakana": ""
            },
            {
                "romaji": "ne",
                "hiragana": "ね",
                "katakana": ""
            },
            {
                "romaji": "no",
                "hiragana": "の",
                "katakana": ""
            },
            {
                "romaji": "ha",
                "hiragana": "は",
                "katakana": ""
            },
            {
                "romaji": "hi",
                "hiragana": "ひ",
                "katakana": ""
            },
            {
                "romaji": "fu",
                "hiragana": "ふ",
                "katakana": ""
            },
            {
                "romaji": "he",
                "hiragana": "へ",
                "katakana": ""
            },
            {
                "romaji": "ho",
                "hiragana": "ほ",
                "katakana": ""
            },
            {
                "romaji": "ma",
                "hiragana": "ま",
                "katakana": ""
            },
            {
                "romaji": "mi",
                "hiragana": "み",
                "katakana": ""
            },
            {
                "romaji": "mu",
                "hiragana": "む",
                "katakana": ""
            },
            {
                "romaji": "me",
                "hiragana": "め",
                "katakana": ""
            },
            {
                "romaji": "mo",
                "hiragana": "も",
                "katakana": ""
            },
            {
                "romaji": "ya",
                "hiragana": "や",
                "katakana": ""
            },
            {
                "romaji": "yu",
                "hiragana": "ゆ",
                "katakana": ""
            },
            {
                "romaji": "yo",
                "hiragana": "よ",
                "katakana": ""
            },
            {
                "romaji": "ra",
                "hiragana": "ら",
                "katakana": ""
            },
            {
                "romaji": "ri",
                "hiragana": "り",
                "katakana": ""
            },
            {
                "romaji": "ru",
                "hiragana": "る",
                "katakana": ""
            },
            {
                "romaji": "re",
                "hiragana": "れ",
                "katakana": ""
            },
            {
                "romaji": "ro",
                "hiragana": "ろ",
                "katakana": ""
            },
            {
                "romaji": "wa",
                "hiragana": "わ",
                "katakana": ""
            },
            {
                "romaji": "n",
                "hiragana": "ん",
                "katakana": ""
            }
        ]
    }


    CheckAnswer(exercice: Exercice, answer: string) {
        let input: string;
        let output: string;

        switch (exercice.have) {
            case "":

                break;

            default:
                break;
        }
    }


}