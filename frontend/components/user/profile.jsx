import React from 'react';
import UserShow from './userShow';
import UserBookings from './userBookings';
import UserReviews from './userReviews';

class Profile extends React.Component {
    constructor(props) {
        super(props)
    }; 

    componentDidMount () {
        window.scrollTo(0, 0);
        this.props.fetchUserBookings(this.props.match.params.userId);
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
                        picture, user name, most upcoming trip (bonus)?
                    </div>
                    <div className="profile-nav-content">
                        <UserBookings bookings={this.props.bookings} deleteBooking={this.props.deleteBooking} />
                        <UserReviews reviews={this.props} />
                    </div>

                </div>
            </div>
          </div>
        )}

}


export default Profile;