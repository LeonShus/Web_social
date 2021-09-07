import { Form, Formik } from 'formik'
import React from 'react'
import { MyTextarea } from '../common/FormsControls/FormsControls'
import DialogItem from './DialogItem/DialogItem'
import classes from './Dialogs.module.css'
import MessageItem from './MessageItem/MessageItem'
import * as Yup from 'yup'
import Button from '../common/Buttons/Button'


class Dialogs extends React.Component {

    // добавляем сообщение в state
    sendMessage = (newMessage) => {
        this.props.sendNewMessage(newMessage)
    }
    

    render() {
        
        return (
            //отрисовываем пользователей в чате
            <div className={classes.dialogs}>
                <div className={classes.users}>
                    {this.props.dialogPage.dialogsData.map(el => <DialogItem userName={el.userName} key={el.id} id={el.id} avatar={el.avatar} />)}
                </div>
                {/* Отрисовыем диалоговое окно */}
                <div className={classes.dialogContainer}>
                    <div className={classes.massageContainer}>
                        {this.props.dialogPage.messagesData.map(el => <MessageItem messageValue={el.message} key={el.id} avatar={el.avatar} />)}
                    </div>
                    <div>
                        <Formik
                            initialValues ={{ newMessage: '' }}
                            validationSchema = {Yup.object({
                                newMessage: Yup.string()
                                    .max(10, 'Max chars 300')
                            })}
                            onSubmit = {values => {
                                console.log(values)
                                this.sendMessage(values.newMessage)
                            }}
                        >
                            <Form>
                                <MyTextarea
                                    name='newMessage'
                                    type='text'
                                />
                                <Button buttonText='Send' type='submit'/>
                            </Form>
                            </Formik>
                    </div>

                </div>

            </div>
        )
    }
}

export default Dialogs
