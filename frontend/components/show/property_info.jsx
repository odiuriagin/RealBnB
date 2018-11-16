import React from 'react';
import BookForm from './book_form';

class PropertyInfo extends React.Component {


  componentDidMount() {
    this.props.fetchProperty(this.props.propertyId)
  }

  render() {
    const { property } = this.props;


    if (!property) {
      return null;
    }

    const wifi = property.wifi ? (<li><img src={window.wifi}></img>   Wifi</li>) : (<div></div>)
    const tv = property.cable_tv ? (<li><img src={window.tv}></img>   Cable TV</li>) : (<div></div>)
    const washer = property.washer ? (<li><img src={window.washer}></img>   Washer</li>) : (<div></div>)
    const kitchen = property.kitchen ? (<li><img src={window.kitchen}></img>   Kitchen</li>) : (<div></div>)
    const breakfast = property.breakfast ? (<li><img src={window.breakfast}></img>   Breakfast</li>) : (<div></div>)


    return (
      <>
      <div className="property-info">
        <div className="property-header">
          <p className="property-description-show">{property.description}</p>
          <div className="property-owner">
            <p className="property-owner-logo">Owner logo</p>
            <p className="property-owner-name">{property.owner.name}</p>
          </div>
          <p className="property-city">{property.city}</p>
        </div>
        <p className="property-body">{property.body}</p>
        <p className="property-amenities-heading">Amenities</p>
        <ul className="property-amneties-list">
          {wifi}
          {tv}
          {washer}
          {kitchen}
          {breakfast}
        </ul>
      </div>
      <div className="book-form">
        <BookForm props={this.props.property}/>
      </div>
      </>
    );
  }
}

export default PropertyInfo;
