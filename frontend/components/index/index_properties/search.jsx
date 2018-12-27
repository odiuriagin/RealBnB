import React from 'react';
import IndexMap from './index_map';
import IndexProperties from './index_properties';

const Search = ({properties, loading, searchErrors, updateFilter, clearSearchErrors }) => {
  return (
    <div className="index-container">
      <IndexMap properties={properties} searchErrors={searchErrors} updateFilter={updateFilter} clearSearchErrors={clearSearchErrors}/>
      <IndexProperties properties={properties} loading={loading}/>
    </div>
  )
}

export default Search;
