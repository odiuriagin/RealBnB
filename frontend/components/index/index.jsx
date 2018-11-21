import React from 'react';
import IndexNavContainer from './index_nav/index_nav_container';
import GreetingContainer from './greeting/greeting_container';
import SearchContainer from './index_properties/search_container';

const Index = (props) => {
  return (
    <div>
      <IndexNavContainer />
      <GreetingContainer />
      <SearchContainer />
    </div>
  )
}

export default Index;
