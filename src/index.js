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
        var itemSlot            = this.event.request.intent.slots.Item;
        var itemAttributeSlot   = this.event.request.intent.slots.ItemAttribute;
        var itemName            = alexaLib.validateAndSetSlot(itemSlot);
        var itemAttributeName   = alexaLib.validateAndSetSlot(itemAttributeSlot);
        var itemList            = langEN.ITEMS;
        var itemAttributeList   = langEN.ITEM_ATTRIBUTES;
        var item                = itemList[itemName];
        var itemAttribute       = itemAttributeList[itemAttributeName];

        if(item && itemAttribute){
            if(!item[itemAttribute]){
                this.attributes['speechOutput'] = langEN.ATTRIBUTE_DOES_NOT_EXSIST;
                this.attributes['repromptSpeech'] = langEN.REPROMPT;
            } else {
                this.attributes['speechOutput']  = item[itemAttribute];
                this.attributes['repromptSpeech'] = langEN.REPROMPT;
            }
        }else if(item && !itemAttribute){
            if(item.itemType){
                this.attributes['speechOutput'] = "It is a "+item.itemType;
            } else {
                this.attributes['speechOutput'] = "It is a "+item.category;
            }
            this.attributes['repromptSpeech'] = langEN.REPROMPT;
        }else if (itemName) {
            this.attributes['speechOutput'] = alexaLib.notFoundMessage(itemSlot.name,itemName);
        }else {
            this.attributes['speechOutput'] = langEN.UNHANDLED;
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
        var spellName = alexaLib.validateAndSetSlot(spellSlot);
        var spells = langEN.SPELLS;
        var spell  = spells[spellName];

        this.attributes['repromptSpeech'] = langEN.REPROMPT;

        //user requests information on casting spell
        if (spell) {
            this.attributes['speechOutput'] = spellName + " is a " 
                                            + spell.school + " spell. To cast, you need the following: " 
                                            + spell.components + ". The spell duration is " 
                                            + spell.duration + ". " 
                                            + spell.shortDescription;

        //otherwise, the user asks for an unknown spell, or Alexa doesn't understand
        }else if (!spell) {
            this.attributes['speechOutput'] = alexaLib.notFoundMessage(spellSlot.name, spellName)
        }else {
            this.attributes['speechOutput'] = langEN.UNHANDLED;
        } 

        if(this.attributes['continue']){ 
            this.emit(':ask', this.attributes['speechOutput'] + ". " + this.attributes['repromptSpeech']);
        }else{
            this.emit(':tell', this.attributes['speechOutput']);
        }
    },
    'SpellDamageIntent': function(){
        var requestedLevelSlot      = this.event.request.intent.slots.SlotLevel;
        var spellSlot               = this.event.request.intent.slots.Spell;
        var spellName               = alexaLib.validateAndSetSlot(spellSlot);
        var spellLevel              = alexaLib.validateAndSetSlot(requestedLevelSlot);
        var spells                  = langEN.SPELLS;
        var levels                  = langEN.SLOT_LEVEL;
        var spell                   = spells[spellName];
        var level                   = levels[spellLevel];

        this.attributes['repromptSpeech'] = langEN.REPROMPT;
        
        //if the requested spell is a cantrip
        if(spell && spell['slotLevel'] == 'cantrip'){
            var dmg = spell.damage.playerLevel[level]; //stores the the damage of the spell at requested level
            var dmgType = spell.damage.type;
            this.attributes['speechOutput'] = "At player level " + level + 
                                               " the cantrip " + 
                                               spellName + " does " + 
                                               dmg + " " + dmgType + ".";
        }
        //if the requested spell is a normal spell
        else{
            var dmg = spell.damage.levels[level]; //stores the the damage of the spell at requested level
            var dmgType = spell.damage.type;
            this.attributes['speechOutput'] = "A level " + level + " " + 
                                                spellName + " does " + 
                                                dmg + " " + dmgType + ".";
            //add conditional to tell user spells can't be cast higher than level 9
        }

        if(this.attributes['continue']){ 
            this.emit(':ask', this.attributes['speechOutput'] + ". " 
                + this.attributes['repromptSpeech']);
        }else{
            this.emit(':tell', this.attributes['speechOutput']);
        }

    },
    'SpellHealIntent': function(){
        var requestedLevelSlot      = this.event.request.intent.slots.SlotLevel;
        var spellSlot               = this.event.request.intent.slots.Spell;
        var spellName               = alexaLib.validateAndSetSlot(spellSlot);
        var spellLevel              = alexaLib.validateAndSetSlot(requestedLevelSlot);
        var levels                  = langEN.SLOT_LEVEL;
        var spells                  = langEN.SPELLS;
        var spell                   = spells[spellName];
        var level                   = levels[spellLevel];
        
        this.attributes['repromptSpeech'] = langEN.REPROMPT;

        //if the requested spell is healing spell
        if (spell && level){
            var heal = spell.healing.levels[level];
            this.attributes['speechOutput'] = "At level " + level + " " + 
                                               spellName + " heals " + 
                                               heal + " plus your spellcasting ability modifier.";
        }

        if(this.attributes['continue']){ 
            this.emit(':ask', this.attributes['speechOutput'] + ". " 
                + this.attributes['repromptSpeech']);
        }else{
            this.emit(':tell', this.attributes['speechOutput']);
        }
    },
    'SpellsIntent': function () {
        var spellSlot           = this.event.request.intent.slots.Spell;
        var attributeSlot       = this.event.request.intent.slots.Attribute;
        var spellName           = alexaLib.validateAndSetSlot(spellSlot);
        var attributeName       = alexaLib.validateAndSetSlot(attributeSlot);
        var spells              = langEN.SPELLS;
        var spellAttributes     = langEN.ATTRIBUTES;
        var spell               = spells[spellName];
        var spellAttribute      = spellAttributes[attributeName];

        this.attributes['repromptSpeech'] = langEN.REPROMPT;

        //if the user asks for the attribute of a spell
        if (spell && spellAttribute) {
            //if the attribute is damage and the requested spell does not have damage
            if(spellAttribute=="damage" && spell[spellAttribute]==null) {
                this.attributes['speechOutput'] = spellName + ' does not have damage.';
            }else{
                this.attributes['speechOutput'] = spell[spellAttribute];
            }
        }else if (spell && !spellAttribute) {
            this.attributes['speechOutput'] = spell.shortDescription;
        }else if (spellName) {
            this.attributes['speechOutput'] = alexaLib.notFoundMessage(spellSlot.name, spellName);

        }else {
            this.attributes['speechOutput'] = langEN.UNHANDLED;
        }

        if(this.attributes['continue']){ 
            this.emit(':ask', this.attributes['speechOutput'] + " " + this.attributes['repromptSpeech']);
        }else{
            this.emit(':tell', this.attributes['speechOutput']);
        }
    },
    'Unhandled': function (){
        this.attributes['continue']         = true;
        this.attributes['speechOutput']     = langEN.UNHANDLED;
        this.attributes['repromptSpeech']   = langEN.HELP_REPROMPT;
        this.emit(':ask', this.attributes['speechOutput'], this.attributes['repromptSpeech']);
    },
    // Required Amazon Intents 
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
