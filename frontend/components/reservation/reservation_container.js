import {connect} from 'react-redux';
import ReservationForm from './reservation_form';
import { createBooking } from '../../actions/booking_actions';
import { activeModal } from '../../actions/modal_actions';

const mSTP = (state) => {
    return{
        userId: state.session.id
    }
}

const mDTP = dispatch => ({
    createBooking: bookingDetails => dispatch(createBooking(bookingDetails)),
    activateModal: modalType => dispatch(activeModal(modalType))
})

export default connect(mSTP, mDTP)(ReservationForm);