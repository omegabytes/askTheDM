'use strict';

var Alexa = require('alexa-sdk');
var APP_ID = undefined; // TODO replace with amzn1.ask.skill.30397146-5043-48df-a40f-144d37d39690
var spells = require('./spells');
var conditions = require('./conditions');
var items = require('./items');
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

        var spells = this.t("SPELLS");
        var spell = spells[spellName];

        var spellAttributes = this.t("ATTRIBUTES");
        var spellAttribute = spellAttributes[attributeName];

        //if the user asks for the attribute of a spell
        if (spell && spellAttribute) {
            this.attributes['speechOutput'] = spell[spellAttribute];
            this.attributes['repromptSpeech'] = this.t("REPEAT_MESSAGE");
            this.emit(':tell', spell[spellAttribute]);
        }

        //if the user asks only about the spell
        else if (spell && !spellAttribute) {
            this.attributes['speechOutput'] = spell.longDescription;
            this.attributes['repromptSpeech'] = this.t("REPEAT_MESSAGE");
            this.emit(':tell', spell.longDescription);
        } else {
            var speechOutput = this.t("NOT_FOUND_MESSAGE");
            var repromptSpeech = this.t("NOT_FOUND_REPROMPT");
            
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
    'ConditionsIntent': function () {
        var conditionSlot = this.event.request.intent.slots.Condition;
        var conditionName;

        if (conditionSlot && conditionSlot.value) {
            conditionName = conditionSlot.value.toLowerCase();
        }

        var conditions = this.t("CONDITIONS");
        var condition  = conditions[conditionName];

        //user requests information on condition
        if (condition) {
            this.attributes['speechOutput'] = condition;
            this.attributes['repromptSpeech'] = this.t("REPEAT_MESSAGE");
            this.emit(':tell', condition);
        }

        //otherwise, the user asks for an unknown condition, or Alexa doesn't understand
        else {
            var speechOutput = this.t("NOT_FOUND_MESSAGE");
            var repromptSpeech =this.t("NOT_FOUND_REPROMPT");

            if (conditionName) {
                speechOutput += this.t("CONDITION_NOT_FOUND_WITH_CONDITION_NAME", conditionName);
            } else {
                speechOutput += this.t("CONDITION_NOT_FOUND_WITHOUT_CONDITION_NAME");
            }
            speechOutput += repromptSpeech;

            this.attributes['speechOutput'] = speechOutput;
            this.attributes['repromptSpeech'] = repromptSpeech;

            this.emit(':ask', speechOutput, repromptSpeech);
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

        var items = this.t("ITEMS");
        var itemAttributes = this.t("ITEM_ATTRIBUTES");

        var item = items[itemName];
        var itemAttribute  = itemAttributes[itemAttributeName];

        if(item && itemAttribute){
            if(!item[itemAttributeName]){
                this.emit(':tell', "NOT_FOUND_MESSAGE")
            }
            else{
                this.emit(':tell', item[itemAttribute]);
            }
        }

        else if(item && !itemAttibute){
            this.emit(':tell', item.damage);
        }

        else {
            var speechOutput = this.t("NOT_FOUND_MESSAGE");
            var repromptSpeech =this.t("NOT_FOUND_REPROMPT");

            if (itemAttribute) {
                speechOutput += this.t("CONDITION_NOT_FOUND_WITH_CONDITION_NAME", itemAttribute);
            } else {
                speechOutput += this.t("CONDITION_NOT_FOUND_WITHOUT_CONDITION_NAME");
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
            "SPELLS":                                       spells.SPELLS_EN_US,
            "ATTRIBUTES" :                                  spells.ATTRIBUTES_EN_US,
            "CONDITIONS" :                                  conditions.CONDITIONS_EN_US,
            "ITEMS" :                                       items.ITEMS_EN_US,
            "ITEM_ATTRIBUTES" :                             items.ITEM_ATTRIBUTES_EN_US,
            "SKILL_NAME":                                   "Ask the DM",
            "WELCOME_MESSAGE":                              "Welcome to %s. You can ask a question like, what\'s the range of fireball? ... Now, what can I help you with? You can also say help.",
            "WELCOME_REPROMPT":                             "For instructions on what you can say, please say help me.",
            "DISPLAY_CARD_TITLE":                           "%s  - Info for %s.",
            "HELP_MESSAGE":                                 "Ask The DM was created to provide quick reference to many of the mechanics of Dungeons and Dragons. The fastest way to interact with this application is by saying Alexa, Ask The DM and follow with your quesition. For example say, Alexa ask the dm what is the range of fireball. As of version 1.0, you can get information about conditions and spells. For spells, you can get the following information: casting time, duration, range, components, spell type, short description and long description. For conditions, simply ask about the conditions name. If you are in interactive mode, say exit to quit.",
            "HELP_REPROMPT":                                "You can say things like, what\'s Death Ward, or you can say exit...Now, what can I help you with?",
            "STOP_MESSAGE":                                 "Goodbye!",
            "REPEAT_MESSAGE":                               "Try saying repeat.",
            "NOT_FOUND_MESSAGE":                            "I\'m sorry, I currently do not know ",
            "NOT_FOUND_REPROMPT":                           "What else can I help with?",
            "SPELL_NOT_FOUND_WITH_SPELL_NAME":              "the spell info for %s.",
            "SPELL_NOT_FOUND_WITHOUT_SPELL_NAME":           "that spell.",
            "CONDITION_NOT_FOUND_WITH_CONDITION_NAME" :     "the condition info for %s.",
            "CONDITION_NOT_FOUND_WITHOUT_CONDITION_NAME" :  "that condition."
        }
    },
    "en-US": {
        "translation": {
            "SPELLS" :               spells.SPELLS_EN_US,
            "ATTRIBUTES" :           spells.ATTRIBUTES_EN_US,
            "CONDITIONS" :           conditions.CONDITIONS_EN_US,
            "ITEMS" :                items.ITEMS_EN_US,
            "ITEM_ATTRIBUTES" :      items.ITEM_ATTRIBUTES_EN_US,
            "SKILL_NAME" :           "Ask the DM"
        }
    }
};


