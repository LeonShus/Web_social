import React from 'react'
import classes from './ProfileInfo.module.css'
import ProfileStatus from './ProfileStatus'
import defAvatar from '../../../assets/images/userDef.png'

let ProfileInfo = (props) => {
    // console.log('ProfileInfo')

    return (
        <div className={classes.profileContainer}>
            <div>
                <img className={classes.ava} src={props.profileInfo.photos.large
                    ? props.profileInfo.photos.large
                    : defAvatar}></img>
            </div>
            <div className={classes.infoCont}>
                <div className={classes.name}>{props.profileInfo.fullName}</div>
                <ProfileStatus profileStatus={props.profileStatus}
                               putUserStatus={props.putUserStatus} />
            </div>

        </div>
    )

}

export default ProfileInfo