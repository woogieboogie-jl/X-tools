from selenium import webdriver
from selenium.webdriver.common.by import By
from selenium.webdriver.support.ui import WebDriverWait
from selenium.webdriver.support import expected_conditions as EC
from selenium.common.exceptions import ElementClickInterceptedException
from bs4 import BeautifulSoup
import time

def get_slug_tu_dynamic(url, headers):

    options = webdriver.ChromeOptions()
    #options.add_argument('headless')
    options.add_argument("no-sandbox")
    options.add_argument("disable-gpu")
    options.add_argument(f"user-agent={headers['User-Agent']}")

    # Initialize the Selenium WebDriver
    driver = webdriver.Chrome(options=options)
    driver.get(url)

    # Extract the number of total pages from the parent component using XPath
    wait = WebDriverWait(driver, 10)
    total_pages_elem = wait.until(EC.presence_of_element_located((By.XPATH, "/html/body/div[2]/div[2]/div[2]/div[4]/div[2]/div[2]/div[2]/div/button[last()]")))
    total_pages = int(total_pages_elem.text)

    print(f"Total pages: {total_pages}")

    slug_dict = {}

    # Loop through each pagination button and click it
    for page in range(1, total_pages + 1):

        # Extract the current page's content
        soup = BeautifulSoup(driver.page_source, 'html.parser')
        elements = soup.select("table > tbody > tr.rc-table-row")
        for element in elements:
            slug_dict[f"{element.select_one('td > a > div > div > p').text}"] = element.select_one('td > a')["href"]

        print(f"Extracted data from page {page}")

        # If we're on the last page, break
        if page == total_pages:
            break

        # Find and click the next button
        button_xpath = f"/html/body/div[2]/div[2]/div[2]/div[4]/div[2]/div[2]/div[2]/div/button[{page + 1}]"
        button = wait.until(EC.element_to_be_clickable((By.XPATH, button_xpath)))
        driver.execute_script("arguments[0].click();", button)
        time.sleep(2)

    # Close the driver
    driver.quit()




    return slug_dict


