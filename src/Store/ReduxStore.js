import {applyMiddleware, combineReducers, compose, createStore} from 'redux'
import { dialogsReducer } from './reducer/DialogsReducer'
import { profileReducer } from './reducer/ProfileReducer'
import { usersReducer} from './reducer/UsersListReducer'
import { authReducer } from './reducer/AuthReducer'
import thunkMiddleware from 'redux-thunk'
import { appReducer } from './reducer/AppReducer'

let reducers = combineReducers({
    profilePage : profileReducer,
    dialogPage : dialogsReducer,
    usersListPage : usersReducer,
    authUser: authReducer,
    app: appReducer
})

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
const store = createStore(reducers, composeEnhancers(applyMiddleware(thunkMiddleware)));

// let store = createStore(reducers, applyMiddleware(thunkMiddleware))

window.store = store


export default store