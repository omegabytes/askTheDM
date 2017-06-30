import json
import re

with open('vehicle_raw.json', 'r') as f:
    vehiclejs = json.load(f)


newjson = {}

for vehicle in vehiclejs:
    # print spell["components"]

    newjson.update(
        {
            vehicle["name"].lower() : {
                'cost' : vehicle["cost"],
                'speed' : vehicle["speed"],
                'carryCapacity' : vehicle["carry capacity"],
                'catagory' : vehicle["catagory"],
                'type' : vehicle["item type"]
                }
            }
        )

with open('vehicle.json', 'w') as f:
    json.dump(newjson,f, indent=2)