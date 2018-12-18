import React from 'react';
import { withRouter } from 'react-router-dom';

const TripsIndexItem = ({ booking, property, deleteBooking, openModal, history }) => {

  const url = property ? property.photoUrls[0] : "#";
  const city = property ? property.city : "";
  const description = property ? property.description : "";
  const propertyId = property ? property.id : 0;

  return (
    <li>
      <img src={url} />
      <div className="trips-property-caption">
        <h2 className="trips-property-city">{city}</h2>
        <p className="trips-property-dates">{booking.check_in} - {booking.check_out} &middot; {booking.num_people} guest</p>
        <p className="trips-property-description">{description}</p>
        <a onClick={() => history.push(`/${propertyId}/review`)}>Leave a Review</a>
        <a onClick={() => deleteBooking(booking.id)}>Cancel Trip</a>
      </div>
    </li>
  )
}


export default withRouter(TripsIndexItem);
