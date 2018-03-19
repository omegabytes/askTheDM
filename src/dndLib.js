let languageStrings = require("./languageStrings");
let langEN = languageStrings.en.translation;
// not found message handler
exports.notFoundMessage = function (slotName, userInput) {
	let output = langEN.NOT_FOUND_MESSAGE;
	if (userInput) {
		output += "the " + slotName + " info for " + userInput + ".";
	} else {
		output += langEN.NOT_FOUND_WITHOUT_OBJECT_NAME;
	}
	return output;
};
// returns the page(s) where a subject can be found
// in the 5e player's handbook
exports.pageFind = function (index, indexName) {
	let pageString = "";
	if (typeof index.pages === 'string') {
		pageString = index.pages
	} else {
		if (index.pages.length > 1) {
			pageString += "pages ";
			for (let i = 0; i <= index.pages.length - 2; i++) {
				pageString += index.pages[i] + ", "
			}
			pageString += "and " + index.pages[index.pages.length - 1]
		} else {
			pageString = "page " + index.pages
		}
	}
	return indexName + " can be found on " + pageString + ". ";
};
// roll dice function
exports.rollDice = function (quantity, sides) {
	let facevalue;
	let output = 0;
	for (let i = 0; i < quantity; i++) {
		facevalue = Math.floor(Math.random() * sides) + 1;
		output += facevalue;
	}
	return output;
};
// validates the slot, matches the value, and sets it
exports.validateAndSetSlot = function (slot) {
	if (slot && slot.value) {
		return slot.value.toLowerCase();
	} else {
		return null;
	}
};
//returns the conditions that can affect a player
exports.getConditions = function (requestedConditionName) {
	let condition = langEN.CONDITIONS[requestedConditionName];
	let output = "";
	if (condition) { //user requests information on condition
		output = condition;
	} else if (requestedConditionName) {
		output = exports.notFoundMessage(condition.name, requestedConditionName);
	} else {
		output = langEN.UNHANDLED;
	}
	return output;
};
//returns the rolled dice after user provided information
exports.getDiceRoll = function (numberOfDice, modifier, diceSides, status) {
	let output = "";
	let firstRoll;
	let secondRoll;
	let result;
	if ((diceSides == null) || (diceSides === "?") || (numberOfDice === "?")) {
		output = "I'm sorry I didn't quite catch that, please ask again.";
		this.emit(':ask', output);
	}
	diceSides = diceSides.match(/\d+/).join("");
	if (status == null) {
		// calculate the result of a normal roll
		result = exports.rollDice(numberOfDice, diceSides) + Number(modifier);
		output = "The result of the roll is " + result;
	} else if (diceSides === 20) {
		// calculate the result of a roll with advantage/disadvantage
		firstRoll = exports.rollDice(numberOfDice, diceSides);
		secondRoll = exports.rollDice(numberOfDice, diceSides);
		if (status === "advantage") {
			result = Math.max(firstRoll, secondRoll) + Number(modifier);
		}
		if (status === "disadvantage") {
			result = Math.min(firstRoll, secondRoll) + Number(modifier);
		}
		output = "You roll with " + status + ". Your first roll is " + firstRoll + ", and your second roll is " + secondRoll + ". The result of the roll with modifiers is " + result;
	} else {
		output = "You can only have advantage or disadvantage on d 20 rolls."
	}
	return output;
};
//returns the exhaustion effects at each exhaustion level
exports.getExhaustion = function (requestedExhaustionLevel) {
	let output = "";
	let exhaustionLevel = langEN.EXHAUSTION_LEVELS[requestedExhaustionLevel];
	if (exhaustionLevel) { //user requests information on exhaustion levels
		output = exhaustionLevel;
	} else if (requestedExhaustionLevel) { //otherwise, the user asks for an unknown exhaustion level, or Alexa doesn't understand
		output = exports.notFoundMessage(exhaustionLevel.name, requestedExhaustionLevel) + " exhaustion.";
	} else {
		output = langEN.CONDITIONS.exhaustion;
	}
	return output;
};
//returns the equipment packs that each player can choose
exports.getEquipmentPack = function (requestedEquipmentPack) {
	let output = "";
	let equipmentPack = langEN.EQUIPMENT_PACKS[requestedEquipmentPack];
	//let packItems = equipmentPack.contents;
	if (equipmentPack) { // if requested equipment pack exists
		if (equipmentPack.contents) { //if the equipment pack has contents
			output = "The contents of " + requestedEquipmentPack + " are ";
			for (let i in equipmentPack.contents) { //iterate through the requested equipment pack
				if (equipmentPack.contents.hasOwnProperty(i)) {
					let packItems = equipmentPack.contents[i];
					for(let x in packItems){ //iterate through the contents of the requested equipment pack
						if(packItems.hasOwnProperty(x)){
							output = packItems.quantity + " " + packItems.name; //todo: add a newline after each packItem is spit out
						}
					}
				}
			}
		}
	} else if (requestedEquipmentPack) {
		output = exports.notFoundMessage(equipmentPack, requestedEquipmentPack);
	} else {
		output = langEN.UNHANDLED;
	}
	return output;
};
//returns the feats that each player can choose
exports.getFeats = function (requestedFeat, requestedFeatAttribute) {
	let feat = langEN.FEATS[requestedFeat];
	let featAttribute = langEN.FEAT_ATTRIBUTES[requestedFeatAttribute];
	let output = "";
	//user requests information on feats
	if (feat) {
		output = feat.description;
		if (featAttribute) {
			output = feat[featAttribute];
		}
	} else if (requestedFeat) { //otherwise, the user asks for an unknown feat, or Alexa doesn't understand
		output = exports.notFoundMessage(feat.name, requestedFeat);
	}
	return output;
};
//returns the index page logic after user provided information
exports.getIndex = function (requestedIndexName) {
	let output = "";
	let index = langEN.INDEX[requestedIndexName];
	if (index) {
		output = exports.pageFind(index, requestedIndexName);
	} else if (requestedIndexName) {
		output = exports.notFoundMessage(index.name, requestedIndexName);
	}
	return output;
};
//returns the items and their respective info requested from the user
exports.getItems = function (requestedItem, requestedItemAttribute) {
	let item = langEN.ITEMS[requestedItem];
	let itemAttribute = langEN.ITEM_ATTRIBUTES[requestedItemAttribute];
	let output = "";
	if (item) { // if requested item exists
		if (itemAttribute) { // if requested attribute exists for that item
			output = item[itemAttribute];
		} else if (!itemAttribute && item.itemType) { // if no attribute provided, but item has a type
			output = "It is a " + item.itemType;
		} else { //if no item type, default to category
			output = "It is a " + item.category;
		}
	} else if (requestedItem) {
		output = exports.notFoundMessage(item.name, requestedItem);
	} else {
		output = langEN.NOT_FOUND_MESSAGE + langEN.NOT_FOUND_WITHOUT_OBJECT_NAME;
	}
	return output;
};
//returns the requested spell attributes from the user
exports.getSpellCast = function (requestedSpell) {
	let spell = langEN.SPELLS[requestedSpell];
	let output = "";
	//user requests information on casting spell
	if (spell) {
		if (spell.slotLevel === "0") {
			output = requestedSpell + " is a " + spell.school + " cantrip. To cast, you need the following: " + spell.components + ". The spell duration is " + spell.duration + " and has a range of " + spell.range + ".";
		} else {
			output = requestedSpell + " is a level " + spell.slotLevel + " " + spell.school + " spell. To cast, you need the following: " + spell.components + ". The spell duration is " + spell.duration + " and has a range of " + spell.range + ".";
		}
	} else if (requestedSpell) { //otherwise, the user asks for an unknown spell, or Alexa doesn't understand
		output = exports.notFoundMessage(spell.name, requestedSpell);
	} else {
		output = langEN.UNHANDLED;
	}
	return output;
};
//returns the requested class spell information from the user
exports.getClassLevel = function (requestedSpell, requestedSpellLevel, requestedClass) {
	let spell = langEN.SPELLS[requestedSpell];
	let level = langEN.SLOT_LEVEL[requestedSpellLevel];
	// let spellClasses = ["barbarian", "bard", "cleric", "druid", "fighter", "monk", "paladin", "ranger", "rogue", "sorcerer", "warlock", "wizard"]; //todo: this variable not needed in this iteration of getClassLevel, might be used once we incorporate PClasses and their spellLists
	let output = "I\'m sorry please provide the player class, spell level, and spell name you wish to know more information about.";
	if (spell) { // if the requested spell exists
		if (spell.spellClass.indexOf(requestedClass) === -1) { // if the requested class does not exist in the array of classes found in spells.js for requested spell
			output = "The class " + requestedClass + " cannot cast the spell " + requestedSpell + ".";
		} else { // the requested class exists in the array of classes in spells.js for requested spell
			for (let i in spell.spellClass) { // looks at each element in the array of able-classes for requested spell
				if (spell.spellClass.hasOwnProperty(i)) { //makes sure that spell.spellClass array has at least 1 element in its array
					if (level) { //if the requested spell can be cast at the requested level
						if (spell.slotLevel === "0") { //if requested spell is a cantrip
							output = "This spell is a cantrip, so the class " + requestedClass + " can cast the spell " + requestedSpell + " without the need of a spell slot.";
						} else if (level > 9) { //if user provides a level above allowed spell slots
							output = "A " + requestedClass + " can cast this spell. However, the level you provided is above the necessary spell slots.";
						} else { //if requested spell is a spell using spell slots
							if (level < spell.slotLevel) { //if the requested level is lower than the level needed to cast the spell
								output = "Yes, a " + requestedClass + " is able to cast " + requestedSpell + ", but the provided level is too low of a spell slot to cast it.";
							} else {
								output = "Yes, a " + requestedClass + " can cast " + requestedSpell + " using a " + requestedSpellLevel + " level spell slot.";
							}
						}
					} else { //if the user doesn't provide level
						output = "I\'m sorry please provide a level for the spell you wish to know more information about.";
					}
				}
			}
		}
	} else if (requestedSpell) { //otherwise, the user asks for an unknown spell, or Alexa doesn't understand
		output = exports.notFoundMessage(spell.name, requestedSpell);
	}
	return output;
};
//returns the requested spell damage from the user
exports.getSpellDamage = function (requestedSpell, requestedSpellLevel) {
	let spell = langEN.SPELLS[requestedSpell];
	let level = langEN.SLOT_LEVEL[requestedSpellLevel];
	let output = "That spell does not do damage.";
	let dmg;
	let dmgType;
	if (spell && level) {
		if (spell.damage) {
			if (spell.damage.desc) {
				output = spell.damage.desc;
			}
			if (spell.damage.type) {
				dmg = spell.damage.levels[level]; //stores the the damage of the spell at requested level
				dmgType = spell.damage.type;
				if (spell.slotLevel === "0") { //if the requested spell is a cantrip
					output = "At player level " + level + " the cantrip " + requestedSpell + " does " + dmg + " " + dmgType + ".";
				} else if (level > 9) { //if the requested level is above 9, it does cantrip damage progression
					output = "Player level only effects the damage done by cantrips. " + requestedSpell + " is a spell, and is cast using spell slots.";
				} else {
					output = "A level " + level + ", " + requestedSpell + " does " + dmg + " " + dmgType + ".";
				}
			}
		}
	} else if (requestedSpell) { //otherwise, the user asks for an unknown spell, or Alexa doesn't understand
		output = exports.notFoundMessage(spell.name, requestedSpell);
	} else {
		output = "I didn't hear the level or the spell name, please ask again.";
	}
	return output;
};
//returns the requested spell healing information from the user
exports.getSpellHeal = function (requestedSpell, requestedSpellLevel) {
	let spell = langEN.SPELLS[requestedSpell];
	let level = langEN.SLOT_LEVEL[requestedSpellLevel];
	let output = "That spell does not restore health.";
	let heals;
	if (spell && level) {
		if (spell.healing) {
			output = spell.healing.desc;
		}
		if (spell.healing.levels) {
			heals = spell.healing.levels[level];
			if (heals > 9) {
				output = "Healing spells can not be cast using spell slots above level 9.";
			} else {
				output = "At level " + requestedSpellLevel + " " + requestedSpell + " heals " + heals + " plus your spellcasting ability" + " modifier.";
			}
		}
	} else if (requestedSpell) { //otherwise, the user asks for an unknown spell, or Alexa doesn't understand
		output = exports.notFoundMessage(spell.name, requestedSpell);
	} else {
		output = "For healing amount, please include the spell slot level you wish to cast it at.";
	}
	return output;
};
//returns the requested spell and spell attribute from the user
exports.getSpells = function (requestedSpell, requestedSpellAttribute) {
	let spell = langEN.SPELLS[requestedSpell];                    //spell exists in the list of spells
	let spellAttribute = langEN.SPELL_ATTRIBUTES[requestedSpellAttribute]; //spell attribute exists in the list of attributes
	let output = spell[spellAttribute];
	//if the user asks for the attribute of a spell
	if (spell && spellAttribute) {
		//if the attribute is damage and the requested spell does not have damage
		if (requestedSpellAttribute === "damage") {
			output = exports.getSpellDamage(requestedSpell);
		} else if (requestedSpellAttribute === "healing") {
			output = exports.getSpellHeal(requestedSpell);
		}
	} else if (requestedSpell) { //otherwise, the user asks for an unknown spell, or Alexa doesn't understand
		output = exports.notFoundMessage(spell.name, requestedSpell);
	} else {
		output = spell.shortDescription;
	}
	return output;
};