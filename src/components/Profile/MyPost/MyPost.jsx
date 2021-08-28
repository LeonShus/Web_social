import { Field, Form, Formik } from 'formik'
import React from 'react'
import { MyTextarea } from '../../common/FormsControls/FormsControls'
import classes from './MyPost.module.css'
import Post from './Post/Post'
import * as Yup from 'yup'


class MyPost extends React.Component {

    addPost = (newPost) => this.props.addNewPost(newPost)

    render() {
        return (
            <div className={classes.myPostContainer}>
                <Formik
                    initialValues={{ newPost: '' }}
                    validationSchema = {Yup.object({
                        newPost: Yup.string()
                            .max(10, 'Max chars 300')
                    })}
                    onSubmit = { values => {
                        console.log(values)
                        this.addPost(values.newPost)
                    }}
                >
                    <Form>
                        <MyTextarea
                            name='newPost'
                            type='text'
                        />
                        <button type='submit'>Post</button>
                    </Form>
                </Formik>
                <div className={classes.post}>
                    {this.props.profilePage.postData.map(el => <Post message={el.message} key={el.id} likeCount={el.likeCount} />)}
                </div>
            </div>
        )
    }
}

export default MyPost


// class MyPost extends React.Component {

//     addPost = () => this.props.addNewPost()
//     postChange = (e) => {
//         let text = e.target.value
//         this.props.upgradePostText(text)
//     }

//     render() {
//         return (
//             <div className={classes.myPostContainer}>
//                 <div>
//                     <div>
//                         <textarea onChange={this.postChange} placeholder='Enter post'
//                             value={this.props.profilePage.newPostText} />
//                     </div>
//                     <div>
//                         <button onClick={this.addPost}>Add post</button>
//                     </div>

//                 </div>
//                 <div className={classes.post}>
//                     {this.props.profilePage.postData.map(el => <Post message={el.message} key={el.id} likeCount={el.likeCount} />)}
//                 </div>

//             </div>
//         )
//     }
// }

// export default MyPost
