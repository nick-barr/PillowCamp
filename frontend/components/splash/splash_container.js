import { connect } from 'react-redux'
import Splash from './splash'

const mSTP = state => ({
    errors: state.errors.session,
    user: state.entities.user
})

const mDTP = dispatch => ({
    test: () => dispatch(test())
})

export default connect(mSTP, mDTP)(Splash)