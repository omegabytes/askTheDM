module.exports = {
	"druid": {
		"class_description": {
			"shortDesc": "A nomad devoted to the world and the powers of Nature. Capable of adopting the form of a beast for battle or utility. capable of bolstering the party and heal their wounds, or laying low their enemies with nature's wrath.",
			"longDesc": "A priest of the Old Faith, wielding the powers of nature— moonlight and plant growth, fire and lightning—and adopting animal forms, d8, Intelligence & Wisdom, light and medium armor(non-metal), shields(non-metal), clubs, daggers, darts, javelins, maces, quarterstaffs, scimitars, sickles, slings, spears."
		},
		"class_hit_point": {
			"hit_dice": "1d8",
			"first_level": "8 plus your constitution modifier.",
			"higher_levels": "Based on average rolls, 5 plus your constitution modifier."
		},
		"class_primary_ability": {
			"ability_scores": "Recommended to choose wisdom as your highest ability score, followed by constitution.",
			"background": "It is advised to pick the hermit background.",
			"starting_spells": ""
		},
		"class_proficiencies": {
			"armor_prof": ["light armor", "medium armor", "shields"],
			"weapon_prof": ["Clubs", "daggers", "darts", "javelins", "maces", "quarterstaffs", "scimitars", "sickles", "slings", "spears"],
			"tools": ["Herbalism kit"],
			"saving_throw_prof": ["Intelligence", "Wisdom"],
			"skills": {
				"intro": "Choose two from ",
				"list": ["arcana", "animal handling", "insight", "medicine", "nature", "perception", "religion", "survival"]
			}
		},
		"equipment": {
			"welcome_msg": "Your character starts with the any of the following equipment, in addition to the equipment granted by your chosen background.",
			"starting_pack": "",
			"weapons_1": "A wooden shield",
			"weapons_2": "Any simple weapon",
			"weapons_3": "A scimitar",
			"weapon_4": "Any simple melee weapon",
			"equipment_pack_1": "Explorers pack",
			"equipment_pack_2": "",
			"options_1": "Leather armor",
			"options_2": "druidic focus"
		},
		"class_spells": {
			"slot_levels": {
				0: [1, "druidcraft", "guidance", "mending", "poison spray", "produce flame", "resistance", "shillelagh", "thorn whip"],
				1: [1, "animal friendship", "charm person", "create or destroy water", "cure wounds", "detect magic", "detect poison and disease", "entangle", "faerie fire", "fog cloud", "goodberry", "healing word", "jump", "longstrider", "purify food and drink", "speak with animals", "thunderwave"],
				2: [3, "animal messenger", "barkskin", "beast sense", "darkvision", "enhance ability", "find traps", "flame blade", "flaming sphere", "gust of wind", "heat metal", "hold person", "lesser restoration", "locate animals or plants", "locate object", "moonbeam", "pass without trace", "protection from poison", "spike growth"],
				3: [5, "call lightning", "conjure animals", "daylight", "dispel magic", "feign death", "meld into stone", "plant growth", "protection from energy", "sleet storm", "speak with plants", "water breathing", "water walk", "wind wall"],
				4: [7, "blight", "confusion", "conjure minor elementals", "conjure woodland beings", "control water", "dominate beast", "freedom of movement", "giant insect", "grasping vine", "hallucinatory terrain", "ice storm", "locate creature", "polymorph", "stone shape", "stone skin", "wall of fire"],
				5: [9, "antilife shell", "awaken", "commune with nature", "conjure elemental", "contagion", "geas", "greater restoration", "insect plague", "mass cure wounds", "planar binding", "reincarnate", "scrying", "tree stride", "wall of stone"],
				6: [11, "conjure fey", "find the path", "heal", "heroes feast", "move earth", "sunbeam", "transport via plants", "wall of thorns", "wind walk"],
				7: [13, "fire storm", "mirage arcane", "plane shift", "regenerate", "reverse gravity"],
				8: [15, "animal shapes", "antipathy/sympathy", "sympathy", "antipathy", "control weather", "earthquake", "feeblemind", "sunburst", "tsunami"],
				9: [17, "foresight", "shapechange", "storm of vengeance", "true resurrection"]
			}, "spells_known": {
				1: "", 2: ""
			}, "cantrips_known": {}, "level_features": {}
		},
		"class_spellcasting_ability": {
			"spell_save_dc": "8 plus your proficiency bonus plus your wisdom modifier.",
			"spell_attack_mod": "your proficiency bonus plus your wisdom modifier.",
			"spell_focus": "druidic focus."
		},
		"class_features": {
			"main_class_feature": {
				"description": "", "benefits": "", "replenish": ""
			}, "class_feature_1": "", "class_feature_2": "", "subclass": {
				"subclass_paths": {
					"subclass_description": "", "subclass_type_1": {
						"subclass_1_description": "",
						"subclass_benefit_1": "",
						"subclass_benefit_2": "",
						"subclass_benefit_3": "",
						"subclass_benefit_4": ""
					}, "subclass_type_2": {
						"subclass_2_description": "",
						"subclass_benefit_1": "",
						"subclass_benefit_2": "",
						"subclass_benefit_3": "",
						"subclass_benefit_4": ""
					}
				}
			}
		},
		"Druidic": "You know Druidic, the secret language of druids. You can speak the language and use it to leave hidden messages. You and others who know this language automatically spot such a message. Others spot the messages presence with a successful DC 15 wisdom (perception) check but cant decipher it without magic.",
		"ability_score_improvement": {
			"levels": [4, 8, 12, 16, 19],
			"description": "Increase one ability score by 2, or increase 2 ability scores by 1."
		},
		"wild shape": {
			"description": "Starting at 2nd level, you can use your action to magically assume the shape of a beast that you have seen before. You can use this feature twice and regain expended uses when you finish a short or long rest.",
			"table": {
				2: ["1/4 or lower", "No flying or swimming speed", "wolf"],
				4: ["1/2 or lower", "No flying speed", "crocodile"],
				8: ["1 or lower", "", "giant eagle"]
			},
			"more_info": "You can stay in a beast shape for a number of hours equal to half your druid level(rounded down). You then revert to your normal form unless you expend another use of this feature. You can revert to your normal form earlier by using a bonus action on your turn. You automatically revert if you fall unconscious, drop to 0 hit points or die.",
			"rules": {
				"intro": "While transformed, the following rules apply.",
				"rule_1": "Your game statistics are replaced by the statistics of the beast, but you retain your alignment, personality, and intelligence, wisdom and charisma scores. You also retain all of your skill and saving throw proficiencies, in addition to gaining those of the creature. If the creature has the same proficiency as you and the bonus in its stat block is higher than yours, use the creatures bonus instead of yours. If the creature has any legendary or lair actions, you can not use them.",
				"rule_2": "When you transform, you assume the beasts hit points and hit dice. When you revert to your normal form, you return to the number of hit points you had before you transformed. However, if you revert as a result of dropping to 0 hit points, any excess damage carries over to your normal form. As long as the excess damage doesnt reduce your normal form to 0 hit points, you arent knocked unconscious.",
				"rule_3": "You cant cast spells, and your ability to speak or take any action that requires hands is limited to the capabilities of your beast form. Transforming doesnt break your concentration on a spell youve already cast, however, or prevent you from taking actions that are part of a spell, such as call lightning, that youve already cast.",
				"rule_4": "You retain the benefit of any features from your class, race, or other source and can use them if the new form is physically capable of doing so. However, you cant use any of your special senses, such as darkvision, unless your new form also has that sense.",
				"rule_5": "You choose whether your equipment falls to the ground in your space, merges into your new form, or is worn by it. Worn equipment functions as normal, but the DM decides whether it is practical for the new form to wear a piece of equipment, based on the creatures shape and size. Your equipment doesnt change size or shape to match the new form, and any equipment that the new form cant wear must either fall to the ground or merge with it. Equipment that merges with the form has no effect until you leave the form."
			}
		},
		"class_specific_ability_2": "",
		"class_specific_ability_3": "",
		"class_specific_ability_4": ""
	}
};