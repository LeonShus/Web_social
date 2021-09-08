import { UsersApi } from "../../api/api"

const FOLLOW = 'users/FOLLOW'
const UNFOLLOW = 'users/UNFOLLOW'
const SET_USERS = 'users/SET-USERS'
const CHANGE_PAGE = 'users/CHANGE-PAGE'
const ON_FETCHING = 'users/ON-FETCHING'
const FETCHING_PROGRESS = 'users/FETCHING-PROGRESS'

let defaultState = {
    users: [],
    usersOnPage: 5,
    totalUsersCount: 1,
    pageOnTarget: 1,
    onFetching: false,
    fetchingStatus: []
}

let updateFollowedStatus = (users, userId, followed) => {
    return users.map(u => {
        if (u.id === userId) {
            return { ...u, followed: followed }
        }
        return u
    })
}

export const usersReducer = (state = defaultState, action) => {

    switch (action.type) {
        case 'users/FOLLOW':
            return {
                ...state,
                users: updateFollowedStatus(state.users, action.userId, true)

            }
        case 'users/UNFOLLOW':
            return {
                ...state,
                users: updateFollowedStatus(state.users, action.userId, false)
            }
        case 'users/SET-USERS':
            return { ...state,
                     users: action.users,
                     totalUsersCount: action.totalCount  }
        case 'users/CHANGE-PAGE':
            return { ...state, pageOnTarget: action.page }
        case 'users/ON-FETCHING':
            return { ...state, onFetching: action.status }
        case 'users/FETCHING-PROGRESS':
            return {
                ...state,
                fetchingStatus: action.status
                    ? [...state.fetchingStatus, action.userId]
                    : state.fetchingStatus.filter(item => item !== action.userId)
            }
        default:
            return state
    }

}

//Изменяем кнопку follow
export const followSuccess = (userId) => ({ type: FOLLOW, userId: userId })
export const unfollowSuccess = (userId) => ({ type: UNFOLLOW, userId: userId })

//получаем пользователей с сервера
export const setUsers = (users,totalCount) => ({ type: SET_USERS, users, totalCount })
//Смена страницы
export const changePage = (page) => ({ type: CHANGE_PAGE, page: page })
//Делаем кнопку невосприимчивой во время запроса
export const fetching = (status) => ({ type: ON_FETCHING, status: status })
export const fetchProgress = (status, userId) => ({ type: FETCHING_PROGRESS, status: status, userId: userId })


//Создаем Thunk и замыкаz в нем данные делаем запросы на сервер.

export const receiveUsers = (totalUsersCount, pageSize) => async (dispatch) => {
    dispatch(fetching(true))
    dispatch(changePage(totalUsersCount))

    let response = await UsersApi.getUsersList(totalUsersCount, pageSize)

    dispatch(setUsers(response.items, response.totalCount))
    dispatch(fetching(false))


}



export const unfollow = (userId) => async (dispatch) => {

    let response = await UsersApi.unFollowUser(userId)

    if (response.resultCode === 0) {
        dispatch(unfollowSuccess(userId))
    }
    dispatch(fetchProgress(false, userId))


}

export const follow = (userId) => async (dispatch) => {

    let response = await UsersApi.followUser(userId)

    if (response.resultCode === 0) {
        dispatch(followSuccess(userId))
    }
    dispatch(fetchProgress(false, userId))


}


