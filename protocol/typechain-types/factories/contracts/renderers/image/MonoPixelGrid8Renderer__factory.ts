/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */
import type { Provider, TransactionRequest } from '@ethersproject/providers';
import { Contract, ContractFactory, Overrides, Signer, utils } from 'ethers';
import type { PromiseOrValue } from '../../../../common';
import type {
  MonoPixelGrid8Renderer,
  MonoPixelGrid8RendererInterface,
} from '../../../../contracts/renderers/image/MonoPixelGrid8Renderer';

const _abi = [
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: 'address',
        name: 'previousOwner',
        type: 'address',
      },
      {
        indexed: true,
        internalType: 'address',
        name: 'newOwner',
        type: 'address',
      },
    ],
    name: 'OwnershipTransferred',
    type: 'event',
  },
  {
    inputs: [],
    name: 'additionalMetadataURI',
    outputs: [
      {
        internalType: 'string',
        name: '',
        type: 'string',
      },
    ],
    stateMutability: 'pure',
    type: 'function',
  },
  {
    inputs: [],
    name: 'name',
    outputs: [
      {
        internalType: 'string',
        name: '',
        type: 'string',
      },
    ],
    stateMutability: 'pure',
    type: 'function',
  },
  {
    inputs: [],
    name: 'owner',
    outputs: [
      {
        internalType: 'address',
        name: '',
        type: 'address',
      },
    ],
    stateMutability: 'view',
    type: 'function',
  },
  {
    inputs: [],
    name: 'propsSize',
    outputs: [
      {
        internalType: 'uint256',
        name: '',
        type: 'uint256',
      },
    ],
    stateMutability: 'pure',
    type: 'function',
  },
  {
    inputs: [
      {
        internalType: 'bytes',
        name: 'props',
        type: 'bytes',
      },
    ],
    name: 'render',
    outputs: [
      {
        internalType: 'string',
        name: '',
        type: 'string',
      },
    ],
    stateMutability: 'view',
    type: 'function',
  },
  {
    inputs: [
      {
        internalType: 'bytes',
        name: 'props',
        type: 'bytes',
      },
    ],
    name: 'renderRaw',
    outputs: [
      {
        internalType: 'bytes',
        name: '',
        type: 'bytes',
      },
    ],
    stateMutability: 'view',
    type: 'function',
  },
  {
    inputs: [],
    name: 'renderType',
    outputs: [
      {
        internalType: 'string',
        name: '',
        type: 'string',
      },
    ],
    stateMutability: 'pure',
    type: 'function',
  },
  {
    inputs: [],
    name: 'renounceOwnership',
    outputs: [],
    stateMutability: 'nonpayable',
    type: 'function',
  },
  {
    inputs: [
      {
        internalType: 'bytes4',
        name: 'interfaceId',
        type: 'bytes4',
      },
    ],
    name: 'supportsInterface',
    outputs: [
      {
        internalType: 'bool',
        name: '',
        type: 'bool',
      },
    ],
    stateMutability: 'view',
    type: 'function',
  },
  {
    inputs: [
      {
        internalType: 'address',
        name: 'newOwner',
        type: 'address',
      },
    ],
    name: 'transferOwnership',
    outputs: [],
    stateMutability: 'nonpayable',
    type: 'function',
  },
];

