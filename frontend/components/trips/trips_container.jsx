import React from 'react';
import Trips from './trips';
import { connect } from 'react-redux';
import { fetchBookings } from '../../actions/booking_actions';

const mapDsipatchToProps = (dispatch) => {
  return {
    fetchBookings: () => dispatch(fetchBookings())
  }
}

export default connect(undefined, mapDsipatchToProps)(Trips);
