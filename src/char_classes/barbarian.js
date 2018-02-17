module.exports = {
  "barbarian": {
    "class_description": {
      "shortDesc": "The relentless combatant, fueled by fury or it's totem bonds with animals. In tune with the natural order.",
      "longDesc": "The barbarian is a primal warrior who prefers to charge in to engage foes in melee. They can follow either the Path of the Berserker, focusing on dealing as much damage as possible in melee combat, or the Path of the Totem Warrior, accepting an animal as a spiritual guide for a more druid-like experience."
    },
    "class_hit_point": {
      "hit_dice": "1d12",
      "1st_level": "12 plus your Constitution modifier.",
      "higher_levels": "Based on average rolls, 7 plus your Constitution modifier."
    },
    "class_primary_ability": {
      "ability_scores": "Recommended to choose Strength, followed by Constitution as your highest ability scores.",
      "background": "It is advised to take the outlander background for your character.",
      "starting_spells": "Barbarians do not have the ability to cast spells."
    },
    "class_proficiencies": {
      "armor_prof": [
        "Light armor",
        "medium armor",
        "shields"
      ],
      "weapon_prof": [
        "Simple weapons",
        "Martial weapons"
      ],
      "tools": [""],
      "saving_throw_prof": [
        "Strength",
        "Constitution"
      ],
      "skills": ["Choose two from either Animal Handling, Athletics, Intimidation, Nature, Perception, or Survival."]
    },
    "equipment": {
      "welcome_msg": "Your character starts with the any of the following equipment, in addition to the equipment granted by your chosen background.",
      "starting_pack": "An explorer's pack and four javelins.",
      "weapons_1": "A greataxe.",
      "weapons_2": "Any martial melee weapon.",
      "weapons_3": "Two handaxes.",
      "weapons_4": "Any simple weapon.",
      "equipment_pack_1": " Includes a backpack, a bedroll, a mess kit, a tinderbox, 10 torches, 10 days of rations, and a waterskin. The pack also has 50 feet of hempen rope strapped to the side of it."
    },
    "class_spells": {},
    "class_spellcasting_ability": {
      "spell_save_dc": "",
      "spell_attack_mod": "",
      "spell_focus": ""
    },
    "class_features": {
      "rage": {
        "description": "You fight with primal ferocity. On your turn, you can enter a rage as a bonus action. Your rage lasts for 1 minute.",
        "more_info": "If you are able to cast spells, you can't cast or concentrate on them while raging. Your rage ends early if you are knocked unconscious or if your turn ends and you havent attacked a hostile creature since your last turn or havent taken damage since then.",
        "benefits": "You have advantage on Strength checks and Strength saving throws. When you make a melee weapon attack using Strength, you gain a bonus to the damage roll that increases based on your barbarian level. You have resistance to bludgeoning, piercing, and slashing damage.",
        "rages": {
          "1": "2",
          "3": "3",
          "6": "4",
          "12": "5",
          "17": "6",
          "20": "unlimited"
        },
        "rage_damage": {
          "1": "+2",
          "9": "+3",
          "16": "+4"
        },
        "replenish": "Once you have used all your rage, which is based on your player level. You must finish a long rest before you can rage again."
      },
      "unarmored defense": "While you are not wearing any armor, your armor class equals 10 plus your Dexterity modifier. plus your Constitution modifier. You can still use a shield and have this benefit.",
      "reckless attack": "Starting at 2nd level, you can throw aside all concern for defense to attack with fierce desperation. When you make your first attack on your turn, you can decide to attack recklessly. Doing so gives you advantage on melee weapon attack rolls using Strength during this turn, but attack rolls against you have advantage until your next turn.",
      "danger sense": "At 2nd level, you gain an uncanny sense of when things nearby arent as they should be, giving you an edge when you dodge away from danger. You have advantage on Dexterity saving throws against effects that you can see, such as traps and spells. To gain this benefit, you can't be blinded, deafened, or incapacitated."
    },
    "subclass": {
      "primal path": {
        "description": "At 3rd level, you choose a path that shapes the nature of your rage.",
        "path of the berserker": {
          "description": "For some barbarians, rage is a means to an end, that end being violence. The path of the berserker is a path of untrammeled fury, slick with blood. As you enter the berserker's rage, you thrill in the chaos of battle, heedless of your own health or well-being.",
          "frenzy": "Starting when you choose this path at 3rd level, you can go into a frenzy when you rage. If you do so, for the duration of your rage you can make a single melee weapon attack as a bonus action on each of your turns after this one. When your rage ends, you suffer one level of exhaustion.",
          "mindless rage": "Beginning at 6th level, you cant be charmed or frightened while raging. If you are charmed or frightened when you enter your rage, the effect is suspended for the duration of the rage.",
          "intimidating presence": "Beginning at 10th level, you can use your action to frighten someone with your menacing presence. When you do so, choose one creature that you can see within 30ft of you. IF the creature can see or hear you, it must succeed on a Wisdom saving throw, the DC is equal to 8 plus your proficiency bonus plus your Charisma modifier., or be frightened of you until the end of your next turn. On subsequent turns, you can use your action to extend the duration of this effect on the frightened creature until the end of your next turn. This effect ends if the creature ends its turn out of line of sight or more than 60ft away from you. If the creature succeeds on its saving throw, you cant use this feature on that creature again for 24 hours.",
          "retaliation": "Starting at 14th level, when you take damage from a creature that is within 5ft of you, you can use your reaction to make a melee weapon attack against that creature."
        },
        "path of the totem warrior": {
          "description": "The path of the totem warrior is a spiritual journey as the barbarian accepts a spirit animal as a guide, protector, and inspiration. In battle, your totem spirit fills you with supernatural might, adding magical fuel to your barbarian rage.",
          "spirit seeker": "At 3rd level when you adopt this path, you gain the ability to cast the beast sense and speak with animals spells, but only as rituals.",
          "totem spirit": {
            "description": "At 3rd level, when you adopt this path, you choose a totem spirit and gain its feature. You must make or acquire a physical totem object, an amulet or similar adornment, that incorporates fur or feathers, claws, teeth, or bones of the totem animal. At your option, you also gain minor physical attributes that are reminiscent of your totem spirit.",
            "animal_spirits": {
              "bear": "The spirit of the bear makes you tough enough to stand up to any punishment. While raging, you have resistance to all damage except psychic damage.",
              "eagle": "The spirit of the eagle makes you into a predator who can weave through the fray with ease. While youre raging and arent wearing heavy armor, other creatures have disadvantage on opportunity attack rolls against you, and you can use the Dash action as a bonus action on your turn.",
              "wolf": "The spirit of the wolf makes you a leader of hunters. While youre raging your friends have advantage on melee attack rolls against any creature within 5ft of you that is hostile to you."
            }
          },
          "aspect of the beast": {
            "description": "At 6th level, you gain a magical benefit based on the totem animal of your choice. You can choose the same animal you selected at 3rd level or a different one.",
            "animal_spirits": {
              "bear": "You gain the might of a bear. Your carrying capacity is doubled, and you have advantage on Strength checks made to push, pull, lift, or break objects.",
              "eagle": "You gain the eyesight of an eagle. You can see up to 1 mile away with no difficulty, able to discern even fine details as though looking at something no more than 100ft away from you. Additionally, dim light doesnt impose disadvantage on your Wisdom(Perception) checks.",
              "wolf": "You gain the hunting sensibilities of a wolf. You can track other creatures while traveling at a fast pace, and you can move stealthily while traveling at a normal pace."
            }
          },
          "spirit walker": "At 10th level, you can cast the commune with nature spell, but only as a ritual. When you do so, a spirit version of one of the animals you chose for Totem Spirit or Aspect of the Beast appears to you to convey the information you seek.",
          "totemic attunement": {
            "description": "At 14th level, you gain a magical benefit based on a totem animal of your choice. You can choose the same animal you selected previously or a different one.",
            "animal_spirits": {
              "bear": "While youre raging, any creature within 5ft of you thats hostile to you has disadvantage on attack rolls against targets other than you or another character with this feature. An enemy is immune to this effect if it cant see or hear you or if it cant be frightened.",
              "eagle": "While raging, you have a flying speed equal to your current walking speed. This benefit works only in short bursts: you fall if you end your turn in the air and nothing else is holding you aloft.",
              "wolf": "While youre raging, you can use a bonus action on your turn to knock a Large or smaller creature prone when you hit it with a melee weapon attack."
            }
          }
        }
      }
    },
    "extra attack": "Beginning at 5th level, you can attack twice, instead of once, whenever you take the Attack action on your turn.",
    "ability_score_improvement": {
      "4": "Increase one ability score by 2, or increase 2 ability scores by 1.",
      "8": "Increase one ability score by 2, or increase 2 ability scores by 1.",
      "12": "Increase one ability score by 2, or increase 2 ability scores by 1.",
      "16": "Increase one ability score by 2, or increase 2 ability scores by 1.",
      "19": "Increase one ability score by 2, or increase 2 ability scores by 1."
    },
    "fast movement": "Starting at 5th level, your speed increases by 10ft while you arent wearing heavy armor.",
    "feral instinct": "By 7th level, your instincts are so honed that you have advantage on initiative rolls. Additionally, if you are surprised at the beginning of combat and arent incapacitated, you can act normally on your first turn, but only if you enter your rage before doing anything else on that turn.",
    "brutal critical": "Beginning at 9th level, you can roll one additional weapon damage die when determining the extra damage for a critical hit with a melee attack. This increases to two additional dice at 13th level, and three additional dice at 17th level.",
    "relentless rage": "Starting at 11th level, your rage can keep you fighting despite grievous wounds. If you drop to 0 hit points while you are raging and dont die outright, you can make a DC 10 Constitution saving throw. If you succeed, you drop to 1 hit point instead. Each time you use this feature after the first, the DC increases by 5. When you finish a short or long rest, the DC resets to 10.",
    "persistent rage": "Beginning at 15th level, your rage is so fierce that it ends early only if you fall unconscious or if you choose to end it.",
    "indomitable might": "Beginning at 18th level, if your total for a Strength check is less than your Strength score, you can use that score in place of the total.",
    "primal champion": "At 20th level, you embody the power of the wilds. Your Strength and Constitution scores increase by 4. Your maximum for those scores is now 24."
  }
};