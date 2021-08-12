import classes from './Friends.module.css'

const Friends = (props) => {
    return (
        <div className={classes.friendsAva}>
            <img src={props.friendAva}></img>
        </div>
    )
}

export default Friends