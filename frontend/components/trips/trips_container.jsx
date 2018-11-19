import React from 'react';
import TripsIndex from './trips_index';
import { connect } from 'react-redux';
import { fetchBookings, deleteBooking } from '../../actions/booking_actions';

const mapStateToProps = (state) => {
  return {
    bookings: Object.keys(state.entities.bookings).map(id => state.entities.bookings[id])
  }
};

const mapDispatchToProps = (dispatch) => {
  return {
    fetchBookings: () => dispatch(fetchBookings()),
    deleteBooking: (id) => dispatch(deleteBooking(id)),
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(TripsIndex);
