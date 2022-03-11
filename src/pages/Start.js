import React from 'react'
import '../App.css'
import play from '../assets/images/play-button.png'
import wingedsword from '../assets/images/winged-sword.png'
import back from '../assets/images/back.png'
import speakeron from '../assets/images/speaker-on.png'
import speakeroff from '../assets/images/speaker-off.png'


export default function Start() {
    document.title = 'BCS Adventures';
    return (
        <div className="pageContainer creationBg">
            <div className="mainStartContainer">
                <div className="topNavContainer">
                    <button className="backbutton"><img className='backbuttonimg'src={back} alt="Back_Button" /> Back</button>                    
                    <h3 className="logContainer"> <button className='logbutton pixel-border'>Login</button> <button className='logbutton pixel-border'>Signup</button></h3>
                </div>
                <div className="widthContainer">
                    <h1 className="TavernTitle">BCS Adventures<img className="wingedsword" src={wingedsword} alt="Sword" /></h1>
                    <div className='description'>
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut dapibus in erat eu vestibulum. Donec id arcu erat. Nulla viverra semper arcu, tincidunt sodales lorem vestibulum id. Sed fringilla tincidunt mollis. Suspendisse quis metus facilisis, ultricies orci ac, fringilla eros. Aliquam aliquam lectus felis, vehicula sollicitudin nisi consectetur sed. Pellentesque dui tortor, faucibus id leo vel, blandit aliquet nibh.
                    </div>
                    <div className="TavernMenuContainer">
                        <button className="PlayCard pixel-border">Play<img className="PlayButton" src={play} alt="Story" /></button>

                    </div>
                </div>
                <div className="bottomNavContainer">
                    <button className="backbutton"><img className='soundbuttonimg'src={speakeron} alt="speaker" /></button>                    
                </div>
            </div>
        </div>
    )
}
