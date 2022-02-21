import React from 'react';
import {Switch, Route, NavLink} from 'react-router-dom';
import UserShow from './userShow';
import UserBookings from './userBookings';
import UserReviews from './userReviews';
import ProfileNav from './profileNav';

class Profile extends React.Component {
    constructor(props) {
        super(props)
        this.state = {loaded: false}
    }; 

    componentDidMount () {
        window.scrollTo(0, 0);
        this.props.fetchUserBookings(this.props.match.params.userId);
        this.props.fetchUserReviews({user_id: this.props.match.params.userId});
        this.setState(prevState => ({loaded: !prevState.loading}))
    }

    render() {
        return (
          <div className="profile-background">
            <div className="profile-container">
                
                <div className="user-show-container">
                    <UserShow user={this.props.user}/>
                </div>

                <div className="user-things-container">
                    <div className="profile-nav-container">
                        <ProfileNav user={this.props.user} />
                    </div>

                    <div className="profile-nav-content">
                        <Switch>
                            <Route path="/profile/:userId/bookings" render={(props) => 
                                <UserBookings {...props} 
                                    bookings={this.props.bookings} 
                                    deleteBooking={this.props.deleteBooking} 
                                    updateBooking={this.props.updateBooking}
                                    activateModal={this.props.activateModal} 
                                    getBooking={this.props.getBooking}
                                />} 
                            />

                            <Route path="/profile/:userId/reviews" render={(props) => 
                                <UserReviews {...props} 
                                    reviews={this.props.reviews}
                                    clearAllReviews={this.props.clearAllReviews}
                                    deleteReview={this.props.deleteReview} 
                                />} 
                            />
                        </Switch>
                    </div>
                </div>
                
            </div>
          </div>
        )}

}


export default Profile;