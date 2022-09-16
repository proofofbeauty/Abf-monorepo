/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */
import type { Provider, TransactionRequest } from '@ethersproject/providers';
import { Contract, ContractFactory, Overrides, Signer, utils } from 'ethers';
import type { PromiseOrValue } from '../../../common';
import type {
  ConfiguredGifImageRenderer,
  ConfiguredGifImageRendererInterface,
} from '../../../contracts/renderers/ConfiguredGifImageRenderer';

const _abi = [
  {
    inputs: [
      {
        internalType: 'address',
        name: '_gifImageRenderer',
        type: 'address',
      },
    ],
    stateMutability: 'nonpayable',
    type: 'constructor',
  },
  {
    inputs: [],
    name: 'ErrorCreatingContract',
    type: 'error',
  },
  {
    inputs: [],
    name: 'ErrorCreatingProxy',
    type: 'error',
  },
  {
    inputs: [
      {
        internalType: 'uint256',
        name: '_size',
        type: 'uint256',
      },
      {
        internalType: 'uint256',
        name: '_start',
        type: 'uint256',
      },
      {
        internalType: 'uint256',
        name: '_end',
        type: 'uint256',
      },
    ],
    name: 'InvalidCodeAtRange',
    type: 'error',
  },
  {
    inputs: [],
    name: 'TargetAlreadyExists',
    type: 'error',
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: false,
        internalType: 'uint256',
        name: 'index',
        type: 'uint256',
      },
    ],
    name: 'AddedConfiguration',
    type: 'event',
  },
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
    name: 'MAX_NUM_CONFIGURATIONS',
    outputs: [
      {
        internalType: 'uint256',
        name: '',
        type: 'uint256',
      },
    ],
    stateMutability: 'view',
    type: 'function',
  },
  {
    inputs: [
      {
        components: [
          {
            internalType: 'uint8',
            name: 'width',
            type: 'uint8',
          },
          {
            internalType: 'uint8',
            name: 'height',
            type: 'uint8',
          },
          {
            internalType: 'bytes',
            name: 'colors',
            type: 'bytes',
          },
        ],
        internalType: 'struct ConfiguredGifImageRenderer.Configuration',
        name: 'config',
        type: 'tuple',
      },
    ],
    name: 'addConfiguration',
    outputs: [
      {
        internalType: 'uint256',
        name: '',
        type: 'uint256',
      },
    ],
    stateMutability: 'nonpayable',
    type: 'function',
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
    inputs: [
      {
        components: [
          {
            internalType: 'uint8',
            name: 'width',
            type: 'uint8',
          },
          {
            internalType: 'uint8',
            name: 'height',
            type: 'uint8',
          },
          {
            internalType: 'bytes',
            name: 'colors',
            type: 'bytes',
          },
        ],
        internalType: 'struct ConfiguredGifImageRenderer.Configuration[]',
        name: 'configs',
        type: 'tuple[]',
      },
    ],
    name: 'batchAddConfiguration',
    outputs: [
      {
        internalType: 'uint256',
        name: '',
        type: 'uint256',
      },
    ],
    stateMutability: 'nonpayable',
    type: 'function',
  },
  {
    inputs: [
      {
        internalType: 'uint256',
        name: 'index',
        type: 'uint256',
      },
    ],
    name: 'getConfiguration',
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
    name: 'maxConfigurationIndex',
    outputs: [
      {
        internalType: 'uint256',
        name: '',
        type: 'uint256',
      },
    ],
    stateMutability: 'view',
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
  '0x608060405260016002553480156200001657600080fd5b50604051620028943803806200289483398181016040528101906200003c919062000187565b6200005c62000050620000a460201b60201c565b620000ac60201b60201c565b80600160006101000a81548173ffffffffffffffffffffffffffffffffffffffff021916908373ffffffffffffffffffffffffffffffffffffffff1602179055505062000201565b600033905090565b60008060009054906101000a900473ffffffffffffffffffffffffffffffffffffffff169050816000806101000a81548173ffffffffffffffffffffffffffffffffffffffff021916908373ffffffffffffffffffffffffffffffffffffffff1602179055508173ffffffffffffffffffffffffffffffffffffffff168173ffffffffffffffffffffffffffffffffffffffff167f8be0079c531659141344cd1fd0a4f28419497f9722a3daafe3b4186f6b6457e060405160405180910390a35050565b6000815190506200018181620001e7565b92915050565b6000602082840312156200019a57600080fd5b6000620001aa8482850162000170565b91505092915050565b6000620001c082620001c7565b9050919050565b600073ffffffffffffffffffffffffffffffffffffffff82169050919050565b620001f281620001b3565b8114620001fe57600080fd5b50565b61268380620002116000396000f3fe608060405234801561001057600080fd5b50600436106100fe5760003560e01c806382863b5d11610097578063c431d8e011610066578063c431d8e0146102b1578063effde6db146102e1578063f2fde38b146102ff578063ff9e06c71461031b576100fe565b806382863b5d146102155780638da5cb5b1461024557806392348b2214610263578063b0a2f64014610281576100fe565b8063316df61e116100d3578063316df61e1461018d57806343c5820c146101bd578063715018a6146101ed57806371a835ff146101f7576100fe565b8062a85d6914610103578062e061651461012157806301ffc9a71461013f57806306fdde031461016f575b600080fd5b61010b61034b565b6040516101189190611e68565b60405180910390f35b610129610373565b6040516101369190611e68565b60405180910390f35b610159600480360381019061015491906116e6565b610379565b6040516101669190611d40565b60405180910390f35b6101776103f3565b6040516101849190611da6565b60405180910390f35b6101a760048036038101906101a2919061170f565b610430565b6040516101b49190611da6565b60405180910390f35b6101d760048036038101906101d2919061170f565b610580565b6040516101e49190611d84565b60405180910390f35b6101f56106d0565b005b6101ff6106e4565b60405161020c9190611e68565b60405180910390f35b61022f600480360381019061022a91906117d6565b6106ec565b60405161023c9190611e68565b60405180910390f35b61024d610837565b60405161025a9190611d25565b60405180910390f35b61026b610846565b6040516102789190611da6565b60405180910390f35b61029b6004803603810190610296919061170f565b610866565b6040516102a89190611da6565b60405180910390f35b6102cb60048036038101906102c69190611817565b61089b565b6040516102d89190611d84565b60405180910390f35b6102e96108b0565b6040516102f69190611da6565b60405180910390f35b6103196004803603810190610314919061167c565b6108ed565b005b610335600480360381019061033091906116a5565b610971565b6040516103429190611e68565b60405180910390f35b60007fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff905090565b60025481565b60007f3433a79a000000000000000000000000000000000000000000000000000000007bffffffffffffffffffffffffffffffffffffffffffffffffffffffff1916827bffffffffffffffffffffffffffffffffffffffffffffffffffffffff191614806103ec57506103eb82610b24565b5b9050919050565b60606040518060400160405280601b81526020017f436f6e666967757265642053696e676c65204672616d65204769660000000000815250905090565b6060600160009054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1663316df61e6104d06104c286868080601f016020809104026020016040519081016040528093929190818152602001838380828437600081840152601f19601f820116905080830192505050505050506000610b8e565b63ffffffff1660001b610bf5565b858560049088889050926104e693929190611fbb565b6040516020016104f893929190611baf565b6040516020818303038152906040526040518263ffffffff1660e01b81526004016105239190611d84565b60006040518083038186803b15801561053b57600080fd5b505afa15801561054f573d6000803e3d6000fd5b505050506040513d6000823e3d601f19601f820116820180604052508101906105789190611795565b905092915050565b6060600160009054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff166343c5820c61062061061286868080601f016020809104026020016040519081016040528093929190818152602001838380828437600081840152601f19601f820116905080830192505050505050506000610b8e565b63ffffffff1660001b610bf5565b8585600490888890509261063693929190611fbb565b60405160200161064893929190611baf565b6040516020818303038152906040526040518263ffffffff1660e01b81526004016106739190611d84565b60006040518083038186803b15801561068b57600080fd5b505afa15801561069f573d6000803e3d6000fd5b505050506040513d6000823e3d601f19601f820116820180604052508101906106c89190611754565b905092915050565b6106d8610c3a565b6106e26000610cb8565b565b63ffffffff81565b60008060038360400151516107019190612252565b14610741576040517f08c379a000000000000000000000000000000000000000000000000000000000815260040161073890611de8565b60405180910390fd5b61079260025460001b8360000151846020015160038660400151516107669190612044565b866040015160405160200161077e9493929190611cdb565b604051602081830303815290604052610d7c565b507f12ace6f0b54dc6c4abfb9aad10026ee778ec35756eaf7fe7ecd7afa44e973f356002546040516107c49190611e68565b60405180910390a1600260008154809291906107df906121b7565b919050555063ffffffff600254111561082d576040517f08c379a000000000000000000000000000000000000000000000000000000000815260040161082490611e48565b60405180910390fd5b6002549050919050565b6000610841610dc4565b905090565b606060405180608001604052806042815260200161260c60429139905090565b606061087483839050610ded565b6040516020016108849190611cae565b604051602081830303815290604052905092915050565b60606108a98260001b610bf5565b9050919050565b60606040518060400160405280600581526020017f696d616765000000000000000000000000000000000000000000000000000000815250905090565b6108f5610c3a565b600073ffffffffffffffffffffffffffffffffffffffff168173ffffffffffffffffffffffffffffffffffffffff161415610965576040517f08c379a000000000000000000000000000000000000000000000000000000000815260040161095c90611dc8565b60405180910390fd5b61096e81610cb8565b50565b600080600090505b8251811015610b195760008382815181106109bd577f4e487b7100000000000000000000000000000000000000000000000000000000600052603260045260246000fd5b60200260200101519050600060038260400151516109db9190612252565b14610a1b576040517f08c379a0000000000000000000000000000000000000000000000000000000008152600401610a1290611de8565b60405180910390fd5b610a6c60025460001b826000015183602001516003856040015151610a409190612044565b8560400151604051602001610a589493929190611cdb565b604051602081830303815290604052610d7c565b507f12ace6f0b54dc6c4abfb9aad10026ee778ec35756eaf7fe7ecd7afa44e973f35600254604051610a9e9190611e68565b60405180910390a160026000815480929190610ab9906121b7565b919050555063ffffffff6002541115610b07576040517f08c379a0000000000000000000000000000000000000000000000000000000008152600401610afe90611e48565b60405180910390fd5b5080610b12906121b7565b9050610979565b506002549050919050565b60007f01ffc9a7000000000000000000000000000000000000000000000000000000007bffffffffffffffffffffffffffffffffffffffffffffffffffffffff1916827bffffffffffffffffffffffffffffffffffffffffffffffffffffffff1916149050919050565b6000600482610b9d9190611fee565b83511015610be0576040517f08c379a0000000000000000000000000000000000000000000000000000000008152600401610bd790611e28565b60405180910390fd5b60008260048501015190508091505092915050565b6060610c33610c0b610c0684610f9a565b610fef565b60017fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff611077565b9050919050565b610c4261115d565b73ffffffffffffffffffffffffffffffffffffffff16610c60610837565b73ffffffffffffffffffffffffffffffffffffffff1614610cb6576040517f08c379a0000000000000000000000000000000000000000000000000000000008152600401610cad90611e08565b60405180910390fd5b565b60008060009054906101000a900473ffffffffffffffffffffffffffffffffffffffff169050816000806101000a81548173ffffffffffffffffffffffffffffffffffffffff021916908373ffffffffffffffffffffffffffffffffffffffff1602179055508173ffffffffffffffffffffffffffffffffffffffff168173ffffffffffffffffffffffffffffffffffffffff167f8be0079c531659141344cd1fd0a4f28419497f9722a3daafe3b4186f6b6457e060405160405180910390a35050565b600080610da783604051602001610d939190611c8c565b604051602081830303815290604052611165565b9050610dbb610db585610f9a565b82611191565b91505092915050565b60008060009054906101000a900473ffffffffffffffffffffffffffffffffffffffff16905090565b60606000821415610e35576040518060400160405280600181526020017f30000000000000000000000000000000000000000000000000000000000000008152509050610f95565b600082905060005b60008214610e67578080610e50906121b7565b915050600a82610e609190612044565b9150610e3d565b60008167ffffffffffffffff811115610ea9577f4e487b7100000000000000000000000000000000000000000000000000000000600052604160045260246000fd5b6040519080825280601f01601f191660200182016040528015610edb5781602001600182028036833780820191505090505b5090505b60008514610f8e57600182610ef49190612075565b9150600a85610f039190612252565b6030610f0f9190611fee565b60f81b818381518110610f4b577f4e487b7100000000000000000000000000000000000000000000000000000000600052603260045260246000fd5b60200101907effffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff1916908160001a905350600a85610f879190612044565b9450610edf565b8093505050505b919050565b60007fd351a9253491dfef66f53115e9e3afda3b5fdef08a1de6937da91188ec553be560001b82604051602001610fd2929190611d5b565b604051602081830303815290604052805190602001209050919050565b60008030837f21c35dbe1b344a2488cf3321d6ce542f8e9f305544ff09e4993a62319a497c1f60001b60405160200161102a93929190611c44565b6040516020818303038152906040528051906020012060001c9050806040516020016110569190611c13565b6040516020818303038152906040528051906020012060001c915050919050565b60606000611084856111a7565b905060008114156110a75760405180602001604052806000815250915050611156565b808411156110c75760405180602001604052806000815250915050611156565b83831015611110578084846040517f2c4a89fa00000000000000000000000000000000000000000000000000000000815260040161110793929190611e83565b60405180910390fd5b6000848403905060008583039050600082821061112d578261112f565b815b90506040519450601f19601f60208301011685016040528085528087602087018a3c505050505b9392505050565b600033905090565b606081518260405160200161117b929190611bd5565b6040516020818303038152906040529050919050565b600061119f838360006111b2565b905092915050565b6000813b9050919050565b6000806040518060400160405280601081526020017f67363d3d37363d34f03d5260086018f30000000000000000000000000000000081525090506111f685610fef565b9150600061120383611373565b1461123a576040517fcd43efa100000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b6000858251602084016000f59050600073ffffffffffffffffffffffffffffffffffffffff168173ffffffffffffffffffffffffffffffffffffffff1614156112af576040517fbbd2fe8700000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b60008173ffffffffffffffffffffffffffffffffffffffff1685876040516112d79190611b98565b60006040518083038185875af1925050503d8060008114611314576040519150601f19603f3d011682016040523d82523d6000602084013e611319565b606091505b505090508015806113325750600061133085611373565b145b15611369576040517f53de54b900000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b5050509392505050565b6000813b9050919050565b600061139161138c84611edf565b611eba565b905080838252602082019050828560208602820111156113b057600080fd5b60005b858110156113fa57813567ffffffffffffffff8111156113d257600080fd5b8086016113df89826115da565b855260208501945060208401935050506001810190506113b3565b5050509392505050565b600061141761141284611f0b565b611eba565b90508281526020810184848401111561142f57600080fd5b61143a848285612144565b509392505050565b600061145561145084611f0b565b611eba565b90508281526020810184848401111561146d57600080fd5b611478848285612153565b509392505050565b600061149361148e84611f3c565b611eba565b9050828152602081018484840111156114ab57600080fd5b6114b6848285612153565b509392505050565b6000813590506114cd816125af565b92915050565b600082601f8301126114e457600080fd5b81356114f484826020860161137e565b91505092915050565b60008135905061150c816125c6565b92915050565b60008083601f84011261152457600080fd5b8235905067ffffffffffffffff81111561153d57600080fd5b60208301915083600182028301111561155557600080fd5b9250929050565b600082601f83011261156d57600080fd5b813561157d848260208601611404565b91505092915050565b600082601f83011261159757600080fd5b81516115a7848260208601611442565b91505092915050565b600082601f8301126115c157600080fd5b81516115d1848260208601611480565b91505092915050565b6000606082840312156115ec57600080fd5b6115f66060611eba565b9050600061160684828501611667565b600083015250602061161a84828501611667565b602083015250604082013567ffffffffffffffff81111561163a57600080fd5b6116468482850161155c565b60408301525092915050565b600081359050611661816125dd565b92915050565b600081359050611676816125f4565b92915050565b60006020828403121561168e57600080fd5b600061169c848285016114be565b91505092915050565b6000602082840312156116b757600080fd5b600082013567ffffffffffffffff8111156116d157600080fd5b6116dd848285016114d3565b91505092915050565b6000602082840312156116f857600080fd5b6000611706848285016114fd565b91505092915050565b6000806020838503121561172257600080fd5b600083013567ffffffffffffffff81111561173c57600080fd5b61174885828601611512565b92509250509250929050565b60006020828403121561176657600080fd5b600082015167ffffffffffffffff81111561178057600080fd5b61178c84828501611586565b91505092915050565b6000602082840312156117a757600080fd5b600082015167ffffffffffffffff8111156117c157600080fd5b6117cd848285016115b0565b91505092915050565b6000602082840312156117e857600080fd5b600082013567ffffffffffffffff81111561180257600080fd5b61180e848285016115da565b91505092915050565b60006020828403121561182957600080fd5b600061183784828501611652565b91505092915050565b611849816120a9565b82525050565b61186061185b826120a9565b612200565b82525050565b61186f816120bb565b82525050565b61187e816120c7565b82525050565b611895611890826120c7565b612212565b82525050565b60006118a78385611f94565b93506118b4838584612144565b82840190509392505050565b60006118cb82611f6d565b6118d58185611f83565b93506118e5818560208601612153565b6118ee81612310565b840191505092915050565b600061190482611f6d565b61190e8185611f94565b935061191e818560208601612153565b80840191505092915050565b600061193582611f78565b61193f8185611f9f565b935061194f818560208601612153565b61195881612310565b840191505092915050565b600061196e82611f78565b6119788185611fb0565b9350611988818560208601612153565b80840191505092915050565b60006119a1600183611fb0565b91506119ac82612348565b600182019050919050565b60006119c4602683611f9f565b91506119cf82612371565b604082019050919050565b60006119e7600283611fb0565b91506119f2826123c0565b600282019050919050565b6000611a0a600183611fb0565b9150611a15826123e9565b600182019050919050565b6000611a2d602083611f9f565b9150611a3882612412565b602082019050919050565b6000611a50600183611fb0565b9150611a5b8261243b565b600182019050919050565b6000611a73600183611fb0565b9150611a7e82612464565b600182019050919050565b6000611a96602083611f9f565b9150611aa18261248d565b602082019050919050565b6000611ab9600183611fb0565b9150611ac4826124b6565b600182019050919050565b6000611adc602683611fb0565b9150611ae7826124bf565b602682019050919050565b6000611aff601483611f9f565b9150611b0a8261250e565b602082019050919050565b6000611b22600983611fb0565b9150611b2d82612537565b600982019050919050565b6000611b45602583611f9f565b9150611b5082612560565b604082019050919050565b611b648161211d565b82525050565b611b7b611b7682612127565b61222e565b82525050565b611b92611b8d82612137565b612240565b82525050565b6000611ba482846118f9565b915081905092915050565b6000611bbb82866118f9565b9150611bc882848661189b565b9150819050949350505050565b6000611be082611994565b9150611bec8285611b6a565b600482019150611bfb82611b15565b9150611c0782846118f9565b91508190509392505050565b6000611c1e826119da565b9150611c2a828461184f565b601482019150611c39826119fd565b915081905092915050565b6000611c4f82611a43565b9150611c5b828661184f565b601482019150611c6b8285611884565b602082019150611c7b8284611884565b602082019150819050949350505050565b6000611c9782611aac565b9150611ca382846118f9565b915081905092915050565b6000611cb982611acf565b9150611cc58284611963565b9150611cd082611a66565b915081905092915050565b6000611ce78287611b81565b600182019150611cf78286611b81565b600182019150611d078285611b81565b600182019150611d1782846118f9565b915081905095945050505050565b6000602082019050611d3a6000830184611840565b92915050565b6000602082019050611d556000830184611866565b92915050565b6000604082019050611d706000830185611875565b611d7d6020830184611875565b9392505050565b60006020820190508181036000830152611d9e81846118c0565b905092915050565b60006020820190508181036000830152611dc0818461192a565b905092915050565b60006020820190508181036000830152611de1816119b7565b9050919050565b60006020820190508181036000830152611e0181611a20565b9050919050565b60006020820190508181036000830152611e2181611a89565b9050919050565b60006020820190508181036000830152611e4181611af2565b9050919050565b60006020820190508181036000830152611e6181611b38565b9050919050565b6000602082019050611e7d6000830184611b5b565b92915050565b6000606082019050611e986000830186611b5b565b611ea56020830185611b5b565b611eb26040830184611b5b565b949350505050565b6000611ec4611ed5565b9050611ed08282612186565b919050565b6000604051905090565b600067ffffffffffffffff821115611efa57611ef96122e1565b5b602082029050602081019050919050565b600067ffffffffffffffff821115611f2657611f256122e1565b5b611f2f82612310565b9050602081019050919050565b600067ffffffffffffffff821115611f5757611f566122e1565b5b611f6082612310565b9050602081019050919050565b600081519050919050565b600081519050919050565b600082825260208201905092915050565b600081905092915050565b600082825260208201905092915050565b600081905092915050565b60008085851115611fcb57600080fd5b83861115611fd857600080fd5b6001850283019150848603905094509492505050565b6000611ff98261211d565b91506120048361211d565b9250827fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff0382111561203957612038612283565b5b828201905092915050565b600061204f8261211d565b915061205a8361211d565b92508261206a576120696122b2565b5b828204905092915050565b60006120808261211d565b915061208b8361211d565b92508282101561209e5761209d612283565b5b828203905092915050565b60006120b4826120fd565b9050919050565b60008115159050919050565b6000819050919050565b60007fffffffff0000000000000000000000000000000000000000000000000000000082169050919050565b600073ffffffffffffffffffffffffffffffffffffffff82169050919050565b6000819050919050565b600063ffffffff82169050919050565b600060ff82169050919050565b82818337600083830152505050565b60005b83811015612171578082015181840152602081019050612156565b83811115612180576000848401525b50505050565b61218f82612310565b810181811067ffffffffffffffff821117156121ae576121ad6122e1565b5b80604052505050565b60006121c28261211d565b91507fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff8214156121f5576121f4612283565b5b600182019050919050565b600061220b8261221c565b9050919050565b6000819050919050565b60006122278261233b565b9050919050565b600061223982612321565b9050919050565b600061224b8261232e565b9050919050565b600061225d8261211d565b91506122688361211d565b925082612278576122776122b2565b5b828206905092915050565b7f4e487b7100000000000000000000000000000000000000000000000000000000600052601160045260246000fd5b7f4e487b7100000000000000000000000000000000000000000000000000000000600052601260045260246000fd5b7f4e487b7100000000000000000000000000000000000000000000000000000000600052604160045260246000fd5b6000601f19601f8301169050919050565b60008160e01b9050919050565b60008160f81b9050919050565b60008160601b9050919050565b7f6300000000000000000000000000000000000000000000000000000000000000600082015250565b7f4f776e61626c653a206e6577206f776e657220697320746865207a65726f206160008201527f6464726573730000000000000000000000000000000000000000000000000000602082015250565b7fd694000000000000000000000000000000000000000000000000000000000000600082015250565b7f0100000000000000000000000000000000000000000000000000000000000000600082015250565b7f636f6c6f7273206d75737420636f6d6520696e20722c672c62207475706c6573600082015250565b7fff00000000000000000000000000000000000000000000000000000000000000600082015250565b7f7d00000000000000000000000000000000000000000000000000000000000000600082015250565b7f4f776e61626c653a2063616c6c6572206973206e6f7420746865206f776e6572600082015250565b60008082015250565b7f7b2274726169745f74797065223a202244617461204c656e677468222c20227660008201527f616c7565223a0000000000000000000000000000000000000000000000000000602082015250565b7f746f55696e7433325f6f75744f66426f756e6473000000000000000000000000600082015250565b7f80600e6000396000f30000000000000000000000000000000000000000000000600082015250565b7f4d6178206e756d626572206f6620636f6e66696775726174696f6e7320616c6c60008201527f6f7765642e000000000000000000000000000000000000000000000000000000602082015250565b6125b8816120a9565b81146125c357600080fd5b50565b6125cf816120d1565b81146125da57600080fd5b50565b6125e68161211d565b81146125f157600080fd5b50565b6125fd81612137565b811461260857600080fd5b5056fe697066733a2f2f6261666b72656968637a36377976766c6f74626e3478337033357764627064653237726c6469686c7a6f7167326b6c626d653775366c6568786e61a26469706673582212204bcd75b79d17eb3246bb15784438d32ad4baab753191fd9ab516183cb8412e2264736f6c63430008040033';

type ConfiguredGifImageRendererConstructorParams =
  | [signer?: Signer]
  | ConstructorParameters<typeof ContractFactory>;

const isSuperArgs = (
  xs: ConfiguredGifImageRendererConstructorParams,
): xs is ConstructorParameters<typeof ContractFactory> => xs.length > 1;

export class ConfiguredGifImageRenderer__factory extends ContractFactory {
  constructor(...args: ConfiguredGifImageRendererConstructorParams) {
    if (isSuperArgs(args)) {
      super(...args);
    } else {
      super(_abi, _bytecode, args[0]);
    }
  }

  override deploy(
    _gifImageRenderer: PromiseOrValue<string>,
    overrides?: Overrides & { from?: PromiseOrValue<string> },
  ): Promise<ConfiguredGifImageRenderer> {
    return super.deploy(
      _gifImageRenderer,
      overrides || {},
    ) as Promise<ConfiguredGifImageRenderer>;
  }
  override getDeployTransaction(
    _gifImageRenderer: PromiseOrValue<string>,
    overrides?: Overrides & { from?: PromiseOrValue<string> },
  ): TransactionRequest {
    return super.getDeployTransaction(_gifImageRenderer, overrides || {});
  }
  override attach(address: string): ConfiguredGifImageRenderer {
    return super.attach(address) as ConfiguredGifImageRenderer;
  }
  override connect(signer: Signer): ConfiguredGifImageRenderer__factory {
    return super.connect(signer) as ConfiguredGifImageRenderer__factory;
  }

  static readonly bytecode = _bytecode;
  static readonly abi = _abi;
  static createInterface(): ConfiguredGifImageRendererInterface {
    return new utils.Interface(_abi) as ConfiguredGifImageRendererInterface;
  }
  static connect(
    address: string,
    signerOrProvider: Signer | Provider,
  ): ConfiguredGifImageRenderer {
    return new Contract(
      address,
      _abi,
      signerOrProvider,
    ) as ConfiguredGifImageRenderer;
  }
}
