import { userAPI } from "../API/Api";

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
    userAPI.AuthMe ().then(data => {
      if (data.resultCode === 0) {
        dispatch(setUserAuth (data.data));
      }
    });
  }
}


export default authReduser;