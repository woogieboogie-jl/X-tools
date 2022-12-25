import requests
import pandas as pd
from datetime import datetime
import csv
import json
import os
import pytz


config_path = os.getcwd() + '/config.json'
settings_default = {
            "period_choosen" : "7d",
            "indexes_choosen" : [],
            "timezone_from" : "UTC",
            "timezone_to" : "Asia/Seoul",
            "periods_list" : ["all", "1y", "3m", "1m", "7d", "24h"],
            "indexes_list" : ["X30", "XMN", "XKC", "XGM", "XNFT", "XNFT", "XDEFI", "XDEX", "XLB", "XDRV", "XAM"],
        }


# filters for dataframe in collectIndex()
filters_list = ["timestamp", "index_value"]

# reads saved settings from configs.json
def readConfig():
    try:
        with open(config_path, "r") as f:
            return json.load(f)
    except FileNotFoundError:
        config_dict = settings_default
        writeConfig(config_dict)
        return readConfig()

# writes and updates config.json
def writeConfig(config_dict):
    with open(config_path, "w") as f:
        json.dump(config_dict,f)

# questions repeater
def repeatQuestion(question, answers_list, delete=False):
    while True:
        if delete is True:
            answer = input(question + "..." + f"\n[{'/'.join(answers_list)}] | [r] for reset | [b] for back\n> ")
            if answer == "r":
                return answer
        else:
            answer = input(question + "..." + f"\n[{'/'.join(answers_list)}] | [b] for back\n> ")
        if answer == "b":
            return None
        elif answer.lower() in answers_list:
            return answer.lower()
        elif answer.upper() in answers_list:
            return answer.upper()
        else:
            print(f"wrong answer, your answer should be either: {'/'.join(answers_list)}...\n> ")

# questions divider
def questions(config_dict, question_no):
    period_choosen = config_dict["period_choosen"]
    indexes_choosen = config_dict["indexes_choosen"]
    tz_from = config_dict["timezone_from"]
    tz_to = config_dict["timezone_to"]
    periods_list = config_dict["periods_list"]
    indexes_list = config_dict["indexes_list"]
    config_dict_numbers = {"1":"period_choosen", "2":"indexes_choosen", "3": "timezone_current", "4": "indexes_list"}
    avail_indexes_list = list(set(indexes_list) - set(indexes_choosen))
    stats_current = f"""
---------------------------------------------------
[1] Choosen Data Period: {period_choosen}
[2] Choosen Indexes: {','.join(indexes_choosen)}
[3] Data Timezone: {tz_from}
[4] Requested Timezone:  {tz_to}
---------------------------------------------------
"""
    if question_no == "_":
        question = f"""
Your Current Configurations Settings Are:
{stats_current}
Do you wish to proceed with above settings?"""
        answers_list = ["y", "n"]
    elif question_no == "__":
        question = f"""
{stats_current}
Which parameter do you wish to change?"""
        answers_list = ["1", "2", "3", "4"]
    elif question_no == "__1":
        question = f"""
In what period would you like to collect index data?
You have choosen currently: {period_choosen}
You can choose from: {'/'.join(periods_list)}"""
        answers_list = periods_list
    elif question_no == "__2":
        question = f"""
For which indexes do you wish to collect from Xangle?
You have choosen currently: {','.join(indexes_choosen)}
You can choose from: [{'/'.join(avail_indexes_list)}]"""
        answers_list = avail_indexes_list

    elif question_no == "__3":
        question = f"""
In what timezone is the data recored as?
You have choosen currently: {tz_from}"""
        answers_list = ["UTC"]
    elif question_no == "__4":
        question = f"""
In what timezone do you wish to have csvs loaded at?
You have choosen currently: {tz_to}
"""
        answers_list = ["Asia/Seoul"]
    else:
        pass
    return question, answers_list



