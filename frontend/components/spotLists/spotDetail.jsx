import React from 'react';

class SpotDetail extends React.Component{
    constructor(props){
        super(props);
    }


    render(){
        return(
            <div className='spot-list'>
                <ul>
                    <li>Spot 1</li>
                    <li>Spot 2</li>
                    <li>Spot 3</li>
                </ul>
            </div>
        )
    }
}

export default SpotDetail;