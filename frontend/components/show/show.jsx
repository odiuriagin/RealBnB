import React from 'react';
import IndexNavContainer from '../index/index_nav/index_nav_container';
import PropertyInfoContainer from './property_info_container';

const Show = (props) => {
  return (
    <div>
      <IndexNavContainer />
      <PropertyInfoContainer propertyId={props.match.params.propertyId}/>
    </div>
  )
}

export default Show;
