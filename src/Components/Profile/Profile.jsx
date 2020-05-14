import React from 'react';
import s from './Profile.module.css';
import MyPosts from './MyPosts/MyPosts';
import ProfileInfo from './ProfileInfo/ProfileInfo';



const Profile = (props) => {

    return <div className={s.Profile}>
      <ProfileInfo/>
      <MyPosts 
      PostData={props.PostData} 
      dispatch={props.dispatch}
      newPostText={props.newPostText}
      // updateNewPostText={props.updateNewPostText}
      />
  </div>
}

export default Profile;