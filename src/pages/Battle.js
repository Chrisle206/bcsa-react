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
  const opponent = new Character(["Room Mute",
  "Random Name Selector",
  "Confusing Demo",
  "Manatee Joke",
  "Bahamut Bash",
  "Shiva Shank",
  "La Croix Heal"],
  'Boss1',
  100,
  55,
  20
  );

  const player = new Character(['Attack 1', 'Attack 2', 'Attack 3', 'Attack 4'], 'player', 150, 45, 15);
  
  
  
    return (
        <div className="pageContainer creationBg">
            <div className="MainBattleContainer">
                <div className="battleContainer">
                    <div className="enemyRow">
                        <div className="StatBox">
                            <div className='statRow'>
                                <h3>{opponent.name}</h3>
                                <h3>Lvl: 15</h3>
                            </div>
                            <div className='healthBarContainer'>
                                <div className='statRow'>
                                <div className='healthBar50'></div>
                                <h3 className='hp'>HP:{opponent.hp}</h3>
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
                                <h3 className='hp'>HP:{player.hp}</h3>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="BattlechoicesContainer">
                    <div className="attackList">
                        <div className="attackRow">
                            <div onClick={() => player.attack(opponent)}>{player.attacks[0]}</div>
                            <div onClick={() => player.attack(opponent)}>{player.attacks[1]}</div>
                        </div>
                        <div className="attackRow">
                            <div onClick={() => player.attack(opponent)}>{player.attacks[2]}</div>
                            <div onClick={() => player.attack(opponent)}>{player.attacks[3]}</div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}