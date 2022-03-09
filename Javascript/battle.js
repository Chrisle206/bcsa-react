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
    attack(dmg, atkName, opponent) {
      console.log(`${this.name} used ${atkName} on ${opponent.name} for ${dmg} damage`);
      opponent.hp = (opponent.hp + opponent.def) - dmg;
    }

    heal(amount) {
      this.hp += amount;
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

  const questions = ["Snake-case is the preferred case style when naming databases.", "MongoDB stores data records as BSON documents."];
  
  // This keeps track of whose turn it is
  let playerTurn = true;
  

  
  const turnInterval = setInterval(() => {
    // If either character is not alive, end the game
    const input = prompt("Next move?");
    if (!player.isAlive() || !opponent.isAlive()) {
      clearInterval(turnInterval);
      console.log('Game over!');
    } else if (playerTurn) {
      if(input === player.attacks[0]) {
        player.attack(player.atk, player.attacks[0], opponent);
      } else if(input === player.attacks[1]) {
        player.attack(getRandomInt(2) * (player.atk*1.5), player.attacks[1], opponent);
      } else if(input === player.attacks[2]) {
        let question = questions[Math.floor(Math.random()*questions.length)];
        input = window.prompt(question);
        input ? player.attack(player.atk*2, player.attacks[2], opponent) : player.attack(0, "miss", opponent);
      } else if(input === player.attacks[3]) {
        console.log(`${player.hp} -> ${player.hp+player.def}`);
        player.heal(player.def);
      }
      opponent.printStats();
    } else {
      opponent.attack(player);
      player.printStats();
    }
  
    // Switch turns
    playerTurn = !playerTurn;
  }, 2000);
  

  ///////////////////////////////////////////////////////////////////////////////////////////////////
var
gameData = {}
enemyAttack = {},
characters = [],



// the data for the game in play
gameData = {
step: 1,
hero: {},
enemy: {}
}


// build the character UI
function populateChar(container,character){
}

// stop and set health bar
function setHP(){
// stop health animation and set value
//clear times
//set hp for both characters
}

function characterChoice(){

switch(gameData.step){
  // switch for the current step in the game

  case 1:
    // step 1: choose your hero
    for(var i in characters){
      if(characters[i].name === name){
        // find and save your chosen hero's data
         //grab character info
      }
    }

  //add hero to ui

    gameData.step = 2;
    break;

  case 2:
    // step 2: choose your enemy?
    //populate enemy
    gameData.step = 3;
    attackList();
    break;
}
};





function attackEnemy(){


// attack enemy
gameData.enemy.hp.current -= attackMultiplier('hero', curAttack);

if(gameData.enemy.hp.current <= 0){
  // Enemy is dead

  clearModal();

  gameData.enemy.hp.current = 0;
  // clear the stadium of the dead
  $('.enemy').empty();
  // show the available characters

  gameData.enemy = {};

  // choose enemy
  gameData.step = 2;
  // unbind click for reset
  $('.attack-list li').unbind('click');
}else{
  // enemy is still alive (Attack!!!)

  // subtract attack
  curAttack--;

  // interval to animate health bar
  progressInt = setInterval(function(){
    // get current value of health bar
    var val = val();
    val--;

    // update health bar value
    val(val);

    if(val === gameData.enemy.hp.current){
      // if you've hit your target clear interval
      clearInterval(progressInt);
      progressComplete = 1;
    }
  },1);

  // update health numbers
  $('.enemy').text(gameData.enemy.hp.current);

  // wait a second to recover
  setTimeout(function(){
    // now defend that attack
    defend(that);
  }, 1000);
}






function defend(){
// random attack
randInt = randomNum(gameData.enemy.attacks.length);
enemyAttack = gameData.enemy.attacks[randInt];

//animate attack
};

{
// the hero lives

// subtract attack from enemy count

// update health value
$('.stadium .hero .data p span').text(gameData.hero.hp.current);

setTimeout(function(){


  }, 500)};
