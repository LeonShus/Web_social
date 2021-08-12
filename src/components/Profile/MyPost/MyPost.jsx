import classes from './MyPost.module.css'
import Post from './Post/Post'
import React from 'react'
import { addNewPostActionCreator, upgradePostTextActionCreator } from '../../../Store/state'


const MyPost = (props) => {
    console.log(props.store.state, 'MyPost')
    

    const postElem = props.store.getState().profilePage.postData.map(el => <Post message={el.message} likeCount={el.likeCount} />)


    let addPost = () => {
        if(props.store.getState().profilePage.newPostText != ''){
            props.store.dispatch(addNewPostActionCreator())
        } else alert('No text')
    }

    let onPostChange = (e) => {

        let text = e.target.value
        props.store.dispatch(upgradePostTextActionCreator(text))
    }
    
    return (
        <div className={classes.myPostContainer}>
            <div>
                <div>
                    <textarea onChange={onPostChange} placeholder='Enter post'
                              value={props.store.getState().profilePage.newPostText}/>
                </div>
                <div>
                    <button onClick={ addPost }>Add post</button>
                </div>

            </div>
            <div className={classes.post}>
                {postElem}
            </div>

        </div>
    )
}

export default MyPost