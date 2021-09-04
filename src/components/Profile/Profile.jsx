import React from 'react'
import MyPostContainer from './MyPost/MyPostContainer'
import ProfileInfo from './ProfileInfo/ProfileInfo'

let Profile = (props) => {
    // console.log('Profile')
    return (
        <main>
            <ProfileInfo profileInfo={props.profileInfo} profileStatus={props.profileStatus} putUserStatus={props.putUserStatus} />
            <MyPostContainer />
        </main>
    )
}


export default (Profile)