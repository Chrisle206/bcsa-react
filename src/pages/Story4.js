import React, { useState, useRef } from 'react'
import { Link } from 'react-router-dom'
import '../App.css'
import play from '../assets/images/play-button.png'
import track from '../assets/sounds/introduction.mp3'
import back from '../assets/images/back.png'
import speakeron from '../assets/images/speaker-on.png'
import speakeroff from '../assets/images/speaker-off.png'


export default function StoryFour() {
    const [speaker, setStatus] = useState(false)
    const audioRef = useRef()
    const username = localStorage.getItem("username");

    function volOff() {
        if (useState !== false) {
            audioRef.current.pause()
            setStatus(true)
        }
    }

    function volOn() {
        if (useState !== true) {
            audioRef.current.play()
            setStatus(false)
        }
    }
    return (
        <div className="pageContainer creationBg">
            <div className='rotate'>Rotate to play</div>
            <div className="mainStartContainer mainIntroContainer">
                <div className="topNavContainer">
                    <Link to={'/Tavern'} style={{textDecoration: 'none', color: 'inherit'}} className="backbutton"><img className='backbuttonimg'src={back} alt="Back_Button" /> Back</Link>                    
                </div>
                <div className="widthContainer">
                    <h1 className="TavernTitle">Joe Defeated?...</h1>
                    <div className='description'>
                    <div className='line1'>"So it ends like this... the student surpasses the master... Pretty, pretty cool..."</div>
                    <div className='line2'>Joe's parting words are filled with contempt as his soul is shredded into binary data by the infinite JavaScript loop...</div>
                    <div className='line3'>You hear a voice booming from above... The BCS Gods seek communion...</div>
                    <div className='line4'>"{username}, YOU HAVE LIBERATED THE LAND OF CODE FROM JOE'S VIOLENT TYRANNY. TAKE THIS CERTIFICATE OF COMPLETION, AND CONTINUE TO PURIFY THESE LANDS."</div>
                    </div>
                    <div className="TavernMenuContainer">
                        <Link to={'/Story5'} style={{textDecoration: 'none', color: 'inherit'}} className="PlayCard pixel-border">Continue<img className="PlayButton" src={play} alt="Story" /></Link>

                    </div>
                </div>
                <div className="bottomNavContainer">
                <>
                        <audio autoPlay loop ref={audioRef} src={track}/>
                        {speaker ? (
                                <button onClick={volOn} className="backbutton"><img className='soundbuttonimg'src={speakeroff} alt="speaker" /></button>                    
                            ) : (
                                <>
                                <button onClick={volOff} className="backbutton"><img className='soundbuttonimg'src={speakeron} alt="speaker" /></button> 
                                </>
                        )}                   
                    </>            
                </div>
            </div>
        </div>
    )
};