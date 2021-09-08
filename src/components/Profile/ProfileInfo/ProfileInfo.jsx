import React, { useState } from 'react'
import classes from './ProfileInfo.module.css'
import ProfileStatus from './ProfileStatus'
import defAvatar from '../../../assets/images/userDef.png'
import ProfileInfoForm from './ProfileForm'
import Button from '../../common/Buttons/Button'


let ProfileInfo = (props) => {
    // console.log('ProfileInfo', props)

    const [editMode, setEditMode] = useState(false)

    // Отпрравляем фото, если оно есть
    const selectMainPhoto = (e) => {
        if (e.target.files.length) {
            props.putPhoto(e.target.files[0])
        }

    }
    //Отправляем данные и закрываем окно
    const saveProfileInfo = (profInfo) => {
        props.putContacts(profInfo)
        setEditMode(false)
    }

    return (
        // Добавляем аватарку и редактируем статус
        <div className={classes.profileContainer}>
            <div>
                <img className={classes.ava} alt='Avatar' src={props.profileInfo.photos.large
                    ? props.profileInfo.photos.large
                    : defAvatar}></img>
                {/* Проверяем наша ли это страница, для отрисовки кнопок */}
                {props.isOwner && <input className={classes.photoInput} 
                                         type="file"
                                         onChange={selectMainPhoto} />}
            </div>

            <div className={classes.infoCont}>
                <div className={classes.name}>{props.profileInfo.fullName}</div>
                <ProfileStatus profileStatus={props.profileStatus}
                    putUserStatus={props.putUserStatus} />
            </div>

            <div className={classes.box}>
                <div>
                    {/* Кнопка на вход и выход из режима редактирования */}
                    {props.isOwner && <Button buttonText='Edit' onClickFunc={() => !editMode
                            ? setEditMode(true)
                            : setEditMode(false)}/>}

                    {/* Форма для редактирования */}
                    {editMode && <ProfileInfoForm profileInfo={props.profileInfo}
                        saveProfileInfo={saveProfileInfo} />}

                    {/* Данные пользователя */}
                    {!editMode &&
                        <div className={classes.infoContainer}>
                            <div>
                                <b>About Me</b>: {props.profileInfo.aboutMe}
                            </div>
                            <div>
                                <b>Looking for a job</b>: {props.profileInfo.lookingForAJob}
                            </div>
                            <div>
                               <b>Job</b> : {props.profileInfo.lookingForAJobDescription}
                            </div>
                            <div><b>Contacts</b></div>
                            {Object.keys(props.profileInfo.contacts)
                                .map((key, index) => <div key={index} className={classes.contactsContainer}>{key}: {props.profileInfo.contacts[key]}</div>)
                            }
                        </div>
                    }
                </div>
            </div>
        </div>
    )
}



export default ProfileInfo