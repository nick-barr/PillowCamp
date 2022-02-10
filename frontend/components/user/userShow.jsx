import React from 'react';
import {FaHeart} from 'react-icons/fa';

class UserShow extends React.Component{
    constructor(props){
        super(props)

        this.dateFix = this.dateFix.bind(this);
    }

    dateFix(rubyDate){
        const dateObject = new Date(Date.parse(rubyDate));
        return `${dateObject.toLocaleString('default', { month: 'long' })} ${dateObject.getFullYear()}`
    }

    render(){
        const {username, created_at} = this.props.user

        return(
            <div className="user-show-container2">
                <img src="https://sharespost-sharex-production.s3.us-west-2.amazonaws.com/uploads/issuer/100001872/logo/hipcamp-logo.png" alt="" />
                <br/>
                {username} <br/>
                <FaHeart/> Pillowcamper since {this.dateFix(created_at)} <br/>

            </div>
        )
    }
}

export default UserShow;