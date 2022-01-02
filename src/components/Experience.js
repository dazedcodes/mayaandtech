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
            <div className="experienceHeader">
            <PageHeader
                title="Experiences"
                subtitle="THAT BRING IMPACT"
                paragraph=""
            />
            </div>
            
            <div className="experiencesContainer">
            <div className="experienceCont-Item">
                <Position
                    ImageAlt="Girls Who Code Logo"
                    positionImage={gwcPhoto}
                    positionLink="https://girlswhocode.com/"
                    positionRole="Teaching Assistant"
                />
            </div>
            <div className="experienceCont-Item">
                <Position
                    ImageAlt="iXperience Logo"
                    positionImage={ixPhoto}
                    positionLink="http://ixlink.co/maya-m70"
                    positionRole="Mentor + Business Developer"
                />
            </div>
            <div className="experienceCont-Item">
                <Position
                    ImageAlt="Hack4ImpactLogo"
                    positionImage={h4iPhoto}
                    positionLink="https://hack4impact.org/"
                    positionRole="Software Developer"
                />
            </div>
            <div className="experienceCont-Item">
                <Position
                    ImageAlt="Regenize Logo"
                    positionImage={regenizePhoto}
                    positionLink="https://www.regenize.co.za/"
                    positionRole="Backend Developer Intern"
                />
            </div>
            <div className="experienceCont-Item">
                <Position
                    ImageAlt="Carleton College Logo"
                    positionImage={carletonPhoto}
                    positionLink="https://www.carleton.edu/"
                    positionRole="IT Support Specialist"
                />
            </div>
            </div>
            
        </div>
    )
}
