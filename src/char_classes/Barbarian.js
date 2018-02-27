let languageStrings = require('./languageStrings');
let langEN          = languageStrings.en.translation;
let char_classes    = langEN.CLASSES;

function Barbarian(prof_bon, char_mod, con_mod) {
	this.prof_bonus = prof_bon;
	this.str_mod = char_mod;
	this.con_mod = con_mod;

	//class_desc
	this.short_description = char_classes.barbarian.class_description.shortDesc;
	this.long_description = char_classes.barbarian.class_description.longDesc;

	//health
	this.hit_dice = "1d12";
	this.first_level = 12 + this.con_mod;
	this.avg_increase_per_level = 7;

	//primary abilities, descending priority
	this.rec_abilities = ["Strength","Constitution"];
	this.rec_background = ["Outlander"];
	this.rec_starting_spells = "Barbarians do not have the ability to cast spells.";

	//proficiencies
	this.armor_prof = ["light armor","medium armor","shields"]; //armor
	this.weapon_prof = ["simple weapons","martial weapons"];
	this.tool_prof = [];
	this.saving_throw_prof = ["Strength","Constitution"];
	this.skill_prof = ["Animal Handling","Athletics","Intimidation","Nature","Perception","Survival"];

	//equipment
	this.starting_equipment = ["explorer\'s pack","four javelins"];
	this.weapon_choices = ["greataxe","martial melee weapons","two handaxes","simple weapons"]; //fixme: 'simple weapon' is item.itemType['simple melee weapon'] use this to list out all 'simple weapon' weapons
	this.equip_pack_1 = { // fixme: split these into [{item name : quantity},{...}]
		"name" : "explorer\'s pack",
		"items" : [{"name":"backpack", "quantity":1},{"name":"bedroll","quantity":1},{"name":"mess kit","quantity":1},{"name":"tinderbox","quantity":1},{"name":"torches","quantity":10},{"name":"rations","quantity":10},{"name":"waterskin","quantity":1},{"name":"hempen rope: 50ft","quantity":1},{"name":"gold pieces","quantity":10}]
	};

	//other equipment
	//put recommended items first, followed by all possible items?
	this.extra_equipment = ["",""];

	// list of spells
	this.class_spells = function () { //todo: implement this function
		// gets array of spells
		// iterate through the list of spells in spells.js, grabbing any spell where
		// [spell].spellClass.bard === true
		// this just compiles an array of spell objects, we will use other methods for user input/output
	};

	// spellcasting ability

	// class features

	// class skills
	// subclasses
}