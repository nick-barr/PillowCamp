import { connect } from 'react-redux';
import { logout } from '../../actions/session_actions';
import SearchBar from './searchBar';

const mSTP = ({ session, entities: { users } }) => ({
  currentUser: users[session.id]
});

const mDTP = dispatch => ({
  logout: () => dispatch(logout())
});

export default connect(mSTP, mDTP)(SearchBar);