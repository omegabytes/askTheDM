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
	    var requestedExhaustionLevel      = dndLib.validateAndSetSlot(this.event.request.intent.slots.ExLevel);

	    this.attributes['repromptSpeech'] = langEN.REPROMPT;
	    if (requestedConditionName === "exhaustion" ||requestedConditionName === "exhausted"){ //if user asks about exhaustion, now points to ExhaustionIntent
		    this.attributes['speechOutput'] = dndLib.getExhaustion(requestedExhaustionLevel);
	    }else { //if the user asks for any other condition
		    this.attributes['speechOutput'] = dndLib.getConditions(requestedConditionName);
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

	    this.attributes['repromptSpeech'] = langEN.REPROMPT;
	    this.attributes['speechOutput'] = dndLib.getDiceRoll(numberOfDice, modifier, diceSides, status);

        if(this.attributes['continue']){ 
            this.emit(':ask', this.attributes['speechOutput'] + ". " + this.attributes['repromptSpeech']);
        }
        else{
            this.emit(':tell', this.attributes['speechOutput']);
        }
    },
    'ExhaustionLevelIntent': function () {
        var requestedExhaustionLevel = dndLib.validateAndSetSlot(this.event.request.intent.slots.ExLevel);

        this.attributes['repromptSpeech'] = langEN.REPROMPT;
	    this.attributes['speechOutput'] = dndLib.getExhaustion(requestedExhaustionLevel);

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

	    this.attributes['repromptSpeech'] = langEN.REPROMPT;
	    this.attributes['speechOutput'] = dndLib.getFeats(requestedFeat,requestedFeatAttribute);

        if(this.attributes['continue']){
            this.emit(':ask', this.attributes['speechOutput'] + ". " + this.attributes['repromptSpeech']);
        }else{
            this.emit(':tell', this.attributes['speechOutput']);
        }
    },
    'IndexIntent' : function(){
        var requestedIndexName  = dndLib.validateAndSetSlot(this.event.request.intent.slots.Index);

	    this.attributes['repromptSpeech'] = langEN.REPROMPT;
        this.attributes['speechOutput']   = dndLib.getIndex(requestedIndexName);

        if(this.attributes['continue']){
            this.emit(':ask', this.attributes['speechOutput'] + ". " + this.attributes['repromptSpeech']);
        }else{
            this.emit(':tell', this.attributes['speechOutput']);
        }
    },
    'ItemsIntent': function () {
        var requestedItem            = dndLib.validateAndSetSlot(this.event.request.intent.slots.Item);
        var requestedItemAttribute   = dndLib.validateAndSetSlot(this.event.request.intent.slots.ItemAttribute);

	    this.attributes['repromptSpeech'] = langEN.REPROMPT;
	    this.attributes['speechOutput']   = dndLib.getItems(requestedItem, requestedItemAttribute);

        if(this.attributes['continue']){
            this.emit(':ask', this.attributes['speechOutput'] + ". " + this.attributes['repromptSpeech']);
        }else{
            this.emit(':tell', this.attributes['speechOutput']);
        }
    },
    'SpellCastIntent': function () {
        var requestedSpell = dndLib.validateAndSetSlot(this.event.request.intent.slots.Spell);

	    this.attributes['repromptSpeech'] = langEN.REPROMPT;
	    this.attributes['speechOutput'] = dndLib.getSpellCast(requestedSpell);

        if(this.attributes['continue']){
            this.emit(':ask', this.attributes['speechOutput'] + " " + this.attributes['repromptSpeech']);
        }else{
            this.emit(':tell', this.attributes['speechOutput']);
        }
    },
    'SpellClassIntent': function() {
	    var requestedSpell          = dndLib.validateAndSetSlot(this.event.request.intent.slots.Spell);
	    var requestedClass          = dndLib.validateAndSetSlot(this.event.request.intent.slots.PlayerClass); //fixme: .PlayerClass doesnt resolve because it is not being used in test.js
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
    'SpellHealIntent': function(){
        var requestedSpell          = dndLib.validateAndSetSlot(this.event.request.intent.slots.Spell);
        var requestedSpellLevel     = dndLib.validateAndSetSlot(this.event.request.intent.slots.SlotLevel);

	    this.attributes['repromptSpeech'] = langEN.REPROMPT;
	    this.attributes['speechOutput'] = dndLib.getSpellHeal(requestedSpell, requestedSpellLevel);

        if(this.attributes['continue']){ 
            this.emit(':ask', this.attributes['speechOutput'] + ". " + this.attributes['repromptSpeech']);
        }else{
            this.emit(':tell', this.attributes['speechOutput']);
        }
    },
    'SpellsIntent': function () {
        var requestedSpell          = dndLib.validateAndSetSlot(this.event.request.intent.slots.Spell);
        var requestedSpellAttribute = dndLib.validateAndSetSlot(this.event.request.intent.slots.Attribute);

        this.attributes['repromptSpeech'] = langEN.REPROMPT;
		this.attributes['speechOutput'] = dndLib.getSpells(requestedSpell,requestedSpellAttribute);

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
