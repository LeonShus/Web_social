import React from 'react'
import classes from './MyPost.module.css'
import Post from './Post/Post'


class MyPost extends React.Component {

    addPost = () => this.props.addNewPost()
    postChange = (e) => {
        let text = e.target.value
        this.props.upgradePostText(text)
    }

    render() {
        return (
            <div className={classes.myPostContainer}>
                <div>
                    <div>
                        <textarea onChange={this.postChange} placeholder='Enter post'
                            value={this.props.profilePage.newPostText} />
                    </div>
                    <div>
                        <button onClick={this.addPost}>Add post</button>
                    </div>

                </div>
                <div className={classes.post}>
                    {this.props.profilePage.postData.map(el => <Post message={el.message} key={el.id} likeCount={el.likeCount} />)}
                </div>

            </div>
        )
    }
}

export default MyPost
