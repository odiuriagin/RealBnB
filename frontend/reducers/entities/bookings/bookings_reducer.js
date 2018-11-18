import { merge } from 'lodash';
import { RECEIVE_ALL_BOOKINGS, RECEIVE_BOOKING } from '../../../actions/booking_actions';

const bookingsReducer = (state = {}, action) => {
  Object.freeze(state);
  switch (action.type) {
    case RECEIVE_ALL_BOOKINGS:
      return merge({}, state, action.bookings);
    case RECEIVE_BOOKING:
      return merge({}, state, action.booking);
    default:
      return state;
  }
}

export default bookingsReducer;
