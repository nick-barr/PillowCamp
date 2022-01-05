import * as SessionUtil from '../util/session_util';

export const RECEIVE_CURRENT_USER = 'RECEIVE_CURRENT_USER';
export const LOGOUT_CURRENT_USER = 'LOGOUT_CURRENT_USER';
export const RECEIVE_SESSION_ERRORS = 'RECEIVE_SESSION_ERRORS';
export const CLEAR_SESSION_ERRORS = 'CLEAR_SESSION_ERRORS';

const receieveCurrentUser = currentUser => ({
    type: RECEIVE_CURRENT_USER,
    currentUser
});

const logoutCurrentUser = () => ({
    type: LOGOUT_CURRENT_USER
});

const receiveErrors = errors => ({
    type: RECEIVE_SESSION_ERRORS,
    errors
});

const clearSessionErrors = () => ({
    type: CLEAR_SESSION_ERRORS,
})

export const signup = user => dispatch => (
    SessionUtil.signup(user)
        .then(user => dispatch(receieveCurrentUser(user)),
        error => dispatch(receiveErrors(error.responseJSON)))
);

export const login = user => dispatch => (
    SessionUtil.login(user)
        .then(user => dispatch(receieveCurrentUser(user)),
        error => dispatch(receiveErrors(error.responseJSON)))
);

export const logout = user => dispatch => (
    SessionUtil.logout(user)
        .then(user => dispatch(logoutCurrentUser(user)))
);

export const clearErrors = () => dispatch => {
    return dispatch(clearSessionErrors());
};