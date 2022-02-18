import React from 'react';
import { Link } from 'react-router-dom';

class UserReviews extends React.Component{
    constructor(props){
        super(props)
    }

    componentWillUnmount(){
        this.props.clearAllReviews();
    }

    render(){
        return(
            <ul className='profile-user-reviews'>
            {this.props.reviews.map(review =>(
                <li key={review.id} className='user-review-show'>
                    <Link to={`/spot/${review.spot_id}`}>
                        <img src={review.photoUrls} />
                    </Link>
                    <div className='user-review-content'>
                        <Link to={`/spot/${review.spot_id}`}>
                            <h1>{review.title}</h1>
                        </Link>
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