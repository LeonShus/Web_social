import React from 'react'
import classes from './ProfileInfo.module.css'
import Preloader from '../../common/preloader/Preloader'
import ProfileStatus from './ProfileStatus'

let ProfileInfo = (props) => {

        if(!props.profileInfo){
            return ( <Preloader />)
        }

        return (
            <div className={classes.profileContainer}>
                <div>
                    <div>
                        <img className={classes.ava} src={props.profileInfo.photos.large}></img>
                    </div>
                    <div>{props.profileInfo.fullName}</div>
                    <ProfileStatus profileStatus={props.profileStatus} putUserStatus={props.putUserStatus} />
                </div>
            </div>
        )
    
}

export default ProfileInfo