import React from 'react';
import s from './Profile.module.css';
import MyPosts from './MyPosts/MyPosts';

const Profile = () => {
    return <div className={s.Profile}>
    <div>
    <img src='https://klike.net/uploads/posts/2019-06/1561182204_1.jpg'/>
    </div>
    <div>
      Ava
    </div>
    <div>
      <MyPosts/>
    </div>
  </div>
}

export default Profile;