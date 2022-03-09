import React from 'react'
import characterImg from '../assets/images/cement-shoes2.png'

export default function Creation() {
    return (
        <div className="pageContainer creationBg">
        <div className="creationContainer">
        <div className="bgContainer">
        <h1 className="creationTitle">Create your character!</h1>
            <img className="characterEmpty" src={characterImg} alt="Empty_character"/>  
        <div className="choicesContainer pixel-border">
            <p className="question">What coding language do you enjoy most?</p>
            {/* Let's not use buttons to keep the style cool. We can use links and a tags instead. */}
            <div className="attackList">
                        <div className="attackRow1">
                            <button className="attack">Language 1</button>
                            <button className="attack">Language 2</button>
                        </div>
                        <div className="attackRow2">
                            <button className="attack">Language 3</button>
                            <button className="attack">Language 4</button>
                        </div>
                    </div>
        </div>
        </div>
         </div>
        </div>
    )
}