# Basic I/O for getting neccessary data: period, indexes_choosen, and timezones
def questionnaire(config_dict):
    while True:
        next_saved_config = repeatQuestion(*questions(config_dict, "_"))
        if next_saved_config is None:
            pass
        elif next_saved_config == "y":
            return config_dict
        elif next_saved_config == "n":
            print("Entering Configuration Settings...\n")
            while True:
                next_config = repeatQuestion(*questions(config_dict, "__"))
                if next_config is None:
                    break
                elif next_config == "1":
                    while True:
                        period_config = repeatQuestion(*questions(config_dict, "__1"))
                        if period_config is None:
                            break
                        else:
                            config_dict["period_choosen"] = period_config
                            break
                elif next_config == "2":
                    while True:
                        indexes_config = repeatQuestion(*questions(config_dict, "__2"), True)
                        if indexes_config is None:
                            break
                        elif indexes_config == "r":
                            config_dict["indexes_choosen"] = []
                        else:
                            config_dict["indexes_choosen"].append(indexes_config)
                elif next_config == "3":
                    while True:
                        tz_from_config = repeatQuestion(*questions(config_dict, "__3"))
                        if tz_from_config is None:
                            break
                        else:
                            config_dict["timezone_from"] = tz_from_config
                elif next_config == "4":
                    while True:
                        tz_to_config = repeatQuestion(*questions(config_dict, "__4"))
                        if tz_to_config is None:
                            break
                        else:
                            config_dict["timezone_to"] = tz_to_config
                else:
                    pass
                writeConfig(config_dict)




# collects index data and returns dataframe
def collectIndex(period, index_slug):
    url = f"https://price.xangle.io/xangle_index/index-values?index_slug={index_slug}&period={period}&lang=en"
    data = requests.get(url).json()["indices"]
    df = pd.DataFrame.from_dict(data).filter(filters_list)
    return df

def collectIndexGroup(period, indexes_choosen):
    df_dict = {}
    for index_slug in indexes_choosen:
        df_dict[index_slug] = collectIndex(period, index_slug)
    return df_dict

# changes timezone
def changeTZ(timestamp, tz_from, tz_to):
    tz_from = pytz.timezone(tz_from)
    tz_to = pytz.timezone(tz_to)
    ts_from = datetime.strptime(timestamp, "%Y-%m-%dT%H:%M:%S")
    ts_from = tz_from.localize(ts_from)
    ts_to = ts_from.astimezone(tz_to)
    return ts_to

# merges two different dataframes
def mergeDataframes(df_dict, index_init):
    cnt = 1
    df = pd.DataFrame(df_dict[index_init]["timestamp"])
    # need to change dates to kst
    for k,v in df_dict.items():
        df.insert(cnt, k, v["index_value"])
        cnt += 1
    return df

# saves to CSV file
def saveToCSV(df,indexes_choosen, period):
    now = datetime.now()
    filename = f"{'_'.join(indexes_choosen)}_{period}_{now.strftime('%Y-%m-%d(%H:%M:%S)')}.csv"
    df.to_csv(('csvs/'+filename), sep=',', na_rep='NaN', index=False)



# main execution function
def main():
    config_dict = questionnaire(readConfig())

    period_choosen = config_dict["period_choosen"]
    indexes_choosen = config_dict["indexes_choosen"]
    tz_from = config_dict["timezone_from"]
    tz_to = config_dict["timezone_to"]

    index_init = indexes_choosen[0]
    now = datetime.now()

    # adds indexes
    df_dict = collectIndexGroup(period_choosen, indexes_choosen)

    # merges into one dataframe
    df = mergeDataframes(df_dict, index_init)
    df['timestamp'] = df['timestamp'].apply(changeTZ, tz_from=tz_from , tz_to=tz_to)

    # every 4th row
    df = df[df.index % 4 == 0] if period_choosen == "7d" else df

    # saving files
    saveToCSV(df,indexes_choosen,period_choosen)
    print("Jobs Done!")

main()
