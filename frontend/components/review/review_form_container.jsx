import React from 'react';
import { fetchProperty } from '../../actions/properties_actions';
import { fetchReviews, createReview } from '../../actions/review_actions';
import { connect } from 'react-redux';
import ReviewForm from './review_form';



  const mapStateToProps = (state = {}, ownProps) => {
    return {
      property: state.entities.properties[ownProps.match.params.propertyId],
      users: state.entities.users,
      currentUserId: state.session.currentUserId,
    };
  };

  const mapDispatchToProps = (dispatch) => {
    return {
      fetchProperty: (id) => dispatch(fetchProperty(id)),
      fetchReviews: () => dispatch(fetchReviews()),
      createReview: (review) => dispatch(createReview(review)),
    };
  };


export default connect(mapStateToProps, mapDispatchToProps)(ReviewForm);
