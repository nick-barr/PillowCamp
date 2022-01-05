import React from 'react';
import { Link } from 'react-router-dom';

const AuthBar = ({ currentUser, logout }) => {
  const sessionLinks = () => (
    <nav className="login-signup">
      <Link to="/login" className="auth-options">Login</Link>
      <br />
      <Link to="/signup" className="auth-options">Sign up!</Link>
    </nav>
  );
  const personalGreeting = () => (
    <nav className="user-links">
      {/* <h2 className="user-greet">Hi, {currentUser.username}!</h2> */}
      <h2 className="user-greet"></h2>
        <Link to="/reservations" className="auth-options">Trips</Link>
        <Link to="/favorites" className="auth-options">Favorites</Link>
        <Link to="/messages" className="auth-options">Inbox</Link>
      <button className="header-button" onClick={logout}>Log Out</button>
    </nav>
  );

  return currentUser ? personalGreeting() : sessionLinks();
};

export default AuthBar;
