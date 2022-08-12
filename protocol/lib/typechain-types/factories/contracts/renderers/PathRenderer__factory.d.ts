import { Signer, ContractFactory, Overrides } from "ethers";
import type { Provider, TransactionRequest } from "@ethersproject/providers";
import type { PromiseOrValue } from "../../../common";
import type { PathRenderer, PathRendererInterface } from "../../../contracts/renderers/PathRenderer";
declare type PathRendererConstructorParams = [signer?: Signer] | ConstructorParameters<typeof ContractFactory>;
export declare class PathRenderer__factory extends ContractFactory {
    constructor(...args: PathRendererConstructorParams);
    deploy(overrides?: Overrides & {
        from?: PromiseOrValue<string>;
    }): Promise<PathRenderer>;
    getDeployTransaction(overrides?: Overrides & {
        from?: PromiseOrValue<string>;
    }): TransactionRequest;
    attach(address: string): PathRenderer;
    connect(signer: Signer): PathRenderer__factory;
    static readonly bytecode = "0x608060405234801561001057600080fd5b5061002d61002261003260201b60201c565b61003a60201b60201c565b6100fe565b600033905090565b60008060009054906101000a900473ffffffffffffffffffffffffffffffffffffffff169050816000806101000a81548173ffffffffffffffffffffffffffffffffffffffff021916908373ffffffffffffffffffffffffffffffffffffffff1602179055508173ffffffffffffffffffffffffffffffffffffffff168173ffffffffffffffffffffffffffffffffffffffff167f8be0079c531659141344cd1fd0a4f28419497f9722a3daafe3b4186f6b6457e060405160405180910390a35050565b6118738061010d6000396000f3fe608060405234801561001057600080fd5b50600436106100a85760003560e01c8063715018a611610071578063715018a6146101795780638da5cb5b1461018357806392348b22146101a1578063b0a2f640146101bf578063effde6db146101ef578063f2fde38b1461020d576100a8565b8062a85d69146100ad57806301ffc9a7146100cb57806306fdde03146100fb578063316df61e1461011957806343c5820c14610149575b600080fd5b6100b5610229565b6040516100c29190611202565b60405180910390f35b6100e560048036038101906100e09190610e07565b610251565b6040516100f29190611163565b60405180910390f35b6101036102cb565b60405161011091906111a0565b60405180910390f35b610133600480360381019061012e9190610e30565b610308565b60405161014091906111a0565b60405180910390f35b610163600480360381019061015e9190610e30565b610343565b604051610170919061117e565b60405180910390f35b610181610711565b005b61018b610725565b6040516101989190611148565b60405180910390f35b6101a9610734565b6040516101b691906111a0565b60405180910390f35b6101d960048036038101906101d49190610e30565b610754565b6040516101e691906111a0565b60405180910390f35b6101f7610795565b60405161020491906111a0565b60405180910390f35b61022760048036038101906102229190610dde565b6107d2565b005b60007fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff905090565b60007f3433a79a000000000000000000000000000000000000000000000000000000007bffffffffffffffffffffffffffffffffffffffffffffffffffffffff1916827bffffffffffffffffffffffffffffffffffffffffffffffffffffffff191614806102c457506102c382610856565b5b9050919050565b60606040518060400160405280600c81526020017f4d696e696d616c20506174680000000000000000000000000000000000000000815250905090565b606061031c6103178484610343565b6108c0565b60405160200161032c9190611126565b604051602081830303815290604052905092915050565b6060600060405180602001604052806000815250905060005b84849050600260038361036f91906112e7565b6103799190611260565b10156106e757604c60f81b858560038461039391906112e7565b8181106103c9577f4e487b7100000000000000000000000000000000000000000000000000000000600052603260045260246000fd5b9050013560f81c60f81b7effffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff191614806104745750604d60f81b858560038461041091906112e7565b818110610446577f4e487b7100000000000000000000000000000000000000000000000000000000600052603260045260246000fd5b9050013560f81c60f81b7effffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff1916145b806104f25750606c60f81b858560038461048e91906112e7565b8181106104c4577f4e487b7100000000000000000000000000000000000000000000000000000000600052603260045260246000fd5b9050013560f81c60f81b7effffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff1916145b806105705750606d60f81b858560038461050c91906112e7565b818110610542577f4e487b7100000000000000000000000000000000000000000000000000000000600052603260045260246000fd5b9050013560f81c60f81b7effffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff1916145b156106d45781858560038461058591906112e7565b8181106105bb577f4e487b7100000000000000000000000000000000000000000000000000000000600052603260045260246000fd5b9050013560f81c60f81b61063a6010888860016003886105db91906112e7565b6105e59190611260565b81811061061b577f4e487b7100000000000000000000000000000000000000000000000000000000600052603260045260246000fd5b9050013560f81c60f81b60f81c60ff166106359190611260565b610a4a565b6106af60108989600260038961065091906112e7565b61065a9190611260565b818110610690577f4e487b7100000000000000000000000000000000000000000000000000000000600052603260045260246000fd5b9050013560f81c60f81b60f81c60ff166106aa9190611260565b610a4a565b6040516020016106c29493929190611074565b60405160208183030381529060405291505b80806106df90611448565b91505061035c565b816040516020016106f891906110cc565b6040516020818303038152906040529250505092915050565b610719610bf7565b6107236000610c75565b565b600061072f610d39565b905090565b60606040518060800160405280604281526020016117fc60429139905090565b606061076e60038484905061076991906112b6565b610a4a565b60405160200161077e91906110f9565b604051602081830303815290604052905092915050565b60606040518060400160405280600581526020017f696d616765000000000000000000000000000000000000000000000000000000815250905090565b6107da610bf7565b600073ffffffffffffffffffffffffffffffffffffffff168173ffffffffffffffffffffffffffffffffffffffff16141561084a576040517f08c379a0000000000000000000000000000000000000000000000000000000008152600401610841906111c2565b60405180910390fd5b61085381610c75565b50565b60007f01ffc9a7000000000000000000000000000000000000000000000000000000007bffffffffffffffffffffffffffffffffffffffffffffffffffffffff1916827bffffffffffffffffffffffffffffffffffffffffffffffffffffffff1916149050919050565b60606000825114156108e357604051806020016040528060008152509050610a45565b60006040518060600160405280604081526020016117bc60409139905060006003600285516109129190611260565b61091c91906112b6565b600461092891906112e7565b67ffffffffffffffff811115610967577f4e487b7100000000000000000000000000000000000000000000000000000000600052604160045260246000fd5b6040519080825280601f01601f1916602001820160405280156109995781602001600182028036833780820191505090505b509050600182016020820185865187015b80821015610a05576003820191508151603f8160121c168501518453600184019350603f81600c1c168501518453600184019350603f8160061c168501518453600184019350603f81168501518453600184019350506109aa565b5050600386510660018114610a215760028114610a3457610a3c565b603d6001830353603d6002830353610a3c565b603d60018303535b50505080925050505b919050565b60606000821415610a92576040518060400160405280600181526020017f30000000000000000000000000000000000000000000000000000000000000008152509050610bf2565b600082905060005b60008214610ac4578080610aad90611448565b915050600a82610abd91906112b6565b9150610a9a565b60008167ffffffffffffffff811115610b06577f4e487b7100000000000000000000000000000000000000000000000000000000600052604160045260246000fd5b6040519080825280601f01601f191660200182016040528015610b385781602001600182028036833780820191505090505b5090505b60008514610beb57600182610b519190611341565b9150600a85610b60919061149b565b6030610b6c9190611260565b60f81b818381518110610ba8577f4e487b7100000000000000000000000000000000000000000000000000000000600052603260045260246000fd5b60200101907effffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff1916908160001a905350600a85610be491906112b6565b9450610b3c565b8093505050505b919050565b610bff610d62565b73ffffffffffffffffffffffffffffffffffffffff16610c1d610725565b73ffffffffffffffffffffffffffffffffffffffff1614610c73576040517f08c379a0000000000000000000000000000000000000000000000000000000008152600401610c6a906111e2565b60405180910390fd5b565b60008060009054906101000a900473ffffffffffffffffffffffffffffffffffffffff169050816000806101000a81548173ffffffffffffffffffffffffffffffffffffffff021916908373ffffffffffffffffffffffffffffffffffffffff1602179055508173ffffffffffffffffffffffffffffffffffffffff168173ffffffffffffffffffffffffffffffffffffffff167f8be0079c531659141344cd1fd0a4f28419497f9722a3daafe3b4186f6b6457e060405160405180910390a35050565b60008060009054906101000a900473ffffffffffffffffffffffffffffffffffffffff16905090565b600033905090565b600081359050610d798161178d565b92915050565b600081359050610d8e816117a4565b92915050565b60008083601f840112610da657600080fd5b8235905067ffffffffffffffff811115610dbf57600080fd5b602083019150836001820283011115610dd757600080fd5b9250929050565b600060208284031215610df057600080fd5b6000610dfe84828501610d6a565b91505092915050565b600060208284031215610e1957600080fd5b6000610e2784828501610d7f565b91505092915050565b60008060208385031215610e4357600080fd5b600083013567ffffffffffffffff811115610e5d57600080fd5b610e6985828601610d94565b92509250509250929050565b610e7e81611375565b82525050565b610e8d81611387565b82525050565b610ea4610e9f82611393565b611491565b82525050565b6000610eb58261121d565b610ebf8185611233565b9350610ecf818560208601611415565b610ed88161152a565b840191505092915050565b6000610eee82611228565b610ef88185611244565b9350610f08818560208601611415565b610f118161152a565b840191505092915050565b6000610f2782611228565b610f318185611255565b9350610f41818560208601611415565b80840191505092915050565b6000610f5a602683611244565b9150610f658261153b565b604082019050919050565b6000610f7d60c083611255565b9150610f888261158a565b60c082019050919050565b6000610fa0600183611255565b9150610fab82611671565b600182019050919050565b6000610fc3600183611255565b9150610fce8261169a565b600182019050919050565b6000610fe6602083611244565b9150610ff1826116c3565b602082019050919050565b6000611009600b83611255565b9150611014826116ec565b600b82019050919050565b600061102c602683611255565b915061103782611715565b602682019050919050565b600061104f601a83611255565b915061105a82611764565b601a82019050919050565b61106e8161140b565b82525050565b60006110808287610f1c565b915061108b82610f93565b91506110978286610e93565b6001820191506110a78285610f1c565b91506110b282610f93565b91506110be8284610f1c565b915081905095945050505050565b60006110d782610f70565b91506110e38284610f1c565b91506110ee82610ffc565b915081905092915050565b60006111048261101f565b91506111108284610f1c565b915061111b82610fb6565b915081905092915050565b600061113182611042565b915061113d8284610f1c565b915081905092915050565b600060208201905061115d6000830184610e75565b92915050565b60006020820190506111786000830184610e84565b92915050565b600060208201905081810360008301526111988184610eaa565b905092915050565b600060208201905081810360008301526111ba8184610ee3565b905092915050565b600060208201905081810360008301526111db81610f4d565b9050919050565b600060208201905081810360008301526111fb81610fd9565b9050919050565b60006020820190506112176000830184611065565b92915050565b600081519050919050565b600081519050919050565b600082825260208201905092915050565b600082825260208201905092915050565b600081905092915050565b600061126b8261140b565b91506112768361140b565b9250827fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff038211156112ab576112aa6114cc565b5b828201905092915050565b60006112c18261140b565b91506112cc8361140b565b9250826112dc576112db6114fb565b5b828204905092915050565b60006112f28261140b565b91506112fd8361140b565b9250817fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff0483118215151615611336576113356114cc565b5b828202905092915050565b600061134c8261140b565b91506113578361140b565b92508282101561136a576113696114cc565b5b828203905092915050565b6000611380826113eb565b9050919050565b60008115159050919050565b60007fff0000000000000000000000000000000000000000000000000000000000000082169050919050565b60007fffffffff0000000000000000000000000000000000000000000000000000000082169050919050565b600073ffffffffffffffffffffffffffffffffffffffff82169050919050565b6000819050919050565b60005b83811015611433578082015181840152602081019050611418565b83811115611442576000848401525b50505050565b60006114538261140b565b91507fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff821415611486576114856114cc565b5b600182019050919050565b6000819050919050565b60006114a68261140b565b91506114b18361140b565b9250826114c1576114c06114fb565b5b828206905092915050565b7f4e487b7100000000000000000000000000000000000000000000000000000000600052601160045260246000fd5b7f4e487b7100000000000000000000000000000000000000000000000000000000600052601260045260246000fd5b6000601f19601f8301169050919050565b7f4f776e61626c653a206e6577206f776e657220697320746865207a65726f206160008201527f6464726573730000000000000000000000000000000000000000000000000000602082015250565b7f3c73766720786d6c6e733d22687474703a2f2f7777772e77332e6f72672f323060008201527f30302f737667222077696474683d2232383822206865696768743d223238382260208201527f207374796c653d226261636b67726f756e643a23463146314631223e3c70617460408201527f682066696c6c3d226e6f6e6522207374726f6b653d22626c61636b222073747260608201527f6f6b652d77696474683d223222207374726f6b652d6c696e656361703d22726f60808201527f756e6422207374726f6b652d6c696e656a6f696e3d22726f756e642220643d2260a082015250565b7f2000000000000000000000000000000000000000000000000000000000000000600082015250565b7f7d00000000000000000000000000000000000000000000000000000000000000600082015250565b7f4f776e61626c653a2063616c6c6572206973206e6f7420746865206f776e6572600082015250565b7f22202f3e203c2f7376673e000000000000000000000000000000000000000000600082015250565b7f7b2274726169745f74797065223a202244617461204c656e677468222c20227660008201527f616c7565223a0000000000000000000000000000000000000000000000000000602082015250565b7f646174613a696d6167652f7376672b786d6c3b6261736536342c000000000000600082015250565b61179681611375565b81146117a157600080fd5b50565b6117ad816113bf565b81146117b857600080fd5b5056fe4142434445464748494a4b4c4d4e4f505152535455565758595a6162636465666768696a6b6c6d6e6f707172737475767778797a303132333435363738392b2f697066733a2f2f6261666b72656968326a6c7878687a6466337a7077766d746f323561706373756f346b656e677332683770616e766f746d356c776f707063653234a26469706673582212208a7ac63c6e5c391a1c3629f0160602c0800e6813638986211d692625e546cb1964736f6c63430008040033";
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
    static createInterface(): PathRendererInterface;
    static connect(address: string, signerOrProvider: Signer | Provider): PathRenderer;
}
export {};
//# sourceMappingURL=PathRenderer__factory.d.ts.map