import React from 'react'
import '../App.css'
import play from '../assets/images/play-button.png'
import wingedsword from '../assets/images/winged-sword.png'


export default function Start() {
    return (
        <div className="pageContainer creationBg">
        <div className="mainStartContainer">
        <div className="widthContainer">
        <h3 className="logContainer"> <button>Login</button> <button>Signup</button></h3>
        <h1 className="TavernTitle">BCS Adventures<img className="wingedsword" src={wingedsword} alt="Sword"/></h1>
        <div className='description'>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut dapibus in erat eu vestibulum. Donec id arcu erat. Nulla viverra semper arcu, tincidunt sodales lorem vestibulum id. Sed fringilla tincidunt mollis. Suspendisse quis metus facilisis, ultricies orci ac, fringilla eros. Aliquam aliquam lectus felis, vehicula sollicitudin nisi consectetur sed. Pellentesque dui tortor, faucibus id leo vel, blandit aliquet nibh.
            </div>
        <div className="TavernMenuContainer">    
            <div className="PlayCard">Play<img className="PlayButton" src={play} alt="Story"/></div>
 
        </div>        
        </div>
        </div>
        </div>
    )
}
