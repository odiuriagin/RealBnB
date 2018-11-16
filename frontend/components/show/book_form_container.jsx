import React from 'react';
import { connect } from 'react-redux';

const mapStateToProps = (state = {}, ownProps) => {
  return {
    property: state.entities.properties[ownProps.match.params.propertyId]
  }
}
