from selenium import webdriver
from selenium.webdriver.common.by import By
from selenium.webdriver.support.ui import WebDriverWait
from selenium.webdriver.support import expected_conditions as EC
from selenium.common.exceptions import ElementClickInterceptedException
from selenium.webdriver.common.action_chains import ActionChains
from bs4 import BeautifulSoup
import pprint
import time
import random
import re


last_pagination_button_xpath = "/html/body/div/div[3]/div[2]/div[6]/div[2]/div[2]/div/button[last()]"
next_pagination_button_xpath = "/html/body/div/div[3]/div[2]/div[6]/div[2]/div[2]/button[last()]"

def get_slug_tu_dynamic(url, headers):
    options = webdriver.ChromeOptions()
    options.add_argument('headless')
    options.add_argument("no-sandbox")
    options.add_argument("disable-gpu")
    options.add_argument(f"user-agent={headers['User-Agent']}")

    driver = webdriver.Chrome(options=options)
    driver.get(url)
    time.sleep(3)
    wait = WebDriverWait(driver, 10)

    try:
        last_pagination_button = wait.until(EC.presence_of_element_located((By.XPATH, last_pagination_button_xpath)))
        driver.execute_script("arguments[0].scrollIntoView(true);", last_pagination_button)
        total_pages = int(last_pagination_button.text)

        print(f"Total pages: {total_pages}")

        time.sleep(random.randint(1,3))

        slug_dict = {}
        for page in range(1, total_pages + 1):
            try:
                print(f"Extracting data from page {page}/{total_pages}")

                soup = BeautifulSoup(driver.page_source, 'html.parser')
                elements = soup.select("table > tbody > tr.group")
                for element in elements:
                    slug_dict[f"{element.select_one('td > a > div > p').text}"] = element.select_one('td > a')["href"][1:]

                print(f"Extracted data from page {page}/{total_pages}")
                #pprint.pprint(slug_dict)

                if page < total_pages:
                    next_button_xpath = "/html/body/div/div[3]/div[2]/div[6]/div[2]/div[2]/button[last()]"
                    next_button = wait.until(EC.element_to_be_clickable((By.XPATH, next_button_xpath)))

                    driver.execute_script("arguments[0].scrollIntoView({block: 'center'});", next_button)
                    time.sleep(1)
                    next_button.click()
                    time.sleep(random.randint(1,2))

            except Exception as e:
                print(f"An error occurred on page {page}: {e}")

    except Exception as e:
        print(f"An error occurred: {e}")
    finally:
        driver.quit()

    return slug_dict


def get_slug_cr_dynamic(url, headers):

    options = webdriver.ChromeOptions()
    #options.add_argument('headless')
    options.add_argument("no-sandbox")
    options.add_argument("disable-gpu")
    options.add_argument(f"user-agent={headers['User-Agent']}")

    # Initialize the Selenium WebDriver
    driver = webdriver.Chrome(options=options)
    driver.get(url)

    # Wait for the page to load
    WebDriverWait(driver, 10).until(EC.presence_of_element_located((By.CSS_SELECTOR, "#root-container")))

    # Getting the number of pages
    pagination_buttons = driver.find_elements(By.CSS_SELECTOR, '#root-container > div:nth-child(3) > div:nth-child(2) > div > div:nth-child(3) > div > button')
    total_pages = pagination_buttons[-2].text

    print(f"Total pages: {total_pages}")

    slug_dict = {}

    # Iterate through pages
    for i in range(1, int(total_pages) + 1):
        url_pagination = url + f'?page={i}'
        driver.get(url_pagination)

        WebDriverWait(driver, 10).until(EC.presence_of_element_located((By.CSS_SELECTOR, "#root-container > div:nth-child(3) table > tbody")))

        parent_element = driver.find_element(By.CSS_SELECTOR, '#root-container > div:nth-child(3) table > tbody')
        tr_children = parent_element.find_elements(By.CSS_SELECTOR, "tr")

        for tr in tr_children:
            project_name = tr.find_element(By.CSS_SELECTOR, 'td:nth-child(2) > a > div > div > p').text
            project_link = tr.find_element(By.CSS_SELECTOR, 'td:nth-child(2) > a').get_attribute('href')
            slug = re.search(r'/price/([^/]+)/', project_link).group(1) if re.search(r'/price/([^/]+)/', project_link) else "Not found"
            slug_dict[project_name] = slug

        time.sleep(2)

    # Close the driver
    driver.quit()

    return slug_dict
