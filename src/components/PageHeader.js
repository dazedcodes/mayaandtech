import React from 'react';

export default function PageHeader(props) {
    return (
        <div>
            <h1>{props.title}</h1>
            <h3>{props.subtitle}</h3>
            <p>{props.paragraph}</p>
        </div>
    )
}
