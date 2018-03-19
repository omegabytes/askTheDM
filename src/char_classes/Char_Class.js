let barbarian = require("./Barbarian");
let bard = require("./Bard");
let cleric = require("./Cleric");
let druid = require("./Druid");
let fighter = require("./Fighter");
let monk = require("./Monk");
let paladin = require("./Paladin");
let ranger = require("./Ranger");
let rogue = require("./Rogue");
let sorcerer = require("./Sorcerer");
let warlock = require("./warlock");
let wizard = require("./wizard");

// fixme: each class will most likely need a 'class table' as depicted in the class section in the PHB (ie: Cleric table on PHB 57 (51PDF))
class Char_Class {
	constructor(charClass) {
		// general
		this.charClass = charClass;
		this.shortDescription = charClass.short_description;
		this.longDescription = charClass.long_description;
		// health
		let hitDice = charClass.hit_dice;
		let higherLevels = charClass.avg_increase_per_level; //this is the attribute that scales based on each level
		let startingHealth = charClass.first_level;
		// primary abilities
		let recomAbilities = charClass.rec_abilities;
		let recomBackground = charClass.rec_background;
		let recomStartingSpells = charClass.rec_starting_spells;
		// proficiencies
		let armorProf = [];
		let weaponProf = [];
		let toolProf = [];
		let savingThrowProf = [];
		let skillProf = [];
		// equipment
		let startingEquipmentPack;
		let startingWeapons;
		let startingArmor; //todo: there is a armor_choices variable in some melee focused classes, maybe add an if-block to check if said class has this variable, if not pull data from starting_equipment
		let equipPack;
		let extraEquipment;
		// list of class spells & spellcasting info --if spell caster call MagicClass file here
		// class features
		let classFeatures = charClass.class_features; //fixme: this needs to be changed to either individually point to each class_specific_ability *OR* in each individual PClass object(ie:Druid.js) group 'class features' into a subcategory similar to 'subclasses'
		// class skills
		// subclasses
	}

	calcStartingHealth(modifer) {
		//    startingHealth = firstLevel.base * firstLevel.mod;
		//    return startingHealth;
	}

	setSkillProf() {
		let selection = ""; // prompt user
		// ask the user to chose two skills to be proficient in
		for (let i = 0; i < charClass.skills.quantity; i++) {
			this.skillProf += selection;
		}
	}
}

export {Char_Class};
let myBard = new Char_Class("bard");
let myBarbarian = new Char_Class("barbarian");
let myCleric = new Char_Class("cleric");
let myDruid = new Char_Class("druid");
let myFighter = new Char_Class("fighter");
let myMonk = new Char_Class("monk");
let myPaladin = new Char_Class("paladin");
let myRanger = new Char_Class("ranger");
let myRogue = new Char_Class("rogue");
let mySorcerer = new Char_Class("sorcerer");
let myWarlock = new Char_Class("warlock");
let myWizard = new Char_Class("wizard");
