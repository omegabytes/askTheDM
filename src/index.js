'use strict';

var Alexa = require('alexa-sdk');
// var APP_ID = undefined;
var APP_ID = "amzn1.ask.skill.30397146-5043-48df-a40f-144d37d39690";
var spells = require('./spells');
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
            this.attributes['speechOutput'] = spell[spellAttribute];
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
