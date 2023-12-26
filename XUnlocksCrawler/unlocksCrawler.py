import requests
import os
import pandas as pd
import json
import re
import random
import time
from datetime import date
from decryptmodule import decrypt_TU
from bs4 import BeautifulSoup as bs
from dynamicmodule import get_slug_tu_dynamic, get_slug_cr_dynamic
from dataprocessingmodule import process_data_cr

random_duration = 5
url_dict = {
    'token_unlocks': 'https://token.unlocks.app',
    'defillama' : 'https://defillama.com',
    'token_terminal' : 'https://tokenterminal.com',
    'crypto_rank' : 'https://cryptorank.io'
}

headers = {'User-Agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/89.0.4389.82 Safari/537.36'}
today = date.today().strftime("%Y-%m-%d")

# Casual Webdata handler
def get_soup(url, headers):
    slug_dict = {}
    response = requests.get(url, headers=headers)
    soup = bs(response.text, "html.parser")
    return soup


# Token Unlocks Scraping Requires Selenium Webdriver
def get_slug_tu():
    url = url_dict['token_unlocks']
    slug_dict = get_slug_tu_dynamic(url, headers)
    return slug_dict

# DeFiLlama Scraping, Static Crawling
def get_slug_dl():

    # presets
    url = url_dict['defillama'] + '/unlocks'
    slug_dict = {}

    # data handling
    soup = get_soup(url,headers)
    elements = soup.select("#__next > div > main > div.sc-ada1eb34-0.fchSFM.sc-a8b09c60-1.ecfugK > table > tbody > tr > td > span > a")
    for element in elements:
        slug_dict[f"{element.text}"] = element["href"]

    return slug_dict

# TokenTerminal Scraping, Static Crawling
def get_slug_tt():

    # presets
    url = url_dict['token_terminal'] + "/terminal/projects"
    slug_dict = {}


    # data handling
    soup = get_soup(url, headers)
    parent_element = soup.select_one('#main-content > div > article > div > div > ol')
    li_children = parent_element.findChildren("li", recursive=False)
    for li in li_children:
        project_name = li.select_one('li > div > article > a > div > h2').get_text()
        if 'Vesting schedule' in li.get_text():
            child_a = li.find('a')
            if child_a and child_a.has_attr('href'):
                slug_dict[project_name] = re.search(r'[^/]*$', child_a['href']).group()

    return slug_dict

# CryptoRanks Scraping, Requires Selenium Webdriver
def get_slug_cr():

    # presets
    url = url_dict['crypto_rank'] + "/token-unlock"

    # data handling()
    slug_dict = get_slug_cr_dynamic(url, headers)
    return slug_dict



def get_data_tu(slug, inference="OFFICIAL_PUBLICATION"):

    url = url_dict['token_unlocks'] + '/api/vesting/chart/' + slug + '/vestings/' + inference + '/1/day'
    response = requests.get(url, headers = headers)
    if response.status_code != 200:
        print(f"ERROR: Requested Link: {url} is unable to return response from TokenUnlocks API with slug: {slug}")
        return None
    else:
        web_content = response.text

    try:
        decrypted_data = decrypt_TU(json.loads(web_content))
    except:
        print(f"ERROR: Unexpected Error occurred while decrypting the given crypted jsonfile with slug: {slug}")
        return None

    if len(decrypted_data) == 1:
        if inference == 'OFFICIAL_PUBLICATION':
            decrypted_data = get_data_tu(slug, inference='ONCHAIN_INFERRED')
        else:
            print(f"ERROR: Couldn't return viable data from TokenUnlocks API with slug: {slug}")
            return None

    return decrypted_data


def get_data_dl(slug):
    url = url_dict['defillama'] + slug
    response = requests.get(url, headers = headers)
    web_content = response.text

    soup = bs(web_content, 'html.parser')
    script_tag = soup.find('script', id='__NEXT_DATA__')
    data = json.loads(script_tag.string)

    try:
        return data['props']['pageProps']['emissions']['chartData']['documented']
    except KeyError:
        print(f"Key not found in data for slug: {slug}")
        return None

def get_data_tt(slug):
    url = 'https://api.tokenterminal.com/v2/internal/token-unlocks/' + slug

    headers = {
        'Authorization': 'Bearer c0e5035a-64f6-4d2c-b5f6-ac1d1cb3da2f',
        'X-Tt-Terminal-Jwt': 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJmcm9udEVuZCI6InRlcm1pbmFsIGRhc2hib2FyZCIsImlhdCI6MTY4ODUxNjc0MCwiZXhwIjoxNjg5NzI2MzQwfQ.VorMZ-A2j4oEPvON2iORrXg-wCf-ofQ0Y8uWutYyQFQ'
    }

    response = requests.get(url, headers=headers)
    data = response.json()

    return data

def get_data_cr(slug):
    url = f'https://api.cryptorank.io/v0/coins/vesting/{slug}'
    response = requests.get(url, headers=headers)
    data_string = response.text.replace("'", '"')
    return json.loads(data_string)["data"]





