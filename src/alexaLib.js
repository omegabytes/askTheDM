var languageStrings = require('./languageStrings');
var langEN = languageStrings.en.translation;

// not found message handler
exports.notFoundMessage = function(slotName, userInput) {
	var speechOutput = langEN.NOT_FOUND_MESSAGE;
    
    if(userInput) {
    	speechOutput += "the " + slotName + " info for " + userInput;
    }else {
    	speechOutput += langEN.NOT_FOUND_WITHOUT_OBJECT_NAME;
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
}

// validates the slot, matches the value, and sets it
exports.validateAndSetSlot = function(slot) {
	if (slot && slot.value) {
		return slot.value.toLowerCase();
	}else {
		return null;
	}
}

exports.pageFind = function(index, indexName) {
    var pageString = ""
    if(typeof index.pages === 'string'){
        pageString = index.pages
    }
    else{
        if(index.pages.length>1){
            pageString += "pages "
            for(var i = 0; i <= index.pages.length-2; i++){
                pageString += index.pages[i] + ", "
            }
            pageString += "and " + index.pages[index.pages.length-1]
        }
        else{
            pageString = "page " + index.pages 
        }
    }
    return indexName + " can be found on " + pageString;
}
