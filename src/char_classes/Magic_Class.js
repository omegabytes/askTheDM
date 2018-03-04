import {Char_Class} from "./Char_Class";

class Magic_Class extends Char_Class {
	constructor(charClass) {
		// spells
		let spellList;
		let spellSaveDC = charClass.class_spellcasting_ability.spell_save_dc;
		let spellAttackMod = charClass.class_spellcasting_ability.spell_attack_mod;
		let SpellFocus = charClass.class_spellcasting_ability.spell_focus;

		super();
	}

	// get spell list
	getSpellList() {
		// parse the spells json and add any spells that match this.className
		// "spellClass": ["druid", "sorcerer", "wizard"],
		this.spellList = [];
	}

	// list spells available at the slot level
	// params: slot level
	// output: list of spells
	getSpellsAtSlotLevel(slotLevel) {

	}

}