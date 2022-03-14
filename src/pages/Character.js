import React, { useState, useRef } from 'react'
import { Link } from 'react-router-dom'
import coins from '../assets/images/coins.png'
import track from '../assets/sounds/character.wav'
import characterImg from '../assets/images/cement-shoes2.png'
import back from '../assets/images/back.png'
import speakeron from '../assets/images/speaker-on.png'
import speakeroff from '../assets/images/speaker-off.png'
import bloodysword from '../assets/images/bloody-sword.png'
import rosashield from '../assets/images/rosa-shield.png'
import crossbow from '../assets/images/crossbow.png'
import up from '../assets/images/hp.png'
import flask from '../assets/images/flask.png'
import portal from '../assets/images/portal.png'
import arrow from '../assets/images/arrow.png'
import smith from '../assets/images/smith.png'
import staff from '../assets/images/staff.png'
import syringe from '../assets/images/syringe.png'

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
    ///////////////////////////////////////////////////////////////////////////////////
    const arr = [];
    let stat = [0,0,0,0];
    let shopItem = '';
    let itemCost = '';
    let obj = {};
    const [currCoins, setCurrCoins] = useState(500);
    

    function addItem() {
        if(parseInt(obj.itemCost) < currCoins) {
            arr.push(obj.shopItem);
            setCurrCoins(currCoins-obj.itemCost);
        }
        console.log(arr);
        console.log(stat);

    }
    function currentItem() {
        let element = document.getElementById('shopitem1');
        let element2 = document.getElementById('cost');
        shopItem = element.textContent;
        itemCost = element2.textContent;
        obj = {shopItem, itemCost};
    }
    ///////////////////////////////////////////////////////////////////////////////////

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
                                    <button className='plus'><img className="up" src={up} alt="up" /></button>
                                </div >
                                <div className='stats'>
                                    <h3 className='statfont'>Attack: 50</h3>
                                    <button className='plus'><img className="up" src={up} alt="up" /></button>
                                </div >
                                <div className='stats'>
                                    <h3 className='statfont'> Defense: 60</h3>
                                    <button className='plus'><img className="up" src={up} alt="up" /></button>
                                </div >
                            </div>
                        </div>
                    </div>
                    <div className='charBox pixel-border'>
                        <h1 className='boxtitle'>
                            Shop
                        </h1>
                        <div className='shoprow'>

                            <button className='shopitem' onClick={currentItem}><img className="itemimg" src={bloodysword} alt="Sword" />
                                <div className='itemdescbox pixel-border'>
                                    <div className='textbox'>
                                        <h4 id='shopitem1'>Sword</h4>
                                        <h4>You're not exactly sure what this does but you feel like you should have it anyways.</h4>
                                        <h4>Defense: +1</h4>
                                        <div className='coinrow'>
                                            <img className="coinshop" src={coins} alt="Coins" />
                                            <div className='row' id='cost'>20</div>
                                        </div>
                                    </div>
                                </div>
                            </button>
                            <button className='shopitem' onClick={currentItem}><img className="itemimg" src={rosashield} alt="Shield" />
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
                            </button>
                            <button className='shopitem' onClick={currentItem}><img className="itemimg" src={crossbow} alt="Crossbow" />
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
                            </button>
                            <button className='shopitem' onClick={currentItem}><img className="itemimg" src={syringe} alt="syringe" />
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
                            </button>
                            <button className='shopitem' onClick={currentItem}><img className="itemimg" src={flask} alt="Flask" />
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
                            </button>
                            <button className='shopitem' onClick={currentItem}><img className="itemimg" src={portal} alt="Portal" />
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
                            </button>
                            <button className='shopitem' onClick={currentItem}><img className="itemimg" src={arrow} alt="Arrow" />
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
                            </button>
                            <button className='shopitem' onClick={currentItem}><img className="itemimg" src={smith} alt="Smith" />
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
                            </button>
                            <button className='shopitem' onClick={currentItem}><img className="itemimg" src={staff} alt="Staff" />
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
                            </button>
                        </div>
                        <div className='shopbottom'>
                            <div className='coinrow'>
                                <img className="coinshop" src={coins} alt="Coins" />
                                <div className='row'>{currCoins}</div>
                            </div>
                            <button className='buyequip' onClick={addItem}>Buy</button>
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