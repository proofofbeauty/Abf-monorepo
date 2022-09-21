import type { Provider, TransactionRequest } from "@ethersproject/providers";
import { ContractFactory, Overrides, Signer } from "ethers";
import type { PromiseOrValue } from "../../../common";
import type { HSLPixelGrid8Renderer, HSLPixelGrid8RendererInterface } from "../../../contracts/renderers/HSLPixelGrid8Renderer";
declare type HSLPixelGrid8RendererConstructorParams = [
    linkLibraryAddresses: HSLPixelGrid8RendererLibraryAddresses,
    signer?: Signer
] | ConstructorParameters<typeof ContractFactory>;
export declare class HSLPixelGrid8Renderer__factory extends ContractFactory {
    constructor(...args: HSLPixelGrid8RendererConstructorParams);
    static linkBytecode(linkLibraryAddresses: HSLPixelGrid8RendererLibraryAddresses): string;
    deploy(overrides?: Overrides & {
        from?: PromiseOrValue<string>;
    }): Promise<HSLPixelGrid8Renderer>;
    getDeployTransaction(overrides?: Overrides & {
        from?: PromiseOrValue<string>;
    }): TransactionRequest;
    attach(address: string): HSLPixelGrid8Renderer;
    connect(signer: Signer): HSLPixelGrid8Renderer__factory;
    static readonly bytecode = "0x608060405260405180606001604052806021815260200162002d6d60219139600190805190602001906200003592919062001061565b506040518060400160405280600481526020017f22202f3e00000000000000000000000000000000000000000000000000000000815250600290805190602001906200008392919062001061565b506040518061080001604052806040518060400160405280600b81526020017f793d22302220783d22302200000000000000000000000000000000000000000081525081526020016040518060400160405280600b81526020017f793d22302220783d22312200000000000000000000000000000000000000000081525081526020016040518060400160405280600b81526020017f793d22302220783d22322200000000000000000000000000000000000000000081525081526020016040518060400160405280600b81526020017f793d22302220783d22332200000000000000000000000000000000000000000081525081526020016040518060400160405280600b81526020017f793d22302220783d22342200000000000000000000000000000000000000000081525081526020016040518060400160405280600b81526020017f793d22302220783d22352200000000000000000000000000000000000000000081525081526020016040518060400160405280600b81526020017f793d22302220783d22362200000000000000000000000000000000000000000081525081526020016040518060400160405280600b81526020017f793d22302220783d22372200000000000000000000000000000000000000000081525081526020016040518060400160405280600b81526020017f793d22312220783d22302200000000000000000000000000000000000000000081525081526020016040518060400160405280600b81526020017f793d22312220783d22312200000000000000000000000000000000000000000081525081526020016040518060400160405280600b81526020017f793d22312220783d22322200000000000000000000000000000000000000000081525081526020016040518060400160405280600b81526020017f793d22312220783d22332200000000000000000000000000000000000000000081525081526020016040518060400160405280600b81526020017f793d22312220783d22342200000000000000000000000000000000000000000081525081526020016040518060400160405280600b81526020017f793d22312220783d22352200000000000000000000000000000000000000000081525081526020016040518060400160405280600b81526020017f793d22312220783d22362200000000000000000000000000000000000000000081525081526020016040518060400160405280600b81526020017f793d22312220783d22372200000000000000000000000000000000000000000081525081526020016040518060400160405280600b81526020017f793d22322220783d22302200000000000000000000000000000000000000000081525081526020016040518060400160405280600b81526020017f793d22322220783d22312200000000000000000000000000000000000000000081525081526020016040518060400160405280600b81526020017f793d22322220783d22322200000000000000000000000000000000000000000081525081526020016040518060400160405280600b81526020017f793d22322220783d22332200000000000000000000000000000000000000000081525081526020016040518060400160405280600b81526020017f793d22322220783d22342200000000000000000000000000000000000000000081525081526020016040518060400160405280600b81526020017f793d22322220783d22352200000000000000000000000000000000000000000081525081526020016040518060400160405280600b81526020017f793d22322220783d22362200000000000000000000000000000000000000000081525081526020016040518060400160405280600b81526020017f793d22322220783d22372200000000000000000000000000000000000000000081525081526020016040518060400160405280600b81526020017f793d22332220783d22302200000000000000000000000000000000000000000081525081526020016040518060400160405280600b81526020017f793d22332220783d22312200000000000000000000000000000000000000000081525081526020016040518060400160405280600b81526020017f793d22332220783d22322200000000000000000000000000000000000000000081525081526020016040518060400160405280600b81526020017f793d22332220783d22332200000000000000000000000000000000000000000081525081526020016040518060400160405280600b81526020017f793d22332220783d22342200000000000000000000000000000000000000000081525081526020016040518060400160405280600b81526020017f793d22332220783d22352200000000000000000000000000000000000000000081525081526020016040518060400160405280600b81526020017f793d22332220783d22362200000000000000000000000000000000000000000081525081526020016040518060400160405280600b81526020017f793d22332220783d22372200000000000000000000000000000000000000000081525081526020016040518060400160405280600b81526020017f793d22342220783d22302200000000000000000000000000000000000000000081525081526020016040518060400160405280600b81526020017f793d22342220783d22312200000000000000000000000000000000000000000081525081526020016040518060400160405280600b81526020017f793d22342220783d22322200000000000000000000000000000000000000000081525081526020016040518060400160405280600b81526020017f793d22342220783d22332200000000000000000000000000000000000000000081525081526020016040518060400160405280600b81526020017f793d22342220783d22342200000000000000000000000000000000000000000081525081526020016040518060400160405280600b81526020017f793d22342220783d22352200000000000000000000000000000000000000000081525081526020016040518060400160405280600b81526020017f793d22342220783d22362200000000000000000000000000000000000000000081525081526020016040518060400160405280600b81526020017f793d22342220783d22372200000000000000000000000000000000000000000081525081526020016040518060400160405280600b81526020017f793d22352220783d22302200000000000000000000000000000000000000000081525081526020016040518060400160405280600b81526020017f793d22352220783d22312200000000000000000000000000000000000000000081525081526020016040518060400160405280600b81526020017f793d22352220783d22322200000000000000000000000000000000000000000081525081526020016040518060400160405280600b81526020017f793d22352220783d22332200000000000000000000000000000000000000000081525081526020016040518060400160405280600b81526020017f793d22352220783d22342200000000000000000000000000000000000000000081525081526020016040518060400160405280600b81526020017f793d22352220783d22352200000000000000000000000000000000000000000081525081526020016040518060400160405280600b81526020017f793d22352220783d22362200000000000000000000000000000000000000000081525081526020016040518060400160405280600b81526020017f793d22352220783d22372200000000000000000000000000000000000000000081525081526020016040518060400160405280600b81526020017f793d22362220783d22302200000000000000000000000000000000000000000081525081526020016040518060400160405280600b81526020017f793d22362220783d22312200000000000000000000000000000000000000000081525081526020016040518060400160405280600b81526020017f793d22362220783d22322200000000000000000000000000000000000000000081525081526020016040518060400160405280600b81526020017f793d22362220783d22332200000000000000000000000000000000000000000081525081526020016040518060400160405280600b81526020017f793d22362220783d22342200000000000000000000000000000000000000000081525081526020016040518060400160405280600b81526020017f793d22362220783d22352200000000000000000000000000000000000000000081525081526020016040518060400160405280600b81526020017f793d22362220783d22362200000000000000000000000000000000000000000081525081526020016040518060400160405280600b81526020017f793d22362220783d22372200000000000000000000000000000000000000000081525081526020016040518060400160405280600b81526020017f793d22372220783d22302200000000000000000000000000000000000000000081525081526020016040518060400160405280600b81526020017f793d22372220783d22312200000000000000000000000000000000000000000081525081526020016040518060400160405280600b81526020017f793d22372220783d22322200000000000000000000000000000000000000000081525081526020016040518060400160405280600b81526020017f793d22372220783d22332200000000000000000000000000000000000000000081525081526020016040518060400160405280600b81526020017f793d22372220783d22342200000000000000000000000000000000000000000081525081526020016040518060400160405280600b81526020017f793d22372220783d22352200000000000000000000000000000000000000000081525081526020016040518060400160405280600b81526020017f793d22372220783d22362200000000000000000000000000000000000000000081525081526020016040518060400160405280600b81526020017f793d22372220783d223722000000000000000000000000000000000000000000815250815250600390604062000f60929190620010f2565b5034801562000f6e57600080fd5b5062000f8f62000f8362000f9560201b60201c565b62000f9d60201b60201c565b6200123e565b600033905090565b60008060009054906101000a900473ffffffffffffffffffffffffffffffffffffffff169050816000806101000a81548173ffffffffffffffffffffffffffffffffffffffff021916908373ffffffffffffffffffffffffffffffffffffffff1602179055508173ffffffffffffffffffffffffffffffffffffffff168173ffffffffffffffffffffffffffffffffffffffff167f8be0079c531659141344cd1fd0a4f28419497f9722a3daafe3b4186f6b6457e060405160405180910390a35050565b8280546200106f90620011d9565b90600052602060002090601f016020900481019282620010935760008555620010df565b82601f10620010ae57805160ff1916838001178555620010df565b82800160010185558215620010df579182015b82811115620010de578251825591602001919060010190620010c1565b5b509050620010ee91906200114c565b5090565b826040810192821562001139579160200282015b82811115620011385782518290805190602001906200112792919062001061565b509160200191906001019062001106565b5b5090506200114891906200116b565b5090565b5b80821115620011675760008160009055506001016200114d565b5090565b5b808211156200118f576000818162001185919062001193565b506001016200116c565b5090565b508054620011a190620011d9565b6000825580601f10620011b55750620011d6565b601f016020900490600052602060002090810190620011d591906200114c565b5b50565b60006002820490506001821680620011f257607f821691505b602082108114156200120957620012086200120f565b5b50919050565b7f4e487b7100000000000000000000000000000000000000000000000000000000600052602260045260246000fd5b611b1f806200124e6000396000f3fe608060405234801561001057600080fd5b506004361061009d5760003560e01c8063715018a611610066578063715018a61461016e57806381612ceb146101785780638da5cb5b1461019657806392348b22146101b4578063f2fde38b146101d25761009d565b8062a85d69146100a257806301ffc9a7146100c057806306fdde03146100f0578063316df61e1461010e57806343c5820c1461013e575b600080fd5b6100aa6101ee565b6040516100b791906112e6565b60405180910390f35b6100da60048036038101906100d59190610d81565b6101f7565b6040516100e791906111d9565b60405180910390f35b6100f8610271565b6040516101059190611284565b60405180910390f35b61012860048036038101906101239190610daa565b6102ae565b6040516101359190611284565b60405180910390f35b61015860048036038101906101539190610daa565b6102e9565b60405161016591906111f4565b60405180910390f35b6101766106b7565b005b6101806106cb565b60405161018d9190611284565b60405180910390f35b61019e610708565b6040516101ab91906111be565b60405180910390f35b6101bc610717565b6040516101c99190611284565b60405180910390f35b6101ec60048036038101906101e79190610d58565b610737565b005b600060c0905090565b60007fea0d9bea000000000000000000000000000000000000000000000000000000007bffffffffffffffffffffffffffffffffffffffffffffffffffffffff1916827bffffffffffffffffffffffffffffffffffffffffffffffffffffffff1916148061026a5750610269826107bb565b5b9050919050565b60606040518060400160405280601081526020017f48534c20506978656c2047726964203800000000000000000000000000000000815250905090565b60606102c26102bd84846102e9565b610825565b6040516020016102d2919061119c565b604051602081830303815290604052905092915050565b6060600060405180602001604052806000815250905060005b604081101561068d5781600160038360408110610348577f4e487b7100000000000000000000000000000000000000000000000000000000600052603260045260246000fd5b016104456004600a61035a9190611433565b73__$8d2f2c422d7739f572e222809bbf6b68c3$__637be7619a60006101688d8d60038c6103889190611551565b8181106103be577f4e487b7100000000000000000000000000000000000000000000000000000000600052603260045260246000fd5b9050013560f81c60f81b6040518463ffffffff1660e01b81526004016103e69392919061124d565b60206040518083038186803b1580156103fe57600080fd5b505af4158015610412573d6000803e3d6000fd5b505050506040513d601f19601f820116820180604052508101906104369190610def565b61044091906113af565b6109af565b61054c6004600a6104569190611433565b73__$8d2f2c422d7739f572e222809bbf6b68c3$__637be7619a600060648e8e600160038e6104859190611551565b61048f9190611359565b8181106104c5577f4e487b7100000000000000000000000000000000000000000000000000000000600052603260045260246000fd5b9050013560f81c60f81b6040518463ffffffff1660e01b81526004016104ed93929190611216565b60206040518083038186803b15801561050557600080fd5b505af4158015610519573d6000803e3d6000fd5b505050506040513d601f19601f8201168201806040525081019061053d9190610def565b61054791906113af565b6109af565b6106536004600a61055d9190611433565b73__$8d2f2c422d7739f572e222809bbf6b68c3$__637be7619a600060648f8f600260038f61058c9190611551565b6105969190611359565b8181106105cc577f4e487b7100000000000000000000000000000000000000000000000000000000600052603260045260246000fd5b9050013560f81c60f81b6040518463ffffffff1660e01b81526004016105f493929190611216565b60206040518083038186803b15801561060c57600080fd5b505af4158015610620573d6000803e3d6000fd5b505050506040513d601f19601f820116820180604052508101906106449190610def565b61064e91906113af565b6109af565b600260405160200161066b97969594939291906110de565b6040516020818303038152906040529150806106869061171a565b9050610302565b508060405160200161069f919061116f565b60405160208183030381529060405291505092915050565b6106bf610b5c565b6106c96000610bda565b565b60606040518060400160405280600581526020017f696d616765000000000000000000000000000000000000000000000000000000815250905090565b6000610712610c9e565b905090565b6060604051806080016040528060428152602001611aa860429139905090565b61073f610b5c565b600073ffffffffffffffffffffffffffffffffffffffff168173ffffffffffffffffffffffffffffffffffffffff1614156107af576040517f08c379a00000000000000000000000000000000000000000000000000000000081526004016107a6906112a6565b60405180910390fd5b6107b881610bda565b50565b60007f01ffc9a7000000000000000000000000000000000000000000000000000000007bffffffffffffffffffffffffffffffffffffffffffffffffffffffff1916827bffffffffffffffffffffffffffffffffffffffffffffffffffffffff1916149050919050565b6060600082511415610848576040518060200160405280600081525090506109aa565b6000604051806060016040528060408152602001611a6860409139905060006003600285516108779190611359565b61088191906113af565b600461088d9190611551565b67ffffffffffffffff8111156108cc577f4e487b7100000000000000000000000000000000000000000000000000000000600052604160045260246000fd5b6040519080825280601f01601f1916602001820160405280156108fe5781602001600182028036833780820191505090505b509050600182016020820185865187015b8082101561096a576003820191508151603f8160121c168501518453600184019350603f81600c1c168501518453600184019350603f8160061c168501518453600184019350603f811685015184536001840193505061090f565b50506003865106600181146109865760028114610999576109a1565b603d6001830353603d60028303536109a1565b603d60018303535b50505080925050505b919050565b606060008214156109f7576040518060400160405280600181526020017f30000000000000000000000000000000000000000000000000000000000000008152509050610b57565b600082905060005b60008214610a29578080610a129061171a565b915050600a82610a2291906113af565b91506109ff565b60008167ffffffffffffffff811115610a6b577f4e487b7100000000000000000000000000000000000000000000000000000000600052604160045260246000fd5b6040519080825280601f01601f191660200182016040528015610a9d5781602001600182028036833780820191505090505b5090505b60008514610b5057600182610ab691906115ab565b9150600a85610ac59190611763565b6030610ad19190611359565b60f81b818381518110610b0d577f4e487b7100000000000000000000000000000000000000000000000000000000600052603260045260246000fd5b60200101907effffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff1916908160001a905350600a85610b4991906113af565b9450610aa1565b8093505050505b919050565b610b64610cc7565b73ffffffffffffffffffffffffffffffffffffffff16610b82610708565b73ffffffffffffffffffffffffffffffffffffffff1614610bd8576040517f08c379a0000000000000000000000000000000000000000000000000000000008152600401610bcf906112c6565b60405180910390fd5b565b60008060009054906101000a900473ffffffffffffffffffffffffffffffffffffffff169050816000806101000a81548173ffffffffffffffffffffffffffffffffffffffff021916908373ffffffffffffffffffffffffffffffffffffffff1602179055508173ffffffffffffffffffffffffffffffffffffffff168173ffffffffffffffffffffffffffffffffffffffff167f8be0079c531659141344cd1fd0a4f28419497f9722a3daafe3b4186f6b6457e060405160405180910390a35050565b60008060009054906101000a900473ffffffffffffffffffffffffffffffffffffffff16905090565b600033905090565b600081359050610cde81611a22565b92915050565b600081359050610cf381611a39565b92915050565b60008083601f840112610d0b57600080fd5b8235905067ffffffffffffffff811115610d2457600080fd5b602083019150836001820283011115610d3c57600080fd5b9250929050565b600081519050610d5281611a50565b92915050565b600060208284031215610d6a57600080fd5b6000610d7884828501610ccf565b91505092915050565b600060208284031215610d9357600080fd5b6000610da184828501610ce4565b91505092915050565b60008060208385031215610dbd57600080fd5b600083013567ffffffffffffffff811115610dd757600080fd5b610de385828601610cf9565b92509250509250929050565b600060208284031215610e0157600080fd5b6000610e0f84828501610d43565b91505092915050565b610e21816115df565b82525050565b610e30816115f1565b82525050565b610e3f816115fd565b82525050565b6000610e5082611316565b610e5a818561132c565b9350610e6a8185602086016116b5565b610e7381611821565b840191505092915050565b610e878161167f565b82525050565b610e9681611691565b82525050565b610ea5816116a3565b82525050565b6000610eb682611321565b610ec0818561133d565b9350610ed08185602086016116b5565b610ed981611821565b840191505092915050565b6000610eef82611321565b610ef9818561134e565b9350610f098185602086016116b5565b80840191505092915050565b60008154610f22816116e8565b610f2c818661134e565b94506001821660008114610f475760018114610f5857610f8b565b60ff19831686528186019350610f8b565b610f6185611301565b60005b83811015610f8357815481890152600182019150602081019050610f64565b838801955050505b50505092915050565b6000610fa160268361133d565b9150610fac8261183f565b604082019050919050565b6000610fc460028361134e565b9150610fcf8261188e565b600282019050919050565b6000610fe760018361134e565b9150610ff2826118b7565b600182019050919050565b600061100a60028361134e565b9150611015826118e0565b600282019050919050565b600061102d600b8361134e565b915061103882611909565b600b82019050919050565b600061105060588361134e565b915061105b82611932565b605882019050919050565b600061107360208361133d565b915061107e826119a7565b602082019050919050565b600061109660068361134e565b91506110a1826119d0565b600682019050919050565b60006110b9601a8361134e565b91506110c4826119f9565b601a82019050919050565b6110d881611675565b82525050565b60006110ea828a610ee4565b91506110f68289610f15565b91506111028288610f15565b915061110d82611020565b91506111198287610ee4565b915061112482610fda565b91506111308286610ee4565b915061113b82610fb7565b91506111478285610ee4565b915061115282610ffd565b915061115e8284610f15565b915081905098975050505050505050565b600061117a82611043565b91506111868284610ee4565b915061119182611089565b915081905092915050565b60006111a7826110ac565b91506111b38284610ee4565b915081905092915050565b60006020820190506111d36000830184610e18565b92915050565b60006020820190506111ee6000830184610e27565b92915050565b6000602082019050818103600083015261120e8184610e45565b905092915050565b600060608201905061122b6000830186610e7e565b6112386020830185610e8d565b6112456040830184610e36565b949350505050565b60006060820190506112626000830186610e7e565b61126f6020830185610e9c565b61127c6040830184610e36565b949350505050565b6000602082019050818103600083015261129e8184610eab565b905092915050565b600060208201905081810360008301526112bf81610f94565b9050919050565b600060208201905081810360008301526112df81611066565b9050919050565b60006020820190506112fb60008301846110cf565b92915050565b60008190508160005260206000209050919050565b600081519050919050565b600081519050919050565b600082825260208201905092915050565b600082825260208201905092915050565b600081905092915050565b600061136482611675565b915061136f83611675565b9250827fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff038211156113a4576113a3611794565b5b828201905092915050565b60006113ba82611675565b91506113c583611675565b9250826113d5576113d46117c3565b5b828204905092915050565b6000808291508390505b600185111561142a5780860481111561140657611405611794565b5b60018516156114155780820291505b808102905061142385611832565b94506113ea565b94509492505050565b600061143e82611675565b915061144983611675565b92506114767fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff848461147e565b905092915050565b60008261148e576001905061154a565b8161149c576000905061154a565b81600181146114b257600281146114bc576114eb565b600191505061154a565b60ff8411156114ce576114cd611794565b5b8360020a9150848211156114e5576114e4611794565b5b5061154a565b5060208310610133831016604e8410600b84101617156115205782820a90508381111561151b5761151a611794565b5b61154a565b61152d84848460016113e0565b9250905081840481111561154457611543611794565b5b81810290505b9392505050565b600061155c82611675565b915061156783611675565b9250817fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff04831182151516156115a05761159f611794565b5b828202905092915050565b60006115b682611675565b91506115c183611675565b9250828210156115d4576115d3611794565b5b828203905092915050565b60006115ea82611655565b9050919050565b60008115159050919050565b60007fff0000000000000000000000000000000000000000000000000000000000000082169050919050565b60007fffffffff0000000000000000000000000000000000000000000000000000000082169050919050565b600073ffffffffffffffffffffffffffffffffffffffff82169050919050565b6000819050919050565b600061168a82611675565b9050919050565b600061169c82611675565b9050919050565b60006116ae82611675565b9050919050565b60005b838110156116d35780820151818401526020810190506116b8565b838111156116e2576000848401525b50505050565b6000600282049050600182168061170057607f821691505b60208210811415611714576117136117f2565b5b50919050565b600061172582611675565b91507fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff82141561175857611757611794565b5b600182019050919050565b600061176e82611675565b915061177983611675565b925082611789576117886117c3565b5b828206905092915050565b7f4e487b7100000000000000000000000000000000000000000000000000000000600052601160045260246000fd5b7f4e487b7100000000000000000000000000000000000000000000000000000000600052601260045260246000fd5b7f4e487b7100000000000000000000000000000000000000000000000000000000600052602260045260246000fd5b6000601f19601f8301169050919050565b60008160011c9050919050565b7f4f776e61626c653a206e6577206f776e657220697320746865207a65726f206160008201527f6464726573730000000000000000000000000000000000000000000000000000602082015250565b7f252c000000000000000000000000000000000000000000000000000000000000600082015250565b7f2c00000000000000000000000000000000000000000000000000000000000000600082015250565b7f2529000000000000000000000000000000000000000000000000000000000000600082015250565b7f2066696c6c3d2268736c28000000000000000000000000000000000000000000600082015250565b7f3c73766720786d6c6e733d22687474703a2f2f7777772e77332e6f72672f323060008201527f30302f737667222077696474683d223822206865696768743d2238222073747960208201527f6c653d226261636b67726f756e643a23463146314631223e0000000000000000604082015250565b7f4f776e61626c653a2063616c6c6572206973206e6f7420746865206f776e6572600082015250565b7f3c2f7376673e0000000000000000000000000000000000000000000000000000600082015250565b7f646174613a696d6167652f7376672b786d6c3b6261736536342c000000000000600082015250565b611a2b816115df565b8114611a3657600080fd5b50565b611a4281611629565b8114611a4d57600080fd5b50565b611a5981611675565b8114611a6457600080fd5b5056fe4142434445464748494a4b4c4d4e4f505152535455565758595a6162636465666768696a6b6c6d6e6f707172737475767778797a303132333435363738392b2f697066733a2f2f6261666b726569687861666e36637a7970626632636b35356e7a636a7374776a7a776a37647779773532716e6978337a6c65326f766e6c64706c79a26469706673582212207488f2ce37e8d45f377af1158b3837ab5445fb19f1d1e5396b71123a9de407db64736f6c634300080400333c726563742077696474683d22312e303522206865696768743d22312e30352220";
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
    static createInterface(): HSLPixelGrid8RendererInterface;
    static connect(address: string, signerOrProvider: Signer | Provider): HSLPixelGrid8Renderer;
}
export interface HSLPixelGrid8RendererLibraryAddresses {
    ["contracts/libraries/SvgUtils.sol:SvgUtils"]: string;
}
export {};
//# sourceMappingURL=HSLPixelGrid8Renderer__factory.d.ts.map