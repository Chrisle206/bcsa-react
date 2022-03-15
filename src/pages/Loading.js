import React from 'react'
import assassin from '../assets/images/characters/assassin.png'
import ranger from '../assets/images/characters/ranger.png'
import routeMaster from '../assets/images/characters/routeMaster.png'
export default function Loading() {
    return (
        <div className="pageContainer creationBg">
            <div className='rotate'>Rotate to play</div>
            <h1 className='loading'>...Loading
            <img src={assassin} className="loadingchar1 bounce-7"></img>
            <img src={ranger} className="loadingchar2 bounce-7"></img>
            <img src={routeMaster} className="loadingchar3 bounce-7"></img>
            </h1>
        </div>
    )
}