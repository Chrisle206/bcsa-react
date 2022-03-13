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
        username: "",
        id: 0,
        characters: []
    });

    //State for handling form submissions
    const [formState, setFormState] = useState({
        username: '',
        password: ''
    });

    return (
        <div className="pageContainer creationBg">
            <div className="mainStartContainer">
                <div className="logNavCont">
                    <h3 className="logContainer">
                        {/* TODO: temporarily going to be using 'Link' here to get to '/Login' and '/Signup' routes. When implementing logic change below where 'Link'.*/}
                        {/* <Link to={'./Login'} style={{ textDecoration: 'none', color: 'inherit' }} className='logbutton pixel-border'>Login</Link>
                        <Link to={'./Signup'} style={{ textDecoration: 'none', color: 'inherit' }} className='logbutton pixel-border'>Signup</Link> */}

                        {/* Login Button */}
                        <button type="button" className="logbutton" data-bs-toggle="modal" data-bs-target="#loginModal">
                            Login
                        </button>
                        <div className="modal fade" id="loginModal" tabindex="-1" aria-labelledby="loginModalLabel" aria-hidden="true">
                            <div className="modal-dialog">
                                <div className="modal-content">
                                    <div className="modal-header">
                                        <h3 className="modal-title" id="loginModalLabel">Login</h3>
                                    </div>
                                    <div className="modal-body">
                                        {/* Form */}
                                        <form>
                                            <div class="mb-3">
                                                <h5 for="logEmail" class="form-label">Email address</h5>
                                                <input type="email" class="form-control" id="logEmail" aria-describedby="emailHelp" />
                                            </div>
                                            <div class="mb-3">
                                                <h5 for="logPassword" class="form-label">Password</h5>
                                                <input type="password" class="form-control" id="logPassword" />
                                            </div>
                                            <div className="modal-footer">
                                                <button type="button" className="btn btn-secondary" data-bs-dismiss="modal">Close</button>
                                                <button type="submit" className="btn btn-primary">Submit</button>
                                            </div>
                                        </form>
                                    </div>
                                </div>
                            </div>
                        </div>
                        {/* Signup Button */}
                        <button type="button" className="logbutton" data-bs-toggle="modal" data-bs-target="#signupModal">
                            Signup
                        </button>
                        <div className="modal fade" id="signupModal" tabindex="-1" aria-labelledby="signupModalLabel" aria-hidden="true">
                            <div className="modal-dialog">
                                <div className="modal-content">
                                    <div className="modal-header">
                                        <h3 className="modal-title" id="signupModalLabel">Signup</h3>
                                    </div>
                                    <div className="modal-body">
                                        {/* Form */}
                                        <form>
                                            <div class="mb-3">
                                                <h5 for="signupEmail" class="form-label">Email address</h5>
                                                <input type="email" class="form-control" id="signupEmail" aria-describedby="emailHelp" />
                                            </div>
                                            <div class="mb-3">
                                                <h5 for="signupUser" class="form-label">Username</h5>
                                                <input type="email" class="form-control" id="signupUser" aria-describedby="emailHelp" />
                                            </div>
                                            <div class="mb-3">
                                                <h5 for="signupPassword" class="form-label">Password</h5>
                                                <input type="password" class="form-control" id="signupPassword" />
                                            </div>
                                            <div className="modal-footer">
                                                <button type="button" className="btn btn-secondary" data-bs-dismiss="modal">Close</button>
                                                <button type="submit" className="btn btn-primary">Submit</button>
                                            </div>
                                        </form>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </h3>
                </div>
                <div className="widthContainer">
                    <h1 className="TavernTitle">BCS Adventures<img className="wingedsword" src={wingedsword} alt="Sword" /></h1>
                    <div className='description'>
                        Welcome to BCS Adventures! You are about to embark on an epic journey, filled with fierce battle, self-doubt, evil bugs, but most importantly, triumph! Face off against fierce enemies from the savage world of coding and beyond as you master the skills necessary to become a certified Fullstack Developer!
                    </div>
                    <div className="TavernMenuContainer">
                        <Link to={'./Creation'} style={{ textDecoration: 'none', color: 'inherit' }} className="PlayCard pixel-border">Play<img className="PlayButton" src={play} alt="Story" /></Link>

                    </div>
                </div>
                <div className="bottomNavContainer">
                    <>
                        <audio autoPlay loop ref={audioRef} src={track} />
                        {speaker ? (
                            <button onClick={volOn} className="backbutton"><img className='soundbuttonimg' src={speakeroff} alt="speaker" /></button>
                        ) : (
                            <>
                                <button onClick={volOff} className="backbutton"><img className='soundbuttonimg' src={speakeron} alt="speaker" /></button>
                            </>
                        )}
                    </>
                </div>
            </div>
        </div>
    )
}
