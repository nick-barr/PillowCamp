import { connect } from 'react-redux';
import { signup, login, clearErrors } from '../../actions/session_actions';
import { activeModal, inactiveModal } from '../../actions/modal_actions';
import React from 'react';
import SessionForm from './session_form';

const mapStateToProps = (state) => {
  return {
    errors: state.errors.session,
    currentUser: state.entities.users[state.session.id],
    formType: 'Signup',
    navLink: <a>Or click here to log in</a>,
    modalType: 'login',
    welcome: 'Almost there',
    subline: `Please sign up to make a reservation.`
  };
};

const mapDispatchToProps = dispatch => {
  return {
    processForm: (user) => dispatch(signup(user)),
    processFormDemo: (user) => dispatch(login(user)),
    clearErrors: () => dispatch(clearErrors()),
    switchModal: modalType => dispatch(activeModal(modalType)),
    closeModal: () => dispatch(inactiveModal())
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(SessionForm);
