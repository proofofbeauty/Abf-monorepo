"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ERC721Z__factory = void 0;
const ethers_1 = require("ethers");
const _abi = [
    {
        inputs: [],
        stateMutability: "nonpayable",
        type: "constructor",
    },
    {
        inputs: [],
        name: "ApprovalCallerNotOwnerNorApproved",
        type: "error",
    },
    {
        inputs: [],
        name: "ApprovalQueryForNonexistentToken",
        type: "error",
    },
    {
        inputs: [],
        name: "ApprovalToCurrentOwner",
        type: "error",
    },
    {
        inputs: [],
        name: "ApproveToCaller",
        type: "error",
    },
    {
        inputs: [],
        name: "BalanceQueryForZeroAddress",
        type: "error",
    },
    {
        inputs: [],
        name: "MintToZeroAddress",
        type: "error",
    },
    {
        inputs: [],
        name: "MintZeroQuantity",
        type: "error",
    },
    {
        inputs: [],
        name: "OwnerQueryForNonexistentToken",
        type: "error",
    },
    {
        inputs: [],
        name: "TransferCallerNotOwnerNorApproved",
        type: "error",
    },
    {
        inputs: [],
        name: "TransferFromIncorrectOwner",
        type: "error",
    },
    {
        inputs: [],
        name: "TransferToNonERC721ReceiverImplementer",
        type: "error",
    },
    {
        inputs: [],
        name: "TransferToZeroAddress",
        type: "error",
    },
    {
        anonymous: false,
        inputs: [
            {
                indexed: true,
                internalType: "address",
                name: "owner",
                type: "address",
            },
            {
                indexed: true,
                internalType: "address",
                name: "approved",
                type: "address",
            },
            {
                indexed: true,
                internalType: "uint256",
                name: "tokenId",
                type: "uint256",
            },
        ],
        name: "Approval",
        type: "event",
    },
    {
        anonymous: false,
        inputs: [
            {
                indexed: true,
                internalType: "address",
                name: "owner",
                type: "address",
            },
            {
                indexed: true,
                internalType: "address",
                name: "operator",
                type: "address",
            },
            {
                indexed: false,
                internalType: "bool",
                name: "approved",
                type: "bool",
            },
        ],
        name: "ApprovalForAll",
        type: "event",
    },
    {
        anonymous: false,
        inputs: [
            {
                indexed: true,
                internalType: "address",
                name: "previousOwner",
                type: "address",
            },
            {
                indexed: true,
                internalType: "address",
                name: "newOwner",
                type: "address",
            },
        ],
        name: "OwnershipTransferred",
        type: "event",
    },
    {
        anonymous: false,
        inputs: [
            {
                indexed: false,
                internalType: "bytes32",
                name: "seed",
                type: "bytes32",
            },
        ],
        name: "SetSeed",
        type: "event",
    },
    {
        anonymous: false,
        inputs: [
            {
                indexed: true,
                internalType: "address",
                name: "from",
                type: "address",
            },
            {
                indexed: true,
                internalType: "address",
                name: "to",
                type: "address",
            },
            {
                indexed: true,
                internalType: "uint256",
                name: "tokenId",
                type: "uint256",
            },
        ],
        name: "Transfer",
        type: "event",
    },
    {
        inputs: [],
        name: "CONTRACT_PROPS_PREFIX_KEY",
        outputs: [
            {
                internalType: "bytes32",
                name: "",
                type: "bytes32",
            },
        ],
        stateMutability: "view",
        type: "function",
    },
    {
        inputs: [],
        name: "CONTRACT_PROPS_SUFFIX_KEY",
        outputs: [
            {
                internalType: "bytes32",
                name: "",
                type: "bytes32",
            },
        ],
        stateMutability: "view",
        type: "function",
    },
    {
        inputs: [],
        name: "METADATA_PROPS_PREFIX_KEY",
        outputs: [
            {
                internalType: "bytes32",
                name: "",
                type: "bytes32",
            },
        ],
        stateMutability: "view",
        type: "function",
    },
    {
        inputs: [],
        name: "METADATA_PROPS_SUFFIX_KEY",
        outputs: [
            {
                internalType: "bytes32",
                name: "",
                type: "bytes32",
            },
        ],
        stateMutability: "view",
        type: "function",
    },
    {
        inputs: [
            {
                internalType: "address",
                name: "to",
                type: "address",
            },
            {
                internalType: "uint256",
                name: "numToMint",
                type: "uint256",
            },
        ],
        name: "adminMint",
        outputs: [],
        stateMutability: "nonpayable",
        type: "function",
    },
    {
        inputs: [],
        name: "adminMinter",
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
        name: "allowRendererSwapping",
        outputs: [
            {
                internalType: "bool",
                name: "",
                type: "bool",
            },
        ],
        stateMutability: "view",
        type: "function",
    },
    {
        inputs: [
            {
                internalType: "address",
                name: "to",
                type: "address",
            },
            {
                internalType: "uint256",
                name: "tokenId",
                type: "uint256",
            },
        ],
        name: "approve",
        outputs: [],
        stateMutability: "nonpayable",
        type: "function",
    },
    {
        inputs: [
            {
                internalType: "address",
                name: "owner",
                type: "address",
            },
        ],
        name: "balanceOf",
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
        name: "contractMetadataRenderer",
        outputs: [
            {
                internalType: "contract IRenderer",
                name: "",
                type: "address",
            },
        ],
        stateMutability: "view",
        type: "function",
    },
    {
        inputs: [],
        name: "contractURI",
        outputs: [
            {
                internalType: "string",
                name: "",
                type: "string",
            },
        ],
        stateMutability: "view",
        type: "function",
    },
    {
        inputs: [],
        name: "currentIndex",
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
        name: "customContractURI",
        outputs: [
            {
                internalType: "bytes",
                name: "",
                type: "bytes",
            },
        ],
        stateMutability: "view",
        type: "function",
    },
    {
        inputs: [
            {
                internalType: "uint256",
                name: "tokenId",
                type: "uint256",
            },
        ],
        name: "getApproved",
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
                internalType: "address",
                name: "owner",
                type: "address",
            },
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
        ],
        name: "init",
        outputs: [],
        stateMutability: "nonpayable",
        type: "function",
    },
    {
        inputs: [
            {
                internalType: "address",
                name: "owner",
                type: "address",
            },
            {
                internalType: "address",
                name: "operator",
                type: "address",
            },
        ],
        name: "isApprovedForAll",
        outputs: [
            {
                internalType: "bool",
                name: "",
                type: "bool",
            },
        ],
        stateMutability: "view",
        type: "function",
    },
    {
        inputs: [],
        name: "isInit",
        outputs: [
            {
                internalType: "bool",
                name: "",
                type: "bool",
            },
        ],
        stateMutability: "view",
        type: "function",
    },
    {
        inputs: [],
        name: "metadataRenderer",
        outputs: [
            {
                internalType: "contract IRenderer",
                name: "",
                type: "address",
            },
        ],
        stateMutability: "view",
        type: "function",
    },
    {
        inputs: [],
        name: "mintingSupply",
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
        name: "name",
        outputs: [
            {
                internalType: "string",
                name: "",
                type: "string",
            },
        ],
        stateMutability: "view",
        type: "function",
    },
    {
        inputs: [],
        name: "owner",
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
                internalType: "uint256",
                name: "tokenId",
                type: "uint256",
            },
        ],
        name: "ownerOf",
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
        name: "renounceOwnership",
        outputs: [],
        stateMutability: "nonpayable",
        type: "function",
    },
    {
        inputs: [
            {
                internalType: "uint256",
                name: "_tokenId",
                type: "uint256",
            },
            {
                internalType: "uint256",
                name: "_salePrice",
                type: "uint256",
            },
        ],
        name: "royaltyInfo",
        outputs: [
            {
                internalType: "address",
                name: "",
                type: "address",
            },
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
                internalType: "address",
                name: "from",
                type: "address",
            },
            {
                internalType: "address",
                name: "to",
                type: "address",
            },
            {
                internalType: "uint256",
                name: "tokenId",
                type: "uint256",
            },
        ],
        name: "safeTransferFrom",
        outputs: [],
        stateMutability: "nonpayable",
        type: "function",
    },
    {
        inputs: [
            {
                internalType: "address",
                name: "from",
                type: "address",
            },
            {
                internalType: "address",
                name: "to",
                type: "address",
            },
            {
                internalType: "uint256",
                name: "tokenId",
                type: "uint256",
            },
            {
                internalType: "bytes",
                name: "_data",
                type: "bytes",
            },
        ],
        name: "safeTransferFrom",
        outputs: [],
        stateMutability: "nonpayable",
        type: "function",
    },
    {
        inputs: [],
        name: "seed",
        outputs: [
            {
                internalType: "bytes32",
                name: "",
                type: "bytes32",
            },
        ],
        stateMutability: "view",
        type: "function",
    },
    {
        inputs: [
            {
                internalType: "address",
                name: "_adminMinter",
                type: "address",
            },
        ],
        name: "setAdminMinter",
        outputs: [],
        stateMutability: "nonpayable",
        type: "function",
    },
    {
        inputs: [
            {
                internalType: "address",
                name: "operator",
                type: "address",
            },
            {
                internalType: "bool",
                name: "approved",
                type: "bool",
            },
        ],
        name: "setApprovalForAll",
        outputs: [],
        stateMutability: "nonpayable",
        type: "function",
    },
    {
        inputs: [
            {
                internalType: "address",
                name: "_contractMetadataRenderer",
                type: "address",
            },
        ],
        name: "setContractMetadataRenderer",
        outputs: [],
        stateMutability: "nonpayable",
        type: "function",
    },
    {
        inputs: [
            {
                internalType: "address",
                name: "_metadataRenderer",
                type: "address",
            },
        ],
        name: "setMetadataRenderer",
        outputs: [],
        stateMutability: "nonpayable",
        type: "function",
    },
    {
        inputs: [
            {
                internalType: "address",
                name: "newReceiver",
                type: "address",
            },
            {
                internalType: "uint96",
                name: "newRoyaltyFraction",
                type: "uint96",
            },
        ],
        name: "setRoyalty",
        outputs: [],
        stateMutability: "nonpayable",
        type: "function",
    },
    {
        inputs: [
            {
                internalType: "bytes32",
                name: "_seed",
                type: "bytes32",
            },
        ],
        name: "setSeed",
        outputs: [],
        stateMutability: "nonpayable",
        type: "function",
    },
    {
        inputs: [
            {
                internalType: "bytes4",
                name: "interfaceId",
                type: "bytes4",
            },
        ],
        name: "supportsInterface",
        outputs: [
            {
                internalType: "bool",
                name: "",
                type: "bool",
            },
        ],
        stateMutability: "view",
        type: "function",
    },
    {
        inputs: [],
        name: "symbol",
        outputs: [
            {
                internalType: "string",
                name: "",
                type: "string",
            },
        ],
        stateMutability: "view",
        type: "function",
    },
    {
        inputs: [],
        name: "tokenDescriptionKey",
        outputs: [
            {
                internalType: "bytes32",
                name: "",
                type: "bytes32",
            },
        ],
        stateMutability: "view",
        type: "function",
    },
    {
        inputs: [
            {
                internalType: "uint256",
                name: "tokenId",
                type: "uint256",
            },
        ],
        name: "tokenURI",
        outputs: [
            {
                internalType: "string",
                name: "",
                type: "string",
            },
        ],
        stateMutability: "view",
        type: "function",
    },
    {
        inputs: [],
        name: "totalSupply",
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
                internalType: "address",
                name: "from",
                type: "address",
            },
            {
                internalType: "address",
                name: "to",
                type: "address",
            },
            {
                internalType: "uint256",
                name: "tokenId",
                type: "uint256",
            },
        ],
        name: "transferFrom",
        outputs: [],
        stateMutability: "nonpayable",
        type: "function",
    },
    {
        inputs: [
            {
                internalType: "address",
                name: "newOwner",
                type: "address",
            },
        ],
        name: "transferOwnership",
        outputs: [],
        stateMutability: "nonpayable",
        type: "function",
    },
];
const _bytecode = "0x60806040526000600d60146101000a81548160ff0219169083151502179055503480156200002c57600080fd5b506200003d6200006960201b60201c565b60008190555062000063620000576200006e60201b60201c565b6200007660201b60201c565b6200013c565b600090565b600033905090565b6000600a60009054906101000a900473ffffffffffffffffffffffffffffffffffffffff16905081600a60006101000a81548173ffffffffffffffffffffffffffffffffffffffff021916908373ffffffffffffffffffffffffffffffffffffffff1602179055508173ffffffffffffffffffffffffffffffffffffffff168173ffffffffffffffffffffffffffffffffffffffff167f8be0079c531659141344cd1fd0a4f28419497f9722a3daafe3b4186f6b6457e060405160405180910390a35050565b613f40806200014c6000396000f3fe608060405234801561001057600080fd5b50600436106102485760003560e01c80638da5cb5b1161013b578063e232ccf4116100b8578063f24b87211161007c578063f24b8721146106c0578063f2fde38b146106dc578063f86f6ead146106f8578063f96ada9014610714578063fd4fe8a81461073257610248565b8063e232ccf41461061a578063e58306f914610638578063e8a3d48514610654578063e985e9c514610672578063ed7bec99146106a257610248565b8063b145a5b8116100ff578063b145a5b814610574578063b88d4fde14610592578063c87b56dd146105ae578063c933d09a146105de578063d84a3d2f146105fc57610248565b80638da5cb5b146104e45780638f2fc60b1461050257806395d89b411461051e57806396c7442f1461053c578063a22cb4651461055857610248565b8063347024ff116101c9578063703199701161018d578063703199701461045057806370a082311461046e578063715018a61461049e5780637b62151f146104a85780637d94792a146104c657610248565b8063347024ff146103ac57806342842e0e146103c85780635646a1ad146103e45780636352211e146104025780636cbf64561461043257610248565b806323b872dd1161021057806323b872dd1461030557806326987b601461032157806329d051931461033f5780632a55205a1461035d5780632ff15d8b1461038e57610248565b806301ffc9a71461024d57806306fdde031461027d578063081812fc1461029b578063095ea7b3146102cb57806318160ddd146102e7575b600080fd5b6102676004803603810190610262919061320d565b61074e565b604051610274919061364d565b60405180910390f35b610285610760565b60405161029291906136c0565b60405180910390f35b6102b560048036038101906102b091906132a0565b6107f2565b6040516102c291906135bd565b60405180910390f35b6102e560048036038101906102e0919061316c565b61086e565b005b6102ef610979565b6040516102fc9190613822565b60405180910390f35b61031f600480360381019061031a9190613012565b610990565b005b6103296109a0565b6040516103369190613822565b60405180910390f35b6103476109a9565b6040516103549190613668565b60405180910390f35b610377600480360381019061037291906132c9565b6109cd565b604051610385929190613624565b60405180910390f35b610396610bb8565b6040516103a39190613668565b60405180910390f35b6103c660048036038101906103c191906131e4565b610bdc565b005b6103e260048036038101906103dd9190613012565b610c27565b005b6103ec610c47565b6040516103f9919061364d565b60405180910390f35b61041c600480360381019061041791906132a0565b610c5a565b60405161042991906135bd565b60405180910390f35b61043a610c70565b6040516104479190613683565b60405180910390f35b610458610cfe565b60405161046591906136a5565b60405180910390f35b61048860048036038101906104839190612fad565b610d24565b6040516104959190613822565b60405180910390f35b6104a6610df4565b005b6104b0610e08565b6040516104bd9190613668565b60405180910390f35b6104ce610e2c565b6040516104db9190613668565b60405180910390f35b6104ec610e32565b6040516104f991906135bd565b60405180910390f35b61051c600480360381019061051791906131a8565b610e5c565b005b610526610e72565b60405161053391906136c0565b60405180910390f35b61055660048036038101906105519190613118565b610f04565b005b610572600480360381019061056d91906130dc565b6110b5565b005b61057c61122d565b604051610589919061364d565b60405180910390f35b6105ac60048036038101906105a79190613061565b611240565b005b6105c860048036038101906105c391906132a0565b6112bc565b6040516105d591906136c0565b60405180910390f35b6105e661142a565b6040516105f39190613822565b60405180910390f35b610604611430565b60405161061191906136a5565b60405180910390f35b610622611456565b60405161062f9190613668565b60405180910390f35b610652600480360381019061064d919061316c565b61147a565b005b61065c61157c565b60405161066991906136c0565b60405180910390f35b61068c60048036038101906106879190612fd6565b6116e7565b604051610699919061364d565b60405180910390f35b6106aa61177b565b6040516106b791906135bd565b60405180910390f35b6106da60048036038101906106d59190612fad565b6117a1565b005b6106f660048036038101906106f19190612fad565b6117ed565b005b610712600480360381019061070d9190612fad565b611871565b005b61071c61190c565b6040516107299190613668565b60405180910390f35b61074c60048036038101906107479190612fad565b611912565b005b6000610759826119ad565b9050919050565b60606002805461076f90613ad9565b80601f016020809104026020016040519081016040528092919081815260200182805461079b90613ad9565b80156107e85780601f106107bd576101008083540402835291602001916107e8565b820191906000526020600020905b8154815290600101906020018083116107cb57829003601f168201915b5050505050905090565b60006107fd82611a27565b610833576040517fcf4700e400000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b6006600083815260200190815260200160002060009054906101000a900473ffffffffffffffffffffffffffffffffffffffff169050919050565b600061087982610c5a565b90508073ffffffffffffffffffffffffffffffffffffffff168373ffffffffffffffffffffffffffffffffffffffff1614156108e1576040517f943f7b8c00000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b8073ffffffffffffffffffffffffffffffffffffffff16610900611a75565b73ffffffffffffffffffffffffffffffffffffffff161415801561093257506109308161092b611a75565b6116e7565b155b15610969576040517fcfb3b94200000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b610974838383611a7d565b505050565b6000610983611b2f565b6001546000540303905090565b61099b838383611b34565b505050565b60008054905090565b7f434f4e54524143545f50524f50535f505245464958000000000000000000000081565b6000806000600960008681526020019081526020016000206040518060400160405290816000820160009054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1681526020016000820160149054906101000a90046bffffffffffffffffffffffff166bffffffffffffffffffffffff166bffffffffffffffffffffffff16815250509050600073ffffffffffffffffffffffffffffffffffffffff16816000015173ffffffffffffffffffffffffffffffffffffffff161415610b635760086040518060400160405290816000820160009054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1681526020016000820160149054906101000a90046bffffffffffffffffffffffff166bffffffffffffffffffffffff166bffffffffffffffffffffffff168152505090505b6000610b6d611fea565b6bffffffffffffffffffffffff1682602001516bffffffffffffffffffffffff1686610b999190613983565b610ba39190613952565b90508160000151819350935050509250929050565b7f4d455441444154415f50524f50535f505245464958000000000000000000000081565b610be4611ff4565b80600f819055507fdf46164a0adf6e832148f1afdd394b93b30ed3e8d6b2c88c0fa171b99487aa3f600f54604051610c1c9190613668565b60405180910390a150565b610c4283838360405180602001604052806000815250611240565b505050565b601160009054906101000a900460ff1681565b6000610c6582612072565b600001519050919050565b60108054610c7d90613ad9565b80601f0160208091040260200160405190810160405280929190818152602001828054610ca990613ad9565b8015610cf65780601f10610ccb57610100808354040283529160200191610cf6565b820191906000526020600020905b815481529060010190602001808311610cd957829003601f168201915b505050505081565b600d60009054906101000a900473ffffffffffffffffffffffffffffffffffffffff1681565b60008073ffffffffffffffffffffffffffffffffffffffff168273ffffffffffffffffffffffffffffffffffffffff161415610d8c576040517f8f4eb60400000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b600560008373ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002060000160009054906101000a900467ffffffffffffffff1667ffffffffffffffff169050919050565b610dfc611ff4565b610e066000612301565b565b7f434f4e54524143545f50524f50535f535546464958000000000000000000000081565b600f5481565b6000600a60009054906101000a900473ffffffffffffffffffffffffffffffffffffffff16905090565b610e64611ff4565b610e6e82826123c7565b5050565b606060038054610e8190613ad9565b80601f0160208091040260200160405190810160405280929190818152602001828054610ead90613ad9565b8015610efa5780601f10610ecf57610100808354040283529160200191610efa565b820191906000526020600020905b815481529060010190602001808311610edd57829003601f168201915b5050505050905090565b600d60149054906101000a900460ff1615610f54576040517f08c379a0000000000000000000000000000000000000000000000000000000008152600401610f4b906137e2565b60405180910390fd5b6001600d60146101000a81548160ff021916908315150217905550610f7882612301565b806000015160029080519060200190610f92929190612c06565b50806020015160039080519060200190610fad929190612c06565b508060400151600f819055508060800151600d60006101000a81548173ffffffffffffffffffffffffffffffffffffffff021916908373ffffffffffffffffffffffffffffffffffffffff1602179055508060600151600c60006101000a81548173ffffffffffffffffffffffffffffffffffffffff021916908373ffffffffffffffffffffffffffffffffffffffff1602179055508060a00151601160006101000a81548160ff0219169083151502179055508060e00151600e819055508060c00151601160016101000a81548173ffffffffffffffffffffffffffffffffffffffff021916908373ffffffffffffffffffffffffffffffffffffffff1602179055505050565b6110bd611a75565b73ffffffffffffffffffffffffffffffffffffffff168273ffffffffffffffffffffffffffffffffffffffff161415611122576040517fb06307db00000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b806007600061112f611a75565b73ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002060008473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002060006101000a81548160ff0219169083151502179055508173ffffffffffffffffffffffffffffffffffffffff166111dc611a75565b73ffffffffffffffffffffffffffffffffffffffff167f17307eab39ab6107e8899845ad3d59bd9653f200f220920489ca2b5937696c3183604051611221919061364d565b60405180910390a35050565b600d60149054906101000a900460ff1681565b61124b848484611b34565b61126a8373ffffffffffffffffffffffffffffffffffffffff1661255d565b801561127f575061127d84848484612580565b155b156112b6576040517fd1a57ed600000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b50505050565b60606112c782611a27565b611306576040517f08c379a00000000000000000000000000000000000000000000000000000000081526004016112fd90613742565b60405180910390fd5b6000602060ff16141561134e576040517f08c379a0000000000000000000000000000000000000000000000000000000008152600401611345906137c2565b60405180910390fd5b600d60009054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1663316df61e3084600f546040516020016113a393929190613580565b6040516020818303038152906040526040518263ffffffff1660e01b81526004016113ce9190613683565b60006040518083038186803b1580156113e657600080fd5b505afa1580156113fa573d6000803e3d6000fd5b505050506040513d6000823e3d601f19601f82011682018060405250810190611423919061325f565b9050919050565b600e5481565b600c60009054906101000a900473ffffffffffffffffffffffffffffffffffffffff1681565b7f4d455441444154415f50524f50535f535546464958000000000000000000000081565b601160019054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff163373ffffffffffffffffffffffffffffffffffffffff161461150a576040517f08c379a000000000000000000000000000000000000000000000000000000000815260040161150190613722565b60405180910390fd5b600e548160005461151b91906138fc565b111561155c576040517f08c379a000000000000000000000000000000000000000000000000000000000815260040161155390613702565b60405180910390fd5b61157882826040518060200160405280600081525060006126e0565b5050565b6060600073ffffffffffffffffffffffffffffffffffffffff16600c60009054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff161415611612576040518060400160405280600281526020017f7b7d00000000000000000000000000000000000000000000000000000000000081525090506116e4565b600c60009054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1663316df61e306040516020016116619190613565565b6040516020818303038152906040526040518263ffffffff1660e01b815260040161168c9190613683565b60006040518083038186803b1580156116a457600080fd5b505afa1580156116b8573d6000803e3d6000fd5b505050506040513d6000823e3d601f19601f820116820180604052508101906116e1919061325f565b90505b90565b6000600760008473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002060008373ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002060009054906101000a900460ff16905092915050565b601160019054906101000a900473ffffffffffffffffffffffffffffffffffffffff1681565b6117a9611ff4565b80601160016101000a81548173ffffffffffffffffffffffffffffffffffffffff021916908373ffffffffffffffffffffffffffffffffffffffff16021790555050565b6117f5611ff4565b600073ffffffffffffffffffffffffffffffffffffffff168173ffffffffffffffffffffffffffffffffffffffff161415611865576040517f08c379a000000000000000000000000000000000000000000000000000000000815260040161185c906136e2565b60405180910390fd5b61186e81612301565b50565b611879611ff4565b601160009054906101000a900460ff166118c8576040517f08c379a00000000000000000000000000000000000000000000000000000000081526004016118bf906137a2565b60405180910390fd5b80600c60006101000a81548173ffffffffffffffffffffffffffffffffffffffff021916908373ffffffffffffffffffffffffffffffffffffffff16021790555050565b600b5481565b61191a611ff4565b601160009054906101000a900460ff16611969576040517f08c379a0000000000000000000000000000000000000000000000000000000008152600401611960906137a2565b60405180910390fd5b80600d60006101000a81548173ffffffffffffffffffffffffffffffffffffffff021916908373ffffffffffffffffffffffffffffffffffffffff16021790555050565b60007f2a55205a000000000000000000000000000000000000000000000000000000007bffffffffffffffffffffffffffffffffffffffffffffffffffffffff1916827bffffffffffffffffffffffffffffffffffffffffffffffffffffffff19161480611a205750611a1f82612aae565b5b9050919050565b600081611a32611b2f565b11158015611a41575060005482105b8015611a6e575060046000838152602001908152602001600020600001601c9054906101000a900460ff16155b9050919050565b600033905090565b826006600084815260200190815260200160002060006101000a81548173ffffffffffffffffffffffffffffffffffffffff021916908373ffffffffffffffffffffffffffffffffffffffff160217905550818373ffffffffffffffffffffffffffffffffffffffff168273ffffffffffffffffffffffffffffffffffffffff167f8c5be1e5ebec7d5bd14f71427d1e84f3dd0314c0f7b2291e5b200ac8c7c3b92560405160405180910390a4505050565b600090565b6000611b3f82612072565b90508373ffffffffffffffffffffffffffffffffffffffff16816000015173ffffffffffffffffffffffffffffffffffffffff1614611baa576040517fa114810000000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b60008473ffffffffffffffffffffffffffffffffffffffff16611bcb611a75565b73ffffffffffffffffffffffffffffffffffffffff161480611bfa5750611bf985611bf4611a75565b6116e7565b5b80611c3f5750611c08611a75565b73ffffffffffffffffffffffffffffffffffffffff16611c27846107f2565b73ffffffffffffffffffffffffffffffffffffffff16145b905080611c78576040517f59c896be00000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b600073ffffffffffffffffffffffffffffffffffffffff168473ffffffffffffffffffffffffffffffffffffffff161415611cdf576040517fea553b3400000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b611cec8585856001612b90565b611cf860008487611a7d565b6001600560008773ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002060000160008282829054906101000a900467ffffffffffffffff160392506101000a81548167ffffffffffffffff021916908367ffffffffffffffff1602179055506001600560008673ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002060000160008282829054906101000a900467ffffffffffffffff160192506101000a81548167ffffffffffffffff021916908367ffffffffffffffff1602179055506000600460008581526020019081526020016000209050848160000160006101000a81548173ffffffffffffffffffffffffffffffffffffffff021916908373ffffffffffffffffffffffffffffffffffffffff160217905550428160000160146101000a81548167ffffffffffffffff021916908367ffffffffffffffff16021790555060006001850190506000600460008381526020019081526020016000209050600073ffffffffffffffffffffffffffffffffffffffff168160000160009054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff161415611f78576000548214611f7757878160000160006101000a81548173ffffffffffffffffffffffffffffffffffffffff021916908373ffffffffffffffffffffffffffffffffffffffff16021790555084602001518160000160146101000a81548167ffffffffffffffff021916908367ffffffffffffffff1602179055505b5b505050828473ffffffffffffffffffffffffffffffffffffffff168673ffffffffffffffffffffffffffffffffffffffff167fddf252ad1be2c89b69c2b068fc378daa952ba7f163c4a11628f55a4df523b3ef60405160405180910390a4611fe38585856001612b96565b5050505050565b6000612710905090565b611ffc611a75565b73ffffffffffffffffffffffffffffffffffffffff1661201a610e32565b73ffffffffffffffffffffffffffffffffffffffff1614612070576040517f08c379a000000000000000000000000000000000000000000000000000000000815260040161206790613762565b60405180910390fd5b565b61207a612c8c565b600082905080612088611b2f565b11158015612097575060005481105b156122ca576000600460008381526020019081526020016000206040518060600160405290816000820160009054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1681526020016000820160149054906101000a900467ffffffffffffffff1667ffffffffffffffff1667ffffffffffffffff16815260200160008201601c9054906101000a900460ff161515151581525050905080604001516122c857600073ffffffffffffffffffffffffffffffffffffffff16816000015173ffffffffffffffffffffffffffffffffffffffff16146121ac5780925050506122fc565b5b6001156122c757818060019003925050600460008381526020019081526020016000206040518060600160405290816000820160009054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1681526020016000820160149054906101000a900467ffffffffffffffff1667ffffffffffffffff1667ffffffffffffffff16815260200160008201601c9054906101000a900460ff1615151515815250509050600073ffffffffffffffffffffffffffffffffffffffff16816000015173ffffffffffffffffffffffffffffffffffffffff16146122c25780925050506122fc565b6121ad565b5b505b6040517fdf2d9b4200000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b919050565b6000600a60009054906101000a900473ffffffffffffffffffffffffffffffffffffffff16905081600a60006101000a81548173ffffffffffffffffffffffffffffffffffffffff021916908373ffffffffffffffffffffffffffffffffffffffff1602179055508173ffffffffffffffffffffffffffffffffffffffff168173ffffffffffffffffffffffffffffffffffffffff167f8be0079c531659141344cd1fd0a4f28419497f9722a3daafe3b4186f6b6457e060405160405180910390a35050565b6123cf611fea565b6bffffffffffffffffffffffff16816bffffffffffffffffffffffff16111561242d576040517f08c379a000000000000000000000000000000000000000000000000000000000815260040161242490613782565b60405180910390fd5b600073ffffffffffffffffffffffffffffffffffffffff168273ffffffffffffffffffffffffffffffffffffffff16141561249d576040517f08c379a000000000000000000000000000000000000000000000000000000000815260040161249490613802565b60405180910390fd5b60405180604001604052808373ffffffffffffffffffffffffffffffffffffffff168152602001826bffffffffffffffffffffffff16815250600860008201518160000160006101000a81548173ffffffffffffffffffffffffffffffffffffffff021916908373ffffffffffffffffffffffffffffffffffffffff16021790555060208201518160000160146101000a8154816bffffffffffffffffffffffff02191690836bffffffffffffffffffffffff1602179055509050505050565b6000808273ffffffffffffffffffffffffffffffffffffffff163b119050919050565b60008373ffffffffffffffffffffffffffffffffffffffff1663150b7a026125a6611a75565b8786866040518563ffffffff1660e01b81526004016125c894939291906135d8565b602060405180830381600087803b1580156125e257600080fd5b505af192505050801561261357506040513d601f19601f820116820180604052508101906126109190613236565b60015b61268d573d8060008114612643576040519150601f19603f3d011682016040523d82523d6000602084013e612648565b606091505b50600081511415612685576040517fd1a57ed600000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b805181602001fd5b63150b7a0260e01b7bffffffffffffffffffffffffffffffffffffffffffffffffffffffff1916817bffffffffffffffffffffffffffffffffffffffffffffffffffffffff191614915050949350505050565b600080549050600073ffffffffffffffffffffffffffffffffffffffff168573ffffffffffffffffffffffffffffffffffffffff16141561274d576040517f2e07630000000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b6000841415612788576040517fb562e8dd00000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b6127956000868387612b90565b83600560008773ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002060000160008282829054906101000a900467ffffffffffffffff160192506101000a81548167ffffffffffffffff021916908367ffffffffffffffff16021790555083600560008773ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002060000160088282829054906101000a900467ffffffffffffffff160192506101000a81548167ffffffffffffffff021916908367ffffffffffffffff160217905550846004600083815260200190815260200160002060000160006101000a81548173ffffffffffffffffffffffffffffffffffffffff021916908373ffffffffffffffffffffffffffffffffffffffff160217905550426004600083815260200190815260200160002060000160146101000a81548167ffffffffffffffff021916908367ffffffffffffffff16021790555060008190506000858201905083801561295f575061295e8773ffffffffffffffffffffffffffffffffffffffff1661255d565b5b15612a25575b818773ffffffffffffffffffffffffffffffffffffffff16600073ffffffffffffffffffffffffffffffffffffffff167fddf252ad1be2c89b69c2b068fc378daa952ba7f163c4a11628f55a4df523b3ef60405160405180910390a46129d46000888480600101955088612580565b612a0a576040517fd1a57ed600000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b80821415612965578260005414612a2057600080fd5b612a91565b5b818060010192508773ffffffffffffffffffffffffffffffffffffffff16600073ffffffffffffffffffffffffffffffffffffffff167fddf252ad1be2c89b69c2b068fc378daa952ba7f163c4a11628f55a4df523b3ef60405160405180910390a480821415612a26575b816000819055505050612aa76000868387612b96565b5050505050565b60007f80ac58cd000000000000000000000000000000000000000000000000000000007bffffffffffffffffffffffffffffffffffffffffffffffffffffffff1916827bffffffffffffffffffffffffffffffffffffffffffffffffffffffff19161480612b7957507f5b5e139f000000000000000000000000000000000000000000000000000000007bffffffffffffffffffffffffffffffffffffffffffffffffffffffff1916827bffffffffffffffffffffffffffffffffffffffffffffffffffffffff1916145b80612b895750612b8882612b9c565b5b9050919050565b50505050565b50505050565b60007f01ffc9a7000000000000000000000000000000000000000000000000000000007bffffffffffffffffffffffffffffffffffffffffffffffffffffffff1916827bffffffffffffffffffffffffffffffffffffffffffffffffffffffff1916149050919050565b828054612c1290613ad9565b90600052602060002090601f016020900481019282612c345760008555612c7b565b82601f10612c4d57805160ff1916838001178555612c7b565b82800160010185558215612c7b579182015b82811115612c7a578251825591602001919060010190612c5f565b5b509050612c889190612ccf565b5090565b6040518060600160405280600073ffffffffffffffffffffffffffffffffffffffff168152602001600067ffffffffffffffff1681526020016000151581525090565b5b80821115612ce8576000816000905550600101612cd0565b5090565b6000612cff612cfa84613862565b61383d565b905082815260208101848484011115612d1757600080fd5b612d22848285613a97565b509392505050565b6000612d3d612d3884613893565b61383d565b905082815260208101848484011115612d5557600080fd5b612d60848285613a97565b509392505050565b6000612d7b612d7684613893565b61383d565b905082815260208101848484011115612d9357600080fd5b612d9e848285613aa6565b509392505050565b600081359050612db581613e80565b92915050565b600081359050612dca81613e97565b92915050565b600081359050612ddf81613eae565b92915050565b600081359050612df481613ec5565b92915050565b600081519050612e0981613ec5565b92915050565b600082601f830112612e2057600080fd5b8135612e30848260208601612cec565b91505092915050565b600082601f830112612e4a57600080fd5b8135612e5a848260208601612d2a565b91505092915050565b600082601f830112612e7457600080fd5b8151612e84848260208601612d68565b91505092915050565b60006101008284031215612ea057600080fd5b612eab61010061383d565b9050600082013567ffffffffffffffff811115612ec757600080fd5b612ed384828501612e39565b600083015250602082013567ffffffffffffffff811115612ef357600080fd5b612eff84828501612e39565b6020830152506040612f1384828501612dd0565b6040830152506060612f2784828501612da6565b6060830152506080612f3b84828501612da6565b60808301525060a0612f4f84828501612dbb565b60a08301525060c0612f6384828501612da6565b60c08301525060e0612f7784828501612f83565b60e08301525092915050565b600081359050612f9281613edc565b92915050565b600081359050612fa781613ef3565b92915050565b600060208284031215612fbf57600080fd5b6000612fcd84828501612da6565b91505092915050565b60008060408385031215612fe957600080fd5b6000612ff785828601612da6565b925050602061300885828601612da6565b9150509250929050565b60008060006060848603121561302757600080fd5b600061303586828701612da6565b935050602061304686828701612da6565b925050604061305786828701612f83565b9150509250925092565b6000806000806080858703121561307757600080fd5b600061308587828801612da6565b945050602061309687828801612da6565b93505060406130a787828801612f83565b925050606085013567ffffffffffffffff8111156130c457600080fd5b6130d087828801612e0f565b91505092959194509250565b600080604083850312156130ef57600080fd5b60006130fd85828601612da6565b925050602061310e85828601612dbb565b9150509250929050565b6000806040838503121561312b57600080fd5b600061313985828601612da6565b925050602083013567ffffffffffffffff81111561315657600080fd5b61316285828601612e8d565b9150509250929050565b6000806040838503121561317f57600080fd5b600061318d85828601612da6565b925050602061319e85828601612f83565b9150509250929050565b600080604083850312156131bb57600080fd5b60006131c985828601612da6565b92505060206131da85828601612f98565b9150509250929050565b6000602082840312156131f657600080fd5b600061320484828501612dd0565b91505092915050565b60006020828403121561321f57600080fd5b600061322d84828501612de5565b91505092915050565b60006020828403121561324857600080fd5b600061325684828501612dfa565b91505092915050565b60006020828403121561327157600080fd5b600082015167ffffffffffffffff81111561328b57600080fd5b61329784828501612e63565b91505092915050565b6000602082840312156132b257600080fd5b60006132c084828501612f83565b91505092915050565b600080604083850312156132dc57600080fd5b60006132ea85828601612f83565b92505060206132fb85828601612f83565b9150509250929050565b61330e816139dd565b82525050565b613325613320826139dd565b613b3c565b82525050565b613334816139ef565b82525050565b613343816139fb565b82525050565b61335a613355826139fb565b613b4e565b82525050565b600061336b826138c4565b61337581856138da565b9350613385818560208601613aa6565b61338e81613c30565b840191505092915050565b6133a281613a73565b82525050565b60006133b3826138cf565b6133bd81856138eb565b93506133cd818560208601613aa6565b6133d681613c30565b840191505092915050565b60006133ee6026836138eb565b91506133f982613c4e565b604082019050919050565b60006134116013836138eb565b915061341c82613c9d565b602082019050919050565b6000613434601a836138eb565b915061343f82613cc6565b602082019050919050565b6000613457602a836138eb565b915061346282613cef565b604082019050919050565b600061347a6020836138eb565b915061348582613d3e565b602082019050919050565b600061349d602a836138eb565b91506134a882613d67565b604082019050919050565b60006134c06039836138eb565b91506134cb82613db6565b604082019050919050565b60006134e3601e836138eb565b91506134ee82613e05565b602082019050919050565b60006135066020836138eb565b915061351182613e2e565b602082019050919050565b60006135296019836138eb565b915061353482613e57565b602082019050919050565b61354881613a51565b82525050565b61355f61355a82613a51565b613b6a565b82525050565b60006135718284613314565b60148201915081905092915050565b600061358c8286613314565b60148201915061359c828561354e565b6020820191506135ac8284613349565b602082019150819050949350505050565b60006020820190506135d26000830184613305565b92915050565b60006080820190506135ed6000830187613305565b6135fa6020830186613305565b613607604083018561353f565b81810360608301526136198184613360565b905095945050505050565b60006040820190506136396000830185613305565b613646602083018461353f565b9392505050565b6000602082019050613662600083018461332b565b92915050565b600060208201905061367d600083018461333a565b92915050565b6000602082019050818103600083015261369d8184613360565b905092915050565b60006020820190506136ba6000830184613399565b92915050565b600060208201905081810360008301526136da81846133a8565b905092915050565b600060208201905081810360008301526136fb816133e1565b9050919050565b6000602082019050818103600083015261371b81613404565b9050919050565b6000602082019050818103600083015261373b81613427565b9050919050565b6000602082019050818103600083015261375b8161344a565b9050919050565b6000602082019050818103600083015261377b8161346d565b9050919050565b6000602082019050818103600083015261379b81613490565b9050919050565b600060208201905081810360008301526137bb816134b3565b9050919050565b600060208201905081810360008301526137db816134d6565b9050919050565b600060208201905081810360008301526137fb816134f9565b9050919050565b6000602082019050818103600083015261381b8161351c565b9050919050565b6000602082019050613837600083018461353f565b92915050565b6000613847613858565b90506138538282613b0b565b919050565b6000604051905090565b600067ffffffffffffffff82111561387d5761387c613c01565b5b61388682613c30565b9050602081019050919050565b600067ffffffffffffffff8211156138ae576138ad613c01565b5b6138b782613c30565b9050602081019050919050565b600081519050919050565b600081519050919050565b600082825260208201905092915050565b600082825260208201905092915050565b600061390782613a51565b915061391283613a51565b9250827fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff0382111561394757613946613b74565b5b828201905092915050565b600061395d82613a51565b915061396883613a51565b92508261397857613977613ba3565b5b828204905092915050565b600061398e82613a51565b915061399983613a51565b9250817fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff04831182151516156139d2576139d1613b74565b5b828202905092915050565b60006139e882613a31565b9050919050565b60008115159050919050565b6000819050919050565b60007fffffffff0000000000000000000000000000000000000000000000000000000082169050919050565b600073ffffffffffffffffffffffffffffffffffffffff82169050919050565b6000819050919050565b60006bffffffffffffffffffffffff82169050919050565b6000613a7e82613a85565b9050919050565b6000613a9082613a31565b9050919050565b82818337600083830152505050565b60005b83811015613ac4578082015181840152602081019050613aa9565b83811115613ad3576000848401525b50505050565b60006002820490506001821680613af157607f821691505b60208210811415613b0557613b04613bd2565b5b50919050565b613b1482613c30565b810181811067ffffffffffffffff82111715613b3357613b32613c01565b5b80604052505050565b6000613b4782613b58565b9050919050565b6000819050919050565b6000613b6382613c41565b9050919050565b6000819050919050565b7f4e487b7100000000000000000000000000000000000000000000000000000000600052601160045260246000fd5b7f4e487b7100000000000000000000000000000000000000000000000000000000600052601260045260246000fd5b7f4e487b7100000000000000000000000000000000000000000000000000000000600052602260045260246000fd5b7f4e487b7100000000000000000000000000000000000000000000000000000000600052604160045260246000fd5b6000601f19601f8301169050919050565b60008160601b9050919050565b7f4f776e61626c653a206e6577206f776e657220697320746865207a65726f206160008201527f6464726573730000000000000000000000000000000000000000000000000000602082015250565b7f6578636565646564206d617820737570706c7900000000000000000000000000600082015250565b7f4f6e6c792061646d696e206d696e7465722063616e206d696e74000000000000600082015250565b7f427261696e4675636b3a2055524920717565727920666f72206e6f6e6578697360008201527f74656e7420746f6b656e00000000000000000000000000000000000000000000602082015250565b7f4f776e61626c653a2063616c6c6572206973206e6f7420746865206f776e6572600082015250565b7f455243323938313a20726f79616c7479206665652077696c6c2065786365656460008201527f2073616c65507269636500000000000000000000000000000000000000000000602082015250565b7f5265717569726573204e465420746f20626520636f6e6669677572656420746f60008201527f20616c6c6f772072656e6465726572207377617070696e672e00000000000000602082015250565b7f427261696e4675636b3a2053656564206973206e6f7420736574207965740000600082015250565b7f4e46542068617320616c7265616479206265656e20696e697469616c697a6564600082015250565b7f455243323938313a20696e76616c696420726563656976657200000000000000600082015250565b613e89816139dd565b8114613e9457600080fd5b50565b613ea0816139ef565b8114613eab57600080fd5b50565b613eb7816139fb565b8114613ec257600080fd5b50565b613ece81613a05565b8114613ed957600080fd5b50565b613ee581613a51565b8114613ef057600080fd5b50565b613efc81613a5b565b8114613f0757600080fd5b5056fea26469706673582212204f7c44b5807e3e089b89e0c9dda52bd1324dbce4273700fe0d22a980aa4bc46964736f6c63430008040033";
const isSuperArgs = (xs) => xs.length > 1;
class ERC721Z__factory extends ethers_1.ContractFactory {
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
exports.ERC721Z__factory = ERC721Z__factory;
ERC721Z__factory.bytecode = _bytecode;
ERC721Z__factory.abi = _abi;
//# sourceMappingURL=ERC721Z__factory.js.map