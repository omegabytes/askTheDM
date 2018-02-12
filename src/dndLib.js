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

exports.getConditions = function(requestedConditionName){
	var condition               = langEN.CONDITIONS[requestedConditionName];
	var output                  = "";

	if (condition) { //user requests information on condition
		output = condition;
	}else if (requestedConditionName) {
		output = exports.notFoundMessage(this.event.request.intent.slots.Condition.name, requestedConditionName);
	}else {
		output = langEN.UNHANDLED;
	}
	return output;
};

exports.getDiceRoll = function(numberOfDice, modifier, diceSides, status){
	var output      = "";
	var firstRoll;
	var secondRoll;
	var result;

	if((diceSides == null) || (diceSides == "?") || (numberOfDice == "?")){
		output = "I'm sorry I didn't quite catch that, please ask again";
		this.emit(':ask', output);
	}

	diceSides = diceSides.match(/\d+/).join("");

	if (status == null) {
		// calculate the result of a normal roll
		result = exports.rollDice(numberOfDice,diceSides) + Number(modifier);
		output = "The result of the roll is " + result;
	}else if(diceSides==20){
		// calculate the result of a roll with advantage/disadvantage
		firstRoll  = exports.rollDice(numberOfDice,diceSides);
		secondRoll = exports.rollDice(numberOfDice,diceSides);

		if (status === "advantage") {
			result = Math.max(firstRoll,secondRoll) + Number(modifier);
		}

		if (status === "disadvantage") {
			result = Math.min(firstRoll,secondRoll) + Number(modifier);
		}

		output = "You roll with "
			+ status
			+ ". Your first roll is "
			+ firstRoll
			+ ", and your second roll is "
			+ secondRoll
			+ ". The result of the roll with modifiers is "
			+ result;
	}else{
		output = "You can only have advantage or disadvantage on d 20 rolls"
	}

	return output;
};

exports.getExhaustion = function(requestedExhaustionLevel){
	var output                  = "";
	var exhaustionLevel         = langEN.EXHAUSTION_LEVELS[requestedExhaustionLevel];

	if(exhaustionLevel){ //user requests information on exhaustion levels
		output = exhaustionLevel;
	}else if (requestedExhaustionLevel) { //otherwise, the user asks for an unknown exhaustion level, or Alexa doesn't understand
		output = exports.notFoundMessage(this.event.request.intent.slots.ExLevel.name, requestedExhaustionLevel)
			+ " exhaustion.";
	}else if (!requestedExhaustionLevel) {
		output = langEN.CONDITIONS.exhaustion;
	}
	else {
		output = langEN.UNHANDLED;
	}
	return output;
};

exports.getFeats = function(requestedFeat,requestedFeatAttribute){
	var output                 = "";
	var thisFeat               = langEN.FEATS[requestedFeat];
	var thisFeatAttribute      = langEN.FEAT_ATTRIBUTES[requestedFeatAttribute];

	//user requests information on feats
	if (thisFeat && thisFeatAttribute) {
		output = thisFeat[thisFeatAttribute];
	}else if(thisFeat && !thisFeatAttribute){
		output = thisFeat.description;
	}else if (requestedFeat) { //otherwise, the user asks for an unknown feat, or Alexa doesn't understand
		output = exports.notFoundMessage(this.event.request.intent.slots.Feat.name, requestedFeat);
	}else {
		output = langEN.UNHANDLED;
	}
	return output;
};

exports.getIndex = function(requestedIndexName){
	var output              = "";
	var index               = langEN.INDEX[requestedIndexName];

	if(index){
		output = exports.pageFind(index, requestedIndexName);
	}else if (requestedIndexName) {
		output = exports.notFoundMessage(this.event.request.intent.slots.Index.name, requestedIndexName);
	}else {
		output = langEN.UNHANDLED;
	}
	return output;
};

