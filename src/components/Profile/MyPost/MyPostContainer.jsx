import { connect } from 'react-redux'
import { addNewPost } from '../../../Store/reducer/ProfileReducer'
import MyPost from './MyPost'



let mapStateToProps = (state) => {
    return {
        profilePage : state.profilePage
    }
}


export default connect(mapStateToProps, { addNewPost })(MyPost)