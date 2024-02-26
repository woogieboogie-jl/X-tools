import os
import json
import requests

from dotenv import load_dotenv
from tqdm import tqdm

load_dotenv()
# QuickNode Endpoint & Key
RPC_ENDPOINT_EXECUTION = os.getenv("RPC_ENDPOINT_EXECUTION")
RPC_ENDPOINT_CONSENSUS = os.getenv("RPC_ENDPOINT_CONSENSUS")
RPC_ENDPOINT_KEY = os.getenv("RPC_ENDPOINT_KEY")

# Private Node Endpoint(Xangle)
RPC_PRIVATE_ENDPOINT_EXECUTION = os.getenv("RPC_PRIVATE_ENDPOINT_EXECUTION")
RPC_PRIVATE_ENDPOINT_CONSENSUS = os.getenv("RPC_PRIVATE_ENDPOINT_CONSENSUS")


def rpc_request(secured, http_method, endpoint, payload=None):
    """
    Sends an RPC request to the specified URL with the given HTTP method and payload.

    Parameters:
    - endpoint (str): The endpoint URL to which the request is sent.
    - http_method (str): The HTTP method to use for the request. Default is "GET".
    - payload (dict): The payload for the request, if any. Default is None.

    Returns:
    - The response from the server as a Python dictionary.
    """

    headers = {"accept": "application/json"}

    # https connection in case of using external providers
    if secured:
        endpoint = "https://" + endpoint
    else:
        endpoint = "http://" + endpoint

    # Add content-type header for POST requests
    if http_method in ["POST", "PUT", "PATCH"]:
        headers["Content-Type"] = "application/json"

    try:
        if http_method == "GET":
            response = requests.get(endpoint, headers=headers)
        elif http_method == "POST":
            response = requests.post(
                endpoint, headers=headers, data=json.dumps(payload)
            )
        elif http_method == "PUT":
            response = requests.put(endpoint, headers=headers, data=json.dumps(payload))
        elif http_method == "DELETE":
            response = requests.delete(endpoint, headers=headers)
        elif http_method == "PATCH":
            response = requests.patch(
                endpoint, headers=headers, data=json.dumps(payload)
            )
        else:
            return {"error": "Unsupported HTTP method"}

        # Check if the response is successful
        response.raise_for_status()

        # Return JSON response if possible, else return response content
        return response.json()
    except requests.exceptions.HTTPError as errh:
        return {"error": f"HTTP Error: {errh}"}
    except requests.exceptions.ConnectionError as errc:
        return {"error": f"Connection Error: {errc}"}
    except requests.exceptions.Timeout as errt:
        return {"error": f"Timeout Error: {errt}"}
    except requests.exceptions.RequestException as err:
        return {"error": f"Unexpected Error: {err}"}


class EthRPCClientExecution:
    def __init__(self, client_type="execution", local=True):
        if local:
            # self.endpoint = "llarmarpc.com/", need to use https 
            self.endpoint = RPC_PRIVATE_ENDPOINT_EXECUTION
            self.secured = False
        else:
            self.endpoint = RPC_ENDPOINT_EXECUTION + "/" + RPC_ENDPOINT_KEY + "/"
            self.secured = True

    def get_block(self, blocknumber):
        http_method = "POST"
        payload = {
            "method": "eth_getBlockByNumber",
            "params": [str(hex(blocknumber)), False],
            "id": 1,
            "jsonrpc": "2.0",
        }
        return rpc_request(self.secured, http_method, self.endpoint, payload)

    # uses nephew blockhash and uncleblock's index to induce uncleblock's number
    def get_uncleblocknumber_by_hash(self, blockhash, idx):
        http_method = "POST"
        payload = {
            "method": "eth_getUncleByBlockHashAndIndex",
            "params": [blockhash, str(hex(idx))],
            "id": 1,
            "jsonrpc": "2.0",
        }
        response = rpc_request(self.secured, http_method, self.endpoint, payload)
        return int(response["result"]["number"], 0)

    def latest_blocknumber(self):
        http_method = "POST"
        payload = {
            "method": "eth_blockNumber",
            "params": [],
            "id": 1,
            "jsonrpc": "2.0",
        }
        # returns integer value of the returned hexadecimal blocknumber
        response = rpc_request(self.secured, http_method, self.endpoint, payload)
        return int(response["result"], 0)

    def get_base_reward(self, blocknumber):
        if blocknumber <= 4369999:
            return 5
        elif blocknumber <= 7279999:
            return 3
        elif blocknumber <= 15537392:
            return 2
        else:
            return 0

    # Uncle Reward = (Uncle Block's blocknumber + 8 — currentBlocknumber) *  baseBlockReward/ 8
    def get_uncle_reward(self, blocknumber):
        baseBlockReward = self.get_base_reward(blocknumber)
        block = self.get_block(blocknumber)["result"]
        uncleblocks_hash = block["uncles"]
        # If uncleblocks_hash (list) is not empty, iterate and add each uncle reward + nephew reward
        if len(uncleblocks_hash) > 0:
            nephew_reward = len(uncleblocks_hash) * (baseBlockReward / 32)
            for i in range(len(uncleblocks_hash)):
                uncleblock_number = self.get_uncleblocknumber_by_hash(block["hash"], i)
                uncle_reward = (
                    (uncleblock_number + 8 - int(block["number"], 0)) * baseBlockReward
                ) / 8
            return nephew_reward + uncle_reward
            # Else return 0
        else:
            return 0



class EthRPCClientConsensus:
    def __init__(self, client_type="consensus", local=True):
        if local:
            self.endpoint = RPC_PRIVATE_ENDPOINT_CONSENSUS
            self.secured = False
        else:
            self.endpoint = RPC_ENDPOINT_CONSENSUS + "/" + RPC_ENDPOINT_KEY + "/"
            self.secured = True

    def latest_finalized_epoch(self):
        http_method = "GET"
        endpoint = self.endpoint + "/eth/v1/beacon/headers/finalized"
        return rpc_request(self.secured, http_method, endpoint)

    def rewards_attestation(self, epoch):
        http_method = "POST"
        endpoint = self.endpoint + f"/eth/v1/beacon/rewards/attestations/{epoch}"
        return rpc_request(self.secured, http_method, endpoint)

    def rewards_proposer(self, epoch):
        http_method = "POST"
        endpoint = self.endpoint
        payload = {}
        return rpc_request(self.secured, http_method, endpoint, payload)

    def rewards_sync_committee(self, epoch):
        http_method = "POST"
        pass

    def get_slashed_per_epoch(self, epoch):
        pass


