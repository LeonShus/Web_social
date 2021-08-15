const ADD_NEW_POST = 'ADD-NEW-POST'
const UPGRADE_POST_TEXT = 'UPGRADE-POST-TEXT'

let defaultVal = {
    postData: [
        { id: 1, message: 'Hi, my name is Leon', likeCount: 12 },
        { id: 1, message: 'Nice to meet you', likeCount: 188 }
    ],

    newPostText : ''
}

export const profileReducer = (state = defaultVal, action) => {
    switch(action.type){
        case 'ADD-NEW-POST':
            let newPost = {
                id : 5,
                message: state.newPostText,
                likeCount: 0,
            }
            return {
                ...state,
                postData : [...state.postData, newPost],
                newPostText : ''
            }
        case 'UPGRADE-POST-TEXT':
            return {
                ...state,
                newPostText : action.text
            }
        default : 
            return state
    }
    
}

export const addNewPostActionCreator = () => ({ type : ADD_NEW_POST })
export const upgradePostTextActionCreator = (text) => ({type : UPGRADE_POST_TEXT, text : text})