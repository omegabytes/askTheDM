var spells = require('./spells');
var conditions = require('./conditions');
var exhaustionLevel = require('./exhaustionLevel');
var items = require('./items');
var feats = require('./feats');
var index = require('./indexInfo');

module.exports = {
    "en": {
        "translation": {
            "SPELLS":                                       spells.SPELLS,
            "ATTRIBUTES" :                                  spells.ATTRIBUTES,
            "CONDITIONS" :                                  conditions.CONDITIONS,
            "EXHAUSTION_LEVEL" :                            exhaustionLevel.EXHAUSTION_LEVELS,
            "ITEMS" :                                       items.ITEMS,
            "ITEM_ATTRIBUTES" :                             items.ITEM_ATTRIBUTES,
            "FEATS" :                                       feats.FEATS,
            "FEATS_ATTRIBUTES" :                            feats.FEATS_ATTRIBUTES,
            "SKILL_NAME":                                   "Ask the DM",
            "WELCOME_MESSAGE":                              "Welcome to Ask the DM. You can ask questions to get information about many of the mechanics in Dungeons and Dragons. For example, You can say things like, what\'s the range of fireball; or: how does blind affect me?... Please ask for help for a detailed explaination of this application. Now... what can I help you with?",
            "WELCOME_REPROMPT":                             "For instructions on what you can say, please say help me.",
            "DISPLAY_CARD_TITLE":                           "%s  - Info for %s.",
            "HELP_MESSAGE":                                 "Ask the DM was created to provide quick reference to many of the mechanics of Dungeons and Dragons. The fastest way to interact with this application is by saying Alexa, Ask the DM, and follow with your question. For example say, Alexa ask the DM what is the range of fireball. As of version 2.0, you can roll multiple dice, and roll dee twenties with advantage and disadvantage. Also, you can get information about conditions, spells, feats, and items. For spells, you can get the following information: casting time, duration, range, components, spell type, short description and long description. For conditions and feats, simply ask about the  name. Items includes an exhaustive list of attributes like cost, type, or armor class.  If you are in interactive mode, say exit to quit. Now, what was your question?",
            "HELP_REPROMPT":                                "You can say things like, whats Death Ward, or you can say exit...Now, what can I help you with?",
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
    }
};