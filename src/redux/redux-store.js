import { createStore, combineReducers, applyMiddleware } from "redux";
import profileReduser from "./Profile-reduser";
import dialogReduser from "./Dialog-reduser";
import usersReduser from "./Users-reduser";
import authReduser from "./Auth-reduser";
import thunkMidleware  from  "redux-thunk"


let redusers = combineReducers({
    DialogPage: dialogReduser,
    ProfilePage: profileReduser,
    UsersPage: usersReduser,
    Auth: authReduser
});

let store = createStore (redusers, applyMiddleware(thunkMidleware));

export default store;