const _bytecode =
  '0x60806040526040518060600160405280602181526020016200276560219139600190805190602001906200003592919062001061565b506040518060400160405280600481526020017f22202f3e00000000000000000000000000000000000000000000000000000000815250600290805190602001906200008392919062001061565b506040518061080001604052806040518060400160405280600b81526020017f793d22302220783d22302200000000000000000000000000000000000000000081525081526020016040518060400160405280600b81526020017f793d22302220783d22312200000000000000000000000000000000000000000081525081526020016040518060400160405280600b81526020017f793d22302220783d22322200000000000000000000000000000000000000000081525081526020016040518060400160405280600b81526020017f793d22302220783d22332200000000000000000000000000000000000000000081525081526020016040518060400160405280600b81526020017f793d22302220783d22342200000000000000000000000000000000000000000081525081526020016040518060400160405280600b81526020017f793d22302220783d22352200000000000000000000000000000000000000000081525081526020016040518060400160405280600b81526020017f793d22302220783d22362200000000000000000000000000000000000000000081525081526020016040518060400160405280600b81526020017f793d22302220783d22372200000000000000000000000000000000000000000081525081526020016040518060400160405280600b81526020017f793d22312220783d22302200000000000000000000000000000000000000000081525081526020016040518060400160405280600b81526020017f793d22312220783d22312200000000000000000000000000000000000000000081525081526020016040518060400160405280600b81526020017f793d22312220783d22322200000000000000000000000000000000000000000081525081526020016040518060400160405280600b81526020017f793d22312220783d22332200000000000000000000000000000000000000000081525081526020016040518060400160405280600b81526020017f793d22312220783d22342200000000000000000000000000000000000000000081525081526020016040518060400160405280600b81526020017f793d22312220783d22352200000000000000000000000000000000000000000081525081526020016040518060400160405280600b81526020017f793d22312220783d22362200000000000000000000000000000000000000000081525081526020016040518060400160405280600b81526020017f793d22312220783d22372200000000000000000000000000000000000000000081525081526020016040518060400160405280600b81526020017f793d22322220783d22302200000000000000000000000000000000000000000081525081526020016040518060400160405280600b81526020017f793d22322220783d22312200000000000000000000000000000000000000000081525081526020016040518060400160405280600b81526020017f793d22322220783d22322200000000000000000000000000000000000000000081525081526020016040518060400160405280600b81526020017f793d22322220783d22332200000000000000000000000000000000000000000081525081526020016040518060400160405280600b81526020017f793d22322220783d22342200000000000000000000000000000000000000000081525081526020016040518060400160405280600b81526020017f793d22322220783d22352200000000000000000000000000000000000000000081525081526020016040518060400160405280600b81526020017f793d22322220783d22362200000000000000000000000000000000000000000081525081526020016040518060400160405280600b81526020017f793d22322220783d22372200000000000000000000000000000000000000000081525081526020016040518060400160405280600b81526020017f793d22332220783d22302200000000000000000000000000000000000000000081525081526020016040518060400160405280600b81526020017f793d22332220783d22312200000000000000000000000000000000000000000081525081526020016040518060400160405280600b81526020017f793d22332220783d22322200000000000000000000000000000000000000000081525081526020016040518060400160405280600b81526020017f793d22332220783d22332200000000000000000000000000000000000000000081525081526020016040518060400160405280600b81526020017f793d22332220783d22342200000000000000000000000000000000000000000081525081526020016040518060400160405280600b81526020017f793d22332220783d22352200000000000000000000000000000000000000000081525081526020016040518060400160405280600b81526020017f793d22332220783d22362200000000000000000000000000000000000000000081525081526020016040518060400160405280600b81526020017f793d22332220783d22372200000000000000000000000000000000000000000081525081526020016040518060400160405280600b81526020017f793d22342220783d22302200000000000000000000000000000000000000000081525081526020016040518060400160405280600b81526020017f793d22342220783d22312200000000000000000000000000000000000000000081525081526020016040518060400160405280600b81526020017f793d22342220783d22322200000000000000000000000000000000000000000081525081526020016040518060400160405280600b81526020017f793d22342220783d22332200000000000000000000000000000000000000000081525081526020016040518060400160405280600b81526020017f793d22342220783d22342200000000000000000000000000000000000000000081525081526020016040518060400160405280600b81526020017f793d22342220783d22352200000000000000000000000000000000000000000081525081526020016040518060400160405280600b81526020017f793d22342220783d22362200000000000000000000000000000000000000000081525081526020016040518060400160405280600b81526020017f793d22342220783d22372200000000000000000000000000000000000000000081525081526020016040518060400160405280600b81526020017f793d22352220783d22302200000000000000000000000000000000000000000081525081526020016040518060400160405280600b81526020017f793d22352220783d22312200000000000000000000000000000000000000000081525081526020016040518060400160405280600b81526020017f793d22352220783d22322200000000000000000000000000000000000000000081525081526020016040518060400160405280600b81526020017f793d22352220783d22332200000000000000000000000000000000000000000081525081526020016040518060400160405280600b81526020017f793d22352220783d22342200000000000000000000000000000000000000000081525081526020016040518060400160405280600b81526020017f793d22352220783d22352200000000000000000000000000000000000000000081525081526020016040518060400160405280600b81526020017f793d22352220783d22362200000000000000000000000000000000000000000081525081526020016040518060400160405280600b81526020017f793d22352220783d22372200000000000000000000000000000000000000000081525081526020016040518060400160405280600b81526020017f793d22362220783d22302200000000000000000000000000000000000000000081525081526020016040518060400160405280600b81526020017f793d22362220783d22312200000000000000000000000000000000000000000081525081526020016040518060400160405280600b81526020017f793d22362220783d22322200000000000000000000000000000000000000000081525081526020016040518060400160405280600b81526020017f793d22362220783d22332200000000000000000000000000000000000000000081525081526020016040518060400160405280600b81526020017f793d22362220783d22342200000000000000000000000000000000000000000081525081526020016040518060400160405280600b81526020017f793d22362220783d22352200000000000000000000000000000000000000000081525081526020016040518060400160405280600b81526020017f793d22362220783d22362200000000000000000000000000000000000000000081525081526020016040518060400160405280600b81526020017f793d22362220783d22372200000000000000000000000000000000000000000081525081526020016040518060400160405280600b81526020017f793d22372220783d22302200000000000000000000000000000000000000000081525081526020016040518060400160405280600b81526020017f793d22372220783d22312200000000000000000000000000000000000000000081525081526020016040518060400160405280600b81526020017f793d22372220783d22322200000000000000000000000000000000000000000081525081526020016040518060400160405280600b81526020017f793d22372220783d22332200000000000000000000000000000000000000000081525081526020016040518060400160405280600b81526020017f793d22372220783d22342200000000000000000000000000000000000000000081525081526020016040518060400160405280600b81526020017f793d22372220783d22352200000000000000000000000000000000000000000081525081526020016040518060400160405280600b81526020017f793d22372220783d22362200000000000000000000000000000000000000000081525081526020016040518060400160405280600b81526020017f793d22372220783d223722000000000000000000000000000000000000000000815250815250600390604062000f60929190620010f2565b5034801562000f6e57600080fd5b5062000f8f62000f8362000f9560201b60201c565b62000f9d60201b60201c565b6200123e565b600033905090565b60008060009054906101000a900473ffffffffffffffffffffffffffffffffffffffff169050816000806101000a81548173ffffffffffffffffffffffffffffffffffffffff021916908373ffffffffffffffffffffffffffffffffffffffff1602179055508173ffffffffffffffffffffffffffffffffffffffff168173ffffffffffffffffffffffffffffffffffffffff167f8be0079c531659141344cd1fd0a4f28419497f9722a3daafe3b4186f6b6457e060405160405180910390a35050565b8280546200106f90620011d9565b90600052602060002090601f016020900481019282620010935760008555620010df565b82601f10620010ae57805160ff1916838001178555620010df565b82800160010185558215620010df579182015b82811115620010de578251825591602001919060010190620010c1565b5b509050620010ee91906200114c565b5090565b826040810192821562001139579160200282015b82811115620011385782518290805190602001906200112792919062001061565b509160200191906001019062001106565b5b5090506200114891906200116b565b5090565b5b80821115620011675760008160009055506001016200114d565b5090565b5b808211156200118f576000818162001185919062001193565b506001016200116c565b5090565b508054620011a190620011d9565b6000825580601f10620011b55750620011d6565b601f016020900490600052602060002090810190620011d591906200114c565b5b50565b60006002820490506001821680620011f257607f821691505b602082108114156200120957620012086200120f565b5b50919050565b7f4e487b7100000000000000000000000000000000000000000000000000000000600052602260045260246000fd5b611517806200124e6000396000f3fe608060405234801561001057600080fd5b506004361061009d5760003560e01c8063715018a611610066578063715018a61461016e57806381612ceb146101785780638da5cb5b1461019657806392348b22146101b4578063f2fde38b146101d25761009d565b8062a85d69146100a257806301ffc9a7146100c057806306fdde03146100f0578063316df61e1461010e57806343c5820c1461013e575b600080fd5b6100aa6101ee565b6040516100b79190610efc565b60405180910390f35b6100da60048036038101906100d59190610aa8565b6101f7565b6040516100e79190610e26565b60405180910390f35b6100f8610271565b6040516101059190610e9a565b60405180910390f35b61012860048036038101906101239190610ad1565b6102ae565b6040516101359190610e9a565b60405180910390f35b61015860048036038101906101539190610ad1565b610320565b6040516101659190610e78565b60405180910390f35b610176610538565b005b61018061054c565b60405161018d9190610e9a565b60405180910390f35b61019e610589565b6040516101ab9190610e0b565b60405180910390f35b6101bc610598565b6040516101c99190610e9a565b60405180910390f35b6101ec60048036038101906101e79190610a7f565b6105b8565b005b60006040905090565b60007fea0d9bea000000000000000000000000000000000000000000000000000000007bffffffffffffffffffffffffffffffffffffffffffffffffffffffff1916827bffffffffffffffffffffffffffffffffffffffffffffffffffffffff1916148061026a57506102698261063c565b5b9050919050565b60606040518060400160405280600e81526020017f4d6f6e6f506978656c4772696438000000000000000000000000000000000000815250905090565b60606040518060400160405280601a81526020017f646174613a696d6167652f7376672b786d6c3b6261736536342c0000000000008152506102f86102f38585610320565b6106a6565b604051602001610309929190610d64565b604051602081830303815290604052905092915050565b6060600060405180602001604052806000815250905060005b604081101561050e578160016003836040811061037f577f4e487b7100000000000000000000000000000000000000000000000000000000600052603260045260246000fd5b0173__$8d2f2c422d7739f572e222809bbf6b68c3$__635f47386a8989878181106103d3577f4e487b7100000000000000000000000000000000000000000000000000000000600052603260045260246000fd5b9050013560f81c60f81b8a8a88818110610416577f4e487b7100000000000000000000000000000000000000000000000000000000600052603260045260246000fd5b9050013560f81c60f81b8b8b89818110610459577f4e487b7100000000000000000000000000000000000000000000000000000000600052603260045260246000fd5b9050013560f81c60f81b6040518463ffffffff1660e01b815260040161048193929190610e41565b60006040518083038186803b15801561049957600080fd5b505af41580156104ad573d6000803e3d6000fd5b505050506040513d6000823e3d601f19601f820116820180604052508101906104d69190610b16565b60026040516020016104ec959493929190610d88565b604051602081830303815290604052915080610507906111dc565b9050610339565b50806040516020016105209190610dde565b60405160208183030381529060405291505092915050565b610540610830565b61054a60006108ae565b565b60606040518060400160405280600a81526020017f696d6167655f6461746100000000000000000000000000000000000000000000815250905090565b6000610593610972565b905090565b606060405180608001604052806042815260200161146060429139905090565b6105c0610830565b600073ffffffffffffffffffffffffffffffffffffffff168173ffffffffffffffffffffffffffffffffffffffff161415610630576040517f08c379a000000000000000000000000000000000000000000000000000000000815260040161062790610ebc565b60405180910390fd5b610639816108ae565b50565b60007f01ffc9a7000000000000000000000000000000000000000000000000000000007bffffffffffffffffffffffffffffffffffffffffffffffffffffffff1916827bffffffffffffffffffffffffffffffffffffffffffffffffffffffff1916149050919050565b60606000825114156106c95760405180602001604052806000815250905061082b565b60006040518060600160405280604081526020016114a260409139905060006003600285516106f89190610fc5565b610702919061101b565b600461070e919061104c565b67ffffffffffffffff81111561074d577f4e487b7100000000000000000000000000000000000000000000000000000000600052604160045260246000fd5b6040519080825280601f01601f19166020018201604052801561077f5781602001600182028036833780820191505090505b509050600182016020820185865187015b808210156107eb576003820191508151603f8160121c168501518453600184019350603f81600c1c168501518453600184019350603f8160061c168501518453600184019350603f8116850151845360018401935050610790565b5050600386510660018114610807576002811461081a57610822565b603d6001830353603d6002830353610822565b603d60018303535b50505080925050505b919050565b61083861099b565b73ffffffffffffffffffffffffffffffffffffffff16610856610589565b73ffffffffffffffffffffffffffffffffffffffff16146108ac576040517f08c379a00000000000000000000000000000000000000000000000000000000081526004016108a390610edc565b60405180910390fd5b565b60008060009054906101000a900473ffffffffffffffffffffffffffffffffffffffff169050816000806101000a81548173ffffffffffffffffffffffffffffffffffffffff021916908373ffffffffffffffffffffffffffffffffffffffff1602179055508173ffffffffffffffffffffffffffffffffffffffff168173ffffffffffffffffffffffffffffffffffffffff167f8be0079c531659141344cd1fd0a4f28419497f9722a3daafe3b4186f6b6457e060405160405180910390a35050565b60008060009054906101000a900473ffffffffffffffffffffffffffffffffffffffff16905090565b600033905090565b60006109b66109b184610f3c565b610f17565b9050828152602081018484840111156109ce57600080fd5b6109d9848285611146565b509392505050565b6000813590506109f081611431565b92915050565b600081359050610a0581611448565b92915050565b60008083601f840112610a1d57600080fd5b8235905067ffffffffffffffff811115610a3657600080fd5b602083019150836001820283011115610a4e57600080fd5b9250929050565b600082601f830112610a6657600080fd5b8151610a768482602086016109a3565b91505092915050565b600060208284031215610a9157600080fd5b6000610a9f848285016109e1565b91505092915050565b600060208284031215610aba57600080fd5b6000610ac8848285016109f6565b91505092915050565b60008060208385031215610ae457600080fd5b600083013567ffffffffffffffff811115610afe57600080fd5b610b0a85828601610a0b565b92509250509250929050565b600060208284031215610b2857600080fd5b600082015167ffffffffffffffff811115610b4257600080fd5b610b4e84828501610a55565b91505092915050565b610b60816110a6565b82525050565b610b6f816110b8565b82525050565b610b7e816110c4565b82525050565b6000610b8f82610f82565b610b998185610f98565b9350610ba9818560208601611146565b610bb2816112e1565b840191505092915050565b6000610bc882610f8d565b610bd28185610fa9565b9350610be2818560208601611146565b610beb816112e1565b840191505092915050565b6000610c0182610f8d565b610c0b8185610fba565b9350610c1b818560208601611146565b80840191505092915050565b60008154610c3481611179565b610c3e8186610fba565b94506001821660008114610c595760018114610c6a57610c9d565b60ff19831686528186019350610c9d565b610c7385610f6d565b60005b83811015610c9557815481890152600182019150602081019050610c76565b838801955050505b50505092915050565b6000610cb3602683610fa9565b9150610cbe826112f2565b604082019050919050565b6000610cd6600783610fba565b9150610ce182611341565b600782019050919050565b6000610cf9605883610fba565b9150610d048261136a565b605882019050919050565b6000610d1c602083610fa9565b9150610d27826113df565b602082019050919050565b6000610d3f600683610fba565b9150610d4a82611408565b600682019050919050565b610d5e8161113c565b82525050565b6000610d708285610bf6565b9150610d7c8284610bf6565b91508190509392505050565b6000610d948288610bf6565b9150610da08287610c27565b9150610dac8286610c27565b9150610db782610cc9565b9150610dc38285610bf6565b9150610dcf8284610c27565b91508190509695505050505050565b6000610de982610cec565b9150610df58284610bf6565b9150610e0082610d32565b915081905092915050565b6000602082019050610e206000830184610b57565b92915050565b6000602082019050610e3b6000830184610b66565b92915050565b6000606082019050610e566000830186610b75565b610e636020830185610b75565b610e706040830184610b75565b949350505050565b60006020820190508181036000830152610e928184610b84565b905092915050565b60006020820190508181036000830152610eb48184610bbd565b905092915050565b60006020820190508181036000830152610ed581610ca6565b9050919050565b60006020820190508181036000830152610ef581610d0f565b9050919050565b6000602082019050610f116000830184610d55565b92915050565b6000610f21610f32565b9050610f2d82826111ab565b919050565b6000604051905090565b600067ffffffffffffffff821115610f5757610f566112b2565b5b610f60826112e1565b9050602081019050919050565b60008190508160005260206000209050919050565b600081519050919050565b600081519050919050565b600082825260208201905092915050565b600082825260208201905092915050565b600081905092915050565b6000610fd08261113c565b9150610fdb8361113c565b9250827fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff038211156110105761100f611225565b5b828201905092915050565b60006110268261113c565b91506110318361113c565b92508261104157611040611254565b5b828204905092915050565b60006110578261113c565b91506110628361113c565b9250817fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff048311821515161561109b5761109a611225565b5b828202905092915050565b60006110b18261111c565b9050919050565b60008115159050919050565b60007fff0000000000000000000000000000000000000000000000000000000000000082169050919050565b60007fffffffff0000000000000000000000000000000000000000000000000000000082169050919050565b600073ffffffffffffffffffffffffffffffffffffffff82169050919050565b6000819050919050565b60005b83811015611164578082015181840152602081019050611149565b83811115611173576000848401525b50505050565b6000600282049050600182168061119157607f821691505b602082108114156111a5576111a4611283565b5b50919050565b6111b4826112e1565b810181811067ffffffffffffffff821117156111d3576111d26112b2565b5b80604052505050565b60006111e78261113c565b91507fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff82141561121a57611219611225565b5b600182019050919050565b7f4e487b7100000000000000000000000000000000000000000000000000000000600052601160045260246000fd5b7f4e487b7100000000000000000000000000000000000000000000000000000000600052601260045260246000fd5b7f4e487b7100000000000000000000000000000000000000000000000000000000600052602260045260246000fd5b7f4e487b7100000000000000000000000000000000000000000000000000000000600052604160045260246000fd5b6000601f19601f8301169050919050565b7f4f776e61626c653a206e6577206f776e657220697320746865207a65726f206160008201527f6464726573730000000000000000000000000000000000000000000000000000602082015250565b7f2066696c6c3d2200000000000000000000000000000000000000000000000000600082015250565b7f3c73766720786d6c6e733d22687474703a2f2f7777772e77332e6f72672f323060008201527f30302f737667222077696474683d223822206865696768743d2238222073747960208201527f6c653d226261636b67726f756e643a23463146314631223e0000000000000000604082015250565b7f4f776e61626c653a2063616c6c6572206973206e6f7420746865206f776e6572600082015250565b7f3c2f7376673e0000000000000000000000000000000000000000000000000000600082015250565b61143a816110a6565b811461144557600080fd5b50565b611451816110f0565b811461145c57600080fd5b5056fe697066733a2f2f6261666b7265696736756479323534376c656e32793372786c7272767736666b6e69716461776d626f783664653661366b373773646271376c34714142434445464748494a4b4c4d4e4f505152535455565758595a6162636465666768696a6b6c6d6e6f707172737475767778797a303132333435363738392b2fa264697066735822122049fbfd3615280dcfd889d07b3af19da2d18b7fc4814394090a2b868680c47a0b64736f6c634300080400333c726563742077696474683d22312e303522206865696768743d22312e30352220';

