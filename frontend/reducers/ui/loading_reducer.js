import { merge } from 'lodash';
import { START_LOADING_ALL_PROPERTIES, RECEIVE_ALL_PROPERTIES } from '../../actions/properties_actions';
import { START_LOADING_ALL_BOOKINGS, RECEIVE_ALL_BOOKINGS } from '../../actions/booking_actions';

const initialState = {
    propertiesLoading: false,
    propertiesLoaded: false,
    bookingsLoading: false,
  };

const loadingReducer = (state = initialState, action) => {
    switch(action.type) {
        case START_LOADING_ALL_PROPERTIES:
            return merge({}, state, { propertiesLoading: true });
        case START_LOADING_ALL_BOOKINGS:
            return merge({}, state, { bookingsLoading: true });
        case RECEIVE_ALL_PROPERTIES:
            return merge({}, state, { propertiesLoading: false, propertiesLoaded: true });
        case RECEIVE_ALL_BOOKINGS:
            return merge({}, state, { bookingsLoading: false });
    default:
        return state;
    };
};

export default loadingReducer;
