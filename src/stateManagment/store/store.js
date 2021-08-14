import { createStore, combineReducers } from "redux";
import { loginReducer } from "../reducers/loginReducer";

const rootReducer = combineReducers({
    login: loginReducer
});

const configureStore = () => createStore(rootReducer);

const store = configureStore();

export default store;