import React from 'react';
import Postmodule from './Post.module.css';

const Post = (props) => {
  return (
      <div className={Postmodule.Post}>
        <img src='https://i1.wp.com/sova.ponominalu.ru/wp-content/uploads/2019/08/ava-max.jpg?fit=2000%2C1333&ssl=1'/>
        {props.message}
        <div>
        <span>Like {props.likecount}</span>
        </div>
    </div>
  )
}

export default Post;