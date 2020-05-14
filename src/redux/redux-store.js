import { createStore, combineReducers } from "redux";
import profileReduser from "./Profile-reduser";
import dialogReduser from "./Dialog-reduser";


let redusers = combineReducers({
    ProfilePage: profileReduser,
    DialogPage: dialogReduser
});

let store = createStore (redusers);

export default store;