import React from 'react'
import assassin from '../assets/images/characters/assassin.png'
import ranger from '../assets/images/characters/ranger.png'
import routeMaster from '../assets/images/characters/routeMaster.png'
export default function Loading() {
    return (
        <div className="pageContainer creationBg">
            <h1 className='loading'>...Loading
            <img src={assassin} className="characterEmpty"></img>
            <img src={ranger} className="characterEmpty"></img>
            <img src={routeMaster} className="characterEmpty"></img>
            </h1>
        </div>
    )
}