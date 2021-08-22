import React from 'react'
import { connect } from 'react-redux'
import { withRouter } from 'react-router-dom'
import { getUser } from '../../Store/reducer/ProfileReducer'
import Profile from './Profile'


class ProfileContainer extends React.Component {

    componentDidMount() {
        let userId = this.props.match.params.userId
        if (!userId) {
            userId = 2
        }
        this.props.getUser(userId)
    }

    render() {
        return (
            <Profile profileInfo={this.props.profileInfo} />
        )
    }

}

let mapStateToProps = (state) => {
    return {
        profileInfo: state.profilePage.profileInfo
    }

}

let withUrlProfileContainer = withRouter(ProfileContainer)

export default connect(mapStateToProps, { getUser })(withUrlProfileContainer)

