import React from 'react';
import SplashNav from './splash_nav';

const Splash = () => {
  return (
    <div className="splash-main">
      <SplashNav />
      <div className="main-content">
        <p className="next-trip">Plan your next trip</p>
        <div className="main-search-container">
          <input id="main-search" type="text" placeholder='Try "New York"'></input>
        </div>
      </div>
    </div>
  )
}

export default Splash;
