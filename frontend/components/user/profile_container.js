import { connect } from 'react-redux';
import Profile from './profile';
import { fetchUserBookings} from '../../actions/booking_actions';
import { fetchUserReviews, clearAllReviews, deleteReview } from '../../actions/review_actions';
import { activeModal } from '../../actions/modal_actions';
import { receiveUpdateBooking } from '../../actions/booking_actions';

const mSTP = state => {
    return {
      user: Object.values(state.entities.users)[0],
      bookings: Object.values(state.entities.bookings),
      reviews: Object.values(state.entities.reviews)
    }
};

const mDTP = dispatch => ({
    fetchUserBookings: (userId) => dispatch(fetchUserBookings(userId)),
    fetchUserReviews: (userId) => dispatch(fetchUserReviews(userId)),
    activateModal: (modalType) => dispatch(activeModal(modalType)),
    getBooking: (booking) => dispatch(receiveUpdateBooking(booking)),
    clearAllReviews: () => dispatch(clearAllReviews()),
    deleteReview: (reviewId) => dispatch(deleteReview(reviewId))
});

export default connect(mSTP, mDTP)(Profile);