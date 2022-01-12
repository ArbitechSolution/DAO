export let NemesisBondingCalculatorAddress = "0xd510746261B29d8F11F3302189Ae57e0F4A97B48";
export let NemesisBondingCalculatorAbi = [{
    "inputs": [{
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
        "internalType": "address",
        "name": "_pair",
        "type": "address"
    }],
    "name": "getKValue",
    "outputs": [{
        "internalType": "uint256",
        "name": "k_",
        "type": "uint256"
    }],
    "stateMutability": "view",
    "type": "function"
}, {
    "inputs": [{
        "internalType": "address",
        "name": "_pair",
        "type": "address"
    }],
    "name": "getTotalValue",
    "outputs": [{
        "internalType": "uint256",
        "name": "_value",
        "type": "uint256"
    }],
    "stateMutability": "view",
    "type": "function"
}, {
    "inputs": [{
        "internalType": "address",
        "name": "_pair",
        "type": "address"
    }],
    "name": "markdown",
    "outputs": [{
        "internalType": "uint256",
        "name": "",
        "type": "uint256"
    }],
    "stateMutability": "view",
    "type": "function"
}, {
    "inputs": [{
        "internalType": "address",
        "name": "_pair",
        "type": "address"
    }, {
        "internalType": "uint256",
        "name": "amount_",
        "type": "uint256"
    }],
    "name": "valuation",
    "outputs": [{
        "internalType": "uint256",
        "name": "_value",
        "type": "uint256"
    }],
    "stateMutability": "view",
    "type": "function"
}]