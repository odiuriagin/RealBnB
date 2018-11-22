import React from 'react';
import { NavLink } from 'react-router-dom';
import SimpleSlider from './slider';


const IndexPropertiesItem = ({ property }) => {
  return (
    <li>
      <NavLink className="property-link" to={`/properties/${property.id}`}>
        <img src={property.photoUrls[0]} />
        <p className="property-location">{property.city}, {property.state}</p>
        <h3 className="property-description">{property.description}</h3>
        <p className="property-price">${property.price}, per night &middot; Free cancellation</p>
      </NavLink>
    </li>);
};

export default IndexPropertiesItem;
