// import { randomString } from "rpg-table-randomizer";

class Character {
    constructor(attacks, name, hp, atk, def) {
      this.attacks = attacks;
      this.name = name;
      this.hp = hp;
      this.atk = atk;
      this.def = def;
    }
  
  }
  // Create unique characters using the "character" constructor
  const opponent = new Character(
    100,["Room Mute",
  "Random Name Selector",
  "Confusing Demo",
  "Manatee Joke",
  "Bahamut Bash",
  "Shiva Shank",
  "La Croix Heal"],
  'Boss1',
  55,
  20
  );
  
  console.log(opponent);