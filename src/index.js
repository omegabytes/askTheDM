'use strict';

var Alexa = require('alexa-sdk');
var APP_ID = undefined; // TODO replace with amzn1.ask.skill.30397146-5043-48df-a40f-144d37d39690
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
            this.attributes['repromptSpeech'] = languageStrings.en.translation.REPROMPT;
            this.emit(':ask', this.attributes['speechOutput'], this.attributes['repromptSpeech']);
        }

        //if the user asks only about the spell
        else if (spell && !spellAttribute) {
            this.attributes['speechOutput'] = spell.shortDescription;
            this.attributes['repromptSpeech'] = languageStrings.en.translation.REPROMPT;
            this.emit(':ask', this.attributes['speechOutput'], this.attributes['repromptSpeech']);

        } else {
            var speechOutput = languageStrings.en.translation.NOT_FOUND_MESSAGE;
            var repromptSpeech = languageStrings.en.translation.REPROMPT;
            
            if (spellName) {
                speechOutput += (languageStrings.en.translation.SPELL_NOT_FOUND_WITH_SPELL_NAME, spellName);
            } else {
                speechOutput += languageStrings.en.translation.SPELL_NOT_FOUND_WITHOUT_SPELL_NAME;
            }
            speechOutput += repromptSpeech;

            this.attributes['speechOutput'] = speechOutput;
            this.attributes['repromptSpeech'] = repromptSpeech;

            this.emit(':ask', speechOutput, repromptSpeech);
        }
    },
    'ConditionsIntent': function () {
        var conditionSlot = this.event.request.intent.slots.Condition;
        var conditionName;

        if (conditionSlot && conditionSlot.value) {
            conditionName = conditionSlot.value.toLowerCase();
        }

        var conditions = languageStrings.en.translation.CONDITIONS;
        var condition  = conditions[conditionName];

        //user requests information on condition
        if (condition) {
            this.attributes['speechOutput'] = condition;
            this.attributes['repromptSpeech'] = languageStrings.en.translation.REPROMPT;
            this.emit(':ask', this.attributes['speechOutput'], this.attributes['repromptSpeech']);
        }

        //otherwise, the user asks for an unknown condition, or Alexa doesn't understand
        else {
            var speechOutput = languageStrings.en.translation.NOT_FOUND_MESSAGE;
            var repromptSpeech = languageStrings.en.translation.REPROMPT;

            if (conditionName) {
                speechOutput += (languageStrings.en.translation.CONDITION_NOT_FOUND_WITH_CONDITION_NAMED, conditionName);
            } else {
                speechOutput += languageStrings.en.translation.CONDITION_NOT_FOUND_WITHOUT_CONDITION_NAME;
            }
            speechOutput += repromptSpeech;

            this.attributes['speechOutput'] = speechOutput;
            this.attributes['repromptSpeech'] = repromptSpeech;

            this.emit(':ask', this.attributes['speechOutput'], this.attributes['repromptSpeech']);
        }
    },
    'ExhaustionLevelIntent': function () {
        var exhaustionSlot = this.event.request.intent.slots.Level;
        var exhaustionName;

        if (exhaustionSlot && exhaustionSlot.value) {
            exhaustionName = exhaustionSlot.value.toLowerCase();
        }

        var exhaustions = languageStrings.en.translation.EXHAUSTION_LEVEL; 
        var exhaustion  = exhaustions[exhaustionName];

        //user requests information on exhaustion levels
        if (exhaustion) {
            this.attributes['speechOutput'] = exhaustion;
            this.attributes['repromptSpeech'] = languageStrings.en.translation.REPROMPT;
            this.emit(':ask', this.attributes['speechOutput'], this.attributes['repromptSpeech']);
        }

        //otherwise, the user asks for an unknown exhaustion level, or Alexa doesn't understand
        else {
            var speechOutput = languageStrings.en.translation.NOT_FOUND_MESSAGE;
            var repromptSpeech = languageStrings.en.translation.REPROMPT;

            if (exhaustionName) {
                speechOutput += (languageStrings.en.translation.CONDITION_NOT_FOUND_WITH_CONDITION_NAMED, exhaustionName);
            } else {
                speechOutput += languageStrings.en.translation.CONDITION_NOT_FOUND_WITHOUT_CONDITION_NAME;
            }
            speechOutput += repromptSpeech;

            this.attributes['speechOutput'] = speechOutput;
            this.attributes['repromptSpeech'] = repromptSpeech;

            this.emit(':ask', this.attributes['speechOutput'], this.attributes['repromptSpeech']);
        }
    },
    'SpellCastIntent': function () {
        var spellSlot = this.event.request.intent.slots.Spell;
        var spellName;

        if (spellSlot && spellSlot.value) {
            spellName = spellSlot.value.toLowerCase();
        }

        var spells = languageStrings.en.translation.SPELLS;
        var spell  = spells[spellName];

        //user requests information on casting spell
        if (spell) {
            this.attributes['speechOutput'] = spellName + " is a " + spell.spellType + ". You can cast it " + spell.components + ". The spell duration is " + spell.duration + ". " + spell.shortDescription;
            this.attributes['repromptSpeech'] = languageStrings.en.translation.REPROMPT;
            this.emit(':ask', this.attributes['speechOutput'], this.attributes['repromptSpeech']);
        }

        //otherwise, the user asks for an unknown spells, or Alexa doesn't understand
        else {
            var speechOutput = languageStrings.en.translation.NOT_FOUND_MESSAGE;
            var repromptSpeech = languageStrings.en.translation.NOT_FOUND_REPROMPT;

            if (conditionName) {
                speechOutput += (languageStrings.en.translation.SPELL_NOT_FOUND_WITH_SPELL_NAME, spellName);
            } else {
                speechOutput += languageStrings.en.translation.SPELL_NOT_FOUND_WITHOUT_SPELL_NAMEPELL;
            }
            speechOutput += repromptSpeech;

            this.attributes['speechOutput'] = speechOutput;
            this.attributes['repromptSpeech'] = repromptSpeech;

            this.emit(':ask', speechOutput, repromptSpeech);
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
    },
    'Unhandled': function () {
        this.attributes['speechOutput'] = languageStrings.en.translation.HELP_MESSAGE;
        this.attributes['repromptSpeech'] = languageStrings.en.translation.HELP_REPROMPT;
        this.emit(':ask', this.attributes['speechOutput'], this.attributes['repromptSpeech']);
    }
};
