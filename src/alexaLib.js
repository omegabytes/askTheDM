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

exports.levelMap = function(level){
    var map = new Map();

    map.set(0,'cantrip');
    map.set(1,'one');
    map.set(2,'two');
    map.set(3,'three');
    map.set(4,'four');
    map.set(5,'five');
    map.set(6,'six');
    map.set(7,'seven');
    map.set(8,'eight');
    map.set(9,'nine');
    map.set(10,'ten');
    map.set(11,'eleven');
    map.set(12,'twelve');
    map.set(13,'thirteen');
    map.set(14,'fourteen');
    map.set(15,'fifteen');
    map.set(16,'sixteen');
    map.set(17,'seventeen');
    map.set(18,'eighteen');
    map.set(19,'nineteen');
    map.set(20,'twenty');


    /* 
    ** 'st is used with numbers ending in 1 (e.g. 1st, pronounced first)
    ** 'nd is used with numbers ending in 2 (e.g. 92nd, pronounced
        ninety-second)
    ** 'rd is used with numbers ending in 3 (e.g. 33rd, pronounced
        thirty-third)
    ** As an exception to the above rules, all the "teen" numbers ending
        with 11, 12 or 13 use -th (e.g. 11th, pronounced eleventh, 112th,
        pronounced one hundred [and] twelfth)
    ** 'th is used for all other numbers (e.g. 9th, pronounced ninth).

    ** Dealing with 'ordinals'
    */
    
    //todo: figure out how to use this with the map above
    function ordinal_suffix_of(i) {
        var j = i % 10,
            k = i % 100;
        if (j == 1 && k != 11) {
            return i + "st";
        }
        if (j == 2 && k != 12) {
            return i + "nd";
        }
        if (j == 3 && k != 13) {
            return i + "rd";
        }
        return i + "th";
    }
}