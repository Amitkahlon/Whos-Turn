import { USER_CONNECT, USER_DISCONNECT } from "../actions/actionTypes";

const initialState = {
    isLogged: false,
    loggedUser: {
        userName: "",
        auth: ""
    },
}

export const loginReducer = (state = initialState, action) => {
    switch (action.type) {
        case USER_DISCONNECT: 
            return { ...state, isLogged: false, loggedUser: initialState.loggedUser }
        case USER_CONNECT:
            return { ...state, isLogged: true, loggedUser: action.user }
        default:
            return state;
    }
}

