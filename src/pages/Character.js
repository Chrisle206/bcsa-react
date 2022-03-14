import React, { useState, useRef, useEffect } from 'react'
import { Link } from 'react-router-dom'
import coins from '../assets/images/coins.png'
import track from '../assets/sounds/character.wav'
import characterImg from '../assets/images/cement-shoes2.png'
import back from '../assets/images/back.png'
import speakeron from '../assets/images/speaker-on.png'
import speakeroff from '../assets/images/speaker-off.png'
import getCharacter from '../Javascript/getCharacter.js'
/////////////////
import bloodysword from '../assets/images/bloody-sword.png'
import shield from '../assets/images/rosa-shield.png'
import diploma from '../assets/images/diploma.png'
import up from '../assets/images/hp.png'
import flask from '../assets/images/flask.png'
// import portal from '../assets/images/portal.png'
// import arrow from '../assets/images/arrow.png'
import scroll2 from '../assets/images/scroll2.png'
// import staff from '../assets/images/staff.png'
// import syringe from '../assets/images/syringe.png'
import bug from '../assets/images/bug.png'
import box from '../assets/images/box.png'
import keyboard from '../assets/images/keyboard.png'
import frog from '../assets/images/frog.png'
import quiver from '../assets/images/quiver.png'
import compass from '../assets/images/compass.png'
import orb from '../assets/images/orb.png'
import wand from '../assets/images/wand.png'
import dagger from '../assets/images/dagger.png'
import ring from '../assets/images/ring.png'
import armor from '../assets/images/armor.png'
import pen from '../assets/images/pen.png'
import dagger2 from '../assets/images/dagger2.png'
import cog from '../assets/images/cog.png'
import key from '../assets/images/key.png'
import book from '../assets/images/book.png'
import skis from '../assets/images/skis.png'
import sunglasses from '../assets/images/sunglasses.png'
import mallet from '../assets/images/mallet.png'
import bottle from '../assets/images/bottle.png'
import rock from '../assets/images/rock.png'
import scroll from '../assets/images/scroll.png'
import fangs from '../assets/images/fangs.png'
import soda from '../assets/images/soda.png'
import map from '../assets/images/map.png'
import book2 from '../assets/images/book2.png'

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
    /////////////////////////////////////////////////////////////////////////////////// SHOP LOGIC
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
                                    <button className='plus'><img className="up" src={up} alt="up" /></button>
                                </div >
                                <div className='stats'>
                                    <h3 className='statfont'>Attack: {atk}</h3>
                                    <button className='plus'><img className="up" src={up} alt="up" /></button>
                                </div >
                                <div className='stats'>
                                    <h3 className='statfont'> Defense: {def}</h3>
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
                            <button className='shopitem' onClick={currentItem}><img className="itemimg" src={flask} alt="Flask" />
                                <div className='itemdescbox pixel-border'>
                                    <div className='textbox'>
                                        <h4>Potion of Postponement</h4>
                                        <h4>The label says "For emergency deadline extensions only." It seems to be sealed with a magic riddle.</h4>
                                        <h4>Unlock Heal option!</h4>
                                        <div className='coinrow'>
                                            <img className="coinshop" src={coins} alt="Coins" />
                                            <div className='row'>50</div>
                                        </div>
                                    </div>
                                </div>
                            </button>
                            {/* <button className='shopitem' onClick={currentItem}><img className="itemimg" src={rock} alt="rock" />
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
                            </button> */}
                            <button className='shopitem' onClick={currentItem}><img className="itemimg" src={scroll} alt="scroll" />
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
                            </button>
                            <button className='shopitem' onClick={currentItem}><img className="itemimg" src={bug} alt="bug" />
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
                            </button>
                            <button className='shopitem' onClick={currentItem}><img className="itemimg" src={soda} alt="soda" />
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
                            </button>
                            <button className='shopitem' onClick={currentItem}><img className="itemimg" src={fangs} alt="fangs" />
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
                            </button>
                            <button className='shopitem' onClick={currentItem}><img className="itemimg" src={box} alt="box" />
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
                            </button>
                            <button className='shopitem' onClick={currentItem}><img className="itemimg" src={map} alt="map" />
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
                            </button>
                            <button className='shopitem' onClick={currentItem}><img className="itemimg" src={diploma} alt="diploma" />
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
                            </button>
                            <button className='shopitem' onClick={currentItem}><img className="itemimg" src={scroll2} alt="scroll2" />
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
                            </button>
                            <button className='shopitem' onClick={currentItem}><img className="itemimg" src={book2} alt="book2" />
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
                            </button>
                            <button className='shopitem' onClick={currentItem}><img className="itemimg" src={compass} alt="compass" />
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
                            </button>
                            <button className='shopitem' onClick={currentItem}><img className="itemimg" src={frog} alt="frog" />
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
                            </button>
                            <button className='shopitem' onClick={currentItem}><img className="itemimg" src={keyboard} alt="keyboard" />
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
                            </button>
                            <button className='shopitem' onClick={currentItem}><img className="itemimg" src={quiver} alt="quiver" />
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
                            </button>
                            <button className='shopitem' onClick={currentItem}><img className="itemimg" src={orb} alt="orb" />
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
                            </button>
                            <button className='shopitem' onClick={currentItem}><img className="itemimg" src={wand} alt="wand" />
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
                            </button>
                            <button className='shopitem' onClick={currentItem}><img className="itemimg" src={dagger} alt="dagger" />
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
                            </button>
                            <button className='shopitem' onClick={currentItem}><img className="itemimg" src={ring} alt="ring" />
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
                            </button>
                            <button className='shopitem' onClick={currentItem}><img className="itemimg" src={armor} alt="armor" />
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
                            </button>
                            <button className='shopitem' onClick={currentItem}><img className="itemimg" src={pen} alt="pen" />
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
                            </button>
                            <button className='shopitem' onClick={currentItem}><img className="itemimg" src={dagger2} alt="dagger2" />
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
                            </button>
                            <button className='shopitem' onClick={currentItem}><img className="itemimg" src={shield} alt="shield" />
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
                            </button>
                            <button className='shopitem' onClick={currentItem}><img className="itemimg" src={cog} alt="cog" />
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
                            </button>
                            <button className='shopitem' onClick={currentItem}><img className="itemimg" src={key} alt="key" />
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
                            </button>
                            <button className='shopitem' onClick={currentItem}><img className="itemimg" src={book} alt="book" />
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
                            </button>
                            <button className='shopitem' onClick={currentItem}><img className="itemimg" src={skis} alt="skis" />
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
                            </button>
                            <button className='shopitem' onClick={currentItem}><img className="itemimg" src={sunglasses} alt="sunglasses" />
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
                            </button>
                            <button className='shopitem' onClick={currentItem}><img className="itemimg" src={bloodysword} alt="Sword" />
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
                            </button>
                            <button className='shopitem' onClick={currentItem}><img className="itemimg" src={mallet} alt="mallet" />
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
                            </button>
                            <button className='shopitem' onClick={currentItem}><img className="itemimg" src={bottle} alt="bottle" />
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
                            </button>
    

                        </div>
                        <div className='shopbottom'>
                            <div className='coinrow'>
                                <img className="coinshop" src={coins} alt="Coins" />
                                <div className='row'>{currCoins}</div>
                            </div>
                            {/* If click on unbought item the the button is Buy, if clicked on bought item then the button is equip */}
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