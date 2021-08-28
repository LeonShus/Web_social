import { authApi } from "../../api/api"


const SET_AUTH_USER_DATA = 'SET-AUTH-USER-DATA'
const SET_USER_LOGIN = 'SET-USER-LOGIN'

let defaultVal = {
    id: null,
    login: null,
    email: null,
    isAuth: false,
}


export const authReducer = (state = defaultVal, action) => {
    switch (action.type) {
        case 'SET-AUTH-USER-DATA':
            return {
                ...state,
                ...action.data,
            }
        case 'SET-USER-LOGIN':
            return {
                ...state,
                loginData: { ...action.loginData }
            }
        default:
            return state
    }
}

export const setAuthUserData = (id, login, email, isAuth) => ({ type: SET_AUTH_USER_DATA, data: { id, login, email, isAuth } })
export const setUserLogin = (loginData) => ({ type: SET_USER_LOGIN, loginData: loginData })


//Делаем thunk
export const authMainUser = () => (dispatch) => {
    return authApi.authMe()
        .then(response => {
            if (response.resultCode === 0) {
                let { id, login, email } = response.data
                dispatch(setAuthUserData(id, login, email, true))
            }
        })
}

export const loginUser = (email, password, rememberMe) => {
    return (dispatch) => {
        authApi.loginUser(email, password, rememberMe)
            .then(response => {
                if (response.resultCode === 0) {
                    dispatch(authMainUser())
                }
            })
    }
}


export const logoutUser = () => (dispatch) => {
    return authApi.logout()
        .then(response => {
            if (response.resultCode === 0) {
                dispatch(setAuthUserData(null, null, null, false))
            }
        })

}

