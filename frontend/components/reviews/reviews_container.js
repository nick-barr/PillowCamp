import {connect} from 'react-redux';
import Reviews from './reviews';
import { createReview } from '../../actions/review_actions';
import { activeModal } from '../../actions/modal_actions';

const mSTP = (state) => {
    return{
        userId: state.session.id
    }
}

const mDTP = dispatch => ({
    createReview: reviewDetails => dispatch(createReview(reviewDetails)),
    activateModal: modalType => dispatch(activeModal(modalType))
})

export default connect(mSTP, mDTP)(Reviews);