// SPDX-License-Identifier: MIT
pragma solidity >=0.4.22 <0.9.0;
//Стадии процесса обработки
enum StageType {
    A1,
    A2,
    A3,
    A4,
    A5,
    A6,
    A7
}

struct Seed {
    StageType stage;
    uint256 count;
}

contract Agriculture {
    address public sender;
    address public reciever;
    mapping(address => Seed) public balances;
    event BalanceInitialized(address participant, StageType stage);
    event TransferSeed(
        address sender,
        address reciever,
        uint256 amount,
        StageType start_stage,
        StageType end_stage
    );

    constructor() {}

    function InitBalance(address participant, StageType stage) public {
        if (balances[participant].count > 0)
            revert("You cant' change no zero balance!");
        else {
            balances[participant] = Seed(stage, 0);
            emit BalanceInitialized(participant, stage);
        }
    }

    function SetBalance(
        address participant,
        StageType stage,
        uint256 amount
    ) public {
        if (balances[participant].stage == stage)
            balances[participant] = Seed(stage, amount);
        else revert("Balance contains another seed type!");
    }

    function GetBalance(address participant) public returns (Seed memory) {
        return balances[participant];
    }

    function GetBalance2(address participant)
        public
        returns (StageType, uint256)
    {
        Seed memory s = balances[participant];
        return (s.stage, s.count);
    }

    function Transfer(
        address sender,
        address reciever,
        uint256 amount
    ) public {
        if (balances[sender].count < amount)
            revert("Not enough amount for transfering!");
        if (
            uint256(balances[sender].stage) !=
            uint256(balances[reciever].stage) - 1
        ) revert("You cant send seeds only on the next stage!");
        balances[sender].count -= amount;
        balances[reciever].count += amount;
        emit TransferSeed(
            sender,
            reciever,
            amount,
            balances[sender].stage,
            balances[reciever].stage
        );
    }
}
