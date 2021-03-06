import { combineReducers } from 'redux';
import sessionErrorsReducer from './session_errors_reducer';
import bookingErrorsReducer from './booking_errors_reducer';
import propertyErrorsReducer from './property_errors_reducer';
import searchErrorsReducer from './search_errors_reducer';

const errorsReducer = combineReducers({
  session: sessionErrorsReducer,
  booking: bookingErrorsReducer,
  property: propertyErrorsReducer,
  search: searchErrorsReducer,
});

export default errorsReducer;
