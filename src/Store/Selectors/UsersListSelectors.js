import { createSelector } from 'reselect'


export let getUsers = (state) => {
    return state.usersListPage.users
}

export let getUsersSort = createSelector(getUsers, (users) => {
    return users.filter(u => true)
})

export let getUsersOnPage = (state) => {
    return state.usersListPage.usersOnPage
}

export let getTotalUsersCount = (state) => {
    return state.usersListPage.totalUsersCount
}

export let getPageOnTarget = (state) => {
    return state.usersListPage.pageOnTarget
}

export let getOnFetching = (state) => {
    return state.usersListPage.onFetching
}

export let getFetchingStatus = (state) => {
    return state.usersListPage.fetchingStatus
}