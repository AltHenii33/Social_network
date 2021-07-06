import { createStore, combineReducers, applyMiddleware } from "redux";
import profileReduser from "./Profile-reduser";
import dialogReduser from "./Dialog-reduser";
import usersReduser from "./Users-reduser";
import authReduser from "./Auth-reduser";
<<<<<<< HEAD
import thunkMidleware  from  "redux-thunk";
import {reducer as formReducer} from 'redux-form'
import appReduser from "./App-reduser";
import newsReduser from "./News-reduser";
=======
import thunkMidleware  from  "redux-thunk"
>>>>>>> parent of 7fe2925... 78


let redusers = combineReducers({
    DialogPage: dialogReduser,
    ProfilePage: profileReduser,
    UsersPage: usersReduser,
<<<<<<< HEAD
    Auth: authReduser,
    form: formReducer,
    App: appReduser,
    NewsPage: newsReduser
=======
    Auth: authReduser
>>>>>>> parent of 7fe2925... 78
});

let store = createStore (redusers, applyMiddleware(thunkMidleware));

export default store;