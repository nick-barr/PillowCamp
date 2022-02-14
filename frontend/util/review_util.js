export const fetchReviews = (user_id) =>{
    return  $.ajax({
        url: "/api/reviews",
        data: {user_id: user_id}
    })
};
     

export const fetchReview = (reviewId) => (
 $.ajax({
     url: `/api/reviews/${reviewId}`,
     data: { user_id: user_id }
 })
);

export const createReview = review => {
    return $.ajax({
        url: `/api/reviews`,
        method: 'POST',
        data: {review}
    })
};

export const deleteReview = reviewId => (
 $.ajax({
     url: `/api/reviews/${reviewId}`,
     method: 'DELETE'
 })
);

// export const updateReview = (review) => {
 
//  return $.ajax({
//      url: `/api/reviews/${review.id}`,
//      method: 'PATCH',
//      data: { review }
//  })
// };