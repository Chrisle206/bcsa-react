import React, { useState, useRef } from 'react'
import { Link } from 'react-router-dom'
import '../App.css'
import play from '../assets/images/play-button.png'
import track from '../assets/sounds/introduction.mp3'
import back from '../assets/images/back.png'
import speakeron from '../assets/images/speaker-on.png'
import speakeroff from '../assets/images/speaker-off.png'


export default function StoryTwo() {
    const [speaker, setStatus] = useState(false)
    const audioRef = useRef()

    function volOff() {
        if (useState !== false) {
            audioRef.current.pause()
            console.log('muting')
            setStatus(true)
        }
    }

    function volOn() {
        if (useState !== true) {
            audioRef.current.play()
            console.log('unmuting')
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
                    <h1 className="TavernTitle">Long ago...</h1>
                    <div className='description'>
                    <div className='line1'>The second evil TA peers up at you, weakly brandishing his skis...</div>
                    <div className='line2'>"No more... please... you've freed me from his wrath... please... save the others..."</div>
                    <div className='line3'>Brett gathers himself and then skis away... He looks happy as he speeds off into the distance.</div>
                    <div className='line4'>You press on, but detect an even greater evil not far from here...</div>
                    </div>
                    <div className="TavernMenuContainer">
                        <Link to={'/BattleF'} style={{textDecoration: 'none', color: 'inherit'}} className="PlayCard pixel-border">Continue<img className="PlayButton" src={play} alt="Story" /></Link>

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