import React, { useState, useRef } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import '../App.css'
import play from '../assets/images/play-button.png'
import track from '../assets/sounds/start.mp3'
import wingedsword from '../assets/images/winged-sword.png'
import speakeron from '../assets/images/speaker-on.png'
import speakeroff from '../assets/images/speaker-off.png'


export default function Start() {
    // let history = useNavigate();

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
        id: 0,
    });

    //State for handling form submissions
    const [formState, setFormState] = useState({
        username: '',
        password: ''
    });

    const loginHandler = async function(e) {
        e.preventDefault();
        
          const baseurl = 'https://bcsa-api.herokuapp.com'
        
          const response = await fetch(`${baseurl}/user/login`, {
            method: 'POST',
            body: JSON.stringify(formState),
            headers: { 'Content-Type': 'application/json' },
          });
      
          const user = await response.json();
          console.log(user);
    
          setToken(user.token);
          localStorage.setItem("token", user.token);
          localStorage.setItem("characterId", user.characters[0]._id);
          localStorage.setItem("username", user.username);
          setUserData({
              username:user.username,
              id:user._id,
              characters:user.characters,
            });
    
    };    

    const signupHandler = async function(e) {
        e.preventDefault();
          
          const baseurl = 'https://bcsa-api.herokuapp.com'
        
          const response = await fetch(`${baseurl}/user/signup`, {
            method: 'POST',
            body: JSON.stringify(formState),
            headers: { 'Content-Type': 'application/json' },
          });
      
          const newUser = await response.json();
          console.log(newUser);
    
          setToken(newUser.token);
          localStorage.setItem("token", newUser.token);
          localStorage.setItem("id", newUser.id);
          localStorage.setItem("username", newUser.username);
          setUserData({
              username:newUser.username,
              id:newUser._id,
            })
    };

       //Logout should redirect to Start page
       const logout = () =>{
        localStorage.removeItem("token");
        localStorage.removeItem("characterId");
        localStorage.removeItem("id");
        localStorage.removeItem("username");
        setToken("");
        document.location.replace('/');
    }
    

    return (
        <div className="pageContainer creationBg">
            <div className='rotate'>Rotate to play</div>
            <div className="mainStartContainer">
                <div className="logNavCont">
                    <h3 className="logContainer">
                        {/* TODO: temporarily going to be using 'Link' here to get to '/Login' and '/Signup' routes. When implementing logic change below where 'Link'.*/}
                        {/* <Link to={'./Login'} style={{ textDecoration: 'none', color: 'inherit' }} className='logbutton pixel-border'>Login</Link>
                        <Link to={'./Signup'} style={{ textDecoration: 'none', color: 'inherit' }} className='logbutton pixel-border'>Signup</Link> */}

                        {/* Login Button */}
                        {userData.username ? (
                            <>  <button className="logbutton"onClick={logout}>Logout</button>    </>
                         ) :
                                                    <>
                        <button type="button" className="logbutton" data-bs-toggle="modal" data-bs-target="#loginModal">
                            Login
                        </button>
                                                    </>}
                        <div className="modal fade" id="loginModal" tabindex="-1" aria-labelledby="loginModalLabel" aria-hidden="true">
                            <div className="modal-dialog">
                                <div className="modal-content">
                                    <div className="modal-header">
                                        <h3 className="modal-title" id="loginModalLabel">Login</h3>
                                    </div>
                                    <div className="modal-body">
                                        {/* Form */}
                                        <form onSubmit={loginHandler}>
                                            <div class="mb-3">
                                                <h5 for="logEmail" class="form-label">Username</h5>
                                                <input type="username" class="form-control" id="logEmail" aria-describedby="emailHelp" value={formState.username} onChange={e => setFormState({ ...formState, username: e.target.value })}/>
                                            </div>
                                            <div class="mb-3">
                                                <h5 for="logPassword" class="form-label">Password</h5>
                                                <input type="password" class="form-control" id="logPassword" value={formState.password} onChange={e => setFormState({ ...formState, password: e.target.value })} />
                                            </div>
                                            <div className="modal-footer">
                                                {userData.username ? (
                                                    <>
                                                        <h3>Welcome, {userData.username}! Click 'Play' to begin.</h3>
                                                        <button type="button" className="btn btn-secondary" data-bs-dismiss="modal">Close</button>                                                    </>
                                                ) : <>
                                                <button type="button" className="btn btn-secondary modalBTN" data-bs-dismiss="modal">Close</button>
                                                <button type="submit" className="btn btn-primary modalBTN">Submit</button>
                                                </>
                                                }
                                            </div>
                                        </form>
                                    </div>
                                </div>
                            </div>
                        </div>
                        {userData.username ? (
                            <></>
                         ) :
                                                    <>
                        {/* Signup Button */}
                        <button type="button" className="logbutton" data-bs-toggle="modal" data-bs-target="#signupModal">
                            Signup
                        </button>
                                                    </>}
                        <div className="modal fade" id="signupModal" tabindex="-1" aria-labelledby="signupModalLabel" aria-hidden="true">
                            <div className="modal-dialog">
                                <div className="modal-content">
                                    <div className="modal-header">
                                        <h3 className="modal-title" id="signupModalLabel">Signup</h3>
                                    </div>
                                    <div className="modal-body">
                                        {/* Form */}
                                        <form onSubmit={signupHandler}>
                                            <div class="mb-3">
                                                <h5 for="signupUser" class="form-label">Username</h5>
                                                <input type="username" class="form-control" id="signupUser" aria-describedby="emailHelp" value={formState.username} onChange={e => setFormState({ ...formState, username: e.target.value })} />
                                            </div>
                                            <div class="mb-3">
                                                <h5 for="signupPassword" class="form-label">Password</h5>
                                                <input type="password" class="form-control" id="signupPassword" value={formState.password} onChange={e => setFormState({ ...formState, password: e.target.value })} />
                                            </div>
                                            <div className="modal-footer">
                                                
                                                {userData.username ? (
                                                    <>
                                                        <h3>Welcome, {userData.username}! Click 'Play' to begin.</h3>
                                                        <button type="button" className="btn btn-secondary modalBTN" data-bs-dismiss="modal">Close</button>                                                    </>
                                                ) : 
                                                <>
                                                <button type="button" className="btn btn-secondary modalBTN" data-bs-dismiss="modal">Close</button>
                                                <button type="submit" className="btn btn-primary modalBTN">Submit</button>
                                                </>
                                                }


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
                    Welcome to BCS Adventures! You are about to embark on an epic journey filled with fierce battle, internal strife, evil bugs and, most importantly, triumph! Face off against evil TA's, peacock-ish devs and intelligent AI from the savage world of coding as you master the skills necessary to become a certified Fullstack Developer!

                    </div>
                {userData.username ? (

                    <div className="TavernMenuContainer">
                        {userData.characters ? (
                            <Link to={'./Tavern'} style={{ textDecoration: 'none', color: 'inherit' }} className="PlayCard pixel-border">Play<img className="PlayButton" src={play} alt="Story" /></Link>

                        ) : (
                            <Link to={'./Creation'} style={{ textDecoration: 'none', color: 'inherit' }} className="PlayCard pixel-border">Play<img className="PlayButton" src={play} alt="Story" /></Link>

                        ) }
                    </div>
                ) : (
                        <Link to={'./Start'} data-bs-toggle="modal" data-bs-target="#signupModal" style={{ textDecoration: 'none', color: 'inherit' }} className="PlayCard pixel-border">Play<img className="PlayButton" src={play} alt="Story" /></Link>
                ) }
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
