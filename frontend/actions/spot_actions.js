import * as SpotUtil from '../util/spot_util'

export const RECEIVE_ALL_SPOTS = 'RECEIVE_ALL_SPOTS';
export const RECEIVE_SPOT = 'RECEIVE_SPOT';

const receiveSpots = spots => ({
    type: RECEIVE_ALL_SPOTS,
    spots
});

const receiveSpot = spot => ({
    type: RECEIVE_SPOT,
    spot
});

export const fetchSpots = () => dispatch => (
    SpotUtil.fetchSpots()
        .then((spots) => dispatch(receiveSpots(spots)))
);

export const fetchSpot = (spotId) => dispatch => (
    SpotUtil.fetchSpot(spotId)
        .then((spot) => dispatch(receiveSpot(spot)))
);
