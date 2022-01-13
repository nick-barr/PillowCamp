import {connect} from 'react-redux';
import ReservationForm from './reservation_form';

const mSTP = (state) => ({
    state
})

const mDTP = dispatch => ({
    test: 'test'
    // reserve: (dates) => dispatch(reserve(dates))
})

export default connect(mSTP, mDTP)(ReservationForm);