import React from 'react';
import {Switch, Route, NavLink} from 'react-router-dom';
import UserShow from './userShow';
import UserBookings from './userBookings';
import UserReviews from './userReviews';

class Profile extends React.Component {
    constructor(props) {
        super(props)
        this.state = {loaded: false}
        this.activeView = this.activeView.bind(this);
    }; 

    componentDidMount () {
        window.scrollTo(0, 0);
        this.props.fetchUserBookings(this.props.match.params.userId);
        this.props.fetchUserReviews(this.props.match.params.userId);
        this.setState(prevState => ({loaded: !prevState.loading}))
    }

    activeView(){
        let view;

        if (!this.state.loaded === false) { 
        
            switch(view){
                case "bookings":
                    view = <UserBookings bookings={this.props.bookings} deleteBooking={this.props.deleteBooking} updateBooking={this.props.updateBooking} />
                    return view;
                case "reviews":
                    let view = <UserReviews {...props} reviews={this.props.reviews} />
                    return view;
                default:
                    view = <UserBookings {...props} bookings={this.props.bookings} deleteBooking={this.props.deleteBooking} updateBooking={this.props.updateBooking} />
                    return view;
            }
        }

    }

    

    render() {
        return (
          <div className="profile-background">
            <div className="profile-container">
                
                <div className="user-show-container">
                    <UserShow user={this.props.user}/>
                </div>

                <div className="user-things-container">
                    <div className="profile-nav">
                        <NavLink activeClassName="activeBookings" to={`/profile/${this.props.user.id}/bookings`}>
                            Bookings
                        </NavLink>
                        <NavLink activeClassName="activeReviews" to={`/profile/${this.props.user.id}/reviews`}>
                            Reviews
                        </NavLink>
                        <NavLink activeClassName="activeReviews" to={`/profile/${this.props.user.id}/upcoming`}>
                            Latest Trip
                        </NavLink>
                    </div>
                    <div className="profile-nav-content">
                        {/* {this.activeView()} */}
                        <Switch>
                            <Route path="/profile/:userId/bookings" render={(props) => <UserBookings {...props} bookings={this.props.bookings} deleteBooking={this.props.deleteBooking} updateBooking={this.props.updateBooking} />} />
                            <Route path="/profile/:userId/reviews" render={(props) => <UserReviews {...props} reviews={this.props.reviews} />} />
                            <Route path="/profile/:userId/upcoming" render={(props) => <UserReviews {...props} reviews={this.props.reviews} />} />
                        </Switch>
                    </div>

                </div>
            </div>
          </div>
        )}

}


export default Profile;