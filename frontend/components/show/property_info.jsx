import React from 'react';
import BookFormContainer from './book_form_container';
import ShowPageMap from './show_page_map';
import ShowPhotos from './show_photos';
import ReviewItem from '../review/review_item';

class PropertyInfo extends React.Component {


  componentDidMount() {
    this.props.fetchProperty(this.props.propertyId)
  }

  render() {
    const { property } = this.props;

    if (!property) return null;

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
          <div key={review.id} className="property-show-review-item">
            <ReviewItem review={review}
               deleteReview={this.props.deleteReview}
               currentUserId={this.props.currentUserId}
              />
          </div>
        );
      });
    }


    const wifi = property.wifi ? (<li><img src={window.wifi}></img>   Wifi</li>) : (<div></div>)
    const tv = property.cable_tv ? (<li><img src={window.tv}></img>   Cable TV</li>) : (<div></div>)
    const washer = property.washer ? (<li><img src={window.washer}></img>   Washer</li>) : (<div></div>)
    const kitchen = property.kitchen ? (<li><img src={window.kitchen}></img>   Kitchen</li>) : (<div></div>)
    const breakfast = property.breakfast ? (<li><img src={window.breakfast}></img>   Breakfast</li>) : (<div></div>)


    return (
      <>
      <ShowPhotos property={property}/>
      <div className="property-info">
        <div className="property-header">
          <p className="property-description-show">{property.description}</p>
          <div className="property-owner">
            <img className="property-owner-logo" src={hostPhoto}></img>
            <p className="property-owner-name">{hostName}</p>
          </div>
          <p className="property-city">{property.city}</p>
        </div>
        <p className="property-body">{property.body}</p>
        <p className="property-amenities-heading">Amenities</p>
        <ul className="property-amneties-list">
          {wifi}
          {tv}
          {washer}
          {kitchen}
          {breakfast}
        </ul>
      </div>
      <div className="clearfix">
        <BookFormContainer propertyId={this.props.propertyId}/>
        <ShowPageMap property={property}/>
        <p className="map-location-note">Exact location information is provided after a booking is confirmed.</p>
        <h3 className="property-show-review-heading">Past reviews:</h3>
        <ul className="property-show-review-list">{reviews}</ul>
      </div>
      </>
    );
  }
}

export default PropertyInfo;
