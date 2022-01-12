export const StakingHelperAddress = "0x96fb99814e50ac3eab42B5a6dFe87D04d72Fc99f";
export const StakingHelperAbi = [{
    "inputs": [{
        "internalType": "address",
        "name": "_staking",
        "type": "address"
    }, {
        "internalType": "address",
        "name": "_NMS",
        "type": "address"
    }],
    "stateMutability": "nonpayable",
    "type": "constructor"
}, {
    "inputs": [],
    "name": "NMS",
    "outputs": [{
        "internalType": "address",
        "name": "",
        "type": "address"
    }],
    "stateMutability": "view",
    "type": "function"
}, {
    "inputs": [{
        "internalType": "uint256",
        "name": "_amount",
        "type": "uint256"
    }],
    "name": "stake",
    "outputs": [],
    "stateMutability": "nonpayable",
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