import React, { useState, useRef } from 'react'
import { Link } from 'react-router-dom'
import '../App.css'
import play from '../assets/images/play-button.png'
import track from '../assets/sounds/start.wav'
import wingedsword from '../assets/images/winged-sword.png'
import speakeron from '../assets/images/speaker-on.png'
import speakeroff from '../assets/images/speaker-off.png'
// import { loginHandler } from '../Javascript/login'
// import { signupHandler } from '../Javascript/signup'



export default function Start() {

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

    document.title = 'BCS Adventures';
    //Token for logging in, token is required to access certain routes
    const [token, setToken] = useState("");

    //State for handling a user's data
    const [userData, setUserData] = useState({
      username:"",
      id:0,
      characters: []
    });
  
    //State for handling form submissions
    const [formState, setFormState] = useState({
        username:'',
        password:''
    });
  
    return (
        <div className="pageContainer creationBg">
            <div className="mainStartContainer">
                <div className="logNavCont">
                    {/* TODO: temporarily going to be using 'Link' here to get to '/Login' and '/Signup' routes. When implementing logic change below where 'Link'.*/}                  
                    <h3 className="logContainer"> <Link to={'./Login'} style={{textDecoration: 'none', color: 'inherit'}} className='logbutton pixel-border'>Login</Link> <Link to={'./Signup'} style={{textDecoration: 'none', color: 'inherit'}}className='logbutton pixel-border'>Signup</Link></h3>
                </div>
                <div className="widthContainer">
                    <h1 className="TavernTitle">BCS Adventures<img className="wingedsword" src={wingedsword} alt="Sword" /></h1>
                    <div className='description'>
                    Welcome to BCS Adventures! You are about to embark on an epic journey, filled with fierce battle, self-doubt, evil bugs, but most importantly, triumph! Face off against fierce enemies from the savage world of coding and beyond as you master the skills necessary to become a certified Fullstack Developer! 
                    </div>
                    <div className="TavernMenuContainer">
                        <Link to={'./Creation'} style={{textDecoration: 'none', color: 'inherit'}} className="PlayCard pixel-border">Play<img className="PlayButton" src={play} alt="Story" /></Link>

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
