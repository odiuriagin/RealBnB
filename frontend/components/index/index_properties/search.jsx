import React from 'react';
import IndexMap from './index_map';
import IndexProperties from './index_properties';

const Search = ({properties, fetchProperties}) => {
  return (
    <div>
      <IndexMap properties={properties}/>
      <IndexProperties properties={properties} fetchProperties={fetchProperties}/>
    </div>
  )
}

export default Search;
