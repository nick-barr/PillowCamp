import * as ReviewUtil from '../util/review_util';

export const RECEIVE_REVIEW = 'RECEIVE_REVIEW';
// export const RECEIVE_REVIEW_ERRORS = "RECEIVE_REVIEW_ERRORS";
export const REMOVE_REVIEW = 'REMOVE_REVIEW';
export const RECEIVE_ALL_REVIEWS = 'RECEIVE_ALL_REVIEWS';
export const CLEAR_REVIEWS = 'CLEAR_REVIEWS';

export const receiveReview = (review) => ({
    type: RECEIVE_REVIEW,
    review
});

export const receiveAllReviews = (reviews) => ({
    type: RECEIVE_ALL_REVIEWS,
    reviews
});

export const removeReview = (reviewId) => ({
    type: REMOVE_REVIEW,
    review: reviewId
})

export const clearAllReviews = () => ({
    type: CLEAR_REVIEWS,
})

// export const receiveReviewErrors = (errors) => ({
//     type: RECEIVE_REVIEW_ERRORS,
//     errors
// });

export const fetchUserReviews = (userId) => dispatch => {
    return ReviewUtil.fetchReviews(userId)
    .then((reviews) => dispatch(receiveAllReviews(reviews)));
  };

export const fetchSpotReviews = spotId => dispatch => {
    return ReviewUtil.fetchReviews(spotId)
        .then(reviews => dispatch(receiveAllReviews(reviews)));
}

export const createReview = (review) => dispatch => {
    return ReviewUtil.createReview(review)
        // .then(reviews => dispatch(receiveAllReviews(reviews)))
        .then(review => dispatch(receiveReview(review)))
};

export const deleteReview = (reviewId) => dispatch => {
    return ReviewUtil.deleteReview(reviewId)
    .then(() =>dispatch(removeReview(reviewId)))
};