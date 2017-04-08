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

const Alexa = require('alexa-sdk');
const recipes = require('./spells');

const APP_ID = undefined; // TODO replace with your app ID (OPTIONAL).

const handlers = {
    'NewSession': function () {
        this.attributes.speechOutput = this.t('WELCOME_MESSAGE', this.t('SKILL_NAME'));
        // If the user either does not reply to the welcome message or says something that is not
        // understood, they will be prompted again with this text.
        this.attributes.repromptSpeech = this.t('WELCOME_REPROMT');
        this.emit(':ask', this.attributes.speechOutput, this.attributes.repromptSpeech);
    },
    'RecipeIntent': function () {
        const itemSlot = this.event.request.intent.slots.Item;
        let itemName;
        if (itemSlot && itemSlot.value) {
            itemName = itemSlot.value.toLowerCase();
        }

        const cardTitle = this.t('DISPLAY_CARD_TITLE', this.t('SKILL_NAME'), itemName);
        const myRecipes = this.t('SPELLS');
        const recipe = myRecipes[itemName];

        if (recipe) {
            this.attributes.speechOutput = recipe;
            this.attributes.repromptSpeech = this.t('DESCRIPTION_REPEAT_MESSAGE');
            this.emit(':askWithCard', recipe, this.attributes.repromptSpeech, cardTitle, recipe);
        } else {
            let speechOutput = this.t('DESCRIPTION_NOT_FOUND_MESSAGE');
            const repromptSpeech = this.t('DESCRIPTION_NOT_FOUND_REPROMPT');
            if (itemName) {
                speechOutput += this.t('DESCRIPTION_NOT_FOUND_WITH_ITEM_NAME', itemName);
            } else {
                speechOutput += this.t('DESCRIPTION_NOT_FOUND_WITHOUT_ITEM_NAME');
            }
            speechOutput += repromptSpeech;

            this.attributes.speechOutput = speechOutput;
            this.attributes.repromptSpeech = repromptSpeech;

            this.emit(':ask', speechOutput, repromptSpeech);
        }
    },
    'AMAZON.HelpIntent': function () {
        this.attributes.speechOutput = this.t('HELP_MESSAGE');
        this.attributes.repromptSpeech = this.t('HELP_REPROMT');
        this.emit(':ask', this.attributes.speechOutput, this.attributes.repromptSpeech);
    },
    'AMAZON.RepeatIntent': function () {
        this.emit(':ask', this.attributes.speechOutput, this.attributes.repromptSpeech);
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
};

const languageStrings = {
    'en-US': {
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
    }
};

exports.handler = (event, context) => {
    const alexa = Alexa.handler(event, context);
    alexa.APP_ID = APP_ID;
    // To enable string internationalization (i18n) features, set a resources object.
    alexa.resources = languageStrings;
    alexa.registerHandlers(handlers);
    alexa.execute();
};
