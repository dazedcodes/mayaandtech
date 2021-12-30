import React from 'react';
import PageHeader from './PageHeader';
import Project from './Project';
import matPhoto from '../assets/MAT-photo.png';
import vfdPhoto from '../assets/vfd-photo.png';
import financePhoto from '../assets/financeApp-photo.png';

export default function Projects() {
    return (
        <div className="projects parallax">
            <PageHeader 
                title="Projects"
                subtitle="THAT MAKE LIFE EASIER"
                paragraph="Whether you need help keeping track of finances, need a laugh, or motivation to keep your mind fresh, there's a tool just for you."
            />
            <Project 
                projectImage={matPhoto}
                projectName="MAYA AND TECH"
                projectDesc="My Dad was a goofy man, always full of silly jokes and sayings. This project is a Dad joke generator to honor his passing and dreams of being a comedian. Share a laugh with me here."
            />
            <Project 
                projectImage={vfdPhoto}
                projectName="VERY FUNNY DAD"
                projectDesc="This YouTube channel was created to help aspiring developers level up their programming skills. Want to learn how to build a simple app? Watch my most recent video here."
            />
            <Project 
                projectImage={financePhoto}
                projectName="FINANCE APP"
                projectDesc="An app designed to help you build wealth sustainably. This app is currently under development. Sign up here to be the first to know when the application publishes to the App Store!"
            />
        </div>
    )
}
