
import React from 'react';
import '../../App.css';
import profile from '../../images/SwethaPhoto.jpg'

export default function About() {
    return (

        <div className="aboutme">
            <span><img id="profile" src={profile} /></span>
            <div className="row">
                <div className="col-sm-9">
                    <h1 >ABOUT ME</h1>
                    <br></br>
                    <br></br>
                    <h3 > I am a full stack web development student at University of New Hampshire.</h3>
                    <h3 > My key skills include: HTML5, CSS, JavaScript, jQuery, Bootstrap, React, MERN.
                    </h3>
                </div>
                <div className="col-sm-3">
                </div>
            </div>
        </div>

    )

}

