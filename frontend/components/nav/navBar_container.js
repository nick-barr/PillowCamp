import { connect } from 'react-redux';
import { logout } from '../../actions/session_actions';
import NavBar from './navBar';

const mSTP = ({ session, entities: { users } }) => ({
});

const mDTP = dispatch => ({
  logout: () => dispatch(logout())
});

export default connect(mSTP, mDTP)(NavBar);