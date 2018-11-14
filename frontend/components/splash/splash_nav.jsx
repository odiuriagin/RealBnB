import React from 'react';
import { Link } from 'react-router-dom';
import {openModal} from '../../actions/modal_actions';

const SplashNav = () => {
  return (
    <div>
      <Link to={'/'}><img src={window.logo_red} className="red-logo" /></Link>
      <ul className="home-nav-list">
        <li><Link to={'/'}>Become a host</Link></li>
        <li><a onClick={() => dispatch(openModal('signup'))}>Sign Up</a></li>
        <li><a onClick={() => dispatch(openModal('login'))}>Log In</a></li>
        <li><Link to={'/'}>Demo User</Link></li>
      </ul>
    </div>
  )
}

export default SplashNav;
