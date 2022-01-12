export let StakingWarmupAddress = "0xA49aC1Ccb014b2948B35E179c74a42Bfe6104e11";
export let StakingWarmupAbi = [{
    "inputs": [{
        "internalType": "address",
        "name": "_staking",
        "type": "address"
    }, {
        "internalType": "address",
        "name": "_sNMS",
        "type": "address"
    }],
    "stateMutability": "nonpayable",
    "type": "constructor"
}, {
    "inputs": [{
        "internalType": "address",
        "name": "_staker",
        "type": "address"
    }, {
        "internalType": "uint256",
        "name": "_amount",
        "type": "uint256"
    }],
    "name": "retrieve",
    "outputs": [],
    "stateMutability": "nonpayable",
    "type": "function"
}, {
    "inputs": [],
    "name": "sNMS",
    "outputs": [{
        "internalType": "address",
        "name": "",
        "type": "address"
    }],
    "stateMutability": "view",
    "type": "function"
}, {
    "inputs": [],
    "name": "staking",
    "outputs": [{
        "internalType": "address",
        "name": "",
        "type": "address"
    }],
    "stateMutability": "view",
    "type": "function"
}]