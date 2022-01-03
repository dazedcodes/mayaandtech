import React from 'react';
import PageHeader from './PageHeader';

export default function Motto() {
    return (
        <div className="motto parallax">
            <PageHeader 
                title="My Life Motto"
                subtitle="THAT KEEPS ME SANE"
            />
            <p className="quote">You have power over your mind - not outisde events. Realize this, and you will find strength.</p>
            <hr/>
            <p className="author">Marcus Aurelius</p>
        </div>
    )
}
