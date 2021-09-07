import { profileApi } from "../../api/api"

const ADD_NEW_POST = 'profile/ADD-NEW-POST'
const GET_PROFILE_INFO = 'profile/GET-PROFILE-INFO'
const GET_PROFILE_STATUS = 'profile/GET-PROFILE-STATUS'
const DELETE_POST = 'profile/DELETE-POST'
const SAVE_PHOTO_SUCCESS = 'profile/SAVE-PHOTO-SUCCESS'
const SELECT_PROFILE_CONTACTS = 'profile/SELECT-PROFILE-CONTACTS'

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
        case 'profile/ADD-NEW-POST':
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
        case 'profile/GET-PROFILE-INFO':
            return {
                ...state, profileInfo: { ...action.profileInfo }
            }
        case 'profile/GET-PROFILE-STATUS':
            return {
                ...state, profileStatus: action.status
            }
        case 'profile/DELETE-POST':
            return {
                ...state,
                postData: state.postData.filter(el => el.id != action.userId)
            }
        case 'profile/SAVE-PHOTO-SUCCESS':
            return {
                ...state,
                profileInfo: {...state.profileInfo, photos: action.photo}
            }
        default:
            return state
    }

}

export const addNewPost = (newPost) => ({ type: ADD_NEW_POST, newPost })
export const getProfileInfo = (profileInfo) => ({ type: GET_PROFILE_INFO, profileInfo })
export const getProfileStatus = (status) => ({ type: GET_PROFILE_STATUS, status: status })
export const deletePost = (userId) => ({ type: DELETE_POST, userId })
export const selectPhoto = (photo) => ({ type: SAVE_PHOTO_SUCCESS, photo })



//Thunk

export const getUser = (userId) => (dispatch) => {
    profileApi.getUser(userId)
        .then(response => {
            console.log(response, 'aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa')
            dispatch(getProfileInfo(response))})

}

export const getStatus = (userId) => async (dispatch) => {
    let response = await profileApi.getUserStatus(userId)

    dispatch(getProfileStatus(response))


}

export const putUserStatus = (status) => async (dispatch) => {
    let response = await profileApi.putStatus(status)

    if (response.data.resultCode === 0) {
        dispatch(getProfileStatus(status))
    }
}

export const putPhoto = (photoFile) => async (dispatch) => {
    let response = await profileApi.savePhoto(photoFile)

    if (response.data.resultCode === 0) {
        dispatch(selectPhoto(response.data.data.photos))
    }
}

export const putContacts = (profCont) => async (dispatch, getState) => {

    const userId = getState().authUser.id

    let response = await profileApi.putProfileContacts(profCont)

    if (response.data.resultCode === 0){
        dispatch(getUser(userId))
    }
}
