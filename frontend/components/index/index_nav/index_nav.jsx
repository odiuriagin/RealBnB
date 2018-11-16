import React from 'react';
import { Link, NavLink } from 'react-router-dom';

const IndexNav = (props) => {
  let userLogo = window.user_logo;
  userLogo = props.currentUser ? props.currentUser.image_url : null;
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

// window.logo_white = "<%= image_url('logo_white.png')%>"
// window.logo_red = "<%= image_url('logo_red.png')%>"
// window.splash_bg = "<%= image_url('splash_bg.jpg')%>"
// window.splash_narrow = "<%= image_url('splash_narrow.jpg')%>"
// window.splash_vertical = "<%= image_url('splash_vertical.jpg')%>"
// // window.close_icon = "<%= image_url('close_icon.png')%>"
// window.user_logo = "<%= image_url('user.png')%>"
// window.error = "<%= image_url('error.png')%>"
