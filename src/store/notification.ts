import { writable, type Writable } from "svelte/store";

export enum State {
    Sucess = "success",
    Error = "error",
    Unseen = "unseen",
}

class Notification {
    state: State
    message: string

    constructor() {
        this.state = State.Unseen;
        this.message = "";
    }
}

const defaultState: Notification = new Notification();

export function acceptMessage(message: string, notificator: Writable<Notification>) {
    const notification = new Notification();

    notification.message = message;
    notification.state = State.Sucess;

    notificator.set(notification)
}

export function showError(message: string, notificator: Writable<Notification>) {
    const notification = new Notification();

    notification.message = message;
    notification.state = State.Error;

    notificator.set(notification)
}

export function reset(message: string, notificator: Writable<Notification>) {
    notificator.set(defaultState)
}

export const notificator = writable(defaultState);