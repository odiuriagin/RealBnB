import React from 'react';
import TripsIndexItem from './trips_index_item';
import IndexNavContainer from '../index/index_nav/index_nav_container';
import ReviewModal from '../review/review_modal';

class TripsIndex extends React.Component {

  componentDidMount() {
    this.props.fetchBookings();
  }

  render() {

    let heading = (this.props.bookings.length > 0) ? "Your trips" : "You do not have any trips";
    const bookings = this.props.bookings.map(booking => {
      return (
        <TripsIndexItem key={booking.id} booking={booking} property={booking.property} deleteBooking={this.props.deleteBooking} openModal={this.props.openModal}/>
      );
    });

    return (
      <>
        <IndexNavContainer />
        <ReviewModal />
        <h2 className="trips-index-heading">{heading}</h2>
        <ul className="trips-property-list">{bookings}</ul>
      </>
    )
  }
}

export default TripsIndex;
