import * as BookingUtil from '../util/booking_util';

export const RECEIVE_BOOKING = 'RECEIVE_BOOKING';
export const RECEIVE_BOOKING_ERRORS = "RECEIVE_BOOKING_ERRORS";
export const REMOVE_BOOKING = 'REMOVE_BOOKING';
export const RECEIVE_ALL_BOOKINGS = 'RECEIVE_ALL_BOOKINGS';

export const receiveBooking = (booking) => ({
    type: RECEIVE_BOOKING,
    booking
});

export const receiveAllBookings = (bookings) => ({
    type: RECEIVE_ALL_BOOKINGS,
    bookings
});

export const removeBooking = (booking) => ({
    type: REMOVE_BOOKING,
    booking: booking
})

export const receiveBookingErrors = (errors) => ({
    type: RECEIVE_BOOKING_ERRORS,
    errors
});

export const fetchUserBookings = (userId) => dispatch => {
    return BookingUtil.fetchBookings(userId)
    .then((bookings) => dispatch(receiveAllBookings(bookings)));
  };

export const createBooking = (booking) => dispatch => {
    debugger
    return BookingUtil.createBooking(booking)
        .then(booking => dispatch(receiveBooking(booking)))
};

export const deleteBooking = (bookingId) => dispatch => {
    return BookingUtil.deleteBooking(bookingId)
    .then((bookingId) =>dispatch(removeBooking(bookingId)))
};
