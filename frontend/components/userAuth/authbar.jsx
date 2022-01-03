import React from 'react';
import { Link } from 'react-router-dom';

const AuthBar = ({ currentUser, logout }) => {
  const sessionLinks = () => (
    <nav className="login-signup">
      <Link to="/login">Login</Link>
      <br />
      <Link to="/signup">Sign up!</Link>
    </nav>
  );
  const personalGreeting = () => (
    // <div>
    <hgroup className="header-group">
      <h2 className="header-name">Hi, {currentUser.username}!</h2>
      <Link to="/reservations">Trips</Link>
      <Link to="/favorites">Favorites</Link>
      <Link to="/messages">Inbox</Link>
      <button className="header-button" onClick={logout}>Log Out</button>
    </hgroup>
    // </div>
  );

  return currentUser ? personalGreeting() : sessionLinks();
};

export default AuthBar;
