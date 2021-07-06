import { userAPI } from "../API/Api";
import { stopSubmit } from "redux-form"

const SET_USER_AUTH = 'SET-USER-AUTH';



let initialState = {
  email: null,
  id: null,
  login: null,
  isAuth: false
};
const authReduser = (state = initialState, action) => {
  switch (action.type) {


    case SET_USER_AUTH: {
      return {
        ...state,
        ...action.data,
        isAuth: true

      }
    }

    default:
      return state;

  }
}

export const setUserAuth = (data) => {
  return {
    type: SET_USER_AUTH,
    data:data
  }
}

export const getAuthUserData = () => {
  return (dispatch) => {
    return userAPI.AuthMe ().then(data => {
      if (data.resultCode === 0) {
<<<<<<< HEAD
        dispatch(setUserAuth (data.data, true));
      }
    });
  }
}

export const login = (email, password, rememberMe) => {
  return (dispatch) => {
    userAPI.login(email, password, rememberMe).then(data => {
      if (data.data.resultCode === 0) {
        dispatch(getAuthUserData ());
      } else {
        let message = data.data.messages.length > 0 ? data.data.messages[0] : 'Some error';
        dispatch(stopSubmit('login', {_error: message }));
      }
    });
  }
}

export const logout = () => {
  return (dispatch) => {
    userAPI.logout().then(data => {
      if (data.data.resultCode === 0) {
        dispatch(setUserAuth (null, false));
=======
        dispatch(setUserAuth (data.data));
>>>>>>> parent of 7fe2925... 78
      }
    });
  }
}


export default authReduser;