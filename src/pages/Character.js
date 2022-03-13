import React, { useState, useRef } from 'react'
import { Link } from 'react-router-dom'
import coins from '../assets/images/coins.png'
import track from '../assets/sounds/character.wav'
import characterImg from '../assets/images/cement-shoes2.png'
import back from '../assets/images/back.png'
import speakeron from '../assets/images/speaker-on.png'
import speakeroff from '../assets/images/speaker-off.png'

export default function Character() {

    const [speaker, setStatus] = useState(false)
    const audioRef = useRef()

    function volOff() {
        if (useState !== false) {
            audioRef.current.pause()
            console.log('muting')
            setStatus(true)
        }
    }

    function volOn() {
        if (useState !== true) {
            audioRef.current.play()
            console.log('unmuting')
            setStatus(false)
        }
    }

    return (
        <div className="pageContainer creationBg">
            <div className="mainCharContainer">
                <div className="topNavContainer">
                    <Link to={'/Tavern'} style={{textDecoration: 'none', color: 'white'}} className="backbutton"><img className='backbuttonimg' src={back} alt="Back_Button" /> Back</Link>
                </div>
                <div className="widthChar2Container">
                    <div className='charBox pixel-border'>

                        <h1 className='boxtitle'>
                            Name's Stats
                        </h1>
                        <div className='statusbox'>
                            <div className='statbottom'>
                                <h3 className='statfontbig'>Level: 5</h3>
                                <h3 className='statfontbig'>Available Skillpoints: 4</h3>
                            </div>
                            <img className="characterEmpty2" src={characterImg} alt="Empty_character" />
                            <div className='statcontainer'>
                                <div className='stats'>
                                    <h3 className='statfont'> Health: 100</h3>
                                    <button className='plus'>+</button>
                                </div >
                                <div className='stats'>
                                    <h3 className='statfont'>Attack: 50</h3>
                                    <button className='plus'>+</button>
                                </div >
                                <div className='stats'>
                                    <h3 className='statfont'> Defense: 60</h3>
                                    <button className='plus'>+</button>
                                </div >
                            </div>
                        </div>

                    </div>
                    <div className='charBox pixel-border'>
                        <h1 className='boxtitle'>
                            Shop
                        </h1>
                        <div className='shoprow'>

                            <div className='shopitem'>Item 1
                                <div className='itemdescbox pixel-border'>
                                    <div className='textbox'>
                                        <h4>MIT License</h4>
                                        <h4>You're not exactly sure what this does but you feel like you should have it anyways.</h4>
                                        <h4>Defense: +1</h4>
                                        <div className='coinrow'>
                                            <img className="coinshop" src={coins} alt="Coins" />
                                            <div className='row'>20</div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className='shopitem'>Item 2
                                <div className='itemdescbox pixel-border'>
                                    <div className='textbox'>
                                        <h4>MIT License</h4>
                                        <h4>You're not exactly sure what this does but you feel like you should have it anyways.</h4>
                                        <h4>Defense: +1</h4>
                                        <div className='coinrow'>
                                            <img className="coinshop" src={coins} alt="Coins" />
                                            <div className='row'>20</div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className='shopitem'>Item 3
                                <div className='itemdescbox pixel-border'>
                                    <div className='textbox'>
                                        <h4>MIT License</h4>
                                        <h4>You're not exactly sure what this does but you feel like you should have it anyways.</h4>
                                        <h4>Defense: +1</h4>
                                        <div className='coinrow'>
                                            <img className="coinshop" src={coins} alt="Coins" />
                                            <div className='row'>20</div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className='shopitem'>Item 4
                                <div className='itemdescbox pixel-border'>
                                    <div className='textbox'>
                                        <h4>MIT License</h4>
                                        <h4>You're not exactly sure what this does but you feel like you should have it anyways.</h4>
                                        <h4>Defense: +1</h4>
                                        <div className='coinrow'>
                                            <img className="coinshop" src={coins} alt="Coins" />
                                            <div className='row'>20</div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className='shopitem'>Item 5
                                <div className='itemdescbox pixel-border'>
                                    <div className='textbox'>
                                        <h4>MIT License</h4>
                                        <h4>You're not exactly sure what this does but you feel like you should have it anyways.</h4>
                                        <h4>Defense: +1</h4>
                                        <div className='coinrow'>
                                            <img className="coinshop" src={coins} alt="Coins" />
                                            <div className='row'>20</div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className='shopitem'>Item 6
                                <div className='itemdescbox pixel-border'>
                                    <div className='textbox'>
                                        <h4>MIT License</h4>
                                        <h4>You're not exactly sure what this does but you feel like you should have it anyways.</h4>
                                        <h4>Defense: +1</h4>
                                        <div className='coinrow'>
                                            <img className="coinshop" src={coins} alt="Coins" />
                                            <div className='row'>20</div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className='shopitem'>Item 7
                                <div className='itemdescbox pixel-border'>
                                    <div className='textbox'>
                                        <h4>MIT License</h4>
                                        <h4>You're not exactly sure what this does but you feel like you should have it anyways.</h4>
                                        <h4>Defense: +1</h4>
                                        <div className='coinrow'>
                                            <img className="coinshop" src={coins} alt="Coins" />
                                            <div className='row'>20</div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className='shopitem'>Item 8
                                <div className='itemdescbox pixel-border'>
                                    <div className='textbox'>
                                        <h4>MIT License</h4>
                                        <h4>You're not exactly sure what this does but you feel like you should have it anyways.</h4>
                                        <h4>Defense: +1</h4>
                                        <div className='coinrow'>
                                            <img className="coinshop" src={coins} alt="Coins" />
                                            <div className='row'>20</div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className='shopitem'>Item 9
                                <div className='itemdescbox pixel-border'>
                                    <div className='textbox'>
                                        <h4>MIT License</h4>
                                        <h4>You're not exactly sure what this does but you feel like you should have it anyways.</h4>
                                        <h4>Defense: +1</h4>
                                        <div className='coinrow'>
                                            <img className="coinshop" src={coins} alt="Coins" />
                                            <div className='row'>20</div>
                                        </div>
                                    </div>
                                </div>
                            </div>
    

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
                <div className="bottomNavContainer">
                <>
                        <audio autoPlay loop ref={audioRef} src={track}/>
                        {speaker ? (
                                <button onClick={volOn} className="backbutton"><img className='soundbuttonimg'src={speakeroff} alt="speaker" /></button>                    
                            ) : (
                                <>
                                <button onClick={volOff} className="backbutton"><img className='soundbuttonimg'src={speakeron} alt="speaker" /></button> 
                                </>
                        )}                   
                    </> 
                </div>
            </div>
        </div>
    )
}