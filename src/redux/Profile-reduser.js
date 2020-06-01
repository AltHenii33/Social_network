import { userAPI } from "../API/Api";

const ADD_POST = 'ADD-POST';
const UPDATE_NEW_POST_TEXT = 'UPDATE-NEW-POST-TEXT';
const SET_USER_PROFILE = 'SET-USER-PROFILE';
const SET_STATUS = 'SET-STATUS';


let initialState = {
  PostData: [
    { message: 'Hi, this is my first post', likecount: 44 },
    { message: 'I know who is it', likecount: 25 }
  ],
  newPostText: 'hay',
  profile: null,
  status:''
};
const profileReduser = (state = initialState, action) => {
  switch (action.type) {

    case ADD_POST: {
      let body = action.newPostBody
      return {
        ...state,
        PostData: [...state.PostData, {message: body, likecount:'0'}]
      }
    }
    case UPDATE_NEW_POST_TEXT: {
      let stateCopy = { ...state };
      stateCopy.newPostText = action.newText;
      return stateCopy;
    }
    case SET_USER_PROFILE: {
      return { ...state, profile: action.profile }
    }
    case SET_STATUS: {
      return { ...state, status: action.status }
    }
    default:
      return state;
  }
}

export const addPostActionCreator = (newPostBody) => {
  return {
    type: ADD_POST,
    newPostBody
  }
}
export const setUserProfile = (profile) => {
  return {
    type: SET_USER_PROFILE, profile
  }
}
export const setStatus = (status) => { return {type:SET_STATUS, status}}

export const getUserProfile = (userId) => {
  return (dispatch) => {
    userAPI.getProfile(userId).then(response => {
      dispatch(setUserProfile(response.data));
    });
  }
}

export const getStatus = (userId) => {
  return (dispatch) => {
    userAPI.getStatus(userId).then(response => {
      dispatch(setStatus(response.data));
    });
  }
}

export const updateStatus = (status) => {
  return (dispatch) => {
    userAPI.updateStatus(status).then(response => {
      if (response.data.resultCode === 0) {
      dispatch(setStatus(status));
      }
    });
  }
}

export default profileReduser;