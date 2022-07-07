/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */
import type { Provider, TransactionRequest } from '@ethersproject/providers';
import { Contract, ContractFactory, Overrides, Signer, utils } from 'ethers';
import type { PromiseOrValue } from '../../../common';
import type {
  PixelGrid8Renderer,
  PixelGrid8RendererInterface,
} from "../../../contracts/renderers/PixelGrid8Renderer";

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
  '0x608060405260405180606001604052806021815260200162002ac760219139600190805190602001906200003592919062001061565b506040518060400160405280600481526020017f22202f3e00000000000000000000000000000000000000000000000000000000815250600290805190602001906200008392919062001061565b506040518061080001604052806040518060400160405280600b81526020017f793d22302220783d22302200000000000000000000000000000000000000000081525081526020016040518060400160405280600b81526020017f793d22302220783d22312200000000000000000000000000000000000000000081525081526020016040518060400160405280600b81526020017f793d22302220783d22322200000000000000000000000000000000000000000081525081526020016040518060400160405280600b81526020017f793d22302220783d22332200000000000000000000000000000000000000000081525081526020016040518060400160405280600b81526020017f793d22302220783d22342200000000000000000000000000000000000000000081525081526020016040518060400160405280600b81526020017f793d22302220783d22352200000000000000000000000000000000000000000081525081526020016040518060400160405280600b81526020017f793d22302220783d22362200000000000000000000000000000000000000000081525081526020016040518060400160405280600b81526020017f793d22302220783d22372200000000000000000000000000000000000000000081525081526020016040518060400160405280600b81526020017f793d22312220783d22302200000000000000000000000000000000000000000081525081526020016040518060400160405280600b81526020017f793d22312220783d22312200000000000000000000000000000000000000000081525081526020016040518060400160405280600b81526020017f793d22312220783d22322200000000000000000000000000000000000000000081525081526020016040518060400160405280600b81526020017f793d22312220783d22332200000000000000000000000000000000000000000081525081526020016040518060400160405280600b81526020017f793d22312220783d22342200000000000000000000000000000000000000000081525081526020016040518060400160405280600b81526020017f793d22312220783d22352200000000000000000000000000000000000000000081525081526020016040518060400160405280600b81526020017f793d22312220783d22362200000000000000000000000000000000000000000081525081526020016040518060400160405280600b81526020017f793d22312220783d22372200000000000000000000000000000000000000000081525081526020016040518060400160405280600b81526020017f793d22322220783d22302200000000000000000000000000000000000000000081525081526020016040518060400160405280600b81526020017f793d22322220783d22312200000000000000000000000000000000000000000081525081526020016040518060400160405280600b81526020017f793d22322220783d22322200000000000000000000000000000000000000000081525081526020016040518060400160405280600b81526020017f793d22322220783d22332200000000000000000000000000000000000000000081525081526020016040518060400160405280600b81526020017f793d22322220783d22342200000000000000000000000000000000000000000081525081526020016040518060400160405280600b81526020017f793d22322220783d22352200000000000000000000000000000000000000000081525081526020016040518060400160405280600b81526020017f793d22322220783d22362200000000000000000000000000000000000000000081525081526020016040518060400160405280600b81526020017f793d22322220783d22372200000000000000000000000000000000000000000081525081526020016040518060400160405280600b81526020017f793d22332220783d22302200000000000000000000000000000000000000000081525081526020016040518060400160405280600b81526020017f793d22332220783d22312200000000000000000000000000000000000000000081525081526020016040518060400160405280600b81526020017f793d22332220783d22322200000000000000000000000000000000000000000081525081526020016040518060400160405280600b81526020017f793d22332220783d22332200000000000000000000000000000000000000000081525081526020016040518060400160405280600b81526020017f793d22332220783d22342200000000000000000000000000000000000000000081525081526020016040518060400160405280600b81526020017f793d22332220783d22352200000000000000000000000000000000000000000081525081526020016040518060400160405280600b81526020017f793d22332220783d22362200000000000000000000000000000000000000000081525081526020016040518060400160405280600b81526020017f793d22332220783d22372200000000000000000000000000000000000000000081525081526020016040518060400160405280600b81526020017f793d22342220783d22302200000000000000000000000000000000000000000081525081526020016040518060400160405280600b81526020017f793d22342220783d22312200000000000000000000000000000000000000000081525081526020016040518060400160405280600b81526020017f793d22342220783d22322200000000000000000000000000000000000000000081525081526020016040518060400160405280600b81526020017f793d22342220783d22332200000000000000000000000000000000000000000081525081526020016040518060400160405280600b81526020017f793d22342220783d22342200000000000000000000000000000000000000000081525081526020016040518060400160405280600b81526020017f793d22342220783d22352200000000000000000000000000000000000000000081525081526020016040518060400160405280600b81526020017f793d22342220783d22362200000000000000000000000000000000000000000081525081526020016040518060400160405280600b81526020017f793d22342220783d22372200000000000000000000000000000000000000000081525081526020016040518060400160405280600b81526020017f793d22352220783d22302200000000000000000000000000000000000000000081525081526020016040518060400160405280600b81526020017f793d22352220783d22312200000000000000000000000000000000000000000081525081526020016040518060400160405280600b81526020017f793d22352220783d22322200000000000000000000000000000000000000000081525081526020016040518060400160405280600b81526020017f793d22352220783d22332200000000000000000000000000000000000000000081525081526020016040518060400160405280600b81526020017f793d22352220783d22342200000000000000000000000000000000000000000081525081526020016040518060400160405280600b81526020017f793d22352220783d22352200000000000000000000000000000000000000000081525081526020016040518060400160405280600b81526020017f793d22352220783d22362200000000000000000000000000000000000000000081525081526020016040518060400160405280600b81526020017f793d22352220783d22372200000000000000000000000000000000000000000081525081526020016040518060400160405280600b81526020017f793d22362220783d22302200000000000000000000000000000000000000000081525081526020016040518060400160405280600b81526020017f793d22362220783d22312200000000000000000000000000000000000000000081525081526020016040518060400160405280600b81526020017f793d22362220783d22322200000000000000000000000000000000000000000081525081526020016040518060400160405280600b81526020017f793d22362220783d22332200000000000000000000000000000000000000000081525081526020016040518060400160405280600b81526020017f793d22362220783d22342200000000000000000000000000000000000000000081525081526020016040518060400160405280600b81526020017f793d22362220783d22352200000000000000000000000000000000000000000081525081526020016040518060400160405280600b81526020017f793d22362220783d22362200000000000000000000000000000000000000000081525081526020016040518060400160405280600b81526020017f793d22362220783d22372200000000000000000000000000000000000000000081525081526020016040518060400160405280600b81526020017f793d22372220783d22302200000000000000000000000000000000000000000081525081526020016040518060400160405280600b81526020017f793d22372220783d22312200000000000000000000000000000000000000000081525081526020016040518060400160405280600b81526020017f793d22372220783d22322200000000000000000000000000000000000000000081525081526020016040518060400160405280600b81526020017f793d22372220783d22332200000000000000000000000000000000000000000081525081526020016040518060400160405280600b81526020017f793d22372220783d22342200000000000000000000000000000000000000000081525081526020016040518060400160405280600b81526020017f793d22372220783d22352200000000000000000000000000000000000000000081525081526020016040518060400160405280600b81526020017f793d22372220783d22362200000000000000000000000000000000000000000081525081526020016040518060400160405280600b81526020017f793d22372220783d223722000000000000000000000000000000000000000000815250815250600390604062000f60929190620010f2565b5034801562000f6e57600080fd5b5062000f8f62000f8362000f9560201b60201c565b62000f9d60201b60201c565b6200123e565b600033905090565b60008060009054906101000a900473ffffffffffffffffffffffffffffffffffffffff169050816000806101000a81548173ffffffffffffffffffffffffffffffffffffffff021916908373ffffffffffffffffffffffffffffffffffffffff1602179055508173ffffffffffffffffffffffffffffffffffffffff168173ffffffffffffffffffffffffffffffffffffffff167f8be0079c531659141344cd1fd0a4f28419497f9722a3daafe3b4186f6b6457e060405160405180910390a35050565b8280546200106f90620011d9565b90600052602060002090601f016020900481019282620010935760008555620010df565b82601f10620010ae57805160ff1916838001178555620010df565b82800160010185558215620010df579182015b82811115620010de578251825591602001919060010190620010c1565b5b509050620010ee91906200114c565b5090565b826040810192821562001139579160200282015b82811115620011385782518290805190602001906200112792919062001061565b509160200191906001019062001106565b5b5090506200114891906200116b565b5090565b5b80821115620011675760008160009055506001016200114d565b5090565b5b808211156200118f576000818162001185919062001193565b506001016200116c565b5090565b508054620011a190620011d9565b6000825580601f10620011b55750620011d6565b601f016020900490600052602060002090810190620011d591906200114c565b5b50565b60006002820490506001821680620011f257607f821691505b602082108114156200120957620012086200120f565b5b50919050565b7f4e487b7100000000000000000000000000000000000000000000000000000000600052602260045260246000fd5b611879806200124e6000396000f3fe608060405234801561001057600080fd5b506004361061009d5760003560e01c80638da5cb5b116100665780638da5cb5b1461015a57806392348b2214610178578063b0a2f64014610196578063effde6db146101c6578063f2fde38b146101e45761009d565b8062a85d69146100a257806301ffc9a7146100c0578063316df61e146100f057806343c5820c14610120578063715018a614610150575b600080fd5b6100aa610200565b6040516100b79190611174565b60405180910390f35b6100da60048036038101906100d59190610ce7565b610209565b6040516100e791906110c0565b60405180910390f35b61010a60048036038101906101059190610d10565b610283565b6040516101179190611112565b60405180910390f35b61013a60048036038101906101359190610d10565b6102be565b6040516101479190611112565b60405180910390f35b610158610512565b005b610162610526565b60405161016f91906110a5565b60405180910390f35b610180610535565b60405161018d9190611112565b60405180910390f35b6101b060048036038101906101ab9190610d10565b610555565b6040516101bd9190611112565b60405180910390f35b6101ce61060d565b6040516101db9190611112565b60405180910390f35b6101fe60048036038101906101f99190610cbe565b61064a565b005b600060c0905090565b60007f32ce7999000000000000000000000000000000000000000000000000000000007bffffffffffffffffffffffffffffffffffffffffffffffffffffffff1916827bffffffffffffffffffffffffffffffffffffffffffffffffffffffff1916148061027c575061027b826106ce565b5b9050919050565b606061029761029284846102be565b610738565b6040516020016102a79190611083565b604051602081830303815290604052905092915050565b6060600060405180602001604052806000815250905060005b60408110156104e8578160016003836040811061031d577f4e487b7100000000000000000000000000000000000000000000000000000000600052603260045260246000fd5b0173__$8d2f2c422d7739f572e222809bbf6b68c3$__635f47386a898960038861034791906112a8565b81811061037d577f4e487b7100000000000000000000000000000000000000000000000000000000600052603260045260246000fd5b9050013560f81c60f81b8a8a600160038a61039891906112a8565b6103a29190611221565b8181106103d8577f4e487b7100000000000000000000000000000000000000000000000000000000600052603260045260246000fd5b9050013560f81c60f81b8b8b600260038b6103f391906112a8565b6103fd9190611221565b818110610433577f4e487b7100000000000000000000000000000000000000000000000000000000600052603260045260246000fd5b9050013560f81c60f81b6040518463ffffffff1660e01b815260040161045b939291906110db565b60006040518083038186803b15801561047357600080fd5b505af4158015610487573d6000803e3d6000fd5b505050506040513d6000823e3d601f19601f820116820180604052508101906104b09190610d55565b60026040516020016104c6959493929190610fd3565b6040516020818303038152906040529150806104e19061146c565b90506102d7565b50806040516020016104fa9190611029565b60405160208183030381529060405291505092915050565b61051a6108c2565b6105246000610940565b565b6000610530610a04565b905090565b60606040518060800160405280604281526020016117c260429139905090565b606060005b600060f81b848483818110610598577f4e487b7100000000000000000000000000000000000000000000000000000000600052603260045260246000fd5b9050013560f81c60f81b7effffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff1916146105dc5780806105d49061146c565b91505061055a565b6105e581610a2d565b6040516020016105f59190611056565b60405160208183030381529060405291505092915050565b60606040518060400160405280600581526020017f696d616765000000000000000000000000000000000000000000000000000000815250905090565b6106526108c2565b600073ffffffffffffffffffffffffffffffffffffffff168173ffffffffffffffffffffffffffffffffffffffff1614156106c2576040517f08c379a00000000000000000000000000000000000000000000000000000000081526004016106b990611134565b60405180910390fd5b6106cb81610940565b50565b60007f01ffc9a7000000000000000000000000000000000000000000000000000000007bffffffffffffffffffffffffffffffffffffffffffffffffffffffff1916827bffffffffffffffffffffffffffffffffffffffffffffffffffffffff1916149050919050565b606060008251141561075b576040518060200160405280600081525090506108bd565b6000604051806060016040528060408152602001611804604091399050600060036002855161078a9190611221565b6107949190611277565b60046107a091906112a8565b67ffffffffffffffff8111156107df577f4e487b7100000000000000000000000000000000000000000000000000000000600052604160045260246000fd5b6040519080825280601f01601f1916602001820160405280156108115781602001600182028036833780820191505090505b509050600182016020820185865187015b8082101561087d576003820191508151603f8160121c168501518453600184019350603f81600c1c168501518453600184019350603f8160061c168501518453600184019350603f8116850151845360018401935050610822565b505060038651066001811461089957600281146108ac576108b4565b603d6001830353603d60028303536108b4565b603d60018303535b50505080925050505b919050565b6108ca610bda565b73ffffffffffffffffffffffffffffffffffffffff166108e8610526565b73ffffffffffffffffffffffffffffffffffffffff161461093e576040517f08c379a000000000000000000000000000000000000000000000000000000000815260040161093590611154565b60405180910390fd5b565b60008060009054906101000a900473ffffffffffffffffffffffffffffffffffffffff169050816000806101000a81548173ffffffffffffffffffffffffffffffffffffffff021916908373ffffffffffffffffffffffffffffffffffffffff1602179055508173ffffffffffffffffffffffffffffffffffffffff168173ffffffffffffffffffffffffffffffffffffffff167f8be0079c531659141344cd1fd0a4f28419497f9722a3daafe3b4186f6b6457e060405160405180910390a35050565b60008060009054906101000a900473ffffffffffffffffffffffffffffffffffffffff16905090565b60606000821415610a75576040518060400160405280600181526020017f30000000000000000000000000000000000000000000000000000000000000008152509050610bd5565b600082905060005b60008214610aa7578080610a909061146c565b915050600a82610aa09190611277565b9150610a7d565b60008167ffffffffffffffff811115610ae9577f4e487b7100000000000000000000000000000000000000000000000000000000600052604160045260246000fd5b6040519080825280601f01601f191660200182016040528015610b1b5781602001600182028036833780820191505090505b5090505b60008514610bce57600182610b349190611302565b9150600a85610b4391906114b5565b6030610b4f9190611221565b60f81b818381518110610b8b577f4e487b7100000000000000000000000000000000000000000000000000000000600052603260045260246000fd5b60200101907effffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff1916908160001a905350600a85610bc79190611277565b9450610b1f565b8093505050505b919050565b600033905090565b6000610bf5610bf0846111b4565b61118f565b905082815260208101848484011115610c0d57600080fd5b610c188482856113d6565b509392505050565b600081359050610c2f81611793565b92915050565b600081359050610c44816117aa565b92915050565b60008083601f840112610c5c57600080fd5b8235905067ffffffffffffffff811115610c7557600080fd5b602083019150836001820283011115610c8d57600080fd5b9250929050565b600082601f830112610ca557600080fd5b8151610cb5848260208601610be2565b91505092915050565b600060208284031215610cd057600080fd5b6000610cde84828501610c20565b91505092915050565b600060208284031215610cf957600080fd5b6000610d0784828501610c35565b91505092915050565b60008060208385031215610d2357600080fd5b600083013567ffffffffffffffff811115610d3d57600080fd5b610d4985828601610c4a565b92509250509250929050565b600060208284031215610d6757600080fd5b600082015167ffffffffffffffff811115610d8157600080fd5b610d8d84828501610c94565b91505092915050565b610d9f81611336565b82525050565b610dae81611348565b82525050565b610dbd81611354565b82525050565b6000610dce826111fa565b610dd88185611205565b9350610de88185602086016113d6565b610df1816115a2565b840191505092915050565b6000610e07826111fa565b610e118185611216565b9350610e218185602086016113d6565b80840191505092915050565b60008154610e3a81611409565b610e448186611216565b94506001821660008114610e5f5760018114610e7057610ea3565b60ff19831686528186019350610ea3565b610e79856111e5565b60005b83811015610e9b57815481890152600182019150602081019050610e7c565b838801955050505b50505092915050565b6000610eb9600283611216565b9150610ec4826115b3565b600282019050919050565b6000610edc602683611205565b9150610ee7826115dc565b604082019050919050565b6000610eff600783611216565b9150610f0a8261162b565b600782019050919050565b6000610f22605883611216565b9150610f2d82611654565b605882019050919050565b6000610f45602083611205565b9150610f50826116c9565b602082019050919050565b6000610f68602683611216565b9150610f73826116f2565b602682019050919050565b6000610f8b600683611216565b9150610f9682611741565b600682019050919050565b6000610fae601a83611216565b9150610fb98261176a565b601a82019050919050565b610fcd816113cc565b82525050565b6000610fdf8288610dfc565b9150610feb8287610e2d565b9150610ff78286610e2d565b915061100282610ef2565b915061100e8285610dfc565b915061101a8284610e2d565b91508190509695505050505050565b600061103482610f15565b91506110408284610dfc565b915061104b82610f7e565b915081905092915050565b600061106182610f5b565b915061106d8284610dfc565b915061107882610eac565b915081905092915050565b600061108e82610fa1565b915061109a8284610dfc565b915081905092915050565b60006020820190506110ba6000830184610d96565b92915050565b60006020820190506110d56000830184610da5565b92915050565b60006060820190506110f06000830186610db4565b6110fd6020830185610db4565b61110a6040830184610db4565b949350505050565b6000602082019050818103600083015261112c8184610dc3565b905092915050565b6000602082019050818103600083015261114d81610ecf565b9050919050565b6000602082019050818103600083015261116d81610f38565b9050919050565b60006020820190506111896000830184610fc4565b92915050565b60006111996111aa565b90506111a5828261143b565b919050565b6000604051905090565b600067ffffffffffffffff8211156111cf576111ce611573565b5b6111d8826115a2565b9050602081019050919050565b60008190508160005260206000209050919050565b600081519050919050565b600082825260208201905092915050565b600081905092915050565b600061122c826113cc565b9150611237836113cc565b9250827fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff0382111561126c5761126b6114e6565b5b828201905092915050565b6000611282826113cc565b915061128d836113cc565b92508261129d5761129c611515565b5b828204905092915050565b60006112b3826113cc565b91506112be836113cc565b9250817fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff04831182151516156112f7576112f66114e6565b5b828202905092915050565b600061130d826113cc565b9150611318836113cc565b92508282101561132b5761132a6114e6565b5b828203905092915050565b6000611341826113ac565b9050919050565b60008115159050919050565b60007fff0000000000000000000000000000000000000000000000000000000000000082169050919050565b60007fffffffff0000000000000000000000000000000000000000000000000000000082169050919050565b600073ffffffffffffffffffffffffffffffffffffffff82169050919050565b6000819050919050565b60005b838110156113f45780820151818401526020810190506113d9565b83811115611403576000848401525b50505050565b6000600282049050600182168061142157607f821691505b6020821081141561143557611434611544565b5b50919050565b611444826115a2565b810181811067ffffffffffffffff8211171561146357611462611573565b5b80604052505050565b6000611477826113cc565b91507fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff8214156114aa576114a96114e6565b5b600182019050919050565b60006114c0826113cc565b91506114cb836113cc565b9250826114db576114da611515565b5b828206905092915050565b7f4e487b7100000000000000000000000000000000000000000000000000000000600052601160045260246000fd5b7f4e487b7100000000000000000000000000000000000000000000000000000000600052601260045260246000fd5b7f4e487b7100000000000000000000000000000000000000000000000000000000600052602260045260246000fd5b7f4e487b7100000000000000000000000000000000000000000000000000000000600052604160045260246000fd5b6000601f19601f8301169050919050565b7f7d2c000000000000000000000000000000000000000000000000000000000000600082015250565b7f4f776e61626c653a206e6577206f776e657220697320746865207a65726f206160008201527f6464726573730000000000000000000000000000000000000000000000000000602082015250565b7f2066696c6c3d2200000000000000000000000000000000000000000000000000600082015250565b7f3c73766720786d6c6e733d22687474703a2f2f7777772e77332e6f72672f323060008201527f30302f737667222077696474683d223822206865696768743d2238222073747960208201527f6c653d226261636b67726f756e643a23463146314631223e0000000000000000604082015250565b7f4f776e61626c653a2063616c6c6572206973206e6f7420746865206f776e6572600082015250565b7f7b2274726169745f74797065223a202244617461204c656e677468222c20227660008201527f616c7565223a0000000000000000000000000000000000000000000000000000602082015250565b7f3c2f7376673e0000000000000000000000000000000000000000000000000000600082015250565b7f646174613a696d6167652f7376672b786d6c3b6261736536342c000000000000600082015250565b61179c81611336565b81146117a757600080fd5b50565b6117b381611380565b81146117be57600080fd5b5056fe697066733a2f2f6261666b72656961627a7776707462377676366a373371656d6166756937657a746969673379776e74696664646570737535337476363362716d754142434445464748494a4b4c4d4e4f505152535455565758595a6162636465666768696a6b6c6d6e6f707172737475767778797a303132333435363738392b2fa26469706673582212204efa4e3dffdd557de5836ab8557d873d65deece2f20b41f457870d9243912e2a64736f6c634300080400333c726563742077696474683d22312e303522206865696768743d22312e30352220';

