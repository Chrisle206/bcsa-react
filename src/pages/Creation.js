import React from 'react'
import characterImg from '../assets/images/cement-shoes2.png'

export default function Creation() {
    return (
        <div className="pageContainer creationBg">
        <div className="creationContainer">
        <div className="bgContainer">
        <h1 className="creationTitle">Create your character!</h1>
            <img className="characterEmpty" src={characterImg} alt="Empty_character"/>  
        <div className="choicesContainer">
            <p className="question">What coding language do you enjoy most?</p>
            {/* Let's not use buttons to keep the style cool. We can use links and a tags instead. */}
            <div className="attackList">
                        <div className="attackRow">
                            <div>Language 1</div>
                            <div>Language 2</div>
                        </div>
                        <div className="attackRow">
                            <div>Language 3</div>
                            <div>Language 4</div>
                        </div>
                    </div>
        </div>
        </div>
         </div>
        </div>
    )
}