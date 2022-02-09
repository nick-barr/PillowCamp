import React from 'react';

class UserReviews extends React.Component{
    constructor(props){
        super(props)
    }

    render(){
        return(
            <ul>
            {this.props.reviews.map(review =>(
                <li key={review.id}>
                    <div>
                        <div>
                            <img src="https://sharespost-sharex-production.s3.us-west-2.amazonaws.com/uploads/issuer/100001872/logo/hipcamp-logo.png" alt="" />
                            User ID: {review.user_id} <br/>
                            Spot ID: {review.spot_id} <br/>
                            review ID: {review.id} <br/>
                            Review: {review.body} <br/>
                        </div>
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