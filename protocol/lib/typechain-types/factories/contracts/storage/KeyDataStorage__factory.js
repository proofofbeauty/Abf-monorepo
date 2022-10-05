"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.KeyDataStorage__factory = void 0;
const ethers_1 = require("ethers");
const _abi = [
    {
        inputs: [],
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
        inputs: [
            {
                internalType: "uint256[]",
                name: "keys",
                type: "uint256[]",
            },
            {
                internalType: "bytes[]",
                name: "data",
                type: "bytes[]",
            },
        ],
        name: "batchAddKeyedData",
        outputs: [],
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
        name: "indexToData",
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
const _bytecode = "0x608060405234801561001057600080fd5b5061002d61002261003260201b60201c565b61003a60201b60201c565b6100fe565b600033905090565b60008060009054906101000a900473ffffffffffffffffffffffffffffffffffffffff169050816000806101000a81548173ffffffffffffffffffffffffffffffffffffffff021916908373ffffffffffffffffffffffffffffffffffffffff1602179055508173ffffffffffffffffffffffffffffffffffffffff168173ffffffffffffffffffffffffffffffffffffffff167f8be0079c531659141344cd1fd0a4f28419497f9722a3daafe3b4186f6b6457e060405160405180910390a35050565b61134c8061010d6000396000f3fe608060405234801561001057600080fd5b50600436106100615760003560e01c80626f4ba81461006657806301ffc9a71461008257806318ed981a146100b2578063715018a6146100e25780638da5cb5b146100ec578063f2fde38b1461010a575b600080fd5b610080600480360381019061007b9190610aa3565b610126565b005b61009c60048036038101906100979190610b18565b61023a565b6040516100a99190610e78565b60405180910390f35b6100cc60048036038101906100c79190610b41565b6102b4565b6040516100d99190610ebc565b60405180910390f35b6100ea6102c9565b005b6100f46102dd565b6040516101019190610e5d565b60405180910390f35b610124600480360381019061011f9190610a7a565b610306565b005b61012e61038a565b60005b828290508161ffff1610156102335761022185858361ffff16818110610180577f4e487b7100000000000000000000000000000000000000000000000000000000600052603260045260246000fd5b9050602002013560001b84848461ffff168181106101c7577f4e487b7100000000000000000000000000000000000000000000000000000000600052603260045260246000fd5b90506020028101906101d99190610f55565b8080601f016020809104026020016040519081016040528093929190818152602001838380828437600081840152601f19601f82011690508083019250505050505050610408565b508061022c906110be565b9050610131565b5050505050565b60007f18ed981a000000000000000000000000000000000000000000000000000000007bffffffffffffffffffffffffffffffffffffffffffffffffffffffff1916827bffffffffffffffffffffffffffffffffffffffffffffffffffffffff191614806102ad57506102ac82610450565b5b9050919050565b60606102c28260001b6104ba565b9050919050565b6102d161038a565b6102db60006104ff565b565b60008060009054906101000a900473ffffffffffffffffffffffffffffffffffffffff16905090565b61030e61038a565b600073ffffffffffffffffffffffffffffffffffffffff168173ffffffffffffffffffffffffffffffffffffffff16141561037e576040517f08c379a000000000000000000000000000000000000000000000000000000000815260040161037590610ede565b60405180910390fd5b610387816104ff565b50565b6103926105c3565b73ffffffffffffffffffffffffffffffffffffffff166103b06102dd565b73ffffffffffffffffffffffffffffffffffffffff1614610406576040517f08c379a00000000000000000000000000000000000000000000000000000000081526004016103fd90610efe565b60405180910390fd5b565b6000806104338360405160200161041f9190610e3b565b6040516020818303038152906040526105cb565b9050610447610441856105f7565b8261064c565b91505092915050565b60007f01ffc9a7000000000000000000000000000000000000000000000000000000007bffffffffffffffffffffffffffffffffffffffffffffffffffffffff1916827bffffffffffffffffffffffffffffffffffffffffffffffffffffffff1916149050919050565b60606104f86104d06104cb846105f7565b610662565b60017fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff6106ea565b9050919050565b60008060009054906101000a900473ffffffffffffffffffffffffffffffffffffffff169050816000806101000a81548173ffffffffffffffffffffffffffffffffffffffff021916908373ffffffffffffffffffffffffffffffffffffffff1602179055508173ffffffffffffffffffffffffffffffffffffffff168173ffffffffffffffffffffffffffffffffffffffff167f8be0079c531659141344cd1fd0a4f28419497f9722a3daafe3b4186f6b6457e060405160405180910390a35050565b600033905090565b60608151826040516020016105e1929190610d84565b6040516020818303038152906040529050919050565b60007fd351a9253491dfef66f53115e9e3afda3b5fdef08a1de6937da91188ec553be560001b8260405160200161062f929190610e93565b604051602081830303815290604052805190602001209050919050565b600061065a838360006107d0565b905092915050565b60008030837f21c35dbe1b344a2488cf3321d6ce542f8e9f305544ff09e4993a62319a497c1f60001b60405160200161069d93929190610df3565b6040516020818303038152906040528051906020012060001c9050806040516020016106c99190610dc2565b6040516020818303038152906040528051906020012060001c915050919050565b606060006106f785610991565b9050600081141561071a57604051806020016040528060008152509150506107c9565b8084111561073a57604051806020016040528060008152509150506107c9565b83831015610783578084846040517f2c4a89fa00000000000000000000000000000000000000000000000000000000815260040161077a93929190610f1e565b60405180910390fd5b600084840390506000858303905060008282106107a057826107a2565b815b90506040519450601f19601f60208301011685016040528085528087602087018a3c505050505b9392505050565b6000806040518060400160405280601081526020017f67363d3d37363d34f03d5260086018f300000000000000000000000000000000815250905061081485610662565b915060006108218361099c565b14610858576040517fcd43efa100000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b6000858251602084016000f59050600073ffffffffffffffffffffffffffffffffffffffff168173ffffffffffffffffffffffffffffffffffffffff1614156108cd576040517fbbd2fe8700000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b60008173ffffffffffffffffffffffffffffffffffffffff1685876040516108f59190610d6d565b60006040518083038185875af1925050503d8060008114610932576040519150601f19603f3d011682016040523d82523d6000602084013e610937565b606091505b505090508015806109505750600061094e8561099c565b145b15610987576040517f53de54b900000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b5050509392505050565b6000813b9050919050565b6000813b9050919050565b6000813590506109b6816112d1565b92915050565b60008083601f8401126109ce57600080fd5b8235905067ffffffffffffffff8111156109e757600080fd5b6020830191508360208202830111156109ff57600080fd5b9250929050565b60008083601f840112610a1857600080fd5b8235905067ffffffffffffffff811115610a3157600080fd5b602083019150836020820283011115610a4957600080fd5b9250929050565b600081359050610a5f816112e8565b92915050565b600081359050610a74816112ff565b92915050565b600060208284031215610a8c57600080fd5b6000610a9a848285016109a7565b91505092915050565b60008060008060408587031215610ab957600080fd5b600085013567ffffffffffffffff811115610ad357600080fd5b610adf87828801610a06565b9450945050602085013567ffffffffffffffff811115610afe57600080fd5b610b0a878288016109bc565b925092505092959194509250565b600060208284031215610b2a57600080fd5b6000610b3884828501610a50565b91505092915050565b600060208284031215610b5357600080fd5b6000610b6184828501610a65565b91505092915050565b610b7381610fef565b82525050565b610b8a610b8582610fef565b6110e9565b82525050565b610b9981611001565b82525050565b610ba88161100d565b82525050565b610bbf610bba8261100d565b6110fb565b82525050565b6000610bd082610fac565b610bda8185610fb7565b9350610bea81856020860161108b565b610bf381611158565b840191505092915050565b6000610c0982610fac565b610c138185610fc8565b9350610c2381856020860161108b565b80840191505092915050565b6000610c3c600183610fe4565b9150610c4782611183565b600182019050919050565b6000610c5f602683610fd3565b9150610c6a826111ac565b604082019050919050565b6000610c82600283610fe4565b9150610c8d826111fb565b600282019050919050565b6000610ca5600183610fe4565b9150610cb082611224565b600182019050919050565b6000610cc8600183610fe4565b9150610cd38261124d565b600182019050919050565b6000610ceb602083610fd3565b9150610cf682611276565b602082019050919050565b6000610d0e600183610fe4565b9150610d198261129f565b600182019050919050565b6000610d31600983610fe4565b9150610d3c826112a8565b600982019050919050565b610d5081611071565b82525050565b610d67610d628261107b565b611117565b82525050565b6000610d798284610bfe565b915081905092915050565b6000610d8f82610c2f565b9150610d9b8285610d56565b600482019150610daa82610d24565b9150610db68284610bfe565b91508190509392505050565b6000610dcd82610c75565b9150610dd98284610b79565b601482019150610de882610c98565b915081905092915050565b6000610dfe82610cbb565b9150610e0a8286610b79565b601482019150610e1a8285610bae565b602082019150610e2a8284610bae565b602082019150819050949350505050565b6000610e4682610d01565b9150610e528284610bfe565b915081905092915050565b6000602082019050610e726000830184610b6a565b92915050565b6000602082019050610e8d6000830184610b90565b92915050565b6000604082019050610ea86000830185610b9f565b610eb56020830184610b9f565b9392505050565b60006020820190508181036000830152610ed68184610bc5565b905092915050565b60006020820190508181036000830152610ef781610c52565b9050919050565b60006020820190508181036000830152610f1781610cde565b9050919050565b6000606082019050610f336000830186610d47565b610f406020830185610d47565b610f4d6040830184610d47565b949350505050565b60008083356001602003843603038112610f6e57600080fd5b80840192508235915067ffffffffffffffff821115610f8c57600080fd5b602083019250600182023603831315610fa457600080fd5b509250929050565b600081519050919050565b600082825260208201905092915050565b600081905092915050565b600082825260208201905092915050565b600081905092915050565b6000610ffa82611051565b9050919050565b60008115159050919050565b6000819050919050565b60007fffffffff0000000000000000000000000000000000000000000000000000000082169050919050565b600061ffff82169050919050565b600073ffffffffffffffffffffffffffffffffffffffff82169050919050565b6000819050919050565b600063ffffffff82169050919050565b60005b838110156110a957808201518184015260208101905061108e565b838111156110b8576000848401525b50505050565b60006110c982611043565b915061ffff8214156110de576110dd611129565b5b600182019050919050565b60006110f482611105565b9050919050565b6000819050919050565b600061111082611176565b9050919050565b600061112282611169565b9050919050565b7f4e487b7100000000000000000000000000000000000000000000000000000000600052601160045260246000fd5b6000601f19601f8301169050919050565b60008160e01b9050919050565b60008160601b9050919050565b7f6300000000000000000000000000000000000000000000000000000000000000600082015250565b7f4f776e61626c653a206e6577206f776e657220697320746865207a65726f206160008201527f6464726573730000000000000000000000000000000000000000000000000000602082015250565b7fd694000000000000000000000000000000000000000000000000000000000000600082015250565b7f0100000000000000000000000000000000000000000000000000000000000000600082015250565b7fff00000000000000000000000000000000000000000000000000000000000000600082015250565b7f4f776e61626c653a2063616c6c6572206973206e6f7420746865206f776e6572600082015250565b60008082015250565b7f80600e6000396000f30000000000000000000000000000000000000000000000600082015250565b6112da81610fef565b81146112e557600080fd5b50565b6112f181611017565b81146112fc57600080fd5b50565b61130881611071565b811461131357600080fd5b5056fea26469706673582212209389033609c60a2f00a115ab2b4a1030c35d11d2072c5084effe3b6860488adc64736f6c63430008040033";
const isSuperArgs = (xs) => xs.length > 1;
class KeyDataStorage__factory extends ethers_1.ContractFactory {
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
exports.KeyDataStorage__factory = KeyDataStorage__factory;
KeyDataStorage__factory.bytecode = _bytecode;
KeyDataStorage__factory.abi = _abi;
//# sourceMappingURL=KeyDataStorage__factory.js.map