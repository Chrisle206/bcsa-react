import React from 'react'
import '../App.css'
import play from '../assets/images/play-button.png'
import back from '../assets/images/back.png'
import speakeron from '../assets/images/speaker-on.png'
import speakeroff from '../assets/images/speaker-off.png'


export default function Introduction() {
    return (
        <div className="pageContainer creationBg">
            <div className="mainStartContainer mainIntroContainer">
                <div className="topNavContainer">
                    <button className="backbutton"><img className='backbuttonimg'src={back} alt="Back_Button" /> Back</button>                    
                </div>
                <div className="widthContainer">
                    <h1 className="TavernTitle">Long ago...</h1>
                    <div className='description'>
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut dapibus in erat eu vestibulum. Donec id arcu erat. Nulla viverra semper arcu, tincidunt sodales lorem vestibulum id. Sed fringilla tincidunt mollis. Suspendisse quis metus facilisis, ultricies orci ac, fringilla eros. Aliquam aliquam lectus felis, vehicula sollicitudin nisi consectetur sed. Pellentesque dui tortor, faucibus id leo vel, blandit aliquet nibh.
                    </div>
                    <div className="TavernMenuContainer">
                        <div className="PlayCard pixel-border">Continue<img className="PlayButton" src={play} alt="Story" /></div>

                    </div>
                </div>
                <div className="bottomNavContainer">
                    <button className="backbutton"><img className='soundbuttonimg'src={speakeron} alt="speaker" /></button>                    
                </div>
            </div>
        </div>
    )
}
