import classes from './ProfileInfo.module.css'
import { Form, Formik } from 'formik'
import * as Yup from 'yup'
import { MyTextInput } from '../../common/FormsControls/FormsControls'
import Button from '../../common/Buttons/Button'

// Создаем компоненту-форму для редактирования информации о пользователе

const ProfileInfoForm = (props) => {
    // console.log(props, 'tttttttTTTTTTT')
    return (
        <Formik initialValues={{
            aboutMe: props.profileInfo.aboutMe,
            fullName: props.profileInfo.fullName,
            lookingForAJob: true,
            lookingForAJobDescription: props.profileInfo.lookingForAJobDescription,
            contacts: {
                facebook: props.profileInfo.contacts.facebook,
                github: props.profileInfo.contacts.github,
                instagram: props.profileInfo.contacts.instagram,
                mainLink: props.profileInfo.contacts.mainLink,
                twitter: props.profileInfo.contacts.twitter,
                vk: props.profileInfo.contacts.vk,
                website: props.profileInfo.contacts.facebook,
                youtube: props.profileInfo.contacts.youtube,   
            }
        }}
            validationSchema= {Yup.object({
                aboutMe: Yup.string()
                    .max(10, 'Max chars 10').required(),
                fullName: Yup.string()
                    .max(20, 'Max chars 20').required(),
                lookingForAJobDescription: Yup.string()
                    .max(30, 'Max chars 30').required(),
                contacts: Yup.object({
                    facebook: Yup.string().url(),
                    github: Yup.string().url(),
                    instagram: Yup.string().url(),
                    mainLink: Yup.string().url(),
                    twitter: Yup.string().url(),
                    vk: Yup.string().url(),
                    website: Yup.string().url(),
                    youtube: Yup.string().url(),
                })

            })}

            onSubmit={(values => {
                console.log(values)
                props.saveProfileInfo(values)
            })}
        >
            <Form>
                <ProfileFormInput logo='Full Name' name='fullName'/>
                <ProfileFormInput logo='About Me' name='aboutMe'/>
                <ProfileFormInput logo='Looking for a job' name='lookingForAJob'/>
                <ProfileFormInput logo='Looking for a job description' name='lookingForAJobDescription'/>
                <div>
                    Contacts
                </div>
                {
                    Object.keys(props.profileInfo.contacts)
                        .map(key => {
                            return (
                                <div className={classes.contactsContainer}>
                                    <div>{key}</div>
                                    <MyTextInput name={`contacts.${key}`}
                                        type='text' />
                                </div>
                            )
                        })
                }
                <Button buttonText='Save' type='submit' />
            </Form>
        </Formik>
    )
}

// Создаем компоненту,для удобства
const ProfileFormInput = ({logo, name, type = 'text'}) => {
    return (
        <>
            <div>
                {logo}
            </div>
            <MyTextInput name={name}
                type={type} />
        </>
    )
}

export default ProfileInfoForm