"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.AbsBrainFuckFactory__factory = void 0;
const ethers_1 = require("ethers");
const _abi = [
    {
        inputs: [
            {
                internalType: "address",
                name: "_erc721ZImplementation",
                type: "address",
            },
            {
                internalType: "address",
                name: "_erc721ZMinterImplementation",
                type: "address",
            },
            {
                internalType: "address",
                name: "_absBrainFuckMetadataRenderer",
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
        name: "CreatedNFT",
        type: "event",
    },
    {
        inputs: [],
        name: "absBrainFuckMetadataRenderer",
        outputs: [
            {
                internalType: "contract AbsBrainFuckMetadataRenderer",
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
                        internalType: "address",
                        name: "contractMetadataRenderer",
                        type: "address",
                    },
                    {
                        internalType: "address",
                        name: "metadataRenderer",
                        type: "address",
                    },
                    {
                        internalType: "bool",
                        name: "allowRendererSwapping",
                        type: "bool",
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
                ],
                internalType: "struct ERC721Z.InitConfig",
                name: "config",
                type: "tuple",
            },
            {
                components: [
                    {
                        internalType: "address",
                        name: "vm",
                        type: "address",
                    },
                    {
                        internalType: "address",
                        name: "outputRenderer",
                        type: "address",
                    },
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
                internalType: "struct AbsBrainFuckMetadataRenderer.AbsBrainFuckMetadataConfig",
                name: "metadataConfig",
                type: "tuple",
            },
            {
                components: [
                    {
                        internalType: "uint96",
                        name: "royaltyFraction",
                        type: "uint96",
                    },
                ],
                internalType: "struct AbsBrainFuckFactory.CreateNFTAdditionalConfig",
                name: "additionalConfig",
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
                        name: "royaltyFraction",
                        type: "uint96",
                    },
                    {
                        internalType: "address",
                        name: "whitelistToken",
                        type: "address",
                    },
                    {
                        internalType: "bytes32",
                        name: "claimMerkleRoot",
                        type: "bytes32",
                    },
                    {
                        internalType: "string",
                        name: "claimMerkleTreeURI",
                        type: "string",
                    },
                ],
                internalType: "struct ERC721ZMinter.InitConfig",
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
    {
        inputs: [],
        name: "erc721ZImplementation",
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
        name: "erc721ZMinterImplementation",
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
];
const _bytecode = "0x60e06040523480156200001157600080fd5b506040516200131c3803806200131c8339818101604052810190620000379190620000fc565b8073ffffffffffffffffffffffffffffffffffffffff1660c08173ffffffffffffffffffffffffffffffffffffffff1660601b815250508273ffffffffffffffffffffffffffffffffffffffff1660808173ffffffffffffffffffffffffffffffffffffffff1660601b815250508173ffffffffffffffffffffffffffffffffffffffff1660a08173ffffffffffffffffffffffffffffffffffffffff1660601b81525050505050620001a0565b600081519050620000f68162000186565b92915050565b6000806000606084860312156200011257600080fd5b60006200012286828701620000e5565b93505060206200013586828701620000e5565b92505060406200014886828701620000e5565b9150509250925092565b60006200015f8262000166565b9050919050565b600073ffffffffffffffffffffffffffffffffffffffff82169050919050565b620001918162000152565b81146200019d57600080fd5b50565b60805160601c60a05160601c60c05160601c611128620001f4600039600081816101260152818161014d01526103b701526000818160de01526102b501526000818161010201526101aa01526111286000f3fe608060405234801561001057600080fd5b506004361061004c5760003560e01c806302d4aed1146100515780630d5f83531461006f5780631f2a835f1461008d5780639aef1a85146100ab575b600080fd5b6100596100dc565b6040516100669190610cc8565b60405180910390f35b610077610100565b6040516100849190610cc8565b60405180910390f35b610095610124565b6040516100a29190610e0a565b60405180910390f35b6100c560048036038101906100c09190610979565b610148565b6040516100d3929190610ce3565b60405180910390f35b7f000000000000000000000000000000000000000000000000000000000000000081565b7f000000000000000000000000000000000000000000000000000000000000000081565b7f000000000000000000000000000000000000000000000000000000000000000081565b6000807f0000000000000000000000000000000000000000000000000000000000000000866080019073ffffffffffffffffffffffffffffffffffffffff16908173ffffffffffffffffffffffffffffffffffffffff168152505060006101ce7f00000000000000000000000000000000000000000000000000000000000000006104f9565b90508073ffffffffffffffffffffffffffffffffffffffff166396c7442f30896040518363ffffffff1660e01b815260040161020b929190610db1565b600060405180830381600087803b15801561022557600080fd5b505af1158015610239573d6000803e3d6000fd5b505050508073ffffffffffffffffffffffffffffffffffffffff16638f2fc60b3387600001516040518363ffffffff1660e01b815260040161027c929190610de1565b600060405180830381600087803b15801561029657600080fd5b505af11580156102aa573d6000803e3d6000fd5b5050505060006102d97f00000000000000000000000000000000000000000000000000000000000000006104f9565b90508073ffffffffffffffffffffffffffffffffffffffff1663d2b759c23384886040518463ffffffff1660e01b815260040161031893929190610d43565b600060405180830381600087803b15801561033257600080fd5b505af1158015610346573d6000803e3d6000fd5b505050508173ffffffffffffffffffffffffffffffffffffffff1663f24b8721826040518263ffffffff1660e01b81526004016103839190610cc8565b600060405180830381600087803b15801561039d57600080fd5b505af11580156103b1573d6000803e3d6000fd5b505050507f000000000000000000000000000000000000000000000000000000000000000073ffffffffffffffffffffffffffffffffffffffff16636ca0d8ad83896040518363ffffffff1660e01b8152600401610410929190610d81565b600060405180830381600087803b15801561042a57600080fd5b505af115801561043e573d6000803e3d6000fd5b505050508173ffffffffffffffffffffffffffffffffffffffff1663f2fde38b336040518263ffffffff1660e01b815260040161047b9190610cc8565b600060405180830381600087803b15801561049557600080fd5b505af11580156104a9573d6000803e3d6000fd5b505050507fea565321f1841d94b79ccc4729b04247aefff2f98f1ebfd86f842a19193d05ec8282336040516104e093929190610d0c565b60405180910390a1818193509350505094509492505050565b60006040517f3d602d80600a3d3981f3363d3d373d3d3d363d7300000000000000000000000081528260601b60148201527f5af43d82803e903d91602b57fd5bf3000000000000000000000000000000000060288201526037816000f0915050600073ffffffffffffffffffffffffffffffffffffffff168173ffffffffffffffffffffffffffffffffffffffff1614156105c9576040517f08c379a00000000000000000000000000000000000000000000000000000000081526004016105c090610e25565b60405180910390fd5b919050565b60006105e16105dc84610e6a565b610e45565b9050828152602081018484840111156105f957600080fd5b610604848285610fa3565b509392505050565b600061061f61061a84610e9b565b610e45565b90508281526020810184848401111561063757600080fd5b610642848285610fa3565b509392505050565b6000813590506106598161107f565b92915050565b60008135905061066e81611096565b92915050565b600081359050610683816110ad565b92915050565b600082601f83011261069a57600080fd5b81356106aa8482602086016105ce565b91505092915050565b600082601f8301126106c457600080fd5b81356106d484826020860161060c565b91505092915050565b6000608082840312156106ef57600080fd5b6106f96080610e45565b905060006107098482850161064a565b600083015250602061071d8482850161064a565b602083015250604082013567ffffffffffffffff81111561073d57600080fd5b61074984828501610689565b604083015250606082013567ffffffffffffffff81111561076957600080fd5b61077584828501610689565b60608301525092915050565b60006020828403121561079357600080fd5b61079d6020610e45565b905060006107ad84828501610964565b60008301525092915050565b600061010082840312156107cc57600080fd5b6107d7610100610e45565b9050600082013567ffffffffffffffff8111156107f357600080fd5b6107ff848285016106b3565b600083015250602082013567ffffffffffffffff81111561081f57600080fd5b61082b848285016106b3565b602083015250604061083f84828501610674565b60408301525060606108538482850161064a565b60608301525060806108678482850161064a565b60808301525060a061087b8482850161065f565b60a08301525060c061088f8482850161064a565b60c08301525060e06108a38482850161094f565b60e08301525092915050565b600060a082840312156108c157600080fd5b6108cb60a0610e45565b905060006108db8482850161094f565b60008301525060206108ef84828501610964565b60208301525060406109038482850161064a565b604083015250606061091784828501610674565b606083015250608082013567ffffffffffffffff81111561093757600080fd5b610943848285016106b3565b60808301525092915050565b60008135905061095e816110c4565b92915050565b600081359050610973816110db565b92915050565b6000806000806080858703121561098f57600080fd5b600085013567ffffffffffffffff8111156109a957600080fd5b6109b5878288016107b9565b945050602085013567ffffffffffffffff8111156109d257600080fd5b6109de878288016106dd565b93505060406109ef87828801610781565b925050606085013567ffffffffffffffff811115610a0c57600080fd5b610a18878288016108af565b91505092959194509250565b610a2d81610f15565b82525050565b610a3c81610f15565b82525050565b610a4b81610f27565b82525050565b610a5a81610f33565b82525050565b6000610a6b82610ecc565b610a758185610ee2565b9350610a85818560208601610fb2565b610a8e81611045565b840191505092915050565b610aa281610f7f565b82525050565b6000610ab382610ed7565b610abd8185610ef3565b9350610acd818560208601610fb2565b610ad681611045565b840191505092915050565b6000610aee601683610f04565b9150610af982611056565b602082019050919050565b6000608083016000830151610b1c6000860182610a24565b506020830151610b2f6020860182610a24565b5060408301518482036040860152610b478282610a60565b91505060608301518482036060860152610b618282610a60565b9150508091505092915050565b6000610100830160008301518482036000860152610b8c8282610aa8565b91505060208301518482036020860152610ba68282610aa8565b9150506040830151610bbb6040860182610a51565b506060830151610bce6060860182610a24565b506080830151610be16080860182610a24565b5060a0830151610bf460a0860182610a42565b5060c0830151610c0760c0860182610a24565b5060e0830151610c1a60e0860182610c9b565b508091505092915050565b600060a083016000830151610c3d6000860182610c9b565b506020830151610c506020860182610caa565b506040830151610c636040860182610a24565b506060830151610c766060860182610a51565b5060808301518482036080860152610c8e8282610aa8565b9150508091505092915050565b610ca481610f5d565b82525050565b610cb381610f67565b82525050565b610cc281610f67565b82525050565b6000602082019050610cdd6000830184610a33565b92915050565b6000604082019050610cf86000830185610a33565b610d056020830184610a33565b9392505050565b6000606082019050610d216000830186610a33565b610d2e6020830185610a33565b610d3b6040830184610a33565b949350505050565b6000606082019050610d586000830186610a33565b610d656020830185610a33565b8181036040830152610d778184610c25565b9050949350505050565b6000604082019050610d966000830185610a33565b8181036020830152610da88184610b04565b90509392505050565b6000604082019050610dc66000830185610a33565b8181036020830152610dd88184610b6e565b90509392505050565b6000604082019050610df66000830185610a33565b610e036020830184610cb9565b9392505050565b6000602082019050610e1f6000830184610a99565b92915050565b60006020820190508181036000830152610e3e81610ae1565b9050919050565b6000610e4f610e60565b9050610e5b8282610fe5565b919050565b6000604051905090565b600067ffffffffffffffff821115610e8557610e84611016565b5b610e8e82611045565b9050602081019050919050565b600067ffffffffffffffff821115610eb657610eb5611016565b5b610ebf82611045565b9050602081019050919050565b600081519050919050565b600081519050919050565b600082825260208201905092915050565b600082825260208201905092915050565b600082825260208201905092915050565b6000610f2082610f3d565b9050919050565b60008115159050919050565b6000819050919050565b600073ffffffffffffffffffffffffffffffffffffffff82169050919050565b6000819050919050565b60006bffffffffffffffffffffffff82169050919050565b6000610f8a82610f91565b9050919050565b6000610f9c82610f3d565b9050919050565b82818337600083830152505050565b60005b83811015610fd0578082015181840152602081019050610fb5565b83811115610fdf576000848401525b50505050565b610fee82611045565b810181811067ffffffffffffffff8211171561100d5761100c611016565b5b80604052505050565b7f4e487b7100000000000000000000000000000000000000000000000000000000600052604160045260246000fd5b6000601f19601f8301169050919050565b7f455243313136373a20637265617465206661696c656400000000000000000000600082015250565b61108881610f15565b811461109357600080fd5b50565b61109f81610f27565b81146110aa57600080fd5b50565b6110b681610f33565b81146110c157600080fd5b50565b6110cd81610f5d565b81146110d857600080fd5b50565b6110e481610f67565b81146110ef57600080fd5b5056fea26469706673582212207c9fa3626e3a335c1a2cb8f0475b60f81e5a5187f410bde6d6f2ae8274837c6b64736f6c63430008040033";
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
    deploy(_erc721ZImplementation, _erc721ZMinterImplementation, _absBrainFuckMetadataRenderer, overrides) {
        return super.deploy(_erc721ZImplementation, _erc721ZMinterImplementation, _absBrainFuckMetadataRenderer, overrides || {});
    }
    getDeployTransaction(_erc721ZImplementation, _erc721ZMinterImplementation, _absBrainFuckMetadataRenderer, overrides) {
        return super.getDeployTransaction(_erc721ZImplementation, _erc721ZMinterImplementation, _absBrainFuckMetadataRenderer, overrides || {});
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