from selenium import webdriver
from selenium.webdriver.common.by import By
from selenium.webdriver.support.ui import WebDriverWait
from selenium.webdriver.support import expected_conditions as EC
from selenium.common.exceptions import ElementClickInterceptedException
from bs4 import BeautifulSoup
import time
import re


def get_slug_tu_dynamic(url, headers):
    options = webdriver.ChromeOptions()
    options.add_argument('headless')
    options.add_argument("no-sandbox")
    options.add_argument("disable-gpu")
    options.add_argument(f"user-agent={headers['User-Agent']}")

    # Initialize the Selenium WebDriver
    driver = webdriver.Chrome(options=options)
    driver.get(url)

    wait = WebDriverWait(driver, 10)
    try:
        # Extract the number of total pages from the parent component using XPath
        total_pages_elem = wait.until(EC.presence_of_element_located(
            (By.XPATH, "/html/body/div/div[3]/div[2]/div[6]/div[2]/div[2]/div/button[last()]")))
        total_pages = int(total_pages_elem.text)

        print(f"Total pages: {total_pages}")

        slug_dict = {}
        for page in range(1, total_pages + 1):
            print(f"Extracting data from page {page}/{total_pages}")

            soup = BeautifulSoup(driver.page_source, 'html.parser')
            elements = soup.select("table > tbody > tr.group")
            for element in elements:
                slug_dict[f"{element.select_one('td > a > div > p').text}"] = element.select_one('td > a')["href"][1:]

            print(f"Extracted data from page {page}/{total_pages}")

            if page < total_pages:
                # Find and click the next button
                next_button_xpath = "/html/body/div/div[3]/div[2]/div[6]/div[2]/div[2]/button[last()]"
                next_button = wait.until(EC.element_to_be_clickable((By.XPATH, next_button_xpath)))
                driver.execute_script("arguments[0].click();", next_button)
                wait.until(EC.staleness_of(next_button))  # wait until the old button is stale

    except Exception as e:
        print(f"An error occurred: {e}")
    finally:
        # Close the driver
        driver.quit()

    return slug_dict


