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
		// general
		this.charClass        = charClass;
		this.shortDescription = charClass.class_description.shortDescription;
		this.longDescription  = charClass.class_description.longDescription;

		// health
		let hitDice        = charClass.class_hit_point.hit_dice;
		let higherLevels   = charClass.class_hit_point.higher_levels;
		let startingHealth = charClass.class_hit_point.first_level;

		// proficiencies
		let armorProf       = [];
		let weaponProf      = [];
		let toolProf        = [];
		let savingThrowProf = [];
		let skillProf       = [];

		// equipment
		let startingEquipmentPack;
		let startingWeapons;

		let subclasses = [];

		// class features
		let classFeatures = charClass.class_features;

	}

	calcStartingHealth(modifer) {
		//    startingHealth = firstLevel.base * firstLevel.mod;
		//    return startingHealth;
	}

	setSkillProf() {
		let selection = ""; // prompt user
		// ask the user to chose two skills to be proficient in
		for(let i = 0; i < charClass.class_proficiencies.skills.quantity; i++) {
			this.skillProf += selection;
		}
	}

}

//export Char_Class;

let myBard = new Char_Class("bard");
