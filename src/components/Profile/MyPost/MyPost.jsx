import classes from './MyPost.module.css'
import Post from './Post/Post'


const MyPost = (props) => {
    console.log(props, 'MyPost')
    

    const postElem = props.profilePage.postData.map(el => <Post message={el.message} key={el.id} likeCount={el.likeCount} />)

    // Добавляем пост в state
    let addPost = () => {
        props.onAddPost()
    }

    // Изменяем текст нового поста в state
    let PostChange = (e) => {
        let text = e.target.value
        props.onPostChange(text)
    }
    
    return (
        <div className={classes.myPostContainer}>
            <div>
                <div>
                    <textarea onChange={PostChange} placeholder='Enter post'
                              value={props.profilePage.newPostText}/>
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