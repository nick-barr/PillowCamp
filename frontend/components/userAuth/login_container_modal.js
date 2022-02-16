import { connect } from 'react-redux';
import { login, clearErrors } from '../../actions/session_actions';
import React from 'react';
import { Link } from 'react-router-dom';
import SessionForm from './session_form';

const mapStateToProps = ({ errors }) => {
  return {
    errors: errors.session,
    formType: 'Login',
    navLink: <Link to="/signup">Or click here to sign up instead</Link>,
    welcome: 'Thanks for your enthusiasm ',
    subline: `Please login to make your reservation.`
  };
};

const mapDispatchToProps = dispatch => {
  return {
    processForm: (user) => dispatch(login(user)),
    processFormDemo: (user) => dispatch(login(user)),
    clearErrors: () => dispatch(clearErrors())
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(SessionForm);
