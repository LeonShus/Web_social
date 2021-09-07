import React from 'react'
import MyPostContainer from './MyPost/MyPostContainer'
import ProfileInfo from './ProfileInfo/ProfileInfo'

let Profile = (props) => {
    // console.log('Profile', props)
    return (
        <main>
            <ProfileInfo profileInfo={props.profileInfo}
                         profileStatus={props.profileStatus} 
                         putUserStatus={props.putUserStatus}
                         putPhoto={props.putPhoto}
                         isOwner={props.isOwner}
                         putContacts={props.putContacts} />
            <MyPostContainer />
        </main>
    )
}


export default (Profile)