import classes from './MyPost.module.css'
import Post from './Post/Post'

const MyPost = () => {
    return (
        <div>
            <div>
                <textarea></textarea>
                <button>Add post</button>
                <button>Post remove</button>
            </div>

            <Post message='Hi, my name is Leon' likeCount='11'/>
            <Post message='Nice to meat you' likeCount='144'/>
        </div>
    )
}

export default MyPost