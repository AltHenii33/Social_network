import React from 'react';
import MyPostmodule from './MyPosts.module.css';
import Post from './Post/Post';

const MyPosts = (props) => {


  let PostElements = props.PostData.map (p => <Post message={p.message} likecount={p.likecount}/>);

  return (
    <div className={MyPostmodule.Post}>
      <div>
        My post
    </div>
      <div>
        <textarea></textarea>
        <button>Add post</button>
    </div>
    {PostElements}
    </div>
  )
}

export default MyPosts;