import React from 'react'
import { connect } from 'react-redux'
import { withRouter } from 'react-router-dom'
import { compose } from 'redux'
import { withAuthRedirect } from '../../hoc/WithAuthRedirect'
import { getUser, getStatus, putUserStatus } from '../../Store/reducer/ProfileReducer'
import Profile from './Profile'


class ProfileContainer extends React.Component {

    componentDidMount() {
        let userId = this.props.match.params.userId
        if (!userId) {
            userId = this.props.authorizeUserId
            if(!userId){
                this.props.history.push('/login')
            }
        }
        if(userId){
            this.props.getUser(userId)
            this.props.getStatus(userId)
        }        

    }

    render() {
        return (
            <Profile profileInfo={this.props.profileInfo} profileStatus={this.props.profileStatus} putUserStatus={this.props.putUserStatus}/>
        )
    }

}


// let AuthRedirectComponent = (props) => {
//     if (!props.isAuth) return <Redirect to='/login' />
//     return <ProfileContainer {...props} />
// }




let mapStateToProps = (state) => {
    return {
        profileInfo: state.profilePage.profileInfo,
        profileStatus: state.profilePage.profileStatus,
        authorizeUserId: state.authUser.id
    }

}


//прокидываем все через compose добавляя все обработчики

export default compose(
    connect(mapStateToProps, { getUser, getStatus, putUserStatus }),
    withRouter,
    // withAuthRedirect,
)(ProfileContainer)

