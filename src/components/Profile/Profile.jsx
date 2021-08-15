import MyPostContainer from './MyPost/MyPostContainer'
import classes from './Profile.module.css'
import ProfileInfo from './ProfileInfo/ProfileInfo'

const Profile = (props) => {
    console.log(props, 'Profile')
    return (
        <main className={classes.main}>
            <ProfileInfo />
            <MyPostContainer/>
        </main>
    )
}

export default Profile