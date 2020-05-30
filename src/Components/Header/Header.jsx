import React from 'react';
import s from './Header.module.css';
import { NavLink } from 'react-router-dom';

const Header = (props) => {
  return <header className={s.header}>
    <img src='https://raw.githubusercontent.com/sibur-holding/logo/master/SIBUR_logo_RUS.jpg' />

    <div className={s.loginBlock}>
      {props.isAuth ? props.login :
      <NavLink to={'/login'}>Log In</NavLink> }
    </div>
  </header>
}

export default Header;

