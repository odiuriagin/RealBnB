import React from 'react';
import { Route } from 'react-router-dom';
import ShowPhotos from './show_photos';
import IndexNavContainer from '../index/index_nav/index_nav_container';
import PropertyInfoContainer from './property_info_container';




const Show = (props) => {
  return (
    <div>
      <IndexNavContainer />
      <ShowPhotos />
      <PropertyInfoContainer propertyId={props.match.params.propertyId}/>
    </div>
  )
}

export default Show;
