import MyPost from './MyPost/MyPost'
import classes from './Profile.module.css'
import ProfileInfo from './ProfileInfo/ProfileInfo'

const Profile = (props) => {
    console.log(props, 'Profile')
    return (
        <main className={classes.main}>
            <ProfileInfo />
            <MyPost store={props.store}/>
        </main>
    )
}

export default Profile