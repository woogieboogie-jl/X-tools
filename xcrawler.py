import requests
from bs4 import BeautifulSoup as bs
import json
import numpy as np
import pandas as pd
import matplotlib.pyplot as plt
import matplotlib.dates as mdates
import matplotlib.ticker as mtick
import datetime

headers = {'User-Agent': 'Mozilla/5.0 (Macintosh; Intel Mac OS X 10_10_1) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/39.0.2171.95 Safari/537.36'}
url_dict = {"2": "https://defillama.com/protocol/", "1":"https://defillama.com/chain/"}

while True:
    web_source_input = input("""
From Defillama, do you which to crawl TVL data for a Chain or a Protocol?

  [1] Chain  [2] Protocol

...
""")
    if web_source_input in url_dict.keys():
        web_source = url_dict[web_source_input]
        break
    else:
        print("Wrong input! Please try again and remember to answer with numbers!\n\n...")

while True:
    project_name = input("""
Which Project do you wish to crawl from?\n

...""")

    web_source = web_source + project_name
    print(web_source)

    try:
        response = requests.get(web_source, headers = headers)
        soup = bs(response.text, 'html.parser')
        script_tag = soup.find('script', {'id': '__NEXT_DATA__'})
        # Get the contents of the <script> tag
        json_string = script_tag.string

        # Parse the JSON string into a Python dictionary
        data = json.loads(json_string)
        if web_source_input == "1":
            chart_data = data['props']['pageProps']['chart']
        else:
            chart_data = data['props']['pageProps']['protocolData']['chainTvls']['injective']['tvl']
            print(chart_data)
        chart_data = [(datetime.datetime.fromtimestamp(int(x)),float(y)) for x,y in chart_data]

        data_array = np.array(chart_data, dtype=object).T
        x = data_array[0]
        y = data_array[1]
        break
    except KeyError:
        print(f"your input of {project_name} cannot be found in Defillama! Please Try Again!\n")


color_main = '#FF4F21'
color_sub  = '#CFCFCF'
color_back = 'white'



def export_CSV(x,y,filename):
    df = pd.DataFrame(
        {'Date': x,
        'TVL': y}
    )
    df.to_csv(f'tvl_data_{filename}.csv', index=False)

def billions(x, pos):
    return '%1.1fB' % (x*1e-9)


def plot_wbsettings(x,y,color_main, color_sub, color_back):
    # Plot Settings
    plt.figure(facecolor=color_back)
    # Plot the data with an orange line
    plt.plot(x, y, linestyle='solid', color=color_main)

    # Set the axis color to light gray
    plt.gca().spines['bottom'].set_color(color_sub)
    plt.gca().spines['top'].set_color(color_back)
    plt.gca().spines['right'].set_color(color_back)
    plt.gca().spines['left'].set_color(color_sub)
    plt.gca().xaxis.label.set_color(color_sub)
    plt.gca().yaxis.label.set_color(color_sub)
    plt.gca().tick_params(colors=color_sub)
    plt.title('TVL Chart', color='black',fontweight='bold' )
    plt.xlabel('Date')

    # Make x-axis labels not tilted
    plt.ylabel('TVL ($)')
    plt.gca().yaxis.set_major_formatter(mtick.FuncFormatter(billions))

    # Set date format on x-axis
    plt.gca().xaxis.set_major_formatter(mdates.DateFormatter('%y-%m'))

    plt.gcf().autofmt_xdate()
    plt.xticks(rotation=0)
    plt.show()

export_CSV(x,y,'anchor')
plot_wbsettings(x,y,color_main, color_sub, color_back)
