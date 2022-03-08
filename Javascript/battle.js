// import { randomString } from "rpg-table-randomizer";

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
  
  // This keeps track of whose turn it is
  let playerTurn = true;
  

  
  const turnInterval = setInterval(() => {
    // If either character is not alive, end the game
    if (!player.isAlive() || !opponent.isAlive()) {
      clearInterval(turnInterval);
      console.log('Game over!');
    } else if (playerTurn) {
      player.attack(opponent);
      opponent.printStats();
    } else {
      opponent.attack(player);
      player.printStats();
    }
  
    // Switch turns
    playerTurn = !playerTurn;
  }, 2000);
  