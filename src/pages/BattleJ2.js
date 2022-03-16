import React, { useState, useRef, useEffect } from 'react';
import { Link } from 'react-router-dom'

import song from '../assets/sounds/battle.mp3'
import back from '../assets/images/back.png'
import speakeron from '../assets/images/speaker-on.png'
import speakeroff from '../assets/images/speaker-off.png'
import enemyPic from '../assets/images/characters/joefinal.png'
import Warrior from '../assets/images/characters/warrior.png'
import Assassin from '../assets/images/characters/assassin.png'
import Master from '../assets/images/characters/routeMaster.png'
import Ranger from '../assets/images/characters/ranger.png'
import quiz from '../assets/images/quiz.png'
import sword from '../assets/images/sword.png'
import dice from '../assets/images/dice-fire.png'
import heal1 from '../assets/images/heal1.png'
import explosion from '../assets/images/explosion.gif'
import healgif from '../assets/images/heal.gif'
import getCharacter from '../Javascript/getCharacter.js';
import getEnemy from '../Javascript/getEnemy.js'
import LoadingScreen from './Loading'
import editCharacter from '../Javascript/editCharacter';
import Dead from './Dead'

var sendToAPI = {};
var delayInMilliseconds = 3000;
var bool = 2;

let enemyHpBar = {
    backgroundColor: 'green',
    width: '100%',
    height: '20px'
}
let heroHpBar = {
    backgroundColor: 'green',
    width: '100%',
    height: '20px'
}
export default function Battle() {
    function apiSend() {
        sendToAPI = {
            currency: currency + currEnemy.hp
        }
        
    }
    
    var isLastHit = 0;
    var iLive = 0;

    const [isDead, setDead] = useState(false)

    function checkDead() {
        setDead(true)
    }

    const [loading, isLoading] = useState(true)

    useEffect(() => {
        setTimeout(() => isLoading(false), 2000)
    }, [])

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

    const [enemyData, setenemyData] = useState(
        []
    );
    let currEnemy = enemyData;
    useEffect(() => {
        getEnemy('6231062ccd3d032403dd365d').then(function (result) {
            console.log(result);
            setenemyData(result)
            return;
        });
    }, []);

    const { characterName, currency, def, hp, level, atk, image } = charData;
    useEffect(() => {
        editCharacter(sendToAPI).then(function (result) {
            console.log(result);
            setcharData(result);
            return;
        });
    }, []);

    const [currChar, setCurrChar] = useState();

    function renderChar() {
        if (image === 'assassin') {
            setCurrChar(Assassin)
        } else if (image === 'master') {
            setCurrChar(Master)
        } else if (image === 'ranger') {
            setCurrChar(Ranger)
        } else if (image === 'warrior') {
            setCurrChar(Warrior)
        }
    }

    useEffect(() => {
        renderChar()
    })

    const [speaker, setStatus] = useState(false)
    const audioRef = useRef()

    function volOff() {
        if (useState !== false) {
            audioRef.current.pause()
            setStatus(true)
        }
    }

    function volOn() {
        if (useState !== true) {
            audioRef.current.play()
            setStatus(false)
        }
    }


    class Character {
        constructor(attacks, name, level, hp, atk, def, idles, taunts, introEnemy, outroEnemy) {
            this.attacks = attacks;
            this.name = name;
            this.level = level;
            this.hp = hp;
            this.atk = atk;
            this.def = def;
            this.idles = idles;
            this.taunts = taunts;
            this.intro = introEnemy;
            this.outro = outroEnemy;
        }

    }





    const player = new Character(['Basic Attack', 'Dice Attack', 'Quiz Attack', 'Quiz Heal'], characterName, level, hp, atk, def);
    const [heroHp, setHeroHp] = useState(0);
    const [enemyHp, setEnemyHp] = useState(0);

    //hp styling effect
    function healthBar() {
        const enemyHealth = 1000 * (enemyHp / currEnemy.hp)

        const enemyPercentage = enemyHealth / 10

        const myHealth = 1000 * (heroHp / player.hp)

        const myPercentage = myHealth / 10

        if (enemyHp >= currEnemy.hp) {
            enemyHpBar = {
                backgroundColor: 'green',
                width: `100%`,
                height: '20px'
            }
        } else if (enemyHp > (currEnemy.hp / 2)) {
            enemyHpBar = {
                backgroundColor: 'green',
                width: `${enemyPercentage}%`,
                height: '20px'
            }
        } else if (enemyHp > (currEnemy.hp / 4) && enemyHp < (currEnemy.hp / 2)) {
            enemyHpBar = {
                backgroundColor: 'yellow',
                width: `${enemyPercentage}%`,
                height: '20px'
            }
        } else if (enemyHp < (currEnemy.hp / 4) || enemyHp <= 0) {
            enemyHpBar = {
                backgroundColor: 'red',
                width: `${enemyPercentage}%`,
                height: '20px'
            }
        } else if (enemyHp <= 0) {
            heroHpBar = {
                backgroundColor: 'red',
                width: `'0px'`,
                height: '0px'
            }
        } 

        if (heroHp >= player.hp) {
            heroHpBar = {
                backgroundColor: 'green',
                width: `100%`,
                height: '20px'
            }
        } else if (heroHp > (player.hp / 2)) {
            heroHpBar = {
                backgroundColor: 'green',
                width: `${myPercentage}%`,
                height: '20px'
            }
        } else if (heroHp > (player.hp / 4) && heroHp < (player.hp / 2)) {
            heroHpBar = {
                backgroundColor: 'yellow',
                width: `${myPercentage}%`,
                height: '20px'
            }
        } else if (heroHp < (player.hp / 4) && heroHp > 0) {
            heroHpBar = {
                backgroundColor: 'red',
                width: `${myPercentage}%`,
                height: '20px'
            }
        } else if (heroHp <= 0) {
            heroHpBar = {
                backgroundColor: 'red',
                width: `'0px'`,
                height: '0px'
            }
        }
    }


        healthBar();

    const questions = ["Snake-case is the preferred case style when naming databases.", "MongoDB stores data records as BSON documents."];
    let defaultQuestion = "What is your next move?"
    const [mainText, setMainText] = useState();

    var enemyAtk = currEnemy.atk;

    ////////////////////////////////////////////////////////////////////////

    // explosion
    let explosionEffect = document.getElementById('explosion');
    const hideExplosion = () => {
        explosionEffect.classList.add("explosion1");
        moveE.classList.remove("moveup");
    }
    const showExplosion = () => {
        explosionEffect.classList.remove("explosion1");
        moveEffect();
       
            healthBar()
        
    }
    const explosionFunction = () => {
        showExplosion();
        setTimeout(function () { hideExplosion() }, 500)
    }
    // explosion
    let explosionEffect2 = document.getElementById('explosion2');
    const hideExplosion2 = () => {
        explosionEffect2.classList.add("explosion1");
        moveA.classList.remove("moveup2");
    }
    const showExplosion2 = () => {
        explosionEffect2.classList.remove("explosion1");
        
            healthBar()
    }
    const heroExplosion = () => {
        showExplosion2();
        moveEffectEnemy();
        setTimeout(function () { hideExplosion2() }, 500)
    }
    ////////////////////////////////////////////////////////////////////
    let healEffect = document.getElementById('healExp');
    const hideHeal = () => {
        healEffect.classList.add("explosion1");
    }
    const showHeal = () => {
        healEffect.classList.remove("explosion1");

    }
    const heroHeal = () => {
        showHeal();
        setTimeout(function () { hideHeal() }, 1000)
    }
    ////////////////////////////////////////////////////////////////
    let moveE = document.querySelector(".effectcont");
    const moveEffect = () => {
        moveE.classList.add("moveup");
    }
    let moveA = document.querySelector(".effectcont1");
    const moveEffectEnemy = () => {
        moveA.classList.add("moveup2");
    }
    ///////////////////////////////////////////////////////


    function startBat() {
        document.getElementById('start').classList.add('hide');
        setHeroHp(player.hp);
        setEnemyHp(currEnemy.hp);
        console.log(currency);
        healthBar()
        setTimeout(function () {

            setMainText(currEnemy.enemyIntro);
        }, 0)

        intro()
    }



    function intro() {
        setTimeout(function () {
            showAtkBtns();
            setMainText(defaultQuestion);
        }, 4000)
    }


    // Enemy's turn, 20% chance to idle, 80% chance to attack
    const enemyTurn = () => {
        let num = Math.floor(Math.random() * (6 - 1)) + 1;
        switch (num) {
            case 1:
                option1();
                break;
            case 2:
                option1();
                break;
            case 3:
                option1();
                break;
            case 4:
                option1();
                break;
            case 5:
                option2();
                break;
            default:
                setMainText(defaultQuestion);
        }
    }
    // If enemy attacks hero, attack only or attack and taunt
    const option1 = () => {
        let dmg = ((heroHp + player.def) - currEnemy.atk);
        if (dmg <= 0) {
            iLive = 1;
        }
        if (iLive) {
            setHeroHp(0);
            document.getElementById('hero').classList.add('hide');
            hideAtkBtns();
            setTimeout(function () {
                setMainText(`${player.name} has fainted!`);
            }, 1500)
            setTimeout(function () {
                checkDead()
            }, 3000);
        } else {
        let enemyMove = currEnemy.attacks[Math.floor(Math.random() * currEnemy.attacks.length)];
        let taunt = currEnemy.taunts[Math.floor(Math.random() * currEnemy.taunts.length)];
        setTimeout(function () {
            setMainText(`${currEnemy.enemyName} attacked with ${enemyMove} and dealt ${enemyAtk - player.def}!`);
            heroExplosion();
            setHeroHp(heroHp + (player.def - currEnemy.atk));
            setTimeout(function () {

        }, 0);
        }, 2000);
        setTimeout(function () {
            setMainText(taunt);

        }, 4000)

        setTimeout(function () {
            setMainText(defaultQuestion);
            showAtkBtns();
            currEnemy.atk = enemyAtk;
        }, 6000);
    }
    }


    const option2 = () => {
        let idle = currEnemy.idles[Math.floor(Math.random() * currEnemy.idles.length)];
        setTimeout(function () {
            setMainText(idle);
        }, 1000);
        setTimeout(function () {
            setMainText(defaultQuestion);
            showAtkBtns();
            currEnemy.atk = enemyAtk;
        }, delayInMilliseconds);
    }

    // Check if enemy is alive, if true enemy's turn, if false derender enemy and set hp to 0
    const enemyIsALive = () => {
        console.log(isLastHit);
        if (isLastHit) {
            setMainText(currEnemy.enemyOutro);
            setEnemyHp(0);
            hideAtkBtns();
            setTimeout(function () {
                document.getElementById('opp').classList.add('hide');
                setMainText(`${currEnemy.enemyName} has fallen!`);
                document.getElementById('backBtn').classList.remove('hide');
                document.getElementById('contBtn').classList.remove('hide');
            }, 1500);
            setTimeout(function () {
                setMainText(`You earned ${currEnemy.hp} coins!`);
                apiSend();
                console.log(currency);
            }, 2500);
        } else {
            setTimeout(function () { enemyTurn() }, 1000);
            <button className='attack' id='start' onClick={intro}>Start</button>
        }
    }

    /////////////////////////////////////////// ATTACK1 FUNCTIONALITY
    const atk1 = () => {
        let dmg = ((enemyHp + currEnemy.def) - player.atk);
        if (dmg <= 0) {
            isLastHit = 1;
        }

        setEnemyHp((enemyHp + currEnemy.def) - player.atk);
        setMainText(`${player.name} dealt ${player.atk - currEnemy.def}!`);
        explosionFunction();
        hideAtkBtns();
        enemyIsALive();
        
    };
    ///////////////////////////////////////////

    /////////////////////////////////////////// ATTACK2 FUNCTIONALITY
    const atk2 = () => {
        let attack = Math.floor(Math.random() * 2) * (player.atk * 2);
        if (attack === (player.atk * 2)) {
            let dmg = ((enemyHp + currEnemy.def) - player.atk * 2);
            if (dmg <= 0) {
                isLastHit = 1;
            }
            setMainText(`${player.name} dealt ${(player.atk * 2) - currEnemy.def}!`);
            explosionFunction();
            setEnemyHp((enemyHp + currEnemy.def) - attack);
        } else {
            setMainText('Attack Missed!')
        }
        hideAtkBtns();
        enemyIsALive();
    };
    /////////////////////////////////////////// 


    /////////////////////////////////////////// QUIZ ATTACK FUNCTIONALITY
    const atk3 = () => {
        let question = questions[Math.floor(Math.random() * questions.length)]; //gets random questions, add to UI
        setMainText(question);
        removeElements();
    };
    const quizTrue = () => {
        bool = 1;
        quizAtk();
    }

    const quizFalse = () => {
        bool = 0;
        quizAtk();
    }

    const quizAtk = () => {

        if (bool) {
            setMainText(`${player.name} dealt ${(player.atk * 2) - currEnemy.def}!`);
            explosionFunction();
            setEnemyHp((enemyHp + currEnemy.def) - (player.atk * 2));
            let dmg = ((enemyHp + currEnemy.def) - player.atk * 2);
            if (dmg <= 0) {
                isLastHit = 1;
            }
        } else {
            setMainText('Attack Missed!');
        }
        addElements();
        bool = 2;
        enemyIsALive();
    }
    /////////////////////////////////////////// 

    /////////////////////////////////////////// HEAL FUNCTIONALITY
    const heal = () => {
        let question = questions[Math.floor(Math.random() * questions.length)];
        setMainText(question);
        removeElements2();
    };
    const quiz2True = () => {
        bool = 1;
        healAtk();
    }
    const quiz2False = () => {
        bool = 0;
        healAtk();
    }

    const healAtk = () => {
        if (bool) {
            setMainText(`${player.name} healed ${player.hp / 5} hp!`);
            setHeroHp(heroHp + (player.hp / 5));
            currEnemy.atk = currEnemy.atk / 2;
            // heal function gif here
            heroHeal();
            healthBar()
            option2();
        } else {
            setMainText(`${player.name} dropped the potion!`);
            option1();
        }
        bool = 2;
        addElements2();
    }
    ///////////////////////////////////////////

    /////////////////////////////////////////// HIDE/SHOW FUNCTIONS
    const removeElements = () => {
        let element = document.getElementById('qT');
        element.classList.remove('hide');
        element = document.getElementById('qT1');
        element.classList.remove('hide');

        hideAtkBtns();
    }
    const addElements = () => {
        let element = document.getElementById('qT');
        element.classList.add('hide');
        element = document.getElementById('qT1');
        element.classList.add('hide');
    }
    const addElements2 = () => {
        let element = document.getElementById('hT');
        element.classList.add('hide');
        element = document.getElementById('hT1');
        element.classList.add('hide');
    }
    const removeElements2 = () => {
        let element = document.getElementById('hT');
        element.classList.remove('hide');
        element = document.getElementById('hT1');
        element.classList.remove('hide');

        hideAtkBtns();
    }

    const hideAtkBtns = () => {
        for (let i = 1; i < 5; i++) {
            let element = document.getElementById(`atk${i}`);
            element.classList.add('hide');
        }
    }

    const showAtkBtns = () => {
        for (let i = 1; i < 5; i++) {
            let element = document.getElementById(`atk${i}`);
            element.classList.remove('hide');
        }
    }
    /////////////////////////////////////////////////////////////////


    return (
        <>
            {loading === false ? (
                <>
                {isDead === true ? (
                    <Dead />
                    ) : (
                        <>
                            <div className="pageContainer creationBg">
                                <div className='rotate'>Rotate to play</div>
                                <div className="MainBattleContainer">
                                    <div className="topNavContainer">
                                        {/* TODO: When battle is over, display a continue button. During battle display escape option, which prompts user that battle will not have rewards.*/}
                                        <Link to='/Tavern' style={{ textDecoration: 'none', color: 'white' }} className="backbutton"><img className='backbuttonimg' src={back} alt="Back_Button" /> Back</Link>
                                    </div>
                                    <div className="battleContainer">
                                        <div className="enemyRow">
                                            <div className="StatBox pixel-border">
                                                <div className='statRow'>
                                                    <h3 className='smallFont'>{currEnemy.enemyName}</h3>
                                                    <h3 className='smallFont'>Lvl: {currEnemy.level}</h3>
                                                </div>

                                                <div className='healthcontainer'>
                                                    <div style={enemyHpBar}>

                                                    </div>
                                                </div>
                                                <h3 className='hp smallFont'>HP:{enemyHp}/{currEnemy.hp}</h3>
                                            </div>
                                            <div className='effectcont1'>
                                                <img className="enemyPic" src={enemyPic} id='opp' alt="Enemy" />
                                                <img className="explosion explosion1" id='explosion' src={explosion} alt="explosion" />
                                            </div>
                                        </div>
                                        <div className="heroRow">
                                            <div className='effectcont'>
                                                <img className="heroPic" src={currChar} id='hero' alt="Hero" />
                                                <img className="explosion explosion1" id='explosion2' src={explosion} alt="explosion" />
                                                <img className="explosion explosion1" id='healExp' src={healgif} alt="heal" />
                                            </div>
                                            <div className="StatBox pixel-border">
                                                <div className='statRow'>
                                                    <h3 className='smallFont'>{player.name}</h3>
                                                    <h3 className='smallFont'>Lvl: {player.level}</h3>
                                                </div>


                                                <div className='healthcontainer'>
                                                    <div style={heroHpBar}>

                                                    </div>
                                                </div>

                                                <h3 className='hp smallFont'>HP:{heroHp}/{player.hp}</h3>

                                            </div>
                                        </div>
                                    </div>
                                    <div className="BattlechoicesContainer pixel-border">
                                        <p className="question">{mainText}</p>
                                        <div className="attackList">
                                            <div className="attackRow1">
                                                <button className="attack hide" id='atk1' onClick={atk1}><img className="iconhover" src={sword} alt="sword" />{player.attacks[0]}</button>
                                                <button className="attack hide" id='atk2' onClick={atk2}><img className="iconhover" src={dice} alt="dice" />{player.attacks[1]}</button>

                                            </div>
                                            <div className="attackRow2">
                                                <button className="attack hide" id='atk3' onClick={atk3}>
                                                    <img className="iconhover" src={quiz} alt="quiz" />
                                                    {player.attacks[2]} </button>
                                                <button className="attack hide" id='atk4' onClick={heal}>
                                                    <img className="iconhover" src={heal1} alt="heal" />
                                                    {player.attacks[3]}</button>
                                            </div>
                                            <div className="attackRow2">
                                                <button className="attack hide" id='qT' onClick={quizTrue}>True </button>
                                                <button className="attack hide" id='qT1' onClick={quizFalse}>False</button>
                                                <button className="attack hide" id='hT' onClick={quiz2True}>True </button>
                                                <button className="attack hide" id='hT1' onClick={quiz2False}>False</button>
                                            </div>
                                            <div className="attackRow2">
                                                <button className='attack start' id='start' onClick={startBat}>Begin Battle</button>
                                                <Link to={'/Tavern'} style={{ textDecoration: 'none', color: 'white' }} onClick={apiSend} className="attack hide" id='backBtn'>Back </Link>
                                                <Link to={'/Dead'} style={{ textDecoration: 'none', color: 'white' }} onClick={apiSend}className="attack hide" id='contBtn' >Continue</Link>

                                            </div>
                                        </div>
                                    </div>
                                    <div className="bottomNavContainer">
                                        <>
                                            <audio autoPlay loop ref={audioRef} src={song} />
                                            {speaker ? (
                                                <button onClick={volOn} className="backbutton"><img className='soundbuttonimg' src={speakeroff} alt="speaker" /></button>
                                            ) : (
                                                <>
                                                    <button onClick={volOff} className="backbutton"><img className='soundbuttonimg' src={speakeron} alt="speaker" /></button>
                                                </>
                                            )}
                                        </>
                                    </div>
                                </div>
                            </div>
                        </>
                    )}
                </>
            ) : (
                <LoadingScreen />
            )}
        </>
    )
}