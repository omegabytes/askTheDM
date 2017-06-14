import json
import re


# setup regular expresssions
ritualRE = re.compile('(\(Ritual\))', re.IGNORECASE)    #parse for (Ritual)
verbalRE = re.compile('(V)\\b')                         #parse for 'V'
somaticRE = re.compile('(S)\\b')                        #parse for 'S'
materialRE = re.compile('(M)\\b')                       #parse for 'M'

with open('spells.json', 'r') as f:
    spelljs = json.load(f)


newjson = {}
spell_names = []

for spell in spelljs:
    if spell["level"].lower() == "cantrip":             #if the spell is a cantrip, don't append level to the front of the spelltype string
        spelltype = spell["spellclass"] + " cantrip"
    else:                                             
        spelltype = "level" + spell["level"] + " " + spell["spellclass"]

    if ritualRE.findall(spell["name"]):
        spell["name"] = ritualRE.sub("",spell["name"])  #replaces (Ritual) with an empty string in the name
        spelltype += " Ritual"                          #and adds it to the spellType


    if (spell["components"] is not None):
        if verbalRE.findall(spell["components"]):
            #print spell["components"]
            spell["components"] = verbalRE.sub("Verbal",spell["components"])

        if somaticRE.findall(spell["components"]):
            spell["components"] = somaticRE.sub("Somatic",spell["components"])

        if materialRE.findall(spell["components"]):
            spell["components"] = materialRE.sub("Material",spell["components"])

    spell_names.append(spell["name"].encode('ascii', 'ignore'))
    
        
    # print spell["components"]

    print spell_names


    newjson.update(
        {
            spell["name"].lower() : {
                'castingTime' : spell["casting_time"],
                'duration' : spell["duration"],
                'range' : spell["spellrange"],
                'components' : spell["components"],
                'spellType' : spelltype,
                'shortDescription' : "",
                'longDescription' : spell["description"],
                'url' : spell["url"]
                }
            }
        )

with open('correction.json', 'w') as f:
    json.dump(newjson,f, indent=2)

spellfile = open('spellnames.txt','w')
for spell in spell_names:
    spellfile.write("%s\n" % spell)

