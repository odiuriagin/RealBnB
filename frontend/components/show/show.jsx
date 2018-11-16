import React from 'react';
import { Route } from 'react-router-dom';
import ShowPhotos from './show_photos';
import IndexNavContainer from '../index/index_nav/index_nav_container';



const Show = (props) => {
  return (
    <div>
      <IndexNavContainer />
      <ShowPhotos />
    </div>
  )
}

export default Show;
