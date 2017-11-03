var bst     = require('bespoken-tools');
var assert  = require('assert');
var id      = require('../src/appId');
var listOfSpells  = require('../src/spells.js');
var appId = id.APP_ID;

var server  = null;
var alexa   = null;

// //creates a local lambda server and initializes the emulator
beforeEach(function (done) {
    server = new bst.LambdaServer('./src/index.js', 10000,false);
    alexa = new bst.BSTAlexa('http://localhost:10000?disableSignatureCheck=true',
        './speechAssets/IntentSchema.json',
        './speechAssets/SampleUtterances.txt', appId);

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
                    assert.equal(response.response.outputSpeech.ssml, '<speak> Ask the DM was created to provide quick reference to many of the mechanics of Dungeons and Dragons. The fastest way to interact with this application is by saying Alexa, Ask the DM, and follow with your question. For example say: Alexa: ask the DM what is the range of fireball. As of version 2.0, you can roll multiple dice, and roll dee twenties with advantage and disadvantage. I have a working index, and can tell you what page in the players handbook you can find more information on many subjects. Also, you can get information about conditions, spells, feats, and items. For spells, you can get the following information: casting time, duration, range, components, spell type, damage and healing by level, short description and long description. For conditions and feats, simply include their name when asking for information. Items includes an exhaustive list of attributes like cost, type, or armor class.  If you are in interactive mode, say exit to quit. Now, what was your question? </speak>');
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

// ExhaustionLevelIntent
describe('ExhaustionLevelIntent', function(done){
    it('level 3 exhaustion', function(done){
        alexa.launched(function(error,response){
            alexa.intended('ExhaustionLevelIntent', {"Level":"3"},function(error,response){
                assert.equal(response.response.outputSpeech.ssml, '<speak> Creature has disadvantage on attack rolls and saving throws.. What else can I help with? </speak>');
                done();
            });
        });
    });
});

// FeatIntent
describe('FeatsIntent', function(done){
    //description of feat
    it('description of charger', function(done){
        alexa.launched(function(error,response){
            alexa.intended('FeatsIntent', {"FeatAttribute":"description", "Feat":"charger"},function(error,response){
                assert.equal(response.response.outputSpeech.ssml, '<speak> When you use your action to Dash, you can use a bonus action to make 1 melee weapon attack, or shove a creature.. What else can I help with? </speak>');
                done();
            });
        });
    });
    //benefit of feat
    it('benefits of actor', function(done){
        alexa.launched(function(error,response){
            alexa.intended('FeatsIntent', {"FeatAttribute":"benefits", "Feat":"actor"},function(error,response){
                assert.equal(response.response.outputSpeech.ssml, '<speak> Increase your Charisma score by 1 to a maximum of 20. Gain advantage on Charisma(Deception) and Charisma(Performance) checks when trying to pass yourself off as a different person. You can also mimic the speech of another person or the sounds made by other creatures, you must have heard the person or creature for at least 1 minute.. What else can I help with? </speak>');
                done();
            });
        });
    });
    //prerequisite of feat
    it('prerequisite of inspiring leader', function(done){
        alexa.launched(function(error,response){
            alexa.intended('FeatsIntent',{"FeatAttribute":"prerequisite","Feat":"inspiring leader"}, function(error,response){
                assert.equal(response.response.outputSpeech.ssml, '<speak> Charisma 13 or higher.. What else can I help with? </speak>');
                done();
            });
        });
    });
});

//todo: add IncompleteIntent

//todo: add IndexIntent

//todo: add ItemsIntent

//todo: add SpellCastIntent

// SpellDamageIntent
// describe('SpellDamageIntent', function (done) {
//     // what is the damage of level 3 fireball
//     it('damage of level 3 fireball', function (done) {
//         alexa.launched(function (error, response) {
//             alexa.intended('SpellDamageIntent', {"SlotLevel":"3", "Spell":"fireball"}, function (error, response) {
//                 assert.equal(response.response.outputSpeech.ssml,'<speak> A level 3, fireball does 8d6 fire damage.. What else can I help with? </speak>');
//                 done();
//             });
//         });
//     });
// });

// SpellHealIntent
describe('SpellHealIntent', function (done) {
    it('healing of level 5 cure wounds', function (done) {
        alexa.launched(function (error, response) {
            alexa.intended('SpellHealIntent', {"SlotLevel":"5", "Spell":"cure wounds"}, function (error, response) {
                assert.equal(response.response.outputSpeech.ssml,'<speak> At level 5 cure wounds heals 5d8 plus your spellcasting ability modifier.. What else can I help with? </speak>');
                done();
            });
        });
    });
});

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
                // assert.equal(response.response.outputSpeech.ssml, '<speak> 1 Action. What else can I help with? </speak>');
                assert.equal(response.response.outputSpeech.ssml, '<speak> '+ listOfSpells.SPELLS['fireball']['castingTime'] + '. What else can I help with? </speak>');
                done();
                });
        });
    });
    // components
    it('components: magic circle', function(done){
        alexa.launched(function(error,response){
            alexa.intended('SpellsIntent',{"Attribute":"components","Spell":"magic circle"}, function(error,response){
                assert.equal(response.response.outputSpeech.ssml, '<speak> Verbal, Somatic, Material (holy water or powdered silver and iron worth at least 100 gold pieces, which the spell consumes). What else can I help with? </speak>');
                done();
            });
        });
    });

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
    // healing tests are handled in SpellHealIntent

    // long description
    it('long description: prismatic wall', function(done){
        alexa.launched(function(error,response){
            alexa.intended('SpellsIntent',{"Attribute":"long description","Spell":"prismatic wall"}, function(error,response){
                assert.equal(response.response.outputSpeech.ssml, '<speak> A shimmering, multicolored plane of light forms a vertical opaque wall, up to 90 feet long, 30 feet high, and 1 inch thick, centered on a point you can see within range. Alternatively, you can shape the wall into a sphere up to 30 feet in diameter centered on a point you choose within range. The wall remains in place for the duration. If you position the wall so that it passes through a space occupied by a creature, the spell fails, and your action and the spell slot are wasted. The wall sheds bright light out to a range of 100 feet and dim light for an additional 100 feet. You and creatures you designate at the time you cast the spell can pass through and remain near the wall without harm. If another creature that can see the wall moves to within 20 feet of it or starts its turn there, the creature must succeed on a Constitution saving throw or become blinded for 1 minute. The wall consists of seven layers, each with a different color. When a creature attempts to reach into or pass through the wall, it does so one layer at a time through all the walls layers. As it passes or reaches through each layer, the creature must make a Dexterity saving throw or be affected by that layers properties as described below. The wall can be destroyed, also one layer at a time, in order from red to violet, by means specific to each layer. Once a layer is destroyed, it remains so for the duration of the spell. A rod ofcancellation destroys a prismatic wall, but an antimagic field has no effect on it. 1) Red. The creature takes 10d6 fire damage on a failed save, or half as much damage on a successful one. While this layer is in place, nonmagical ranged attacks cant pass through the wall. The layer can be destroyed by dealing at least 25 cold damage to it. 2) Orange. The creature takes 10d6 acid damage on a failed save, or half as much damage on a successful one. While this layer is in place, magical ranged attacks cant pass through the wall. The layer is destroyed by a strong wind. 3) Yellow. The creature takes 10d6 lightning damage on a failed save, or half as much damage on a successful one. This layer can be destroyed by dealing at least 60 force damage to it. 4) Green. The creature takes 10d6 poison damage on a failed save, or half as much damage on a successful one. A passwall spell, or another spell of equal or greater level that can open a portal on a solid surface, destroys this layer. 5) Blue. The creature takes 10d6 cold damage on a failed save, or half as much damage on a successful one. This layer can be destroyed by dealing at least 25 fire damage to it. 6) Indigo. On a failed save, the creature is restrained. It must then make a Constitution saving throw at the end of each of its turns. If it successfully saves three times, the spell ends. If it fails its save three times, it permanently turns to stone and is subjected to the petrified condition. The successes and failures dont need to be consecutive: keep track of both until the creature collects three of a kind. While this layer is in place, spells cant be cast through the wall. The layer is destroyed by bright light shed by a daylight spell or a similar spell of equal or higher level. 7) Violet. On a failed save, the creature is blinded. It must then make a wisdom saving throw at the start of your next turn. A successful save ends the blindness. If it fails that save, the creature is transported to another plane of the D. M.s choosing and is no longer blinded. (Typically, a creature that is on a plane that isnt its home plane is banished home, while other creatures are usually cast into the Astral or Ethereal planes.) This layer is destroyed by a dispel magic spell or a similar spell of equal or higher level that can end spells and magical effects.. What else can I help with? </speak>');
                done();
            });
        });
    });

    // range
    it('range: fireball', function (done) {
        alexa.launched(function (error, response) {
            // Emulate the user asking what the range of fireball
                alexa.intended('SpellsIntent', {"Attribute":"range", "Spell":"fireball"}, function (error, response) {
                    assert.equal(response.response.outputSpeech.ssml,'<speak> 150 feet. What else can I help with? </speak>');
                    done();
                });
        });
    });

    // school
    it('school: animate dead', function(done){
        alexa.launched(function(error,response){
            alexa.intended('SpellsIntent', {"Attribute":"school", "Spell":"animate dead"}, function(error,response){
                assert.equal(response.response.outputSpeech.ssml, '<speak> Necromancy. What else can I help with? </speak>');
                done();
            });
        });
    });

    // short description
    it('short description: purify food and drink', function(done){
        alexa.launched(function(error,response){
            alexa.intended('SpellsIntent', {"Attribute":"short description", "Spell":"purify food and drink"}, function(error,response){
                assert.equal(response.response.outputSpeech.ssml, '<speak> All nonmagical food and drink is free of poison and disease. What else can I help with? </speak>');
                done();
            });
        });
    });
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
        //             spells.push(spell);
        //         }
        //     }
        //
        //     // for (var spellAttribute in listOfSpells.SPELL_ATTRIBUTES){
        //     //     if(listOfSpells.SPELL_ATTRIBUTES.hasOwnProperty(spellAttribute)){
        //     //         spellAttributes.push(Object.values(spellAttribute));
        //     //     }
        //     // }
        //     spellAttributes.push(Object.values(listOfSpells.SPELL_ATTRIBUTES));
        //
        //     console.log(spellAttributes);
        //
        //     for (i=0;i<spellAttributes[0].length-3;i++) {
        //         (function(attribute) {
        //             if(attribute != "url" && attribute != "damage" && attribute != "healing"){
        //                 console.log(listOfSpells.SPELLS['fireball'][attribute]);
        //                 // alexa.intended('SpellsIntent', {"Attribute":attribute, "Spell":"fireball"}, function (error, response) {
        //                 //     assert.equal(response.response.outputSpeech.ssml,'<speak> ' + listOfSpells.SPELLS['fireball'][attribute] + ' </speak>');
        //                 // });
        //             }
        //         })(spellAttributes[0][i]);
        //     }
        //     done();
        // });

        // school

        // short description

    });
});









