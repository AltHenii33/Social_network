import React from 'react';
import s from './ProfileInfo.module.css';
import Preloader from '../../common/Preloader';
import ProfileStatus from './ProfileStatus';




const ProfileInfo = (props) => {

  if (!props.profile) {
    return <Preloader/>
  }

  return <div className={s.Profile}>
    <div className ={s.picture}>
      <img src='https://klike.net/uploads/posts/2019-06/1561182204_1.jpg' />
    </div>
    <div>
      <img src={props.profile.photos.large} /> 
    </div>
    <div>
    {props.profile.fullName}
    </div>
    <div>
      <ProfileStatus 
      status={props.status}
      updateStatus={props.updateStatus} />
    </div>
  </div>
}

export default ProfileInfo;