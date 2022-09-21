/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */
import type { Provider, TransactionRequest } from '@ethersproject/providers';
import { Contract, ContractFactory, Overrides, Signer, utils } from 'ethers';
import type { PromiseOrValue } from '../../../common';
import type {
  PixelGrid8Renderer,
  PixelGrid8RendererInterface,
} from '../../../contracts/renderers/PixelGrid8Renderer';

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
  '0x6080604052604051806060016040528060218152602001620027b460219139600190805190602001906200003592919062001061565b506040518060400160405280600481526020017f22202f3e00000000000000000000000000000000000000000000000000000000815250600290805190602001906200008392919062001061565b506040518061080001604052806040518060400160405280600b81526020017f793d22302220783d22302200000000000000000000000000000000000000000081525081526020016040518060400160405280600b81526020017f793d22302220783d22312200000000000000000000000000000000000000000081525081526020016040518060400160405280600b81526020017f793d22302220783d22322200000000000000000000000000000000000000000081525081526020016040518060400160405280600b81526020017f793d22302220783d22332200000000000000000000000000000000000000000081525081526020016040518060400160405280600b81526020017f793d22302220783d22342200000000000000000000000000000000000000000081525081526020016040518060400160405280600b81526020017f793d22302220783d22352200000000000000000000000000000000000000000081525081526020016040518060400160405280600b81526020017f793d22302220783d22362200000000000000000000000000000000000000000081525081526020016040518060400160405280600b81526020017f793d22302220783d22372200000000000000000000000000000000000000000081525081526020016040518060400160405280600b81526020017f793d22312220783d22302200000000000000000000000000000000000000000081525081526020016040518060400160405280600b81526020017f793d22312220783d22312200000000000000000000000000000000000000000081525081526020016040518060400160405280600b81526020017f793d22312220783d22322200000000000000000000000000000000000000000081525081526020016040518060400160405280600b81526020017f793d22312220783d22332200000000000000000000000000000000000000000081525081526020016040518060400160405280600b81526020017f793d22312220783d22342200000000000000000000000000000000000000000081525081526020016040518060400160405280600b81526020017f793d22312220783d22352200000000000000000000000000000000000000000081525081526020016040518060400160405280600b81526020017f793d22312220783d22362200000000000000000000000000000000000000000081525081526020016040518060400160405280600b81526020017f793d22312220783d22372200000000000000000000000000000000000000000081525081526020016040518060400160405280600b81526020017f793d22322220783d22302200000000000000000000000000000000000000000081525081526020016040518060400160405280600b81526020017f793d22322220783d22312200000000000000000000000000000000000000000081525081526020016040518060400160405280600b81526020017f793d22322220783d22322200000000000000000000000000000000000000000081525081526020016040518060400160405280600b81526020017f793d22322220783d22332200000000000000000000000000000000000000000081525081526020016040518060400160405280600b81526020017f793d22322220783d22342200000000000000000000000000000000000000000081525081526020016040518060400160405280600b81526020017f793d22322220783d22352200000000000000000000000000000000000000000081525081526020016040518060400160405280600b81526020017f793d22322220783d22362200000000000000000000000000000000000000000081525081526020016040518060400160405280600b81526020017f793d22322220783d22372200000000000000000000000000000000000000000081525081526020016040518060400160405280600b81526020017f793d22332220783d22302200000000000000000000000000000000000000000081525081526020016040518060400160405280600b81526020017f793d22332220783d22312200000000000000000000000000000000000000000081525081526020016040518060400160405280600b81526020017f793d22332220783d22322200000000000000000000000000000000000000000081525081526020016040518060400160405280600b81526020017f793d22332220783d22332200000000000000000000000000000000000000000081525081526020016040518060400160405280600b81526020017f793d22332220783d22342200000000000000000000000000000000000000000081525081526020016040518060400160405280600b81526020017f793d22332220783d22352200000000000000000000000000000000000000000081525081526020016040518060400160405280600b81526020017f793d22332220783d22362200000000000000000000000000000000000000000081525081526020016040518060400160405280600b81526020017f793d22332220783d22372200000000000000000000000000000000000000000081525081526020016040518060400160405280600b81526020017f793d22342220783d22302200000000000000000000000000000000000000000081525081526020016040518060400160405280600b81526020017f793d22342220783d22312200000000000000000000000000000000000000000081525081526020016040518060400160405280600b81526020017f793d22342220783d22322200000000000000000000000000000000000000000081525081526020016040518060400160405280600b81526020017f793d22342220783d22332200000000000000000000000000000000000000000081525081526020016040518060400160405280600b81526020017f793d22342220783d22342200000000000000000000000000000000000000000081525081526020016040518060400160405280600b81526020017f793d22342220783d22352200000000000000000000000000000000000000000081525081526020016040518060400160405280600b81526020017f793d22342220783d22362200000000000000000000000000000000000000000081525081526020016040518060400160405280600b81526020017f793d22342220783d22372200000000000000000000000000000000000000000081525081526020016040518060400160405280600b81526020017f793d22352220783d22302200000000000000000000000000000000000000000081525081526020016040518060400160405280600b81526020017f793d22352220783d22312200000000000000000000000000000000000000000081525081526020016040518060400160405280600b81526020017f793d22352220783d22322200000000000000000000000000000000000000000081525081526020016040518060400160405280600b81526020017f793d22352220783d22332200000000000000000000000000000000000000000081525081526020016040518060400160405280600b81526020017f793d22352220783d22342200000000000000000000000000000000000000000081525081526020016040518060400160405280600b81526020017f793d22352220783d22352200000000000000000000000000000000000000000081525081526020016040518060400160405280600b81526020017f793d22352220783d22362200000000000000000000000000000000000000000081525081526020016040518060400160405280600b81526020017f793d22352220783d22372200000000000000000000000000000000000000000081525081526020016040518060400160405280600b81526020017f793d22362220783d22302200000000000000000000000000000000000000000081525081526020016040518060400160405280600b81526020017f793d22362220783d22312200000000000000000000000000000000000000000081525081526020016040518060400160405280600b81526020017f793d22362220783d22322200000000000000000000000000000000000000000081525081526020016040518060400160405280600b81526020017f793d22362220783d22332200000000000000000000000000000000000000000081525081526020016040518060400160405280600b81526020017f793d22362220783d22342200000000000000000000000000000000000000000081525081526020016040518060400160405280600b81526020017f793d22362220783d22352200000000000000000000000000000000000000000081525081526020016040518060400160405280600b81526020017f793d22362220783d22362200000000000000000000000000000000000000000081525081526020016040518060400160405280600b81526020017f793d22362220783d22372200000000000000000000000000000000000000000081525081526020016040518060400160405280600b81526020017f793d22372220783d22302200000000000000000000000000000000000000000081525081526020016040518060400160405280600b81526020017f793d22372220783d22312200000000000000000000000000000000000000000081525081526020016040518060400160405280600b81526020017f793d22372220783d22322200000000000000000000000000000000000000000081525081526020016040518060400160405280600b81526020017f793d22372220783d22332200000000000000000000000000000000000000000081525081526020016040518060400160405280600b81526020017f793d22372220783d22342200000000000000000000000000000000000000000081525081526020016040518060400160405280600b81526020017f793d22372220783d22352200000000000000000000000000000000000000000081525081526020016040518060400160405280600b81526020017f793d22372220783d22362200000000000000000000000000000000000000000081525081526020016040518060400160405280600b81526020017f793d22372220783d223722000000000000000000000000000000000000000000815250815250600390604062000f60929190620010f2565b5034801562000f6e57600080fd5b5062000f8f62000f8362000f9560201b60201c565b62000f9d60201b60201c565b6200123e565b600033905090565b60008060009054906101000a900473ffffffffffffffffffffffffffffffffffffffff169050816000806101000a81548173ffffffffffffffffffffffffffffffffffffffff021916908373ffffffffffffffffffffffffffffffffffffffff1602179055508173ffffffffffffffffffffffffffffffffffffffff168173ffffffffffffffffffffffffffffffffffffffff167f8be0079c531659141344cd1fd0a4f28419497f9722a3daafe3b4186f6b6457e060405160405180910390a35050565b8280546200106f90620011d9565b90600052602060002090601f016020900481019282620010935760008555620010df565b82601f10620010ae57805160ff1916838001178555620010df565b82800160010185558215620010df579182015b82811115620010de578251825591602001919060010190620010c1565b5b509050620010ee91906200114c565b5090565b826040810192821562001139579160200282015b82811115620011385782518290805190602001906200112792919062001061565b509160200191906001019062001106565b5b5090506200114891906200116b565b5090565b5b80821115620011675760008160009055506001016200114d565b5090565b5b808211156200118f576000818162001185919062001193565b506001016200116c565b5090565b508054620011a190620011d9565b6000825580601f10620011b55750620011d6565b601f016020900490600052602060002090810190620011d591906200114c565b5b50565b60006002820490506001821680620011f257607f821691505b602082108114156200120957620012086200120f565b5b50919050565b7f4e487b7100000000000000000000000000000000000000000000000000000000600052602260045260246000fd5b611566806200124e6000396000f3fe608060405234801561001057600080fd5b506004361061009d5760003560e01c8063715018a611610066578063715018a61461016e57806381612ceb146101785780638da5cb5b1461019657806392348b22146101b4578063f2fde38b146101d25761009d565b8062a85d69146100a257806301ffc9a7146100c057806306fdde03146100f0578063316df61e1461010e57806343c5820c1461013e575b600080fd5b6100aa6101ee565b6040516100b79190610f22565b60405180910390f35b6100da60048036038101906100d59190610aad565b6101f7565b6040516100e79190610e4c565b60405180910390f35b6100f8610271565b6040516101059190610ec0565b60405180910390f35b61012860048036038101906101239190610ad6565b6102ae565b6040516101359190610ec0565b60405180910390f35b61015860048036038101906101539190610ad6565b6102e9565b6040516101659190610e9e565b60405180910390f35b61017661053d565b005b610180610551565b60405161018d9190610ec0565b60405180910390f35b61019e61058e565b6040516101ab9190610e31565b60405180910390f35b6101bc61059d565b6040516101c99190610ec0565b60405180910390f35b6101ec60048036038101906101e79190610a84565b6105bd565b005b600060c0905090565b60007fea0d9bea000000000000000000000000000000000000000000000000000000007bffffffffffffffffffffffffffffffffffffffffffffffffffffffff1916827bffffffffffffffffffffffffffffffffffffffffffffffffffffffff1916148061026a575061026982610641565b5b9050919050565b60606040518060400160405280600c81526020017f506978656c204772696420380000000000000000000000000000000000000000815250905090565b60606102c26102bd84846102e9565b6106ab565b6040516020016102d29190610e0f565b604051602081830303815290604052905092915050565b6060600060405180602001604052806000815250905060005b60408110156105135781600160038360408110610348577f4e487b7100000000000000000000000000000000000000000000000000000000600052603260045260246000fd5b0173__$8d2f2c422d7739f572e222809bbf6b68c3$__635f47386a89896003886103729190611072565b8181106103a8577f4e487b7100000000000000000000000000000000000000000000000000000000600052603260045260246000fd5b9050013560f81c60f81b8a8a600160038a6103c39190611072565b6103cd9190610feb565b818110610403577f4e487b7100000000000000000000000000000000000000000000000000000000600052603260045260246000fd5b9050013560f81c60f81b8b8b600260038b61041e9190611072565b6104289190610feb565b81811061045e577f4e487b7100000000000000000000000000000000000000000000000000000000600052603260045260246000fd5b9050013560f81c60f81b6040518463ffffffff1660e01b815260040161048693929190610e67565b60006040518083038186803b15801561049e57600080fd5b505af41580156104b2573d6000803e3d6000fd5b505050506040513d6000823e3d601f19601f820116820180604052508101906104db9190610b1b565b60026040516020016104f1959493929190610d8c565b60405160208183030381529060405291508061050c90611202565b9050610302565b50806040516020016105259190610de2565b60405160208183030381529060405291505092915050565b610545610835565b61054f60006108b3565b565b60606040518060400160405280600581526020017f696d616765000000000000000000000000000000000000000000000000000000815250905090565b6000610598610977565b905090565b60606040518060800160405280604281526020016114af60429139905090565b6105c5610835565b600073ffffffffffffffffffffffffffffffffffffffff168173ffffffffffffffffffffffffffffffffffffffff161415610635576040517f08c379a000000000000000000000000000000000000000000000000000000000815260040161062c90610ee2565b60405180910390fd5b61063e816108b3565b50565b60007f01ffc9a7000000000000000000000000000000000000000000000000000000007bffffffffffffffffffffffffffffffffffffffffffffffffffffffff1916827bffffffffffffffffffffffffffffffffffffffffffffffffffffffff1916149050919050565b60606000825114156106ce57604051806020016040528060008152509050610830565b60006040518060600160405280604081526020016114f160409139905060006003600285516106fd9190610feb565b6107079190611041565b60046107139190611072565b67ffffffffffffffff811115610752577f4e487b7100000000000000000000000000000000000000000000000000000000600052604160045260246000fd5b6040519080825280601f01601f1916602001820160405280156107845781602001600182028036833780820191505090505b509050600182016020820185865187015b808210156107f0576003820191508151603f8160121c168501518453600184019350603f81600c1c168501518453600184019350603f8160061c168501518453600184019350603f8116850151845360018401935050610795565b505060038651066001811461080c576002811461081f57610827565b603d6001830353603d6002830353610827565b603d60018303535b50505080925050505b919050565b61083d6109a0565b73ffffffffffffffffffffffffffffffffffffffff1661085b61058e565b73ffffffffffffffffffffffffffffffffffffffff16146108b1576040517f08c379a00000000000000000000000000000000000000000000000000000000081526004016108a890610f02565b60405180910390fd5b565b60008060009054906101000a900473ffffffffffffffffffffffffffffffffffffffff169050816000806101000a81548173ffffffffffffffffffffffffffffffffffffffff021916908373ffffffffffffffffffffffffffffffffffffffff1602179055508173ffffffffffffffffffffffffffffffffffffffff168173ffffffffffffffffffffffffffffffffffffffff167f8be0079c531659141344cd1fd0a4f28419497f9722a3daafe3b4186f6b6457e060405160405180910390a35050565b60008060009054906101000a900473ffffffffffffffffffffffffffffffffffffffff16905090565b600033905090565b60006109bb6109b684610f62565b610f3d565b9050828152602081018484840111156109d357600080fd5b6109de84828561116c565b509392505050565b6000813590506109f581611480565b92915050565b600081359050610a0a81611497565b92915050565b60008083601f840112610a2257600080fd5b8235905067ffffffffffffffff811115610a3b57600080fd5b602083019150836001820283011115610a5357600080fd5b9250929050565b600082601f830112610a6b57600080fd5b8151610a7b8482602086016109a8565b91505092915050565b600060208284031215610a9657600080fd5b6000610aa4848285016109e6565b91505092915050565b600060208284031215610abf57600080fd5b6000610acd848285016109fb565b91505092915050565b60008060208385031215610ae957600080fd5b600083013567ffffffffffffffff811115610b0357600080fd5b610b0f85828601610a10565b92509250509250929050565b600060208284031215610b2d57600080fd5b600082015167ffffffffffffffff811115610b4757600080fd5b610b5384828501610a5a565b91505092915050565b610b65816110cc565b82525050565b610b74816110de565b82525050565b610b83816110ea565b82525050565b6000610b9482610fa8565b610b9e8185610fbe565b9350610bae81856020860161116c565b610bb781611307565b840191505092915050565b6000610bcd82610fb3565b610bd78185610fcf565b9350610be781856020860161116c565b610bf081611307565b840191505092915050565b6000610c0682610fb3565b610c108185610fe0565b9350610c2081856020860161116c565b80840191505092915050565b60008154610c398161119f565b610c438186610fe0565b94506001821660008114610c5e5760018114610c6f57610ca2565b60ff19831686528186019350610ca2565b610c7885610f93565b60005b83811015610c9a57815481890152600182019150602081019050610c7b565b838801955050505b50505092915050565b6000610cb8602683610fcf565b9150610cc382611318565b604082019050919050565b6000610cdb600783610fe0565b9150610ce682611367565b600782019050919050565b6000610cfe605883610fe0565b9150610d0982611390565b605882019050919050565b6000610d21602083610fcf565b9150610d2c82611405565b602082019050919050565b6000610d44600683610fe0565b9150610d4f8261142e565b600682019050919050565b6000610d67601a83610fe0565b9150610d7282611457565b601a82019050919050565b610d8681611162565b82525050565b6000610d988288610bfb565b9150610da48287610c2c565b9150610db08286610c2c565b9150610dbb82610cce565b9150610dc78285610bfb565b9150610dd38284610c2c565b91508190509695505050505050565b6000610ded82610cf1565b9150610df98284610bfb565b9150610e0482610d37565b915081905092915050565b6000610e1a82610d5a565b9150610e268284610bfb565b915081905092915050565b6000602082019050610e466000830184610b5c565b92915050565b6000602082019050610e616000830184610b6b565b92915050565b6000606082019050610e7c6000830186610b7a565b610e896020830185610b7a565b610e966040830184610b7a565b949350505050565b60006020820190508181036000830152610eb88184610b89565b905092915050565b60006020820190508181036000830152610eda8184610bc2565b905092915050565b60006020820190508181036000830152610efb81610cab565b9050919050565b60006020820190508181036000830152610f1b81610d14565b9050919050565b6000602082019050610f376000830184610d7d565b92915050565b6000610f47610f58565b9050610f5382826111d1565b919050565b6000604051905090565b600067ffffffffffffffff821115610f7d57610f7c6112d8565b5b610f8682611307565b9050602081019050919050565b60008190508160005260206000209050919050565b600081519050919050565b600081519050919050565b600082825260208201905092915050565b600082825260208201905092915050565b600081905092915050565b6000610ff682611162565b915061100183611162565b9250827fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff038211156110365761103561124b565b5b828201905092915050565b600061104c82611162565b915061105783611162565b9250826110675761106661127a565b5b828204905092915050565b600061107d82611162565b915061108883611162565b9250817fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff04831182151516156110c1576110c061124b565b5b828202905092915050565b60006110d782611142565b9050919050565b60008115159050919050565b60007fff0000000000000000000000000000000000000000000000000000000000000082169050919050565b60007fffffffff0000000000000000000000000000000000000000000000000000000082169050919050565b600073ffffffffffffffffffffffffffffffffffffffff82169050919050565b6000819050919050565b60005b8381101561118a57808201518184015260208101905061116f565b83811115611199576000848401525b50505050565b600060028204905060018216806111b757607f821691505b602082108114156111cb576111ca6112a9565b5b50919050565b6111da82611307565b810181811067ffffffffffffffff821117156111f9576111f86112d8565b5b80604052505050565b600061120d82611162565b91507fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff8214156112405761123f61124b565b5b600182019050919050565b7f4e487b7100000000000000000000000000000000000000000000000000000000600052601160045260246000fd5b7f4e487b7100000000000000000000000000000000000000000000000000000000600052601260045260246000fd5b7f4e487b7100000000000000000000000000000000000000000000000000000000600052602260045260246000fd5b7f4e487b7100000000000000000000000000000000000000000000000000000000600052604160045260246000fd5b6000601f19601f8301169050919050565b7f4f776e61626c653a206e6577206f776e657220697320746865207a65726f206160008201527f6464726573730000000000000000000000000000000000000000000000000000602082015250565b7f2066696c6c3d2200000000000000000000000000000000000000000000000000600082015250565b7f3c73766720786d6c6e733d22687474703a2f2f7777772e77332e6f72672f323060008201527f30302f737667222077696474683d223822206865696768743d2238222073747960208201527f6c653d226261636b67726f756e643a23463146314631223e0000000000000000604082015250565b7f4f776e61626c653a2063616c6c6572206973206e6f7420746865206f776e6572600082015250565b7f3c2f7376673e0000000000000000000000000000000000000000000000000000600082015250565b7f646174613a696d6167652f7376672b786d6c3b6261736536342c000000000000600082015250565b611489816110cc565b811461149457600080fd5b50565b6114a081611116565b81146114ab57600080fd5b5056fe697066733a2f2f6261666b7265696170716476636f6f3564326a626a6b3764736464716263776a77326b746d326737743576363668777a796a68347072366b366f694142434445464748494a4b4c4d4e4f505152535455565758595a6162636465666768696a6b6c6d6e6f707172737475767778797a303132333435363738392b2fa264697066735822122073c3329085df89bf79948e2eb1157df6170a6e922591498a8cf764265506492d64736f6c634300080400333c726563742077696474683d22312e303522206865696768743d22312e30352220';

