import React from 'react';
import IndexNavContainer from '../index/index_nav/index_nav_container';

class ReviewForm extends React.Component {


  componentDidMount() {
    this.props.fetchProperty(this.props.match.params.propertyId)
  }

  render() {

    const property = this.props.property

    if (!property) {
      return null;
    }

    return (
      <>
      <IndexNavContainer />
      <div className="review-form-container">
        <section className="review-property-info">
          <p className="review-hosted-by">Hosted by:</p>
          <p>{property.owner.name}</p>
          <img className="review-property-photo" src={property.photoUrls[0]} />
          <h3 className="review-city">{property.city}, {property.state}</h3>
        </section>
        <div className="review-section">
          <form className="review-form">
            <p>Please type your review here:</p>
            <textarea></textarea>
            <p>Reviews will be visible both here and on the listing profile.</p>
          </form>
          <p className="past-reviews-heading">Past Reviews</p>
        </div>
      </div>
      </>
    )
  }

}

export default ReviewForm;
