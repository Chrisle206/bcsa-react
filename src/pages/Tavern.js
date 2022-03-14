import React, { useState, useRef } from 'react'
import { Link } from 'react-router-dom'
import '../App.css'
import track from '../assets/sounds/tavern.wav'
import speakeron from '../assets/images/speaker-on.png'
import speakeroff from '../assets/images/speaker-off.png'
import coins from '../assets/images/coins.png'
import book from '../assets/images/spell-book-white.png'
import charIcon from '../assets/images/mona-lisa-white.png'
import cage from '../assets/images/cage-white.png'
import beer from '../assets/images/beer-stein-white.png'


export default function Tavern() {

    const [speaker, setStatus] = useState(false)
    const audioRef = useRef()
    const [token, setToken] = useState(localStorage.getItem("token"));
    // const token = localStorage.getItem("token");


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

    //Logout should redirect to Start page
    const logout = () =>{
        localStorage.removeItem("token");
        setToken("");
        document.location.replace('/');
    }
    

    return (
        
        <div className="pageContainer creationBg">
            <div className="mainContainer">
            <div className="topNavContainer">
                <button className="logbutton"onClick={logout}>Logout</button>                   
                    <h3 className="coinContainer"> <img className="coinImg" src={coins} alt="Coins" /> 200</h3>
                </div>
                <div className="widthContainer">
                    <h1 className="TavernTitle">Tavern<img className="TavernBeer" src={beer} alt="Beer" /></h1>
                    <div className="TavernMenuContainer">
                        <Link to={'/character'} style={{textDecoration: 'none', color: 'inherit'}} className="TavernMenuCard pixel-border charCard"><img className="TavernMenuItem" src={charIcon} alt="Character" />Character <h2 className="chardesc">View your character, update your stats, and shop for items.</h2></Link>
                        <Link to={'/Introduction'} style={{textDecoration: 'none', color: 'inherit'}} className="TavernMenuCard pixel-border storyCard"><img className="TavernMenuItem" src={book} alt="Story" />Story <h2 className='storydesc'>Take on a gauntlet of bosses and try to reach the end!</h2></Link>
                        <div className="TavernMenuCard pixel-border dungeonCard"><img className="TavernMenuItem" src={cage} alt="Dungeon" />Dungeon <h2 className='dungeondesc'>Face random enemies and grind for currency and exp!</h2></div>
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
