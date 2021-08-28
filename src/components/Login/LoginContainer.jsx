import { connect } from 'react-redux'
import { loginUser } from '../../Store/reducer/AuthReducer'
import Login from './Login'


let mapStateToProps = (state) => {
    return {
        isAuth: state.authUser.isAuth
    }
}

export default connect(mapStateToProps, { loginUser })(Login)