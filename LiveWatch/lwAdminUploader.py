import csv
import pandas as pd
from datetime import datetime
import os
from openpyxl import load_workbook
from openpyxl.utils.dataframe import dataframe_to_rows

def get_template():
    wb = load_workbook(filename = 'input_csvs/template/xangle_template_unlockschedule.xlsx')
    return wb


def is_dir_else_create(project_name):
    if os.path.isdir(project_name) is False:
        os.mkdir(project_name)


def first_of_month(date):
    date_obj = datetime.strptime(date, '%Y/%m/%d')

    # Format the date object to the first day of the month
    first_day = date_obj.replace(day=1)
    return first_day

def extractor(project_name):
    df_dict = {}
    df = pd.read_csv(f"input_csvs/{project_name}.csv")
    date_first_day = [first_of_month(day) for day in df.columns[1:]]
    if date_first_day[0] == date_first_day[1]:
        date_first_day = date_first_day[1:]
        df = df.drop(columns = df.columns[1])
    for i,column in enumerate(df.values):
        data = {
            '락업해제일자* (yyyy-mm-dd)' : date_first_day,
            '락업해제수량*': [int(num_string.replace(',', '')) for num_string in column[1:]]
        }
        df = pd.DataFrame(data)
        df_dict[column[0]] = data
    return df_dict

def excel_writer(project_name, k, v ):
    wb = get_template()
    ws = wb['Sheet1']
    v = pd.DataFrame(v)
    rows, cols = v.shape

    for r in range(rows):
        for c in range(cols):
            cell = ws.cell(row=r+2, column=c+1)
            cell.value = v.iloc[r,c]

    filename = f'{project_name}/{k}_extracted.xlsx'
    wb.save(filename)
    print(f"{filename} saved!")

def main():
    if not os.path.isdir("input_csvs"):
        os.mkdir("input_csvs")
    project_name = input("which project would you like to extract?...")
    is_dir_else_create(project_name)
    df_dict = extractor(project_name)
    for k,v in df_dict.items():
        excel_writer(project_name, k, v)
    print(f"{project_name} extraction finished!")

main()
