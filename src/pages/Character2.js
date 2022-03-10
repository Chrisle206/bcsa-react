import React from 'react'
import coins from '../assets/images/coins.png'
import characterImg from '../assets/images/cement-shoes2.png'

export default function Character() {
    return (
        <div className="pageContainer creationBg">
            <div className="mainCharContainer">
                <div className="widthCharContainer">
                        <div className='charBox pixel-border'>
                            <h1 className='boxtitle'>
                                [Name]'s Character
                            </h1>
                            <img className="characterEmpty" src={characterImg} alt="Empty_character" />
                            <div className='statbottom'>Level: 5</div>
                        </div>
                        <div className='charBox pixel-border'>
                            <h1 className='boxtitle'>
                                Statistics
                            </h1>
                            <div className='statusbox'>
                                <div className='stats'>
                                   <h3>Attack: 50</h3> 
                                    <button className='plus'>+</button>
                                </div >
                                <div className='stats'>
                                    <h3> Health: 100</h3>
                                    <button className='plus'>+</button>
                                </div >
                                <div className='stats'>
                                <h3> Defense: 60</h3>
                                    <button className='plus'>+</button>
                                </div >
                                <div className='stats'>
                                <h3> Special: 40</h3>
                                    <button className='plus'>+</button>
                                </div >
                            </div>
                            <div className='statbottom'>
                                Available Skillpoints: 4
                            </div>
                        </div>
                        <div className='charBox pixel-border'>
                            <h1 className='boxtitle'>
                                Shop
                            </h1>
                            <div className='shoprow'>
                                <div className='shopitem'>Item 1</div>
                                <div className='shopitem'>Item 2</div>
                                <div className='shopitem'>Item 3</div>
                                <div className='shopitem'>Item 4</div>
                                <div className='shopitem'>Item 5</div>
                                <div className='shopitem'>Item 6</div>
                                <div className='shopitem'>Item 7</div>
                                <div className='shopitem'>Item 8</div>
                                <div className='shopitem'>Item 9</div>
                                <div className='shopitem'>Item 10</div>
                                <div className='shopitem'>Item 11</div>
                                <div className='shopitem'>Item 12</div>
                                <div className='shopitem'>Item 13</div>
                                <div className='shopitem'>Item 14</div>
                                <div className='shopitem'>Item 15</div>
                            </div>
                            <div className='shopbottom'>
                                <div className='coinrow'>
                                    <img className="coinshop" src={coins} alt="Coins" />
                                    <div className='row'>200</div>
                                </div>
                                {/* If click on unbought item the the button is Buy, if clicked on bought item then the button is equip */}
                                <div className='buyequip'>Buy</div>
                            </div>
                        </div>
                    
                </div>
            </div>
        </div>
    )
}