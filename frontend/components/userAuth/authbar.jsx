import React from 'react';
import { Link, NavLink } from 'react-router-dom';

const AuthBar = ({ currentUser, logout }) => {
  const sessionLinks = () => (
    <nav className="login-signup">
      <NavLink activeClassName="authbar-active" to="/login" className="auth-options">Login</NavLink>
      <br />
      <NavLink activeClassName="authbar-active" to="/signup" className="auth-options">Sign up</NavLink>
    </nav>
  );
  const personalGreeting = () => (
    <nav className="user-links">
      {/* <h2 className="user-greet">Hi, {currentUser.username}!</h2> */}
      <h2 className="user-greet"></h2>
        <NavLink activeClassName="authbar-active" to={`/profile/${currentUser.id}/bookings`} className="auth-options">Profile</NavLink>
        <Link to="/" className="auth-options" onClick={logout}>Logout</Link>
      {/* <button className="header-button" >Log Out</button> */}
    </nav>
  );

  return currentUser ? personalGreeting() : sessionLinks();
};

export default AuthBar;
