import { writable } from "svelte/store";
import { KanaType } from "../model/alphabet";

export const alphabetSwitcher = TypeSwitcher();

function TypeSwitcher() {
    const defaultState = KanaType.Hira;
    const { subscribe, set, } = writable(defaultState);

    let currentState = defaultState;

    return {
        subscribe,
        changeType: () => {
            if (currentState === KanaType.Hira) {
                currentState = KanaType.Kata
            } else {
                currentState = KanaType.Hira
            }
            set(currentState)
        }
    }
}