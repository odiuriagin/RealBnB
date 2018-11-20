import * as ReviewApiUtil from '../util/review_api_util';
export const RECEIVE_REVIEWS = 'RECEIVE_REVIEWS';
export const RECEIVE_REVIEW = 'RECEIVE_REVIEW';

const receiveReviews = (reviews) => {
  return {
    type: RECEIVE_REVIEWS,
    reviews,
  }
}

const receiveReview = (review) => {
  return {
    type: RECEIVE_REVIEW,
    review,
  }
}

export const fetchReviews = () => (dispatch) => {
  return ReviewApiUtil.fetchReviews().then( (reviews) => {
    return dispatch(receiveReviews(reviews));
  });
};

export const createReview = (review) => dispatch => {
  return ReviewApiUtil.createReview(review).then( (review) => {
    return dispatch(receiveReview(review));
  });
};
