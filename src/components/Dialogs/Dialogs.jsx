import DialogItem from './DialogItem/DialogItem'
import classes from './Dialogs.module.css'
import MessageItem from './MassageItem/MessageItem'


let dialogsData = [
    {id: 1, userName: 'Leon'},
    {id: 2, userName: 'Sasha'},
    {id: 3, userName: 'Dog'},
    {id: 4, userName: 'Cat'},
]

let messagesData = [
    {id: 1, message: 'Hello,leon'},
    {id: 2, message: 'Hello,Sasha'},
    {id: 3, message: 'Hello,Dog'},
    {id: 4, message: 'Cat'},
]

let dialogElements = dialogsData.map(el => {
    return <DialogItem userName={el.userName} id={el.id} />
})

let messageElem = messagesData.map(el => {
    return <MessageItem messageValue={el.message}/>
})

const Dialogs = (props) => {
    return (
        <div className={classes.dialogs}>
            <div>
                {dialogElements}
            </div>


            <div>
                {messageElem}
            </div>

        </div>
    )
}

export default Dialogs