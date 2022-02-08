import React from 'react';

class Reviews extends React.Component{
    constructor(props){
        super(props)
    }

    render(){
        // debugger
        return(
            <div className='user-review-container'>
                <h1>3 Reviews</h1>
                {this.props.reviews.map(review =>
                <div key={review.id} className='user-review'>
                    <img src="https://sharespost-sharex-production.s3.us-west-2.amazonaws.com/uploads/issuer/100001872/logo/hipcamp-logo.png" alt="" />
                        <div className='review-content'>
                            <h2>{review.user}</h2>
                            <h3>{review.body}</h3>
                        </div>
                </div>
                )}
            </div>
        )
    }
}

export default Reviews;