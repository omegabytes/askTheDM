var languageStrings = require('./languageStrings');

// validates the slot matches the value, and sets it
exports.validateAndSet = function(slot) {
	if (slot && slot.value) {
		return slot.value.toLowerCase();
	}
}
// not found message handler
exports.notFoundMessage = function(objectName) {
	var speechOutput = languageStrings.en.translation.NOT_FOUND_MESSAGE;
    
    if (objectName) {
        speechOutput += (languageStrings.en.translation.NOT_FOUND_WITH_NAME, objectName);
    } else {
        speechOutput += languageStrings.en.translation.NOT_FOUND_WITHOUT_NAME;
    }
    return speechOutput;
}

// roll dice function
function rollDice(quantity,sides) {
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
function speak(sessionStatus,speech,reprompt) {
	// not sure how to do this one
	if(this.attributes['continue']){ 
            this.emit(':ask', this.attributes['speechOutput'] + ". " + this.attributes['repromptSpeech']);
        }
        else{
            this.emit(':tell', this.attributes['speechOutput']);
        }
}
