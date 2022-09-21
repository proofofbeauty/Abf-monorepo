"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.BrainFuckVM__factory = void 0;
const ethers_1 = require("ethers");
const _abi = [
    {
        inputs: [],
        name: "LOOPING_STACK_SIZE",
        outputs: [
            {
                internalType: "uint256",
                name: "",
                type: "uint256",
            },
        ],
        stateMutability: "view",
        type: "function",
    },
    {
        inputs: [],
        name: "TAPE_SIZE",
        outputs: [
            {
                internalType: "uint256",
                name: "",
                type: "uint256",
            },
        ],
        stateMutability: "view",
        type: "function",
    },
    {
        inputs: [
            {
                internalType: "bytes",
                name: "code",
                type: "bytes",
            },
            {
                internalType: "bytes",
                name: "input",
                type: "bytes",
            },
        ],
        name: "run",
        outputs: [
            {
                internalType: "bytes",
                name: "out",
                type: "bytes",
            },
        ],
        stateMutability: "pure",
        type: "function",
    },
];
const _bytecode = "0x608060405234801561001057600080fd5b50610e55806100206000396000f3fe608060405234801561001057600080fd5b50600436106100415760003560e01c806329b9e6a514610046578063e0006a6114610076578063ffec62f914610094575b600080fd5b610060600480360381019061005b9190610abc565b6100b2565b60405161006d9190610be9565b60405180910390f35b61007e610a65565b60405161008b9190610c0b565b60405180910390f35b61009c610a6b565b6040516100a99190610c0b565b60405180910390f35b60606040518060200160405280600081525090506000620493e067ffffffffffffffff81111561010b577f4e487b7100000000000000000000000000000000000000000000000000000000600052604160045260246000fd5b6040519080825280601f01601f19166020018201604052801561013d5781602001600182028036833780820191505090505b509050600080600080600061200067ffffffffffffffff81111561018a577f4e487b7100000000000000000000000000000000000000000000000000000000600052604160045260246000fd5b6040519080825280602002602001820160405280156101b85781602001602082028036833780820191505090505b5090506000805b8c8c9050811015610a555760008d8d83818110610205577f4e487b7100000000000000000000000000000000000000000000000000000000600052603260045260246000fd5b9050013560f81c60f81b905085156102a957605b60f81b817effffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff1916141561025457848061025090610d8c565b9550505b605d60f81b817effffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff191614156102a457600085141561029457600095506102a3565b848061029f90610d62565b9550505b5b610a43565b602b60f81b817effffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff191614156104335760ff60f81b7effffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff1916898881518110610337577f4e487b7100000000000000000000000000000000000000000000000000000000600052603260045260246000fd5b602001015160f81c60f81b7effffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff1916146103c45760018988815181106103a4577f4e487b7100000000000000000000000000000000000000000000000000000000600052603260045260246000fd5b602001015160f81c60f81b60f81c6103bc9190610c4d565b60f81b6103ca565b600060f81b5b898881518110610403577f4e487b7100000000000000000000000000000000000000000000000000000000600052603260045260246000fd5b60200101907effffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff1916908160001a9053505b602d60f81b817effffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff191614156105bd57600060f81b7effffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff19168988815181106104c1577f4e487b7100000000000000000000000000000000000000000000000000000000600052603260045260246000fd5b602001015160f81c60f81b7effffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff19161461054e57600189888151811061052e577f4e487b7100000000000000000000000000000000000000000000000000000000600052603260045260246000fd5b602001015160f81c60f81b60f81c6105469190610cb8565b60f81b610554565b60ff60f81b5b89888151811061058d577f4e487b7100000000000000000000000000000000000000000000000000000000600052603260045260246000fd5b60200101907effffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff1916908160001a9053505b602c60f81b817effffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff191614156106ba578b8b905088106105ff57600060f81b610643565b8b8b89818110610638577f4e487b7100000000000000000000000000000000000000000000000000000000600052603260045260246000fd5b9050013560f81c60f81b5b89888151811061067c577f4e487b7100000000000000000000000000000000000000000000000000000000600052603260045260246000fd5b60200101907effffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff1916908160001a90535087806106b690610d8c565b9850505b602e60f81b817effffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff191614156107505789898881518110610722577f4e487b7100000000000000000000000000000000000000000000000000000000600052603260045260246000fd5b602001015160f81c60f81b60405160200161073e929190610bc1565b60405160208183030381529060405299505b602160f81b817effffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff1916141561078357600096505b603e60f81b817effffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff191614156107c05786806107bc90610d8c565b9750505b603c60f81b817effffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff191614156107fd5786806107f990610d62565b9750505b605b60f81b817effffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff191614156108fb57600060f81b898881518110610869577f4e487b7100000000000000000000000000000000000000000000000000000000600052603260045260246000fd5b602001015160f81c60f81b7effffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff191614156108a557600195506108fa565b818484815181106108df577f4e487b7100000000000000000000000000000000000000000000000000000000600052603260045260246000fd5b60200260200101818152505082806108f690610d8c565b9350505b5b605d60f81b817effffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff19161415610a4257600060f81b898881518110610967577f4e487b7100000000000000000000000000000000000000000000000000000000600052603260045260246000fd5b602001015160f81c60f81b7effffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff1916146109ed57836001846109a79190610c84565b815181106109de577f4e487b7100000000000000000000000000000000000000000000000000000000600052603260045260246000fd5b60200260200101519150610a41565b60008484806109fb90610d62565b955081518110610a34577f4e487b7100000000000000000000000000000000000000000000000000000000600052603260045260246000fd5b6020026020010181815250505b5b5b5080610a4e90610d8c565b90506101bf565b5050505050505050949350505050565b61200081565b620493e081565b60008083601f840112610a8457600080fd5b8235905067ffffffffffffffff811115610a9d57600080fd5b602083019150836001820283011115610ab557600080fd5b9250929050565b60008060008060408587031215610ad257600080fd5b600085013567ffffffffffffffff811115610aec57600080fd5b610af887828801610a72565b9450945050602085013567ffffffffffffffff811115610b1757600080fd5b610b2387828801610a72565b925092505092959194509250565b610b42610b3d82610cec565b610dd5565b82525050565b6000610b5382610c26565b610b5d8185610c31565b9350610b6d818560208601610d2f565b610b7681610e0e565b840191505092915050565b6000610b8c82610c26565b610b968185610c42565b9350610ba6818560208601610d2f565b80840191505092915050565b610bbb81610d18565b82525050565b6000610bcd8285610b81565b9150610bd98284610b31565b6001820191508190509392505050565b60006020820190508181036000830152610c038184610b48565b905092915050565b6000602082019050610c206000830184610bb2565b92915050565b600081519050919050565b600082825260208201905092915050565b600081905092915050565b6000610c5882610d22565b9150610c6383610d22565b92508260ff03821115610c7957610c78610ddf565b5b828201905092915050565b6000610c8f82610d18565b9150610c9a83610d18565b925082821015610cad57610cac610ddf565b5b828203905092915050565b6000610cc382610d22565b9150610cce83610d22565b925082821015610ce157610ce0610ddf565b5b828203905092915050565b60007fff0000000000000000000000000000000000000000000000000000000000000082169050919050565b6000819050919050565b600060ff82169050919050565b60005b83811015610d4d578082015181840152602081019050610d32565b83811115610d5c576000848401525b50505050565b6000610d6d82610d18565b91506000821415610d8157610d80610ddf565b5b600182039050919050565b6000610d9782610d18565b91507fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff821415610dca57610dc9610ddf565b5b600182019050919050565b6000819050919050565b7f4e487b7100000000000000000000000000000000000000000000000000000000600052601160045260246000fd5b6000601f19601f830116905091905056fea2646970667358221220f3badfdac546e5494faed7793a27c1c037a7f73af40d9575372dc59092eaf65264736f6c63430008040033";
const isSuperArgs = (xs) => xs.length > 1;
class BrainFuckVM__factory extends ethers_1.ContractFactory {
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
exports.BrainFuckVM__factory = BrainFuckVM__factory;
BrainFuckVM__factory.bytecode = _bytecode;
BrainFuckVM__factory.abi = _abi;
//# sourceMappingURL=BrainFuckVM__factory.js.map