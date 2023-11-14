import json

def process_data_cr(data):
    # Initialize a dictionary to store the results
    results = {}

    # Iterate through each allocation
    for allocation in data["allocations"]:
        category = allocation["name"]
        total_tokens = allocation["tokens"]
        accumulated_percent = 0

        # Iterate through each batch
        for batch in allocation["batches"]:
            date = batch["date"].split('T')[0]  # Extracting date without timezone
            unlock_percent = batch["unlock_percent"]
            accumulated_percent += unlock_percent

            # Calculate the accumulated number of tokens unlocked
            accumulated_tokens = (accumulated_percent / 100) * total_tokens

            # Add the data to the results dictionary
            if date not in results:
                results[date] = {}
            results[date][category] = accumulated_tokens

    return results



