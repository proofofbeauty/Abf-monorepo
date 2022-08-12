"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.AlphaFilterRenderer__factory = void 0;
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
        name: "convertProps",
        outputs: [
            {
                internalType: "bytes",
                name: "output",
                type: "bytes",
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
const _bytecode = "0x608060405234801561001057600080fd5b5061002d61002261003260201b60201c565b61003a60201b60201c565b6100fe565b600033905090565b60008060009054906101000a900473ffffffffffffffffffffffffffffffffffffffff169050816000806101000a81548173ffffffffffffffffffffffffffffffffffffffff021916908373ffffffffffffffffffffffffffffffffffffffff1602179055508173ffffffffffffffffffffffffffffffffffffffff168173ffffffffffffffffffffffffffffffffffffffff167f8be0079c531659141344cd1fd0a4f28419497f9722a3daafe3b4186f6b6457e060405160405180910390a35050565b611bdb8061010d6000396000f3fe608060405234801561001057600080fd5b50600436106100b35760003560e01c80638da5cb5b116100715780638da5cb5b1461018e57806392348b22146101ac578063b0a2f640146101ca578063c87c43a4146101fa578063effde6db1461022a578063f2fde38b14610248576100b3565b8062a85d69146100b857806301ffc9a7146100d657806306fdde0314610106578063316df61e1461012457806343c5820c14610154578063715018a614610184575b600080fd5b6100c0610264565b6040516100cd9190611428565b60405180910390f35b6100f060048036038101906100eb9190610ec8565b61028c565b6040516100fd91906112e0565b60405180910390f35b61010e610306565b60405161011b919061138b565b60405180910390f35b61013e60048036038101906101399190610ef1565b610343565b60405161014b919061138b565b60405180910390f35b61016e60048036038101906101699190610ef1565b61037e565b60405161017b91906112fb565b60405180910390f35b61018c6105f4565b005b610196610608565b6040516101a391906112c5565b60405180910390f35b6101b4610617565b6040516101c1919061138b565b60405180910390f35b6101e460048036038101906101df9190610ef1565b610637565b6040516101f1919061138b565b60405180910390f35b610214600480360381019061020f9190610ef1565b6108ad565b60405161022191906112fb565b60405180910390f35b610232610910565b60405161023f919061138b565b60405180910390f35b610262600480360381019061025d9190610e9f565b61094d565b005b60007fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff905090565b60007f3433a79a000000000000000000000000000000000000000000000000000000007bffffffffffffffffffffffffffffffffffffffffffffffffffffffff1916827bffffffffffffffffffffffffffffffffffffffffffffffffffffffff191614806102ff57506102fe826109d1565b5b9050919050565b60606040518060400160405280600c81526020017f416c7068612046696c7465720000000000000000000000000000000000000000815250905090565b6060610357610352848461037e565b610a3b565b60405160200161036791906112a3565b604051602081830303815290604052905092915050565b6060600073__$8d2f2c422d7739f572e222809bbf6b68c3$__637be7619a60006001878760008181106103da577f4e487b7100000000000000000000000000000000000000000000000000000000600052603260045260246000fd5b9050013560f81c60f81b6040518463ffffffff1660e01b815260040161040293929190611354565b60206040518083038186803b15801561041a57600080fd5b505af415801561042e573d6000803e3d6000fd5b505050506040513d601f19601f820116820180604052508101906104529190610f77565b905060006104a585858080601f016020809104026020016040519081016040528093929190818152602001838380828437600081840152601f19601f820116905080830192505050505050506001610bc5565b905073__$8d2f2c422d7739f572e222809bbf6b68c3$__63e4eca9d6836040518263ffffffff1660e01b81526004016104de919061140d565b60006040518083038186803b1580156104f657600080fd5b505af415801561050a573d6000803e3d6000fd5b505050506040513d6000823e3d601f19601f820116820180604052508101906105339190610f36565b8173ffffffffffffffffffffffffffffffffffffffff1663316df61e61055988886108ad565b6040518263ffffffff1660e01b815260040161057591906112fb565b60006040518083038186803b15801561058d57600080fd5b505afa1580156105a1573d6000803e3d6000fd5b505050506040513d6000823e3d601f19601f820116820180604052508101906105ca9190610f36565b6040516020016105db929190611253565b6040516020818303038152906040529250505092915050565b6105fc610c3b565b6106066000610cb9565b565b6000610612610d7d565b905090565b6060604051806080016040528060428152602001611b2460429139905090565b6060600073__$8d2f2c422d7739f572e222809bbf6b68c3$__637be7619a6000606487876000818110610693577f4e487b7100000000000000000000000000000000000000000000000000000000600052603260045260246000fd5b9050013560f81c60f81b6040518463ffffffff1660e01b81526004016106bb9392919061131d565b60206040518083038186803b1580156106d357600080fd5b505af41580156106e7573d6000803e3d6000fd5b505050506040513d601f19601f8201168201806040525081019061070b9190610f77565b9050600061075e85858080601f016020809104026020016040519081016040528093929190818152602001838380828437600081840152601f19601f820116905080830192505050505050506001610bc5565b90508073ffffffffffffffffffffffffffffffffffffffff1663b0a2f64061078687876108ad565b6040518263ffffffff1660e01b81526004016107a291906112fb565b60006040518083038186803b1580156107ba57600080fd5b505afa1580156107ce573d6000803e3d6000fd5b505050506040513d6000823e3d601f19601f820116820180604052508101906107f79190610f36565b73__$8d2f2c422d7739f572e222809bbf6b68c3$__63e4eca9d6846040518263ffffffff1660e01b815260040161082e919061140d565b60006040518083038186803b15801561084657600080fd5b505af415801561085a573d6000803e3d6000fd5b505050506040513d6000823e3d601f19601f820116820180604052508101906108839190610f36565b604051602001610894929190611219565b6040516020818303038152906040529250505092915050565b6060828260159085859050926108c5939291906114dc565b8080601f016020809104026020016040519081016040528093929190818152602001838380828437600081840152601f19601f82011690508083019250505050505050905092915050565b60606040518060400160405280600581526020017f696d616765000000000000000000000000000000000000000000000000000000815250905090565b610955610c3b565b600073ffffffffffffffffffffffffffffffffffffffff168173ffffffffffffffffffffffffffffffffffffffff1614156109c5576040517f08c379a00000000000000000000000000000000000000000000000000000000081526004016109bc906113ad565b60405180910390fd5b6109ce81610cb9565b50565b60007f01ffc9a7000000000000000000000000000000000000000000000000000000007bffffffffffffffffffffffffffffffffffffffffffffffffffffffff1916827bffffffffffffffffffffffffffffffffffffffffffffffffffffffff1916149050919050565b6060600082511415610a5e57604051806020016040528060008152509050610bc0565b6000604051806060016040528060408152602001611b666040913990506000600360028551610a8d919061150f565b610a979190611565565b6004610aa39190611596565b67ffffffffffffffff811115610ae2577f4e487b7100000000000000000000000000000000000000000000000000000000600052604160045260246000fd5b6040519080825280601f01601f191660200182016040528015610b145781602001600182028036833780820191505090505b509050600182016020820185865187015b80821015610b80576003820191508151603f8160121c168501518453600184019350603f81600c1c168501518453600184019350603f8160061c168501518453600184019350603f8116850151845360018401935050610b25565b5050600386510660018114610b9c5760028114610baf57610bb7565b603d6001830353603d6002830353610bb7565b603d60018303535b50505080925050505b919050565b6000601482610bd4919061150f565b83511015610c17576040517f08c379a0000000000000000000000000000000000000000000000000000000008152600401610c0e906113ed565b60405180910390fd5b60006c01000000000000000000000000836020860101510490508091505092915050565b610c43610da6565b73ffffffffffffffffffffffffffffffffffffffff16610c61610608565b73ffffffffffffffffffffffffffffffffffffffff1614610cb7576040517f08c379a0000000000000000000000000000000000000000000000000000000008152600401610cae906113cd565b60405180910390fd5b565b60008060009054906101000a900473ffffffffffffffffffffffffffffffffffffffff169050816000806101000a81548173ffffffffffffffffffffffffffffffffffffffff021916908373ffffffffffffffffffffffffffffffffffffffff1602179055508173ffffffffffffffffffffffffffffffffffffffff168173ffffffffffffffffffffffffffffffffffffffff167f8be0079c531659141344cd1fd0a4f28419497f9722a3daafe3b4186f6b6457e060405160405180910390a35050565b60008060009054906101000a900473ffffffffffffffffffffffffffffffffffffffff16905090565b600033905090565b6000610dc1610dbc84611468565b611443565b905082815260208101848484011115610dd957600080fd5b610de48482856116c6565b509392505050565b600081359050610dfb81611ade565b92915050565b600081359050610e1081611af5565b92915050565b60008083601f840112610e2857600080fd5b8235905067ffffffffffffffff811115610e4157600080fd5b602083019150836001820283011115610e5957600080fd5b9250929050565b600082601f830112610e7157600080fd5b8151610e81848260208601610dae565b91505092915050565b600081519050610e9981611b0c565b92915050565b600060208284031215610eb157600080fd5b6000610ebf84828501610dec565b91505092915050565b600060208284031215610eda57600080fd5b6000610ee884828501610e01565b91505092915050565b60008060208385031215610f0457600080fd5b600083013567ffffffffffffffff811115610f1e57600080fd5b610f2a85828601610e16565b92509250509250929050565b600060208284031215610f4857600080fd5b600082015167ffffffffffffffff811115610f6257600080fd5b610f6e84828501610e60565b91505092915050565b600060208284031215610f8957600080fd5b6000610f9784828501610e8a565b91505092915050565b610fa9816115f0565b82525050565b610fb881611602565b82525050565b610fc78161160e565b82525050565b6000610fd882611499565b610fe281856114af565b9350610ff28185602086016116c6565b610ffb816117b7565b840191505092915050565b61100f81611690565b82525050565b61101e816116a2565b82525050565b61102d816116b4565b82525050565b600061103e826114a4565b61104881856114c0565b93506110588185602086016116c6565b611061816117b7565b840191505092915050565b6000611077826114a4565b61108181856114d1565b93506110918185602086016116c6565b80840191505092915050565b60006110aa6029836114d1565b91506110b5826117c8565b602982019050919050565b60006110cd6052836114d1565b91506110d882611817565b605282019050919050565b60006110f06026836114c0565b91506110fb8261188c565b604082019050919050565b600061111360e0836114d1565b915061111e826118db565b60e082019050919050565b60006111366016836114d1565b9150611141826119e8565b601682019050919050565b60006111596001836114d1565b915061116482611a11565b600182019050919050565b600061117c6020836114c0565b915061118782611a3a565b602082019050919050565b600061119f6015836114c0565b91506111aa82611a63565b602082019050919050565b60006111c26006836114d1565b91506111cd82611a8c565b600682019050919050565b60006111e5601a836114d1565b91506111f082611ab5565b601a82019050919050565b61120481611686565b82525050565b61121381611686565b82525050565b6000611225828561106c565b91506112308261109d565b915061123c828461106c565b91506112478261114c565b91508190509392505050565b600061125e826110c0565b915061126a828561106c565b915061127582611129565b9150611281828461106c565b915061128c82611106565b9150611297826111b5565b91508190509392505050565b60006112ae826111d8565b91506112ba828461106c565b915081905092915050565b60006020820190506112da6000830184610fa0565b92915050565b60006020820190506112f56000830184610faf565b92915050565b600060208201905081810360008301526113158184610fcd565b905092915050565b60006060820190506113326000830186611006565b61133f6020830185611015565b61134c6040830184610fbe565b949350505050565b60006060820190506113696000830186611006565b6113766020830185611024565b6113836040830184610fbe565b949350505050565b600060208201905081810360008301526113a58184611033565b905092915050565b600060208201905081810360008301526113c6816110e3565b9050919050565b600060208201905081810360008301526113e68161116f565b9050919050565b6000602082019050818103600083015261140681611192565b9050919050565b6000602082019050611422600083018461120a565b92915050565b600060208201905061143d60008301846111fb565b92915050565b600061144d61145e565b905061145982826116f9565b919050565b6000604051905090565b600067ffffffffffffffff82111561148357611482611788565b5b61148c826117b7565b9050602081019050919050565b600081519050919050565b600081519050919050565b600082825260208201905092915050565b600082825260208201905092915050565b600081905092915050565b600080858511156114ec57600080fd5b838611156114f957600080fd5b6001850283019150848603905094509492505050565b600061151a82611686565b915061152583611686565b9250827fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff0382111561155a5761155961172a565b5b828201905092915050565b600061157082611686565b915061157b83611686565b92508261158b5761158a611759565b5b828204905092915050565b60006115a182611686565b91506115ac83611686565b9250817fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff04831182151516156115e5576115e461172a565b5b828202905092915050565b60006115fb82611666565b9050919050565b60008115159050919050565b60007fff0000000000000000000000000000000000000000000000000000000000000082169050919050565b60007fffffffff0000000000000000000000000000000000000000000000000000000082169050919050565b600073ffffffffffffffffffffffffffffffffffffffff82169050919050565b6000819050919050565b600061169b82611686565b9050919050565b60006116ad82611686565b9050919050565b60006116bf82611686565b9050919050565b60005b838110156116e45780820151818401526020810190506116c9565b838111156116f3576000848401525b50505050565b611702826117b7565b810181811067ffffffffffffffff8211171561172157611720611788565b5b80604052505050565b7f4e487b7100000000000000000000000000000000000000000000000000000000600052601160045260246000fd5b7f4e487b7100000000000000000000000000000000000000000000000000000000600052601260045260246000fd5b7f4e487b7100000000000000000000000000000000000000000000000000000000600052604160045260246000fd5b6000601f19601f8301169050919050565b7f2c7b2274726169745f74797065223a2022416c706861204368616e6e656c222c60008201527f202276616c7565223a0000000000000000000000000000000000000000000000602082015250565b7f3c73766720786d6c6e733d22687474703a2f2f7777772e77332e6f72672f323060008201527f30302f737667222077696474683d223132303022206865696768743d2231323060208201527f3022207374796c653d226f7061636974793a0000000000000000000000000000604082015250565b7f4f776e61626c653a206e6577206f776e657220697320746865207a65726f206160008201527f6464726573730000000000000000000000000000000000000000000000000000602082015250565b7f293b6261636b67726f756e642d7265706561743a6e6f2d7265706561743b626160008201527f636b67726f756e642d73697a653a636f6e7461696e3b6261636b67726f756e6460208201527f2d706f736974696f6e3a63656e7465723b696d6167652d72656e646572696e6760408201527f3a2d7765626b69742d6f7074696d697a652d636f6e74726173743b2d6d732d6960608201527f6e746572706f6c6174696f6e2d6d6f64653a6e6561726573742d6e656967686260808201527f6f723b696d6167652d72656e646572696e673a2d6d6f7a2d63726973702d656460a08201527f6765733b696d6167652d72656e646572696e673a706978656c617465643b223e60c082015250565b7f3b6261636b67726f756e642d696d6167653a75726c2800000000000000000000600082015250565b7f7d00000000000000000000000000000000000000000000000000000000000000600082015250565b7f4f776e61626c653a2063616c6c6572206973206e6f7420746865206f776e6572600082015250565b7f746f416464726573735f6f75744f66426f756e64730000000000000000000000600082015250565b7f3c2f7376673e0000000000000000000000000000000000000000000000000000600082015250565b7f646174613a696d6167652f7376672b786d6c3b6261736536342c000000000000600082015250565b611ae7816115f0565b8114611af257600080fd5b50565b611afe8161163a565b8114611b0957600080fd5b50565b611b1581611686565b8114611b2057600080fd5b5056fe697066733a2f2f6261666b726569626b77736332366475786a76376735716d633535696d6d6279337a7a6d6536637561376c7a72336e6363746866687465796333754142434445464748494a4b4c4d4e4f505152535455565758595a6162636465666768696a6b6c6d6e6f707172737475767778797a303132333435363738392b2fa26469706673582212209198415205b34eb0e674794f1afdd729f3ab3a47b8bf689f310acfd75127292464736f6c63430008040033";
const isSuperArgs = (xs) => {
    return (typeof xs[0] === "string" ||
        Array.isArray(xs[0]) ||
        "_isInterface" in xs[0]);
};
class AlphaFilterRenderer__factory extends ethers_1.ContractFactory {
    constructor(...args) {
        if (isSuperArgs(args)) {
            super(...args);
        }
        else {
            const [linkLibraryAddresses, signer] = args;
            super(_abi, AlphaFilterRenderer__factory.linkBytecode(linkLibraryAddresses), signer);
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
exports.AlphaFilterRenderer__factory = AlphaFilterRenderer__factory;
AlphaFilterRenderer__factory.bytecode = _bytecode;
AlphaFilterRenderer__factory.abi = _abi;
//# sourceMappingURL=AlphaFilterRenderer__factory.js.map