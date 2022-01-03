import React from 'react';
import { Link } from 'react-router-dom';

class LoginSignup extends React.Component {
  constructor(props) {
    super(props)
  }

  componentDidMount(){
    debugger
  }

  render(){
    debugger
    return(
      <div>
        <ul>
          <li>test</li>
          <li></li>
          <li></li>
        </ul>
      </div>
    )
  }
} 

// const LoginSignup = ({ currentUser, logout }) => {
//   const sessionLinks = () => (
//     <nav className="login-signup">
//       <Link to="/login">Login</Link>
//       &nbsp;or&nbsp;
//       <Link to="/signup">Sign up!</Link>
//     </nav>
//   );
//   const personalGreeting = () => (
//     <hgroup className="header-group">
//       <h2 className="header-name">Hi, {currentUser.username}!</h2>
//       <button className="header-button" onClick={logout}>Log Out</button>
//     </hgroup>
//   );

//   return currentUser ? personalGreeting() : sessionLinks();
// };


// const LoginSignup = ({ currentUser, logout }) => {
//   const sessionLinks = () => {
//     return(
//     <nav className="login-signup">
//       <Link to="/login">Login</Link>
//       <Link to="/signup">Sign up!</Link>
//     </nav>
//   )};
//   const personalGreeting = () => (
//     <hgroup className="header-group">
//       <h2 className="header-name">Hi, {currentUser.username}.</h2>
//       <Link to="/reservations">Trips</Link>
//       <Link to="/favorties">Saves</Link>
//       <Link to="/messages">Inbox</Link>
//       <button className="header-button" onClick={logout}>Log Out</button>
//     </hgroup>
//   );

//   return currentUser ? personalGreeting() : sessionLinks();
// };


export default LoginSignup;
