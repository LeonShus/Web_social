import classes from './MyPost.module.css'
import Post from './Post/Post'


const postData = [
    {id: 1, message: 'Hi, my name is Leon', likeCount: 12},
    {id: 1, message: 'Nice to meat you', likeCount: 188}
]

const postElem = postData.map(el => {
    return  <Post message={el.message} likeCount={el.likeCount} />
})

const MyPost = () => {
    return (
        <div className={classes.myPostContainer}>
            <div>
                <div>
                    <textarea></textarea>
                </div>
                <div>
                    <button>Add post</button>
                    <button>Post remove</button>
                </div>

            </div>
            <div className={classes.post}>
                {postElem}
            </div>

        </div>
    )
}

export default MyPost