var bst     = require('bespoken-tools');
var assert  = require('assert');
var listOfSpells  = require('../src/spells.js');

var server  = null;
var alexa   = null;

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

// Tests for helper functions
//todo: add alexaLib tests

describe('General tests', function (done) {
    // LaunchRequest test
    it('Launches and then greets', function (done) {
        // Launch the skill via sending it a LaunchRequest
        alexa.launched(function (error, payload) {
            // Check that the welcome message is played
            assert.equal(payload.response.outputSpeech.ssml, '<speak> Welcome to Ask the DM. You can ask questions to get information about many of the mechanics in Dungeons and Dragons. For example, You can say things like, what\'s the range of fireball; or: how does blind affect me?... Please ask for help for a detailed explaination of this application. Now... what can I help you with? </speak>');
            done();
        });
    });

    // HelpIntent test
    it('User requests help interactive mode', function (done) {
        alexa.launched(function (error, response) {
            // Emulate the user saying 'help
            // alexa.spoken('help', function (error,response) {
                alexa.intended('AMAZON.HelpIntent', null, function (error, response) {
                    assert.equal(response.response.outputSpeech.ssml, '<speak> Ask the DM was created to provide quick reference to many of the mechanics of Dungeons and Dragons. The fastest way to interact with this application is by saying Alexa, Ask the DM, and follow with your question. For example say: Alexa ask the DM what is the range of fireball. As of version 2.0, you can roll multiple dice, and roll dee twenties with advantage and disadvantage. I have a working index, and can tell you what page in the players handbook you can find more information on many subjects. Also, you can get information about conditions, spells, feats, and items. For spells, you can get the following information: casting time, duration, range, components, spell type, damage and healing by level, short description and long description. For conditions and feats, simply include their name when asking for information. Items includes an exhaustive list of attributes like cost, type, or armor class.  If you are in interactive mode, say exit to quit. Now, what was your question? </speak>');
                    done();
                });
            });
        // });
    });
});

// ConditionsIntent
describe('ConditionsIntent', function (done) {
    it('description: blind', function (done) {
        alexa.launched(function (error,response) {
            alexa.spoken('what is {blind}',function (error,response) {
                assert.equal(response.response.outputSpeech.ssml, '<speak> A blinded creature can’t see and automatically fails any ability check that requires sight. Attack rolls against the creature have advantage, and the creature’s attack rolls have disadvantage.. What else can I help with? </speak>');
                done();
            });
        });
    });
});

//todo: add DiceIntent
//todo: add ExhaustionLevelIntent
//todo: add FeatsIntent
//todo: add IncompleteIntent
//todo: add IndexIntent
//todo: add ItemsIntent
//todo: add SpellCastIntent

// SpellDamageIntent
describe('SpellDamageIntent', function (done) {
    // what is the damage of level 3 fireball
    it('damage of level 3 fireball', function (done) {
        alexa.launched(function (error, response) {
            // Emulate the user asking what fireball is
            alexa.intended('SpellDamageIntent', {"SlotLevel":"3", "Spell":"fireball"}, function (error, response) {
                assert.equal(response.response.outputSpeech.ssml,'<speak> A level 3, fireball does 8d6 fire damage.. What else can I help with? </speak>');
                done();
            });
        });
    });
});

//todo: add SpellHealIntent

