import React from 'react';

const TripsIndexItem = ({ booking, deleteBooking }) => {
  return (
    <li>
      <img src={"https://goo.gl/T48KR9"} />
      <div className="trips-property-caption">
        <h2 className="trips-property-city">{booking.property.city}</h2>
        <p className="trips-property-dates">{booking.check_in} - {booking.check_out} &middot; {booking.num_people} guest</p>
        <a href="#">Leave a Review</a>
        <a onClick={() => deleteBooking(booking.id)}>Cancel Trip</a>
      </div>
    </li>
  )
}

export default TripsIndexItem;
