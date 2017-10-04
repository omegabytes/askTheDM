module.exports = {  
  "SPELL_ATTRIBUTES" : {
       "casting time"      : "castingTime",
       "cast"              : "castingTime",     
       "duration"          : "duration",     
       "range"             : "range",    
       "components"        : "components",
       "slot level"        : "slotLevel",   
       "school type"       : "school",
       "school"            : "school",    
       "short description" : "shortDescription",   
       "long description"  : "longDescription",    
       "url"               : "url",
       "damage"            : "damage",
       "healing"           : "healing"
  },
  "SLOT_LEVEL": {
       "1st"        : 1,
       "1"          : 1,
       "2nd"        : 2,
       "2"          : 2,
       "3rd"        : 3,
       "3"          : 3,
       "4th"        : 4,
       "4"          : 4,
       "5th"        : 5,
       "5"          : 5,
       "6th"        : 6,
       "6"          : 6,
       "7th"        : 7,
       "7"          : 7,
       "8th"        : 8,
       "8"          : 8,
       "9th"        : 9,
       "9"          : 9,
       "10th"       : 10,
       "10"         : 10,
       "11th"       : 11,
       "11"         : 11,
       "12th"       : 12,
       "12"         : 12,
       "13th"       : 13,
       "13"         : 13,
       "14th"       : 14,
       "14"         : 14,
       "15th"       : 15,
       "15"         : 15,
       "16th"       : 16,
       "16"         : 16,
       "17th"       : 17,
       "17"         : 17,
       "18th"       : 18,
       "18"         : 18,
       "19th"       : 19,
       "19"         : 19,
       "20th"       : 20,
       "20"         : 20   
  },    
  "SPELLS" : {
    "move earth": {
      "castingTime": "1 Action",
      "duration": "Concentration, up to 2 hours",
      "range": "120 feet",
      "components": "Verbal, Somatic, Material (an iron blade and a small bag containing a mixture of soils, clay, loam, and sand)",
      "slotLevel": "6",
      "school": "Transmutation",
      "shortDescription": "Reshape soft terrain for an area up to 40ft within a range of 120ft. Extent of terrain change cant exceed half of the affected areas largest dimension. Change takes 10 minutes to complete. Objects or structures interacting with the terrain will shift to accommodate change. Needs concentration.",
      "longDescription": "Choose an area of terrain no larger than 40 feet on a side within range. You can reshape dirt, sand, or clay in the area in any manner you choose for the duration. You can raise or lower the areas elevation, create or fill in a trench, erect or flatten a wall, or form a pillar. The extent of any such changes cant exceed half the areas largest dimension. So, if you affect a 40-foot square, you can create a pillar up to 20 feet high, raise or lower the squares elevation by up to 20 feet, dig a trench up to 20 feet deep, and so on. It takes 10 minutes for these changes to complete. At the end of every 10 minutes you spend concentrating on the spell, you can choose a new area of terrain to affect. Because the terrains transformation occurs slowly, creatures in the area cant usually be trapped or injured by the grounds movement. This spell cant manipulate natural stone or stone construction. Rocks and structures shift to accommodate the new terrain. If the way you shape the terrain would make a structure unstable, it might collapse. Similarly, this spell doesnt directly affect plant growth. The moved earth carries any plants along with it.",
      "url": "https://www.dnd-spells.com/spell/move-earth"
    },
    "sanctuary": {
      "castingTime": "1 Bonus Action",
      "duration": "1 minute",
      "range": "30 feet",
      "components": "Verbal, Somatic, Material (a small silver mirror)",
      "slotLevel": "1",
      "school": "Abjuration",
      "shortDescription": "Protect a creature from direct attacks. Attackers must succeed a wisdom save or attack another target. Ends if the target attacks or casts a spell.",
      "longDescription": "You ward a creature within range against attack. Until the spell ends, any creature who targets the warded creature with an attack or a harmful spell must first make a wisdom saving throw. On a failed save, the creature must choose a new target or lose the attack or spell. This spell doesnt protect the warded creature from area effects, such as the explosion of a fireball. If the warded creature makes an attack or casts a spell that affects an enemy creature, this spell ends.",
      "url": "https://www.dnd-spells.com/spell/sanctuary"
    },
    "speak with plants": {
      "castingTime": "1 Action",
      "duration": "10 minutes",
      "range": "Self (30-foot radius)",
      "components": "Verbal, Somatic",
      "slotLevel": "3",
      "school": "Transmutation",
      "shortDescription": "Imbue plants within a 30ft radius with limited sentience. Plants will follow simple commands, affect their terrain, move without uprooting, answer questions about their surroundings, and other tasks at the D. M.s discretion. Can be used to overcome entanglement spell. If a plant creature is in the area, you can communicate with it but have no other influence.",
      "longDescription": "You imbue plants within 30 feet of you with limited sentience and animation, giving them the ability to communicate with you and follow your simple commands. You can question plants about events in the spells area within the past day, gaining information about creatures that have passed, weather, and other circumstances. You can also turn difficult terrain caused by plant growth (such as thickets and undergrowth) into ordinary terrain that lasts for the duration. Or you can turn ordinary terrain where plants are present into difficult terrain that lasts for the duration, causing vines and branches to hinder pursuers, for example. Plants might be able to perform other tasks on your behalf, at the D. M.s discretion. The spell doesnt enable plants to uproot themselves and move about, but they can freely move branches, tendrils, and stalks. If a plant creature is in the area, you can communicate with it as if you shared a common language, but you gain no magical ability to influence it. This spell can cause the plants created by the entangle spell to release a restrained creature.",
      "url": "https://www.dnd-spells.com/spell/speak-with-plants"
    },
    "alter self": {
      "castingTime": "1 Action",
      "duration": "Concentration, up to 1 hour",
      "range": "Self",
      "components": "Verbal, Somatic",
      "slotLevel": "2",
      "school": "Transmutation",
      "shortDescription": "Assume a different form for up to 1 hour from three options. Aquatic Adaptation, which adapts your body to an aquatic environment. Change Appearance, which changes aspects of your appearance, such as weight or hair color, but not your basic shape. Natural Weapons, which adds proficiency to unarmed strikes and allows you to grow a natural weapon of choice (such as claws) for damage of 1d6. Needs concentration.",
      "longDescription": "You assume a different form. When you cast the spell, choose one of the following options, the effects of which last for the duration of the spell. While the spell lasts, you can end one option as an action to gain the benefits of a different one. Aquatic Adaptation. You adapt your body to an aquatic environment, sprouting gills and growing webbing between your fingers. You can breathe underwater and gain a swimming speed equal to your walking speed. Change Appearance. You transform your appearance. You decide what you look like, including your height, weight, facial features, sound of your voice, hair length, coloration, and distinguishing characteristics, if any. You can make yourself appear as a member of another race, though none of your statistics change. You also cant appear as a creature of a different size than you, and your basic shape stays the same; if youre bipedal, you cant use this spell to become quadrupedal, for instance. At any time for the duration of the spell, you can use your action to change your appearance in this way again. Natural Weapons. You grow claws, fangs, spines, horns, or a different natural weapon of your choice. Your unarmed strikes deal 1d6 bludgeoning, piercing, or slashing damage, as appropriate to the natural weapon you chose, and you are proficient with your unarmed strikes. Finally, the natural weapon is magic and you have a +1 bonus to the attack and damage rolls you make using it.",
      "url": "https://www.dnd-spells.com/spell/alter-self"
    },
    "teleportation circle": {
      "castingTime": "1 Minute",
      "duration": "1 round",
      "range": "10 feet",
      "components": "Verbal, Material (rare chalks and inks infused with precious gems with 50 gold pieces, which the spell consumes)",
      "slotLevel": "5",
      "school": "Conjuration",
      "shortDescription": "Draw a 10ft diameter circle within 10ft range to link to a teleportation circle whose sigil sequence you know and is on the same plane of existence as you. Circle remains open until end of turn. You can create a permanent circle by casting this spell in same location for one year. When you first get this spell, you learn two sigil sequences on the Material Plane as determined by the D. M..",
      "longDescription": "As you cast the spell, you draw a 10-foot-diameter circle on the ground inscribed with sigils that link your location to a permanent teleportation circle of your choice whose sigil sequence you know and that is on the same plane of existence as you. A shimmering portal opens within the circle you drew and remains open until the end of your next turn. Any creature that enters the portal instantly appears within 5 feet of the destination circle or in the nearest unoccupied space if that space is occupied. Many major temples, guilds, and other important places have permanent teleportation circles inscribed somewhere within their confines. Each such circle includes a unique sigil sequence, a string of magical runes arranged in a particular pattern. When you first gain the ability to cast this spell, you learn the sigil sequences for two destinations on the Material Plane, determined by the D. M.. You can learn additional sigil sequences during your adventures. You can commit a new sigil sequence to memory after studying it for 1 minute. You can create a permanent teleportation circle by casting this spell in the same location every day for one year. You need not use the circle to teleport when you cast the spell in this way.",
      "url": "https://www.dnd-spells.com/spell/teleportation-circle"
    },
    "nondetection": {
      "castingTime": "1 Action",
      "duration": "8 hours",
      "range": "Touch",
      "components": "Verbal, Somatic, Material (a pinch of diamond dust worth 25 gold pieces sprinkled over the target, which the spell consumes)",
      "slotLevel": "3",
      "school": "Abjuration",
      "shortDescription": "A creature, place, or object smaller than 10ft cant be targeted by divination magic, or detected by magical scrying sensors",
      "longDescription": "For the duration, you hide a target that you touch from divination magic. The target can be a willing creature or a place or an object no larger than 10 feet in any dimension. The target cant be targeted by any divination magic or perceived through magical scrying sensors.",
      "url": "https://www.dnd-spells.com/spell/nondetection"
    },
    "beacon of hope": {
      "castingTime": "1 Action",
      "duration": "Concentration, up to 1 minute",
      "range": "30 feet",
      "components": "Verbal, Somatic",
      "slotLevel": "3",
      "school": "Abjuration",
      "shortDescription": "Give max healing and advantage on wisdom and death saves to any number of creatures within 30ft for up to 1 minute. Needs concentration.",
      "longDescription": "This spell bestows hope and vitality. Choose any number of creatures within range. For the duration, each target has advantage on Wisdom saving throws and death saving throws, and regains the maximum number of hit points possible from any healing.",
      "url": "https://www.dnd-spells.com/spell/beacon-of-hope"
    },
    "resistance": {
      "castingTime": "1 Action",
      "duration": "Concentration, up to 1 minute",
      "range": "Touch",
      "components": "Verbal, Somatic, Material (a miniature cloak)",
      "slotLevel": "cantrip",
      "school": "Abjuration",
      "shortDescription": "The target can add a d4 to a saving throw of its choice, before or after the throw. Needs concentration.",
      "longDescription": "You touch one willing creature. Once before the spell ends, the target can roll a d4 and add the number rolled to one saving throw of its choice. It can roll the die before or after making the saving throw. The spell then ends.",
      "url": "https://www.dnd-spells.com/spell/resistance"
    },
    "investiture of stone": {
      "castingTime": "1 Action",
      "duration": "Concentration, up to 10 minutes",
      "range": "Self",
      "components": "Verbal, Somatic",
      "slotLevel": "6",
      "school": "Transmutation",
      "shortDescription": "Resistance to bludgeoning, piercing and slashing damage from nonmagical weapons. Use action to create an earthquake within 15ft radius that knocks prone any creature that fails a Dexterity save. Use normal movement to cross difficult earth or stone terrain, or to move through solid terrain as if it was air. Needs concentration.",
      "longDescription": "Until the spell ends, bits of rock spread across your body, and you gain the following benefits. You have resistance to bludgeoning, piercing, and slashing damage from nonmagical weapons. You can use your action to create a small earthquake on the ground in a 15-foot radius centered on you. Other creatures on that ground must succeed on a Dexterity saving throw or be knocked prone. You can move across difficult terrain made of earth or stone without spending extra movement. You can move through solid earth or stone as if it was air and without destabilizing it, but you cant end your movement there. If you do so, you are ejected to the nearest unoccupied space, this spell ends, and you are stunned until the end of your next turn.",
      "url": "https://www.dnd-spells.com/spell/investiture-of-stone"
    },
    "hellish rebuke": {
      "castingTime": "Special",
      "duration": "Instantaneous",
      "range": "60 feet",
      "components": "Verbal, Somatic",
      "slotLevel": "1",
      "school": "Evocation",
      "shortDescription": "Deals 2d10 fire damage on a failed Dexterity save or half as much damage on a successful save to a creature that damaged you. Increase damage by 1d10 for each spell slot after 1st.",
      "longDescription": "You point your finger, and the creature that damaged you is momentarily surrounded by hellish flames. The creature must make a Dexterity saving throw. It takes 2d10 fire damage on a failed save, or half as much damage on a successful one. At Higher Levels: When you cast this spell using a spell slot of 2nd level or higher, the damage increases by 1dlO for each slot level above 1st.",
      "url": "https://www.dnd-spells.com/spell/hellish-rebuke",
      "damage": {
        "type": "fire damage",
        "levels": {
          1: "2d10",
          2: "3d10",
          3: "4d10",
          4: "5d10",
          5: "6d10",
          6: "7d10",
          7: "8d10",
          8: "9d10",
          9: "10d10"
        }
      }
    },
    "sleep": {
      "castingTime": "1 Action",
      "duration": "1 minute",
      "range": "90 feet",
      "components": "Verbal, Somatic, Material (a pinch of fine sand, rose petals, or a cricket)",
      "slotLevel": "1",
      "school": "Enchantment",
      "shortDescription": "Starting with the lowest, make any creatures within 90ft and with current hit points equal to or less than 5d8 fall asleep until otherwise woken. Subtract each creatures hit points from total before moving onto next creature. Does not affect undead or creatures immune to charm. Increase by 2d8 for any spell slot after 1st.",
      "longDescription": "This spell sends creatures into a magical slumber. Roll 5d8; the total is how many hit points of creatures this spell can affect. Creatures within 20 feet of a point you choose within range are affected in ascending order of their current hit points (ignoring unconscious creatures). Starting with the creature that has the lowest current hit points, each creature affected by this spell falls unconscious until the spell ends, the sleeper takes damage, or someone uses an action to shake or slap the sleeper awake. Subtract each creatures hit points from the total before moving on to the creature with the next lowest hit points. A creatures hit points must be equal to or less than the remaining total for that creature to be affected. Undead and creatures immune to being charmed arent affected by this spell. At Higher Levels: When you cast this spell using a spell slot of 2nd level or higher, roll an additional 2d8 for each slot level above 1st.",
      "url": "https://www.dnd-spells.com/spell/sleep"
    },
    "prismatic spray": {
      "castingTime": "1 Action",
      "duration": "Instantaneous",
      "range": "Self (60-foot cone)",
      "components": "Verbal, Somatic",
      "slotLevel": "7",
      "school": "Evocation",
      "shortDescription": "Affects creatures in 60ft cone on a failed Dexterity save, with half damage on a winning save. Emits eight multicolored rays of light, each with a different damage determined by d8. 1 is Red or 10d6 fire, 2 is Orange or 10d6 acid, 3 is Yellow or 10d6 lightning, 4 is Green or 10d6 poison, 5 is Blue or 10d6 cold. 6 is Indigo to restrain target. Needs a Constitution save after each of the targets turns. 3 wins ends spell, 3 fails petrifies target. 7 is Violet, which blinds target. Spell ends with a successful Wisdom safe at start of casters next turn. Otherwise, target is sent to a plane of existence of D. M.s choosing. 8 is Special. Roll twice more, re-rolling any 8.",
      "longDescription": "Eight multicolored rays of light flash from your hand. Each ray is a different color and has a different power and purpose. Each creature in a 60-foot cone must make a Dexterity saving throw. For each target, roll a d8 to determine which color ray affects it. 1. Red. The target takes 10d6 fire damage on a failed save, or half as much damage on a successful one. 2. Orange. The target takes 10d6 acid damage on a failed save, or half as much damage on a successful one. 3. Yellow. The target takes 10d6 lightning damage on a failed save, or half as much damage on a successful one. 4. Green. The target takes 10d6 poison damage on a failed save, or half as much damage on a successful one. 5. Blue. The target takes 10d6 cold damage on a failed save, or half as much damage on a successful one. 6. Indigo. On a failed save, the target is restrained. It must then make a Constitution saving throw at the end of each of its turns. If it successfully saves three times, the spell ends. If it fails its save three times, it permanently turns to stone and is subjected to the petrified condition. The successes and failures dont need to be consecutive; keep track of both until the target collects three of a kind. 7. Violet. On a failed save, the target is blinded. It must then make a Wisdom saving throw at the start of your next turn. A successful save ends the blindness. If it fails that save, the creature is transported to another plane of existence of the D. M.s choosing and is no longer blinded. (Typically, a creature that is on a plane that isnt its home plane is banished home, while other creatures are usually cast into the Astral or Ethereal planes.) 8. Special. The target is struck by two rays. Roll twice more, rerolling any 8.",
      "url": "https://www.dnd-spells.com/spell/prismatic-spray",
      "damage": "Complex Damage Progression. Please consult short or long descriptions"
    },
    "frostbite": {
      "castingTime": "1 Action",
      "duration": "Instantaneous",
      "range": "60 feet",
      "components": "Verbal, Somatic",
      "slotLevel": "cantrip",
      "school": "Evocation",
      "shortDescription": "Deals 1d6 cold damage and to a target seen within 60ft range after a failed Constitution save. Also gives disadvantage to next weapon attack roll. Damage increases to 2d6 at 5th level, 3d6 at 11th level, and 4d6 at 17th level.",
      "longDescription": "You cause numbing frost to form on one creature that you can see within range. The target must make a Constitution saving throw. On a failed save, the target takes 1d6 cold damage, and it has disadvantage on the next weapon attack roll it makes before the end of its next turn. The spells damage increases by 1d6 when you reach 5th level (2d6), 11th level (3d6), and 17th level (4d6).",
      "url": "https://www.dnd-spells.com/spell/frostbite",
      "damage": {
        "type": "cold damage",
        "playerLevel": {
          1: "1d6",
          2: "1d6",
          3: "1d6",
          4: "1d6",
          5: "2d6",
          6: "2d6",
          7: "2d6",
          8: "2d6",
          9: "2d6",
          10: "2d6",
          11: "3d6",
          12: "3d6",
          13: "3d6",
          14: "3d6",
          15: "3d6",
          16: "3d6",
          17: "4d6",
          18: "4d6",
          19: "4d6",
          20: "4d6"
        }
      }
    },
    "fear": {
      "castingTime": "1 Action",
      "duration": "Concentration, up to 1 minute",
      "range": "Self (30-foot cone)",
      "components": "Verbal, Somatic, Material (a white feather or the heart of a hen)",
      "slotLevel": "3",
      "school": "Illusion",
      "shortDescription": "Needs concentration. Creatures in a 30ft cone must succeed a Wisdom save or drop everything they hold, becoming freightened for up to 1 minute. On each turn, creatures must Dash away from you until out of sight, and make a Wisdom save to end spell.",
      "longDescription": "You project a phantasmal image of a creatures worst fears. Each creature in a 30-foot cone must succeed on a wisdom saving throw or drop whatever it is holding and become frightened for the duration. While frightened by this spell, a creature must take the Dash action and move away from you by the safest available route on each of its turns, unless there is nowhere to move. If the creature ends its turn in a location where it doesnt have line of sight to you, the creature can make a wisdom saving throw. On a successful save, the spell ends for that creature.",
      "url": "https://www.dnd-spells.com/spell/fear"
    },
    "lightning bolt": {
      "castingTime": "1 Action",
      "duration": "Instantaneous",
      "range": "Self (100-foot line)",
      "components": "Verbal, Somatic, Material (a bit of fur and a rod of amber, crystal, or glass)",
      "slotLevel": "3",
      "school": "Evocation",
      "shortDescription": "For a 100ft long line in chosen direction, deals 8d6 lightning damage on a failed Dexterity save or half as much on a successful save. Ignites any flammable uncarried items. Increase damage by 1d6 for each spell slot after 3rd.",
      "longDescription": "A stroke of lightning forming a line 100 feet long and 5 feet wide blasts out from you in a direction you choose. Each creature in the line must make a Dexterity saving throw. A creature takes 8d6 lightning damage on a failed save, or half as much damage on a successful one. The lightning ignites flammable objects in the area that arent being worn or carried. At Higher Levels: When you cast this spell using a spell slot of 4th level or higher, the damage increases by 1d6 for each slot level above 3rd.",
      "url": "https://www.dnd-spells.com/spell/lightning-bolt",
      "damage": {
        "type": "lightning damage",
        "levels": {
          1: 0,
          2: 0,
          3: "8d6",
          4: "9d6",
          5: "10d6",
          6: "11d6",
          7: "12d6",
          8: "13d6",
          9: "14d6"
        }
      }
    },
    "slow": {
      "castingTime": "1 Action",
      "duration": "Concentration, up to 1 minute",
      "range": "120 feet",
      "components": "Verbal, Somatic, Material (a drop of molasses)",
      "slotLevel": "3",
      "school": "Transmutation",
      "shortDescription": "Needs concentration and lasts 1 minute. On a failed Wisdom save, time slows by half and deals -2 AC and Dexterity penalty for up to 6 creatures in a 40ft cube within 120ft range. Disables reactions, and can only use an action or bonus action, not both. If target casts a spell, roll a d20. Spell takes effect on next turn if roll is 11 or higher, but target uses an action on next turn to complete the spell. Spell is wasted otherwise. End spell with a Wisdom save at end of turn.",
      "longDescription": "You alter time around up to six creatures of your choice in a 40-foot cube within range. Each target must succeed on a wisdom saving throw or be affected by this spell for the duration. An affected targets speed is halved, it takes a -2 penalty to AC and Dexterity saving throws, and it cant use reactions. On its turn, it can use either an action or a bonus action, not both. Regardless of the creatures abilities or magic items, it cant make more than one melee or ranged attack during its turn. If the creature attempts to cast a spell with a casting time of 1 action, roll a d20. On an 11 or higher, the spell doesnt take effect until the creatures next turn, and the creature must use its action on that turn to complete the spell. If it cant, the spell is wasted. A creature affected by this spell makes another Wisdom saving throw at the end of its turn. On a successful save, the effect ends for it.",
      "url": "https://www.dnd-spells.com/spell/slow"
    },
    "druidcraft": {
      "castingTime": "1 Action",
      "duration": "Instantaneous",
      "range": "30 feet",
      "components": "Verbal, Somatic",
      "slotLevel": "cantrip",
      "school": "Transmutation",
      "shortDescription": "Choose one of the follow four: Create a tiny, harmless sensory effect to predict the weather for the next 24 hours at your location, this effect last 1 round. Instantly make a flower bloom, seed pod open, or leaf bud bloom. In a 5-foot cube create a harmless sensory effect, such as the sound of a small animal. Instantly light or snuff out a candle, torch, or a small campfire.",
      "longDescription": "Whispering to the spirits of nature, you create one of the four following effects within range: 1) You create a tiny, harmless sensory effect that predicts what the weather will be at your location for the next 24 hours. The effect might manifest as a golden orb for clear skies, a cloud for rain, falling snowflakes for snow, and so on. This effect persists for 1 round. 2) You instantly make a flower blossom, a seed pod open, or a leaf bud bloom. 3) You create an instantaneous, harmless sensory effect, such as falling leaves, a puff of wind, the sound of a small animal, or the faint odor of skunk. The effect must fit in a 5-foot cube. 4) You instantly light or snuff out a candle, a torch, or a small campfire.",
      "url": "https://www.dnd-spells.com/spell/druidcraft"
    },
    "dominate beast": {
      "castingTime": "1 Action",
      "duration": "Concentration, up to 1 minute",
      "range": "60 feet",
      "components": "Verbal, Somatic",
      "slotLevel": "4",
      "school": "Enchantment",
      "shortDescription": "Needs concentration. After a failed Wisdom save, charms a beast to take your commands telepathically for up to 1 minute. 5th spell slot increases duration to 10 minutes, 6th to 1 hour, and 7th or above to 8 hours. Beast takes Wisdom throw each time it takes damage and spell wears off on a win.",
      "longDescription": "You attempt to beguile a beast that you can see within range. It must succeed on a Wisdom saving throw or be charmed by you for the duration. If you or creatures that are friendly to you are fighting it, it has advantage on the saving throw. While the beast is charmed, you have a telepathic link with it as long as the two of you are on the same plane of existence. You can use this telepathic link to issue commands to the creature while you are conscious (no action required), which it does its best to obey. You can specify a simple and general course of action, such as Attack that creature, Run over there, or Fetch that object. If the creature completes the order and doesnt receive further direction from you, it defends and preserves itself to the best of its ability. You can use your action to take total and precise control of the target. Until the end of your next turn, the creature takes only the actions you choose, and doesnt do anything that you dont allow it to do. During this time, you can also cause the creature to use a reaction, but this requires you to use your own reaction as well. Each time the target takes damage, it makes a new wisdom saving throw against the spell. If the saving throw succeeds, the spell ends. At Higher Levels: When you cast this spell with a 5th-level spell slot, the duration is concentration, up to 10 minutes. When you use a 6th-level spell slot, the duration is concentration, up to 1 hour. When you use a spell slot of 7th level or higher, the duration is concentration, up to 8 hours.",
      "url": "https://www.dnd-spells.com/spell/dominate-beast"
    },
    "guidance": {
      "castingTime": "1 Action",
      "duration": "Concentration, up to 1 minute",
      "range": "Touch",
      "components": "Verbal, Somatic",
      "slotLevel": "cantrip",
      "school": "Divination",
      "shortDescription": "Touch one target to add d4 to an ability check of its choice. Needs concentration.",
      "longDescription": "You touch one willing creature. Once before the spell ends, the target can roll a d4 and add the number rolled to one ability check of its choice. It can roll the die before or after making the ability check. The spell then ends.",
      "url": "https://www.dnd-spells.com/spell/guidance"
    },
    "control weather": {
      "castingTime": "10 Minutes",
      "duration": "Concentration, up to 8 hours",
      "range": "Self (5-mile radius)",
      "components": "Verbal, Somatic, Material (burning incense and bits of earth and wood mixed in water)",
      "slotLevel": "8",
      "school": "Transmutation",
      "shortDescription": "Needs concentration. Control weather within 5 miles of your location, must be outdoors. Determined by the D. M., change the current conditions based on climate and season. After 1d4 x 10 minutes for the condition to take effect, you can change the precipitation, temperature, and wind.",
      "longDescription": "You take control of the weather within 5 miles of you for the duration. You must be outdoors to cast this spell. Moving to a place where you dont have a clear path to the sky ends the spell early. When you cast the spell, you change the current weather conditions, which are determined by the D. M. based on the climate and season. You can change precipitation, temperature, and wind. It takes 1d4 x 10 minutes for the new conditions to take effect. Once they do so, you can change the conditions again. When the spell ends, the weather gradually returns to normal. When you change the weather conditions, find a current condition on the tables listed online or in the players hand book and change its stage by one, up or down. When changing the wind, you can change its direction.",
      "url": "https://www.dnd-spells.com/spell/control-weather"
    },
    "fire storm": {
      "castingTime": "1 Action",
      "duration": "Instantaneous",
      "range": "150 feet",
      "components": "Verbal, Somatic",
      "slotLevel": "7",
      "school": "Evocation",
      "shortDescription": "Create a storm of roaring flame within range, consisting of ten 10-foot cubes, which you arrange. Each cube must be adjacent to another face of the cube. On a failed Dexterity save, each creature in the area takes 7d10 fire damage, or half damage on a success.",
      "longDescription": "A storm made up of sheets of roaring flame appears in a location you choose within range. The area of the storm consists of up to ten 10-foot cubes, which you can arrange as you wish. Each cube must have at least one face adjacent to the face of another cube. Each creature in the area must make a Dexterity saving throw. It takes 7d10 fire damage on a failed save, or half as much damage on a successful one. The fire damages objects in the area and ignites flammable objects that arent being worn or carried. If you choose, plant life in the area is unaffected by this spell.",
      "url": "https://www.dnd-spells.com/spell/fire-storm",
      "damage": {
        "type": "fire damage",
        "levels": {
          1: 0,
          2: 0,
          3: 0,
          4: 0,
          5: 0,
          6: 0,
          7: "7d10",
          8: "7d10",
          9: "7d10"
        }
      }
    },
    "cordon of arrows": {
      "castingTime": "1 Action",
      "duration": "8 hours",
      "range": "5 feet",
      "components": "Verbal, Somatic, Material (four or more arrows or bolts)",
      "slotLevel": "2",
      "school": "Transmutation",
      "shortDescription": "Plant four pieces of nonmagical ammunition in the ground within range, you may choose any creatures and the spell ignores them. Whenever a creature comes within 30 feet of the ammunition for the first time or ends it turn there, make a Dexterity save, on a fail creature takes 1d6 piercing damage. The piece of ammunition is then destroyed.",
      "longDescription": "You plant four pieces of nonmagical ammunition. arrows or crossbow bolts, in the ground within range and lay magic upon them to protect an area. Until the spell ends, whenever a creature other than you comes within 30 feet of the ammunition for the first time on a turn or ends its turn there, one piece of ammunition flies up to strike it. The creature must succeed on a Dexterity saving throw or take 1d6 piercing damage. The piece of ammunition is then destroyed. The spell ends when no ammunition remains. When you cast this spell, you can designate any creatures you choose, and the spell ignores them. At Higher Levels: When you cast this spell using a spell slot of 3rd level or higher, the amount of ammunition that can be affected increases by two for each slot level above 2nd.",
      "url": "https://www.dnd-spells.com/spell/cordon-of-arrows",
      "damage": {
        "type": "piercing damage",
        "levels": {
          1: 0,
          2: "1d6",
          3: "2d6",
          4: "3d6",
          5: "4d6",
          6: "5d6",
          7: "6d6",
          8: "7d6",
          9: "8d6"
        }
      }
    },
    "unseen servant": {
      "castingTime": "1 Action",
      "duration": "1 hour",
      "range": "60 feet",
      "components": "Verbal, Somatic, Material (a piece of string and a bit of wood)",
      "slotLevel": "1",
      "school": "Conjuration Ritual",
      "shortDescription": "Create an invisible, mindless, shapeless force that performs simple tasks at your command. Has AC 10, 1 hit point, and 2 strength, it cannot attack. Once on each of your turns as a bonus action, you can mentally command the servant to move up to 15 feet and interact with an object. Once you give the command, the servant performs the task to the best of its ability. If you command the servant to perform a task that would move it more than 60 feet away from you, the spell ends.",
      "longDescription": "This spell creates an invisible, mindless, shapeless force that performs simple tasks at your command until the spell ends. The servant springs into existence in an unoccupied space on the ground within range. It has AC 10, 1 hit point, and a Strength of 2, and it cant attack. If it drops to 0 hit points, the spell ends. Once on each of your turns as a bonus action, you can mentally command the servant to move up to 15 feet and interact with an object. The servant can perform simple tasks that a human servant could do, such as fetching things, cleaning, mending, folding clothes, lighting fires, serving food, and pouring wine. Once you give the command, the servant performs the task to the best of its ability until it completes the task, then waits for your next command. If you command the servant to perform a task that would move it more than 60 feet away from you,the spell ends.",
      "url": "https://www.dnd-spells.com/spell/unseen-servant-ritual"
    },
    "guards and wards": {
      "castingTime": "10 Minutes",
      "duration": "24 hours",
      "range": "Touch",
      "components": "Verbal, Somatic, Material (burning incense, a small measure of brimstone and oil, a knotted string, a small amount of umber hulk blood, and a small silver rod worth at least 10 gold pieces)",
      "slotLevel": "6",
      "school": "Abjuration",
      "shortDescription": "Create a ward that protects up to 2,500 square feet of floor space. The warded area can be up to 20 feet tall, and shaped as desired. You may specify individuals that are unaffect by any or all of the effects that you choose. You can also specify a password that, when spoken aloud, makes the speaker immune to these effects. The spell creates the following effects within the warded area. Corridors: fog fills all the warded corridors, making them heavily obscured. In addition, at each intersection or branching passage, there is a 50 percent chance that a creature other than you will believe it is going in the opposite direction. Doors: All doors in the warded area are magically locked. In addition, you can cover up to ten doors with an illusion to make them appear as plain sections of walls. Stairs: Webs fill all stairs in tthe warded area from top to bottom. These strands regrow in 10 minutes if torn or burned down for the duration of the spell. Other: You can place your choice of one of the five following magical effects. Place dancing lights in four corridors, you may designate a simple program that the lights repeat. Place magic mouth in two locations. Place a stinking cloud in two locations, the vapors appear in the places you designate, and return within 10 minutes if dispersed by wind. Place a constant gust of wind in one corridor or room. Place a suggestion in one location, select an area of up to 5 square feet, any creature that enters or passes through the area receives the suggestion mentally. Dispel magic cast on a specific effect, if successful, removes only that effect. You can create a permanently guarded and warded structure by casting this spell every day for one year.",
      "longDescription": "You create a ward that protects up to 2,500 square feet of floor space (an area 50 feet square, or one hundred 5-foot squares or twenty-five 10-foot squares). The warded area can be up to 20 feet tall, and shaped as you desire. You can ward several stories of a stronghold by dividing the area among them, as long as you can walk into each contiguous area while you are casting the spell. When you cast this spell, you can specify individuals that are unaffected by any or all of the effects that you choose. You can also specify a password that, when spoken aloud, makes the speaker immune to these effects. Guards and wards creates the following effects within the warded area. Corridors. Fog fills all the warded corridors, making them heavily obscured. In addition, at each intersection or branching passage offering a choice of direction, there is a 50 percent chance that a creature other than you will believe it is going in the opposite direction from the one it chooses. Doors. All doors in the warded area are magically locked, as if sealed by an arcane lock spell. In addition, you can cover up to ten doors with an illusion (equivalent to the illusory object function of the minor illusion spell) to make them appear as plain sections of wall. Stairs. Webs fill all stairs in the warded area from top to bottom, as the web spell. These strands regrow in 10 minutes if they are burned or torn away while guards and wards lasts. Other Spell Effect. You can place your choice of one of the five following magical effects within the warded area of the stronghold. 1) Place dancing lights in four corridors. You can designate a simple program that the lights repeat as long as guards and wards lasts. 2) Place magic mouth in two locations. 3) Place stinking cloud in two locations. The vapors appear in the places you designate; they return within 10 minutes if dispersed by wind while guards and wards lasts. 4)Place a constant gust of wind in one corridor or room. 5) Place a suggestion in one location. You select an area of up to 5 feet square, and any creature that enters or passes through the area receives the suggestion mentally.The whole warded area radiates magic. A dispel magic cast on a specific effect, if successful, removes only that effect. You can create a permanently guarded and warded structure by casting this spell there every day for one year.",
      "url": "https://www.dnd-spells.com/spell/guards-and-wards"
    },
    "locate creature": {
      "castingTime": "1 Action",
      "duration": "Concentration, up to 1 hour",
      "range": "Self",
      "components": "Verbal, Somatic, Material (a bit of fur from a bloodhound)",
      "slotLevel": "4",
      "school": "Divination",
      "shortDescription": "Needs concentration. Describe or name a creature that is familiar to you. You sense the direction to the creatures location within 1,000 feet of you. If the creature is moving, you sense its movement.",
      "longDescription": "Describe or name a creature that is familiar to you. You sense the direction to the creatures location, as long as that creature is within 1,000 feet of you. If the creature is moving, you know the direction of its movement. The spell can locate a specific creature known to you, or the nearest creature of a specific kind (such as a human or a unicorn), so long as you have seen such a creature up close, within 30 feet, at least once. If the creature you described or named is in a different form, such as being under the effects of a polymorph spell, this spell doesnt locate the creature. This spell cant locate a creature if running water at least 10 feet wide blocks a direct path between you and the creature.",
      "url": "https://www.dnd-spells.com/spell/locate-creature"
    },
    "witch bolt": {
      "castingTime": "1 Action",
      "duration": "Concentration, up to 1 minute",
      "range": "30 feet",
      "components": "Verbal, Somatic, Material (a twig from a tree that has been struck by lightning)",
      "slotLevel": "1",
      "school": "Evocation",
      "shortDescription": "Needs concentration. Make a ranged spell attack against a creature. On a hit, the target takes 1d12 lightning damage, and on each of your turns for the duration, you can use your action to deal 1d12 lightning damage to the target automatically. At higher levels, you cast this spell using a spell slot of 2nd level or higher, the initial damage increases by 1d12 for each slot above 1st.",
      "longDescription": "A beam of crackling, blue energy lances out toward a creature within range, forming a sustained arc of lightning between you and the target. Make a ranged spell attack against that creature. On a hit, the target takes 1d12 lightning damage, and on each of your turns for the duration, you can use your action to deal 1d12 lightning damage to the target automatically. The spell ends if you use your action to do anything else. The spell also ends if the target is ever outside the spells range or if it has total cover from you. At Higher Levels: When you cast this spell using a spell slot of 2nd level or higher, the initial damage increases by 1d12 for each slot level above 1st.",
      "url": "https://www.dnd-spells.com/spell/witch-bolt",
      "damage": {
        "type": "lightning damage",
        "levels": {
          1: "1d12",
          2: "2d12",
          3: "3d12",
          4: "4d12",
          5: "5d12",
          6: "6d12",
          7: "7d12",
          8: "8d12",
          9: "9d12"
        }
      }
    },
    "fly": {
      "castingTime": "1 Action",
      "duration": "Concentration, up to 10 minutes",
      "range": "Touch",
      "components": "Verbal, Somatic, Material (a wing feather from any bird)",
      "slotLevel": "3",
      "school": "Transmutation",
      "shortDescription": "Needs concentration. Touch a willing creature, the target gains a flying speed of 60 feet for the duration. When you cast this spell using a spell slot of 4th level or higher, you can target one additional creature for each level above 3rd.",
      "longDescription": "You touch a willing creature. The target gains a flying speed of 60 feet for the duration. When the spell ends, the target falls if it is still aloft, unless it can stop the fall. At Higher Levels: When you cast this spell using a spell slot of 4th level or higher, you can target one additional creature for each slot level above 3rd.",
      "url": "https://www.dnd-spells.com/spell/fly"
    },
    "prismatic wall": {
      "castingTime": "1 Action",
      "duration": "10 minutes",
      "range": "60 feet",
      "components": "Verbal, Somatic",
      "slotLevel": "9",
      "school": "Abjuration",
      "shortDescription": "You create a 90 foot long, 30 foot high, and 1 inch thick-centered on a point you can see within range. Alternatively, you can shape the wall into a sphere up to 30 feet in diameter centered on a point. The wall sheds bright light out to a range of 100 feet, and dim light for an additional 100 feet. You and creatures you designate at the time you cast the spell can pass through and remain near the wall without harm. If another creature that can see the wall moves within 20 feet or starts its turn there, the creature makes a Constitution save or becomes blinded for 1 minute. The wall consists of 7 layers, each with a different color. When a creature attempts to reach into or pass through the wall it does so one layer at a time. As it passes or reaches through each layer, the creature must make a Dexterity save or be affected by that layers properties as described. Red: The creature takes 10d6 fire damage on a failed save, or half as much on success. Orange: The creature takes 10d6 acid damage on a failed save, or half as much on success. Yellow: The creature takes 10d6 lightning damage on a failed save, or half as much on success. Green: The creature takes 10d6 poison damage on a failed save, or half as much on success. Blue: The creature takes 10d6 cold damage on a failed save, or half as much on success. Indigo: On a failed save, the creature is restrained, it must make a Constitution save at the end of each of its turns. Violet: On a failed save the creature is blinded. It must make a Wisdom save at the start of your next turn.",
      "longDescription": "A shimmering, multicolored plane of light forms a vertical opaque wall, up to 90 feet long, 30 feet high, and 1 inch thick, centered on a point you can see within range. Alternatively, you can shape the wall into a sphere up to 30 feet in diameter centered on a point you choose within range. The wall remains in place for the duration. If you position the wall so that it passes through a space occupied by a creature, the spell fails, and your action and the spell slot are wasted. The wall sheds bright light out to a range of 100 feet and dim light for an additional 100 feet. You and creatures you designate at the time you cast the spell can pass through and remain near the wall without harm. If another creature that can see the wall moves to within 20 feet of it or starts its turn there, the creature must succeed on a Constitution saving throw or become blinded for 1 minute. The wall consists of seven layers, each with a different color. When a creature attempts to reach into or pass through the wall, it does so one layer at a time through all the walls layers. As it passes or reaches through each layer, the creature must make a Dexterity saving throw or be affected by that layers properties as described below. The wall can be destroyed, also one layer at a time, in order from red to violet, by means specific to each layer. Once a layer is destroyed, it remains so for the duration of the spell. A rod ofcancellation destroys a prismatic wall, but an antimagic field has no effect on it. 1) Red. The creature takes 10d6 fire damage on a failed save, or half as much damage on a successful one. While this layer is in place, nonmagical ranged attacks cant pass through the wall. The layer can be destroyed by dealing at least 25 cold damage to it. 2) Orange. The creature takes 10d6 acid damage on a failed save, or half as much damage on a successful one. While this layer is in place, magical ranged attacks cant pass through the wall. The layer is destroyed by a strong wind. 3) Yellow. The creature takes 10d6 lightning damage on a failed save, or half as much damage on a successful one. This layer can be destroyed by dealing at least 60 force damage to it. 4) Green. The creature takes 10d6 poison damage on a failed save, or half as much damage on a successful one. A passwall spell, or another spell of equal or greater level that can open a portal on a solid surface, destroys this layer. 5) Blue. The creature takes 10d6 cold damage on a failed save, or half as much damage on a successful one. This layer can be destroyed by dealing at least 25 fire damage to it. 6) Indigo. On a failed save, the creature is restrained. It must then make a Constitution saving throw at the end of each of its turns. If it successfully saves three times, the spell ends. If it fails its save three times, it permanently turns to stone and is subjected to the petrified condition. The successes and failures dont need to be consecutive: keep track of both until the creature collects three of a kind. While this layer is in place, spells cant be cast through the wall. The layer is destroyed by bright light shed by a daylight spell or a similar spell of equal or higher level. 7) Violet. On a failed save, the creature is blinded. It must then make a wisdom saving throw at the start of your next turn. A successful save ends the blindness. If it fails that save, the creature is transported to another plane of the D. M.s choosing and is no longer blinded. (Typically, a creature that is on a plane that isnt its home plane is banished home, while other creatures are usually cast into the Astral or Ethereal planes.) This layer is destroyed by a dispel magic spell or a similar spell of equal or higher level that can end spells and magical effects.",
      "url": "https://www.dnd-spells.com/spell/prismatic-wall",
      "damage": "Complex Damage Progression. Please consult short or long descriptions"
    },
    "shapechange": {
      "castingTime": "1 Action",
      "duration": "Concentration, up to 1 hour",
      "range": "Self",
      "components": "Verbal, Somatic, Material (a jade circlet worth at least 1,500 gold pieces, which you must place on your head before you cast the spell)",
      "slotLevel": "9",
      "school": "Transmutation",
      "shortDescription": "Needs concentration. You assume the form of a different creature for the duration. The new form can be any creature with a challenge rating equal to your level or lower. The creature cant be a construct or undead, you also must have seen the creature at least once. You assume the hit points and Hit Dice of the new form, when you revert to your normal form, you return to the number of hit points you had before the transformation. If you revert as a result of dropping to 0 hit points, any excess damage carries over to your normal form. During the spells duration, you can use your action to assume a different form following the same restrictions and rules for the original form, with one exception: if your new form has more hit points that your current one, your hit points remain at their current value.",
      "longDescription": "You assume the form of a different creature for the duration. The new form can be of any creature with a challenge rating equal to your level or lower. The creature cant be a construct or an undead, and you must have seen the sort of creature at least once. You transform into an average example of that creature, one without any class levels or the Spellcasting trait. Your game statistics are replaced by the statistics of the chosen creature, though you retain your alignment and Intelligence, Wisdom, and Charisma scores. You also retain all of your skill and saving throw proficiencies, in addition to gaining those of the creature. If the creature has the same proficiency as you and the bonus listed in its statistics is higher than yours, use the creatures bonus in place of yours. You cant use any legendary actions or lair actions of the new form. You assume the hit points and Hit Dice of the new form. When you revert to your normal form, you return to the number of hit points you had before you transformed. If you revert as a result of dropping to 0 hit points, any excess damage carries over to your normal form. As long as the excess damage doesnt reduce your normal form to 0 hit points, you arent knocked unconscious. You retain the benefit of any features from your class, race, or other source and can use them, provided that your new form is physically capable of doing so. You cant use any special senses you have (for example, darkvision) unless your new form also has that sense. You can only speak if the creature can normally speak. When you transform, you choose whether your equipment falls to the ground, merges into the new form, or is worn by it. Worn equipment functions as normal. The D. M. determines whether it is practical for the new form to wear a piece of equipment, based on the creatures shape and size. Your equipment doesnt change shape or size to match the new form, and any equipment that the new form cant wear must either fall to the ground or merge into your new form. Equipment that merges has no effect in that state. During this spells duration, you can use your action to assume a different form following the same restrictions and rules for the original form, with one exception: if your new form has more hit points than your current one, your hit points remain at their current value.",
      "url": "https://www.dnd-spells.com/spell/shapechange"
    },
    "color spray": {
      "castingTime": "1 Action",
      "duration": "1 round",
      "range": "Self (15-foot cone)",
      "components": "Verbal, Somatic, Material (a pinch of powder or sand that is colored red, yellow, and blue)",
      "slotLevel": "1",
      "school": "Illusion",
      "shortDescription": "Roll 6d10; the total is how many hit points of creatures this spell can effect. Creatures in a 15 foot cone originating from you are affected in ascending order of their current hit points. Each creature affected by this spell is blinded until the spell ends. Subtract each creatures hit points from the total, before moving on to the next creature. A creatures hit points must be equal to or less than the remaining total for that creature to be affected. When you cast this spell using a spell slot of 2nd level or higher, roll an additional 2d10 for each slot above 1st.",
      "longDescription": "A dazzling array of flashing, colored light springs from your hand. Roll 6d10; the total is how many hit points of creatures this spell can effect. Creatures in a 15-foot cone originating from you are affected in ascending order of their current hit points (ignoring unconscious creatures and creatures that cant see). Starting with the creature that has the lowest current hit points, each creature affected by this spell is blinded until the spell ends. Subtract each creatures hit points from the total before moving on to the creature with the next lowest hit points. A creatures hit points must be equal to or less than the remaining total for that creature to be affected. At Higher Levels: When you cast this spell using a spell slot of 2nd level or higher, roll an additional 2d10 for each slot level above 1st.",
      "url": "https://www.dnd-spells.com/spell/color-spray"
    },
    "meld into stone": {
      "castingTime": "1 Action",
      "duration": "8 hours",
      "range": "Touch",
      "components": "Verbal, Somatic",
      "slotLevel": "3",
      "school": "Transmutation Ritual",
      "shortDescription": "Step into a stone object or surface large enough to fully contain your body, melding yourself and all the equipment you carry with the stone for the duration. While merged with the stone, you cant see what occurs outside it, and any Wisdom(Perception) checks you make to hear sounds outside it are made with disadvantage. You may cast spells on yourself while merged. You can use your movement to leave the stone where you entered it, which ends the spell, otherwise you cant move. If expelled, you fall prone in an unoccupied space closest to where you entered.",
      "longDescription": "You step into a stone object or surface large enough to fully contain your body, melding yourself and all the equipment you carry with the stone for the duration. Using your movement, you step into the stone at a point you can touch. Nothing of your presence remains visible or otherwise detectable by nonmagical senses. While merged with the stone, you cant see what occurs outside it, and any Wisdom (Perception) checks you make to hear sounds outside it are made with disadvantage. You remain aware of the passage of time and can cast spells on yourself while merged in the stone. You can use your movement to leave the stone where you entered it, which ends the spell. You otherwise cant move. Minor physical damage to the stone doesnt harm you, but its partial destruction or a change in its shape (to the extent that you no longer fit within it) expels you and deals 6d6 bludgeoning damage to you. The stones complete destruction (or transmutation into a different substance) expels you and deals 50 bludgeoning damage to you. If expelled, you fall prone in an unoccupied space closest to where you first entered.",
      "url": "https://www.dnd-spells.com/spell/meld-into-stone-ritual",
      "damage": "Complex Damage Progression. Please consult short or long descriptions"
    },
    "ice storm": {
      "castingTime": "1 Action",
      "duration": "Instantaneous",
      "range": "300 feet",
      "components": "Verbal, Somatic, Material (a pinch of dust and a few drops of water)",
      "slotLevel": "4",
      "school": "Evocation",
      "shortDescription": "Hail pounds the ground in a 20 foot radius, 40 foot high cylinder centered on a point within range. Each creature in the cylinder must make a Dexterity save or takes 2d8 bludgeoning damage and 4d6 cold damage on a fail, or half as much on a success. Hailstones turn the storms area of effect into difficult terrain until the end of your next turn. When cast at a spell slot of 5th or higher, the bludgeoning damage increases 1d8 for each level above 4th.",
      "longDescription": "A hail of rock-hard ice pounds to the ground in a 20-foot-radius, 40-foot-high cylinder centered on a point within range. Each creature in the cylinder must make a Dexterity saving throw. A creature takes 2d8 bludgeoning damage and 4d6 cold damage on a failed save, or half as much damage on a successful one. Hailstones turn the storms area of effect into difficult terrain until the end of your next turn. At Higher Levels: When you cast this spell using a spell slot of 5th level or higher, the bludgeoning damage increases by 1d8 for each slot level above 4th.",
      "url": "https://www.dnd-spells.com/spell/ice-storm",
      "damage": {
        "type": "bludgeoning damage and cold damage",
        "levels": {
          1: 0,
          2: 0,
          3: 0,
          4: "2d8 and 4d6",
          5: "3d8 and 4d6",
          6: "4d8 and 4d6",
          7: "5d8 and 4d6",
          8: "6d8 and 4d6",
          9: "7d8 and 4d6"
        }
      }
    },
    "flame arrows": {
      "castingTime": "1 Action",
      "duration": "Concentration, up to 1 hour",
      "range": "Touch",
      "components": "Verbal, Somatic",
      "slotLevel": "3",
      "school": "Transmutation",
      "shortDescription": "Needs concentration. You touch a quiver containing arrows or bolts. When a target is hit by a ranged weapon attack using a piece of ammunition drawn from the quiver, the target takes an extra 1d6 fire damage. When cast at a spell slot of 4th level or higher, the number of pieces you can affect increases by two for each slot level above 3rd.",
      "longDescription": "You touch a quiver containing arrows or bolts. When a target is hit by a ranged weapon attack using a piece of ammunition drawn from the quiver, the target takes an extra 1d6 fire damage. The spells magic ends on the piece of ammunition when it hits or misses, and the spell ends when twelve pieces of ammunition have been drawn from the quiver. At Higher Levels. When you cast this spell using a spell slot of 4th level or higher, the number of pieces of ammunition you can affect with this spell increases by two for each slot level above 3rd.",
      "url": "https://www.dnd-spells.com/spell/flame-arrows",
      "damage": {
        "type": "fire damage",
        "levels": {
          1: 0,
          2: 0,
          3: "1d6",
          4: "2d6",
          5: "3d6",
          6: "4d6",
          7: "5d6",
          8: "6d6",
          9: "7d6"
        }
      }
    },
    "phantasmal killer": {
      "castingTime": "1 Action",
      "duration": "Concentration, up to 1 minute",
      "range": "120 feet",
      "components": "Verbal, Somatic",
      "slotLevel": "4",
      "school": "Illusion",
      "shortDescription": "Needs concentration. Tap into the nightmares of a creature you can see within range and create an illusory manifestation of its deepest fears, visible only to that creature. The target must make a Wisdom save or be frightened for the duration. At the start of each of the targets turns before the spell ends, the target must succeed on a Wisdom save or take 4d10 psychic damage. On success the spell ends. When cast using a spell slot of 5th level or higher, the damage increases by 1d10 for each slot above 4th.",
      "longDescription": "You tap into the nightmares of a creature you can see within range and create an illusory manifestation of its deepest fears, visible only to that creature. The target must make a Wisdom saving throw. On a failed save, the target becomes frightened for the duration. At the start of each of the targets turns before the spell ends, the target must succeed on a Wisdom saving throw or take 4d10 psychic damage. On a successful save, the spell ends. At Higher Levels: When you cast this spell using a spell slot of 5th level or higher, the damage increases by 1d10 for each slot level above 4th.",
      "url": "https://www.dnd-spells.com/spell/phantasmal-killer",
      "damage": {
        "type": "psychic damage",
        "levels": {
          1: 0,
          2: 0,
          3: 0,
          4: "4d10",
          5: "5d10",
          6: "6d10",
          7: "7d10",
          8: "8d10",
          9: "9d10"
        }
      }
    },
    "magic jar": {
      "castingTime": "1 Minute",
      "duration": "Until dispelled",
      "range": "Self",
      "components": "Verbal, Somatic, Material (a gem, crystal, reliquary, or some other ornamental container worth at least 500 gold pieces)",
      "slotLevel": "6",
      "school": "Necromancy",
      "shortDescription": "Your body falls into a catatonic state as your soul leaves it and enters the container you used for the spells material component. While your soul inhabits the container you are aware of your surroundings as if you were in the containers space. The only action you can take is to project your soul up to 100 feet out of the container, either returning to your body(ending the spell) or attempting to possess a humanoids body. You can attempt to possess any humanoid within 100 feet of you that you can see. The target must make a Charism save or your soul moves into the targets body, and tthe targets soul becomes trapped in the container. On a success, the target resists, and cant be possessed again for 24 hours. Once you possess a creatures body, you control it. If the host body dies while youre in it, the creature dies, and you must make a Charism save against your own spellcasting DC. On a success, you return to the container if it is within 100 feet of you. Otherwise, you die. If the container is destroyed or the spell ends, your soul immediately returns to your body, if your body is more than 100 feet away from you or if your body is dead when you attempt to return to it, you die and vice versa for the target creature.",
      "longDescription": "Your body falls into a catatonic state as your soul leaves it and enters the container you used for the spells material component. While your soul inhabits the container, you are aware of your surroundings as if you were in the containers space. You cant move or use reactions. The only action you can take is to project your soul up to 100 feet out of the container, either returning to your living body (and ending the spell) or attempting to possess a humanoids body. You can attempt to possess any humanoid within 100 feet of you that you can see (creatures warded by a protection from evil and good or magic circle spell cant be possessed). The target must make a Charisma saving throw. On a failure, your soul moves into the targets body, and the targets soul becomes trapped in the container. On a success, the target resists your efforts to possess it, and you cant attempt to possess it again for 24 hours. Once you possess a creatures body, you control it. Your game statistics are replaced by the statistics of the creature, though you retain your alignment and your Intelligence, Wisdom, and Charisma scores. You retain the benefit of your own class features. If the target has any class levels, you cant use any of its class features. Meanwhile, the possessed creatures soul can perceive from the container using its own senses, but it cant move or take actions at all. While possessing a body, you can use your action to return from the host body to the container if it is within 100 feet of you, returning the host creatures soul to its body. If the host body dies while youre in it, the creature dies, and you must make a Charisma saving throw against your own spellcasting DC. On a success, you return to the container if it is within 100 feet of you. Otherwise, you die. If the container is destroyed or the spell ends, your soul immediately returns to your body. If your body is more than 100 feet away from you or if your body is dead when you attempt to return to it, you die. If another creatures soul is in the container when it is destroyed, the creatures soul returns to its body if the body is alive and within 100 feet. Otherwise, that creature dies. When the spell ends, the container is destroyed.",
      "url": "https://www.dnd-spells.com/spell/magic-jar"
    },
    "tree stride": {
      "castingTime": "1 Action",
      "duration": "Concentration, up to 1 minute",
      "range": "Self",
      "components": "Verbal, Somatic",
      "slotLevel": "5",
      "school": "Conjuration",
      "shortDescription": "Needs concentration. You gain the ability to enter a tree and move from inside it to inside another tree of the same kind within 500 feet. Both trees must be living and at least the same size as you. You must use 5 feet of movement to enter a tree. You instantly know the location of all other trees of the same kind within 500 feet, and as part of the movement used to enter the tree, can either pass into one of those trees or step out of the tree youre in. You appear in a spot of your choice within 5 feet of the destination tree, using another 5 feet of movement. If you have no movement left, you appear within 5 feet of the tree you entered. You can use this transportation ability once per round for the duration. You must end each turn outside a tree.",
      "longDescription": "You gain the ability to enter a tree and move from inside it to inside another tree of the same kind within 500 feet. Both trees must be living and at least the same size as you. You must use 5 feet of movement to enter a tree. You instantly know the location of all other trees of the same kind within 500 feet and, as part of the move used to enter the tree, can either pass into one of those trees or step out of the tree youre in. You appear in a spot of your choice within 5 feet of the destination tree, using another 5 feet of movement. If you have no movement left, you appear within 5 feet of the tree you entered. You can use this transportation ability once per round for the duration. You must end each turn outside a tree.",
      "url": "https://www.dnd-spells.com/spell/tree-stride"
    },
    "programmed illusion": {
      "castingTime": "1 Action",
      "duration": "Until dispelled",
      "range": "120 feet",
      "components": "Verbal, Somatic, Material (a bit of fleece and jade dust worth at least 25 gold pieces)",
      "slotLevel": "6",
      "school": "Illusion",
      "shortDescription": "You create an illusion of an object, a creature, or some other visible phenomenon within range that activates when a specific condition occurs. The illusion is imperceptible until activated. It must be no larger than a 30 foot cube, and you decide when you cast the spell how the illusion behaves and what sounds it makes and last up to 5 minutes. Once the illusion finishes performing, it disappears and remains dormant for 10 minutes, after which the illusion can be activated again. The triggering condition can be as general or as detailed as you like, but must be based on visual or audible conditions that occur within 30 feet of the area. A creature can use its action to discern the illusion, with a successful Intelligence(investigation) check against your spell save DC.",
      "longDescription": "You create an illusion of an object, a creature, or some other visible phenomenon within range that activates when a specific condition occurs. The illusion is imperceptible until then. It must be no larger than a 30-foot cube, and you decide when you cast the spell how the illusion behaves and what sounds it makes. This scripted performance can last up to 5 minutes. When the condition you specify occurs, the illusion springs into existence and performs in the manner you described. Once the illusion finishes performing, it disappears and remains dormant for 10 minutes. After this time, the illusion can be activated again. The triggering condition can be as general or as detailed as you like, though it must be based on visual or audible conditions that occur within 30 feet of the area. For example, you could create an illusion of yourself to appear and warn off others who attempt to open a trapped door, or you could set the illusion to trigger only when a creature says the correct word or phrase. Physical interaction with the image reveals it to be an illusion, because things can pass through it. A creature that uses its action to examine the image can determine that it is an illusion with a successful Intelligence (Investigation) check against your spell save DC. If a creature discerns the illusion for what it is, the creature can see through the image, and any noise it makes sounds hollow to the creature.",
      "url": "https://www.dnd-spells.com/spell/programmed-illusion"
    },
    "telekinesis": {
      "castingTime": "1 Action",
      "duration": "Concentration, up to 10 minutes",
      "range": "60 feet",
      "components": "Verbal, Somatic",
      "slotLevel": "5",
      "school": "Transmutation",
      "shortDescription": "Needs concentration. You gain the ability to move or manipulate creatures or objects by thought. For the duration you can use your action to exert your will on one creature or object that you can see within range. Creature: You can try to move a Huge or smaller creature, the creature makes a Strength check against your spellcasting DC. On a fail, you move the creature up to 30 feet in any direction within the range of the spell. Until the end of your next turn, the creature is restrained. You can use your action to maintain your telekinetic grip by repeating the contest. Object: You can try to move an object that weighs up to 1,000 pounds. If it isnt being worn or carried, you automatically move it up to 30 feet in any direction within the range of the spell. If it is worn or carried by a creature, make a check using your spellcasting ability against the target creatures Strength. You can exert fine control on objects such as using a simple tool or pouring contents from a vial.",
      "longDescription": "You gain the ability to move or manipulate creatures or objects by thought. When you cast the spell, and as your action each round for the duration, you can exert your will on one creature or object that you can see within range, causing the appropriate effect below. You can affect the same target round after round, or choose a new one at any time. If you switch targets, the prior target is no longer affected by the spell. Creature. You can try to move a Huge or smaller creature. Make an ability check with your spellcasting ability contested by the creatures Strength check. If you win the contest, you move the creature up to 30 feet in any direction, including upward but not beyond the range of this spell. Until the end of your next turn, the creature is restrained in your telekinetic grip. A creature lifted upward is suspended in mid-air. On subsequent rounds, you can use your action to attempt to maintain your telekinetic grip on the creature by repeating the contest. Object: You can try to move an object that weighs up to 1,000 pounds. If the object isnt being worn or carried, you automatically move it up to 30 feet in any direction, but not beyond the range of this spell. If the object is worn or carried by a creature, you must make an ability check with your spellcasting ability contested by that creatures Strength check. If you succeed, you pull the object away from that creature and can move it up to 30 feet in any direction but not beyond the range of this spell. You can exert fine control on objects with your telekinetic grip, such as manipulating a simple tool, opening a door or a container, stowing or retrieving an item from an open container, or pouring the contents from a vial.",
      "url": "https://www.dnd-spells.com/spell/telekinesis"
    },
    "heroes feast": {
      "castingTime": "10 Minutes",
      "duration": "Instantaneous",
      "range": "30 feet",
      "components": "Verbal, Somatic, Material (a gem-encrusted bowl worth at least 1,000 gold pieces, which the spell consumes)",
      "slotLevel": "6",
      "school": "Conjuration",
      "shortDescription": "You conjure a great feast, including magnificent food and drink. The feast takes an hour to consume and disappears after. A creature that partakes in the feast gains several benefits, such as cured of all diseases and poison, becomes immune to poison and being frightened, and makes all Wisdom saves with advantage. Maximum hit points increased by 2d10, and gains that many hit points. Benefits last 24 hours.",
      "longDescription": "You bring forth a great feast, including magnificent food and drink. The feast takes 1 hour to consume and disappears at the end of that time, and the beneficial effects dont set in until this hour is over. Up to twelve other creatures can partake of the feast. A creature that partakes of the feast gains several benefits. The creature is cured of all diseases and poison, becomes immune to poison and being frightened, and makes all Wisdom saving throws with advantage. Its hit point maximum also increases by 2d10, and it gains the same number of hit points. These benefits last for 24 hours.",
      "url": "https://www.dnd-spells.com/spell/heroes-feast"
    },
    "control flames": {
      "castingTime": "1 Action",
      "duration": "Instantaneous or 1 hour",
      "range": "60 feet",
      "components": "Somatic",
      "slotLevel": "cantrip",
      "school": "Transmutation",
      "shortDescription": "Choose a nonmagical flame you can see within range and that fits within a 5 foot cube. You affect it in one of the following ways: Instantly expand the flame 5 feet in one direction, provided wood or other fuel is present in the new location. Instantly extinguish the flames within the cube. Double or halve the area of bright light and dim light produced by the flame, and change the color, this lasts 1 hour. Cause simple shapes to appear within the flames and animate as you like, this lasts for 1 hour. Can be cast multiple times to have up to three non-instant effects at a time.",
      "longDescription": "You choose nonmagical flame that you can see within range and that fits within a 5-foot cube. You affect it in one of the following ways. You instantaneously expand the flame 5 feet in one direction, provided that wood or other fuel is present in the new location. You instantaneously extinguish the flames within the cube. You double or halve the area of bright light and dim light cast by the flame, change its color, or both. The change lasts for 1 hour. You cause simple shapes, such as the vague form of a creature, an inanimate object, or a location, to appear within the flames and animate as you like. The shapes last for 1 hour. If you cast this spell multiple times, you can have up to three of its non-instantaneous effects active at a time, and you can dismiss such an effect as an action.",
      "url": "https://www.dnd-spells.com/spell/control-flames"
    },
    "animate dead": {
      "castingTime": "1 Minute",
      "duration": "Instantaneous",
      "range": "10 feet",
      "components": "Verbal, Somatic, Material (a drop of blood, a piece of flesh, and a pinch of bone dust)",
      "slotLevel": "3",
      "school": "Necromancy",
      "shortDescription": "Create an undead servant. Choose a pile of bones or a corpse of a medium or small humanoid within range. The target becomes a skeleton if you chose bones, or a zombie if you chose a corpse. On each of your turns, use a bonus action to mentally command any creature you made with this spell if the creature is within 60 feet of you. You decide what action the creature will take and where it will move during its next turn, or you can issue general commands. If no command is issued, the creature only defends itself against hostile creatures. The spells only lasts 24 hours, or you must cast again to reassert control. When cast at a spell slot of 4th level or higher, you animate or reassert control over two additional undead creatures for each slot above 3rd.",
      "longDescription": "This spell creates an undead servant. Choose a pile of bones or a corpse of a Medium or Small humanoid within range. Your spell imbues the target with a foul mimicry of life, raising it as an undead creature. The target becomes a skeleton if you chose bones or a zombie if you chose a corpse (the D. M. has the creatures game statistics). On each of your turns, you can use a bonus action to mentally command any creature you made with this spell if the creature is within 60 feet of you (if you contol multiple creatures, you can command any or all of them at the same time, issuing the same command to each one). You decide what action the creature will take and where it will move during its next turn, or you can issue a general command, such as to guard a particular chamber or corridor. If you issue no commands, the creature only defends itself against hostile creatures. Once given an order, the creature continues to follow it until its task is complete. The creature is under your control for 24 hours, after which it stops obeying any command youve given it. To maintain control of the creature for another 24 hours, you must cast this spell on the creature again before the current 24-hour period ends. This use of the spell reasserts your control over up to four creatures you have animated with this spell, rather than animating a new one. At Higher Levels: When you cast this spell using a spell slot of 4th level or higher, you animate or reassert control over two additional undead creatures for each slot level above 3rd. Each of the creatures must come from a different corpse or pile of bones.",
      "url": "https://www.dnd-spells.com/spell/animate-dead"
    },
    "green-flame blade": {
      "castingTime": "1 Action",
      "duration": "Instantaneous",
      "range": "5 feet",
      "components": "Verbal, Material (a weapon) ",
      "slotLevel": "cantrip",
      "school": "Evocation",
      "shortDescription": "Make a melee attack with a weapon against one creature within the spells range, otherwise it fails. On a hit, the target suffers the attacks normal effects and green fire leaps from the target to a different creature of your choice within 5 feet. The second creature takes fire damage equal to your spellcasting mod. When cast at level 5, melee attack deals an extra 1d8 fire damage, to the second creature an extra 1d8 fire damage plus your spellcasting mod. Both damage rolls increase by 1d8 at level 11 and 17th.",
      "longDescription": "As part of the action used to cast this spell, you must make a melee attack with a weapon against one creature within the spells range, otherwise the spell fails. On a hit, the target suffers the attacks normal effects, and green fire leaps from the target to a different creature of your choice that you can see within 5 feet of it. The second creature takes fire damage equal to your spellcasting ability modifier. This spells damage increases when you reach higher levels. At higher levels: At 5th level, the melee attack deals an extra 1d8 fire damage to the target, and the fire damage to the second creature increases to 1d8 + your spellcasting ability modifier. Both damage rolls increase by 1d8 at 11th level and 17th level.",
      "url": "https://www.dnd-spells.com/spell/green-flame-blade",
      "damage": {
        "type": "fire damage",
        "playerLevel": {
          1: "1d8",
          2: "1d8",
          3: "1d8",
          4: "1d8",
          5: "2d8",
          6: "2d8",
          7: "2d8",
          8: "2d8",
          9: "2d8",
          10: "2d8",
          11: "3d8",
          12: "3d8",
          13: "3d8",
          14: "3d8",
          15: "3d8",
          16: "3d8",
          17: "4d8",
          18: "4d8",
          19: "4d8",
          20: "4d8"
        }
      }
    },
    "gust": {
      "castingTime": "1 Action",
      "duration": "Instantaneous",
      "range": "30 feet",
      "components": "Verbal, Somatic",
      "slotLevel": "cantrip",
      "school": "Transmutation",
      "shortDescription": "Control the air to create one of the following effects at a point within range: One medium or smaller creature that you choose must succeed on a Strength save or be pushed up to 5 feet away from you. Create a small blast of air able to move one object that is neither held nor carried and that weighs no more than 5 pounds. The object is pushed up to 10 feet away. Create a harmless sensory affect using air, such as rustling some jimmies.",
      "longDescription": "You seize the air and compel it to create one of the following effects at a point you can see within range. One Medium or smaller creature that you choose must succeed on a Strength saving throw or be pushed up to 5 feet away from you. You create a small blast of air capable of moving one object that is neither held nor carried and that weighs no more than 5 pounds. The object is pushed up to 10 feet away from you. It isnt pushed with enough force to cause damage. You create a harmless sensory affect using air, such as causing leaves to rustle, wind to slam shutters shut, or your clothing to ripple in a breeze.",
      "url": "https://www.dnd-spells.com/spell/gust"
    },
    "skywrite": {
      "castingTime": "1 Action",
      "duration": "Concentration, up to 1 day",
      "range": "Sight",
      "components": "Verbal, Somatic",
      "slotLevel": "2",
      "school": "Transmutation Ritual",
      "shortDescription": "Needs concentration. You cause up to ten words to form in a part of the sky you can see. The words appear to be made of cloud and remain in place for the spells duration. The words dissipate when the spell ends. A strong wind can disperse the clouds and end the spell early.",
      "longDescription": "You cause up to ten words to form in a part of the sky you can see. The words appear to be made of cloud and remain in place for the spells duration. The words dissipate when the spell ends. A strong wind can disperse the clouds and end the spell early.",
      "url": "https://www.dnd-spells.com/spell/skywrite-ritual"
    },
    "create undead": {
      "castingTime": "1 Minute",
      "duration": "Instantaneous",
      "range": "10 feet",
      "components": "Verbal, Somatic, Material  (one clay pot filled with grave dirt, one clay pot filled with brackish water, and one 150 gold pieces black onyx stone for each corpse)",
      "slotLevel": "6",
      "school": "Necromancy",
      "shortDescription": "Can only be cast at night. Choose up to three corpses of medium or small humanoids within range. Each corpse becomes a ghoul under your control. As a bonus action on each of your turns, you can mentally command any creature you animted within 120 feet of you. You decide what action the creature will take and where it will move during its next turn, or you can issue a general command, if no command is issued the creature only defends itself against hostile creatures. The creature is under your control for 24 hours, after which it stops obeying any command you have given it. You must cast this spell on the creature again within the current 24 hour period, to maintain control. When cast using a spell slot of 7th level, you can animate or reassert control over four ghouls. At 8th, animate or reassert control over five ghouls or two ghasts or wights. At 9th level, animate or reassert control over six ghouls, three ghasts or wights, or two mummies.",
      "longDescription": "You can cast this spell only at night. Choose up to three corpses of Medium or Small humanoids within range. Each corpse becomes a ghoul under your control. (The D. M. has game statistics for these creatures.) As a bonus action on each of your turns, you can mentally command any creature you animated with this spell if the creature is within 120 feet of you (if you control multiple creatures, you can command any or all of them at the same time, issuing the same command to each one). You decide what action the creature will take and where it will move during its next turn, or you can issue a general command, such as to guard a particular chamber or corridor. If you issue no commands, the creature only defends itself against hostile creatures. Once given an order, the creature continues to follow it until its task is complete. The creature is under your control for 24 hours, after which it stops obeying any command you have given it. To maintain control of the creature for another 24 hours, you must cast this spell on the creature before the current 24-hour period ends. This use of the spell reasserts your control over up to three creatures you have animated with this spell, rather than animating new ones. At Higher Levels: When you cast this spell using a 7th-level spell slot, you can animate or reassert control over four ghouls. When you cast this spell using an 8th-level spell slot, you can animate or reassert control over five ghouls or two ghasts or wights. When you cast this spell using a 9th-level spell slot, you can animate or reassert control over six ghouls, three ghasts or wights, or two mummies.",
      "url": "https://www.dnd-spells.com/spell/create-undead"
    },
    "vicious mockery": {
      "castingTime": "1 Action",
      "duration": "Instantaneous",
      "range": "60 feet",
      "components": "Verbal",
      "slotLevel": "cantrip",
      "school": "Enchantment",
      "shortDescription": "Target a creature that can hear you within range, on a failed Wisdom save the creature takes 1d4 psychic damage and has disadvantage on the next attack roll it makes before the end of its next turn, and is visually emotionally hurt. Damage is increased by 1d4 at 5th level, 2d4 at level 11, and 3d4 at level 17 and your insults are saltier.",
      "longDescription": "You unleash a string of insults laced with subtle enchantments at a creature you can see within range. If the target can hear you (though it need not understand you), it must succeed on a Wisdom saving throw or take 1d4 psychic damage and have disadvantage on the next attack roll it makes before the end of its next turn. This spells damage increases by 1d4 when you reach 5th level (2d4), 11th level (3d4), and 17th level (4d4).",
      "url": "https://www.dnd-spells.com/spell/vicious-mockery",
      "damage": {
        "type": "psychic damage",
        "playerLevel": {
          1: "1d4",
          2: "1d4",
          3: "1d4",
          4: "1d4",
          5: "2d4",
          6: "2d4",
          7: "2d4",
          8: "2d4",
          9: "2d4",
          10: "2d4",
          11: "3d4",
          12: "3d4",
          13: "3d4",
          14: "3d4",
          15: "3d4",
          16: "3d4",
          17: "4d4",
          18: "4d4",
          19: "4d4",
          20: "4d4"
        }
      }
    },
    "wish": {
      "castingTime": "1 Action",
      "duration": "Instantaneous",
      "range": "Self",
      "components": "Verbal",
      "slotLevel": "9",
      "school": "Conjuration",
      "shortDescription": "One of the mightiest spells a mortal creature can cast, thus has no component requirement except verbal. This spell is used to duplicate any other spell of 8th level or lower or you may choose one of the following effects: Create one object up to 25,000 GP in value that isnt a magic item, the object can be no more than 300 feet in any dimension. Allow up to twenty creatures that you can see to regain all hit points, and end all effects on them described in the greater restoration spell. Grant up to ten creatures that you can see resistance to a damage type you choose. Grant up to ten creatures you can see, immunity to a single spell or other magical effect for 8 hours. You can undo a single recent event by forcing a reroll of any roll made within the last round, reshaping reality to the new outcome, you can force the reroll to have advantage or disadvantage and choose the reroll or the original. You can also state a wish, not listed, to the D. M. as precisely as possible and the D. M. will make a ruling to the effectiveness of the created wish. The stress of casting this spell to produce any effect other than duplicating another spell weakens you, each time you cast a spell until you finish a long rest take 1d10 necrotic damage per level of that spell. In addition your strength drops to 3 for 2d4 days. Finally there is a 33 percent chance that you are unable to cast wish ever again if you suffer this stress.",
      "longDescription": "Wish is the mightiest spell a mortal creature can cast. By simply speaking aloud, you can alter the very foundations of reality in accord with your desires. The basic use of this spell is to duplicate any other spell of 8th level or lower. You dont need to meet any requirements in that spell, including costly components. The spell simply takes effect. Alternatively, you can create one of the following effects of your choice. You create one object of up to 25,000 gold pieces in value that isnt a magic item. The object can be no more than 300 feet in any dimension, and it appears in an unoccupied space you can see on the ground. You allow up to twenty creatures that you can see to regain all hit points, and you end all effects on them described in the greater restoration spell. You grant up to ten creatures that you can see resistance to a damage type you choose. You grant up to ten creatures you can see immunity to a single spell or other magical effect for 8 hours. For instance, you could make yourself and all your companions immune to a lichs life drain attack. You undo a single recent event by forcing a reroll of any roll made within the last round (including your last turn). Reality reshapes itself to accommodate the new result. For example, a wish spell could undo an opponents successful save, a foes critical hit, or a friends failed save. You can force the reroll to be made with advantage or disadvantage, and you can choose whether to use the reroll or the original roll. You might be able to achieve something beyond the scope of the above examples. State your wish to the D. M. as precisely as possible. The D. M. has great latitude in ruling what occurs in such an instance; the greater the wish, the greater the likelihood that something goes wrong. This spell might simply fail, the effect you desire might only be partly achieved, or you might suffer some unforeseen consequence as a result of how you worded the wish. For example, wishing that a villain were dead might propel you forward in time to a period when that villain is no longer alive, effectively removing you from the game. Similarly, wishing for a legendary magic item or artifact might instantly transport you to the presence of the items current owner. The stress of casting this spell to produce any effect other than duplicating another spell weakens you. After enduring that stress, each time you cast a spell until you finish a long rest, you take 1d10 necrotic damage per level of that spell. This damage cant be reduced or prevented in any way. In addition, your Strength drops to 3, if it isnt 3 or lower already, for 2d4 days. For each of those days that you spend resting and doing nothing more than light activity, your remaining recovery time decreases by 2 days. Finally, there is a 33 percent chance that you are unable to cast wish ever again if you suffer this stress.",
      "url": "https://www.dnd-spells.com/spell/wish",
      "damage": "Complex Damage Progression. Please consult short or long descriptions"
    },
    "crusaders mantle": {
      "castingTime": "1 Action",
      "duration": "Concentration, up to 1 minute",
      "range": "Self",
      "components": "Verbal",
      "slotLevel": "3",
      "school": "Evocation",
      "shortDescription": "Needs concentration. Emboldened by holy power in a 30 foot radius, this aura moves and is centered on you. Deal 1d4 radiant damage when each nonhostile creature hits with a weapon attack.",
      "longDescription": "Holy power radiates from you in an aura with a 30-foot radius, awakening boldness in friendly creatures. Until the spell ends, the aura moves with you, centered on you. While in the aura, each nonhostile creature in the aura (including you) deals an extra 1d4 radiant damage when it hits with a weapon attack.",
      "url": "https://www.dnd-spells.com/spell/crusaders-mantle",
      "damage": {
        "type": "radiant damage",
        "levels": {
          1: 0,
          2: 0,
          3: "1d4",
          4: "1d4",
          5: "1d4",
          6: "1d4",
          7: "1d4",
          8: "1d4",
          9: "1d4"
        }
      }
    },
    "purify food and drink": {
      "castingTime": "1 Action",
      "duration": "Instantaneous",
      "range": "10 feet",
      "components": "Verbal, Somatic",
      "slotLevel": "1",
      "school": "Transmutation Ritual",
      "shortDescription": "All nonmagical food and drink is free of poison and disease",
      "longDescription": "All nonmagical food and drink within a 5-foot-radius sphere centered on a point of your choice within range is purified and rendered free of poison and disease.",
      "url": "https://www.dnd-spells.com/spell/purify-food-and-drink-ritual"
    },
    "jump": {
      "castingTime": "1 Action",
      "duration": "1 minute",
      "range": "Touch",
      "components": "Verbal, Somatic, Material (a grasshoppers hind leg)",
      "slotLevel": "1",
      "school": "Transmutation",
      "shortDescription": "Triple a creatures jump distance",
      "longDescription": "You touch a creature. The creatures jump distance is tripled until the spell ends.",
      "url": "https://www.dnd-spells.com/spell/jump"
    },
    "freedom of movement": {
      "castingTime": "1 Action",
      "duration": "1 hour",
      "range": "Touch",
      "components": "Verbal, Somatic, Material (a leather strap, bound around the arm or a similar appendage) ",
      "slotLevel": "4",
      "school": "Abjuration",
      "shortDescription": "Touch a willing creature, for the duration it is unaffected by difficult terrain, and spells or other magical effects that reduce speed, or cause paralysis or restraint have no effect. The target can use 5 feet of movement to automatically escape from nonmagical restraints. Finally, being underwater impose no penalties to the targets movement or attacks.",
      "longDescription": "You touch a willing creature. For the duration, the targets movement is unaffected by difficult terrain, and spells and other magical effects can neither reduce the targets speed nor cause the target to be paralyzed or restrained. The target can also spend 5 feet of movement to automatically escape from nonmagical restraints, such as manacles or a creature that has it grappled. Finally, being underwater imposes no penalties on the targets movement or attacks.",
      "url": "https://www.dnd-spells.com/spell/freedom-of-movement"
    },
    "elemental weapon": {
      "castingTime": "1 Action",
      "duration": "Concentration, up to 1 hour",
      "range": "Touch",
      "components": "Verbal, Somatic",
      "slotLevel": "3",
      "school": "Transmutation",
      "shortDescription": "Needs concentration. Touch a nonmagical weapon, and choose one of the following damage types: acid, cold, fire, lightning, or thunder. For the duration, the weapon has +1 bonus to attack rolls, and deals 1d4 chosen damage type when it hits. When cast using a spell slot of 5th or 6th level the bonus increases to +2 and the damage increases to 2d4. At 7th or higher, bonus is +3 and damage is 3d4.",
      "longDescription": "A nonmagical weapon you touch becomes a magic weapon. Choose one of the following damage types: acid, cold, fire, lightning, or thunder. For the duration, the weapon has a +1 bonus to attack rolls and deals an extra 1d4 damage of the chosen type when it hits. At Higher Levels: When you cast this spell using a spell slot of 5th or 6th level, the bonus to attack rolls increases to +2 and the extra damage increases to 2d4. When you use a spell slot of 7th level or higher, the bonus increases to +3 and the extra damage increases to 3d4.",
      "url": "https://www.dnd-spells.com/spell/elemental-weapon"
    },
    "power word heal": {
      "castingTime": "1 Action",
      "duration": "Instantaneous",
      "range": "Touch",
      "components": "Verbal, Somatic",
      "slotLevel": "9",
      "school": "Evocation",
      "shortDescription": "A creature regains all health and ends charmed, frightened, paralyzed, or stunned conditions. Prone creatures can use their reaction to stand up.",
      "longDescription": "A wave of healing energy washes over the creature you touch. The target regains all its hit points. If the creature is charmed, frightened, paralyzed, or stunned, the condition ends. If the creature is prone, it can use its reaction to stand up. This spell has no effect on undead or constructs.",
      "url": "https://www.dnd-spells.com/spell/power-word-heal"
    },
    "levitate": {
      "castingTime": "1 Action",
      "duration": "Concentration, up to 10 minutes",
      "range": "60 feet",
      "components": "Verbal, Somatic, Material (either a small leather loop or a piece of golden wire bent into a cup shape with a long shank on one end)",
      "slotLevel": "2",
      "school": "Transmutation",
      "shortDescription": "Needs concentration. One creature or object you can see within range rises up to 20 feet and remains suspended there for the duration. A target can weigh no more than 500 pounds. An unwilling creature must succeed a Constitution save or be levitated. On your next turn you can use your action to  change the altitude by up to 20 feet in either direction, if you are the target you can use your movement.",
      "longDescription": "One creature or object of your choice that you can see within range rises vertically, up to 20 feet, and remains suspended there for the duration. The spell can levitate a target that weighs up to 500 pounds. An unwilling creature that succeeds on a Constitution saving throw is unaffected. The target can move only by pushing or pulling against a fixed object or surface within reach (such as a wall or a ceiling), which allows it to move as if it were climbing. You can change the targets altitude by up to 20 feet in either direction on your turn. If you are the target, you can move up or down as part of your move. Otherwise, you can use your action to move the target, which must remain within the spells range. When the spell ends, the target floats gently to the ground if it is still aloft.",
      "url": "https://www.dnd-spells.com/spell/levitate"
    },
    "polymorph": {
      "castingTime": "1 Action",
      "duration": "Concentration, up to 1 hour",
      "range": "60 feet",
      "components": "Verbal, Somatic, Material (a caterpillar cocoon)",
      "slotLevel": "4",
      "school": "Transmutation",
      "shortDescription": "Needs concentration. Transform a creature you can see into a new form. An unwilling creature must make a Wisdom save to avoid the effect. Does not effect shapechangers. The new form can be any beast whose challenge rating is equal to or less than the targets. The targets game stats are replaced by the new forms stats, yet retains its alignment and personality. It hit points assume the new forms. When it reverts to its normal form, its hit points return to that of its original form. If it reverts as a result of dropping to 0 hit points, any excess damage carries over to its normal form. The creature cant use an action that requires hands or speech.",
      "longDescription": "This spell transforms a creature that you can see within range into a new form. An unwilling creature must make a Wsidom saving throw to avoid the effect. A shapechanger automatically succeeds on this saving throw. The transformation lasts for the duration, or until the target drops to 0 hit points or dies. The new form can be any beast whose challenge rating is equal to or less than the targets (or the targets level, if it doesnt have a challenge rating). The targets game statistics, including mental ability scores, are replaced by the statistics of the chosen beast. It retains its alignment and personality. The target assumes the hit points of its new form. When it reverts to its normal form, the creature returns to the number of hit points it had before it transformed. If it reverts as a result of dropping to 0 hit points, any excess damage carries over to its normal form. As long as the excess damage doesnt reduce the creatures normal form to 0 hit points, it isnt knocked unconscious. The creature is limited in the actions it can perform by the nature of its new form, and it cant speak, cast spells, or take any other action that requires hands or speech. The targets gear melds into the new form. The creature cant activate, use, wield, or otherwise benefit from any of its equipment. This spell cant affect a target that has 0 hit points.",
      "url": "https://www.dnd-spells.com/spell/polymorph"
    },
    "fire shield": {
      "castingTime": "1 Action",
      "duration": "10 minutes",
      "range": "Self",
      "components": "Verbal, Somatic, Material (a bit of phosphorus or a firefly)",
      "slotLevel": "4",
      "school": "Evocation",
      "shortDescription": "Conjure a firey shield that sheds bright light in a 10 foot radius, and dim in an additional 10 feet. The shield provides cold damage resistance, whenever you are hit by a melee attack within 5 feet, the attacker takes 2d8 fire damage. This can also be flavored to be a cold shield, respectively.",
      "longDescription": "Thin and wispy flames wreathe your body for the duration, shedding bright light in a 10-foot radius and dim light for an additional 10 feet. You can end the spell early by using an action to dismiss it. The flames provide you with a warm shield or a chill shield, as you choose. The warm shield grants you resistance to cold damage, and the chill shield grants you resistance to fire damage. In addition, whenever a creature within 5 feet of you hits you with a melee attack, the shield erupts with flame. The attacker takes 2d8 fire damage from a warm shield, or 2d8 cold damage from a cold shield.",
      "url": "https://www.dnd-spells.com/spell/fire-shield",
      "damage": {
        "type": "fire or cold damage",
        "levels": {
          1: 0,
          2: 0,
          3: 0,
          4: "2d8",
          5: "2d8",
          6: "2d8",
          7: "2d8",
          8: "2d8",
          9: "2d8"
        }
      }
    },
    "darkness": {
      "castingTime": "1 Action",
      "duration": "Concentration, up to 10 minutes",
      "range": "60 feet",
      "components": "Verbal, Material (bat fur and a drop of pitch or piece of coal)",
      "slotLevel": "2",
      "school": "Evocation",
      "shortDescription": "Needs concentration. Darkness spreads from a point you choose to fill a 15 foot radius sphere, and spreads around corners. Darkvision and nonmagical light cant permeate. This may be cast on an object, and emanates and moves with it.",
      "longDescription": "Magical darkness spreads from a point you choose within range to fill a 15-foot-radius sphere for the duration. The darkness spreads around corners. A creature with darkvision cant see through this darkness, and nonmagical light cant illuminate it. If the point you choose is on an object you are holding or one that isnt being worn or carried, the darkness emanates from the object and moves with it. Completely covering the source of the darkness with an opaque object, such as a bowl or a helm, blocks the darkness. If any of this spells area overlaps with an area of light created by a spell of 2nd level or lower, the spell that created the light is dispelled.",
      "url": "https://www.dnd-spells.com/spell/darkness"
    },
    "beast sense": {
      "castingTime": "1 Action",
      "duration": "Concentration, up to 1 hour",
      "range": "Touch",
      "components": "Somatic",
      "slotLevel": "2",
      "school": "Divination Ritual",
      "shortDescription": "Needs concentration. Touch a willing beast and you can use your action to see through its eyes and hear what it hears until you use your action to return to your normal senses. You gain the benefits of any special senses from the creature, though your character is blind and deaf while controlling the beasts senses.",
      "longDescription": "You touch a willing beast. For the duration of the spell, you can use your action to see through the beasts eyes and hear what it hears, and continue to do so until you use your action to return to your normal senses. While perceiving through the beasts senses, you gain the benefits of any special senses possessed by that creature, though you are blinded and deafened to your own surroundings.",
      "url": "https://www.dnd-spells.com/spell/beast-sense-ritual"
    },
    "sword burst": {
      "castingTime": "1 Action",
      "duration": "Instantaneous",
      "range": "5 feet",
      "components": "Verbal",
      "slotLevel": "cantrip",
      "school": "Conjuration",
      "shortDescription": "You create a momentary circle of spectral blades that sweep around you. Each creature within range, other than you, must succeed on a Dexterity saving throw or take 1d6 force damage. At higher levels: This spells damage increases by 1d6 when you reach 5th level (2d6), 11th level (3d6), and 17th level (4d6).",
      "longDescription": "You create a momentary circle of spectral blades that sweep around you. Each creature within range, other than you, must succeed on a Dexterity saving throw or take 1d6 force damage. At higher levels: This spells damage increases by 1d6 when you reach 5th level (2d6), 11th level (3d6), and 17th level (4d6).",
      "url": "https://www.dnd-spells.com/spell/sword-burst",
      "damage": {
        "type": "force damage",
        "playerLevel": {
          1: "1d6",
          2: "1d6",
          3: "1d6",
          4: "1d6",
          5: "2d6",
          6: "2d6",
          7: "2d6",
          8: "2d6",
          9: "2d6",
          10: "2d6",
          11: "3d6",
          12: "3d6",
          13: "3d6",
          14: "3d6",
          15: "3d6",
          16: "3d6",
          17: "4d6",
          18: "4d6",
          19: "4d6",
          20: "4d6"
        }
      }
    },
    "dominate monster": {
      "castingTime": "1 Action",
      "duration": "Concentration, up to 1 hour",
      "range": "60 feet",
      "components": "Verbal, Somatic",
      "slotLevel": "8",
      "school": "Enchantment",
      "shortDescription": "Needs concentration. Beguile a creature within range. It must succeed on a Wisdom save or be charmed for the duration. If you or creatures that are friendly to you are fighting the target, it has advantage on the save. While charmed, you have a telepathic link with the creature as long as you are on the same plane of existence. You can use this link to issue commands, they can be simple or general course of action, as a free action. During this time you can cause the creature to use a reaction, which uses your own as well. Each time the target takes damage, it makes a new Wisdom save. At 9th level the duration is concentration, up to 8 hours.",
      "longDescription": "You attempt to beguile a creature that you can see within range. It must succeed on a Wisdom saving throw or be charmed by you for the duration. If you or creatures that are friendly to you are fighting it, it has advantage on the saving throw. While the creature is charmed, you have a telepathic link with it as long as the two of you are on the same plane of existence. You can use this telepathic link to issue commands to the creature while you are conscious (no action required), which it does its best to obey. You can specify a simple and general course of action, such as Attack that creature, Run over there, or Fetch that object. If the creature completes the order and doesnt receive further direction from you, it defends and preserves itself to the best of its ability. You can use your action to take total and precise control of the target. Until the end of your next turn, the creature takes only the actions you choose, and doesnt do anything that you dont allow it to do. During this time, you can also cause the creature to use a reaction, but this requires you to use your own reaction as well. Each time the target takes damage, it makes a new Wisdom saving throw against the spell. If the saving throw succeeds, the spell ends. AtHigherLevels. When you cast this spell with a 9th-level spell slot, the duration is concentration, up to 8 hours.",
      "url": "https://www.dnd-spells.com/spell/dominate-monster"
    },
    "thunderwave": {
      "castingTime": "1 Action",
      "duration": "Instantaneous",
      "range": "Self (15-foot cube)",
      "components": "Verbal, Somatic",
      "slotLevel": "1",
      "school": "Evocation",
      "shortDescription": "Each creature in a 15 foot cube from you must make a Constitution save, on a failed save a creature takes 2d8 thunder damage and is pushed 10 feet away from you. On a success, the creature takes half as much, and isnt pushed. When cast using a spell slot of 2nd level or higher the damage increases 1d8 per level above 1st.",
      "longDescription": "A wave of thunderous force sweeps out from you. Each creature in a 15-foot cube originating from you must make a Constitution saving throw. On a failed save, a creature takes 2d8 thunder damage and is pushed 10 feet away from you. On a successful save, the creature takes half as much damage and isnt pushed. In addition, unsecured objects that are completely within the area of effect are automatically pushed 10 feet away from you by the spells effect, and the spell emits a thunderous boom audible out to 300 feet. At Higher Levels: When you cast this spell using a spell slot of 2nd level or higher, the damage increases by 1d8 for each slot level above 1st.",
      "url": "https://www.dnd-spells.com/spell/thunderwave",
      "damage": {
        "type": "thunder damage",
        "levels": {
          1: "2d8",
          2: "3d8",
          3: "4d8",
          4: "5d8",
          5: "6d8",
          6: "7d8",
          7: "8d8",
          8: "9d8",
          9: "10d8"
        }
      }
    },
    "banishing smite": {
      "castingTime": "1 Bonus Action",
      "duration": "Concentration, up to 1 minute",
      "range": "Self",
      "components": "Verbal",
      "slotLevel": "5",
      "school": "Abjuration",
      "shortDescription": "Needs concentration. The next time you hit a creature with a weapon attack deal an extra 5d10 force damage to the target. If this attack reduces the target to 50 hit points or fewer, banish it. If the creature is native to the plane youre on, vanishing to a harmless demiplane, and is incapacitated until the spell ends.",
      "longDescription": "The next time you hit a creature with a weapon attack before this spell ends, your weapon crackles with force, and the attack deals an extra 5d10 force damage to the target. Additionally, if this attack reduces the target to 50 hit points or fewer, you banish it. If the target is native to a different plane of existence than the one youre on, the target disappears, returning to its home plane. If the target is native to the plane youre on, the creature vanishes into a harmless demiplane. While there, the target is incapacitated. It remains there until the spell ends, at which point the target reappears in the space it left or in the nearest unoccupied space if that space is occupied.",
      "url": "https://www.dnd-spells.com/spell/banishing-smite",
      "damage": {
        "type": "force damage",
        "levels": {
          1: 0,
          2: 0,
          3: 0,
          4: 0,
          5: "5d10",
          6: "5d10",
          7: "5d10",
          8: "5d10",
          9: "5d10"
        }
      }
    },
    "tashas hideous laughter": {
      "castingTime": "1 Action",
      "duration": "Concentration, up to 1 minute",
      "range": "30 feet",
      "components": "Verbal, Somatic, Material (tiny tarts and a feather that is waved in the air)",
      "slotLevel": "1",
      "school": "Enchantment",
      "shortDescription": "Needs concentration. A creature you can see within range falls into a hilarious fit of laughter on a failed Wisdom save and be knocked prone for the duration. At the end of its turn, and each time it takes damage, target must make another Wisdom save. It has advantage if it is triggered by damage.",
      "longDescription": "A creature of your choice that you can see within range perceives everything as hilariously funny and falls into fits of laughter if this spell affects it. The target must succeed on a Wisdom saving throw or fall prone, becoming incapacitated and unable to stand up for the duration. A creature with an Intelligence score of 4 or less isnt affected. At the end of each of its turns, and each time it takes damage, the target can make another Wisdom saving throw. The target has advantage on the saving throw if its triggered by damage. On a success, the spell ends.",
      "url": "https://www.dnd-spells.com/spell/tashas-hideous-laughter"
    },
    "blur": {
      "castingTime": "1 Action",
      "duration": "Concentration, up to 1 minute",
      "range": "Self",
      "components": "Verbal",
      "slotLevel": "2",
      "school": "Illusion",
      "shortDescription": "Needs concentration. For the duration, creatures have disadvantage on attack rolls against you, if the attacker doesnt rely on sight, such as blindsight or truesight, it is unaffected.",
      "longDescription": "Your body becomes blurred, shifting and wavering to all who can see you. For the duration, any creature has disadvantage on attack rolls against you. An attacker is immune to this effect if it doesnt rely on sight, as with blindsight, or can see through illusions, as with truesight.",
      "url": "https://www.dnd-spells.com/spell/blur"
    },
    "water breathing": {
      "castingTime": "1 Action",
      "duration": "24 hours",
      "range": "30 feet",
      "components": "Verbal, Somatic, Material (a short reed or piece of straw)",
      "slotLevel": "3",
      "school": "Transmutation Ritual",
      "shortDescription": "Up to ten willing creatures can breathe underwater",
      "longDescription": "This spell grants up to ten willing creatures you can see within range the ability to breathe underwater until the spell ends. Affected creatures also retain their normal mode of respiration.",
      "url": "https://www.dnd-spells.com/spell/water-breathing-ritual"
    },
    "blade ward": {
      "castingTime": "1 Action",
      "duration": "1 round",
      "range": "Self",
      "components": "Verbal, Somatic",
      "slotLevel": "cantrip",
      "school": "Abjuration",
      "shortDescription": "Until the end of your next turn, you have resistance against bludgeoning, piercing, and slashing damage from weapon attacks.",
      "longDescription": "You extend your hand and trace a sigil of warding in the air. Until the end of your next turn, you have resistance against bludgeoning, piercing, and slashing damage dealt by weapon attacks.",
      "url": "https://www.dnd-spells.com/spell/blade-ward"
    },
    "raise dead": {
      "castingTime": "1 Hour",
      "duration": "Instantaneous",
      "range": "Touch",
      "components": "Verbal, Somatic, Material (a diamond worth at least 500 gold pieces, which the spell consumes)",
      "slotLevel": "5",
      "school": "Necromancy",
      "shortDescription": "Return a dead creature to life, provided it has not been dead longer than 10 days, the creature returns to life with 1 hit point. This spell neutralizes any poison and cures nonmagical diseases that affected the creature at time of death, it does not affect magical diseases, curses or similar effects. This spell can not be used to return an undead creature to life, nor have the ability to restore missing body parts. The target takes a -4 penalty to all attack rolls, saves, and ability checks, upon finishing a long rest, the penalty is reduced by 1.",
      "longDescription": "You return a dead creature you touch to life, provided that it has been dead no longer than 10 days. If the creatures soul is both willing and at liberty to rejoin the body, the creature returns to life with 1 hit point. This spell also neutralizes any poisons and cures nonmagical diseases that affected the creature at the time it died. This spell doesnt, however, remove magical diseases, curses, or similar effects; if these arent first removed prior to casting the spell, they take effect when the creature returns to life. The spell cant return an undead creature to life. This spell closes all mortal wounds, but it doesnt restore missing body parts. If the creature is lacking body parts or organs integral for its survival, its head, for instance, the spell automatically fails. Coming back from the dead is an ordeal. The target takes a -4 penalty to all attack rolls, saving throws, and ability checks. Every time the target finishes a long rest, the penalty is reduced by 1 until it disappears.",
      "url": "https://www.dnd-spells.com/spell/raise-dead"
    },
    "wall of sand": {
      "castingTime": "1 Action",
      "duration": "Concentration, up to 10 minutes",
      "range": "90 feet",
      "components": "Verbal, Somatic, Material (a handful of sand) ",
      "slotLevel": "3",
      "school": "Evocation",
      "shortDescription": "Needs concentration. Conjure a wall of sand that can be 30 feet long, 10 feet high, and 10 feet thick, and vanishes when the spell ends. It blocks line of sight but not movement, while in the walls space any creature is blinded and must spend 3 feet of movement for every 1 foot it moves there.",
      "longDescription": "You conjure up a wall of swirling sand on the ground at a point you can see within range. You can make the wall up to 30 feet long, 10 feet high, and 10 feet thick, and it vanishes when the spell ends. It blocks line of sight but not movement. A creature is blinded while in the walls space and must spend 3 feet of movement for every 1 foot it moves there.",
      "url": "https://www.dnd-spells.com/spell/wall-of-sand"
    },
    "web": {
      "castingTime": "1 Action",
      "duration": "Concentration, up to 1 hour",
      "range": "60 feet",
      "components": "Verbal, Somatic, Material (a bit of spiderweb)",
      "slotLevel": "2",
      "school": "Conjuration",
      "shortDescription": "Needs concentration. Conjure a mass of thick sticky webbing at a point within range. The webs fill a 20 foot cube, are difficult terrain and lightly obscure the area. Each creature that starts its turn in the webs or that enters them during its turn, must make a Dexterity save or be restrained. A creature restrained by the webs can use its action to make a Strength check against your spell save DC to break free. The webs are flammable, any 5 foot cube of web exposed to fire burns away in 1 round dealing 2d4 fire damage to any creature that starts its turn in the fire.",
      "longDescription": "You conjure a mass of thick, sticky webbing at a point of your choice within range. The webs fill a 20-foot cube from that point for the duration. The webs are difficult terrain and lightly obscure their area. If the webs arent anchored between two solid masses (such as walls or trees) or layered across a floor, wall, or ceiling, the conjured web collapses on itself, and the spell ends at the start of your next turn. Webs layered over a flat surface have a depth of 5 feet. Each creature that starts its turn in the webs or that enters them during its turn must make a Dexterity saving throw. On a failed save, the creature is restrained as long as it remains in the webs or until it breaks free. A creature restrained by the webs can use its action to make a Strength check against your spell save DC. If it succeeds, it is no longer restrained. The webs are flammable. Any 5-foot cube of webs exposed to fire burns away in 1 round, dealing 2d4 fire damage to any creature that starts its turn in the fire.",
      "url": "https://www.dnd-spells.com/spell/web",
      "damage": "Complex Damage Progression. Please consult short or long descriptions"
    },
    "wind walk": {
      "castingTime": "1 Minute",
      "duration": "8 hours",
      "range": "30 feet",
      "components": "Verbal, Somatic, Material (fire and holy water)",
      "slotLevel": "6",
      "school": "Transmutation",
      "shortDescription": "You and up to ten willing creatures assume a gaseous form. While in this cloud form, a creature has a flying speed of 300 feet and has resistance to damage from nonmagical weapons. The only actions a creature can take in this form are the dash action or to revert to its normal form. Reverting takes 1 minute and a creature is incapacitated and cant move, for the duration a creature can revert back to cloud form, taking 1 minute to do so as well. When the spell ends, the creature descends until it lands, if it takes more than a minute, it falls the remaining distance.",
      "longDescription": "You and up to ten willing creatures you can see within range assume a gaseous form for the duration, appearing as wisps of cloud. While in this cloud form, a creature has a flying speed of 300 feet and has resistance to damage from nonmagical weapons. The only actions a creature can take in this form are the Dash action or to revert to its normal form. Reverting takes 1 minute, during which time a creature is incapacitated and cant move. Until the spell ends, a creature can revert to cloud form, which also requires the 1-minute transformation. If a creature is in cloud form and flying when the effect ends, the creature descends 60 feet per round for 1 minute until it lands, which it does safely. If it cant land after 1 minute, the creature falls the remaining distance.",
      "url": "https://www.dnd-spells.com/spell/wind-walk"
    },
    "confusion": {
      "castingTime": "1 Action",
      "duration": "Concentration, up to 1 minute",
      "range": "90 feet",
      "components": "Verbal, Somatic, Material  (three nut shells)",
      "slotLevel": "4",
      "school": "Enchantment",
      "shortDescription": "Needs concentration. Each creature in a 10 foot radius sphere centered on a point you choose, within range must make a Wisdom save or be confused. An affected target cant take reactions, and must roll a d10 at the start of each of its turns to determine its behavior that turn. For a 1: the creature uses all its movement, as its action that turn, to move in a random direction, roll a d8 to determine and assign a cardinal direction to each face. For 2 thru 6: the creature dances in confusion for its turn. For 7 or 8: the creature uses its action to make a melee against a random creature within its reach, if no creature is within range, it takes no action this turn. For 9 or 10: The creature can act and move normally. At the end of each of its turns, the affected creature makes a Wisdom save to break free. When cast using a spell slot of 5th level or higher the sphere increases by 5 feet for each slot above 4th.",
      "longDescription": "This spell assaults and twists creatures minds, spawning delusions and provoking uncontrolled action. Each creature in a 10-foot-radius sphere centered on a point you choose within range must succeed on a Wisdom saving throw when you cast this spell or be affected by it. An affected target cant take reactions and must roll a d10 at the start of each of its turns to determine its behavior for that turn. The followiing is a list of the behaviors corresponsding to the dice rolls: 1: The creature uses all its movement to move in a random direction. To determine the direction, roll a d8 and assign a direction to each die face. The creature doesnt take an action this turn. 2 through 6: The creature doesnt move or take actions this turn. 7 or 8: The creature uses its action to make a melee attack against a randomly determined creature within its reach. If there is no creature within its reach, the creature does nothing this turn. 9 or 10: The creature can act and move normally. At the end of each of its turns, an affected target can make a Wisdom saving throw. If it succeeds, this effect ends for that target. At Higher Levels: When you cast this spell using a spell slot of 5th level or higher, the radius of the sphere increases by 5 feet for each slot level above 4th.",
      "url": "https://www.dnd-spells.com/spell/confusion"
    },
    "create food and water": {
      "castingTime": "1 Action",
      "duration": "Instantaneous",
      "range": "30 feet",
      "components": "Verbal, Somatic",
      "slotLevel": "3",
      "school": "Conjuration",
      "shortDescription": "You create 45 pounds of food and 30 gallons of water on the ground or in containers within range, enough to sustain up to fifteen humanoids or five steeds for 24 hours. The food is bland but nourishing, and spoils if uneaten after 24 hours. The water is clean and doesnt go bad.",
      "longDescription": "You create 45 pounds of food and 30 gallons of water on the ground or in containers within range, enough to sustain up to fifteen humanoids or five steeds for 24 hours. The food is bland but nourishing, and spoils if uneaten after 24 hours. The water is clean and doesnt go bad.",
      "url": "https://www.dnd-spells.com/spell/create-food-and-water"
    },
    "scrying": {
      "castingTime": "10 Minutes",
      "duration": "Concentration, up to 10 minutes",
      "range": "Self",
      "components": "Verbal, Somatic, Material (a focus worth at least 1,000 gold pieces, such as a crystal ball, a silver mirror, or a font filled with holy water)",
      "slotLevel": "5",
      "school": "Divination",
      "shortDescription": "You can see and hear a target if it fails a wisdom save",
      "longDescription": "You can see and hear a particular creature you choose that is on the same plane of existence as you. The target must make a Wisdom saving throw, which is modified by how well you know the target and the sort of physical connection you have to it. If a target knows youre casting this spell, it can fail the saving throw voluntarily if it wants to be observed. On a successful save, the target isnt affected, and you cant use this spell against it again for 24 hours. On a failed save, the spell creates an invisible sensor within 10 feet of the target. You can see and hear through the sensor as if you were there. The sensor moves with the target, remaining within 10 feet of it for the duration. A creature that can see invisible objects sees the sensor as a luminous orb about the size of your fist. Instead of targeting a creature, you can choose a location you have seen before as the target of this spell. When you do, the sensor appears at that location and doesnt move. See the Alexa app or page 273 of the players handbook for a table of save modifiers.",
      "url": "https://www.dnd-spells.com/spell/scrying"
    },
    "wind wall": {
      "castingTime": "1 Action",
      "duration": "Concentration, up to 1 minute",
      "range": "120 feet",
      "components": "Verbal, Somatic, Material (a tiny fan and a feather of exotic origin)",
      "slotLevel": "3",
      "school": "Evocation",
      "shortDescription": "Conjure a wall of strong wind up to 50 feet long, 15 feet high, and 1 foot thick. When the wall appears, each creature within its area must make a Strength save or take 3d8 bludgeoning damage, or half as much on a success.",
      "longDescription": "A wall of strong wind rises from the ground at a point you choose within range. You can make the wall up to 50 feet long, 15 feet high, and 1 foot thick. You can shape the wall in any way you choose so long as it makes one continuous path along the ground. The wall lasts for the duration. When the wall appears, each creature within its area must make a Strength saving throw. A creature takes 3d8 bludgeoning damage on a failed save, or half as much damage on a successful one. The strong wind keeps fog, smoke, and other gases at bay. Small or smaller flying creatures or objects cant pass through the wall. Loose, lightweight materials brought into the wall fly upward. Arrows, bolts, and other ordinary projectiles launched at targets behind the wall are deflected upward and automatically miss. (Boulders hurled by giants or siege engines, and similar projectiles, are unaffected.) Creatures in gaseous form cant pass through it.",
      "url": "https://www.dnd-spells.com/spell/wind-wall",
      "damage": {
        "type": "bludgeoning damage",
        "levels": {
          1: 0,
          2: 0,
          3: "3d8",
          4: "3d8",
          5: "3d8",
          6: "3d8",
          7: "3d8",
          8: "3d8",
          9: "3d8"
        }
      }
    },
    "stone shape": {
      "castingTime": "1 Action",
      "duration": "Instantaneous",
      "range": "Touch",
      "components": "Verbal, Somatic, Material soft clay, which must be worked into roughly the desired shape of the stone object)",
      "slotLevel": "4",
      "school": "Transmutation",
      "shortDescription": "You touch a stone object of medium or smaller, or a section of stone no more than 5 feet, and form it into any shape that suits your purpose.",
      "longDescription": "You touch a stone object of Medium size or smaller or a section of stone no more than 5 feet in any dimension and form it into any shape that suits your purpose. So, for example, you could shape a large rock into a weapon, idol, or coffer, or make a small passage through a wall, as long as the wall is less than 5 feet thick. You could also shape a stone door or its frame to seal the door shut. The object you create can have up to two hinges and a latch, but finer mechanical detail isnt possible.",
      "url": "https://www.dnd-spells.com/spell/stone-shape"
    },
    "mordenkainens magnificent mansion": {
      "castingTime": "1 Minute",
      "duration": "24 hours",
      "range": "300 feet",
      "components": "Verbal, Somatic, Material (a miniature portal carved from ivory, a small piece of polished marble, and a tiny silver spoon, each item worth at least 5 gold pieces)",
      "slotLevel": "7",
      "school": "Conjuration",
      "shortDescription": "Conjure a extradimensional dwelling, choose where its entrance is located, which shimmers faintly and is 5 feet wide, 10 feet tall. You and any creature you designate can enter as long as the portal remains open. You can create any floor plan as you like, but the space cant exceed 50 cubes, each cube being 10 feet on each side. The mansion is fully furnished, and decorated as you like, it contains food to serve a nine-course banquet for up to 100 people. Includes a staff of 100 near-transparent servants, their visual appearance and attire is chosen by you, they can not attack or take action that would directly harm another creature.",
      "longDescription": "You conjure an extradimensional dwelling in range that lasts for the duration. You choose where its one entrance is located. The entrance shimmers faintly and is 5 feet wide and 10 feet tall. You and any creature you designate when you cast the spell can enter the extradimensional dwelling as long as the portal remains open. You can open or close the portal if you are within 30 feet of it. While closed, the portal is invisible. Beyond the portal is a magnificent foyer with numerous chambers beyond. The atmosphere is clean, fresh, and warm. You can create any floor plan you like, but the space cant exceed 50 cubes, each cube being 10 feet on each side. The place is furnished and decorated as you choose. It contains sufficient food to serve a nine- course banquet for up to 100 people. A staff of 100 near-transparent servants attends all who enter. You the visual appearance of these servants and their attire. They are completely obedient to your orders. Each servant can perform any task a normal human servant could perform, but they cant attack or take any action that would directly harm another creature. Thus the servants can fetch things, clean, mend, fold clothes, light fires, serve food, pour wine, and so on. The servants can go anywhere in the mansion but cant leave it. Furnishings and other objects created by this spell dissipate into smoke if removed from the mansion. When the spell ends, any creatures inside the extradimensional space are expelled into the open spaces nearest to the entrance.",
      "url": "https://www.dnd-spells.com/spell/mordenkainens-magnificent-mansion"
    },
    "thunderous smite": {
      "castingTime": "1 Bonus Action",
      "duration": "Concentration, up to 1 minute",
      "range": "Self",
      "components": "Verbal",
      "slotLevel": "1",
      "school": "Evocation",
      "shortDescription": "Your first attack deals an extra 2d6 thunder damage, and a creature is pushed 10 ft away and knocked prone on a strength fail",
      "longDescription": "The first time you hit with a melee weapon attack during this spells duration, your weapon rings with thunder that is audible within 300 feet of you, and the attack deals an extra 2d6 thunder damage to the target. Additionally, if the target is a creature, it must succeed on a Strength saving throw or be pushed 10 feet away from you and knocked prone.",
      "url": "https://www.dnd-spells.com/spell/thunderous-smite",
      "damage": {
        "type": "thunder damage",
        "levels": {
          1: "2d6",
          2: "2d6",
          3: "2d6",
          4: "2d6",
          5: "2d6",
          6: "2d6",
          7: "2d6",
          8: "2d6",
          9: "2d6"
        }
      }
    },
    "sending": {
      "castingTime": "1 Action",
      "duration": "1 round",
      "range": "Unlimited",
      "components": "Verbal, Somatic, Material (a short piece of fine copper wire)",
      "slotLevel": "3",
      "school": "Evocation",
      "shortDescription": "Send a 25 word message to a familiar creature across any distance or plane",
      "longDescription": "You send a short message of twenty-five words or less to a creature with which you are familiar. The creature hears the message in its mind, recognizes you as the sender if it knows you, and can answer in a like manner immediately. The spell enables creatures with Intelligence scores of at least 1 to understand the meaning of your message. You can send the message across any distance and even to other planes of existence, but if the target is on a different plane than you, there is a 5 percent chance that the message doesnt arrive.",
      "url": "https://www.dnd-spells.com/spell/sending"
    },
    "legend lore": {
      "castingTime": "10 Minutes",
      "duration": "Instantaneous",
      "range": "Self",
      "components": "Verbal, Somatic, Material (incense worth at least 250 gold pieces, which the spell consumes, and four ivory strips worth at least 50 gold pieces each)",
      "slotLevel": "5",
      "school": "Divination",
      "shortDescription": "Name or describe a person, place, or object. The spell brings a brief summary of the significant lore about what you named. The more information you have about the thing, the more precise and detailed the information you receive is. If it is not of legendary importance, you gain no information.",
      "longDescription": "Name or describe a person, place, or object. The spell brings to your mind a brief summary of the significant lore about the thing you named. The lore might consist of current tales, forgotten stories, or even secret lore that has never been widely known. If the thing you named isnt of legendary importance, you gain no information. The more information you already have about the thing, the more precise and detailed the information you receive is. The information you learn is accurate but might be couched in figurative language. For example, if you have a mysterious magic axe on hand, the spell might yield this information: Woe to the evildoer whose hand touches the axe, for even the haft slices the hand of the evil ones. Only a true Child of Stone, lover and beloved of Moradin, may awaken the true powers of the axe, and only with the sacred word Rudnogg on the lips.",
      "url": "https://www.dnd-spells.com/spell/legend-lore"
    },
    "maximilians earthen grasp": {
      "castingTime": "1 Action",
      "duration": "Concentration, up to 1 minute",
      "range": "30 feet",
      "components": "Verbal, Somatic, Material (a miniature hand sculpted from clay)",
      "slotLevel": "2",
      "school": "Transmutation",
      "shortDescription": "Needs concentration. Choose a 5 foot square of unoccupied space on the ground, a medium hand made of compact soil rises and reaches for one creature within 5 feet of it. The target must make a Strength save or take 2d6 bludgeoning damage and is restrained for the duration. As an action, you can cause the hand to crush the restrained target, who must make a Strength save or take 2d6 bludgeoning, or half as much on a success. To break free, the target must make a Strength check against your spell save DC.",
      "longDescription": "You choose a 5-foot-square unoccupied space on the ground that you can see within range. A Medium hand made from compacted soil rises there and reaches for one creature you can see within 5 feet of it. The target must make a Strength saving throw. On a failed save, the target takes 2d6 bludgeoning damage and is restrained for the spells duration. As an action, you can cause the hand to crush the restrained target, who must make a Strength saving throw. It takes 2d6 bludgeoning damage on a failed save, or half as much damage on a successful one. To break out, the restrained target can make a Strength check against your spell save DC. On a success, the target escapes and is no longer restrained by the hand. As an action, you can cause the hand to reach for a different creature or to move to a different unoccupied space within range. The hand releases a restrained target if you do either.",
      "url": "https://www.dnd-spells.com/spell/maximilians-earthen-grasp",
      "damage": {
        "type": "bludgeoning damage",
        "levels": {
          1: 0,
          2: "2d6",
          3: "2d6",
          4: "2d6",
          5: "2d6",
          6: "2d6",
          7: "2d6",
          8: "2d6",
          9: "3d8"
        }
      }
    },
    "find the path": {
      "castingTime": "1 Minute",
      "duration": "Concentration, up to 1 day",
      "range": "Self",
      "components": "Verbal, Somatic, Material (a set of divinatory tools such as bones, ivory sticks, cards, teeth, or carved runes worth 100 gold pieces and an object from the location you wish to find)",
      "slotLevel": "6",
      "school": "Divination",
      "shortDescription": "Needs concentration. Find the shortest, most direct physical route to a fixed location that you are fimilar with on the same plane of existence.",
      "longDescription": "This spell allows you to find the shortest, most direct physical route to a specific fixed location that you are familiar with on the same plane of existence. If you name a destination on another plane of existence, a destination that moves (such as a mobile fortress), or a destination that isnt specific (such as a green dragons lair), the spell fails. For the duration, as long as you are on the same plane of existence as the destination, you know how far it is and in what direction it lies. While you are traveling there, whenever you are presented with a choice of paths along the way, you automatically determine which path is the shortest and most direct route (but not necessarily the safest route) to the destination.",
      "url": "https://www.dnd-spells.com/spell/find-the-path"
    },
    "ottos irresistible dance": {
      "castingTime": "1 Action",
      "duration": "Concentration, up to 1 minute",
      "range": "30 feet",
      "components": "Verbal",
      "slotLevel": "6",
      "school": "Enchantment",
      "shortDescription": "Needs concentration. Choose one creature within range. The target begins a comical dance in place for the duration. A dancing creature must use all its movement to dance without leaving its space, and has disadvantage on Dexterity save and attack rolls. While affected, other creatures have advantage on attack rolls against it. As an action an affected creature can make a Wisdom save to regain control.",
      "longDescription": "Choose one creature that you can see within range. The target begins a comic dance in place: shuffling, tapping its feet, and capering for the duration. Creatures that cant be charmed are immune to this spell. A dancing creature must use all its movement to dance without leaving its space and has disadvantage on Dexterity saving throws and attack rolls. While the target is affected by this spell, other creatures have advantage on attack rolls against it. As an action, a dancing creature makes a Wisdom saving throw to regain control of itself. On a successful save, the spell ends.",
      "url": "https://www.dnd-spells.com/spell/ottos-irresistible-dance"
    },
    "spirit guardians": {
      "castingTime": "1 Action",
      "duration": "Concentration, up to 10 minutes",
      "range": "Self (15-foot-radius)",
      "components": "Verbal, Somatic, Material (a holy symbol)",
      "slotLevel": "3",
      "school": "Conjuration",
      "shortDescription": "Needs concentration. Call forth spirits to protect you, they float a distance of 15 feet around you. They are flavored to your alignment, and you can designate any number of creature to be unaffected by the guardians. An affected creatures speed is halved while in the area, when a creature enters the area for the first time or starts its turn there, it must make a Wisdom save or take 3d8 radiant damage or 3d8 necrotic depending on your alignment. When cast using a spell slot of 4th or higher the damage increases by 1d8 for each level above 3rd.",
      "longDescription": "You call forth spirits to protect you. They flit around you to a distance of 15 feet for the duration. If you are good or neutral, their spectral form appears angelic or fey (your choice). If you are evil, they appear fiendish. When you cast this spell, you can designate any number of creatures you can see to be unaffected by it. An affected creatures speed is halved in the area, and when the creature enters the area for the first time on a turn or starts its turn there, it must make a Wisdom saving throw. On a failed save, the creature takes 3d8 radiant damage (if you are good or neutral) or 3d8 necrotic damage (if you are evil). On a successful save, the creature takes half as much damage. At higher levels: When you cast this spell using a spell slot of 4th level or higher, the damage increases by 1d8 for each slot level above 3rd.",
      "url": "https://www.dnd-spells.com/spell/spirit-guardians",
      "damage": {
        "type": "necrotic damage",
        "levels": {
          1: 0,
          2: 0,
          3: "3d8",
          4: "4d8",
          5: "5d8",
          6: "6d8",
          7: "7d8",
          8: "8d8",
          9: "9d8"
        }
      }
    },
    "reincarnate": {
      "castingTime": "1 Hour",
      "duration": "Instantaneous",
      "range": "Touch",
      "components": "Verbal, Somatic, Material (rare oils and unguents worth at least 1,000 gold pieces, which the spell consumes)",
      "slotLevel": "5",
      "school": "Transmutation",
      "shortDescription": "Touch a dead humanoid or a piece of a dead humanoid, provided it has not been dead longer than 10 days. The spell forms a new adult body and then calls the soul to the body. The Dm rolls a d100 and consults a table to determine what form the creature takes when restored to life, or the D. M. chooses the form. It retains its former life and experiences, but changes its original race and traits accordingly. Consult the Alexa app or page 271 of the players handbook for the table.",
      "longDescription": "You touch a dead humanoid or a piece of a dead humanoid. Provided that the creature has been dead no longer than 10 days, the spell forms a new adult body for it and then calls the soul to enter that body. If the targets soul isnt free or willing to do so, the spell fails. The magic fashions a new body for the creature to inhabit, which likely causes the creatures race to change. The D. M. rolls a d100 and consults a table to determine what form the creature takes when restored to life, or the D. M. chooses a form. The reincarnated creature recalls its former life and experiences. It retains the capabilities it had in its original form, except it exchanges its original race for the new one and changes its racial traits accordingly. Please see the Alexa app or page 271 of the players hand book for the table",
      "url": "https://www.dnd-spells.com/spell/reincarnate"
    },
    "suggestion": {
      "castingTime": "1 Action",
      "duration": "Concentration, up to 8 hours",
      "range": "30 feet",
      "components": "Verbal, Material (a snakes tongue and either a bit of honeycomb or a drop of sweet oil)",
      "slotLevel": "2",
      "school": "Enchantment",
      "shortDescription": "Needs concentration. Suggest a course of activity, limited to maximum of two sentences to influence a creature you can see, that can hear and understand you. The suggestion can not be harmful in nature, the target must make a Wisdom save or be charmed to pursue the course of action described.",
      "longDescription": "You suggest a course of activity (limited to a sentence or two) and magically influence a creature you can see within range that can hear and understand you. Creatures that cant be charmed are immune to this effect. The suggestion must be worded in such a manner as to make the course of action sound reasonable. Asking the creature to stab itself, throw itself onto a spear, immolate itself, or do some other obviously harmful act ends the spell. The target must make a Wisdom saving throw. On a failed save, it pursues the course of action you described to the best of its ability. The suggested course of action can continue for the entire duration. If the suggested activity can be completed in a shorter time, the spell ends when the subject finishes what it was asked to do. You can also specify conditions that will trigger a special activity during the duration. For example, you might suggest that a knight give her warhorse to the first beggar she meets. If the condition isnt met before the spell expires, the activity isnt performed. If you or any of your companions damage the target, the spell ends.",
      "url": "https://www.dnd-spells.com/spell/suggestion"
    },
    "weird": {
      "castingTime": "1 Action",
      "duration": "Concentration, up to 1 minute",
      "range": "120 feet",
      "components": "Verbal, Somatic",
      "slotLevel": "9",
      "school": "Illusion",
      "shortDescription": "Each creature in a 30 foot radius centered on a point must make a Wisdom save or become frightened. At the start of each frightened creatures turn, it makes another Wisdom save or take 4d10 psychic damage.",
      "longDescription": "Drawing on the deepest fears of a group of creatures, you create illusory creatures in their minds, visible only to them. Each creature in a 30-foot-radius sphere centered on a point of your choice within range must make a Wisdom saving throw. On a failed save, a creature becomes frightened for the duration. The illusion calls on the creatures deepest fears, manifesting its worst nightmares as an implacable threat. At the start of each of the frightened creatures turns, it must succeed on a Wisdom saving throw or take 4d10 psychic damage. On a successful save, the spell ends for that creature.",
      "url": "https://www.dnd-spells.com/spell/weird",
      "damage": {
        "type": "psychic damage",
        "levels": {
          1: 0,
          2: 0,
          3: 0,
          4: 0,
          5: 0,
          6: 0,
          7: 0,
          8: 0,
          9: "4d10"
        }
      }
    },
    "protection from poison": {
      "castingTime": "1 Action",
      "duration": "1 hour",
      "range": "Touch",
      "components": "Verbal, Somatic",
      "slotLevel": "2",
      "school": "Abjuration",
      "shortDescription": "Neutralize one poison. The target also has advantage against being poisoned, and resistence to poison damage",
      "longDescription": "You touch a creature. If it is poisoned, you neutralize the poison. If more than one poison afflicts the target, you neutralize one poison that you know is present, or you neutralize one at random. For the duration, the target has advantage on saving throws against being poisoned, and it has resistance to poison damage.",
      "url": "https://www.dnd-spells.com/spell/protection-from-poison"
    },
    "silence": {
      "castingTime": "1 Action",
      "duration": "Concentration, up to 10 minutes",
      "range": "120 feet",
      "components": "Verbal, Somatic",
      "slotLevel": "2",
      "school": "Illusion Ritual",
      "shortDescription": "Creatures in a sphere of 20 foot radius cant cast verbal spells, are immune to thuder damage, and are deaf",
      "longDescription": "For theduration, no sound can be created within or pass through a 20-foot-radius sphere centered on a point you choose within range. Any creature or object entirely inside the sphere is immune to thunder damage, and creatures are deafened while entirely inside it. Casting a spell that includes a verbal component is impossible there.",
      "url": "https://www.dnd-spells.com/spell/silence-ritual"
    },
    "divine word": {
      "castingTime": "1 Bonus Action",
      "duration": "Instantaneous",
      "range": "30 feet",
      "components": "Verbal",
      "slotLevel": "7",
      "school": "Evocation",
      "shortDescription": "Choose any number of creatures you can see within range. Each creature that can hear you must make a Charism save or suffers from the four effects based on current health: 1) 50 hit points of fewer, deafened for 1 minute. 2) 40 hit points or fewer, deafened and blinded for 10 minutes. 3) 30 hit points or fewer, blinded,deafened, and stunned for 1 hour. 4) 20 hit points or fewer, killed instantly.",
      "longDescription": "You utter a divine word, imbued with the power that shaped the world at the dawn of creation. Choose any number of creatures you can see within range. Each creature that can hear you must make a Charisma saving throw. On a failed save, a creature suffers one of the four following effects based on its current hit points: 1) 50 hit points or fewer: deafened for 1 minute. 2) 40 hit points or fewer: deafened and blinded for 10 minutes. 3) 30 hit points or fewer: blinded, deafened, and stunned for 1 hour. 4) 20 hit points or fewer: killed instantly. Regardless of its current hit points, a celestial, an elemental, a fey, or a fiend that fails its save is forced back to its plane of origin (if it isnt there already) and cant return to your current plane for 24 hours by any means short of a wish spell.",
      "url": "https://www.dnd-spells.com/spell/divine-word"
    },
    "conjure woodland beings": {
      "castingTime": "1 Action",
      "duration": "Concentration, up to 1 hour",
      "range": "60 feet",
      "components": "Verbal, Somatic, Material  (one holly berry per creature summoned)",
      "slotLevel": "4",
      "school": "Conjuration",
      "shortDescription": "Needs concentration. Choose one of the 4 following options of fey creatures to appear: 1) one fey of challenge rating 2 or lower. 2) Two fey of challenge rating 1 or lower. 3) Four fey of challenge rating 1/2 or lower. 4) Eight fey of challenge rating 1/4 or lower. Roll initiative for the summoned creatures as a group, having their own turn. They obey any verbal command by you, which does not use your action to do so. Can be cast at 6th level spell slot, increasing by twice the chosen amount, and three times as many at 8th level.",
      "longDescription": "You summon fey creatures that appear in unoccupied spaces that you can see within range. Choose one of the 4 following options for what appears: 1) One fey creature of challenge rating 2 or lower. 2) Two fey creatures of challenge rating 1 or lower. 3) Four fey creatures of challenge rating 1/2 or lower. 4) Eight fey creatures of challenge rating 1/4 or lower A summoned creature disappears when it drops to 0 hit points or when the spell ends. The summoned creatures are friendly to you and your companions. Roll initiative for the summoned creatures as a group, which have their own turns. They obey any verbal commands that you issue to them (no action required by you). If you dont issue any commands to them, they defend themselves from hostile creatures, but otherwise take no actions. The D. M. has the creatures statistics. At Higher Levels: When you cast this spell using certain higher-level spell slots, you choose one of the summoning options above, and more creatures appear: twice as many with a 6th-level slot and three times as many with an 8th-level slot.",
      "url": "https://www.dnd-spells.com/spell/conjure-woodland-beings"
    },
    "goodberry": {
      "castingTime": "1 Action",
      "duration": "Instantaneous",
      "range": "Touch",
      "components": "Verbal, Somatic, Material (a sprig of mistletoe)",
      "slotLevel": "1",
      "school": "Transmutation",
      "shortDescription": "Ten berries appear in your hand, a creature can use its action to eat a berry, which restores 1 hit point.",
      "longDescription": "Up to ten berries appear in your hand and are infused with magic for the duration. A creature can use its action to eat one berry. Eating a berry restores 1 hit point, and the berry provides enough nourishment to sustain a creature for one day. The berries lose their potency if they have not been consumed within 24 hours of the casting of this spell.",
      "url": "https://www.dnd-spells.com/spell/goodberry"
    },
    "modify memory": {
      "castingTime": "1 Action",
      "duration": "Concentration, up to 1 minute",
      "range": "30 feet",
      "components": "Verbal, Somatic",
      "slotLevel": "5",
      "school": "Enchantment",
      "shortDescription": "Needs concentration. One target creature must make a Wisdom save or become charmed. If you are fighting the creature, it has advantage on the save. The charmed target is incapacitated, if it takes damage the spell ends, meaning no memories are modified. While this charm lasts, you can alter the memory of an event that the target experienced within the last 24 hours, and the event was no longer than 10 minutes. You must speak to the target to describe how its memories are affected, and it must be able to understand your language. When cast using a spell slot of 6th level you can alter the targets memories of an event that took place 7 days ago, 30 days at level 7, 1 year ago at 8th, and any time in the creatures past at 9th level.",
      "longDescription": "You attempt to reshape another creatures memories. One creature that you can see must make a Wisdom saving throw. If you are fighting the creature, it has advantage on the saving throw. On a failed save, the target becomes charmed by you for the duration. The charmed target is incapacitated and unaware of its surroundings, though it can still hear you. If it takes any damage or is targeted by another spell, this spell ends, and none of the targets memories are modified. While this charm lasts, you can affect the targets memory of an event that it experienced within the last 24 hours and that lasted no more than 10 minutes. You can permanently eliminate all memory of the event, allow the target to recall the event with perfect clarity and exacting detail, change its memory of the details of the event, or create a memory of some other event. You must speak to the target to describe how its memories are affected, and it must be able to understand your language for the modified memories to take root. Its mind fills in any gaps in the details of your description. If the spell ends before you have finished describing the modified memories, the creatures memory isnt altered. Otherwise, the modified memories take hold when the spell ends. A modified memory doesnt necessarily affect how a creature behaves, particularly if the memory contradicts the creatures natural inclinations, alignment, or beliefs. An illogical modified memory, such as implanting a memory of how much the creature enjoyed dousing itself in acid, is dismissed, perhaps as a bad dream. The D. M. might deem a modified memory too nonsensical to affect a creature in a significant manner. A remove curse or greater restoration spell cast on the target restores the creatures true memory. At Higher Levels: If you cast this spell using a spell slot of 6th level or higher, you can alter the targets memories of an event that took place up to 7 days ago (6th level), 30 days ago (7th level), 1 year ago (8th level), or any time in the creatures past (9th level).",
      "url": "https://www.dnd-spells.com/spell/modify-memory"
    },
    "conjure celestial": {
      "castingTime": "1 Minute",
      "duration": "Concentration, up to 1 hour",
      "range": "90 feet",
      "components": "Verbal, Somatic",
      "slotLevel": "7",
      "school": "Conjuration",
      "shortDescription": "Needs concentration. Summon a celestial of challenge rating 4 or lower. Roll initiative for the celestial, which takes its own turns. It obeys any verbal command issued by you, which does not use your action to command. When cast at a spell slot of 9th level summon a celestial of challenge rating 5 or lower.",
      "longDescription": "You summon a celestial of challenge rating 4 or lower, which appears in an unoccupied space that you can see within range. The celestial disappears when it drops to 0 hit points or when the spell ends. The celestial is friendly to you and your companions for the duration. Roll initiative for the celestial, which has its own turns. It obeys any verbal commands that you issue to it (no action required by you), as long as they dont violate its alignment. If you dont issue any commands to the celestial, it defends itself from hostile creatures but otherwise takes no actions. The D. M. has the celestials statistics. At Higher Levels: When you cast this spell using a 9th-level spell slot, you summon a celestial of challenge rating 5 or lower.",
      "url": "https://www.dnd-spells.com/spell/conjure-celestial"
    },
    "guardian of faith": {
      "castingTime": "1 Action",
      "duration": "8 hours",
      "range": "30 feet",
      "components": "Verbal",
      "slotLevel": "4",
      "school": "Conjuration",
      "shortDescription": "Conjure a large spectral guardian emblazoned with the symbol of your deity. Any hostile creature that moves within 10 feet of the guardian for the first time on its turn, must make a Dexterity save or take 20 radiant damage, or half as much on a success. Guardian vanishes once 60 damage is dealt.",
      "longDescription": "A Large spectral guardian appears and hovers for the duration in an unoccupied space of your choice that you can  see within range. The guardian occupies that space and is indistinct except for a gleaming sword and shield emblazoned with the symbol of your deity. Any creature hostile to you that moves to a space within 10 feet of the guardian for the first time on a turn must succeed on a Dexterity saving throw. The creature takes 20 radiant damage on a failed save, or half as much damage on a successful one. The guardian vanishes when it has dealt a total of 60 damage.",
      "url": "https://www.dnd-spells.com/spell/guardian-of-faith"
    },
    "investiture of flame": {
      "castingTime": "1 Action",
      "duration": "Concentration, up to 10 minutes",
      "range": "Self",
      "components": "Verbal, Somatic",
      "slotLevel": "6",
      "school": "Transmutation",
      "shortDescription": "Needs concentration. Flames surround you, shedding bright light in a 30 foot radius and dim for an additional 30 feet. Gain the following benefits: Immune to fire damage, and have resistance to cold damage. Any creature that moves within 5 feet of you for the first time or ends its turn there takes 1d10 fire damage. Use your action to create a line of fire 15 feet long and 5 feet wide in a direction you choose. Each creature in the line must make a Dexterity save or take 4d8 fire damage, or half on a success.",
      "longDescription": "Flames race across your body, shedding bright light in a 30-foot radius and dim light for an additional 30 feet for the spells duration. The flames dont harm you. Until the spell ends, you gain the following benefits. You are immune to fire damage and have resistance to cold damage. Any creature that moves within 5 feet of you for the first time on a turn or ends its turn there takes 1d10 fire damage. You can use your action to create a line of fire 15 feet long and 5 feet wide extending from you in a direction you choose. Each creature in the line must make a Dexterity saving throw. A creature takes 4d8 fire damage on a failed save, or half as much damage on a successful one.",
      "url": "https://www.dnd-spells.com/spell/investiture-of-flame",
      "damage": "Complex Damage Progression. Please consult short or long descriptions"
    },
    "magic mouth": {
      "castingTime": "1 Minute",
      "duration": "Until dispelled",
      "range": "30 feet",
      "components": "Verbal, Somatic, Material (a small bit of honeycomb and jade dust worth at least 10 gold pieces, which the spell consumes)",
      "slotLevel": "2",
      "school": "Illusion Ritual",
      "shortDescription": "Choose an object that you can see that isnt being worn or carried by another creature. Implant a message, no longer than 25 words. Determine the circumstance that will trigger the spell to deliver the message, when it occurs the message is recited in your voice and at the same volume when you spoke it. You can have the spell end after it delivers the message, or repeat whenever the trigger occurs. The trigger must be based on visual or audible conditions that occur within 30 feet of the object.",
      "longDescription": "You implant a message within an object in range, a message that is uttered when a trigger condition is met. Choose an object that you can see and that isnt being worn or carried by another creature. Then speak the message, which must be 25 words or less, though it can be delivered over as long as 10 minutes. Finally, determine the circumstance that will trigger the spell to deliver your message. When that circumstance occurs, a magical mouth appears on the object and recites the message in your voice and at the same volume you spoke. If the object you chose has a mouth or something that looks like a mouth (for example, the mouth of a statue), the magical mouth appears there so that the words appear to come from the objects mouth. When you cast this spell, you can have the spell end after it delivers its message, or it can remain and repeat its message whenever the trigger occurs. The triggering circumstance can be as general or as detailed as you like, though it must be based on visual or audible conditions that occur within 30 feet of the object. For example, you could instruct the mouth to speak when any creature moves within 30 feet of the object or when a silver bell rings within 30 feet of it.",
      "url": "https://www.dnd-spells.com/spell/magic-mouth-ritual"
    },
    "call lightning": {
      "castingTime": "1 Action",
      "duration": "Concentration, up to 10 minutes",
      "range": "120 feet",
      "components": "Verbal, Somatic",
      "slotLevel": "3",
      "school": "Conjuration",
      "shortDescription": "Needs concentration. Conjure a cylindrical storm cloud that is 10 feet tall with a 60 foot radius, centered on a point within 100 feet above you. Choose a point within range, and a bolt of lightning flashes down to that point. Each creature within 5 feet of that point must make a Dexterity save or take 3d10 lightning damage, or half on a success. On each of your turns you can use your action to call down more lightning targeting the same or different point. If cast outdoors in stormy conditions, damage is increased by 1d10. When cast using a spell slot of 4th or higher, increase the damage by 1d10 for each slot above 3rd. ",
      "longDescription": "A storm cloud appears in the shape of a cylinder that is 10 feet tall with a 60-foot radius, centered on a point you can see 100 feet directly above you. The spell fails if you cant see a point in the air where the storm cloud could appear (for example, if you are in a room that cant accommodate the cloud). When you cast the spell, choose a point you can see within range. A bolt of lightning flashes down from the cloud to that point. Each creature within 5 feet of that point must make a Dexterity saving throw. A creature takes 3d10 lightning damage on a failed save, or half as much damage on a successful one. On each of your turns until the spell ends, you can use your action to call down lightning in this way again, targeting the same point or a different one. If you are outdoors in stormy conditions when you cast this spell, the spell gives you control over the existing storm instead of creating a new one. Under such conditions, the spells damage increases by 1d10. At Higher Levels. When you cast this spell using a spell slot of 4th or higher level, the damage increases by 1d10 for each slot level above 3rd.",
      "url": "https://www.dnd-spells.com/spell/call-lightning",
      "damage": {
        "type": "lightning damage",
        "levels": {
          1: 0,
          2: 0,
          3: "3d10",
          4: "4d10",
          5: "5d10",
          6: "6d10",
          7: "7d10",
          8: "8d10",
          9: "9d10"
        }
      }
    },
    "gust of wind": {
      "castingTime": "1 Action",
      "duration": "Concentration, up to 1 minute",
      "range": "Self (60-foot line)",
      "components": "Verbal, Somatic, Material (a legume seed)",
      "slotLevel": "2",
      "school": "Evocation",
      "shortDescription": "Needs concentration. Conjure a blast of strong wind 60 feet long and 10 feet wide blasts from you in a direction you choose. Each creature that starts its turn in the line must make a Strength save or be pushed 15 feet away following the line. Any creature in the line must spend 2 feet for every 1 foot of movement it makes toward you in the line. As a bonus action, you can change the direction.",
      "longDescription": "A line of strong wind 60 feet long and 10 feet wide blasts from you in a direction you choose for the spells duration. Each creature that starts its turn in the line must succeed on a Strength saving throw or be pushed 15 feet away from you in a direction following the line. Any creature in the line must spend 2 feet of movement for every 1 foot it moves when moving closer to you. The gust disperses gas or vapor, and it extinguishes candles, torches, and similar unprotected flames in the area. It causes protected flames, such as those of lanterns, to dance wildly and has a 50 percent chance to extinguish them. As a bonus action on each of your turns before the spell ends, you can change the direction in which the line blasts from you.",
      "url": "https://www.dnd-spells.com/spell/gust-of-wind"
    },
    "calm emotions": {
      "castingTime": "1 Action",
      "duration": "Concentration, up to 1 minute",
      "range": "60 feet",
      "components": "Verbal, Somatic",
      "slotLevel": "2",
      "school": "Enchantment",
      "shortDescription": "Needs concentration. Each humanoid in a 20 foot radius sphere centered on a point must make a Charism save. If it fails, choose one of two effects: suppress any effect causing a target to be charmed or frightened. Alternatively, you can make a target indifferent about creatures of your choice that it is hostile towards.",
      "longDescription": "You attempt to suppress strong emotions in a group of people. Each humanoid in a 20-foot-radius sphere centered on a point you choose within range must make a Charisma saving throw; a creature can choose to fail this saving throw if it wishes. If a creature fails its saving throw, choose one of the following two effects. You can suppress any effect causing a target to be charmed or frightened. When this spell ends, any suppressed effect resumes, provided that its duration has not expired in the meantime. Alternatively, you can make a target indifferent about creatures of your choice that it is hostile toward. This indifference ends if the target is attacked or harmed by a spell or if it witnesses any of its friends being harmed. When the spell ends, the creature becomes hostile again, unless the D. M. rules otherwise.",
      "url": "https://www.dnd-spells.com/spell/calm-emotions"
    },
    "otilukes freezing sphere": {
      "castingTime": "1 Action",
      "duration": "Instantaneous",
      "range": "300 feet",
      "components": "Verbal, Somatic, Material (a small crystal sphere)",
      "slotLevel": "6",
      "school": "Evocation",
      "shortDescription": "A frigid globe of cold energy moves towards a point of your choice within range, and explodes in a 60 foot radius sphere. Each creature within the area must make a Constitution save or take 10d6 cold damage, or half on a success. If the globe strikes a body of water it freezes the liquid to a depth of 6 inches over an area of 30 square feet and lasts for 1 minute. Creatures that were swimming on the surface are trapped in the ice, a trapped creature can use its action to make a Strength check against your spell DC to break free. You can refrain from firing the globe, in which case a small globe the size of a sling stone appears, at any time you or a creature you give the globe to can throw, or hurl the globe. It shatters on impact, with the same effect as the normal spell. When cast using a spell slot of 7th level or higher, increase the damage by 1d6 for each slot above 6th.",
      "longDescription": "A frigid globe of cold energy streaks from your fingertips to a point of your choice within range, where it explodes in a 60-foot-radius sphere. Each creature within the area must make a Constitution saving throw. On a failed save, a creature takes 10d6 cold damage. On a successful save, it takes half as much damage. If the globe strikes a body of water or a liquid that is principally water (not including water-based creatures), it freezes the liquid to a depth of 6 inches over an area 30 feet square. This ice lasts for 1 minute. Creatures that were swimming on the surface of frozen water are trapped in the ice. A trapped creature can use an action to make a Strength check against your spell save DC to break free. You can refrain from firing the globe after completing the spell, if you wish. A small globe about the size of a sling stone, cool to the touch, appears in your hand. At any time, you or a creature you give the globe to can throw the globe (to a range of 40 feet) or hurl it with a sling (to the slings normal range). It shatters on impact, with the same effect as the normal casting of the spell. You can also set the globe down without shattering it. After 1 minute, if the globe hasnt already shattered, it explodes. At Higher Levels: When you cast this spell using a spell slot of 7th level or higher, the damage increases by 1d6 for each slot level above 6th.",
      "url": "https://www.dnd-spells.com/spell/otilukes-freezing-sphere",
      "damage": {
        "type": "cold damage",
        "levels": {
          1: 0,
          2: 0,
          3: 0,
          4: 0,
          5: 0,
          6: "10d6",
          7: "11d6",
          8: "12d6",
          9: "13d6"
        }
      }
    },
    "swift quiver": {
      "castingTime": "1 Bonus Action",
      "duration": "Concentration, up to 1 minute",
      "range": "Touch",
      "components": "Verbal, Somatic, Material (a quiver containing at least one piece of ammunition)",
      "slotLevel": "5",
      "school": "Transmutation",
      "shortDescription": "Needs concentration. Transmute your quiver to produce an endless supply of nommagical ammo. On each of your turns you can use a bonus action to make two attacks with a weapon that uses ammo from the quiver. Each time you make such a ranged attack, the quiver magically replaces the piece of ammo.",
      "longDescription": "You transmute your quiver so it produces an endless supply of nonmagical ammunition, which seems to leap into your hand when you reach for it. On each of your turns until the spell ends, you can use a bonus action to make two attacks with a weapon that uses ammunition from the quiver. Each time you make such a ranged attack, your quiver magically replaces the piece of ammunition you used with a similar piece of nonmagical ammunition. Any pieces of ammunition created by this spell disintegrate when the spell ends. If the quiver leaves your possession, the spell ends.",
      "url": "https://www.dnd-spells.com/spell/swift-quiver"
    },
    "regenerate": {
      "castingTime": "1 Minute",
      "duration": "1 hour",
      "range": "Touch",
      "components": "Verbal, Somatic, Material (a prayer wheel and holy water)",
      "slotLevel": "7",
      "school": "Transmutation",
      "shortDescription": "The target regains 4d8 + 15 health, and 1 health per turn. Restores body parts after 2 minutes",
      "longDescription": "You touch a creature and stimulate its natural healing ability. The target regains 4d8 + 15 hit points. For the duration of the spell, the target regains 1 hit point at the start of each of its turns (10 hit points each minute). The targets severed body members (fingers, legs, tails, and so on), if any, are restored after 2 minutes. If you have the severed part and hold it to the stump, the spell instantaneously causes the limb to knit to the stump.",
      "url": "https://www.dnd-spells.com/spell/regenerate"
    },
    "disintegrate": {
      "castingTime": "1 Action",
      "duration": "Instantaneous",
      "range": "60 feet",
      "components": "Verbal, Somatic, Material  (a lodestone and a pinch of dust)",
      "slotLevel": "6",
      "school": "Transmutation",
      "shortDescription": "Choose a target within range, which can be a creature, object or creation of magical force. A creature targeted by this spell must make a Dexterity save or take 10d6 + 40 force damage. If this reduces the target to 0 hit points it and everything it is wearing and carrying, except magic items, are disintegrated and reduced to a pile of fine gray dust. The creature can be restored to life only by means of a true resurrection or wish spell. When cast using a spell slot of 7th level or higher, increase the damage by 3d6 for each slot above 6th.",
      "longDescription": "A thin green ray springs from your pointing finger to a target that you can see within range. The target can be a creature, an object, or a creation of magical force, such as the wall created by wall of force. A creature targeted by this spell must make a Dexterity saving throw. On a failed save, the target takes 10d6 + 40 force damage. If this damage reduces the target to 0 hit points, it is disintegrated. A disintegrated creature and everything it is wearing and carrying, except magic items, are reduced to a pile of fine gray dust. The creature can be restored to life only by means of a true resurrection or a wish spell. This spell automatically disintegrates a Large or smaller nonmagical object or a creation of magical force. If the target is a Huge or larger object or creation of force, this spell disintegrates a 10-foot-cube portion of it. A magic item is unaffected by this spell. At Higher Levels: When you cast this spell using a spell slot of 7th level or higher, the damage increases by 3d6 for each slot level above 6th.",
      "url": "https://www.dnd-spells.com/spell/disintegrate"
    },
    "protection from energy": {
      "castingTime": "1 Action",
      "duration": "Concentration, up to 1 hour",
      "range": "Touch",
      "components": "Verbal, Somatic",
      "slotLevel": "3",
      "school": "Abjuration",
      "shortDescription": "Needs concentration. A willing creature has resistence to either acid, cold, fire, lightning, or thunder.",
      "longDescription": "For the duration, the willing creature you touch has resistance to one damage type of your choice: acid, cold, fire, lightning, or thunder.",
      "url": "https://www.dnd-spells.com/spell/protection-from-energy"
    },
    "darkvision": {
      "castingTime": "1 Action",
      "duration": "8 hours",
      "range": "Touch",
      "components": "Verbal, Somatic, Material (either a pinch of dried carrot or an agate)",
      "slotLevel": "2",
      "school": "Transmutation",
      "shortDescription": "A willing creature has darkvision to a range of 60 feet.",
      "longDescription": "You touch a willing creature to grant it the ability to see in the dark. For the duration, that creature has darkvision out to a range of 60 feet.",
      "url": "https://www.dnd-spells.com/spell/darkvision"
    },
    "earthquake": {
      "castingTime": "1 Action",
      "duration": "Concentration, up to 1 minute",
      "range": "500 feet",
      "components": "Verbal, Somatic, Material (a pinch of dirt, a piece of rock, and a lump of clay)",
      "slotLevel": "8",
      "school": "Evocation",
      "shortDescription": "Needs concentration. Create a seismic disturbance at a point on the ground you can see within range. For the duration, tremors affect the ground in a 100 foot radius circle centered on the point. The ground becomes difficult terrain, each creature on the ground that is concentrating must make a Constitution save or have their concentration broken. When you cast this spell and at the end of each turn you spend concentrating on it, each creature on the ground must make a Dexterity save or be knocked prone. Depending on the terrain in the area, determined by the D. M.. Create a total of 1d6 fissures, starting on your next turn, open in locations chosen by the D. M.. Each is 1d10 by 10feet deep, 10 feet wide and extends from one edge of the spell area to the opposite. A creature standing on a spot where a fissure opens must make a Dexterity save or fall in. The tremor deals 50 bludgeoning damage to any structure in contact with the affected ground, and at the start of each of your turns. If a structure drops to 0 hit points, it collapses and potentially damages nearby creatures. A creature within half the distance of the structures height must make a Dexterity save or take 5d6 bludgeoning damage, knocked prone, and is buried in rubble, requiring a DC 20 Strength(Athletics) check as an action to escape.",
      "longDescription": "You create a seismic disturbance at a point on the ground that you can see within range. For the duration, an intense tremor rips through the ground in a 100-foot-radius circle centered on that point and shakes creatures and structures in contact with the ground in that area. The ground in the area becomes difficult terrain. Each creature on the ground that is concentrating must make a Constitution saving throw. On a failed save, the creatures concentration is broken. When you cast this spell and at the end of each turn you spend concentrating on it, each creature on the ground in the area must make a Dexterity saving throw. On a failed save, the creature is knocked prone. This spell can have additional effects depending on the terrain in the area, as determined by the D. M.. Fissures. Fissures open throughout the spells area at the start of your next turn after you cast the spell. A total of 1d6 such fissures open in locations chosen by the D. M.. Each is 1d10 x 10 feet deep, 10 feet wide, and extends from one edge of the spells area to the opposite side. A creature standing on a spot where a fissure opens must succeed on a Dexterity saving throw or fall in. A creature that successfully saves moves with the fissures edge as it opens. A fissure that opens beneath a structure causes it to automatically collapse (see below). Structures. The tremor deals 50 bludgeoning damage to any structure in contact with the ground in the area when you cast the spell and at the start of each of your turns until the spell ends. If a structure drops to 0 hit points, it collapses and potentially damages nearby creatures. A creature within half the distance of a structures height must make a Dexterity saving throw. On a failed save, the creature takes 5d6 bludgeoning damage, is knocked prone, and is buried in the rubble, requiring a DC 20 Strength (Athletics) check as an action to escape. The D. M. can adjust the DC higher or lower, depending on the nature of the rubble. On a successful save, the creature takes half as much damage and doesnt fall prone or become buried.",
      "url": "https://www.dnd-spells.com/spell/earthquake",
      "damage": "Complex Damage Progression. Please consult short or long descriptions"
    },
    "eyebite": {
      "castingTime": "1 Action",
      "duration": "Concentration, up to 1 minute",
      "range": "Self",
      "components": "Verbal, Somatic",
      "slotLevel": "6",
      "school": "Necromancy",
      "shortDescription": "One creature of your choice within 60 feet of you must make a Wisdom save or be affected by one of the following effects: Asleep: The target falls unconscious, it wakes up if it takes any damage or if another creature uses its action to wake it. Panic: The target is frightened by you, on each of its turns, the frightened creature must make take the Dash action and move away from you, unless there is nowhere to move, if it moves 60 feet away from you where it can no longer see you, the effect ends. Sickened: The target has disadvantage on attack rolls and ability checks. At the end of each of its turns it can make another Wisdom save to end the effect.",
      "longDescription": "For the spells duration, your eyes become an inky void imbued with dread power. One creature of your choice within 60 feet of you that you can see must succeed on a Wisdom saving throw or be affected by one of the following effects of your choice for the duration. On each of your turns until the spell ends, you can use your action to target another creature but cant target a creature again if it has succeeded on a saving throw against this casting of eyebite. Asleep. The target falls unconscious. It wakes up if it takes any damage or if another creature uses its action to shake the sleeper awake. Panicked. The target is frightened of you. On each of its turns, the frightened creature must take the Dash action and move away from you by the safest and shortest available route, unless there is nowhere to move. If the target moves to a place at least 60 feet away from you where it can no longer see you, this effect ends. Sickened. The target has disadvantage on attack rolls and ability checks. At the end of each of its turns, it can make another Wisdom saving throw. If it succeeds, the effect ends.",
      "url": "https://www.dnd-spells.com/spell/eyebite"
    },
    "snillocs snowball swarm": {
      "castingTime": "1 Action",
      "duration": "Instantaneous",
      "range": "90 feet",
      "components": "Verbal, Somatic, Material(a piece of ice or a small white rock chip)",
      "slotLevel": "2",
      "school": "Evocation",
      "shortDescription": "Each creature in a 5ft radius sphere centered on a point you choose, must make a Dexterity save or take 3d6 cold damage, or half on a success. When cast using a spell slot of 3rd level or higher, increase the damage by 1d6 for each slot above 2nd.",
      "longDescription": "A flurry of magic snowballs erupts from a point you choose within range. Each creature in a 5-foot-radius sphere centered on that point must make a Dexterity saving throw. A creature takes 3d6 cold damage on a failed save, or half as much damage on a successful one. At Higher Levels. When you cast this spell using a spell slot of 3rd level or higher, the damage increases by 1d6 for each slot level above 2nd",
      "url": "https://www.dnd-spells.com/spell/snillocs-snowball-swarm",
      "damage": {
        "type": "cold damage",
        "levels": {
          1: 0,
          2: "3d6",
          3: "4d6",
          4: "5d6",
          5: "6d6",
          6: "7d6",
          7: "8d6",
          8: "9d6",
          9: "10d6"
        }
      }
    },
    "mass heal": {
      "castingTime": "1 Action",
      "duration": "Instantaneous",
      "range": "60 feet",
      "components": "Verbal, Somatic",
      "slotLevel": "9",
      "school": "Evocation",
      "shortDescription": "Restore health to any number of creatures from a pool of 700 points. Also remove diseases, blindness, and deafness.",
      "longDescription": "A flood of healing energy flows from you into injured creatures around you. You restore up to 700 hit points, divided as you choose among any number of creatures that you can see within range. Creatures healed by this spell are also cured of all diseases and any effect making them blinded or deafened. This spell has no effect on undead or constructs.",
      "url": "https://www.dnd-spells.com/spell/mass-heal"
    },
    "plant growth": {
      "castingTime": "Special",
      "duration": "Instantaneous",
      "range": "150 feet",
      "components": "Verbal, Somatic",
      "slotLevel": "3",
      "school": "Transmutation",
      "shortDescription": "Cast using one action and creatures move at 1/4th speed; or cast over 8 hours and plants yeild twice as much food for one year.",
      "longDescription": "This spell channels vitality into plants within a specific area. There are two possible uses for the spell, granting either mmediate or long-term benefits. If you cast this spell using 1 action, choose a point within range. All normal plants in a 100-foot radius centered on that point become thick and overgrown. A creature moving through the area must spend 4 feet of movement for every 1 foot it moves. You can exclude one or more areas of any size within the spells area from being affected. If you cast this spell over 8 hours, you enrich the land. All plants in a half-mile radius centered on a point within range become enriched for 1 year. The plants yield twice the normal amount of food when harvested.",
      "url": "https://www.dnd-spells.com/spell/plant-growth"
    },
    "detect thoughts": {
      "castingTime": "1 Action",
      "duration": "Concentration, up to 1 minute",
      "range": "Self",
      "components": "Verbal, Somatic, Material (a copper piece)",
      "slotLevel": "2",
      "school": "Divination",
      "shortDescription": "Needs concentration. Using your action you can focus your mind on any one creature within 30 feet. You initially learn what is most on the creatures mind that moment. As an action you can probe deeper, the target must make a Wisdom save or you gain insight into its reasoning, emotional state, and something that looms heavily in their mind. The target is aware that you are probing its mind, the target can use its action to make an Intelligence check against your own, if it succeeds the spell ends.",
      "longDescription": "For the duration, you can read the thoughts of certain creatures. When you cast the spell and as your action on each turn until the spell ends, you can focus your mind on any one creature that you can see within 30 feet of you. If the creature you choose has an Intelligence of 3 or lower or doesnt speak any language, the creature is unaffected. You initially learn the surface thoughts of the creature, what is most on its mind in that moment. As an action, you can either shift your attention to another creatures thoughts or attempt to probe deeper into the same creatures mind. If you probe deeper, the target must make a Wisdom saving throw. If it fails, you gain insight into its reasoning (if any), its emotional state, and something that looms large in its mind (such as something it worries over, loves, or hates). If it succeeds, the spell ends. Either way, the target knows that you are probing into its mind, and unless you shift your attention to another creatures thoughts, the creature can use its action on its turn to make an Intelligence check contested by your Intelligence check; if it succeeds, the spell ends. Questions verbally directed at the target creature naturally shape the course of its thoughts, so this spell is particularly effective as part of an interrogation. You can also use this spell to detect the presence of thinking creatures you cant see. When you cast the spell or as your action during the duration, you can search for thoughts within 30 feet of you. The spell can penetrate barriers, but 2 feet of rock, 2 inches of any metal other than lead, or a thin sheet of lead blocks you. You cant detect a creature with an Intelligence of 3 or lower or one that doesnt speak any language. Once you detect the presence of a creature in this way, you can read its thoughts for the rest of the duration as described above, even if you cant see it, but it must still be within range.",
      "url": "https://www.dnd-spells.com/spell/detect-thoughts"
    },
    "stinking cloud": {
      "castingTime": "1 Action",
      "duration": "Concentration, up to 1 minute",
      "range": "90 feet",
      "components": "Verbal, Somatic, Material (a rotten egg or several skunk cabbage leaves)",
      "slotLevel": "3",
      "school": "Conjuration",
      "shortDescription": "Needs concentration. Create a 20 foot radius sphere of nauseating gas centered on a point within range. The cloud spreads around corner, and its area is heavily obscured. Each creature within the cloud at the start of its turn must make a Constitution save or spend its action retching and reeling. The cloud disperses after 4 rounds.",
      "longDescription": "You create a 20-foot-radius sphere of yellow, nauseating gas centered on a point within range. The cloud spreads around corners, and its area is heavily obscured. The cloud lingers in the air for the duration. Each creature that is completely within the cloud at the start of its turn must make a Constitution saving throw against poison. On a failed save, the creature spends its action that turn retching and reeling. Creatures that dont need to breathe or are immune to poison automatically succeed on this saving throw. A moderate wind (at least 10 miles per hour) disperses the cloud after 4 rounds. A strong wind (at least 20 miles per hour) disperses it after 1 round.",
      "url": "https://www.dnd-spells.com/spell/stinking-cloud"
    },
    "animal shapes": {
      "castingTime": "1 Action",
      "duration": "Concentration, up to 24 hours",
      "range": "30 feet",
      "components": "Verbal, Somatic",
      "slotLevel": "8",
      "school": "Transmutation",
      "shortDescription": "Needs concentration. Choose any number of willing creatures that you can see within range. Transform each target into a large or smaller beast with challenge rating of 4 or lower. The transformation lasts for the duration, or until the target drops to 0 hit points or dies. You can choose a different form for each target, and their game statistics are replaced by the statistics of the chosen beast, though the target retains its alignment, Intelligence, Wisdom and Charism scores. The target assumes the hit points of its new form, and when it reverts to its normal form, it returns to the number of hit points it had before it transformed. The creature is limited in the actions it can perform by the nature of its new form, and cant speak or cast spells.",
      "longDescription": "Your magic turns others into beasts. Choose any number of willing creatures that you can see within range. You transform each target into the form of a Large or smaller beast with a challenge rating of 4 or lower. On subsequent turns, you can use your action to transform affected creatures into new forms. The transformation lasts for the duration for each target, or until the target drops to 0 hit points or dies. You can choose a different form for each target. A targets game statistics are replaced by the statistics of the chosen beast, though the target retains its alignment and Intelligence, Wisdom, and Charisma scores. The target assumes the hit points of its new form, and when it reverts to its normal form, it returns to the number of hit points it had before it transformed. If it reverts as a result of dropping to 0 hit points, any excess damage carries over to its normal form. As long as the excess damage doesnt reduce the creatures normal form to 0 hit points, it isnt knocked unconscious. The creature is limited in the actions it can perform by the nature of its new form, and it cant speak or cast spells. The targets gear melds into the new form. The target cant activate, wield, or otherwise benefit from any of its equipment.",
      "url": "https://www.dnd-spells.com/spell/animal-shapes"
    },
    "astral projection": {
      "castingTime": "1 Hour",
      "duration": "Special",
      "range": "10 feet",
      "components": "Verbal, Somatic, Material (for each creature you affect with this spell, you must provide one jacinth worth at least 1,000 gold pieces and one ornately carved bar of silver worth at least 100 gold pieces, all of which the spell consumes)",
      "slotLevel": "9",
      "school": "Necromancy",
      "shortDescription": "You and up to eight willing creatures within range project their astral bodies into the Astral Plane. The material body you leave behind is unconscious and in a state of suspended animation. Your astral body gains a silvery cord that trails behind you, fading to invisibility after 1 foot. As long as the tether remains intact, you can find your way back to your material body. The spell ends when you use your action to dismiss it, when it ends the affected creature returns to its physical body, and it awakens from the suspended animation.",
      "longDescription": "You and up to eight willing creatures within range project your astral bodies into the Astral Plane (the spell fails and the casting is wasted if you are already on that plane). The material body you leave behind is unconscious and in a state of suspended animation; it doesnt need food or air and doesnt age. Your astral body resembles your mortal form in almost every way, replicating your game statistics and possessions. The principal difference is the addition of a silvery cord that extends from between your shoulder blades and trails behind you, fading to invisibility after 1 foot. This cord is your tether to your material body. As long as the tether remains intact, you can find your way home. If the cord is cut, something that can happen only when an effect specifically states that it does, your soul and body are separated, killing you instantly. Your astral form can freely travel through the Astral Plane and can pass through portals there leading to any other plane. If you enter a new plane or return to the plane you were on when casting this spell, your body and possessions are transported along the silver cord, allowing you to re-enter your body as you enter the new plane. Your astral form is a separate incarnation. Any damage or other effects that apply to it have no effect on your physical body, nor do they persist when you return to it. The spell ends for you and your companions when you use your action to dismiss it. When the spell ends, the affected creature returns to its physical body, and it awakens. The spell might also end early for you or one of your companions. A successful dispel magic spell used against an astral or physical body ends the spell for that creature. If a creatures original body or its astral form drops to 0 hit points, the spell ends for that creature. If the spell ends and the silver cord is intact, the cord pulls the creatures astral form back to its body, ending its state of suspended animation. If you are returned to your body prematurely, your companions remain in their astral forms and must find their own way back to their bodies, usually by dropping to 0 hit points.",
      "url": "https://www.dnd-spells.com/spell/astral-projection"
    },
    "prestidigitation": {
      "castingTime": "1 Action",
      "duration": "Up to 1 hour",
      "range": "10 feet",
      "components": "Verbal, Somatic",
      "slotLevel": "cantrip",
      "school": "Transmutation",
      "shortDescription": "You create one of the following magical effects within range. You create an instantaneous, harmless sensory effect, such as a shower of sparks, or an odd odor like the faint smell of pickles. You instantaneously light or snuff out a candle, a torch, or a small campfire. You instantaneously clean or soil an object no larger than 1 cubic foot. You chill, warm, or flavor up to 1 cubic foot of nonliving material for 1 hour. You make a color, a small mark, or a symbol appear on an object or surface for 1 hour. You create a nonmagical trinket or an illusory image that can fit in your hand and lasts until the end of your next turn.",
      "longDescription": "This spell is a minor magical trick that novice spellcasters use for practice. You create one of the following magical effects within range. You create an instantaneous, harmless sensory effect, such as a shower of sparks, a puff of wind, faint musical notes, or an odd odor. You instantaneously light or snuff out a candle, a torch, or a small campfire. You instantaneously clean or soil an object no larger than 1 cubic foot. You chill, warm, or flavor up to 1 cubic foot of nonliving material for 1 hour. You make a color, a small mark, or a symbol appear on an object or a surface for 1 hour. You create a nonmagical trinket or an illusory image that can fit in your hand and that lasts until the end of your next turn. If you cast this spell multiple times, you can have up to three of its non-instantaneous effects active at a time, and you can dismiss such an effect as an action.",
      "url": "https://www.dnd-spells.com/spell/prestidigitation"
    },
    "phantom steed": {
      "castingTime": "1 Minute",
      "duration": "1 hour",
      "range": "30 feet",
      "components": "Verbal, Somatic",
      "slotLevel": "3",
      "school": "Illusion Ritual",
      "shortDescription": "You conjure a large quasi-real horselike creature, decide its appearance. The creature uses the statistics for a riding horse, except its speed is 100 feet and can travel 10 miles in an hour.",
      "longDescription": "A Large quasi-real, horselike creature appears on the ground in an unoccupied space of your choice within range. You decide the creatures appearance, but it is equipped with a saddle, bit, and bridle. Any of the equipment created by the spell vanishes in a puff of smoke if it is carried more than 10 feet away from the steed. For the duration, you or a creature you choose can ride the steed. The creature uses the statistics for a riding horse, except it has a speed of 100 feet and can travel 10 miles in an hour, or 13 miles at a fast pace. When the spell ends, the steed gradually fades, giving the rider 1 minute to dismount. The spell ends if you use an action to dismiss it or if the steed takes any damage.",
      "url": "https://www.dnd-spells.com/spell/phantom-steed-ritual"
    },
    "scorching ray": {
      "castingTime": "1 Action",
      "duration": "Instantaneous",
      "range": "120 feet",
      "components": "Verbal, Somatic",
      "slotLevel": "2",
      "school": "Evocation",
      "shortDescription": "Hurl three rays of fire at one or several targets. On each hit, the target takes 2d6 fire damage",
      "longDescription": "You create three rays of fire and hurl them at targets within range. You can hurl them at one target or several. Make a ranged spell attack for each ray. On a hit, the target takes 2d6 fire damage. At Higher Levels: When you cast this spell using a spell slot of 3rd level or higher, you create one additional ray for each slot level above 2nd.",
      "url": "https://www.dnd-spells.com/spell/scorching-ray",
      "damage": {
        "type": "fire damage",
        "levels": {
          1: 0,
          2: "2d6",
          3: "3d6",
          4: "4d6",
          5: "5d6",
          6: "6d6",
          7: "7d6",
          8: "8d6",
          9: "9d6"
        }
      }
    },
    "ray of enfeeblement": {
      "castingTime": "1 Action",
      "duration": "Concentration, up to 1 minute",
      "range": "60 feet",
      "components": "Verbal, Somatic",
      "slotLevel": "2",
      "school": "Necromancy",
      "shortDescription": "Needs concentration. On a ranged spell hit, target deals half damage on attacks that use strength. Spell ends on Constitution save.",
      "longDescription": "A black beam of enervating energy springs from your finger toward a creature within range. Make a ranged spell attack against the target. On a hit, the target deals only half damage with weapon attacks that use Strength until the spell ends. At the end of each of the targets turns, it can make a Constitution saving throw against the spell. On a success, the spell ends.",
      "url": "https://www.dnd-spells.com/spell/ray-of-enfeeblement"
    },
    "phantasmal force": {
      "castingTime": "1 Action",
      "duration": "Concentration, up to 1 minute",
      "range": "60 feet",
      "components": "Verbal, Somatic, Material (a bit of fleece)",
      "slotLevel": "2",
      "school": "Illusion",
      "shortDescription": "Needs concentration. Craft an illusion in the mind of a creature you can see within range. The target must make an Intelligence save or be afflicted by the phantasmal object, creature or other visible phenomenon of your choice that is no larger than 10 cubic feet that is perceivable only to the target. The target can use its action to examine the phantasm with an Intelligence(Investigation) check against your spell save DC and can detect the illusion. While affected, the target treats the phantasm as if it were real. Rationalizing any illogical outcomes from the interaction with the phantasm. A phantasmal creature can attack the target, each round on your turn the phantasm can deal 1d6 psychic damage.",
      "longDescription": "You craft an illusion that takes root in the mind of a creature that you can see within range. The target must make an Intelligence saving throw. On a failed save, you create a phantasmal object, creature, or other visible phenomenon of your choice that is no larger than a 10-foot cube and that is perceivable only to the target for the duration. This spell has no effect on undead or constructs. The phantasm includes sound, temperature, and other stimuli, also evident only to the creature. The target can use its action to examine the phantasm with an Intelligence (Investigation) check against your spell save DC. If the check succeeds, the target realizes that the phantasm is an illusion, and the spell ends. While a target is affected by the spell, the target treats the phantasm as if it were real. The target rationalizes any illogical outcomes from interacting with the phantasm. For example, a target attempting to walk across a phantasmal bridge that spans a chasm falls once it steps onto the bridge. If the target survives the fall, it still believes that the bridge exists and comes up with some other explanation for its fall, it was pushed, it slipped, or a strong wind might have knocked it off. An affected target is so convinced of the phantasms reality that it can even take damage from the illusion. A phantasm created to appear as a creature can attack the target. Similarly, a phantasm created to appear as fire, a pool of acid, or lava can burn the target. Each round on your turn, the phantasm can deal 1d6 psychic damage to the target if it is in the phantasms area or within 5 feet of the phantasm, provided that the illusion is of a creature or hazard that could logically deal damage, such as by attacking. The target perceives the damage as a type appropriate to the illusion.",
      "url": "https://www.dnd-spells.com/spell/phantasmal-force",
      "damage": "Complex Damage Progression. Please consult short or long descriptions"
    },
    "word of recall": {
      "castingTime": "1 Action",
      "duration": "Instantaneous",
      "range": "5 feet",
      "components": "Verbal",
      "slotLevel": "6",
      "school": "Conjuration",
      "shortDescription": "You and up to five willing creatures within 5 feet of you instantly teleport to a previously designated sanctuary. If you cast this spell without first preparing a sanctuary, the spell has no effect. You must designate a sanctuary by casting this spell within a location dedicated to or strongly linked to your deity.",
      "longDescription": "You and up to five willing creatures within 5 feet of you instantly teleport to a previously designated sanctuary. You and any creatures that teleport with you appear in the nearest unoccupied space to the spot you designated when you prepared your sanctuary (see below). If you cast this spell without first preparing a sanctuary, the spell has no effect. You must designate a sanctuary by casting this spell within a location, such as a temple, dedicated to or strongly linked to your deity. If you attempt to cast the spell in this manner in an area that isnt dedicated to your deity, the spell has no effect.",
      "url": "https://www.dnd-spells.com/spell/word-of-recall"
    },
    "entangle": {
      "castingTime": "1 Action",
      "duration": "Concentration, up to 1 minute",
      "range": "90 feet",
      "components": "Verbal, Somatic",
      "slotLevel": "1",
      "school": "Conjuration",
      "shortDescription": "Needs concentration. Conjure grasping weeds and vines in a 20 foot square from a point within range. These plants turn the terrain into difficult terrain, any creature in the area when you cast the spell must make a Strength save or be restrained until the end of the spell. A restrained creature can use its action to make a Strength check against your spell save DC to break free.",
      "longDescription": "Grasping weeds and vines sprout from the ground in a 20-foot square starting from a point within range. For the duration, these plants turn the ground in the area into difficult terrain. A creature in the area when you cast the spell must succeed on a Strength saving throw or be restrained by the entangling plants until the spell ends. A creature restrained by the plants can use its action to make a Strength check against your spell save DC. On a success,it frees itself. When the spell ends, the conjured plants wilt away.",
      "url": "https://www.dnd-spells.com/spell/entangle"
    },
    "faerie fire": {
      "castingTime": "1 Action",
      "duration": "Concentration, up to 1 minute",
      "range": "60 feet",
      "components": "Verbal",
      "slotLevel": "1",
      "school": "Evocation",
      "shortDescription": "Needs concentration. Each object in a 20-foot cube within range is outlined in blue, green, or violet light (your choice). Any creature in the area when the spell is cast is also outlined in light if it fails a Dexterity saving throw. For the duration, objects and affected creatures shed dim light in a 10-foot radius. Any attack roll against an affected creature or object has advantage if the attacker can see it, and the affected creature or object cant benefit from being invisible.",
      "longDescription": "Each object in a 20-foot cube within range is outlined in blue, green, or violet light (your choice). Any creature in the area when the spell is cast is also outlined in light if it fails a Dexterity saving throw. For the duration, objects and affected creatures shed dim light in a 10-foot radius. Any attack roll against an affected creature or object has advantage if the attacker can see it, and the affected creature or object cant benefit from being invisible.",
      "url": "https://www.dnd-spells.com/spell/faerie-fire"
    },
    "arcane lock": {
      "castingTime": "1 Action",
      "duration": "Until dispelled",
      "range": "Touch",
      "components": "Verbal, Somatic, Material (gold dust worth at least 25 gold pieces, which the spell consumes)",
      "slotLevel": "2",
      "school": "Abjuration",
      "shortDescription": "Touch a closed door, window, gate, chest, or other entryway and it becomes locked for the duration. You and the creatures you designate when you cast this spell can open the object normally. You can set a password that when spoken within 5 feet of the object suppresses this spell for 1 minute. Casting knock suppresses the spell for 10 minutes.",
      "longDescription": "You touch a closed door, window, gate, chest, or other entryway, and it becomes locked for the duration. You and the creatures you designate when you cast this spell can open the object normally. You can also set a password that, when spoken within 5 feet of the object, suppresses this spell for 1 minute. Otherwise, it is impassable until it is broken or the spell is dispelled or suppressed. Casting knock on the object suppresses arcane lock for 10 minutes. While affected by this spell, the object is more difficult to break or force open; the DC to break it or pick any locks on it increases by 10.",
      "url": "https://www.dnd-spells.com/spell/arcane-lock"
    },
    "banishment": {
      "castingTime": "1 Action",
      "duration": "Concentration, up to 1 minute",
      "range": "60 feet",
      "components": "Verbal, Somatic, Material (an item distasteful to the target)",
      "slotLevel": "4",
      "school": "Abjuration",
      "shortDescription": "Needs concentration. You attempt to send one creature that you can see within range to another plane of existence. The target must succeed on a Charism save or be banished. If the target is native to the plane youre on, you banish it to a harmless demiplane, while there it is incapacitated. If the target is native to a different plane of existence it is banished to its home plane. When cast using 5th level or higher, you can target one additional creature for each slot above 4th.",
      "longDescription": "You attempt to send one creature that you can see within range to another plane of existence. The target must succeed on a Charisma saving throw or be banished. If the target is native to the plane of existence youre on, you banish the target to a harmless demiplane. While there, the target is incapacitated. The target remains there until the spell ends, at which point the target reappears in the space it left or in the nearest unoccupied space if that space is occupied. If the target is native to a different plane of existence than the one youre on, the target is banished with a faint popping noise, returning to its home plane. If the spell ends before 1 minute has passed, the target reappears in the space it left or in the nearest unoccupied space if that space is occupied. Otherwise, the target doesnt return. At Higher Levels. When you cast this spell using a spell slot of 5th level or higher, you can target one additional creature for each slot level above 4th.",
      "url": "https://www.dnd-spells.com/spell/banishment"
    },
    "wall of thorns": {
      "castingTime": "1 Action",
      "duration": "Concentration, up to 10 minutes",
      "range": "120 feet",
      "components": "Verbal, Somatic, Material (a handful of thorns)",
      "slotLevel": "6",
      "school": "Conjuration",
      "shortDescription": "Needs concentration. Create a wall of tough, tangled brush bristling with needle-sharp thorns on a surface within range. The wall can be up to 60 feet long, 10 feet high, and 5 feet thick or a circle that has a 20 foot diameter, up to 20 feet high and 5 feet thick. The wall blocks line of sight, each creature within its area must make a Dexterity save or take 7d8 piercing damage or half on a success. The first time a creature enters the wall on a turn or ends its there, it must make a Dexterity save or take 7d8 slashing damage or half on a success. When cast using a spell slot of7th level or higher both types of damage increases by 1d8 for each slot above 6th.",
      "longDescription": "You create a wall of tough, pliable, tangled brush bristling with needle-sharp thorns. The wall appears within range on a solid surface and lasts for the duration. You choose to make the wall up to 60 feet long, 10 feet high, and 5 feet thick or a circle that has a 20-foot diameter and is up to 20 feet high and 5 feet thick. The wall blocks line of sight. When the wall appears, each creature within its area must make a Dexterity saving throw. On a failed save, a creature takes 7d8 piercing damage, or half as much damage on a successful save. A creature can move through the wall, albeit slowly and painfully. For every 1 foot a creature moves through the wall, it must spend 4 feet of movement. Furthermore, the first time a creature enters the wall on a turn or ends its turn there, the creature must make a Dexterity saving throw. It takes 7d8 slashing damage on a failed save, or half as much damage on a successful one. At Higher Levels: When you cast this spell using a spell slot of 7th level or higher, both types of damage increase by 1d8 for each slot level above 6th.",
      "url": "https://www.dnd-spells.com/spell/wall-of-thorns",
      "damage": {
        "type": "peircing damage",
        "levels": {
          1: 0,
          2: 0,
          3: 0,
          4: 0,
          5: 0,
          6: "7d8",
          7: "8d8",
          8: "9d8",
          9: "10d8"
        }
      }
    },
    "wall of force": {
      "castingTime": "1 Action",
      "duration": "Concentration, up to 10 minutes",
      "range": "120 feet",
      "components": "Verbal, Somatic, Material (a pinch of powder made by crushing a clear gemstone)",
      "slotLevel": "5",
      "school": "Evocation",
      "shortDescription": "Needs concentration. Create an invisible wall of force that appears in any orientation you choose, it can be free floating or resting on a solid surface. You can form it into a hemispherical dome or a sphere with a radius of up to 10 feet or choose a flat surface made up of ten 10 by 10 foot panels, each panel must be contiguous to each other. It is immune to all damage and cant be dispelled by dispel magic. A disintegrate spell destroys the wall instantly. The wall extends into the Ethereal plane.",
      "longDescription": "An invisible wall of force springs into existence at a point you choose within range. The wall appears in any orientation you choose, as a horizontal or vertical barrier or at an angle. It can be free floating or resting on a solid surface. You can form it into a hemispherical dome or a sphere with a radius of up to 10 feet, or you can shape a flat surface made up of ten 10-foot-by-10-foot panels. Each panel must be contiguous with another panel. In any form, the wall is 1/4 inch thick. It lasts for the duration. If the wall cuts through a creatures space when it appears, the creature is pushed to one side of the wall (your choice which side). Nothing can physically pass through the wall. It is immune to all damage and cant be dispelled by dispel magic. A disintegrate spell destroys the wall instantly, however. The wall also extends into the Ethereal Plane, blocking ethereal travel through the wall.",
      "url": "https://www.dnd-spells.com/spell/wall-of-force"
    },
    "mordenkainens private sanctum": {
      "castingTime": "10 Minutes",
      "duration": "24 hours",
      "range": "120 feet",
      "components": "Verbal, Somatic, Material (a thin sheet of lead, a piece of opaque glass, a wad of cotton or cloth, and powdered chrysolite)",
      "slotLevel": "4",
      "school": "Abjuration",
      "shortDescription": "Make an area within range magically secure, the area is a cube that can be as small as 5 feet or as large as 100 feet on each side. Choose any or all of the following security features: Sound cant pass through the barrier at the edge of the warded area. The barrier of the warded area appears dark and foggy, preventing vision through it. Sensors created by divination spells cant appear inside the protected area or pass through the barrier as its perimeter. Creatures in the area cant be targeted by divination spells. Nothing can teleport into or out of the warded area. Planar travel is blocked within the warded area. Casting this spell on the same spot every day for a year makes it permanent. When cast using a spell slot of 5th level or higher, increase the size of the cube by 100 feet for each slot above 4th.",
      "longDescription": "You make an area within range magically secure. The area is a cube that can be as small as 5 feet to as large as 100 feet on each side. The spell lasts for the duration or until you use an action to dismiss it. When you cast the spell, you decide what sort of security the spell provides, choosing any or all of the following properties. Sound cant pass through the barrier at the edge of the warded area. The barrier of the warded area appears dark and foggy, preventing vision (including darkvision) through it. Sensors created by divination spells cant appear inside the protected area or pass through the barrier at its perimeter. Creatures in the area cant be targeted by divination spells. Nothing can teleport into or out of the warded area. Planar travel is blocked within the warded area. Casting this spell on the same spot every day for a year makes this effect permanent. At Higher Levels: When you cast this spell using a spell slot of 5th level or higher, you can increase the size of the cube by 100 feet for each slot level beyond 4th. Thus you could protect a cube that can be up to 200 feet on one side by using a spell slot of 5th level.",
      "url": "https://www.dnd-spells.com/spell/mordenkainens-private-sanctum"
    },
    "cone of cold": {
      "castingTime": "1 Action",
      "duration": "Instantaneous",
      "range": "Self (60-foot cone)",
      "components": "Verbal, Somatic, Material  (a small crystal or glass cone)",
      "slotLevel": "5",
      "school": "Evocation",
      "shortDescription": "Each creature in a 60 foot cone from you must make a Constitution save or take 8d8 cold damage or half on a success. When cast using a spell slot of 6th level or higher, increase the damage by 1d8 for each slot above 5th.",
      "longDescription": "A blast of cold air erupts from your hands. Each creature in a 60-foot cone must make a Constitution saving throw. A creature takes 8d8 cold damage on a failed save, or half as much damage on a successful one. A creature killed by this spell becomes a frozen statue until it thaws. At Higher Levels: When you cast this spell using a spell slot of 6th level or higher, the damage increases by 1d8 for each slot level above 5th.",
      "url": "https://www.dnd-spells.com/spell/cone-of-cold",
      "damage": {
        "type": "cold damage",
        "levels": {
          1: 0,
          2: 0,
          3: 0,
          4: 0,
          5: "8d8",
          6: "9d8",
          7: "10d8",
          8: "11d8",
          9: "12d8"
        }
      }
    },
    "antilife shell": {
      "castingTime": "1 Action",
      "duration": "Concentration, up to 1 hour",
      "range": "Self (10-foot radius)",
      "components": "Verbal, Somatic",
      "slotLevel": "5",
      "school": "Abjuration",
      "shortDescription": "Needs concentration. A shimmering barrier extends out from you in a 10 foot radius and moves with you. The barrier prevents an affected creature from passing or reaching through, however they can cast spells or make attacks with a ranged or reach weapon through the barrier.",
      "longDescription": "A shimmering barrier extends out from you in a 10-foot radius and moves with you, remaining centered on you and hedging out creatures other than undead and constructs. The barrier lasts for the duration. The barrier prevents an affected creature from passing or reaching through. An affected creature can cast spells or make attacks with ranged or reach weapons through the barrier. If you move so that an affected creature is forced to pass through the barrier, the spell ends.",
      "url": "https://www.dnd-spells.com/spell/antilife-shell"
    },
    "globe of invulnerability": {
      "castingTime": "1 Action",
      "duration": "Concentration, up to 1 minute",
      "range": "Self (10-foot radius)",
      "components": "Verbal, Somatic, Material (a glass or crystal bead that shatters when the spell ends)",
      "slotLevel": "6",
      "school": "Abjuration",
      "shortDescription": "Needs concentration. An immobile barrier is created in a 10 foot radius around you. Any spell of 5th or lower cast from outside the barrier cant affect creatures or objects within. When cast using a spell slot of 7th level or higher, the barrier blocks spells of one level higher for each slot above 6th.",
      "longDescription": "An immobile, faintly shimmering barrier springs into existence in a 10-foot radius around you and remains for the duration. Any spell of 5th level or lower cast from outside the barrier cant affect creatures or objects within it, even if the spell is cast using a higher level spell slot. Such a spell can target creatures and objects within the barrier, but the spell has no effect on them. Similarly, the area within the barrier is excluded from the areas affected by such spells. At Higher Levels: When you cast this spell using a spell slot of 7th level or higher, the barrier blocks spells of one level higher for each slot level above 6th.",
      "url": "https://www.dnd-spells.com/spell/globe-of-invulnerability"
    },
    "aid": {
      "castingTime": "1 Action",
      "duration": "8 hours",
      "range": "30 feet",
      "components": "Verbal, Somatic, Material (a tiny strip of white cloth)",
      "slotLevel": "2",
      "school": "Abjuration",
      "shortDescription": "Choose up to three creatures within range. Each targets hit point maximum and current hit points increase by 5. When cast using a spell slot of 3rd level or higher, increase the hit points by an additional 5 for each slot above 2nd.",
      "longDescription": "Your spell bolsters your allies with toughness and resolve. Choose up to three creatures within range. Each targets hit point maximum and current hit points increase by 5 for the duration. At Higher Levels: When you cast this spell using a spell slot of 3rd level or higher, a targets hit points increase by an additional 5 for each slot level above 2nd.",
      "url": "https://www.dnd-spells.com/spell/aid"
    },
    "primordial ward": {
      "castingTime": "1 Action",
      "duration": "Concentration, up to 1 minute",
      "range": "Self",
      "components": "Verbal, Somatic",
      "slotLevel": "6",
      "school": "Abjuration",
      "shortDescription": "Needs concentration. You gain resistance to acid, cold, fire, lightning, and thunder damage for the duration. When you take damage of one of those types, you can use your reaction to gain immunity to that type of damage, including against the triggering damage. If you do so, the resistances end, and you have the immunity until the end of your next turn, at which time the spell ends.",
      "longDescription": "You have resistance to acid, cold, fire, lightning, and thunder damage for the spells duration. When you take damage of one of those types, you can use your reaction to gain immunity to that type of damage, including against the triggering damage. If you do so, the resistances end, and you have the immunity until the end of your next turn, at which time the spell ends.",
      "url": "https://www.dnd-spells.com/spell/primordial-ward"
    },
    "identify": {
      "castingTime": "1 Minute",
      "duration": "Instantaneous",
      "range": "Touch",
      "components": "Verbal, Somatic, Material (a pearl worth at least 100 gold pieces and an owl feather)",
      "slotLevel": "1",
      "school": "Divination Ritual",
      "shortDescription": "You choose one object that you must touch throughout the casting of the spell. If it is a magic item or some other magic-imbued object, you learn its properties and how to use them, whether it requires attunement to use, and how many charges it has, if any. You learn whether any spells are affecting the item and what they are. If the item was created by a spell, you learn which spell created it. If you instead touch a creature throughout the casting, you learn what spells, if any, are currently affecting it.",
      "longDescription": "You choose one object that you must touch throughout the casting of the spell. If it is a magic item or some other magic-imbued object, you learn its properties and how to use them, whether it requires attunement to use, and how many charges it has, if any. You learn whether any spells are affecting the item and what they are. If the item was created by a spell, you learn which spell created it. If you instead touch a creature throughout the casting, you learn what spells, if any, are currently affecting it.",
      "url": "https://www.dnd-spells.com/spell/identify-ritual"
    },
    "crown of madness": {
      "castingTime": "1 Action",
      "duration": "Concentration, up to 1 minute",
      "range": "120 feet",
      "components": "Verbal, Somatic",
      "slotLevel": "2",
      "school": "Enchantment",
      "shortDescription": "Needs concentration. Choose one humanoid within range, they must succeed on a Wisdom save or be charmed. While charmed the target must use its action before moving on each of its turns to make a melee attack against a creature other than itself that you choose. On your subsequent turns you must use your action to maintain control. The target can make a Wisdom save at the end of each of its turns to break free.",
      "longDescription": "One humanoid of your choice that you can see within range must succeed on a wisdom saving throw or become charmed by you for the duration. While the target is charmed in this way, a twisted crown of jagged iron appears on its head, and a madness glows in its eyes. The charmed target must use its action before moving on each of its turns to make a melee attack against a creature other than itself that you mentally choose. The target can act normally on its turn if you choose no creature or if none are within its reach. On your subsequent turns, you must use your action to maintain control over the target, or the spell ends. Also, the target can make a Wisdom saving throw at the end of each of its turns. On a success, the spell ends.",
      "url": "https://www.dnd-spells.com/spell/crown-of-madness"
    },
    "forcecage": {
      "castingTime": "1 Action",
      "duration": "1 hour",
      "range": "100 feet",
      "components": "Verbal, Somatic, Material (ruby dust worth 1,500 gold pieces)",
      "slotLevel": "7",
      "school": "Evocation",
      "shortDescription": "An immobile, invisible, cube-shaped prison composed of magical force appears around an area you choose within range. A prison in the shape of a cage can be up to 20 feet on a side, is made of 1/2 inch diameter bars spaced 1/2 inch apart. A prison in the shape of a box can be up to 10 feet on a side, creating a solid barrier that prevents any matter from passing through it and blocking any spells cast into or out from the area. Any creature that is completely inside the cages area is trapped, and cant leave by nonmagical means. If the creature tries to use teleportation or interplanar travel to leave the cage, it must first make a Charisma saving throw. The cage also extends into the Ethereal Plane, blocking ethereal travel.",
      "longDescription": "An immobile, invisible, cube-shaped prison composed of magical force springs into existence around an area you choose within range. The prison can be a cage or a solid box, as you choose. A prison in the shape of a cage can be up to 20 feet on a side and is made from 1/2-inch diameter bars spaced 1/2 inch apart. A prison in the shape of a box can be up to 10 feet on a side, creating a solid barrier that prevents any matter from passing through it and blocking any spells cast into or out from the area. When you cast the spell, any creature that is completely inside the cages area is trapped. Creatures only partially within the area, or those too large to fit inside the area, are pushed away from the center of the area until they are completely outside the area. A creature inside the cage cant leave it by nonmagical means. If the creature tries to use teleportation or interplanar travel to leave the cage, it must first make a Charisma saving throw. On a success, the creature can use that magic to exit the cage. On a failure, the creature cant exit the cage and wastes the use of the spell or effect. The cage also extends into the Ethereal Plane, blocking ethereal travel. This spell cant be dispelled by dispel magic.",
      "url": "https://www.dnd-spells.com/spell/forcecage"
    },
    "greater restoration": {
      "castingTime": "1 Action",
      "duration": "Instantaneous",
      "range": "Touch",
      "components": "Verbal, Somatic, Material (diamond dust worth at least 100 gold pieces, which the spell consumes)",
      "slotLevel": "5",
      "school": "Abjuration",
      "shortDescription": "Reduce a targets exhaustion by one level, or end one of the four following effects: One effect that charmed or petrified the target, one curse, any reduction to one of the targets ability scores, or one effect reducing the targets hit point maximum.",
      "longDescription": "You imbue a creature you touch with positive energy to undo a debilitating effect. You can reduce the targets exhaustion level by one, or end one of the four following effects on the target: 1) One effect that charmed or petrified the target, 2) One curse, including the targets attunement to a cursed magic item, 3) Any reduction to one of the targets ability scores, 4) One effect reducing the targets hit point maximum",
      "url": "https://www.dnd-spells.com/spell/greater-restoration"
    },
    "remove curse": {
      "castingTime": "1 Action",
      "duration": "Instantaneous",
      "range": "Touch",
      "components": "Verbal, Somatic",
      "slotLevel": "3",
      "school": "Abjuration",
      "shortDescription": "All curses affecting a creature or object end, and you can discard cursed magic items",
      "longDescription": "At your touch, all curses affecting one creature or object end. If the object is a cursed magic item, its curse remains, but the spell breaks its owners attunement to the object so it can be removed or discarded.",
      "url": "https://www.dnd-spells.com/spell/remove-curse"
    },
    "water walk": {
      "castingTime": "1 Action",
      "duration": "1 hour",
      "range": "30 feet",
      "components": "Verbal, Somatic, Material (a piece of cork)",
      "slotLevel": "3",
      "school": "Transmutation Ritual",
      "shortDescription": "Up to ten creatures can walk on any liquid surface",
      "longDescription": "This spell grants the ability to move across any liquid surface such as water, acid, mud, snow, quicksand, or lava, as if it were harmless solid ground (creatures crossing molten lava can still take damage from the heat). Up to ten willing creatures you can see within range gain this ability for the duration. If you target a creature submerged in a liquid, the spell carries the target to the surface of the liquid at a rate of 60 feet per round.",
      "url": "https://www.dnd-spells.com/spell/water-walk-ritual"
    },
    "mage armor": {
      "castingTime": "1 Action",
      "duration": "8 hours",
      "range": "Touch",
      "components": "Verbal, Somatic, Material (a piece of cured leather)",
      "slotLevel": "1",
      "school": "Abjuration",
      "shortDescription": "Unarmored creatures base AC becomes 13 + its dex modifier.",
      "longDescription": "You touch a willing creature who isnt wearing armor, and a protective magical force surrounds it until the spell ends. The targets base AC becomes 13 + its Dexterity modifier. The spell ends if the target dons armor or if you dismiss the spell as an action.",
      "url": "https://www.dnd-spells.com/spell/mage-armor"
    },
    "melfs minute meteors": {
      "castingTime": "1 Action",
      "duration": "Concentration, up to 10 minutes",
      "range": "Self",
      "components": "Verbal, Somatic, Material (niter, sulfur, and pine tar formed into a bead)",
      "slotLevel": "3",
      "school": "Evocation",
      "shortDescription": "Needs concentration. Conjure 6 tiny meteors in your space that float in the air and orbit around you for the duration. When you cast the spell and as a bonus action on each of your turns, you can expend one or two meteors sending them streaking toward a point or points you choose within 120 feet of you. When the meteor reaches its destination or impacts against a solid surface, it explodes. Each creature within 5 feet of the explosion, must make a Dexterity save or take 2d6 fire damage, or half on a success. When cast using a spell slot of 4th level or higher increase the number of meteors by two for each level above 3rd.",
      "longDescription": "You create six tiny meteors in your space. They float in the air and orbit you for the spells duration. When you cast the spell, and as a bonus action on each of your turns thereafter, you can expend one or two of the meteors, sending them streaking toward a point or points you choose within 120 feet of you. Once a meteor reaches its destination or impacts against a solid surface, the meteor explodes. Each creature within 5 feet of the point where the meteor explodes must make a Dexterity saving throw. A creature takes 2d6 fire damage on a failed save, or half as much damage on a successful one. At Higher Levels: When you cast this spell using a spell slot of 4th level or higher, the number of meteors created increases by two for each slot level above 3rd.",
      "url": "https://www.dnd-spells.com/spell/melfs-minute-meteors",
      "damage": {
        "type": "fire damage",
        "levels": {
          1: 0,
          2: 0,
          3: "2d6",
          4: "3d6",
          5: "4d6",
          6: "5d6",
          7: "6d6",
          8: "7d6",
          9: "8d6"
        }
      }
    },
    "hold monster": {
      "castingTime": "1 Action",
      "duration": "Concentration, up to 1 minute",
      "range": "90 feet",
      "components": "Verbal, Somatic, Material (a small, straight piece of iron)",
      "slotLevel": "5",
      "school": "Enchantment",
      "shortDescription": "Needs concentration. Choose a creature that you can see within range. The target must succeed on a Wisdom saving throw or be paralyzed for the duration. This spell has no effect on undead. At the end of each of its turns, the target can make another Wisdom saving throw. On a success, the spell ends on the target. At Higher Levels: When you cast this spell using a spell slot of 6th level or higher, you can target one additional creature for each slot level above 5th. The creatures must be within 30 feet of each other when you target them.",
      "longDescription": "Choose a creature that you can see within range. The target must succeed on a Wisdom saving throw or be paralyzed for the duration. This spell has no effect on undead. At the end of each of its turns, the target can make another Wisdom saving throw. On a success, the spell ends on the target. At Higher Levels: When you cast this spell using a spell slot of 6th level or higher, you can target one additional creature for each slot level above 5th. The creatures must be within 30 feet of each other when you target them.",
      "url": "https://www.dnd-spells.com/spell/hold-monster"
    },
    "drawmijs instant summons": {
      "castingTime": "1 Minute",
      "duration": "Until dispelled",
      "range": "Touch",
      "components": "Verbal, Somatic, Material  (a sapphire worth 1,000 gold pieces)",
      "slotLevel": "6",
      "school": "Conjuration Ritual",
      "shortDescription": "Touch an object weighing 10 pounds or less whose longest dimension is 6 feet or less. Each time you cast this spell you must use a different sapphire, at any time thereafter you can use your action to speak the items name, crushing the sapphire, and the item appears in your hand.",
      "longDescription": "You touch an object weighing 10 pounds or less whose longest dimension is 6 feet or less. The spell leaves an invisible mark on its surface and invisibly inscribes the name of the item on the sapphire you use as the material component. Each time you cast this spell, you must use a different sapphire. At any time thereafter, you can use your action to speak the items name and crush the sapphire. The item instantly appears in your hand regardless of physical or planar distances, and the spell ends. If another creature is holding or carrying the item, crushing the sapphire doesnt transport the item to you, but instead you learn who the creature possessing the object is and roughly where that creature is located at that moment. Dispel magic or a similar effect successfully applied to the sapphire ends this spells effect.",
      "url": "https://www.dnd-spells.com/spell/drawmijs-instant-summons-ritual"
    },
    "bigbys hand": {
      "castingTime": "1 Action",
      "duration": "Concentration, up to 1 minute",
      "range": "120 feet",
      "components": "Verbal, Somatic, Material  (An eggshell and a snakeskin glove) ",
      "slotLevel": "5",
      "school": "Evocation",
      "shortDescription": "Needs concentration. Conjure a large translucent hand of force, that moves at your command, mimicking the movements of your own hand. The hand has AC 20 and hit points equal to your own maximum. It has a strength of 26(+8) and a Dexterity of 10(+0). When you cast this spell and as a bonus action on your next turns, you can move the hand up to 60 feet and then cause one of the following four effects: 1) Clenched fist, the hand strikes one creature or object within 5 feet of it, make a melee spell attack for the hand using your game stats. On a hit the target takes 4d8 force damage. 2) Forceful hand, the hand attempts to push a creature within 5 feet of it in a direction you choose. Make a Strength check using the hands Strength, against the Strength(Athletics) of the target. If the target is medium or smaller gain advantage on the check. On success, push the target up to 5 ft plus a number of ft equal to 5x your spellcasting mod, the hand moves with the target to remain within 5ft of it. 3) Grasping hand, the hand attempts to grapple a huge or smaller creature, use the hands Strength score to resolve the grapple, if the target is medium or smaller gain advantage. While the hand is grappling, you can use your bonus action to have the hand crush it. The target takes 2d6+ your spellcasting mod bludgeoning damage. 4) Interposing hand, the hand interposes itself between you and a creature you choose until commanded otherwise, providing half cover against the target. When cast using a spell slot of 6th level or higher, increase the damage for clenched fist by 2d8, and grasping hand by 2d6 for each slot above 5th.",
      "longDescription": "You create a Large hand of shimmering translucent force in an unoccupied space that you can see within range. The hand lasts for the spells duration, and it moves at your command, mimicking the movements of your own hand. The hand is an object that has AC 20 and hit points equal to your hit point maximum. If it drops to 0 hit points, the spell ends. It has a Strength of 26 (+8) and a Dexterity of 10 (+0). The hand doesnt fill its space. When you cast the spell and as a bonus action on your subsequent turns, you can move the hand up to 60 feet and then cause one of the following 4 effects with it. 1) Clenched Fist. The hand strikes one creature or object within 5 feet of it. Make a melee spell attack for the hand using your game statistics. On a hit, the target takes 4d8 force damage. 2) Forceful Hand. The hand attempts to push a creature within 5 feet of it in a direction you choose. Make a check with the hands Strength contested by the Strength (Athletics) check of the target. If the target is Medium or smaller, you have advantage on the check. If you succeed, the hand pushes the target up to 5 feet plus a number of feet equal to five times your spellcasting ability modifier. The hand moves with the target to remain within 5 feet of it. 3) Grasping Hand. The hand attempts to grapple a Huge or smaller creature within 5 feet of it. You use the hands Strength score to resolve the grapple. If the target is Medium or smaller, you have advantage on the check. While the hand is grappling the target, you can use a bonus action to have the hand crush it. When you do so, the target takes bludgeoning damage equal to 2d6 + your spellcasting ability modifier. 4) Interposing Hand. The hand interposes itself between you and a creature you choose until you give the hand a different command. The hand moves to stay between you and the target, providing you with half cover against the target. The target cant move through the hands space if its Strength score is less than or equal to the hands Strength score. If its Strength score is higher than the hands Strength score, the target can move toward you through the hands space, but that space is difficult terrain for the target. At Higher Levels: When you cast this spell using a spell slot of 6th level or higher, the damage from the clenched fist option increases by 2d8 and the damage from the grasping hand increases by 2d6 for each slot level above 5th.",
      "url": "https://www.dnd-spells.com/spell/bigbys-hand",
      "damage": {
        "type": "force damage",
        "levels": {
          1: 0,
          2: 0,
          3: 0,
          4: 0,
          5: "4d8",
          6: "5d8",
          7: "6d8",
          8: "7d8",
          9: "8d8"
        }
      }
    },
    "teleport": {
      "castingTime": "1 Action",
      "duration": "Instantaneous",
      "range": "10 feet",
      "components": "Verbal",
      "slotLevel": "7",
      "school": "Conjuration",
      "shortDescription": "Instantly transport you and up to 8 willing creatures to a destination you select. The destination must be known to you, and on the same plane of existence. Your familiarity with the destination determines the success of arrival. The Dm rolls a d100 and consults the table in the Alexa app or on page 281 in the Players handbook.",
      "longDescription": "This spell instantly transports you and up to eight willing creatures of your choice that you can see within range, or a single object that you can see within range, to a destination you select. If you target an object, it must be able to fit entirely inside a 10-foot cube, and it cant be held or carried by an unwilling creature. The destination you choose must be known to you, and it must be on the same plane of existence as you. Your familiarity with the destination determines whether you arrive there successfully. The D. M. rolls d100 and consults the table in the Alexa app or on page 281 of the players handbook. Familiarity. Permanent circle means a permanent teleportation circle whose sigil sequence you know. Associated object means that you possess an object taken from the desired destination within the last six months, such as a book from a wizards library, bed linen from a royal suite, or a chunk of marble from a lichs secret tomb. Very familiar is a place you have been very often, a place you have carefully studied, or a place you can see when you cast the spell. Seen casually is someplace you have seen more than once but with which you arent very familiar. Viewed once is a place you have seen once, possibly using magic. Description is a place whose location and appearance you know through som eone elses description, perhaps from a map. False destination is a place that doesnt exist. Perhaps you tried to scry an enemys sanctum but instead viewed an illusion, or you are attempting to teleport to a familiar location that no longer exists. On Target. You and your group (or the target object) appear where you want to. Off Target. You and your group (or the target object) appear a random distance away from the destination in a random direction. Distance off target is 1d10 x 1d10 percent of the distance that was to be traveled. For example, if you tried to travel 120 miles, landed off target, and rolled a 5 and 3 on the two d10s, then you would be off target by 15 percent, or 18 miles. The D. M. determines the direction off target randomly by rolling a d8 and designating 1 as north, 2 as northeast, 3 as east, and so on around the points of the compass. If you were teleporting to a coastal city and wound up 18 miles out at sea, you could be in trouble. Similar Area. You and your group (or the target object) wind up in a different area thats visually or thematically similar to the target area. If you are heading for your home laboratory, for example, you might wind up in another wizards laboratory or in an alchemical supply shop that has many of the same tools and implements as your laboratory. Generally, you appear in the closest similar place, but since the spell has no range limit, you could conceivably wind up anywhere on the plane. Mishap. The spells unpredictable magic results in a difficult journey. Each teleporting creature (or the target object) takes 3d10 force damage, and the D. M. rerolls on the table to see where you wind up (multiple mishaps can occur, dealing damage each time).",
      "url": "https://www.dnd-spells.com/spell/teleport",
      "damage": "Complex Damage Progression. Please consult short or long descriptions"
    },
    "continual flame": {
      "castingTime": "1 Action",
      "duration": "Until dispelled",
      "range": "Touch",
      "components": "Verbal, Somatic, Material(ruby dust worth 50 gold pieces, which the spell consumes)",
      "slotLevel": "2",
      "school": "Evocation",
      "shortDescription": "A flame, equivalent in brightness to a torch, springs forth from an object that you touch. The effect looks like a regular flame, but it creates no heat and doesnt use oxygen. A continual flame can be covered or hidden but not smothered or quenched.",
      "longDescription": "A flame, equivalent in brightness to a torch, springs forth from an object that you touch. The effect looks like a regular flame, but it creates no heat and doesnt use oxygen. A continual flame can be covered or hidden but not smothered or quenched.",
      "url": "https://www.dnd-spells.com/spell/continual-flame"
    },
    "power word stun": {
      "castingTime": "1 Action",
      "duration": "Instantaneous",
      "range": "60 feet",
      "components": "Verbal",
      "slotLevel": "8",
      "school": "Enchantment",
      "shortDescription": "Target with less than 150 health is stunned until it makes a Constitution save.",
      "longDescription": "You speak a word of power that can overwhelm the mind of one creature you can see within range, leaving it dumbfounded. If the target has 150 hit points or fewer, it is stunned. Otherwise, the spell has no effect. The stunned target must make a Constitution saving throw at the end of each of its turns. On a successful save, this stunning effect ends.",
      "url": "https://www.dnd-spells.com/spell/power-word-stun"
    },
    "pyrotechnics": {
      "castingTime": "1 Action",
      "duration": "Instantaneous",
      "range": "60 feet",
      "components": "Verbal, Somatic",
      "slotLevel": "2",
      "school": "Transmutation",
      "shortDescription": "Choose an area of flame that can fit within a 5ft cube within range. You can extinguish the fire, and create either fireworks or smoke. Fireworks: the target explodes in a display of colors, each creature within 10 feet of the target must succeed on a Constitution save or be blinded until the end of your next turn. Smoke: thick smoke spreads out from the target in a 20ft radius, heavily obscuring the area and lasts for 1 minute.",
      "longDescription": "Choose an area of flame that you can see and that can fit within a 5-foot cube within range. You can extinguish the fire in that area, and you create either fireworks or smoke. Fireworks. The target explodes with a dazzling display of colors. Each creature within 10 feet of the target must succeed on a Constitution saving throw or become blinded until the end of your next turn. Smoke. Thick black smoke spreads out from the target in a 20-foot radius, moving around corners. The area of the smoke is heavily obscured. The smoke persists for 1 minute or until a strong wind disperses it.",
      "url": "https://www.dnd-spells.com/spell/pyrotechnics"
    },
    "mirror image": {
      "castingTime": "1 Action",
      "duration": "1 minute",
      "range": "Self",
      "components": "Verbal, Somatic",
      "slotLevel": "2",
      "school": "Illusion",
      "shortDescription": "Create 3 illusory duplicates of yourself in your space. Until the spell ends, the duplicates move with you and mimic your actions. Each time a creature targets you with an attack roll a d20 to determine whether the attack instead targets a duplicate. If you have 3 duplicates, you must roll a 6 or higher to change the attack, with 2 duplicates, roll an 8 or higher, and with one duplicate roll an 11 or higher. A duplicates AC equals 10 + your Dexterity mod. A duplicate is destroyed only by an attack that hits it.",
      "longDescription": "Three illusory duplicates of yourself appear in your space. Until the spell ends, the duplicates move with you and mimic your actions, shifting position so its impossible to track which image is real. You can use your action to dismiss the illusory duplicates. Each time a creature targets you with an attack during the spells duration, roll a d20 to determine whether the attack instead targets one of your duplicates. If you have three duplicates, you must roll a 6 or higher to change the attacks target to a duplicate. With two duplicates, you must roll an 8 or higher. With one duplicate, you must roll an 11 or higher. A duplicates AC equals 10 + your Dexterity modifier. If an attack hits a duplicate, the duplicate is destroyed. A duplicate can be destroyed only by an attack that hits it. It ignores all other damage and effects. The spell ends when all three duplicates are destroyed. A creature is unaffected by this spell if it cant see, if it relies on senses other than sight, such as blindsight, or if it can perceive illusions as false, as with truesight.",
      "url": "https://www.dnd-spells.com/spell/mirror-image"
    },
    "warding bond": {
      "castingTime": "1 Action",
      "duration": "1 hour",
      "range": "Touch",
      "components": "Verbal, Somatic, Material (a pair of platinum rings worth at least 50 gold pieces each, which you and target must wear for the duration)",
      "slotLevel": "2",
      "school": "Abjuration",
      "shortDescription": "A target within 60ft of you gains +1 AC, and when it takes damage so do you.",
      "longDescription": "This spell wards a willing creature you touch and creates a mystic connection between you and the target until the spell ends. While the target is within 60 feet of you, it gains a +1 bonus to AC and saving throws, and it has resistance to all damage. Also, each time it takes damage, you take the same amount of damage. The spell ends if you drop to 0 hit points or if you and the target become separated by more than 60 feet. It also ends if the spell is cast again on either of the connected creatures. You can also dismiss the spell as an action.",
      "url": "https://www.dnd-spells.com/spell/warding-bond"
    },
    "dust devil": {
      "castingTime": "1 Action",
      "duration": "Concentration, up to 1 minute",
      "range": "60 feet",
      "components": "Verbal, Somatic, Material (a pinch of dust)",
      "slotLevel": "2",
      "school": "Conjuration",
      "shortDescription": "Needs concentration. Choose an unoccupied 5ft cube within range. Any creature that ends its turn within 5ft of the dust devil must make a Strength save or take 1d8 bludgeoning damage and is pushed 10ft away, or take half on a save and isnt pushed. As a bonus action you can move the dust devil up to 30ft in any direction. When cast using a spell slot of 3rd level or higher, increase the damage by 1d8 for each level above 2nd.",
      "longDescription": "Choose an unoccupied 5-foot cube of air that you can see within range. An elemental force that resembles a dust devil appears in the cube and lasts for the spells duration. Any creature that ends its turn within 5 feet of the dust devil must make a Strength saving throw. On a failed save, the creature takes 1d8 bludgeoning damage and is pushed 10 feet away. On a successful save, the creature takes half as much damage and isnt pushed. As a bonus action, you can move the dust devil up to 30 feet in any direction. If the dust devil moves over sand, dust, loose dirt, or small gravel, it sucks up the material and forms a 10-foot-radius cloud of debris around itself that lasts until the start of your next turn. The cloud heavily obscures its area. At Higher Levels. When you cast this spell using a spell slot of 3rd level or higher, the damage increases by 1d8 for each slot level above 2nd.",
      "url": "https://www.dnd-spells.com/spell/dust-devil",
      "damage": {
        "type": "bludgeoning damage",
        "levels": {
          1: 0,
          2: "1d8",
          3: "2d8",
          4: "3d8",
          5: "4d8",
          6: "5d8",
          7: "6d8",
          8: "7d8",
          9: "8d8"
        }
      }
    },
    "find steed": {
      "castingTime": "10 Minutes",
      "duration": "Instantaneous",
      "range": "30 feet",
      "components": "Verbal, Somatic",
      "slotLevel": "2",
      "school": "Conjuration",
      "shortDescription": "Summon a spirit that assumes the form on an unusually intelligent, and loyal steed. You decide the form, the steed has the statistics of the chosen form, though it is celestial, fey, or fiend. Additionally, if your steed has an Intelligence of 5 or less, its int becomes 6, and gains the ability to understand one language of your choice that you speak. While mounted, you can cast any spell that targets yourself to also affect your steed. While the steed is within 1 mile of you, you can communicate telepathically with it.",
      "longDescription": "You summon a spirit that assumes the form of an unusually intelligent, strong, and loyal steed, creating a long-lasting bond with it. Appearing in an unoccupied space within range, the steed takes on a form that you choose, such as a warhorse, a pony, a camel, an elk, or a mastiff. (Your D. M. might allow other animals to be summoned as steeds.) The steed has the statistics of the chosen form, though it is a celestial, fey, or fiend (your choice) instead of its normal type. Additionally, if your steed has an Intelligence of 5 or less, its Intelligence becomes 6, and it gains the ability to understand one language of your choice that you speak. Your steed serves you as a mount, both in combat and out, and you have an instinctive bond with it that allows you to fight as a seamless unit. While mounted on your steed, you can make any spell you cast that targets only you also target your steed. When the steed drops to 0 hit points, it disappears, leaving behind no physical form. You can also dismiss your steed at any time as an action, causing it to disappear. In either case, casting this spell again summons the same steed, restored to its hit point maximum. While your steed is within 1 mile of you, you can communicate with it telepathically. You cant have more than one steed bonded by this spell at a time. As an action, you can release the steed from its bond at any time, causing it to disappear.",
      "url": "https://www.dnd-spells.com/spell/find-steed"
    },
    "alarm": {
      "castingTime": "1 Minute",
      "duration": "8 hours",
      "range": "30 feet",
      "components": "Verbal, Somatic, Material (a tiny bell and a piece of fine silver wire)",
      "slotLevel": "1",
      "school": "Abjuration Ritual",
      "shortDescription": "Choose a door, window, or an area that is no larger than 20 cubic feet, warding the area against intruders. Whenever a tiny or larger creature touches or enters the warded area, an alarm alerts you either mentally or audibly. You may designate creatures that wont set off the alarm.",
      "longDescription": "You set an alarm against unwanted intrusion. Choose a door, a window, or an area within range that is no larger than a 20-foot cube. Until the spell ends, an alarm alerts you whenever a Tiny or larger creature touches or enters the warded area. When you cast the spell, you can designate creatures that wont set off the alarm. You also choose whether the alarm is mental or audible. A mental alarm alerts you with a ping in your mind if you are within 1 mile of the warded area. This ping awakens you if you are sleeping. An audible alarm produces the sound of a hand bell for 10 seconds within 60 feet.",
      "url": "https://www.dnd-spells.com/spell/alarm-ritual"
    },
    "fire bolt": {
      "castingTime": "1 Action",
      "duration": "Instantaneous",
      "range": "120 feet",
      "components": "Verbal, Somatic",
      "slotLevel": "cantrip",
      "school": "Evocation",
      "shortDescription": "Make a ranged spell attack against a target, on a hit the target takes 1d10 fire damage. The spell damage increases by 1d10 each time when you reach level 5, 11 and 17.",
      "longDescription": "You hurl a mote of fire at a creature or object within range. Make a ranged spell attack against the target. On a hit, the target takes 1d10 fire damage. A flammable object hit by this spell ignites if it isnt being worn or carried. This spells damage increases by 1d10 when you reach 5th level (2d10), 11th level (3d10), and 17th level (4d10).",
      "url": "https://www.dnd-spells.com/spell/fire-bolt",
      "damage": {
        "type": "fire damage",
        "playerLevel": {
          1: "1d10",
          2: "1d10",
          3: "1d10",
          4: "1d10",
          5: "2d10",
          6: "2d10",
          7: "2d10",
          8: "2d10",
          9: "2d10",
          10: "2d10",
          11: "3d10",
          12: "3d10",
          13: "3d10",
          14: "3d10",
          15: "3d10",
          16: "3d10",
          17: "4d10",
          18: "4d10",
          19: "4d10",
          20: "4d10"
        }
      }
    },
    "flaming sphere": {
      "castingTime": "1 Action",
      "duration": "Concentration, up to 1 minute",
      "range": "60 feet",
      "components": "Verbal, Somatic, Material (a bit of tallow, a pinch of brimstone, and a dusting of powdered iron)",
      "slotLevel": "2",
      "school": "Conjuration",
      "shortDescription": "Needs concentration. Conjure a 5ft diameter sphere of fire on a point you choose within range, and persists for the duration of the spell. Any creature that ends its turn within 5ft of the sphere must make a Dexterity save or take 2d6 fire damage, or half on a success. As a bonus action you can move the sphere up to 30 ft, you can direct it over barriers up to 5ft tall, and jump across pits up to 10ft wide. When cast using a spell slot of 3rd level or higher the damage increases by 1d6 for each slot above 2nd.",
      "longDescription": "A 5-foot-diameter sphere of fire appears in an unoccupied space of your choice within range and lasts for the duration. Any creature that ends its turn within 5 feet of the sphere must make a Dexterity saving throw. The creature takes 2d6 fire damage on a failed save, or half as much damage on a successful one. As a bonus action, you can move the sphere up to 30 feet. If you ram the sphere into a creature, that creature must make the saving throw against the spheres damage, and the sphere stops moving this turn. When you move the sphere, you can direct it over barriers up to 5 feet tall and jump it across pits up to 10 feet wide. The sphere ignites flammable objects not being worn or carried, and it sheds bright light in a 20-foot radius and dim light for an additional 20 feet. At Higher Levels: When you cast this spell using a spell slot of 3rd level or higher, the damage increases by 1d6 for each slot level above 2nd.",
      "url": "https://www.dnd-spells.com/spell/flaming-sphere",
      "damage": {
        "type": "fire damage",
        "levels": {
          1: 0,
          2: "2d6",
          3: "3d6",
          4: "4d6",
          5: "5d6",
          6: "6d6",
          7: "7d6",
          8: "8d6",
          9: "9d6"
        }
      }
    },
    "blight": {
      "castingTime": "1 Action",
      "duration": "Instantaneous",
      "range": "30 feet",
      "components": "Verbal, Somatic",
      "slotLevel": "4",
      "school": "Necromancy",
      "shortDescription": "Choose a target within range, they must make a Constitution save or take 8d8 necrotic damage, or half on a success. If the target is a plant creature or a magical plant, it has disadvantage and takes maximum spell damage. When cast using a spell slot of 5th or higher, increase the damage by 1d8 for each level above 4th.",
      "longDescription": "Necromantic energy washes over a creature of your choice that you can see within range, draining moisture and vitality from it. The target must make a Constitution saving throw. The target takes 8d8 necrotic damage on a failed save, or half as much damage on a successful one. This spell has no effect on undead or constructs. If you target a plant creature or a magical plant, it makes the saving throw with disadvantage, and the spell deals maximum damage to it. If you target a nonmagical plant that isnt a creature, such as a tree or shrub, it doesnt make a saving throw; it simply withers and dies. At Higher Levels: When you cast this spell using a spell slot of 5th level or higher, the damage increases by 1d8 for each slot level above 4th.",
      "url": "https://www.dnd-spells.com/spell/blight",
      "damage": {
        "type": "necrotic damage",
        "levels": {
          1: 0,
          2: 0,
          3: 0,
          4: "8d8",
          5: "9d8",
          6: "10d8",
          7: "11d8",
          8: "12d8",
          9: "13d8"
        }
      }
    },
    "gate": {
      "castingTime": "1 Action",
      "duration": "Concentration, up to 1 minute",
      "range": "60 feet",
      "components": "Verbal, Somatic, Material (a diamond worth at least 5,000 gold pieces)",
      "slotLevel": "9",
      "school": "Conjuration",
      "shortDescription": "Needs concentration. Conjure a linked portal to a precise location on a different plane of existence. The portal is circular and can be 5 to 20 feet in diameter. The portal has a front and a back on each plane where it appears. Travel through the portal is possible only by moving through its front. You can speak the name of a specific creature, such as Archibald Fitzchesterfield, and if that creature is on a plane other than the one you are on, the portal opens in the creatures immediate vicinity and draws the creature through it.",
      "longDescription": "You conjure a portal linking an unoccupied space you can see within range to a precise location on a different plane of existence. The portal is a circular opening, which you can make 5 to 20 feet in diameter. You can orient the portal in any direction you choose. The portal lasts for the duration. The portal has a front and a back on each plane where it appears. Travel through the portal is possible only by moving through its front. Anything that does so is instantly transported to the other plane, appearing in the unoccupied space nearest to the portal. Deities and other planar rulers can prevent portals created by this spell from opening in their presence or anywhere within their domains. When you cast this spell, you can speak the name of a specific creature (a pseudonym, title, or nickname doesnt work). If that creature is on a plane other than the one you are on, the portal opens in the named creatures immediate vicinity and draws the creature through it to the nearest unoccupied space on your side of the portal. You gain no special power over the creature, and it is free to act as the D. M. deems appropriate. It might leave, attack you, or help you.",
      "url": "https://www.dnd-spells.com/spell/gate"
    },
    "mordenkainens sword": {
      "castingTime": "1 Action",
      "duration": "Concentration, up to 1 minute",
      "range": "60 feet",
      "components": "Verbal, Somatic, Material (a miniature platinum sword with a grip and pommel of copper and zinc, worth 250 gold pieces)",
      "slotLevel": "7",
      "school": "Evocation",
      "shortDescription": "Needs concentration. Conjure a sword of force, when it appears make a melee spell attack against a target of your choice within 5ft of the sword. On a hit the target takes 3d10 force damage. As a bonus action you can move the sword up to 20ft you can see.",
      "longDescription": "You create a sword-shaped plane of force that hovers within range. It lasts for the duration. When the sword appears, you make a melee spell attack against a target of your choice within 5 feet of the sword. On a hit, the target takes 3d10 force damage. Until the spell ends, you can use a bonus action on each of your turns to move the sword up to 20 feet to a spot you can see and repeat this attack against the same target or a different one",
      "url": "https://www.dnd-spells.com/spell/mordenkainens-sword",
      "damage": {
        "type": "force damage",
        "levels": {
          1: 0,
          2: 0,
          3: 0,
          4: 0,
          5: 0,
          6: 0,
          7: "3d10",
          8: "3d10",
          9: "3d10"
        }
      }
    },
    "melfs acid arrow": {
      "castingTime": "1 Action",
      "duration": "Instantaneous",
      "range": "90 feet",
      "components": "Verbal, Somatic, Material (powdered rhubarb leaf and an adders stomach)",
      "slotLevel": "2",
      "school": "Evocation",
      "shortDescription": "Make a ranged spell attack against a target, on a hit the target takes 4d4 acid damage immediately and 2d4 acid damage at the end of its next turn. On a miss, the target takes half as much initial damage, and no after effect damage. When cast at a 3rd level or higher, increase both damages by 1d4 for each slot above 2nd.",
      "longDescription": "A shimmering green arrow streaks toward a target within range and bursts in a spray of acid. Make a ranged spell attack against the target. On a hit, the target takes 4d4 acid damage immediately and 2d4 acid damage at the end of its next turn. On a miss, the arrow splashes the target with acid for half as much of the initial damage and no damage at the end of its next turn. At Higher Levels: When you cast this spell using a spell slot of 3rd level or higher, the damage (both initial and later) increases by 1d4 for each slot level above 2nd.",
      "url": "https://www.dnd-spells.com/spell/melfs-acid-arrow",
      "damage": {
        "type": "acid damage",
        "levels": {
          1: 0,
          2: "4d4",
          3: "5d4",
          4: "6d4",
          5: "7d4",
          6: "8d4",
          7: "9d4",
          8: "10d4",
          9: "11d4"
        }
      }
    },
    "feather fall": {
      "castingTime": "Special",
      "duration": "1 minute",
      "range": "60 feet",
      "components": "Verbal, Material (a small feather or piece of down)",
      "slotLevel": "1",
      "school": "Transmutation",
      "shortDescription": "Choose up to 5 falling creatures, reduce the falling speed by 60ft per round for 1 minute.",
      "longDescription": "Choose up to five falling creatures within range. A falling creatures rate of descent slows to 60 feet per round until the spell ends. If the creature lands before the spell ends, it takes no falling damage and can land on its feet, and the spell ends for that creature.",
      "url": "https://www.dnd-spells.com/spell/feather-fall"
    },
    "hail of thorns": {
      "castingTime": "1 Bonus Action",
      "duration": "Concentration, up to 1 minute",
      "range": "Self",
      "components": "Verbal",
      "slotLevel": "1",
      "school": "Conjuration",
      "shortDescription": "Needs concentration. The next time you hit a creature with a ranged weapon, create a rain of thorns that sprout from your ammo. The target and each creature within 5ft of it must make a Dexterity save or take 1d10 piercing damage, or half on a success. When cast at a spell slot of 2nd or higher, increase the damage by 1d10 for each slot above 1st to a maximum of 6d10.",
      "longDescription": "The next time you hit a creature with a ranged weapon attack before the spell ends, this spell creates a rain of thorns that sprouts from your ranged weapon or ammunition. In addition to the normal effect of the attack, the target of the attack and each creature within 5 feet of it must make a Dexterity saving throw. A creature takes 1dlO piercing damage on a failed save, or half as much damage on a successful one. At Higher Levels: If you cast this spell using a spell slot of 2nd level or higher, the damage increases by 1d10 for each slot level above 1st (to a maximum of 6d10).",
      "url": "https://www.dnd-spells.com/spell/hail-of-thorns"
    },
    "bestow curse": {
      "castingTime": "1 Action",
      "duration": "Concentration, up to 1 minute",
      "range": "Touch",
      "components": "Verbal, Somatic",
      "slotLevel": "3",
      "school": "Necromancy",
      "shortDescription": "Needs concentration. Touch a creature, they must succeed on a Wisdom save or be curses for the duration. Choose one of the following 4 curses: 1) Choose one ability score, the target now has disadvantage on checks and saves made with that score. 2) While cursed, the target now has disadvantage on attack rolls against you. 3) While cursed, target must succeed on a Wisdom save at the start of each of its turns or wastes its action doing nothing. 4) While cursed, your attacks and spells deal an extra 1d8 necrotic damage. When cast at a spell slot of 4th or higher, the duration is now concentration up to 10 minutes. If cast using a spell slot of 5th or higher the duration is 8 hours. At 7th level spell slot, the duration is 24 hours, and at 9th level the spell lasts until dispelled.",
      "longDescription": "You touch a creature, and that creature must succeed on a wisdom saving throw or become cursed for the duration of the spell. When you cast this spell, choose the nature of the curse from the following 4 options: 1) Choose one ability score. While cursed, the target has disadvantage on ability checks and saving throws made with that ability score. 2) While cursed, the target has disadvantage on attack rolls against you. 3) While cursed, the target must make a Wisdom saving throw at the start of each of its turns. If it fails, it wastes its action that turn doing nothing. 4) While the target is cursed, your attacks and spells deal an extra 1d8 necrotic damage to the target. A remove curse spell ends this effect. At the D. M.s option, you may choose an alternative curse effect, but it should be no more powerful than those described above. The D. M. has final say on such a curses effect. At Higher Levels. If you cast this spell using a spell slot of 4th level or higher, the duration is concentration, up to 10 minutes. If you use a spell slot of 5th level or higher, the duration is 8 hours. If you use a spell slot of 7th level or higher, the duration is 24 hours. If you use a 9th level spell slot, the spell lasts until it is dispelled. Using a spell slot of 5th level or higher grants a duration that doesnt require concentration.",
      "url": "https://www.dnd-spells.com/spell/bestow-curse",
      "damage": "Complex Damage Progression. Please consult short or long descriptions"
    },
    "clone": {
      "castingTime": "1 Hour",
      "duration": "Instantaneous",
      "range": "Touch",
      "components": "Verbal, Somatic, Material (a diamond worth at least 1,000 gold pieces and at least 1 cubic inch of flesh of the creature that is to be cloned, which the spell consumes, and a vessel worth at least 2,000 gold pieces that has a sealable lid and is large enough to hold a Medium creature)",
      "slotLevel": "8",
      "school": "Necromancy",
      "shortDescription": "Grow an inert duplicate of a living creature as a safeguard against death. The clone grows to full size after 120 days, and you can choose a younger version of the same creature. After maturity, if the original creature dies its soul transfers to the clone.",
      "longDescription": "This spell grows an inert duplicate of a living creature as a safeguard against death. This clone forms inside a sealed vessel and grows to full size and maturity after 120 days; you can also choose to have the clone be a younger version of the same creature. It remains inert and endures indefinitely, as long as its vessel remains undisturbed. At any time after the clone matures, if the original creature dies, its soul transfers to the clone, provided that the soul is free and willing to return. The clone is physically identical to the original and has the same personality, memories, and abilities, but none of the originals equipment. The original creatures physical remains, if they still exist, become inert and cant thereafter be restored to life, since the creatures soul is elsewhere.",
      "url": "https://www.dnd-spells.com/spell/clone"
    },
    "arms of hadar": {
      "castingTime": "1 Action",
      "duration": "Instantaneous",
      "range": "Self (10-foot radius)",
      "components": "Verbal, Somatic",
      "slotLevel": "1",
      "school": "Conjuration",
      "shortDescription": "Dark tendrils erupt from you and batter all creatures within 10ft of you. Each creature in that area must make a Strength save or take 2d6 necrotic damage, and cant take a reaction until its next turn. When cast using a spell slot of 2nd orr higher, increase the damage by 1d6 for each slot above 1st.",
      "longDescription": "You invoke the power of Hadar, the Dark Hunger. Tendrils of dark energy erupt from you and batter all creatures within 10 feet of you. Each creature in that area must make a Strength saving throw. On a failed save, a target takes 2d6 necrotic damage and cant take reactions until its next turn. On a successful save, the creature takes half damage, but suffers no other effect. At Higher Levels: When you cast this spell using a spell slot of 2nd level or higher, the damage increases by 1d6 for each slot level above 1st.",
      "url": "https://www.dnd-spells.com/spell/arms-of-hadar",
      "damage": {
        "type": "necrotic damage",
        "levels": {
          1: "2d6",
          2: "3d6",
          3: "4d6",
          4: "5d6",
          5: "6d6",
          6: "7d6",
          7: "8d6",
          8: "9d6",
          9: "10d6"
        }
      }
    },
    "leomunds secret chest": {
      "castingTime": "1 Action",
      "duration": "Instantaneous",
      "range": "Touch",
      "components": "Verbal, Somatic, Material (an exquisite chest, 3 feet by 2 feet by 2 feet, constructed from rare materials worth at least 5,000 gold pieces, and a Tiny replica made from the same materials worth at least 50 gold pieces)",
      "slotLevel": "4",
      "school": "Conjuration",
      "shortDescription": "Touch a chest and a miniature replica as a material component for the spell. You hide a chest that contains up to 12 cubic ft of nonliving material in the Ethereal plane. You can use your action to touch the replica and recall the chest, and use another action to send the chest back. After 60 days there is a cumulative 5% chance per day that the spell ends.",
      "longDescription": "You hide a chest, and all its contents, on the Ethereal Plane. You must touch the chest and the miniature replica that serves as a material component for the spell. The chest can contain up to 12 cubic feet of nonliving material (3 feet by 2 feet by 2 feet). While the chest remains on the Ethereal Plane, you can use an action and touch the replica to recall the chest. It appears in an unoccupied space on the ground within 5 feet of you. You can send the chest back to the Ethereal Plane by using an action and touching both the chest and the replica. After 60 days, there is a cumulative 5 percent chance per day that the spells effect ends. This effect ends if you cast this spell again, if the smaller replica chest is destroyed, or if you choose to end the spell as an action. If the spell ends and the larger chest is on the Ethereal Plane, it is irretrievably lost.",
      "url": "https://www.dnd-spells.com/spell/leomunds-secret-chest"
    },
    "conjure fey": {
      "castingTime": "1 Minute",
      "duration": "Concentration, up to 1 hour",
      "range": "90 feet",
      "components": "Verbal, Somatic",
      "slotLevel": "6",
      "school": "Conjuration",
      "shortDescription": "Needs concentration. Summon a fey creature of challenge rating 6 or lower, or a fey spirit that takes the form of a beast of challenge rating 6 or lower. The creature is friendly to you and your companions, roll initiative for the creature, and obeys any verbal commands you issue it as a free action. If your concentration is broken you no longer have control on the creature and it becomes hostile. When cast using a spell slot of 7th level or higher, the challenge rating increases by 1 for each slot above 6th.",
      "longDescription": "You summon a fey creature of challenge rating 6 or lower, or a fey spirit that takes the form of a beast of challenge rating 6 or lower. It appears in an unoccupied space that you can see within range. The fey creature disappears when it drops to 0 hit points or when the spell ends. The fey creature is friendly to you and your companions for the duration. Roll initiative for the creature, which has its own turns. It obeys any verbal commands that you issue to it (no action required by you), as long as they dont violate its alignment. If you dont issue any commands to the fey creature, it defends itself from hostile creatures but otherwise takes no actions. If your concentration is broken, the fey creature doesnt disappear. Instead, you lose control of the fey creature, it becomes hostile toward you and your companions, and it might attack. An uncontrolled fey creature cant be dismissed by you, and it disappears 1 hour after you summoned it. The D. M. has the fey creatures statistics. At Higher Levels: When you cast this spell using a spell slot of 7th level or higher, the challenge rating increases by 1 for each slot level above 6th.",
      "url": "https://www.dnd-spells.com/spell/conjure-fey"
    },
    "aura of purity": {
      "castingTime": "1 Action",
      "duration": "Concentration, up to 10 minutes",
      "range": "Self (30-foot radius)",
      "components": "Verbal",
      "slotLevel": "4",
      "school": "Abjuration",
      "shortDescription": "Needs concentration. Each nonhostile creature in a 30ft radius of you, cant become diseased, gains resistance to poison, and has advantage on saves against blind, charm, deaf, frighten, paralyze, poison, and stun.",
      "longDescription": "Purifying energy radiates from you in an aura with a 30-foot radius. Until the spell ends, the aura moves with you, centered on you. Each nonhostile creature in the aura (including you) cant become diseased, has resistance to poison damage, and has advantage on saving throws against effects that cause any of the following conditions: blinded, charmed, deafened, frightened, paralyzed, poisoned, and stunned.",
      "url": "https://www.dnd-spells.com/spell/aura-of-purity"
    },
    "contingency": {
      "castingTime": "10 Minutes",
      "duration": "10 days",
      "range": "Self",
      "components": "Verbal, Somatic, Material (a statuette of yourself carved from ivory and decorated with gems worth at least 1,500 gold pieces)",
      "slotLevel": "6",
      "school": "Evocation",
      "shortDescription": "Choose a spell of 5th level or lower that you can cast with a casting time of 1 action, and that can target you. Expending spell slots for both this spell, and the contingent spell, and describe a circumstance as the trigger for this spell.",
      "longDescription": "Choose a spell of 5th level or lower that you can cast, that has a casting time of 1 action, and that can target you. You cast that spell, called the contingent spell, as part of casting contingency, expending spell slots for both, but the contingent spell doesnt come into effect. Instead, it takes effect when a certain circumstance occurs. You describe that circumstance when you cast the two spells. For example, a contingency cast with water breathing might stipulate that water breathing com es into effect when you are engulfed in water or a similar liquid. The contingent spell takes effect immediately after the circumstance is met for the first time, whether or not you want it to. and then contingency ends. The contingent spell takes effect only on you, even if it can normally target others. You can use only one contingency spell at a time. If you cast this spell again, the effect of another contingency spell on you ends. Also, contingency ends on you if its material component is ever not on your person.",
      "url": "https://www.dnd-spells.com/spell/contingency"
    },
    "contact other plane": {
      "castingTime": "1 Minute",
      "duration": "1 minute",
      "range": "Self",
      "components": "Verbal",
      "slotLevel": "5",
      "school": "Divination Ritual",
      "shortDescription": "Mentally contact a demigod, spirit of a long-dead sage, or other mysterious entity from another plane. Make a DC 15 Intelligence save or take 6d6 psychic damage and are insane until you finish a long rest. On a success you can ask up to 5 questions, and ask them before the spell ends, the entity responds with a one word response.",
      "longDescription": "You mentally contact a demigod, the spirit of a long-dead sage, or some other mysterious entity from another plane. Contacting this extraplanar intelligence can strain or even break your mind. When you cast this spell, make a DC 15 Intelligence saving throw. On a failure, you take 6d6 psychic damage and are insane until you finish a long rest. While insane, you cant take actions, cant understand what other creatures say, cant read, and speak only in gibberish. A greater restoration spell cast on you ends this effect. On a successful save, you can ask the entity up to five questions. You must ask your questions before the spell ends. The D. M. answers each question with one word, such as yes, no, maybe, never, irrelevant, or unclear (if the entity doesnt know the answer to the question). If a one-word answer would be misleading, the D. M. might instead offer a short phrase as an answer.",
      "url": "https://www.dnd-spells.com/spell/contact-other-plane-ritual",
      "damage": "Complex Damage Progression. Please consult short or long descriptions"
    },
    "bane": {
      "castingTime": "1 Action",
      "duration": "Concentration, up to 1 minute",
      "range": "30 feet",
      "components": "Verbal, Somatic, Material (A drop of blood)",
      "slotLevel": "1",
      "school": "Enchantment",
      "shortDescription": "Needs concentration. Choose 3 creatures within range, they must make a Charism save. If they fail, any attack roll or saving throw they must roll a d4 and subtract the number from their attack or saving throw. When cast using a spell slot of 2nd level or higher target one additional creature for each slot above 1st.",
      "longDescription": "Up to three creatures of your choice that you can see within range must make Charisma saving throws. Whenever a target that fails this saving throw makes an attack roll or a saving throw before the spell ends, the target must roll a d4 and subtract the number rolled from the attack roll or saving throw. At Higher Levels: When you cast this spell using a spell slot of 2nd level or higher, you can target one additional creature for each slot level above 1st.",
      "url": "https://www.dnd-spells.com/spell/bane"
    },
    "rarys telepathic bond": {
      "castingTime": "1 Action",
      "duration": "1 hour",
      "range": "30 feet",
      "components": "Verbal, Somatic, Material (pieces of eggshell from two different kinds of creatures)",
      "slotLevel": "5",
      "school": "Divination Ritual",
      "shortDescription": "Forge a telepathic bond with up to 8 creatures of your choice, the targets can communicate through the bond whether or not they have a common language shared. Communication is possible over any distance, though not to other planes of existence.",
      "longDescription": "You forge a telepathic link among up to eight willing creatures of your choice within range, psychically linking each creature to all the others for the duration. Creatures with Intelligence scores of 2 or less arent affected by this spell. Until the spell ends, the targets can communicate telepathically through the bond whether or not they have a common language. The communication is possible over any distance, though it cant extend to other planes of existence.",
      "url": "https://www.dnd-spells.com/spell/rarys-telepathic-bond-ritual"
    },
    "comprehend languages": {
      "castingTime": "1 Action",
      "duration": "1 hour",
      "range": "Self",
      "components": "Verbal, Somatic, Material  (a pinch of soot and salt)",
      "slotLevel": "1",
      "school": "Divination Ritual",
      "shortDescription": "For the duration, you understand the literal meaning of any spoken language that you hear. You also understand any written language that you see, but you must be touching the surface on which the words are written. This spell doesnt decode secret messages in a text or a glyph, such as an arcane sigil, that isnt part of a written language.",
      "longDescription": "For the duration, you understand the literal meaning of any spoken language that you hear. You also understand any written language that you see, but you must be touching the surface on which the words are written. It takes about 1 minute to read one page of text. This spell doesnt decode secret messages in a text or a glyph, such as an arcane sigil, that isnt part of a written language.",
      "url": "https://www.dnd-spells.com/spell/comprehend-languages-ritual"
    },
    "expeditious retreat": {
      "castingTime": "1 Bonus Action",
      "duration": "Concentration, up to 10 minutes",
      "range": "Self",
      "components": "Verbal, Somatic",
      "slotLevel": "1",
      "school": "Transmutation",
      "shortDescription": "Needs concentration. When you cast this spell, and then as a bonus action on each of your turns until the spell ends, you can take the Dash action.",
      "longDescription": "This spell allows you to move at an incredible pace. When you cast this spell, and then as a bonus action on each of your turns until the spell ends, you can take the Dash action.",
      "url": "https://www.dnd-spells.com/spell/expeditious-retreat"
    },
    "watery sphere": {
      "castingTime": "1 Action",
      "duration": "Concentration, up to 1 minute",
      "range": "90 feet",
      "components": "Verbal, Somatic, Material (a droplet of water)",
      "slotLevel": "4",
      "school": "Conjuration",
      "shortDescription": "Needs concentration. Conjure a 10ft radius sphere of water on a point within range. Any creature in the spheres space must make a Strength save or be restrained and engulfed by the water. The sphere can restrain a maximum of 4 medium or smaller creatures, or one large creature. As an action you can move the sphere up to 30ft in a straight line.",
      "longDescription": "You conjure up a sphere of water with a 10-foot radius on a point you can see within range. The sphere can hover in the air, but no more than 10 feet off the ground. The sphere remains for the spells duration. Any creature in the spheres space must make a Strength saving throw. On a successful save, a creature is ejected from that space to the nearest unoccupied space outside it. A Huge or larger creature succeeds on the saving throw automatically. On a failed save, a creature is restrained by the sphere and is engulfed by the water. At the end of each of its turns, a restrained target can repeat the saving throw. The sphere can restrain a maximum of four Medium or smaller creatures or one Large creature. If the sphere restrains a creature in excess of these numbers, a random creature that was already restrained by the sphere falls out of it and lands prone in a space within 5 feet of it. As an action, you can move the sphere up to 30 feet in a straight line. If it moves over a pit, cliff, or other drop, it safely descends until it is hovering 10 feet over ground. Any creature restrained by the sphere moves with it. You can ram the sphere into creatures, forcing them to make the saving throw, but no more than once per turn. When the spell ends, the sphere falls to the ground and extinguishes all normal flames within 30 feet of it. Any creature restrained by the sphere is knocked prone in the space where it falls.",
      "url": "https://www.dnd-spells.com/spell/watery-sphere"
    },
    "control winds": {
      "castingTime": "1 Action",
      "duration": "Concentration, up to 1 hour",
      "range": "300 feet",
      "components": "Verbal, Somatic",
      "slotLevel": "5",
      "school": "Transmutation",
      "shortDescription": "Needs concentration. Control the air in a 100ft cube within range. Choose one of the following: 1) Gusts, wind picks up in a horizontal direction, choose the intensity of the wind from calm, moderate or strong. If the wind is moderate or strong ranged weapon attacks that pass through it or made against targets within the cube have disadvantage on attack rolls. 2) Downdraft, Cause a sustained blast of strong wind, ranged weapon attacks passing through the cube, or that are made against targets within it have disadvantage on their attack rolls. If a creature flys through the cube, make a Strength save or it is knocked prone. 3) Updraft, cause a sustained updraft within the cube, creatures that end a fall within the cube, take half fall damage. When a creature makes a vertical jump in the cube, they can jump 10ft higher.",
      "longDescription": "You take control of the air in a 100-foot cube that you can see within range. Choose one of the following effects when you cast the spell. The effect lasts for the spells duration, unless you use your action on a later turn to switch to a different effect. You can also use your action to temporarily halt the effect or to restart one youve halted. Gusts. A wind picks up within the cube, continually blowing in a horizontal direction that you choose. You choose the intensity of the wind: calm, moderate, or strong. If the wind is moderate or strong, ranged weapon attacks that pass through it or that are made against targets within the cube have disadvantage on their attack rolls. If the wind is strong, any creature moving against the wind must spend 1 extra foot of movement for each foot moved. Downdraft. You cause a sustained blast of strong wind to blow downward from the top of the cube. Ranged weapon attacks that pass through the cube or that are made against targets within it have disadvantage on their attack rolls. A creature must make a Strength saving throw if it flies into the cube for the first time on a turn or starts its turn there flying. On a failed save, the creature is knocked prone. Updraft. You cause a sustained updraft within the cube, rising upward from the cubes bottom edge. Creatures that end a fall within the cube take only half damage from the fall. When a creature in the cube makes a vertical jump, the creature can jump up to 10 feet higher than normal.",
      "url": "https://www.dnd-spells.com/spell/control-winds"
    },
    "barkskin": {
      "castingTime": "1 Action",
      "duration": "Concentration, up to 1 hour",
      "range": "Touch",
      "components": "Verbal, Somatic, Material (A handful of oak bark)",
      "slotLevel": "2",
      "school": "Transmutation",
      "shortDescription": "Needs concentration. Touch a willing creature, their AC cant be less than 16.",
      "longDescription": "You touch a willing creature. Until the spell ends, the targets skin has a rough, bark-like appearance, and the targets AC cant be less than 16, regardless of what kind of armor it is wearing.",
      "url": "https://www.dnd-spells.com/spell/barkskin"
    },
    "wall of water": {
      "castingTime": "1 Action",
      "duration": "Concentration, up to 10 minutes",
      "range": "60 feet",
      "components": "Verbal, Somatic, Material (a drop of water)",
      "slotLevel": "3",
      "school": "Evocation",
      "shortDescription": "Needs concentration. Conjure a wall of water, which can be up to 30ft long, 10ft high and a ft thick, or a ringed wall up to 20ft in diameter, 20ft high, and a ft thick. The walls space is difficult terrain, and any ranged attack that enters the space has disadvantage on attack rolls, and fire damage is reduced by half. Spells that deal cold damage that pass through the space will freeze a 5ft square section. Each frozen section has AC 5 and 15 hit points.",
      "longDescription": "You conjure up a wall of water on the ground at a point you can see within range. You can make the wall up to 30 feet long, 10 feet high, and 1 foot thick, or you can make a ringed wall up to 20 feet in diameter, 20 feet high, and 1 foot thick. The wall vanishes when the spell ends. The walls space is difficult terrain. Any ranged weapon attack that enters the walls space has disadvantage on the attack roll, and fire damage is halved if the fire effect passes through the wall to reach its target. Spells that deal cold damage that pass through the wall cause the area of the wall they pass through to freeze solid (at least a 5-foot square section is frozen). Each 5-foot-square frozen section has AC 5 and 15 hit points. Reducing a frozen section to 0 hit points destroys it. When a section is destroyed, the walls water doesnt fill it.",
      "url": "https://www.dnd-spells.com/spell/wall-of-water"
    },
    "mislead": {
      "castingTime": "1 Action",
      "duration": "Concentration, up to 1 hour",
      "range": "Self",
      "components": "Somatic",
      "slotLevel": "5",
      "school": "Illusion",
      "shortDescription": "Needs concentration. Become invisible as an illusory double of you appears. The double lasts for the duration, yet the invisibility ends if you attack or cast a spell. As an action you can move your double up to 2x your speed and make it gesture, speak, and behave in whatever way you choose. You can see and hear through it, as if you were located where it is. As a bonus action on each of your turns you can switch from using its sesnes, or your own, and back again.",
      "longDescription": "You become invisible at the same time that an illusory double of you appears where you are standing. The double lasts for the duration, but the invisibility ends if you attack or cast a spell. You can use your action to move your illusory double up to twice your speed and make it gesture, speak, and behave in whatever way you choose. You can see through its eyes and hear through its ears as if you were located where it is. On each of your turns as a bonus action, you can switch from using its senses to using your own, or back again. While you are using its senses, you are blinded and deafened in regard to your own surroundings.",
      "url": "https://www.dnd-spells.com/spell/mislead"
    },
    "produce flame": {
      "castingTime": "1 Action",
      "duration": "10 minutes",
      "range": "Self",
      "components": "Verbal, Somatic",
      "slotLevel": "cantrip",
      "school": "Conjuration",
      "shortDescription": "Conjure a flame in your hand that can produce bright light in a radius of 10ft and dim light in another 10ft. You may attack using the flame, which ends the spell. As an action you can hurl the flame at a creature in 30ft, make a ranged spell attack, on a hit the target takes 1d8 fire damage. When you reach level 5, 11 and 17 increase the damage by an additional 1d8 each time.",
      "longDescription": "A flickering flame appears in your hand. The flame remains there for the duration and harms neither you nor your equipment. The flame sheds bright light in a 10-foot radius and dim light for an additional 10 feet. The spell ends if you dismiss it as an action or if you cast it again. You can also attack with the flame, although doing so ends the spell. When you cast this spell, or as an action on a later turn, you can hurl the flame at a creature within 30 feet of you. Make a ranged spell attack. On a hit, the target takes 1d8 fire damage. This spells damage increases by 1d8 when you reach 5th level (2d8), 11th level (3d8), and 17th level (4d8).",
      "url": "https://www.dnd-spells.com/spell/produce-flame",
      "damage": {
        "type": "fire damage",
        "playerLevel": {
          1: "1d8",
          2: "1d8",
          3: "1d8",
          4: "1d8",
          5: "2d8",
          6: "2d8",
          7: "2d8",
          8: "2d8",
          9: "2d8",
          10: "2d8",
          11: "3d8",
          12: "3d8",
          13: "3d8",
          14: "3d8",
          15: "3d8",
          16: "3d8",
          17: "4d8",
          18: "4d8",
          19: "4d8",
          20: "4d8"
        }
      }
    },
    "vitriolic sphere": {
      "castingTime": "1 Action",
      "duration": "Instantaneous",
      "range": "150 feet",
      "components": "Verbal, Somatic, Material (a drop of giant slug bile)",
      "slotLevel": "4",
      "school": "Evocation",
      "shortDescription": "Choose a point in range, launch a 1ft ball that streaks there and explodes in a 20ft radius. Each creature in the area must make a Dexterity save or take 10d4 acid damage and 5d4 acid damage at the end of its next turn, or half the initial damage and no extra damage on a save. When cast at a spell slot of 5th or higher increase the initial damage by 2d4 for each slot above 4th.",
      "longDescription": "You point at a place within range, and a glowing 1-foot ball of emerald acid streaks there and explodes in a 20-foot radius. Each creature in that area must make a Dexterity saving throw. On a failed save, a creature takes 10d4 acid damage and 5d4 acid damage at the end of its next turn. On a successful save, a creature takes half the initial damage and no damage at the end of its next turn. At Higher Levels. When you cast this spell using a spell slot of 5th level or higher, the initial damage increases by 2d4 for each slot level above 4th.",
      "url": "https://www.dnd-spells.com/spell/vitriolic-sphere",
      "damage": {
        "type": "acid damage",
        "levels": {
          1: 0,
          2: 0,
          3: 0,
          4: "10d4",
          5: "11d4",
          6: "12d4",
          7: "13d4",
          8: "14d4",
          9: "15d4"
        }
      }
    },
    "haste": {
      "castingTime": "1 Action",
      "duration": "Concentration, up to 1 minute",
      "range": "30 feet",
      "components": "Verbal, Somatic, Material (a shaving of licorice root)",
      "slotLevel": "3",
      "school": "Transmutation",
      "shortDescription": "Needs concentration. Choose a willing creature within range. Double their speed, give them +2 bonus to AC, they gain advantage on Dexterity saves, and they gain an additional action on each of its turns. That action can only be used to take the weapon attack, dash, disengage, hide, or use an object action.",
      "longDescription": "Choose a willing creature that you can see within range. Until the spell ends, the targets speed is doubled, it gains a +2 bonus to AC, it has advantage on Dexterity saving throws, and it gains an additional action on each of its turns. That action can be used only to take the Attack (one weapon attack only), Dash, Disengage, Hide, or Use an Object action. When the spell ends, the target cant move or take actions until after its next turn, as a wave of lethargy sweeps over it.",
      "url": "https://www.dnd-spells.com/spell/haste"
    },
    "animate objects": {
      "castingTime": "1 Action",
      "duration": "Concentration, up to 1 minute",
      "range": "120 feet",
      "components": "Verbal, Somatic",
      "slotLevel": "5",
      "school": "Transmutation",
      "shortDescription": "Needs concentration. Choose up to 10 nonmagical objects within range and are not being worn or carried. Medium targets count as two objects, large as four and huge as eight objects. Each target animates and becomes a creature under your control. As a bonus action you can command any creature made with this spell if it is within 500ft of you. You decide what command and where it will move during its next turn. An animated object is a construct with AC, hit points, attack, Strength, and Dexterity determined by its size. Its Constitution is 10, with Intelligence and Wisdom of 3, and its Charism is 1. It has a movement speed of 30ft, and can make a single melee attack with an attack bonus and bludgeoning damage based on its size. When cast using a spell slot of 6th level or higher, you can animate two additional objects for each slot above 5th.",
      "longDescription": "Objects come to life at your command. Choose up to ten nonmagical objects within range that are not being worn or carried. Medium targets count as two objects, Large targets count as four objects, Huge targets count as eight objects. You cant animate any object larger than Huge. Each target animates and becomes a creature under your control until the spell ends or until reduced to 0 hit points. As a bonus action, you can mentally command any creature you made with this spell if the creature is within 500 feet of you (if you control multiple creatures, you can command any or all of them at the same time, issuing the same command to each one). You decide what action the creature will take and where it will move during its next turn, or you can issue a general command, such as to guard a particular chamber or corridor. If you issue no commands, the creature only defends itself against hostile creatures. Once given an order, the creature continues to follow it until its task is complete. An animated object is a construct with AC, hit points, attacks, Strength, and Dexterity determined by its size. Its Constitution is 10 and its Intelligence and Wisdom are 3, and its Charisma is 1. Its speed is 30 feet; if the object lacks legs or other appendages it can use for locomotion, it instead has a flying speed of 30 feet and can hover. If the object is securely attached to a surface or a larger object, such as a chain bolted to a wall, its speed is 0. It has blindsight with a radius of 30 feet and is blind beyond that distance. When the animated object drops to 0 hit points, it reverts to its original object form, and any remaining damage carries over to its original object form. If you command an object to attack, it can make a single melee attack against a creature within 5 feet of it. It makes a slam attack with an attack bonus and bludgeoning damage determined by its size. The D. M. might rule that a specific object inflicts slashing or piercing damage based on its form. At Higher Levels. If you cast this spell using a spell slot of 6th level or higher, you can animate two additional objects for each slot level above 5th.",
      "url": "https://www.dnd-spells.com/spell/animate-objects"
    },
    "speak with dead": {
      "castingTime": "1 Action",
      "duration": "10 minutes",
      "range": "10 feet",
      "components": "Verbal, Somatic, Material (burning incense)",
      "slotLevel": "3",
      "school": "Necromancy",
      "shortDescription": "You grant the semblance of life and intelligence to a corpse of your choice within range, allowing it to answer the questions you pose. The corpse must still have a mouth and cant be undead, and only knows what it knew in life, cant learn anything new, and cant speculate about the future.",
      "longDescription": "You grant the semblance of life and intelligence to a corpse of your choice within range, allowing it to answer the questions you pose. The corpse must still have a mouth and cant be undead. The spell fails if the corpse was the target of this spell within the last 10 days. Until the spell ends, you can ask the corpse up to five questions. The corpse knows only what it knew in life, including the languages it knew. Answers are usually brief, cryptic, or repetitive, and the corpse is under no compulsion to offer a truthful answer ifyou are hostile to it or it recognizes you as an enemy. This spell doesnt return the creatures soul to its body, only its animating spirit. Thus, the corpse cant learn new information, doesnt comprehend anything that has happened since it died, and cant speculate about future events.",
      "url": "https://www.dnd-spells.com/spell/speak-with-dead"
    },
    "arcane gate": {
      "castingTime": "1 Action",
      "duration": "Concentration, up to 10 minutes",
      "range": "500 feet",
      "components": "Verbal, Somatic",
      "slotLevel": "6",
      "school": "Conjuration",
      "shortDescription": "Requires concentration. Choose two points on the ground that you can see, one point within 10 feet of you and one point within 500 feet of you. A circular portal, 10 feet in diameter, opens over each point.",
      "longDescription": "You create linked teleportation portals that remain open for the duration. Choose two points on the ground that you can see, one point within 10 feet of you and one point within 500 feet of you. A circular portal, 10 feet in diameter, opens over each point. If the portal would open in the space occupied by a creature, the spell fails, and the casting is lost. The portals are two-dimensional glowing rings filled with mist, hovering inches from the ground and perpendicular to it at the points you choose. A ring is visible only from one side (your choice), which is the side that functions as a portal. Any creature or object entering the portal exits from the other portal as if the two were adjacent to each other; passing through a portal from the nonportal side has no effect. The mist that fills each portal is opaque and blocks vision through it. On your turn, you can rotate the rings as a bonus action so that the active side faces in a different direction.",
      "url": "https://www.dnd-spells.com/spell/arcane-gate"
    },
    "fireball": {
      "castingTime": "1 Action",
      "duration": "Instantaneous",
      "range": "150 feet",
      "components": "Verbal, Somatic, Material (a tiny ball of bat guano and sulfur)",
      "slotLevel": "3",
      "school": "Evocation",
      "shortDescription": "Each creature in a 20 foot radius sphere takes 8d6 fire damage on a failed Dexterity save, or half as much on a success.",
      "longDescription": "A bright streak flashes from your pointing finger to a point you choose within range and then blossoms with a low roar into an explosion of flame. Each creature in a 20-foot-radius sphere centered on that point must make a Dexterity saving throw. A target takes 8d6 fire damage on a failed save, or half as much damage on a successful one. The fire spreads around corners. It ignites flammable objects in the area that arent being worn or carried. At Higher Levels: When you cast this spell using a spell slot of 4th level or higher, the damage increases by 1d6 for each slot level above 3rd.",
      "url": "https://www.dnd-spells.com/spell/fireball",
      "damage": {
        "type": "fire damage",
        "levels": {
          1: 0,
          2: 0,
          3: "8d6",
          4: "9d6",
          5: "10d6",
          6: "11d6",
          7: "12d6",
          8: "13d6",
          9: "14d6"
        }
      }
    },
    "dream": {
      "castingTime": "1 Minute",
      "duration": "8 hours",
      "range": "Special",
      "components": "Verbal, Somatic, Material  (a bit of fur; a piece of amber, glass, or a crystal rod; and three silver pins) (a handful of sand, a dab of ink, and a writing quill plucked from a sleeping bird)",
      "slotLevel": "5",
      "school": "Illusion",
      "shortDescription": "You or a messenger of your choosing enters a sleeping targets dreams and converses with it. If you make the messenger appear monstrous, the target must make a wisdom save. Ona fail, the messenger spawns a nightmare and the target doesnt get the benefit of the rest. If it wakes up, it takes 3d6 psychic damage.",
      "longDescription": "This spell shapes a creatures dreams. Choose a creature known to you as the target of this spell. The target must be on the same plane of existence as you. Creatures that dont sleep, such as elves, cant be contacted by this spell. You, or a willing creature you touch, enters a trance state, acting as a messenger. While in the trance, the messenger is aware of his or her surroundings, but cant take actions or move. If the target is asleep, the messenger appears in the targets dreams and can converse with the target as long as it remains asleep, through the duration of the spell. The messenger can also shape the environment of the dream, creating landscapes, objects, and other images. The messenger can emerge from the trance at any time, ending the effect of the spell early. The target recalls the dream perfectly upon waking. If the target is awake when you cast the spell, the messenger knows it, and can either end the trance (and the spell) or wait for the target to fall asleep, at which point the messenger appears in the targets dreams. You can make the messenger appear monstrous and terrifying to the target. If you do, the messenger can deliver a message of no more than ten words and then the target must make a wisdom saving throw. On a failed save, echoes of the phantasmal monstrosity spawn a nightmare that lasts the duration of the targets sleep and prevents the target from gaining any benefit from that rest. In addition, when the target wakes up, it takes 3d6 psychic damage. If you have a body part, lock of hair, clipping from a nail, or similar portion of the targets body, the target makes its saving throw with disadvantage.",
      "url": "https://www.dnd-spells.com/spell/dream",
      "damage": "Complex Damage Progression. Please consult short or long descriptions"
    },
    "blade barrier": {
      "castingTime": "1 Action",
      "duration": "Concentration, up to 10 minutes",
      "range": "90 feet",
      "components": "Verbal, Somatic",
      "slotLevel": "6",
      "school": "Evocation",
      "shortDescription": "Requires concentration. Create a 100 feet by 20 feet by 5 feet wall of blades. Creatures starting in or entering the wall take 6d10 slashing damage on a failed Dexterity save, or half as much on a success. The area is difficult terrain and provides three quarter coverage. ",
      "longDescription": "You create a vertical wall of whirling, razor-sharp blades made of magical energy. The wall appears within range and lasts for the duration. You can make a straight wall up to 100 feet long, 20 feet high, and 5 feet thick, or a ringed wall up to 60 feet in diameter, 20 feet high, and 5 feet thick. The wall provides three-quarters cover to creatures behind it, and its space is difficult terrain. When a creature enters the walls area for the first time on a turn or starts its turn there, the creature must make a Dexterity saving throw. On a failed save, the creature takes 6d10 slashing damage. On a successful save, the creature takes half as much damage.",
      "url": "https://www.dnd-spells.com/spell/blade-barrier",
      "damage": {
        "type": "slashing damage",
        "levels": {
          1: 0,
          2: 0,
          3: 0,
          4: 0,
          5: 0,
          6: "6d10",
          7: "6d10",
          8: "6d10",
          9: "6d10"
        }
      }
    },
    "sleet storm": {
      "castingTime": "1 Action",
      "duration": "Concentration, up to 1 minute",
      "range": "150 feet",
      "components": "Verbal, Somatic, Material (a pinch of dust and a few drops of water)",
      "slotLevel": "3",
      "school": "Conjuration",
      "shortDescription": "Requires concentration. Freezing rain and sleet fall in a 20-foot-tall cylinder with a 40-foot radius, making it difficult terrain. Creatures starting there turn in or entering the area fall prone on a failed Dexterity roll. Creatures concentrating must make a Constitution save against your spell save DC or their concentration ends.",
      "longDescription": "Until the spell ends, freezing rain and sleet fall in a 20-foot-tall cylinder with a 40-foot radius centered on a point you choose within range. The area is heavily obscured, and exposed flames in the area are doused. The ground in the area is covered with slick ice, making it difficult terrain. When a creature enters the spells area for the first time on a turn or starts its turn there, it must make a Dexterity saving throw. On a failed save, it falls prone. If a creature is concentrating in the spells area, the creature must make a successful Constitution saving throw against your spell save DC or lose concentration.",
      "url": "https://www.dnd-spells.com/spell/sleet-storm"
    },
    "glyph of warding": {
      "castingTime": "1 Hour",
      "duration": "Until dispelled or triggered",
      "range": "Touch",
      "components": "Verbal, Somatic, Material (incense and powdered diamond worth at least 200 gold pieces, which the spell consumes)",
      "slotLevel": "3",
      "school": "Abjuration",
      "shortDescription": "Create a glyph that is nearly invisible. It can be discovered with a successful investigation check against your spell save DC, and lasts until dispelled or triggered. Choose explosive runes or spell glyph. For explosive runes, when the glyph is triggered it explodes and causes 5d8 acid, cold, fire, lightning, or thunder damage on a failed Dexterity saving throw, or half as much on a successful one. For spell glyph, you can store a prepared spell level 3 or lower. The spell is cast when the glyph is triggered, either at the triggering target or in the area, depending on the stored spells description.",
      "longDescription": "When you cast this spell, you inscribe a glyph that harms other creatures, either upon a surface (such as a table or a section of floor or wall) or within an object that can be closed (such as a book, a scroll, or a treasure chest) to conceal the glyph. If you choose a surface, the glyph can cover an area of the surface no larger than 10 feet in diameter. If you choose an object, that object must remain in its place; if the object is moved more than 10 feet from where you cast this spell, the glyph is broken, and the spell ends without being triggered. The glyph is nearly invisible and requires a successful Intelligence (Investigation) check against your spell save DC to be found. You decide what triggers the glyph when you cast the spell. For glyphs inscribed on a surface, the most typical triggers include touching or standing on the glyph, removing another object covering the glyph, approaching within a certain distance of the glyph, or manipulating the object on which the glyph is inscribed. For glyphs inscribed within an object, the most common triggers include opening that object, approaching within a certain distance of the object, or seeing or reading the glyph. Once a glyph is triggered, this spell ends. You can further refine the trigger so the spell activates only under certain circumstances or according to physical characteristics (such as height or weight), creature kind (for example, the ward could be set to affect aberrations or drow), or alignment. You can also set conditions for creatures that dont trigger the glyph, such as those who say a certain password. When you inscribe the glyph, choose explosive runes or a spell glyph. Explosive Runes. When triggered, the glyph erupts with magical energy in a 20-foot-radius sphere centered on the glyph. The sphere spreads around corners. Each creature in the area must make a Dexterity saving throw. A creature takes 5d8 acid, cold, fire, lightning, or thunder damage on a failed saving throw (your choice when you create the glyph), or half as much damage on a successful one. Spell Glyph. You can store a prepared spell of 3rd level or lower in the glyph by casting it as part of creating the glyph. The spell must target a single creature or an area. The spell being stored has no immediate effect when cast in this way. When the glyph is triggered, the stored spell is cast. If the spell has a target, it targets the creature that triggered the glyph. If the spell affects an area, the area is centered on that creature. If the spell summons hostile creatures or creates harmful objects or traps, they appear as close as possible to the intruder and attack it. If the spell requires concentration, it lasts until the end of its full duration. At Higher Levels: When you cast this spell using a spell slot of 4th level or higher, the damage of an explosive runes glyph increases by 1d8 for each slot level above 3rd. If you createa spell glyph, you can store any spell of up to the same level as the slot you use for the glyph ofwarding.",
      "url": "https://www.dnd-spells.com/spell/glyph-of-warding"
    },
    "creation": {
      "castingTime": "1 Minute",
      "duration": "Special",
      "range": "30 feet",
      "components": "Verbal, Somatic, Material  (a tiny piece of matter of the same type of the item you plan to create",
      "slotLevel": "5",
      "school": "Illusion",
      "shortDescription": "Create a nonliving object of mineral or vegetable matter such as rope, wood, clothes, stone, crystal, etc. The object must me no larger than a 5 foot cube.",
      "longDescription": "You pull wisps of shadow material from the Shadowfell to create a nonliving object of vegetable matter within range: soft goods, rope, wood, or something similar. You can also use this spell to create mineral objects such as stone, crystal, or metal. The object created must be no larger than a 5-foot cube, and the object must be of a form and material that you have seen before. The duration depends on the objects material. If the object is composed of multiple materials, use the shortest duration. Using any material created by this spell as another spells material component causes that spell to fail. At Higher Levels: When you cast this spell using a spell slot of 6th level or higher, the cube increases by 5 feet for each slot level above 5th",
      "url": "https://www.dnd-spells.com/spell/creation"
    },
    "shield": {
      "castingTime": "Special",
      "duration": "1 round",
      "range": "Self",
      "components": "Verbal, Somatic",
      "slotLevel": "1",
      "school": "Abjuration",
      "shortDescription": "You have +5 AC until the start of your next turn.",
      "longDescription": "An invisible barrier of magical force appears and protects you. Until the start of your next turn, you have a +5 bonus to AC, including against the triggering attack, and you take no damage from magic missile.",
      "url": "https://www.dnd-spells.com/spell/shield"
    },
    "mending": {
      "castingTime": "1 Minute",
      "duration": "Instantaneous",
      "range": "Touch",
      "components": "Verbal, Somatic, Material (two lodestones)",
      "slotLevel": "cantrip",
      "school": "Transmutation",
      "shortDescription": "Mend any break or teat in an object that is less than 1 foot in any dimension.",
      "longDescription": "This spell repairs a single break or tear in an object you touch, such as a broken chain link, two halves of a broken key, a torn cloak, or a leaking wineskin. As long as the break or tear is no larger than 1 foot in any dimension, you mend it, leaving no trace of the former damage. This spell can physically repair a magic item or construct, but the spell cant restore magic to such an object.",
      "url": "https://www.dnd-spells.com/spell/mending"
    },
    "wall of fire": {
      "castingTime": "1 Action",
      "duration": "Concentration, up to 1 minute",
      "range": "120 feet",
      "components": "Verbal, Somatic, Material (a small piece of phosphorus)",
      "slotLevel": "4",
      "school": "Evocation",
      "shortDescription": "Requires concentration. Create a 60 foot but 20 foot but 1 foot wall of fire within 120 feet. Each creature in the space of the wall takes 5d8 fire damage on a dailed Dexterity save, or half as much on a success. One side of the wall deals 5d8 fire damage to each creature that ends its turn within 10 feet of the wall.",
      "longDescription": "You create a wall of fire on a solid surface within range. You can make the wall up to 60 feet long, 20 feet high, and 1 foot thick, or a ringed wall up to 20 feet in diameter, 20 feet high, and 1 foot thick. The wall is opaque and lasts for the duration. When the wall appears, each creature within its area must make a Dexterity saving throw. On a failed save, a creature takes 5d8 fire damage, or half as much damage on a successful save. One side of the wall, selected by you when you cast this spell, deals 5d8 fire damage to each creature that ends its turn within 10 feet of that side or inside the wall. A creature takes the same damage when it enters the wall for the first time on a turn or ends its turn there. The other side of the wall deals no damage. At Higher Levels: When you cast this spell using a spell slot of 5th level or higher, the damage increases by 1d8 for each slot level above 4th.",
      "url": "https://www.dnd-spells.com/spell/wall-of-fire",
      "damage": {
        "type": "fire damage",
        "levels": {
          1: 0,
          2: 0,
          3: 0,
          4: "5d8",
          5: "6d8",
          6: "7d8",
          7: "8d8",
          8: "9d8",
          9: "10d8"
        }
      }
    },
    "healing word": {
      "castingTime": "1 Bonus Action",
      "duration": "Instantaneous",
      "range": "60 feet",
      "components": "Verbal",
      "slotLevel": "1",
      "school": "Evocation",
      "shortDescription": "A creature of your choice within 60 feet gains health equal to 1d4 + your spellcasting ability modifier. No effect on undead or constructs.",
      "longDescription": "A creature of your choice that you can see within range regains hit points equal to 1d4 + your spellcasting ability modifier. This spell has no effect on undead or constructs. At Higher Level:. When you cast this spell using a spell slot of 2nd level or higher, the healing increases by 1d4 for each slot level above 1st.",
      "url": "https://www.dnd-spells.com/spell/healing-word",
      "healing": {
        "levels": {
          1: "1d4",
          2: "2d4",
          3: "3d4",
          4: "4d4",
          5: "5d4",
          6: "6d4",
          7: "7d4",
          8: "8d4",
          9: "9d4"
        }
      }
    },
    "project image": {
      "castingTime": "1 Action",
      "duration": "Concentration, up to 1 day",
      "range": "500 miles",
      "components": "Verbal, Somatic, Material (a small replica of you made from materials worth at least 5 gold pieces)",
      "slotLevel": "7",
      "school": "Illusion",
      "shortDescription": "Requires concentration. Create an intangible copy of yourself anywhere youve seen before within 500 miles that lasts up to 1 day. If it takes any damage, it disappears. You can use your action to move this illusion up to twice your speed, and make it gesture, speak, and behave in whatever way you choose. It mimics your mannerisms perfectly. You can see through its eyes and hear through its ears as if you were in its space.",
      "longDescription": "You create an illusory copy of yourself that lasts for the duration. The copy can appear at any location within range that you have seen before, regardless of intervening obstacles. The illusion looks and sounds like you but is intangible. If the illusion takes any damage, it disappears, and the spell ends. You can use your action to move this illusion up to twice your speed, and make it gesture, speak, and behave in whatever way you choose. It mimics your mannerisms perfectly. You can see through its eyes and hear through its ears as if you were in its space. On your turn as a bonus action, you can switch from using its senses to using your own, or back again. While you are using its senses, you are blinded and deafened in regard to your own surroundings. Physical interaction with the image reveals it to be an illusion, because things can pass through it. A creature that uses its action to examine the image can determine that it is an illusion with a successful Intelligence (Investigation) check against your spell save DC. If a creature discerns the illusion for what it is, the creature can see through the image, and any noise it makes sounds hollow to the creature.",
      "url": "https://www.dnd-spells.com/spell/project-image"
    },
    "insect plague": {
      "castingTime": "1 Action",
      "duration": "Concentration, up to 10 minutes",
      "range": "300 feet",
      "components": "Verbal, Somatic, Material (a few grains of sugar, some kernels of grain, and a smear of fat)",
      "slotLevel": "5",
      "school": "Conjuration",
      "shortDescription": "Requires concentration. A swarm of locusts in a 20-foot sphere centers on a point you choose. The sphere is difficult terrain, and each creature inside takes 4d10 piercing damage on a failed Constitution save, or half as much on a success.",
      "longDescription": "Swarming, biting locusts fill a 20-foot-radius sphere centered on a point you choose within range. The sphere spreads around corners. The sphere remains for the duration, and its area is lightly obscured. The spheres area is difficult terrain. When the area appears, each creature in it must make a Constitution saving throw. A creature takes 4d10 piercing damage on a failed save, or half as much damage on a successful one. A creature must also make this saving throw when it enters the spells area for the first time on a turn or ends its turn there. At Higher Levels: When you cast this spell using a spell slot of 6th level or higher, the damage increases by 1d10 for each slot level above 5th.",
      "url": "https://www.dnd-spells.com/spell/insect-plague",
      "damage": {
        "type": "piercing damage",
        "levels": {
          1: 0,
          2: 0,
          3: 0,
          4: 0,
          5: "4d10",
          6: "5d10",
          7: "6d10",
          8: "7d10",
          9: "8d10"
        }
      }
    },
    "shield of faith": {
      "castingTime": "1 Bonus Action",
      "duration": "Concentration, up to 10 minutes",
      "range": "60 feet",
      "components": "Verbal, Somatic, Material (a small parchment with a bit of holy text written on it)",
      "slotLevel": "1",
      "school": "Abjuration",
      "shortDescription": "Needs concentration. A creature gets +2 AC",
      "longDescription": "A shimmering field appears and surrounds a creature of your choice within range, granting it a +2 bonus to AC for the duration.",
      "url": "https://www.dnd-spells.com/spell/shield-of-faith"
    },
    "minor illusion": {
      "castingTime": "1 Action",
      "duration": "1 minute",
      "range": "30 feet",
      "components": "Somatic, Material (a bit of fleece)",
      "slotLevel": "cantrip",
      "school": "Illusion",
      "shortDescription": "Create a sound or image of your choosing that lasts for a minute. Physical interaction with the illusion reveals it to be a fake, as well as a successful investigation check.",
      "longDescription": "You create a sound or an image of an object within range that lasts for the duration. The illusion also ends if you dismiss it as an action or cast this spell again. If you create a sound, its volume can range from a whisper to a scream. It can be your voice, someone elses voice, a lions roar, a beating of drums, or any other sound you choose. The sound continues unabated throughout the duration, or you can make discrete sounds at different times before the spell ends. If you create an image of an object, such as a chair, muddy footprints, or a small chest, it must be no larger than a 5-foot cube. The image cant create sound, light, smell, or any other sensory effect. Physical interaction with the image reveals it to be an illusion, because things can pass through it. If a creature uses its action to examine the sound or image, the creature can determine that it is an illusion with a successful Intelligence (Investigation) check against your spell save DC. If a creature discerns the illusion for what it is, the illusion becomes faint to the creature.",
      "url": "https://www.dnd-spells.com/spell/minor-illusion"
    },
    "hallow": {
      "castingTime": "24 Hours",
      "duration": "Until dispelled",
      "range": "Touch",
      "components": "Verbal, Somatic, Material (herbs, oils, and incense worth at least 1,000 gold pieces, which the spell consumes)",
      "slotLevel": "5",
      "school": "Evocation",
      "shortDescription": "Create a 60 foot radius of hallowed area that lasts until dispelled. Celestials, elementals, fey, fiends, and undead cant enter the area, nor can such creatures charm, frighten, or possess creatures within it. Any creature charmed, frightened, or possessed by such a creature is no longer charmed, frightened, or possessed upon entering the area. Also, you can bind an additional effect to the area, such as courage, darkness, daylight, energy protection, everlasting rest, extradimensional tnterference, or tongues. See the long description or players handbook for more information.",
      "longDescription": "You touch a point and infuse an area around it with holy (or unholy) power. The area can have a radius up to 60 feet, and the spell fails if the radius includes an area already under the effect a hallow spell. The affected area is subject to the following effects. First, celestials, elementals, fey, fiends, and undead cant enter the area, nor can such creatures charm, frighten, or possess creatures within it. Any creature charmed, frightened, or possessed by such a creature is no longer charmed, frightened, or possessed upon entering the area. You can exclude one or more of those types of creatures from this effect. Second, you can bind an extra effect to the area. Choose the effect from the following list, or choose an effect offered by the D. M.. Some of these effects apply to creatures in the area; you can designate whether the effect applies to all creatures, creatures that follow a specific deity or leader, or creatures of a specific sort, such as ores or trolls. When a creature that would be affected enters the spells area for the first time on a turn or starts its turn there, it can make a Charisma saving throw. On a success, the creature ignores the extra effect until it leaves the area. Courage. Affected creatures cant be frightened while in the area. Darkness. Darkness fills the area. Normal light, as well as magical light created by spells of a lower level than the slot you used to cast this spell, cant illuminate the area. Daylight. Bright light fills the area. Magical darkness created by spells of a lower level than the slot you used to cast this spell cant extinguish the light. Energy Protection. Affected creatures in the area have resistance to one damage type of your choice, except for bludgeoning, piercing, or slashing. Energy Vulnerability. Affected creatures in the area have vulnerability to one damage type of your choice, except for bludgeoning, piercing, or slashing. Everlasting Rest. Dead bodies interred in the area cant be turned into undead. Extradimensional Interference. Affected creatures cant move or travel using teleportation or by extradimensional or interplanar means. Fear. Affected creatures are frightened while in the area. Silence. No sound can emanate from within the area, and no sound can reach into it. Tongues. Affected creatures can communicate with any other creature in the area, even if they dont share a common language.",
      "url": "https://www.dnd-spells.com/spell/hallow"
    },
    "locate animals or plants": {
      "castingTime": "1 Action",
      "duration": "Instantaneous",
      "range": "Self",
      "components": "Verbal, Somatic, Material (a bit of fur from a bloodhound)",
      "slotLevel": "2",
      "school": "Divination Ritual",
      "shortDescription": "Describe or name a specific kind of beast or plant. Concentrating on the voice of nature in your surroundings, you learn the direction and distance to the closest creature or plant of that kind within 5 miles, if any are present.",
      "longDescription": "Describe or name a specific kind of beast or plant. Concentrating on the voice of nature in your surroundings, you learn the direction and distance to the closest creature or plant of that kind within 5 miles, if any are present.",
      "url": "https://www.dnd-spells.com/spell/locate-animals-or-plants-ritual"
    },
    "abi-dalzims horrid wilting": {
      "castingTime": "1 Action",
      "duration": "Instantaneous",
      "range": "150 feet",
      "components": "Verbal, Somatic, Material (a bit of sponge)",
      "slotLevel": "8",
      "school": "Necromancy",
      "shortDescription": "A creature takes 10d8 necrotic damage on a failed save, or half as much damage on a successful one. Doesnt effect constructs or undead, and plants and water elementals have disadvantage.",
      "longDescription": "You draw the moisture from every creature in a 30-foot cube centered on a point you choose within range. Each creature in that area must make a Constitution saving throw. Constructs and undead arent affected, and plants and water elementals make this saving throw with disadvantage. A creature takes 10d8 necrotic damage on a failed save, or half as much damage on a successful one.",
      "url": "https://www.dnd-spells.com/spell/abi-dalzims-horrid-wilting",
      "damage": {
        "type": "necrotic damage",
        "levels": {
          1: 0,
          2: 0,
          3: 0,
          4: 0,
          5: 0,
          6: 0,
          7: 0,
          8: "10d8",
          9: "10d8"
        }
      }
    },
    "dissonant whispers": {
      "castingTime": "1 Action",
      "duration": "Instantaneous",
      "range": "60 feet",
      "components": "Verbal",
      "slotLevel": "1",
      "school": "Enchantment",
      "shortDescription": "A target takes 3d6 psychic damage on a failed wisdom save and must use its reaction to move away from you. On a successful save, the target takes half damage and doesnt move away. Deafened creatures automatically succeed.",
      "longDescription": "You whisper a discordant melody that only one creature of your choice within range can hear, wracking it with terrible pain. The target must make a Wisdom saving throw. On a failed save, it takes 3d6 psychic damage and must immediately use its reaction, if available, to move as far as its speed allows away from you. The creature doesnt move into obviously dangerous ground, such as a fire or a pit. On a successful save, the target takes half as much damage and doesnt have to move away. A deafened creature automatically succeeds on the save. AtHigherLevels.Whenyoucastthisspellusinga spell slot of 2nd level or higher, the damage increases by 1d6 for each slot level above 1st.",
      "url": "https://www.dnd-spells.com/spell/dissonant-whispers",
      "damage": {
        "type": "psychic damage",
        "levels": {
          1: "3d6",
          2: "4d6",
          3: "5d6",
          4: "6d6",
          5: "7d6",
          6: "8d6",
          7: "9d6",
          8: "10d6",
          9: "11d6"
        }
      }
    },
    "awaken": {
      "castingTime": "8 Hours",
      "duration": "Instantaneous",
      "range": "Touch",
      "components": "Verbal, Somatic, Material (an agate worth at least 1,000 gold pieces, which the spell consumes)",
      "slotLevel": "5",
      "school": "Transmutation",
      "shortDescription": "Targets with Intelligence scores of 3 or less gain an intelligence of 10 and can speak any language you know, and is charmed for 30 days. Plants become ambulatory.",
      "longDescription": "After spending the casting time tracing magical pathways within a precious gemstone, you touch a Huge or smaller beast or plant. The target must have either no Intelligence score or an Intelligence of 3 or less. The target gains an Intelligence of 10. The target also gains the ability to speak one language you know. If the target is a plant, it gains the ability to move its limbs, roots, vines, creepers, and so forth, and it gains senses similar to a humans. Your D. M. chooses statistics appropriate for the awakened plant, such as the statistics for the awakened shrub or the awakened tree. The awakened beast or plant is charmed by you for 30 days or until you or your companions do anything harmful to it. When the charmed condition ends, the awakened creature chooses whether to remain friendly to you, based on how you treated it while it was charmed.",
      "url": "https://www.dnd-spells.com/spell/awaken"
    },
    "armor of agathys": {
      "castingTime": "1 Action",
      "duration": "1 hour",
      "range": "Self",
      "components": "Verbal, Somatic, Material (a cup of water)",
      "slotLevel": "1",
      "school": "Abjuration",
      "shortDescription": "Gain 5 temporary health. Creatures that hit you take 5 cold damage.",
      "longDescription": "A protective magical force surrounds you, manifesting as a spectral frost that covers you and your gear. You gain 5 temporary hit points for the duration. If a creature hits you with a melee attack while you have these hit points, the creature takes 5 cold damage. At Higher Levels. When you cast this spell using a spell slot of 2nd level or higher, both the temporary hit points and the cold damage increase by 5 for each slot level above 1st.",
      "url": "https://www.dnd-spells.com/spell/armor-of-agathys"
    },
    "time stop": {
      "castingTime": "1 Action",
      "duration": "Instantaneous",
      "range": "Self",
      "components": "Verbal",
      "slotLevel": "9",
      "school": "Transmutation",
      "shortDescription": "Stop time and take 1d4 + 1 turns in a row. The spell ends if your actions effect a creature or object carried by a creature, or you move 1000 feet away.",
      "longDescription": "You briefly stop the flow of time for everyone but yourself. No time passes for other creatures, while you take 1d4 + 1 turns in a row, during which you can use actions and move as normal. This spell ends if one of the actions you use during this period, or any effects that you create during this period, affects a creature other than you or an object being worn or carried by someone other than you. In addition, the spell ends if you move to a place more than 1,000 feet from the location where you cast it.",
      "url": "https://www.dnd-spells.com/spell/time-stop"
    },
    "moonbeam": {
      "castingTime": "1 Action",
      "duration": "Concentration, up to 1 minute",
      "range": "120 feet",
      "components": "Verbal, Somatic, Material (several seeds of any moonseed plant and a piece of opalescent feldspar)",
      "slotLevel": "2",
      "school": "Evocation",
      "shortDescription": "Requires concentration. A 5 by 40 foot cylinder of light shines down. Creatures entering or starting thier turn in the cylinder take 2d10 radiant damage on a failed Constitution save, or half as much on a success. Shape changers have disadvantage and revert to thier original form on a fail. You can move the beam 60 feet as an action.",
      "longDescription": "A silvery beam of pale light shines down in a 5-foot- radius, 40-foot-high cylinder centered on a point within range. Until the spell ends, dim light fills the cylinder. When a creature enters the spells area for the first time on a turn or starts its turn there, it is engulfed in ghostly flames that cause searing pain, and it must make a Constitution saving throw. It takes 2d10 radiant damage on a failed save, or half as much damage on a successful one. A shape changer makes its saving throw with disadvantage. If it fails, it also instantly reverts to its original form and cant assume a different form until it leaves the spells light. On each of your turns after you cast this spell, you can use an action to move the beam 60 feet in any direction. At Higher Levels: When you cast this spell using a spell slot of 3rd level or higher, the damage increases by 1dlO for each slot level above 2nd.",
      "url": "https://www.dnd-spells.com/spell/moonbeam",
      "damage": {
        "type": "radiant damage",
        "levels": {
          1: 0,
          2: "2d10",
          3: "3d10",
          4: "4d10",
          5: "5d10",
          6: "6d10",
          7: "7d10",
          8: "8d10",
          9: "9d10"
        }
      }
    },
    "divination": {
      "castingTime": "1 Action",
      "duration": "Instantaneous",
      "range": "Self",
      "components": "Verbal, Somatic, Material  (incense and a sacrificial offering appropriate to your religion, together worth at least 25 gold pieces, which the spell consumes)",
      "slotLevel": "4",
      "school": "Divination Ritual",
      "shortDescription": "You can ask a single question concerning a specific event, goal, or activty every 7 days. The D. M. ansers truthfully, though not necessarily clearly.",
      "longDescription": "Your magic and an offering put you in contact with a god or a gods servants. You ask a single question concerning a specific goal, event, or activity to occur within 7 days. The D. M. offers a truthful reply. The reply might be a short phrase, a cryptic rhyme, or an omen. The spell doesnt take into account any possible circumstances that might change the outcome, such as the casting of additional spells or the loss or gain of a companion. If you cast the spell two or more times before finishing your next long rest, there is a cumulative 25 percent chance for each casting after the first that you get a random reading. The D. M. makes this roll in secret.",
      "url": "https://www.dnd-spells.com/spell/divination-ritual"
    },
    "heroism": {
      "castingTime": "1 Action",
      "duration": "Concentration, up to 1 minute",
      "range": "Touch",
      "components": "Verbal, Somatic",
      "slotLevel": "1",
      "school": "Enchantment",
      "shortDescription": "Requires concentration. A willing creature you touch is immune to being frightened and gains temporary hit points equal to your spellcasting ability modifier at the start of each of its turns.",
      "longDescription": "A willing creature you touch is imbued with bravery. Until the spell ends, the creature is immune to being frightened and gains temporary hit points equal to your spellcasting ability modifier at the start of each of its turns. When the spell ends, the target loses any remaining temporary hit points from this spell. At Higher Levels: When you cast this spell using a spell slot of 2nd level or higher, you can target one additional creature for each slot level above 1st.",
      "url": "https://www.dnd-spells.com/spell/heroism"
    },
    "pass without trace": {
      "castingTime": "1 Action",
      "duration": "Concentration, up to 1 hour",
      "range": "Self",
      "components": "Verbal, Somatic, Material (ashes from a burned leaf of mistletoe and a sprig of spruce)",
      "slotLevel": "2",
      "school": "Abjuration",
      "shortDescription": "Each creature you choose +10 to Dexterity checks and can only be tracked by magical means.",
      "longDescription": "A veil of shadows and silence radiates from you, masking you and your companions from detection. For the duration, each creature you choose within 30 feet of you (including you) has a +10 bonus to Dexterity (Stealth) checks and cant be tracked except by magical means. A creature that receives this bonus leaves behind no tracks or other traces of its passage.",
      "url": "https://www.dnd-spells.com/spell/pass-without-trace"
    },
    "enlarge/reduce": {
      "castingTime": "1 Action",
      "duration": "Concentration, up to 1 minute",
      "range": "30 feet",
      "components": "Verbal, Somatic, Material (a pinch of powdered iron)",
      "slotLevel": "2",
      "school": "Transmutation",
      "shortDescription": "Requires concentration. Cause a creature or object to grow larger or smaller. Unwilling creatures need to make a Constitution save. For enlarge, the target doubles in size and weighs 8 times as much, and has advantage on strength checks and saves. Enlarged weapons do an extra 1d4 damage. Reduce has the opposite effect.",
      "longDescription": "You cause a creature or an object you can see within range to grow larger or smaller for the duration. Choose either a creature or an object that is neither worn nor carried. If the target is unwilling, it can make a Constitution saving throw. On a success, the spell has no effect. If the target is a creature, everything it is wearing and carrying changes size with it. Any item dropped by an affected creature returns to normal size at once. Enlarge. The targets size doubles in all dimensions, and its weight is multiplied by eight. This growth increases its size by one category, from Medium to Large, for example. If there isnt enough room for the target to double its size, the creature or object attains the maximum possible size in the space available. Until the spell ends, the target also has advantage on Strength checks and Strength saving throws. The targets weapons also grow to match its new size. While these weapons are enlarged, the targets attacks with them deal 1d4 extra damage. Reduce. The targets size is halved in all dimensions, and its weight is reduced to one-eighth of normal. This reduction decreases its size by one category, from Medium to Small, for example. Until the spell ends, the target also has disadvantage on Strength checks and Strength saving throws. The targets weapons also shrink to match its new size. While these weapons are reduced, the targets attacks with them deal 1d4 less damage (this cant reduce the damage below 1).",
      "url": "https://www.dnd-spells.com/spell/enlargereduce",
      "damage": "Complex Damage Progression. Please consult short or long descriptions"
    },
    "rope trick": {
      "castingTime": "1 Action",
      "duration": "1 hour",
      "range": "Touch",
      "components": "Verbal, Somatic, Material (powdered corn extract and a twisted loop of parchment)",
      "slotLevel": "2",
      "school": "Transmutation",
      "shortDescription": "A rope 60 feet long or less raises up into the air, leading into an extradimensional door at the toop. Spells and damage cant cross the door, and any creatures that climbed into the door fall out when the spells end.",
      "longDescription": "You touch a length of rope that is up to 60 feet long. One end of the rope then rises into the air until the whole rope hangs perpendicular to the ground. At the upper end of the rope, an invisible entrance opens to an extradimensional space that lasts until the spell ends. The extradimensional space can be reached by climbing to the top of the rope. The space can hold as many as eight Medium or smaller creatures. The rope can be pulled into the space, making the rope disappear from view outside the space. Attacks and spells cant cross through the entrance into or out of the extradimensional space, but those inside can see out of it as if through a 3-foot-by-5-foot window centered on the rope. Anything inside the extradimensional space drops out when the spell ends.",
      "url": "https://www.dnd-spells.com/spell/rope-trick"
    },
    "burning hands": {
      "castingTime": "1 Action",
      "duration": "Instantaneous",
      "range": "Self (15-foot cone)",
      "components": "Verbal, Somatic",
      "slotLevel": "1",
      "school": "Evocation",
      "shortDescription": "Each creature in a 15 foot cone takes 3d6 fire damage on a failed Dexterity save, or half as much on a success.",
      "longDescription": "As you hold your hands with thumbs touching and fingers spread, a thin sheet of flames shoots forth from your outstretched fingertips. Each creature in a 15-foot cone must make a Dexterity saving throw. A creature takes 3d6 fire damage on a failed save, or half as much damage on a successful one. The fire ignites any flammable objects in the area that arent being worn or carried. At Higher Levels: When you cast this spell using a spell slot of 2nd level or higher, the damage increases by 1d6 for each slot level above 1st.",
      "url": "https://www.dnd-spells.com/spell/burning-hands",
      "damage": {
        "type": "fire damage",
        "levels": {
          1: "3d6",
          2: "4d6",
          3: "5d6",
          4: "6d6",
          5: "7d6",
          6: "8d6",
          7: "9d6",
          8: "10d6",
          9: "11d6"
        }
      }
    },
    "antimagic field": {
      "castingTime": "1 Action",
      "duration": "Concentration, up to 1 hour",
      "range": "Self (10-foot-radius sphere)",
      "components": "Verbal, Somatic Material (a pinch of powdered iron or iron filings)",
      "slotLevel": "8",
      "school": "Abjuration",
      "shortDescription": "Requires concentration. You are surrounded by a 10 foot radius sphere of antimagic. Within the sphere, spells cant be cast, summoned creatures disappear, and magic items become mundane. Existing spell effects are suspended, but the timers continue.",
      "longDescription": "A 10-foot-radius invisible sphere of antimagic surrounds you. This area is divorced from the magical energy that suffuses the multiverse. Within the sphere, spells cant be cast, summoned creatures disappear, and even magic items become mundane. Until the spell ends, the sphere moves with you, centered on you. Spells and other magical effects, except those created by an artifact or a deity, are suppressed in the sphere and cant protrude into it. A slot expended to cast a suppressed spell is consumed. While an effect is suppressed, it doesnt function, but the time it spends suppressed counts against its duration. Targeted Effects. Spells and other magical effects, such as magic missile and charm person, that target a creature or an object in the sphere have no effect on that target. Areas of Magic. The area of another spell or magical effect, such as fireball, cant extend into the sphere. If the sphere overlaps an area of magic, the part of the area that is covered by the sphere is suppressed. For example, the flames created by a wall offire are suppressed within the sphere, creating a gap in the wall if the overlap is large enough. Spells. Any active spell or other magical effect on a creature or an object in the sphere is suppressed while the creature or object is in it. Magic Items. The properties and powers of magic items are suppressed in the sphere. For example, a +1 longsword in the sphere functions as a nonmagical longsword. A magic weapons properties and powers are suppressed if it is used against a target in the sphere or wielded by an attacker in the sphere. If a magic weapon or a piece of magic ammunition fully leaves the sphere (for example, ifyou fire a magic arrow or throw a magic spear at a target outside the sphere), the magic of the item ceases to be suppressed as soon as it exits. Magical Travel. Teleportation and planar travel fail to work in the sphere, whether the sphere is the destination or the departure point for such magical travel. A portal to another location, world, or plane of existence, as well as an opening to an extradimensional space such as that created by the rope trick spell, temporarily closes while in the sphere. Creatures and Objects. A creature or object summoned or created by magic temporarily winks out of existence in the sphere. Such a creature instantly reappears once the space the creature occupied is no longer within the sphere. Dispel Magic. Spells and magical effects such as dispel magic have no effect on the sphere. Likewise, the spheres created by different antimagic field spells dont nullify each other.",
      "url": "https://www.dnd-spells.com/spell/antimagic-field"
    },
    "earthbind": {
      "castingTime": "1 Action",
      "duration": "Concentration, up to 1 minute",
      "range": "300 feet",
      "components": "Verbal",
      "slotLevel": "2",
      "school": "Transmutation",
      "shortDescription": "Requires concentration. One target must succeed on a strength save or its flying speed is reduced to 0, falling at 60 feet per round",
      "longDescription": "Choose one creature you can see within range. Yellow strips of magical energy loop around the creature. The target must succeed on a Strength saving throw or its flying speed (if any) is reduced to 0 feet for the spells duration. An airborne creature affected by this spell descends at 60 feet per round until it reaches the ground or the spell ends.",
      "url": "https://www.dnd-spells.com/spell/earthbind"
    },
    "aura of vitality": {
      "castingTime": "1 Action",
      "duration": "Concentration, up to 1 minute",
      "range": "Self (30-foot radius)",
      "components": "Verbal",
      "slotLevel": "3",
      "school": "Evocation",
      "shortDescription": "Requires concentration. Healing energy radiates from you in an aura with a 30-foot radius. Until the spell ends, the aura moves with you, centered on you. You can use a bonus action to cause one creature in the aura (including you) to regain 2d6 hit points.",
      "longDescription": "Healing energy radiates from you in an aura with a 30-foot radius. Until the spell ends, the aura moves with you, centered on you. You can use a bonus action to cause one creature in the aura (including you) to regain 2d6 hit points.",
      "url": "https://www.dnd-spells.com/spell/aura-of-vitality"
    },
    "passwall": {
      "castingTime": "1 Action",
      "duration": "1 hour",
      "range": "30 feet",
      "components": "Verbal, Somatic, Material (a pinch of sesame seeds)",
      "slotLevel": "5",
      "school": "Transmutation",
      "shortDescription": "A passage appears in a wall or floor, up to 20 ft deep.",
      "longDescription": "A passage appears at a point of your choice that you can see on a wooden, plaster, or stone surface (such as a wall, a ceiling, or a floor) within range, and lasts for the duration. You choose the openings dimensions: up to 5 feet wide, 8 feet tall, and 20 feet deep. The passage creates no instability in a structure surrounding it. When the opening disappears, any creatures or objects still in the passage created by the spell are safely ejected to an unoccupied space nearest to the surface on which you cast the spell.",
      "url": "https://www.dnd-spells.com/spell/passwall"
    },
    "commune with nature": {
      "castingTime": "1 Minute",
      "duration": "Instantaneous",
      "range": "Self",
      "components": "Verbal, Somatic",
      "slotLevel": "5",
      "school": "Divination Ritual",
      "shortDescription": "Gain knowledge of up to 3 facts about the surrounding territory. If you are outside, you know about land within 3 miles, and if you are underground the radius is limited to 300 feet.",
      "longDescription": "You briefly become one with nature and gain knowledge of the surrounding territory. In the outdoors, the spell gives you knowledge of the land within 3 miles of you. In caves and other natural underground settings, the radius is limited to 300 feet. The spell doesnt function where nature has been replaced by construction, such as in dungeons and towns. You instantly gain knowledge of up to three facts of your choice about any of the following subjects as they relate to the area: terrain and bodies of water prevalent plants, minerals, animals, or peoples powerful celestials, fey, fiends, elementals, or undead influence from other planes of existence buildings For example, you could determine the location of powerful undead in the area, the location of major sources of safe drinking water, and the location of any nearby towns.",
      "url": "https://www.dnd-spells.com/spell/commune-with-nature-ritual"
    },
    "shape water": {
      "castingTime": "1 Action",
      "duration": "Instantaneous or 1 hour",
      "range": "30 feet",
      "components": "Somatic",
      "slotLevel": "cantrip",
      "school": "Transmutation",
      "shortDescription": "You can modify water that fits within a 5 foot cube. You can change the flow of the water, form it into simple shapes, change its color or opacity, or freeze it provided there are no creatures in it. Effects last an hour.",
      "longDescription": "You choose an area of water that you can see within range and that fits within a 5-foot cube. You manipulate it in one of the 4 following ways: 1) You instantaneously move or otherwise change the flow of the water as you direct, up to 5 feet in any direction. This movement doesnt have enough force to cause damage. 2) You cause the water to form into simple shapes and animate at your direction. This change lasts for 1 hour. 3) You change the waters color or opacity. The water must be changed in the same way throughout. This change lasts for 1 hour. 4) You freeze the water, provided that there are no crea- tures in it. The water unfreezes in 1 hour. If you cast this spell multiple times, you can have no more than two of its non-instantaneous effects active at a time, and you can dismiss such an effect as an action.",
      "url": "https://www.dnd-spells.com/spell/shape-water"
    },
    "wall of stone": {
      "castingTime": "1 Action",
      "duration": "Concentration, up to 10 minutes",
      "range": "120 feet",
      "components": "Verbal, Somatic, Material (a small block of granite)",
      "slotLevel": "5",
      "school": "Evocation",
      "shortDescription": "Requires concentration. Create a stone wall consisting of 6 inch thick panels 10 by 10 feet in size. Creatures can make a Dexterity save to escape boxes you try to create around them. The wall does not have to be vertical. Each panel has AC 15 and 30 health per inch of thickness.",
      "longDescription": "A nonmagical wall of solid stone springs into existence at a point you choose within range. The wall is 6 inches thick and is com posed of ten 10-foot-by-10-foot panels. Each panel must be contiguous with at least one other panel. Alternatively, you can create 10-foot-by-20-foot panels that are only 3 inches thick. If the wall cuts through a creatures space when it appears, the creature is pushed to one side of the wall (your choice). If a creature would be surrounded on all sides by the wall (or the wall and another solid surface), that creature can make a Dexterity saving throw. On a success, it can use its reaction to move up to its speed so that it is no longer enclosed by the wall. The wall can have any shape you desire, though it cant occupy the same space as a creature or object. The wall doesnt need to be vertical or rest on any firm foundation. It must, however, merge with and be solidly supported by existing stone. Thus, you can use this spell to bridge a chasm or create a ramp. If you create a span greater than 20 feet in length, you must halve the size of each panel to create supports. You can crudely shape the wall to create crenellations, battlements, and so on. The wall is an object made of stone that can be damaged and thus breached. Each panel has AC 15 and 30 hit points per inch of thickness. Reducing a panel to 0 hit points destroys it and might cause connected panels to collapse at the D. M.s discretion. If you maintain your concentration on this spell for its whole duration, the wall becomes permanent and cant be dispelled. Otherwise, the wall disappears when the spell ends.",
      "url": "https://www.dnd-spells.com/spell/wall-of-stone"
    },
    "destructive wave": {
      "castingTime": "1 Action",
      "duration": "Instantaneous",
      "range": "Self (30-foot radius)",
      "components": "Verbal",
      "slotLevel": "5",
      "school": "Evocation",
      "shortDescription": "Each creature of your choosing within 30 feet must make a Constitution save or takes 5d6 thunder damage, as well as as 5d6 radiant or necrotic damage, and is knocked prone. A creature that succeeds on its saving throw takes half as much damage and isnt knocked prone.",
      "longDescription": "You strike the ground, creating a burst of divine energy that ripples outward from you. Each creature you choose within 30 feet of you must succeed on a Constitution saving throw or take 5d6 thunder damage, as well as 5d6 radiant or necrotic damage (your choice), and be knocked prone. A creature that succeeds on its saving throw takes half as much damage and isnt knocked prone.",
      "url": "https://www.dnd-spells.com/spell/destructive-wave",
      "damage": {
        "type": "radiant or necrotic damage",
        "levels": {
          1: 0,
          2: 0,
          3: 0,
          4: 0,
          5: "5d6",
          6: "5d6",
          7: "5d6",
          8: "5d6",
          9: "5d6"
        }
      }
    },
    "shatter": {
      "castingTime": "1 Action",
      "duration": "Instantaneous",
      "range": "60 feet",
      "components": "Verbal, Somatic, Material (a chip of mica)",
      "slotLevel": "2",
      "school": "Evocation",
      "shortDescription": "Each creature in a 10-foot radius sphere takes 3d8 thunder damage on a failed Constitution save, half as much on a success. Inorganic creatures have disadvantage on this roll.",
      "longDescription": "A sudden loud ringing noise, painfully intense, erupts from a point of your choice within range. Each creature in a 10-foot-radius sphere centered on that point must make a Constitution saving throw. A creature takes 3d8 thunder damage on a failed save, or half as much damage on a successful one. A creature made of inorganic material such as stone, crystal, or metal has disadvantage on this saving throw. A nonmagical object that isnt being worn or carried also takes the damage if its in the spells area. At Higher Levels: When you cast this spell using a spell slot of 3rd level or higher, the damage increases by 1d8 for each slot level above 2nd.",
      "url": "https://www.dnd-spells.com/spell/shatter",
      "damage": {
        "type": "thunder damage",
        "levels": {
          1: 0,
          2: "3d8",
          3: "4d8",
          4: "5d8",
          5: "6d8",
          6: "7d8",
          7: "8d8",
          8: "9d8",
          9: "10d8"
        }
      }
    },
    "tensers floating disk": {
      "castingTime": "1 Action",
      "duration": "1 hour",
      "range": "30 feet",
      "components": "Verbal, Somatic, Material (a drop of mercury)",
      "slotLevel": "1",
      "school": "Conjuration Ritual",
      "shortDescription": "Create a 3 foot diameter disk that follows you around and can hold 500 lbs.",
      "longDescription": "Thisspellcreatesacircular,horizontalplaneofforce, 3 feet in diameter and 1 inch thick, that floats 3 feet above the ground in an unoccupied space of your choice that you can see within range. The disk remains for the duration, and can hold up to 500 pounds. If more weight is placed on it, the spell ends, and everything on the disk falls to the ground. The disk is immobile while you are within 20 feet of it. If you move more than 20 feet away from it, the disk follows you so that it remains within 20 feet of you. It can move across uneven terrain, up or down stairs, slopes and the like, but it cant cross an elevation change of 10 feet or more. For example, the disk cant move across a 10-foot-deep pit, nor could it leave such a pit if it was created at the bottom. If you move more than 100 feet from the disk (typically because it cant move around an obstacle to follow you), the spell ends.",
      "url": "https://www.dnd-spells.com/spell/tensers-floating-disk-ritual"
    },
    "flesh to stone": {
      "castingTime": "1 Action",
      "duration": "Concentration, up to 1 minute",
      "range": "60 feet",
      "components": "Verbal,Somatic,Material (a pinch of lime, water, and earth)",
      "slotLevel": "6",
      "school": "Transmutation",
      "shortDescription": "Requires concentration. A target creature must make a Constitution save or slowly begins turning to stone. If it successfully saves against the spell three times, the spell ends. Otherwise, it is turned to stone. The creature makes Constitution saves at the end of each turn.",
      "longDescription": "You attempt to turn one creature that you can see within range into stone. If the targets body is made of flesh, the creature must make a Constitution saving throw. On a failed save, it is restrained as its flesh begins to harden. On a successful save, the creature isnt affected. A creature restrained by this spell must make another Constitution saving throw at the end of each of its turns. If it successfully saves against this spell three times, the spell ends. If it fails its saves three times, it is turned to stone and subjected to the petrified condition for the duration. The successes and failures dont need to be consecutive; keep track of both until the target collects three of a kind. If the creature is physically broken while petrified, it suffers from similar deformities if it reverts to its original state. If you maintain your concentration on this spell for the entire possible duration, the creature is turned to stone until the effect is removed.",
      "url": "https://www.dnd-spells.com/spell/flesh-to-stone"
    },
    "spiritual weapon": {
      "castingTime": "1 Bonus Action",
      "duration": "1 minute",
      "range": "60 feet",
      "components": "Verbal, Somatic",
      "slotLevel": "2",
      "school": "Evocation",
      "shortDescription": "Create a spectral weapon that can make a melee spekk attack on creatures within 5 feet. The target takes 1d8 + your spellcasting ability modifier on hit. You can move the weapon 20 feet and repeat the attack as a bonus action.",
      "longDescription": "You create a floating, spectral weapon within range that lasts for the duration or until you cast this spell again. When you cast the spell, you can make a melee spell attack against a creature within 5 feet of the weapon. On a hit, the target takes force damage equal to 1d8 + your spellcasting ability modifier. As a bonus action on your turn, you can move the weapon up to 20 feet and repeat the attack against a creature within 5 feet of it. The weapon can take whatever form you choose. Clerics of deities who are associated with a particular weapon (as St. Cuthbert is known for his mace and Thor for his hammer) make this spells effect resemble that weapon. At Higher Levels: When you cast this spell using a spell slot of 3rd level or higher, the damage increases by 1d8 for every two slot levels above the 2nd.",
      "url": "https://www.dnd-spells.com/spell/spiritual-weapon"
    },
    "chill touch": {
      "castingTime": "1 Action",
      "duration": "1 round",
      "range": "120 feet",
      "components": "Verbal, Somatic",
      "slotLevel": "cantrip",
      "school": "Necromancy",
      "shortDescription": "A ghostly skeletal hand attacks a creature within 120 feet. If a ranged spell attack hits, the target takes 1d8 necrotic damage and cant regain health until the start of your next turn.",
      "longDescription": "You create a ghostly, skeletal hand in the space of a creature within range. Make a ranged spell attack against the creature to assail it with the chill of the grave. On a hit, the target takes 1d8 necrotic damage, and it cant regain hit points until the start of your next turn. Until then, the hand clings to the target. If you hit an undead target, it also has disadvantage on attack rolls against you until the end of your next turn. This spells damage increases by 1d8 when you reach 5th level (2d8), 11th level (3d8), and 17th level (4d8).",
      "url": "https://www.dnd-spells.com/spell/chill-touch",
      "damage": {
        "type": "necrotic damage",
        "playerLevel": {
          1: "1d8",
          2: "1d8",
          3: "1d8",
          4: "1d8",
          5: "2d8",
          6: "2d8",
          7: "2d8",
          8: "2d8",
          9: "2d8",
          10: "2d8",
          11: "3d8",
          12: "3d8",
          13: "3d8",
          14: "3d8",
          15: "3d8",
          16: "3d8",
          17: "4d8",
          18: "4d8",
          19: "4d8",
          20: "4d8"
        }
      }
    },
    "hold person": {
      "castingTime": "1 Action",
      "duration": "Concentration, up to 1 minute",
      "range": "60 feet",
      "components": "Verbal, Somatic, Material (a small, straight piece of iron)",
      "slotLevel": "2",
      "school": "Enchantment",
      "shortDescription": "Requires concentration. A humanoid target must succeed on a wisdom save or becomes paralyzed. It can make a wisdom save at the end of each turn to end the spell.",
      "longDescription": "Choose a humanoid that you can see within range. The target must succeed on a wisdom saving throw or be paralyzed for the duration. At the end of each of its turns, the target can make another Wisdom saving throw. On a success, the spell ends on the target. At Higher Levels: When you cast this spell using a spell slot of 3rd level or higher, you can target one additional humanoid for each slot level above 2nd. The humanoids must be within 30 feet of each other when you target them.",
      "url": "https://www.dnd-spells.com/spell/hold-person"
    },
    "thorn whip": {
      "castingTime": "1 Action",
      "duration": "Instantaneous",
      "range": "30 feet",
      "components": "Verbal, Somatic, Material (the stem of a plant with thorns)",
      "slotLevel": "cantrip",
      "school": "Transmutation",
      "shortDescription": "If you succeed on a melee spell attack roll, the target takes 1d6 piercing damage and large or smaller creatures are pulled 10 feet closer to you.",
      "longDescription": "You create a long, vine-like whip covered in thorns that lashes out at your command toward a creature in range. Make a melee spell attack against the target. If the attack hits, the creature takes 1d6 piercing damage, and if the creature is Large or smaller, you pull the creature up to 10 feet closer to you. This spells damage increases by 1d6 when you reach 5th level (2d6), 11th level (3d6), and 17th level (4d6).",
      "url": "https://www.dnd-spells.com/spell/thorn-whip",
      "damage": {
        "type": "piercing damage",
        "playerLevel": {
          1: "1d6",
          2: "1d6",
          3: "1d6",
          4: "1d6",
          5: "2d6",
          6: "2d6",
          7: "2d6",
          8: "2d6",
          9: "2d6",
          10: "2d6",
          11: "3d6",
          12: "3d6",
          13: "3d6",
          14: "3d6",
          15: "3d6",
          16: "3d6",
          17: "4d6",
          18: "4d6",
          19: "4d6",
          20: "4d6"
        }
      }
    },
    "misty step": {
      "castingTime": "1 Bonus Action",
      "duration": "Instantaneous",
      "range": "Self",
      "components": "Verbal",
      "slotLevel": "2",
      "school": "Conjuration",
      "shortDescription": "Teleport up to 30 feet to an unoccupied space that you can see.",
      "longDescription": "Briefly surrounded by silvery mist, you teleport up to 30 feet to an unoccupied space that you can see.",
      "url": "https://www.dnd-spells.com/spell/misty-step"
    },
    "blinding smite": {
      "castingTime": "1 Bonus Action",
      "duration": "Concentration, up to 1 minute",
      "range": "Self",
      "components": "Verbal",
      "slotLevel": "3",
      "school": "Evocation",
      "shortDescription": "Requires concentration. The next time you hit a creature with a melee weapon attack during this spells duration, your weapon flares with bright light, and the attack deals an extra 3d8 radiant damage to the target. Additionally, the target must succeed on a Constitution saving throw or be blinded until the spell ends. A creature blinded by this spell makes another Constitution saving throw at the end of each of its turns. On a successful save, it is no longer blinded.",
      "longDescription": "The next time you hit a creature with a melee weapon attack during this spells duration, your weapon flares with bright light, and the attack deals an extra 3d8 radiant damage to the target. Additionally, the target must succeed on a Constitution saving throw or be blinded until the spell ends. A creature blinded by this spell makes another Constitution saving throw at the end of each of its turns. On a successful save, it is no longer blinded.",
      "url": "https://www.dnd-spells.com/spell/blinding-smite",
      "damage": {
        "type": "radiant damage",
        "levels": {
          1: 0,
          2: 0,
          3: "3d8",
          4: "3d8",
          5: "3d8",
          6: "3d8",
          7: "3d8",
          8: "3d8",
          9: "3d8"
        }
      }
    },
    "guiding bolt": {
      "castingTime": "1 Action",
      "duration": "1 round",
      "range": "120 feet",
      "components": "Verbal, Somatic",
      "slotLevel": "1",
      "school": "Evocation",
      "shortDescription": "Make a ranged spell attack on a target. On hit, the target takes 4d6 radiant damage, and your next attack roll against this target has advantage.",
      "longDescription": "A flash of light streaks toward a creature of your choice within range. Make a ranged spell attack against the target. On a hit, the target takes 4d6 radiant damage, and the next attack roll made against this target before the end of your next turn has advantage, thanks to the mystical dim light glittering on the target until then. At Higher Levels: When you cast this spell using a spell slot of 2nd level or higher, the damage increases by 1d6 for each slot level above 1st.",
      "url": "https://www.dnd-spells.com/spell/guiding-bolt",
      "damage": {
        "type": "radiant damage",
        "levels": {
          1: "4d6",
          2: "5d6",
          3: "6d6",
          4: "7d6",
          5: "8d6",
          6: "9d6",
          7: "10d6",
          8: "11d6",
          9: "12d6"
        }
      }
    },
    "blink": {
      "castingTime": "1 Action",
      "duration": "1 minute",
      "range": "Self",
      "components": "Verbal, Somatic",
      "slotLevel": "3",
      "school": "Transmutation",
      "shortDescription": "At the end of each of your turns, roll a d20. On an 11 or higher, you disappear into the ethereal plane and reappear in a space 10 feet away on your next turn.",
      "longDescription": "Roll a d20 at the end of each of your turns for the duration of the spell. On a roll of 11 or higher, you vanish from your current plane of existence and appear in the Ethereal Plane (the spell fails and the casting is wasted if you were already on that plane). At the start of your next turn, and when the spell ends if you are on the Ethereal Plane, you return to an unoccupied space of your choice that you can see within 10 feet of the space you vanished from. If no unoccupied space is available within that range, you appear in the nearest unoccupied space (chosen at random if more than one space is equally near). You can dismiss this spell as an action. While on the Ethereal Plane, you can see and hear the plane you originated from, which is cast in shades of gray, and you cant see anything there more than 60 feet away. You can only affect and be affected by other creatures on the Ethereal Plane. Creatures that arent there cant perceive you or interact with you, unless they have the ability to do so.",
      "url": "https://www.dnd-spells.com/spell/blink"
    },
    "mage hand": {
      "castingTime": "1 Action",
      "duration": "1 minute",
      "range": "30 feet",
      "components": "Verbal, Somatic",
      "slotLevel": "cantrip",
      "school": "Conjuration",
      "shortDescription": "Create a floating hand that you can control with your action. It must stay within 30 feet of you. It cant attack, activate magic items, or carry more than 10 lbs.",
      "longDescription": "A spectral, floating hand appears at a point you choose within range. The hand lasts for the duration or until you dismiss it as an action. The hand vanishes if it is ever m ore than 30 feet away from you or if you cast this spell again. You can use your action to control the hand. You can use the hand to manipulate an object, open an unlocked door or container, stow or retrieve an item from an open container, or pour the contents out of a vial. You can move the hand up to 30 feet each time you use it. The hand cant attack, activate magic items, or carry more than 10 pounds.",
      "url": "https://www.dnd-spells.com/spell/mage-hand"
    },
    "knock": {
      "castingTime": "1 Action",
      "duration": "Instantaneous",
      "range": "60 feet",
      "components": "Verbal",
      "slotLevel": "2",
      "school": "Transmutation",
      "shortDescription": "Any locked, barred, or stuck object becomes openable. Only one locking mechanism is released per use. A loud audible knock is heard within 300 feet.",
      "longDescription": "Choose an object that you can see within range. The object can be a door, a box, a chest, a set of manacles, a padlock, or another object that contains a mundane or magical means that prevents access. A target that is held shut by a mundane lock or that is stuck or barred becomes unlocked, unstuck, or unbarred. Ifthe object has multiple locks, only one of them is unlocked. If you choose a target that is held shut with arcane lock, that spell is suppressed for 10 minutes, during which time the target can be opened and shut normally. When you cast the spell, a loud knock, audible from as far away as 300 feet, emanates from the target object.",
      "url": "https://www.dnd-spells.com/spell/knock"
    },
    "circle of death": {
      "castingTime": "1 Action",
      "duration": "Instantaneous",
      "range": "150 feet",
      "components": "Verbal, Somatic, Material  (the powder of a crushed black pearl worth at least 500 gold pieces)",
      "slotLevel": "6",
      "school": "Necromancy",
      "shortDescription": "Every creature in a 60 foot radius sphere takes 8d6 necrotic damage on a failed Constitution save, or half as much on a success.",
      "longDescription": "A sphere of negative energy ripples out in a 60-foot- radius sphere from a point within range. Each creature in that area must make a Constitution saving throw. A target takes 8d6 necrotic damage on a failed save, or half as much damage on a successful one. At Higher Levels: When you cast this spell using a spell slot of 7th level or higher, the damage increases by 2d6 for each slot level above 6th",
      "url": "https://www.dnd-spells.com/spell/circle-of-death",
      "damage": {
        "type": "necrotic damage",
        "levels": {
          1: 0,
          2: 0,
          3: 0,
          4: 0,
          5: 0,
          6: "8d6",
          7: "9d6",
          8: "10d6",
          9: "11d6"
        }
      }
    },
    "finger of death": {
      "castingTime": "1 Action",
      "duration": "Instantaneous",
      "range": "60 feet",
      "components": "Verbal, Somatic",
      "slotLevel": "7",
      "school": "Necromancy",
      "shortDescription": "Your target takes 7d8 + 30 necrotic damage on a failed Constitution save, or half as much on a success. A humanoid killed by this spell is raised as a zombie under your control on the next turn, and is under your command.",
      "longDescription": "You send negative energy coursing through a creature that you can see within range, causing it searing pain. The target must make a Constitution saving throw. It takes 7d8 + 30 necrotic damage on a failed save, or half as much damage on a successful one. A humanoid killed by this spell rises at the start of your next turn as a zombie that is permanently under your command, following your verbal orders to the best of its ability.",
      "url": "https://www.dnd-spells.com/spell/finger-of-death"
    },
    "mordenkainens faithful hound": {
      "castingTime": "1 Action",
      "duration": "8 hours",
      "range": "30 feet",
      "components": "Verbal, Somatic, Material (a tiny silver whistle, a piece of bone, and a thread)",
      "slotLevel": "4",
      "school": "Conjuration",
      "shortDescription": "A watchdog alerts you of any creatures, invisible, on this plane, or otherwise obscured by illusions, that doesnt speak a password when they come within 50 feet of it. At the start of each turn, the hound bites one target within 5ft with attack bonus equal to your spellcasting modifier + your proficiency bonus, and does 4d8 piercing damage.",
      "longDescription": "You conjure a phantom watchdog in an unoccupied space that you can see within range, where it remains for the duration, until you dismiss it as an action, or until you move more than 100 feet away from it. The hound is invisible to all creatures except you and cant be harmed. When a Small or larger creature com es within 30 feet of it without first speaking the password that you specify when you cast this spell, the hound starts barking loudly. The hound sees invisible creatures and can see into the Ethereal Plane. It ignores illusions. At the start of each of your turns, the hound attempts to bite one creature within 5 feet of it that is hostile to you. The hounds attack bonus is equal to your spellcasting ability modifier + your proficiency bonus. On a hit, it deals 4d8 piercing damage.",
      "url": "https://www.dnd-spells.com/spell/mordenkainens-faithful-hound",
      "damage": {
        "type": "piercing damage",
        "levels": {
          1: 0,
          2: 0,
          3: 0,
          4: "4d8",
          5: "4d8",
          6: "4d8",
          7: "4d8",
          8: "4d8",
          9: "4d8"
        }
      }
    },
    "true strike": {
      "castingTime": "1 Action",
      "duration": "Concentration, up to 1 round",
      "range": "30 feet",
      "components": "Somatic",
      "slotLevel": "cantrip",
      "school": "Divination",
      "shortDescription": "Requires concentration. On your next turn, you gain advantage on your first attack roll against the target.",
      "longDescription": "You extend your hand and point a finger at a target in range. Your magic grants you a brief insight into the targets defenses. On your next turn, you gain advantage on your first attack roll against the target, provided that this spell hasnt ended.",
      "url": "https://www.dnd-spells.com/spell/true-strike"
    },
    "bless": {
      "castingTime": "1 Action",
      "duration": "Concentration, up to 1 minute",
      "range": "30 feet",
      "components": "Verbal, Somatic, Material (a sprinkling of holy water) ",
      "slotLevel": "1",
      "school": "Enchantment",
      "shortDescription": "Requires concentration. You bless up to three creatures of your choice within range. Whenever a target makes an attack roll or a saving throw before the spell ends, the target can roll a d4 and add the number rolled to the attack roll or saving throw.",
      "longDescription": "You bless up to three creatures of your choice within range. Whenever a target makes an attack roll or a saving throw before the spell ends, the target can roll a d4 and add the number rolled to the attack roll or saving throw. At Higher Levels: When you cast this spell using a spell slot of 2nd level or higher, you can target one additional creature for each slot level above 1st.",
      "url": "https://www.dnd-spells.com/spell/bless"
    },
    "tsunami": {
      "castingTime": "1 Minute",
      "duration": "Concentration, up to 6 rounds",
      "range": "Sight",
      "components": "Verbal, Somatic",
      "slotLevel": "8",
      "school": "Conjuration",
      "shortDescription": "Requires concentration. Create a wall of water up to 300 feet long, 300 feet high, and 50 feet thick. Creatures in the wave take 6d10 bludgeoning damage on a failed strength save, half as much on a success. Each turn, the wall moves 50 feet away from you, taking huge or smaller creatures with it. Creatures subsequently struck by the wave take 5d10 bludgeoning damage, or half as much on a strength save. The walls hieght reduces by 50 feet each turn, and damage is reduced by 1d10.",
      "longDescription": "A wall of water springs into existence at a point you choose within range. You can make the wall up to 300 feet long, 300 feet high, and 50 feet thick. The wall lasts for the duration. When the wall appears, each creature within its area must make a Strength saving throw. On a failed save, a creature takes 6d10 bludgeoning damage, or half as much damage on a successful save. At the start of each of your turns after the wall appears, the wall, along with any creatures in it, moves 50 feet away from you. Any Huge or smaller creature inside the wall or whose space the wall enters when it moves must succeed on a Strength saving throw or take 5d10 bludgeoning damage. A creature can take this damage only once per round. At the end of the turn, the walls height is reduced by 50 feet, and the damage creatures take from the spell on subsequent rounds is reduced by 1d10. When the wall reaches 0 feet in height, the spell ends. A creature caught in the wall can move by swimming. Because of the force of the wave, though, the creature must make a successful Strength (Athletics) check against your spell save DC in order to move at all. If it fails the check, it cant move. A creature that moves out of the area falls to the ground.",
      "url": "https://www.dnd-spells.com/spell/tsunami",
      "damage": "Complex Damage Progression. Please consult short or long descriptions"
    },
    "incendiary cloud": {
      "castingTime": "1 Action",
      "duration": "Concentration, up to 1 minute",
      "range": "150 feet",
      "components": "Verbal, Somatic",
      "slotLevel": "8",
      "school": "Conjuration",
      "shortDescription": "Requies concentration. Create a 20 foot radius sphere smokey cloud of burning embers. Creatures in the cloud must make a dex save or take 10d8 fire damage, half as much on a success.",
      "longDescription": "A swirling cloud of smoke shot through with white-hot embers appears in a 20-foot-radius sphere centered on a point within range. The cloud spreads around corners and is heavily obscured. It lasts for the duration or until a wind of moderate or greater speed (at least 10 miles per hour) disperses it. When the cloud appears, each creature in it must make a Dexterity saving throw. A creature takes 10d8 fire damage on a failed save, or half as much damage on a successful one. A creature must also make this saving throw when it enters the spells area for the first time on a turn or ends its turn there. The cloud moves 10 feet directly away from you in a direction that you choose at the start of each of your turns.",
      "url": "https://www.dnd-spells.com/spell/incendiary-cloud",
      "damage": {
        "type": "fire damage",
        "levels": {
          1: 0,
          2: 0,
          3: 0,
          4: 0,
          5: 0,
          6: 0,
          7: 0,
          8: "10d8",
          9: "10d8"
        }
      }
    },
    "locate object": {
      "castingTime": "1 Action",
      "duration": "Concentration, up to 10 minutes",
      "range": "Self",
      "components": "Verbal, Somatic, Material (a forked twig)",
      "slotLevel": "2",
      "school": "Divination",
      "shortDescription": "Requires concentration. Yese the direction of an objects location within 1000 feet. Lead blocks the spell from working.",
      "longDescription": "Describe or name an object that is familiar to you. You sense the direction to the objects location, as long as that object is within 1,000 feet of you. If the object is in motion, you know the direction of its movement. The spell can locate a specific object known to you, as long as you have seen it up close, within 30 feet, at least once. Alternatively, the spell can locate the nearest object of a particular kind, such as a certain kind of apparel, jewelry, furniture, tool, or weapon. This spell cant locate an object if any thickness of lead, even a thin sheet, blocks a direct path between you and the object.",
      "url": "https://www.dnd-spells.com/spell/locate-object"
    },
    "true resurrection": {
      "castingTime": "1 Hour",
      "duration": "Instantaneous",
      "range": "Touch",
      "components": "Verbal, Somatic, Material (a sprinkle of holy water and diamonds worth at least 25,000 gold pieces, which the spell consumes)",
      "slotLevel": "9",
      "school": "Necromancy",
      "shortDescription": "Revive a willing creature that has been dead less than 200 years. The spell restores full health, lifts all curses, removes all diseases and poisons, replaces missing limbs and organs, or even provides a new body if the original no longer exists.",
      "longDescription": "You touch a creature that has been dead for no longer than 200 years and that died for any reason except old age. If the creatures soul is free and willing, the creature is restored to life with all its hit points. This spell closes all wounds, neutralizes any poison, cures all diseases, and lifts any curses affecting the creature when it died. The spell replaces damaged or missing organs and limbs. The spell can even provide a new body if the original no longer exists, in which case you must speak the creatures name. The creature then appears in an unoccupied space you choose within 10 feet of you.",
      "url": "https://www.dnd-spells.com/spell/true-resurrection"
    },
    "storm sphere": {
      "castingTime": "1 Action",
      "duration": "Concentration, up to 1 minute",
      "range": "150 feet",
      "components": "Verbal, Somatic",
      "slotLevel": "4",
      "school": "Evocation",
      "shortDescription": "Requires concentration. Create a 20 foot radius sphere of whirling air that is difficult terrain. Each creature in the sphere on creation or ending its turn there must make a strength save or take 2d6 bludgeoning damage. You can use a bonus action to make a ranged spell attack on a creature within 60 feet of the sphere with a bolt of lightning dealing 4d6 lightning damage.",
      "longDescription": "A 20-foot-radius sphere of whirling air springs into existence centered on a point you choose within range. The sphere remains for the spells duration. Each creature in the sphere when it appears or that ends its turn there must succeed on a Strength saving throw or take 2d6 bludgeoning damage. The spheres space is difficult terrain. Until the spell ends, you can use a bonus action on each of your turns to cause a bolt of lightning to leap from the center of the sphere toward one creature you choose within 60 feet of the center. Make a ranged spell attack. You have advantage on the attack roll if the target is in the sphere. On a hit, the target takes 4d6 lightning damage. Creatures within 30 feet of the sphere have disadvantage on Wisdom (Perception) checks made to listen. At Higher Levels. When you cast this spell using a spell slot of 5th level or higher, the damage increases for each of its effects by 1d6 for each slot level above 4th.",
      "url": "https://www.dnd-spells.com/spell/storm-sphere",
      "damage": {
        "type": "bludgeoning damage and lightning damage",
        "levels": {
          1: 0,
          2: 0,
          3: 0,
          4: "2d6 and 4d6",
          5: "3d6 and 5d6",
          6: "4d6 and 6d6",
          7: "5d6 and 7d6",
          8: "6d6 and 8d6",
          9: "7d6 and 9d6"
        }
      }
    },
    "hunters mark": {
      "castingTime": "1 Bonus Action",
      "duration": "Concentration, up to 1 hour",
      "range": "90 feet",
      "components": "Verbal",
      "slotLevel": "1",
      "school": "Divination",
      "shortDescription": "Needs concentration. Choose a creature within range, and mark it. Deal an extra 1d6 damage to the target whenever you hit it with a weapon attack and gain advantage on any Perception or Survival checks made to find it. When the target drops to 0 hit points, as a bonus action you can move the mark to a new target.",
      "longDescription": "You choose a creature you can see within range and mystically mark it as your quarry. Until the spell ends, you deal an extra 1d6 damage to the target whenever you hit it with a weapon attack, and you have advantage on any wisdom (Perception) or wisdom (Survival) check you make to find it. If the target drops to 0 hit points before this spell ends, you can use a bonus action on a subsequent turn of yours to mark a new creature. At Higher Levels: When you cast this spell using a spell slot of 3rd or 4th level, you can maintain your concentration on the spell for up to 8 hours. When you use a spell slot of 5th level or higher, you can maintain your concentration on the spell for up to 24 hours.",
      "url": "https://www.dnd-spells.com/spell/hunters-mark"
    },
    "searing smite": {
      "castingTime": "1 Bonus Action",
      "duration": "Concentration, up to 1 minute",
      "range": "Self",
      "components": "Verbal",
      "slotLevel": "1",
      "school": "Evocation",
      "shortDescription": "Requires concentration. Your next melee hit does an additional 1d6 fire damage and sets the target on fire. On each turn, the target takes 1d6 fire damage on a failed Constitution save. The spell ends on a success.",
      "longDescription": "The next time you hit a creature with a melee weapon attack during the spells duration, your weapon flares with white-hot intensity, and the attack deals an extra 1d6 fire damage to the target and causes the target to ignite in flames. At the start of each of its turns until the spell ends, the target must make a Constitution saving throw. On a failed save, it takes 1d6 fire damage. On a successful save, the spell ends. If the target or a creature within 5 feet of it uses an action to put out the flames, or if some other effect douses the flames (such as the target being submerged in water), the spell ends. At Higher Levels: When you cast this spell using a spell slot of 2nd level or higher, the initial extra damage dealt by the attack increases by 1d6 for each slot level above 1st.",
      "url": "https://www.dnd-spells.com/spell/searing-smite",
      "damage": {
        "type": "fire damage",
        "levels": {
          1: "1d6",
          2: "2d6",
          3: "3d6",
          4: "4d6",
          5: "5d6",
          6: "6d6",
          7: "7d6",
          8: "8d6",
          9: "9d6"
        }
      }
    },
    "transport via plants": {
      "castingTime": "1 Action",
      "duration": "1 round",
      "range": "10 feet",
      "components": "Verbal, Somatic",
      "slotLevel": "6",
      "school": "Conjuration",
      "shortDescription": "This spell creates a magical link between a Large or larger inanimate plant within range and another plant, at any distance, on the same plane of existence. You must have seen or touched the destination plant at least once before. For the duration, any creature can step into the target plant and exit from the destination plant by using 5 feet of movement.",
      "longDescription": "This spell creates a magical link between a Large or larger inanimate plant within range and another plant, at any distance, on the same plane of existence. You must have seen or touched the destination plant at least once before. For the duration, any creature can step into the target plant and exit from the destination plant by using 5 feet of movement.",
      "url": "https://www.dnd-spells.com/spell/transport-via-plants"
    },
    "feeblemind": {
      "castingTime": "1 Action",
      "duration": "Instantaneous",
      "range": "150 feet",
      "components": "Verbal, Somatic, Material (a handful of clay, crystal, glass, or mineral spheres)",
      "slotLevel": "8",
      "school": "Enchantment",
      "shortDescription": "Blast the mind of a creature in range. The target takes 4d6 psychic damage and must make an intelligence save. On a fail, the creatures intelligence and charisma scores drop to 1, it cant cast spells, understand language, or active magic items. It can follow and protect its friends, and can reroll the save every 30 days.",
      "longDescription": "You blast the mind of a creature that you can see within range, attempting to shatter its intellect and personality. The target takes 4d6 psychic damage and must make an Intelligence saving throw. On a failed save, the creatures Intelligence and Charisma scores become 1. The creature cant cast spells, activate magic items, understand language, or communicate in any intelligible way. The creature can, however, identify its friends, follow them, and even protect them. At the end of every 30 days, the creature can repeat its saving throw against this spell. If it succeeds on its saving throw, the spell ends. The spell can also be ended by greater restoration, heal, or wish.",
      "url": "https://www.dnd-spells.com/spell/feeblemind",
      "damage": {
        "type": "psychic damage",
        "levels": {
          1: 0,
          2: 0,
          3: 0,
          4: 0,
          5: 0,
          6: 0,
          7: 0,
          8: "4d6",
          9: "4d6"
        }
      }
    },
    "detect magic": {
      "castingTime": "1 Action",
      "duration": "Concentration, up to 10 minutes",
      "range": "Self",
      "components": "Verbal, Somatic",
      "slotLevel": "1",
      "school": "Divination Ritual",
      "shortDescription": "Requires concentration. You sense the presence of magic within 30 feet of you.",
      "longDescription": "For the duration, you sense the presence of magic within 30 feet of you. If you sense magic in this way, you can use your action to see a faint aura around any visible creature or object in the area that bears magic, and you learn its school of magic, if any. The spell can penetrate most barriers, but it is blocked by 1 foot of stone, 1 inch of common metal, a thin sheet of lead, or 3 feet of wood or dirt.",
      "url": "https://www.dnd-spells.com/spell/detect-magic-ritual"
    },
    "vampiric touch": {
      "castingTime": "1 Action",
      "duration": "Concentration, up to 1 minute",
      "range": "Self",
      "components": "Verbal, Somatic",
      "slotLevel": "3",
      "school": "Necromancy",
      "shortDescription": "Requires concentration. On a melee spell attack hit, your target takes 3d6 necrotic damage and you gain half that amount back in health back.",
      "longDescription": "The touch of your shadow-wreathed hand can siphon life force from others to heal your wounds. Make a melee spell attack against a creature within your reach. On a hit, the target takes 3d6 necrotic damage, and you regain hit points equal to half the amount of necrotic damage dealt. Until the spell ends, you can make the attack again on each of your turns as an action. At Higher Levels: When you cast this spell using a spell slot of 4th level or higher, the damage increases by 1d6 for each slot level above 3rd.",
      "url": "https://www.dnd-spells.com/spell/vampiric-touch",
      "damage": {
        "type": "necrotic damage",
        "levels": {
          1: 0,
          2: 0,
          3: "3d6",
          4: "4d6",
          5: "5d6",
          6: "6d6",
          7: "7d6",
          8: "8d6",
          9: "9d6"
        }
      },
      "healing": "You restore half the amount of damage you deal, regardless of level cast at."
    },
    "magic weapon": {
      "castingTime": "1 Bonus Action",
      "duration": "Concentration, up to 1 hour",
      "range": "Touch",
      "components": "Verbal, Somatic",
      "slotLevel": "2",
      "school": "Transmutation",
      "shortDescription": "+1 bonus to attack and damage rolls",
      "longDescription": "You touch a nonmagical weapon. Until the spell ends, that weapon becomes a magic weapon with a +1 bonus to attack rolls and damage rolls. At Higher Levels: When you cast this spell using a spell slot of 4th level or higher, the bonus increases to +2. When you use a spell slot of 6th level or higher, the bonus increases to +3.",
      "url": "https://www.dnd-spells.com/spell/magic-weapon"
    },
    "sacred flame": {
      "castingTime": "1 Action",
      "duration": "Instantaneous",
      "range": "60 feet",
      "components": "Verbal, Somatic",
      "slotLevel": "cantrip",
      "school": "Evocation",
      "shortDescription": "The target must succeed on a Dexterity saving throw or take 1d8 radiant damage.",
      "longDescription": "Flame-like radiance descends on a creature that you can see within range. The target must succeed on a Dexterity saving throw or take 1d8 radiant damage. The target gains no benefit from cover for this saving throw. The spells damage increases by 1d8 when you reach 5th level (2d8), 11th level (3d8), and 17th level (4d8).",
      "url": "https://www.dnd-spells.com/spell/sacred-flame",
      "damage": {
        "type": "radiant damage",
        "playerLevel": {
          1: "1d8",
          2: "1d8",
          3: "1d8",
          4: "1d8",
          5: "2d8",
          6: "2d8",
          7: "2d8",
          8: "2d8",
          9: "2d8",
          10: "2d8",
          11: "3d8",
          12: "3d8",
          13: "3d8",
          14: "3d8",
          15: "3d8",
          16: "3d8",
          17: "4d8",
          18: "4d8",
          19: "4d8",
          20: "4d8"
        }
      }
    },
    "cloudkill": {
      "castingTime": "1 Action",
      "duration": "Concentration, up to 10 minutes",
      "range": "120 feet",
      "components": "Verbal, Somatic",
      "slotLevel": "5",
      "school": "Conjuration",
      "shortDescription": "Requires concentration. Create a 20-foot-radius sphere of poisonous fog within 120 feet. Creatures entering the fog for the first time or beginning a turn there take 5d8 posion damage on a failed Constitution save, and half as much on a success. Holding your breath wont help.",
      "longDescription": "You create a 20-foot-radius sphere of poisonous, yellow- green fog centered on a point you choose within range. The fog spreads around corners. It lasts for the duration or until strong wind disperses the fog, ending the spell. Its area is heavily obscured. When a creature enters the spells area for the first time on a turn or starts its turn there, that creature must make a Constitution saving throw. The creature takes 5d8 poison damage on a failed save, or half as much damage on a successful one. Creatures are affected even if they hold their breath or dont need to breathe. The fog moves 10 feet away from you at the start of each of your turns, rolling along the surface of the ground. The vapors, being heavier than air, sink to the lowest level of the land, even pouring down openings. At Higher Levels: When you cast this spell using a spell slot of 6th level or higher, the damage increases by 1d8 for each slot level above 5th.",
      "url": "https://www.dnd-spells.com/spell/cloudkill",
      "damage": {
        "type": "poison damage",
        "levels": {
          1: 0,
          2: 0,
          3: 0,
          4: 0,
          5: "5d8",
          6: "6d8",
          7: "7d8",
          8: "8d8",
          9: "9d8"
        }
      }
    },
    "dominate person": {
      "castingTime": "1 Action",
      "duration": "Concentration, up to 1 minute",
      "range": "60 feet",
      "components": "Verbal, Somatic",
      "slotLevel": "5",
      "school": "Enchantment",
      "shortDescription": "Requires concentration. A humanoid must succeeded a wisdom save or becomes charmed by you. It has advantage if it is fighting your party. You have a telepathic link and can issue commands like attack, move, or get an object. You can use your action to take precise contol of the target, where it will only act exactly as you will it to. It makes a wisdom throw each time it is attacks, and the spell ends on a success.",
      "longDescription": "You attempt to beguile a humanoid that you can see within range. It must succeed on a Wisdom saving throw or be charmed by you for the duration. If you or creatures that are friendly to you are fighting it, it has advantage on the saving throw. While the target is charmed, you have a telepathic link with it as long as the two of you are on the same plane of existence. You can use this telepathic link to issue commands to the creature while you are conscious (no action required), which it does its best to obey. You can specify a simple and general course of action, such as Attack that creature, Run over there, or Fetch that object. If the creature completes the order and doesnt receive further direction from you, it defends and preserves itself to the best of its ability. You can use your action to take total and precise control of the target. Until the end of your next turn, the creature takes only the actions you choose, and doesnt do anything that you dont allow it to do. During this time you can also cause the creature to use a reaction, but this requires you to use your own reaction as well. Each time the target takes damage, it makes a new wisdom saving throw against the spell. If the saving throw succeeds, the spell ends. AtHigherLevels. When you cast this spell using a 6th-level spell slot, the duration is concentration, up to 10 minutes. When you use a 7th-level spell slot, the duration is concentration, up to 1 hour. When you use a spell slot of 8th level or higher, the duration is concentration, up to 8 hours.",
      "url": "https://www.dnd-spells.com/spell/dominate-person"
    },
    "inflict wounds": {
      "castingTime": "1 Action",
      "duration": "Instantaneous",
      "range": "Touch",
      "components": "Verbal, Somatic",
      "slotLevel": "1",
      "school": "Necromancy",
      "shortDescription": "Make a melee spell attack against a creature you can reach. On a hit, the target takes 3d10 necrotic damage.",
      "longDescription": "Make a melee spell attack against a creature you can reach. On a hit, the target takes 3d10 necrotic damage. At Higher Levels: When you cast this spell using a spell slot of 2nd level or higher, the damage increases by 1d10 for each slot level above 1st.",
      "url": "https://www.dnd-spells.com/spell/inflict-wounds",
      "damage": {
        "type": "necrotic damage",
        "levels": {
          1: "3d10",
          2: "4d10",
          3: "5d10",
          4: "6d10",
          5: "7d10",
          6: "8d10",
          7: "9d10",
          8: "10d10",
          9: "11d10"
        }
      }
    },
    "daylight": {
      "castingTime": "1 Action",
      "duration": "1 hour",
      "range": "60 feet",
      "components": "Verbal, Somatic",
      "slotLevel": "3",
      "school": "Evocation",
      "shortDescription": "A 60-foot-radius sphere of light spreads out from a point you choose within range. The sphere is bright light and sheds dim light for an additional 60 feet. You an cast it on an object. Displess darkness created by 3rd level or lower spells.",
      "longDescription": "A 60-foot-radius sphere of light spreads out from a point you choose within range. The sphere is bright light and sheds dim light for an additional 60 feet. If you chose a point on an object you are holding or one that isnt being worn or carried, the light shines from the object and moves with it. Completely covering the affected object with an opaque object, such as a bowl or a helm, blocks the light. If any of this spells area overlaps with an area of darkness created by a spell of 3rd level or lower, the spell that created the darkness is dispelled.",
      "url": "https://www.dnd-spells.com/spell/daylight"
    },
    "leomunds tiny hut": {
      "castingTime": "1 Minute",
      "duration": "8 hours",
      "range": "Self (10-foot-radius hemisphere)",
      "components": "Verbal, Somatic, Material (a small crystal bead)",
      "slotLevel": "3",
      "school": "Evocation Ritual",
      "shortDescription": "A 10-foot-radius immobile dome of force springs into existence around and above you and remains stationary for 8 hours. Fits 10 medium creatures including you. Creatures outside of the dome are barred from passage. It is comfortable and dry.",
      "longDescription": "A 10-foot-radius immobile dome of force springs into existence around and above you and remains stationary for the duration. The spell ends if you leave its area. Nine creatures of Medium size or smaller can fit inside the dome with you. The spell fails if its area includes a larger creature or more than nine creatures. Creatures and objects within the dome when you cast this spell can move through it freely. All other creatures and objects are barred from passing through it. Spells and other magical effects cant extend through the dome or be cast through it. The atmosphere inside the space is comfortable and dry, regardless of the weather outside. Until the spell ends, you can command the interior to become dimly lit or dark. The dome is opaque from the outside, of any color you choose, but it is transparent from the inside.",
      "url": "https://www.dnd-spells.com/spell/leomunds-tiny-hut-ritual"
    },
    "greater invisibility": {
      "castingTime": "1 Action",
      "duration": "Concentration, up to 1 minute",
      "range": "Touch",
      "components": "Verbal, Somatic",
      "slotLevel": "4",
      "school": "Illusion",
      "shortDescription": "Requires concentration. You or a creature you touch becomes invisible until the spell ends. Anything the target is wearing or carrying is invisible as long as it is on the targets person.",
      "longDescription": "You or a creature you touch becomes invisible until the spell ends. Anything the target is wearing or carrying is invisible as long as it is on the targets person.",
      "url": "https://www.dnd-spells.com/spell/greater-invisibility"
    },
    "wrathful smite": {
      "castingTime": "1 Bonus Action",
      "duration": "Concentration, up to 1 minute",
      "range": "Self",
      "components": "Verbal",
      "slotLevel": "1",
      "school": "Evocation",
      "shortDescription": "The next time you hit with a melee weapon attack during this spells duration, your attack deals an extra 1d6 psychic damage. Additionally, if the target is a creature, it must make a wisdom saving throw or be frightened of you. The creature can make a wisdom check against your spell save DC to end this spell.",
      "longDescription": "The next time you hit with a melee weapon attack during this spells duration, your attack deals an extra 1d6 psychic damage. Additionally, if the target is a creature, it must make a wisdom saving throw or be frightened of you until the spell ends. As an action, the creature can make a wisdom check against your spell save DC to steel its resolve and end this spell.",
      "url": "https://www.dnd-spells.com/spell/wrathful-smite",
      "damage": {
        "type": "psychic damage",
        "levels": {
          1: "1d6",
          2: "1d6",
          3: "1d6",
          4: "1d6",
          5: "1d6",
          6: "1d6",
          7: "1d6",
          8: "1d6",
          9: "1d6"
        }
      }
    },
    "poison spray": {
      "castingTime": "1 Action",
      "duration": "Instantaneous",
      "range": "10 feet",
      "components": "Verbal, Somatic",
      "slotLevel": "cantrip",
      "school": "Conjuration",
      "shortDescription": "A creature must succeed a Constitution save or take 1d12 poison damage",
      "longDescription": "You extend your hand toward a creature you can see within range and project a puff of noxious gas from your palm. The creature must succeed on a Constitution saving throw or take 1d12 poison damage. This spells damage increases by 1d12 when you reach 5th level (2d12), 11th level (3d12), and 17th level (4d12).",
      "url": "https://www.dnd-spells.com/spell/poison-spray",
      "damage": {
        "type": "poison damage",
        "playerLevel": {
          1: "1d12",
          2: "1d12",
          3: "1d12",
          4: "1d12",
          5: "2d12",
          6: "2d12",
          7: "2d12",
          8: "2d12",
          9: "2d12",
          10: "2d12",
          11: "3d12",
          12: "3d12",
          13: "3d12",
          14: "3d12",
          15: "3d12",
          16: "3d12",
          17: "4d12",
          18: "4d12",
          19: "4d12",
          20: "4d12"
        }
      }
    },
    "beast bond": {
      "castingTime": "1 Action",
      "duration": "Concentration, up to 10 minutes",
      "range": "Touch",
      "components": "Verbal, Somatic, Material (a bit of fur wrapped in a cloth)",
      "slotLevel": "1",
      "school": "Divination",
      "shortDescription": "Requires concentration. Establish a telepathic link between a friendly or charmed creature of intelligence 3 or less. The link is active while within line of sight. The beast gains advantage on attack rolls within 5 feet of you.",
      "longDescription": "You establish a telepathic link with one beast you touch that is friendly to you or charmed by you. The spell fails if the beasts Intelligence is 4 or higher. Until the spell ends, the link is active while you and the beast are within line of sight of each other. Through the link, the beast can understand your telepathic messages to it, and it can telepathically communicate simple emotions and concepts back to you. While the link is active, the beast gains advantage on attack rolls against any creature within 5 feet of you that you can see.",
      "url": "https://www.dnd-spells.com/spell/beast-bond"
    },
    "evards black tentacles": {
      "castingTime": "1 Action",
      "duration": "Concentration, up to 1 minute",
      "range": "90 feet",
      "components": "Verbal, Somatic, Material (a piece of tentacle from a giant octopus or a giant squid)",
      "slotLevel": "4",
      "school": "Conjuration",
      "shortDescription": "Requires concentration. Tentacles fill a 20-foot square on ground, turning the area into difficult terrain. When a creature enters the affected area for the first time on a turn or starts its turn there, the creature must succeed on a Dexterity saving throw or take 3d6 bludgeoning damage and be restrained by the tentacles until the spell ends. A creature can escape with a successful strength or dex check against your spell save DC.",
      "longDescription": "Squirming, ebony tentacles fill a 20-foot square on ground that you can see within range. For the duration, these tentacles turn the ground in the area into difficult terrain. When a creature enters the affected area for the first time on a turn or starts its turn there, the creature must succeed on a Dexterity saving throw or take 3d6 bludgeoning damage and be restrained by the tentacles until the spell ends. A creature that starts its turn in the area and is already restrained by the tentacles takes 3d6 bludgeoning damage. A creature restrained by the tentacles can use its action to make a Strength or Dexterity check (its choice) against your spell save DC. On a success, it frees itself.",
      "url": "https://www.dnd-spells.com/spell/evards-black-tentacles",
      "damage": {
        "type": "bludgeoning damage",
        "levels": {
          1: 0,
          2: 0,
          3: 0,
          4: "3d6",
          5: "3d6",
          6: "3d6",
          7: "3d6",
          8: "3d6",
          9: "3d6"
        }
      }
    },
    "hypnotic pattern": {
      "castingTime": "1 Action",
      "duration": "Concentration, up to 1 minute",
      "range": "120 feet",
      "components": "Somatic, Material (a glowing stick of incense or a crystal vial filled with phosphorescent material)",
      "slotLevel": "3",
      "school": "Illusion",
      "shortDescription": "Requires concentration. Create a pattern in the air. Each craetures that sees the pattern makes a wisdom saving throw. On a fail, the creature becomes charmed and incapacitated. The effect ends if a target is damaged or another craeture uses its action to shake the target.",
      "longDescription": "You create a twisting pattern of colors that weaves through the air inside a 30-foot cube within range. The pattern appears for a moment and vanishes. Each creature in the area who sees the pattern must make a wisdom saving throw. On a failed save, the creature becomes charmed for the duration. While charmed by this spell, the creature is incapacitated and has a speed of 0. The spell ends for an affected creature if it takes any damage or if someone else uses an action to shake the creature out of its stupor.",
      "url": "https://www.dnd-spells.com/spell/hypnotic-pattern"
    },
    "shocking grasp": {
      "castingTime": "1 Action",
      "duration": "Instantaneous",
      "range": "Touch",
      "components": "Verbal, Somatic",
      "slotLevel": "cantrip",
      "school": "Evocation",
      "shortDescription": "Make a melee spell attack against the target. You have advantage on the attack roll if the target is wearing armor made of metal. On a hit, the target takes 1d8 lightning damage, and it cant take reactions until the start of its next turn.",
      "longDescription": "Lightning springs from your hand to deliver a shock to a creature you try to touch. Make a melee spell attack against the target. You have advantage on the attack roll if the target is wearing armor made of metal. On a hit, the target takes 1d8 lightning damage, and it cant take reactions until the start of its next turn. The spells damage increases by 1d8 when you reach 5th level (2d8), 11th level (3d8), and 17th level (4d8).",
      "url": "https://www.dnd-spells.com/spell/shocking-grasp",
      "damage": {
        "type": "lightning damage",
        "playerLevel": {
          1: "1d8",
          2: "1d8",
          3: "1d8",
          4: "1d8",
          5: "2d8",
          6: "2d8",
          7: "2d8",
          8: "2d8",
          9: "2d8",
          10: "2d8",
          11: "3d8",
          12: "3d8",
          13: "3d8",
          14: "3d8",
          15: "3d8",
          16: "3d8",
          17: "4d8",
          18: "4d8",
          19: "4d8",
          20: "4d8"
        }
      }
    },
    "planar binding": {
      "castingTime": "1 Hour",
      "duration": "24 hours",
      "range": "60 feet",
      "components": "Verbal, Somatic, Material (a jewel worth at least 1,000 gold pieces, which the spell consumes)",
      "slotLevel": "5",
      "school": "Abjuration",
      "shortDescription": "At the completion of the casting, the target celestial, elemental, fey, or fiend must make a Charisma saving throw. On a failed save, it is bound to serve you for the duration. A bound creature must follow your instructions to the best of its ability. If it was hostile to you, it tries to twist your words to achieve its own ends.",
      "longDescription": "With this spell, you attempt to bind a celestial, an elemental, a fey, or a fiend to your service. The creature must be within range for the entire casting of the spell. (Typically, the creature is first summoned into the center of an inverted magic circle in order to keep it trapped while this spell is cast.) At the completion of the casting, the target must make a Charisma saving throw. On a failed save, it is bound to serve you for the duration. If the creature was summoned or created by another spell, that spells duration is extended to match the duration of this spell. A bound creature must follow your instructions to the best of its ability. You might command the creature to accompany you on an adventure, to guard a location, or to deliver a message. The creature obeys the letter of your instructions, but if the creature is hostile to you, it strives to twist your words to achieve its own objectives. If the creature carries out your instructions completely before the spell ends, it travels to you to report this fact if you are on the same plane of existence. If you are on a different plane of existence, it returns to the place where you bound it and remains there until the spell ends. At Higher Levels: When you cast this spell using a spell slot of a higher level, the duration increases to 10 days with a 6th-level slot, to 30 days with a 7th-level slot, to 180 days with an 8th-level slot, and to a year and a day with a 9th-level spell slot.",
      "url": "https://www.dnd-spells.com/spell/planar-binding"
    },
    "control water": {
      "castingTime": "1 Action",
      "duration": "Concentration, up to 10 minutes",
      "range": "300 feet",
      "components": "Verbal,Somatic,Material  (a drop of water and a pinch of dust)",
      "slotLevel": "4",
      "school": "Transmutation",
      "shortDescription": "Requires concentration. Control a 100 foot cube of freestanding water in a few ways. You can raise the water level up to 20ft, or make a trench that slowly fills in over the next, redirect the flow, or create a whirlpool that restrains creatures on a failed Athletics check. Creatures in the whrlpool take 2d8 bludgeoning damage for each round on the fail, and half as much on a save.",
      "longDescription": "Until the spell ends, you control any freestanding water inside an area you choose that is a cube up to 100 feet on a side. You can choose from any of the following effects when you cast this spell. As an action on your turn, you can repeat the same effect or choose a different one. Flood. You cause the water level of all standing water in the area to rise by as much as 20 feet. If the area includes a shore, the flooding water spills over onto dry land. If you choose an area in a large body of water, you instead create a 20-foot tall wave that travels from one side of the area to the other and then crashes down. Any Huge or smaller vehicles in the waves path are carried with it to the other side. Any Huge or smaller vehicles struck by the wave have a 25 percent chance of capsizing. The water level remains elevated until the spell ends or you choose a different effect. If this effect produced a wave, the wave repeats on the start of your next turn while the flood effect lasts. Part Water. You cause water in the area to move apart and create a trench. The trench extends across the spells area, and the separated water forms a wall to either side. The trench remains until the spell ends or you choose a different effect. The water then slowly fills in the trench over the course of the next round until the normal water level is restored. Redirect Flow. You cause flowing water in the area to move in a direction you choose, even if the water has to flow over obstacles, up walls, or in other unlikely directions. The water in the area moves as you direct it, but once it moves beyond the spells area, it resumes its flow based on the terrain conditions. The water continues to move in the direction you chose until the spell ends or you choose a different effect. Whirlpool. This effect requires a body of water at least 50 feet square and 25 feet deep. You cause a whirlpool to form in the center of the area. The whirlpool forms a vortex that is 5 feet wide at the base, up to 50 feet wide at the top, and 25 feet tall. Any creature or object in the water and within 25 feet of the vortex is pulled 10 feet toward it. A creature can swim away from the vortex by making a Strength (Athletics) check against your spell save DC. When a creature enters the vortex for the first time on a turn or starts its turn there, it must make a Strength saving throw. On a failed save, the creature takes 2d8 bludgeoning damage and is caught in the vortex until the spell ends. On a successful save, the creature takes half damage, and isnt caught in the vortex. A creature caught in the vortex can use its action to try to swim away from the vortex as described above, but has disadvantage on the Strength (Athletics) check to do so. The first time each turn that an object enters the vortex, the object takes 2d8 bludgeoning damage; this damage occurs each round it remains in the vortex.",
      "url": "https://www.dnd-spells.com/spell/control-water",
      "damage": {
        "type": "bludgeoning damage",
        "levels": {
          1: 0,
          2: 0,
          3: 0,
          4: "2d8",
          5: "2d8",
          6: "2d8",
          7: "2d8",
          8: "2d8",
          9: "2d8"
        }
      }
    },
    "mass cure wounds": {
      "castingTime": "1 Action",
      "duration": "Instantaneous",
      "range": "60 feet",
      "components": "Verbal, Somatic",
      "slotLevel": "5",
      "school": "Evocation",
      "shortDescription": "Up to 6 creatures within 30ft of a point regain 3d8 + spell modifier health",
      "longDescription": "A wave of healing energy washes out from a point of your choice within range. Choose up to six creatures in a 30-foot-radius sphere centered on that point. Each target regains hit points equal to 3d8 + your spellcasting ability modifier. This spell has no effect on undead or constructs. At Higher Levels. When you cast this spell using a spell slot of 6th level or higher, the healing increases by 1d8 for each slot level above 5th.",
      "url": "https://www.dnd-spells.com/spell/mass-cure-wounds",
      "healing": {
        "levels": {
          1: 0,
          2: 0,
          3: 0,
          4: 0,
          5: "3d8",
          6: "4d8",
          7: "5d8",
          8: "6d8",
          9: "7d8"
        }
      }
    },
    "compulsion": {
      "castingTime": "1 Action",
      "duration": "Concentration, up to 1 minute",
      "range": "30 feet",
      "components": "Verbal, Somatic",
      "slotLevel": "4",
      "school": "Enchantment",
      "shortDescription": "Requires concentration. On a failed wisdom save targets become compelled to move in a direction of your choice as a bonus action on your turn.",
      "longDescription": "Creatures of your choice that you can see within range and that can hear you must make a wisdom saving throw. A target automatically succeeds on this saving throw if it cant be charmed. On a failed save, a target is affected by this spell. Until the spell ends, you can use a bonus action on each of your turns to designate a direction that is horizontal to you. Each affected target must use as much of its movement as possible to move in that direction on its next turn. It can take its action before it moves. After moving in this way, it can make another Wisdom saving to try to end the effect. A target isnt compelled to move into an obviously deadly hazard, such as a fire or pit, but it will provoke opportunity attacks to move in the designated direction.",
      "url": "https://www.dnd-spells.com/spell/compulsion"
    },
    "heat metal": {
      "castingTime": "1 Action",
      "duration": "Concentration, up to 1 minute",
      "range": "60 feet",
      "components": "Verbal, Somatic, Material (a piece of iron and a flame)",
      "slotLevel": "2",
      "school": "Transmutation",
      "shortDescription": "Requires concentration. Make metal glow red hot, and any creature in contact with it takes 2d8 fire damage and drops held objects on a failed Constitution save. If it doesnt drop the object, it has disadvantage on rolls until the start of your next turn.",
      "longDescription": "Choose a manufactured metal object, such as a metal weapon or a suit of heavy or medium metal armor, that you can see within range. You cause the object to glow red-hot. Any creature in physical contact with the object takes 2d8 fire damage when you cast the spell. Until the spell ends, you can use a bonus action on each of your subsequent turns to cause this damage again. If a creature is holding or wearing the object and takes the damage from it, the creature must succeed on a Constitution saving throw or drop the object if it can. If it doesnt drop the object, it has disadvantage on attack rolls and ability checks until the start of your next turn. At Higher Levels: When you cast this spell using a spell slot of 3rd level or higher, the damage increases by 1d8 for each slot level above 2nd.",
      "url": "https://www.dnd-spells.com/spell/heat-metal",
      "damage": {
        "type": "fire damage",
        "levels": {
          1: 0,
          2: "2d8",
          3: "3d8",
          4: "4d8",
          5: "5d8",
          6: "6d8",
          7: "7d8",
          8: "8d8",
          9: "9d8"
        }
      }
    },
    "absorb elements": {
      "castingTime": "Reaction when you take cold, lightning, fire, acid, or thunder damage",
      "duration": "1 round",
      "range": "Self",
      "components": "Somatic",
      "slotLevel": "1",
      "school": "Abjuration",
      "shortDescription": "When you take cold, lightning, fire, acid, or thunder damage until the start of your next turn, ou have resistance to that damage type until that next turn. Additionally, the first time you hit with a melee attack on your next turn, the target takes 1d6 damage of that type and the spell ends.",
      "longDescription": "The spell captures some of the incoming energy, lessening its effect on you and storing it for your next melee attack. You have resistance to the triggering damage type until the start of your next turn. Also, the first time you hit with a melee attack on your next turn, the target takes an extra 1d6 damage of the triggering type, and the spell ends. When you cast this spell using a spell slot of 2nd level or higher, the extra damage increases by 1d6 for each slot level above 1st.",
      "url": "https://www.dnd-spells.com/spell/absorb-elements"
    },
    "mind blank": {
      "castingTime": "1 Action",
      "duration": "24 hours",
      "range": "Touch",
      "components": "Verbal, Somatic",
      "slotLevel": "8",
      "school": "Abjuration",
      "shortDescription": "A willing creature is immune to psychic damage, charm, divination spells, wish spells, or spells that read emotions and thoughts",
      "longDescription": "Until the spell ends, one willing creature you touch is immune to psychic damage, any effect that would sense its emotions or read its thoughts, divination spells, and the charmed condition. The spell even foils wish spells and spells or effects of similar power used to affect the targets mind or to gain information about the target.",
      "url": "https://www.dnd-spells.com/spell/mind-blank"
    },
    "nystuls magic aura": {
      "castingTime": "1 Action",
      "duration": "24 hours",
      "range": "Touch",
      "components": "Verbal, Somatic, Material (a small square of silk)",
      "slotLevel": "2",
      "school": "Illusion",
      "shortDescription": "You place an illusion on a creature or an object you touch so that divination spells reveal false information about it. The target can be a willing creature or an object that isnt being carried or worn by another creature",
      "longDescription": "You place an illusion on a creature or an object you touch so that divination spells reveal false information about it. The target can be a willing creature or an object that isnt being carried or worn by another creature. When you cast the spell, choose one or both of the following effects. The effect lasts for the duration. If you cast this spell on the same creature or object every day for 30 days, placing the same effect on it each time, the illusion lasts until it is dispelled. False Aura. You change the way the target appears to spells and magical effects, such as detect magic, that detect magical auras. You can make a nonmagical object appear magical, a magical object appear nonmagical, or change the objects magical aura so that it appears to belong to a specific school of magic that you choose. When you use this effect on an object, you can make the false magic apparent to any creature that handles the item. Mask. You change the way the target appears to spells and magical effects that detect creature types, such as a paladins Divine Sense or the trigger of a symbol spell. You choose a creature type and other spells and magical effects treat the target as if it were a creature of that type or of that alignment.",
      "url": "https://www.dnd-spells.com/spell/nystuls-magic-aura"
    },
    "grease": {
      "castingTime": "1 Action",
      "duration": "1 minute",
      "range": "60 feet",
      "components": "Verbal, Somatic, Material (a bit of pork rind or butter)",
      "slotLevel": "1",
      "school": "Conjuration",
      "shortDescription": "Slick grease covers the ground in a 10-foot square centered on a point within range and turns it into difficult terrain for the duration. When the grease appears, each creature standing in its area must succeed on a Dexterity saving throw or fall prone. A creature that enters the area or ends its turn there must also succeed on a Dexterity saving throw or fall prone.",
      "longDescription": "Slick grease covers the ground in a 10-foot square centered on a point within range and turns it into difficult terrain for the duration. When the grease appears, each creature standing in its area must succeed on a Dexterity saving throw or fall prone. A creature that enters the area or ends its turn there must also succeed on a Dexterity saving throw or fall prone.",
      "url": "https://www.dnd-spells.com/spell/grease"
    },
    "ice knife": {
      "castingTime": "1 Action",
      "duration": "Instantaneous",
      "range": "60 feet",
      "components": "Somatic, Material (a drop of water or piece of ice)",
      "slotLevel": "1",
      "school": "Conjuration",
      "shortDescription": "Create a shard and make a ranged spell attack against a target. On a hit, the target takes 1d10 piercing damage. Hit or miss, the shard then explodes. The target and each creature within 5 feet of the point where the ice exploded must succeed on a Dexterity saving throw or take 2d6 cold damage.",
      "longDescription": "You create a shard of ice and fling it at one creature within range. Make a ranged spell attack against the target. On a hit, the target takes 1d10 piercing damage. Hit or miss, the shard then explodes. The target and each creature within 5 feet of the point where the ice exploded must succeed on a Dexterity saving throw or take 2d6 cold damage. At Higher Levels. When you cast this spell using a spell slot of 2nd level or higher, the cold damage increases by 1d6 for each slot level above 1st.",
      "url": "https://www.dnd-spells.com/spell/ice-knife",
      "damage": {
        "type": "piercing damage and cold damage",
        "levels": {
          1: "1d10 and 2d6",
          2: "1d10 and 3d6",
          3: "1d10 and 4d6",
          4: "1d10 and 5d6",
          5: "1d10 and 6d6",
          6: "1d10 and 7d6",
          7: "1d10 and 8d6",
          8: "1d10 and 9d6",
          9: "1d10 and 10d6"
        }
      }
    },
    "revivify": {
      "castingTime": "1 Action",
      "duration": "Instantaneous",
      "range": "Touch",
      "components": "Verbal, Somatic, Material (diamonds worth 300 gold pieces, which the spell consumes)",
      "slotLevel": "3",
      "school": "Necromancy",
      "shortDescription": "A creature dead for less than 1 minute returns to life with 1 hit point.",
      "longDescription": "You touch a creature that has died within the last minute. That creature returns to life with 1 hit point. This spell cant return to life a creature that has died of old age, nor can it restore any missing body parts.",
      "url": "https://www.dnd-spells.com/spell/revivify"
    },
    "conjure volley": {
      "castingTime": "1 Action",
      "duration": "Instantaneous",
      "range": "150 feet",
      "components": "Verbal, Somatic, Material  (one piece of ammunition or one thrown weapon)",
      "slotLevel": "5",
      "school": "Conjuration",
      "shortDescription": "You fire a piece of nonmagical ammunition from a ranged weapon or throw a nonmagical weapon into the air and choose a point within range. Hundreds of duplicates of the ammunition or weapon fall in a volley from above and then disappear. Each creature in a 40-foot-radius. 20-foot-high cylinder centered on that point must make a Dexterity saving throw. A creature takes 8d8 damage on a failed save, or half as much damage on a successful one. The damage type is the same as that of the ammunition or weapon.",
      "longDescription": "You fire a piece of nonmagical ammunition from a ranged weapon or throw a nonmagical weapon into the air and choose a point within range. Hundreds of duplicates of the ammunition or weapon fall in a volley from above and then disappear. Each creature in a 40-foot-radius. 20-foot-high cylinder centered on that point must make a Dexterity saving throw. A creature takes 8d8 damage on a failed save, or half as much damage on a successful one. The damage type is the same as that of the ammunition or weapon.",
      "url": "https://www.dnd-spells.com/spell/conjure-volley"
    },
    "chain lightning": {
      "castingTime": "1 Action",
      "duration": "Instantaneous",
      "range": "150 feet",
      "components": "Verbal, Somatic, Material  (a bit of fur; a piece of amber, glass, or a crystal rod; and three silver pins)",
      "slotLevel": "6",
      "school": "Evocation",
      "shortDescription": "You create a bolt of lightning that arcs toward a target of your choice that you can see within range. Three bolts then leap from that target to as many as three other targets, each of which must be within 30 feet of the first target. A target can be a creature or an object and can be targeted by only one of the bolts. A target must make a Dexterity saving throw. The target takes 10d8 lightning damage on a failed save, or half as much damage on a successful one.",
      "longDescription": "You create a bolt of lightning that arcs toward a target of your choice that you can see within range. Three bolts then leap from that target to as many as three other targets, each of which must be within 30 feet of the first target. A target can be a creature or an object and can be targeted by only one of the bolts. A target must make a Dexterity saving throw. The target takes 10d8 lightning damage on a failed save, or half as much damage on a successful one. At Higher Levels: When you cast this spell using a spell slot of 7th level or higher, one additional bolt leaps from the first target to another target for each slot level above 6th.",
      "url": "https://www.dnd-spells.com/spell/chain-lightning",
      "damage": {
        "type": "lightning damage",
        "levels": {
          1: 0,
          2: 0,
          3: 0,
          4: 0,
          5: 0,
          6: "10d8",
          7: "11d8",
          8: "12d8",
          9: "13d8"
        }
      }
    },
    "shillelagh": {
      "castingTime": "1 Bonus Action",
      "duration": "1 minute",
      "range": "Touch",
      "components": "Verbal, Somatic, Material (mistletoe, a shamrock leaf, and a club or quarterstaff)",
      "slotLevel": "cantrip",
      "school": "Transmutation",
      "shortDescription": "Use your spellcasting ability instead of Strength for the attack and damage rolls of melee attacks, and the damage die becomes a d8",
      "longDescription": "The wood of a club or quarterstaff you are holding is imbued with natures power. For the duration, you can use your spellcasting ability instead of Strength for the attack and damage rolls of melee attacks using that weapon, and the weapons damage die becomes a d8. The weapon also becomes magical, if it isnt already. The spell ends if you cast it again or if you let go of the weapon.",
      "url": "https://www.dnd-spells.com/spell/shillelagh"
    },
    "true polymorph": {
      "castingTime": "1 Action",
      "duration": "Concentration, up to 1 hour",
      "range": "30 feet",
      "components": "Verbal, Somatic, Material (a drop of mercury, a dollop of gum arabic, and a wisp of smoke)",
      "slotLevel": "9",
      "school": "Transmutation",
      "shortDescription": "Requires concentration. Transform a creature into a different creature, a creature into an object, or an object into a creature. If you concentrate on this spell for the full duration, the transformation becomes permanent. See long description.",
      "longDescription": "Choose one creature or nonmagical object that you can see within range. You transform the creature into a different creature, the creature into an object, or the object into a creature (the object must be neither worn nor carried by another creature). The transformation lasts for the duration, or until the target drops to 0 hit points or dies. If you concentrate on this spell for the full duration, the transformation becomes permanent. Shapechangers arent affected by this spell. An unwilling creature can make a Wisdom saving throw, and if it succeeds, it isnt affected by this spell. Creature into Creature. If you turn a creature into another kind of creature, the new form can be any kind you choose whose challenge rating is equal to or less than the targets (or its level, if the target doesnt have a challenge rating). The targets game statistics, including mental ability scores, are replaced by the statistics of the new form. It retains its alignment and personality. The target assumes the hit points of its new form, and when it reverts to its normal form, the creature returns to the number of hit points it had before it transformed. If it reverts as a result of dropping to 0 hit points, any excess damage carries over to its normal form. As long as the excess damage doesnt reduce the creatures normal form to 0 hit points, it isnt knocked unconscious. The creature is limited in the actions it can perform by the nature of its new form, and it cant speak, cast spells, or take any other action that requires hands or speech unless its new form is capable of such actions. The targets gear melds into the new form. The creature cant activate, use, wield, or otherwise benefit from any of its equipment. Object into Creature. You can turn an object into any kind of creature, as long as the creatures size is no larger than the objects size and the creatures challenge rating is 9 or lower. The creature is friendly to you and your companions. It acts on each of your turns. You decide what action it takes and how it moves. The D. M. has the creatures statistics and resolves all of its actions and movement. If the spell becomes permanent, you no longer control the creature. It might remain friendly to you, depending on how you have treated it. Creature into Object. If you turn a creature into an object, it transforms along with whatever it is wearing and carrying into that form. The creatures statistics become those of the object, and the creature has no memory of time spent in this form, after the spell ends and it returns to its normal form.",
      "url": "https://www.dnd-spells.com/spell/true-polymorph"
    },
    "giant insect": {
      "castingTime": "1 Action",
      "duration": "Concentration, up to 10 minutes",
      "range": "30 feet",
      "components": "Verbal, Somatic",
      "slotLevel": "4",
      "school": "Transmutation",
      "shortDescription": "Requires concentration. You transform up to ten centipedes, three spiders, five wasps, or one scorpion within range into giant versions of their natural forms for the duration, that obey your commands and acts on your turn. The D. M. resolves their actions and movement.",
      "longDescription": "You transform up to ten centipedes, three spiders, five wasps, or one scorpion within range into giant versions of their natural forms for the duration. A centipede becomes a giant centipede, a spider becomes a giant spider, a wasp becomes a giant wasp, and a scorpion becomes a giant scorpion. Each creature obeys your verbal commands, and in combat, they act on your turn each round. The D. M. has the statistics for these creatures and resolves their actions and movement. A creature remains in its giant size for the duration, until it drops to 0 hit points, or until you use an action to dismiss the effect on it. The D. M. might allow you to choose different targets. For example, if you transform a bee, its giant version might have the same statistics as a giant wasp.",
      "url": "https://www.dnd-spells.com/spell/giant-insect"
    },
    "dispel evil and good": {
      "castingTime": "1 Action",
      "duration": "Concentration, up to 1 minute",
      "range": "Self",
      "components": "Verbal, Somatic, Material (holy water or powdered silver and iron)",
      "slotLevel": "5",
      "school": "Abjuration",
      "shortDescription": "Requires concentration. For the duration, celestials, elementals, fey, fiends, and undead have disadvantage on attack rolls against you. As your action, make a melee spell attack that asends the creature back to its plane of existence on a charisma fail.",
      "longDescription": "Shimmering energy surrounds and protects you from fey, undead, and creatures originating from beyond the Material Plane. For the duration, celestials, elementals, fey, fiends, and undead have disadvantage on attack rolls against you. You can end the spell early by using either of the following special functions. Break Enchantment. As your action, you touch a creature you can reach that is charmed, frightened, or possessed by a celestial, an elemental, a fey, a fiend, or an undead. The creature you touch is no longer charmed, frightened, or possessed by such creatures. Dismissal. As your action, make a melee spell attack against a celestial, an elemental, a fey, a fiend, or an undead you can reach. On a hit, you attempt to drive the creature back to its home plane. The creature must succeed on a Charisma saving throw or be sent back to its home plane (if it isnt there already). If they arent on their home plane, undead are sent to the Shadowfell, and fey are sent to the Feywild.",
      "url": "https://www.dnd-spells.com/spell/dispel-evil-and-good"
    },
    "booming blade": {
      "castingTime": "1 Action",
      "duration": "1 round",
      "range": "5 feet",
      "components": "Verbal, Material (a weapon) ",
      "slotLevel": "cantrip",
      "school": "Evocation",
      "shortDescription": "Make a melee attack with a weapon against one creature. On a hit, the target suffers the weapons normal effects and is surrounded by booming energy. If it moves before your next turn, it takes 1d8 thunder damage.",
      "longDescription": "As part of the action used to cast this spell, you must make a melee attack with a weapon against one creature within the spells range, otherwise the spell fails. On a hit, the target suffers the attacks normal effects, and it becomes sheathed in booming energy until the start of your next turn. If the target willingly moves before then, it immediately takes 1d8 thunder damage, and the spell ends. This spells damage increases when you reach higher levels. At higher levels: At 5th level, the melee attack deals an extra 1d8 thunder damage to the target, and the damage the target takes for moving increases to 2d8. Both damage rolls increase by 1d8 at 11th level and 17th level.",
      "url": "https://www.dnd-spells.com/spell/booming-blade",
      "damage": {
        "type": "thunder damage",
        "playerLevel": {
          1: "1d8",
          2: "1d8",
          3: "1d8",
          4: "1d8",
          5: "2d8",
          6: "2d8",
          7: "2d8",
          8: "2d8",
          9: "2d8",
          10: "2d8",
          11: "3d8",
          12: "3d8",
          13: "3d8",
          14: "3d8",
          15: "3d8",
          16: "3d8",
          17: "4d8",
          18: "4d8",
          19: "4d8",
          20: "4d8"
        }
      }
    },
    "glibness": {
      "castingTime": "1 Action",
      "duration": "1 hour",
      "range": "Self",
      "components": "Verbal",
      "slotLevel": "8",
      "school": "Transmutation",
      "shortDescription": "Until the spell ends, when you make a Charisma check, you can replace the number you roll with a 15. Additionally, no matter what you say, magic that would determine if you are telling the truth indicates that you are being truthful.",
      "longDescription": "Until the spell ends, when you make a Charisma check, you can replace the number you roll with a 15. Additionally, no matter what you say, magic that would determine if you are telling the truth indicates that you are being truthful.",
      "url": "https://www.dnd-spells.com/spell/glibness"
    },
    "telepathy": {
      "castingTime": "1 Action",
      "duration": "24 hours",
      "range": "Unlimited",
      "components": "Verbal, Somatic, Material (a pair of linked silver rings)",
      "slotLevel": "8",
      "school": "Evocation",
      "shortDescription": "You create a telepathic link between yourself and a familiar willing creature anywhere on the same plane.",
      "longDescription": "You create a telepathic link between yourself and a willing creature with which you are familiar. The creature can be anywhere on the same plane of existence as you. The spell ends if you or the target are no longer on the same plane. Until the spell ends, you and the target can instantaneously share words, images, sounds, and other sensory messages with one another through the link, and the target recognizes you as the creature it is communicating with. The spell enables a creature with an Intelligence score of at least 1 to understand the meaning of your words and take in the scope of any sensory messages you send to it.",
      "url": "https://www.dnd-spells.com/spell/telepathy"
    },
    "resurrection": {
      "castingTime": "1 Hour",
      "duration": "Instantaneous",
      "range": "Touch",
      "components": "Verbal, Somatic, Material (a diamond worth at least 1,000 gold pieces, which the spell consumes)",
      "slotLevel": "7",
      "school": "Necromancy",
      "shortDescription": "You touch a dead creature that has been dead for no more than a century, that didnt die of old age, and that isnt undead. If its soul is free and willing, the target returns to life with all its hit points. This spell neutralizes any poisons and cures normal diseases afflicting the creature when it died. Restores missing body parts. The target takes a -4 penalty to all attack rolls, saving throws, and ability checks. Every time the target finishes a long rest, the penalty is reduced by 1. Until you finish a long rest, you cant cast spells again, and you have disadvantage on all attack rolls, ability checks, and saving throws.",
      "longDescription": "You touch a dead creature that has been dead for no more than a century, that didnt die of old age, and that isnt undead. If its soul is free and willing, the target returns to life with all its hit points. This spell neutralizes any poisons and cures normal diseases afflicting the creature when it died. It doesnt, however, remove magical diseases, curses, and the like; if such effects arent removed prior to casting the spell, they afflict the target on its return to life. This spell closes all mortal wounds and restores any missing body parts. Coming back from the dead is an ordeal. The target takes a -4 penalty to all attack rolls, saving throws, and ability checks. Every time the target finishes a long rest, the penalty is reduced by 1 until it disappears. Casting this spell to restore life to a creature that has been dead for one year or longer taxes you greatly. Until you finish a long rest, you cant cast spells again, and you have disadvantage on all attack rolls, ability checks, and saving throws.",
      "url": "https://www.dnd-spells.com/spell/resurrection"
    },
    "augury": {
      "castingTime": "1 Minute",
      "duration": "Instantaneous",
      "range": "Self",
      "components": "Verbal, Somatic, Material (specially marked sticks, bones, or similar tokens worth at least 25 gold pieces)",
      "slotLevel": "2",
      "school": "Divination Ritual",
      "shortDescription": "You receive an omen from an otherworldly entity about the results of a specific course of action that you plan to take within the next 30 minutes. D. M. chooses.",
      "longDescription": "By casting gem-inlaid sticks, rolling dragon bones, laying out ornate cards, or employing some other divining tool, you receive an omen from an otherworldly entity about the results of a specific course of action that you plan to take within the next 30 minutes. The D. M. chooses from the following possible omens: Weal, for good results; Woe, for bad results; Weal and woe,for both good and bad results. Nothing, for results that arent especially good or bad. The spell doesnt take into account any possible circumstances that might change the outcome, such as the casting of additional spells or the loss or gain of a companion. If you cast the spell two or more times before completing your next long rest, there is a cumulative 25 percent chance for each casting after the first that you get a random reading. The D. M. makes this roll in secret.",
      "url": "https://www.dnd-spells.com/spell/augury-ritual"
    },
    "mass healing word": {
      "castingTime": "1 Bonus Action",
      "duration": "Instantaneous",
      "range": "60 feet",
      "components": "Verbal",
      "slotLevel": "3",
      "school": "Evocation",
      "shortDescription": "Up to 6 creatures regain hit points equal to 1d4 + your spell modifier",
      "longDescription": "As you call out words of restoration, up to six creatures of your choice that you can see within range regain hit points equal to 1d4 + your spellcasting ability modifier. This spell has no effect on undead or constructs. At Higher Levels: When you cast this spell using a spell slot of 4th level or higher, the healing increases by 1d4 for each slot level above 3rd.",
      "url": "https://www.dnd-spells.com/spell/mass-healing-word",
      "healing": {
        "levels": {
          1: 0,
          2: 0,
          3: "1d4",
          4: "2d4",
          5: "3d4",
          6: "4d4",
          7: "5d4",
          8: "6d4",
          9: "7d4"
        }
      }
    },
    "contagion": {
      "castingTime": "1 Action",
      "duration": "7 days",
      "range": "Touch",
      "components": "Verbal, Somatic",
      "slotLevel": "5",
      "school": "Necromancy",
      "shortDescription": "Afflict a target with a disease of your choice on a melee spell attack hit. The target must make a Constitution save at the end of each of its turns. It recovers from the disease on three saves, or is affected by the disease for 7 days after three fails and stops rolling.",
      "longDescription": "Your touch inflicts disease. Make a melee spell attack against a creature within your reach. On a hit, you afflict the creature with a disease of your choice from any of the ones described below. At the end of each of the targets turns, it must make a Constitution saving throw. After failing three of these saving throws, the diseases effects last for the duration, and the creature stops making these saves. After succeeding on three of these saving throws, the creature recovers from the disease, and the spell ends. Since this spell induces a natural disease in its target, any effect that removes a disease or otherwise ameliorates a diseases effects apply to it. Blinding Sickness: Pain grips the creatures mind, and its eyes turn milky white. The creature has disadvantage on wisdom checks and wisdom saving throws and is blinded. Filth Fever: A raging fever sweeps through the creatures body. The creature has disadvantage on Strength checks, Strength saving throws, and attack rolls that use Strength. Flesh Rot: The creatures flesh decays. The creature has disadvantage on Charisma checks and vulnerability to all damage. Mindfire: The creatures mind becomes feverish. The creature has disadvantage on Intelligence checks and Intelligence saving throws, and the creature behaves as if under the effects of the confusion spell during combat. Seizure: The creature is overcome with shaking. The creature has disadvantage on Dexterity checks, Dexterity saving throws, and attack rolls that use Dexterity. Slimy Doom: The creature begins to bleed uncontrollably. The creature has disadvantage on Constitution checks and Constitution saving throws. In addition, whenever the creature takes damage, it is stunned until the end of its next turn.",
      "url": "https://www.dnd-spells.com/spell/contagion"
    },
    "charm person": {
      "castingTime": "1 Action",
      "duration": "1 hour",
      "range": "30 feet",
      "components": "Verbal, Somatic",
      "slotLevel": "1",
      "school": "Enchantment",
      "shortDescription": "You attempt to charm a humanoid you can see within range. It must make a wisdom saving throw, and does so with advantage if you or your companions are fighting it. If it fails the saving throw, it is charmed by you until the spell ends or until you or your companions do anything harmful to it.",
      "longDescription": "You attempt to charm a humanoid you can see within range. It must make a wisdom saving throw, and does so with advantage if you or your companions are fighting it. If it fails the saving throw, it is charmed by you until the spell ends or until you or your companions do anything harmful to it. The charmed creature regards you as a friendly acquaintance. When the spell ends, the creature knows it was charmed by you. At Higher Levels: When you cast this spell using a spell slot of 2nd level or higher, you can target one additional creature for each slot level above 1st. The creatures must be within 30 feet of each other when you target them.",
      "url": "https://www.dnd-spells.com/spell/charm-person"
    },
    "flame blade": {
      "castingTime": "1 Bonus Action",
      "duration": "Concentration, up to 10 minutes",
      "range": "Self",
      "components": "Verbal, Somatic, Material (leaf of sumac)",
      "slotLevel": "2",
      "school": "Evocation",
      "shortDescription": "Requires concentration. You evoke a fiery blade in your free hand. Use your bonus action to make a melee spell attack with the blade. On hit, the target takes 3d6 fire damage.",
      "longDescription": "You evoke a fiery blade in your free hand. The blade is similar in size and shape to a scimitar, and it lasts for the duration. If you let go of the blade, it disappears, but you can evoke the blade again as a bonus action. You can use your action to make a melee spell attack with the fiery blade. On a hit, the target takes 3d6 fire damage. The flaming blade sheds bright light in a 10-foot radius and dim light for an additional 10 feet. At Higher Levels: When you cast this spell using a spell slot of 4th level or higher, the damage increases by 1d6 for every two slot levels above 2nd.",
      "url": "https://www.dnd-spells.com/spell/flame-blade",
      "damage": {
        "type": "fire damage",
        "levels": {
          1: 0,
          2: "3d6",
          3: "3d6",
          4: "4d6",
          5: "4d6",
          6: "5d6",
          7: "5d6",
          8: "6d6",
          9: "6d6"
        }
      }
    },
    "silent image": {
      "castingTime": "1 Action",
      "duration": "Concentration, up to 10 minutes",
      "range": "60 feet",
      "components": "Verbal, Somatic, Material (a bit of fleece)",
      "slotLevel": "1",
      "school": "Illusion",
      "shortDescription": "You create the image of an object, a creature, or some other visible phenomenon that is no larger than a 15-foot cube. Physical interaction reveals the illusion as well as investigation checks.",
      "longDescription": "You create the image of an object, a creature, or some other visible phenomenon that is no larger than a 15-foot cube. The image appears at a spot within range and lasts for the duration. The image is purely visual; it isnt accompanied by sound, smell, or other sensory effects. You can use your action to cause the image to move to any spot within range. As the image changes location, you can alter its appearance so that its movements appear natural for the image. For example, if you create an image of a creature and move it, you can alter the image so that it appears to be walking. Physical interaction with the image reveals it to be an illusion, because things can pass through it. A creature that uses its action to examine the image can determine that it is an illusion with a successful Intelligence (Investigation) check against your spell save DC. If a creature discerns the illusion for what it is, the creature can see through the image.",
      "url": "https://www.dnd-spells.com/spell/silent-image"
    },
    "delayed blast fireball": {
      "castingTime": "1 Action",
      "duration": "Concentration, up to 1 minute",
      "range": "150 feet",
      "components": "Verbal, Somatic, Material  (a tiny ball of bat guano and sulfur)",
      "slotLevel": "7",
      "school": "Evocation",
      "shortDescription": "Requires concentration. Leave a bead of fire in the air. When the spell ends or your concentration is broken, the bead explodes, causing each creature in a 20 foot radius to take total accumulated damage on a failed Dexterity save. Base damage is 12d6 + 1d6 per round you maintain concentration. The fire ignites flammable objects in the area.",
      "longDescription": "A beam of yellow light flashes from your pointing finger, then condenses to linger at a chosen point within range as a glowing bead for the duration. When the spell ends, either because your concentration is broken or because you decide to end it, the bead blossoms with a low roar into an explosion of flame that spreads around corners. Each creature in a 20-foot-radius sphere centered on that point must make a Dexterity saving throw. A creature takes fire damage equal to the total accumulated damage on a failed save, or half as much damage on a successful one. The spells base damage is 12d6. If at the end of your turn the bead has not yet detonated, the damage increases by 1d6. If the glowing bead is touched before the interval has expired, the creature touching it must make a Dexterity saving throw. On a failed save, the spell ends immediately, causing the bead to erupt in flame. On a successful save, the creature can throw the bead up to 40 feet. When it strikes a creature or a solid object, the spell ends, and the bead explodes. The fire damages objects in the area and ignites flammable objects that arent being worn or carried. At Higher Levels: When you cast this spell using a spell slot of 8th level or higher, the base damage increases by 1d6 for each slot level above 7th.",
      "url": "https://www.dnd-spells.com/spell/delayed-blast-fireball"
    },
    "conjure elemental": {
      "castingTime": "1 Minute",
      "duration": "Concentration, up to 1 hour",
      "range": "90 feet",
      "components": "Verbal, Somatic, Material  (burning incense for air, soft clay for earth, sulfur and phosphorus for fire, or water and sand for water)",
      "slotLevel": "5",
      "school": "Conjuration",
      "shortDescription": "Requires concentration. Call forth an elemental servant of air, earth, fire, or water. The elemental has its own turns, and obeys your verbal commands. If your concentration is broken, the elemental becomes hostile to you and your companions.",
      "longDescription": "You call forth an elemental servant. Choose an area of air, earth, fire, or water that fills a 10-foot cube within range. An elemental of challenge rating 5 or lower appropriate to the area you chose appears in an unoccupied space within 10 feet of it. For example, a fire elemental emerges from a bonfire, and an earth elemental rises up from the ground. The elemental disappears when it drops to 0 hit points or when the spell ends. The elemental is friendly to you and your companions for the duration. Roll initiative for the elemental, which has its own turns. It obeys any verbal commands that you issue to it (no action required by you). If you dont issue any commands to the elemental, it defends itself from hostile creatures but otherwise takes no actions. If your concentration is broken, the elemental doesnt disappear. Instead, you lose control of the elemental, it becomes hostile toward you and your companions, and it might attack. An uncontrolled elemental cant be dismissed by you, and it disappears 1 hour after you summoned it. The D. M. has the elementals statistics. At Higher Levels: When you cast this spell using a spell slot of 6th level or higher, the challenge rating increases by 1 for each slot level above 5th.",
      "url": "https://www.dnd-spells.com/spell/conjure-elemental"
    },
    "feign death": {
      "castingTime": "1 Action",
      "duration": "1 hour",
      "range": "Touch",
      "components": "Verbal, Somatic, Material (a pinch of graveyard dirt)",
      "slotLevel": "3",
      "school": "Necromancy Ritual",
      "shortDescription": "You make a willing creature seem dead. Disease or poison have no effect on the creature until the spel ends, and the creature has resistance to all damage except psychic.",
      "longDescription": "You touch a willing creature and put it into a cataleptic state that is indistinguishable from death. For the spells duration, or until you use an action to touch the target and dismiss the spell, the target appears dead to all outward inspection and to spells used to determine the targets status. The target is blinded and incapacitated, and its speed drops to 0. The target has resistance to all damage except psychic damage. If the target is diseased or poisoned when you cast the spell, or becomes diseased or poisoned while under the spells effect, the disease and poison have no effect until the spell ends.",
      "url": "https://www.dnd-spells.com/spell/feign-death-ritual"
    },
    "meteor swarm": {
      "castingTime": "1 Action",
      "duration": "Instantaneous",
      "range": "1 mile",
      "components": "Verbal, Somatic",
      "slotLevel": "9",
      "school": "Evocation",
      "shortDescription": "Blazing orbs of fire plummet to the ground at four different points you can see within range. Each creature in a 40-foot-radius sphere centered on each point you choose must make a Dexterity saving throw. The sphere spreads around corners. A creature takes 20d6 fire damage and 20d6 bludgeoning damage on a failed save, or half as much damage on a successful one. A creature in the area of more than one fiery burst is affected only once. The spell damages objects in the area and ignites flammable objects that arent being worn or carried.",
      "longDescription": "Blazing orbs of fire plummet to the ground at four different points you can see within range. Each creature in a 40-foot-radius sphere centered on each point you choose must make a Dexterity saving throw. The sphere spreads around corners. A creature takes 20d6 fire damage and 20d6 bludgeoning damage on a failed save, or half as much damage on a successful one. A creature in the area of more than one fiery burst is affected only once. The spell damages objects in the area and ignites flammable objects that arent being worn or carried.",
      "url": "https://www.dnd-spells.com/spell/meteor-swarm",
      "damage": {
        "type": "fire and bludgeoning damage",
        "levels": {
          1: 0,
          2: 0,
          3: 0,
          4: 0,
          5: 0,
          6: 0,
          7: 0,
          8: 0,
          9: "20d6 and 20d6"
        }
      }
    },
    "gentle repose": {
      "castingTime": "1 Action",
      "duration": "10 days",
      "range": "Touch",
      "components": "Verbal, Somatic, Material (a pinch of salt and one copper piece placed on each of the corpses eyes, which must remain there for the duration)",
      "slotLevel": "2",
      "school": "Necromancy Ritual",
      "shortDescription": "You touch a corpse or other remains. For the duration, the target is protected from decay and cant become undead, and extends the time limit on raising them from the dead.",
      "longDescription": "You touch a corpse or other remains. For the duration, the target is protected from decay and cant become undead. The spell also effectively extends the time limit on raising the target from the dead, since days spent under the influence of this spell dont count against the time limit of spells such as raise dead.",
      "url": "https://www.dnd-spells.com/spell/gentle-repose-ritual"
    },
    "create or destroy water": {
      "castingTime": "1 Action",
      "duration": "Instantaneous",
      "range": "30 feet",
      "components": "Verbal, Somatic, Material  (a drop of water if creating water or a few grains of sand if destroying it)",
      "slotLevel": "1",
      "school": "Transmutation",
      "shortDescription": "You either create or destroy up to 10 gallons of water.",
      "longDescription": "You either create or destroy water. Create Water. You create up to 10 gallons of clean water within range in an open container. Alternatively, the water falls as rain in a 30-foot cube within range, extinguishing exposed flames in the area. Destroy Water. You destroy up to 10 gallons of water in an open container within range. Alternatively, you destroy fog in a 30-foot cube within range. At higher levels: When you cast this spell using a spell slot of 2nd level or higher, you create or destroy 10 additional gallons of water, or the size of the cube increases by 5 feet, for each slot level above 1st.",
      "url": "https://www.dnd-spells.com/spell/create-or-destroy-water"
    },
    "etherealness": {
      "castingTime": "1 Action",
      "duration": "Up to 8 hours",
      "range": "Self",
      "components": "Verbal, Somatic",
      "slotLevel": "7",
      "school": "Transmutation",
      "shortDescription": "You step into the border regions of the Ethereal Plane, in the area where it overlaps with your current plane. You remain in the Border Ethereal for the duration or until you use your action to dismiss the spell. During this time, you can move in any direction. If you move up or down, every foot of movement costs an extra foot. You can see and hear the plane you originated from, but everything there looks gray, and you cant see anything more than 60 feet away. While on the Ethereal Plane, you can only affect and be affected by other creatures on that plane. Creatures that arent on the Ethereal Plane cant perceive you and cant interact with you, unless a special ability or magic has given them the ability to do so.",
      "longDescription": "You step into the border regions of the Ethereal Plane, in the area where it overlaps with your current plane. You remain in the Border Ethereal for the duration or until you use your action to dismiss the spell. During this time, you can move in any direction. If you move up or down, every foot of movement costs an extra foot. You can see and hear the plane you originated from, but everything there looks gray, and you cant see anything more than 60 feet away. While on the Ethereal Plane, you can only affect and be affected by other creatures on that plane. Creatures that arent on the Ethereal Plane cant perceive you and cant interact with you, unless a special ability or magic has given them the ability to do so. You ignore all objects and effects that arent on the Ethereal Plane, allowing you to move through objects you perceive on the plane you originated from. When the spell ends, you immediately return to the plane you originated from in the spot you currently occupy. If you occupy the same spot as a solid object or creature when this happens, you are immediately shunted to the nearest unoccupied space that you can occupy and take force damage equal to twice the number of feet you are moved. This spell has no effect if you cast it while you are on the Ethereal Plane or a plane that doesnt border it, such as one of the Outer Planes. AtHigherLevels. When you cast this spell using a spell slot of 8th level or higher, you can target up to three willing creatures (including you) for each slot level above 7th. The creatures must be within 10 feet of you when you cast the spell.",
      "url": "https://www.dnd-spells.com/spell/etherealness"
    },
    "spider climb": {
      "castingTime": "1 Action",
      "duration": "Concentration, up to 1 hour",
      "range": "Touch",
      "components": "Verbal, Somatic, Material (a drop of bitumen and a spider)",
      "slotLevel": "2",
      "school": "Transmutation",
      "shortDescription": "Requires concentration. One creature can move on walls and ceilings at its walking speed.",
      "longDescription": "Until the spell ends, one willing creature you touch gains the ability to move up, down, and across vertical surfaces and upside down along ceilings, while leaving its hands free. The target also gains a climbing speed equal to its walking speed.",
      "url": "https://www.dnd-spells.com/spell/spider-climb"
    },
    "commune": {
      "castingTime": "1 Minute",
      "duration": "1 minute",
      "range": "Self",
      "components": "Verbal, Somatic, Material (incense and a vial of holy or unholy water",
      "slotLevel": "5",
      "school": "Divination Ritual",
      "shortDescription": "You contact your deity or a divine proxy and ask up to three questions that can be answered with a yes or no. You must ask your questions before the spell ends. You receive a correct answer for each question.",
      "longDescription": "You contact your deity or a divine proxy and ask up to three questions that can be answered with a yes or no. You must ask your questions before the spell ends. You receive a correct answer for each question. Divine beings arent necessarily omniscient, so you might receive unclear as an answer if a question pertains to information that lies beyond the deitys knowledge. In a case where a one-word answer could be misleading or contrary to the deitys interests, the D. M. might offer a short phrase as an answer instead. If you cast the spell two or more times before finishing your next long rest, there is a cumulative 25 percent chance for each casting after the first that you get no answer. The D. M. makes this roll in secret.",
      "url": "https://www.dnd-spells.com/spell/commune-ritual"
    },
    "whirlwind": {
      "castingTime": "1 Action",
      "duration": "Concentration, up to 1 minute",
      "range": "300 feet",
      "components": "Verbal, Material (a piece of straw)",
      "slotLevel": "7",
      "school": "Evocation",
      "shortDescription": "A 10 foot by 30 foot whirlwind appears at a point, and can be moved 30 feet by you using your action. The whilrwind sucks up medium or smaller objects and creatures that fail a Dexterity save. The creature takes 10d6 bludgeoning damage on a fail, half as much on a success. Additionally, large or smaller creatures that fail the save must make a strength save or become restrained. Creatures restrained move 5 feet into the whirlwind at the start of each turn and move with the whirlwind.",
      "longDescription": "A whirlwind howls down to a point on the ground you specify. The whirlwind is a 10-foot-radius, 30-foot-high cylinder centered on that point. Until the spell ends, you can use your action to move the whirlwind up to 30 feet in any direction along the ground. The whirlwind sucks up any Medium or smaller objects that arent secured to anything and that arent worn or carried by anyone. A creature must make a Dexterity saving throw the first time on a turn that it enters the whirlwind or that the whirlwind enters its space, including when the whirlwind first appears. A creature takes 10d6 bludgeoning damage on a failed save, or half as much damage on a successful one. In addition, a Large or smaller creature that fails the save must succeed on a Strength saving throw or become restrained in the whirlwind until the spell ends. When a creature starts its turn restrained by the whirlwind, the creature is pulled 5 feet higher inside it, unless the creature is at the top. A restrained creature moves with the whirlwind and falls when the spell ends, unless the creature has some means to stay aloft. A restrained creature can use an action to make a Strength or Dexterity check against your spell save DC. If successful, the creature is no longer restrained by the whirlwind and is hurled 3d6 10 feet away from it in a random direction.",
      "url": "https://www.dnd-spells.com/spell/whirlwind",
      "damage": {
        "type": "bludgeoning damage",
        "levels": {
          1: 0,
          2: 0,
          3: 0,
          4: 0,
          5: 0,
          6: 0,
          7: "10d6",
          8: "10d6",
          9: "10d6"
        }
      }
    },
    "grasping vine": {
      "castingTime": "1 Bonus Action",
      "duration": "Concentration, up to 1 minute",
      "range": "30 feet",
      "components": "Verbal, Somatic",
      "slotLevel": "4",
      "school": "Conjuration",
      "shortDescription": "Requires concentration. You conjure a vine that sprouts from the ground in an unoccupied space of your choice that you can see within range. When you cast this spell, you can direct the vine to lash out at a creature within 30 feet of it that you can see. That creature must succeed on a Dexterity saving throw or be pulled 20 feet directly toward the vine. Until the spell ends, you can direct the vine to lash out at the same creature or another one as a bonus action on each of your turns.",
      "longDescription": "You conjure a vine that sprouts from the ground in an unoccupied space of your choice that you can see within range. When you cast this spell, you can direct the vine to lash out at a creature within 30 feet of it that you can see. That creature must succeed on a Dexterity saving throw or be pulled 20 feet directly toward the vine. Until the spell ends, you can direct the vine to lash out at the same creature or another one as a bonus action on each of your turns.",
      "url": "https://www.dnd-spells.com/spell/grasping-vine"
    },
    "spike growth": {
      "castingTime": "1 Action",
      "duration": "Concentration, up to 10 minutes",
      "range": "150 feet",
      "components": "Verbal, Somatic, Material (seven sharp thorns or seven small twigs, each sharpened to a point)",
      "slotLevel": "2",
      "school": "Transmutation",
      "shortDescription": "The ground in a 20-foot radius centered on a point within range twists and sprouts hard spikes and thorns. The area becomes difficult terrain. When a creature moves into or within the area, it takes 2d4 piercing damage for every 5 feet it travels. The transformation of the ground is camouflaged to look natural.",
      "longDescription": "The ground in a 20-foot radius centered on a point within range twists and sprouts hard spikes and thorns. The area becomes difficult terrain for the duration. When a creature moves into or within the area, it takes 2d4 piercing damage for every 5 feet it travels. The transformation of the ground is camouflaged to look natural. Any creature that cant see the area at the time the spell is cast must make a Wisdom (Perception) check against your spell save DC to recognize the terrain as hazardous before entering it.",
      "url": "https://www.dnd-spells.com/spell/spike-growth",
      "damage": {
        "type": "piercing damage",
        "levels": {
          1: 0,
          2: "2d4",
          3: "2d4",
          4: "2d4",
          5: "2d4",
          6: "2d4",
          7: "2d4",
          8: "2d4",
          9: "2d4"
        }
      }
    },
    "maelstrom": {
      "castingTime": "1 Action",
      "duration": "Concentration, up to 1 minute",
      "range": "120 feet",
      "components": "Verbal, Somatic, Material (paper or leaf in the shape of a funnel)",
      "slotLevel": "5",
      "school": "Evocation",
      "shortDescription": "A mass of 5-foot-deep water appears and swirls in a 30-foot radius centered on a point you can see within range. The point must be on ground or in a body of water. Until the spell ends, that area is difficult terrain, and any creature that starts its turn there must succeed on a Strength saving throw or take 6d6 bludgeoning damage and be pulled 10 feet toward the center.",
      "longDescription": "A mass of 5-foot-deep water appears and swirls in a 30-foot radius centered on a point you can see within range. The point must be on ground or in a body of water. Until the spell ends, that area is difficult terrain, and any creature that starts its turn there must succeed on a Strength saving throw or take 6d6 bludgeoning damage and be pulled 10 feet toward the center.",
      "url": "https://www.dnd-spells.com/spell/maelstrom",
      "damage": {
        "type": "bludgeoning damage",
        "levels": {
          1: 0,
          2: 0,
          3: 0,
          4: 0,
          5: "6d6",
          6: "6d6",
          7: "6d6",
          8: "6d6",
          9: "6d6"
        }
      }
    },
    "seeming": {
      "castingTime": "1 Action",
      "duration": "8 hours",
      "range": "30 feet",
      "components": "Verbal, Somatic",
      "slotLevel": "5",
      "school": "Illusion",
      "shortDescription": "This spell allows you to change the appearance of any number of creatures that you can see within range. Unwilling targets avoid the effect on a successful charisma save. This spell fails to hold up to visual inspection, and can be seen through with a successful investigation check.",
      "longDescription": "This spell allows you to change the appearance of any number of creatures that you can see within range. You give each target you choose a new, illusory appearance. An unwilling target can make a Charisma saving throw, and if it succeeds, it is unaffected by this spell. The spell disguises physical appearance as well as clothing, armor, weapons, and equipment. You can make each creature seem 1 foot shorter or taller and appear thin, fat, or in between. You cant change a targets body type, so you must choose a form that has the same basic arrangement of limbs. Otherwise, the extent of the illusion is up to you. The spell lasts for the duration, unless you use your action to dismiss it sooner. The changes wrought by this spell fail to hold up to physical inspection. For example, if you use this spell to add a hat to a creatures outfit, objects pass through the hat, and anyone who touches it would feel nothing or would feel the creatures head and hair. If you use this spell to appear thinner than you are, the hand of someone who reaches out to touch you would bump into you while it was seemingly still in midair. A creature can use its action to inspect a target and make an Intelligence (Investigation) check against your spell save DC. If it succeeds, it becomes aware that the target is disguised.",
      "url": "https://www.dnd-spells.com/spell/seeming"
    },
    "investiture of ice": {
      "castingTime": "1 Action",
      "duration": "Concentration, up to 10 minutes",
      "range": "Self",
      "components": "Verbal, Somatic",
      "slotLevel": "6",
      "school": "Transmutation",
      "shortDescription": "You are immune to cold damage and have resistance to fire damage. You can move across difficult terrain created by ice or snow without spending extra movement. The ground in a 10-foot radius around you is icy and is difficult terrain for creatures other than you. The radius moves with you. You can use your action to create a 15-foot cone of freezing wind extending from your outstretched hand in a direction you choose. Each creature in the cone must make a Constitution saving throw. A creature takes 4d6 cold damage on a failed save, or half as much damage on a successful one. A creature that fails its save against this effect has its speed halved until the start of your next turn.",
      "longDescription": "Until the spell ends, ice rimes your body, and you gain the following benefits: You are immune to cold damage and have resistance to fire damage. You can move across difficult terrain created by ice or snow without spending extra movement. The ground in a 10-foot radius around you is icy and is difficult terrain for creatures other than you. The radius moves with you. You can use your action to create a 15-foot cone of freezing wind extending from your outstretched hand in a direction you choose. Each creature in the cone must make a Constitution saving throw. A creature takes 4d6 cold damage on a failed save, or half as much damage on a successful one. A creature that fails its save against this effect has its speed halved until the start of your next turn.",
      "url": "https://www.dnd-spells.com/spell/investiture-of-ice",
      "damage": {
        "type": "cold damage",
        "levels": {
          1: 0,
          2: 0,
          3: 0,
          4: 0,
          5: 0,
          6: "4d6",
          7: "4d6",
          8: "4d6",
          9: "4d6"
        }
      }
    },
    "hallucinatory terrain": {
      "castingTime": "10 Minutes",
      "duration": "24 hours",
      "range": "300 feet",
      "components": "Verbal, Somatic, Material (a stone, a twig, and a bit of green plant)",
      "slotLevel": "4",
      "school": "Illusion",
      "shortDescription": "You make natural terrain in a 150-foot cube in range look, sound, and smell like some other sort of natural terrain. The tactile characteristics of the terrain are unchanged, so creatures entering the area are likely to see through the illusion. Creatures can make an intelligence check against your spell save DC to see through the illusion.",
      "longDescription": "You make natural terrain in a 150-foot cube in range look, sound, and smell like some other sort of natural terrain. Thus, open fields or a road can be made to resemble a swamp, hill, crevasse, or some other difficult or impassable terrain. A pond can be made to seem like a grassy meadow, a precipice like a gentle slope, or a rock-strewn gully like a wide and smooth road. Manufactured structures, equipment, and creatures within the area arent changed in appearance. The tactile characteristics of the terrain are unchanged, so creatures entering the area are likely to see through the illusion. If the difference isnt obvious by touch, a creature carefully examining the illusion can attempt an Intelligence (Investigation) check against your spell save DC to disbelieve it. A creature who discerns the illusion for what it is, sees it as a vague image superimposed on the terrain.",
      "url": "https://www.dnd-spells.com/spell/hallucinatory-terrain"
    },
    "hex": {
      "castingTime": "1 Bonus Action",
      "duration": "Concentration, up to 1 hour",
      "range": "90 feet",
      "components": "Verbal, Somatic, Material (the petrified eye of a newt)",
      "slotLevel": "1",
      "school": "Enchantment",
      "shortDescription": "You deal an extra 1d6 necrotic damage to the target whenever you hit it with an attack. Also, choose one ability when you cast the spell. The target has disadvantage on ability checks made with the chosen ability. If the target drops to 0 hit points before this spell ends, you can use a bonus action on a subsequent turn of yours to curse a new creature.",
      "longDescription": "You place a curse on a creature that you can see within range. Until the spell ends, you deal an extra 1d6 necrotic damage to the target whenever you hit it with an attack. Also, choose one ability when you cast the spell. The target has disadvantage on ability checks made with the chosen ability. If the target drops to 0 hit points before this spell ends, you can use a bonus action on a subsequent turn of yours to curse a new creature. A remove curse cast on the target ends this spell early. At Higher Levels: When you cast this spell using a spell slot of 3rd or 4th level,you can maintain your concentration on the spell for up to 8 hours. When you use a spell slot of 5th level or higher, you can maintain your concentration on the spell for up to 24 hours.",
      "url": "https://www.dnd-spells.com/spell/hex",
      "damage": {
        "type": "necrotic damage",
        "levels": {
          1: "1d6",
          2: "1d6",
          3: "1d6",
          4: "1d6",
          5: "1d6",
          6: "1d6",
          7: "1d6",
          8: "1d6",
          9: "1d6"
        }
      }
    },
    "prayer of healing": {
      "castingTime": "10 Minutes",
      "duration": "Instantaneous",
      "range": "30 feet",
      "components": "Verbal",
      "slotLevel": "2",
      "school": "Evocation",
      "shortDescription": "Up to six creatures gain health equal to 2d8 + your spellcasting modifier",
      "longDescription": "Up to six creatures of your choice that you can see within range each regain hit points equal to 2d8 + your spellcasting ability modifier. This spell has no effect on undead or constructs. At Higher Levels: When you cast this spell using a spell slot of 3rd level or higher, the healing increases by 1d8 for each slot level above 2nd.",
      "url": "https://www.dnd-spells.com/spell/prayer-of-healing",
      "healing": {
        "levels": {
          1: 0,
          2: "2d8",
          3: "3d8",
          4: "4d8",
          5: "5d8",
          6: "6d8",
          7: "7d8",
          8: "8d8",
          9: "9d8"
        }
      }
    },
    "deafness": {
      "castingTime": "1 Action",
      "duration": "1 minute",
      "range": "30 feet",
      "components": "Verbal",
      "slotLevel": "2",
      "school": "Necromancy",
      "shortDescription": "Deafen a foe.",
      "longDescription": "You can deafen a foe. Choose one creature that you can see within range to make a Constitution saving throw. If it fails, the target is deafened for the duration. At the end of each of its turns, the target can make a Constitution saving throw. On a success, the spell ends. At Higher Levels.When you cast this spell using a spell slot of 3rd level or higher, you can target one additional creature for each slot level above 2nd.",
      "url": "https://www.dnd-spells.com/spell/blindnessdeafness"
    },
    "blindness": {
      "castingTime": "1 Action",
      "duration": "1 minute",
      "range": "30 feet",
      "components": "Verbal",
      "slotLevel": "2",
      "school": "Necromancy",
      "shortDescription": "Blind a foe.",
      "longDescription": "You can blind a foe. Choose one creature that you can see within range to make a Constitution saving throw. If it fails, the target is for the duration. At the end of each of its turns, the target can make a Constitution saving throw. On a success, the spell ends. At Higher Levels.When you cast this spell using a spell slot of 3rd level or higher, you can target one additional creature for each slot level above 2nd.",
      "url": "https://www.dnd-spells.com/spell/blindnessdeafness"
    },
    "harm": {
      "castingTime": "1 Action",
      "duration": "Instantaneous",
      "range": "60 feet",
      "components": "Verbal, Somatic",
      "slotLevel": "6",
      "school": "Necromancy",
      "shortDescription": "A target takes 14d6 necrotic damage on a failed Constitution save, half as much on a success. Cannot reduce health below one. Health max is also reduced to the damage taken on a fail.",
      "longDescription": "You unleash a virulent disease on a creature that you can see within range. The target must make a Constitution saving throw. On a failed save, it takes 14d6 necrotic damage, or half as much damage on a successful save. The damage cant reduce the targets hit points below 1. If the target fails the saving throw, its hit point maximum is reduced for 1 hour by an amount equal to the necrotic damage it took. Any effect that removes a disease allows a creatures hit point maximum to return to normal before that time passes.",
      "url": "https://www.dnd-spells.com/spell/harm",
      "damage": {
        "type": "necrotic damage",
        "levels": {
          1: 0,
          2: 0,
          3: 0,
          4: 0,
          5: 0,
          6: "14d6",
          7: "14d6",
          8: "14d6",
          9: "14d6"
        }
      }
    },
    "immolation": {
      "castingTime": "1 Action",
      "duration": "Concentration, up to 1 minute",
      "range": "90 feet",
      "components": "Verbal",
      "slotLevel": "5",
      "school": "Evocation",
      "shortDescription": "A target takes 7d6 fire damage on a failed Dexterity save, half as much on a success. Also on a fail, the target burns and sheds bright light. While burning, the target takes 3d6 fire damage on a failed Dexterity saves. Flames cannot be extinguished nonmagically.",
      "longDescription": "Flames wreathe one creature you can see within range. The target must make a Dexterity saving throw. It takes 7d6 fire damage on a failed save, or half as much damage on a successful one. On a failed save, the target also burns for the spells duration. The burning target sheds bright light in a 30-foot radius and dim light for an additional 30 feet. At the end of each of its turns, the target repeats the saving throw. It takes 3d6 fire damage on a failed save, and the spell ends on a successful one. These magical flames cant be extinguished through nonmagical means. If damage from this spell reduces a target to 0 hit points, the target is turned to ash.",
      "url": "https://www.dnd-spells.com/spell/immolation",
      "damage": {
        "type": "fire damage",
        "levels": {
          1: 0,
          2: 0,
          3: 0,
          4: 0,
          5: "7d6 and 3d6",
          6: "7d6 and 3d6",
          7: "7d6 and 3d6",
          8: "7d6 and 3d6",
          9: "7d6 and 3d6"
        }
      }
    },
    "sequester": {
      "castingTime": "1 Action",
      "duration": "Until dispelled",
      "range": "Touch",
      "components": "Verbal, Somatic, Material (a powder composed of diamond, emerald, ruby, and sapphire dust worth at least 5,000 gold pieces, which the spell consumes)",
      "slotLevel": "7",
      "school": "Transmutation",
      "shortDescription": "A target becomes invisible on touch and cant be targeted by divination spells or perceived through scrying sensors created by divination spells. If the target is a creature, it falls into a state of suspended animation, until damaged or dispelled, or a certain condition is reached.",
      "longDescription": "By means of this spell, a willing creature or an object can be hidden away, safe from detection for the duration. When you cast the spell and touch the target, it becomes invisible and cant be targeted by divination spells or perceived through scrying sensors created by divination spells. If the target is a creature, it falls into a state of suspended animation. Time ceases to flow for it, and it doesnt grow older. You can set a condition for the spell to end early. The condition can be anything you choose, but it must occur or be visible within 1 mile of the target. Examples include after 1,000 years or when the tarrasque awakens. This spell also ends if the target takes any damage.",
      "url": "https://www.dnd-spells.com/spell/sequester"
    },
    "bones of the earth": {
      "castingTime": "1 Action",
      "duration": "Instantaneous",
      "range": "120 feet",
      "components": "Verbal, Somatic",
      "slotLevel": "6",
      "school": "Transmutation",
      "shortDescription": "Cause up to six 5 by 30 foot pillars of stone to burst from places on the ground. Creatures must succeed a Dexterity save or are lifted by the pillars. Creatures can be pinned to a ceiling, taking 6d6 bludgeoning damage. Creatures can escape on a successful strength or dex check against the spell save DC",
      "longDescription": "You cause up to six pillars of stone to burst from places on the ground that you can see within range. Each pillar is a cylinder that has a diameter of 5 feet and a height of up to 30 feet. The ground where a pillar appears must be wide enough for its diameter, and you can target ground under a creature if that creature is Medium or smaller. Each pillar has AC 5 and 30 hit points. When reduced to 0 hit points, a pillar crumbles into rubble, which creates an area of difficult terrain with a 10-foot radius. The rubble lasts until cleared. If a pillar is created under a creature, that creature must succeed on a Dexterity saving throw or be lifted by the pillar. A creature can choose to fail the save. If a pillar is prevented from reaching its full height because of a ceiling or other obstacle, a creature on the pillar takes 6d6 bludgeoning damage and is restrained, pinched between the pillar and the obstacle. The restrained creature can use an action to make a Strength or Dexterity check (the creatures choice) against the spells saving throw DC. On a success, the creature is no longer restrained and must either move off the pillar or fall off it. At Higher Levels: When you cast this spell using a spell slot of 7th level or higher, you can create two additional pillars for each slot level above 6th.",
      "url": "https://www.dnd-spells.com/spell/bones-of-the-earth",
      "damage": {
        "type": "bludgeoning damage",
        "levels": {
          1: 0,
          2: 0,
          3: 0,
          4: 0,
          5: 0,
          6: "6d6",
          7: "7d6",
          8: "8d6",
          9: "9d6"
        }
      }
    },
    "animal friendship": {
      "castingTime": "1 Action",
      "duration": "24 hours",
      "range": "30 feet",
      "components": "Verbal, Somatic, Material (a morsel of food) ",
      "slotLevel": "1",
      "school": "Enchantment",
      "shortDescription": "You convince a beast with less than 4 intelligence that you mean it no harm",
      "longDescription": "This spell lets you convince a beast that you mean it no harm. Choose a beast that you can see within range. It must see and hear you. If the beasts Intelligence is 4 or higher, the spell fails. Otherwise, the beast must succeed on a Wisdom saving throw or be charmed by you for the spells duration. If you or one of your companions harms the target, the spells ends. At Higher Levels. When you cast this spell using a spell slot of 2nd level or higher, you can affect one additional beast for each slot level above 1st.",
      "url": "https://www.dnd-spells.com/spell/animal-friendship"
    },
    "plane shift": {
      "castingTime": "1 Action",
      "duration": "Instantaneous",
      "range": "Touch",
      "components": "Verbal, Somatic, Material (a forked, metal rod worth at least 250 gold pieces, attuned to a particular plane of existence)",
      "slotLevel": "7",
      "school": "Conjuration",
      "shortDescription": "You and up to eight willing creatures who link hands in a circle are transported to a different plane of existence. You can specify a target destination in general terms.",
      "longDescription": "You and up to eight willing creatures who link hands in a circle are transported to a different plane of existence. You can specify a target destination in general terms, such as the City of Brass on the Elemental Plane of Fire or the palace of Dispater on the second level of the Nine Hells, and you appear in or near that destination. If you are trying to reach the City o f Brass, for example, you might arrive in its Street of Steel, before its Gate of Ashes, or looking at the city from across the Sea of Fire, at the D. M.s discretion. Alternatively, if you know the sigil sequence of a teleportation circle on another plane of existence, this spell can take you to that circle. If the teleportation circle is too small to hold all the creatures you transported, they appear in the closest unoccupied spaces next to the circle. You can use this spell to banish an unwilling creature to another plane. Choose a creature within your reach and make a melee spell attack against it. On a hit, the creature must make a Charisma saving throw. If the creature fails this save, it is transported to a random location on the plane of existence you specify. A creature so transported must find its own way back to your current plane of existence.",
      "url": "https://www.dnd-spells.com/spell/plane-shift"
    },
    "message": {
      "castingTime": "1 Action",
      "duration": "1 round",
      "range": "120 feet",
      "components": "Verbal, Somatic, Material (a short piece of copper wire)",
      "slotLevel": "cantrip",
      "school": "Transmutation",
      "shortDescription": "A target hears a message and can reply, only the two of you can hear the exchange.",
      "longDescription": "You point your finger toward a creature within range and whisper a message. The target (and only the target) hears the message and can reply in a whisper that only you can hear. You can cast this spell through solid objects if you are familiar with the target and know it is beyond the barrier. Magical silence. 1 foot of stone, 1 inch of common metal, a thin sheet of lead, or 3 feet of wood blocks the spell. The spell doesnt have to follow a straight line and can travel freely around corners or through openings.",
      "url": "https://www.dnd-spells.com/spell/message"
    },
    "zone of truth": {
      "castingTime": "1 Action",
      "duration": "10 minutes",
      "range": "60 feet",
      "components": "Verbal, Somatic",
      "slotLevel": "2",
      "school": "Enchantment",
      "shortDescription": "Create a magical zone that guards against deception in a 15-foot-radius sphere. A creature that enters the spells area for the first time on a turn or starts its turn there must make a Charisma saving throw. The creature cant lie on a fail. Affected creatures are aware of the spell and can be evasive.",
      "longDescription": "You create a magical zone that guards against deception in a 15-foot-radius sphere centered on a point of your choice within range. Until the spell ends, a creature that enters the spells area for the first time on a turn or starts its turn there must make a Charisma saving throw. On a failed save, a creature cant speak a deliberate lie while in the radius. You know whether each creature succeeds or fails on its saving throw. An affected creature is aware of the spell and can thus avoid answering questions to which it would normally respond with a lie. Such a creature can be evasive in its answers as long as it remains within the boundaries of the truth.",
      "url": "https://www.dnd-spells.com/spell/zone-of-truth"
    },
    "antipathy": {
      "castingTime": "1 Hour",
      "duration": "10 days",
      "range": "60 feet",
      "components": "Verbal, Somatic, Material (either a lump of alum soaked in vinegar for the antipathy effect or a drop of honey for the sympathy effect)",
      "slotLevel": "8",
      "school": "Enchantment",
      "shortDescription": "The enchantment causes creatures of the kind you designated to feel an intense urge to leave the area and avoid the target. When such a creature can see the target or comes within 60 feet of it, the creature must succeed on a Wisdom saving throw or become frightened. The creature remains frightened while it can see the target or is within 60 feet of it. While frightened by the target, the creature must use its movement to move to the nearest safe spot from which it cant see the target. See long description.",
      "longDescription": "The enchantment causes creatures of the kind you designated to feel an intense urge to leave the area and avoid the target. When such a creature can see the target or comes within 60 feet of it, the creature must succeed on a Wisdom saving throw or become frightened. The creature remains frightened while it can see the target or is within 60 feet of it. While frightened by the target, the creature must use its movement to move to the nearest safe spot from which it cant see the target. If the creature moves more than 60 feet from the target and cant see it, the creature is no longer frightened, but the creature becomes frightened again if it regains sight of the target or moves within 60 feet of it. Ending the Effect. If an affected creature ends its turn while not within 60 feet of the target or able to see it, the creature makes a Wisdom saving throw. On a successful save, the creature is no longer affected by the target and recognizes the feeling of repugnance or attraction as magical. In addition, a creature affected by the spell is allowed another Wisdom saving throw every 24 hours while the spell persists. A creature that successfully saves against this effect is immune to it for 1 minute, after which time it can be affected again.",
      "url": "https://www.dnd-spells.com/spell/antipathysympathy"
    },
    "sympathy": {
      "castingTime": "1 Hour",
      "duration": "10 days",
      "range": "60 feet",
      "components": "Verbal, Somatic, Material (either a lump of alum soaked in vinegar for the antipathy effect or a drop of honey for the sympathy effect)",
      "slotLevel": "8",
      "school": "Enchantment",
      "shortDescription": "The enchantment causes the specified creatures to feel an intense urge to approach the target while within 60 feet of it or able to see it. When such a creature can see the target or com es within 60 feet of it, the creature must succeed on a wisdom saving throw or use its movement on each of its turns to enter the area or move within reach of the target. When the creature has done so, it cant willingly move away from the target. See long description",
      "longDescription": "This spell attracts creatures of your choice. You target something within range, either a Huge or smaller object or creature or an area that is no larger than a 200-foot cube. Then specify a kind of intelligent creature, such as red dragons, goblins, or vampires. You invest the target with an aura that attracts the specified creatures for the duration. The enchantment causes the specified creatures to feel an intense urge to approach the target while within 60 feet of it or able to see it. When such a creature can see the target or com es within 60 feet of it, the creature must succeed on a wisdom saving throw or use its movement on each of its turns to enter the area or move within reach of the target. When the creature has done so, it cant willingly move away from the target. If the target damages or otherwise harms an affected creature, the affected creature can make a Wisdom saving throw to end the effect, as described below.Ending the Effect. If an affected creature ends its turn while not within 60 feet of the target or able to see it, the creature makes a Wisdom saving throw. On a successful save, the creature is no longer affected by the target and recognizes the feeling of repugnance or attraction as magical. In addition, a creature affected by the spell is allowed another Wisdom saving throw every 24 hours while the spell persists. A creature that successfully saves against this effect is immune to it for 1 minute, after which time it can be affected again.",
      "url": "https://www.dnd-spells.com/spell/antipathysympathy"
    },
    "stoneskin": {
      "castingTime": "1 Action",
      "duration": "Concentration, up to 1 hour",
      "range": "Touch",
      "components": "Verbal, Somatic, Material (diamond dust worth 100 gold pieces, which the spell consumes)",
      "slotLevel": "4",
      "school": "Abjuration",
      "shortDescription": "The target has resistance to nonmagical bludgeoning, piercing, and slashing damage.",
      "longDescription": "This spell turns the flesh of a willing creature you touch as hard as stone. Until the spell ends, the target has resistance to nonmagical bludgeoning, piercing, and slashing damage.",
      "url": "https://www.dnd-spells.com/spell/stoneskin"
    },
    "conjure barrage": {
      "castingTime": "1 Action",
      "duration": "Instantaneous",
      "range": "Self (60-foot cone)",
      "components": "Verbal, Somatic, Material  (one piece of ammunition or a thrown weapon)",
      "slotLevel": "3",
      "school": "Conjuration",
      "shortDescription": "Throw a nonmagical weapon or fire a piece of nonmagical ammunition into the air to create a cone of identical weapons that shoot forward and then disappear. Each creature in a 60 foot cone takes 3d8 damage on a failed Dexterity save, half as much on a success.",
      "longDescription": "You throw a nonmagical weapon or fire a piece of nonmagical ammunition into the air to create a cone of identical weapons that shoot forward and then disappear. Each creature in a 60-foot cone must succeed on a Dexterity saving throw. A creature takes 3d8 damage on a failed save, or half as much damage on a successful one. The damage type is the same as that of the weapon or ammunition used as a component.",
      "url": "https://www.dnd-spells.com/spell/conjure-barrage"
    },
    "earth tremor": {
      "castingTime": "1 Action",
      "duration": "Instantaneous",
      "range": "Self (10-foot radius)",
      "components": "Verbal, Somatic",
      "slotLevel": "1",
      "school": "Evocation",
      "shortDescription": "Each creature within 10 feet takes 1d6 bludgeoning damage  and is knocked prone on a failed Dexterity save. Loose earth or stone becomes difficult terrain.",
      "longDescription": "You cause a tremor in the ground in a 10-foot radius. Each creature other than you in that area must make a Dexterity saving throw. On a failed save, a creature takes 1d6 bludgeoning damage and is knocked prone. If the ground in that area is loose earth or stone, it becomes difficult terrain until cleared. At Higher Levels. When you cast this spell using a spell slot of 2nd level or higher, the damage increases by 1d6 for each slot level above 1st.",
      "url": "https://www.dnd-spells.com/spell/earth-tremor",
      "damage": {
        "type": "bludgeoning damage",
        "levels": {
          1: "1d6",
          2: "2d6",
          3: "3d6",
          4: "4d6",
          5: "5d6",
          6: "6d6",
          7: "7d6",
          8: "8d6",
          9: "9d6"
        }
      }
    },
    "thaumaturgy": {
      "castingTime": "1 Action",
      "duration": "Up to 1 minute",
      "range": "30 feet",
      "components": "Verbal",
      "slotLevel": "cantrip",
      "school": "Transmutation",
      "shortDescription": "Manifest a sign of supernatural power that has one of the following six effects: 1) Your voice becomes three times as loud, 2) alter flame brightness or color, 3) harmless ground tremors, 4) throw a created sound, 5) open or slam an unlocked door or window, 6) alter the appearance of your eyes",
      "longDescription": "You manifest a minor wonder, a sign of supernatural power, within range. You create one of the 6 following magical effects within range: 1) Your voice booms up to three times as loud as normal for 1 minute. 2) You cause flames to flicker, brighten, dim, or change color for 1 minute. 3) You cause harmless tremors in the ground for 1 minute. 4) You create an instantaneous sound that originates from a point of your choice within range, such as a rumble of thunder, the cry of a raven, or ominous whispers. 5) You instantaneously cause an unlocked door or window to fly open or slam shut. 6) You alter the appearance of your eyes for 1 minute. If you cast this spell multiple times, you can have up to three of its 1-minute effects active at a time, and you can dismiss such an effect as an action.",
      "url": "https://www.dnd-spells.com/spell/thaumaturgy"
    },
    "holy aura": {
      "castingTime": "1 Action",
      "duration": "Concentration, up to 1 minute",
      "range": "Self",
      "components": "Verbal, Somatic, Material (a tiny reliquary worth at least 1,000 gold pieces containing a sacred relic, such as a scrap of cloth from a saints robe or a piece of parchment from a religious text)",
      "slotLevel": "8",
      "school": "Abjuration",
      "shortDescription": "Creatures of your choice within 30 feet of you shed dim light for 5 feet and have advantage on all saves. Creatures who attack them have disadvantage on attack rolls. Fiends or undead must make a Constitution save on hit or become blinded.",
      "longDescription": "Divine light washes out from you and coalesces in a soft radiance in a 30-foot radius around you. Creatures of your choice in that radius when you cast this spell shed dim light in a 5-foot radius and have advantage on all saving throws, and other creatures have disadvantage on attack rolls against them until the spell ends. In addition, when a fiend or an undead hits an affected creature with a melee attack, the aura flashes with brilliant light. The attacker must succeed on a Constitution saving throw or be blinded until the spell ends.",
      "url": "https://www.dnd-spells.com/spell/holy-aura"
    },
    "arcane eye": {
      "castingTime": "1 Action",
      "duration": "Concentration, up to 1 hour",
      "range": "30 feet",
      "components": "Verbal, Somatic, Material (a bit of bat fur)",
      "slotLevel": "4",
      "school": "Divination",
      "shortDescription": "You create an invisible, magical eye within range that hovers in the air for the duration. You mentally receive visual information from the eye, which has normal vision and darkvision out to 30 feet. Move the eye up to 30 feet as an action.",
      "longDescription": "You create an invisible, magical eye within range that hovers in the air for the duration. You mentally receive visual information from the eye, which has normal vision and darkvision out to 30 feet. The eye can look in every direction. As an action, you can move the eye up to 30 feet in any direction. There is no limit to how far away from you the eye can move, but it cant enter another plane of existence. A solid barrier blocks the eyes movement, but the eye can pass through an opening as small as 1 inch in diameter.",
      "url": "https://www.dnd-spells.com/spell/arcane-eye"
    },
    "find familiar": {
      "castingTime": "1 Hour",
      "duration": "Instantaneous",
      "range": "10 feet",
      "components": "Verbal, Somatic, Material (10 gold pieces worth of charcoal, incense, and herbs that must be consumed by fire in a brass brazier)",
      "slotLevel": "1",
      "school": "Conjuration Ritual",
      "shortDescription": "You gain the service of a spirit that takes an animal form. It has the statistics of the chosen form but is a celestial, fey, or fiend. It acts independently of you, and has its own rolls and turns, but always obeys you. It cant attack but can take other actions. You communicate with it telepathically, and as an action you can see and hear through it.",
      "longDescription": "You gain the service of a familiar, a spirit that takes an animal form you choose: bat, cat, crab, frog (toad), hawk, lizard, octopus, owl, poisonous snake, fish (quipper), rat, raven, sea horse, spider, or weasel. Appearing in an unoccupied space within range, the familiar has the statistics of the chosen form, though it is a celestial, fey, or fiend (your choice) instead of a beast. Your familiar acts independently of you, but it always obeys your commands. In combat, it rolls its own initiative and acts on its own turn. A familiar cant attack, but it can take other actions as normal. When the familiar drops to 0 hit points, it disappears, leaving behind no physical form. It reappears after you cast this spell again While your familiar is within 100 feet of you, you can communicate with it telepathically. Additionally, as an action, you can see through your familiars eyes and hear what it hears until the start of your next turn, gaining the benefits of any special senses that the familiar has. During this time, you are deaf and blind with regard to your own senses. As an action, you can temporarily dismiss your familiar. It disappears into a pocket dimension where it awaits your summons. Alternatively, you can dismiss it forever. As an action while it is temporarily dismissed, you can cause it to reappear in any unoccupied space within 30 feet of you. You cant have more than one familiar at a time. If you cast this spell while you already have a familiar, you instead cause it to adopt a new form. Choose one of the forms from the above list. Your familiar transforms into the chosen creature. Finally, when you cast a spell with a range of touch, your familiar can deliver the spell as if it had cast the spell. Your familiar must be within 100 feet of you, and it must use its reaction to deliver the spell when you cast it. If the spell requires an attack roll, you use your attack modifier for the roll.",
      "url": "https://www.dnd-spells.com/spell/find-familiar-ritual"
    },
    "wall of ice": {
      "castingTime": "1 Action",
      "duration": "Concentration, up to 10 minutes",
      "range": "120 feet",
      "components": "Verbal, Somatic, Material (a small piece of quartz)",
      "slotLevel": "6",
      "school": "Evocation",
      "shortDescription": "Requires concentration. Create a wall of ice on a solid surface within 120 feet. It can be a flat wall, a dome, or a sphere, and is one foot thick. Creatures in the same space as where the wall was created are pushed aside, and take 10d6 cold damage on a failed Dexterity save, or half as much on a success. The wall has AC 12 and 30 health per 10 foot section, and is vulnerable to fire. When a section is destroyed it leaves behind a veil of air that creatures enterng for the first time must make a Constitution save or take 5d6 cold damage, half as much on a success.",
      "longDescription": "You create a wall of ice on a solid surface within range. You can form it into a hemispherical dome or a sphere with a radius of up to 10 feet, or you can shape a flat surface made up of ten 10-foot-square panels. Each panel must be contiguous with another panel. In any form, the wall is 1 foot thick and lasts for the duration. If the wall cuts through a creatures space when it appears, the creature within its area is pushed to one side of the wall and must make a Dexterity saving throw. On a failed save, the creature takes 10d6 cold damage, or half as much damage on a successful save. The wall is an object that can be damaged and thus breached. It has AC 12 and 30 hit points per 10-foot section, and it is vulnerable to fire damage. Reducing a 10-foot section of wall to 0 hit points destroys it and leaves behind a sheet of frigid air in the space the wall occupied. A creature moving through the sheet of frigid air for the first time on a turn must make a Constitution saving throw. That creature takes 5d6 cold damage on a failed save, or half as much damage on a successful one. AtHigherLevels. When you cast this spell using a spell slot of 7th level or higher, the damage the wall deals when it appears increases by 2d6, and the damage from passing through the sheet of frigid air increases by 1d6, for each slot level above 6th.",
      "url": "https://www.dnd-spells.com/spell/wall-of-ice",
      "damage": {
        "type": "cold damage",
        "levels": {
          1: 0,
          2: 0,
          3: 0,
          4: 0,
          5: 0,
          6: "10d6",
          7: "11d6",
          8: "12d6",
          9: "13d6"
        }
      }
    },
    "animal messenger": {
      "castingTime": "1 Action",
      "duration": "24 hours",
      "range": "30 feet",
      "components": "Verbal, Somatic, Material (a morsel of food)",
      "slotLevel": "2",
      "school": "Enchantment Ritual",
      "shortDescription": "Use an animal to deliver a message up to 25 words to a person you can describe in a place you have visited. Flying animals can go 50 miles, land animals can go 25 miles.",
      "longDescription": "By means of this spell, you use an animal to deliver a message. Choose a Tiny beast you can see within range, such as a squirrel, a blue jay, or a bat. You specify a location, which you must have visited, and a recipient who matches a general description, such as a man or woman dressed in the uniform of the town guard or a red-haired dwarf wearing a pointed hat. You also speak a message of up to twenty-five words. The target beast travels for the duration of the spell toward the specified location, covering about 50 miles per 24 hours for a flying messenger, or 25 miles for other animals. When the messenger arrives, it delivers your message to the creature that you described, replicating the sound of your voice. The messenger speaks only to a creature matching the description you gave. If the messenger doesnt reach its destination before the spell ends, the message is lost, and the beast makes its way back to where you cast this spell. At Higher Levels: If you cast this spell using a spell slot of 3nd level or higher, the duration of the spell increases by 48 hours for each slot level above 2nd.",
      "url": "https://www.dnd-spells.com/spell/animal-messenger-ritual"
    },
    "circle of power": {
      "castingTime": "1 Action",
      "duration": "Concentration, up to 10 minutes",
      "range": "Self (30-foot radius)",
      "components": "Verbal",
      "slotLevel": "5",
      "school": "Abjuration",
      "shortDescription": "Each friendly creature within 30 feet of you has advantage on saving throws against spells and other magical effects. Saves that would result in half damage instead take no damage.",
      "longDescription": "Divine energy radiates from you, distorting and diffusing magical energy within 30 feet of you. Until the spell ends, the sphere moves with you, centered on you. For the duration, each friendly creature in the area (including you) has advantage on saving throws against spells and other magical effects. Additionally, when an affected creature succeeds on a saving throw made against a spell or magical effect that allows it to make a saving throw to take only half damage, it instead takes no damage if it succeeds on the saving throw.",
      "url": "https://www.dnd-spells.com/spell/circle-of-power"
    },
    "ray of sickness": {
      "castingTime": "1 Action",
      "duration": "Instantaneous",
      "range": "60 feet",
      "components": "Verbal, Somatic",
      "slotLevel": "1",
      "school": "Necromancy",
      "shortDescription": "Make a ranged spell attack. THe target takes 2d8 poison damage, and if it fails a Constitution save is also poisoned until the end of your next turn",
      "longDescription": "A ray of sickening greenish energy lashes out toward a creature within range. Make a ranged spell attack against the target. On a hit, the target takes 2d8 poison damage and must make a Constitution saving throw. On a failed save, it is also poisoned until the end of your next turn. At Higher Levels: When you cast this spell using a spell slot of 2nd level or higher, the damage increases by 1d8 for each slot level above 1st.",
      "url": "https://www.dnd-spells.com/spell/ray-of-sickness",
      "damage": {
        "type": "poison damage",
        "levels": {
          1: "2d8",
          2: "3d8",
          3: "4d8",
          4: "5d8",
          5: "6d8",
          6: "7d8",
          7: "8d8",
          8: "9d8",
          9: "10d8"
        }
      }
    },
    "acid splash": {
      "castingTime": "1 Action",
      "duration": "Instantaneous",
      "range": "60 feet",
      "components": "Verbal, Somatic",
      "slotLevel": "cantrip",
      "school": "Conjuration",
      "shortDescription": "Up to two creatures within 5 feet of each other must succeed a Dexterity save or take 1d6 acid damage.",
      "longDescription": "You hurl a bubble of acid. Choose one creature within range, or choose two creatures within range that are within 5 feet of each other. A target must succeed on a Dexterity saving throw or take 1d6 acid damage. This spells damage increases by 1d6 when you reach 5th level (2d6), 11th level (3d6), and 17th level (4d6).",
      "url": "https://www.dnd-spells.com/spell/acid-splash",
      "damage": {
        "type": "acid damage",
        "playerLevel": {
          1: "1d6",
          2: "1d6",
          3: "1d6",
          4: "1d6",
          5: "2d6",
          6: "2d6",
          7: "2d6",
          8: "2d6",
          9: "2d6",
          10: "2d6",
          11: "3d6",
          12: "3d6",
          13: "3d6",
          14: "3d6",
          15: "3d6",
          16: "3d6",
          17: "4d6",
          18: "4d6",
          19: "4d6",
          20: "4d6"
        }
      }
    },
    "longstrider": {
      "castingTime": "1 Action",
      "duration": "1 hour",
      "range": "Touch",
      "components": "Verbal, Somatic, Material (a pinch of dirt)",
      "slotLevel": "1",
      "school": "Transmutation",
      "shortDescription": "targets speed increases by 10 feet",
      "longDescription": "You touch a creature. The targets speed increases by 10 feet until the spell ends. At Higher Levels: When you cast this spell using a spell slot of 2nd level or higher, you can target one additional creature for each slot level above 1st.",
      "url": "https://www.dnd-spells.com/spell/longstrider"
    },
    "invisibility": {
      "castingTime": "1 Action",
      "duration": "Concentration, up to 1 hour",
      "range": "Touch",
      "components": "Verbal, Somatic, Material (an eyelash encased in gum arabic)",
      "slotLevel": "2",
      "school": "Illusion",
      "shortDescription": "A creature you touch becomes invisible until the spell ends. The spell ends for a target that attacks or casts a spell. ",
      "longDescription": "A creature you touch becomes invisible until the spell ends. Anything the target is wearing or carrying is invisible as long as it is on the targets person. The spell ends for a target that attacks or casts a spell. At Higher Levels: When you cast this spell using a spell slot of 3rd level or higher, you can target one additional creature for each slot level above 2nd.",
      "url": "https://www.dnd-spells.com/spell/invisibility"
    },
    "catapult": {
      "castingTime": "1 Action",
      "duration": "Instantaneous",
      "range": "150 feet",
      "components": "Somatic",
      "slotLevel": "1",
      "school": "Transmutation",
      "shortDescription": "Launch one object weighing 1 to 5 pounds within 150 feet that isnt being worn or carried up to 90 feet in a straight line. Struck objects or creatures that faile a Dexterity save take 3d8 bludgeoning damage.",
      "longDescription": "Choose one object weighing 1 to 5 pounds within range that isnt being worn or carried. The object flies in a straight line up to 90 feet in a direction you choose before falling to the ground, stopping early if it impacts against a solid surface. If the object would strike a creature, that creature must make a Dexterity saving throw. On a failed save, the object strikes the target and stops moving. In either case, both the object and the creature or solid surface take 3d8 bludgeoning damage. At Higher Levels. When you cast this spell using a spell slot of 2nd level or higher, the maximum weight of objects that you can target with this spell increases by 5 pounds, and the damage increases by 1d8, for each slot level above 1st.",
      "url": "https://www.dnd-spells.com/spell/catapult",
      "damage": {
        "type": "bludgeoning damage",
        "levels": {
          1: "3d8",
          2: "4d8",
          3: "5d8",
          4: "6d8",
          5: "7d8",
          6: "8d8",
          7: "9d8",
          8: "10d8",
          9: "11d8"
        }
      }
    },
    "imprisonment": {
      "castingTime": "1 Minute",
      "duration": "Until dispelled",
      "range": "30 feet",
      "components": "Verbal, Somatic, Material (a vellum depiction or a carved statuette in the likeness of the target, and a special component that varies according to the version of the spell you choose, worth at least 500 gold pieces per Hit Die of the target)",
      "slotLevel": "9",
      "school": "Abjuration",
      "shortDescription": "Create a magical restraint to hold a creature that you can see within 30ft. The creature becomes restrained on failed wisdom save, and is immune to future castings of this spell on a success. While affected by this spell, the creature doesnt need to breathe, eat, or drink, and it doesnt age. Divination spells cant locate or perceive the target. When you cast the spell, you choose one of the 5 following forms of imprisonment: burial, chaining, hedged prison, minimus containment, or slumber. See long description for specific effects. You decide the conditons that end the spell when you cast it.",
      "longDescription": "You create a magical restraint to hold a creature that you can see within range. The target must succeed on a wisdom saving throw or be bound by the spell; if it succeeds, it is immune to this spell if you cast it again. While affected by this spell, the creature doesnt need to breathe, eat, or drink, and it doesnt age. Divination spells cant locate or perceive the target. When you cast the spell, you choose one of the 5 following forms of imprisonment. 1) Burial. The target is entombed far beneath the earth in a sphere of magical force that is just large enough to contain the target. Nothing can pass through the sphere, nor can any creature teleport or use planar travel to get into or out of it. The special component for this version of the spell is a small mithral orb. 2) Chaining. Heavy chains, firmly rooted in the ground, hold the target in place. The target is restrained until the spell ends, and it cant move or be moved by any means until then. The special component for this version of the spell is a fine chain of precious metal. 3) Hedged Prison. The spell transports the target into a tiny demiplane that is warded against teleportation and planar travel. The demiplane can be a labyrinth, a cage, a tower, or any similar confined structure or area of your choice. The special component for this version of the spell is a miniature representation of the prison made from jade. 4) Minimus Containment. The target shrinks to a height of 1 inch and is imprisoned inside a gemstone or similar object. Light can pass through the gemstone normally (allowing the target to see out and other creatures to see in), but nothing else can pass through, even by means of teleportation or planar travel. The gemstone cant be cut or broken while the spell remains in effect. The special component for this version of the spell is a large, transparent gemstone, such as a corundum, diamond, or ruby. 5) Slumber. The target falls asleep and cant be awoken. The special component for this version of the spell consists of rare soporific herbs. Ending the Spell. During the casting of the spell, in any of its versions, you can specify a condition that will cause the spell to end and release the target. The condition can be as specific or as elaborate as you choose, but the D. M. must agree that the condition is reasonable and has a likelihood of coming to pass. The conditions can be based on a creatures name, identity, or deity but otherwise must be based on observable actions or qualities and not based on intangibles such as level, class, or hit points. A dispel magic spell can end the spell only if it is cast as a 9th-level spell, targeting either the prison or the special component used to create it. You can use a particular special component to create only one prison at a time. If you cast the spell again using the same component, the target of the first casting is immediately freed from its binding.",
      "url": "https://www.dnd-spells.com/spell/imprisonment"
    },
    "geas": {
      "castingTime": "1 Minute",
      "duration": "30 days",
      "range": "60 feet",
      "components": "Verbal",
      "slotLevel": "5",
      "school": "Enchantment",
      "shortDescription": "Force a creature in within 60ft to take carry out or refrain from doing an activity of your choice except actions that would result in death. if the creature understands you, it must make a wisdom save or becomes charmed. While the creature is charmed, it takes 5d10 psychic damage once a day if it doesnt do what you want",
      "longDescription": "You place a magical command on a creature that you can see within range, forcing it to carry out some service  or refrain from some action or course of activity as you decide. If the creature can understand you, it must succeed on a Wisdom saving throw or become charmed by you for the duration. While the creature is charmed by you, it takes 5d10 psychic damage each time it acts in a manner directly counter to your instructions, but no more than once each day. A creature that cant understand you is unaffected by the spell. You can issue any command you choose, short of an activity that would result in certain death. Should you issue a suicidal command, the spell ends. You can end the spell early by using an action to dismiss it. A remove curse, greater restoration, or wish spell also ends it. At Higher Levels: When you cast this spell using a spell slot of 7th or 8th level, the duration is 1 year. When you cast this spell using a spell slot of 9th level, the spell lasts until it is ended by one of the spells mentioned above.",
      "url": "https://www.dnd-spells.com/spell/geas",
      "damage": {
        "type": "psychic damage",
        "levels": {
          1: 0,
          2: 0,
          3: 0,
          4: 0,
          5: "5d10",
          6: "5d10",
          7: "5d10",
          8: "5d10",
          9: "5d10"
        }
      }
    },
    "lightning arrow": {
      "castingTime": "1 Bonus Action",
      "duration": "Concentration, up to 1 minute",
      "range": "Self",
      "components": "Verbal, Somatic",
      "slotLevel": "3",
      "school": "Transmutation",
      "shortDescription": "Your ammo or thrown weapon turn into a bolt of lightning. The target takes 4d8 lightning on a hit, half damage on a miss. Each creature within 10ft of the target takes 2d8 lightning on a failed Dexterity save, half as much on a success.",
      "longDescription": "The next time you make a ranged weapon attack during the spells duration, the weapons ammunition, or the weapon itself if its a thrown weapon, transforms into a bolt of lightning. Make the attack roll as normal. The target takes 4d8 lightning damage on a hit, or half as much damage on a miss, instead of the weapons normal damage. Whether you hit or miss, each creature within 10 feet of the target must make a Dexterity saving throw. Each of these creatures takes 2d8 lightning damage on a failed save, or half as much damage on a successful one. The piece of ammunition or weapon then returns to its normal form. At Higher Levels: When you cast this spell using a spell slot of 4th level or higher, the damage for both effects of the spell increases by 1d8 for each slot level above 3rd.",
      "url": "https://www.dnd-spells.com/spell/lightning-arrow",
      "damage": {
        "type": "lightning damage",
        "levels": {
          1: 0,
          2: 0,
          3: "4d8",
          4: "5d8",
          5: "6d8",
          6: "7d8",
          7: "8d8",
          8: "9d8",
          9: "10d8"
        }
      }
    },
    "magic stone": {
      "castingTime": "1 Bonus Action",
      "duration": "1 minute",
      "range": "Touch",
      "components": "Verbal, Somatic",
      "slotLevel": "cantrip",
      "school": "Transmutation",
      "shortDescription": "Up to three pebbles can be thrown up to 60 feet, add your spellcasting ability modifier to the attack roll, and do 1d6 + your spellcasting ability modifier damage.",
      "longDescription": "You touch one to three pebbles and imbue them with magic. You or someone else can make a ranged spell attack with one of the pebbles by throwing it or hurling it with a sling. If thrown, it has a range of 60 feet. If someone else attacks with the pebble, that attacker adds your spellcasting ability modifier, not the attackers, to the attack roll. On a hit, the target takes bludgeoning damage equal to 1d6 + your spellcasting ability modifier. Hit or miss, the spell then ends on the stone. If you cast this spell again, the spell ends early on any pebbles still affected by it.",
      "url": "https://www.dnd-spells.com/spell/magic-stone"
    },
    "heal": {
      "castingTime": "1 Action",
      "duration": "Instantaneous",
      "range": "60 feet",
      "components": "Verbal, Somatic",
      "slotLevel": "6",
      "school": "Evocation",
      "shortDescription": "Ends blindness, deafness, and any diseases affecting the target, end restores 70 health.",
      "longDescription": "Choose a creature that you can see within range. A surge of positive energy washes through the creature, causing it to regain 70 hit points. This spell also ends blindness, deafness, and any diseases affecting the target. This spell has no effect on constructs or undead. At Higher Levels: When you cast this spell using a spell slot of 7th level or higher, the amount of healing increases by 10 for each slot level above 6th.",
      "url": "https://www.dnd-spells.com/spell/heal",
      "healing": {
        "levels": {
          1: 0,
          2: 0,
          3: 0,
          4: 0,
          5: 0,
          6: "70",
          7: "80",
          8: "90",
          9: "100"
        }
      }
    },
    "compelled duel": {
      "castingTime": "1 Bonus Action",
      "duration": "Concentration, up to 1 minute",
      "range": "30 feet",
      "components": "Verbal",
      "slotLevel": "1",
      "school": "Enchantment",
      "shortDescription": "On a failed wisdom save, a target is compelled to duel you. it has disadvantage on attack rolls against creatures other than you, and must make a Wisdom saving throw each time it attempts to move to a space that is more than 30 feet away from you. Spell ends if you attack another creature, or a friendly creature damages it.",
      "longDescription": "You attempt to compel a creature into a duel. One creature that you can see within range must make a Wisdom saving throw. On a failed save, the creature is drawn to you, compelled by your divine demand. For the duration, it has disadvantage on attack rolls against creatures other than you, and must make a Wisdom saving throw each time it attempts to move to a space that is more than 30 feet away from you; if it succeeds on this saving throw, this spell doesnt restrict the targets movement for that turn. The spell ends if you attack any other creature, if you cast a spell that targets a hostile creature other than the target, if a creature friendly to you damages the target or casts a harmful spell on it, or if you end your turn more than 30 feet away from the target.",
      "url": "https://www.dnd-spells.com/spell/compelled-duel"
    },
    "death ward": {
      "castingTime": "1 Action",
      "duration": "8 hours",
      "range": "Touch",
      "components": "Verbal, Somatic",
      "slotLevel": "4",
      "school": "Abjuration",
      "shortDescription": "Targets drop to 1 health instead of zero and are protected from instant kill effects.",
      "longDescription": "You touch a creature and grant it a measure of protection from death. The first time the target would drop to 0 hit points as a result of taking damage, the target instead drops to 1 hit point, and the spell ends. If the spell is still in effect when the target is subjected to an effect that would kill it instantaneously without dealing damage, that effect is instead negated against the target, and the spell ends.",
      "url": "https://www.dnd-spells.com/spell/death-ward"
    },
    "aganazzars scorcher": {
      "castingTime": "1 Action",
      "duration": "Instantaneous",
      "range": "30 feet",
      "components": "Verbal, Somatic, Material (a red dragons scale)",
      "slotLevel": "2",
      "school": "Evocation",
      "shortDescription": "A line of flame 30 ft long and 5ft wide emanates from you. Each creature in the line must make a Dexterity save, taking 3d8 fire damage on a fail and half as much on a success.",
      "longDescription": "A line of roaring flame 30 feet long and 5 feet wide emanates from you in a direction you choose. Each creature in the line must make a Dexterity saving throw. A creature takes 3d8 fire damage on a failed save, or half as much damage on a successful one. At higher levels: When you cast this spell using a spell slot of 3rd level or higher, the damage increases by 1d8 for each slot level above 2nd.",
      "url": "https://www.dnd-spells.com/spell/aganazzars-scorcher",
      "damage": {
        "type": "fire damage",
        "levels": {
          1: 0,
          2: "3d8",
          3: "4d8",
          4: "5d8",
          5: "6d8",
          6: "7d8",
          7: "8d8",
          8: "9d8",
          9: "10d8"
        }
      }
    },
    "see invisibility": {
      "castingTime": "1 Action",
      "duration": "1 hour",
      "range": "Self",
      "components": "Verbal, Somatic, Material (a pinch of talc and a small sprinkling of powdered silver)",
      "slotLevel": "2",
      "school": "Divination",
      "shortDescription": "You can see invisible creatures and objects, as well as into the ethereal plane",
      "longDescription": "For the duration, you see invisible creatures and objects as if they were visible, and you can see into the Ethereal Plane. Ethereal creatures and objects appear ghostly and translucent.",
      "url": "https://www.dnd-spells.com/spell/see-invisibility"
    },
    "maze": {
      "castingTime": "1 Action",
      "duration": "Concentration, up to 10 minutes",
      "range": "60 feet",
      "components": "Verbal, Somatic",
      "slotLevel": "8",
      "school": "Conjuration",
      "shortDescription": "You banish a creature that you can see within range into a labyrinthine demiplane. The target remains there for the duration or until it escapes the maze. Spell ends on a DC 20 Intelligence check.",
      "longDescription": "You banish a creature that you can see within range into a labyrinthine demiplane. The target remains there for the duration or until it escapes the maze. The target can use its action to attempt to escape. When it does so, it makes a DC 20 Intelligence check. If it succeeds, it escapes, and the spell ends (a minotaur or goristro demon automatically succeeds). When the spell ends, the target reappears in the space it left or, if that space is occupied, in the nearest unoccupied space.",
      "url": "https://www.dnd-spells.com/spell/maze"
    },
    "illusory script": {
      "castingTime": "1 Minute",
      "duration": "10 days",
      "range": "Touch",
      "components": "Somatic, Material (a lead-based ink worth at least 10 gold pieces, which the spell consumes)",
      "slotLevel": "1",
      "school": "Illusion Ritual",
      "shortDescription": "To you and any creatures you designate when you cast the spell, the writing appears normal, written in your hand, and conveys whatever meaning you intended when you wrote the text. To all others, the writing appears as if it were written in an unknown or magical script that is unintelligible, or writing that means something entirely different. A creature with truesight can read the hidden message.",
      "longDescription": "You write on parchment, paper, or some other suitable writing material and imbue it with a potent illusion that lasts for the duration. To you and any creatures you designate when you cast the spell, the writing appears normal, written in your hand, and conveys whatever meaning you intended when you wrote the text. To all others, the writing appears as if it were written in an unknown or magical script that is unintelligible. Alternatively, you can cause the writing to appear to be an entirely different message, written in a different hand and language, though the language must be one you know. Should the spell be dispelled, the original script and the illusion both disappear. A creature with truesight can read the hidden message.",
      "url": "https://www.dnd-spells.com/spell/illusory-script-ritual"
    },
    "planar ally": {
      "castingTime": "10 Minutes",
      "duration": "Instantaneous",
      "range": "60 feet",
      "components": "Verbal, Somatic",
      "slotLevel": "6",
      "school": "Conjuration",
      "shortDescription": "You beseech an otherworldly entity for aid. The being must be known to you: a god, a primordial, a demon prince, or some other being of cosmic power, which appears in an unoccupied space in range. The being is under no obligation to help you, and must be paid for services. See long description.",
      "longDescription": "You beseech an otherworldly entity for aid. The being must be known to you: a god, a primordial, a demon prince, or some other being of cosmic power. That entity sends a celestial, an elemental, or a fiend loyal to it to aid you, making the creature appear in an unoccupied space within range. If you know a specific creatures name, you can speak that name when you cast this spell to request that creature, though you might get a different creature anyway (D. M.s choice). When the creature appears, it is under no compulsion to behave in any particular way. You can ask the creature to perform a service in exchange for payment, but it isnt obliged to do so. The requested task could range from simple (fly us across the chasm, or help us fight a battle) to complex (spy on our enemies, or protect us during our foray into the dungeon). You must be able to communicate with the creature to bargain for its services. Payment can take a variety of forms. A celestial might require a sizable donation of gold or magic items to an allied temple, while a fiend might demand a living sacrifice or a gift of treasure. Some creatures might exchange their service for a quest undertaken by you. As a rule of thumb, a task that can be measured in minutes requires a payment worth 100 gold pieces per minute. A task measured in hours requires 1,000 gold pieces per hour. And a task measured in days (up to 10 days) requires 10,000 gold pieces per day. The D. M. can adjust these payments based on the circumstances under which you cast the spell. If the task is aligned with the creatures ethos, the payment might be halved or even waived. Nonhazardous tasks typically require only half the suggested payment, while especially dangerous tasks might require a greater gift. Creatures rarely accept tasks that seem suicidal. After the creature completes the task, or when the agreed-upon duration of service expires, the creature returns to its home plane after reporting back to you, if appropriate to the task and if possible. If you are unable to agree on a price for the creatures service, the creature immediately returns to its home plane. A creature enlisted to join your group counts as a member of it, receiving a full share of experience points awarded.",
      "url": "https://www.dnd-spells.com/spell/planar-ally"
    },
    "lightning lure": {
      "castingTime": "1 Action",
      "duration": "Instantaneous",
      "range": "15 feet",
      "components": "Verbal",
      "slotLevel": "cantrip",
      "school": "Evocation",
      "shortDescription": "One target must succeed on a Strength saving throw or be pulled up to 10 feet in a straight line toward you and then take 1d8 lightning damage if it is within 5 feet of you. ",
      "longDescription": "You create a lash of lightning energy that strikes at one creature of your choice that you can see within range. The target must succeed on a Strength saving throw or be pulled up to 10 feet in a straight line toward you and then take 1d8 lightning damage if it is within 5 feet of you. At higher levels: This spells damage increases by 1d8 when you reach 5th level (2d8), 11th level (3d8), and 17th level (4d8).",
      "url": "https://www.dnd-spells.com/spell/lightning-lure",
      "damage": {
        "type": "lightning damage",
        "playerLevel": {
          1: "1d8",
          2: "1d8",
          3: "1d8",
          4: "1d8",
          5: "2d8",
          6: "2d8",
          7: "2d8",
          8: "2d8",
          9: "2d8",
          10: "2d8",
          11: "3d8",
          12: "3d8",
          13: "3d8",
          14: "3d8",
          15: "3d8",
          16: "3d8",
          17: "4d8",
          18: "4d8",
          19: "4d8",
          20: "4d8"
        }
      }
    },
    "true seeing": {
      "castingTime": "1 Action",
      "duration": "1 hour",
      "range": "Touch",
      "components": "Verbal, Somatic, Material (an ointment for the eyes that costs 25 gold pieces; is made from mushroom powder, saffron, and fat; and is consumed by the spell)",
      "slotLevel": "6",
      "school": "Divination",
      "shortDescription": "The creature has truesight, notices secret doors hidden by magic, and can see into the Ethereal Plane",
      "longDescription": "This spell gives the willing creature you touch the ability to see things as they actually are. For the duration, the creature has truesight, notices secret doors hidden by magic, and can see into the Ethereal Plane, all out to a range of 120 feet.",
      "url": "https://www.dnd-spells.com/spell/true-seeing"
    },
    "clairvoyance": {
      "castingTime": "10 Minutes",
      "duration": "Concentration, up to 10 minutes",
      "range": "1 mile",
      "components": "Verbal, Somatic, Material  (a focus worth at least 100 gold pieces, either a jeweled horn for hearing or a glass eye for seeing",
      "slotLevel": "3",
      "school": "Divination",
      "shortDescription": "ou create an invisible sensor within range in a location familiar to you or in an obvious location that is unfamiliar to you. The sensor cant be attacked or interacted with. As your action, you can switch between seeing and hearing as if you were in the space.",
      "longDescription": "You create an invisible sensor within range in a location familiar to you (a place you have visited or seen before) or in an obvious location that is unfamiliar to you (such as behind a door, around a corner, or in a grove of trees). The sensor remains in place for the duration, and it cant be attacked or otherwise interacted with. When you cast the spell, you choose seeing or hearing. You can use the chosen sense through the sensor as if you were in its space. As your action, you can switch between seeing and hearing. A creature that can see the sensor (such as a creature benefiting from see invisibility or truesight) sees a luminous, intangible orb about the size of your fist.",
      "url": "https://www.dnd-spells.com/spell/clairvoyance"
    },
    "fabricate": {
      "castingTime": "10 Minutes",
      "duration": "Instantaneous",
      "range": "120 feet",
      "components": "Verbal, Somatic",
      "slotLevel": "4",
      "school": "Transmutation",
      "shortDescription": "You convert raw materials into large or smaller products of the same material. Creatures or magic items cant be created or transmuted by this spell.",
      "longDescription": "You convert raw materials into products of the same material. For example, you can fabricate a wooden bridge from a clump of trees, a rope from a patch of hemp, and clothes from flax or wool. Choose raw materials that you can see within range. You can fabricate a Large or smaller object (contained within a 10-foot cube, or eight connected 5-foot cubes), given a sufficient quantity of raw material. If you are working with metal, stone, or another mineral substance, however, the fabricated object can be no larger than Medium (contained within a single 5-foot cube). The quality of objects made by the spell is commensurate with the quality of the raw materials. Creatures or magic items cant be created or transmuted by this spell. You also cant use it to create items that ordinarily require a high degree of craftsmanship, such as jewelry, weapons, glass, or armor, unless you have proficiency with the type of artisans tools used to craft such objects.",
      "url": "https://www.dnd-spells.com/spell/fabricate"
    },
    "sunburst": {
      "castingTime": "1 Action",
      "duration": "Instantaneous",
      "range": "150 feet",
      "components": "Verbal, Somatic, Material (fire and a piece of sunstone)",
      "slotLevel": "8",
      "school": "Evocation",
      "shortDescription": "Brilliant sunlight flashes in a 60-foot radius centered on a point you choose within range. On a failed Constitution save, a creature in range takes 12d6 radiant damage and is blinded for 1 minute. On a save, it takes half as much and isnt blinded. The creature makes a Constitution save at the end of each turn to end blindness.",
      "longDescription": "Brilliant sunlight flashes in a 60-foot radius centered on a point you choose within range. Each creature in that light must make a Constitution saving throw. On a failed save, a creature takes 12d6 radiant damage and is blinded for 1 minute. On a successful save, it takes half as much damage and isnt blinded by this spell. Undead and oozes have disadvantage on this saving throw. A creature blinded by this spell makes another Constitution saving throw at the end of each of its turns. On a successful save, it is no longer blinded. This spell dispels any darkness in its area that was created by a spell.",
      "url": "https://www.dnd-spells.com/spell/sunburst",
      "damage": {
        "type": "radiant damage",
        "levels": {
          1: 0,
          2: 0,
          3: 0,
          4: 0,
          5: 0,
          6: 0,
          7: 0,
          8: "12d6",
          9: "12d6"
        }
      }
    },
    "dimension door": {
      "castingTime": "1 Action",
      "duration": "Instantaneous",
      "range": "500 feet",
      "components": "Verbal",
      "slotLevel": "4",
      "school": "Conjuration",
      "shortDescription": "teleport yourself to any spot you can see, visualize, or describe by direction and distance. You can bring objects you can carry, or one willing creature your size or smaller with 5ft of you.",
      "longDescription": "You teleport yourself from your current location to any other spot within range. You arrive at exactly the spot desired. It can be a place you can see, one you can visualize, or one you can describe by stating distance and direction, such as 200 feet straight downward or upward to the northwest at a 45-degree angle, 300 feet. You can bring along objects as long as their weight doesnt exceed what you can carry. You can also bring one willing creature of your size or smaller who is carrying gear up to its carrying capacity. The creature must be within 5 feet of you when you cast this spell. If you would arrive in a place already occupied by an object or a creature, you and any creature traveling with you each take 4d6 force damage, and the spell fails to teleport you.",
      "url": "https://www.dnd-spells.com/spell/dimension-door",
      "damage": "Complex Damage Progression. Please consult short or long descriptions"
    },
    "speak with animals": {
      "castingTime": "1 Action",
      "duration": "10 minutes",
      "range": "Self",
      "components": "Verbal, Somatic",
      "slotLevel": "1",
      "school": "Divination Ritual",
      "shortDescription": "You can speak with animals. They can tell you basic information, or do a small favor for you.",
      "longDescription": "You gain the ability to comprehend and verbally communicate with beasts for the duration. The knowledge and awareness of many beasts is limited by their intelligence, but at minimum, beasts can give you information about nearby locations and monsters, including whatever they can perceive or have perceived within the past day. You might be able to persuade a beast to perform a small favor for you, at the D. M.s discretion.",
      "url": "https://www.dnd-spells.com/spell/speak-with-animals-ritual"
    },
    "mold earth": {
      "castingTime": "1 Action",
      "duration": "Instantaneous or 1 hour",
      "range": "30 feet",
      "components": "Somatic",
      "slotLevel": "cantrip",
      "school": "Transmutation",
      "shortDescription": "You may move loose dirt up to five feet away, or you can create words or images in dirt or stone that last one hour, or you can toggle difficult terrain. You can cast this spell multiple times.",
      "longDescription": "You choose a portion of dirt or stone that you can see within range and that fits within a 5-foot cube. You manipulate it in one of the 3 following ways: 1) If you target an area of loose earth, you can instantaneously excavate it, move it along the ground, and deposit it up to 5 feet away. This movement doesnt have enough force to cause damage. 2) You cause shapes, colors, or both to appear on the dirt or stone, spelling out words, creating images, or shaping patterns. The changes last for 1 hour. 3) If the dirt or stone you target is on the ground, you cause it to become difficult terrain. Alternatively, you can cause the ground to become normal terrain if it is already difficult terrain. This change lasts for 1 hour. If you cast this spell multiple times, you can have no more than two of its non-instantaneous effects active at a time, and you can dismiss such an effect as an action.",
      "url": "https://www.dnd-spells.com/spell/mold-earth"
    },
    "gaseous form": {
      "castingTime": "1 Action",
      "duration": "Concentration, up to 1 hour",
      "range": "Touch",
      "components": "Verbal, Somatic, Material (a bit of gauze and a wisp of smoke)",
      "slotLevel": "3",
      "school": "Transmutation",
      "shortDescription": "Transform a willing creature and their items into a gaseous cloud with flying speed of 10 ft. The target can occupy the space of another creature, has resistence to nonmagical damage, and has advantage on Strength, Dexterity, and Constitution saves. The target can pass through small holes but not liquids, and cant talk. The target cant attack or cast spells.",
      "longDescription": "You transform a willing creature you touch, along with everything its wearing and carrying, into a misty cloud for the duration. The spell ends if the creature drops to 0 hit points. An incorporeal creature isnt affected. While in this form, the targets only method of movement is a flying speed of 10 feet. The target can enter and occupy the space of another creature. The target has resistance to nonmagical damage, and it has advantage on Strength, Dexterity, and Constitution saving throws. The target can pass through small holes, narrow openings, and even mere cracks, though it treats liquids as though they were solid surfaces. The target cant fall and remains hovering in the air even when stunned or otherwise incapacitated. While in the form of a misty cloud, the target cant talk or manipulate objects, and any objects it was carrying or holding cant be dropped, used, or otherwise interacted with. The target cant attack or cast spells.",
      "url": "https://www.dnd-spells.com/spell/gaseous-form"
    },
    "foresight": {
      "castingTime": "1 Minute",
      "duration": "8 hours",
      "range": "Touch",
      "components": "Verbal, Somatic, Material (a hummingbird feather)",
      "slotLevel": "9",
      "school": "Divination",
      "shortDescription": "A target you touch cant be surprised and has advantage on attack rolls, ability checks, and saving throws. Other creatures have disadvantage on attack rolls against the target.",
      "longDescription": "You touch a willing creature and bestow a limited ability to see into the immediate future. For the duration, the target cant be surprised and has advantage on attack rolls, ability checks, and saving throws. Additionally, other creatures have disadvantage on attack rolls against the target for the duration. This spell immediately ends if you cast it again before its duration ends.",
      "url": "https://www.dnd-spells.com/spell/foresight"
    },
    "divine favor": {
      "castingTime": "1 Bonus Action",
      "duration": "Concentration, up to 1 minute",
      "range": "Self",
      "components": "Verbal, Somatic",
      "slotLevel": "1",
      "school": "Evocation",
      "shortDescription": "Until the spell ends, your weapon attacks deal an extra 1d4 radiant damage on a hit.",
      "longDescription": "Your prayer empowers you with divine radiance. Until the spell ends, your weapon attacks deal an extra 1d4 radiant damage on a hit.",
      "url": "https://www.dnd-spells.com/spell/divine-favor",
      "damage": {
        "type": "radiant damage",
        "levels": {
          1: "1d4",
          2: "1d4",
          3: "1d4",
          4: "1d4",
          5: "1d4",
          6: "1d4",
          7: "1d4",
          8: "1d4",
          9: "1d4"
        }
      }
    },
    "cure wounds": {
      "castingTime": "1 Action",
      "duration": "Instantaneous",
      "range": "Touch",
      "components": "Verbal, Somatic",
      "slotLevel": "1",
      "school": "Evocation",
      "shortDescription": "A creature you touch regains a number of hit points equal to 1d8 + your spellcasting ability modifier. This spell has no effect on undead or constructs.",
      "longDescription": "A creature you touch regains a number of hit points equal to 1d8 + your spellcasting ability modifier. This spell has no effect on undead or constructs. At Higher Levels: When you cast this spell using a spell slot of 2nd level or higher, the healing increases by 1d8 for each slot level above 1st.",
      "url": "https://www.dnd-spells.com/spell/cure-wounds",
      "healing": {
        "levels": {
          1: "1d8",
          2: "2d8",
          3: "3d8",
          4: "4d8",
          5: "5d8",
          6: "6d8",
          7: "7d8",
          8: "8d8",
          9: "9d8"
        }
      }
    },
    "disguise self": {
      "castingTime": "1 Action",
      "duration": "1 hour",
      "range": "Self",
      "components": "Verbal, Somatic",
      "slotLevel": "1",
      "school": "Illusion",
      "shortDescription": "You look different. You can do almost anything except change the arrangement or number of your limbs. The changes are visual only, and creatures can inspect your appearance with a intelligence check against your spell save DC",
      "longDescription": "You make yourself, including your clothing, armor, weapons, and other belongings on your person, look different until the spell ends or until you use your action to dismiss it. You can seem 1 foot shorter or taller and can appear thin, fat, or in between. You cant change your body type, so you must adopt a form that has the same basic arrangement of limbs. Otherwise, the extent of the illusion is up to you. The changes wrought by this spell fail to hold up to physical inspection. For example, if you use this spell to add a hat to your outfit, objects pass through the hat, and anyone who touches it would feel nothing or would feel your head and hair. If you use this spell to appear thinner than you are, the hand of someone who reaches out to touch you would bump into you while it was seemingly still in midair. To discern that you are disguised, a creature can use its action to inspect your appearance and must succeed on an Intelligence (Investigation) check against your spell save DC.",
      "url": "https://www.dnd-spells.com/spell/disguise-self"
    },
    "light": {
      "castingTime": "1 Action",
      "duration": "1 hour",
      "range": "Touch",
      "components": "Verbal, Material (a firefly or phosphorescent moss)",
      "slotLevel": "cantrip",
      "school": "Evocation",
      "shortDescription": "Any 10ft or smaller object you touch sheds bright light in a 20ft radius. Objects held by creatures are resisted with a Dexterity save",
      "longDescription": "You touch one object that is no larger than 10 feet in any dimension. Until the spell ends, the object sheds bright light in a 20-foot radius and dim light for an additional 20 feet. The light can be colored as you like. Completely covering the object with something opaque blocks the light. The spell ends if you cast it again or dismiss it as an action. If you target an object held or worn by a hostile creature, that creature must succeed on a Dexterity saving throw to avoid the spell.",
      "url": "https://www.dnd-spells.com/spell/light"
    },
    "dancing lights": {
      "castingTime": "1 Action",
      "duration": "Concentration, up to 1 minute",
      "range": "120 feet",
      "components": "Verbal, Somatic, Material  (a bit of phosphorus or wychwood, or a glowworm)",
      "slotLevel": "cantrip",
      "school": "Evocation",
      "shortDescription": "Create up to four torch-sized lights that hover in the air and must remain within 10ft of each other. You can also combine the lights into a vaguely humanoid form. Each light sheds dim light within 10ft. Move the lights as a bonus action.",
      "longDescription": "You create up to four torch-sized lights within range, making them appear as torches, lanterns, or glowing orbs that hover in the air for the duration. You can also combine the four lights into one glowing vaguely humanoid form of Medium size. Whichever form you choose, each light sheds dim light in a 10-foot radius. As a bonus action on your turn, you can move the lights up to 60 feet to a new spot within range. A light must be within 20 feet of another light created by this spell, and a light winks out if it exceeds the spells range.",
      "url": "https://www.dnd-spells.com/spell/dancing-lights"
    },
    "investiture of wind": {
      "castingTime": "1 Action",
      "duration": "Concentration, up to 10 minutes",
      "range": "Self",
      "components": "Verbal, Somatic",
      "slotLevel": "6",
      "school": "Transmutation",
      "shortDescription": "Requres concentration. Ranged attacks have disadvantage against you and you gain a flying speed of 60 ft. You can also use your action to create a 15 ft cube with 60 ft. Creatures inside take 2d10 bludgeoning damage on a failed Constitution save, half as much on a success, and large or smaller creatures are pushed 10 ft away from the center of the cube.",
      "longDescription": "Until the spell ends, wind whirls around you, and you gain the following benefits: Ranged weapon attacks made against you have disadvantage on the attack roll. You gain a flying speed of 60 feet. If you are still flying when the spell ends, you fall, unless you can somehow prevent it. You can use your action to create a 15-foot cube of swirling wind centered on a point you can see within 60 feet of you. Each creature in that area must make a Constitution saving throw. A creature takes 2d10 bludgeoning damage on a failed save, or half as much damage on a successful one. If a Large or smaller creature fails the save, that creature is also pushed up to 10 feet away from the center of the cube.",
      "url": "https://www.dnd-spells.com/spell/investiture-of-wind",
      "damage": {
        "type": "bludgeoning damage",
        "levels": {
          1: 0,
          2: 0,
          3: 0,
          4: 0,
          5: 0,
          6: "2d10",
          7: "2d10",
          8: "2d10",
          9: "2d10"
        }
      }
    },
    "eldritch blast": {
      "castingTime": "1 Action",
      "duration": "Instantaneous",
      "range": "120 feet",
      "components": "Verbal, Somatic",
      "slotLevel": "cantrip",
      "school": "Evocation",
      "shortDescription": "Make a ranged spell attack against the target. On a hit, the target takes 1dlO force damage.",
      "longDescription": "A beam of crackling energy streaks toward a creature within range. Make a ranged spell attack against the target. On a hit, the target takes 1dlO force damage. The spell creates more than one beam when you reach higher levels: two beams at 5th level, three beams at 11th level, and four beams at 17th level. You can direct the beams at the same target or at different ones. Make a separate attack roll for each beam.",
      "url": "https://www.dnd-spells.com/spell/eldritch-blast"
    },
    "ray of frost": {
      "castingTime": "1 Action",
      "duration": "Instantaneous",
      "range": "60 feet",
      "components": "Verbal, Somatic",
      "slotLevel": "cantrip",
      "school": "Evocation",
      "shortDescription": "Target takes 1d8 cold damage and its speed is reduced by 10 until the end of your next turn",
      "longDescription": "A frigid beam of blue-white light streaks toward a creature within range. Make a ranged spell attack against the target. On a hit, it takes 1d8 cold damage, and its speed is reduced by 10 feet until the start of your next turn. The spells damage increases by 1d8 when you reach 5th level (2d8), 11th level (3d8), and 17th level (4d8).",
      "url": "https://www.dnd-spells.com/spell/ray-of-frost",
      "damage": {
        "type": "cold damage",
        "playerLevel": {
          1: "1d8",
          2: "1d8",
          3: "1d8",
          4: "1d8",
          5: "2d8",
          6: "2d8",
          7: "2d8",
          8: "2d8",
          9: "2d8",
          10: "2d8",
          11: "3d8",
          12: "3d8",
          13: "3d8",
          14: "3d8",
          15: "3d8",
          16: "3d8",
          17: "4d8",
          18: "4d8",
          19: "4d8",
          20: "4d8"
        }
      }
    },
    "tongues": {
      "castingTime": "1 Action",
      "duration": "1 hour",
      "range": "Touch",
      "components": "Verbal, Material (a small clay model of a ziggurat)",
      "slotLevel": "3",
      "school": "Divination",
      "shortDescription": "The target understands any language, and can be understood",
      "longDescription": "This spell grants the creature you touch the ability to understand any spoken language it hears. Moreover, when the target speaks, any creature that knows at least one language and can hear the target understands what it says.",
      "url": "https://www.dnd-spells.com/spell/tongues"
    },
    "forbiddance": {
      "castingTime": "10 Minutes",
      "duration": "1 day",
      "range": "Touch",
      "components": "Verbal, Somatic, Material (a sprinkling of holy water, rare incense, and powdered ruby worth at least 1,000 gold pieces)",
      "slotLevel": "6",
      "school": "Abjuration Ritual",
      "shortDescription": "You create a ward against magical travel that protects up to 40,000 square feet of floor space to a height of 30 feet above the floor.",
      "longDescription": "You create a ward against magical travel that protects up to 40,000 square feet of floor space to a height of 30 feet above the floor. For the duration, creatures cant teleport into the area or use portals, such as those created by the gate spell, to enter the area. The spell proofs the area against planar travel, and therefore prevents creatures from accessing the area by way of the Astral Plane, Ethereal Plane, Feywild, Shadowfell, or the plane shift spell. In addition, the spell damages types of creatures that you choose when you cast it. Choose one or more of the following: celestials, elementals, fey, fiends, and undead. When a chosen creature enters the spells area for the first time on a turn or starts its turn there, the creature takes 5d10 radiant or necrotic damage (your choice when you cast this spell). When you cast this spell, you can designate a password. A creature that speaks the password as it enters the area takes no damage from the spell. The spells area cant overlap with the area of another forbiddance spell. If you cast forbiddance every day for 30 days in the same location, the spell lasts until it is dispelled, and the material components are consumed on the last casting.",
      "url": "https://www.dnd-spells.com/spell/forbiddance-ritual"
    },
    "lesser restoration": {
      "castingTime": "1 Action",
      "duration": "Instantaneous",
      "range": "Touch",
      "components": "Verbal, Somatic",
      "slotLevel": "2",
      "school": "Abjuration",
      "shortDescription": "You touch a creature and can end either one disease or one condition afflicting it. The condition can be blinded, deafened, paralyzed, or poisoned.",
      "longDescription": "You touch a creature and can end either one disease or one condition afflicting it. The condition can be blinded, deafened, paralyzed, or poisoned.",
      "url": "https://www.dnd-spells.com/spell/lesser-restoration"
    },
    "aura of life": {
      "castingTime": "1 Action",
      "duration": "Concentration, up to 10 minutes",
      "range": "Self (30-foot radius)",
      "components": "Verbal",
      "slotLevel": "4",
      "school": "Abjuration",
      "shortDescription": "Each nonhostile creature within 30ft of you (including you) have resistence to necrotic damage, its health maximum cant be reduced, and regains 1 health at the start of each turn.",
      "longDescription": "Life-preserving energy radiates from you in an aura with a 30-foot radius. Until the spell ends, the aura moves with you, centered on you. Each nonhostile creature in the aura (including you) has resistance to necrotic damage, and its hit point maximum cant be reduced. In addition, a nonhostile, living creature regains 1 hit point when it starts its turn in the aura with 0 hit points.",
      "url": "https://www.dnd-spells.com/spell/aura-of-life"
    },
    "counterspell": {
      "castingTime": "Special",
      "duration": "Instantaneous",
      "range": "60 feet",
      "components": "Somatic",
      "slotLevel": "3",
      "school": "Abjuration",
      "shortDescription": "You attempt to interrupt a creature in the process of casting a spell. If the creature is casting a spell of 3rd level or lower, its spell fails and has no effect. Otherwise, make a spellcasting ability check. The DC equals 10 + the spells level. The creatures spell fails on a success.",
      "longDescription": "You attempt to interrupt a creature in the process of casting a spell. If the creature is casting a spell of 3rd level or lower, its spell fails and has no effect. If it is casting a spell of 4th level or higher, make an ability check using your spellcasting ability. The DC equals 10 + the spells level. On a success, the creatures spell fails and has no effect. At Higher Levels: When you cast this spell using a spell slot of 4th level or higher, the interrupted spell has no effect if its level is less than or equal to the level of the spell slot you used.",
      "url": "https://www.dnd-spells.com/spell/counterspell"
    },
    "power word kill": {
      "castingTime": "1 Action",
      "duration": "Instantaneous",
      "range": "60 feet",
      "components": "Verbal",
      "slotLevel": "9",
      "school": "Enchantment",
      "shortDescription": "Kills a creature with 100 health or less.",
      "longDescription": "You utter a word of power that can compel one creature you can see within range to die instantly. If the creature you choose has 100 hit points or fewer, it dies. Otherwise, the spell has no effect.",
      "url": "https://www.dnd-spells.com/spell/power-word-kill"
    },
    "tidal wave": {
      "castingTime": "1 Action",
      "duration": "Instantaneous",
      "range": "120 feet",
      "components": "Verbal, Somatic, Material (a drop of water)",
      "slotLevel": "3",
      "school": "Conjuration",
      "shortDescription": "You conjure up a wave of water that crashes down on an area within range up to 30 feet long, 10 feet wide, and 10 feet tall. On a failed Dexterity save, creatures are knocked prone and take 4d8 bludgeoning damage. On a success, the creature takes half as much damage and isnt knocked prone. The water extinguishes flames winthin 30ft.",
      "longDescription": "You conjure up a wave of water that crashes down on an area within range. The area can be up to 30 feet long, up to 10 feet wide, and up to 10 feet tall. Each creature in that area must make a Dexterity saving throw. On a failure, a creature takes 4d8 bludgeoning damage and is knocked prone. On a success, a creature takes half as much damage and isnt knocked prone. The water then spreads out across the ground in all directions, extinguishing unprotected flames in its area and within 30 feet of it.",
      "url": "https://www.dnd-spells.com/spell/tidal-wave",
      "damage": {
        "type": "bludgeoning damage",
        "levels": {
          1: 0,
          2: 0,
          3: "4d8",
          4: "4d8",
          5: "4d8",
          6: "4d8",
          7: "4d8",
          8: "4d8",
          9: "4d8"
        }
      }
    },
    "magic circle": {
      "castingTime": "1 Minute",
      "duration": "1 hour",
      "range": "10 feet",
      "components": "Verbal, Somatic, Material (holy water or powdered silver and iron worth at least 100 gold pieces, which the spell consumes)",
      "slotLevel": "3",
      "school": "Abjuration",
      "shortDescription": "You create a 10-foot-radius, 20-foot-tall cylinder of magical energy centered on a point on the ground that you can see within range. Choose one or more of the following types of creatures: celestials, elementals, fey, fiends, or undead. The creature cant enter the area by nonmagical means. It must make a charisma save to enter by magical means. Targets within the cylinder cant be charmed, frightened, or possessed by the creature. You can also elect to cause its magic to operate in the reverse direction The spell duration increases by 1 hour for each spell slot of 4th level or higher.",
      "longDescription": "You create a 10-foot-radius, 20-foot-tall cylinder of magical energy centered on a point on the ground that you can see within range. Glowing runes appear wherever the cylinder intersects with the floor or other surface. Choose one or more of the following types of creatures: celestials, elementals, fey, fiends, or undead. The circle affects a creature of the chosen type in the following ways: The creature cant willingly enter the cylinder by nonmagical means. If the creature tries to use teleportation or interplanar travel to do so, it must first succeed on a Charisma saving throw. The creature has disadvantage on attack rolls against targets within the cylinder. Targets within the cylinder cant be charmed, frightened, or possessed by the creature. When you cast this spell, you can elect to cause its magic to operate in the reverse direction, preventing a creature of the specified type from leaving the cylinder and protecting targets outside it. At Higher Levels: When you cast this spell using a spell slot of 4th level or higher, the duration increases by 1 hour for each slot level above 3rd.",
      "url": "https://www.dnd-spells.com/spell/magic-circle"
    },
    "erupting earth": {
      "castingTime": "1 Action",
      "duration": "Instantaneous",
      "range": "120 feet",
      "components": "Verbal, Somatic, Material (a piece of obsidian)",
      "slotLevel": "3",
      "school": "Transmutation",
      "shortDescription": "A fountain of churned earth and stone erupts in a 20-foot cube. Each creature in that area must make a Dexterity save or takes 3d12 bludgeoning damage, and takes half as much on a save. The ground becomes difficult terrain until cleared. The damage increases by 1d12 for each spell slot above 2nd.",
      "longDescription": "Choose a point you can see on the ground within range. A fountain of churned earth and stone erupts in a 20-foot cube centered on that point. Each creature in that area must make a Dexterity saving throw. A creature takes 3d12 bludgeoning damage on a failed save, or half as much damage on a successful one. Additionally, the ground in that area becomes difficult terrain until cleared away. Each 5-foot-square portion of the area requires at least 1 minute to clear by hand. At higher levels: When you cast this spell using a spell slot of 3rd level or higher, the damage increases by 1d12 for each slot level above 2nd.",
      "url": "https://www.dnd-spells.com/spell/erupting-earth",
      "damage": {
        "type": "bludgeoning damage",
        "levels": {
          1: 0,
          2: "3d12",
          3: "4d12",
          4: "5d12",
          5: "6d12",
          6: "7d12",
          7: "8d12",
          8: "9d12",
          9: "10d12"
        }
      }
    },
    "otilukes resilient sphere": {
      "castingTime": "1 Action",
      "duration": "Concentration, up to 1 minute",
      "range": "30 feet",
      "components": "Verbal, Somatic, Material (a hemispherical piece of clear crystal and a matching hemispherical piece of gum arabic)",
      "slotLevel": "4",
      "school": "Evocation",
      "shortDescription": "On a failed Dexterity save, a large or smaller creature is enclosed in a shimmering sphere of force. Nothing-not physical objects, energy, or other spell effects, can pass through the barrier, in or out, though a creature in the sphere can breathe there. The creature can roll around at half movement speed. A disintegrate spell destroys the sphere.",
      "longDescription": "A sphere of shimmering force encloses a creature or object of Large size or smaller within range. An unwilling creature must make a Dexterity saving throw. On a failed save, the creature is enclosed for the duration. Nothing, not physical objects, energy, or other spell effects, can pass through the barrier, in or out, though a creature in the sphere can breathe there. The sphere is immune to all damage, and a creature or object inside cant be damaged by attacks or effects originating from outside, nor can a creature inside the sphere damage anything outside it. The sphere is weightless and just large enough to contain the creature or object inside. An enclosed creature can use its action to push against the spheres walls and thus roll the sphere at up to half the creatures speed. Similarly, the globe can be picked up and moved by other creatures. A disintegrate spell targeting the globe destroys it without harming anything inside it.",
      "url": "https://www.dnd-spells.com/spell/otilukes-resilient-sphere"
    },
    "mirage arcane": {
      "castingTime": "10 Minutes",
      "duration": "10 days",
      "range": "Sight",
      "components": "Verbal, Somatic",
      "slotLevel": "7",
      "school": "Illusion",
      "shortDescription": "You make terrain in an area up to 1 mile square look, sound, smell, and even feel like some other sort of terrain. Similarly, you can alter the appearance of structures, or add them where none are present. The spell can turn clear ground into difficult terrain (or vice versa) or otherwise impede movement through the area. Any piece of the illusory terrain (such as a rock or stick) that is removed from the spells area disappears immediately. Creatures with truesight see through the illusion but can still interact with it.",
      "longDescription": "You make terrain in an area up to 1 mile square look, sound, smell, and even feel like some other sort of terrain. The terrains general shape remains the same, however. Open fields or a road could be made to resemble a swamp, hill, crevasse, or some other difficult or impassable terrain. A pond can be made to seem like a grassy meadow, a precipice like a gentle slope, or a rock-strewn gully like a wide and smooth road. Similarly, you can alter the appearance of structures, or add them where none are present. The spell doesnt disguise, conceal, or add creatures. The illusion includes audible, visual, tactile, and olfactory elements, so it can turn clear ground into difficult terrain (or vice versa) or otherwise impede movement through the area. Any piece of the illusory terrain (such as a rock or stick) that is removed from the spells area disappears immediately. Creatures with truesight can see through the illusion to the terrains true form; however, all other elements of the illusion remain, so while the creature is aware of the illusions presence, the creature can still physically interact with the illusion.",
      "url": "https://www.dnd-spells.com/spell/mirage-arcane"
    },
    "simulacrum": {
      "castingTime": "12 Hours",
      "duration": "Until dispelled",
      "range": "Touch",
      "components": "Verbal, Somatic, Material (snow or ice in quantities sufficient to made a life-size copy of the duplicated creature; some hair, fingernail clippings, or other piece of that creatures body placed inside the snow or ice; and powdered ruby worth 1,500 gold pieces, sprinkled over the duplicate and consumed by the spell)",
      "slotLevel": "7",
      "school": "Illusion",
      "shortDescription": "Shape an illusory duplicate of a creature from snow. This copy is a duplicate with half the health of the original creature, starts with no equipment, and obeys your commands. It can be healed in a alchemical lab using rare herbs and minerals worth 100 gold. You can only have one copy active at a time.",
      "longDescription": "You shape an illusory duplicate of one beast or humanoid that is within range for the entire casting time of the spell. The duplicate is a creature, partially real and formed from ice or snow, and it can take actions and otherwise be affected as a normal creature. It appears to be the same as the original, but it has half the creatures hit point maximum and is formed without any equipment. Otherwise, the illusion uses all the statistics of the creature it duplicates. The simulacrum is friendly to you and creatures you designate. It obeys your spoken commands, moving and acting in accordance with your wishes and acting on your turn in combat. The simulacrum lacks the ability to learn or become more powerful, so it never increases its level or other abilities, nor can it regain expended spell slots. If the simulacrum is damaged, you can repair it in an alchemical laboratory, using rare herbs and minerals worth 100 gold pieces per hit point it regains. The simulacrum lasts until it drops to 0 hit points, at which point it reverts to snow and melts instantly. If you cast this spell again, any currently active duplicates you created with this spell are instantly destroyed.",
      "url": "https://www.dnd-spells.com/spell/simulacrum"
    },
    "demiplane": {
      "castingTime": "1 Action",
      "duration": "1 hour",
      "range": "60 feet",
      "components": "Somatic",
      "slotLevel": "8",
      "school": "Conjuration",
      "shortDescription": "Create a door to an empty 30ft square room. Medium ceatures fit through the door. When the spell ends, anything in the room is trapped there. You can recast the spell to either connect to an existing room, or a new room.",
      "longDescription": "You create a shadowy door on a flat solid surface that you can see within range. The door is large enough to allow Medium creatures to pass through unhindered. When opened, the door leads to a demiplane that appears to be an empty room 30 feet in each dimension, made of wood or stone. When the spell ends, the door disappears, and any creatures or objects inside the demiplane remain trapped there, as the door also disappears from the other side. Each time you cast this spell, you can create a new demiplane, or have the shadowy door connect to a demiplane you created with a previous casting of this spell. Additionally, if you know the nature and contents of a demiplane created by a casting of this spell by another creature, you can have the shadowy door connect to its demiplane instead.",
      "url": "https://www.dnd-spells.com/spell/demiplane"
    },
    "enthrall": {
      "castingTime": "1 Action",
      "duration": "1 minute",
      "range": "60 feet",
      "components": "Verbal, Somatic",
      "slotLevel": "2",
      "school": "Enchantment",
      "shortDescription": "On a failed wisdom save, the target has disadvantage on perception checks against other creatures. Does not affect targts immune to charm, and targets in combat have advantage",
      "longDescription": "You weave a distracting string of words, causing creatures of your choice that you can see within range and that can hear you to make a Wisdom saving throw. Any creature that cant be charmed succeeds on this saving throw automatically, and if you or your companions are fighting a creature, it has advantage on the save. On a failed save, the target has disadvantage on Wisdom (Perception) checks made to perceive any creature other than you until the spell ends or until the target can no longer hear you. The spell ends if you are incapacitated or can no longer speak.",
      "url": "https://www.dnd-spells.com/spell/enthrall"
    },
    "reverse gravity": {
      "castingTime": "1 Action",
      "duration": "Concentration, up to 1 minute",
      "range": "100 feet",
      "components": "Verbal, Somatic, Material (a lodestone and iron filings)",
      "slotLevel": "7",
      "school": "Transmutation",
      "shortDescription": "Reverses gravity in a 50-foot-radius, 100-foot high cylinder. All creatures and objects that arent anchored to the gorund fall upwards. Creatures can avoid the fall and grab onto something on a Dexterity save.",
      "longDescription": "This spell reverses gravity in a 50-foot-radius, 100- foot high cylinder centered on a point within range. All creatures and objects that arent somehow anchored to the ground in the area fall upward and reach the top of the area when you cast this spell. A creature can make a Dexterity saving throw to grab onto a fixed object it can reach, thus avoiding the fall. If some solid object (such as a ceiling) is encountered in this fall, falling objects and creatures strike itjust as they would during a normal downward fall. If an object or creature reaches the top of the area without striking anything, it remains there, oscillating slightly, for the duration. At the end of the duration, affected objects and creatures fall back down.",
      "url": "https://www.dnd-spells.com/spell/reverse-gravity"
    },
    "ensnaring strike": {
      "castingTime": "1 Bonus Action",
      "duration": "Concentration, up to 1 minute",
      "range": "Self",
      "components": "Verbal",
      "slotLevel": "1",
      "school": "Conjuration",
      "shortDescription": "On your next hit, the target must succeed a Strength save or is restrained until the spell ends. Large and giant creatures have advantage. While restrained the target takes 1d6 piercing damage at the start of each of its turn.",
      "longDescription": "The next time you hit a creature with a weapon attack before this spell ends, a writhing mass of thorny vines appears at the point of impact, and the target must succeed on a Strength saving throw or be restrained by the magical vines until the spell ends. A Large or larger creature has advantage on this saving throw. If the target succeeds on the save, the vines shrivel away. While restrained by this spell, the target takes 1d6 piercing damage at the start of each of its turns. A creature restrained by the vines or one that can touch the creature can use its action to make a Strength check against your spell save DC. On a success, the target is freed. At Higher Levels. If you cast this spell using a spell slot of 2nd level or higher, the damage increases by 1d6 for each slot level above 1st.",
      "url": "https://www.dnd-spells.com/spell/ensnaring-strike",
      "damage": {
        "type": "piercing damage",
        "levels": {
          1: "1d6",
          2: "2d6",
          3: "3d6",
          4: "4d6",
          5: "5d6",
          6: "6d6",
          7: "7d6",
          8: "8d6",
          9: "9d6"
        }
      }
    },
    "detect evil and good": {
      "castingTime": "1 Action",
      "duration": "Concentration, up to 10 minutes",
      "range": "Self",
      "components": "Verbal, Somatic",
      "slotLevel": "1",
      "school": "Divination",
      "shortDescription": "You know if and where there is an aberration, celestial, elemental, fey, fiend, or undead within 30 feet of you, or if a place has been consecrated or desecrated within 30 ft.",
      "longDescription": "For the duration, you know if there is an aberration, celestial, elemental, fey, fiend, or undead within 30 feet of you, as well as where the creature is located. Similarly, you know if there is a place or object within 30 feet of you that has been magically consecrated or desecrated. The spell can penetrate most barriers, but it is blocked by 1 foot of stone, 1 inch of common metal, a thin sheet of lead, or 3 feet of wood or dirt.",
      "url": "https://www.dnd-spells.com/spell/detect-evil-and-good"
    },
    "command": {
      "castingTime": "1 Action",
      "duration": "1 round",
      "range": "60 feet",
      "components": "Verbal",
      "slotLevel": "1",
      "school": "Enchantment",
      "shortDescription": "A creature follows a one word command on a wisdom fail. The spell does not affect undead or creatures that cant understand you, or if the command is directly harmful to it. Some example commands are approach, drop, flee, grovel, and halt. You can affect one additional creature for each spell slot used above 1st.",
      "longDescription": "You speak a one-word command to a creature you can see within range. The target must succeed on a Wisdom saving throw or follow the command on its next turn. The spell has no effect if the target is undead, if it doesnt understand your language, or if your command is directly harmful to it. Some typical commands and their effects follow. You might issue a command other than one described here. Ifyou do so, the D. M. determines how the target behaves. If the target cant follow your command, the spell ends. Approach. The target moves toward you by the shortest and most direct route, ending its turn if it moves within 5 feet of you. Drop. The target drops whatever it is holding and then ends its turn. Flee. The target spends its turn moving away from you by the fastest available means. Grovel. The target falls prone and then ends its turn. Halt. The target doesnt move and takes no actions. A flying creature stays aloft, provided that it is able to do so. If it must move to stay aloft, it flies the minimum distance needed to remain in the air. At Higher Levels: When you cast this spell using a spell slot of 2nd level or higher, you can affect one additional creature for each slot level above 1st. The creatures must be within 30 feet of each other when you target them.",
      "url": "https://www.dnd-spells.com/spell/command"
    },
    "fog cloud": {
      "castingTime": "1 Action",
      "duration": "Concentration, up to 1 hour",
      "range": "120 feet",
      "components": "Verbal, Somatic",
      "slotLevel": "1",
      "school": "Conjuration",
      "shortDescription": "A 20ft radius sphere of fog heavily obscures the area. Radius increases by 20ft for each spell slot above 1st.",
      "longDescription": "You create a 20-foot-radius sphere of fog centered on a point within range. The sphere spreads around corners, and its area is heavily obscured. It lasts for the duration or until a wind of moderate or greater speed (at least 10 miles per hour) disperses it. At Higher Levels: When you cast this spell using a spell slot of 2nd level or higher, the radius of the fog increases by 20 feet for each slot level above 1st.",
      "url": "https://www.dnd-spells.com/spell/fog-cloud"
    },
    "symbol": {
      "castingTime": "1 Minute",
      "duration": "Until dispelled or triggered",
      "range": "Touch",
      "components": "Verbal, Somatic, Material (mercury, phosphorus, and powdered diamond and opal with a total value of at least 1,000 gold pieces, which the spell consumes)",
      "slotLevel": "7",
      "school": "Abjuration",
      "shortDescription": "Cast a glyph on a surface or object. The glyph breaks if the object is moved more than 10ft. The glyph requires an Investigation check to find. You decide what triggers the glyph. Once the glyph is triggered, it fills a 60ft radius sphere with fim light for 10 minutes. The glyph affects creatures in the sphere when its activated, when the enter it for the first time, or when they end their turn in the sphere. Choose one of the following 8 effects: 1) Death: creatures take 10d10 necrotic damage on a failed Constitution save, half as much on a success. 2) Discord: On a failed Constitution save, each target is incapable of communication and has disadvantage on attack rolls and ability checks for one minute. 3) Fear: On a failed wisdom save, each target drops what it was holding and move at least 20 ft from the glyph for one minute. 4) Hopelessness: On a failed Charisma save, targets are overwhelmed with dispair for 1 minute and cannot take harmful actions. 5) Insanity: Each target is driven insane for 1 minute on a failed intelligence save. The target cannot take actions, speak, understand, and is moved randomly by the D. M.. 6) Pain: each target becomes incapacitated for one minute on a failed Constitution save. 7) Sleep: Each target falls unconscious for 10 minutes on a failed Constitution save. Awakens by damage or if another creature uses an action to wake it. 8) Stunning: targets stunned for one minute on a failed wisdom save.",
      "longDescription": "When you cast this spell, you inscribe a harmful glyph either on a surface (such as a section of floor, a wall, or a table) or within an object that can be closed to conceal the glyph (such as a book, a scroll, or a treasure chest). If you choose a surface, the glyph can cover an area of the surface no larger than 10 feet in diameter. If you choose an object, that object must remain in its place; if the object is moved more than 10 feet from where you cast this spell, the glyph is broken, and the spell ends without being triggered. The glyph is nearly invisible, requiring an Intelligence (Investigation) check against your spell save DC to find it. You decide what triggers the glyph when you cast the spell. For glyphs inscribed on a surface, the most typical triggers include touching or stepping on the glyph, removing another object covering it, approaching within a certain distance of it, or manipulating the object that holds it. For glyphs inscribed within an object, the most common triggers are opening the object, approaching within a certain distance of it, or seeing or reading the glyph. You can further refine the trigger so the spell is activated only under certain circumstances or according to a creatures physical characteristics (such as height or weight), or physical kind (for example, the ward could be set to affect hags or shapechangers). You can also specify creatures that dont trigger the glyph, such as those who say a certain password. When you inscribe the glyph, choose one of the options below for its effect. Once triggered, the glyph glows, filling a 60-foot-radius sphere with dim light for 10 minutes, after which time the spell ends. Each creature in the sphere when the glyph activates is targeted by its effect, as is a creature that enters the sphere for the first time on a turn or ends its turn there. Death. Each target must make a Constitution saving throw, taking 10d10 necrotic damage on a failed save, or half as much damage on a successful save. Discord. Each target must make a Constitution saving throw. On a failed save, a target bickers and argues with other creatures for 1 minute. During this time, it is incapable of meaningful communication and has disadvantage on attack rolls and ability checks. Fear. Each target must make a Wisdom saving throw and becomes frightened for 1 minute on a failed save. While frightened, the target drops whatever it is holding and must move at least 30 feet away from the glyph on each of its turns, if able. Hopelessness. Each target must make a Charisma saving throw. On a failed save, the target is overwhelmed with despair for 1 minute. During this time, it cant attack or target any creature with harmful abilities, spells, or other magical effects. Insanity. Each target must make an Intelligence saving throw. On a failed save, the target is driven insane for 1 minute. An insane creature cant take actions, cant understand what other creatures say, cant read, and speaks only in gibberish. The D. M. controls its movement, which is erratic. Pain. Each target must make a Constitution saving throw and becomes incapacitated with excruciating pain for 1 minute on a failed save. Sleep. Each target must make a Wisdom saving throw and falls unconscious for 10 minutes on a failed save. A creature awakens if it takes damage or if someone uses an action to shake or slap it awake. Stunning. Each target must make a wisdom saving throw and becomes stunned for 1 minute on a failed save.",
      "url": "https://www.dnd-spells.com/spell/symbol",
      "damage": "Complex Damage Progression. Please consult short or long descriptions"
    },
    "branding smite": {
      "castingTime": "1 Bonus Action",
      "duration": "Concentration, up to 1 minute",
      "range": "Self",
      "components": "Verbal",
      "slotLevel": "2",
      "school": "Evocation",
      "shortDescription": "Your next attack deals an extra 2d6 radiant damage to the target, which becomes visible if invisible, and cant become visible again until the spell ends.",
      "longDescription": "The next time you hit a creature with a weapon attack before this spell ends, the weapon gleams with astral radiance as you strike. The attack deals an extra 2d6 radiant damage to the target, which becomes visible if its invisible, and the target sheds dim light in a 5-foot radius and cant become invisible until the spell ends. At Higher Levels. When you cast this spell using a spell slot of 3rd level or higher, the extra damage increases by 1d6 for each slot level above 2nd.",
      "url": "https://www.dnd-spells.com/spell/branding-smite",
      "damage": {
        "type": "radiant damage",
        "levels": {
          1: 0,
          2: "2d6",
          3: "3d6",
          4: "4d6",
          5: "5d6",
          6: "6d6",
          7: "7d6",
          8: "8d6",
          9: "9d6"
        }
      }
    },
    "hunger of hadar": {
      "castingTime": "1 Action",
      "duration": "Concentration, up to 1 minute",
      "range": "150 feet",
      "components": "Verbal, Somatic, Material (a pickled octopus tentacle)",
      "slotLevel": "3",
      "school": "Conjuration",
      "shortDescription": "A 20ft radius sphere blinds creatures inside of it. The area inside is difficult terrain, and any creature that starts its turn inside takes 2d6 cold damage, and must succeed a Dexterity save at the end of their turn or take 2d6 acid damage.",
      "longDescription": "You open a gateway to the dark between the stars, a region infested with unknown horrors. A 20-foot-radius sphere of blackness and bitter cold appears, centered on a point with range and lasting for the duration. This void is filled with a cacophony of soft whispers and slurping noises that can be heard up to 30 feet away. No light, magical or otherwise, can illuminate the area, and creatures fully within the area are blinded. The void creates a warp in the fabric of space, and the area is difficult terrain. Any creature that starts its turn in the area takes 2d6 cold damage. Any creature that ends its turn in the area must succeed on a Dexterity saving throw or take 2d6 acid damage as milky, otherworldly tentacles rub against it.",
      "url": "https://www.dnd-spells.com/spell/hunger-of-hadar",
      "damage": "Complex Damage Progression. Please consult short or long descriptions"
    },
    "elemental bane": {
      "castingTime": "1 Action",
      "duration": "Concentration, up to 1 minute",
      "range": "90 feet",
      "components": "Verbal, Somatic",
      "slotLevel": "4",
      "school": "Transmutation",
      "shortDescription": "Choose acid, cold, fire, lightning, or thunder damage. The target takes 2d6 damage each turn it fails a Constitution save. Each turn the target takes additional 2d6 damage.",
      "longDescription": "Choose one creature you can see within range, and choose one of the following damage types: acid, cold, fire, lightning, or thunder. The target must succeed on a Constitution saving throw or be affected by the spell for its duration. The first time each turn the affected target takes damage of the chosen type, the target takes an extra 2d6 damage of that type. Moreover, the target loses any resistance to that damage type until the spell ends. At higher levels: When you cast this spell using a spell slot of 5th level or higher, you can target one additional creature for each slot level above 4th. The creatures must be within 30 feet of each other when you target them.",
      "url": "https://www.dnd-spells.com/spell/elemental-bane"
    },
    "false life": {
      "castingTime": "1 Action",
      "duration": "1 hour",
      "range": "Self",
      "components": "Verbal, Somatic, Material (a small amount of alcohol or distilled spirits)",
      "slotLevel": "1",
      "school": "Necromancy",
      "shortDescription": "Gain 1d4+4 temporary health. Gain 5 additional health for every slot above 1st level.",
      "longDescription": "Bolstering yourself with a necromantic facsimile of life, you gain 1d4 + 4 temporary hit points for the duration. At Higher Levels. When you cast this spell using a spell slot of 2nd level or higher, you gain 5 additional temporary hit points for each slot level above 1st.",
      "url": "https://www.dnd-spells.com/spell/false-life"
    },
    "spare the dying": {
      "castingTime": "1 Action",
      "duration": "Instantaneous",
      "range": "Touch",
      "components": "Verbal, Somatic",
      "slotLevel": "cantrip",
      "school": "Necromancy",
      "shortDescription": "stablize a creature with 0 health",
      "longDescription": "You touch a living creature that has 0 hit points. The creature becomes stable. This spell has no effect on undead or constructs.",
      "url": "https://www.dnd-spells.com/spell/spare-the-dying"
    },
    "transmute rock": {
      "castingTime": "1 Action",
      "duration": "Instantaneous",
      "range": "120 feet",
      "components": "Verbal, Somatic, Material (clay and water)",
      "slotLevel": "5",
      "school": "Transmutation",
      "shortDescription": "You transmute rock into mud, or mud into rock. In mud, creatures sink, move at 1/4 speed. Each turn, a creature must make a strength save or become restrained unless it uses an action. If you cast mud on a ceiling, creatures must make a Dexterity save or take 4d8 bludgeoning damage (half as much on a save). If you turn mud into rock, creatures in the mud become restrained on a Dexterity fail. The creature can use an action or deal 25 damage to the rock to break free.",
      "longDescription": "You choose an area of stone or mud that you can see that fits within a 40-foot cube and that is within range, and choose one of the 2 following effects. 1) Transmute Rock to Mud. Nonmagical rock of any sort in the area becomes an equal volume of thick and flowing mud that remains for the spells duration. If you cast the spell on an area of ground, it becomes muddy enough that creatures can sink into it. Each foot that a creature moves through the mud costs 4 feet of movement, and any creature on the ground when you cast the spell must make a Strength saving throw. A creature must also make this save the first time it enters the area on a turn or ends its turn there. On a failed save, a creature sinks into the mud and is restrained, though it can use an action to end the restrained condition on itself by pulling itself free of the mud. If you cast the spell on a ceiling, the mud falls. Any creature under the mud when it falls must make a Dexterity saving throw. A creature takes 4d8 bludgeoning damage on a failed save, or half as much damage on a successful one. 2) Transmute Mud to Rock. Nonmagical mud or quicksand in the area no more than 10 feet deep transforms into soft stone for the spells duration. Any creature in the mud when it transforms must make a Dexterity saving throw. On a failed save, a creature becomes restrained by the rock. The restrained creature can use an action to try to break free by succeeding on a Strength check (DC 20) or by dealing 25 damage to the rock around it. On a successful save, a creature is shunted safely to the surface to an unoccupied space.",
      "url": "https://www.dnd-spells.com/spell/transmute-rock",
      "damage": "Complex Damage Progression. Please consult short or long descriptions"
    },
    "thunderclap": {
      "castingTime": "1 Action",
      "duration": "Instantaneous",
      "range": "Self (5-foot radius)",
      "components": "Somatic",
      "slotLevel": "cantrip",
      "school": "Evocation",
      "shortDescription": "On a failed Constitution save, each creature within 5 ft of you takes 1d6 thunder damage.",
      "longDescription": "You create a burst of thunderous sound, which can be heard 100 feet away. Each creature other than you within 5 feet of you must make a Constitution saving throw. On a failed save, the creature takes 1d6 thunder damage. The spells damage increases by 1d6 when you reach 5th level (2d6), 11th level (3d6), and 17th level (4d6).",
      "url": "https://www.dnd-spells.com/spell/thunderclap",
      "damage": {
        "type": "thunder damage",
        "playerLevel": {
          1: "1d6",
          2: "1d6",
          3: "1d6",
          4: "1d6",
          5: "2d6",
          6: "2d6",
          7: "2d6",
          8: "2d6",
          9: "2d6",
          10: "2d6",
          11: "3d6",
          12: "3d6",
          13: "3d6",
          14: "3d6",
          15: "3d6",
          16: "3d6",
          17: "4d6",
          18: "4d6",
          19: "4d6",
          20: "4d6"
        }
      }
    },
    "enhance ability": {
      "castingTime": "1 Action",
      "duration": "Concentration, up to 1 hour",
      "range": "Touch",
      "components": "Verbal, Somatic, Material (fur or a feather from a beast)",
      "slotLevel": "2",
      "school": "Transmutation",
      "shortDescription": "Choose one of the following effects: 1. The target has advantage on Constitution checks. It also gains 2d6 temporary hit points. 2) The target has advantage on Strength checks, and carrying capacity doubles. 3) The target has advantage on Dexterity checks. It also doesnt take damage from falling up to 20 feet. 4) The target has advantage on Charisma checks 5) The target thas advantage on Intelligence checks 6) The target has advantage on Wisdom checks",
      "longDescription": "You touch a creature and bestow upon it a magical enhancement. Choose one of the following effects; the target gains that effect until the spell ends. Bears Endurance: The target has advantage on Constitution checks. It also gains 2d6 temporary hit points, which are lost when the spell ends. Bulls Strength: The target has advantage on Strength checks, and his or her carrying capacity doubles. Cats Grace: The target has advantage on Dexterity checks. It also doesnt take damage from falling 20 feet or less if it isnt incapacitated. Eagles Splendor: The target has advantage on Charisma checks. Foxs Cunning: The target has advantage on Intelligence checks. Owls Wisdom: The target has advantage on Wisdom checks. At HigherLevels: W hen you cast this spell using a spell slot of 3rd level or higher, you can target one additional creature for each slot level above 2nd.",
      "url": "https://www.dnd-spells.com/spell/enhance-ability"
    },
    "friends": {
      "castingTime": "1 Action",
      "duration": "Concentration, up to 1 minute",
      "range": "Self",
      "components": "Somatic, Material (a small amount of makeup applied to the face as this spell is cast)",
      "slotLevel": "cantrip",
      "school": "Enchantment",
      "shortDescription": "You have advantage on all Charisma checks against a nonhostile target. The target realizes you cast a spell when it ends, and may attack you or seek retribution per the D. M.",
      "longDescription": "For the duration, you have advantage on all Charisma checks directed at one creature of your choice that isnt hostile toward you. When the spell ends, the creature realizes that you used magic to influence its mood and becomes hostile toward you. A creature prone to violence might attack you. Another creature might seek retribution in other ways (at the D. M.s discretion), depending on the nature of your interaction with it.",
      "url": "https://www.dnd-spells.com/spell/friends"
    },
    "magic missile": {
      "castingTime": "1 Action",
      "duration": "Instantaneous",
      "range": "120 feet",
      "components": "Verbal, Somatic",
      "slotLevel": "1",
      "school": "Evocation",
      "shortDescription": "Cast three darts dealing 1d4+1 force damage to up to three targets. The spell creats one dart for each slot used.",
      "longDescription": "You create three glowing darts of magical force. Each dart hits a creature of your choice that you can see within range. A dart deals 1d4 + 1 force damage to its target. The darts all strike simultaneously, and you can direct them to hit one creature or several. At Higher Levels: When you cast this spell using a spell slot of 2nd level or higher, the spell creates one more dart for each slot level above 1st.",
      "url": "https://www.dnd-spells.com/spell/magic-missile"
    },
    "mass suggestion": {
      "castingTime": "1 Action",
      "duration": "24 hours",
      "range": "60 feet",
      "components": "Verbal, Material (a snakes tongue and either a bit of honeycomb or a drop of sweet oil)",
      "slotLevel": "6",
      "school": "Enchantment",
      "shortDescription": "On a wisdom fail, up to twelve creatures perform any reasonable action you suggest. Creatures who cant be charmed are immmune. Spell ends if target is damaged or action is performed.",
      "longDescription": "You suggest a course of activity (limited to a sentence or two) and magically influence up to twelve creatures of your choice that you can see within range and that can hear and understand you. Creatures that cant be charmed are immune to this effect. The suggestion must be worded in such a manner as to make the course of action sound reasonable. Asking the creature to stab itself, throw itself onto a spear, immolate itself, or do some other obviously harmful act automatically negates the effect of the spell. Each target must make a wisdom saving throw. On a failed save, it pursues the course of action you described to the best of its ability. The suggested course of action can continue for the entire duration. If the suggested activity can be completed in a shorter time, the spell ends when the subject finishes what it was asked to do. You can also specify conditions that will trigger a special activity during the duration. For example, you might suggest that a group of soldiers give all their money to the first beggar they meet. If the condition isnt met before the spell ends, the activity isnt performed. If you or any of your companions damage a creature affected by this spell, the spell ends for that creature. At Higher Levels: When you cast this spell using a 7th-level spell slot, the duration is 10 days. When you use an 8th-level spell slot, the duration is 30 days. When you use a 9th-level spell slot, the duration is a year and a day.",
      "url": "https://www.dnd-spells.com/spell/mass-suggestion"
    },
    "chromatic orb": {
      "castingTime": "1 Action",
      "duration": "Instantaneous",
      "range": "90 feet",
      "components": "Verbal, Somatic, Material  (a diamond worth at least 50 gold pieces)",
      "slotLevel": "1",
      "school": "Evocation",
      "shortDescription": "On a ranged spell attack success, a target takes 3d8 acid, cold, fire, lightning, poison, orth thunder damage. Damage increases by 1d8 for each slot above 1st.",
      "longDescription": "You hurl a 4-inch-diameter sphere of energy at a creature that you can see within range. You choose acid, cold, fire, lightning, poison, or thunder for the type of orb you create, and then make a ranged spell attack against the target. If the attack hits, the creature takes 3d8 damage of the type you chose. At Higher Levels: When you cast this spell using a spell slot of 2nd level or higher, the damage increases by 1d8 for each slot level above 1st.",
      "url": "https://www.dnd-spells.com/spell/chromatic-orb"
    },
    "protection from evil and good": {
      "castingTime": "1 Action",
      "duration": "Concentration, up to 10 minutes",
      "range": "Touch",
      "components": "Verbal, Somatic, Material (holy water or powdered silver and iron, which the spell consumes)",
      "slotLevel": "1",
      "school": "Abjuration",
      "shortDescription": "aberrations, celestials, elementals, fey, fiends, and undead have disadvantage on attacks against the target. The target cant be charmed, frightened, or possessed, and has advantage on saves against these conditions",
      "longDescription": "Until the spell ends, one willing creature you touch is protected against certain types of creatures: aberrations, celestials, elementals, fey, fiends, and undead. The protection grants several benefits. Creatures of those types have disadvantage on attack rolls against the target. The target also cant be charmed, frightened, or possessed by them. If the target is already charmed, frightened, or possessed by such a creature, the target has advantage on any new saving throw against the relevant effect.",
      "url": "https://www.dnd-spells.com/spell/protection-from-evil-and-good"
    },
    "major image": {
      "castingTime": "1 Action",
      "duration": "Concentration, up to 10 minutes",
      "range": "120 feet",
      "components": "Verbal, Somatic, Material (a bit of fleece)",
      "slotLevel": "3",
      "school": "Illusion",
      "shortDescription": "Create an image no larger than a 20ft cube. It seems completely real to all senses except touch. You can move it around in a way that seems natural. A creature can determine its an illusion on an Intelligence check against your spell save",
      "longDescription": "You create the image of an object, a creature, or some othervisiblephenomenonthatisnolargerthana 20-foot cube. The image appears at a spot that you can see within range and lasts for the duration. It seems completely real, including sounds, smells, and temperature appropriate to the thing depicted. You cant create sufficient heat or cold to cause damage, a sound loud enough to deal thunder damage or deafen a creature, or a smell that might sicken a creature (like a troglodytes stench). As long as you are within range of the illusion, you can use your action to cause the image to move to any other spot within range. As the image changes location, you can alter its appearance so that its movements appear natural for the image. For example, if you create an image of a creature and move it, you can alter the image so that it appears to be walking. Similarly, you can cause the illusion to make different sounds at different times, even making it carry on a conversation, for example. Physical interaction with the image reveals it to be an illusion, because things can pass through it. A creature that uses its action to examine the image can determine that it is an illusion with a successful Intelligence (Investigation) check against your spell save DC. If a creature discerns the illusion for what it is, the creature can see through the image, and its other sensory qualities become faint to the creature. At Higher Levels: When you cast this spell using a spell slot of 6th level or higher, the spell lasts until dispelled, without requiring your concentration.",
      "url": "https://www.dnd-spells.com/spell/major-image"
    },
    "warding wind": {
      "castingTime": "1 Action",
      "duration": "Concentration, up to 10 minutes",
      "range": "Self",
      "components": "Verbal",
      "slotLevel": "2",
      "school": "Evocation",
      "shortDescription": "A strong wind (20 miles per hour) blows around you in a 10-foot radius and moves with you, remaining centered on you. The wind lasts for the spells duration. The wind has the following effects: It deafens you and other creatures in its area. It extinguishes unprotected flames in its area that are torch-sized or smaller. The area is difficult terrain for creatures other than you. The attack rolls of ranged weapon attacks have disadvantage if they pass in or out of the wind. It hedges out vapor, gas, and fog that can be dispersed by strong wind.",
      "longDescription": "A strong wind (20 miles per hour) blows around you in a 10-foot radius and moves with you, remaining centered on you. The wind lasts for the spells duration. The wind has the following effects: It deafens you and other creatures in its area. It extinguishes unprotected flames in its area that are torch-sized or smaller. The area is difficult terrain for creatures other than you. The attack rolls of ranged weapon attacks have disadvantage if they pass in or out of the wind. It hedges out vapor, gas, and fog that can be dispersed by strong wind.",
      "url": "https://www.dnd-spells.com/spell/warding-wind"
    },
    "create bonfire": {
      "castingTime": "1 Action",
      "duration": "Concentration, up to 1 minute",
      "range": "60 feet",
      "components": "Verbal, Somatic",
      "slotLevel": "cantrip",
      "school": "Conjuration",
      "shortDescription": "Any creature starting, ending or moving through the 5ft cube of the bonfire takes 1d8 fire damage on a Dexterity fail.",
      "longDescription": "You create a bonfire on ground that you can see within range. Until the spells ends, the bonfire fills a 5-foot cube. Any creature in the bonfires space when you cast the spell must succeed on a Dexterity saving throw or take 1d8 fire damage. A creature must also make the saving throw when it enters the bonfires space for the first time on a turn or ends its turn there. The spells damage increases by 1d8 when you reach 5th level (2d8), 11th level (3d8), and 17th level (4d8).",
      "url": "https://www.dnd-spells.com/spell/create-bonfire",
      "damage": {
        "type": "fire damage",
        "playerLevel": {
          1: "1d8",
          2: "1d8",
          3: "1d8",
          4: "1d8",
          5: "2d8",
          6: "2d8",
          7: "2d8",
          8: "2d8",
          9: "2d8",
          10: "2d8",
          11: "3d8",
          12: "3d8",
          13: "3d8",
          14: "3d8",
          15: "3d8",
          16: "3d8",
          17: "4d8",
          18: "4d8",
          19: "4d8",
          20: "4d8"
        }
      }
    },
    "flame strike": {
      "castingTime": "1 Action",
      "duration": "Instantaneous",
      "range": "60 feet",
      "components": "Verbal, Somatic, Material (pinch of sulfur)",
      "slotLevel": "5",
      "school": "Evocation",
      "shortDescription": "Each creature in the 10foot radius by 40 foot high takes 4d6 fire and 4d6 radiant damage on a failed Dexterity save, and half as much on a success",
      "longDescription": "A vertical column of divine fire roars down from the heavens in a location you specify. Each creature in a 10-foot-radius, 40-foot-high cylinder centered on a point within range must make a Dexterity saving throw. A creature takes 4d6 fire damage and 4d6 radiant damage on a failed save, or half as much damage on a successful one. At Higher Levels: When you cast this spell using a spell slot of 6th level or higher, the fire damage or the radiant damage (your choice) increases by 1d6 for each slot level above 5th.",
      "url": "https://www.dnd-spells.com/spell/flame-strike",
      "damage": {
        "type": "fire damage and radiant damage",
        "levels": {
          1: 0,
          2: 0,
          3: 0,
          4: 0,
          5: "4d6 and 4d6",
          6: "5d6 and 4d6",
          7: "6d6 and 4d6",
          8: "7d6 and 4d6",
          9: "8d6 and 4d6"
        }
      }
    },
    "cloud of daggers": {
      "castingTime": "1 Action",
      "duration": "Concentration, up to 1 minute",
      "range": "60 feet",
      "components": "Verbal, Somatic, Material  (a sliver of glass)",
      "slotLevel": "2",
      "school": "Conjuration",
      "shortDescription": "A create takes 4d4 slashing damage the first time it moves into or starts its turn in the cloud.",
      "longDescription": "You fill the air with spinning daggers in a cube 5 feet on each side, centered on a point you choose within range. A creature takes 4d4 slashing damage when it enters the spells area for the first time on a turn or starts its turn there. At Higher Levels: When you cast this spell using . spell slot of 3rd level or higher, the damage increases by 2d4 for each slot level above 2nd.",
      "url": "https://www.dnd-spells.com/spell/cloud-of-daggers",
      "damage": {
        "type": "slashing damage",
        "levels": {
          1: 0,
          2: "4d4",
          3: "5d4",
          4: "6d4",
          5: "7d4",
          6: "8d4",
          7: "9d4",
          8: "10d4",
          9: "11d4"
        }
      }
    },
    "dispel magic": {
      "castingTime": "1 Action",
      "duration": "Instantaneous",
      "range": "120 feet",
      "components": "Verbal, Somatic",
      "slotLevel": "3",
      "school": "Abjuration",
      "shortDescription": "Any spell fo 3rd level or lower ends. Spells 4th level and up end on a successful spell check against DC + spell level.",
      "longDescription": "Choose one creature, object, or magical effect within range. Any spell of 3rd level or lower on the target ends. For each spell of 4th level or higher on the target, make an ability check using your spellcasting ability. The DC equals 10 + the spells level. On a successful check, the spell ends. Fffects of a spell on the target end if the spells level is equal to or less than the level of the spell slot you used.",
      "url": "https://www.dnd-spells.com/spell/dispel-magic"
    },
    "staggering smite": {
      "castingTime": "1 Bonus Action",
      "duration": "Concentration, up to 1 minute",
      "range": "Self",
      "components": "Verbal",
      "slotLevel": "4",
      "school": "Evocation",
      "shortDescription": "Your next attack deals 4d6 psychic damage. On a failed wisdom save the target has disadvantage on attack rolls and ability checks, and cant take reactions until the end of its next turn.",
      "longDescription": "The next time you hit a creature with a melee weapon attack during this spells duration, your weapon pierces both body and mind, and the attack deals an extra 4d6 psychic damage to the target. The target must make a Wisdom saving throw. On a failed save, it has disadvantage on attack rolls and ability checks, and cant take reactions, until the end of its next turn.",
      "url": "https://www.dnd-spells.com/spell/staggering-smite",
      "damage": {
        "type": "psychic damage",
        "levels": {
          1: 0,
          2: 0,
          3: 0,
          4: "4d6",
          5: "4d6",
          6: "4d6",
          7: "4d6",
          8: "4d6",
          9: "4d6"
        }
      }
    },
    "conjure minor elementals": {
      "castingTime": "1 Minute",
      "duration": "Concentration, up to 1 hour",
      "range": "90 feet",
      "components": "Verbal, Somatic",
      "slotLevel": "4",
      "school": "Conjuration",
      "shortDescription": "Summon up to 8 elemental beasts sharing a total of 2 challenge rating. Roll initiative as a group.",
      "longDescription": "You summon elementals that appear in unoccupied spaces that you can see within range. You choose one the 4 following options for what appears: 1) One elemental of challenge rating 2 or lower. 2) Two elementals of challenge rating 1 or lower. 3) Four elementals of challenge rating 1/2 or lower. 4) Eight elementals of challenge rating 1/4 or lower. An elemental summoned by this spell disappears when it drops to 0 hit points or when the spell ends. The summoned creatures are friendly to you and your companions. Roll initiative for the summoned creatures as a group, which has its own turns. They obey any verbal commands that you issue to them (no action required by you). If you dont issue any commands to them, they defend themselves from hostile creatures, but otherwise take no actions. The D. M. has the creatures statistics. At Higher Levels: When you cast this spell using certain higher-level spell slots, you choose one of the summoning options above, and more creatures appear: twice as many with a 6th-level slot and three times as many with an 8th-level slot.",
      "url": "https://www.dnd-spells.com/spell/conjure-minor-elementals"
    },
    "conjure animals": {
      "castingTime": "1 Action",
      "duration": "Concentration, up to 1 hour",
      "range": "60 feet",
      "components": "Verbal, Somatic",
      "slotLevel": "3",
      "school": "Conjuration",
      "shortDescription": "Summon up to 8 fey beasts sharing a total of 2 challenge levels. Roll initiative as a group. ",
      "longDescription": "You summon fey spirits that take the form of beasts and appear in unoccupied spaces that you can see within range. Choose one of the four following options for what appears: 1) One beast of challenge rating 2 or lower. 2) Two beasts of challenge rating 1 or lower. 3) Four beasts of challenge rating 1/2 or lower. 4) Eight beasts of challenge rating 1/4 or lower. Each beast is also considered fey, and it disappears when it drops to 0 hit points or when the spell ends. The summoned creatures are friendly to you and your companions. Roll initiative for the summoned creatures as a group, which has its own turns. They obey any verbal commands that you issue to them (no action required by you). If you dont issue any commands to them, they defend themselves from hostile creatures, but otherwise take no actions. The D. M. has the creatures statistics. At Higher Levels: When you cast this spell using certain higher-level spell slots, you choose one of the summoning options above, and more creatures appear: twice as many with a 5th-level slot, three times as many with a 7th-level slot, and four times as many with a 9th-level slot.",
      "url": "https://www.dnd-spells.com/spell/conjure-animals"
    },
    "storm of vengeance": {
      "castingTime": "1 Action",
      "duration": "Concentration, up to 1 minute",
      "range": "Sight",
      "components": "Verbal, Somatic",
      "slotLevel": "9",
      "school": "Conjuration",
      "shortDescription": "Effects increase by round. Round 1: Each creature less then 5000ft under the storm cloud must make a Constitution save or take 2d6 thunder damage and is deafened for 5 minutes. Round 2: Each creature takes 1d6 acid damage from rain. Round 3: Call six bolts of lightning. Up to six creatures take 10d6 lightning damage on a dex fail, half as much on a save. Round 4: Each creature takes 2d6 bludgeoning damage from hail. Rounds 5 through 10: The area becomes difficult terrain. Each creature takes 1d6 cold damage. Ranged weapon attacks are impossible. Concentraion is broken. Fog and mists are dispersed.",
      "longDescription": "A churning storm cloud forms, centered on a point you can see and spreading to a radius of 360 feet. Lightning flashes in the area, thunder booms, and strong winds roar. Each creature under the cloud (no more than 5,000 feet beneath the cloud) when it appears must make a Constitution saving throw. On a failed save, a creature takes 2d6 thunder damage and becomes deafened for 5 minutes. Each round you maintain concentration on this spell, the storm produces additional effects on your turn. Round 2. Acidic rain falls from the cloud. Each creature and object under the cloud takes 1d6 acid damage. Round 3. You call six bolts of lightning from the cloud to strike six creatures or objects of your choice beneath the cloud. A given creature or object cant be struck by more than one bolt. A struck creature must make a Dexterity saving throw. The creature takes 10d6 lightning damage on a failed save, or half as much damage on a successful one. Round 4. Hailstones rain down from the cloud. Each creature under the cloud takes 2d6 bludgeoning damage. Round 5-10. Gusts and freezing rain assail the area under the cloud. The area becomes difficult terrain and is heavily obscured. Each creature there takes 1d6 cold damage. Ranged weapon attacks in the area are impossible. The wind and rain count as a severe distraction for the purposes of maintaining concentration on spells. Finally, gusts of strong wind (ranging from 20 to 50 miles per hour) automatically disperse fog, mists, and similar phenomena in the area, whether mundane or magical.",
      "url": "https://www.dnd-spells.com/spell/storm-of-vengeance",
      "damage": "Complex Damage Progression. Please consult short or long descriptions"
    },
    "find traps": {
      "castingTime": "1 Action",
      "duration": "Instantaneous",
      "range": "120 feet",
      "components": "Verbal, Somatic",
      "slotLevel": "2",
      "school": "Divination",
      "shortDescription": "You sense the presence, but not the location, of traps within line of sight.",
      "longDescription": "You sense the presence of any trap within range that is within line of sight. A trap, for the purpose of this spell, includes anything that would inflict a sudden or unexpected effect you consider harmful or undesirable, which was specifically intended as such by its creator. Thus, the spell would sense an area affected by the alarm spell, aglyph ofwarding,or a mechanical pit trap, but it would not reveal a natural weakness in the floor, an unstable ceiling, or a hidden sinkhole. This spell merely reveals that a trap is present. You dont learn the location of each trap, but you do learn the general nature of the danger posed by a trap you sense.",
      "url": "https://www.dnd-spells.com/spell/find-traps"
    },
    "sunbeam": {
      "castingTime": "1 Action",
      "duration": "Concentration, up to 1 minute",
      "range": "Self (60-foot line)",
      "components": "Verbal, Somatic, Material (a magnifying glass)",
      "slotLevel": "6",
      "school": "Evocation",
      "shortDescription": "A 5ft by 60ft beam of light flashes from your hand. On a failed Constitution save, each creature is blinded until your next turn and takes 6d8 radiant damage. The targets arent blinded and take half damage on a successful save. Undead and oozes have disadvantage",
      "longDescription": "A beam of brilliant light flashes out from your hand in a 5-foot-wide, 60-foot-long line. Each creature in the line must make a Constitution saving throw. On a failed save, a creature takes 6d8 radiant damage and is blinded until your next turn. On a successful save, it takes half as much damage and isnt blinded by this spell. Undead and oozes have disadvantage on this saving throw. You can create a new line of radiance as your action on any turn until the spell ends. For the duration, a mote of brilliant radiance shines in your hand. It sheds bright light in a 30-foot radius and dim light for an additional 30 feet. This light is sunlight.",
      "url": "https://www.dnd-spells.com/spell/sunbeam",
      "damage": {
        "type": "radiant damage",
        "levels": {
          1: 0,
          2: 0,
          3: 0,
          4: 0,
          5: 0,
          6: "6d8",
          7: "6d8",
          8: "6d8",
          9: "6d8"
        }
      }
    },
    "detect poison and disease": {
      "castingTime": "1 Action",
      "duration": "Concentration, up to 10 minutes",
      "range": "Self",
      "components": "Verbal, Somatic, Material  (a yew leaf)",
      "slotLevel": "1",
      "school": "Divination",
      "shortDescription": "You see the location and kind of posions, posionous creatures, and diseases within 30ft.",
      "longDescription": "For the duration, you can sense the presence and location of poisons, poisonous creatures, and diseases within 30 feet of you. You also identify the kind of poison, poisonous creature, or disease in each case. The spell can penetrate most barriers, but it is blocked by 1 foot of stone, 1 inch of common metal, a thin sheet of lead, or 3 feet of wood or dirt.",
      "url": "https://www.dnd-spells.com/spell/detect-poison-and-disease"
    }
  }
};