import { connect } from 'react-redux';
import { logout } from '../../actions/session_actions';
import LoginSignup from './login_signup';

// const mSTP = ({ session, entities: { users } }) => ({
//     currentUser: users[session.id]
// });
// export const mSTP = (state) => ({
//     currentUser: state.session.id
// });

// const mDTP = dispatch => ({
//   logout: () => dispatch(logout())
// });

// export default connect(mSTP, mDTP)(LoginSignup);

const mapStateToProps = ({ session, entities: { users } }) => {
  return {
    currentUser: users[session.id]
  };
};

const mapDispatchToProps = dispatch => ({
  logout: () => dispatch(logout())
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(LoginSignup);
