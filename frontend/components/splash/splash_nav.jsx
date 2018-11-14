import React from 'react';
import { Link } from 'react-router-dom';
import {openModal} from '../../actions/modal_actions';
import {connect} from 'react-redux';

const SplashNav = (props) => {
  return (
    <div>
      <Link to={'/'}><img src={window.logo_red} className="red-logo" /></Link>
      <ul className="home-nav-list">
        <li><Link to={'/'}>Become a host</Link></li>
        <li><a onClick={() => props.openModal('signup')}>Sign Up</a></li>
        <li><a onClick={() => props.openModal('login')}>Log In</a></li>
        <li><Link to={'/'}>Demo User</Link></li>
      </ul>
    </div>
  )
}

const mapDispatchToProps = (dispatch) => {
  return {
    openModal: (form) => dispatch(openModal(form))
  }
}

export default connect(null, mapDispatchToProps)(SplashNav);
