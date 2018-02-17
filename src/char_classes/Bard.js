var languageStrings = require('./languageStrings');
var langEN          = languageStrings.en.translation;
var char_classes    = langEN.CLASSES;

// todo: add con mod param, prompt user for it
function Bard(prof_bo, char_mod, con_mod) {
    this.prof_bonus = prof_bo;
    this.cha_mod = char_mod;
    this.con_mod = con_mod;

    // class_desc
    this.short_description = char_classes.bard.class_description.shortDesc; // short
    this.long_description  = char_classes.bard.class_description.longDesc;  // long

    // health
    // todo: use con mod param to help generate these values
    this.hit_dice = "1d8";                  // hit dice
    this.first_level = 8 + this.con_mod;    // 1st level ("plus your con modifier)
    this.avg_increase_per_level = 5;        // average scaling at higher levels

    // primary abilities, descending priority
    this.rec_abilities = ["Charisma", "Dexterity"];   // recommended primary abilities
    this.rec_background = ["Entertainer"];            // recommended background
    this.rec_starting_spells = ["vicious mockery", "dancing lights", "charm person", "detect magic", "healing word", "thunderwave"];

    // proficiencies
    this.armor_prof = ["light armor"];  // armor fixme:items.itemType['light armor']
    this.weapon_prof = ["Simple weapon", "hand crossbows", "longswords", "rapiers", "shortswords"]; // weapon fixme: 'simple weapon' is item.itemType['simple melee weapon']
    this.tool_prof = [];    // fixme: items.itemType['musical instrument'] for list of all musical instruments
    this.saving_throw_prof = ["Charisma", "Dexterity"]; // saving throw proficiency
    this.skill_prof = [];   // skills, fixme: prompt user to choose, any three

    // equipment
    this.starting_equipment = ["leather armor", "dagger"]; // starting pack
    this.weapon_choices = ["rapier", "longsword", "any simple weapon"]; // weapon choices fixme: how to handle 'any simple weapon'? list all of them is probably it
    this.equip_pack_1 = { // fixme: split these into item name : quantity
        "name" : "diplomat\'s pack",
        "items" : ["chest", "case", "case", "fine clothes", "bottle of ink", "ink pen", "lamp", "flask of oil", "flask of oil", "sheet of paper", "sheet of paper", "sheet of paper", "sheet of paper", "sheet of paper", "vial of perfume", "sealing wax", "soap"]
    };
    this.equip_pack_2 = { // fixme: split these into item name : quantity
        "name" : "entertainer\'s pack",
        "items" : ["backpack", "bedroll", "costume", "costume", "5 candles", "5 days of rations", "waterskin", "disguise kit"]
    };
    // other equipment
    // put recommended items first, followed by all possible items?
    // fixme: items.itemType['musical instrument']
    this.musical_inst = ["lute", "bagpipes", "drums", "dulcimer", "flute", "lyre", "horn", "pan flute", "shawm", "viol"];

    // list of spells
    this.class_spells = function () { //todo: implement this function
        // gets array of spells
        // iterate through the list of spells in spells.js, grabbing any spell where
        // [spell].spellClass.bard == true
        // this just compiles an array of spell objects, we will use other methods for user input/output
    }

    // spellcasting ability
    this.spell_save_dc = 8 + this.prof_bonus + this.cha_mod;  // spell save dc
    this.spell_attack_mod = this.prof_bonus + this.cha_mod;   // spell attack modifier
    this.spell_focus = this.musical_inst;                     // spell focus

    // class features
    // class skills
    // subclasses
}

