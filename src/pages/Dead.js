import React, { useState, useRef } from 'react'
import track from '../assets/sounds/dead.mp3'
import speakeron from '../assets/images/speaker-on.png'
import speakeroff from '../assets/images/speaker-off.png'
import { Link } from 'react-router-dom'
export default function Dead() {
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
        <div className="deadcontainer">
            <h1 className='died'>You Died!</h1>
            <Link to={'/Tavern'} style={{ textDecoration: 'none', color: 'white' }} className="diedBtn pixel-border">Continue</Link>
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
}