import { RECEIVE_UPDATE_BOOKING, REMOVE_UPDATE_BOOKING } from '../actions/booking_actions';
import { RECEIVE_UPDATE_SEARCH, REMOVE_UPDATE_SEARCH } from '../actions/search_actions';

const UpdatesReducer = (state = [], action) => {
    Object.freeze(state);
    let newState;
    switch(action.type){

        case RECEIVE_UPDATE_BOOKING:
            newState = Object.assign({}, state, action.booking);
            return newState;

        case REMOVE_UPDATE_BOOKING:
            return [];
            
        case RECEIVE_UPDATE_SEARCH:
            newState = Object.assign({}, state, action.search);
            return newState;

        case REMOVE_UPDATE_SEARCH:
            return [];
            
        default:
            return state
    }
}
export default UpdatesReducer;