import React from "react";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import './post.css'
import siva from '../image/siva.jpg'

export default function AddPost(props) {

    const navigate=useNavigate()

    const [name,setName]=useState('')
    const [location,setLocation]=useState('')
    const [description,setDescription]=useState('')
    const [image,setImage]=useState('')

    const post={
        name: name,
        location: location,
        likes: 64,
        description: description,
        PostImage: siva,
        date: new Date(),
    }


    return <form>
        <div className="block">
            <input
                type={Text}
                onChange={(e) => {
                    setImage(e.target.value)
                }}
                placeholder='No files choosen..'
                value={post.PostImage}
            />
            <button >browse</button>
        </div>
        <input type={Text}
            onChange={(e) => {
                setName(e.target.value)
            }}
            value={post.name}
            placeholder='Author'
        />
        <input type={Text}
            onChange={(e) => {
                setLocation(e.target.value)
            }}
            value={post.location}
            placeholder='Location'
        />
        <input className="block"
        style={{width:'440px'}}
            type={Text}
            value={post.description}
            onChange={(e) => {
                setDescription(e.target.value)
                console.log(post.description)
            }}
            placeholder='Description'
        />
        <button id="post-button" onClick={()=>{
            navigate('/post')
        }}>post</button>
    </form>
}