import * as BookingAPIUtil from '../util/booking_api_util';

export const RECEIVE_ALL_BOOKINGS = 'RECEIVE_ALL_BOOKINGS';
export const RECEIVE_BOOKING = 'RECEIVE_BOOKING';
export const RECEIVE_BOOKING_ERRORS = 'RECEIVE_BOOKING_ERRORS';
export const CLEAR_BOOKING_ERRORS = 'CLEAR_BOOKING_ERRORS';

const receiveBookings = (bookings) => {
  return {
    type: RECEIVE_ALL_BOOKINGS,
    bookings,
  }
}

const receiveBooking = (booking) => {
  return {
    type: RECEIVE_BOOKING,
    booking,
  }
}

const receiveBookingErrors = (errors) => {
  return {
    type: RECEIVE_BOOKING_ERRORS,
    errors,
  }
}

const clearBookingErrors = () => {
  return {
    type: CLEAR_BOOKING_ERRORS,
  }
}

export const fetchBookings = () => (dispatch) => {
  return BookingAPIUtil.fetchBookings().then( (bookings) => {
    return dispatch(receiveBookings(bookings));
  });
}

export const fetchBooking = (id) => (dispatch) => {
  return BookingAPIUtil.fetchBooking(id).then( (booking) => {
    return dispatch(receiveBooking(booking));
  });
}


export const createBooking = booking => dispatch => (
  BookingAPIUtil.createBooking(booking).then(booking => (
    dispatch(receiveBooking(booking))
  ), err => (
    dispatch(receiveBookingErrors(err.responseJSON))
  ))
);
