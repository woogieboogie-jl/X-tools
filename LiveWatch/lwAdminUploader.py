import csv
import pandas as pd
from datetime import datetime
import os



def is_dir_else_create(project_name):
    if os.path.isdir(project_name) is False:
        os.mkdir(project_name)


def first_of_month(date):
    date_obj = datetime.strptime(date, '%Y/%m/%d')

    # Format the date object to the first day of the month
    first_day = date_obj.replace(day=1)
    return first_day.strftime('%Y/%m/%d')


def extractor(project_name):
    df = pd.read_csv(f"input_csvs/{project_name}.csv")
    date = df.columns[1:]
    date_first_day = [first_of_month(day) for day in date]
    for i,column in enumerate(df.values):
        data = {
            'date' : date,
            'value': column[1:]
        }
        df = pd.DataFrame(data)
        df.to_csv(f'{project_name}/[{i+1}] {column[0]}_extracted.csv', index=False)

def main():
    if not os.path.isdir("input_csvs"):
        os.mkdir("input_csvs")
    project_name = input("which project would you like to extract?...")
    is_dir_else_create(project_name)
    extractor(project_name)
    print(f"{project_name} extracted!")

main()
