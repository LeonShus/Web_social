import { sendNewMessage } from '../../Store/reducer/DialogsReducer'
import Dialogs from './Dialogs'
import {connect} from  'react-redux'
import { withAuthRedirect } from '../../hoc/WithAuthRedirect'
import { compose } from 'redux'


let mapStateToProps = (state) => {
    return {
        dialogPage : state.dialogPage
    }
}


//прокидываем все через compose добавляя все обработчики


export default compose(
    connect(mapStateToProps, {sendNewMessage} ),
    withAuthRedirect
)(Dialogs)