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
		"keen mind":{
			"description":"You have a mind that can track time, direction, and detail with uncanny precision.",
			"benefits":"Increase your Intelligence score by 1 to a maximum of 20. You always know which way is north, the number of hours left before the next sunrise or sunset, and you can accurately recall anything you have seen or heard within the past month."
		},
		"lightly armored":{
			"description":"You have trained to become a master of fighting in light armor.",
			"benefits":"Increase your Strength or Dexterity score by 1 to a maximum of 20, and gain proficiency with light armor."
		},
		"linguist":{
			"description":"You have studied languages and codes throughly.",
			"benefits":"Increase you Intelligence score by 1 to a maximum of 20. You also learn 3 languages of your choice, and can ably create written ciphers. Others can't decipher a code you create unless you teach them, they succeed on an Intelligence check(DC equal to your Intelligence score + your proficiency bonus), or they use magic to decipher it."
		},
		"lucky":{
			"description":"You have inexplicable luck that seems to kick in at just the right moment.",
			"benefits":"You have 3 luck points. Whenever you make an attack roll, ability check, or a saving throw, you can spend one luck point to roll an additional d20. You can choose to spend one of your luck points after you roll the die, but before the outcome is determined. You can then choose which of the d20s is used instead. You can also spend one luck point when an attack roll is made against you, roll a d20 and choose whether the attack's roll or yours is used. You regain your expended luck points at the end of a long rest."
		},
		"mage slayer":{
			"description":"You have practiced techniques useful in melee combat against spellcasters.",
			"benefits":"When a creature within 5 ft of you casts a spell, you can use your reaction to make a melee weapon attack against that creature. When you damage a creature that is concentrating on a spell, that creature has disadvantage on the saving throw to maintain concentration. You also gain advantage on saving throws against spells cast by creatures within 5ft of you."
		},
		"magic initiate":{
			"description":"Become an initiate of the bard, cleric, druid, sorcerer, warlock, or wizard class. Your spellcasting ability for these spells depends on the class you chose. Charisma for bard, sorcerer, or warlock. Wisdom for cleric or druid, and Intelligence for wizard.",
			"benefits":"You learn two cantrips of your choice from those classes's spell list. In addition, choose one 1st level spell from that same list. You learn that spell but can only cast it at its lowest level. Once you cast it, you must finish a long rest before you can cast it again."
		},
		"martial adept":{
			"description":"You have martial training that allows you to perform special combat maneuvers.",
			"benefits":"You learn two maneuvers of your choice from among those available to the Battle Master archetype in the fighter class. If a maneuver you use requires your target to make a saving throw to resist the maneuver's effect, the saving throw DC equals 8 + your proficiency bonus + your Strength or Dexterity mod. If you already have superiority dice, you gain one more; otherwise you have one superiority die which is a d6. This die is used to fuel your maneuvers and is expended when you use it. You regain your expended superiority dice when you finish a short or long rest."
		},
		"medium armor master":{
			"description":"You have trained to become a master of fighting in medium armor.",
			"benefits":"Wearing medium armor doesn't impose disadvantage on your Dexterity(Stealth) checks. Additional, when you wear medium armor, add 3 instead of 2 to your AC. Only if your Dexterity is 16 or higher.",
			"prereq":"Proficiency with medium armor."
		},
		"mobile":{
			"description":"You are exceptionally speedy and agile.",
			"benefits":"Your speed increases by 10ft, and when you use the Dash action, difficult terrain doesn't cost you extra movement that turn. When you make a melee attack against a creature, you don't provoke opportunity attacks from that creature for the rest of the turn, whether you hit or not."
		},
		"moderately armored":{
			"description":"You have trained your body to become adept at medium armor and the use of shields.",
			"benefits":"Increase your Strength or Dexterity score by 1 to a maximum of 20. Additionally, gain proficiency with medium armor and shields.",
			"prereq":"Proficiency with light armor."
		},
		"mounted combatant":{
			"description":"You are a dangerous foe to face while mounted.",
			"benefits":"You gain advantage on melee attack rolls against any unmounted creature that is smaller than your mount. You can also force an attack targeted towards your mount to you instead. Additionally, if your mount is subject to an effect that allows it to make a Dexterity saving throw to take only half damage, it takes no damage instead if it succeeds the save and only half if it fails."
		},
		"observant":{
			"description":"You are quick to notice details of your environment.",
			"benefits":"Increase your Intelligence or Wisdom score by 1 to a maximum of 20. If you can see a creature's mouth while it is speaking a language you understand, you can interpret what it's saying by reading its lips. Additionally, you have +5 bonus to your passive Wisdom(Perception) and passive Intelligence(Investigation) scores."
		},
		"polearm master":{
			"description":"You are a master at keeping your enemies at bay using reach weapons.",
			"benefits":"When you take the Attack action and attack with only a glaive, halberd, or quarterstaff you can use your bonus action to make a melee attack with the opposite end of the weapon. The damage die for this attack is a d4 dealing bludgeoning damage. Additionally, while you are wielding a glaive, halberd, pike, or quarterstaff other creatures provoke an opportunity attack from you when they enter your reach."
		},
		"resilient":{
			"description":"You become more honed at a certain ability.",
			"benefits":"Increase one ability score by 1 to a maximum of 20. You also gain proficiency in saving throws using the chosen ability."
		},
		"ritual caster":{
			"description":"You have acquired a ritual book holding two 1st-level spells of your choice that have the ritual tag. Choose one of the following classes: bard, cleric, druid, sorcerer, warlock or wizard. Depending on the class you chose, the spellcasting ability for these spells are Charisma for bard, sorcerer, or warlock. Wisdom for cleric or druid and Intelligence for wizard.",
			"benefits":"If you come across a spell in written form, such as a magical scroll or spellbook, the spell must be on the spell list for the class you chose, the spell level can be no higher than half your level rounded up, and must have the ritual tag. The process of copying the spell takes 2 hours per level of spell, and costs 50 gold per level as well.",
			"prereq":"Intelligence or Wisdom 13 or higher."
		},
		"savage attacker":{
			"description":"You have become enraged by the poor damage you inflicted on an enemy, and lunge to make another attack.",
			"benefits":"Once per turn when you roll damage for a melee weapon attack, you can reroll the weapon's damage dice and use with total."
		},
		"sentinel":{
			"description":"You have mastered techniques to take advantage of every drop in any enemy's guard.",
			"benefits":"When you hit a creature with an opportunity attack, the creature's speed becomes 0 for the rest of the turn. Creatures within 5ft of you provoke opportunity attack from you even if they take the Disengage action. Additionally, when a creature within 5ft of you makes an attack against a target other than you, you can use your reaction to make a melee weapon attack against the attacking creature."
		},
		"sharpshooter":{
			"description":"You have mastered ranged weapons and can make shots that others find impossible. Like Legolas during the barrel scene from the Hobbit movies, that was whack.",
			"benefits":"Attacking at long range doesn't impose disadvantage on your ranged weapon attack rolls. You ranged weapon attacks also ignore half cover and three-quarters cover. Additionally, before you make an attack with a ranged weapon that you are proficient with, you can choose to take a -5 penalty to the attack roll, if the attack hits add +10 to the attack's damage."
		},
		"shield master":{
			"description":"Your combat prowess with shields has taught you to not only use them for protection but also for offense.",
			"benefits":"If you take the Attack action on your turn, you can use a bonus action to try to shove a creature within 5ft of you with your shield. If you are subjected to an effect that allows you to make a Dexterity saving throw to take only half damage, using your reaction you can interpose your shield between you and the source to take no damage on a successful save. Additionally, if you aren't incapacitated, you can add your shield's AC bonus to any Dexterity saving throw you make against a spell or other harmful effect that effects you."
		},
		"skilled":{
			"description":"Along your travels you have become adept using many tools and have practiced many different skills.",
			"benefits":"You gain proficiency in any combination of three skills or tools of your choice."
		},
		"skulker":{
			"description":"You are an expert at slinking through the shadows.",
			"benefits":"You can try to hide when you are lightly obscured from a creature that you are hiding from. When you are hidden from a creature and miss it with a ranged weapon attack, making the attack doesn't reveal your position. Additionally, dim light doesn't impose disadvantage on your Wisdom(Perception) checks relying on sight.",
			"prereq":"Dexterity 13 or higher."
		},
		"spell sniper":{
			"description":"You have learned techniques to enhance your spells to reach new heights.",
			"benefits":"When you cast a spell that requires you to make an attack roll, the spell's range is doubled. Your ranged spell attacks ignore half cover and three-quarters cover. Additionally, you learn one cantrip that requires an attack roll. Choose the cantrip from the bard, cleric, druid, sorcerer, warlock, or wizard spell list. Your spellcasting ability for this cantrip depends on the spell list you chose from: Charisma for bard, sorcerer, or warlock; Wisdom for cleric or druid, and Intelligence for wizard.",
			"prereq":"The ability to cast at lease one spell."
		},
		"tavern brawler":{
			"description":"You are accustomed to the no holds barred way to fighting after a drunken night, using any weapon that happens to be at hand.",
			"benefits":"Increase your Strength or Constitution score by 1 to a maximum of 20, and are proficient with improvised weapons and unarmed strikes, which uses a d4 for damage. When you hit a creature with an unarmed strike or an improvised weapon on your turn, you can use a bonus acion to attempt to grapple the target."
		},
		"tough":{
			"description":"You have built up your resolve over your time adventuring.",
			"benefits":"Your hit point maximum increases by an amount equal to twice your level when you gain this feat. Whenever you gain a level thereafter, your hit point maximum increases by an additional 2 hit points."
		},
		"war caster":{
			"description":"You have practiced casting spells in the heat of battle, learning techniques that allow you to turn the tables in a fight.",
			"benefits":"You have advantage on Constitution saving throws that you make to maintain your concentration on a spell when you take damage. You can also perform the somatic components of spells even when you have weapons or a shield in one or both hands. Additionally, when a hostile creatures movement provokes an opportunity attack from you, use your reaction to cast a spell at the creature, rather than making an opportunity attack. The spell must have a casting time of 1 action and must target only that creature.",
			"prereq":"The ability to cast at least one spell."
		},
		"weapon master":{
			"description":"You have practiced extensively with aa variety of weapons, mastering their weight and length as you fight.",
			"benefits":"Increase your Strength or Dexterity score by 1 to a maximum of 20, and gain proficiency with four weapons of your choice."
		}
	}	
};