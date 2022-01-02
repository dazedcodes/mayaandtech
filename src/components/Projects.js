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
                    projectDesc="A YouTube channel created to help aspiring developers level up their programming skills."
                    projectCTA="Visit Channel"
                    CTALink="https://www.youtube.com/channel/UCHgzNgvOYjTWcMbBqdbwTJQ"
                />
                
                    <Project 
                        projectName="Very Funny Dad"
                        projectDesc="This project is a Dad joke generator to honor his passing and dreams of being a comedian."
                        projectCTA="Let's Laugh"
                        CTALink="/veryfunnydad-game"
                    />
            </div>
        </div>
    )
}
