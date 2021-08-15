import DialogItem from './DialogItem/DialogItem'
import classes from './Dialogs.module.css'
import MessageItem from './MessageItem/MessageItem'


// Компонента пользуется данными,
// которые пришли из контейнера и вызывает callback функции


const Dialogs = (props) => {
    console.log(props, 'Dialogs')
    
    let dialogElements = props.dialogPage.dialogsData.map(el => <DialogItem userName={el.userName} key={el.id} avatar={el.avatar} />)
    let messageElem = props.dialogPage.messagesData.map(el => <MessageItem messageValue={el.message} key={el.id} avatar={el.avatar} />)

    // добавляем сообщение в state
    let sendMessage = () => {
        props.onSendMessage()
    }

    // меняем с текст нового сообщения в state
    let MessageChange = (e) => {
        let text = e.target.value
        props.onMessageChange(text)
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
                    <textarea onChange={MessageChange}
                              value={props.dialogPage.newMessage}
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