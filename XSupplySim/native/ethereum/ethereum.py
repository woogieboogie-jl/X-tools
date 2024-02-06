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




#1. Get the latest block(historical) by getting the number of the latest block that was finalized from the Consensus Layer, we will use getLatestFinalizedBlock() to the consensus layer and open the payload to confirm the latest Execution level blockNumber
#2. We will then divide the process into two steps: 1. Historical (until current finalized slot) 2. Real Time (starting from current finalized slot) Need Parallel Processing for this. Historical starts from blocknumber 0(genesis) to current blockNumber, real time starts from the next blockNumber and listens to the latest finalized block, it does this by querying RPC and it's finalized latest block(slot) by comparing it to its latest block(slot)Number, if its bigger, we should request for the rewards info mentioned below
#3. For Each process, it follows two processes: 1. supply data from execution layer and 2. supply data from the consensus layer, see each layer's handler for detail
#4. Check 


# Additional Quest
# Exclude Staked Assets(Staked Assets are excluded from circulating and this starts from the beacon chain genesis and deposits made on the beacon chain)


# I. Supply Data from the execution layer: we consider 1. Genesis distribution status 2. Block Base Rewards that vary from time to time (will be given a specific blockNumber) 3. Method to take uncle block rewards into account
# II. Supply Data from the consensus layer: we consider 1. Attestation Rewards
