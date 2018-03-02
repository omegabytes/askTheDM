let languageStrings = require('./languageStrings'); //possibly `import languageStrings from "./languageStrings";`
let langEN = languageStrings.en.translation;
let char_classes = langEN.CLASSES;

// todo: add con mod param, prompt user for it
function Bard(prof_bon, char_mod, con_mod) {
	this.prof_bonus = prof_bon;
	this.cha_mod = char_mod;
	this.con_mod = con_mod;
	// class_desc
	this.short_description = char_classes.bard.class_description.shortDesc; // short
	this.long_description = char_classes.bard.class_description.longDesc;  // long
	// health
	// todo: use con mod param to help generate these values
	this.hit_dice = "1d8";                  // hit dice
	this.first_level = 8 + this.con_mod;    // 1st level ("plus your con modifier)
	this.avg_increase_per_level = 5;        // average scaling at higher levels
	// primary abilities, descending priority
	this.rec_abilities = ["Charisma", "Dexterity"];   // recommended primary abilities
	this.rec_background = ["Entertainer"];            // recommended background
	this.rec_starting_spells = ["vicious mockery", "dancing lights", "charm person", "detect magic", "healing word", "thunderwave"];
	// proficiencies
	this.armor_prof = ["light armor"];  // armor fixme:items.itemType['light armor']
	this.weapon_prof = ["Simple weapon", "hand crossbows", "longswords", "rapiers", "shortswords"]; // weapon fixme: 'simple weapon' is item.itemType['simple melee weapon']
	this.tool_prof = [];    // fixme: items.itemType['musical instrument'] for list of all musical instruments
	this.saving_throw_prof = ["Charisma", "Dexterity"]; // saving throw proficiency
	this.skill_prof = [];   // skills, fixme: prompt user to choose, any three
	// equipment
	this.starting_equipment = ["leather armor", "dagger"]; // starting pack
	this.weapon_choices = ["rapier", "longsword", "any simple weapon"]; // weapon choices fixme: how to handle 'any simple weapon'? list all of them is probably it
	this.equip_pack_1 = { // fixme: split these into {item name, quantity}
		"name": "diplomat\'s pack", "items": [{"name": "chest", "quantity": 1}, {
			"name": "map or scroll cases", "quantity": 2
		}, {"name": "set of fine clothes", "quantity": 1}, {"name": "bottle of ink", "quantity": 1}, {
			"name": "ink pen", "quantity": 1
		}, {"name": "lamp", "quantity": 1}, {"name": "flask of oil", "quantity": 2}, {
			"name": "sheet of paper", "quantity": 5
		}, {"name": "vial of perfume", "quantity": 1}, {"name": "sealing wax", "quantity": 1}, {
			"name": "soap", "quantity": 1
		}, {"name": "gold pieces", "quantity": 39}]
	};
	this.equip_pack_2 = { // fixme: split these into item name : quantity
		"name": "entertainer\'s pack",
		"items": [{"name": "backpack", "quantity": 1}, {"name": "bedroll", "quantity": 1}, {
			"name": "costume", "quantity": 2
		}, {"name": "candles", "quantity": 5}, {"name": "rations", "quantity": 5}, {
			"name": "waterskin", "quantity": 1
		}, {"name": "disguise kit", "quantity": 1}, {"name": "gold pieces", "quantity": 40}]
	};
	// other equipment
	// put recommended items first, followed by all possible items?
	// fixme: items.itemType['musical instrument']
	this.musical_inst = ["lute", "bagpipes", "drums", "dulcimer", "flute", "lyre", "horn", "pan flute", "shawm", "viol"];
	// list of spells
	this.class_spells = function () { //todo: implement this function
		// gets array of spells
		// iterate through the list of spells in spells.js, grabbing any spell where
		// [spell].spellClass.bard == true
		// this just compiles an array of spell objects, we will use other methods for user input/output
	};
	// spellcasting ability
	this.spell_save_dc = 8 + this.prof_bonus + this.cha_mod;  // spell save dc
	this.spell_attack_mod = this.prof_bonus + this.cha_mod;   // spell attack modifier
	this.spell_focus = this.musical_inst;                     // spell focus
	// class features
	this.class_specific_ability_1 = {
		"name": "", "desc": "", "benefits": "", "restore": "",
	};
	this.class_specific_ability_2 = {
		"name": "", "desc": ""
	};
	this.class_specific_ability_3 = {
		"name": "", "desc": ""
	};
	this.class_specific_ability_4 = {
		"name": "", "desc": ""
	};
	// class skills
	this.ability_score_improvement = {
		"levels": [4, 8, 12, 16, 19], "benefit": "Increase one ability score by 2, or increase 2 ability scores by 1."
	};
	this.extra_attack = "Beginning at 5th level, you can attack twice, instead of once, whenever you take the Attack action on your turn.";
	this.class_skill_1 = {
		"name": "", "desc": ""
	};
	this.class_skill_2 = {
		"name": "", "desc": ""
	};
	this.class_skill_3 = {
		"name": "", "desc": ""
	};
	this.class_skill_4 = {
		"name": "", "desc": ""
	};
	this.class_skill_5 = {
		"name": "", "desc": ""
	};
	this.class_skill_6 = {
		"name": "", "desc": ""
	};
	this.class_skill_7 = {
		"name": "", "desc": ""
	};
	// subclasses
	this.subclass_description = {
		"name": "", "desc": "",
	};
	this.subclass_1 = {
		"name": "path of the berserker",
		"desc": "For some barbarians, rage is a means to an end, that end being violence. The path of the berserker is a path of untrammeled fury, slick with blood. As you enter the berserker's rage, you thrill in the chaos of battle, heedless of your own health or well-being.",
		"feature_1": {
			"name": "", "desc": ""
		},
		"feature_2": {
			"name": "", "desc": ""
		},
		"feature_3": {
			"name": "", "desc": ""
		},
		"feature_4": {
			"name": "", "desc": ""
		}
	};
	this.subclass_2 = {
		"name": "", "desc": "", "feature_1": {
			"name": "", "desc": ""
		}, "feature_2": {
			"name": "", "desc": "",
		}, "feature_3": {
			"name": "", "desc": "",
		}, "feature_4": {
			"name": "", "desc": ""
		}, "feature_5": {
			"name": "", "desc": "",
		}
	};
}