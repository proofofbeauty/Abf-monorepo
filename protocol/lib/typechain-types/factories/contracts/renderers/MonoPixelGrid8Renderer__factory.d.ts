import type { Provider, TransactionRequest } from "@ethersproject/providers";
import { ContractFactory, Overrides, Signer } from "ethers";
import type { PromiseOrValue } from "../../../common";
import type { MonoPixelGrid8Renderer, MonoPixelGrid8RendererInterface } from "../../../contracts/renderers/MonoPixelGrid8Renderer";
declare type MonoPixelGrid8RendererConstructorParams = [
    linkLibraryAddresses: MonoPixelGrid8RendererLibraryAddresses,
    signer?: Signer
] | ConstructorParameters<typeof ContractFactory>;
export declare class MonoPixelGrid8Renderer__factory extends ContractFactory {
    constructor(...args: MonoPixelGrid8RendererConstructorParams);
    static linkBytecode(linkLibraryAddresses: MonoPixelGrid8RendererLibraryAddresses): string;
    deploy(overrides?: Overrides & {
        from?: PromiseOrValue<string>;
    }): Promise<MonoPixelGrid8Renderer>;
    getDeployTransaction(overrides?: Overrides & {
        from?: PromiseOrValue<string>;
    }): TransactionRequest;
    attach(address: string): MonoPixelGrid8Renderer;
    connect(signer: Signer): MonoPixelGrid8Renderer__factory;
    static readonly bytecode = "0x60806040526040518060600160405280602181526020016200277860219139600190805190602001906200003592919062001061565b506040518060400160405280600481526020017f22202f3e00000000000000000000000000000000000000000000000000000000815250600290805190602001906200008392919062001061565b506040518061080001604052806040518060400160405280600b81526020017f793d22302220783d22302200000000000000000000000000000000000000000081525081526020016040518060400160405280600b81526020017f793d22302220783d22312200000000000000000000000000000000000000000081525081526020016040518060400160405280600b81526020017f793d22302220783d22322200000000000000000000000000000000000000000081525081526020016040518060400160405280600b81526020017f793d22302220783d22332200000000000000000000000000000000000000000081525081526020016040518060400160405280600b81526020017f793d22302220783d22342200000000000000000000000000000000000000000081525081526020016040518060400160405280600b81526020017f793d22302220783d22352200000000000000000000000000000000000000000081525081526020016040518060400160405280600b81526020017f793d22302220783d22362200000000000000000000000000000000000000000081525081526020016040518060400160405280600b81526020017f793d22302220783d22372200000000000000000000000000000000000000000081525081526020016040518060400160405280600b81526020017f793d22312220783d22302200000000000000000000000000000000000000000081525081526020016040518060400160405280600b81526020017f793d22312220783d22312200000000000000000000000000000000000000000081525081526020016040518060400160405280600b81526020017f793d22312220783d22322200000000000000000000000000000000000000000081525081526020016040518060400160405280600b81526020017f793d22312220783d22332200000000000000000000000000000000000000000081525081526020016040518060400160405280600b81526020017f793d22312220783d22342200000000000000000000000000000000000000000081525081526020016040518060400160405280600b81526020017f793d22312220783d22352200000000000000000000000000000000000000000081525081526020016040518060400160405280600b81526020017f793d22312220783d22362200000000000000000000000000000000000000000081525081526020016040518060400160405280600b81526020017f793d22312220783d22372200000000000000000000000000000000000000000081525081526020016040518060400160405280600b81526020017f793d22322220783d22302200000000000000000000000000000000000000000081525081526020016040518060400160405280600b81526020017f793d22322220783d22312200000000000000000000000000000000000000000081525081526020016040518060400160405280600b81526020017f793d22322220783d22322200000000000000000000000000000000000000000081525081526020016040518060400160405280600b81526020017f793d22322220783d22332200000000000000000000000000000000000000000081525081526020016040518060400160405280600b81526020017f793d22322220783d22342200000000000000000000000000000000000000000081525081526020016040518060400160405280600b81526020017f793d22322220783d22352200000000000000000000000000000000000000000081525081526020016040518060400160405280600b81526020017f793d22322220783d22362200000000000000000000000000000000000000000081525081526020016040518060400160405280600b81526020017f793d22322220783d22372200000000000000000000000000000000000000000081525081526020016040518060400160405280600b81526020017f793d22332220783d22302200000000000000000000000000000000000000000081525081526020016040518060400160405280600b81526020017f793d22332220783d22312200000000000000000000000000000000000000000081525081526020016040518060400160405280600b81526020017f793d22332220783d22322200000000000000000000000000000000000000000081525081526020016040518060400160405280600b81526020017f793d22332220783d22332200000000000000000000000000000000000000000081525081526020016040518060400160405280600b81526020017f793d22332220783d22342200000000000000000000000000000000000000000081525081526020016040518060400160405280600b81526020017f793d22332220783d22352200000000000000000000000000000000000000000081525081526020016040518060400160405280600b81526020017f793d22332220783d22362200000000000000000000000000000000000000000081525081526020016040518060400160405280600b81526020017f793d22332220783d22372200000000000000000000000000000000000000000081525081526020016040518060400160405280600b81526020017f793d22342220783d22302200000000000000000000000000000000000000000081525081526020016040518060400160405280600b81526020017f793d22342220783d22312200000000000000000000000000000000000000000081525081526020016040518060400160405280600b81526020017f793d22342220783d22322200000000000000000000000000000000000000000081525081526020016040518060400160405280600b81526020017f793d22342220783d22332200000000000000000000000000000000000000000081525081526020016040518060400160405280600b81526020017f793d22342220783d22342200000000000000000000000000000000000000000081525081526020016040518060400160405280600b81526020017f793d22342220783d22352200000000000000000000000000000000000000000081525081526020016040518060400160405280600b81526020017f793d22342220783d22362200000000000000000000000000000000000000000081525081526020016040518060400160405280600b81526020017f793d22342220783d22372200000000000000000000000000000000000000000081525081526020016040518060400160405280600b81526020017f793d22352220783d22302200000000000000000000000000000000000000000081525081526020016040518060400160405280600b81526020017f793d22352220783d22312200000000000000000000000000000000000000000081525081526020016040518060400160405280600b81526020017f793d22352220783d22322200000000000000000000000000000000000000000081525081526020016040518060400160405280600b81526020017f793d22352220783d22332200000000000000000000000000000000000000000081525081526020016040518060400160405280600b81526020017f793d22352220783d22342200000000000000000000000000000000000000000081525081526020016040518060400160405280600b81526020017f793d22352220783d22352200000000000000000000000000000000000000000081525081526020016040518060400160405280600b81526020017f793d22352220783d22362200000000000000000000000000000000000000000081525081526020016040518060400160405280600b81526020017f793d22352220783d22372200000000000000000000000000000000000000000081525081526020016040518060400160405280600b81526020017f793d22362220783d22302200000000000000000000000000000000000000000081525081526020016040518060400160405280600b81526020017f793d22362220783d22312200000000000000000000000000000000000000000081525081526020016040518060400160405280600b81526020017f793d22362220783d22322200000000000000000000000000000000000000000081525081526020016040518060400160405280600b81526020017f793d22362220783d22332200000000000000000000000000000000000000000081525081526020016040518060400160405280600b81526020017f793d22362220783d22342200000000000000000000000000000000000000000081525081526020016040518060400160405280600b81526020017f793d22362220783d22352200000000000000000000000000000000000000000081525081526020016040518060400160405280600b81526020017f793d22362220783d22362200000000000000000000000000000000000000000081525081526020016040518060400160405280600b81526020017f793d22362220783d22372200000000000000000000000000000000000000000081525081526020016040518060400160405280600b81526020017f793d22372220783d22302200000000000000000000000000000000000000000081525081526020016040518060400160405280600b81526020017f793d22372220783d22312200000000000000000000000000000000000000000081525081526020016040518060400160405280600b81526020017f793d22372220783d22322200000000000000000000000000000000000000000081525081526020016040518060400160405280600b81526020017f793d22372220783d22332200000000000000000000000000000000000000000081525081526020016040518060400160405280600b81526020017f793d22372220783d22342200000000000000000000000000000000000000000081525081526020016040518060400160405280600b81526020017f793d22372220783d22352200000000000000000000000000000000000000000081525081526020016040518060400160405280600b81526020017f793d22372220783d22362200000000000000000000000000000000000000000081525081526020016040518060400160405280600b81526020017f793d22372220783d223722000000000000000000000000000000000000000000815250815250600390604062000f60929190620010f2565b5034801562000f6e57600080fd5b5062000f8f62000f8362000f9560201b60201c565b62000f9d60201b60201c565b6200123e565b600033905090565b60008060009054906101000a900473ffffffffffffffffffffffffffffffffffffffff169050816000806101000a81548173ffffffffffffffffffffffffffffffffffffffff021916908373ffffffffffffffffffffffffffffffffffffffff1602179055508173ffffffffffffffffffffffffffffffffffffffff168173ffffffffffffffffffffffffffffffffffffffff167f8be0079c531659141344cd1fd0a4f28419497f9722a3daafe3b4186f6b6457e060405160405180910390a35050565b8280546200106f90620011d9565b90600052602060002090601f016020900481019282620010935760008555620010df565b82601f10620010ae57805160ff1916838001178555620010df565b82800160010185558215620010df579182015b82811115620010de578251825591602001919060010190620010c1565b5b509050620010ee91906200114c565b5090565b826040810192821562001139579160200282015b82811115620011385782518290805190602001906200112792919062001061565b509160200191906001019062001106565b5b5090506200114891906200116b565b5090565b5b80821115620011675760008160009055506001016200114d565b5090565b5b808211156200118f576000818162001185919062001193565b506001016200116c565b5090565b508054620011a190620011d9565b6000825580601f10620011b55750620011d6565b601f016020900490600052602060002090810190620011d591906200114c565b5b50565b60006002820490506001821680620011f257607f821691505b602082108114156200120957620012086200120f565b5b50919050565b7f4e487b7100000000000000000000000000000000000000000000000000000000600052602260045260246000fd5b61152a806200124e6000396000f3fe608060405234801561001057600080fd5b506004361061009d5760003560e01c8063715018a611610066578063715018a61461016e57806381612ceb146101785780638da5cb5b1461019657806392348b22146101b4578063f2fde38b146101d25761009d565b8062a85d69146100a257806301ffc9a7146100c057806306fdde03146100f0578063316df61e1461010e57806343c5820c1461013e575b600080fd5b6100aa6101ee565b6040516100b79190610ee6565b60405180910390f35b6100da60048036038101906100d59190610a71565b6101f7565b6040516100e79190610e10565b60405180910390f35b6100f8610271565b6040516101059190610e84565b60405180910390f35b61012860048036038101906101239190610a9a565b6102ae565b6040516101359190610e84565b60405180910390f35b61015860048036038101906101539190610a9a565b6102e9565b6040516101659190610e62565b60405180910390f35b610176610501565b005b610180610515565b60405161018d9190610e84565b60405180910390f35b61019e610552565b6040516101ab9190610df5565b60405180910390f35b6101bc610561565b6040516101c99190610e84565b60405180910390f35b6101ec60048036038101906101e79190610a48565b610581565b005b60006040905090565b60007fea0d9bea000000000000000000000000000000000000000000000000000000007bffffffffffffffffffffffffffffffffffffffffffffffffffffffff1916827bffffffffffffffffffffffffffffffffffffffffffffffffffffffff1916148061026a575061026982610605565b5b9050919050565b60606040518060400160405280601181526020017f4d6f6e6f20506978656c20477269642038000000000000000000000000000000815250905090565b60606102c26102bd84846102e9565b61066f565b6040516020016102d29190610dd3565b604051602081830303815290604052905092915050565b6060600060405180602001604052806000815250905060005b60408110156104d75781600160038360408110610348577f4e487b7100000000000000000000000000000000000000000000000000000000600052603260045260246000fd5b0173__$8d2f2c422d7739f572e222809bbf6b68c3$__635f47386a89898781811061039c577f4e487b7100000000000000000000000000000000000000000000000000000000600052603260045260246000fd5b9050013560f81c60f81b8a8a888181106103df577f4e487b7100000000000000000000000000000000000000000000000000000000600052603260045260246000fd5b9050013560f81c60f81b8b8b89818110610422577f4e487b7100000000000000000000000000000000000000000000000000000000600052603260045260246000fd5b9050013560f81c60f81b6040518463ffffffff1660e01b815260040161044a93929190610e2b565b60006040518083038186803b15801561046257600080fd5b505af4158015610476573d6000803e3d6000fd5b505050506040513d6000823e3d601f19601f8201168201806040525081019061049f9190610adf565b60026040516020016104b5959493929190610d50565b6040516020818303038152906040529150806104d0906111c6565b9050610302565b50806040516020016104e99190610da6565b60405160208183030381529060405291505092915050565b6105096107f9565b6105136000610877565b565b60606040518060400160405280600581526020017f696d616765000000000000000000000000000000000000000000000000000000815250905090565b600061055c61093b565b905090565b606060405180608001604052806042815260200161147360429139905090565b6105896107f9565b600073ffffffffffffffffffffffffffffffffffffffff168173ffffffffffffffffffffffffffffffffffffffff1614156105f9576040517f08c379a00000000000000000000000000000000000000000000000000000000081526004016105f090610ea6565b60405180910390fd5b61060281610877565b50565b60007f01ffc9a7000000000000000000000000000000000000000000000000000000007bffffffffffffffffffffffffffffffffffffffffffffffffffffffff1916827bffffffffffffffffffffffffffffffffffffffffffffffffffffffff1916149050919050565b6060600082511415610692576040518060200160405280600081525090506107f4565b60006040518060600160405280604081526020016114b560409139905060006003600285516106c19190610faf565b6106cb9190611005565b60046106d79190611036565b67ffffffffffffffff811115610716577f4e487b7100000000000000000000000000000000000000000000000000000000600052604160045260246000fd5b6040519080825280601f01601f1916602001820160405280156107485781602001600182028036833780820191505090505b509050600182016020820185865187015b808210156107b4576003820191508151603f8160121c168501518453600184019350603f81600c1c168501518453600184019350603f8160061c168501518453600184019350603f8116850151845360018401935050610759565b50506003865106600181146107d057600281146107e3576107eb565b603d6001830353603d60028303536107eb565b603d60018303535b50505080925050505b919050565b610801610964565b73ffffffffffffffffffffffffffffffffffffffff1661081f610552565b73ffffffffffffffffffffffffffffffffffffffff1614610875576040517f08c379a000000000000000000000000000000000000000000000000000000000815260040161086c90610ec6565b60405180910390fd5b565b60008060009054906101000a900473ffffffffffffffffffffffffffffffffffffffff169050816000806101000a81548173ffffffffffffffffffffffffffffffffffffffff021916908373ffffffffffffffffffffffffffffffffffffffff1602179055508173ffffffffffffffffffffffffffffffffffffffff168173ffffffffffffffffffffffffffffffffffffffff167f8be0079c531659141344cd1fd0a4f28419497f9722a3daafe3b4186f6b6457e060405160405180910390a35050565b60008060009054906101000a900473ffffffffffffffffffffffffffffffffffffffff16905090565b600033905090565b600061097f61097a84610f26565b610f01565b90508281526020810184848401111561099757600080fd5b6109a2848285611130565b509392505050565b6000813590506109b981611444565b92915050565b6000813590506109ce8161145b565b92915050565b60008083601f8401126109e657600080fd5b8235905067ffffffffffffffff8111156109ff57600080fd5b602083019150836001820283011115610a1757600080fd5b9250929050565b600082601f830112610a2f57600080fd5b8151610a3f84826020860161096c565b91505092915050565b600060208284031215610a5a57600080fd5b6000610a68848285016109aa565b91505092915050565b600060208284031215610a8357600080fd5b6000610a91848285016109bf565b91505092915050565b60008060208385031215610aad57600080fd5b600083013567ffffffffffffffff811115610ac757600080fd5b610ad3858286016109d4565b92509250509250929050565b600060208284031215610af157600080fd5b600082015167ffffffffffffffff811115610b0b57600080fd5b610b1784828501610a1e565b91505092915050565b610b2981611090565b82525050565b610b38816110a2565b82525050565b610b47816110ae565b82525050565b6000610b5882610f6c565b610b628185610f82565b9350610b72818560208601611130565b610b7b816112cb565b840191505092915050565b6000610b9182610f77565b610b9b8185610f93565b9350610bab818560208601611130565b610bb4816112cb565b840191505092915050565b6000610bca82610f77565b610bd48185610fa4565b9350610be4818560208601611130565b80840191505092915050565b60008154610bfd81611163565b610c078186610fa4565b94506001821660008114610c225760018114610c3357610c66565b60ff19831686528186019350610c66565b610c3c85610f57565b60005b83811015610c5e57815481890152600182019150602081019050610c3f565b838801955050505b50505092915050565b6000610c7c602683610f93565b9150610c87826112dc565b604082019050919050565b6000610c9f600783610fa4565b9150610caa8261132b565b600782019050919050565b6000610cc2605883610fa4565b9150610ccd82611354565b605882019050919050565b6000610ce5602083610f93565b9150610cf0826113c9565b602082019050919050565b6000610d08600683610fa4565b9150610d13826113f2565b600682019050919050565b6000610d2b601a83610fa4565b9150610d368261141b565b601a82019050919050565b610d4a81611126565b82525050565b6000610d5c8288610bbf565b9150610d688287610bf0565b9150610d748286610bf0565b9150610d7f82610c92565b9150610d8b8285610bbf565b9150610d978284610bf0565b91508190509695505050505050565b6000610db182610cb5565b9150610dbd8284610bbf565b9150610dc882610cfb565b915081905092915050565b6000610dde82610d1e565b9150610dea8284610bbf565b915081905092915050565b6000602082019050610e0a6000830184610b20565b92915050565b6000602082019050610e256000830184610b2f565b92915050565b6000606082019050610e406000830186610b3e565b610e4d6020830185610b3e565b610e5a6040830184610b3e565b949350505050565b60006020820190508181036000830152610e7c8184610b4d565b905092915050565b60006020820190508181036000830152610e9e8184610b86565b905092915050565b60006020820190508181036000830152610ebf81610c6f565b9050919050565b60006020820190508181036000830152610edf81610cd8565b9050919050565b6000602082019050610efb6000830184610d41565b92915050565b6000610f0b610f1c565b9050610f178282611195565b919050565b6000604051905090565b600067ffffffffffffffff821115610f4157610f4061129c565b5b610f4a826112cb565b9050602081019050919050565b60008190508160005260206000209050919050565b600081519050919050565b600081519050919050565b600082825260208201905092915050565b600082825260208201905092915050565b600081905092915050565b6000610fba82611126565b9150610fc583611126565b9250827fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff03821115610ffa57610ff961120f565b5b828201905092915050565b600061101082611126565b915061101b83611126565b92508261102b5761102a61123e565b5b828204905092915050565b600061104182611126565b915061104c83611126565b9250817fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff04831182151516156110855761108461120f565b5b828202905092915050565b600061109b82611106565b9050919050565b60008115159050919050565b60007fff0000000000000000000000000000000000000000000000000000000000000082169050919050565b60007fffffffff0000000000000000000000000000000000000000000000000000000082169050919050565b600073ffffffffffffffffffffffffffffffffffffffff82169050919050565b6000819050919050565b60005b8381101561114e578082015181840152602081019050611133565b8381111561115d576000848401525b50505050565b6000600282049050600182168061117b57607f821691505b6020821081141561118f5761118e61126d565b5b50919050565b61119e826112cb565b810181811067ffffffffffffffff821117156111bd576111bc61129c565b5b80604052505050565b60006111d182611126565b91507fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff8214156112045761120361120f565b5b600182019050919050565b7f4e487b7100000000000000000000000000000000000000000000000000000000600052601160045260246000fd5b7f4e487b7100000000000000000000000000000000000000000000000000000000600052601260045260246000fd5b7f4e487b7100000000000000000000000000000000000000000000000000000000600052602260045260246000fd5b7f4e487b7100000000000000000000000000000000000000000000000000000000600052604160045260246000fd5b6000601f19601f8301169050919050565b7f4f776e61626c653a206e6577206f776e657220697320746865207a65726f206160008201527f6464726573730000000000000000000000000000000000000000000000000000602082015250565b7f2066696c6c3d2200000000000000000000000000000000000000000000000000600082015250565b7f3c73766720786d6c6e733d22687474703a2f2f7777772e77332e6f72672f323060008201527f30302f737667222077696474683d223822206865696768743d2238222073747960208201527f6c653d226261636b67726f756e643a23463146314631223e0000000000000000604082015250565b7f4f776e61626c653a2063616c6c6572206973206e6f7420746865206f776e6572600082015250565b7f3c2f7376673e0000000000000000000000000000000000000000000000000000600082015250565b7f646174613a696d6167652f7376672b786d6c3b6261736536342c000000000000600082015250565b61144d81611090565b811461145857600080fd5b50565b611464816110da565b811461146f57600080fd5b5056fe697066733a2f2f6261666b7265696736756479323534376c656e32793372786c7272767736666b6e69716461776d626f783664653661366b373773646271376c34714142434445464748494a4b4c4d4e4f505152535455565758595a6162636465666768696a6b6c6d6e6f707172737475767778797a303132333435363738392b2fa2646970667358221220611bf83321423ae389cdae5d05bce101e86155196994972832143cd0266f4b6864736f6c634300080400333c726563742077696474683d22312e303522206865696768743d22312e30352220";
    static readonly abi: ({
        anonymous: boolean;
        inputs: {
            indexed: boolean;
            internalType: string;
            name: string;
            type: string;
        }[];
        name: string;
        type: string;
        outputs?: undefined;
        stateMutability?: undefined;
    } | {
        inputs: {
            internalType: string;
            name: string;
            type: string;
        }[];
        name: string;
        outputs: {
            internalType: string;
            name: string;
            type: string;
        }[];
        stateMutability: string;
        type: string;
        anonymous?: undefined;
    })[];
    static createInterface(): MonoPixelGrid8RendererInterface;
    static connect(address: string, signerOrProvider: Signer | Provider): MonoPixelGrid8Renderer;
}
export interface MonoPixelGrid8RendererLibraryAddresses {
    ["contracts/libraries/SvgUtils.sol:SvgUtils"]: string;
}
export {};
//# sourceMappingURL=MonoPixelGrid8Renderer__factory.d.ts.map