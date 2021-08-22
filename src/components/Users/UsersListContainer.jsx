import { connect } from "react-redux";
import { getUsers, unfollow, follow } from "../../Store/reducer/UsersListReducer";
import UsersList from './UsersList'
import React from "react"


class UsersContainer extends React.Component {
    componentDidMount() {
        this.props.getUsers(this.props.totalUsersCount, this.props.pageSize)

    }

    onPageChange = (pageNumber) => {
        this.props.getUsers(pageNumber, this.props.pageSize)
    }

    render() {
        return (
            <UsersList totalUsersCount={this.props.totalUsersCount}
                pageSize={this.props.pageSize}
                users={this.props.users}
                onPageChange={this.onPageChange}
                pageTarget={this.props.pageTarget}
                onFetching={this.props.onFetching}
                fetchingStatus={this.props.fetchingStatus}
                unfollow={this.props.unfollow}
                follow={this.props.follow} />
        )
    }
}

let mapStateToProps = (state) => {
    return {
        users: state.usersListPage.users,
        pageSize: state.usersListPage.pageSize,
        totalUsersCount: state.usersListPage.totalUsersCount,
        pageTarget: state.usersListPage.currentPage,
        onFetching: state.usersListPage.onFetching,
        fetchingStatus: state.usersListPage.fetchingStatus
    }
}


export default connect(mapStateToProps, {
                                            getUsers, unfollow,
                                            follow
                                        })(UsersContainer);