exports.getItems = function(requestedItem,requestedItemAttribute){
	var output                   = "";
	var item                     = langEN.ITEMS[requestedItem];
	var itemAttribute            = langEN.ITEM_ATTRIBUTES[requestedItemAttribute];

	if(item && itemAttribute){
		if(!item[itemAttribute]){ //if requested item attribute doesnt exist for requested item
			output = langEN.NOT_FOUND_MESSAGE + langEN.NOT_FOUND_WITHOUT_OBJECT_NAME;
		} else {
			output  = item[itemAttribute];
		}
	}else if(item && !itemAttribute){ //user provides the item but the attributes doesnt exist. ie: shield has attribute 'strength', while daggers do not
		if(item.itemType){
			output = "It is a " + item.itemType;
		} else {
			output = "It is a " + item.category;
		}
	}else if (requestedItem) {
		output = exports.notFoundMessage(this.event.request.intent.slots.Item.name,requestedItem);
	}else {
		output = langEN.UNHANDLED;
	}
	return output;
};

exports.getSpellCast = function(requestedSpell){
	var spell                   = langEN.SPELLS[requestedSpell];
	var output                  = "";

	//user requests information on casting spell
	if (spell) {
		if(spell.slotLevel === "cantrip") {
			output = requestedSpell + " is a "
				+ spell.school + " cantrip. To cast, you need the following: "
				+ spell.components + ". The spell duration is "
				+ spell.duration + " and has a range of "
				+ spell.range;
		} else {
			output = requestedSpell + " is a level "
				+ spell.slotLevel + " "
				+ spell.school + " spell. To cast, you need the following: "
				+ spell.components + ". The spell duration is "
				+ spell.duration + " and has a range of "
				+ spell.range;
		}
	}else if (!spell) { //otherwise, the user asks for an unknown spell, or Alexa doesn't understand
		output = exports.notFoundMessage(this.event.request.intent.slots.Spell.name, requestedSpell);
	}else {
		output = langEN.UNHANDLED;
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
			output = requestedClass + "s can't cast "
				+ requestedSpell + ".";
		} else {
			if (level && classes.indexOf(requestedClass) != -1) { //if the requested level(player or spell_slot) exists, and the requested class exists
				this.attributes['spell']        = requestedSpell;
				this.attributes['level']        = requestedSpellLevel;
				output = exports.getSpellDamage(requestedSpell, requestedSpellLevel);
			}else if (!level) { //removed (classes.indexOf(requestedClass) != -1) from conditional statement
				//TODO: work on logic for this

			} else {
				output = "Yes. " + requestedSpell 
					+ " can be cast by the following classes. " 
					+ classes; //FIXME: make sure 'classes' points to the list of classes found in classes.js

			}
		}
	}
	/*
	   "Can a -wizard- cast _fireball_ at level =3=?"
	   "... at ~player~ level =3=?"
	   "... at ~slot~ level =3=?"

	   "Can a <PlayerClass> cast <Spell> at <Player_or_Slot> level <Level>?"

		if(!this.attributes['player_or_slot']){
			output = "say stuff";
			this.emit(':elicitSlot', 'playerSlotIntent'); //this calls new intent
		}
	 */
	//TODO: review this comment block for if session attribute doesn't exist.
	/*
	'MoreInfoIntent' : function () {
		if(!this.attributes['character']) {
			output = "Which character would you like more info about?";
			this.emit(':elicitSlot','MoreInfo',output);
		}
	 */
	return output;
};

