export const AGR_ADDRESS = '0x6F0807F11C9912840bCa926F55e1E906374E2F9E';

export const AGR_ABI =
    [
        {
            "inputs": [],
            "stateMutability": "nonpayable",
            "type": "constructor"
        },
        {
            "anonymous": false,
            "inputs": [
                {
                    "indexed": false,
                    "internalType": "address",
                    "name": "participant",
                    "type": "address"
                },
                {
                    "indexed": false,
                    "internalType": "enum StageType",
                    "name": "stage",
                    "type": "uint8"
                }
            ],
            "name": "BalanceInitialized",
            "type": "event"
        },
        {
            "inputs": [
                {
                    "internalType": "address",
                    "name": "participant",
                    "type": "address"
                }
            ],
            "name": "GetBalance",
            "outputs": [
                {
                    "components": [
                        {
                            "internalType": "enum StageType",
                            "name": "stage",
                            "type": "uint8"
                        },
                        {
                            "internalType": "uint256",
                            "name": "count",
                            "type": "uint256"
                        }
                    ],
                    "internalType": "struct Seed",
                    "name": "",
                    "type": "tuple"
                }
            ],
            "stateMutability": "nonpayable",
            "type": "function"
        },
        {
            "inputs": [
                {
                    "internalType": "address",
                    "name": "participant",
                    "type": "address"
                }
            ],
            "name": "GetBalance2",
            "outputs": [
                {
                    "internalType": "enum StageType",
                    "name": "",
                    "type": "uint8"
                },
                {
                    "internalType": "uint256",
                    "name": "",
                    "type": "uint256"
                }
            ],
            "stateMutability": "nonpayable",
            "type": "function"
        },
        {
            "inputs": [
                {
                    "internalType": "address",
                    "name": "participant",
                    "type": "address"
                },
                {
                    "internalType": "enum StageType",
                    "name": "stage",
                    "type": "uint8"
                }
            ],
            "name": "InitBalance",
            "outputs": [],
            "stateMutability": "nonpayable",
            "type": "function"
        },
        {
            "inputs": [
                {
                    "internalType": "address",
                    "name": "participant",
                    "type": "address"
                },
                {
                    "internalType": "enum StageType",
                    "name": "stage",
                    "type": "uint8"
                },
                {
                    "internalType": "uint256",
                    "name": "amount",
                    "type": "uint256"
                }
            ],
            "name": "SetBalance",
            "outputs": [],
            "stateMutability": "nonpayable",
            "type": "function"
        },
        {
            "inputs": [
                {
                    "internalType": "address",
                    "name": "sender",
                    "type": "address"
                },
                {
                    "internalType": "address",
                    "name": "reciever",
                    "type": "address"
                },
                {
                    "internalType": "uint256",
                    "name": "amount",
                    "type": "uint256"
                }
            ],
            "name": "Transfer",
            "outputs": [],
            "stateMutability": "nonpayable",
            "type": "function"
        },
        {
            "anonymous": false,
            "inputs": [
                {
                    "indexed": false,
                    "internalType": "address",
                    "name": "sender",
                    "type": "address"
                },
                {
                    "indexed": false,
                    "internalType": "address",
                    "name": "reciever",
                    "type": "address"
                },
                {
                    "indexed": false,
                    "internalType": "uint256",
                    "name": "amount",
                    "type": "uint256"
                },
                {
                    "indexed": false,
                    "internalType": "enum StageType",
                    "name": "start_stage",
                    "type": "uint8"
                },
                {
                    "indexed": false,
                    "internalType": "enum StageType",
                    "name": "end_stage",
                    "type": "uint8"
                }
            ],
            "name": "TransferSeed",
            "type": "event"
        },
        {
            "inputs": [
                {
                    "internalType": "address",
                    "name": "",
                    "type": "address"
                }
            ],
            "name": "balances",
            "outputs": [
                {
                    "internalType": "enum StageType",
                    "name": "stage",
                    "type": "uint8"
                },
                {
                    "internalType": "uint256",
                    "name": "count",
                    "type": "uint256"
                }
            ],
            "stateMutability": "view",
            "type": "function"
        },
        {
            "inputs": [],
            "name": "reciever",
            "outputs": [
                {
                    "internalType": "address",
                    "name": "",
                    "type": "address"
                }
            ],
            "stateMutability": "view",
            "type": "function"
        },
        {
            "inputs": [],
            "name": "sender",
            "outputs": [
                {
                    "internalType": "address",
                    "name": "",
                    "type": "address"
                }
            ],
            "stateMutability": "view",
            "type": "function"
        }
    ]