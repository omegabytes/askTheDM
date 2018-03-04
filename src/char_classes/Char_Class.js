import barbarian from "./char_classes/Barbarian";
import bard from "./char_classes/Bard";
import cleric from "./char_classes/Cleric";
import druid from "./char_classes/Druid";
import fighter from "./char_classes/Fighter";
import monk from "./char_classes/Monk";
import paladin from "./char_classes/Paladin";
import ranger from "./char_classes/Ranger";
import rogue from "./char_classes/Rogue";
import sorcerer from "./char_classes/Sorcerer";
import warlock from "./char_classes/Warlock";
import wizard from "./char_classes/Wizard";

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

export {Char_Class};

let myBard = new Char_Class("bard");
let myBarbarian = new Char_Class("barbarian");
