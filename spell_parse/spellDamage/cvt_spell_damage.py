import json
import re 

damageRE = re.compile('\d+(d)\d+\s(\w)+\s[damage]+')

with open('spells.json', encoding="utf8") as f:
    spelljs = json.load(f)

newjson = {}

for spell in spelljs:
	temp = spelljs[spell]

	if damageRE.findall(temp["longDescription"]):
		damage = damageRE.sub("",temp["longDescription"])
	else:
		damage = None

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
	            'damage': damage
	            }
	        }
	    )

with open('spells_with_damage.json', 'w') as f:
    json.dump(newjson,f, indent=2)