import React from 'react';
import {Link} from 'react-router-dom';


const Greeting = ({currentUser, logout}) => {

let greeting;

if (currentUser) {
  return (
    <div>
      <h2>Welcome back, {currentUser.name}</h2>
      <button onClick={logout}>Log Out</button>
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
