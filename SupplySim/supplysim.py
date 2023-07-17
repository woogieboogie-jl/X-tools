# Import required libraries
import pandas as pd
import numpy as np
from matplotlib import pyplot as plt

index_filename = "X30.csv"


def read_index():
    df_index = pd.read_csv('')
    return

def read_price():
    df = pd.read_csv('')
df_price = pd.read_csv('')

def load_data(filename):
    # Load Polygon (Matic) price data
    df_matic = pd.read_csv('matic-usd-max.csv', parse_dates=['snapped_at'], index_col='snapped_at')
    df_matic.index.tz_localize(None)
    df_matic.index = df_matic.index.date
    df_matic.index = pd.to_datetime(df_matic.index)

    # Load Top 30 Crypto Index data - default settings: X30
    df_X30 = pd.read_csv(f'{index_filename}', parse_dates=['timestamp'], index_col='timestamp')
    df_X30 = df_X30.resample('D').last()  # Resample the data to get the last value for each day
    df_X30.index.tz_localize(None)
    df_X30.index = df_X30.index.date
    df_X30.index = pd.to_datetime(df_X30.index)

    # Load unlock schedule
    df_tu = pd.read_csv('chartData_Polygon_matic-network.csv', parse_dates=['name'], index_col='name')
    df_tu = df_tu.resample('D').last()  # Resample the data to get the last value for each day
    df_tu.index.tz_localize(None)
    df_tu.index = pd.to_datetime(df_tu.index)

    df_matic_price = df_matic['price']
    df_unlocks = df_tu.sum(axis=1).resample('D').sum()
    return df_price, df_supply, df_index


def normalize(df_price, df_supply, df_index, period):
    merged_df = pd.concat([df_price, df_supply, df_index], axis=1, keys=['p', 's', 'i'])
    merged_df = merged_df.dropna()
    resampled_df = merged_df.resample(f'{period}').mean()
    resampled_df_pct = resampled_df.pct_change()

    price_change_pct = (resampled_df_pct['p']['price'] - resampled_df_pct['i']['X30']) * 100
    unlocks_change_pct = resampled_df['s'][0].pct_change()*100
    return price_change_pct.dropna(), unlocks_change_pct.dropna()

df_matic_price_change_normalized_monthly, df_unlocks_change_monthly = normalize(df_matic_price, df_X30, df_unlocks, '1M')
df_matic_price_change_normalized_quarterly, df_unlocks_change_quarterly = normalize(df_matic_price, df_X30, df_unlocks, '3M')
df_matic_price_change_normalized_biannually, df_unlocks_change_biannually = normalize(df_matic_price, df_X30, df_unlocks, '6M')
df_matic_price_change_normalized_annually, df_unlocks_change_annually = normalize(df_matic_price, df_X30, df_unlocks, '1Y')


def plot(df_price_change_normalized, df_supply_change, period, correlation):
    fig, axs = plt.subplots(4,1,figsize=(10,20))
    axs[0].scatter(df_supply_change, df_price_change_normalized)
    axs[0].set_title(f'{period} Correlation: {correlation}')
    axs[0].set_xlabel(f'{period} Supply Change (%)')
    axs[0].set_ylabel(f'{period} Price Change (%)')


def __main__():
    df_price, df_supply, df_index = load_data()





fig, axs = plt.subplots(4, 1, figsize=(10, 20))

# Scatter plot for monthly data
axs[0].scatter(df_unlocks_change_monthly, df_matic_price_change_normalized_monthly)
axs[0].set_title(f'Monthly Data (Correlation: {correlation_monthly:.2f})')
axs[0].set_xlabel('Unlock Schedule Change (%)')
axs[0].set_ylabel('Matic Price Change (%)')

# Scatter plot for quarterly data
axs[1].scatter(df_unlocks_change_quarterly, df_matic_price_change_normalized_quarterly)
axs[1].set_title(f'Quarterly Data (Correlation: {correlation_quarterly:.2f})')
axs[1].set_xlabel('Unlock Schedule Change (%)')
axs[1].set_ylabel('Matic Price Change (%)')

# Scatter plot for biannual data
axs[2].scatter(df_unlocks_change_biannually, df_matic_price_change_normalized_biannually)
axs[2].set_title(f'Biannual Data (Correlation: {correlation_biannually:.2f})')
axs[2].set_xlabel('Unlock Schedule Change (%)')
axs[2].set_ylabel('Matic Price Change (%)')

# Scatter plot for annual data
axs[3].scatter(df_unlocks_change_annually, df_matic_price_change_normalized_annually)
axs[3].set_title(f'Annual Data (Correlation: {correlation_annually:.2f})')
axs[3].set_xlabel('Unlock Schedule Change (%)')
axs[3].set_ylabel('Matic Price Change (%)')

plt.tight_layout()
plt.show()

