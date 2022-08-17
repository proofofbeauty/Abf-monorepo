import { Signer, ContractFactory, Overrides } from "ethers";
import type { Provider, TransactionRequest } from "@ethersproject/providers";
import type { PromiseOrValue } from "../../../common";
import type { GifImageRenderer, GifImageRendererInterface } from "../../../contracts/renderers/GifImageRenderer";
declare type GifImageRendererConstructorParams = [signer?: Signer] | ConstructorParameters<typeof ContractFactory>;
export declare class GifImageRenderer__factory extends ContractFactory {
    constructor(...args: GifImageRendererConstructorParams);
    deploy(overrides?: Overrides & {
        from?: PromiseOrValue<string>;
    }): Promise<GifImageRenderer>;
    getDeployTransaction(overrides?: Overrides & {
        from?: PromiseOrValue<string>;
    }): TransactionRequest;
    attach(address: string): GifImageRenderer;
    connect(signer: Signer): GifImageRenderer__factory;
    static readonly bytecode = "0x6080604052607e60015560006002556001600355600260045534801561002457600080fd5b5061004161003661004660201b60201c565b61004e60201b60201c565b610112565b600033905090565b60008060009054906101000a900473ffffffffffffffffffffffffffffffffffffffff169050816000806101000a81548173ffffffffffffffffffffffffffffffffffffffff021916908373ffffffffffffffffffffffffffffffffffffffff1602179055508173ffffffffffffffffffffffffffffffffffffffff168173ffffffffffffffffffffffffffffffffffffffff167f8be0079c531659141344cd1fd0a4f28419497f9722a3daafe3b4186f6b6457e060405160405180910390a35050565b6120f180620001226000396000f3fe608060405234801561001057600080fd5b506004361061010a5760003560e01c8063715018a6116100a2578063a454332111610071578063a454332114610299578063b0a2f640146102b7578063d6ac7434146102e7578063effde6db14610305578063f2fde38b146103235761010a565b8063715018a6146102355780638da5cb5b1461023f57806392348b221461025d5780639f3ab4901461027b5761010a565b80632507de41116100de5780632507de4114610199578063316df61e146101b757806343c5820c146101e75780636e266add146102175761010a565b8062a85d691461010f57806301ffc9a71461012d57806306fdde031461015d578063226aa2171461017b575b600080fd5b61011761033f565b60405161012491906119a2565b60405180910390f35b6101476004803603810190610142919061137e565b610367565b60405161015491906118e3565b60405180910390f35b6101656103e1565b6040516101729190611920565b60405180910390f35b61018361041e565b60405161019091906119a2565b60405180910390f35b6101a1610424565b6040516101ae91906119a2565b60405180910390f35b6101d160048036038101906101cc91906113a7565b61042a565b6040516101de9190611920565b60405180910390f35b61020160048036038101906101fc91906113a7565b610465565b60405161020e91906118fe565b60405180910390f35b61021f61064e565b60405161022c91906118fe565b60405180910390f35b61023d610687565b005b61024761069b565b60405161025491906118c8565b60405180910390f35b6102656106aa565b6040516102729190611920565b60405180910390f35b6102836106ca565b60405161029091906119a2565b60405180910390f35b6102a16106d0565b6040516102ae91906118fe565b60405180910390f35b6102d160048036038101906102cc91906113a7565b610709565b6040516102de9190611920565b60405180910390f35b6102ef6107c1565b6040516102fc91906119a2565b60405180910390f35b61030d6107c7565b60405161031a9190611920565b60405180910390f35b61033d60048036038101906103389190611355565b610804565b005b60007fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff905090565b60007f3433a79a000000000000000000000000000000000000000000000000000000007bffffffffffffffffffffffffffffffffffffffffffffffffffffffff1916827bffffffffffffffffffffffffffffffffffffffffffffffffffffffff191614806103da57506103d982610888565b5b9050919050565b60606040518060400160405280601081526020017f53696e676c65206672616d652067696600000000000000000000000000000000815250905090565b60045481565b60035481565b606061043e6104398484610465565b6108f2565b60405160200161044e919061183d565b604051602081830303815290604052905092915050565b606060006040518060200160405280600081525090506000600385856004548181106104ba577f4e487b7100000000000000000000000000000000000000000000000000000000600052603260045260246000fd5b9050013560f81c60f81b60f81c6104d19190611b56565b60036104dd9190611a94565b60ff1690505b848490508110156105cc576000600154826104fe9190611a3e565b9050600086868490898990508511610516578461051b565b898990505b9261052893929190611a0b565b8080601f016020809104026020016040519081016040528093929190818152602001838380828437600081840152601f19601f8201169050808301925050505050505090508387879050831161057f576001610582565b60025b60ff1682516105919190611a3e565b826040516020016105a493929190611783565b60405160208183030381529060405293505050600154816105c59190611a3e565b90506104e3565b506105d78484610a7c565b6105e18585610b8d565b6040518060400160405280600881526020017f21f90401000000000000000000000000000000000000000000000000000000008152506106218787610cda565b8460405160200161063695949392919061172d565b60405160208183030381529060405291505092915050565b6040518060400160405280600b81526020017f2c0000000080008000000700000000000000000000000000000000000000000081525081565b61068f610d8e565b6106996000610e0c565b565b60006106a5610ed0565b905090565b606060405180608001604052806042815260200161203a60429139905090565b60015481565b6040518060400160405280600881526020017f21f904010000000000000000000000000000000000000000000000000000000081525081565b606060005b600060f81b84848381811061074c577f4e487b7100000000000000000000000000000000000000000000000000000000600052603260045260246000fd5b9050013560f81c60f81b7effffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff19161461079057808061078890611cb4565b91505061070e565b61079981610ef9565b6040516020016107a99190611810565b60405160208183030381529060405291505092915050565b60025481565b60606040518060400160405280600581526020017f696d616765000000000000000000000000000000000000000000000000000000815250905090565b61080c610d8e565b600073ffffffffffffffffffffffffffffffffffffffff168173ffffffffffffffffffffffffffffffffffffffff16141561087c576040517f08c379a000000000000000000000000000000000000000000000000000000000815260040161087390611942565b60405180910390fd5b61088581610e0c565b50565b60007f01ffc9a7000000000000000000000000000000000000000000000000000000007bffffffffffffffffffffffffffffffffffffffffffffffffffffffff1916827bffffffffffffffffffffffffffffffffffffffffffffffffffffffff1916149050919050565b606060008251141561091557604051806020016040528060008152509050610a77565b600060405180606001604052806040815260200161207c60409139905060006003600285516109449190611a3e565b61094e9190611acb565b600461095a9190611afc565b67ffffffffffffffff811115610999577f4e487b7100000000000000000000000000000000000000000000000000000000600052604160045260246000fd5b6040519080825280601f01601f1916602001820160405280156109cb5781602001600182028036833780820191505090505b509050600182016020820185865187015b80821015610a37576003820191508151603f8160121c168501518453600184019350603f81600c1c168501518453600184019350603f8160061c168501518453600184019350603f81168501518453600184019350506109dc565b5050600386510660018114610a535760028114610a6657610a6e565b603d6001830353603d6002830353610a6e565b603d60018303535b50505080925050505b919050565b60608282600254818110610ab9577f4e487b7100000000000000000000000000000000000000000000000000000000600052603260045260246000fd5b9050013560f81c60f81b8383600354818110610afe577f4e487b7100000000000000000000000000000000000000000000000000000000600052603260045260246000fd5b9050013560f81c60f81b610b6460018686600454818110610b48577f4e487b7100000000000000000000000000000000000000000000000000000000600052603260045260246000fd5b9050013560f81c60f81b60f81c610b5f9190611a94565b6110a6565b604051602001610b769392919061185f565b604051602081830303815290604052905092915050565b606060008383600454818110610bcc577f4e487b7100000000000000000000000000000000000000000000000000000000600052603260045260246000fd5b9050013560f81c60f81b60f81c9050600060038260ff16610bf8600185610bf39190611a94565b61124f565b610c029190611b91565b610c0c9190611afc565b67ffffffffffffffff811115610c4b577f4e487b7100000000000000000000000000000000000000000000000000000000600052604160045260246000fd5b6040519080825280601f01601f191660200182016040528015610c7d5781602001600182028036833780820191505090505b5090508484600390600385610c929190611b56565b6003610c9e9190611a94565b60ff1692610cae93929190611a0b565b82604051602001610cc193929190611707565b6040516020818303038152906040529250505092915050565b60608282600254818110610d17577f4e487b7100000000000000000000000000000000000000000000000000000000600052603260045260246000fd5b9050013560f81c60f81b8383600354818110610d5c577f4e487b7100000000000000000000000000000000000000000000000000000000600052603260045260246000fd5b9050013560f81c60f81b604051602001610d779291906117c3565b604051602081830303815290604052905092915050565b610d966112d9565b73ffffffffffffffffffffffffffffffffffffffff16610db461069b565b73ffffffffffffffffffffffffffffffffffffffff1614610e0a576040517f08c379a0000000000000000000000000000000000000000000000000000000008152600401610e0190611962565b60405180910390fd5b565b60008060009054906101000a900473ffffffffffffffffffffffffffffffffffffffff169050816000806101000a81548173ffffffffffffffffffffffffffffffffffffffff021916908373ffffffffffffffffffffffffffffffffffffffff1602179055508173ffffffffffffffffffffffffffffffffffffffff168173ffffffffffffffffffffffffffffffffffffffff167f8be0079c531659141344cd1fd0a4f28419497f9722a3daafe3b4186f6b6457e060405160405180910390a35050565b60008060009054906101000a900473ffffffffffffffffffffffffffffffffffffffff16905090565b60606000821415610f41576040518060400160405280600181526020017f300000000000000000000000000000000000000000000000000000000000000081525090506110a1565b600082905060005b60008214610f73578080610f5c90611cb4565b915050600a82610f6c9190611acb565b9150610f49565b60008167ffffffffffffffff811115610fb5577f4e487b7100000000000000000000000000000000000000000000000000000000600052604160045260246000fd5b6040519080825280601f01601f191660200182016040528015610fe75781602001600182028036833780820191505090505b5090505b6000851461109a576001826110009190611b91565b9150600a8561100f9190611d19565b603061101b9190611a3e565b60f81b818381518110611057577f4e487b7100000000000000000000000000000000000000000000000000000000600052603260045260246000fd5b60200101907effffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff1916908160001a905350600a856110939190611acb565b9450610feb565b8093505050505b919050565b600060808260ff16106110ee576040517f08c379a00000000000000000000000000000000000000000000000000000000081526004016110e590611982565b60405180910390fd5b60408260ff161115611122577ff600000000000000000000000000000000000000000000000000000000000000905061124a565b60208260ff161115611156577ff500000000000000000000000000000000000000000000000000000000000000905061124a565b60108260ff16111561118a577ff400000000000000000000000000000000000000000000000000000000000000905061124a565b60088260ff1611156111be577ff300000000000000000000000000000000000000000000000000000000000000905061124a565b60048260ff1611156111f2577ff200000000000000000000000000000000000000000000000000000000000000905061124a565b60028260ff161115611226577ff100000000000000000000000000000000000000000000000000000000000000905061124a565b7ff00000000000000000000000000000000000000000000000000000000000000090505b919050565b600060408260ff16111561126657608090506112d4565b60208260ff16111561127b57604090506112d4565b60108260ff16111561129057602090506112d4565b60088260ff1611156112a557601090506112d4565b60048260ff1611156112ba57600890506112d4565b60028260ff1611156112cf57600490506112d4565b600290505b919050565b600033905090565b6000813590506112f08161200b565b92915050565b60008135905061130581612022565b92915050565b60008083601f84011261131d57600080fd5b8235905067ffffffffffffffff81111561133657600080fd5b60208301915083600182028301111561134e57600080fd5b9250929050565b60006020828403121561136757600080fd5b6000611375848285016112e1565b91505092915050565b60006020828403121561139057600080fd5b600061139e848285016112f6565b91505092915050565b600080602083850312156113ba57600080fd5b600083013567ffffffffffffffff8111156113d457600080fd5b6113e08582860161130b565b92509250509250929050565b6113f581611bc5565b82525050565b61140481611bd7565b82525050565b61141b61141682611be3565b611cfd565b82525050565b600061142d83856119e4565b935061143a838584611c72565b82840190509392505050565b6000611451826119bd565b61145b81856119d3565b935061146b818560208601611c81565b61147481611da8565b840191505092915050565b600061148a826119bd565b61149481856119e4565b93506114a4818560208601611c81565b80840191505092915050565b60006114bb826119c8565b6114c581856119ef565b93506114d5818560208601611c81565b6114de81611da8565b840191505092915050565b60006114f4826119c8565b6114fe8185611a00565b935061150e818560208601611c81565b80840191505092915050565b60006115276026836119ef565b915061153282611dc6565b604082019050919050565b600061154a600283611a00565b915061155582611e15565b600282019050919050565b600061156d600183611a00565b915061157882611e1e565b600182019050919050565b6000611590600583611a00565b915061159b82611e47565b600582019050919050565b60006115b3600183611a00565b91506115be82611e70565b600182019050919050565b60006115d66020836119ef565b91506115e182611e99565b602082019050919050565b60006115f9600383611a00565b915061160482611ec2565b600382019050919050565b600061161c6024836119ef565b915061162782611ee9565b604082019050919050565b600061163f600183611a00565b915061164a82611f38565b600182019050919050565b6000611662600383611a00565b915061166d82611f41565b600382019050919050565b6000611685602683611a00565b915061169082611f6a565b602682019050919050565b60006116a8601683611a00565b91506116b382611fb9565b601682019050919050565b60006116cb600683611a00565b91506116d682611fe2565b600682019050919050565b6116ea81611c5b565b82525050565b6117016116fc82611c65565b611d07565b82525050565b6000611714828587611421565b9150611720828461147f565b9150819050949350505050565b6000611739828861147f565b9150611745828761147f565b9150611751828661147f565b915061175d828561147f565b9150611769828461147f565b915061177482611655565b91508190509695505050505050565b600061178f828661147f565b915061179b82856116f0565b6001820191506117aa82611560565b91506117b6828461147f565b9150819050949350505050565b60006117ce82611583565b91506117da828561140a565b6001820191506117e982611632565b91506117f5828461140a565b600182019150611804826115ec565b91508190509392505050565b600061181b82611678565b915061182782846114e9565b9150611832826115a6565b915081905092915050565b60006118488261169b565b915061185482846114e9565b915081905092915050565b600061186a826116be565b9150611876828661140a565b60018201915061188582611632565b9150611891828561140a565b6001820191506118a082611632565b91506118ac828461140a565b6001820191506118bb8261153d565b9150819050949350505050565b60006020820190506118dd60008301846113ec565b92915050565b60006020820190506118f860008301846113fb565b92915050565b600060208201905081810360008301526119188184611446565b905092915050565b6000602082019050818103600083015261193a81846114b0565b905092915050565b6000602082019050818103600083015261195b8161151a565b9050919050565b6000602082019050818103600083015261197b816115c9565b9050919050565b6000602082019050818103600083015261199b8161160f565b9050919050565b60006020820190506119b760008301846116e1565b92915050565b600081519050919050565b600081519050919050565b600082825260208201905092915050565b600081905092915050565b600082825260208201905092915050565b600081905092915050565b60008085851115611a1b57600080fd5b83861115611a2857600080fd5b6001850283019150848603905094509492505050565b6000611a4982611c5b565b9150611a5483611c5b565b9250827fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff03821115611a8957611a88611d4a565b5b828201905092915050565b6000611a9f82611c65565b9150611aaa83611c65565b92508260ff03821115611ac057611abf611d4a565b5b828201905092915050565b6000611ad682611c5b565b9150611ae183611c5b565b925082611af157611af0611d79565b5b828204905092915050565b6000611b0782611c5b565b9150611b1283611c5b565b9250817fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff0483118215151615611b4b57611b4a611d4a565b5b828202905092915050565b6000611b6182611c65565b9150611b6c83611c65565b92508160ff0483118215151615611b8657611b85611d4a565b5b828202905092915050565b6000611b9c82611c5b565b9150611ba783611c5b565b925082821015611bba57611bb9611d4a565b5b828203905092915050565b6000611bd082611c3b565b9050919050565b60008115159050919050565b60007fff0000000000000000000000000000000000000000000000000000000000000082169050919050565b60007fffffffff0000000000000000000000000000000000000000000000000000000082169050919050565b600073ffffffffffffffffffffffffffffffffffffffff82169050919050565b6000819050919050565b600060ff82169050919050565b82818337600083830152505050565b60005b83811015611c9f578082015181840152602081019050611c84565b83811115611cae576000848401525b50505050565b6000611cbf82611c5b565b91507fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff821415611cf257611cf1611d4a565b5b600182019050919050565b6000819050919050565b6000611d1282611db9565b9050919050565b6000611d2482611c5b565b9150611d2f83611c5b565b925082611d3f57611d3e611d79565b5b828206905092915050565b7f4e487b7100000000000000000000000000000000000000000000000000000000600052601160045260246000fd5b7f4e487b7100000000000000000000000000000000000000000000000000000000600052601260045260246000fd5b6000601f19601f8301169050919050565b60008160f81b9050919050565b7f4f776e61626c653a206e6577206f776e657220697320746865207a65726f206160008201527f6464726573730000000000000000000000000000000000000000000000000000602082015250565b60008082015250565b7f8000000000000000000000000000000000000000000000000000000000000000600082015250565b7f2c00000000000000000000000000000000000000000000000000000000000000600082015250565b7f7d00000000000000000000000000000000000000000000000000000000000000600082015250565b7f4f776e61626c653a2063616c6c6572206973206e6f7420746865206f776e6572600082015250565b7d070000000000000000000000000000000000000000000000000000000000600082015250565b7f4f6e6c792061206d6178696d756d206f662031323720636f6c6f727320616c6c60008201527f6f77656400000000000000000000000000000000000000000000000000000000602082015250565b60008082015250565b7f81003b0000000000000000000000000000000000000000000000000000000000600082015250565b7f7b2274726169745f74797065223a202244617461204c656e677468222c20227660008201527f616c7565223a0000000000000000000000000000000000000000000000000000602082015250565b7f646174613a696d6167652f6769663b6261736536342c00000000000000000000600082015250565b7f4749463839610000000000000000000000000000000000000000000000000000600082015250565b61201481611bc5565b811461201f57600080fd5b50565b61202b81611c0f565b811461203657600080fd5b5056fe697066733a2f2f6261666b7265696436336e757a79357779346c34326d65766c373364766b6e787078713335647761726a3437676e6d6d73373534696e626e6772614142434445464748494a4b4c4d4e4f505152535455565758595a6162636465666768696a6b6c6d6e6f707172737475767778797a303132333435363738392b2fa26469706673582212207970127b35ca45525e5e7c3ce706e2b8c2365c65a141f40f47d264c60983009b64736f6c63430008040033";
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
    static createInterface(): GifImageRendererInterface;
    static connect(address: string, signerOrProvider: Signer | Provider): GifImageRenderer;
}
export {};
//# sourceMappingURL=GifImageRenderer__factory.d.ts.map