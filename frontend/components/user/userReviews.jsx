import React from 'react';

class UserReviews extends React.Component{
    constructor(props){
        super(props)
    }

    render(){
        return(
            <ul className='profile-user-reviews'>
            {this.props.reviews.map(review =>(
                <li key={review.id}>
                    <div>
                        <div>
                            Spot picture here <br/>
                            Spot Name here: {review.spot_id} <br/>
                            {review.body} <br/>
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