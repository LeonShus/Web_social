import {applyMiddleware, combineReducers, createStore} from 'redux'
import { dialogsReducer } from './reducer/DialogsReducer'
import { profileReducer } from './reducer/ProfileReducer'
import { usersReducer} from './reducer/UsersListReducer'
import { authReducer } from './reducer/AuthReducer'
import thunkMiddleware from 'redux-thunk'

let reducers = combineReducers({
    profilePage : profileReducer,
    dialogPage : dialogsReducer,
    usersListPage : usersReducer,
    authUser: authReducer
})

let store = createStore(reducers, applyMiddleware(thunkMiddleware))

window.store = store


export default store