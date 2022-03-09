import React, { useState } from 'react';
import enemyPic from '../assets/images/enemy.png'
import heroPic from '../assets/images/hero.png'

export default function Battle() {
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
    const enemy = new Character(["Room Mute",
        "Random Name Selector",
        "Confusing Demo",
        "Manatee Joke",
        "Bahamut Bash",
        "Shiva Shank",
        "La Croix Heal"],
        'Boss1',
        100,
        200,
        20
    );


    const player = new Character(['Basic Attack', 'Dice Attack', 'Quiz Attack', 'Quiz Heal'], 'BCS Champ', 1000, 45, 100);
    ///////////////
     // This keeps track of whose turn it is
  let playerTurn = true;
  const questions = ["Snake-case is the preferred case style when naming databases.", "MongoDB stores data records as BSON documents."];
  let defaultQuestion = "What is your next move?"
  var delayInMilliseconds = 5000; //10 second
  
//   const turnInterval = setInterval(() => {
//     // If either character is not alive, end the game
//     if (!player.isAlive() || !enemy.isAlive()) {
//       clearInterval(turnInterval);
//       console.log('Game over!');
//     } else if (playerTurn) {
//       if(player.attacks[0]) {
//         player.attack(player.atk, player.attacks[0], enemy);
//       } else if(player.attacks[1]) {
//         player.attack(getRandomInt(2) * (player.atk*1.5), player.attacks[1], enemy);
//       } else if(player.attacks[2]) {
//         let question = questions[Math.floor(Math.random()*questions.length)];
//         let answer = true;
//         answer ? player.attack(player.atk*2, player.attacks[2], enemy) : player.attack(0, "miss", enemy);
//       } else if(player.attacks[3]) {
//         console.log(`${player.hp} -> ${player.hp+player.def}`);
//         player.heal(player.def);
//       }
//       enemy.printStats();
//     } else {
//       enemy.attack(player);
//       player.printStats();
//     }
  
//     // Switch turns
//     playerTurn = !playerTurn;
//   }, 2000);

    const [heroHp, setHeroHp] = useState(player.hp);
    const [enemyHp, setEnemyHp] = useState(enemy.hp);
    const [boolean, setBoolean] = useState(true);

    const atk1 = () => {
        setEnemyHp((enemyHp+enemy.def) - player.atk);

setTimeout(function() {
  setHeroHp((heroHp+player.def) - enemy.atk);
}, delayInMilliseconds);
    };
    const atk2 = () => {
        let attack = Math.floor(Math.random() * (2 - 1)) + 1 * (player.atk*2);
        setEnemyHp((enemyHp+enemy.def) - attack);

setTimeout(function() {
  setHeroHp((heroHp+player.def) - enemy.atk);
}, delayInMilliseconds);
    };
    const atk3 = () => {
        let question = questions[Math.floor(Math.random()*questions.length)]; //gets random questions, add to UI
        quiz();

setTimeout(function() {
  setHeroHp((heroHp+player.def) - enemy.atk);
}, delayInMilliseconds);
    };
    const quiz = () => {
        let attack;
        setBoolean(true);
        boolean ? attack = player.atk*3 : attack = enemy.def;
        setEnemyHp((enemyHp+enemy.def) - attack);
    }
    const heal = () => {
        let question = questions[Math.floor(Math.random()*questions.length)];
        quiz2();

setTimeout(function() {
  setHeroHp((heroHp+player.def) - enemy.atk);
}, delayInMilliseconds);
    };
    const quiz2 = () => {
        let potion;
        setBoolean(true);
        boolean ? potion = player.hp/3 : potion = 0;
        setHeroHp(heroHp + potion);
    }


    return (
        <div className="pageContainer creationBg">
            <div className="MainBattleContainer">
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
                        <img className="enemyPic" src={enemyPic} alt="Enemy" />
                    </div>
                    <div className="heroRow">
                        <img className="heroPic" src={heroPic} alt="Hero" />
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
                <p className="question">{defaultQuestion}</p>
                    <div className="attackList">
                        <div className="attackRow1">
                            <button className="attack" onClick={atk1}>{player.attacks[0]}</button>
                            <button className="attack"onClick={atk2}>{player.attacks[1]}</button>
                        </div>
                        <div className="attackRow2">
                            <button className="attack"onClick={atk3}>{player.attacks[2]} </button>
                            <button className="attack"onClick={heal}>{player.attacks[3]}</button>
                        </div>
                        <div className="attackRow2">
                            <button className="attack">True </button>
                            <button className="attack">False</button>
                        </div>
                        <div className="attackRow2">
                            <button className="attack">Back </button>
                            <button className="attack">Continue</button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}