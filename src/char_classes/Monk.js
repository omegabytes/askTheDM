import languageStrings from "../languageStrings";
import dndLib from "../dndLib";

let langEN = languageStrings.en.translation;
let char_classes = langEN.CLASSES;
let equipment = langEN.EQUIPMENT_PACKS;
"use strict";

export class Monk {
	constructor(prof_bon, char_mod, wis_mod, con_mod) {
		this.prof_bonus = prof_bon;
		this.dex_mod = char_mod; //make sure to adjust this.char_mod to be this.str_mod or this.wis_mod, etc for each class respective
		this.con_mod = con_mod;
		this.wis_mod = wis_mod;
		//class_desc
		this.short_description = "martial artist pulling on the power of his own body to produce impressive results.";
		this.long_description = "a master of martial arts, skilled with fighting hands and martial monk weapons, d8, Dexterity and Strength (At lvl 14 monk proficiency in all) simple weapons, shortswords.";
		//health
		this.hit_dice = "1d8";
		this.first_level = 8 + this.con_mod;
		this.avg_increase_per_level = 5;
		//primary abilities, descending priority
		this.rec_abilities = ["dexterity", "wisdom"];
		this.rec_background = ["hermit"];
		this.rec_starting_spells = "monks do not have the ability to cast spells.";
		//proficiencies
		this.armor_prof = "monks do not have armor proficiency."; //fixme: items.itemType['light armor']
		this.weapon_prof = ["simple weapons", "short swords"]; //fixme: 'simple weapon' is item.itemType['simple melee weapon']
		this.tool_prof = ["artisan\'s tools", "musical instrument"]; //fixme: items.itemType['musical instrument'] for list of all musical instruments
		this.saving_throw_prof = ["strength", "dexterity"];
		this.skill_prof = {
			"quantity": 2, "skills_available": ["acrobatics", "athletics", "history", "insight", "religion", "stealth"]
		};
		//equipment
		this.starting_equipment = ["10 darts"];
		this.weapon_choices = ["shortsword", "simple weapon"]; //fixme: 'simple weapon' is item.itemType['simple melee weapon'] use this to list out all 'simple weapon' weapons
		this.equip_pack_1 = dndLib.getEquipmentPack("dungeoneer\'s pack");
		this.equip_pack_2 = dndLib.getEquipmentPack("explorer\'s pack");
		//other equipment
		//put recommended items first, followed by all possible items?
		this.extra_equipment = "";
		// list of spells
		this.class_spells = function () { //todo: implement this function
			// gets array of spells
			// iterate through the list of spells in spells.js, grabbing any spell where
			// [spell].spellClass.bard == true
			// this just compiles an array of spell objects, we will use other methods for user input/output
		}
		// spellcasting ability
		this.spell_save_dc = "";  // spell save dc
		this.spell_attack_mod = "";   // spell attack modifier
		this.spell_focus = "";                     // spell focus
		// class features
		this.class_specific_ability_1 = { // fixme: might want to store the wis_mod for this class
			"name": "unarmored defense",
			"desc": "At 1st level, if you wear no armor nor shield your AC is " + 10 + this.dex_mod + this.wis_mod + ", this is lost and replaced by the normal armor AC and shield bonus if you equip armor or a shield."
		};
		this.class_specific_ability_2 = {
			"name": "Martial Arts",
			"desc": "You have mastery over unarmed combat and certain types of weapons called Monk weapons which are short swords or any simple melee weapon that does not have the Heavy or Two-Handed property. You gain the following benefits while you are not using armor, nor shield, and only using monk weapons or are unarmed.",
			"benefits": ["You can use your DEX modifier instead of the STR modifier for attacks and damage rolls while using unarmed strikes or your monk weapon.", "Your unarmed strikes deal 1d4 damage, this d4 changes as you gain monk levels: to a d6 at level 5, to a d8 at level 11 and to a d10 at level 17. You also can use this die to replace your monk weapon strike damage.", "When you use your attack action to use your monk weapon or an unarmed strike, you can use your bonus action to deal an additional unarmed strike, if you have not used your bonus action yet."]
		};
		this.class_specific_ability_3 = {
			"name": "Ki",
			"desc": "Starting at 2nd level, your training allows you to harness the mystic energy of ki. Your access to this energy is represented by a number of ki points. Your monk level determines the number of points you have, as shown in the Ki Points column of the Monk table, You can spend these points to fuel various ki features. You start knowing three such features: Flurry of Blows, Patient Defense, and Step of the Wind, You learn more ki features as you gain levels in this class, When you spend a ki point, it is unavailable until you finish a short or long rest, at the end of which you draw all of your expended ki back into yourself. You must spend at least 30 minutes of the rest meditating to regain your ki points, Some of your ki features require your target to make a saving throw to resist the feature's effects.",
			"ki_saving_throw": 8 + this.prof_bonus + this.wis_mod,
			"feature_1": {
				"name": "Flurry of Blows",
				"desc": "Immediately after you take the Attack action on your turn, you can spend 1 ki point to make two unarmed strikes as a bonus action."
			},
			"feature_2": {
				"name": "Patient Defense",
				"desc": "You can spend 1 ki point to take the Dodge action as a bonus action on your turn."
			},
			"feature_3": {
				"name": "Step of the Wind",
				"desc": "You can spend 1 ki point to take the Disengage or Dash action as a bonus action on your turn, and your jump distance is doubled for the turn."
			}
		};
		this.class_specific_ability_4 = {
			"name": "Unarmored Movement",
			"desc": "Starting at 2nd level, your speed increases by 10 feet while you are not wearing armor or wielding a shield. At 9th level, you gain the ability to move along vertical surfaces and across liquids on your turn without falling during the move.",
			"movement_inc_per_lvl": [{"level": 2, "speed": 10}, {"level": 6, "speed": 15}, {
				"level": 10, "speed": 20
			}, {"level": 14, "speed": 25}, {"level": 18, "speed": 30}]
		};
		this.class_specific_ability_5 = { // fixme: consider storing the user's char level
			"name": "Deflect Missiles",
			"desc": "Starting at 3rd level, you can use your reaction to deflect or catch the missile when you are hit by a ranged weapon attack. When you do so, the damage you take from the attack is reduced by 1d10 " + this.dex_mod + " your monk level. If you reduce the damage to 0, you can catch the missile if it is small enough for you to hold in one hand and you have at least one hand free. If you catch a missile in this way, you can spend 1 ki point to make a ranged attack with the weapon or piece of ammunition you just caught, as part of the same reaction. You make this attack with proficiency, regardless of your weapon proficiencies, and the missile counts as a monk weapon for the attack."
		};
		// class skills
		this.ability_score_improvement = {
			"levels": [4, 8, 12, 16, 19],
			"benefit": "Increase one ability score by 2, or increase 2 ability scores by 1."
		};
		this.extra_attack = "Beginning at 5th level, you can attack twice, instead of once, whenever you take the Attack action on your turn.";
		this.class_skill_1 = {
			"name": "slow fall",
			"desc": "Beginning at 4th level, you can use your reaction when you fall to reduce any falling damage you take by an amount equal to five times your monk level."
		};
		this.class_skill_2 = {
			"name": "Stunning Strike",
			"desc": "Starting at 5th level, you can interfere with the flow of ki in an opponent’s body. When you hit another creature with a melee weapon attack, you can spend 1 ki point to attempt a stunning strike. The target must succeed on a Constitution saving throw or be stunned until the end of your next turn."
		};
		this.class_skill_3 = {
			"name": "Ki Empowered Strikes",
			"desc": "Starting at 6th level, your unarmed strikes count as magical for the purpose of overcoming resistance and immunity to non-magical attacks and damage."
		};
		this.class_skill_4 = {
			"name": "Evasion",
			"desc": "At 7th level, your instinctive agility lets you dodge out of the way of certain area effects, such as a blue dragon’s lightning breath or a fireball spell. When you are subjected to an effect that allows you to make a Dexterity saving throw to take only half damage, you instead take no damage if you succeed on the saving throw, and only half damage if you fail."
		};
		this.class_skill_5 = {
			"name": "Stillness of Mind",
			"desc": "Starting at 7th level, you can use your action to end one effect on yourself that is causing you to be charmed or frightened."
		};
		this.class_skill_6 = {
			"name": "Purity of Body",
			"desc": "At 10th level, your mastery of the ki flowing through you makes you immune to disease and poison."
		};
		this.class_skill_7 = {
			"name": "Tongue of the Sun and Moon",
			"desc": "Starting at 13th level, you learn to touch the ki of other minds so that you understand all spoken languages. Moreover, any creature that can understand a language can understand what you say."
		};
		this.class_skill_8 = {
			"name": "Diamond Soul",
			"desc": "Beginning at 14th level, your mastery of ki grants you proficiency in all saving throws. Additionally, whenever you make a saving throw and fail, you can spend 1 ki point to reroll it and take the second result."
		};
		this.class_skill_9 = {
			"name": "Timeless Body",
			"desc": "At 15th level, your ki sustains you so that you suffer none of the frailty of old age, and you can't be aged magically. You can still die of old age, however. In addition, you no longer need food or water."
		};
		this.class_skill_10 = {
			"name": "Empty Body",
			"desc": "Beginning at 18th level, you can use your action to spend 4 ki points to become invisible for 1 minute. During that time, you also have resistance to all damage but force damage. Additionally, you can spend 8 ki points to cast the astral projection spell, without needing material components. When you do so, you can’t take any other creatures with you."
		};
		this.class_skill_11 = {
			"name": "Perfect Self",
			"desc": "At 20th level, when you roll for initiative and have no ki points remaining, you regain 4 ki points."
		};
		// subclasses
		this.subclass_description = {
			"name": "Monastic Traditions",
			"desc": "Three traditions of monastic pursuit are common in the monasteries scattered across the multiverse. Most monasteries practice one tradition exclusively, but a few honor the three traditions and instruct each monk according to his or her aptitude and interest. All three traditions rely on the same basic techniques, diverging as the student grows more adept. Thus, a monk need choose a tradition only upon reaching 3rd level.",
		};
		this.subclass_1 = {
			"name": "Way of the Open Hand",
			"desc": "Monks of the Way of the Open Hand are the ultimate masters of martial arts combat, whether armed or unarmed. They learn techniques to push and trip their opponents, manipulate ki to heal damage to their bodies, and practice advanced meditation that can protect them from harm. ",
			"feature_1": {
				"name": "Open Hand Technique",
				"desc": "Starting when you choose this tradition at 3rd level, you can manipulate your enemy’s ki when you harness your own. Whenever you hit a creature with one of the attacks granted by your Flurry of Blows, you can impose one of the following effects on that target.",
				"effects": ["It must succeed on a Dexterity saving throw or be knocked prone.", "It must make a Strength saving throw. If it fails, you can push it up to 15 feet away from you.", "It can’t take reactions until the end of your next turn."]
			},
			"feature_2": {
				"name": "Wholeness of Body",
				"desc": "At 6th level, you gain the ability to heal yourself. As an action, you can regain hit points equal to three times your monk level. You must finish a long rest before you can use this feature again."
			},
			"feature_3": {
				"name": "Tranquility",
				"desc": "Beginning at 11th level, you can enter a special meditation that surrounds you with an aura of peace. At the end of a long rest, you gain the effect of a sanctuary spell that lasts until the start of your next long rest (the spell can end early as normal). The saving throw DC for the spell equals " + 8 + this.wis_mod + this.prof_bonus + "."
			},
			"feature_4": {
				"name": "Quivering Palm",
				"desc": "At 17th level, you gain the ability to set up lethal vibrations in someone’s body. When you hit a creature with an unarmed strike, you can spend 3 ki points to start these imperceptible vibrations, which last for a number of days equal to your monk level. The vibrations are harmless unless you use your action to end them. To do so, you and the target must be on the same plane of existence. When you use this action, the creature must make a Constitution saving throw. If it fails, it is reduced to 0 hit points. If it succeeds, it takes 10d10 necrotic damage. You can have only one creature under the effect of this feature at a time. You can choose to end the vibrations harmlessly without using an action."
			}
		};
		this.subclass_2 = {
			"name": "Way of the Shadow",
			"desc": "Monks of the Way of Shadow follow a tradition that values stealth and subterfuge. These monks might be called ninjas or shadowdancers, and they serve as spies and assassins. Sometimes the members of a ninja monastery are family members, forming a clan sworn to secrecy about their arts and missions. Other monasteries are more like thieves’ guilds, hiring out their services to nobles, rich merchants, or anyone else who can pay their fees. Regardless of their methods, the heads of these monasteries expect the unquestioning obedience of their students.",
			"feature_1": {
				"name": "Shadow Arts",
				"desc": "Starting when you choose this tradition at 3rd level, you can use your ki to duplicate the effects of certain spells. As an action, you can spend 2 ki points to cast darkness, darkvision, pass without trace, or silence, without providing material components. Additionally, you gain the minor illusion cantrip if you don’t already know it."
			},
			"feature_2": {
				"name": "Shadow Step",
				"desc": "At 6th level, you gain the ability to step from one shadow into another. When you are in dim light or darkness, as a bonus action you can teleport up to 60 feet to an unoccupied space you can see that is also in dim light or darkness. You then have advantage on the first melee attack you make before the end of the turn.",
			},
			"feature_3": {
				"name": "Cloak of the Shadows",
				"desc": "By 11th level, you have learned to become one with the shadows. When you are in an area of dim light or darkness, you can use your action to become invisible. You remain invisible until you make an attack, cast a spell, or are in an area of bright light.",
			},
			"feature_4": {
				"name": "Opportunist",
				"desc": "At 17th level, you can exploit a creature's momentary distraction when it is hit by an attack. Whenever a creature within 5 feet of you is hit by an attack made by a creature other than you, you can use your reaction to make a melee attack against that creature."
			}
		};
		this.subclass_3 = {
			"name": "Way of the Four Elements",
			"desc": "You follow a monastic tradition that teaches you to harness the elements. When you focus your ki, you can align yourself with the forces of creation and bend the four elements to your will, using them as an extension of your body. Some members of this tradition dedicate themselves to a single element, but others weave the elements together. Many monks of this tradition tattoo their bodies with representations of their ki powers, commonly imagined as coiling dragons, but also as phoenixes, fish, plants, mountains, and cresting waves.",
			"feature_1": {
				"name": "Disciple of the Elements",
				"desc": "When you choose this tradition at 3rd level, you learn magical disciplines that harness the power of the four elements. A discipline requires you to spend ki points each time you use it. You know the Elemental Attunement discipline and one other elemental discipline of your choice, which are detailed in the “Elemental Disciplines” section below. You learn one additional elemental discipline of your choice at 6th, 11th, and 17th level. Whenever you learn a new elemental discipline, you can also replace one elemental discipline that you already know with a different discipline.",
				"spellCasting": {
					"desc": "Some elemental disciplines allow you to cast spells. Once you reach 5th level in this class, you can spend additional ki points to increase the level of an elemental discipline spell that you cast, provided that the spell has an enhanced effect at a higher level, as burning hands does. The spell's level increases by 1 for each additional ki point you spend. The maximum number of ki points you can spend to cast a spell in this way (including its base ki point cost and any additional ki points you spend to increase its level) is determined by your monk level.",
					"spellTable": [{"level": 5, "max_ki_points": 3}, {"level": 9, "max_ki_points": 4}, {
						"level": 13, "max_ki_points": 5
					}, {"level": 17, "max_ki_points": 6}] // fixme: here level is the minimum class level, ie: first element here is levels 5-8 inclusive
				}
			},
			"feature_2": {
				"name": "Elemental Disciplines",
				"desc": "The elemental disciplines are presented in alphabetical order. If a discipline requires a level, you must be that level in this class to learn the discipline.",
				"disciplines": [{
					"name": "Elemental Attunement",
					"desc": "You can use your action to briefly control elemental forces nearby, causing one of the following effects of your choice.",
					"list": ["Create a harmless, instantaneous sensory effect related to air, earth, fire, or water, such as a shower of sparks, a puff of wind, a spray of light mist, or a gentle rumbling of stone.", "Instantaneously light or snuff out a candle, a torch, or a small campfire.", "Chill or warm up to 1 pound of nonliving material for up to 1 hour.", "Cause earth, fire, water, or mist that can fit within a 1-foot cube to shape itself into a crude form you designate for 1 minute."]
				}, {
					"name": "Fangs of the Fire Snake",
					"desc": "When you use the Attack action on your turn, you can spend 1 ki point to cause tendrils of flame to stretch out from your fists and feet. Your reach with your unarmed strikes increases by 10 feet for that action, as well as the rest of the turn. A hit with such an attack deals fire damage instead of bludgeoning damage, and if you spend 1 ki point when the attack hits, it also deals an extra 1d10 fire damage."
				}, {
					"name": "Fist of Four Thunders", "desc": "You can spend 2 ki points to cast thunderwave."
				}, {
					"name": "Fist of Unbroken Air",
					"desc": "You can create a blast of compressed air that strikes like a mighty fist. As an action, you can spend 2 ki points and choose a creature within 30 feet of you. That creature must make a Strength saving throw. On a failed save, the creature takes 3d10 bludgeoning damage, plus an extra 1d10 bludgeoning damage for each additional ki point you spend, and you can push the creature up to 20 feet away from you and knock it prone. On a successful save, the creature takes half as much damage, and you don’t push it or knock it prone."
				}, {
					"name": "Rush of the Gale Spirits", "desc": "You can spend 2 ki points to cast gust of wind."
				}, {
					"name": "Shape the Flowing River",
					"desc": "As an action, you can spend 1 ki point to choose an area of ice or water no larger than 30 feet on a side within 120 feet of you. You can change water to ice within the area and vice versa, and you can reshape ice in the area in any manner you choose. You can raise or lower the ice’s elevation, create or fill in a trench, erect or flatten a wall, or form a pillar. The extent of any such changes can’t exceed half the area’s largest dimension. For example, if you affect a 30-foot square, you can create a pillar up to 15 feet high, raise or lower the square’s elevation by up to 15 feet, dig a trench up to 15 feet deep, and so on. You can’t shape the ice to trap or injure a creature in the area."
				}, {
					"name": "Sweeping Cinder Strike", "desc": "You can spend 2 ki points to cast burning hands."
				}, {
					"name": "Water Whip",
					"desc": "You can spend 2 ki points as a action to create a whip of water that shoves and pulls a creature to unbalance it. A creature that you can see that is within 30 feet of you must make a Dexterity saving throw. On a failed save, the creature takes 3d10 bludgeoning damage, plus an extra 1d10 bludgeoning damage for each additional ki point you spend, and you can either knock it prone or pull it up to 25 feet closer to you. On a successful save, the creature takes half as much damage, and you don’t pull it or knock it prone."
				}, {
					"name": "Clench of the North Wind",
					"desc": "You can spend 3 ki points to cast hold person.",
					"level_requirement": 6
				}, {
					"name": "Gong of the Summit",
					"desc": "You can spend 3 ki points to cast shatter.",
					"level_requirement": 6
				}, {
					"name": "Flames of the Phoenix",
					"desc": "You can spend 4 ki points to cast fireball.",
					"level_requirement": 11
				}, {
					"name": "Mist Stance",
					"desc": "You can spend 4 ki points to cast gaseous form, targeting yourself.",
					"level_requirement": 11
				}, {
					"name": "Ride the Wind",
					"desc": "You can spend 4 ki points to cast fly, targeting yourself.",
					"level_requirement": 11
				}, {
					"name": "Eternal Mountain Defense",
					"desc": "You can spend 5 ki points to cast stoneskin, targeting yourself.",
					"level_requirement": 17
				}, {
					"name": "Breath of Winter",
					"desc": "You can spend 6 ki points to cast cone of cold.",
					"level_requirement": 17
				}, {
					"name": "River of Hungry Flame",
					"desc": "You can spend 5 ki points to cast wall of fire.",
					"level_requirement": 17
				}, {
					"name": "Wave of Rolling Earth",
					"desc": "You can spend 6 ki points to cast wall of stone.",
					"level_requirement": 17
				}]
			}
		};
		this.subclass_4 = {
			"name": "Way of the Long Death",
			"desc": "Monks of the way of the Long Death are obsessed with the meaning and mechanics of dying. They capture creatures and prepare elaborate experiments to capture, record, and understand the moments of their demise. They then use this knowledge to guide their understanding of martial arts, yielding a deadly fighting style.",
			"feature_1": {
				"name": "Touch of Death",
				"desc": "At 3rd level, your study of death allows you to extract vitality from another creature as it nears its demise. When you reduce a creature within 5ft of you to 0 hit points, you gain temporary hit points equal to " + this.wis_mod + " your monk level (minimum 1)."
			},
			"feature_2": {
				"name": "Hour of Reaping",
				"desc": "At 6th level, you gain the ability to unsettle or terrify those around you. When you take this action, each creature within 30ft of you that can see you must succeed on a Wisdom saving throw or be frightened of you until the end of your next turn.",
			},
			"feature_3": {
				"name": "Mastery of Death",
				"desc": "Beginning at 11th level, you use your familiarity with death to escape its grasp. When you are reduced to 0 hit points, you can expend 1 ki point (no action required) to have 1 hit point instead.",
			},
			"feature_4": {
				"name": "Touch of the Long Death",
				"desc": "At 17th level, as an action, you touch one creature within 5ft of you, and expend 1 to 10 ki points. The target must make a Constitution saving throw. On a failed save, it takes 2d10 necrotic damage per ki point spent on a failed save, or half as much damage on a successful one."
			}
		};
	}
}

let monk_class = new Monk();