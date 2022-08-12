"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.MonoPixelGrid8Renderer__factory = void 0;
/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */
const ethers_1 = require("ethers");
const _abi = [
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
                internalType: "bytes",
                name: "props",
                type: "bytes",
            },
        ],
        name: "attributes",
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
        inputs: [],
        name: "renderAttributeKey",
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
const _bytecode = "0x608060405260405180606001604052806021815260200162002b6860219139600190805190602001906200003592919062001061565b506040518060400160405280600481526020017f22202f3e00000000000000000000000000000000000000000000000000000000815250600290805190602001906200008392919062001061565b506040518061080001604052806040518060400160405280600b81526020017f793d22302220783d22302200000000000000000000000000000000000000000081525081526020016040518060400160405280600b81526020017f793d22302220783d22312200000000000000000000000000000000000000000081525081526020016040518060400160405280600b81526020017f793d22302220783d22322200000000000000000000000000000000000000000081525081526020016040518060400160405280600b81526020017f793d22302220783d22332200000000000000000000000000000000000000000081525081526020016040518060400160405280600b81526020017f793d22302220783d22342200000000000000000000000000000000000000000081525081526020016040518060400160405280600b81526020017f793d22302220783d22352200000000000000000000000000000000000000000081525081526020016040518060400160405280600b81526020017f793d22302220783d22362200000000000000000000000000000000000000000081525081526020016040518060400160405280600b81526020017f793d22302220783d22372200000000000000000000000000000000000000000081525081526020016040518060400160405280600b81526020017f793d22312220783d22302200000000000000000000000000000000000000000081525081526020016040518060400160405280600b81526020017f793d22312220783d22312200000000000000000000000000000000000000000081525081526020016040518060400160405280600b81526020017f793d22312220783d22322200000000000000000000000000000000000000000081525081526020016040518060400160405280600b81526020017f793d22312220783d22332200000000000000000000000000000000000000000081525081526020016040518060400160405280600b81526020017f793d22312220783d22342200000000000000000000000000000000000000000081525081526020016040518060400160405280600b81526020017f793d22312220783d22352200000000000000000000000000000000000000000081525081526020016040518060400160405280600b81526020017f793d22312220783d22362200000000000000000000000000000000000000000081525081526020016040518060400160405280600b81526020017f793d22312220783d22372200000000000000000000000000000000000000000081525081526020016040518060400160405280600b81526020017f793d22322220783d22302200000000000000000000000000000000000000000081525081526020016040518060400160405280600b81526020017f793d22322220783d22312200000000000000000000000000000000000000000081525081526020016040518060400160405280600b81526020017f793d22322220783d22322200000000000000000000000000000000000000000081525081526020016040518060400160405280600b81526020017f793d22322220783d22332200000000000000000000000000000000000000000081525081526020016040518060400160405280600b81526020017f793d22322220783d22342200000000000000000000000000000000000000000081525081526020016040518060400160405280600b81526020017f793d22322220783d22352200000000000000000000000000000000000000000081525081526020016040518060400160405280600b81526020017f793d22322220783d22362200000000000000000000000000000000000000000081525081526020016040518060400160405280600b81526020017f793d22322220783d22372200000000000000000000000000000000000000000081525081526020016040518060400160405280600b81526020017f793d22332220783d22302200000000000000000000000000000000000000000081525081526020016040518060400160405280600b81526020017f793d22332220783d22312200000000000000000000000000000000000000000081525081526020016040518060400160405280600b81526020017f793d22332220783d22322200000000000000000000000000000000000000000081525081526020016040518060400160405280600b81526020017f793d22332220783d22332200000000000000000000000000000000000000000081525081526020016040518060400160405280600b81526020017f793d22332220783d22342200000000000000000000000000000000000000000081525081526020016040518060400160405280600b81526020017f793d22332220783d22352200000000000000000000000000000000000000000081525081526020016040518060400160405280600b81526020017f793d22332220783d22362200000000000000000000000000000000000000000081525081526020016040518060400160405280600b81526020017f793d22332220783d22372200000000000000000000000000000000000000000081525081526020016040518060400160405280600b81526020017f793d22342220783d22302200000000000000000000000000000000000000000081525081526020016040518060400160405280600b81526020017f793d22342220783d22312200000000000000000000000000000000000000000081525081526020016040518060400160405280600b81526020017f793d22342220783d22322200000000000000000000000000000000000000000081525081526020016040518060400160405280600b81526020017f793d22342220783d22332200000000000000000000000000000000000000000081525081526020016040518060400160405280600b81526020017f793d22342220783d22342200000000000000000000000000000000000000000081525081526020016040518060400160405280600b81526020017f793d22342220783d22352200000000000000000000000000000000000000000081525081526020016040518060400160405280600b81526020017f793d22342220783d22362200000000000000000000000000000000000000000081525081526020016040518060400160405280600b81526020017f793d22342220783d22372200000000000000000000000000000000000000000081525081526020016040518060400160405280600b81526020017f793d22352220783d22302200000000000000000000000000000000000000000081525081526020016040518060400160405280600b81526020017f793d22352220783d22312200000000000000000000000000000000000000000081525081526020016040518060400160405280600b81526020017f793d22352220783d22322200000000000000000000000000000000000000000081525081526020016040518060400160405280600b81526020017f793d22352220783d22332200000000000000000000000000000000000000000081525081526020016040518060400160405280600b81526020017f793d22352220783d22342200000000000000000000000000000000000000000081525081526020016040518060400160405280600b81526020017f793d22352220783d22352200000000000000000000000000000000000000000081525081526020016040518060400160405280600b81526020017f793d22352220783d22362200000000000000000000000000000000000000000081525081526020016040518060400160405280600b81526020017f793d22352220783d22372200000000000000000000000000000000000000000081525081526020016040518060400160405280600b81526020017f793d22362220783d22302200000000000000000000000000000000000000000081525081526020016040518060400160405280600b81526020017f793d22362220783d22312200000000000000000000000000000000000000000081525081526020016040518060400160405280600b81526020017f793d22362220783d22322200000000000000000000000000000000000000000081525081526020016040518060400160405280600b81526020017f793d22362220783d22332200000000000000000000000000000000000000000081525081526020016040518060400160405280600b81526020017f793d22362220783d22342200000000000000000000000000000000000000000081525081526020016040518060400160405280600b81526020017f793d22362220783d22352200000000000000000000000000000000000000000081525081526020016040518060400160405280600b81526020017f793d22362220783d22362200000000000000000000000000000000000000000081525081526020016040518060400160405280600b81526020017f793d22362220783d22372200000000000000000000000000000000000000000081525081526020016040518060400160405280600b81526020017f793d22372220783d22302200000000000000000000000000000000000000000081525081526020016040518060400160405280600b81526020017f793d22372220783d22312200000000000000000000000000000000000000000081525081526020016040518060400160405280600b81526020017f793d22372220783d22322200000000000000000000000000000000000000000081525081526020016040518060400160405280600b81526020017f793d22372220783d22332200000000000000000000000000000000000000000081525081526020016040518060400160405280600b81526020017f793d22372220783d22342200000000000000000000000000000000000000000081525081526020016040518060400160405280600b81526020017f793d22372220783d22352200000000000000000000000000000000000000000081525081526020016040518060400160405280600b81526020017f793d22372220783d22362200000000000000000000000000000000000000000081525081526020016040518060400160405280600b81526020017f793d22372220783d223722000000000000000000000000000000000000000000815250815250600390604062000f60929190620010f2565b5034801562000f6e57600080fd5b5062000f8f62000f8362000f9560201b60201c565b62000f9d60201b60201c565b6200123e565b600033905090565b60008060009054906101000a900473ffffffffffffffffffffffffffffffffffffffff169050816000806101000a81548173ffffffffffffffffffffffffffffffffffffffff021916908373ffffffffffffffffffffffffffffffffffffffff1602179055508173ffffffffffffffffffffffffffffffffffffffff168173ffffffffffffffffffffffffffffffffffffffff167f8be0079c531659141344cd1fd0a4f28419497f9722a3daafe3b4186f6b6457e060405160405180910390a35050565b8280546200106f90620011d9565b90600052602060002090601f016020900481019282620010935760008555620010df565b82601f10620010ae57805160ff1916838001178555620010df565b82800160010185558215620010df579182015b82811115620010de578251825591602001919060010190620010c1565b5b509050620010ee91906200114c565b5090565b826040810192821562001139579160200282015b82811115620011385782518290805190602001906200112792919062001061565b509160200191906001019062001106565b5b5090506200114891906200116b565b5090565b5b80821115620011675760008160009055506001016200114d565b5090565b5b808211156200118f576000818162001185919062001193565b506001016200116c565b5090565b508054620011a190620011d9565b6000825580601f10620011b55750620011d6565b601f016020900490600052602060002090810190620011d591906200114c565b5b50565b60006002820490506001821680620011f257607f821691505b602082108114156200120957620012086200120f565b5b50919050565b7f4e487b7100000000000000000000000000000000000000000000000000000000600052602260045260246000fd5b61191a806200124e6000396000f3fe608060405234801561001057600080fd5b50600436106100a85760003560e01c8063715018a611610071578063715018a6146101795780638da5cb5b1461018357806392348b22146101a1578063b0a2f640146101bf578063effde6db146101ef578063f2fde38b1461020d576100a8565b8062a85d69146100ad57806301ffc9a7146100cb57806306fdde03146100fb578063316df61e1461011957806343c5820c14610149575b600080fd5b6100b5610229565b6040516100c291906111f9565b60405180910390f35b6100e560048036038101906100e09190610d11565b610232565b6040516100f29190611123565b60405180910390f35b6101036102ac565b6040516101109190611197565b60405180910390f35b610133600480360381019061012e9190610d3a565b6102e9565b6040516101409190611197565b60405180910390f35b610163600480360381019061015e9190610d3a565b610324565b6040516101709190611175565b60405180910390f35b61018161053c565b005b61018b610550565b6040516101989190611108565b60405180910390f35b6101a961055f565b6040516101b69190611197565b60405180910390f35b6101d960048036038101906101d49190610d3a565b61057f565b6040516101e69190611197565b60405180910390f35b6101f7610637565b6040516102049190611197565b60405180910390f35b61022760048036038101906102229190610ce8565b610674565b005b60006040905090565b60007f3433a79a000000000000000000000000000000000000000000000000000000007bffffffffffffffffffffffffffffffffffffffffffffffffffffffff1916827bffffffffffffffffffffffffffffffffffffffffffffffffffffffff191614806102a557506102a4826106f8565b5b9050919050565b60606040518060400160405280601181526020017f4d6f6e6f20506978656c20477269642038000000000000000000000000000000815250905090565b60606102fd6102f88484610324565b610762565b60405160200161030d91906110e6565b604051602081830303815290604052905092915050565b6060600060405180602001604052806000815250905060005b60408110156105125781600160038360408110610383577f4e487b7100000000000000000000000000000000000000000000000000000000600052603260045260246000fd5b0173__$8d2f2c422d7739f572e222809bbf6b68c3$__635f47386a8989878181106103d7577f4e487b7100000000000000000000000000000000000000000000000000000000600052603260045260246000fd5b9050013560f81c60f81b8a8a8881811061041a577f4e487b7100000000000000000000000000000000000000000000000000000000600052603260045260246000fd5b9050013560f81c60f81b8b8b8981811061045d577f4e487b7100000000000000000000000000000000000000000000000000000000600052603260045260246000fd5b9050013560f81c60f81b6040518463ffffffff1660e01b81526004016104859392919061113e565b60006040518083038186803b15801561049d57600080fd5b505af41580156104b1573d6000803e3d6000fd5b505050506040513d6000823e3d601f19601f820116820180604052508101906104da9190610d7f565b60026040516020016104f0959493929190611036565b60405160208183030381529060405291508061050b9061150d565b905061033d565b5080604051602001610524919061108c565b60405160208183030381529060405291505092915050565b6105446108ec565b61054e600061096a565b565b600061055a610a2e565b905090565b606060405180608001604052806042815260200161186360429139905090565b606060005b600060f81b8484838181106105c2577f4e487b7100000000000000000000000000000000000000000000000000000000600052603260045260246000fd5b9050013560f81c60f81b7effffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff1916146106065780806105fe9061150d565b915050610584565b61060f81610a57565b60405160200161061f91906110b9565b60405160208183030381529060405291505092915050565b60606040518060400160405280600581526020017f696d616765000000000000000000000000000000000000000000000000000000815250905090565b61067c6108ec565b600073ffffffffffffffffffffffffffffffffffffffff168173ffffffffffffffffffffffffffffffffffffffff1614156106ec576040517f08c379a00000000000000000000000000000000000000000000000000000000081526004016106e3906111b9565b60405180910390fd5b6106f58161096a565b50565b60007f01ffc9a7000000000000000000000000000000000000000000000000000000007bffffffffffffffffffffffffffffffffffffffffffffffffffffffff1916827bffffffffffffffffffffffffffffffffffffffffffffffffffffffff1916149050919050565b6060600082511415610785576040518060200160405280600081525090506108e7565b60006040518060600160405280604081526020016118a560409139905060006003600285516107b491906112c2565b6107be9190611318565b60046107ca9190611349565b67ffffffffffffffff811115610809577f4e487b7100000000000000000000000000000000000000000000000000000000600052604160045260246000fd5b6040519080825280601f01601f19166020018201604052801561083b5781602001600182028036833780820191505090505b509050600182016020820185865187015b808210156108a7576003820191508151603f8160121c168501518453600184019350603f81600c1c168501518453600184019350603f8160061c168501518453600184019350603f811685015184536001840193505061084c565b50506003865106600181146108c357600281146108d6576108de565b603d6001830353603d60028303536108de565b603d60018303535b50505080925050505b919050565b6108f4610c04565b73ffffffffffffffffffffffffffffffffffffffff16610912610550565b73ffffffffffffffffffffffffffffffffffffffff1614610968576040517f08c379a000000000000000000000000000000000000000000000000000000000815260040161095f906111d9565b60405180910390fd5b565b60008060009054906101000a900473ffffffffffffffffffffffffffffffffffffffff169050816000806101000a81548173ffffffffffffffffffffffffffffffffffffffff021916908373ffffffffffffffffffffffffffffffffffffffff1602179055508173ffffffffffffffffffffffffffffffffffffffff168173ffffffffffffffffffffffffffffffffffffffff167f8be0079c531659141344cd1fd0a4f28419497f9722a3daafe3b4186f6b6457e060405160405180910390a35050565b60008060009054906101000a900473ffffffffffffffffffffffffffffffffffffffff16905090565b60606000821415610a9f576040518060400160405280600181526020017f30000000000000000000000000000000000000000000000000000000000000008152509050610bff565b600082905060005b60008214610ad1578080610aba9061150d565b915050600a82610aca9190611318565b9150610aa7565b60008167ffffffffffffffff811115610b13577f4e487b7100000000000000000000000000000000000000000000000000000000600052604160045260246000fd5b6040519080825280601f01601f191660200182016040528015610b455781602001600182028036833780820191505090505b5090505b60008514610bf857600182610b5e91906113a3565b9150600a85610b6d9190611556565b6030610b7991906112c2565b60f81b818381518110610bb5577f4e487b7100000000000000000000000000000000000000000000000000000000600052603260045260246000fd5b60200101907effffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff1916908160001a905350600a85610bf19190611318565b9450610b49565b8093505050505b919050565b600033905090565b6000610c1f610c1a84611239565b611214565b905082815260208101848484011115610c3757600080fd5b610c42848285611477565b509392505050565b600081359050610c5981611834565b92915050565b600081359050610c6e8161184b565b92915050565b60008083601f840112610c8657600080fd5b8235905067ffffffffffffffff811115610c9f57600080fd5b602083019150836001820283011115610cb757600080fd5b9250929050565b600082601f830112610ccf57600080fd5b8151610cdf848260208601610c0c565b91505092915050565b600060208284031215610cfa57600080fd5b6000610d0884828501610c4a565b91505092915050565b600060208284031215610d2357600080fd5b6000610d3184828501610c5f565b91505092915050565b60008060208385031215610d4d57600080fd5b600083013567ffffffffffffffff811115610d6757600080fd5b610d7385828601610c74565b92509250509250929050565b600060208284031215610d9157600080fd5b600082015167ffffffffffffffff811115610dab57600080fd5b610db784828501610cbe565b91505092915050565b610dc9816113d7565b82525050565b610dd8816113e9565b82525050565b610de7816113f5565b82525050565b6000610df88261127f565b610e028185611295565b9350610e12818560208601611477565b610e1b81611643565b840191505092915050565b6000610e318261128a565b610e3b81856112a6565b9350610e4b818560208601611477565b610e5481611643565b840191505092915050565b6000610e6a8261128a565b610e7481856112b7565b9350610e84818560208601611477565b80840191505092915050565b60008154610e9d816114aa565b610ea781866112b7565b94506001821660008114610ec25760018114610ed357610f06565b60ff19831686528186019350610f06565b610edc8561126a565b60005b83811015610efe57815481890152600182019150602081019050610edf565b838801955050505b50505092915050565b6000610f1c6026836112a6565b9150610f2782611654565b604082019050919050565b6000610f3f6007836112b7565b9150610f4a826116a3565b600782019050919050565b6000610f626058836112b7565b9150610f6d826116cc565b605882019050919050565b6000610f856001836112b7565b9150610f9082611741565b600182019050919050565b6000610fa86020836112a6565b9150610fb38261176a565b602082019050919050565b6000610fcb6026836112b7565b9150610fd682611793565b602682019050919050565b6000610fee6006836112b7565b9150610ff9826117e2565b600682019050919050565b6000611011601a836112b7565b915061101c8261180b565b601a82019050919050565b6110308161146d565b82525050565b60006110428288610e5f565b915061104e8287610e90565b915061105a8286610e90565b915061106582610f32565b91506110718285610e5f565b915061107d8284610e90565b91508190509695505050505050565b600061109782610f55565b91506110a38284610e5f565b91506110ae82610fe1565b915081905092915050565b60006110c482610fbe565b91506110d08284610e5f565b91506110db82610f78565b915081905092915050565b60006110f182611004565b91506110fd8284610e5f565b915081905092915050565b600060208201905061111d6000830184610dc0565b92915050565b60006020820190506111386000830184610dcf565b92915050565b60006060820190506111536000830186610dde565b6111606020830185610dde565b61116d6040830184610dde565b949350505050565b6000602082019050818103600083015261118f8184610ded565b905092915050565b600060208201905081810360008301526111b18184610e26565b905092915050565b600060208201905081810360008301526111d281610f0f565b9050919050565b600060208201905081810360008301526111f281610f9b565b9050919050565b600060208201905061120e6000830184611027565b92915050565b600061121e61122f565b905061122a82826114dc565b919050565b6000604051905090565b600067ffffffffffffffff82111561125457611253611614565b5b61125d82611643565b9050602081019050919050565b60008190508160005260206000209050919050565b600081519050919050565b600081519050919050565b600082825260208201905092915050565b600082825260208201905092915050565b600081905092915050565b60006112cd8261146d565b91506112d88361146d565b9250827fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff0382111561130d5761130c611587565b5b828201905092915050565b60006113238261146d565b915061132e8361146d565b92508261133e5761133d6115b6565b5b828204905092915050565b60006113548261146d565b915061135f8361146d565b9250817fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff048311821515161561139857611397611587565b5b828202905092915050565b60006113ae8261146d565b91506113b98361146d565b9250828210156113cc576113cb611587565b5b828203905092915050565b60006113e28261144d565b9050919050565b60008115159050919050565b60007fff0000000000000000000000000000000000000000000000000000000000000082169050919050565b60007fffffffff0000000000000000000000000000000000000000000000000000000082169050919050565b600073ffffffffffffffffffffffffffffffffffffffff82169050919050565b6000819050919050565b60005b8381101561149557808201518184015260208101905061147a565b838111156114a4576000848401525b50505050565b600060028204905060018216806114c257607f821691505b602082108114156114d6576114d56115e5565b5b50919050565b6114e582611643565b810181811067ffffffffffffffff8211171561150457611503611614565b5b80604052505050565b60006115188261146d565b91507fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff82141561154b5761154a611587565b5b600182019050919050565b60006115618261146d565b915061156c8361146d565b92508261157c5761157b6115b6565b5b828206905092915050565b7f4e487b7100000000000000000000000000000000000000000000000000000000600052601160045260246000fd5b7f4e487b7100000000000000000000000000000000000000000000000000000000600052601260045260246000fd5b7f4e487b7100000000000000000000000000000000000000000000000000000000600052602260045260246000fd5b7f4e487b7100000000000000000000000000000000000000000000000000000000600052604160045260246000fd5b6000601f19601f8301169050919050565b7f4f776e61626c653a206e6577206f776e657220697320746865207a65726f206160008201527f6464726573730000000000000000000000000000000000000000000000000000602082015250565b7f2066696c6c3d2200000000000000000000000000000000000000000000000000600082015250565b7f3c73766720786d6c6e733d22687474703a2f2f7777772e77332e6f72672f323060008201527f30302f737667222077696474683d223822206865696768743d2238222073747960208201527f6c653d226261636b67726f756e643a23463146314631223e0000000000000000604082015250565b7f7d00000000000000000000000000000000000000000000000000000000000000600082015250565b7f4f776e61626c653a2063616c6c6572206973206e6f7420746865206f776e6572600082015250565b7f7b2274726169745f74797065223a202244617461204c656e677468222c20227660008201527f616c7565223a0000000000000000000000000000000000000000000000000000602082015250565b7f3c2f7376673e0000000000000000000000000000000000000000000000000000600082015250565b7f646174613a696d6167652f7376672b786d6c3b6261736536342c000000000000600082015250565b61183d816113d7565b811461184857600080fd5b50565b61185481611421565b811461185f57600080fd5b5056fe697066733a2f2f6261666b7265696736756479323534376c656e32793372786c7272767736666b6e69716461776d626f783664653661366b373773646271376c34714142434445464748494a4b4c4d4e4f505152535455565758595a6162636465666768696a6b6c6d6e6f707172737475767778797a303132333435363738392b2fa264697066735822122078c5bad2f9f30afc2b8fbbaaf7f9dfabdb41241c0d5fd7b751343fe539b4b77564736f6c634300080400333c726563742077696474683d22312e303522206865696768743d22312e30352220";
const isSuperArgs = (xs) => {
    return (typeof xs[0] === "string" ||
        Array.isArray(xs[0]) ||
        "_isInterface" in xs[0]);
};
class MonoPixelGrid8Renderer__factory extends ethers_1.ContractFactory {
    constructor(...args) {
        if (isSuperArgs(args)) {
            super(...args);
        }
        else {
            const [linkLibraryAddresses, signer] = args;
            super(_abi, MonoPixelGrid8Renderer__factory.linkBytecode(linkLibraryAddresses), signer);
        }
    }
    static linkBytecode(linkLibraryAddresses) {
        let linkedBytecode = _bytecode;
        linkedBytecode = linkedBytecode.replace(new RegExp("__\\$8d2f2c422d7739f572e222809bbf6b68c3\\$__", "g"), linkLibraryAddresses["contracts/libraries/SvgUtils.sol:SvgUtils"]
            .replace(/^0x/, "")
            .toLowerCase());
        return linkedBytecode;
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
exports.MonoPixelGrid8Renderer__factory = MonoPixelGrid8Renderer__factory;
MonoPixelGrid8Renderer__factory.bytecode = _bytecode;
MonoPixelGrid8Renderer__factory.abi = _abi;
//# sourceMappingURL=MonoPixelGrid8Renderer__factory.js.map