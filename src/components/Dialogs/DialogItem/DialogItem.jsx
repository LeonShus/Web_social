import { NavLink } from 'react-router-dom'
import classes from './DialogItem.module.css'

const DialogItem = (props) => {
    return (
        <div className={classes.dialogList}>
            <div>
                <NavLink to={'/dialogs/' + props.id}>{props.userName}</NavLink>
            </div>
        </div>
    )
}


export default DialogItem