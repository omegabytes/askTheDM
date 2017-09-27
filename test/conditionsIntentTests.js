var bst = require('bespoken-tools');
var assert = require('assert');


var server = null;
var alexa = null;


// //creates a local lambda server and initializes the emulator
beforeEach(function (done) {
    server = new bst.LambdaServer('./src/index.js', 10000,false);
    alexa = new bst.BSTAlexa('http://localhost:10000?disableSignatureCheck=true',
        './speechAssets/IntentSchema.json',
        './speechAssets/SampleUtterances.txt','amzn1.ask.skill.30397146-5043-48df-a40f-144d37d39690');

    server.start(function () {
        alexa.start(function (error) {
            if (error != undefined) {
                console.error("Error: " + error);
            } else {
                done();
            }
        });
    });
});

//tears down the local Lambda server and shuts down the emulator
afterEach(function (done) {
    alexa.stop(function () {
        server.stop(function () {
            done();
        });
    });
});



// ConditionsIntent
describe('ConditionsIntent', function (done) {
    it('description: blind', function (done) {
        alexa.launched(function (error,response) {
            alexa.spoken('what is {blind}',function (error,response) {
                alexa.intended('ConditionsIntent', {"Condition":"blind"}, function (error,response) {
                    assert.equal(response.response.outputSpeech.ssml, '<speak> A blinded creature can’t see and automatically fails any ability check that requires sight. Attack rolls against the creature have advantage, and the creature’s attack rolls have disadvantage. What else can I help with? </speak>');
                    done();
                });
            });
        });
    });
});