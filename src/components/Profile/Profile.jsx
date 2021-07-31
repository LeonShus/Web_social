import MyPost from './MyPost/MyPost'
import classes from './Profile.module.css'

const Profile = () => {
    return (
        <main className={classes.main}>
            <div>
                <img className={classes.photo} src='data:image/jpeg;base64,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' />
            </div>
            <div>
                ava + text
            </div>
            <MyPost />
        </main>
    )
}

export default Profile