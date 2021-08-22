import React from 'react'
import { connect } from 'react-redux'
import Header from './Header'
import { authMainUser } from '../../Store/reducer/AuthReducer'
import { withRouter } from 'react-router-dom'


class HeaderContainer extends React.Component {

    componentDidMount() {
        this.props.authMainUser()
    }

    render() {
        return (
            <Header {...this.props.authUsersProps} />
        )
    }
}

let mapStateToProps = (state) => {
    return {
        authUsersProps: state.authUser
    }
}

let getUrlHeaderContainer = withRouter(HeaderContainer)

export default connect(mapStateToProps, { authMainUser })(getUrlHeaderContainer)