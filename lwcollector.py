import requests
import json
import csv
import pandas as pd
from collections import defaultdict

url = {
        'wemix': "https://onchain.api.xangle.io/livewatch/WEMIX-V2/foundation-balance?network=wemix&period=ALL",
        'klaytn': "https://onchain.api.xangle.io/livewatch/WEMIX-V2/foundation-balance?network=klaytn&period=ALL"

}


def getLiveWatchData():
        json_data = requests.get("https://onchain.api.xangle.io/livewatch/WEMIX-V2/circulating-plan?staking=false&period=all")
            json_data = json_data.text
                data = json.loads(json_data)
                    timestamps_values_real = map(lambda x: (x['timestamp'], x['value']), data['results'][0]['data'])
                        timestamps_values_plan = map(lambda x: (x['timestamp'], x['value']), data['results'][1]['data'])
                            with open('real.csv', 'w', newline='') as csvfile:
                                        csv_writer = csv.writer(csvfile)
                                                csv_writer.writerows(timestamps_values_real)
                                                    with open('plan.csv', 'w', newline='') as csvfile:
                                                                csv_writer = csv.writer(csvfile)
                                                                        csv_writer.writerows(timestamps_values_plan)


                                                                        def LWDataHandler(project):
                                                                                # extract the data into a new DataFrame with columns for timestamp and value
                                                                                    json_text = requests.get(url[project]).text
                                                                                        df = pd.read_json(json_text)['results']
                                                                                            # print(df.columns)
                                                                                                print(df.keys())
                                                                                                    result = defaultdict(dict)
                                                                                                        for row in df:
                                                                                                                    address = row.get('address')
                                                                                                                            for item in row.get('data', []):
                                                                                                                                            result[address][item['timestamp']] = item['value']
                                                                                                                                                columns = ['address']
                                                                                                                                                    time_key = set()
                                                                                                                                                        for v in result.values():
                                                                                                                                                                    time_key.update(v.keys())
                                                                                                                                                                        time_key = list(time_key)
                                                                                                                                                                            time_key.sort()
                                                                                                                                                                                columns.extend(time_key)
                                                                                                                                                                                    df_data = list()
                                                                                                                                                                                        for k, v in result.items():
                                                                                                                                                                                                    row = [k]
                                                                                                                                                                                                            for t in time_key:
                                                                                                                                                                                                                            if v.get(t):
                                                                                                                                                                                                                                                row.append(v.get(t))
                                                                                                                                                                                                                                                            else:
                                                                                                                                                                                                                                                                                row.append(0.0)
                                                                                                                                                                                                                                                                                        df_data.append(tuple(row))
                                                                                                                                                                                                                                                                                            data = pd.DataFrame(df_data, columns=columns)
                                                                                                                                                                                                                                                                                                with open(f'{project}_test.csv', 'w') as f:
                                                                                                                                                                                                                                                                                                            f.write(data.to_csv(index=False))

                                                                                                                                                                                                                                                                                                            if __name__ == "__main__":
                                                                                                                                                                                                                                                                                                                    getLiveWatchData()
                                                                                                                                                                                                                                                                                                                        LWDataHandler('wemix')
                                                                                                                                                                                                                                                                                                                            LWDataHandler('klaytn')https://onchain.api.xangle.io/livewatch/WEMIX-V2/foundation-balance?network=wemix&period=ALL
