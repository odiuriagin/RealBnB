import { combineReducers } from 'redux';
import usersReducer from './users/users_reducer';
import propertiesReducer from './properties/properties_reducer';
import bookingsReducer from './bookings/bookings_reducer';
import reviewsReducer from './reviews/reviews_reducer';

const entitiesReducer = combineReducers({
  users: usersReducer,
  properties: propertiesReducer,
  bookings: bookingsReducer,
  reviews: reviewsReducer,
});

export default entitiesReducer;
