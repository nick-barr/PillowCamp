import { connect } from 'react-redux';
import { logout } from '../../actions/session_actions';
import AuthBar from './authbar';

const mSTP = ({ session, entities: { users } }) => ({
    currentUser: users[session.id]
});

const mDTP = dispatch => ({
  logout: () => dispatch(logout())
});

export default connect(mSTP, mDTP)(AuthBar);

// const mapStateToProps = ({ session, entities: { users } }) => {
//   return {
//     currentUser: users[session.id]
//   };
// };

// const mapDispatchToProps = dispatch => ({
//   logout: () => dispatch(logout())
// });

// export default connect(
//   mapStateToProps,
//   mapDispatchToProps
// )(LoginSignup);
