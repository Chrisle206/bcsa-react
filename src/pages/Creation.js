import React from 'react'
import bg from '../assets/images/ebbg2.gif'
import characterImg from '../assets/images/cement-shoes2.png'

export default function Creation() {
    return (
        <div className="pageContainer creationBg">
        <div className="creationContainer">
        <div className="bgContainer">
        <h1 className="creationTitle">Create your character!</h1>
            <img className="characterBg" src={bg} alt="Moving_Background"/>
            <img className="characterEmpty" src={characterImg} alt="Empty_character"/>  
        <div className="choicesContainer">
            <p className="question">What coding language do you enjoy most?</p>
            {/* Let's not use buttons to keep the style cool. We can use links and a tags instead. */}
            <li>Option 1</li>
            <li>Option 2</li>
            <li>Option 3</li>
            <li>Option 4</li>
        </div>
        <div className="coverBlackBar"></div>
        </div>
         </div>
        </div>
    )
}