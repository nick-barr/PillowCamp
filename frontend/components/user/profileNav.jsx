import React from 'react';
import {NavLink} from 'react-router-dom';

function ProfileNav(props) {
    return(
        <div className="profile-nav">
            <div className='pNav-box'>
            <NavLink activeClassName="active-pNav" className="pNav" to={`/profile/${props.user.id}/bookings`}>
            Trips
            </NavLink>
            </div>

            <div className='pNav-box'>
            <NavLink activeClassName="active-pNav" className="pNav" to={`/profile/${props.user.id}/reviews`}>
                Reviews
            </NavLink>
            </div>
        </div>
    )
  }

export default ProfileNav;