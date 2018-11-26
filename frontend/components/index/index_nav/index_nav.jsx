import React from 'react';
import { Link, NavLink } from 'react-router-dom';

const IndexNav = (props) => {
  let userLogo = props.currentUser.userPhotoUrl ? props.currentUser.userPhotoUrl : window.user_logo;




  return (
    <div className="main-nav">
      <Link to={'/'}><img src={window.logo_red} className="red-logo" /></Link>
      <input id="nav-search-field" type="text" placeholder='Try "Miami"'></input>
      <ul className="main-nav-list">
        <li><Link to={'/new'}>Become a host</Link></li>
        <li><Link to={'/trips'}>Trips</Link></li>
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
