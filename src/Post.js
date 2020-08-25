import React from 'react'
import './Post.css'
import Avatar from '@material-ui/core/Avatar'

const Post = () => {
    return (
        <div className="post">
            <div className="post__header">
                <Avatar
                    className="post_avatar"
                    alt="Renzito"
                    src="/static/images/avatar/1.jpg"
                />
                <h3>Username</h3>

            </div>
            {/* header => avatar + username */}


            {/* image */}
            <img className="post__image" 
            src="https://www.freecodecamp.org/news/content/images/2020/02/Ekran-Resmi-2019-11-18-18.08.13.png" alt=""/>


            {/* username + caption */}
            <h4 className="post__text"><strong>clevergazi</strong> WOW daythree of live sessions</h4>

        </div>
    )
}

export default Post
