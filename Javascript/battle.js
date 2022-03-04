class Character {
    constructor(name, hp, atk, def) {
      this.name = name;
      this.hp = hp;
      this.atk = atk;
      this.def = def;
    }
  
    // Method which prints all of the stats for a character
    printStats() {

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
      console.log(`${this.name} hit ${opponent.name} for ${this.atk}`);
      opponent.hp -= this.atk;
    }
  }
  
  // Create unique characters using the "character" constructor

  
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
  