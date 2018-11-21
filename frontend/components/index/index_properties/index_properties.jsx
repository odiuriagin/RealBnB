import React from 'react';
import IndexPropertiesItem from './index_properties_item';
import IndexMap from './index_map';

class IndexProperties extends React.Component {

  componentDidMount() {
    this.props.fetchProperties();
  }

  render() {
    const properties = this.props.properties.map(property => {
      return (
        <IndexPropertiesItem key={property.id} property={property}/>
      );
    });

    return (
      <div className="index-properties">
        <ul className="properties-list">{properties}</ul>
      </div>
    );
  }
}

export default IndexProperties;
