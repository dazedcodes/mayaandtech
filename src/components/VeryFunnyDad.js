import React, {useState} from 'react';
import '../App.css';
import vfdPhoto from '../assets/vfd.png';
import Jokes from './Jokes';

export default function VeryFunnyDad() {
    const [joke, setJoke] = useState('Click on Pops for a joke.');
    const [punchline, setPunchline] = useState('');
    function getRandomInt(max) {
        return Math.floor(Math.random() * max);
    }
    function handleClick() {
        let index = getRandomInt(14);
        setJoke(Jokes[index].joke);
        setPunchline(Jokes[index].punchline);
    }
    return (
        <div className="vfd-container">
            <div className="vfd-content">
                <div className="vfd-header">
                    <h1>Haha, Very Funny Dad...</h1>
                    <h3>DAD JOKE GENERATOR</h3>
                    <img 
                        className="vfd-photo" 
                        alt="Jarred Murphy, the father of Maya Murphy." 
                        src={vfdPhoto} 
                        onClick={handleClick}/>
                </div>
                <div className="joke-container">
                    <p id="joke">{joke}</p>
                    <p id="punchline">{punchline}</p>
                </div>
            </div>
            
        </div>
    )
}
