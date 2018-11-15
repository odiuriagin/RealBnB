import React from 'react';
import { Link } from 'react-router-dom';


const IndexPropertiesItem = ({ property }) => {
  return (
    <li>
      <Link to={`api/properties/${property.id}`}>
        <img src={"https://goo.gl/T48KR9"} />
        <p>{property.city}, {property.state}</p>
        <h3>{property.description}</h3>
        <p>{property.price}, per night</p>
      </Link>
    </li>);
};

export default IndexPropertiesItem;
