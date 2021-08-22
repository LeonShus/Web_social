import { UsersApi } from "../../api/api"

const ADD_NEW_POST = 'ADD-NEW-POST'
const UPGRADE_POST_TEXT = 'UPGRADE-POST-TEXT'
const GET_PROFILE_INFO = 'GET-PROFILE-INFO'

let defaultVal = {

    profileInfo: null,

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
                message: state.newPostText,
                likeCount: 0,
            }
            return {
                ...state,
                postData: [...state.postData, newPost],
                newPostText: ''
            }
        case 'UPGRADE-POST-TEXT':
            return {
                ...state,
                newPostText: action.text
            }
        case 'GET-PROFILE-INFO':
            return {
                ...state, profileInfo: { ...action.profileInfo }
            }
        default:
            return state
    }

}

export const addNewPost = () => ({ type: ADD_NEW_POST })
export const upgradePostText = (text) => ({ type: UPGRADE_POST_TEXT, text: text })
export const getProfileInfo = (profileInfo) => ({ type: GET_PROFILE_INFO, profileInfo })

//Thunk

export const getUser = (userId) => {
    return (dispatch) => {
        UsersApi.getUser(userId)
        .then(response => dispatch(getProfileInfo(response)))
    }
}
