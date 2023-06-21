import requests
import os
import pandas as pd
import json

from bs4 import BeautifulSoup as bs

url_dict = {
    'token_unlocks': 'https://token.unlocks.app',
    'defillama' : 'https://defillama.com',
}

headers = {'User-Agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/89.0.4389.82 Safari/537.36'}


def get_slug_tu():
    url = url_dict['token_unlocks']
    slug_dict = {}
    response = requests.get(url, headers = headers)
    web_content = response.text
    soup = bs(web_content, "html.parser")
    elements = soup.select("#__next > div.MuiBox-root.emotion-css-12y24eo > div.MuiBox-root.emotion-css-10klw3m > div.container.relative.z-\[300\].mx-auto.flex.min-h-screen.flex-col.gap-\[24px\] > div.MuiBox-root.emotion-css-4wyb8q > div.MuiPaper-root.MuiPaper-elevation.MuiPaper-rounded.MuiPaper-elevation1.emotion-css-1wrw3mp > table > tbody > tr > th > div > a")
    for element in elements:
        slug_dict[f"{element.find('p').text}"] = element["href"]
    return slug_dict

def get_slug_dl():
    url = url_dict['defillama'] + '/unlocks'
    slug_dict = {}
    response = requests.get(url, headers = headers)
    web_content = response.text
    soup = bs(web_content, "html.parser")
    elements = soup.select("#__next > div > main > div.sc-ada1eb34-0.fchSFM.sc-a8b09c60-1.ecfugK > table > tbody > tr > td > span > a")
    for element in elements:
        slug_dict[f"{element.text}"] = element["href"]
    return slug_dict




def get_data_tu(slug):
    url = url_dict['token_unlocks'] + slug
    response = requests.get(url, headers = headers)
    web_content = response.text

    # Parse the webpage
    soup = bs(web_content, 'html.parser')
    script_tag = soup.find('script', id='__NEXT_DATA__')
    data = json.loads(script_tag.string)

    # Get the allocations array
    try:
        return data['props']['pageProps']['chartData']
    except KeyError:
        print(f"Key not found in data for slug: {slug}")

def get_data_dl(slug):
    url = url_dict['defillama'] + slug
    response = requests.get(url, headers = headers)
    web_content = response.text

    soup = bs(web_content, 'html.parser')
    script_tag = soup.find('script', id='__NEXT_DATA__')
    data = json.loads(script_tag.string)

    try:
        return data['props']['pageProps']['emissions']['chartData']
    except KeyError:
        print(f"Key not found in data for slug: {slug}")



def to_excel(k,v,chartData,website):

    # handles dataframe
    if website == 1:
        df = pd.DataFrame(chartData)

    elif website == 2:
        df = pd.DataFrame(chartData)
        df['date'] = pd.to_datetime(df['date'], unit='s').dt.strftime('%Y-%m-%dT%H:%M:%SZ')
        df.rename(columns={'date': 'name'}, inplace=True)

    if 'output' not in os.listdir():
        os.mkdir(os.getcwd() + '/' + 'output')

    if website == 1:
        if 'tu' not in os.listdir('output'):
            os.mkdir(os.getcwd() + '/output/tu')
        url = os.getcwd() + f'/output/tu/chartData_{k}_{v[1:]}.xlsx'
    if website == 2:
        if 'dl' not in os.listdir('output'):
            os.mkdir(os.getcwd() + '/output/dl')
        url = os.getcwd() + f'/output/dl/chartData_{k}_{v[1:]}.xlsx'
    df.to_excel(url, index=False, engine='openpyxl')



def __main__():
    while True:
        website = int(input("""
        From which aggregating platforms do you wish to crawl data from?...
        [1] TokenUnlocks
        [2] Defillama
        """))
        if website in range(1,len(url_dict)+1):
            break
        else:
            print("You have chosen a wrong input, please choose from the above list!...")

    if website == 1:
        print("TokenUnlocks\n")
        slug_dict = get_slug_tu()
        for k, v  in slug_dict.items():
            chartData = get_data_tu(v)
            print(f"Data for project {k} from TokenUnlocks with slug: {v}")
            to_excel(k,v,chartData, website)
            print(f"Exported for project {k}!")

    elif website == 2:
        print("Defillama\n")
        slug_dict = get_slug_dl()
        for k, v in slug_dict.items():
            charData = get_data_dl(v)
            v = v[8:]
            print(f"Data for project {k} from DefiLlama with slug: {v}")
            to_excel(k,v,charData, website)
            print(f"Exported for project {k}!")

__main__()
