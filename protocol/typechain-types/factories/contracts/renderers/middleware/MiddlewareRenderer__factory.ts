/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */
import type { Provider, TransactionRequest } from '@ethersproject/providers';
import { Contract, ContractFactory, Overrides, Signer, utils } from 'ethers';
import type { PromiseOrValue } from '../../../../common';
import type {
  MiddlewareRenderer,
  MiddlewareRendererInterface,
} from '../../../../contracts/renderers/middleware/MiddlewareRenderer';

const _abi = [
  {
    inputs: [],
    stateMutability: 'nonpayable',
    type: 'constructor',
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
  '0x608060405234801561001057600080fd5b5061002d61002261003260201b60201c565b61003a60201b60201c565b6100fe565b600033905090565b60008060009054906101000a900473ffffffffffffffffffffffffffffffffffffffff169050816000806101000a81548173ffffffffffffffffffffffffffffffffffffffff021916908373ffffffffffffffffffffffffffffffffffffffff1602179055508173ffffffffffffffffffffffffffffffffffffffff168173ffffffffffffffffffffffffffffffffffffffff167f8be0079c531659141344cd1fd0a4f28419497f9722a3daafe3b4186f6b6457e060405160405180910390a35050565b61161a8061010d6000396000f3fe608060405234801561001057600080fd5b506004361061009d5760003560e01c8063715018a611610066578063715018a61461016e57806381612ceb146101785780638da5cb5b1461019657806392348b22146101b4578063f2fde38b146101d25761009d565b8062a85d69146100a257806301ffc9a7146100c057806306fdde03146100f0578063316df61e1461010e57806343c5820c1461013e575b600080fd5b6100aa6101ee565b6040516100b791906111c8565b60405180910390f35b6100da60048036038101906100d59190610ef6565b610216565b6040516100e79190611109565b60405180910390f35b6100f8610290565b6040516101059190611146565b60405180910390f35b61012860048036038101906101239190610f1f565b6102cd565b6040516101359190611146565b60405180910390f35b61015860048036038101906101539190610f1f565b610671565b6040516101659190611124565b60405180910390f35b610176610a15565b005b610180610a29565b60405161018d9190611146565b60405180910390f35b61019e610a66565b6040516101ab91906110ee565b60405180910390f35b6101bc610a75565b6040516101c99190611146565b60405180910390f35b6101ec60048036038101906101e79190610ecd565b610ab2565b005b60007fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff905090565b60007fea0d9bea000000000000000000000000000000000000000000000000000000007bffffffffffffffffffffffffffffffffffffffffffffffffffffffff1916827bffffffffffffffffffffffffffffffffffffffffffffffffffffffff19161480610289575061028882610b36565b5b9050919050565b60606040518060400160405280600a81526020017f4d6964646c657761726500000000000000000000000000000000000000000000815250905090565b606060008383600081811061030b577f4e487b7100000000000000000000000000000000000000000000000000000000600052603260045260246000fd5b9050013560f81c60f81b60f81c905060008160ff1667ffffffffffffffff81111561035f577f4e487b7100000000000000000000000000000000000000000000000000000000600052604160045260246000fd5b60405190808252806020026020018201604052801561038d5781602001602082028036833780820191505090505b50905060005b81518110156104865761040286868080601f016020809104026020016040519081016040528093929190818152602001838380828437600081840152601f19601f820116905080830192505050505050508260146103f1919061132b565b60016103fd91906112d5565b610ba0565b82828151811061043b577f4e487b7100000000000000000000000000000000000000000000000000000000600052603260045260246000fd5b602002602001019073ffffffffffffffffffffffffffffffffffffffff16908173ffffffffffffffffffffffffffffffffffffffff16815250508061047f9061145d565b9050610393565b506000858560148451610499919061132b565b60016104a591906112d5565b9080926104b4939291906112a2565b8080601f016020809104026020016040519081016040528093929190818152602001838380828437600081840152601f19601f82011690508083019250505050505050905060005b825181101561066457600073ffffffffffffffffffffffffffffffffffffffff16838281518110610556577f4e487b7100000000000000000000000000000000000000000000000000000000600052603260045260246000fd5b602002602001015173ffffffffffffffffffffffffffffffffffffffff16146106505760008382815181106105b4577f4e487b7100000000000000000000000000000000000000000000000000000000600052603260045260246000fd5b602002602001015190508073ffffffffffffffffffffffffffffffffffffffff1663316df61e846040518263ffffffff1660e01b81526004016105f79190611124565b60006040518083038186803b15801561060f57600080fd5b505afa158015610623573d6000803e3d6000fd5b505050506040513d6000823e3d601f19601f8201168201806040525081019061064c9190610fa5565b9250505b60008161065d91906112d5565b90506104fc565b5080935050505092915050565b60606000838360008181106106af577f4e487b7100000000000000000000000000000000000000000000000000000000600052603260045260246000fd5b9050013560f81c60f81b60f81c905060008160ff1667ffffffffffffffff811115610703577f4e487b7100000000000000000000000000000000000000000000000000000000600052604160045260246000fd5b6040519080825280602002602001820160405280156107315781602001602082028036833780820191505090505b50905060005b815181101561082a576107a686868080601f016020809104026020016040519081016040528093929190818152602001838380828437600081840152601f19601f82011690508083019250505050505050826014610795919061132b565b60016107a191906112d5565b610ba0565b8282815181106107df577f4e487b7100000000000000000000000000000000000000000000000000000000600052603260045260246000fd5b602002602001019073ffffffffffffffffffffffffffffffffffffffff16908173ffffffffffffffffffffffffffffffffffffffff1681525050806108239061145d565b9050610737565b50600085856014845161083d919061132b565b600161084991906112d5565b908092610858939291906112a2565b8080601f016020809104026020016040519081016040528093929190818152602001838380828437600081840152601f19601f82011690508083019250505050505050905060005b8251811015610a0857600073ffffffffffffffffffffffffffffffffffffffff168382815181106108fa577f4e487b7100000000000000000000000000000000000000000000000000000000600052603260045260246000fd5b602002602001015173ffffffffffffffffffffffffffffffffffffffff16146109f4576000838281518110610958577f4e487b7100000000000000000000000000000000000000000000000000000000600052603260045260246000fd5b602002602001015190508073ffffffffffffffffffffffffffffffffffffffff166343c5820c846040518263ffffffff1660e01b815260040161099b9190611124565b60006040518083038186803b1580156109b357600080fd5b505afa1580156109c7573d6000803e3d6000fd5b505050506040513d6000823e3d601f19601f820116820180604052508101906109f09190610f64565b9250505b600081610a0191906112d5565b90506108a0565b5080935050505092915050565b610a1d610c16565b610a276000610c94565b565b60606040518060400160405280600a81526020017f6d6964646c657761726500000000000000000000000000000000000000000000815250905090565b6000610a70610d58565b905090565b60606040518060400160405280600b81526020017f697066733a2f2f544f444f000000000000000000000000000000000000000000815250905090565b610aba610c16565b600073ffffffffffffffffffffffffffffffffffffffff168173ffffffffffffffffffffffffffffffffffffffff161415610b2a576040517f08c379a0000000000000000000000000000000000000000000000000000000008152600401610b2190611168565b60405180910390fd5b610b3381610c94565b50565b60007f01ffc9a7000000000000000000000000000000000000000000000000000000007bffffffffffffffffffffffffffffffffffffffffffffffffffffffff1916827bffffffffffffffffffffffffffffffffffffffffffffffffffffffff1916149050919050565b6000601482610baf91906112d5565b83511015610bf2576040517f08c379a0000000000000000000000000000000000000000000000000000000008152600401610be9906111a8565b60405180910390fd5b60006c01000000000000000000000000836020860101510490508091505092915050565b610c1e610d81565b73ffffffffffffffffffffffffffffffffffffffff16610c3c610a66565b73ffffffffffffffffffffffffffffffffffffffff1614610c92576040517f08c379a0000000000000000000000000000000000000000000000000000000008152600401610c8990611188565b60405180910390fd5b565b60008060009054906101000a900473ffffffffffffffffffffffffffffffffffffffff169050816000806101000a81548173ffffffffffffffffffffffffffffffffffffffff021916908373ffffffffffffffffffffffffffffffffffffffff1602179055508173ffffffffffffffffffffffffffffffffffffffff168173ffffffffffffffffffffffffffffffffffffffff167f8be0079c531659141344cd1fd0a4f28419497f9722a3daafe3b4186f6b6457e060405160405180910390a35050565b60008060009054906101000a900473ffffffffffffffffffffffffffffffffffffffff16905090565b600033905090565b6000610d9c610d9784611208565b6111e3565b905082815260208101848484011115610db457600080fd5b610dbf8482856113f9565b509392505050565b6000610dda610dd584611239565b6111e3565b905082815260208101848484011115610df257600080fd5b610dfd8482856113f9565b509392505050565b600081359050610e14816115b6565b92915050565b600081359050610e29816115cd565b92915050565b60008083601f840112610e4157600080fd5b8235905067ffffffffffffffff811115610e5a57600080fd5b602083019150836001820283011115610e7257600080fd5b9250929050565b600082601f830112610e8a57600080fd5b8151610e9a848260208601610d89565b91505092915050565b600082601f830112610eb457600080fd5b8151610ec4848260208601610dc7565b91505092915050565b600060208284031215610edf57600080fd5b6000610eed84828501610e05565b91505092915050565b600060208284031215610f0857600080fd5b6000610f1684828501610e1a565b91505092915050565b60008060208385031215610f3257600080fd5b600083013567ffffffffffffffff811115610f4c57600080fd5b610f5885828601610e2f565b92509250509250929050565b600060208284031215610f7657600080fd5b600082015167ffffffffffffffff811115610f9057600080fd5b610f9c84828501610e79565b91505092915050565b600060208284031215610fb757600080fd5b600082015167ffffffffffffffff811115610fd157600080fd5b610fdd84828501610ea3565b91505092915050565b610fef81611385565b82525050565b610ffe81611397565b82525050565b600061100f8261126a565b6110198185611280565b93506110298185602086016113f9565b61103281611504565b840191505092915050565b600061104882611275565b6110528185611291565b93506110628185602086016113f9565b61106b81611504565b840191505092915050565b6000611083602683611291565b915061108e82611515565b604082019050919050565b60006110a6602083611291565b91506110b182611564565b602082019050919050565b60006110c9601583611291565b91506110d48261158d565b602082019050919050565b6110e8816113ef565b82525050565b60006020820190506111036000830184610fe6565b92915050565b600060208201905061111e6000830184610ff5565b92915050565b6000602082019050818103600083015261113e8184611004565b905092915050565b60006020820190508181036000830152611160818461103d565b905092915050565b6000602082019050818103600083015261118181611076565b9050919050565b600060208201905081810360008301526111a181611099565b9050919050565b600060208201905081810360008301526111c1816110bc565b9050919050565b60006020820190506111dd60008301846110df565b92915050565b60006111ed6111fe565b90506111f9828261142c565b919050565b6000604051905090565b600067ffffffffffffffff821115611223576112226114d5565b5b61122c82611504565b9050602081019050919050565b600067ffffffffffffffff821115611254576112536114d5565b5b61125d82611504565b9050602081019050919050565b600081519050919050565b600081519050919050565b600082825260208201905092915050565b600082825260208201905092915050565b600080858511156112b257600080fd5b838611156112bf57600080fd5b6001850283019150848603905094509492505050565b60006112e0826113ef565b91506112eb836113ef565b9250827fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff038211156113205761131f6114a6565b5b828201905092915050565b6000611336826113ef565b9150611341836113ef565b9250817fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff048311821515161561137a576113796114a6565b5b828202905092915050565b6000611390826113cf565b9050919050565b60008115159050919050565b60007fffffffff0000000000000000000000000000000000000000000000000000000082169050919050565b600073ffffffffffffffffffffffffffffffffffffffff82169050919050565b6000819050919050565b60005b838110156114175780820151818401526020810190506113fc565b83811115611426576000848401525b50505050565b61143582611504565b810181811067ffffffffffffffff82111715611454576114536114d5565b5b80604052505050565b6000611468826113ef565b91507fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff82141561149b5761149a6114a6565b5b600182019050919050565b7f4e487b7100000000000000000000000000000000000000000000000000000000600052601160045260246000fd5b7f4e487b7100000000000000000000000000000000000000000000000000000000600052604160045260246000fd5b6000601f19601f8301169050919050565b7f4f776e61626c653a206e6577206f776e657220697320746865207a65726f206160008201527f6464726573730000000000000000000000000000000000000000000000000000602082015250565b7f4f776e61626c653a2063616c6c6572206973206e6f7420746865206f776e6572600082015250565b7f746f416464726573735f6f75744f66426f756e64730000000000000000000000600082015250565b6115bf81611385565b81146115ca57600080fd5b50565b6115d6816113a3565b81146115e157600080fd5b5056fea2646970667358221220ef318ade37802be57f813a081ed984d6b9b1a3c2faf979614fd05197ba48fec564736f6c63430008040033';

type MiddlewareRendererConstructorParams =
  | [signer?: Signer]
  | ConstructorParameters<typeof ContractFactory>;

const isSuperArgs = (
  xs: MiddlewareRendererConstructorParams,
): xs is ConstructorParameters<typeof ContractFactory> => xs.length > 1;

export class MiddlewareRenderer__factory extends ContractFactory {
  constructor(...args: MiddlewareRendererConstructorParams) {
    if (isSuperArgs(args)) {
      super(...args);
    } else {
      super(_abi, _bytecode, args[0]);
    }
  }

  override deploy(
    overrides?: Overrides & { from?: PromiseOrValue<string> },
  ): Promise<MiddlewareRenderer> {
    return super.deploy(overrides || {}) as Promise<MiddlewareRenderer>;
  }
  override getDeployTransaction(
    overrides?: Overrides & { from?: PromiseOrValue<string> },
  ): TransactionRequest {
    return super.getDeployTransaction(overrides || {});
  }
  override attach(address: string): MiddlewareRenderer {
    return super.attach(address) as MiddlewareRenderer;
  }
  override connect(signer: Signer): MiddlewareRenderer__factory {
    return super.connect(signer) as MiddlewareRenderer__factory;
  }

  static readonly bytecode = _bytecode;
  static readonly abi = _abi;
  static createInterface(): MiddlewareRendererInterface {
    return new utils.Interface(_abi) as MiddlewareRendererInterface;
  }
  static connect(
    address: string,
    signerOrProvider: Signer | Provider,
  ): MiddlewareRenderer {
    return new Contract(address, _abi, signerOrProvider) as MiddlewareRenderer;
  }
}
