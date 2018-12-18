import React from 'react';

const Greeting = ({currentUser}) => {

if (currentUser) {
  return (
    <div>
      <h2 className="greeting">Welcome, {currentUser.name}!</h2>
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
