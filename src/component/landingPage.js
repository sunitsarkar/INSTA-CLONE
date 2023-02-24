import React from "react";
import { useNavigate } from "react-router-dom";
import image from '../image/image.png'



export default function LandingPage(){

    const navigate=useNavigate();

    return <div id="landing">
        <div id="col-1">
            <img src={image} alt="image" width="200px" heigh="400px"/>
        </div>
        <div id="col-2">
            <h1>10x Team</h1>
            <div>
                <button id="main-button" onClick={()=>{navigate('/post')}}>Enter</button>
            </div>
        </div>
    </div>;
}