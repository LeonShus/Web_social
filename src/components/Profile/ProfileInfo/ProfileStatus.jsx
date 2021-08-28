import { Form, Formik, Field, ErrorMessage, yupToFormErrors } from 'formik'
import React from 'react'
import { MyTextInput } from '../../common/FormsControls/FormsControls'
import * as Yup from 'yup'

// class ProfileStatusForm extends React.Component {

//     render() {
//         return (
//             <Formik
//                 initialValues={{ status: '' }}

//                 onSubmit={(values, { setSubmitting }) => {
//                     console.log(values.status)
//                     this.props.putUserStatus(values.status)
//                 }}
//             >
//                 <Form>
//                     <div>
//                     <Field name="status" type="text"/>
//                     <ErrorMessage name="firstName" />
//                     <button type='submit' >Enter</button>
//                     </div>
//                 </Form>

//             </Formik>
//         )
//     }
// }        


class ProfileStatus extends React.Component {

    state = {
        editMode: false,
    }

    editModeOn = () => {
        this.setState({
            editMode: true
        })

    }

    editModeOff = () => {
        setTimeout(() => {
            this.setState({
            editMode: false
            })
        },400)

    }


    render (){
        return (
            <div>
                {!this.state.editMode && <span onDoubleClick={this.editModeOn}>{this.props.profileStatus}</span>}

                {this.state.editMode && 
                                <Formik
                                initialValues={{ status: '' }}
                                validationSchema = {Yup.object({
                                    status: Yup.string()
                                        .max(12,'Max chars 30')
                                })}

                                onSubmit={(values, { setSubmitting }) => {
                                    console.log(values.status)
                                    this.props.putUserStatus(values.status)
                                }}
                            >
                                <Form>
                                    <div>
                                    <MyTextInput 
                                        name="status"
                                        type="text"
                                    />
                                    <button onClick={this.editModeOff} type='submit' >Enter</button>
                                    </div>
                                </Form>
                
                            </Formik>
                            }
                
            </div>
            
            
        )
    }
}

export default ProfileStatus




// import React from 'react'

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
//         this.setState({
//             editMode: false
//         })
//         this.props.putUserStatus(this.state.status)
//     }

//     onStatusChange = (e) => {
//         this.setState({
//             status: e.currentTarget.value
//         })

//     }

//     componentDidUpdate(prevProps, prevState) {
//         if(prevProps.profileStatus !== this.props.profileStatus){
//             this.setState({
//                 status: this.props.profileStatus
//             })
//         }
//     }

//     render() {
//         console.log(this.props, 'mmmmmmmmmmmmmmmmmmmmmmmmmmmm')
//         return (
//             <div>
//                 <div>
//                     {!this.state.editMode &&
//                         <span onClick={this.getStatus} onDoubleClick={this.editModeOn} >Status:{this.props.profileStatus}</span>
//                     }
//                 </div>
//                 <div>
//                     {this.state.editMode &&
//                         <input autoFocus onChange={this.onStatusChange} onBlur={this.editModeOff} value={this.state.status} />
//                     }
//                 </div>
//             </div>
//         )
//     }
// }

// export default ProfileStatus