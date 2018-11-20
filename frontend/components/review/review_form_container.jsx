import React from 'react';
import { fetchProperty } from '../../actions/properties_actions';
import { connect } from 'react-redux';
import ReviewForm from './review_form';



  const mapStateToProps = (state = {}, ownProps) => {
    return {
      property: state.entities.properties[ownProps.match.params.propertyId]
    };
  };

  const mapDispatchToProps = (dispatch) => {
    return {
      fetchProperty: (id) => dispatch(fetchProperty(id)),
    };
  };


export default connect(mapStateToProps, mapDispatchToProps)(ReviewForm);
