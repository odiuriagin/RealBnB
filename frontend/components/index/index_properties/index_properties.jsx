import React from 'react';
import IndexPropertiesItem from './index_properties_item';

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
      <div>
        <ul className="properties-list">{properties}</ul>
      </div>
    );
  }
}

export default IndexProperties;