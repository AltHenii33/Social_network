import React from 'react';
import MyPostmodule from './MyPosts.module.css';
import Post from './Post/Post';
import { updateNewPostTextActionCreator, addPostActionCreator } from '../../../redux/store';

const MyPosts = (props) => {


  let PostElements = props.PostData.map(p => <Post message={p.message} likecount={p.likecount} />);


  let NewPostElement = React.createRef();

    let addPost = () => {
      // props.dispatch({ type: 'ADD-POST' });
      // props.updateNewPostText ('');
      props.dispatch(addPostActionCreator());
    }

    let onPostChange = () => {
      let text = NewPostElement.current.value;
      // props.dispatch({ type: 'UPDATE-NEW-POST-TEXT', newText: text });
      let action = updateNewPostTextActionCreator(text);
      props.dispatch(action);
    }
    return (
      <div className={MyPostmodule.Post}>
        <div>
          My post
    </div>
        <div>
          <textarea
            onChange={onPostChange}
            ref={NewPostElement}
            value={props.newPostText}
          />
          <button onClick={addPost}>Add post</button>
        </div>
        {PostElements}
      </div>
    )
  }

  export default MyPosts;