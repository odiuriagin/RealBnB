import React from 'react';
import { connect } from 'react-redux';
import { createProperty } from '../../actions/properties_actions';
import PropertyForm from './property_form';

const mapStateToProps = (state) => {
    return {
        currentUserId: state.session.currentUserId,
    }
};

const mapDispatchToProps = (dispatch) => {
    return {
        createProperty: (property) => dispatch(createProperty(property)),
    }
};

export default connect(mapStateToProps, mapDispatchToProps)(PropertyForm);