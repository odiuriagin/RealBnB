import React from 'react';

const TripsIndexItem = ({ booking, deleteBooking }) => {
  return (
    <li>
      <img src={booking.property.photoUrls[0]} />
      <div className="trips-property-caption">
        <h2 className="trips-property-city">{booking.property.city}</h2>
        <p className="trips-property-dates">{booking.check_in} - {booking.check_out} &middot; {booking.num_people} guest</p>
        <p className="trips-property-description">{booking.property.description}</p>
        <a href="#">Leave a Review</a>
        <a onClick={() => deleteBooking(booking.id)}>Cancel Trip</a>
      </div>
    </li>
  )
}

export default TripsIndexItem;
