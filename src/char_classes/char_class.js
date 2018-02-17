let barbarian       = require('./char_classes/barbarian.js');
let bard            = require('./char_classes/bard');
let cleric          = require('./char_classes/cleric');
let druid           = require('./char_classes/druid');
let fighter         = require('./char_classes/fighter');
let monk            = require('./char_classes/monk');
let paladin         = require('./char_classes/paladin');
let ranger          = require('./char_classes/ranger');
let rogue           = require('./char_classes/rogue');
let sorcerer        = require('./char_classes/sorcerer');
let warlock         = require('./char_classes/warlock');
let wizard          = require('./char_classes/wizard');

class Char_Class {
  constructor(charClass) {
    this.charClass = charClass;
    this.shortDescription = charClass.class_description.shortDescription;
    this.longDescription = charClass.class_description.longDescription;
  }
  
  // hp
  health(modifer) {
    let hitDice = charClass.class_hit_point.hit_dice;
    let higherLevels = charClass.class_hit_point.higher_levels;
    let firstLevel = charClass.class_hit_point.first_level;
    firstLevel = firstLevel.base * firstLevel.mod;
    return firstLevel;
  }
  
  // primary abilities
  abilities() {
    // ability scores
    // background
    // recommended starting spells
  }
  
  
  
    // proficiencies
  proficiencies() {
    // armor
    // weapon
    // tools
    // saving throws
    // skills
  }
  
    // equipment
  equipment() {
    // starting pack
    // weapon choices
    // equipment pack choices
    // other equipment
  }


    // list of spells
  spells() {
  
  }
  
  // spellcasting ability
  spellcastingAbility() {
    // spell save dc
    // spell attack modifier
    // spell focus
  
  }
  
  // class features
  classFeatures() {
    // class skills
    // subclasses
  }
}

//export Char_Class;


let myBard = new Char_Class("bard");
