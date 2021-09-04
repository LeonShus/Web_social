import { Form, Formik } from 'formik'
import React from 'react'
import { MyTextarea } from '../../common/FormsControls/FormsControls'
import classes from './MyPost.module.css'
import Post from './Post/Post'
import * as Yup from 'yup'
import Button from '../../common/Buttons/Button'


const MyPost = React.memo((props) => {


    let posts = props.postData.map(el => <Post message={el.message} key={el.id} likeCount={el.likeCount} />)

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
                    {/* <button type='submit'>Post</button> */}
                </Form>
            </Formik>
            <div className={classes.post}>
                {posts}
            </div>
        </div>
    )

})

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
