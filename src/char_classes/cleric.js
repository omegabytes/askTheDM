module.exports = {
	"cleric": {
		"class_description": {
			"shortDesc": "A holy man devoted to a deity. capable of bolstering the party and heal their wounds, or laying low their enemies with divine wrath.",
			"longDesc": "A priestly champion who wields divine magic in service of a higher power, d8, Wisdom & Charisma, light and medium armor, shields, simple weapons."
		}, "class_hit_point": {
			"hit_dice": "1d8",
			"first_level": "8 plus your Constitution modifier.",
			"higher_levels": "Based on average rolls, 5 plus your Constitution modifier."
		}, "class_primary_ability": {
			"ability_scores": "Recommended to choose Wisdom, followed by Strength or Constitution as your highest ability scores.",
			"background": "It is advised to take the acolyte background for your character.",
			"starting_spells": "It is recommended to choose Guidance, Sacred Flame and Thaumaturgy as your first cantrips. If you dont have darkvision you should choose Light in place of one of the other cantrips. Regarding 1st-level spells, it is recommended that you take Cure Wounds, and Command as your first spells."
		}, "class_proficiencies": {
			"armor_prof": ["light armor", "medium armor", "shields"],
			"weapon_prof": ["All simple weapons"],
			"tools": [""],
			"saving_throw_prof": ["Wisdom", "Charisma"],
			"skills": ["Choose two from History, Insight, Medicine, Persuasion, or Religion."]
		}, "equipment": {
			"welcome_msg": "Your character starts with the any of the following equipment, in addition to the equipment granted by your chosen background.",
			"starting_pack": "",
			"weapons_1": "A mace",
			"weapons_2": "A warhammer(if proficient)",
			"weapons_3": "A light crossbow with 20 bolts",
			"weapons_4": "Any simple weapon",
			"equipment_pack_1": "A priests pack",
			"equipment_pack_2": "An explorers pack",
			"extra_1": "A shield and a holy symbol",
			"extra_2": ""
		}, "class_spells": {
			"slot_levels": {
				0: [1, "guidance", "light", "mending", "resistance", "sacred flame", "spare the dying", "thaumaturgy"],
				1: [1, "bane", "bless", "command", "create or destroy water", "cure wounds", "detect evil and good", "detect magic", "detect poison and disease", "guiding bolt", "healing word", "inflict wounds", "protection from evil and good", "purify food and drink", "sanctuary", "shield of faith"],
				2: [3, "aid", "augury", "blindness/deafness", "blindness", "deafness", "calm emotions", "continual flame", "enhance ability", "find traps", "gentle repose", "hold person", "lesser restoration", "locate object", "prayer of healing", "protection from poison", "silence", "spiritual weapon", "warding bond", "zone of truth"],
				3: [5, "animate dead", "beacon of hope", "bestow curse", "clairvoyance", "create food and water", "daylight", "dispel magic", "feign death", "glyph of warding", "magic circle", "mass healing word", "meld into stone", "protection from energy", "remove curse", "revivify", "sending", "speak with dead", "spirit guardians", "tongues", "water walk"],
				4: [7, "banishment", "control water", "death ward", "divination", "freedom of movement", "guardian of faith", "locate creature", "stone shape"],
				5: [9, "commune", "contagion", "dispel evil and good", "flame strike", "geas", "greater restoration", "hallow", "insect plague", "legend lore", "mass cure wounds", "planar binding", "raise dead", "scrying"],
				6: [11, "blade barrier", "create undead", "find the path", "forbiddance", "harm", "heal", "heroes feast", "planar ally", "true seeing", "word of recall"],
				7: [13, "conjure celestial", "divine word", "etherealness", "fire storm", "plane shift", "regenerate", "resurrection", "symbol"],
				8: [15, "antimagic field", "control weather", "earthquake", "holy aura"],
				9: [17, "astral projection", "gate", "mass heal", "true resurrection"]
			}, "spells_known": {
				1: "", 2: ""
			}, "cantrips_known": {}, "level_features": {}
		}, "class_spellcasting_ability": {
			"spell_save_dc": "8 plus your proficiency bonus plus your Wisdom modifier.",
			"spell_attack_mod": "Your proficiency bonus plus your Wisdom modifier.",
			"spell_focus": "Holy symbol."
		}, "class_features": {
			"channel divinity": {
				"description": "At 2nd level, you gain the ability to channel divine energy directly from your deity, using that energy to fuel magical effects. You start with two such effects: Turn Undead and an effect determined by your domain.",
				"benefits": {
					"Turn Undead": {
						"description": "As an action, you present your holy symbol and speak a prayer. Each undead that can see or hear you within 30ft of you must make a Wisdom saving throw. On a fail, it is turned for 1 minute or until it takes any damage",
						"more_info": "A turned creature must spend its turns trying to move as far away from you as it can, and it cant willingly move to a space within 30ft of you. It also cant take reactions. For its action, it can use only the Dash action or try to escape from an effect that prevents it from moving."
					}
				},
				"replenish": "A short or long rest. Beginning at 6th level you can use this twice, and beginning at 18th level you can use this three times between rests."
			}, "class_feature_1": "", "class_feature_2": "", "destroy undead": {
				"description": "Starting at 5th level, when an undead fails its saving throw against your Turn Undead feature, the creature is instantly destroyed if its challenge rating is at or below a certain threshold. To learn more, ask about the destroy undead table.",
				"table": {
					5: "1/2 or lower", 8: "1 or lower", 11: "2 or lower", 14: "3 or lower", 17: "4 or lower"
				}
			}, "ability_score_improvement": {
				"levels": [4, 8, 12, 16, 19],
				"description": "Increase one ability score by 2, or increase 2 ability scores by 1."
			}, "divine intervention": {
				"description": "Beginning at 10th level, you can call on your deity to intervene on your behalf when your need is great. Imploring your deitys aid requires you to use your action, describe the assistance you seek and roll percentile dice.",
				"more_info": "If you roll a number equal to or lower than your cleric level, your deity intervenes. Meaning if you are a level 10 cleric and roll between 1 and 10, this feature works. The D.M. chooses the nature of the intervention. At 20th level your call for intervention succeeds automatically, no roll required.",
				"replenish": "If your deity intervenes, you cant use this feature again for 7 days. Otherwise, you must finish a long rest."
			}, "class_specific_ability_2": "", "class_specific_ability_3": "", "class_specific_ability_4": ""
		}, "subclass": {
			"subclass_paths": {
				"subclass_description": "Choose one domain related to your deity: Knowledge, Life, Light, Nature, Tempest, Trickery, or War. Your choice could also simply be a matter of personal preference, the aspect of the deity that appeals to you most.",
				"knowledge": {
					"description": "Followers of this domain study esoteric lore, collect old tomes, delve into the secret places of the earth, and learn all they can.",
					"spells": {
						1: ["command", "identify"],
						3: ["augury", "suggestion"],
						5: ["nondetection", "speak with dead"],
						7: ["arcane eye", "confusion"],
						9: ["legend lore", "scrying"]
					},
					"blessing of knowledge": "At 1st level, you learn two languages of your choice. You also become proficient in your choice of two of the following skills: arcana, history, nature, or religion. Your proficiency bonus is doubled for any ability check you make that uses either of those skills.",
					"channel divinity: knowledge of the ages": "Starting at 2nd level, you can use your channel divinity to tap into a divine well of knowledge. As an action, you choose one skill or tool. For 10 minutes, you have proficiency with the chosen skill or tool.",
					"channel divinity: read thoughts": {
						"description": "At 6th level, you can use your channel divinity to read a creatures thoughts. You can then use your access to the creatures mind to command it.",
						"more_info": "As an action, choose one creature that you can see within 60ft of you. That creature must make a Wisdom saving throw. If the creature succeeds on the saving throw, you cant use this feature on it again until you finish a long rest.",
						"benefits": "If the creature fails its save, you can read its surface thoughts, when it is within 60ft of you. This effect lasts for 1 minute. During that time, you can use your action to end this effect and cast the suggestion spell on the creature without expending a spell slot, and the target automatically fails its saving throw against the spell."
					},
					"potent spellcasting": "Starting at 8th level, you add your Wisdom modifier. to the damage you deal with any cleric cantrip.",
					"visions of the past": {
						"description": "Starting at 17th level, you can call up visions of the past that relate to an object you hold or you immediate surroundings. You spend at least 1 minute in meditation and prayer, then receive dreamlike, shadowy glimpses of recent events. You can meditate in this way for a number of minutes equal to your Wisdom score and must maintain concentration during that time, as if you were casting a spell.",
						"replenish": "Must finish a short or long rest.",
						"object reading": "Holding an object as you meditate, you can see visions of the objects previous owner. After meditating for 1 minute, you learn how the owner acquired and lost the object, as well as the most recent significant event involving the object and that owner.",
						"area reading": "As you meditate, you see visions of recent events in your immediate vicinity, going back a number of days equal to your Wisdom score. For each minute you meditate, you learn about one significant event, beginning with the most recent."
					}
				},
				"life": {
					"description": "The followers of this domain focus on the vibrant positive energy, one of the fundamental forces of the universe, that sustains all life.",
					"spells": {
						1: ["bless", "cure wounds"],
						3: ["lesser restoration", "spiritual weapon"],
						5: ["beacon of hope", "revivify"],
						7: ["death ward", "guardian of faith"],
						9: ["mass cure wounds", "raise dead"]
					},
					"bonus proficiency": "When you choose this domain at 1st level, you gain proficiency with heavy armor.",
					"disciple of life": "Starting at 1st level, your healing spells are more effective. Whenever you use a spell of 1st level or higher to restore hit points, the creature regains additional hit points equal to 2 plus the spells level.",
					"channel divinity: preserve life": "starting at 2nd level, you can use your channel divinity to heal the badly injured. As an action, you present your holy symbol and evoke healing energy that can restore a number of hit points equal to five times your cleric level. Choose any creatures within 30ft of you, and divide those hit points among them. This feature can restore a creature to no more than half of its hit point maximum. You cant use this feature on an undead or a construct.",
					"blessed healer": "Beginning at 6th level, the healing spells you cast on others heal you as well. When you cast a spell of 1st level or higher that restores hit points to a creature other than you, you regain hit points equal to 2 plus the spells level.",
					"divine strike": "At 8th level, you gain the ability to infuse your weapon strikes with divine energy. Once on each of your turns when you hit a creature with a weapon attack, you can cause the attack to deal an extra 1d8 radiant damage to the target. When you reach 14th level, the extra damage increases to 2d8.",
					"supreme healing": "Starting at 17th level, when you would normally roll one or more dice to restore hit points with a spell, you instead use the highest number possible for each die."
				},
				"light": {
					"description": "Followers of this domain are enlightened souls infused with radiance and the power of their gods discerning vision, charged with chasing away lies and burning away darkness.",
					"spells": {
						1: ["burning hands", "faerie fire"],
						3: ["flaming sphere", "scorching ray"],
						5: ["daylight", "fireball"],
						7: ["guardian of faith", "wall of fire"],
						9: ["flame strike", "scrying"]
					},
					"bonus cantrip": "When you choose this domain at 1st level, you gain the light cantrip if you dont already know it.",
					"warding flare": {
						"description": "At 1st level, you can interpose divine light between yourself and an attacking enemy. When you are attacked by a creature within 30ft of you that you can see, you can use your reaction to impose disadvantage on the attack roll, causing light to flare before the attacker before it hits or misses. An attacker that cant be blinded is immune to this feature.",
						"more_info": "You can use this feature a number of times equal to your Wisdom modifier. You regain all expended uses when you finish a long rest."
					},
					"channel divinity: radiance of the dawn": "Starting at 2nd level, you can use your channel divinity to harness sunlight, banishing darkness and dealing radiant damage to your foes. As an action, you present your holy symbol, and any magical darkness within 30ft of you is dispelled. Additionally, each hostile creature within 30ft of you must make a Constitution saving throw. A creature takes radiant damage equal to 2d10 plus your cleric level on a failed saving throw, and half as much damage on a successful one. A creature that has total cover from you is not affected.",
					"improved flare": "Starting at 6th level, you can also use your warding flare feature when a creature that you can see within 30ft of you attacks a creature other than you.",
					"potent spellcasting": "Starting at 8th level, you add your Wisdom modifier. to the damage you deal with any cleric cantrip.",
					"corona of light": "Starting at 17th level, you can use your action to activate an aura of sunlight that lasts for 1 minute or until you dismiss it using another action. You emit bright light in a 60ft radius and dim light 30ft beyond that. Your enemies in the bright light have disadvantage on saving throws against any spell that deals fire or radiant damage."
				},
				"nature": {
					"description": "Followers of this domain, hunt the evil monstrosities that despoil the woodlands, bless the harvest of the faithful, or wither the crops of those who anger their gods.",
					"spells": {
						1: ["animal friendship", "speak with animals"],
						3: ["barkskin", "spike growth"],
						5: ["plant growth", "wind wall"],
						7: ["dominate beast", "grasping vine"],
						9: ["insect plague", "tree stride"]
					},
					"acolyte of nature": "At 1st level, you learn one druid cantrip of your choice. You also gain proficiency in one of the following skills of your choice: animal handling, nature, or survival.",
					"bonus proficiency": "At 1st level, you gain proficiency with heavy armor.",
					"channel divinity: charm animals and plants": "Starting at 2nd level, you can use your channel divinity to charm animals and plants. As an action, you present your holy symbol and invoke the name of your deity. Each beast or plant creature that can see you within 30ft of you must make a Wisdom saving throw. If the creature fails its saving throw, it is charmed by you for 1 minute or until it takes damage. While it is charmed by you, it is friendly to you and other creatures you designate.",
					"dampen elements": "Starting at 6th level, when you or a creature within 30ft of you takes acid, cold, fire, lightning, or thunder damage, you can use your reaction to grant resistance to the creature against that instance of the damage.",
					"divine strike": "At 8th level, you gain the ability to infuse your weapon strikes with divine energy. Once on each of your turns when you hit a creature with a weapon attack, you can cause the attack to deal an extra 1d8 cold, fire, or lightning damage(your choice) to the target. When you reach 14th level, the extra damage to increases to 2d8.",
					"master of nature": "At 17th level, you gain the ability to command animals and plant creatures. While creatures are charmed by your charm animals and plants feature, you can take a bonus action on your turn to verbally command what each of those creatures will do on its next turn."
				},
				"tempest": {
					"description": "Followers of this domain are sent by their gods to inspire fear in the common folk, either to keep those folk on the path of righteousness or to encourage them to offer sacrifices of propitiation to ward off divine wrath.",
					"spells": {
						1: ["fog cloud", "thunderwave"],
						3: ["gust of wind", "shatter"],
						5: ["call lightning", "sleet storm"],
						7: ["control water", "ice storm"],
						9: ["destructive wave", "insect plague"]
					},
					"bonus proficiencies": "At 1st level, you gain proficiency with martial weapons and heavy armor.",
					"wrath of the storm": {
						"description": "At 1st level, you can thunderously rebuke attackers. When a creature within 5ft of you that you can see hits you with an attack, you can use your reaction to cause the creature to make a Dexterity saving throw. The creature takes 2d8 lightning or thunder damage on a failed saving throw, and half as much damage on a successful one.",
						"more_info": "You can use this feature a number of times equal to your Wisdom modifier. You regain all expended uses when you finish a long rest."
					},
					"channel divinity: destructive wrath": "Starting at 2nd level, you can use your channel divinity to wield the power of the storm with unchecked ferocity. When you roll lightning or thunder damage, you can use your channel divinity to deal maximum damage, instead of rolling.",
					"thunderbolt strike": "At 6th level, when you deal lightning damage to a Large or smaller creature, you can also push it up to 10ft away from you.",
					"divine strike": "At 8th level, you gain the ability to infuse your weapon strikes with divine energy. Once on each of your turns when you hit a creature with a weapon attack, you can cause the attack to deal an extra 1d8 thunder damage to the target. When you reach 14th level, the extra damage increases to 2d8.",
					"stormborn": "At 17th level, you have a flying speed equal to your current walking speed whenever you are not underground or indoors."
				},
				"trickery": {
					"description": "Followers of this domain are a disruptive force in the world, puncturing pride, mocking tyrants, stealing from the rich, freeing captives, and flouting hollow traditions. They prefer subterfuge, pranks, deception, and theft rather than direct confrontation.",
					"spells": {
						1: ["charm person", "disguise self"],
						3: ["mirror image", "pass without trace"],
						5: ["blink", "dispel magic"],
						7: ["dimension door", "polymorph"],
						9: ["dominate person", "modify memory"]
					},
					"blessing of the trickster": "Starting at 1st level, you can use your action to touch a willing creature other than yourself to give it advantage on Dexterity (Stealth) checks. This blessing lasts for 1 hour, or until you use this feature again.",
					"channel divinity: invoke duplicity": {
						"description": "Starting at 2nd level, you can use your channel divinity to create an illusory duplicate of yourself.",
						"benefit": "As an action, you create a perfect illusion of yourself that lasts for 1 minute, or until you lose concentration. The illusion appears in an unoccupied space that you can see within 30ft of you. As a bonus action you can move the illusion up to 30ft to a space you can see, but it must remain within 120ft of you.",
						"more_info": "For the duration, you can cast spells as though you were in the illusion's space, but you must use your own senses. Additionally, when both you and your illusion are within 5ft of a creature that can see the illusion, you have advantage on attack rolls against that creature."
					},
					"channel divinity: cloak of shadows": "Starting at 6th level, you can use your channel divinity to vanish. As an action, you become invisible until the end of your next turn. You become visible if you attack or cast a spell.",
					"divine strike": "At 8th level, you gain the ability to infuse your weapon strikes with poison. Once on each of your turns when you hit a creature with a weapon attack, you can cause the attack to deal an extra 1d8 poison damage to the target. When you reach 14th level, increase the damage to 2d8.",
					"improved duplicity": "At 17th level, you can create up to four duplicates of yourself, instead of one, when you use invoke duplicity. As a bonus action on your turn, you can move any number of them up to 30ft, to a maximum range of 120ft."
				},
				"war": {
					"description": "Followers of this domain excel in battle, inspiring others to fight the good fight, or offer acts of violence as prayers.",
					"spells": {
						1: ["divine favor", "shield of faith"],
						3: ["magic weapon", "spiritual weapon"],
						5: ["crusaders mantle", "spirit guardians"],
						7: ["freedom of movement", "stoneskin"],
						9: ["flame strike", "hold monster"]
					},
					"bonus proficiencies": "At 1st level, you gain proficiency with martial weapons and heavy armor.",
					"war priest": {
						"description": "Starting at 1st level, your god delivers bolts of inspiration to you while you are engaged in battle. When you use the Attack action, you can make one weapon attack as a bonus action.",
						"replenish": "You can use this feature a number of times equal to your wisdom modifier. (a minimum of once). You regain all expended uses when you finish a long rest."
					},
					"channel divinity: guided strike": "Starting at 2nd level, you can use your channel divinity to strike with supernatural accuracy. When you make an attack roll, you can use your channel divinity to gain +10 bonus to the roll. You make this choice after you see the roll, but before the DM says if it hits or misses.",
					"channel divinity: war gods blessing": "At 6th level, when a creature within 30ft of you makes an attack roll, you can use your reaction to grant that creature a +10 bonus to the roll, using your channel divinity. You make this choice after you see the roll, but before the DM says if it hit or missed.",
					"divine strike": "At 8th level, you gain the ability to infuse your weapon strikes with divine energy. Once on each of your turns when you hit a creature with a weapon attack, you can cause the attack to deal an extra 1d8 damage of the same type dealt by the weapon to the target. When you reach 14th level increase the damage to 2d8.",
					"avatar of battle": "At 17th level, you gain resistance to bludgeoning, piercing, and slashing damage from nonmagical weapons."
				}
			}
		}
	}
};