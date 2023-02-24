import React, { useEffect, useState } from "react";
import clone from '../image/clone.png'
import cmaera from '../image/camera.png'
import './post.css'
import { posts } from "./InstialPost";
import heart from '../image/heart.png'
import share from '../image/share.png'
import { addPost } from "../httpservice/httpService";
import AddPost from "./addPost";


export default function PostViewPage() {
    const [show, setShow] = useState(true);

    useEffect(()=>{
        
    }, [posts])

    return <div id="post-view">
        <header>
            <div id="logo">
                <img src={clone} height='35px' alt="logo" /> &nbsp; <span style={{ color: '#006238' }}>Instaclone</span>
            </div>
            <div>
                <img src={cmaera} height='35px' onClick={()=>{setShow(false)}} alt='cmaera-logo' />
            </div>
        </header>
        <hr />
            <div>
                {show ? <div>
                    {posts.map((post) => (
                    <div className="post">
                        <div><b>{post.name}</b></div>
                        <div>{post.location}</div>
                        <div><img width='500px' src={post.PostImage} alt='post-image' /></div>
                        <div>
                            <span><img src={heart} /></span> &nbsp; <span><img src={share} /></span>
                            <div id="date"> {post.date.toLocaleDateString()}</div>
                        </div>
                        <div>{post.likes}  likes</div>
                        <div><b>{post.description}</b></div>
                    </div>

                ))}
                </div> : <AddPost initpost={posts} />
                }
            </div>
    </div>
}