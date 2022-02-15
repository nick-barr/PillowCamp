import React from 'react';

class UserReviews extends React.Component{
    constructor(props){
        super(props)
    }

    render(){
        return(
            <ul className='profile-user-reviews'>
            {this.props.reviews.map(review =>(
                <li key={review.id} className='user-review-show'>
                    <img src={review.photoUrls} />
                    <div className='user-review-content'>
                        <h1>{review.title}</h1>
                        <h2><span>Your review: </span>{review.body}</h2>
                    </div>
                    {/* <button onClick={() => this.removeReview(review.id)}>Delete Review</button> */}
                </li>
                )) 
            } 
        </ul>
        )
    }
}

export default UserReviews;