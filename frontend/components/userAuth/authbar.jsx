import React from 'react';
import { Link } from 'react-router-dom';

const AuthBar = ({ currentUser, logout }) => {
  const sessionLinks = () => (
    <nav className="login-signup">
      <Link to="/login" className="auth-options">Login</Link>
      <br />
      <Link to="/signup" className="auth-options">Sign up</Link>
    </nav>
  );
  const personalGreeting = () => (
    <nav className="user-links">
      {/* <h2 className="user-greet">Hi, {currentUser.username}!</h2> */}
      <h2 className="user-greet"></h2>
        <Link to={`/profile/${currentUser.id}/bookings`} className="auth-options">Profile</Link>
        <Link to="/" className="auth-options" onClick={logout}>Logout</Link>
      {/* <button className="header-button" >Log Out</button> */}
    </nav>
  );

  return currentUser ? personalGreeting() : sessionLinks();
};

export default AuthBar;
