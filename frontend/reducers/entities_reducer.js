import { combineReducers } from "redux";
import users from './users_reducer';
import spots from './spots_reducer'

const entitiesReducer = combineReducers({
    users,
    spots
})

export default entitiesReducer;