import React from 'react';
import '../App.css';
import {Link} from 'react-router-dom';

export default function NavBar() {
    return (
    <nav className="navbar">
        <Link to="/"><p >HOME</p></Link>
        <Link to="/aboutme"><p >ABOUT ME</p> </Link>
        <Link to="/projects"><p >PROJECTS</p></Link>
        <Link to="motto"><p >MOTTO</p></Link>
        <Link to="/experience"><p >EXPERIENCE</p></Link>
        <Link to="/contact"><p >CONTACT</p></Link>
    </nav>
    )
}
