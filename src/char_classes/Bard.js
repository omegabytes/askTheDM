import languageStrings from "./languageStrings";
let langEN = languageStrings.en.translation;
let char_classes = langEN.CLASSES;
let equipment = langEN.EQUIPMENT_PACKS;
"use strict";

// todo: add con mod param, prompt user for it
export class Bard {
	constructor(prof_bon, char_mod, con_mod) {
		this.prof_bonus = prof_bon;
		this.cha_mod = char_mod;
		this.con_mod = con_mod;
		// class_desc
		this.short_description = "A story teller or musician using his wits, magic, and lore to get out of or avoid tight situations."; // short
		this.long_description = "The bard uses music and magic to support and inspire the rest of the party. Bards can specialize in the College of Lore, which allows for a more versatile character who can learn some spells and become proficient in the player's choice of skills, or the College of Valor, which makes the bard more martial and combat-oriented, or a number of other directions based on their focus.";  // long
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
			"name": "bardic inspiration",
			"desc": "You can inspire others through stirring words or music. To do so, you use a Bonus Action on your turn to choose one creature other than yourself within 60 feet of you who can hear you. That creature gains one Bardic Inspiration die, a d6.",
			"benefits": "Once within the next 10 minutes, the creature can roll the die and add the number rolled to one ability check, Attack roll, or saving throw it makes.",
			"restore": "You can use this feature a number of times equal to your Charisma modifier. (a minimum of once). You regain any expended uses when you finish a Long Rest. Your Bardic Inspiration die changes when you reach certain levels in this class. The die becomes a d8 at 5th level, a d10 at 10th level, and a d12 at 15th level.",
		};
		this.class_specific_ability_2 = {
			"name": "jack of all trades",
			"desc": "Starting at 2nd level, you can add half your proficiency bonus, rounded down, to any ability check you make that doesn't already include your proficiency bonus."
		};
		this.class_specific_ability_3 = {
			"name": "song of rest",
			"desc": "Starting at 2nd level, you can revitalize wounded allies during a short rest. Any friendly creature that spent Hit Dice to regain hit points, each creature regains an extra 1d6 hit points. This extra hit points increase when you reach certain levels: 1d8 at 9th level, to 1d10 at 13th level, and to 1d12 at 17th level."
		};
		// class skills
		this.ability_score_improvement = {
			"levels": [4, 8, 12, 16, 19],
			"benefit": "Increase one ability score by 2, or increase 2 ability scores by 1."
		};
		this.extra_attack = "Bards do not get an extra attack by default. Please look at the subclass for bards, College of Valor for this ability.";
		this.class_skill_1 = {
			"name": "expertise",
			"desc": "At 3rd level, choose two of your skill proficiencies. Your proficiency bonus is doubled for any ability check you make that uses either of the chosen proficiencies. At 10th level, you can choose another two skill proficiencies to gain this benefit."
		};
		this.class_skill_2 = {
			"name": "font of inspiration",
			"desc": "Beginning when you reach 5th level, you regain all of your expended uses of Bardic Inspiration when you finish a short or Long Rest."
		};
		this.class_skill_3 = {
			"name": "countercharm",
			"desc": "At 6th level, as an action, you can start a performance that lasts until the end of your next turn. During that time, you and any friendly creatures within 30 feet of you have advantage on saving throws against being Frightened or Charmed. A creature must be able to hear you to gain this benefit. The performance ends early if you are Incapacitated or silenced or if you voluntarily end it (no action required)."
		};
		this.class_skill_4 = {
			"name": "magical secrets",
			"desc": "By 10th level, you have plundered magical knowledge from a wide spectrum of disciplines. Choose two Spells from any class, including this one. A spell you choose must be of a level you can cast or a cantrip. You learn two additional Spells from any class at 14th level and again at 18th level."
		};
		this.class_skill_5 = {
			"name": "superior inspiration",
			"desc": "At 20th level, when you roll initiative and have no uses of Bardic Inspiration left, you regain one use."
		};
		// subclasses
		this.subclass_description = {
			"name": "bard college",
			"desc": "At 3rd level, you delve into the advanced techniques of a bard college of your choice.",
		};
		this.subclass_1 = {
			"name": "college of lore",
			"desc": "Bards of the College of Lore know something about most things, collecting bits of knowledge from sources as diverse as scholarly tomes and peasant tales. Whether singing folk ballads in taverns or elaborate compositions in royal courts, these bards use their gifts to hold audiences spellbound.",
			"feature_1": {
				"name": "bonus proficiencies",
				"desc": "When you join the College of Lore at 3rd level, you gain proficiency with three skills of your choice."
			},
			"feature_2": {
				"name": "cutting words",
				"desc": "At 3rd level, you learn how to use your wit to distract, confuse, and otherwise sap the confidence and competence of others. When a creature that you can see within 60 feet of you makes an Attack roll, an ability check, or a damage roll, you can use your reaction to expend one of your uses of Bardic Inspiration, rolling a Bardic Inspiration die and subtracting the number rolled from the creature’s roll."
			},
			"feature_3": {
				"name": "additional magical secrets",
				"desc": "At 6th level, you learn two Spells of your choice from any class. A spell you choose must be of a level you can cast, as shown on the Bard table, or a cantrip. The chosen Spells count as bard Spells for you but don’t count against the number of bard Spells you know."
			},
			"feature_4": {
				"name": "peerless skill",
				"desc": "Starting at 14th level, when you make an ability check, you can expend one use of Bardic Inspiration. Roll a Bardic Inspiration die and add the number rolled to your ability check. You can choose to do so after you roll the die for the ability check, but before the GM tells you whether you succeed or fail."
			}
		};
		this.subclass_2 = {
			"name": "college of valor",
			"desc": "Bards of the College of Valor are daring skalds whose tales keep alive the memory of the great heroes of the past, and thereby inspire a new generation of heroes. These bards gather in mead halls or around great bonfires to sing the deeds of the mighty, both past and present.",
			"feature_1": {
				"name": "bonus proficiencies",
				"desc": "When you join the College of Valor at 3rd level, you gain proficiency with medium armor, shields, and martial weapons."
			},
			"feature_2": {
				"name": "combat inspiration",
				"desc": "At 3rd level, you learn to inspire others in battle. A creature that has a Bardic Inspiration die from you can roll that die and add the number rolled to a weapon damage roll it just made. Alternatively, when an attack roll is made against the creature, it can use its reaction to roll the Bardic Inspiration die and add the number rolled to its AC against that attack, after seeing the roll but before knowing whether it hits or misses.",
			},
			"feature_3": {
				"name": "extra attack",
				"desc": "Starting at 6th level, you can attack twice, instead of once, whenever you take the Attack action on your turn.",
			},
			"feature_4": {
				"name": "battle magic",
				"desc": "At 14th level, you have mastered the art of weaving spellcasting and weapon use into a single harmonious act. When you use your action to a cast a bard spell, you can make one weapon attack as a bonus action."
			}
		};
	}
}

let bard_class = new Bard();