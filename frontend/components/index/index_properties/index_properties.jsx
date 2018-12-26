import React from 'react';
import IndexPropertiesItem from './index_properties_item';

class IndexProperties extends React.Component {

  render() {

    let loading;
    if (this.props.loading) {
      loading = (
        <div className="spinner">
          <div className="bounce1"></div>
          <div className="bounce2"></div>
          <div className="bounce3"></div>
        </div>
      );
    } else {
      loading = (<div></div>);
    }

    const properties = this.props.properties.map(property => {
      return (
        <IndexPropertiesItem key={property.id} property={property}/>
      );
    });

    let homes;
    if (!this.props.properties.length) {
      homes = "There are no available";
    } else {
      homes = this.props.properties.length;
    }

    return (
      <>
        {loading}
        <p className="index-num-homes">{homes} homes</p>
        <div className="index-properties">
          <ul className="properties-list">{properties}</ul>
        </div>
      </>
    );
  }
}

export default IndexProperties;
