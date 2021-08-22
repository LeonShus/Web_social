import { UsersApi } from "../../api/api"

const FOLLOW = 'FOLLOW'
const UNFOLLOW = 'UNFOLLOW'
const SET_USERS = 'SET-USERS'
const CHANGE_PAGE = 'CHANGE-PAGE'
const ON_FETCHING = 'ON-FETCHING'
const FETCHING_PROGRESS = 'FETCHING-PROGRESS'

let defaultState = {
    users: [],
    pageSize: 3,
    totalUsersCount: 20,
    currentPage: 1,
    onFetching: false,
    fetchingStatus: []
}

export const usersReducer = (state = defaultState, action) => {

    switch (action.type) {
        case 'FOLLOW':
            return {
                ...state,
                users: state.users.map(u => {
                    if (u.id === action.userId) {
                        return { ...u, followed: true }
                    }
                    return u
                })
            }
        case 'UNFOLLOW':
            return {
                ...state,
                users: state.users.map(u => {
                    if (u.id === action.userId) {
                        return { ...u, followed: false }
                    }
                    return u
                })
            }
        case 'SET-USERS':
            return { ...state, users: action.users }
        case 'CHANGE-PAGE':
            return { ...state, currentPage: action.page }
        case 'ON-FETCHING':
            return { ...state, onFetching: action.status }
        case 'FETCHING-PROGRESS':
            return {
                ...state,
                fetchingStatus: action.status
                    ? [...state.fetchingStatus, action.userId]
                    : state.fetchingStatus.filter(item => item != action.userId)
            }
        default:
            return state
    }

}

//Изменяем кнопку follow
export const followSuccess = (userId) => ({ type: FOLLOW, userId: userId })
export const unfollowSuccess = (userId) => ({ type: UNFOLLOW, userId: userId })

//получаем пользователей с сервера
export const setUsers = (users) => ({ type: SET_USERS, users: users })
//Смена страницы
export const changePage = (page) => ({ type: CHANGE_PAGE, page: page })
//Делаем кнопку невосприимчивой во время запроса
export const fetching = (status) => ({ type: ON_FETCHING, status: status })
export const fetchProgress = (status, userId) => ({ type: FETCHING_PROGRESS, status: status, userId: userId })


//Создаем Thunk и замыкаz в нем данные делаем запросы на сервер. 
export const getUsers = (totalUsersCount, pageSize) => {
    return (dispatch) => {
        dispatch(fetching(true))
        dispatch(changePage(totalUsersCount))

        UsersApi.getUsersList(totalUsersCount, pageSize)
            .then(response => {
                dispatch(setUsers(response.items))
                dispatch(fetching(false))
            })
    }
}

export const unfollow = (userId) => {
    return (dispatch) => {
        dispatch(fetchProgress(true, userId))
        UsersApi.unFollowUser(userId)
            .then(response => {
                if (response.resultCode == 0) {
                    dispatch(unfollowSuccess(userId))
                }
                dispatch(fetchProgress(false, userId))
            })
    }
}

export const follow = (userId) => {
    return (dispatch) => {
        dispatch(fetchProgress(true, userId))
        UsersApi.followUser(userId)
             .then(response => {
                 if(response.resultCode == 0){
                    dispatch(followSuccess(userId)) 
                 }
                 dispatch(fetchProgress(false, userId))
             })
    }
}


