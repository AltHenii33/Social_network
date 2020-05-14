const ADD_POST = 'ADD-POST';
const UPDATE_NEW_POST_TEXT = 'UPDATE-NEW-POST-TEXT';

let initialState ={
  PostData: [
      { message: 'Hi, this is my first post', likecount: 44 },
      { message: 'I know who is it', likecount: 25 }
    ],
    newPostText: 'hay'
};

const profileReduser = (state = initialState, action) => {

        if (action.type === ADD_POST) {
          let newPost = {
            message: state.newPostText,
            likecount: 0
          };
          state.PostData.push(newPost);
          state.newPostText = '';

        } else if (action.type === UPDATE_NEW_POST_TEXT) {
          state.newPostText = action.newText;

        }

    return state;
}
export default profileReduser;