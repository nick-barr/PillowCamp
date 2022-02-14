import { connect } from 'react-redux';
import ReservationUpdate from './reservation_update';
import { updateBooking } from '../../actions/booking_actions';
import { inactiveModal } from '../../actions/modal_actions';
import { removeUpdateBooking } from '../../actions/booking_actions';


const mSTP = (state) => {
    return{
        booking: state.entities.updates
    }
}

const mDTP = dispatch => ({
    removeBooking: () => dispatch(removeUpdateBooking()),
    updateBooking: booking => dispatch(updateBooking(booking)),
    inactiveModal: () => dispatch(inactiveModal())
})

export default connect(mSTP, mDTP)(ReservationUpdate);