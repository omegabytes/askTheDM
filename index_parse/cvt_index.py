import json
import re

with open('index_raw.json', 'r') as f:
    indexjs = json.load(f)

seeRE = re.compile('(.*)(See)(.*)')
nameRE = re.compile('(.*)[(]')

newjson = {}
indexEntries = []

for entry in indexjs:
    if 'children' not in entry:
        if 'pages' not in entry:
            peices = (seeRE.findall(entry["name"]))
            pages = ""
            nameString = ""
            name = True
            for element in peices:
                for singleString in element:
                    if(name):
                        nameString += singleString
                        name = False
                    else:
                        pages +=  singleString
            indexEntries.append(nameString)
            newjson.update(
                {
                    nameString : {
                        'pages' : pages
                        }
                    }
                )
        else:
            pageList =[]
            for page in entry['pages']:
                pageList.append(page)

            if(nameRE.findall(entry["name"])):
                nameString = (nameRE.findall(entry["name"]).pop(0))
            else:
                nameString = entry["name"].lower()


            indexEntries.append(nameString)
            newjson.update(
                {
                    nameString : {
                        'pages' : pageList
                        }
                    }
                )
    else:
        if 'pages' not in entry:
            temp = entry['children']
            pageList = []
            for childEntry in temp:
                temp2 = childEntry['pages']
                for pages in temp2:
                    pageList.append(pages)

            if(nameRE.findall(entry["name"])):
                nameString = (nameRE.findall(entry["name"]).pop(0))
            else:
                nameString = entry["name"].lower()


            indexEntries.append(nameString)
            newjson.update(
                {
                    nameString : {
                        'pages' : pageList
                        }
                }
            )
        else:
            pageList =[]
            for page in entry['pages']:
                pageList.append(page)

            if(nameRE.findall(entry["name"])):
                nameString = (nameRE.findall(entry["name"]).pop(0))
            else:
                nameString = entry["name"].lower()


            indexEntries.append(nameString)
            newjson.update(
                {
                    nameString : {
                        'pages' : pageList
                        }
                    }
                )


with open('index_format.json', 'w') as f:
    json.dump(newjson,f, indent=2)

indexFile = open('indexnames.txt','w')
for index in indexEntries:
    indexFile.write("%s\n" % index)