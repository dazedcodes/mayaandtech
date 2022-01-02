import React from 'react';
import '../App.css';

export default function Position(props) {
    return (
        <div >
            <a href={props.positionLink}><img className="experienceImage" alt={props.ImageAlt} src={props.positionImage}/></a>
            <h5 className="experienceRole">{props.positionRole}</h5>
        </div>
    )
}
