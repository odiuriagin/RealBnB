import React from 'react';
import { Link } from 'react-router-dom';

const SplashNav = () => {
  return (
    <div>
      <Link to={'/'}><img src={window.logo_red} className="red-logo" /></Link>
      <ul className="home-nav-list">
        <li><Link to={'/'}>Become a host</Link></li>
        <li><Link to={'/'}>Sign Up</Link></li>
        <li><Link to={'/'}>Log In</Link></li>
        <li><Link to={'/'}>Demo User</Link></li>
      </ul>
    </div>
  )
}

export default SplashNav;
