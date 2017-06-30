module.exports = {
	"FEATS_ATTRIBUTES_EN_US"	:{
		"description"	: "description",
		"benefits"		: "benefits",
		"prerequisite"	: "prereq"
	},
	"FEATS_EN_US"  : {
		//"Feat" : "Description",

		"alert":{
			"description":"Always on the lookout for danger.",
			"benefits":"You gain +5 to initiative, can no longer be surprised while conscious, and other creatures don't gain advantage on attack rolls against you as a result of being hidden from you." 
		},
		"athlete":{
			"description":"You have undergone extensive physical training to push your body further.", 
			"benefits":"Increase your Strength or Dexterity score by 1 to a maximum of 20, while you are prone standing up uses only 5ft instead, climbing doesn't halve your speed, and you can make a running long jump or a running high jump after moving only 5ft on foot rather than 10ft." 
		},
		"actor":{
			"description":"You become skilled at mimicry and dramatics.",
			"benefits":"Increase your Charisma score by 1 to a maximum of 20. Gain advantage on Charisma(Deception) and Charisma(Performance) checks when trying to pass yourself off as a different person. You can also mimic the speech of another person or the sounds made by other creatures, you must have heard the person or creature for at least 1 minute."
		},
		"charger":{
			"description":"When you use your action to Dash, you can use a bonus action to make 1 melee weapon attack, or shove a creature.",
			"benefits":"If you move at least 10ft in a straight line immediately before taking this bonus action, you either gain +5 bonus to the attack's damage roll, or push the target up to 10ft away from you."
		},
		"crossbow expert":{
			"description":"You have undergone extensive training with the crossbow, and become an expert in the skill.",
			"benefits":"You ignore the loading quality of crossbows that you are proficient in. Being within 5ft of a hostile creature doesn't impose disadvantage on your ranged attack rolls. When you use the Attack action to attack with a one-handed weapon, you can use your bonus action to attack with a loaded hand crossbow."
		},	
		"defensive duelist":{
			"description":"When you are wielding a finesse weapon with which you are proficient and another creature hits you with a melee attack, as a reaction you can add your proficiency bonus to your AC for that attack, potentially causing the attack to miss.",
			"prereq":"Dexterity 13 or higher."
		},
		"dual wielder":{
			"description":"You have mastered fighting with two one-handed weapons.",
			"benefits":"Gain +1 bonus to AC while you are wielding a separate melee weapon in each hand. You can use the two-weapon fighting technique even when the one-handed melee weapons you are wielding aren't light. While dual wielding you can draw or stow two one-handed weapons together, instead of one at a time."
		},
		"dungeon delver":{
			"description":"You have experienced many dungeons in your time, making you alert to hidden traps and secret doors commonly found in dungeons.",
			"benefits":"Gain advantage on Wis(Perception) and Int(Investigation) checks made to detect the presence of secret doors. You gain advantage on saving throws made to avoid or resist traps, as well as resistance to the damage dealt by traps. You can now search for traps at a normal pace instead of a slow pace."
		},
		"durable":{
			"description":"You become hardy and resilient.",
			"benefits":"Increase your Con score by 1 to a maximum of 20. When you roll a Hit Die to regain hit points, the minimum number of hit points equals twice your Con mod (minimum of 2)."
		},
		"elemental adept":{
			"description":"You become adept at one of the following damage types of your choice: acid, cold, fire, lightning, or thunder. You can select this feat multiple times, but each time you do you must choose a different damage type.",
			"benefits":"Spells you cast ignore resistance to damage of the chosen type. In addition, when you roll damage for the spell you cast that deals damage of that type, you can treat any 1 on a damage die as a 2 instead.",
			"prereq":"Ability to cast at least one spell."
		},
		"grappler":{
			"description":"You've developed the skills necessary to hold your own in close-quarters grappling.",
			"benefits":"Gain advantage on attack rolls against a creature you are grappling. You can now use your action to pin a creature grappled by you, to do so make another grapple check, if you succeed you and the creature are restrained until the grapple ends. Creatures that are one size larger than you don't automatically succeed on checks to escape your grapple.",
			"prereq":"Strength 13 or higher."
		},
		"great weapon master":{
			"description":"You've learned to put the weight of a weapon to your advantage, letting its momentum empower your strikes.",
			"benefits":"On your turn, when you score a critical hit with a melee weapon or reduce a creature to 0 hit points with a critical hit, you can make one melee weapon attack as a bonus action. Before you make a melee attack with a heavy weapon that you are proficient with, you can chooose to take a -5 penalty to the attack roll, if it hits add +10 to the attack's damage."
		},
		"healer":{
			"description":"You are an able physician, allowing you to mend wounds quickly and get your allies back in the fight.",
			"benefits":"When you use a healer's kit to stabilize a dying creature, that creature also regains 1 hit point. As an action, you can spend one use of a healer's kit to tend to a creature and restore 1d6+4 hit points to it, plus additional hit points equal to the creature's maximum number of Hit Dice. The creature can't regain hit points from this feat again until it finishes a short or long rest."
		},
		"heavily armored":{
			"description":"You have trained to become a master of fighting in heavy armor.",
			"benefits":"Increase your Strength score by 1 to a maximum of 20, and gain proficiency with heavy armor.",
			"prereq":"Proficiency with medium armor."
		},
		"heavy armor master":{
			"description":"You can use your armor to deflect strikes that would kill others.",
			"benefits":"Increase your Strength score by 1 to a maximum of 20. While you are wearing heavy armor, bludgeoning, piercing, and slashing damage that you take from non-magical weapons is reduced by 3.",
			"prereq":"Proficiency with heavy armor."
		},
		"inspiring leader":{
			"description":"Spend 10 minutes inspiring your companions, shoring up their resolve to fight. When you do so, choose up to 6 friendly creatures within 30ft of you that you can see or hear you and who can understand you.",
			"benefits":"Each creature can gain temporary hit points equal to your level + your Charisma mod. A creature can't gain temporary hit points from this feat again until it finishes a short or long rest.",
			"prereq":"Charisma 13 or higher."
		},
	}	
};