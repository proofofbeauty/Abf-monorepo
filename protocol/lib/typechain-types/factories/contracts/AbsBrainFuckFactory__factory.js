"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.AbsBrainFuckFactory__factory = void 0;
const ethers_1 = require("ethers");
const _abi = [
    {
        inputs: [
            {
                internalType: "address",
                name: "_abfImplementation",
                type: "address",
            },
            {
                internalType: "address",
                name: "_abfMinterImplementation",
                type: "address",
            },
        ],
        stateMutability: "nonpayable",
        type: "constructor",
    },
    {
        anonymous: false,
        inputs: [
            {
                indexed: false,
                internalType: "address",
                name: "nft",
                type: "address",
            },
            {
                indexed: false,
                internalType: "address",
                name: "minter",
                type: "address",
            },
            {
                indexed: false,
                internalType: "address",
                name: "creator",
                type: "address",
            },
        ],
        name: "CreatedAbsBrainFuckNFT",
        type: "event",
    },
    {
        inputs: [],
        name: "abfImplementation",
        outputs: [
            {
                internalType: "address",
                name: "",
                type: "address",
            },
        ],
        stateMutability: "view",
        type: "function",
    },
    {
        inputs: [],
        name: "abfMinterImplementation",
        outputs: [
            {
                internalType: "address",
                name: "",
                type: "address",
            },
        ],
        stateMutability: "view",
        type: "function",
    },
    {
        inputs: [
            {
                components: [
                    {
                        internalType: "string",
                        name: "name",
                        type: "string",
                    },
                    {
                        internalType: "string",
                        name: "symbol",
                        type: "string",
                    },
                    {
                        internalType: "bytes32",
                        name: "seed",
                        type: "bytes32",
                    },
                    {
                        internalType: "bytes",
                        name: "suffix",
                        type: "bytes",
                    },
                    {
                        internalType: "bytes",
                        name: "prefix",
                        type: "bytes",
                    },
                    {
                        internalType: "address",
                        name: "renderer",
                        type: "address",
                    },
                    {
                        internalType: "address",
                        name: "metadataRenderer",
                        type: "address",
                    },
                    {
                        internalType: "address",
                        name: "adminMinter",
                        type: "address",
                    },
                    {
                        internalType: "uint256",
                        name: "mintingSupply",
                        type: "uint256",
                    },
                    {
                        internalType: "uint96",
                        name: "royaltyFraction",
                        type: "uint96",
                    },
                    {
                        internalType: "bytes32",
                        name: "tokenDescriptionKey",
                        type: "bytes32",
                    },
                    {
                        internalType: "bool",
                        name: "allowRendererSwapping",
                        type: "bool",
                    },
                    {
                        internalType: "bytes",
                        name: "tokenDescription",
                        type: "bytes",
                    },
                ],
                internalType: "struct AbsBrainFuck.CreateAbsBrainFuckConfig",
                name: "config",
                type: "tuple",
            },
            {
                components: [
                    {
                        internalType: "uint256",
                        name: "price",
                        type: "uint256",
                    },
                    {
                        internalType: "uint96",
                        name: "rendererRoyaltyFraction",
                        type: "uint96",
                    },
                    {
                        internalType: "address",
                        name: "whitelistToken",
                        type: "address",
                    },
                ],
                internalType: "struct AbsBrainFuckMinter.CreateAbsBrainFuckMinterConfig",
                name: "minterConfig",
                type: "tuple",
            },
        ],
        name: "createNFT",
        outputs: [
            {
                internalType: "address",
                name: "",
                type: "address",
            },
            {
                internalType: "address",
                name: "",
                type: "address",
            },
        ],
        stateMutability: "nonpayable",
        type: "function",
    },
];
const _bytecode = "0x60c060405234801561001057600080fd5b506040516200100e3803806200100e833981810160405281019061003491906100be565b8173ffffffffffffffffffffffffffffffffffffffff1660808173ffffffffffffffffffffffffffffffffffffffff1660601b815250508073ffffffffffffffffffffffffffffffffffffffff1660a08173ffffffffffffffffffffffffffffffffffffffff1660601b815250505050610143565b6000815190506100b88161012c565b92915050565b600080604083850312156100d157600080fd5b60006100df858286016100a9565b92505060206100f0858286016100a9565b9150509250929050565b60006101058261010c565b9050919050565b600073ffffffffffffffffffffffffffffffffffffffff82169050919050565b610135816100fa565b811461014057600080fd5b50565b60805160601c60a05160601c610e936200017b6000396000818160b501526101ed01526000818160e101526103a40152610e936000f3fe608060405234801561001057600080fd5b50600436106100415760003560e01c8063b3d60b7014610046578063f0be5d9b14610064578063fbad2fb914610095575b600080fd5b61004e6100b3565b60405161005b9190610aa9565b60405180910390f35b61007e600480360381019061007991906107e0565b6100d7565b60405161008c929190610ac4565b60405180910390f35b61009d6103a2565b6040516100aa9190610aa9565b60405180910390f35b7f000000000000000000000000000000000000000000000000000000000000000081565b60008060006101057f00000000000000000000000000000000000000000000000000000000000000006103c6565b90508073ffffffffffffffffffffffffffffffffffffffff16633d0cf03630876040518363ffffffff1660e01b8152600401610142929190610b5b565b600060405180830381600087803b15801561015c57600080fd5b505af1158015610170573d6000803e3d6000fd5b505050508073ffffffffffffffffffffffffffffffffffffffff16638f2fc60b338761012001516040518363ffffffff1660e01b81526004016101b4929190610b8b565b600060405180830381600087803b1580156101ce57600080fd5b505af11580156101e2573d6000803e3d6000fd5b5050505060006102117f00000000000000000000000000000000000000000000000000000000000000006103c6565b90508073ffffffffffffffffffffffffffffffffffffffff1663aa6296bb3384886040518463ffffffff1660e01b815260040161025093929190610b24565b600060405180830381600087803b15801561026a57600080fd5b505af115801561027e573d6000803e3d6000fd5b505050508173ffffffffffffffffffffffffffffffffffffffff1663f24b8721826040518263ffffffff1660e01b81526004016102bb9190610aa9565b600060405180830381600087803b1580156102d557600080fd5b505af11580156102e9573d6000803e3d6000fd5b505050508173ffffffffffffffffffffffffffffffffffffffff1663f2fde38b336040518263ffffffff1660e01b81526004016103269190610aa9565b600060405180830381600087803b15801561034057600080fd5b505af1158015610354573d6000803e3d6000fd5b505050507f10982a0013a8addbb11ca9daba65ac1afbf5bdbfdc9e08f99e900387958dc8f582823360405161038b93929190610aed565b60405180910390a181819350935050509250929050565b7f000000000000000000000000000000000000000000000000000000000000000081565b60006040517f3d602d80600a3d3981f3363d3d373d3d3d363d7300000000000000000000000081528260601b60148201527f5af43d82803e903d91602b57fd5bf3000000000000000000000000000000000060288201526037816000f0915050600073ffffffffffffffffffffffffffffffffffffffff168173ffffffffffffffffffffffffffffffffffffffff161415610496576040517f08c379a000000000000000000000000000000000000000000000000000000000815260040161048d90610bb4565b60405180910390fd5b919050565b60006104ae6104a984610bf9565b610bd4565b9050828152602081018484840111156104c657600080fd5b6104d1848285610d0e565b509392505050565b60006104ec6104e784610c2a565b610bd4565b90508281526020810184848401111561050457600080fd5b61050f848285610d0e565b509392505050565b60008135905061052681610dea565b92915050565b60008135905061053b81610e01565b92915050565b60008135905061055081610e18565b92915050565b600082601f83011261056757600080fd5b813561057784826020860161049b565b91505092915050565b600082601f83011261059157600080fd5b81356105a18482602086016104d9565b91505092915050565b60006101a082840312156105bd57600080fd5b6105c86101a0610bd4565b9050600082013567ffffffffffffffff8111156105e457600080fd5b6105f084828501610580565b600083015250602082013567ffffffffffffffff81111561061057600080fd5b61061c84828501610580565b602083015250604061063084828501610541565b604083015250606082013567ffffffffffffffff81111561065057600080fd5b61065c84828501610556565b606083015250608082013567ffffffffffffffff81111561067c57600080fd5b61068884828501610556565b60808301525060a061069c84828501610517565b60a08301525060c06106b084828501610517565b60c08301525060e06106c484828501610517565b60e0830152506101006106d9848285016107b6565b610100830152506101206106ef848285016107cb565b6101208301525061014061070584828501610541565b6101408301525061016061071b8482850161052c565b6101608301525061018082013567ffffffffffffffff81111561073d57600080fd5b61074984828501610556565b6101808301525092915050565b60006060828403121561076857600080fd5b6107726060610bd4565b90506000610782848285016107b6565b6000830152506020610796848285016107cb565b60208301525060406107aa84828501610517565b60408301525092915050565b6000813590506107c581610e2f565b92915050565b6000813590506107da81610e46565b92915050565b600080608083850312156107f357600080fd5b600083013567ffffffffffffffff81111561080d57600080fd5b610819858286016105aa565b925050602061082a85828601610756565b9150509250929050565b61083d81610ca4565b82525050565b61084c81610ca4565b82525050565b61085b81610cb6565b82525050565b61086a81610cc2565b82525050565b600061087b82610c5b565b6108858185610c71565b9350610895818560208601610d1d565b61089e81610db0565b840191505092915050565b60006108b482610c66565b6108be8185610c82565b93506108ce818560208601610d1d565b6108d781610db0565b840191505092915050565b60006108ef601683610c93565b91506108fa82610dc1565b602082019050919050565b60006101a083016000830151848203600086015261092382826108a9565b9150506020830151848203602086015261093d82826108a9565b91505060408301516109526040860182610861565b506060830151848203606086015261096a8282610870565b915050608083015184820360808601526109848282610870565b91505060a083015161099960a0860182610834565b5060c08301516109ac60c0860182610834565b5060e08301516109bf60e0860182610834565b506101008301516109d4610100860182610a7c565b506101208301516109e9610120860182610a8b565b506101408301516109fe610140860182610861565b50610160830151610a13610160860182610852565b50610180830151848203610180860152610a2d8282610870565b9150508091505092915050565b606082016000820151610a506000850182610a7c565b506020820151610a636020850182610a8b565b506040820151610a766040850182610834565b50505050565b610a8581610cec565b82525050565b610a9481610cf6565b82525050565b610aa381610cf6565b82525050565b6000602082019050610abe6000830184610843565b92915050565b6000604082019050610ad96000830185610843565b610ae66020830184610843565b9392505050565b6000606082019050610b026000830186610843565b610b0f6020830185610843565b610b1c6040830184610843565b949350505050565b600060a082019050610b396000830186610843565b610b466020830185610843565b610b536040830184610a3a565b949350505050565b6000604082019050610b706000830185610843565b8181036020830152610b828184610905565b90509392505050565b6000604082019050610ba06000830185610843565b610bad6020830184610a9a565b9392505050565b60006020820190508181036000830152610bcd816108e2565b9050919050565b6000610bde610bef565b9050610bea8282610d50565b919050565b6000604051905090565b600067ffffffffffffffff821115610c1457610c13610d81565b5b610c1d82610db0565b9050602081019050919050565b600067ffffffffffffffff821115610c4557610c44610d81565b5b610c4e82610db0565b9050602081019050919050565b600081519050919050565b600081519050919050565b600082825260208201905092915050565b600082825260208201905092915050565b600082825260208201905092915050565b6000610caf82610ccc565b9050919050565b60008115159050919050565b6000819050919050565b600073ffffffffffffffffffffffffffffffffffffffff82169050919050565b6000819050919050565b60006bffffffffffffffffffffffff82169050919050565b82818337600083830152505050565b60005b83811015610d3b578082015181840152602081019050610d20565b83811115610d4a576000848401525b50505050565b610d5982610db0565b810181811067ffffffffffffffff82111715610d7857610d77610d81565b5b80604052505050565b7f4e487b7100000000000000000000000000000000000000000000000000000000600052604160045260246000fd5b6000601f19601f8301169050919050565b7f455243313136373a20637265617465206661696c656400000000000000000000600082015250565b610df381610ca4565b8114610dfe57600080fd5b50565b610e0a81610cb6565b8114610e1557600080fd5b50565b610e2181610cc2565b8114610e2c57600080fd5b50565b610e3881610cec565b8114610e4357600080fd5b50565b610e4f81610cf6565b8114610e5a57600080fd5b5056fea2646970667358221220cd6e353bfdbbfb099dc64309a5f80cf040817c2d8590aba3ac36a619a4cec3b064736f6c63430008040033";
const isSuperArgs = (xs) => xs.length > 1;
class AbsBrainFuckFactory__factory extends ethers_1.ContractFactory {
    constructor(...args) {
        if (isSuperArgs(args)) {
            super(...args);
        }
        else {
            super(_abi, _bytecode, args[0]);
        }
    }
    deploy(_abfImplementation, _abfMinterImplementation, overrides) {
        return super.deploy(_abfImplementation, _abfMinterImplementation, overrides || {});
    }
    getDeployTransaction(_abfImplementation, _abfMinterImplementation, overrides) {
        return super.getDeployTransaction(_abfImplementation, _abfMinterImplementation, overrides || {});
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
exports.AbsBrainFuckFactory__factory = AbsBrainFuckFactory__factory;
AbsBrainFuckFactory__factory.bytecode = _bytecode;
AbsBrainFuckFactory__factory.abi = _abi;
//# sourceMappingURL=AbsBrainFuckFactory__factory.js.map