type PixelGrid8RendererConstructorParams =
  | [linkLibraryAddresses: PixelGrid8RendererLibraryAddresses, signer?: Signer]
  | ConstructorParameters<typeof ContractFactory>;

const isSuperArgs = (
  xs: PixelGrid8RendererConstructorParams,
): xs is ConstructorParameters<typeof ContractFactory> => {
  return (
    typeof xs[0] === 'string' ||
    (Array.isArray as (arg: any) => arg is readonly any[])(xs[0]) ||
    '_isInterface' in xs[0]
  );
};

export class PixelGrid8Renderer__factory extends ContractFactory {
  constructor(...args: PixelGrid8RendererConstructorParams) {
    if (isSuperArgs(args)) {
      super(...args);
    } else {
      const [linkLibraryAddresses, signer] = args;
      super(
        _abi,
        PixelGrid8Renderer__factory.linkBytecode(linkLibraryAddresses),
        signer,
      );
    }
  }

  static linkBytecode(
    linkLibraryAddresses: PixelGrid8RendererLibraryAddresses,
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
    signerOrProvider: Signer | Provider,
  ): PixelGrid8Renderer {
    return new Contract(address, _abi, signerOrProvider) as PixelGrid8Renderer;
  }
}

export interface PixelGrid8RendererLibraryAddresses {
  ['contracts/libraries/SvgUtils.sol:SvgUtils']: string;
}
