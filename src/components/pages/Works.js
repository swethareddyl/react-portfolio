import React from 'react';
import '../../App.css';
import gamepulse from '../../images/gamepulse.PNG';
import fallout76centralmarket from '../../images/fallout76centralmarket.jpg';



export default function Works() {
    return (
        <div className="container">

            <div className="card">
                <img id='projects' src={gamepulse} alt="GamePulse project" />
                <p><strong>GamePulse</strong></p>
                <div className="container">
                    <a href="https://github.com/UNH-Bootcamp-Projects/project-1-group-e" target="_blank"><p class='style'>GITHUB REPOSITORY</p></a>
                </div>
            </div>
            <br></br>

            <div className="container-fluid text-center bg-grey">
                <div className="card2">
                    <img id='projects' src={fallout76centralmarket} alt="Fallout-76-Central-Market" />
                    <p><strong></strong></p>
                    <div className="container">
                        <a href="https://github.com/shabobble/Fallout-76-Central-Market" target="_blank"><p class='style'>GITHUB REPOSITORY</p></a>
                    </div>
                </div>
                <br></br>

                <div className="card3">

                    <p><strong>FITNESS TRACKER</strong></p>
                    <div className="container">
                        <a href="https://github.com/swethareddyl/workout-tracker" target="_blank"><p class='style'>GITHUB REPOSITORY</p></a>
                    </div>
                </div>
                <br></br>

                <div className="card4">

                    <p><strong>WEATHER DASHBOARD</strong></p>
                    <div className="container">
                        <a href="https://github.com/swethareddyl/Weather-DashBoard" target="_blank"><p class='style'>GITHUB REPOSITORY</p></a>
                    </div>
                </div>
                <br></br>

                <div className="card5">

                    <p><strong>WORKDAY SCHEDULER</strong></p>
                    <div className="container">
                        <a href="https://github.com/swethareddyl/scheduler" target="_blank"><p class='style'>GITHUB REPOSITORY</p></a>
                    </div>
                </div>
                <br></br>

                <div className="card">

                    <p><strong>TECH BLOG</strong></p>
                    <div className="container">
                        <a href="https://github.com/swethareddyl/TECHBLOG" target="_blank"><p class='style'>GITHUB REPOSITORY</p></a>
                    </div>
                </div>


            </div>
        </div>


    )

}