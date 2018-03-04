'use strict';
import Alexa from "alexa-sdk";
import id from "./appId.js";
import languageStrings from "./languageStrings";
import dndLib from "./dndLib.js";

let APP_ID = id.APP_ID;
let langEN = languageStrings.en.translation;
// noinspection JSUnusedLocalSymbols
exports.handler = function (event, context, callback) {
	let alexa = Alexa.handler(event, context);
	alexa.appId = APP_ID;
	alexa.resources = languageStrings;
	alexa.registerHandlers(handlers);
	alexa.execute();
};
let handlers = {
	'ConditionsIntent': function () {
		let requestedConditionName = dndLib.validateAndSetSlot(this.event.request.intent.slots.Condition);
		let requestedExhaustionLevel = dndLib.validateAndSetSlot(this.event.request.intent.slots.ExLevel);
		this.attributes['repromptSpeech'] = langEN.REPROMPT;
		if (requestedConditionName === "exhaustion" || requestedConditionName === "exhausted") { //if user asks about exhaustion, now points to ExhaustionIntent
			this.attributes['speechOutput'] = dndLib.getExhaustion(requestedExhaustionLevel);
		} else { //if the user asks for any other condition
			this.attributes['speechOutput'] = dndLib.getConditions(requestedConditionName);
		}
		if (this.attributes['continue']) {
			this.emit(':ask', this.attributes['speechOutput'] + ". " + this.attributes['repromptSpeech']);
		} else {
			this.emit(':tell', this.attributes['speechOutput']);
		}
	}, 'DiceIntent': function () {
		let numberOfDice = dndLib.validateAndSetSlot(this.event.request.intent.slots.Quantity) || 1; //get the number of dice from the user, default 1 when not provided
		let modifier = dndLib.validateAndSetSlot(this.event.request.intent.slots.Modifier) || 0; //get the number to add to the roll from the user, default 0 when not provided
		let diceSides = dndLib.validateAndSetSlot(this.event.request.intent.slots.Sides);
		let status = dndLib.validateAndSetSlot(this.event.request.intent.slots.Status);
		this.attributes['repromptSpeech'] = langEN.REPROMPT;
		this.attributes['speechOutput'] = dndLib.getDiceRoll(numberOfDice, modifier, diceSides, status);
		if (this.attributes['continue']) {
			this.emit(':ask', this.attributes['speechOutput'] + ". " + this.attributes['repromptSpeech']);
		} else {
			this.emit(':tell', this.attributes['speechOutput']);
		}
	}, 'ExhaustionLevelIntent': function () {
		let requestedExhaustionLevel = dndLib.validateAndSetSlot(this.event.request.intent.slots.ExLevel);
		this.attributes['repromptSpeech'] = langEN.REPROMPT;
		this.attributes['speechOutput'] = dndLib.getExhaustion(requestedExhaustionLevel);
		if (this.attributes['continue']) {
			this.emit(':ask', this.attributes['speechOutput'] + ". " + this.attributes['repromptSpeech']);
		} else {
			this.emit(':tell', this.attributes['speechOutput']);
		}
	},
	'EquipmentPackIntent': function() {
		let requestedEquipmentPack = dndLib.validateAndSetSlot(this.event.request.intent.slots.EquipmentPack);
		this.attributes['repromptSpeech'] = langEN.REPROMPT;
		this.attributes['speechOutput'] = dndLib.getEquipmentPack(requestedEquipmentPack);
		if (this.attributes['continue']) {
			this.emit(':ask', this.attributes['speechOutput'] + ". " + this.attributes['repromptSpeech']);
		} else {
			this.emit(':tell', this.attributes['speechOutput']);
		}
	},
	'FeatsIntent': function () {
		let requestedFeatAttribute = dndLib.validateAndSetSlot(this.event.request.intent.slots.FeatAttribute);
		let requestedFeat = dndLib.validateAndSetSlot(this.event.request.intent.slots.Feat);
		this.attributes['repromptSpeech'] = langEN.REPROMPT;
		this.attributes['speechOutput'] = dndLib.getFeats(requestedFeat, requestedFeatAttribute);
		if (this.attributes['continue']) {
			this.emit(':ask', this.attributes['speechOutput'] + ". " + this.attributes['repromptSpeech']);
		} else {
			this.emit(':tell', this.attributes['speechOutput']);
		}
	}, 'IndexIntent': function () {
		let requestedIndexName = dndLib.validateAndSetSlot(this.event.request.intent.slots.Index);
		this.attributes['repromptSpeech'] = langEN.REPROMPT;
		this.attributes['speechOutput'] = dndLib.getIndex(requestedIndexName);
		if (this.attributes['continue']) {
			this.emit(':ask', this.attributes['speechOutput'] + ". " + this.attributes['repromptSpeech']);
		} else {
			this.emit(':tell', this.attributes['speechOutput']);
		}
	}, 'ItemsIntent': function () {
		let requestedItem = dndLib.validateAndSetSlot(this.event.request.intent.slots.Item);
		let requestedItemAttribute = dndLib.validateAndSetSlot(this.event.request.intent.slots.ItemAttribute);
		this.attributes['repromptSpeech'] = langEN.REPROMPT;
		this.attributes['speechOutput'] = dndLib.getItems(requestedItem, requestedItemAttribute);
		if (this.attributes['continue']) {
			this.emit(':ask', this.attributes['speechOutput'] + ". " + this.attributes['repromptSpeech']);
		} else {
			this.emit(':tell', this.attributes['speechOutput']);
		}
	}, 'SpellCastIntent': function () {
		let requestedSpell = dndLib.validateAndSetSlot(this.event.request.intent.slots.Spell);
		this.attributes['repromptSpeech'] = langEN.REPROMPT;
		this.attributes['speechOutput'] = dndLib.getSpellCast(requestedSpell);
		if (this.attributes['continue']) {
			this.emit(':ask', this.attributes['speechOutput'] + " " + this.attributes['repromptSpeech']);
		} else {
			this.emit(':tell', this.attributes['speechOutput']);
		}
	}, 'SpellClassIntent': function () {
		let requestedSpell = dndLib.validateAndSetSlot(this.event.request.intent.slots.Spell);
		let requestedClass = dndLib.validateAndSetSlot(this.event.request.intent.slots.PlayerClass); //fixme: .PlayerClass doesnt resolve because it is not being used in test.js
		let requestedSpellLevel = dndLib.validateAndSetSlot(this.event.request.intent.slots.Level); //TODO: double check that ...intent.slots.Level is the correct call
		this.attributes['repromptSpeech'] = langEN.REPROMPT;
		//be careful 'class' is a special keyword
		this.attributes['speechOutput'] = dndLib.getClassLevel(requestedSpell, requestedSpellLevel, requestedClass);
		if (this.attributes['continue']) {
			this.emit(':ask', this.attributes['speechOutput'] + " " + this.attributes['repromptSpeech']);
		} else {
			this.emit(':tell', this.attributes['speechOutput']);
		}
	}, 'SpellDamageIntent': function () {
		let requestedSpell = dndLib.validateAndSetSlot(this.event.request.intent.slots.Spell);
		let requestedSpellLevel = dndLib.validateAndSetSlot(this.event.request.intent.slots.SlotLevel);
		this.attributes['repromptSpeech'] = langEN.REPROMPT;
		this.attributes['speechOutput'] = dndLib.getSpellDamage(requestedSpell, requestedSpellLevel);
		if (this.attributes['continue']) {
			this.emit(':ask', this.attributes['speechOutput'] + ". " + this.attributes['repromptSpeech']);
		} else {
			this.emit(':tell', this.attributes['speechOutput']);
		}
	}, 'SpellHealIntent': function () {
		let requestedSpell = dndLib.validateAndSetSlot(this.event.request.intent.slots.Spell);
		let requestedSpellLevel = dndLib.validateAndSetSlot(this.event.request.intent.slots.SlotLevel);
		this.attributes['repromptSpeech'] = langEN.REPROMPT;
		this.attributes['speechOutput'] = dndLib.getSpellHeal(requestedSpell, requestedSpellLevel);
		if (this.attributes['continue']) {
			this.emit(':ask', this.attributes['speechOutput'] + ". " + this.attributes['repromptSpeech']);
		} else {
			this.emit(':tell', this.attributes['speechOutput']);
		}
	}, 'SpellsIntent': function () {
		let requestedSpell = dndLib.validateAndSetSlot(this.event.request.intent.slots.Spell);
		let requestedSpellAttribute = dndLib.validateAndSetSlot(this.event.request.intent.slots.Attribute);
		this.attributes['repromptSpeech'] = langEN.REPROMPT;
		this.attributes['speechOutput'] = dndLib.getSpells(requestedSpell, requestedSpellAttribute);
		if (this.attributes['continue']) {
			this.emit(':ask', this.attributes['speechOutput'] + ". " + this.attributes['repromptSpeech']);
		} else {
			this.emit(':tell', this.attributes['speechOutput']);
		}
	}, 'Unhandled': function () {
		this.attributes['continue'] = true;
		this.attributes['speechOutput'] = langEN.UNHANDLED;
		this.attributes['repromptSpeech'] = langEN.HELP_REPROMPT;
		this.emit(':ask', this.attributes['speechOutput'], this.attributes['repromptSpeech']);
	}, //Required Amazon Intents
	'LaunchRequest': function () {
		// Alexa, ask [my-skill-invocation-name] to (do something)...
		// If the user either does not reply to the welcome message or says something that is not
		// understood, they will be prompted again with this text.
		this.attributes['continue'] = true;
		this.attributes['speechOutput'] = langEN.WELCOME_MESSAGE;
		this.attributes['repromptSpeech'] = langEN.WELCOME_REPROMPT;
		this.emit(':ask', this.attributes['speechOutput'], this.attributes['repromptSpeech']);
	}, 'AMAZON.HelpIntent': function () {
		this.attributes['speechOutput'] = langEN.HELP_MESSAGE;
		this.attributes['repromptSpeech'] = langEN.HELP_REPROMPT;
		this.emit(':ask', this.attributes['speechOutput'], this.attributes['repromptSpeech']);
	}, 'AMAZON.RepeatIntent': function () {
		this.emit(':ask', this.attributes['speechOutput'], this.attributes['repromptSpeech']);
	}, 'AMAZON.StopIntent': function () {
		this.emit('SessionEndedRequest');
	}, 'AMAZON.CancelIntent': function () {
		this.emit('SessionEndedRequest');
	}, 'SessionEndedRequest': function () {
		this.emit(':tell', langEN.STOP_MESSAGE);
	}
};
