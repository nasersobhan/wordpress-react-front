import React from 'react'
import Post from './Post'

const PostTags=({Posts}) =>{
        return (
            <div className="blog_left_sidebar">
              {  Posts.map(post => (
                    <Post key={post.id} post={post} />
                ))
              }  
            </div>
        )
}


export default PostTags
