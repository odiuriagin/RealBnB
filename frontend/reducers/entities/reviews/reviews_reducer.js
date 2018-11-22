import { merge } from 'lodash';
import { RECEIVE_REVIEWS, RECEIVE_REVIEW, DELETE_REVIEW } from '../../../actions/review_actions';

const reviewsReducer = (state = {}, action) => {
  let newState;
  Object.freeze(state);
  switch (action.type) {
    case RECEIVE_REVIEWS:
      return merge({}, state, action.reviews);
    case RECEIVE_REVIEW:
      return merge({}, state, {[action.review.id]: action.review});
    case DELETE_REVIEW:
      newState = merge({}, state);
      delete newState[action.reviewId]
      return newState;
    default:
      return state;
  }
}

export default reviewsReducer;
