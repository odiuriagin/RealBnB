import React from 'react';
import { NavLink } from 'react-router-dom';


const IndexPropertiesItem = ({ property }) => {
  return (
    <li>
      <NavLink className="property-link" to={`api/properties/${property.id}`}>
        <img src={"https://goo.gl/T48KR9"} />
        <p className="property-location">{property.city}, {property.state}</p>
        <h3 className="property-description">{property.description}</h3>
        <p className="property-price">${property.price}, per night &middot; Free cancellation</p>
      </NavLink>
    </li>);
};

export default IndexPropertiesItem;
