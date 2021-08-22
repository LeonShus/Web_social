import { sendNewMessageActionCreator, upgradeDialogAreaActionCreator } from '../../Store/reducer/DialogsReducer'
import Dialogs from './Dialogs'
import {connect} from  'react-redux'


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