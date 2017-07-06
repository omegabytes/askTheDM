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

with open('adventure_gear_raw.json', 'r') as f:
    adventurejs = json.load(f)

for gear in adventurejs:
    item_name.append(gear["name"].lower())

    newjson.update(
        {
            gear["name"].lower() : {
                'cost' : gear["cost"],
                'weight' : gear["weight"],
                'category' : gear["catagory"],
                'itemType' : gear["itemType"]
                }
            }
        )

with open('vehicle_raw.json', 'r') as f:
    vehiclejs = json.load(f)

for vehicle in vehiclejs:
    item_name.append(vehicle["name"].lower())

    newjson.update(
        {
            vehicle["name"].lower() : {
                'cost' : vehicle["cost"],
                'speed' : vehicle["speed"],
                'carryCapacity' : vehicle["carry capacity"],
                'category' : vehicle["catagory"],
                'type' : vehicle["item type"]
                }
            }
        )


with open('itemstwo.json', 'w') as f:
    json.dump(newjson,f, indent=2)

itemFile = open('itemnames.txt','w')
for item in item_name:
    itemFile.write("%s\n" % item)