import React from 'react'
import PageHeader from './PageHeader'
import matPhoto from '../assets/MAT-photo.png';

export default function MayaAndTech() {
    return (
        <div>
            <PageHeader
                title="Maya and Tech"
                subtitle="YOUTUBE CHANNEL"
                paragraph="Get out of your head, and into your code with Maya and Tech. Coding can be daunting. However, throughout my journey, I've learned that breaking down any problem or project into smaller, recognizable concepts has made developing a journey worth traveling! Check out my channel on YouTube for more info and videos."
            />
            <div>
                <img src={matPhoto} />
            </div>
        </div>
    )
}
