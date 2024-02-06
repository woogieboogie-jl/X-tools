import os
from dotenv import load_dotenv
import requests

load_dotenv()

RPC_ENDPOINT = os.getenv('RPC_ENDPOINT')
RPC_ENDPOINT_KEY = os.getenv('RPC_ENDPOINT_KEY')
RPC_PRIVATE_ENDPOINT = os.getenv('RPC_PRIVATE_ENDPOINT')

def compose_endpoint(reward_type, state_id, local=True):

    if reward_type == "attestation":
        # query via epoch, state_id = epoch
        endpoint = f"eth/v1/beacon/rewards/attestations/{state_id}"
    elif reward_type == "sync_committee":
        # query via block_id, state_id = block_id 
        endpoint = f"eth/v1/beacon/rewards/sync_committee/{state_id}"
    elif reward_type == "block":
        # query via block_id, state_id = block_id
        endpoint = f"eth/v1/beacon/rewards/blocks/{state_id}" 
    if local:
        return f"http://{RPC_PRIVATE_ENDPOINT}/{endpoint}"
    else:
        return f"https://{RPC_ENDPOINT}/{RPC_ENDPOINT_KEY}/{endpoint}"

def request_node(reward_type, state_id, payload, method="GET", local=False):
    endpoint = compose_endpoint(reward_type, state_id, local)
    headers = {'accept': 'application/json'}

    if method == "POST":
        headers['Content-Type'] = 'application/json'
        response = requests.post(url=endpoint, headers=headers, json=payload)
    else:
        response = requests.get(url=endpoint, headers=headers)

    return response.json()

# Example usage for GET request
response_get = request_node("block", "6499529", payload={}, method="GET", local=True)
print(response_get)

# Example usage for POST request
payload_post = [
    "294266"
]
response_post = request_node("attestation", "203110", payload=payload_post, method="POST", local=True)
print(response_post)
response_post = request_node("sync_committee", "203110", payload=payload_post, method="POST", local=True)



