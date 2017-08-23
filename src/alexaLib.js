var languageStrings = require('./languageStrings');
var langEN = languageStrings.en.translation;

// validates the slot, matches the value, and sets it
exports.validateAndSetSlot = function(slot) {
	if (slot && slot.value) {
		return slot.value.toLowerCase();
	}else {
		return null;
	}
}
// not found message handler
exports.notFoundMessage = function(objectName) {
	var speechOutput = langEN.NOT_FOUND_MESSAGE;
    
    if(objectName) {
    	speechOutput += langEN.NOT_FOUND_WITHOUT_NAME;
    }else {
    	speechOutput += (langEN.NOT_FOUND_WITH_NAME, objectName);
    }
    return speechOutput;
}

// roll dice function
exports.rollDice = function(quantity,sides) {
    var facevalue;
    var output = 0;

    for (var i=0;i<quantity;i++) {
        facevalue = Math.floor(Math.random()*sides);
        output += facevalue;
    }
    return output;
};

// todo: speak function encapsulation
// output conditionally
// if continue == true, emit with ask and keep session open
// else emit with tell and close session
exports.speak = function(sessionStatus,speech,reprompt) {
	// not sure how to do this one
	if(this.attributes['continue']){ 
            this.emit(':ask', this.attributes['speechOutput'] + ". " + this.attributes['repromptSpeech']);
        }
        else{
            this.emit(':tell', this.attributes['speechOutput']);
        }
}
