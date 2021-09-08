import React from 'react'
import classes from './MessageItem.module.css'


class MessageItem extends React.Component {

    render() {
        return (
            <div className={classes.messages}>
                <div>
                    {this.props.messageValue}
                </div>
            </div>
        )
    }
}

export default MessageItem