import React from 'react';

class UserShow extends React.Component{
    constructor(props){
        super(props)
    }

    render(){
        return(
            <div className="user-show-container2">
                picture <br/>
                {this.props.user.username} <br/>
                most upcoming trip (bonus)?                
            </div>
        )
    }
}

export default UserShow;