type MonoPixelGrid8RendererConstructorParams =
  | [
      linkLibraryAddresses: MonoPixelGrid8RendererLibraryAddresses,
      signer?: Signer,
    ]
  | ConstructorParameters<typeof ContractFactory>;

const isSuperArgs = (
  xs: MonoPixelGrid8RendererConstructorParams,
): xs is ConstructorParameters<typeof ContractFactory> => {
  return (
    typeof xs[0] === 'string' ||
    (Array.isArray as (arg: any) => arg is readonly any[])(xs[0]) ||
    '_isInterface' in xs[0]
  );
};

export class MonoPixelGrid8Renderer__factory extends ContractFactory {
  constructor(...args: MonoPixelGrid8RendererConstructorParams) {
    if (isSuperArgs(args)) {
      super(...args);
    } else {
      const [linkLibraryAddresses, signer] = args;
      super(
        _abi,
        MonoPixelGrid8Renderer__factory.linkBytecode(linkLibraryAddresses),
        signer,
      );
    }
  }

  static linkBytecode(
    linkLibraryAddresses: MonoPixelGrid8RendererLibraryAddresses,
  ): string {
    let linkedBytecode = _bytecode;

    linkedBytecode = linkedBytecode.replace(
      new RegExp('__\\$8d2f2c422d7739f572e222809bbf6b68c3\\$__', 'g'),
      linkLibraryAddresses['contracts/libraries/SvgUtils.sol:SvgUtils']
        .replace(/^0x/, '')
        .toLowerCase(),
    );

    return linkedBytecode;
  }

