const StageType = {
    A1: 1,
    A2: 2,
    A3: 3,
    A4: 4,
    A5: 5,
    A6: 6,
    A7: 7
}
class Seed {
    constructor(stage, count) {
        this.stage = stage;
        this.count = count;
    }
}
class AgroChain {
    constructor() {
        this.seesionStorageKey = 'DB';
        this.balances = {};
    }
    ValidateAddress(addressStr) {
        //0xAb8483F64d9C6d1EcF9b849Ae677dD3315835cb2
        //0x14723A09ACff6D2A60DcdF7aA4AFf308FDDC160C
        var regex = new RegExp(/^['0']['x'][a-fA-F0-9]{40}$/sgm);
        return regex.test(addressStr);
    }
    InitBalance(addressStr, stage) {
        if (!addressStr || !this.ValidateAddress(addressStr))
            throw "Incorrect address";
        if (!stage)
            throw "Incorrect stage";
        this.balances[addressStr] = new Seed(stage, 0);
    }
    GetBalance(addressStr) {
        if (!addressStr || !this.ValidateAddress(addressStr))
            throw "Incorrect address";
        return this.balances[addressStr];
    }
    SetBalance(addressStr, stage, amount) {
        if (!addressStr || !this.ValidateAddress(addressStr))
            throw "Incorrect address";
        if (!stage)
            throw "Incorrect stage";
        if (this.balances[addressStr].stage != stage)
            throw "Balance contains another seed type!";
        this.balances[addressStr] = new Seed(stage, amount);
    }
    SendSeed(senderAddressStr, recieverAddressStr, amount) {
        if (!senderAddressStr || !this.balances[senderAddressStr] || !this.ValidateAddress(senderAddressStr))
            throw "Incorrect sender address";
        if (!recieverAddressStr || !this.balances[recieverAddressStr] || !this.ValidateAddress(recieverAddressStr))
            throw "Incorrect reciever address";
        if (this.balances[senderAddressStr].count < amount)
            throw "Not enough amount for transfering!";
        if (this.balances[senderAddressStr].stage != this.balances[recieverAddressStr].stage - 1)
            throw "You cant send seeds only on the next stage!";
        this.balances[senderAddressStr].count -= amount;
        this.balances[recieverAddressStr].count += amount;
    }
    Save() {
        sessionStorage.setItem(this.seesionStorageKey, JSON.stringify(this));
    }
    Load() {
        var loadedItem = sessionStorage.getItem(this.seesionStorageKey);
        if (loadedItem) {
            this.balances = JSON.parse(loadedItem).balances;
        }
    }

}

export { StageType, Seed, AgroChain }