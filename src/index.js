'use strict';

var Alexa = require('alexa-sdk');
var APP_ID = undefined; // TODO replace with your app ID (OPTIONAL).
var spells = require('./spells');


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
        this.attributes['speechOutput'] = this.t("WELCOME_MESSAGE", this.t("SKILL_NAME"));
        // If the user either does not reply to the welcome message or says something that is not
        // understood, they will be prompted again with this text.
        this.attributes['repromptSpeech'] = this.t("WELCOME_REPROMPT");
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

        var cardTitle = this.t("DISPLAY_CARD_TITLE", this.t("SKILL_NAME"), spellName);
        var spells = this.t("SPELLS");
        var spell = spells[spellName];

        var spellAttributes = this.t("ATTRIBUTES");
        var spellAttribute = spellAttributes[attributeName];

        //if the user asks for the attribute of a spell
        if (spell && spellAttribute) {
            //return the range
            if (spellAttribute == "range") {
                var range = spell.range;
                this.attributes['speechOutput'] = range;
                this.attributes['repromptSpeech'] = this.t("SPELL_REPEAT_MESSAGE");
                this.emit(':tellWithCard', range, this.attributes['repromptSpeech'], cardTitle, range);
            }

            //return the casting time
            if (spellAttribute == "castingTime") {
                var castingTime = spell.castingTime;
                this.attributes['speechOutput'] = castingTime;
                this.attributes['repromptSpeech'] = this.t("SPELL_REPEAT_MESSAGE");
                this.emit(':tellWithCard', castingTime, this.attributes['repromptSpeech'], cardTitle, castingTime);
            }

            //return the duration
            if (spellAttribute == "duration") {
                var duration = spell.duration;
                this.attributes['speechOutput'] = duration;
                this.attributes['repromptSpeech'] = this.t("SPELL_REPEAT_MESSAGE");
                this.emit(':tellWithCard', duration, this.attributes['repromptSpeech'], cardTitle, duration);
            }

            //return the spell type
            if (spellAttribute == "spellType") {
                var spellType = spell.spellType;
                this.attributes['speechOutput'] = spellType;
                this.attributes['repromptSpeech'] = this.t("SPELL_REPEAT_MESSAGE");
                this.emit(':tellWithCard', spellType, this.attributes['repromptSpeech'], cardTitle, spellType);
            }

            //return the components
            if (spellAttribute == "components") {
                var components = spell.components;
                this.attributes['speechOutput'] = components;
                this.attributes['repromptSpeech'] = this.t("SPELL_REPEAT_MESSAGE");
                this.emit(':tellWithCard', components, this.attributes['repromptSpeech'], cardTitle, components);
            }

            //return the short description
            if (spellAttribute == "shortDescription") {
                var shortDescription = spell.shortDescription;
                this.attributes['speechOutput'] = shortDescription;
                this.attributes['repromptSpeech'] = this.t("SPELL_REPEAT_MESSAGE");
                this.emit(':tellWithCard', shortDescription, this.attributes['repromptSpeech'], cardTitle, shortDescription);
            }

            //return the long description
            if (spellAttribute == "longDescription") {
                var longDescription = spell.longDescription;
                this.attributes['speechOutput'] = longDescription;
                this.attributes['repromptSpeech'] = this.t("SPELL_REPEAT_MESSAGE");
                this.emit(':tellWithCard', longDescription, this.attributes['repromptSpeech'], cardTitle, longDescription);
            }
        }

        //if the user asks only about the spell
        else if (spell && !spellAttribute) {
            this.attributes['speechOutput'] = spell;
            this.attributes['repromptSpeech'] = this.t("SPELL_REPEAT_MESSAGE");
            this.emit(':tellWithCard', spell, this.attributes['repromptSpeech'], cardTitle, spell);
        } else {
            var speechOutput = this.t("SPELL_NOT_FOUND_MESSAGE");
            var repromptSpeech = this.t("SPELL_NOT_FOUND_REPROMPT");
            if (spellName) {
                speechOutput += this.t("SPELL_NOT_FOUND_WITH_SPELL_NAME", spellName);
            } else {
                speechOutput += this.t("SPELL_NOT_FOUND_WITHOUT_SPELL_NAME");
            }
            speechOutput += repromptSpeech;

            this.attributes['speechOutput'] = speechOutput;
            this.attributes['repromptSpeech'] = repromptSpeech;

            this.emit(':ask', speechOutput, repromptSpeech);
        }
    },
    'AMAZON.HelpIntent': function () {
        this.attributes['speechOutput'] = this.t("HELP_MESSAGE");
        this.attributes['repromptSpeech'] = this.t("HELP_REPROMPT");
        this.emit(':ask', this.attributes['speechOutput'], this.attributes['repromptSpeech'])
    },
    'AMAZON.RepeatIntent': function () {
        this.emit(':ask', this.attributes['speechOutput'], this.attributes['repromptSpeech'])
    },
    'AMAZON.StopIntent': function () {
        this.emit('SessionEndedRequest');
    },
    'AMAZON.CancelIntent': function () {
        this.emit('SessionEndedRequest');
    },
    'SessionEndedRequest':function () {
        this.emit(':tell', this.t("STOP_MESSAGE"));
    },
    'Unhandled': function () {
        this.attributes['speechOutput'] = this.t("HELP_MESSAGE");
        this.attributes['repromptSpeech'] = this.t("HELP_REPROMPT");
        this.emit(':ask', this.attributes['speechOutput'], this.attributes['repromptSpeech'])
    }
};

