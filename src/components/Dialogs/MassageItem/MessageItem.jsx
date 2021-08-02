import classes from './MessageItem.module.css'


const MessageItem = (props) => {
    return (
        <div className={classes.messages}>
            {props.messageValue}
        </div>
    )
}

export default MessageItem