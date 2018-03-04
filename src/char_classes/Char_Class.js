import barbarian from "./Barbarian";
import bard from "./Bard";
import cleric from "./Cleric";
import druid from "./Druid";
import fighter from "./Fighter";
import monk from "./Monk";
import paladin from "./Paladin";
import ranger from "./Ranger";
import rogue from "./Rogue";
import sorcerer from "./Sorcerer";
import warlock from "./Warlock";
import wizard from "./Wizard";

class Char_Class {
	constructor(charClass) {
		// general
		this.charClass = charClass;
		this.shortDescription = charClass.class_description.shortDescription;
		this.longDescription = charClass.class_description.longDescription;
		// health
		let hitDice = charClass.class_hit_point.hit_dice;
		let higherLevels = charClass.class_hit_point.higher_levels;
		let startingHealth = charClass.class_hit_point.first_level;
		// proficiencies
		let armorProf = [];
		let weaponProf = [];
		let toolProf = [];
		let savingThrowProf = [];
		let skillProf = [];
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
		for (let i = 0; i < charClass.class_proficiencies.skills.quantity; i++) {
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
