import { LOGIN, DISCONNECT } from "./actionTypes";

export const login = (user) => ({
    type: LOGIN,
    user
})

export const disconnect = () => ({
    type: DISCONNECT
})
