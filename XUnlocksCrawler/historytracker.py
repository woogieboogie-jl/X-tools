import json

with open ('history.json', 'r') as json_file:
    jfile = json.load(json_file)
    print(jfile)
