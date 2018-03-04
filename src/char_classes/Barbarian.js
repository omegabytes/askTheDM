import languageStrings from "./languageStrings";
let langEN = languageStrings.en.translation;
let char_classes = langEN.CLASSES;
let equipment = langEN.EQUIPMENT_PACKS;
"use strict";

// todo: add con mod param, prompt user for it
export class Barbarian {
	constructor(prof_bon, char_mod, con_mod) {
		this.prof_bonus = prof_bon;
		this.str_mod = char_mod;
		this.con_mod = con_mod;
		//class_desc
		this.short_description = "The relentless combatant, fueled by fury or it's totem bonds with animals. In tune with the natural order.";
		this.long_description = "The barbarian is a primal warrior who prefers to charge in to engage foes in melee. They can follow either the Path of the Berserker, focusing on dealing as much damage as possible in melee combat, or the Path of the Totem Warrior, accepting an animal as a spiritual guide for a more druid-like experience.";
		//health
		this.hit_dice = "1d12";
		this.first_level = 12 + this.con_mod;
		this.avg_increase_per_level = 7;
		//primary abilities, descending priority
		this.rec_abilities = ["Strength", "Constitution"];
		this.rec_background = ["Outlander"];
		this.rec_starting_spells = "Barbarians do not have the ability to cast spells.";
		//proficiencies
		this.armor_prof = ["light armor", "medium armor", "shields"]; //armor
		this.weapon_prof = ["simple weapons", "martial weapons"];
		this.tool_prof = [];
		this.saving_throw_prof = ["Strength", "Constitution"];
		this.skill_prof = ["Animal Handling", "Athletics", "Intimidation", "Nature", "Perception", "Survival"];
		//equipment
		this.starting_equipment = ["explorer\'s pack", "four javelins"];
		this.weapon_choices = ["greataxe", "martial melee weapons", "two handaxes", "simple weapons"]; //fixme: 'simple weapon' is item.itemType['simple melee weapon'] use this to list out all 'simple weapon' weapons
		this.equip_pack_1 = { // fixme: split these into [{item name : quantity},{...}]
			"name": "explorer\'s pack",
			"items": [{"name": "backpack", "quantity": 1}, {"name": "bedroll", "quantity": 1}, {
				"name": "mess kit",
				"quantity": 1
			}, {"name": "tinderbox", "quantity": 1}, {"name": "torches", "quantity": 10}, {
				"name": "rations",
				"quantity": 10
			}, {"name": "waterskin", "quantity": 1}, {
				"name": "hempen rope: 50ft",
				"quantity": 1
			}, {"name": "gold pieces", "quantity": 10}]
		};
		//other equipment
		//put recommended items first, followed by all possible items?
		this.extra_equipment = ["", ""];
		// class features
		this.class_specific_ability_1 = {
			"name": "rage",
			"description": "You fight with primal ferocity. On your turn, you can enter a rage as a bonus action. Your rage lasts for 1 minute. If you are able to cast spells, you can't cast or concentrate on them while raging. Your rage ends early if you are knocked unconscious or if your turn ends and you havent attacked a hostile creature since your last turn or havent taken damage since then.",
			"benefits": "You have advantage on Strength checks and Strength saving throws. When you make a melee weapon attack using Strength, you gain a bonus to the damage roll that increases based on your barbarian level. You have resistance to bludgeoning, piercing, and slashing damage.",
			"restore": "Once you have used all your rage, which is based on your player level. You must finish a long rest before you can rage again.",
			"rage_per_level": [{
				"level": 1, "rages": 2
			}, {
				"level": 3, "rages": 3
			}, {
				"level": 6, "rages": 4
			}, {
				"level": 12, "rages": 5
			}, {
				"level": 17, "rages": 6
			}, {
				"level": 20, "rages": "unlimited"
			}],
			"rage_damage": [{
				"level": 1, "damage": 2
			}, {
				"level": 9, "damage": 3
			}, {
				"level": 16, "damage": 4
			}]
		};
		this.class_specific_ability_2 = {
			"name": "unarmored defense",
			"desc": "While you are not wearing any armor, your armor class equals 10 plus your Dexterity modifier. plus your Constitution modifier. You can still use a shield and have this benefit."
		};
		this.class_specific_ability_3 = {
			"name": "reckless attack",
			"desc": "Starting at 2nd level, you can throw aside all concern for defense to attack with fierce desperation. When you make your first attack on your turn, you can decide to attack recklessly. Doing so gives you advantage on melee weapon attack rolls using Strength during this turn, but attack rolls against you have advantage until your next turn."
		};
		this.class_specific_ability_4 = {
			"name": "danger sense",
			"desc": "At 2nd level, you gain an uncanny sense of when things nearby arent as they should be, giving you an edge when you dodge away from danger. You have advantage on Dexterity saving throws against effects that you can see, such as traps and spells. To gain this benefit, you can't be blinded, deafened, or incapacitated."
		};
		// class skills
		this.ability_score_improvement = {
			"levels": [4, 8, 12, 16, 19],
			"benefit": "Increase one ability score by 2, or increase 2 ability scores by 1."
		};
		this.extra_attack = "Beginning at 5th level, you can attack twice, instead of once, whenever you take the Attack action on your turn.";
		this.class_skill_1 = {
			"name": "fast movement",
			"desc": "Starting at 5th level, your speed increases by 10ft while you arent wearing heavy armor."
		};
		this.class_skill_2 = {
			"name": "feral instinct",
			"desc": "By 7th level, your instincts are so honed that you have advantage on initiative rolls. Additionally, if you are surprised at the beginning of combat and arent incapacitated, you can act normally on your first turn, but only if you enter your rage before doing anything else on that turn."
		};
		this.class_skill_3 = {
			"name": "brutal critical",
			"desc": "Beginning at 9th level, you can roll one additional weapon damage die when determining the extra damage for a critical hit with a melee attack. This increases to two additional dice at 13th level, and three additional dice at 17th level."
		};
		this.class_skill_4 = {
			"name": "relentless rage",
			"desc": "Starting at 11th level, your rage can keep you fighting despite grievous wounds. If you drop to 0 hit points while you are raging and dont die outright, you can make a DC 10 Constitution saving throw. If you succeed, you drop to 1 hit point instead. Each time you use this feature after the first, the DC increases by 5. When you finish a short or long rest, the DC resets to 10."
		};
		this.class_skill_5 = {
			"name": "persistent rage",
			"desc": "Beginning at 15th level, your rage is so fierce that it ends early only if you fall unconscious or if you choose to end it."
		};
		this.class_skill_6 = {
			"name": "indomitable might",
			"desc": "Beginning at 18th level, if your total for a Strength check is less than your Strength score, you can use that score in place of the total."
		};
		this.class_skill_7 = {
			"name": "primal champion",
			"desc": "At 20th level, you embody the power of the wilds. Your Strength and Constitution scores increase by 4. Your maximum for those scores is now 24."
		};
		// subclasses
		this.subclass_description = {
			"name": "primal path",
			"desc": "At 3rd level, you choose a path that shapes the nature of your rage. Choose the path of the berserker or the path of the totem warrior. Your choice grants you features at 3rd level and again at 6th, 10th and 14th levels.",
		};
		this.subclass_1 = {
			"name": "path of the berserker",
			"desc": "For some barbarians, rage is a means to an end, that end being violence. The path of the berserker is a path of untrammeled fury, slick with blood. As you enter the berserker's rage, you thrill in the chaos of battle, heedless of your own health or well-being.",
			"feature_1": {
				"name": "frenzy",
				"desc": "Starting when you choose this path at 3rd level, you can go into a frenzy when you rage. If you do so, for the duration of your rage you can make a single melee weapon attack as a bonus action on each of your turns after this one. When your rage ends, you suffer one level of exhaustion."
			},
			"feature_2": {
				"name": "mindless rage",
				"desc": "Beginning at 6th level, you cant be charmed or frightened while raging. If you are charmed or frightened when you enter your rage, the effect is suspended for the duration of the rage."
			},
			"feature_3": {
				"name": "intimidating presence",
				"desc": "Beginning at 10th level, you can use your action to frighten someone with your menacing presence. When you do so, choose one creature that you can see within 30ft of you. IF the creature can see or hear you, it must succeed on a Wisdom saving throw, the DC is equal to 8 plus your proficiency bonus plus your Charisma modifier., or be frightened of you until the end of your next turn. On subsequent turns, you can use your action to extend the duration of this effect on the frightened creature until the end of your next turn. This effect ends if the creature ends its turn out of line of sight or more than 60ft away from you. If the creature succeeds on its saving throw, you cant use this feature on that creature again for 24 hours."
			},
			"feature_4": {
				"name": "retaliation",
				"desc": "Starting at 14th level, when you take damage from a creature that is within 5ft of you, you can use your reaction to make a melee weapon attack against that creature."
			}
		};
		this.subclass_2 = {
			"name": "path of the totem warrior",
			"desc": "The path of the totem warrior is a spiritual journey as the barbarian accepts a spirit animal as a guide, protector, and inspiration. In battle, your totem spirit fills you with supernatural might, adding magical fuel to your barbarian rage.",
			"feature_1": {
				"name": "spirit seeker",
				"desc": "At 3rd level when you adopt this path, you gain the ability to cast the beast sense and speak with animals spells, but only as rituals."
			},
			"feature_2": {
				"name": "totem spirit",
				"desc": "At 3rd level, when you adopt this path, you choose a totem spirit and gain its feature. You must make or acquire a physical totem object, an amulet or similar adornment, that incorporates fur or feathers, claws, teeth, or bones of the totem animal. At your option, you also gain minor physical attributes that are reminiscent of your totem spirit.",
				"animal_spirits": {
					"bear": "The spirit of the bear makes you tough enough to stand up to any punishment. While raging, you have resistance to all damage except psychic damage.",
					"eagle": "The spirit of the eagle makes you into a predator who can weave through the fray with ease. While youre raging and arent wearing heavy armor, other creatures have disadvantage on opportunity attack rolls against you, and you can use the Dash action as a bonus action on your turn.",
					"wolf": "The spirit of the wolf makes you a leader of hunters. While youre raging your friends have advantage on melee attack rolls against any creature within 5ft of you that is hostile to you."
				}
			},
			"feature_3": {
				"name": "aspect of the beast",
				"desc": "At 6th level, you gain a magical benefit based on the totem animal of your choice. You can choose the same animal you selected at 3rd level or a different one.",
				"animal_spirits": {
					"bear": "You gain the might of a bear. Your carrying capacity is doubled, and you have advantage on Strength checks made to push, pull, lift, or break objects.",
					"eagle": "You gain the eyesight of an eagle. You can see up to 1 mile away with no difficulty, able to discern even fine details as though looking at something no more than 100ft away from you. Additionally, dim light doesnt impose disadvantage on your Wisdom(Perception) checks.",
					"wolf": "You gain the hunting sensibilities of a wolf. You can track other creatures while traveling at a fast pace, and you can move stealthily while traveling at a normal pace."
				}
			},
			"feature_4": {
				"name": "spirit walker",
				"desc": "At 10th level, you can cast the commune with nature spell, but only as a ritual. When you do so, a spirit version of one of the animals you chose for Totem Spirit or Aspect of the Beast appears to you to convey the information you seek."
			},
			"feature_5": {
				"name": "totemic attunement",
				"desc": "At 14th level, you gain a magical benefit based on a totem animal of your choice. You can choose the same animal you selected previously or a different one.",
				"animal_spirits": {
					"bear": "While youre raging, any creature within 5ft of you thats hostile to you has disadvantage on attack rolls against targets other than you or another character with this feature. An enemy is immune to this effect if it cant see or hear you or if it cant be frightened.",
					"eagle": "While raging, you have a flying speed equal to your current walking speed. This benefit works only in short bursts: you fall if you end your turn in the air and nothing else is holding you aloft.",
					"wolf": "While youre raging, you can use a bonus action on your turn to knock a Large or smaller creature prone when you hit it with a melee weapon attack."
				}
			}
		};
	}
}

let barbarian_class = new Barbarian();