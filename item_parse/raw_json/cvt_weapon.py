import json
import re

with open('weapons_raw.json', 'r') as f:
    weaponjs = json.load(f)


newjson = {}

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

with open('weapons_correction.json', 'w') as f:
    json.dump(newjson,f, indent=2)
