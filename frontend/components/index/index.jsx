import React from 'react';
import IndexNavContainer from './index_nav/index_nav_container';
import GreetingContainer from './greeting/greeting_container';
import IndexPropertiesContainer from './index_properties/index_properties_container';

const Index = (props) => {
  return (
    <div>
      <IndexNavContainer />
      <GreetingContainer />
      <IndexPropertiesContainer />
    </div>
  )
}

export default Index;
