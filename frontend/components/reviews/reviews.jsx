import React from 'react';

class Reviews extends React.Component{
    constructor(props){
        super(props)
        

        this.state = {
            user_id: this.props.userId,
            spot_id: this.props.spotId
        }

        this.newReviewInput = this.newReviewInput.bind(this);
        this.handleCreate = this.handleCreate.bind(this);
    }

    componentDidMount(){
        this.props.fetchSpotReviews({spot_id: this.props.spotId})
    }

    componentDidUpdate(prevProps){
        if (prevProps.userId !== this.props.userId) {
            this.setState({user_id: this.props.userId})
        }
    }

    componentWillUnmount(){
        this.props.clearAllReviews();
    }
    
    handleCreate(e){
        e.preventDefault();
        this.props.createReview(this.state);
        this.setState({body: ''});
        document.getElementById('textarea-review').value='';
    }
    
    formUpdates(field){
        return e => this.setState({[field]: e.currentTarget.value})
    }

    newReviewInput(){
        if (this.props.userId) {
        
            return(
                    <form className='review-form' onSubmit={this.handleCreate}>
                        <label>Leave a review</label>
                        <div className='review-form-controls'>
                            <textarea
                                id='textarea-review' 
                                onChange={this.formUpdates("body")} 
                                placeholder="Tell us your thoughts" 
                                required>
                            </textarea>
                            <button className='review-form__submit'>Submit Review</button>
                        </div>
                    </form>
                )
        }
    }

    render(){
        return(
            <div className='user-review-container'>
                <div>{this.newReviewInput()}</div>
                <h1>{this.props.reviews.length} Reviews</h1>
                {this.props.reviews.map(review =>
                <div className='user-review'>
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