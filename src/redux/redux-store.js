import { createStore, combineReducers } from "redux";
import profileReduser from "./Profile-reduser";
import dialogReduser from "./Dialog-reduser";
import usersReduser from "./Users-reduser";


let redusers = combineReducers({
    DialogPage: dialogReduser,
    ProfilePage: profileReduser,
    UsersPage: usersReduser
});

let store = createStore (redusers);

export default store;