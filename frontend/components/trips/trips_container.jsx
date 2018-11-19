import React from 'react';
import TripsIndex from './trips_index';
import { connect } from 'react-redux';
import { fetchBookings, deleteBooking } from '../../actions/booking_actions';
import { fetchProperties } from '../../actions/properties_actions';

const mapStateToProps = (state) => {
  return {
    bookings: Object.values(state.entities.bookings)
  }
};

const mapDispatchToProps = (dispatch) => {
  return {
    fetchBookings: () => dispatch(fetchBookings()),
    fetchProperties: () => dispatch(fetchProperties()),
    deleteBooking: (id) => dispatch(deleteBooking(id)),
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(TripsIndex);
