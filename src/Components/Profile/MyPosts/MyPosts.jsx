import React from 'react';
import MyPostmodule from './MyPosts.module.css';
import Post from './Post/Post';

const MyPosts = () => {
  return (
    <div className={MyPostmodule.Post}>
      <div>
        My post
    </div>
      <div>
        <textarea></textarea>
        <button>Add post</button>
    </div>
    <Post likecount='15' message='Hi, this is my first post' />
    <Post likecount='81' message='I know who is it'/>
    </div>
  )
}

export default MyPosts;