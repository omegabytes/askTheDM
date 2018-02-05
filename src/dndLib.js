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

exports.getClassLevel = function(requestedSpell, requestedSpellLevel, requestedClass){
//TODO: logic for SpellClassIntent to handle user requesting playerLevel and slotLevel
	var spell                   = langEN.SPELLS[requestedSpell];
	var classes                 = langEN.CLASSES[requestedClass];
	var level                   = langEN.SLOT_LEVEL[requestedSpellLevel];
	// var spellClasses         = spell.spellClass; //*obsolete* with addition of classes.js
	var output                  = "";

	//logic for checking if classes can cast certain spells should goes as follows //TODO: Have code review with alex over this
	/* --classes.js-- slot_level : [minPlayerLvl, "spell 1", "spell 2", ...],
	 * var ClassSlotLevel   = classes.class.class_spells.slot_level; //can now check this new variable against the minPlayerLevel?? //TODO: review this logic
     * var ClassPlayerLevel =
	 */

	if (spell) { //if the requested spell exists
		if (classes.indexOf(requestedClass) === -1) { //if the requested class does not exist in the array of classes
			this.attributes['speechOutput']     = requestedClass + "s can't cast " + requestedSpell + ".";
		} else {
			if (level && classes.indexOf(requestedClass) != -1) { //if the requested level(player or spell_slot) exists, and the requested class exists
				this.attributes['spell']        = requestedSpell;
				this.attributes['level']        = requestedSpellLevel;
				this.attributes['speechOutput'] = exports.getSpellDamage(requestedSpell, requestedSpellLevel);
			}else if (classes.indexOf(requestedClass) != -1 && !level) {

			} else {
				this.attributes['speechOutput'] = "Yes. " + requestedSpell + " can be cast by the following classes. " + classes; //FIXME: change 'classes' to point to the list of classes

			}
		}
	}

		//FIXME: change <SlotLevel> slot in utterances to just be <Level>
		/*
		   "Can a -wizard- cast _fireball_ at level =3=?"
		   "... at ~player~ level =3=?"
		   "... at ~slot~ level =3=?"

		   "Can a <PlayerClass> cast <Spell> at <Player_or_Slot> level <Level>?"

			if(!this.attributes['player_or_slot']){
				this.attributes['speechOutput'] = "say stuff";
				this.emit(':elicitSlot', 'playerSlotIntent'); //this calls new intent
			}
		 */

		//TODO: review this comment block for if session attribute doesn't exist.
		/*
		'MoreInfoIntent' : function () {
			if(!this.attributes['character']) {
				this.attributes['speechOutput'] = "Which character would you like more info about?";
				this.emit(':elicitSlot','MoreInfo',this.attributes['speechOutput']);
			}
		 */
	return output;
};

exports.getSpellCast = function(requestedSpell){
	var spell  = langEN.SPELLS[requestedSpell];
	var output                  = "";

	this.attributes['repromptSpeech'] = langEN.REPROMPT;

	//user requests information on casting spell
	if (spell) {
		if(spell.slotLevel === "cantrip") {
			this.attributes['speechOutput'] = requestedSpell + " is a "
				+ spell.school + " cantrip. To cast, you need the following: "
				+ spell.components + ". The spell duration is "
				+ spell.duration + " and has a range of "
				+ spell.range;
		} else {
			this.attributes['speechOutput'] = requestedSpell + " is a level "
				+ spell.slotLevel + " "
				+ spell.school + " spell. To cast, you need the following: "
				+ spell.components + ". The spell duration is "
				+ spell.duration + " and has a range of "
				+ spell.range;
		}

		//otherwise, the user asks for an unknown spell, or Alexa doesn't understand
	}else if (!spell) {
		this.attributes['speechOutput'] = exports.notFoundMessage(this.event.request.intent.slots.Spell.name, requestedSpell);
	}else {
		this.attributes['speechOutput'] = langEN.UNHANDLED;
	}

	return output;
};