// SpellsIntent
describe('SpellsIntent', function (done) {
    // what is fireball
    it('what is fireball', function (done) {
        alexa.launched(function (error, response) {
            // Emulate the user asking what fireball is
            alexa.intended('SpellsIntent', {"Spell":"fireball"}, function (error, response) {
                assert.equal(response.response.outputSpeech.ssml, '<speak> Each creature in a 20 foot radius sphere takes 8d6 fire damage on a failed Dexterity save, or half as much on a success.. What else can I help with? </speak>');
                done();
            });
        });
    });

    /* ATTRIBUTES */
    // casting time
    it('casting time: fireball', function (done) {
        alexa.launched(function (error, response) {
            alexa.intended('SpellsIntent', {"Attribute":"casting time", "Spell":"fireball"}, function (error,response) {
                assert.equal(response.response.outputSpeech.ssml, '<speak> 1 Action. What else can I help with? </speak>');
                done();
                });
        });
    });
    // components

    // damage tests are handled in SpellDamageIntent

    // duration
    it('duration: ottos irresistible dance', function (done) {
        alexa.launched(function (error, response) {
            alexa.intended('SpellsIntent', {"Attribute":"duration", "Spell":"ottos irresistible dance"}, function (error,response) {
                assert.equal(response.response.outputSpeech.ssml, '<speak> Concentration, up to 1 minute. What else can I help with? </speak>');
                done();
            });
        });
    });
    // healing

    // long description

    // range
    it('range: fireball', function (done) {
        alexa.launched(function (error, response) {
            // Emulate the user asking what the range of fireball
            // alexa.spoken('what is the {range} of {fireball}', function (error,response) {
                alexa.intended('SpellsIntent', {"Attribute":"range", "Spell":"fireball"}, function (error, response) {
                    assert.equal(response.response.outputSpeech.ssml,'<speak> 150 feet. What else can I help with? </speak>');
                    done();
                });
            // });
        });
    });

    // school

    // short description
});


// one shot tests
describe('One-shot mode', function (done) {
    describe('SpellsIntent', function (done) {
        // // what is fireball
        it('what is fireball', function (done) {
            alexa.launched(function (error, response) {
                // Emulate the user asking what fireball is
                alexa.intended('SpellsIntent', {"Spell":"fireball"}, function (error, response) {
                    assert.equal(response.response.outputSpeech.ssml, '<speak> Each creature in a 20 foot radius sphere takes 8d6 fire damage on a failed Dexterity save, or half as much on a success.. What else can I help with? </speak>');
                    done();
                });
            });
        });

        /* ATTRIBUTES */
        // casting time
        // it('casting time: fireball', function (done) {
        //     alexa.spoken('what is the {casting time} of {fireball}', function (error,response) {
        //         assert.equal(response.response.outputSpeech.ssml, '<speak> 1 Action </speak>');
        //         done();
        //     });
        // });
        // components

        // damage tests are handled in SpellDamageIntent

        // duration

        // healing

        // long description

        // range
        // it('range: fireball', function (done) {
        //     var spells = [];
        //     var spellAttributes = [];
        //
        //     for (var spell in listOfSpells.SPELLS) {
        //         if(listOfSpells.SPELLS.hasOwnProperty(spell)){
        //             spells.push(spell.replace(/\\/g,''));
        //         }
        //     }
        //
        //     for (var spellAttribute in listOfSpells.SPELL_ATTRIBUTES){
        //         if(listOfSpells.SPELL_ATTRIBUTES.hasOwnProperty(spellAttribute)){
        //             spellAttributes.push(spellAttribute);
        //         }
        //     }
        //     console.log(spellAttributes);
        //
        //     for (var attrib in spellAttributes) {
        //         var attribToTest = attrib;
        //         alexa.intended('SpellsIntent', {"Attribute":attribToTest, "Spell":"fireball"}, function (error, response) {
        //             assert.equal(response.response.outputSpeech.ssml,'<speak> ' + spells.SPELLS['fireball'][attribToTest] + ' </speak>');
        //
        //         });
        //     }
        //     done();
        //
        //
        //     // for (var spell in listOfSpells.SPELLS){
        //     //     if(listOfSpells.SPELLS.hasOwnProperty(spell)){
        //     //         console.log(Object.keys(listOfSpells.SPELLS));
        //     //     }
        //         // alexa.intended('SpellsIntent', {"Attribute":"range", "Spell" : Object.keysIn(spells.SPELLS)}, function (error, response) {
        //         //     assert.equal(response.response.outputSpeech.ssml,'<speak> ' + spells.SPELLS['fireball']['range'] + ' </speak>');
        //         //     done();
        //         // });
        //
        //     // done();
        // });

        // school

        // short description

    });
});









