"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ConfiguredGifImageRenderer__factory = void 0;
const ethers_1 = require("ethers");
const _abi = [
    {
        inputs: [
            {
                internalType: "address",
                name: "_gifImageRenderer",
                type: "address",
            },
        ],
        stateMutability: "nonpayable",
        type: "constructor",
    },
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
        inputs: [
            {
                internalType: "uint256",
                name: "_size",
                type: "uint256",
            },
            {
                internalType: "uint256",
                name: "_start",
                type: "uint256",
            },
            {
                internalType: "uint256",
                name: "_end",
                type: "uint256",
            },
        ],
        name: "InvalidCodeAtRange",
        type: "error",
    },
    {
        inputs: [],
        name: "TargetAlreadyExists",
        type: "error",
    },
    {
        anonymous: false,
        inputs: [
            {
                indexed: false,
                internalType: "uint256",
                name: "index",
                type: "uint256",
            },
        ],
        name: "AddedConfiguration",
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
        inputs: [],
        name: "MAX_NUM_CONFIGURATIONS",
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
                components: [
                    {
                        internalType: "uint8",
                        name: "width",
                        type: "uint8",
                    },
                    {
                        internalType: "uint8",
                        name: "height",
                        type: "uint8",
                    },
                    {
                        internalType: "bytes",
                        name: "colors",
                        type: "bytes",
                    },
                ],
                internalType: "struct ConfiguredGifImageRenderer.Configuration",
                name: "config",
                type: "tuple",
            },
        ],
        name: "addConfiguration",
        outputs: [
            {
                internalType: "uint256",
                name: "",
                type: "uint256",
            },
        ],
        stateMutability: "nonpayable",
        type: "function",
    },
    {
        inputs: [],
        name: "additionalMetadataURI",
        outputs: [
            {
                internalType: "string",
                name: "",
                type: "string",
            },
        ],
        stateMutability: "pure",
        type: "function",
    },
    {
        inputs: [
            {
                components: [
                    {
                        internalType: "uint8",
                        name: "width",
                        type: "uint8",
                    },
                    {
                        internalType: "uint8",
                        name: "height",
                        type: "uint8",
                    },
                    {
                        internalType: "bytes",
                        name: "colors",
                        type: "bytes",
                    },
                ],
                internalType: "struct ConfiguredGifImageRenderer.Configuration[]",
                name: "configs",
                type: "tuple[]",
            },
        ],
        name: "batchAddConfiguration",
        outputs: [
            {
                internalType: "uint256",
                name: "",
                type: "uint256",
            },
        ],
        stateMutability: "nonpayable",
        type: "function",
    },
    {
        inputs: [
            {
                internalType: "uint256",
                name: "index",
                type: "uint256",
            },
        ],
        name: "getConfiguration",
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
        inputs: [],
        name: "maxConfigurationIndex",
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
        stateMutability: "pure",
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
        inputs: [],
        name: "propsSize",
        outputs: [
            {
                internalType: "uint256",
                name: "",
                type: "uint256",
            },
        ],
        stateMutability: "pure",
        type: "function",
    },
    {
        inputs: [
            {
                internalType: "bytes",
                name: "props",
                type: "bytes",
            },
        ],
        name: "render",
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
        inputs: [
            {
                internalType: "bytes",
                name: "props",
                type: "bytes",
            },
        ],
        name: "renderRaw",
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
        inputs: [],
        name: "renderType",
        outputs: [
            {
                internalType: "string",
                name: "",
                type: "string",
            },
        ],
        stateMutability: "pure",
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
const _bytecode = "0x608060405260016002553480156200001657600080fd5b50604051620025273803806200252783398181016040528101906200003c919062000187565b6200005c62000050620000a460201b60201c565b620000ac60201b60201c565b80600160006101000a81548173ffffffffffffffffffffffffffffffffffffffff021916908373ffffffffffffffffffffffffffffffffffffffff1602179055505062000201565b600033905090565b60008060009054906101000a900473ffffffffffffffffffffffffffffffffffffffff169050816000806101000a81548173ffffffffffffffffffffffffffffffffffffffff021916908373ffffffffffffffffffffffffffffffffffffffff1602179055508173ffffffffffffffffffffffffffffffffffffffff168173ffffffffffffffffffffffffffffffffffffffff167f8be0079c531659141344cd1fd0a4f28419497f9722a3daafe3b4186f6b6457e060405160405180910390a35050565b6000815190506200018181620001e7565b92915050565b6000602082840312156200019a57600080fd5b6000620001aa8482850162000170565b91505092915050565b6000620001c082620001c7565b9050919050565b600073ffffffffffffffffffffffffffffffffffffffff82169050919050565b620001f281620001b3565b8114620001fe57600080fd5b50565b61231680620002116000396000f3fe608060405234801561001057600080fd5b50600436106100f35760003560e01c806371a835ff1161009757806392348b221161006657806392348b2214610276578063c431d8e014610294578063f2fde38b146102c4578063ff9e06c7146102e0576100f3565b806371a835ff146101ec57806381612ceb1461020a57806382863b5d146102285780638da5cb5b14610258576100f3565b806306fdde03116100d357806306fdde0314610164578063316df61e1461018257806343c5820c146101b2578063715018a6146101e2576100f3565b8062a85d69146100f8578062e061651461011657806301ffc9a714610134575b600080fd5b610100610310565b60405161010d9190611ba7565b60405180910390f35b61011e610338565b60405161012b9190611ba7565b60405180910390f35b61014e600480360381019061014991906114c9565b61033e565b60405161015b9190611a7f565b60405180910390f35b61016c6103b8565b6040516101799190611ae5565b60405180910390f35b61019c600480360381019061019791906114f2565b6103f5565b6040516101a99190611ae5565b60405180910390f35b6101cc60048036038101906101c791906114f2565b610545565b6040516101d99190611ac3565b60405180910390f35b6101ea610695565b005b6101f46106a9565b6040516102019190611ba7565b60405180910390f35b6102126106b1565b60405161021f9190611ae5565b60405180910390f35b610242600480360381019061023d91906115b9565b6106ee565b60405161024f9190611ba7565b60405180910390f35b610260610839565b60405161026d9190611a64565b60405180910390f35b61027e610848565b60405161028b9190611ae5565b60405180910390f35b6102ae60048036038101906102a991906115fa565b610868565b6040516102bb9190611ac3565b60405180910390f35b6102de60048036038101906102d9919061145f565b61087d565b005b6102fa60048036038101906102f59190611488565b610901565b6040516103079190611ba7565b60405180910390f35b60007fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff905090565b60025481565b60007fea0d9bea000000000000000000000000000000000000000000000000000000007bffffffffffffffffffffffffffffffffffffffffffffffffffffffff1916827bffffffffffffffffffffffffffffffffffffffffffffffffffffffff191614806103b157506103b082610ab4565b5b9050919050565b60606040518060400160405280601b81526020017f436f6e666967757265642053696e676c65204672616d65204769660000000000815250905090565b6060600160009054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1663316df61e61049561048786868080601f016020809104026020016040519081016040528093929190818152602001838380828437600081840152601f19601f820116905080830192505050505050506000610b1e565b63ffffffff1660001b610b85565b858560049088889050926104ab93929190611cfa565b6040516020016104bd9392919061191b565b6040516020818303038152906040526040518263ffffffff1660e01b81526004016104e89190611ac3565b60006040518083038186803b15801561050057600080fd5b505afa158015610514573d6000803e3d6000fd5b505050506040513d6000823e3d601f19601f8201168201806040525081019061053d9190611578565b905092915050565b6060600160009054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff166343c5820c6105e56105d786868080601f016020809104026020016040519081016040528093929190818152602001838380828437600081840152601f19601f820116905080830192505050505050506000610b1e565b63ffffffff1660001b610b85565b858560049088889050926105fb93929190611cfa565b60405160200161060d9392919061191b565b6040516020818303038152906040526040518263ffffffff1660e01b81526004016106389190611ac3565b60006040518083038186803b15801561065057600080fd5b505afa158015610664573d6000803e3d6000fd5b505050506040513d6000823e3d601f19601f8201168201806040525081019061068d9190611537565b905092915050565b61069d610bca565b6106a76000610c48565b565b63ffffffff81565b60606040518060400160405280600581526020017f696d616765000000000000000000000000000000000000000000000000000000815250905090565b60008060038360400151516107039190611f5d565b14610743576040517f08c379a000000000000000000000000000000000000000000000000000000000815260040161073a90611b27565b60405180910390fd5b61079460025460001b8360000151846020015160038660400151516107689190611d83565b86604001516040516020016107809493929190611a1a565b604051602081830303815290604052610d0c565b507f12ace6f0b54dc6c4abfb9aad10026ee778ec35756eaf7fe7ecd7afa44e973f356002546040516107c69190611ba7565b60405180910390a1600260008154809291906107e190611ec2565b919050555063ffffffff600254111561082f576040517f08c379a000000000000000000000000000000000000000000000000000000000815260040161082690611b87565b60405180910390fd5b6002549050919050565b6000610843610d54565b905090565b606060405180608001604052806042815260200161229f60429139905090565b60606108768260001b610b85565b9050919050565b610885610bca565b600073ffffffffffffffffffffffffffffffffffffffff168173ffffffffffffffffffffffffffffffffffffffff1614156108f5576040517f08c379a00000000000000000000000000000000000000000000000000000000081526004016108ec90611b07565b60405180910390fd5b6108fe81610c48565b50565b600080600090505b8251811015610aa957600083828151811061094d577f4e487b7100000000000000000000000000000000000000000000000000000000600052603260045260246000fd5b602002602001015190506000600382604001515161096b9190611f5d565b146109ab576040517f08c379a00000000000000000000000000000000000000000000000000000000081526004016109a290611b27565b60405180910390fd5b6109fc60025460001b8260000151836020015160038560400151516109d09190611d83565b85604001516040516020016109e89493929190611a1a565b604051602081830303815290604052610d0c565b507f12ace6f0b54dc6c4abfb9aad10026ee778ec35756eaf7fe7ecd7afa44e973f35600254604051610a2e9190611ba7565b60405180910390a160026000815480929190610a4990611ec2565b919050555063ffffffff6002541115610a97576040517f08c379a0000000000000000000000000000000000000000000000000000000008152600401610a8e90611b87565b60405180910390fd5b5080610aa290611ec2565b9050610909565b506002549050919050565b60007f01ffc9a7000000000000000000000000000000000000000000000000000000007bffffffffffffffffffffffffffffffffffffffffffffffffffffffff1916827bffffffffffffffffffffffffffffffffffffffffffffffffffffffff1916149050919050565b6000600482610b2d9190611d2d565b83511015610b70576040517f08c379a0000000000000000000000000000000000000000000000000000000008152600401610b6790611b67565b60405180910390fd5b60008260048501015190508091505092915050565b6060610bc3610b9b610b9684610d7d565b610dd2565b60017fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff610e5a565b9050919050565b610bd2610f40565b73ffffffffffffffffffffffffffffffffffffffff16610bf0610839565b73ffffffffffffffffffffffffffffffffffffffff1614610c46576040517f08c379a0000000000000000000000000000000000000000000000000000000008152600401610c3d90611b47565b60405180910390fd5b565b60008060009054906101000a900473ffffffffffffffffffffffffffffffffffffffff169050816000806101000a81548173ffffffffffffffffffffffffffffffffffffffff021916908373ffffffffffffffffffffffffffffffffffffffff1602179055508173ffffffffffffffffffffffffffffffffffffffff168173ffffffffffffffffffffffffffffffffffffffff167f8be0079c531659141344cd1fd0a4f28419497f9722a3daafe3b4186f6b6457e060405160405180910390a35050565b600080610d3783604051602001610d2391906119f8565b604051602081830303815290604052610f48565b9050610d4b610d4585610d7d565b82610f74565b91505092915050565b60008060009054906101000a900473ffffffffffffffffffffffffffffffffffffffff16905090565b60007fd351a9253491dfef66f53115e9e3afda3b5fdef08a1de6937da91188ec553be560001b82604051602001610db5929190611a9a565b604051602081830303815290604052805190602001209050919050565b60008030837f21c35dbe1b344a2488cf3321d6ce542f8e9f305544ff09e4993a62319a497c1f60001b604051602001610e0d939291906119b0565b6040516020818303038152906040528051906020012060001c905080604051602001610e39919061197f565b6040516020818303038152906040528051906020012060001c915050919050565b60606000610e6785610f8a565b90506000811415610e8a5760405180602001604052806000815250915050610f39565b80841115610eaa5760405180602001604052806000815250915050610f39565b83831015610ef3578084846040517f2c4a89fa000000000000000000000000000000000000000000000000000000008152600401610eea93929190611bc2565b60405180910390fd5b60008484039050600085830390506000828210610f105782610f12565b815b90506040519450601f19601f60208301011685016040528085528087602087018a3c505050505b9392505050565b600033905090565b6060815182604051602001610f5e929190611941565b6040516020818303038152906040529050919050565b6000610f8283836000610f95565b905092915050565b6000813b9050919050565b6000806040518060400160405280601081526020017f67363d3d37363d34f03d5260086018f3000000000000000000000000000000008152509050610fd985610dd2565b91506000610fe683611156565b1461101d576040517fcd43efa100000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b6000858251602084016000f59050600073ffffffffffffffffffffffffffffffffffffffff168173ffffffffffffffffffffffffffffffffffffffff161415611092576040517fbbd2fe8700000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b60008173ffffffffffffffffffffffffffffffffffffffff1685876040516110ba9190611904565b60006040518083038185875af1925050503d80600081146110f7576040519150601f19603f3d011682016040523d82523d6000602084013e6110fc565b606091505b505090508015806111155750600061111385611156565b145b1561114c576040517f53de54b900000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b5050509392505050565b6000813b9050919050565b600061117461116f84611c1e565b611bf9565b9050808382526020820190508285602086028201111561119357600080fd5b60005b858110156111dd57813567ffffffffffffffff8111156111b557600080fd5b8086016111c289826113bd565b85526020850194506020840193505050600181019050611196565b5050509392505050565b60006111fa6111f584611c4a565b611bf9565b90508281526020810184848401111561121257600080fd5b61121d848285611e4f565b509392505050565b600061123861123384611c4a565b611bf9565b90508281526020810184848401111561125057600080fd5b61125b848285611e5e565b509392505050565b600061127661127184611c7b565b611bf9565b90508281526020810184848401111561128e57600080fd5b611299848285611e5e565b509392505050565b6000813590506112b081612242565b92915050565b600082601f8301126112c757600080fd5b81356112d7848260208601611161565b91505092915050565b6000813590506112ef81612259565b92915050565b60008083601f84011261130757600080fd5b8235905067ffffffffffffffff81111561132057600080fd5b60208301915083600182028301111561133857600080fd5b9250929050565b600082601f83011261135057600080fd5b81356113608482602086016111e7565b91505092915050565b600082601f83011261137a57600080fd5b815161138a848260208601611225565b91505092915050565b600082601f8301126113a457600080fd5b81516113b4848260208601611263565b91505092915050565b6000606082840312156113cf57600080fd5b6113d96060611bf9565b905060006113e98482850161144a565b60008301525060206113fd8482850161144a565b602083015250604082013567ffffffffffffffff81111561141d57600080fd5b6114298482850161133f565b60408301525092915050565b60008135905061144481612270565b92915050565b60008135905061145981612287565b92915050565b60006020828403121561147157600080fd5b600061147f848285016112a1565b91505092915050565b60006020828403121561149a57600080fd5b600082013567ffffffffffffffff8111156114b457600080fd5b6114c0848285016112b6565b91505092915050565b6000602082840312156114db57600080fd5b60006114e9848285016112e0565b91505092915050565b6000806020838503121561150557600080fd5b600083013567ffffffffffffffff81111561151f57600080fd5b61152b858286016112f5565b92509250509250929050565b60006020828403121561154957600080fd5b600082015167ffffffffffffffff81111561156357600080fd5b61156f84828501611369565b91505092915050565b60006020828403121561158a57600080fd5b600082015167ffffffffffffffff8111156115a457600080fd5b6115b084828501611393565b91505092915050565b6000602082840312156115cb57600080fd5b600082013567ffffffffffffffff8111156115e557600080fd5b6115f1848285016113bd565b91505092915050565b60006020828403121561160c57600080fd5b600061161a84828501611435565b91505092915050565b61162c81611db4565b82525050565b61164361163e82611db4565b611f0b565b82525050565b61165281611dc6565b82525050565b61166181611dd2565b82525050565b61167861167382611dd2565b611f1d565b82525050565b600061168a8385611cd3565b9350611697838584611e4f565b82840190509392505050565b60006116ae82611cac565b6116b88185611cc2565b93506116c8818560208601611e5e565b6116d18161201b565b840191505092915050565b60006116e782611cac565b6116f18185611cd3565b9350611701818560208601611e5e565b80840191505092915050565b600061171882611cb7565b6117228185611cde565b9350611732818560208601611e5e565b61173b8161201b565b840191505092915050565b6000611753600183611cef565b915061175e82612053565b600182019050919050565b6000611776602683611cde565b91506117818261207c565b604082019050919050565b6000611799600283611cef565b91506117a4826120cb565b600282019050919050565b60006117bc600183611cef565b91506117c7826120f4565b600182019050919050565b60006117df602083611cde565b91506117ea8261211d565b602082019050919050565b6000611802600183611cef565b915061180d82612146565b600182019050919050565b6000611825602083611cde565b91506118308261216f565b602082019050919050565b6000611848600183611cef565b915061185382612198565b600182019050919050565b600061186b601483611cde565b9150611876826121a1565b602082019050919050565b600061188e600983611cef565b9150611899826121ca565b600982019050919050565b60006118b1602583611cde565b91506118bc826121f3565b604082019050919050565b6118d081611e28565b82525050565b6118e76118e282611e32565b611f39565b82525050565b6118fe6118f982611e42565b611f4b565b82525050565b600061191082846116dc565b915081905092915050565b600061192782866116dc565b915061193482848661167e565b9150819050949350505050565b600061194c82611746565b915061195882856118d6565b60048201915061196782611881565b915061197382846116dc565b91508190509392505050565b600061198a8261178c565b91506119968284611632565b6014820191506119a5826117af565b915081905092915050565b60006119bb826117f5565b91506119c78286611632565b6014820191506119d78285611667565b6020820191506119e78284611667565b602082019150819050949350505050565b6000611a038261183b565b9150611a0f82846116dc565b915081905092915050565b6000611a2682876118ed565b600182019150611a3682866118ed565b600182019150611a4682856118ed565b600182019150611a5682846116dc565b915081905095945050505050565b6000602082019050611a796000830184611623565b92915050565b6000602082019050611a946000830184611649565b92915050565b6000604082019050611aaf6000830185611658565b611abc6020830184611658565b9392505050565b60006020820190508181036000830152611add81846116a3565b905092915050565b60006020820190508181036000830152611aff818461170d565b905092915050565b60006020820190508181036000830152611b2081611769565b9050919050565b60006020820190508181036000830152611b40816117d2565b9050919050565b60006020820190508181036000830152611b6081611818565b9050919050565b60006020820190508181036000830152611b808161185e565b9050919050565b60006020820190508181036000830152611ba0816118a4565b9050919050565b6000602082019050611bbc60008301846118c7565b92915050565b6000606082019050611bd760008301866118c7565b611be460208301856118c7565b611bf160408301846118c7565b949350505050565b6000611c03611c14565b9050611c0f8282611e91565b919050565b6000604051905090565b600067ffffffffffffffff821115611c3957611c38611fec565b5b602082029050602081019050919050565b600067ffffffffffffffff821115611c6557611c64611fec565b5b611c6e8261201b565b9050602081019050919050565b600067ffffffffffffffff821115611c9657611c95611fec565b5b611c9f8261201b565b9050602081019050919050565b600081519050919050565b600081519050919050565b600082825260208201905092915050565b600081905092915050565b600082825260208201905092915050565b600081905092915050565b60008085851115611d0a57600080fd5b83861115611d1757600080fd5b6001850283019150848603905094509492505050565b6000611d3882611e28565b9150611d4383611e28565b9250827fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff03821115611d7857611d77611f8e565b5b828201905092915050565b6000611d8e82611e28565b9150611d9983611e28565b925082611da957611da8611fbd565b5b828204905092915050565b6000611dbf82611e08565b9050919050565b60008115159050919050565b6000819050919050565b60007fffffffff0000000000000000000000000000000000000000000000000000000082169050919050565b600073ffffffffffffffffffffffffffffffffffffffff82169050919050565b6000819050919050565b600063ffffffff82169050919050565b600060ff82169050919050565b82818337600083830152505050565b60005b83811015611e7c578082015181840152602081019050611e61565b83811115611e8b576000848401525b50505050565b611e9a8261201b565b810181811067ffffffffffffffff82111715611eb957611eb8611fec565b5b80604052505050565b6000611ecd82611e28565b91507fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff821415611f0057611eff611f8e565b5b600182019050919050565b6000611f1682611f27565b9050919050565b6000819050919050565b6000611f3282612046565b9050919050565b6000611f448261202c565b9050919050565b6000611f5682612039565b9050919050565b6000611f6882611e28565b9150611f7383611e28565b925082611f8357611f82611fbd565b5b828206905092915050565b7f4e487b7100000000000000000000000000000000000000000000000000000000600052601160045260246000fd5b7f4e487b7100000000000000000000000000000000000000000000000000000000600052601260045260246000fd5b7f4e487b7100000000000000000000000000000000000000000000000000000000600052604160045260246000fd5b6000601f19601f8301169050919050565b60008160e01b9050919050565b60008160f81b9050919050565b60008160601b9050919050565b7f6300000000000000000000000000000000000000000000000000000000000000600082015250565b7f4f776e61626c653a206e6577206f776e657220697320746865207a65726f206160008201527f6464726573730000000000000000000000000000000000000000000000000000602082015250565b7fd694000000000000000000000000000000000000000000000000000000000000600082015250565b7f0100000000000000000000000000000000000000000000000000000000000000600082015250565b7f636f6c6f7273206d75737420636f6d6520696e20722c672c62207475706c6573600082015250565b7fff00000000000000000000000000000000000000000000000000000000000000600082015250565b7f4f776e61626c653a2063616c6c6572206973206e6f7420746865206f776e6572600082015250565b60008082015250565b7f746f55696e7433325f6f75744f66426f756e6473000000000000000000000000600082015250565b7f80600e6000396000f30000000000000000000000000000000000000000000000600082015250565b7f4d6178206e756d626572206f6620636f6e66696775726174696f6e7320616c6c60008201527f6f7765642e000000000000000000000000000000000000000000000000000000602082015250565b61224b81611db4565b811461225657600080fd5b50565b61226281611ddc565b811461226d57600080fd5b50565b61227981611e28565b811461228457600080fd5b50565b61229081611e42565b811461229b57600080fd5b5056fe697066733a2f2f6261666b72656968637a36377976766c6f74626e3478337033357764627064653237726c6469686c7a6f7167326b6c626d653775366c6568786e61a26469706673582212205d6520b0807e17ba968e84ca356397ee7c9a73492e56f20d7386e4e55d82810264736f6c63430008040033";
const isSuperArgs = (xs) => xs.length > 1;
class ConfiguredGifImageRenderer__factory extends ethers_1.ContractFactory {
    constructor(...args) {
        if (isSuperArgs(args)) {
            super(...args);
        }
        else {
            super(_abi, _bytecode, args[0]);
        }
    }
    deploy(_gifImageRenderer, overrides) {
        return super.deploy(_gifImageRenderer, overrides || {});
    }
    getDeployTransaction(_gifImageRenderer, overrides) {
        return super.getDeployTransaction(_gifImageRenderer, overrides || {});
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
exports.ConfiguredGifImageRenderer__factory = ConfiguredGifImageRenderer__factory;
ConfiguredGifImageRenderer__factory.bytecode = _bytecode;
ConfiguredGifImageRenderer__factory.abi = _abi;
//# sourceMappingURL=ConfiguredGifImageRenderer__factory.js.map