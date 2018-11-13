import React from 'react';
import Link from 'react-router-dom'

const SplashNav = () => {
  return (
    <div>
      <Link><img src={'https://cdn.iconscout.com/icon/free/png-256/airbnb-4-432491.png'} /></Link>
      <ul>
        <Link>Become a host</Link>
        <Link>Sign Up</Link>
        <Link>Log in</Link>
      </ul>
    </div>
  )
}

export default SplashNav;