type PixelGrid8RendererConstructorParams =
  | [signer?: Signer]
  | ConstructorParameters<typeof ContractFactory>;

const isSuperArgs = (
  xs: PixelGrid8RendererConstructorParams
): xs is ConstructorParameters<typeof ContractFactory> => xs.length > 1;

export class PixelGrid8Renderer__factory extends ContractFactory {
  constructor(...args: PixelGrid8RendererConstructorParams) {
    if (isSuperArgs(args)) {
      super(...args);
    } else {
      super(_abi, _bytecode, args[0]);
    }
  }

  override deploy(
    overrides?: Overrides & { from?: PromiseOrValue<string> },
  ): Promise<PixelGrid8Renderer> {
    return super.deploy(overrides || {}) as Promise<PixelGrid8Renderer>;
  }
  override getDeployTransaction(
    overrides?: Overrides & { from?: PromiseOrValue<string> },
  ): TransactionRequest {
    return super.getDeployTransaction(overrides || {});
  }
  override attach(address: string): PixelGrid8Renderer {
    return super.attach(address) as PixelGrid8Renderer;
  }
  override connect(signer: Signer): PixelGrid8Renderer__factory {
    return super.connect(signer) as PixelGrid8Renderer__factory;
  }

  static readonly bytecode = _bytecode;
  static readonly abi = _abi;
  static createInterface(): PixelGrid8RendererInterface {
    return new utils.Interface(_abi) as PixelGrid8RendererInterface;
  }
  static connect(
    address: string,
    signerOrProvider: Signer | Provider
  ): PixelGrid8Renderer {
    return new Contract(address, _abi, signerOrProvider) as PixelGrid8Renderer;
  }
}