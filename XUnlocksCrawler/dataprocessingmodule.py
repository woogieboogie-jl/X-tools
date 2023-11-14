import json
from decimal import Decimal, getcontext


def process_data_cr(data):
    results = {}
    all_dates = set()

    # Collect all dates from batches
    for allocation in data["allocations"]:
        for batch in allocation["batches"]:
            date = batch["date"].split('T')[0]
            all_dates.add(date)

    sorted_dates = sorted(list(all_dates))

    # Initialize the results for each date
    for date in sorted_dates:
        results[date] = {}

    for allocation in data["allocations"]:
        category = allocation["name"]
        total_tokens = Decimal(str(allocation["tokens"]))
        accumulated_percent = Decimal('0')

        last_known_accumulated_tokens = 0

        for date in sorted_dates:
            # Check if there is an event for this date
            for batch in allocation["batches"]:
                batch_date = batch["date"].split('T')[0]
                if batch_date == date:
                    accumulated_percent += Decimal(batch["unlock_percent"])
                    break

            # Calculate and update the accumulated tokens
            accumulated_tokens = (accumulated_percent / Decimal(100)) * total_tokens
            if accumulated_tokens != 0:
                last_known_accumulated_tokens = accumulated_tokens

            results[date][category] = last_known_accumulated_tokens

    return results
