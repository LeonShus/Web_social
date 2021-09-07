import React from 'react'
import { Form, Formik, } from 'formik'
import * as Yup from 'yup'
import { MyCheckbox, MyTextInput } from '../common/FormsControls/FormsControls'
import { Redirect } from 'react-router-dom'

// Создаем форму которую будем отправлять на сервер
let LoginForm = (props) => {
    return (
        <Formik
            initialValues={{ email: '', password: '', rememberMe: false }}

            validationSchema={Yup.object({
                email: Yup.string().email('Invalid email address').required('Required'),
                password: Yup.string().min(5, 'Password min val is 5')
            })}
            
            onSubmit={(values, { setSubmitting }) => {
                setTimeout(() => {
                    props.login(values.email, values.password, values.rememberMe)
                    setSubmitting(false);
                }, 400);
                
            }}
        >
            <Form>
                <MyTextInput
                    label='Email'
                    name='email'
                    type='email'
                    placeholder='email'

                />
                <MyTextInput
                    label='Password'
                    name='password'
                    type='password'
                    placeholder='password'

                />

                <MyCheckbox name='rememberMe'>
                    Remember me
                </MyCheckbox>

                <div>
                    <button type='submit'>Submit</button>
                </div>
            </Form>
        </Formik >
    )
}


let Login = (props) => {
    let login = (email, password, rememberMe) => {
        props.loginUser(email, password, rememberMe)
    }
    // Проверяем залогинет ли пользователь, если да,
    // то переносим его на страницу профиля
    if (props.isAuth) {
        return <Redirect to='/profile' />
    }

    return (
        <div>
            <h1>Login</h1>
            <LoginForm login={login} />
        </div>
    )
}

export default Login