import { LOGIN, DISCONNECT } from "./actionTypes";

const initialState = {
    isLogged: false,
    user: {}
}

export const mainReducer = (state = initialState, action) => {
    switch (action.type) {
        case DISCONNECT: 
            return { ...state, isLogged: false, user: {} }
        case LOGIN: 
            return { ...state, isLogged: true, user: action.user }
        default:
            return state;
    }
}