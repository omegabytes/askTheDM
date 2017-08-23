var spells = require('./spells');
var conditions = require('./conditions');
var exhaustionLevel = require('./exhaustionLevel');
var items = require('./items');
var feats = require('./feats');
var index = require('./indexInfo');

module.exports = {
    "en": {
        "translation": {
            "SPELLS":                                       spells.SPELLS_EN_US,
            "ATTRIBUTES" :                                  spells.ATTRIBUTES_EN_US,
            "CONDITIONS" :                                  conditions.CONDITIONS_EN_US,
            "EXHAUSTION_LEVEL" :                            exhaustionLevel.EXHAUSTION_LEVELS_EN_US,
            "ITEMS" :                                       items.ITEMS_EN_US,
            "FEATS" :                                       feats.FEATS_EN_US,
            "FEATS_ATTRIBUTES" :                            feats.FEATS_ATTRIBUTES_EN_US,
            "INDEX" :                                       index.INDEX,
            "INDEX_ATTRIBUTES" :                            index.INDEX_ATTRIBUTES,                            
            "SKILL_NAME":                                   "Ask the DM",
            "WELCOME_MESSAGE":                              "Welcome to Ask the DM. You can ask questions to get information about spells and conditions. You can say things like, what\'s the range of fireball; or: how does blind affect me?... Now, what can I help you with? You can also say help.",
            "WELCOME_REPROMPT":                             "For instructions on what you can say, please say help me.",
            "DISPLAY_CARD_TITLE":                           "%s  - Info for %s.",
            "HELP_MESSAGE":                                 "Ask the DM was created to provide quick reference to many of the mechanics of Dungeons and Dragons. The fastest way to interact with this application is by saying Alexa, open Ask the DM and follow with your question. For example say, Alexa ask Ask the DM what is the range of fireball. As of version 1.0, you can get information about conditions and spells. For spells, you can get the following information: casting time, duration, range, components, spell type, short description and long description. For conditions, simply ask about the conditions name. If you are in interactive mode, say exit to quit. Now, what was your question?",
            "HELP_REPROMPT":                                "You can say things like, what\'s Death Ward, or you can say exit...Now, what can I help you with?",
            "STOP_MESSAGE":                                 "Goodbye!",
            "REPEAT_MESSAGE":                               "Try saying repeat.",
            "NOT_FOUND_MESSAGE":                            "I\'m sorry, I currently do not know ",
            "REPROMPT":                                     "What else can I help with? ",
            "SPELL_NOT_FOUND_WITH_SPELL_NAME":              "the spell info for %s. ",
            "SPELL_NOT_FOUND_WITHOUT_SPELL_NAME":           "that spell. ",
            "CONDITION_NOT_FOUND_WITH_CONDITION_NAME" :     "the condition info for %s. ",
            "CONDITION_NOT_FOUND_WITHOUT_CONDITION_NAME" :  "that condition. ",
            "INDEX_NOT_FOUND":                              "that index entry",
            "UNHANDLED" :                                    "I'm sorry, I didn't get that. You can try repeating that command. For help on what you can ask, say 'help'"
        }
    },
    "en-US": {
        "translation": {
        }
    }
};