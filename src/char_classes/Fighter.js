import languageStrings from "../languageStrings";
import dndLib from "../dndLib";

let langEN = languageStrings.en.translation;
let char_classes = langEN.CLASSES;
let equipment = langEN.EQUIPMENT_PACKS;
"use strict";

export class Fighter {
	constructor(prof_bon, char_mod, con_mod) {
		this.prof_bonus = prof_bon;
		this.str_mod = char_mod; //make sure to adjust this.char_mod to be this.str_mod or this.wis_mod, etc for each class respective
		this.con_mod = con_mod;
		//class_desc
		this.short_description = "skilled combatant or strategist typically relying on his heavy armor and weapons to cut down their enemies. His training gives him unique abilities.";
		this.long_description = "a master of martial combat, skilled with a variety of weapons and armours, d10, Strength and Constitution, all armor, shields, simple and martial weapons.";
		//health
		this.hit_dice = "1d10";
		this.first_level = 10 + this.con_mod;
		this.avg_increase_per_level = 6;
		//primary abilities, descending priority
		this.rec_abilities = ["strength", "constitution", "intelligence (if you choose eldritch knight martial archetype)"]; //fixme: add caveat in code for the sentence in parenthesis, regarding intelligence
		this.rec_background = ["soldier"];
		this.rec_starting_spells = { // fixme: Alex we need to take a look at this, this seems like an okay way to store this information to be accessed later
			"desc": "See Eldritch Knight martial archetype for information on spells for Fighters.",
			"list": {
				"rec_cantrips": ["booming blade", "poison spray"],
				"rec_1st_spells": ["absorb elementals", "protection from evil and good", "find familiar"]
			}
		};
		//proficiencies
		this.armor_prof = ["all armor", "shields"]; //fixme: items.itemType['light armor']
		this.weapon_prof = ["simple weapons", "martial weapons"]; //fixme: 'simple weapon' is item.itemType['simple melee weapon']
		this.tool_prof = []; //fixme: items.itemType['musical instrument'] for list of all musical instruments
		this.saving_throw_prof = ["strength", "constitution"];
		this.skill_prof = {
			"quantity": 2,
			"skills_available": ["acrobatics", "animal handling", "athletics", "history", "intimidation", "perception", "survival"]
		};
		//equipment
		this.starting_equipment = [];
		this.armor_choices = ["chain mail", "leather armor"];
		this.weapon_choices = ["longbow with 20 arrows", "martial weapon and shield", "two martial weapons", "light crossbow and 20 bolts", "two handaxes"]; //fixme: 'simple weapon' is item.itemType['simple melee weapon'] use this to list out all 'simple weapon' weapons
		//fixme: take a look at Fighter.weapon_choices: do we want to break out weapons with ammo, do we want to break apart choices that are tied together(ie:martial weapon and shield), if choices come in multiples do we want to add a {quantity} attribute
		this.equip_pack_1 = dndLib.getEquipmentPack("dungeoneer\'s pack");
		this.equip_pack_2 = dndLib.getEquipmentPack("explorer\'s pack");
		//other equipment
		//put recommended items first, followed by all possible items?
		this.extra_equipment = [];
		// list of spells
		this.class_spells = function () { //todo: implement this function
			// gets array of spells
			// iterate through the list of spells in spells.js, grabbing any spell where
			// [spell].spellClass.bard == true
			// this just compiles an array of spell objects, we will use other methods for user input/output
		};
		// spellcasting ability
		// eldritch knight spellcasting mods
		this.int_mod = char_mod;//fixme: only if the player chose Int as their char_mod
		this.spell_save_dc = 8 + this.prof_bonus + this.int_mod;   // spell save dc
		//this.spell_save_dc = this.subclass_3.feature_1.spellcasting_ability.spell_save_dc; // fixme: will this work? it should ¯\_(ツ)_/¯
		this.spell_attack_mod = this.prof_bonus + this.int_mod;    // spell attack modifier
		//this.spell_attack_mod = this.subclass_3.feature_1.spellcasting_ability.spell_atk_mod; // fixme: will this work? it should ¯\_(ツ)_/¯
		this.spell_focus = "";
		// class features
		this.class_specific_ability_1 = {
			"name": "fighting style",
			"desc": "at first level, you adopt a particular style of fighting as your specialty. Choose one of the following options. You may only choose a style once, even if you get a chance to choose another one later on.",
			"styles": {
				"archery": "Gain +2 bonus to attack rolls you make with ranged weapons.",
				"defense": "While wearing armor, gain +1 bonus to armor class rating.",
				"dueling": "When you are wielding a melee weapon in one hand and no other weapons, you gain a +2 bonus to damage rolls with that weapon.",
				"great weapon fighting": "When you roll a 1 or 2 on a damage die for an attack you make with a melee weapon that you are wielding with two hands, you can reroll the die and must use the new roll, even if the new roll is a 1 or a 2. The weapon must have the two-handed or versatile property for you to gain this benefit.",
				"protection": "When a creature you can see attacks a target other than you that is within 5 feet of you, you can use your reaction to impose disadvantage on the attack roll. You must be wielding a shield.",
				"two-weapon fighting": "When you engage in two-weapon fighting, you can add your ability modifier to the damage of the second attack."
			}
		};
		this.class_specific_ability_2 = {
			"name": "second wind",
			"desc": "at first level, you have a limited well of stamina that you can draw on to protect yourself from harm. On your turn, you can use a bonus action to regain hit points equal to 1d10+your fighter level.",
			"restore": "Once you use this feature, you must finish a short or long rest before you can use it again."
		};
		this.class_specific_ability_3 = {
			"name": "action surge",
			"desc": "at second level you can push yourself beyond your normal limits for a moment. On your turn, you can take one additional action on top of your regular action and a possible bonus action.",
			"restore": "Once you use this feature, you must finish a short or long rest before you can use it again.",
			"upgrade": "starting at 17th level, you can use it twice before a rest, but only once on the same turn."
		};
		// class skills
		this.ability_score_improvement = {
			"levels": [4, 8, 12, 16, 19],
			"benefit": "Increase one ability score by 2, or increase 2 ability scores by 1."
		};
		this.extra_attack = "Beginning at 5th level, you can attack twice, instead of once, whenever you take the Attack action on your turn.";
		// todo: no class_skills for fighter player class
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
			"name": "martial archetype",
			"desc": "at 3rd level you choose an archetype that you strive to emulate in your combat styles and techniques. Choose between one of the following."
		};
		this.subclass_1 = {//fixme: go back through this section and double check if we want to 'pull out' parts of the string that contains lines such as '5 + your con. modifier' and make them variables
			"name": "champion",
			"desc": "The archetypal Champion focuses on the development of raw physical power honed to deadly perfection. Those who model themselves on this archetype combine rigorous training with physical excellence to deal devastating blows.",
			"feature_1": {
				"name": "improved critical", "desc": "your weapon attacks score a critical hit on a roll of 19 or 20."
			},
			"feature_2": {
				"name": "remarkable athlete",
				"desc": "starting at 7th level, you can add half your proficiency bonus (rounded up) to any strength, dexterity, or constitution check you make that doesnt already use your proficiency bonus. In addition, when you make a running long jump, the distance you can cover increases by a number of feet equal to your strength modifier."
			},
			"feature_3": {
				"name": "additional fighting style",
				"desc": "at 10th level, you can choose a second option from the fighting style class feature."
			},
			"feature_4": {
				"name": "superior critical",
				"desc": "starting at 15th level, your weapon attacks score a critical hit on a roll of 18-20."
			},
			"feature_5": {
				"name": "survivor",
				"desc": "at 18th level, you attain the pinnacle of resilience in battle. At the start of each of your turns, you regain hit points equal to 5 + your constitution modifier if you have no more than half of your hit points left. You dont gain this benefit if you have 0 hit points."
			}
		};
		this.subclass_2 = {
			"name": "battle master",
			"desc": "Battle Masters excel at controlling the battlefield. They specialize in combat maneuvers that distract, goad, and manipulate their enemies with deadly precision. They are well rounded fighters who have a trick for nearly every situation.",
			"feature_1": {
				"name": "combat superiority",
				"desc": "You learn combat maneuvers empowered by superiority dice.",
				"maneuvers": {
					"desc": "You learn three special maneuvers from the list below. Many maneuvers enhance an attack in some way. You can use only one maneuver per attack. You learn two additional maneuvers of your choice at 7th, 10th, and 15th level. Each time you learn new maneuvers, you can also replace one maneuver you know with a different one.",
					"maneuver_1": {
						"name": "commanding strike",
						"desc": "When you take the Attack action on your turn, you can forgo one of your attacks and use a bonus action to direct one of your companions to strike. When you do so, choose a friendly creature who can see or hear you and expend one superiority die. That creature can immediately use its reaction to make one weapon attack, adding the superiority die to the attack's damage roll. This effectively gives your ally a chance to attack on your turn, which allow for use of any turn-based benefits including Sneak Attack."
					},
					"maneuver_2": {
						"name": "Disarming Attack",
						"desc": "When you hit a creature with a weapon attack, you can expend one superiority die to attempt to disarm the target, forcing it to drop one item of your choice that it's holding. You add the superiority die to the attack's damage roll, and the target must make a Strength saving throw. On a failed save, it drops the object you choose. The object lands at its feet."
					},
					"maneuver_3": {
						"name": "Distracting Strike",
						"desc": "When you hit a creature with a weapon attack, you can expend one superiority die to distract the creature, giving your allies an opening. You add the superiority die to the attack's damage roll. The next attack roll against the target by an attacker other than you has advantage if the attack is made before the start of your next turn."
					},
					"maneuver_4": {
						"name": "Evasive Footwork",
						"desc": "When you move on your turn, you can expend a superiority die, adding the total to your AC until you stop moving."
					},
					"maneuver_5": {
						"name": "Feinting Attack",
						"desc": "You can expend one superiority die and use a bonus action on your turn to feint, choosing one creature within 5 feet of you as your target. Until the end of the turn, you have advantage on your next attack roll against that creature. If that attack hits, add the superiority die to the attack's damage roll."
					},
					"maneuver_6": {
						"name": "Goading Attack",
						"desc": "When you hit a creature with a weapon attack, you can expend one superiority die to attempt to goad the target into attacking you. You add the superiority die to the attack's damage roll, and the target must make a Wisdom saving throw. On a failed save, the target has a disadvantage on all attack rolls against targets other than you until the end of your next turn."
					},
					"maneuver_7": {
						"name": "Lunging Attack",
						"desc": "When you make a melee weapon attack on your turn, you can expend one superiority die to increase your reach for that attack by 5 feet. If you hit, you add the superiority die to the attack's damage roll."
					},
					"maneuver_8": {
						"name": "Maneuvering Attack",
						"desc": "When you hit a creature with a weapon attack, you can expend one superiority die to maneuver one of your comrades into a more advantageous position. You add the superiority die to the attack's damage roll, and you choose a friendly creature who can see or hear you. That creature can use its reaction to move up to half its speed without provoking opportunity attacks from the target of your attack."
					},
					"maneuver_9": {
						"name": "Menacing Attack",
						"desc": "When you hit a creature with a weapon attack, you can expend one superiority die to attempt to frighten the target. You add the superiority die to the attack's damage roll, and the target must make a Wisdom saving throw. On a failed save, it is frightened of you until the end of your next turn."
					},
					"maneuver_10": {
						"name": "Parry",
						"desc": "When another creature damages you with a melee attack, you can use your reaction and expend one superiority die to reduce the damage by the number you roll on your superiority die + your Dexterity modifier."
					},
					"maneuver_11": {
						"name": "Precision Attack",
						"desc": "When you make a weapon attack roll against a creature, you can expend one superiority die to add it to the roll. You can use this maneuver before or after making the attack roll, but before any effects of the attack are applied."
					},
					"maneuver_12": {
						"name": "Pushing Attack",
						"desc": "When you hit a creature with a weapon attack, you can expend one superiority die to attempt to drive the target back. You add the superiority die to the attack's damage roll, and if the target is Large or smaller, it must make a Strength saving throw. On a failed save, you push the target up to 15 feet away from you."
					},
					"maneuver_13": {
						"name": "Rally",
						"desc": "On your turn, you can use a bonus action and expend one superiority die to bolster the resolve of one of your companions. When you do so, choose a friendly creature who can see or hear you. That creature gains temporary hit points equal to the superiority die roll + your Charisma modifier. "
					},
					"maneuver_14": {
						"name": "Riposte",
						"desc": "When a creature misses you with a melee attack, you can use your reaction and expend one superiority die to make a melee attack against the creature. If you hit, you add the superiority die to the attack's damage roll."
					},
					"maneuver_15": {
						"name": "Sweeping Attack",
						"desc": "When you hit a creature with a melee weapon attack, you can expend one superiority die to attempt to damage another creature with the same attack. Choose another creature within 5 feet of the original target and within your reach. If the original attack roll would hit the second creature, it takes damage equal to the number you roll on your superiority die. The damage is of the same type dealt by the original attack."
					},
					"maneuver_16": {
						"name": "Trip Attack",
						"desc": "When you hit a creature with a weapon attack, you can expend one superiority die to attempt to knock the target down. You add the superiority die to the attack's damage roll, and if the target is Large or smaller, it must make a Strength saving throw or be knocked prone."
					}
				},
				"superiority dice": "You start with 4 superiority dice, which are d8s, and you expend one whenever you use a maneuver. You regain them all when you finish a short or long rest. You gain another superiority die at 7th level and one more at 15th level.",
				"saving throws": "If a maneuver requires a saving throw, the DC is 8 + your proficiency bonus + your Strength or Dexterity modifier (your choice)."
			},
			"feature_2": {
				"name": "Student of War",
				"desc": "Your study of the art of war not only in battle but out of it grants you a proficiency in an artisan tool of your choice."
			},
			"feature_3": {
				"name": "Study Your Enemy",
				"desc": "When you reach 7th level, you can spend 1 minute watching your enemy in or out of combat. Doing so gives you information about their abilities. The DM can then tell you if the following enemy abilities are your equal to, stronger, or weaker than your own.",
				"enemy_abilities_score": ["Strength", "Dexterity", "Constitution", "armor class", "current health points", "total levels (if any)", "fighter levels (if any)"]
			},
			"feature_4": {
				"name": "improved combat superiority",
				"desc": "When you reach 10th level, your superiority dice turn into d10. When you reach level 18, your dice turn into d12."
			},
			"feature_5": {
				"name": "Relentless",
				"desc": "Starting at level 15, whenever you roll for initiative and have zero superiority dice, you get 1 superiority die back."
			}
		};
		this.subclass_3 = {
			"name": "eldritch knight",
			"desc": "Those who choose to enhance their melee abilities with magic are the Eldritch Knights. Although their magic ability is limited due to their martial focus, the spells they do know are generally focused on enhancing their damage and adding arcane defenses.",
			"feature_1": {
				"name": "Spellcasting",
				"desc": "When you reach 3rd level, you augment your martial prowess with the ability to cast spells.",
				"spellTable": [{ //fixme: Alex this seems incredibly inefficient
					"level": 3,
					"cantrips_known": 2,
					"spells_known": 3,
					"spell_slots_per_spell_level": [{"1st": 2, "2nd": "", "3rd": "", "4th": ""}]
				}, {
					"level": 4,
					"cantrips_known": 2,
					"spells_known": 4,
					"spell_slots_per_spell_level": [{"1st": 3, "2nd": "", "3rd": "", "4th": ""}]
				}, {
					"level": 7,
					"cantrips_known": 2,
					"spells_known": 5,
					"spell_slots_per_spell_level": [{"1st": 4, "2nd": 2, "3rd": "", "4th": ""}]
				}, {
					"level": 8,
					"cantrips_known": 2,
					"spells_known": 6,
					"spell_slots_per_spell_level": [{"1st": 4, "2nd": 2, "3rd": "", "4th": ""}]
				}, {
					"level": 10,
					"cantrips_known": 3,
					"spells_known": 7,
					"spell_slots_per_spell_level": [{"1st": 4, "2nd": 3, "3rd": "", "4th": ""}]
				}, {
					"level": 11,
					"cantrips_known": 3,
					"spells_known": 8,
					"spell_slots_per_spell_level": [{"1st": 4, "2nd": 3, "3rd": "", "4th": ""}]
				}, {
					"level": 13,
					"cantrips_known": 3,
					"spells_known": 9,
					"spell_slots_per_spell_level": [{"1st": 4, "2nd": 3, "3rd": 2, "4th": ""}]
				}, {
					"level": 14,
					"cantrips_known": 3,
					"spells_known": 10,
					"spell_slots_per_spell_level": [{"1st": 4, "2nd": 3, "3rd": 2, "4th": ""}]
				}, {
					"level": 16,
					"cantrips_known": 3,
					"spells_known": 11,
					"spell_slots_per_spell_level": [{"1st": 4, "2nd": 3, "3rd": 3, "4th": ""}]
				}, {
					"level": 19,
					"cantrips_known": 3,
					"spells_known": 12,
					"spell_slots_per_spell_level": [{"1st": 4, "2nd": 3, "3rd": 3, "4th": 1}]
				}, {
					"level": 20,
					"cantrips_known": 3,
					"spells_known": 13,
					"spell_slots_per_spell_level": [{"1st": 4, "2nd": 3, "3rd": 3, "4th": 1}]
				}],
				"cantrips_info": "You start with 2 cantrips from the wizard spell list. At level 10 you gain a 3rd cantrip known.",
				"spell_slot_info": {
					"desc": "The Eldritch Knight Spellcasting table shows how many spell slots you have to cast your spells of 1st level and higher. To cast one of these spells, you must expend a slot of the spell's level or higher.",
					"restore": "You regain all expended spell slots when you finish a long rest."
				},
				"spells_known_info": {
					"desc": "You know three 1st level wizard spells of your choice, two must come from the evocation and abjuration spell schools. The third spell can be from any Wizard school of magic. The Spells Known column of the Eldritch Knight Spellcasting table shows when you learn more wizard spells of 1st level or higher. Each of these spells must be an abjuration or evocation spell of your choice, and must be of a level for which you have spell slots.",
					"benefits": "Whenever you gain a level in this class, you can replace one of the wizard spells you know with another spell of your choice from the wizard spell list. The new spell must be of a level for which you have spell slots, and it must be an abjuration or evocation spell, unless you're replacing the spell you gained at 3rd, 8th, 14th, or 20th level."
				},
				"spellcasting_ability": {
					"desc": "Intelligence is your spellcasting ability for your wizard spells, since you learn your spells through study and memorization. You use your Intelligence whenever a spell refers to your spellcasting ability.",
					"spell_save_dc": 8 + prof_bon + int_mod, // fixme: not sure to access variables above and store them here. I suppose we dont necessarily have to do that, in code we can just point to those vars
					"spell_atk_mod": prof_bon + int_mod // fixme: see above fixme for spell_save_dc
				}
			},
			"feature_2": {
				"name": "Weapon Bond",
				"desc": "Over the course of 1 hour short rest, you can bond a weapon to you. Once bonded, you cannot be disarmed unless you are incapacitated and if the weapon is on the same plane of existence, you can summon it to your hand as a bonus action. You can bond up to two weapons at once."
			},
			"feature_3": {
				"name": "War Magic",
				"desc": "At level 7, you can use your action to cast a cantrip and make one weapon attack as a bonus action."
			},
			"feature_4": {
				"name": "Eldritch Strike",
				"desc": "At level 10, any creature you hit with a weapon attack has disadvantage on its next save it makes against a spell you cast before the end of your next turn."
			},
			"feature_5": {
				"name": "Arcane Charge",
				"desc": "At level 15, you can teleport up to 30 feet to a space you can see when using your Action Surge. The teleport can take place before or after the Action Surge."
			},
			"feature_6": {
				"name": "Improved War Magic",
				"desc": "At level 18, you can make one weapon attack as a bonus action whenever you use your action to cast a spell."
			}
		};
		this.subclass_4 = {
			"name": "purple dragon knight",
			"desc": "Purple Dragon Knights are warriors who hail from the kingdom of Cormyr. Pledged to protect the crown, they take the fight against evil beyond their kingdom’s borders. They are tasked with wandering the land as knights errant, relying on their judgment, bravery, and fidelity to the code of chivalry to guide them in defeating evildoers. A Purple Dragon knight inspires greatness in others by committing brave deeds in battle. The mere presence of a knight in a hamlet is enough to cause some ores and bandits to seek easier prey. A lone knight is a skilled warrior, but a knight leading a band of allies can transform even the most poorly equipped militia into a ferocious war band. A knight prefers to lead through deeds, not words. As a knight spearheads an attack, the knight’s actions can awaken reserves of courage and conviction in allies that they never suspected they had.",
			"feature_1": {
				"name": "Restriction: Knighthood",
				"desc": "Purple Dragon knights are tied to a specific order of Cormyrean knighthood. Banneret serves as the generic name for this archetype if you use it in other campaign settings or to model warlords other than Purple Dragon knights."
			},
			"feature_2": {
				"name": "Rallying Cry",
				"desc": "When you choose this archetype at 3rd level, you learn how to inspire your allies to fight on past their injuries. When you use your Second Wind feature, you can choose up to three creatures within 60 feet of you that are allied with you. Each one regains hit points equal to your fighter level, provided that the creature can see or hear you."
			},
			"feature_3": {
				"name": "Royal Envoy",
				"desc": "A Purple Dragon knight serves as an envoy of the Cormyrean crown. Knights of high standing are expected to conduct themselves with grace. At 7th level, you gain proficiency in the Persuasion skill. If you are already proficient in it, you gain proficiency in one of the following skills of your choice: Animal Handling, Insight, Intimidation, or Performance. Your proficiency bonus is doubled for any ability check you make that uses Persuasion. You receive this benefit regardless of the skill proficiency you gain from this feature."
			},
			"feature_4": {
				"name": "Inspiring Surge",
				"desc": "Starting at 10th level, when you use your Action Surge feature, you can choose one creature within 60 feet of you that is allied with you. That creature can make one melee or ranged weapon attack with its reaction, provided that it can see or hear you. Starting at 17th level, you can choose two allies within 60 feet of you, rather than one."
			},
			"feature_5": {
				"name": "Bulwark",
				"desc": "Beginning at 15th level, you can extend the benefit of your Indomitable feature to an ally. When you decide to use Indomitable to reroll an Intelligence, a Wisdom, or a Charisma saving throw and you aren\'t incapacitated, you can choose one ally within 60 feet of you that also failed its saving throw against the same effect. If that creature can see or hear you, it can reroll its saving throw and must use the new roll."
			}
		};
	}
}

let fighter_class = new Fighter();