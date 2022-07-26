/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */
import type { Provider, TransactionRequest } from '@ethersproject/providers';
import { Contract, ContractFactory, Overrides, Signer, utils } from 'ethers';
import type { PromiseOrValue } from '../../../../common';
import type {
  PixelGrid8Renderer,
  PixelGrid8RendererInterface,
} from '../../../../contracts/renderers/HSLPixelGrid8Renderer.sol/PixelGrid8Renderer';

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
    inputs: [
      {
        internalType: 'bytes',
        name: 'props',
        type: 'bytes',
      },
    ],
    name: 'attributes',
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
    inputs: [],
    name: 'renderAttributeKey',
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
  '0x608060405260405180606001604052806021815260200162002cc960219139600190805190602001906200003592919062001061565b506040518060400160405280600481526020017f22202f3e00000000000000000000000000000000000000000000000000000000815250600290805190602001906200008392919062001061565b506040518061080001604052806040518060400160405280600b81526020017f793d22302220783d22302200000000000000000000000000000000000000000081525081526020016040518060400160405280600b81526020017f793d22302220783d22312200000000000000000000000000000000000000000081525081526020016040518060400160405280600b81526020017f793d22302220783d22322200000000000000000000000000000000000000000081525081526020016040518060400160405280600b81526020017f793d22302220783d22332200000000000000000000000000000000000000000081525081526020016040518060400160405280600b81526020017f793d22302220783d22342200000000000000000000000000000000000000000081525081526020016040518060400160405280600b81526020017f793d22302220783d22352200000000000000000000000000000000000000000081525081526020016040518060400160405280600b81526020017f793d22302220783d22362200000000000000000000000000000000000000000081525081526020016040518060400160405280600b81526020017f793d22302220783d22372200000000000000000000000000000000000000000081525081526020016040518060400160405280600b81526020017f793d22312220783d22302200000000000000000000000000000000000000000081525081526020016040518060400160405280600b81526020017f793d22312220783d22312200000000000000000000000000000000000000000081525081526020016040518060400160405280600b81526020017f793d22312220783d22322200000000000000000000000000000000000000000081525081526020016040518060400160405280600b81526020017f793d22312220783d22332200000000000000000000000000000000000000000081525081526020016040518060400160405280600b81526020017f793d22312220783d22342200000000000000000000000000000000000000000081525081526020016040518060400160405280600b81526020017f793d22312220783d22352200000000000000000000000000000000000000000081525081526020016040518060400160405280600b81526020017f793d22312220783d22362200000000000000000000000000000000000000000081525081526020016040518060400160405280600b81526020017f793d22312220783d22372200000000000000000000000000000000000000000081525081526020016040518060400160405280600b81526020017f793d22322220783d22302200000000000000000000000000000000000000000081525081526020016040518060400160405280600b81526020017f793d22322220783d22312200000000000000000000000000000000000000000081525081526020016040518060400160405280600b81526020017f793d22322220783d22322200000000000000000000000000000000000000000081525081526020016040518060400160405280600b81526020017f793d22322220783d22332200000000000000000000000000000000000000000081525081526020016040518060400160405280600b81526020017f793d22322220783d22342200000000000000000000000000000000000000000081525081526020016040518060400160405280600b81526020017f793d22322220783d22352200000000000000000000000000000000000000000081525081526020016040518060400160405280600b81526020017f793d22322220783d22362200000000000000000000000000000000000000000081525081526020016040518060400160405280600b81526020017f793d22322220783d22372200000000000000000000000000000000000000000081525081526020016040518060400160405280600b81526020017f793d22332220783d22302200000000000000000000000000000000000000000081525081526020016040518060400160405280600b81526020017f793d22332220783d22312200000000000000000000000000000000000000000081525081526020016040518060400160405280600b81526020017f793d22332220783d22322200000000000000000000000000000000000000000081525081526020016040518060400160405280600b81526020017f793d22332220783d22332200000000000000000000000000000000000000000081525081526020016040518060400160405280600b81526020017f793d22332220783d22342200000000000000000000000000000000000000000081525081526020016040518060400160405280600b81526020017f793d22332220783d22352200000000000000000000000000000000000000000081525081526020016040518060400160405280600b81526020017f793d22332220783d22362200000000000000000000000000000000000000000081525081526020016040518060400160405280600b81526020017f793d22332220783d22372200000000000000000000000000000000000000000081525081526020016040518060400160405280600b81526020017f793d22342220783d22302200000000000000000000000000000000000000000081525081526020016040518060400160405280600b81526020017f793d22342220783d22312200000000000000000000000000000000000000000081525081526020016040518060400160405280600b81526020017f793d22342220783d22322200000000000000000000000000000000000000000081525081526020016040518060400160405280600b81526020017f793d22342220783d22332200000000000000000000000000000000000000000081525081526020016040518060400160405280600b81526020017f793d22342220783d22342200000000000000000000000000000000000000000081525081526020016040518060400160405280600b81526020017f793d22342220783d22352200000000000000000000000000000000000000000081525081526020016040518060400160405280600b81526020017f793d22342220783d22362200000000000000000000000000000000000000000081525081526020016040518060400160405280600b81526020017f793d22342220783d22372200000000000000000000000000000000000000000081525081526020016040518060400160405280600b81526020017f793d22352220783d22302200000000000000000000000000000000000000000081525081526020016040518060400160405280600b81526020017f793d22352220783d22312200000000000000000000000000000000000000000081525081526020016040518060400160405280600b81526020017f793d22352220783d22322200000000000000000000000000000000000000000081525081526020016040518060400160405280600b81526020017f793d22352220783d22332200000000000000000000000000000000000000000081525081526020016040518060400160405280600b81526020017f793d22352220783d22342200000000000000000000000000000000000000000081525081526020016040518060400160405280600b81526020017f793d22352220783d22352200000000000000000000000000000000000000000081525081526020016040518060400160405280600b81526020017f793d22352220783d22362200000000000000000000000000000000000000000081525081526020016040518060400160405280600b81526020017f793d22352220783d22372200000000000000000000000000000000000000000081525081526020016040518060400160405280600b81526020017f793d22362220783d22302200000000000000000000000000000000000000000081525081526020016040518060400160405280600b81526020017f793d22362220783d22312200000000000000000000000000000000000000000081525081526020016040518060400160405280600b81526020017f793d22362220783d22322200000000000000000000000000000000000000000081525081526020016040518060400160405280600b81526020017f793d22362220783d22332200000000000000000000000000000000000000000081525081526020016040518060400160405280600b81526020017f793d22362220783d22342200000000000000000000000000000000000000000081525081526020016040518060400160405280600b81526020017f793d22362220783d22352200000000000000000000000000000000000000000081525081526020016040518060400160405280600b81526020017f793d22362220783d22362200000000000000000000000000000000000000000081525081526020016040518060400160405280600b81526020017f793d22362220783d22372200000000000000000000000000000000000000000081525081526020016040518060400160405280600b81526020017f793d22372220783d22302200000000000000000000000000000000000000000081525081526020016040518060400160405280600b81526020017f793d22372220783d22312200000000000000000000000000000000000000000081525081526020016040518060400160405280600b81526020017f793d22372220783d22322200000000000000000000000000000000000000000081525081526020016040518060400160405280600b81526020017f793d22372220783d22332200000000000000000000000000000000000000000081525081526020016040518060400160405280600b81526020017f793d22372220783d22342200000000000000000000000000000000000000000081525081526020016040518060400160405280600b81526020017f793d22372220783d22352200000000000000000000000000000000000000000081525081526020016040518060400160405280600b81526020017f793d22372220783d22362200000000000000000000000000000000000000000081525081526020016040518060400160405280600b81526020017f793d22372220783d223722000000000000000000000000000000000000000000815250815250600390604062000f60929190620010f2565b5034801562000f6e57600080fd5b5062000f8f62000f8362000f9560201b60201c565b62000f9d60201b60201c565b6200123e565b600033905090565b60008060009054906101000a900473ffffffffffffffffffffffffffffffffffffffff169050816000806101000a81548173ffffffffffffffffffffffffffffffffffffffff021916908373ffffffffffffffffffffffffffffffffffffffff1602179055508173ffffffffffffffffffffffffffffffffffffffff168173ffffffffffffffffffffffffffffffffffffffff167f8be0079c531659141344cd1fd0a4f28419497f9722a3daafe3b4186f6b6457e060405160405180910390a35050565b8280546200106f90620011d9565b90600052602060002090601f016020900481019282620010935760008555620010df565b82601f10620010ae57805160ff1916838001178555620010df565b82800160010185558215620010df579182015b82811115620010de578251825591602001919060010190620010c1565b5b509050620010ee91906200114c565b5090565b826040810192821562001139579160200282015b82811115620011385782518290805190602001906200112792919062001061565b509160200191906001019062001106565b5b5090506200114891906200116b565b5090565b5b80821115620011675760008160009055506001016200114d565b5090565b5b808211156200118f576000818162001185919062001193565b506001016200116c565b5090565b508054620011a190620011d9565b6000825580601f10620011b55750620011d6565b601f016020900490600052602060002090810190620011d591906200114c565b5b50565b60006002820490506001821680620011f257607f821691505b602082108114156200120957620012086200120f565b5b50919050565b7f4e487b7100000000000000000000000000000000000000000000000000000000600052602260045260246000fd5b611a7b806200124e6000396000f3fe608060405234801561001057600080fd5b50600436106100a85760003560e01c8063715018a611610071578063715018a6146101795780638da5cb5b1461018357806392348b22146101a1578063b0a2f640146101bf578063effde6db146101ef578063f2fde38b1461020d576100a8565b8062a85d69146100ad57806301ffc9a7146100cb57806306fdde03146100fb578063316df61e1461011957806343c5820c14610149575b600080fd5b6100b5610229565b6040516100c291906113c1565b60405180910390f35b6100e560048036038101906100e09190610ebc565b610232565b6040516100f29190611322565b60405180910390f35b6101036102ac565b604051610110919061135f565b60405180910390f35b610133600480360381019061012e9190610ee5565b6102e9565b604051610140919061135f565b60405180910390f35b610163600480360381019061015e9190610ee5565b610324565b604051610170919061133d565b60405180910390f35b610181610505565b005b61018b610519565b6040516101989190611307565b60405180910390f35b6101a9610528565b6040516101b6919061135f565b60405180910390f35b6101d960048036038101906101d49190610ee5565b610548565b6040516101e6919061135f565b60405180910390f35b6101f7610600565b604051610204919061135f565b60405180910390f35b61022760048036038101906102229190610e93565b61063d565b005b600060c0905090565b60007f3433a79a000000000000000000000000000000000000000000000000000000007bffffffffffffffffffffffffffffffffffffffffffffffffffffffff1916827bffffffffffffffffffffffffffffffffffffffffffffffffffffffff191614806102a557506102a4826106c1565b5b9050919050565b60606040518060400160405280600c81526020017f506978656c204772696420380000000000000000000000000000000000000000815250905090565b60606102fd6102f88484610324565b61072b565b60405160200161030d91906112e5565b604051602081830303815290604052905092915050565b6060600060405180602001604052806000815250905060005b60408110156104db5781600160038360408110610383577f4e487b7100000000000000000000000000000000000000000000000000000000600052603260045260246000fd5b016103db888860038761039691906114bb565b8181106103cc577f4e487b7100000000000000000000000000000000000000000000000000000000600052603260045260246000fd5b9050013560f81c60f81b6108b5565b61043e898960016003896103ef91906114bb565b6103f99190611434565b81811061042f577f4e487b7100000000000000000000000000000000000000000000000000000000600052603260045260246000fd5b9050013560f81c60f81b6108b5565b6104a18a8a600260038a61045291906114bb565b61045c9190611434565b818110610492577f4e487b7100000000000000000000000000000000000000000000000000000000600052603260045260246000fd5b9050013560f81c60f81b6108b5565b60026040516020016104b997969594939291906111fa565b6040516020818303038152906040529150806104d490611622565b905061033d565b50806040516020016104ed919061128b565b60405160208183030381529060405291505092915050565b61050d610aff565b6105176000610b7d565b565b6000610523610c41565b905090565b60606040518060800160405280604281526020016119c460429139905090565b606060005b600060f81b84848381811061058b577f4e487b7100000000000000000000000000000000000000000000000000000000600052603260045260246000fd5b9050013560f81c60f81b7effffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff1916146105cf5780806105c790611622565b91505061054d565b6105d881610c6a565b6040516020016105e891906112b8565b60405160208183030381529060405291505092915050565b60606040518060400160405280600581526020017f696d616765000000000000000000000000000000000000000000000000000000815250905090565b610645610aff565b600073ffffffffffffffffffffffffffffffffffffffff168173ffffffffffffffffffffffffffffffffffffffff1614156106b5576040517f08c379a00000000000000000000000000000000000000000000000000000000081526004016106ac90611381565b60405180910390fd5b6106be81610b7d565b50565b60007f01ffc9a7000000000000000000000000000000000000000000000000000000007bffffffffffffffffffffffffffffffffffffffffffffffffffffffff1916827bffffffffffffffffffffffffffffffffffffffffffffffffffffffff1916149050919050565b606060008251141561074e576040518060200160405280600081525090506108b0565b6000604051806060016040528060408152602001611a06604091399050600060036002855161077d9190611434565b610787919061148a565b600461079391906114bb565b67ffffffffffffffff8111156107d2577f4e487b7100000000000000000000000000000000000000000000000000000000600052604160045260246000fd5b6040519080825280601f01601f1916602001820160405280156108045781602001600182028036833780820191505090505b509050600182016020820185865187015b80821015610870576003820191508151603f8160121c168501518453600184019350603f81600c1c168501518453600184019350603f8160061c168501518453600184019350603f8116850151845360018401935050610815565b505060038651066001811461088c576002811461089f576108a7565b603d6001830353603d60028303536108a7565b603d60018303535b50505080925050505b919050565b60606000600267ffffffffffffffff8111156108fa577f4e487b7100000000000000000000000000000000000000000000000000000000600052604160045260246000fd5b6040519080825280601f01601f19166020018201604052801561092c5781602001600182028036833780820191505090505b5090507f3031323334353637383961626364656600000000000000000000000000000000600f8460f81c1660ff1660108110610991577f4e487b7100000000000000000000000000000000000000000000000000000000600052603260045260246000fd5b1a60f81b816001815181106109cf577f4e487b7100000000000000000000000000000000000000000000000000000000600052603260045260246000fd5b60200101907effffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff1916908160001a9053506004837effffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff1916901c92507f3031323334353637383961626364656600000000000000000000000000000000600f8460f81c1660ff1660108110610a89577f4e487b7100000000000000000000000000000000000000000000000000000000600052603260045260246000fd5b1a60f81b81600081518110610ac7577f4e487b7100000000000000000000000000000000000000000000000000000000600052603260045260246000fd5b60200101907effffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff1916908160001a90535080915050919050565b610b07610e17565b73ffffffffffffffffffffffffffffffffffffffff16610b25610519565b73ffffffffffffffffffffffffffffffffffffffff1614610b7b576040517f08c379a0000000000000000000000000000000000000000000000000000000008152600401610b72906113a1565b60405180910390fd5b565b60008060009054906101000a900473ffffffffffffffffffffffffffffffffffffffff169050816000806101000a81548173ffffffffffffffffffffffffffffffffffffffff021916908373ffffffffffffffffffffffffffffffffffffffff1602179055508173ffffffffffffffffffffffffffffffffffffffff168173ffffffffffffffffffffffffffffffffffffffff167f8be0079c531659141344cd1fd0a4f28419497f9722a3daafe3b4186f6b6457e060405160405180910390a35050565b60008060009054906101000a900473ffffffffffffffffffffffffffffffffffffffff16905090565b60606000821415610cb2576040518060400160405280600181526020017f30000000000000000000000000000000000000000000000000000000000000008152509050610e12565b600082905060005b60008214610ce4578080610ccd90611622565b915050600a82610cdd919061148a565b9150610cba565b60008167ffffffffffffffff811115610d26577f4e487b7100000000000000000000000000000000000000000000000000000000600052604160045260246000fd5b6040519080825280601f01601f191660200182016040528015610d585781602001600182028036833780820191505090505b5090505b60008514610e0b57600182610d719190611515565b9150600a85610d80919061166b565b6030610d8c9190611434565b60f81b818381518110610dc8577f4e487b7100000000000000000000000000000000000000000000000000000000600052603260045260246000fd5b60200101907effffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff1916908160001a905350600a85610e04919061148a565b9450610d5c565b8093505050505b919050565b600033905090565b600081359050610e2e81611995565b92915050565b600081359050610e43816119ac565b92915050565b60008083601f840112610e5b57600080fd5b8235905067ffffffffffffffff811115610e7457600080fd5b602083019150836001820283011115610e8c57600080fd5b9250929050565b600060208284031215610ea557600080fd5b6000610eb384828501610e1f565b91505092915050565b600060208284031215610ece57600080fd5b6000610edc84828501610e34565b91505092915050565b60008060208385031215610ef857600080fd5b600083013567ffffffffffffffff811115610f1257600080fd5b610f1e85828601610e49565b92509250509250929050565b610f3381611549565b82525050565b610f428161155b565b82525050565b6000610f53826113f1565b610f5d8185611407565b9350610f6d8185602086016115bd565b610f7681611729565b840191505092915050565b6000610f8c826113fc565b610f968185611418565b9350610fa68185602086016115bd565b610faf81611729565b840191505092915050565b6000610fc5826113fc565b610fcf8185611429565b9350610fdf8185602086016115bd565b80840191505092915050565b60008154610ff8816115f0565b6110028186611429565b9450600182166000811461101d576001811461102e57611061565b60ff19831686528186019350611061565b611037856113dc565b60005b838110156110595781548189015260018201915060208101905061103a565b838801955050505b50505092915050565b6000611077602683611418565b91506110828261173a565b604082019050919050565b600061109a600283611429565b91506110a582611789565b600282019050919050565b60006110bd600183611429565b91506110c8826117b2565b600182019050919050565b60006110e0600283611429565b91506110eb826117db565b600282019050919050565b6000611103600b83611429565b915061110e82611804565b600b82019050919050565b6000611126605883611429565b91506111318261182d565b605882019050919050565b6000611149600183611429565b9150611154826118a2565b600182019050919050565b600061116c602083611418565b9150611177826118cb565b602082019050919050565b600061118f602683611429565b915061119a826118f4565b602682019050919050565b60006111b2600683611429565b91506111bd82611943565b600682019050919050565b60006111d5601a83611429565b91506111e08261196c565b601a82019050919050565b6111f4816115b3565b82525050565b6000611206828a610fba565b91506112128289610feb565b915061121e8288610feb565b9150611229826110f6565b91506112358287610fba565b9150611240826110b0565b915061124c8286610fba565b91506112578261108d565b91506112638285610fba565b915061126e826110d3565b915061127a8284610feb565b915081905098975050505050505050565b600061129682611119565b91506112a28284610fba565b91506112ad826111a5565b915081905092915050565b60006112c382611182565b91506112cf8284610fba565b91506112da8261113c565b915081905092915050565b60006112f0826111c8565b91506112fc8284610fba565b915081905092915050565b600060208201905061131c6000830184610f2a565b92915050565b60006020820190506113376000830184610f39565b92915050565b600060208201905081810360008301526113578184610f48565b905092915050565b600060208201905081810360008301526113798184610f81565b905092915050565b6000602082019050818103600083015261139a8161106a565b9050919050565b600060208201905081810360008301526113ba8161115f565b9050919050565b60006020820190506113d660008301846111eb565b92915050565b60008190508160005260206000209050919050565b600081519050919050565b600081519050919050565b600082825260208201905092915050565b600082825260208201905092915050565b600081905092915050565b600061143f826115b3565b915061144a836115b3565b9250827fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff0382111561147f5761147e61169c565b5b828201905092915050565b6000611495826115b3565b91506114a0836115b3565b9250826114b0576114af6116cb565b5b828204905092915050565b60006114c6826115b3565b91506114d1836115b3565b9250817fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff048311821515161561150a5761150961169c565b5b828202905092915050565b6000611520826115b3565b915061152b836115b3565b92508282101561153e5761153d61169c565b5b828203905092915050565b600061155482611593565b9050919050565b60008115159050919050565b60007fffffffff0000000000000000000000000000000000000000000000000000000082169050919050565b600073ffffffffffffffffffffffffffffffffffffffff82169050919050565b6000819050919050565b60005b838110156115db5780820151818401526020810190506115c0565b838111156115ea576000848401525b50505050565b6000600282049050600182168061160857607f821691505b6020821081141561161c5761161b6116fa565b5b50919050565b600061162d826115b3565b91507fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff8214156116605761165f61169c565b5b600182019050919050565b6000611676826115b3565b9150611681836115b3565b925082611691576116906116cb565b5b828206905092915050565b7f4e487b7100000000000000000000000000000000000000000000000000000000600052601160045260246000fd5b7f4e487b7100000000000000000000000000000000000000000000000000000000600052601260045260246000fd5b7f4e487b7100000000000000000000000000000000000000000000000000000000600052602260045260246000fd5b6000601f19601f8301169050919050565b7f4f776e61626c653a206e6577206f776e657220697320746865207a65726f206160008201527f6464726573730000000000000000000000000000000000000000000000000000602082015250565b7f252c000000000000000000000000000000000000000000000000000000000000600082015250565b7f2c00000000000000000000000000000000000000000000000000000000000000600082015250565b7f2529000000000000000000000000000000000000000000000000000000000000600082015250565b7f2066696c6c3d2268736c28000000000000000000000000000000000000000000600082015250565b7f3c73766720786d6c6e733d22687474703a2f2f7777772e77332e6f72672f323060008201527f30302f737667222077696474683d223822206865696768743d2238222073747960208201527f6c653d226261636b67726f756e643a23463146314631223e0000000000000000604082015250565b7f7d00000000000000000000000000000000000000000000000000000000000000600082015250565b7f4f776e61626c653a2063616c6c6572206973206e6f7420746865206f776e6572600082015250565b7f7b2274726169745f74797065223a202244617461204c656e677468222c20227660008201527f616c7565223a0000000000000000000000000000000000000000000000000000602082015250565b7f3c2f7376673e0000000000000000000000000000000000000000000000000000600082015250565b7f646174613a696d6167652f7376672b786d6c3b6261736536342c000000000000600082015250565b61199e81611549565b81146119a957600080fd5b50565b6119b581611567565b81146119c057600080fd5b5056fe697066733a2f2f6261666b72656962696e736768756d6165356d6979653774777a736a7a7835336834366c726967676c75686d64767174767a72356871707a6d6c754142434445464748494a4b4c4d4e4f505152535455565758595a6162636465666768696a6b6c6d6e6f707172737475767778797a303132333435363738392b2fa26469706673582212204922b7bba7c31c366bcf8a130a10c4429770cff32cd9a4d6b76cb5ed0097a4d764736f6c634300080400333c726563742077696474683d22312e303522206865696768743d22312e30352220';

type PixelGrid8RendererConstructorParams =
  | [signer?: Signer]
  | ConstructorParameters<typeof ContractFactory>;

const isSuperArgs = (
  xs: PixelGrid8RendererConstructorParams,
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
    signerOrProvider: Signer | Provider,
  ): PixelGrid8Renderer {
    return new Contract(address, _abi, signerOrProvider) as PixelGrid8Renderer;
  }
}
