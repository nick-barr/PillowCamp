import { connect } from 'react-redux';
import { logout } from '../../actions/session_actions';
import { fetchSpots } from '../../actions/spot_actions';
import { receiveUpdateSearch, removeUpateSearch } from '../../actions/search_actions';
import SearchBar2 from './searchBar2';

const mSTP = state => ({
  spots: Object.values(state.entities.spots)
});

const mDTP = dispatch => ({
  fetchAllSpots: () => dispatch(fetchSpots()),
  logout: () => dispatch(logout()),
  receiveUpdateSearch: (results) => dispatch(receiveUpdateSearch(results)),
  removeUpateSearch: () => dispatch(removeUpateSearch)

});

export default connect(mSTP, mDTP)(SearchBar2);