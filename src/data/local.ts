import type { LetterID } from "../model/alphabet";
import { Mastery, type MasteryRepo } from "../model/coverage";

export class MasteryLocalStorage implements MasteryRepo {

    static KEY = "masteries";

    masteries: Array<Mastery>;

    constructor() {
        const value = localStorage.getItem(MasteryLocalStorage.KEY)

        if (value === null || value === undefined) {
            this.masteries = [];
            this.save();
            return;
        }

        this.masteries = JSON.parse(value);

        this.masteries = this.masteries.map((mastery) => {
            return new Mastery(mastery);
        })
    }

    get(ID: LetterID): Mastery {
        const mastery = this.masteries.find((mastery) => mastery.ID === ID);

        if (mastery === undefined) {
            return new Mastery({
                ID,
                stat: {
                    guessed: 0,
                    encounter: 0,
                }
            });
        }

        return mastery

    }

    increase(ID: LetterID, guessed: boolean) {
        const mastery = this.masteries.find((mastery) => mastery.ID === ID);
        mastery.encountered(guessed)

        this.save();
    }

    save() {
        const value = JSON.stringify(this.masteries);
        localStorage.setItem(MasteryLocalStorage.KEY, value)
    }

}