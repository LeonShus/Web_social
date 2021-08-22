import React from 'react'
import DialogItem from './DialogItem/DialogItem'
import classes from './Dialogs.module.css'
import MessageItem from './MessageItem/MessageItem'


// Компонента пользуется данными,
// которые пришли из контейнера и вызывает callback функции


class Dialogs extends React.Component {

    // добавляем сообщение в state
    sendMessage = () => {
        this.props.onSendMessage()
    }

    // меняем с текст нового сообщения в state
    messageChange = (e) => {
        let text = e.target.value
        this.props.onMessageChange(text)
    }

    render() {
        return (
            <div className={classes.dialogs}>
                <div>
                    {this.props.dialogPage.dialogsData.map(el => <DialogItem userName={el.userName} key={el.id} avatar={el.avatar} />)}
                </div>

                <div className={classes.massageContainer}>
                    <div>
                        {this.props.dialogPage.messagesData.map(el => <MessageItem messageValue={el.message} key={el.id} avatar={el.avatar} />)}
                    </div>
                    <div>
                        <textarea onChange={this.messageChange}
                            value={this.props.dialogPage.newMessage}
                            placeholder='Enter your message'></textarea>
                        <div>
                            <button onClick={this.sendMessage}>Send</button>
                        </div>

                    </div>

                </div>

            </div>
        )
    }
}

export default Dialogs