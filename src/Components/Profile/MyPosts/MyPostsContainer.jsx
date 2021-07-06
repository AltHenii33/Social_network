import React from 'react';
import MyPosts from './MyPosts';
<<<<<<< HEAD
import { addPostActionCreator, addLikeActionCreator, deletePost} from '../../../redux/Profile-reduser';
=======
import { addPostActionCreator, updateNewPostTextActionCreator } from '../../../redux/Profile-reduser';
>>>>>>> parent of 7fe2925... 78
import { connect } from 'react-redux';


const mapStateToProps = (state) => {
  return {
    PostData: state.ProfilePage.PostData,
    newPostText: state.ProfilePage.newPostText
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
<<<<<<< HEAD
    addPost: (newPostBody) => {
      dispatch(addPostActionCreator(newPostBody));
    },
    dellPost: (postId) => {
      dispatch(deletePost(postId));
    },
    addLike: (likeId) => {
      dispatch(addLikeActionCreator(likeId));
=======
    addPost: () => {
      dispatch(addPostActionCreator());
    },
    updateNewPostText: (text) => {
      dispatch(updateNewPostTextActionCreator(text));
>>>>>>> parent of 7fe2925... 78
    }
  }
}

const MyPostsContainer = connect(mapStateToProps, mapDispatchToProps)(MyPosts);


export default MyPostsContainer;