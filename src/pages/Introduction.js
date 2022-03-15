import React, { useState, useRef } from 'react'
import { Link } from 'react-router-dom'
import '../App.css'
import play from '../assets/images/play-button.png'
import track from '../assets/sounds/introduction.mp3'
import back from '../assets/images/back.png'
import speakeron from '../assets/images/speaker-on.png'
import speakeroff from '../assets/images/speaker-off.png'


export default function Introduction() {
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
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut dapibus in erat eu vestibulum. Donec id arcu erat. Nulla viverra semper arcu, tincidunt sodales lorem vestibulum id. Sed fringilla tincidunt mollis. Suspendisse quis metus facilisis, ultricies orci ac, fringilla eros. Aliquam aliquam lectus felis, vehicula sollicitudin nisi consectetur sed. Pellentesque dui tortor, faucibus id leo vel, blandit aliquet nibh.
                    </div>
                    <div className="TavernMenuContainer">
                        <Link to={'/Battle'} style={{textDecoration: 'none', color: 'inherit'}} className="PlayCard pixel-border">Continue<img className="PlayButton" src={play} alt="Story" /></Link>

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
}
