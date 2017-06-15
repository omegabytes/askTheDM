import json
import re

with open('armor_raw.json', 'r') as f:
    armorjs = json.load(f)


newjson = {}
item_name = []

for armor in armorjs:
    item_name.append(armor["name"].lower())
    newjson.update(
        {
            armor["name"].lower() : {
                'cost' : armor["cost"],
                'weight' : armor["weight"],
                'stealth' : armor["stealth"],
                'category' : armor["catagory"],
                'armorClass' : armor["armor class"],
                'strength' : armor["strength"],
                'armorType' : armor["armor type"]
            }
        }
    )


with open('weapons_raw.json', 'r') as f:
    weaponjs = json.load(f)

for weapon in weaponjs:
    item_name.append(weapon["name"].lower())

    newjson.update(
        {
            weapon["name"].lower() : {
                'cost' : weapon["cost"],
                'damage' : weapon["damage"],
                'weight' : weapon["weight"],
                'properties' : weapon["properties"],
                'category' : weapon["catagory"],
                'weaponType' : weapon["weapon type"]
                }
            }
        )

with open('armor_weapons_correction.json', 'w') as f:
    json.dump(newjson,f, indent=2)

itemFile = open('itemnames.txt','w')
for item in item_name:
    itemFile.write("%s\n" % item)