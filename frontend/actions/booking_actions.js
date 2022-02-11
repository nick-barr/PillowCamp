import * as BookingUtil from '../util/booking_util';

export const RECEIVE_BOOKING = 'RECEIVE_BOOKING';
export const RECEIVE_BOOKING_ERRORS = "RECEIVE_BOOKING_ERRORS";
export const REMOVE_BOOKING = 'REMOVE_BOOKING';
export const RECEIVE_ALL_BOOKINGS = 'RECEIVE_ALL_BOOKINGS';
export const RECEIVE_UPDATE_BOOKING = 'RECEIVE_UPDATE_BOOKING';
export const REMOVE_UPDATE_BOOKING = 'REMOVE_UPDATE_BOOKING';


export const receiveBooking = (booking) => ({
    type: RECEIVE_BOOKING,
    booking
});

export const receiveAllBookings = (bookings) => ({
    type: RECEIVE_ALL_BOOKINGS,
    bookings
});

export const removeBooking = (bookingId) => ({
    type: REMOVE_BOOKING,
    booking: bookingId
})

export const receiveBookingErrors = (errors) => ({
    type: RECEIVE_BOOKING_ERRORS,
    errors
});

export const receiveUpdateBooking = booking => ({
    type: RECEIVE_UPDATE_BOOKING,
    booking: booking
})

export const removeUpdateBooking = () => ({
    type: REMOVE_UPDATE_BOOKING
})

export const fetchUserBookings = (userId) => dispatch => {
    return BookingUtil.fetchBookings(userId)
    .then((bookings) => dispatch(receiveAllBookings(bookings)));
  };

export const createBooking = (booking) => dispatch => {
    return BookingUtil.createBooking(booking)
        // .then(bookings => dispatch(receiveAllBookings(bookings)))
        .then(booking => dispatch(receiveBooking(booking)))
};

export const updateBooking = (booking) => dispatch => {
    return BookingUtil.updateBooking(booking)
        // .then(bookings => dispatch(receiveAllBookings(bookings)))
        .then(booking => dispatch(receiveBooking(booking)))
};

export const deleteBooking = (bookingId) => dispatch => {
    return BookingUtil.deleteBooking(bookingId)
    .then(() =>dispatch(removeBooking(bookingId)))
};
