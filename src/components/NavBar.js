import React from 'react';
import '../App.css';

export default function NavBar() {
    return (
    <nav className="navbar">
        <a href="#home"><p >HOME</p></a>
        <a href="#aboutme"><p >ABOUT ME</p> </a>
        <a href="#projects"><p >PROJECTS</p></a>
        <a href="#motto"><p >MOTTO</p></a>
        <a href="#experience"><p >EXPERIENCE</p></a>
        <a href="#contact"><p >CONTACT</p></a>
    </nav>
    )
}
