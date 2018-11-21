import React from 'react';
import moment from 'moment';

const ReviewItem = ({ review }) => {

  let date = moment(review.created_at).format('DD-MMM-YYYY');
  let time = moment(review.created_at).format('h:mm A');

  return (
    <li className="review-form-review-item">
      <div className="review-form-review-user-container">
        <img className="review-form-review-image" src={review.authorPhotoUrl}></img>
        <p className="review-form-review-user-name">{review.author.name}</p>
      </div>
      <div className="review-form-review-body-container">
        <p className="review-form-review-body">{review.body}</p>
        <p className="review-form-review-date">{date} at {time}</p>
      </div>
    </li>
  )

}

export default ReviewItem;
