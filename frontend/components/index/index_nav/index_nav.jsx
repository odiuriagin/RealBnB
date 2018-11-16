import React from 'react';
import { Link, NavLink } from 'react-router-dom';

const IndexNav = (props) => {
  let userLogo = window.user_logo;
  userLogo = props.currentUser.image_url ? props.currentUser.image_url : window.user_logo;
  return (
    <div className="main-nav">
      <Link to={'/'}><img src={window.logo_red} className="red-logo" /></Link>
      <ul className="main-nav-list">
        <li><Link to={'/'}>Become a host</Link></li>
        <li><Link to={'/'}>Trips</Link></li>
        <li>
          <a href="#"><img className="user-photo" src={userLogo}></img></a>
          <ul className="main-nav-dropdown">
            <li><a href="#">Add Photo</a></li>
            <li><a onClick={props.logout}>Log Out</a></li>
          </ul>
        </li>
      </ul>
    </div>
  )
}

export default IndexNav;
