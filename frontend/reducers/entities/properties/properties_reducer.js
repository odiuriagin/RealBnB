import { merge } from 'lodash';
import { RECEIVE_ALL_PROPERTIES, RECEIVE_PROPERTY, REMOVE_PROPERTY } from '../../../actions/properties_actions';
import { DELETE_REVIEW } from '../../../actions/review_actions';


const propertiesReducer = (state = {}, action) => {
  let newState;
  Object.freeze(state);
  switch (action.type) {
    case RECEIVE_ALL_PROPERTIES:
      return action.properties;
    case RECEIVE_PROPERTY:
      return merge({}, state, {[action.property.id]: action.property});
    case REMOVE_PROPERTY:
      newState = merge({}, state);
      delete newState[action.id];
      return newState;
    case DELETE_REVIEW:
      return merge({}, state, {[action.data.id]: action.data})
    default:
      return state;
  }
};

export default propertiesReducer;
