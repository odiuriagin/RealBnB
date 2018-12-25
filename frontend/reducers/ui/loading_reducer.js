import { merge } from 'lodash';
import { START_LOADING_ALL_PROPERTIES, RECEIVE_ALL_PROPERTIES } from '../../actions/properties_actions';

const initialState = {
    propertiesLoading: false,
    propertiesLoaded: false,
    reviewsLoading: false,
  };

const loadingReducer = (state = initialState, action) => {
    switch(action.type) {
        case START_LOADING_ALL_PROPERTIES:
        return merge({}, state, { propertiesLoading: true });
        case RECEIVE_ALL_PROPERTIES:
        return merge({}, state, { propertiesLoading: false, propertiesLoaded: true });
    default:
        return state;
    };
};

export default loadingReducer;
