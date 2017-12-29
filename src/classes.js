module.exports = {
	"CLASSES" : {
		"barbarian":{
			"description": {
				"shortDesc": "",
				"longDesc": ""
			},
			"hit_point":{
				"hit_dice": "",
				"1st_level": "",
				"higher_levels":""
			},
			"primary_ability":{},
			"proficiencies":{
				"armor_prof":[],
				"weapon_prof":[],
				"tools":[],
				"saving_throw_prof": [],
				"skills":[],
				"equipment":{}
			},
			"spells":{}, //doesnt need double work, already exists in spells.js **what can be placed in here instead is spell slots per level, # of cantrips, spells/cantrips known**
			"spellcasting_ability":{
				"spell_save_dc":{},
				"spell_attack_mod":{}
			},
			"class_features":{
				"bardic inspiration": "",
				"jack of all trades": "",
				"song of rest": "",
				"subclass": { //turns in subclasses, will be worked on later
					"bard college": {
						"description": "", "college of lore": {
							"description": "",
							"bonus proficiencies": "",
							"cutting words": "",
							"additional magical secrets": "",
							"peerless skill": ""
						}, "college of valor": {}
					}
				}
			},
			"expertise":"",
			"ability score improvement": {},
			"font of inspiration":"",
			"countercharm":"",
			"magical secrets":"",
			"superior inspiration":""
		},
		"bard" : {
			"description": {
				"shortDesc": "A story teller or musician using his wits, magic, and lore to get out of or avoid tight situations",
				"longDesc": "The bard uses music and magic to support and inspire the rest of the party. Bards can specialize in the College of Lore, which allows for a more versatile character who can learn some spells and become proficient in the player's choice of skills, or the College of Valor, which makes the bard more martial and combat-oriented, or a number of other directions based on their focus."
			},
			"hit_point": {
				"hit_dice": "1d8 per bard level",
				"1st_level": "8 plus your Constitution modifier",
				"higher_levels": "Based on average rolls, 5 plus your Constitution modifier, per bard level after 1st level."
			},
			"primary_ability": { //'Quick Build' section from the PHB
				"ability_scores": "Recommended to choose Charisma, followed by Dexterity as your highest ability scores.",
				"background": "It is advised to take the entertainer background for your character.",
				"starting_spells": "We recommend you choose vicious mockery and dancing lights as your first cantrips. Regarding 1st-level spells, we recommend taking the charm person, detect magic, healing word, and thunderwave as your first spells."
			},
			"proficiencies": {
				"armor_prof": ["Light armor"],
				"weapon_prof": ["Simple weapon", "hand crossbows", "longswords", "rapiers", "shortswords"],
				"tools": ["Three musical instruments of your choice."],
				"saving_throw_prof": ["Dexterity", "Charisma"],
				"skills": ["You may choose any three skills of your choice to be proficient in."],
				"equipment": {
					"welcome_msg": "Your character starts with the any of the following equipment, in addition to the equipment granted by your chosen background.",
					"starting_pack": "Leather armor and a dagger",
					"weapons_1": "A rapier",
					"weapons_2": "A longsword",
					"weapons_3": "Any simple weapon",
					"equipment_pack_1": "A diplomat's pack which includes a chest, 2 cases for maps and scrolls, a set of fine clothes, a bottle of ink, an ink pen, a lamp, 2 flasks of oil, 5 sheets of paper, a vial of perfume, sealing wax, and soap.",
					"equipment_pack_2": "An entertainer's pack which includes a backpack, a bedroll, 2 costumes, 5 candles, 5 days of rations, a waterskin, and a disguise kit.",
					"options_1": "A lute",
					"options_2": "Any other musical instrument"
				}
			},
			"spells": {}, //doesnt need double work, already exists in spells.js **what can be placed in here instead is spell slots per level, # of cantrips, spells/cantrips known**
			"spellcasting_ability": {
				"spell_save_dc": "8 plus your proficiency bonus plus your Charisma modifier.",
				"spell_attack_mod": "Your proficiency bonus plus your Charisma modifier.",
				"spell_focus": "Musical instrument"
			},
			"class_features": {
				"bardic inspiration": {
					"description": "You can inspire others through stirring words or music. To do so, you use a Bonus Action on your turn to choose one creature other than yourself within 60 feet of you who can hear you. That creature gains one Bardic Inspiration die, a d6.",
					"benefits": "Once within the next 10 minutes, the creature can roll the die and add the number rolled to one ability check, Attack roll, or saving throw it makes.",
					"replenish": "You can use this feature a number of times equal to your Charisma modifier (a minimum of once). You regain any expended uses when you finish a Long Rest. Your Bardic Inspiration die changes when you reach certain levels in this class. The die becomes a d8 at 5th level, a d10 at 10th level, and a d12 at 15th level."
				},
				"jack of all trades": "Starting at 2nd level, you can add half your proficiency bonus, rounded down, to any ability check you make that doesn't already include your proficiency bonus.",
				"song of rest": "Starting at 2nd level, you can revitalize wounded allies during a short rest. Any friendly creature that spent Hit Dice to regain hit points, each creature regains an extra 1d6 hit points. This extra hit points increase when you reach certain levels: 1d8 at 9th level, to 1d10 at 13th level, and to 1d12 at 17th level.",
				"subclass": { //turns in subclasses, will be worked on later
					"bard college": {
						"description": "At 3rd level, you delve into the advanced techniques of a bard college of your choice.",
						"college of lore": {
							"description": "Bards of the College of Lore know something about most things, collecting bits of knowledge from sources as diverse as scholarly tomes and peasant tales. Whether singing folk ballads in taverns or elaborate compositions in royal courts, these bards use their gifts to hold audiences spellbound.",
							"bonus proficiencies": "When you join the College of Lore at 3rd level, you gain proficiency with three skills of your choice.",
							"cutting words": "At 3rd level, you learn how to use your wit to distract, confuse, and otherwise sap the confidence and competence of others. When a creature that you can see within 60 feet of you makes an Attack roll, an ability check, or a damage roll, you can use your reaction to expend one of your uses of Bardic Inspiration, rolling a Bardic Inspiration die and subtracting the number rolled from the creature’s roll.",
							"additional magical secrets": "At 6th level, you learn two Spells of your choice from any class. A spell you choose must be of a level you can cast, as shown on the Bard table, or a cantrip. The chosen Spells count as bard Spells for you but don’t count against the number of bard Spells you know.",
							"peerless skill": "Starting at 14th level, when you make an ability check, you can expend one use of Bardic Inspiration. Roll a Bardic Inspiration die and add the number rolled to your ability check. You can choose to do so after you roll the die for the ability check, but before the GM tells you whether you succeed or fail."
						},
						"college of valor": {
							"description": "Bards of the College of Valor are daring skalds whose tales keep alive the memory of the great heroes of the past, and thereby inspire a new generation of heroes. These bards gather in mead halls or around great bonfires to sing the deeds of the mighty, both past and present.",
							"bonus proficiencies": "When you join the College of Valor at 3rd level, you gain proficiency with medium armor, shields, and martial weapons.",
							"combat inspiration": "At 3rd level, you learn to inspire others in battle. A creature that has a Bardic Inspiration die from you can roll that die and add the number rolled to a weapon damage roll it just made. Alternatively, when an attack roll is made against the creature, it can use its reaction to roll the Bardic Inspiration die and add the number rolled to its AC against that attack, after seeing the roll but before knowing whether it hits or misses.",
							"extra attack": "Starting at 6th level, you can attack twice, instead of once, whenever you take the Attack action on your turn.",
							"battle magic": "At 14th level, you have mastered the art of weaving spellcasting and weapon use into a single harmonious act. When you use your action to a cast a bard spell, you can make one weapon attack as a bonus action."
						}
					}
				},
				"expertise": "At 3rd level, choose two of your skill proficiencies. Your proficiency bonus is doubled for any ability check you make that uses either of the chosen proficiencies. At 10th level, you can choose another two skill proficiencies to gain this benefit.",
				"ability score improvement": "When you reach 4th level, and again at 8th, 12th, 16th, and 19th level, you can increase one ability score of your choice by 2, or you can increase two Ability Scores of your choice by 1. You cant increase an ability score above 20 using this feature.",
				"font of inspiration": "Beginning when you reach 5th level, you regain all of your expended uses of Bardic Inspiration when you finish a short or Long Rest.",
				"countercharm": "At 6th level, as an action, you can start a performance that lasts until the end of your next turn. During that time, you and any friendly creatures within 30 feet of you have advantage on saving throws against being Frightened or Charmed. A creature must be able to hear you to gain this benefit. The performance ends early if you are Incapacitated or silenced or if you voluntarily end it (no action required).",
				"magical secrets": "By 10th level, you have plundered magical knowledge from a wide spectrum of disciplines. Choose two Spells from any class, including this one. A spell you choose must be of a level you can cast or a cantrip. You learn two additional Spells from any class at 14th level and again at 18th level.",
				"superior inspiration": "At 20th level, when you roll initiative and have no uses of Bardic Inspiration left, you regain one use."
			}
		}, //end of above class object
		"cleric" : {
			"description": {
				"shortDesc": "",
				"longDesc": ""
			},
			"hit_point": {
				"hit_dice": "",
				"1st_level": "",
				"higher_levels": ""
			},
			"primary_ability": {},
			"proficiencies": {
				"armor_prof": [],
				"weapon_prof": [],
				"tools": [],
				"saving_throw_prof": [],
				"skills": [],
				"equipment": {}
			},
			"spells": {}, //doesnt need double work, already exists in spells.js **what can be placed in here instead is spell slots per level, # of cantrips, spells/cantrips known**
			"spellcasting_ability": {
				"spell_save_dc": {},
				"spell_attack_mod": {}
			},
			"class_features": {
				"bardic inspiration": "",
				"jack of all trades": "",
				"song of rest": "",
				"subclass": { //turns in subclasses, will be worked on later
					"bard college": {
						"description": "",
						"college of lore": {
							"description": "",
							"bonus proficiencies": "",
							"cutting words": "",
							"additional magical secrets": "",
							"peerless skill": ""
						},
						"college of valor": {}
					}
				}
			},
			"expertise":"",
			"ability score improvement": {},
			"font of inspiration":"",
			"countercharm":"",
			"magical secrets":"",
			"superior inspiration":""
		}, //end of above class object
		"druid" : {
			"description": {
				"shortDesc": "",
				"longDesc": ""
			},
			"hit_point": {
				"hit_dice": "",
				"1st_level": "",
				"higher_levels": ""
			},
			"primary_ability": {},
			"proficiencies": {
				"armor_prof": [],
				"weapon_prof": [],
				"tools": [],
				"saving_throw_prof": [],
				"skills": [],
				"equipment": {}
			},
			"spells": {}, //doesnt need double work, already exists in spells.js **what can be placed in here instead is spell slots per level, # of cantrips, spells/cantrips known**
			"spellcasting_ability": {
				"spell_save_dc": {},
				"spell_attack_mod": {}
			},
			"class_features": {
				"bardic inspiration": "",
				"jack of all trades": "",
				"song of rest": "",
				"subclass": { //turns in subclasses, will be worked on later
					"bard college": {
						"description": "",
						"college of lore": {
							"description": "",
							"bonus proficiencies": "",
							"cutting words": "",
							"additional magical secrets": "",
							"peerless skill": ""
						},
						"college of valor": {}
					}
				}
			},
			"expertise": "",
			"ability score improvement": {},
			"font of inspiration": "",
			"countercharm": "",
			"magical secrets": "",
			"superior inspiration": ""
		}, //end of above class object
		"paladin": {
				"description": {
				"shortDesc": "",
				"longDesc": ""
			},
			"hit_point":{
				"hit_dice": "",
				"1st_level": "",
				"higher_levels":""
			},
			"primary_ability":{},
			"proficiencies":{
				"armor_prof":[],
				"weapon_prof":[],
				"tools":[],
				"saving_throw_prof": [],
				"skills":[],
				"equipment":{}
			},
			"spells":{}, //doesnt need double work, already exists in spells.js **what can be placed in here instead is spell slots per level, # of cantrips, spells/cantrips known**
			"spellcasting_ability":{
				"spell_save_dc":{},
				"spell_attack_mod":{}
			},
			"class_features":{
				"bardic inspiration": "",
				"jack of all trades": "",
				"song of rest": "",
				"subclass": { //turns in subclasses, will be worked on later
					"bard college": {
						"description": "",
						"college of lore": {
							"description": "",
							"bonus proficiencies": "",
							"cutting words": "",
							"additional magical secrets": "",
							"peerless skill": ""
						},
						"college of valor": {}
					}
				}
			},
			"expertise":"",
			"ability score improvement": {},
			"font of inspiration":"",
			"countercharm":"",
			"magical secrets":"",
			"superior inspiration":""
		}, //end of above class object
		"ranger": {
			"description": {
				"shortDesc": "",
				"longDesc": ""
			},
			"hit_point":{
				"hit_dice": "",
				"1st_level": "",
				"higher_levels":""
			},
			"primary_ability":{},
			"proficiencies":{
				"armor_prof":[],
				"weapon_prof":[],
				"tools":[],
				"saving_throw_prof": [],
				"skills":[],
				"equipment":{}
			},
			"spells":{}, //doesnt need double work, already exists in spells.js **what can be placed in here instead is spell slots per level, # of cantrips, spells/cantrips known**
			"spellcasting_ability":{
				"spell_save_dc":{},
				"spell_attack_mod":{}
			},
			"class_features":{
				"bardic inspiration": "",
				"jack of all trades": "",
				"song of rest": "",
				"subclass": { //turns in subclasses, will be worked on later
					"bard college": {
						"description": "",
						"college of lore": {
							"description": "",
							"bonus proficiencies": "",
							"cutting words": "",
							"additional magical secrets": "",
							"peerless skill": ""
						},
						"college of valor": {}
					}
				}
			},
			"expertise":"",
			"ability score improvement": {},
			"font of inspiration":"",
			"countercharm":"",
			"magical secrets":"",
			"superior inspiration":""
		}, //end of above class object
		"sorcerer": {
			"description": {
				"shortDesc": "",
				"longDesc": ""
			},
			"hit_point":{
				"hit_dice": "",
				"1st_level": "",
				"higher_levels":""
			},
			"primary_ability":{},
			"proficiencies":{
				"armor_prof":[],
				"weapon_prof":[],
				"tools":[],
				"saving_throw_prof": [],
				"skills":[],
				"equipment":{}
			},
			"spells":{}, //doesnt need double work, already exists in spells.js **what can be placed in here instead is spell slots per level, # of cantrips, spells/cantrips known**
			"spellcasting_ability":{
				"spell_save_dc":{},
				"spell_attack_mod":{}
			},
			"class_features":{
				"bardic inspiration": "",
				"jack of all trades": "",
				"song of rest": "",
				"subclass": { //turns in subclasses, will be worked on later
					"bard college": {
						"description": "", "college of lore": {
							"description": "",
							"bonus proficiencies": "",
							"cutting words": "",
							"additional magical secrets": "",
							"peerless skill": ""
						}, "college of valor": {}
					}
				}
			},
			"expertise":"",
			"ability score improvement": {},
			"font of inspiration":"",
			"countercharm":"",
			"magical secrets":"",
			"superior inspiration":""
		}, //end of above class object
		"warlock": {
			"description": {
				"shortDesc": "",
				"longDesc": ""
			},
			"hit_point":{
				"hit_dice": "",
				"1st_level": "",
				"higher_levels":""
			},
			"primary_ability":{},
			"proficiencies":{
				"armor_prof":[],
				"weapon_prof":[],
				"tools":[],
				"saving_throw_prof": [],
				"skills":[],
				"equipment":{}
			},
			"spells":{}, //doesnt need double work, already exists in spells.js **what can be placed in here instead is spell slots per level, # of cantrips, spells/cantrips known**
			"spellcasting_ability":{
				"spell_save_dc":{},
				"spell_attack_mod":{}
			},
			"class_features":{
				"bardic inspiration": "",
				"jack of all trades": "",
				"song of rest": "",
				"subclass": { //turns in subclasses, will be worked on later
					"bard college": {
						"description": "",
						"college of lore": {
							"description": "",
							"bonus proficiencies": "",
							"cutting words": "",
							"additional magical secrets": "",
							"peerless skill": ""
						},
						"college of valor": {}
					}
				}
			},
			"expertise":"",
			"ability score improvement": {},
			"font of inspiration":"",
			"countercharm":"",
			"magical secrets":"",
			"superior inspiration":""
		}, //end of above class object
		"wizard": {
			"description": {
				"shortDesc": "",
				"longDesc": ""
			},
			"hit_point":{
				"hit_dice": "",
				"1st_level": "",
				"higher_levels":""
			},
			"primary_ability":{},
			"proficiencies":{
				"armor_prof":[],
				"weapon_prof":[],
				"tools":[],
				"saving_throw_prof": [],
				"skills":[],
				"equipment":{}
			},
			"spells":{}, //doesnt need double work, already exists in spells.js **what can be placed in here instead is spell slots per level, # of cantrips, spells/cantrips known**
			"spellcasting_ability":{
				"spell_save_dc":{},
				"spell_attack_mod":{}
			},
			"class_features":{
				"bardic inspiration": "",
				"jack of all trades": "",
				"song of rest": "",
				"subclass": { //turns in subclasses, will be worked on later
					"bard college": {
						"description": "",
						"college of lore": {
							"description": "",
							"bonus proficiencies": "",
							"cutting words": "",
							"additional magical secrets": "",
							"peerless skill": ""
						},
						"college of valor": {}
					}
				}
			},
			"expertise":"",
			"ability score improvement": {},
			"font of inspiration":"",
			"countercharm":"",
			"magical secrets":"",
			"superior inspiration":""
			} //end of above class object
	} //end of CLASSES object
}; //end of module

