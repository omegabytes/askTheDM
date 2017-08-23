'use strict';

var Alexa = require('alexa-sdk');
var APP_ID = "amzn1.ask.skill.30397146-5043-48df-a40f-144d37d39690";
var languageStrings = require('./languageStrings');
var alexaLib = require('./functions.js');

exports.handler = function(event, context, callback) {
    var alexa = Alexa.handler(event, context);
    alexa.APP_ID = APP_ID;
    // To enable string internationalization (i18n) features, set a resources object.
    alexa.resources = languageStrings;
    alexa.registerHandlers(handlers);
    alexa.execute();
};

var handlers = {
    //Use LaunchRequest, instead of NewSession if you want to use the one-shot model
    // Alexa, ask [my-skill-invocation-name] to (do something)...
    'LaunchRequest': function () {
        // If the user either does not reply to the welcome message or says something that is not
        // understood, they will be prompted again with this text.
        this.attributes['continue'] = true;
        this.attributes['speechOutput'] = (languageStrings.en.translation.WELCOME_MESSAGE);
        this.attributes['repromptSpeech'] = languageStrings.en.translation.WELCOME_REPROMPT;
        this.emit(':ask', this.attributes['speechOutput'], this.attributes['repromptSpeech']);
    },
    'Unhandled': function (){
        this.attributes['continue'] = true;
        this.attributes['speechOutput'] = languageStrings.en.translation.UNHANDLED;
        this.attributes['repromptSpeech'] = languageStrings.en.translation.HELP_REPROMPT;
        this.emit(':ask', this.attributes['speechOutput'], this.attributes['repromptSpeech']);
    },
    'SpellsIntent': function () {
        var spellSlot = this.event.request.intent.slots.Spell;
        var attributeSlot = this.event.request.intent.slots.Attribute;
        var spellName;
        var attributeName;

        this.attributes['repromptSpeech'] = languageStrings.en.translation.REPROMPT;

        if (spellSlot && spellSlot.value) {
            spellName = spellSlot.value.toLowerCase();
        }

        if (attributeSlot && attributeSlot.value) {
            attributeName = attributeSlot.value.toLowerCase();
        }

        var spells = languageStrings.en.translation.SPELLS;
        var spell = spells[spellName];

        var spellAttributes = languageStrings.en.translation.ATTRIBUTES;
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
            var speechOutput = languageStrings.en.translation.NOT_FOUND_MESSAGE;
            
            if (spellName) {
                speechOutput += (languageStrings.en.translation.SPELL_NOT_FOUND_WITH_SPELL_NAME, spellName);
            } else {
                speechOutput += languageStrings.en.translation.SPELL_NOT_FOUND_WITHOUT_SPELL_NAME;
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
    'ConditionsIntent': function () {
        var conditionSlot = this.event.request.intent.slots.Condition;
        var conditionName;
        this.attributes['repromptSpeech'] = languageStrings.en.translation.REPROMPT;

        if (conditionSlot && conditionSlot.value) {
            conditionName = conditionSlot.value.toLowerCase();
        }

        var conditions = languageStrings.en.translation.CONDITIONS;
        var condition  = conditions[conditionName];

        //user requests information on condition
        if (condition) {
            this.attributes['speechOutput'] = condition;
        }

        //otherwise, the user asks for an unknown condition, or Alexa doesn't understand
        else {
            var speechOutput = languageStrings.en.translation.NOT_FOUND_MESSAGE;

            if (conditionName) {
                speechOutput += (languageStrings.en.translation.CONDITION_NOT_FOUND_WITH_CONDITION_NAMED, conditionName);
            } else {
                speechOutput += languageStrings.en.translation.CONDITION_NOT_FOUND_WITHOUT_CONDITION_NAME;
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
    'ExhaustionLevelIntent': function () {
        var exhaustionSlot = this.event.request.intent.slots.Level;
        var exhaustionLevel;

        this.attributes['repromptSpeech'] = languageStrings.en.translation.REPROMPT;

        if (exhaustionSlot && exhaustionSlot.value) {
            exhaustionLevel = exhaustionSlot.value.toLowerCase();
        }

        var exhaustionLevelList = languageStrings.en.translation.EXHAUSTION_LEVEL; 
        var thisExhaustionLevel  = exhaustionLevelList[exhaustionLevel];

        //user requests information on exhaustion levels
        if (thisExhaustionLevel) {
            this.attributes['speechOutput'] = thisExhaustionLevel;
        }

        //otherwise, the user asks for an unknown exhaustion level, or Alexa doesn't understand
        else {
            var speechOutput = languageStrings.en.translation.NOT_FOUND_MESSAGE;
            var repromptSpeech = languageStrings.en.translation.REPROMPT;

            if (exhaustionLevel) {
                speechOutput += (languageStrings.en.translation.CONDITION_NOT_FOUND_WITH_CONDITION_NAMED, exhaustionLevel);
            } else {
                speechOutput += languageStrings.en.translation.CONDITION_NOT_FOUND_WITHOUT_CONDITION_NAME;
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
    'FeatsIntent': function() {
        var featSlot = this.event.request.intent.slots.Feats;
        var featAttributeSlot = this.event.request.intent.slots.FeatsAttr;
        var featAttrName;
        var featsName;

        this.attributes['repromptSpeech'] = languageStrings.en.translation.REPROMPT;

        if (featSlot && featSlot.value) {
            featsName = featSlot.value.toLowerCase();
        }

        if(featAttributeSlot && featAttributeSlot.value) {
            featAttrName = featAttributeSlot.value.toLowerCase();
        }

        var featsList = languageStrings.en.translation.FEATS; 
        var thisFeat  = featsList[featsName];

        var featsAttrList = languageStrings.en.translation.FEATS_ATTRIBUTES;
        var thisFeatAttr = featsAttrList[featAttrName];

        //user requests information on feats
        if (thisFeat && thisFeatAttr) {
            this.attributes['speechOutput'] = thisFeat[thisFeatAttr]; 
        }
        else if(thisFeat && !thisFeatAttr){
            this.attributes['speechOutput'] = thisFeat.description;
        } else {
            var speechOutput = languageStrings.en.translation.NOT_FOUND_MESSAGE;
            var repromptSpeech = languageStrings.en.translation.REPROMPT;

            if (thisFeat) {
                speechOutput += (languageStrings.en.translation.CONDITION_NOT_FOUND_WITH_CONDITION_NAMED, thisFeat);
            } else {
                speechOutput += languageStrings.en.translation.CONDITION_NOT_FOUND_WITHOUT_CONDITION_NAME;
            }
            this.attributes['speechOutput'] = speechOutput;
        }

        if(this.attributes['continue']){ 
            this.emit(':ask', this.attributes['speechOutput'] + ". " + this.attributes['repromptSpeech']);
        }
        else{
            this.emit(':tell', this.attributes['speechOutput']);
        }
    },
    'SpellCastIntent': function () {
        var spellSlot = this.event.request.intent.slots.Spell;
        var spellName;

        this.attributes['repromptSpeech'] = languageStrings.en.translation.REPROMPT;

        if (spellSlot && spellSlot.value) {
            spellName = spellSlot.value.toLowerCase();
        }

        var spells = languageStrings.en.translation.SPELLS;
        var spell  = spells[spellName];

        //user requests information on casting spell
        if (spell) {
            this.attributes['speechOutput'] = spellName + " is a " 
                                            + spell.spellType + ". You can cast it " 
                                            + spell.components + ". The spell duration is " 
                                            + spell.duration + ". " 
                                            + spell.shortDescription;
        }

        //otherwise, the user asks for an unknown spells, or Alexa doesn't understand
        else {
            var speechOutput = languageStrings.en.translation.NOT_FOUND_MESSAGE;

            if (spell) {
                speechOutput += (languageStrings.en.translation.SPELL_NOT_FOUND_WITH_SPELL_NAME, spell);
            } else {
                speechOutput += languageStrings.en.translation.SPELL_NOT_FOUND_WITHOUT_SPELL_NAME;
            }

            this.attributes['speechOutput'] = speechOutput;
        }

        //if we are a one shot question the answer will be provided 
        //as a statement. if not the session will remain open and
        //alexa provide our reprompt speech
        if(this.attributes['continue']){ 
            this.emit(':ask', this.attributes['speechOutput'] + ". " + this.attributes['repromptSpeech']);
        }
        else{
            this.emit(':tell', this.attributes['speechOutput']);
        }
    },
    'ItemsIntent': function () {
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

        var itemList = languageStrings.en.translation.ITEMS;
        var itemAttributeList= languageStrings.en.translation.ITEM_ATTRIBUTES;

        var item = itemList[itemName];
        var itemAttribute  = itemAttributeList[itemAttributeName];

        if(item && itemAttribute){
            if(!item[itemAttribute]){
                this.attributes['speechOutput'] = languageStrings.en.translation.ATTRIBUTE_DOES_NOT_EXSIST;
                this.attributes['repromptSpeech'] = languageStrings.en.translation.REPROMPT;
            }
            else{
                this.attributes['speechOutput'] = item[itemAttribute];
                this.attributes['repromptSpeech'] = languageStrings.en.translation.REPROMPT;
            }
        }

        else if(item && !itemAttribute){
            if(item.itemType){
                this.attributes['speechOutput'] = "It is a "+item.itemType;
            }
            else{
                this.attributes['speechOutput'] = "It is a "+item.category;
            }
            this.attributes['repromptSpeech'] = languageStrings.en.translation.REPROMPT;
        }

        else {
            var speechOutput = languageStrings.en.translation.NOT_FOUND_MESSAGE;
            var repromptSpeech = languageStrings.en.translation.NOT_FOUND_REPROMPT;

            if (item) {
                speechOutput = (languageStrings.en.translation.CONDITION_NOT_FOUND_WITH_CONDITION_NAMED, item);
            } else {
                speechOutput = languageStrings.en.translation.CONDITION_NOT_FOUND_WITHOUT_CONDITION_NAME;
            }
            speechOutput = repromptSpeech;

            this.attributes['speechOutput'] = speechOutput;
            this.attributes['repromptSpeech'] = repromptSpeech;
        }

        if(this.attributes['continue']){ 
            this.emit(':ask', this.attributes['speechOutput'] + ". " + this.attributes['repromptSpeech']);
        }
        else{
            this.emit(':tell', this.attributes['speechOutput']);
        }
    },
    'DiceIntent' : function () {
        var numberOfDiceSlot = this.event.request.intent.slots.Quantity;
        var diceSidesSlot = this.event.request.intent.slots.Sides;
        var modifierSlot = this.event.request.intent.slots.Modifier;
        var numberOfDice;
        var diceSides;
        var modifier;
        var result;

        this.attributes['repromptSpeech'] = languageStrings.en.translation.REPROMPT;

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

        if (!modifier) {
            modifier = 0;
        }

        // calculate the result
        result = alexaLib.rollDice(numberOfDice,diceSides) + modifier;

        this.attributes['speechOutput'] = "The result of the roll is " + result;

        if(this.attributes['continue']){ 
            this.emit(':ask', this.attributes['speechOutput'] + ". " + this.attributes['repromptSpeech']);
        }
        else{
            this.emit(':tell', this.attributes['speechOutput']);
        }
    },
    'IndexIntent' : function(){
        var indexSlot = this.event.request.intent.slots.Index;
        var indexName;
        this.attributes['repromptSpeech'] = languageStrings.en.translation.REPROMPT;

        if(indexSlot && indexSlot.value){
            indexName = indexSlot.value.toLowerCase();
        }

        var indexList = languageStrings.en.translation.INDEX;
        var index = indexList[indexName];

        if(index){
            var pageString = ""
            if(typeof index.pages === 'string'){
                pageString = index.pages
            }
            else{
                if(index.pages.length>1){
                    pageString += "pages "
                    for(var i = 0; i <= index.pages.length-2; i++){
                        pageString += index.pages[i] + ", "
                    }
                    pageString += "and " + index.pages[index.pages.length-1]
                }
                else{
                    pageString = "page " + index.pages 
                }
            }
            this.attributes['speechOutput'] = indexName + " can be found on " + pageString;
        }
        else{
            this.attributes['speechOutput'] = languageStrings.en.translation.NOT_FOUND_MESSAGE + languageStrings.en.translation.INDEX_NOT_FOUND;
        }

        if(this.attributes['continue']){ 
            this.emit(':ask', this.attributes['speechOutput'] + ". " + this.attributes['repromptSpeech']);
        }
        else{
            this.emit(':tell', this.attributes['speechOutput']);
        }

    },
    'AMAZON.HelpIntent': function () {
        this.attributes['speechOutput'] = languageStrings.en.translation.HELP_MESSAGE;
        this.attributes['repromptSpeech'] = languageStrings.en.translation.HELP_REPROMPT;
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
        this.emit(':tell', languageStrings.en.translation.STOP_MESSAGE);
    }
};
