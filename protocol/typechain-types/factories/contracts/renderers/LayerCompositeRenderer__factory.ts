/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */
import { Signer, utils, Contract, ContractFactory, Overrides } from "ethers";
import type { Provider, TransactionRequest } from "@ethersproject/providers";
import type { PromiseOrValue } from "../../../common";
import type {
  LayerCompositeRenderer,
  LayerCompositeRendererInterface,
} from "../../../contracts/renderers/LayerCompositeRenderer";

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
        name: "",
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
    inputs: [
      {
        internalType: "address[]",
        name: "renderers",
        type: "address[]",
      },
      {
        internalType: "bytes[]",
        name: "rendererProps",
        type: "bytes[]",
      },
    ],
    name: "encodeProps",
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

const _bytecode =
  "0x608060405234801561001057600080fd5b5061002d61002261003260201b60201c565b61003a60201b60201c565b6100fe565b600033905090565b60008060009054906101000a900473ffffffffffffffffffffffffffffffffffffffff169050816000806101000a81548173ffffffffffffffffffffffffffffffffffffffff021916908373ffffffffffffffffffffffffffffffffffffffff1602179055508173ffffffffffffffffffffffffffffffffffffffff168173ffffffffffffffffffffffffffffffffffffffff167f8be0079c531659141344cd1fd0a4f28419497f9722a3daafe3b4186f6b6457e060405160405180910390a35050565b611d538061010d6000396000f3fe608060405234801561001057600080fd5b50600436106100b35760003560e01c8063715018a611610071578063715018a6146101b45780638da5cb5b146101be57806392348b22146101dc578063b0a2f640146101fa578063effde6db1461022a578063f2fde38b14610248576100b3565b8062a85d69146100b857806301ffc9a7146100d657806306fdde0314610106578063316df61e1461012457806343c5820c146101545780634e8e200214610184575b600080fd5b6100c0610264565b6040516100cd91906114ef565b60405180910390f35b6100f060048036038101906100eb9190610f53565b61028c565b6040516100fd91906113ec565b60405180910390f35b61010e610306565b60405161011b919061144d565b60405180910390f35b61013e60048036038101906101399190610f7c565b610343565b60405161014b919061144d565b60405180910390f35b61016e60048036038101906101699190610f7c565b61037e565b60405161017b919061142b565b60405180910390f35b61019e60048036038101906101999190610ee7565b6105c3565b6040516101ab919061142b565b60405180910390f35b6101bc6106d2565b005b6101c66106e6565b6040516101d391906113d1565b60405180910390f35b6101e46106f5565b6040516101f1919061144d565b60405180910390f35b610214600480360381019061020f9190610f7c565b610715565b604051610221919061144d565b60405180910390f35b61023261072f565b60405161023f919061144d565b60405180910390f35b610262600480360381019061025d9190610ebe565b61076c565b005b60007fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff905090565b60007f3433a79a000000000000000000000000000000000000000000000000000000007bffffffffffffffffffffffffffffffffffffffffffffffffffffffff1916827bffffffffffffffffffffffffffffffffffffffffffffffffffffffff191614806102ff57506102fe826107f0565b5b9050919050565b60606040518060400160405280600f81526020017f4c6179657220436f6d706f736974650000000000000000000000000000000000815250905090565b6060610357610352848461037e565b61085a565b60405160200161036791906113af565b604051602081830303815290604052905092915050565b60608060005b848490508110156105995760006103df86868080601f016020809104026020016040519081016040528093929190818152602001838380828437600081840152601f19601f82011690508083019250505050505050836109e4565b9050600060206014846103f2919061166a565b6103fc919061166a565b9050600061045a88888080601f016020809104026020016040519081016040528093929190818152602001838380828437600081840152601f19601f82011690508083019250505050505050601486610455919061166a565b610a5a565b82610465919061166a565b905084600085146104ab576040518060400160405280600181526020017f2c000000000000000000000000000000000000000000000000000000000000008152506104bc565b604051806020016040528060008152505b8473ffffffffffffffffffffffffffffffffffffffff1663316df61e8b8b879087926104ea93929190611637565b6040518363ffffffff1660e01b8152600401610507929190611407565b60006040518083038186803b15801561051f57600080fd5b505afa158015610533573d6000803e3d6000fd5b505050506040513d6000823e3d601f19601f8201168201806040525081019061055c9190610fc1565b60405160200161056e93929190611325565b6040516020818303038152906040529450809350505050600081610592919061166a565b9050610384565b50806040516020016105ab919061136c565b60405160208183030381529060405291505092915050565b606060005b83518110156106cb578184828151811061060b577f4e487b7100000000000000000000000000000000000000000000000000000000600052603260045260246000fd5b602002602001015184838151811061064c577f4e487b7100000000000000000000000000000000000000000000000000000000600052603260045260246000fd5b60200260200101515185848151811061068e577f4e487b7100000000000000000000000000000000000000000000000000000000600052603260045260246000fd5b60200260200101516040516020016106a994939291906112df565b6040516020818303038152906040529150806106c490611832565b90506105c8565b5092915050565b6106da610ac1565b6106e46000610b3f565b565b60006106f0610c03565b905090565b6060604051806080016040528060428152602001611c9c60429139905090565b606060405180602001604052806000815250905092915050565b60606040518060400160405280600581526020017f696d616765000000000000000000000000000000000000000000000000000000815250905090565b610774610ac1565b600073ffffffffffffffffffffffffffffffffffffffff168173ffffffffffffffffffffffffffffffffffffffff1614156107e4576040517f08c379a00000000000000000000000000000000000000000000000000000000081526004016107db9061146f565b60405180910390fd5b6107ed81610b3f565b50565b60007f01ffc9a7000000000000000000000000000000000000000000000000000000007bffffffffffffffffffffffffffffffffffffffffffffffffffffffff1916827bffffffffffffffffffffffffffffffffffffffffffffffffffffffff1916149050919050565b606060008251141561087d576040518060200160405280600081525090506109df565b6000604051806060016040528060408152602001611cde60409139905060006003600285516108ac919061166a565b6108b691906116c0565b60046108c291906116f1565b67ffffffffffffffff811115610901577f4e487b7100000000000000000000000000000000000000000000000000000000600052604160045260246000fd5b6040519080825280601f01601f1916602001820160405280156109335781602001600182028036833780820191505090505b509050600182016020820185865187015b8082101561099f576003820191508151603f8160121c168501518453600184019350603f81600c1c168501518453600184019350603f8160061c168501518453600184019350603f8116850151845360018401935050610944565b50506003865106600181146109bb57600281146109ce576109d6565b603d6001830353603d60028303536109d6565b603d60018303535b50505080925050505b919050565b60006014826109f3919061166a565b83511015610a36576040517f08c379a0000000000000000000000000000000000000000000000000000000008152600401610a2d906114cf565b60405180910390fd5b60006c01000000000000000000000000836020860101510490508091505092915050565b6000602082610a69919061166a565b83511015610aac576040517f08c379a0000000000000000000000000000000000000000000000000000000008152600401610aa39061148f565b60405180910390fd5b60008260208501015190508091505092915050565b610ac9610c2c565b73ffffffffffffffffffffffffffffffffffffffff16610ae76106e6565b73ffffffffffffffffffffffffffffffffffffffff1614610b3d576040517f08c379a0000000000000000000000000000000000000000000000000000000008152600401610b34906114af565b60405180910390fd5b565b60008060009054906101000a900473ffffffffffffffffffffffffffffffffffffffff169050816000806101000a81548173ffffffffffffffffffffffffffffffffffffffff021916908373ffffffffffffffffffffffffffffffffffffffff1602179055508173ffffffffffffffffffffffffffffffffffffffff168173ffffffffffffffffffffffffffffffffffffffff167f8be0079c531659141344cd1fd0a4f28419497f9722a3daafe3b4186f6b6457e060405160405180910390a35050565b60008060009054906101000a900473ffffffffffffffffffffffffffffffffffffffff16905090565b600033905090565b6000610c47610c428461152f565b61150a565b90508083825260208201905082856020860282011115610c6657600080fd5b60005b85811015610c965781610c7c8882610da2565b845260208401935060208301925050600181019050610c69565b5050509392505050565b6000610cb3610cae8461155b565b61150a565b90508083825260208201905082856020860282011115610cd257600080fd5b60005b85811015610d1c57813567ffffffffffffffff811115610cf457600080fd5b808601610d018982610e6a565b85526020850194506020840193505050600181019050610cd5565b5050509392505050565b6000610d39610d3484611587565b61150a565b905082815260208101848484011115610d5157600080fd5b610d5c8482856117bf565b509392505050565b6000610d77610d72846115b8565b61150a565b905082815260208101848484011115610d8f57600080fd5b610d9a8482856117ce565b509392505050565b600081359050610db181611c6d565b92915050565b600082601f830112610dc857600080fd5b8135610dd8848260208601610c34565b91505092915050565b600082601f830112610df257600080fd5b8135610e02848260208601610ca0565b91505092915050565b600081359050610e1a81611c84565b92915050565b60008083601f840112610e3257600080fd5b8235905067ffffffffffffffff811115610e4b57600080fd5b602083019150836001820283011115610e6357600080fd5b9250929050565b600082601f830112610e7b57600080fd5b8135610e8b848260208601610d26565b91505092915050565b600082601f830112610ea557600080fd5b8151610eb5848260208601610d64565b91505092915050565b600060208284031215610ed057600080fd5b6000610ede84828501610da2565b91505092915050565b60008060408385031215610efa57600080fd5b600083013567ffffffffffffffff811115610f1457600080fd5b610f2085828601610db7565b925050602083013567ffffffffffffffff811115610f3d57600080fd5b610f4985828601610de1565b9150509250929050565b600060208284031215610f6557600080fd5b6000610f7384828501610e0b565b91505092915050565b60008060208385031215610f8f57600080fd5b600083013567ffffffffffffffff811115610fa957600080fd5b610fb585828601610e20565b92509250509250929050565b600060208284031215610fd357600080fd5b600082015167ffffffffffffffff811115610fed57600080fd5b610ff984828501610e94565b91505092915050565b61100b8161174b565b82525050565b61102261101d8261174b565b61187b565b82525050565b6110318161175d565b82525050565b600061104383856115ff565b93506110508385846117bf565b61105983611936565b840190509392505050565b600061106f826115e9565b61107981856115ff565b93506110898185602086016117ce565b61109281611936565b840191505092915050565b60006110a8826115e9565b6110b28185611610565b93506110c28185602086016117ce565b80840191505092915050565b60006110d9826115f4565b6110e3818561161b565b93506110f38185602086016117ce565b6110fc81611936565b840191505092915050565b6000611112826115f4565b61111c818561162c565b935061112c8185602086016117ce565b80840191505092915050565b600061114560048361162c565b915061115082611954565b600482019050919050565b600061116860268361161b565b91506111738261197d565b604082019050919050565b600061118b604a8361162c565b9150611196826119cc565b604a82019050919050565b60006111ae60df8361162c565b91506111b982611a41565b60df82019050919050565b60006111d160018361162c565b91506111dc82611b4e565b600182019050919050565b60006111f460158361161b565b91506111ff82611b77565b602082019050919050565b600061121760208361161b565b915061122282611ba0565b602082019050919050565b600061123a60158361161b565b915061124582611bc9565b602082019050919050565b600061125d60118361162c565b915061126882611bf2565b601182019050919050565b600061128060068361162c565b915061128b82611c1b565b600682019050919050565b60006112a3601a8361162c565b91506112ae82611c44565b601a82019050919050565b6112c2816117b5565b82525050565b6112d96112d4826117b5565b61189f565b82525050565b60006112eb828761109d565b91506112f78286611011565b60148201915061130782856112c8565b602082019150611317828461109d565b915081905095945050505050565b6000611331828661109d565b915061133d8285611107565b915061134882611138565b91506113548284611107565b915061135f826111c4565b9150819050949350505050565b60006113778261117e565b915061138282611250565b915061138e828461109d565b9150611399826111a1565b91506113a482611273565b915081905092915050565b60006113ba82611296565b91506113c68284611107565b915081905092915050565b60006020820190506113e66000830184611002565b92915050565b60006020820190506114016000830184611028565b92915050565b60006020820190508181036000830152611422818486611037565b90509392505050565b600060208201905081810360008301526114458184611064565b905092915050565b6000602082019050818103600083015261146781846110ce565b905092915050565b600060208201905081810360008301526114888161115b565b9050919050565b600060208201905081810360008301526114a8816111e7565b9050919050565b600060208201905081810360008301526114c88161120a565b9050919050565b600060208201905081810360008301526114e88161122d565b9050919050565b600060208201905061150460008301846112b9565b92915050565b6000611514611525565b90506115208282611801565b919050565b6000604051905090565b600067ffffffffffffffff82111561154a57611549611907565b5b602082029050602081019050919050565b600067ffffffffffffffff82111561157657611575611907565b5b602082029050602081019050919050565b600067ffffffffffffffff8211156115a2576115a1611907565b5b6115ab82611936565b9050602081019050919050565b600067ffffffffffffffff8211156115d3576115d2611907565b5b6115dc82611936565b9050602081019050919050565b600081519050919050565b600081519050919050565b600082825260208201905092915050565b600081905092915050565b600082825260208201905092915050565b600081905092915050565b6000808585111561164757600080fd5b8386111561165457600080fd5b6001850283019150848603905094509492505050565b6000611675826117b5565b9150611680836117b5565b9250827fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff038211156116b5576116b46118a9565b5b828201905092915050565b60006116cb826117b5565b91506116d6836117b5565b9250826116e6576116e56118d8565b5b828204905092915050565b60006116fc826117b5565b9150611707836117b5565b9250817fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff04831182151516156117405761173f6118a9565b5b828202905092915050565b600061175682611795565b9050919050565b60008115159050919050565b60007fffffffff0000000000000000000000000000000000000000000000000000000082169050919050565b600073ffffffffffffffffffffffffffffffffffffffff82169050919050565b6000819050919050565b82818337600083830152505050565b60005b838110156117ec5780820151818401526020810190506117d1565b838111156117fb576000848401525b50505050565b61180a82611936565b810181811067ffffffffffffffff8211171561182957611828611907565b5b80604052505050565b600061183d826117b5565b91507fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff8214156118705761186f6118a9565b5b600182019050919050565b60006118868261188d565b9050919050565b600061189882611947565b9050919050565b6000819050919050565b7f4e487b7100000000000000000000000000000000000000000000000000000000600052601160045260246000fd5b7f4e487b7100000000000000000000000000000000000000000000000000000000600052601260045260246000fd5b7f4e487b7100000000000000000000000000000000000000000000000000000000600052604160045260246000fd5b6000601f19601f8301169050919050565b60008160601b9050919050565b7f75726c2800000000000000000000000000000000000000000000000000000000600082015250565b7f4f776e61626c653a206e6577206f776e657220697320746865207a65726f206160008201527f6464726573730000000000000000000000000000000000000000000000000000602082015250565b7f3c73766720786d6c6e733d22687474703a2f2f7777772e77332e6f72672f323060008201527f30302f737667222077696474683d223132303022206865696768743d2231323060208201527f3022207374796c653d2200000000000000000000000000000000000000000000604082015250565b7f3b6261636b67726f756e642d7265706561743a6e6f2d7265706561743b62616360008201527f6b67726f756e642d73697a653a636f6e7461696e3b6261636b67726f756e642d60208201527f706f736974696f6e3a63656e7465723b696d6167652d72656e646572696e673a60408201527f2d7765626b69742d6f7074696d697a652d636f6e74726173743b2d6d732d696e60608201527f746572706f6c6174696f6e2d6d6f64653a6e6561726573742d6e65696768626f60808201527f723b696d6167652d72656e646572696e673a2d6d6f7a2d63726973702d65646760a08201527f65733b696d6167652d72656e646572696e673a706978656c617465643b223e0060c082015250565b7f2900000000000000000000000000000000000000000000000000000000000000600082015250565b7f746f55696e743235365f6f75744f66426f756e64730000000000000000000000600082015250565b7f4f776e61626c653a2063616c6c6572206973206e6f7420746865206f776e6572600082015250565b7f746f416464726573735f6f75744f66426f756e64730000000000000000000000600082015250565b7f6261636b67726f756e642d696d6167653a000000000000000000000000000000600082015250565b7f3c2f7376673e0000000000000000000000000000000000000000000000000000600082015250565b7f646174613a696d6167652f7376672b786d6c3b6261736536342c000000000000600082015250565b611c768161174b565b8114611c8157600080fd5b50565b611c8d81611769565b8114611c9857600080fd5b5056fe697066733a2f2f6261666b726569676a777a7477726f6c7763626b627a336f6d627a6b7678673237363762636b656f62726677646a666f687678676f7a62657076344142434445464748494a4b4c4d4e4f505152535455565758595a6162636465666768696a6b6c6d6e6f707172737475767778797a303132333435363738392b2fa26469706673582212202ed9f2fd40929850b405518cc9cce3cfb812550fe0d993168d99cd5f9913127f64736f6c63430008040033";

