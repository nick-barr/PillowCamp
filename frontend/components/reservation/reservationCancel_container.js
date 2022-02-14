import {connect} from 'react-redux';
import ReservationCancel from './reservation_cancel';
import { deleteBooking } from '../../actions/booking_actions';
import { inactiveModal } from '../../actions/modal_actions';
import { removeUpdateBooking } from '../../actions/booking_actions';


const mSTP = (state) => {
    return{
        booking: state.entities.updates
    }
}

const mDTP = dispatch => ({
    deleteBooking: bookingId => dispatch(deleteBooking(bookingId)),
    removeBooking: () => dispatch(removeUpdateBooking()),
    inactiveModal: () => dispatch(inactiveModal())
})

export default connect(mSTP, mDTP)(ReservationCancel);