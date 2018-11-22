import * as ReviewApiUtil from '../util/review_api_util';
export const RECEIVE_REVIEWS = 'RECEIVE_REVIEWS';
export const RECEIVE_REVIEW = 'RECEIVE_REVIEW';
export const DELETE_REVIEW = 'DELETE_REVIEW';

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

const removeReview = (id, data) => {
  return {
    type: DELETE_REVIEW,
    reviewId: id,
    data
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

export const deleteReview = (id) => dispatch => {
  return ReviewApiUtil.deleteReview(id).then( (data) => {
    return dispatch(removeReview(id, data))
  });
}
