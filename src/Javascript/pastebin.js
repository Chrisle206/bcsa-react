import React, { useState, useRef, useEffect } from 'react'
import { Link } from 'react-router-dom'
import coins from '../assets/images/coins.png'
import track from '../assets/sounds/character.wav'
import characterImg from '../assets/images/cement-shoes2.png'
import back from '../assets/images/back.png'
import speakeron from '../assets/images/speaker-on.png'
import speakeroff from '../assets/images/speaker-off.png'
import getCharacter from '../Javascript/getCharacter.js'


export default function Character() {

    const [charData, setcharData] = useState({
        characterName: "",
    });

    useEffect(() => {
        getCharacter().then(function (result) {
            console.log(result);
            setcharData(result)
            return;
        });
    }, []);

const { characterName, characterClass, currency, def, exp, hp, level, items, atk, image } = charData


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
                            {characterName}'s Stats
                        </h1>
                        <div className='statusbox'>
                            <div className='statbottom'>
                                <h3 className='statfontbig'>Level: {level}</h3>
                                <h3 className='statfontbig'>Available Skillpoints: 4</h3>
                            </div>
                            <img className="characterEmpty2" src={characterImg} alt="Empty_character" />
                            <div className='statcontainer'>
                                <div className='stats'>
                                    <h3 className='statfont'> Health: {hp}</h3>
                                    <button className='plus'>+</button>
                                </div >
                                <div className='stats'>
                                    <h3 className='statfont'>Attack: {atk}</h3>
                                    <button className='plus'>+</button>
                                </div >
                                <div className='stats'>
                                    <h3 className='statfont'> Defense: {def}</h3>
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

                            <div className='shopitem' onClick={currentItem}>Round Pebble
                                <div className='itemdescbox pixel-border'>
                                    <div className='textbox'>
                                        <h4 id='shopitem1'>Round Pebble</h4>
                                        <h4>The roundness of this pebble bids you to pick it up.</h4>
                                        <h4>Defense: +1</h4>
                                        <div className='coinrow'>
                                            <img className="coinshop" src={coins} alt="Coins" />
                                            <div className='row' id='cost'>5</div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className='shopitem' onClick={currentItem}>101 Manatee Jokes
                                <div className='itemdescbox pixel-border'>
                                    <div className='textbox'>
                                        <h4>101 Manatee Jokes</h4>
                                        <h4>You'll be swimming in good times.</h4>
                                        <h4>HP: +1</h4>
                                        <div className='coinrow'>
                                            <img className="coinshop" src={coins} alt="Coins" />
                                            <div className='row'>10</div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className='shopitem' onClick={currentItem}>Bug Squisher
                                <div className='itemdescbox pixel-border'>
                                    <div className='textbox'>
                                        <h4>Bug Squisher</h4>
                                        <h4>This hammer has been deconstructed, making its properties easier to access. This makes it notably harder to kill bugs with, however.</h4>
                                        <h4>Attack: +2</h4>
                                        <div className='coinrow'>
                                            <img className="coinshop" src={coins} alt="Coins" />
                                            <div className='row'>20</div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className='shopitem' onClick={currentItem}>La Croix
                                <div className='itemdescbox pixel-border'>
                                    <div className='textbox'>
                                        <h4>La Croix</h4>
                                        <h4>You don't like the taste but drink it anyways.</h4>
                                        <h4>HP: +5</h4>
                                        <div className='coinrow'>
                                            <img className="coinshop" src={coins} alt="Coins" />
                                            <div className='row'>20</div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className='shopitem' onClick={currentItem}>Shiva's Fang
                                <div className='itemdescbox pixel-border'>
                                    <div className='textbox'>
                                        <h4>Shiva's Fang</h4>
                                        <h4>It smells kind of funny.</h4>
                                        <h4>Atk: +2</h4>
                                        <div className='coinrow'>
                                            <img className="coinshop" src={coins} alt="Coins" />
                                            <div className='row'>20</div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className='shopitem' onClick={currentItem}>Bahamut's Box
                                <div className='itemdescbox pixel-border'>
                                    <div className='textbox'>
                                        <h4>Bahamut's Box</h4>
                                        <h4>The perfect size for a cat.</h4>
                                        <h4>Defense: +1</h4>
                                        <div className='coinrow'>
                                            <img className="coinshop" src={coins} alt="Coins" />
                                            <div className='row'>20</div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className='shopitem' onClick={currentItem}>DOM Map
                                <div className='itemdescbox pixel-border'>
                                    <div className='textbox'>
                                        <h4>Dom Map</h4>
                                        <h4>This should help navigate those nested arrays.</h4>
                                        <h4>Defense: +1</h4>
                                        <div className='coinrow'>
                                            <img className="coinshop" src={coins} alt="Coins" />
                                            <div className='row'>25</div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className='shopitem' onClick={currentItem}>MIT License
                                <div className='itemdescbox pixel-border'>
                                    <div className='textbox'>
                                        <h4>MIT License</h4>
                                        <h4>You're not exactly sure what this does but you feel like you should have it anyways.</h4>
                                        <h4>Defense: +1</h4>
                                        <div className='coinrow'>
                                            <img className="coinshop" src={coins} alt="Coins" />
                                            <div className='row'>30</div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className='shopitem' onClick={currentItem}>UDEMY Course Coupon
                                <div className='itemdescbox pixel-border'>
                                    <div className='textbox'>
                                        <h4>UDEMY Course Coupon</h4>
                                        <h4>You're gonna need this.</h4>
                                        <h4>Defense: +1</h4>
                                        <div className='coinrow'>
                                            <img className="coinshop" src={coins} alt="Coins" />
                                            <div className='row'>35</div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className='shopitem' onClick={currentItem}>Best Practices Handbook
                                <div className='itemdescbox pixel-border'>
                                    <div className='textbox'>
                                        <h4>Best Practices Handbook</h4>
                                        <h4>For all your RESTful needs. Touching it makes you sleepy.</h4>
                                        <h4>Atk: +1</h4>
                                        <div className='coinrow'>
                                            <img className="coinshop" src={coins} alt="Coins" />
                                            <div className='row'>40</div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className='shopitem' onClick={currentItem}>Mongo's Compass
                                <div className='itemdescbox pixel-border'>
                                    <div className='textbox'>
                                        <h4>Mongo's Compass</h4>
                                        <h4>It's a magical compass but it lacks cardinal directions.</h4>
                                        <h4>Defense: +1</h4>
                                        <div className='coinrow'>
                                            <img className="coinshop" src={coins} alt="Coins" />
                                            <div className='row'>45</div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className='shopitem' onClick={currentItem}>Flexbox Froggy
                                <div className='itemdescbox pixel-border'>
                                    <div className='textbox'>
                                        <h4>Flexbox Froggy</h4>
                                        <h4>He looks ready for combat!</h4>
                                        <h4>Atk: +2</h4>
                                        <div className='coinrow'>
                                            <img className="coinshop" src={coins} alt="Coins" />
                                            <div className='row'>50</div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className='shopitem' onClick={currentItem}>Magic Keyboard
                                <div className='itemdescbox pixel-border'>
                                    <div className='textbox'>
                                        <h4>Magic Keyboard</h4>
                                        <h4>Rainbow keys! Cool!</h4>
                                        <h4>Atk: +3</h4>
                                        <div className='coinrow'>
                                            <img className="coinshop" src={coins} alt="Coins" />
                                            <div className='row'>100</div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className='shopitem' onClick={currentItem}>Callback Quiver
                                <div className='itemdescbox pixel-border'>
                                    <div className='textbox'>
                                        <h4>Callback Quiver</h4>
                                        <h4>Filled with arrow functions.</h4>
                                        <h4>Atk: +3</h4>
                                        <div className='coinrow'>
                                            <img className="coinshop" src={coins} alt="Coins" />
                                            <div className='row'>100</div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className='shopitem' onClick={currentItem}>Orb of OOP
                                <div className='itemdescbox pixel-border'>
                                    <div className='textbox'>
                                        <h4>Orb of OOP</h4>
                                        <h4>The orb bids you near, promising paradigm-shifting advantages. But it seems a bit obtuse.</h4>
                                        <h4>Atk: +3</h4>
                                        <div className='coinrow'>
                                            <img className="coinshop" src={coins} alt="Coins" />
                                            <div className='row'>100</div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className='shopitem' onClick={currentItem}>Wand of Recursion
                                <div className='itemdescbox pixel-border'>
                                    <div className='textbox'>
                                        <h4>Wand of Recursion</h4>
                                        <h4>Great at creating loops, but dangerous in untrained hands.</h4>
                                        <h4>Atk: +3</h4>
                                        <div className='coinrow'>
                                            <img className="coinshop" src={coins} alt="Coins" />
                                            <div className='row'>100</div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className='shopitem' onClick={currentItem}>Bootstrap Dagger
                                <div className='itemdescbox pixel-border'>
                                    <div className='textbox'>
                                        <h4>Bootstrap Dagger</h4>
                                        <h4>Simple and convenient.</h4>
                                        <h4>Atk: +3</h4>
                                        <div className='coinrow'>
                                            <img className="coinshop" src={coins} alt="Coins" />
                                            <div className='row'>100</div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className='shopitem' onClick={currentItem}>Ring of Regex
                                <div className='itemdescbox pixel-border'>
                                    <div className='textbox'>
                                        <h4>Ring of Regex</h4>
                                        <h4>This ring is hideous.</h4>
                                        <h4>HP: +10</h4>
                                        <div className='coinrow'>
                                            <img className="coinshop" src={coins} alt="Coins" />
                                            <div className='row'>100</div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className='shopitem' onClick={currentItem}>Paradigm-Padded Armor
                                <div className='itemdescbox pixel-border'>
                                    <div className='textbox'>
                                        <h4>Paradigm-Padded Armor</h4>
                                        <h4>This should offer ideal protection from all edge-cases. But it probably doesn't.</h4>
                                        <h4>Def: +3</h4>
                                        <div className='coinrow'>
                                            <img className="coinshop" src={coins} alt="Coins" />
                                            <div className='row'>100</div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className='shopitem' onClick={currentItem}>Excalidraw
                                <div className='itemdescbox pixel-border'>
                                    <div className='textbox'>
                                        <h4>Excalidraw</h4>
                                        <h4>This sword is easy to use but is lacking in extra features.</h4>
                                        <h4>Atk: +4</h4>
                                        <div className='coinrow'>
                                            <img className="coinshop" src={coins} alt="Coins" />
                                            <div className='row'>150</div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className='shopitem' onClick={currentItem}>Nodemon Dagger
                                <div className='itemdescbox pixel-border'>
                                    <div className='textbox'>
                                        <h4>Nodemon Dagger</h4>
                                        <h4>Ideal for fighting demons and document changes.</h4>
                                        <h4>Atk: +4</h4>
                                        <div className='coinrow'>
                                            <img className="coinshop" src={coins} alt="Coins" />
                                            <div className='row'>150</div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className='shopitem' onClick={currentItem}>HashSync Shield
                                <div className='itemdescbox pixel-border'>
                                    <div className='textbox'>
                                        <h4>HashSync Shield</h4>
                                        <h4>Offers ideal protection against hackers. It is covered in salt.</h4>
                                        <h4>Def: +3</h4>
                                        <div className='coinrow'>
                                            <img className="coinshop" src={coins} alt="Coins" />
                                            <div className='row'>150</div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className='shopitem' onClick={currentItem}>Arcane Config
                                <div className='itemdescbox pixel-border'>
                                    <div className='textbox'>
                                        <h4>Arcane Config</h4>
                                        <h4>It is beyond your comprehension. Luckily, it works anyways.</h4>
                                        <h4>Atk: +4</h4>
                                        <div className='coinrow'>
                                            <img className="coinshop" src={coins} alt="Coins" />
                                            <div className='row'>150</div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className='shopitem' onClick={currentItem}>API Skeleton Key
                                <div className='itemdescbox pixel-border'>
                                    <div className='textbox'>
                                        <h4>API Skeleton Key</h4>
                                        <h4>Instant access to any API, ever. Wow!</h4>
                                        <h4>Atk: +4, Def: +2</h4>
                                        <div className='coinrow'>
                                            <img className="coinshop" src={coins} alt="Coins" />
                                            <div className='row'>200</div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className='shopitem' onClick={currentItem}>Ronnel's Memoir
                                <div className='itemdescbox pixel-border'>
                                    <div className='textbox'>
                                        <h4>Ronnel's Memoir</h4>
                                        <h4>This powerful artifact contains memories of projects past. It is stained with tears.</h4>
                                        <h4>Atk: +4, Def: +4, HP: +20</h4>
                                        <div className='coinrow'>
                                            <img className="coinshop" src={coins} alt="Coins" />
                                            <div className='row'>200</div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className='shopitem' onClick={currentItem}>Brett's Skis
                                <div className='itemdescbox pixel-border'>
                                    <div className='textbox'>
                                        <h4>Brett's Skis</h4>
                                        <h4>They are second-hand but still in good shape.</h4>
                                        <h4>Def: +3</h4>
                                        <div className='coinrow'>
                                            <img className="coinshop" src={coins} alt="Coins" />
                                            <div className='row'>250</div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className='shopitem' onClick={currentItem}>Louis' Sunglasses
                                <div className='itemdescbox pixel-border'>
                                    <div className='textbox'>
                                        <h4>Louis' Sunglasses</h4>
                                        <h4>Only the coolest of cats can equip these bad-boys.</h4>
                                        <h4>HP: +30</h4>
                                        <div className='coinrow'>
                                            <img className="coinshop" src={coins} alt="Coins" />
                                            <div className='row'>250</div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className='shopitem' onClick={currentItem}>Sword of Sequelize
                                <div className='itemdescbox pixel-border'>
                                    <div className='textbox'>
                                        <h4>Sword of Sequelize</h4>
                                        <h4>Requires a lot of setup to use but well worth it.</h4>
                                        <h4>Atk: +6</h4>
                                        <div className='coinrow'>
                                            <img className="coinshop" src={coins} alt="Coins" />
                                            <div className='row'>350</div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className='shopitem' onClick={currentItem}>Hu-Mongo Mallet
                                <div className='itemdescbox pixel-border'>
                                    <div className='textbox'>
                                        <h4>Hu-Mongo Mallet</h4>
                                        <h4>It's easy to use. Smack! But pretty heavy.</h4>
                                        <h4>Atk: +6</h4>
                                        <div className='coinrow'>
                                            <img className="coinshop" src={coins} alt="Coins" />
                                            <div className='row'>350</div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className='shopitem' onClick={currentItem}>Tutor In-A-Bottle
                                <div className='itemdescbox pixel-border'>
                                    <div className='textbox'>
                                        <h4>Tutor In-A-Bottle</h4>
                                        <h4>TThis tiny tutor will bend to your whim and logic, no matter how flawed.</h4>
                                        <h4>HP: +50</h4>
                                        <div className='coinrow'>
                                            <img className="coinshop" src={coins} alt="Coins" />
                                            <div className='row'>500</div>
                                        </div>
                                    </div>
                                </div>
                            </div>
    

                        </div>
                        <div className='shopbottom'>
                            <div className='coinrow'>
                                <img className="coinshop" src={coins} alt="Coins" />
                                <div className='row'>{currCoins}</div>
                            </div>
                            {/* If click on unbought item the the button is Buy, if clicked on bought item then the button is equip */}
                            <div className='buyequip' onClick={addItem}>Buy</div>
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