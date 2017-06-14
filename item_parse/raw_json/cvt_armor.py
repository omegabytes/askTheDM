import json
import re

with open('armor_raw.json', 'r') as f:
    weaponjs = json.load(f)


newjson = {}

for weapon in weaponjs:
    # print spell["components"]

    newjson.update(
        {
            weapon["name"].lower() : {
                'cost' : weapon["cost"],
                'weight' : weapon["weight"],
                'stealth' : weapon["stealth"],
                'catagory' : weapon["catagory"],
                'armor class' : weapon["armor class"],
                'strength' : weapon["strength"],
                'armor type' : weapon["armor type"]
                }
            }
        )

with open('weapons_raw.json', 'r') as f:
    weaponjs = json.load(f)

for weapon in weaponjs:
    # print spell["components"]

    newjson.update(
        {
            weapon["name"].lower() : {
                'cost' : weapon["cost"],
                'damage' : weapon["damage"],
                'weight' : weapon["weight"],
                'properties' : weapon["properties"],
                'catagory' : weapon["catagory"],
                'weapon type' : weapon["weapon type"]
                }
            }
        )

with open('armor_weapons_correction.json', 'w') as f:
    json.dump(newjson,f, indent=2)
