import { sendNewMessageActionCreator, upgradeDialogAreaActionCreator } from '../../Store/reducer/DialogsReducer'
import Dialogs from './Dialogs'
import {connect} from  'react-redux'

//Создадим контейнерную-компоненту, чтобы отгородить обычную от лишних данных
//  и она работала на отображение.

// const DialogsContainer = (props) => {
//     console.log(props, 'DialogsContainer')

//     let state = props.store.getState().dialogPage

//     let onSendMessage = () => {
//         props.store.dispatch(sendNewMessageActionCreator())
//     }

//     let onMessageChange = (text) => {
//         props.store.dispatch(upgradeDialogAreaActionCreator(text))
//     }

//     return (
//         <Dialogs onMessageChange={onMessageChange} onSendMessage={onSendMessage} state={state}/>
//     )
// }


//Используем библиотеку React-Redux  и получаем данные из контекста

let mapStateToProps = (state) => {
    return {
        dialogPage : state.dialogPage
    }
}

let mapDispatchToProps = (dispatch) => {
    return {
        onSendMessage : () => {
            dispatch(sendNewMessageActionCreator())
        },
        onMessageChange : (text) => {
            dispatch(upgradeDialogAreaActionCreator(text))
        }
    }
}


const DialogsContainer =  connect(mapStateToProps, mapDispatchToProps)(Dialogs)

export default DialogsContainer