import React, { useState, useRef } from 'react'
import { Link } from 'react-router-dom'
import '../App.css'
import play from '../assets/images/play-button.png'
import track from '../assets/sounds/introduction.mp3'
import back from '../assets/images/back.png'
import speakeron from '../assets/images/speaker-on.png'
import speakeroff from '../assets/images/speaker-off.png'
import joefinal from '../assets/images/characters/joefinal.png'


export default function StoryFour() {
    const [speaker, setStatus] = useState(false)
    const audioRef = useRef()
    const username = localStorage.getItem("username");

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
            <div className="mainStartContainer mainIntroContainer3">
                
                <div className="topNavContainer">
                    <Link to={'/Tavern'} style={{textDecoration: 'none', color: 'inherit'}} className="backbutton"><img className='backbuttonimg'src={back} alt="Back_Button" /> Back</Link>                    
                </div>
                
                <div className="widthContainer">
                <Link to={'/BattleJ2'} className='joe' style={{textDecoration: 'none', color: 'inherit'} } ><img className='joeffect joe' src={joefinal}/></Link>
                     <Link to={'/BattleJ2'} className='joe' style={{textDecoration: 'none', color: 'inherit'} } ><img className='joeffect joe' src={joefinal}/></Link>
                    <h1 className="joetitle2">Joe Reborn! Joins The Battle!</h1>
                    <div className='finaldesc'>
                    <div className='line1'>Suddenly, a powerful quake disbalances you… the shrill cries of Joe's cats, Shiva and Bahamut, rip through the air...</div>
                    <div className='line2'>From the pits of the binary abyss arise the thousand voices of Joe's scattered soul, vocalizing in unison:</div>
                    <div className='line3'>"I NEED NOT THIS PRISON OF FLESH TO DISPENSE OF THEE! MY CODE SHALL MAKE ME ETERNAL!"</div>
                    <div className='line4'>Joe appears again before you, shrouded in a salmon-colored aura... the pieces of his soul have coalesced, and his wrathful spirit bids you to combat...</div>
                   
                    
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