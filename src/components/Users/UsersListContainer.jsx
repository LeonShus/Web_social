import { connect } from "react-redux";
import { receiveUsers, unfollow, follow } from "../../Store/reducer/UsersListReducer";
import UsersList from './UsersList'
import React from "react"
import { compose } from "redux";
import { getFetchingStatus, getUsersOnPage,
         getOnFetching, getPageOnTarget, 
         getTotalUsersCount, getUsers
         } from "../../Store/Selectors/UsersListSelectors";


class UsersContainer extends React.Component {
    componentDidMount() {
        this.props.receiveUsers(this.props.totalUsersCount, this.props.usersOnPage)

    }

    onPageChange = (pageNumber) => {
        this.props.receiveUsers(pageNumber, this.props.usersOnPage)
    }

    render() {
        return (
            <UsersList totalUsersCount={this.props.totalUsersCount}
                usersOnPage={this.props.usersOnPage}
                users={this.props.users}
                onPageChange={this.onPageChange}
                pageOnTarget={this.props.pageOnTarget}
                onFetching={this.props.onFetching}
                fetchingStatus={this.props.fetchingStatus}
                unfollow={this.props.unfollow}
                follow={this.props.follow} />
        )
    }
}

let mapStateToProps = (state) => {
    return {
        users: getUsers(state),
        // users: getUsersSort(state),
        usersOnPage: getUsersOnPage(state),
        totalUsersCount: getTotalUsersCount(state),
        pageOnTarget: getPageOnTarget(state),
        onFetching: getOnFetching(state),
        fetchingStatus: getFetchingStatus(state),
    }
}


export default compose(
    connect(mapStateToProps, {receiveUsers, unfollow,follow }),
    // withAuthRedirect
)(UsersContainer)
