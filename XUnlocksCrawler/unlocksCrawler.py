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

random_duration = 8
url_dict = {
    'token_unlocks': 'https://token.unlocks.app',
    'defillama' : 'https://defillama.com',
    'token_terminal' : 'https://tokenterminal.com',
    'crypto_rank' : 'https://cryptorank.io'
}

headers = {'User-Agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/89.0.4389.82 Safari/537.36'}
today = date.today().strftime("%Y-%m-%d")
cookies = {
    "_ga": "GA1.1.1849365358.1695608551",
    "__Host-next-auth.csrf-token": "df6538a92f89ce90541ddaedcd5ee52a774e3cd385a5409c59ab2ea74fa5e166%7Ce5c6869da7f0d8aa1d968e05d8c61b5dcdb431e10d32cb0dbc76351688fe4dbb",
    "_ga_CYF43L5G47": "GS1.1.1698020942.1.1.1698021075.0.0.0",
    "_ga_T3LR4ZK89W": "GS1.1.1698020942.2.1.1698021075.0.0.0",
    "_hjSessionUser_3057115": "eyJpZCI6IjY0ZTQwNjExLTBkZDMtNTZjYS1iNzdhLWMxYmJkYTljMDQ2MCIsImNyZWF0ZWQiOjE2OTY5NDMxNjA2MjEsImV4aXN0aW5nIjp0cnVlfQ==",
    "__stripe_mid": "f9775e12-d14c-431c-b7cc-fe576aa26f09c29e39",
    "__Secure-next-auth.callback-url": "https%3A%2F%2Ftoken.unlocks.app%2F1inch",
    "__Secure-next-auth.state": "",
    "__Secure-next-auth.pkce.code_verifier": "",
    "tokenunlocks-session": "23gfq88hd2f",
    "_hjSession_3057115": "eyJpZCI6IjZlNmU0NWEyLTE3MTktNDFlMC1hMGU1LWJlOWVlM2NkOTFjOCIsImMiOjE3MDYxNzQzMzAyNjUsInMiOjAsInIiOjAsInNiIjowLCJzciI6MCwic2UiOjAsImZzIjowLCJzcCI6MH0=",
    "__Secure-next-auth.session-token": "eyJhbGciOiJkaXIiLCJlbmMiOiJBMjU2R0NNIn0..Y8nCuIakyNfKUAmJ.dnUdlX1yyf-W0Dv4WFD6Eegvm36bOi-senP_bGzDdNS4ITbY3OAOjOJDv0d_-Ke3M2yboj16KJ8PBNVlKm1zST1xKFA7FB2xK7ckyDqKXo6yXNoPpQSpmaQNbME7BAuf5Wbs0uOip2X-5MOvHnpOzjbE5k2qqjMK2NLdnhlz6myRUCLA_iok4XM1lZUfAamurQcIlAIQ3iMp1gASjqXmYMqje1DPg4x-aGt8mno81Ea8O9GayHdFW0MueDsdfxXgwoWI6ul2p47lmNlAsHIAR0SHWclMe4xzNUn4jUu4kbsVFcci37f-s1UdgsrOnFoHZ7ywQNJPwgI1FSZIISn5zfof7JXBPUP4DE7oECue6LdVkR9fBmY5fzUX-9ehN4ZstgjfcoFYygIcBRTo9ms282FniJvoqwO3B9HQkbxFUi_hwVvagk2U5CyZgKRJ3_xYnO_Qd_EQ7T6GPF9Lk1PkET8Bnegqfde_qtxunBsWOTMUM0g_Qp0kgpb4mrFK6FW3Miuusb0ZP_H9BIJU-MglxeC8yFiQlQZAHLRghJ-2V7RLWrsQBv9SgCjaSaixY4zjYVDnG5WLUYE5LUSoKP_B6_0Ss1xnx9sa85Cx_AtxA_QyKG5TMqYMDFJUj9qUWNv9oMpUunU37eQ3_zFSRpDucSJooO0DUqBoc7XuJfJUbATeZVzd64M6bjn97yl3W5QMTKOKoqBc0wXitX8788upWF1-MBUGBFcAgwTjtX5KBpUd53_YulEDSFQPZ4dA7l2bd0P2chmz7T8h6Mabd7JQBi3FGetk1zaFpSvdsHe_dmc8f6eULBbHS7hkCwzUma4aQEKC1yXxeeQV1ZKvsDIYa1oP8qhP5B3LOPYY_Z4sjwxR0DUYzC9ggjTDrkrTjt5ExMXOZ1XdcxYHKu6oMLIPAPQkumaR2te9LlzY7HA1RitTK2UZffCAyWsKoZsbPW7dMkv72qimE7EGGyDTwKLK4hvO_F2Utwn5ZTKGH8bhKsxrohSGtvEb-nvQCN1gLxvKNTEMjto9rg6GkQfoyjjuf7OGRQEnMcLd4Kp0kVCPqvbADD8AUm8etv9GI5MJgOd2QH_NpSr2bfU2kn6tbhkHm-5DK9B1V-3oOcSMMgW3T8y6SOcE75iGIR-jh6qAQ1V07OB1Pl7huR-HvGtPHO7RKu67dRzxHMkyKX4mWLOrhwO03yBor6cYariPoo8NeYvOvcKzZH3dNXnNZaTerYroFNg_aBSddiZ31ixu3jE0F_enpSxKVgTWGZksfm04n2VYtzibljR4IANblzY7ZJFR6RiJ_7DUsuOPdqOKEkL5yPv5ykmcLrWxELYn0Chn8g3gJxetibJWiXzbaF2vy9xSXdUgtp12eqAJGRCvUqLpIOicDYCo1xa4R5pSLu7MVJUezWsDA--U1cA1uCzoKaStiz4XMqv0uJHLen8cNdrpiJWkTP7ho6othJrUpsGCI_SsL6uMoUgaDYQgcRyBS_qx3YvX-LgrVpYi2buC0EE0vD3v5FiUILkrY_3IhTdkJ_QucGyloAxPX3bLtg_2mdKX74alHR6lS7ot0f85cMXZnp57Lq7hYqQg6ETd5iw_lO4EaodJ2ZIs4kKtQ08l5etwrO_pzo202EvW-SDgtHOyC07_ERtkw8JBRctFrFAmkQUuAGjz6-zyZjaUdo5z8O7ct0BhJYsC4r4CdS-bA2EN0mPrscuNGC-MicITuqXAga5Fx9LpGbLhDHwrOfTMK_qh-XmPMWbA1mFpUDdocMJYGwZ8eYcJ77HVcH9nnZ2sjkT7_DFfsLgGvUPQUQTWL92MBGkvXtON7AMZGRdkU4mcweeCFQxZdjE58IrWYx3o6-QlF8ARCIrwU3yySOBM0ciGNX3TK9YblvJvAw.bssf8cYkzivVmIJiWSptxw",
    "amp_96dc34": "4fHX8U7Ie2KcmaaQAzN-cl.MjQ1NDNkNWMtMjk3YS00ZDhmLWJjZjktNDM2NWJlYmE5NWU2..1hkvukdba.1hkvur38q.b3.2.b5",
    "_ga_75CFN3DMPM": "GS1.1.1706174330.20.1.1706174561.36.0.0"
}



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
    elements = soup.select("#__next > div > main > div.sc-5efd1df0-0.gkcbSZ.sc-a8b09c60-1.ecfugK > div:nth-child(2) > div > div > span > a")
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
    response = requests.get(url, headers=headers, cookies=cookies)
    if response.status_code != 200:
        print(f"ERROR: Requested Link: {url} is unable to return response:200 from TokenUnlocks API with slug: {slug}")
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
            print(f"ERROR: Couldn't return viable data(official nor onchain) from TokenUnlocks API with slug: {slug}")
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
