import languageStrings from "../languageStrings";
import dndLib from "../dndLib";

let langEN = languageStrings.en.translation;
let char_classes = langEN.CLASSES;
let equipment = langEN.EQUIPMENT_PACKS;
"use strict";

export class Druid {
	constructor(prof_bon, char_mod, con_mod) {
		this.prof_bonus = prof_bon;
		this.wis_mod = char_mod;
		this.con_mod = con_mod;
		//class_desc
		this.short_description = "A nomad devoted to the world and the powers of Nature. Capable of adopting the form of a beast for battle or utility. capable of bolstering the party and heal their wounds, or laying low their enemies with nature's wrath.";
		this.long_description = "A priest of the Old Faith, wielding the powers of nature— moonlight and plant growth, fire and lightning—and adopting animal forms, d8, Intelligence & Wisdom, light and medium armor(non-metal), shields(non-metal), clubs, daggers, darts, javelins, maces, quarterstaffs, scimitars, sickles, slings, spears.";
		//health
		this.hit_dice = "1d8";
		this.first_level = 8 + this.con_mod;
		this.avg_increase_per_level = 5;
		//primary abilities, descending priority
		this.rec_abilities = ["wisdom", "constitution"];
		this.rec_background = ["hermit"];
		this.rec_starting_spells = ["druidcraft", "thorn whip", "entangle", "goodberry"];//fixme: might add a 'spellSlot' attribute for 'cantrips' and 1st level spells to distinguish between them
		//proficiencies
		this.armor_prof = ["light armor", "medium armor", "shields"]; //fixme: items.itemType['light armor']
		this.weapon_prof = ["clubs", "daggers", "darts", "javelins", "maces", "quarterstaffs", "scimitars", "sickles", "slings", "spears"]; //fixme: 'simple weapon' is item.itemType['simple melee weapon']
		this.tool_prof = ["herbalism kit"]; //fixme: items.itemType['musical instrument'] for list of all musical instruments
		this.saving_throw_prof = ["intelligence", "wisdom"];
		this.skill_prof = {
			"quantity": 2,
			"skills_available": ["arcana", "animal handling", "insight", "medicine", "nature", "perception", "religion", "survival"]
		};
		//equipment
		this.starting_equipment = ["leather armor", "explorer\'s pack", "druidic focus"];
		this.weapon_choices = ["wooden shield", "any simple weapon", "scimitar", "any simple melee weapon"]; //fixme: 'simple weapon' is item.itemType['simple melee weapon'] use this to list out all 'simple weapon' weapons
		this.equip_pack_1 = dndLib.getEquipmentPack("explorer\'s pack");//fixme: not sure if this will actually work. Needs code review, Alex
		this.equip_pack_2 = dndLib.getEquipmentPack("");
		//other equipment
		//put recommended items first, followed by all possible items?
		this.extra_equipment = [""];
		// list of spells
		this.class_spells = function () { //todo: implement this function
			// gets array of spells
			// iterate through the list of spells in spells.js, grabbing any spell where
			// [spell].spellClass.bard == true
			// this just compiles an array of spell objects, we will use other methods for user input/output
		};
		// spellcasting ability
		this.spell_save_dc = 8 + this.prof_bonus + this.wis_mod;   // spell save dc
		this.spell_attack_mod = this.prof_bonus + this.wis_mod;    // spell attack modifier
		this.spell_focus = "druidic focus";                        // spell focus
		// class features
		this.class_specific_ability_1 = {
			"name": "wild shape",
			"desc": "Starting at 2nd level, you can use your action to magically assume the shape of a beast that you have seen before. You can stay in a beast shape for a number of hours equal to half your druid level(rounded down). You then revert to your normal form unless you expend another use of this feature. You can revert to your normal form earlier by using a bonus action on your turn. You automatically revert if you fall unconscious, drop to 0 hit points or die.",
			"CR_Table": {
				"2": {
					"Max_CR": "1/4 or lower", "limitation": "No flying or swimming speed", "example": "wolf"
				}, "4": {
					"Max_CR": "1/2 or lower", "limitation": "No flying speed", "example": "crocodile"
				}, "8": {
					"Max_CR": "1 or lower", "limitation": "", "example": "giant eagle"
				}
			},
			"restore": "You can use this feature twice and regain expended uses when you finish a short or long rest.",
			"rules": {
				"intro": "While transformed, the following rules apply.",
				"rule_1": "Your game statistics are replaced by the statistics of the beast, but you retain your alignment, personality, and intelligence, wisdom and charisma scores. You also retain all of your skill and saving throw proficiencies, in addition to gaining those of the creature. If the creature has the same proficiency as you and the bonus in its stat block is higher than yours, use the creatures bonus instead of yours. If the creature has any legendary or lair actions, you can not use them.",
				"rule_2": "When you transform, you assume the beasts hit points and hit dice. When you revert to your normal form, you return to the number of hit points you had before you transformed. However, if you revert as a result of dropping to 0 hit points, any excess damage carries over to your normal form. As long as the excess damage doesnt reduce your normal form to 0 hit points, you arent knocked unconscious.",
				"rule_3": "You cant cast spells, and your ability to speak or take any action that requires hands is limited to the capabilities of your beast form. Transforming doesnt break your concentration on a spell youve already cast, however, or prevent you from taking actions that are part of a spell, such as call lightning, that youve already cast.",
				"rule_4": "You retain the benefit of any features from your class, race, or other source and can use them if the new form is physically capable of doing so. However, you cant use any of your special senses, such as darkvision, unless your new form also has that sense.",
				"rule_5": "You choose whether your equipment falls to the ground in your space, merges into your new form, or is worn by it. Worn equipment functions as normal, but the DM decides whether it is practical for the new form to wear a piece of equipment, based on the creatures shape and size. Your equipment doesnt change size or shape to match the new form, and any equipment that the new form cant wear must either fall to the ground or merge with it. Equipment that merges with the form has no effect until you leave the form."
			}
		};
		this.class_specific_ability_2 = {
			"name": "druidic",
			"desc": "You know Druidic, the secret language of druids. You can speak the language and use it to leave hidden messages. You and others who know this language automatically spot such a message. Others spot the messages presence with a successful DC 15 wisdom (perception) check but cant decipher it without magic."
		};
		this.class_specific_ability_3 = {
			"name": "timeless body",
			"desc": "starting at 18th level, the primal magic that you wield causes you to age more slowly. For every 10 years that pass, your body ages only 1 year."
		};
		this.class_specific_ability_4 = {
			"name": "beast spells",
			"desc": "beginning at 18th level, you cast many of your druid spells in any shape you assume using wild shape. You can perform the somatic and verbal components of a druid spell while in a beast shape, but you arent able to provide material components."
		};
		this.class_specific_ability_5 = {
			"name": "archdruid", "desc": "at 20th level, you can use your wild shape an unlimited number of times."
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
			"name": "druid circle",
			"desc": "at 2nd level, you choose to identify with a circle of druids: the circle of the land or the circle of the moon. Your choice grants you features at 2nd level and again at 6th, 10th, and 14th level.",
		};
		this.subclass_1 = {
			"name": "circle of the land",
			"desc": "The Circle of the Land is made up of mystics and sages who safeguard ancient knowledge and rites through a vast oral tradition. These druids meet within sacred circles of trees or standing stones to whisper primal secrets in Druidic. The circle's wisest members preside as the chief priests of communities that hold to the Old Faith and serve as advisors to the rulers of those folk. As a member of this circle, your magic is influenced by the land where you were initiated into the circle's mysterious rites.",
			"feature_1": {
				"name": "bonus cantrip",
				"desc": "When you choose this circle at 2nd level, you learn one additional druid cantrip of your choice."
			},
			"feature_2": {
				"name": "Natural Recovery",
				"desc": "Starting at 2nd level, you can regain some of your magical energy by sitting in meditation and communing with nature. During a short rest, you choose expended spell slots to recover. The spell slots can have a combined level that is equal to or less than half your druid level (rounded up), and none of the slots can be 6th level or higher. You can't use this feature again until you finish a long rest."
			},
			"feature_3": {
				"name": "Circle Spells",
				"desc": "Your mystical connection to the land infuses you with the ability to cast certain spells. At 3rd, 5th, 7th, and 9th level you gain access to circle spells connected to the land where you became a druid. Choose that land—arctic, coast, desert, forest, grassland, mountain, swamp, or Underdark. Once you gain access to a circle spell, you always have it prepared, and it doesn't count against the number of spells you can prepare each day. If you gain access to a spell that doesn't appear on the druid spell list, the spell is nonetheless a druid spell for you.",
				"arctic": {
					3: ["hold person", "spike growth"],
					5: ["sleet storm", "slow"],
					7: ["freedom of movement", "ice storm"],
					9: ["commune with nature", "cone of cold"]
				},
				"coast": {
					3: ["mirror image", "misty step"],
					5: ["water breathing", "water walk"],
					7: ["control water", "freedom of movement"],
					9: ["conjure elemental", "scrying"]
				},
				"desert": {
					3: ["blur", "silence"],
					5: ["create food and water", "protection from energy"],
					7: ["blight", "hallucinatory terrain"],
					9: ["insect plague", "wall of stone"]
				},
				"forest": {
					3: ["barkskin", "spider climb"],
					5: ["climb lightning", "plant growth"],
					7: ["divination", "freedom of movement"],
					9: ["commune with nature", "tree stride"]
				},
				"grassland": {
					3: ["invisibility", "pass without trace"],
					5: ["daylight", "haste"],
					7: ["divination", "freedom of movement"],
					9: ["dream", "insect plague"]
				},
				"mountain": {
					3: ["spider climb", "spike growth"],
					5: ["lightning bolt", "meld into stone"],
					7: ["stone shape", "stoneskin"],
					9: ["passwall", "wall of stone"]
				},
				"swamp": {
					3: ["darkness", "melf\'s acid arrow"],
					5: ["water walk", "stinking cloud"],
					7: ["freedom of movement", "locate creature"],
					9: ["insect plague", "scrying"]
				},
				"underdark": {
					3: ["spider climb", "web"],
					5: ["gaseous form", "stinking cloud"],
					7: ["greater invisibility", "stone shape"],
					9: ["cloudkill", "insect plague"]
				}
			},
			"feature_5": {
				"name": "land\'s stride",
				"desc": "Starting at 6th level, moving through nonmagical difficult terrain costs you no extra movement. You can also pass through nonmagical plants without being slowed by them and without taking damage from them if they have thorns, spines, or a similar hazard. In addition, you have advantage on saving throws against plants that are magically created or manipulated to impede movement, such those created by the entangle spell."
			},
			"feature_6": {
				"name": "nature\'s ward",
				"desc": "When you reach 10th level, you can't be charmed or frightened by elementals or fey, and you are immune to poison and disease."
			},
			"feature_7": {
				"name": "nature\'s sanctuary",
				"desc": "When you reach 14th level, creatures of the natural world sense your connection to nature and become hesitant to attack you. When a beast or plant creature attacks you, that creature must make a Wisdom saving throw against your druid spell save DC. On a failed save, the creature must choose a different target, or the attack automatically misses. On a successful save, the creature is immune to this effect for 24 hours. The creature is aware of this effect before it makes its attack against you."
			}
		};
		this.subclass_2 = {
			"name": "circle of the moon", "desc": "Druids of the Circle of the Moon are fierce guardians of the wilds. Their order gathers under the full moon to share news and trade warnings. They haunt the deepest parts of the wilderness, where they might go for weeks on end before crossing paths with another humanoid creature, let alone another druid. Changeable as the moon, a druid of this circle might prowl as a great cat one night, soar over the treetops as an eagle the next day, and crash through the undergrowth in bear form to drive off a trespassing monster. The wild is in the druid's blood.",
			"feature_1": {
				"name": "combat wild shape", "desc": "When you choose this circle at 2nd level, you gain the ability to use Wild Shape on your turn as a bonus action, rather than as an action. Additionally, while you are transformed by Wild Shape, you can use a bonus action to expend one spell slot to regain 1d8 hit points per level of the spell slot expended."
			}, "feature_2": {
				"name": "circle forms", "desc": "The rites of your circle grant you the ability to transform into more dangerous animal forms. Starting at 2nd level, you can use your Wild Shape to transform into a beast with a challenge rating as high as 1 (you ignore the Max CR column of the Beast Shapes table, but must abide by the other limitations there). Starting at 6th level, you can transform into a beast with a challenge rating as high as your druid level divided by 3, rounded down.",
			}, "feature_3": {
				"name": "primal strike", "desc": "Starting at 6th level, your attacks in beast form count as magical for the purpose of overcoming resistance and immunity to nonmagical attacks and damage.",
			}, "feature_4": {
				"name": "elemental wild shape", "desc": "At 10th level, you can expend two uses of Wild Shape at the same time to transform into an air elemental, an earth elemental, a fire elemental, or a water elemental."
			}, "feature_5": {
				"name": "Thousand Forms", "desc": "By 14th level, you have learned to use magic to alter your physical form in more subtle ways. You can cast the alter self spell at will.",
			}
		};
	}
}

let druid_class = new Druid();