import json
import os

filename = 'history.json'

project_mapper = {
    "Xangle": {
        "Xangle": "XNGL",
        "TokenUnlocks": "XNGL",
        "DefiLlama": "XNGL",
        "TokenTerminal": "XNGL"
    }
}

def create_history():
    with open(filename, 'w') as json_file:
        json.dump({}, json_file)
    print('New History File Created!')

def read_history():
    with open(filename, 'r') as file:
        try:
            json_data = json.load(file)
        except json.JSONDecodeError as e:
            print(f"Error decoding JSON: {e}")
            json_data = {}
        return json_data

def write_history(data):
    with open(filename, 'w') as file:
        json.dump(data, file)

def read_or_create_history():
    try:
        return read_history()
    except FileNotFoundError:
        create_history()
        return read_history()
        
def write_or_create_history(data):
    try:
        write_history(data)
    except FileNotFoundError:
        create_history()
        write_history(data)

test = read_history()
print(test)