type LayerCompositeRendererConstructorParams =
  | [signer?: Signer]
  | ConstructorParameters<typeof ContractFactory>;

const isSuperArgs = (
  xs: LayerCompositeRendererConstructorParams
): xs is ConstructorParameters<typeof ContractFactory> => xs.length > 1;

export class LayerCompositeRenderer__factory extends ContractFactory {
  constructor(...args: LayerCompositeRendererConstructorParams) {
    if (isSuperArgs(args)) {
      super(...args);
    } else {
      super(_abi, _bytecode, args[0]);
    }
  }

  override deploy(
    overrides?: Overrides & { from?: PromiseOrValue<string> }
  ): Promise<LayerCompositeRenderer> {
    return super.deploy(overrides || {}) as Promise<LayerCompositeRenderer>;
  }
  override getDeployTransaction(
    overrides?: Overrides & { from?: PromiseOrValue<string> }
  ): TransactionRequest {
    return super.getDeployTransaction(overrides || {});
  }
  override attach(address: string): LayerCompositeRenderer {
    return super.attach(address) as LayerCompositeRenderer;
  }
  override connect(signer: Signer): LayerCompositeRenderer__factory {
    return super.connect(signer) as LayerCompositeRenderer__factory;
  }

  static readonly bytecode = _bytecode;
  static readonly abi = _abi;
  static createInterface(): LayerCompositeRendererInterface {
    return new utils.Interface(_abi) as LayerCompositeRendererInterface;
  }
  static connect(
    address: string,
    signerOrProvider: Signer | Provider
  ): LayerCompositeRenderer {
    return new Contract(
      address,
      _abi,
      signerOrProvider
    ) as LayerCompositeRenderer;
  }
}
