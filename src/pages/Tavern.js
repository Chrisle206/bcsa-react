import React from 'react'
import '../App.css'
import back from '../assets/images/back.png'
import speakeron from '../assets/images/speaker-on.png'
import coins from '../assets/images/coins.png'
import book from '../assets/images/spell-book-white.png'
import charIcon from '../assets/images/mona-lisa-white.png'
import cage from '../assets/images/cage-white.png'
import beer from '../assets/images/beer-stein-white.png'


export default function Tavern() {
    return (
        <div className="pageContainer creationBg">
            <div className="mainContainer">
            <div className="topNavContainer">
                    <button className="backbutton"><img className='backbuttonimg'src={back} alt="Back_Button" /> Back</button>                    
                    <h3 className="coinContainer"> <img className="coinImg" src={coins} alt="Coins" /> 200</h3>
                </div>
                <div className="widthContainer">
                    <h1 className="TavernTitle">Tavern<img className="TavernBeer" src={beer} alt="Beer" /></h1>
                    <div className="TavernMenuContainer">
                        <div className="TavernMenuCard pixel-border"><img className="TavernMenuItem" src={charIcon} alt="Character" />Character</div>
                        <div className="TavernMenuCard pixel-border"><img className="TavernMenuItem" src={book} alt="Story" />Story</div>
                        <div className="TavernMenuCard pixel-border"><img className="TavernMenuItem" src={cage} alt="Dungeon" />Dungeon</div>
                    </div>
                </div>
                <div className="bottomNavContainer">
                    <button className="backbutton"><img className='soundbuttonimg'src={speakeron} alt="speaker" /></button>                    
                </div>
            </div>
            
        </div>
    )
}