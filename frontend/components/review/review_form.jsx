import React from 'react';
import IndexNavContainer from '../index/index_nav/index_nav_container';
import ReviewItem from './review_item';

class ReviewForm extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      body: "",
      reviewTracker: null,
    }

    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleReviewInput = this.handleReviewInput.bind(this);

  }

  componentDidMount() {
    this.props.fetchProperty(this.props.match.params.propertyId)
  }

  handleSubmit(e) {
    e.preventDefault();
    const review_info = {
      property_id: parseInt(this.props.match.params.propertyId),
      user_id: this.props.currentUserId,
      body: this.state.body,
    }
    this.setState({body: "", reviewTracker: !this.state.reviewTracker})
    this.props.createReview(review_info)
    .then(this.props.fetchProperty(this.props.match.params.propertyId))
  }

  handleReviewInput(e) {
    this.setState({ body: e.target.value })
  }

  render() {

    const property = this.props.property



    if (!property) {
      return null;
    }

    const host = this.props.users[property.host_id];
    const hostPhoto = host ? host.userPhotoUrl : "#";
    const hostName = host ? host.name : "";
    let reviews;
    if (!property.reviews) {
      reviews = <p>There are no reviews for this listing</p>
    } else {
      const review_array = Object.keys(property.reviews).map(id => property.reviews[id]).reverse();
      reviews = review_array.map(review => {
        return (
          <ReviewItem key={review.id} review={review} deleteReview={this.props.deleteReview} currentUserId={this.props.currentUserId}/>
        );
      });
    }


    return (
      <>
      <IndexNavContainer />
      <div className="review-form-container">
        <section className="review-property-info">
          <p className="review-hosted-by">Hosted by:</p>
          <img className="review-host-logo" src={hostPhoto}></img>
          <p>{hostName}</p>
          <img className="review-property-photo" src={property.photoUrls[0]} />
          <h3 className="review-city">{property.city}, {property.state}</h3>
        </section>
        <div className="review-section">
          <form className="review-form">
            <textarea onChange={this.handleReviewInput} value={this.state.body} placeholder="Your review goes here"></textarea>
            <p>Reviews will be visible both here and on the listing profile.</p>
            <button className="review-submit" onClick={this.handleSubmit}>Submit</button>
          </form>
          <p className="past-reviews-heading">Past Reviews</p>
          <ul className="review-form-review-list">{reviews}</ul>
        </div>
      </div>
      </>
    )
  }

}

export default ReviewForm;
