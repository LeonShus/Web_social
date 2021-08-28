import React from 'react'
import { connect } from 'react-redux'
import Header from './Header'
import { logoutUser } from '../../Store/reducer/AuthReducer'
import { withRouter } from 'react-router-dom'


class HeaderContainer extends React.Component {

    render() {
        return (
            <Header {...this.props.authUsersProps} logoutUser={this.props.logoutUser} />
        )
    }
}

let mapStateToProps = (state) => {
    return {
        authUsersProps: state.authUser
    }
}

let getUrlHeaderContainer = withRouter(HeaderContainer)

export default connect(mapStateToProps, { logoutUser })(getUrlHeaderContainer)