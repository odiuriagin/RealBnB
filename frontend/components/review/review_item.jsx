import React from 'react';
import moment from 'moment';
import Ratings from 'react-ratings-declarative';

class ReviewItem extends React.Component {

  constructor(props) {
    super(props)
    this.state = {
      review: props.review,
      reviewTracker: null,
      body: ""
    }

    this.handleDelete = this.handleDelete.bind(this);
  }


  handleDelete(id) {
    this.props.deleteReview(id)
      .then(this.setState({
        reviewTracker: !this.state.reviewTracker,
        review: null,
        })
      );
  }


  render() {

    console.log(this.props);


    let date = moment(this.props.review.created_at).format('DD-MMM-YYYY');
    let time = moment(this.props.review.created_at).format('h:mm A');
    let reviewRating;
    let deleteLink;
    if (this.props.review.user_id === this.props.currentUserId) {
      deleteLink = (
        <a className="review-delete-link" onClick={() => this.handleDelete(this.state.review.id)}>Delete Your Review</a>
      )
    } else {
      deleteLink = <div></div>
    }


    if (!this.state.review) {
      return <div></div>
    }

    if (!this.state.review.value) {
      reviewRating = 0;
    } else {
      reviewRating = this.state.review.value;
    }

    return (
      <li className="review-form-review-item">
        <div className="review-form-review-user-container">
          <img className="review-form-review-image" src={this.state.review.authorPhotoUrl}></img>
          <p className="review-form-review-user-name">{this.state.review.author.name}</p>
        </div>
        <div className="review-form-review-body-container">
          <p className="review-form-review-body">{this.state.review.body}</p>
            <Ratings
              rating={reviewRating}
              widgetDimensions="15px"
              widgetSpacings="3px"
              widgetRatedColors="#008489"
            >
              <Ratings.Widget />
              <Ratings.Widget />
              <Ratings.Widget />
              <Ratings.Widget />
              <Ratings.Widget />
            </Ratings>
            <div>
              {deleteLink}
              <p className="review-form-review-date">{date} at {time}</p>
            </div>
        </div>
      </li>
    )
  }
}



export default ReviewItem;
