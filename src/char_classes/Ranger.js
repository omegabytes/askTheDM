import languageStrings from "../languageStrings";
import dndLib from "../dndLib";

let langEN = languageStrings.en.translation;
let char_classes = langEN.CLASSES;
let equipment = langEN.EQUIPMENT_PACKS;
"use strict";

export class Ranger {
	constructor(prof_bon, char_mod, con_mod) {
		this.prof_bonus = prof_bon;
		this.char_mod = char_mod; //make sure to adjust this.char_mod to be this.str_mod or this.wis_mod, etc for each class respective
		this.con_mod = con_mod;
		//class_desc
		this.short_description = "one who uses a unique blend of wilderness knowledge and martial ability to be a deadly hunter, with a bow, a pet or melee weapons.";
		this.long_description = "a master of ranged combat, one with nature, d10, Dexterity and Strength, light and medium armor, shield, simple weapons, martial weapons.";
		//health
		this.hit_dice = "1dX";
		this.first_level = X + this.con_mod;
		this.avg_increase_per_level = AVG;
		//primary abilities, descending priority
		this.rec_abilities = ["", ""];
		this.rec_background = [""];
		this.rec_starting_spells = ["", "", ""];
		//proficiencies
		this.armor_prof = [""]; //fixme: items.itemType['light armor']
		this.weapon_prof = ["", "", ""]; //fixme: 'simple weapon' is item.itemType['simple melee weapon']
		this.tool_prof = []; //fixme: items.itemType['musical instrument'] for list of all musical instruments
		this.saving_throw_prof = ["", ""];
		this.skill_prof = {
			"quantity": 2, "skills_available": ["history", "insight", "medicine", "persuasion", "religion"]
		};
		//equipment
		this.starting_equipment = ["", ""];
		this.weapon_choices = ["", ""]; //fixme: 'simple weapon' is item.itemType['simple melee weapon'] use this to list out all 'simple weapon' weapons
		this.equip_pack_1 = dndLib.getEquipmentPack("");
		this.equip_pack_2 = dndLib.getEquipmentPack("");
		//other equipment
		//put recommended items first, followed by all possible items?
		this.extra_equipment = ["", ""];
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
		this.spell_focus = "";                     // spell focus
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
			"levels": [4, 8, 12, 16, 19],
			"benefit": "Increase one ability score by 2, or increase 2 ability scores by 1."
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
			"name": "", "desc": "", "feature_1": {
				"name": "", "desc": ""
			}, "feature_2": {
				"name": "", "desc": ""
			}, "feature_3": {
				"name": "", "desc": ""
			}, "feature_4": {
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
}