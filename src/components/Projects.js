import '../App.css';
import React from 'react';
import PageHeader from './PageHeader';
import Project from './Project';

export default function Projects() {
    return (
        <div className="projects parallax">
            <div className="projectHeaderContainer">
                <PageHeader 
                    title="Projects"
                    subtitle="THAT MAKE LIFE EASIER"
                />
            </div>
            <div className="projectsContainer">
                <Project
                    projectName="Maya & Tech"
                    projectDesc="A YouTube channel created to provide aspiring developers resources to achieve their programming dreams."
                    projectCTA="Visit Channel"
                    CTALink="https://www.youtube.com/channel/UCHgzNgvOYjTWcMbBqdbwTJQ"
                />
                
                <Project 
                    projectName="Very Funny Dad"
                    projectDesc="To honor the passing of my father, Jarred Shane Murphy, I created this Dad joke generator to honor his dream of becoming a comedian."
                    projectCTA="Let's Laugh"
                    CTALink="https://dazzling-goldstine-3ef23a.netlify.app"
                />
            </div>
        </div>
    )
}