  override deploy(
    overrides?: Overrides & { from?: PromiseOrValue<string> },
  ): Promise<MonoPixelGrid8Renderer> {
    return super.deploy(overrides || {}) as Promise<MonoPixelGrid8Renderer>;
  }
  override getDeployTransaction(
    overrides?: Overrides & { from?: PromiseOrValue<string> },
  ): TransactionRequest {
    return super.getDeployTransaction(overrides || {});
  }
  override attach(address: string): MonoPixelGrid8Renderer {
    return super.attach(address) as MonoPixelGrid8Renderer;
  }
  override connect(signer: Signer): MonoPixelGrid8Renderer__factory {
    return super.connect(signer) as MonoPixelGrid8Renderer__factory;
  }

  static readonly bytecode = _bytecode;
  static readonly abi = _abi;
  static createInterface(): MonoPixelGrid8RendererInterface {
    return new utils.Interface(_abi) as MonoPixelGrid8RendererInterface;
  }
  static connect(
    address: string,
    signerOrProvider: Signer | Provider,
  ): MonoPixelGrid8Renderer {
    return new Contract(
      address,
      _abi,
      signerOrProvider,
    ) as MonoPixelGrid8Renderer;
  }
}

export interface MonoPixelGrid8RendererLibraryAddresses {
  ['contracts/libraries/SvgUtils.sol:SvgUtils']: string;
}
