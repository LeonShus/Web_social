import { authApi } from "../../api/api"


const SET_AUTH_USER_DATA = 'Auth/SET-AUTH-USER-DATA'
const SET_USER_LOGIN = 'Auth/SET-USER-LOGIN'

let defaultVal = {
    id: null,
    login: null,
    email: null,
    isAuth: false,
}


export const authReducer = (state = defaultVal, action) => {
    switch (action.type) {
        case 'Auth/SET-AUTH-USER-DATA':
            return {
                ...state,
                ...action.data,
            }
        case 'Auth/SET-USER-LOGIN':
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


//thunk

//Получаем залогиненого пользователся
export const authMainUser = () => async (dispatch) => {
    let response = await authApi.authMe()

    if (response.resultCode === 0) {
        let { id, login, email } = response.data
        dispatch(setAuthUserData(id, login, email, true))
    }
}
// Логинем пользователя
export const loginUser = (email, password, rememberMe) => async (dispatch) => {
    let response = await authApi.loginUser(email, password, rememberMe)

    if (response.resultCode === 0) {
        dispatch(authMainUser())
    }
}

//Выходим с учетки
export const logoutUser = () => async (dispatch) => {
    let response = await authApi.logout()

    if (response.resultCode === 0) {
        dispatch(setAuthUserData(null, null, null, false))
    }
}

