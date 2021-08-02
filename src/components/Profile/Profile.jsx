import MyPost from './MyPost/MyPost'
import classes from './Profile.module.css'
import ProfileInfo from './ProfileInfo/ProfileInfo'

const Profile = (props) => {
    return (
        <main className={classes.main}>
            <ProfileInfo />
            <MyPost />
        </main>
    )
}

export default Profile