import React from 'react'
import { NavLink } from 'react-router-dom'
import classes from './DialogItem.module.css'

class DialogItem extends React.Component {
    render() {
        return (
            <div className={classes.dialogList}>
                    <div>
                        <img className={classes.dialogAva} src={this.props.avatar} alt='Avatar'></img>
                    </div>
                    <div>
                        <NavLink to={'/dialogs/' + this.props.id}>{this.props.userName}</NavLink>
                    </div>
            </div>
        )
    }
}


export default DialogItem