import React from 'react';

class SpotShow extends React.Component{
    constructor(props){
        super(props)
    }

    componentDidMount(){
        fetchSpot(this.props.match.history.id)
    }

    render() {
        return(
            <div>
                Hey.
                Hey.
                Hey.
                Hey.
                Hey.
                Hey.
                Hey.
                Hey.
                Hey.
            </div>
        )
    }
}

export default SpotShow;