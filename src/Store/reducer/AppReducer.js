import { authMainUser } from "./AuthReducer"


const INITIALIZED_SUCCESS = 'appReducer/INITIALIZED-SUCCESS'

let defaultVal = {
    initialized: false,

}


export const appReducer = (state = defaultVal, action) => {
    switch (action.type) {
        case 'appReducer/INITIALIZED-SUCCESS':
            return {
                ...state,
                initialized : true

            }
        default : 
            return state
    }   
}

export const initializedSuccess = () => ({ type: INITIALIZED_SUCCESS })


//Делаем thunk
export const initializeApp = () => (dispatch) => {
    dispatch(authMainUser())
        .then(() => dispatch(initializedSuccess()))
        
}
