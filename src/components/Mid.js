import React from 'react';
import './Mid.css';
import Banner from '../images/Group 1.png';

function Mid() {
    return (
        <div className="mid">
            <img src={Banner} width="800px" height="450px"/>
            <div className="mid__text">
                <div className="mid__1">
                <h1>Design and Strategy</h1>
                <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s</p>
                </div>
                <div className="mid__2">
                <h1>Digital Marketing Channels</h1>
                <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s</p>
     
                </div>
                
                       </div>
        </div>
    )
}

export default Mid
