import React from 'react';

class SpotShow extends React.Component{
    constructor(props){
        super(props)
        this.propsShower = this.propsShower.bind(this);
        this.state = {
            loading: true
        }
    }

    componentDidMount(){
        this.props.fetchSpot(this.props.match.params.spotId)
            .then(() => {this.setState({ loading: false})})
        debugger
    }
    
    propsShower(){
        console.log(this.props.spot.title)
    }

    render() {
        debugger
        if (this.state.loading) return (<h1> Loading </h1>);

        return(
            <div>
                <br />
                <br />
                <br />
                <br />
                <br />
                <br />  
                <br />
                <br />
                <br />
                <h1>{this.props.spot.title}</h1>
                <br />
                <br />
                <br />
                <br />
                Hey.
                Hey.
                Hey.
                Hey.
                Hey.
                <button onClick={this.propsShower}></button>
                Hey.
                Hey.
                Hey.
                Hey.
            </div>
        )
    }
}

export default SpotShow;