import { combineReducers } from "redux";
import users from './users_reducer';
import spots from './spots_reducer'
import bookings from './bookings_reducer'
import reviews from "./reviews_reducer";
import updates from "./update_reducer";

const entitiesReducer = combineReducers({
    users,
    spots,
    bookings,
    reviews,
    updates
})

export default entitiesReducer;