//FIXME: classes prototype template *WORK IN PROGRESS*
//class:{
// "description": {
// 		"shortDesc": "",
// 		"longDesc": ""
//  },
// "hit_point":{
// 	    "hit_dice": "",
// 		"1st_level": "",
// 		"higher_levels":""
// },
// "primary_ability":{},
// "proficiencies":{
//      "armor_prof":[],
// 		"weapon_prof":[],
// 		"tools":[],
// 		"saving_throw_prof": [],
// 		"skills":[],
// 		"equipment":{},
// },
// "spells":{}, //doesnt need double work, already exists in spells.js **what can be placed in here instead is spell slots per level, # of cantrips, spells/cantrips known**
// "spellcasting_ability":{
// 	    "spell_save_dc":{},
// 	    "spell_attack_mod":{}
// },
// "class_features":{
//      "bardic inspiration": "",
//      "jack of all trades": "",
// 		"song of rest": "",
// 		"subclass": { //turns in subclasses, will be worked on later
// 		    "bard college": {
// 	           "description": "",
// 	               "college of lore": {
// 	                   "description":"",
// 		                "bonus proficiencies":"",
// 			            "cutting words":"",
// 				        "additional magical secrets":"",
// 					    "peerless skill":""
// 	                },
// 	                "college of valor": {}
// 			}
//		}
// 	},
// 	"expertise":"",
// 		"ability score improvement": {},
// 	"font of inspiration":"",
// 		"countercharm":"",
// 		"magical secrets":"",
// 		"superior inspiration":""