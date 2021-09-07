import { Form, Formik } from 'formik'
import React, { useState } from 'react'
import { MyTextInput } from '../../common/FormsControls/FormsControls'
import * as Yup from 'yup'
import Button from '../../common/Buttons/Button'



let ProfileStatus = (props) => {

    const [editMode, setEditMode] = useState(false)

    let editModeOn = () => {
        setEditMode(true)
    }

    let editModeOff = () => {
        setTimeout(() => setEditMode(false))
    }

    

    return (
        <div>
            {!editMode && <span onDoubleClick={editModeOn}>{props.profileStatus}</span>}

            {editMode &&
                <Formik
                    initialValues={{ status: props.profileStatus }}
                    validationSchema={Yup.object({
                        status: Yup.string()
                            .max(12, 'Max chars 30')
                    })}

                    onSubmit={(values, { setSubmitting }) => {
                        console.log(values.status)
                        props.putUserStatus(values.status)
                    }}
                >
                    <Form>
                        <div>
                            <MyTextInput
                                name="status"
                                type="text"
                
                            />
                            <Button onClickFunc={editModeOff}
                                    buttonText='Edit'
                                    type='submit' 
                            />
                        </div>
                    </Form>

                </Formik>
            }

        </div>


    )

}

export default ProfileStatus





// class ProfileStatus extends React.Component {

//     state = {
//         editMode: false,
//         status: this.props.profileStatus
//     }

//     editModeOn = () => {
//         this.setState({
//             editMode: true
//         })

//     }

//     editModeOff = () => {
//         setTimeout(() => {
//             this.setState({
//                 editMode: false
//             })
//         }, 400)
//     }


//     render() {
//         return (
//             <div>
//                 {!this.state.editMode && <span onDoubleClick={this.editModeOn}>{this.props.profileStatus}</span>}

//                 {this.state.editMode &&
//                     <Formik
//                         initialValues={{ status: '' }}
//                         validationSchema={Yup.object({
//                             status: Yup.string()
//                                 .max(12, 'Max chars 30')
//                         })}

//                         onSubmit={(values, { setSubmitting }) => {
//                             console.log(values.status)
//                             this.props.putUserStatus(values.status)
//                         }}
//                     >
//                         <Form>
//                             <div>
//                                 <MyTextInput
//                                     name="status"
//                                     type="text"
//                                 />
//                                 <button onClick={this.editModeOff} type='submit' >Enter</button>
//                             </div>
//                         </Form>

//                     </Formik>
//                 }

//             </div>


//         )
//     }
// }

// export default ProfileStatus


