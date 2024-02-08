import os
import json
from dotenv import load_dotenv
import requests


load_dotenv()
# QuickNode Endpoint & Key
RPC_ENDPOINT_EXECUTION = os.getenv("RPC_ENDPOINT_EXEUCTION")
RPC_ENDPOINT_CONSENSUS = os.getenv("RPC_ENDPOINT_CONSENSUS")
RPC_ENDPOINT_KEY = os.getenv("RPC_ENDPOINT_KEY")

# Private Node Endpoint(Xangle)
RPC_PRIVATE_ENDPOINT_EXECUTION = os.getenv("RPC_PRIVATE_ENDPOINT_EXECUTION")
RPC_PRIVATE_ENDPOINT_CONSENSUS = os.getenv("RPC_PRIVATE_ENDPOINT_CONSENSUS")


def rpc_request(http_method, endpoint, payload=None):
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
    def __init__(self, endpoint, client_type="execution", local=True):
        self.endpoint = (
            RPC_PRIVATE_ENDPOINT_EXECUTION if local else RPC_ENDPOINT_EXECUTION
        )

    def get_block(self, blocknumber):
        http_method = "POST"
        payload = {
            "method": "eth_getBlockByNumber",
            "params": [hex(blocknumber), False],
            "id": 1,
            "jsonrpc": "2.0",
        }
        return rpc_request(http_method, self.endpoint, payload)

    def latest_blockNumber(self):
        http_method = "POST"
        payload = {
            "method": "eth_blockNumber",
            "params": [],
            "id": 1,
            "jsonrpc": "2.0",
        }
        return rpc_request(http_method, self.endpoint, payload)

    def get_base_reward(self, blocknumber):
        if blocknumber <= 4369999:
            return 5
        elif blocknumber <= 7279999:
            return 3
        elif blocknumber <= 15537392:
            return 2
        else:
            return None

    # Uncle Reward = (Uncle Block's blockNumber + 8 — currentBlockNumber) *  baseBlockReward/ 8
    def get_uncle_reward(self, blocknumber):
        baseBlockReward = self.get_base_reward(blocknumber)
        block = self.get_block(blocknumber)
        if block.uncles.length > 0:
            nephew_reward = block.uncles.length * (baseBlockReward / 32)

        for i in range(block.uncles.length):
            uncleBlock = self.get_Block(block.uncles[i])
            uncle_reward = (
                (uncleBlock.number + 8 - block.number) * baseBlockReward
            ) / 8

        return nephew_reward + uncle_reward


class EthRPCClientConsensus:
    def __init__(self, endpoint, client_type="consensus", local=True):
        self.endpoint = (
            RPC_PRIVATE_ENDPOINT_CONSENSUS if local else RPC_ENDPOINT_CONSENSUS
        )

    def latest_finalized_epoch(self):
        http_method = "GET"
        endpoint = self.endpoint + "/eth/v1/beacon/headers/finalized"
        return rpc_request(http_method, endpoint)

    def rewards_attestation(self, epoch):
        http_method = "POST"
        endpoint = self.endpoint + f"/eth/v1/beacon/rewards/attestations/{epoch}"
        return rpc_request(http_method, endpoint)

    def rewards_proposer(self, epoch):
        http_method = "POST"
        endoint = self.endpoint
        payload = {}
        return rpc_request(http_method, endpoint, payload)

    def rewards_sync_committee(self, epoch):
        http_method = "POST"
        pass

    def get_slashed_per_epoch(self, epoch):
        pass


# Need Revision
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
        return f"http://{RPC_PRIVATE_ENDPOINT_CONSENSUS}/{endpoint}"
    else:
        return f"https://{RPC_ENDPOINT_CONSENSUS}/{RPC_ENDPOINT_KEY}/{endpoint}"
