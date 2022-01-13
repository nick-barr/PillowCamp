import { RECEIVE_ALL_SPOTS, RECEIVE_SPOT } from "../actions/spot_actions";

const SpotReducer = (state = {}, action) => {
    Object.freeze(state)
    let nextState = Object.assign({}, state)

    switch (action.type) {
        case RECEIVE_ALL_SPOTS:
            nextState = Object.assign({}, state, action.spots)
            return nextState;

        case RECEIVE_SPOT:
            nextState = Object.assign({}, state, {[action.spot.id]: action.spot})
            return nextState;
        
        default:
            return state;
    }
}

export default SpotReducer;