import { Form, Formik } from 'formik'
import React from 'react'
import { MyTextarea } from '../../common/FormsControls/FormsControls'
import classes from './MyPost.module.css'
import Post from './Post/Post'
import * as Yup from 'yup'
import Button from '../../common/Buttons/Button'


const MyPost = React.memo((props) => {

    //Создаем посты из стейта
    let posts = props.postData.map(el => <Post message={el.message} key={el.id} likeCount={el.likeCount} />)
    //Добавляем новый пост в стейт
    let addPost = (newPost) => props.addNewPost(newPost)

    
    return (
        <div className={classes.myPostContainer}>
            <Formik
                initialValues={{ newPost: '' }}
                validationSchema={Yup.object({
                    newPost: Yup.string()
                        .max(10, 'Max chars 300')
                })}
                onSubmit={values => {
                    console.log(values)
                    addPost(values.newPost)
                }}
            >
                <Form>
                    <MyTextarea
                        name='newPost'
                        type='text'
                    />
                    <Button buttonText='Post' type='submit'/>
                </Form>
            </Formik>
            <div className={classes.post}>
                {posts}
            </div>
        </div>
    )

})

export default MyPost

