import { useSelector } from "react-redux";
import { useState } from "react";
import React, { Component }  from 'react';
const PostComponent=()=>{
    const postsall=useSelector(state=>state.post);
    const posts=Object.keys(postsall).map((key) => [Number(key), postsall[key]]);

    console.log('postcomp');console.log(posts);
    return(
        <div>
            <h2>Post Component {posts.length}</h2>
            {
                posts.length >0 ?
                    <ul>
                        {posts.map(                            
                            (post)=>(
                                <li key={post[1].id}>{post[1].title}</li>
                            )
                        )}

                    </ul>
                : <p> No posts</p>
            }
        </div>
    )

}

export default PostComponent;
