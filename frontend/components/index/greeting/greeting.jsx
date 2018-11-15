import React from 'react';
import {Link} from 'react-router-dom';


const Greeting = ({currentUser, logout}) => {

let greeting;

if (currentUser) {
  return (
    <div>
      <h2 className="greeting">Welcome, {currentUser.name}!</h2>
      <h3 className="greeting">Recommended for you</h3>
    </div>
  );
} else {
  return (
    <div>
    </div>
  );
}

};

export default Greeting;
