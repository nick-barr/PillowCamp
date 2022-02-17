import {connect} from 'react-redux';
import Reviews from './reviews';
import { createReview, fetchSpotReviews, clearAllReviews } from '../../actions/review_actions';

const mSTP = (state) => {
    return{
        userId: state.session.id,
        reviews: Object.values(state.entities.reviews)
    }
}

const mDTP = dispatch => ({
    createReview: reviewDetails => dispatch(createReview(reviewDetails)),
    fetchSpotReviews: spotId => dispatch(fetchSpotReviews(spotId)),
    clearAllReviews: () => dispatch(clearAllReviews())
})

export default connect(mSTP, mDTP)(Reviews);