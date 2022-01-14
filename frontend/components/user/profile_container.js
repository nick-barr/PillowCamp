import { connect } from 'react-redux';
import Profile from './profile';
// import { requestUser } from '../../actions/user_actions';
// import { deleteBooking, fetchBookings } from '../actions/booking_actions';
// import { fetchSpots } from '../actions/spot_actions';

const mSTP = (state, ownProps) => {
    // debugger
    return {
      // user: state.entities.users[ownProps.match.params.userId],
      // bookings: Object.values(state.entities.bookings)
    }
};

const mDTP = dispatch => ({
    // requestUser: (user) => dispatch(requestUser(user)),
    fetchBookings: (userId) => dispatch(fetchBookings(userId)),
    fetchSpots: (id) => dispatch(fetchSpots(id)),
    // deleteBooking: (bookingId) => dispatch(deleteBooking(bookingId))
});

export default connect(mSTP, mDTP)(Profile);