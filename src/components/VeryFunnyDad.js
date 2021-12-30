import React from 'react'

export default function VeryFunnyDad() {
    return (
        <div>
            <h1>{props.title}</h1>
            <h4>{props.subtitle}</h4>
            <img src={props.image}/>
            <div>
                <p>{props.joke}</p>
            </div>
        </div>
    )
}
