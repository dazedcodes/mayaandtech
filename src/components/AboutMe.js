import React from 'react';
import mayaProfile from '../assets/MayaProfile.jpg';
import PageHeader from './PageHeader';

import '../App.css';

export default function AboutMe() {
    return (
        <div className="aboutme parallax">
            <div>
                <img className="aboutmeProfilePic"  alt="A headshot of Maya Murphy smiling." src={mayaProfile}/>
            </div>
            <div>
                <PageHeader 
                    title="About Me"
                    subtitle="A LENS THAT HELPS ONE SEE CLEARLY"
                    paragraph="At an early age, I was always cognizant of my figure it out mentality, a worldview developed from the reoccurring instability endured in my childhood. Nevertheless, crafting solutions with grace has proven to provide clarity for myself and all those whom I cross paths with."
                />
            </div>
            
            
        </div>
    )
}
