import { connect } from 'react-redux'
import { addNewPostActionCreator, upgradePostTextActionCreator } from '../../../Store/reducer/ProfileReducer'
import MyPost from './MyPost'

//Создадим контейнерную-компоненту, чтобы отгородить обычную от лишних данных.

// const MyPostContainer = (props) => {

//     let state = props.store.getState().profilePage


//     let onAddPost = () => {
//         props.store.dispatch(addNewPostActionCreator())
//     }

//     let onPostChange = (text) => {
//         props.store.dispatch(upgradePostTextActionCreator(text))
//     }
    
//     return (
//         <MyPost onAddPost={onAddPost} onPostChange={onPostChange} state={state}/>
//     )
// }


//Используем библиотеку React-Redux и получаем данные из контекста

let mapStateToProps = (state) => {
    return {
        profilePage : state.profilePage
    }
}

let mapDispatchToProps = (dispatch) => {
    return {
        onAddPost : () => {
            dispatch(addNewPostActionCreator())
        },
        onPostChange : (text) => {
            dispatch(upgradePostTextActionCreator(text))
        }
    }
}


const MyPostContainer =  connect(mapStateToProps, mapDispatchToProps)(MyPost)

export default MyPostContainer