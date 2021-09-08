import React from 'react'
import classes from './Post.module.css'

class Post extends React.Component {
    render() {
        return (
            <div>
                <div className={classes.post}>
                    <img alt='Avatar' src='data:image/jpeg;base64,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'></img>
                    {this.props.message}
                    <div>
                        <span>Like : {this.props.likeCount}</span>
                    </div>

                </div>
            </div>
        )
    }
}

export default Post