export const RECEIVE_UPDATE_SEARCH = 'RECEIVE_UPDATE_SEARCH';
export const REMOVE_UPDATE_SEARCH = 'REMOVE_UPDATE_SEARCH';

export const receiveUpdateSearch = search => ({
    type: RECEIVE_UPDATE_SEARCH,
    search: search
})

export const removeUpdateSearch = () => ({
    type: REMOVE_UPDATE_SEARCH
})