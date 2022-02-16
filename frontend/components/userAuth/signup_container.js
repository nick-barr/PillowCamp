import { connect } from 'react-redux';
import { signup, login, clearErrors } from '../../actions/session_actions';
import React from 'react';
import { Link } from 'react-router-dom';
import SessionForm from './session_form';

const mapStateToProps = ({ errors }) => {
  return {
    errors: errors.session,
    formType: 'Signup',
    navLink: <Link to="/login">Or click here to log in</Link>,
    welcome: 'Ready for Adventure?',
    subline: `Let's get you outside.`
  };
};

const mapDispatchToProps = dispatch => {
  return {
    processForm: (user) => dispatch(signup(user)),
    processFormDemo: (user) => dispatch(login(user)),
    clearErrors: () => dispatch(clearErrors())
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(SessionForm);