def to_excel(k,v,chartData,website):

    # Handles dataframe

    # data is from TokenUnlocks
    if website == 1:
        df = pd.DataFrame()
        df['date'] = [entry['timestamp'] for entry in chartData]
        for entry in chartData:
            for vesting in entry['vestings']:
                label = vesting["label"]
                if isinstance(vesting['amount'], list):
                    amount = vesting["amount"][0]
                else:
                    amount = vesting['amount']

                if label not in df.columns:
                    df[label] = 0
                df.at[chartData.index(entry), label] = amount
        df['date'] = pd.to_datetime(df['date'], unit='ms').dt.strftime('%Y-%m-%dT%H:%M:%SZ')

    # data is from Defillama
    elif website == 2:
        df = pd.DataFrame(chartData)
        df['date'] = pd.to_datetime(df['date'], unit='s').dt.strftime('%Y-%m-%dT%H:%M:%SZ')
        df.rename(columns={'date': 'name'}, inplace=True)

    # data is from TokenTerminal
    elif website == 3:
        df = pd.DataFrame(chartData['data'])
        df = df.pivot(index='timestamp', columns='allocation', values='vested')
        df = df.reset_index()
        df = df.rename(columns={'timestamp': 'name'})
        df.fillna(0, inplace=True)
        df.columns.name = None
        df['name'] = pd.to_datetime(df['name']).dt.strftime('%Y-%m-%dT%H:%M:%SZ')
        # Iterate through each column in the DataFrame, except for 'name'
        for col in df.columns:
            if col != 'name':
                df[col] = df[col].astype(float)

    # data is from CryptoRank
    elif website == 4:
        processed_data = process_data_cr(chartData)
        df = pd.DataFrame.from_dict(processed_data, orient='index').fillna(0)
        df = df.applymap(float)
        df = df.reset_index()
        df.rename(columns={'index': 'Date'}, inplace=True)

    # export to xlsx file
    if 'output' not in os.listdir():
        os.mkdir(os.getcwd() + '/' + 'output')
    if website == 1:
        if 'tu' not in os.listdir('output'):
            os.mkdir(os.getcwd() + '/output/tu')
        url = os.getcwd() + f'/output/tu/chartData_{k}_{v}_{today}.xlsx'
    if website == 2:
        if 'dl' not in os.listdir('output'):
            os.mkdir(os.getcwd() + '/output/dl')
        url = os.getcwd() + f'/output/dl/chartData_{k}_{v[1:]}_{today}.xlsx'
    if website == 3:
        if 'tt' not in os.listdir('output'):
            os.mkdir(os.getcwd() + '/output/tt')
        url = os.getcwd() + f'/output/tt/chartData_{k}_{v}_{today}.xlsx'
    if website == 4:
        if 'cr' not in os.listdir('output'):
            os.mkdir(os.getcwd() + '/output/cr')
        url = os.getcwd() + f'/output/cr/chartData_{k}_{v}_{today}.xlsx'
    df.to_excel(url, index=False, engine='openpyxl')


def __main__():
    while True:
        website = int(input("""
From which aggregating platforms do you wish to crawl data from?
[1] TokenUnlocks
[2] Defillama
[3] TokenTerminal
[4] CryptoRank(currently broken)
..."""))

        if website in range(1,len(url_dict)+1):
            break
        else:
            print("You have chosen a wrong input, please choose from the above list!...")

    if website == 1:
        print("TokenUnlocks\n")
        slug_dict = get_slug_tu()
        print(f"Crawling {len(slug_dict)} Projects from TokenUnlocks:\n")
        for k, v  in slug_dict.items():
            # Random Crawling Duration
            time.sleep(random.randint(1,random_duration))
            chartData = get_data_tu(v)
            if chartData:
                print(f"Data for project {k} from TokenUnlocks with slug: {v}")
                to_excel(k,v,chartData, website)
                print(f"Exported for project {k}!")

    elif website == 2:
        print("Defillama\n")
        slug_dict = get_slug_dl()
        print(f"Crawling {len(slug_dict)} Projects from DefiLlama:\n")
        for k, v in slug_dict.items():
             # Random Crawling Duration
            time.sleep(random.randint(1,random_duration))
            chartData = get_data_dl(v)
            v = v[8:]
            if chartData is not None:
                print(f"Data for project {k} from DefiLlama with slug: {v}")
                to_excel(k,v,chartData, website)
                print(f"Exported for project {k}!")
            else:
                print(f"Unable to get chartdata with slug: {v}")

    elif website == 3:
        print("TokenTerminal\n")
        slug_dict = get_slug_tt()
        print(f"Crawling {len(slug_dict)} Projects from TokenTerminal:\n")
        for k, v in slug_dict.items():
             # Random Crawling Duration
            time.sleep(random.randint(1,random_duration))
            chartData = get_data_tt(v)
            print(f"Data for project {k} from TokenTerminal with slug: {v}")
            to_excel(k,v,chartData, website)
            print(f"Exported for project {k}!")

    elif website == 4:
        print("CryptoRank\n")
        slug_dict = get_slug_cr()
        print(f"Crawling {len(slug_dict)} Projects from CryptoRank:\n")
        for k, v in slug_dict.items():
             # Random Crawling Duration
            time.sleep(random.randint(1,random_duration))
            chartData = get_data_cr(v)
            print(f"Data for project {k} from CryptoRank with slug: {v}")
            to_excel(k,v,chartData, website)
            print(f"Exported for project {k}!")



__main__()
