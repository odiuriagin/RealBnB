import React from 'react';
import {connect} from 'react-redux';
import {login, clearErrors} from '../../actions/session_actions';
import {openModal, closeModal} from '../../actions/modal_actions.js';
import SessionForm from './session_form';

const mapStateToProps = (state, ownProps) => {
  return {
    errors: state.errors.session,
    formType: 'Log In'
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    processForm: (user) => dispatch(login(user)),
    otherForm: (
      <p className="switch-form-type">Don’t have an account?
        <a onClick={() => dispatch(openModal('signup'))}>
          Sign Up
        </a>
      </p>
    ),
    closeModal: () => dispatch(closeModal()),
    clearErrors: () => dispatch(clearErrors())
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(SessionForm);
