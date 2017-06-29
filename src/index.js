'use strict';

var Alexa = require('alexa-sdk');
// var APP_ID = undefined;
var APP_ID = "amzn1.ask.skill.30397146-5043-48df-a40f-144d37d39690";
var spells = require('./spells');
var conditions = require('./conditions');
var languageStrings = require('./languageStrings');

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
        this.attributes['speechOutput'] = (languageStrings.en.translation.WELCOME_MESSAGE);
        // If the user either does not reply to the welcome message or says something that is not
        // understood, they will be prompted again with this text.
        this.attributes['repromptSpeech'] = languageStrings.en.translation.WELCOME_REPROMPT;
        this.emit(':ask', this.attributes['speechOutput'], this.attributes['repromptSpeech'])
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
            this.attributes['speechOutput'] = spell[spellAttribute];
            this.emit(':ask', this.attributes['speechOutput'], this.attributes['repromptSpeech']);
        }

        //if the user asks only about the spell
        else if (spell && !spellAttribute) {
            this.attributes['speechOutput'] = spell.shortDescription;
            this.emit(':ask', this.attributes['speechOutput'], this.attributes['repromptSpeech']);

        } else {
            var speechOutput = languageStrings.en.translation.NOT_FOUND_MESSAGE;
            
            if (spellName) {
                speechOutput += (languageStrings.en.translation.SPELL_NOT_FOUND_WITH_SPELL_NAME, spellName);
            } else {
                speechOutput += languageStrings.en.translation.SPELL_NOT_FOUND_WITHOUT_SPELL_NAME;
            }
            this.attributes['speechOutput'] = speechOutput;
            this.emit(':ask', this.attributes['speechOutput'], this.attributes['repromptSpeech']);
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
            this.emit(':ask', this.attributes['speechOutput'], this.attributes['repromptSpeech']);
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
            this.emit(':ask', this.attributes['speechOutput'], this.attributes['repromptSpeech']);
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
            this.emit(':ask', this.attributes['speechOutput'], this.attributes['repromptSpeech']);
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
            this.emit(':ask', this.attributes['speechOutput'], this.attributes['repromptSpeech']);
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
                                            
            this.emit(':ask', this.attributes['speechOutput'], this.attributes['repromptSpeech']);
        }

        //otherwise, the user asks for an unknown spells, or Alexa doesn't understand
        else {
            var speechOutput = languageStrings.en.translation.NOT_FOUND_MESSAGE;

            if (conditionName) {
                speechOutput += (languageStrings.en.translation.SPELL_NOT_FOUND_WITH_SPELL_NAME, spellName);
            } else {
                speechOutput += languageStrings.en.translation.SPELL_NOT_FOUND_WITHOUT_SPELL_NAME;
            }

            this.attributes['speechOutput'] = speechOutput;
            this.emit(':ask', this.attributes['speechOutput'], this.attributes['repromptSpeech']);
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
        result = rollDice(numberOfDice,diceSides) + modifier;

        this.attributes['speechOutput'] = "The result of the roll is " + result;

        this.emit(':tell', this.attributes['speechOutput']);
        this.emit(':ask', this.attributes['repromptSpeech']);
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
    },
    'Unhandled': function () {
        this.attributes['speechOutput'] = languageStrings.en.translation.HELP_MESSAGE;
        this.attributes['repromptSpeech'] = languageStrings.en.translation.HELP_REPROMPT;
        this.emit(':ask', this.attributes['speechOutput'], this.attributes['repromptSpeech']);
    }
};
/*************************
 *       Functions       *
 *************************/

// roll dice function
function rollDice(quantity,sides) {
    var facevalue;
    var output = 0;

    for (var i=0;i<quantity;i++) {
        facevalue = Math.floor(Math.random()*sides);
        output += facevalue;
    }
    return output;
};
