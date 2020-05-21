import React from 'react';
import MyPostmodule from './MyPosts.module.css';
import Post from './Post/Post';

const MyPosts = (props) => {

  let PostElements = props.PostData.map(p => <Post message={p.message} likecount={p.likecount} key={p.id} />);


  let NewPostElement = React.createRef();

  let onAddPost = () => {
    props.addPost();
  }
  let onPostChange = () => {
    let text = NewPostElement.current.value;
    props.updateNewPostText(text);
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
        <button onClick={onAddPost}>Add post</button>
      </div>
      {PostElements}
    </div>
  )
}

export default MyPosts;