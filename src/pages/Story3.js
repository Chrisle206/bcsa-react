import React, { useState, useRef } from 'react'
import { Link } from 'react-router-dom'
import '../App.css'
import play from '../assets/images/play-button.png'
import track from '../assets/sounds/introduction.mp3'
import back from '../assets/images/back.png'
import speakeron from '../assets/images/speaker-on.png'
import speakeroff from '../assets/images/speaker-off.png'


export default function StoryThree() {
    const [speaker, setStatus] = useState(false)
    const audioRef = useRef()

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
                    <h1 className="joetitle">Frantz Defeated...</h1>
                    <div className='description'>
                    <div className='line1'>Frantz smiles at you, looking unbothered by his defeat.</div>
                    <div className='line2'>"You've done well, but it's about to get a lot harder from here..."</div>
                    <div className='line3'>Frantz seems contemplative as he coolly walks away, his mind evidently on other matters now...</div>
                    <div className='line4'>You seem to be nearing the end of your journey, but a presence more powerful than you've ever felt seems to lie ahead...</div>
                    <div className='line5'>As you draw near, you begin to hear cats meowing... There is the faint but familiar voice of a certain manatee enthusiast around the corner...</div>
                    </div>
                    
                        <Link to={'/BattleJ'} style={{textDecoration: 'none', color: 'inherit'}} className="contbutton">Continue</Link>
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