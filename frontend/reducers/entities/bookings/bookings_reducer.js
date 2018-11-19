import { merge } from 'lodash';
import { RECEIVE_ALL_BOOKINGS, RECEIVE_BOOKING, DELETE_BOOKING } from '../../../actions/booking_actions';
import { LOGOUT_CURRENT_USER } from '../../../actions/session_actions';

const bookingsReducer = (state = {}, action) => {
  let newState;
  Object.freeze(state);
  switch (action.type) {
    case RECEIVE_ALL_BOOKINGS:
      return merge({}, state, action.bookings);
    case RECEIVE_BOOKING:
      return merge({}, state, action.booking);
    case DELETE_BOOKING:
      newState = merge({}, state)
      delete newState[action.bookingId];
      return newState;
    case LOGOUT_CURRENT_USER:
      return {};
    default:
      return state;
  }
}

export default bookingsReducer;
