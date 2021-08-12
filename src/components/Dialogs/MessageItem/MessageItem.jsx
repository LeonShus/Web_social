import classes from './MessageItem.module.css'


const MessageItem = (props) => {
    console.log(props)
    return (
        <div className={classes.messages}>
            <div>
                <img src={props.avatar}></img>
            </div>
            <div>
                {props.messageValue}
            </div>
        </div>
    )
}

export default MessageItem