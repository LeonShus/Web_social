import { authApi } from "../../api/api"


const SET_AUTH_USER_DATA = 'SET-AUTH-USER-DATA'

let defaultVal = {
    id: null,
    login: null,
    email: null,
    isAuth: false
}


export const authReducer = (state = defaultVal, action) => {
    switch (action.type) {
        case 'SET-AUTH-USER-DATA':
            return {
                ...state,
                ...action.data,
                isAuth: true
            }
        default : 
            return state
    }   
}

export const setAuthUserData = (id, login, email) => ({type : SET_AUTH_USER_DATA, data: {id,login,email}})

//Делаем thunk
export const authMainUser = () => {
    return (dispatch) => {
        authApi.authMe()
            .then(response => {
                if (response.resultCode === 0) {
                    let { id, login, email } = response.data
                    dispatch(setAuthUserData(id, login, email))
                }
            })
    }
}
