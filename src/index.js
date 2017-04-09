/* eslint-disable  func-names */
/* eslint quote-props: ["error", "consistent"]*/
/**
 * This sample demonstrates a sample skill built with Amazon Alexa Skills nodejs
 * skill development kit.
 * This sample supports multiple languages (en-US, en-GB, de-GB).
 * The Intent Schema, Custom Slot and Sample Utterances for this skill, as well
 * as testing instructions are located at https://github.com/alexa/skill-sample-nodejs-howto
 **/

'use strict';

var Alexa = require('alexa-sdk');
var spells = require('./spells');

//var APP_ID = amzn1.ask.skill.30397146-5043-48df-a40f-144d37d39690;

exports.handler = function(event, context, callback) {
    var alexa = Alexa.handler(event, context);
    //alexa.APP_ID = APP_ID;
    // To enable string internationalization (i18n) features, set a resources object.
    alexa.resources = languageStrings;
    alexa.registerHandlers(handlers);
    alexa.execute();
}

var handlers = {
    // Use LaunchRequest, instead of NewSession if you want to use the one-shot model
    // Alexa, ask [my-skill-invocation-name] to (do something)...
    'LaunchRequest': function () {
        this.attributes['speechOutput'] = this.t("WELCOME_MESSAGE", this.t("SKILL_NAME"));
        // If the user either does not reply to the welcome message or says something that is not
        // understood, they will be prompted again with this text.
        this.attributes['repromptSpeech'] = this.t("WELCOME_REPROMPT");
        this.emit(':ask', this.attributes['speechOutput'], this.attributes['repromptSpeech'])
    },
    // 'NewSession': function () {
    //     this.attributes.speechOutput = this.t('WELCOME_MESSAGE', this.t('SKILL_NAME'));
    //     // If the user either does not reply to the welcome message or says something that is not
    //     // understood, they will be prompted again with this text.
    //     this.attributes.repromptSpeech = this.t('WELCOME_REPROMT');
    //     this.emit(':ask', this.attributes.speechOutput, this.attributes.repromptSpeech);
    // },
    'SpellsIntent': function () {
        const itemSlot = this.event.request.intent.slots.Item;
        let itemName;
        if (itemSlot && itemSlot.value) {
            itemName = itemSlot.value.toLowerCase();
        }

        var cardTitle = this.t('DISPLAY_CARD_TITLE', this.t('SKILL_NAME'), itemName);
        var mySpells = this.t('SPELLS');
        var spell = mySpells[itemName];

        if (spell) {
            this.attributes['speechOutput'] = spell;
            this.attributes['repromptSpeech'] = this.t('DESCRIPTION_REPEAT_MESSAGE');
            this.emit(':tellWithCard', spell, this.attributes['repromptSpeech'], cardTitle, spell);
        } else {
            var speechOutput = this.t('DESCRIPTION_NOT_FOUND_MESSAGE');
            var repromptSpeech = this.t('DESCRIPTION_NOT_FOUND_REPROMPT');
            if (itemName) {
                speechOutput += this.t('DESCRIPTION_NOT_FOUND_WITH_ITEM_NAME', itemName);
            } else {
                speechOutput += this.t('DESCRIPTION_NOT_FOUND_WITHOUT_ITEM_NAME');
            }
            speechOutput += repromptSpeech;

            this.attributes['speechOutput'] = speechOutput;
            this.attributes['repromptSpeech'] = repromptSpeech;

            // this.attributes.speechOutput = speechOutput;
            // this.attributes.repromptSpeech = repromptSpeech;

            this.emit(':ask', speechOutput, repromptSpeech);
        }
    },
    'AMAZON.HelpIntent': function () {
        this.attributes.speechOutput = this.t('HELP_MESSAGE');
        this.attributes.repromptSpeech = this.t('HELP_REPROMT');
        this.emit(':ask', this.attributes['speechOutput'], this.attributes['repromptSpeech'])
        // this.emit(':ask', this.attributes.speechOutput, this.attributes.repromptSpeech);
    },
    'AMAZON.RepeatIntent': function () {
        this.emit(':ask', this.attributes['speechOutput'], this.attributes['repromptSpeech'])
        // this.emit(':ask', this.attributes.speechOutput, this.attributes.repromptSpeech);
    },
    'AMAZON.StopIntent': function () {
        this.emit('SessionEndedRequest');
    },
    'AMAZON.CancelIntent': function () {
        this.emit('SessionEndedRequest');
    },
    'SessionEndedRequest': function () {
        this.emit(':tell', this.t('STOP_MESSAGE'));
    },
    'Unhandled': function () {
        this.attributes['speechOutput'] = this.t("HELP_MESSAGE");
        this.attributes['repromptSpeech'] = this.t("HELP_REPROMPT");
        this.emit(':ask', this.attributes['speechOutput'], this.attributes['repromptSpeech'])
        // this.attributes.speechOutput = this.t("HELP_MESSAGE");
        // this.attributes.repromptSpeech = this.t("HELP_REPROMPT");
        // this.emit(':ask', this.attributes.speechOutput, this.attributes.repromptSpeech)
    }
};

const languageStrings = {
    'en': {
        translation: {
            SPELLS: spells.SPELLS_EN_US,
            SKILL_NAME: 'Ask the DM',
            WELCOME_MESSAGE: "Welcome to %s. You can ask a question like, what\'s fireball? ... Now, what can I help you with.",
            WELCOME_REPROMT: 'For instructions on what you can say, please say help me.',
            DISPLAY_CARD_TITLE: '%s  - Description for %s.',
            HELP_MESSAGE: "You can ask questions such as, what\'s fireball, or, you can say exit...Now, what can I help you with?",
            HELP_REPROMT: "You can say things like, what\'s fireball, or you can say exit...Now, what can I help you with?",
            STOP_MESSAGE: 'Goodbye!',
            DESCRIPTION_REPEAT_MESSAGE: 'Try saying repeat.',
            DESCRIPTION_NOT_FOUND_MESSAGE: "I\'m sorry, I currently do not know ",
            DESCRIPTION_NOT_FOUND_WITH_ITEM_NAME: 'the descriptions for %s. ',
            DESCRIPTION_NOT_FOUND_WITHOUT_ITEM_NAME: 'that information. ',
            DESCRIPTION_NOT_FOUND_REPROMPT: 'What else can I help with?',
        }
    },
    "en-US": {
        "translation" : {
            "SPELLS" : spells.SPELLS_EN_US,
            "SKILL_NAME" : "American Ask the DM"
        }
    }
};

// exports.handler = (event, context) => {
//     const alexa = Alexa.handler(event, context);
//     alexa.APP_ID = APP_ID;
//     // To enable string internationalization (i18n) features, set a resources object.
//     alexa.resources = languageStrings;
//     alexa.registerHandlers(handlers);
//     alexa.execute();
// };
