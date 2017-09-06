'use strict';

var Alexa           = require('alexa-sdk');
var APP_ID          = "amzn1.ask.skill.30397146-5043-48df-a40f-144d37d39690";
var languageStrings = require('./languageStrings');
var alexaLib        = require('./alexaLib.js');
var langEN          = languageStrings.en.translation;

exports.handler = function(event, context, callback) {
    var alexa       = Alexa.handler(event, context);
    alexa.APP_ID    = APP_ID;
    alexa.resources = languageStrings;
    alexa.registerHandlers(handlers);
    alexa.execute();
};

var handlers = {
<<<<<<< HEAD
    //Use LaunchRequest, instead of NewSession if you want to use the one-shot model
    // Alexa, ask [my-skill-invocation-name] to (do something)...
    'LaunchRequest': function () {
        // If the user either does not reply to the welcome message or says something that is not
        // understood, they will be prompted again with this text.
        this.attributes['continue'] = true;
        this.attributes['speechOutput'] = (langEN.WELCOME_MESSAGE);
        this.attributes['repromptSpeech'] = langEN.WELCOME_REPROMPT;
        this.emit(':ask', this.attributes['speechOutput'], this.attributes['repromptSpeech']);
    },
    'Unhandled': function (){
        this.attributes['continue'] = true;
        this.attributes['speechOutput'] = langEN.UNHANDLED;
        this.attributes['repromptSpeech'] = langEN.HELP_REPROMPT;
        this.emit(':ask', this.attributes['speechOutput'], this.attributes['repromptSpeech']);
    },
    'SpellsIntent': function () {
        var spellSlot = this.event.request.intent.slots.Spell;
        var attributeSlot = this.event.request.intent.slots.Attribute;
        var spellName;
        var attributeName;

        this.attributes['repromptSpeech'] = langEN.REPROMPT;

        if (spellSlot && spellSlot.value) {
            spellName = spellSlot.value.toLowerCase();
        }

        if (attributeSlot && attributeSlot.value) {
            attributeName = attributeSlot.value.toLowerCase();
        }

        var spells = langEN.SPELLS;
        var spell = spells[spellName];

        var spellAttributes = langEN.ATTRIBUTES;
        var spellAttribute = spellAttributes[attributeName];

        //if the user asks for the attribute of a spell
        if (spell && spellAttribute) {
            if(spellAttribute=="damage" && spell[spellAttribute]==null){
                this.attributes['speechOutput'] = spellName + ' does not have damage'
            }else{
                this.attributes['speechOutput'] = spell[spellAttribute];
            }
        }

        //if the user asks only about the spell
        else if (spell && !spellAttribute) {
            this.attributes['speechOutput'] = spell.shortDescription;
        } else {
            var speechOutput = langEN.NOT_FOUND_MESSAGE;
            
            if (spellName) {
                speechOutput += (langEN.SPELL_NOT_FOUND_WITH_SPELL_NAME, spellName);
            } else {
                speechOutput += langEN.SPELL_NOT_FOUND_WITHOUT_SPELL_NAME;
            }
            this.attributes['speechOutput'] = speechOutput;
        }

        //if we are a one shot question the answer will be provided 
        //as a statement. if not the session will remain open and
        //alexa provide our reprompt speech
        if(this.attributes['continue']){ 
            this.emit(':ask', this.attributes['speechOutput'] + " " + this.attributes['repromptSpeech']);
        }
        else{
            this.emit(':tell', this.attributes['speechOutput']);
        }
    },
=======
>>>>>>> origin/master
    'ConditionsIntent': function () {
        var conditionSlot = this.event.request.intent.slots.Condition;
        var conditionName = alexaLib.validateAndSetSlot(conditionSlot);
        var conditions    = langEN.CONDITIONS;
        var condition     = conditions[conditionName];

        this.attributes['repromptSpeech'] = langEN.REPROMPT;

        //user requests information on condition
        if (condition) {
            this.attributes['speechOutput'] = condition;
        }else if (conditionName) {
            this.attributes['speechOutput'] = alexaLib.notFoundMessage(conditionSlot.name, conditionName);
        }else {
            this.attributes['speechOutput'] = langEN.UNHANDLED;
        }

        if(this.attributes['continue']){ 
            this.emit(':ask', this.attributes['speechOutput'] + " " + this.attributes['repromptSpeech']);
        }else{
            this.emit(':tell', this.attributes['speechOutput']);
        }
    },
    'ExhaustionLevelIntent': function () {
        var exhaustionSlot       = this.event.request.intent.slots.Level;
        var exhaustionLevelInput = alexaLib.validateAndSetSlot(exhaustionSlot);
        var exhaustionLevelList  = langEN.EXHAUSTION_LEVELS; 
        var exhaustionLevel      = exhaustionLevelList[exhaustionLevelInput];

        this.attributes['repromptSpeech'] = langEN.REPROMPT;

        //user requests information on exhaustion levels
        if (exhaustionLevel) {
            this.attributes['speechOutput'] = exhaustionLevel;

        //otherwise, the user asks for an unknown exhaustion level, or Alexa doesn't understand
        }else if (exhaustionLevelInput) {
            this.attributes['speechOutput'] = alexaLib.notFoundMessage(exhaustionSlot.name, exhaustionLevelInput) + " exhaustion";
        }else {
            this.attributes['speechOutput'] = langEN.UNHANDLED;
        }

        if(this.attributes['continue']){ 
            this.emit(':ask', this.attributes['speechOutput'] + " " + this.attributes['repromptSpeech']);
        }
        else{
            this.emit(':tell', this.attributes['speechOutput']);
        }
    },
    'FeatsIntent': function() {
        var featSlot          = this.event.request.intent.slots.Feats;
        var featAttributeSlot = this.event.request.intent.slots.FeatsAttr;
        var featAttrName      = alexaLib.validateAndSetSlot(featAttributeSlot);
        var featName          = alexaLib.validateAndSetSlot(featSlot);
        var featsList         = langEN.FEATS; 
        var featsAttrList     = langEN.FEAT_ATTRIBUTES;
        var thisFeat          = featsList[featName];
        var thisFeatAttr      = featsAttrList[featAttrName];

        this.attributes['repromptSpeech'] = langEN.REPROMPT;

        //user requests information on feats
        if (thisFeat && thisFeatAttr) {
            this.attributes['speechOutput'] = thisFeat[thisFeatAttr]; 
        }else if(thisFeat && !thisFeatAttr){
            this.attributes['speechOutput'] = thisFeat.description;

        //otherwise, the user asks for an unknown feat, or Alexa doesn't understand
        }else if (featName) {
            this.attributes['speechOutput'] = alexaLib.notFoundMessage(featSlot.name, featName);
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
<<<<<<< HEAD
        var itemSlot = this.event.request.intent.slots.Item;
        var itemAttributeSlot = this.event.request.intent.slots.ItemAttribute;
        var itemName;
        var itemAttributeName;

        if(itemSlot && itemSlot.value){
            itemName = itemSlot.value.toLowerCase();
        }
        if(itemAttributeSlot && itemAttributeSlot.value){
            itemAttributeName = itemAttributeSlot.value.toLowerCase();
        }

        var itemList = langEN.ITEMS;
        var itemAttributeList= langEN.ITEM_ATTRIBUTES;

        var item = itemList[itemName];
        var itemAttribute  = itemAttributeList[itemAttributeName];
=======
        var itemSlot            = this.event.request.intent.slots.Item;
        var itemAttributeSlot   = this.event.request.intent.slots.ItemAttribute;
        var itemName            = alexaLib.validateAndSetSlot(itemSlot);
        var itemAttributeName   = alexaLib.validateAndSetSlot(itemAttributeSlot);
        var itemList            = langEN.ITEMS;
        var itemAttributeList   = langEN.ITEM_ATTRIBUTES;
        var item                = itemList[itemName];
        var itemAttribute       = itemAttributeList[itemAttributeName];
>>>>>>> origin/master

        if(item && itemAttribute){
            if(!item[itemAttribute]){
                // todo: fix this
                this.attributes['speechOutput'] = langEN.NOT_FOUND_MESSAGE + langEN.NOT_FOUND_WITHOUT_OBJECT_NAME;
                this.attributes['repromptSpeech'] = langEN.REPROMPT;
<<<<<<< HEAD
            }else{
                this.attributes['speechOutput'] = item[itemAttribute];
=======
            } else {
                this.attributes['speechOutput']  = item[itemAttribute];
>>>>>>> origin/master
                this.attributes['repromptSpeech'] = langEN.REPROMPT;
            }
        }else if(item && !itemAttribute){
            if(item.itemType){
<<<<<<< HEAD
                this.attributes['speechOutput'] = "It is a "+item.itemType;
            }else{
                this.attributes['speechOutput'] = "It is a "+item.category;
            }
            this.attributes['repromptSpeech'] = langEN.REPROMPT;
        }else {
            this.attributes['speechOutput'] = "I'm sorry I don't know " + itemName;
=======
                this.attributes['speechOutput'] = "It is a " + item.itemType;
            } else {
                this.attributes['speechOutput'] = "It is a " + item.category;
            }
            this.attributes['repromptSpeech'] = langEN.REPROMPT;
        }else if (itemName) {
            this.attributes['speechOutput'] = alexaLib.notFoundMessage(itemSlot.name,itemName);
        }else {
            this.attributes['speechOutput'] = langEN.UNHANDLED;
>>>>>>> origin/master
        }

        if(this.attributes['continue']){ 
            this.emit(':ask', this.attributes['speechOutput'] + ". " + this.attributes['repromptSpeech']);
        }else{
            this.emit(':tell', this.attributes['speechOutput']);
        }
    },
<<<<<<< HEAD
    'DiceIntent' : function () {
        var numberOfDiceSlot = this.event.request.intent.slots.Quantity;
        var diceSidesSlot = this.event.request.intent.slots.Sides;
        var modifierSlot = this.event.request.intent.slots.Modifier;
        var numberOfDice;
        var diceSides;
        var modifier;
        var result;

        this.attributes['repromptSpeech'] = langEN.REPROMPT;

        // get the number of dice, dice sides, and any modifiers from the user

        if (numberOfDiceSlot && numberOfDiceSlot.value) {
            // get the number of dice to roll
            numberOfDice = numberOfDiceSlot.value;
        }

        if (diceSidesSlot && diceSidesSlot.value) {
            // get the kind of dice to roll (faces, like six-sided or 20-sided)
            diceSides = diceSidesSlot.value;
        }

        if (modifierSlot && modifierSlot.value) {
            // get the modifier to add at the end of the roll calculation
            modifier = modifierSlot.value;
        }
=======
    'SpellCastIntent': function () {
        var spellSlot = this.event.request.intent.slots.Spell;
        var spellName = alexaLib.validateAndSetSlot(spellSlot);
        var spells = langEN.SPELLS;
        var spell  = spells[spellName];
>>>>>>> origin/master

        this.attributes['repromptSpeech'] = langEN.REPROMPT;

        //user requests information on casting spell
        if (spell) {
            this.attributes['speechOutput'] = spellName + " is a " 
                                            + spell.spellType + ". To cast, you need the following: " 
                                            + spell.components + ". The spell duration is " 
                                            + spell.duration + ". " 
                                            + spell.shortDescription;

        //otherwise, the user asks for an unknown spell, or Alexa doesn't understand
        }else if (!spell) {
            this.attributes['speechOutput'] = alexaLib.notFoundMessage(spellSlot.name, spellName);
        }else {
            this.attributes['speechOutput'] = langEN.UNHANDLED;
        } 

        if(this.attributes['continue']){ 
            this.emit(':ask', this.attributes['speechOutput'] + ". " + this.attributes['repromptSpeech']);
        }else{
            this.emit(':tell', this.attributes['speechOutput']);
        }
    },
<<<<<<< HEAD
    'IndexIntent' : function(){
        var indexSlot = this.event.request.intent.slots.Index;
        var indexName;
        this.attributes['repromptSpeech'] = langEN.REPROMPT;

        if(indexSlot && indexSlot.value){
            indexName = indexSlot.value.toLowerCase();
        }

        var indexList = langEN.INDEX;
        var index = indexList[indexName];
=======
    'SpellsIntent': function () {
        var spellSlot       = this.event.request.intent.slots.Spell;
        var attributeSlot   = this.event.request.intent.slots.Attribute;
        var spellName       = alexaLib.validateAndSetSlot(spellSlot);
        var attributeName   = alexaLib.validateAndSetSlot(attributeSlot);
        var spells          = langEN.SPELLS;
        var spellAttributes = langEN.ATTRIBUTES;
        var spell           = spells[spellName];
        var spellAttribute  = spellAttributes[attributeName];

        this.attributes['repromptSpeech'] = langEN.REPROMPT;
>>>>>>> origin/master

        //if the user asks for the attribute of a spell
        if (spell && spellAttribute) {
            if(spellAttribute=="damage" && spell[spellAttribute]==null){
                this.attributes['speechOutput'] = spellName + ' does not have damage';
            }else{
                this.attributes['speechOutput'] = spell[spellAttribute];
            }
<<<<<<< HEAD
            this.attributes['speechOutput'] = indexName + " can be found on " + pageString;
        }
        else{
            this.attributes['speechOutput'] = langEN.NOT_FOUND_MESSAGE + langEN.INDEX_NOT_FOUND;
=======
        }else if (spell && !spellAttribute) {
            this.attributes['speechOutput'] = spell.shortDescription;
        }else if (spellName) {
            this.attributes['speechOutput'] = alexaLib.notFoundMessage(spellSlot.name, spellName);

        }else {
            this.attributes['speechOutput'] = langEN.UNHANDLED;
>>>>>>> origin/master
        }

        if(this.attributes['continue']){ 
            this.emit(':ask', this.attributes['speechOutput'] + " " + this.attributes['repromptSpeech']);
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
    Required Amazon Intents 
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
        this.attributes['speechOutput'] = langEN.HELP_MESSAGE;
        this.attributes['repromptSpeech'] = langEN.HELP_REPROMPT;
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
