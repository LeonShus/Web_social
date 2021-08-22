import React from 'react'
import MyPostContainer from './MyPost/MyPostContainer'
import classes from './Profile.module.css'
import ProfileInfo from './ProfileInfo/ProfileInfo'

class Profile extends React.Component {
    render() {
        return (
            <main className={classes.main}>
                <ProfileInfo profileInfo={this.props.profileInfo}/>
                <MyPostContainer />
            </main>
        )
    }
}

export default Profile