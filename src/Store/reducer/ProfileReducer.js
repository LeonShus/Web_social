import { profileApi } from "../../api/api"

const ADD_NEW_POST = 'ADD-NEW-POST'
const GET_PROFILE_INFO = 'GET-PROFILE-INFO'
const GET_PROFILE_STATUS = 'GET-PROFILE-STATUS'

let defaultVal = {

    profileInfo: null,

    profileStatus: '',

    postData: [
        { id: 1, message: 'Hi, my name is Leon', likeCount: 12 },
        { id: 2, message: 'Nice to meet you', likeCount: 188 }
    ],

    newPostText: ''
}

export const profileReducer = (state = defaultVal, action) => {
    switch (action.type) {
        case 'ADD-NEW-POST':
            let newPost = {
                id: 5,
                message: action.newPost,
                likeCount: 0,
            }
            return {
                ...state,
                postData: [...state.postData, newPost],
                newPostText: ''
            }
        case 'GET-PROFILE-INFO':
            return {
                ...state, profileInfo: { ...action.profileInfo }
            }
        case 'GET-PROFILE-STATUS':
            return {
                ...state, profileStatus: action.status
            }
        default:
            return state
    }

}

export const addNewPost = (newPost) => ({ type: ADD_NEW_POST, newPost })
export const getProfileInfo = (profileInfo) => ({ type: GET_PROFILE_INFO, profileInfo })
export const getProfileStatus = (status) => ({ type: GET_PROFILE_STATUS, status: status })

//Thunk

export const getUser = (userId) => (dispatch) => {
    profileApi.getUser(userId)
        .then(response => dispatch(getProfileInfo(response)))

}

export const getStatus = (userId) => (dispatch) => {
    profileApi.getUserStatus(userId)
        .then(response => {
            dispatch(getProfileStatus(response))
        })

}

export const putUserStatus = (status) => (dispatch) => {
    profileApi.putStatus(status)
        .then(response => {
            if (response.data.resultCode === 0) {
                dispatch(getProfileStatus(status))
            }
        })

}
