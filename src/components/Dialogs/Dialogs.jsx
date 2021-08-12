import DialogItem from './DialogItem/DialogItem'
import classes from './Dialogs.module.css'
import MessageItem from './MessageItem/MessageItem'
import React from 'react'
import { sendNewMessageActionCreator, upgradeDialogAreaActionCreator } from '../../Store/state'



const Dialogs = (props) => {
    console.log(props.store, 'Dialogs')
    
    let dialogElements = props.store.getState().dialogPage.dialogsData.map(el => <DialogItem userName={el.userName} id={el.id} avatar={el.avatar} />)
    let messageElem = props.store.getState().dialogPage.messagesData.map(el => <MessageItem messageValue={el.message} id={el.id} avatar={el.avatar} />)


    let sendMessage = () => {
        props.store.dispatch(sendNewMessageActionCreator())
    }

    let dialogTextareaChange = (e) => {
        let text = e.target.value
        props.store.dispatch(upgradeDialogAreaActionCreator(text))
    }

    return (
        <div className={classes.dialogs}>
            <div>
                {dialogElements}
            </div>

            <div className={classes.massageContainer}>
                <div>
                    {messageElem}
                </div>
                <div>
                    <textarea onChange={dialogTextareaChange}
                              value={props.store.getState().dialogPage.newMessage}
                              placeholder='Enter your message'></textarea>
                    <div>
                        <button onClick={sendMessage}>Send</button>
                    </div>

                </div>

            </div>

        </div>
    )
}

export default Dialogs