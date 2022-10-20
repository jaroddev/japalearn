import type { LetterID } from "../model/alphabet";
import { Mastery } from "../model/coverage";

import type { MasteryRepo } from "./repo";

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
        let mastery = this.masteries.find((mastery) => mastery.ID === ID);

        if (mastery === undefined) {
            mastery = new Mastery({
                ID,
                stat: {
                    guessed: 0,
                    encounter: 0,
                }
            });

            this.masteries.push(mastery);
        }

        return mastery

    }

    increase(ID: LetterID, guessed: boolean) {
        const mastery = this.get(ID);
        console.log(this.masteries);
        console.log(mastery);


        mastery.encountered(guessed)

        this.save();
    }

    save() {
        const value = JSON.stringify(this.masteries);
        localStorage.setItem(MasteryLocalStorage.KEY, value)
    }

}