exports.getSpellDamage = function(requestedSpell, requestedSpellLevel){
	var spell                   = langEN.SPELLS[requestedSpell];
	var level                   = langEN.SLOT_LEVEL[requestedSpellLevel];
	var output                  = "";
	var dmg                     = spell.damage.playerLevel[level]; //stores the the damage of the spell at requested level
	var dmgType                 = spell.damage.type;

	if(spell && spell.damage === undefined){
		output = "That spell does not do damage."
	}else if(spell && typeof spell.damage === 'string'){
		output = spell.damage;
	}else{
		if(spell && spell['slotLevel'] === 'cantrip')
		{ //if the requested spell is a cantrip
			dmg     = spell.damage.playerLevel[level];
			dmgType = spell.damage.type;
			output  = "At player level " + level 
				+ " the cantrip " + requestedSpell 
				+ " does " + dmg 
				+ " " + dmgType 
				+ ".";
		}else if(spell && level > 9){
			output = "Player level only effects the damage done by cantrips. "
				+ requestedSpell + " is a spell, and is cast using spell slots.";
		}else if (spell && !level){
			output = "For damage amount, please include the slot or player level you wish to cast it at.";
		}else if (!spell || !level) {
			output = "I didn't hear the level or the spell name, please ask again.";
		}else { //if the requested spell is a normal spell
			dmg     = spell.damage.levels[level];
			dmgType = spell.damage.type;
			output  = "A level " + level 
				+ ", " + requestedSpell 
				+ " does " + dmg 
				+ " " + dmgType 
				+ ".";
		}
	}
	return output;
};

exports.getSpellHeal = function(requestedSpell,requestedSpellLevel){
	var spell                   = langEN.SPELLS[requestedSpell];
	var level                   = langEN.SLOT_LEVEL[requestedSpellLevel];
	var output                  = "";
	var heals                   = spell.healing.levels[level];

	if(spell && spell.healing === undefined)
	{
		output = "That spell does not restore health.";
	}else if(spell && typeof spell.healing === "string"){
		output = spell.healing;
	}else if (spell && !level){ //if the requested spell is provided but not the level
		output =  "For healing amount, please include the spell slot level you wish to cast it at.";
	}else if(level && !spell){ //if the level is provided but not the spell
		output = exports.notFoundMessage(this.event.request.intent.slots.Spell.name, requestedSpell);
	}else{
		heals = spell.healing.levels[level];

		if(spell && level > 9){ //if the requested spell is cast using a slot above 9th
			output = "Healing spells can not be cast using spell slots above level 9.";
		}else{
			output = "At level " + level 
				+ " " + requestedSpell 
				+ " heals " + heals 
				+ " plus your spellcasting ability modifier.";
		}
	}
	return output;
};

exports.getSpells = function(requestedSpell,requestedSpellAttribute){ 
	var output                  = "";
	var spell                   = langEN.SPELLS[requestedSpell];                    //spell exists in the list of spells
	var spellAttribute          = langEN.SPELL_ATTRIBUTES[requestedSpellAttribute]; //spell attribute exists in the list of attributes

	// //if the user asks for the attribute of a spell
	if (spell && requestedSpellAttribute) {
		//if the attribute is damage and the requested spell does not have damage
		if((requestedSpellAttribute === "damage" || requestedSpellAttribute === "healing") && spell[spellAttribute] === undefined) {
			output = requestedSpell + " does not have "
				+ requestedSpellAttribute +".";
		}else if((requestedSpellAttribute === "damage" || requestedSpellAttribute === "healing") && typeof spellAttribute === typeof String) {
			output = spell[spellAttribute];
		}else if(requestedSpellAttribute === "damage"){
			var dmgType = spell.damage.type;
			output = requestedSpell + " does " 
				+ dmgType + " . For damage amount, please include the slot or player level you wish to cast it at.";
		}else if(requestedSpellAttribute === "healing"){ //i think we need this, but im not 100% sure
			output =  "For healing amount, please include the spell slot level you wish to cast it at.";
		}else{
			output = spell[spellAttribute];
		}
	}else if(spell && !spellAttribute) {
		output = spell.shortDescription;
	}else if (requestedSpell) {
		output = exports.notFoundMessage(this.event.request.intent.slots.Spell.name, requestedSpell);
	}else {
		output = langEN.UNHANDLED;
	}
	return output;
};