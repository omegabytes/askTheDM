var languageStrings = require('./languageStrings');
var langEN = languageStrings.en.translation;

// not found message handler
exports.notFoundMessage = function(slotName, userInput) {
	var speechOutput = langEN.NOT_FOUND_MESSAGE;
    
    if(userInput) {
    	speechOutput += "the " + slotName + " info for " + userInput + ".";
    }else {
    	speechOutput += langEN.NOT_FOUND_WITHOUT_OBJECT_NAME;
    }
    return speechOutput;
};

// returns the page(s) where a subject can be found
// in the 5e player's handbook
exports.pageFind = function(index, indexName) {
    var pageString = "";
    if(typeof index.pages === 'string'){
        pageString = index.pages
    }
    else{
        if(index.pages.length>1){
            pageString += "pages ";
            for(var i = 0; i <= index.pages.length-2; i++){
                pageString += index.pages[i] + ", "
            }
            pageString += "and " + index.pages[index.pages.length-1]
        }
        else{
            pageString = "page " + index.pages
        }
    }
    return indexName + " can be found on " + pageString + ". ";
};

// roll dice function
exports.rollDice = function(quantity,sides) {
    var facevalue;
    var output = 0;

    for (var i=0;i<quantity;i++) {
        facevalue = Math.floor(Math.random()*sides) + 1;
        output += facevalue;
    }
    return output;
};

// validates the slot, matches the value, and sets it
exports.validateAndSetSlot = function(slot) {
	if (slot && slot.value) {
		return slot.value.toLowerCase();
	}else {
		return null;
	}
};

exports.getSpellDamage = function(requestedSpell, requestedSpellLevel){
	var spell                   = langEN.SPELLS[requestedSpell];
	var level                   = langEN.SLOT_LEVEL[requestedSpellLevel];
	var output                  = "";
//TODO: create function that encapsulates spell damage processing
	if(spell && spell.damage === undefined){
		output = "That spell does not do damage."
	}else if(spell && typeof spell.damage === 'string'){
		output = spell.damage;
	}else{
		if(spell && spell['slotLevel'] === 'cantrip')
		{ //if the requested spell is a cantrip
			var dmg = spell.damage.playerLevel[level]; //stores the the damage of the spell at requested level
			var dmgType = spell.damage.type;
			output = "At player level " + level
				+ " the cantrip " + requestedSpell
				+ " does " + dmg + " " + dmgType + ".";
		}else if(spell && level > 9){
			output = "Player level only effects the damage done by cantrips. "
				+ requestedSpell + " is a spell, and is cast using spell slots.";
		}else if (spell && !level){
			output = "For damage amount, please include the slot or player level you wish to cast it at.";
		}else if (!spell || !level) {
			output = "I didn't hear the level or the spell name, please ask again.";
		}else { //if the requested spell is a normal spell
			var dmg = spell.damage.levels[level]; //stores the the damage of the spell at requested level
			var dmgType = spell.damage.type;
			output = "A level " + level + ", "
				+ requestedSpell + " does "
				+ dmg + " " + dmgType + ".";
		}
	}
	return output;
};