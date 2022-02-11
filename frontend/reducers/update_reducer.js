import { RECEIVE_UPDATE_BOOKING, REMOVE_UPDATE_BOOKING } from '../actions/booking_actions';

const UpdatesReducer = (state = null, action) => {
    Object.freeze(state);
    let newState;
    switch(action.type){

        case RECEIVE_UPDATE_BOOKING:
            newState = Object.assign({}, state, action.booking);
            return newState;

        case REMOVE_UPDATE_BOOKING:
            return null;
            
        default:
            return state
    }
}
export default UpdatesReducer;