import json
import re 

damageRE = re.compile('(\d+(d)\d+)')
typeRE = re.compile('((\w)+\s(damage)+)')
initialRE = re.compile('((\w)+\s(damage)+\s(\w)+\s(\w+)\s(\d+(d)\d+)(.*))')
startLevelRE = re.compile('((?:(level)\s(above)\s)(\w))')
singleDigitRE = re.compile('(\d+(?:d-|))')


with open('spells_with_damage.json', encoding="utf8") as f:
    spelljs = json.load(f)

newjson = {}

for spell in spelljs:
	temp = spelljs[spell]
	if temp["damage"]:
		damage = damageRE.findall(temp["damage"])
		damageType = typeRE.findall(temp["damage"])

		initialString = initialRE.findall(temp["longDescription"])
		startLevel = startLevelRE.findall(temp["longDescription"])
		if(len(startLevel)>0):
			startLevel = startLevel[0][3]
		else:
			startLevel = "Broken"

		if(len(initialString)>0):
			initialString = initialString[0][0]
			increaseBy = damageRE.findall(initialString)
			increaseString = ""
			if(len(increaseBy)>1 and increaseBy[0][0] != increaseBy[1][0]):
				for element in increaseBy:
					increaseString += element[0] + ' '
			else:
				increaseString = increaseBy[0][0]
		else:
			increaseString = "might be wrong"

		if(len(damageType)>0):
			if(len(damageType)>1 and damageType[0][0] != damageType[1][0]):
				damageType = damageType[0][0] + ' and ' + damageType[1][0]
			else:
				damageType = damageType[0][0]
		else:
			damageType="Fix this"

		if(len(damage)==0 and len(damageType)>0):
			damage=temp["damage"]
			damageType=None
		else:
			if(len(damage)>1 and damage[0][0] != damage[1][0]):
				damage = damage[0][0] + ' and ' + damage[1][0]
			else:
				damage = damage[0][0]


		if(startLevel!="Broken"):
			if(startLevel=="1"):
				numberOfDice = singleDigitRE.findall(damage)[0]
				sidesOfDice = singleDigitRE.findall(damage)[1]
				numberOfDice = int(numberOfDice)
				if(len(typeRE.findall(damageType))>1):
					sidesOfDice += " Enter Dice Manuelly"
				newjson.update(
			    {
			        spell : {
			            'castingTime' : temp["castingTime"],
			            'duration' : temp["duration"],
			            'range' : temp["range"],
			            'components' : temp["components"],
			            'spellType' : temp["spellType"],
			            'shortDescription' : temp["shortDescription"],
			            'longDescription' : temp["longDescription"],
			            'url' : temp["url"],
			            'damage': {
			            	'type': damageType,
			            	'levels' : {
			            		'one' : str(numberOfDice) + 'd' + sidesOfDice,
			            		'two' : str(numberOfDice+1) + 'd' + sidesOfDice,
			            		'three': str(numberOfDice+2) + 'd' + sidesOfDice,
			            		'four': str(numberOfDice+3) + 'd' + sidesOfDice,
			            		'five': str(numberOfDice+4) + 'd' + sidesOfDice,
			            		'six': str(numberOfDice+5) + 'd' + sidesOfDice,
			            		'seven': str(numberOfDice+6) + 'd' + sidesOfDice,
			            		'eight':str(numberOfDice+7) + 'd' + sidesOfDice,
			            		'nine':str(numberOfDice+8) + 'd' + sidesOfDice		            		
			            		}
			            	}
			            }
			        }
		    	)					
			elif(startLevel=="2"):
				numberOfDice = singleDigitRE.findall(damage)[0]
				sidesOfDice = singleDigitRE.findall(damage)[1]
				numberOfDice = int(numberOfDice)
				if(len(typeRE.findall(damageType))>1):
					sidesOfDice += " Enter Dice Manuelly"
				newjson.update(
			    {
			        spell : {
			            'castingTime' : temp["castingTime"],
			            'duration' : temp["duration"],
			            'range' : temp["range"],
			            'components' : temp["components"],
			            'spellType' : temp["spellType"],
			            'shortDescription' : temp["shortDescription"],
			            'longDescription' : temp["longDescription"],
			            'url' : temp["url"],
			            'damage': {
			            	'type': damageType,
			            	'levels' : {
			            		'one' : 0,
			            		'two' : str(numberOfDice) + 'd' + sidesOfDice,
			            		'three': str(numberOfDice+1) + 'd' + sidesOfDice,
			            		'four': str(numberOfDice+2) + 'd' + sidesOfDice,
			            		'five': str(numberOfDice+3) + 'd' + sidesOfDice,
			            		'six': str(numberOfDice+4) + 'd' + sidesOfDice,
			            		'seven': str(numberOfDice+5) + 'd' + sidesOfDice,
			            		'eight':str(numberOfDice+6) + 'd' + sidesOfDice,
			            		'nine':str(numberOfDice+7) + 'd' + sidesOfDice		            		
			            		}
			            	}
			            }
			        }
		    	)
			elif(startLevel=="3"):
				numberOfDice = singleDigitRE.findall(damage)[0]
				sidesOfDice = singleDigitRE.findall(damage)[1]
				numberOfDice = int(numberOfDice)
				if(len(typeRE.findall(damageType))>1):
					sidesOfDice += " Enter Dice Manuelly"
				newjson.update(
			    {
			        spell : {
			            'castingTime' : temp["castingTime"],
			            'duration' : temp["duration"],
			            'range' : temp["range"],
			            'components' : temp["components"],
			            'spellType' : temp["spellType"],
			            'shortDescription' : temp["shortDescription"],
			            'longDescription' : temp["longDescription"],
			            'url' : temp["url"],
			            'damage': {
			            	'type': damageType,
			            	'levels' : {
			            		'one' : 0,
			            		'two' : 0,
			            		'three': str(numberOfDice) + 'd' + sidesOfDice,
			            		'four': str(numberOfDice+1) + 'd' + sidesOfDice,
			            		'five': str(numberOfDice+2) + 'd' + sidesOfDice,
			            		'six': str(numberOfDice+3) + 'd' + sidesOfDice,
			            		'seven': str(numberOfDice+4) + 'd' + sidesOfDice,
			            		'eight':str(numberOfDice+5) + 'd' + sidesOfDice,
			            		'nine':str(numberOfDice+6) + 'd' + sidesOfDice		            		
			            		}
			            	}
			            }
			        }
		    	)
			elif(startLevel=="4"):
				numberOfDice = singleDigitRE.findall(damage)[0]
				sidesOfDice = singleDigitRE.findall(damage)[1]
				numberOfDice = int(numberOfDice)
				if(len(typeRE.findall(damageType))>1):
					sidesOfDice += " Enter Dice Manuelly"
				newjson.update(
			    {
			        spell : {
			            'castingTime' : temp["castingTime"],
			            'duration' : temp["duration"],
			            'range' : temp["range"],
			            'components' : temp["components"],
			            'spellType' : temp["spellType"],
			            'shortDescription' : temp["shortDescription"],
			            'longDescription' : temp["longDescription"],
			            'url' : temp["url"],
			            'damage': {
			            	'type': damageType,
			            	'levels' : {
			            		'one' : 0,
			            		'two' : 0,
			            		'three': 0,
			            		'four': str(numberOfDice) + 'd' + sidesOfDice,
			            		'five': str(numberOfDice+1) + 'd' + sidesOfDice,
			            		'six': str(numberOfDice+2) + 'd' + sidesOfDice,
			            		'seven': str(numberOfDice+3) + 'd' + sidesOfDice,
			            		'eight':str(numberOfDice+4) + 'd' + sidesOfDice,
			            		'nine':str(numberOfDice+5) + 'd' + sidesOfDice		            		
			            		}
			            	}
			            }
			        }
		    	)
			elif(startLevel=="5"):
				numberOfDice = singleDigitRE.findall(damage)[0]
				sidesOfDice = singleDigitRE.findall(damage)[1]
				numberOfDice = int(numberOfDice)
				if(len(typeRE.findall(damageType))>1):
					sidesOfDice += " Enter Dice Manuelly"
				newjson.update(
			    {
			        spell : {
			            'castingTime' : temp["castingTime"],
			            'duration' : temp["duration"],
			            'range' : temp["range"],
			            'components' : temp["components"],
			            'spellType' : temp["spellType"],
			            'shortDescription' : temp["shortDescription"],
			            'longDescription' : temp["longDescription"],
			            'url' : temp["url"],
			            'damage': {
			            	'type': damageType,
			            	'levels' : {
			            		'one' : 0,
			            		'two' : 0,
			            		'three': 0,
			            		'four': 0,
			            		'five': str(numberOfDice) + 'd' + sidesOfDice,
			            		'six': str(numberOfDice+1) + 'd' + sidesOfDice,
			            		'seven': str(numberOfDice+2) + 'd' + sidesOfDice,
			            		'eight':str(numberOfDice+3) + 'd' + sidesOfDice,
			            		'nine':str(numberOfDice+4) + 'd' + sidesOfDice		            		
			            		}
			            	}
			            }
			        }
		    	)

			elif(startLevel=="6"):
				numberOfDice = singleDigitRE.findall(damage)[0]
				sidesOfDice = singleDigitRE.findall(damage)[1]
				numberOfDice = int(numberOfDice)
				if(len(typeRE.findall(damageType))>1):
					sidesOfDice += " Enter Dice Manuelly"
				newjson.update(
			    {
			        spell : {
			            'castingTime' : temp["castingTime"],
			            'duration' : temp["duration"],
			            'range' : temp["range"],
			            'components' : temp["components"],
			            'spellType' : temp["spellType"],
			            'shortDescription' : temp["shortDescription"],
			            'longDescription' : temp["longDescription"],
			            'url' : temp["url"],
			            'damage': {
			            	'type': damageType,
			            	'levels' : {
			            		'one' : 0,
			            		'two' : 0,
			            		'three': 0,
			            		'four': 0,
			            		'five': 0,
			            		'six': str(numberOfDice) + 'd' + sidesOfDice,
			            		'seven': str(numberOfDice+1) + 'd' + sidesOfDice,
			            		'eight':str(numberOfDice+2) + 'd' + sidesOfDice,
			            		'nine':str(numberOfDice+3) + 'd' + sidesOfDice		            		
			            		}
			            	}
			            }
			        }
		    	)
		else:
			if(startLevel=="Broken" and increaseString=="might be wrong"):
				newjson.update(
			    {
			        spell : {
			            'castingTime' : temp["castingTime"],
			            'duration' : temp["duration"],
			            'range' : temp["range"],
			            'components' : temp["components"],
			            'spellType' : temp["spellType"],
			            'shortDescription' : temp["shortDescription"],
			            'longDescription' : temp["longDescription"],
			            'url' : temp["url"],
			            'damage': "Complex Damage Progression. Please consult short or long descriptions"
			            }
			        }
		    	)
			else:	
				newjson.update(
			    {
			        spell : {
			            'castingTime' : temp["castingTime"],
			            'duration' : temp["duration"],
			            'range' : temp["range"],
			            'components' : temp["components"],
			            'spellType' : temp["spellType"],
			            'shortDescription' : temp["shortDescription"],
			            'longDescription' : temp["longDescription"],
			            'url' : temp["url"],
			            'damage': {
			            	'initial': damage,
			            	'type': damageType,
			            	'levels' : {
			            		'begin' : startLevel,
			            		'increaseBy' : increaseString
			            		}
			            	}
			            }
			        }
		    	)
	else:
		newjson.update(
	    {
	        spell : {
	            'castingTime' : temp["castingTime"],
	            'duration' : temp["duration"],
	            'range' : temp["range"],
	            'components' : temp["components"],
	            'spellType' : temp["spellType"],
	            'shortDescription' : temp["shortDescription"],
	            'longDescription' : temp["longDescription"],
	            'url' : temp["url"]
	            }
	        }
    	)    	

with open('spells_with_damage_enteded.json', 'w') as f:
    json.dump(newjson,f, indent=2)