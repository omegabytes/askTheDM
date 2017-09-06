import json
import re 

levelRE = re.compile('\w+\s(\d)+\s(.*)')

with open('spells_with_damage_enteded.json', encoding="utf8") as f:
	spelljs = json.load(f)

newjson = {}

for spell in spelljs:
	temp = spelljs[spell]

	if("damage" in temp):
		tempDamage = temp["damage"]
		if("levels" in tempDamage):
			tempLevels = tempDamage["levels"]
			print(spell)
			if(len(levelRE.findall(temp['spellType']))>0):
				level = levelRE.findall(temp['spellType'])[0][0]
				spellType = levelRE.findall(temp['spellType'])[0][1]
			else:
				level = "cantrip"
				spellType = temp['spellType']
			newjson.update(
		    {
		        spell : {
		            'castingTime' : temp["castingTime"],
		            'duration' : temp["duration"],
		            'range' : temp["range"],
		            'components' : temp["components"],
		            'level' : level,
		            'spellType' : spellType,
		            'shortDescription' : temp["shortDescription"],
		            'longDescription' : temp["longDescription"],
		            'url' : temp["url"],
		            'damage': {
		            	'type': tempDamage["type"],
		            	'levels' : {
		            		'one' : tempLevels["one"],
		            		'two' : tempLevels["two"],
		            		'three': tempLevels["three"],
		            		'four': tempLevels["four"],
		            		'five': tempLevels["five"],
		            		'six': tempLevels["six"],
		            		'seven': tempLevels["seven"],
		            		'eight': tempLevels["eight"],
		            		'nine': tempLevels["nine"]		            		
		            		}
		            	}
		            }
		        }
			)
		elif("playerLevel" in tempDamage):
			tempLevels = tempDamage["playerLevel"]
			newjson.update(
		    {
		        spell : {
		            'castingTime' : temp["castingTime"],
		            'duration' : temp["duration"],
		            'range' : temp["range"],
		            'components' : temp["components"],
		            'level': temp["level"],
		            'spellType' : temp["spellType"],
		            'shortDescription' : temp["shortDescription"],
		            'longDescription' : temp["longDescription"],
		            'url' : temp["url"],
		            'damage': {
		            	'type': tempDamage["type"],
		            	'playerLevel' : {
		            		'one' : tempLevels["one"],
		            		'two' : tempLevels["two"],
		            		'three': tempLevels["three"],
		            		'four': tempLevels["four"],
		            		'five': tempLevels["five"],
		            		'six': tempLevels["six"],
		            		'seven': tempLevels["seven"],
		            		'eight': tempLevels["eight"],
		            		'nine': tempLevels["nine"],
		            		'ten' : tempLevels["ten"],
		            		'eleven' : tempLevels["eleven"],
		            		'twelve': tempLevels["twelve"],
		            		'thirteen': tempLevels["thirteen"],
		            		'fourteen': tempLevels["fourteen"],
		            		'fifteen': tempLevels["fifteen"],
		            		'sixteen': tempLevels["sixteen"],
		            		'seventeen': tempLevels["seventeen"],
		            		'eighteen': tempLevels["eightteen"],	
		            		'nineteen': tempLevels["nineteen"],
		            		'twenty': tempLevels["twenty"],		            			            		
		            		}
		            	}
		            }
		        }
			)
		else:
			print(spell)
			if(len(levelRE.findall(temp['spellType']))>0):
				level = levelRE.findall(temp['spellType'])[0][0]
				spellType = levelRE.findall(temp['spellType'])[0][1]
			else:
				level = "cantrip"
				spellType = temp['spellType']
			newjson.update(
		    {
		        spell : {
		            'castingTime' : temp["castingTime"],
		            'duration' : temp["duration"],
		            'range' : temp["range"],
		            'components' : temp["components"],
		            'level' : level,
		            'spellType' : spellType,
		            'shortDescription' : temp["shortDescription"],
		            'longDescription' : temp["longDescription"],
		            'url' : temp["url"],
		            'damage': temp["damage"]
		            }
		        }
	    	)					
	else:
		print(spell)
		if(len(levelRE.findall(temp['spellType']))>0):
			level = levelRE.findall(temp['spellType'])[0][0]
			spellType = levelRE.findall(temp['spellType'])[0][1]
		else:
			level = "cantrip"
			spellType = temp['spellType']
		newjson.update(
	    {
	        spell : {
	            'castingTime' : temp["castingTime"],
	            'duration' : temp["duration"],
	            'range' : temp["range"],
	            'components' : temp["components"],
	            'level' : level,
	            'spellType' : spellType,
	            'shortDescription' : temp["shortDescription"],
	            'longDescription' : temp["longDescription"],
	            'url' : temp["url"]
	            }
	        }
    	) 		

with open('spells_damage_and_level.json', 'w') as f:
    json.dump(newjson,f, indent=2)