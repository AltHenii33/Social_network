import React from 'react';
import Header from './Header.jsx';
<<<<<<< HEAD
import { logout } from '../../redux/Auth-reduser.js';
=======
import {getAuthUserData} from '../../redux/Auth-reduser.js';
>>>>>>> parent of 7fe2925... 78
import { connect } from 'react-redux';
import { compose } from 'redux';


class HeaderContainer extends React.Component {

  render () {
    return <Header {...this.props} />
  }
}

const mapStateToProps = (state) => {
  return {
  isAuth: state.Auth.isAuth,
  login: state.Auth.login
  }
}

<<<<<<< HEAD
export default compose(connect (mapStateToProps, {logout})
=======
export default compose(connect (mapStateToProps, {getAuthUserData})
>>>>>>> parent of 7fe2925... 78
)(HeaderContainer)

