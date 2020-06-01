import React from 'react';
import MyPosts from './MyPosts';
import { addPostActionCreator } from '../../../redux/Profile-reduser';
import { connect } from 'react-redux';


const mapStateToProps = (state) => {
  return {
    PostData: state.ProfilePage.PostData,
    newPostText: state.ProfilePage.newPostText
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    addPost: (newPostBody) => {
      dispatch(addPostActionCreator(newPostBody));
    }
  }
}

const MyPostsContainer = connect(mapStateToProps, mapDispatchToProps)(MyPosts);


export default MyPostsContainer;