var languageStrings = {
    "en": {
        "translation": {
            "SPELLS": spells.SPELLS_EN_US,
            "ATTRIBUTES" : spells.ATTRIBUTES_EN_US,
            "SKILL_NAME": "Ask the DM",
            "WELCOME_MESSAGE": "Welcome to %s. You can ask a question like, what\'s fireball? ... Now, what can I help you with.",
            "WELCOME_REPROMPT": "For instructions on what you can say, please say help me.",
            "DISPLAY_CARD_TITLE": "%s  - Info for %s.",
            "HELP_MESSAGE": "You can ask questions such as, what\'s Cure Wounds, or, you can say exit...Now, what can I help you with?",
            "HELP_REPROMPT": "You can say things like, what\'s Death Ward, or you can say exit...Now, what can I help you with?",
            "STOP_MESSAGE": "Goodbye!",
            "SPELL_REPEAT_MESSAGE": "Try saying repeat.",
            "SPELL_NOT_FOUND_MESSAGE": "I\'m sorry, I currently do not know ",
            "SPELL_NOT_FOUND_WITH_SPELL_NAME": "the spell info for %s. ",
            "SPELL_NOT_FOUND_WITHOUT_SPELL_NAME": "that spell. ",
            "SPELL_NOT_FOUND_REPROMPT": "What else can I help with?"
        }
    },
    "en-US": {
        "translation": {
            "SPELLS" : spells.SPELLS_EN_US,
            "ATTRIBUTES" : spells.ATTRIBUTES_EN_US,
            "SKILL_NAME" : "Ask the DM"
        }
    },
    "en-GB": {
        "translation": {
            "SPELLS": spells.SPELL_EN_GB,
            "SKILL_NAME": "British Ask the DM"
        }
    }
    // },
    // "de": {
    //     "translation": {
    //         "RECIPES" : recipes.RECIPE_DE_DE,
    //         "SKILL_NAME" : "Assistent für Minecraft in Deutsch",
    //         "WELCOME_MESSAGE": "Willkommen bei %s. Du kannst beispielsweise die Frage stellen: Welche Rezepte gibt es für eine Truhe? ... Nun, womit kann ich dir helfen?",
    //         "WELCOME_REPROMPT": "Wenn du wissen möchtest, was du sagen kannst, sag einfach „Hilf mir“.",
    //         "DISPLAY_CARD_TITLE": "%s - Rezept für %s.",
    //         "HELP_MESSAGE": "Du kannst beispielsweise Fragen stellen wie „Wie geht das Rezept für“ oder du kannst „Beenden“ sagen ... Wie kann ich dir helfen?",
    //         "HELP_REPROMPT": "Du kannst beispielsweise Sachen sagen wie „Wie geht das Rezept für“ oder du kannst „Beenden“ sagen ... Wie kann ich dir helfen?",
    //         "STOP_MESSAGE": "Auf Wiedersehen!",
    //         "RECIPE_REPEAT_MESSAGE": "Sage einfach „Wiederholen“.",
    //         "RECIPE_NOT_FOUND_MESSAGE": "Tut mir leid, ich kenne derzeit ",
    //         "RECIPE_NOT_FOUND_WITH_ITEM_NAME": "das Rezept für %s nicht. ",
    //         "RECIPE_NOT_FOUND_WITHOUT_ITEM_NAME": "dieses Rezept nicht. ",
    //         "RECIPE_NOT_FOUND_REPROMPT": "Womit kann ich dir sonst helfen?"
    //     }
    // }
};
