import React from 'react';
import '../App.css';

export default function Position(props) {
    return (
        <div >
            <img className="experienceImage" src={props.positionImage}/>
            <div >
                <h5 className="experienceRole">{props.positionRole}</h5>
            </div>
        </div>
    )
}
