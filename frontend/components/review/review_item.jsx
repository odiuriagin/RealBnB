import React from 'react';

const ReviewItem = ({ review }) => {

  return (
    <li className="review-form-review-item">
      <div className="review-form-review-user-container">
        <img className="review-form-review-image" src={review.authorPhotoUrl}></img>
        <p className="review-form-review-user-name">{review.author.name}</p>
      </div>
      <div className="review-form-review-body">
        <p>{review.body}</p>
      </div>
    </li>
  )

}

export default ReviewItem;
