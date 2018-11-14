import React from 'react';
import {connect} from 'react-redux';
import {signup, clearErrors} from '../../actions/session_actions';
import SessionForm from './session_form';
import {openModal, closeModal} from '../../actions/modal_actions.js';

const mapStateToProps = (state, ownProps) => {
  return {
    errors: state.errors.session,
    formType: 'Sign Up'
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    processForm: (user) => dispatch(signup(user)),
    otherForm: (
      <p className="switch-form-type">Don’t have an account?
        <a onClick={() => dispatch(openModal('login'))}>
          Log In
        </a>
      </p>
    ),
    closeModal: () => dispatch(closeModal()),
    clearErrors: () => dispatch(clearErrors())
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(SessionForm);
