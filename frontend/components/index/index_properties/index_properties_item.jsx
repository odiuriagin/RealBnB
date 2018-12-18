import React from 'react';
import { NavLink } from 'react-router-dom';
import Ratings from 'react-ratings-declarative';

const IndexPropertiesItem = ({ property }) => {

  return (
    <li>
      <NavLink className="property-link" to={`/properties/${property.id}`}>
        <img src={property.photoUrls[0]} />
        <p className="property-location">{property.city}, {property.state}</p>
        <h3 className="property-description">{property.description}</h3>
        <p className="property-price">${property.price}, per night &middot; Free cancellation</p>
          <Ratings
            rating={property.averageRating}
            widgetDimensions="15px"
            widgetSpacings="3px"
            widgetRatedColors="#008489"
          >
            <Ratings.Widget />
            <Ratings.Widget />
            <Ratings.Widget />
            <Ratings.Widget />
            <Ratings.Widget />
          </Ratings><span className="index-reviews-num">  {property.numReviews}</span>
      </NavLink>
    </li>);
};

export default IndexPropertiesItem;
