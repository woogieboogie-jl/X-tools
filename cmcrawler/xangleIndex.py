import requests
from bs4 import BeautifulSoup as bs
from requests_html import HTMLSession

session = HTMLSession()
r = session.get(url)
r.html.render() 

url = "https://xangle.io/"
headers = {'User-Agent': 'Mozilla/5.0 (Macintosh; Intel Mac OS X 10_10_1) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/39.0.2171.95 Safari/537.36'}
def get_soup(url):
    r = requests.get(url, headers=headers)
    if r.status_code == 200:
        return {"status": 200, "soup": bs(r.text, "html.parser")}
    else: 
        return {"status": r.status_code, "soup": None}

def selectIdx(soup):
    Idxs = soup
    return Idxs 



if __name__ == '__main__':
    res_soup = get_soup(url)
    if res_soup["status"] == 200:
        Idxs = selectIdx(res_soup["soup"])
        print(Idxs)
    else:
        print(f"server responded with an error, code: {res_soup['status']}")

