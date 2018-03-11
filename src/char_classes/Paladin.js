let languageStrings = require("../languageStrings");
let dndLib = require("../dndLib");
let langEN = languageStrings.en.translation;
let char_classes = langEN.CLASSES;
let equipment = langEN.EQUIPMENT_PACKS;
"use strict";

export class Paladin {
	constructor(prof_bon, char_mod, con_mod) {
		this.prof_bonus = prof_bon;
		this.cha_mod = char_mod; //make sure to adjust this.char_mod to be this.str_mod or this.wis_mod, etc for each class respective
		this.con_mod = con_mod;
		//class_desc
		this.short_description = "nearly as skilled as the Fighter but using divine magic they bolster their efforts. Through their devotion they gain special boons from their god.";
		this.long_description = "a holy warrior bound to a sacred oath, d10, Strength, Wisdom and Charisma, all armor, shields, simple and martial weapons.";
		//health
		this.hit_dice = "1d10";
		this.first_level = 10 + this.con_mod;
		this.avg_increase_per_level = 6;
		//primary abilities, descending priority
		this.rec_abilities = ["strength", "charisma"];
		this.rec_background = ["noble"];
		this.rec_starting_spells = "paladins do not get spells until player level 2.";
		//proficiencies
		this.armor_prof = ["all armor", "shields"]; //fixme: items.itemType['light armor']
		this.weapon_prof = ["simple weapons", "martial weapons"]; //fixme: 'simple weapon' is item.itemType['simple melee weapon']
		this.tool_prof = []; //fixme: items.itemType['musical instrument'] for list of all musical instruments
		this.saving_throw_prof = ["wisdom", "charisma"];
		this.skill_prof = {
			"quantity": 2,
			"skills_available": ["athletics", "insight", "intimidation", "medicine", "persuasion", "religion"]
		};
		//equipment
		this.starting_equipment = ["chain mail", "holy symbol"];
		this.weapon_choices = ["martial weapon and shield", "two martial weapons", "five javelins", "simple melee weapon"]; //fixme: 'simple weapon' is item.itemType['simple melee weapon'] use this to list out all 'simple weapon' weapons
		// fixme: some melee classes get weapon choices that are a combo. ie: martial weapon AND shield . not sure how we want to break this out.
		this.equip_pack_1 = dndLib.getEquipmentPack("priest\'s pack");
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
		};
		// spellcasting ability
		this.spell_save_dc = 8 + this.prof_bonus + this.cha_mod;  // spell save dc
		this.spell_attack_mod = this.prof_bonus + this.cha_mod;   // spell attack modifier
		this.spell_focus = "holy symbol";                     // spell focus
		this.spellcasting = {"desc": "By 2nd level, you have learned to draw on divine magic through meditation and prayer to cast spells as a cleric does."}; // fixme: go back and add more information on spellcasting
		// class features
		this.class_specific_ability_1 = {
			"name": "Divine Sense",
			"desc": "The presence of strong evil registers on your senses like a noxious odor, and powerful good rings like heavenly music in your ears. As an action, you can open your awareness to detect such forces. Until the end of your next turn, you know the location of any celestial, fiend, or undead within 60 feet of you that is not behind total cover. You know the type (celestial, fiend, or undead) of any being whose presence you sense, but not its identity. Within the same radius, you also detect the presence of any place or object that has been consecrated or desecrated, as with the hallow spell. You can use this feature a number of times equal to 1 plus " + this.cha_mod + ". When you finish a long rest, you regain all expended uses."
		};
		this.class_specific_ability_2 = {
			"name": "Lay on Hands",
			"desc": "Your blessed touch can heal wounds. You have a pool of healing power, you can restore a total number of hit points equal to your paladin level x 5. As an action, you can touch a creature and draw power from the pool to restore a number of hit points to that creature, up to the maximum amount remaining in your pool. Alternatively, you can expend 5 hit points from your pool of healing to cure the target of one disease or neutralize one poison affecting it. You can cure multiple diseases and neutralize multiple poisons with a single use of Lay on Hands, expending hit points separately for each one. This feature has no effect on undead and constructs.",
			"restore": "You have a pool of healing power that replenishes when you take a long rest."
		};
		this.class_specific_ability_3 = {
			"name": "Fighting Style",
			"desc": "At 2nd level, you adopt a style of fighting as your specialty. Choose one of the following options. You can't take a Fighting Style option more than once, even if you later get to choose again.",
			"styles": [{
				"name": "Defense", "desc": "While you are wearing armor, you gain a +1 bonus to AC."
			}, {
				"name": "Dueling",
				"desc": "When you are wielding a melee weapon in one hand and no other weapons, you gain a +2 bonus to damage rolls with that weapon."
			}, {
				"name": "Great Weapon Fighting",
				"desc": "When you roll a 1 or 2 on a damage die for an attack you make with a melee weapon that you are wielding with two hands, you can reroll the die and must use the new roll. The weapon must have the two-handed or versatile property for you to gain this benefit."
			}, {
				"name": "Protection",
				"desc": "When a creature you can see attacks a target other than you that is within 5 feet of you, you can use your reaction to impose disadvantage on the attack roll. You must be wielding a shield."
			}]
		};
		this.class_specific_ability_4 = {
			"name": "Divine Smite",
			"desc": "Starting at 2nd level, when you hit a creature with a melee weapon attack, you can expend one paladin spell slot to deal radiant damage to the target, in addition to the weapon's damage. The extra damage is 2d8 for a 1st-level spell slot, plus 1d8 for each spell-level higher than 1st, to a maximum of 5d8. The damage increases by 1d8 if the target is an undead or a fiend."
		};
		this.class_specific_ability_5 = {
			"name": "Divine Health",
			"desc": "By 3rd level, the divine magic flowing through you makes you immune to disease."
		};
		// class skills
		this.ability_score_improvement = {
			"levels": [4, 8, 12, 16, 19],
			"benefit": "Increase one ability score by 2, or increase 2 ability scores by 1."
		};
		this.extra_attack = "Beginning at 5th level, you can attack twice, instead of once, whenever you take the Attack action on your turn.";
		this.class_skill_1 = {
			"name": "Aura of Protection",
			"desc": "Starting at 6th level, whenever you or a friendly creature within 10 feet of you must make a saving throw, the creature gains a bonus to the saving throw equal to your Charisma modifier (with a minimum bonus of +1). You must be conscious to grant this bonus. At 18th level, the range of this aura increases to 30 feet."
		};
		this.class_skill_2 = {
			"name": "Aura of Courage",
			"desc": "Starting at 10th level. you and friendly creatures within 10 feet of you can't be frightened while you are conscious. At 18th level, the range of this aura increases to 30 feet."
		};
		this.class_skill_3 = {
			"name": "Improved Divine Smite",
			"desc": "By 11th level, you are so suffused with righteous might that all your melee weapon strikes carry divine power with them. Whenever you hit a creature with a melee weapon, the creature takes an extra 1d8 radiant damage. If you also use your Divine Smite with an attack, you add this damage to the extra damage of your Divine Smite."
		};
		this.class_skill_4 = {
			"name": "Cleansing Touch",
			"desc": "Beginning at 14th level, you can use your action to end one spell on yourself or on one willing creature that you touch.",
			"uses": " You can use this feature a number of times equal to your Charisma modifier of " + this.cha_mod + " (a minimum of once).",
			"restore": " You regain expended uses when you finish a long rest."
		};
		// subclasses
		this.subclass_description = {
			"name": "Sacred Oaths",
			"desc": "Becoming a paladin involves taking vows that commit the paladin to the cause of righteousness, an active path of fighting wickedness. The final oath, taken when he or she reaches 3rd level, is the culmination of all the paladin's training. Some characters with this class don't consider themselves true paladins until they have reached 3rd level and made this oath. For others, the actual swearing of the oath is a formality, an official stamp on what has always been true in the paladin's heart.",
		};
		this.subclass_1 = {
			"name": "Oath of Devotion",
			"desc": "The Oath of Devotion binds a paladin to the loftiest ideals of justice, virtue, and order. Sometimes called cavaliers, white knights, or holy warriors, these paladins meet the ideal of the knight in shining armor. Acting with honor in pursuit of justice and the greater good, they hold themselves to the highest standards of conduct, and some—for better or worse—hold the rest of the world to the same standards. Many who swear this oath are devoted to gods of law and good and use their gods' tenets as the measure of their devotion. They hold angels—the perfect servants of good—as their ideals, and incorporate images of angelic wings into their helmets or coats of arms.",
			"tenets": {
				"name": "tenets of devotion",
				"desc": "Though the exact words and strictures of the Oath of Devotion vary, paladins of this oath share these tenets.",
				"list": [{"name": "Honesty", "desc": "Don't lie or cheat. Let your word be your promise."}, {
					"name": "Courage", "desc": "Never fear to act, though caution is wise."
				}, {
					"name": "Compassion",
					"desc": "Aid others, protect the weak, and punish those who threaten them. Show mercy to your foes, but temper it with wisdom."
				}, {
					"name": "Honor",
					"desc": "Treat others with fairness, and let your honorable deeds be an example to them. Do as much good as possible, while causing the least amount of harm."
				}, {
					"name": "Duty",
					"desc": "Be responsible for your actions and their consequences, protect those entrusted to your care, and obey those who have just authority over you."
				}]
			},
			"feature_1": {
				"name": "Oath Spells", "spells": {
					3: ["protection from evil and good", "sanctuary"],
					5: ["lesser restoration", "zone of truth"],
					9: ["beacon of hope", "dispel magic"],
					13: ["freedom of movement", "guardian of faith"],
					17: ["commune", "flame strike"]
				}, "channel divinity": {
					"desc": "When you take this oath at 3rd level, you gain the following two Channel Divinity options.",
					"options": [{
						"name": "Sacred Weapon",
						"desc": "As an action, you can imbue one weapon that you are holding with positive energy, using your Channel Divinity. For 1 minute, you add your Charisma modifier of " + this.cha_mod + " to attack rolls made with that weapon (with a minimum bonus of +1).The weapon also emits bright light in a 20-foot radius and dim light 20 feet beyond that. If the weapon is not already magical, it becomes magical for the duration. You can end this effect on your turn as part of any other action. If you are no longer holding or carrying this weapon, or if you fall unconscious, this effect ends."
					}, {
						"name": "Turn the Unholy",
						"desc": "As an action, you present your holy symbol and speak a prayer censuring fiends and undead, using your Channel Divinity. Each fiend or undead that can see or hear you within 30 feet of you must make a Wisdom saving throw. If the creature fails its saving throw, it is turned for 1 minute or until it takes damage. A turned creature must spend its turns trying to move as far away from you as it can, and it can't willingly move to a space within 30 feet of you. It also can't take reactions. For its action, it can use only the Dash action or try to escape from an effect that prevents it from moving. If there's nowhere to move, the creature can use the Dodge action."
					}]
				}
			},
			"feature_2": {
				"name": "Aura of Devotion",
				"desc": "Starting at 7th level, you and friendly creatures within 10 feet of you can't be charmed while you are conscious. At 18th level, the range of this aura increases to 30 feet."
			},
			"feature_3": {
				"name": "Purity of Spirit",
				"desc": "Beginning at 15th level, you are always under the effects of a protection from evil and good spell."
			},
			"feature_4": {
				"name": "Holy Nimbus",
				"desc": "At 20th level, as an action, you can emanate an aura of sunlight. For 1 minute, bright light shines from you in a 30-foot radius, and dim light shines 30 feet beyond that. Whenever an enemy creature starts its turn in the bright light, the creature takes 10 radiant damage. In addition, for the duration, you have advantage on saving throws against spells cast by fiends or undead. Once you use this feature, you can't use it again until you finish a long rest."
			}
		};
		this.subclass_2 = {
			"name": "Oath of the Ancients",
			"desc": "The Oath of the Ancients is as old as the race of elves and the rituals of the druids. Sometimes called fey knights, green knights, or horned knights, paladins who swear this oath cast their lot with the side of the light, the cosmic struggle against darkness, because they love the beautiful and life-giving things of the world, not necessarily because they believe in principles of honor, courage, and justice. They adorn their armor and clothing with images of growing things—leaves, antlers, or flowers—to reflect their commitment to preserving life and light in the world.",
			"tenets": {
				"name": "tenets of the ancients",
				"desc": "The tenets of the Oath of the Ancients have been preserved for uncounted centuries. This oath emphasizes the principles of good above any concerns of law or chaos. Its fair central principles are simple.",
				"list": [{
					"name": "Kindle the Light",
					"desc": "Through your acts of mercy, kindness, and forgiveness, kindle the light of hope in the world, beating back despair."
				}, {
					"name": "Shelter the Light",
					"desc": "Where there is good, beauty, love, and laughter in the world, stand against the wickedness that would swallow it. Where life flourishes, stand against the forces that would render it barren."
				}, {
					"name": "Preserve Your Own Light",
					"desc": "Delight in song and laughter, in beauty and art. If you allow the light to die in your own heart, you can't preserve it in the world."
				}, {
					"name": "Be the Light",
					"desc": "Be a glorious beacon for all who live in despair. Let the light of your joy and courage shine forth in all your deeds."
				}]
			},
			"feature_1": {
				"name": "Oath Spells", "spells": {
					3: ["ensnaring strike", "speak with animals"],
					5: ["moonbeam", "misty step"],
					9: ["plant growth", "protection from energy"],
					13: ["ice storm", "stoneskin"],
					17: ["commune with nature", "tree stride"]
				}, "channel divinity": {
					"desc": "When you take this oath at 3rd level, you gain the following two Channel Divinity options.",
					"options": [{
						"name": "Nature's Wrath",
						"desc": "You can use your Channel Divinity to invoke primeval forces to ensnare a foe. As an action, you can cause spectral vines to spring up and reach for a creature within 10 feet of you that you can see. The creature must succeed on a Strength or Dexterity saving throw (its choice) or be restrained. While restrained by the vines, the creature repeats the saving throw at the end of each of its turns. On a success, it frees itself and the vines vanish."
					}, {
						"name": "Turn the Faithless",
						"desc": "You can use your Channel Divinity to utter ancient words that are painful for fey and fiends to hear. As an action, you present your holy symbol, and each fey or fiend within 30 feet of you that can hear you must make a Wisdom saving throw. On a failed save, the creature is turned for 1 minute or until it takes damage. A turned creature must spend its turns trying to moves far away from you as it can, and it can't willingly move to a space within 30 feet of you. It also can't take reactions. For its action, it can use only the Dash action try to escape from an effect that prevents it from moving. If there's nowhere to move, the creature can use the Dodge action. If the creature's true form is concealed by an illusion, shape-shifting, or other effect, that form is revealed while it is turned."
					}]
				}
			},
			"feature_2": {
				"name": "Aura of Warding",
				"desc": "Beginning at 7th level, ancient magic lies so heavily upon you that it forms an eldritch ward. You and friendly creatures within 10 feet of you have resistance to damage from spells. At 18th level, the range of this aura increases to 30 feet.",
			},
			"feature_3": {
				"name": "Undying Sentinel",
				"desc": "Starting at 15th level, when you are reduced to 0 hit points and are not killed outright, you can choose to drop to 1 hit point instead. Additionally, you suffer none of the drawbacks of old age, and you can't be aged magically.",
				"restore": "Once you use this ability, you can't use it again until you finish a long rest."
			},
			"feature_4": {
				"name": "Elder Champion",
				"desc": "At 20th level, you can assume the form of an ancient force of nature, taking on an appearance you choose. For example, your skin might turn green or take on a bark-like texture, your hair might become leafy or moss-like, or you might sprout antlers or a lion-like mane. Using your action, you undergo a transformation. For 1 minute, you gain the following benefits.",
				"benefits": ["At the start of each of your turns, you regain 10 hit points.", "Whenever you cast a paladin spell that has a casting time of 1 action, you can cast it using a bonus action instead.", "Enemy creatures within 10 feet of you have disadvantage on saving throws against your paladin spells and Channel Divinity options."],
				"restore": "Once you use this feature, you can't use it again until you finish a long rest."
			}
		};
		this.subclass_3 = {
			"name": "Oath of Vengeance",
			"desc": "The Oath of Vengeance is a solemn commitment to punish those who have committed a grievous sin. When evil forces slaughter helpless villagers, when an entire people turns against the will of the gods, when a thieves' guild grows too violent and powerful, when a dragon rampages through the countryside, at times like these, paladins arise and swear an Oath of Vengeance to set right that which has gone wrong. To these paladins, sometimes called avengers or dark knights, their own purity is not as important as delivering justice.",
			"tenets": {
				"name": "Tenets of Vengeance",
				"desc": "The tenets of the Oath of Vengeance vary by paladin, but all the tenets revolve around punishing wrongdoers by any means necessary. Paladins who uphold these tenets are willing to sacrifice even their own righteousness to mete out justice upon those who do evil, so the paladins are often neutral or lawful neutral in alignment. The core principles of the tenets are brutally simple.",
				"list": [{
					"name": "Fight the Greater Evil",
					"desc": "Faced with a choice of fighting my sworn foes or combating a lesser evil, I choose the greater evil."
				}, {
					"name": "No Mercy for the Wicked",
					"desc": "Ordinary foes might win my mercy, but my sworn enemies do not."
				}, {
					"name": "By Any Means Necessary",
					"desc": "My qualms can't get in the way of exterminating my foes."
				}, {
					"name": "Restitution",
					"desc": "If my foes wreak ruin on the world, it is because I failed to stop them. I must help those harmed by their misdeeds."
				}]
			},
			"feature_1": {
				"name": "Oath Spells", "spells": {
					3: ["protection from evil and good", "sanctuary"],
					5: ["lesser restoration", "zone of truth"],
					9: ["beacon of hope", "dispel magic"],
					13: ["freedom of movement", "guardian of faith"],
					17: ["commune", "flame strike"]
				}, "channel divinity": {
					"desc": "When you take this oath at 3rd level, you gain the following two Channel Divinity options.",
					"options": [{
						"name": "Sacred Weapon",
						"desc": "As an action, you can imbue one weapon that you are holding with positive energy, using your Channel Divinity. For 1 minute, you add your Charisma modifier of " + this.cha_mod + " to attack rolls made with that weapon (with a minimum bonus of +1).The weapon also emits bright light in a 20-foot radius and dim light 20 feet beyond that. If the weapon is not already magical, it becomes magical for the duration. You can end this effect on your turn as part of any other action. If you are no longer holding or carrying this weapon, or if you fall unconscious, this effect ends."
					}, {
						"name": "Turn the Unholy",
						"desc": "As an action, you present your holy symbol and speak a prayer censuring fiends and undead, using your Channel Divinity. Each fiend or undead that can see or hear you within 30 feet of you must make a Wisdom saving throw. If the creature fails its saving throw, it is turned for 1 minute or until it takes damage. A turned creature must spend its turns trying to move as far away from you as it can, and it can't willingly move to a space within 30 feet of you. It also can't take reactions. For its action, it can use only the Dash action or try to escape from an effect that prevents it from moving. If there's nowhere to move, the creature can use the Dodge action."
					}]
				}
			},
			"feature_2": {
				"name": "", "desc": "",
			},
			"feature_3": {
				"name": "", "desc": "",
			},
			"feature_4": {
				"name": "", "desc": ""
			},
			"feature_5": {
				"name": "", "desc": "",
			}
		};
	}
}

let paladin_class = new Paladin();