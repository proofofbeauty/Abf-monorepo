"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Create3__factory = void 0;
const ethers_1 = require("ethers");
const _abi = [
    {
        inputs: [],
        name: "ErrorCreatingContract",
        type: "error",
    },
    {
        inputs: [],
        name: "ErrorCreatingProxy",
        type: "error",
    },
    {
        inputs: [],
        name: "TargetAlreadyExists",
        type: "error",
    },
];
const _bytecode = "0x60566050600b82828239805160001a6073146043577f4e487b7100000000000000000000000000000000000000000000000000000000600052600060045260246000fd5b30600052607381538281f3fe73000000000000000000000000000000000000000030146080604052600080fdfea26469706673582212203e1b782ef1fbb96d41ac2827d20ed7138f73bafd50bd1ea6fa56eea0a57357f364736f6c63430008040033";
const isSuperArgs = (xs) => xs.length > 1;
class Create3__factory extends ethers_1.ContractFactory {
    constructor(...args) {
        if (isSuperArgs(args)) {
            super(...args);
        }
        else {
            super(_abi, _bytecode, args[0]);
        }
    }
    deploy(overrides) {
        return super.deploy(overrides || {});
    }
    getDeployTransaction(overrides) {
        return super.getDeployTransaction(overrides || {});
    }
    attach(address) {
        return super.attach(address);
    }
    connect(signer) {
        return super.connect(signer);
    }
    static createInterface() {
        return new ethers_1.utils.Interface(_abi);
    }
    static connect(address, signerOrProvider) {
        return new ethers_1.Contract(address, _abi, signerOrProvider);
    }
}
exports.Create3__factory = Create3__factory;
Create3__factory.bytecode = _bytecode;
Create3__factory.abi = _abi;
//# sourceMappingURL=Create3__factory.js.map