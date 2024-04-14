import yaml
from web3 import Web3
from web3.middleware import geth_poa_middleware

# Load configuration from a YAML file
def load_config(file_path):
    with open(file_path, 'r') as f:
        return yaml.safe_load(f)

# Contract interaction class
class ContractInteraction:
    def __init__(self, config, chain):
        self.config = config
        chain_data = config['CONTRACT_ADDRESS'][chain]
        self.chain_id = chain_data['chain_id']
        self.rpc_endpoint = chain_data['rpc_endpoint']
        self.contract_address = chain_data['address']
        self.private_key = config['PRIVATE_KEY']
        
        # Connect to the node
        self.web3 = Web3(Web3.HTTPProvider(self.rpc_endpoint))
        self.web3.middleware_onion.inject(geth_poa_middleware, layer=0)
        
        # Create contract instance
        self.contract = self.web3.eth.contract(address=self.contract_address, abi=chain_data['abi'])

    def mint(self, to_address, amount):
        tx = self.contract.functions._mint(to_address, amount).buildTransaction({
            'chainId': self.chain_id,
            'gas': 2000000,
            'nonce': self.web3.eth.getTransactionCount(self.web3.eth.account.privateKeyToAccount(self.private_key).address)
        })
        signed_tx = self.web3.eth.account.sign_transaction(tx, private_key=self.private_key)
        return self.web3.eth.sendRawTransaction(signed_tx.rawTransaction)

    def burn(self, amount):
        tx = self.contract.functions._burn(amount).buildTransaction({
            'chainId': self.chain_id,
            'gas': 2000000,
            'nonce': self.web3.eth.getTransactionCount(self.web3.eth.account.privateKeyToAccount(self.private_key).address)
        })
        signed_tx = self.web3.eth.account.sign_transaction(tx, private_key=self.private_key)
        return self.web3.eth.sendRawTransaction(signed_tx.rawTransaction)

    def transfer(self, to_address, amount):
        tx = self.contract.functions.transfer(to_address, amount).buildTransaction({
            'chainId': self.chain_id,
            'gas': 2000000,
            'nonce': self.web3.eth.getTransactionCount(self.web3.eth.account.privateKeyToAccount(self.private_key).address)
        })
        signed_tx = self.web3.eth.account.sign_transaction(tx, private_key=self.private_key)
        return self.web3.eth.sendRawTransaction(signed_tx.rawTransaction)

# Usage
if __name__ == "__main__":
    config = load_config('config.yaml')  # Assuming the YAML file is named config.yaml
    contract_interaction = ContractInteraction(config, 'Polygon')  # Change 'Polygon' to another chain name as needed

