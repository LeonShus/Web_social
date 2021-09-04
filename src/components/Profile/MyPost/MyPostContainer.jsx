import React from 'react'
import { connect } from 'react-redux'
import { addNewPost } from '../../../Store/reducer/ProfileReducer'
import MyPost from './MyPost'

let mapStateToProps = (state) => {
    return {
        postData : state.profilePage.postData
    }
}


export default React.memo(connect(mapStateToProps, { addNewPost })(MyPost))