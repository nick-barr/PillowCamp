import SpotIndex from './spotIndex'
import {connect} from 'react-redux'
import { fetchSpots } from '../../actions/spot_actions'

const mSTP = (state, ownProps) => {
    
    // const s1 = Object.values(state.entities.spots)

    // debugger

    return({
        spots: Object.values(state.entities.spots)

    })
}
const mDTP = dispatch => ({
    fetchSpots: (spots) => dispatch(fetchSpots(spots))
})

export default connect(mSTP, mDTP)(SpotIndex);