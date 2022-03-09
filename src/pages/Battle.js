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
        125,
        55,
        20
    );


    const player = new Character(['Attack 1', 'Attack 2', 'Attack 3', 'Attack 4'], 'BCS Champ', 1000, 1000, 1000);
    ///////////////
     // This keeps track of whose turn it is
  let playerTurn = true;
  const questions = ["Snake-case is the preferred case style when naming databases.", "MongoDB stores data records as BSON documents."];
  
  function getRandomInt(min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min)) + min; //The maximum is exclusive and the minimum is inclusive
  }
  
  const turnInterval = setInterval(() => {
    // If either character is not alive, end the game
    if (!player.isAlive() || !enemy.isAlive()) {
      clearInterval(turnInterval);
      console.log('Game over!');
    } else if (playerTurn) {
      if(player.attacks[0]) {
        player.attack(player.atk, player.attacks[0], enemy);
      } else if(player.attacks[1]) {
        player.attack(getRandomInt(2) * (player.atk*1.5), player.attacks[1], enemy);
      } else if(player.attacks[2]) {
        let question = questions[Math.floor(Math.random()*questions.length)];
        let answer = true;
        answer ? player.attack(player.atk*2, player.attacks[2], enemy) : player.attack(0, "miss", enemy);
      } else if(player.attacks[3]) {
        console.log(`${player.hp} -> ${player.hp+player.def}`);
        player.heal(player.def);
      }
      enemy.printStats();
    } else {
      enemy.attack(player);
      player.printStats();
    }
  
    // Switch turns
    playerTurn = !playerTurn;
  }, 2000);

    const [heroHp, setHeroHp] = useState(player.hp);
    const [enemyHp, setEnemyHp] = useState(enemy.hp);


    const atk1 = () => {
        setEnemyHp(enemyHp - player.atk);
    };
    const atk2 = () => {
        setEnemyHp(enemyHp - player.atk);
    };
    const atk3 = () => {
        setEnemyHp(enemyHp - player.atk);
    };
    const atk4 = () => {
        setEnemyHp(enemyHp - player.atk);
    };


    // return (
    //   <div className="card text-center">
    //     <div className="card-header bg-warning text-white">
    //       Building Temperature
    //     </div>
    //     <div className="card-body">
    //       <p className="card-text">
    //         Current temperature: {temp} degrees Fahrenheit
    //       </p>
    //       <button
    //         type="button"
    //         className="btn btn-danger"
    //         onClick={increaseTemp}
    //       >
    //         Raise temperature
    //       </button>{' '}
    //       <button
    //         type="button"
    //         className="btn btn-primary"
    //         onClick={decreaseTemp}
    //       >
    //         Lower temperature
    //       </button>
    //     </div>
    //   </div>
    // );

    return (
        <div className="pageContainer creationBg">
            <div className="MainBattleContainer">
                <div className="battleContainer">
                    <div className="enemyRow">
                        <div className="StatBox">
                            <div className='statRow'>
                                <h3>{enemy.name}</h3>
                                <h3>Lvl: 15</h3>
                            </div>
                            <div className='healthBarContainer'>
                                <div className='statRow'>
                                    <div className='healthBar50'></div>
                                    <h3 className='hp'>HP:{enemyHp}/{enemy.hp}</h3>
                                </div>
                            </div>
                        </div>
                        <img className="enemyPic" src={enemyPic} alt="Enemy" />
                    </div>
                    <div className="heroRow">
                        <img className="heroPic" src={heroPic} alt="Hero" />
                        <div className="StatBox">
                            <div className='statRow'>
                                <h3>{player.name}</h3>
                                <h3>Lvl: 10</h3>
                            </div>
                            <div className='healthBarContainer'>
                                <div className='statRow'>
                                    <div className='healthBar100'></div>
                                    <h3 className='hp'>HP:{heroHp}/{player.hp}</h3>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="BattlechoicesContainer">
                    <div className="attackList">
                        <div className="attackRow">
                            <div>{player.attacks[0]}</div>
                            <div>{player.attacks[1]}</div>
                        </div>
                        <div className="attackRow">
                            <div>{player.attacks[2]}</div>
                            <div>{player.attacks[3]}</div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}