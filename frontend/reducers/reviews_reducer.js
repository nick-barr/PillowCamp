import { RECEIVE_REVIEW, REMOVE_REVIEW, RECEIVE_ALL_REVIEWS } from '../actions/review_actions';

const ReviewsReducer = (oldState = {}, action) => {
    // debugger
    Object.freeze(oldState);
    let newState;
    switch(action.type){
        case RECEIVE_ALL_REVIEWS:
            newState = Object.assign({}, oldState, action.reviews)
            return newState;
        case RECEIVE_REVIEW:
            newState = Object.assign({}, oldState, { [action.review.id]: action.review});
            return newState;
        case REMOVE_REVIEW:
            newState = Object.assign({}, oldState);
            delete newState[action.review];
            return newState;
        default:
            return oldState
    }
}

export default ReviewsReducer;