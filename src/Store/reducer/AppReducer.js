import { authMainUser } from "./AuthReducer"


const INITIALIZED_SUCCESS = 'INITIALIZED-SUCCESS'

let defaultVal = {
    initialized: false,

}


export const appReducer = (state = defaultVal, action) => {
    switch (action.type) {
        case 'INITIALIZED-SUCCESS':
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

    let promise = dispatch(authMainUser())
        
    promise.then(() => dispatch(initializedSuccess()))
    

        
}
