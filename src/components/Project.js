import React from 'react';
import '../App.css';

export default function Project(props) {
    return (
        <div>
            <img className="projectImage" src={props.projectImage}/>
            <button className="projectName" >{props.projectName}</button>
            <div className="descBackground">
                <p className="projectDesc">{props.projectDesc}</p>
            </div>
        </div>
    )
}
