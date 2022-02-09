import { connect } from 'react-redux';
import Profile from './profile';
// import { requestUser } from '../../actions/user_actions';
import { deleteBooking, fetchUserBookings, } from '../../actions/booking_actions';
import { fetchUserReviews } from '../../actions/review_actions';
// import { fetchSpots } from '../actions/spot_actions';

const mSTP = (state, ownProps) => {
    // debugger
    return {
      user: Object.values(state.entities.users)[0],
      bookings: Object.values(state.entities.bookings),
      reviews: Object.values(state.entities.reviews)
    }
};

const mDTP = dispatch => ({
    // requestUser: (user) => dispatch(requestUser(user)),
    fetchUserBookings: (userId) => dispatch(fetchUserBookings(userId)),
    fetchUserReviews: (userId) => dispatch(fetchUserReviews(userId)),
    // fetchSpots: (id) => dispatch(fetchSpots(id)),
    deleteBooking: (bookingId) => dispatch(deleteBooking(bookingId))
});

export default connect(mSTP, mDTP)(Profile);