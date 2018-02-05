'use strict';

var Alexa           = require('alexa-sdk');
var id              = require('./appId.js');
var languageStrings = require('./languageStrings');
var dndLib          = require('./dndLib.js');
var APP_ID          = id.APP_ID;
var langEN          = languageStrings.en.translation;

// noinspection JSUnusedLocalSymbols
exports.handler = function(event, context, callback) {
    var alexa       = Alexa.handler(event, context);
    alexa.appId     = APP_ID;
    alexa.resources = languageStrings;
    alexa.registerHandlers(handlers);
    alexa.execute();
};

var handlers = {
    'ConditionsIntent': function () {
        var requestedConditionName        = dndLib.validateAndSetSlot(this.event.request.intent.slots.Condition);

	    //TODO: move this logic into dndLib
        var condition                     = langEN.CONDITIONS[requestedConditionName];

        this.attributes['repromptSpeech'] = langEN.REPROMPT;

        //user requests information on condition
        if (condition) {
            this.attributes['speechOutput'] = condition;
        }else if (requestedConditionName) {
            this.attributes['speechOutput'] = dndLib.notFoundMessage(this.event.request.intent.slots.Condition.name, requestedConditionName);
        }else {
            this.attributes['speechOutput'] = langEN.UNHANDLED;
        }

        if(this.attributes['continue']){ 
            this.emit(':ask', this.attributes['speechOutput'] + ". " + this.attributes['repromptSpeech']);
        }else{
            this.emit(':tell', this.attributes['speechOutput']);
        }
    },
    'DiceIntent' : function () {
        var numberOfDice     = dndLib.validateAndSetSlot(this.event.request.intent.slots.Quantity) || 1; //get the number of dice from the user, default 1 when not provided
        var modifier         = dndLib.validateAndSetSlot(this.event.request.intent.slots.Modifier) || 0; //get the number to add to the roll from the user, default 0 when not provided
        var diceSides        = dndLib.validateAndSetSlot(this.event.request.intent.slots.Sides);
        var status           = dndLib.validateAndSetSlot(this.event.request.intent.slots.Status);

	    //TODO: move this logic into dndLib
        var firstRoll;
        var secondRoll;
        var result;

        this.attributes['repromptSpeech'] = langEN.REPROMPT;

        if((diceSides == null) || (diceSides == "?") || (numberOfDice == "?")){
            this.attributes['speechOutput'] = "I'm sorry I didn't quite catch that, please ask again";
            this.emit(':ask', this.attributes['speechOutput']);
        }

        diceSides = diceSides.match(/\d+/).join("");

        if (status == null) {
            // calculate the result of a normal roll
            result = dndLib.rollDice(numberOfDice,diceSides) + Number(modifier);
            this.attributes['speechOutput'] = "The result of the roll is " + result;
        }else if(diceSides==20){
            // calculate the result of a roll with advantage/disadvantage
            firstRoll  = dndLib.rollDice(numberOfDice,diceSides);
            secondRoll = dndLib.rollDice(numberOfDice,diceSides);

            if (status === "advantage") {
                result = Math.max(firstRoll,secondRoll) + Number(modifier);
            }

            if (status === "disadvantage") {
                result = Math.min(firstRoll,secondRoll) + Number(modifier);
            }

            this.attributes['speechOutput'] = "You roll with "
                                            + status 
                                            + ". Your first roll is " 
                                            + firstRoll
                                            + ", and your second roll is "
                                            + secondRoll
                                            + ". The result of the roll with modifiers is "
                                            + result;
        }else{
            this.attributes['speechOutput'] = "You can only have advantage or disadvantage on d 20 rolls"
        }

        if(this.attributes['continue']){ 
            this.emit(':ask', this.attributes['speechOutput'] + ". " + this.attributes['repromptSpeech']);
        }
        else{
            this.emit(':tell', this.attributes['speechOutput']);
        }
    },
    'ExhaustionLevelIntent': function () {
        var requestedExhaustionLevel = dndLib.validateAndSetSlot(this.event.request.intent.slots.ExLevel);

	    //TODO: move this logic into dndLib
        var exhaustionLevel      = langEN.EXHAUSTION_LEVELS[requestedExhaustionLevel];

        this.attributes['repromptSpeech'] = langEN.REPROMPT;

        if(exhaustionLevel){ //user requests information on exhaustion levels
            this.attributes['speechOutput'] = exhaustionLevel;
        }else if (requestedExhaustionLevel) { //otherwise, the user asks for an unknown exhaustion level, or Alexa doesn't understand
            this.attributes['speechOutput'] = dndLib.notFoundMessage(this.event.request.intent.slots.ExLevel.name, requestedExhaustionLevel) + " exhaustion.";
        }else if (!requestedExhaustionLevel) {
            this.attributes['speechOutput'] = langEN.CONDITIONS.exhaustion;
        }
        else {
            this.attributes['speechOutput'] = langEN.UNHANDLED;
        }

        if(this.attributes['continue']){
            this.emit(':ask', this.attributes['speechOutput'] + ". " + this.attributes['repromptSpeech']);
        }
        else{
            this.emit(':tell', this.attributes['speechOutput']);
        }
    },
    'FeatsIntent': function() {
        var requestedFeatAttribute = dndLib.validateAndSetSlot(this.event.request.intent.slots.FeatAttribute);
        var requestedFeat          = dndLib.validateAndSetSlot(this.event.request.intent.slots.Feat);

	    //TODO: move this logic into dndLib
        var thisFeat               = langEN.FEATS[requestedFeat];
        var thisFeatAttribute      = langEN.FEAT_ATTRIBUTES[requestedFeatAttribute];

        this.attributes['repromptSpeech'] = langEN.REPROMPT;

        //user requests information on feats
        if (thisFeat && thisFeatAttribute) {
            this.attributes['speechOutput'] = thisFeat[thisFeatAttribute];
        }else if(thisFeat && !thisFeatAttribute){
            this.attributes['speechOutput'] = thisFeat.description;

        //otherwise, the user asks for an unknown feat, or Alexa doesn't understand
        }else if (requestedFeat) {
            this.attributes['speechOutput'] = dndLib.notFoundMessage(this.event.request.intent.slots.Feat.name, requestedFeat);
        }else {
            this.attributes['speechOutput'] = langEN.UNHANDLED;
        }

        if(this.attributes['continue']){
            this.emit(':ask', this.attributes['speechOutput'] + ". " + this.attributes['repromptSpeech']);
        }else{
            this.emit(':tell', this.attributes['speechOutput']);
        }
    },
    'IncompleteIntent' : function () {
        this.attributes['continue']     = true;
        this.attributes['speechOutput'] = langEN.INCOMPLETE_REQUEST;
        this.emit(':ask', this.attributes['speechOutput']);
    },
    'IndexIntent' : function(){
        var requestedIndexName  = dndLib.validateAndSetSlot(this.event.request.intent.slots.Index);

	    //TODO: move this logic into dndLib
        var index               = langEN.INDEX[requestedIndexName];

        this.attributes['repromptSpeech'] = langEN.REPROMPT;

        if(index){
            this.attributes['speechOutput'] = dndLib.pageFind(index, requestedIndexName);
        }else if (requestedIndexName) {
            this.attributes['speechOutput'] = dndLib.notFoundMessage(this.event.request.intent.slots.Index.name, requestedIndexName);
        }else {
            this.attributes['speechOutput'] = langEN.UNHANDLED;
        }

        if(this.attributes['continue']){
            this.emit(':ask', this.attributes['speechOutput'] + ". " + this.attributes['repromptSpeech']);
        }else{
            this.emit(':tell', this.attributes['speechOutput']);
        }
    },
    'ItemsIntent': function () {
        var requestedItem            = dndLib.validateAndSetSlot(this.event.request.intent.slots.Item);
        var requestedItemAttribute   = dndLib.validateAndSetSlot(this.event.request.intent.slots.ItemAttribute);

	    //TODO: move this logic into dndLib
        var item                     = langEN.ITEMS[requestedItem];
        var itemAttribute            = langEN.ITEM_ATTRIBUTES[requestedItemAttribute];

        this.attributes['repromptSpeech'] = langEN.REPROMPT;

        if(item && itemAttribute){
            if(!item[itemAttribute]){ //if requested item attribute doesnt exist for requested item
                this.attributes['speechOutput'] = langEN.NOT_FOUND_MESSAGE + langEN.NOT_FOUND_WITHOUT_OBJECT_NAME;
            } else {
                this.attributes['speechOutput']  = item[itemAttribute];
            }
        }else if(item && !itemAttribute){ //user provides the item but the attributes doesnt exist. ie: shield has attribute 'strength', while daggers do not
            if(item.itemType){
                this.attributes['speechOutput'] = "It is a " + item.itemType;
            } else {
                this.attributes['speechOutput'] = "It is a " + item.category;
            }
        }else if (requestedItem) {
            this.attributes['speechOutput'] = dndLib.notFoundMessage(this.event.request.intent.slots.Item.name,requestedItem);
        }else {
            this.attributes['speechOutput'] = langEN.UNHANDLED;
        }

        if(this.attributes['continue']){
            this.emit(':ask', this.attributes['speechOutput'] + ". " + this.attributes['repromptSpeech']);
        }else{
            this.emit(':tell', this.attributes['speechOutput']);
        }
    },
    'SpellCastIntent': function () {
        var requestedSpell = dndLib.validateAndSetSlot(this.event.request.intent.slots.Spell);

	    //TODO: move this logic into dndLib
	    this.attributes['speechOutput'] = dndLib.getSpellCast(requestedSpell);

        if(this.attributes['continue']){
            this.emit(':ask', this.attributes['speechOutput'] + " " + this.attributes['repromptSpeech']);
        }else{
            this.emit(':tell', this.attributes['speechOutput']);
        }
    },
    'SpellClassIntent': function() {
	    var requestedSpell          = dndLib.validateAndSetSlot(this.event.request.intent.slots.Spell);
	    var requestedClass          = dndLib.validateAndSetSlot(this.event.request.intent.slots.PlayerClass);
	    var requestedSpellLevel     = dndLib.validateAndSetSlot(this.event.request.intent.slots.Level); //TODO: double check that ...intent.slots.Level is the correct call

	    this.attributes['repromptSpeech'] = langEN.REPROMPT;
	    //be careful 'class' is a special keyword
	    this.attributes['speechOutput'] = dndLib.getClassLevel(requestedSpell,requestedSpellLevel,requestedClass);

	    if (this.attributes['continue']) {
		    this.emit(':ask', this.attributes['speechOutput'] + " " + this.attributes['repromptSpeech']);
		}else{
		    this.emit(':tell', this.attributes['speechOutput']);
		}
    },
    'SpellDamageIntent': function(){
        var requestedSpell          = dndLib.validateAndSetSlot(this.event.request.intent.slots.Spell);
        var requestedSpellLevel     = dndLib.validateAndSetSlot(this.event.request.intent.slots.SlotLevel);

        this.attributes['repromptSpeech'] = langEN.REPROMPT;

        this.attributes['speechOutput'] = dndLib.getSpellDamage(requestedSpell, requestedSpellLevel);

        if(this.attributes['continue']){ 
            this.emit(':ask', this.attributes['speechOutput'] + ". " + this.attributes['repromptSpeech']);
        }else{
            this.emit(':tell', this.attributes['speechOutput']);
        }

    },
    'SpellHealIntent': function(){ //TODO: move this logic into dndLib
        var requestedSpell          = dndLib.validateAndSetSlot(this.event.request.intent.slots.Spell);
        var requestedSpellLevel     = dndLib.validateAndSetSlot(this.event.request.intent.slots.SlotLevel);
        var spell                   = langEN.SPELLS[requestedSpell];
        var level                   = langEN.SLOT_LEVEL[requestedSpellLevel];
        
        this.attributes['repromptSpeech'] = langEN.REPROMPT;

        if(spell && spell.healing === undefined)
        {
            this.attributes['speechOutput'] = "That spell does not restore health.";
        }else if(spell && typeof spell.healing === 'string') //add conditional to check if the healing is a string or array using typeof()
        {
            this.attributes['speechOutput'] = spell.healing;
        }else if (spell && !level) //if the requested spell is provided but not the level
        {
            this.attributes['speechOutput'] =  "For healing amount, please include the spell slot level you wish to cast it at.";
        }
        else if(level && !spell) //if the level is provided but not the spell
        {
            this.attributes['speechOutput'] = dndLib.notFoundMessage(this.event.request.intent.slots.Spell.name, requestedSpell);
        }
        else
        {
            var heals = spell.healing.levels[level];

            if(spell && level > 9) //if the requested spell is cast using a slot above 9th
            {
                this.attributes['speechOutput'] = "Healing spells can not be cast using spell slots above level 9.";
            }
            else
            {
                this.attributes['speechOutput'] = "At level " + level
                                                + " " + requestedSpell
                                                + " heals " + heals
                                                + " plus your spellcasting ability modifier.";
            }
        }

        if(this.attributes['continue']){ 
            this.emit(':ask', this.attributes['speechOutput'] + ". " + this.attributes['repromptSpeech']);
        }else{
            this.emit(':tell', this.attributes['speechOutput']);
        }
    },
    'SpellsIntent': function () { //TODO: move this logic into dndLib
        var requestedSpell          = dndLib.validateAndSetSlot(this.event.request.intent.slots.Spell);
        var requestedSpellAttribute = dndLib.validateAndSetSlot(this.event.request.intent.slots.Attribute);
        var spell                   = langEN.SPELLS[requestedSpell];                    //spell exists in the list of spells
        var spellAttribute          = langEN.SPELL_ATTRIBUTES[requestedSpellAttribute]; //spell attribute exists in the list of attributes

        this.attributes['repromptSpeech'] = langEN.REPROMPT;

        this.attributes['speechOutput'] = requestedSpellAttribute;

        // //if the user asks for the attribute of a spell
        if (spell && requestedSpellAttribute) {
            //if the attribute is damage and the requested spell does not have damage
            if((requestedSpellAttribute==="damage" || requestedSpellAttribute==="healing") && spell[spellAttribute]===undefined) {
                this.attributes['speechOutput'] = requestedSpell + ' does not have '+requestedSpellAttribute+'.';
            }else if((requestedSpellAttribute==="damage" || requestedSpellAttribute==="healing") && typeof spellAttribute === String) {
                this.attributes['speechOutput'] = spell[spellAttribute];
            }else if(requestedSpellAttribute==="damage"){
                var dmgType = spell.damage.type;
                this.attributes['speechOutput'] = requestedSpell + ' does ' + dmgType + ' . For damage amount, please include the slot or player level you wish to cast it at.';
            }else if(requestedSpellAttribute==="healing"){ //i think we need this, but im not 100% sure
                this.attributes['speechOutput'] =  "For healing amount, please include the spell slot level you wish to cast it at.";
            }else{
                this.attributes['speechOutput'] = spell[spellAttribute];
            }
        }else if(spell && !spellAttribute) {
            this.attributes['speechOutput'] = spell.shortDescription;
        }else if (requestedSpell) {
            this.attributes['speechOutput'] = dndLib.notFoundMessage(this.event.request.intent.slots.Spell.name, requestedSpell);
        }else {
            this.attributes['speechOutput'] = langEN.UNHANDLED;
        }

        if(this.attributes['continue']){
            this.emit(':ask', this.attributes['speechOutput'] + ". " + this.attributes['repromptSpeech']);
        }else{
            this.emit(':tell', this.attributes['speechOutput']);
        }
    },
    'Unhandled': function () {
        this.attributes['continue']         = true;
        this.attributes['speechOutput']     = langEN.UNHANDLED;
        this.attributes['repromptSpeech']   = langEN.HELP_REPROMPT;
        this.emit(':ask', this.attributes['speechOutput'], this.attributes['repromptSpeech']);
    },
    //Required Amazon Intents 
    'LaunchRequest': function () {
        // Alexa, ask [my-skill-invocation-name] to (do something)...
        // If the user either does not reply to the welcome message or says something that is not
        // understood, they will be prompted again with this text.
        this.attributes['continue']         = true;
        this.attributes['speechOutput']     = langEN.WELCOME_MESSAGE;
        this.attributes['repromptSpeech']   = langEN.WELCOME_REPROMPT;
        this.emit(':ask', this.attributes['speechOutput'], this.attributes['repromptSpeech']);
    },
    'AMAZON.HelpIntent': function () {
        this.attributes['speechOutput']     = langEN.HELP_MESSAGE;
        this.attributes['repromptSpeech']   = langEN.HELP_REPROMPT;
        this.emit(':ask', this.attributes['speechOutput'], this.attributes['repromptSpeech']);
    },
    'AMAZON.RepeatIntent': function () {
        this.emit(':ask', this.attributes['speechOutput'], this.attributes['repromptSpeech']);
    },
    'AMAZON.StopIntent': function () {
        this.emit('SessionEndedRequest');
    },
    'AMAZON.CancelIntent': function () {
        this.emit('SessionEndedRequest');
    },
    'SessionEndedRequest':function () {
        this.emit(':tell', langEN.STOP_MESSAGE);
    }
};
