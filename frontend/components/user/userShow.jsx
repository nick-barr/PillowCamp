import React from 'react';

class UserShow extends React.Component{
    constructor(props){
        super(props)
    }

    render(){
        return(
            <div className="user-show-container2">
                {/* <img src="https://sharespost-sharex-production.s3.us-west-2.amazonaws.com/uploads/issuer/100001872/logo/hipcamp-logo.png" alt="" /> */}
                <br/>
                {this.props.user.username} <br/>
                most upcoming trip (bonus)?                
            </div>
        )
    }
}

export default UserShow;