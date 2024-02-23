import ethereum_py
import ethereum_cl


def countBlocks():
    pass


def countSlots():
    pass


def totalSupply():
    pass


def totalSupplyEL():
    pass


def totalSupplyCL():
    pass


# 1. Get the latest block(historical) by getting the number of the latest block that was finalized from the Consensus Layer, we will use getLatestFinalizedBlock() to the consensus layer and open the payload to confirm the latest Execution level blockNumber
# 2. We will then divide the process into two steps: 1. Historical (until current finalized slot) 2. Real Time (starting from current finalized slot) Need Parallel Processing for this. Historical starts from blocknumber 0(genesis) to current blockNumber, real time starts from the next blockNumber and listens to the latest finalized block, it does this by querying RPC and it's finalized latest block(slot) by comparing it to its latest block(slot)Number, if its bigger, we should request for the rewards info mentioned below
# 3. Historical process iterates until the block_last_finalized, and real time keeps the record on real-time finalized blocks.
# 4. For Each process, it follows two processes: 1. supply data from execution layer and 2. supply data from the consensus layer, see each layer's handler for more detail, action expected from each handler differs.
# 5. If iteration of Historical process is finished, then all is well.


# Additional Quest
# Exclude Staked Assets(Staked Assets are excluded from circulating and thus starts from the beacon chain genesis and deposits made on the beacon chain) Suppose amount staked can be queried on Consensus Layer via RPC Calls, assume, there's a dedicated RPC module that returns a json object with an appropriate HTTP Method given as an input.


# I. Supply Data from the execution layer: we consider 1. Genesis distribution status 2. Block Base Rewards that vary from time to time (will be given a specific blockNumber) 3. Method to take uncle block rewards into account
# II. Supply Data from the consensus layer: we consider 1. Attestation Rewards 2. Proposer Rewards, and lastly 3. Sync Committee Rewards, all can be queried via RPC Query, which returns again another json object.
# III. In Adiition Amount Staked Ethereum on-chain will be queried via consensus layer (and needs to match the number deposited on EL) via an RPC Query mentioned above


def main():
    pass




if __name__ == "__main__":
    main()
