const ADD_POST = 'ADD-POST';
const UPDATE_NEW_POST_TEXT = 'UPDATE-NEW-POST-TEXT';

let initialState = {
  PostData: [
    { message: 'Hi, this is my first post', likecount: 44 },
    { message: 'I know who is it', likecount: 25 }
  ],
  newPostText: 'hay'
};
const profileReduser = (state = initialState, action) => {
  switch (action.type) {

    case ADD_POST: {
      let newPost = {
        message: state.newPostText,
        likecount: 0
      };
      let stateCopy = { ...state };
      stateCopy.PostData = [ ...state.PostData ];
      stateCopy.PostData.push(newPost);
      stateCopy.newPostText = '';
      return stateCopy;
    }
    case UPDATE_NEW_POST_TEXT: {
      let stateCopy = { ...state };
      stateCopy.newPostText = action.newText;
      return stateCopy;
    }
    default:
      return state;
  }
}

export const addPostActionCreator = () => {
  return {
    type: ADD_POST
  }
}
export const updateNewPostTextActionCreator = (text) => {
  return {
    type: UPDATE_NEW_POST_TEXT, newText: text
  }
}

export default profileReduser;