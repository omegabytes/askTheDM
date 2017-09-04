import json
import re 

damageRE = re.compile('(\d+(d)\d+\s(\w)+\s(damage)+)')
doubleDamageRE = re.compile('((\d+(d)\d+\s(\w)+\s(damage)+)\s(and)\s(\d+(d)\d+\s(\w)+\s(damage)+))')
schoolTypeRE = re.compile('(([Aa]bjuration|[Cc]onjuration|[Dd]ivination|[Ee]nchantment|[Ee]vocation|[Ii]llusion|[Nn]ecromancy|[Tt]ransmutation))')
increaseByEvoRE = re.compile('((damage|healing)+\s+increases+\s+by+\s+(\d+d+\d)+\s+for+\s+each+\s+slot+\s+level+\s+above+\s+(\d+(st|nd|rd|th)))')
requiredSlotRE = re.compile('(([Ll]evel)+\s+\d)')
higherLevelsRE = re.compile('([Aa]t+\s+[Hh]igher+\s+[Ll]evels+\:+\s+.*)')
damageNumRE = re.compile('(\d+d+\d)')


with open('spells.json', encoding="utf8") as f:
    spelljs = json.load(f)

newjson = {}

for spell in spelljs:
	temp = spelljs[spell]

	if damageRE.findall(temp["longDescription"]):
		if doubleDamageRE.findall(temp["longDescription"]):
			damage = doubleDamageRE.findall(temp["longDescription"])[0][0]
		else:
			damage = damageRE.findall(temp["longDescription"])
			if len(damage)==1:
				damage = damage[0][0]
			elif damage[0][0] == damage[1][0]:
				damage = damage[0][0]
	else:
		damage = None

	if schoolTypeRE.findall(temp["spellType"]):
		school = schoolTypeRE.findall(temp["spellType"])[0][0]
		#print(school)
		if len(school)==1:
			school = school[0]
		#for spell in spellsjs:
		

	if increaseByEvoRE.findall(temp["longDescription"]):
		#print(increaseByEvoRE.findall(temp["longDescription"])) prints regex from desc
		higherSlots = increaseByEvoRE.findall(temp["longDescription"])
		#print(higherSlots[0][2]) prints dmg roll
		#print(higherSlots[0][3]) prints slot level
		incBy = higherSlots[0][2]
		incAt = higherSlots[0][3]
		print("incAt:"+incAt)
		print("incBy:"+incBy)
		print("spell name:"+spell)
		if not damage:
			#damageNum =          //needs to be logically fleshed out, will search in damages using the regex above('findall-damages') -Josh
			print("damage:"+damageNum)

		#if increaseByEvoRE.findall(temp["longDescription"]):

	else:
		incBy = None


		''' regex testing logic
		for i,val in enumerate(higherSlots):
			print(val) #prints higherslots info
			incBy = higherSlots[0][2]
			print(incBy) #prints 1d4 for example
			incAt = higherSlots[0][3]
			print(incAt) #prints slot level damage increases at
		'''



	if requiredSlotRE.findall(temp["spellType"]):
		spellSlot = requiredSlotRE.findall(temp["spellType"])[0][0]
		if len(spellSlot)==1:
			spellSlot = spellSlot[0]

	if higherLevelsRE.findall(temp["longDescription"]):
		#print(higherLevelsRE.findall(temp["longDescription"]))
		atHigherLevels = higherLevelsRE.findall(temp["longDescription"])[0][0]
		if len(atHigherLevels)==1:
			atHigherLevels = atHigherLevels[0]

	newjson.update(
	    {
	        spell : {
	            'castingTime' : temp["castingTime"],
	            'duration' : temp["duration"],
	            'range' : temp["range"],
	            'components' : temp["components"],
	            'spellType' : temp["spellType"],
	            'schoolType' : school,
	            'spellSlot' : spellSlot,
	            'shortDescription' : temp["shortDescription"],
	            'longDescription' : temp["longDescription"],
	            'url' : temp["url"],
	            'damage': [
	            		{
	            			'initial' : damage,
	            			'increaseBy' : incBy, #atHigherLevels, #not defined
	            			'level1' : "",
	            			'level2' : "",
	            			'level3' : "",
	            			'level4' : "",
	            			'level5' : "",
	            			'level6' : "",
	            			'level7' : "",
	            			'level8' : "",
	            			'level9' : ""	            			
	            		}
	            	]
	            }
	        }
	    )

with open('spells_with_damage2.json', 'w') as f:
    json.dump(newjson,f, indent=2)