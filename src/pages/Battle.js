import React, { useState, useRef } from 'react';
import song from '../assets/sounds/battle.wav'
import back from '../assets/images/back.png'
import speakeron from '../assets/images/speaker-on.png'
import speakeroff from  '../assets/images/speaker-off.png'
import enemyPic from '../assets/images/enemy.png'
import heroPic from '../assets/images/hero.png'
import quiz from '../assets/images/quiz.png'
import sword from '../assets/images/sword.png'
import dice from '../assets/images/dice-fire.png'
import heal1 from '../assets/images/heal1.png'
import explosion from '../assets/images/explosion.gif'
import getCharacter from '../Javascript/getCharacter.js';


getCharacter().then(function (result) {
    console.log(result);
    // setcharData(result)
    return result;
}).then(function(newResult) {
    console.log(newResult);
    return newResult
})



export default function Battle(newResult) {
    console.log(newResult);
    const [charData, setcharData] = useState({
        characterName: "",
    });

    // getCharacter().then(function (result) {
    //     console.log(result);
    //     setcharData(result)
    //     return;
    // });
    // const { characterName, characterClass, currency, def, exp, hp, level, items, atk, image } = data
    // console.log(userChar);
    

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


    class Character {
        constructor(attacks, name, hp, atk, def) {
            this.attacks = attacks;
            this.name = name;
            this.hp = hp;
            this.atk = atk;
            this.def = def;
        }

        // Method which prints all of the stats for a character
        printStats() {
            console.log(`${this.name}'s current hp: ${this.hp}`);
        }

        // Method which determines whether or not a character's "hp" are less then zero
        // Returns true or false depending upon the outcome
        isAlive() {
            if (this.hp <= 0) {
                console.log(`${this.name} has been defeated!`);
                return false;
            }
            return true;
        }

        // Method which takes in a second object and decreases their "hp" by this character's atk
        attack(opponent) {
            console.log(`${this.name} used ${this.attacks[Math.floor(Math.random() * this.attacks.length)]} on ${opponent.name} for ${this.atk} damage`);
            opponent.hp = (opponent.hp + opponent.def) - this.atk;
        }

    }


    // Create unique characters using the "character" constructor
    const enemy = new Character(["Console Crash",
    "null",
    "undefined"],
        'Bug Enemy',
        1000,
        200,
        20
    );
    const idles = ["The bug looks like it's hiding something.",
    "The bug is shouting in a red-colored font.",
    "The bug seems to jitter about.",];
    const taunts = [ "Tzzt!"]
    const atks = ["Console Crash",
    "null",
    "undefined"
    ];

    //TODO: Inputs from GET go here
    const player = new Character(['Basic Attack', 'Dice Attack', 'Quiz Attack', 'Quiz Heal'], charData.characterName, 1000, 45, 100);
    ///////////////
    // This keeps track of whose turn it is
    const questions = ["Snake-case is the preferred case style when naming databases.", "MongoDB stores data records as BSON documents."];
    let defaultQuestion = "What is your next move?"
    var delayInMilliseconds = 3000;

    const [heroHp, setHeroHp] = useState(player.hp);
    const [enemyHp, setEnemyHp] = useState(enemy.hp);
    var bool = 2;
    const [mainText, setMainText] = useState(defaultQuestion);

    var isLastHit = 0;
    var enemyAtk = enemy.atk;

    // explosion
    let explosionEffect = document.getElementById('explosion');
    const hideExplosion = () => {
            explosionEffect.classList.add("explosion1");
    }
    const showExplosion = () => {
        explosionEffect.classList.remove("explosion1");
        
    }
    const explosionFunction = () => {
    showExplosion();
    setTimeout(function () { hideExplosion() }, 500)
}
    // explosion
    let explosionEffect2 = document.getElementById('explosion2');
    const hideExplosion2 = () => {
            explosionEffect2.classList.add("explosion1");
    }
    const showExplosion2 = () => {
        explosionEffect2.classList.remove("explosion1");
        
    }
    const heroExplosion = () => {
    showExplosion2();
    setTimeout(function () { hideExplosion2() }, 500)
}


    const intro = () => {
        hideAtkBtns();
        setMainText('intro');
        setTimeout(function () {
            setMainText(defaultQuestion);
            showAtkBtns();
        }, 1000);
    }
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
                let idle = idles[Math.floor(Math.random() * idles.length)];
                setTimeout(function () {
                    setMainText(idle);
                }, 1000);
                setTimeout(function () {
                    setMainText(defaultQuestion);
                    showAtkBtns();
                    enemy.atk = enemyAtk;
                }, delayInMilliseconds);
                break;
            default:
                setMainText(defaultQuestion);
        }
    }

    const option1 = () => {
        let num2 = Math.floor(Math.random() * (3 - 1)) + 1;
        let enemyMove = atks[Math.floor(Math.random() * atks.length)];
        if (num2 === 1) {
            setMainText(`${enemy.name} attacked with ${enemyMove} and dealt ${enemyAtk - player.def}`);
            setTimeout(function () {
                setHeroHp(heroHp + (player.def - enemy.atk));
                setMainText(defaultQuestion);
                showAtkBtns();
                enemy.atk = enemyAtk;
            }, 1000);
            // here goes hero explosion
            heroExplosion();
        } else if (num2 === 2) {
            let taunt = taunts[Math.floor(Math.random() * taunts.length)];
            setMainText(`${enemy.name} attacked with ${enemyMove} and dealt ${enemyAtk - player.def}`);
            setTimeout(function () {
                setHeroHp(heroHp + (player.def - enemy.atk));
                setMainText(taunt);
            }, 1000);
            //heroexplosion
            heroExplosion();
            setTimeout(function () {
                setMainText(defaultQuestion);
                showAtkBtns();
                enemy.atk = enemyAtk;
            }, 2000);
        }
    }
    const enemyIsALive = () => {
            if(isLastHit) {
                document.getElementById('opp').classList.add('hide')
                setEnemyHp(0);
                setMainText('Enemy Felled!');
                hideAtkBtns();
                document.getElementById('backBtn').classList.remove('hide');
                document.getElementById('contBtn').classList.remove('hide'); 
            } else {
                setTimeout(function () { enemyTurn() }, 500);
            }
    }

    const atk1 = () => {
        let dmg = ((enemyHp + enemy.def) - player.atk);
        if(dmg <= 0) {
            isLastHit = 1;
        }
        setEnemyHp((enemyHp + enemy.def) - player.atk);
        setMainText(`${player.name} dealt ${player.atk - enemy.def}`);
        explosionFunction();
        hideAtkBtns();
        enemyIsALive();
    };


    const atk2 = () => {
        let attack = Math.floor(Math.random() * 2) * (player.atk * 2);
        if(attack === (player.atk*2)){
            let dmg = ((enemyHp + enemy.def) - player.atk*2);
        if(dmg <= 0) {
            isLastHit = 1;
        }
        setMainText(`${player.name} dealt ${(player.atk*2) - enemy.def}`);
        explosionFunction();
        setEnemyHp((enemyHp + enemy.def) - attack);
        } else {
            setMainText('Attack Missed!')
        }
        hideAtkBtns();
        enemyIsALive();
    };


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

        if(bool) {
            setMainText(`${player.name} dealt ${(player.atk*2) - enemy.def}`);
            explosionFunction();
            setEnemyHp((enemyHp + enemy.def) - (player.atk * 2));
            let dmg = ((enemyHp + enemy.def) - player.atk*2);
        if(dmg <= 0) {
            isLastHit = 1;
        }
        } else {
            setMainText('Attack Missed!');
        }
        addElements();
        bool = 2;
        enemyIsALive();
    }


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
        if(bool) {
            setMainText(`${player.name} healed ${player.hp / 5} hp`);
            setHeroHp(heroHp + (player.hp / 5));
            enemy.atk = enemy.atk/2;
        } else {
            setMainText(`${player.name} dropped the potion`);
        }
        bool = 2;
        addElements2();
        enemyIsALive();
    }
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


    // intro();
    return (
        <div className="pageContainer creationBg">
            <div className="MainBattleContainer">
            <div className="topNavContainer">
                    <button className="backbutton"><img className='backbuttonimg'src={back} alt="Back_Button" /> Back</button>                    
                </div>
                <div className="battleContainer">
                    <div className="enemyRow">
                        <div className="StatBox pixel-border">
                            <div className='statRow'>
                                <h3>{enemy.name}</h3>
                                <h3>Lvl: 15</h3>
                            </div>
                            <div className='healthBarContainer'>
                                <div className='statRow'>
                                    <div className='healthcontainer'>
                                        <div className='healthBarEnemy'>

                                        </div>
                                    </div>
                                    <h3 className='hp'>HP:{enemyHp}/{enemy.hp}</h3>
                                </div>
                            </div>
                        </div>
                        <div className='effectcont'>
                        <img className="enemyPic" src={enemyPic} alt="Enemy" />
                        <img className="explosion explosion1" id='explosion' src={explosion} alt="explosion" />
                        </div>
                    </div>
                    <div className="heroRow">
                    <div className='effectcont'>
                        <img className="heroPic" src={heroPic} alt="Hero" />
                        <img className="explosion explosion1" id='explosion2' src={explosion} alt="explosion" />
                        </div>
                        <div className="StatBox pixel-border">
                            <div className='statRow'>
                                <h3>{player.name}</h3>
                                <h3>Lvl: 10</h3>
                            </div>
                            <div className='healthBarContainer '>
                                <div className='statRow'>
                                    <div className='healthcontainer'>
                                        <div className='healthBarHero'>

                                        </div>
                                    </div>
                                    <h3 className='hp'>HP:{heroHp}/{player.hp}</h3>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="BattlechoicesContainer pixel-border">
                    <p className="question">{mainText}</p>
                    <div className="attackList">
                        <div className="attackRow1">
                            <button className="attack" id='atk1' onClick={atk1}>{player.attacks[0]}</button>
                        <img className="iconhover" src={sword} alt="sword" />
                            <button className="attack" id='atk2' onClick={atk2}>{player.attacks[1]}</button>
                            <img className="iconhover" src={dice} alt="dice" />
                        </div>
                        <div className="attackRow2">
                            <button className="attack" id='atk3' onClick={atk3}>
                                {player.attacks[2]} </button>
                                <img className="iconhover" src={quiz} alt="quiz" />
                            <button className="attack" id='atk4' onClick={heal}>
                                {player.attacks[3]}</button>
                                <img className="iconhover" src={heal1} alt="heal" />
                        </div>
                        <div className="attackRow2">
                            <button className="attack hide" id='qT' onClick={quizTrue}>True </button>
                            <button className="attack hide" id='qT1' onClick={quizFalse}>False</button>
                            <button className="attack hide" id='hT' onClick={quiz2True}>True </button>
                            <button className="attack hide" id='hT1' onClick={quiz2False}>False</button>
                        </div>
                        <div className="attackRow2">
                            <button className="attack hide" id='backBtn'>Back </button>
                            <button className="attack hide" id='contBtn'>Continue</button>
                        </div>
                    </div>
                </div>
                <div className="bottomNavContainer">
                    <>
                        <audio autoPlay loop ref={audioRef} src={song}/>
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