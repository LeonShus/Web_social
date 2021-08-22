import { connect } from 'react-redux'
import { addNewPost, upgradePostText } from '../../../Store/reducer/ProfileReducer'
import MyPost from './MyPost'



let mapStateToProps = (state) => {
    return {
        profilePage : state.profilePage
    }
}


const MyPostContainer =  connect(mapStateToProps, { addNewPost, upgradePostText })(MyPost)

export default MyPostContainer