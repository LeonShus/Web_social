import {combineReducers, createStore} from 'redux'
import { dialogsReducer } from './reducer/DialogsReducer'
import { profileReducer } from './reducer/ProfileReducer'

let reducers = combineReducers({
    profilePage : profileReducer,
    dialogPage : dialogsReducer
})

let store = createStore(reducers)

window.store = store


export default store