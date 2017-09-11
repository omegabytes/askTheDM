import json
import re 

damageRE = re.compile('(\d+(d)\d+\s(\w)+\s(damage)+)')
doubleDamageRE = re.compile('((\d+(d)\d+\s(\w)+\s(damage)+)\s(and)\s(\d+(d)\d+\s(\w)+\s(damage)+))')
schoolTypeRE = re.compile('(([Aa]bjuration|[Cc]onjuration|[Dd]ivination|[Ee]nchantment|[Ee]vocation|[Ii]llusion|[Nn]ecromancy|[Tt]ransmutation))')
increaseDmgByRE = re.compile('((damage|healing)+\s+increases+\s+by+\s+(\d+d+\d{1,2})+\s+for+\s+each+\s+slot+\s+level+\s+above+\s+(\d+(st|nd|rd|th)))')
cantripIncByRE = re.compile('')
requiredSlotRE = re.compile('(([Ll]evel)+\s+\d)')
higherLevelsRE = re.compile('([Aa]t+\s+[Hh]igher+\s+[Ll]evels+\:+\s+.*)')
damageNumRE = re.compile('(\d+d+\d{1,2})')


'''with open('spells.json', encoding="utf8") as f:
    spelljs = json.load(f)'''
#this above 'open' statement was causing errors because it does not contain 'damage'



#this 'open' statement allows for further progress because it has 'damage' and other elements we might need
#feel free to change the file with just spells_with_damage.json , just needs to contain 'damage' attribute
with open('spells_with_damage2.json', encoding="utf8") as f:
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


	if increaseDmgByRE.findall(temp["longDescription"]):		
		higherSlots = increaseDmgByRE.findall(temp["longDescription"])

		#take a look at prismatic spray
		incBy = higherSlots[0][2]
		incAt = higherSlots[0][3]
		
		if damageNumRE.findall(temp["longDescription"]): #if damage is not empty do below
			damageNum = damageNumRE.findall(temp["longDescription"])
			#print(damageNum) #need to work more on spells that have two damage effects(ie: 'ice storm')
			initialDmg = damageNum[0]
	else:
		incBy = None
		initialDmg = None
		incAt = None

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

	#==testing purposes==#
	print("====spell name:"+spell+"====")
	print(initialDmg)
	print(incAt)
	print(incBy)
	print(spellSlot)
	#====================#
	
	#work on how to access 'damage': , specifically "levels"
	#todo: needs more work
	#print(temp['damage'][0]['level1']) #the 0 is the 0th element in the damage list
	if spellSlot == 'level 1' and not initialDmg:
		level1 = temp['damage'][0]['level1']
		print(level1)
		level1 = initialDmg
	elif spellSlot == 'level 2' and not initialDmg:
		level2 = temp['damage'][0]['level2']
		level2 = initialDmg
	elif spellSlot == 'level 3' and not initialDmg:
		level3 = temp['damage'][0]['level3']
		level3 = initialDmg
	elif spellSlot == 'level 4' and not initialDmg:
		level4 = temp['damage'][0]['level4']
		level4 = initialDmg
	elif spellSlot == 'level 5' and not initialDmg:
		level5 = temp['damage'][0]['level5']
		level5 = initialDmg
	elif spellSlot == 'level 6' and not initialDmg:
		level6 = temp['damage'][0]['level6']
		print(level6)
		level6 = initialDmg
	elif spellSlot == 'level 7' and not initialDmg:
		level7 = temp['damage'][0]['level7']
		level7 = initialDmg
	elif spellSlot == 'level 8' and not initialDmg:
		level8 = temp['damage'][0]['level8']
		level8 = initialDmg
	elif spellSlot == 'level 9' and not initialDmg:
		level9 = temp['damage'][0]['level9']
		level9 = initialDmg
	else:
		level1 = "You cannot cast this spell using that level spell slot."
		level2 = "You cannot cast this spell using that level spell slot."
		level3 = "You cannot cast this spell using that level spell slot."
		level4 = "You cannot cast this spell using that level spell slot."
		level5 = "You cannot cast this spell using that level spell slot."
		level6 = "You cannot cast this spell using that level spell slot."
		level7 = "You cannot cast this spell using that level spell slot."
		level8 = "You cannot cast this spell using that level spell slot."
		level9 = "You cannot cast this spell using that level spell slot."
	#print("test:"+level1)



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
	            			'initial' : initialDmg, #not sure if we want to just list the damage dice number or what we have now (ie: '8d6 fire damage')
	            			'increaseBy' : incBy, #atHigherLevels
	            			'level1' : level1,
	            			'level2' : level2,
	            			'level3' : level3,
	            			'level4' : level4,
	            			'level5' : level5,
	            			'level6' : level6,
	            			'level7' : level7,
	            			'level8' : level8,
	            			'level9' : level9	            			
	            		}
	            	]
	            }
	        }
	    )

with open('spells_with_damage2.json', 'w') as f:
    json.dump(newjson,f, indent=2)