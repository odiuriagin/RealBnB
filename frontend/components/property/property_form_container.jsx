import React from 'react';
import { connect } from 'react-redux';
import { createProperty, clearPropertyErrors } from '../../actions/properties_actions';
import PropertyForm from './property_form';

const mapStateToProps = (state) => {
    return {
        currentUserId: state.session.currentUserId,
        errors: state.errors.property,
    }
};

const mapDispatchToProps = (dispatch) => {
    return {
        createProperty: (property) => dispatch(createProperty(property)),
        clearPropertyErrors: () => dispatch(clearPropertyErrors()),
    }
};

export default connect(mapStateToProps, mapDispatchToProps)(PropertyForm);