import React from 'react';
import IndexMap from './index_map';
import IndexProperties from './index_properties';

const Search = ({properties, updateFilter}) => {
  return (
    <div className="index-container">
      <IndexMap properties={properties} updateFilter={updateFilter}/>
      <IndexProperties properties={properties}/>
    </div>
  )
}

export default Search;
