import React from 'react';
import PageHeader from './PageHeader';
import Position from './Position';
import gwcPhoto from '../assets/gwcPhoto.png';
import ixPhoto from '../assets/ixPhoto.png';
import h4iPhoto from '../assets/h4iPhoto.png';
import regenizePhoto from '../assets/regenizePhoto.png';
import carletonPhoto from '../assets/carletonPhoto.png';

export default function Experience() {
    return (
        <div className="experience parallax">
            <PageHeader
                title="Experience"
                subtitle="THAT BRINGS IMPACT"
                paragraph=""
            />

            <Position
                positionImage={gwcPhoto}
                positionRole="Teaching Assistant"
            />
            <Position
                positionImage={ixPhoto}
                positionRole="Mentor + Business Developer"
            />
            <Position
                positionImage={h4iPhoto}
                positionRole="Software Developer"
            />
            <Position
                positionImage={regenizePhoto}
                positionRole="Backend Developer Intern"
            />
            <Position
                positionImage={carletonPhoto}
                positionRole="IT Support Specialist"
            />
        </div>
    )
}
