import { writable } from "svelte/store";
import { AlphabetType } from "../model/alphabet";

export const alphabetSwitcher = TypeSwitcher();

function TypeSwitcher() {
    const defaultState = AlphabetType.Hira;
    const { subscribe, set, } = writable(defaultState);

    let currentState = defaultState;

    return {
        subscribe,
        changeType: () => {
            if (currentState === AlphabetType.Hira) {
                currentState = AlphabetType.Kata
            } else {
                currentState = AlphabetType.Hira
            }
            set(currentState)
        }
    }
}