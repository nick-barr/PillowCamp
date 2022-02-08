import { RECEIVE_BOOKING, REMOVE_BOOKING, RECEIVE_ALL_BOOKINGS } from '../actions/booking_actions';

const BookingsReducer = (oldState = {}, action) => {
    // debugger
    Object.freeze(oldState);
    let newState;
    switch(action.type){
        case RECEIVE_ALL_BOOKINGS:
            newState = Object.assign({}, oldState, action.bookings)
            return newState;
        case RECEIVE_BOOKING:
            newState = Object.assign({}, oldState, { [action.booking.id]: action.booking});
            return newState;
        case REMOVE_BOOKING:
            newState = Object.assign({}, oldState);
            delete newState[action.booking];
            return newState;
        default:
            return oldState
    }
}

export default BookingsReducer;