"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.MiddlewareRenderer__factory = void 0;
const ethers_1 = require("ethers");
const _abi = [
    {
        inputs: [
            {
                internalType: "address",
                name: "_splitMain",
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
        name: "createTreasury",
        outputs: [
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
        inputs: [],
        name: "splitMain",
        outputs: [
            {
                internalType: "contract ISplitMain",
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
    {
        inputs: [
            {
                internalType: "bytes",
                name: "props",
                type: "bytes",
            },
        ],
        name: "treasury",
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
const _bytecode = "0x60806040523480156200001157600080fd5b5060405162001e9838038062001e98833981810160405281019062000037919062000182565b620000576200004b6200009f60201b60201c565b620000a760201b60201c565b80600160006101000a81548173ffffffffffffffffffffffffffffffffffffffff021916908373ffffffffffffffffffffffffffffffffffffffff16021790555050620001fc565b600033905090565b60008060009054906101000a900473ffffffffffffffffffffffffffffffffffffffff169050816000806101000a81548173ffffffffffffffffffffffffffffffffffffffff021916908373ffffffffffffffffffffffffffffffffffffffff1602179055508173ffffffffffffffffffffffffffffffffffffffff168173ffffffffffffffffffffffffffffffffffffffff167f8be0079c531659141344cd1fd0a4f28419497f9722a3daafe3b4186f6b6457e060405160405180910390a35050565b6000815190506200017c81620001e2565b92915050565b6000602082840312156200019557600080fd5b6000620001a5848285016200016b565b91505092915050565b6000620001bb82620001c2565b9050919050565b600073ffffffffffffffffffffffffffffffffffffffff82169050919050565b620001ed81620001ae565b8114620001f957600080fd5b50565b611c8c806200020c6000396000f3fe608060405234801561001057600080fd5b50600436106100ce5760003560e01c80635ae2a8681161008c57806381612ceb1161006657806381612ceb146102275780638da5cb5b1461024557806392348b2214610263578063f2fde38b14610281576100ce565b80635ae2a868146101bd578063715018a6146101ed57806378385b58146101f7576100ce565b8062a85d69146100d357806301ffc9a7146100f157806306fdde03146101215780630e769b2b1461013f578063316df61e1461015d57806343c5820c1461018d575b600080fd5b6100db61029d565b6040516100e89190611777565b60405180910390f35b61010b600480360381019061010691906112bc565b6102c5565b6040516101189190611699565b60405180910390f35b6101296103a7565b6040516101369190611715565b60405180910390f35b6101476103e4565b60405161015491906116fa565b60405180910390f35b610177600480360381019061017291906112e5565b61040a565b6040516101849190611715565b60405180910390f35b6101a760048036038101906101a291906112e5565b6106a4565b6040516101b491906116d8565b60405180910390f35b6101d760048036038101906101d291906112e5565b61093a565b6040516101e491906115e6565b60405180910390f35b6101f5610a93565b005b610211600480360381019061020c91906112e5565b610aa7565b60405161021e91906115e6565b60405180910390f35b61022f610bfb565b60405161023c9190611715565b60405180910390f35b61024d610c38565b60405161025a91906115e6565b60405180910390f35b61026b610c47565b6040516102789190611715565b60405180910390f35b61029b6004803603810190610296919061117f565b610c84565b005b60007fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff905090565b60007fea0d9bea000000000000000000000000000000000000000000000000000000007bffffffffffffffffffffffffffffffffffffffffffffffffffffffff1916827bffffffffffffffffffffffffffffffffffffffffffffffffffffffff1916148061039057507f22daf330000000000000000000000000000000000000000000000000000000007bffffffffffffffffffffffffffffffffffffffffffffffffffffffff1916827bffffffffffffffffffffffffffffffffffffffffffffffffffffffff1916145b806103a0575061039f82610d08565b5b9050919050565b60606040518060400160405280600a81526020017f4d6964646c657761726500000000000000000000000000000000000000000000815250905090565b600160009054906101000a900473ffffffffffffffffffffffffffffffffffffffff1681565b6060600073__$0b9e6dc8b9fef356966050e0e828cc16d9$__63ca176cca85856040518363ffffffff1660e01b81526004016104479291906116b4565b60006040518083038186803b15801561045f57600080fd5b505af4158015610473573d6000803e3d6000fd5b505050506040513d6000823e3d601f19601f8201168201806040525081019061049c91906111d1565b50905060008484600484516104b191906119b5565b601485516104bf91906119b5565b60016104cb919061195f565b6104d5919061195f565b9080926104e49392919061192c565b8080601f016020809104026020016040519081016040528093929190818152602001838380828437600081840152601f19601f8201169050808301925050505050505090506000600190505b825181101561069857600073ffffffffffffffffffffffffffffffffffffffff1683828151811061058a577f4e487b7100000000000000000000000000000000000000000000000000000000600052603260045260246000fd5b602002602001015173ffffffffffffffffffffffffffffffffffffffff16146106845760008382815181106105e8577f4e487b7100000000000000000000000000000000000000000000000000000000600052603260045260246000fd5b602002602001015190508073ffffffffffffffffffffffffffffffffffffffff1663316df61e846040518263ffffffff1660e01b815260040161062b91906116d8565b60006040518083038186803b15801561064357600080fd5b505afa158015610657573d6000803e3d6000fd5b505050506040513d6000823e3d601f19601f82011682018060405250810190610680919061136b565b9250505b600081610691919061195f565b9050610530565b50809250505092915050565b6060600073__$0b9e6dc8b9fef356966050e0e828cc16d9$__63ca176cca85856040518363ffffffff1660e01b81526004016106e19291906116b4565b60006040518083038186803b1580156106f957600080fd5b505af415801561070d573d6000803e3d6000fd5b505050506040513d6000823e3d601f19601f8201168201806040525081019061073691906111d1565b509050600084846004845161074b91906119b5565b6014855161075991906119b5565b6001610765919061195f565b61076f919061195f565b90809261077e9392919061192c565b8080601f016020809104026020016040519081016040528093929190818152602001838380828437600081840152601f19601f82011690508083019250505050505050905060005b825181101561092e57600073ffffffffffffffffffffffffffffffffffffffff16838281518110610820577f4e487b7100000000000000000000000000000000000000000000000000000000600052603260045260246000fd5b602002602001015173ffffffffffffffffffffffffffffffffffffffff161461091a57600083828151811061087e577f4e487b7100000000000000000000000000000000000000000000000000000000600052603260045260246000fd5b602002602001015190508073ffffffffffffffffffffffffffffffffffffffff166343c5820c846040518263ffffffff1660e01b81526004016108c191906116d8565b60006040518083038186803b1580156108d957600080fd5b505afa1580156108ed573d6000803e3d6000fd5b505050506040513d6000823e3d601f19601f82011682018060405250810190610916919061132a565b9250505b600081610927919061195f565b90506107c6565b50809250505092915050565b60008060008073__$0b9e6dc8b9fef356966050e0e828cc16d9$__634bd755f987876040518363ffffffff1660e01b81526004016109799291906116b4565b60006040518083038186803b15801561099157600080fd5b505af41580156109a5573d6000803e3d6000fd5b505050506040513d6000823e3d601f19601f820116820180604052508101906109ce919061123d565b925092509250600160009054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16637601f78284848460006040518563ffffffff1660e01b8152600401610a369493929190611646565b602060405180830381600087803b158015610a5057600080fd5b505af1158015610a64573d6000803e3d6000fd5b505050506040513d601f19601f82011682018060405250810190610a8891906111a8565b935050505092915050565b610a9b610d72565b610aa56000610df0565b565b60008060008073__$0b9e6dc8b9fef356966050e0e828cc16d9$__634bd755f987876040518363ffffffff1660e01b8152600401610ae69291906116b4565b60006040518083038186803b158015610afe57600080fd5b505af4158015610b12573d6000803e3d6000fd5b505050506040513d6000823e3d601f19601f82011682018060405250810190610b3b919061123d565b925092509250600160009054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff166352844dd38484846040518463ffffffff1660e01b8152600401610ba093929190611601565b60206040518083038186803b158015610bb857600080fd5b505afa158015610bcc573d6000803e3d6000fd5b505050506040513d601f19601f82011682018060405250810190610bf091906111a8565b935050505092915050565b60606040518060400160405280600a81526020017f6d6964646c657761726500000000000000000000000000000000000000000000815250905090565b6000610c42610eb4565b905090565b60606040518060400160405280600b81526020017f697066733a2f2f544f444f000000000000000000000000000000000000000000815250905090565b610c8c610d72565b600073ffffffffffffffffffffffffffffffffffffffff168173ffffffffffffffffffffffffffffffffffffffff161415610cfc576040517f08c379a0000000000000000000000000000000000000000000000000000000008152600401610cf390611737565b60405180910390fd5b610d0581610df0565b50565b60007f01ffc9a7000000000000000000000000000000000000000000000000000000007bffffffffffffffffffffffffffffffffffffffffffffffffffffffff1916827bffffffffffffffffffffffffffffffffffffffffffffffffffffffff1916149050919050565b610d7a610edd565b73ffffffffffffffffffffffffffffffffffffffff16610d98610c38565b73ffffffffffffffffffffffffffffffffffffffff1614610dee576040517f08c379a0000000000000000000000000000000000000000000000000000000008152600401610de590611757565b60405180910390fd5b565b60008060009054906101000a900473ffffffffffffffffffffffffffffffffffffffff169050816000806101000a81548173ffffffffffffffffffffffffffffffffffffffff021916908373ffffffffffffffffffffffffffffffffffffffff1602179055508173ffffffffffffffffffffffffffffffffffffffff168173ffffffffffffffffffffffffffffffffffffffff167f8be0079c531659141344cd1fd0a4f28419497f9722a3daafe3b4186f6b6457e060405160405180910390a35050565b60008060009054906101000a900473ffffffffffffffffffffffffffffffffffffffff16905090565b600033905090565b6000610ef8610ef3846117b7565b611792565b90508083825260208201905082856020860282011115610f1757600080fd5b60005b85811015610f475781610f2d888261104e565b845260208401935060208301925050600181019050610f1a565b5050509392505050565b6000610f64610f5f846117e3565b611792565b90508083825260208201905082856020860282011115610f8357600080fd5b60005b85811015610fb35781610f99888261116a565b845260208401935060208301925050600181019050610f86565b5050509392505050565b6000610fd0610fcb8461180f565b611792565b905082815260208101848484011115610fe857600080fd5b610ff3848285611ac6565b509392505050565b600061100e61100984611840565b611792565b90508281526020810184848401111561102657600080fd5b611031848285611ac6565b509392505050565b60008135905061104881611c11565b92915050565b60008151905061105d81611c11565b92915050565b600082601f83011261107457600080fd5b8151611084848260208601610ee5565b91505092915050565b600082601f83011261109e57600080fd5b81516110ae848260208601610f51565b91505092915050565b6000813590506110c681611c28565b92915050565b60008083601f8401126110de57600080fd5b8235905067ffffffffffffffff8111156110f757600080fd5b60208301915083600182028301111561110f57600080fd5b9250929050565b600082601f83011261112757600080fd5b8151611137848260208601610fbd565b91505092915050565b600082601f83011261115157600080fd5b8151611161848260208601610ffb565b91505092915050565b60008151905061117981611c3f565b92915050565b60006020828403121561119157600080fd5b600061119f84828501611039565b91505092915050565b6000602082840312156111ba57600080fd5b60006111c88482850161104e565b91505092915050565b600080604083850312156111e457600080fd5b600083015167ffffffffffffffff8111156111fe57600080fd5b61120a85828601611063565b925050602083015167ffffffffffffffff81111561122757600080fd5b6112338582860161108d565b9150509250929050565b60008060006060848603121561125257600080fd5b600084015167ffffffffffffffff81111561126c57600080fd5b61127886828701611063565b935050602084015167ffffffffffffffff81111561129557600080fd5b6112a18682870161108d565b92505060406112b28682870161116a565b9150509250925092565b6000602082840312156112ce57600080fd5b60006112dc848285016110b7565b91505092915050565b600080602083850312156112f857600080fd5b600083013567ffffffffffffffff81111561131257600080fd5b61131e858286016110cc565b92509250509250929050565b60006020828403121561133c57600080fd5b600082015167ffffffffffffffff81111561135657600080fd5b61136284828501611116565b91505092915050565b60006020828403121561137d57600080fd5b600082015167ffffffffffffffff81111561139757600080fd5b6113a384828501611140565b91505092915050565b60006113b883836113dc565b60208301905092915050565b60006113d083836115c8565b60208301905092915050565b6113e581611a0f565b82525050565b6113f481611a0f565b82525050565b600061140582611891565b61140f81856118d7565b935061141a83611871565b8060005b8381101561144b57815161143288826113ac565b975061143d836118bd565b92505060018101905061141e565b5085935050505092915050565b60006114638261189c565b61146d81856118e8565b935061147883611881565b8060005b838110156114a957815161149088826113c4565b975061149b836118ca565b92505060018101905061147c565b5085935050505092915050565b6114bf81611a21565b82525050565b60006114d1838561190a565b93506114de838584611ab7565b6114e783611b88565b840190509392505050565b60006114fd826118a7565b61150781856118f9565b9350611517818560208601611ac6565b61152081611b88565b840191505092915050565b61153481611a93565b82525050565b6000611545826118b2565b61154f818561191b565b935061155f818560208601611ac6565b61156881611b88565b840191505092915050565b600061158060268361191b565b915061158b82611b99565b604082019050919050565b60006115a360208361191b565b91506115ae82611be8565b602082019050919050565b6115c281611a79565b82525050565b6115d181611a83565b82525050565b6115e081611a83565b82525050565b60006020820190506115fb60008301846113eb565b92915050565b6000606082019050818103600083015261161b81866113fa565b9050818103602083015261162f8185611458565b905061163e60408301846115d7565b949350505050565b6000608082019050818103600083015261166081876113fa565b905081810360208301526116748186611458565b905061168360408301856115d7565b61169060608301846113eb565b95945050505050565b60006020820190506116ae60008301846114b6565b92915050565b600060208201905081810360008301526116cf8184866114c5565b90509392505050565b600060208201905081810360008301526116f281846114f2565b905092915050565b600060208201905061170f600083018461152b565b92915050565b6000602082019050818103600083015261172f818461153a565b905092915050565b6000602082019050818103600083015261175081611573565b9050919050565b6000602082019050818103600083015261177081611596565b9050919050565b600060208201905061178c60008301846115b9565b92915050565b600061179c6117ad565b90506117a88282611af9565b919050565b6000604051905090565b600067ffffffffffffffff8211156117d2576117d1611b59565b5b602082029050602081019050919050565b600067ffffffffffffffff8211156117fe576117fd611b59565b5b602082029050602081019050919050565b600067ffffffffffffffff82111561182a57611829611b59565b5b61183382611b88565b9050602081019050919050565b600067ffffffffffffffff82111561185b5761185a611b59565b5b61186482611b88565b9050602081019050919050565b6000819050602082019050919050565b6000819050602082019050919050565b600081519050919050565b600081519050919050565b600081519050919050565b600081519050919050565b6000602082019050919050565b6000602082019050919050565b600082825260208201905092915050565b600082825260208201905092915050565b600082825260208201905092915050565b600082825260208201905092915050565b600082825260208201905092915050565b6000808585111561193c57600080fd5b8386111561194957600080fd5b6001850283019150848603905094509492505050565b600061196a82611a79565b915061197583611a79565b9250827fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff038211156119aa576119a9611b2a565b5b828201905092915050565b60006119c082611a79565b91506119cb83611a79565b9250817fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff0483118215151615611a0457611a03611b2a565b5b828202905092915050565b6000611a1a82611a59565b9050919050565b60008115159050919050565b60007fffffffff0000000000000000000000000000000000000000000000000000000082169050919050565b600073ffffffffffffffffffffffffffffffffffffffff82169050919050565b6000819050919050565b600063ffffffff82169050919050565b6000611a9e82611aa5565b9050919050565b6000611ab082611a59565b9050919050565b82818337600083830152505050565b60005b83811015611ae4578082015181840152602081019050611ac9565b83811115611af3576000848401525b50505050565b611b0282611b88565b810181811067ffffffffffffffff82111715611b2157611b20611b59565b5b80604052505050565b7f4e487b7100000000000000000000000000000000000000000000000000000000600052601160045260246000fd5b7f4e487b7100000000000000000000000000000000000000000000000000000000600052604160045260246000fd5b6000601f19601f8301169050919050565b7f4f776e61626c653a206e6577206f776e657220697320746865207a65726f206160008201527f6464726573730000000000000000000000000000000000000000000000000000602082015250565b7f4f776e61626c653a2063616c6c6572206973206e6f7420746865206f776e6572600082015250565b611c1a81611a0f565b8114611c2557600080fd5b50565b611c3181611a2d565b8114611c3c57600080fd5b50565b611c4881611a83565b8114611c5357600080fd5b5056fea2646970667358221220dfe536e1138a20c3a90fe5476743a25a6061ea0e1f1a6509ebdee7c219664fb064736f6c63430008040033";
const isSuperArgs = (xs) => {
    return (typeof xs[0] === "string" ||
        Array.isArray(xs[0]) ||
        "_isInterface" in xs[0]);
};
class MiddlewareRenderer__factory extends ethers_1.ContractFactory {
    constructor(...args) {
        if (isSuperArgs(args)) {
            super(...args);
        }
        else {
            const [linkLibraryAddresses, signer] = args;
            super(_abi, MiddlewareRenderer__factory.linkBytecode(linkLibraryAddresses), signer);
        }
    }
    static linkBytecode(linkLibraryAddresses) {
        let linkedBytecode = _bytecode;
        linkedBytecode = linkedBytecode.replace(new RegExp("__\\$0b9e6dc8b9fef356966050e0e828cc16d9\\$__", "g"), linkLibraryAddresses["contracts/libraries/AbsBrainFuckTreasuryUtils.sol:AbsBrainFuckTreasuryUtils"]
            .replace(/^0x/, "")
            .toLowerCase());
        return linkedBytecode;
    }
    deploy(_splitMain, overrides) {
        return super.deploy(_splitMain, overrides || {});
    }
    getDeployTransaction(_splitMain, overrides) {
        return super.getDeployTransaction(_splitMain, overrides || {});
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
exports.MiddlewareRenderer__factory = MiddlewareRenderer__factory;
MiddlewareRenderer__factory.bytecode = _bytecode;
MiddlewareRenderer__factory.abi = _abi;
//# sourceMappingURL=MiddlewareRenderer__factory.js.map