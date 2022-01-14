import { combineReducers } from "redux";
import users from './users_reducer';
import spots from './spots_reducer'
import bookings from './bookings_reducer'

const entitiesReducer = combineReducers({
    users,
    spots,
    bookings
})

export default entitiesReducer;