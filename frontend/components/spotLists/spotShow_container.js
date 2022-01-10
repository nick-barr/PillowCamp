import SpotShow from './spotShow'
import {connect} from 'react-redux'
import { fetchSpot } from '../../actions/spot_actions'
import { withRouter } from 'react-router-dom';

const mSTP = (state, ownProps) => {
    debugger
    return({
        spot: state.entities.spots[ownProps.match.params.spotId]
    })
}
const mDTP = dispatch => ({
    fetchSpot: (spotId) => dispatch(fetchSpot(spotId))
})

export default withRouter(connect(mSTP, mDTP)(SpotShow));