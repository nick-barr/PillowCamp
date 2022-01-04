import { connect } from 'react-redux';
import { logout } from '../../actions/session_actions';
import SpotList from './spotList';

const mSTP = ({ session, entities: { users } }) => ({
  currentUser: users[session.id]
});

const mDTP = dispatch => ({
  logout: () => dispatch(logout())
});

export default connect(mSTP, mDTP)(SpotList);