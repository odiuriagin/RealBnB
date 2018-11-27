import { RECEIVE_PROPERTY_ERRORS, CLEAR_PROPERTY_ERRORS } from '../../actions/properties_actions';

const propertyErrorsReducer = (state = [], action) => {
    switch(action.type) {
        case RECEIVE_PROPERTY_ERRORS:
            return action.errors;
        case CLEAR_PROPERTY_ERRORS:
            return [];
        default:
            return state;
    }
};

export default propertyErrorsReducer;