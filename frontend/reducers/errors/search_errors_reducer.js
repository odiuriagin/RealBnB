import { RECEIVE_SEARCH_ERRORS, CLEAR_SEARCH_ERRORS } from '../../actions/search_actions';

const searchErrorsReducer = (state = [], action) => {
  switch (action.type) {
    case RECEIVE_SEARCH_ERRORS:
      return ["Please enter a valid city!"];
    case CLEAR_SEARCH_ERRORS:
      return [];
    default:
      return state;
  }
};

export default searchErrorsReducer;
